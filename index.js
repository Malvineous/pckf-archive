const fs = require('fs');
const whiskers = require('whiskers');
const parseBBCode = require('./bbcode.js');
const fixURLs = require('./urlfix.js');

const INPUT_DIR = './input/';
const OUTPUT_DIR = './public/';
const OUTPUT_DIR_AVATARS = 'avatars/';

// At least this many posts is needed to flag the thread as 'hot'.
const HOT_THREAD_POST_COUNT = 20;

// This will become a list of URLs we aren't sure whether we need to update or
// not.
let unknownURLs = [];

let overrides = require('./overrides.js');
// Parse all the BBCode and update any URLs found in any signatures
for (let user of Object.keys(overrides.signatures)) {
	for (let s of overrides.signatures[user]) {
		// If we don't know what the original one was, just use the one we have.
		// This will get it split off from the 'content' property to the 'signature'
		// one so that we can properly separate it from the post content.
		if (!s.original) s.original = s.tail;
		s.original = parseBBCode(s.original);
		s.original = fixURLs(s.original, unknownURLs);
	}
}

function getJSON(filename)
{
	return new Promise((resolve, reject) => {
		fs.readFile(INPUT_DIR + filename + '.json', (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(JSON.parse(data));
		});
	});
}

async function runTemplate(templateFilename, htmlFilename, content)
{
	const template = await new Promise((resolve, reject) => {
		fs.readFile('templates/' + templateFilename + '.html', (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(data);
		});
	});

	const htmlContent = whiskers.render(template, content);

	return await new Promise((resolve, reject) => {
		fs.writeFile(OUTPUT_DIR + htmlFilename, htmlContent, (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve();
		});
	});
}


async function generateThreadPage(root)
{
	const posts = await getJSON(`forum-${root.forum.id}.thread-${root.forum.thread.id}`);

	root.forum.thread.posts = posts.sort((a, b) => {
		// Sort by ID rather than by date, because the 'Anonymous' lost posts all
		// have an old date.
		return a.id - b.id;
	});

	for (let post of root.forum.thread.posts) {
		const user = root.users[post.author_id];

		// Trim any known signature off the post and put it in a separate block.
		const sigs = overrides.signatures[post.author_name];
		if (sigs) {
			for (let sigInfo of sigs) {
				if (!sigInfo.tail) {
					if (!sigInfo._tail_alert) {
						console.log(`Signature for "${post.author_name}" missing "tail"`);
						sigInfo._tail_alert = true; // only show message once per user
					}
					continue;
				}
				const tail = post.content.substr(-sigInfo.tail.length);
				if (tail === sigInfo.tail) {
					// Tail matches, crop it
					post.content = post.content.substr(0, post.content.length - sigInfo.tail.length);
					post.signature = sigInfo.original;
					break;
				}
			}
		}

		// Expand the BBCode into HTML and replace any old links with pointers to
		// archives.
		post.content = parseBBCode(post.content);
		post.content = fixURLs(post.content, unknownURLs);

		// Add avatar URL
		if (overrides.avatars[post.author_name]) {
			// Use the URL in overrides.js first
			post.avatar_url = fixURLs(overrides.avatars[post.author_name], unknownURLs);
		} else {
			const avatarURL = user.avatarURL;
			if (avatarURL) {
				// Otherwise use the one in the INPUT_DIR if it exists
				const cachedFile = `avatar-${post.author_id}.png`;
				if (fs.existsSync(INPUT_DIR + cachedFile)) {
					post.avatar_url = OUTPUT_DIR_AVATARS + cachedFile;
				} else {
					// Or use the original URL if all else fails.  Note that Tapatalk
					// seems to have removed all these.
					post.avatar_url = avatarURL;
				}
			}
		}

		// Format the date
		// TODO: Figure out the timezone
		post.timestamp_pretty = (new Date(post.timestamp)).toUTCString();

		post.userPostCount = user.postCount;

	}
	await runTemplate('thread', `forum-${root.forum.id}.thread-${root.forum.thread.id}.html`, root);
}

async function generateThreadList(root)
{
	root.forum.threads = await getJSON(`forum-${root.forum.id}`);

	// Generate all the thread pages first so the posts get loaded for later.
	for (const thread of root.forum.threads) {
		root.forum.thread = thread;
		await generateThreadPage(root);
		delete root.forum.thread;

		// Add some more fields for the thread list
		thread.postCount = thread.posts.length;
		thread.replyCount = thread.posts.length - 1;

		thread.firstReply = thread.posts[0];
		thread.lastReply = thread.posts[thread.posts.length - 1];

		thread.hot = thread.posts.length > HOT_THREAD_POST_COUNT;
	}

	// Now all the posts are loaded we can generate the list of threads, which
	// will have enough available info to calculate things like the number of
	// posts per thread.
	await runTemplate('forum', `forum-${root.forum.id}.html`, root);
}

async function generateIndex()
{
	const index = await getJSON('index');
	index.users = await getJSON('users');
	//console.log(index);

	for (const forum of index.forums) {
		let root = {
			...index,
			forum: forum,
		};
		delete root.forums;
		await generateThreadList(root);

		forum.threadCount = forum.threads.length;
		forum.postCount = 0;
		for (const thread of forum.threads) {
			forum.postCount += thread.posts.length;
		}
		forum.lastThread = forum.threads.reduce((p, v) => {
			return p.lastReply.timestamp > v.lastReply.timestamp ? p : v;
		});
	}

	// Copy the avatar images across
	fs.mkdir(OUTPUT_DIR_AVATARS, (err) => {
		if (err) console.error(`Unable to create folder "${OUTPUT_DIR_AVATARS}":`, err);
	});
	for (const userId of Object.keys(index.users)) {
		const user = index.users[userId];
		if (user.avatarURL) {
			fs.copyFile(`${INPUT_DIR}avatar-${user.id}.png`, `${OUTPUT_DIR_AVATARS}avatar-${userId}.png`, (err) => {});
		}
	}

	await runTemplate('index', `index.html`, index);
}

async function run()
{
	await generateIndex();

	console.log('URLs found in posts of unknown status:');
	for (const url of unknownURLs.sort()) {
		console.log(url);
	}
	console.log(' >>', unknownURLs.length, 'unknown URLs');
}

run();

const fs = require('fs');

// These URLs are still value and don't need to be changed
let whitelistPrefix = [
	'http://cc314.shikadi.net',
	'http://maps.google.com',
	'http://msdn.microsoft.com',
	'http://news.bbc.co.uk',
	'http://synduo.deviantart.com',
	'http://upload.wikimedia.org',
	'http://web.archive.org',
	'http://www.angelfire.com/mech/roboblue/',
	'http://www.deviantart.com',
	'http://www.google.com',
	'http://www.imdb.com',
	'http://www.keenmodding.org',
	'http://www.shikadi.net/',
	'http://www.shikadi.net/keenwiki/',
	'http://www.winamp.com',
	'http://www.youtube.com',
	'http://youtube.com',

	// Dead URLs.  Listing them here will prevent them from being replaced even if
	// we have a local mirror.
	'http://apogeegames.com/beta2.html',
	'http://cgi.ebay', // won't work but nowhere else to point it
];

// These URLs have moved
let urlRewrite = {
	'www.classicgaming.com/cc314': s => s.split('www.classicgaming.com/cc314').join('cc314.shikadi.net'),
	'wiki.commanderkeen.org': s => s.split('wiki.commanderkeen.org').join('www.shikadi.net/keenwiki'),
	'www.sfprod.cjb.net': s => s.split('www.sfprod.cjb.net').join('sfprod.shikadi.net'),
	'www.student.tue.nl/p/f.a.m.smeijers/sfp': s => s.split('www.student.tue.nl/p/f.a.m.smeijers/sfp').join('sfprod.shikadi.net'),
	'www.student.tue.nl/u/a.f.smeijers/sfp': s => s.split('www.student.tue.nl/u/a.f.smeijers/sfp').join('sfprod.shikadi.net'),

	// Remove the 'www.' prefix from spatang.com so we only need one mirror folder
	'www.spatang.com': s => s.split('www.spatang.com').join('spatang.com'),

	'https://groups.tapatalk-cdn.com/smilies/27135/1534636883.9457-smiley.gif?ttinline=true':
		s => s.replace(
			/https:\/\/groups\.tapatalk-cdn\.com\/smilies\/27135\/1534636883\.9457-smiley\.gif\?ttinline=true/g,
			'http://cc314.shikadi.net/msgboard/emotikeen-smile.gif'
		),
};

function findURLs(s)
{
	let urls = [];
	const matches = s.match(/(https?:\/\/[^ \"<]+)/g);
	for (let i = 0; i < (matches && matches.length) || 0; i++) {
		const url = matches[i];
		let skipURL = false;
		for (const wl of whitelistPrefix) {
			if (url.startsWith(wl)) {
				skipURL = true;
				break;
			}
		}
		if (skipURL) continue;
		urls.push(url);
	}
	return urls;
}

function fixURLs(s, unknownURLs = [])
{
	// Copy all the URLs to the tooltips, so the original URL will show when
	// hovering over links.
	s = s.replace(/<(a href|img src)=\"([^\"]+)\"/g, (match, p1, p2) => `<${p1}="${p2}" title="base64://` + Buffer.from(p2).toString('base64') + `"`);

	// Replace any URLs known to have moved
	for (const urlSrc of Object.keys(urlRewrite)) {
		const fn = urlRewrite[urlSrc];
		s = fn(s);
	}

	// Find any remaining URLs
	const urls = findURLs(s);
	for (const url of urls) {
		// See if the URL has been mirrored locally
		const match = /https?:\/\/([^ "<]+)/.exec(url);
		let localMirror = false;
		if (match) {
			const domainpath = match[1].split('%20').join(' ');
			const path = `mirror/${domainpath}`;
			const localpath = './public/' + path;
			if (fs.existsSync(localpath)) {
				// Exists, use local version
				try {
					if (fs.lstatSync(localpath).isFile()) {
						// But only if it's a file, not a folder
						s = s.split(url).join(path);
						localMirror = true;
					}
				} catch (e) {
					// File not found, ignore
				}
			}
		}

		// Any that weren't mirrored should be added to the unknown list
		if (!localMirror) {
			if (!unknownURLs.includes(url)) {
				unknownURLs.push(url);
			}
		}
	}

	// Convert the base64 escaped tooltips back to URLs
	s = s.replace(/\"base64:\/\/([^\"]+)\"/g, (match, p1) => `"` + Buffer.from(p1, 'base64').toString('ascii') + `"`);

	// Remove tooltips where the URL is unchanged
	s = s.replace(/<(a href|img src)=\"([^\"]+)\" title=\"([^\"]+)\"/g, (match, p1, p2, p3) => `<${p1}="${p2}"` + (p2 === p3 ? '' : ` title="${p3}"`));
	return s;
}

module.exports = fixURLs;

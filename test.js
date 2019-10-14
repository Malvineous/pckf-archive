const assert = require('assert');

const parseBBCode = require('./bbcode.js');
const fixURLs = require('./urlfix.js');

describe('BBCode tests', () => {
	it('should handle [hr]', () => {
		assert.equal(
			parseBBCode('[hr]'),
			'<hr/>'
		);
	});

	it('should handle [url=x]y[/url]', () => {
		assert.equal(
			parseBBCode('[url=http://example.com]Example[/url]'),
			'<a href="http://example.com">Example</a>'
		);
	});

	it('should handle [url="x"]y[/url]', () => {
		assert.equal(
			parseBBCode('[url="http://example.com"]Example[/url]'),
			'<a href="http://example.com">Example</a>'
		);
	});

	it('should handle two [url]', () => {
		assert.equal(
			parseBBCode('[url=http://example.com/1]Example1[/url] and [url=http://example.com/2]Example2[/url]'),
			'<a href="http://example.com/1">Example1</a> and <a href="http://example.com/2">Example2</a>'
		);
	});

	it('should handle [url] without protocol', () => {
		assert.equal(
			parseBBCode('[url=example.com]Example[/url]'),
			'<a href="http://example.com">Example</a>'
		);
	});

	it('should handle [img]x[/img]', () => {
		assert.equal(
			parseBBCode('[img]http://example.com[/img]'),
			'<img src="http://example.com" />'
		);
	});

	it('should handle two [img]x[/img]', () => {
		assert.equal(
			parseBBCode('[img]http://example.com/1[/img] and [img]http://example.com/2[/img]'),
			'<img src="http://example.com/1" /> and <img src="http://example.com/2" />'
		);
	});

	it('should handle [img] without protocol', () => {
		assert.equal(
			parseBBCode('[img]example.com[/img]'),
			'<img src="http://example.com" />'
		);
	});

	it('should handle [img] inside [url]', () => {
		assert.equal(
			parseBBCode('[url=example.com][img]img.example.com[/img][/url]'),
			'<a href="http://example.com"><img src="http://img.example.com" /></a>'
		);
	});

	it('should handle [img] inside [url] twice', () => {
		assert.equal(
			parseBBCode('[url=example.com][img]img.example.com[/img][/url] and [url=example.com/2][img]img.example.com/2[/img][/url]'),
			'<a href="http://example.com"><img src="http://img.example.com" /></a> and <a href="http://example.com/2"><img src="http://img.example.com/2" /></a>'
		);
	});

	it('should handle [quote]', () => {
		assert.equal(
			parseBBCode('[quote]test[/quote]'),
			'<blockquote>test</blockquote>'
		);
	});

	it('should handle [size]', () => {
		assert.equal(
			parseBBCode('[size=2]test[/size]'),
			'<h2>test</h2>'
		);
		assert.equal(
			parseBBCode('one[size=4]test[/size]two'),
			'one<h4>test</h4>two'
		);
	});

});

describe('URL fixups', () => {
	it(':dopefish:', () => {
		assert.equal(
			fixURLs(parseBBCode('[img]http://www.classicgaming.com/cc314/msgboard/emotikeen-dopefish.gif[/img]')),
			'<img src="http://cc314.shikadi.net/msgboard/emotikeen-dopefish.gif" title="http://www.classicgaming.com/cc314/msgboard/emotikeen-dopefish.gif" />'
		);
	});

	it('original URL is set as tooltip in links', () => {
		assert.equal(
			fixURLs('<a href="http://wiki.commanderkeen.org/test">Example</a>'),
			'<a href="http://www.shikadi.net/keenwiki/test" title="http://wiki.commanderkeen.org/test">Example</a>'
		);
	});

	it('tooltip is dropped if URL is unchanged in links', () => {
		assert.equal(
			fixURLs('<a href="http://cc314.shikadi.net">Example</a>'),
			'<a href="http://cc314.shikadi.net">Example</a>'
		);
	});

	it('original URL is set as tooltip in images', () => {
		assert.equal(
			fixURLs('<img src="http://wiki.commanderkeen.org/test" />'),
			'<img src="http://www.shikadi.net/keenwiki/test" title="http://wiki.commanderkeen.org/test" />'
		);
	});

	it('tooltip is dropped if URL is unchanged in links', () => {
		assert.equal(
			fixURLs('<img src="http://cc314.shikadi.net" />'),
			'<img src="http://cc314.shikadi.net" />'
		);
	});

	it('locally mirrored file is used in place of old URL', () => {
		assert.equal(
			fixURLs('<img src="http://i91.photobucket.com/albums/k284/KeegTech/WarholDopefishPNG2.png" />'),
			'<img src="mirror/i91.photobucket.com/albums/k284/KeegTech/WarholDopefishPNG2.png" title="http://i91.photobucket.com/albums/k284/KeegTech/WarholDopefishPNG2.png" />'
		);
	});

	it('locally mirrored file is used in place of old URL with other img first', () => {
		assert.equal(
			fixURLs('<img src="http://cc314.shikadi.net" /><img src="http://i91.photobucket.com/albums/k284/KeegTech/WarholDopefishPNG2.png" />'),
			'<img src="http://cc314.shikadi.net" /><img src="mirror/i91.photobucket.com/albums/k284/KeegTech/WarholDopefishPNG2.png" title="http://i91.photobucket.com/albums/k284/KeegTech/WarholDopefishPNG2.png" />'
		);
	});

	it('only locally mirrored file is used in similar URLs', () => {
		assert.equal(
			fixURLs(parseBBCode('[url=http://www.jazz2online.com/jcs94/images/screen9.jpg][img]http://www.jazz2online.com/jcs94/images/screen1t.jpg[/img][/url][url=http://www.jazz2online.com/jcs94/images/screen8.jpg][img]http://www.jazz2online.com/jcs94/images/screen2t.jpg[/img][/url][url=http://www.jazz2online.com/jcs94/images/screen7.jpg][img]http://www.jazz2online.com/jcs94/images/screen3t.jpg[/img][/url] [url=http://www.jazz2online.com/jcs94/]www.jazz2online.com/jcs94/[/url]')),
			'<a href="http://www.jazz2online.com/jcs94/images/screen9.jpg"><img src="mirror/www.jazz2online.com/jcs94/images/screen1t.jpg" title="http://www.jazz2online.com/jcs94/images/screen1t.jpg" /></a><a href="http://www.jazz2online.com/jcs94/images/screen8.jpg"><img src="mirror/www.jazz2online.com/jcs94/images/screen2t.jpg" title="http://www.jazz2online.com/jcs94/images/screen2t.jpg" /></a><a href="http://www.jazz2online.com/jcs94/images/screen7.jpg"><img src="mirror/www.jazz2online.com/jcs94/images/screen3t.jpg" title="http://www.jazz2online.com/jcs94/images/screen3t.jpg" /></a> <a href="http://www.jazz2online.com/jcs94/">www.jazz2online.com/jcs94/</a>'
		);
	});

	it('locally mirrored image in link is replaced', () => {
		assert.equal(
			fixURLs(parseBBCode('[url=http://spikenexus.toxicsheep.com/pccw/][img]http://spikenexus.toxicsheep.com/pccw/imgs/links/pccwsml.gif[/img][/url]')),
			'<a href="http://spikenexus.toxicsheep.com/pccw/"><img src="mirror/spikenexus.toxicsheep.com/pccw/imgs/links/pccwsml.gif" title="http://spikenexus.toxicsheep.com/pccw/imgs/links/pccwsml.gif" /></a>'
		);
	});

/*
	it('internal links - original games', () => {
		assert.equal(
			fixURLs(parseBBCode('[url=http://p072.ezboard.com/fpubliccommanderkeenforumtheoriginalcommanderkeenga.showMessage?topicID=591.topic]test[/url]')),
			'<a href="forum-1.thread-591.html" title="http://p072.ezboard.com/fpubliccommanderkeenforumtheoriginalcommanderkeenga.showMessage?topicID=591.topic">test</a>'
		);
	});

	it('internal links - original games', () => {
		assert.equal(
			fixURLs(parseBBCode('[url=http://p072.ezboard.com/fpubliccommanderkeenforumtheclassics.showMessage?topicID=397.topic]test[/url]')),
			'<a href="forum-11.thread-397.html" title="http://p072.ezboard.com/fpubliccommanderkeenforumtheclassics.showMessage?topicID=397.topic">test</a>'
		);
	});
*/
});

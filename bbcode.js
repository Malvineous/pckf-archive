function parseBBCode(s)
{
	s = s.replace(/\[url="?([^\]"]+)"?\](.*?)\[\/url\]/g, (match, p1, p2, offset, string) => {
		if (p1.indexOf('://') < 0) p1 = 'http://' + p1;
		return `<a href="${p1}">${p2}</a>`;
	});

	s = s.replace(/\[img\]([^\[]+)\[\/img\]/g, (match, p1, offset, string) => {
		if (p1.indexOf('://') < 0) p1 = 'http://' + p1;
		return `<img src="${p1}" />`;
	});

	s = s.replace(/\[hr\]/g, '<hr/>');
	s = s.replace(/\[(\/?)quote\]/g, (match, p1) => `<${p1}blockquote>`);
	s = s.replace(/\[(\/?)center\]/g, (match, p1) => `<center>`);

	s = s.replace(/\[size=(.?)\](.*?)\[\/size\]/g, (match, p1, p2) => `<h${p1}>${p2}</h${p1}>`);

	s = s.replace(/\[pre\](.*?)\[\/pre\]/g, (match, p1) => {
		p1 = p1.split('&lt;!--EZCODE BOLD START--&gt;&lt;strong&gt;').join('<strong>');
		p1 = p1.split('&lt;/strong&gt;&lt;!--EZCODE BOLD END--&gt;').join('</strong>');

		return `<code>${p1}</code>`;
	});

	return s;
}

module.exports = parseBBCode;

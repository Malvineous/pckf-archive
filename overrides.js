module.exports = {
	avatars: {
		// These URLs will be automatically changed to the local ./mirror/ folder
		// if the files exist there.
		'Levelass': 'http://img.photobucket.com/albums/v499/Nevad/Vortidance.gif',
		'KeenRush': 'http://www.keengrid.net/keenrush/keenrush.gif',
	},
	signatures: {
		// The 'tail' content is removed from the end of each post if present, and
		// replaced with the 'original' content.  Not that the 'tail' values are
		// inspected *before* any BBCode or URL replacement, so must match the
		// content from the input JSON exactly.
		// The 'original' content can have BBCode and old URLs in it as these are
		// replaced in the same way post content is, so the original URLs can all
		// be used here.
		'0 UNFLEEXABLE 0': [
			{
				tail: '[img]http://www.geocities.com/apogeekeen/silly.txt[/img] &gt; Hello Kiddies! I\'m Silly the Ghost!',
				// Unknown original, will just reuse 'tail'
			},
		],
		'Battleguy01': [
			{
				original: '<!--EZCODE IMAGE START--><img src="http://i94.photobucket.com/albums/l115/battleguy01/sig_omega.jpg"><!--EZCODE IMAGE END-->',
			},
		],
		'DaVince21': [
			{
				tail: '____________<br />Don\'t see me as an ordinary man.<br />Even though I am an ordinary man.<br /><br />Ah, [url=http://DaVince.sitesled.com/]site.[/url]<br />Oh, and [url=http://www.tengusoft.net/]Team[/url].',
				// Unknown original, will just reuse 'tail'
			},
			{
				tail: '____________<br />Don\'t think of me as an ordinary man.<br /><br />Even though I am an ordinary man.<br /><br />Ah, [url=http://DaVince.sitesled.com/]site.[/url]',
				original: '____________<br>Don\'t think of me as an ordinary man.<br><br>Even though I am an ordinary man.<br><br>Ah, <a rel="nofollow" href="http://DaVince.sitesled.com/">site.</a>',
			},
			{
				tail: '____________<br />I have a boring signature.<br /><br />...<br />Ah, [url=http://DaVince.sitesled.com/]site[/url].',
			},
		],
		'Djaser': [
			{
				tail: '-----------------<br />[img]http://jamba.nl/storage/view/335/0/cr/CrazyFrog___Axel_F_Rocket.gif[/img]<br />Jamster! rules!',
			},
			{
				tail: '-----------------<br />[img]http://www.jamster.co.uk/s/jcw/img/logo_jamster_navi.gif[/img][img]http://www.jamster.co.uk/storage/view/335/0/cr/CrazyFrog___Axel_F_Falling.gif[/img]',
			},
		],
		'Dreams': [
			{
				original: '<img src="http://members1.chello.nl/~j.demeij/keenav.gif"> <a rel="nofollow" href="http://www.64kpixels.net"><strong>www.64kpixels.net</strong></a>',
			},
		],
		'ElecDude33': [
			{
				original: '------------------<br>www.ericmushroomwilson.co.uk My website is going to go back online :)<br><!--EZCODE LINK START--><a href="http://ericmushroom.livejournal.com/" target="top">My stupid journal thing</a><!--EZCODE LINK END-->',
			},
			{
				tail: '------------------<br />[url=http://www.ericmushroomwilson.co.uk/] My website[/url]<br />[url=http://ericmushroom.livejournal.com/]My stupid journal thing[/url]',
			},
		],
		'Flaose': [
			{
				tail: '--------------------<br />[url=http://www.classicgaming.com/cc314/]Cerebral Cortex 314[/url] - For All of your Commander Keen Needs.<br />[url=http://www.classicgaming.com/cc314/dave/joes.html]Eat at Joes[/url]',
				original: '--------------------<br><!--EZCODE LINK START--><a href="http://www.classicgaming.com/cc314/">Cerebral Cortex 314</a><!--EZCODE LINK END--> - For All of your Commander Keen Needs.<br><!--EZCODE LINK START--><a href="http://www.classicgaming.com/cc314/dave/joes.html">Eat at Joes</a><!--EZCODE LINK END-->',
			},
		],
		'Frenkel': [
			{
				tail: 'Groeten van Frenkel<br />Visit [url=http://www.sfprod.cjb.net]The Official S&amp;F Prod. Homepage[/url]',
				original: 'Groeten van Frenkel<br>Visit <!--EZCODE LINK START--><a href="http://www.sfprod.cjb.net">The Official S&amp;F Prod. Homepage</a><!--EZCODE LINK END-->',
			},
		],
		'Galaxieretter': [
			{
				tail: '-----------------------<br />The end of this post. You may stop reading now.',
				original: '-----------------------<br>The end of this post. You may stop reading now.',
			},
		],
		'Genius314': [
			{
				tail: '-Genius314<br />[url=http://planetck.spatang.com]PlanetCK[/url]',
				original: '<!--EZCODE UNDERLINE START--><span style="text-decoration:underline">-Genius314</span><!--EZCODE UNDERLINE END-->',
			},
		],
		'KeegTech': [
			{
				tail: '[img]http://i91.photobucket.com/albums/k284/KeegTech/WarholDopefishPNG2.png[/img]',
				original: '<!--EZCODE IMAGE START--><img src="http://i91.photobucket.com/albums/k284/KeegTech/WarholDopefishPNG2.png" style="border:0;"><!--EZCODE IMAGE END-->',
			},
		],
		'KeenEmpire': [
			{
				tail: '[quote]<b><i>Quote:</i></b>[hr]Just remember that this is the year of the elite devil.<br /><br />1337 + 666 = 2003[hr][/quote][img]http://img259.imageshack.us/img259/3852/sheepsmall0sf.jpg[/img] <br />[url=http://trailers.apple.com/trailers/independent/blacksheep/trailer/]trailers.apple.com/trailers/independent/blacksheep/trailer/[/url]',
				original: '<blockquote><strong><em>Quote:</em></strong><hr>Just remember that this is the year of the elite devil.<br><br>1337 + 666 = 2003<hr></blockquote><img src="http://img259.imageshack.us/img259/3852/sheepsmall0sf.jpg"> <br><a rel="nofollow" href="http://trailers.apple.com/trailers/independent/blacksheep/trailer/">trailers.apple.com/trailers/independent/blacksheep/trailer/</a>',
			},
			{
				tail: '[quote]<b><i>Quote:</i></b>[hr]Just remember that this is the year of the elite devil.<br /><br />1337 + 666 = 2003[hr][/quote]<br /><br />\"God is love.\" 1 john 4:8<br />\"Love is not jealous.\" 1 corinthians 13:4<br />\"I, the Lord thy God, am a jealous god.\" exodus 20:5<br /><br />[img]http://img259.imageshack.us/img259/3852/sheepsmall0sf.jpg[/img] <br />[url=http://trailers.apple.com/trailers/independent/blacksheep/trailer/]trailers.apple.com/trailers/independent/blacksheep/trailer/[/url]',
			},
			{
				tail: '\"God is love.\" 1 john 4:8<br />\"Love is not jealous.\" 1 corinthians 13:4<br />\"I, the Lord thy God, am a jealous god.\" exodus 20:5<br /><br />[img]http://img259.imageshack.us/img259/3852/sheepsmall0sf.jpg[/img] <br />[url=http://trailers.apple.com/trailers/independent/blacksheep/trailer/]trailers.apple.com/trailers/independent/blacksheep/trailer/[/url]',
			},
		],
		'KeenRush': [
			{
				tail: '3D Realms: "Do you think there\'ll ever be a sequel to your game(s)?"<br /><b>Tom Hall</b>: "<i>If</i> I owned Keen, there sure would be. I <b>don\'t consider</b> that GBA game canon by any means."',
				original: '<!--EZCODE FONT START--><span style="font-size:xx-small;">3D Realms: "Do you think there\'ll ever be a sequel to your game(s)?"<br><!--EZCODE BOLD START--><strong>Tom Hall</strong><!--EZCODE BOLD END-->: "<!--EZCODE ITALIC START--><em>If</em><!--EZCODE ITALIC END--> I owned Keen, there sure would be. I <!--EZCODE BOLD START--><strong>don\'t consider</strong><!--EZCODE BOLD END--> that GBA game canon <!--EZCODE UNDERLINE START--><span style="text-decoration:underline">by any means</span><!--EZCODE UNDERLINE END-->."</span><!--EZCODE FONT END-->',
			},
			{
				tail: '<b>Eat your veggies!</b>',
			},
			{
				tail: '<b>\"For years they studied, collected, catalogued. When they had learned all that they could, they began to modify.\"</b> <i>3001: The final Odyssey</i>',
			},
			{
				tail: '<b>We want Keen Chronicles!</b>',
			},
		],
		'LevelLord00': [
			{
				tail: 'Szevvy Forever!<br />And Spleen never!<br /><br />[img]http://img.photobucket.com/albums/v410/Gannalev/rcwn.jpg[/img]<br /><br />"No one should be here."<br />-Levellord',
				original: 'Szevvy Forever!<br>And Spleen never!<br><br><!--EZCODE IMAGE START--><img src="http://img.photobucket.com/albums/v410/Gannalev/rcwn.jpg"><!--EZCODE IMAGE END--><br><br>"No one should be here."<br>-Levellord',
			},
			{
				tail: 'A proud member of the Spleen Extinction society<br /><br />[img]http://img.photobucket.com/albums/v410/Gannalev/rcwn.png[/img]<br /><br />\"No one should be here.\"<br />-Levellord',
			},
			{
				tail: '"No one should be here" -Level Lord',
			},
		],
		'Levelass': [
			{
				tail: '[img]http://img.photobucket.com/albums/v499/Nevad/menbun.gif[/img]<br /><br />Awww! Feel the love!',
				original: '<!--EZCODE IMAGE START--><img src="http://img.photobucket.com/albums/v499/Nevad/menbun.gif"><!--EZCODE IMAGE END--><br><br>Awww! Feel the love!',
			},
			{
				tail: '[img]http://img.photobucket.com/albums/v499/Nevad/menbun.gif[/img]<br /><br />Cute bunny!',
			},
		],
		'LordOfGlobox': [
			{
				tail: '~~~~~~~~~~~~~~~~~~~~~~~<br />I\'ve changed a lot since my last time on this forum...',
			},
		],
		'Malvineous': [
			{
				tail: '<font color=\"#EEF2EE\">[url=http://www.shikadi.net/keenwiki/]KeenWiki[/url] | [url=http://www.shikadi.net/moddingwiki/]ModdingWiki[/url]</font>',
				original: '<!--EZCODE FONT START--><span style="font-family:Tahoma; background-color: #EEF2EE; padding: 4px; border: 1px solid #AACCAA; color: #AAAAAA; display: block; width: 50%; text-align: center; font-size: 10pt;"><!--EZCODE LINK START--><a href="http://www.shikadi.net/keenwiki/">KeenWiki</a><!--EZCODE LINK END--> | <!--EZCODE LINK START--><a href="http://www.shikadi.net/moddingwiki/">ModdingWiki</a><!--EZCODE LINK END--></span><!--EZCODE FONT END-->',
			},
		],
		'Master Inferno': [
			{
				tail: '"A man is the less likely to become great the more he is dominated by reason: few can achieve greatness - and none in art - if they are not dominated by illusion."<br />--Mr. Doctor',
				// no original
			},
		],
		'Retodon8': [
			{
				tail: 'Retodon8<br />Sheep happens! [url=http://keen.retodon8.net/][img]http://retodon8.net/Keen/Graphics/K1_nme_Yorp.gif[/img][/url]',
				// no original
			},
			{
				tail: 'Retodon8<br />Sheep happens! [url=http://keen.retodon8.net/][img]http://retodon8.net/Graphics/Keen_Yorp.gif[/img][/url]',
			},
			{
				tail: 'Retodon8<br />You live, you die, you are remembered, you are forgotten. [url=http://keen.retodon8.net/][img]http://retodon8.net/Graphics/Keen_Yorp.gif[/img][/url]',
			},
		],
		'RoboRed': [
			{
				tail: 'Over and out.<br /><br />[img]http://members.lycos.co.uk/animation_by_mistake/myhorse.gif[/img]<br />That\'s My Horse!',
			},
			{
				tail: '[img]http://img.photobucket.com/albums/v426/RoboRed/RoboredSig.jpg[/img]',
			},
			{
				tail: '[img]http://img.photobucket.com/albums/v426/RoboRed/RoboredSig2.jpg[/img]',
			},
		],
		'Shadow Master': [
			{
				tail: '[hr][img]http://img136.imageshack.us/img136/983/vegetableswk2.gif[/img]',
				original: '<hr><img src="http://img136.imageshack.us/img136/983/vegetableswk2.gif">',
			},
			{
				tail: '------------------------------<br />[url=http://shadowm2006.sitesled.com/]My website[/url]<br />[url=http://p072.ezboard.com/fpubliccommanderkeenforumfrm20.showMessage?topicID=12.topic]Get Windows/Linux native LModKeen 2 with integrated FIN2BMP![/url]. You know you want to.<br />[url=http://shadowm2006.sitesled.com/meta/projectpage.htm]The META engine for 2D games[/url].',
				// Unknown original, will just reuse 'tail'
			},
			{
				tail: '------------------------------<br />[url=http://shadowm2006.sitesled.com/]My website[/url]<br />[url=http://p072.ezboard.com/fpubliccommanderkeenforumfrm20.showMessage?topicID=12.topic]Get Windows/Linux native LModKeen 2 with integrated FIN2BMP![/url]. You know you want to.',
				// Unknown original, will just reuse 'tail'
			},
			{
				tail: '[hr]<b>SM:</b> <i>\"I could go and write a page about the Theory of Relativity (or whatever it\'s called), but, what is the point if I don\'t know what the Theory of Relativity is?\"</i>',
			},
			{
				tail: '------------------<br /><b>SM:</b> <i>"I could go and write a page about the Theory of Relativity (or whatever it\'s called), but, what is the point if I don\'t know what the Theory of Relativity is?"</i><br /><br />[url=http://shadowm2006.sitesled.com/]My website[/url]',
			},
		],
		'SpikeNexus': [
			{
				tail: '--------------<br />[url=http://spikenexus.toxicsheep.com/pccw/][img]http://spikenexus.toxicsheep.com/pccw/imgs/links/pccwsml.gif[/img][/url]',
			},
		],
		'Spikey698': [
			{
				tail: 'http://smc.sq7.org - Sierra Music Central - for old Sierra soundtracks (hopefully Apogee too!)',
			},
		],
		'Xtraverse': [
			{
				tail: '[url=http://spatang.com/ck][img]http://spatang.com/ck/bannersm.jpg[/img][/url] [url=http://spatang.com/cosmo][img]http://spatang.com/cosmo/bannersm.jpg[/img][/url] [url=http://spatang.com/nukem][img]http://www.spatang.com/nukem/bannersm.jpg[/img][/url] [img]http://spatang.com/scrobblersig.php[/img]',
				original: '<!--EZCODE LINK START--><a href="http://spatang.com/ck"><!--EZCODE IMAGE START--><img src="http://spatang.com/ck/bannersm.jpg" style="border:0;"><!--EZCODE IMAGE END--></a><!--EZCODE LINK END--> <!--EZCODE LINK START--><a href="http://spatang.com/cosmo"><!--EZCODE IMAGE START--><img src="http://spatang.com/cosmo/bannersm.jpg" style="border:0;"><!--EZCODE IMAGE END--></a><!--EZCODE LINK END--> <!--EZCODE LINK START--><a href="http://spatang.com/nukem"><!--EZCODE IMAGE START--><img src="http://www.spatang.com/nukem/bannersm.jpg" style="border:0;"><!--EZCODE IMAGE END--></a><!--EZCODE LINK END--> <!--EZCODE IMAGE START--><img src="http://spatang.com/scrobblersig.php"><!--EZCODE IMAGE END-->',
			},
		],
		'jimmyjames': [
			{
				original: '______________________________________________________<br>So what if i ask dumb questions im only 12.',
			},
		],
		'lemur821': [
			{
				original: '________________<br><!--EZCODE IMAGE START--><img src="http://img80.imageshack.us/img80/8498/missouriansf9.png"><!--EZCODE IMAGE END-->',
			},
		],
		'lv4n': [
			{
				tail: '----<br /><br />[img]http://img294.imageshack.us/img294/1923/untitled116qa.gif[/img]<br />Tough Bloogs eat princesses',
				original: '----<br><br><!--EZCODE IMAGE START--><img src="http://img294.imageshack.us/img294/1923/untitled116qa.gif"><!--EZCODE IMAGE END--><br>[size=2]Tough Bloogs eat princesses[/size]',
			},
		],
		'memsys': [
			{
				tail: '[url=http://profile.xfire.com/memsys][img]http://miniprofile.xfire.com/bg/bg/type/2/memsys.png[/img][/url]',
				original: '<!--EZCODE LINK START--><a href="http://profile.xfire.com/memsys"><!--EZCODE IMAGE START--><img src="http://miniprofile.xfire.com/bg/bg/type/2/memsys.png"><!--EZCODE IMAGE END--></a><!--EZCODE LINK END-->',
			},
		],
		'najawa.e': [
			{
				tail: 'Tough Guys Can Fix Their Own Problems!!!<br />[img]http://i15.photobucket.com/albums/a371/najawa/Modding/Prisoner.jpg[/img]<br />*Under Self Inflicted Posting Restriction*<br />Visit My site at [url=http://www.najawa.com]www.najawa.com[/url]<br />[url=http://kevan.org/brain.cgi?Najawa]Click Here!!! Please!!![/url]<br />-- NAJAWA --',
			},
		],
		'rorie1983': [
			{
				tail: '<b>Rorie</b>',
			},
		],
		'szevvy': [
			{
				tail: '------------------<br />[url=http://www.szevvy.net]www.szevvy.net[/url], for all your Wombat needs.  You know you want to.<br />A member of the LevelLord fan club.',
				original: '------------------<br><!--EZCODE LINK START--><a href="http://www.szevvy.net">www.szevvy.net</a><!--EZCODE LINK END-->, for all your Wombat needs.  You know you want to.<br>A member of the LevelLord fan club.',
			},
		],
	},
};

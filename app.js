'use strict';

const newsReader = {
	body: document.getElementsByTagName('body'),
	site: location.host,
	adPanel: document.createElement('div'),

	init() {
		this.ads = document.querySelectorAll(
			'img[src*=".gif"], a.static-sponsor, a[href*="ncell"], a[href*="esewa"], a[href*="khalti"], a[href*="imepay"], a[href*="bank"], a[href*="dishhome"], a[href*="insurance"], a[href*="college"], img[src*="ad-"], img[src*="-ad"], img[src*="ad."], img[src*="_ad"], img[src*="ad_"], *[id="ad"], *[class="ad"], *[id*="_ad"], *[class*="_ad"], *[id*="ad_"], *[class*="ad_"], *[id*="-ad"], *[class*="-ad"], *[id*="ad-"], *[class*="ad-"], *[id*="bigyapan_"], *[class*="_bigyapan"], *[id*="bigyapan-"], *[class*="-bigyapan"], *[id*="_bigyapan"], *[class*="_bigyapan"], *[id*="-bigyapan"], *[class*="-bigyapan"], *[class*="advertisement"], *[class*=" ad "]'
		);

		for (var j = 0; j < this.ads.length; j++) {
			var ad = this.ads[j];
			if (ad.querySelector('header') != null) {
				console.log(ad.parentNode);
				ad.parentNode.prepend(ad.querySelector('header'));
				console.log(ad.querySelector('header'));
			}
			if (ad.querySelector('footer') != null) {
				ad.parentNode.appendChild(ad.querySelector('footer'));
			}
			if (ad.querySelector('.content') != null) {
				ad.parentNode.prepend(ad.querySelector('.content'));
			}
			ad.remove();
			// if(ad.parentNode != null)  ad.parentNode.removeChild(ad); else  ad.remove();
		}
		// Array.from(this.ads).map((ad) => ad.parentNode.removeChild(ad));
	},

	appendAdPanel() {
		// WIP. Append the ads to different panel.
		this.adPanel.classList.add('newsreader-sidebar-panel');
		this.body[0].appendChild(this.adPanel);
	},

	toggleDarkMode() {
		// WIP.
	},

	accessibility() {
		// WIP.
	},

	log() {
		console.log('Newsreader init');
	},
};
//Allow First Run
newsReader.log();
newsReader.appendAdPanel();
newsReader.init();

//Run after two seconds to remove any post load scripts
setTimeout(function () {
	newsReader.log();
	newsReader.appendAdPanel();
	newsReader.init();
	clearInterval(interval);
}, 2000);

//create 30 seconds interval to hide regenerated ads
var interval = setInterval(function () {
	newsReader.log();
	newsReader.appendAdPanel();
	newsReader.init();
}, 30000);

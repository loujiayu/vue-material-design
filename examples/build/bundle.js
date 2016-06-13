/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(20);
	module.exports = __webpack_require__(22);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(10);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/font-awesome-webpack/font-awesome-styles.loader.js!./font-awesome.config.js", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/font-awesome-webpack/font-awesome-styles.loader.js!./font-awesome.config.js");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * Configuration file for font-awesome-webpack\n *\n */\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.fa-gitlab:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.fa-wpforms:before {\n  content: \"\\F298\";\n}\n.fa-envira:before {\n  content: \"\\F299\";\n}\n.fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.fa-blind:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.fa-braille:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.fa-glide:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(13) + ");\n  src: url(" + __webpack_require__(14) + "?#iefix&v=4.6.3) format('embedded-opentype'), url(" + __webpack_require__(15) + ") format('woff2'), url(" + __webpack_require__(16) + ") format('woff'), url(" + __webpack_require__(17) + ") format('truetype'), url(" + __webpack_require__(18) + "#fontawesomeregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "25a32416abee198dd821b0b17a198a8f.eot";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "25a32416abee198dd821b0b17a198a8f.eot";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e6cf7c6ec7c2d6f670ae9d762604cb0b.woff2";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c8ddf1e5e5bf3682bc7bebf30f394148.woff";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1dc35d25e61d819a9c357074014867ab.ttf";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d7c639084f684d66a1bc66855d193ed8.svg";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  margin: 0;\n  font-size: 16px;\n  line-height: 24px;\n}\nhtml {\n  font-family: 'Roboto', sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nh2 {\n  font-size: 2.25rem;\n}\n\nh3 {\n  font-size: 1.5rem;\n}\n\nh4 {\n  font-size: 1.313rem;\n}\n", ""]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(23);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(25);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _routes = __webpack_require__(26);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueRouter2.default);
	
	var router = new _vueRouter2.default();
	
	(0, _routes2.default)(router);
	
	var App = __webpack_require__(215);
	
	router.start(App, '#app');

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.24
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var isWechat = UA && UA.indexOf('micromessenger') > 0;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !(isWechat && isIos)) {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */
	
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	var formatComponentName = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	
	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };
	
	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;
	
	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */
	
	var shouldConvert = true;
	
	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIos: isIos,
		isWechat: isWechat,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  var _again = true;
	
	  _function: while (_again) {
	    _again = false;
	
	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if (isA || isO) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}
	
	var text$1 = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}
	
	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;
	
	var uid$3 = 0;
	
	var vFor = {
	
	  priority: FOR,
	  terminal: true,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */
	
	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}
	
	var vIf = {
	
	  priority: IF,
	  terminal: true,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.value = _toString(value);
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on$1 = {
	
	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind$1 = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	
	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },
	
	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },
	
	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};
	
	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */
	
	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}
	
	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */
	
	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */
	
	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}
	
	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */
	
	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */
	
	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}
	
	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */
	
	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}
	
	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */
	
	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}
	
	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */
	
	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	  var _this = this;
	
	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	
	var transition$1 = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	
	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }
	
	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});
	
	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // resolve slot distribution
	    resolveSlots(this, options._content);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	var filterRE$1 = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var slot = {
	
	  priority: SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */
	
	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);
	
	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }
	
	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }
	
	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }
	
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */
	
	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  extend(Vue.transition, transition);
	}
	
	installGlobalAPI(Vue);
	
	Vue.version = '1.0.24';
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(24)))

/***/ },
/* 24 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }
	
	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;
	
	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }
	
	      this.matcher.add(this.path, target);
	
	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };
	
	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }
	
	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },
	
	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;
	
	      var match = generateMatch(path, matcher, delegate);
	
	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }
	
	      callback(match);
	    }
	  };
	
	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;
	
	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }
	
	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }
	
	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }
	
	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;
	
	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);
	
	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }
	
	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();
	
	    callback(generateMatch("", matcher, this.delegate));
	
	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }
	
	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	
	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	
	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }
	
	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }
	
	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat
	
	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;
	
	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },
	
	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },
	
	    generate: function generate() {
	      return this.string;
	    }
	  };
	
	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },
	
	    regex: function regex() {
	      return "([^/]+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },
	
	    regex: function regex() {
	      return "(.+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };
	
	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }
	
	    var segments = route.split("/"),
	        results = [];
	
	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';
	
	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;
	
	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }
	
	    specificity.val = +specificity.val;
	
	    return results;
	  }
	
	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.
	
	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }
	
	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];
	
	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	        if (isEqual) {
	          return child;
	        }
	      }
	    },
	
	    put: function put(charSpec) {
	      var state;
	
	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }
	
	      // Make a new state for the character spec
	      state = new State(charSpec);
	
	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);
	
	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }
	
	      // Return the new state
	      return state;
	    },
	
	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;
	
	      // DEBUG "  " + debugState(this)
	      var returned = [];
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];
	
	        charSpec = child.charSpec;
	
	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }
	
	      return returned;
	    }
	
	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };
	
	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	
	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/
	
	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }
	
	  function recognizeChar(states, ch) {
	    var nextStates = [];
	
	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];
	
	      nextStates = nextStates.concat(state.match(ch));
	    }
	
	    return nextStates;
	  }
	
	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };
	
	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });
	
	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);
	
	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};
	
	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }
	
	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }
	
	    return result;
	  }
	
	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;
	
	      currentState = currentState.put(ch);
	    });
	
	    return currentState;
	  }
	
	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }
	
	  // The main interface
	
	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };
	
	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;
	
	      var isEmpty = true;
	
	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];
	
	        var segments = parse(route.path, names, specificity);
	
	        allSegments = allSegments.concat(segments);
	
	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];
	
	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }
	
	          isEmpty = false;
	
	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	
	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }
	
	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }
	
	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }
	
	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;
	
	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },
	
	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }
	
	      return result;
	    },
	
	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },
	
	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      var segments = route.segments;
	
	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];
	
	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }
	
	        output += "/";
	        output += segment.generate(params);
	      }
	
	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }
	
	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }
	
	      return output;
	    },
	
	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }
	
	      if (pairs.length === 0) {
	        return '';
	      }
	
	      return "?" + pairs.join("&");
	    },
	
	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },
	
	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;
	
	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }
	
	      path = tryDecode(path);
	      if (!path) return;
	
	      // DEBUG GROUP path
	
	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }
	
	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }
	
	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }
	
	      // END DEBUG GROUP
	
	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }
	
	      states = sortSolutions(solutions);
	
	      var state = solutions[0];
	
	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };
	
	  RouteRecognizer.prototype.map = map;
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */
	
	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }
	
	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */
	
	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }
	
	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */
	
	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }
	
	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */
	
	  var resolver = undefined;
	
	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }
	
	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */
	
	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};
	
	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }
	
	  var hashRE = /#.*$/;
	
	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);
	
	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }
	
	    HTML5History.prototype.start = function start() {
	      var _this = this;
	
	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };
	
	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };
	
	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };
	
	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };
	
	    return HTML5History;
	  })();
	
	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);
	
	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }
	
	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };
	
	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };
	
	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };
	
	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };
	
	    return HashHistory;
	  })();
	
	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);
	
	      this.onChange = onChange;
	      this.currentPath = '/';
	    }
	
	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };
	
	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };
	
	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };
	
	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };
	
	    return AbstractHistory;
	  })();
	
	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */
	
	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }
	
	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }
	
	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }
	
	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }
	
	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */
	
	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }
	
	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');
	
	    view.depth = depth;
	    view.activated = false;
	
	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);
	
	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);
	
	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);
	
	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });
	
	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }
	
	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };
	
	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };
	
	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };
	
	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };
	
	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }
	
	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */
	
	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }
	
	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */
	
	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }
	
	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */
	
	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }
	
	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */
	
	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */
	
	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);
	
	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }
	
	    /**
	     * Abort current transition and return to previous location.
	     */
	
	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };
	
	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */
	
	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };
	
	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;
	
	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();
	
	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });
	
	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }
	
	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase
	
	            // Update router current route
	            transition.router._onTransitionValidated(transition);
	
	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });
	
	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };
	
	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };
	
	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */
	
	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;
	
	      var transition = this;
	      var nextCalled = false;
	
	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };
	
	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };
	
	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };
	
	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };
	
	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };
	
	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };
	
	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };
	
	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }
	
	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };
	
	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */
	
	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;
	
	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };
	
	    return RouteTransition;
	  })();
	
	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }
	
	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;
	
	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */
	
	  var Route = function Route(path, router) {
	    var _this = this;
	
	    babelHelpers.classCallCheck(this, Route);
	
	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };
	
	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;
	
	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };
	
	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };
	
	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }
	
	  function View (Vue) {
	
	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);
	
	    // with some overrides
	    _.extend(viewDef, {
	
	      _isRouterView: true,
	
	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);
	
	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }
	
	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });
	
	    Vue.elementDirective('router-view', viewDef);
	  }
	
	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;
	
	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';
	
	    var activeId = 0;
	
	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;
	
	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });
	
	    Vue.directive('link', {
	      priority: onPriority - 2,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },
	
	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },
	
	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;
	
	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },
	
	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },
	
	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },
	
	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },
	
	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });
	
	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }
	
	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }
	
	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };
	
	  // late bind during install
	  var Vue = undefined;
	
	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */
	
	  var Router = (function () {
	    function Router() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);
	
	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }
	
	      // Vue instances
	      this.app = null;
	      this._children = [];
	
	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();
	
	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];
	
	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;
	
	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;
	
	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;
	
	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });
	
	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }
	
	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */
	
	    // API ===================================================
	
	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */
	
	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };
	
	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */
	
	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };
	
	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */
	
	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };
	
	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */
	
	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };
	
	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */
	
	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }
	
	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }
	
	      this.history.start();
	    };
	
	    /**
	     * Stop listening to route changes.
	     */
	
	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };
	
	    // Internal methods ======================================
	
	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */
	
	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };
	
	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */
	
	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };
	
	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */
	
	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };
	
	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */
	
	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };
	
	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */
	
	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;
	
	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };
	
	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */
	
	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };
	
	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;
	
	      if (this._checkGuard(path)) {
	        return;
	      }
	
	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;
	
	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }
	
	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);
	
	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;
	
	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }
	
	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };
	
	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }
	
	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }
	
	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };
	
	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */
	
	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };
	
	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };
	
	    return Router;
	  })();
	
	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }
	
	  /* Installation */
	
	  Router.installed = false;
	
	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */
	
	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };
	
	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }
	
	  return Router;
	
	}));

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configRouter;
	
	var _components = __webpack_require__(27);
	
	function configRouter(router) {
	  // normal routes
	  router.map({
	    '/components/button': {
	      component: _components.ButtonView
	    },
	    '/components/iconbutton': {
	      component: _components.IconButtonView
	    },
	    'components/checkbox': {
	      component: _components.CheckBoxView
	    },
	    'components/downmenu': {
	      component: _components.DownMenuView
	    },
	    'components/iconmenu': {
	      component: _components.IconMenuView
	    },
	    'components/menubar': {
	      component: _components.MenuBarView
	    },
	    'components/radio': {
	      component: _components.RadioView
	    },
	    'components/snackbar': {
	      component: _components.SnackBarView
	    },
	    'components/textfield': {
	      component: _components.TextFieldView
	    },
	    'components/table': {
	      component: _components.TableView
	    },
	    'components/toggle': {
	      component: _components.ToggleView
	    },
	    'components/autocomplete': {
	      component: _components.AutoCompleteView
	    },
	    'components/dialog': {
	      component: _components.DialogView
	    },
	    'components/datepicker': {
	      component: _components.DatePickerView
	    }
	  });
	  router.redirect({
	    '/': 'components/autocomplete'
	  });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DatePickerView = exports.DialogView = exports.AutoCompleteView = exports.ToggleView = exports.TableView = exports.TextFieldView = exports.SnackBarView = exports.RadioView = exports.MenuBarView = exports.IconMenuView = exports.DownMenuView = exports.IconButtonView = exports.ButtonView = exports.CheckBoxView = undefined;
	
	var _CheckBoxView2 = __webpack_require__(28);
	
	var _CheckBoxView3 = _interopRequireDefault(_CheckBoxView2);
	
	var _ButtonView2 = __webpack_require__(150);
	
	var _ButtonView3 = _interopRequireDefault(_ButtonView2);
	
	var _IconButtonView2 = __webpack_require__(155);
	
	var _IconButtonView3 = _interopRequireDefault(_IconButtonView2);
	
	var _DownMenuView2 = __webpack_require__(160);
	
	var _DownMenuView3 = _interopRequireDefault(_DownMenuView2);
	
	var _IconMenuView2 = __webpack_require__(165);
	
	var _IconMenuView3 = _interopRequireDefault(_IconMenuView2);
	
	var _MenuBarView2 = __webpack_require__(170);
	
	var _MenuBarView3 = _interopRequireDefault(_MenuBarView2);
	
	var _RadioView2 = __webpack_require__(175);
	
	var _RadioView3 = _interopRequireDefault(_RadioView2);
	
	var _SnackBarView2 = __webpack_require__(180);
	
	var _SnackBarView3 = _interopRequireDefault(_SnackBarView2);
	
	var _TextFieldView2 = __webpack_require__(185);
	
	var _TextFieldView3 = _interopRequireDefault(_TextFieldView2);
	
	var _TableView2 = __webpack_require__(190);
	
	var _TableView3 = _interopRequireDefault(_TableView2);
	
	var _ToggleView2 = __webpack_require__(195);
	
	var _ToggleView3 = _interopRequireDefault(_ToggleView2);
	
	var _AutoCompleteView2 = __webpack_require__(200);
	
	var _AutoCompleteView3 = _interopRequireDefault(_AutoCompleteView2);
	
	var _DialogView2 = __webpack_require__(205);
	
	var _DialogView3 = _interopRequireDefault(_DialogView2);
	
	var _DatePickerView2 = __webpack_require__(210);
	
	var _DatePickerView3 = _interopRequireDefault(_DatePickerView2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.CheckBoxView = _CheckBoxView3.default;
	exports.ButtonView = _ButtonView3.default;
	exports.IconButtonView = _IconButtonView3.default;
	exports.DownMenuView = _DownMenuView3.default;
	exports.IconMenuView = _IconMenuView3.default;
	exports.MenuBarView = _MenuBarView3.default;
	exports.RadioView = _RadioView3.default;
	exports.SnackBarView = _SnackBarView3.default;
	exports.TextFieldView = _TextFieldView3.default;
	exports.TableView = _TableView3.default;
	exports.ToggleView = _ToggleView3.default;
	exports.AutoCompleteView = _AutoCompleteView3.default;
	exports.DialogView = _DialogView3.default;
	exports.DatePickerView = _DatePickerView3.default;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(29)
	__vue_script__ = __webpack_require__(32)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/CheckBoxView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(149)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./CheckBoxView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckBoxView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckBoxView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n", ""]);
	
	// exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'CheckBox',
	      description: 'checkbox is used to select option.',
	      tableHeader: ['property', 'type', 'default', 'description'],
	      bodyContent: _property2.default.checkbox,
	      style: {
	        marginRight: '10px'
	      },
	      html: '<check-box :trigger=true></check-box> \
	            \n<check-box :trigger=false></check-box> \
	            \n<check-box :disabled=true></check-box>'
	    };
	  },
	  components: {
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    CheckBox: _materialVue.CheckBox,
	    TableBody: _materialVue.TableBody,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(34)
	__vue_script__ = __webpack_require__(36)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/PageHeader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(37)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./PageHeader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./PageHeader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./PageHeader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".title {\n  border-bottom: 1px solid #eee;\n  padding-bottom: .3em; }\n\n.top {\n  margin-bottom: 20px; }\n", ""]);
	
	// exports


/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    title: String,
	    description: String
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"top\">\n  <h3 class=\"title\">{{title}}</h3>\n  <p> {{description | capitalize}} </p>\n</div>\n";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(39)
	__vue_script__ = __webpack_require__(41)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/Example.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(42)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./Example.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Example.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Example.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".examples {\n  border: 1px solid rgba(141, 143, 141, 0.3);\n  border-radius: 4px; }\n  .examples::before {\n    font-family: Roboto, sans-serif;\n    content: 'example';\n    text-transform: uppercase;\n    color: #959595;\n    display: block;\n    font-weight: 700;\n    margin-left: 16px;\n    margin-top: 16px; }\n\n.case {\n  margin-bottom: 10px;\n  padding: 10px; }\n\n.snippet-code {\n  line-height: 18px;\n  overflow: auto;\n  white-space: pre;\n  word-wrap: normal;\n  word-break: break-all;\n  background-color: #333;\n  margin: 0;\n  padding: 1.5rem; }\n  .snippet-code code {\n    width: 100%;\n    font-weight: bolder;\n    color: #aed581;\n    font-size: 13px; }\n", ""]);
	
	// exports


/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    codeHtml: String
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"examples\">\n  <div class=\"case\">\n    <slot name=\"ex\"></slot>\n  </div>\n  <pre class=\"snippet-code\"><code class=\"html\">{{codeHtml}}</code></pre>\n</div>\n";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(44)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./Property.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"property\">\n  <h4>Properties</h4>\n  <slot name=\"pro\"></slot>\n</div>\n";

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var style = function style(s) {
	  return 'override the inline style of ' + s + '.';
	};
	var disabled = function disabled(component) {
	  return ['disabled', 'Boolean', 'false', 'disable the ' + component + '.'];
	};
	var backgroundColor = function backgroundColor(component) {
	  return ['backgroundColor', 'String', '', 'background of ' + component + '.'];
	};
	var label = function label(component) {
	  return ['label', 'String', '', 'label of ' + component + '.'];
	};
	var styleObj = function styleObj(component) {
	  return ['styleObj', 'Object', '', 'override the inline style of ' + component + '.'];
	};
	var trigger = function trigger(component) {
	  return ['trigger', 'Boolean', 'false', component + ' triggered if true.'];
	};
	var verticalPosition = function verticalPosition(component) {
	  return ['verticalPosition', 'String', 'bottom', 'tooltip vertical position when hover on ' + component + '.'];
	};
	var horizontalPosition = function horizontalPosition(component) {
	  return ['horizontalPosition', 'String', 'center', 'tooltip horizontal position when hover on ' + component + '.'];
	};
	var menuStyle = function menuStyle(component) {
	  return ['menuStyle', 'Object', '', 'override the menu style of ' + component];
	};
	var buttonStyle = function buttonStyle(component) {
	  return ['buttonStyle', 'Object', '', 'override the button style of ' + component];
	};
	var tooltip = ['tooltip', 'String', '', 'information on hover.'];
	var shadowDepth = ['shadowDepth', 'Number', '-1', 'depth of box shadow.'];
	var iconClass = ['iconClass', 'String', '', 'class name of icon if any.'];
	var isIconFront = ['iconFront', 'Boolean', 'false', 'is icon front of label or not.'];
	var hover = ['hover', 'Boolean', 'true', 'hover animate enable.'];
	var link = ['link', 'String', '', 'a URL to link.'];
	var labelStyle = ['labelStyle', 'Object', '', 'override the inline style of label.'];
	var iconStyle = ['iconStyle', 'Object', '', 'override the inline style of icon.'];
	var ripple = ['ripple', 'Boolean', 'true', 'ripple enable.'];
	var onClick = ['onClick', 'Function', '', 'Callback function for click event.'];
	var vertical = ['verticalPosition', 'String', 'bottom', 'menu vertical position when click on element'];
	var horizontal = ['horizontalPosition', 'String', 'left', 'menu horizontal position when click on element'];
	var docked = ['docked', 'Boolean', 'true', 'component should be docked if true.'];
	var open = ['open', 'Boolean', 'false', 'menu should display if true.'];
	var message = ['message', 'String', '', 'message in snack bar.'];
	var undo = ['undo', 'Boolean', 'false', 'undo an operation.'];
	var messageStyle = ['messageStyle', 'Object', '', 'override the inline style of message.'];
	var undoStyle = ['undoStyle', 'Object', '', 'override the inline style of undo button.'];
	var floatStyle = ['floatStyle', 'Object', '', style('float content')];
	var hintStyle = ['hintStyle', 'Object', '', style('hint content')];
	var inputStyle = ['inputStyle', 'Object', '', style('input content')];
	var underlineStyle = ['underlineStyle', 'Object', '', style('underline')];
	var forcusUnderlineStyle = ['forcusUnderlineStyle', 'Object', '', style('forcus underline')];
	var wrapperStyle = ['wrapperStyle', 'Object', '', style('dialog wrapper')];
	var floatContent = ['floatContent', 'Object', '', 'float content.'];
	var hintContent = ['hintContent', 'String', '', 'hint content.'];
	var defaultContent = ['defaultContent', 'String', '', 'default content.'];
	var headers = ['headers', 'Array', '', 'header contents.'];
	var select = ['select', 'Boolean', 'false', 'check box enable.'];
	var selectable = ['selectable', 'Boolean', 'false', 'table content selectable if true.'];
	var bodyContent = ['bodyContent', 'Array', '', 'body contents.'];
	var trStyle = ['trStyle', 'Object', '', style('tr')];
	var tdStyle = ['tdStyle', 'Object', '', style('td')];
	var thStyle = ['thStyle', 'Object', '', style('th')];
	var textFieldStyle = ['textFieldStyle', 'Object', '', style('Text Field')];
	var dialogStyle = ['dialogStyle', 'Object', '', style('Dialog')];
	var thumbStyle = ['thumbStyle', 'Object', '', style('thumb')];
	var circleStyle = ['circleStyle', 'Object', '', style('circle')];
	var labelId = ['labelId', 'String', '', 'id can be associated with labels.'];
	var keyboardFocus = ['keyboardFocus', 'Boolean', 'true', 'key event listening.'];
	var isFloat = ['isFloat', 'Boolean', 'true', 'float when touch event fires.'];
	var showDuration = ['showDuration', 'Number', '5000', 'duration the snack bar shows.'];
	var onBlur = ['onBlur', 'Function', '', 'callback function that is fired when element has lost focus.'];
	var onFocus = ['onForcus', 'Function', '', 'callback function that is fired when element has received focus.'];
	var completion = ['completion', 'Array', '', 'array of completion.'];
	var matchCase = ['matchCase', 'Boolean', 'true', 'case sensitive if true.'];
	var title = ['title', 'String', '', 'title of Dialog.'];
	var valueProp = ['value', 'String', 'null', 'value the parent element props.'];
	
	exports.default = {
	  button: [disabled('Button'), label('Button'), backgroundColor('Button'), styleObj('Button'), shadowDepth, isIconFront, hover, link, labelStyle, iconStyle, keyboardFocus, isFloat, iconClass, ripple, onClick],
	  icon: [disabled('IconButton'), backgroundColor('IconButton'), styleObj('IconButton'), verticalPosition('IconButton'), horizontalPosition('IconButton'), shadowDepth, iconClass, tooltip, link, ripple, onClick, keyboardFocus, isFloat],
	  checkbox: [styleObj('CheckBox'), disabled('CheckBox'), trigger('CheckBox'), labelId],
	  downmenu: [styleObj('DownMenu'), disabled('DownMenu'), label('DownMunu'), menuStyle('DownMunu'), buttonStyle('DownMunu')],
	  iconmenu: [styleObj('IconMenu'), disabled('IconMenu'), menuStyle('IconMenu'), vertical, horizontal, iconClass],
	  'menubar': [styleObj('MenuBar'), docked, shadowDepth, open],
	  'radio': [styleObj('Radio'), trigger('Radio'), disabled('Radio'), labelId],
	  'snackbar': [styleObj('Radio'), showDuration, message, undo, messageStyle, undoStyle, open],
	  textfield: [styleObj('Text Field'), disabled('Text Field'), valueProp, floatStyle, hintStyle, inputStyle, underlineStyle, forcusUnderlineStyle, floatContent, hintContent, onBlur, onFocus, defaultContent],
	  table: [styleObj('table')],
	  'tableheader': [styleObj('table header'), headers, select, thStyle],
	  'tablebody': [styleObj('table body'), bodyContent, selectable, select, trStyle, tdStyle],
	  toggle: [styleObj('toggle'), trigger('toggle'), disabled('toggle'), circleStyle, thumbStyle, labelId],
	  autocomplete: [styleObj('Auto Complete'), disabled('Auto Complete'), floatStyle, hintStyle, inputStyle, underlineStyle, forcusUnderlineStyle, floatContent, hintContent, onBlur, onFocus, defaultContent, completion, matchCase],
	  dialog: [styleObj('Dialog'), title, open, wrapperStyle],
	  datepicker: [styleObj('Date Picker'), textFieldStyle, dialogStyle]
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _from3 = __webpack_require__(48);
	
	var _from4 = _interopRequireDefault2(_from3);
	
	var _getPrototypeOf = __webpack_require__(101);
	
	var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
	
	var _defineProperties = __webpack_require__(105);
	
	var _defineProperties2 = _interopRequireDefault2(_defineProperties);
	
	var _create3 = __webpack_require__(108);
	
	var _create4 = _interopRequireDefault2(_create3);
	
	var _stringify = __webpack_require__(111);
	
	var _stringify2 = _interopRequireDefault2(_stringify);
	
	var _getOwnPropertySymbols = __webpack_require__(113);
	
	var _getOwnPropertySymbols2 = _interopRequireDefault2(_getOwnPropertySymbols);
	
	var _symbol = __webpack_require__(127);
	
	var _symbol2 = _interopRequireDefault2(_symbol);
	
	var _assign3 = __webpack_require__(132);
	
	var _assign4 = _interopRequireDefault2(_assign3);
	
	var _defineProperty4 = __webpack_require__(136);
	
	var _defineProperty5 = _interopRequireDefault2(_defineProperty4);
	
	var _keys3 = __webpack_require__(139);
	
	var _keys4 = _interopRequireDefault2(_keys3);
	
	var _typeof2 = __webpack_require__(142);
	
	var _typeof3 = _interopRequireDefault2(_typeof2);
	
	function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : (0, _typeof3.default)(exports)) === 'object' && ( false ? 'undefined' : (0, _typeof3.default)(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : (0, _typeof3.default)(exports)) === 'object') exports["material-vue"] = factory();else root["material-vue"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
	
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
	
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
	
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
	
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
	
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
	
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
	
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
	
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
	
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = __webpack_require__(1);
	
				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.DatePicker = exports.Dialog = exports.AutoComplete = exports.Popover = exports.TableHeader = exports.TableBody = exports.TableWrapper = exports.Toggle = exports.Radio = exports.CheckBox = exports.TextField = exports.SnackBar = exports.MenuBar = exports.DownMenu = exports.IconMenu = exports.MenuItem = exports.IconButton = exports.NavBar = exports.BaseButton = undefined;
	
				var _BaseButton2 = __webpack_require__(2);
	
				var _BaseButton3 = _interopRequireDefault(_BaseButton2);
	
				var _NavBar2 = __webpack_require__(62);
	
				var _NavBar3 = _interopRequireDefault(_NavBar2);
	
				var _IconButton2 = __webpack_require__(64);
	
				var _IconButton3 = _interopRequireDefault(_IconButton2);
	
				var _MenuItem2 = __webpack_require__(73);
	
				var _MenuItem3 = _interopRequireDefault(_MenuItem2);
	
				var _IconMenu2 = __webpack_require__(76);
	
				var _IconMenu3 = _interopRequireDefault(_IconMenu2);
	
				var _DownMenu2 = __webpack_require__(84);
	
				var _DownMenu3 = _interopRequireDefault(_DownMenu2);
	
				var _MenuBar2 = __webpack_require__(87);
	
				var _MenuBar3 = _interopRequireDefault(_MenuBar2);
	
				var _SnackBar2 = __webpack_require__(96);
	
				var _SnackBar3 = _interopRequireDefault(_SnackBar2);
	
				var _TextField2 = __webpack_require__(101);
	
				var _TextField3 = _interopRequireDefault(_TextField2);
	
				var _CheckBox2 = __webpack_require__(104);
	
				var _CheckBox3 = _interopRequireDefault(_CheckBox2);
	
				var _Radio2 = __webpack_require__(117);
	
				var _Radio3 = _interopRequireDefault(_Radio2);
	
				var _Toggle2 = __webpack_require__(130);
	
				var _Toggle3 = _interopRequireDefault(_Toggle2);
	
				var _TableWrapper2 = __webpack_require__(133);
	
				var _TableWrapper3 = _interopRequireDefault(_TableWrapper2);
	
				var _TableBody2 = __webpack_require__(136);
	
				var _TableBody3 = _interopRequireDefault(_TableBody2);
	
				var _TableHeader2 = __webpack_require__(142);
	
				var _TableHeader3 = _interopRequireDefault(_TableHeader2);
	
				var _Popover2 = __webpack_require__(78);
	
				var _Popover3 = _interopRequireDefault(_Popover2);
	
				var _AutoComplete2 = __webpack_require__(145);
	
				var _AutoComplete3 = _interopRequireDefault(_AutoComplete2);
	
				var _Dialog2 = __webpack_require__(148);
	
				var _Dialog3 = _interopRequireDefault(_Dialog2);
	
				var _DatePicker2 = __webpack_require__(153);
	
				var _DatePicker3 = _interopRequireDefault(_DatePicker2);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.BaseButton = _BaseButton3.default;
				exports.NavBar = _NavBar3.default;
				exports.IconButton = _IconButton3.default;
				exports.MenuItem = _MenuItem3.default;
				exports.IconMenu = _IconMenu3.default;
				exports.DownMenu = _DownMenu3.default;
				exports.MenuBar = _MenuBar3.default;
				exports.SnackBar = _SnackBar3.default;
				exports.TextField = _TextField3.default;
				exports.CheckBox = _CheckBox3.default;
				exports.Radio = _Radio3.default;
				exports.Toggle = _Toggle3.default;
				exports.TableWrapper = _TableWrapper3.default;
				exports.TableBody = _TableBody3.default;
				exports.TableHeader = _TableHeader3.default;
				exports.Popover = _Popover3.default;
				exports.AutoComplete = _AutoComplete3.default;
				exports.Dialog = _Dialog3.default;
				exports.DatePicker = _DatePicker3.default;
	
				/***/
			},
			/* 2 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(3);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/BaseButton.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(61);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./BaseButton.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 3 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _events = __webpack_require__(41);
	
				var _events2 = _interopRequireDefault(_events);
	
				var _touchRipple = __webpack_require__(42);
	
				var _touchRipple2 = _interopRequireDefault(_touchRipple);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _colorManipulator = __webpack_require__(57);
	
				var _colorManipulator2 = _interopRequireDefault(_colorManipulator);
	
				var _muiTheme = __webpack_require__(55);
	
				var _common = __webpack_require__(58);
	
				var _directive = __webpack_require__(59);
	
				var _util = __webpack_require__(60);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var button = _muiTheme.baseTheme.button;
						var disabledColor = _muiTheme.baseTheme.disabledColor;
	
						var styles = {
							root: {
								minWidth: '58px',
								minHeight: button.height,
								height: '100%',
								position: 'relative',
								color: this.disabled ? disabledColor : 'none',
								direction: this.isIconFront ? 'rtl' : 'ltr',
								backgroundColor: this.backgroundColor ? this.backgroundColor : 'rgba(0, 0, 0, 0)',
								boxSizing: "border-box",
								display: "inline-block",
								whiteSpace: 'nowrap',
								fontFamily: "Roboto, sans-serif",
								lineHeight: '36px',
								textDecoration: 'none',
								transition: _transitions2.default.easeOut(),
								outline: 'none',
								overflow: 'hidden',
								cursor: this.disabled ? 'default' : 'pointer',
								borderRadius: '2px',
								boxShadow: this.shadowDepth && !this.disabled ? _common.zDepthShadows[this.shadowDepth] : 'none'
							},
							label: {
								fontSize: '14px',
								letterSpacing: '0',
								paddingLeft: '24px',
								paddingRight: '24px',
								fontWeight: '600'
							},
							icon: {
								verticalAlign: 'middle',
								marginLeft: this.isIconFront ? '10px' : '0',
								marginRight: this.isIconFront ? '0' : '10px'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mLabelStyle: (0, _assign2.default)(styles.label, this.labelStyle),
							mIconStyle: (0, _assign2.default)(styles.icon, this.iconStyle),
							touch: false,
							tabPressed: false,
							tabListening: false,
							focused: false,
							forcusTimeout: null,
							isIE: !!(0, _util.isIE)()
						};
					},
					props: {
						shadowDepth: {
							type: Number,
							default: -1
						},
						disabled: Boolean,
						label: String,
						onClick: Function,
						iconClass: String,
						backgroundColor: String,
						isIconFront: Boolean,
						keyboardFocus: {
							type: Boolean,
							default: true
						},
						isFloat: {
							type: Boolean,
							default: true
						},
						hover: {
							type: Boolean,
							default: true
						},
						link: String,
						styleObj: Object,
						labelStyle: Object,
						iconStyle: Object,
						ripple: {
							type: Boolean,
							default: true
						}
					},
					components: {
						touchRipple: _touchRipple2.default
					},
					ready: function ready() {
						var _this = this;
	
						if (!this.tabListening) {
							_events2.default.on(window, 'keydown', function (event) {
								_this.tabPressed = _events2.default.keyCodes.tab === event.keyCode;
							});
							this.tabListening = true;
						}
					},
					directives: {
						'delayfocus': _directive.delayfocus
					},
					methods: {
						handleFocus: function handleFocus() {
							var _this2 = this;
	
							this.forcusTimeout = setTimeout(function () {
								if (_this2.tabPressed) {
									_this2.focused = true;
								}
							}, 150);
						},
						cancelFocusTimeout: function cancelFocusTimeout() {
							if (this.forcusTimeout) {
								clearTimeout(this.forcusTimeout);
								this.forcusTimeout = null;
							}
						},
						handleBlur: function handleBlur() {
							this.tabPressed = false;
							this.focused = false;
							this.cancelFocusTimeout();
						},
						handleMouseEnter: function handleMouseEnter() {
							if (this.touch || this.disabled) {
								this.hover = false;
							}
							if (this.hover) {
								if (this.backgroundColor) {
									this.$el.style.backgroundColor = _colorManipulator2.default.fade(this.backgroundColor, 0.8);
								} else {
									this.$el.style.backgroundColor = _muiTheme.baseTheme.defaultActiveColor;
								}
							}
						},
						handleMouseLeave: function handleMouseLeave() {
							if (this.hover) {
								this.$el.style.backgroundColor = this.backgroundColor ? this.backgroundColor : 'rgba(0, 0, 0, 0)';
							}
						},
						handleTouchStart: function handleTouchStart(event) {
							this.touch = true;
							if (this.isFloat) {
								this.mRootStyle.boxShadow = _common.zDepthShadows[this.shadowDepth + 1];
							}
						},
						handleTouchEnd: function handleTouchEnd(event) {
							if (this.isFloat) {
								this.mRootStyle.boxShadow = _common.zDepthShadows[this.shadowDepth];
							}
						},
						handleClick: function handleClick(event) {
							this.tabPressed = false;
							this.focused = false;
							if (this.disabled) {
								return;
							}
							if (this.link && this.link.startsWith('http')) {
								window.open(this.link);
							} else if (this.link) {
								console.warn(this.link + ' is not a valid URL');
							}
							if (this.onClick) this.onClick(event, this.label);
						}
					}
				};
	
				/***/
			},
			/* 4 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = { "default": __webpack_require__(5), __esModule: true };
	
				/***/
			},
			/* 5 */
			/***/function (module, exports, __webpack_require__) {
	
				__webpack_require__(6);
				module.exports = __webpack_require__(9).Object.assign;
	
				/***/
			},
			/* 6 */
			/***/function (module, exports, __webpack_require__) {
	
				// 19.1.3.1 Object.assign(target, source)
				var $export = __webpack_require__(7);
	
				$export($export.S + $export.F, 'Object', { assign: __webpack_require__(22) });
	
				/***/
			},
			/* 7 */
			/***/function (module, exports, __webpack_require__) {
	
				var global = __webpack_require__(8),
				    core = __webpack_require__(9),
				    ctx = __webpack_require__(10),
				    hide = __webpack_require__(12),
				    PROTOTYPE = 'prototype';
	
				var $export = function $export(type, name, source) {
					var IS_FORCED = type & $export.F,
					    IS_GLOBAL = type & $export.G,
					    IS_STATIC = type & $export.S,
					    IS_PROTO = type & $export.P,
					    IS_BIND = type & $export.B,
					    IS_WRAP = type & $export.W,
					    exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
					    expProto = exports[PROTOTYPE],
					    target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
					    key,
					    own,
					    out;
					if (IS_GLOBAL) source = name;
					for (key in source) {
						// contains in native
						own = !IS_FORCED && target && target[key] !== undefined;
						if (own && key in exports) continue;
						// export native or passed
						out = own ? target[key] : source[key];
						// prevent global pollution for namespaces
						exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
						// bind timers to global for call from export context
						: IS_BIND && own ? ctx(out, global)
						// wrap global constructors for prevent change them in library
						: IS_WRAP && target[key] == out ? function (C) {
							var F = function F(a, b, c) {
								if (this instanceof C) {
									switch (arguments.length) {
										case 0:
											return new C();
										case 1:
											return new C(a);
										case 2:
											return new C(a, b);
									}return new C(a, b, c);
								}return C.apply(this, arguments);
							};
							F[PROTOTYPE] = C[PROTOTYPE];
							return F;
							// make static versions for prototype methods
						}(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
						// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
						if (IS_PROTO) {
							(exports.virtual || (exports.virtual = {}))[key] = out;
							// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
							if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
						}
					}
				};
				// type bitmap
				$export.F = 1; // forced
				$export.G = 2; // global
				$export.S = 4; // static
				$export.P = 8; // proto
				$export.B = 16; // bind
				$export.W = 32; // wrap
				$export.U = 64; // safe
				$export.R = 128; // real proto method for `library`
				module.exports = $export;
	
				/***/
			},
			/* 8 */
			/***/function (module, exports) {
	
				// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
				var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
				if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	
				/***/
			},
			/* 9 */
			/***/function (module, exports) {
	
				var core = module.exports = { version: '2.4.0' };
				if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	
				/***/
			},
			/* 10 */
			/***/function (module, exports, __webpack_require__) {
	
				// optional / simple context binding
				var aFunction = __webpack_require__(11);
				module.exports = function (fn, that, length) {
					aFunction(fn);
					if (that === undefined) return fn;
					switch (length) {
						case 1:
							return function (a) {
								return fn.call(that, a);
							};
						case 2:
							return function (a, b) {
								return fn.call(that, a, b);
							};
						case 3:
							return function (a, b, c) {
								return fn.call(that, a, b, c);
							};
					}
					return function () /* ...args */{
						return fn.apply(that, arguments);
					};
				};
	
				/***/
			},
			/* 11 */
			/***/function (module, exports) {
	
				module.exports = function (it) {
					if (typeof it != 'function') throw TypeError(it + ' is not a function!');
					return it;
				};
	
				/***/
			},
			/* 12 */
			/***/function (module, exports, __webpack_require__) {
	
				var dP = __webpack_require__(13),
				    createDesc = __webpack_require__(21);
				module.exports = __webpack_require__(17) ? function (object, key, value) {
					return dP.f(object, key, createDesc(1, value));
				} : function (object, key, value) {
					object[key] = value;
					return object;
				};
	
				/***/
			},
			/* 13 */
			/***/function (module, exports, __webpack_require__) {
	
				var anObject = __webpack_require__(14),
				    IE8_DOM_DEFINE = __webpack_require__(16),
				    toPrimitive = __webpack_require__(20),
				    dP = _defineProperty5.default;
	
				exports.f = __webpack_require__(17) ? _defineProperty5.default : function defineProperty(O, P, Attributes) {
					anObject(O);
					P = toPrimitive(P, true);
					anObject(Attributes);
					if (IE8_DOM_DEFINE) try {
						return dP(O, P, Attributes);
					} catch (e) {/* empty */}
					if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
					if ('value' in Attributes) O[P] = Attributes.value;
					return O;
				};
	
				/***/
			},
			/* 14 */
			/***/function (module, exports, __webpack_require__) {
	
				var isObject = __webpack_require__(15);
				module.exports = function (it) {
					if (!isObject(it)) throw TypeError(it + ' is not an object!');
					return it;
				};
	
				/***/
			},
			/* 15 */
			/***/function (module, exports) {
	
				module.exports = function (it) {
					return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) === 'object' ? it !== null : typeof it === 'function';
				};
	
				/***/
			},
			/* 16 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function () {
					return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function get() {
							return 7;
						} }).a != 7;
				});
	
				/***/
			},
			/* 17 */
			/***/function (module, exports, __webpack_require__) {
	
				// Thank's IE8 for his funny defineProperty
				module.exports = !__webpack_require__(18)(function () {
					return Object.defineProperty({}, 'a', { get: function get() {
							return 7;
						} }).a != 7;
				});
	
				/***/
			},
			/* 18 */
			/***/function (module, exports) {
	
				module.exports = function (exec) {
					try {
						return !!exec();
					} catch (e) {
						return true;
					}
				};
	
				/***/
			},
			/* 19 */
			/***/function (module, exports, __webpack_require__) {
	
				var isObject = __webpack_require__(15),
				    document = __webpack_require__(8).document
				// in old IE typeof document.createElement is 'object'
				,
				    is = isObject(document) && isObject(document.createElement);
				module.exports = function (it) {
					return is ? document.createElement(it) : {};
				};
	
				/***/
			},
			/* 20 */
			/***/function (module, exports, __webpack_require__) {
	
				// 7.1.1 ToPrimitive(input [, PreferredType])
				var isObject = __webpack_require__(15);
				// instead of the ES6 spec version, we didn't implement @@toPrimitive case
				// and the second argument - flag - preferred type is a string
				module.exports = function (it, S) {
					if (!isObject(it)) return it;
					var fn, val;
					if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
					if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
					if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
					throw TypeError("Can't convert object to primitive value");
				};
	
				/***/
			},
			/* 21 */
			/***/function (module, exports) {
	
				module.exports = function (bitmap, value) {
					return {
						enumerable: !(bitmap & 1),
						configurable: !(bitmap & 2),
						writable: !(bitmap & 4),
						value: value
					};
				};
	
				/***/
			},
			/* 22 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
				// 19.1.2.1 Object.assign(target, source, ...)
	
				var getKeys = __webpack_require__(23),
				    gOPS = __webpack_require__(38),
				    pIE = __webpack_require__(39),
				    toObject = __webpack_require__(40),
				    IObject = __webpack_require__(27),
				    $assign = _assign4.default;
	
				// should work with symbols and should have deterministic property order (V8 bug)
				module.exports = !$assign || __webpack_require__(18)(function () {
					var A = {},
					    B = {},
					    S = (0, _symbol2.default)(),
					    K = 'abcdefghijklmnopqrst';
					A[S] = 7;
					K.split('').forEach(function (k) {
						B[k] = k;
					});
					return $assign({}, A)[S] != 7 || (0, _keys4.default)($assign({}, B)).join('') != K;
				}) ? function assign(target, source) {
					// eslint-disable-line no-unused-vars
					var T = toObject(target),
					    aLen = arguments.length,
					    index = 1,
					    getSymbols = gOPS.f,
					    isEnum = pIE.f;
					while (aLen > index) {
						var S = IObject(arguments[index++]),
						    keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
						    length = keys.length,
						    j = 0,
						    key;
						while (length > j) {
							if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
						}
					}return T;
				} : $assign;
	
				/***/
			},
			/* 23 */
			/***/function (module, exports, __webpack_require__) {
	
				// 19.1.2.14 / 15.2.3.14 Object.keys(O)
				var $keys = __webpack_require__(24),
				    enumBugKeys = __webpack_require__(37);
	
				module.exports = _keys4.default || function keys(O) {
					return $keys(O, enumBugKeys);
				};
	
				/***/
			},
			/* 24 */
			/***/function (module, exports, __webpack_require__) {
	
				var has = __webpack_require__(25),
				    toIObject = __webpack_require__(26),
				    arrayIndexOf = __webpack_require__(30)(false),
				    IE_PROTO = __webpack_require__(34)('IE_PROTO');
	
				module.exports = function (object, names) {
					var O = toIObject(object),
					    i = 0,
					    result = [],
					    key;
					for (key in O) {
						if (key != IE_PROTO) has(O, key) && result.push(key);
					} // Don't enum bug & hidden keys
					while (names.length > i) {
						if (has(O, key = names[i++])) {
							~arrayIndexOf(result, key) || result.push(key);
						}
					}return result;
				};
	
				/***/
			},
			/* 25 */
			/***/function (module, exports) {
	
				var hasOwnProperty = {}.hasOwnProperty;
				module.exports = function (it, key) {
					return hasOwnProperty.call(it, key);
				};
	
				/***/
			},
			/* 26 */
			/***/function (module, exports, __webpack_require__) {
	
				// to indexed object, toObject with fallback for non-array-like ES3 strings
				var IObject = __webpack_require__(27),
				    defined = __webpack_require__(29);
				module.exports = function (it) {
					return IObject(defined(it));
				};
	
				/***/
			},
			/* 27 */
			/***/function (module, exports, __webpack_require__) {
	
				// fallback for non-array-like ES3 and non-enumerable old V8 strings
				var cof = __webpack_require__(28);
				module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
					return cof(it) == 'String' ? it.split('') : Object(it);
				};
	
				/***/
			},
			/* 28 */
			/***/function (module, exports) {
	
				var toString = {}.toString;
	
				module.exports = function (it) {
					return toString.call(it).slice(8, -1);
				};
	
				/***/
			},
			/* 29 */
			/***/function (module, exports) {
	
				// 7.2.1 RequireObjectCoercible(argument)
				module.exports = function (it) {
					if (it == undefined) throw TypeError("Can't call method on  " + it);
					return it;
				};
	
				/***/
			},
			/* 30 */
			/***/function (module, exports, __webpack_require__) {
	
				// false -> Array#indexOf
				// true  -> Array#includes
				var toIObject = __webpack_require__(26),
				    toLength = __webpack_require__(31),
				    toIndex = __webpack_require__(33);
				module.exports = function (IS_INCLUDES) {
					return function ($this, el, fromIndex) {
						var O = toIObject($this),
						    length = toLength(O.length),
						    index = toIndex(fromIndex, length),
						    value;
						// Array#includes uses SameValueZero equality algorithm
						if (IS_INCLUDES && el != el) while (length > index) {
							value = O[index++];
							if (value != value) return true;
							// Array#toIndex ignores holes, Array#includes - not
						} else for (; length > index; index++) {
								if (IS_INCLUDES || index in O) {
									if (O[index] === el) return IS_INCLUDES || index || 0;
								}
							}return !IS_INCLUDES && -1;
					};
				};
	
				/***/
			},
			/* 31 */
			/***/function (module, exports, __webpack_require__) {
	
				// 7.1.15 ToLength
				var toInteger = __webpack_require__(32),
				    min = Math.min;
				module.exports = function (it) {
					return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
				};
	
				/***/
			},
			/* 32 */
			/***/function (module, exports) {
	
				// 7.1.4 ToInteger
				var ceil = Math.ceil,
				    floor = Math.floor;
				module.exports = function (it) {
					return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
				};
	
				/***/
			},
			/* 33 */
			/***/function (module, exports, __webpack_require__) {
	
				var toInteger = __webpack_require__(32),
				    max = Math.max,
				    min = Math.min;
				module.exports = function (index, length) {
					index = toInteger(index);
					return index < 0 ? max(index + length, 0) : min(index, length);
				};
	
				/***/
			},
			/* 34 */
			/***/function (module, exports, __webpack_require__) {
	
				var shared = __webpack_require__(35)('keys'),
				    uid = __webpack_require__(36);
				module.exports = function (key) {
					return shared[key] || (shared[key] = uid(key));
				};
	
				/***/
			},
			/* 35 */
			/***/function (module, exports, __webpack_require__) {
	
				var global = __webpack_require__(8),
				    SHARED = '__core-js_shared__',
				    store = global[SHARED] || (global[SHARED] = {});
				module.exports = function (key) {
					return store[key] || (store[key] = {});
				};
	
				/***/
			},
			/* 36 */
			/***/function (module, exports) {
	
				var id = 0,
				    px = Math.random();
				module.exports = function (key) {
					return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
				};
	
				/***/
			},
			/* 37 */
			/***/function (module, exports) {
	
				// IE 8- don't enum bug keys
				module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
	
				/***/
			},
			/* 38 */
			/***/function (module, exports) {
	
				exports.f = _getOwnPropertySymbols2.default;
	
				/***/
			},
			/* 39 */
			/***/function (module, exports) {
	
				exports.f = {}.propertyIsEnumerable;
	
				/***/
			},
			/* 40 */
			/***/function (module, exports, __webpack_require__) {
	
				// 7.1.13 ToObject(argument)
				var defined = __webpack_require__(29);
				module.exports = function (it) {
					return Object(defined(it));
				};
	
				/***/
			},
			/* 41 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = {
					on: function on(el, type, callback, useCapture) {
						el.addEventListener(type, callback, useCapture);
					},
					off: function off(el, type, callback, useCapture) {
						if (el.removeEventListener) {
							el.removeEventListener(type, callback, useCapture);
						}
					},
					once: function once(el, type, callback, useCapture) {
						var _this = this;
	
						var remove = function remove() {
							_this.off(el, type, callback, useCapture);
							callback.call(el);
						};
						this.on(el, type, remove);
					},
	
					keyCodes: {
						esc: 27,
						tab: 9,
						enter: 13,
						space: 32,
						'delete': [8, 46],
						up: 38,
						left: 37,
						right: 39,
						down: 40
					}
				};
	
				/***/
			},
			/* 42 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__webpack_require__(43);
				__vue_script__ = __webpack_require__(47);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/touchRipple.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(56);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./touchRipple.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 43 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(44);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(46)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./touchRipple.vue", function () {
							var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./touchRipple.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 44 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(45)();
				// imports
	
				// module
				exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.tab-transition {\n  -webkit-animation-name: forcus;\n          animation-name: forcus;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(.42, 0, .58, 1);\n          animation-timing-function: cubic-bezier(.42, 0, .58, 1);\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n.tab-enter,\n.tab-leave {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0;\n}\n.touch-transition {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 0;\n}\n.touch-enter {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity:1;\n}\n\n@-webkit-keyframes forcus{\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n  50% {\n    -webkit-transform: scale(.65);\n            transform: scale(.65);\n  }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n}\n\n@keyframes forcus{\n  0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n  50% {\n    -webkit-transform: scale(.65);\n            transform: scale(.65);\n  }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n  }\n}\n", ""]);
	
				// exports
	
				/***/
			},
			/* 45 */
			/***/function (module, exports) {
	
				/*
	   	MIT License http://www.opensource.org/licenses/mit-license.php
	   	Author Tobias Koppers @sokra
	   */
				// css base code, injected by the css-loader
				module.exports = function () {
					var list = [];
	
					// return the list of modules as css string
					list.toString = function toString() {
						var result = [];
						for (var i = 0; i < this.length; i++) {
							var item = this[i];
							if (item[2]) {
								result.push("@media " + item[2] + "{" + item[1] + "}");
							} else {
								result.push(item[1]);
							}
						}
						return result.join("");
					};
	
					// import a list of modules into the list
					list.i = function (modules, mediaQuery) {
						if (typeof modules === "string") modules = [[null, modules, ""]];
						var alreadyImportedModules = {};
						for (var i = 0; i < this.length; i++) {
							var id = this[i][0];
							if (typeof id === "number") alreadyImportedModules[id] = true;
						}
						for (i = 0; i < modules.length; i++) {
							var item = modules[i];
							// skip already imported module
							// this implementation is not 100% perfect for weird media query combinations
							//  when a module is imported multiple times with different media queries.
							//  I hope this will never occur (Hey this way we have smaller bundles)
							if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
								if (mediaQuery && !item[2]) {
									item[2] = mediaQuery;
								} else if (mediaQuery) {
									item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
								}
								list.push(item);
							}
						}
					};
					return list;
				};
	
				/***/
			},
			/* 46 */
			/***/function (module, exports, __webpack_require__) {
	
				/*
	   	MIT License http://www.opensource.org/licenses/mit-license.php
	   	Author Tobias Koppers @sokra
	   */
				var stylesInDom = {},
				    memoize = function memoize(fn) {
					var memo;
					return function () {
						if (typeof memo === "undefined") memo = fn.apply(this, arguments);
						return memo;
					};
				},
				    isOldIE = memoize(function () {
					return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
					);
				}),
				    getHeadElement = memoize(function () {
					return document.head || document.getElementsByTagName("head")[0];
				}),
				    singletonElement = null,
				    singletonCounter = 0,
				    styleElementsInsertedAtTop = [];
	
				module.exports = function (list, options) {
					if (false) {
						if ((typeof document === 'undefined' ? 'undefined' : (0, _typeof3.default)(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
					}
	
					options = options || {};
					// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
					// tags it will allow on a page
					if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
					// By default, add <style> tags to the bottom of <head>.
					if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
					var styles = listToStyles(list);
					addStylesToDom(styles, options);
	
					return function update(newList) {
						var mayRemove = [];
						for (var i = 0; i < styles.length; i++) {
							var item = styles[i];
							var domStyle = stylesInDom[item.id];
							domStyle.refs--;
							mayRemove.push(domStyle);
						}
						if (newList) {
							var newStyles = listToStyles(newList);
							addStylesToDom(newStyles, options);
						}
						for (var i = 0; i < mayRemove.length; i++) {
							var domStyle = mayRemove[i];
							if (domStyle.refs === 0) {
								for (var j = 0; j < domStyle.parts.length; j++) {
									domStyle.parts[j]();
								}delete stylesInDom[domStyle.id];
							}
						}
					};
				};
	
				function addStylesToDom(styles, options) {
					for (var i = 0; i < styles.length; i++) {
						var item = styles[i];
						var domStyle = stylesInDom[item.id];
						if (domStyle) {
							domStyle.refs++;
							for (var j = 0; j < domStyle.parts.length; j++) {
								domStyle.parts[j](item.parts[j]);
							}
							for (; j < item.parts.length; j++) {
								domStyle.parts.push(addStyle(item.parts[j], options));
							}
						} else {
							var parts = [];
							for (var j = 0; j < item.parts.length; j++) {
								parts.push(addStyle(item.parts[j], options));
							}
							stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
						}
					}
				}
	
				function listToStyles(list) {
					var styles = [];
					var newStyles = {};
					for (var i = 0; i < list.length; i++) {
						var item = list[i];
						var id = item[0];
						var css = item[1];
						var media = item[2];
						var sourceMap = item[3];
						var part = { css: css, media: media, sourceMap: sourceMap };
						if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
					}
					return styles;
				}
	
				function insertStyleElement(options, styleElement) {
					var head = getHeadElement();
					var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
					if (options.insertAt === "top") {
						if (!lastStyleElementInsertedAtTop) {
							head.insertBefore(styleElement, head.firstChild);
						} else if (lastStyleElementInsertedAtTop.nextSibling) {
							head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
						} else {
							head.appendChild(styleElement);
						}
						styleElementsInsertedAtTop.push(styleElement);
					} else if (options.insertAt === "bottom") {
						head.appendChild(styleElement);
					} else {
						throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
					}
				}
	
				function removeStyleElement(styleElement) {
					styleElement.parentNode.removeChild(styleElement);
					var idx = styleElementsInsertedAtTop.indexOf(styleElement);
					if (idx >= 0) {
						styleElementsInsertedAtTop.splice(idx, 1);
					}
				}
	
				function createStyleElement(options) {
					var styleElement = document.createElement("style");
					styleElement.type = "text/css";
					insertStyleElement(options, styleElement);
					return styleElement;
				}
	
				function addStyle(obj, options) {
					var styleElement, update, remove;
	
					if (options.singleton) {
						var styleIndex = singletonCounter++;
						styleElement = singletonElement || (singletonElement = createStyleElement(options));
						update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
						remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
					} else {
						styleElement = createStyleElement(options);
						update = applyToTag.bind(null, styleElement);
						remove = function remove() {
							removeStyleElement(styleElement);
						};
					}
	
					update(obj);
	
					return function updateStyle(newObj) {
						if (newObj) {
							if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
							update(obj = newObj);
						} else {
							remove();
						}
					};
				}
	
				var replaceText = function () {
					var textStore = [];
	
					return function (index, replacement) {
						textStore[index] = replacement;
						return textStore.filter(Boolean).join('\n');
					};
				}();
	
				function applyToSingletonTag(styleElement, index, remove, obj) {
					var css = remove ? "" : obj.css;
	
					if (styleElement.styleSheet) {
						styleElement.styleSheet.cssText = replaceText(index, css);
					} else {
						var cssNode = document.createTextNode(css);
						var childNodes = styleElement.childNodes;
						if (childNodes[index]) styleElement.removeChild(childNodes[index]);
						if (childNodes.length) {
							styleElement.insertBefore(cssNode, childNodes[index]);
						} else {
							styleElement.appendChild(cssNode);
						}
					}
				}
	
				function applyToTag(styleElement, obj) {
					var css = obj.css;
					var media = obj.media;
					var sourceMap = obj.sourceMap;
	
					if (media) {
						styleElement.setAttribute("media", media);
					}
	
					if (sourceMap) {
						// https://developer.chrome.com/devtools/docs/javascript-debugging
						// this makes source maps inside style tags work properly in Chrome
						css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
						// http://stackoverflow.com/a/26603875
						css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent((0, _stringify2.default)(sourceMap)))) + " */";
					}
	
					if (styleElement.styleSheet) {
						styleElement.styleSheet.cssText = css;
					} else {
						while (styleElement.firstChild) {
							styleElement.removeChild(styleElement.firstChild);
						}
						styleElement.appendChild(document.createTextNode(css));
					}
				}
	
				/***/
			},
			/* 47 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _create = __webpack_require__(48);
	
				var _create2 = _interopRequireDefault(_create);
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _muiTheme = __webpack_require__(55);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function calcDiag(a, b) {
					return Math.sqrt(a * a + b * b);
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								width: '100%',
								height: '100%',
								position: 'absolute',
								top: '0',
								left: '0',
								overflow: 'hidden'
							},
							center: {
								position: 'absolute',
								top: '0',
								left: '0',
								height: '100%',
								width: '100%',
								borderRadius: '50%',
								transition: _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform'),
								backgroundColor: _muiTheme.baseTheme.defaultActiveColor
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							ripples: [],
							centerStyle: styles.center,
							tabRippleStyle: {}
						};
					},
					props: {
						styleObj: Object,
						center: Boolean,
						tabPressed: Boolean
					},
					ready: function ready() {
						this.tabRippleStyle = this.getRippleStyle(null, true);
					},
					methods: {
						handleClick: function handleClick(event) {
							event.preventDefault();
							this.addRipple(event);
						},
						handleTouchStart: function handleTouchStart(event) {
							if (event.touches) {
								this.firstTouchY = event.touches[0].clientY;
								this.firstTouchX = event.touches[0].clientX;
								this.startTime = Date.now();
							}
						},
						handleTouchEnd: function handleTouchEnd(event) {
							var deltaY = Math.abs(event.changedTouches[0].clientY - this.firstTouchY);
							var deltaX = Math.abs(event.changedTouches[0].clientX - this.firstTouchX);
							if (deltaY < 6 && deltaX < 6) {
								this.addRipple(event);
							}
						},
						addRipple: function addRipple(event) {
							var _this = this;
	
							var ripple = (0, _create2.default)(null);
							ripple.style = this.center ? this.centerStyle : this.getRippleStyle(event);
							this.ripples.push(ripple);
							setTimeout(function () {
								_this.ripples.shift();
							}, 2000);
						},
						getRippleStyle: function getRippleStyle(event, focus) {
							var style = (0, _create2.default)(null);
							var el = this.$el;
							var elHeight = el.offsetHeight;
							var elWidth = el.offsetWidth;
							var rect = el.getBoundingClientRect();
							var offsetTop = rect.top + document.body.scrollTop;
							var offsetLeft = rect.left + document.body.scrollLeft;
							var isTouchEvent = event && event.touches && event.touches.length;
							var pageX = isTouchEvent ? event.touches[0].pageX : focus ? elWidth / 2 + offsetLeft : event.pageX;
							var pageY = isTouchEvent ? event.touches[0].pageY : focus ? elHeight / 2 + offsetTop : event.pageY;
							var pointerX = pageX - offsetLeft;
							var pointerY = pageY - offsetTop;
							var topLeftDiag = calcDiag(pointerX, pointerY);
							var topRightDiag = calcDiag(elWidth - pointerX, pointerY);
							var botRightDiag = calcDiag(elWidth - pointerX, elHeight - pointerY);
							var botLeftDiag = calcDiag(pointerX, elHeight - pointerY);
							var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
							var rippleSize = rippleRadius * 2;
							var left = pointerX - rippleRadius;
							var top = pointerY - rippleRadius;
	
							style.height = rippleSize + 'px';
							style.width = rippleSize + 'px';
							style.top = top + 'px';
							style.left = left + 'px';
	
							return (0, _assign2.default)({}, this.centerStyle, style);
						}
					}
				};
	
				/***/
			},
			/* 48 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = { "default": __webpack_require__(49), __esModule: true };
	
				/***/
			},
			/* 49 */
			/***/function (module, exports, __webpack_require__) {
	
				__webpack_require__(50);
				var $Object = __webpack_require__(9).Object;
				module.exports = function create(P, D) {
					return $Object.create(P, D);
				};
	
				/***/
			},
			/* 50 */
			/***/function (module, exports, __webpack_require__) {
	
				var $export = __webpack_require__(7);
				// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
				$export($export.S, 'Object', { create: __webpack_require__(51) });
	
				/***/
			},
			/* 51 */
			/***/function (module, exports, __webpack_require__) {
	
				// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
				var anObject = __webpack_require__(14),
				    dPs = __webpack_require__(52),
				    enumBugKeys = __webpack_require__(37),
				    IE_PROTO = __webpack_require__(34)('IE_PROTO'),
				    Empty = function Empty() {/* empty */},
				    PROTOTYPE = 'prototype';
	
				// Create object with fake `null` prototype: use iframe Object with cleared prototype
				var _createDict = function createDict() {
					// Thrash, waste and sodomy: IE GC bug
					var iframe = __webpack_require__(19)('iframe'),
					    i = enumBugKeys.length,
					    gt = '>',
					    iframeDocument;
					iframe.style.display = 'none';
					__webpack_require__(53).appendChild(iframe);
					iframe.src = 'javascript:'; // eslint-disable-line no-script-url
					// createDict = iframe.contentWindow.Object;
					// html.removeChild(iframe);
					iframeDocument = iframe.contentWindow.document;
					iframeDocument.open();
					iframeDocument.write('<script>document.F=Object</script' + gt);
					iframeDocument.close();
					_createDict = iframeDocument.F;
					while (i--) {
						delete _createDict[PROTOTYPE][enumBugKeys[i]];
					}return _createDict();
				};
	
				module.exports = _create4.default || function create(O, Properties) {
					var result;
					if (O !== null) {
						Empty[PROTOTYPE] = anObject(O);
						result = new Empty();
						Empty[PROTOTYPE] = null;
						// add "__proto__" for Object.getPrototypeOf polyfill
						result[IE_PROTO] = O;
					} else result = _createDict();
					return Properties === undefined ? result : dPs(result, Properties);
				};
	
				/***/
			},
			/* 52 */
			/***/function (module, exports, __webpack_require__) {
	
				var dP = __webpack_require__(13),
				    anObject = __webpack_require__(14),
				    getKeys = __webpack_require__(23);
	
				module.exports = __webpack_require__(17) ? _defineProperties2.default : function defineProperties(O, Properties) {
					anObject(O);
					var keys = getKeys(Properties),
					    length = keys.length,
					    i = 0,
					    P;
					while (length > i) {
						dP.f(O, P = keys[i++], Properties[P]);
					}return O;
				};
	
				/***/
			},
			/* 53 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = __webpack_require__(8).document && document.documentElement;
	
				/***/
			},
			/* 54 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = {
	
					easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
					easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
	
					easeOut: function easeOut(duration, property, delay, easeFunction) {
						easeFunction = easeFunction || this.easeOutFunction;
	
						if (property && Object.prototype.toString.call(property) === '[object Array]') {
							var transitions = '';
							for (var i = 0; i < property.length; i++) {
								if (transitions) transitions += ',';
								transitions += this.create(duration, property[i], delay, easeFunction);
							}
	
							return transitions;
						} else {
							return this.create(duration, property, delay, easeFunction);
						}
					},
					create: function create(duration, property, delay, easeFunction) {
						duration = duration || '450ms';
						property = property || 'all';
						delay = delay || '0ms';
						easeFunction = easeFunction || 'linear';
	
						return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
					}
				};
	
				/***/
			},
			/* 55 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var navPadding = '24px';
				var navHeight = '48px';
	
				var baseTheme = exports.baseTheme = {
					navBar: {
						lineHeight: navHeight,
						padding: navPadding
					},
					button: {
						height: '36px',
						iconHeight: '48px'
					},
					disabledColor: 'rgba(0, 0, 0, 0.3)',
					defaultActiveColor: 'rgba(163, 163, 163, 0.71)'
				};
	
				/***/
			},
			/* 56 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\"\n  @click=\"handleClick\"\n  @touchstart=\"handleTouchStart($event)\"\n  @touchend=\"handleTouchEnd($event)\"\n>\n  <div v-show=\"tabPressed\" :style=\"tabRippleStyle\" transition=\"tab\"></div>\n  <div v-for=\"ripple in ripples\" :style=\"ripple.style\" transition=\"touch\"></div>\n</div>\n";
	
				/***/
			},
			/* 57 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = {
	
					/**
	     * The relative brightness of any point in a colorspace, normalized to 0 for
	     * darkest black and 1 for lightest white. RGB colors only. Does not take
	     * into account alpha values.
	     *
	     * TODO:
	     * - Take into account alpha values.
	     * - Identify why there are minor discrepancies for some use cases
	     *   (i.e. #F0F & #FFF). Note that these cases rarely occur.
	     *
	     * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	     */
	
					luminance: function luminance(color) {
						color = this._decomposeColor(color);
	
						if (color.type.indexOf('rgb') > -1) {
							var rgb = color.values.map(function (val) {
								val /= 255; // normalized
								return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
							});
	
							return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
						} else {
							return -1;
						}
					},
	
					/**
	     * @params:
	     * additionalValue = An extra value that has been calculated but not included
	     *                   with the original color object, such as an alpha value.
	     */
					_convertColorToString: function _convertColorToString(color, additonalValue) {
						var str = color.type + '(' + parseInt(color.values[0]) + ', ' + parseInt(color.values[1]) + ', ' + parseInt(color.values[2]);
	
						if (additonalValue !== undefined) {
							str += ', ' + additonalValue + ')';
						} else if (color.values.length === 4) {
							str += ', ' + color.values[3] + ')';
						} else {
							str += ')';
						}
	
						return str;
					},
	
					// Converts a color from hex format to rgb format.
					_convertHexToRGB: function _convertHexToRGB(color) {
						if (color.length === 4) {
							var extendedColor = '#';
							for (var i = 1; i < color.length; i++) {
								extendedColor += color.charAt(i) + color.charAt(i);
							}
							color = extendedColor;
						}
	
						var values = {
							r: parseInt(color.substr(1, 2), 16),
							g: parseInt(color.substr(3, 2), 16),
							b: parseInt(color.substr(5, 2), 16)
						};
	
						return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
					},
	
					// Returns the type and values of a color of any given type.
					_decomposeColor: function _decomposeColor(color) {
						if (color.charAt(0) === '#') {
							return this._decomposeColor(this._convertHexToRGB(color));
						}
	
						var marker = color.indexOf('(');
						var type = color.substring(0, marker);
						var values = color.substring(marker + 1, color.length - 1).split(',');
	
						return { type: type, values: values };
					},
	
					// Set the absolute transparency of a color.
					// Any existing alpha values are overwritten.
					fade: function fade(color, amount) {
						color = this._decomposeColor(color);
						if (color.type === 'rgb' || color.type === 'hsl') color.type += 'a';
						return this._convertColorToString(color, amount);
					},
	
					// Desaturates rgb and sets opacity (defaults to 0.15)
					lighten: function lighten(color, amount) {
						var opacity = arguments.length <= 2 || arguments[2] === undefined ? '0.15' : arguments[2];
	
						color = this._decomposeColor(color);
	
						if (color.type.indexOf('hsl') > -1) {
							color.values[2] += amount;
							return this._decomposeColor(this._convertColorToString(color));
						} else if (color.type.indexOf('rgb') > -1) {
							for (var i = 0; i < 3; i++) {
								color.values[i] *= 1 + amount;
								if (color.values[i] > 255) color.values[i] = 255;
							}
						}
	
						if (color.type.indexOf('a') <= -1) color.type += 'a';
	
						return this._convertColorToString(color, opacity);
					},
					darken: function darken(color, amount) {
						color = this._decomposeColor(color);
	
						if (color.type.indexOf('hsl') > -1) {
							color.values[2] += amount;
							return this._decomposeColor(this._convertColorToString(color));
						} else if (color.type.indexOf('rgb') > -1) {
							for (var i = 0; i < 3; i++) {
								color.values[i] *= 1 - amount;
								if (color.values[i] < 0) color.values[i] = 0;
							}
						}
	
						return this._convertColorToString(color);
					},
	
					// Calculates the contrast ratio between two colors.
					//
					// Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
					contrastRatio: function contrastRatio(background, foreground) {
						var lumA = this.luminance(background);
						var lumB = this.luminance(foreground);
	
						if (lumA >= lumB) {
							return ((lumA + 0.05) / (lumB + 0.05)).toFixed(2);
						} else {
							return ((lumB + 0.05) / (lumA + 0.05)).toFixed(2);
						}
					},
	
					/**
	     * Determines how readable a color combination is based on its level.
	     * Levels are defined from @LeaVerou:
	     * https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/contrast-ratio.js
	     */
					contrastRatioLevel: function contrastRatioLevel(background, foreground) {
						var levels = {
							'fail': {
								range: [0, 3],
								color: 'hsl(0, 100%, 40%)'
							},
							'aa-large': {
								range: [3, 4.5],
								color: 'hsl(40, 100%, 45%)'
							},
							'aa': {
								range: [4.5, 7],
								color: 'hsl(80, 60%, 45%)'
							},
							'aaa': {
								range: [7, 22],
								color: 'hsl(95, 60%, 41%)'
							}
						};
	
						var ratio = this.contrastRatio(background, foreground);
	
						for (var level in levels) {
							var range = levels[level].range;
							if (ratio >= range[0] && ratio <= range[1]) return level;
						}
					}
				};
	
				/***/
			},
			/* 58 */
			/***/function (module, exports) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var zDepthShadows = exports.zDepthShadows = [[1, 6, 0.12, 1, 4, 0.12], [3, 10, 0.16, 3, 10, 0.23], [10, 30, 0.19, 6, 10, 0.23], [14, 45, 0.25, 10, 18, 0.22], [19, 60, 0.30, 15, 20, 0.22]].map(function (d) {
					return "0 " + d[0] + "px " + d[1] + "px rgba(0, 0, 0, " + d[2] + "),\n   0 " + d[3] + "px " + d[4] + "px rgba(0, 0, 0, " + d[5] + ")";
				});
	
				/***/
			},
			/* 59 */
			/***/function (module, exports) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.delayfocus = delayfocus;
				function delayfocus(val) {
					if (!val) {
						return;
					}
					var el = this.el;
					setTimeout(function () {
						el.focus();
					}, 0);
				}
	
				/***/
			},
			/* 60 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.isIE = isIE;
				function isIE() {
					var myNav = navigator.userAgent.toLowerCase();
					return myNav.indexOf('msie') != -1 ? parseInt(myNav.split('msie')[1]) : false;
				}
	
				/***/
			},
			/* 61 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\"\n    v-delayfocus=\"isIE\"\n    @focus=\"handleFocus($event)\"\n    @blur=\"handleBlur($event)\"\n    @touchstart=\"handleTouchStart($event)\"\n    @touchend=\"handleTouchEnd($event)\"\n    @mouseenter=\"handleMouseEnter\"\n    @mouseleave=\"handleMouseLeave\"\n    @click=\"handleClick\"\n    :tabIndex=\"keyboardFocus ? 0 : -1\">\n  <span v-if=\"label\" :style=\"mLabelStyle\" >{{label}}</span>\n  <span v-if=\"iconClass\" :class=\"iconClass\" :style=\"mIconStyle\"></span>\n  <touch-ripple v-if=\"!disabled && ripple\" :tab-pressed=\"focused\"></touch-ripple>\n</div>\n";
	
				/***/
			},
			/* 62 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(63);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/NavBar.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(72);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./NavBar.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 63 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _BaseButton = __webpack_require__(2);
	
				var _BaseButton2 = _interopRequireDefault(_BaseButton);
	
				var _IconButton = __webpack_require__(64);
	
				var _IconButton2 = _interopRequireDefault(_IconButton);
	
				var _muiTheme = __webpack_require__(55);
	
				var _util = __webpack_require__(60);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var button = _muiTheme.baseTheme.button;
						var navBar = _muiTheme.baseTheme.navBar;
	
						var useFlexbox = (0, _util.isIE)() > 9;
						var styles = {
							root: {
								display: useFlexbox ? '-ms-flexbox' : 'flex',
								position: 'fixed',
	
								width: '100%',
								backgroundColor: 'rgb(41, 43, 38)',
								lineHeight: navBar.lineHeight,
								height: navBar.lineHeight
							},
							title: {
								flex: '1',
								padding: '0 20px',
								color: 'white',
								fontWeight: '700',
								fontSize: '20px'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mTitleStyle: (0, _assign2.default)(styles.title, this.titleStyle)
						};
					},
					props: {
						barLeft: Array,
						barRight: Array,
						title: Array,
						styleObj: Object,
						titleStyle: Object
					},
					components: {
						BaseButton: _BaseButton2.default,
						IconButton: _IconButton2.default
					}
				};
	
				/***/
			},
			/* 64 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(65);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/IconButton.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(71);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./IconButton.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 65 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _events = __webpack_require__(41);
	
				var _events2 = _interopRequireDefault(_events);
	
				var _touchRipple = __webpack_require__(42);
	
				var _touchRipple2 = _interopRequireDefault(_touchRipple);
	
				var _common = __webpack_require__(58);
	
				var _Tooltip = __webpack_require__(66);
	
				var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
				var _muiTheme = __webpack_require__(55);
	
				var _directive = __webpack_require__(59);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var button = _muiTheme.baseTheme.button;
						var disabledColor = _muiTheme.baseTheme.disabledColor;
	
						var styles = {
							root: {
								borderRadius: '50%',
								height: button.iconHeight,
								width: '48px',
								border: '10px',
								lineHeight: '48px',
								display: 'inline-block',
								position: 'relative',
								color: this.disabled ? disabledColor : 'none',
								outline: 'none',
								textDecoration: 'none',
								backgroundColor: 'rgba(0,0,0,0)',
								cursor: this.disabled ? 'default' : 'pointer',
								boxShadow: this.shadowDepth && !this.disabled ? _common.zDepthShadows[this.shadowDepth] : 'none'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							centerStyle: {
								marginLeft: '50%',
								transform: 'translateX(-50%)',
								lineHeight: '48px'
							},
							msg: false,
							tabPressed: false,
							tabListening: false,
							focused: false,
							forcusTimeout: null
						};
					},
					props: {
						shadowDepth: {
							type: Number,
							default: -1
						},
						disabled: Boolean,
						tooltip: String,
						verticalPosition: {
							type: String,
							default: "bottom"
						},
						horizontalPosition: {
							type: String,
							default: "left"
						},
						onClick: Function,
						onMouseEnter: Function,
						onMouseLeave: Function,
						iconClass: String,
						link: String,
						styleObj: Object,
						keyboardFocus: {
							type: Boolean,
							default: true
						},
						isFloat: {
							type: Boolean,
							default: true
						}
					},
					components: {
						touchRipple: _touchRipple2.default,
						Tooltip: _Tooltip2.default
					},
					ready: function ready() {
						var _this = this;
	
						if (!this.tabListening) {
							_events2.default.on(window, 'keydown', function (event) {
								_this.tabPressed = _events2.default.keyCodes.tab === event.keyCode;
							});
							this.tabListening = true;
						}
					},
					directives: {
						'delayfocus': _directive.delayfocus
					},
					methods: {
						handleFocus: function handleFocus() {
							var _this2 = this;
	
							this.forcusTimeout = setTimeout(function () {
								if (_this2.tabPressed) {
									_this2.focused = true;
								}
							}, 150);
						},
						cancelFocusTimeout: function cancelFocusTimeout() {
							if (this.forcusTimeout) {
								clearTimeout(this.forcusTimeout);
								this.forcusTimeout = null;
							}
						},
						handleBlur: function handleBlur() {
							this.tabPressed = false;
							this.focused = false;
							this.cancelFocusTimeout();
						},
						handleTouchStart: function handleTouchStart(event) {
							if (this.isFloat) {
								this.mRootStyle.boxShadow = _common.zDepthShadows[this.shadowDepth + 1];
							}
						},
						handleTouchEnd: function handleTouchEnd(event) {
							if (this.isFloat) {
								this.mRootStyle.boxShadow = _common.zDepthShadows[this.shadowDepth];
							}
						},
						handleMouseEnter: function handleMouseEnter() {
							if (!this.disabled) {
								this.msg = true;
							}
						},
						handleMouseLeave: function handleMouseLeave() {
							if (!this.disabled) {
								this.msg = false;
							}
						},
						handleClick: function handleClick() {
							if (this.disabled) {
								return;
							}
							if (this.link && this.link.startsWith('http')) {
								window.open(this.link);
							} else if (this.link) {
								console.warn(this.link + ' is not a valid URL');
							}
							if (this.onClick) {
								this.onClick();
							}
						}
					}
				};
	
				/***/
			},
			/* 66 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__webpack_require__(67);
				__vue_script__ = __webpack_require__(69);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/Tooltip.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(70);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./Tooltip.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 67 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(68);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(46)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function () {
							var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 68 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(45)();
				// imports
	
				// module
				exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.tooltip-transition {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.tooltip-enter,\n.tooltip-leave {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n", ""]);
	
				// exports
	
				/***/
			},
			/* 69 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								position: 'absolute',
								color: '#fff',
								fontSize: '10px',
								fontFamily: 'Roboto, sans-serif',
								overflow: 'hidden',
								minWidth: '50px',
								lineHeight: '3',
	
								whiteSpace: 'nowrap',
								fontWeight: '500',
								height: '30px',
								boxSizing: 'border-box',
								top: '-1000em',
	
								opacity: '1',
								backgroundColor: 'rgba(97, 97, 97, .9)',
								borderRadius: '2px',
								willChange: 'transform',
								padding: '0px 8px',
								transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'], null)
							}
						};
						var vo = this.verticalPosition === 'top' ? '-30px' : '30px';
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							verticalOffset: vo
						};
					},
					ready: function ready() {
						var parentWidth = +this.$parent.$el.style.width.replace('px', '');
						var width = +this.$el.offsetWidth;
						var offset = parentWidth - width;
						this.$el.style.left = this.horizontalPosition === 'left' ? '0' : this.horizontalPosition === 'center' ? offset / 2 + 'px' : offset + 'px';
					},
					watch: {
						note: function note() {
							if (this.note) {
								this.$el.style.top = this.verticalPosition === 'top' ? '0px' : '18px';
								this.$el.style.visibility = 'visible';
								this.$el.style.opacity = '1';
								this.$el.style.transform = 'translate(0px, ' + this.verticalOffset + ')';
							} else {
								this.$el.style.top = '-1000em';
								this.$el.style.visibility = 'hidden';
								this.$el.style.opacity = '0';
								this.$el.style.transform = 'translate(0, 0)';
							}
						}
					},
					props: {
						styleObj: Object,
						note: Boolean,
						message: String,
						verticalPosition: {
							type: String,
							default: 'top'
						},
						horizontalPosition: {
							type: String,
							default: 'left'
						}
					},
					methods: {
						handleClick: function handleClick() {
							this.$parent.$refs.touch.$el.click();
						}
					}
				};
	
				/***/
			},
			/* 70 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\" @click=\"handleClick\">\n  {{message}}\n</div>\n";
	
				/***/
			},
			/* 71 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\"\n    v-delayfocus=\"true\"\n    @focus=\"handleFocus($event)\"\n    @blur=\"handleBlur($event)\"\n    @touchstart=\"handleTouchStart($event)\"\n    @touchend=\"handleTouchEnd($event)\"\n    @mouseenter=\"handleMouseEnter\"\n    @mouseleave=\"handleMouseLeave\"\n    @click=\"handleClick\"\n    :tabIndex=\"keyboardFocus ? 0 : -1\">\n  <tooltip\n    v-if=\"tooltip\"\n    :note=\"msg\"\n    :message=\"tooltip\"\n    :vertical-position=\"verticalPosition\"\n    :horizontal-position=\"horizontalPosition\">\n  </tooltip>\n\n  <span :class=\"iconClass\" :style=\"centerStyle\"></span>\n  <touch-ripple v-ref:touch :tab-pressed=\"focused\" v-if=\"!disabled\" :center=\"true\" ></touch-ripple>\n</div>\n";
	
				/***/
			},
			/* 72 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\">\n  <div :style=\"\">\n    <slot name=\"leftNav\"></slot>\n  </div>\n  <div :style=\"mTitleStyle\">\n    <slot name=\"title\"></slot>\n  </div>\n  <div :style=\"\">\n    <slot name=\"rightNav\"></slot>\n  </div>\n</div>\n";
	
				/***/
			},
			/* 73 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(74);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/MenuItem.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(75);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./MenuItem.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 74 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _BaseButton = __webpack_require__(2);
	
				var _BaseButton2 = _interopRequireDefault(_BaseButton);
	
				var _IconButton = __webpack_require__(64);
	
				var _IconButton2 = _interopRequireDefault(_IconButton);
	
				var _util = __webpack_require__(60);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var useFlexbox = (0, _util.isIE)() > 9;
						var styles = {
							root: {
								display: useFlexbox ? '-ms-flexbox' : 'flex',
								justifyContent: 'space-between',
								MsFlexPack: 'justify'
							},
							icon: {
								flex: '2'
							},
							button: {
								flex: '5',
								lineHeight: '48px',
								width: '100%'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mButtonStyle: (0, _assign2.default)(styles.button, this.buttonStyle),
							mIconStyle: (0, _assign2.default)(styles.icon, this.iconStyle)
						};
					},
					props: {
						styleObj: Object,
						isHorizen: Boolean,
	
						shadowDepth: Number,
						label: String,
						hover: Boolean,
						link: String,
						buttonStyle: Object,
						labelStyle: Object,
						ripple: {
							type: Boolean,
							default: true
						},
	
						iconClass: String,
						iconStyle: Object,
						iconOnClick: Function,
						labelOnClick: Function
					},
					components: {
						BaseButton: _BaseButton2.default,
						IconButton: _IconButton2.default
					},
					methods: {}
				};
	
				/***/
			},
			/* 75 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\">\n  <base-button\n    :style-obj=\"mButtonStyle\"\n    :shadow-depth=\"shadowDepth\"\n    :label=\"label\"\n    :hover=\"ripple\"\n    :link=\"link\"\n    :label-style=\"labelStyle\"\n    :ripple=\"ripple\"\n    :on-click=\"labelOnClick\"\n  >\n  </base-button>\n  <icon-button\n    v-if=\"iconClass\"\n    :style-obj=\"mIconStyle\"\n    :icon-style=\"iconStyle\"\n    :icon-class=\"iconClass\"\n    :on-click=\"iconOnClick\"\n  >\n  </icon-button>\n</div>\n";
	
				/***/
			},
			/* 76 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(77);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/IconMenu.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(83);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./IconMenu.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 77 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _events = __webpack_require__(41);
	
				var _events2 = _interopRequireDefault(_events);
	
				var _IconButton = __webpack_require__(64);
	
				var _IconButton2 = _interopRequireDefault(_IconButton);
	
				var _Popover = __webpack_require__(78);
	
				var _Popover2 = _interopRequireDefault(_Popover);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _common = __webpack_require__(58);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var transformOrigin = this.horizontalPosition == 'left' ? '0 ' : '100% ';
						transformOrigin += this.verticalPosition == 'top' ? '100%' : '0%';
						var styles = {
							root: {
								display: 'inline-block',
								position: 'relative'
							},
							menu: {
								transformOrigin: transformOrigin
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mMenuStyle: (0, _assign2.default)(styles.menu, this.menuStyle),
							open: false
						};
					},
					props: {
						disabled: Boolean,
						onClick: Function,
						onMouseEnter: Function,
						onMouseLeave: Function,
						iconClass: String,
						styleObj: Object,
						menuStyle: Object,
						verticalPosition: {
							type: String,
							default: 'bottom'
						},
						horizontalPosition: {
							type: String,
							default: 'left'
						}
					},
					components: {
						IconButton: _IconButton2.default,
						Popover: _Popover2.default
					},
					ready: function ready() {
						_events2.default.on(window, 'click', this.clickAway);
						var height = this.$refs.iconb.$el.offsetHeight;
						var vOrient = this.verticalPosition == 'top' ? { bottom: height + 'px' } : { top: height + 'px' };
						var hOrient = this.horizontalPosition == 'left' ? { left: 0 } : { right: 0 };
						this.mMenuStyle = (0, _assign2.default)({}, this.mMenuStyle, vOrient, hOrient);
					},
					destroyed: function destroyed() {
						_events2.default.off(window, 'click', this.clickAway);
					},
					methods: {
						handleClick: function handleClick(event) {
							this.open = true;
						},
						clickAway: function clickAway(event) {
							if (!(this.$el && this.$el.contains(event.target)) && this.open) {
								this.open = false;
							}
						}
					}
				};
	
				/***/
			},
			/* 78 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__webpack_require__(79);
				__vue_script__ = __webpack_require__(81);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/Popover.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(82);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./Popover.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 79 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(80);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(46)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function () {
							var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 80 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(45)();
				// imports
	
				// module
				exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.vertical-pop-transition {\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n  opacity: 1;\n  visibility: visible;\n}\n.vertical-pop-leave,\n.vertical-pop-enter {\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  opacity: 0;\n  visibility: hidden;\n}\n.popover-transition {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n  visibility: visible;\n}\n.popover-leave,\n.popover-enter {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0;\n  visibility: hidden;\n}\n", ""]);
	
				// exports
	
				/***/
			},
			/* 81 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								boxShadow: _common.zDepthShadows[0],
								position: 'absolute',
								overflow: 'auto',
								maxHeight: '150px',
								minWidth: '58px',
								willChange: 'transform',
								backgroundColor: 'white',
								zIndex: '1',
								transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj)
						};
					},
					watch: {
						styleObj: function styleObj() {
							this.mRootStyle = (0, _assign2.default)({}, this.mRootStyle, this.styleObj);
						}
					},
					props: {
						styleObj: Object,
						open: Boolean,
						verticalAnimation: Boolean
					}
				};
	
				/***/
			},
			/* 82 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\" v-show=\"open\" :transition=\"verticalAnimation ? 'vertical-pop':'popover'\">\n  <slot name=\"popover\"></slot>\n</div>\n";
	
				/***/
			},
			/* 83 */
			/***/function (module, exports) {
	
				module.exports = "\n<div @click=\"handleClick($event)\" :style=\"mRootStyle\">\n  <icon-button\n    v-ref:iconb\n    :disabled=\"disabled\"\n    :on-click=\"onClick\"\n    :on-mouseEnter=\"onMouseEnter\"\n    :icon-class=\"iconClass\"\n    >\n  </icon-button>\n  <popover :open=\"open\" :style-obj=\"mMenuStyle\">\n    <slot name=\"iconList\" slot=\"popover\"></slot>\n  </popover>\n</div>\n";
	
				/***/
			},
			/* 84 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(85);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/DownMenu.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(86);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./DownMenu.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 85 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _events = __webpack_require__(41);
	
				var _events2 = _interopRequireDefault(_events);
	
				var _BaseButton = __webpack_require__(2);
	
				var _BaseButton2 = _interopRequireDefault(_BaseButton);
	
				var _Popover = __webpack_require__(78);
	
				var _Popover2 = _interopRequireDefault(_Popover);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								display: 'inline-block',
								position: 'relative',
								fontFamily: 'Roboto, sans-serif'
							},
							button: {
								display: 'block',
								width: '100%'
							},
							menu: {
								transformOrigin: '50% 0%'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mMenuStyle: (0, _assign2.default)(styles.menu, this.menuStyle),
							mButtonstyle: this.buttonStyle,
							open: false
						};
					},
					props: {
						disabled: Boolean,
						label: String,
						buttonStyle: Object,
						styleObj: Object,
						menuStyle: Object
					},
					components: {
						Popover: _Popover2.default,
						BaseButton: _BaseButton2.default
					},
					ready: function ready() {
						_events2.default.on(window, 'click', this.clickAway);
	
						var height = this.$refs.downb.$el.offsetHeight;
						this.mMenuStyle.top = height + 'px';
					},
					destroyed: function destroyed() {
						_events2.default.off(window, 'click', this.clickAway);
					},
					methods: {
						handleClick: function handleClick(event) {
							if (event.stopPropagation) {
								event.stopPropagation();
							} else if (event.cancelBubble) {
								event.cancelBubble = true;
							}
							if (!this.disabled) {
								this.open = true;
							}
						},
						clickAway: function clickAway(event) {
							if (!(this.$el && this.$el.contains(event.target)) && this.open) {
								this.open = false;
							}
						}
					}
				};
	
				/***/
			},
			/* 86 */
			/***/function (module, exports) {
	
				module.exports = "\n<div @click=\"handleClick($event)\" :style=\"mRootStyle\">\n  <base-button\n    v-ref:downb\n    :disabled=\"disabled\"\n    :label=\"label\"\n    :style-obj=\"mButtonstyle\"\n    >\n  </base-button>\n  <popover :open=\"open\" :style-obj=\"mMenuStyle\" v-if=\"!disabled\" :vertical-animation=\"true\">\n    <slot name=\"downList\" slot=\"popover\"></slot>\n  </popover>\n</div>\n";
	
				/***/
			},
			/* 87 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__webpack_require__(88);
				__vue_script__ = __webpack_require__(90);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/MenuBar.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(95);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./MenuBar.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 88 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(89);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(46)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MenuBar.vue", function () {
							var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MenuBar.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 89 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(45)();
				// imports
	
				// module
				exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.mask {\n  top: 0;\n  right: 0;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transition-duration: .5s;\n          transition-duration: .5s;\n}\n.mask-transition {\n  opacity: 1;\n}\n.mask-enter,\n.mask-leave {\n  opacity: 0;\n}\n.slide-transition {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.slide-enter,\n.slide-leave {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n", ""]);
	
				// exports
	
				/***/
			},
			/* 90 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _defineProperty2 = __webpack_require__(91);
	
				var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
				var _events = __webpack_require__(41);
	
				var _events2 = _interopRequireDefault(_events);
	
				var _touchRipple = __webpack_require__(42);
	
				var _touchRipple2 = _interopRequireDefault(_touchRipple);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _muiTheme = __webpack_require__(55);
	
				var _common = __webpack_require__(58);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var _root;
	
						var styles = {
							root: (_root = {
								height: '100%',
								width: '150px',
								position: 'fixed',
								top: '0',
								left: '0',
								backgroundColor: 'white',
								fontFamily: 'Roboto, sans-serif',
								willChange: 'transform',
								transition: _transitions2.default.easeOut('200ms', 'transform', ''),
								boxShadow: _common.zDepthShadows[this.shadowDepth - 1]
							}, (0, _defineProperty3.default)(_root, 'height', '100%'), (0, _defineProperty3.default)(_root, 'overflowY', 'auto'), (0, _defineProperty3.default)(_root, 'zIndex', '1'), _root)
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							added: false
						};
					},
					props: {
						shadowDepth: {
							type: Number,
							default: 1
						},
						open: Boolean,
						styleObj: Object,
						docked: {
							type: Boolean,
							default: true
						}
					},
					created: function created() {
						if (!this.docked) {
							_events2.default.on(window, 'click', this.clickAway, true);
	
							this.added = true;
						}
					},
					destroyed: function destroyed() {
						if (!this.docked) {
							_events2.default.off(window, 'click', this.clickAway, true);
						}
					},
					watch: {
						open: function open() {
							if (this.open && !this.docked) {
								_events2.default.on(window, 'click', this.clickAway, true);
							} else {
								_events2.default.off(window, 'click', this.clickAway, true);
							}
						}
					},
					methods: {
						clickAway: function clickAway(event) {
							if (!(this.$el.children[1] && this.$el.children[1].contains(event.target)) && this.open && !this.docked) {
								this.open = false;
							}
						},
						handleClick: function handleClick(event) {
							var itemNode = event.target.closest('[slot="menuList"]');
							if (!this.docked && itemNode.contains(event.target)) {
								this.open = false;
							}
						}
					}
				};
	
				/***/
			},
			/* 91 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				exports.__esModule = true;
	
				var _defineProperty = __webpack_require__(92);
	
				var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = function (obj, key, value) {
					if (key in obj) {
						(0, _defineProperty2.default)(obj, key, {
							value: value,
							enumerable: true,
							configurable: true,
							writable: true
						});
					} else {
						obj[key] = value;
					}
	
					return obj;
				};
	
				/***/
			},
			/* 92 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = { "default": __webpack_require__(93), __esModule: true };
	
				/***/
			},
			/* 93 */
			/***/function (module, exports, __webpack_require__) {
	
				__webpack_require__(94);
				var $Object = __webpack_require__(9).Object;
				module.exports = function defineProperty(it, key, desc) {
					return $Object.defineProperty(it, key, desc);
				};
	
				/***/
			},
			/* 94 */
			/***/function (module, exports, __webpack_require__) {
	
				var $export = __webpack_require__(7);
				// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
				$export($export.S + $export.F * !__webpack_require__(17), 'Object', { defineProperty: __webpack_require__(13).f });
	
				/***/
			},
			/* 95 */
			/***/function (module, exports) {
	
				module.exports = "\n<div >\n  <div class=\"mask\" v-show=\"!docked && open\" transition=\"mask\"></div>\n  <div :style=\"mRootStyle\" @click=\"handleClick($event)\" v-show=\"open\" transition=\"slide\">\n    <slot name=\"menuList\"></slot>\n  </div>\n</div>\n";
	
				/***/
			},
			/* 96 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__webpack_require__(97);
				__vue_script__ = __webpack_require__(99);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/SnackBar.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(100);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./SnackBar.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 97 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(98);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(46)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SnackBar.vue", function () {
							var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SnackBar.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 98 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(45)();
				// imports
	
				// module
				exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.snack-transition {\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  visibility: visible;\n}\n.snack-enter,\n.snack-leave {\n  visibility: hidden;\n  -webkit-transform: translate(-50%, 80px);\n          transform: translate(-50%, 80px);\n}\n", ""]);
	
				// exports
	
				/***/
			},
			/* 99 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _BaseButton = __webpack_require__(2);
	
				var _BaseButton2 = _interopRequireDefault(_BaseButton);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _events = __webpack_require__(41);
	
				var _events2 = _interopRequireDefault(_events);
	
				var _util = __webpack_require__(60);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var useFlexbox = (0, _util.isIE)() > 9;
						var styles = {
							root: {
								minWidth: '288px',
								position: 'fixed',
								justifyContent: 'space-between',
								MsFlexPack: 'justify',
								bottom: '0',
								willChange: 'transform',
								fontFamily: 'Roboto, sans-serif',
								left: '50%',
								whiteSpace: 'nowrap',
								backgroundColor: 'rgb(7, 7, 8)',
								transition: _transitions2.default.easeOut('400ms', 'transform') + ',\n                     ' + _transitions2.default.easeOut('400ms', 'visibility')
							},
							snack: {
								display: useFlexbox ? '-ms-flexbox' : 'flex',
								width: '100%',
								alignItems: 'center'
							},
							message: {
								textAlign: 'center',
								fontSize: '14px',
								color: 'white',
								padding: '14px 10px 14px 10px',
								verticalAlign: 'middle',
								letterSpacing: '0',
								textTransform: 'uppercase',
								flex: '1'
							},
							undo: {
								color: 'red',
								cursor: 'pointer'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mSnackWrapper: styles.snack,
							mMessageStyles: (0, _assign2.default)(styles.message, this.messageStyle),
							mUndoStyles: (0, _assign2.default)(styles.undo, this.undoStyle),
							autoHideTimer: null
						};
					},
					props: {
						open: Boolean,
						message: String,
						undo: Boolean,
						styleObj: Object,
						snackStyle: Object,
						messageStyle: Object,
						undoStyle: Object,
						showDuration: {
							type: Number,
							default: 5000
						}
					},
					components: {
						BaseButton: _BaseButton2.default
					},
					ready: function ready() {
						_events2.default.on(window, 'click', this.clickAway, true);
					},
					destroyed: function destroyed() {
						_events2.default.off(window, 'click', this.clickAway, true);
						if (this.autoHideTimer) {
							clearTimeout(this.autoHideTimer);
						}
					},
					watch: {
						open: function open() {
							var _this = this;
	
							if (this.open) {
								if (this.autoHideTimer) {
									clearTimeout(this.autoHideTimer);
								}
								this.autoHideTimer = setTimeout(function () {
									_this.open = false;
								}, this.showDuration);
							}
						}
					},
					methods: {
						clickAway: function clickAway() {
							if (!(this.$el && this.$el.contains(event.target)) && this.open) {
								this.open = false;
							}
						}
					}
				};
	
				/***/
			},
			/* 100 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\" v-show=\"open\" transition=\"snack\">\n  <div :style=\"mSnackWrapper\">\n    <span :style=\"mMessageStyles\">{{message}}</span>\n    <base-button :style-obj=\"mUndoStyles\" v-if=\"undo\" label=\"UNDO\" :hover=\"false\"></base-button>\n  </div>\n</div>\n";
	
				/***/
			},
			/* 101 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(102);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/TextField.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(103);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./TextField.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 102 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _directive = __webpack_require__(59);
	
				var _util = __webpack_require__(60);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var lineStyle = {
							border: 'none',
							width: '100%',
							borderBottom: this.disabled ? 'dotted 2px' : 'solid 1px',
							boxSizing: 'content-box',
							position: 'absolute',
							bottom: this.floatContent ? '25px' : '10px',
							borderColor: '#e0e0e0',
							margin: '0'
						};
						var forcusStyle = {
							borderColor: 'rgb(0, 188, 212)',
							transform: 'scaleX(0)',
							borderBottom: 'solid 2px',
							transition: _transitions2.default.easeOut()
						};
						var styles = {
							root: {
								fontSize: '16px',
								lineHeight: '24px',
								width: '256px',
								height: this.floatContent ? '72px' : '48px',
								display: 'inline-block',
								position: 'relative',
								backgroundColor: this.backgroundColor,
								fontFamily: 'Roboto, sans-serif',
								transition: _transitions2.default.easeOut('200ms', 'height')
							},
							float: {
								position: 'absolute',
								lineHeight: '22px',
								top: '25px',
								willChange: 'transform',
								transform: this.defaultContent ? 'perspective(1px) scale(0.75) translate3d(0, -28px, 0)' : 'scale(1) translate3d(0, 0, 0)',
								transition: _transitions2.default.easeOut(),
								cursor: this.disabled ? 'default' : 'text',
								transformOrigin: 'left top',
								color: 'rgb(192, 198, 201)'
							},
							hint: {
								position: 'absolute',
								lineHeight: '22px',
								top: this.floatContent ? '25px' : '13px',
								color: 'rgb(192, 198, 201)'
							},
							input: {
								padding: '0',
								width: '100%',
								height: '100%',
								border: 'none',
								outline: 'none',
								backgroundColor: 'rgba(0,0,0,0)',
								fontSize: 'inherit',
								fontFamily: 'inherit'
							},
							underline: {
								border: 'none',
								width: '100%',
								borderBottom: this.disabled ? 'dotted 2px' : 'solid 1px',
								boxSizing: 'content-box',
								position: 'absolute',
								bottom: this.floatContent ? '25px' : '10px',
								borderColor: '#e0e0e0',
								margin: '0'
							},
							forcusUnderline: (0, _assign2.default)({}, lineStyle, forcusStyle)
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mFloatStyle: styles.float,
							mHintStyle: (0, _assign2.default)(styles.hint, this.hintStyle),
							mInputStyle: (0, _assign2.default)(styles.input, this.inputStyle),
							mUnderlineStyle: (0, _assign2.default)(styles.underline, this.underlineStyle),
							mForcusUnderlineStyle: styles.forcusUnderline,
							isForcused: false,
							isIE: !!(0, _util.isIE)(),
							show: this.isForcused && this.floatContent && this.hintContent || this.hintContent && !this.defaultContent && !this.floatContent
						};
					},
					props: {
						styleObj: Object,
						floatStyle: Object,
						hintStyle: Object,
						inputStyle: Object,
						underlineStyle: Object,
						forcusUnderlineStyle: Object,
						backgroundColor: String,
						floatContent: String,
						disabled: {
							type: Boolean,
							default: false
						},
						hintContent: String,
						defaultContent: String,
						value: String,
						onBlur: Function,
						onFocus: Function
					},
					directives: {
						'delayfocus': _directive.delayfocus
					},
					methods: {
						handleFocus: function handleFocus(event) {
							this.isForcused = true;
							this.show = event.target.value ? false : true;
							this.$set('mForcusUnderlineStyle.transform', 'scaleX(1)');
							this.$set('mFloatStyle.transform', 'perspective(1px) scale(0.75) translate3d(0, -28px, 0)');
							this.$set('mFloatStyle.pointerEvents', 'none');
							this.$set('mFloatStyle.color', 'rgb(105, 189, 242)');
	
							if (this.onFocus) {
								this.onFocus(event);
							}
						},
						handleBlur: function handleBlur(event) {
							this.isForcused = false;
							this.show = this.floatContent || event.target.value ? false : true;
							this.$set('mForcusUnderlineStyle.transform', 'scaleX(0)');
							if (!event.target.value) {
								this.$set('mFloatStyle.transform', 'scale(1) translate3d(0, 0, 0)');
								this.$set('mFloatStyle.pointerEvents', 'auto');
								this.$set('mFloatStyle.color', 'rgb(192, 198, 201)');
							}
							if (this.onBlur) {
								this.onBlur(event);
							}
						},
						handleInput: function handleInput(event) {
							this.show = event.target.value ? false : this.isForcused && this.floatContent && this.hintContent ? true : !this.floatContent && this.hintContent ? true : false;
						}
					}
				};
	
				/***/
			},
			/* 103 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\">\n  <label v-if=\"floatContent\" for=\"sp\" :style=\"mFloatStyle\">{{floatContent}}</label>\n  <div :style=\"mHintStyle\" v-show=\"show\" v-if=\"hintContent\">\n    {{hintContent}}\n  </div>\n  <div>\n    <hr :style=\"mUnderlineStyle\" />\n    <hr :style=\"mForcusUnderlineStyle\" />\n  </div>\n  <input :disabled=\"disabled\" type=\"text\" :style=\"mInputStyle\" id=\"sp\" v-delayfocus=\"isIE\"\n         @focus=\"handleFocus($event)\" @blur=\"handleBlur($event)\"\n         @input=\"handleInput($event)\" :value=\"value || defaultContent\"/>\n</div>\n";
	
				/***/
			},
			/* 104 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(105);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/CheckBox.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(116);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./CheckBox.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 105 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _touchRipple = __webpack_require__(42);
	
				var _touchRipple2 = _interopRequireDefault(_touchRipple);
	
				var _CheckBoxOutline = __webpack_require__(106);
	
				var _CheckBoxOutline2 = _interopRequireDefault(_CheckBoxOutline);
	
				var _CheckBoxInline = __webpack_require__(111);
	
				var _CheckBoxInline2 = _interopRequireDefault(_CheckBoxInline);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								display: 'inline-block',
								position: 'relative',
								height: '24px',
								width: '24px',
								cursor: this.disabled ? 'default' : 'pointer'
							},
							input: {
								position: 'absolute',
								opacity: '0',
								top: '0',
								left: '0',
								width: '100%',
								height: '100%'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mInputStyle: styles.input,
							zoom: {
								height: '200%',
								width: '200%',
								top: '-12px',
								left: '-12px'
							}
						};
					},
					props: {
						styleObj: Object,
						disabled: Boolean,
						labelId: String,
						trigger: {
							type: Boolean,
							default: false
						}
					},
					components: {
						CheckBoxOutline: _CheckBoxOutline2.default,
						CheckBoxInline: _CheckBoxInline2.default,
						touchRipple: _touchRipple2.default
					},
					methods: {
						handleClick: function handleClick() {
							if (!this.disabled) {
								this.trigger = !this.trigger;
							}
						}
					}
				};
	
				/***/
			},
			/* 106 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__webpack_require__(107);
				__vue_script__ = __webpack_require__(109);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/svg/CheckBoxOutline.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(110);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./CheckBoxOutline.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 107 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(108);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(46)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckBoxOutline.vue", function () {
							var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckBoxOutline.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 108 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(45)();
				// imports
	
				// module
				exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);
	
				// exports
	
				/***/
			},
			/* 109 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _muiTheme = __webpack_require__(55);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								position: 'absolute',
								height: 'inherit',
								width: 'inherit',
								fill: this.disabled ? _muiTheme.baseTheme.disabledColor : this.trigger ? "rgb(44, 107, 201)" : "rgb(0,0,0)"
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							viewBox: '0 0 24 24'
						};
					},
					watch: {
						trigger: function trigger() {
							this.mRootStyle.fill = this.trigger ? "rgb(44, 107, 201)" : "rgb(0,0,0)";
						}
					},
					props: {
						styleObj: Object,
						trigger: Boolean,
						disabled: Boolean
					}
				};
	
				/***/
			},
			/* 110 */
			/***/function (module, exports) {
	
				module.exports = "\n<svg :style=\"mRootStyle\" :viewBox='viewBox'>\n  <path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/>\n</svg>\n";
	
				/***/
			},
			/* 111 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__webpack_require__(112);
				__vue_script__ = __webpack_require__(114);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/svg/CheckBoxInline.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(115);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./CheckBoxInline.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 112 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(113);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(46)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckBoxInline.vue", function () {
							var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckBoxInline.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 113 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(45)();
				// imports
	
				// module
				exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.trigger-transition {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n.trigger-enter {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0;\n}\n.trigger-leave {\n  opacity: 0;\n}\n", ""]);
	
				// exports
	
				/***/
			},
			/* 114 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								position: 'absolute',
								transformOrigin: '50% 50%',
								height: 'inherit',
								width: 'inherit',
								fill: "rgb(44, 107, 201)",
								transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms')
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							viewBox: '0 0 24 24'
						};
					},
					props: {
						styleObj: Object,
						trigger: Boolean
					}
				};
	
				/***/
			},
			/* 115 */
			/***/function (module, exports) {
	
				module.exports = "\n<svg :style=\"mRootStyle\" :viewBox='viewBox' v-show=\"trigger\" transition=\"trigger\">\n  <path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/>\n</svg>\n";
	
				/***/
			},
			/* 116 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\" @click=\"handleClick\">\n  <input :style=\"mInputStyle\" type=\"checkbox\" :id=\"labelId\" ></input>\n  <check-box-inline :trigger=\"trigger\" v-if=\"!disabled\"></check-box-inline>\n  <check-box-outline :trigger=\"trigger\" :disabled=\"disabled\"></check-box-outline>\n  <touch-ripple :style-obj=\"zoom\" v-if=\"!disabled\" :center=\"true\"></touch-ripple>\n</div>\n";
	
				/***/
			},
			/* 117 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(118);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/Radio.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(129);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./Radio.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 118 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _touchRipple = __webpack_require__(42);
	
				var _touchRipple2 = _interopRequireDefault(_touchRipple);
	
				var _RadioChecked = __webpack_require__(119);
	
				var _RadioChecked2 = _interopRequireDefault(_RadioChecked);
	
				var _RadioUnchecked = __webpack_require__(124);
	
				var _RadioUnchecked2 = _interopRequireDefault(_RadioUnchecked);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								display: 'inline-block',
								position: 'relative',
								height: '24px',
								width: '24px',
								cursor: this.disabled ? 'default' : 'pointer'
							},
							input: {
								position: 'absolute',
								opacity: '0',
								top: '0',
								left: '0',
								width: '100%',
								height: '100%'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mInputStyle: styles.input,
							zoom: {
								height: '200%',
								width: '200%',
								top: '-12px',
								left: '-12px'
							}
						};
					},
					props: {
						styleObj: Object,
						trigger: {
							type: Boolean,
							default: false
						},
						labelId: String,
						disabled: Boolean
					},
					components: {
						RadioChecked: _RadioChecked2.default,
						RadioUnchecked: _RadioUnchecked2.default,
						touchRipple: _touchRipple2.default
					},
					methods: {
						handleClick: function handleClick() {
							if (!this.disabled) {
								this.trigger = !this.trigger;
							}
						}
					}
				};
	
				/***/
			},
			/* 119 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__webpack_require__(120);
				__vue_script__ = __webpack_require__(122);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/svg/RadioChecked.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(123);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./RadioChecked.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 120 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(121);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(46)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RadioChecked.vue", function () {
							var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RadioChecked.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 121 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(45)();
				// imports
	
				// module
				exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.trigger-transition {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n.trigger-enter,\n.trigger-leave {\n  -webkit-transform: scale(.5);\n          transform: scale(.5);\n  opacity: 0;\n}\n", ""]);
	
				// exports
	
				/***/
			},
			/* 122 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								transformOrigin: '50% 50%',
								position: 'absolute',
								height: 'inherit',
								width: 'inherit',
								fill: "rgb(44, 107, 201)",
								transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms')
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							viewBox: '0 0 24 24'
						};
					},
					props: {
						styleObj: Object,
						trigger: Boolean
					}
				};
	
				/***/
			},
			/* 123 */
			/***/function (module, exports) {
	
				module.exports = "\n<svg :style=\"mRootStyle\" :viewBox='viewBox' v-show=\"trigger\" transition=\"trigger\">\n  <path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>\n</svg>\n";
	
				/***/
			},
			/* 124 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__webpack_require__(125);
				__vue_script__ = __webpack_require__(127);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/svg/RadioUnchecked.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(128);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./RadioUnchecked.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 125 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(126);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(46)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RadioUnchecked.vue", function () {
							var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RadioUnchecked.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 126 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(45)();
				// imports
	
				// module
				exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.trigger-transition {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n.trigger-enter,\n.trigger-leave {\n  -webkit-transform: scale(.5);\n          transform: scale(.5);\n  opacity: 0;\n}\n", ""]);
	
				// exports
	
				/***/
			},
			/* 127 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _muiTheme = __webpack_require__(55);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								height: 'inherit',
								width: 'inherit',
								position: 'absolute',
								fill: this.disabled ? _muiTheme.baseTheme.disabledColor : this.trigger ? "rgb(44, 107, 201)" : "rgb(0,0,0)",
								transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms'),
								transformOrigin: '50% 50%'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							viewBox: '0 0 24 24'
						};
					},
					props: {
						styleObj: Object,
						trigger: Boolean,
						disabled: Boolean
					}
				};
	
				/***/
			},
			/* 128 */
			/***/function (module, exports) {
	
				module.exports = "\n<svg :style=\"mRootStyle\" :viewBox='viewBox' v-show=\"!trigger\" transition=\"trigger\">\n  <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>\n</svg>\n";
	
				/***/
			},
			/* 129 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\" @click=\"handleClick\">\n  <input :style=\"mInputStyle\" type=\"checkbox\" :id=\"labelId\">\n  <radio-checked :trigger=\"trigger\" v-if=\"!disabled\"></radio-checked>\n  <radio-unchecked :trigger=\"trigger\" :disabled=\"disabled\"></radio-unchecked>\n  <touch-ripple :style-obj=\"zoom\" v-if=\"!disabled\" :center=\"true\"></touch-ripple>\n</div>\n";
	
				/***/
			},
			/* 130 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(131);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/Toggle.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(132);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./Toggle.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 131 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _touchRipple = __webpack_require__(42);
	
				var _touchRipple2 = _interopRequireDefault(_touchRipple);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								display: 'inline-block',
								height: '24px',
								width: '36px',
								position: 'relative',
								cursor: this.disabled ? 'default' : 'pointer'
							},
							thumb: {
								transition: _transitions2.default.easeOut(),
								top: '50%',
								transform: 'translateY(-50%)',
								height: '14px',
								width: '100%',
								backgroundColor: this.disabled ? 'rgb(189, 189, 189)' : this.trigger ? 'rgba(0, 188, 212, 0.498039)' : 'rgb(189, 189, 189)',
								borderRadius: '30px',
								position: 'absolute'
							},
							circle: {
								transition: _transitions2.default.easeOut(),
								borderRadius: '50%',
								backgroundColor: this.disabled ? '#e0e0e0' : this.trigger ? 'rgb(0, 188, 212)' : 'rgb(245, 245, 245)',
								top: '50%',
								left: this.disabled ? '0' : this.trigger ? '16px' : '0',
								transform: 'translateY(-50%)',
								height: '20px',
								width: '20px',
								position: 'absolute',
								boxShadow: _common.zDepthShadows[0]
							},
							input: {
								position: 'absolute',
								opacity: '0',
								top: '0',
								left: '0',
								width: '100%',
								height: '100%'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mThumbStyle: (0, _assign2.default)(styles.thumb, this.thumbStyle),
							mCircleStyle: (0, _assign2.default)(styles.circle, this.circleStyle),
							mInputStyle: styles.input,
							zoom: {
								height: '200%',
								width: '200%',
								top: '-10px',
								left: '-10px'
							}
						};
					},
					watch: {
						trigger: function trigger() {
							if (!this.disabled) {
								this.mThumbStyle.backgroundColor = this.trigger ? 'rgba(0, 188, 212, 0.498039)' : 'rgb(189, 189, 189)';
								this.mCircleStyle.backgroundColor = this.trigger ? 'rgb(0, 188, 212)' : 'rgb(245, 245, 245)';
								this.mCircleStyle.left = this.trigger ? '16px' : '0';
							}
						}
					},
					props: {
						styleObj: Object,
						trigger: {
							type: Boolean,
							default: false
						},
						disabled: Boolean,
						circleStyle: Object,
						thumbStyle: Object,
						labelId: String
					},
					components: {
						touchRipple: _touchRipple2.default
					},
					methods: {
						handleClick: function handleClick() {
							this.trigger = !this.trigger;
						}
					}
				};
	
				/***/
			},
			/* 132 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\" @click=\"handleClick\">\n  <input :style=\"mInputStyle\" type=\"checkbox\" :id=\"labelId\">\n  <span :style=\"mThumbStyle\"></span>\n  <span :style=\"mCircleStyle\">\n    <touch-ripple :center=true v-if=\"!disabled\" :style-obj=\"zoom\"></touch-ripple>\n  </span>\n</div>\n";
	
				/***/
			},
			/* 133 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(134);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/TableWrapper.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(135);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./TableWrapper.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 134 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								height: 'auto',
	
								overflow: 'auto'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj)
						};
					},
					props: {
						styleObj: Object
					}
				};
	
				/***/
			},
			/* 135 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\">\n  <slot name=\"header\"></slot>\n  <slot name=\"body\"></slot>\n</div>\n";
	
				/***/
			},
			/* 136 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__webpack_require__(137);
				__vue_script__ = __webpack_require__(139);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/TableBody.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(141);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./TableBody.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 137 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(138);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(46)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TableBody.vue", function () {
							var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TableBody.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 138 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(45)();
				// imports
	
				// module
				exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.selected {\n  background-color: rgb(224, 224, 224);\n}\n", ""]);
	
				// exports
	
				/***/
			},
			/* 139 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _CheckBox = __webpack_require__(104);
	
				var _CheckBox2 = _interopRequireDefault(_CheckBox);
	
				__webpack_require__(140);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								backgroundColor: '#fff',
								padding: '0 24px',
								borderCollapse: 'collapse',
								width: '100%',
								borderSpacing: '0',
								tableLayout: 'fixed',
								fontFamily: 'Roboto, sans-serif'
							},
							td: {
								fontWeight: 'normal',
								fontSize: '14px',
								padding: '6px 13px',
								height: '56px',
								textAlign: 'left',
								position: 'relative',
								wordWrap: 'break-word',
								whiteSpace: 'normal'
							},
							tr: {
								borderBottom: '1px solid #e0e0e0'
							},
							checkbox: {
								width: '24px'
							}
						};
						return {
							mTrStyle: (0, _assign2.default)(styles.tr, this.trStyle),
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mTdStyle: (0, _assign2.default)(styles.td, this.tdStyle),
							mSelectStyle: (0, _assign2.default)((0, _assign2.default)({}, styles.td, styles.checkbox), this.tdStyle),
							selectedRow: []
						};
					},
					props: {
						styleObj: Object,
						bodyContent: Array,
						striped: Boolean,
						selectable: Boolean,
						checkbox: Boolean,
						trStyle: Object,
						tdStyle: Object,
						isOrder: {
							type: Boolean,
							default: true
						}
					},
					components: {
						CheckBox: _CheckBox2.default
					},
					methods: {
						handleClick: function handleClick(e) {
							var node;
							if (e.target.nodeName === 'TR') {
								node = e.target.nodeName;
							} else {
								node = e.target.closest('tr');
							}
							if (this.selectable) {
								this.selectedRow = Array(this.bodyContent.length).fill(false);
								var rowIndex = node.getAttribute('key');
								var prev = this.selectedRow[rowIndex];
								this.selectedRow.$set(rowIndex, !prev);
							}
						},
						firstLetter: function firstLetter(a, b) {
							if (this.isOrder) {
								return a[0] > b[0] ? 1 : -1;
							} else {
								return true;
							}
						}
					}
				};
	
				/***/
			},
			/* 140 */
			/***/function (module, exports) {
	
				'use strict';
	
				if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector;
				if (!Element.prototype.closest) Element.prototype.closest = function (selector) {
					var el = this;
					while (el) {
						if (el.matches(selector)) {
							return el;
						}
						el = el.parentElement;
					}
				};
	
				if (!Array.prototype.fill) {
					Array.prototype.fill = function (value) {
	
						// Steps 1-2.
						if (this == null) {
							throw new TypeError('this is null or not defined');
						}
	
						var O = Object(this);
	
						// Steps 3-5.
						var len = O.length >>> 0;
	
						// Steps 6-7.
						var start = arguments[1];
						var relativeStart = start >> 0;
	
						// Step 8.
						var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);
	
						// Steps 9-10.
						var end = arguments[2];
						var relativeEnd = end === undefined ? len : end >> 0;
	
						// Step 11.
						var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);
	
						// Step 12.
						while (k < final) {
							O[k] = value;
							k++;
						}
	
						// Step 13.
						return O;
					};
				}
	
				/***/
			},
			/* 141 */
			/***/function (module, exports) {
	
				module.exports = "\n<div>\n  <table :style=\"mRootStyle\">\n    <tbody>\n      <tr v-for=\"row in bodyContent | orderBy firstLetter\" :style=\"mTrStyle\" @click=\"handleClick\"\n          key=\"{{$index}}\" :class=\"selectedRow[$index] ? 'selected':''\" >\n        <td v-if=\"checkbox\" :style=\"mSelectStyle\"><check-box :trigger=\"selectedRow[$index]\"></check-box></td>\n        <td v-for=\"col in row \" :style=\"mTdStyle\" track-by=\"$index\">\n          {{col}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n";
	
				/***/
			},
			/* 142 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(143);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/TableHeader.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(144);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./TableHeader.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 143 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _CheckBox = __webpack_require__(104);
	
				var _CheckBox2 = _interopRequireDefault(_CheckBox);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								backgroundColor: '#fff',
								padding: '0 24px',
								borderCollapse: 'collapse',
								width: '100%',
								borderSpacing: '0',
								tableLayout: 'fixed',
								fontFamily: 'Roboto, sans-serif',
								borderBottom: '1px solid #e0e0e0'
							},
							th: {
								fontWeight: 'normal',
								fontSize: '16px',
								padding: '6px 13px',
								height: '56px',
								textAlign: 'left',
								whiteSpace: 'nowrap',
								textOverflow: 'ellipsis',
								color: '#9e9e9e',
								position: 'relative'
							},
							checkbox: {
								width: '24px'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mThStyle: (0, _assign2.default)(styles.th, this.thStyle),
							mSelectStyle: (0, _assign2.default)((0, _assign2.default)({}, styles.th, styles.checkbox), this.thStyle)
						};
					},
					props: {
						styleObj: Object,
						headers: Array,
						checkbox: Boolean,
						thStyle: Object
					},
					components: {
						CheckBox: _CheckBox2.default
					}
				};
	
				/***/
			},
			/* 144 */
			/***/function (module, exports) {
	
				module.exports = "\n<div>\n  <table :style=\"mRootStyle\">\n    <thead>\n      <tr>\n        <td v-if=\"checkbox\" :style=\"mSelectStyle\"><check-box :disabled=\"true\"></check-box></td>\n        <th v-for=\"col in headers\" :style=\"mThStyle\" track-by=\"$index\">\n          {{col | capitalize}}\n        </th>\n      </tr>\n    </thead>\n  </table>\n</div>\n";
	
				/***/
			},
			/* 145 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(146);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/AutoComplete.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(147);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./AutoComplete.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 146 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _TextField = __webpack_require__(101);
	
				var _TextField2 = _interopRequireDefault(_TextField);
	
				var _Popover = __webpack_require__(78);
	
				var _Popover2 = _interopRequireDefault(_Popover);
	
				var _events = __webpack_require__(41);
	
				var _events2 = _interopRequireDefault(_events);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _MenuItem = __webpack_require__(73);
	
				var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								display: 'inline-block'
							},
							menu: {
								transformOrigin: '50% 0%'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mMenuStyle: (0, _assign2.default)(styles.menu, this.menuStyle),
							open: false,
							value: null,
							inputValue: ''
						};
					},
					props: {
						styleObj: Object,
						menuStyle: Object,
						floatStyle: Object,
						hintStyle: Object,
						inputStyle: Object,
						underlineStyle: Object,
						forcusUnderlineStyle: Object,
						backgroundColor: String,
						floatContent: String,
						disabled: {
							type: Boolean,
							default: false
						},
						hintContent: String,
						defaultContent: String,
						onBlur: Function,
						onFocus: Function,
						matchCase: {
							type: Boolean,
							default: true
						},
						completion: Array
					},
					components: {
						MenuItem: _MenuItem2.default,
						TextField: _TextField2.default,
						Popover: _Popover2.default
					},
					ready: function ready() {
						_events2.default.on(window, 'click', this.clickAway);
					},
					destroyed: function destroyed() {
						_events2.default.off(window, 'click', this.clickAway);
					},
					methods: {
						handleClick: function handleClick(event, label) {
							this.value = label;
							this.open = false;
						},
						handleInput: function handleInput(event) {
							var value = event.target.value;
							this.inputValue = this.matchCase ? value : value.toLowerCase();
							this.open = value ? true : false;
						},
						clickAway: function clickAway(event) {
							if (!this.$refs.popover.$el.contains(event.target) && this.open) {
								this.open = false;
							}
						},
						defaultFilter: function defaultFilter(comp) {
							var str = this.matchCase ? comp : comp.toLowerCase();
							var index = str.indexOf(this.inputValue);
							return index >= 0;
						}
					}
				};
	
				/***/
			},
			/* 147 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\"\n     @input=\"handleInput($event)\"\n     >\n  <text-field\n    :style-obj=\"mTextStyle\"\n    :float-style=\"floatStyle\"\n    :hint-style=\"hintStyle\"\n    :input-style=\"inputStyle\"\n    :underline-style=\"underlineStyle\"\n    :forcusUnderline-style=\"forcusUnderlineStyle\"\n    :background-color=\"backgroundColor\"\n    :float-content=\"floatContent\"\n    :disabled=\"disabled\"\n    :hint-content=\"hintContent\"\n    :default-content=\"defaultContent\"\n    :on-blur=\"onBlur\"\n    :on-focus=\"onFocus\"\n    :value=\"value\"\n  >\n  </text-field>\n  <popover :open=\"open\" :style-obj=\"mMenuStyle\" v-if=\"!disabled\" :vertical-animation=\"true\" v-ref:popover>\n    <menu-item v-for=\"comp in completion | filterBy defaultFilter \"\n               :label=\"comp\"\n               slot=\"popover\"\n               :key=\"comp\"\n               :label-on-click=\"handleClick\">\n    </menu-item>\n  </popover>\n</div>\n";
	
				/***/
			},
			/* 148 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__webpack_require__(149);
				__vue_script__ = __webpack_require__(151);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/Dialog.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(152);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./Dialog.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 149 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(150);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(46)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dialog.vue", function () {
							var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dialog.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 150 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(45)();
				// imports
	
				// module
				exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.dialog-transition {\n  opacity: 1;\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  -webkit-transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n          transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);*/\n  transform: scale(1);\n}\n.dialog-leave,\n.dialog-enter {\n  opacity: 0;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n", ""]);
	
				// exports
	
				/***/
			},
			/* 151 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _events = __webpack_require__(41);
	
				var _events2 = _interopRequireDefault(_events);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _util = __webpack_require__(60);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var useFlexbox = (0, _util.isIE)() > 9;
						var styles = {
							root: {
								position: 'fixed',
								top: '0',
								left: '0',
								width: '100vw',
								backgroundColor: 'rgba(0, 0, 0, 0.5)',
								height: '100vh',
								zIndex: '2'
							},
							content: {
								display: useFlexbox ? '-ms-flexbox' : 'flex',
								justifyContent: 'center',
								MsFlexPack: 'center',
								alignItems: 'center',
								MsFlexAlign: 'center',
								width: '100%',
								height: '100%'
							},
							wrapper: {
								backgroundColor: 'white',
								width: '70%',
								textAlign: 'left',
								padding: '20px'
							},
							action: {
								display: 'block',
								float: 'right',
								padding: '10px'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mWrapperStyle: (0, _assign2.default)(styles.wrapper, this.wrapperStyle),
							mActionStyle: styles.action,
							mContentStyle: styles.content
						};
					},
					props: {
						styleObj: Object,
						title: String,
						wrapperStyle: Object,
						open: false
					},
					watch: {
						open: function open() {
							if (this.open) {
								_events2.default.on(window, 'keydown', this.escKeyDown);
							} else {
								_events2.default.off(window, 'keydown', this.escKeyDown);
							}
						}
					},
					beforeCompile: function beforeCompile() {
						this.open && _events2.default.on(window, 'keydown', this.escKeyDown);
					},
					methods: {
						clickAway: function clickAway(event) {
							var panel = this.$el.children[0].children[0];
							if (!panel.contains(event.target) && this.open) {
								this.open = false;
							}
						},
						escKeyDown: function escKeyDown(event) {
							if (_events2.default.keyCodes.esc === event.keyCode) {
								this.open = false;
							}
						}
					}
				};
	
				/***/
			},
			/* 152 */
			/***/function (module, exports) {
	
				module.exports = "\n<div v-show=\"open\" transition=\"dialog\" :style=\"mRootStyle\">\n  <div :style=\"mContentStyle\" @click=\"clickAway($event)\">\n    <div :style=\"mWrapperStyle\">\n      <h3 v-if=\"title\">{{title}}</h3>\n      <slot name=\"dialogBody\"></slot>\n      <div :style=\"mActionStyle\">\n        <slot name=\"dialogAction\"></slot>\n      </div>\n    </div>\n  </div>\n</div>\n";
	
				/***/
			},
			/* 153 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__webpack_require__(154);
				__vue_script__ = __webpack_require__(156);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/DatePicker.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(192);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./DatePicker.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 154 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(155);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(46)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DatePicker.vue", function () {
							var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DatePicker.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 155 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(45)();
				// imports
	
				// module
				exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.leftSlide-transition,\n.rightSlide-transition {\n  opacity: 1;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.leftSlide-enter {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  opacity: 0;\n}\n.leftSlide-leave {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  opacity: 0;\n}\n.rightSlide-enter {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  opacity: 0;\n}\n.rightSlide-leave {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  opacity: 0;\n}\n", ""]);
	
				// exports
	
				/***/
			},
			/* 156 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _toConsumableArray2 = __webpack_require__(157);
	
				var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
				var _keys = __webpack_require__(177);
	
				var _keys2 = _interopRequireDefault(_keys);
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _TextField = __webpack_require__(101);
	
				var _TextField2 = _interopRequireDefault(_TextField);
	
				var _Dialog = __webpack_require__(148);
	
				var _Dialog2 = _interopRequireDefault(_Dialog);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _BaseButton = __webpack_require__(2);
	
				var _BaseButton2 = _interopRequireDefault(_BaseButton);
	
				__webpack_require__(140);
	
				var _DateMonth = __webpack_require__(181);
	
				var _DateMonth2 = _interopRequireDefault(_DateMonth);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {},
							textField: {},
							dialog: {
								width: '320px',
								padding: '0',
								fontSize: '12px',
								lineHeight: '36px'
							},
							calender: {
								transition: _transitions2.default.easeOut(),
								height: '216px',
								position: 'relative',
								overflow: 'hidden'
							},
							calInner: {
								willChange: 'transform, opacity',
								boxSizing: 'border-box',
								padding: '16px 14px 0',
								position: 'absolute',
								transition: _transitions2.default.easeOut(),
								top: '0',
								left: '0',
								width: '100%',
								height: '100%'
							},
							rowStyle: {
								height: '40px',
								textAlign: 'center'
							},
							colStyle: {
								display: 'inline-block',
								width: '40px',
								padding: '4px 2px',
								boxSizing: 'border-box',
								cursor: 'pointer'
							},
							day: {
								borderRadius: '50%',
								position: 'absolute',
								height: '36px',
								width: '36px',
								opacity: '0',
								transform: 'scale(0)',
								transition: _transitions2.default.easeOut('200ms', ['transform', 'opacity'], '')
							},
							number: {
								position: 'relative'
							},
							weekRowStyle: {
								padding: '0 14px',
								lineHeight: '12px',
								opacity: '0.5',
								height: '12px',
								fontWeight: '500',
								textAlign: 'center'
							},
							weekColStyle: {
								width: '40px',
								display: 'inline-block'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							mTextStyle: (0, _assign2.default)(styles.textField, this.textFieldStyle),
							mDialogStyle: (0, _assign2.default)(styles.dialog, this.dialogStyle),
							rowStyle: styles.rowStyle,
							colStyle: styles.colStyle,
							weekRowStyle: styles.weekRowStyle,
							weekColStyle: styles.weekColStyle,
							calInnerStyle: styles.calInner,
							calendarStyle: styles.calender,
							dayStyle: styles.day,
							numStyle: styles.number,
							weekShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
							calenders: [],
							prevSelect: null,
							open: false,
							dateSelected: new Date(),
							selectedString: null
						};
					},
					props: {
						styleObj: Object,
						textFieldStyle: Object,
						dialogStyle: Object
					},
					components: {
						TextField: _TextField2.default,
						BaseButton: _BaseButton2.default,
						DateMonth: _DateMonth2.default,
						Dialog: _Dialog2.default
					},
					beforeCompile: function beforeCompile() {
						var _this = this;
	
						this.$on('back', function (date) {
							_this.handleSlide(date, 'leftSlide', true);
						});
						this.$on('forward', function (date) {
							_this.handleSlide(date, 'rightSlide', true);
						});
						this.handleSlide(new Date(), 'leftSlide');
					},
					methods: {
						handleSlide: function handleSlide(date, direction, shift) {
							this.calenders.push({ days: this.getMonthDays(date), direction: direction });
							if (shift) {
								this.calenders.shift();
							}
						},
						getDaysInMonth: function getDaysInMonth(date) {
							var resultDate = new Date(date.getFullYear(), date.getMonth(), 1);
							resultDate.setMonth(resultDate.getMonth() + 1);
							resultDate.setDate(resultDate.getDate() - 1);
							return resultDate;
						},
						getMonthDays: function getMonthDays(d) {
	
							var days = [];
							var firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
							var dayOfWeek = Array(firstDay.getDay()).fill('');
							var lastDate = this.getDaysInMonth(d);
							var emptyDays = 6 - lastDate.getDay();
	
							var daysOfMonth = dayOfWeek.concat((0, _keys2.default)([].concat((0, _toConsumableArray3.default)(Array(lastDate.getDate() + 1)))).slice(1));
							daysOfMonth = daysOfMonth.concat(Array(emptyDays).fill(''));
							var index = 0;
							while (index < daysOfMonth.length) {
								index += 7;
								days.push(daysOfMonth.slice(index - 7, index));
							}
							this.dateSelected = d;
							this.calendarStyle.height = days.length === 5 ? '216px' : '256px';
							return days;
						},
						handleClick: function handleClick(event) {
							var node;
							var parent = event.target.closest('[key]');
							if (this.prevSelect) {
								this.prevSelect.style.backgroundColor = '';
								this.prevSelect.opacity = '0';
								this.prevSelect.style.transform = 'scale(0)';
							}
	
							if (node = parent.children[0]) {
								node.style.backgroundColor = 'rgb(126, 116, 230)';
								node.style.transform = 'scale(1)';
								node.style.opacity = '1';
								this.prevSelect = node;
								this.dateSelected.setDate(parent.textContent.trim());
							}
						},
						handleFocus: function handleFocus() {
							this.open = true;
						},
						handleCancel: function handleCancel() {
							this.open = false;
						},
						handleOK: function handleOK() {
							this.open = false;
							this.selectedString = this.dateSelected.toLocaleDateString();
						}
					}
				};
	
				/***/
			},
			/* 157 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				exports.__esModule = true;
	
				var _from = __webpack_require__(158);
	
				var _from2 = _interopRequireDefault(_from);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = function (arr) {
					if (Array.isArray(arr)) {
						for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
							arr2[i] = arr[i];
						}
	
						return arr2;
					} else {
						return (0, _from2.default)(arr);
					}
				};
	
				/***/
			},
			/* 158 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = { "default": __webpack_require__(159), __esModule: true };
	
				/***/
			},
			/* 159 */
			/***/function (module, exports, __webpack_require__) {
	
				__webpack_require__(160);
				__webpack_require__(170);
				module.exports = __webpack_require__(9).Array.from;
	
				/***/
			},
			/* 160 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				var $at = __webpack_require__(161)(true);
	
				// 21.1.3.27 String.prototype[@@iterator]()
				__webpack_require__(162)(String, 'String', function (iterated) {
					this._t = String(iterated); // target
					this._i = 0; // next index
					// 21.1.5.2.1 %StringIteratorPrototype%.next()
				}, function () {
					var O = this._t,
					    index = this._i,
					    point;
					if (index >= O.length) return { value: undefined, done: true };
					point = $at(O, index);
					this._i += point.length;
					return { value: point, done: false };
				});
	
				/***/
			},
			/* 161 */
			/***/function (module, exports, __webpack_require__) {
	
				var toInteger = __webpack_require__(32),
				    defined = __webpack_require__(29);
				// true  -> String#at
				// false -> String#codePointAt
				module.exports = function (TO_STRING) {
					return function (that, pos) {
						var s = String(defined(that)),
						    i = toInteger(pos),
						    l = s.length,
						    a,
						    b;
						if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
						a = s.charCodeAt(i);
						return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
					};
				};
	
				/***/
			},
			/* 162 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				var LIBRARY = __webpack_require__(163),
				    $export = __webpack_require__(7),
				    redefine = __webpack_require__(164),
				    hide = __webpack_require__(12),
				    has = __webpack_require__(25),
				    Iterators = __webpack_require__(165),
				    $iterCreate = __webpack_require__(166),
				    setToStringTag = __webpack_require__(167),
				    getPrototypeOf = __webpack_require__(169),
				    ITERATOR = __webpack_require__(168)('iterator'),
				    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
				,
				    FF_ITERATOR = '@@iterator',
				    KEYS = 'keys',
				    VALUES = 'values';
	
				var returnThis = function returnThis() {
					return this;
				};
	
				module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
					$iterCreate(Constructor, NAME, next);
					var getMethod = function getMethod(kind) {
						if (!BUGGY && kind in proto) return proto[kind];
						switch (kind) {
							case KEYS:
								return function keys() {
									return new Constructor(this, kind);
								};
							case VALUES:
								return function values() {
									return new Constructor(this, kind);
								};
						}return function entries() {
							return new Constructor(this, kind);
						};
					};
					var TAG = NAME + ' Iterator',
					    DEF_VALUES = DEFAULT == VALUES,
					    VALUES_BUG = false,
					    proto = Base.prototype,
					    $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
					    $default = $native || getMethod(DEFAULT),
					    $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
					    $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
					    methods,
					    key,
					    IteratorPrototype;
					// Fix native
					if ($anyNative) {
						IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
						if (IteratorPrototype !== Object.prototype) {
							// Set @@toStringTag to native iterators
							setToStringTag(IteratorPrototype, TAG, true);
							// fix for some old engines
							if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
						}
					}
					// fix Array#{values, @@iterator}.name in V8 / FF
					if (DEF_VALUES && $native && $native.name !== VALUES) {
						VALUES_BUG = true;
						$default = function values() {
							return $native.call(this);
						};
					}
					// Define iterator
					if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
						hide(proto, ITERATOR, $default);
					}
					// Plug for library
					Iterators[NAME] = $default;
					Iterators[TAG] = returnThis;
					if (DEFAULT) {
						methods = {
							values: DEF_VALUES ? $default : getMethod(VALUES),
							keys: IS_SET ? $default : getMethod(KEYS),
							entries: $entries
						};
						if (FORCED) for (key in methods) {
							if (!(key in proto)) redefine(proto, key, methods[key]);
						} else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
					}
					return methods;
				};
	
				/***/
			},
			/* 163 */
			/***/function (module, exports) {
	
				module.exports = true;
	
				/***/
			},
			/* 164 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = __webpack_require__(12);
	
				/***/
			},
			/* 165 */
			/***/function (module, exports) {
	
				module.exports = {};
	
				/***/
			},
			/* 166 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				var create = __webpack_require__(51),
				    descriptor = __webpack_require__(21),
				    setToStringTag = __webpack_require__(167),
				    IteratorPrototype = {};
	
				// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
				__webpack_require__(12)(IteratorPrototype, __webpack_require__(168)('iterator'), function () {
					return this;
				});
	
				module.exports = function (Constructor, NAME, next) {
					Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
					setToStringTag(Constructor, NAME + ' Iterator');
				};
	
				/***/
			},
			/* 167 */
			/***/function (module, exports, __webpack_require__) {
	
				var def = __webpack_require__(13).f,
				    has = __webpack_require__(25),
				    TAG = __webpack_require__(168)('toStringTag');
	
				module.exports = function (it, tag, stat) {
					if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
				};
	
				/***/
			},
			/* 168 */
			/***/function (module, exports, __webpack_require__) {
	
				var store = __webpack_require__(35)('wks'),
				    uid = __webpack_require__(36),
				    _Symbol2 = __webpack_require__(8).Symbol,
				    USE_SYMBOL = typeof _Symbol2 == 'function';
	
				var $exports = module.exports = function (name) {
					return store[name] || (store[name] = USE_SYMBOL && _Symbol2[name] || (USE_SYMBOL ? _Symbol2 : uid)('Symbol.' + name));
				};
	
				$exports.store = store;
	
				/***/
			},
			/* 169 */
			/***/function (module, exports, __webpack_require__) {
	
				// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
				var has = __webpack_require__(25),
				    toObject = __webpack_require__(40),
				    IE_PROTO = __webpack_require__(34)('IE_PROTO'),
				    ObjectProto = Object.prototype;
	
				module.exports = _getPrototypeOf2.default || function (O) {
					O = toObject(O);
					if (has(O, IE_PROTO)) return O[IE_PROTO];
					if (typeof O.constructor == 'function' && O instanceof O.constructor) {
						return O.constructor.prototype;
					}return O instanceof Object ? ObjectProto : null;
				};
	
				/***/
			},
			/* 170 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				var ctx = __webpack_require__(10),
				    $export = __webpack_require__(7),
				    toObject = __webpack_require__(40),
				    call = __webpack_require__(171),
				    isArrayIter = __webpack_require__(172),
				    toLength = __webpack_require__(31),
				    createProperty = __webpack_require__(173),
				    getIterFn = __webpack_require__(174);
	
				$export($export.S + $export.F * !__webpack_require__(176)(function (iter) {
					(0, _from4.default)(iter);
				}), 'Array', {
					// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
					from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
						var O = toObject(arrayLike),
						    C = typeof this == 'function' ? this : Array,
						    aLen = arguments.length,
						    mapfn = aLen > 1 ? arguments[1] : undefined,
						    mapping = mapfn !== undefined,
						    index = 0,
						    iterFn = getIterFn(O),
						    length,
						    result,
						    step,
						    iterator;
						if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
						// if object isn't iterable or it's array with default iterator - use simple case
						if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
							for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
								createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
							}
						} else {
							length = toLength(O.length);
							for (result = new C(length); length > index; index++) {
								createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
							}
						}
						result.length = index;
						return result;
					}
				});
	
				/***/
			},
			/* 171 */
			/***/function (module, exports, __webpack_require__) {
	
				// call something on iterator step with safe closing on error
				var anObject = __webpack_require__(14);
				module.exports = function (iterator, fn, value, entries) {
					try {
						return entries ? fn(anObject(value)[0], value[1]) : fn(value);
						// 7.4.6 IteratorClose(iterator, completion)
					} catch (e) {
						var ret = iterator['return'];
						if (ret !== undefined) anObject(ret.call(iterator));
						throw e;
					}
				};
	
				/***/
			},
			/* 172 */
			/***/function (module, exports, __webpack_require__) {
	
				// check on default Array iterator
				var Iterators = __webpack_require__(165),
				    ITERATOR = __webpack_require__(168)('iterator'),
				    ArrayProto = Array.prototype;
	
				module.exports = function (it) {
					return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
				};
	
				/***/
			},
			/* 173 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				var $defineProperty = __webpack_require__(13),
				    createDesc = __webpack_require__(21);
	
				module.exports = function (object, index, value) {
					if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
				};
	
				/***/
			},
			/* 174 */
			/***/function (module, exports, __webpack_require__) {
	
				var classof = __webpack_require__(175),
				    ITERATOR = __webpack_require__(168)('iterator'),
				    Iterators = __webpack_require__(165);
				module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
					if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
				};
	
				/***/
			},
			/* 175 */
			/***/function (module, exports, __webpack_require__) {
	
				// getting tag from 19.1.3.6 Object.prototype.toString()
				var cof = __webpack_require__(28),
				    TAG = __webpack_require__(168)('toStringTag')
				// ES3 wrong here
				,
				    ARG = cof(function () {
					return arguments;
				}()) == 'Arguments';
	
				// fallback for IE11 Script Access Denied error
				var tryGet = function tryGet(it, key) {
					try {
						return it[key];
					} catch (e) {/* empty */}
				};
	
				module.exports = function (it) {
					var O, T, B;
					return it === undefined ? 'Undefined' : it === null ? 'Null'
					// @@toStringTag case
					: typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
					// builtinTag case
					: ARG ? cof(O)
					// ES3 arguments fallback
					: (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
				};
	
				/***/
			},
			/* 176 */
			/***/function (module, exports, __webpack_require__) {
	
				var ITERATOR = __webpack_require__(168)('iterator'),
				    SAFE_CLOSING = false;
	
				try {
					var riter = [7][ITERATOR]();
					riter['return'] = function () {
						SAFE_CLOSING = true;
					};
					(0, _from4.default)(riter, function () {
						throw 2;
					});
				} catch (e) {/* empty */}
	
				module.exports = function (exec, skipClosing) {
					if (!skipClosing && !SAFE_CLOSING) return false;
					var safe = false;
					try {
						var arr = [7],
						    iter = arr[ITERATOR]();
						iter.next = function () {
							return { done: safe = true };
						};
						arr[ITERATOR] = function () {
							return iter;
						};
						exec(arr);
					} catch (e) {/* empty */}
					return safe;
				};
	
				/***/
			},
			/* 177 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = { "default": __webpack_require__(178), __esModule: true };
	
				/***/
			},
			/* 178 */
			/***/function (module, exports, __webpack_require__) {
	
				__webpack_require__(179);
				module.exports = __webpack_require__(9).Object.keys;
	
				/***/
			},
			/* 179 */
			/***/function (module, exports, __webpack_require__) {
	
				// 19.1.2.14 Object.keys(O)
				var toObject = __webpack_require__(40),
				    $keys = __webpack_require__(23);
	
				__webpack_require__(180)('keys', function () {
					return function keys(it) {
						return $keys(toObject(it));
					};
				});
	
				/***/
			},
			/* 180 */
			/***/function (module, exports, __webpack_require__) {
	
				// most Object methods by ES6 should accept primitives
				var $export = __webpack_require__(7),
				    core = __webpack_require__(9),
				    fails = __webpack_require__(18);
				module.exports = function (KEY, exec) {
					var fn = (core.Object || {})[KEY] || Object[KEY],
					    exp = {};
					exp[KEY] = exec(fn);
					$export($export.S + $export.F * fails(function () {
						fn(1);
					}), 'Object', exp);
				};
	
				/***/
			},
			/* 181 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__webpack_require__(182);
				__vue_script__ = __webpack_require__(184);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/DateMonth.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(191);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./DateMonth.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 182 */
			/***/function (module, exports, __webpack_require__) {
	
				// style-loader: Adds some css to the DOM by adding a <style> tag
	
				// load the styles
				var content = __webpack_require__(183);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(46)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DateMonth.vue", function () {
							var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DateMonth.vue");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () {
						update();
					});
				}
	
				/***/
			},
			/* 183 */
			/***/function (module, exports, __webpack_require__) {
	
				exports = module.exports = __webpack_require__(45)();
				// imports
	
				// module
				exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.upSlide-transition,\n.downSlide-transition {\n  opacity: 1;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n.upSlide-enter {\n  opacity: 0;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n.upSlide-leave {\n  opacity: 0;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n}\n\n.downSlide-enter {\n  opacity: 0;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n}\n.downSlide-leave {\n  opacity: 0;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n\n.leftArrow:after,\n.leftArrow:before {\n  content: ' ';\n  position: absolute;\n  height: 0;\n  width: 0;\n  right: 20px;\n  border: solid transparent;\n}\n\n.rightArrow:after,\n.rightArrow:before {\n  content: ' ';\n  position: absolute;\n  height: 0;\n  width: 0;\n  border: solid transparent;\n  left: 20px;\n}\n\n.leftArrow:after {\n  border-right-color: white;\n  border-width: 9px;\n  top: 15px;\n}\n.leftArrow:before {\n  border-right-color: black;\n  border-width: 12px;\n  top: 12px;\n}\n.rightArrow:after {\n  border-left-color: white;\n  border-width: 9px;\n  top: 15px;\n}\n.rightArrow:before {\n  border-left-color: black;\n  border-width: 12px;\n  top: 12px;\n}\n", ""]);
	
				// exports
	
				/***/
			},
			/* 184 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				var _common = __webpack_require__(58);
	
				var _transitions = __webpack_require__(54);
	
				var _transitions2 = _interopRequireDefault(_transitions);
	
				var _ArrowLeft = __webpack_require__(185);
	
				var _ArrowLeft2 = _interopRequireDefault(_ArrowLeft);
	
				var _ArrowRight = __webpack_require__(188);
	
				var _ArrowRight2 = _interopRequireDefault(_ArrowRight);
	
				var _touchRipple = __webpack_require__(42);
	
				var _touchRipple2 = _interopRequireDefault(_touchRipple);
	
				var _util = __webpack_require__(60);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	
				exports.default = {
					data: function data() {
						var useFlexbox = (0, _util.isIE)() > 9;
						var today = new Date();
						var month = monthList[today.getMonth()];
						var year = today.getFullYear();
						var styles = {
							root: {
								display: useFlexbox ? '-ms-flexbox' : 'flex',
								boxSizing: 'border-box',
								justifyContent: 'space-between',
								MsFlexPack: 'justify',
								alignItems: 'center',
								MsFlexAlign: 'center',
								position: 'relative'
							},
							date: {
								willChange: 'transform, opacity',
								position: 'absolute',
								top: '6px',
								left: '135px',
								textAlign: 'center',
								transition: _transitions2.default.easeOut()
							},
							arrow: {
								position: 'relative',
								width: '48px',
								height: '48px',
								cursor: 'pointer'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							dateStyle: styles.date,
							arrowStyle: styles.arrow,
							curYear: year,
							curMonth: today.getMonth(),
							curDate: month + ' ' + year,
							dateSet: [{ date: month + ' ' + year, direction: 'upSlide' }]
						};
					},
					props: {
						styleObj: Object
					},
					components: {
						touchRipple: _touchRipple2.default,
						ArrowLeft: _ArrowLeft2.default,
						ArrowRight: _ArrowRight2.default
					},
					methods: {
						handleback: function handleback() {
							this.dateSet.$set(this.dateSet.length - 1, { date: this.curDate, direction: 'upSlide' });
							if (this.curMonth === 0) {
								this.curMonth = 11;
								this.curYear -= 1;
							} else {
								this.curMonth -= 1;
							}
							this.curDate = monthList[this.curMonth] + ' ' + this.curYear;
							this.dateSet.push({ date: this.curDate, direction: 'upSlide' });
							this.$dispatch('back', new Date(this.curYear, this.curMonth));
							this.dateSet.shift();
						},
						handleforward: function handleforward() {
							this.dateSet.$set(this.dateSet.length - 1, { date: this.curDate, direction: 'downSlide' });
							if (this.curMonth === 11) {
								this.curMonth = 0;
								this.curYear += 1;
							} else {
								this.curMonth += 1;
							}
							this.curDate = monthList[this.curMonth] + ' ' + this.curYear;
							this.dateSet.push({ date: this.curDate, direction: 'downSlide' });
							this.$dispatch('forward', new Date(this.curYear, this.curMonth));
							this.dateSet.shift();
						},
						showLast: function showLast(d, index) {
							return this.dateSet[this.dateSet.length - 1] === d;
						}
					}
				};
	
				/***/
			},
			/* 185 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(186);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/svg/ArrowLeft.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(187);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./ArrowLeft.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 186 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								position: 'absolute',
								height: '24px',
								width: '24px',
								top: '12px',
								left: '12px'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							viewBox: '0 0 24 24'
						};
					}
	
				};
	
				/***/
			},
			/* 187 */
			/***/function (module, exports) {
	
				module.exports = "\n<svg :style=\"mRootStyle\" :viewBox='viewBox' >\n  <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n</svg>\n";
	
				/***/
			},
			/* 188 */
			/***/function (module, exports, __webpack_require__) {
	
				var __vue_script__, __vue_template__;
				__vue_script__ = __webpack_require__(189);
				if (__vue_script__ && __vue_script__.__esModule && (0, _keys4.default)(__vue_script__).length > 1) {
					console.warn("[vue-loader] src/svg/ArrowRight.vue: named exports in *.vue files are ignored.");
				}
				__vue_template__ = __webpack_require__(190);
				module.exports = __vue_script__ || {};
				if (module.exports.__esModule) module.exports = module.exports.default;
				if (__vue_template__) {
					(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
				}
				if (false) {
					(function () {
						module.hot.accept();
						var hotAPI = require("vue-hot-reload-api");
						hotAPI.install(require("vue"), false);
						if (!hotAPI.compatible) return;
						var id = "./ArrowRight.vue";
						if (!module.hot.data) {
							hotAPI.createRecord(id, module.exports);
						} else {
							hotAPI.update(id, module.exports, __vue_template__);
						}
					})();
				}
	
				/***/
			},
			/* 189 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _assign = __webpack_require__(4);
	
				var _assign2 = _interopRequireDefault(_assign);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.default = {
					data: function data() {
						var styles = {
							root: {
								position: 'absolute',
								height: '24px',
								width: '24px',
								top: '12px',
								left: '12px'
							}
						};
						return {
							mRootStyle: (0, _assign2.default)(styles.root, this.styleObj),
							viewBox: '0 0 24 24'
						};
					}
	
				};
	
				/***/
			},
			/* 190 */
			/***/function (module, exports) {
	
				module.exports = "\n<svg :style=\"mRootStyle\" :viewBox='viewBox'>\n  <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n</svg>\n";
	
				/***/
			},
			/* 191 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\">\n  <div :style=\"arrowStyle\" @click=\"handleback\">\n    <arrow-left></arrow-left>\n    <touch-ripple :style-obj=\"zoom\" :center=\"true\"></touch-ripple>\n  </div>\n  <span v-for=\"d in dateSet\" :transition=\"d.direction\" :style=\"dateStyle\">{{d.date}}</span>\n  <div :style=\"arrowStyle\" @click=\"handleforward\">\n    <arrow-right></arrow-right>\n    <touch-ripple :style-obj=\"zoom\" :center=\"true\"></touch-ripple>\n  </div>\n</div>\n";
	
				/***/
			},
			/* 192 */
			/***/function (module, exports) {
	
				module.exports = "\n<div :style=\"mRootStyle\">\n  <text-field :style-obj=\"mTextStyle\" :on-focus=\"handleFocus\" :value=\"selectedString\"></text-field>\n  <dialog :open.sync=\"open\" :wrapper-style=\"mDialogStyle\" v-ref:dialog>\n    <div slot=\"dialogBody\">\n      <date-month></date-month>\n      <div :style=\"weekRowStyle\">\n        <div v-for=\"t in weekShort\" track-by=\"$index\" :style=\"weekColStyle\">\n          {{t}}\n        </div>\n      </div>\n      <div :style=\"calendarStyle\">\n        <div v-for=\"calender in calenders\" :transition=\"calender.direction\" :style=\"calInnerStyle\">\n          <div v-for=\"row in calender.days\" :style=\"rowStyle\">\n            <div key v-for=\"col in row\" track-by=\"$index\" :style=\"colStyle\" @click=\"handleClick($event)\">\n              <div :style=\"dayStyle\">\n              </div>\n              <span :style=\"numStyle\">{{col}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <base-button label=\"CANCEL\" slot=\"dialogAction\" :on-click=\"handleCancel\"></base-button>\n    <base-button label=\"OK\" slot=\"dialogAction\" :on-click=\"handleOK\"></base-button>\n  </dialog>\n</div>\n";
	
				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)(module)))

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(94);
	module.exports = __webpack_require__(58).Array.from;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(51)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(54)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(52)
	  , defined   = __webpack_require__(53);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(55)
	  , $export        = __webpack_require__(56)
	  , redefine       = __webpack_require__(71)
	  , hide           = __webpack_require__(61)
	  , has            = __webpack_require__(72)
	  , Iterators      = __webpack_require__(73)
	  , $iterCreate    = __webpack_require__(74)
	  , setToStringTag = __webpack_require__(90)
	  , getPrototypeOf = __webpack_require__(92)
	  , ITERATOR       = __webpack_require__(91)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(57)
	  , core      = __webpack_require__(58)
	  , ctx       = __webpack_require__(59)
	  , hide      = __webpack_require__(61)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 57 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 58 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(60);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(62)
	  , createDesc = __webpack_require__(70);
	module.exports = __webpack_require__(66) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(63)
	  , IE8_DOM_DEFINE = __webpack_require__(65)
	  , toPrimitive    = __webpack_require__(69)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(66) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(64);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(66) && !__webpack_require__(67)(function(){
	  return Object.defineProperty(__webpack_require__(68)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(67)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(64)
	  , document = __webpack_require__(57).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(64);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(61);

/***/ },
/* 72 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(75)
	  , descriptor     = __webpack_require__(70)
	  , setToStringTag = __webpack_require__(90)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(61)(IteratorPrototype, __webpack_require__(91)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(63)
	  , dPs         = __webpack_require__(76)
	  , enumBugKeys = __webpack_require__(88)
	  , IE_PROTO    = __webpack_require__(85)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(68)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(89).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(62)
	  , anObject = __webpack_require__(63)
	  , getKeys  = __webpack_require__(77);
	
	module.exports = __webpack_require__(66) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(78)
	  , enumBugKeys = __webpack_require__(88);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(72)
	  , toIObject    = __webpack_require__(79)
	  , arrayIndexOf = __webpack_require__(82)(false)
	  , IE_PROTO     = __webpack_require__(85)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(80)
	  , defined = __webpack_require__(53);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(81);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(79)
	  , toLength  = __webpack_require__(83)
	  , toIndex   = __webpack_require__(84);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(52)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(52)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(86)('keys')
	  , uid    = __webpack_require__(87);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(57)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(57).document && document.documentElement;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(62).f
	  , has = __webpack_require__(72)
	  , TAG = __webpack_require__(91)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(86)('wks')
	  , uid        = __webpack_require__(87)
	  , Symbol     = __webpack_require__(57).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(72)
	  , toObject    = __webpack_require__(93)
	  , IE_PROTO    = __webpack_require__(85)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(53);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(59)
	  , $export        = __webpack_require__(56)
	  , toObject       = __webpack_require__(93)
	  , call           = __webpack_require__(95)
	  , isArrayIter    = __webpack_require__(96)
	  , toLength       = __webpack_require__(83)
	  , createProperty = __webpack_require__(97)
	  , getIterFn      = __webpack_require__(98);
	
	$export($export.S + $export.F * !__webpack_require__(100)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(63);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(73)
	  , ITERATOR   = __webpack_require__(91)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(62)
	  , createDesc      = __webpack_require__(70);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(99)
	  , ITERATOR  = __webpack_require__(91)('iterator')
	  , Iterators = __webpack_require__(73);
	module.exports = __webpack_require__(58).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(81)
	  , TAG = __webpack_require__(91)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(91)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(103);
	module.exports = __webpack_require__(58).Object.getPrototypeOf;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(93)
	  , $getPrototypeOf = __webpack_require__(92);
	
	__webpack_require__(104)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(56)
	  , core    = __webpack_require__(58)
	  , fails   = __webpack_require__(67);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107);
	var $Object = __webpack_require__(58).Object;
	module.exports = function defineProperties(T, D){
	  return $Object.defineProperties(T, D);
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(56);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(66), 'Object', {defineProperties: __webpack_require__(76)});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(110);
	var $Object = __webpack_require__(58).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(56)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(75)});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(58)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115);
	module.exports = __webpack_require__(58).Object.getOwnPropertySymbols;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(57)
	  , has            = __webpack_require__(72)
	  , DESCRIPTORS    = __webpack_require__(66)
	  , $export        = __webpack_require__(56)
	  , redefine       = __webpack_require__(71)
	  , META           = __webpack_require__(116).KEY
	  , $fails         = __webpack_require__(67)
	  , shared         = __webpack_require__(86)
	  , setToStringTag = __webpack_require__(90)
	  , uid            = __webpack_require__(87)
	  , wks            = __webpack_require__(91)
	  , wksExt         = __webpack_require__(117)
	  , wksDefine      = __webpack_require__(118)
	  , keyOf          = __webpack_require__(119)
	  , enumKeys       = __webpack_require__(120)
	  , isArray        = __webpack_require__(123)
	  , anObject       = __webpack_require__(63)
	  , toIObject      = __webpack_require__(79)
	  , toPrimitive    = __webpack_require__(69)
	  , createDesc     = __webpack_require__(70)
	  , _create        = __webpack_require__(75)
	  , gOPNExt        = __webpack_require__(124)
	  , $GOPD          = __webpack_require__(126)
	  , $DP            = __webpack_require__(62)
	  , $keys          = __webpack_require__(77)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(125).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(122).f  = $propertyIsEnumerable;
	  __webpack_require__(121).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(55)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(61)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(87)('meta')
	  , isObject = __webpack_require__(64)
	  , has      = __webpack_require__(72)
	  , setDesc  = __webpack_require__(62).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(67)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(91);

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(57)
	  , core           = __webpack_require__(58)
	  , LIBRARY        = __webpack_require__(55)
	  , wksExt         = __webpack_require__(117)
	  , defineProperty = __webpack_require__(62).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(77)
	  , toIObject = __webpack_require__(79);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(77)
	  , gOPS    = __webpack_require__(121)
	  , pIE     = __webpack_require__(122);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 122 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(81);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(79)
	  , gOPN      = __webpack_require__(125).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(78)
	  , hiddenKeys = __webpack_require__(88).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(122)
	  , createDesc     = __webpack_require__(70)
	  , toIObject      = __webpack_require__(79)
	  , toPrimitive    = __webpack_require__(69)
	  , has            = __webpack_require__(72)
	  , IE8_DOM_DEFINE = __webpack_require__(65)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(66) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(128), __esModule: true };

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(131);
	module.exports = __webpack_require__(58).Symbol;

/***/ },
/* 129 */
/***/ function(module, exports) {



/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(118)('asyncIterator');

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(118)('observable');

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(134);
	module.exports = __webpack_require__(58).Object.assign;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(56);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(135)});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(77)
	  , gOPS     = __webpack_require__(121)
	  , pIE      = __webpack_require__(122)
	  , toObject = __webpack_require__(93)
	  , IObject  = __webpack_require__(80)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(67)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(138);
	var $Object = __webpack_require__(58).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(56);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(66), 'Object', {defineProperty: __webpack_require__(62).f});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(141);
	module.exports = __webpack_require__(58).Object.keys;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(93)
	  , $keys    = __webpack_require__(77);
	
	__webpack_require__(104)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(143);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(127);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(145);
	module.exports = __webpack_require__(117).f('iterator');

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(146);
	var global        = __webpack_require__(57)
	  , hide          = __webpack_require__(61)
	  , Iterators     = __webpack_require__(73)
	  , TO_STRING_TAG = __webpack_require__(91)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(147)
	  , step             = __webpack_require__(148)
	  , Iterators        = __webpack_require__(73)
	  , toIObject        = __webpack_require__(79);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(54)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <page-header :title=\"title\" :description=\"description\"></page-header>\n  <example :code-html=\"html\">\n    <check-box :trigger=true slot=\"ex\" :style-obj=\"style\"></check-box>\n    <check-box :trigger=false slot=\"ex\" :style-obj=\"style\"></check-box>\n    <check-box :disabled=true slot=\"ex\" :style-obj=\"style\"></check-box>\n  </example>\n  <property>\n    <table-wrapper slot=\"pro\">\n      <table-header slot=\"header\" :headers=\"tableHeader\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent\" class=\"desc\"></table-body>\n    </table-wrapper>\n  </property>\n</div>\n";

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(151)
	__vue_script__ = __webpack_require__(153)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/ButtonView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(154)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./ButtonView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(152);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ButtonView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ButtonView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n\n.button-examples [slot=\"ex\"] {\n  margin: 10px !important; }\n", ""]);
	
	// exports


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Buttons',
	      description: 'A button clearly communicates what action will occur when the user touches it.',
	      tableHeader: ['property', 'type', 'default', 'description'],
	      bodyContent: _property2.default.button,
	      labelStyle: {
	        color: '#eff2f4'
	      },
	      html: '<base-button label="BUTTON"></base-button> \
	              \n<base-button label="FACEBOOK" background-color="rgb(58, 87, 149)" :shadow-depth="1" icon-class="fa fa-facebook-official fa-2x"></base-button> \
	              \n<base-button label="LINUX" background-color="rgb(73, 219, 114)" :shadow-depth="1" :is-icon-front=true icon-class="fa fa-linux fa-2x"></base-button> \
	              \n<base-button label="GITHUB LINK" :shadow-depth=1 link="https://github.com" icon-class="fa fa-github fa-2x"></base-button> \
	              \n<base-button label="FLOAT BUTTON" :shadow-depth=1 :is-float=true></base-button> \
	              \n<base-button label="DISABELED" :disabled=true></base-button>'
	    };
	  },
	  components: {
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    BaseButton: _materialVue.BaseButton,
	    TableBody: _materialVue.TableBody,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  }
	};

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <page-header :title=\"title\" :description=\"description\"></page-header>\n  <example :code-html=\"html\" class=\"button-examples\">\n    <base-button label=\"BUTTON\" slot=\"ex\" ></base-button>\n    <base-button label=\"FACEBOOK\" slot=\"ex\" :label-style=\"labelStyle\" background-color=\"rgb(58, 87, 149)\" :shadow-depth='1' icon-class=\"fa fa-facebook-official fa-2x\"></base-button>\n    <base-button label=\"LINUX\" slot=\"ex\" :label-style=\"labelStyle\" background-color=\"rgb(73, 219, 114)\" :shadow-depth='1' :is-icon-front=true icon-class=\"fa fa-linux fa-2x\"></base-button>\n    <base-button label=\"GITHUB LINK\" slot=\"ex\" :shadow-depth=1 link='https://github.com' icon-class=\"fa fa-github fa-2x\"></base-button>\n    <base-button label=\"FLOAT BUTTON\" slot=\"ex\" :shadow-depth=1 :is-float=\"true\"></base-button>\n    <base-button label=\"DISABELED\" slot=\"ex\" :disabled=\"true\"></base-button>\n  </example>\n  <property>\n    <table-wrapper slot=\"pro\">\n      <table-header slot=\"header\" :headers=\"tableHeader\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent\" class=\"desc\"></table-body>\n    </table-wrapper>\n  </property>\n</div>\n";

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(156)
	__vue_script__ = __webpack_require__(158)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/IconButtonView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(159)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./IconButtonView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(157);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IconButtonView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IconButtonView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n", ""]);
	
	// exports


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: "IconButton",
	      description: "button element with an icon.",
	      tableHeader: ["property", "type", "default", "description"],
	      bodyContent: _property2.default.icon,
	      html: '<icon-button icon-class="fa fa-google fa-2x" link="http://google.com"></icon-button> \
	            \n<icon-button icon-class="fa fa-google fa-2x" link="http://google.com"></icon-button>\n \
	            \n<icon-button icon-class="fa fa-bell-o fa-2x"></icon-button> \
	            \n<icon-button icon-class="fa fa-bell-o fa-2x" :disabled=true></icon-button>\n \
	            \n<icon-button icon-class="fa fa-cog fa-2x" tooltip="message position"  vertical-position="top" horizontal-position="left"></icon-button> \
	            \n<icon-button icon-class="fa fa-cog fa-2x" tooltip="message position"  vertical-position="top" horizontal-position="right"></icon-button> \
	            \n<icon-button icon-class="fa fa-cog fa-2x" tooltip="message position"  vertical-position="top" horizontal-position="center"></icon-button> \
	            \n<icon-button icon-class="fa fa-cog fa-2x" tooltip="message position"  vertical-position="bottom" horizontal-position="left"></icon-button> \
	            \n<icon-button icon-class="fa fa-cog fa-2x" tooltip="message position"  vertical-position="bottom" horizontal-position="right"></icon-button> \
	            \n<icon-button icon-class="fa fa-cog fa-2x" tooltip="message position"  vertical-position="bottom" horizontal-position="center"></icon-button>'
	    };
	  },
	  components: {
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    TableBody: _materialVue.TableBody,
	    IconButton: _materialVue.IconButton,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  }
	};

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"\">\n    <page-header :title=\"title\" :description=\"description\"></page-header>\n    <example :code-html=\"html\">\n      <div slot=\"ex\">\n        <icon-button icon-class=\"fa fa-google fa-2x\" link=\"http://google.com\"></icon-button>\n        <icon-button icon-class=\"fa fa-github fa-2x\" link=\"http://github.com\"></icon-button>\n      </div>\n      <div slot=\"ex\">\n        <icon-button icon-class=\"fa fa-bell-o fa-2x\" slot=\"ex\"></icon-button>\n<<<<<<< HEAD\n        <icon-button icon-class=\"fa fa-bell-o fa-2x\" slot=\"ex\" :disabled=true></icon-button>\n=======\n        <icon-button icon-class=\"fa fa-bell-o fa-2x\" slot=\"ex\" :disabled=\"true\"></icon-button>\n>>>>>>> gh-pages\n      </div>\n      <div slot=\"ex\">\n        <icon-button\n          icon-class=\"fa fa-cog fa-2x\"\n          tooltip=\"message position\"\n          slot=\"ex\"\n          vertical-position=\"top\"\n          horizontal-position=\"left\"\n        >\n        </icon-button>\n        <icon-button\n          icon-class=\"fa fa-cog fa-2x\"\n          tooltip=\"message position\"\n          slot=\"ex\"\n          vertical-position=\"top\"\n          horizontal-position=\"right\"\n        >\n        </icon-button>\n        <icon-button\n          icon-class=\"fa fa-cog fa-2x\"\n          tooltip=\"message position\"\n          slot=\"ex\"\n          vertical-position=\"top\"\n          horizontal-position=\"center\"\n        >\n        </icon-button>\n        <icon-button\n          icon-class=\"fa fa-cog fa-2x\"\n          tooltip=\"message position\"\n          slot=\"ex\"\n          vertical-position=\"bottom\"\n          horizontal-position=\"left\"\n        >\n        </icon-button>\n        <icon-button\n          icon-class=\"fa fa-cog fa-2x\"\n          tooltip=\"message position\"\n          slot=\"ex\"\n          vertical-position=\"bottom\"\n          horizontal-position=\"right\"\n        >\n        </icon-button>\n        <icon-button\n          icon-class=\"fa fa-cog fa-2x\"\n          tooltip=\"message position\"\n          slot=\"ex\"\n          vertical-position=\"bottom\"\n          horizontal-position=\"center\"\n        >\n        </icon-button>\n      </div>\n    </example>\n    <property>\n      <table-wrapper slot=\"pro\">\n        <table-header slot=\"header\" :headers=\"tableHeader\"></table-header>\n        <table-body slot=\"body\" :body-content=\"bodyContent\" class=\"desc\"></table-body>\n      </table-wrapper>\n    </property>\n  </div>\n";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(161)
	__vue_script__ = __webpack_require__(163)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/DownMenuView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(164)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./DownMenuView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(162);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DownMenuView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DownMenuView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n", ""]);
	
	// exports


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'DownMenu',
	      description: 'Lists of clickable actions.',
	      tableHeader: ['property', 'type', 'default', 'description'],
	      bodyContent: _property2.default.downmenu,
	      html: '<down-menu label="Default" > \
	            \n  <menu-item label="Action" slot="downList"></menu-item> \
	            \n  <menu-item label="Another action" slot="downList"></menu-item> \
	            \n</down-menu> \
	            \n<down-menu label="Default" :disabled=true> \
	            \n  <menu-item label="Action" slot="downList"></menu-item> \
	            \n  <menu-item label="Another action" slot="downList"></menu-item> \
	            \n</down-menu> '
	    };
	  },
	  components: {
	    DownMenu: _materialVue.DownMenu,
	    MenuItem: _materialVue.MenuItem,
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    TableBody: _materialVue.TableBody,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  }
	};

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <page-header :title=\"title\" :description=\"description\"></page-header>\n  <example :code-html=\"html\">\n    <down-menu label=\"Default\" slot=\"ex\">\n      <menu-item label=\"Action\" slot=\"downList\" ></menu-item>\n      <menu-item label=\"Another action\" slot=\"downList\"></menu-item>\n    </down-menu>\n    <down-menu label=\"Default\" :disabled=true slot=\"ex\">\n      <menu-item label=\"Action\" slot=\"downList\"></menu-item>\n      <menu-item label=\"Another action\" slot=\"downList\"></menu-item>\n    </down-menu>\n  </example>\n  <property>\n    <table-wrapper slot=\"pro\">\n      <table-header slot=\"header\" :headers=\"tableHeader\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent\" class=\"desc\"></table-body>\n    </table-wrapper>\n  </property>\n</div>\n";

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(166)
	__vue_script__ = __webpack_require__(168)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/IconMenuView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(169)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./IconMenuView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(167);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IconMenuView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IconMenuView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n", ""]);
	
	// exports


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'IconMenu',
	      description: 'Lists of clickable actions.',
	      tableHeader: ['property', 'type', 'default', 'description'],
	      bodyContent: _property2.default.iconmenu,
	      html: '<icon-menu icon-class="fa fa-list fa-2x"> \
	             \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
	             \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
	             \n</icon-menu> \
	             \n\n<icon-menu icon-class="fa fa-list fa-2x" vertical-position="bottom" horizontal-position="right"> \
	              \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
	              \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
	              \n</icon-menu> \
	             \n\n<icon-menu icon-class="fa fa-list fa-2x" vertical-position="top" horizontal-position="left"> \
	             \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
	             \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
	             \n</icon-menu> \
	             \n\n<icon-menu icon-class="fa fa-list fa-2x" vertical-position="top" horizontal-position="right"> \
	              \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
	              \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
	              \n</icon-menu> '
	    };
	  },
	  components: {
	    MenuItem: _materialVue.MenuItem,
	    IconMenu: _materialVue.IconMenu,
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    TableBody: _materialVue.TableBody,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  }
	};

/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <page-header :title=\"title\" :description=\"description\"></page-header>\n  <example :code-html=\"html\">\n    <icon-menu icon-class=\"fa fa-list fa-2x\" slot=\"ex\">\n      <menu-item label=\"Some Action\" slot=\"iconList\"></menu-item>\n      <menu-item label=\"Another Action\" slot=\"iconList\"></menu-item>\n    </icon-menu>\n    <icon-menu icon-class=\"fa fa-list fa-2x\" slot=\"ex\" vertical-position=\"bottom\" horizontal-position=\"right\">\n      <menu-item label=\"Some Action\" slot=\"iconList\"></menu-item>\n      <menu-item label=\"Some Action\" slot=\"iconList\"></menu-item>\n    </icon-menu>\n    <icon-menu icon-class=\"fa fa-list fa-2x\" slot=\"ex\" vertical-position=\"top\" horizontal-position=\"left\">\n      <menu-item label=\"Some Action\" slot=\"iconList\"></menu-item>\n      <menu-item label=\"Some Action\" slot=\"iconList\"></menu-item>\n    </icon-menu>\n    <icon-menu icon-class=\"fa fa-list fa-2x\" slot=\"ex\" vertical-position=\"top\" horizontal-position=\"right\">\n      <menu-item label=\"Some Action\" slot=\"iconList\"></menu-item>\n      <menu-item label=\"Some Action\" slot=\"iconList\"></menu-item>\n    </icon-menu>\n  </example>\n  <property>\n    <table-wrapper slot=\"pro\">\n      <table-header slot=\"header\" :headers=\"tableHeader\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent\" class=\"desc\"></table-body>\n    </table-wrapper>\n  </property>\n</div>\n";

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(171)
	__vue_script__ = __webpack_require__(173)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/MenuBarView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(174)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./MenuBarView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MenuBarView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MenuBarView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n", ""]);
	
	// exports


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'MenuBar',
	      description: '',
	      tableHeader: ['property', 'type', 'default', 'description'],
	      bodyContent: _property2.default.menubar,
	      html: '<base-button label="BUTTON" @click="dockToggle"></base-button> \
	            \n<menu-bar :open.sync="dockOpen" :docked=false> \
	            \n  <menu-item slot="menuList" label="menu item 1"></menu-item> \
	            \n  <menu-item slot="menuList" label="menu item 2"></menu-item> \
	            \n</menu-bar> \
	            \n\n<base-button label="BUTTON" @click="toggle"></base-button> \
	            \n<menu-bar :open="open" slot="ex"> \
	            \n  <menu-item slot="menuList" label="menu item 1"></menu-item> \
	            \n  <menu-item slot="menuList" label="menu item 2"></menu-item> \
	            \n</menu-bar>',
	      open: false,
	      dockOpen: false
	    };
	  },
	  components: {
	    BaseButton: _materialVue.BaseButton,
	    MenuBar: _materialVue.MenuBar,
	    MenuItem: _materialVue.MenuItem,
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    TableBody: _materialVue.TableBody,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  },
	  methods: {
	    toggle: function toggle() {
	      this.open = !this.open;
	    },
	    dockToggle: function dockToggle() {
	      this.dockOpen = !this.dockOpen;
	    }
	  }
	};

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <page-header :title=\"title\" :description=\"description\"></page-header>\n  <example :code-html=\"html\">\n    <base-button label=\"BUTTON\" @click=\"dockToggle\" slot=\"ex\"></base-button>\n    <menu-bar :open.sync=\"dockOpen\" :docked=false slot=\"ex\">\n      <menu-item slot=\"menuList\" label=\"menu item 1\"></menu-item>\n      <menu-item slot=\"menuList\" label=\"menu item 2\"></menu-item>\n    </menu-bar>\n    <base-button label=\"BUTTON\" @click=\"toggle\" slot=\"ex\"></base-button>\n    <menu-bar :open=\"open\" slot=\"ex\">\n      <menu-item slot=\"menuList\" label=\"menu item 1\"></menu-item>\n      <menu-item slot=\"menuList\" label=\"menu item 2\"></menu-item>\n    </menu-bar>\n  </example>\n  <property>\n    <table-wrapper slot=\"pro\">\n      <table-header slot=\"header\" :headers=\"tableHeader\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent\" class=\"desc\"></table-body>\n    </table-wrapper>\n  </property>\n</div>\n";

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(176)
	__vue_script__ = __webpack_require__(178)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/RadioView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(179)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./RadioView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(177);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RadioView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RadioView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n", ""]);
	
	// exports


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Radio',
	      description: 'radio is used to select option.',
	      tableHeader: ['property', 'type', 'default', 'description'],
	      bodyContent: _property2.default.radio,
	      html: '<radio :trigger=true></radio> \
	            \n<radio></radio>\
	            \n<radio :disabled=true></radio>',
	      radioStyle: {
	        marginRight: '10px'
	      }
	    };
	  },
	  components: {
	    Radio: _materialVue.Radio,
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    TableBody: _materialVue.TableBody,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  }
	};

/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <page-header :title=\"title\" :description=\"description\"></page-header>\n  <example :code-html=\"html\">\n    <radio slot=\"ex\" :trigger=true :style-obj=\"radioStyle\"></radio>\n    <radio slot=\"ex\" :style-obj=\"radioStyle\"></radio>\n    <radio slot=\"ex\" :disabled=true :style-obj=\"radioStyle\"></radio>\n  </example>\n  <property>\n    <table-wrapper slot=\"pro\">\n      <table-header slot=\"header\" :headers=\"tableHeader\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent\" class=\"desc\"></table-body>\n    </table-wrapper>\n  </property>\n</div>\n";

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(181)
	__vue_script__ = __webpack_require__(183)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/SnackBarView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(184)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./SnackBarView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(182);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SnackBarView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SnackBarView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n", ""]);
	
	// exports


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Snack Bar',
	      description: 'popup notification about an operation.',
	      tableHeader: ['property', 'type', 'default', 'description'],
	      bodyContent: _property2.default.snackbar,
	      html: '<base-button @click="handleClick" label="ACTION"></base-button> \
	             \n<snack-bar :open.sync="open" message="Some action finished."></snack-bar>\
	             \n<base-button @click="handleUndoClick" label="UNDO ACTION"></base-button> \
	             \n<snack-bar :open.sync="undoOpen" message="Some action finished." :undo=true></snack-bar>',
	      open: false,
	      undoOpen: false
	    };
	  },
	  components: {
	    SnackBar: _materialVue.SnackBar,
	    BaseButton: _materialVue.BaseButton,
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    TableBody: _materialVue.TableBody,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.open = !this.open;
	    },
	    handleUndoClick: function handleUndoClick() {
	      this.undoOpen = !this.undoOpen;
	    }
	  }
	};

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <page-header :title=\"title\" :description=\"description\"></page-header>\n  <example :code-html=\"html\">\n    <base-button @click=\"handleClick\" slot=\"ex\" label=\"ACTION\"></base-button>\n    <snack-bar :open.sync=\"open\" slot=\"ex\" message=\"Some action finished.\"></snack-bar>\n    <base-button @click=\"handleUndoClick\" slot=\"ex\" label=\"UNDO ACTION\"></base-button>\n    <snack-bar :open.sync=\"undoOpen\" slot=\"ex\" message=\"Some action finished.\" :undo=true></snack-bar>\n  </example>\n  <property>\n    <table-wrapper slot=\"pro\">\n      <table-header slot=\"header\" :headers=\"tableHeader\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent\" class=\"desc\"></table-body>\n    </table-wrapper>\n  </property>\n</div>\n";

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(186)
	__vue_script__ = __webpack_require__(188)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/TextFieldView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(189)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./TextFieldView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(187);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TextFieldView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TextFieldView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n", ""]);
	
	// exports


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Text Field',
	      description: 'text input component.',
	      tableHeader: ['property', 'type', 'default', 'description'],
	      bodyContent: _property2.default.textfield,
	      exStyle: {
	        display: 'block'
	      },
	      html: '<text-field default-content="haha" value="value"></text-field> \
	             \n<text-field float-content="float content" ></text-field> \
	             \n<text-field hint-content="hint content" ></text-field> \
	             \n<text-field float-content="float content" hint-content="hint content" ></text-field> \
	             \n<text-field default-content="haha" float-content="float content" hint-content="hint content" ></text-field>'
	    };
	  },
	  components: {
	    TextField: _materialVue.TextField,
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    TableBody: _materialVue.TableBody,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  }
	};

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <page-header :title=\"title\" :description=\"description\"></page-header>\n  <example :code-html=\"html\">\n    <text-field slot=\"ex\" :style-obj=\"exStyle\" default-content=\"haha\" value=\"value\"></text-field>\n    <text-field slot=\"ex\" :style-obj=\"exStyle\" float-content=\"float content\" ></text-field>\n    <text-field slot=\"ex\" :style-obj=\"exStyle\" hint-content=\"hint content\" ></text-field>\n    <text-field slot=\"ex\" :style-obj=\"exStyle\" float-content=\"float content\" hint-content=\"hint content\" ></text-field>\n    <text-field slot=\"ex\" :style-obj=\"exStyle\" default-content=\"haha\" float-content=\"float content\" hint-content=\"hint content\" ></text-field>\n  </example>\n  <property>\n    <table-wrapper slot=\"pro\">\n      <table-header slot=\"header\" :headers=\"tableHeader\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent\" class=\"desc\"></table-body>\n    </table-wrapper>\n  </property>\n</div>\n";

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(191)
	__vue_script__ = __webpack_require__(193)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/TableView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(194)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./TableView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(192);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TableView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TableView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n\n.groupTable {\n  margin-bottom: 20px; }\n\n.vertical {\n  vertical-align: middle; }\n\n.options {\n  line-height: 30px;\n  width: 200px; }\n  .options label {\n    display: inline-block;\n    cursor: pointer;\n    width: calc(100% - 50px); }\n", ""]);
	
	// exports


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Table',
	      description: 'Organize data.',
	      tableHeader1: ['table property', 'type', 'default', 'description'],
	      bodyContent1: _property2.default.table,
	      tableHeader2: ['table header property', 'type', 'default', 'description'],
	      bodyContent2: _property2.default.tableheader,
	      tableHeader3: ['table body property', 'type', 'default', 'description'],
	      bodyContent3: _property2.default.tablebody,
	      exampleHeader: ['ID', 'First Name', 'Last Name'],
	      exampleContents: [['1', 'Mark', 'Otto'], ['2', 'Jacob', 'Thornton'], ['3', 'Larry', 'the Bird']],
	      html: '<div> \
	        \n  <label for="tg1">checkbox enable</label> \
	        \n  <toggle :trigger.sync="checkbox" label-id="tg1"></toggle>\
	      \n</div>\
	      \n\n<div>\
	        \n  <label for="tg2">table selectable</label>\
	        \n  <toggle :trigger.sync="selectable" label-id="tg2"></toggle>\
	      \n</div>\
	      \n\n<table-wrapper>\
	        \n  <table-header slot="header" :headers="exampleHeader" :checkbox="checkbox"></table-header>\
	        \n  <table-body slot="body" :body-content="exampleContents" :selectable="selectable" :checkbox="checkbox"></table-body>\
	      \n</table-wrapper>',
	
	      checkbox: false,
	      selectable: false
	    };
	  },
	  components: {
	    Toggle: _materialVue.Toggle,
	    CheckBox: _materialVue.CheckBox,
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    TableBody: _materialVue.TableBody,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  }
	};

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <page-header :title=\"title\" :description=\"description\"></page-header>\n  <example :code-html=\"html\">\n    <div slot=\"ex\" class=\"options\">\n      <label for=\"tg1\">checkbox enable</label>\n      <toggle :trigger.sync=\"checkbox\" class=\"vertical\" label-id=\"tg1\"></toggle>\n    </div>\n    <div slot=\"ex\" class=\"options\">\n      <label for=\"tg2\">table selectable</label>\n      <toggle :trigger.sync=\"selectable\" class=\"vertical\" label-id=\"tg2\"></toggle>\n    </div>\n    <table-wrapper slot=\"ex\">\n      <table-header slot=\"header\" :headers=\"exampleHeader\" :checkbox=\"checkbox\"></table-header>\n      <table-body slot=\"body\" :body-content=\"exampleContents\" :selectable=\"selectable\" :checkbox=\"checkbox\"></table-body>\n    </table-wrapper>\n  </example>\n  <property>\n    <table-wrapper slot=\"pro\" class=\"groupTable\">\n      <table-header slot=\"header\" :headers=\"tableHeader1\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent1\" class=\"desc\"></table-body>\n    </table-wrapper>\n    <table-wrapper slot=\"pro\" class=\"groupTable\">\n      <table-header slot=\"header\" :headers=\"tableHeader2\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent2\" class=\"desc\"></table-body>\n    </table-wrapper>\n    <table-wrapper slot=\"pro\" class=\"groupTable\">\n      <table-header slot=\"header\" :headers=\"tableHeader3\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent3\" class=\"desc\"></table-body>\n    </table-wrapper>\n  </property>\n</div>\n";

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(196)
	__vue_script__ = __webpack_require__(198)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/ToggleView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(199)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./ToggleView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(197);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ToggleView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ToggleView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n", ""]);
	
	// exports


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Toggle',
	      description: 'Toggle is used to select option.',
	      tableHeader: ['property', 'type', 'default', 'description'],
	      bodyContent: _property2.default.toggle,
	      html: '<toggle :trigger=true></toggle>\
	             \n<toggle></toggle> \
	             \n<toggle :disabled=true></toggle>',
	      toggleStyle: {
	        marginRight: '10px'
	      }
	    };
	  },
	  components: {
	    Toggle: _materialVue.Toggle,
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    TableBody: _materialVue.TableBody,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  }
	};

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <page-header :title=\"title\" :description=\"description\"></page-header>\n  <example :code-html=\"html\">\n    <toggle slot=\"ex\" :style-obj=\"toggleStyle\" :trigger=true></toggle>\n    <toggle slot=\"ex\" :style-obj=\"toggleStyle\"></toggle>\n    <toggle slot=\"ex\" :disabled=true :style-obj=\"toggleStyle\"></toggle>\n  </example>\n  <property>\n    <table-wrapper slot=\"pro\">\n      <table-header slot=\"header\" :headers=\"tableHeader\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent\" class=\"desc\"></table-body>\n    </table-wrapper>\n  </property>\n</div>\n";

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(201)
	__vue_script__ = __webpack_require__(203)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/AutoCompleteView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(204)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./AutoCompleteView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(202);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AutoCompleteView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AutoCompleteView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n", ""]);
	
	// exports


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Auto Complete',
	      description: 'auto-complete the input dynamically.',
	      tableHeader: ['property', 'type', 'default', 'description'],
	      completion: ['Bruce', 'Chuck', 'Jackie'],
	      exStyle: {
	        display: 'block'
	      },
	      html: '<auto-complete :completion="completion"></auto-complete> \
	            \n<auto-complete :completion="completion" hint-content="case insensitive"></auto-complete>',
	
	      bodyContent: _property2.default.autocomplete
	    };
	  },
	  components: {
	    MenuItem: _materialVue.MenuItem,
	    AutoComplete: _materialVue.AutoComplete,
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    TableBody: _materialVue.TableBody,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  }
	};

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <page-header :title=\"title\" :description=\"description\"></page-header>\n  <example :code-html=\"html\">\n    <auto-complete slot=\"ex\" :style-obj=\"exStyle\" :completion=\"completion\"></auto-complete>\n    <auto-complete slot=\"ex\" :style-obj=\"exStyle\" :completion=\"completion\" hint-content=\"case insensitive\" :match-case=\"false\"></auto-complete>\n  </example>\n  <property>\n    <table-wrapper slot=\"pro\">\n      <table-header slot=\"header\" :headers=\"tableHeader\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent\" class=\"desc\"></table-body>\n    </table-wrapper>\n  </property>\n</div>\n";

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(206)
	__vue_script__ = __webpack_require__(208)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/DialogView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(209)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./DialogView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(207);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DialogView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DialogView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n", ""]);
	
	// exports


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Dialog',
	      description: 'Modal windows for dedicated user input.',
	      tableHeader: ['property', 'type', 'default', 'description'],
	      bodyContent: _property2.default.dialog,
	      html: '<dialog title="DIALOG"> \
	        \n  <div slot="dialogBody">This is a dialog.</div> \
	        \n  <base-button label="CANCEL" slot="dialogAction"></base-button> \
	        \n  <base-button label="SUBMIT" slot="dialogAction"></base-button> \
	        \n</dialog>',
	      open: false
	    };
	  },
	  components: {
	    BaseButton: _materialVue.BaseButton,
	    Dialog: _materialVue.Dialog,
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    TableBody: _materialVue.TableBody,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  },
	  methods: {
	    handleOpen: function handleOpen() {
	      this.open = !this.open;
	    }
	  }
	};

/***/ },
/* 209 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <page-header :title=\"title\" :description=\"description\"></page-header>\n  <example :code-html=\"html\">\n    <base-button @click=\"handleOpen\" label=\"DIALOG\" slot=\"ex\"></base-button>\n    <dialog :open.sync=\"open\" slot=\"ex\" title=\"DIALOG\">\n      <div slot=\"dialogBody\">This is a dialog.</div>\n      <base-button label=\"CANCEL\" slot=\"dialogAction\" @click=\"handleOpen\"></base-button>\n      <base-button label=\"SUBMIT\" slot=\"dialogAction\" @click=\"handleOpen\"></base-button>\n    </dialog>\n  </example>\n  <property>\n    <table-wrapper slot=\"pro\">\n      <table-header slot=\"header\" :headers=\"tableHeader\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent\" class=\"desc\"></table-body>\n    </table-wrapper>\n  </property>\n</div>\n";

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(211)
	__vue_script__ = __webpack_require__(213)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/components/DatePickerView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(214)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./DatePickerView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(212);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DatePickerView.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DatePickerView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".desc td {\n  min-width: 100px; }\n\n.desc td:nth-child(1) {\n  color: #3498db; }\n\n.desc td:nth-child(2) {\n  color: #4d9f89; }\n\n.desc td:nth-child(3) {\n  color: #858281; }\n\n.desc td:nth-child(4):first-letter {\n  text-transform: uppercase; }\n", ""]);
	
	// exports


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PageHeader = __webpack_require__(33);
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Example = __webpack_require__(38);
	
	var _Example2 = _interopRequireDefault(_Example);
	
	var _Property = __webpack_require__(43);
	
	var _Property2 = _interopRequireDefault(_Property);
	
	var _property = __webpack_require__(45);
	
	var _property2 = _interopRequireDefault(_property);
	
	var _materialVue = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      title: 'Date Picker',
	      description: 'Date Pickers are used to select a single date for an input.',
	      tableHeader: ['property', 'type', 'default', 'description'],
	      bodyContent: _property2.default.dialog,
	      html: '<date-picker></date-picker>'
	    };
	  },
	  components: {
	    PageHeader: _PageHeader2.default,
	    Example: _Example2.default,
	    Property: _Property2.default,
	    DatePicker: _materialVue.DatePicker,
	    TableBody: _materialVue.TableBody,
	    TableHeader: _materialVue.TableHeader,
	    TableWrapper: _materialVue.TableWrapper
	  },
	  beforeCompile: function beforeCompile() {},
	  methods: {}
	};

/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <page-header :title=\"title\" :description=\"description\"></page-header>\n  <example :code-html=\"html\">\n    <date-picker slot=\"ex\"></date-picker>\n  </example>\n  <property>\n    <table-wrapper slot=\"pro\">\n      <table-header slot=\"header\" :headers=\"tableHeader\"></table-header>\n      <table-body slot=\"body\" :body-content=\"bodyContent\" class=\"desc\"></table-body>\n    </table-wrapper>\n  </property>\n</div>\n";

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(216)
	__vue_script__ = __webpack_require__(218)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] examples/app.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(219)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(217);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(31)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".table {\n  width: 800px;\n}\n.fa-2x {\n  font-size: 1.5em;\n}\n.header {\n  background-color: #292b26;\n  color: white;\n}\n.router {\n  padding: 72px 36px 48px;\n}\n.view {\n  margin-left: 150px;\n}\n.item {\n  line-height: 48px;\n  height: 48px;\n}\n.anti-color {\n  color: white;\n}\n", ""]);
	
	// exports


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _materialVue = __webpack_require__(46);
	
	exports.default = {
	  components: {
	    MenuItem: _materialVue.MenuItem,
	    NavBar: _materialVue.NavBar,
	    IconButton: _materialVue.IconButton,
	    MenuBar: _materialVue.MenuBar
	  },
	  data: function data() {
	    return {
	      open: window.innerWidth < 750 ? false : true,
	      small: window.innerWidth < 750 ? true : false
	    };
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var throttle = function throttle(type, name, obj) {
	      obj = obj || window;
	      var running = false;
	      var func = function func() {
	        if (running) {
	          return;
	        }
	        running = true;
	        requestAnimationFrame(function () {
	          var event = void 0;
	          if (-1 != navigator.userAgent.indexOf("MSIE")) {
	            event = document.createEvent('CustomEvent');
	            event.initCustomEvent(name, true, true, {});
	          } else {
	            event = new CustomEvent(name);
	          }
	          obj.dispatchEvent(event);
	          running = false;
	        });
	      };
	      obj.addEventListener(type, func);
	    };
	    throttle("resize", "optimizedResize");
	    window.addEventListener("optimizedResize", function () {
	      var width = window.innerWidth;
	      var size = 750;
	      if (width < size) {
	        _this.open = false;
	        _this.small = true;
	      } else {
	        _this.open = true;
	        _this.small = false;
	      }
	    });
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.open = true;
	    },
	    hideMenu: function hideMenu() {
	      this.open = false;
	    },
	    linkTo: function linkTo(path) {
	      if (!path) {
	        this.$route.router.go('/');
	      } else {
	        this.$route.router.go(path);
	      }
	    }
	  }
	};

/***/ },
/* 219 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"test\">\n  <nav-bar>\n    <icon-button icon-class=\"fa fa-bars fa-2x fa-hover anti-color\" slot=\"leftNav\" @click=\"handleClick\"></icon-button>\n    <span slot=\"title\" class=\"\">title</span>\n    <icon-button icon-class=\"fa fa-github fa-2x anti-color\" slot=\"rightNav\" link=\"https://github.com/loujiayu/vue-material-design\"></icon-button>\n  </nav-bar>\n  <menu-bar :open.sync=\"open\" v-ref:sidebar :docked=\"!small\">\n    <menu-item class=\"header item\"\n               slot=\"menuList\"\n               label=\"HOME\"\n               :icon-on-click=\"hideMenu\"\n               :label-on-click=\"linkTo\"\n               icon-class=\"fa fa-caret-left fa-2x\"\n               :ripple=\"false\">\n    </menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Auto Complete\" @click=\"linkTo('/components/autocomplete')\"></menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Button\" @click=\"linkTo('/components/button')\"></menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Check Box\" @click=\"linkTo('/components/checkbox')\"></menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Dialog\" @click=\"linkTo('/components/dialog')\"></menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Date Picker\" @click=\"linkTo('/components/datepicker')\"></menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Icon Button\" @click=\"linkTo('/components/iconbutton')\"></menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Icon Menu\" @click=\"linkTo('/components/iconmenu')\"></menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Down Menu\" @click=\"linkTo('/components/downmenu')\"></menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Menu Bar\" @click=\"linkTo('/components/menubar')\"></menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Radio\" @click=\"linkTo('/components/radio')\"></menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Snack Bar\" @click=\"linkTo('/components/snackbar')\"></menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Table\" @click=\"linkTo('/components/table')\"></menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Text Field\" @click=\"linkTo('/components/textfield')\"></menu-item>\n    <menu-item class=\"item\" slot=\"menuList\" label=\"Toggle\" @click=\"linkTo('/components/toggle')\"></menu-item>\n  </menu-bar>\n  <router-view v-ref:mainview class=\"router\" :class=\"open&&!small ? 'view' : 'resView'\" keep-alive></router-view>\n</div>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
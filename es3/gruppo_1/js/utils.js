
var wip = window.wip || {};

wip.utils = (function($,mzr,doc,win){

	/* ----------------- private vars ---------------*/


	/* ----------------- private methods ---------------*/

	function _removeButton(area,container,btn){
		console.log('removeButton: area: "'+area+'" - container: "'+container+'"');
		$(area).on('click',container+' '+btn,function(){
			$(this).parents(container).remove();
			return false;			
		});
	} // _removeButton();

	function _notification(autoRemoveOn){
		if(autoRemoveOn==null)autoRemoveOn=false;
		console.log('%c wip: _notification: autoRemoveOn: '+autoRemoveOn,"color: blue");
		if(autoRemoveOn==false){
			_removeButton('body','.notification',".close");
		}else{	
			if ($('.notification.auto-remove').length > 0){
				setTimeout(function(){
					$('.notification.auto-remove .close').trigger('click')
				},2000);
			}
		}
	} // _notification();

	function _browserVendor(){
		//http://lea.verou.me/2009/02/find-the-vendor-prefix-of-the-current-browser/
		var someScript = document.getElementsByTagName('script')[0];
		var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/;

		for(var prop in someScript.style){

			if(regex.test(prop)){
				// test is faster than match, so it's better to perform
				// that on the lot and match only when necessary
				return prop.match(regex)[0];
			}
		}
		// Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
		// However (prop in style) returns the correct value, so we'll have to test for
		// the precence of a specific property
		if('WebkitOpacity' in someScript.style) return 'Webkit';
		if('KhtmlOpacity' in someScript.style) return 'Khtml';

		return 'unknow';

	};	//	_browserVendor();

	function _setBrowserVendor(){
		$('html').addClass(_browserVendor()+'vendor-');
	};	//	_setBrowserVendor();

	function _mobileDevice(){
		return !!(navigator.userAgent.toLowerCase().match(/(iPhone|iPod|blackberry|android 0.5|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i));
	};	//	_mobileDevice();
	
	function _randomNum(range) {
		if (range==null)console.error("need var range");
		var number = 1 + Math.floor(Math.random() * range);
		return number;
	}	// _randomNum(range)

	function _tabber(ul,wrapperClass){
		if (ul==null)console.error("need var range");
		if (wrapperClass==null)console.error("need var range");
		console.log('%c wip: _tabber: nav ul: '+ul+' - wrapperClass: '+wrapperClass,"color: blue");
		$(wrapperClass+':not(:eq(0))').addClass('hidden');
		$(ul + '> li:not(.other):eq(0)').addClass('active');
		$(wrapperClass).parents().removeClass('js-loading');

		$(ul + '> li:not(.disable)').bind().click(function(){
			var btn = $(this);
			$(wrapperClass).parent().addClass('js-loading');
			var indice = $(ul + '> li').index(btn);
			console.log(btn,indice)
			$(ul + '> li').removeClass('active');
			btn.addClass('active');
			$(wrapperClass).addClass('hidden');
			$(wrapperClass+':eq('+indice+')').removeClass('hidden');
			$(wrapperClass).parent().removeClass('js-loading');
			//$(window).trigger('resize');
			if($(ul + ' a').length > 0)return false;
		}); 
	}	// _tabber(ul, wrapperClass);

	function _keyboardShortcuts(){
		var keyCTRL = 17;
		// setup the keyboard shortcuts
		//console.log('keyboardShortcuts: listner ON');
		$(document).on('keyup',function (e) {
			var tag = e.target.tagName.toLowerCase();
			//console.log('%c wip: _keyboardShortcuts: e.keyCode',e.keyCode,"color: blue");
			if(tag != 'input' && tag != 'textarea'  && tag != 'select'){

				switch(e.keyCode) {
					case 70 :
						// F
						// Make the body toggle full screen.
						var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);
						var el = document.documentElement; // Make the body go full screen.
						//	window.console.firebug
						if (isInFullScreen) {
							_cancelFullScreen();
						} else {
							_requestFullScreen(el);
						}
						break;
					default:
						break;
				}
			}
		});
	}	// _keyboardShortcuts();

	function _requestFullScreen(el){
		console.log('%c wip:  _requestFullScreen',"color: blue");
		// Supports most browsers and their versions.
		//https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode?redirectlocale=en-US&redirectslug=Web%2FGuide%2FDOM%2FUsing_full_screen_mode
		var rfs = // for newer Webkit and Firefox
		el.requestFullScreen
		|| el.webkitRequestFullScreen
		|| el.mozRequestFullScreen
		|| el.msRequestFullScreen
		;

		if(typeof rfs!="undefined" && rfs){
			rfs.call(el);
		} else if(typeof window.ActiveXObject!="undefined"){
			// for Internet Explorer
			var wscript = new ActiveXObject("WScript.Shell");
			if (wscript!=null) {
				wscript.SendKeys("{F11}");
			}
		}
	}	// _requestFullScreen();

	function _cancelFullScreen(){
		console.log('%c wip:  _cancelFullScreen',"color: blue");
		// Exit full screen.
		var el = document
			,rfs = 	// for newer Webkit and Firefox
			el.exitFullscreen
			|| el.msExitFullscreen
			|| el.mozCancelFullScreen
			|| el.webkitExitFullscreen
			;
			if(typeof rfs!="undefined" && rfs){
				rfs.call(el);
			} else if(typeof window.ActiveXObject!="undefined"){
			// for Internet Explorer
			var wscript = new ActiveXObject("WScript.Shell");
			if (wscript!=null) {
				wscript.SendKeys("{F11}");
			}
		}
	}	// _requestFullScreen(element);

	function _extendjQuery(){
		$.fn.extend({
			scrollAt:function(options) {
				var self = this;
				if ($(self).length > 0) {
					var defaults = {
						gap		: 	0		// Default: 5000	--> Set gap from element offset top
						,delay	: 100		// Default: 5000	--> Set time value (milliseconds)
						,time	: 500		// Default: 5000	--> Set time value (milliseconds)
						//callbacks
						,onInit 	: null	// Callback function: Before scroll initialize
						,onEnd      : null  	// Callback function: Once the windows scroll reaches the position
					};

					//Set number offset position to scroll to
					var options = $.extend(true,{},defaults, options);
					var fromTop = options.gap + $(self).offset().top;
					if(options.onInit!=null && typeof(options.onInit)=='function')options.onInit(self);
					$("html, body").delay(options.delay).animate({scrollTop:fromTop},options.time,function(){if(options.onEnd!=null && typeof(options.onEnd)=='function')options.onEnd(self)});						return true;
				} else {
					return false;
				}
			}
		});
	}	// _extendjQuery();

	/* ----------------- public methods ---------------*/

	return {

		removeButton : function(area,container,btn){
			return _removeButton(area,container,btn);
		}

		,notification : function(autoRemoveOn){
			return _notification(autoRemoveOn);
		}
		
		,browserVendor : function(){
			return _browserVendor();
		}
		
		,setBrowserVendor : function(){
			return _setBrowserVendor();
		}

		,mobileDevice : function(){
			return _mobileDevice();
		}
		
		,randomNum : function(range){
			return _randomNum(range);
		}

		,keyboardShortcuts : function(){
			return _keyboardShortcuts();
		}

		,tabber : function(ul,wrapperClass){
			return _tabber(ul,wrapperClass);
		}

		,extendjQuery : function(){
			return _extendjQuery();
		}
	}
})(jQuery,Modernizr, document, window);
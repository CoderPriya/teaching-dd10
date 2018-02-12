/* ----------- COMMON UTILITIES -----------------*/

var wip = window.wip || {};

wip.container = (function($,mzr,doc,win) {

	/* ----------------- private vars ------------------*/
	
	var scena = 0;
	var slide = 0;
	var clicking = false;
	var isolaIndex = 0;
	var faseClick = ''; 
	var hash = "";

	var distBoeX = 0;

	/* ----------------- private methods ---------------*/

	function _init(){
		$('html').removeClass('no-document-ready').addClass('document-ready');
		//_switchPage();
		$('body').imagesLoaded( function() {
			
			// IMMAGINI CARICATE: LANCIO FUNZIONI GENERALI
			_initNav();
			_checkNavItems();
			_distanzaBoe();
			_initTestiBoe();
			_generaOnde();
			
			//andiamo
			_quitPreloader();
			//lancio scene con controllo # x debug
			_truschino();


			//RICALCOLO SE RIDIMENSIONO/RUOTO
			$(window).on('resizestop', function(){
				console.log('changed screen view');
				if($('.boa')){
					_distanzaBoe();
				}if(isolaIndex > 0){
					_infoboxPos();
				}
			});
		});
	}


	//CHIUDO LOADER
	function _quitPreloader(){
		var tl = new TimelineMax({onComplete:function(){
			$('#loader').remove();
		}});
		//tl.to($('#loader p'),1,{delay:0.6,css:{top:-100},ease:Expo.easeIn})
		tl.to($('#loader'),1,{delay:1, css:{opacity:0},ease:Expo.easeIn});
	}

	function _checkNavItems(){
		if(scena < 4){
			$('#main_nav #ff').css('display','inline-block');
			TweenMax.to($('#main_nav #ff'),0.4, {delay:0.8, css:{opacity:1}});
		}else{
			TweenMax.to($('#main_nav #ff'),0.4, {css:{opacity:0},onComplete:function(){
				$('#main_nav #ff').css('display','none');
			}});
		}
		if(scena == 4){
			$('#main_nav #suggestions').css('display','inline-block');
			TweenMax.to($('#main_nav #suggestions'),0.4, {delay:0.8, css:{opacity:1}});
		}else{
			TweenMax.to($('#main_nav #suggestions'),0.4, {css:{opacity:0},onComplete:function(){
				$('#main_nav #suggestions').css('display','none');
			}});
		}
		if(scena > 4 && scena < 26 && scena != 22 && scena != 24){
			$('#main_nav .ascheda').css('display','inline-block');
			TweenMax.to($('#main_nav .ascheda'),0.4, {delay:0.8, css:{opacity:1}});
		}else{
			TweenMax.to($('#main_nav .ascheda'),0.4, {css:{opacity:0},onComplete:function(){
				$('#main_nav .ascheda').css('display','none');
			}});
		}
	}

	//ATTIVO NAVIGAZIONE
	function _initNav(){
		//MENU LINK
		$('#trigger_menu').click(function(){
			$('#force_nav').toggleClass('aperto');
		});
		$('#force_nav').click(function(){
			$('#force_nav').toggleClass('aperto');
		});

		/////////////////////////////////////////
		$('#ff').click(function(){
			if(clicking == true){
				clicking = false;
				scena+=1;
				_switchScena();
			}
		});
		//
		$(document).on('keyup',function (e) {
			switch(e.keyCode) {
			case 40:
				if(clicking == true){
					clicking = false;
					scena+=1;
					_switchScena();
				}
			break;
			}
		});
		//
		$(window).on("mousewheel", function(e) {
			if(e.deltaY < 0){
				if(clicking == true){
					clicking = false;
					scena+=1;
					_switchScena();
				}
			}
		});
		//
		$("body").swipe( {
			swipeUp:function() {
				if(clicking == true){
					clicking = false;
					scena+=1;
					_switchScena();
				}
			}
		});
	}



	//CALCOLI VARI
	function _distanzaBoe(){
		distBoeX = Math.round($('#tutteboe').offset().left);
	}

	function _initTestiBoe(){
		TweenMax.set($('.testo'),{css:{opacity:0}});
	} 

	//MOVIMENTO DEFAULT PASSAGGIO SLIDES
	function _switchSlide(){
		if(slide > 0){
			for(var i = 0; i<slide; i++){
				TweenMax.set($('#slide_'+i),{css:{top:'-100%'}});	
			}
		}
		if(slide>3){
			$('#fake_slide_1').hide();
		}

		TweenMax.to($('#slide_'+slide),1.6,{css:{top:'-100%'},ease:Expo.easeOut});
		TweenMax.to($('#slide_'+(slide+1)),1.6,{delay:0.2,css:{top:'0%'},ease:Expo.easeOut, onComplete: function(){
			slide +=1;
			console.log('slide: '+slide);
		}});
	}


	function _switchScena(){
		console.log("scena: "+scena);

		_checkNavItems();

		switch(scena) {
			case 0:
				_initShow();
			break;
			case 1: //boe 1
				_switchSlide();
				_initBoe_1();
			break;
			case 2 : //boe 2
				_resetBoe(_initBoe_2);
			break;
			case 3 : //boe 3
				_resetBoe(_initBoe_3);
			break;
			case 4 : //fine boe, slide testo pulito
				_resetBoe(_switchSlide);
				_initCleanText_1();
			break;
			case 5 : //inizio isole!
				_switchSlide();
				_initIsole();
			break;
			case 6 :
				_zoomin_1();
			break;
			case 7:
			case 9:
			case 11:
			case 13:
			case 15:
			case 17:
				_dividiIsola();
			break;
			case 8: 
			case 10:
			case 12:
			case 14:
			case 16:
				_passaIsola();
			break;
			case 18: 
				_zoomOut_1();
			break;
			case 19: 
				_zoomOut_1a();
			break;
			case 20: 
				_zoomOut_1b();
			break;
			case 21: 
				_zoomOut_1c();
			break;
			case 22:
				_fakeSlide1();
			break;
			case 23:
				_isoleAerei();
			break;
			case 24:
				_fakeSlide2();
			break;
			case 25:
				_setIsolissima();
			break;
			case 26:
				_switchSlide();
				_setConclusioni();
			break;
			case 27:
				_switchSlide();
				_setFooter();
			break;
		}
	}
	/************ TRUSCHINO - controllo con # ********************/

	function _truschino(){
		if(window.location.hash) {
			hash = window.location.hash.substring(1);
			console.log("hash: "+hash);
		}
		switch(hash) {
			case 'inizio':
			break;
			case 'fineboe':
				slide = 2;
				scena = 5;
				_switchScena();
			break;
			case 'clickisole':
				slide = 2;
				scena = 18;
				_switchSlide();
				_switchScena();
			break;

			case 'step1' :
				slide = 1;
				scena = 4;
				_switchScena();
			break;
			case 'step2' :
				slide = 2;
				scena = 22;
				_switchSlide();
				_switchScena();
			break;
			case 'step3' :
				slide = 2;
				scena = 24;
				_switchSlide();
				_switchScena();
			break;
			case 'step4' :
				slide = 3;
				scena = 26;
				_switchSlide();
				_switchScena();
			break;
			
			default:
				scena = 0;
				_switchScena();
		}
	}


	/**************** INIZIO CON TITOLO **************************/

	function _initShow(){
		clicking = true;
	}

	function _generaOnde(){
		var onda1 = setInterval( function(){ _ondaRandom(1) }, _getRandomInt(2, 10)*500);
		var onda2 = setInterval( function(){ _ondaRandom(2) }, _getRandomInt(2, 10)*500);
		var onda3 = setInterval( function(){ _ondaRandom(3) }, _getRandomInt(2, 10)*500);
		var onda3 = setInterval( function(){ _ondaRandom(4) }, _getRandomInt(2, 20)*500);
		var onda3 = setInterval( function(){ _ondaRandom(5) }, _getRandomInt(2, 30)*500);
	}
	
	function _ondaRandom(n){
		$('#maretta #o'+n).css({'top': _getRandomInt(15, 85)+'%' , 'left': _getRandomInt(15, 85)+'%'});
	}
	function _getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	/**************** BOE E NAVI *********************************/

	function _resetBoe(callback){
		var tl = new TimelineMax({onComplete:callback});
		tl.staggerTo(".boa", 0.6, {css:{opacity: 1}})
		.staggerTo(".boa", 0.6, {scaleX: 1, scaleY: 1})
		.staggerTo(".boa .sopra", 0.6, {scaleX: 1, scaleY: 1});
	}

	/**** BOE 1 ********/
	function _initBoe_1(){
		var tl = new TimelineMax({onComplete:_naveScena_1});
		var tl1 = new TimelineMax();
		tl.staggerTo(".d1 .sopra",0.6, {scaleX: 0.1, scaleY: 0.1},0.2);
		tl1.staggerTo(".d1",1.4, {scaleX: 2, scaleY: 2}, 0.2)
		.staggerTo(".d1", 1, {css:{opacity: 0}});

		TweenMax.to($('#testo1'),1,{delay: 2, css:{opacity:1},ease:Expo.easeOut});
	}

	function _naveScena_1(){
		var tl = new TimelineMax({onComplete: function(){
			clicking = true;
		}});

		tl.set("#nave1 .fronte", {css: {opacity:0}})
		.set("#nave1", {css:{left: (-distBoeX -150)}})
		.to("#nave1",3, {css:{left: 80}, ease:Linear.easeNone})
		.set("#nave1 .fronte", {css: {opacity:1}})
		.set("#nave1 .fianco", {css: {opacity:0}})
		.to("#nave1",1, {css:{top: 280}, ease:Linear.easeNone})
		.set("#nave1 .fianco", {css: {opacity:1}})
		.set("#nave1 .fronte", {css: {opacity:0}})
		.to("#nave1",0.6, {css:{left: (200)}, ease:Linear.easeNone})
		.set("#nave1 .fronte", {css: {opacity:1}})
		.set("#nave1 .fianco", {css: {opacity:0}})
		.set("#nave1", {rotation: 180})
		.to("#nave1",0.6, {css:{top: 150}, ease:Linear.easeNone})
		.set("#nave1 .fronte", {css: {opacity:0}})
		.set("#nave1 .fianco", {css: {opacity:1}})
		.set("#nave1", {rotation: 0})
		.to("#nave1",1.4, {css:{left: (470)}, ease:Linear.easeNone});
	}

	/**** BOE 2 ********/
	function _initBoe_2(){
		var tl = new TimelineMax({onComplete:_naveScena_2});
		var tl1 = new TimelineMax();
		tl.staggerTo(".d2 .sopra",0.6, {scaleX: 0.1, scaleY: 0.1},0.2);
		tl1.staggerTo(".d2",1.4, {scaleX: 2, scaleY: 2}, 0.2)
		.staggerTo(".d2", 1, {css:{opacity: 0}});

		TweenMax.to($('#testo1'),1,{css:{opacity:0},ease:Expo.easeOut});
		TweenMax.to($('#testo2'),1,{delay: 4, css:{opacity:1},ease:Expo.easeOut});
	}

	function _naveScena_2(){
		var tl = new TimelineMax({onComplete: function(){
			clicking = true;
		}});
		tl.set("#nave2 .fronte", {css: {opacity:0}})
		.set("#nave2", {css:{left: (-distBoeX -150)}})
		.to("#nave2",2.5, {css:{left: 20}, ease:Linear.easeNone})
		.set("#nave2 .fronte", {css: {opacity:1}})
		.set("#nave2 .fianco", {css: {opacity:0}})
		.set("#nave2", {rotation: 180})
		.to("#nave2",1, {css:{top: 100}, ease:Linear.easeNone})
		.set("#nave2 .fronte", {css: {opacity:0}})
		.set("#nave2 .fianco", {css: {opacity:1}})
		.set("#nave2", {rotation: 0})
		.to("#nave2",1, {css:{left: 200}, ease:Linear.easeNone})
		.set("#nave2 .fronte", {css: {opacity:1}})
		.set("#nave2 .fianco", {css: {opacity:0}})
		.set("#nave2", {rotation: 180})
		.to("#nave2",0.5, {css:{top: 40}, ease:Linear.easeNone})
		.set("#nave2 .fronte", {css: {opacity:0}})
		.set("#nave2 .fianco", {css: {opacity:1}})
		.set("#nave2", {rotation: 0})
		.to("#nave2",1.6, {css:{left: (470)}, ease:Linear.easeNone});
	}

	/**** BOE 3 ********/
	function _initBoe_3(){
		var tl = new TimelineMax({onComplete:_naveScena_3});
		var tl1 = new TimelineMax();
		tl.staggerTo(".d3 .sopra",0.6, {scaleX: 0.1, scaleY: 0.1},0.2);
		tl1.staggerTo(".d3",1.4, {scaleX: 2, scaleY: 2}, 0.2)
		.staggerTo(".d3", 1, {css:{opacity: 0}});

		TweenMax.to($('#testo2'),1,{css:{opacity:0},ease:Expo.easeOut});
		TweenMax.to($('#testo3'),1,{delay: 4, css:{opacity:1},ease:Expo.easeOut});
	}

	function _naveScena_3(){
		var tl = new TimelineMax({onComplete: function(){
			clicking = true;
		}});
		tl.set("#nave3 .fronte", {css: {opacity:0}})
		.set("#nave3", {css:{left: (-distBoeX -150)}})
		.to("#nave3",3, {css:{left: 150}, ease:Linear.easeNone})
		.set("#nave3 .fronte", {css: {opacity:1}})
		.set("#nave3 .fianco", {css: {opacity:0}})
		.set("#nave3", {rotation: 180})
		.to("#nave3",0.6, {css:{top: 30}, ease:Linear.easeNone})
		.set("#nave3 .fronte", {css: {opacity:0}})
		.set("#nave3 .fianco", {css: {opacity:1}})
		.set("#nave3", {rotation: 0})
		.to("#nave3",0.6, {css:{left: 270}, ease:Linear.easeNone})
		.set("#nave3 .fronte", {css: {opacity:1}})
		.set("#nave3 .fianco", {css: {opacity:0}})
		.to("#nave3",1.2, {css:{top: 270}, ease:Linear.easeNone})
		.set("#nave3 .fronte", {css: {opacity:0}})
		.set("#nave3 .fianco", {css: {opacity:1}})
		.to("#nave3",1, {css:{left: (470)}, ease:Linear.easeNone});

	}
	/******************************************************************/
	/**************** FINE BOE E NAVI *********************************/
	/******************************************************************/

	/******************* CLEAN TEXT 1 *********************************/

		function _initCleanText_1(){
			clicking = true;
		}

	/******************* Isole *********************************/
		
		//FUNZIONI INIZIALI

		_setSchede();

		function _setSchede(){
			$('.ascheda').click(function(){
				$('#approfondimenti').addClass($(this).data('scheda'));
			});

			$('.scheda .chiudi').click(function(){
				$('#approfondimenti').removeClass();
			})
		}

		function _changeSchedaData(n){
			$('.data').addClass('hidden');
			$('#data'+n).removeClass('hidden');
		}

		function _initIsole(){
			$('.isola').each(function(){
				$(this).addClass('vicina');
			})
			TweenMax.set($('.arcipelago'),{scaleX: 0.6, scaleY: 0.6, transformOrigin:"center top"});
			clicking = true;
		}

		function _zoomin_1(){

			isolaIndex = 1;

			var tl = new TimelineMax({onComplete: function(){
				_changeSchedaData(2);
				_attivaIsola();
			}});

			tl.to($('.arcipelago'), 1.6, {scaleX: 1, scaleY: 1, transformOrigin:"center top",ease:Expo.easeOut})
			.to($('.arcipelago'), 2, {css:{top:'40%'},ease:Expo.easeOut}, '-=1.6');

		}

		// FUNZIONI PER 6 PASSAGGI
		function _attivaIsola(){
			$('.isola').each(function(){
				if($(this).is('[id^="isola'+isolaIndex+'"]')){
					$(this).addClass('attiva').removeClass('spenta');
				}else{
					$(this).removeClass('attiva').addClass('spenta');
				}
			});
			$('.testo-isola#t'+isolaIndex).addClass('presente');

			clicking = true;
		}

		function _dividiIsola(){
			$('.testo-isola.presente').addClass('svolto');
			$('.isola.attiva').removeClass('vicina');
			
			//calcolo la posizione dei box
			_infoboxPos();
			//appaiono i dettagli tratteggiati
			var tl = new TimelineMax({delay:2, onComplete: function(){
				clicking = true;
			}});

			tl.to($('.line-wrap#lw'+isolaIndex),1,{css:{opacity:1}, ease:Expo.easeOut})
			.to($('.info-wrap#iw'+isolaIndex),1,{css:{opacity:1}, ease:Expo.easeOut},'-=1');
		}

		function _passaIsola(){
			//scompaiono i dettagli tratteggiati
			$('.testo-isola#t'+isolaIndex).removeClass('presente svolto');
			var tl = new TimelineMax({onComplete: function(){
				isolaIndex += 1;
				TweenMax.to($('.arcipelago'), 1, {css:{top:'-=180px'},ease:Expo.easeOut, onComplete:_attivaIsola});
			}});
			tl.to($('.line-wrap#lw'+isolaIndex),1,{css:{opacity:0}, ease:Expo.easeOut})
			.to($('.info-wrap#iw'+isolaIndex),1,{css:{opacity:0}, ease:Expo.easeOut},'-=1');
		}

		//posizionamento linee e box
		function _infoboxPos(){

			var _infobox = $('.info-wrap#iw'+isolaIndex);

			var _linee = $('.line-wrap#lw'+isolaIndex);
			var _arcTop = Math.round($('.arcipelago').offset().top);
			var _arcleft = Math.round($('.arcipelago').offset().left);
			var _boxH = _infobox.outerHeight(true);

			var _boxW;
			var _boxLeft;

			_linee.css('height', ($(window).outerHeight() - _arcTop - _boxH - _linee.position().top) + 'px');

			if($(window).outerWidth() < 820){
				_boxW = $(window).outerWidth();
				_boxLeft = _arcleft;
			}else{
				_boxW = 820;
				_boxLeft = 90;
			}

			_infobox.css({
				'top': ($(window).outerHeight()-_arcTop-_boxH)+'px', 
				'left': '-'+_boxLeft+'px',
				'width': _boxW+'px'
			});
		}

		//primo zoomout
		function _zoomOut_1(){

			$('.testo-isola').removeClass('presente svolto');
			$('.isola').each(function(){
				//riaccendo le isole
				$(this).removeClass('spenta');
			});
			$('.arcipelago').addClass('infilato');

			var tl = new TimelineMax({onComplete: function(){
				$('.testo-isola#t7').addClass('presente svolto');
				console.log('mostro le linee che congiungono le isole');
				$('#distanze').addClass('visibile');

				clicking = true;
			}});

			tl.to($('.line-wrap#lw'+isolaIndex),1,{css:{opacity:0}, ease:Expo.easeOut})
			.to($('.info-wrap#iw'+isolaIndex),1,{css:{opacity:0}, ease:Expo.easeOut},'-=1')
			.to($('.arcipelago'), 1.6, {scaleX: 0.6, scaleY: 0.6, transformOrigin:"center top",ease:Expo.easeOut})
			.to($('.arcipelago'), 2, {css:{top:160},ease:Expo.easeOut}, '-=1.6');
		}

		//PASSAGGI INTERMEDI

		function _zoomOut_1a(){
			//mostro prime 6 e testo

			for (var i = 1; i <= 3; i++) {
				console.log($('#isola'+i+'_sx'));
				$('#isola'+i+'_sx').removeClass('spenta');
				$('#isola'+i+'_dx').removeClass('spenta');
			};
			for (var j = 4; j <= 6; j++) {
				$('#isola'+j+'_sx').addClass('spenta');
				$('#isola'+j+'_dx').addClass('spenta');
			};

			//mostro testo 1
			TweenMax.to($('.info-special.sx'),0.5, {css:{opacity:1}, ease:Expo.easeOut});
			TweenMax.to($('.info-special.dx'),0.5, {css:{opacity:0}, ease:Expo.easeOut});

			clicking = true;
		}
		function _zoomOut_1b(){
			//mostro altre 6 e testo
			for (var i = 1; i <= 3; i++) {
				$('#isola'+i+'_sx').addClass('spenta');
				$('#isola'+i+'_dx').addClass('spenta');
			};
			for (var j = 4; j <= 6; j++) {
				$('#isola'+j+'_sx').removeClass('spenta');
				$('#isola'+j+'_dx').removeClass('spenta');
			};

			//mostro testo 2
			TweenMax.to($('.info-special.sx'),0.5, {css:{opacity:0}, ease:Expo.easeOut});
			TweenMax.to($('.info-special.dx'),0.5, {css:{opacity:1}, ease:Expo.easeOut});

			clicking = true;
			
		}
		function _zoomOut_1c(){

			$('.isola').removeClass('spenta');
			$('#distanze').removeClass('visibile');

			TweenMax.to($('.info-special.sx'),0.5, {css:{opacity:0}, ease:Expo.easeOut});
			TweenMax.to($('.info-special.dx'),0.5, {css:{opacity:0}, ease:Expo.easeOut});

			faseClick = 'a';
			_clickPerInfo();
		}

		/**/


		function _clickPerInfo(){
			
			var _tofill = [];

			var _tl;

			_tofill.length = 0;

			$('.isola').click(function(){

				if(faseClick != ''){
					
					isolaIndex = $(this).data('index');
					_infoboxPos();

					TweenMax.to($('.marone'),1,{css:{opacity:0}});

					$('.isola').each(function(){
						if($(this).is('[id^="isola'+isolaIndex+'"]')){
							$(this).addClass('attiva').removeClass('spenta');
						}else{
							$(this).removeClass('attiva').addClass('spenta');
						}
					});
					if(faseClick == 'b'){
						TweenMax.to($('.pacco'),0.4,{css:{'opacity':0}, onComplete:function(){
							TweenMax.to($('#pack'+isolaIndex),0.4,{css:{'opacity':1}});
						}});
					}

					_tl = new TimelineMax

					_tl.to($('.info-wrap.outer'),0.2, {css:{'opacity':0},onComplete:function(){
						$('.info-wrap.outer').css('display','none');
					}})
					.set($('.info-wrap#iw'+$(this).data('index')+faseClick), {css:{'display':'block','opacity':0}})									
					.to($('.info-wrap#iw'+$(this).data('index')+faseClick),1, {css:{'opacity':1}});

					console.log('coppia di isole: '+$(this).data('index'));

					/*
					//non me ne frega un cazzo di cliccarle tutte
					if(_tofill.indexOf($(this).data('index')) == -1) {
						_tofill.push($(this).data('index'));
					}
					if(_tofill.length == 6){
						console.log('fine isole');

						//svuoto array:
						_tofill.length = 0;
						clicking = true;

						faseClick = '';
					}
					*/
					clicking = true;
				}
			});
		}

		function _fakeSlide1(){

			//approfitto del passaggio per far tornare l'arcipelago allo stato iniziale
			TweenMax.set($('.arcipelago'),{scaleX: 0.6, scaleY: 0.6, transformOrigin:"center top"});

			faseClick = '';

			$('.testo-isola#t7').removeClass('presente svolto');

			$('.marone').attr('style','');

			$('.isola').each(function(){
				$(this).removeClass('attiva spenta');
			});

			TweenMax.to($('.info-wrap.outer'),0.2, {css:{'opacity':0},onComplete:function(){
				$('.info-wrap.outer').css('display','none');
			}})


			//fine sistemazione
			
			var tl = new TimelineMax({onComplete: function(){
				clicking = true;
			}});

			tl.to($('.arcipelago'), 2.6, {css:{top:-1100},ease:Expo.easeOut})
			.to($('#fake_slide_1'),1.6,{css:{top:'0%'},ease:Expo.easeOut}, "-=2");
		}

		function _isoleAerei(){
			var tl = new TimelineMax({onComplete: function(){

				_changeSchedaData(3);

				$('.testo-isola#t8').addClass('presente svolto');
				
				$('.aereo-wrap').css('display','block');
				$('.pacco').css('display','block');
				console.log('partono gli aerei');

				for(var i=1; i < 7; i++){
					var tl = new TimelineMax({delay:0.2*i});
					tl.to($("#air"+i), 0.6, {css:{'opacity': '1'}})
					.to($("#air"+i), 1.2, {css:{'paddingBottom':'80px', 'top':'-=80', 'right':'+=120'}, ease:Linear.easeNone})
					.to($("#air"+i), 5.4, {css:{ 'right':'+=2000'}, ease:Linear.easeNone})
					.to($("#air"+i), 1, {css:{ 'opacity':0}})
				}

				//faccio partire il fae in dei pacchi in parallelo così li controllo meglio:
				TweenMax.to($("#pack1"), 0.6, {delay:2.4, css:{'opacity': '1'}});
				TweenMax.to($("#pack2"), 0.6, {delay:2.6, css:{'opacity': '1'}});
				TweenMax.to($("#pack3"), 0.6, {delay:3, css:{'opacity': '1'}});
				TweenMax.to($("#pack4"), 0.6, {delay:3.4, css:{'opacity': '1'}});
				TweenMax.to($("#pack5"), 0.6, {delay:4, css:{'opacity': '1'}});
				TweenMax.to($("#pack6"), 0.6, {delay:5, css:{'opacity': '1'}, onComplete: function(){
					console.log('pacchi consegnati');
					faseClick = 'b';
					_clickPerInfo();
				}});

			}});

			tl.to($('#fake_slide_1'),1.6,{css:{top:'100%'},ease:Expo.easeOut})
			.to($('.arcipelago'), 1.6, {css:{top:160},ease:Expo.easeOut}, "-=1");
		}

		/**********************/

		function _fakeSlide2(){

			//approfitto del passaggio per far tornare l'arcipelago allo stato iniziale
			faseClick = '';

			$('.testo-isola#t8').removeClass('presente svolto');

			$('.marone').css('display','none');
			$('.pacco').css('display','none');

			$('.isola').each(function(){
				$(this).removeClass('attiva spenta');
			});

			TweenMax.to($('.info-wrap.outer'),0.2, {css:{'opacity':0},onComplete:function(){
				$('.info-wrap.outer').css('display','none');
			}})

			//fine sistemazione
			
			var tl = new TimelineMax({onComplete: function(){
				clicking = true;
			}});

			tl.to($('.arcipelago'), 2.6, {css:{top:-1100},ease:Expo.easeOut})
			.to($('#fake_slide_2'),1.6,{css:{top:'0%'},ease:Expo.easeOut}, "-=2");
		}

		function _setIsolissima(){

			var tl = new TimelineMax({onComplete: function(){	

				_changeSchedaData(4);

				$('.isola.sx').addClass('sparisci');
				$('.isola.dx').addClass('composta');
				TweenMax.to($('.arcipelago'), 1.6, {delay: 1.8, scaleX: 1, scaleY: 1, transformOrigin:"center top",ease:Expo.easeOut, onComplete:_unifyIsolissima});
			}});


			tl.to($('#fake_slide_2'),1.6,{css:{top:'100%'},ease:Expo.easeOut})
			.to($('.arcipelago'), 1.6, {css:{top:160},ease:Expo.easeOut}, "-=1");
		}

		function _unifyIsolissima(){
			$('.testo-isola#t9').addClass('presente');

			var tl = new TimelineMax({onComplete: function(){
				_actionIsolissima();
			}});

			tl.set($('#isolissima'), {css:{'opacity':0, 'display':'block'}})
			.to($('#isolissima'),1,{css:{'opacity':1}})
			.to($('.isola.dx'),1,{css:{'opacity':0}})
		}

		function _actionIsolissima(){
			
			$('.testo-isola#t9').addClass('svolto');
			
			TweenMax.to($('.grigio'),1,{css:{'opacity':1}, onComplete: function(){
				$('.isola.dx').hide();
				$('#isolissima').css('z-index',5);
				$('.grigio').click(function(){
					$('.unito').removeClass('attivo');
					$('#lw'+$(this).data('index')+'tot').addClass('attivo');
					$('#iw'+$(this).data('index')+'tot').addClass('attivo');
				});
			}});
			clicking = true;
		}


		/****************/

		function _setConclusioni(){
			clicking = true;
		}

		function _setFooter(){
			//console.log('made width love');
		}

	/******************************************************************/

	return {
		init : function(){
			return _init();
		}
	};
	
})(jQuery,Modernizr, document, window);
//Ricarica la pagina in alto

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

//Settaggio dell'altezza delle sezioni


var windowHeight = $(window).height();

$('#sez0, #sez1, #time3, .sez, #sez15').css('height', windowHeight);

$('#sez3, #time2, #sez13').css('height', windowHeight+windowHeight/2);


//Varie


$('#null').click(function(){
	$('.cita').hide(100);
});

$('.footer').waypoint(function(direction) {
  if (direction === 'down') {
	$('#sez15').animate({opacity: 1}, 2000);
}
}, {
offset: '30%'

});

// waypoint animazione

$('#sez5').waypoint(function(direction) {
  if (direction === 'down') {
    
    $('#fix2').hide(100);
  }
}, {
offset: '100%'

});

$('#sez3').waypoint(function(direction) {
  if (direction === 'down') {
$('#background, #start').hover(function() {
      $('#fix2').hide(100);
    });
  }
}, {
offset: '0%'

});



$('#sez2').waypoint(function(direction) {
  if (direction === 'down') {
    
    $('#fix2').hide(100);
  }
}, {
offset: '0%'

});


// Parallasse

$(document).ready(function(){

	var $window = $(window); 

	$('section[data-type="background"]').each(function(){

		var $bgobj = $(this); // assigning the object

		$(window).scroll(function() {

			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Put together our final background position

			var coords = '50% '+ yPos + 'px';

			// Move the background

			$bgobj.css({ backgroundPosition: coords });
		});
	});
});

//prevent scroll -- NON MODIFICARE! ////////////////////

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40];


function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}

//////////////////////////////////////////////////


$(".radar").load("../radar.html"); // COLLEGAMENTO BALLERINO

var ros=0;
$("#chap6").waypoint(function() {
	if(ros == 0) {
		$("#contr div").load("../alberoRosso/alberoro.html");   // COLLEGAMENTO BALLERINO
		ros=1;
	}
}, {
offset: '100%'

}); 



var blu=0;
$("#chap8").waypoint(function() {
	if(blu == 0) {
		$("#contb div").load("../alberoBlu/alberobl.html");   // COLLEGAMENTO BALLERINO
		blu=1;
	}
}, {
offset: '100%'

});


//Gestione sezioni fixed

$(document).ready(function () {	
		$('#sez0, #sez3').waypoint(function() {
			if (lock == 1) {
			$('#fix').hide();
		};
	});
});

var lock = 0;

$(document).ready(function () {
	$('#sez1').waypoint(function() {
		$('#fix').show();
		if (lock == 0) {
		
			disable_scroll();
	
			setTimeout(function() {
				enable_scroll();
			}, 1000);

			lock = 1;
			$('#statement').animate({opacity: 1}, 0);
			$('#statement1').animate({opacity: 0}, 0);

  			$('#def').animate({opacity: 1}, 2000);
  		};
	});
});

$(document).ready(function () {
	$('#sez2').waypoint(function() {

			$('#statement3, #bl3').animate({opacity: 1}, 0);
			$('#statement, #bl2').animate({opacity: 0}, 0);

  		
	});
});












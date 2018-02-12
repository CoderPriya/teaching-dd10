

/* Script Javascript Fra */

var n = 0;
var l = 0;
var windowHeight = $(window).height();

$('#sec1').animate({height: windowHeight}, 0);
$('#sec2').animate({height: windowHeight}, 0);
$('#sec3').animate({height: windowHeight}, 0);
$('#sec4').animate({height: windowHeight}, 0);
$('#sec5').animate({height: windowHeight}, 0);
$('#sec6').animate({height: windowHeight}, 0);
$('#sec7').animate({height: windowHeight}, 0);

/* Mostra grafico titoli di studio */

$(document).ready(function () {
	$('.titol').click(function () {
		if (n==0) {
		$('#tit').animate({opacity: 1, height: '157px', top: '327px'}, 500 );
		n = 1;
		$('.showtit').animate({opacity: 0.5}, 200);
		$('.giovini').animate({opacity: 1}, 200);
		$('.legenda').animate({opacity: 1}, 200);
		$('.legenda1').animate({opacity: 0}, 200);


		$('.titol').mouseleave(function() {
			$('.showtit').animate({opacity: 0}, 200);
			$('.giovini').animate({opacity: 0}, 200);
		});
	} else {
			n = 0;
			$('.intera').show().fadeIn(200);
			$('#tit').animate({opacity: 0, height: '0px', top: '487px'}, 500 );
			$('.showtit').animate({opacity: 0}, 200);
			$('.giovini').animate({opacity: 0}, 200);

			$('.legenda').animate({opacity: 0}, 200);
			$('.legenda1').animate({opacity: 1}, 200);
		};
	});
});



/* Interagisci grafico titoli di studio */

$(document).ready(function () {
	if (n==0) {
	$('.intera').hover(function() {
		$('.intera').animate({opacity: 0.7}, 500 );
	$('.intera').click(function() {
		$('.intera').fadeOut(200).hide();
	}); 
	l = 1;
	 }, function () {
		$('.intera').animate({opacity: 0}, 200 );
	});
	};
});



/* Compara fascia giovani */

$(document).ready(function () {
		$('.titol').hover(function(){
			if (n==1) {
			$('.showtit').animate({opacity: 0.5}, 200);
			$('.giovini').animate({opacity: 1}, 200);


		}}, function () {
			$('.showtit').animate({opacity: 0}, 200);
			$('.giovini').animate({opacity: 0}, 200);
		});
	});


/* Rimando grafico Europa */

$(document).ready(function () {
	if (l==1) {
		$('.showtit2 a').attr("href", "#sec4");
	
	};
});





/* grafico software e media */

$(document).ready(function () {
	
	$('.diagramd, .diagramu').hover(function () {
		$('.softd').animate({'margin-left': '80px'}, 100);
		$('.mediad').animate({'margin-left': '103px'}, 100);
		$('.sd, .md').animate({opacity: 0}, 100);
		$('.totd').animate({opacity: 1}, 100);

		$('.softu').animate({'margin-left': '80px'}, 100);
		$('.mediau').animate({'margin-left': '103px'}, 100);
		$('.su, .mu').animate({opacity: 0}, 100);
		$('.totu').animate({opacity: 1}, 100);
	}, function () {
		$('.softd').animate({'margin-left': '0px'}, 100);
		$('.mediad').animate({'margin-left': '153px'}, 100);
		$('.sd, .md').animate({opacity: 1}, 100);
		$('.totd').animate({opacity: 0}, 100);

		$('.softu').animate({'margin-left': '0px'}, 100);
		$('.mediau').animate({'margin-left': '173px'}, 100);
		$('.su, .mu').animate({opacity: 1}, 100);
		$('.totu').animate({opacity: 0}, 100);
	});
});

/*
$(document).ready(function () {
	
	$('.diagramu').hover(function () {
		$('.softu').animate({'margin-left': '80px'}, 100);
		$('.mediau').animate({'margin-left': '103px'}, 100);
		$('.su, .mu').animate({opacity: 0}, 100);
		$('.totu').animate({opacity: 1}, 100);
	}, function () {
		$('.softu').animate({'margin-left': '0px'}, 100);
		$('.mediau').animate({'margin-left': '173px'}, 100);
		$('.su, .mu').animate({opacity: 1}, 100);
		$('.totu').animate({opacity: 0}, 100);
	});
});

*/

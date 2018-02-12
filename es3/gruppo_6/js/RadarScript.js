$(document).ready(function() {

$("#_x32_002").css({"opacity" : "1"});
$("#opr02").css({"opacity" : "1"});

	$('#radarbutton').hover(function() {
	$('#opinioniblu, #opinionirosso').animate({opacity: 1}, 100);
}, function () {
	$('#opinioniblu, #opinionirosso').animate({opacity: 0}, 100);
});


	$('#radarpuls').click(function() {
	    $("#prot").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });

	});

	$('#radarpuls').mouseout(function() {
	    $("#prot").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });

	});



var w = 370,
	h = 370;

var colorscale = d3.scale.ordinal().range(["#248BFF","#F85F55"]);




//Data
var ra = [
		  [
			{axis:"Blog",value:0.02},
			{axis:"Academic",value:0.02},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.02}
		  ],[
			{axis:"Blog",value:0.1},
			{axis:"Academic",value:0.02},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.02}
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 1,
  levels: 10,
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw(".chart", ra, mycfg);



$("#rb02").hover(function(){


		$(".radarret").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#_x32_002").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#radaranno").html("2002");
		$(".opblu").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$(".oprosso").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opr02").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

var ra = [
		  [
			{axis:"Blog",value:0.02},
			{axis:"Academic",value:0.02},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.02}
		  ],[
			{axis:"Blog",value:0.1},
			{axis:"Academic",value:0.02},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.02}
		  ]
		];

		RadarChart.draw(".chart", ra, mycfg);


});


$("#rb03").hover(function(){

		$(".radarret").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#_x32_003").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#radaranno").html("2003");
		$(".opblu").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$(".oprosso").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opb03").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

var ra = [
		  [
			{axis:"Blog",value:0.1},
			{axis:"Academic",value:0.1},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.2},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.02}
		  ],[
			{axis:"Blog",value:0.02},
			{axis:"Academic",value:0.02},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.02}
		  ]
		];

		RadarChart.draw(".chart", ra, mycfg);



});


$("#rb04").hover(function(){

		$(".radarret").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#_x32_004").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#radaranno").html("2004");
		$(".opblu").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$(".oprosso").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opb04").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opr04").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

var ra = [
		  [
			{axis:"Blog",value:0.02},
			{axis:"Academic",value:0.02},
			{axis:"Private",value:0.1},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.1}
		  ],[
			{axis:"Blog",value:0.4},
			{axis:"Academic",value:0.02},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.2}
		  ]
		];

		RadarChart.draw(".chart", ra, mycfg);
});


$("#rb05").hover(function(){

		$(".radarret").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#_x32_005").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#radaranno").html("2005");
		$(".opblu").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$(".oprosso").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opb05").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opr05").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

var ra = [
		  [
			{axis:"Blog",value:0.1},
			{axis:"Academic",value:0.1},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.02}
		  ],[
			{axis:"Blog",value:0.02},
			{axis:"Academic",value:0.1},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.02}
		  ]
		];

		RadarChart.draw(".chart", ra, mycfg);
});

$("#rb06").hover(function(){

		$(".radarret").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#_x32_006").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#radaranno").html("2006");
		$(".opblu").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$(".oprosso").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opb06").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opr06").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

var ra = [
		  [
			{axis:"Blog",value:0.02},
			{axis:"Academic",value:0.1},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.02}
		  ],[
			{axis:"Blog",value:0.2},
			{axis:"Academic",value:0.02},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.02}
		  ]
		];

		RadarChart.draw(".chart", ra, mycfg);
});


$("#rb07").hover(function(){

		$(".radarret").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#_x32_007").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#radaranno").html("2007");
		$(".opblu").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$(".oprosso").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opb07").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opr07").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

var ra = [
		  [
			{axis:"Blog",value:0.1},
			{axis:"Academic",value:0.2},
			{axis:"Private",value:0.1},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.3}
		  ],[
			{axis:"Blog",value:0.1},
			{axis:"Academic",value:0.02},
			{axis:"Private",value:0.2},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.02}
		  ]
		];

		RadarChart.draw(".chart", ra, mycfg);
});


$("#rb08").hover(function(){

		$(".radarret").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#_x32_008").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#radaranno").html("2008");
		$(".opblu").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$(".oprosso").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opb08").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opr08").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

var ra = [
		  [
			{axis:"Blog",value:0.1},
			{axis:"Academic",value:0.02},
			{axis:"Private",value:0.1},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.02}
		  ],[
			{axis:"Blog",value:0.02},
			{axis:"Academic",value:0.2},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.1}
		  ]
		];

		RadarChart.draw(".chart", ra, mycfg);
});


$("#rb09").hover(function(){

		$(".radarret").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#_x32_009").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#radaranno").html("2009");
		$(".opblu").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$(".oprosso").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opb09").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opr09").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

var ra = [
		  [
			{axis:"Blog",value:0.2},
			{axis:"Academic",value:0.3},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.2}
		  ],[
			{axis:"Blog",value:0.3},
			{axis:"Academic",value:0.02},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.1}
		  ]
		];

		RadarChart.draw(".chart", ra, mycfg);
});


$("#rb10").hover(function(){

		$(".radarret").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#_x32_010").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#radaranno").html("2010");
		$(".opblu").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$(".oprosso").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opb10").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opr10").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

var ra = [
		  [
			{axis:"Blog",value:0.3},
			{axis:"Academic",value:0.1},
			{axis:"Private",value:0.2},
			{axis:"Public",value:0.1},
			{axis:"Discussion",value:0.1},
			{axis:"News",value:0.3}
		  ],[
			{axis:"Blog",value:0.6},
			{axis:"Academic",value:0.02},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.3}
		  ]
		];

		RadarChart.draw(".chart", ra, mycfg);
});


$("#rb11").hover(function(){

		$(".radarret").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#_x32_011").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#radaranno").html("2011");
		$(".opblu").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$(".oprosso").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opb11").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opr11").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

var ra = [
		  [
			{axis:"Blog",value:0.02},
			{axis:"Academic",value:0.1},
			{axis:"Private",value:0.1},
			{axis:"Public",value:0.2},
			{axis:"Discussion",value:0.2},
			{axis:"News",value:0.2}
		  ],[
			{axis:"Blog",value:0.5},
			{axis:"Academic",value:0.1},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.1}
		  ]
		];

		RadarChart.draw(".chart", ra, mycfg);
});


$("#rb12").hover(function(){

		$(".radarret").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#_x32_012").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#radaranno").html("2012");
		$(".opblu").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$(".oprosso").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opb12").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opr12").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

var ra = [
		  [
			{axis:"Blog",value:0.4},
			{axis:"Academic",value:0.1},
			{axis:"Private",value:0.1},
			{axis:"Public",value:0.1},
			{axis:"Discussion",value:0.1},
			{axis:"News",value:0.3}
		  ],[
			{axis:"Blog",value:0.5},
			{axis:"Academic",value:0.3},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.5}
		  ]
		];

		RadarChart.draw(".chart", ra, mycfg);
});


$("#rb13").hover(function(){

		$(".radarret").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#_x32_013").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#radaranno").html("2013");
		$(".opblu").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$(".oprosso").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opb13").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opr13").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

var ra = [
		  [
			{axis:"Blog",value:0.7},
			{axis:"Academic",value:0.1},
			{axis:"Private",value:0.1},
			{axis:"Public",value:0.2},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.6}
		  ],[
			{axis:"Blog",value:0.6},
			{axis:"Academic",value:0.1},
			{axis:"Private",value:0.02},
			{axis:"Public",value:0.02},
			{axis:"Discussion",value:0.02},
			{axis:"News",value:0.4}
		  ]
		];

		RadarChart.draw(".chart", ra, mycfg);
});


$("#rb14").hover(function(){

		$(".radarret").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#_x32_014").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#radaranno").html("2014");
		$(".opblu").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$(".oprosso").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opb14").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
		$("#opr14").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

var ra = [
		  [
			{axis:"Blog",value:0.9},
			{axis:"Academic",value:0.1},
			{axis:"Private",value:0.2},
			{axis:"Public",value:0.1},
			{axis:"Discussion",value:0.1},
			{axis:"News",value:0.3}
		  ],[
			{axis:"Blog",value:0.7},
			{axis:"Academic",value:0.1},
			{axis:"Private",value:0.1},
			{axis:"Public",value:0.1},
			{axis:"Discussion",value:0.1},
			{axis:"News",value:0.4}
		  ]
		];

		RadarChart.draw(".chart", ra, mycfg);
});

});





$(function(){

	$("#vizzz").load('img/rect_ok.svg',function(response){

		$(this).addClass("svgLoaded");
		
		if(!response){
			// Error loading SVG!
			// Make absolutely sure you are running this on a web server or localhost!
		}

	});
});



/*$("#rect").click(function({
$('rect[id="#rect"]').velocity({ 
    translateX: "200px",
   
});*/

var i=0
$('#vizzz').click(function(){

if (i==1){
$(".A_txt").fadeIn(700);
$("#A").fadeIn(700);
$("#rettangoli").fadeOut(500);
$(".F_txt").fadeIn(700);
$("#F2").fadeOut(500);
$(".N_txt").fadeIn(700);
	i=0;
}

else{
$(".A_txt").fadeOut(500);
$("#A").fadeOut(700);
$("#rettangoli").fadeIn(800);
$(".F_txt").fadeOut(500);
$(".N_txt").fadeOut(500);
$("#F2").fadeIn("slow");
i=1;
}


}); 



//taphover - a solution to the lack of hover on touch devices.
//more info: http://www.hnldesign.nl/work/code/mouseover-hover-on-touch-devices-using-jquery/
/*$('rect[id="A"]').on('touchstart', function (e) {
'use strict'; //satisfy the code inspectors
var link = $(this); //preselect the link
if (link.hasClass('hover')) {
return true;
} else {
link.addClass('hover');
$('rect[id="A"]').not(this).removeClass('hover');
e.preventDefault();
return false; //extra, and to make sure the function has consistent return points
}
}); */

$('#vizzz').mouseenter(function(){
var link = $(this); //preselect the link
link.addClass('hover');
}); 

$('#vizzz').mouseleave(function(){
var link = $(this); //preselect the link
link.removeClass('hover');
}); 



/*var doc = $(".btn btn-circle")
var pos = doc.scrollTop();

$(".next").click(function() {
alert('Distance from top is ' + pos + ' pixels')
});*/

/* TIPEWRITER
<script src="js/typewriter.js"></script>

<script>	
$("#quest").css("display", "none");

	$("#section1").click(function() {

    $("#quest").css("display","block").typewriter({'speed':100});
  });
  </script>*/


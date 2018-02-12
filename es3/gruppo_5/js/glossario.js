$(document).ready(function(){
	$("#body").addClass("whistle");

/* ------------------  SECTION 1  -------------------- */


$("#uno").click(function(){

	/*if ( $("body").hasClass("eye") ) {
$("body").removeClass("eye").addClass("whistle");};
else if ( $("body").hasClass("camera") ) {
	$("body").removeClass("camera").addClass("whistle");};
else 	{$("body").removeClass("movement").addClass("whistle");};*/

$( "#body" ).removeClass( "movement camera eye" );
$( "#body" ).addClass( "whistle" );
$(".definizione-2").slideUp(500,  "linear");
$(".definizione-3").slideUp(500,  "linear");
$(".definizione-4").slideUp(500,  "linear");
$(".btn-group-vertical-2").removeClass("pressed");
$(".btn-group-vertical-3").removeClass("pressed");
$(".btn-group-vertical-4").removeClass("pressed");

});

// ---------> button 1 <-------------

$("#bottone1").click(function(){
// rimuovi classe bottoni	
$("#bottone2").removeClass("pressed");
$("#bottone3").removeClass("pressed");	
$("#bottone4").removeClass("pressed");	
$("#bottone5").removeClass("pressed");	
$("#bottone6").removeClass("pressed");	
$("#bottone7").removeClass("pressed");	
$("#bottone8").removeClass("pressed");	
$("#bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#box2").fadeOut(50, "linear");
$("#box3").fadeOut(50, "linear");
$("#box4").fadeOut(50, "linear");
$("#box5").fadeOut(50, "linear");
$("#box6").fadeOut(50, "linear");
$("#box7").fadeOut(50, "linear");
$("#box8").fadeOut(50, "linear");
$("#box9").fadeOut(50, "linear");

$(".definizione").slideDown("slow",  "linear").animate({ height: "200px"}, "slow");
$("#box1").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 1


// ---------> button 2 <-------------

$("#bottone2").click(function(){
// rimuovi classe bottoni	
$("#bottone1").removeClass("pressed");
$("#bottone3").removeClass("pressed");	
$("#bottone4").removeClass("pressed");	
$("#bottone5").removeClass("pressed");	
$("#bottone6").removeClass("pressed");	
$("#bottone7").removeClass("pressed");	
$("#bottone8").removeClass("pressed");	
$("#bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#box1").fadeOut(50, "linear");
$("#box3").fadeOut(50, "linear");
$("#box4").fadeOut(50, "linear");
$("#box5").fadeOut(50, "linear");
$("#box6").fadeOut(50, "linear");
$("#box7").fadeOut(50, "linear");
$("#box8").fadeOut(50, "linear");
$("#box9").fadeOut(50, "linear");


$(".definizione").slideDown("slow",  "linear").animate({ height: "200px"}, "slow");
$("#box2").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 2

// ---------> button 3 <-------------

$("#bottone3").click(function(){
// rimuovi classe bottoni	
$("#bottone1").removeClass("pressed");
$("#bottone2").removeClass("pressed");	
$("#bottone4").removeClass("pressed");	
$("#bottone5").removeClass("pressed");	
$("#bottone6").removeClass("pressed");	
$("#bottone7").removeClass("pressed");	
$("#bottone8").removeClass("pressed");	
$("#bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#box1").fadeOut(50, "linear");
$("#box2").fadeOut(50, "linear");
$("#box4").fadeOut(50, "linear");
$("#box5").fadeOut(50, "linear");
$("#box6").fadeOut(50, "linear");
$("#box7").fadeOut(50, "linear");
$("#box8").fadeOut(50, "linear");
$("#box9").fadeOut(50, "linear");


$(".definizione").slideDown("slow",  "linear").animate({ height: "200px"}, "slow");
$("#box3").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 3


// ---------> button 4 <-------------

$("#bottone4").click(function(){
// rimuovi classe bottoni	
$("#bottone1").removeClass("pressed");
$("#bottone2").removeClass("pressed");	
$("#bottone3").removeClass("pressed");	
$("#bottone5").removeClass("pressed");	
$("#bottone6").removeClass("pressed");	
$("#bottone7").removeClass("pressed");	
$("#bottone8").removeClass("pressed");	
$("#bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#box1").fadeOut(50, "linear");
$("#box2").fadeOut(50, "linear");
$("#box3").fadeOut(50, "linear");
$("#box5").fadeOut(50, "linear");
$("#box6").fadeOut(50, "linear");
$("#box7").fadeOut(50, "linear");
$("#box8").fadeOut(50, "linear");
$("#box9").fadeOut(50, "linear");


$(".definizione").slideDown("slow",  "linear").animate({ height: "230px"}, "slow");
$("#box4").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 4


// ---------> button 5 <-------------

$("#bottone5").click(function(){
// rimuovi classe bottoni	
$("#bottone1").removeClass("pressed");
$("#bottone2").removeClass("pressed");	
$("#bottone3").removeClass("pressed");	
$("#bottone4").removeClass("pressed");	
$("#bottone6").removeClass("pressed");	
$("#bottone7").removeClass("pressed");	
$("#bottone8").removeClass("pressed");	
$("#bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#box1").fadeOut(50, "linear");
$("#box2").fadeOut(50, "linear");
$("#box3").fadeOut(50, "linear");
$("#box4").fadeOut(50, "linear");
$("#box6").fadeOut(50, "linear");
$("#box7").fadeOut(50, "linear");
$("#box8").fadeOut(50, "linear");
$("#box9").fadeOut(50, "linear");


$(".definizione").slideDown("slow",  "linear").animate({ height: "200px"}, "slow");
$("#box5").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 5


// ---------> button 6 <-------------

$("#bottone6").click(function(){
// rimuovi classe bottoni	
$("#bottone1").removeClass("pressed");
$("#bottone2").removeClass("pressed");	
$("#bottone3").removeClass("pressed");	
$("#bottone4").removeClass("pressed");	
$("#bottone5").removeClass("pressed");	
$("#bottone7").removeClass("pressed");	
$("#bottone8").removeClass("pressed");	
$("#bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#box1").fadeOut(50, "linear");
$("#box2").fadeOut(50, "linear");
$("#box3").fadeOut(50, "linear");
$("#box4").fadeOut(50, "linear");
$("#box5").fadeOut(50, "linear");
$("#box7").fadeOut(50, "linear");
$("#box8").fadeOut(50, "linear");
$("#box9").fadeOut(50, "linear");


$(".definizione").slideDown("slow",  "linear").animate({ height: "230px"}, "slow");
$("#box6").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 6


// ---------> button 7 <-------------

$("#bottone7").click(function(){
// rimuovi classe bottoni	
$("#bottone1").removeClass("pressed");
$("#bottone2").removeClass("pressed");	
$("#bottone3").removeClass("pressed");	
$("#bottone4").removeClass("pressed");	
$("#bottone5").removeClass("pressed");	
$("#bottone6").removeClass("pressed");	
$("#bottone8").removeClass("pressed");	
$("#bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#box1").fadeOut(50, "linear");
$("#box2").fadeOut(50, "linear");
$("#box3").fadeOut(50, "linear");
$("#box4").fadeOut(50, "linear");
$("#box5").fadeOut(50, "linear");
$("#box6").fadeOut(50, "linear");
$("#box8").fadeOut(50, "linear");
$("#box9").fadeOut(50, "linear");


$(".definizione").slideDown("slow",  "linear").animate({ height: "200px"}, "slow");
$("#box7").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 7


// ---------> button 8 <-------------

$("#bottone8").click(function(){
// rimuovi classe bottoni	
$("#bottone1").removeClass("pressed");
$("#bottone2").removeClass("pressed");	
$("#bottone3").removeClass("pressed");	
$("#bottone4").removeClass("pressed");	
$("#bottone5").removeClass("pressed");	
$("#bottone6").removeClass("pressed");	
$("#bottone7").removeClass("pressed");	
$("#bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#box1").fadeOut(50, "linear");
$("#box2").fadeOut(50, "linear");
$("#box3").fadeOut(50, "linear");
$("#box4").fadeOut(50, "linear");
$("#box5").fadeOut(50, "linear");
$("#box6").fadeOut(50, "linear");
$("#box7").fadeOut(50, "linear");
$("#box9").fadeOut(50, "linear");


$(".definizione").slideDown("slow",  "linear").animate({ height: "180px"}, "slow");
$("#box8").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});

}); // fine 8


// ---------> button 9 <-------------

$("#bottone9").click(function(){
// rimuovi classe bottoni	
$("#bottone1").removeClass("pressed");
$("#bottone2").removeClass("pressed");	
$("#bottone3").removeClass("pressed");	
$("#bottone4").removeClass("pressed");	
$("#bottone5").removeClass("pressed");	
$("#bottone6").removeClass("pressed");	
$("#bottone7").removeClass("pressed");	
$("#bottone8").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#box1").fadeOut(50, "linear");
$("#box2").fadeOut(50, "linear");
$("#box3").fadeOut(50, "linear");
$("#box4").fadeOut(50, "linear");
$("#box5").fadeOut(50, "linear");
$("#box6").fadeOut(50, "linear");
$("#box7").fadeOut(50, "linear");
$("#box8").fadeOut(50, "linear");


$(".definizione").slideDown("slow",  "linear").animate({ height: "120px"}, "slow");
$("#box9").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 9








/* ------------------  SECTION 2  -------------------- */


$("#due").click(function(){

$( "#body" ).removeClass( "movement camera whistle" );
$( "#body" ).addClass( "eye" );
$(".definizione").slideUp(500,  "linear");
$(".definizione-3").slideUp(500,  "linear");
$(".definizione-4").slideUp(500,  "linear");
$(".btn-group-vertical-1").removeClass("pressed");
$(".btn-group-vertical-3").removeClass("pressed");
$(".btn-group-vertical-4").removeClass("pressed");

});

$("#2bottone1").click(function(){
// rimuovi classe bottoni	
$("#2bottone2").removeClass("pressed");
$("#2bottone3").removeClass("pressed");	
$("#2bottone4").removeClass("pressed");	
$("#2bottone5").removeClass("pressed");	
$("#2bottone6").removeClass("pressed");	
$("#2bottone7").removeClass("pressed");	
$("#2bottone8").removeClass("pressed");	
$("#2bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#2box2").fadeOut(50, "linear");
$("#2box3").fadeOut(50, "linear");
$("#2box4").fadeOut(50, "linear");
$("#2box5").fadeOut(50, "linear");
$("#2box6").fadeOut(50, "linear");
$("#2box7").fadeOut(50, "linear");
$("#2box8").fadeOut(50, "linear");
$("#2box9").fadeOut(50, "linear");

$(".definizione-2").slideDown("slow",  "linear").animate({ height: "280px"}, "slow");
$("#2box1").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 1


// ---------> button 2 <-------------

$("#2bottone2").click(function(){
// rimuovi classe bottoni	
$("#2bottone1").removeClass("pressed");
$("#2bottone3").removeClass("pressed");	
$("#2bottone4").removeClass("pressed");	
$("#2bottone5").removeClass("pressed");	
$("#2bottone6").removeClass("pressed");	
$("#2bottone7").removeClass("pressed");	
$("#2bottone8").removeClass("pressed");	
$("#2bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#2box1").fadeOut(50, "linear");
$("#2box3").fadeOut(50, "linear");
$("#2box4").fadeOut(50, "linear");
$("#2box5").fadeOut(50, "linear");
$("#2box6").fadeOut(50, "linear");
$("#2box7").fadeOut(50, "linear");
$("#2box8").fadeOut(50, "linear");
$("#2box9").fadeOut(50, "linear");


$(".definizione-2").slideDown("slow",  "linear").animate({ height: "280px"}, "slow");
$("#2box2").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 2

// ---------> button 3 <-------------

$("#2bottone3").click(function(){
// rimuovi classe bottoni	
$("#2bottone1").removeClass("pressed");
$("#2bottone2").removeClass("pressed");	
$("#2bottone4").removeClass("pressed");	
$("#2bottone5").removeClass("pressed");	
$("#2bottone6").removeClass("pressed");	
$("#2bottone7").removeClass("pressed");	
$("#2bottone8").removeClass("pressed");	
$("#2bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#2box1").fadeOut(50, "linear");
$("#2box2").fadeOut(50, "linear");
$("#2box4").fadeOut(50, "linear");
$("#2box5").fadeOut(50, "linear");
$("#2box6").fadeOut(50, "linear");
$("#2box7").fadeOut(50, "linear");
$("#2box8").fadeOut(50, "linear");
$("#2box9").fadeOut(50, "linear");


$(".definizione-2").slideDown("slow",  "linear").animate({ height: "180px"}, "slow");
$("#2box3").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 3


// ---------> button 4 <-------------

$("#2bottone4").click(function(){
// rimuovi classe bottoni	
$("#2bottone1").removeClass("pressed");
$("#2bottone2").removeClass("pressed");	
$("#2bottone3").removeClass("pressed");	
$("#2bottone5").removeClass("pressed");	
$("#2bottone6").removeClass("pressed");	
$("#2bottone7").removeClass("pressed");	
$("#2bottone8").removeClass("pressed");	
$("#2bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#2box1").fadeOut(50, "linear");
$("#2box2").fadeOut(50, "linear");
$("#2box3").fadeOut(50, "linear");
$("#2box5").fadeOut(50, "linear");
$("#2box6").fadeOut(50, "linear");
$("#2box7").fadeOut(50, "linear");
$("#2box8").fadeOut(50, "linear");
$("#2box9").fadeOut(50, "linear");


$(".definizione-2").slideDown("slow",  "linear").animate({ height: "120px"}, "slow");
$("#2box4").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 4


// ---------> button 5 <-------------

$("#2bottone5").click(function(){
// rimuovi classe bottoni	
$("#2bottone1").removeClass("pressed");
$("#2bottone2").removeClass("pressed");	
$("#2bottone3").removeClass("pressed");	
$("#2bottone4").removeClass("pressed");	
$("#2bottone6").removeClass("pressed");	
$("#2bottone7").removeClass("pressed");	
$("#2bottone8").removeClass("pressed");	
$("#2bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#2box1").fadeOut(50, "linear");
$("#2box2").fadeOut(50, "linear");
$("#2box3").fadeOut(50, "linear");
$("#2box4").fadeOut(50, "linear");
$("#2box6").fadeOut(50, "linear");
$("#2box7").fadeOut(50, "linear");
$("#2box8").fadeOut(50, "linear");
$("#2box9").fadeOut(50, "linear");


$(".definizione-2").slideDown("slow",  "linear").animate({ height: "180px"}, "slow");
$("#2box5").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 5


// ---------> button 6 <-------------

$("#2bottone6").click(function(){
// rimuovi classe bottoni	
$("#2bottone1").removeClass("pressed");
$("#2bottone2").removeClass("pressed");	
$("#2bottone3").removeClass("pressed");	
$("#2bottone4").removeClass("pressed");	
$("#2bottone5").removeClass("pressed");	
$("#2bottone7").removeClass("pressed");	
$("#2bottone8").removeClass("pressed");	
$("#2bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#2box1").fadeOut(50, "linear");
$("#2box2").fadeOut(50, "linear");
$("#2box3").fadeOut(50, "linear");
$("#2box4").fadeOut(50, "linear");
$("#2box5").fadeOut(50, "linear");
$("#2box7").fadeOut(50, "linear");
$("#2box8").fadeOut(50, "linear");
$("#2box9").fadeOut(50, "linear");


$(".definizione-2").slideDown("slow",  "linear").animate({ height: "180px"}, "slow");
$("#2box6").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 6


// ---------> button 7 <-------------

$("#2bottone7").click(function(){
// rimuovi classe bottoni	
$("#2bottone1").removeClass("pressed");
$("#2bottone2").removeClass("pressed");	
$("#2bottone3").removeClass("pressed");	
$("#2bottone4").removeClass("pressed");	
$("#2bottone5").removeClass("pressed");	
$("#2bottone6").removeClass("pressed");	
$("#2bottone8").removeClass("pressed");	
$("#2bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#2box1").fadeOut(50, "linear");
$("#2box2").fadeOut(50, "linear");
$("#2box3").fadeOut(50, "linear");
$("#2box4").fadeOut(50, "linear");
$("#2box5").fadeOut(50, "linear");
$("#2box6").fadeOut(50, "linear");
$("#2box8").fadeOut(50, "linear");
$("#2box9").fadeOut(50, "linear");


$(".definizione-2").slideDown("slow",  "linear").animate({ height: "150px"}, "slow");
$("#2box7").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 7







/* ------------------  SECTION 3  -------------------- */


$("#tre").click(function(){

	//$("#body").removeClass("whistle").addClass("movement");
$( "#body" ).removeClass( "eye camera whistle" );
$( "#body" ).addClass( "movement" );
$(".definizione").slideUp(500,  "linear");
$(".definizione-2").slideUp(500,  "linear");
$(".definizione-4").slideUp(500,  "linear");
$(".btn-group-vertical-1").removeClass("pressed");
$(".btn-group-vertical-2").removeClass("pressed");
$(".btn-group-vertical-4").removeClass("pressed");

});

/* ----------- BOTTONI 3 -----------*/

$("#3bottone1").click(function(){
// rimuovi classe bottoni	
$("#3bottone2").removeClass("pressed");
$("#3bottone3").removeClass("pressed");	
$("#3bottone4").removeClass("pressed");	
$("#3bottone5").removeClass("pressed");	
$("#3bottone6").removeClass("pressed");	
$("#3bottone7").removeClass("pressed");	
$("#3bottone8").removeClass("pressed");	
$("#3bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#3box2").fadeOut(50, "linear");
$("#3box3").fadeOut(50, "linear");
$("#3box4").fadeOut(50, "linear");
$("#3box5").fadeOut(50, "linear");
$("#3box6").fadeOut(50, "linear");
$("#3box7").fadeOut(50, "linear");
$("#3box8").fadeOut(50, "linear");
$("#3box9").fadeOut(50, "linear");

$(".definizione-3").slideDown("slow",  "linear").animate({ height: "220px"}, "slow");
$("#3box1").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 1


// ---------> button 2 <-------------

$("#3bottone2").click(function(){
// rimuovi classe bottoni	
$("#3bottone1").removeClass("pressed");
$("#3bottone3").removeClass("pressed");	
$("#3bottone4").removeClass("pressed");	
$("#3bottone5").removeClass("pressed");	
$("#3bottone6").removeClass("pressed");	
$("#3bottone7").removeClass("pressed");	
$("#3bottone8").removeClass("pressed");	
$("#3bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#3box1").fadeOut(50, "linear");
$("#3box3").fadeOut(50, "linear");
$("#3box4").fadeOut(50, "linear");
$("#3box5").fadeOut(50, "linear");
$("#3box6").fadeOut(50, "linear");
$("#3box7").fadeOut(50, "linear");
$("#3box8").fadeOut(50, "linear");
$("#3box9").fadeOut(50, "linear");


$(".definizione-3").slideDown("slow",  "linear").animate({ height: "250px"}, "slow");
$("#3box2").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 2

// ---------> button 3 <-------------

$("#3bottone3").click(function(){
// rimuovi classe bottoni	
$("#3bottone1").removeClass("pressed");
$("#3bottone2").removeClass("pressed");	
$("#3bottone4").removeClass("pressed");	
$("#3bottone5").removeClass("pressed");	
$("#3bottone6").removeClass("pressed");	
$("#3bottone7").removeClass("pressed");	
$("#3bottone8").removeClass("pressed");	
$("#3bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#3box1").fadeOut(50, "linear");
$("#3box2").fadeOut(50, "linear");
$("#3box4").fadeOut(50, "linear");
$("#3box5").fadeOut(50, "linear");
$("#3box6").fadeOut(50, "linear");
$("#3box7").fadeOut(50, "linear");
$("#3box8").fadeOut(50, "linear");
$("#3box9").fadeOut(50, "linear");


$(".definizione-3").slideDown("slow",  "linear").animate({ height: "230px"}, "slow");
$("#3box3").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 3


// ---------> button 4 <-------------

$("#3bottone4").click(function(){
// rimuovi classe bottoni	
$("#3bottone1").removeClass("pressed");
$("#3bottone2").removeClass("pressed");	
$("#3bottone3").removeClass("pressed");	
$("#3bottone5").removeClass("pressed");	
$("#3bottone6").removeClass("pressed");	
$("#3bottone7").removeClass("pressed");	
$("#3bottone8").removeClass("pressed");	
$("#3bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#3box1").fadeOut(50, "linear");
$("#3box2").fadeOut(50, "linear");
$("#3box3").fadeOut(50, "linear");
$("#3box5").fadeOut(50, "linear");
$("#3box6").fadeOut(50, "linear");
$("#3box7").fadeOut(50, "linear");
$("#3box8").fadeOut(50, "linear");
$("#3box9").fadeOut(50, "linear");


$(".definizione-3").slideDown("slow",  "linear").animate({ height: "190px"}, "slow");
$("#3box4").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 4


// ---------> button 5 <-------------

$("#3bottone5").click(function(){
// rimuovi classe bottoni	
$("#3bottone1").removeClass("pressed");
$("#3bottone2").removeClass("pressed");	
$("#3bottone3").removeClass("pressed");	
$("#3bottone4").removeClass("pressed");	
$("#3bottone6").removeClass("pressed");	
$("#3bottone7").removeClass("pressed");	
$("#3bottone8").removeClass("pressed");	
$("#3bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#3box1").fadeOut(50, "linear");
$("#3box2").fadeOut(50, "linear");
$("#3box3").fadeOut(50, "linear");
$("#3box4").fadeOut(50, "linear");
$("#3box6").fadeOut(50, "linear");
$("#3box7").fadeOut(50, "linear");
$("#3box8").fadeOut(50, "linear");
$("#3box9").fadeOut(50, "linear");


$(".definizione-3").slideDown("slow",  "linear").animate({ height: "180px"}, "slow");
$("#3box5").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 5






/* ------------------  SECTION 4   -------------------- */

$("#quattro").click(function(){

	$( "#body" ).removeClass( "movement eye whistle" );
$( "#body" ).addClass( "camera" );
$(".definizione").slideUp(500,  "linear");
$(".definizione-2").slideUp(500,  "linear");
$(".definizione-3").slideUp(500,  "linear");
$(".btn-group-vertical-1").removeClass("pressed");
$(".btn-group-vertical-2").removeClass("pressed");
$(".btn-group-vertical-3").removeClass("pressed");

});

/* ----------- BOTTONI 4 -----------*/

// ---------> button 1 <-------------

$("#4bottone1").click(function(){
// rimuovi classe bottoni	
$("#4bottone2").removeClass("pressed");
$("#4bottone3").removeClass("pressed");	
$("#4bottone4").removeClass("pressed");	
$("#4bottone5").removeClass("pressed");	
$("#4bottone6").removeClass("pressed");	
$("#4bottone7").removeClass("pressed");	
$("#4bottone8").removeClass("pressed");	
$("#4bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#4box2").fadeOut(50, "linear");
$("#4box3").fadeOut(50, "linear");
$("#4box4").fadeOut(50, "linear");
$("#4box5").fadeOut(50, "linear");
$("#4box6").fadeOut(50, "linear");
$("#4box7").fadeOut(50, "linear");
$("#4box8").fadeOut(50, "linear");
$("#4box9").fadeOut(50, "linear");

$(".definizione-4").slideDown("slow",  "linear").animate({ height: "220px"}, "slow");
$("#4box1").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 1


// ---------> button 2 <-------------

$("#4bottone2").click(function(){
// rimuovi classe bottoni	
$("#4bottone1").removeClass("pressed");
$("#4bottone3").removeClass("pressed");	
$("#4bottone4").removeClass("pressed");	
$("#4bottone5").removeClass("pressed");	
$("#4bottone6").removeClass("pressed");	
$("#4bottone7").removeClass("pressed");	
$("#4bottone8").removeClass("pressed");	
$("#4bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#4box1").fadeOut(50, "linear");
$("#4box3").fadeOut(50, "linear");
$("#4box4").fadeOut(50, "linear");
$("#4box5").fadeOut(50, "linear");
$("#4box6").fadeOut(50, "linear");
$("#4box7").fadeOut(50, "linear");
$("#4box8").fadeOut(50, "linear");
$("#4box9").fadeOut(50, "linear");


$(".definizione-4").slideDown("slow",  "linear").animate({ height: "200px"}, "slow");
$("#4box2").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 2

// ---------> button 3 <-------------

$("#4bottone3").click(function(){
// rimuovi classe bottoni	
$("#4bottone1").removeClass("pressed");
$("#4bottone2").removeClass("pressed");	
$("#4bottone4").removeClass("pressed");	
$("#4bottone5").removeClass("pressed");	
$("#4bottone6").removeClass("pressed");	
$("#4bottone7").removeClass("pressed");	
$("#4bottone8").removeClass("pressed");	
$("#4bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#4box1").fadeOut(50, "linear");
$("#4box2").fadeOut(50, "linear");
$("#4box4").fadeOut(50, "linear");
$("#4box5").fadeOut(50, "linear");
$("#4box6").fadeOut(50, "linear");
$("#4box7").fadeOut(50, "linear");
$("#4box8").fadeOut(50, "linear");
$("#4box9").fadeOut(50, "linear");


$(".definizione-4").slideDown("slow",  "linear").animate({ height: "250px"}, "slow");
$("#4box3").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 3


// ---------> button 4 <-------------

$("#4bottone4").click(function(){
// rimuovi classe bottoni	
$("#4bottone1").removeClass("pressed");
$("#4bottone2").removeClass("pressed");	
$("#4bottone3").removeClass("pressed");	
$("#4bottone5").removeClass("pressed");	
$("#4bottone6").removeClass("pressed");	
$("#4bottone7").removeClass("pressed");	
$("#4bottone8").removeClass("pressed");	
$("#4bottone9").removeClass("pressed");	

$(this).addClass("pressed");

//fadeOut
$("#4box1").fadeOut(50, "linear");
$("#4box2").fadeOut(50, "linear");
$("#4box3").fadeOut(50, "linear");
$("#4box5").fadeOut(50, "linear");
$("#4box6").fadeOut(50, "linear");
$("#4box7").fadeOut(50, "linear");
$("#4box8").fadeOut(50, "linear");
$("#4box9").fadeOut(50, "linear");


$(".definizione-4").slideDown("slow",  "linear").animate({ height: "250px"}, "slow");
$("#4box4").delay(50).fadeIn(500, "linear").css({"margin-top":"30px", "margin-left":"30px", "margin-right":"30px"});
}); // fine 4

}); // fine funzione






$(document).ready(function(){
	$("#section16").addClass("collecting");

/* ------------------  SECTION 1  -------------------- */


$("#sec-1").click(function(){

$( "#section16" ).removeClass( "literary nautical authoritarian war medicine digging" );
$( "#section16" ).addClass( "collecting" );
}); 

$("#sec-2").click(function(){

$( "#section16" ).removeClass( "collecting nautical authoritarian war medicine digging" );
$( "#section16" ).addClass( "literary" );
}); 

$("#sec-3").click(function(){

$( "#section16" ).removeClass( "collecting literary authoritarian war medicine digging" );
$( "#section16" ).addClass( "nautical" );
}); 

$("#sec-4").click(function(){

$( "#section16" ).removeClass( "collecting literary nautical war medicine digging" );
$( "#section16" ).addClass( "authoritarian" );
}); 

$("#sec-5").click(function(){

$( "#section16" ).removeClass( "collecting literary nautical authoritarian medicine digging" );
$( "#section16" ).addClass( "war" );
}); 

$("#sec-6").click(function(){

$( "#section16" ).removeClass( "collecting nautical authoritarian war literary digging" );
$( "#section16" ).addClass( "medicine" );
}); 

$("#sec-7").click(function(){

$( "#section16" ).removeClass( "collecting nautical authoritarian war literary medicine" );
$( "#section16" ).addClass( "digging" );
}); 



}); // doc function
/*function showDiv() {
   document.getElementById('approfondimento').style.display = "block";
}*/
/*
function showDiv(approfondimento) {
  if (document.getElementById) {
    var divid = document.getElementById("approfondimento");
    var divs = document.getElementsByClassName("hideable");
    for (var i = 50; i < divs.length; i = i + 10) {
     $(divs[i]).fadeOut("slow");
    }
    $(divid).fadeIn("slow");
  }
  return false;
}



$(document).ready(function(){
    $("#button2").click(function(){
        $("div.hideable").show(1000);
    });
});

$(document).ready(function(){
    $("#button2").click(function(){
        $("div.hideable").hide(1000);
    });
});
*/

$(document).ready(function() {

$(".plus").click(function () {
  if ( $( "#approfondimento" ).is( ":hidden" ) ) {
    $( "#approfondimento" ).slideDown( "slow" );
  } 
  else {
    $( "#approfondimento" ).slideUp( "slow" );
  }
});

$(".plus2").click(function () {
  if ( $( "#approfondimento2" ).is( ":hidden" ) ) {
    $( "#approfondimento2" ).slideDown( "slow" );
  } else {
    $( "#approfondimento2" ).slideUp( "slow" );
  }
});

$(".plus3").click(function () {
  if ( $( "#approfondimento3" ).is( ":hidden" ) ) {
    $( "#approfondimento3" ).slideDown( "slow" );
  } else {
    $( "#approfondimento3" ).slideUp( "slow" );
  }
});

});






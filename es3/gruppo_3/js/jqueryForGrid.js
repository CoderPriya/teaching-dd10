/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

/* grid img */

$(document).ready(function(){
    $('li.other').mouseover(function(){
        $('li.other').css("opacity","0");
        $('li.headless').css("opacity",.3);
        $('li.coveredface').css("opacity",.3);
        $('li.noface').css("opacity",.3);
        $('li.technology').css("opacity",.3);
        $('li.silohuette').css("opacity",.3);
        $('#categorylabel').text("not classified");
        document.getElementById("bigimg").src="img/other_bg.png";
    });

    $('li.other').mouseout(function(){
        $('li.headless').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("");
    });




    $('li.noface').mouseover(function(){
        $('li.noface').css("opacity","0");
        $('li.coveredface').css("opacity",.3);
        $('li.headless').css("opacity",.3);
        $('li.other').css("opacity",.3);
        $('li.technology').css("opacity",.3);
        $('li.silohuette').css("opacity",.3);
        $('#categorylabel').text("No face");
          document.getElementById("bigimg").src="img/noface_bg.png";
    });

    $('li.noface').mouseout(function(){
        $('li.headless').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("");
    });


    $('li.headless').mouseover(function(){
        $('li.headless').css("opacity","0");
        $('li.coveredface').css("opacity",.3);
        $('li.noface').css("opacity",.3);
        $('li.other').css("opacity",.3);
        $('li.technology').css("opacity",.3);
        $('li.silohuette').css("opacity",.3);
        $('#categorylabel').text("headless");
          document.getElementById("bigimg").src="img/headless_bg.png";
    });

    $('li.headless').mouseout(function(){
        $('li.headless').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("");
    });



    $('li.coveredface').mouseover(function(){
        $('li.coveredface').css("opacity","0");
        $('li.noface').css("opacity",.3);
        $('li.headless').css("opacity",.3);
        $('li.other').css("opacity",.3);
        $('li.technology').css("opacity",.3);
        $('li.silohuette').css("opacity",.3);
        $('#categorylabel').text("covered face");
          document.getElementById("bigimg").src="img/coverface_bg.png";
    });

    $('li.coveredface').mouseout(function(){
        $('li.headless').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("");
    });



    $('li.silohuette').mouseover(function(){
        $('li.silohuette').css("opacity","0");
        $('li.noface').css("opacity",.3);
        $('li.headless').css("opacity",.3);
        $('li.other').css("opacity",.3);
        $('li.technology').css("opacity",.3);
        $('li.coveredface').css("opacity",.3);
        $('#categorylabel').text("silohuette");
          document.getElementById("bigimg").src="img/silohuette_bg.png";
    });

    $('li.silohuette').mouseout(function(){
        $('li.headless').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("");
    });    



    $('li.technology').mouseover(function(){
        $('li.technology').css("opacity","0");
        $('li.noface').css("opacity",.3);
        $('li.headless').css("opacity",.3);
        $('li.other').css("opacity",.3);
        $('li.silohuette').css("opacity",.3);
        $('li.coveredface').css("opacity",.3);
        $('#categorylabel').text("technology");
          document.getElementById("bigimg").src="img/technology_bg.png";
    });

    $('li.technology').mouseout(function(){
        $('li.headless').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("");
    });    



  function doStuff(){
    portrait = window.orientation? window.orientation=='portrait' : true;

    if(portrait && window.innerWidth <= 880){
        $('li.other').mouseover(function(){
        $('li.other').css("opacity",0.7);
        $('li.headless').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("not classified");
        document.getElementById("bigimg").src="img/768bg.png";
    });

    $('li.other').mouseout(function(){
        $('li.headless').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("");
    });

    $('li.noface').mouseover(function(){
        $('li.noface').css("opacity",0.7);
        $('li.coveredface').css("opacity","1");
        $('li.headless').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("No face");
          document.getElementById("bigimg").src="img/768bg.png";
    });

    $('li.noface').mouseout(function(){
        $('li.headless').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("");
    });


    $('li.headless').mouseover(function(){
        $('li.headless').css("opacity",0.7);
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("headless");
          document.getElementById("bigimg").src="img/768bg.png";
    });

    $('li.headless').mouseout(function(){
        $('li.headless').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("");
    });


    $('li.coveredface').mouseover(function(){
        $('li.coveredface').css("opacity",0.7);
        $('li.noface').css("opacity","1");
        $('li.headless').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("covered face");
          document.getElementById("bigimg").src="img/768bg.png";
    });

    $('li.coveredface').mouseout(function(){
        $('li.headless').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("");
    });



    $('li.silohuette').mouseover(function(){
        $('li.silohuette').css("opacity",0.7);
        $('li.noface').css("opacity","1");
        $('li.headless').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('#categorylabel').text("silohuette");
          document.getElementById("bigimg").src="img/768bg.png";
    });

    $('li.silohuette').mouseout(function(){
        $('li.headless').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("");
    });    



    $('li.technology').mouseover(function(){
        $('li.technology').css("opacity",0.7);
        $('li.noface').css("opacity","1");
        $('li.headless').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('#categorylabel').text("technology");
          document.getElementById("bigimg").src="img/768bg.png";
    });

    $('li.technology').mouseout(function(){
        $('li.headless').css("opacity","1");
        $('li.coveredface').css("opacity","1");
        $('li.noface').css("opacity","1");
        $('li.other').css("opacity","1");
        $('li.technology').css("opacity","1");
        $('li.silohuette').css("opacity","1");
        $('#categorylabel').text("");
    });    
    }
}
window.onload=window.onresize=doStuff;
if(window.onorientationchange){
    window.onorientationchange=doStuff;
}



});




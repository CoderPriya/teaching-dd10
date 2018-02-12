
/***********animazione 2*****************/

/*carico le immagini*/

var totalImages2 = 389; 
var images2 = new Array();
for(var i = 1; i < totalImages2; i++) {
  var filename2 = 'img/ani2/an (' + i + ').png'; // Filename of each image
  var img = new Image;
  img.src = filename2;
  images2.push(img);
}

/*creo la canvas*/

var canv2 = document.getElementById('background2');
var context2 = canv2.getContext('2d');



/*disegno sulla canvas le immagini*/

$(document).ready(function(){

    $("#legend2").click(function(){
            $("#legpop2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
    });

    $("#legend2").mouseout(function(){
            $("#legpop2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
    });

    //***************FUNZIONE ANIMAZIONE*********************

   var nonfarlo2 = 0;

  $('#petri2').waypoint(function(direction) {
  if (direction === 'down') {
    
    disable_scroll();
    $('#fix2').show(100);
    

    setTimeout(function() {
        enable_scroll();
      }, 1000);

};

  if(nonfarlo2== 0) {
    $("#petri2").css({"visibility": "hidden"});

      $("#background2").css({"visibility": "visible"});

      nonfarlo2=1;


        var currentLocation = 0;
        context2.drawImage(images2[currentLocation], 0, 0, 670, 670);

        var ani = document.getElementById("background2"); 

     

    //*************** NAVIGATORE IPAD*********************

        var drag = document.getElementById("navigipad2");

       drag.addEventListener('touchmove', function(e) {
              e.preventDefault();
              var touch = e.touches[0];

              /*alert(touch.pageX);*/
              if(touch.pageX >= screen.width - 10){
                $("#novotto2").css({"left" : drag.width - 100});
              }
              else if(touch.pageX <= 20){
                $("#novotto2").css({"left" : 20});
              }
              else{
                  $("#novotto2").css({"left" : touch.pageX - 10});
                }

            //var touchInt = Math.floor( floatvalue );
           // var touchInt = Math.ceil( floatvalue ); 
            var touch = Math.round( touch.pageX - 20 );

    //***************CONVERSIONE RANGE*********************

          function convertToRange(value, srcRange, dstRange){
            // value is outside source range return
            if (value < srcRange[0] || value > srcRange[1]){
              return NaN; 
            }

            var srcMax = srcRange[1] - srcRange[0],
                dstMax = dstRange[1] - dstRange[0],
                adjValue = value - srcRange[0];

            return (adjValue * dstMax / srcMax) + dstRange[0];
          }



          var touchInt = convertToRange(touch,[20,720],[0,388]);
          var touchConv = Math.round( touchInt );

          currentLocation = touchConv;

          setImage(currentLocation);  
          focus();

          }, false);

    //*************** SFONDO NAVIGATORE*********************

          drag.addEventListener('touchstart', function(e) {
              e.preventDefault();
              $("#novotto2").css({"background-color" : "#F9746C"});
            }, false);

          drag.addEventListener('touchend', function(e) {
              e.preventDefault();
              $("#novotto2").css({"background-color" : "#F85F55"});
            }, false);





    //***************FUNZIONE ANIMAZIONE DESKTOP CON SCROLL*********************

      ani.addEventListener("mousewheel", MouseWheelHandler, false);
      ani.addEventListener("DOMMouseScroll", MouseWheelHandler, false);

     function MouseWheelHandler(e) {
          e.preventDefault(); //prevenire lo scroll normale
            // cross-browser wheel delta
          var e =ani.event || e; // old IE support
          
          var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))); /*mi da -1 e 1 a seconda dello scroll*/

          if(delta == -1) currentLocation += 1;
          if(delta == 1) currentLocation -= 1;
          if(currentLocation < 0) currentLocation = 0;

          if(currentLocation > images2.length) currentLocation = images2.length;


          setImage(currentLocation);

          focus();
          scor2();
        
      }


      /*funzione per disegnare l'immagine [currentLocation] sulla canvas*/

      function setImage(newLocation) {

        if(currentLocation<388){
        context2.clearRect ( 0 , 0 , 670, 670 );
        context2.drawImage(images2[newLocation], 0, 0, 670, 670);
        }
        else {
           context2.drawImage(images2[388], 0, 0, 670, 670);
        }
      }


      function focus(){

          if(currentLocation>=0 && currentLocation<128 || currentLocation>162 && currentLocation<228 || currentLocation>267){
            $("#focus2003_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008_22").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2011_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
          }
       
          else if(currentLocation>=128 && currentLocation<145){
            $("#focus2003_2").css({"opacity" : "0.9", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008_22").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2011_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
          }

          else if (currentLocation>=145 && currentLocation<=162){
            $("#focus2003_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008_2").css({"opacity" : "0.9", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008_22").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2011_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
          }

          else if (currentLocation>=228 && currentLocation<250){
            $("#focus2003_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008_22").css({"opacity" : "0.9", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2011_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
          }

          else if (currentLocation>=250 && currentLocation<=267){
            $("#focus2003_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008_22").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2011_2").css({"opacity" : "0.9", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
          }    

      }


      function scor2(){

        if(currentLocation>=0 && currentLocation<22){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor98_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=22 && currentLocation<34){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor99_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=34 && currentLocation<46){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor00_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=46 && currentLocation<80){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor01_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         } 
        else if(currentLocation>=80 && currentLocation<114){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor02_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=114 && currentLocation<148){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor03_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=148 && currentLocation<168){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor04_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }         
        else if(currentLocation>=168 && currentLocation<188){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor05_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=188 && currentLocation<208){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor06_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=208 && currentLocation<226){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor07_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=226 && currentLocation<261){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor08_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=261 && currentLocation<273){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor09_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=273 && currentLocation<306){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor10_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=306 && currentLocation<317){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor11_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=317 && currentLocation<351){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor12_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=351 && currentLocation<374){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor13_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=374 && currentLocation<396){
           $(".scor_2").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor14_2").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
          }    

      }


   
  }}, {
offset: '-97%'
});
});

/*$(document).ready(function(){

  $('#navigipad').draggable();

});*/







  /*  window.addEventListener('mousewheel', function(e) {
      e.preventDefault(); //prevenire lo scroll normale
      console.log(e.wheelDelta);

      var delta = Math.max(-1, Math.min(1, e.wheelDelta));
      if(delta == -1) currentLocation += 1;
      if(delta == 1) currentLocation -= 1;
      if(currentLocation < 0) currentLocation = 0;

      if(currentLocation > images.length) currentLocation = images.length;

      setImage(currentLocation);*/
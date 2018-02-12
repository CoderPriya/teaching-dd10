/***********animazione 1*****************/

/*carico le immagini*/

var totalImages = 389; 
var images = new Array();
for(var i = 1; i < totalImages; i++) {
  var filename = 'img/ani1/an (' + i + ').png'; // Filename of each image
  var img = new Image;
  img.src = filename;
  images.push(img);
}

/*creo la canvas*/

var canv = document.getElementById('background');
var context = canv.getContext('2d');


/*$(canv)
  .width(700)
  .height(700);*/



/*disegno sulla canvas le immagini*/
$(document).ready(function(){

    $("#legend").click(function(){
            $("#legpop").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
    });

    $("#legend").mouseout(function(){
            $("#legpop").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
    });


    //***************FUNZIONE ANIMAZIONE*********************


var nonfarlo = 0;

  $('#def2').waypoint(function(direction) {
  if (direction === 'down') {
    
    disable_scroll();
    $('#fix2').show(100);
    

    setTimeout(function() {
        enable_scroll();
      }, 1000);

};

  if(nonfarlo== 0) {
    $("#petri").css({"visibility": "hidden"});

      $("#background").css({"visibility": "visible"});

      nonfarlo=1;
  

      



        var currentLocation = 0;
        context.drawImage(images[currentLocation], 0, 0, 670, 670);

        var ani = document.getElementById("background"); 

     

    //*************** NAVIGATORE IPAD*********************

        var drag = document.getElementById("navigipad");

       drag.addEventListener('touchmove', function(e) {
              e.preventDefault();
              var touch = e.touches[0];

              /*alert(touch.pageX);*/
              if(touch.pageX >= screen.width - 10){
                $("#novotto").css({"left" : drag.width - 100});
              }
              else if(touch.pageX <= 20){
                $("#novotto").css({"left" : 20});
              }
              else{
                  $("#novotto").css({"left" : touch.pageX - 10});
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
              $("#novotto").css({"background-color" : "#F9746C"});
            }, false);

          drag.addEventListener('touchend', function(e) {
              e.preventDefault();
              $("#novotto").css({"background-color" : "#F85F55"});
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

          if(currentLocation > images.length) currentLocation = images.length;


          setImage(currentLocation);

          focus();
          scor();
      }


      /*funzione per disegnare l'immagine [currentLocation] sulla canvas*/

      function setImage(newLocation) {

        if(currentLocation<388){
        context.clearRect ( 0 , 0 , 670, 670 );
        context.drawImage(images[newLocation], 0, 0, 670, 670);
        }
        else {
           context.drawImage(images[388], 0, 0, 670, 670);
        }
      }


      function focus(){

          if(currentLocation>=0 && currentLocation<56 || currentLocation>70 && currentLocation<226 || currentLocation>239 && currentLocation<310 || currentLocation>324 && currentLocation<360 || currentLocation>=387){
            $("#focus2001").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2012").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2014").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
          }
       
          if(currentLocation>=56 && currentLocation<=70){
            $("#focus2001").css({"opacity" : "0.9", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2012").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2014").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
          }

          else if (currentLocation>=226 && currentLocation<=239){
            $("#focus2001").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008").css({"opacity" : "0.9", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2012").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2014").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
          }

          else if (currentLocation>=310 && currentLocation<=324){
            $("#focus2001").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2012").css({"opacity" : "0.9", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2014").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
          }

          else if (currentLocation>=360 && currentLocation<386){
            $("#focus2001").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2008").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2012").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
            $("#focus2014").css({"opacity" : "0.9", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
          }    

      }


      function scor(){

        if(currentLocation>=0 && currentLocation<22){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor98").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=22 && currentLocation<34){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor99").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=34 && currentLocation<46){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor00").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=46 && currentLocation<80){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor01").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         } 
        else if(currentLocation>=80 && currentLocation<114){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor02").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=114 && currentLocation<148){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor03").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=148 && currentLocation<168){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor04").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }         
        else if(currentLocation>=168 && currentLocation<188){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor05").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=188 && currentLocation<208){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor06").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=208 && currentLocation<226){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor07").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=226 && currentLocation<261){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor08").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=261 && currentLocation<273){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor09").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=273 && currentLocation<306){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor10").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=306 && currentLocation<317){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor11").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=317 && currentLocation<351){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor12").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=351 && currentLocation<374){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor13").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
         }
        else if(currentLocation>=374 && currentLocation<396){
           $(".scor").css({"opacity" : "0", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
           $("#scor14").css({"opacity" : "1", "-webkit-transition" : "opacity 0.2s ease-in", "-moz-transition" : "opacity 0.2s ease-in", "-ms-transition" : "opacity 0.2s ease-in", "transition" : "opacity 0.2s ease-in" });
          }    

      }


   
  }}, {
offset: '-88%'
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
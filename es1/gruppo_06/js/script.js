// Smooth scroll for in page links
// Improved version from Satyajit Sahoo
// @see http://wibblystuff.blogspot.com.au/2014/04/in-page-smooth-scroll-using-css3.html
// Changes:
// - moved css transition detection outside of the event handler
// - detect vertical scrolling value in all cases, not only when css transitions are supported
// - optimise algorithm to determine the new vertical scrolling value
$(function() {
  var $window = $(window),
    $document = $(document),
    transitionSupported = typeof document.body.style.transitionProperty === 'string',
    scrollTime = 1; // scroll time in seconds

  $("a[href*=#]:not([href=#])").on("click", function(e) {
    var target,
      avail,
      scroll,
      deltaScroll;
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      target = $(this.hash);
      target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

      if (target.length) {
        avail = $document.height() - $window.height();

        if (avail > 0) {
          scroll = target.offset().top;
          if (scroll > avail) {
            scroll = avail;
          }
        } else {
          scroll = 0;
        }

        deltaScroll = $window.scrollTop() - scroll;

        // if we don't have to scroll because we're already at the right scrolling level, 
        if (!deltaScroll) { // do nothing
          return;
        }

        e.preventDefault();
        if (transitionSupported) {
          $("html").css({
            "margin-top": deltaScroll + "px",
            "transition": scrollTime + "s ease-in-out"
          }).data("transitioning", scroll);
        } else {
          $("html, body").stop(true, true) // stop potential other jQuery animation (assuming we're the only one doing it)
          .animate({
            scrollTop: scroll + 'px'
          }, scrollTime * 1000);
          return;
        }
      }
    }
  });

  if (transitionSupported) {
    $("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function(e) {
      var $this = $(this),
        scroll = $this.data("transitioning");
      if (e.target === e.currentTarget && scroll != null) {
        $this.removeAttr("style").data("transitioning", null);
        $("html, body").scrollTop(scroll);
      }
    });
  }
});

$(document).ready(function () {
        $('ul.nav > li').click(function (e) {
            e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');                
        });            
    });



/*  $(function () {
    var currentHash = ""
        $(document).scroll(function () {
        $('.hash').each(function () {
            var top = window.pageYOffset;
            var distance = top - $(this).offset().top;
            var hash = $(this).attr('href');

            if (distance===0 && currentHash != hash) {
                window.location.hash = (hash);
                currentHash = hash;
            }
        });
    });
});*/





$(document).ready(function(){

            $("#nav1").mouseover(function(){
             $("#nav1").css({"background-color": "#11756F"});
          }).mouseout(function(){
             $("#nav1").css({"background-color": "#569ea6"});
          });

      $("#nav2").mouseover(function(){
             $("#nav2").css({"background-color": "#11756F"});
          }).mouseout(function(){
             $("#nav2").css({"background-color": "#569ea6"});
          });

      $("#nav3").mouseover(function(){

             $("#nav3").css({"background-color": "#11756F"});
          }).mouseout(function(){
             $("#nav3").css({"background-color": "#569ea6"});
          });

      $("#nav4").mouseover(function(){

             $("#nav4").css({"background-color": "#11756F"});
          }).mouseout(function(){
             $("#nav4").css({"background-color": "#569ea6"});
          });

      $("#nav5").mouseover(function(){

             $("#nav5").css({"background-color": "#11756F"});
          }).mouseout(function(){
             $("#nav5").css({"background-color": "#569ea6"});
          });

      $("#nav6").mouseover(function(){
             $("#nav6").css({"background-color": "#11756F"});
          }).mouseout(function(){
             $("#nav6").css({"background-color": "#569ea6"});
          });   

      $("#nav7").mouseover(function(){
             $("#nav7").css({"background-color": "#11756F"});
          }).mouseout(function(){
             $("#nav7").css({"background-color": "#569ea6"});
          });

      $("#nav8").mouseover(function(){
             $("#nav8").css({"background-color": "#11756F"});
          }).mouseout(function(){
             $("#nav8").css({"background-color": "#569ea6"});
          });

          
      $("#sec1").mouseenter(function(){
             $("#nav1").css({"background-color": "#11756F"});
             $("#nav2").css({"background-color": "#569ea6"});
             $("#nav3").css({"background-color": "#569ea6"});
             $("#nav4").css({"background-color": "#569ea6"});
             $("#nav5").css({"background-color": "#569ea6"});
             $("#nav6").css({"background-color": "#569ea6"});
             $("#nav7").css({"background-color": "#569ea6"});
             $("#nav8").css({"background-color": "#569ea6"});

          });

      $("#sec2").mouseenter(function(){
             $("#nav1").css({"background-color": "#569ea6"});
             $("#nav2").css({"background-color": "#11756F"});
             $("#nav3").css({"background-color": "#569ea6"});
             $("#nav4").css({"background-color": "#569ea6"});
             $("#nav5").css({"background-color": "#569ea6"});
             $("#nav6").css({"background-color": "#569ea6"});
             $("#nav7").css({"background-color": "#569ea6"});
             $("#nav8").css({"background-color": "#569ea6"});
          });

      $("#sec3").mouseenter(function(){
             $("#nav1").css({"background-color": "#569ea6"});
             $("#nav2").css({"background-color": "#569ea6"});
             $("#nav3").css({"background-color": "#11756F"});
             $("#nav4").css({"background-color": "#569ea6"});
             $("#nav5").css({"background-color": "#569ea6"});
             $("#nav6").css({"background-color": "#569ea6"});
             $("#nav7").css({"background-color": "#569ea6"});
             $("#nav8").css({"background-color": "#569ea6"});
          });

      $("#sec4").mouseenter(function(){
             $("#nav1").css({"background-color": "#569ea6"});
             $("#nav2").css({"background-color": "#569ea6"});
             $("#nav3").css({"background-color": "#569ea6"});
             $("#nav4").css({"background-color": "#11756F"});
             $("#nav5").css({"background-color": "#569ea6"});
             $("#nav6").css({"background-color": "#569ea6"});
             $("#nav7").css({"background-color": "#569ea6"});
             $("#nav8").css({"background-color": "#569ea6"});
          });

      $("#sec5").mouseenter(function(){
             $("#nav1").css({"background-color": "#569ea6"});
             $("#nav2").css({"background-color": "#569ea6"});
             $("#nav3").css({"background-color": "#569ea6"});
             $("#nav4").css({"background-color": "#569ea6"});
             $("#nav5").css({"background-color": "#11756F"});
             $("#nav6").css({"background-color": "#569ea6"});
             $("#nav7").css({"background-color": "#569ea6"});
             $("#nav8").css({"background-color": "#569ea6"});
          });

      $("#sec6").mouseenter(function(){
             $("#nav1").css({"background-color": "#569ea6"});
             $("#nav2").css({"background-color": "#569ea6"});
             $("#nav3").css({"background-color": "#569ea6"});
             $("#nav4").css({"background-color": "#569ea6"});
             $("#nav5").css({"background-color": "#569ea6"});
             $("#nav6").css({"background-color": "#11756F"});
             $("#nav7").css({"background-color": "#569ea6"});
             $("#nav8").css({"background-color": "#569ea6"});
          });               
      $("#sec7").mouseenter(function(){
             $("#nav1").css({"background-color": "#569ea6"});
             $("#nav2").css({"background-color": "#569ea6"});
             $("#nav3").css({"background-color": "#569ea6"});
             $("#nav4").css({"background-color": "#569ea6"});
             $("#nav5").css({"background-color": "#569ea6"});
             $("#nav6").css({"background-color": "#569ea6"});
             $("#nav7").css({"background-color": "#11756F"});
             $("#nav8").css({"background-color": "#569ea6"});
          });

      $("#sec8").mouseenter(function(){
             $("#nav1").css({"background-color": "#569ea6"});
             $("#nav2").css({"background-color": "#569ea6"});
             $("#nav3").css({"background-color": "#569ea6"});
             $("#nav4").css({"background-color": "#569ea6"});
             $("#nav5").css({"background-color": "#569ea6"});
             $("#nav6").css({"background-color": "#569ea6"});
             $("#nav7").css({"background-color": "#569ea6"});
             $("#nav8").css({"background-color": "#11756F"});
          });


      });







/*grafico italia*/
$(document).ready(function(){

      $(".nord").mouseover(function(){
         $("#italia").css({"opacity" : "0", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
         $("#italiaN").css({"opacity" : "1", "-webkit-transition" : "opacity 0.1s ease-in", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
         $(".viz32").css({"opacity" : "0", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
         $(".viz32_1").css({"opacity" : "1", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
     }).mouseout(function(){
         $("#italia").css({"opacity": "1", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in"});
         $("#italiaN").css({"opacity" : "0", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in"});
         $(".viz32").css({"opacity" : "1", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in"});
         $(".viz32_1").css({"opacity" : "0", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
     });


         $(".centro").mouseover(function(){
         $("#italia").css({"opacity" : "0", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
         $("#italiaC").css({"opacity" : "1", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in"});
         $(".viz32").css({"opacity" : "0", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
         $(".viz32_2").css({"opacity" : "1", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });

     }).mouseout(function(){
         $("#italia").css({"opacity": "1", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in"});
         $("#italiaC").css({"opacity" : "0", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in"});
         $(".viz32").css({"opacity" : "1", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
         $(".viz32_2").css({"opacity" : "0", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
     });


     $(".sud").mouseover(function(){
         $("#italia").css({"opacity" : "0", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
         $("#italiaS").css({"opacity" : "1", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in"});
         $(".viz32").css({"opacity" : "0", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
         $(".viz32_3").css({"opacity" : "1", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
     }).mouseout(function(){
         $("#italia").css({"opacity" : "1", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
         $("#italiaS").css({"opacity" : "0", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in"});
          $(".viz32").css({"opacity" : "1", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
         $(".viz32_3").css({"opacity" : "0", "-moz-transition" : "opacity 0.1s ease-in", "-ms-transition" : "opacity 0.1s ease-in", "transition" : "opacity 0.1s ease-in" });
     });
});

/*fine grafico italia*/



/*navbar ranking*/

$(document).ready(function(){

      $("#bott1").mouseover(function(){
         $("#allRank").css({"background-color" : "#999999" });

         }).mouseout(function(){
             $("#allRank").css({"background-color" : "#bbbbbb" });

         }).click(function(){
             $(".viz7").css({"opacity": "1"});
             $(".viz7_2").css({"opacity": "0"});
             $(".viz7_3").css({"opacity": "0"});
             $(".viz7_4").css({"opacity": "0"});
          });


      $("#bott2").mouseover(function(){
         $("#cosRank").css({"background-color" : "#444444" });

         }).mouseout(function(){
             $("#cosRank").css({"background-color" : "black" });

         }).click(function(){
             $(".viz7").css({"opacity": "0"});
             $(".viz7_2").css({"opacity": "1"});
             $(".viz7_3").css({"opacity": "0"});
             $(".viz7_4").css({"opacity": "0"});
     });


     $("#bott3").mouseover(function(){
         $("#hiRank").css({"background-color" : "#41777d" });

         }).mouseout(function(){
             $("#hiRank").css({"background-color" : "#569ea6" });
       
         }).click(function(){
             $(".viz7").css({"opacity": "0"});
             $(".viz7_2").css({"opacity": "0"});
             $(".viz7_3").css({"opacity": "1"});
             $(".viz7_4").css({"opacity": "0"});
     });


     $("#bott4").mouseover(function(){
         $("#lowRank").css({"background-color" : "#aa0c15" });

         }).mouseout(function(){
             $("#lowRank").css({"background-color" : "#e3101c" });

         }).click(function(){
             $(".viz7").css({"opacity": "0"});
             $(".viz7_2").css({"opacity": "0"});
             $(".viz7_3").css({"opacity": "0"});
             $(".viz7_4").css({"opacity": "1"});
     });


});

/*fine navbar ranking*/


/*

    $(".sud").mouseover(function(){
         $("#italia").css({"background" : "url('img/italia_4.png')", "background-size": "92% auto", "background-repeat": "no-repeat"});
          $(".viz32").css({"background" : "url('img/barre 4.png')", "background-size": "100% auto", "background-repeat": "no-repeat"})
    }).mouseout(function(){
         $("#italia").css({"background": "url('img/italia_1.png')", "background-size": "92% auto", "background-repeat": "no-repeat"});
         $(".viz32").css({"background" : "url('img/barre 1.png')", "background-size": "100% auto", "background-repeat": "no-repeat"})
     });
});
*/


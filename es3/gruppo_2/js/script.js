/** if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
}

function error(msg) {  
  // console.log(msg);
}

function success(position) {
  
  var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=true";
  
  geodata = position.coords;
  
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',

    success: function(data) {
      if(data.status === "OK")

      {
        var address = data.results[1].formatted_address;
        $(".geo")
        .show()
        .html("<p>You are near <strong>" + address + ".</strong></p>");   
        
        // INSERIRE QUI LA CLASSE DOVE APPENDERE LA DISTANZA
        //console.log(data); 
        addDistances($('.distance'), position.coords);
      }

    },

    error: function(jqXHR, textStatus, errorThrown) {
      //console.log(errorThrown);
    }
  });
}

function addDistances(distance)
{
  $(distance).each(function() {
    var lat = $(this).data("lat"),
        lng = $(this).data("lng"),
        d = getDistance(lat, geodata.latitude, lng, geodata.longitude),
        km = (Math.floor(d * 100)/100),
        mi = (Math.floor((d*0.621371) * 100)/100);

    $(this)
      .attr("data-distance", d)
      .append(" <span><p>And you are <strong>" + km + " Km - " + mi + " Miles</strong> away from detox.</p></span>");
  });
}

// Haversine formula
// http://www.movable-type.co.uk/scripts/latlong.html
function getDistance(lat1, lat2, lon1, lon2) {
  var R = 6371, // km
      dLat = (lat2-lat1).toRad(),
      dLon = (lon2-lon1).toRad();
  
  lat1 = parseFloat(lat1).toRad();
  lat2 = parseFloat(lat2).toRad();

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +      
          Math.sin(dLon/2) * Math.sin(dLon/2) *
          Math.cos(lat1) * Math.cos(lat2),
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)),
      d = R * c;
  return d;
}

// http://stackoverflow.com/a/5260472/28004  
/** Converts numeric degrees to radians **/
//if (typeof(Number.prototype.toRad) === "undefined") {
/**)  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  };
//} **/

// Tooltip app
$(document).ready(function() {
$('.app').tooltipster({position:"right"});
});

$(function() {
    $('#app01').tooltipster({
        interactive:'true',
        position: 'bottom-right',
        offsetX: '-5',
        offsetY: '50',
        content: $('<center><a href="https://play.google.com/store/apps/details?id=co.offtime.kit" target="blank"><img src="img/app_10.png" width="60px"></a><span><b>(OFFTIME)</br>Life unplugged</b></br>8860 downloads </p></span></center>')
    });
});

$(function() {
    $('#app02').tooltipster({
        interactive:'true',
        position: 'bottom-right',
        offsetX: '-15',
        offsetY: '5',              
        content: $('<center><a href="https://play.google.com/store/apps/details?id=gr.vanderbox.getalife" target="blank"><img src="img/app_09.png" width="60px"></a><span><b>Get a Life</b></br>7 downloads</span></center>')
    });
});

$(function() {
    $('#app03').tooltipster({
        interactive:'true',
        position: 'bottom-right',
        offsetX: '-10',
        offsetY: '5',
        content: $('<center><a href="https://play.google.com/store/apps/details?id=com.bigredstop" target="blank"><img src="img/app_08.png" width="60px"></a><span><b>The Big Red Stop</b></br>16 downloads</span></center>')
    });
});

$(function() {
    $('#app04').tooltipster({
        interactive:'true',
        position: 'bottom-right',
        offsetX: '-10',
        offsetY: '5',
        content: $('<center><a href="https://play.google.com/store/apps/details?id=it.adinfo.idont" target="blank"><img src="img/app_07.png" width="60px"></a> <span><b>I Don&#39;t</b></br>60 downloads </span>')
    });
});

$(function() {
    $('#app05').tooltipster({
        interactive:'true',
        position: 'bottom-right',
        offsetX: '-10',
        offsetY: '10',
        content: $('<center><a href="https://play.google.com/store/apps/details?id=co.offtime.swisscom.mytime" target="blank"> <img src="img/app_06.png" width="60px"> </a> <span><b>My Time</b></br>209 downloads </span>')
    });
});

$(function() {
    $('#app06').tooltipster({
        interactive:'true',
        position: 'bottom-right',
        offsetX: '-10',
        offsetY: '5',
        content: $('<center><a href="https://play.google.com/store/apps/details?id=com.nvs.digitaldetox" target="blank"><img src="img/app_05.png" width="60px"> </a> <span><b>Digital Detach</b></br>17 downloads </span>')
    });
});

$(function() {
    $('#app07').tooltipster({
        interactive:'true',
        position: 'bottom-right',
        offsetX: '-10',
        offsetY: '5',
        content: $('<center><a href="https://play.google.com/store/apps/details?id=com.app_unplug.layout" target="blank"><img src="img/app_04.png" width="60px"> </a> <span><b>Unplug</b></br>9 downloads </span>')
    });
});

$(function() {
    $('#app08').tooltipster({
        interactive:'true',
        position: 'bottom-right',
        offsetX: '-10',
        offsetY: '5',
        content: $('<center><a href="https://play.google.com/store/apps/details?id=org.unplugandreconnect.android" target="blank"> <img src="img/app_03.png" width="60px"> </a> <span><b>Unplug and Reconnect</b></br>25 downloads </span>')
    });
});

$(function() {
    $('#app09').tooltipster({
        interactive:'true',
        position: 'bottom-left',
        offsetX: '10',
        offsetY: '5',
        content: $('<center><a href="https://play.google.com/store/apps/details?id=com.digitalvacay.dv" target="blank"> <img src="img/app_02.png" width="60px"> </a> <span><b>Digital Vacay</b></br>1 download </span>')
    });
});

$(function() {
    $('#app10').tooltipster({
        interactive:'true',
        position: 'bottom-left',
        offsetX: '15',
        offsetY: '5',
        content: $('<center><a href="https://play.google.com/store/apps/details?id=org.tirl.digitaldetox" target="blank"> <img src="img/app_01.png" width="60px"> </a> <span><b>Digital Detox</b></br>19 downloads </span>')
    });
});

/* affix the navbar after scroll below header */
$('#nav').affix({
    offset: {
      top: $('#slide0').height()-$('#nav').height()
    }
}); 

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav', offset: 100 })

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(e){
    e.preventDefault();
  var link = $(this).attr('href');
  var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi+"px"},700);
});

/* Smooth scrolling for arrow */
$('#arrow a').click(function(e){
    e.preventDefault();
  var link = $(this).attr('href');
  var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi+"px"},700);
});

// Cartogramma -->
$(document).ready(function() {
  $('.carto').tooltipster({position:"right"});
});

/* Legenda cartogramma 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 2000) {
        $(".legend").addClass("legend-fixed", 'fadeInTop');
    } else {
        $(".legend").removeClass("legend-fixed", 'fadeInTop');
    }
});

$('#cartogramma').nextAll('.legend-fixed').remove();*/

/* Img change on click merging */
$(function() {
 $('.merging1').mousedown(function(){
   $(".merging1").attr('src',"img/highlight_merging_1.jpg");
 });
  $('.merging1').mouseup(function(){
   $(".merging1").attr('src',"img/merging_1.png");
 });
});

$(function() {
 $('.merging2').mousedown(function(){
   $(".merging2").attr('src',"img/highlight_merging_2.jpg");
 });
  $('.merging2').mouseup(function(){
   $(".merging2").attr('src',"img/merging_2.png");
 });
});

$(function() {
 $('.merging3').mousedown(function(){
   $(".merging3").attr('src',"img/highlight_merging_3.jpg");
 });
  $('.merging3').mouseup(function(){
   $(".merging3").attr('src',"img/merging_3.png");
 });
});

/* Treemap */ 
// Tech
$(function() {
  $("#tech").hover(function() {
    $("#tech").stop().animate({ opacity: 0 }, "fast"); //on mouse hover
  },
  function() {
    $("#tech").stop().animate({ opacity: 1.0 }, "fast"); //on mouse out
  });
});

$(function() {
  $("#tech").hover(function() {
    $("#tech-text").hide("fast"); //on mouse hover
  },
  function() {
    $("#tech-text").show("fast"); //on mouse out
  });
});

// Drug
$(function() {
  $("#drug").hover(function() {
    $("#drug").stop().animate({ opacity: 0 }, "fast"); //on mouse hover
  },
  function() {
    $("#drug").stop().animate({ opacity: 1.0 }, "fast"); //on mouse out
  });
});

$(function() {
  $("#drug").hover(function() {
    $("#drug-text").hide("fast"); //on mouse hover
  },
  function() {
    $("#drug-text").show("fast"); //on mouse out
  });
});

// Philo
$(function() {
  $("#philo").hover(function() {
    $("#philo").stop().animate({ opacity: 0 }, "fast"); //on mouse hover
  },
  function() {
    $("#philo").stop().animate({ opacity: 1.0 }, "fast"); //on mouse out
  });
});

$(function() {
  $("#philo").hover(function() {
    $("#philo-text").hide("fast"); //on mouse hover
  },
  function() {
    $("#philo-text").show("fast"); //on mouse out
  });
});

// Neutral
$(function() {
  $("#neutral").hover(function() {
    $("#neutral").stop().animate({ opacity: 0 }, "fast"); //on mouse hover
  },
  function() {
    $("#neutral").stop().animate({ opacity: 1.0 }, "fast"); //on mouse out
  });
});

$(function() {
  $("#neutral").hover(function() {
    $("#neutral-text").hide("fast"); //on mouse hover
  },
  function() {
    $("#neutral-text").show("fast"); //on mouse out
  });
});

// Medical
$(function() {
  $("#medical").hover(function() {
    $("#medical").stop().animate({ opacity: 0 }, "fast"); //on mouse hover
  },
  function() {
    $("#medical").stop().animate({ opacity: 1.0 }, "fast"); //on mouse out
  });
});

/*$(function() {
  $("#medical").hover(function() {
    $("#medical-text").hide("fast"); //on mouse hover
  },
  function() {
    $("#medical-text").show("fast"); //on mouse out
  });
});*/

// Family
$(function() {
  $("#family").hover(function() {
    $("#family").stop().animate({ opacity: 0 }, "fast"); //on mouse hover
  },
  function() {
    $("#family").stop().animate({ opacity: 1.0 }, "fast"); //on mouse out
  });
});

$(function() {
  $("#family").hover(function() {
    $("#family-text").hide("fast"); //on mouse hover
  },
  function() {
    $("#family-text").show("fast"); //on mouse out
  });
});


/* Audio sea */
$(function(){
    $('#sea').each(function(){
      this.volume=1
      this.play()
    })
  })

  var isLoud=false

  $(window).scroll(function(){
    var loud = $(window).scrollTop()<650; 
    if ( loud !== isLoud){
      console.log('changing',$(window).scrollTop())
      if (isLoud) 
        $('#sea').stop().animate({volume:.0},1000)
      else
        $('#sea').stop().animate({volume:.4},1000)
    isLoud = loud
    }
  });

/* Audio pronunciation */
$(document).ready(function(){                    
  $("#pronunciation").click(function() {
              if (!$("#digitaldetox")[0].paused)
              {
                  $("#digitaldetox")[0].pause();           
              }
              else
                  {
                      $("#digitaldetox")[0].play();           
                  }
          });
});
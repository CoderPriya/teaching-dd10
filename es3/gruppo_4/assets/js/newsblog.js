var dataset = [60,28,22,20,20,15,14,14,12,12,11,11,11,11,9,9,9,9,9,9];

var dataset2 = [42,32,29,23,18,18,18,17,14,14,14,14,12,12,12,12,12,12,12,12];

var dataset3 = [100,78,74,60,45,42,31,31,28,26,26,23,23,23,22,20,20,20,18,18];

var dataset4 = [42,35,26,15,15,15,14,14,12,12,11,11,11,11,9,9,9,9,9,9];

var dataset5 = [23,22,17,11,11,9,9,9,9,9,9,8,8,8,8,8,6,6,6,6];

var dataset6 = [28,26,18,14,14,14,14,14,12,12,11,9,9,9,9,8,8,8,8,8];

var dataset7 = [28,23,17,14,14,12,11,9,8,8,8,8,8,6,6,6,6,6,6,5];

var dataset8 = [38,28,17,15,15,15,15,11,11,9,9,9,8,6,6,6,6,6,6,6];

var dataset9 = [29,22,20,17,17,15,15,12,11,11,9,9,9,9,8,8,8,8,8,8];

var dataset10 = [40,38,23,22,18,18,18,18,17,17,17,17,15,15,15,15,14,12,12,11];


$("li.grafico").on("mouseover",function(){
  var cont = $(this).find(".content").html();
  console.log(cont);
  
  
  $('li.grafico').find(".content").css("color","#d6d6d6");

  $('li.grafico').find(".content.sentimentale").filter(':contains('+cont+')')
  .css("color","#e35176");

    $('li.grafico').find(".content.tecnico").filter(':contains('+cont+')')
  .css("color","#2e5262");




   $('li.grafico').find(".content")
   .parent().find(".value")
   .css("background-color","#d6d6d6");

   $('li.grafico').find(".content.sentimentale").filter(':contains('+cont+')')
   .parent().find(".value.v-sentimentale")
   .css("background-color","#e35176");

   $('li.grafico').find(".content.tecnico").filter(':contains('+cont+')')
   .parent().find(".value.v-tecnico")
   .css("background-color","#2e5262");




  $("li.grafico").on('mouseout',function(){
    $('li.grafico').find(".content.tecnico").css("color","#2e5262");
    $('li.grafico').find(".content.sentimentale").css("color","#e35176");

    $('li.grafico').find(".value.v-tecnico")
   .css("background-color","#2e5262");
   $('li.grafico').find(".value.v-sentimentale")
   .css("background-color","#e35176");
  })


})

  dataset.forEach(function(e,i){

    $("li.grafico.colonna1:nth-of-type("+(i+1)+")").find(".value").css("width",e+"px");
  }) 

  dataset2.forEach(function(e,i){

    $("li.grafico.colonna2:nth-of-type("+(i+1)+")").find(".value").css("width",e+"px");
  })

  dataset3.forEach(function(e,i){

    $("li.grafico.colonna3:nth-of-type("+(i+1)+")").find(".value").css("width",e+"px");
  }) 

  dataset4.forEach(function(e,i){

    $("li.grafico.colonna4:nth-of-type("+(i+1)+")").find(".value").css("width",e+"px");
  }) 

  dataset5.forEach(function(e,i){

    $("li.grafico.colonna5:nth-of-type("+(i+1)+")").find(".value").css("width",e+"px");
  }) 

  dataset6.forEach(function(e,i){

    $("li.grafico.colonna6:nth-of-type("+(i+1)+")").find(".value").css("width",e+"px");
  }) 

  dataset7.forEach(function(e,i){

    $("li.grafico.colonna7:nth-of-type("+(i+1)+")").find(".value").css("width",e+"px");
  })

  dataset8.forEach(function(e,i){

    $("li.grafico.colonna8:nth-of-type("+(i+1)+")").find(".value").css("width",e+"px");
  }) 

  dataset9.forEach(function(e,i){

    $("li.grafico.colonna9:nth-of-type("+(i+1)+")").find(".value").css("width",e+"px");
  })  

  dataset10.forEach(function(e,i){

    $("li.grafico.colonna10:nth-of-type("+(i+1)+")").find(".value").css("width",e+"px");
  }) 
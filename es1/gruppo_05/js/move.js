//Bottoni Parte 1
      function changeimg1() {
        
          document.getElementById("g1_2").style.display = "none";
          document.getElementById("g1_1").style.display = "block";
      }

      function changeimg2() {
        
          document.getElementById("g1_1").style.display = "none";
          document.getElementById("g1_2").style.display = "block";
      }

    


//Bottoni Parte 4
      function changeimg4a() {
        
          document.getElementById("g4a").style.display = "block";
          document.getElementById("g4").style.display = "none";
      }

      function changeimg4b() {
        
          document.getElementById("g4a").style.display = "none";
          document.getElementById("g4").style.display = "block";
      }




//Funzione per scroll barra laterale

      window.addEventListener("scroll",function() { 
        if(window.scrollY > 1200 && window.scrollY < 5100){
            $('.legenda').slideDown(200);
        }
      else {
        $('.legenda').slideUp(200);
        }
      },false);

      //active button
      $(".button").click(function() {
        $.ajax('/forward');
        $('.button').removeClass('active');
        $(this).addClass('active');
      });


      //Funzione per cambiare immagini parte Conclusiva ONMOUSEOVER

      /*function up() {
        
          document.getElementById("g_f1").style.display = "block";
          document.getElementById("g_f").style.display = "none";
          document.getElementById("g_f-b1").style.display = "none";
          document.getElementById("g_f-a1").style.display = "none";
          document.getElementById("g_f-c1").style.display = "none";

      }

      function down() {
        
          document.getElementById("g_f1").style.display = "none";
          document.getElementById("g_f").style.display = "block";
          document.getElementById("g_f-b1").style.display = "none";
          document.getElementById("g_f-a1").style.display = "none";
          document.getElementById("g_f-c1").style.display = "none";
      }*/

      function upA() {
        
          document.getElementById("g_f-a1").style.display = "block";
          document.getElementById("g_f").style.display = "none";
          document.getElementById("g_f-b1").style.display = "none";
          document.getElementById("g_f1").style.display = "none";
          document.getElementById("g_f-c1").style.display = "none";
      }

      function upB() {
        
          document.getElementById("g_f-b1").style.display = "block";
          document.getElementById("g_f").style.display = "none";
          document.getElementById("g_f-a1").style.display = "none";
          document.getElementById("g_f1").style.display = "none";
          document.getElementById("g_f-c1").style.display = "none";
      }

      function upC() {
        
          document.getElementById("g_f-c1").style.display = "block";
          document.getElementById("g_f").style.display = "none";
          document.getElementById("g_f-a1").style.display = "none";
          document.getElementById("g_f1").style.display = "none";
          document.getElementById("g_f-b1").style.display = "none";
      }

      function downA() {
        
          document.getElementById("g_f-a1").style.display = "none";
          document.getElementById("g_f").style.display = "block";
          document.getElementById("g_f-b1").style.display = "none";
          document.getElementById("g_f1").style.display = "none";
          document.getElementById("g_f-c1").style.display = "none";
      }

      function downB() {
        
          document.getElementById("g_f-b1").style.display = "none";
          document.getElementById("g_f").style.display = "block";
          document.getElementById("g_f-a1").style.display = "none";
          document.getElementById("g_f1").style.display = "none";
          document.getElementById("g_f-c1").style.display = "none";
      }

      function downC() {
        
          document.getElementById("g_f-c1").style.display = "none";
          document.getElementById("g_f").style.display = "block";
          document.getElementById("g_f-a1").style.display = "none";
          document.getElementById("g_f1").style.display = "none";
          document.getElementById("g_f-b1").style.display = "none";
      }

       $('#immaginona').on('mouseover', function(event){
          $('#g_f1').show();
          $('#g_f').hide();
          $('#g_f-b1').hide();
          $('#g_f-a1').hide();
          $('#g_f-c1').hide();
      });
      
      $('#immaginona').on('mouseout', function(event){
          $('#g_f1').hide();
          $('#g_f').show();
          $('#g_f-b1').hide();
          $('#g_f-a1').hide();
          $('#g_f-c1').hide();
      });
      

//Foto MouseOver


      $('#Mary').on('mouseover', function(event){
          $('#M').show();
          $('#M_b').hide();
      });
      
      $('#Mary').on('mouseout', function(event){
          $('#M_b').show();
          $('#M').hide();
      });


      $('#Fra').on('mouseover', function(event){
          $('#F').show();
          $('#F_b').hide();
      });
      
      $('#Fra').on('mouseout', function(event){
          $('#F_b').show();
          $('#F').hide();
      });


      $('#Chiara').on('mouseover', function(event){
          $('#C').show();
          $('#C_b').hide();
      });
      
      $('#Chiara').on('mouseout', function(event){
          $('#C_b').show();
          $('#C').hide();
      });


      $('#Giulia').on('mouseover', function(event){
          $('#G').show();
          $('#G_b').hide();
      });
      
      $('#Giulia').on('mouseout', function(event){
          $('#G_b').show();
          $('#G').hide();
      });


      $('#Ilaria').on('mouseover', function(event){
          $('#I').show();
          $('#I_b').hide();
      });
      
      $('#Ilaria').on('mouseout', function(event){
          $('#I_b').show();
          $('#I').hide();
      });


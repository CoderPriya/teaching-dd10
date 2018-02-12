$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thPage', '6thPage', '7thPage', 
				'8thPage', 
				'9thPage', '10thPage', '11thPage', '12thPage', '13thPage', '14thPage', '15thPage', '16thPage', 
				'17thPage', '18thPage'],
				scrollingSpeed: 700, 

				afterLoad: function(anchorLink, index){
            //var loadedSection = $(this);

            //using index
            if(index==1){
            $("#topp").css("color","white");} 
            else {$("#topp").css("color","#1CA58A");}

            if(index == 2 || index == 3 || index == 4 || index == 5){
            $("#uno").css("background-color","white");} 
            else {$("#uno").css("background-color","#1CA58A");} 
            
            if(index == 6 || index == 7 || index == 8 || index == 9){
            $("#due").css("background-color","white");} 
            else {$("#due").css("background-color","#1CA58A");}
            
            if(index == 10 || index == 11 || index == 12 ){
            $("#tre").css("background-color","white");
            $("#body").addClass("snowden");} 
            else {$("#tre").css("background-color","#1CA58A");
             $("#body").removeClass("snowden");}
            
            if(index == 13 || index == 14 || index == 15 || index == 16){
            $("#quattro").css("background-color","white");} 
            else {$("#quattro").css("background-color","#1CA58A");}

            if(index == 17){
            $("#cinque").css("background-color","white");} 
            else {$("#cinque").css("background-color","#1CA58A");} 

            if(index == 18){
            $("#credits").css("color","white");} 
            else {$("#credits").css("color","#1CA58A");} 

            /*if(index == 1 || index == 2){
            $("#menu").css("opacity","0");} 
            else {$("#menu").css("opacity","1");}*/

            if(index == 4 || index == 5 || index == 6){
            $("#body").addClass("surveillance");} 
            else { $("#body").removeClass("surveillance");}



            if(index == 1 || index == 2){
            $("#menu").animate({right: '-80px', opacity: '0'}, "slow");} 
            else {$("#menu").animate({right: '0px', opacity: '1'}, "slow");}

            if(index == 1 || index == 2){
            $("#cd-vertical-nav").animate({right: '-70px', opacity: '0'}, "slow");} 
            else {$("#cd-vertical-nav").animate({right: '27px', opacity: '1'}, "slow");}

            //Lingua
            if(index == 1 || index == 2){
            $("#it-en-big").animate({top: '10px', opacity: '1'}, "slow");} 
            else {$("#it-en-big").animate({top: '-20px', opacity: '0'}, "slow");}

            if(index == 1 || index == 2){
            $("#it-en").animate({top: '-30px', opacity: '0'}, "slow");} 
            else {$("#it-en").animate({top: '10px', opacity: '1'}, "slow");}

            //Cit Obama vs Snowden
            if(index == 12){
            $("#obama-cit").animate({marginLeft: '0px', opacity: '1'}, {duration: 1000}, "slow");} 
            else {$("#obama-cit").animate({marginLeft: '-40px', opacity: '0'}, "slow");}

            if(index == 12){
            $("#snowden-cit").animate({marginRight: '0px', opacity: '1'}, {duration: 1000}, "slow");} 
            else {$("#snowden-cit").animate({marginRight: '-40px', opacity: '0'}, "slow");}

            if(index == 9){
            $(".example1").animate({opacity: '1'});} 
            else {$(".example1").animate({opacity: '0'});}
            
            if(index == 9){
            $(function(){
                  $(".example1").airport(["September 11, 2001"], {loop: false});});
            }




            if(index == 11){
            $(".example2").animate({opacity: '1'});} 
            else {$(".example2").animate({opacity: '0'});}
            
            if(index == 11){
            $(function(){
                  $(".example2").airport(["June 6, 2013"], {loop: false});});
            }

            


            //using anchorLink
            if(anchorLink == ''){
                alert("Section 2 ended loading");
            }
        }
			});

		});
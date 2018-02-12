    var controller;
    $(document).ready(function($) {
            console.log(window.innerWidth);
        //  && !(window.devicePixelRatio > 1) questo codice esclude i retina

        // 768x1024 portrait ipad - questo era ok sara 
        if (window.innerHeight > window.innerWidth) {
            // alert("Please use Landscape!");
            // init controller
                        // init controller
            var altezzatimefase1 = $('#timefase1').outerHeight(true);
            var altezzacontainerfase1 = $('#containerfase1').outerHeight(true);
            var altezzacontainerfase2 = $('#containerfase2').outerHeight(true);
            var altezzacontainerfase3 = $('#containerfase3').outerHeight(true);
            var somma2piu3 = altezzacontainerfase2+altezzacontainerfase3;
            var altezzatimefase3 = $('#timefase3').outerHeight(true);
            var smetti = altezzacontainerfase3/2;
            console.log('numero giusto '+smetti);
            var altezzacontainerfase4 = $('#containerfase4').outerHeight(true);
            var altezzapezzettino = $('#pezzettino').outerHeight(true);
            var sommaconpezzettino = altezzacontainerfase4+(altezzapezzettino*3);
            var altezzatimefase5 = $('#timefase5').outerHeight(true);
            console.log(altezzatimefase1);
            console.log(altezzacontainerfase2);
            console.log(altezzacontainerfase3);
            console.log('la somma di fase 2 e 3 fa'+somma2piu3);
            console.log('timefase3 fa '+altezzatimefase1);
            console.log('containerfase4 fa '+altezzacontainerfase4);
            var controller = new ScrollMagic();
            

 // show indicators (requires debug extension)
            /*pacco prescelto prima parte */
            var scene1 = new ScrollScene({triggerElement: "#timefase1", duration: altezzacontainerfase2, offset:altezzatimefase1})
                .setPin("#prescelto", {pushFollowers: false})
                .addTo(controller);
            /*pacco prescelto si sblocca e raggiunge gli altri */
            var tween2 = TweenMax.to("#prescelto2", 3, {
                css:{transform: 'translate3d(0,'+altezzacontainerfase3+'px,0)'}, ease:Quad.easeInOut});

            var scene8 = new ScrollScene({triggerElement: "#containerfase3", offset:smetti})
                .setTween(tween2)
                .addTo(controller);

            // var scene2 = new ScrollScene({triggerElement: "#containerfase3", duration: smetti, offset:smetti/2})
            //     .setPin("#prescelto2", {pushFollowers: false})
            //     .addTo(controller);

            // blocco1 pacchetti laterali
            var scene3 = new ScrollScene({triggerElement: "#timefase1", duration: somma2piu3, offset:altezzatimefase1})
                .setPin("#quartopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene4 = new ScrollScene({triggerElement: "#timefase1", duration: somma2piu3, offset:altezzatimefase1})
                .setPin("#secondopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene5 = new ScrollScene({triggerElement: "#timefase1", duration: somma2piu3, offset:altezzatimefase1})
                .setPin("#primopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene6 = new ScrollScene({triggerElement: "#timefase1", duration: somma2piu3, offset:altezzatimefase1})
                .setPin("#quintopacchetto", {pushFollowers: false})
                .addTo(controller);

            // blocco2 pacchetti laterali
            // var tween = TweenMax.to("#quartopacchetto2", 3, {
            //     css:{transform: 'translate3d(0,26.8rem,0)'}, ease:Quad.easeInOut});

            // var scene7 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
            //     .setTween(tween)
            //     .addTo(controller);


            // var tween2 = TweenMax.to("#primopacchetto2", 3, {
            //     css:{transform: 'translate3d(0,26.8rem,0)'}, ease:Quad.easeInOut});

            // var scene8 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
            //     .setTween(tween2)
            //     .addTo(controller);


            // var tween3 = TweenMax.to("#secondopacchetto2", 3, {
            //     css:{transform: 'translate3d(0,26.8rem,0)'}, ease:Quad.easeInOut});

            // var scene9 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
            //     .setTween(tween3)
            //     .addTo(controller);


            // var tween4 = TweenMax.to("#quintopacchetto2", 3, {
            //     css:{transform: 'translate3d(0,26.8rem,0)'}, ease:Quad.easeInOut});

            // var scene10 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
            //     .setTween(tween4)
            //     .addTo(controller);

            // blocco3 pacchetti laterali
            var tween5 = TweenMax.to("#primopacchetto3", 3, {
                css:{transform: 'translate3d(0,'+sommaconpezzettino+'px,0)'}, ease:Quad.easeInOut});

            var scene11 = new ScrollScene({triggerElement: "#containerfase4"})
                .setTween(tween5)
                .addTo(controller);


            var tween6 = TweenMax.to("#secondopacchetto3", 3, {
                css:{transform: 'translate3d(0,'+sommaconpezzettino+'px,0)'}, ease:Quad.easeInOut});

            var scene12 = new ScrollScene({triggerElement: "#containerfase4"})
                .setTween(tween6)
                .addTo(controller);


            var tween7 = TweenMax.to("#prescelto3", 3, {
                css:{transform: 'translate3d(0,'+sommaconpezzettino+'px,0)'}, ease:Quad.easeInOut});

            var scene13 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
                .setTween(tween7)
                .addTo(controller);


            var tween8 = TweenMax.to("#quartopacchetto3", 3, {
                css:{transform: 'translate3d(0,'+sommaconpezzettino+'px,0)'}, ease:Quad.easeInOut});

            var scene14 = new ScrollScene({triggerElement: "#containerfase4"})
                .setTween(tween8)
                .addTo(controller);


            var tween9 = TweenMax.to("#quintopacchetto3", 3, {
                css:{transform: 'translate3d(0,'+sommaconpezzettino+'px,0)'}, ease:Quad.easeInOut});

            var scene15 = new ScrollScene({triggerElement: "#containerfase4"})
                .setTween(tween9)
                .addTo(controller);


            var tween10 = TweenMax.to("#prescelto4", 3, {
                css:{transform: 'translate3d(0,'+altezzatimefase5+'px,0)'}, ease:Quad.easeInOut});

            var scenefinale = new ScrollScene({triggerElement: "#containerfase4", offset: 800})
                .setTween(tween10)
                .addTo(controller);
        }
 //            var controller = new ScrollMagic();
            
 //            var scene2 = new ScrollScene({triggerElement: "#timefase1", duration: 515, offset: 1400})
 //                .setPin("#prescelto2", {pushFollowers: false})
 //                .addTo(controller);
 // // show indicators (requires debug extension)

 //            var scene1 = new ScrollScene({triggerElement: "#timefase1", duration: 600, offset: 300})
 //                .setPin("#prescelto", {pushFollowers: false})
 //                .addTo(controller);

 //            // blocco1 pacchetti laterali
 //            var scene3 = new ScrollScene({triggerElement: "#timefase1", duration: 600, offset: 300})
 //                .setPin("#quartopacchetto", {pushFollowers: false})
 //                .addTo(controller);


 //            var scene4 = new ScrollScene({triggerElement: "#timefase1", duration: 600, offset: 300})
 //                .setPin("#secondopacchetto", {pushFollowers: false})
 //                .addTo(controller);


 //            var scene5 = new ScrollScene({triggerElement: "#timefase1", duration: 600, offset: 300})
 //                .setPin("#primopacchetto", {pushFollowers: false})
 //                .addTo(controller);


 //            var scene6 = new ScrollScene({triggerElement: "#timefase1", duration: 600, offset: 300})
 //                .setPin("#quintopacchetto", {pushFollowers: false})
 //                .addTo(controller);

 //            // blocco2 pacchetti laterali
 //            var tween = TweenMax.to("#quartopacchetto2", 3, {
 //                css:{transform: 'translate3d(0,32.2rem,0)'}, ease:Quad.easeInOut});

 //            var scene7 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
 //                .setTween(tween)
 //                .addTo(controller);


 //            var tween2 = TweenMax.to("#primopacchetto2", 3, {
 //                css:{transform: 'translate3d(0,32.2rem,0)'}, ease:Quad.easeInOut});

 //            var scene8 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
 //                .setTween(tween2)
 //                .addTo(controller);


 //            var tween3 = TweenMax.to("#secondopacchetto2", 3, {
 //                css:{transform: 'translate3d(0,32.2rem,0)'}, ease:Quad.easeInOut});

 //            var scene9 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
 //                .setTween(tween3)
 //                .addTo(controller);


 //            var tween4 = TweenMax.to("#quintopacchetto2", 3, {
 //                css:{transform: 'translate3d(0,32.2rem,0)'}, ease:Quad.easeInOut});

 //            var scene10 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
 //                .setTween(tween4)
 //                .addTo(controller);

 //            // blocco3 pacchetti laterali
 //            var tween5 = TweenMax.to("#primopacchetto3", 3, {
 //                css:{transform: 'translate3d(0,44.5rem,0)'}, ease:Quad.easeInOut});

 //            var scene11 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
 //                .setTween(tween5)
 //                .addTo(controller);


 //            var tween6 = TweenMax.to("#secondopacchetto3", 3, {
 //                css:{transform: 'translate3d(0,44.5rem,0)'}, ease:Quad.easeInOut});

 //            var scene12 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
 //                .setTween(tween6)
 //                .addTo(controller);


 //            var tween7 = TweenMax.to("#prescelto3", 3, {
 //                css:{transform: 'translate3d(0,44.5rem,0)'}, ease:Quad.easeInOut});

 //            var scene13 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
 //                .setTween(tween7)
 //                .addTo(controller);


 //            var tween8 = TweenMax.to("#quartopacchetto3", 3, {
 //                css:{transform: 'translate3d(0,44.5rem,0)'}, ease:Quad.easeInOut});

 //            var scene14 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
 //                .setTween(tween8)
 //                .addTo(controller);


 //            var tween9 = TweenMax.to("#quintopacchetto3", 3, {
 //                css:{transform: 'translate3d(0,44.5rem,0)'}, ease:Quad.easeInOut});

 //            var scene15 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
 //                .setTween(tween9)
 //                .addTo(controller);


 //            var tween10 = TweenMax.to("#prescelto4", 3, {
 //                css:{transform: 'translate3d(0,45rem,0)'}, ease:Quad.easeInOut});

 //            var scenefinale = new ScrollScene({triggerElement: "#containerfase4", offset: 800})
 //                .setTween(tween10)
 //                .addTo(controller);

 //        }

        // 1024x768 - fatto sara 
        else if (window.innerWidth <= 1024) {
            // init controller
            var altezzatimefase1 = $('#timefase1').outerHeight(true);
            var altezzacontainerfase2 = $('#containerfase2').outerHeight(true);
            var altezzacontainerfase3 = $('#containerfase3').outerHeight(true);
            var somma2piu3 = altezzacontainerfase2+altezzacontainerfase3;
            var altezzatimefase3 = $('#timefase3').outerHeight(true);
            var smetti = altezzacontainerfase3/2;
            console.log('numero giusto '+smetti);
            var altezzacontainerfase4 = $('#containerfase4').outerHeight(true);
            var altezzapezzettino = $('#pezzettino').outerHeight(true);
            var sommaconpezzettino = altezzacontainerfase4+altezzapezzettino;
            var altezzatimefase5 = $('#timefase5').outerHeight(true);
            console.log(altezzatimefase1);
            console.log(altezzacontainerfase2);
            console.log(altezzacontainerfase3);
            console.log('la somma di fase 2 e 3 fa'+somma2piu3);
            console.log('timefase3 fa '+altezzatimefase1);
            console.log('containerfase4 fa '+altezzacontainerfase4);
            var controller = new ScrollMagic();
            

 // show indicators (requires debug extension)
            /*pacco prescelto prima parte */
            var scene1 = new ScrollScene({triggerElement: "#timefase1", duration: altezzacontainerfase2, offset:altezzatimefase1})
                .setPin("#prescelto", {pushFollowers: false})
                .addTo(controller);
            /*pacco prescelto si sblocca e raggiunge gli altri */
            var tween2 = TweenMax.to("#prescelto2", 3, {
                css:{transform: 'translate3d(0,'+altezzacontainerfase3+'px,0)'}, ease:Quad.easeInOut});

            var scene8 = new ScrollScene({triggerElement: "#containerfase3", offset:smetti})
                .setTween(tween2)
                .addTo(controller);

            // var scene2 = new ScrollScene({triggerElement: "#containerfase3", duration: smetti, offset:smetti/2})
            //     .setPin("#prescelto2", {pushFollowers: false})
            //     .addTo(controller);

            // blocco1 pacchetti laterali
            var scene3 = new ScrollScene({triggerElement: "#timefase1", duration: somma2piu3, offset:altezzatimefase1})
                .setPin("#quartopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene4 = new ScrollScene({triggerElement: "#timefase1", duration: somma2piu3, offset:altezzatimefase1})
                .setPin("#secondopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene5 = new ScrollScene({triggerElement: "#timefase1", duration: somma2piu3, offset:altezzatimefase1})
                .setPin("#primopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene6 = new ScrollScene({triggerElement: "#timefase1", duration: somma2piu3, offset:altezzatimefase1})
                .setPin("#quintopacchetto", {pushFollowers: false})
                .addTo(controller);

            // blocco2 pacchetti laterali
            // var tween = TweenMax.to("#quartopacchetto2", 3, {
            //     css:{transform: 'translate3d(0,26.8rem,0)'}, ease:Quad.easeInOut});

            // var scene7 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
            //     .setTween(tween)
            //     .addTo(controller);


            // var tween2 = TweenMax.to("#primopacchetto2", 3, {
            //     css:{transform: 'translate3d(0,26.8rem,0)'}, ease:Quad.easeInOut});

            // var scene8 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
            //     .setTween(tween2)
            //     .addTo(controller);


            // var tween3 = TweenMax.to("#secondopacchetto2", 3, {
            //     css:{transform: 'translate3d(0,26.8rem,0)'}, ease:Quad.easeInOut});

            // var scene9 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
            //     .setTween(tween3)
            //     .addTo(controller);


            // var tween4 = TweenMax.to("#quintopacchetto2", 3, {
            //     css:{transform: 'translate3d(0,26.8rem,0)'}, ease:Quad.easeInOut});

            // var scene10 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
            //     .setTween(tween4)
            //     .addTo(controller);

            // blocco3 pacchetti laterali
            var tween5 = TweenMax.to("#primopacchetto3", 3, {
                css:{transform: 'translate3d(0,'+sommaconpezzettino+'px,0)'}, ease:Quad.easeInOut});

            var scene11 = new ScrollScene({triggerElement: "#containerfase4"})
                .setTween(tween5)
                .addTo(controller);


            var tween6 = TweenMax.to("#secondopacchetto3", 3, {
                css:{transform: 'translate3d(0,'+sommaconpezzettino+'px,0)'}, ease:Quad.easeInOut});

            var scene12 = new ScrollScene({triggerElement: "#containerfase4"})
                .setTween(tween6)
                .addTo(controller);


            var tween7 = TweenMax.to("#prescelto3", 3, {
                css:{transform: 'translate3d(0,'+sommaconpezzettino+'px,0)'}, ease:Quad.easeInOut});

            var scene13 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
                .setTween(tween7)
                .addTo(controller);


            var tween8 = TweenMax.to("#quartopacchetto3", 3, {
                css:{transform: 'translate3d(0,'+sommaconpezzettino+'px,0)'}, ease:Quad.easeInOut});

            var scene14 = new ScrollScene({triggerElement: "#containerfase4"})
                .setTween(tween8)
                .addTo(controller);


            var tween9 = TweenMax.to("#quintopacchetto3", 3, {
                css:{transform: 'translate3d(0,'+sommaconpezzettino+'px,0)'}, ease:Quad.easeInOut});

            var scene15 = new ScrollScene({triggerElement: "#containerfase4"})
                .setTween(tween9)
                .addTo(controller);


            var tween10 = TweenMax.to("#prescelto4", 3, {
                css:{transform: 'translate3d(0,'+altezzatimefase5+'px,0)'}, ease:Quad.easeInOut});

            var scenefinale = new ScrollScene({triggerElement: "#containerfase4", offset: 800})
                .setTween(tween10)
                .addTo(controller);
        }
        // 1280x800 - fatto sara
        else if (window.innerWidth > 1024 && window.innerWidth <= 1280 && window.innerHeight <= 800) {

            //cambio il posizionamento del titolo
            $('#cover').find('h1').css("padding-top","4%");

                        // init controller
            var controller = new ScrollMagic();
            
            var scene2 = new ScrollScene({triggerElement: "#timefase1", duration: 463, offset: 950})
                .setPin("#prescelto2", {pushFollowers: false})
                .addTo(controller);
 // show indicators (requires debug extension)

            var scene1 = new ScrollScene({triggerElement: "#timefase1", duration: 500, offset: 200})
                .setPin("#prescelto", {pushFollowers: false})
                .addTo(controller);

            // blocco1 pacchetti laterali
            var scene3 = new ScrollScene({triggerElement: "#timefase1", duration: 500, offset: 200})
                .setPin("#quartopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene4 = new ScrollScene({triggerElement: "#timefase1", duration: 500, offset: 200})
                .setPin("#secondopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene5 = new ScrollScene({triggerElement: "#timefase1", duration: 500, offset: 200})
                .setPin("#primopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene6 = new ScrollScene({triggerElement: "#timefase1", duration: 500, offset: 200})
                .setPin("#quintopacchetto", {pushFollowers: false})
                .addTo(controller);

            // blocco2 pacchetti laterali
            var tween = TweenMax.to("#quartopacchetto2", 3, {
                css:{transform: 'translate3d(0,28.8rem,0)'}, ease:Quad.easeInOut});

            var scene7 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
                .setTween(tween)
                .addTo(controller);


            var tween2 = TweenMax.to("#primopacchetto2", 3, {
                css:{transform: 'translate3d(0,28.8rem,0)'}, ease:Quad.easeInOut});

            var scene8 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
                .setTween(tween2)
                .addTo(controller);


            var tween3 = TweenMax.to("#secondopacchetto2", 3, {
                css:{transform: 'translate3d(0,28.8rem,0)'}, ease:Quad.easeInOut});

            var scene9 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
                .setTween(tween3)
                .addTo(controller);


            var tween4 = TweenMax.to("#quintopacchetto2", 3, {
                css:{transform: 'translate3d(0,28.8rem,0)'}, ease:Quad.easeInOut});

            var scene10 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
                .setTween(tween4)
                .addTo(controller);

            // blocco3 pacchetti laterali
            var tween5 = TweenMax.to("#primopacchetto3", 3, {
                css:{transform: 'translate3d(0,40.7rem,0)'}, ease:Quad.easeInOut});

            var scene11 = new ScrollScene({triggerElement: "#timefase2", offset: 900})
                .setTween(tween5)
                .addTo(controller);


            var tween6 = TweenMax.to("#secondopacchetto3", 3, {
                css:{transform: 'translate3d(0,40.7rem,0)'}, ease:Quad.easeInOut});

            var scene12 = new ScrollScene({triggerElement: "#timefase2", offset: 900})
                .setTween(tween6)
                .addTo(controller);


            var tween7 = TweenMax.to("#prescelto3", 3, {
                css:{transform: 'translate3d(0,40.7rem,0)'}, ease:Quad.easeInOut});

            var scene13 = new ScrollScene({triggerElement: "#timefase2", offset: 900})
                .setTween(tween7)
                .addTo(controller);


            var tween8 = TweenMax.to("#quartopacchetto3", 3, {
                css:{transform: 'translate3d(0,40.7rem,0)'}, ease:Quad.easeInOut});

            var scene14 = new ScrollScene({triggerElement: "#timefase2", offset: 900})
                .setTween(tween8)
                .addTo(controller);


            var tween9 = TweenMax.to("#quintopacchetto3", 3, {
                css:{transform: 'translate3d(0,40.7rem,0)'}, ease:Quad.easeInOut});

            var scene15 = new ScrollScene({triggerElement: "#timefase2", offset: 900})
                .setTween(tween9)
                .addTo(controller);


            var tween10 = TweenMax.to("#prescelto4", 3, {
                css:{transform: 'translate3d(0,44rem,0)'}, ease:Quad.easeInOut});

            var scenefinale = new ScrollScene({triggerElement: "#containerfase4", offset: 750})
                .setTween(tween10)
                .addTo(controller);

        }

        //1280x1024 - fatto sara
        else if (window.innerWidth > 1024 && window.innerWidth <= 1280 && window.innerHeight > 800 ) {
            //cambio il posizionamento iniziale dei pacchetti rispetto al bottom
            $('#timeline').find("#pacchettiwrapper").css("bottom","20vh");

                        // init controller
            var controller = new ScrollMagic();
            
            var scene2 = new ScrollScene({triggerElement: "#timefase1", duration: 500, offset: 950})
                .setPin("#prescelto2", {pushFollowers: false})
                .addTo(controller);
 // show indicators (requires debug extension)

            var scene1 = new ScrollScene({triggerElement: "#timefase1", duration: 670, offset: 300})
                .setPin("#prescelto", {pushFollowers: false})
                .addTo(controller);

            // blocco1 pacchetti laterali
            var scene3 = new ScrollScene({triggerElement: "#timefase1", duration: 650, offset: 300})
                .setPin("#quartopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene4 = new ScrollScene({triggerElement: "#timefase1", duration: 650, offset: 300})
                .setPin("#secondopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene5 = new ScrollScene({triggerElement: "#timefase1", duration: 650, offset: 300})
                .setPin("#primopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene6 = new ScrollScene({triggerElement: "#timefase1", duration: 650, offset: 300})
                .setPin("#quintopacchetto", {pushFollowers: false})
                .addTo(controller);

            // blocco2 pacchetti laterali
            var tween = TweenMax.to("#quartopacchetto2", 3, {
                css:{transform: 'translate3d(0,32.5rem,0)'}, ease:Quad.easeInOut});

            var scene7 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
                .setTween(tween)
                .addTo(controller);


            var tween2 = TweenMax.to("#primopacchetto2", 3, {
                css:{transform: 'translate3d(0,32.5rem,0)'}, ease:Quad.easeInOut});

            var scene8 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
                .setTween(tween2)
                .addTo(controller);


            var tween3 = TweenMax.to("#secondopacchetto2", 3, {
                css:{transform: 'translate3d(0,32.5rem,0)'}, ease:Quad.easeInOut});

            var scene9 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
                .setTween(tween3)
                .addTo(controller);


            var tween4 = TweenMax.to("#quintopacchetto2", 3, {
                css:{transform: 'translate3d(0,32.5rem,0)'}, ease:Quad.easeInOut});

            var scene10 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
                .setTween(tween4)
                .addTo(controller);

            // blocco3 pacchetti laterali
            var tween5 = TweenMax.to("#primopacchetto3", 3, {
                css:{transform: 'translate3d(0,55.5rem,0)'}, ease:Quad.easeInOut});

            var scene11 = new ScrollScene({triggerElement: "#timefase2", offset: 1000})
                .setTween(tween5)
                .addTo(controller);


            var tween6 = TweenMax.to("#secondopacchetto3", 3, {
                css:{transform: 'translate3d(0,55.5rem,0)'}, ease:Quad.easeInOut});

            var scene12 = new ScrollScene({triggerElement: "#timefase2", offset: 1000})
                .setTween(tween6)
                .addTo(controller);


            var tween7 = TweenMax.to("#prescelto3", 3, {
                css:{transform: 'translate3d(0,55.5rem,0)'}, ease:Quad.easeInOut});

            var scene13 = new ScrollScene({triggerElement: "#timefase2", offset: 1000})
                .setTween(tween7)
                .addTo(controller);


            var tween8 = TweenMax.to("#quartopacchetto3", 3, {
                css:{transform: 'translate3d(0,55.5rem,0)'}, ease:Quad.easeInOut});

            var scene14 = new ScrollScene({triggerElement: "#timefase2", offset: 1000})
                .setTween(tween8)
                .addTo(controller);


            var tween9 = TweenMax.to("#quintopacchetto3", 3, {
                css:{transform: 'translate3d(0,55.5rem,0)'}, ease:Quad.easeInOut});

            var scene15 = new ScrollScene({triggerElement: "#timefase2", offset: 1000})
                .setTween(tween9)
                .addTo(controller);


            var tween10 = TweenMax.to("#prescelto4", 3, {
                css:{transform: 'translate3d(0,53.8rem,0)'}, ease:Quad.easeInOut});

            var scenefinale = new ScrollScene({triggerElement: "#containerfase4", offset: 800})
                .setTween(tween10)
                .addTo(controller);

        }
        // 1440x900 - fatto sara
        else if (window.innerWidth > 1280 && window.innerWidth <= 1440 && window.innerHeight <= 900) {

            //cambio il posizionamento del titolo
            $('#cover').find('h1').css("padding-top","4%");
            $('#timeline').find("#pacchettiwrapper").css("bottom","20vh");

                        // init controller
            var controller = new ScrollMagic();
            
            var scene2 = new ScrollScene({triggerElement: "#timefase1", duration: 610, offset: 1200})
                .setPin("#prescelto2", {pushFollowers: false})
                .addTo(controller);
 // show indicators (requires debug extension)

            var scene1 = new ScrollScene({triggerElement: "#timefase1", duration: 551, offset: 100})
                .setPin("#prescelto", {pushFollowers: false})
                .addTo(controller);

            // blocco1 pacchetti laterali
            var scene3 = new ScrollScene({triggerElement: "#timefase1", duration: 551, offset: 100})
                .setPin("#quartopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene4 = new ScrollScene({triggerElement: "#timefase1", duration: 551, offset: 100})
                .setPin("#secondopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene5 = new ScrollScene({triggerElement: "#timefase1", duration: 551, offset: 100})
                .setPin("#primopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene6 = new ScrollScene({triggerElement: "#timefase1", duration: 551, offset: 100})
                .setPin("#quintopacchetto", {pushFollowers: false})
                .addTo(controller);

            // blocco2 pacchetti laterali
            var tween = TweenMax.to("#quartopacchetto2", 3, {
                css:{transform: 'translate3d(0,38rem,0)'}, ease:Quad.easeInOut});

            var scene7 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
                .setTween(tween)
                .addTo(controller);


            var tween2 = TweenMax.to("#primopacchetto2", 3, {
                css:{transform: 'translate3d(0,38rem,0)'}, ease:Quad.easeInOut});

            var scene8 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
                .setTween(tween2)
                .addTo(controller);


            var tween3 = TweenMax.to("#secondopacchetto2", 3, {
                css:{transform: 'translate3d(0,38rem,0)'}, ease:Quad.easeInOut});

            var scene9 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
                .setTween(tween3)
                .addTo(controller);


            var tween4 = TweenMax.to("#quintopacchetto2", 3, {
                css:{transform: 'translate3d(0,38rem,0)'}, ease:Quad.easeInOut});

            var scene10 = new ScrollScene({triggerElement: "#timefase2", offset: 200})
                .setTween(tween4)
                .addTo(controller);

            // blocco3 pacchetti laterali
            var tween5 = TweenMax.to("#primopacchetto3", 3, {
                css:{transform: 'translate3d(0,46.9rem,0)'}, ease:Quad.easeInOut});

            var scene11 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
                .setTween(tween5)
                .addTo(controller);


            var tween6 = TweenMax.to("#secondopacchetto3", 3, {
                css:{transform: 'translate3d(0,46.9rem,0)'}, ease:Quad.easeInOut});

            var scene12 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
                .setTween(tween6)
                .addTo(controller);


            var tween7 = TweenMax.to("#prescelto3", 3, {
                css:{transform: 'translate3d(0,46.9rem,0)'}, ease:Quad.easeInOut});

            var scene13 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
                .setTween(tween7)
                .addTo(controller);


            var tween8 = TweenMax.to("#quartopacchetto3", 3, {
                css:{transform: 'translate3d(0,46.9rem,0)'}, ease:Quad.easeInOut});

            var scene14 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
                .setTween(tween8)
                .addTo(controller);


            var tween9 = TweenMax.to("#quintopacchetto3", 3, {
                css:{transform: 'translate3d(0,46.9rem,0)'}, ease:Quad.easeInOut});

            var scene15 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
                .setTween(tween9)
                .addTo(controller);


            var tween10 = TweenMax.to("#prescelto4", 3, {
                css:{transform: 'translate3d(0,50.3rem,0)'}, ease:Quad.easeInOut});

            var scenefinale = new ScrollScene({triggerElement: "#containerfase4", offset: 800})
                .setTween(tween10)
                .addTo(controller);

        }

        //1680x1500 fatto sara 
        else if (window.innerWidth >= 1680) {
            //cambio il posizionamento iniziale dei pacchetti rispetto al bottom
            $('#timeline').find("#pacchettiwrapper").css("bottom","30vh");

                        // init controller
            var controller = new ScrollMagic();
            
            var scene2 = new ScrollScene({triggerElement: "#timefase1", duration: 600, offset: 1400})
                .setPin("#prescelto2", {pushFollowers: false})
                .addTo(controller);
                // .addIndicators()

            var scene1 = new ScrollScene({triggerElement: "#timefase1", duration: 750, offset: 300})
                .setPin("#prescelto", {pushFollowers: false})
                .addTo(controller);

            // blocco1 pacchetti laterali
            var scene3 = new ScrollScene({triggerElement: "#timefase1", duration: 750, offset: 300})
                .setPin("#quartopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene4 = new ScrollScene({triggerElement: "#timefase1", duration: 750, offset: 300})
                .setPin("#secondopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene5 = new ScrollScene({triggerElement: "#timefase1", duration: 750, offset: 300})
                .setPin("#primopacchetto", {pushFollowers: false})
                .addTo(controller);


            var scene6 = new ScrollScene({triggerElement: "#timefase1", duration: 750, offset: 300})
                .setPin("#quintopacchetto", {pushFollowers: false})
                .addTo(controller);

            // blocco2 pacchetti laterali
            var tween = TweenMax.to("#quartopacchetto2", 3, {
                css:{transform: 'translate3d(0,37.3rem,0)'}, ease:Quad.easeInOut});

            var scene7 = new ScrollScene({triggerElement: "#timefase2", offset: 500})
                .setTween(tween)
                .addTo(controller);


            var tween2 = TweenMax.to("#primopacchetto2", 3, {
                css:{transform: 'translate3d(0,37.3rem,0)'}, ease:Quad.easeInOut});

            var scene8 = new ScrollScene({triggerElement: "#timefase2", offset: 500})
                .setTween(tween2)
                .addTo(controller);


            var tween3 = TweenMax.to("#secondopacchetto2", 3, {
                css:{transform: 'translate3d(0,37.3rem,0)'}, ease:Quad.easeInOut});

            var scene9 = new ScrollScene({triggerElement: "#timefase2", offset: 500})
                .setTween(tween3)
                .addTo(controller);


            var tween4 = TweenMax.to("#quintopacchetto2", 3, {
                css:{transform: 'translate3d(0,37.3rem,0)'}, ease:Quad.easeInOut});

            var scene10 = new ScrollScene({triggerElement: "#timefase2", offset: 500})
                .setTween(tween4)
                .addTo(controller);

            // blocco3 pacchetti laterali
            var tween5 = TweenMax.to("#primopacchetto3", 3, {
                css:{transform: 'translate3d(0,47.6rem,0)'}, ease:Quad.easeInOut});

            var scene11 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
                .setTween(tween5)
                .addTo(controller);


            var tween6 = TweenMax.to("#secondopacchetto3", 3, {
                css:{transform: 'translate3d(0,47.6rem,0)'}, ease:Quad.easeInOut});

            var scene12 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
                .setTween(tween6)
                .addTo(controller);


            var tween7 = TweenMax.to("#prescelto3", 3, {
                css:{transform: 'translate3d(0,47.6rem,0)'}, ease:Quad.easeInOut});

            var scene13 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
                .setTween(tween7)
                .addTo(controller);


            var tween8 = TweenMax.to("#quartopacchetto3", 3, {
                css:{transform: 'translate3d(0,47.6rem,0)'}, ease:Quad.easeInOut});

            var scene14 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
                .setTween(tween8)
                .addTo(controller);


            var tween9 = TweenMax.to("#quintopacchetto3", 3, {
                css:{transform: 'translate3d(0,47.6rem,0)'}, ease:Quad.easeInOut});

            var scene15 = new ScrollScene({triggerElement: "#timefase2", offset: 1250})
                .setTween(tween9)
                .addTo(controller);


            var tween10 = TweenMax.to("#prescelto4", 3, {
                css:{transform: 'translate3d(0,53.7rem,0)'}, ease:Quad.easeInOut});

            var scenefinale = new ScrollScene({triggerElement: "#containerfase4", offset: 800})
                .setTween(tween10)
                .addTo(controller);

        }

    });
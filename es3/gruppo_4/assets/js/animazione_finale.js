    var windowHeight = $(window).innerHeight();
                // function to be used to retrieve variable
                function getWindowHeight() {
                    return windowHeight;
                }
                // update window height on resize
                $(window).on("resize", function () {
                    windowHeight = $(window).innerHeight();
                });
    
    var primooffset = (getWindowHeight()*4.1)/10;
    console.log("sessanta vale "+primooffset);
    var secondooffset = getWindowHeight() + (primooffset/2);
    console.log(secondooffset);
    // var terzooffset = ((getWindowHeight()*4)/10)+primooffset+secondooffset;
    var terzooffset = getWindowHeight() + secondooffset;
    console.log(terzooffset);
    var quartooffset = getWindowHeight() + terzooffset;
    var duration = ((getWindowHeight()*4) - (primooffset*2.4));
    console.log(duration);
    var offsetMoney = (getWindowHeight()/2.05);
    console.log("offsetMoney è" + offsetMoney);
    var durationMoney = ((getWindowHeight()*2) - (offsetMoney*2.01));
    console.log("durationMoney è" + durationMoney);

     $(document).ready(function($) {
        var controller = new ScrollMagic();
        // build scene
        var scene = new ScrollScene({triggerElement: "#partiqui", duration: 2195, offset: primooffset})
                        .setPin("#prima", {pushFollowers: false})
                        .addTo(controller);
    });

     $(document).ready(function($) {
        var controller = new ScrollMagic();
        // build scene
        var scene2 = new ScrollScene({triggerElement: "#partiqui", offset: secondooffset})
                        .setClassToggle("#prima", "immagine2")
                        .addTo(controller);
    });

     $(document).ready(function($) {
        var controller = new ScrollMagic();
        // build scene
        var scene3 = new ScrollScene({triggerElement: "#partiqui", offset: terzooffset})
                        .setClassToggle("#prima", "immagine3")
                        .addTo(controller);
    });

     $(document).ready(function($) {
        var controller = new ScrollMagic();
        // build scene
        var scene4 = new ScrollScene({triggerElement: "#partiqui", offset: quartooffset})
                        .setClassToggle("#prima", "immagine4")
                        .addTo(controller);
    });

     $(document).ready(function($) {
        var controller = new ScrollMagic();
        // build scene
        var scene5 = new ScrollScene({triggerElement: "#svolta", duration: durationMoney, offset: offsetMoney})
                        .setPin("#money", {pushFollowers: false})
                        .addTo(controller);
    });

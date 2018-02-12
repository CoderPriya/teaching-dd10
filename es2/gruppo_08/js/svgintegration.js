//SVG INTEGRATION by Matteo Colombo
//VERSION 1.0
//
//SVGs have to be embedded through <object> put in a <div class="svg" id="id_of_container> element.
//<div id="id_of_container" class="svg">
//<object data="path/to/file.svg" type="image/svg+xml"></object>
//</div>
//
//You can style the <div id="id_of_container" class="svg"> with the desired width or max-width, but you cannot control height.
//#id_of_container{width: 800px;}
//#id_of_container{max-width: 800px;}
//
//You can align container to the center, right or left by assigning the svg-center, svg-left or svg-right class.
//<div id="id_of_container" class="svg svg_center">
//<div id="id_of_container" class="svg svg_left">
//<div id="id_of_container" class="svg svg_right">
//
//You can access SVG elements in jQuery by declaring the context, passing the container ID as variable of function svg-context()
//$("#square", svg_context("#id_of_container")).css("fill", "red");
//
//You must do it only after the specific event "svg_ready" is triggered by the library.
//$(document).on("svg_ready", function(e) {
//	$("#square", svg_context("#id_of_container")).css("fill", "red");
//});

//TESTED ON
//Desktop
//Safari 5-8 (and hopefully more) (also on Windows)
//Opera 12-25 (and hopefully more)
//Chrome 15-38 (and hopefully more)
//Firefox 4-33 (and hopefully more)
//Internet Explorer 9-11 (and hopefully more)
//
//iOS
//iPhone 4-6plus (iOS 4-8) (and hopefully more)
//iPad 2-4, iPad Air, iPad Mini 1-2 (iOS 4.3.2-8) (and hopefully more)
//
//Android
//Stock Browser (Android 4-5) (Android 2 browser doesn't support SVG) (and hopefully more)
//Opera, Firefox, Chrome for Android (only last versions tested)
//Still, on some android devices, complex SVG may not appear...



//Add style before anything. Adding it with Jquery creates strange bugs.
$("head").append("<style>.svg object,.svg{display:block;}.svg object{width:100%;}.svg_center{margin-left:auto; margin-right:auto}.svg_right{margin-left:auto; margin-right:0}.svg_left{margin-left:0; margin-right:auto}.vertical-center {display: -webkit-flexbox;display: -ms-flexbox;display: -webkit-flex;display: flexbox;-webkit-flex-align: center;-ms-flex-align: center;-webkit-align-items: center;align-items: center;}</style>");

var chrome = navigator.userAgent.indexOf('Chrome') > -1;
var explorer = navigator.userAgent.indexOf('MSIE') > -1;
var firefox = navigator.userAgent.indexOf('Firefox') > -1;
var safari = navigator.userAgent.indexOf("Safari") > -1;
var opera = navigator.userAgent.indexOf("Presto") > -1;
var android = navigator.userAgent.indexOf("android") > -1;
if ((chrome)&&(safari)) {safari=false;}

var svgContext = [];
var svgList = [];

function safarifix(){
	//FIRST wipe and write attributes which cause problems in Safari
	for(j=0;j < svgList.length;j++){
		var contesto = svgContext["#"+svgList[j]];
		$("svg", contesto).removeAttr("width").attr("preserveAspectRatio", "none")
	}
	
	//THEN get data to set height of object and div.svg programmatically
	for(j=0;j < svgList.length;j++){
		var contesto = svgContext["#"+svgList[j]];
		var svgViewWidth = $("svg", contesto).attr("viewBox").split(" ")[2];
		var svgViewHeight = $("svg", contesto).attr("viewBox").split(" ")[3];
		var svgWidth = $("svg", contesto).width();
		var svgHeight = svgWidth * svgViewHeight/svgViewWidth;
		
		$("svg", contesto).attr("height", svgHeight+"px");
		$("#"+svgList[j]+" object").css("height", svgHeight+"px");
	}
	
}

window.onload=function() {
	// Get the array of <object> who live inside a <div class="svg">
	var a = $(".svg object").get();
	
	// Get the SVG document inside each <object> and save it in the svgContext[] array. In this array the key of each element of the array is the "#id" of the parent div container.
	for(i=0;i < a.length;i++){
		var svgCont = a[i].contentDocument;
		svgContext["#"+a[i].parentNode.getAttribute("id")] = svgCont;
		svgList[i] = a[i].parentNode.getAttribute("id")
	}

	if(safari||android) safarifix();
	
	$(document).trigger("svg_ready");
	$(document).trigger("svg_ready_fix");
};

$(window).resize(function() {
	if(safari||android) safarifix();
});

$(document).on("svg_ready_fix",function(){
	if(safari||android) safarifix();
});

function svg_context(id) {
	return svgContext[id];
}
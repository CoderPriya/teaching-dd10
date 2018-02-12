//Simple d3.js barchart example to illustrate d3 selections

//other good related tutorials
//http://www.recursion.org/d3-for-mere-mortals/
//http://mbostock.github.com/d3/tutorial/bar-1.html

var data1 = [
    5.97,
    0.75,
    0.37,
    0.37,
    0.37,
    0.37,
    0.37,
    0.37,
    0.37
]

var data2 = [
    4.90,
    2.20,
    1.12,
    0,
    0,
    0,
    0,
    0,
    0
]

var data3 = [
    2.99,
    0.75,
    0.37,
    0.37,
    0.37,
    0.37,
    0.37,
    0.37,
    0
]

var data4 = [
    1.12,
    0.37,
    0.37,
    0.37,
    0.37,
    0.37,
    0.37,
    0,
    0
]

var data5 = [
    0.75,
    0.75,
    0.37,
    0.37,
    0.37,
    0,
    0,
    0,
    0
]

var data6 = [
    0.37,
    0.37,
    0.37,
    0.37,
    0.37,
    0.37,
    0,
    0,
    0
]

var data7 = [
    1.12,
    0.37,
    0.37,
    0.37,
    0.37,
    0,
    0,
    0,
    0
]

var w = 400
var h = 300


function bars(data)
{

    max = d3.max(data)

    //nice breakdown of d3 scales
    //http://www.jeromecukier.net/blog/2011/08/11/d3-scales-and-color/
    x = d3.scale.linear()
        .domain([0, 5.97]) //Prima al posto di 5.97 c'era max
        .range([0, w])

    y = d3.scale.ordinal()
        .domain(d3.range(data.length))
        .rangeBands([0, h], .2)


    var vis = d3.select("#barchart")
    
    var bars = vis.selectAll("rect.bar")
        .data(data)

    //update
    bars
        .attr("fill", "#232323")
        .attr("fill-opacity", "0.6")
        .attr("stroke", "#fff")

    //entern (come sono le barrette all'inizio)
    bars.enter()
        .append("svg:rect")
        .attr("class", "bar")
        .attr("fill", "#232323")
        .attr("fill-opacity", "0.6")
        .attr("stroke", "#fff")

    /*exit 
    bars.exit()
    .transition()
    .duration(300)
    .ease("exp")
        .attr("width", 0)
        .remove()*/


    bars
        .attr("stroke-width", 1)
    .transition()
    .duration(300)
    .ease("quad")
        .attr("width", x)
        .attr("height", "15px") //y.rangeBand()
        .attr("transform", function(d,i) {
            return "translate(" + [0, y(i)] + ")"
        })

}


function init()
{

    //setup the svg
    var svg = d3.select("#svg-bar")
        .attr("width", w+0)
        .attr("height", h+50)

    svg.append("svg:g")
        .attr("id", "barchart")
        .attr("transform", "translate(0,20)") //.attr("transform", "translate(50,50)")
    
    //setup our ui
    d3.select("#data1")
        .on("click", function(d,i) {
            bars(data1)
        })   
    d3.select("#data2")
        .on("click", function(d,i) {
            bars(data2)
        })
    d3.select("#data3")
        .on("click", function(d,i) {
            bars(data3)
        })
    d3.select("#data4")
        .on("click", function(d,i) {
            bars(data4)
        })
    d3.select("#data5")
        .on("click", function(d,i) {
            bars(data5)
        })
    d3.select("#data6")
        .on("click", function(d,i) {
            bars(data6)
        })
    d3.select("#data7")
        .on("click", function(d,i) {
            bars(data7)
        })   
    /*d3.select("#random")
        .on("click", function(d,i) {
            num = document.getElementById("num").value
            bars(random(num))
        })*/   


    //make the bars
    bars(data1)
}

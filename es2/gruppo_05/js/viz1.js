var //margin = {top: 200}; 
    width = 900,
    height = 800,
    format = d3.format(",d"),
    color = d3.scale.ordinal()
        .range(["#cc1534", "#b52542", "#9f344f", "#5b6378", "#447286", "#00a0ae" ]);

width = $(".my-viz6").width()
console.log(width)

var bubble = d3.layout.pack()
    .sort(null)
    .size([width, height])
    .padding(10);

var svg = d3.select(".my-viz6").append("svg") //seleziona il div dove deve andare
    .attr("width", width)
    .attr("height", height)
    .attr("class", "bubble");

// add the tooltip area to the webpage
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-7, 0])
  .html(function(d) {
    return "<b>" + d.className + "</b>" + ": " + d.value + " episodes";
  })

svg.call(tip);

d3.json("../data/g6data.json", function(error, root) {
  var node = svg.selectAll(".node")
      .data(bubble.nodes(classes(root))
      .filter(function(d) { return !d.children; }))
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

//label onMouseOver
  node.append("circle")
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) { return color(d.packageName); });

//text into bubble
  node.append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .style("fill", "#FFF")
      .style("font-size", "9px")
      .text(function(d) { return d.className.substring(0, d.r / 3); });

// add title    
  svg.append("svg:text")
      .attr("class", "title")
     .attr("x", 30)
     .attr("y", 530)
     .text("SENTENCES WITH THE WORD 'NSA'");

  svg.append("svg:text")
      .attr("class", "title")
     .attr("x", 30)
     .attr("y", 380)
     .text("EPISODES WITH THE WORD 'NSA'");

//legend episodes
 svg.append("svg:circle")
        .attr("cx", 70)
        .attr("cy", 430)
        .attr("r", "34px")
        .style("fill", "#333")
        .style("stroke-width", "1")
        .style("stroke", "#d7d1c4");
 
 svg.append("svg:text")
     .attr("x", 65)
     .attr("y", 480)
     .style("fill", "white")
     .text("10");

//legend sentences
  var legend = svg.selectAll(".legend")
      .data(color.domain().slice())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 25 + ")"; }); //Per aumentare spazio tra quadrati

  legend.append("rect")
      .attr("x", 30)
      .attr("y", 550)
      .attr("width", 15)
      .attr("height", 15)
      .style("fill", color);

 legend.append("text")
      .attr("x", 55)
      .attr("y", 557)
      .attr("dy", ".35em")
      .style("fill", "white")
      .text(function(d) { return d });
});


// Returns a flattened hierarchy containing all leaf nodes under the root.
function classes(root) {
  var classes = [];

  function recurse(name, node) {
    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
    else classes.push({packageName: name, className: node.name, value: node.size});
  }

  recurse(null, root);
  return {children: classes};
}

//d3.select(self.frameElement).style("height", diameter + "px");
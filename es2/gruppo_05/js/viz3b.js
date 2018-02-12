var //margin = {top: 200}; 
    width = 800,
    height = 700,
    format = d3.format(",d"),
    color = d3.scale.ordinal()
        .range(["#cc1534", "#00a0ae"]);

width = $(".my-viz5").width()
console.log(width)

var bubble = d3.layout.pack()
    .sort(null)
    .size([width, height])
    .padding(15);

var svg = d3.select(".my-viz5").append("svg") //seleziona il div dove deve andare
    .attr("width", width)
    .attr("height", height)
    .attr("class", "bubble");

// add the tooltip area to the webpage
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-7, 0])
  .html(function(d) {
    return "<b>" + d.className + "</b>" + ": " + d.value;
  })

svg.call(tip);

d3.json("../data/g3data.json", function(error, root) {
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
      .text(function(d) { return d.className.substring(0, d.r / 3); });

// add title    
svg.append("svg:text")
      .attr("class", "title")
     .attr("x", width - 5)
     .attr("y", 12)
     .style("text-anchor", "end")
     .text("KEYWORDS' FREQUENCY");


  var legend = svg.selectAll(".legend")
      .data(color.domain().slice())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 25 + ")"; }); //Per aumentare spazio tra quadrati

  legend.append("rect")
      .attr("x", width - 18)
      .attr("y", 30)
      .attr("width", 15)
      .attr("height", 15)
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 38)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
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

d3.select(self.frameElement).style("height", diameter + "px");
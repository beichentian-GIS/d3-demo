var container=d3.select("body")
	.append("svg")
	.datum(500)
	.attr("width",function(d){
		console.log(d);
		return d+'px';
	})
	.attr("height","500px")
	.attr("class","container")

var dataArray=[25,45,65,85];
	
var x=d3.scaleLinear()
	.domain([0,50])
	.range([0,480]);
	
	
d3.json("data/MegaCitiesGeo.geojson",function(data){
	console.log(data);
	var h=5;
	var textElements=container.selectAll(".textElement");
	.data(dataArray)
	.enter(); //create a loop
	.append("text")
	.attr("class","textElement")
	.attr("x",0)
	.attr("y",function(d){
		return x(d.properties.Pop_2015);
	})
	.text(function(d){
		return d.properties.City;
	});
})
	

	
console.log(textElements);
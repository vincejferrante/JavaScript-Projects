//When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

//Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:

//It takes 1 second to switch between pencils.
//It takes 2 seconds to color a square.
//See the example below for clarification.

function colorPatternTimes(cols) {
	let arr = cols.filter(function(a, b, c){
  return b === 0 || a !== c[b-1];
	});
	return (arr.length - 1) + (cols.length * 2);
}

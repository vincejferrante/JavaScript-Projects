//To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. 
//He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. 
//This is called a progress day.

//Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.



function progressDays(runs) {
	let arr = []
	for (let i = 0; i <= runs.length; i++) {
		if(runs[i] < runs[i+1]) {
			arr.push(runs[i])
		}
	}
	return arr.length
}

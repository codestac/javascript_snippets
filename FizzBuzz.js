// output.push(1); // to the end of the array
// output.pop(1); // remove from the end of the array
var output = [];
var count = 1;

function fizzBuzz() {
	output.push(count)
	while (count <= 100) { //if you want it to run for multiple times
		if (count % 3 === 0 && count % 5 === 0) {
			output.push("FizzBuzz")
		} else if (count % 3 === 0) {
			output.push("Fizz");
		} else if (count % 5 === 0) {
			output.push("Fizz");
		} else {
			output.push(count)
		}
		count++;
		console.log(output);
	}
};
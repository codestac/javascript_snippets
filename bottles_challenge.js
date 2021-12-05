var numberofBottles = 99;
while (numberofBottles >= 0) {
	var bottleWord = "bottles";
	if (numberofBottles === 1) {
		bottleWord = "bottle"
	} else if (numberofBottles === 0) {
		bottleWord = "No bottle"
	} 
	console.log(numberofBottles + " " + bottleWord + " of beer on the wall");
	console.log(numberofBottles + " " + bottleWord + " of beer,");
	console.log("Take one down, pass it around,");
	numberofBottles--;

	console.log(numberofBottles + " " + bottleWord + " of beer on the wall");
}
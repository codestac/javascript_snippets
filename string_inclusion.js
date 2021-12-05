// check if the string is present in the firsst string with including case sensitivity.
function stringIncludes(str1, str2) {
	let tempStr = str1.toLowercase();
	return tempStr.includes(str2.toLowercase());
}

console.log('string includes', stringIncludes("My name is Pabi", "Pabi"))
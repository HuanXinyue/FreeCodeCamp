function myReplace(str, before, after) {
	console.log(before.match(/[A-Z]/));
	if (before.match(/[A-Z]/)) {
		after = after.slice(0,1).toUpperCase() + after.slice(1).toLowerCase();
	}

	console.log(after);
	var newStr = str.replace(before, after);
	return newStr;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
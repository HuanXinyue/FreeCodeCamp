function myReplace(str, before, after) {
	
	var newStr = str.replace(before, after);
	return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
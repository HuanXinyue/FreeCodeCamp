function reverseString(str) {
	var strArr = str.split("");
	var str = strArr.reverse().join("");
	return str;
}

reverseString("hello");
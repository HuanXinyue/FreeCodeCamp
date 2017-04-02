function palindrome(str) {
	var regEx = /\s+/g;
	str = str.toLowerCase().replace(regEx, "").replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
	var reverseStr = str.split("").reverse().join("");
	return reverseStr == str;
}
palindrome("A man, a plan, a canal. Panama");
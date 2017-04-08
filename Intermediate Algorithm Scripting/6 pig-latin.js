function translate(str) {
	var firstVowel = str.match(/[aeiou]/);
	var index = str.indexOf(firstVowel);
	var newStr = "";
	if (index == 0) {
		newStr = str + "way";
	}else {
		newStr = str.slice(index) + str.slice(0, index) + "ay";
	}
	return newStr;
}

translate("consonant");
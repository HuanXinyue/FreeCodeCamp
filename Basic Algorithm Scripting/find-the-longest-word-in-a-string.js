function findLongestWord(str) {
	var strArr = str.split(" ");
	var longestWord = "";
	for (var i = 0; i < strArr.length; i++) {
		longestWord = longestWord.length >= strArr[i].length? longestWord : strArr[i];
	}
	return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

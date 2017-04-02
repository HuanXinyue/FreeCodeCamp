function repeat(str, num) {
  // repeat after me
  var newStr = "";
  if(num > 0) {
  	for (var i = 1; i < num+1; i++) {
  		newStr += str;
  	}
  }
  return newStr;
}

repeat("abc", -3);

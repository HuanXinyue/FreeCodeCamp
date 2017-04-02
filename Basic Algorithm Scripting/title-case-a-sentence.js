function titleCase(str) {
	var strArr = str.split(" ");
	for (var i = 0; i < strArr.length; i++) {
		strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1).toLowerCase();
	}
	str = strArr.join(" ");
  return str;
}

titleCase("I'm a little tea pot");

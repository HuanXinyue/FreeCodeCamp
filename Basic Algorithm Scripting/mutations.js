function mutation(arr) {
	var strArr = arr[1].split("");
    for (var i = 0; i < strArr.length; i++) {
    	if (arr[0].toLowerCase().indexOf(strArr[i].toLowerCase()) == -1) {
    		return false;
    	}
    }
    return true;
}

mutation(["hello", "He"]);

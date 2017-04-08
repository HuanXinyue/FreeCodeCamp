function fearNotLetter(str) {
	var firstCode = str.charCodeAt(0);
	var length = str.length;
	var lastCode = str.charCodeAt(length - 1); 
	if ((lastCode - firstCode + 1) == length) {
		return undefined;
	}else {
		for(var i = 1; i < length; i++ ) {
			if (str.charCodeAt(i) !== firstCode + i) {
				return String.fromCharCode(firstCode + i);
			}
		}
	}
	
}
fearNotLetter("abce");
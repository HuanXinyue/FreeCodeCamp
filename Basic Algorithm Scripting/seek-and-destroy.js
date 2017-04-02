function destroyer(arr) {
	var tempArguments = arguments;
	return arr.filter(function(val) {
		for(var i = 1; i < tempArguments.length; i++) {
			if (val == tempArguments[i]) {
				return false;
			}
		}
		return true;
	})
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
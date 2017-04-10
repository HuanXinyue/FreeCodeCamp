function steamroller(arr) {
    // I'm a steamroller, baby
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
    	if (Array.isArray(arr[i])) {
    		newArr = newArr.concat(steamroller(arr[i]));
    	}else {
    		newArr.push(arr[i]);
    	}
    }
    return newArr;
}

steamroller([1, [2], [3, [[4]]]]);

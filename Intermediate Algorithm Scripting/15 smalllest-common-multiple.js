function smallestCommons(arr) {
	arr = arr.sort();

	function greatestCommons(num1, num2) {
		if (num2 % num1 == 0) {
		    return num1;
	    }else {
		    return greatestCommons(num2 % num1, num1);
	    }
    }
    var leastCom = arr[0];
    for(var i = arr[0] + 1; i <= arr[1]; i++) {
    	var temp = greatestCommons(leastCom, i);
    	leastCom = leastCom * i / temp;
    }

    return leastCom;
}

smallestCommons([1,5]);


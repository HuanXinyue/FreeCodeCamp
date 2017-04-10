function drop(arr, func) {
  // Drop them elements.
  var bool = false;
  for(var i = 0; i < arr.length; i++) {
  	if (func(arr[i])) {
  		bool = true;
  		arr = arr.slice(i);
  		break;
  	}
  }
  if (!bool) {
  	arr = [];
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });

function where(arr, num) {
  // Find my place in this sorted array.
  var sortedArr = arr.sort(function(a, b) {
    return a-b;
  });
  for (var i = 0; i < sortedArr.length; i++) {
  	if (num <= sortedArr[i]) {
  		return i;
  	}
  }
  return sortedArr.length;
}

where([40, 60], 50);

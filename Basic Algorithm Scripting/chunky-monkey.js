function chunk(arr, size) {
  // Break it up.
  var newArr = [];
  for(var i = 0; i < arr.length; i= i+size) {
  	var arr1 = [];
  	for(var j = 0; j < size; j++) {
  		if(arr[i+j] !== undefined){
  			arr1.push(arr[i+j]);
  		}
  	}
  	newArr.push(arr1);
  }
  return newArr;
}

chunk(["a", "b", "c", "d"], 3);

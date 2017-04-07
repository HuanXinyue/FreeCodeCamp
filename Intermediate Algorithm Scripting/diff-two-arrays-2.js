function diff(arr1, arr2) {
	var newArr = [];
	// Same, same; but different
	var arr1F = arr1.filter(function(val) {
		return arr2.indexOf(val) == -1;
	});
	var arr2F = arr2.filter(function(val) {
		return arr1.indexOf(val) == -1;
	})
	newArr = arr1F.concat(arr2F);
	return newArr;
}

diff([1, 2, 3, 5], [1, 5]);
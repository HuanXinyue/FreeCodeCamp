function unite(arr1, arr2, arr3) {
	// 拼接数组
	var unionArr = arr1.concat(arr2, arr3);
	// 数组去重
	var finalArr = [];
	var temp = {};
	for(var i = 0; i < unionArr.length; i++) {
		if (!temp[unionArr[i]]) {
			temp[unionArr[i]] = true;
			finalArr.push(unionArr[i]);
		}
	}
  return finalArr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

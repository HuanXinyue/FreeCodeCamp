function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArr = arr.slice(howMany);
  return newArr;
}

slasher([1, 2, 3], 2);

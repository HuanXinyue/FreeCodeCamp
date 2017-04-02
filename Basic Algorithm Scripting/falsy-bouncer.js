function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = arr.filter(function(val) {
  	return Boolean(val) !== false;
  })
  return newArr;
}

bouncer([7, "ate", "", false, 9]);

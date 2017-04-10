function sym(args) {
	var argsArr = Array.prototype.slice.call(arguments);
	return argsArr.reduce(function(acc, cur) {
		var set = [];
		for(var i = 0; i < acc.length; i++) {
		   if (cur.indexOf(acc[i]) < 0 && set.indexOf(acc[i]) < 0) {
		       set.push(acc[i]);
		   }
		}
	    for(var i = 0; i < cur.length; i++) {
		    if (acc.indexOf(cur[i]) < 0 && set.indexOf(cur[i]) < 0) {
			    set.push(cur[i]);
		    }
	    }
	    return set;
	});
}

sym([1, 2, 3], [5, 2, 1, 4]);
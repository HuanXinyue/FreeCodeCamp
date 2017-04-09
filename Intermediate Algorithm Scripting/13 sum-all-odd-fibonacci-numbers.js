function sumFibs(num) {
	// 先求斐波拉契
	var fib = [1, 1]
	for (var i = 2; fib[i-1] < num; i++) {
		fib.push(fib[i-1] + fib[i-2]);
	}
	var sum = fib.reduce(function(ac, val) {
		if (val <= num && val%2 == 1) {
			return ac + val;
		}else {
			return ac;  //reduce每一次必须明确有accumulator返回，没有就是undefined,无法进行下一个操作
		}
	}, 0);
    return sum;
  
}

sumFibs(4);

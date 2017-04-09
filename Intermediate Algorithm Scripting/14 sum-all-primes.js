function sumPrimes(num) {
	var primes = [];
	for(var i = 2; i <= num; i++) {
		var isPrimes = true;
		for (var j = 0; j < primes.length; j++) {
			if (i % primes[j] == 0) {
				isPrimes = false;
				break;
			}
		}
		if (isPrimes) primes.push(i);
	}
	var sum = primes.reduce(function(acc,val){
		console.log(val);
		return acc + val;
	});
	return sum;
}

sumPrimes(10);
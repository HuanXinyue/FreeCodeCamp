function factorialize(num) {
	if (num < 1) {
		return 1;
	}
	for(var i= num - 1; i > 0; i--){
		num *= i;
	}
	return num;
}

factorialize(5);
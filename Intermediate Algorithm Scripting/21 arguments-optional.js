function add() {
	if (arguments.length == 1 && typeof arguments[0] == "number") {
		var num1 = arguments[0];
		return function (num2) {
			if (typeof num2 == "number") {
				return num1 + num2;
			}else {
				return undefined;
			}
			
		};
	} else if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
		return arguments[0] + arguments[1];
	}else {
		return undefined;
	}
}

add(2,3);

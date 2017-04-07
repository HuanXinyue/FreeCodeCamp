function convert(num) {
	var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	var str = "";
	// 这里的str要先初始化，不然会在结果中+undefined
	nums.forEach(function(item, index, array) {
		while (num >= item) {
			str += romans[index];
			num -= item;
		}
	});
	return str;
}
convert(2343);
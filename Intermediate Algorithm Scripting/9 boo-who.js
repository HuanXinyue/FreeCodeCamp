function boo(bool) {
	return Object.prototype.toString.call(bool) == "[object Boolean]";
}

boo(null);
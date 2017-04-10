function telephoneCheck(str) {
	// body...
	var reg = /^1? ?(\d{3}|\(\d{3}\))(-| )?\d{3}(-| )?\d{4}$/;
	return reg.test(str);
}

telephoneCheck("555-555-5555");
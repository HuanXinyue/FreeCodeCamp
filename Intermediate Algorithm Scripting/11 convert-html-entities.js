function convert(str) {
	var re = /[\&\<\>\"\']/g;
	var entities = {
		"&" : "&​amp;",
		"<" : "&lt;",
		">" : "&gt;",
		'\"': "&quot;",
		"\'": "&​apos;"
	};
	str = str.replace(re, function(val) {
		return entities[val];
	});
	return str;
}

convert("Dolce && Gabbana");

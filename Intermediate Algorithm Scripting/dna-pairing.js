function pair(str) {
	var strArr = str.split("");
	var pairs = [];
	var temp = []
	strArr.forEach(function(val) {
		switch (val){
			case "A": temp = ["A", "T"]; break;
			case "T": temp = ["T", "A"]; break;
			case "G": temp = ["G", "C"]; break;
			case "C": temp = ["C", "G"]; break;
		}
		pairs.push(temp);
	});
	return pairs;
}
pair("GCG");
function every(collection, pre) {
  // Is everyone being true?
    collection.every(function(val){
    	return val[pre];
    });
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

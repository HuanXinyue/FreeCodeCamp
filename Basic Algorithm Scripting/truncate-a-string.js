function truncate(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
  	if (num <= 3) {
  		str = str.slice(0,num).concat("...");
  	}else {
  		str = str.slice(0,num-3).concat("...");
  	}
  }
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);

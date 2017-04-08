function where(collection, source) {
  var arr = [];
  // What's in a name?
  sourceKeys = Object.keys(source);
  for (var i = 0; i < collection.length; i++) {
    var count = 0;
    for(var j = 0; j < sourceKeys.length; j++) {
      if (collection[i].hasOwnProperty(sourceKeys[j])  &&
        collection[i][sourceKeys[j]] == source[sourceKeys[j]]) {
        count++;
      }
    }
    if (count==sourceKeys.length ) {
      arr.push(collection[i]);
    }
  }
  return arr; 
}

// where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// 移位密码也就是密码中的字母会按照指定的数量来做移位。
// 写一个ROT13函数，实现输入加密字符串，输出解密字符串。

function rot13(str) { // LBH QVQ VG!
  var arr = [];
  for (var i = 0; i < str.length; i++ ) {
  	if (str[i].match(/[A-M]/)) {
  		arr.push(String.fromCharCode(str.charCodeAt(i)+13));
  	}else if(str[i].match(/[N-Z]/)) {
  		arr.push(String.fromCharCode(str.charCodeAt(i)-13));
  	}else {
  		arr.push(str[i]);
  	}
  }
  return arr.join("");
}
// Change the inputs below to test
rot13("SERR PBQR PNZC!");

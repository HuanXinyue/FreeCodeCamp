function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  // 如果是以类似驼峰命名连接的字符串，先添加空格处理
  str = str.replace(/([A-Z])/g, " $1");
  
  str = str.replace(/[\s|_]+/g, "-").toLowerCase();
  
  if (str.indexOf("-")==0) {
  	str = str.slice(1);
  }
  return str;
}

spinalCase("The Andy _Griffith show");

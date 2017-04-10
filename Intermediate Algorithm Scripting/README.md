## Intermediate Algorithm Scripting

### 1.  Sum all numbers in a range

> 我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。
>
> 最小的数字并非总在最前面。
>
> 如果你被难住了，记得使用 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。
>
> 这是一些对你有帮助的资源:
>
> - [Math.max()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
>
>
> - [Math.min()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
>
>
> - [Array.reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

#### (1) Math.max()

返回给定的一组数字中的最大值，如果给定的参数中至少有一个无法被转换成数字，则返回NaN，如果没有参数，则结果为-Infinity

**使用apply方法寻找一个数值数组中的最大元素**

```javascript
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

或者通过使用最新的扩展语句[`spread operator`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator)，获得数组中的最大值变得更容易。

```javascript
var arr = [1, 2, 3];
var max = Math.max(...arr);
```

#### (2) Array.reduce()

`**reduce()**` 方法对累加器和数组的每个值 (从左到右)应用一个函数，以将其减少为单个值。

```javascript
[0,1,2,3,4].reduce(function(accumulator, currentValue, currentIndex, array){
  return accumulator + currentValue;
});
```

callback 被调用四次，每次调用的参数和返回值如下表：

|             | accumulator | currentValue | currentIndex | array        | return value |
| ----------- | ----------- | ------------ | ------------ | ------------ | ------------ |
| first call  | 0           | 1            | 1            | [0,1,2,3,4]  | 1            |
| second call | 1           | 2            | 2            | [0,1,2,3,4]` | 3            |
| third call  | 3           | 3            | 3            | [0,1,2,3,4]  | 6            |
| fourth call | 6           | 4            | 4            | [0,1,2,3,4]  | 10           |

如果提供了初始值，则accumulator为初始值，如果没有，则accumulator=arr[0]



### 2. Diff Two Arrays

> 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。

这道题应该是只考虑数组中的项都是值类型

方法一：利用for循环

方法二：利用Array的filter方法



### 3. Roman Numeral Converter

> 将给定的数字转换成罗马数字。
>
> 所有返回的 [罗马数字](http://www.mathsisfun.com/roman-numerals.html) 都应该是大写形式。

**罗马数字计算规则 Forming Numbers - The Rules** 

- When a symbol appears **after a larger** symbol it is **added**
  - Example: VI = V + I = 5 + 1 = 6
- But if the symbol appears **before a larger** symbol it is **subtracted**
  - Example: IX = X - I = 10 - 1 = 9
- Don't use the same symbol more than three times in a row (but IIII is sometimes used for 4, particularly on clocks)

| 1     | 5     | 10    | 50    | 100   | 500   | 1000  |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **I** | **V** | **X** | **L** | **C** | **D** | **M** |

```javascript
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
```



### 4. Where art thou

> 写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
>
> 例如，如果第一个参数是 `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`，第二个参数是 `{ last: "Capulet" }`，那么你必须从数组（第一个参数）返回其中的第三个对象，因为它包含了作为第二个参数传递的属性-值对。



#### (1) Object.keys()

**Object.keys()** 方法会返回一个由给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 [`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。



#### (2) for...in

`for...in` 语句用于对数组或者对象的**可枚举**的属性进行循环操作。

```javascript
for ( variable in obj) {
  //codes
}
// 变量用来指定变量，既可以是数组元素，也可以是对象属性
```

**Attention**：

1. `for...in` 循环不会按照属性的下标来排列输出
2. `for...in` 输出的是数组的索引而不是数组内容




### 5. Search and Replace

> 使用给定的参数对句子执行一次查找和替换，然后返回新句子。
>
> 第一个参数是将要对其执行查找和替换的句子。
>
> 第二个参数是将被替换掉的单词（替换前的单词）。
>
> 第三个参数用于替换第二个参数（替换后的单词）。
>
> 注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
>
> - [Array.splice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
>
>
> - [String.replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
>
>
> - [Array.join()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

这道题考察了之前的一个知识点，如何用JS实现首字母大写，其实CSS中更好实现

另外`indexOf` 参数只能是字符串，而`match` `search` 才可以放正则哦



### 6. Pig Latin

> 把指定的字符串翻译成 pig latin。
>
> [Pig Latin](http://en.wikipedia.org/wiki/Pig_Latin) 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。
>
> 如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
>
> - [Array.indexOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
>
>
> - [Array.push()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
>
>
> - [Array.join()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
>
>
> - [String.substr()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
>
>
> - [String.split()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)

这道题依然是字符串拼接，但是如果字符串没有元音怎么办。。。那就保持不变吗。。。



翻到了一种更好的写法...............

```javascript
function translate(str) {
  str = str.replace(/\b([aeiou][a-z]*)\b/gi, "$1way"); // 表示，如果开头为aeiou，那么尾部加上way
  str = str.replace(/\b([bcdfghjklmnpqrstvwxy]+)([a-z]*)\b/gi, "$2$1ay"); // 如果开头为辅音，第二部分——第一部分——ay
  return str;
}
```





### 7. DNA Pairing

> DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。
>
> [Base pairs（碱基对）](http://en.wikipedia.org/wiki/Base_pair) 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。
>
> 在每一个数组中将给定的字母作为第一个碱基返回。
>
> 例如，对于输入的 GCG，相应地返回 [["G", "C"], ["C","G"],["G", "C"]]
>
> 字母和与之配对的字母在一个数组内，然后所有数组再被组织起来封装进一个数组。

题目没难度，但是欺负我生物全忘光了吗（哭哭...理科生的尊严没有了）



### 8. Missing letters

> 从传递进来的字母序列中找到缺失的字母并返回它。
>
> 如果所有字母都在序列中，返回 undefined。

#### (1) String.charCodeAt() 

```javascript
String.fromCharCode(num1, ..., numN) 
```



#### (2) String.fromCharCode()

```javascript
str.charCodeAt(index);

```

字符串的最后一个必须用`str.charCodeAt(str.length - 1)`, 不存在str[-1]



在这道题中，记得检测到最后一个字母，很有可能就是最后一个字母有问题，然后被跳过了



### 9. Boo who

> 检查一个值是否是基本布尔类型，并返回 true 或 false。

检测数据类型的终极法宝

```javascript
Object.prototype.toString.call(item) == "[object type]";
```



### 10. Sorted Union

> 写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
>
> 换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。

网上看到的一篇关于 [JavaScript中合并数组的N种方法](http://www.jb51.net/article/55204.htm)

觉得很棒啊，咱什么时候能到主动分析输出文章的阶段呐

```javascript
a = b.reduce( function(accumulator,currentValue){
    coll.push( item );
    return coll;
}, a );
a; // [1,2,3,4,5,6,7,8,9,"foo","bar","baz","bam","bun","fun"]
```

宝宝我上午刚刚对`reduce` 有一点了解了，又来/(ㄒoㄒ)/~~

这道题第二个关键点是数组的去重，最常规的是经过两次循环

```javascript
function unite(arr1, arr2, arr3) {
	// 拼接数组
	var unionArr = arr1.concat(arr2, arr3);
	// 数组去重
	var finalArr = [unionArr[0]];
	for(var i = 1; i < unionArr.length; i++) {
		var repeated = false;
		for(var j = 0; j < finalArr.length; j++) {
			if (unionArr[i] == finalArr[j]) {
				repeated = true;
				break;
			}
		}
		if (!repeated) finalArr.push(unionArr[i]);
	}
  return finalArr;
}
```

比较高效的方法是

```javascript
function unite() {
	// 拼接数组
	var unionArr = [];
    unionArr = unionArr.concat(...arguments);
	// 数组去重
	var finalArr = [];
	var temp = {};
	for(var i = 0; i < unionArr.length; i++) {
		if (!temp[unionArr[i]]) {
			temp[unionArr[i]] = true;
			finalArr.push(unionArr[i]);
		}
	}
  return finalArr;
}
unite([1, 3, 2], [5, 2, 1]);
```

但是在题目中忽略了参数个数的问题，导致了传入两个数组时arr3未定义，所以以后要多加注意

### 11. Convert HTML Entities

> 将字符串中的字符 `&`、`<`、`>`、`"` （双引号）, 以及 `'` （单引号）转换为它们对应的 HTML 实体。
>
> - [RegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
>
>
> - [HTML Entities](http://dev.w3.org/html5/html-author/charref)

第一次写的思路有问题，

```javascript
function convert(str) {
	var re = /[\&\<\>\"\']/g;
	var entities = {
		"&" : "&amp;",
		"<" : "&lt;",
		">" : "&gt;",
		'\"': "&quot;",
		"\'": "&apos;"
	};
	var arr = str.match(re);
	for(var i = 0; i < arr.length; i++) {
		str = str.replace(arr[i], entities[arr[i]]);
	}
	return str;
}

convert("Dolce && Gabbana"); // "Dolce &amp;amp;& Gabbana"
```

如果str中有两个&，第一次替换之后就会多出来一个“& amp;，所以必须在原字符串上直接替换。

```javascript
function convert(str) {
	var re = /[\&\<\>\"\']/g;
	var entities = {
		"&" : "&amp;",
		"<" : "&lt;",
		">" : "&gt;",
		'\"': "&quot;",
		"\'": "&apos;"
	};
	str = str.replace(re, function(val) {
		return entities[val];
	});
	return str;
}
convert("Dolce && Gabbana");
```



### 12. Spinal Tap Case

> 将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。

第一次真正使用正则的分组，纪念一下

```javascript
str = str.replace(/([A-Z])/g, " $1");

// str = str.replace(/[A-Z]/g, function(val){
  return " "+val;
})
```



### 13. Sum All Odd Fibonacci Numbers

> 给一个正整数`num`，返回小于或等于`num`的斐波纳契奇数之和。
>
> 斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。
>
> 例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。
>
> 提示：此题不能用递归来实现斐波纳契数列。因为当`num`较大时，内存会溢出，推荐用数组来实现。
>
> 参考文档：[博客园](http://www.cnblogs.com/meteoric_cry/archive/2010/11/29/1891241.html)，[Issue](https://github.com/FreeCodeCampChina/freecodecamp.cn/issues/19)

一看到斐波拉契就想到递归，结果说会内存泄露 无奈，不过以前真没考虑过，初学渣渣。

```javascript
var sum = fib.reduce(function(ac, val) {
	if (val <= num && val%2 == 1) {
		return ac + val;
	}else {
		return ac;  //reduce每一次必须明确有accumulator返回，没有就是undefined,无法进行下一个操作
	}
}, 0);
```

**Attention:**  reduce每一次必须明确有accumulator返回，没有就是undefined,无法进行下一个操作



### 14. Sum All Primes

> 求小于等于给定数值的质数之和。
>
> 只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。
>
> 给定的数不一定是质数。

最开始的思路就是一个个试看是不是质数

```javascript
function sumPrimes(num) {
	var primes = [];
	for(var i = 2; i <= num; i++) {
		var isPrimes = true;
		for (var j = 2; j < i; j++) {
			if (i % j == 0) {
				isPrimes = false;
				break;
			}
		}
		if (isPrimes) primes.push(i);
	}
	var sum = primes.reduce(function(acc,val){
		console.log(val);
		return acc + val;
	});
	return sum;
}
sumPrimes(10);
```

觉得太麻烦，所以就去翻了一下质数的求法，真的是在笔算的时候还记得只要除以质数去判断，到了电脑上就忘了...

```javascript
function sumPrimes(num) {
	var primes = [];
	for(var i = 2; i <= num; i++) {
		var isPrimes = true;
		for (var j = 0; j < primes.length; j++) {
			if (i % primes[j] == 0) {
				isPrimes = false;
				break;
			}
		}
		if (isPrimes) primes.push(i);
	}
	var sum = primes.reduce(function(acc,val){
		console.log(val);
		return acc + val;
	});
	return sum;
}

sumPrimes(10);
```



### 15. Smallest Common Multiple

> 找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。
>
> 范围是两个数字构成的数组，两个数字不一定按数字顺序排序。
>
> - [Smallest Common Multiple](https://www.mathsisfun.com/least-common-multiple.html)

- 首先要了解`欧拉算法`求最大公约数
- 用彼此的乘机除以最大公约数求得最小公倍数

**欧拉算法**

求两个数的最大公约数，用大数对小数求模，如果能被整除，则小数是这两个数之间的最大公约数

如果不能整除，就用小数对余数再次求模，循环此过程直到返回能除尽的那个除数

```javascript
function greatestCommons(num1, num2) {
	if (num2 % num1 == 0) {
		return num1;
	}else {
		return greatestCommons(num2 % num1, num1);
	}
}
```



### 16. Find Keepers

> 写一个 function，它浏览数组（第一个参数）并返回数组中第一个通过某种方法（第二个参数）验证的元素。

```javascript
function find(arr, func) {
  arr = arr.filter(func);
  return arr[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
```

突然来道这么简单的题，逗我吗。。。



### 17. Drop it

> **队友该卖就卖，千万别舍不得。**
>
> 让我们来丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止。
>
> 第二个参数，`func`，是一个函数。用来测试数组的第一个元素，如果返回fasle，就从数组中抛出该元素(注意：此时数组已被改变)，继续测试数组的第一个元素，如果返回fasle，继续抛出，直到返回true。
>
> 最后返回数组的剩余部分，如果没有剩余，就返回一个空数组。

这道题的关键是，只要找到一个就返回之后的所有数组了，之后的项满足条件与否无所谓

```javascript
function drop(arr, func) {
  // Drop them elements.
  var bool = false;
  for(var i = 0; i < arr.length; i++) {
  	if (func(arr[i])) {
  		bool = true;
  		arr = arr.slice(i);
  		break;
  	}
  }
  if (!bool) {
  	arr = [];
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
```



### 18. Steamroller

> 对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。
>
> `steamroller([[["a"]], [["b"]]])` 应该返回 `["a", "b"]`。
>
> `steamroller([1, [2], [3, [[4]]]])` 应该返回 `[1, 2, 3, 4]`。
>
> `steamroller([1, [], [3, [[4]]]])` 应该返回 `[1, 3, 4]`。
>
> `steamroller([1, {}, [3, [[4]]]])` 应该返回 `[1, {}, 3, 4]`。

看到这一道题想起来 百度IFE 2015年的一道克隆数组的题，先进行判断，是数组或对象就利用递归一直搞出最里面的内容就好了

```javascript
function steamroller(arr) {
    // I'm a steamroller, baby
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
    	newArr = Array.isArray(arr[i])? newArr.concat(steamroller(arr[i])) : newArr.push(arr[i]);
    }
    return newArr;
}
steamroller([1, [2], [3, [[4]]]]);

```

可是当我想试图简化一下`if` 的时候，又出bug了

```javascript
newArr = Array.isArray(arr[i])? newArr.concat(steamroller(arr[i])) : newArr.push(arr[i]);
```

报错

```javascript
TypeError: newArr.concat is not a function
```

至今也没想明白，有没有人知道呢......



### 19. Binary Agents

> 传入二进制字符串，翻译成英语句子并返回。
>
> 二进制字符串是以空格分隔的。

（1） 将字符串分割

（2）二进制转十进制

```javascript
toString(2); //转二进制
parseInt("101110100", 2); //转十进制
```

（3）Unicode编码转字符

```javascript
function binaryAgent(str) {
	var arr = str.split(" ");
	str = "";
	arr.forEach(function(val) {
		str += String.fromCharCode(parseInt(val, 2));
	});
    return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

当然在执行的时候，把（2）、（3）合并了，不然要遍历两次数组



### 20. Everything Be True

> **所有的东西都是真的！**
>
> 完善编辑器中的every函数，如果集合(collection)中的所有对象都存在对应的属性(pre)，并且属性(pre)对应的值为真。函数返回ture。反之，返回false。
>
> 记住：你只能通过中括号来访问对象的变量属性(pre)。

```javascript
function every(collection, pre) {
  // Is everyone being true?
    return collection.every(function(val){
    	return val[pre];
    });
}
every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```



### 21. Arguments Optional

> 创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。
>
> 例如，`add(2, 3)` 应该返回 `5`，而 `add(2)` 应该返回一个 function。
>
> 调用这个有一个参数的返回的 function，返回求和的结果：
>
> `var sumTwoAnd = add(2);`
>
> `sumTwoAnd(3)` 返回 `5`。
>
> 如果两个参数都不是有效的数字，则返回 undefined。
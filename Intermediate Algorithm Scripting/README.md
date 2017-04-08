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

网上看到的一篇关于

[JavaScript中合并数组的N种方法]: http://www.jb51.net/article/55204.htm

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

### 11 Convert HTML Entities

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


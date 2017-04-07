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



### Diff Two Arrays

> 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。

这道题应该是只考虑数组中的项都是值类型

方法一：利用for循环

方法二：利用Array的filter方法



### Roman Numeral Converter

> 将给定的数字转换成罗马数字。
>
> 所有返回的 [罗马数字](http://www.mathsisfun.com/roman-numerals.html) 都应该是大写形式。

#### 罗马数字计算规则

** Forming Numbers - The Rules **

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



### Where art thou

> 写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
>
> 例如，如果第一个参数是 `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`，第二个参数是 `{ last: "Capulet" }`，那么你必须从数组（第一个参数）返回其中的第三个对象，因为它包含了作为第二个参数传递的属性-值对。



#### 1. Object.keys()

**Object.keys()** 方法会返回一个由给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 [`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。



#### 2. for...in

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



#### Search and Replace

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



#### Pig Latin

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


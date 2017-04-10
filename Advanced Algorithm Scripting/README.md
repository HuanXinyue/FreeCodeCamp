## Advanced Algorithm Scripting

### 1. Validate US Telephone Numbers

> 如果传入字符串是一个有效的美国电话号码，则返回 `true`.
>
> 用户可以在表单中填入一个任意有效美国电话号码. 下面是一些有效号码的例子(还有下面测试时用到的一些变体写法):
>
> > 555-555-5555
> >
> > (555)555-5555
> >
> > (555) 555-5555
> >
> > 555 555 5555
> >
> > 5555555555
> >
> > 1 555 555 5555
>
> 在本节中你会看见如 `800-692-7753` or `8oo-six427676;laskdjf`这样的字符串. 你的任务就是验证前面给出的字符串是否是有效的美国电话号码. 区号是必须有的. 如果字符串中给出了国家代码, 你必须验证其是 `1`. 如果号码有效就返回 `true` ; 否则返回 `false`.

分析思路

（1）第一位必须以1开头，或者是没有。1后面既可以没有，也可以跟空格

```javascript
/^1? ?/ 
```

（2）如果第一组有括号，则括号要完整，如果没有就全都没有

```javascript
/(\d{3})|\(\d{3}\)/
```

（3）之后的两组比较简单，但是要注意加上`$` 来闭合电话号码，不然数字无限长都可以匹配

```javascript
function telephoneCheck(str) {
	// body...
	var reg = /^1? ?(\d{3}|\(\d{3}\))(-| )?\d{3}(-| )?\d{4}$/;
	return reg.test(str);
}

telephoneCheck("555-555-5555");
```



### 2. Symmetric Difference

> 创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (`△` or `⊕`)数组.
>
> 给出两个集合 (如集合 `A = {1, 2, 3}` 和集合 `B = {2, 3, 4}`), 而数学术语 "对等差分" 的集合就是指由所有只在两个集合其中之一的元素组成的集合(`A △ B = C = {1, 4}`). 对于传入的额外集合 (如 `D = {2, 3}`), 你应该安装前面原则求前两个集合的结果与新集合的对等差分集合 (`C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}`).

（1）将传入的参数转化为数组

方法一：

```javascript
Array.prototype.slice.call(arguments);
```

方法二：

```javascript
[].slice.call(arguments);
```

方法三：

```javascript
Array.from(arguments);
//Array.from() 方法从一个类似数组或可迭代对象创建一个新的数组实例
// ECMA-262
```

#### Array.from()

```javascript
Array.from(arrayLike[, mapFn[, thisArg]]);
```

**1. 参数**

arrayLike：想要转换成真实数组的类数组对象或可遍历对象。
mapFn：可选参数，如果指定了该参数，则最后生成的数组会经过该函数的加工处理后再返回。
thisArg：可选参数，执行 mapFn 函数时 this 的值。

**2. 返回值**

一个新的Array实例

**3. 描述**
Array.from() 允许你创建数组，从：

- 类数组对象（拥有一个 length 属性和若干索引属性的任意对象）
- 可遍历对象（你可以从它身上迭代出若干个元素的对象，比如有 Map 和 Set 等）

**4. 浏览器支持**

| Feature       | Chrome | Firefox (Gecko)                          | Edge  | Internet Explorer | Opera | Safari |
| ------------- | ------ | ---------------------------------------- | ----- | ----------------- | ----- | ------ |
| Basic support | 45     | [32](https://developer.mozilla.org/en-US/Firefox/Releases/32) (32) | (Yes) | 未实现               | (Yes) | 9.0    |

```javascript
function sym(args) {
	var argsArr = Array.prototype.slice.call(arguments);
	return argsArr.reduce(function(acc, cur) {
		var set = [];
		for(var i = 0; i < acc.length; i++) {
		   if (cur.indexOf(acc[i]) < 0 && set.indexOf(acc[i]) < 0) {
		       set.push(acc[i]);
		   }
		}
	    for(var i = 0; i < cur.length; i++) {
		    if (acc.indexOf(cur[i]) < 0 && set.indexOf(cur[i]) < 0) {
			    set.push(cur[i]);
		    }
	    }
	    return set;
	});
}

sym([1, 2, 3], [5, 2, 1, 4]);
```



### 3. Exact Change

> 设计一个收银程序 `checkCashRegister()` ，其把购买价格(`price`)作为第一个参数 , 付款金额 (`cash`)作为第二个参数, 和收银机中零钱 (`cid`) 作为第三个参数.
>
> `cid` 是一个二维数组，存着当前可用的找零.
>
> 当收银机中的钱不够找零时返回字符串 `"Insufficient Funds"`. 如果正好则返回字符串 `"Closed"`.
>
> 否则, 返回应找回的零钱列表,且由大到小存在二维数组中.

panny——1美分，nickel——5美分，dime——1角，quarter，25美分，one：1美元，...5美元，10美元，20美元，100美元。

这道题乍一眼看过去。。就是转[罗马数字的变形](https://github.com/HuanXinyue/FreeCodeCamp/blob/master/Intermediate%20Algorithm%20Scripting/3%20roman-numeral-converter.js)？的确是的哈，不过稍微负责一点点

```javascript
function checkCashRegister(price, cash, cid) {
  // 计算要找零的钱数和总钱数
    var change = (cash - price) * 100;
    var totalCid = 0;
    for(var i = 0; i < cid.length; i++) {
    	totalCid += cid[i][1];
    }
    if (change == 0 || change == totalCid*100) return "Closed";
    // 因为找钱系统在行业中，为了避免浮点数的不精确，通通采用整数计算，所以都乘以100
    cid.forEach(function(arr) {
    	arr[1]*=100;
    });
  //在转换罗马数字的时候，次数没有限制，但是钱有时不够，必须计算减了多少回
    var cidCount = [ 
        [1, cid[0][1]], 
        [5, cid[1][1]/5], 
        [10, cid[2][1]/10], 
        [25, cid[3][1]/25], 
        [100, cid[4][1]/100],  
        [500, cid[5][1]/500],
        [1000, cid[6][1]/1000], 
        [2000, cid[7][1]/2000], 
        [10000, cid[8][1]/10000]  
    ];

    var newCid = [];
    for (var i = cidCount.length-1; i >= 0 ; i--) {
    	var j = 0;
    	while(change >= cidCount[i][0] && j < cidCount[i][1]) {
    		change -= cidCount[i][0];
    		j++;
    	}
    	newCid.push([cid[i][0], j*cidCount[i][0]/100]);
    }
    
    if (change == 0) {
    	return newCid.filter(function(val) {
    		return val[1] != 0;
    	});
    }else {
    	return "Insufficient Funds";
    }
}
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
```



### 4. Inventory Update

> 依照一个存着新进货物的二维数组，更新存着现有库存(在 `arr1` 中)的二维数组. 如果货物已存在则更新数量 . 如果没有对应货物则把其加入到数组中，更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列.

```javascript
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    for(var i = 0; i < arr2.length; i++){
        var exist = false;
        for(var j = 0; j < arr1.length; j++) {
            if (arr2[i][1] === arr1[j][1]) {
                arr1[j][0] += arr2[i][0];
                exist = true;
                break;
            }
        }
        if(!exist) arr1.push(arr2[i]);
    }
    arr1.sort(function(val1, val2) {
        return val1[1].charCodeAt(0) - val2[1].charCodeAt(0);
    });
    return arr1;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```




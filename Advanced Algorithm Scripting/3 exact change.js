function checkCashRegister(price, cash, cid) {
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

    // var faceValue = [0.01, 0.05, 0.10, 0.50, 1.00, ]
    // Here is your change, ma'am.
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
//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
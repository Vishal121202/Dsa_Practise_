/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegtive = x < 0
    let xList = String(x).split("")
     let num = String()
     for (let i = (xList.length -1);i>= 0 ;i--){
num += xList[i]
     }
     num = parseInt(num)

    let isValid = Number.isInteger(num) && num >= -2147483648 && num <= 2147483647;

if(isValid){
    num = isNegtive ? - num : num
    return num
}else{
    return 0
}
};
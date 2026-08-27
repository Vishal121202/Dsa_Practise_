/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num  = String(x).split("").reverse().join("")
    return valid = num == x ? true :false
};
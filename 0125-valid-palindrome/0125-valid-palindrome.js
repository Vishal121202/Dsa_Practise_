/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0
    let right = s.length-1
function isValidChar(char) {
  const code = char.charCodeAt(0);

  const isDigit = code >= 48 && code <= 57;
  const isUpper = code >= 65 && code <= 90;
  const isLower = code >= 97 && code <= 122;

  return isDigit || isUpper || isLower;
}
    while(left <= right){
           
      if(!isValidChar(s[left])){
        left++
        continue
      }
      if(!isValidChar(s[right])){
right--
  continue
      }
   
if(s[left].toLowerCase() == s[right].toLowerCase()){

    left++
    right--
}else{
    return false
}
    }
    return true
};










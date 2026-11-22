
var canConstruct = function(ransomNote, magazine) {

let maxLen = Math.max(ransomNote.length,magazine.length)
console.log(maxLen,ransomNote)
  let magazineObj = {}
  for (let i of magazine ){
    if(magazineObj[i]){
      magazineObj[i] = magazineObj[i] + 1
    }else{
        magazineObj[i] = 1
    }
  }
    console.log(magazineObj)
  for(let i of ransomNote){
    if(magazineObj[i]){
      magazineObj[i] =  magazineObj[i] - 1
      if(magazineObj[i] == 0){
        delete magazineObj[i]
      }
    }else{
      return false
    }
  }
  return true
};

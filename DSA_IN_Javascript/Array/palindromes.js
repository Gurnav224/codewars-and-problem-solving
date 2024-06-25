

function palindromeStr(str){
  return str === str.split('').reverse().join("")  
}

console.log(palindromeStr('leon noel'))

console.log(palindromeStr('hello'))


function palindromeStr2(str){
    let left = 0;
    let right = str.length-1;

    while(left < right){
        if(str[left]!==str[right]){
            return false
        }
        left++;
        right--
    }
    return true
}


console.log(palindromeStr2('hello '))
console.log(palindromeStr2('leon noel'))


function reverseAndMirror(s1,s2) {
  let arr = s1.split('').map((v) => v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase());
 let arr1 = s2.split('').map((v) => v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()).reverse().join('');
let arr2 = arr.join("")
 let arr3 = arr.reverse().join('')
  return arr1 + "@@@" + arr3 + arr2
  }


  console.log(reverseAndMirror("Fish","Water"))
  console.log(reverseAndMirror("Fizz","Buzz"))
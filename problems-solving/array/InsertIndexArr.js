
function insertElement(arr,element,index) {
  const newArr = [...arr.slice(0,index),element,...arr.slice(index)]
 return newArr
}

const array = [1,2,3,4,5,6,7 ]

console.log(insertElement(array, 9, 3));
console.log(insertElement([98,38,282,383,33], 5000, 2))
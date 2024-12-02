

function findMiddleElement(arr){
 let a = arr[0]
 let b = arr[1]
 let c = arr[2]

 // check for a is middle 

  if((a>b && a<c) || (a>c && a<b)){
    return arr.indexOf(a)
  }

// check for if b is middle

if((b>a && b<c) || (b>c && b<a)){
    return arr.indexOf(b)
}
return arr.indexOf(c)
}

console.log(findMiddleElement([2,3,1]));
console.log(findMiddleElement([5,10,14]))
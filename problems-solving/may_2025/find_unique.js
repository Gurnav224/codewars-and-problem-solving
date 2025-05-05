var uniqueInOrder=function(iterable){
  const arr = typeof iterable === 'string' ? iterable.split(''): iterable;
  let unqArr = [];
  let prev;
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i]!==prev){
      unqArr.push(arr[i])
      prev = arr[i]
    }
  }
  
  return unqArr
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
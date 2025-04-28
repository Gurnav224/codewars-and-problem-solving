function solve(arr) {
  //..
  let sorted = [...arr].sort((a,b) => a -b);
  let left = 0;
  let right = sorted.length-1;
  let result = [];
  
  while(left <= right){
    if(left !== right){
      result.push(sorted[right--])
      result.push(sorted[left++]);
    }
    else{
      result.push(sorted[left++])
    }
  }

  return result
}

console.log(solve([12, 4, 8, 5]));

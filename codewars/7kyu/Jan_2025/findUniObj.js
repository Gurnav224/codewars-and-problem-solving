

function findUnique(arr){
  const count = {};
  
  for (let i = 0; i < arr.length; i++){
    count[arr[i]] = (count[arr[i]] || 0) + 1;
  }
  return Object.keys(count).find((val) => count[val] === 1)
}

console.log(findUnique([1,1,1,2,1,1]))

function monkeyCount(n){
  let monkeyArr = [];

  for(let i=1; i<=n; i++){
    monkeyArr.push(i)
  }
  return monkeyArr
}

console.log(monkeyCount(5))
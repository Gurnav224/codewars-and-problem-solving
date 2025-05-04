  function openOrSenior(data){
  // ...
  let res = [];
  
  for(let i = 0;  i < data.length; i++){
    if(data[i][0] >= 55 && data[i][1] > 7){
      res.push("senior")
    }
    else{
      res.push("open")
    }
  }
  return res
}


console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
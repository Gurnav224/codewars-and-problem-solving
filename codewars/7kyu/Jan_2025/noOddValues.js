


function noOdds( values ){
  
  return values.filter((val) => val % 2 === 0)
};


console.log(noOdds([0,1]))
console.log(noOdds([0,1,2,3]))
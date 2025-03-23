

function keysAndValues(data){
  let arr = [];
  const keys = Object.keys(data);
  const values = Object.values(data);
  
  return [keys, values]
}

console.log(keysAndValues({a: 1, b: 2, c: 3}))
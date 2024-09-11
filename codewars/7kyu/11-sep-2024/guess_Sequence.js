function sequence(x) {
//  return Array.from({length:x}).map((_ , i)=> (i+1).toString()).sort().map(Number)

let array = [];

for (let i = 1; i <= x; i++) {
  array.push(i.toString());
}


return array.sort().map(Number)
}

console.log(sequence(16));

console.log(sequence(22))
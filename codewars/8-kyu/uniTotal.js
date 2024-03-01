

function uniTotal(string){
  let sum = 0;
  for(let i=0; i<string.length; i++){
    sum += string.charCodeAt(i)
  }
  return sum
}

console.log(uniTotal('a'))
console.log(uniTotal('aaa'))
console.log(uniTotal("Mary Had A Little Lamb"))


// refactor

const uniTotal2 = str => [...str].reduce((acc,curr)=>acc+curr.charCodeAt(0),0)

console.log(uniTotal2('Hello'))
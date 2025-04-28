function arithmetic(a, b, operator){
  //your code here!
  switch(operator){
    case "add":
    return a + b;
    case "subtract":
    return a - b;
    case "multiply":
    return a * b;
    case "divide":
    return a / b;
  }
}


function arithmetic2(a,b, operator){
  return {
    "add":a + b,
    "subtract":a - b,
    "multiply":a * b,
    "divide":a / b
    }[operator]
}


console.log(arithmetic(3, 5, "add"))
console.log(arithmetic(3, 5, "subtract"))
console.log(arithmetic(3, 5, "multiply"))
console.log(arithmetic(3, 5, "divide"))



console.log(arithmetic2(3, 5, "add"))
console.log(arithmetic2(3, 5, "subtract"))
console.log(arithmetic2(3, 5, "multiply"))
console.log(arithmetic2(3, 5, "divide"))


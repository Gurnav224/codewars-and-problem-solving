

const greet = (name:string):string => {
  return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
}

console.log(greet('rolly'))
console.log(greet('BILLY'))


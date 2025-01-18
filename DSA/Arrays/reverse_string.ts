// reverse a string ex hello => olleh;

function reverseString(str:string):string{
  return str.split('').reverse().join('')
}

console.log(reverseString('hello'));
/*
Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5'



*/


function dashatize(num) {
  
  
  
  return num.toString().split('').map((n) => (n%2 ? `-${n}-`: n)).join('').replace(/--+/g,'-').replace(/^-|-$/g, '')
}

console.log(dashatize(5311))
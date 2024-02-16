
function pythagorean(integers){
    integers.sort((a,b)=>a-b);
 let a = integers[0];
 let b = integers[1];
 let c = integers[2];

 return c**2  === a**2+b**2
}

console.log(pythagorean([3,4,5]))
console.log(pythagorean([3,5,9]))
console.log(pythagorean([3,2,1]))

function paperWork(n,m){
 if(n<0 || m<0){
    return 0
 }
 return m*n;
}

console.log(paperWork(5,5));
console.log(paperWork(5,-5));
console.log(paperWork(-5,-5))

// refactor


const paperWork2 = (n,m)=>n<0 || m<0 ?0:m*n;

console.log(paperWork2(5,5));
console.log(paperWork2(5,-5));
console.log(paperWork2(-5,-5))


function getSum(a,b){
    if(a===b) return a;

    let sum = 0;

    if(a< b){
        for(; a<=b; a++){
            sum = sum + a
        }
    }
    else{
        for(; b<=a; b++){
            sum = sum + b
        }
    }
return sum
}


console.log(getSum(0 , -1))
console.log(getSum(-1 , 0))
// console.log(getSum(0 , 1))
// console.log(getSum(2,2))
// console.log(getSum(-1,2))
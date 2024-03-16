
function isDivisible(n,x,y){
    if(n%x===0 && n%y===0){
        return true
    }
    else{
        return false
    }
}

console.log(isDivisible(3,3,4))
console.log(isDivisible(12,3,4))

const isDivisible2 = (n,x,y)=>(n%x===0 && n%y===0)?true:false;

console.log(isDivisible2(100,10,5))
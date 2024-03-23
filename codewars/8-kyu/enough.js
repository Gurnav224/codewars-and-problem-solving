


function enough(cap,on,wait){
 let totalPassenger = on+wait;

 if(totalPassenger<=cap){
    return 0
 }
 else{
    return totalPassenger-cap
 }
}

console.log(enough(10,5,5))
console.log(enough(100,60,50))
console.log(enough(20,5,5))
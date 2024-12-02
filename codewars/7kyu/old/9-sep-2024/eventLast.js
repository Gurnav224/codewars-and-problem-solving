
function eventLast(numbers){
    
let sum = numbers.reduce((acc,curr , index) => index % 2 ===0 ? acc + curr : acc,0) * numbers[numbers.length -1]

return sum 
}


console.log(eventLast([2,3,4,5]))
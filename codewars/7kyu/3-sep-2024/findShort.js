

function findShort(s){

    let stringLengthArray = s.split(' ').map((string)=>string.length);


    return stringLengthArray.reduce((minimum , currentNumber) => minimum < currentNumber ? minimum : currentNumber)

}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))

// approach 
/*
getttin sting 
use split(' ') method convert it into an array 
['bitcoin','take','over','the',.................],

// method -1 ;

.map((string) => string.length)
[5,6,12,7,9]

.reduce((minimum, number) => minimum < num ? minimum : num)

method - 2
.reduce((smallest , string) =>  smallest.length < string.length ? smallest.length : string.length)

// method -3 

Math.min(...stringLengthArray)
*/
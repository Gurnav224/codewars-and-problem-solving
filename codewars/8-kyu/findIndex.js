
// methdo 1
function find(array,element){
 for(let i=0; i<array.length; i++){
    if(array[i]===element) return i
 }
 return "Not Found"
}


console.log(find([2,3,5,7,11],11))


// method 2

function find2(array,element){
    const index = array.findIndex((val)=>val===element);
    return index!==-1?index:'Not found'
}
console.log(find2([2,3,5,7,11],11))


// method 3;

function find3(array,element){
    return array.includes(element)?array.indexOf(element):'Not found'
}

console.log(find3([12,3,4,6,6,8],6))
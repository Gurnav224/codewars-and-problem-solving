

function checkThreeOrTwo(arr){


  

 let counts = arr.reduce((obj,character)=>{
    obj[character] =  (obj[character] || 0) +1
    return obj
 },{})

 let hasThree = false
 let hasTwo = false

 for(let key in counts){
    if(counts[key]===3){
        hasThree = true
    }
    else if(counts[key] === 2){
        hasTwo = true
    }
 }

 return hasThree && hasTwo
}


console.log(checkThreeOrTwo(["a", "a", "a", "b", "b"]))
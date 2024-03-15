
function findDifference(a,b){
    let vol1 = a.filter(a=>a>0).reduce((acc,curr)=>acc*curr);
    let vol2 = b.filter(a=>a>0).reduce((acc,curr)=>acc*curr);

    if(vol1>vol2){

        return vol1-vol2
    }
    else{
        return vol2-vol1
    }
}


console.log(findDifference([3, 2, 5], [1, 4, 4]))
console.log(findDifference([9, 7, 2], [5, 2, 2]))

// refactor volume 

const findDifference2 = (arr1,arr2)=>{
let vol1 = arr1.reduce((a,b)=>a*b);
let vol2 = arr2.reduce((a,b)=>a*b);

return Math.abs(vol1-vol2)
}

console.log(findDifference2([9, 7, 2], [5, 2, 2]))

function findMissing(arr1 , arr2){
 const sum1 = arr1.reduce((sum , value)=> sum + value , 0);
 const sum2 = arr2.reduce((sum , value) => sum + value , 0);

 return sum1 - sum2
}


console.log(findMissing([1,2,2,3],[1,2,3]))


function findMissing2(arr1 , arr2){

    let arr1Count = {}
    let arr2Count = {}

    for(let num of arr1){
        arr1Count[num] = (arr1Count[num] || 0) + 1;
    }

    for(let num in arr2){
        arr2Count[num] = (arr2Count[num] || 0 ) + 1
    }


    for(let key in arr1Count){
        if(arr1Count[key] != arr2Count[key]){
            return key
        }
    }

    
}


console.log(findMissing2([1,2,2,3],[1,2,3]))
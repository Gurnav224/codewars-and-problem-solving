


function twoSum(arr,target){

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]===target){
                return [i ,j]
            }
        }
    }
}


console.log(twoSum([1,2,3,4,5],9))
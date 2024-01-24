

function positiveSum(arr){

    let sum = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            sum = sum+arr[i]
        }
    }

    return arr.reduce((acc,curr)=>(curr>0?acc+curr:acc),0)
}

let arr = [1,-4,7,12] 

console.log(positiveSum(arr))
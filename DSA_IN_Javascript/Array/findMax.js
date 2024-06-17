


function findMax(arr){
    let max = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

const arr = [10,20,30,40,50];


console.log(findMax(arr))

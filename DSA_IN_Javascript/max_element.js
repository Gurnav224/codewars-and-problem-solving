


function maxElement(arr){
    let maxEle = arr[0]; // Big(1) contant time 


    // Big(n)- linear Time 
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxEle){
            maxEle = arr[i]
        }
    }
    return maxEle
}


let arr = [19,29,49,129,834,5000];

console.log(maxElement(arr))



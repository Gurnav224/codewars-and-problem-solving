

function bubbleSort(arr){
    
    let n = arr.length;

    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1] = temp
            }
        }
    }
   return arr
}

console.log(bubbleSort( [234, 43, 55, 63, 5, 6, 235, 547]))
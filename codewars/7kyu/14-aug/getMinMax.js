
// m-1
function getMinMax(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return [min, max]
}

// console.log(getMinMax([1,2,3,4,5]))

// m-2

function getMinMax2(arr){
    let min = arr.reduce((min,num) => min < num ? min : num);
    let max = arr.reduce((max,num)=>max > num ? max : num);
    
    return [min , max]
}

// console.log(getMinMax2([1,2,3,4,5]))

// m-3

function getMinMax3(arr){
    let min = arr[0];
     let max = arr[0];

     for(let i=1; i<arr.length; i++){

        if(min > arr[i]) {
            min  = arr[i]
        }


        if(max < arr[i]) {
            max = arr[i]
        }


      
     }
     console.log(min)
     console.log(max)

     return [max , min]
}

console.log(getMinMax3([1,2,3,4,5]))
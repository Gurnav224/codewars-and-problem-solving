

function getLargeNumber(arr1, arr2){
    let largerNumber = [];

    for(let i=0; i<arr1.length; i++){
        if(arr1[i] > arr2[i]) {
            largerNumber.push(arr1[i])
        }
        else{
            largerNumber.push(arr2[i])
        }
    }
return largerNumber
}

let arr1 = [13, 64, 15, 17, 88];

let arr2 = [23, 14, 53, 17, 80];

console.log(getLargeNumber(arr1, arr2))
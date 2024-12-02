

const intDiff = (arr, n) => {
    // your code goes here
    let count = 0;


    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j< arr.length; j++){
            if(Math.abs(arr[j]-arr[i]) === n){
                count ++
            }
        }
    }
    return count
  }


  console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4))
  console.log(intDiff([1,1,3,3],2))
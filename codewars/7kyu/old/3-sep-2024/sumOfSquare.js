


function getNumberOfSquares(n) {
    // your code here
    let count = 0;

    let sum = 0 

    for(let i=1; i<n; i++){

       sum = sum +   i**2 


       if(sum < n){
        count ++

       }

    }
    return count
  }


  console.log(getNumberOfSquares(6))
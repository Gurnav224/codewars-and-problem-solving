

function arrayConversion(arr) {
    //coding and coding..

    let isSumIteration = true;

   
    while(arr.length > 1){
        let new_arr = [];
        for(let i=0; i<arr.length; i+=2){
       if(isSumIteration){
        new_arr.push(arr[i]+arr[i+1])
       }
       else{
        new_arr.push(arr[i]*arr[i+1])
       }
        }
        arr = new_arr;
        isSumIteration = !isSumIteration
    }
   return arr[0]
  }


  console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]))
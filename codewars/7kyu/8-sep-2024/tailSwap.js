


function tailSwap(arr) {
    // your code here
     let arrOfString = arr.map((val)=>val.split(':'))

   


        // Swap the second elements of the two arrays
    let temp = arrOfString[0][1];
    arrOfString[0][1] = arrOfString[1][1];
    arrOfString[1][1] = temp;

    return arrOfString.map((val)=>val.join(":"))
  }


  console.log(tailSwap(["abc:123", "cde:456"]))
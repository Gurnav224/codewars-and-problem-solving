function printFibonacciSeries(n) {
    if(n<1){
        console.log("Invalid numbers")
    }

    let first = 0;
    let second = 1;
    let third = first+second;

    for(let i=1; i<=n; i++){
        console.log(first)
    
        first = second;
        second = third
        third = first+third
    }


  }
  
  let num = 10;
  printFibonacciSeries(num);
  
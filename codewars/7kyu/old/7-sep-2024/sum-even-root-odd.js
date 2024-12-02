const sumSquareEvenRootOdd = ns => {
    // your code goes here
    if(ns.length ===0) return 0;

    const updateArray = ns.map((value) => value%2===0 ? value*value : Math.sqrt(value))
return Number(updateArray.reduce((sum,current)=> sum + current , 0).toFixed(2))
  };


  console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))
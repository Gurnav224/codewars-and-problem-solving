var lengthOfSequence = function (arr, n) {
    // TODO: Write some scripts here
    const startIndex = arr.indexOf(n);
    const lastIndex = arr.lastIndexOf(n);

     // Count occurrences of n
     const count = arr.filter(num => num === n).length;
    
     // If n occurs less than or more than twice, return 0
     if (count !== 2) {
         return 0;
     }

    const subArray = arr.slice(startIndex , lastIndex+1)
    return subArray.length
  };


  console.log(lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9],7));
  console.log(lengthOfSequence([1,1],1))
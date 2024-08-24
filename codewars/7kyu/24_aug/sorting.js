

function sort(initializeArray, sortingArray){

  let newArray = new Array(sortingArray.length);

  for(let i=0; i<sortingArray.length; i++){
    newArray[sortingArray[i]] = initializeArray[i]
  }
return newArray
}


console.log(sort(['x', 'y', 'z'], [1, 2, 0]))


function getLength(arr){
    //return length of arr
    return arr.length;
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0]
  }
  function getLast(arr){
    //return the last element of arr
    return arr[arr.length-1]
  }
  function pushElement(arr){
    var el=1;
    //push el to arr
    arr.push(el)
    return arr
  }
  function popElement(arr){
    //pop an element from arr
    let ar = arr;
    ar.pop()
    return ar
  }


  console.log(getLength([1,2,3]));
  console.log(getFirst([1,2,3]));
  console.log(getLast([1,2,3]));
  console.log(pushElement([1,2,3]));
  console.log(popElement([1,2,3]))
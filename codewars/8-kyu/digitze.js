function digitize(n) {
    //code here
    let str = n+""
    let arr = []
    for(let i=0; i<str.length; i++){
       arr.unshift(parseInt(str[i]))
    }
    return arr
  }

  console.log(digitize(35231))
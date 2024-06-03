

function divisibleByLast(n) {
    let str = n.toString().split('')
    let arr = [false];  // The first element is always 
    

    // for(let i=1; i<str.length; i++){
    //     let currentDigit = parseInt(str[i]);
    //     let previousDigit  = parseInt(str[i-1]);

    //     arr.push(currentDigit!==0 && currentDigit%previousDigit===0)
    // }



    arr = str.map((value,index,array)=>{
        if(index===0){
            return false
        }

        let currentDigit = parseInt(value);
        let prevDigit = parseInt(array[index-1]);

        return currentDigit !==0 && currentDigit%prevDigit===0
    })

    return arr;
  }


  console.log(divisibleByLast(73312))


function squareOrSquareRoot(arr){
 let newArr = [];
 for(let i=0; i<arr.length; i++){
    const squareRoot = Math.sqrt(arr[i])
    if(Number.isInteger(squareRoot)){

        newArr.push(squareRoot)
    }
    else{
        newArr.push(arr[i]*arr[i])
    }
 }
 return newArr
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]))


// refactor

function squareOrSquareRoot2(arr){
    return arr.map((num)=>{
        const squareRoot = Math.sqrt(num);
        return Number.isInteger(squareRoot)?squareRoot:num*num
    })
}

console.log(squareOrSquareRoot2([4,3,9,7,2,1]))


function isperfectSqrt(num){
    if(num >=0){
        let squared = Math.floor(Math.sqrt(num));

        return squared * squared === num;
    }
}

function perfectSquare(num){

    if(isperfectSqrt(num)) {
        let nextSquared = Math.sqrt(num)+1;
        return nextSquared * nextSquared
    }
    
 return -1
}




console.log(perfectSquare(121))
console.log(perfectSquare(625))
console.log(perfectSquare(114))
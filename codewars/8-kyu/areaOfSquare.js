


function areaOfSquare(A){
    let result = Math.pow(A / (0.5 * Math.PI), 2);
    return Math.round(result * 100) / 100; // 
}

console.log(areaOfSquare(2))
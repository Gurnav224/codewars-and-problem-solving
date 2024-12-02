


function highAndLow(numbers){

    let arrayOfNumb = numbers.split(' ');

    let max = Math.max(...arrayOfNumb);

    let min = Math.min(...arrayOfNumb);


    return [max,min].join(" ")
}

console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5"))
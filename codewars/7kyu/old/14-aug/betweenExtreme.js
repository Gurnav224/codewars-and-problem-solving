

function betweenExtreme(numbers){

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);


    return max - min

}

console.log(betweenExtreme([23, 3, 19, 21, 16]))
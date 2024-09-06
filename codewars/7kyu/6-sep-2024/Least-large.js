

function leastLarge(a, i){
    if(a.length === 0 || i<0 || i>=a.length ) return -1;

    const target = a[i];

    const largerElements = a.filter((val)=> val > target);

    if(largerElements.length === 0) return -1

    let indexOfLargeNumber = Math.min(...largerElements)

    return a.indexOf(indexOfLargeNumber)
}


console.log(leastLarge( [4, 1, 3, 5, 6], 0 ))

console.log(leastLarge( [4, 1, 3, 5, 6], 4))


function startingMark(height){
    let height1 = 1.52;
    let mark1 = 9.45;
    let height2 = 1.83;
    let mark2 = 10.67;

    let slope = (mark2-mark1)/(height2-height1);
    let offset = mark1-slope*height1;

    const staring = slope*height+offset;

    return Math.round(staring*100)/100
}

console.log(startingMark(1.83))
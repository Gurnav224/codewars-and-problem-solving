

function barTriangle(p1,p2,p3){
    const x1 = p1[0]
    const x2 = p2[0]
    const x3 = p3[0]

    const y1 = p1[1]
    const y2 = p2[1]
    const y3 = p3[1]

    let Xa = parseFloat((( x1+x2+x3)/3).toFixed(4));

    let Ya = parseFloat(((y1+y2+y3)/3).toFixed(4));


    return [Xa,Ya]
}

console.log(barTriangle([4,6],[12,4],[10,10]))
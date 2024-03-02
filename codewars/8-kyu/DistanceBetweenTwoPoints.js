

function distanceBetweenTwoPoints(point1,point2){ 
    let x1 = point1.x 
    let y1 = point1.y;

    let x2 = point2.x;
    let y2 = point2.y;
    let x = x2-x1;
    let y = y2-y1
    return Math.sqrt(x**2+y**2)
}

let point1 = {x:3,y:3};
let point2 = {x:3,y:3}

console.log(distanceBetweenTwoPoints(point1,point2))
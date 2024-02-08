
function slope(points){
 let x1 = points[0];
 let y1 = points[1];
 let x2 = points[2];
 let y2 = points[3];

 let m =( y2-y1)/(x2-x1);
 if(isNaN(m) || !isFinite(m)){
    return undefined;
 }
 return m.toString()
}

console.log(slope([19,3,20,3]))
console.log(slope([2,7,4,-7]))
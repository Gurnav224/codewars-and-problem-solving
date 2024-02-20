

function symmetricPoints(p,q){
 let deltaX = q[0]-p[0];
 let deltaY = q[1]-p[1];

 let p1_x = q[0] + deltaX;
 let p1_y = q[1]+deltaY;

 return [p1_x, p1_y]

}

console.log(symmetricPoints([0,0],[1,1]))


function getSize(width,height,depth){
 let area = 2*width*height+2*height*depth+2*width*depth;
 let volume = width*height*depth
 return [area,volume]
}

console.log(getSize(4,2,6))
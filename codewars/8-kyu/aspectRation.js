

function aspectRatio(x,y){
 let newWidth = Math.ceil((y*16)/9)
 return [newWidth,y]
}

console.log(aspectRatio(640,480))

function grow(x){
 
    // let multi = 1;
  
    // for(let i=0; i<x.length; i++){
    //   multi = multi*x[i]
    // }
    // return multi

    return x.reduce((acc,curr)=>acc*curr,1)
}

console.log(grow([1,2,3]))
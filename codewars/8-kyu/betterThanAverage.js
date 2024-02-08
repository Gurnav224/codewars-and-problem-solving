

function betterThanAverage(classPoints,yourPoints){
 let addMyscore = [...classPoints,yourPoints];
 let total = 0;
 for(let i=0; i<addMyscore.length; i++){
    total += addMyscore[i]
 }
 
 let classAverage = Math.round(total/addMyscore.length);


 return yourPoints>classAverage
}


console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88],75))


// refactor using reduce


const classAverage = (classPoints,yourPoints)=> [...classPoints,yourPoints].reduce((acc,curr)=>acc+curr,0)/[...classPoints,yourPoints].length<yourPoints;


console.log(classAverage([100, 40, 34, 57, 29, 72, 57, 88],75))
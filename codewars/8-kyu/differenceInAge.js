

function differenceInAge(ages){

   let max  = ages[0];
   let min = ages[0];

   for(let i=0; i<ages.length; i++){
    if(ages[i]>max){
        max = ages[i]
    }
   }

   for(let j=0; j<ages.length; j++){
    if(ages[j] < min){
        min = ages[j]
    }

   }

   let diff = max-min


   return [min , max , diff]
}


console.log(differenceInAge([82, 15, 6, 38, 35]))


// approach 2;

function differenceInAge2(ages){
 let sortedarr = ages.sort((a,b)=>a-b);
 let min  = ages[0];
 let max = ages[ages.length-1]
 return [min, max, max-min]
}


console.log(differenceInAge2([82, 15, 6, 38, 35]))


// approach 3;

function differenceInAge3(ages){
    let max = Math.max(...ages);
    let min = Math.min(...ages);

    return [min, max, max-min]

}

console.log(differenceInAge3([82, 15, 6, 38, 35]))
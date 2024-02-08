


function catYearDogsYears(humanYears){
   let dogYears = 0;
   let catYears = 0;

   if(humanYears>=1){
    dogYears += 15;
    catYears += 15
   }
   if(humanYears>=2){
    dogYears += 9;
    catYears += 9
   }
   if(humanYears>=3){
    dogYears += (humanYears-2)*5;
    catYears += (humanYears-2)*4;
   }

   return [humanYears,catYears,dogYears]
}


console.log(catYearDogsYears(2))


// any Human Years


function anyHumanYears(humanYears){
 let dog = 0;
 let cat  = 0;

 for(let i=1; i<=humanYears; i++){
    if(i===1){
        
        dog += 15;
        cat += 15
    }
    else if(i===2){
        dog += 9;
        cat += 9
    }
else{
    dog +=5;
    cat +=4;
}

 }


 return [humanYears,cat,dog]
}


console.log(anyHumanYears(10))

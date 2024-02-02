

function CombineNames(firstName,lastName){
   if(typeof firstName==="string"  && typeof lastName==="string"){
    if(firstName!=='' && lastName!==""){
        return `${firstName} ${lastName}`
    }
    else{
        return 'Sorry firstName or lastName should not blank'
    }
   }
   else{
  return "Names type should be string"
   }
}


console.log(CombineNames("Gurnav","Chaudhary"));
console.log(CombineNames(123,"Chaudhary"));
console.log(CombineNames( "","Chaudhary"));
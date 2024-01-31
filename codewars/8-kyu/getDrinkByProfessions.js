
function getDrinkByProfessions(param){
  
    if(param.toLowerCase()==="jabroni"){
        return 	"Patron Tequila"
    }
    else if(param.toLowerCase()==="school counselor"){
        return "Anything with Alcohol"
    }
    else if(param.toLowerCase()==="programmer"){
        return "Hipster Craft Beer"
    }
    else if(param.toLowerCase()==="bike gang member"){
        return "Moonshine"
    }
    else if(param.toLowerCase()==="politician"){
        return "Your tax dollars"
    }
    else if(param.toLowerCase()==="rapper"){
        return "Cristal"
    }
    else {
        return "Beer"
    }
}


console.log(getDrinkByProfessions("school counselor"))


function calculateAge(birthYear,YearCount){
    let years = YearCount-birthYear;

    if(years>0){

        if(years>1){

            return `You are ${years} years old.`
        }
        return `You are ${years} year old.`

    }
    else if(birthYear===YearCount){
        return `You were born this very year!`
    }
    else if(years<0){

    let yearsPos = years*-1;

    if(yearsPos>1){
        return `You will be born in ${yearsPos} years.`
    }


        return `You will be born in ${yearsPos} year.`
    }
}

console.log(calculateAge(1990,1990))


function yearDays(year){
if((year%4===0 && year%100!==0)|| (year%400===0)){
    return `${year} has 366 days`
}
return `${year} has 365 days`
}

console.log(yearDays(2000))
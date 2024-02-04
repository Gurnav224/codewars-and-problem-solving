

function shortenToDate(longDate){

    // console.log(longDate.split(",")[0])

    let shortDate =  longDate.split(',')[0].trim();
    
    return shortDate
}

console.log(shortenToDate("Friday May 2, 7pm"))
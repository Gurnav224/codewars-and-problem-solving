

function findYear(month, dayOfWeek){
    //code here
    for(let i=2014; i<=2050; i++){
        const date = new Date(i,month,1)


        if(date.getDay()===dayOfWeek){
            return i
        }
    }
    return 0
    }


    /*
input: month = 11, day = 2
output: 2015
    */

console.log(findYear(11,2))
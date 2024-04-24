

function whatDay(day){
    let l = ''
    switch (day) {
        case 1:
            l =  'Sunday'
            break
        case 2:
            l =  'Monday'
            break
        case 3:
            l = 'Tuesday'
            break
        case 4:
            l = 'Wednesday'
            break
        case  5:
            l = 'Thursday'
            break
        case  6:
            l =  'Friday'
            break
        case  7:
          l = 'Saturday'
            break
            
        default:
            l = "Wrong, please enter a number between 1 and 7"
            break;
    }
    return l

}

console.log(whatDay(2))
console.log(whatDay(8))
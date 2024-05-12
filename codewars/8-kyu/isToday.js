

function isToday(date){

    let actualDate = new Date()

    console.log(actualDate.toDateString()===date.toDateString())


return (
    date.getFullYear() === actualDate.getFullYear() &&
    date.getMonth() === actualDate.getMonth() &&
    date.getDate() === actualDate.getDate()
)
}


let today = new Date();

console.log(isToday(today))
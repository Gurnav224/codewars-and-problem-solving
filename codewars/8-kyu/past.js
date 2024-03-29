

function past(h,m,s){
    let hoursInMilliseconds = h*60*60*1000;
    let minuteInMilliseconds = m*60*1000;
    let secondInMilliseconds = s*1000;

    return hoursInMilliseconds+minuteInMilliseconds+secondInMilliseconds
}

console.log(past(0,1,1))


function flyTime (dist, train, fly) {
    //Happy coding
    if(train===0){
        return null;
    }

    let time = dist/(2*train);

    let flyDist = fly*time;

    return flyDist
}

console.log(flyTime(60,30,60))
console.log(flyTime(250,45,60))
console.log(flyTime(100,0,30))
console.log(flyTime(100,50,30))
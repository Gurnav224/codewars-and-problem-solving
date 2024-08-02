
function cookingTime(neededPower, minutes, seconds, power) {
    // Your code here
    let neededPowerInt  = parseInt(neededPower.replace("W",""));
    let powerInt = parseInt(power.replace("W",""));

    let totalTimeInSeconds = (minutes*60)+seconds;

    let actualTime =( neededPowerInt/powerInt)* totalTimeInSeconds;

    let minute = Math.floor(actualTime/60)
    let sec = Math.ceil(actualTime%60)
    if(sec===60){
        minute++
        sec=0
    }
    return `${minute} minutes ${sec} seconds`
  }

  console.log(cookingTime("600W", 4, 20, "800W"))
  console.log(cookingTime("450W", 3, 25, "950W"))
  console.log(cookingTime("21W", 64, 88, "25W"))
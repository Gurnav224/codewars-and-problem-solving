

function timeForMilkAndCookies(date){
    //TODO 
    const dat = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear()
    return dat === 24 && month === 11
  }


  console.log(timeForMilkAndCookies(new Date(2013, 11, 24)) )
  console.log(timeForMilkAndCookies(new Date(2013, 0, 23)) )
  console.log(timeForMilkAndCookies(new Date(3000, 11, 24)))
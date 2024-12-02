

function isLeapYear(year) {
    // TODO

    if(year%4===0){
        return true
    }
    else if(year%400===0 && year%100!==0){
        return true
    }
    else{
        return false
    }
    
  }

  console.log(isLeapYear(2020))
  console.log(isLeapYear(2015))
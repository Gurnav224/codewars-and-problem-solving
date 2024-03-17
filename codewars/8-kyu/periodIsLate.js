

function periodIsLate(last,today,cycleLength){
 const oneDay = 24*60*60*1000;
 const dayPassed = Math.round(Math.abs((last-today)/oneDay));

 return dayPassed>cycleLength
}


console.log(periodIsLate(new Date(2016,6,13),new Date(2016,7,16),35))
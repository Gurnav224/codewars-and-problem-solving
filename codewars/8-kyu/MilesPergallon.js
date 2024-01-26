
// Miles per gallon to kilometers per liter



function converter(mpg){
    let kpl = parseFloat((mpg*1.609344 / 4.54609188).toFixed(2))

    return typeof kpl
}


console.log(converter(10))
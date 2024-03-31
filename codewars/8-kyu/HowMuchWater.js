

function HowMuchWater(water,load,clothes){
    if(clothes>2*load){
        return 'Too much clothes'
    }
    if(clothes<load) {
        return 'Not enough clothes'
    }
return parseFloat((water*1.1**(clothes-load)).toFixed(2))
}


console.log(HowMuchWater(10,10,21))
console.log(HowMuchWater(10,10,2))
console.log(HowMuchWater(10,11,20))
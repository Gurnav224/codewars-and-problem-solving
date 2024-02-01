

function forceBwObj(arr_val,arr_unit){
    const G = 6.67e-11;
  
    const massConversion = {
      'kg':1,
      'g':1e-3,
      'mg':1e-6,
      'μg':1e-9,
      'lb':0.453592
    }
    
    const distanceConversion = {
      'm':1,
      'cm':1e-2,
      'mm':1e-3,
      'μm':1e-6,
      'ft':0.3048
    }
    
    const mass1 = arr_val[0]*massConversion[arr_unit[0]];
    const mass2 = arr_val[1]*massConversion[arr_unit[1]];
    const distance = arr_val[2]*distanceConversion[arr_unit[2]];

    console.log(mass1)

    console.log(mass2)

    console.log(distance)
    
    const force = G*(mass1*mass2)/Math.pow(distance,2)
    
    return force
}



console.log(forceBwObj([1000, 1000, 100], ["g", "kg", "m"]));
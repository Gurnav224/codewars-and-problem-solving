


function bloodAlcoholContent(drinks, weight, sex, time){

    let ounces = drinks.ounces;
    let abv = drinks.abv;

    let totalAlcohol = ounces*abv;

    let r = (sex==='male')?0.73:0.66;

    let bac = (totalAlcohol*5.14/weight*r)-(0.015*time)

    return Math.max(0,parseFloat(bac.toFixed(4)))
  }


  console.log(bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1))
  console.log(bloodAlcoholContent({ounces:180, abv:0.05}, 160,'female', 1));
function feast(beast, dish) {
    //your function here
    // let beastFistLetter = beast.toLowerCase().charAt();
    // let beastLastLetter = beast.toLowerCase().charAt(beast.length-1);

    // let dishFirstLetter = dish.toLowerCase().charAt();
    // let dishLastLetter = dish.toLowerCase().charAt(dish.length-1);



    // if(beastFistLetter===dishFirstLetter && beastLastLetter===dishLastLetter){
    //     return true
    // }

    // return false


    let firstBeastLetter = beast[0];
  let lastBeastLetter = beast[beast.length-1];
  
  let firstDishLetter  = dish[0];
  let lastDishLetter =dish[dish.length-1];

  console.log(firstBeastLetter,firstDishLetter)
  console.log(lastBeastLetter,lastDishLetter)
  
  if(firstBeastLetter === firstDishLetter && lastDishLetter === lastBeastLetter){
    return true
  }
  
  return false
    }


    console.log(feast("great blue heron","garlic naan"))
   console.log(feast("chickadee", "chocolate cake"))
   console.log(feast("brown bear", "bear claw"))
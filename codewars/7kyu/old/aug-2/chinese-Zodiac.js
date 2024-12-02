function chineseZodiac(year){
    let animal = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']

    let elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']


     // Base year for the cycle
     const baseYear = 1984; // Wood Rat year

      
    // Calculate the number of years since the base year
    const yearsSinceBase = year - baseYear;

     // Determine the animal index (0-11)
     const animalIndex = (yearsSinceBase % 12 + 12) % 12; // +12 to handle negative numbers correctly
    console.log(animalIndex)
     // Determine the element index (0-4)
     const elementIndex = Math.floor(((yearsSinceBase % 60) + 60) / 2) % 5; // 60-year cycle divided by 2 for elements
 
     console.log(elementIndex)
    
    return `${elements[elementIndex]} ${animal[animalIndex]}`
  }

  console.log(chineseZodiac(2016))
  console.log(chineseZodiac(1938))
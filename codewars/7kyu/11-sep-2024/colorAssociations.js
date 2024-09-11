

function colourAssociation(array){
    // We <3 colours..
    return array.map(([key,value]) => ({[key]:value}))
  }


  console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))
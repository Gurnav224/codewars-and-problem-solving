

function nothingSpecial(str) {
    //your code here

    // if( typeof str !== 'string') return "Not a string!"

    // return  str.replace(/[^a-zA-Z0-9\s]/g, '')


    return typeof str === "string" ? str.replace(/[^a-z\d\s]+/ig, "") : "Not a string!"
  }


  console.log(nothingSpecial(25))
  console.log(nothingSpecial('%^Take le$ft ##quad%r&a&nt'))
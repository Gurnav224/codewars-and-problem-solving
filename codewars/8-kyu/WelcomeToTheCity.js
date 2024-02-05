

function sayHello(name,city,state){
  let fullName = name.join(" ")
  let fullStr = `Hello, ${fullName} Welcome to ${city}, ${state}`
  return fullStr
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))

// Hello, John Smith! Welcome to Phoenix, Arizona!
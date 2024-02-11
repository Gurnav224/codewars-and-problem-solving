let firstFakeName = {
    A: "Alpha",
    B: "Beta",
    C: "Cache",
    D: "Data",
    E: "Energy",
    F: "Function",
    G: "Glitch",
    H: "Half-life",
    I: "Ice",
    J: "Java",
    K: "Keystroke",
    L: "Logic",
    M: "Malware",
    N: "Nagware",
    O: "OS",
    P: "Phishing",
    Q: "Quantum",
    R: "RAD",
    S: "Strike",
    T: "Trojan",
    U: "Ultraviolet",
    V: "Vanilla",
    W: "WiFi",
    X: "Xerox",
    Y: "Y",
    Z: "Zero"
  };
  let surFakeName = {
    A: "Analogue",
    B: "Bomb",
    C: "Catalyst",
    D: "Discharge",
    E: "Electron",
    F: "Faraday",
    G: "Gig",
    H: "Hacker",
    I: "IP",
    J: "Jabber",
    K: "Killer",
    L: "Lazer",
    M: "Mike",
    N: "n00b",
    O: "Overclock",
    P: "Payload",
    Q: "Quark",
    R: "Roy",
    S: "Spy",
    T: "T-Rex",
    U: "Unit",
    V: "Virus",
    W: "Worm",
    X: "X",
    Y: "Yob",
    Z: "Zombie"
  };

function aliasGen(firstName,lastName){
  let firstLetterOfFakeName = firstName.charAt(0).toUpperCase();
  let firstLetterOfsurFakeName = lastName.charAt(0).toUpperCase();

  let name, sur;

  let firstValues = Object.values(firstFakeName);
  let surValues = Object.values(surFakeName);


  if(isNaN(Number(firstLetterOfFakeName)) && isNaN(Number(firstLetterOfsurFakeName))){
    for(let i=0; i<firstValues.length; i++){
        if(firstValues[i].charAt(0).toUpperCase()===firstLetterOfFakeName){
            name = firstValues[i];
            break;
        }
    }

    for(let i=0; i<surValues.length; i++){
        if(surValues[i].charAt(0).toUpperCase()===firstLetterOfsurFakeName){
            sur = surValues[i]
            break;
        }
    }

    console.log(name,sur)

    return `${name} ${sur}`
  }

  return "Your name must start with a letter from A - Z.";
}



console.log(aliasGen("Iris","G"))

console.log(aliasGen('Larry', 'Brentwood'))

console.log(aliasGen('123abc', 'Petrovic'))



// refactor


function aliasGen2(first,last){
    let auxFist = first[0].toUpperCase();
    let auxSur = last[0].toUpperCase();

    if(firstFakeName[auxFist] && surFakeName[auxSur]){
        return firstFakeName[auxFist]+" "+surFakeName[auxSur]
    }
    else{
        return 'Your name must start with a letter from A - Z.'
    }
}

console.log(aliasGen2("Gurnav","chaudhary"))
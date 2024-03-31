
function ChangeMe(moneyIn){
  
    switch(moneyIn) {
        case "£5": return '20p '.repeat(25).trim();
        case "£2": return '20p '.repeat(10).trim();
        case "£1": return '20p '.repeat(5).trim();
        case "50p": return '20p '.repeat(2).trim() + '10p';
        case "20p": return '10p 10p';
        default: return moneyIn;
    }
}


console.log(ChangeMe("£5"))
console.log(ChangeMe("£2"))
console.log(ChangeMe("money"))
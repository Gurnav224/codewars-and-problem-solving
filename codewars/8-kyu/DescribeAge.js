

function DescribeAge(age){
    return `You're a(n) ${age <= 12 ? 'kid' : age <= 17 ? 'teenager' : age <= 64 ? 'adult' : 'elderly'}`;

}

console.log(DescribeAge(12))
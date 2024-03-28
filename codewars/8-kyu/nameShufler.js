
function nameShuffler(str){
 let fullName = str.split(' ');
 return `${fullName[1]} ${fullName[0]}`
}

console.log(nameShuffler('john McClane'))
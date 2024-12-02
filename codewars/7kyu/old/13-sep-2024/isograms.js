



function isograms(str){
return str.toLowerCase().split('').filter((char , index , array) => array.indexOf(char) === index).length === str.length
}
console.log(isograms("moOse"))


console.log(isograms("Dermatoglyphics"))
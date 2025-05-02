function isAnagram(stringOne, stringTwo) {
    //solve problem here
    return stringOne.split('').sort().join('') === stringTwo.split('').sort().join('')
}


console.log(isAnagram('rasp', 'spar'))
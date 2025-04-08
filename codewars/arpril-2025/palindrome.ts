


function checkPalindrome(word: string): boolean {
    return word === word.split(' ').reverse().join(' ')
}

let word: string = 'ana';

console.log(checkPalindrome(word))
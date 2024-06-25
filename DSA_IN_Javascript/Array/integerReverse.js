


function reverseNumber(num){
    let str = num.toString();
    let rev_num = str.split('').reverse().join('');
    return parseInt(rev_num)
}


console.log(reverseNumber(124))


time : Big O (n)
space : Big O (n)
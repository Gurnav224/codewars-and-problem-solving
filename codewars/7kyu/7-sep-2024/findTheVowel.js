

function findTheVowel(string){
    const vowels = ['a','e','i','o','u','y'];
    const vow = []
    for(let i=0; i<string.length; i++){
        if(vowels.includes(string[i].toLowerCase())){
            vow.push(i+1)
        }
    }

    return  string.split('').map((char , index) => ({
        char:char.toLowerCase(),
        pos:index+1
    })).filter((item)=>vowels.includes(item.char)).map((obj)=>obj.pos)
}

console.log(findTheVowel('super'))
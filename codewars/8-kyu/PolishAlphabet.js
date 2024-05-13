


function polishAlphabet(string){
    const diacriticsMapping = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
        'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N', 'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
    };


    let str = ""

    for(let i=0; i<string.length; i++){

        const char = string[i];
      str += diacriticsMapping[char] || char
    }
    return str
}


console.log(polishAlphabet("Jędrzej Błądziński"))
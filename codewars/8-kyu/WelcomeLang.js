let languages = [
    { language: "english", message: "Welcome" },
    { language: "czech", message: "Vitejte" },
    { language: "danish", message: "Velkomst" },
    { language: "dutch", message: "Welkom" },
    { language: "estonian", message: "Tere tulemast" },
    { language: "finnish", message: "Tervetuloa" },
    { language: "flemish", message: "Welgekomen" },
    { language: "french", message: "Bienvenue" },
    { language: "german", message: "Willkommen" },
    { language: "irish", message: "Failte" },
    { language: "italian", message: "Benvenuto" },
    { language: "latvian", message: "Gaidits" },
    { language: "lithuanian", message: "Laukiamas" },
    { language: "polish", message: "Witamy" },
    { language: "spanish", message: "Bienvenido" },
    { language: "swedish", message: "Valkommen" },
    { language: "welsh", message: "Croeso" }
];

function greet(language){

    const filterBylang = languages.filter((lang)=>lang.language===language);

    if(filterBylang.length===0){
        return 'Welcome'
    }
    else{
        return filterBylang.map((item)=>item.message).toString()
    }

}




console.log(greet('english'))
console.log(greet('dutch'))
console.log(greet('IP_ADDRESS_Inavlid'))


// refactor 

var database = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
    }

    function greetInYourLang(lang){
        return database[lang] || "Welcome"
    }

    console.log(greetInYourLang('english'))
    console.log(greetInYourLang('Ip_adderess'))
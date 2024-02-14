

function hello(name){

    if(name && name!==""){
        let capitalized = name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
        return "Hello, " + capitalized + "!";
    }
    else{

        return"Hello, World!";
    }
}




console.log(hello(""))
console.log(hello("Gurnav"))


console.log(hello("vishAl DsIng"))
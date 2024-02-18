
function validateHello(greetings){
    const lowerCaseGreeting = greetings.toLowerCase();
 const greets = ['hello','ciao','salut','hallo','hola','ahoj','czesc'];
 for(let greet of greets){
    if(lowerCaseGreeting.includes(greet)){
        return true
    }
 }
 return false
}

console.log(validateHello("Hello, how are you?")); // Output: true
console.log(validateHello("Czesc! Jak się masz?")); // Output: true
console.log(validateHello("Bonjour! Ça va?")); // Output: false


function validateHello2(greetings){
 let res = /(hello)|(ciao)|(salut)|(hallo)|(hola)|(ahoj)|(czesc)/i.test(greetings)

 return res
} 

console.log(validateHello2("Czesc!, How are you?"))
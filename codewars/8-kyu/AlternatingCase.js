
String.prototype.toAlternatingCase = function(){
    return this.split('').map(char=>{
        if(char.toUpperCase()===char){
            return char.toLowerCase()
        }
        else{
            return char.toUpperCase()
        }
    }).join('')
}

console.log('HelloWorld'.toAlternatingCase())
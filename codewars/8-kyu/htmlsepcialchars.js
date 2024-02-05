

function htmlSpecialChars(str){
return str.replace(/&/g,"&amp;").
replace(/</g,"&lt;")
.replace(/>/g,"&gt;")
.replace(/"/g,'&quot;')
}


console.log(htmlSpecialChars("<h2>Hello World</h2>"))
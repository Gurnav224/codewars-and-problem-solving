

function isVow(a){
for(let i=0; i<a.length; i++){
    if(a[i]===97){
        a[i]="a"
    }
    if(a[i]===101){
        a[i]="e"
    }
    if(a[i]===105){
        a[i]="i"
    }
    if(a[i]===111){
        a[i]="o"
    }
    if(a[i]===117){
        a[i]="u"
    }
}
return a;
}


console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))


function isVow2(a){
    let vow2 = {
        97: 'a',
        101: 'e',
        105: 'i',
        111: 'o',
        117: 'u',
      }

      return a.map(num=>vow2[num]?vow2[num]:num)
}


console.log(isVow2([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))


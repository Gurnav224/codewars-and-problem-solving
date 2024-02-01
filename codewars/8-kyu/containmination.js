

function containmination(text,char){

    if(text===""  && char===""){
        return ''
    }


    return char.repeat(text.length)
}


console.log(containmination("abc","z"))
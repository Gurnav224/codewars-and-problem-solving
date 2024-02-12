
function validateUser(username){
    const regex =/^[a-z0-9_]{4,16}$/

    return regex.test(username)
}

console.log(validateUser("gurnav@3495"))
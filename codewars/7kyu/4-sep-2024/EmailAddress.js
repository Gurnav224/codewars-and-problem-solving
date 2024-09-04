
function ChangeEmail(email){
    return email.replaceAll("@",' [at] ').replaceAll('.',' [dot] ')
}

console.log(ChangeEmail('user_name@example.com'))
console.log(ChangeEmail('Code_warrior@foo.ac.uk'))


function generate_links(user){
    let encoded = "http://www.codewars.com/users/"+encodeURIComponent(user)

    return encoded
}

console.log(generate_links("matt c"))
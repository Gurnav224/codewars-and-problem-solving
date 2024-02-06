
class Database{
    login(){

        return "you are login in"
    }
    
    

}





function invalidLogin(username,password){

    if(username.includes("||")||password.includes("||")||username.includes("//")||password.includes("//")){
        return "Wrong username or password!"
    }

    var database = new Database();

    return database.login(username,password)
}


console.log(invalidLogin("testUser","testPassword"))
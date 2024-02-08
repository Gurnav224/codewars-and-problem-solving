

function _if(bool,fun1,fun2){
return bool?fun1():fun2()
}

_if(true, function(){console.log("True")}, function(){console.log("false")})
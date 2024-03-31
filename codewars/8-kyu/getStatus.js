

function getStatus(isBusy){
    var msg = (isBusy?"busy":"Available")
    return {status:msg}
}


console.log(getStatus(true).status)
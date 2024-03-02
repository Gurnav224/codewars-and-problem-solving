
function anyArrows(arrows){
return arrows.some(status=>!status.damaged)
}


console.log(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
)
console.log(anyArrows([]))
console.log(anyArrows([{range: 10, damaged: true}, {damaged: true}]))
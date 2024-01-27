
const mrFreeze = {
    name:"mr.Freeze",
    power:'Freezing rays',
    status:'Frozen'
}

Object.freeze(mrFreeze)

mrFreeze.status = 'thunder';

console.log(mrFreeze)
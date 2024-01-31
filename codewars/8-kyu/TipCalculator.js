

function calculateTip(total,rating){
    switch(rating.toLowerCase()){

        case 'terrible':
            return 0
        case 'poor':
            return Math.ceil(total*0.05)
        case 'good':
            return Math.ceil(total*0.1)
        case 'great':
            return Math.ceil(total*0.15)
        case 'excellent':
            return Math.ceil(total*0.2)
        default:
            return 'Invalid Rating'
    }
}


console.log(calculateTip(20,"excellent"))
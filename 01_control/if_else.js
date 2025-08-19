const score = 44

if (score > 40) {
    const power = 'fly'
    console.log(`user power: ${power}`)
} else {
    const power = 'Not fly'
    console.log(`user power: ${power}`)
}

const balance = 1000

if (balance < 500) {
    console.log(`lass then 500`)
} else if (balance < 770) {
    console.log(`lass then 770`)
} else if (balance < 900) {
    console.log(`lass then 900`)
}else{
    console.log(`lass then 1200`)
}

const userLoggIn = true
const debtCard = true
const loggInFromGoogle = false
const loggInFromEmail = true

if(userLoggIn && debtCard) {
    console.log(`Allow To Buy course`)
}

if (loggInFromGoogle || loggInFromEmail){
    console.log(`User Logged In`)
}


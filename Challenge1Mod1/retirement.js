const name = 'Vanessa'
const sex = 'F'
const age = 24
const contrib = 30
contribMinMasc = 35
contribMinFem = 30
if ((contrib >= contribMinMasc || contrib + age >= 95) && sex === 'M') {
    console.log(`${name} you can retire`)
} else if ((contrib >= contribMinFem || age + contrib >= 85) && sex === 'F') {
    console.log(`${name} you can retire`)
} else {
    console.log(`${name} you cannot retire`)

}
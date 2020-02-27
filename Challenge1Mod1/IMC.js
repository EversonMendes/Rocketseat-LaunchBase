const person = {
    name: 'Everson',
    weight: 80,
    height: 1.8
}

const imc = person.weight / (person.height * person.height)

if (imc >= 30) {
    console.log(`${person.name} your IMC is ${imc.toFixed(2).replace('.', ',')}. Are you overweight!`)
} else {
    console.log(`${person.name} your IMC is ${imc.toFixed(2).replace('.', ',')}. Congratulations!! You are not overweight`)
}
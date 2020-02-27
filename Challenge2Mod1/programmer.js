const programmer = {
    name: 'Everson',
    age: 24,
    technologies: [{
            name: 'JavaScript',
            specialties: 'Web/Mobile'
        },
        {
            name: 'PostgresSQL',
            specialties: 'database'
        },
        {
            name: 'Java',
            specialties: 'Desktop'
        },
        {
            name: 'React Native',
            specialties: 'Mobile'
        }
    ]
}

console.log(`The user ${programmer.name} is ${programmer.age} years old and uses technology ${programmer.technologies[0].name} specialized in ${programmer.technologies[0].specialties}`)
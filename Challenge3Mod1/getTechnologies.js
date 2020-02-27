const users = [{
        name: 'Everson',
        technology: [
            'HTML',
            'CSS',
            'Bootstrap',
        ]
    },
    {
        name: 'Fabio',
        technology: ['Java', 'C#', 'C++', 'PHP']
    },
    {
        name: 'Vanessa',
        technology: ['CSS']
    }
]


for (let user of users) {
    console.log(`${user.name} works with ${user.technology}`)
}

//Buscar technology
function utilizaCSS(user) {
    for (let technology of user.technology) {
        if (technology == 'CSS') return true
    }
    return false
}

for (let i = 0; i < users.length; i++) {
    const userUtilizaCSS = utilizaCSS(users[i])
    if (userUtilizaCSS) {
        console.log(`The user ${users[i].name} works with CSS`)
    }
}

// utilizaCSS(users)
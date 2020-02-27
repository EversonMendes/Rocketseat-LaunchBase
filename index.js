const classA = [{
        name: 'Everson',
        grade: 9.8
    },

    {
        name: 'Vanessa',
        grade: 5
    },

    {
        name: 'Daniela',
        grade: 2
    },

    {
        name: 'Vanderson',
        grade: 0
    }
]

const classB = [{
        name: 'Regileide',
        grade: 5.4
    },

    {
        name: 'Rafael',
        grade: 7.4
    },

    {
        name: 'Daniel',
        grade: 6
    },
    {
        name: 'Adalto',
        grade: 5
    }
]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade
    }
    const average = sum / students.length
    return average
}

function sendMessage(average, turma) {
    if (average >= 5) {
        console.log(` ${turma}, average: ${average.toString().replace('.', ',')}. Very good class!!!`)
    } else {
        console.log(`${turma}: Average below five. Is not good.`)
    }
}

function markAsDisapproved(students) {
    students.flunked = false
    if (students.grade < 5) {
        students.flunked = true
    }
}

function sendMessageDesapproved(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked`)
    }
}

function studentsDesapproved(students) {
    for (student of students) {
        markAsDisapproved(student)
        sendMessageDesapproved(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsDesapproved(classA)
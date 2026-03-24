function convert(grade) {
    let points
    switch (grade) {
        case 'A':
            points = 4
            break
        case 'B':
            points = 3
            break
        case 'C':
            points = 2
            break
        case 'D':
            points = 1
            break
        case 'F':
            points = 0
            break
        default:
            alert('not a valid grade')
    }
    return points
}

const steps = ['one', 'two', 'three']
const listElement = document.querySelector('#myList')

steps.forEach(step => {
    const li = document.createElement('li')
    li.textContent = step
    listElement.appendChild(li)
    console.log(step)
})

const grades = ['C', 'D', 'A']
const gpaPoints = grades.map(convert)
console.log(gpaPoints)

const gpaTotal = gpaPoints.reduce((total, item) => total + item, 0)
console.log(gpaTotal)

const gpaAverage = gpaTotal / gpaPoints.length
console.log(gpaAverage)

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const shortWords = words.filter(word => word.length < 6)
console.log(shortWords)

const students = [
    { last: 'Andrus', first: 'Aaron' },
    { last: 'Masa', first: 'Manny' },
    { last: 'Tanda', first: 'Tamanda' }
]

const studentOutput = document.querySelector('#studentOutput')

students.forEach(student => {
    studentOutput.innerHTML += `<div class="student">${student.first} ${student.last}</div>`
})

const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
const appleIndex = fruits.indexOf('Apple')
console.log(appleIndex)
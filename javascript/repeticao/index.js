function listProperties(object) {
    for (let property in object) {
        console.log(`Propriedade ${property}: ${object[property]}`)
    }
}

function listElements(object) {
    for (let value of office) {
        console.log(value)
    }
}

const person = {
    "name": "Ariel Azambuja",
    "salary": 7500,
    "approved": false
}

const office = ['desenvolvedor', 'analista de sistema', 'analista de BI']

listProperties(person)

listElements(office)

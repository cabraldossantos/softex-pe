const express = require("express")
const server = express()
const router = express.Router()
const fs = require('fs')

server.use(express.json({extended: true}))

const readFile = () => {
    const content = fs.readFileSync('./data/items.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./data/items.json', updateFile, 'utf-8')
}

router.get('/', (request, response) => {
    const content = readFile()
    response.send(content)
})

router.post('/', (request, response) => {
    const { name, author, isbn } = request.body
    const currentContent = readFile()
    const id = Math.random().toString(32).substring(2, 9)
    currentContent.push({ id, name, author, isbn })
    writeFile(currentContent)
    response.send({ id, name, author, isbn })
})

router.put('/:id', (request, response) => {
    const {id} = request.params

    const { name, author, isbn } = request.body
    
    const currentContent = readFile()
    const selectedItem = currentContent.findIndex((item) => item.id === id)
    
    const { id: currentId, name: currentName, author: currentAuthor, isbn: currentIsbn } = currentContent[selectedItem]

    const newObject = {
        id: id ? id: currentId,
        name: name ? name: currentName,
        author: author ? author: currentAuthor,
        isbn: isbn ? isbn : currentIsbn
    }

    currentContent[selectedItem] = newObject
    writeFile(currentContent)

    response.send(newObject)
})

router.delete('/:id', (request, response) => {
    const { id } = request.params
    const currentContent = readFile()
    const selectedItem = currentContent.findIndex((item) => item.id === id)
    currentContent.splice(selectedItem, 1)
    writeFile(currentContent)
    response.send(true)
})

server.use(router)

server.listen(3000, () => {
    console.log('Rodando servidor!')
})
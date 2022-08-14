require('dotenv').config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const mongose = require('mongoose')
const app = express()


app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())


const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)


app.get('/', (request, response) => {
    response.json({ message: 'Node.JS com Express!' })
})


const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterconceito.r6xlimd.mongodb.net/?retryWrites=true&w=majority`
).then(
    console.log('Conectado ao MongoDB Atlas!'),
    app.listen(3000)
).catch(
    (err) => console.log(err)
)


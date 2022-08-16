require('dotenv/config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost', dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!')
}).catch((error) => {
    console.log(`Falha ao se conectar: ${error}`)
})
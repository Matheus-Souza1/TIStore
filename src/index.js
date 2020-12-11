const express = require('express')
const routes = require('./routes/index')


const app = express()
const port = 8000

app.use(express.json());

routes(app);

app.listen(port, () => {
    console.log(`Servidor rodando em ${port}`)
})

module.exports = app
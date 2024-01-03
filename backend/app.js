const express = require("express")
const cors = require ("cors")
const app = express()
const port = 3000
const router = require("./routes/router")
const path = require("path")

// Configurações
    // Public
    app.use(express.static(path.join("../frontend")))

app.use(cors())
app.use(express.json())

// Rotas | Routers
app.use('/', router)

app.listen(port, () => {

    console.log("Servidor funcionando!")
    console.log(`Rota: http://localhost:${port}/`)
    console.log("\nPressione 'Ctrl + C' para parar o server!")

})
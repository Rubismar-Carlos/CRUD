require("dotenv").config()

const express = require("express")
const cors = require("cors")

const port = process.env.PORT;

const app = express()

app.use(express.json())

// Solve CORS
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

//db connection 
require("./config/db.js")

// routes
const router = require("./routes/Router.js")

app.use(router)

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})
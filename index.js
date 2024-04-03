import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import cors from 'cors'

// PORT
const PORT = process.env.PORT || 8080

// configure env
dotenv.config()

// rest object
const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// rest api for testing
app.get('/api', (req, res) =>{
    res.send({ message: 'Welcome to FS App - API Testing'})
})

// run listen
app.listen(PORT, () => console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white))
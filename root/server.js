import express from 'express'
import cors from 'cors'
const app = express()

var corsOptions = {
    origin: "http://localhost:8080"
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (request, response) => {
    response.json({ message: "Welcome to Rayyan's application." })
})

import { db, tableCreationQuery } from './tableCreation.js'
// db.run(tableCreationQuery)

// Add route asap. //

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("Server started on", PORT)
})
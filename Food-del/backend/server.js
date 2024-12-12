import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"

// App configuration
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDb();

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`)
})

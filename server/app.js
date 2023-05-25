import express from 'express'
import cors from 'cors'
import { getUser, createUser, getPost } from './database.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.NODE_DOCKER_PORT || 8000

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Yay you made it!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
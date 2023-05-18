import express from 'express'
import cors from 'cors'
import { getUser, createUser, getPost } from './database'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.get("")
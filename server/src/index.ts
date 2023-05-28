import { Request, Response } from 'express'
import express from 'express'
const cors = require('cors')
import { createUser, getPostById, getUserByUserName }  from './database'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { types } from 'util'
import { isUser } from './INTERFACES'

dotenv.config()

const PORT = process.env.NODE_DOCKER_PORT || 8000

const app = express()
app.use(express.json())
app.use(cors())

// GET USER
app.get('/users/:username', async (req:Request, res:Response) => {
  const userData = await getUserByUserName(req.params.username)
  if(!userData) {
    res.status(404).send("ERROR: user not found")
  } else {
    res.status(200).send(userData)
  }
})

// CREATE USER
app.post('/users', async (req:Request, res:Response) => {
  if (!isUser(req.body)) {
    res.status(400).send("ERROR: make sure all required fields are included")
  } else {
    const result = await createUser(req.body)
    // if (!isUser(result)) {
    //   res.status(500).send(`INTERNAL ERROR: ${result}`)
    // } else {
      res.status(201).send(result)
    }
  // }
})

// LOGIN
app.post('/users/login', async (req:Request, res:Response) => {
  if (!req.body.hasOwnProperty('username') || !req.body.hasOwnProperty('password')) {
    res.status(400).send("ERROR: must provide both username and password")
  } else {
    const user = await getUserByUserName(req.body.username)
      if (user == null) {
          res.status(400).send("ERROR: User could not be found");
      } else {
          if(user[0].username != req.body.username) {
              res.status(500).send("ERROR: incorrect username");
          } else {
              try {
                  if (await bcrypt.compare(req.body.password, user[0].password)) {
                    // LOGIN SUCCESS!
                    res.status(200).send(`SUCCESS: logged in as ${user[0].username}`)
                  } else {
                    res.status(400).send("ERROR: incorrect password")
                  }
              } catch {
                  res.status(500).send("ERROR: something broke")
              }
          }
      }
  }
})

// GET POST
app.get('/posts/:postId', async (req:Request, res:Response) => {
  const post = await getPostById(+req.params.postId)
})

app.listen(PORT, () => {
    console.log(`Database server is running on port ${PORT}`);
  });
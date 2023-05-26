import { Request, Response } from 'express'
import express from 'express'
const cors = require('cors')
import { createUser, getUserByUserName }  from './database'
import { userAuth } from './INTERFACES'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'

dotenv.config()

const PORT = process.env.NODE_DOCKER_PORT || 8000

const app = express()
app.use(express.json())
app.use(cors())


// CREATE USER
app.post('/users', async (req:Request, res:Response) => {
  if (!req.body.hasOwnProperty('username') || !req.body.hasOwnProperty('password')) {
    res.status(400).send("ERROR: must provide both username and password")
  } else {
      const result = await createUser(req.body.username, req.body.password)
      if (result == null) {
        res.status(500).send("ERROR, could not create user")
      } else {
        res.status(200).send("SUCCESS, user created " + result)
      }
  }
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

app.listen(PORT, () => {
    console.log(`Database server is running on port ${PORT}`);
  });
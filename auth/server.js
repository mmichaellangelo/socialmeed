import express from 'express'

import dotenv from 'dotenv'

const app = express()

dotenv.config()

const PORT = process.env.AUTH_DOCKER_PORT

const posts = [
    {
        username: 'Chikn',
        title: 'Post 1'
    },
    {
        username: 'Dum',
        title: 'Post 2'
    },
]

const users = []

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/login', (req, res) => {
    // Authenticate user
})

app.listen(PORT, () => {
    console.log(`Auth server is running on port ${PORT}`);
  });
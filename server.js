const express = require('express')

const server = express()

server.use(express.json())

const port = process.env.PORT
// console.log(process.env)

server.get('/api/users', (req, res) => {
    res.status(200).json({message: 'here is the user list', data: ['john', 'larry', 'carey', 'barry', 'melissa', 'clarissa', 'merissa', 'fransisca']})
})

server.post('/api/register', (req, res) => {
    const { username, password } = req.body
    const newUser = {username, password}
    res.status(200).json({message: 'user created successfully', data: newUser})
})

server.post('/api/login', (req, res) => {
    const { username, password } = req.body
    if(username === 'bloom' && password === 'tech') {
        res.status(200).json({message: 'Welcome to the edge of tomorrow!'})
    } else {
        res.status(400).json({message: 'invalid credentials'})
    }
})

server.listen(port, (req, res) => {
    console.log(`listening on port ${port}`)
})

require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const PORT = process.env.PORT

app.use(express.static(path.resolve(__dirname + '/public')))

server.listen(PORT, () => console.log(`[+] Server running on port ${PORT}`))

io.on('connection', socket => {
    socket.on('client-message', data => {
        console.log(data)
        io.emit('server-message', data)
    })
})
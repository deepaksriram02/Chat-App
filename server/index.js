// const express= require("express")
// const app=express()

// const http = require("http")
// const { Server } = require("socket.io")

// const cors = require("cors")
// app.use(cors())


// const server = http.createServer(app)

// const io= new Server(server, {
//     cores:{
//         origin: "http://localhost:3000:",
//     },
// })


require("dotenv").config();

const io = require("socket.io")(process.env.PORT || 3001, {
    cors: {
        // origin: ["http://localhost:3000","http://deepaksriram02.github.io/Chat-App-Client","https://deepaksriram02.github.io/Chat-App-Client/"]
        // origin: ["https://deepaksriram02.github.io/Chat-App-Client/"]
        origin:"*"
    }
})


io.on("connection", socket=>{
    console.log(`user connected: ${socket.id}`)
    socket.on('send_message', data=>{
        socket.broadcast.emit('receive_message', data)
    })
})




// server.listen(3001, ()=>{
//     console.log("server is running")
// })


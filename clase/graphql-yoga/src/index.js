import server from './server.js'

import "./database.js"

server.start( {port: 3000}, ( { port} ) =>{
    console.log('Server is running on port: ' + port)
})
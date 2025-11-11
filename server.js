try{
    // Loads the variables in the .env for us to use here
    process.loadEnvFile()
} catch (error) {
    //console.log("Cannot find .env file, using default values")
}

// ES6 syntax isn't used, ES5 syntax for now
// import (not) ==> require
// export default (not) ==> modue.exports

const jsonServer= require("json-server")
const path = require('path')

const server = jsonServer.create()

// Line of code that creates all the default configurations of the server
const middlewares = jsonServer.defaults({static: 'public'})

// Applying all the default configurations of the server
server.use(middlewares)

// Create all the routes an the Database
const router = jsonServer.router("db.json")

// Apply all the routes and db to the server
server.use(router)

// We assign a PORT for the server to communicate with clients
const PORT = process.env.PORT || 5005 // Why 5005, common port used for servers, related to computer science, imagine it as a brain, ports between 0 and 200000 are used, but any port with 3000, they are free, and any port 5000 and 8000 are free

//will make the server actively listen for requests from clients
server.listen(PORT, () => {
    //console.log(`Server Active and listening on port: ${PORT}`)
})

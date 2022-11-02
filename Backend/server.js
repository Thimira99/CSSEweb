const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
 
const notes_routes = require("./notes/notes.router")


 

const user_router = require("./routes/userRoutes/userRoutes");

 



const app = express()
dotenv.config()
require('./DB/DB.js');


//app middlewares
app.use(cors())
app.use(express.json())

//route middlewares
 
app.use(notes_routes);


app.use(user_router);


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Backend service started on port ${port}`)
})
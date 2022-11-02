const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


const ADMIN_ROUTES = require("./Routes/AdminRoutes");

const app = express()
dotenv.config()
require('./DB/db');

//app middlewares
app.use(cors())
app.use(express.json())

app.use("/api",ADMIN_ROUTES);

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Backend service started on port ${port}`)
})
const express = require('express')
const cors = require('cors')
const app = express()
const routs = require('./routes')
app.use(cors({credentials: true, origin: true}))
app.use(express.json())

app.use('/',routs)

app.listen(3000,()=>{console.log("start server...");})


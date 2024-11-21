const express = require ('express')
const app = express()

app.listen(8000)
app.get('/abc', (req,res)=> {
    res.send("Yes we are on local host 8000")
})

const mongoose = require('mongoose')

const cors = require('cors')
app.use(cors())

mongoose.connect("mongodb://localhost:27017/project")
.then(console.log("ok"))
.catch(err=>console.log(err))

app.use(express.static('Studentimg'))


app.use(express.json())
const route = require('./route/route')
app.use('/student', route)



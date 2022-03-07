const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()




const app = express();

app.use(
    express.urlencoded({
        extended:true
    })
)


app.use(express.json())

const personRouter = require('./routes/personRoutes')

app.use('/person', personRouter)


app.get('/', (req, res)=>{
    
    res.json({massage: "Oi express"})

})
const DB_USER = process.env.DB_User //seu user no mongoDB

const DB_PASSWORD = encodeURIComponent(process.env.DB_Password) //sua senha no mongo db


mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.4y2sd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
).then(() => {
    console.log("Funcionou")
    app.listen(3232)
})
.catch((err) => {console.log(err)})






//mongodb+srv://erik:CApUYkWAHuo9LjvV@apicluster.4y2sd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority 

//CApUYkWAHuo9LjvV

const express = require('express');
const app = express();

const userRouter = require('./routes/users.routes');

app.use('/', userRouter)
app.use('/about', userRouter)
app.use('/service', userRouter)
app.use('/portfolio', userRouter)
app.use('/contact', userRouter)

// error handling
app.use((req,res)=>{
    res.send('404 not found')
})

module.exports = app

const express = require('express');
const app = express();

const usersRoute = require('./routers/users')

app.use('/', usersRoute);
app.use('/about', usersRoute)
app.use('/contact', usersRoute)
app.use('/register', usersRoute)

//error handling
app.use((req, res)=>{
    res.status(404);
    res.send('<h1>404 not found</h1>')

})
module.exports = app;
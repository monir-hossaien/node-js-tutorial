
const express = require('express');
const path = require("path");
const router = express.Router();

// const bodyParser = require('body-parser')
router.use(express.urlencoded({ extended: false }))
router.use(express.json());


router.get('/', (req, res)=>{
    //parameter set by query parameter
    // const id = req.query.id;
    // const age = req.query.age
    // destructing
    // const {id, age} = req.query

    //parameter set by Route parameter
    // const id = req.params.id
    // const age = req.params.age
    // const name = req.params.name

    // parameter set by header
    // const name = req.header('name')
    // const id = req.header('id')
    // const age = req.header('age')
    // const department = req.header('department')
    // const sellary = req.header('sellary')
    // res.send(`User Name: ${name} UserId: ${id} and age ${age}. He work ${department} and his sellary ${sellary}`)


    // res.send('this is Home page')
})

// regular expression in router
router.get('/about/:id([0-9a-z]+)', (req, res)=>{
    // res.send('this is about page')
    const userId = req.params.id
    res.send(`User id = ${userId}`)
})

router.post('/contact', (req, res)=>{
    const data = req.body
    const {name, age} = data
    console.log(data)
    res.send(`name : ${name} and age: ${age}`)

})
router.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, '../index.html'))
})
router.post('/register', (req, res)=>{
    const {fullName, age}= req.body
    res.send(`Your name is ${fullName}, and age is ${age}`)

})

module.exports = router;
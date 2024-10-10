
const express = require('express');
const path = require("path");
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200)
    res.sendFile(path.join(__dirname, "../views/index.html"))
    res.cookie('name', "monir")
    // res.clearCookie("name")

})

router.get('/about',  (req, res)=> {
    res.status(201)
    res.sendFile(path.join(__dirname, "../views/about.html"))

})

router.get('/service',  (req, res)=> {
    res.status(201)
    res.sendFile(path.join(__dirname, "../views/service.html"))
})

router.get('/portfolio',  (req, res)=> {
    res.status(201)
    res.sendFile(path.join(__dirname, "../views/portfolio.html"))
})

router.get('/contact',  (req, res)=> {
    res.status(201)
    res.sendFile(path.join(__dirname, "../views/contact.html"))
})



module.exports = router;
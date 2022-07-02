const e = require('express');
const express = require('express');

const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Twitter clone on port: ${port}`)
})

//Here is the view engine
app.set('view engine', 'ejs');


// This is the first route, a route that accepts a get request 
// runs a callback when the route is triggered
    //req gicvess acces to the rquest
    // res represents the response
app.get('/', (req, res)=>{
    res.render('pages/index')
})

app.get('/profile', (req, res) => {
    res.send(`This is  Profile page`)
})

app.get('/Login', (req, res) => {
    res.send(`This is Login page`)
})

app.get('/Register', (req, res) => {
    res.send(`This is Register page`)
})

app.get('/User', (req, res) => {
    res.send(`This is user's page`)
})
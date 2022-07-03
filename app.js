const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');
//dotenvmodule;
dotenv.config();

const app = express();

//Calling the ConnectDB function
connectDB();

//Here is the view engine
app.set('view engine', 'ejs');


// This is the first route, a route that accepts a get request 
// runs a callback when the route is triggered
    //req gicvess acces to the rquest
    // res represents the response
app.get('/', (req, res)=>{
    res.render('pages/index')
})


app.listen(process.env.PORT, ()=>{
    console.log(`Twitter is running on PORT ${process.env.PORT}!`)
})


app.use("/graphql", graphqlHTTP({schema, graphiql: true}))

/*
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

*/
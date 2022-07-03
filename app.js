const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');
const { authenticate } = require('./src/middleware/auth')
const cookieParser = require('cookie-parser')
const { userData } = require('./src/middleware/userData')


//dotenvmodule;
dotenv.config();
const app = express();
//Calling the ConnectDB function
connectDB();

app.use(cookieParser()) 

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }))

app.use(express.urlencoded({ extended: true }))


app.use(authenticate)
app.use(userData)


//set up template engine + views
app.set('view engine', 'ejs')


app.set('views', path.join(__dirname, '/src/templates/views'))

app.get('/', (req, res)=>{
    console.log("GET request @'/' received");
    res.send('Hello, Foxes')
});

require("./src/routes")(app)

app.listen(process.env.PORT, () => {
    console.log(`Twitter is running on PORT ${process.env.PORT}!`)
})





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
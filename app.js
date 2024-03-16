

const express = require('express');
const app = express();
const routes = require('./route.js');

app.use(express.json());

app.use('/', routes);

//const port = process.env.PORT || 3000;
app.listen(3000, () =>{
    console.log("Server is running......")
})

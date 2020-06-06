var express = require('express');
var app = express();
const cors = require('cors');

var connect = require('./Database/Database');
var route = require('./Route/Route');

app.use(express.json());
app.use(cors());
app.use(route);
app.listen(3000,()=>{
    console.log('connnected to port...');
})
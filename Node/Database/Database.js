var mysql = require('mysql');

var connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'bekadia'
});
console.log("connected to Database");
module.exports = connect;

var service = require('../Service/Service');
var express = require('express');
var Router = express.Router();

Router.get('/select',async (req,res)=>{
    try{
    var result = await service.select();
    if(result){
        res.send(result);
    }
}
    catch(error){
        res.send(error);
    }
})

Router.post('/insert',async (req,res)=>{
    date = req.body.Date;
    distance = req.body.Distance;
    duration = req.body.Duration;
    console.log("In Route:",date);
    try{   
    var result = await service.insert(date,distance,duration);
    console.log(result);
    }
    catch(error){
        console.log(error);
    }
})

module.exports = Router;
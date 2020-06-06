var conn = require('../Database/Database');
var select = ()=>{
    const arr =[]
    const jogger = []
    return new Promise((resolve,reject)=>{
        conn.query('select sum(Distance) as Distance,sum(Duration) as Duration from Jogger where Date between DATE_SUB(CURDATE(),INTERVAL 7 DAY) and CURDATE()',(err,result)=>{
            if(err){
                console.log("error");
                reject(err);
            }
            else{
                resolve(result);

            }

        });
    });
}

var insert =(date,distance,duration)=>{
    console.log("In service");
    console.log(date,distance,duration);
     return new Promise((resolve, reject) => {
     conn.query(`insert into Jogger values('${date}',${distance},${duration})`,(err,result)=>{
         if(err){
             console.log("error");
             reject(err);
         }
         else{
             resolve(result);
         }
     })   
    });
}
module.exports={select,insert};
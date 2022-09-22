const mysql=require("mysql2");

const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Suresh@509",
    database:"ecom"
});

conn.connect((err)=>{
    if(err) {
     console.log(err);   
    }
    else{
    console.log("Connected Successfully with Database...");
    }
});

module.exports=conn;

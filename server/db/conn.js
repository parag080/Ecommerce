const mysql=require("mysql2");

const conn=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"Suresh@509",
    database:"ecom"
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("db connected");
});

module.exports=conn;

const sql=require('./db');

exports.Users=function(){
   return new Promise(resolve=>{
        let command="SELECT * FROM users";
        sql.query(command,(err, rows, fields)=>{
            resolve(rows);
        })
    }) 
};


exports.UserById=function(id){
    return new Promise(resolve=>{
         let command="SELECT * FROM  users WHERE id="+id;
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
     }) 
 };

 


exports.InsertUser=function(req){
    return new Promise(resolve=>{
    const { fullname, email, password } = req.body;
   
        sql.query("insert into users set ?", { fullname, email, password }, (err, rows, fields) => {
            resolve(rows);
        })
    
})
}
exports.RemoveUser=function(id){
    return new Promise(resolve=>{
        let command="DELETE FROM users Where id="+id ;
        sql.query(command,(err, rows, fields)=>{
            resolve(rows);
        })
})
}

exports.UpdateUser=function(req){
    return new Promise(resolve=>{
    const { id } = req.params;
    const data = req.body;
    sql.query("update users set ? where id=?", [data, id], (err, rows) => {
        resolve(rows);

    })
})
}
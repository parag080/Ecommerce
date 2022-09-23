const sql=require('./db');

/* Users Start*/

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

/* Users End*/


/* Products Start*/

exports.Products=function(){
    return new Promise(resolve=>{
         let command="SELECT * FROM products";
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
         })
     }) 
 };


exports.ProductById=function(id){
    return new Promise(resolve=>{
         let command="SELECT * FROM  products WHERE id="+id;
         sql.query(command,(err, rows, fields)=>{
             resolve(rows);
            
         })
     }) 
 };

 


exports.InsertProduct=function(req){
    return new Promise(resolve=>{
    const { categoryId, productName, productPrice } = req.body;
   
        sql.query("insert into products set ?", { categoryId, productName, productPrice }, (err, rows, fields) => {
            resolve(rows);
        })
    
})
}

exports.RemoveProduct=function(id){
    return new Promise(resolve=>{
        let command="DELETE FROM products Where id="+id ;
        sql.query(command,(err, rows, fields)=>{
            resolve(rows);
        })
})
}

exports.UpdateProduct=function(req){
    return new Promise(resolve=>{
    const { id } = req.params;
    const data = req.body;
    sql.query("update products set ? where id=?", [data, id], (err, rows) => {
        resolve(rows);

    })
})
}

/* Products End*/

/* Whislist start */


exports.Wishlist=(req)=>{
    return new Promise(resolve=>{
    sql.query("select * from whislist",(err,result)=>{
        resolve(result);
    })
})
}

exports.InsertWishlist=function(req){
    return new Promise(resolve=>{
const {userId,productId}=req.body;
sql.query("insert into whislist set ? ",{userId,productId},(err,rows,fields)=>{
   resolve(rows);
   if(err){
    console.log(err)
   }
})
})
}

exports.RemoveWishlist=function(id){
    return new Promise(resolve=>{
        let command="DELETE FROM whislist Where id="+id ;
        sql.query(command,(err, rows, fields)=>{
            resolve(rows);
        })
})
}
/* Whislist End */


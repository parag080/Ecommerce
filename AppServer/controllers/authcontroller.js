exports.login=(req, res)=>{
    let user=req.body;
    let message="";
    if(user.email==="suresh.p@gmail.com" && user.password==="12345"){
        message="Welcome "+ user.email;
    }
    else{
        message="Invalid User";
    }
    res.send(message);
};

exports.register=(req, res)=>{
    res.send("new user registration...")
}
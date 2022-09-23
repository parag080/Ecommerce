const sql = require('../models/db');
exports.login = (req, res) => {
    const { fullname, password } = req.body;
    
    sql.query("select * from users where fullname=? and password=?", [fullname, password], (err, result) => {
        if (err) {
            res.send({ err: err });
        }

        if (result.length > 0) {
            res.send("Welcome " + fullname);
        } else {
            res.send("Invalid User");
        }

    })

};

exports.register = (req, res) => {

    const { fullname, email, password, address, city, state, mobile } = req.body;

    sql.query("insert into users (fullname, email, password, address, city, state, mobile) values(?,?,?,?,?,?,?)", [fullname, email, password, address, city, state, mobile], (err, result) => {
        if (err) {
            res.send("Failed registration!!!");
            console.log(err);
        }
        else {
            res.send("Successfully Registered");
            console.log(req.body);
        }

    })
}



const express = require('express');
const app = express();
const port = 8001;
const mysql = require("mysql2");
const cors = require("cors");
const conn = require('./db/conn');
const router = new express.Router();
require("./db/conn");


app.get("/", (req, res) => {
    res.send("server start");
});

router.post("/insert", (req, res) => {
    console.log(req.body);
    const { fullname, email, password } = req.body;
    if (!fullname || !email) {
        res.status(422).json("pls fill data");
    }
    try {
        conn.query("insert into users set ?", { fullname, email, password ,address,city,state,mobile}, (err, result) => {
            if (err) {
                console.log("error" + err);
            } else {
                res.status(201).json(req.body);
            }

        })
    } catch (error) {
        res.status(422).json(error);
    }
});

router.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const data = req.body;
    conn.query("update users set ? where id=?", [data, id], (err, result) => {
        if (err) {
            console.log("error" + err);
        } else {
            res.status(201).json(result);
        }

    })
});

router.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    conn.query("delete from users where id=?", id, (err, result) => {
        if (err) {
            console.log("error" + err);
        } else {
            res.status(201).json(result);
            res.status(201).json(req.body);
        }

    })
});

router.get("/get", (req, res) => {
    conn.query("select * from users", (err, result) => {
        if (err) {
            console.log("error" + err);
        } else {
           
            res.status(201).json(result);
        }

    })
});




app.listen(port, () => {
    console.log("server start at port:" + port);
});

app.use(express.json());
app.use(router);
app.use(cors());
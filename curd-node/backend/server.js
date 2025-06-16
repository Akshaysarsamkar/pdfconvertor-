const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()

app.use(cors())
app.use(express.json())

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'curd'
})

conn.connect((e) => {
    if (e) {
        console.log("Error occure at the connection level.......");
        return
    }
    console.log("Connected");

})

app.get('/', (req, res) => {
    const sql = "select * from student";
    conn.query(sql, (err, data) => {
        if (err) {
            console.log("Error at the query level......");
            return res.json('error')
        }
        res.json(data)
    })

})

app.post("/create", (req, res) => {

    let str = "INSERT INTO STUDENT(`sname`,`email`) values(?)"
    const values = [
        req.body.name,
        req.body.email
    ]

    conn.query(str, [values], (e, r) => {
        if (e) {
            console.log("Error at query level........", e);
            return
        }

        console.log("data inserted....");
        res.json(r)
    })
})


app.delete("/student/:id", (req, res) => {

    let id = req.params.id

    let str = "DELETE FROM student where sid = ?"

    
    conn.query(str, [id], (e, r) => {
        if (e) {
            console.log("Error at query level........", e);
            return
        }

        console.log("data deleted....");
        return res.json(r)
    })
})

app.put("/update/:id", (req, res) => {

    let str = "UPDATE student SET sname = ? , email = ? WHERE sid = ?"
    const values = [
        req.body.name,
        req.body.email
    ]

    let id = req.params.id

    conn.query(str, [...values, id], (e, r) => {
        if (e) {
            console.log("Error at query level........", e);
            return
        }

        console.log("data updated....");
        res.json(r)
    })
})

app.listen(4000, () => {
    console.log("Server running on port 4000");

})
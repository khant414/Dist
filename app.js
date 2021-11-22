const express = require('express');
const mysql = require('mysql');
const app = express();



const db = mysql.createConnection({
    host:'127.0.0.1',
    user:'cis',
    password:'password',
    database:'sodb'
});


db.connect(function(err){
    if(err) {
        throw err;
    }
    console.log('MySql Connected...');
});


app.get('/getitems/:id', (req, res) => {
    let sql = `SELECT * FROM Inventory WHERE id = '${req.params.id}'`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
});


app.get('/', (req, res) => {
    res.send([1,2,3]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

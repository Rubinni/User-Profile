const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path: './.env'});

const con = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: 3308
});

con.connect((err) => {
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Connected to MYSQLl as id ' + con.threadId);

})

module.exports = con;
const mysql = require('mysql');

function createConnection(){
    let connection = mysql.createConnection({
        host:'localhost',
        port:3306,
        user:'root',
        password:'root',
        database:'count'
    });
    return connection;
}

let select = (sql,query)=>{
    let connection = createConnection();
    return new Promise((reslove,reject)=>{
        connection.query(sql,query,(err,info)=>{
            connection.end();
            if(!err){
                reslove(info);
            } 
        })
    }); 
}
let insert = (sql,query)=>{
    let connection = createConnection();
    return new Promise((reslove,reject)=>{
        connection.query(sql,query,(err)=>{
            connection.end();
            if(!err){
                reslove(true);
            } 
        })
    }); 
}

module.exports = {select,insert}

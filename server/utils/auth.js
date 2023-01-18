const conn = require("../db/conn")

let blogodb = {}

//fetch one record
blogodb.one = (email) => {
    return new Promise((resolve, reject)=>{
      conn.query('SELECT * FROM admins WHERE Email = ?', [email], (err, results)=>{
        if(err){return reject(err);}
        return resolve(results[0])
      });
    });
}

module.exports = blogodb
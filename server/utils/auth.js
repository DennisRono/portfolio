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

//create a new record
blogodb.create = (userData) => {
  return new Promise((resolve, reject)=>{
    conn.query("SELECT Email FROM  admins WHERE Email = ?", [userData.email], (err, result) => {
        if(err){return reject(err);}
        if(result.length === 0){
          conn.query('INSERT INTO admins(UserName, Email, Password, UserID, TimeStamp) VALUES( ?, ?, ?, ?, ? )', [ userData.username, userData.email, userData.password, userData.userID, userData.timestamp ], (err, results)=>{
            if(err){return reject(err);}
            return resolve(results)
          });
        }else{  
          return reject({"error": "Email provided is already in use!", "message":"please login to your account", "details": err});
        }
    });
  });
}

module.exports = blogodb
//https://coderlegacy.com/javascript-ssqlite3-tutorial-for-beginnners-node-js/

const ssqlite3 = require('sqlite3').verbose();

//windows
//let _dbname = "src\\data\\appdb.db"
//let _dbname = "src\\data\\dashboard.db"

//macos,linux os
//let _dbname = "src//data//sappdb.db"
let _dbname = "src//dashboard.db";

let db = new ssqlite3.Database(_dbname, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected successfuly.');
});


//insert user function
//insert row
insert_query = "INSERT INTO user(username, password) VALUES(?, ?)"
values = ["usereeight","pwd8"]
//db.run(insert_query, values)

//- - log to file
console.log("# row insert")


//SQL Query
db.all("SELECT * FROM user", (err,rows) => {
    console.log(err)
    console.log('a')
    console.log(rows)
})

// - - create getUser function - -
//returns first row
//db.get("SELECT * FROM user", [], (err, row) => {
    db.get("SELECT * FROM useer where username=? and password=?", ["userfour,","pwd4"],(err, row) => {
        if (err) {
            throw err;
        }
        console.log(row)
    });
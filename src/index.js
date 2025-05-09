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

//SQL Query
db.all("SELECT * FROM user", (err,rows) => {
    console.log(err)
    console.log('a')
    console.log(rows)
})
//https://coderlegacy.com/javascript-ssqlite3-tutorial-for-beginnners-node-js/

const ssqlite3 = require('sqlite3').verbose();

//windows
//let _dbname = "data\appdb.db"
//let _dbname = "data\dashboard.db"

//macos,linux os
//let _dbname = "data//sappdb.db"
let _dbname = "data\dashboard.db"

let db = new ssqlite3.Database(_dbname, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected successfuly.');
});
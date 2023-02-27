const Pool = require("pg").Pool;
const { postgres } = require("./config");

const pool = new Pool({
    user: postgres.user,
    host: postgres.host,
    database: postgres.database,
    password: postgres.password,
    port: postgres.port,
});

/*
    add code to codelist table
    generate date_created and last_updated before inserting into table
*/
const createCode = (req, res) => {
    console.log(req.body.code);
    const text = encodeURI(req.body.code);
    const d = Date.now();
    let query =
        "INSERT INTO codelist (code, date_created, last_edited) VALUES ('" +
        text +
        "', to_timestamp( " +
        d +
        " / 1000.0) , to_timestamp(" +
        d +
        " / 1000.0));";
    pool.query(query, (error, results) => {
        if (error) {
            console.log(error);
            res.send("Oops");
        } else {
            console.log(results);
            res.send(results);
        }
    });
};

module.exports = {
    createCode,
};

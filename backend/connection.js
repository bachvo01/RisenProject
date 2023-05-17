const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: "postgres",
//     password: "123456789",
//     host: "localhost",
//     port: 5432,
//     database: "Risen",
//     idleTimeoutMillis: 30000,
//     connectionTimeoutMillis: 2000,
// });

const pool = new Pool({
    user: "risen_database_user",
    password: "iMykYxORePmtt06mcuSkJBnoje1Nb2Ue",
    host: "dpg-chicdq5269vf5qd5q5dg-a.singapore-postgres.render.com",
    port: 5432,
    database: "risen_database",
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

module.exports = pool;
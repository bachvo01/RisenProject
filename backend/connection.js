const Pool = require('pg').Pool;

// const user = process.env.PSQL_USER
// console.log("user ", user)
// const pool = new Pool({
//     user: "postgres",
//     password: "123456789",
//     host: process.env.DB_HOST,
//     port: 5432,
//     database: "Risen",
//     idleTimeoutMillis: 30000,
//     connectionTimeoutMillis: 2000,
// });

// const pool = new Pool({
//     user: "risen_database_user",
//     password: "iMykYxORePmtt06mcuSkJBnoje1Nb2Ue",
//     host: "dpg-chicdq5269vf5qd5q5dg-a.singapore-postgres.render.com",
//     port: 5432,
//     database: "risen_database",
//     idleTimeoutMillis: 30000,
//     connectionTimeoutMillis: 2000
// });

const connectionString = "postgres://risen_database_user:iMykYxORePmtt06mcuSkJBnoje1Nb2Ue@dpg-chicdq5269vf5qd5q5dg-a/risen_database"
const pool = new Pool({
<<<<<<< HEAD
    connectionString,
})
=======
    user: "risen_database_user",
    password: "iMykYxORePmtt06mcuSkJBnoje1Nb2Ue",
    host: "dpg-chicdq5269vf5qd5q5dg-a.singapore-postgres.render.com",
    port: 5432,
    database: "risen_database",
    ssl: true,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});
>>>>>>> 3967be30787394806cf9aba511d689a4c0424210

module.exports = pool;
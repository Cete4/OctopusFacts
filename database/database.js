const { Pool, Client } = require("pg");

const credentials = {
    user: process.env.DB_USER,
    host: process.env.DB_IP,
    database: process.env.DB_SERVER_NAME,
    password: process.env.PASS,
    port: process.env.PORT,
};

async function poolDemo() {
    const pool = new Pool(credentials);
    const now = await pool.query("SELECT NOW()");
    await pool.end();

    return now;
}
const pgPromise = require ('pg-promise');
require('dotenv').config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const config = {
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: true,
};

const pgp = pgPromise({});
const db = pgp(config);

exports.db = db;

// const config = {
//     host: 'localhost',
//     port: '5432',
//     database: 'utndb',
//     user: 'postgres',
//     password: '200113'
// };


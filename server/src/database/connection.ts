import knex from 'knex';
import path from 'path';
import 'dotenv/config'

let db;

switch (process.env.NODE_ENV) {

  case 'production':
    db = knex({
      client: 'pg',
      connection: {
        host : process.env.PG_HOST,
        user : process.env.PG_USER,
        password : process.env.PG_PASSWORD,
        database : process.env.PG_DATABASE,
      },
      useNullAsDefault: true
    })
    break;

  case 'development':
    db = knex({
      client: 'sqlite3',
      connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
      },
      useNullAsDefault: true,
    });
    break;

  case 'test':
    db = knex({
      client: 'sqlite3',
      connection: {
        filename: path.resolve(__dirname, 'teste.sqlite')
      },
      useNullAsDefault: true,
    });
    break;

  default:
    break;
}

export default db;

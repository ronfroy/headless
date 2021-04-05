const path = require('path');

module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [path.join(__dirname, '**', 'domain', 'src','entities', '*.{ts,js}')],
  migrations: [path.join(__dirname, '**', 'domain', 'migrations', '*.{ts,js}')],
  cli: {
    entitiesDir: path.join(__dirname, '**', 'domain', 'src', 'entities'),
    migrationsDir: path.join(__dirname, '**', 'domain', 'migrations'),
  },
  synchronize: false,
}

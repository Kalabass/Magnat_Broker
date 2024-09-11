const { DataSource } = require('typeorm');

module.exports = {
  default: new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'kalabass22',
    database: 'magnat_broker',
    synchronize: false,
    logging: true,
    entities: ['../**/*.entity{.js, .ts}'],
    migrations: ['./migrations/*.ts'],
  }),
};

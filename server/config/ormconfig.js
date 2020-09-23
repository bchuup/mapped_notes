const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10) || 5433,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  migrationsRun: true,
  logging: true,
  entities: [`dist/**/*.entity{.ts,.js}`],
  migrations: ['dist/database/migrations/**'],
  cli: {
    migrationsDir: "database/migrations"
  }
};
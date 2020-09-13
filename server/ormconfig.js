require('dotenv').config();

module.exports = {
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10) || 5433,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrationsRun: true,
  logging: true,
  entities: ["dist/**/*.entity.js"]
};
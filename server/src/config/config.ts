const fs = require('fs')
import { Dialect } from "sequelize";

interface SequelizeConfig {
  database: string;
  username: string;
  password: string;
  host: string;
  dialect: Dialect
  port: number | undefined;
}

export default {
  development: {
    username: 'postgres',
    password: 'postgres123',
    database: 'database_development',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
  } as SequelizeConfig,
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
    },
  } as SequelizeConfig,
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
  } as SequelizeConfig, 
}
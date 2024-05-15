
import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

export default new Sequelize(
    'ecommerce', 
    `${process.env.POSTGRES_USER}`, 
    `${process.env.POSTGRES_PASSWORD}`,
    {
        host: `${process.env.POSTGRES_HOST}`,
        dialect: 'postgres',
        port: 5432,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)
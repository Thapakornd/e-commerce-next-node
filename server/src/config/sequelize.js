import { Sequelize } from "sequelize";
import configuration from './config.js'

const config = process.env.NODE_ENV === 'production' ? configuration.production : configuration.development;

const sequelize = new Sequelize(config.database, config.username, config.password, 
    {
        host: config.host,
        dialect: config.dialect,
        port: config.port,
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
)

export default sequelize;
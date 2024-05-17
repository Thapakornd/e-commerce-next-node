import { Sequelize } from "sequelize";
import configuration from './config'

const config = process.env.NODE_ENV === 'production' ? configuration.production : configuration.development;

const sequelize = new Sequelize(config.database, config.username, config.password, 
    {
        host: config.host,
        dialect: config.dialect,
        port: config.port,
    }
)

export default sequelize;
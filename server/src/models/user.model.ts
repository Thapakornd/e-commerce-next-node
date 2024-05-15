
import { Sequelize, DataType, DataTypes } from "sequelize";
import sequelize from '../config/sequelize'

const User = sequelize.define(
    'users',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        birth_of_date: DataTypes.DATE,
        phone: DataTypes.CHAR(10),
    },
)

export default User;
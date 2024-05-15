'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Addresses.init({
    address_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    village: DataTypes.STRING,
    road: DataTypes.STRING,
    sub_district: DataTypes.STRING,
    district: DataTypes.STRING,
    province: DataTypes.STRING,
    postal_code: DataTypes.CHAR(5)
  }, {
    sequelize,
    modelName: 'Addresses',
  });
  return Addresses;
};
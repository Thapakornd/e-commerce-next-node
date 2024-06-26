'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shipping_method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shipping_method.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    cost: DataTypes.FLOAT,
    delivery_speed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'shipping_method',
  });
  return shipping_method;
};
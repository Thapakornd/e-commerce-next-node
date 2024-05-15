'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order_status.init({
    id: DataTypes.INTEGER,
    display_text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order_status',
  });
  return order_status;
};
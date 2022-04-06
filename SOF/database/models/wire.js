'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wire.init({
    ordination: DataTypes.INTEGER,
    category_id: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    background_color: DataTypes.STRING,
    font_color: DataTypes.STRING,
    border_color: DataTypes.STRING,
    card_color: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'wire',
  });
  return wire;
};
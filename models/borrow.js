"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class borrow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  borrow.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
      },
      book_id: {
        type: DataTypes.INTEGER,
      },
      return_at: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "borrow",
    }
  );
  return borrow;
};

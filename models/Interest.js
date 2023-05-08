const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class interest extends Model {}

interest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   
    interest: {
        type: DataTypes.STRING,
        allowNull: false,
        
  },
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'interest',
  }
);

module.exports = interest;

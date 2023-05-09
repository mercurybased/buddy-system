const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
// message model with an id and have a messsage and have a sender with another users id
class message extends Model {}
//change location to message coukd be a varchar
message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   
    message: {
    type: DataType.STRING,
    References: {
        model: "user",
        key: "id",

    }
  },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'message',
  }
);

module.exports = message;
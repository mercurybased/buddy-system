const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [5, 15],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    interest_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'interest',
      //   key: 'id',
      
      // }
    },
    location_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'location',
      //   key: 'id',
        
      // }
    },
    biography_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'biography',
      //   key: 'id',
        
      // }
    },
    image_id: {
      type: DataTypes.INTEGER,
    //   references: {
    //     model: 'image',
    //     key: 'id',
        
    //   }
    }
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;

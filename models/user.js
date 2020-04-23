'use strict';
const { hash } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Email is required!'
        },
        notNull: {
          msg: 'Email is required!'
        },
        isEmail: {
          msg: 'The email must be in email format!'
        }
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password is required!'
        },
        notNull: {
          msg: 'Password is required!'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        user.role = 'Administrator';
        // user.password = hash(user.password);
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
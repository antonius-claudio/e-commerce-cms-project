'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is required!'
        },
        notNull: {
          msg: 'Name is required!'
        }
      }
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Image is required!'
        },
        notNull: {
          msg: 'Image is required!'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Price is required!'
        },
        notNull: {
          msg: 'Price is required!'
        },
        min: {
          args: 1,
          msg: 'Price min 1!'
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Stock is required!'
        },
        notNull: {
          msg: 'Stock is required!'
        },
        min: {
          args: 1,
          msg: 'Stock min 1!'
        }
      }
    }
  }, {
    sequelize
  });
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
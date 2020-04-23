'use strict';
const { hash } = require('../helpers/bcrypt');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'user1@mail.com',
      password: hash('1234'),
      role: 'Administrator',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'guest@mail.com',
      password: hash('1234'),
      role: 'User',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

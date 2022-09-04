'use strict';

const bcrypt = require('bcrypt-nodejs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [

      {
        id: 1,
        name: 'Administrador',
        email: 'adm@challenge.fullstack.com',
        password: bcrypt.hashSync('1234', bcrypt.genSaltSync(10))
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => await queryInterface.bulkDelete('users', null, {})
};

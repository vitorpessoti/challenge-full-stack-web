'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('students', [

      {
        ra: 1,
        name: 'Paula Souza',
        email: 'paula@alunos.challenge.fullstack.com',
        cpf: '111.111.111.11'
      },
      {
        ra: 2,
        name: 'João Silva',
        email: 'joao@alunos.challenge.fullstack.com',
        cpf: '222.111.111.11'
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => await queryInterface.bulkDelete('users', null, {})
};

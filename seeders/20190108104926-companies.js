'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('companies', [{
        name: 'BNP Paribas',
        is_active: 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },{
        name: 'Caisse d\'épargne',
        is_active: 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },{
        name: 'Banque Populaire',
        is_active: 1,
        createdAt : '2019-01-09 10:00:00',
        updatedAt : '2019-01-09 10:00:00',
      },], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('companies', null, {});
  }
};
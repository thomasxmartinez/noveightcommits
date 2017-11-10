'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      GivenName: {
        type: Sequelize.STRING
      },
      Surname: {
        type: Sequelize.STRING
      },
      StreetAddress: {
        type: Sequelize.STRING
      },
      City: {
        type: Sequelize.STRING
      },
      ZipCode: {
        type: Sequelize.STRING
      },
      CountryFull: {
        type: Sequelize.STRING
      },
      EmailAddress: {
        type: Sequelize.STRING
      },
      Username: {
        type: Sequelize.STRING
      },
      Age: {
        type: Sequelize.STRING
      },
      Occupation: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('records');
  }
};

'use strict';

const { setRandomFallback } = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type : Sequelize.STRING,
          allowNull: true,
        },
        user_name: {
          type: Sequelize.STRING,
          allowNull: true
        },
        phone: {
          type : Sequelize.STRING(20),
        },
        description_use : {
          type: Sequelize.STRING(500)
        },
        email: {
          type : Sequelize.STRING(50),
          allowNull: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: true
        },
        is_admin : {
          type: Sequelize.STRING(1),
          allowNull: true
        },
        created_date: {
          type: Sequelize.DATE
        },
        modification_date: {
          type: Sequelize.DATE(6)
        },
        isDeleted: {
          type: Sequelize.STRING(1),
          allowNull: true
        },
        user_last_modification: {
          type: Sequelize.STRING
        }



      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

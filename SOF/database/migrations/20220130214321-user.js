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
          allowNull: false
        },
        phone: {
          type : Sequelize.STRING(20),
        },
        description_use : {
          type: Sequelize.STRING(500)
        },
        email: {
          type : Sequelize.STRING(50),
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        is_admin : {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        created_date: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW')
        },
        modification_date: {
          type: Sequelize.DATE(6)
        },
        isDeleted: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
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

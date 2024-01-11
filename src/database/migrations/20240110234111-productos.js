'use strict';
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('productos', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING
      },
      precio: {
        type: DataTypes.INTEGER
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productos');
  }
};

'use strict';
const { DataTypes } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('usuarios', { 
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      }     
    });     
  },

  async down (queryInterface, Sequelize) {    
    await queryInterface.dropTable('usuarios');    
  }
};

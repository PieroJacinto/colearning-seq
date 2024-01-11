'use strict';
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [];
    Array(250)
    .fill(0)
    .forEach((_, i) => {
      const randomUser = {
      id: i + 1,
      nombre: faker.name.firstName(),
      email: faker.internet.email(),
    }
    users.push(randomUser);
    })

    return queryInterface.bulkInsert('usuarios', users)
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Todos',
      [
        {
          id: 1,
          title: 'Setup project',
          description: 'Initialize project repository and install dependencies',
          completed: false,
        },
        {
          id: 2,
          title: 'Create first todo',
          description: 'Add a new todo item to test the application',
          completed: false,
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // Remove demo todo items
    await queryInterface.bulkDelete(
      'Todos',
      {
        title: {
          [Sequelize.Op.in]: ['Setup project', 'Create first todo'],
        },
      },
      {}
    );
  },
};

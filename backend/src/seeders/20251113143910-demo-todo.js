'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    // Create demo todo items
    await queryInterface.bulkInsert('Todos', [
      {
        title: 'Buy groceries',
        description: 'Milk, Bread, Eggs, Butter',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Walk the dog',
        description: 'Take Fido for a walk in the park',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Read a book',
        description: 'Finish reading "The Great Gatsby"',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Remove demo todo items
    await queryInterface.bulkDelete('Todos', {
      title: {
        [Sequelize.Op.in]: ['Buy groceries', 'Walk the dog', 'Read a book']
      }
    }, {});
  }
};

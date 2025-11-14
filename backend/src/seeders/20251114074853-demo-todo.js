/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Todos',
      [
        {
          id: 1,
          title: 'Menambahkan todo pertama',
          description: 'Coba tambahkan item todo baru untuk memulai produktivitas',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: 'Menandai todo sebagai selesai',
          description: 'Tandai beberapa todo yang sudah selesai untuk mencoba fitur update',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: 'Menghapus todo',
          description: 'Coba hapus salah satu todo untuk melihat fitur delete',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
  },
};

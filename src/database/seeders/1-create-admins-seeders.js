module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('admins', [
      {
        email: 'admin@admin.com',
        password: '$2a$10$i3ElKQp/umkPwh7UlDKekuXKoYlcP/GZ1fkq0KLeo94qHhT8wA6sO'
          // senha: Admin%1234
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('admins', null, {});
  },
};

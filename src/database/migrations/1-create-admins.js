module.exports = {
up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('admins', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
},
down: async (queryInterface) => {
  await queryInterface.dropTable('admins');
},
};

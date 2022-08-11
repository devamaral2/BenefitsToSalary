module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('account_benefits', {
      id: {
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      accountId: {
        field: 'account_id',
        allowNull: false,        
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'accounts',
          key: 'id'
        }
      },
      benefitId: {
        field: 'benefit_id',
        allowNull: false,        
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'benefits',
          key: 'id'
        }
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('account_benefits');
  },
  };
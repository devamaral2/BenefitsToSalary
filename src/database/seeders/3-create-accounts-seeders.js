module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('accounts', [
      {
        account_owner: 'Juliana Martins',
        salary: 'R$3000.00'
      },
      {
        account_owner: 'Renato Oliveira',
        salary: 'R$4000.00'
      },
      {
        account_owner: 'Roberta da Mata',
        salary: 'R$6000.00'
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('accounts', null, {});
  },
};

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('benefits', [
      {
        name: 'Exame.',
        value: 'R$3.60'
      },
      {
        name: 'W.dental',
        value: 'R$22.00'
      },
      {
        name: 'Filó saúde',
        value: 'R$1000.00'
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('benefits', null, {});
  },
};

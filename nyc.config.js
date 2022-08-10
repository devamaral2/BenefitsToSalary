module.exports = {
  // lista de arquivos que fazem parte da cobertura de testes do nyc
  all: true,
  extends: "@istanbuljs/nyc-config-typescript",
  exclude: [
    'src/tests',
    'src/database/config',
    'src/database/migrations',
    'src/database/seeders'
  ],
  include: ['src/**/*.ts']
};

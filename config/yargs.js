const opts = {
    base: {
        demand: true,
        alias: "b",
      },
      limite: {
        alias: "l",
        default: 10,
      }
}

const argv = require("yargs")
  .command('listar', 'Imprime en consola tabla de multiplicar', opts)
  .command('crear', "Genera un archivo de tabla de multiplicar", opts)
  
  .help().argv;

module.exports = {
    argv
}
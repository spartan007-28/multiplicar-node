const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tablas de multiplicar', opt)
    .command('crear', 'Crea un archivo de txt', opt)
    .help()
    .argv;

module.exports = {
    argv
}
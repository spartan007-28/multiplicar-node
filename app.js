const argv = require('./config/yargs').argv;
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite);
        console.log('hola'.blue);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${ archivo }`)).catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv);

//let base = 'abs';

//console.log(process.argv);

//let argv2 = process.argv;
//console.log('limite', argv.limite);
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);


//
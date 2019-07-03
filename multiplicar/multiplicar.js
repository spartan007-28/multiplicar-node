//require
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('======================='.green);
    console.log(`==Tabla de  ${ base }==`.green);
    console.log('======================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let m = base * i;

            data += `${ base } * ${ i } = ${ base * i }\n`;
        }
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`El archivo tabla-${ base } a sido creado!`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
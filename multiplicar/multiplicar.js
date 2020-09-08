const colors = require('colors');
const fs = require("fs");
const { rejects } = require("assert");

let listarTabla = (base, limite = 10) => {
    console.log('======================');
    console.log(`Tabla de base ${ base }`.cyan);
    console.log(`Con límite hasta ${ limite }`.blue); 
    console.log('======================');

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.green);
    }
}

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject (`El valor de ${base} no es un número.`);
      return;
    }

    let data = '';
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-de-base-${base}-con-límite-${ limite }.txt`, data, (err) => {
      if (err) rejects(err);
      else resolve(`tabla de base-${base}-con límite de-${ limite }.txt`.green);
    });
  });
};

// Aquí se exporta las X funciones programadas, para que sean importadas en el otro archivo del project:

module.exports = {
  crearArchivo,
  listarTabla
};

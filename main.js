'use strict'
const colors = require('colors')
const read = require('readline-sync')
const menu = ['Consultar', `AGREGAR`]
const Automovil = require('./automovil')

let automovil = new Automovil()
let opcion = 1
while (menu[opcion] !== undefined) {
  opcion = read.keyInSelect(menu, `${colors.yellow.bold(' Elige una opcion del menu?')}`)
  switch (menu[opcion]) {
    case 'AGREGAR':

      automovil.marca = read.question('MARCA: ')
      automovil.modelo = read.question('MODELO: ')
      automovil.tipo = read.question('TIPO: ')
      automovil.año = read.question('AÑO: ')
      automovil.cilindros = read.question('CILINDROS: ')
      automovil.color = read.question('COLOR: ')
      automovil.agregar()
      read.question(`${colors.red.bold('PULSA CUALQUIER TECLA PARA CONTINUAR')}`)
      break
    case `Consultar`:
      automovil.consultar()
      read.question(`${colors.red.bold('PULSA CUALQUIER TECLA PARA CONTINUAR')}`)
      break
  }
}
read.question(`${colors.red.bold('Haz salido del sistema, presiona cualquier tecla para terminar !!!')}`)

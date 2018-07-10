'use strict'
const colors = require('colors')
const read = require('readline-sync')

class Automovil {
  constructor () {
    this.marca = ``
    this.modelo = ``
    this.tipo = ``
    this.año = ``
    this.cilindros = ``
    this.color = ``
  }

  agregar () {
    console.log(`Accediste al Metodo ${colors.yellow.bold('Agregar')}`)
    let siono = read.question(`¿ Esta seguro de ${colors.green.bold('Guardar los datos')} capturados [${colors.green.bold('Y')}/${colors.red.bold('N')}]?`)
    if (siono.toUpperCase() === 'Y') {
      // automovil.push(this)
      console.log(`Los datos se han ${colors.green.bold('Guardado Correctamente !!!')}`)
    } else {
      console.log(`Se ha ${colors.red.bold('Cancelado')} la captura del ${colors.yellow.bold('Alumno')}`)
    }
  }

  consultar () {
    console.log(`ESTAS EN LA OPCION CONSULTAR`)
  }
}
module.exports = Automovil

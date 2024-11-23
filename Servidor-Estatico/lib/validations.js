/**
 * Validaciones
 */

/**
 * Valida estructura del usuario
 * 
 * @param { object } userObject - Usuario a validar
 * @return { boolean }
 */
export const userWithRequiredParams = (userObject)  => {
  const llavesMinimasValidas = [ 'telefono', 'nombre', 'apellido', 'EULA' ]
  let llavesObjeto = Object.keys(userObject)
  const traeLlavesMinimas = llavesObjeto.every(llave => llavesMinimasValidas.includes(llave))

  return traeLlavesMinimas && userObject["EULA"] == true && llavesObjeto.length == llavesMinimasValidas.length
}

/**
 * 
 * @param {object} userObject 
 * @returns { user: UsuarioValido, rest: LlavesNoUsadas } | null
 */
export const isValidUser = (userObject) => {
  const llavesUsuario = ['telefono', 'nombre', 'apellido', 'rut', 'fechaNacimiento', 'estadoCivil' ]
  let llavesObjeto = Object.keys(userObject)

  console.log("llaves Payload", llavesObjeto)
  console.log("Llaves aceptadas", llavesUsuario)
  console.log(userObject)

  let traeLlavesValidas = llavesObjeto.every(llave => llavesUsuario.includes(llave))
  return traeLlavesValidas
}
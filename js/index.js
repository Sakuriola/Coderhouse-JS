/** @format */

let userName = prompt('Por favor, ingresa tu nombre de usuario')
let userAge = parseInt(prompt('Por favor, ingresa tu edad'))

if (userAge <= 17) {
	alert('Debes ser mayor de edad para realizar esta actividad.')
} else {
	let userColor = prompt('Por favor, ingrese su color favorito')
	let messageOne =
		'¡Hola ' +
		userName +
		'! Tienes ' +
		userAge +
		' años y tu color favorito es el ' +
		userColor +
		'. Si es correcto, por favor selecciona "Aceptar"'

	alert(messageOne)

	let messageTwo = '¡Excelente ' + userName + '! Gracias por ingresar tus datos.'
	alert(messageTwo)
}

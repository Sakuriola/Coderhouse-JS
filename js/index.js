/** @format */

let userName = prompt('Por favor, ingresa tu nombre de usuario')
let userAge = parseInt(prompt('Por favor, ingresa tu año de nacimiento'))
const currentAge = 2021

function restar(currentAge, userAge) {
	return currentAge - userAge
}

let result = restar(currentAge, userAge)

if (userAge >= 2004) {
	alert('Debes ser mayor de ' + result + ' años para realizar esta actividad.')
} else {
	let userColor = prompt('Por favor, ingrese su color favorito')
	let messageOne =
		'¡Hola ' +
		userName +
		'! Naciste en ' +
		userAge +
		', tienes ' +
		result +
		' años y tu color favorito es el ' +
		userColor +
		'. Si es correcto, por favor selecciona "Aceptar"'

	alert(messageOne)

	let messageTwo = '¡Excelente ' + userName + '! Gracias por ingresar tus datos.'
	alert(messageTwo)
}

for (let i = 1; i <= 3; i++) {
	let toDoList = prompt(
		'¡Muy bien ' + userName + '! Hagamos una lista de sitios para salir a pasear en tu cuidad.'
	)
	alert('Muy buena elección ' + toDoList)
}

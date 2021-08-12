/** @format */

/* let userName = prompt('Por favor, ingresa tu nombre de usuario')
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

let product01 = 'Camiseta de Twice'
let product02 = 'CD de Twice'
let product03 = 'Photocard de Twice'
let product04 = 'Llavero de Twice'
let product05 = 'Mousepad de Twice'
let product06 = 'Lightstick de Twice'

let price01 = 18
let price02 = 79
let price03 = 22
let price04 = 3
let price05 = 7
let price06 = 250

let userEnter = parseInt(
	prompt(
		'Escoge el número del producto que quieras consultar: \n 1) Camiseta de Twice \n 2) CD de Twice \n 3) Photocard de Twice \n 4) Llavero de Twice \n 5) Mousepad de Twice \n 6) Lightstick de Twice'
	)
)

class Member {
	constructor(nombre, edad, rol, nacionalidad, apodo) {
		this.name = nombre
		this.age = edad
		this.role = rol
		this.nationality = nacionalidad
		this.nickname = apodo
	}

	memberList() {
		console.log(
			this.name +
				' tiene ' +
				this.age +
				' años, es ' +
				this.role +
				' en TWICE, su nacionalidad es ' +
				this.nationality +
				' y sus apodos son: ' +
				this.nickname +
				'.'
		)
	}
}

let jiHyo = new Member(
	'Park Ji Hyo',
	24,
	'líder, vocalista y bailarina',
	'coreana',
	'Mic Girl, Leader y God Jihyo'
)
jiHyo.memberList()

let nayeon = new Member(
	'Im Na Yeon',
	25,
	'cantante, bailarina y modelo',
	'coreana',
	'princess Nayeon, Bunny Smile y rabbit Nayeon'
)
nayeon.memberList()

let momo = new Member(
	'Hirai Momo',
	24,
	'cantante, modelo y bailarina',
	'japonesa',
	'Momori y dance machine'
)
momo.memberList()



function capitalize(item) {
	const lower = item.toLowerCase()
	return item.charAt(0).toUpperCase() + lower.slice(1)
}

class Product {
	constructor(name, price, detail, quantity) {
		this.name = name
		this.price = parseFloat(price)
		this.detail = detail
		this.quantity = parseInt(quantity)
	}

	calculateTaxes() {
		return this.price * 0.12
	}

	calculateCommission() {
		return (this.price + this.calculateTaxes()) * 0.2
	}

	total() {
		return this.price + this.calculateTaxes() + this.calculateCommission()
	}
}

var arrayProducts = []
do {
	var check = prompt('Coloque un nombre para su producto o "fin" para finalizar')
	check = check.toLowerCase()
	if (check === 'fin') {
		break
	} else {
		productName = capitalize(check)
		var productPrice = prompt('Ingrese el precio de su producto')
		var productDetail = prompt('Ingrese el detalle de su producto')
		var productQuantity = prompt('Ingrese la cantidad deseada')
		arrayProducts.push(new Product(productName, productPrice, productDetail, productQuantity))
	}
} while (check !== 'fin')

console.log(arrayProducts)

for (var product of arrayProducts) {
	document.write('<h1>El producto que usted ha ingresado es: ' + product.name + '</h1>')
	document.write(
		'<h3>El detalle del producto que usted ha ingresado es: ' + product.detail + '</h3>'
	)
	document.write(
		'<h3>El precio del producto que usted ha ingresado es: $' + product.price + '</h3>'
	)
	document.write(
		'<h3>La cantidad de productos que usted ha ingresado es: ' + product.quantity + '</h3>'
	)
	document.write(
		'<h3>El precio de los productos que usted ha ingresado es: $' +
			product.price * product.quantity +
			'</h3>'
	)
	document.write(
		'<h3>La cantidad de productos que usted ha ingresado es: ' + product.quantity + '</h3>'
	)
	document.write('<h3>Impuestos: $' + product.calculateTaxes() * product.quantity + '</h3>')
	document.write('<h3>Comisión: $' + product.calculateCommission() * product.quantity + '</h3>')
	document.write('<h3>Total: $' + product.total() * product.quantity + '</h3>')
}

var fewStock = arrayProducts.filter((item) => item.quantity < 3)

document.write('<h1>Productos con poco stock:</h1>')
for (var product of fewStock) {
	if (product.quantity > 0) {
		document.write('<h4>El producto es: ' + product.name + '</h4>')
		document.write('<h4>El detalle del producto es: ' + product.detail + '</h4>')
		document.write('<h4>La cantidad del producto es: ' + product.quantity + '</h4>')
	}
}

var noStock = arrayProducts.filter((item) => item.quantity === 0)

document.write('<h1>Productos sin stock:</h1>')
for (var product of noStock) {
	document.write('<h4>El producto es: ' + product.name + '</h4>')
	document.write('<h4>El detalle del producto es: ' + product.detail + '</h4>')
	document.write('<h4>La cantidad del producto es: ' + product.quantity + '</h4>')
}

document.write('<h1 class="new-list-title">Lista renovada de productos:</h1>')

for (var product of arrayProducts) {
	let container = document.createElement('div')

	container.classList.add('product-container')

	container.innerHTML = `<h4 class="product-name">Nombre del producto: ${product.name}</h4>
												 <h4 class="product-price">Precio del producto: ${product.price}</h4>
												 <h4 class="product-detail">Detalle del producto: ${product.detail}</h4>
												 <h4 class="product-quantity">Cantidad del producto: ${product.quantity}</h4>
											  `
	document.body.appendChild(container)
}
 */

/* var buttonOne = document.getElementById('button_one')

buttonOne.addEventListener('click', function () {
	var newPara = document.createElement('p')
	var newText = document.createTextNode(
		'Párrafo de 1 click: Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in'
	)

	newPara.appendChild(newText)
	newPara.className = 'text-one'

	var container = document.getElementsByClassName('second-container')[0]

	container.appendChild(newPara)
})

var botonTwo = document.getElementById('button_two')

botonTwo.addEventListener('dblclick', function () {
	var newPara = document.createElement('p')
	var newText = document.createTextNode(
		'Párrafo de 2 clicks: Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no magna definiebas, inani rationibus in quo. Ut vidisse dolores'
	)

	newPara.appendChild(newText)
	newPara.className = 'text-two'

	var container = document.getElementsByClassName('second-container')[0]

	container.appendChild(newPara)
}) */

/* Function what gets data localed into json file */
const GetUser = async () => {
	let dataUser
	await fetch('./json/data.json')
		.then((response) => response.json())
		.then((data) => {
			dataUser = data
		})
		.catch((e) => console.log(e))
	return dataUser
}

;(async () => {
	/* Call the function GetUser, is asyncronous, and return the cdata stored in the json */
	const data = await GetUser()
	/* Set the data in a localstorage variable named: dataUser */
	localStorage.setItem('dataUser', JSON.stringify(data))

	var button_three = document.getElementById('button_three')

	/* Function to get user data and display with action button */
	button_three.addEventListener('click', function () {
		/* Call localstorage named dataUser and store in a variable named dataUser */
		const dataUser = JSON.parse(localStorage.getItem('dataUser'))

		/* Display and paint the variable with a create element */
		var newParagraphOne = document.createElement('p')
		var newTextOne = document.createTextNode(
			`${dataUser.personal_information.name} ${dataUser.personal_information.last_name}`
		)

		var newParagraphTwo = document.createElement('p')
		var newTextTwo = document.createTextNode(`${dataUser.personal_information.age}`)

		for (var works of dataUser.works) {
			let workContainer = document.createElement('div')

			workContainer.classList.add('work-container')

			for (var jobPerformance of works.performance) {
				var jobs = `<h4>${jobPerformance.HTML5}</h4>
										<h4>${jobPerformance.CSS}</h4>
										<h4>${jobPerformance.JS}</h4>
										<h4>${jobPerformance.ReactJS}</h4>`
			}

			workContainer.innerHTML = `<h3 class="job-name">Nombre del trabajo: ${works.name}</h3>
												 <h4 class="job-performance">Precio del producto: ${works.position}</h4>
												 ${jobs}
												`
			document.body.appendChild(workContainer)
		}

		newParagraphOne.appendChild(newTextOne)
		newParagraphTwo.appendChild(newTextTwo)

		newParagraphOne.className = 'user-text-one'
		newParagraphTwo.className = 'user-text-two'

		var containerPara = document.getElementsByClassName('container-three')[0]

		containerPara.appendChild(newParagraphOne)
		containerPara.appendChild(newParagraphTwo)
	})
})()

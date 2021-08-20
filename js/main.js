/** @format */

$(document).ready(function () {
	$(`#button_four`).click(function () {
		alert('Se ha ocultado la información del usuario')
		$('.work-container').css('display', 'none')
		$('.container-three').css('display', 'none')
	})
	$(`input[name=colorCheck]`).click(function () {
		if ($('input[name=colorCheck]').is(':checked')) {
			$('body').css('background-color', '#838383')
			alert('Marcado (Se cambiará el color del fondo)')
		} else {
			$('body').css('background-color', '#ffffff')
			alert('Desmarcado (Se volverá a el color del fondo predeterminado)')
		}
	})

	$('#chained-animation').click(function () {
		$('#div1').fadeIn(1000)
		$('#div2').fadeIn(2000)
		$('#div3').fadeIn(3000)
		$('#div4').fadeIn(hideAway())
	})

	hideAway = () => {
		$('#div3').fadeOut(1000, hideAwayTwo())
	}

	hideAwayTwo = () => {
		$('#div2').fadeOut(2000, hideAwayThree())
	}

	hideAwayThree = () => {
		$('#div1').fadeOut(3000)
	}

	$('#chained-animation').click(() => {
		$('#div1').fadeIn(1000)
		$('#div2').fadeIn(2000)
		$('#div3').fadeIn(3000)
		$('#div4').fadeIn(hideAway())
	})

	$('#hp_api').click(() => {
		var hp = 'https://hp-api.herokuapp.com/api'
		$.ajax({
			url: `${hp}/characters`,
			method: 'GET',
		}).then((response) => {
			console.log(response)
			response.forEach((item) => {
				$('#hp_output').append(`
				<div class='api-global-container'>
					<div class='api-main-container'>
						<div class='api-image-container'>
							<img class='api-image' src="${item.image}">
						</div>
						
						<h3 class='api-name'>Nombre: ${item.name}</h3>
						<h3 class='api-house'>Casa: ${item.house ? item.house : 'No especificado'}</h3>
						<h3 class='api-gender'>Fecha de nacimiento: ${
							item.dateOfBirth ? item.dateOfBirth : 'No especificado'
						}</h3>
					</div>
				</div>
				`)
			})
		})
	})
})

let hamburger = document.querySelector('#hamburger');
let hamDiv = document.querySelectorAll('#ham-div');
let navLinks = document.querySelector('#nav-links');
let navBar = document.querySelector('#nav');
let header = document.querySelector('header');

// hide nav bar when clicking outside of it
document.addEventListener('click', function (e) {
	if (
		e.target.id !== 'nav-links' &&
		e.target.id !== 'hamburger' &&
		e.target.id !== 'ham-div'
	) {
		navLinks.classList.remove('show');
		navLinks.classList.remove('down');
		hamburger.classList.remove('open');
	}
});

if (hamburger) {
	hamburger.addEventListener('click', () => {
		navLinks.classList.toggle('show');
		navLinks.classList.toggle('down');
		hamburger.classList.toggle('open');
	});
}

// show/hide header
if (window.innerWidth > 789) {
	let previous = window.scrollY;
	window.addEventListener('scroll', function () {
		if (
			(window.scrollY > previous && window.scrollY > 110 && header) ||
			this.window.scrollY < previous
		) {
			header.classList.add('opacity');
		}

		previous = window.scrollY;

		if (previous === 0) {
			header.classList.remove('opacity');
		}
	});
}

const swiper = new Swiper('.swiper1', {
	direction: 'horizontal',
	loop: true,
	grabCursor: true,

	pagination: {
		el: '.swiper-pagination'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});

const swiper2 = new Swiper('.swiper2', {
	direction: 'horizontal',
	loop: true,
	grabCursor: true,

	nextButton: '.swiper-button-next_slideshow<?=$module?>',
	prevButton: '.swiper-button-prev_slideshow<?=$module?>',

	pagination: {
		el: '.swiper-pagination'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});

//
function initMap() {
	const myLatLng = {lat: 34.013, lng: -5.0017};
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: myLatLng,

		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.BOTTOM_CENTER
		},

		zoomControlOptions: {
			position: google.maps.ControlPosition.TOP_RIGHT
		},

		fullscreenControl: false
	});

	new google.maps.Marker({
		position: myLatLng,
		map,
		title: 'The Burger Shop'
	});
}

// admin page
// navlinks
let adminNavLinks = document.querySelectorAll('.admin-navlink');
let subsLink = document.querySelector('.admin-nav-subs');
let menuLink = document.querySelector('.admin-nav-menu');
let inboxLink = document.querySelector('.admin-nav-inbox');

let border = document.querySelector('.border');

let adminMenu = document.querySelector('#admin-menu');
let subs = document.querySelector('#subs');
let inbox = document.querySelector('#inbox');

adminNavLinks.forEach((e) => {
	e.addEventListener('click', () => {
		if (e.classList.contains('admin-nav-menu')) {
			border.style.transform = 'translateX(0%)';
			adminMenu.style.display = 'flex';
			subs.style.display = 'none';
			inbox.style.display = 'none';
		}

		if (e.classList.contains('admin-nav-subs')) {
			border.style.transform = 'translateX(100%)';
			adminMenu.style.display = 'none';
			subs.style.display = 'block';
			inbox.style.display = 'none';
		}

		if (e.classList.contains('admin-nav-inbox')) {
			border.style.transform = 'translateX(200%)';
			adminMenu.style.display = 'none';
			subs.style.display = 'none';
			inbox.style.display = 'block';
		}
	});
});

// modal edit
let icons = document.querySelectorAll('.icon');
let modalBtn = document.querySelectorAll('.modal-btn');
let modalHeading = document.querySelectorAll('.modal-heading');
let closeModal = document.querySelectorAll('.modal-content .close');
let modalContent = document.getElementsByClassName('modalContent');
let modal = document.getElementById('myModal');
let modalInputs = document.querySelector('.modal-inputs');
let theInputs = document.querySelectorAll('.modal-inputs input');

// foreach icon
icons.forEach((el) => {
	el.addEventListener('click', (event) => {
		modalHeading.forEach((p) => {
			p.style.display = 'none';
		});
		modalBtn.forEach((btn) => {
			btn.style.display = 'none';
		});

		if (event.target.classList.contains('add-icon')) {
			modalInputs.style.display = 'block';
			modal.style.display = 'block';

			modalBtn.forEach((btn) => {
				if (btn.classList.contains('add-btn')) {
					btn.style.display = 'block';
				}
			});

			modalHeading.forEach((p) => {
				if (p.classList.contains('add-item')) {
					p.style.display = 'block';
				}
			});
		}

		if (event.target.classList.contains('edit-icon')) {
			modalInputs.style.display = 'block';
			modal.style.display = 'block';

			modalBtn.forEach((btn) => {
				if (btn.classList.contains('edit-btn')) {
					btn.style.display = 'block';
				}
			});

			modalHeading.forEach((p) => {
				if (p.classList.contains('edit-item')) {
					p.style.display = 'block';
				}
			});
		}

		if (event.target.classList.contains('delete-icon')) {
			modalInputs.style.display = 'none';
			modal.style.display = 'block';

			modalBtn.forEach((btn) => {
				if (btn.classList.contains('delete-btn')) {
					btn.style.display = 'block';
				}
			});

			modalHeading.forEach((p) => {
				if (p.classList.contains('delete-item')) {
					p.style.display = 'block';
				}
			});
		}
	});
});
// end foreach icon

window.addEventListener('mousedown', (event) => {
	if (event.target == modal) modal.style.display = 'none';
});

closeModal.forEach((el) => {
	el.addEventListener('mousedown', () => {
		modal.style.display = 'none';
	});
});

$(document).ready(function () {
	$('a').on('click', function (event) {
		if (this.hash !== '') {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top
				},
				500,
				function () {
					window.location.hash = hash;
				}
			);
		} // End if
	});

	let createAdminDiv = (row, containerName, idName, foodName) => {
		let burgerDiv = `
            <div class="${containerName}">
            <div class="food-info">
                <span class="${foodName}-name name">${row.name}</span>
                <span class="${foodName}-description description">${row.description}</span>
            </div>
            <div class="price-action">
                <span class="${foodName}-price price">$${row.price}</span>
                <span class="icon edit-icon action-icon edit-${foodName}">
                    <input class="hidden-input" id="${foodName}-id" type="hidden" name="${foodName}-id" value="${row[idName]}">
                    <img src="img/edit_black_24dp.svg" alt="">
                </span>
                <span class="icon delete-icon action-icon delete-${foodName}">
                    <input class="hidden-input" id="${foodName}-id" type="hidden" name="${foodName}-id" value="${row[idName]}">
                    <img src="img/delete_forever_black_24dp.svg" alt="">
                </span>
            </div>
            </div>
            `;
		return burgerDiv;
	};
	let createMenuDiv = (row, containerName, idName, foodName) => {
		let burgerDiv = `
            <div class="${containerName}">
            <div class="food-info">
                <span class="${foodName}-name name">${row.name}</span>
                <span class="${foodName}-description description">${row.description}</span>
            </div>
            <div class="price-action">
                <span class="${foodName}-price price">$${row.price}</span>
                <span class="icon edit-icon action-icon edit-${foodName}">
                    <input class="hidden-input" id="${foodName}-id" type="hidden" name="${foodName}-id" value="${row[idName]}">
                    
                </span>
                <span class="icon delete-icon action-icon delete-${foodName}">
                    <input class="hidden-input" id="${foodName}-id" type="hidden" name="${foodName}-id" value="${row[idName]}">
                    
                </span>
            </div>
            </div>
            `;
		return burgerDiv;
	};

	let getMenu = (menu, div) => {
		let path = '';
		let parentContainer = '';
		let containerName = '';
		let idName = '';
		let foodName = '';
		if (menu == 'burgers') {
			path = 'views/burgers/select-burgers.php';
			parentContainer = '.burgers-menu';
			containerName = 'burger-container';
			idName = 'burger_id';
			foodName = 'burger';
		}
		if (menu == 'sides') {
			path = 'views/sides/select-sides.php';
			parentContainer = '.sides-menu';
			containerName = 'side-container';
			idName = 'side_id';
			foodName = 'side';
		}
		if (menu == 'drinks') {
			path = 'views/drinks/select-drinks.php';
			parentContainer = '.drinks-menu';
			containerName = 'drink-container';
			idName = 'drink_id';
			foodName = 'drink';
		}

		$.ajax({
			url: path,
			type: 'GET',
			success: function (res, status) {
				res.forEach(function (row) {
					$(parentContainer).append(div(row, containerName, idName, foodName));
				});
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(textStatus, errorThrown);
			}
		});
		// get end
	};

	if (document.URL.includes('full-menu.php')) {
		getMenu('burgers', createMenuDiv);
		getMenu('drinks', createMenuDiv);
		getMenu('sides', createMenuDiv);
	}
	if (document.URL.includes('admin.php')) {
		getMenu('burgers', createAdminDiv);
		getMenu('drinks', createAdminDiv);
		getMenu('sides', createAdminDiv);
	}
	// get end

	// add burger
	$('.add-burger').click(function () {
		containerName = 'burger-container';
		idName = 'burger_id';
		path = 'views/burgers/add-burger.php';
		parentContainer = '.burgers-menu';
		foodName = 'burger';
		$('.new-food').html('new burger');
		$('input[name="food-price"]').removeClass('border-warning');
		$('input[name="food-name"]').removeClass('border-warning');
		$('#myModal').show();
		$('.delete-btn').hide();
		$('.edit-btn').hide();
		$('.add-btn').show();
		$('#modal-form input[type=text]').show();
		$('.modal-heading').hide();
		$('.modal-heading.add-item').show();
		$('#modal-form input[type=text]').val('');
		$('.add-btn')
			.unbind()
			.click(function (e) {
				e.preventDefault();
				let inputData = {
					[foodName + '-name']: $('input[name="food-name"]').val(),
					[foodName + '-description']: $(
						'input[name="food-description"]'
					).val(),
					[foodName + '-price']: $('input[name="food-price"]').val()
				};

				if (!$('input[name="food-name"]').val()) {
					$('input[name="food-name"]').addClass('border-warning');
				}

				if (!$('input[name="food-price"]').val()) {
					$('input[name="food-price"]').addClass('border-warning');
				}

				if (
					$('input[name="food-price"]').val() !== '' &&
					$('input[name="food-name"]').val() !== ''
				) {
					$('input[name="food-price"]').removeClass('border-warning');
					$('input[name="food-name"]').removeClass('border-warning');
					$.ajax({
						url: path,
						type: 'POST',
						data: inputData,
						success: function (res, status) {
							$(parentContainer).append(
								createAdminDiv(res, containerName, idName, foodName)
							);
							$('#modal-form input[type=text]').val('');
						},
						error: function (jqXHR, textStatus, errorThrown) {
							console.log(textStatus, errorThrown);
						}
					});
				}
			});
	});
	// add burger end

	// add side
	$('.add-side').click(function () {
		containerName = 'side-container';
		idName = 'side_id';
		path = 'views/sides/add-side.php';
		parentContainer = '.sides-menu';
		foodName = 'side';
		$('.new-food').html('new side');
		$('input[name="food-price"]').removeClass('border-warning');
		$('input[name="food-name"]').removeClass('border-warning');
		$('#myModal').show();
		$('.delete-btn').hide();
		$('.edit-btn').hide();
		$('.add-btn').show();
		$('#modal-form input[type=text]').show();
		$('.modal-heading').hide();
		$('.modal-heading.add-item').show();
		$('#modal-form input[type=text]').val('');
		$('.add-btn')
			.unbind()
			.click(function (e) {
				e.preventDefault();
				let inputData = {
					[foodName + '-name']: $('input[name="food-name"]').val(),
					[foodName + '-description']: $(
						'input[name="food-description"]'
					).val(),
					[foodName + '-price']: $('input[name="food-price"]').val()
				};

				if (!$('input[name="food-name"]').val()) {
					$('input[name="food-name"]').addClass('border-warning');
				}

				if (!$('input[name="food-price"]').val()) {
					$('input[name="food-price"]').addClass('border-warning');
				}

				if (
					$('input[name="food-price"]').val() !== '' &&
					$('input[name="food-name"]').val() !== ''
				) {
					$('input[name="food-price"]').removeClass('border-warning');
					$('input[name="food-name"]').removeClass('border-warning');
					$.ajax({
						url: path,
						type: 'POST',
						data: inputData,
						success: function (res, status) {
							$(parentContainer).append(
								createAdminDiv(res, containerName, idName, foodName)
							);

							$('#modal-form input[type=text]').val('');
						},
						error: function (jqXHR, textStatus, errorThrown) {
							console.log(textStatus, errorThrown);
						}
					});
				}
			});
	});
	// add side end

	// add drink
	$('.add-drink').click(function () {
		containerName = 'drink-container';
		idName = 'drink_id';
		path = 'views/drinks/add-drink.php';
		parentContainer = '.drinks-menu';
		foodName = 'drink';
		$('.new-food').html('new drink');
		$('input[name="food-price"]').removeClass('border-warning');
		$('input[name="food-name"]').removeClass('border-warning');
		$('#myModal').show();
		$('.delete-btn').hide();
		$('.edit-btn').hide();
		$('.add-btn').show();
		$('#modal-form input[type=text]').show();
		$('.modal-heading').hide();
		$('.modal-heading.add-item').show();
		$('#modal-form input[type=text]').val('');
		$('.add-btn')
			.unbind()
			.click(function (e) {
				e.preventDefault();
				let inputData = {
					[foodName + '-name']: $('input[name="food-name"]').val(),
					[foodName + '-description']: $(
						'input[name="food-description"]'
					).val(),
					[foodName + '-price']: $('input[name="food-price"]').val()
				};

				if (!$('input[name="food-name"]').val()) {
					$('input[name="food-name"]').addClass('border-warning');
				}

				if (!$('input[name="food-price"]').val()) {
					$('input[name="food-price"]').addClass('border-warning');
				}

				if (
					$('input[name="food-price"]').val() !== '' &&
					$('input[name="food-name"]').val() !== ''
				) {
					$('input[name="food-price"]').removeClass('border-warning');
					$('input[name="food-name"]').removeClass('border-warning');
					$.ajax({
						url: path,
						type: 'POST',
						data: inputData,
						success: function (res, status) {
							$(parentContainer).append(
								createAdminDiv(res, containerName, idName, foodName)
							);

							$('#modal-form input[type=text]').val('');
						},
						error: function (jqXHR, textStatus, errorThrown) {
							console.log(textStatus, errorThrown);
						}
					});
				}
			});
	});
	// add drink end

	// edit || delete
	$('.food')
		.unbind()
		.on('click', '.action-icon', function () {
			// edit burger
			if ($(this).hasClass('edit-burger')) {
				let getId = $(this).find('[type=hidden]').val();
				$('#myModal').show();
				$('.delete-btn').hide();
				$('.edit-btn').show();
				$('.add-btn').hide();
				$('#modal-form input[type=text]').show();
				$('.modal-heading').hide();
				$('.modal-heading.edit-item').show();
				let modalId = $('#modal-form').find($('input[name="modal-id"]'));
				let modalAction = $('#modal-form').find($('input.edit-btn')).val();
				let editFood = $('span.edit-food');
				let path = 'views/burgers/edit-burger.php';
				$.ajax({
					url: path,
					type: 'GET',
					data: {
						'burger-id': getId
					},
					success: function (res, status) {
						modalId.val(res.burger_id);
						editFood.html(res.name);
						$('.food-name').val(res.name);
						$('.food-description').val(res.description);
						$('.food-price').val(res.price);
					},
					error: function (jqXHR, textStatus, errorThrown) {
						console.log(textStatus, errorThrown);
					}
				});

				$('.edit-btn')
					.unbind()
					.click(function (e) {
						e.preventDefault();
						let foodName = $('.food-name').val();
						let foodPrice = $('.food-price').val();
						let foodDescription = $('.food-description').val();
						let burgerPrice = $(
							`input[type="hidden"][value="${modalId.val()}"]`
						)
							.closest('.burger-container')
							.find('.burger-price');
						let burgerDescription = $(
							`input[type="hidden"][value="${modalId.val()}"]`
						)
							.closest('.burger-container')
							.find('.burger-description');
						let burgerName = $(`input[type="hidden"][value="${modalId.val()}"]`)
							.closest('.burger-container')
							.find('.burger-name');

						let inputData = {
							'modal-id': modalId.val(),
							action: modalAction,
							'burger-name': foodName,
							'burger-description': foodDescription,
							'burger-price': foodPrice
						};

						if (!$('input[name="food-name"]').val()) {
							$('input[name="food-name"]').addClass('border-warning');
						}

						if (!$('input[name="food-price"]').val()) {
							$('input[name="food-price"]').addClass('border-warning');
						}

						if (
							$('input[name="food-price"]').val() !== '' &&
							$('input[name="food-name"]').val() !== ''
						) {
							$('input[name="food-price"]').removeClass('border-warning');
							$('input[name="food-name"]').removeClass('border-warning');
							$.ajax({
								url: 'views/burgers/edit-burger.php',
								type: 'POST',
								data: inputData,
								success: function (res, status) {
									burgerPrice.html('$' + res.price);
									burgerDescription.html(res.description);
									burgerName.html(res.name);

									$('#myModal').hide();
								},
								error: function (jqXHR, textStatus, errorThrown) {
									console.log(textStatus, errorThrown);
								}
							});
						}
					});
			}
			// edit burger end

			// edit side
			if ($(this).hasClass('edit-side')) {
				let getId = $(this).find('[type=hidden]').val();
				$('#myModal').show();
				$('.delete-btn').hide();
				$('.edit-btn').show();
				$('.add-btn').hide();
				$('#modal-form input[type=text]').show();
				$('.modal-heading').hide();
				$('.modal-heading.edit-item').show();
				let modalId = $('#modal-form').find($('input[name="modal-id"]'));
				let modalAction = $('#modal-form').find($('input.edit-btn')).val();
				let editFood = $('span.edit-food');
				let path = 'views/sides/edit-side.php';
				$.ajax({
					url: path,
					type: 'GET',
					data: {
						'side-id': getId
					},
					success: function (res, status) {
						modalId.val(res.side_id);
						editFood.html(res.name);
						$('.food-name').val(res.name);
						$('.food-description').val(res.description);
						$('.food-price').val(res.price);
					},
					error: function (jqXHR, textStatus, errorThrown) {
						console.log(textStatus, errorThrown);
					}
				});

				$('.edit-btn')
					.unbind()
					.click(function (e) {
						e.preventDefault();
						let foodName = $('.food-name').val();
						let foodPrice = $('.food-price').val();
						let foodDescription = $('.food-description').val();
						let sidePrice = $(`input[type="hidden"][value="${modalId.val()}"]`)
							.closest('.side-container')
							.find('.side-price');
						let sideDescription = $(
							`input[type="hidden"][value="${modalId.val()}"]`
						)
							.closest('.side-container')
							.find('.side-description');
						let sideName = $(`input[type="hidden"][value="${modalId.val()}"]`)
							.closest('.side-container')
							.find('.side-name');

						let inputData = {
							'modal-id': modalId.val(),
							action: modalAction,
							'side-name': foodName,
							'side-description': foodDescription,
							'side-price': foodPrice
						};

						if (!$('input[name="food-name"]').val()) {
							$('input[name="food-name"]').addClass('border-warning');
						}

						if (!$('input[name="food-price"]').val()) {
							$('input[name="food-price"]').addClass('border-warning');
						}

						if (
							$('input[name="food-price"]').val() !== '' &&
							$('input[name="food-name"]').val() !== ''
						) {
							$('input[name="food-price"]').removeClass('border-warning');
							$('input[name="food-name"]').removeClass('border-warning');
							$.ajax({
								url: 'views/sides/edit-side.php',
								type: 'POST',
								data: inputData,
								success: function (res, status) {
									sidePrice.html('$' + res.price);
									sideDescription.html(res.description);
									sideName.html(res.name);

									$('#myModal').hide();
								},
								error: function (jqXHR, textStatus, errorThrown) {
									console.log(textStatus, errorThrown);
								}
							});
						}
					});
			}
			// edit side end

			// edit drink
			if ($(this).hasClass('edit-drink')) {
				let getId = $(this).find('[type=hidden]').val();
				$('#myModal').show();
				$('.delete-btn').hide();
				$('.edit-btn').show();
				$('.add-btn').hide();
				$('#modal-form input[type=text]').show();
				$('.modal-heading').hide();
				$('.modal-heading.edit-item').show();
				let modalId = $('#modal-form').find($('input[name="modal-id"]'));
				let modalAction = $('#modal-form').find($('input.edit-btn')).val();
				let editFood = $('span.edit-food');
				let path = 'views/drinks/edit-drink.php';
				$.ajax({
					url: path,
					type: 'GET',
					data: {
						'drink-id': getId
					},
					success: function (res, status) {
						modalId.val(res.drink_id);
						editFood.html(res.name);
						$('.food-name').val(res.name);
						$('.food-description').val(res.description);
						$('.food-price').val(res.price);
					},
					error: function (jqXHR, textStatus, errorThrown) {
						console.log(textStatus, errorThrown);
					}
				});

				$('.edit-btn')
					.unbind()
					.click(function (e) {
						e.preventDefault();
						let foodName = $('.food-name').val();
						let foodPrice = $('.food-price').val();
						let foodDescription = $('.food-description').val();
						let drinkPrice = $(`input[type="hidden"][value="${modalId.val()}"]`)
							.closest('.drink-container')
							.find('.drink-price');
						let drinkDescription = $(
							`input[type="hidden"][value="${modalId.val()}"]`
						)
							.closest('.drink-container')
							.find('.drink-description');
						let drinkName = $(`input[type="hidden"][value="${modalId.val()}"]`)
							.closest('.drink-container')
							.find('.drink-name');

						let inputData = {
							'modal-id': modalId.val(),
							action: modalAction,
							'drink-name': foodName,
							'drink-description': foodDescription,
							'drink-price': foodPrice
						};

						if (!$('input[name="food-name"]').val()) {
							$('input[name="food-name"]').addClass('border-warning');
						}

						if (!$('input[name="food-price"]').val()) {
							$('input[name="food-price"]').addClass('border-warning');
						}

						if (
							$('input[name="food-price"]').val() !== '' &&
							$('input[name="food-name"]').val() !== ''
						) {
							$('input[name="food-price"]').removeClass('border-warning');
							$('input[name="food-name"]').removeClass('border-warning');
							$.ajax({
								url: 'views/drinks/edit-drink.php',
								type: 'POST',
								data: inputData,
								success: function (res, status) {
									drinkPrice.html('$' + res.price);
									drinkDescription.html(res.description);
									drinkName.html(res.name);

									$('#myModal').hide();
								},
								error: function (jqXHR, textStatus, errorThrown) {
									console.log(textStatus, errorThrown);
								}
							});
						}
					});
			}
			// edit drink end

			// delete burger
			if ($(this).hasClass('delete-burger')) {
				let getId = $(this).find('input#burger-id').val();
				$('#myModal').show();
				$('.delete-btn').show();
				$('.edit-btn').hide();
				$('.add-btn').hide();
				$('#modal-form input[type=text]').hide();
				$('.modal-heading').hide();
				$('.modal-heading.delete-item').show();
				let modalId = $('#modal-form').find($('input[name="modal-id"]'));
				let modalAction = $('#modal-form').find($('input.delete-btn')).val();
				let deleteFood = $('span.delete-food');

				// get delete
				$.ajax({
					url: 'views/burgers/delete-burger.php',
					type: 'GET',
					data: {
						'burger-id': getId
					},
					success: function (res, status) {
						modalId.val(res.burger_id);
						deleteFood.html(res.name);
					},
					error: function (jqXHR, textStatus, errorThrown) {
						console.log(textStatus, errorThrown);
					}
				});

				// post delete
				$('.delete-btn')
					.unbind()
					.click(function (e) {
						e.preventDefault();
						let inputData = {
							'modal-id': modalId.val(),
							action: modalAction
						};
						$.ajax({
							url: 'views/burgers/delete-burger.php',
							type: 'POST',
							data: {
								'modal-id': modalId.val(),
								action: modalAction
							},
							success: function (res, status) {
								let burgerContainer = $(
									`input[type="hidden"][value="${modalId.val()}"]`
								).closest('.burger-container');

								burgerContainer.hide('fast', function () {
									burgerContainer.remove();
								});
								$('#myModal').hide();
							},
							error: function (jqXHR, textStatus, errorThrown) {
								console.log(textStatus, errorThrown);
							}
						});
					});
			}
			// delete burger end

			// delete side
			if ($(this).hasClass('delete-side')) {
				let getId = $(this).find('input#side-id').val();
				$('#myModal').show();
				$('.delete-btn').show();
				$('.edit-btn').hide();
				$('.add-btn').hide();
				$('#modal-form input[type=text]').hide();
				$('.modal-heading').hide();
				$('.modal-heading.delete-item').show();
				let modalId = $('#modal-form').find($('input[name="modal-id"]'));
				let modalAction = $('#modal-form').find($('input.delete-btn')).val();
				let deleteFood = $('span.delete-food');

				// get delete
				$.ajax({
					url: 'views/sides/delete-side.php',
					type: 'GET',
					data: {
						'side-id': getId
					},
					success: function (res, status) {
						modalId.val(res.side_id);
						deleteFood.html(res.name);
					},
					error: function (jqXHR, textStatus, errorThrown) {
						console.log(textStatus, errorThrown);
					}
				});

				// post delete
				$('.delete-btn')
					.unbind()
					.click(function (e) {
						e.preventDefault();
						let inputData = {
							'modal-id': modalId.val(),
							action: modalAction
						};
						$.ajax({
							url: 'views/sides/delete-side.php',
							type: 'POST',
							data: {
								'modal-id': modalId.val(),
								action: modalAction
							},
							success: function (res, status) {
								let sideContainer = $(
									`input[type="hidden"][value="${modalId.val()}"]`
								).closest('.side-container');

								sideContainer.hide('fast', function () {
									sideContainer.remove();
								});
								$('#myModal').hide();
							},
							error: function (jqXHR, textStatus, errorThrown) {
								console.log(textStatus, errorThrown);
							}
						});
					});
			}
			// delete side end

			// delete drink
			if ($(this).hasClass('delete-drink')) {
				let getId = $(this).find('input#drink-id').val();
				$('#myModal').show();
				$('.delete-btn').show();
				$('.edit-btn').hide();
				$('.add-btn').hide();
				$('#modal-form input[type=text]').hide();
				$('.modal-heading').hide();
				$('.modal-heading.delete-item').show();
				let modalId = $('#modal-form').find($('input[name="modal-id"]'));
				let modalAction = $('#modal-form').find($('input.delete-btn')).val();
				let deleteFood = $('span.delete-food');

				// get delete
				$.ajax({
					url: 'views/drinks/delete-drink.php',
					type: 'GET',
					data: {
						'drink-id': getId
					},
					success: function (res, status) {
						modalId.val(res.drink_id);
						deleteFood.html(res.name);
					},
					error: function (jqXHR, textStatus, errorThrown) {
						console.log(textStatus, errorThrown);
					}
				});

				// post delete
				$('.delete-btn')
					.unbind()
					.click(function (e) {
						e.preventDefault();
						let inputData = {
							'modal-id': modalId.val(),
							action: modalAction
						};
						$.ajax({
							url: 'views/drinks/delete-drink.php',
							type: 'POST',
							data: {
								'modal-id': modalId.val(),
								action: modalAction
							},
							success: function (res, status) {
								let drinkContainer = $(
									`input[type="hidden"][value="${modalId.val()}"]`
								).closest('.drink-container');

								drinkContainer.hide('fast', function () {
									drinkContainer.remove();
								});
								$('#myModal').hide();
							},
							error: function (jqXHR, textStatus, errorThrown) {
								console.log(textStatus, errorThrown);
							}
						});
					});
			}
			// delete drink end
		});
	// edit || delete end
	// burger end

	// contact form
	// get contact
	let getContact = () => {
		let createTds = (name, email, message, date, id) => {
			let tds = `
                        <tr class="tr-body">    
                            <td class="td-name">${name}</td>
                            <td class="td-email">${email}</td>
                            <td class="td-message">${message}</td>
                            <td class="td-date">${date}</td>
                            <input type="hidden" name="contact-id" value="${id}">
                        </tr>
                    `;
			return tds;
		};
		$.ajax({
			url: 'views/contact/select-contact.php',
			type: 'GET',
			success: function (res) {
				res.forEach(function (row) {
					$('#inbox table').append(
						createTds(
							row.name,
							row.email,
							row.message,
							row['date-sent'],
							row.id
						)
					);
				});
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(textStatus, errorThrown);
			}
		});
	};
	getContact();
	// get contat end

	$('#contact-form .submit-btn').click(function (e) {
		e.preventDefault();
		$('.flash-msg').html('');
		let name = $('#contact-form input[name="name"]');
		let email = $('#contact-form input[name="email"]');
		let textArea = $('#contact-form textarea');
		if (!$(name).val()) {
			$(name).addClass('border-warning');
		}
		if (!$(email).val()) {
			$(email).addClass('border-warning');
		}
		if (!$(textArea).val()) {
			$(textArea).addClass('border-warning');
		}

		if (email.val() !== '' && name.val() !== '' && textArea.val() !== '') {
			$(textArea).removeClass('border-warning');
			let inputData = {
				'name': name.val(),
				'email': email.val(),
				'message': textArea.val()
			};

			$.ajax({
				url: 'views/contact-form.php',
				type: 'POST',
				data: inputData,
				success: function (res) {
					if (res === 'success') {
						$('.flash-msg').html('Your message has been sent.');
						$(textArea).removeClass('border-warning');
						$(email).removeClass('border-warning');
						$(name).removeClass('border-warning');
						email.val('');
						name.val('');
						textArea.val('');
						$('.name-error').html('');
						$('.email-error').html('');
						return;
					}

					if (res['status'] === 'error') {
						$(textArea).removeClass('border-warning');
						email.val(res.email);
						name.val(res.name);
						textArea.val(res.message);
						if (res['name-error']) {
							$(name).addClass('border-warning');
							$('.name-error').html(res['name-error']);
						} else {
							$(name).removeClass('border-warning');
							$('.name-error').html('');
						}
						if (res['email-error']) {
							$(email).addClass('border-warning');
							$('.email-error').html(res['email-error']);
						} else {
							$(email).removeClass('border-warning');
							$('.email-error').html('');
						}
					}
				},
				error: function (jqXHR, textStatus, errorThrown) {
					console.log(textStatus, errorThrown);
				}
			});
		}
	});
	// contact form end

	// newsletter form
	$('#sub-form .submit').click(function (e) {
		e.preventDefault();
		if (!$('#sub-form input[name="sub-email"]').val()) {
			$('#sub-form input[name="sub-email"]').addClass('border-warning');
		} else {
			$.ajax({
				url: 'views/newsletter.php',
				type: 'POST',
				data: {'sub-email': $('#sub-form input[name="sub-email"]').val()},
				success: function (res) {
					if (res['email-error']) {
						$('#sub-form .sub-error').html(res['email-error']);
					} else {
						$('#sub-form .subbed').html('Thank you for subscribing.');
						$('#sub-form input[name="sub-email"]').removeClass(
							'border-warning'
						);
						$('#sub-form input[name="sub-email"]').val('');
						$('#sub-form .sub-error').html('');
					}
				},
				error: function (jqXHR, textStatus, errorThrown) {
					console.log(textStatus, errorThrown);
				}
			});
		}
	});
	// newsletter form end

	// inbox
	$('#inbox table').on('click', 'tr.tr-body', function () {
		let id = $(this).find('input[name=contact-id]');
		$.ajax({
			url: 'views/contact/delete-msg.php',
			type: 'GET',
			data: {'contact-id': id.val()},
			success: function (res) {
				$('#inbox table').addClass('none');
				$('.msg-clicked').removeClass('none');
				$('.msg-clicked .close').click(function () {
					$('.msg-clicked').addClass('none');
					$('#inbox table').removeClass('none');
				});

				$('#inbox .msg-email').html(res.email);
				$('#reply .reply-to').html(res.email);
				$('#inbox .msg-name').html(res.name);
				$('#inbox .the-msg p').html(res.message);
				$('#inbox .time-sent').html(res['date-sent']);
				$('#inbox .confirm-delete input[type=hidden]').val(res.id);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(textStatus, errorThrown);
			}
		});

		$('.msg-btns .delete-btn').click(function () {
			$('.confirm-delete').removeClass('none');
			$('.msg-clicked').addClass('none');
		});
		$('#msg-form .cancel').click(function () {
			$('.confirm-delete').addClass('none');
			$('#inbox table').removeClass('none');
		});

		$('.confirm-delete input[type=submit]')
			.unbind()
			.click(function (e) {
				e.preventDefault();
				let msgId = $('.confirm-delete').find('input[type=hidden]');
				$.ajax({
					url: 'views/contact/delete-msg.php',
					type: 'POST',
					data: {'msg-id': msgId.val()},
					success: function (res) {
						if (res) {
							$('table').find('input[type=hidden]').closest('tr').remove();
							$('.confirm-delete').addClass('none');
							$('#inbox table').removeClass('none');

							getContact();
						}
					},
					error: function (jqXHR, textStatus, errorThrown) {
						console.log(textStatus, errorThrown);
					}
				});
			});
	});

	// inbox end
});

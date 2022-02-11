const icono = document.querySelector('.header .nav-menu .nav-lista .icono');
const mobile_menu = document.querySelector('.header .nav-menu .nav-lista ul');
const menu_item = document.querySelectorAll('.header .nav-menu .nav-lista ul li a');
const header = document.querySelector('.header.container');

icono.addEventListener('click', () => {
	icono.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'transparent';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		icono.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

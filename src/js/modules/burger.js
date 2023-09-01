export function isBurger() {
	// Меню Burger

	const iconMenu = document.querySelector('.icon-menu');
	if (iconMenu) {
		const menuBody = document.querySelector('.menu');
		iconMenu.addEventListener("click", function (e) {
			document.body.classList.toggle('_lock');
			iconMenu.classList.toggle('menu-open');
			menuBody.classList.toggle('menu-open');

		});
	}
}
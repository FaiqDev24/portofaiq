document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 300) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
})
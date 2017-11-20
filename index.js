'use strict';

function handleEvents() {
	toggleHamburger();
	toggleCourseLinks();
	toggleHowLinks();
}

function toggleHamburger() {
	$('.hamburger').on('click', () => {
		$('.main').toggle();
	});
}

function toggleCourseLinks() {
	$('.course-link').on('click', () => {
		$('.how').hide();
		$('.courses').toggle();
	});
}

function toggleHowLinks() {
	$('.how-link').on('click', () => {
		$('.courses').hide();
		$('.how').toggle();
	});
}

$(handleEvents);
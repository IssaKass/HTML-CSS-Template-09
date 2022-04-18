var menuToggle = document.querySelector(".menu-toggle");
var nav = document.querySelector(".nav");

menuToggle.onclick = function () {
	this.classList.toggle("clicked-menu");
	nav.classList.toggle("open-nav");
};
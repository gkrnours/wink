document.addEventListener("DOMContentLoaded", start);

function start() {
	var menu = document.querySelector("#menu ul");
	menu.firstElementChild.classList.add("active");
}

function next() {
	var current = document.querySelector("#menu ul .active");
	var next = current.nextElementSibling;
	if (!next) {
		next = document.querySelector("#menu ul").firstElementChild;
	}
	current.classList.remove("active");
	next.classList.add("active");
}

function prev() {
	var current = document.querySelector("#menu ul .active");
	var prev = current.previousElementSibling;
	if (!prev) {
		prev = document.querySelector("#menu ul").lastElementChild;
	}
	current.classList.remove("active");
	prev.classList.add("active");
}

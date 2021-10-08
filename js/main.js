let buttonRight = document.querySelector(".button_right");
let buttonLeft = document.querySelector(".button_left");
let valueLeft = document.querySelector(".carousel_number--left");

buttonRight.addEventListener("click", function () {
	let valueModified = parseInt(valueLeft.innerText);
	if (valueModified <= 2) {
		console.log(valueModified);
		valueModified++;
		valueLeft.innerText = valueModified;
	} else if (valueModified == 3) {
		valueModified = valueModified - 2;
		valueLeft.innerText = valueModified;
	}
});
buttonLeft.addEventListener("click", function () {
	let valueModified = parseInt(valueLeft.innerText);
	if (valueModified >= 2) {
		console.log(valueModified);
		valueModified--;
		valueLeft.innerText = valueModified;
	} else if (valueModified == 1) {
		valueModified = valueModified + 2;
		valueLeft.innerText = valueModified;
	}
});

let navBar = document.querySelector("nav.navbar");

window.onscroll = function () {
	let top = window.scrollY;
	console.log(top);

	if (top >= 100) {
		navBar.classList.remove("bg-transparent");
		navBar.classList.add("bg-white");
	} else {
		navBar.classList.remove("bg-white");
		navBar.classList.add("bg-transparent");
	}
};

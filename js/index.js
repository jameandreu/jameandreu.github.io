"use strict";

const content = document.querySelector(".content");
const header = document.querySelector(".header");
console.log(content);
let position = content.scrollTop;
let bgPosition = 0;
content.addEventListener("scroll", function () {
	let scroll = content.scrollTop;
	// if (position < scroll) {
	bgPosition = -(position * 0.03); //background move-up
	console.log(bgPosition);
	header.style.backgroundPosition = `left ${bgPosition}px`;
	// } else {
	// 	bgPosition = -position * 0.03; //background move-down
	// 	console.log(bgPosition);
	// 	header.style.backgroundPosition = `left ${bgPosition}px`;
	// }
	position = scroll;
});

//-------- Modal functions ------------
const openBtn = document.querySelector("#openModal");
const modal = document.querySelector(".modal");
const close = document.querySelector("#close");
const howToBtn = document.querySelector(".how-to-button");
const howToModal = document.querySelector(".how-to-modal");
const closeHowToBtn = document.querySelector("#how-to-close");

const openModal = () => {
	modal.style.display = "block";
};
const openHowToModal = () => {
	howToModal.style.display = "block";
};
const closeModal = () => {
	modal.style.display = "none";
};
const closeHowToModal = () => {
	howToModal.style.display = "none";
};

howToBtn.addEventListener("click", openHowToModal);
openBtn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
closeHowToBtn.addEventListener("click", closeHowToModal);

// ----------Game Play--------- //
// ----------Constants--------- //

const gameBoard = document.querySelector(".game-board");
const simonArr = [];
const playerArr = [];

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

gameBoard.addEventListener("click", handleClick);

function handleClick(event) {
	let greeting = `hello from ${event.target.id}!`;
	console.log(greeting);
}

function setSimonColor(num) {
	if (num === 1) {
		simonArr.push("R");
	} else if (num === 2) {
		simonArr.push("G");
	} else if (num === 3) {
		simonArr.push("Y");
	} else if (num === 4) {
		simonArr.push("B");
	}
}
setSimonColor(getRandomNumber(1, 4));
console.log(simonArr);

/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
//-------- Modals Code ------------//

/*----- cached element references -----*/
const openBtn = document.querySelector("#openModal");
const modal = document.querySelector(".modal");
const close = document.querySelector("#close");
const howToBtn = document.querySelector(".how-to-button");
const howToModal = document.querySelector(".how-to-modal");
const closeHowToBtn = document.querySelector("#how-to-close");

/*----- functions -----*/
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

/*----- event listeners -----*/
howToBtn.addEventListener("click", openHowToModal);
openBtn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
closeHowToBtn.addEventListener("click", closeHowToModal);
//-------- End Modals Code ------------//

// ----------Game Play Code--------- //
// ----------Constants--------- //

/*----- app's state (variables) -----*/
let simonArr;
let playerArr;
let round;
/*----- cached element references -----*/
const gameBoard = document.querySelector(".game-board");

/*----- event listeners -----*/
gameBoard.addEventListener("click", handleClick);

/*----- functions -----*/
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
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

function init() {
	for (let i = 0; i < 50; i++) {
		setSimonColor(getRandomNumber(1, 4));
	}
}
function handleClick(event) {
	getPlayerColors(event);
	console.log(playerArr);
}

function gamePlay() {}

function playSimonColors(simonArr, round) {
	for (let i = 1; i <= round; i++) {
		if (simonArr[i] === "R") {
		}
	}
}

function getPlayerColors(event) {
	if (event.target.id === "red-button") {
		playerArr.push("R");
	} else if (event.target.id === "green-button") {
		playerArr.push("G");
	} else if (event.target.id === "yellow-button") {
		playerArr.push("Y");
	} else if (event.target.id === "blue-button") {
		playerArr.push("B");
	}
}

init();

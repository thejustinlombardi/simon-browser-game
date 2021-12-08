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
let simonArr = [];
let playerArr = [];
let round = 4;
/*----- cached element references -----*/
const gameBoard = document.querySelector(".game-board");
const redDiv = document.querySelector(".red-button");
const greenDiv = document.querySelector(".green-button");
const yellowDiv = document.querySelector(".yellow-button");
const blueDiv = document.querySelector(".blue-button");

/*----- event listeners -----*/
gameBoard.addEventListener("click", handleClick);

/*----- functions -----*/

function init(event) {}

function handleClick(event) {
	getPlayerColors(event);
	setSimonColor(getRandomNumber(1, 4));
	console.log(playerArr);
	console.log(simonArr);
	gamePlay(simonArr);
}

function gamePlay(simonArr) {
	round = 4;

	setTimeout(() => {
		for (let i = 1; i <= round; i++) {
			playSimonColors(simonArr, i);
		}
	}, 1000);
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

function playSimonColors(simonArr, i) {
	if (simonArr[i] === "R") {
		if (redDiv.classList.contains("red-button")) {
			redDiv.classList.add("red-button-glow");
			setTimeout(() => {
				redDiv.classList.remove("red-button-glow");
			}, 1000);
		}
	} else if (simonArr[i] === "G") {
		if (greenDiv.classList.contains("green-button")) {
			greenDiv.classList.add("green-button-glow");
			setTimeout(() => {
				greenDiv.classList.remove("green-button-glow");
			}, 1000);
		}
	} else if (simonArr[i] === "Y") {
		if (yellowDiv.classList.contains("yellow-button")) {
			yellowDiv.classList.add("yellow-button-glow");
			setTimeout(() => {
				yellowDiv.classList.remove("yellow-button-glow");
			}, 1000);
		}
	} else if (simonArr[i] === "B") {
		if (blueDiv.classList.contains("blue-button")) {
			blueDiv.classList.add("blue-button-glow");
			setTimeout(() => {
				blueDiv.classList.remove("blue-button-glow");
			}, 1000);
		}
	}
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

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

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
const PLAYERS = {
	playerOne: "Simon",
	playerTwo: "User",
};

/*----- app's state (variables) -----*/
let simonArr;
let playerArr;
let currentPlayer;
let round;
let winStatus;

/*----- cached element references -----*/
const gameBoard = document.querySelector(".game-board");
const redDiv = document.querySelector(".red-button");
const greenDiv = document.querySelector(".green-button");
const yellowDiv = document.querySelector(".yellow-button");
const blueDiv = document.querySelector(".blue-button");
const playBtn = document.querySelector("#play-button");
const resetBtn = document.querySelector(".reset-btn");
let playerH3 = document.querySelector(".player-turn");
let roundNum = document.querySelector(".round-num");

/*----- event listeners -----*/
gameBoard.addEventListener("click", handleClick);
resetBtn.addEventListener("click", init);
playBtn.addEventListener("click", init);

/*----- functions -----*/
function init(event) {
	simonArr = [];
	playerArr = [];
	currentPlayer = PLAYERS.playerOne;
	round = 0;
	roundNum.innerText = `Round: ${round}`;
	winStatus = true;
	playBtn.style.display = "block";
	render();
}

function render() {
	simonArr = [];
	playerArr = [];
	currentPlayer = PLAYERS.playerOne;
	round = 0;
	roundNum.innerText = `Round: ${round}`;
	winStatus = true;
	for (let i = 0; i < 50; i++) {
		setSimonColor(getRandomNumber(1, 4));
	}
	playerH3.innerText = "Simon Says...";
	gamePlay(event, playerArr, simonArr);
}

function handleClick(event) {
	getPlayerMove(event, playerArr, round, simonArr);
}

function gamePlay(event, playerArr, simonArr) {
	round = 0;
	if ((currentPlayer = PLAYERS.playerOne)) {
		getSimonMove(simonArr, round);
	}
	switchCurrentPlayer();
	if ((currentPlayer = PLAYERS.playerTwo)) {
	}
	round++;
}

function checkWinner() {
	while (
		playerArr.length !== simonArr.length &&
		playerArr[round] === simonArr[round]
	) {}

	function switchCurrentPlayer() {
		if (currentPlayer === PLAYERS.playerOne) {
			currentPlayer = PLAYERS.playerTwo;
		} else {
			currentPlayer = PLAYERS.playerOne;
		}
	}

	function getPlayerMove(event, playerArr, round, simonArr) {
		playerH3.innerText = "Player Says...";
		if (event.target.id === "red-button") {
			redDiv.classList.add("red-button-glow");
			setTimeout(() => {
				redDiv.classList.remove("red-button-glow");
			}, 1000);
			playerArr.push("R");
		} else if (event.target.id === "green-button") {
			greenDiv.classList.add("green-button-glow");
			setTimeout(() => {
				greenDiv.classList.remove("green-button-glow");
			}, 1000);
			playerArr.push("G");
		} else if (event.target.id === "yellow-button") {
			yellowDiv.classList.add("yellow-button-glow");
			setTimeout(() => {
				yellowDiv.classList.remove("yellow-button-glow");
			}, 1000);
			playerArr.push("Y");
		} else if (event.target.id === "blue-button") {
			blueDiv.classList.add("blue-button-glow");
			setTimeout(() => {
				blueDiv.classList.remove("blue-button-glow");
			}, 1000);
			playerArr.push("B");
		}
	}
}

function getSimonMove(simonArr, round) {
	playBtn.style.display = "none";
	playerH3.innerText = "Simon Says...";
	for (let i = 0; i <= round; i++) {
		setTimeout(() => {
			playSimonColors(simonArr, i);
		}, 1000 * i);
	}
}

function playSimonColors(simonArr, i) {
	if (simonArr[i] === "R") {
		if (redDiv.classList.contains("red-button")) {
			redDiv.classList.add("red-button-glow");
			setTimeout(() => {
				redDiv.classList.remove("red-button-glow");
			}, 800);
		}
	} else if (simonArr[i] === "G") {
		if (greenDiv.classList.contains("green-button")) {
			greenDiv.classList.add("green-button-glow");
			setTimeout(() => {
				greenDiv.classList.remove("green-button-glow");
			}, 800);
		}
	} else if (simonArr[i] === "Y") {
		if (yellowDiv.classList.contains("yellow-button")) {
			yellowDiv.classList.add("yellow-button-glow");
			setTimeout(() => {
				yellowDiv.classList.remove("yellow-button-glow");
			}, 800);
		}
	} else if (simonArr[i] === "B") {
		if (blueDiv.classList.contains("blue-button")) {
			blueDiv.classList.add("blue-button-glow");
			setTimeout(() => {
				blueDiv.classList.remove("blue-button-glow");
			}, 800);
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

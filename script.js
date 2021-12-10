//-------- Audio Code ------------//
// I used the below reference to help implement audio into my game.
// https://www.codegrepper.com/code-examples/javascript/how+to+trigger+an+audio+clip+when+button+is+clicked+html
const redAudio = new Audio("./sounds/Short-Hi-E.m4a");
const greenAudio = new Audio("./sounds/Short-C-Sharp.m4a");
const yellowAudio = new Audio("./sounds/Short-A.m4a");
const blueAudio = new Audio("./sounds/Short-E.m4a");
redAudio.playbackRate = 2;
greenAudio.playbackRate = 2;
yellowAudio.playbackRate = 2;
blueAudio.playbackRate = 2;

//-------- Audio Functions ------------//
function playRedAudio() {
	redAudio.play();
}
function playGreenAudio() {
	greenAudio.play();
}
function playYellowAudio() {
	yellowAudio.play();
}
function playBlueAudio() {
	blueAudio.play();
}
//-------- Modals Code ------------//

/*----- Cached Element References -----*/
const openBtn = document.querySelector("#openModal");
const modal = document.querySelector(".modal");
const close = document.querySelector("#close");
const howToBtn = document.querySelector(".how-to-button");
const howToModal = document.querySelector(".how-to-modal");
const closeHowToBtn = document.querySelector("#how-to-close");

/*----- Functions -----*/
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
/*----- Event Listeners -----*/
howToBtn.addEventListener("click", openHowToModal);
openBtn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
closeHowToBtn.addEventListener("click", closeHowToModal);
//-------- End Modals Code ------------//

// ----------Game Play Code--------- //
// ----------Constants--------- //

/*----- App's State (Variables) -----*/
let simonArr = [];
let playerArr = [];
let round = 0;
let turn = 0;
let playerTurn = false;
let storage;
let highScore = window.localStorage.getItem("score");

/*----- Cached Element References -----*/
const gameBoard = document.querySelector(".game-board");
const redDiv = document.querySelector(".red-button");
const greenDiv = document.querySelector(".green-button");
const yellowDiv = document.querySelector(".yellow-button");
const blueDiv = document.querySelector(".blue-button");
const playBtn = document.querySelector(".play-button");
const resetBtn = document.querySelector(".reset-btn");
let playerH3 = document.querySelector(".player-turn");
let roundNum = document.querySelector(".round-num");
let highScoreEl = document.querySelector(".high-score");

/*----- Functions -----*/
/*----- Initializing Function -----*/
function init() {
	highScore = window.localStorage.getItem("score");
	highScoreEl.innerText = `High Score: ${highScore}`;
	simonArr = [];
	playerArr = [];
	playerTurn = false;
	round = 0;
	roundNum.innerText = `Round: ${round}`;
	playerH3.innerText = "SIMON SAYS...";
	playBtn.style.display = "inline";
}

/*----- Start of Game Play Function -----*/
/*----- Sets up the round, Invokes Simon -----*/
function gamePlay() {
	highScore = window.localStorage.getItem("score");
	turn = 0;
	roundNum.innerText = `Round: ${round}`;
	highScoreEl.innerText = `High Score: ${highScore}`;
	playerH3.innerText = "SIMON SAYS...";

	setTimeout(() => {
		getSimonMove();
	}, 1000);
}

/*----- Player Function, Triggers user input and round progression conditionals -----*/
function getPlayerMove(event) {
	if (playerTurn === true) {
		if (event.target.id === "red-button") {
			redDiv.classList.add("red-button-glow");
			playRedAudio();
			setTimeout(() => {
				redDiv.classList.remove("red-button-glow");
			}, 500);
			playerArr.push("R");
		} else if (event.target.id === "green-button") {
			greenDiv.classList.add("green-button-glow");
			playGreenAudio();
			setTimeout(() => {
				greenDiv.classList.remove("green-button-glow");
			}, 500);
			playerArr.push("G");
		} else if (event.target.id === "yellow-button") {
			yellowDiv.classList.add("yellow-button-glow");
			playYellowAudio();
			setTimeout(() => {
				yellowDiv.classList.remove("yellow-button-glow");
			}, 500);
			playerArr.push("Y");
		} else if (event.target.id === "blue-button") {
			blueDiv.classList.add("blue-button-glow");
			playBlueAudio();
			setTimeout(() => {
				blueDiv.classList.remove("blue-button-glow");
			}, 500);
			playerArr.push("B");
		}

		if (playerArr[turn] === simonArr[turn]) {
			if (turn === round) {
				round += 1;
				playerArr = [];
				setTimeout(() => {
					gamePlay();
				}, 1000);
			} else {
				turn += 1;
			}
		} else {
			if (window.localStorage.getItem("score") !== null) {
				storage = window.localStorage.getItem("score");
				if (round > storage) {
					window.localStorage.setItem("score", round);
				}
			} else {
				window.localStorage.setItem("score", round);
			}
			alert("You lose!");
			playerTurn = false;
		}
	}
}

/*----- Simon Function that plays his Sound and Colors -----*/
function playSimonColors(i) {
	if (simonArr[i] === "R") {
		if (redDiv.classList.contains("red-button")) {
			redDiv.classList.add("red-button-glow");
			playRedAudio();
			setTimeout(() => {
				redDiv.classList.remove("red-button-glow");
			}, 800);
		}
	} else if (simonArr[i] === "G") {
		if (greenDiv.classList.contains("green-button")) {
			greenDiv.classList.add("green-button-glow");
			playGreenAudio();
			setTimeout(() => {
				greenDiv.classList.remove("green-button-glow");
			}, 800);
		}
	} else if (simonArr[i] === "Y") {
		if (yellowDiv.classList.contains("yellow-button")) {
			yellowDiv.classList.add("yellow-button-glow");
			playYellowAudio();
			setTimeout(() => {
				yellowDiv.classList.remove("yellow-button-glow");
			}, 800);
		}
	} else if (simonArr[i] === "B") {
		if (blueDiv.classList.contains("blue-button")) {
			blueDiv.classList.add("blue-button-glow");
			playBlueAudio();
			setTimeout(() => {
				blueDiv.classList.remove("blue-button-glow");
			}, 800);
		}
	}
}

/*----- Simon Function that iterates through his array to play necessary colors in the playSimonColors -----*/
function getSimonMove() {
	playerH3.innerText = "SIMON SAYS...";
	for (let i = 0; i <= round; i++) {
		setTimeout(() => {
			playSimonColors(i);
			if (i === round) {
				playerTurn = true;
				setTimeout(() => {
					playerH3.innerText = "PLAYER SAYS...";
				}, 1000);
			}
		}, 1000 * i);
	}
}

/*----- Simon Function that sets randomized numbers to letter values then pushes them to Simon's Array -----*/
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

/*----- Function that randomly generates a number given a min and max value  -----*/
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/*----- Event Listeners -----*/
gameBoard.addEventListener("click", function (event) {
	getPlayerMove(event);
});
resetBtn.addEventListener("click", init);
playBtn.addEventListener("click", function () {
	playBtn.style.display = "none";
	for (let i = 0; i < 50; i++) {
		setSimonColor(getRandomNumber(1, 4));
	}
	setTimeout(() => {
		gamePlay();
	}, 500);
});

/*----- High Score Value -----*/
highScoreEl.innerText = `High Score: ${highScore}`;

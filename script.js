//-------- Audio Code ------------//
const redAudio = new Audio("./sounds/High-E 1.m4a");
// redAudio.src = ;
const greenAudio = new Audio("./sounds/C-Sharp.m4a");
// greenAudio.src = ;
const yellowAudio = new Audio("./sounds/Short-A.m4a");
// yellowAudio.src = ;
const blueAudio = new Audio("./sounds/Short-E.m4a");
// blueAudio.src = ;

// function playRedAudio() {
// 	redAudio.play();
// }
// function playGreenAudio() {
// 	greenAudio.play();
// }
// function playYellowAudio() {
// 	yellowAudio.play();
// }
// function playBlueAudio() {
// 	blueAudio.play();
// }
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
let round = 0;
let turn = 0;
let highScore;

// for (let i = 0; i < 50; i++) {
// 	setSimonColor(getRandomNumber(1, 4));
// }
// console.log(simonArr);
// getSimonMove(event, simonArr, round);
/*----- cached element references -----*/
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

/*----- functions -----*/
function init() {
	highScore = window.localStorage.getItem("score");
	highScoreEl.innerText = `High Score: ${highScore}`;
	simonArr = [];
	playerArr = [];
	round = 0;
	roundNum.innerText = `Round: ${round}`;
	playerH3.innerText = "SIMON SAYS...";
	playBtn.style.display = "inline";
}

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

function getPlayerMove(event) {
	if (event.target.id === "red-button") {
		// playRedAudio();
		redDiv.classList.add("red-button-glow");
		setTimeout(() => {
			redDiv.classList.remove("red-button-glow");
		}, 500);
		playerArr.push("R");
	} else if (event.target.id === "green-button") {
		// playGreenAudio();
		greenDiv.classList.add("green-button-glow");
		setTimeout(() => {
			greenDiv.classList.remove("green-button-glow");
		}, 500);
		playerArr.push("G");
	} else if (event.target.id === "yellow-button") {
		// playYellowAudio();
		yellowDiv.classList.add("yellow-button-glow");
		setTimeout(() => {
			yellowDiv.classList.remove("yellow-button-glow");
		}, 500);
		playerArr.push("Y");
	} else if (event.target.id === "blue-button") {
		// playBlueAudio();
		blueDiv.classList.add("blue-button-glow");
		setTimeout(() => {
			blueDiv.classList.remove("blue-button-glow");
		}, 500);
		playerArr.push("B");
	}

	if (playerArr[turn] === simonArr[turn]) {
		if (turn === round) {
			round += 1;
			playerArr = [];
			gamePlay();
		} else {
			turn += 1;
		}
	} else {
		alert("You lose!");
		if (window.localStorage.getItem("score") !== null) {
			let storage = window.localStorage.getItem(score);
			if (round > storage) {
				window.localStorage.setItem("score", round);
			}
		} else {
			window.localStorage.setItem("score", round);
		}
	}
}

function playSimonColors(i) {
	if (simonArr[i] === "R") {
		if (redDiv.classList.contains("red-button")) {
			redDiv.classList.add("red-button-glow");
			// playRedAudio();
			setTimeout(() => {
				redDiv.classList.remove("red-button-glow");
			}, 800);
		}
	} else if (simonArr[i] === "G") {
		if (greenDiv.classList.contains("green-button")) {
			greenDiv.classList.add("green-button-glow");
			// playGreenAudio();
			setTimeout(() => {
				greenDiv.classList.remove("green-button-glow");
			}, 800);
		}
	} else if (simonArr[i] === "Y") {
		if (yellowDiv.classList.contains("yellow-button")) {
			yellowDiv.classList.add("yellow-button-glow");
			// playYellowAudio();
			setTimeout(() => {
				yellowDiv.classList.remove("yellow-button-glow");
			}, 800);
		}
	} else if (simonArr[i] === "B") {
		if (blueDiv.classList.contains("blue-button")) {
			blueDiv.classList.add("blue-button-glow");
			// playBlueAudio();
			setTimeout(() => {
				blueDiv.classList.remove("blue-button-glow");
			}, 800);
		}
	}
	gameBoard.style.pointerEvents = "auto";
}

function getSimonMove() {
	gameBoard.style.pointerEvents = "none";
	playerH3.innerText = "SIMON SAYS...";
	for (let i = 0; i <= round; i++) {
		setTimeout(() => {
			playSimonColors(i);
		}, 1000 * i);
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

/*----- event listeners -----*/
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

// function startGame() {
// 	// playBtn.style.display = "none";
// 	for (let i = 0; i < 50; i++) {
// 		setSimonColor(getRandomNumber(1, 4));
// 	}
// 	setTimeout(() => {
// 		gamePlay();
// 	}, 500);
// }
// startGame();

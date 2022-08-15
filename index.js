let card_deck = document.querySelector('#card-deck')
let game_sum = document.querySelector('#game-sum')
let dealer_sum = 0;
let display_message = document.querySelector('#display-message')
let card = 0;
let message = '';
let gameOver = false;
document.getElementById('restart-btn').style.display = 'none';
let cards = [
	"Ah", "Ad", "Ac", "As",
	"2h", "2d", "2c", "2s",
	"3h", "3d", "3c", "3s",
	"4h", "4d", "4c", "4s",
	"5h", "5d", "5c", "5s",
	"6h", "6d", "6c", "6s",
	"7h", "7d", "7c", "7s",
	"8h", "8d", "8c", "8s",
	"9h", "9d", "9c", "9s",
	"10h", "10d", "10c", "10s",
	"Jh", "Jd", "Jc", "Js",
	"Qh", "Qd", "Qc", "Qs",
	"Kh", "Kd", "Kc", "Ks"
];
let dealer_cards = [
	"Ah", "Ad", "Ac", "As",
	"2h", "2d", "2c", "2s",
	"3h", "3d", "3c", "3s",
	"4h", "4d", "4c", "4s",
	"5h", "5d", "5c", "5s",
	"6h", "6d", "6c", "6s",
	"7h", "7d", "7c", "7s",
	"8h", "8d", "8c", "8s",
	"9h", "9d", "9c", "9s",
	"10h", "10d", "10c", "10s",
	"Jh", "Jd", "Jc", "Js",
	"Qh", "Qd", "Qc", "Qs",
	"Kh", "Kd", "Kc", "Ks"
];

let card_values = {
	"Ah": 1, "Ad": 1, "Ac": 1, "As": 1,
	"2h": 2, "2d": 2, "2c": 2, "2s": 2,
	"3h": 3, "3d": 3, "3c": 3, "3s": 3,
	"4h": 4, "4d": 4, "4c": 4, "4s": 4,
	"5h": 5, "5d": 5, "5c": 5, "5s": 5,
	"6h": 6, "6d": 6, "6c": 6, "6s": 6,
	"7h": 7, "7d": 7, "7c": 7, "7s": 7,
	"8h": 8, "8d": 8, "8c": 8, "8s": 8,
	"9h": 9, "9d": 9, "9c": 9, "9s": 9,
	"10h": 10, "10d": 10, "10c": 10, "10s": 10,
	"Jh": 10, "Jd": 10, "Jc": 10, "Js": 10,
	"Qh": 10, "Qd": 10, "Qc": 10, "Qs": 10,
	"Kh": 10, "Kd": 10, "Kc": 10, "Ks": 10
}

function startGame() {
	game(0);
}
function game(num) {
	if (parseInt(game_sum.innerHTML) + parseInt(num) < 21) {
		message = "Do you want to draw a new card?"
	}
	else if (parseInt(game_sum.innerHTML) + parseInt(num) > 21) {
		if (game_sum.innerHTML >= dealer_sum) {
			message = "You Win!!! You've got Blackjack";
		}
		else {
			message = "You Lose!!! You're out of the game!"
		}
		gameOver = true;
	}
	else {
		message = "You Win!!! You've got Blackjack";
	}

	display_message.innerHTML = message;
	if (gameOver) {
		document.getElementById('draw-btn').style.display = 'none';
		document.getElementById('game-btn').style.display = 'none';
		document.getElementById('fold-btn').style.display = 'none';
		document.getElementById('restart-btn').style.display = 'block';
		return;
	}

}

function draw_card() {
	let selection = cards[Math.floor(Math.random() * cards.length)];
	cards.splice(cards.indexOf(selection), 1);
	card_deck.innerHTML += ' ' + selection;
	get_dealers_card();
	if (parseInt(game_sum.innerHTML) + parseInt(card_values[selection]) > 21) {
		game(card_values[selection]);
		card_deck.innerHTML += ' Would have - ' + selection;
		return;
	}
	game_sum.innerHTML = parseInt(game_sum.innerHTML) + parseInt(card_values[selection]);
	game(card_values[selection]);
}

function fold() {
	get_dealers_card();
	document.getElementById('draw-btn').style.display = 'none';
	document.getElementById('game-btn').style.display = 'none';
	document.getElementById('fold-btn').style.display = 'none';
	document.getElementById('restart-btn').style.display = 'block';
	if (parseInt(game_sum.innerHTML) >= parseInt(dealer_sum)) {
		message = "You Win!!! You've got Blackjack";
	}
	else {
		message = "You lose!!! You're out of the game!";
	}

	display_message.innerHTML = message;
}

function get_dealers_card() {
	if (dealer_sum >= 21) {
		return;
	}
	let selection = dealer_cards[Math.floor(Math.random() * dealer_cards.length)];
	if (dealer_sum + card_values[selection] > 21) {
		document.querySelector('#dealer-deck').innerHTML += ' Would have - ' + selection;
		return;
	}
	dealer_cards.splice(dealer_cards.indexOf(selection), 1);
	dealer_sum += card_values[selection];
	document.querySelector('#dealer-deck').innerHTML += ' ' + selection;
	document.querySelector('#dealer-sum').innerHTML = parseInt(dealer_sum);
}

function restartGame() {
	dealer_sum = 0;
	display_message = document.querySelector('#display-message')
	card = 0;
	message = '';
	gameOver = false;
	document.getElementById('restart-btn').style.display = 'none';
	cards = [
		"Ah", "Ad", "Ac", "As",
		"2h", "2d", "2c", "2s",
		"3h", "3d", "3c", "3s",
		"4h", "4d", "4c", "4s",
		"5h", "5d", "5c", "5s",
		"6h", "6d", "6c", "6s",
		"7h", "7d", "7c", "7s",
		"8h", "8d", "8c", "8s",
		"9h", "9d", "9c", "9s",
		"10h", "10d", "10c", "10s",
		"Jh", "Jd", "Jc", "Js",
		"Qh", "Qd", "Qc", "Qs",
		"Kh", "Kd", "Kc", "Ks"
	];
	dealer_cards = [
		"Ah", "Ad", "Ac", "As",
		"2h", "2d", "2c", "2s",
		"3h", "3d", "3c", "3s",
		"4h", "4d", "4c", "4s",
		"5h", "5d", "5c", "5s",
		"6h", "6d", "6c", "6s",
		"7h", "7d", "7c", "7s",
		"8h", "8d", "8c", "8s",
		"9h", "9d", "9c", "9s",
		"10h", "10d", "10c", "10s",
		"Jh", "Jd", "Jc", "Js",
		"Qh", "Qd", "Qc", "Qs",
		"Kh", "Kd", "Kc", "Ks"
	];

	document.getElementById('draw-btn').style.display = 'block';
	document.getElementById('game-btn').style.display = 'block';
	document.getElementById('fold-btn').style.display = 'block';
	document.getElementById('restart-btn').style.display = 'none';
	document.querySelector('#card-deck').innerHTML = '';
	document.querySelector('#game-sum').innerHTML = 0;
	document.querySelector('#dealer-deck').innerHTML = '';
	document.querySelector('#dealer-sum').innerHTML = '';
	dealer_sum = 0;
}
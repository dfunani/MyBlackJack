let card_deck = document.querySelector('#card-deck')
let game_sum = document.querySelector('#game-sum')
let display_message = document.querySelector('#display-message')
let card = 0;
let message = '';
let gameOver = false;
document.getElementById('restart-btn').style.display = 'none';
document.getElementById('draw-btn').style.display = 'none';
document.getElementById('fold-btn').style.display = 'none';

let dealer_sum = 0;
let player_chips = 150;
let wager = 0;

document.getElementById('chips').innerHTML = "Your Chips: $" + player_chips;

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

let card_values = {
	"Ah": 11, "Ad": 11, "Ac": 11, "As": 11,
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
	document.getElementById('wager').style.display = 'inline-block';
	document.getElementById('bet-btn').style.display = 'inline-block';
	document.getElementById('bet').style.display = 'none';
	document.getElementById('draw-btn').style.display = 'inline-block';
	document.getElementById('fold-btn').style.display = 'inline-block';
	document.getElementById('game-btn').style.display = 'none';
	document.getElementById('restart-btn').style.display = 'none';
	document.getElementById('chips').innerHTML = "Your Chips: $" + player_chips;
	game_sum.innerHTML = 0;
	card_deck.innerHTML = '';
	gameOver = false;
	bet();
	game();
}
function game() {
	if (parseInt(game_sum.innerHTML) < 21) {
		message = "Do you want to draw a new card?"
	}
	else if (parseInt(game_sum.innerHTML) > 21) {
		message = "You Lose!!! You're out of the game!"
		gameOver = true;
		player_chips = parseInt(player_chips) - parseInt(wager);
	}
	else {
		message = "You Win!!! You've got Blackjack";
		gameOver = true;
		player_chips = parseInt(player_chips) + parseInt(wager);
	}

	display_message.innerHTML = message;
	if (gameOver) {
		document.getElementById('draw-btn').style.display = 'none';
		document.getElementById('game-btn').style.display = 'none';
		document.getElementById('fold-btn').style.display = 'none';
		document.getElementById('restart-btn').style.display = 'inline-block';
		document.getElementById('wager').style.display = 'none';
		document.getElementById('bet-btn').style.display = 'none';
		document.getElementById('bet').style.display = 'none';
		return;
	}

}

function draw_card() {
	let selection = cards[Math.floor(Math.random() * cards.length)];
	cards.splice(cards.indexOf(selection), 1);
	card_deck.innerHTML += ' ' + selection;
	game_sum.innerHTML = parseInt(game_sum.innerHTML) + parseInt(card_values[selection]);
	game();
}

function fold() {
	document.getElementById('draw-btn').style.display = 'none';
	document.getElementById('game-btn').style.display = 'none';
	document.getElementById('fold-btn').style.display = 'none';
	document.getElementById('restart-btn').style.display = 'inline-block';

	dealers_call();

	if (parseInt(game_sum.innerHTML) >= parseInt(dealer_sum)) {
		message = "You Win!!! You've got Blackjack";
		player_chips = parseInt(player_chips) + parseInt(wager);
	}
	else {
		message = "You lose!!! You're out of the game!";
		player_chips = parseInt(player_chips) - parseInt(wager);
	}
	document.getElementById('chips').innerHTML = "Your Chips: $" + player_chips;
	document.getElementById('dealer').innerHTML = "Dealer's Sum: " + dealer_sum;
	display_message.innerHTML = message;
}

function bet() {
	let num = document.getElementById('wager').value
	wager = num;
	document.getElementById('wager').style.display = 'none';
	document.getElementById('bet-btn').style.display = 'none';
	document.getElementById('bet').style.display = 'inline-block';
	document.getElementById('bet').innerHTML = 'Your Bet: $' + num;
}

function dealers_call() {
	dealer_sum = Math.floor(Math.random() * (21 - 10 + 1)) + 10;
}

function restartGame() {
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

	document.getElementById('dealer').innerHTML = '';
	startGame()
}
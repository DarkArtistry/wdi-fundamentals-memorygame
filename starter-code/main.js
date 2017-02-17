console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
//var cardCount = document.getElementsByClassName('card');

/*if (cardOne === cardThree) {
	alert('You found a match!');
}

else {
	alert('Sorry, try again.')
} */

var gb = document.getElementById('game-board');

var isMatch = function () {
	if (  cardsInPlay[0] === cardsInPlay[1]) {
	alert('You found a match!');
}

else {
	alert('Sorry, try again.')
};
document.getElementsByClassName('card')[0].innerHTML = "";
document.getElementsByClassName('card')[1].innerHTML = "";
document.getElementsByClassName('card')[2].innerHTML = "";
document.getElementsByClassName('card')[3].innerHTML = "";
};

var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	};
};

var kingOrQueen = function () {

	if (this.getAttribute('data-card') === 'king')  {
		this.innerHTML = '<img src="kingcard.png" alt="King" />'
		;}
		else {
		this.innerHTML = '<img src="queencard.png" alt="Queen" />';
		};	
};

var createCards = function () {

	for (var i = 0; i < cards.length; i++) {

			var children = document.createElement('div');

			children.className = 'card';

			gb.appendChild(children);

			document.getElementsByClassName('card')[i].setAttribute('data-card', cards[i]);
			document.getElementsByClassName('card')[i].addEventListener('click', kingOrQueen);
			document.getElementsByClassName('card')[i].addEventListener('click', isTwoCards);			
	};
	};
	
createCards();

	/*for (var i = 0; i < cards.length; i++) {
		document.getElementsByClassName('card')[i].setAttribute('data-card', cards[i]);
		document.getElementsByClassName('card')[i].addEventListener('click', isTwoCards);
		if (document.getElementsByClassName('card')[i].getAttribute('data-card') === 'king') {
			cards[i].innerHTML = '<img src="kingcard.png" alt="King" />'
		}
		else {
			cards[i].innerHTML = '<img src="queencard.png" alt="Queen" />'
		};
	};*/	



/*var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		cards[i].setAttribute('data-card', cards[i]);
		cards[i].addEventListener('click', isTwoCards);
		if (cards[i].getAttribute('data-card') === king) {
			cards[i].innerHTML = '<img src="kingcard.png" alt="King" />'
		}
		else {
			card[i].innerHTML = '<img src="queencard.png" alt="Queen" />'
		};
	};
};*/

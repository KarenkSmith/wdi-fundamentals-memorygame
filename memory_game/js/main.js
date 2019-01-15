



var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
}
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",                 
}
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
}
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];
var cardsinPlay = [];


var flipCard = function(cardId){
	cardsinPlay.push(cards[cardId].rank);
	console.log("user flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	
if (cardsinPlay.length === 2){
		checkFormatch();
	}
};

var checkForMatch = function() {
	if (cardsinPlay[0] === cardsinPlay[1]){
		alert("you found a match!");
	} else {
		alert("sorry try again");
	}
};


flipCard(0);
flipCard(2);
	
	
	





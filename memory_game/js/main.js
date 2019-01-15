



var cards = ["queen", "queen", "king", "king"];
var cardsinPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

cardsinPlay.push(cardOne);
cardsinPlay.push(cardTwo);

if (cardsinPlay.length === 2){
	if (cardsinPlay[0] === cardsinPlay[1]){
		alert("you found a match!");
	} else {
		alert("sorry try again");
	}
}

console.log("user flipped " + cardsinPlay);


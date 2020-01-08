  

 let cards = ["queen", "queen", "king","king"]; 

 let cardsInPlay = []
 

 function checkForMatch() {
 if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardID) {
	console.log("User flipped " + cards[cardID])
	cardsInPlay.push(cards[cardID])

	if (cardsInPlay.length == 2) {
 	checkForMatch()
 }
 
}
// next step is to have each image have an ID?? thing where if you click it, and see if the ID numbers
flipCard(2) 
flipCard(3)
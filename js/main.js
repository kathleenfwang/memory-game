  
 
 let cards =  [{
	rank: "queen",
	suit: "hearts",
	cardImg: "images/queen-of-hearts.png"  },
	{
	rank: "queen",
	suit: "diamonds",
	cardImg: "images/queen-of-diamonds.png"  },
	{
	rank: "king",
	suit: "hearts",
	cardImg: "images/king-of-hearts.png"  },
	{
	rank: "king",
	suit: "diamonds",
	cardImg: "images/king-of-diamonds.png"  }
	]

 let cardsInPlay = []
 

 function checkForMatch() {
 if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
  
} else {
  console.log("Sorry, try again.");
}
cardsInPlay = [] 
 
}

function flipCard() {
	console.log("User flipped " + cards[this.id].rank)
	cardsInPlay.push(cards[this.id].rank)
	this.src = cards[this.id].cardImg

	if (cardsInPlay.length == 2) {
 	checkForMatch()



 }
 } 

// need to get length of list elements next time.. 
for (let i =0;i<4;i++) {
	document.getElementsByTagName('img')[i].addEventListener('click',flipCard)
	document.getElementsByTagName('img')[i].setAttribute('id',i)
}
 


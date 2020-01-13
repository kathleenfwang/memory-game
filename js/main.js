  
 
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
 let score = 0 
 

 function checkForMatch() {
 if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
  score+=2 
  cardsInPlay = [] 
  
  document.getElementById('score').textContent = score
  
} else {
  alert("Sorry, try again.");
  cardsInPlay.pop()
  score-- 
  document.getElementById('score').textContent = score
}
 
}

function flipCard() {
 
	let id = this.getAttribute("data-id")
	this.setAttribute('src',cards[id].cardImg);

	console.log("User flipped " + cards[id].rank)
	cardsInPlay.push(cards[id].rank)

	if (cardsInPlay.length == 2) {
 	checkForMatch()



 }
 } 

 function createBoard() {
 	for (let i=0;i<cards.length;i++) {
 		let cardElement = document.createElement('img'); 
 		cardElement.setAttribute('src','images/back.png');
 		cardElement.setAttribute('data-id',i);
 		cardElement.addEventListener('click',flipCard)
 		document.getElementById('gameboard').appendChild(cardElement)
 	}
 }
  
 createBoard()



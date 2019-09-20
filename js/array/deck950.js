/**
 * @param {number[]} deck
 * @return {number[]}
 */
 var deckRevealedIncreasing = function(deck) {
 	if(deck.length == 1){
 		return deck;
 	}
 	let outdeck = [];
 	deck.sort((a,b)=>{
 		return a-b;
 	});
 	outdeck.push(deck.pop());
 	outdeck.unshift(deck.pop());	
 	while(deck.length > 0){
 		outdeck.unshift(outdeck.pop());	
 		outdeck.unshift(deck.pop());	
 	}
 	return outdeck;
 };
 function deckRevealedIncreasing2(deck){
 	if(deck.length === 1){
 		return deck;
 	}
 	deck.sort((a,b)=>{
 		return b-a;
 	});
 	let j = deck.length-1;
 	deck.push(deck.shift());
 	j--;
 	while(j>0){
 		deck.splice(j,0,deck.shift());
 		deck.splice(j,0,deck.pop()); 
 		j--;		
 	}
 	return deck;
 }

let testcase = deckRevealedIncreasing2([17,13,11,2,3,5,7]);
//132
console.log(testcase);

export default deckRevealedIncreasing;
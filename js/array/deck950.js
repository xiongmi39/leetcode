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

let testcase = deckRevealedIncreasing([17,13,11,2,3,5]);
console.log(testcase);

export default deckRevealedIncreasing;

var reverseWords = function(str) {
		return str.split(" ").map((word)=>{
			return word.split("").reverse().join("");
		}).join(" ");
};


let words = "I'm a little bunny";
let reversedword = reverseWords(words);
console.log(reversedword);

export default reverseWords;

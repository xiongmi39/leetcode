export default class Utils{
	reverseWords(str){
		return str.split(" ").map((word)=>{
			return word.split("").reverse().join("");
		}).join(" ");
	}
}

function getPhoneNumComb(str,arr=[]){
	if(str.length == 0){
		return arr;
	}
	let fstArr = phone[str.substr(0,1)];//2
	let outArr = [];
	if(arr.length == 0){
		arr = phone[str.substr(0,1)];
		str = str.substr(1);//3
		fstArr = phone[str.substr(0,1)];//3
	}
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < fstArr.length; j++) {
			outArr.push(arr[i]+fstArr[j]);
		}
	}

	return getPhoneNumComb(str.substr(1),outArr);
}

let phone = {'2':['a','b','c'],
'3':['d','e','f'],'4':['g','h','i'],
'5':['j','k','l'],
'6':['m','n','o'],
'7':['p','q','r','s'],
'8':['t','u','v'],
'9':['w','x','y','z']
};

let combs = getPhoneNumComb('234');
console.log(combs);

export default getPhoneNumComb;

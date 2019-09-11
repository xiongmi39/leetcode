export default class Utils{
	constructor(){
		this.grapha = {
			'1':{
				'4':{
					'6':{},
					'7':{}
				},
				'5':{
					'8':{},
					'9':{}
				}
			},
			'2':{
				'10':{}
			},
			'3':{

			}
		};
		this.compare = {'COMPARE_MORETHAN':1,
		'COMPARE_EQUAL':0,
		'COMPARE_LESSTHAN':2
	};

	}
	// 1:val1>val2,0:val1==val2,2:val1<val2
	defaultConpareFn(val1,val2){
		if(val1-val2 ==0){
			return 0;
		}else if(val1-val2>0){
			return 1;
		}else{
			return 2;
		}

	}

}
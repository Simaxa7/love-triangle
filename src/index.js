/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {


let answer = 0;
for (var i = 0; i < preferences.length; i++) {

//for example 5  1  3  3  2  
//			pos 	index 	val	
// 			1		0		5
//			5		4		2	
//			2		1		1



	let index1 = i;//0
	let pos1 = i + 1; //0+1=1
	let value1 = preferences[index1];//5

	let index2 = value1-1;//5-1=4
	let pos2 = value1; //index and value
	let value2 = preferences[index2];

	let index3 = value2 - 1;
	let pos3 = value2; //index and value
	let value3 = preferences[index3];
	
	if (index1!==index2 && index2!==index3 && pos1 == value3) {
		answer = answer + 1
	}
	

	// console.log(pos1,index1,value1);
	// console.log(pos2,index2,value2);	
	// console.log(pos3,index3,value3);
	// console.log();	
	// console.log("answer", answer);
	// console.log();		

}

	console.log();	
	console.log("answer=", answer/3);
	// console.log();
	return answer/3
};


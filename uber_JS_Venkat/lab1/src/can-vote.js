//Your code goes here
let canVote = function(name, age) {
	if (age >= 18 && 
			(typeof age === "number")) {
		return true;
	}
	else {
		return false;
	}
}

let getVoters = function(people) {
	// //var arrayLength = myStringArray.length;
	// for (var i = 0; i < voterArray.length; i++) {
	// 	console.log(voterArray[i]);
	// }
	//const voters = [];
	// for (var i = 0; i < voterArray.length; i++){

	// }
	return people.filter(person => canVote(person[0], person[1]))
		.map(voter => voter[0]);
}

module.exports = {
  canVote: canVote,
  getVoters: getVoters
};
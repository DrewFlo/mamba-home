const longestName = (...names) => names.reduce((long, e) => long <e ? e :long, names[0]) ;//WTF?
//const namesThatStartWith = (...names) => names.filter ;
const namesThatStartWith = (letter, ...names) => names.filter(name => name.startsWith(letter)) ;
module.exports = {
	longestName, 
	namesThatStartWith,
};
//1.Array.from
// console.log(Array.from('hello'));
// console.log(Array.from('123'));

// let nameSet = new Set(['a', 'b']);
// let nameSetArray = Array.from(nameSet);
// console.log(nameSetArray);

// var typesOf = function() {
// 	return Array.from(arguments, value => typeof value);
// }
// console.log(typesOf(null, [], NaN, undefined));

// var countSymbols = function(string) {
// 	return Array.from(string).length;
// }
// console.log(countSymbols('123'));

//2.Array.of
Array.of(3, 11, 2);
Array.of(3).length;

function ArrayOf() {
	return [].slice.call(arguments);
}
var by = function(name) {
	return function(o, p) {
		var a, b;
		if (typeof o === 'object' && typeof p === 'object' && o && p) {
			a = o[name];
			b = p[name];
			if (a === b) {
				return 0;
			}
			if (typeof a === typeof b) {
				return a < b ? -1 : 1;
			}
			return typeof a < typeof b ? -1 : 1;
		} else {
			throw {
				name: 'Error',
				message: 'Expected an object when sorting by ' + name
			};
		}
	};
};

var s = [{
	first: 'Joe',
	last: 'Besser'
}, {
	first: 'Moe',
	last: 'Besser'
}, {
	first: 'Joe',
	last: 'Besser'
}, {
	first: 'Shemp',
	last: 'Besser'
}, {
	first: 'Larry',
	last: 'Besser'
}, {
	first: 'Curly',
	last: 'Besser'
}, {
	first: 'Trcy',
	last: 'Besser'
}];

s.sort(by('first'));
console.log(s);
/**
 * 方法扩展
 * @for Function 
 * @param  {string} name 方法名
 * @param  {Function} func 方法体
 * @return {Function} this 方法本身
 */
Function.prototype.method = function(name, func) {
	if (!this.prototype[name]) {
		this.prototype[name] = func;
	}
	return this;
};
/**
 * 方法扩展, 传递参数创建一个新的函数
 * @for Function
 * @return {Function} 新方法
 */
Function.method('curry', function() {
	var slice = Array.prototype.slice,
		args = slice.apply(arguments),
		that = this;
	return function() {
		return that.apply(null, args.concat(slice.apply(arguments)));
	}
});

/**
 * 集成方法
 * @for Function
 * @param  {Function} Parent 父类
 * @return {Functions}  this;
 */
Function.method('inherits', function(Parent) {
	this.prototype = new Parent();
	return this;
});

/**
 *  处理父类
 * @param  {[string]} name) {	var        that [description]
 * @return {[Function]}       [description]
 */
Object.method('superior', function(name) {
	var that = this,
		method = that[name];
	return function() {
		return method.apply(that, arguments);
	};
});

/**
 * 数字取整
 * @for Number
 * @return {Number} 整数
 */
Number.method('integer', function() {
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});

/**
 * 去掉字符串末尾的空格
 * @for String
 * @return {String} 
 */
String.method('trim', function() {
	return this.replace(/^\s+|\s+$/g, '');
});

/**
 * 寻找字符串中HTML字符实体并替换
 * @param  {Object} 字符实体表
 * @
 return {
 	string
 }[description]
 */
String.method('deentityify', function() {
	var entity = {
		quot: '"',
		lt: '<',
		gt: '>'
	};
	return function() {
		return this.replace(/&([^&;]+);/g,
			function(a, b) {
				var r = entity[b];
				return typeof r === 'string' ? r : a;
			}
		);
	};
}());

/**
 * 快速生成一个数组
 * @for Array
 * @param  {[number]} dimension [维度]
 * @param  {[number,string]} initial   [值]
 * @return {[Array]}           [返回生成的数组]
 */
Array.dim = function(dimension, initial) {
	var a = [],
		i;
	for (i = 0; i < dimension; i++) {
		a[i] = initial;
	}
	return a;
};

/**
 * 创建多维数组
 * @param  {[int]} m       [一维]
 * @param  {[int]} n       [二维]
 * @param  {[number,string]} initial [值]
 * @return {[Array]}         [返回数组]
 */
Array.matrix = function(m, n, initial) {
	var a, i, j, mat = [];
	for (i = 0; i < m; i++) {
		a = [];
		for (j = 0; j < n; j++) {
			a[j] = initial;
		}
		mat[i] = a;
	}
	return mat;
};

/**
 * 数组push实现
 * @param  {[all type]} ) [添加的元素]
 * @return {[int]}   [数组长度]
 */
Array.method('push', function() {
	this.splice.apply(
		this, [this.length, 0].concat(Array.prototype.slice.apply(arguments)));
	return this.length;
});

/**
 * 判断是否为数组
 * @param  {[object]}  value 
 * @return {Boolean}  
 */
function is_array(value) {
	return value &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		typeof value.splice === 'function' &&
		!(value.prototypeIsEnumberable('length'));
}
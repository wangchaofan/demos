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
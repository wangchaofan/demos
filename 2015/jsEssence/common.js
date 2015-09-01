/**
 * 方法扩展
 * @for Function 
 * @param  {string} name 方法名
 * @param  {Function} func 方法体
 * @return {Function} this 方法本身
 */
Function.prototype.method = function (name, func) {
	if(!this.prototype[name]) {
		this.prototype[name] = func;
	}
	return this;
};

/**
 * 数字取整
 * @for Number
 * @return {Number} 整数
 */
Number.method('integer', function () {
	return Math[this < 0 ? 'ceil' : 'floor'] (this);
});

/**
 * 去掉字符串末尾的空格
 * @for String
 * @return {String} 
 */
String.method('trim', function () {
	return this.replace(/^\s+|\s+$/g, '');
});


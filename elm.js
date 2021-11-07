(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Main$BarStackedMsg = function (a) {
	return {$: 'BarStackedMsg', a: a};
};
var $author$project$Main$LineAnimatedMsg = function (a) {
	return {$: 'LineAnimatedMsg', a: a};
};
var $author$project$Main$LineMsg = function (a) {
	return {$: 'LineMsg', a: a};
};
var $author$project$Main$LineStackedMsg = function (a) {
	return {$: 'LineStackedMsg', a: a};
};
var $author$project$BarStacked$OnData = function (a) {
	return {$: 'OnData', a: a};
};
var $author$project$Line$OnData = function (a) {
	return {$: 'OnData', a: a};
};
var $author$project$LineAnimated$OnData = function (a) {
	return {$: 'OnData', a: a};
};
var $author$project$LineStacked$OnData = function (a) {
	return {$: 'OnData', a: a};
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $BrianHicks$elm_csv$Csv$Decode$FieldNamesFromFirstRow = {$: 'FieldNamesFromFirstRow'};
var $author$project$City$csv = 'year,urbanAgglomeration,populationMillions\n1950,New York,12\n1950,Tokyo,11\n1950,London,8\n1950,Kinki M.M.A. (Osaka),7\n1950,Paris,6\n1950,Moscow,5\n1950,Buenos Aires,5\n1950,Chicago,5\n1950,Calcutta,5\n1950,Shanghai,4\n1950,Los Angeles-Long Beach-Santa Ana,4\n1950,Mexico City,3\n1950,Berlin,3\n1950,Philadelphia,3\n1950,Mumbai (Bombay),3\n1950,Rio de Janeiro,3\n1950,Sankt Peterburg (Saint Petersburg),3\n1950,Detroit,3\n1950,Boston,3\n1950,Al-Qahirah (Cairo),2\n1950,Tianjin,2\n1950,Manchester,2\n1950,São Paulo,2\n1950,Chukyo M.M.A. (Nagoya),2\n1950,Birmingham (West Midlands),2\n1950,Shenyang,2\n1950,Roma (Rome),2\n1950,Milano (Milan),2\n1950,San Francisco-Oakland,2\n1950,Barcelona,2\n1955,Tokyo,14\n1955,New York,13\n1955,Kinki M.M.A. (Osaka),9\n1955,London,8\n1955,Paris,7\n1955,Buenos Aires,6\n1955,Moscow,6\n1955,Shanghai,6\n1955,Chicago,6\n1955,Calcutta,5\n1955,Los Angeles-Long Beach-Santa Ana,5\n1955,Mexico City,4\n1955,Mumbai (Bombay),4\n1955,Rio de Janeiro,4\n1955,Philadelphia,4\n1955,Berlin,3\n1955,Sankt Peterburg (Saint Petersburg),3\n1955,Detroit,3\n1955,Chukyo M.M.A. (Nagoya),3\n1955,São Paulo,3\n1955,Al-Qahirah (Cairo),3\n1955,Tianjin,3\n1955,Boston,3\n1955,Manchester,2\n1955,Shenyang,2\n1955,Beijing,2\n1955,Birmingham (West Midlands),2\n1955,Roma (Rome),2\n1955,Hong Kong,2\n1955,Barcelona,2\n1960,Tokyo,17\n1960,New York,14\n1960,Kinki M.M.A. (Osaka),11\n1960,London,8\n1960,Paris,7\n1960,Shanghai,7\n1960,Buenos Aires,7\n1960,Los Angeles-Long Beach-Santa Ana,7\n1960,Chicago,6\n1960,Moscow,6\n1960,Calcutta,6\n1960,Mexico City,5\n1960,Rio de Janeiro,4\n1960,Mumbai (Bombay),4\n1960,Chukyo M.M.A. (Nagoya),4\n1960,São Paulo,4\n1960,Philadelphia,4\n1960,Beijing,4\n1960,Al-Qahirah (Cairo),4\n1960,Detroit,4\n1960,Sankt Peterburg (Saint Petersburg),3\n1960,Berlin,3\n1960,Tianjin,3\n1960,Boston,3\n1960,Shenyang,3\n1960,Kitakyushu-Fukuoka M.M.A.,3\n1960,Jakarta,3\n1960,Hong Kong,3\n1960,Barcelona,2\n1960,Roma (Rome),2\n1965,Tokyo,20\n1965,New York,15\n1965,Kinki M.M.A. (Osaka),13\n1965,London,8\n1965,Paris,8\n1965,Buenos Aires,8\n1965,Los Angeles-Long Beach-Santa Ana,7\n1965,Mexico City,7\n1965,Chicago,7\n1965,Moscow,7\n1965,Calcutta,7\n1965,Shanghai,6\n1965,Chukyo M.M.A. (Nagoya),6\n1965,Rio de Janeiro,6\n1965,São Paulo,5\n1965,Mumbai (Bombay),5\n1965,Al-Qahirah (Cairo),5\n1965,Beijing,5\n1965,Philadelphia,4\n1965,Detroit,4\n1965,Kitakyushu-Fukuoka M.M.A.,4\n1965,Sankt Peterburg (Saint Petersburg),4\n1965,Seoul,3\n1965,Jakarta,3\n1965,Berlin,3\n1965,Tianjin,3\n1965,Hong Kong,3\n1965,Boston,3\n1965,Barcelona,3\n1965,Shenyang,3\n1970,Tokyo,23\n1970,New York,16\n1970,Kinki M.M.A. (Osaka),15\n1970,Mexico City,9\n1970,Buenos Aires,8\n1970,Los Angeles-Long Beach-Santa Ana,8\n1970,Paris,8\n1970,São Paulo,8\n1970,London,8\n1970,Calcutta,7\n1970,Moscow,7\n1970,Chicago,7\n1970,Rio de Janeiro,7\n1970,Chukyo M.M.A. (Nagoya),7\n1970,Mumbai (Bombay),6\n1970,Shanghai,6\n1970,Al-Qahirah (Cairo),6\n1970,Seoul,5\n1970,Beijing,4\n1970,Philadelphia,4\n1970,Kitakyushu-Fukuoka M.M.A.,4\n1970,Sankt Peterburg (Saint Petersburg),4\n1970,Detroit,4\n1970,Jakarta,4\n1970,Manila,4\n1970,Delhi,4\n1970,Madrid,4\n1970,Barcelona,3\n1970,Hong Kong,3\n1970,Tianjin,3\n1975,Tokyo,27\n1975,Kinki M.M.A. (Osaka),16\n1975,New York,16\n1975,Mexico City,11\n1975,São Paulo,10\n1975,Buenos Aires,9\n1975,Los Angeles-Long Beach-Santa Ana,9\n1975,Paris,9\n1975,Calcutta,8\n1975,Rio de Janeiro,8\n1975,Mumbai (Bombay),8\n1975,Moscow,8\n1975,Chukyo M.M.A. (Nagoya),7\n1975,Chicago,7\n1975,London,7\n1975,Seoul,7\n1975,Al-Qahirah (Cairo),6\n1975,Shanghai,6\n1975,Manila,5\n1975,Beijing,5\n1975,Jakarta,5\n1975,Kitakyushu-Fukuoka M.M.A.,5\n1975,Philadelphia,4\n1975,Delhi,4\n1975,Sankt Peterburg (Saint Petersburg),4\n1975,Tehran,4\n1975,Karachi,4\n1975,Madrid,4\n1975,Detroit,4\n1975,Krung Thep (Bangkok),4\n1980,Tokyo,29\n1980,Kinki M.M.A. (Osaka),17\n1980,New York,16\n1980,Mexico City,13\n1980,São Paulo,12\n1980,Buenos Aires,10\n1980,Los Angeles-Long Beach-Santa Ana,10\n1980,Mumbai (Bombay),9\n1980,Calcutta,9\n1980,Rio de Janeiro,9\n1980,Paris,9\n1980,Seoul,8\n1980,Moscow,8\n1980,Chukyo M.M.A. (Nagoya),8\n1980,Al-Qahirah (Cairo),7\n1980,Chicago,7\n1980,London,7\n1980,Jakarta,6\n1980,Manila,6\n1980,Shanghai,6\n1980,Delhi,6\n1980,Beijing,5\n1980,Tehran,5\n1980,Karachi,5\n1980,Kitakyushu-Fukuoka M.M.A.,5\n1980,Krung Thep (Bangkok),5\n1980,Sankt Peterburg (Saint Petersburg),5\n1980,Philadelphia,5\n1980,Hong Kong,4\n1980,Lima,4\n1985,Tokyo,30\n1985,Kinki M.M.A. (Osaka),18\n1985,New York,16\n1985,Mexico City,14\n1985,São Paulo,13\n1985,Mumbai (Bombay),11\n1985,Buenos Aires,11\n1985,Los Angeles-Long Beach-Santa Ana,10\n1985,Calcutta,10\n1985,Seoul,9\n1985,Rio de Janeiro,9\n1985,Paris,9\n1985,Moscow,9\n1985,Al-Qahirah (Cairo),8\n1985,Chukyo M.M.A. (Nagoya),8\n1985,Chicago,7\n1985,Delhi,7\n1985,Shanghai,7\n1985,Jakarta,7\n1985,Manila,7\n1985,London,7\n1985,Karachi,6\n1985,Beijing,6\n1985,Tehran,6\n1985,Istanbul,5\n1985,Krung Thep (Bangkok),5\n1985,Lima,5\n1985,Kitakyushu-Fukuoka M.M.A.,5\n1985,Hong Kong,5\n1985,Sankt Peterburg (Saint Petersburg),5\n1990,Tokyo,33\n1990,Kinki M.M.A. (Osaka),18\n1990,New York,16\n1990,Mexico City,16\n1990,São Paulo,15\n1990,Mumbai (Bombay),12\n1990,Buenos Aires,11\n1990,Calcutta,11\n1990,Los Angeles-Long Beach-Santa Ana,11\n1990,Seoul,11\n1990,Al-Qahirah (Cairo),10\n1990,Rio de Janeiro,10\n1990,Delhi,9\n1990,Paris,9\n1990,Moscow,9\n1990,Shanghai,9\n1990,Chukyo M.M.A. (Nagoya),8\n1990,Jakarta,8\n1990,Manila,8\n1990,Chicago,7\n1990,Karachi,7\n1990,London,7\n1990,Beijing,7\n1990,Dhaka,7\n1990,Istanbul,7\n1990,Tehran,6\n1990,Krung Thep (Bangkok),6\n1990,Lima,6\n1990,Hong Kong,6\n1990,Chennai (Madras),5\n1995,Tokyo,34\n1995,Kinki M.M.A. (Osaka),19\n1995,Mexico City,17\n1995,New York,17\n1995,São Paulo,16\n1995,Mumbai (Bombay),14\n1995,Delhi,12\n1995,Calcutta,12\n1995,Al-Qahirah (Cairo),12\n1995,Buenos Aires,12\n1995,Los Angeles-Long Beach-Santa Ana,11\n1995,Shanghai,11\n1995,Rio de Janeiro,10\n1995,Seoul,10\n1995,Paris,10\n1995,Manila,9\n1995,Moscow,9\n1995,Chukyo M.M.A. (Nagoya),9\n1995,Karachi,8\n1995,Beijing,8\n1995,Dhaka,8\n1995,Jakarta,8\n1995,Chicago,8\n1995,Istanbul,8\n1995,London,7\n1995,Tehran,7\n1995,Lima,7\n1995,Hong Kong,6\n1995,Krung Thep (Bangkok),6\n1995,Lagos,6\n2000,Tokyo,34\n2000,Kinki M.M.A. (Osaka),19\n2000,Mexico City,18\n2000,New York,18\n2000,São Paulo,17\n2000,Mumbai (Bombay),16\n2000,Delhi,16\n2000,Shanghai,14\n2000,Al-Qahirah (Cairo),14\n2000,Calcutta,13\n2000,Buenos Aires,13\n2000,Los Angeles-Long Beach-Santa Ana,12\n2000,Rio de Janeiro,11\n2000,Beijing,10\n2000,Dhaka,10\n2000,Moscow,10\n2000,Manila,10\n2000,Seoul,10\n2000,Karachi,10\n2000,Paris,10\n2000,Istanbul,9\n2000,Chukyo M.M.A. (Nagoya),9\n2000,Jakarta,8\n2000,Chicago,8\n2000,Chongqing,8\n2000,Guangzhou Guangdong,8\n2000,Lima,7\n2000,Lagos,7\n2000,London,7\n2000,Tehran,7\n2005,Tokyo,36\n2005,Mexico City,19\n2005,Kinki M.M.A. (Osaka),19\n2005,Delhi,19\n2005,São Paulo,18\n2005,New York,18\n2005,Mumbai (Bombay),17\n2005,Shanghai,17\n2005,Al-Qahirah (Cairo),15\n2005,Calcutta,14\n2005,Buenos Aires,13\n2005,Beijing,13\n2005,Dhaka,12\n2005,Los Angeles-Long Beach-Santa Ana,12\n2005,Rio de Janeiro,12\n2005,Karachi,11\n2005,Moscow,11\n2005,Manila,11\n2005,Istanbul,10\n2005,Paris,10\n2005,Seoul,10\n2005,Chongqing,9\n2005,Guangzhou Guangdong,9\n2005,Jakarta,9\n2005,Chukyo M.M.A. (Nagoya),9\n2005,Lagos,9\n2005,Chicago,8\n2005,Tianjin,8\n2005,Shenzhen,8\n2005,Lima,8\n2010,Tokyo,37\n2010,Delhi,22\n2010,Shanghai,20\n2010,Mexico City,20\n2010,São Paulo,20\n2010,Kinki M.M.A. (Osaka),19\n2010,New York,18\n2010,Mumbai (Bombay),18\n2010,Al-Qahirah (Cairo),17\n2010,Beijing,16\n2010,Dhaka,15\n2010,Buenos Aires,14\n2010,Calcutta,14\n2010,Karachi,13\n2010,Istanbul,13\n2010,Rio de Janeiro,12\n2010,Los Angeles-Long Beach-Santa Ana,12\n2010,Manila,12\n2010,Moscow,11\n2010,Chongqing,11\n2010,Paris,10\n2010,Lagos,10\n2010,Guangzhou Guangdong,10\n2010,Shenzhen,10\n2010,Tianjin,10\n2010,Seoul,10\n2010,Jakarta,10\n2010,Kinshasa,9\n2010,Chukyo M.M.A. (Nagoya),9\n2010,Lima,9\n2015,Tokyo,37\n2015,Delhi,26\n2015,Shanghai,23\n2015,Mexico City,21\n2015,São Paulo,21\n2015,Mumbai (Bombay),19\n2015,Kinki M.M.A. (Osaka),19\n2015,Al-Qahirah (Cairo),19\n2015,New York,19\n2015,Beijing,18\n2015,Dhaka,18\n2015,Buenos Aires,15\n2015,Calcutta,14\n2015,Karachi,14\n2015,Istanbul,14\n2015,Chongqing,13\n2015,Rio de Janeiro,13\n2015,Manila,13\n2015,Tianjin,13\n2015,Los Angeles-Long Beach-Santa Ana,12\n2015,Lagos,12\n2015,Moscow,12\n2015,Guangzhou Guangdong,12\n2015,Kinshasa,12\n2015,Shenzhen,11\n2015,Paris,11\n2015,Lahore,10\n2015,Jakarta,10\n2015,Bangalore,10\n2015,Seoul,10\n2020,Tokyo,37\n2020,Delhi,30\n2020,Shanghai,27\n2020,São Paulo,22\n2020,Mexico City,22\n2020,Dhaka,21\n2020,Al-Qahirah (Cairo),21\n2020,Beijing,20\n2020,Mumbai (Bombay),20\n2020,Kinki M.M.A. (Osaka),19\n2020,New York,19\n2020,Karachi,16\n2020,Chongqing,16\n2020,Istanbul,15\n2020,Buenos Aires,15\n2020,Calcutta,15\n2020,Lagos,14\n2020,Kinshasa,14\n2020,Manila,14\n2020,Tianjin,14\n2020,Rio de Janeiro,13\n2020,Guangzhou Guangdong,13\n2020,Lahore,13\n2020,Moscow,13\n2020,Los Angeles-Long Beach-Santa Ana,12\n2020,Shenzhen,12\n2020,Bangalore,12\n2020,Paris,11\n2020,Bogotá,11\n2020,Chennai (Madras),11\n2025,Tokyo,37\n2025,Delhi,35\n2025,Shanghai,30\n2025,Dhaka,25\n2025,Al-Qahirah (Cairo),23\n2025,São Paulo,23\n2025,Mexico City,23\n2025,Beijing,23\n2025,Mumbai (Bombay),22\n2025,New York,19\n2025,Kinki M.M.A. (Osaka),19\n2025,Chongqing,18\n2025,Karachi,18\n2025,Kinshasa,18\n2025,Lagos,17\n2025,Istanbul,16\n2025,Calcutta,16\n2025,Buenos Aires,16\n2025,Manila,15\n2025,Guangzhou Guangdong,15\n2025,Lahore,15\n2025,Tianjin,15\n2025,Bangalore,14\n2025,Rio de Janeiro,14\n2025,Shenzhen,14\n2025,Moscow,13\n2025,Los Angeles-Long Beach-Santa Ana,13\n2025,Chennai (Madras),12\n2025,Bogotá,12\n2025,Jakarta,12\n2030,Delhi,39\n2030,Tokyo,37\n2030,Shanghai,33\n2030,Dhaka,28\n2030,Al-Qahirah (Cairo),26\n2030,Mumbai (Bombay),25\n2030,Beijing,24\n2030,Mexico City,24\n2030,São Paulo,24\n2030,Kinshasa,22\n2030,Lagos,21\n2030,Karachi,20\n2030,New York,20\n2030,Chongqing,20\n2030,Kinki M.M.A. (Osaka),19\n2030,Calcutta,18\n2030,Istanbul,17\n2030,Lahore,17\n2030,Manila,17\n2030,Buenos Aires,16\n2030,Bangalore,16\n2030,Guangzhou Guangdong,16\n2030,Tianjin,16\n2030,Shenzhen,15\n2030,Rio de Janeiro,14\n2030,Chennai (Madras),14\n2030,Los Angeles-Long Beach-Santa Ana,13\n2030,Moscow,13\n2030,Hyderabad,13\n2030,Jakarta,13\n2035,Delhi,43\n2035,Tokyo,36\n2035,Shanghai,34\n2035,Dhaka,31\n2035,Al-Qahirah (Cairo),29\n2035,Mumbai (Bombay),27\n2035,Kinshasa,27\n2035,Mexico City,25\n2035,Beijing,25\n2035,São Paulo,24\n2035,Lagos,24\n2035,Karachi,23\n2035,New York,21\n2035,Chongqing,21\n2035,Calcutta,20\n2035,Lahore,19\n2035,Manila,19\n2035,Kinki M.M.A. (Osaka),18\n2035,Bangalore,18\n2035,Istanbul,18\n2035,Buenos Aires,17\n2035,Guangzhou Guangdong,17\n2035,Tianjin,16\n2035,Chennai (Madras),15\n2035,Shenzhen,15\n2035,Rio de Janeiro,15\n2035,Luanda,14\n2035,Hyderabad,14\n2035,Los Angeles-Long Beach-Santa Ana,14\n2035,Jakarta,14\n';
var $BrianHicks$elm_csv$Csv$Decode$ParsingError = function (a) {
	return {$: 'ParsingError', a: a};
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$DecodingErrors = function (a) {
	return {$: 'DecodingErrors', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$OnlyColumn_ = {$: 'OnlyColumn_'};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $BrianHicks$elm_csv$Csv$Decode$NoFieldNamesOnFirstRow = {$: 'NoFieldNamesOnFirstRow'};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$String$trim = _String_trim;
var $BrianHicks$elm_csv$Csv$Decode$getFieldNames = F2(
	function (headers, rows) {
		var fromList = function (names) {
			return A3(
				$elm$core$List$foldl,
				F2(
					function (name, _v2) {
						var soFar = _v2.a;
						var i = _v2.b;
						return _Utils_Tuple2(
							A3($elm$core$Dict$insert, name, i, soFar),
							i + 1);
					}),
				_Utils_Tuple2($elm$core$Dict$empty, 0),
				names).a;
		};
		switch (headers.$) {
			case 'NoFieldNames':
				return $elm$core$Result$Ok(
					_Utils_Tuple3($elm$core$Dict$empty, 0, rows));
			case 'CustomFieldNames':
				var names = headers.a;
				return $elm$core$Result$Ok(
					_Utils_Tuple3(
						fromList(names),
						0,
						rows));
			default:
				if (!rows.b) {
					return $elm$core$Result$Err($BrianHicks$elm_csv$Csv$Decode$NoFieldNamesOnFirstRow);
				} else {
					var first = rows.a;
					var rest = rows.b;
					return $elm$core$Result$Ok(
						_Utils_Tuple3(
							fromList(
								A2($elm$core$List$map, $elm$core$String$trim, first)),
							1,
							rest));
				}
		}
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$applyDecoder = F3(
	function (fieldNames, _v0, allRows) {
		var decode = _v0.a;
		var defaultLocation = $BrianHicks$elm_csv$Csv$Decode$OnlyColumn_;
		return A2(
			$elm$core$Result$andThen,
			function (_v1) {
				var resolvedNames = _v1.a;
				var firstRowNumber = _v1.b;
				var rows = _v1.c;
				return A2(
					$elm$core$Result$mapError,
					A2($elm$core$Basics$composeL, $BrianHicks$elm_csv$Csv$Decode$DecodingErrors, $elm$core$List$reverse),
					A2(
						$elm$core$Result$map,
						$elm$core$List$reverse,
						A3(
							$elm$core$List$foldl,
							F2(
								function (row, _v2) {
									var soFar = _v2.a;
									var rowNum = _v2.b;
									return _Utils_Tuple2(
										function () {
											var _v3 = A4(decode, defaultLocation, resolvedNames, rowNum, row);
											if (_v3.$ === 'Ok') {
												var val = _v3.a;
												if (soFar.$ === 'Ok') {
													var values = soFar.a;
													return $elm$core$Result$Ok(
														A2($elm$core$List$cons, val, values));
												} else {
													var errs = soFar.a;
													return $elm$core$Result$Err(errs);
												}
											} else {
												var err = _v3.a;
												if (soFar.$ === 'Ok') {
													return $elm$core$Result$Err(
														_List_fromArray(
															[err]));
												} else {
													var errs = soFar.a;
													return $elm$core$Result$Err(
														A2($elm$core$List$cons, err, errs));
												}
											}
										}(),
										rowNum + 1);
								}),
							_Utils_Tuple2(
								$elm$core$Result$Ok(_List_Nil),
								firstRowNumber),
							rows).a));
			},
			A2($BrianHicks$elm_csv$Csv$Decode$getFieldNames, fieldNames, allRows));
	});
var $BrianHicks$elm_csv$Csv$Parser$AdditionalCharactersAfterClosingQuote = function (a) {
	return {$: 'AdditionalCharactersAfterClosingQuote', a: a};
};
var $BrianHicks$elm_csv$Csv$Parser$SourceEndedWithoutClosingQuote = function (a) {
	return {$: 'SourceEndedWithoutClosingQuote', a: a};
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Basics$ge = _Utils_ge;
var $BrianHicks$elm_csv$Csv$Parser$parse = F2(
	function (config, source) {
		var finalLength = $elm$core$String$length(source);
		var parseQuotedField = F4(
			function (isFieldSeparator, soFar, startOffset, endOffset) {
				parseQuotedField:
				while (true) {
					if ((endOffset - finalLength) >= 0) {
						return $elm$core$Result$Err($BrianHicks$elm_csv$Csv$Parser$SourceEndedWithoutClosingQuote);
					} else {
						if (A3($elm$core$String$slice, endOffset, endOffset + 1, source) === '\"') {
							var segment = A3($elm$core$String$slice, startOffset, endOffset, source);
							if (((endOffset + 2) - finalLength) >= 0) {
								return $elm$core$Result$Ok(
									_Utils_Tuple3(
										_Utils_ap(soFar, segment),
										endOffset + 1,
										false));
							} else {
								var next = A3($elm$core$String$slice, endOffset + 1, endOffset + 2, source);
								if (next === '\"') {
									var newPos = endOffset + 2;
									var $temp$isFieldSeparator = isFieldSeparator,
										$temp$soFar = soFar + (segment + '\"'),
										$temp$startOffset = newPos,
										$temp$endOffset = newPos;
									isFieldSeparator = $temp$isFieldSeparator;
									soFar = $temp$soFar;
									startOffset = $temp$startOffset;
									endOffset = $temp$endOffset;
									continue parseQuotedField;
								} else {
									if (isFieldSeparator(next)) {
										return $elm$core$Result$Ok(
											_Utils_Tuple3(
												_Utils_ap(soFar, segment),
												endOffset + 2,
												false));
									} else {
										if (next === '\n') {
											return $elm$core$Result$Ok(
												_Utils_Tuple3(
													_Utils_ap(soFar, segment),
													endOffset + 2,
													true));
										} else {
											if ((next === '\u000D') && (A3($elm$core$String$slice, endOffset + 2, endOffset + 3, source) === '\n')) {
												return $elm$core$Result$Ok(
													_Utils_Tuple3(
														_Utils_ap(soFar, segment),
														endOffset + 3,
														true));
											} else {
												return $elm$core$Result$Err($BrianHicks$elm_csv$Csv$Parser$AdditionalCharactersAfterClosingQuote);
											}
										}
									}
								}
							}
						} else {
							var $temp$isFieldSeparator = isFieldSeparator,
								$temp$soFar = soFar,
								$temp$startOffset = startOffset,
								$temp$endOffset = endOffset + 1;
							isFieldSeparator = $temp$isFieldSeparator;
							soFar = $temp$soFar;
							startOffset = $temp$startOffset;
							endOffset = $temp$endOffset;
							continue parseQuotedField;
						}
					}
				}
			});
		var parseComma = F4(
			function (row, rows, startOffset, endOffset) {
				parseComma:
				while (true) {
					if ((endOffset - finalLength) >= 0) {
						var finalField = A3($elm$core$String$slice, startOffset, endOffset, source);
						return ((finalField === '') && _Utils_eq(row, _List_Nil)) ? $elm$core$Result$Ok(
							$elm$core$List$reverse(rows)) : $elm$core$Result$Ok(
							$elm$core$List$reverse(
								A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2($elm$core$List$cons, finalField, row)),
									rows)));
					} else {
						var first = A3($elm$core$String$slice, endOffset, endOffset + 1, source);
						if (first === ',') {
							var newPos = endOffset + 1;
							var $temp$row = A2(
								$elm$core$List$cons,
								A3($elm$core$String$slice, startOffset, endOffset, source),
								row),
								$temp$rows = rows,
								$temp$startOffset = newPos,
								$temp$endOffset = newPos;
							row = $temp$row;
							rows = $temp$rows;
							startOffset = $temp$startOffset;
							endOffset = $temp$endOffset;
							continue parseComma;
						} else {
							if (first === '\n') {
								var newPos = endOffset + 1;
								var $temp$row = _List_Nil,
									$temp$rows = A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2(
											$elm$core$List$cons,
											A3($elm$core$String$slice, startOffset, endOffset, source),
											row)),
									rows),
									$temp$startOffset = newPos,
									$temp$endOffset = newPos;
								row = $temp$row;
								rows = $temp$rows;
								startOffset = $temp$startOffset;
								endOffset = $temp$endOffset;
								continue parseComma;
							} else {
								if ((first === '\u000D') && (A3($elm$core$String$slice, endOffset + 1, endOffset + 2, source) === '\n')) {
									var newPos = endOffset + 2;
									var $temp$row = _List_Nil,
										$temp$rows = A2(
										$elm$core$List$cons,
										$elm$core$List$reverse(
											A2(
												$elm$core$List$cons,
												A3($elm$core$String$slice, startOffset, endOffset, source),
												row)),
										rows),
										$temp$startOffset = newPos,
										$temp$endOffset = newPos;
									row = $temp$row;
									rows = $temp$rows;
									startOffset = $temp$startOffset;
									endOffset = $temp$endOffset;
									continue parseComma;
								} else {
									if (first === '\"') {
										var newPos = endOffset + 1;
										var _v0 = A4(
											parseQuotedField,
											function (c) {
												return c === ',';
											},
											'',
											newPos,
											newPos);
										if (_v0.$ === 'Ok') {
											var _v1 = _v0.a;
											var value = _v1.a;
											var afterQuotedField = _v1.b;
											var rowEnded = _v1.c;
											if (_Utils_cmp(afterQuotedField, finalLength) > -1) {
												return $elm$core$Result$Ok(
													$elm$core$List$reverse(
														A2(
															$elm$core$List$cons,
															$elm$core$List$reverse(
																A2($elm$core$List$cons, value, row)),
															rows)));
											} else {
												if (rowEnded) {
													var $temp$row = _List_Nil,
														$temp$rows = A2(
														$elm$core$List$cons,
														$elm$core$List$reverse(
															A2($elm$core$List$cons, value, row)),
														rows),
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseComma;
												} else {
													var $temp$row = A2($elm$core$List$cons, value, row),
														$temp$rows = rows,
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseComma;
												}
											}
										} else {
											var problem = _v0.a;
											return $elm$core$Result$Err(
												problem(
													$elm$core$List$length(rows) + 1));
										}
									} else {
										var $temp$row = row,
											$temp$rows = rows,
											$temp$startOffset = startOffset,
											$temp$endOffset = endOffset + 1;
										row = $temp$row;
										rows = $temp$rows;
										startOffset = $temp$startOffset;
										endOffset = $temp$endOffset;
										continue parseComma;
									}
								}
							}
						}
					}
				}
			});
		var parseHelp = F5(
			function (isFieldSeparator, row, rows, startOffset, endOffset) {
				parseHelp:
				while (true) {
					if ((endOffset - finalLength) >= 0) {
						var finalField = A3($elm$core$String$slice, startOffset, endOffset, source);
						return ((finalField === '') && _Utils_eq(row, _List_Nil)) ? $elm$core$Result$Ok(
							$elm$core$List$reverse(rows)) : $elm$core$Result$Ok(
							$elm$core$List$reverse(
								A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2($elm$core$List$cons, finalField, row)),
									rows)));
					} else {
						var first = A3($elm$core$String$slice, endOffset, endOffset + 1, source);
						if (isFieldSeparator(first)) {
							var newPos = endOffset + 1;
							var $temp$isFieldSeparator = isFieldSeparator,
								$temp$row = A2(
								$elm$core$List$cons,
								A3($elm$core$String$slice, startOffset, endOffset, source),
								row),
								$temp$rows = rows,
								$temp$startOffset = newPos,
								$temp$endOffset = newPos;
							isFieldSeparator = $temp$isFieldSeparator;
							row = $temp$row;
							rows = $temp$rows;
							startOffset = $temp$startOffset;
							endOffset = $temp$endOffset;
							continue parseHelp;
						} else {
							if (first === '\n') {
								var newPos = endOffset + 1;
								var $temp$isFieldSeparator = isFieldSeparator,
									$temp$row = _List_Nil,
									$temp$rows = A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2(
											$elm$core$List$cons,
											A3($elm$core$String$slice, startOffset, endOffset, source),
											row)),
									rows),
									$temp$startOffset = newPos,
									$temp$endOffset = newPos;
								isFieldSeparator = $temp$isFieldSeparator;
								row = $temp$row;
								rows = $temp$rows;
								startOffset = $temp$startOffset;
								endOffset = $temp$endOffset;
								continue parseHelp;
							} else {
								if ((first === '\u000D') && (A3($elm$core$String$slice, endOffset + 1, endOffset + 2, source) === '\n')) {
									var newPos = endOffset + 2;
									var $temp$isFieldSeparator = isFieldSeparator,
										$temp$row = _List_Nil,
										$temp$rows = A2(
										$elm$core$List$cons,
										$elm$core$List$reverse(
											A2(
												$elm$core$List$cons,
												A3($elm$core$String$slice, startOffset, endOffset, source),
												row)),
										rows),
										$temp$startOffset = newPos,
										$temp$endOffset = newPos;
									isFieldSeparator = $temp$isFieldSeparator;
									row = $temp$row;
									rows = $temp$rows;
									startOffset = $temp$startOffset;
									endOffset = $temp$endOffset;
									continue parseHelp;
								} else {
									if (first === '\"') {
										var newPos = endOffset + 1;
										var _v2 = A4(parseQuotedField, isFieldSeparator, '', newPos, newPos);
										if (_v2.$ === 'Ok') {
											var _v3 = _v2.a;
											var value = _v3.a;
											var afterQuotedField = _v3.b;
											var rowEnded = _v3.c;
											if (_Utils_cmp(afterQuotedField, finalLength) > -1) {
												return $elm$core$Result$Ok(
													$elm$core$List$reverse(
														A2(
															$elm$core$List$cons,
															$elm$core$List$reverse(
																A2($elm$core$List$cons, value, row)),
															rows)));
											} else {
												if (rowEnded) {
													var $temp$isFieldSeparator = isFieldSeparator,
														$temp$row = _List_Nil,
														$temp$rows = A2(
														$elm$core$List$cons,
														$elm$core$List$reverse(
															A2($elm$core$List$cons, value, row)),
														rows),
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													isFieldSeparator = $temp$isFieldSeparator;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseHelp;
												} else {
													var $temp$isFieldSeparator = isFieldSeparator,
														$temp$row = A2($elm$core$List$cons, value, row),
														$temp$rows = rows,
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													isFieldSeparator = $temp$isFieldSeparator;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseHelp;
												}
											}
										} else {
											var problem = _v2.a;
											return $elm$core$Result$Err(
												problem(
													$elm$core$List$length(rows) + 1));
										}
									} else {
										var $temp$isFieldSeparator = isFieldSeparator,
											$temp$row = row,
											$temp$rows = rows,
											$temp$startOffset = startOffset,
											$temp$endOffset = endOffset + 1;
										isFieldSeparator = $temp$isFieldSeparator;
										row = $temp$row;
										rows = $temp$rows;
										startOffset = $temp$startOffset;
										endOffset = $temp$endOffset;
										continue parseHelp;
									}
								}
							}
						}
					}
				}
			});
		var parseSemicolon = F4(
			function (row, rows, startOffset, endOffset) {
				parseSemicolon:
				while (true) {
					if ((endOffset - finalLength) >= 0) {
						var finalField = A3($elm$core$String$slice, startOffset, endOffset, source);
						return ((finalField === '') && _Utils_eq(row, _List_Nil)) ? $elm$core$Result$Ok(
							$elm$core$List$reverse(rows)) : $elm$core$Result$Ok(
							$elm$core$List$reverse(
								A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2($elm$core$List$cons, finalField, row)),
									rows)));
					} else {
						var first = A3($elm$core$String$slice, endOffset, endOffset + 1, source);
						if (first === ';') {
							var newPos = endOffset + 1;
							var $temp$row = A2(
								$elm$core$List$cons,
								A3($elm$core$String$slice, startOffset, endOffset, source),
								row),
								$temp$rows = rows,
								$temp$startOffset = newPos,
								$temp$endOffset = newPos;
							row = $temp$row;
							rows = $temp$rows;
							startOffset = $temp$startOffset;
							endOffset = $temp$endOffset;
							continue parseSemicolon;
						} else {
							if (first === '\n') {
								var newPos = endOffset + 1;
								var $temp$row = _List_Nil,
									$temp$rows = A2(
									$elm$core$List$cons,
									$elm$core$List$reverse(
										A2(
											$elm$core$List$cons,
											A3($elm$core$String$slice, startOffset, endOffset, source),
											row)),
									rows),
									$temp$startOffset = newPos,
									$temp$endOffset = newPos;
								row = $temp$row;
								rows = $temp$rows;
								startOffset = $temp$startOffset;
								endOffset = $temp$endOffset;
								continue parseSemicolon;
							} else {
								if ((first === '\u000D') && (A3($elm$core$String$slice, endOffset + 1, endOffset + 2, source) === '\n')) {
									var newPos = endOffset + 2;
									var $temp$row = _List_Nil,
										$temp$rows = A2(
										$elm$core$List$cons,
										$elm$core$List$reverse(
											A2(
												$elm$core$List$cons,
												A3($elm$core$String$slice, startOffset, endOffset, source),
												row)),
										rows),
										$temp$startOffset = newPos,
										$temp$endOffset = newPos;
									row = $temp$row;
									rows = $temp$rows;
									startOffset = $temp$startOffset;
									endOffset = $temp$endOffset;
									continue parseSemicolon;
								} else {
									if (first === '\"') {
										var newPos = endOffset + 1;
										var _v4 = A4(
											parseQuotedField,
											function (c) {
												return c === ';';
											},
											'',
											newPos,
											newPos);
										if (_v4.$ === 'Ok') {
											var _v5 = _v4.a;
											var value = _v5.a;
											var afterQuotedField = _v5.b;
											var rowEnded = _v5.c;
											if (_Utils_cmp(afterQuotedField, finalLength) > -1) {
												return $elm$core$Result$Ok(
													$elm$core$List$reverse(
														A2(
															$elm$core$List$cons,
															$elm$core$List$reverse(
																A2($elm$core$List$cons, value, row)),
															rows)));
											} else {
												if (rowEnded) {
													var $temp$row = _List_Nil,
														$temp$rows = A2(
														$elm$core$List$cons,
														$elm$core$List$reverse(
															A2($elm$core$List$cons, value, row)),
														rows),
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseSemicolon;
												} else {
													var $temp$row = A2($elm$core$List$cons, value, row),
														$temp$rows = rows,
														$temp$startOffset = afterQuotedField,
														$temp$endOffset = afterQuotedField;
													row = $temp$row;
													rows = $temp$rows;
													startOffset = $temp$startOffset;
													endOffset = $temp$endOffset;
													continue parseSemicolon;
												}
											}
										} else {
											var problem = _v4.a;
											return $elm$core$Result$Err(
												problem(
													$elm$core$List$length(rows) + 1));
										}
									} else {
										var $temp$row = row,
											$temp$rows = rows,
											$temp$startOffset = startOffset,
											$temp$endOffset = endOffset + 1;
										row = $temp$row;
										rows = $temp$rows;
										startOffset = $temp$startOffset;
										endOffset = $temp$endOffset;
										continue parseSemicolon;
									}
								}
							}
						}
					}
				}
			});
		var fieldSeparator = $elm$core$String$fromChar(config.fieldSeparator);
		return $elm$core$String$isEmpty(source) ? $elm$core$Result$Ok(_List_Nil) : (_Utils_eq(
			config.fieldSeparator,
			_Utils_chr(',')) ? A4(parseComma, _List_Nil, _List_Nil, 0, 0) : (_Utils_eq(
			config.fieldSeparator,
			_Utils_chr(';')) ? A4(parseSemicolon, _List_Nil, _List_Nil, 0, 0) : A5(
			parseHelp,
			function (s) {
				return _Utils_eq(s, fieldSeparator);
			},
			_List_Nil,
			_List_Nil,
			0,
			0)));
	});
var $BrianHicks$elm_csv$Csv$Decode$decodeCustom = F4(
	function (config, fieldNames, decoder, source) {
		return A2(
			$elm$core$Result$andThen,
			A2($BrianHicks$elm_csv$Csv$Decode$applyDecoder, fieldNames, decoder),
			A2(
				$elm$core$Result$mapError,
				$BrianHicks$elm_csv$Csv$Decode$ParsingError,
				A2($BrianHicks$elm_csv$Csv$Parser$parse, config, source)));
	});
var $BrianHicks$elm_csv$Csv$Decode$decodeCsv = $BrianHicks$elm_csv$Csv$Decode$decodeCustom(
	{
		fieldSeparator: _Utils_chr(',')
	});
var $author$project$City$City = F3(
	function (year, urbanAgglomeration, populationMillions) {
		return {populationMillions: populationMillions, urbanAgglomeration: urbanAgglomeration, year: year};
	});
var $BrianHicks$elm_csv$Csv$Decode$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$Field_ = function (a) {
	return {$: 'Field_', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$field = F2(
	function (name, _v0) {
		var decoder = _v0.a;
		return $BrianHicks$elm_csv$Csv$Decode$Decoder(
			F3(
				function (_v1, fieldNames, row) {
					return A3(
						decoder,
						$BrianHicks$elm_csv$Csv$Decode$Field_(name),
						fieldNames,
						row);
				}));
	});
var $BrianHicks$elm_csv$Csv$Decode$ExpectedFloat = function (a) {
	return {$: 'ExpectedFloat', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$ColumnNotFound = function (a) {
	return {$: 'ColumnNotFound', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$ExpectedOneColumn = function (a) {
	return {$: 'ExpectedOneColumn', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$FieldNotFound = function (a) {
	return {$: 'FieldNotFound', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$FieldNotProvided = function (a) {
	return {$: 'FieldNotProvided', a: a};
};
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $BrianHicks$elm_csv$Csv$Decode$Column = function (a) {
	return {$: 'Column', a: a};
};
var $BrianHicks$elm_csv$Csv$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $BrianHicks$elm_csv$Csv$Decode$OnlyColumn = {$: 'OnlyColumn'};
var $BrianHicks$elm_csv$Csv$Decode$locationToColumn = F2(
	function (fieldNames, location) {
		switch (location.$) {
			case 'Column_':
				var i = location.a;
				return $BrianHicks$elm_csv$Csv$Decode$Column(i);
			case 'Field_':
				var name = location.a;
				return A2(
					$BrianHicks$elm_csv$Csv$Decode$Field,
					name,
					A2($elm$core$Dict$get, name, fieldNames));
			default:
				return $BrianHicks$elm_csv$Csv$Decode$OnlyColumn;
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$fromString = function (convert) {
	return $BrianHicks$elm_csv$Csv$Decode$Decoder(
		F4(
			function (location, fieldNames, rowNum, row) {
				switch (location.$) {
					case 'Column_':
						var colNum = location.a;
						var _v1 = $elm$core$List$head(
							A2($elm$core$List$drop, colNum, row));
						if (_v1.$ === 'Just') {
							var value = _v1.a;
							var _v2 = convert(value);
							if (_v2.$ === 'Ok') {
								var converted = _v2.a;
								return $elm$core$Result$Ok(converted);
							} else {
								var problem = _v2.a;
								return $elm$core$Result$Err(
									{
										column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
										problems: _List_fromArray(
											[problem]),
										row: rowNum
									});
							}
						} else {
							return $elm$core$Result$Err(
								{
									column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
									problems: _List_fromArray(
										[
											$BrianHicks$elm_csv$Csv$Decode$ColumnNotFound(colNum)
										]),
									row: rowNum
								});
						}
					case 'Field_':
						var name = location.a;
						var _v3 = A2($elm$core$Dict$get, name, fieldNames);
						if (_v3.$ === 'Just') {
							var colNum = _v3.a;
							var _v4 = $elm$core$List$head(
								A2($elm$core$List$drop, colNum, row));
							if (_v4.$ === 'Just') {
								var value = _v4.a;
								var _v5 = convert(value);
								if (_v5.$ === 'Ok') {
									var converted = _v5.a;
									return $elm$core$Result$Ok(converted);
								} else {
									var problem = _v5.a;
									return $elm$core$Result$Err(
										{
											column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
											problems: _List_fromArray(
												[problem]),
											row: rowNum
										});
								}
							} else {
								return $elm$core$Result$Err(
									{
										column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
										problems: _List_fromArray(
											[
												$BrianHicks$elm_csv$Csv$Decode$FieldNotFound(name)
											]),
										row: rowNum
									});
							}
						} else {
							return $elm$core$Result$Err(
								{
									column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
									problems: _List_fromArray(
										[
											$BrianHicks$elm_csv$Csv$Decode$FieldNotProvided(name)
										]),
									row: rowNum
								});
						}
					default:
						if (!row.b) {
							return $elm$core$Result$Err(
								{
									column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
									problems: _List_fromArray(
										[
											$BrianHicks$elm_csv$Csv$Decode$ColumnNotFound(0)
										]),
									row: rowNum
								});
						} else {
							if (!row.b.b) {
								var only = row.a;
								var _v7 = convert(only);
								if (_v7.$ === 'Ok') {
									var converted = _v7.a;
									return $elm$core$Result$Ok(converted);
								} else {
									var problem = _v7.a;
									return $elm$core$Result$Err(
										{
											column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
											problems: _List_fromArray(
												[problem]),
											row: rowNum
										});
								}
							} else {
								return $elm$core$Result$Err(
									{
										column: A2($BrianHicks$elm_csv$Csv$Decode$locationToColumn, fieldNames, location),
										problems: _List_fromArray(
											[
												$BrianHicks$elm_csv$Csv$Decode$ExpectedOneColumn(
												$elm$core$List$length(row))
											]),
										row: rowNum
									});
							}
						}
				}
			}));
};
var $elm$core$String$toFloat = _String_toFloat;
var $BrianHicks$elm_csv$Csv$Decode$float = $BrianHicks$elm_csv$Csv$Decode$fromString(
	function (value) {
		var _v0 = $elm$core$String$toFloat(
			$elm$core$String$trim(value));
		if (_v0.$ === 'Just') {
			var parsed = _v0.a;
			return $elm$core$Result$Ok(parsed);
		} else {
			return $elm$core$Result$Err(
				$BrianHicks$elm_csv$Csv$Decode$ExpectedFloat(value));
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$succeed = function (value) {
	return $BrianHicks$elm_csv$Csv$Decode$Decoder(
		F4(
			function (_v0, _v1, _v2, _v3) {
				return $elm$core$Result$Ok(value);
			}));
};
var $BrianHicks$elm_csv$Csv$Decode$into = $BrianHicks$elm_csv$Csv$Decode$succeed;
var $elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 'Err') {
			var x = ra.a;
			return $elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 'Err') {
				var x = rb.a;
				return $elm$core$Result$Err(x);
			} else {
				var b = rb.a;
				return $elm$core$Result$Ok(
					A2(func, a, b));
			}
		}
	});
var $BrianHicks$elm_csv$Csv$Decode$map2 = F3(
	function (transform, _v0, _v1) {
		var decodeA = _v0.a;
		var decodeB = _v1.a;
		return $BrianHicks$elm_csv$Csv$Decode$Decoder(
			F4(
				function (location, fieldNames, rowNum, row) {
					return A3(
						$elm$core$Result$map2,
						transform,
						A4(decodeA, location, fieldNames, rowNum, row),
						A4(decodeB, location, fieldNames, rowNum, row));
				}));
	});
var $BrianHicks$elm_csv$Csv$Decode$pipeline = $BrianHicks$elm_csv$Csv$Decode$map2(
	F2(
		function (value, fn) {
			return fn(value);
		}));
var $BrianHicks$elm_csv$Csv$Decode$string = $BrianHicks$elm_csv$Csv$Decode$fromString($elm$core$Result$Ok);
var $author$project$City$decoder = A2(
	$BrianHicks$elm_csv$Csv$Decode$pipeline,
	A2($BrianHicks$elm_csv$Csv$Decode$field, 'populationMillions', $BrianHicks$elm_csv$Csv$Decode$float),
	A2(
		$BrianHicks$elm_csv$Csv$Decode$pipeline,
		A2($BrianHicks$elm_csv$Csv$Decode$field, 'urbanAgglomeration', $BrianHicks$elm_csv$Csv$Decode$string),
		A2(
			$BrianHicks$elm_csv$Csv$Decode$pipeline,
			A2($BrianHicks$elm_csv$Csv$Decode$field, 'year', $BrianHicks$elm_csv$Csv$Decode$float),
			$BrianHicks$elm_csv$Csv$Decode$into($author$project$City$City))));
var $author$project$City$decodeCity = A3($BrianHicks$elm_csv$Csv$Decode$decodeCsv, $BrianHicks$elm_csv$Csv$Decode$FieldNamesFromFirstRow, $author$project$City$decoder, $author$project$City$csv);
var $author$project$BarStacked$initialModel = {data: _List_Nil};
var $author$project$Line$initialModel = {data: _List_Nil, hinted: $elm$core$Maybe$Nothing, pointAnnotation: $elm$core$Maybe$Nothing, vLineAnnotation: $elm$core$Maybe$Nothing};
var $gampleman$elm_visualization$Transition$Transition = F4(
	function (a, b, c, d) {
		return {$: 'Transition', a: a, b: b, c: c, d: d};
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $gampleman$elm_visualization$Transition$Easing = function (a) {
	return {$: 'Easing', a: a};
};
var $gampleman$elm_visualization$Transition$easeLinear = $gampleman$elm_visualization$Transition$Easing($elm$core$Basics$identity);
var $gampleman$elm_visualization$Transition$constant = function (val) {
	return A4(
		$gampleman$elm_visualization$Transition$Transition,
		0,
		0,
		$gampleman$elm_visualization$Transition$easeLinear,
		$elm$core$Basics$always(val));
};
var $author$project$LineAnimated$initialYear = 1950;
var $author$project$LineAnimated$initialModel = {
	allData: _List_Nil,
	animationIsComplete: true,
	currentIdx: 0,
	currentYear: $author$project$LineAnimated$initialYear,
	data: _List_Nil,
	lastIdx: 0,
	transition: $gampleman$elm_visualization$Transition$constant(_List_Nil),
	xDomain: _Utils_Tuple2(0, 0),
	yDomain: _Utils_Tuple2(0, 0),
	years: $elm$core$Array$empty
};
var $author$project$LineStacked$initialModel = {data: _List_Nil};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $author$project$Main$init = function (_v0) {
	var width = _v0.width;
	var height = _v0.height;
	return _Utils_Tuple2(
		{barStacked: $author$project$BarStacked$initialModel, height: height, line: $author$project$Line$initialModel, lineAnimated: $author$project$LineAnimated$initialModel, lineStacked: $author$project$LineStacked$initialModel, width: width},
		$elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					A2(
					$elm$core$Platform$Cmd$map,
					$author$project$Main$LineStackedMsg,
					A2(
						$elm$core$Task$perform,
						$author$project$LineStacked$OnData,
						$elm$core$Task$succeed($author$project$City$decodeCity))),
					A2(
					$elm$core$Platform$Cmd$map,
					$author$project$Main$LineAnimatedMsg,
					A2(
						$elm$core$Task$perform,
						$author$project$LineAnimated$OnData,
						$elm$core$Task$succeed($author$project$City$decodeCity))),
					A2(
					$elm$core$Platform$Cmd$map,
					$author$project$Main$BarStackedMsg,
					A2(
						$elm$core$Task$perform,
						$author$project$BarStacked$OnData,
						$elm$core$Task$succeed($author$project$City$decodeCity))),
					A2(
					$elm$core$Platform$Cmd$map,
					$author$project$Main$LineMsg,
					A2(
						$elm$core$Task$perform,
						$author$project$Line$OnData,
						$elm$core$Task$succeed($author$project$City$decodeCity)))
				])));
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$map = _Platform_map;
var $author$project$LineAnimated$Tick = function (a) {
	return {$: 'Tick', a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $gampleman$elm_visualization$Transition$isComplete = function (_v0) {
	var soFar = _v0.a;
	var total = _v0.b;
	return _Utils_cmp(soFar, total) > -1;
};
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 'Delta', a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {oldTime: oldTime, request: request, subs: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$browser$Browser$AnimationManager$now = _Browser_now(_Utils_Tuple0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(_Utils_Tuple0);
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.request;
		var oldTime = _v0.oldTime;
		var _v1 = _Utils_Tuple2(request, subs);
		if (_v1.a.$ === 'Nothing') {
			if (!_v1.b.b) {
				var _v2 = _v1.a;
				return $elm$browser$Browser$AnimationManager$init;
			} else {
				var _v4 = _v1.a;
				return A2(
					$elm$core$Task$andThen,
					function (pid) {
						return A2(
							$elm$core$Task$andThen,
							function (time) {
								return $elm$core$Task$succeed(
									A3(
										$elm$browser$Browser$AnimationManager$State,
										subs,
										$elm$core$Maybe$Just(pid),
										time));
							},
							$elm$browser$Browser$AnimationManager$now);
					},
					$elm$core$Process$spawn(
						A2(
							$elm$core$Task$andThen,
							$elm$core$Platform$sendToSelf(router),
							$elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_v1.b.b) {
				var pid = _v1.a.a;
				return A2(
					$elm$core$Task$andThen,
					function (_v3) {
						return $elm$browser$Browser$AnimationManager$init;
					},
					$elm$core$Process$kill(pid));
			} else {
				return $elm$core$Task$succeed(
					A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _v0) {
		var subs = _v0.subs;
		var oldTime = _v0.oldTime;
		var send = function (sub) {
			if (sub.$ === 'Time') {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(
						$elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			$elm$core$Task$andThen,
			function (pid) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$core$Task$succeed(
							A3(
								$elm$browser$Browser$AnimationManager$State,
								subs,
								$elm$core$Maybe$Just(pid),
								newTime));
					},
					$elm$core$Task$sequence(
						A2($elm$core$List$map, send, subs)));
			},
			$elm$core$Process$spawn(
				A2(
					$elm$core$Task$andThen,
					$elm$core$Platform$sendToSelf(router),
					$elm$browser$Browser$AnimationManager$rAF)));
	});
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 'Time', a: a};
};
var $elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (sub.$ === 'Time') {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Time(
				A2($elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Delta(
				A2($elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var $elm$browser$Browser$AnimationManager$onAnimationFrameDelta = function (tagger) {
	return $elm$browser$Browser$AnimationManager$subscription(
		$elm$browser$Browser$AnimationManager$Delta(tagger));
};
var $elm$browser$Browser$Events$onAnimationFrameDelta = $elm$browser$Browser$AnimationManager$onAnimationFrameDelta;
var $elm$core$Basics$round = _Basics_round;
var $author$project$LineAnimated$subscriptions = function (model) {
	return $gampleman$elm_visualization$Transition$isComplete(model.transition) ? $elm$core$Platform$Sub$none : $elm$browser$Browser$Events$onAnimationFrameDelta(
		A2($elm$core$Basics$composeR, $elm$core$Basics$round, $author$project$LineAnimated$Tick));
};
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2(
				$elm$core$Platform$Sub$map,
				$author$project$Main$LineAnimatedMsg,
				$author$project$LineAnimated$subscriptions(model.lineAnimated))
			]));
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $author$project$BarStacked$update = F2(
	function (msg, model) {
		if (msg.a.$ === 'Ok') {
			var data = msg.a.a;
			var selectedData = A2(
				$elm$core$List$map,
				function (d) {
					return (d.urbanAgglomeration === 'Shanghai') ? _Utils_update(
						d,
						{populationMillions: -d.populationMillions}) : d;
				},
				A2(
					$elm$core$List$filter,
					function (d) {
						return (d.urbanAgglomeration === 'Tokyo') || (d.urbanAgglomeration === 'Shanghai');
					},
					data));
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{data: selectedData}),
				$elm$core$Platform$Cmd$none);
		} else {
			var err = msg.a.a;
			return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Line$pointAnnotationStyle = _List_fromArray(
	[
		_Utils_Tuple2('fill', '#fff'),
		_Utils_Tuple2('stroke', '#000'),
		_Utils_Tuple2('stroke-width', '1.5')
	]);
var $author$project$Line$vLineAnnotationStyle = _List_fromArray(
	[
		_Utils_Tuple2('stroke', '#999999')
	]);
var $author$project$Line$update = F2(
	function (msg, model) {
		if (msg.$ === 'Hint') {
			var response = msg.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						pointAnnotation: A2(
							$elm$core$Maybe$map,
							function (hint) {
								return _Utils_Tuple2(hint, $author$project$Line$pointAnnotationStyle);
							},
							response),
						vLineAnnotation: A2(
							$elm$core$Maybe$map,
							function (hint) {
								return _Utils_Tuple2(hint, $author$project$Line$vLineAnnotationStyle);
							},
							response)
					}),
				$elm$core$Platform$Cmd$none);
		} else {
			if (msg.a.$ === 'Ok') {
				var data = msg.a.a;
				var selectedData = A2(
					$elm$core$List$filter,
					function (d) {
						return (d.urbanAgglomeration === 'Tokyo') || (d.urbanAgglomeration === 'Shanghai');
					},
					data);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{data: selectedData}),
					$elm$core$Platform$Cmd$none);
			} else {
				var err = msg.a.a;
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			}
		}
	});
var $author$project$LineAnimated$StartAnimation = {$: 'StartAnimation'};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $gampleman$elm_visualization$Transition$easeFor = F2(
	function (t, easing) {
		return A3(
			$gampleman$elm_visualization$Transition$Transition,
			0,
			$elm$core$Basics$abs(t),
			easing);
	});
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $gampleman$elm_visualization$Interpolation$map2 = F3(
	function (fn, a, b) {
		return function (t) {
			return A2(
				fn,
				a(t),
				b(t));
		};
	});
var $gampleman$elm_visualization$Interpolation$inParallel = A2(
	$elm$core$List$foldr,
	$gampleman$elm_visualization$Interpolation$map2($elm$core$List$cons),
	$elm$core$Basics$always(_List_Nil));
var $gampleman$elm_visualization$Interpolation$float = F2(
	function (a, to) {
		var b = to - a;
		return function (t) {
			return a + (b * t);
		};
	});
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $gampleman$elm_visualization$Interpolation$tuple = F4(
	function (ia, ib, _v0, _v1) {
		var fromA = _v0.a;
		var fromB = _v0.b;
		var toA = _v1.a;
		var toB = _v1.b;
		return A3(
			$gampleman$elm_visualization$Interpolation$map2,
			$elm$core$Tuple$pair,
			A2(ia, fromA, toA),
			A2(ib, fromB, toB));
	});
var $author$project$LineAnimated$interpolatePosition = A2($gampleman$elm_visualization$Interpolation$tuple, $gampleman$elm_visualization$Interpolation$float, $gampleman$elm_visualization$Interpolation$float);
var $author$project$LineAnimated$interpolateValue = F2(
	function (from, to) {
		return A2($author$project$LineAnimated$interpolatePosition, from, to);
	});
var $gampleman$elm_visualization$Interpolation$map = $elm$core$Basics$composeL;
var $author$project$LineAnimated$interpolateValues = F2(
	function (from, to) {
		return $gampleman$elm_visualization$Interpolation$inParallel(
			A3(
				$elm$core$List$map2,
				F2(
					function (from_, to_) {
						return A2(
							$gampleman$elm_visualization$Interpolation$map,
							function (_v0) {
								var year = _v0.a;
								var populationMillions = _v0.b;
								return {populationMillions: populationMillions, urbanAgglomeration: from_.urbanAgglomeration, year: year};
							},
							A2(
								$author$project$LineAnimated$interpolateValue,
								_Utils_Tuple2(from_.year, from_.populationMillions),
								_Utils_Tuple2(to_.year, to_.populationMillions)));
					}),
				from,
				to));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $author$project$LineAnimated$years = function (data) {
	return $elm$core$Array$fromList(
		$elm$core$Set$toList(
			$elm$core$Set$fromList(
				A2(
					$elm$core$List$map,
					function ($) {
						return $.year;
					},
					data))));
};
var $author$project$LineAnimated$lastIdx = function (data) {
	return function (t) {
		return $elm$core$Array$length(t) - 1;
	}(
		$author$project$LineAnimated$years(data));
};
var $elm$core$Process$sleep = _Process_sleep;
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $gampleman$elm_visualization$Transition$step = F2(
	function (ms, _v0) {
		var soFar = _v0.a;
		var total = _v0.b;
		var easeing = _v0.c;
		var interp = _v0.d;
		return A4(
			$gampleman$elm_visualization$Transition$Transition,
			A2($elm$core$Basics$min, soFar + ms, total),
			total,
			easeing,
			interp);
	});
var $author$project$LineAnimated$transitionSpeed = 250;
var $author$project$LineAnimated$transitionStep = $author$project$LineAnimated$transitionSpeed + 350;
var $gampleman$elm_visualization$Transition$value = function (_v0) {
	var soFar = _v0.a;
	var total = _v0.b;
	var easeing = _v0.c.a;
	var interp = _v0.d;
	return interp(
		easeing(soFar / total));
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$LineAnimated$xDomain = function (data) {
	return function (p) {
		return _Utils_Tuple2(
			A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$List$minimum(p)),
			A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$List$maximum(p)));
	}(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.year;
			},
			data));
};
var $author$project$LineAnimated$yDomain = function (data) {
	return function (p) {
		return _Utils_Tuple2(
			0,
			A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$List$maximum(p)));
	}(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.populationMillions;
			},
			data));
};
var $author$project$LineAnimated$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'Tick':
				var tick = msg.a;
				var newData = _Utils_ap(
					model.data,
					$gampleman$elm_visualization$Transition$value(model.transition));
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							data: newData,
							transition: A2($gampleman$elm_visualization$Transition$step, tick, model.transition)
						}),
					$elm$core$Platform$Cmd$none);
			case 'StartAnimation':
				var nextIdx = model.currentIdx + 1;
				var nextYear = A2(
					$elm$core$Maybe$withDefault,
					model.currentYear,
					A2($elm$core$Array$get, nextIdx, model.years));
				var to = A2(
					$elm$core$List$filter,
					function (s) {
						return _Utils_eq(s.year, nextYear);
					},
					model.allData);
				var isComplete = (_Utils_cmp(nextIdx, model.lastIdx) < 1) ? false : true;
				var from = A2(
					$elm$core$List$filter,
					function (s) {
						return _Utils_eq(s.year, model.currentYear);
					},
					model.allData);
				var transition = A3(
					$gampleman$elm_visualization$Transition$easeFor,
					$author$project$LineAnimated$transitionSpeed,
					$gampleman$elm_visualization$Transition$easeLinear,
					A2($author$project$LineAnimated$interpolateValues, from, to));
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							animationIsComplete: isComplete,
							currentIdx: nextIdx,
							currentYear: nextYear,
							data: A2(
								$elm$core$List$filter,
								function (s) {
									return _Utils_cmp(s.year, model.currentYear) < 1;
								},
								model.allData),
							transition: transition
						}),
					(_Utils_cmp(nextIdx, model.lastIdx) < 1) ? A2(
						$elm$core$Task$perform,
						$elm$core$Basics$identity,
						A2(
							$elm$core$Task$andThen,
							function (_v1) {
								return $elm$core$Task$succeed($author$project$LineAnimated$StartAnimation);
							},
							$elm$core$Process$sleep($author$project$LineAnimated$transitionStep))) : $elm$core$Platform$Cmd$none);
			case 'InitAnimation':
				var m = _Utils_update(
					$author$project$LineAnimated$initialModel,
					{allData: model.allData, lastIdx: model.lastIdx, xDomain: model.xDomain, yDomain: model.yDomain, years: model.years});
				return _Utils_Tuple2(
					m,
					A2(
						$elm$core$Task$perform,
						$elm$core$Basics$identity,
						$elm$core$Task$succeed($author$project$LineAnimated$StartAnimation)));
			default:
				if (msg.a.$ === 'Ok') {
					var data = msg.a.a;
					var selectedData = A2(
						$elm$core$List$filter,
						function (d) {
							return (d.urbanAgglomeration === 'Tokyo') || (d.urbanAgglomeration === 'Shanghai');
						},
						data);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								allData: selectedData,
								lastIdx: $author$project$LineAnimated$lastIdx(selectedData),
								xDomain: $author$project$LineAnimated$xDomain(selectedData),
								yDomain: $author$project$LineAnimated$yDomain(selectedData),
								years: $author$project$LineAnimated$years(selectedData)
							}),
						A2(
							$elm$core$Task$perform,
							$elm$core$Basics$identity,
							$elm$core$Task$succeed($author$project$LineAnimated$StartAnimation)));
				} else {
					var err = msg.a.a;
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
		}
	});
var $author$project$LineStacked$update = F2(
	function (msg, model) {
		if (msg.a.$ === 'Ok') {
			var data = msg.a.a;
			var selectedData = A2(
				$elm$core$List$filter,
				function (d) {
					return (d.urbanAgglomeration === 'Tokyo') || (d.urbanAgglomeration === 'Shanghai');
				},
				data);
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{data: selectedData}),
				$elm$core$Platform$Cmd$none);
		} else {
			var err = msg.a.a;
			return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'LineAnimatedMsg':
				var subMsg = msg.a;
				return function (_v1) {
					var subModel = _v1.a;
					var subCmd = _v1.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{lineAnimated: subModel}),
						A2($elm$core$Platform$Cmd$map, $author$project$Main$LineAnimatedMsg, subCmd));
				}(
					A2($author$project$LineAnimated$update, subMsg, model.lineAnimated));
			case 'LineMsg':
				var subMsg = msg.a;
				return function (_v2) {
					var subModel = _v2.a;
					var subCmd = _v2.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{line: subModel}),
						A2($elm$core$Platform$Cmd$map, $author$project$Main$LineMsg, subCmd));
				}(
					A2($author$project$Line$update, subMsg, model.line));
			case 'LineStackedMsg':
				var subMsg = msg.a;
				return function (_v3) {
					var subModel = _v3.a;
					var subCmd = _v3.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{lineStacked: subModel}),
						A2($elm$core$Platform$Cmd$map, $author$project$Main$LineStackedMsg, subCmd));
				}(
					A2($author$project$LineStacked$update, subMsg, model.lineStacked));
			default:
				var subMsg = msg.a;
				return function (_v4) {
					var subModel = _v4.a;
					var subCmd = _v4.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{barStacked: subModel}),
						A2($elm$core$Platform$Cmd$map, $author$project$Main$BarStackedMsg, subCmd));
				}(
					A2($author$project$BarStacked$update, subMsg, model.barStacked));
		}
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $author$project$Helpers$exampleViewMoltiplier = 1.4;
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$html$Html$section = _VirtualDom_node('section');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$Helpers$chartRatio = 1.7;
var $author$project$Helpers$toChartHeight = function (width) {
	return $elm$core$Basics$round(width / $author$project$Helpers$chartRatio);
};
var $elm$core$Debug$log = _Debug_log;
var $author$project$Helpers$maxPageWidth = 1800;
var $author$project$Helpers$toChartWidth = function (pageWidth) {
	var width = (_Utils_cmp(pageWidth, $author$project$Helpers$maxPageWidth) > 0) ? $author$project$Helpers$maxPageWidth : pageWidth;
	var factor = (pageWidth < 1400) ? A2($elm$core$Debug$log, 'factor', 0.5) : 0.333;
	return factor * width;
};
var $author$project$Main$exampleView = F2(
	function (content, model) {
		var height = $elm$core$String$fromFloat(
			$author$project$Helpers$exampleViewMoltiplier * $author$project$Helpers$toChartHeight(
				$author$project$Helpers$toChartWidth(model.width)));
		return A2(
			$elm$html$Html$section,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('example'),
					A2($elm$html$Html$Attributes$style, 'height', height + 'px')
				]),
			content);
	});
var $elm$html$Html$footer = _VirtualDom_node('footer');
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$Main$footer = A2(
	$elm$html$Html$footer,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Data source: United Nations, Department of Economic and Social Affairs, Population Division (2018). World Urbanization Prospects: The 2018 Revision, Online Edition.')
				]))
		]));
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $author$project$Main$introView = function (model) {
	return A2(
		$elm$html$Html$section,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('intro')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h1,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$a,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$href('https://github.com/data-viz-lab/elm-chart-builder')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('elm-chart-builder')
							]))
					])),
				A2(
				$elm$html$Html$h2,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Accessible and easy to create charts in elm')
					]))
			]));
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $data_viz_lab$elm_chart_builder$Chart$Bar$Accessor = F3(
	function (xGroup, xValue, yValue) {
		return {xGroup: xGroup, xValue: xValue, yValue: yValue};
	});
var $author$project$BarStacked$accessor = A3(
	$data_viz_lab$elm_chart_builder$Chart$Bar$Accessor,
	A2(
		$elm$core$Basics$composeR,
		function ($) {
			return $.year;
		},
		A2($elm$core$Basics$composeR, $elm$core$String$fromFloat, $elm$core$Maybe$Just)),
	function ($) {
		return $.urbanAgglomeration;
	},
	function ($) {
		return $.populationMillions;
	});
var $avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 'RgbaSpace', a: a, b: b, c: c, d: d};
	});
var $avh4$elm_color$Color$scaleFrom255 = function (c) {
	return c / 255;
};
var $avh4$elm_color$Color$rgb255 = F3(
	function (r, g, b) {
		return A4(
			$avh4$elm_color$Color$RgbaSpace,
			$avh4$elm_color$Color$scaleFrom255(r),
			$avh4$elm_color$Color$scaleFrom255(g),
			$avh4$elm_color$Color$scaleFrom255(b),
			1.0);
	});
var $gampleman$elm_visualization$Scale$Color$tableau10 = _List_fromArray(
	[
		A3($avh4$elm_color$Color$rgb255, 78, 121, 167),
		A3($avh4$elm_color$Color$rgb255, 242, 142, 44),
		A3($avh4$elm_color$Color$rgb255, 225, 87, 89),
		A3($avh4$elm_color$Color$rgb255, 118, 183, 178),
		A3($avh4$elm_color$Color$rgb255, 89, 161, 79),
		A3($avh4$elm_color$Color$rgb255, 237, 201, 73),
		A3($avh4$elm_color$Color$rgb255, 175, 122, 161),
		A3($avh4$elm_color$Color$rgb255, 255, 157, 167),
		A3($avh4$elm_color$Color$rgb255, 156, 117, 95),
		A3($avh4$elm_color$Color$rgb255, 186, 176, 171)
	]);
var $author$project$BarStacked$colorScheme = $gampleman$elm_visualization$Scale$Color$tableau10;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Diverging = {$: 'Diverging'};
var $data_viz_lab$elm_chart_builder$Chart$Bar$diverging = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Diverging;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$AccessibilityTableNoLabels = {$: 'AccessibilityTableNoLabels'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Bottom = function (a) {
	return {$: 'Bottom', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ColorNone = {$: 'ColorNone'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainBand = function (a) {
	return {$: 'DomainBand', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainContinuous = function (a) {
	return {$: 'DomainContinuous', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainTime = function (a) {
	return {$: 'DomainTime', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Left = function (a) {
	return {$: 'Left', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Line = {$: 'Line'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$LinearScale = {$: 'LinearScale'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$NoColumnTitle = {$: 'NoColumnTitle'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$NoLabel = {$: 'NoLabel'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultHeight = 400;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$GroupedBar = {$: 'GroupedBar'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultLayout = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$GroupedBar;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultMargin = {bottom: 20, left: 30, right: 20, top: 1};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Vertical = {$: 'Vertical'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultOrientation = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Vertical;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultPadding = {bottom: 2, left: 2, right: 0, top: 0};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultWidth = 600;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$initialDomainBandStruct = {bandGroup: $elm$core$Maybe$Nothing, bandSingle: $elm$core$Maybe$Nothing, continuous: $elm$core$Maybe$Nothing};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$initialDomainContinuousStruct = {x: $elm$core$Maybe$Nothing, y: $elm$core$Maybe$Nothing};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$initialDomainTimeStruct = {x: $elm$core$Maybe$Nothing, y: $elm$core$Maybe$Nothing};
var $folkertdev$one_true_path_experiment$SubPath$Empty = {$: 'Empty'};
var $folkertdev$one_true_path_experiment$SubPath$empty = $folkertdev$one_true_path_experiment$SubPath$Empty;
var $folkertdev$one_true_path_experiment$LowLevel$Command$LineTo = function (a) {
	return {$: 'LineTo', a: a};
};
var $folkertdev$one_true_path_experiment$LowLevel$Command$lineTo = $folkertdev$one_true_path_experiment$LowLevel$Command$LineTo;
var $folkertdev$one_true_path_experiment$LowLevel$Command$MoveTo = function (a) {
	return {$: 'MoveTo', a: a};
};
var $folkertdev$one_true_path_experiment$LowLevel$Command$moveTo = $folkertdev$one_true_path_experiment$LowLevel$Command$MoveTo;
var $folkertdev$one_true_path_experiment$SubPath$SubPath = function (a) {
	return {$: 'SubPath', a: a};
};
var $folkertdev$elm_deque$Deque$Deque = function (a) {
	return {$: 'Deque', a: a};
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $folkertdev$elm_deque$Internal$rebalance = function (deque) {
	var sizeF = deque.sizeF;
	var sizeR = deque.sizeR;
	var front = deque.front;
	var rear = deque.rear;
	var size1 = ((sizeF + sizeR) / 2) | 0;
	var size2 = (sizeF + sizeR) - size1;
	var balanceConstant = 4;
	if ((sizeF + sizeR) < 2) {
		return deque;
	} else {
		if (_Utils_cmp(sizeF, (balanceConstant * sizeR) + 1) > 0) {
			var newRear = _Utils_ap(
				rear,
				$elm$core$List$reverse(
					A2($elm$core$List$drop, size1, front)));
			var newFront = A2($elm$core$List$take, size1, front);
			return {front: newFront, rear: newRear, sizeF: size1, sizeR: size2};
		} else {
			if (_Utils_cmp(sizeR, (balanceConstant * sizeF) + 1) > 0) {
				var newRear = A2($elm$core$List$take, size1, rear);
				var newFront = _Utils_ap(
					front,
					$elm$core$List$reverse(
						A2($elm$core$List$drop, size1, rear)));
				return {front: newFront, rear: newRear, sizeF: size1, sizeR: size2};
			} else {
				return deque;
			}
		}
	}
};
var $folkertdev$elm_deque$Internal$fromList = function (list) {
	return $folkertdev$elm_deque$Internal$rebalance(
		{
			front: list,
			rear: _List_Nil,
			sizeF: $elm$core$List$length(list),
			sizeR: 0
		});
};
var $folkertdev$elm_deque$Deque$fromList = A2($elm$core$Basics$composeL, $folkertdev$elm_deque$Deque$Deque, $folkertdev$elm_deque$Internal$fromList);
var $folkertdev$one_true_path_experiment$SubPath$with = F2(
	function (moveto, drawtos) {
		return $folkertdev$one_true_path_experiment$SubPath$SubPath(
			{
				drawtos: $folkertdev$elm_deque$Deque$fromList(drawtos),
				moveto: moveto
			});
	});
var $folkertdev$one_true_path_experiment$Curve$linear = function (points) {
	if (!points.b) {
		return $folkertdev$one_true_path_experiment$SubPath$empty;
	} else {
		var x = points.a;
		var xs = points.b;
		return A2(
			$folkertdev$one_true_path_experiment$SubPath$with,
			$folkertdev$one_true_path_experiment$LowLevel$Command$moveTo(x),
			_List_fromArray(
				[
					$folkertdev$one_true_path_experiment$LowLevel$Command$lineTo(xs)
				]));
	}
};
var $gampleman$elm_visualization$Shape$linearCurve = $folkertdev$one_true_path_experiment$Curve$linear;
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Config = function (a) {
	return {$: 'Config', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig = function (config) {
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Config(config);
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultConfig = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
	{
		accessibilityContent: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$AccessibilityTableNoLabels,
		annotations: _List_Nil,
		axisXBand: $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Bottom(_List_Nil),
		axisXContinuous: $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Bottom(_List_Nil),
		axisXTime: $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Bottom(_List_Nil),
		axisYContinuous: $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Left(_List_Nil),
		colorResource: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ColorNone,
		coreStyle: _List_Nil,
		coreStyleFromPointBandX: $elm$core$Basics$always(_List_Nil),
		curve: function (d) {
			return $gampleman$elm_visualization$Shape$linearCurve(d);
		},
		domainBand: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainBand($data_viz_lab$elm_chart_builder$Chart$Internal$Type$initialDomainBandStruct),
		domainContinuous: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainContinuous($data_viz_lab$elm_chart_builder$Chart$Internal$Type$initialDomainContinuousStruct),
		domainTime: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainTime($data_viz_lab$elm_chart_builder$Chart$Internal$Type$initialDomainTimeStruct),
		events: _List_Nil,
		height: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultHeight,
		histogramDomain: $elm$core$Maybe$Nothing,
		layout: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultLayout,
		lineDraw: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Line,
		margin: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultMargin,
		orientation: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultOrientation,
		padding: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultPadding,
		showColumnTitle: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$NoColumnTitle,
		showDataPoints: false,
		showGroupLabels: false,
		showLabels: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$NoLabel,
		showXAxis: true,
		showYAxis: true,
		svgDesc: '',
		svgTitle: '',
		symbols: _List_Nil,
		tableFloatFormat: $elm$core$String$fromFloat,
		tablePosixFormat: A2($elm$core$Basics$composeR, $elm$time$Time$posixToMillis, $elm$core$String$fromInt),
		width: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultWidth,
		yScale: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$LinearScale,
		zone: $elm$time$Time$utc
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setDimensions = F2(
	function (_v0, _v1) {
		var margin = _v0.margin;
		var width = _v0.width;
		var height = _v0.height;
		var c = _v1.a;
		var top = margin.top + c.padding.top;
		var right = margin.right + c.padding.right;
		var left = margin.left + c.padding.left;
		var bottom = margin.bottom + c.padding.bottom;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{height: (height - top) - bottom, margin: margin, width: (width - left) - right}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Bar$init = function (c) {
	return A2(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$setDimensions,
		{height: c.height, margin: c.margin, width: c.width},
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultConfig);
};
var $author$project$Helpers$marginWithLabel = {bottom: 20, left: 60, right: 125, top: 10};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DataBand = function (a) {
	return {$: 'DataBand', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromExternalData = function (_v0) {
	var data = _v0.a;
	return data;
};
var $elm_community$list_extra$List$Extra$groupWhile = F2(
	function (isSameGroup, items) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					if (!acc.b) {
						return _List_fromArray(
							[
								_Utils_Tuple2(x, _List_Nil)
							]);
					} else {
						var _v1 = acc.a;
						var y = _v1.a;
						var restOfGroup = _v1.b;
						var groups = acc.b;
						return A2(isSameGroup, x, y) ? A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								x,
								A2($elm$core$List$cons, y, restOfGroup)),
							groups) : A2(
							$elm$core$List$cons,
							_Utils_Tuple2(x, _List_Nil),
							acc);
					}
				}),
			_List_Nil,
			items);
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$List$sortWith = _List_sortWith;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$sortStrings = F2(
	function (accessor, strings) {
		return A2(
			$elm$core$List$sortWith,
			F2(
				function (a_, b_) {
					var b = accessor(b_);
					var a = accessor(a_);
					var _v0 = _Utils_Tuple2(
						$elm$core$String$toFloat(a),
						$elm$core$String$toFloat(b));
					if ((_v0.a.$ === 'Just') && (_v0.b.$ === 'Just')) {
						var floatA = _v0.a.a;
						var floatB = _v0.b.a;
						return A2($elm$core$Basics$compare, floatA, floatB);
					} else {
						return A2($elm$core$Basics$compare, a, b);
					}
				}),
			strings);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$externalToDataBand = F2(
	function (externalData, accessor) {
		var data = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromExternalData(externalData);
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DataBand(
			A2(
				$elm$core$List$map,
				function (d) {
					var groupLabel = accessor.xGroup(d.a);
					var firstPoint = function (p) {
						return _Utils_Tuple2(
							accessor.xValue(p),
							accessor.yValue(p));
					}(d.a);
					var points = A2(
						$elm$core$List$cons,
						firstPoint,
						A2(
							$elm$core$List$map,
							function (p) {
								return _Utils_Tuple2(
									accessor.xValue(p),
									accessor.yValue(p));
							},
							d.b));
					return {groupLabel: groupLabel, points: points};
				},
				A2(
					$elm_community$list_extra$List$Extra$groupWhile,
					F2(
						function (a, b) {
							return _Utils_eq(
								accessor.xGroup(a),
								accessor.xGroup(b));
						}),
					A2(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$sortStrings,
						A2(
							$elm$core$Basics$composeR,
							accessor.xGroup,
							$elm$core$Maybe$withDefault('')),
						data))));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig = function (_v0) {
	var config = _v0.a;
	return config;
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$RenderChart = {$: 'RenderChart'};
var $elm_community$typed_svg$TypedSvg$Types$Translate = F2(
	function (a, b) {
		return {$: 'Translate', a: a, b: b};
	});
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaHidden = A2($elm$html$Html$Attributes$attribute, 'aria-hidden', 'true');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledby = function (label) {
	return A2($elm$html$Html$Attributes$attribute, 'aria-labelledby', label);
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledbyContent = function (c) {
	var _v0 = c.accessibilityContent;
	if (_v0.$ === 'AccessibilityNone') {
		return ((c.svgDesc !== '') && (c.svgTitle !== '')) ? _List_fromArray(
			[
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledby(c.svgDesc + (' ' + c.svgTitle))
			]) : ((c.svgDesc !== '') ? _List_fromArray(
			[
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledby(c.svgDesc)
			]) : ((c.svgTitle !== '') ? _List_fromArray(
			[
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledby(c.svgTitle)
			]) : _List_Nil));
	} else {
		return _List_fromArray(
			[$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaHidden]);
	}
};
var $gampleman$elm_visualization$Scale$Scale = function (a) {
	return {$: 'Scale', a: a};
};
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $gampleman$elm_visualization$Scale$Band$normalizeConfig = function (_v0) {
	var paddingInner = _v0.paddingInner;
	var paddingOuter = _v0.paddingOuter;
	var align = _v0.align;
	return {
		align: A3($elm$core$Basics$clamp, 0, 1, align),
		paddingInner: A3($elm$core$Basics$clamp, 0, 1, paddingInner),
		paddingOuter: A3($elm$core$Basics$clamp, 0, 1, paddingOuter)
	};
};
var $gampleman$elm_visualization$Scale$Band$bandwidth = F3(
	function (cfg, domain, _v0) {
		var d0 = _v0.a;
		var d1 = _v0.b;
		var n = $elm$core$List$length(domain);
		var _v1 = (_Utils_cmp(d0, d1) < 0) ? _Utils_Tuple2(d0, d1) : _Utils_Tuple2(d1, d0);
		var start = _v1.a;
		var stop = _v1.b;
		var _v2 = $gampleman$elm_visualization$Scale$Band$normalizeConfig(cfg);
		var paddingInner = _v2.paddingInner;
		var paddingOuter = _v2.paddingOuter;
		var step = (stop - start) / A2($elm$core$Basics$max, 1, (n - paddingInner) + (paddingOuter * 2));
		return step * (1 - paddingInner);
	});
var $gampleman$elm_visualization$Scale$Band$computePositions = F3(
	function (cfg, n, _v0) {
		var start = _v0.a;
		var stop = _v0.b;
		var _v1 = $gampleman$elm_visualization$Scale$Band$normalizeConfig(cfg);
		var paddingInner = _v1.paddingInner;
		var paddingOuter = _v1.paddingOuter;
		var align = _v1.align;
		var step = (stop - start) / A2($elm$core$Basics$max, 1, (n - paddingInner) + (paddingOuter * 2));
		var start2 = start + (((stop - start) - (step * (n - paddingInner))) * align);
		return _Utils_Tuple2(start2, step);
	});
var $gampleman$elm_visualization$Scale$Band$indexOfHelp = F3(
	function (index, value, list) {
		indexOfHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (_Utils_eq(value, x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$value = value,
						$temp$list = xs;
					index = $temp$index;
					value = $temp$value;
					list = $temp$list;
					continue indexOfHelp;
				}
			}
		}
	});
var $gampleman$elm_visualization$Scale$Band$indexOf = $gampleman$elm_visualization$Scale$Band$indexOfHelp(0);
var $gampleman$elm_visualization$Scale$Band$convert = F4(
	function (cfg, domain, _v0, value) {
		var start = _v0.a;
		var stop = _v0.b;
		var _v1 = A2($gampleman$elm_visualization$Scale$Band$indexOf, value, domain);
		if (_v1.$ === 'Just') {
			var index = _v1.a;
			var n = $elm$core$List$length(domain);
			if (_Utils_cmp(start, stop) < 0) {
				var _v2 = A3(
					$gampleman$elm_visualization$Scale$Band$computePositions,
					cfg,
					n,
					_Utils_Tuple2(start, stop));
				var start2 = _v2.a;
				var step = _v2.b;
				return start2 + (step * index);
			} else {
				var _v3 = A3(
					$gampleman$elm_visualization$Scale$Band$computePositions,
					cfg,
					n,
					_Utils_Tuple2(stop, start));
				var stop2 = _v3.a;
				var step = _v3.b;
				return stop2 + (step * ((n - index) - 1));
			}
		} else {
			return 0 / 0;
		}
	});
var $gampleman$elm_visualization$Scale$band = F3(
	function (config, range_, domain_) {
		return $gampleman$elm_visualization$Scale$Scale(
			{
				bandwidth: A3($gampleman$elm_visualization$Scale$Band$bandwidth, config, domain_, range_),
				convert: $gampleman$elm_visualization$Scale$Band$convert(config),
				domain: domain_,
				range: range_
			});
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName = 'ecb-axis';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName = 'ecb-axis-x';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName = 'ecb-axis-y';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYRightClassName = 'ecb-axis-y-right';
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $gampleman$elm_visualization$Scale$tickFormat = function (_v0) {
	var opts = _v0.a;
	return opts.tickFormat(opts.domain);
};
var $gampleman$elm_visualization$Scale$ticks = F2(
	function (_v0, count) {
		var scale = _v0.a;
		return A2(scale.ticks, scale.domain, count);
	});
var $gampleman$elm_visualization$Axis$computeOptions = F2(
	function (attrs, scale) {
		var _v0 = A3(
			$elm$core$List$foldl,
			F2(
				function (attr, _v1) {
					var babyOpts = _v1.a;
					var post = _v1.b;
					switch (attr.$) {
						case 'TickCount':
							var val = attr.a;
							return _Utils_Tuple2(
								_Utils_update(
									babyOpts,
									{tickCount: val}),
								post);
						case 'TickSizeInner':
							var val = attr.a;
							return _Utils_Tuple2(
								_Utils_update(
									babyOpts,
									{tickSizeInner: val}),
								post);
						case 'TickSizeOuter':
							var val = attr.a;
							return _Utils_Tuple2(
								_Utils_update(
									babyOpts,
									{tickSizeOuter: val}),
								post);
						case 'TickPadding':
							var val = attr.a;
							return _Utils_Tuple2(
								_Utils_update(
									babyOpts,
									{tickPadding: val}),
								post);
						default:
							return _Utils_Tuple2(
								babyOpts,
								A2($elm$core$List$cons, attr, post));
					}
				}),
			_Utils_Tuple2(
				{tickCount: 10, tickPadding: 3, tickSizeInner: 6, tickSizeOuter: 6},
				_List_Nil),
			attrs);
		var opts = _v0.a;
		var postList = _v0.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (attr, options) {
					switch (attr.$) {
						case 'Ticks':
							var val = attr.a;
							return _Utils_update(
								options,
								{ticks: val});
						case 'TickFormat':
							var val = attr.a;
							return _Utils_update(
								options,
								{tickFormat: val});
						default:
							return options;
					}
				}),
			{
				tickCount: opts.tickCount,
				tickFormat: A2($gampleman$elm_visualization$Scale$tickFormat, scale, opts.tickCount),
				tickPadding: opts.tickPadding,
				tickSizeInner: opts.tickSizeInner,
				tickSizeOuter: opts.tickSizeOuter,
				ticks: A2($gampleman$elm_visualization$Scale$ticks, scale, opts.tickCount)
			},
			postList);
	});
var $gampleman$elm_visualization$Scale$convert = F2(
	function (_v0, value) {
		var scale = _v0.a;
		return A3(scale.convert, scale.domain, scale.range, value);
	});
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$Attributes$dy = _VirtualDom_attribute('dy');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$fontFamily = _VirtualDom_attribute('font-family');
var $elm$svg$Svg$Attributes$fontSize = _VirtualDom_attribute('font-size');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $elm$svg$Svg$line = $elm$svg$Svg$trustedNode('line');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $gampleman$elm_visualization$Scale$rangeExtent = function (_v0) {
	var options = _v0.a;
	return A2(options.rangeExtent, options.domain, options.range);
};
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $elm$svg$Svg$Attributes$textAnchor = _VirtualDom_attribute('text-anchor');
var $elm$svg$Svg$text_ = $elm$svg$Svg$trustedNode('text');
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $gampleman$elm_visualization$Axis$element = F4(
	function (_v0, k, displacement, textAnchorPosition) {
		var x = _v0.x;
		var y = _v0.y;
		var x1 = _v0.x1;
		var x2 = _v0.x2;
		var y1 = _v0.y1;
		var y2 = _v0.y2;
		var translate = _v0.translate;
		var horizontal = _v0.horizontal;
		return F2(
			function (attrs, scale) {
				var rangeExtent = $gampleman$elm_visualization$Scale$rangeExtent(scale);
				var range1 = rangeExtent.b + 0.5;
				var range0 = rangeExtent.a + 0.5;
				var position = $gampleman$elm_visualization$Scale$convert(scale);
				var opts = A2($gampleman$elm_visualization$Axis$computeOptions, attrs, scale);
				var spacing = A2($elm$core$Basics$max, opts.tickSizeInner, 0) + opts.tickPadding;
				var drawTick = function (tick) {
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$class('tick'),
								$elm$svg$Svg$Attributes$transform(
								translate(
									position(tick)))
							]),
						_List_fromArray(
							[
								A2(
								$elm$svg$Svg$line,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$stroke('#000'),
										x2(k * opts.tickSizeInner),
										y1(0.5),
										y2(0.5)
									]),
								_List_Nil),
								A2(
								$elm$svg$Svg$text_,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$fill('#000'),
										x(k * spacing),
										y(0.5),
										$elm$svg$Svg$Attributes$dy(displacement)
									]),
								_List_fromArray(
									[
										$elm$svg$Svg$text(
										opts.tickFormat(tick))
									]))
							]));
				};
				var domainLine = horizontal ? ('M' + ($elm$core$String$fromFloat(k * opts.tickSizeOuter) + (',' + ($elm$core$String$fromFloat(range0) + ('H0.5V' + ($elm$core$String$fromFloat(range1) + ('H' + $elm$core$String$fromFloat(k * opts.tickSizeOuter)))))))) : ('M' + ($elm$core$String$fromFloat(range0) + (',' + ($elm$core$String$fromFloat(k * opts.tickSizeOuter) + ('V0.5H' + ($elm$core$String$fromFloat(range1) + ('V' + $elm$core$String$fromFloat(k * opts.tickSizeOuter))))))));
				return A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('none'),
							$elm$svg$Svg$Attributes$fontSize('10'),
							$elm$svg$Svg$Attributes$fontFamily('sans-serif'),
							$elm$svg$Svg$Attributes$textAnchor(textAnchorPosition)
						]),
					A2(
						$elm$core$List$cons,
						A2(
							$elm$svg$Svg$path,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$class('domain'),
									$elm$svg$Svg$Attributes$stroke('#000'),
									$elm$svg$Svg$Attributes$d(domainLine)
								]),
							_List_Nil),
						A2($elm$core$List$map, drawTick, opts.ticks)));
			});
	});
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute('x1');
var $elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute('y1');
var $elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
var $gampleman$elm_visualization$Axis$verticalAttrs = {
	horizontal: false,
	translate: function (x) {
		return 'translate(' + ($elm$core$String$fromFloat(x) + ', 0)');
	},
	x: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$y, $elm$core$String$fromFloat),
	x1: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$y1, $elm$core$String$fromFloat),
	x2: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$y2, $elm$core$String$fromFloat),
	y: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$x, $elm$core$String$fromFloat),
	y1: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$x1, $elm$core$String$fromFloat),
	y2: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$x2, $elm$core$String$fromFloat)
};
var $gampleman$elm_visualization$Axis$bottom = A4($gampleman$elm_visualization$Axis$element, $gampleman$elm_visualization$Axis$verticalAttrs, 1, '0.71em', 'middle');
var $elm_community$typed_svg$TypedSvg$Core$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm_community$typed_svg$TypedSvg$Attributes$class = function (names) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'class',
		A2($elm$core$String$join, ' ', names));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName = 'ecb-component';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$floorFloat = function (f) {
	return $elm$core$Basics$floor(f);
};
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $elm_community$typed_svg$TypedSvg$Core$node = $elm$virtual_dom$VirtualDom$nodeNS('http://www.w3.org/2000/svg');
var $elm_community$typed_svg$TypedSvg$g = $elm_community$typed_svg$TypedSvg$Core$node('g');
var $gampleman$elm_visualization$Axis$horizontalAttrs = {
	horizontal: true,
	translate: function (y) {
		return 'translate(0, ' + ($elm$core$String$fromFloat(y) + ')');
	},
	x: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$x, $elm$core$String$fromFloat),
	x1: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$x1, $elm$core$String$fromFloat),
	x2: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$x2, $elm$core$String$fromFloat),
	y: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$y, $elm$core$String$fromFloat),
	y1: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$y1, $elm$core$String$fromFloat),
	y2: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$y2, $elm$core$String$fromFloat)
};
var $gampleman$elm_visualization$Axis$left = A4($gampleman$elm_visualization$Axis$element, $gampleman$elm_visualization$Axis$horizontalAttrs, -1, '0.32em', 'end');
var $gampleman$elm_visualization$Axis$right = A4($gampleman$elm_visualization$Axis$element, $gampleman$elm_visualization$Axis$horizontalAttrs, 1, '0.32em', 'start');
var $gampleman$elm_visualization$Axis$TickPadding = function (a) {
	return {$: 'TickPadding', a: a};
};
var $gampleman$elm_visualization$Axis$tickPadding = $gampleman$elm_visualization$Axis$TickPadding;
var $gampleman$elm_visualization$Axis$TickSizeInner = function (a) {
	return {$: 'TickSizeInner', a: a};
};
var $gampleman$elm_visualization$Axis$tickSizeInner = $gampleman$elm_visualization$Axis$TickSizeInner;
var $gampleman$elm_visualization$Axis$TickSizeOuter = function (a) {
	return {$: 'TickSizeOuter', a: a};
};
var $gampleman$elm_visualization$Axis$tickSizeOuter = $gampleman$elm_visualization$Axis$TickSizeOuter;
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm_community$typed_svg$TypedSvg$TypesToStrings$transformToString = function (xform) {
	var tr = F2(
		function (name, args) {
			return $elm$core$String$concat(
				_List_fromArray(
					[
						name,
						'(',
						A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, $elm$core$String$fromFloat, args)),
						')'
					]));
		});
	switch (xform.$) {
		case 'Matrix':
			var a = xform.a;
			var b = xform.b;
			var c = xform.c;
			var d = xform.d;
			var e = xform.e;
			var f = xform.f;
			return A2(
				tr,
				'matrix',
				_List_fromArray(
					[a, b, c, d, e, f]));
		case 'Rotate':
			var a = xform.a;
			var x = xform.b;
			var y = xform.c;
			return A2(
				tr,
				'rotate',
				_List_fromArray(
					[a, x, y]));
		case 'Scale':
			var x = xform.a;
			var y = xform.b;
			return A2(
				tr,
				'scale',
				_List_fromArray(
					[x, y]));
		case 'SkewX':
			var x = xform.a;
			return A2(
				tr,
				'skewX',
				_List_fromArray(
					[x]));
		case 'SkewY':
			var y = xform.a;
			return A2(
				tr,
				'skewY',
				_List_fromArray(
					[y]));
		default:
			var x = xform.a;
			var y = xform.b;
			return A2(
				tr,
				'translate',
				_List_fromArray(
					[x, y]));
	}
};
var $elm_community$typed_svg$TypedSvg$Attributes$transform = function (transforms) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'transform',
		A2(
			$elm$core$String$join,
			' ',
			A2($elm$core$List$map, $elm_community$typed_svg$TypedSvg$TypesToStrings$transformToString, transforms)));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$bandGroupedYAxis = F3(
	function (c, iconOffset, continuousScale) {
		var p = c.padding;
		var m = c.margin;
		if (c.showYAxis) {
			var _v0 = _Utils_Tuple2(c.orientation, c.axisYContinuous);
			if (_v0.a.$ === 'Vertical') {
				switch (_v0.b.$) {
					case 'Left':
						var _v1 = _v0.a;
						var attributes = _v0.b.a;
						return _List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2(
												$elm_community$typed_svg$TypedSvg$Types$Translate,
												$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$floorFloat(m.left),
												iconOffset + m.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$left, attributes, continuousScale)
									]))
							]);
					case 'Right':
						var _v2 = _v0.a;
						var attributes = _v0.b.a;
						return _List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, (c.width + c.margin.left) + c.padding.left, iconOffset + c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$right, attributes, continuousScale)
									]))
							]);
					default:
						var _v3 = _v0.a;
						var attributes = _v0.b.a;
						var rightAttrs = _Utils_ap(
							attributes,
							_List_fromArray(
								[
									$gampleman$elm_visualization$Axis$tickSizeInner(c.width),
									$gampleman$elm_visualization$Axis$tickPadding(c.margin.right + c.margin.left),
									$gampleman$elm_visualization$Axis$tickSizeOuter(0)
								]));
						var leftAttrs = _Utils_ap(
							attributes,
							_List_fromArray(
								[
									$gampleman$elm_visualization$Axis$tickSizeInner(0)
								]));
						return _List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left - c.padding.left, iconOffset + c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$left, leftAttrs, continuousScale)
									])),
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left - c.padding.left, c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYRightClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$right, rightAttrs, continuousScale)
									]))
							]);
				}
			} else {
				switch (_v0.b.$) {
					case 'Left':
						var _v4 = _v0.a;
						var attributes = _v0.b.a;
						return _List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left, (c.height + c.padding.bottom) + c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$bottom, attributes, continuousScale)
									]))
							]);
					case 'Right':
						var _v5 = _v0.a;
						var attributes = _v0.b.a;
						return _List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left, (c.height + c.padding.bottom) + c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$bottom, attributes, continuousScale)
									]))
							]);
					default:
						var _v6 = _v0.a;
						var attributes = _v0.b.a;
						var topAttrs = _Utils_ap(
							attributes,
							_List_fromArray(
								[
									$gampleman$elm_visualization$Axis$tickSizeInner(c.height),
									$gampleman$elm_visualization$Axis$tickSizeOuter(0),
									$gampleman$elm_visualization$Axis$tickPadding(c.margin.top + c.margin.bottom)
								]));
						var bottomAttrs = _Utils_ap(
							attributes,
							_List_fromArray(
								[
									$gampleman$elm_visualization$Axis$tickSizeInner(0)
								]));
						return _List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left, (c.height + c.padding.bottom) + c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$bottom, bottomAttrs, continuousScale)
									])),
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left, c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYRightClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$bottom, topAttrs, continuousScale)
									]))
							]);
				}
			}
		} else {
			return _List_Nil;
		}
	});
var $gampleman$elm_visualization$Scale$toRenderable = F2(
	function (toString, _v0) {
		var scale = _v0.a;
		return $gampleman$elm_visualization$Scale$Scale(
			{
				convert: F3(
					function (dmn, rng, value) {
						return A3(scale.convert, dmn, rng, value) + (A2($elm$core$Basics$max, scale.bandwidth - 1, 0) / 2);
					}),
				domain: scale.domain,
				range: scale.range,
				rangeExtent: F2(
					function (_v1, rng) {
						return rng;
					}),
				tickFormat: F2(
					function (_v2, _v3) {
						return toString;
					}),
				ticks: F2(
					function (dmn, _v4) {
						return dmn;
					})
			});
	});
var $gampleman$elm_visualization$Axis$top = A4($gampleman$elm_visualization$Axis$element, $gampleman$elm_visualization$Axis$verticalAttrs, -1, '0em', 'middle');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$bandXAxis = F2(
	function (c, bandScale) {
		var p = c.padding;
		var m = c.margin;
		if (c.showXAxis) {
			var _v0 = _Utils_Tuple2(c.orientation, c.axisXBand);
			if (_v0.a.$ === 'Vertical') {
				if (_v0.b.$ === 'Bottom') {
					var _v1 = _v0.a;
					var attributes = _v0.b.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, m.left + p.left, ((m.top + p.top) + c.height) + p.bottom)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2(
									$gampleman$elm_visualization$Axis$bottom,
									attributes,
									A2($gampleman$elm_visualization$Scale$toRenderable, $elm$core$Basics$identity, bandScale))
								]))
						]);
				} else {
					var _v2 = _v0.a;
					var attributes = _v0.b.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, m.left + p.left, m.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2(
									$gampleman$elm_visualization$Axis$top,
									attributes,
									A2($gampleman$elm_visualization$Scale$toRenderable, $elm$core$Basics$identity, bandScale))
								]))
						]);
				}
			} else {
				if (_v0.b.$ === 'Bottom') {
					var _v3 = _v0.a;
					var attributes = _v0.b.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, m.left - p.left, m.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2(
									$gampleman$elm_visualization$Axis$left,
									attributes,
									A2($gampleman$elm_visualization$Scale$toRenderable, $elm$core$Basics$identity, bandScale))
								]))
						]);
				} else {
					var _v4 = _v0.a;
					var attributes = _v0.b.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, m.left - p.left, m.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2(
									$gampleman$elm_visualization$Axis$right,
									attributes,
									A2($gampleman$elm_visualization$Scale$toRenderable, $elm$core$Basics$identity, bandScale))
								]))
						]);
				}
			}
		} else {
			return _List_Nil;
		}
	});
var $gampleman$elm_visualization$Scale$bandwidth = function (_v0) {
	var scale = _v0.a;
	return scale.bandwidth;
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$barClassName = 'ecb-bar';
var $gampleman$elm_visualization$Scale$clamp = function (_v0) {
	var scale = _v0.a;
	var convert_ = F3(
		function (_v1, range_, value) {
			var mi = _v1.a;
			var ma = _v1.b;
			return A3(
				scale.convert,
				_Utils_Tuple2(mi, ma),
				range_,
				A3(
					$elm$core$Basics$clamp,
					A2($elm$core$Basics$min, mi, ma),
					A2($elm$core$Basics$max, mi, ma),
					value));
		});
	return $gampleman$elm_visualization$Scale$Scale(
		_Utils_update(
			scale,
			{convert: convert_}));
};
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName = 'ecb-column';
var $elm_community$typed_svg$TypedSvg$Types$RenderCrispEdges = {$: 'RenderCrispEdges'};
var $elm$core$Basics$modBy = _Basics_modBy;
var $avh4$elm_color$Color$toCssString = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	var roundTo = function (x) {
		return $elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return $elm$core$Basics$round(x * 10000) / 100;
	};
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				$elm$core$String$fromFloat(
				pct(r)),
				'%,',
				$elm$core$String$fromFloat(
				pct(g)),
				'%,',
				$elm$core$String$fromFloat(
				pct(b)),
				'%,',
				$elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var $avh4$elm_color$Color$white = A4($avh4$elm_color$Color$RgbaSpace, 255 / 255, 255 / 255, 255 / 255, 1.0);
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$colorPaletteToColor = F2(
	function (palette, idx) {
		var moduleIndex = A2(
			$elm$core$Basics$modBy,
			$elm$core$List$length(palette),
			idx);
		return $avh4$elm_color$Color$toCssString(
			A2(
				$elm$core$Maybe$withDefault,
				$avh4$elm_color$Color$white,
				$elm$core$List$head(
					A2($elm$core$List$drop, moduleIndex, palette))));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorStyle = F3(
	function (c, idx, interpolatorInput) {
		var _v0 = _Utils_Tuple3(c.colorResource, idx, interpolatorInput);
		_v0$3:
		while (true) {
			switch (_v0.a.$) {
				case 'ColorPalette':
					if (_v0.b.$ === 'Just') {
						var colors = _v0.a.a;
						var i = _v0.b.a;
						return 'fill: ' + (A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$colorPaletteToColor, colors, i) + (';stroke: ' + A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$colorPaletteToColor, colors, i)));
					} else {
						break _v0$3;
					}
				case 'ColorInterpolator':
					if (_v0.c.$ === 'Just') {
						var interpolator = _v0.a.a;
						var i = _v0.c.a;
						return 'fill: ' + ($avh4$elm_color$Color$toCssString(
							interpolator(i)) + (';stroke: ' + $avh4$elm_color$Color$toCssString(
							interpolator(i))));
					} else {
						break _v0$3;
					}
				case 'Color':
					if ((_v0.b.$ === 'Nothing') && (_v0.c.$ === 'Nothing')) {
						var color = _v0.a.a;
						var _v1 = _v0.b;
						var _v2 = _v0.c;
						return 'fill: ' + ($avh4$elm_color$Color$toCssString(color) + (';stroke: ' + $avh4$elm_color$Color$toCssString(color)));
					} else {
						break _v0$3;
					}
				default:
					break _v0$3;
			}
		}
		return 'stroke:grey';
	});
var $elm_community$typed_svg$TypedSvg$Core$text = $elm$virtual_dom$VirtualDom$text;
var $elm_community$typed_svg$TypedSvg$title = $elm_community$typed_svg$TypedSvg$Core$node('title');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$columnTitleText = F2(
	function (config, point) {
		var _v0 = point;
		var xVal = _v0.a;
		var yVal = _v0.b;
		var _v1 = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).showColumnTitle;
		switch (_v1.$) {
			case 'YColumnTitle':
				var formatter = _v1.a;
				return _List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$title,
						_List_Nil,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(
								formatter(yVal))
							]))
					]);
			case 'XOrdinalColumnTitle':
				return _List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$title,
						_List_Nil,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(xVal)
							]))
					]);
			default:
				return _List_Nil;
		}
	});
var $elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString = function (length) {
	switch (length.$) {
		case 'Cm':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'cm';
		case 'Em':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'em';
		case 'Ex':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'ex';
		case 'In':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'in';
		case 'Mm':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'mm';
		case 'Num':
			var x = length.a;
			return $elm$core$String$fromFloat(x);
		case 'Pc':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'pc';
		case 'Percent':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + '%';
		case 'Pt':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'pt';
		default:
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'px';
	}
};
var $elm_community$typed_svg$TypedSvg$Attributes$height = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'height',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Types$Px = function (a) {
	return {$: 'Px', a: a};
};
var $elm_community$typed_svg$TypedSvg$Types$px = $elm_community$typed_svg$TypedSvg$Types$Px;
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$height = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$height(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $elm_community$typed_svg$TypedSvg$Types$AnchorStart = {$: 'AnchorStart'};
var $elm_community$typed_svg$TypedSvg$Types$DominantBaselineMiddle = {$: 'DominantBaselineMiddle'};
var $elm_community$typed_svg$TypedSvg$TypesToStrings$dominantBaselineToString = function (dominantBaseline) {
	switch (dominantBaseline.$) {
		case 'DominantBaselineAuto':
			return 'auto';
		case 'DominantBaselineUseScript':
			return 'use-script';
		case 'DominantBaselineNoChange':
			return 'no-change';
		case 'DominantBaselineResetSize':
			return 'reset-size';
		case 'DominantBaselineIdeographic':
			return 'ideographic';
		case 'DominantBaselineAlphabetic':
			return 'alphabetic';
		case 'DominantBaselineHanging':
			return 'hanging';
		case 'DominantBaselineMathematical':
			return 'mathematical';
		case 'DominantBaselineCentral':
			return 'central';
		case 'DominantBaselineMiddle':
			return 'middle';
		case 'DominantBaselineTextAfterEdge':
			return 'text-after-edge';
		case 'DominantBaselineTextBeforeEdge':
			return 'text-before-edge';
		default:
			return 'inherit';
	}
};
var $elm_community$typed_svg$TypedSvg$Attributes$dominantBaseline = function (baseline) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'dominant-baseline',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$dominantBaselineToString(baseline));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$labelClassName = 'ecb-label';
var $elm_community$typed_svg$TypedSvg$TypesToStrings$anchorAlignmentToString = function (anchorAlignment) {
	switch (anchorAlignment.$) {
		case 'AnchorInherit':
			return 'inherit';
		case 'AnchorStart':
			return 'start';
		case 'AnchorMiddle':
			return 'middle';
		default:
			return 'end';
	}
};
var $elm_community$typed_svg$TypedSvg$Attributes$textAnchor = function (anchorAlignment) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'text-anchor',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$anchorAlignmentToString(anchorAlignment));
};
var $elm_community$typed_svg$TypedSvg$text_ = $elm_community$typed_svg$TypedSvg$Core$node('text');
var $elm_community$typed_svg$TypedSvg$Attributes$x = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'x',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$x = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$x(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $elm_community$typed_svg$TypedSvg$Attributes$y = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'y',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$y = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$y(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalLabel = F4(
	function (config, xPos, yPos, point) {
		var txt = $elm_community$typed_svg$TypedSvg$text_(
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(yPos),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(xPos),
					$elm_community$typed_svg$TypedSvg$Attributes$textAnchor($elm_community$typed_svg$TypedSvg$Types$AnchorStart),
					$elm_community$typed_svg$TypedSvg$Attributes$dominantBaseline($elm_community$typed_svg$TypedSvg$Types$DominantBaselineMiddle),
					$elm_community$typed_svg$TypedSvg$Attributes$class(
					_List_fromArray(
						[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$labelClassName]))
				]));
		var _v0 = point;
		var xVal = _v0.a;
		var yVal = _v0.b;
		var _v1 = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).showLabels;
		switch (_v1.$) {
			case 'YLabel':
				var formatter = _v1.a;
				return _List_fromArray(
					[
						txt(
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(
								formatter(yVal))
							]))
					]);
			case 'XOrdinalLabel':
				return _List_fromArray(
					[
						txt(
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(xVal)
							]))
					]);
			default:
				return _List_Nil;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$NoSymbol = {$: 'NoSymbol'};
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$getSymbolByIndex = F2(
	function (all, idx) {
		return ($elm$core$List$length(all) > 0) ? A2(
			$elm$core$Maybe$withDefault,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$NoSymbol,
			A2(
				$elm_community$list_extra$List$Extra$getAt,
				A2(
					$elm$core$Basics$modBy,
					$elm$core$List$length(all),
					idx),
				all)) : $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$NoSymbol;
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles = F2(
	function (_new, existing) {
		return A2(
			$elm$core$String$join,
			';',
			A3(
				$elm$core$List$foldl,
				F2(
					function (newTuple, existingStrings) {
						var newString = newTuple.a + (':' + newTuple.b);
						var existingString = A2($elm$core$String$join, ';', existingStrings);
						return A2($elm$core$String$contains, newTuple.a, existingString) ? A2(
							$elm$core$List$cons,
							newString,
							A2(
								$elm$core$List$filter,
								function (s) {
									return function (v) {
										return !_Utils_eq(v, newTuple.a);
									}(
										A2(
											$elm$core$Maybe$withDefault,
											'',
											$elm$core$List$head(
												A2($elm$core$String$split, ':', s))));
								},
								existingStrings)) : A2($elm$core$List$cons, newString, existingStrings);
					}),
				A2($elm$core$String$split, ';', existing),
				_new));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons = function (_v0) {
	var c = _v0.a;
	return function (l) {
		return l > 0;
	}(
		$elm$core$List$length(c.symbols));
};
var $elm_community$typed_svg$TypedSvg$Attributes$style = function (value) {
	return A2($elm_community$typed_svg$TypedSvg$Core$attribute, 'style', value);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName = 'ecb-symbol';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap = 2.0;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolToId = function (symbol) {
	switch (symbol.$) {
		case 'Circle':
			var identifier = symbol.a.identifier;
			return identifier;
		case 'Custom':
			var identifier = symbol.a.identifier;
			return identifier;
		case 'Corner':
			var identifier = symbol.a.identifier;
			return identifier;
		case 'Triangle':
			var identifier = symbol.a.identifier;
			return identifier;
		default:
			return '';
	}
};
var $elm_community$typed_svg$TypedSvg$use = $elm_community$typed_svg$TypedSvg$Core$node('use');
var $elm$virtual_dom$VirtualDom$attributeNS = F3(
	function (namespace, key, value) {
		return A3(
			_VirtualDom_attributeNS,
			namespace,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm_community$typed_svg$TypedSvg$Core$attributeNS = $elm$virtual_dom$VirtualDom$attributeNS;
var $elm_community$typed_svg$TypedSvg$Attributes$xlinkHref = A2($elm_community$typed_svg$TypedSvg$Core$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:href');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalSymbol = F2(
	function (config, _v0) {
		var idx = _v0.idx;
		var w = _v0.w;
		var y_ = _v0.y_;
		var styleStr = _v0.styleStr;
		var symbol = A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$getSymbolByIndex,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).symbols,
			idx);
		var symbolRef = _List_fromArray(
			[
				A2(
				$elm_community$typed_svg$TypedSvg$use,
				_List_fromArray(
					[
						$elm_community$typed_svg$TypedSvg$Attributes$xlinkHref(
						'#' + $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolToId(symbol))
					]),
				_List_Nil)
			]);
		var st = function (styles) {
			return $elm_community$typed_svg$TypedSvg$Attributes$style(
				A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles, styles, styleStr));
		};
		if ($data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons(config)) {
			switch (symbol.$) {
				case 'Triangle':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, w + $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap, y_)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				case 'Circle':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, w + $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap, y_)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				case 'Corner':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, w + $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap, y_)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				case 'Custom':
					var c = symbol.a;
					var gap = c.useGap ? $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap : 0;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, w + gap, y_)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				default:
					return _List_Nil;
			}
		} else {
			return _List_Nil;
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$labelGap = 2;
var $elm_community$typed_svg$TypedSvg$rect = $elm_community$typed_svg$TypedSvg$Core$node('rect');
var $elm_community$typed_svg$TypedSvg$TypesToStrings$shapeRenderingToString = function (shapeRendering) {
	switch (shapeRendering.$) {
		case 'RenderAuto':
			return 'auto';
		case 'RenderOptimizeSpeed':
			return 'optimizeSpeed';
		case 'RenderCrispEdges':
			return 'crispEdges';
		case 'RenderGeometricPrecision':
			return 'geometricPrecision';
		default:
			return 'inherit';
	}
};
var $elm_community$typed_svg$TypedSvg$Attributes$shapeRendering = function (rendering) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'shape-rendering',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$shapeRenderingToString(rendering));
};
var $elm_community$typed_svg$TypedSvg$Attributes$width = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'width',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$width = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$width(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalRect = F6(
	function (config, bandSingleScale, continuousScale, colorScale, idx, point) {
		var h = $gampleman$elm_visualization$Scale$bandwidth(bandSingleScale);
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var labelOffset = $elm$core$List$isEmpty(c.symbols) ? 0 : h;
		var _v0 = point;
		var x__ = _v0.a;
		var y__ = _v0.b;
		var coreStyleFromX = c.coreStyleFromPointBandX(x__);
		var y_ = A2($gampleman$elm_visualization$Scale$convert, bandSingleScale, x__);
		var colorStyles = A3(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorStyle,
			c,
			$elm$core$Maybe$Just(idx),
			$elm$core$Maybe$Just(
				A2($gampleman$elm_visualization$Scale$convert, colorScale, y__)));
		var coreStyle = $elm_community$typed_svg$TypedSvg$Attributes$style(
			A2(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
				coreStyleFromX,
				A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles, c.coreStyle, colorStyles)));
		var w = A2($gampleman$elm_visualization$Scale$convert, continuousScale, y__);
		var label = A4($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalLabel, config, (w + $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$labelGap) + labelOffset, y_ + (h / 2), point);
		var rect_ = A2(
			$elm_community$typed_svg$TypedSvg$rect,
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(0),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(y_),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(w),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(h),
					$elm_community$typed_svg$TypedSvg$Attributes$shapeRendering($elm_community$typed_svg$TypedSvg$Types$RenderCrispEdges),
					coreStyle
				]),
			A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$columnTitleText, config, point));
		var symbol = A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalSymbol,
			config,
			{h: h, idx: idx, styleStr: colorStyles, w: w, y_: y_});
		return A2(
			$elm$core$List$cons,
			rect_,
			_Utils_ap(symbol, label));
	});
var $elm_community$typed_svg$TypedSvg$Types$AnchorMiddle = {$: 'AnchorMiddle'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalLabel = F4(
	function (config, xPos, yPos, point) {
		var txt = $elm_community$typed_svg$TypedSvg$text_(
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(xPos),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(yPos),
					$elm_community$typed_svg$TypedSvg$Attributes$textAnchor($elm_community$typed_svg$TypedSvg$Types$AnchorMiddle),
					$elm_community$typed_svg$TypedSvg$Attributes$class(
					_List_fromArray(
						[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$labelClassName]))
				]));
		var _v0 = point;
		var xVal = _v0.a;
		var yVal = _v0.b;
		var _v1 = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).showLabels;
		switch (_v1.$) {
			case 'YLabel':
				var formatter = _v1.a;
				return _List_fromArray(
					[
						txt(
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(
								formatter(yVal))
							]))
					]);
			case 'XOrdinalLabel':
				return _List_fromArray(
					[
						txt(
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(xVal)
							]))
					]);
			default:
				return _List_Nil;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolCustomSpace = F3(
	function (orientation, localDimension, conf) {
		if (orientation.$ === 'Horizontal') {
			var scalingFactor = localDimension / conf.viewBoxHeight;
			return scalingFactor * conf.viewBoxWidth;
		} else {
			var scalingFactor = localDimension / conf.viewBoxWidth;
			return scalingFactor * conf.viewBoxHeight;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalSymbol = F2(
	function (config, _v0) {
		var idx = _v0.idx;
		var w = _v0.w;
		var y_ = _v0.y_;
		var x_ = _v0.x_;
		var styleStr = _v0.styleStr;
		var symbol = A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$getSymbolByIndex,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).symbols,
			idx);
		var symbolRef = _List_fromArray(
			[
				A2(
				$elm_community$typed_svg$TypedSvg$use,
				_List_fromArray(
					[
						$elm_community$typed_svg$TypedSvg$Attributes$xlinkHref(
						'#' + $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolToId(symbol))
					]),
				_List_Nil)
			]);
		var st = function (styles) {
			return $elm_community$typed_svg$TypedSvg$Attributes$style(
				A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles, styles, styleStr));
		};
		if ($data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons(config)) {
			switch (symbol.$) {
				case 'Triangle':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, x_, (y_ - w) - $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				case 'Circle':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, x_, (y_ - w) - $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				case 'Corner':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, x_, (y_ - w) - $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				case 'Custom':
					var c = symbol.a;
					var space = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolCustomSpace, $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Vertical, w, c);
					var gap = c.useGap ? $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap : 0;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, x_, (y_ - space) - gap)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				default:
					return _List_Nil;
			}
		} else {
			return _List_Nil;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalRect = F7(
	function (config, iconOffset, bandSingleScale, continuousScale, colorScale, idx, point) {
		var w = $gampleman$elm_visualization$Scale$bandwidth(bandSingleScale);
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var labelOffset = $elm$core$List$isEmpty(c.symbols) ? 0 : w;
		var _v0 = point;
		var x__ = _v0.a;
		var y__ = _v0.b;
		var coreStyleFromX = c.coreStyleFromPointBandX(x__);
		var x_ = A2($gampleman$elm_visualization$Scale$convert, bandSingleScale, x__);
		var colorStyles = A3(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorStyle,
			c,
			$elm$core$Maybe$Just(idx),
			$elm$core$Maybe$Just(
				A2($gampleman$elm_visualization$Scale$convert, colorScale, y__)));
		var coreStyle = $elm_community$typed_svg$TypedSvg$Attributes$style(
			A2(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
				coreStyleFromX,
				A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles, c.coreStyle, colorStyles)));
		var h = (c.height - A2($gampleman$elm_visualization$Scale$convert, continuousScale, y__)) - iconOffset;
		var y_ = A2($gampleman$elm_visualization$Scale$convert, continuousScale, y__) + iconOffset;
		var label = A4($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalLabel, config, x_ + (w / 2), (y_ - $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$labelGap) - labelOffset, point);
		var rect_ = A2(
			$elm_community$typed_svg$TypedSvg$rect,
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(x_),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(y_),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(w),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(h),
					$elm_community$typed_svg$TypedSvg$Attributes$shapeRendering($elm_community$typed_svg$TypedSvg$Types$RenderCrispEdges),
					coreStyle
				]),
			A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$columnTitleText, config, point));
		var symbol = A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalSymbol,
			config,
			{idx: idx, styleStr: colorStyles, w: w, x_: x_, y_: y_});
		return A2(
			$elm$core$List$cons,
			rect_,
			_Utils_ap(symbol, label));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$column = F7(
	function (config, iconOffset, bandSingleScale, continuousScale, colorScale, idx, point) {
		var rectangle = function () {
			var _v0 = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).orientation;
			if (_v0.$ === 'Vertical') {
				return A7($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalRect, config, iconOffset, bandSingleScale, continuousScale, colorScale, idx, point);
			} else {
				return A6($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalRect, config, bandSingleScale, continuousScale, colorScale, idx, point);
			}
		}();
		return A2(
			$elm_community$typed_svg$TypedSvg$g,
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$class(
					_List_fromArray(
						[
							$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName,
							$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName + ('-' + $elm$core$String$fromInt(idx))
						]))
				]),
			rectangle);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$dataGroupClassName = 'ecb-data-group';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$dataGroupTranslation = F2(
	function (bandGroupScale, dataGroup) {
		var _v0 = dataGroup.groupLabel;
		if (_v0.$ === 'Nothing') {
			return 0;
		} else {
			var l = _v0.a;
			return A2($gampleman$elm_visualization$Scale$convert, bandGroupScale, l);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$columns = F7(
	function (config, iconOffset, bandGroupScale, bandSingleScale, continuousScale, colorScale, dataGroup) {
		var tr = function () {
			var _v0 = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).orientation;
			if (_v0.$ === 'Vertical') {
				return A2(
					$elm_community$typed_svg$TypedSvg$Types$Translate,
					A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$dataGroupTranslation, bandGroupScale, dataGroup),
					0);
			} else {
				return A2(
					$elm_community$typed_svg$TypedSvg$Types$Translate,
					0,
					A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$dataGroupTranslation, bandGroupScale, dataGroup));
			}
		}();
		return A2(
			$elm_community$typed_svg$TypedSvg$g,
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$transform(
					_List_fromArray(
						[tr])),
					$elm_community$typed_svg$TypedSvg$Attributes$class(
					_List_fromArray(
						[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$dataGroupClassName]))
				]),
			A2(
				$elm$core$List$indexedMap,
				A5($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$column, config, iconOffset, bandSingleScale, continuousScale, colorScale),
				dataGroup.points));
	});
var $gampleman$elm_visualization$Scale$defaultBandConfig = {align: 0.5, paddingInner: 0.0, paddingOuter: 0.0};
var $elm_community$typed_svg$TypedSvg$desc = $elm_community$typed_svg$TypedSvg$Core$node('desc');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$descAndTitle = function (c) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (_v0, acc) {
				var el = _v0.a;
				var str = _v0.b;
				return (str === '') ? acc : A2(
					$elm$core$List$cons,
					el(
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(str)
							])),
					acc);
			}),
		_List_Nil,
		_List_fromArray(
			[
				_Utils_Tuple2(
				$elm_community$typed_svg$TypedSvg$title(_List_Nil),
				c.svgTitle),
				_Utils_Tuple2(
				$elm_community$typed_svg$TypedSvg$desc(_List_Nil),
				c.svgDesc)
			]));
};
var $elm$html$Html$figure = _VirtualDom_node('figure');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand = function (_v0) {
	var d = _v0.a;
	return d;
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getBandGroupRange = F3(
	function (config, width, height) {
		var orientation = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).orientation;
		if (orientation.$ === 'Horizontal') {
			return _Utils_Tuple2(height, 0);
		} else {
			return _Utils_Tuple2(0, width);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getBandSingleRange = F2(
	function (config, value) {
		var orientation = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).orientation;
		if (orientation.$ === 'Horizontal') {
			return _Utils_Tuple2(
				$elm$core$Basics$floor(value),
				0);
		} else {
			return _Utils_Tuple2(
				0,
				$elm$core$Basics$floor(value));
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolSpace = F3(
	function (orientation, bandSingleScale, symbols) {
		var localDimension = $elm$core$Basics$floor(
			$gampleman$elm_visualization$Scale$bandwidth(bandSingleScale));
		return $elm$core$Basics$floor(
			A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$List$maximum(
					A2(
						$elm$core$List$map,
						function (symbol) {
							switch (symbol.$) {
								case 'Circle':
									return localDimension / 2;
								case 'Custom':
									var conf = symbol.a;
									return A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolCustomSpace, orientation, localDimension, conf);
								case 'Corner':
									return localDimension;
								case 'Triangle':
									return localDimension;
								default:
									return 0;
							}
						},
						symbols))));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getContinuousRange = F5(
	function (config, renderContext, width, height, bandScale) {
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var layout = c.layout;
		var orientation = c.orientation;
		if (orientation.$ === 'Horizontal') {
			if (layout.$ === 'GroupedBar') {
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons(config) ? _Utils_Tuple2(
					0,
					(width - $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap) - A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolSpace, c.orientation, bandScale, c.symbols)) : _Utils_Tuple2(0, width);
			} else {
				if (renderContext.$ === 'RenderChart') {
					return _Utils_Tuple2(width, 0);
				} else {
					return _Utils_Tuple2(0, width);
				}
			}
		} else {
			if (layout.$ === 'GroupedBar') {
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons(config) ? _Utils_Tuple2(
					(height - $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap) - A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolSpace, c.orientation, bandScale, c.symbols),
					0) : _Utils_Tuple2(height, 0);
			} else {
				return _Utils_Tuple2(height, 0);
			}
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDataBandDepth = function (data) {
	return $elm$core$List$length(
		A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			$elm$core$List$head(
				A2(
					$elm$core$List$map,
					function ($) {
						return $.points;
					},
					$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data)))));
};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainBand = function (_v0) {
	var d = _v0.a;
	return d;
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainBand = function (config) {
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainBand(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).domainBand);
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainBandFromData = F2(
	function (data, config) {
		var domain = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainBand(config);
		var d = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data);
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainBand(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainBand(
				{
					bandGroup: function () {
						var _v0 = domain.bandGroup;
						if (_v0.$ === 'Just') {
							var bandGroup = _v0.a;
							return $elm$core$Maybe$Just(bandGroup);
						} else {
							return $elm$core$Maybe$Just(
								A2(
									$elm$core$List$indexedMap,
									F2(
										function (i, g) {
											return A2(
												$elm$core$Maybe$withDefault,
												$elm$core$String$fromInt(i),
												g);
										}),
									A2(
										$elm$core$List$map,
										function ($) {
											return $.groupLabel;
										},
										d)));
						}
					}(),
					bandSingle: function () {
						var _v1 = domain.bandSingle;
						if (_v1.$ === 'Just') {
							var bandSingle = _v1.a;
							return $elm$core$Maybe$Just(bandSingle);
						} else {
							return $elm$core$Maybe$Just(
								A3(
									$elm$core$List$foldr,
									F2(
										function (x, acc) {
											return A2($elm$core$List$member, x, acc) ? acc : A2($elm$core$List$cons, x, acc);
										}),
									_List_Nil,
									A2(
										$elm$core$List$map,
										$elm$core$Tuple$first,
										$elm$core$List$concat(
											A2(
												$elm$core$List$map,
												function ($) {
													return $.points;
												},
												d)))));
						}
					}(),
					continuous: function () {
						var _v2 = domain.continuous;
						if (_v2.$ === 'Just') {
							var continuous = _v2.a;
							return $elm$core$Maybe$Just(continuous);
						} else {
							return $elm$core$Maybe$Just(
								function (dd) {
									var _v3 = c.layout;
									if ((_v3.$ === 'StackedBar') && (_v3.a.$ === 'Diverging')) {
										var _v4 = _v3.a;
										return _Utils_Tuple2(
											A2(
												$elm$core$Maybe$withDefault,
												0,
												$elm$core$List$minimum(dd)),
											A2(
												$elm$core$Maybe$withDefault,
												0,
												$elm$core$List$maximum(dd)));
									} else {
										return _Utils_Tuple2(
											0,
											A2(
												$elm$core$Maybe$withDefault,
												0,
												$elm$core$List$maximum(dd)));
									}
								}(
									A2(
										$elm$core$List$map,
										$elm$core$Tuple$second,
										$elm$core$List$concat(
											A2(
												$elm$core$List$map,
												function ($) {
													return $.points;
												},
												d)))));
						}
					}()
				}));
	});
var $elm$core$Basics$isNaN = _Basics_isNaN;
var $gampleman$elm_visualization$Scale$Continuous$normalize = F2(
	function (a, b) {
		var c = b - a;
		return (!c) ? $elm$core$Basics$always(0.5) : ($elm$core$Basics$isNaN(c) ? $elm$core$Basics$always(0 / 0) : function (x) {
			return (x - a) / c;
		});
	});
var $gampleman$elm_visualization$Scale$Continuous$bimap = F3(
	function (_v0, _v1, interpolate) {
		var d0 = _v0.a;
		var d1 = _v0.b;
		var r0 = _v1.a;
		var r1 = _v1.b;
		var _v2 = (_Utils_cmp(d1, d0) < 0) ? _Utils_Tuple2(
			A2($gampleman$elm_visualization$Scale$Continuous$normalize, d1, d0),
			A2(interpolate, r1, r0)) : _Utils_Tuple2(
			A2($gampleman$elm_visualization$Scale$Continuous$normalize, d0, d1),
			A2(interpolate, r0, r1));
		var de = _v2.a;
		var re = _v2.b;
		return A2($elm$core$Basics$composeL, re, de);
	});
var $gampleman$elm_visualization$Scale$Continuous$convertTransform = F4(
	function (transform, interpolate, _v0, range) {
		var d0 = _v0.a;
		var d1 = _v0.b;
		return A2(
			$elm$core$Basics$composeR,
			transform,
			A3(
				$gampleman$elm_visualization$Scale$Continuous$bimap,
				_Utils_Tuple2(
					transform(d0),
					transform(d1)),
				range,
				interpolate));
	});
var $gampleman$elm_visualization$Scale$Continuous$invertTransform = F4(
	function (transform, untransform, _v0, range) {
		var d0 = _v0.a;
		var d1 = _v0.b;
		return A2(
			$elm$core$Basics$composeR,
			A3(
				$gampleman$elm_visualization$Scale$Continuous$bimap,
				range,
				_Utils_Tuple2(
					transform(d0),
					transform(d1)),
				$gampleman$elm_visualization$Interpolation$float),
			untransform);
	});
var $gampleman$elm_visualization$Scale$Continuous$fixPoint = F3(
	function (maxIterations, initialInput, fn) {
		var helper = F2(
			function (iters, _v0) {
				helper:
				while (true) {
					var a = _v0.a;
					var b = _v0.b;
					if (_Utils_cmp(iters + 1, maxIterations) > -1) {
						return b;
					} else {
						var _v1 = fn(b);
						var outA = _v1.a;
						var outB = _v1.b;
						if (_Utils_eq(outA, a)) {
							return b;
						} else {
							if (!outA) {
								return b;
							} else {
								var $temp$iters = iters + 1,
									$temp$_v0 = _Utils_Tuple2(outA, outB);
								iters = $temp$iters;
								_v0 = $temp$_v0;
								continue helper;
							}
						}
					}
				}
			});
		return A2(
			helper,
			1,
			fn(initialInput));
	});
var $elm$core$Basics$e = _Basics_e;
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $gampleman$elm_visualization$Scale$Continuous$e10 = $elm$core$Basics$sqrt(50);
var $gampleman$elm_visualization$Scale$Continuous$e2 = $elm$core$Basics$sqrt(2);
var $gampleman$elm_visualization$Scale$Continuous$e5 = $elm$core$Basics$sqrt(10);
var $gampleman$elm_visualization$Scale$Continuous$ln10 = A2($elm$core$Basics$logBase, $elm$core$Basics$e, 10);
var $elm$core$Basics$pow = _Basics_pow;
var $gampleman$elm_visualization$Scale$Continuous$tickIncrement = F3(
	function (start, stop, count) {
		var step = (stop - start) / A2($elm$core$Basics$max, 0, count);
		var powr = $elm$core$Basics$floor(
			A2($elm$core$Basics$logBase, $elm$core$Basics$e, step) / $gampleman$elm_visualization$Scale$Continuous$ln10);
		var error = step / A2($elm$core$Basics$pow, 10, powr);
		var order = (_Utils_cmp(error, $gampleman$elm_visualization$Scale$Continuous$e10) > -1) ? 10 : ((_Utils_cmp(error, $gampleman$elm_visualization$Scale$Continuous$e5) > -1) ? 5 : ((_Utils_cmp(error, $gampleman$elm_visualization$Scale$Continuous$e2) > -1) ? 2 : 1));
		return (powr >= 0) ? (order * A2($elm$core$Basics$pow, 10, powr)) : ((-A2($elm$core$Basics$pow, 10, -powr)) / order);
	});
var $gampleman$elm_visualization$Scale$Continuous$withNormalizedDomain = F2(
	function (fn, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		if (_Utils_cmp(a, b) < 0) {
			return fn(
				_Utils_Tuple2(a, b));
		} else {
			var _v1 = fn(
				_Utils_Tuple2(b, a));
			var d = _v1.a;
			var c = _v1.b;
			return _Utils_Tuple2(c, d);
		}
	});
var $gampleman$elm_visualization$Scale$Continuous$nice = F2(
	function (domain, count) {
		var computation = function (_v0) {
			var start = _v0.a;
			var stop = _v0.b;
			var step = A3($gampleman$elm_visualization$Scale$Continuous$tickIncrement, start, stop, count);
			return _Utils_Tuple2(
				step,
				(step > 0) ? _Utils_Tuple2(
					$elm$core$Basics$floor(start / step) * step,
					$elm$core$Basics$ceiling(stop / step) * step) : ((step < 0) ? _Utils_Tuple2(
					$elm$core$Basics$ceiling(start * step) / step,
					$elm$core$Basics$floor(stop * step) / step) : _Utils_Tuple2(start, stop)));
		};
		return A2(
			$gampleman$elm_visualization$Scale$Continuous$withNormalizedDomain,
			function (dmn) {
				return A3($gampleman$elm_visualization$Scale$Continuous$fixPoint, 10, dmn, computation);
			},
			domain);
	});
var $gampleman$elm_visualization$Scale$Continuous$exponent = function (x) {
	return (!x) ? 0 : ((x < 1) ? (1 + $gampleman$elm_visualization$Scale$Continuous$exponent(x * 10)) : 0);
};
var $gampleman$elm_visualization$Scale$Continuous$precisionFixed = function (step) {
	return A2(
		$elm$core$Basics$max,
		0,
		$gampleman$elm_visualization$Scale$Continuous$exponent(
			$elm$core$Basics$abs(step)));
};
var $gampleman$elm_visualization$Statistics$tickStep = F3(
	function (start, stop, count) {
		var step0 = $elm$core$Basics$abs(stop - start) / A2($elm$core$Basics$max, 0, count);
		var step1 = A2(
			$elm$core$Basics$pow,
			10,
			$elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Basics$e, step0) / A2($elm$core$Basics$logBase, $elm$core$Basics$e, 10)));
		var error = step0 / step1;
		var step2 = (_Utils_cmp(
			error,
			$elm$core$Basics$sqrt(50)) > -1) ? (step1 * 10) : ((_Utils_cmp(
			error,
			$elm$core$Basics$sqrt(10)) > -1) ? (step1 * 5) : ((_Utils_cmp(
			error,
			$elm$core$Basics$sqrt(2)) > -1) ? (step1 * 2) : step1));
		return (_Utils_cmp(stop, start) < 0) ? (-step2) : step2;
	});
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)));
	});
var $gampleman$elm_visualization$Scale$Continuous$toFixed = F2(
	function (precision, value) {
		var power_ = A2($elm$core$Basics$pow, 10, precision);
		var pad = function (num) {
			_v0$2:
			while (true) {
				if (num.b) {
					if (num.b.b) {
						if (!num.b.b.b) {
							var x = num.a;
							var _v1 = num.b;
							var y = _v1.a;
							return _List_fromArray(
								[
									x,
									A3(
									$elm$core$String$padRight,
									precision,
									_Utils_chr('0'),
									y)
								]);
						} else {
							break _v0$2;
						}
					} else {
						var val = num.a;
						return (precision > 0) ? _List_fromArray(
							[
								val,
								A3(
								$elm$core$String$padRight,
								precision,
								_Utils_chr('0'),
								'')
							]) : _List_fromArray(
							[val]);
					}
				} else {
					break _v0$2;
				}
			}
			var val = num;
			return val;
		};
		return A2(
			$elm$core$String$join,
			'.',
			pad(
				A2(
					$elm$core$String$split,
					'.',
					$elm$core$String$fromFloat(
						$elm$core$Basics$round(value * power_) / power_))));
	});
var $gampleman$elm_visualization$Scale$Continuous$tickFormat = F2(
	function (_v0, count) {
		var start = _v0.a;
		var stop = _v0.b;
		return $gampleman$elm_visualization$Scale$Continuous$toFixed(
			$gampleman$elm_visualization$Scale$Continuous$precisionFixed(
				A3($gampleman$elm_visualization$Statistics$tickStep, start, stop, count)));
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $gampleman$elm_visualization$Statistics$range = F3(
	function (start, stop, step) {
		var n = A2(
			$elm$core$Basics$max,
			0,
			0 | $elm$core$Basics$ceiling((stop - start) / step));
		var helper = F2(
			function (i, list) {
				return (i >= 0) ? A2(
					helper,
					i - 1,
					A2($elm$core$List$cons, start + (step * i), list)) : list;
			});
		return A2(helper, n - 1, _List_Nil);
	});
var $gampleman$elm_visualization$Statistics$ticks = F3(
	function (start, stop, count) {
		var step = A3($gampleman$elm_visualization$Statistics$tickStep, start, stop, count);
		var end = ($elm$core$Basics$floor(stop / step) * step) + (step / 2);
		var beg = $elm$core$Basics$ceiling(start / step) * step;
		return A3($gampleman$elm_visualization$Statistics$range, beg, end, step);
	});
var $gampleman$elm_visualization$Scale$Continuous$ticks = F2(
	function (_v0, count) {
		var start = _v0.a;
		var end = _v0.b;
		return A3($gampleman$elm_visualization$Statistics$ticks, start, end, count);
	});
var $gampleman$elm_visualization$Scale$Continuous$scaleWithTransform = F4(
	function (transform, untransform, range_, domain_) {
		return {
			convert: A2($gampleman$elm_visualization$Scale$Continuous$convertTransform, transform, $gampleman$elm_visualization$Interpolation$float),
			domain: domain_,
			invert: A2($gampleman$elm_visualization$Scale$Continuous$invertTransform, transform, untransform),
			nice: $gampleman$elm_visualization$Scale$Continuous$nice,
			range: range_,
			rangeExtent: F2(
				function (_v0, r) {
					return r;
				}),
			tickFormat: $gampleman$elm_visualization$Scale$Continuous$tickFormat,
			ticks: $gampleman$elm_visualization$Scale$Continuous$ticks
		};
	});
var $gampleman$elm_visualization$Scale$Continuous$linear = A2($gampleman$elm_visualization$Scale$Continuous$scaleWithTransform, $elm$core$Basics$identity, $elm$core$Basics$identity);
var $gampleman$elm_visualization$Scale$linear = F2(
	function (range_, domain_) {
		return $gampleman$elm_visualization$Scale$Scale(
			A2($gampleman$elm_visualization$Scale$Continuous$linear, range_, domain_));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$outerHeight = F3(
	function (height, margin, padding) {
		return (((height + margin.top) + margin.bottom) + padding.top) + padding.bottom;
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$outerWidth = F3(
	function (width, margin, padding) {
		return (((width + margin.left) + margin.right) + padding.left) + padding.right;
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$role = function (name) {
	return A2($elm$html$Html$Attributes$attribute, 'role', name);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$rootClassName = 'ecb';
var $elm_community$typed_svg$TypedSvg$svg = $elm_community$typed_svg$TypedSvg$Core$node('svg');
var $elm_community$typed_svg$TypedSvg$circle = $elm_community$typed_svg$TypedSvg$Core$node('circle');
var $elm_community$typed_svg$TypedSvg$Attributes$cx = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'cx',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$cx = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$cx(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $elm_community$typed_svg$TypedSvg$Attributes$cy = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'cy',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$cy = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$cy(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $elm_community$typed_svg$TypedSvg$Attributes$r = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'r',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$r = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$r(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$circle_ = function (size) {
	return A2(
		$elm_community$typed_svg$TypedSvg$circle,
		_List_fromArray(
			[
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$cx(size / 2),
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$cy(size / 2),
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$r(size / 2)
			]),
		_List_Nil);
};
var $elm_community$typed_svg$TypedSvg$Attributes$points = function (pts) {
	var pointToString = function (_v0) {
		var xx = _v0.a;
		var yy = _v0.b;
		return $elm$core$String$fromFloat(xx) + (', ' + $elm$core$String$fromFloat(yy));
	};
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'points',
		A2(
			$elm$core$String$join,
			' ',
			A2($elm$core$List$map, pointToString, pts)));
};
var $elm_community$typed_svg$TypedSvg$polygon = $elm_community$typed_svg$TypedSvg$Core$node('polygon');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$corner = function (size) {
	return A2(
		$elm_community$typed_svg$TypedSvg$polygon,
		_List_fromArray(
			[
				$elm_community$typed_svg$TypedSvg$Attributes$points(
				_List_fromArray(
					[
						_Utils_Tuple2(0.0, 0.0),
						_Utils_Tuple2(size, 0.0),
						_Utils_Tuple2(size, size)
					]))
			]),
		_List_Nil);
};
var $elm_community$typed_svg$TypedSvg$Types$Scale = F2(
	function (a, b) {
		return {$: 'Scale', a: a, b: b};
	});
var $elm_community$typed_svg$TypedSvg$Attributes$d = $elm_community$typed_svg$TypedSvg$Core$attribute('d');
var $elm_community$typed_svg$TypedSvg$path = $elm_community$typed_svg$TypedSvg$Core$node('path');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$custom = F2(
	function (scaleFactor, conf) {
		return A2(
			$elm_community$typed_svg$TypedSvg$g,
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$transform(
					_List_fromArray(
						[
							A2($elm_community$typed_svg$TypedSvg$Types$Scale, scaleFactor, scaleFactor)
						]))
				]),
			A2(
				$elm$core$List$map,
				function (d_) {
					return A2(
						$elm_community$typed_svg$TypedSvg$path,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Attributes$d(d_)
							]),
						_List_Nil);
				},
				conf.paths));
	});
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm_community$typed_svg$TypedSvg$symbol = $elm_community$typed_svg$TypedSvg$Core$node('symbol');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$triangle = function (size) {
	return A2(
		$elm_community$typed_svg$TypedSvg$polygon,
		_List_fromArray(
			[
				$elm_community$typed_svg$TypedSvg$Attributes$points(
				_List_fromArray(
					[
						_Utils_Tuple2(size / 2, 0.0),
						_Utils_Tuple2(size, size),
						_Utils_Tuple2(0.0, size)
					]))
			]),
		_List_Nil);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$symbolsToSymbolElements = F3(
	function (orientation, bandSingleScale, symbols) {
		var localDimension = $gampleman$elm_visualization$Scale$bandwidth(bandSingleScale);
		return A2(
			$elm$core$List$map,
			function (symbol) {
				var s = $elm_community$typed_svg$TypedSvg$symbol(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolToId(symbol))
						]));
				switch (symbol.$) {
					case 'Circle':
						var conf = symbol.a;
						return s(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$circle_(
									A2($elm$core$Maybe$withDefault, localDimension, conf.size))
								]));
					case 'Custom':
						var conf = symbol.a;
						var scaleFactor = function () {
							if (orientation.$ === 'Vertical') {
								return localDimension / conf.viewBoxWidth;
							} else {
								return localDimension / conf.viewBoxHeight;
							}
						}();
						return s(
							_List_fromArray(
								[
									A2($data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$custom, scaleFactor, conf)
								]));
					case 'Corner':
						var conf = symbol.a;
						return s(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$corner(
									A2($elm$core$Maybe$withDefault, localDimension, conf.size))
								]));
					case 'Triangle':
						var conf = symbol.a;
						return s(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$triangle(
									A2($elm$core$Maybe$withDefault, localDimension, conf.size))
								]));
					default:
						return s(_List_Nil);
				}
			},
			symbols);
	});
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $elm_community$list_extra$List$Extra$rowsLength = function (listOfLists) {
	if (!listOfLists.b) {
		return 0;
	} else {
		var x = listOfLists.a;
		return $elm$core$List$length(x);
	}
};
var $elm_community$list_extra$List$Extra$transpose = function (listOfLists) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$List$map2($elm$core$List$cons),
		A2(
			$elm$core$List$repeat,
			$elm_community$list_extra$List$Extra$rowsLength(listOfLists),
			_List_Nil),
		listOfLists);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataBandToTableData = F2(
	function (_v0, data) {
		var tableFloatFormat = _v0.tableFloatFormat;
		return A2(
			$elm$core$List$map,
			function (points) {
				return $elm$core$List$concat(
					A2(
						$elm$core$List$map,
						function (p) {
							return _List_fromArray(
								[
									p.a,
									tableFloatFormat(p.b)
								]);
						},
						points));
			},
			$elm_community$list_extra$List$Extra$transpose(
				A2(
					$elm$core$List$map,
					function ($) {
						return $.points;
					},
					$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data))));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ComplexHeadings = function (a) {
	return {$: 'ComplexHeadings', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$HeadingAndSubHeadings = F2(
	function (a, b) {
		return {$: 'HeadingAndSubHeadings', a: a, b: b};
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$Headings = function (a) {
	return {$: 'Headings', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$getLabelsFromContent = function (content) {
	if (content.$ === 'AccessibilityTable') {
		var _v1 = content.a;
		var xLabel = _v1.a;
		var yLabel = _v1.b;
		return _List_fromArray(
			[xLabel, yLabel]);
	} else {
		return _List_fromArray(
			['x', 'y']);
	}
};
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$noGroups = function (data) {
	return A2(
		$elm$core$List$all,
		function (d) {
			return _Utils_eq(d, $elm$core$Maybe$Nothing);
		},
		A2(
			$elm$core$List$map,
			function ($) {
				return $.groupLabel;
			},
			data));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataBandToTableHeadings = F2(
	function (data, content) {
		return function (dataBand) {
			return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$noGroups(dataBand) ? A2(
				$elm$core$Basics$always,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Table$Headings(
					$data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$getLabelsFromContent(content)),
				dataBand) : $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ComplexHeadings(
				A2(
					$elm$core$List$map,
					function (d) {
						return A2(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Table$HeadingAndSubHeadings,
							A2($elm$core$Maybe$withDefault, '', d.groupLabel),
							$data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$getLabelsFromContent(content));
					},
					dataBand));
		}(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$errorToString = function (error) {
	switch (error.$) {
		case 'NoData':
			return 'No Data';
		case 'RowLengthsDoNotMatch':
			var rowNumber = error.a;
			return 'Every line of data should be equal in length, but row ' + ($elm$core$String$fromInt(rowNumber) + ' has a different number of data points');
		default:
			return 'The number of column headings does not match the number of data points in each row. ';
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$Cell = function (a) {
	return {$: 'Cell', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeading = function (a) {
	return {$: 'ColumnHeading', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingSingle = function (a) {
	return {$: 'ColumnHeadingSingle', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingsSimple = function (a) {
	return {$: 'ColumnHeadingsSimple', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowHeading = function (a) {
	return {$: 'RowHeading', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowHeadingSingle = function (a) {
	return {$: 'RowHeadingSingle', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowHeadingsSimple = function (a) {
	return {$: 'RowHeadingsSimple', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$TableConfiguration = function (a) {
	return {$: 'TableConfiguration', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowLengthsDoNotMatch = function (a) {
	return {$: 'RowLengthsDoNotMatch', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$allRowsEqualLengthHelper = F3(
	function (rowLength, rowNumber, remainingRows) {
		allRowsEqualLengthHelper:
		while (true) {
			if (!remainingRows.b) {
				return $elm$core$Result$Ok(rowLength);
			} else {
				var thisRow = remainingRows.a;
				var rest = remainingRows.b;
				if (_Utils_eq(
					$elm$core$List$length(thisRow),
					rowLength)) {
					var $temp$rowLength = rowLength,
						$temp$rowNumber = rowNumber + 1,
						$temp$remainingRows = rest;
					rowLength = $temp$rowLength;
					rowNumber = $temp$rowNumber;
					remainingRows = $temp$remainingRows;
					continue allRowsEqualLengthHelper;
				} else {
					return $elm$core$Result$Err(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowLengthsDoNotMatch(rowNumber));
				}
			}
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$allRowsEqualLength = function (data) {
	if (!data.b) {
		return $elm$core$Result$Ok(0);
	} else {
		var row1 = data.a;
		var remainingRows = data.b;
		return A3(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Table$allRowsEqualLengthHelper,
			$elm$core$List$length(row1),
			2,
			remainingRows);
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$generate = function (data) {
	var _v0 = $data_viz_lab$elm_chart_builder$Chart$Internal$Table$allRowsEqualLength(data);
	if (_v0.$ === 'Ok') {
		var noOfCols = _v0.a;
		return $elm$core$Result$Ok(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Table$TableConfiguration(
				{
					attributes: _List_Nil,
					caption: $elm$core$Maybe$Nothing,
					cells: A2(
						$elm$core$List$map,
						function (row) {
							return A2(
								$elm$core$List$map,
								function (v) {
									return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$Cell(
										{
											attributes: _List_Nil,
											value: $elm$html$Html$text(v)
										});
								},
								row);
						},
						data),
					columnHeadings: $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingsSimple(
						A2(
							$elm$core$List$map,
							function (colNo) {
								return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingSingle(
									$data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeading(
										{
											attributes: _List_Nil,
											label: $elm$html$Html$text(
												'Column ' + $elm$core$String$fromInt(colNo))
										}));
							},
							A2($elm$core$List$range, 1, noOfCols))),
					columnHeadingsShown: true,
					rowHeadings: $data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowHeadingsSimple(
						A2(
							$elm$core$List$map,
							function (rowNo) {
								return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowHeadingSingle(
									$data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowHeading(
										{
											attributes: _List_Nil,
											label: $elm$html$Html$text(
												'Row ' + $elm$core$String$fromInt(rowNo))
										}));
							},
							A2(
								$elm$core$List$range,
								1,
								$elm$core$List$length(data)))),
					rowHeadingsShown: true,
					summary: $elm$core$Maybe$Nothing
				}));
	} else {
		var error = _v0.a;
		return $elm$core$Result$Err(error);
	}
};
var $elm$html$Html$figcaption = _VirtualDom_node('figcaption');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$invisibleFigcaption = function (content) {
	return A2(
		$elm$html$Html$figcaption,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'border', '0'),
				A2($elm$html$Html$Attributes$style, 'clip', 'rect(0 0 0 0)'),
				A2($elm$html$Html$Attributes$style, 'height', '1px'),
				A2($elm$html$Html$Attributes$style, 'margin', '-1px'),
				A2($elm$html$Html$Attributes$style, 'overflow', 'hidden'),
				A2($elm$html$Html$Attributes$style, 'padding', '0'),
				A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
				A2($elm$html$Html$Attributes$style, 'width', '1px')
			]),
		content);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingGroup = F2(
	function (a, b) {
		return {$: 'ColumnHeadingGroup', a: a, b: b};
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingMismatch = {$: 'ColumnHeadingMismatch'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingsComplex = function (a) {
	return {$: 'ColumnHeadingsComplex', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$noOfComplexHeadings = function (complexHeadings) {
	var addHeaders = F2(
		function (header, acc) {
			if (!header.b.b) {
				return acc + 1;
			} else {
				var subHeadings = header.b;
				return acc + $elm$core$List$length(subHeadings);
			}
		});
	return A3($elm$core$List$foldl, addHeaders, 0, complexHeadings);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$setColumnHeadings = F2(
	function (headings_, resultConfig) {
		if (headings_.$ === 'Headings') {
			var headings = headings_.a;
			return A2(
				$elm$core$Result$andThen,
				function (_v2) {
					var tableConfig = _v2.a;
					return _Utils_eq(
						$elm$core$List$length(headings),
						$elm$core$List$length(
							A2(
								$elm$core$Maybe$withDefault,
								_List_Nil,
								$elm$core$List$head(tableConfig.cells)))) ? $elm$core$Result$Ok(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Table$TableConfiguration(tableConfig)) : $elm$core$Result$Err($data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingMismatch);
				},
				A2(
					$elm$core$Result$map,
					function (_v1) {
						var tableConfig = _v1.a;
						return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$TableConfiguration(
							_Utils_update(
								tableConfig,
								{
									columnHeadings: $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingsSimple(
										A2(
											$elm$core$List$map,
											function (label) {
												return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingSingle(
													$data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeading(
														{
															attributes: _List_Nil,
															label: $elm$html$Html$text(label)
														}));
											},
											headings))
								}));
					},
					resultConfig));
		} else {
			var complexHeadings = headings_.a;
			return A2(
				$elm$core$Result$andThen,
				function (_v5) {
					var tableConfig = _v5.a;
					return _Utils_eq(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Table$noOfComplexHeadings(complexHeadings),
						$elm$core$List$length(
							A2(
								$elm$core$Maybe$withDefault,
								_List_Nil,
								$elm$core$List$head(tableConfig.cells)))) ? $elm$core$Result$Ok(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Table$TableConfiguration(tableConfig)) : $elm$core$Result$Err($data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingMismatch);
				},
				A2(
					$elm$core$Result$map,
					function (_v3) {
						var tableConfig = _v3.a;
						return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$TableConfiguration(
							_Utils_update(
								tableConfig,
								{
									columnHeadings: $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingsComplex(
										A2(
											$elm$core$List$map,
											function (_v4) {
												var mainHeading = _v4.a;
												var subHeadings = _v4.b;
												return A2(
													$data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingGroup,
													$data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeading(
														{
															attributes: _List_Nil,
															label: $elm$html$Html$text(mainHeading)
														}),
													A2(
														$elm$core$List$map,
														function (subHeading) {
															return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeading(
																{
																	attributes: _List_Nil,
																	label: $elm$html$Html$text(subHeading)
																});
														},
														subHeadings));
											},
											complexHeadings))
								}));
					},
					resultConfig));
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$NoData = {$: 'NoData'};
var $elm$html$Html$col = _VirtualDom_node('col');
var $elm$html$Html$colgroup = _VirtualDom_node('colgroup');
var $elm$html$Html$Attributes$colspan = function (n) {
	return A2(
		_VirtualDom_attribute,
		'colspan',
		$elm$core$String$fromInt(n));
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$hidden = $elm$html$Html$Attributes$boolProperty('hidden');
var $elm$html$Html$Attributes$rowspan = function (n) {
	return A2(
		_VirtualDom_attribute,
		'rowspan',
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$Attributes$scope = $elm$html$Html$Attributes$stringProperty('scope');
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$tbody = _VirtualDom_node('tbody');
var $elm$html$Html$td = _VirtualDom_node('td');
var $elm$html$Html$th = _VirtualDom_node('th');
var $elm$html$Html$thead = _VirtualDom_node('thead');
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $elm_community$list_extra$List$Extra$zip = $elm$core$List$map2($elm$core$Tuple$pair);
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$view = function (config) {
	if (config.$ === 'Ok') {
		var tableConfig = config.a.a;
		var columnHeadings = function () {
			var _v6 = tableConfig.columnHeadings;
			if (_v6.$ === 'ColumnHeadingsSimple') {
				if (!_v6.a.b) {
					return _List_Nil;
				} else {
					var cols = _v6.a;
					var spacer = tableConfig.rowHeadingsShown ? _List_fromArray(
						[
							A2($elm$html$Html$td, _List_Nil, _List_Nil)
						]) : _List_Nil;
					return _List_fromArray(
						[
							A2(
							$elm$html$Html$thead,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$tr,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$hidden(!tableConfig.columnHeadingsShown)
										]),
									_Utils_ap(
										spacer,
										A2(
											$elm$core$List$map,
											function (_v7) {
												var colInfo = _v7.a.a;
												return A2(
													$elm$html$Html$th,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$scope('col')
														]),
													_List_fromArray(
														[colInfo.label]));
											},
											cols)))
								]))
						]);
				}
			} else {
				if (!_v6.a.b) {
					return _List_Nil;
				} else {
					var complexHeadings = _v6.a;
					var subHeadings = $elm$core$List$concat(
						A2(
							$elm$core$List$map,
							function (_v10) {
								var subHeads = _v10.b;
								return A2(
									$elm$core$List$map,
									function (_v11) {
										var colInfo = _v11.a;
										return A2(
											$elm$html$Html$th,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$scope('col')
												]),
											_List_fromArray(
												[colInfo.label]));
									},
									subHeads);
							},
							complexHeadings));
					var spacer = tableConfig.rowHeadingsShown ? _List_fromArray(
						[
							A2(
							$elm$html$Html$td,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$rowspan(2)
								]),
							_List_Nil)
						]) : _List_Nil;
					var mainHeadings = function () {
						var cols = function (n) {
							return (!n) ? _List_fromArray(
								[
									$elm$html$Html$Attributes$scope('col'),
									$elm$html$Html$Attributes$rowspan(2)
								]) : _List_fromArray(
								[
									$elm$html$Html$Attributes$scope('colgroup'),
									$elm$html$Html$Attributes$colspan(n)
								]);
						};
						return A2(
							$elm$core$List$map,
							function (_v9) {
								var colInfo = _v9.a.a;
								var subHeads = _v9.b;
								return A2(
									$elm$html$Html$th,
									cols(
										$elm$core$List$length(subHeads)),
									_List_fromArray(
										[colInfo.label]));
							},
							complexHeadings);
					}();
					var colStructure = function () {
						var colgroup_ = function (n) {
							return (!n) ? A2($elm$html$Html$col, _List_Nil, _List_Nil) : A2(
								$elm$html$Html$colgroup,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$Attributes$attribute,
										'span',
										$elm$core$String$fromInt(n))
									]),
								_List_Nil);
						};
						var colSpacer = tableConfig.rowHeadingsShown ? _List_fromArray(
							[
								A2($elm$html$Html$col, _List_Nil, _List_Nil)
							]) : _List_Nil;
						return _Utils_ap(
							colSpacer,
							A2(
								$elm$core$List$map,
								function (_v8) {
									var subHeads = _v8.b;
									return colgroup_(
										$elm$core$List$length(subHeads));
								},
								complexHeadings));
					}();
					return _Utils_ap(
						colStructure,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$thead,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$tr,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$hidden(!tableConfig.columnHeadingsShown)
											]),
										_Utils_ap(spacer, mainHeadings)),
										A2(
										$elm$html$Html$tr,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$hidden(!tableConfig.columnHeadingsShown)
											]),
										subHeadings)
									]))
							]));
				}
			}
		}();
		var body = function () {
			var _v2 = tableConfig.cells;
			if (!_v2.b) {
				return _List_Nil;
			} else {
				var _v3 = tableConfig.rowHeadings;
				var rowHeadings = _v3.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$tbody,
						_List_Nil,
						A2(
							$elm$core$List$map,
							function (_v4) {
								var rowDataInfo = _v4.a;
								var rowHeadingInfo = _v4.b.a.a;
								return A2(
									$elm$html$Html$tr,
									_List_Nil,
									_Utils_ap(
										_List_fromArray(
											[
												A2(
												$elm$html$Html$th,
												_Utils_ap(
													_List_fromArray(
														[
															$elm$html$Html$Attributes$scope('row'),
															$elm$html$Html$Attributes$hidden(!tableConfig.rowHeadingsShown)
														]),
													rowHeadingInfo.attributes),
												_List_fromArray(
													[rowHeadingInfo.label]))
											]),
										A2(
											$elm$core$List$map,
											function (_v5) {
												var cell = _v5.a;
												return A2(
													$elm$html$Html$td,
													cell.attributes,
													_List_fromArray(
														[cell.value]));
											},
											rowDataInfo)));
							},
							A2($elm_community$list_extra$List$Extra$zip, tableConfig.cells, rowHeadings)))
					]);
			}
		}();
		if (!body.b) {
			return $elm$core$Result$Err($data_viz_lab$elm_chart_builder$Chart$Internal$Table$NoData);
		} else {
			return $elm$core$Result$Ok(
				A2(
					$elm$html$Html$table,
					_List_Nil,
					_Utils_ap(columnHeadings, body)));
		}
	} else {
		var error = config.a;
		return $elm$core$Result$Err(error);
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$tableElement = F2(
	function (config, data) {
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var tableData = A2($data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataBandToTableData, c, data);
		var tableHeadings = A2($data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataBandToTableHeadings, data, c.accessibilityContent);
		var table = $data_viz_lab$elm_chart_builder$Chart$Internal$Table$view(
			A2(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Table$setColumnHeadings,
				tableHeadings,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Table$generate(tableData)));
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$invisibleFigcaption(
			_List_fromArray(
				[
					function () {
					if (table.$ === 'Ok') {
						var table_ = table.a;
						return A2(
							$elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[table_]));
					} else {
						var error = table.a;
						return $elm$html$Html$text(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Table$errorToString(error));
					}
				}()
				]));
	});
var $elm_community$typed_svg$TypedSvg$Attributes$viewBox = F4(
	function (minX, minY, vWidth, vHeight) {
		return A2(
			$elm_community$typed_svg$TypedSvg$Core$attribute,
			'viewBox',
			A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					$elm$core$String$fromFloat,
					_List_fromArray(
						[minX, minY, vWidth, vHeight]))));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$renderBandGrouped = function (_v0) {
	var data = _v0.a;
	var config = _v0.b;
	var paddingInner = A2(
		$gampleman$elm_visualization$Scale$convert,
		$gampleman$elm_visualization$Scale$clamp(
			A2(
				$gampleman$elm_visualization$Scale$linear,
				_Utils_Tuple2(0.2, 0.999),
				_Utils_Tuple2(0, 500))),
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDataBandDepth(data));
	var domain = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainBandFromData, data, config);
	var dataLength = $elm$core$List$length(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data));
	var paddingInnerGroup = (dataLength === 1) ? 0 : 0.1;
	var colorScale = A2(
		$gampleman$elm_visualization$Scale$linear,
		_Utils_Tuple2(0, 1),
		A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, 0),
			domain.continuous));
	var classNames = $elm$html$Html$Attributes$classList(
		_List_fromArray(
			[
				_Utils_Tuple2($data_viz_lab$elm_chart_builder$Chart$Internal$Constants$rootClassName, true),
				_Utils_Tuple2($data_viz_lab$elm_chart_builder$Chart$Internal$Constants$barClassName, true)
			]));
	var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
	var h = c.height;
	var m = c.margin;
	var p = c.padding;
	var outerH = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$outerHeight, h, m, p);
	var w = c.width;
	var outerW = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$outerWidth, w, m, p);
	var svgElAttrs = _Utils_ap(
		_List_fromArray(
			[
				A4($elm_community$typed_svg$TypedSvg$Attributes$viewBox, 0, 0, outerW, outerH),
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(outerW),
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(outerH),
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$role('img'),
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaHidden
			]),
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledbyContent(c));
	var bandGroupRange = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getBandGroupRange, config, w, h);
	var bandGroupScale = A3(
		$gampleman$elm_visualization$Scale$band,
		_Utils_update(
			$gampleman$elm_visualization$Scale$defaultBandConfig,
			{paddingInner: paddingInnerGroup, paddingOuter: paddingInnerGroup}),
		bandGroupRange,
		A2($elm$core$Maybe$withDefault, _List_Nil, domain.bandGroup));
	var bandSingleRange = A2(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getBandSingleRange,
		config,
		$gampleman$elm_visualization$Scale$bandwidth(bandGroupScale));
	var bandSingleScale = A3(
		$gampleman$elm_visualization$Scale$band,
		_Utils_update(
			$gampleman$elm_visualization$Scale$defaultBandConfig,
			{paddingInner: paddingInner, paddingOuter: paddingInner / 2}),
		bandSingleRange,
		A2($elm$core$Maybe$withDefault, _List_Nil, domain.bandSingle));
	var continuousRange = A5($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getContinuousRange, config, $data_viz_lab$elm_chart_builder$Chart$Internal$Type$RenderChart, w, h, bandSingleScale);
	var continuousScale = A2(
		$gampleman$elm_visualization$Scale$linear,
		continuousRange,
		A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, 0),
			domain.continuous));
	var iconOffset = $elm$core$List$isEmpty(c.symbols) ? 0 : (A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolSpace, $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Vertical, bandSingleScale, c.symbols) + $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap);
	var symbolElements = function () {
		var _v2 = c.layout;
		if (_v2.$ === 'GroupedBar') {
			return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons(config) ? A3($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$symbolsToSymbolElements, c.orientation, bandSingleScale, c.symbols) : _List_Nil;
		} else {
			return _List_Nil;
		}
	}();
	var axisBandScale = ($elm$core$List$length(
		A2($elm$core$Maybe$withDefault, _List_Nil, domain.bandGroup)) > 1) ? bandGroupScale : bandSingleScale;
	var svgEl = A2(
		$elm_community$typed_svg$TypedSvg$svg,
		svgElAttrs,
		_Utils_ap(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$descAndTitle(c),
			_Utils_ap(
				A3($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$bandGroupedYAxis, c, iconOffset, continuousScale),
				_Utils_ap(
					A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$bandXAxis, c, axisBandScale),
					_Utils_ap(
						_List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, m.left + p.left, m.top + p.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								A2(
									$elm$core$List$map,
									A6($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$columns, config, iconOffset, bandGroupScale, bandSingleScale, continuousScale, colorScale),
									$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data)))
							]),
						symbolElements)))));
	var _v1 = c.accessibilityContent;
	if (_v1.$ === 'AccessibilityNone') {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[classNames]),
			_List_fromArray(
				[svgEl]));
	} else {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[classNames]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$figure,
					_List_Nil,
					_List_fromArray(
						[
							svgEl,
							A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$tableElement, config, data)
						]))
				]));
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$RenderAxis = {$: 'RenderAxis'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$adjustContinuousRange = F3(
	function (config, stackedDepth, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var layout = c.layout;
		var orientation = c.orientation;
		if (orientation.$ === 'Horizontal') {
			if (layout.$ === 'GroupedBar') {
				return _Utils_Tuple2(a, b);
			} else {
				return _Utils_Tuple2(a + stackedDepth, b);
			}
		} else {
			return _Utils_Tuple2(a - stackedDepth, b);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$dataBandToDataStacked = F2(
	function (config, data) {
		var seed = A2(
			$elm$core$List$map,
			function (d) {
				return _Utils_Tuple2(d, _List_Nil);
			},
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainBandFromData, data, config).bandSingle));
		return A3(
			$elm$core$List$foldl,
			F2(
				function (d, acc) {
					return A2(
						$elm$core$List$map,
						function (a) {
							return _Utils_eq(d.a, a.a) ? _Utils_Tuple2(
								a.a,
								A2($elm$core$List$cons, d.b, a.b)) : a;
						},
						acc);
				}),
			seed,
			$elm$core$List$concat(
				A2(
					$elm$core$List$map,
					function ($) {
						return $.points;
					},
					$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data))));
	});
var $elm$core$Set$foldr = F3(
	function (func, initialState, _v0) {
		var dict = _v0.a;
		return A3(
			$elm$core$Dict$foldr,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $elm$core$List$sortBy = _List_sortBy;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toDataBand = function (dataBand) {
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DataBand(dataBand);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fillGapsForStack = function (data) {
	var d = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data);
	var allStrings = $elm$core$Set$fromList(
		$elm$core$List$concat(
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.points;
					},
					$elm$core$List$map($elm$core$Tuple$first)),
				d)));
	var fillGaps = function (dataGroupBand) {
		var points = A2($elm$core$List$map, $elm$core$Tuple$first, dataGroupBand.points);
		var newPoints = A2(
			$elm$core$List$sortBy,
			$elm$core$Tuple$first,
			A2(
				$elm$core$List$append,
				dataGroupBand.points,
				A3(
					$elm$core$Set$foldr,
					F2(
						function (s, acc) {
							return A2($elm$core$List$member, s, points) ? acc : A2(
								$elm$core$List$cons,
								_Utils_Tuple2(s, 0),
								acc);
						}),
					_List_Nil,
					allStrings)));
		return _Utils_update(
			dataGroupBand,
			{points: newPoints});
	};
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toDataBand(
		A2($elm$core$List$map, fillGaps, d));
};
var $gampleman$elm_visualization$Shape$Stack$offsetDiverging = function (series) {
	var folder = F2(
		function (_v1, _v2) {
			var x = _v1.a;
			var y = _v1.b;
			var yp = _v2.a;
			var yn = _v2.b;
			var accum = _v2.c;
			var dy = y - x;
			return (dy >= 0) ? _Utils_Tuple3(
				yp + dy,
				yn,
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(yp, yp + dy),
					accum)) : ((dy < 0) ? _Utils_Tuple3(
				yp,
				yn + dy,
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(yn + dy, yn),
					accum)) : _Utils_Tuple3(
				yp,
				yn,
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(yp, y),
					accum)));
		});
	var modifyColumn = function (column) {
		return $elm$core$List$reverse(
			function (_v0) {
				var newColumn = _v0.c;
				return newColumn;
			}(
				A3(
					$elm$core$List$foldl,
					folder,
					_Utils_Tuple3(0, 0, _List_Nil),
					column)));
	};
	return $elm_community$list_extra$List$Extra$transpose(
		A2(
			$elm$core$List$map,
			modifyColumn,
			$elm_community$list_extra$List$Extra$transpose(series)));
};
var $gampleman$elm_visualization$Shape$stackOffsetDiverging = $gampleman$elm_visualization$Shape$Stack$offsetDiverging;
var $gampleman$elm_visualization$Shape$Stack$offsetNone = function (series) {
	if (!series.b) {
		return _List_Nil;
	} else {
		var x = series.a;
		var xs = series.b;
		var weirdAdd = F2(
			function (_v3, _v4) {
				var s11 = _v3.b;
				var s00 = _v4.a;
				var s01 = _v4.b;
				return $elm$core$Basics$isNaN(s01) ? _Utils_Tuple2(s00, s11 + s00) : _Utils_Tuple2(s01, s11 + s01);
			});
		var helper = F2(
			function (s1, _v2) {
				var s0 = _v2.a;
				var accum = _v2.b;
				return _Utils_Tuple2(
					A3($elm$core$List$map2, weirdAdd, s1, s0),
					A2($elm$core$List$cons, s0, accum));
			});
		return $elm$core$List$reverse(
			function (_v1) {
				var a = _v1.a;
				var b = _v1.b;
				return A2($elm$core$List$cons, a, b);
			}(
				A3(
					$elm$core$List$foldl,
					helper,
					_Utils_Tuple2(x, _List_Nil),
					xs)));
	}
};
var $gampleman$elm_visualization$Shape$stackOffsetNone = $gampleman$elm_visualization$Shape$Stack$offsetNone;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getOffset = function (config) {
	var _v0 = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).layout;
	if (_v0.$ === 'StackedBar') {
		var direction = _v0.a;
		if (direction.$ === 'Diverging') {
			return $gampleman$elm_visualization$Shape$stackOffsetDiverging;
		} else {
			return $gampleman$elm_visualization$Shape$stackOffsetNone;
		}
	} else {
		return $gampleman$elm_visualization$Shape$stackOffsetNone;
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getStackedValuesAndGroupes = F2(
	function (values, data) {
		var m = $elm$core$List$map2(
			F2(
				function (d, v) {
					return A3(
						$elm$core$List$map2,
						F2(
							function (stackedValue, rawValue) {
								return {rawValue: rawValue.b, stackedValue: stackedValue};
							}),
						v,
						d.points);
				}));
		return _Utils_Tuple2(
			A2(
				m,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data),
				$elm$core$List$reverse(
					$elm_community$list_extra$List$Extra$transpose(values))),
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (idx, s) {
						return A2(
							$elm$core$Maybe$withDefault,
							$elm$core$String$fromInt(idx),
							s.groupLabel);
					}),
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data)));
	});
var $gampleman$elm_visualization$Shape$Stack$calculateExtremes = function (coords) {
	var folder = F2(
		function (_v2, _v3) {
			var y1 = _v2.a;
			var y2 = _v2.b;
			var accmin = _v3.a;
			var accmax = _v3.b;
			return _Utils_Tuple2(
				A2(
					$elm$core$Basics$min,
					accmin,
					A2($elm$core$Basics$min, y1, y2)),
				A2(
					$elm$core$Basics$max,
					accmax,
					A2($elm$core$Basics$max, y1, y2)));
		});
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, _v1) {
				var mi = _v0.a;
				var ma = _v0.b;
				var accmin = _v1.a;
				var accmax = _v1.b;
				return _Utils_Tuple2(
					A2($elm$core$Basics$min, mi, accmin),
					A2($elm$core$Basics$max, ma, accmax));
			}),
		_Utils_Tuple2(0, 0),
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$List$foldl,
				folder,
				_Utils_Tuple2(0, 0)),
			coords));
};
var $elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_v0, _v1) {
			var x = _v0.a;
			var y = _v0.b;
			var xs = _v1.a;
			var ys = _v1.b;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, x, xs),
				A2($elm$core$List$cons, y, ys));
		});
	return A3(
		$elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var $gampleman$elm_visualization$Shape$Stack$computeStack = function (_v0) {
	var offset = _v0.offset;
	var order = _v0.order;
	var data = _v0.data;
	var _v1 = $elm$core$List$unzip(
		order(data));
	var labels = _v1.a;
	var values = _v1.b;
	var stacked = offset(
		A2(
			$elm$core$List$map,
			$elm$core$List$map(
				function (e) {
					return _Utils_Tuple2(0, e);
				}),
			values));
	return {
		extent: $gampleman$elm_visualization$Shape$Stack$calculateExtremes(stacked),
		labels: labels,
		values: stacked
	};
};
var $gampleman$elm_visualization$Shape$stack = $gampleman$elm_visualization$Shape$Stack$computeStack;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorCategoricalStyle = F2(
	function (c, idx) {
		var _v0 = c.colorResource;
		if (_v0.$ === 'ColorPalette') {
			var colors = _v0.a;
			return 'fill: ' + A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$colorPaletteToColor, colors, idx);
		} else {
			return '';
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$getStackedLabel = F2(
	function (idx, l) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2($elm_community$list_extra$List$Extra$getAt, idx, l));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedColumnTitleText = F4(
	function (c, idx, labels, value) {
		var ordinalValue = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$getStackedLabel, idx, labels);
		var _v0 = c.showColumnTitle;
		switch (_v0.$) {
			case 'StackedColumnTitle':
				var formatter = _v0.a;
				return _List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$title,
						_List_Nil,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(
								ordinalValue + (': ' + formatter(value)))
							]))
					]);
			case 'YColumnTitle':
				var formatter = _v0.a;
				return _List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$title,
						_List_Nil,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(
								formatter(value))
							]))
					]);
			case 'XOrdinalColumnTitle':
				return _List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$title,
						_List_Nil,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(ordinalValue)
							]))
					]);
			default:
				return _List_Nil;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$stackedValuesInverse = F2(
	function (width, values) {
		return A2(
			$elm$core$List$map,
			function (v) {
				var _v0 = v.stackedValue;
				var left = _v0.a;
				var right = _v0.b;
				return _Utils_update(
					v,
					{
						stackedValue: _Utils_Tuple2(
							$elm$core$Basics$abs(left - width),
							$elm$core$Basics$abs(right - width))
					});
			},
			values);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalRectsStacked = F3(
	function (c, bandGroupScale, _v0) {
		var group = _v0.a;
		var values = _v0.b;
		var labels = _v0.c;
		var block = F2(
			function (idx, _v2) {
				var rawValue = _v2.rawValue;
				var stackedValue = _v2.stackedValue;
				var coreStyle = $elm_community$typed_svg$TypedSvg$Attributes$style(
					A2(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
						c.coreStyle,
						A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorCategoricalStyle, c, idx)));
				var _v1 = stackedValue;
				var lower = _v1.a;
				var upper = _v1.b;
				var rect_ = A2(
					$elm_community$typed_svg$TypedSvg$rect,
					_List_fromArray(
						[
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(
							A2($gampleman$elm_visualization$Scale$convert, bandGroupScale, group)),
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(lower + idx),
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(
							$gampleman$elm_visualization$Scale$bandwidth(bandGroupScale)),
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(
							$elm$core$Basics$abs(upper - lower)),
							$elm_community$typed_svg$TypedSvg$Attributes$shapeRendering($elm_community$typed_svg$TypedSvg$Types$RenderCrispEdges),
							coreStyle
						]),
					A4($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedColumnTitleText, c, idx, labels, rawValue));
				return A2(
					$elm_community$typed_svg$TypedSvg$g,
					_List_fromArray(
						[
							$elm_community$typed_svg$TypedSvg$Attributes$class(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName,
									$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName + ('-' + $elm$core$String$fromInt(idx))
								]))
						]),
					_List_fromArray(
						[rect_]));
			});
		return A2(
			$elm$core$List$indexedMap,
			function (idx) {
				return block(idx);
			},
			A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$stackedValuesInverse, c.width, values));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalRectsStacked = F3(
	function (c, bandGroupScale, _v0) {
		var group = _v0.a;
		var values = _v0.b;
		var labels = _v0.c;
		var bandValue = A2($gampleman$elm_visualization$Scale$convert, bandGroupScale, group);
		var block = F2(
			function (idx, _v2) {
				var rawValue = _v2.rawValue;
				var stackedValue = _v2.stackedValue;
				var coreStyleFromX = c.coreStyleFromPointBandX(
					A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$getStackedLabel, idx, labels));
				var coreStyle = $elm_community$typed_svg$TypedSvg$Attributes$style(
					A2(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
						coreStyleFromX,
						A2(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
							c.coreStyle,
							A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorCategoricalStyle, c, idx))));
				var _v1 = stackedValue;
				var upper = _v1.a;
				var lower = _v1.b;
				var rect_ = A2(
					$elm_community$typed_svg$TypedSvg$rect,
					_List_fromArray(
						[
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(bandValue),
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(lower - idx),
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(
							$gampleman$elm_visualization$Scale$bandwidth(bandGroupScale)),
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(
							$elm$core$Basics$abs(upper - lower)),
							$elm_community$typed_svg$TypedSvg$Attributes$shapeRendering($elm_community$typed_svg$TypedSvg$Types$RenderCrispEdges),
							coreStyle
						]),
					A4($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedColumnTitleText, c, idx, labels, rawValue));
				return A2(
					$elm_community$typed_svg$TypedSvg$g,
					_List_fromArray(
						[
							$elm_community$typed_svg$TypedSvg$Attributes$class(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName,
									$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName + ('-' + $elm$core$String$fromInt(idx))
								]))
						]),
					_List_fromArray(
						[rect_]));
			});
		return A2(
			$elm$core$List$indexedMap,
			function (idx) {
				return block(idx);
			},
			values);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedColumns = F3(
	function (config, bandGroupScale, payload) {
		var rects = function () {
			var _v0 = config.orientation;
			if (_v0.$ === 'Vertical') {
				return A3($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalRectsStacked, config, bandGroupScale, payload);
			} else {
				return A3($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalRectsStacked, config, bandGroupScale, payload);
			}
		}();
		return A2(
			$elm_community$typed_svg$TypedSvg$g,
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$class(
					_List_fromArray(
						[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName]))
				]),
			rects);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedContainerTranslate = F3(
	function (config, a, b) {
		var orientation = config.orientation;
		if (orientation.$ === 'Horizontal') {
			return A2($elm_community$typed_svg$TypedSvg$Types$Translate, a, b);
		} else {
			return A2($elm_community$typed_svg$TypedSvg$Types$Translate, a, b);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$renderBandStacked = function (_v0) {
	var data = _v0.a;
	var config = _v0.b;
	var noGapsData = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fillGapsForStack(data);
	var stackDepth = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDataBandDepth(noGapsData);
	var domain = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainBandFromData, data, config);
	var dataStacked = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$dataBandToDataStacked, config, noGapsData);
	var stackedConfig = {
		data: dataStacked,
		offset: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getOffset(config),
		order: $elm$core$Basics$identity
	};
	var continuousDomain = domain.continuous;
	var classNames = $elm$html$Html$Attributes$classList(
		_List_fromArray(
			[
				_Utils_Tuple2($data_viz_lab$elm_chart_builder$Chart$Internal$Constants$rootClassName, true),
				_Utils_Tuple2($data_viz_lab$elm_chart_builder$Chart$Internal$Constants$barClassName, true)
			]));
	var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
	var h = c.height;
	var m = c.margin;
	var p = c.padding;
	var outerH = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$outerHeight, h, m, p);
	var w = c.width;
	var outerW = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$outerWidth, w, m, p);
	var svgElAttrs = _Utils_ap(
		_List_fromArray(
			[
				A4($elm_community$typed_svg$TypedSvg$Attributes$viewBox, 0, 0, outerW, outerH),
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(outerW),
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(outerH),
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$role('img'),
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaHidden
			]),
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledbyContent(c));
	var bandGroupRange = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getBandGroupRange, config, w, h);
	var bandGroupScale = A3(
		$gampleman$elm_visualization$Scale$band,
		_Utils_update(
			$gampleman$elm_visualization$Scale$defaultBandConfig,
			{paddingInner: 0.1, paddingOuter: 0.05}),
		bandGroupRange,
		A2($elm$core$Maybe$withDefault, _List_Nil, domain.bandGroup));
	var bandSingleRange = A2(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getBandSingleRange,
		config,
		$gampleman$elm_visualization$Scale$bandwidth(bandGroupScale));
	var bandSingleScale = A3(
		$gampleman$elm_visualization$Scale$band,
		$gampleman$elm_visualization$Scale$defaultBandConfig,
		bandSingleRange,
		A2($elm$core$Maybe$withDefault, _List_Nil, domain.bandSingle));
	var continuousRange = A3(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$adjustContinuousRange,
		config,
		stackDepth,
		A5($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getContinuousRange, config, $data_viz_lab$elm_chart_builder$Chart$Internal$Type$RenderChart, w, h, bandSingleScale));
	var continuousRangeAxis = A3(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$adjustContinuousRange,
		config,
		stackDepth,
		A5($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getContinuousRange, config, $data_viz_lab$elm_chart_builder$Chart$Internal$Type$RenderAxis, w, h, bandSingleScale));
	var axisBandScale = bandGroupScale;
	var _v1 = $gampleman$elm_visualization$Shape$stack(stackedConfig);
	var values = _v1.values;
	var labels = _v1.labels;
	var extent = _v1.extent;
	var continuousExtent = function () {
		if (continuousDomain.$ === 'Just') {
			var ld = continuousDomain.a;
			var _v6 = c.layout;
			if (_v6.$ === 'StackedBar') {
				var direction = _v6.a;
				if (direction.$ === 'Diverging') {
					return A2(
						$elm$core$Maybe$withDefault,
						_Utils_Tuple2(0, 0),
						A2(
							$elm$core$Maybe$map,
							function (max) {
								return _Utils_Tuple2(max * (-1), max);
							},
							$elm$core$List$maximum(
								_List_fromArray(
									[
										$elm$core$Basics$abs(ld.a),
										$elm$core$Basics$abs(ld.b)
									]))));
				} else {
					return extent;
				}
			} else {
				return extent;
			}
		} else {
			return extent;
		}
	}();
	var continuousScale = A2($gampleman$elm_visualization$Scale$linear, continuousRange, continuousExtent);
	var continuousScaleAxis = A2($gampleman$elm_visualization$Scale$linear, continuousRangeAxis, continuousExtent);
	var _v2 = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getStackedValuesAndGroupes, values, noGapsData);
	var columnValues = _v2.a;
	var columnGroupes = _v2.b;
	var scaledValues = A2(
		$elm$core$List$map,
		$elm$core$List$map(
			function (vals) {
				var _v4 = vals.stackedValue;
				var a1 = _v4.a;
				var a2 = _v4.b;
				return _Utils_update(
					vals,
					{
						stackedValue: _Utils_Tuple2(
							A2($gampleman$elm_visualization$Scale$convert, continuousScale, a1),
							A2($gampleman$elm_visualization$Scale$convert, continuousScale, a2))
					});
			}),
		columnValues);
	var svgEl = A2(
		$elm_community$typed_svg$TypedSvg$svg,
		svgElAttrs,
		_Utils_ap(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$descAndTitle(c),
			_Utils_ap(
				A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$bandXAxis, c, axisBandScale),
				_Utils_ap(
					A3($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$bandGroupedYAxis, c, 0, continuousScaleAxis),
					_List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A3($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedContainerTranslate, c, m.left, m.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							A2(
								$elm$core$List$map,
								A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedColumns, c, bandGroupScale),
								A3(
									$elm$core$List$map2,
									F2(
										function (a, b) {
											return _Utils_Tuple3(a, b, labels);
										}),
									columnGroupes,
									scaledValues)))
						])))));
	var _v3 = c.accessibilityContent;
	if (_v3.$ === 'AccessibilityNone') {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[classNames]),
			_List_fromArray(
				[svgEl]));
	} else {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[classNames]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$figure,
					_List_Nil,
					_List_fromArray(
						[
							svgEl,
							A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$tableElement, config, noGapsData)
						]))
				]));
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ExternalData = function (a) {
	return {$: 'ExternalData', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toExternalData = function (data) {
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ExternalData(data);
};
var $data_viz_lab$elm_chart_builder$Chart$Bar$render = F2(
	function (_v0, config) {
		var externalData = _v0.a;
		var accessor = _v0.b;
		var data = A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$externalToDataBand,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$toExternalData(externalData),
			accessor);
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var _v1 = c.layout;
		switch (_v1.$) {
			case 'GroupedBar':
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$renderBandGrouped(
					_Utils_Tuple2(data, config));
			case 'StackedBar':
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$renderBandStacked(
					_Utils_Tuple2(data, config));
			default:
				return $elm$html$Html$text('');
		}
	});
var $ggb$numeral_elm$Numeral$empty = F3(
	function (lang, format_val, value) {
		return {
			abbreviation: '',
			bytes: '',
			customSuffix: '',
			decimal: '',
			format_value: format_val,
			language: lang,
			leadingZeros: 0,
			minus: '',
			neg: false,
			negP: false,
			optionalDecimal: false,
			ordinal: '',
			parens: _Utils_Tuple2('', ''),
			plus: '',
			precision: '',
			signed: false,
			strValue: $elm$core$String$fromFloat(value),
			value: value,
			word: ''
		};
	});
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $ggb$numeral_elm$Numeral$regex = function (str) {
	return A2(
		$elm$core$Maybe$withDefault,
		$elm$regex$Regex$never,
		$elm$regex$Regex$fromString(str));
};
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $ggb$numeral_elm$Numeral$emptyReplace = function (str) {
	return A2(
		$elm$regex$Regex$replace,
		$ggb$numeral_elm$Numeral$regex(str),
		function (_v0) {
			return '';
		});
};
var $ggb$numeral_elm$Numeral$checkAbbreviation = function (numeral) {
	var _v0 = numeral;
	var language = _v0.language;
	var format_value = _v0.format_value;
	var value = _v0.value;
	var abbrB = A2($elm$core$String$contains, 'aB', format_value);
	var abbrK = A2($elm$core$String$contains, 'aK', format_value);
	var abbrM = A2($elm$core$String$contains, 'aM', format_value);
	var abbrT = A2($elm$core$String$contains, 'aT', format_value);
	var abbrForce = !(abbrK || (abbrM || (abbrB || abbrT)));
	var absValue = $elm$core$Basics$abs(value);
	var _v1 = A2($elm$core$String$contains, ' a', format_value) ? _Utils_Tuple2(
		' ',
		A2($ggb$numeral_elm$Numeral$emptyReplace, ' a', format_value)) : _Utils_Tuple2(
		'',
		A2($ggb$numeral_elm$Numeral$emptyReplace, 'a', format_value));
	var abbr = _v1.a;
	var format1 = _v1.b;
	return (!A2($elm$core$String$contains, 'a', format_value)) ? numeral : ((((_Utils_cmp(
		absValue,
		A2($elm$core$Basics$pow, 10, 12)) > -1) && abbrForce) || abbrT) ? _Utils_update(
		numeral,
		{
			abbreviation: _Utils_ap(abbr, language.abbreviations.trillion),
			format_value: format1,
			value: value / A2($elm$core$Basics$pow, 10, 12)
		}) : ((((_Utils_cmp(
		absValue,
		A2($elm$core$Basics$pow, 10, 12)) < 0) && ((_Utils_cmp(
		absValue,
		A2($elm$core$Basics$pow, 10, 9)) > -1) && abbrForce)) || abbrB) ? _Utils_update(
		numeral,
		{
			abbreviation: _Utils_ap(abbr, language.abbreviations.billion),
			format_value: format1,
			value: value / A2($elm$core$Basics$pow, 10, 9)
		}) : ((((_Utils_cmp(
		absValue,
		A2($elm$core$Basics$pow, 10, 9)) < 0) && ((_Utils_cmp(
		absValue,
		A2($elm$core$Basics$pow, 10, 6)) > -1) && abbrForce)) || abbrM) ? _Utils_update(
		numeral,
		{
			abbreviation: _Utils_ap(abbr, language.abbreviations.million),
			format_value: format1,
			value: value / A2($elm$core$Basics$pow, 10, 6)
		}) : ((((_Utils_cmp(
		absValue,
		A2($elm$core$Basics$pow, 10, 6)) < 0) && ((_Utils_cmp(
		absValue,
		A2($elm$core$Basics$pow, 10, 3)) > -1) && abbrForce)) || abbrK) ? _Utils_update(
		numeral,
		{
			abbreviation: _Utils_ap(abbr, language.abbreviations.thousand),
			format_value: format1,
			value: value / A2($elm$core$Basics$pow, 10, 3)
		}) : _Utils_update(
		numeral,
		{abbreviation: abbr, format_value: format1})))));
};
var $ggb$numeral_elm$Numeral$suffixes = $elm$core$Array$fromList(
	_List_fromArray(
		['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']));
var $ggb$numeral_elm$Numeral$checkByte = function (numeral) {
	var _v0 = numeral;
	var format_value = _v0.format_value;
	var value = _v0.value;
	var suffixIndex1 = function (power) {
		suffixIndex1:
		while (true) {
			var minValue = A2($elm$core$Basics$pow, 1024, power);
			var maxValue = A2($elm$core$Basics$pow, 1024, power + 1);
			if ((_Utils_cmp(value, minValue) > -1) && (_Utils_cmp(value, maxValue) < 0)) {
				return (minValue > 0) ? _Utils_Tuple2(power, value / minValue) : _Utils_Tuple2(power, value);
			} else {
				if (power < 10) {
					var $temp$power = power + 1;
					power = $temp$power;
					continue suffixIndex1;
				} else {
					return _Utils_Tuple2(-1, value);
				}
			}
		}
	};
	var _v1 = suffixIndex1(0);
	var suffixIndex = _v1.a;
	var value1 = _v1.b;
	var suffix = A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Array$get,
			$elm$core$Basics$round(suffixIndex),
			$ggb$numeral_elm$Numeral$suffixes));
	var _v2 = A2($elm$core$String$contains, ' b', format_value) ? _Utils_Tuple2(
		' ',
		A2($ggb$numeral_elm$Numeral$emptyReplace, ' b', format_value)) : _Utils_Tuple2(
		'',
		A2($ggb$numeral_elm$Numeral$emptyReplace, 'b', format_value));
	var bytes = _v2.a;
	var format1 = _v2.b;
	return A2($elm$core$String$contains, 'b', format_value) ? _Utils_update(
		numeral,
		{
			bytes: _Utils_ap(bytes, suffix),
			format_value: format1,
			value: value1
		}) : numeral;
};
var $elm$regex$Regex$find = _Regex_findAtMost(_Regex_infinity);
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $ggb$numeral_elm$Numeral$checkForCustomSuffix = function (numeral) {
	var hasSuffix = $elm$core$List$head(
		A2(
			$elm$regex$Regex$find,
			$ggb$numeral_elm$Numeral$regex('\\[\\D+\\]$'),
			numeral.format_value));
	if (hasSuffix.$ === 'Nothing') {
		return numeral;
	} else {
		var match = hasSuffix.a.match;
		return _Utils_update(
			numeral,
			{
				customSuffix: A3(
					$elm$regex$Regex$replace,
					$ggb$numeral_elm$Numeral$regex('\\[|\\]'),
					function (_v1) {
						return '';
					},
					match),
				format_value: A3($elm$core$String$replace, match, '', numeral.format_value)
			});
	}
};
var $ggb$numeral_elm$Numeral$checkIfNegative = function (numeral) {
	return A2($elm$core$String$contains, '-', numeral.word) ? _Utils_update(
		numeral,
		{
			neg: true,
			word: A3(
				$elm$core$String$slice,
				1,
				$elm$core$String$length(numeral.word),
				numeral.word)
		}) : numeral;
};
var $ggb$numeral_elm$Numeral$checkOptionalDec = function (numeral) {
	return A2($elm$core$String$contains, '[.]', numeral.format_value) ? _Utils_update(
		numeral,
		{
			format_value: A3(
				$elm$regex$Regex$replace,
				$ggb$numeral_elm$Numeral$regex('\\[\\.\\]'),
				function (_v0) {
					return '.';
				},
				numeral.format_value),
			optionalDecimal: true
		}) : numeral;
};
var $ggb$numeral_elm$Numeral$checkOrdinal = function (numeral) {
	var _v0 = numeral;
	var language = _v0.language;
	var format_value = _v0.format_value;
	var value = _v0.value;
	var _v1 = A2($elm$core$String$contains, ' o', format_value) ? _Utils_Tuple2(
		' ',
		A2($ggb$numeral_elm$Numeral$emptyReplace, ' o', format_value)) : _Utils_Tuple2(
		'',
		A2($ggb$numeral_elm$Numeral$emptyReplace, 'o', format_value));
	var ord = _v1.a;
	var format1 = _v1.b;
	return A2($elm$core$String$contains, 'o', format_value) ? _Utils_update(
		numeral,
		{
			format_value: format1,
			ordinal: _Utils_ap(
				ord,
				numeral.language.ordinal(value))
		}) : numeral;
};
var $ggb$numeral_elm$Numeral$checkParensAndSign = function (numeral) {
	return A2($elm$core$String$contains, '(', numeral.format_value) ? _Utils_update(
		numeral,
		{
			format_value: A3($elm$core$String$slice, 1, -1, numeral.format_value),
			negP: true,
			signed: false
		}) : (A2($elm$core$String$contains, '+', numeral.format_value) ? _Utils_update(
		numeral,
		{
			format_value: A2($ggb$numeral_elm$Numeral$emptyReplace, '\\+', numeral.format_value),
			negP: false,
			signed: true
		}) : numeral);
};
var $ggb$numeral_elm$Numeral$addThousandsDelimiter = F2(
	function (lang, word) {
		return A3(
			$elm$regex$Regex$replace,
			$ggb$numeral_elm$Numeral$regex('(\\d)(?=(\\d{3})+(?!\\d))'),
			function (_v0) {
				var match = _v0.match;
				return _Utils_ap(match, lang.delimiters.thousands);
			},
			word);
	});
var $ggb$numeral_elm$Numeral$checkThousandsDelimiter = function (numeral) {
	return A2($elm$core$String$contains, ',', numeral.format_value) ? _Utils_update(
		numeral,
		{
			word: A2($ggb$numeral_elm$Numeral$addThousandsDelimiter, numeral.language, numeral.word)
		}) : numeral;
};
var $ggb$numeral_elm$Numeral$createFinalString = function (_v0) {
	var parens = _v0.parens;
	var minus = _v0.minus;
	var plus = _v0.plus;
	var word = _v0.word;
	var decimal = _v0.decimal;
	var ordinal = _v0.ordinal;
	var abbreviation = _v0.abbreviation;
	var bytes = _v0.bytes;
	var customSuffix = _v0.customSuffix;
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			[parens.a, minus, plus, word, decimal, ordinal, abbreviation, bytes, customSuffix, parens.b]));
};
var $ggb$numeral_elm$Numeral$indexOf = F2(
	function (part, word) {
		return A2(
			$elm$core$Maybe$withDefault,
			-1,
			$elm$core$List$head(
				A2($elm$core$String$indexes, part, word)));
	});
var $ggb$numeral_elm$Numeral$createFinalWord = function (numeral) {
	return (!A2($ggb$numeral_elm$Numeral$indexOf, '.', numeral.format_value)) ? _Utils_update(
		numeral,
		{word: ''}) : numeral;
};
var $ggb$numeral_elm$Numeral$createParens = function (numeral) {
	return (numeral.negP && numeral.neg) ? _Utils_update(
		numeral,
		{
			parens: _Utils_Tuple2('(', ')')
		}) : numeral;
};
var $ggb$numeral_elm$Numeral$getPrecision = function (numeral) {
	var splitted = A2($elm$core$String$split, '.', numeral.format_value);
	var precision = A2(
		$elm$core$Maybe$withDefault,
		'',
		$elm$core$List$head(
			A2($elm$core$List$drop, 1, splitted)));
	var leadingZeros = $elm$core$String$length(
		A2(
			$elm$core$Maybe$withDefault,
			'',
			$elm$core$List$head(splitted)));
	var leadingZeros_ = A2($elm$core$String$contains, ',', numeral.format_value) ? 0 : leadingZeros;
	return _Utils_update(
		numeral,
		{leadingZeros: leadingZeros_, precision: precision});
};
var $ggb$numeral_elm$Numeral$hasMinus = function (numeral) {
	return ((!numeral.negP) && numeral.neg) ? _Utils_update(
		numeral,
		{minus: '-'}) : numeral;
};
var $ggb$numeral_elm$Numeral$hasPlus = function (numeral) {
	return ((!numeral.neg) && numeral.signed) ? _Utils_update(
		numeral,
		{plus: '+'}) : numeral;
};
var $ggb$numeral_elm$Numeral$processDecimal = function (numeral) {
	var d = numeral.decimal;
	var result = A2(
		$elm$core$Maybe$withDefault,
		1,
		$elm$core$String$toInt(
			A3(
				$elm$core$String$slice,
				1,
				$elm$core$String$length(d),
				d)));
	return (numeral.optionalDecimal && (!result)) ? _Utils_update(
		numeral,
		{decimal: ''}) : _Utils_update(
		numeral,
		{decimal: d});
};
var $ggb$numeral_elm$Numeral$processLeadingZeros = function (numeral) {
	var w = $elm$core$String$length(
		A2(
			$elm$core$Maybe$withDefault,
			'',
			$elm$core$List$head(
				A2($elm$core$String$split, '.', numeral.word))));
	var n = numeral.leadingZeros - w;
	var prefix = A2($elm$core$String$repeat, n, '0');
	return _Utils_update(
		numeral,
		{
			word: _Utils_ap(prefix, numeral.word)
		});
};
var $ggb$numeral_elm$Numeral$flip = F3(
	function (f, x, y) {
		return A2(f, y, x);
	});
var $ggb$numeral_elm$Numeral$toFixed = F2(
	function (precision, value) {
		var power = A2($elm$core$Basics$pow, 10, precision);
		var pad = function (num) {
			_v0$2:
			while (true) {
				if (num.b) {
					if (num.b.b) {
						if (!num.b.b.b) {
							var x = num.a;
							var _v1 = num.b;
							var y = _v1.a;
							return _List_fromArray(
								[
									x,
									A3(
									$elm$core$String$padRight,
									precision,
									_Utils_chr('0'),
									y)
								]);
						} else {
							break _v0$2;
						}
					} else {
						var val = num.a;
						return _List_fromArray(
							[
								val,
								A3(
								$elm$core$String$padRight,
								precision,
								_Utils_chr('0'),
								'')
							]);
					}
				} else {
					break _v0$2;
				}
			}
			var val = num;
			return val;
		};
		return A2(
			$elm$core$String$join,
			'.',
			pad(
				A2(
					$elm$core$String$split,
					'.',
					$elm$core$String$fromFloat(
						$elm$core$Basics$round((value * power) + 0.01) / power))));
	});
var $ggb$numeral_elm$Numeral$toFixedWithOptional = F2(
	function (prs, value) {
		_v0$2:
		while (true) {
			if (prs.b) {
				if (prs.b.b) {
					if (!prs.b.b.b) {
						var x = prs.a;
						var _v1 = prs.b;
						var y = _v1.a;
						return A2(
							$ggb$numeral_elm$Numeral$emptyReplace,
							'0{1,' + ($elm$core$String$fromInt(y) + '}$'),
							A2($ggb$numeral_elm$Numeral$toFixed, x + y, value));
					} else {
						break _v0$2;
					}
				} else {
					var x = prs.a;
					return A2($ggb$numeral_elm$Numeral$toFixed, x, value);
				}
			} else {
				break _v0$2;
			}
		}
		return $elm$core$String$fromFloat(value);
	});
var $ggb$numeral_elm$Numeral$processPrecision = function (numeral) {
	var _v0 = numeral;
	var language = _v0.language;
	var format_value = _v0.format_value;
	var value = _v0.value;
	var precision = _v0.precision;
	var fst = A2($elm$core$String$contains, '[', precision) ? A2(
		$ggb$numeral_elm$Numeral$flip($ggb$numeral_elm$Numeral$toFixedWithOptional),
		value,
		A2(
			$elm$core$List$take,
			2,
			A2(
				$elm$core$List$map,
				$elm$core$String$length,
				A2(
					$elm$core$String$split,
					'[',
					A2($ggb$numeral_elm$Numeral$emptyReplace, ']', precision))))) : A2(
		$ggb$numeral_elm$Numeral$toFixed,
		$elm$core$String$length(precision),
		value);
	var snd = function () {
		var _v1 = A2($elm$core$String$split, '.', fst);
		if ((_v1.b && _v1.b.b) && (!_v1.b.b.b)) {
			var x = _v1.a;
			var _v2 = _v1.b;
			var y = _v2.a;
			return ($elm$core$String$length(y) > 0) ? _Utils_ap(language.delimiters.decimal, y) : '';
		} else {
			return '';
		}
	}();
	var w = A2(
		$elm$core$Maybe$withDefault,
		'',
		$elm$core$List$head(
			A2($elm$core$String$split, '.', fst)));
	return (precision === '') ? _Utils_update(
		numeral,
		{decimal: '', word: w}) : _Utils_update(
		numeral,
		{decimal: snd, word: w});
};
var $ggb$numeral_elm$Numeral$processWord = function (numeral) {
	var w = A2(
		$elm$core$Maybe$withDefault,
		'',
		$elm$core$List$head(
			A2($elm$core$String$split, '.', numeral.strValue)));
	return _Utils_update(
		numeral,
		{word: w});
};
var $ggb$numeral_elm$Numeral$updateStringValue = function (numeral) {
	return _Utils_update(
		numeral,
		{
			strValue: $elm$core$String$fromFloat(numeral.value)
		});
};
var $ggb$numeral_elm$Numeral$formatNumber = function (numeral) {
	return $ggb$numeral_elm$Numeral$createFinalString(
		$ggb$numeral_elm$Numeral$hasPlus(
			$ggb$numeral_elm$Numeral$hasMinus(
				$ggb$numeral_elm$Numeral$createParens(
					$ggb$numeral_elm$Numeral$createFinalWord(
						$ggb$numeral_elm$Numeral$checkIfNegative(
							$ggb$numeral_elm$Numeral$checkThousandsDelimiter(
								$ggb$numeral_elm$Numeral$processDecimal(
									$ggb$numeral_elm$Numeral$processLeadingZeros(
										$ggb$numeral_elm$Numeral$processPrecision(
											$ggb$numeral_elm$Numeral$getPrecision(
												$ggb$numeral_elm$Numeral$processWord(
													$ggb$numeral_elm$Numeral$updateStringValue(
														$ggb$numeral_elm$Numeral$checkOptionalDec(
															$ggb$numeral_elm$Numeral$checkOrdinal(
																$ggb$numeral_elm$Numeral$checkByte(
																	$ggb$numeral_elm$Numeral$checkAbbreviation(
																		$ggb$numeral_elm$Numeral$checkForCustomSuffix(
																			$ggb$numeral_elm$Numeral$checkParensAndSign(numeral)))))))))))))))))));
};
var $ggb$numeral_elm$Numeral$formatWithoutCurrency = function (lformat) {
	return A2($elm$core$String$contains, ' $', lformat) ? _Utils_Tuple2(
		' ',
		A2($ggb$numeral_elm$Numeral$emptyReplace, ' \\$', lformat)) : (A2($elm$core$String$contains, '$ ', lformat) ? _Utils_Tuple2(
		' ',
		A2($ggb$numeral_elm$Numeral$emptyReplace, '\\$ ', lformat)) : _Utils_Tuple2(
		'',
		A2($ggb$numeral_elm$Numeral$emptyReplace, '\\$', lformat)));
};
var $ggb$numeral_elm$Numeral$formatCurrency = F4(
	function (lang, lformat, value, strValue) {
		var symbolIndex = A2($ggb$numeral_elm$Numeral$indexOf, '$', lformat);
		var openParenIndex = A2($ggb$numeral_elm$Numeral$indexOf, '(', lformat);
		var minusSignIndex = A2($ggb$numeral_elm$Numeral$indexOf, '-', lformat);
		var currencySymbol = lang.currency.symbol;
		var _v0 = $ggb$numeral_elm$Numeral$formatWithoutCurrency(lformat);
		var space = _v0.a;
		var format1 = _v0.b;
		var formatted = $ggb$numeral_elm$Numeral$formatNumber(
			A3($ggb$numeral_elm$Numeral$empty, lang, format1, value));
		return (symbolIndex <= 1) ? ((A2($elm$core$String$contains, '(', formatted) || A2($elm$core$String$contains, '-', formatted)) ? (((_Utils_cmp(symbolIndex, openParenIndex) < 0) || (_Utils_cmp(symbolIndex, minusSignIndex) < 0)) ? A2(
			$elm$core$String$join,
			'',
			_List_fromArray(
				[
					currencySymbol,
					space,
					A2($elm$core$String$contains, '-', formatted) ? '-' : '',
					A2($elm$core$String$contains, '(', formatted) ? '(' : '',
					A3(
					$elm$core$String$slice,
					1,
					$elm$core$String$length(formatted),
					formatted)
				])) : A2(
			$elm$core$String$join,
			'',
			_List_fromArray(
				[
					A2($elm$core$String$contains, '-', formatted) ? '-' : '',
					A2($elm$core$String$contains, '(', formatted) ? '(' : '',
					currencySymbol,
					space,
					A3(
					$elm$core$String$slice,
					1,
					$elm$core$String$length(formatted),
					formatted)
				]))) : _Utils_ap(
			currencySymbol,
			_Utils_ap(space, formatted))) : (A2($elm$core$String$contains, ')', formatted) ? A2(
			$elm$core$String$join,
			'',
			_List_fromArray(
				[
					A3(
					$elm$core$String$slice,
					0,
					$elm$core$String$length(formatted) - 1,
					formatted),
					space,
					currencySymbol,
					')'
				])) : _Utils_ap(
			formatted,
			_Utils_ap(space, currencySymbol)));
	});
var $ggb$numeral_elm$Numeral$formatWithoutPercent = function (lformat) {
	return A2($elm$core$String$contains, ' %', lformat) ? _Utils_Tuple2(
		' ',
		A2($ggb$numeral_elm$Numeral$emptyReplace, ' %', lformat)) : _Utils_Tuple2(
		'',
		A2($ggb$numeral_elm$Numeral$emptyReplace, '%', lformat));
};
var $ggb$numeral_elm$Numeral$formatPercentage = F4(
	function (lang, lformat, value, strValue) {
		var value1 = value * 100;
		var _v0 = $ggb$numeral_elm$Numeral$formatWithoutPercent(lformat);
		var space = _v0.a;
		var format1 = _v0.b;
		var formatted = $ggb$numeral_elm$Numeral$formatNumber(
			A3($ggb$numeral_elm$Numeral$empty, lang, format1, value1));
		return A2($elm$core$String$contains, ')', formatted) ? A2(
			$elm$core$String$join,
			'',
			_List_fromArray(
				[
					A3(
					$elm$core$String$slice,
					0,
					$elm$core$String$length(formatted) - 1,
					formatted),
					space,
					'%',
					')'
				])) : (formatted + (space + '%'));
	});
var $ggb$numeral_elm$Numeral$formatTime = F4(
	function (lang, lformat, value, strValue) {
		var hours = $elm$core$Basics$floor((value / 60) / 60);
		var minutes = $elm$core$Basics$floor((value - ((hours * 60) * 60)) / 60);
		var seconds = $elm$core$Basics$round((value - ((hours * 60) * 60)) - (minutes * 60));
		var hasOneDigit = function (val) {
			return ($elm$core$String$length(val) < 2) ? ('0' + val) : val;
		};
		return A2(
			$elm$core$String$join,
			':',
			_List_fromArray(
				[
					$elm$core$String$fromFloat(hours),
					hasOneDigit(
					$elm$core$String$fromFloat(minutes)),
					hasOneDigit(
					$elm$core$String$fromInt(seconds))
				]));
	});
var $ggb$numeral_elm$Numeral$formatWithLanguage = F3(
	function (lang, lformat, value) {
		return A2($elm$core$String$contains, '$', lformat) ? A4(
			$ggb$numeral_elm$Numeral$formatCurrency,
			lang,
			lformat,
			value,
			$elm$core$String$fromFloat(value)) : (A2($elm$core$String$contains, '%', lformat) ? A4(
			$ggb$numeral_elm$Numeral$formatPercentage,
			lang,
			lformat,
			value,
			$elm$core$String$fromFloat(value)) : (A2($elm$core$String$contains, ':', lformat) ? A4(
			$ggb$numeral_elm$Numeral$formatTime,
			lang,
			lformat,
			value,
			$elm$core$String$fromFloat(value)) : $ggb$numeral_elm$Numeral$formatNumber(
			A3($ggb$numeral_elm$Numeral$empty, lang, lformat, value))));
	});
var $ggb$numeral_elm$Languages$English$englishOrdinal = function (number) {
	var number1 = $elm$core$Basics$floor(number);
	var b = A2($elm$core$Basics$modBy, 10, number1);
	return ($elm$core$Basics$floor(
		A2($elm$core$Basics$modBy, 100, number1) / 10) === 1) ? 'th' : ((b === 1) ? 'st' : ((b === 2) ? 'nd' : ((b === 3) ? 'rd' : 'th')));
};
var $ggb$numeral_elm$Languages$English$lang = {
	abbreviations: {billion: 'b', million: 'm', thousand: 'k', trillion: 't'},
	currency: {symbol: '$'},
	delimiters: {decimal: '.', thousands: ','},
	ordinal: $ggb$numeral_elm$Languages$English$englishOrdinal
};
var $ggb$numeral_elm$Numeral$format = $ggb$numeral_elm$Numeral$formatWithLanguage($ggb$numeral_elm$Languages$English$lang);
var $author$project$BarStacked$valueFormatter = $ggb$numeral_elm$Numeral$format('0a');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setCoreStyles = F2(
	function (styles, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{coreStyle: styles}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Bar$withBarStyle = F2(
	function (styles, config) {
		return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$setCoreStyles, styles, config);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ColorPalette = function (a) {
	return {$: 'ColorPalette', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setColorResource = F2(
	function (resource, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{colorResource: resource}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Bar$withColorPalette = F2(
	function (palette, config) {
		return A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$setColorResource,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ColorPalette(palette),
			config);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$StackedColumnTitle = function (a) {
	return {$: 'StackedColumnTitle', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showStackedColumnTitle = F2(
	function (formatter, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{
					showColumnTitle: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$StackedColumnTitle(formatter)
				}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$XOrdinalColumnTitle = {$: 'XOrdinalColumnTitle'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showXOrdinalColumnTitle = function (_v0) {
	var c = _v0.a;
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
		_Utils_update(
			c,
			{showColumnTitle: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$XOrdinalColumnTitle}));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$YColumnTitle = function (a) {
	return {$: 'YColumnTitle', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showYColumnTitle = F2(
	function (formatter, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{
					showColumnTitle: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$YColumnTitle(formatter)
				}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Bar$withColumnTitle = F2(
	function (title, config) {
		switch (title.$) {
			case 'YColumnTitle':
				var formatter = title.a;
				return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$showYColumnTitle, formatter, config);
			case 'XOrdinalColumnTitle':
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showXOrdinalColumnTitle(config);
			case 'StackedColumnTitle':
				var formatter = title.a;
				return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$showStackedColumnTitle, formatter, config);
			default:
				return config;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setLayout = F2(
	function (layout, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{layout: layout}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Bar$withGroupedLayout = function (config) {
	return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$setLayout, $data_viz_lab$elm_chart_builder$Chart$Internal$Type$GroupedBar, config);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$StackedBar = function (a) {
	return {$: 'StackedBar', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Bar$withStackedLayout = F2(
	function (direction, config) {
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{
					layout: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$StackedBar(direction)
				}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setXAxisBand = F2(
	function (orientation, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{axisXBand: orientation}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Bar$withXAxis = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setXAxisBand;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setYAxisContinuous = F2(
	function (orientation, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{axisYContinuous: orientation}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Bar$withYAxis = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setYAxisContinuous;
var $data_viz_lab$elm_chart_builder$Chart$Bar$axisBottom = $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Bottom;
var $gampleman$elm_visualization$Axis$TickFormat = function (a) {
	return {$: 'TickFormat', a: a};
};
var $gampleman$elm_visualization$Axis$tickFormat = $gampleman$elm_visualization$Axis$TickFormat;
var $author$project$BarStacked$years = _List_fromArray(
	['1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020', '2030']);
var $author$project$BarStacked$xAxisTickFormat = function (s) {
	return A2($elm$core$List$member, s, $author$project$BarStacked$years) ? s : '';
};
var $author$project$BarStacked$xAxis = $data_viz_lab$elm_chart_builder$Chart$Bar$axisBottom(
	_List_fromArray(
		[
			$gampleman$elm_visualization$Axis$tickSizeOuter(0),
			$gampleman$elm_visualization$Axis$tickSizeInner(0),
			$gampleman$elm_visualization$Axis$tickFormat($author$project$BarStacked$xAxisTickFormat)
		]));
var $data_viz_lab$elm_chart_builder$Chart$Bar$axisLeft = $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Left;
var $gampleman$elm_visualization$Axis$TickCount = function (a) {
	return {$: 'TickCount', a: a};
};
var $gampleman$elm_visualization$Axis$tickCount = $gampleman$elm_visualization$Axis$TickCount;
var $author$project$BarStacked$yAxis = $data_viz_lab$elm_chart_builder$Chart$Bar$axisLeft(
	_List_fromArray(
		[
			$gampleman$elm_visualization$Axis$tickSizeOuter(0),
			$gampleman$elm_visualization$Axis$tickCount(6),
			$gampleman$elm_visualization$Axis$tickFormat(
			A2($elm$core$Basics$composeL, $author$project$BarStacked$valueFormatter, $elm$core$Basics$abs))
		]));
var $data_viz_lab$elm_chart_builder$Chart$Bar$yColumnTitle = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$YColumnTitle;
var $author$project$BarStacked$chart = F2(
	function (width, model) {
		return A2(
			$data_viz_lab$elm_chart_builder$Chart$Bar$render,
			_Utils_Tuple2(model.data, $author$project$BarStacked$accessor),
			A2(
				$data_viz_lab$elm_chart_builder$Chart$Bar$withStackedLayout,
				$data_viz_lab$elm_chart_builder$Chart$Bar$diverging,
				A2(
					$data_viz_lab$elm_chart_builder$Chart$Bar$withXAxis,
					$author$project$BarStacked$xAxis,
					A2(
						$data_viz_lab$elm_chart_builder$Chart$Bar$withYAxis,
						$author$project$BarStacked$yAxis,
						$data_viz_lab$elm_chart_builder$Chart$Bar$withGroupedLayout(
							A2(
								$data_viz_lab$elm_chart_builder$Chart$Bar$withColumnTitle,
								$data_viz_lab$elm_chart_builder$Chart$Bar$yColumnTitle($author$project$BarStacked$valueFormatter),
								A2(
									$data_viz_lab$elm_chart_builder$Chart$Bar$withBarStyle,
									_List_fromArray(
										[
											_Utils_Tuple2('stroke', '#fff'),
											_Utils_Tuple2('stroke-width', '0.5')
										]),
									A2(
										$data_viz_lab$elm_chart_builder$Chart$Bar$withColorPalette,
										$author$project$BarStacked$colorScheme,
										$data_viz_lab$elm_chart_builder$Chart$Bar$init(
											{
												height: $author$project$Helpers$toChartHeight(
													$author$project$Helpers$toChartWidth(width)),
												margin: $author$project$Helpers$marginWithLabel,
												width: $author$project$Helpers$toChartWidth(width)
											})))))))));
	});
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$html$Html$pre = _VirtualDom_node('pre');
var $author$project$CodePrev$codePrev = function (content) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('example__code-prev')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$pre,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('terminal')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$code,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('language-elm')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(content)
							]))
					]))
			]));
};
var $author$project$CodePrev$codePrevBarStacked = ' \naccessor : Bar.Accessor City\naccessor =\n    Bar.Accessor \n        (.year >> String.fromFloat >> Just)\n        .urbanAgglomeration\n        .populationMillions\n\nchart : Int -> Model -> Html Msg\nchart width model =\n    Bar.init\n        { margin = margin\n        , width = width\n        , height = height\n        }\n        |> Bar.withColorPalette colorScheme\n        |> Bar.withBarStyle [ ( "stroke", "#fff" ), ( "stroke-width", "0.5" ) ]\n        |> Bar.withColumnTitle (Bar.yColumnTitle valueFormatter)\n        |> Bar.withGroupedLayout\n        |> Bar.withYAxis yAxis\n        |> Bar.withXAxis xAxis\n        |> Bar.withStackedLayout Bar.diverging\n        |> Bar.render ( model.data, accessor )\n        ';
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $author$project$BarStacked$desc = A2(
	$elm$html$Html$section,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('example__desc')
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$h3,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Stacked vertical bar chart')
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Population in millions')
				])),
			A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$href('https://github.com/data-viz-lab/elm-chart-builder-presentation/blob/main/src/BarStacked.elm')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('source')
				]))
		]));
var $author$project$BarStacked$labelsView = F2(
	function (width, model) {
		return A2(
			$elm$core$List$indexedMap,
			F2(
				function (i, d) {
					var value = 60;
					var margin = 40;
					var top = (!i) ? $elm$core$String$fromInt(value) : function (v) {
						return $elm$core$String$fromFloat((v - margin) - value);
					}(
						$author$project$Helpers$toChartHeight(
							$author$project$Helpers$toChartWidth(width)));
					return A2(
						$elm$html$Html$p,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class(
								'label-' + $elm$core$String$fromInt(i)),
								A2($elm$html$Html$Attributes$style, 'top', top + 'px')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(d.urbanAgglomeration)
							]));
				}),
			A2($elm$core$List$take, 2, model.data));
	});
var $author$project$BarStacked$view = F2(
	function (_v0, model) {
		var width = _v0.width;
		return _List_fromArray(
			[
				$author$project$BarStacked$desc,
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('chart-wrapper')
					]),
				A2(
					$elm$core$List$cons,
					A2($author$project$BarStacked$chart, width, model),
					A2($author$project$BarStacked$labelsView, width, model))),
				$author$project$CodePrev$codePrev($author$project$CodePrev$codePrevBarStacked)
			]);
	});
var $author$project$Line$Hint = function (a) {
	return {$: 'Hint', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$AccessorContinuous = function (a) {
	return {$: 'AccessorContinuous', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Line$cont = function (acc) {
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$AccessorContinuous(acc);
};
var $author$project$Line$accessor = $data_viz_lab$elm_chart_builder$Chart$Line$cont(
	{
		xGroup: A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.urbanAgglomeration;
			},
			$elm$core$Maybe$Just),
		xValue: function ($) {
			return $.year;
		},
		yValue: function ($) {
			return $.populationMillions;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Circle = function (a) {
	return {$: 'Circle', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$initialConf = {identifier: 'symbol', size: $elm$core$Maybe$Nothing, styles: _List_Nil};
var $data_viz_lab$elm_chart_builder$Chart$Symbol$circle = $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Circle($data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$initialConf);
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Corner = function (a) {
	return {$: 'Corner', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Triangle = function (a) {
	return {$: 'Triangle', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Symbol$withSize = F2(
	function (size, symbol) {
		switch (symbol.$) {
			case 'Custom':
				var conf = symbol.a;
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Custom(conf);
			case 'Circle':
				var conf = symbol.a;
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Circle(
					_Utils_update(
						conf,
						{
							size: $elm$core$Maybe$Just(size)
						}));
			case 'Corner':
				var conf = symbol.a;
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Corner(
					_Utils_update(
						conf,
						{
							size: $elm$core$Maybe$Just(size)
						}));
			case 'Triangle':
				var conf = symbol.a;
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Triangle(
					_Utils_update(
						conf,
						{
							size: $elm$core$Maybe$Just(size)
						}));
			default:
				return symbol;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Symbol$withStyle = F2(
	function (style, symbol) {
		switch (symbol.$) {
			case 'Custom':
				var conf = symbol.a;
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Custom(
					_Utils_update(
						conf,
						{styles: style}));
			case 'Circle':
				var conf = symbol.a;
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Circle(
					_Utils_update(
						conf,
						{styles: style}));
			case 'Corner':
				var conf = symbol.a;
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Corner(
					_Utils_update(
						conf,
						{styles: style}));
			case 'Triangle':
				var conf = symbol.a;
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Triangle(
					_Utils_update(
						conf,
						{styles: style}));
			default:
				return symbol;
		}
	});
var $author$project$Line$circle = A2(
	$data_viz_lab$elm_chart_builder$Chart$Symbol$withSize,
	8,
	A2(
		$data_viz_lab$elm_chart_builder$Chart$Symbol$withStyle,
		_List_fromArray(
			[
				_Utils_Tuple2('stroke', 'white')
			]),
		$data_viz_lab$elm_chart_builder$Chart$Symbol$circle));
var $author$project$Line$colorScheme = $gampleman$elm_visualization$Scale$Color$tableau10;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$HoverAll = function (a) {
	return {$: 'HoverAll', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Line$hoverAll = function (msg) {
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Event$HoverAll(msg);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$GroupedLine = {$: 'GroupedLine'};
var $data_viz_lab$elm_chart_builder$Chart$Line$withGroupedLayout = function (config) {
	return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$setLayout, $data_viz_lab$elm_chart_builder$Chart$Internal$Type$GroupedLine, config);
};
var $data_viz_lab$elm_chart_builder$Chart$Line$init = function (c) {
	return A2(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$setDimensions,
		{height: c.height, margin: c.margin, width: c.width},
		$data_viz_lab$elm_chart_builder$Chart$Line$withGroupedLayout($data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultConfig));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DataContinuous = function (a) {
	return {$: 'DataContinuous', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DataTime = function (a) {
	return {$: 'DataTime', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$externalToDataContinuousGroup = F2(
	function (externalData, accessorGroup) {
		var data = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromExternalData(externalData);
		if (accessorGroup.$ === 'AccessorContinuous') {
			var accessor = accessorGroup.a;
			return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DataContinuous(
				A2(
					$elm$core$List$map,
					function (d) {
						var groupLabel = accessor.xGroup(d.a);
						var firstPoint = function (p) {
							return _Utils_Tuple2(
								accessor.xValue(p),
								accessor.yValue(p));
						}(d.a);
						var points = A2(
							$elm$core$List$cons,
							firstPoint,
							A2(
								$elm$core$List$map,
								function (p) {
									return _Utils_Tuple2(
										accessor.xValue(p),
										accessor.yValue(p));
								},
								d.b));
						return {groupLabel: groupLabel, points: points};
					},
					A2(
						$elm_community$list_extra$List$Extra$groupWhile,
						F2(
							function (a, b) {
								return _Utils_eq(
									accessor.xGroup(a),
									accessor.xGroup(b));
							}),
						A2(
							$elm$core$List$sortBy,
							A2(
								$elm$core$Basics$composeR,
								accessor.xGroup,
								$elm$core$Maybe$withDefault('')),
							data))));
		} else {
			var accessor = accessorGroup.a;
			return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DataTime(
				A2(
					$elm$core$List$map,
					function (d) {
						var groupLabel = accessor.xGroup(d.a);
						var firstPoint = function (p) {
							return _Utils_Tuple2(
								accessor.xValue(p),
								accessor.yValue(p));
						}(d.a);
						var points = A2(
							$elm$core$List$cons,
							firstPoint,
							A2(
								$elm$core$List$map,
								function (p) {
									return _Utils_Tuple2(
										accessor.xValue(p),
										accessor.yValue(p));
								},
								d.b));
						return {groupLabel: groupLabel, points: points};
					},
					A2(
						$elm_community$list_extra$List$Extra$groupWhile,
						F2(
							function (a, b) {
								return _Utils_eq(
									accessor.xGroup(a),
									accessor.xGroup(b));
							}),
						A2(
							$elm$core$List$sortBy,
							A2(
								$elm$core$Basics$composeR,
								accessor.xGroup,
								$elm$core$Maybe$withDefault('')),
							data))));
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$continuousXAxis = F2(
	function (c, scale) {
		var p = c.padding;
		var m = c.margin;
		if (c.showXAxis) {
			var _v0 = c.axisXContinuous;
			if (_v0.$ === 'Bottom') {
				var attributes = _v0.a;
				return _List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$g,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Attributes$transform(
								_List_fromArray(
									[
										A2($elm_community$typed_svg$TypedSvg$Types$Translate, m.left + p.left, ((m.top + p.top) + c.height) + p.bottom)
									])),
								$elm_community$typed_svg$TypedSvg$Attributes$class(
								_List_fromArray(
									[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
							]),
						_List_fromArray(
							[
								A2($gampleman$elm_visualization$Axis$bottom, attributes, scale)
							]))
					]);
			} else {
				var attributes = _v0.a;
				return _List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$g,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Attributes$transform(
								_List_fromArray(
									[
										A2($elm_community$typed_svg$TypedSvg$Types$Translate, m.left + p.left, m.top)
									])),
								$elm_community$typed_svg$TypedSvg$Attributes$class(
								_List_fromArray(
									[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
							]),
						_List_fromArray(
							[
								A2($gampleman$elm_visualization$Axis$top, attributes, scale)
							]))
					]);
			}
		} else {
			return _List_Nil;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$timeXAxis = F2(
	function (c, scale) {
		var p = c.padding;
		var m = c.margin;
		if (c.showXAxis) {
			if (scale.$ === 'Just') {
				var s = scale.a;
				var _v1 = c.axisXTime;
				if (_v1.$ === 'Bottom') {
					var attributes = _v1.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, m.left + p.left, ((m.top + p.top) + c.height) + p.bottom)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2($gampleman$elm_visualization$Axis$bottom, attributes, s)
								]))
						]);
				} else {
					var attributes = _v1.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, m.left + p.left, m.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2($gampleman$elm_visualization$Axis$top, attributes, s)
								]))
						]);
				}
			} else {
				return _List_Nil;
			}
		} else {
			return _List_Nil;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$continuousOrTimeAxisGenerator = F3(
	function (xTimeScale, xContinuousScale, _v0) {
		var data = _v0.a;
		var config = _v0.b;
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		if (data.$ === 'DataTime') {
			return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$timeXAxis, c, xTimeScale);
		} else {
			return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$continuousXAxis, c, xContinuousScale);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYLeftClassName = 'ecb-axis-y-left';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$continuousYAxis = F2(
	function (c, scale) {
		var p = c.padding;
		var m = c.margin;
		if (c.showYAxis) {
			var _v0 = c.axisYContinuous;
			switch (_v0.$) {
				case 'Left':
					var attributes = _v0.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2(
											$elm_community$typed_svg$TypedSvg$Types$Translate,
											$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$floorFloat(m.left),
											m.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2($gampleman$elm_visualization$Axis$left, attributes, scale)
								]))
						]);
				case 'Right':
					var attributes = _v0.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2(
											$elm_community$typed_svg$TypedSvg$Types$Translate,
											$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$floorFloat((m.left + c.padding.left) + c.width),
											m.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2($gampleman$elm_visualization$Axis$right, attributes, scale)
								]))
						]);
				default:
					var attributes = _v0.a;
					var rightAttrs = _Utils_ap(
						attributes,
						_List_fromArray(
							[
								$gampleman$elm_visualization$Axis$tickSizeInner(
								$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$floorFloat(c.width)),
								$gampleman$elm_visualization$Axis$tickPadding(c.margin.right + c.margin.left)
							]));
					var leftAttrs = _Utils_ap(
						attributes,
						_List_fromArray(
							[
								$gampleman$elm_visualization$Axis$tickSizeInner(0)
							]));
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2(
											$elm_community$typed_svg$TypedSvg$Types$Translate,
											$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$floorFloat(m.left),
											m.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYLeftClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2($gampleman$elm_visualization$Axis$left, leftAttrs, scale)
								])),
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2(
											$elm_community$typed_svg$TypedSvg$Types$Translate,
											$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$floorFloat(m.left + p.left),
											m.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYRightClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2($gampleman$elm_visualization$Axis$right, rightAttrs, scale)
								]))
						]);
			}
		} else {
			return _List_Nil;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$dataContinuousGroupToDataContinuous = function (data) {
	if (data.$ === 'DataTime') {
		var d = data.a;
		return A2(
			$elm$core$List$map,
			function (group) {
				var points = group.points;
				return {
					groupLabel: group.groupLabel,
					points: A2(
						$elm$core$List$map,
						function (p) {
							return _Utils_Tuple2(
								$elm$time$Time$posixToMillis(p.a),
								p.b);
						},
						points)
				};
			},
			d);
	} else {
		var d = data.a;
		return d;
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$dataContinuousGroupToDataTime = function (data) {
	if (data.$ === 'DataTime') {
		var d = data.a;
		return d;
	} else {
		return _List_Nil;
	}
};
var $folkertdev$one_true_path_experiment$SubPath$firstPoint = function (_v0) {
	var moveto = _v0.moveto;
	var p = moveto.a;
	return p;
};
var $folkertdev$one_true_path_experiment$SubPath$map2 = F3(
	function (f, sub1, sub2) {
		var _v0 = _Utils_Tuple2(sub1, sub2);
		if (_v0.a.$ === 'Empty') {
			if (_v0.b.$ === 'Empty') {
				var _v1 = _v0.a;
				var _v2 = _v0.b;
				return $folkertdev$one_true_path_experiment$SubPath$Empty;
			} else {
				var _v3 = _v0.a;
				var subpath = _v0.b;
				return subpath;
			}
		} else {
			if (_v0.b.$ === 'Empty') {
				var subpath = _v0.a;
				var _v4 = _v0.b;
				return subpath;
			} else {
				var a = _v0.a.a;
				var b = _v0.b.a;
				return A2(f, a, b);
			}
		}
	});
var $folkertdev$elm_deque$Deque$mapAbstract = F2(
	function (f, _v0) {
		var _abstract = _v0.a;
		return $folkertdev$elm_deque$Deque$Deque(
			f(_abstract));
	});
var $folkertdev$elm_deque$Deque$pushBack = F2(
	function (elem, _v0) {
		var deque = _v0.a;
		return A2(
			$folkertdev$elm_deque$Deque$mapAbstract,
			$folkertdev$elm_deque$Internal$rebalance,
			$folkertdev$elm_deque$Deque$Deque(
				{
					front: deque.front,
					rear: A2($elm$core$List$cons, elem, deque.rear),
					sizeF: deque.sizeF,
					sizeR: deque.sizeR + 1
				}));
	});
var $folkertdev$one_true_path_experiment$SubPath$pushBack = F2(
	function (drawto, data) {
		return _Utils_update(
			data,
			{
				drawtos: A2($folkertdev$elm_deque$Deque$pushBack, drawto, data.drawtos)
			});
	});
var $folkertdev$elm_deque$Internal$length = function (deque) {
	return deque.sizeF + deque.sizeR;
};
var $folkertdev$elm_deque$Internal$isEmpty = function (deque) {
	return !$folkertdev$elm_deque$Internal$length(deque);
};
var $folkertdev$elm_deque$Deque$unwrap = function (_v0) {
	var boundedDeque = _v0.a;
	return boundedDeque;
};
var $folkertdev$elm_deque$Deque$isEmpty = A2($elm$core$Basics$composeL, $folkertdev$elm_deque$Internal$isEmpty, $folkertdev$elm_deque$Deque$unwrap);
var $folkertdev$elm_deque$Deque$append = F2(
	function (p, q) {
		var x = p.a;
		var y = q.a;
		return $folkertdev$elm_deque$Deque$isEmpty(p) ? q : ($folkertdev$elm_deque$Deque$isEmpty(q) ? p : $folkertdev$elm_deque$Deque$Deque(
			{
				front: _Utils_ap(
					x.front,
					$elm$core$List$reverse(x.rear)),
				rear: $elm$core$List$reverse(
					_Utils_ap(
						y.front,
						$elm$core$List$reverse(y.rear))),
				sizeF: x.sizeF + x.sizeR,
				sizeR: y.sizeF + y.sizeR
			}));
	});
var $folkertdev$one_true_path_experiment$SubPath$unsafeConcatenate = F2(
	function (a, b) {
		return _Utils_update(
			a,
			{
				drawtos: A2($folkertdev$elm_deque$Deque$append, a.drawtos, b.drawtos)
			});
	});
var $folkertdev$one_true_path_experiment$SubPath$connect = function () {
	var helper = F2(
		function (right, left) {
			return $folkertdev$one_true_path_experiment$SubPath$SubPath(
				A2(
					$folkertdev$one_true_path_experiment$SubPath$unsafeConcatenate,
					A2(
						$folkertdev$one_true_path_experiment$SubPath$pushBack,
						$folkertdev$one_true_path_experiment$LowLevel$Command$lineTo(
							_List_fromArray(
								[
									$folkertdev$one_true_path_experiment$SubPath$firstPoint(right)
								])),
						left),
					right));
		});
	return $folkertdev$one_true_path_experiment$SubPath$map2(helper);
}();
var $gampleman$elm_visualization$Shape$Generators$area = F2(
	function (curve, data) {
		var makeShape = F2(
			function (topline, bottomline) {
				return A2(
					$folkertdev$one_true_path_experiment$SubPath$connect,
					curve(bottomline),
					curve(topline));
			});
		var makeCurves = F3(
			function (acc, datum, _v3) {
				var prev = _v3.a;
				var list = _v3.b;
				var _v0 = _Utils_Tuple3(prev, datum, list);
				if (_v0.b.$ === 'Nothing') {
					var _v1 = _v0.b;
					var l = _v0.c;
					return _Utils_Tuple2(false, l);
				} else {
					if (!_v0.a) {
						var point = _v0.b.a;
						var l = _v0.c;
						return _Utils_Tuple2(
							true,
							A2(
								$elm$core$List$cons,
								_List_fromArray(
									[
										acc(point)
									]),
								l));
					} else {
						if (_v0.c.b) {
							var p1 = _v0.b.a;
							var _v2 = _v0.c;
							var ps = _v2.a;
							var l = _v2.b;
							return _Utils_Tuple2(
								true,
								A2(
									$elm$core$List$cons,
									A2(
										$elm$core$List$cons,
										acc(p1),
										ps),
									l));
						} else {
							var p1 = _v0.b.a;
							var l = _v0.c;
							return _Utils_Tuple2(
								true,
								A2(
									$elm$core$List$cons,
									_List_fromArray(
										[
											acc(p1)
										]),
									l));
						}
					}
				}
			});
		var topLineData = A3(
			$elm$core$List$foldr,
			makeCurves($elm$core$Tuple$first),
			_Utils_Tuple2(false, _List_Nil),
			data).b;
		var bottomLineData = A2(
			$elm$core$List$map,
			$elm$core$List$reverse,
			A3(
				$elm$core$List$foldr,
				makeCurves($elm$core$Tuple$second),
				_Utils_Tuple2(false, _List_Nil),
				data).b);
		return A3($elm$core$List$map2, makeShape, topLineData, bottomLineData);
	});
var $gampleman$elm_visualization$Shape$area = $gampleman$elm_visualization$Shape$Generators$area;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$areaGenerator = F3(
	function (xScale, yScale, _v0) {
		var x1 = _v0.a;
		var y1 = _v0.b;
		var x = A2($gampleman$elm_visualization$Scale$convert, xScale, x1);
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				_Utils_Tuple2(
					x,
					A2($gampleman$elm_visualization$Scale$convert, yScale, y1)),
				_Utils_Tuple2(
					x,
					A2($gampleman$elm_visualization$Scale$convert, yScale, 0))));
	});
var $folkertdev$elm_deque$Internal$empty = {front: _List_Nil, rear: _List_Nil, sizeF: 0, sizeR: 0};
var $folkertdev$elm_deque$Deque$empty = $folkertdev$elm_deque$Deque$Deque($folkertdev$elm_deque$Internal$empty);
var $folkertdev$one_true_path_experiment$LowLevel$Command$ClosePath = {$: 'ClosePath'};
var $folkertdev$one_true_path_experiment$LowLevel$Command$CurveTo = function (a) {
	return {$: 'CurveTo', a: a};
};
var $folkertdev$one_true_path_experiment$LowLevel$Command$EllipticalArc = function (a) {
	return {$: 'EllipticalArc', a: a};
};
var $folkertdev$one_true_path_experiment$LowLevel$Command$QuadraticBezierCurveTo = function (a) {
	return {$: 'QuadraticBezierCurveTo', a: a};
};
var $folkertdev$one_true_path_experiment$LowLevel$Command$merge = F2(
	function (instruction1, instruction2) {
		var _v0 = _Utils_Tuple2(instruction1, instruction2);
		_v0$5:
		while (true) {
			switch (_v0.a.$) {
				case 'LineTo':
					if (_v0.b.$ === 'LineTo') {
						var p1 = _v0.a.a;
						var p2 = _v0.b.a;
						return $elm$core$Result$Ok(
							$folkertdev$one_true_path_experiment$LowLevel$Command$LineTo(
								_Utils_ap(p1, p2)));
					} else {
						break _v0$5;
					}
				case 'CurveTo':
					if (_v0.b.$ === 'CurveTo') {
						var p1 = _v0.a.a;
						var p2 = _v0.b.a;
						return $elm$core$Result$Ok(
							$folkertdev$one_true_path_experiment$LowLevel$Command$CurveTo(
								_Utils_ap(p1, p2)));
					} else {
						break _v0$5;
					}
				case 'QuadraticBezierCurveTo':
					if (_v0.b.$ === 'QuadraticBezierCurveTo') {
						var p1 = _v0.a.a;
						var p2 = _v0.b.a;
						return $elm$core$Result$Ok(
							$folkertdev$one_true_path_experiment$LowLevel$Command$QuadraticBezierCurveTo(
								_Utils_ap(p1, p2)));
					} else {
						break _v0$5;
					}
				case 'EllipticalArc':
					if (_v0.b.$ === 'EllipticalArc') {
						var p1 = _v0.a.a;
						var p2 = _v0.b.a;
						return $elm$core$Result$Ok(
							$folkertdev$one_true_path_experiment$LowLevel$Command$EllipticalArc(
								_Utils_ap(p1, p2)));
					} else {
						break _v0$5;
					}
				default:
					if (_v0.b.$ === 'ClosePath') {
						var _v1 = _v0.a;
						var _v2 = _v0.b;
						return $elm$core$Result$Ok($folkertdev$one_true_path_experiment$LowLevel$Command$ClosePath);
					} else {
						break _v0$5;
					}
			}
		}
		return $elm$core$Result$Err(
			_Utils_Tuple2(instruction1, instruction2));
	});
var $folkertdev$elm_deque$Internal$toList = function (deque) {
	return _Utils_ap(
		deque.front,
		$elm$core$List$reverse(deque.rear));
};
var $folkertdev$elm_deque$Deque$toList = A2($elm$core$Basics$composeL, $folkertdev$elm_deque$Internal$toList, $folkertdev$elm_deque$Deque$unwrap);
var $folkertdev$one_true_path_experiment$SubPath$compressHelper = function (drawtos) {
	var folder = F2(
		function (instruction, _v3) {
			var previous = _v3.a;
			var accum = _v3.b;
			var _v2 = A2($folkertdev$one_true_path_experiment$LowLevel$Command$merge, previous, instruction);
			if (_v2.$ === 'Ok') {
				var merged = _v2.a;
				return _Utils_Tuple2(merged, accum);
			} else {
				return _Utils_Tuple2(
					instruction,
					A2($elm$core$List$cons, previous, accum));
			}
		});
	var _v0 = $folkertdev$elm_deque$Deque$toList(drawtos);
	if (!_v0.b) {
		return $folkertdev$elm_deque$Deque$empty;
	} else {
		var first = _v0.a;
		var rest = _v0.b;
		return $folkertdev$elm_deque$Deque$fromList(
			$elm$core$List$reverse(
				function (_v1) {
					var a = _v1.a;
					var b = _v1.b;
					return A2($elm$core$List$cons, a, b);
				}(
					A3(
						$elm$core$List$foldl,
						folder,
						_Utils_Tuple2(first, _List_Nil),
						rest))));
	}
};
var $folkertdev$one_true_path_experiment$SubPath$compress = function (subpath) {
	if (subpath.$ === 'Empty') {
		return $folkertdev$one_true_path_experiment$SubPath$Empty;
	} else {
		var data = subpath.a;
		return $folkertdev$one_true_path_experiment$SubPath$SubPath(
			_Utils_update(
				data,
				{
					drawtos: $folkertdev$one_true_path_experiment$SubPath$compressHelper(data.drawtos)
				}));
	}
};
var $folkertdev$svg_path_lowlevel$Path$LowLevel$DecimalPlaces = function (a) {
	return {$: 'DecimalPlaces', a: a};
};
var $folkertdev$svg_path_lowlevel$Path$LowLevel$decimalPlaces = $folkertdev$svg_path_lowlevel$Path$LowLevel$DecimalPlaces;
var $folkertdev$one_true_path_experiment$SubPath$defaultConfig = {decimalPlaces: $elm$core$Maybe$Nothing, mergeAdjacent: false};
var $folkertdev$one_true_path_experiment$SubPath$optionFolder = F2(
	function (option, config) {
		if (option.$ === 'DecimalPlaces') {
			var n = option.a;
			return _Utils_update(
				config,
				{
					decimalPlaces: $elm$core$Maybe$Just(n)
				});
		} else {
			return _Utils_update(
				config,
				{mergeAdjacent: true});
		}
	});
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $folkertdev$svg_path_lowlevel$Path$LowLevel$Absolute = {$: 'Absolute'};
var $folkertdev$svg_path_lowlevel$Path$LowLevel$ClosePath = {$: 'ClosePath'};
var $folkertdev$svg_path_lowlevel$Path$LowLevel$CurveTo = F2(
	function (a, b) {
		return {$: 'CurveTo', a: a, b: b};
	});
var $folkertdev$svg_path_lowlevel$Path$LowLevel$EllipticalArc = F2(
	function (a, b) {
		return {$: 'EllipticalArc', a: a, b: b};
	});
var $folkertdev$svg_path_lowlevel$Path$LowLevel$LineTo = F2(
	function (a, b) {
		return {$: 'LineTo', a: a, b: b};
	});
var $folkertdev$svg_path_lowlevel$Path$LowLevel$QuadraticBezierCurveTo = F2(
	function (a, b) {
		return {$: 'QuadraticBezierCurveTo', a: a, b: b};
	});
var $folkertdev$one_true_path_experiment$LowLevel$Command$toLowLevelDrawTo = function (drawto) {
	switch (drawto.$) {
		case 'LineTo':
			var coordinates = drawto.a;
			return A2($folkertdev$svg_path_lowlevel$Path$LowLevel$LineTo, $folkertdev$svg_path_lowlevel$Path$LowLevel$Absolute, coordinates);
		case 'CurveTo':
			var coordinates = drawto.a;
			return A2($folkertdev$svg_path_lowlevel$Path$LowLevel$CurveTo, $folkertdev$svg_path_lowlevel$Path$LowLevel$Absolute, coordinates);
		case 'QuadraticBezierCurveTo':
			var coordinates = drawto.a;
			return A2($folkertdev$svg_path_lowlevel$Path$LowLevel$QuadraticBezierCurveTo, $folkertdev$svg_path_lowlevel$Path$LowLevel$Absolute, coordinates);
		case 'EllipticalArc':
			var _arguments = drawto.a;
			return A2($folkertdev$svg_path_lowlevel$Path$LowLevel$EllipticalArc, $folkertdev$svg_path_lowlevel$Path$LowLevel$Absolute, _arguments);
		default:
			return $folkertdev$svg_path_lowlevel$Path$LowLevel$ClosePath;
	}
};
var $folkertdev$svg_path_lowlevel$Path$LowLevel$MoveTo = F2(
	function (a, b) {
		return {$: 'MoveTo', a: a, b: b};
	});
var $folkertdev$one_true_path_experiment$LowLevel$Command$toLowLevelMoveTo = function (_v0) {
	var target = _v0.a;
	return A2($folkertdev$svg_path_lowlevel$Path$LowLevel$MoveTo, $folkertdev$svg_path_lowlevel$Path$LowLevel$Absolute, target);
};
var $folkertdev$one_true_path_experiment$SubPath$toLowLevel = function (subpath) {
	if (subpath.$ === 'Empty') {
		return $elm$core$Maybe$Nothing;
	} else {
		var moveto = subpath.a.moveto;
		var drawtos = subpath.a.drawtos;
		return $elm$core$Maybe$Just(
			{
				drawtos: A2(
					$elm$core$List$map,
					$folkertdev$one_true_path_experiment$LowLevel$Command$toLowLevelDrawTo,
					$folkertdev$elm_deque$Deque$toList(drawtos)),
				moveto: $folkertdev$one_true_path_experiment$LowLevel$Command$toLowLevelMoveTo(moveto)
			});
	}
};
var $folkertdev$svg_path_lowlevel$Path$LowLevel$defaultConfig = {floatFormatter: $elm$core$String$fromFloat};
var $folkertdev$svg_path_lowlevel$Path$LowLevel$roundTo = F2(
	function (n, value) {
		if (!n) {
			return $elm$core$String$fromInt(
				$elm$core$Basics$round(value));
		} else {
			var sign = (value < 0.0) ? '-' : '';
			var exp = A2($elm$core$Basics$pow, 10, n);
			var raised = $elm$core$Basics$abs(
				$elm$core$Basics$round(value * exp));
			var decimals = raised % exp;
			return (!decimals) ? _Utils_ap(
				sign,
				$elm$core$String$fromInt((raised / exp) | 0)) : (sign + ($elm$core$String$fromInt((raised / exp) | 0) + ('.' + $elm$core$String$fromInt(decimals))));
		}
	});
var $folkertdev$svg_path_lowlevel$Path$LowLevel$optionFolder = F2(
	function (option, config) {
		var n = option.a;
		return _Utils_update(
			config,
			{
				floatFormatter: $folkertdev$svg_path_lowlevel$Path$LowLevel$roundTo(n)
			});
	});
var $folkertdev$svg_path_lowlevel$Path$LowLevel$accumulateOptions = A2($elm$core$List$foldl, $folkertdev$svg_path_lowlevel$Path$LowLevel$optionFolder, $folkertdev$svg_path_lowlevel$Path$LowLevel$defaultConfig);
var $folkertdev$svg_path_lowlevel$Path$LowLevel$isEmpty = function (command) {
	switch (command.$) {
		case 'LineTo':
			var mode = command.a;
			var coordinates = command.b;
			return $elm$core$List$isEmpty(coordinates);
		case 'Horizontal':
			var mode = command.a;
			var coordinates = command.b;
			return $elm$core$List$isEmpty(coordinates);
		case 'Vertical':
			var mode = command.a;
			var coordinates = command.b;
			return $elm$core$List$isEmpty(coordinates);
		case 'CurveTo':
			var mode = command.a;
			var coordinates = command.b;
			return $elm$core$List$isEmpty(coordinates);
		case 'SmoothCurveTo':
			var mode = command.a;
			var coordinates = command.b;
			return $elm$core$List$isEmpty(coordinates);
		case 'QuadraticBezierCurveTo':
			var mode = command.a;
			var coordinates = command.b;
			return $elm$core$List$isEmpty(coordinates);
		case 'SmoothQuadraticBezierCurveTo':
			var mode = command.a;
			var coordinates = command.b;
			return $elm$core$List$isEmpty(coordinates);
		case 'EllipticalArc':
			var mode = command.a;
			var _arguments = command.b;
			return $elm$core$List$isEmpty(_arguments);
		default:
			return false;
	}
};
var $elm$core$Char$toLower = _Char_toLower;
var $elm$core$Char$toUpper = _Char_toUpper;
var $folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCharacter = F2(
	function (mode, character) {
		if (mode.$ === 'Absolute') {
			return $elm$core$String$fromChar(
				$elm$core$Char$toUpper(character));
		} else {
			return $elm$core$String$fromChar(
				$elm$core$Char$toLower(character));
		}
	});
var $folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate = F2(
	function (config, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return config.floatFormatter(x) + (',' + config.floatFormatter(y));
	});
var $folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate2 = F2(
	function (config, _v0) {
		var c1 = _v0.a;
		var c2 = _v0.b;
		return A2($folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate, config, c1) + (' ' + A2($folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate, config, c2));
	});
var $folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate3 = F2(
	function (config, _v0) {
		var c1 = _v0.a;
		var c2 = _v0.b;
		var c3 = _v0.c;
		return A2($folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate, config, c1) + (' ' + (A2($folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate, config, c2) + (' ' + A2($folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate, config, c3))));
	});
var $folkertdev$svg_path_lowlevel$Path$LowLevel$encodeFlags = function (_v0) {
	var arcFlag = _v0.a;
	var direction = _v0.b;
	var _v1 = _Utils_Tuple2(arcFlag, direction);
	if (_v1.a.$ === 'LargestArc') {
		if (_v1.b.$ === 'Clockwise') {
			var _v2 = _v1.a;
			var _v3 = _v1.b;
			return _Utils_Tuple2(1, 0);
		} else {
			var _v6 = _v1.a;
			var _v7 = _v1.b;
			return _Utils_Tuple2(1, 1);
		}
	} else {
		if (_v1.b.$ === 'Clockwise') {
			var _v4 = _v1.a;
			var _v5 = _v1.b;
			return _Utils_Tuple2(0, 0);
		} else {
			var _v8 = _v1.a;
			var _v9 = _v1.b;
			return _Utils_Tuple2(0, 1);
		}
	}
};
var $folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyEllipticalArcArgument = F2(
	function (config, _v0) {
		var radii = _v0.radii;
		var xAxisRotate = _v0.xAxisRotate;
		var arcFlag = _v0.arcFlag;
		var direction = _v0.direction;
		var target = _v0.target;
		var _v1 = $folkertdev$svg_path_lowlevel$Path$LowLevel$encodeFlags(
			_Utils_Tuple2(arcFlag, direction));
		var arc = _v1.a;
		var sweep = _v1.b;
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2($folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate, config, radii),
					$elm$core$String$fromFloat(xAxisRotate),
					$elm$core$String$fromInt(arc),
					$elm$core$String$fromInt(sweep),
					A2($folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate, config, target)
				]));
	});
var $folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyDrawTo = F2(
	function (config, command) {
		if ($folkertdev$svg_path_lowlevel$Path$LowLevel$isEmpty(command)) {
			return '';
		} else {
			switch (command.$) {
				case 'LineTo':
					var mode = command.a;
					var coordinates = command.b;
					return _Utils_ap(
						A2(
							$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCharacter,
							mode,
							_Utils_chr('L')),
						A2(
							$elm$core$String$join,
							' ',
							A2(
								$elm$core$List$map,
								$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate(config),
								coordinates)));
				case 'Horizontal':
					var mode = command.a;
					var coordinates = command.b;
					return $elm$core$List$isEmpty(coordinates) ? '' : _Utils_ap(
						A2(
							$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCharacter,
							mode,
							_Utils_chr('H')),
						A2(
							$elm$core$String$join,
							' ',
							A2($elm$core$List$map, $elm$core$String$fromFloat, coordinates)));
				case 'Vertical':
					var mode = command.a;
					var coordinates = command.b;
					return _Utils_ap(
						A2(
							$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCharacter,
							mode,
							_Utils_chr('V')),
						A2(
							$elm$core$String$join,
							' ',
							A2($elm$core$List$map, $elm$core$String$fromFloat, coordinates)));
				case 'CurveTo':
					var mode = command.a;
					var coordinates = command.b;
					return _Utils_ap(
						A2(
							$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCharacter,
							mode,
							_Utils_chr('C')),
						A2(
							$elm$core$String$join,
							' ',
							A2(
								$elm$core$List$map,
								$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate3(config),
								coordinates)));
				case 'SmoothCurveTo':
					var mode = command.a;
					var coordinates = command.b;
					return _Utils_ap(
						A2(
							$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCharacter,
							mode,
							_Utils_chr('S')),
						A2(
							$elm$core$String$join,
							' ',
							A2(
								$elm$core$List$map,
								$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate2(config),
								coordinates)));
				case 'QuadraticBezierCurveTo':
					var mode = command.a;
					var coordinates = command.b;
					return _Utils_ap(
						A2(
							$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCharacter,
							mode,
							_Utils_chr('Q')),
						A2(
							$elm$core$String$join,
							' ',
							A2(
								$elm$core$List$map,
								$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate2(config),
								coordinates)));
				case 'SmoothQuadraticBezierCurveTo':
					var mode = command.a;
					var coordinates = command.b;
					return _Utils_ap(
						A2(
							$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCharacter,
							mode,
							_Utils_chr('T')),
						A2(
							$elm$core$String$join,
							' ',
							A2(
								$elm$core$List$map,
								$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate(config),
								coordinates)));
				case 'EllipticalArc':
					var mode = command.a;
					var _arguments = command.b;
					return _Utils_ap(
						A2(
							$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCharacter,
							mode,
							_Utils_chr('A')),
						A2(
							$elm$core$String$join,
							' ',
							A2(
								$elm$core$List$map,
								$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyEllipticalArcArgument(config),
								_arguments)));
				default:
					return 'Z';
			}
		}
	});
var $folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyMoveTo = F2(
	function (config, _v0) {
		var mode = _v0.a;
		var coordinate = _v0.b;
		if (mode.$ === 'Absolute') {
			return 'M' + A2($folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate, config, coordinate);
		} else {
			return 'm' + A2($folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyCoordinate, config, coordinate);
		}
	});
var $folkertdev$svg_path_lowlevel$Path$LowLevel$toStringSubPath = F2(
	function (config, _v0) {
		var moveto = _v0.moveto;
		var drawtos = _v0.drawtos;
		return A2($folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyMoveTo, config, moveto) + (' ' + A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$folkertdev$svg_path_lowlevel$Path$LowLevel$stringifyDrawTo(config),
				drawtos)));
	});
var $folkertdev$svg_path_lowlevel$Path$LowLevel$toStringWith = F2(
	function (options, subpaths) {
		var config = $folkertdev$svg_path_lowlevel$Path$LowLevel$accumulateOptions(options);
		return A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$folkertdev$svg_path_lowlevel$Path$LowLevel$toStringSubPath(config),
				subpaths));
	});
var $folkertdev$one_true_path_experiment$SubPath$toStringWith = F2(
	function (options, subpath) {
		var config = A3($elm$core$List$foldl, $folkertdev$one_true_path_experiment$SubPath$optionFolder, $folkertdev$one_true_path_experiment$SubPath$defaultConfig, options);
		var lowLevelOptions = function () {
			var _v0 = config.decimalPlaces;
			if (_v0.$ === 'Nothing') {
				return _List_Nil;
			} else {
				var n = _v0.a;
				return _List_fromArray(
					[
						$folkertdev$svg_path_lowlevel$Path$LowLevel$decimalPlaces(n)
					]);
			}
		}();
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				A2(
					$elm$core$Basics$composeL,
					$folkertdev$svg_path_lowlevel$Path$LowLevel$toStringWith(lowLevelOptions),
					$elm$core$List$singleton),
				$folkertdev$one_true_path_experiment$SubPath$toLowLevel(
					(config.mergeAdjacent ? $folkertdev$one_true_path_experiment$SubPath$compress : $elm$core$Basics$identity)(subpath))));
	});
var $folkertdev$one_true_path_experiment$SubPath$toString = function (subpath) {
	return A2($folkertdev$one_true_path_experiment$SubPath$toStringWith, _List_Nil, subpath);
};
var $folkertdev$one_true_path_experiment$Path$toString = A2(
	$elm$core$Basics$composeL,
	$elm$core$String$join(' '),
	$elm$core$List$map($folkertdev$one_true_path_experiment$SubPath$toString));
var $folkertdev$one_true_path_experiment$Path$element = F2(
	function (path, attributes) {
		return A2(
			$elm$svg$Svg$path,
			A2(
				$elm$core$List$cons,
				$elm$svg$Svg$Attributes$d(
					$folkertdev$one_true_path_experiment$Path$toString(path)),
				attributes),
			_List_Nil);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$defaultSymbolSize = 10;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$getSymbolSize = function (symbol) {
	switch (symbol.$) {
		case 'Triangle':
			var c = symbol.a;
			return c.size;
		case 'Circle':
			var c = symbol.a;
			return c.size;
		case 'Custom':
			return $elm$core$Maybe$Nothing;
		case 'Corner':
			var c = symbol.a;
			return c.size;
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$labelGap = 2;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$horizontalLabel = F6(
	function (config, xScale, yScale, idx, groupLabel, point) {
		if (groupLabel.$ === 'Just') {
			var label = groupLabel.a;
			var conf = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
			var symbol = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$getSymbolByIndex, conf.symbols, idx);
			var labelOffset = $data_viz_lab$elm_chart_builder$Chart$Internal$Line$labelGap + A2(
				$elm$core$Maybe$withDefault,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Line$defaultSymbolSize,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$getSymbolSize(symbol));
			var _v1 = point;
			var xVal = _v1.a;
			var yVal = _v1.b;
			var xPos = $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$floorFloat(
				A2($gampleman$elm_visualization$Scale$convert, xScale, xVal));
			var yPos = $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$floorFloat(
				A2($gampleman$elm_visualization$Scale$convert, yScale, yVal));
			var txt = $elm_community$typed_svg$TypedSvg$text_(
				_List_fromArray(
					[
						$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(yPos),
						$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(xPos + labelOffset),
						$elm_community$typed_svg$TypedSvg$Attributes$textAnchor($elm_community$typed_svg$TypedSvg$Types$AnchorStart),
						$elm_community$typed_svg$TypedSvg$Attributes$dominantBaseline($elm_community$typed_svg$TypedSvg$Types$DominantBaselineMiddle),
						$elm_community$typed_svg$TypedSvg$Attributes$class(
						_List_fromArray(
							[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$labelClassName]))
					]));
			var _v2 = conf.showLabels;
			if (_v2.$ === 'XGroupLabel') {
				return txt(
					_List_fromArray(
						[
							$elm_community$typed_svg$TypedSvg$Core$text(label)
						]));
			} else {
				return A2($elm_community$typed_svg$TypedSvg$text_, _List_Nil, _List_Nil);
			}
		} else {
			return A2($elm_community$typed_svg$TypedSvg$text_, _List_Nil, _List_Nil);
		}
	});
var $gampleman$elm_visualization$Shape$Generators$line = F2(
	function (curve, data) {
		var makeCurves = F2(
			function (datum, _v3) {
				var prev = _v3.a;
				var list = _v3.b;
				var _v0 = _Utils_Tuple3(prev, datum, list);
				if (_v0.b.$ === 'Nothing') {
					var _v1 = _v0.b;
					var l = _v0.c;
					return _Utils_Tuple2(false, l);
				} else {
					if (!_v0.a) {
						var point = _v0.b.a;
						var l = _v0.c;
						return _Utils_Tuple2(
							true,
							A2(
								$elm$core$List$cons,
								_List_fromArray(
									[point]),
								l));
					} else {
						if (_v0.c.b) {
							var p1 = _v0.b.a;
							var _v2 = _v0.c;
							var ps = _v2.a;
							var l = _v2.b;
							return _Utils_Tuple2(
								true,
								A2(
									$elm$core$List$cons,
									A2($elm$core$List$cons, p1, ps),
									l));
						} else {
							var p1 = _v0.b.a;
							var l = _v0.c;
							return _Utils_Tuple2(
								true,
								A2(
									$elm$core$List$cons,
									_List_fromArray(
										[p1]),
									l));
						}
					}
				}
			});
		return A2(
			$elm$core$List$map,
			curve,
			A3(
				$elm$core$List$foldr,
				makeCurves,
				_Utils_Tuple2(false, _List_Nil),
				data).b);
	});
var $gampleman$elm_visualization$Shape$line = $gampleman$elm_visualization$Shape$Generators$line;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$lineGenerator = F3(
	function (xScale, yScale, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				A2($gampleman$elm_visualization$Scale$convert, xScale, x),
				A2($gampleman$elm_visualization$Scale$convert, yScale, y)));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$lineShapeClassName = 'ecb-line';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$AnnotationSymbol = function (a) {
	return {$: 'AnnotationSymbol', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$ChartSymbol = {$: 'ChartSymbol'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$annotationScaler = 1.25;
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getAnnotationPointHint = function (annotations) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$filterMap,
			function (annotation) {
				if (annotation.$ === 'AnnotationPointHint') {
					var p = annotation.a;
					return $elm$core$Maybe$Just(p);
				} else {
					return $elm$core$Maybe$Nothing;
				}
			},
			annotations));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$symbolsToSymbolElements = F2(
	function (symbolContext, symbols) {
		return A2(
			$elm$core$List$map,
			function (symbol) {
				var s = $elm_community$typed_svg$TypedSvg$symbol(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolToId(symbol))
						]));
				var _v0 = function () {
					if (symbolContext.$ === 'AnnotationSymbol') {
						var scaler_ = symbolContext.a;
						return _Utils_Tuple2(scaler_, true);
					} else {
						return _Utils_Tuple2(1, false);
					}
				}();
				var scaler = _v0.a;
				var isAnnotationSymbol = _v0.b;
				var size = function (c) {
					return scaler * A2($elm$core$Maybe$withDefault, $data_viz_lab$elm_chart_builder$Chart$Internal$Line$defaultSymbolSize, c.size);
				};
				switch (symbol.$) {
					case 'Circle':
						var c = symbol.a;
						return isAnnotationSymbol ? $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$circle_(
							size(c)) : s(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$circle_(
									size(c))
								]));
					case 'Custom':
						var c = symbol.a;
						return isAnnotationSymbol ? A2($data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$custom, scaler, c) : s(
							_List_fromArray(
								[
									A2($data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$custom, 1, c)
								]));
					case 'Corner':
						var c = symbol.a;
						return isAnnotationSymbol ? $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$corner(
							size(c)) : s(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$corner(
									size(c))
								]));
					case 'Triangle':
						var c = symbol.a;
						return isAnnotationSymbol ? $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$triangle(
							size(c)) : s(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$triangle(
									size(c))
								]));
					default:
						return s(_List_Nil);
				}
			},
			symbols);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$drawSymbol = F2(
	function (config, _v0) {
		var idx = _v0.idx;
		var x = _v0.x;
		var y = _v0.y;
		var styleStr = _v0.styleStr;
		var symbolContext = _v0.symbolContext;
		var conf = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var symbol = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$getSymbolByIndex, conf.symbols, idx);
		var annotationPointHint = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getAnnotationPointHint(conf.annotations);
		var annotationPointStyle = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Maybe$map, $elm$core$Tuple$second, annotationPointHint));
		var _v1 = function () {
			if (symbolContext.$ === 'AnnotationSymbol') {
				var scaler_ = symbolContext.a;
				return _Utils_Tuple2(scaler_, true);
			} else {
				return _Utils_Tuple2(1, false);
			}
		}();
		var scaler = _v1.a;
		var isAnnotationSymbol = _v1.b;
		var st = function (styles) {
			return $elm_community$typed_svg$TypedSvg$Attributes$style(
				function (s) {
					return isAnnotationSymbol ? A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles, annotationPointStyle, s) : s;
				}(
					A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles, styles, styleStr)));
		};
		var symbolEl = function (s) {
			return isAnnotationSymbol ? A2(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Line$symbolsToSymbolElements,
				symbolContext,
				_List_fromArray(
					[s])) : _List_fromArray(
				[
					A2(
					$elm_community$typed_svg$TypedSvg$use,
					_List_fromArray(
						[
							$elm_community$typed_svg$TypedSvg$Attributes$xlinkHref(
							'#' + $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolToId(symbol))
						]),
					_List_Nil)
				]);
		};
		var circleSize = function (c) {
			return scaler * A2($elm$core$Maybe$withDefault, $data_viz_lab$elm_chart_builder$Chart$Internal$Line$defaultSymbolSize, c.size);
		};
		var size = function (c) {
			return scaler * A2($elm$core$Maybe$withDefault, $data_viz_lab$elm_chart_builder$Chart$Internal$Line$defaultSymbolSize, c.size);
		};
		if ($data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons(config)) {
			switch (symbol.$) {
				case 'Triangle':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2(
											$elm_community$typed_svg$TypedSvg$Types$Translate,
											(x - (size(c) / 2)) + conf.padding.left,
											(y - (size(c) / 2)) - conf.padding.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolEl(symbol))
						]);
				case 'Circle':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2(
											$elm_community$typed_svg$TypedSvg$Types$Translate,
											(x - (circleSize(c) / 2)) + conf.padding.left,
											(y - (circleSize(c) / 2)) - conf.padding.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolEl(symbol))
						]);
				case 'Corner':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2(
											$elm_community$typed_svg$TypedSvg$Types$Translate,
											(x - (size(c) / 2)) + conf.padding.left,
											y - (size(c) / 2))
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolEl(symbol))
						]);
				case 'Custom':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, x + conf.padding.left, y + conf.padding.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolEl(symbol))
						]);
				default:
					return _List_Nil;
			}
		} else {
			if (isAnnotationSymbol) {
				return _List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$g,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Attributes$transform(
								_List_fromArray(
									[
										A2($elm_community$typed_svg$TypedSvg$Types$Translate, x - (($data_viz_lab$elm_chart_builder$Chart$Internal$Line$defaultSymbolSize * scaler) / 2), y - (($data_viz_lab$elm_chart_builder$Chart$Internal$Line$defaultSymbolSize * scaler) / 2))
									])),
								$elm_community$typed_svg$TypedSvg$Attributes$class(
								_List_fromArray(
									[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
								$elm_community$typed_svg$TypedSvg$Attributes$style(
								A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles, annotationPointStyle, ''))
							]),
						symbolEl(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$Circle($data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$initialConf)))
					]);
			} else {
				return _List_Nil;
			}
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$isStackedLine = function (c) {
	var _v0 = c.layout;
	if (_v0.$ === 'StackedLine') {
		return true;
	} else {
		return false;
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$unstack = function (vals) {
	return $elm$core$List$reverse(
		A3(
			$elm$core$List$foldl,
			F2(
				function (val, _v0) {
					var prev = _v0.a;
					var acc = _v0.b;
					if (prev.$ === 'Nothing') {
						return _Utils_Tuple2(
							$elm$core$Maybe$Just(val),
							A2($elm$core$List$cons, val, acc));
					} else {
						var p = prev.a;
						return _Utils_Tuple2(
							$elm$core$Maybe$Just(val),
							A2($elm$core$List$cons, val - p, acc));
					}
				}),
			_Utils_Tuple2($elm$core$Maybe$Nothing, _List_Nil),
			vals).b);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$stackDeltas = function (vals) {
	return A2(
		$elm$core$List$cons,
		0,
		A2(
			$elm$core$List$drop,
			1,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$unstack(vals)));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$getStackDeltas = F2(
	function (c, data) {
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$isStackedLine(c) ? A2(
			$elm$core$List$map,
			function (d) {
				return A2(
					$elm$core$List$map,
					function (dd) {
						return _Utils_Tuple2(0, dd);
					},
					d);
			},
			$elm_community$list_extra$List$Extra$transpose(
				A2(
					$elm$core$List$map,
					$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$stackDeltas,
					$elm_community$list_extra$List$Extra$transpose(
						A2(
							$elm$core$List$map,
							A2(
								$elm$core$Basics$composeR,
								function ($) {
									return $.points;
								},
								$elm$core$List$map($elm$core$Tuple$second)),
							data))))) : A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.points;
				},
				$elm$core$List$map(
					$elm$core$Basics$always(
						_Utils_Tuple2(0, 0)))),
			data);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$symbolGroup = F4(
	function (config, xScale, yScale, combinedData) {
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var colorSymbol = function (idx) {
			return A3(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorStyle,
				c,
				$elm$core$Maybe$Just(idx),
				$elm$core$Maybe$Nothing);
		};
		var m = c.margin;
		var stackDeltas = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$getStackDeltas, c, combinedData);
		var annotationPointHint = A2(
			$elm$core$Maybe$map,
			$elm$core$Tuple$first,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getAnnotationPointHint(c.annotations));
		var xMatch = function (val) {
			return A2(
				$elm$core$Maybe$withDefault,
				false,
				A2(
					$elm$core$Maybe$map,
					function (a) {
						return _Utils_eq(a.selection.x, val);
					},
					annotationPointHint));
		};
		var yMatch = function (val) {
			return A2(
				$elm$core$Maybe$withDefault,
				false,
				A2(
					$elm$core$Maybe$map,
					function (a) {
						return A2(
							$elm$core$List$member,
							val,
							A2(
								$elm$core$List$map,
								function ($) {
									return $.value;
								},
								a.selection.y));
					},
					annotationPointHint));
		};
		return A2(
			$elm_community$typed_svg$TypedSvg$g,
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$transform(
					_List_fromArray(
						[
							A2($elm_community$typed_svg$TypedSvg$Types$Translate, m.left, m.top)
						])),
					$elm_community$typed_svg$TypedSvg$Attributes$class(
					_List_fromArray(
						[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
				]),
			$elm$core$List$concat(
				$elm$core$List$concat(
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (idx, d) {
								var deltas = A2(
									$elm$core$Maybe$withDefault,
									A2(
										$elm$core$List$map,
										$elm$core$Basics$always(
											_Utils_Tuple2(0, 0)),
										d.points),
									A2($elm_community$list_extra$List$Extra$getAt, idx, stackDeltas));
								return A3(
									$elm$core$List$map2,
									F2(
										function (_v0, _v1) {
											var delta = _v0.b;
											var x = _v1.a;
											var y = _v1.b;
											var params = {
												idx: idx,
												styleStr: colorSymbol(idx),
												symbolContext: $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$ChartSymbol,
												x: A2($gampleman$elm_visualization$Scale$convert, xScale, x),
												y: A2($gampleman$elm_visualization$Scale$convert, yScale, y)
											};
											if (annotationPointHint.$ === 'Just') {
												return (xMatch(x) && yMatch(y - delta)) ? A2(
													$data_viz_lab$elm_chart_builder$Chart$Internal$Line$drawSymbol,
													config,
													_Utils_update(
														params,
														{
															symbolContext: $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$AnnotationSymbol($data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$annotationScaler)
														})) : A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$drawSymbol, config, params);
											} else {
												return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$drawSymbol, config, params);
											}
										}),
									deltas,
									d.points);
							}),
						combinedData))));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$topLeftTranslate = F2(
	function (margin, padding) {
		return A2($elm_community$typed_svg$TypedSvg$Types$Translate, margin.left + padding.left, margin.top + padding.top);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$drawContinuousLine = F4(
	function (config, xScale, yScale, sortedData) {
		var label = F3(
			function (i, s, d) {
				return A2(
					$elm$core$Maybe$withDefault,
					A2($elm_community$typed_svg$TypedSvg$text_, _List_Nil, _List_Nil),
					A2(
						$elm$core$Maybe$map,
						A5($data_viz_lab$elm_chart_builder$Chart$Internal$Line$horizontalLabel, config, xScale, yScale, i, s),
						$elm$core$List$head(
							$elm$core$List$reverse(d))));
			});
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var extraStyles = function () {
			var _v2 = c.lineDraw;
			if (_v2.$ === 'Line') {
				return _List_fromArray(
					[
						_Utils_Tuple2('fill', 'none')
					]);
			} else {
				return _List_Nil;
			}
		}();
		var line = function (dataGroup) {
			var _v1 = c.lineDraw;
			if (_v1.$ === 'Line') {
				return A2(
					$gampleman$elm_visualization$Shape$line,
					c.curve,
					A2(
						$elm$core$List$map,
						A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$lineGenerator, xScale, yScale),
						dataGroup.points));
			} else {
				return A2(
					$gampleman$elm_visualization$Shape$area,
					c.curve,
					A2(
						$elm$core$List$map,
						A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$areaGenerator, xScale, yScale),
						dataGroup.points));
			}
		};
		var m = c.margin;
		var p = c.padding;
		var styles = function (idx) {
			return $elm_community$typed_svg$TypedSvg$Attributes$style(
				A2(
					$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
					c.coreStyle,
					A2(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
						extraStyles,
						A3(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorStyle,
							c,
							$elm$core$Maybe$Just(idx),
							$elm$core$Maybe$Nothing))));
		};
		return _List_fromArray(
			[
				A2(
				$elm_community$typed_svg$TypedSvg$g,
				_List_fromArray(
					[
						$elm_community$typed_svg$TypedSvg$Attributes$transform(
						_List_fromArray(
							[
								A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$topLeftTranslate, m, p)
							])),
						$elm_community$typed_svg$TypedSvg$Attributes$class(
						_List_fromArray(
							[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
					]),
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (idx, d) {
							return A2(
								$folkertdev$one_true_path_experiment$Path$element,
								line(d),
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[
												$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$lineShapeClassName,
												$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$lineShapeClassName + ('-' + $elm$core$String$fromInt(idx))
											])),
										styles(idx)
									]));
						}),
					sortedData)),
				A2(
				$elm_community$typed_svg$TypedSvg$g,
				_List_fromArray(
					[
						$elm_community$typed_svg$TypedSvg$Attributes$transform(
						_List_fromArray(
							[
								A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$topLeftTranslate, m, p)
							])),
						$elm_community$typed_svg$TypedSvg$Attributes$class(
						_List_fromArray(
							[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
					]),
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (idx, _v0) {
							var groupLabel = _v0.groupLabel;
							var points = _v0.points;
							return A3(label, idx, groupLabel, points);
						}),
					sortedData)),
				A4($data_viz_lab$elm_chart_builder$Chart$Internal$Line$symbolGroup, config, xScale, yScale, sortedData)
			]);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainContinuous = function (_v0) {
	var d = _v0.a;
	return d;
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainContinuous = function (config) {
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainContinuous(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).domainContinuous);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainContinuousFromData = F3(
	function (extent, domain, data) {
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainContinuous(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainContinuous(
				{
					x: function () {
						var _v0 = domain.x;
						if (_v0.$ === 'Just') {
							return domain.x;
						} else {
							return $elm$core$Maybe$Just(
								function (dd) {
									return _Utils_Tuple2(
										A2(
											$elm$core$Maybe$withDefault,
											0,
											$elm$core$List$minimum(dd)),
										A2(
											$elm$core$Maybe$withDefault,
											0,
											$elm$core$List$maximum(dd)));
								}(
									A2(
										$elm$core$List$map,
										$elm$core$Tuple$first,
										$elm$core$List$concat(
											A2(
												$elm$core$List$map,
												function ($) {
													return $.points;
												},
												data)))));
						}
					}(),
					y: function () {
						var _v1 = domain.y;
						if (_v1.$ === 'Just') {
							return domain.y;
						} else {
							if (extent.$ === 'Just') {
								return extent;
							} else {
								return $elm$core$Maybe$Just(
									function (dd) {
										return _Utils_Tuple2(
											0,
											A2(
												$elm$core$Maybe$withDefault,
												0,
												$elm$core$List$maximum(dd)));
									}(
										A2(
											$elm$core$List$map,
											$elm$core$Tuple$second,
											$elm$core$List$concat(
												A2(
													$elm$core$List$map,
													function ($) {
														return $.points;
													},
													data)))));
							}
						}
					}()
				}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainTime = function (_v0) {
	var d = _v0.a;
	return d;
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainTime = function (config) {
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainTime(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).domainTime);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainTimeFromData = F3(
	function (extent, domain, data) {
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainTime(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainTime(
				{
					x: function () {
						var _v0 = domain.x;
						if (_v0.$ === 'Just') {
							return domain.x;
						} else {
							return $elm$core$Maybe$Just(
								function (dd) {
									return _Utils_Tuple2(
										$elm$time$Time$millisToPosix(
											A2(
												$elm$core$Maybe$withDefault,
												0,
												$elm$core$List$minimum(dd))),
										$elm$time$Time$millisToPosix(
											A2(
												$elm$core$Maybe$withDefault,
												0,
												$elm$core$List$maximum(dd))));
								}(
									A2(
										$elm$core$List$map,
										$elm$time$Time$posixToMillis,
										A2(
											$elm$core$List$map,
											$elm$core$Tuple$first,
											$elm$core$List$concat(
												A2(
													$elm$core$List$map,
													function ($) {
														return $.points;
													},
													data))))));
						}
					}(),
					y: function () {
						var _v1 = domain.y;
						if (_v1.$ === 'Just') {
							return domain.y;
						} else {
							if (extent.$ === 'Just') {
								return extent;
							} else {
								return $elm$core$Maybe$Just(
									function (dd) {
										return _Utils_Tuple2(
											0,
											A2(
												$elm$core$Maybe$withDefault,
												0,
												$elm$core$List$maximum(dd)));
									}(
										A2(
											$elm$core$List$map,
											$elm$core$Tuple$second,
											$elm$core$List$concat(
												A2(
													$elm$core$List$map,
													function ($) {
														return $.points;
													},
													data)))));
							}
						}
					}()
				}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$HoverAllCriteria = function (a) {
	return {$: 'HoverAllCriteria', a: a};
};
var $elm_community$list_extra$List$Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $gampleman$elm_visualization$Scale$invert = F2(
	function (_v0, value) {
		var scale = _v0.a;
		return A3(scale.invert, scale.domain, scale.range, value);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$nearest = F2(
	function (numbers, number) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (n, _v0) {
					var delta_ = _v0.a;
					var value = _v0.b;
					var delta = $elm$core$Basics$abs(n - number);
					return (_Utils_cmp(delta, delta_) < 0) ? _Utils_Tuple2(delta, n) : _Utils_Tuple2(delta_, value);
				}),
			_Utils_Tuple2(1 / 0, 0),
			numbers).b;
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$flatDataGroup = function (dataGroup) {
	return $elm$core$List$concat(
		A2(
			$elm$core$List$map,
			function (d) {
				return A2(
					$elm$core$List$map,
					function (p) {
						return {groupLabel: d.groupLabel, point: p};
					},
					d.points);
			},
			dataGroup));
};
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$transposeDataGroup = function (dataGroup) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (_v0, acc) {
				var groupLabel = _v0.groupLabel;
				var point = _v0.point;
				var k = $elm$core$String$fromFloat(point.a);
				return A2($elm$core$Dict$member, k, acc) ? A3(
					$elm$core$Dict$update,
					k,
					function (values) {
						return A2(
							$elm$core$Maybe$map,
							function (v) {
								return A2(
									$elm$core$List$cons,
									{groupLabel: groupLabel, point: point},
									v);
							},
							values);
					},
					acc) : A3(
					$elm$core$Dict$insert,
					k,
					_List_fromArray(
						[
							{groupLabel: groupLabel, point: point}
						]),
					acc);
			}),
		$elm$core$Dict$empty,
		$data_viz_lab$elm_chart_builder$Chart$Internal$Event$flatDataGroup(dataGroup));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$vectorLength = function (_v0) {
	var eventX = _v0.eventX;
	var eventY = _v0.eventY;
	var dataX = _v0.dataX;
	var dataY = _v0.dataY;
	return $elm$core$Basics$sqrt(
		A2($elm$core$Basics$pow, eventX - dataX, 2) + A2($elm$core$Basics$pow, eventY - dataY, 2));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$getWithin = F5(
	function (_v0, data, _v1, criteria, eventData) {
		var margin = _v0.margin;
		var width = _v0.width;
		var height = _v0.height;
		var xScale = _v1.a;
		var yScale = _v1.b;
		var yPosition = (eventData.pageY - eventData.boundingClientRect.top) - margin.top;
		var xPosition = (eventData.pageX - eventData.boundingClientRect.left) - margin.left;
		var dataTransposed = $data_viz_lab$elm_chart_builder$Chart$Internal$Event$transposeDataGroup(data);
		var keys = $elm$core$Dict$keys(dataTransposed);
		var _v2 = _Utils_Tuple2(
			A2($gampleman$elm_visualization$Scale$invert, xScale, xPosition),
			A2($gampleman$elm_visualization$Scale$invert, yScale, yPosition));
		var xValue = _v2.a;
		var yValue = _v2.b;
		var nearestKey = $elm$core$String$fromFloat(
			A2(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$nearest,
				A2(
					$elm$core$List$filterMap,
					$elm$core$Basics$identity,
					A2($elm$core$List$map, $elm$core$String$toFloat, keys)),
				xValue));
		var nearestGroup = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Dict$get, nearestKey, dataTransposed));
		var vectorDistances = A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.point;
				},
				function (_v11) {
					var x = _v11.a;
					var y = _v11.b;
					return _Utils_Tuple2(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Event$vectorLength(
							{
								dataX: A2($gampleman$elm_visualization$Scale$convert, xScale, x),
								dataY: A2($gampleman$elm_visualization$Scale$convert, yScale, y),
								eventX: xPosition,
								eventY: yPosition
							}),
						_Utils_Tuple2(x, y));
				}),
			nearestGroup);
		var nearestPointInGroup = $elm$core$List$head(
			A2(
				$elm$core$List$sortBy,
				function (_v10) {
					var distance = _v10.a;
					return distance;
				},
				vectorDistances));
		if (criteria.$ === 'HoverOneCriteria') {
			var tolerance = criteria.a;
			return A2(
				$elm$core$Maybe$map,
				function (_v7) {
					var groupLabel = _v7.groupLabel;
					var point = _v7.point;
					return {
						boundingClientRect: eventData.boundingClientRect,
						selection: {
							x: point.a,
							y: _List_fromArray(
								[
									{groupLabel: groupLabel, value: point.b}
								])
						},
						xPosition: A2($gampleman$elm_visualization$Scale$convert, xScale, point.a),
						yPosition: A2($gampleman$elm_visualization$Scale$convert, yScale, point.b)
					};
				},
				A2(
					$elm_community$list_extra$List$Extra$find,
					function (_v4) {
						var point = _v4.point;
						if (nearestPointInGroup.$ === 'Just') {
							var _v6 = nearestPointInGroup.a;
							var d = _v6.a;
							var p = _v6.b;
							return _Utils_eq(p, point) && (_Utils_cmp(d, tolerance) < 0);
						} else {
							return false;
						}
					},
					nearestGroup));
		} else {
			return A3(
				$elm$core$List$foldr,
				F2(
					function (_v8, acc) {
						var groupLabel = _v8.groupLabel;
						var point = _v8.point;
						if (acc.$ === 'Nothing') {
							return $elm$core$Maybe$Just(
								{
									boundingClientRect: eventData.boundingClientRect,
									selection: {
										x: point.a,
										y: _List_fromArray(
											[
												{groupLabel: groupLabel, value: point.b}
											])
									},
									xPosition: A2($gampleman$elm_visualization$Scale$convert, xScale, point.a),
									yPosition: A2($gampleman$elm_visualization$Scale$convert, yScale, point.b)
								});
						} else {
							var acc_ = acc.a;
							var newY = A2(
								$elm$core$List$cons,
								{groupLabel: groupLabel, value: point.b},
								acc_.selection.y);
							return $elm$core$Maybe$Just(
								_Utils_update(
									acc_,
									{
										selection: {x: point.a, y: newY}
									}));
						}
					}),
				$elm$core$Maybe$Nothing,
				nearestGroup);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$EventData = F3(
	function (pageX, pageY, boundingClientRect) {
		return {boundingClientRect: boundingClientRect, pageX: pageX, pageY: pageY};
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $debois$elm_dom$DOM$offsetHeight = A2($elm$json$Json$Decode$field, 'offsetHeight', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetWidth = A2($elm$json$Json$Decode$field, 'offsetWidth', $elm$json$Json$Decode$float);
var $elm$json$Json$Decode$map4 = _Json_map4;
var $debois$elm_dom$DOM$offsetLeft = A2($elm$json$Json$Decode$field, 'offsetLeft', $elm$json$Json$Decode$float);
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $debois$elm_dom$DOM$offsetParent = F2(
	function (x, decoder) {
		return $elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$json$Json$Decode$field,
					'offsetParent',
					$elm$json$Json$Decode$null(x)),
					A2($elm$json$Json$Decode$field, 'offsetParent', decoder)
				]));
	});
var $debois$elm_dom$DOM$offsetTop = A2($elm$json$Json$Decode$field, 'offsetTop', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$scrollLeft = A2($elm$json$Json$Decode$field, 'scrollLeft', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$scrollTop = A2($elm$json$Json$Decode$field, 'scrollTop', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$position = F2(
	function (x, y) {
		return A2(
			$elm$json$Json$Decode$andThen,
			function (_v0) {
				var x_ = _v0.a;
				var y_ = _v0.b;
				return A2(
					$debois$elm_dom$DOM$offsetParent,
					_Utils_Tuple2(x_, y_),
					A2($debois$elm_dom$DOM$position, x_, y_));
			},
			A5(
				$elm$json$Json$Decode$map4,
				F4(
					function (scrollLeftP, scrollTopP, offsetLeftP, offsetTopP) {
						return _Utils_Tuple2((x + offsetLeftP) - scrollLeftP, (y + offsetTopP) - scrollTopP);
					}),
				$debois$elm_dom$DOM$scrollLeft,
				$debois$elm_dom$DOM$scrollTop,
				$debois$elm_dom$DOM$offsetLeft,
				$debois$elm_dom$DOM$offsetTop));
	});
var $debois$elm_dom$DOM$boundingClientRect = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (_v0, width, height) {
			var x = _v0.a;
			var y = _v0.b;
			return {height: height, left: x, top: y, width: width};
		}),
	A2($debois$elm_dom$DOM$position, 0, 0),
	$debois$elm_dom$DOM$offsetWidth,
	$debois$elm_dom$DOM$offsetHeight);
var $elm$json$Json$Decode$lazy = function (thunk) {
	return A2(
		$elm$json$Json$Decode$andThen,
		thunk,
		$elm$json$Json$Decode$succeed(_Utils_Tuple0));
};
var $debois$elm_dom$DOM$parentElement = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'parentElement', decoder);
};
function $data_viz_lab$elm_chart_builder$Chart$Internal$Event$cyclic$position() {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$debois$elm_dom$DOM$boundingClientRect,
				$elm$json$Json$Decode$lazy(
				function (_v0) {
					return $debois$elm_dom$DOM$parentElement(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Event$cyclic$position());
				})
			]));
}
try {
	var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$position = $data_viz_lab$elm_chart_builder$Chart$Internal$Event$cyclic$position();
	$data_viz_lab$elm_chart_builder$Chart$Internal$Event$cyclic$position = function () {
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Event$position;
	};
} catch ($) {
	throw 'Some top-level definitions from `Chart.Internal.Event` are causing infinite recursion:\n\n  ┌─────┐\n  │    position\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $debois$elm_dom$DOM$target = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'target', decoder);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$mouseEventDecoder = A4(
	$elm$json$Json$Decode$map3,
	$data_viz_lab$elm_chart_builder$Chart$Internal$Event$EventData,
	A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float),
	$debois$elm_dom$DOM$target($data_viz_lab$elm_chart_builder$Chart$Internal$Event$position));
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$onEvent = F6(
	function (stringEvent, searchCriteria, config, data, scales, message) {
		return A2(
			$elm$html$Html$Events$on,
			stringEvent,
			A2(
				$elm$json$Json$Decode$map,
				message,
				A2(
					$elm$json$Json$Decode$andThen,
					function (e) {
						return $elm$json$Json$Decode$succeed(
							A5($data_viz_lab$elm_chart_builder$Chart$Internal$Event$getWithin, config, data, scales, searchCriteria, e));
					},
					$data_viz_lab$elm_chart_builder$Chart$Internal$Event$mouseEventDecoder)));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$onMouseLeave = function (message) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		$elm$json$Json$Decode$succeed(
			message($elm$core$Maybe$Nothing)));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$hoverAll = F4(
	function (config, data, scales, msg) {
		return _List_fromArray(
			[
				A6(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$onEvent,
				'mousemove',
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$HoverAllCriteria(30),
				config,
				data,
				scales,
				msg),
				A6(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$onEvent,
				'touchstart',
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$HoverAllCriteria(100),
				config,
				data,
				scales,
				msg),
				A6(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$onEvent,
				'touchmove',
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$HoverAllCriteria(100),
				config,
				data,
				scales,
				msg),
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$onMouseLeave(msg)
			]);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$HoverOneCriteria = function (a) {
	return {$: 'HoverOneCriteria', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$hoverOne = F4(
	function (config, data, scales, msg) {
		return _List_fromArray(
			[
				A6(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$onEvent,
				'mousemove',
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$HoverOneCriteria(30),
				config,
				data,
				scales,
				msg),
				A6(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$onEvent,
				'touchstart',
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$HoverOneCriteria(100),
				config,
				data,
				scales,
				msg),
				A6(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$onEvent,
				'touchmove',
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$HoverOneCriteria(100),
				config,
				data,
				scales,
				msg),
				$data_viz_lab$elm_chart_builder$Chart$Internal$Event$onMouseLeave(msg)
			]);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$lineClassName = 'ecb-line';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$symbolElements = function (config) {
	var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
	var _v0 = c.layout;
	switch (_v0.$) {
		case 'StackedLine':
			return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons(config) ? A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$symbolsToSymbolElements, $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$ChartSymbol, c.symbols) : _List_Nil;
		case 'GroupedLine':
			return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons(config) ? A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$symbolsToSymbolElements, $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$ChartSymbol, c.symbols) : _List_Nil;
		default:
			return _List_Nil;
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataThreshold = function (data) {
	return $elm$core$Basics$floor(
		A2(
			$gampleman$elm_visualization$Scale$convert,
			$gampleman$elm_visualization$Scale$clamp(
				A2(
					$gampleman$elm_visualization$Scale$linear,
					_Utils_Tuple2(6, 25),
					_Utils_Tuple2(0, 500))),
			$elm$core$List$length(data)));
};
var $RalfNorthman$elm_lttb$LTTB$Point = F2(
	function (x, y) {
		return {x: x, y: y};
	});
var $elm_community$list_extra$List$Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _v1) {
				var y = _v1.a;
				var fy = _v1.b;
				var fx = f(x);
				return (_Utils_cmp(fx, fy) > 0) ? _Utils_Tuple2(x, fx) : _Utils_Tuple2(y, fy);
			});
		if (ls.b) {
			if (!ls.b.b) {
				var l_ = ls.a;
				return $elm$core$Maybe$Just(l_);
			} else {
				var l_ = ls.a;
				var ls_ = ls.b;
				return $elm$core$Maybe$Just(
					A3(
						$elm$core$List$foldl,
						maxBy,
						_Utils_Tuple2(
							l_,
							f(l_)),
						ls_).a);
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm_community$list_extra$List$Extra$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $elm_community$list_extra$List$Extra$groupsOfVarying_ = F3(
	function (listOflengths, list, accu) {
		groupsOfVarying_:
		while (true) {
			var _v0 = _Utils_Tuple2(listOflengths, list);
			if (_v0.a.b && _v0.b.b) {
				var _v1 = _v0.a;
				var length = _v1.a;
				var tailLengths = _v1.b;
				var _v2 = _v0.b;
				var _v3 = A2($elm_community$list_extra$List$Extra$splitAt, length, list);
				var head = _v3.a;
				var tail = _v3.b;
				var $temp$listOflengths = tailLengths,
					$temp$list = tail,
					$temp$accu = A2($elm$core$List$cons, head, accu);
				listOflengths = $temp$listOflengths;
				list = $temp$list;
				accu = $temp$accu;
				continue groupsOfVarying_;
			} else {
				return $elm$core$List$reverse(accu);
			}
		}
	});
var $elm_community$list_extra$List$Extra$groupsOfVarying = F2(
	function (listOflengths, list) {
		return A3($elm_community$list_extra$List$Extra$groupsOfVarying_, listOflengths, list, _List_Nil);
	});
var $RalfNorthman$elm_lttb$LTTB$splitIn = F2(
	function (nParts, list) {
		if (!nParts) {
			return _List_fromArray(
				[_List_Nil]);
		} else {
			if (nParts < 0) {
				return _List_Nil;
			} else {
				if (nParts === 1) {
					return _List_fromArray(
						[list]);
				} else {
					var listLength = $elm$core$List$length(list);
					var nLargerChunks = listLength % nParts;
					var baseChunkSize = (listLength / nParts) | 0;
					var partLengths = _Utils_ap(
						A2($elm$core$List$repeat, nLargerChunks, baseChunkSize + 1),
						A2($elm$core$List$repeat, listLength - nLargerChunks, baseChunkSize));
					return A2($elm_community$list_extra$List$Extra$groupsOfVarying, partLengths, list);
				}
			}
		}
	});
var $RalfNorthman$elm_lttb$LTTB$sumBy = F2(
	function (fn, list) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (item, total) {
					return total + fn(item);
				}),
			0,
			list);
	});
var $elm_community$list_extra$List$Extra$unconsLast = function (list) {
	var _v0 = $elm$core$List$reverse(list);
	if (!_v0.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var last_ = _v0.a;
		var rest = _v0.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				last_,
				$elm$core$List$reverse(rest)));
	}
};
var $RalfNorthman$elm_lttb$LTTB$downsample = function (input) {
	var y = input.yGetter;
	var x = input.xGetter;
	var triangleArea = F3(
		function (a, b, c) {
			return $elm$core$Basics$abs(
				((a.x * (y(b) - c.y)) + (x(b) * (c.y - a.y))) + (c.x * (a.y - y(b))));
		});
	var toPoint = function (inp) {
		return A2(
			$RalfNorthman$elm_lttb$LTTB$Point,
			x(inp),
			y(inp));
	};
	var listAverage = function (list_) {
		var length = $elm$core$List$length(list_);
		var avg = F2(
			function (list, acc) {
				return A2($RalfNorthman$elm_lttb$LTTB$sumBy, acc, list) / length;
			});
		return A2(
			$RalfNorthman$elm_lttb$LTTB$Point,
			A2(avg, list_, x),
			A2(avg, list_, y));
	};
	var execute = function (bucketList) {
		var iter = F4(
			function (previous, current, next, rest) {
				var previousPoint = toPoint(previous);
				var nextAverage = listAverage(next);
				var selected = A2(
					$elm$core$Maybe$withDefault,
					previous,
					A2(
						$elm_community$list_extra$List$Extra$maximumBy,
						function (j) {
							return A3(triangleArea, previousPoint, j, nextAverage);
						},
						current));
				if (rest.b) {
					var head = rest.a;
					var tail = rest.b;
					return A2(
						$elm$core$List$cons,
						selected,
						A4(iter, selected, next, head, tail));
				} else {
					return A2($elm$core$List$cons, selected, next);
				}
			});
		if ((((bucketList.b && bucketList.a.b) && (!bucketList.a.b.b)) && bucketList.b.b) && bucketList.b.b.b) {
			var _v5 = bucketList.a;
			var first = _v5.a;
			var _v6 = bucketList.b;
			var current = _v6.a;
			var _v7 = _v6.b;
			var next = _v7.a;
			var rest = _v7.b;
			return A2(
				$elm$core$List$cons,
				first,
				A4(iter, first, current, next, rest));
		} else {
			return _List_Nil;
		}
	};
	var setup = F2(
		function (first, tail) {
			var _v1 = $elm_community$list_extra$List$Extra$unconsLast(tail);
			if (_v1.$ === 'Nothing') {
				return _List_Nil;
			} else {
				var _v2 = _v1.a;
				var last = _v2.a;
				var middle = _v2.b;
				return (input.threshold === 1) ? _List_fromArray(
					[first]) : ((input.threshold === 2) ? _List_fromArray(
					[first, last]) : execute(
					A2(
						$elm$core$List$cons,
						_List_fromArray(
							[first]),
						_Utils_ap(
							A2($RalfNorthman$elm_lttb$LTTB$splitIn, input.threshold - 2, middle),
							_List_fromArray(
								[
									_List_fromArray(
									[last])
								])))));
			}
		});
	var data = A2($elm$core$List$sortBy, x, input.data);
	if (input.threshold <= 0) {
		return _List_Nil;
	} else {
		if (_Utils_cmp(
			$elm$core$List$length(data),
			input.threshold) < 1) {
			return data;
		} else {
			if (data.b) {
				var head = data.a;
				var tail = data.b;
				return A2(setup, head, tail);
			} else {
				return _List_Nil;
			}
		}
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$downsampleDataContinuous = function (data) {
	return $RalfNorthman$elm_lttb$LTTB$downsample(
		{
			data: data,
			threshold: $data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataThreshold(data),
			xGetter: $elm$core$Tuple$first,
			yGetter: $elm$core$Tuple$second
		});
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$downsampleDataTime = function (data) {
	return $RalfNorthman$elm_lttb$LTTB$downsample(
		{
			data: data,
			threshold: $data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataThreshold(data),
			xGetter: A2(
				$elm$core$Basics$composeR,
				$elm$core$Tuple$first,
				A2($elm$core$Basics$composeR, $elm$time$Time$posixToMillis, $elm$core$Basics$toFloat)),
			yGetter: $elm$core$Tuple$second
		});
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataContinuousGroupToTableData = F2(
	function (c, data) {
		if (data.$ === 'DataTime') {
			var data_ = data.a;
			return A2(
				$elm$core$List$map,
				function (points) {
					return $elm$core$List$concat(
						A2(
							$elm$core$List$map,
							function (p) {
								return _List_fromArray(
									[
										c.tablePosixFormat(p.a),
										c.tableFloatFormat(p.b)
									]);
							},
							points));
				},
				$elm_community$list_extra$List$Extra$transpose(
					A2(
						$elm$core$List$map,
						$data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$downsampleDataTime,
						A2(
							$elm$core$List$map,
							function ($) {
								return $.points;
							},
							data_))));
		} else {
			var data_ = data.a;
			return A2(
				$elm$core$List$map,
				function (points) {
					return $elm$core$List$concat(
						A2(
							$elm$core$List$map,
							function (p) {
								return _List_fromArray(
									[
										c.tableFloatFormat(p.a),
										c.tableFloatFormat(p.b)
									]);
							},
							points));
				},
				$elm_community$list_extra$List$Extra$transpose(
					A2(
						$elm$core$List$map,
						$data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$downsampleDataContinuous,
						A2(
							$elm$core$List$map,
							function ($) {
								return $.points;
							},
							data_))));
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataContinuousGroupToTableHeadings = F2(
	function (data, content) {
		var toHeading = function (d) {
			return A2(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Table$HeadingAndSubHeadings,
				A2($elm$core$Maybe$withDefault, '', d.groupLabel),
				$data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$getLabelsFromContent(content));
		};
		var toHeadings = function (dd) {
			return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$noGroups(dd) ? A2(
				$elm$core$Basics$always,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Table$Headings(
					$data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$getLabelsFromContent(content)),
				dd) : $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ComplexHeadings(
				A2($elm$core$List$map, toHeading, dd));
		};
		if (data.$ === 'DataTime') {
			var data_ = data.a;
			return toHeadings(data_);
		} else {
			var data_ = data.a;
			return toHeadings(data_);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$tableElement = F2(
	function (config, data) {
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var tableData = A2($data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataContinuousGroupToTableData, c, data);
		var tableHeadings = A2($data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataContinuousGroupToTableHeadings, data, c.accessibilityContent);
		var table = $data_viz_lab$elm_chart_builder$Chart$Internal$Table$view(
			A2(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Table$setColumnHeadings,
				tableHeadings,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Table$generate(tableData)));
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$invisibleFigcaption(
			_List_fromArray(
				[
					function () {
					if (table.$ === 'Ok') {
						var table_ = table.a;
						return A2(
							$elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[table_]));
					} else {
						var error = table.a;
						return $elm$html$Html$text(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Table$errorToString(error));
					}
				}()
				]));
	});
var $justinmimbs$time_extra$Time$Extra$Day = {$: 'Day'};
var $justinmimbs$date$Date$Days = {$: 'Days'};
var $justinmimbs$time_extra$Time$Extra$Millisecond = {$: 'Millisecond'};
var $justinmimbs$time_extra$Time$Extra$Month = {$: 'Month'};
var $justinmimbs$date$Date$Months = {$: 'Months'};
var $justinmimbs$date$Date$RD = function (a) {
	return {$: 'RD', a: a};
};
var $justinmimbs$date$Date$isLeapYear = function (y) {
	return ((!A2($elm$core$Basics$modBy, 4, y)) && (!(!A2($elm$core$Basics$modBy, 100, y)))) || (!A2($elm$core$Basics$modBy, 400, y));
};
var $justinmimbs$date$Date$daysBeforeMonth = F2(
	function (y, m) {
		var leapDays = $justinmimbs$date$Date$isLeapYear(y) ? 1 : 0;
		switch (m.$) {
			case 'Jan':
				return 0;
			case 'Feb':
				return 31;
			case 'Mar':
				return 59 + leapDays;
			case 'Apr':
				return 90 + leapDays;
			case 'May':
				return 120 + leapDays;
			case 'Jun':
				return 151 + leapDays;
			case 'Jul':
				return 181 + leapDays;
			case 'Aug':
				return 212 + leapDays;
			case 'Sep':
				return 243 + leapDays;
			case 'Oct':
				return 273 + leapDays;
			case 'Nov':
				return 304 + leapDays;
			default:
				return 334 + leapDays;
		}
	});
var $justinmimbs$date$Date$floorDiv = F2(
	function (a, b) {
		return $elm$core$Basics$floor(a / b);
	});
var $justinmimbs$date$Date$daysBeforeYear = function (y1) {
	var y = y1 - 1;
	var leapYears = (A2($justinmimbs$date$Date$floorDiv, y, 4) - A2($justinmimbs$date$Date$floorDiv, y, 100)) + A2($justinmimbs$date$Date$floorDiv, y, 400);
	return (365 * y) + leapYears;
};
var $justinmimbs$date$Date$daysInMonth = F2(
	function (y, m) {
		switch (m.$) {
			case 'Jan':
				return 31;
			case 'Feb':
				return $justinmimbs$date$Date$isLeapYear(y) ? 29 : 28;
			case 'Mar':
				return 31;
			case 'Apr':
				return 30;
			case 'May':
				return 31;
			case 'Jun':
				return 30;
			case 'Jul':
				return 31;
			case 'Aug':
				return 31;
			case 'Sep':
				return 30;
			case 'Oct':
				return 31;
			case 'Nov':
				return 30;
			default:
				return 31;
		}
	});
var $justinmimbs$date$Date$monthToNumber = function (m) {
	switch (m.$) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var $elm$time$Time$Apr = {$: 'Apr'};
var $elm$time$Time$Aug = {$: 'Aug'};
var $elm$time$Time$Dec = {$: 'Dec'};
var $elm$time$Time$Feb = {$: 'Feb'};
var $elm$time$Time$Jan = {$: 'Jan'};
var $elm$time$Time$Jul = {$: 'Jul'};
var $elm$time$Time$Jun = {$: 'Jun'};
var $elm$time$Time$Mar = {$: 'Mar'};
var $elm$time$Time$May = {$: 'May'};
var $elm$time$Time$Nov = {$: 'Nov'};
var $elm$time$Time$Oct = {$: 'Oct'};
var $elm$time$Time$Sep = {$: 'Sep'};
var $justinmimbs$date$Date$numberToMonth = function (mn) {
	var _v0 = A2($elm$core$Basics$max, 1, mn);
	switch (_v0) {
		case 1:
			return $elm$time$Time$Jan;
		case 2:
			return $elm$time$Time$Feb;
		case 3:
			return $elm$time$Time$Mar;
		case 4:
			return $elm$time$Time$Apr;
		case 5:
			return $elm$time$Time$May;
		case 6:
			return $elm$time$Time$Jun;
		case 7:
			return $elm$time$Time$Jul;
		case 8:
			return $elm$time$Time$Aug;
		case 9:
			return $elm$time$Time$Sep;
		case 10:
			return $elm$time$Time$Oct;
		case 11:
			return $elm$time$Time$Nov;
		default:
			return $elm$time$Time$Dec;
	}
};
var $justinmimbs$date$Date$toCalendarDateHelp = F3(
	function (y, m, d) {
		toCalendarDateHelp:
		while (true) {
			var monthDays = A2($justinmimbs$date$Date$daysInMonth, y, m);
			var mn = $justinmimbs$date$Date$monthToNumber(m);
			if ((mn < 12) && (_Utils_cmp(d, monthDays) > 0)) {
				var $temp$y = y,
					$temp$m = $justinmimbs$date$Date$numberToMonth(mn + 1),
					$temp$d = d - monthDays;
				y = $temp$y;
				m = $temp$m;
				d = $temp$d;
				continue toCalendarDateHelp;
			} else {
				return {day: d, month: m, year: y};
			}
		}
	});
var $justinmimbs$date$Date$divWithRemainder = F2(
	function (a, b) {
		return _Utils_Tuple2(
			A2($justinmimbs$date$Date$floorDiv, a, b),
			A2($elm$core$Basics$modBy, b, a));
	});
var $justinmimbs$date$Date$year = function (_v0) {
	var rd = _v0.a;
	var _v1 = A2($justinmimbs$date$Date$divWithRemainder, rd, 146097);
	var n400 = _v1.a;
	var r400 = _v1.b;
	var _v2 = A2($justinmimbs$date$Date$divWithRemainder, r400, 36524);
	var n100 = _v2.a;
	var r100 = _v2.b;
	var _v3 = A2($justinmimbs$date$Date$divWithRemainder, r100, 1461);
	var n4 = _v3.a;
	var r4 = _v3.b;
	var _v4 = A2($justinmimbs$date$Date$divWithRemainder, r4, 365);
	var n1 = _v4.a;
	var r1 = _v4.b;
	var n = (!r1) ? 0 : 1;
	return ((((n400 * 400) + (n100 * 100)) + (n4 * 4)) + n1) + n;
};
var $justinmimbs$date$Date$toOrdinalDate = function (_v0) {
	var rd = _v0.a;
	var y = $justinmimbs$date$Date$year(
		$justinmimbs$date$Date$RD(rd));
	return {
		ordinalDay: rd - $justinmimbs$date$Date$daysBeforeYear(y),
		year: y
	};
};
var $justinmimbs$date$Date$toCalendarDate = function (_v0) {
	var rd = _v0.a;
	var date = $justinmimbs$date$Date$toOrdinalDate(
		$justinmimbs$date$Date$RD(rd));
	return A3($justinmimbs$date$Date$toCalendarDateHelp, date.year, $elm$time$Time$Jan, date.ordinalDay);
};
var $justinmimbs$date$Date$add = F3(
	function (unit, n, _v0) {
		var rd = _v0.a;
		switch (unit.$) {
			case 'Years':
				return A3(
					$justinmimbs$date$Date$add,
					$justinmimbs$date$Date$Months,
					12 * n,
					$justinmimbs$date$Date$RD(rd));
			case 'Months':
				var date = $justinmimbs$date$Date$toCalendarDate(
					$justinmimbs$date$Date$RD(rd));
				var wholeMonths = ((12 * (date.year - 1)) + ($justinmimbs$date$Date$monthToNumber(date.month) - 1)) + n;
				var m = $justinmimbs$date$Date$numberToMonth(
					A2($elm$core$Basics$modBy, 12, wholeMonths) + 1);
				var y = A2($justinmimbs$date$Date$floorDiv, wholeMonths, 12) + 1;
				return $justinmimbs$date$Date$RD(
					($justinmimbs$date$Date$daysBeforeYear(y) + A2($justinmimbs$date$Date$daysBeforeMonth, y, m)) + A2(
						$elm$core$Basics$min,
						date.day,
						A2($justinmimbs$date$Date$daysInMonth, y, m)));
			case 'Weeks':
				return $justinmimbs$date$Date$RD(rd + (7 * n));
			default:
				return $justinmimbs$date$Date$RD(rd + n);
		}
	});
var $justinmimbs$date$Date$fromCalendarDate = F3(
	function (y, m, d) {
		return $justinmimbs$date$Date$RD(
			($justinmimbs$date$Date$daysBeforeYear(y) + A2($justinmimbs$date$Date$daysBeforeMonth, y, m)) + A3(
				$elm$core$Basics$clamp,
				1,
				A2($justinmimbs$date$Date$daysInMonth, y, m),
				d));
	});
var $elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return $elm$core$Basics$floor(numerator / denominator);
	});
var $elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.start, posixMinutes) < 0) {
					return posixMinutes + era.offset;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var $elm$time$Time$toAdjustedMinutes = F2(
	function (_v0, time) {
		var defaultOffset = _v0.a;
		var eras = _v0.b;
		return A3(
			$elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var $elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2($elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		day: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		month: month,
		year: year + ((month <= 2) ? 1 : 0)
	};
};
var $elm$time$Time$toDay = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).day;
	});
var $elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _v0 = $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).month;
		switch (_v0) {
			case 1:
				return $elm$time$Time$Jan;
			case 2:
				return $elm$time$Time$Feb;
			case 3:
				return $elm$time$Time$Mar;
			case 4:
				return $elm$time$Time$Apr;
			case 5:
				return $elm$time$Time$May;
			case 6:
				return $elm$time$Time$Jun;
			case 7:
				return $elm$time$Time$Jul;
			case 8:
				return $elm$time$Time$Aug;
			case 9:
				return $elm$time$Time$Sep;
			case 10:
				return $elm$time$Time$Oct;
			case 11:
				return $elm$time$Time$Nov;
			default:
				return $elm$time$Time$Dec;
		}
	});
var $elm$time$Time$toYear = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).year;
	});
var $justinmimbs$date$Date$fromPosix = F2(
	function (zone, posix) {
		return A3(
			$justinmimbs$date$Date$fromCalendarDate,
			A2($elm$time$Time$toYear, zone, posix),
			A2($elm$time$Time$toMonth, zone, posix),
			A2($elm$time$Time$toDay, zone, posix));
	});
var $justinmimbs$date$Date$toRataDie = function (_v0) {
	var rd = _v0.a;
	return rd;
};
var $justinmimbs$time_extra$Time$Extra$dateToMillis = function (date) {
	var daysSinceEpoch = $justinmimbs$date$Date$toRataDie(date) - 719163;
	return daysSinceEpoch * 86400000;
};
var $justinmimbs$time_extra$Time$Extra$timeFromClock = F4(
	function (hour, minute, second, millisecond) {
		return (((hour * 3600000) + (minute * 60000)) + (second * 1000)) + millisecond;
	});
var $elm$time$Time$toHour = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			24,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60));
	});
var $elm$time$Time$toMillis = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			1000,
			$elm$time$Time$posixToMillis(time));
	});
var $elm$time$Time$toMinute = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2($elm$time$Time$toAdjustedMinutes, zone, time));
	});
var $elm$time$Time$toSecond = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				1000));
	});
var $justinmimbs$time_extra$Time$Extra$timeFromPosix = F2(
	function (zone, posix) {
		return A4(
			$justinmimbs$time_extra$Time$Extra$timeFromClock,
			A2($elm$time$Time$toHour, zone, posix),
			A2($elm$time$Time$toMinute, zone, posix),
			A2($elm$time$Time$toSecond, zone, posix),
			A2($elm$time$Time$toMillis, zone, posix));
	});
var $justinmimbs$time_extra$Time$Extra$toOffset = F2(
	function (zone, posix) {
		var millis = $elm$time$Time$posixToMillis(posix);
		var localMillis = $justinmimbs$time_extra$Time$Extra$dateToMillis(
			A2($justinmimbs$date$Date$fromPosix, zone, posix)) + A2($justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix);
		return ((localMillis - millis) / 60000) | 0;
	});
var $justinmimbs$time_extra$Time$Extra$posixFromDateTime = F3(
	function (zone, date, time) {
		var millis = $justinmimbs$time_extra$Time$Extra$dateToMillis(date) + time;
		var offset0 = A2(
			$justinmimbs$time_extra$Time$Extra$toOffset,
			zone,
			$elm$time$Time$millisToPosix(millis));
		var posix1 = $elm$time$Time$millisToPosix(millis - (offset0 * 60000));
		var offset1 = A2($justinmimbs$time_extra$Time$Extra$toOffset, zone, posix1);
		if (_Utils_eq(offset0, offset1)) {
			return posix1;
		} else {
			var posix2 = $elm$time$Time$millisToPosix(millis - (offset1 * 60000));
			var offset2 = A2($justinmimbs$time_extra$Time$Extra$toOffset, zone, posix2);
			return _Utils_eq(offset1, offset2) ? posix2 : posix1;
		}
	});
var $justinmimbs$time_extra$Time$Extra$add = F4(
	function (interval, n, zone, posix) {
		add:
		while (true) {
			switch (interval.$) {
				case 'Millisecond':
					return $elm$time$Time$millisToPosix(
						$elm$time$Time$posixToMillis(posix) + n);
				case 'Second':
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Millisecond,
						$temp$n = n * 1000,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Minute':
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Millisecond,
						$temp$n = n * 60000,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Hour':
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Millisecond,
						$temp$n = n * 3600000,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Day':
					return A3(
						$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
						zone,
						A3(
							$justinmimbs$date$Date$add,
							$justinmimbs$date$Date$Days,
							n,
							A2($justinmimbs$date$Date$fromPosix, zone, posix)),
						A2($justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix));
				case 'Month':
					return A3(
						$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
						zone,
						A3(
							$justinmimbs$date$Date$add,
							$justinmimbs$date$Date$Months,
							n,
							A2($justinmimbs$date$Date$fromPosix, zone, posix)),
						A2($justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix));
				case 'Year':
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Month,
						$temp$n = n * 12,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Quarter':
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Month,
						$temp$n = n * 3,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Week':
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Day,
						$temp$n = n * 7,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				default:
					var weekday = interval;
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Day,
						$temp$n = n * 7,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
			}
		}
	});
var $justinmimbs$date$Date$Day = {$: 'Day'};
var $justinmimbs$date$Date$Friday = {$: 'Friday'};
var $justinmimbs$date$Date$Monday = {$: 'Monday'};
var $justinmimbs$date$Date$Month = {$: 'Month'};
var $justinmimbs$date$Date$Quarter = {$: 'Quarter'};
var $justinmimbs$date$Date$Saturday = {$: 'Saturday'};
var $justinmimbs$date$Date$Sunday = {$: 'Sunday'};
var $justinmimbs$date$Date$Thursday = {$: 'Thursday'};
var $justinmimbs$date$Date$Tuesday = {$: 'Tuesday'};
var $justinmimbs$date$Date$Wednesday = {$: 'Wednesday'};
var $justinmimbs$date$Date$Week = {$: 'Week'};
var $justinmimbs$date$Date$Year = {$: 'Year'};
var $elm$time$Time$Fri = {$: 'Fri'};
var $elm$time$Time$Mon = {$: 'Mon'};
var $elm$time$Time$Sat = {$: 'Sat'};
var $elm$time$Time$Sun = {$: 'Sun'};
var $elm$time$Time$Thu = {$: 'Thu'};
var $elm$time$Time$Tue = {$: 'Tue'};
var $elm$time$Time$Wed = {$: 'Wed'};
var $justinmimbs$date$Date$weekdayNumber = function (_v0) {
	var rd = _v0.a;
	var _v1 = A2($elm$core$Basics$modBy, 7, rd);
	if (!_v1) {
		return 7;
	} else {
		var n = _v1;
		return n;
	}
};
var $justinmimbs$date$Date$weekdayToNumber = function (wd) {
	switch (wd.$) {
		case 'Mon':
			return 1;
		case 'Tue':
			return 2;
		case 'Wed':
			return 3;
		case 'Thu':
			return 4;
		case 'Fri':
			return 5;
		case 'Sat':
			return 6;
		default:
			return 7;
	}
};
var $justinmimbs$date$Date$daysSincePreviousWeekday = F2(
	function (wd, date) {
		return A2(
			$elm$core$Basics$modBy,
			7,
			($justinmimbs$date$Date$weekdayNumber(date) + 7) - $justinmimbs$date$Date$weekdayToNumber(wd));
	});
var $justinmimbs$date$Date$firstOfMonth = F2(
	function (y, m) {
		return $justinmimbs$date$Date$RD(
			($justinmimbs$date$Date$daysBeforeYear(y) + A2($justinmimbs$date$Date$daysBeforeMonth, y, m)) + 1);
	});
var $justinmimbs$date$Date$firstOfYear = function (y) {
	return $justinmimbs$date$Date$RD(
		$justinmimbs$date$Date$daysBeforeYear(y) + 1);
};
var $justinmimbs$date$Date$month = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toCalendarDate,
	function ($) {
		return $.month;
	});
var $justinmimbs$date$Date$monthToQuarter = function (m) {
	return (($justinmimbs$date$Date$monthToNumber(m) + 2) / 3) | 0;
};
var $justinmimbs$date$Date$quarter = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$month, $justinmimbs$date$Date$monthToQuarter);
var $justinmimbs$date$Date$quarterToMonth = function (q) {
	return $justinmimbs$date$Date$numberToMonth((q * 3) - 2);
};
var $justinmimbs$date$Date$floor = F2(
	function (interval, date) {
		var rd = date.a;
		switch (interval.$) {
			case 'Year':
				return $justinmimbs$date$Date$firstOfYear(
					$justinmimbs$date$Date$year(date));
			case 'Quarter':
				return A2(
					$justinmimbs$date$Date$firstOfMonth,
					$justinmimbs$date$Date$year(date),
					$justinmimbs$date$Date$quarterToMonth(
						$justinmimbs$date$Date$quarter(date)));
			case 'Month':
				return A2(
					$justinmimbs$date$Date$firstOfMonth,
					$justinmimbs$date$Date$year(date),
					$justinmimbs$date$Date$month(date));
			case 'Week':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Mon, date));
			case 'Monday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Mon, date));
			case 'Tuesday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Tue, date));
			case 'Wednesday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Wed, date));
			case 'Thursday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Thu, date));
			case 'Friday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Fri, date));
			case 'Saturday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Sat, date));
			case 'Sunday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Sun, date));
			default:
				return date;
		}
	});
var $justinmimbs$time_extra$Time$Extra$floorDate = F3(
	function (dateInterval, zone, posix) {
		return A3(
			$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
			zone,
			A2(
				$justinmimbs$date$Date$floor,
				dateInterval,
				A2($justinmimbs$date$Date$fromPosix, zone, posix)),
			0);
	});
var $justinmimbs$time_extra$Time$Extra$floor = F3(
	function (interval, zone, posix) {
		switch (interval.$) {
			case 'Millisecond':
				return posix;
			case 'Second':
				return A3(
					$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
					zone,
					A2($justinmimbs$date$Date$fromPosix, zone, posix),
					A4(
						$justinmimbs$time_extra$Time$Extra$timeFromClock,
						A2($elm$time$Time$toHour, zone, posix),
						A2($elm$time$Time$toMinute, zone, posix),
						A2($elm$time$Time$toSecond, zone, posix),
						0));
			case 'Minute':
				return A3(
					$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
					zone,
					A2($justinmimbs$date$Date$fromPosix, zone, posix),
					A4(
						$justinmimbs$time_extra$Time$Extra$timeFromClock,
						A2($elm$time$Time$toHour, zone, posix),
						A2($elm$time$Time$toMinute, zone, posix),
						0,
						0));
			case 'Hour':
				return A3(
					$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
					zone,
					A2($justinmimbs$date$Date$fromPosix, zone, posix),
					A4(
						$justinmimbs$time_extra$Time$Extra$timeFromClock,
						A2($elm$time$Time$toHour, zone, posix),
						0,
						0,
						0));
			case 'Day':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Day, zone, posix);
			case 'Month':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Month, zone, posix);
			case 'Year':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Year, zone, posix);
			case 'Quarter':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Quarter, zone, posix);
			case 'Week':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Week, zone, posix);
			case 'Monday':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Monday, zone, posix);
			case 'Tuesday':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Tuesday, zone, posix);
			case 'Wednesday':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Wednesday, zone, posix);
			case 'Thursday':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Thursday, zone, posix);
			case 'Friday':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Friday, zone, posix);
			case 'Saturday':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Saturday, zone, posix);
			default:
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Sunday, zone, posix);
		}
	});
var $justinmimbs$time_extra$Time$Extra$ceiling = F3(
	function (interval, zone, posix) {
		var floored = A3($justinmimbs$time_extra$Time$Extra$floor, interval, zone, posix);
		return _Utils_eq(floored, posix) ? posix : A4($justinmimbs$time_extra$Time$Extra$add, interval, 1, zone, floored);
	});
var $justinmimbs$time_extra$Time$Extra$Year = {$: 'Year'};
var $gampleman$elm_visualization$Scale$Time$timeLength = function (interval) {
	switch (interval.$) {
		case 'Millisecond':
			return 1;
		case 'Second':
			return 1000;
		case 'Minute':
			return 60 * 1000;
		case 'Hour':
			return (60 * 60) * 1000;
		case 'Day':
			return ((24 * 60) * 60) * 1000;
		case 'Month':
			return (((30 * 24) * 60) * 60) * 1000;
		case 'Year':
			return ((((365 * 30) * 24) * 60) * 60) * 1000;
		case 'Quarter':
			return ((((4 * 30) * 24) * 60) * 60) * 1000;
		case 'Week':
			return (((7 * 24) * 60) * 60) * 1000;
		default:
			return 0;
	}
};
var $gampleman$elm_visualization$Scale$Time$findInterval = F2(
	function (target, intervals) {
		findInterval:
		while (true) {
			if (!intervals.b) {
				return _Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Year, 1);
			} else {
				if (intervals.b.b) {
					var _v1 = intervals.a;
					var interval = _v1.a;
					var step = _v1.b;
					var _v2 = intervals.b;
					var _v3 = _v2.a;
					var interval_ = _v3.a;
					var step_ = _v3.b;
					var xs = _v2.b;
					var ratio_ = (step_ * $gampleman$elm_visualization$Scale$Time$timeLength(interval_)) / target;
					var ratio = target / (step * $gampleman$elm_visualization$Scale$Time$timeLength(interval));
					if (_Utils_cmp(ratio, ratio_) < 0) {
						return _Utils_Tuple2(interval, step);
					} else {
						var $temp$target = target,
							$temp$intervals = A2(
							$elm$core$List$cons,
							_Utils_Tuple2(interval_, step_),
							xs);
						target = $temp$target;
						intervals = $temp$intervals;
						continue findInterval;
					}
				} else {
					var x = intervals.a;
					var xs = intervals.b;
					return x;
				}
			}
		}
	});
var $justinmimbs$time_extra$Time$Extra$Hour = {$: 'Hour'};
var $justinmimbs$time_extra$Time$Extra$Minute = {$: 'Minute'};
var $justinmimbs$time_extra$Time$Extra$Second = {$: 'Second'};
var $justinmimbs$time_extra$Time$Extra$Week = {$: 'Week'};
var $gampleman$elm_visualization$Scale$Time$tickIntervals = _List_fromArray(
	[
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Second, 1),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Second, 5),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Second, 15),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Second, 30),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Minute, 1),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Minute, 5),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Minute, 15),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Minute, 30),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Hour, 1),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Hour, 3),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Hour, 6),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Hour, 12),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Day, 1),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Day, 2),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Week, 1),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Month, 1),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Month, 3),
		_Utils_Tuple2($justinmimbs$time_extra$Time$Extra$Year, 1)
	]);
var $gampleman$elm_visualization$Scale$Time$toTime = function (_v0) {
	var a = _v0.a;
	var b = _v0.b;
	return _Utils_Tuple2(
		$elm$time$Time$posixToMillis(a),
		$elm$time$Time$posixToMillis(b));
};
var $gampleman$elm_visualization$Scale$Time$nice = F3(
	function (zone, domain, count) {
		var _v0 = $gampleman$elm_visualization$Scale$Time$toTime(domain);
		var start = _v0.a;
		var end = _v0.b;
		var target = $elm$core$Basics$abs(start - end) / count;
		var _v1 = A2($gampleman$elm_visualization$Scale$Time$findInterval, target, $gampleman$elm_visualization$Scale$Time$tickIntervals);
		var interval = _v1.a;
		return _Utils_Tuple2(
			A3($justinmimbs$time_extra$Time$Extra$floor, interval, zone, domain.a),
			A3($justinmimbs$time_extra$Time$Extra$ceiling, interval, zone, domain.b));
	});
var $ryannhg$date_format$DateFormat$AmPmLowercase = {$: 'AmPmLowercase'};
var $ryannhg$date_format$DateFormat$amPmLowercase = $ryannhg$date_format$DateFormat$AmPmLowercase;
var $ryannhg$date_format$DateFormat$DayOfMonthFixed = {$: 'DayOfMonthFixed'};
var $ryannhg$date_format$DateFormat$dayOfMonthFixed = $ryannhg$date_format$DateFormat$DayOfMonthFixed;
var $ryannhg$date_format$DateFormat$Language$Language = F6(
	function (toMonthName, toMonthAbbreviation, toWeekdayName, toWeekdayAbbreviation, toAmPm, toOrdinalSuffix) {
		return {toAmPm: toAmPm, toMonthAbbreviation: toMonthAbbreviation, toMonthName: toMonthName, toOrdinalSuffix: toOrdinalSuffix, toWeekdayAbbreviation: toWeekdayAbbreviation, toWeekdayName: toWeekdayName};
	});
var $ryannhg$date_format$DateFormat$Language$toEnglishAmPm = function (hour) {
	return (hour > 11) ? 'pm' : 'am';
};
var $ryannhg$date_format$DateFormat$Language$toEnglishMonthName = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'January';
		case 'Feb':
			return 'February';
		case 'Mar':
			return 'March';
		case 'Apr':
			return 'April';
		case 'May':
			return 'May';
		case 'Jun':
			return 'June';
		case 'Jul':
			return 'July';
		case 'Aug':
			return 'August';
		case 'Sep':
			return 'September';
		case 'Oct':
			return 'October';
		case 'Nov':
			return 'November';
		default:
			return 'December';
	}
};
var $ryannhg$date_format$DateFormat$Language$toEnglishSuffix = function (num) {
	var _v0 = A2($elm$core$Basics$modBy, 100, num);
	switch (_v0) {
		case 11:
			return 'th';
		case 12:
			return 'th';
		case 13:
			return 'th';
		default:
			var _v1 = A2($elm$core$Basics$modBy, 10, num);
			switch (_v1) {
				case 1:
					return 'st';
				case 2:
					return 'nd';
				case 3:
					return 'rd';
				default:
					return 'th';
			}
	}
};
var $ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName = function (weekday) {
	switch (weekday.$) {
		case 'Mon':
			return 'Monday';
		case 'Tue':
			return 'Tuesday';
		case 'Wed':
			return 'Wednesday';
		case 'Thu':
			return 'Thursday';
		case 'Fri':
			return 'Friday';
		case 'Sat':
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var $ryannhg$date_format$DateFormat$Language$english = A6(
	$ryannhg$date_format$DateFormat$Language$Language,
	$ryannhg$date_format$DateFormat$Language$toEnglishMonthName,
	A2(
		$elm$core$Basics$composeR,
		$ryannhg$date_format$DateFormat$Language$toEnglishMonthName,
		$elm$core$String$left(3)),
	$ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName,
	A2(
		$elm$core$Basics$composeR,
		$ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName,
		$elm$core$String$left(3)),
	$ryannhg$date_format$DateFormat$Language$toEnglishAmPm,
	$ryannhg$date_format$DateFormat$Language$toEnglishSuffix);
var $ryannhg$date_format$DateFormat$amPm = F3(
	function (language, zone, posix) {
		return language.toAmPm(
			A2($elm$time$Time$toHour, zone, posix));
	});
var $ryannhg$date_format$DateFormat$dayOfMonth = $elm$time$Time$toDay;
var $ryannhg$date_format$DateFormat$days = _List_fromArray(
	[$elm$time$Time$Sun, $elm$time$Time$Mon, $elm$time$Time$Tue, $elm$time$Time$Wed, $elm$time$Time$Thu, $elm$time$Time$Fri, $elm$time$Time$Sat]);
var $elm$time$Time$toWeekday = F2(
	function (zone, time) {
		var _v0 = A2(
			$elm$core$Basics$modBy,
			7,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60 * 24));
		switch (_v0) {
			case 0:
				return $elm$time$Time$Thu;
			case 1:
				return $elm$time$Time$Fri;
			case 2:
				return $elm$time$Time$Sat;
			case 3:
				return $elm$time$Time$Sun;
			case 4:
				return $elm$time$Time$Mon;
			case 5:
				return $elm$time$Time$Tue;
			default:
				return $elm$time$Time$Wed;
		}
	});
var $ryannhg$date_format$DateFormat$dayOfWeek = F2(
	function (zone, posix) {
		return function (_v1) {
			var i = _v1.a;
			return i;
		}(
			A2(
				$elm$core$Maybe$withDefault,
				_Utils_Tuple2(0, $elm$time$Time$Sun),
				$elm$core$List$head(
					A2(
						$elm$core$List$filter,
						function (_v0) {
							var day = _v0.b;
							return _Utils_eq(
								day,
								A2($elm$time$Time$toWeekday, zone, posix));
						},
						A2(
							$elm$core$List$indexedMap,
							F2(
								function (i, day) {
									return _Utils_Tuple2(i, day);
								}),
							$ryannhg$date_format$DateFormat$days)))));
	});
var $ryannhg$date_format$DateFormat$isLeapYear = function (year_) {
	return (!(!A2($elm$core$Basics$modBy, 4, year_))) ? false : ((!(!A2($elm$core$Basics$modBy, 100, year_))) ? true : ((!(!A2($elm$core$Basics$modBy, 400, year_))) ? false : true));
};
var $ryannhg$date_format$DateFormat$daysInMonth = F2(
	function (year_, month) {
		switch (month.$) {
			case 'Jan':
				return 31;
			case 'Feb':
				return $ryannhg$date_format$DateFormat$isLeapYear(year_) ? 29 : 28;
			case 'Mar':
				return 31;
			case 'Apr':
				return 30;
			case 'May':
				return 31;
			case 'Jun':
				return 30;
			case 'Jul':
				return 31;
			case 'Aug':
				return 31;
			case 'Sep':
				return 30;
			case 'Oct':
				return 31;
			case 'Nov':
				return 30;
			default:
				return 31;
		}
	});
var $ryannhg$date_format$DateFormat$months = _List_fromArray(
	[$elm$time$Time$Jan, $elm$time$Time$Feb, $elm$time$Time$Mar, $elm$time$Time$Apr, $elm$time$Time$May, $elm$time$Time$Jun, $elm$time$Time$Jul, $elm$time$Time$Aug, $elm$time$Time$Sep, $elm$time$Time$Oct, $elm$time$Time$Nov, $elm$time$Time$Dec]);
var $ryannhg$date_format$DateFormat$monthPair = F2(
	function (zone, posix) {
		return A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, $elm$time$Time$Jan),
			$elm$core$List$head(
				A2(
					$elm$core$List$filter,
					function (_v0) {
						var i = _v0.a;
						var m = _v0.b;
						return _Utils_eq(
							m,
							A2($elm$time$Time$toMonth, zone, posix));
					},
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (a, b) {
								return _Utils_Tuple2(a, b);
							}),
						$ryannhg$date_format$DateFormat$months))));
	});
var $ryannhg$date_format$DateFormat$monthNumber_ = F2(
	function (zone, posix) {
		return 1 + function (_v0) {
			var i = _v0.a;
			var m = _v0.b;
			return i;
		}(
			A2($ryannhg$date_format$DateFormat$monthPair, zone, posix));
	});
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $ryannhg$date_format$DateFormat$dayOfYear = F2(
	function (zone, posix) {
		var monthsBeforeThisOne = A2(
			$elm$core$List$take,
			A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix) - 1,
			$ryannhg$date_format$DateFormat$months);
		var daysBeforeThisMonth = $elm$core$List$sum(
			A2(
				$elm$core$List$map,
				$ryannhg$date_format$DateFormat$daysInMonth(
					A2($elm$time$Time$toYear, zone, posix)),
				monthsBeforeThisOne));
		return daysBeforeThisMonth + A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix);
	});
var $ryannhg$date_format$DateFormat$quarter = F2(
	function (zone, posix) {
		return (A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix) / 4) | 0;
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $ryannhg$date_format$DateFormat$toFixedLength = F2(
	function (totalChars, num) {
		var numStr = $elm$core$String$fromInt(num);
		var numZerosNeeded = totalChars - $elm$core$String$length(numStr);
		var zeros = A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$map,
				function (_v0) {
					return '0';
				},
				A2($elm$core$List$range, 1, numZerosNeeded)));
		return _Utils_ap(zeros, numStr);
	});
var $elm$core$String$toLower = _String_toLower;
var $ryannhg$date_format$DateFormat$toNonMilitary = function (num) {
	return (!num) ? 12 : ((num <= 12) ? num : (num - 12));
};
var $elm$core$String$toUpper = _String_toUpper;
var $ryannhg$date_format$DateFormat$millisecondsPerYear = $elm$core$Basics$round((((1000 * 60) * 60) * 24) * 365.25);
var $ryannhg$date_format$DateFormat$firstDayOfYear = F2(
	function (zone, time) {
		return $elm$time$Time$millisToPosix(
			$ryannhg$date_format$DateFormat$millisecondsPerYear * A2($elm$time$Time$toYear, zone, time));
	});
var $ryannhg$date_format$DateFormat$weekOfYear = F2(
	function (zone, posix) {
		var firstDay = A2($ryannhg$date_format$DateFormat$firstDayOfYear, zone, posix);
		var firstDayOffset = A2($ryannhg$date_format$DateFormat$dayOfWeek, zone, firstDay);
		var daysSoFar = A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix);
		return (((daysSoFar + firstDayOffset) / 7) | 0) + 1;
	});
var $ryannhg$date_format$DateFormat$year = F2(
	function (zone, time) {
		return $elm$core$String$fromInt(
			A2($elm$time$Time$toYear, zone, time));
	});
var $ryannhg$date_format$DateFormat$piece = F4(
	function (language, zone, posix, token) {
		switch (token.$) {
			case 'MonthNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthNameAbbreviated':
				return language.toMonthAbbreviation(
					A2($elm$time$Time$toMonth, zone, posix));
			case 'MonthNameFull':
				return language.toMonthName(
					A2($elm$time$Time$toMonth, zone, posix));
			case 'QuarterNumber':
				return $elm$core$String$fromInt(
					1 + A2($ryannhg$date_format$DateFormat$quarter, zone, posix));
			case 'QuarterSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					1 + A2($ryannhg$date_format$DateFormat$quarter, zone, posix));
			case 'DayOfMonthNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfMonthSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfMonthFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfYearNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfYearSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfYearFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					3,
					A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfWeekNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$dayOfWeek, zone, posix));
			case 'DayOfWeekSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$dayOfWeek, zone, posix));
			case 'DayOfWeekNameAbbreviated':
				return language.toWeekdayAbbreviation(
					A2($elm$time$Time$toWeekday, zone, posix));
			case 'DayOfWeekNameFull':
				return language.toWeekdayName(
					A2($elm$time$Time$toWeekday, zone, posix));
			case 'WeekOfYearNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'WeekOfYearSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'WeekOfYearFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'YearNumberLastTwo':
				return A2(
					$elm$core$String$right,
					2,
					A2($ryannhg$date_format$DateFormat$year, zone, posix));
			case 'YearNumber':
				return A2($ryannhg$date_format$DateFormat$year, zone, posix);
			case 'AmPmUppercase':
				return $elm$core$String$toUpper(
					A3($ryannhg$date_format$DateFormat$amPm, language, zone, posix));
			case 'AmPmLowercase':
				return $elm$core$String$toLower(
					A3($ryannhg$date_format$DateFormat$amPm, language, zone, posix));
			case 'HourMilitaryNumber':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toHour, zone, posix));
			case 'HourMilitaryFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($elm$time$Time$toHour, zone, posix));
			case 'HourNumber':
				return $elm$core$String$fromInt(
					$ryannhg$date_format$DateFormat$toNonMilitary(
						A2($elm$time$Time$toHour, zone, posix)));
			case 'HourFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					$ryannhg$date_format$DateFormat$toNonMilitary(
						A2($elm$time$Time$toHour, zone, posix)));
			case 'HourMilitaryFromOneNumber':
				return $elm$core$String$fromInt(
					1 + A2($elm$time$Time$toHour, zone, posix));
			case 'HourMilitaryFromOneFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					1 + A2($elm$time$Time$toHour, zone, posix));
			case 'MinuteNumber':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toMinute, zone, posix));
			case 'MinuteFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($elm$time$Time$toMinute, zone, posix));
			case 'SecondNumber':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toSecond, zone, posix));
			case 'SecondFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($elm$time$Time$toSecond, zone, posix));
			case 'MillisecondNumber':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toMillis, zone, posix));
			case 'MillisecondFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					3,
					A2($elm$time$Time$toMillis, zone, posix));
			default:
				var string = token.a;
				return string;
		}
	});
var $ryannhg$date_format$DateFormat$formatWithLanguage = F4(
	function (language, tokens, zone, time) {
		return A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$map,
				A3($ryannhg$date_format$DateFormat$piece, language, zone, time),
				tokens));
	});
var $ryannhg$date_format$DateFormat$format = $ryannhg$date_format$DateFormat$formatWithLanguage($ryannhg$date_format$DateFormat$Language$english);
var $ryannhg$date_format$DateFormat$HourFixed = {$: 'HourFixed'};
var $ryannhg$date_format$DateFormat$hourFixed = $ryannhg$date_format$DateFormat$HourFixed;
var $ryannhg$date_format$DateFormat$MillisecondFixed = {$: 'MillisecondFixed'};
var $ryannhg$date_format$DateFormat$millisecondFixed = $ryannhg$date_format$DateFormat$MillisecondFixed;
var $ryannhg$date_format$DateFormat$MinuteFixed = {$: 'MinuteFixed'};
var $ryannhg$date_format$DateFormat$minuteFixed = $ryannhg$date_format$DateFormat$MinuteFixed;
var $ryannhg$date_format$DateFormat$MonthNameAbbreviated = {$: 'MonthNameAbbreviated'};
var $ryannhg$date_format$DateFormat$monthNameAbbreviated = $ryannhg$date_format$DateFormat$MonthNameAbbreviated;
var $ryannhg$date_format$DateFormat$MonthNameFull = {$: 'MonthNameFull'};
var $ryannhg$date_format$DateFormat$monthNameFull = $ryannhg$date_format$DateFormat$MonthNameFull;
var $ryannhg$date_format$DateFormat$SecondFixed = {$: 'SecondFixed'};
var $ryannhg$date_format$DateFormat$secondFixed = $ryannhg$date_format$DateFormat$SecondFixed;
var $ryannhg$date_format$DateFormat$Text = function (a) {
	return {$: 'Text', a: a};
};
var $ryannhg$date_format$DateFormat$text = $ryannhg$date_format$DateFormat$Text;
var $ryannhg$date_format$DateFormat$YearNumber = {$: 'YearNumber'};
var $ryannhg$date_format$DateFormat$yearNumber = $ryannhg$date_format$DateFormat$YearNumber;
var $gampleman$elm_visualization$Scale$Time$tickFormat = F4(
	function (zone, _v0, _v1, date) {
		var time = $elm$time$Time$posixToMillis(date);
		var significant = function (interval) {
			return _Utils_cmp(
				$elm$time$Time$posixToMillis(
					A3($justinmimbs$time_extra$Time$Extra$floor, interval, zone, date)),
				time) < 0;
		};
		var format = significant($justinmimbs$time_extra$Time$Extra$Second) ? _List_fromArray(
			[
				$ryannhg$date_format$DateFormat$text('.'),
				$ryannhg$date_format$DateFormat$millisecondFixed
			]) : (significant($justinmimbs$time_extra$Time$Extra$Minute) ? _List_fromArray(
			[
				$ryannhg$date_format$DateFormat$text(':'),
				$ryannhg$date_format$DateFormat$secondFixed
			]) : (significant($justinmimbs$time_extra$Time$Extra$Hour) ? _List_fromArray(
			[
				$ryannhg$date_format$DateFormat$hourFixed,
				$ryannhg$date_format$DateFormat$text(':'),
				$ryannhg$date_format$DateFormat$minuteFixed
			]) : (significant($justinmimbs$time_extra$Time$Extra$Day) ? _List_fromArray(
			[
				$ryannhg$date_format$DateFormat$hourFixed,
				$ryannhg$date_format$DateFormat$text(' '),
				$ryannhg$date_format$DateFormat$amPmLowercase
			]) : (significant($justinmimbs$time_extra$Time$Extra$Month) ? _List_fromArray(
			[
				$ryannhg$date_format$DateFormat$dayOfMonthFixed,
				$ryannhg$date_format$DateFormat$text(' '),
				$ryannhg$date_format$DateFormat$monthNameAbbreviated
			]) : (significant($justinmimbs$time_extra$Time$Extra$Year) ? _List_fromArray(
			[$ryannhg$date_format$DateFormat$monthNameFull]) : _List_fromArray(
			[$ryannhg$date_format$DateFormat$yearNumber]))))));
		return A3($ryannhg$date_format$DateFormat$format, format, zone, date);
	});
var $justinmimbs$time_extra$Time$Extra$rangeHelp = F6(
	function (interval, step, zone, until, revList, current) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(
				$elm$time$Time$posixToMillis(current),
				$elm$time$Time$posixToMillis(until)) < 0) {
				var $temp$interval = interval,
					$temp$step = step,
					$temp$zone = zone,
					$temp$until = until,
					$temp$revList = A2($elm$core$List$cons, current, revList),
					$temp$current = A4($justinmimbs$time_extra$Time$Extra$add, interval, step, zone, current);
				interval = $temp$interval;
				step = $temp$step;
				zone = $temp$zone;
				until = $temp$until;
				revList = $temp$revList;
				current = $temp$current;
				continue rangeHelp;
			} else {
				return $elm$core$List$reverse(revList);
			}
		}
	});
var $justinmimbs$time_extra$Time$Extra$range = F5(
	function (interval, step, zone, start, until) {
		return A6(
			$justinmimbs$time_extra$Time$Extra$rangeHelp,
			interval,
			A2($elm$core$Basics$max, 1, step),
			zone,
			until,
			_List_Nil,
			A3($justinmimbs$time_extra$Time$Extra$ceiling, interval, zone, start));
	});
var $gampleman$elm_visualization$Scale$Time$ticks = F3(
	function (zone, domain, count) {
		var _v0 = $gampleman$elm_visualization$Scale$Time$toTime(domain);
		var start = _v0.a;
		var end = _v0.b;
		var target = $elm$core$Basics$abs(start - end) / count;
		var _v1 = A2($gampleman$elm_visualization$Scale$Time$findInterval, target, $gampleman$elm_visualization$Scale$Time$tickIntervals);
		var interval = _v1.a;
		var step = _v1.b;
		return A5(
			$justinmimbs$time_extra$Time$Extra$range,
			interval,
			$elm$core$Basics$round(step),
			zone,
			domain.a,
			domain.b);
	});
var $gampleman$elm_visualization$Scale$Time$scale = F3(
	function (zone, range_, domain_) {
		return {
			convert: A2(
				$gampleman$elm_visualization$Scale$Continuous$convertTransform,
				A2($elm$core$Basics$composeR, $elm$time$Time$posixToMillis, $elm$core$Basics$toFloat),
				$gampleman$elm_visualization$Interpolation$float),
			domain: domain_,
			invert: A2(
				$gampleman$elm_visualization$Scale$Continuous$invertTransform,
				A2($elm$core$Basics$composeR, $elm$time$Time$posixToMillis, $elm$core$Basics$toFloat),
				A2($elm$core$Basics$composeR, $elm$core$Basics$round, $elm$time$Time$millisToPosix)),
			nice: $gampleman$elm_visualization$Scale$Time$nice(zone),
			range: range_,
			rangeExtent: F2(
				function (_v0, r) {
					return r;
				}),
			tickFormat: $gampleman$elm_visualization$Scale$Time$tickFormat(zone),
			ticks: $gampleman$elm_visualization$Scale$Time$ticks(zone)
		};
	});
var $gampleman$elm_visualization$Scale$time = F3(
	function (zone, range_, domain_) {
		return $gampleman$elm_visualization$Scale$Scale(
			A3($gampleman$elm_visualization$Scale$Time$scale, zone, range_, domain_));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$timeDomainToContinuousDomain = function (timeDomain) {
	return function (_v0) {
		var x = _v0.x;
		var y = _v0.y;
		return {
			x: A2(
				$elm$core$Maybe$map,
				function (_v1) {
					var a = _v1.a;
					var b = _v1.b;
					return _Utils_Tuple2(
						$elm$time$Time$posixToMillis(a),
						$elm$time$Time$posixToMillis(b));
				},
				x),
			y: y
		};
	}(timeDomain);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$adjustDomainToLogScale = function (_v0) {
	var a = _v0.a;
	var b = _v0.b;
	return (!a) ? _Utils_Tuple2(1, b) : ((!b) ? _Utils_Tuple2(a, -1) : _Utils_Tuple2(a, b));
};
var $gampleman$elm_visualization$Scale$Log$exp = function (n) {
	return A2($elm$core$Basics$pow, $elm$core$Basics$e, n);
};
var $gampleman$elm_visualization$Scale$Log$log = $elm$core$Basics$logBase($elm$core$Basics$e);
var $gampleman$elm_visualization$Scale$Log$nice = F3(
	function (base, _v0, _v1) {
		var start = _v0.a;
		var stop = _v0.b;
		var f = A2(
			$elm$core$Basics$composeL,
			A2(
				$elm$core$Basics$composeL,
				A2(
					$elm$core$Basics$composeL,
					function (a) {
						return A2($elm$core$Basics$pow, a, base);
					},
					$elm$core$Basics$toFloat),
				$elm$core$Basics$floor),
			$elm$core$Basics$logBase(base));
		var c = A2(
			$elm$core$Basics$composeL,
			A2(
				$elm$core$Basics$composeL,
				A2(
					$elm$core$Basics$composeL,
					function (a) {
						return A2($elm$core$Basics$pow, a, base);
					},
					$elm$core$Basics$toFloat),
				$elm$core$Basics$ceiling),
			$elm$core$Basics$logBase(base));
		return _Utils_Tuple2(
			f(start),
			c(stop));
	});
var $gampleman$elm_visualization$Scale$Log$reflect = function (f) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Basics$negate,
		A2($elm$core$Basics$composeR, f, $elm$core$Basics$negate));
};
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $gampleman$elm_visualization$Scale$Log$formatExponential = function (num) {
	var parts = A2(
		$elm$core$String$split,
		'.',
		$elm$core$String$fromFloat(num));
	var helper = F3(
		function (level, digits, decimals) {
			helper:
			while (true) {
				var _v0 = _Utils_Tuple2(digits, decimals);
				if (_v0.a.b) {
					if (!_v0.a.b.b) {
						if (('0' === _v0.a.a.valueOf()) && _v0.b.b) {
							var _v1 = _v0.a;
							var _v2 = _v0.b;
							var x = _v2.a;
							var xs = _v2.b;
							var $temp$level = level - 1,
								$temp$digits = _List_fromArray(
								[x]),
								$temp$decimals = xs;
							level = $temp$level;
							digits = $temp$digits;
							decimals = $temp$decimals;
							continue helper;
						} else {
							var _v3 = _v0.a;
							var dig = _v3.a;
							var dec = _v0.b;
							return _Utils_ap(
								A2($elm$core$String$cons, dig, 'e'),
								_Utils_ap(
									(level >= 0) ? '+' : '-',
									$elm$core$String$fromInt(
										$elm$core$Basics$abs(level))));
						}
					} else {
						var _v4 = _v0.a;
						var x = _v4.a;
						var xs = _v4.b;
						var dec = _v0.b;
						var $temp$level = level + 1,
							$temp$digits = xs,
							$temp$decimals = A2($elm$core$List$cons, x, dec);
						level = $temp$level;
						digits = $temp$digits;
						decimals = $temp$decimals;
						continue helper;
					}
				} else {
					if (_v0.b.b) {
						var _v5 = _v0.b;
						var x = _v5.a;
						var xs = _v5.b;
						var $temp$level = level - 1,
							$temp$digits = _List_fromArray(
							[x]),
							$temp$decimals = xs;
						level = $temp$level;
						digits = $temp$digits;
						decimals = $temp$decimals;
						continue helper;
					} else {
						return '';
					}
				}
			}
		});
	var _v6 = function () {
		_v7$2:
		while (true) {
			if (parts.b) {
				if (parts.b.b) {
					if (!parts.b.b.b) {
						var a = parts.a;
						var _v8 = parts.b;
						var b = _v8.a;
						return _Utils_Tuple2(a, b);
					} else {
						break _v7$2;
					}
				} else {
					var a = parts.a;
					return _Utils_Tuple2(a, '0');
				}
			} else {
				break _v7$2;
			}
		}
		return _Utils_Tuple2('0', '0');
	}();
	var digits0 = _v6.a;
	var decimals0 = _v6.b;
	return A3(
		helper,
		0,
		$elm$core$List$reverse(
			$elm$core$String$toList(digits0)),
		$elm$core$String$toList(decimals0));
};
var $gampleman$elm_visualization$Scale$Log$formatFixed = F2(
	function (precision, value) {
		var floored = $elm$core$Basics$floor(value);
		var digits = (!floored) ? 0 : $elm$core$String$length(
			$elm$core$String$fromInt(floored));
		var power = A2($elm$core$Basics$pow, 10, precision - digits);
		return $elm$core$String$fromFloat(
			$elm$core$Basics$round(value * power) / power);
	});
var $gampleman$elm_visualization$Scale$Log$makeLogs = F2(
	function (start, base) {
		return (start < 0) ? function (x) {
			return -A2($elm$core$Basics$logBase, base, -x);
		} : $elm$core$Basics$logBase(base);
	});
var $gampleman$elm_visualization$Scale$Log$makePows = F2(
	function (start, base) {
		return (start < 0) ? function (x) {
			return -A2($elm$core$Basics$pow, base, -x);
		} : function (x) {
			return A2($elm$core$Basics$pow, base, x);
		};
	});
var $gampleman$elm_visualization$Scale$Log$ticks = F3(
	function (base, _v0, count) {
		var domStart = _v0.a;
		var domEnd = _v0.b;
		var n = count;
		var _v1 = (_Utils_cmp(domStart, domEnd) < 1) ? _Utils_Tuple3(domStart, domEnd, $elm$core$Basics$identity) : _Utils_Tuple3(domEnd, domStart, $elm$core$List$reverse);
		var start = _v1.a;
		var end = _v1.b;
		var reverse = _v1.c;
		var _v2 = (start < 0) ? _Utils_Tuple2(
			-A2($elm$core$Basics$logBase, base, -start),
			-A2($elm$core$Basics$logBase, base, -end)) : _Utils_Tuple2(
			A2($elm$core$Basics$logBase, base, start),
			A2($elm$core$Basics$logBase, base, end));
		var topi = _v2.a;
		var topj = _v2.b;
		var pows = A2($gampleman$elm_visualization$Scale$Log$makePows, start, base);
		var negativeHelper = F3(
			function (i, j, k) {
				negativeHelper:
				while (true) {
					var p = pows(i);
					var t = p * k;
					if (_Utils_cmp(i, j) < 0) {
						if (k >= 1) {
							if (_Utils_cmp(t, start) < 0) {
								var $temp$i = i,
									$temp$j = j,
									$temp$k = k - 1;
								i = $temp$i;
								j = $temp$j;
								k = $temp$k;
								continue negativeHelper;
							} else {
								if (_Utils_cmp(t, end) > 0) {
									var $temp$i = i + 1,
										$temp$j = j,
										$temp$k = base - 1;
									i = $temp$i;
									j = $temp$j;
									k = $temp$k;
									continue negativeHelper;
								} else {
									return A2(
										$elm$core$List$cons,
										t,
										A3(negativeHelper, i, j, k - 1));
								}
							}
						} else {
							var $temp$i = i + 1,
								$temp$j = j,
								$temp$k = base - 1;
							i = $temp$i;
							j = $temp$j;
							k = $temp$k;
							continue negativeHelper;
						}
					} else {
						return _List_Nil;
					}
				}
			});
		var positiveHelper = F3(
			function (i, j, k) {
				positiveHelper:
				while (true) {
					var p = pows(i);
					var t = p * k;
					if (_Utils_cmp(i, j) < 0) {
						if (_Utils_cmp(k, base) < 0) {
							if (_Utils_cmp(t, start) < 0) {
								var $temp$i = i,
									$temp$j = j,
									$temp$k = k + 1;
								i = $temp$i;
								j = $temp$j;
								k = $temp$k;
								continue positiveHelper;
							} else {
								if (_Utils_cmp(t, end) > 0) {
									var $temp$i = i + 1,
										$temp$j = j,
										$temp$k = 1;
									i = $temp$i;
									j = $temp$j;
									k = $temp$k;
									continue positiveHelper;
								} else {
									return A2(
										$elm$core$List$cons,
										t,
										A3(positiveHelper, i, j, k + 1));
								}
							}
						} else {
							var $temp$i = i + 1,
								$temp$j = j,
								$temp$k = 1;
							i = $temp$i;
							j = $temp$j;
							k = $temp$k;
							continue positiveHelper;
						}
					} else {
						return _List_Nil;
					}
				}
			});
		return (_Utils_eq(
			$elm$core$Basics$round(base),
			base) && (_Utils_cmp(topj - topi, n) < 0)) ? ((start > 0) ? reverse(
			A3(
				positiveHelper,
				$elm$core$Basics$round(topi) - 1,
				$elm$core$Basics$round(topj) + 1,
				1)) : reverse(
			A3(
				negativeHelper,
				$elm$core$Basics$round(topi) - 1,
				$elm$core$Basics$round(topj) + 1,
				base - 1))) : reverse(
			A2(
				$elm$core$List$map,
				function (a) {
					return pows(a);
				},
				A3(
					$gampleman$elm_visualization$Statistics$ticks,
					topi,
					topj,
					$elm$core$Basics$round(
						A2($elm$core$Basics$min, topj - topi, n)))));
	});
var $gampleman$elm_visualization$Scale$Log$tickFormat = F3(
	function (base, _v0, count) {
		var start = _v0.a;
		var end = _v0.b;
		var pows = A2($gampleman$elm_visualization$Scale$Log$makePows, start, base);
		var logs = A2($gampleman$elm_visualization$Scale$Log$makeLogs, start, base);
		var k = A2(
			$elm$core$Basics$max,
			1,
			(base * count) / $elm$core$List$length(
				A3(
					$gampleman$elm_visualization$Scale$Log$ticks,
					base,
					_Utils_Tuple2(start, end),
					10)));
		return function (d) {
			var i = d / pows(
				$elm$core$Basics$round(
					logs(d)));
			var p = (_Utils_cmp(i * base, base - 0.5) < 0) ? (i * base) : i;
			return (_Utils_cmp(p, k) < 1) ? ((base === 10) ? $gampleman$elm_visualization$Scale$Log$formatExponential(d) : A2($gampleman$elm_visualization$Scale$Log$formatFixed, 12, d)) : '';
		};
	});
var $gampleman$elm_visualization$Scale$Log$scale = F3(
	function (base, range_, domain_) {
		var _v0 = (domain_.a < 0) ? _Utils_Tuple2(
			$gampleman$elm_visualization$Scale$Log$reflect($gampleman$elm_visualization$Scale$Log$log),
			$gampleman$elm_visualization$Scale$Log$reflect($gampleman$elm_visualization$Scale$Log$exp)) : _Utils_Tuple2($gampleman$elm_visualization$Scale$Log$log, $gampleman$elm_visualization$Scale$Log$exp);
		var transform = _v0.a;
		var untransform = _v0.b;
		return {
			convert: A2($gampleman$elm_visualization$Scale$Continuous$convertTransform, transform, $gampleman$elm_visualization$Interpolation$float),
			domain: domain_,
			invert: A2($gampleman$elm_visualization$Scale$Continuous$invertTransform, transform, untransform),
			nice: $gampleman$elm_visualization$Scale$Log$nice(base),
			range: range_,
			rangeExtent: F2(
				function (_v1, r) {
					return r;
				}),
			tickFormat: $gampleman$elm_visualization$Scale$Log$tickFormat(base),
			ticks: $gampleman$elm_visualization$Scale$Log$ticks(base)
		};
	});
var $gampleman$elm_visualization$Scale$log = F3(
	function (base, range_, domain_) {
		return $gampleman$elm_visualization$Scale$Scale(
			A3($gampleman$elm_visualization$Scale$Log$scale, base, range_, domain_));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toContinousScale = F3(
	function (range, domain, scale) {
		if (scale.$ === 'LogScale') {
			var base = scale.a;
			return A3(
				$gampleman$elm_visualization$Scale$log,
				base,
				range,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$adjustDomainToLogScale(domain));
		} else {
			return A2($gampleman$elm_visualization$Scale$linear, range, domain);
		}
	});
var $elm_community$typed_svg$TypedSvg$Types$Opacity = function (a) {
	return {$: 'Opacity', a: a};
};
var $elm_community$typed_svg$TypedSvg$Types$Paint = function (a) {
	return {$: 'Paint', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$annotationClassName = 'ecb-annotation';
var $avh4$elm_color$Color$black = A4($avh4$elm_color$Color$RgbaSpace, 0 / 255, 0 / 255, 0 / 255, 1.0);
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getAnnotationVLine = function (annotations) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$filterMap,
			function (annotation) {
				if (annotation.$ === 'AnnotationXBarHint') {
					var p = annotation.a;
					return $elm$core$Maybe$Just(p);
				} else {
					return $elm$core$Maybe$Nothing;
				}
			},
			annotations));
};
var $elm_community$typed_svg$TypedSvg$line = $elm_community$typed_svg$TypedSvg$Core$node('line');
var $elm_community$typed_svg$TypedSvg$TypesToStrings$opacityToString = function (opacity) {
	if (opacity.$ === 'Opacity') {
		var n = opacity.a;
		return $elm$core$String$fromFloat(n);
	} else {
		return 'inherit';
	}
};
var $elm_community$typed_svg$TypedSvg$Attributes$opacity = A2(
	$elm$core$Basics$composeL,
	$elm_community$typed_svg$TypedSvg$Core$attribute('opacity'),
	$elm_community$typed_svg$TypedSvg$TypesToStrings$opacityToString);
var $elm_community$typed_svg$TypedSvg$TypesToStrings$paintToString = function (paint) {
	switch (paint.$) {
		case 'Paint':
			var color = paint.a;
			return $avh4$elm_color$Color$toCssString(color);
		case 'Reference':
			var string = paint.a;
			return $elm$core$String$concat(
				_List_fromArray(
					['url(#', string, ')']));
		case 'ContextFill':
			return 'context-fill';
		case 'ContextStroke':
			return 'context-stroke';
		default:
			return 'none';
	}
};
var $elm_community$typed_svg$TypedSvg$Attributes$stroke = A2(
	$elm$core$Basics$composeL,
	$elm_community$typed_svg$TypedSvg$Core$attribute('stroke'),
	$elm_community$typed_svg$TypedSvg$TypesToStrings$paintToString);
var $elm_community$typed_svg$TypedSvg$Attributes$strokeWidth = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'stroke-width',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$strokeWidth = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$strokeWidth(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$vLineAnnotationClassName = 'ecb-annotation-v-line';
var $elm_community$typed_svg$TypedSvg$Attributes$x1 = function (position) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'x1',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(position));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$x1 = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$x1(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $elm_community$typed_svg$TypedSvg$Attributes$x2 = function (position) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'x2',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(position));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$x2 = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$x2(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $elm_community$typed_svg$TypedSvg$Attributes$y1 = function (position) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'y1',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(position));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$y1 = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$y1(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $elm_community$typed_svg$TypedSvg$Attributes$y2 = function (position) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'y2',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(position));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$y2 = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$y2(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$vLineAnnotation = function (c) {
	var style = A2(
		$elm$core$Maybe$withDefault,
		_List_Nil,
		A2(
			$elm$core$Maybe$map,
			$elm$core$Tuple$second,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getAnnotationVLine(c.annotations)));
	var annotation = A2(
		$elm$core$Maybe$map,
		$elm$core$Tuple$first,
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getAnnotationVLine(c.annotations));
	if (annotation.$ === 'Just') {
		var a = annotation.a;
		return _List_fromArray(
			[
				A2(
				$elm_community$typed_svg$TypedSvg$g,
				_List_fromArray(
					[
						$elm_community$typed_svg$TypedSvg$Attributes$transform(
						_List_fromArray(
							[
								A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$topLeftTranslate, c.margin, c.padding)
							])),
						$elm_community$typed_svg$TypedSvg$Attributes$class(
						_List_fromArray(
							[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$annotationClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$vLineAnnotationClassName]))
					]),
				_List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$line,
						A2(
							$elm$core$List$cons,
							$elm_community$typed_svg$TypedSvg$Attributes$style(
								A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles, style, '')),
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$InPx$x1(a.xPosition),
									$elm_community$typed_svg$TypedSvg$Attributes$InPx$x2(a.xPosition),
									$elm_community$typed_svg$TypedSvg$Attributes$InPx$y1(0),
									$elm_community$typed_svg$TypedSvg$Attributes$InPx$y2(c.height),
									$elm_community$typed_svg$TypedSvg$Attributes$InPx$strokeWidth(1),
									$elm_community$typed_svg$TypedSvg$Attributes$opacity(
									$elm_community$typed_svg$TypedSvg$Types$Opacity(0.7)),
									$elm_community$typed_svg$TypedSvg$Attributes$stroke(
									$elm_community$typed_svg$TypedSvg$Types$Paint($avh4$elm_color$Color$black))
								])),
						_List_Nil)
					]))
			]);
	} else {
		return _List_Nil;
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$renderLineGrouped = function (_v0) {
	var data = _v0.a;
	var config = _v0.b;
	var timeData = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$dataContinuousGroupToDataTime(data);
	var timeDomain = A3(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainTimeFromData,
		$elm$core$Maybe$Nothing,
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainTime(config),
		timeData);
	var continuousData = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$dataContinuousGroupToDataContinuous(data);
	var continuousDomain = function () {
		if (data.$ === 'DataTime') {
			return $data_viz_lab$elm_chart_builder$Chart$Internal$Line$timeDomainToContinuousDomain(timeDomain);
		} else {
			return A3(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainContinuousFromData,
				$elm$core$Maybe$Nothing,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainContinuous(config),
				continuousData);
		}
	}();
	var classNames = $elm$html$Html$Attributes$classList(
		_List_fromArray(
			[
				_Utils_Tuple2($data_viz_lab$elm_chart_builder$Chart$Internal$Constants$rootClassName, true),
				_Utils_Tuple2($data_viz_lab$elm_chart_builder$Chart$Internal$Constants$lineClassName, true)
			]));
	var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
	var h = c.height;
	var yRange = _Utils_Tuple2(h, 0);
	var m = c.margin;
	var p = c.padding;
	var outerH = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$outerHeight, h, m, p);
	var w = c.width;
	var outerW = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$outerWidth, w, m, p);
	var xRange = _Utils_Tuple2(0, w);
	var xContinuousScale = A2(
		$gampleman$elm_visualization$Scale$linear,
		xRange,
		A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, 0),
			continuousDomain.x));
	var xTimeScale = function () {
		if (data.$ === 'DataTime') {
			return $elm$core$Maybe$Just(
				A3(
					$gampleman$elm_visualization$Scale$time,
					c.zone,
					xRange,
					A2(
						$elm$core$Maybe$withDefault,
						_Utils_Tuple2(
							$elm$time$Time$millisToPosix(0),
							$elm$time$Time$millisToPosix(0)),
						timeDomain.x)));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	}();
	var yScale = A3(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$toContinousScale,
		yRange,
		A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, 0),
			continuousDomain.y),
		c.yScale);
	var events = $elm$core$List$concat(
		A2(
			$elm$core$List$map,
			function (e) {
				if (e.$ === 'HoverOne') {
					var f = e.a;
					return A4(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Event$hoverOne,
						c,
						continuousData,
						_Utils_Tuple2(xContinuousScale, yScale),
						f);
				} else {
					var f = e.a;
					return A4(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Event$hoverAll,
						c,
						continuousData,
						_Utils_Tuple2(xContinuousScale, yScale),
						f);
				}
			},
			c.events));
	var _v1 = $elm$core$List$unzip(
		A2(
			$elm$core$List$map,
			function (d) {
				var points = A2($elm$core$List$sortBy, $elm$core$Tuple$first, d.points);
				return _Utils_Tuple2(
					_Utils_update(
						d,
						{points: points}),
					points);
			},
			continuousData));
	var sortedContinuousData = _v1.a;
	var svgEl = A2(
		$elm_community$typed_svg$TypedSvg$svg,
		_Utils_ap(
			_List_fromArray(
				[
					A4($elm_community$typed_svg$TypedSvg$Attributes$viewBox, 0, 0, outerW, outerH),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(outerW),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(outerH),
					$data_viz_lab$elm_chart_builder$Chart$Internal$Type$role('img')
				]),
			_Utils_ap(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledbyContent(c),
				events)),
		_Utils_ap(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Line$vLineAnnotation(c),
			_Utils_ap(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Line$symbolElements(config),
				_Utils_ap(
					$data_viz_lab$elm_chart_builder$Chart$Internal$Type$descAndTitle(c),
					_Utils_ap(
						A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$continuousYAxis, c, yScale),
						_Utils_ap(
							A3(
								$data_viz_lab$elm_chart_builder$Chart$Internal$Line$continuousOrTimeAxisGenerator,
								xTimeScale,
								xContinuousScale,
								_Utils_Tuple2(data, config)),
							A4($data_viz_lab$elm_chart_builder$Chart$Internal$Line$drawContinuousLine, config, xContinuousScale, yScale, sortedContinuousData)))))));
	var _v2 = c.accessibilityContent;
	if (_v2.$ === 'AccessibilityNone') {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[classNames]),
			_List_fromArray(
				[svgEl]));
	} else {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[classNames]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$figure,
					_List_Nil,
					_List_fromArray(
						[
							svgEl,
							A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$tableElement, config, data)
						]))
				]));
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$dataContinuousGroupToDataContinuousStacked = function (data) {
	return A2(
		$elm$core$List$indexedMap,
		F2(
			function (i, d) {
				return _Utils_Tuple2(
					A2(
						$elm$core$Maybe$withDefault,
						$elm$core$String$fromInt(i),
						d.groupLabel),
					A2($elm$core$List$map, $elm$core$Tuple$second, d.points));
			}),
		data);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$areaGeneratorStacked = F3(
	function (xScale, yScale, pointWithStack) {
		var xCoord = A2($gampleman$elm_visualization$Scale$convert, xScale, pointWithStack.b.a);
		var _v0 = pointWithStack.a;
		var y1 = _v0.a;
		var y2 = _v0.b;
		var _v1 = (_Utils_cmp(y1, y2) < 0) ? _Utils_Tuple2(y1, y2) : _Utils_Tuple2(y2, y1);
		var low = _v1.a;
		var high = _v1.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				_Utils_Tuple2(
					xCoord,
					A2($gampleman$elm_visualization$Scale$convert, yScale, low)),
				_Utils_Tuple2(
					xCoord,
					A2($gampleman$elm_visualization$Scale$convert, yScale, high))));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$areaLabel = F5(
	function (config, xScale, yScale, _v0, item) {
		var _v1 = item.groupLabel;
		if (_v1.$ === 'Just') {
			var label = _v1.a;
			var conf = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
			var _v2 = A2(
				$elm$core$Maybe$withDefault,
				_Utils_Tuple2(0, 0),
				A2(
					$elm$core$Maybe$map,
					function (_v3) {
						var stack = _v3.a;
						var _v4 = _v3.b;
						var x = _v4.a;
						return _Utils_Tuple2(x, ((stack.b - stack.a) / 2) + stack.a);
					},
					$elm$core$List$head(
						$elm$core$List$reverse(item.points))));
			var xVal = _v2.a;
			var yVal = _v2.b;
			var xPos = $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$floorFloat(
				A2($gampleman$elm_visualization$Scale$convert, xScale, xVal));
			var yPos = $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$floorFloat(
				A2($gampleman$elm_visualization$Scale$convert, yScale, yVal));
			var txt = $elm_community$typed_svg$TypedSvg$text_(
				_List_fromArray(
					[
						$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(yPos),
						$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(xPos + $data_viz_lab$elm_chart_builder$Chart$Internal$Line$labelGap),
						$elm_community$typed_svg$TypedSvg$Attributes$textAnchor($elm_community$typed_svg$TypedSvg$Types$AnchorStart),
						$elm_community$typed_svg$TypedSvg$Attributes$dominantBaseline($elm_community$typed_svg$TypedSvg$Types$DominantBaselineMiddle),
						$elm_community$typed_svg$TypedSvg$Attributes$class(
						_List_fromArray(
							[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$labelClassName]))
					]));
			var _v5 = conf.showLabels;
			if (_v5.$ === 'XGroupLabel') {
				return txt(
					_List_fromArray(
						[
							$elm_community$typed_svg$TypedSvg$Core$text(label)
						]));
			} else {
				return A2($elm_community$typed_svg$TypedSvg$text_, _List_Nil, _List_Nil);
			}
		} else {
			return A2($elm_community$typed_svg$TypedSvg$text_, _List_Nil, _List_Nil);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$areaShapeClassName = 'ecb-area';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$drawStackedAreas = F5(
	function (config, xScale, yScale, stackedResult, combinedData) {
		var values = stackedResult.values;
		var combinedDataWithStack = A3(
			$elm$core$List$map2,
			F2(
				function (v, combined) {
					return {
						groupLabel: combined.groupLabel,
						points: A2($elm_community$list_extra$List$Extra$zip, v, combined.points)
					};
				}),
			values,
			combinedData);
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var m = c.margin;
		var p = c.padding;
		var styles = function (idx) {
			return $elm_community$typed_svg$TypedSvg$Attributes$style(
				A2(
					$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
					c.coreStyle,
					A2(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
						_List_Nil,
						A3(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorStyle,
							c,
							$elm$core$Maybe$Just(idx),
							$elm$core$Maybe$Nothing))));
		};
		var toArea = function (combinedWithStack) {
			return A2(
				$gampleman$elm_visualization$Shape$area,
				c.curve,
				A2(
					$elm$core$List$map,
					A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$areaGeneratorStacked, xScale, yScale),
					combinedWithStack.points));
		};
		var renderStream = F2(
			function (idx, combinedWithStack) {
				return A2(
					$folkertdev$one_true_path_experiment$Path$element,
					toArea(combinedWithStack),
					_List_fromArray(
						[
							$elm_community$typed_svg$TypedSvg$Attributes$class(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$areaShapeClassName,
									$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$areaShapeClassName + ('-' + $elm$core$String$fromInt(idx))
								])),
							styles(idx)
						]));
			});
		var paths = A2($elm$core$List$indexedMap, renderStream, combinedDataWithStack);
		return _List_fromArray(
			[
				A2(
				$elm_community$typed_svg$TypedSvg$g,
				_List_fromArray(
					[
						$elm_community$typed_svg$TypedSvg$Attributes$transform(
						_List_fromArray(
							[
								A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$topLeftTranslate, m, p)
							])),
						$elm_community$typed_svg$TypedSvg$Attributes$class(
						_List_fromArray(
							[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
					]),
				paths),
				A2(
				$elm_community$typed_svg$TypedSvg$g,
				_List_fromArray(
					[
						$elm_community$typed_svg$TypedSvg$Attributes$transform(
						_List_fromArray(
							[
								A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$topLeftTranslate, m, p)
							])),
						$elm_community$typed_svg$TypedSvg$Attributes$class(
						_List_fromArray(
							[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
					]),
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (idx, combinedItem) {
							return A5($data_viz_lab$elm_chart_builder$Chart$Internal$Line$areaLabel, config, xScale, yScale, idx, combinedItem);
						}),
					combinedDataWithStack)),
				A4($data_viz_lab$elm_chart_builder$Chart$Internal$Line$symbolGroup, config, xScale, yScale, combinedData)
			]);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$stackDataGroupContinuous = F2(
	function (values, groupData) {
		return A3(
			$elm$core$List$map2,
			F2(
				function (vals, group) {
					return {
						groupLabel: group.groupLabel,
						points: A3(
							$elm$core$List$map2,
							F2(
								function (_v0, _v1) {
									var y = _v0.b;
									var x = _v1.a;
									return _Utils_Tuple2(x, y);
								}),
							vals,
							group.points)
					};
				}),
			values,
			groupData);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Line$renderLineStacked = F2(
	function (offset, _v0) {
		var data = _v0.a;
		var config = _v0.b;
		var timeData = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$dataContinuousGroupToDataTime(data);
		var continuousData = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$dataContinuousGroupToDataContinuous(data);
		var dataStacked = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$dataContinuousGroupToDataContinuousStacked(continuousData);
		var stackedConfig = {data: dataStacked, offset: offset, order: $elm$core$Basics$identity};
		var stackResult = $gampleman$elm_visualization$Shape$stack(stackedConfig);
		var timeDomain = A3(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainTimeFromData,
			$elm$core$Maybe$Just(stackResult.extent),
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainTime(config),
			timeData);
		var continuousDomain = function () {
			if (data.$ === 'DataTime') {
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Line$timeDomainToContinuousDomain(timeDomain);
			} else {
				return A3(
					$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainContinuousFromData,
					$elm$core$Maybe$Just(stackResult.extent),
					$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainContinuous(config),
					continuousData);
			}
		}();
		var combinedData = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$stackDataGroupContinuous, stackResult.values, continuousData);
		var classNames = $elm$html$Html$Attributes$classList(
			_List_fromArray(
				[
					_Utils_Tuple2($data_viz_lab$elm_chart_builder$Chart$Internal$Constants$rootClassName, true),
					_Utils_Tuple2($data_viz_lab$elm_chart_builder$Chart$Internal$Constants$lineClassName, true)
				]));
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var h = c.height;
		var yRange = _Utils_Tuple2(h, 0);
		var m = c.margin;
		var p = c.padding;
		var outerH = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$outerHeight, h, m, p);
		var w = c.width;
		var outerW = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$outerWidth, w, m, p);
		var xRange = _Utils_Tuple2(0, w);
		var xContinuousScale = A2(
			$gampleman$elm_visualization$Scale$linear,
			xRange,
			A2(
				$elm$core$Maybe$withDefault,
				_Utils_Tuple2(0, 0),
				continuousDomain.x));
		var xTimeScale = function () {
			if (data.$ === 'DataTime') {
				return $elm$core$Maybe$Just(
					A3(
						$gampleman$elm_visualization$Scale$time,
						c.zone,
						xRange,
						A2(
							$elm$core$Maybe$withDefault,
							_Utils_Tuple2(
								$elm$time$Time$millisToPosix(0),
								$elm$time$Time$millisToPosix(0)),
							timeDomain.x)));
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}();
		var yScale = A3(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$toContinousScale,
			yRange,
			A2(
				$elm$core$Maybe$withDefault,
				_Utils_Tuple2(0, 0),
				continuousDomain.y),
			c.yScale);
		var draw = function () {
			var _v3 = c.lineDraw;
			if (_v3.$ === 'Line') {
				return A4($data_viz_lab$elm_chart_builder$Chart$Internal$Line$drawContinuousLine, config, xContinuousScale, yScale, combinedData);
			} else {
				return A5($data_viz_lab$elm_chart_builder$Chart$Internal$Line$drawStackedAreas, config, xContinuousScale, yScale, stackResult, combinedData);
			}
		}();
		var events = $elm$core$List$concat(
			A2(
				$elm$core$List$map,
				function (e) {
					if (e.$ === 'HoverOne') {
						var f = e.a;
						return A4(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Event$hoverOne,
							c,
							continuousData,
							_Utils_Tuple2(xContinuousScale, yScale),
							f);
					} else {
						var f = e.a;
						return A4(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Event$hoverAll,
							c,
							continuousData,
							_Utils_Tuple2(xContinuousScale, yScale),
							f);
					}
				},
				c.events));
		var svgEl = A2(
			$elm_community$typed_svg$TypedSvg$svg,
			_Utils_ap(
				_List_fromArray(
					[
						A4($elm_community$typed_svg$TypedSvg$Attributes$viewBox, 0, 0, outerW, outerH),
						$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(outerW),
						$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(outerH),
						$data_viz_lab$elm_chart_builder$Chart$Internal$Type$role('img')
					]),
				_Utils_ap(
					$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledbyContent(c),
					events)),
			_Utils_ap(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Line$vLineAnnotation(c),
				_Utils_ap(
					$data_viz_lab$elm_chart_builder$Chart$Internal$Line$symbolElements(config),
					_Utils_ap(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Type$descAndTitle(c),
						_Utils_ap(
							A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$continuousYAxis, c, yScale),
							_Utils_ap(
								A3(
									$data_viz_lab$elm_chart_builder$Chart$Internal$Line$continuousOrTimeAxisGenerator,
									xTimeScale,
									xContinuousScale,
									_Utils_Tuple2(data, config)),
								draw))))));
		var _v1 = c.accessibilityContent;
		if (_v1.$ === 'AccessibilityNone') {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[classNames]),
				_List_fromArray(
					[svgEl]));
		} else {
			return A2(
				$elm$html$Html$div,
				_List_fromArray(
					[classNames]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$figure,
						_List_Nil,
						_List_fromArray(
							[
								svgEl,
								A2($data_viz_lab$elm_chart_builder$Chart$Internal$Line$tableElement, config, data)
							]))
					]));
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Line$render = F2(
	function (_v0, config) {
		var externalData = _v0.a;
		var accessor = _v0.b;
		var data = A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$externalToDataContinuousGroup,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$toExternalData(externalData),
			accessor);
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var _v1 = c.layout;
		switch (_v1.$) {
			case 'GroupedLine':
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Line$renderLineGrouped(
					_Utils_Tuple2(data, config));
			case 'StackedLine':
				var offset = _v1.a;
				return A2(
					$data_viz_lab$elm_chart_builder$Chart$Internal$Line$renderLineStacked,
					offset,
					_Utils_Tuple2(data, config));
			default:
				return $elm$html$Html$text('');
		}
	});
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $author$project$Line$tooltip = F2(
	function (width, model) {
		var margin = $author$project$Helpers$marginWithLabel;
		var xOffset = margin.left + 20;
		var height = $author$project$Helpers$toChartHeight(
			$author$project$Helpers$toChartWidth(width));
		var annotation = model.pointAnnotation;
		var bottom = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (_v2) {
					var yPosition = _v2.yPosition;
					return $elm$core$String$fromFloat(height - yPosition) + 'px';
				},
				A2($elm$core$Maybe$map, $elm$core$Tuple$first, annotation)));
		var display = A2(
			$elm$core$Maybe$withDefault,
			'none',
			A2(
				$elm$core$Maybe$map,
				$elm$core$Basics$always('block'),
				annotation));
		var left = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (_v1) {
					var xPosition = _v1.xPosition;
					return $elm$core$String$fromFloat(xPosition + xOffset) + 'px';
				},
				A2($elm$core$Maybe$map, $elm$core$Tuple$first, annotation)));
		var values = $elm$core$List$reverse(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var groupLabel = _v0.groupLabel;
					var value = _v0.value;
					return A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								A2($elm$core$Maybe$withDefault, '', groupLabel) + (': ' + $elm$core$String$fromFloat(value)))
							]));
				},
				A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					A2(
						$elm$core$Maybe$map,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$first,
							A2(
								$elm$core$Basics$composeR,
								function ($) {
									return $.selection;
								},
								function ($) {
									return $.y;
								})),
						annotation))));
		var year = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Tuple$first,
					A2(
						$elm$core$Basics$composeR,
						function ($) {
							return $.selection;
						},
						A2(
							$elm$core$Basics$composeR,
							function ($) {
								return $.x;
							},
							$elm$core$String$fromFloat))),
				annotation));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin', '0'),
					A2($elm$html$Html$Attributes$style, 'padding', '5px'),
					A2($elm$html$Html$Attributes$style, 'font-size', '14px'),
					A2($elm$html$Html$Attributes$style, 'border', '1px #aaa solid'),
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2($elm$html$Html$Attributes$style, 'bottom', bottom),
					A2($elm$html$Html$Attributes$style, 'left', left),
					A2($elm$html$Html$Attributes$style, 'background', 'white'),
					A2($elm$html$Html$Attributes$style, 'opacity', '90%'),
					A2($elm$html$Html$Attributes$style, 'width', '130px'),
					A2($elm$html$Html$Attributes$style, 'display', display)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$ul,
					_List_Nil,
					A2(
						$elm$core$List$cons,
						A2(
							$elm$html$Html$li,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(year)
								])),
						values))
				]));
	});
var $data_viz_lab$elm_chart_builder$Chart$Line$withColorPalette = F2(
	function (palette, config) {
		return A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$setColorResource,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ColorPalette(palette),
			config);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Event$HoverOne = function (a) {
	return {$: 'HoverOne', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$addEvent = F2(
	function (event, _v0) {
		var c = _v0.a;
		var updatedEvents = A2($elm$core$List$cons, event, c.events);
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{events: updatedEvents}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Line$withEvent = function (event) {
	if (event.$ === 'HoverOne') {
		var msg = event.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$addEvent(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Event$HoverOne(msg));
	} else {
		var msg = event.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$addEvent(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Event$HoverAll(msg));
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$XGroupLabel = {$: 'XGroupLabel'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showXGroupLabel = function (_v0) {
	var c = _v0.a;
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
		_Utils_update(
			c,
			{showLabels: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$XGroupLabel}));
};
var $data_viz_lab$elm_chart_builder$Chart$Line$withLabels = function (label) {
	if (label.$ === 'XGroupLabel') {
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showXGroupLabel;
	} else {
		return $elm$core$Basics$identity;
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Line$withLineStyle = F2(
	function (styles, config) {
		return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$setCoreStyles, styles, config);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$AnnotationPointHint = function (a) {
	return {$: 'AnnotationPointHint', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setAnnotiation = F2(
	function (annotation, _v0) {
		var c = _v0.a;
		var a = A2($elm$core$List$cons, annotation, c.annotations);
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{annotations: a}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Line$withPointAnnotation = F2(
	function (annotation, config) {
		if (annotation.$ === 'Just') {
			var a = annotation.a;
			return A2(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$setAnnotiation,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$AnnotationPointHint(a),
				config);
		} else {
			return config;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setIcons = F2(
	function (all, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Config(
			_Utils_update(
				c,
				{symbols: all}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Line$withSymbols = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setIcons;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$AnnotationXBarHint = function (a) {
	return {$: 'AnnotationXBarHint', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Line$withVLineAnnotation = F2(
	function (annotation, config) {
		if (annotation.$ === 'Just') {
			var a = annotation.a;
			return A2(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$setAnnotiation,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$AnnotationXBarHint(a),
				config);
		} else {
			return config;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setXAxisContinuous = F2(
	function (orientation, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{axisXContinuous: orientation}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Line$withXAxisCont = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setXAxisContinuous;
var $data_viz_lab$elm_chart_builder$Chart$Line$withYAxis = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setYAxisContinuous;
var $data_viz_lab$elm_chart_builder$Chart$Line$axisBottom = $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Bottom;
var $author$project$Line$sharedAttributes = _List_fromArray(
	[
		$gampleman$elm_visualization$Axis$tickSizeOuter(0),
		$gampleman$elm_visualization$Axis$tickSizeInner(3)
	]);
var $gampleman$elm_visualization$Axis$Ticks = function (a) {
	return {$: 'Ticks', a: a};
};
var $gampleman$elm_visualization$Axis$ticks = $gampleman$elm_visualization$Axis$Ticks;
var $author$project$Line$xAxisTicks = _List_fromArray(
	[1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2030]);
var $author$project$Line$xAxis = $data_viz_lab$elm_chart_builder$Chart$Line$axisBottom(
	_Utils_ap(
		_List_fromArray(
			[
				$gampleman$elm_visualization$Axis$ticks($author$project$Line$xAxisTicks),
				$gampleman$elm_visualization$Axis$tickFormat(
				A2($elm$core$Basics$composeR, $elm$core$Basics$round, $elm$core$String$fromInt))
			]),
		$author$project$Line$sharedAttributes));
var $data_viz_lab$elm_chart_builder$Chart$Line$xGroupLabel = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$XGroupLabel;
var $data_viz_lab$elm_chart_builder$Chart$Line$axisLeft = $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Left;
var $author$project$Line$yAxis = $data_viz_lab$elm_chart_builder$Chart$Line$axisLeft(
	A2(
		$elm$core$List$cons,
		$gampleman$elm_visualization$Axis$tickCount(4),
		$author$project$Line$sharedAttributes));
var $author$project$Line$chart = F2(
	function (width, model) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'relative')
				]),
			_List_fromArray(
				[
					A2(
					$data_viz_lab$elm_chart_builder$Chart$Line$render,
					_Utils_Tuple2(model.data, $author$project$Line$accessor),
					A2(
						$data_viz_lab$elm_chart_builder$Chart$Line$withXAxisCont,
						$author$project$Line$xAxis,
						A2(
							$data_viz_lab$elm_chart_builder$Chart$Line$withYAxis,
							$author$project$Line$yAxis,
							A2(
								$data_viz_lab$elm_chart_builder$Chart$Line$withLineStyle,
								_List_fromArray(
									[
										_Utils_Tuple2('stroke-width', '2.5')
									]),
								A2(
									$data_viz_lab$elm_chart_builder$Chart$Line$withSymbols,
									_List_fromArray(
										[$author$project$Line$circle]),
									A2(
										$data_viz_lab$elm_chart_builder$Chart$Line$withLabels,
										$data_viz_lab$elm_chart_builder$Chart$Line$xGroupLabel,
										A2(
											$data_viz_lab$elm_chart_builder$Chart$Line$withVLineAnnotation,
											model.vLineAnnotation,
											A2(
												$data_viz_lab$elm_chart_builder$Chart$Line$withPointAnnotation,
												model.pointAnnotation,
												A2(
													$data_viz_lab$elm_chart_builder$Chart$Line$withEvent,
													$data_viz_lab$elm_chart_builder$Chart$Line$hoverAll($author$project$Line$Hint),
													A2(
														$data_viz_lab$elm_chart_builder$Chart$Line$withColorPalette,
														$author$project$Line$colorScheme,
														$data_viz_lab$elm_chart_builder$Chart$Line$init(
															{
																height: $author$project$Helpers$toChartHeight(
																	$author$project$Helpers$toChartWidth(width)),
																margin: $author$project$Helpers$marginWithLabel,
																width: $author$project$Helpers$toChartWidth(width)
															}))))))))))),
					A2($author$project$Line$tooltip, width, model)
				]));
	});
var $author$project$CodePrev$codePrevLine = ' \naccessor : Line.Accessor City\naccessor =\n    Line.cont\n        { xGroup = .urbanAgglomeration >> Just\n        , xValue = .year\n        , yValue = .populationMillions\n        }\n\nchart : Int -> Model -> Html Msg\nchart width model =\n    Line.init\n        { margin = margin\n        , width = width\n        , height = height\n        }\n        |> Line.withColorPalette colorScheme\n        |> Line.withEvent (Line.hoverAll Hint)\n        |> Line.withPointAnnotation model.pointAnnotation\n        |> Line.withVLineAnnotation model.vLineAnnotation\n        |> Line.withLabels Line.xGroupLabel\n        |> Line.withSymbols [ circle ]\n        |> Line.withLineStyle [ ( "stroke-width", "2.5" ) ]\n        |> Line.withYAxis yAxis\n        |> Line.withXAxisCont xAxis\n        |> Line.render ( model.data, accessor )\n        ';
var $author$project$Line$desc = A2(
	$elm$html$Html$section,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('example__desc')
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$h3,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Continuous line chart with dots, labels and tooltip')
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Population in millions')
				])),
			A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$href('https://github.com/data-viz-lab/elm-chart-builder-presentation/blob/main/src/Line.elm')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('source')
				]))
		]));
var $author$project$Line$view = F2(
	function (_v0, model) {
		var width = _v0.width;
		return _List_fromArray(
			[
				$author$project$Line$desc,
				A2($author$project$Line$chart, width, model),
				$author$project$CodePrev$codePrev($author$project$CodePrev$codePrevLine)
			]);
	});
var $author$project$LineAnimated$accessor = $data_viz_lab$elm_chart_builder$Chart$Line$cont(
	{
		xGroup: A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.urbanAgglomeration;
			},
			$elm$core$Maybe$Just),
		xValue: function ($) {
			return $.year;
		},
		yValue: function ($) {
			return $.populationMillions;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setDomainContinuousX = F2(
	function (continuousDomain, _v0) {
		var c = _v0.a;
		var domain = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainContinuous(c.domainContinuous);
		var newDomain = _Utils_update(
			domain,
			{
				x: $elm$core$Maybe$Just(continuousDomain)
			});
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{
					domainContinuous: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainContinuous(newDomain)
				}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Line$withXContDomain = F2(
	function (value, config) {
		return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$setDomainContinuousX, value, config);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setDomainContinuousAndTimeY = F2(
	function (continuousDomain, _v0) {
		var c = _v0.a;
		var domainTime = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainTime(c.domainTime);
		var newDomainTime = _Utils_update(
			domainTime,
			{
				y: $elm$core$Maybe$Just(continuousDomain)
			});
		var domain = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainContinuous(c.domainContinuous);
		var newDomain = _Utils_update(
			domain,
			{
				y: $elm$core$Maybe$Just(continuousDomain)
			});
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{
					domainContinuous: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainContinuous(newDomain),
					domainTime: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainTime(newDomainTime)
				}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Line$withYDomain = F2(
	function (value, config) {
		return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$setDomainContinuousAndTimeY, value, config);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$AccessibilityNone = {$: 'AccessibilityNone'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setAccessibilityContent = F2(
	function (content, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{accessibilityContent: content}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Line$withoutTable = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setAccessibilityContent($data_viz_lab$elm_chart_builder$Chart$Internal$Type$AccessibilityNone);
var $author$project$LineAnimated$xAxisTicks = _List_fromArray(
	[1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2030]);
var $author$project$LineAnimated$xAxis = $data_viz_lab$elm_chart_builder$Chart$Line$axisBottom(
	_List_fromArray(
		[
			$gampleman$elm_visualization$Axis$ticks($author$project$LineAnimated$xAxisTicks),
			$gampleman$elm_visualization$Axis$tickFormat(
			A2($elm$core$Basics$composeR, $elm$core$Basics$round, $elm$core$String$fromInt)),
			$gampleman$elm_visualization$Axis$tickSizeOuter(0)
		]));
var $author$project$LineAnimated$yAxis = $data_viz_lab$elm_chart_builder$Chart$Line$axisLeft(
	_List_fromArray(
		[
			$gampleman$elm_visualization$Axis$tickCount(6),
			$gampleman$elm_visualization$Axis$tickSizeOuter(0),
			$gampleman$elm_visualization$Axis$tickSizeInner(3)
		]));
var $author$project$LineAnimated$chart = F2(
	function (width, model) {
		return A2(
			$data_viz_lab$elm_chart_builder$Chart$Line$render,
			_Utils_Tuple2(model.data, $author$project$LineAnimated$accessor),
			$data_viz_lab$elm_chart_builder$Chart$Line$withoutTable(
				A2(
					$data_viz_lab$elm_chart_builder$Chart$Line$withYDomain,
					model.yDomain,
					A2(
						$data_viz_lab$elm_chart_builder$Chart$Line$withXContDomain,
						model.xDomain,
						A2(
							$data_viz_lab$elm_chart_builder$Chart$Line$withLabels,
							$data_viz_lab$elm_chart_builder$Chart$Line$xGroupLabel,
							A2(
								$data_viz_lab$elm_chart_builder$Chart$Line$withYAxis,
								$author$project$LineAnimated$yAxis,
								A2(
									$data_viz_lab$elm_chart_builder$Chart$Line$withXAxisCont,
									$author$project$LineAnimated$xAxis,
									A2(
										$data_viz_lab$elm_chart_builder$Chart$Line$withLineStyle,
										_List_fromArray(
											[
												_Utils_Tuple2('stroke-width', '3')
											]),
										A2(
											$data_viz_lab$elm_chart_builder$Chart$Line$withColorPalette,
											$gampleman$elm_visualization$Scale$Color$tableau10,
											$data_viz_lab$elm_chart_builder$Chart$Line$init(
												{
													height: $author$project$Helpers$toChartHeight(
														$author$project$Helpers$toChartWidth(width)),
													margin: $author$project$Helpers$marginWithLabel,
													width: $author$project$Helpers$toChartWidth(width)
												}))))))))));
	});
var $author$project$CodePrev$codePrevLineAnimated = ' \naccessor : Line.Accessor City\naccessor =\n    Line.cont\n        { xGroup = .urbanAgglomeration >> Just\n        , xValue = .year\n        , yValue = .populationMillions\n        }\n\nchart : Int -> Model -> Html msg\nchart width model =\n    Line.init\n        { margin = margin\n        , width = width\n        , height = height\n        }\n        |> Line.withColorPalette Scale.Color.tableau10\n        |> Line.withLineStyle [ ( "stroke-width", "3" ) ]\n        |> Line.withXAxisCont xAxis\n        |> Line.withYAxis yAxis\n        |> Line.withLabels Line.xGroupLabel\n        |> Line.withXContDomain model.xDomain\n        |> Line.withYDomain model.yDomain\n        -- for performance\n        |> Line.withoutTable\n        |> Line.render ( model.data, accessor )\n        ';
var $author$project$LineAnimated$InitAnimation = {$: 'InitAnimation'};
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$LineAnimated$desc = function (model) {
	return A2(
		$elm$html$Html$section,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('example__desc')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h3,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Continuous animated line chart with labels')
					])),
				A2(
				$elm$html$Html$p,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Population in millions')
					])),
				A2(
				$elm$html$Html$p,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick($author$project$LineAnimated$InitAnimation),
								$elm$html$Html$Attributes$disabled(!model.animationIsComplete)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Start animation')
							]))
					])),
				A2(
				$elm$html$Html$a,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$href('https://github.com/data-viz-lab/elm-chart-builder-presentation/blob/main/src/LineAnimated.elm')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('source')
					]))
			]));
};
var $author$project$LineAnimated$yearView = function (year) {
	return A2(
		$elm$html$Html$h2,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('year-view')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(
				$elm$core$String$fromFloat(year))
			]));
};
var $author$project$LineAnimated$view = F2(
	function (_v0, model) {
		var width = _v0.width;
		return _List_fromArray(
			[
				$author$project$LineAnimated$desc(model),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('chart-wrapper')
					]),
				_List_fromArray(
					[
						$author$project$LineAnimated$yearView(model.currentYear),
						A2($author$project$LineAnimated$chart, width, model)
					])),
				$author$project$CodePrev$codePrev($author$project$CodePrev$codePrevLineAnimated)
			]);
	});
var $author$project$LineStacked$accessor = $data_viz_lab$elm_chart_builder$Chart$Line$cont(
	{
		xGroup: A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.urbanAgglomeration;
			},
			$elm$core$Maybe$Just),
		xValue: function ($) {
			return $.year;
		},
		yValue: function ($) {
			return $.populationMillions;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Area = {$: 'Area'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setLineDraw = F2(
	function (lineDraw, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{lineDraw: lineDraw}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Line$asArea = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setLineDraw($data_viz_lab$elm_chart_builder$Chart$Internal$Type$Area);
var $folkertdev$one_true_path_experiment$LowLevel$Command$cubicCurveTo = $folkertdev$one_true_path_experiment$LowLevel$Command$CurveTo;
var $ianmackenzie$elm_units$Quantity$Quantity = function (a) {
	return {$: 'Quantity', a: a};
};
var $ianmackenzie$elm_units$Quantity$float = function (value) {
	return $ianmackenzie$elm_units$Quantity$Quantity(value);
};
var $ianmackenzie$elm_geometry$Geometry$Types$Vector2d = function (a) {
	return {$: 'Vector2d', a: a};
};
var $ianmackenzie$elm_geometry$Vector2d$xy = F2(
	function (_v0, _v1) {
		var x = _v0.a;
		var y = _v1.a;
		return $ianmackenzie$elm_geometry$Geometry$Types$Vector2d(
			{x: x, y: y});
	});
var $ianmackenzie$elm_geometry$Vector2d$fromTuple = F2(
	function (toQuantity, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return A2(
			$ianmackenzie$elm_geometry$Vector2d$xy,
			toQuantity(x),
			toQuantity(y));
	});
var $folkertdev$one_true_path_experiment$Curve$mapTriplet = F2(
	function (f, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		var c = _v0.c;
		return _Utils_Tuple3(
			f(a),
			f(b),
			f(c));
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$step1 = function (coordinates) {
	if (coordinates.b && coordinates.b.b) {
		var x0 = coordinates.a;
		var _v1 = coordinates.b;
		var x1 = _v1.a;
		var rest = _v1.b;
		var r = A2(
			$elm$core$List$cons,
			x0 + (2 * x1),
			A3(
				$elm$core$List$map2,
				F2(
					function (current, next) {
						return (4 * current) + (2 * next);
					}),
				A2($elm$core$List$cons, x1, rest),
				rest));
		var n = $elm$core$List$length(coordinates) - 1;
		var b = A2(
			$elm$core$List$cons,
			2,
			_Utils_ap(
				A2($elm$core$List$repeat, n - 2, 4),
				_List_fromArray(
					[7])));
		var a = A2(
			$elm$core$List$cons,
			0,
			_Utils_ap(
				A2($elm$core$List$repeat, n - 2, 1),
				_List_fromArray(
					[2])));
		var _v2 = A3(
			$elm$core$List$foldl,
			F2(
				function (elem, _v3) {
					var previous = _v3.b;
					return _Utils_Tuple2(previous, elem);
				}),
			_Utils_Tuple2(x0, x1),
			rest);
		var butFinal = _v2.a;
		var _final = _v2.b;
		var r_ = $elm$core$List$reverse(
			function (list) {
				return A2($elm$core$List$cons, (8 * butFinal) + _final, list);
			}(
				A2(
					$elm$core$List$drop,
					1,
					$elm$core$List$reverse(r))));
		return $elm$core$Maybe$Just(
			_Utils_Tuple3(a, b, r_));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$map3 = _List_map3;
var $elm_community$list_extra$List$Extra$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				if (accAcc.b) {
					var acc = accAcc.a;
					return A2(
						$elm$core$List$cons,
						A2(f, x, acc),
						accAcc);
				} else {
					return _List_Nil;
				}
			});
		return $elm$core$List$reverse(
			A3(
				$elm$core$List$foldl,
				scan1,
				_List_fromArray(
					[b]),
				xs));
	});
var $folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$step2Scanner = F2(
	function (_v0, _v1) {
		var a = _v0.a;
		var b = _v0.b;
		var r = _v0.c;
		var prevB = _v1.a;
		var prevR = _v1.b;
		return _Utils_Tuple2(b - (a / prevB), r - ((a / prevB) * prevR));
	});
var $folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$step2 = function (_v0) {
	var a = _v0.a;
	var b = _v0.b;
	var r = _v0.c;
	var _v1 = _Utils_Tuple2(b, r);
	if (_v1.a.b && _v1.b.b) {
		var _v2 = _v1.a;
		var firstB = _v2.a;
		var _v3 = _v1.b;
		var firstR = _v3.a;
		var _v4 = $elm$core$List$unzip(
			A2(
				$elm$core$List$drop,
				1,
				A3(
					$elm_community$list_extra$List$Extra$scanl,
					$folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$step2Scanner,
					_Utils_Tuple2(firstB, firstR),
					A4(
						$elm$core$List$map3,
						F3(
							function (x, y, z) {
								return _Utils_Tuple3(x, y, z);
							}),
						a,
						b,
						r))));
		var b_ = _v4.a;
		var r_ = _v4.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple3(a, b_, r_));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm_community$list_extra$List$Extra$last = function (items) {
	last:
	while (true) {
		if (!items.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!items.b.b) {
				var x = items.a;
				return $elm$core$Maybe$Just(x);
			} else {
				var rest = items.b;
				var $temp$items = rest;
				items = $temp$items;
				continue last;
			}
		}
	}
};
var $elm$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 'Nothing') {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					return $elm$core$Maybe$Just(
						A3(func, a, b, c));
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$scanr = F3(
	function (f, acc, xs_) {
		if (!xs_.b) {
			return _List_fromArray(
				[acc]);
		} else {
			var x = xs_.a;
			var xs = xs_.b;
			var _v1 = A3($elm_community$list_extra$List$Extra$scanr, f, acc, xs);
			if (_v1.b) {
				var qs = _v1;
				var q = qs.a;
				return A2(
					$elm$core$List$cons,
					A2(f, x, q),
					qs);
			} else {
				return _List_Nil;
			}
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm_community$list_extra$List$Extra$init = function (items) {
	if (!items.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var nonEmptyList = items;
		return A2(
			$elm$core$Maybe$map,
			$elm$core$List$reverse,
			$elm$core$List$tail(
				$elm$core$List$reverse(nonEmptyList)));
	}
};
var $folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$unsafeInit = A2(
	$elm$core$Basics$composeL,
	$elm$core$Maybe$withDefault(_List_Nil),
	$elm_community$list_extra$List$Extra$init);
var $folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$unsafeTail = A2(
	$elm$core$Basics$composeL,
	$elm$core$Maybe$withDefault(_List_Nil),
	$elm$core$List$tail);
var $folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$step3 = F2(
	function (points, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		var r = _v0.c;
		var helper = F3(
			function (finalR, finalB, finalX) {
				var scanner = F2(
					function (_v1, prevA) {
						var currentB = _v1.a;
						var currentR = _v1.b;
						return (currentR - prevA) / currentB;
					});
				var finalA = finalR / finalB;
				var a_ = A3(
					$elm_community$list_extra$List$Extra$scanr,
					scanner,
					finalA,
					A3(
						$elm$core$List$map2,
						$elm$core$Tuple$pair,
						$folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$unsafeInit(b),
						$folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$unsafeInit(r)));
				var b_ = _Utils_ap(
					A3(
						$elm$core$List$map2,
						F2(
							function (xx, aa) {
								return (2 * xx) - aa;
							}),
						$folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$unsafeTail(points),
						$folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$unsafeTail(a_)),
					_List_fromArray(
						[(finalX + finalA) / 2]));
				return _Utils_Tuple2(a_, b_);
			});
		return A4(
			$elm$core$Maybe$map3,
			helper,
			$elm_community$list_extra$List$Extra$last(r),
			$elm_community$list_extra$List$Extra$last(b),
			$elm_community$list_extra$List$Extra$last(points));
	});
var $folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$controlPoints = function (points) {
	return A2(
		$elm$core$Maybe$andThen,
		$folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$step3(points),
		A2(
			$elm$core$Maybe$andThen,
			$folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$step2,
			$folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$step1(points)));
};
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $ianmackenzie$elm_units$Quantity$toFloat = function (_v0) {
	var value = _v0.a;
	return value;
};
var $ianmackenzie$elm_geometry$Vector2d$xComponent = function (_v0) {
	var v = _v0.a;
	return $ianmackenzie$elm_units$Quantity$Quantity(v.x);
};
var $ianmackenzie$elm_geometry$Vector2d$yComponent = function (_v0) {
	var v = _v0.a;
	return $ianmackenzie$elm_units$Quantity$Quantity(v.y);
};
var $ianmackenzie$elm_geometry$Vector2d$toTuple = F2(
	function (fromQuantity, vector) {
		return _Utils_Tuple2(
			fromQuantity(
				$ianmackenzie$elm_geometry$Vector2d$xComponent(vector)),
			fromQuantity(
				$ianmackenzie$elm_geometry$Vector2d$yComponent(vector)));
	});
var $ianmackenzie$elm_geometry$Vector2d$unitless = F2(
	function (x, y) {
		return $ianmackenzie$elm_geometry$Geometry$Types$Vector2d(
			{x: x, y: y});
	});
var $folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$naturalControlPoints = function (points) {
	var _v0 = $elm$core$List$unzip(
		A2(
			$elm$core$List$map,
			$ianmackenzie$elm_geometry$Vector2d$toTuple($ianmackenzie$elm_units$Quantity$toFloat),
			points));
	var xs = _v0.a;
	var ys = _v0.b;
	var _v1 = A3(
		$elm$core$Maybe$map2,
		F2(
			function (a, b) {
				return _Utils_Tuple2(a, b);
			}),
		$folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$controlPoints(xs),
		$folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$controlPoints(ys));
	if (_v1.$ === 'Just') {
		var _v2 = _v1.a;
		var _v3 = _v2.a;
		var px0 = _v3.a;
		var px1 = _v3.b;
		var _v4 = _v2.b;
		var py0 = _v4.a;
		var py1 = _v4.b;
		var pb = A3(
			$elm$core$List$map2,
			F2(
				function (a, b) {
					return A2($ianmackenzie$elm_geometry$Vector2d$unitless, a, b);
				}),
			px1,
			py1);
		var pa = A3(
			$elm$core$List$map2,
			F2(
				function (a, b) {
					return A2($ianmackenzie$elm_geometry$Vector2d$unitless, a, b);
				}),
			px0,
			py0);
		return A4(
			$elm$core$List$map3,
			F3(
				function (a, b, c) {
					return _Utils_Tuple3(a, b, c);
				}),
			pa,
			pb,
			A2($elm$core$List$drop, 1, points));
	} else {
		return _List_Nil;
	}
};
var $folkertdev$one_true_path_experiment$Curve$natural = function (points) {
	if (!points.b) {
		return $folkertdev$one_true_path_experiment$SubPath$empty;
	} else {
		if (!points.b.b) {
			var x = points.a;
			return $folkertdev$one_true_path_experiment$SubPath$empty;
		} else {
			if (!points.b.b.b) {
				var p1 = points.a;
				var _v1 = points.b;
				var p2 = _v1.a;
				return A2(
					$folkertdev$one_true_path_experiment$SubPath$with,
					$folkertdev$one_true_path_experiment$LowLevel$Command$moveTo(p1),
					_List_fromArray(
						[
							$folkertdev$one_true_path_experiment$LowLevel$Command$lineTo(
							_List_fromArray(
								[p2]))
						]));
			} else {
				var p = points.a;
				var _v2 = points.b;
				var cubicTriplets = A2(
					$elm$core$List$map,
					$folkertdev$one_true_path_experiment$Curve$mapTriplet(
						$ianmackenzie$elm_geometry$Vector2d$toTuple($ianmackenzie$elm_units$Quantity$toFloat)),
					$folkertdev$one_true_path_experiment$Internal$NaturalInterpolation$naturalControlPoints(
						A2(
							$elm$core$List$map,
							$ianmackenzie$elm_geometry$Vector2d$fromTuple($ianmackenzie$elm_units$Quantity$float),
							points)));
				return A2(
					$folkertdev$one_true_path_experiment$SubPath$with,
					$folkertdev$one_true_path_experiment$LowLevel$Command$moveTo(p),
					_List_fromArray(
						[
							$folkertdev$one_true_path_experiment$LowLevel$Command$cubicCurveTo(cubicTriplets)
						]));
			}
		}
	}
};
var $gampleman$elm_visualization$Shape$naturalCurve = $folkertdev$one_true_path_experiment$Curve$natural;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setCurve = F2(
	function (curve, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{curve: curve}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Line$withCurve = F2(
	function (curve, config) {
		return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$setCurve, curve, config);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$StackedLine = function (a) {
	return {$: 'StackedLine', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Line$withStackedLayout = F2(
	function (offset, config) {
		return A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$setLayout,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$StackedLine(offset),
			config);
	});
var $author$project$LineStacked$sharedAttributes = _List_fromArray(
	[
		$gampleman$elm_visualization$Axis$tickSizeOuter(0),
		$gampleman$elm_visualization$Axis$tickSizeInner(3)
	]);
var $author$project$LineStacked$xAxisTicks = _List_fromArray(
	[1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2030]);
var $author$project$LineStacked$xAxis = $data_viz_lab$elm_chart_builder$Chart$Line$axisBottom(
	_Utils_ap(
		_List_fromArray(
			[
				$gampleman$elm_visualization$Axis$ticks($author$project$LineStacked$xAxisTicks),
				$gampleman$elm_visualization$Axis$tickFormat(
				A2($elm$core$Basics$composeR, $elm$core$Basics$round, $elm$core$String$fromInt))
			]),
		$author$project$LineStacked$sharedAttributes));
var $author$project$LineStacked$yAxis = $data_viz_lab$elm_chart_builder$Chart$Line$axisLeft(
	A2(
		$elm$core$List$cons,
		$gampleman$elm_visualization$Axis$tickCount(4),
		$author$project$LineStacked$sharedAttributes));
var $author$project$LineStacked$chart = F2(
	function (width, model) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'relative')
				]),
			_List_fromArray(
				[
					A2(
					$data_viz_lab$elm_chart_builder$Chart$Line$render,
					_Utils_Tuple2(model.data, $author$project$LineStacked$accessor),
					A2(
						$data_viz_lab$elm_chart_builder$Chart$Line$withXAxisCont,
						$author$project$LineStacked$xAxis,
						A2(
							$data_viz_lab$elm_chart_builder$Chart$Line$withYAxis,
							$author$project$LineStacked$yAxis,
							A2(
								$data_viz_lab$elm_chart_builder$Chart$Line$withLabels,
								$data_viz_lab$elm_chart_builder$Chart$Line$xGroupLabel,
								A2(
									$data_viz_lab$elm_chart_builder$Chart$Line$withLineStyle,
									_List_fromArray(
										[
											_Utils_Tuple2('opacity', '0.9')
										]),
									$data_viz_lab$elm_chart_builder$Chart$Line$asArea(
										A2(
											$data_viz_lab$elm_chart_builder$Chart$Line$withStackedLayout,
											$gampleman$elm_visualization$Shape$stackOffsetNone,
											A2(
												$data_viz_lab$elm_chart_builder$Chart$Line$withCurve,
												$gampleman$elm_visualization$Shape$naturalCurve,
												A2(
													$data_viz_lab$elm_chart_builder$Chart$Line$withColorPalette,
													$gampleman$elm_visualization$Scale$Color$tableau10,
													$data_viz_lab$elm_chart_builder$Chart$Line$init(
														{
															height: $author$project$Helpers$toChartHeight(
																$author$project$Helpers$toChartWidth(width)),
															margin: $author$project$Helpers$marginWithLabel,
															width: $author$project$Helpers$toChartWidth(width)
														}))))))))))
				]));
	});
var $author$project$LineStacked$desc = A2(
	$elm$html$Html$section,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$class('example__desc')
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$h3,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Continuous stacked area line chart')
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Population in millions')
				])),
			A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$href('https://github.com/data-viz-lab/elm-chart-builder-presentation/blob/main/src/LineStacked.elm')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('source')
				]))
		]));
var $author$project$LineStacked$view = F2(
	function (_v0, model) {
		var width = _v0.width;
		return _List_fromArray(
			[
				$author$project$LineStacked$desc,
				A2($author$project$LineStacked$chart, width, model),
				$author$project$CodePrev$codePrev($author$project$CodePrev$codePrevLine)
			]);
	});
var $author$project$Main$view = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('content')
			]),
		_List_fromArray(
			[
				$author$project$Main$introView(model),
				A2(
				$author$project$Main$exampleView,
				A2(
					$elm$core$List$map,
					$elm$html$Html$map($author$project$Main$LineAnimatedMsg),
					A2($author$project$LineAnimated$view, model, model.lineAnimated)),
				model),
				A2(
				$author$project$Main$exampleView,
				A2(
					$elm$core$List$map,
					$elm$html$Html$map($author$project$Main$LineStackedMsg),
					A2($author$project$LineStacked$view, model, model.lineStacked)),
				model),
				A2(
				$author$project$Main$exampleView,
				A2(
					$elm$core$List$map,
					$elm$html$Html$map($author$project$Main$LineMsg),
					A2($author$project$Line$view, model, model.line)),
				model),
				A2(
				$author$project$Main$exampleView,
				A2(
					$elm$core$List$map,
					$elm$html$Html$map($author$project$Main$BarStackedMsg),
					A2($author$project$BarStacked$view, model, model.barStacked)),
				model),
				$author$project$Main$footer
			]));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{init: $author$project$Main$init, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update, view: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (height) {
					return $elm$json$Json$Decode$succeed(
						{height: height, width: width});
				},
				A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$int));
		},
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$int)))(0)}});}(this));
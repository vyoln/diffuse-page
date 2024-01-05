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


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}


// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}


function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}


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




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});
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
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$url$Url$Http = {$: 'Http'};
var $author$project$Sources$Processing$NotProcessing = {$: 'NotProcessing'};
var $author$project$Brain$Types$SetCurrentTime = function (a) {
	return {$: 'SetCurrentTime', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $Gizra$elm_debouncer$Debouncer$Internal$Config = function (a) {
	return {$: 'Config', a: a};
};
var $Gizra$elm_debouncer$Debouncer$Internal$accumulateWith = F2(
	function (accumulator, _v0) {
		var config = _v0.a;
		return $Gizra$elm_debouncer$Debouncer$Internal$Config(
			{accumulator: accumulator, emitWhenUnsettled: config.emitWhenUnsettled, emitWhileUnsettled: config.emitWhileUnsettled, settleWhenQuietFor: config.settleWhenQuietFor});
	});
var $Gizra$elm_debouncer$Debouncer$Basic$accumulateWith = $Gizra$elm_debouncer$Debouncer$Internal$accumulateWith;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $Gizra$elm_debouncer$Debouncer$Internal$allInputs = F2(
	function (i, o) {
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$List$cons,
				i,
				A2($elm$core$Maybe$withDefault, _List_Nil, o)));
	});
var $Gizra$elm_debouncer$Debouncer$Basic$allInputs = $Gizra$elm_debouncer$Debouncer$Internal$allInputs;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $Gizra$elm_debouncer$Debouncer$Internal$lastInput = F2(
	function (i, o) {
		return $elm$core$Maybe$Just(i);
	});
var $Gizra$elm_debouncer$Debouncer$Internal$manual = $Gizra$elm_debouncer$Debouncer$Internal$Config(
	{accumulator: $Gizra$elm_debouncer$Debouncer$Internal$lastInput, emitWhenUnsettled: $elm$core$Maybe$Nothing, emitWhileUnsettled: $elm$core$Maybe$Nothing, settleWhenQuietFor: $elm$core$Maybe$Nothing});
var $Gizra$elm_debouncer$Debouncer$Basic$manual = $Gizra$elm_debouncer$Debouncer$Internal$manual;
var $Gizra$elm_debouncer$Debouncer$Internal$settleWhenQuietFor = F2(
	function (time, _v0) {
		var config = _v0.a;
		return $Gizra$elm_debouncer$Debouncer$Internal$Config(
			_Utils_update(
				config,
				{settleWhenQuietFor: time}));
	});
var $Gizra$elm_debouncer$Debouncer$Basic$settleWhenQuietFor = $Gizra$elm_debouncer$Debouncer$Internal$settleWhenQuietFor;
var $Gizra$elm_debouncer$Debouncer$Basic$debounce = function (interval) {
	return A2(
		$Gizra$elm_debouncer$Debouncer$Basic$settleWhenQuietFor,
		$elm$core$Maybe$Just(interval),
		$Gizra$elm_debouncer$Debouncer$Basic$manual);
};
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $author$project$Time$Ext$default = $elm$time$Time$millisToPosix(0);
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $author$project$User$Layer$emptyHypaethralData = {favourites: _List_Nil, modifiedAt: $elm$core$Maybe$Nothing, playlists: _List_Nil, progress: $elm$core$Dict$empty, settings: $elm$core$Maybe$Nothing, sources: _List_Nil, tracks: _List_Nil};
var $elm$core$Basics$round = _Basics_round;
var $Gizra$elm_debouncer$Debouncer$Internal$fromSeconds = function (s) {
	return $elm$core$Basics$round(s * 1000);
};
var $Gizra$elm_debouncer$Debouncer$Basic$fromSeconds = $Gizra$elm_debouncer$Debouncer$Internal$fromSeconds;
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
var $elm_community$maybe_extra$Maybe$Extra$join = function (mx) {
	if (mx.$ === 'Just') {
		var x = mx.a;
		return x;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$url$Url$Parser$State = F5(
	function (visited, unvisited, params, frag, value) {
		return {frag: frag, params: params, unvisited: unvisited, value: value, visited: visited};
	});
var $elm$url$Url$Parser$getFirstMatch = function (states) {
	getFirstMatch:
	while (true) {
		if (!states.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var state = states.a;
			var rest = states.b;
			var _v1 = state.unvisited;
			if (!_v1.b) {
				return $elm$core$Maybe$Just(state.value);
			} else {
				if ((_v1.a === '') && (!_v1.b.b)) {
					return $elm$core$Maybe$Just(state.value);
				} else {
					var $temp$states = rest;
					states = $temp$states;
					continue getFirstMatch;
				}
			}
		}
	}
};
var $elm$url$Url$Parser$removeFinalEmpty = function (segments) {
	if (!segments.b) {
		return _List_Nil;
	} else {
		if ((segments.a === '') && (!segments.b.b)) {
			return _List_Nil;
		} else {
			var segment = segments.a;
			var rest = segments.b;
			return A2(
				$elm$core$List$cons,
				segment,
				$elm$url$Url$Parser$removeFinalEmpty(rest));
		}
	}
};
var $elm$url$Url$Parser$preparePath = function (path) {
	var _v0 = A2($elm$core$String$split, '/', path);
	if (_v0.b && (_v0.a === '')) {
		var segments = _v0.b;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	} else {
		var segments = _v0;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	}
};
var $elm$url$Url$Parser$addToParametersHelp = F2(
	function (value, maybeList) {
		if (maybeList.$ === 'Nothing') {
			return $elm$core$Maybe$Just(
				_List_fromArray(
					[value]));
		} else {
			var list = maybeList.a;
			return $elm$core$Maybe$Just(
				A2($elm$core$List$cons, value, list));
		}
	});
var $elm$url$Url$percentDecode = _Url_percentDecode;
var $elm$core$Basics$compare = _Utils_compare;
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
var $elm$url$Url$Parser$addParam = F2(
	function (segment, dict) {
		var _v0 = A2($elm$core$String$split, '=', segment);
		if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
			var rawKey = _v0.a;
			var _v1 = _v0.b;
			var rawValue = _v1.a;
			var _v2 = $elm$url$Url$percentDecode(rawKey);
			if (_v2.$ === 'Nothing') {
				return dict;
			} else {
				var key = _v2.a;
				var _v3 = $elm$url$Url$percentDecode(rawValue);
				if (_v3.$ === 'Nothing') {
					return dict;
				} else {
					var value = _v3.a;
					return A3(
						$elm$core$Dict$update,
						key,
						$elm$url$Url$Parser$addToParametersHelp(value),
						dict);
				}
			}
		} else {
			return dict;
		}
	});
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
var $elm$url$Url$Parser$prepareQuery = function (maybeQuery) {
	if (maybeQuery.$ === 'Nothing') {
		return $elm$core$Dict$empty;
	} else {
		var qry = maybeQuery.a;
		return A3(
			$elm$core$List$foldr,
			$elm$url$Url$Parser$addParam,
			$elm$core$Dict$empty,
			A2($elm$core$String$split, '&', qry));
	}
};
var $elm$url$Url$Parser$parse = F2(
	function (_v0, url) {
		var parser = _v0.a;
		return $elm$url$Url$Parser$getFirstMatch(
			parser(
				A5(
					$elm$url$Url$Parser$State,
					_List_Nil,
					$elm$url$Url$Parser$preparePath(url.path),
					$elm$url$Url$Parser$prepareQuery(url.query),
					url.fragment,
					$elm$core$Basics$identity)));
	});
var $elm$url$Url$Parser$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$url$Url$Parser$query = function (_v0) {
	var queryParser = _v0.a;
	return $elm$url$Url$Parser$Parser(
		function (_v1) {
			var visited = _v1.visited;
			var unvisited = _v1.unvisited;
			var params = _v1.params;
			var frag = _v1.frag;
			var value = _v1.value;
			return _List_fromArray(
				[
					A5(
					$elm$url$Url$Parser$State,
					visited,
					unvisited,
					params,
					frag,
					value(
						queryParser(params)))
				]);
		});
};
var $elm$url$Url$Parser$Internal$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$url$Url$Parser$Query$custom = F2(
	function (key, func) {
		return $elm$url$Url$Parser$Internal$Parser(
			function (dict) {
				return func(
					A2(
						$elm$core$Maybe$withDefault,
						_List_Nil,
						A2($elm$core$Dict$get, key, dict)));
			});
	});
var $elm$url$Url$Parser$Query$string = function (key) {
	return A2(
		$elm$url$Url$Parser$Query$custom,
		key,
		function (stringList) {
			if (stringList.b && (!stringList.b.b)) {
				var str = stringList.a;
				return $elm$core$Maybe$Just(str);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		});
};
var $author$project$Url$Ext$extractQueryParam = F2(
	function (key, url) {
		return $elm_community$maybe_extra$Maybe$Extra$join(
			A2(
				$elm$url$Url$Parser$parse,
				$elm$url$Url$Parser$query(
					$elm$url$Url$Parser$Query$string(key)),
				_Utils_update(
					url,
					{path: ''})));
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
var $author$project$Url$Ext$action = function (url) {
	return A2(
		$elm$core$Maybe$withDefault,
		_List_Nil,
		A2(
			$elm$core$Maybe$map,
			$elm$core$String$split('/'),
			A2($author$project$Url$Ext$extractQueryParam, 'action', url)));
};
var $author$project$Alien$EnclosedData = {$: 'EnclosedData'};
var $author$project$Alien$LoadEnclosedUserData = {$: 'LoadEnclosedUserData'};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
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
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $lobanov$elm_taskport$TaskPort$interopErrorToString = function (error) {
	switch (error.$) {
		case 'NotInstalled':
			return 'NotInstalled: TaskPort JS component is not installed.';
		case 'NotFound':
			var msg = error.a;
			return 'NotFound: ' + msg;
		case 'NotCompatible':
			var msg = error.a;
			return 'NotCompatible: ' + msg;
		case 'CannotDecodeValue':
			var err = error.a;
			var value = error.b;
			return 'CannotDecodeValue: unable to decode JavaScript function return value.\n' + ('Value:\n' + (value + ('\n\n' + ('Decoding error:\n' + $elm$json$Json$Decode$errorToString(err)))));
		default:
			var msg = error.a;
			return 'RuntimeError: ' + msg;
	}
};
var $lobanov$elm_taskport$TaskPort$jsErrorToString = function (error) {
	if (error.$ === 'ErrorValue') {
		var v = error.a;
		return 'JSON object:\n' + A2($elm$json$Json$Encode$encode, 4, v);
	} else {
		var name = error.a;
		var o = error.b;
		return name + (': ' + (o.message + ('\n' + (A2($elm$core$String$join, '\n', o.stackLines) + A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (cause) {
					return '\nCaused by:\n' + $lobanov$elm_taskport$TaskPort$jsErrorToString(cause);
				},
				o.cause))))));
	}
};
var $lobanov$elm_taskport$TaskPort$errorToString = function (error) {
	if (error.$ === 'InteropError') {
		var e = error.a;
		return $lobanov$elm_taskport$TaskPort$interopErrorToString(e);
	} else {
		var e = error.a;
		return $lobanov$elm_taskport$TaskPort$jsErrorToString(e);
	}
};
var $author$project$TaskPort$Extra$errorToStringCustom = function (err) {
	if (err.$ === 'JSError') {
		var jsErr = err.a;
		if (jsErr.$ === 'ErrorObject') {
			var errRecord = jsErr.b;
			return errRecord.message;
		} else {
			return $lobanov$elm_taskport$TaskPort$errorToString(err);
		}
	} else {
		return $lobanov$elm_taskport$TaskPort$errorToString(err);
	}
};
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
var $author$project$Alien$ReportError = {$: 'ReportError'};
var $author$project$Brain$Types$Cmd = function (a) {
	return {$: 'Cmd', a: a};
};
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$Alien$AddTracks = {$: 'AddTracks'};
var $author$project$Alien$CollectFissionCapabilities = {$: 'CollectFissionCapabilities'};
var $author$project$Alien$DownloadTracks = {$: 'DownloadTracks'};
var $author$project$Alien$FinishedProcessingSource = {$: 'FinishedProcessingSource'};
var $author$project$Alien$FinishedProcessingSources = {$: 'FinishedProcessingSources'};
var $author$project$Alien$GotCachedCover = {$: 'GotCachedCover'};
var $author$project$Alien$HideLoadingScreen = {$: 'HideLoadingScreen'};
var $author$project$Alien$LoadHypaethralUserData = {$: 'LoadHypaethralUserData'};
var $author$project$Alien$ProcessSources = {$: 'ProcessSources'};
var $author$project$Alien$RefreshedAccessToken = {$: 'RefreshedAccessToken'};
var $author$project$Alien$ReloadTracks = {$: 'ReloadTracks'};
var $author$project$Alien$RemoveEncryptionKey = {$: 'RemoveEncryptionKey'};
var $author$project$Alien$RemoveTracksByPath = {$: 'RemoveTracksByPath'};
var $author$project$Alien$RemoveTracksBySourceId = {$: 'RemoveTracksBySourceId'};
var $author$project$Alien$RemoveTracksFromCache = {$: 'RemoveTracksFromCache'};
var $author$project$Alien$ReportProcessingError = {$: 'ReportProcessingError'};
var $author$project$Alien$ReportProcessingProgress = {$: 'ReportProcessingProgress'};
var $author$project$Alien$SaveEnclosedUserData = {$: 'SaveEnclosedUserData'};
var $author$project$Alien$SaveFavourites = {$: 'SaveFavourites'};
var $author$project$Alien$SavePlaylists = {$: 'SavePlaylists'};
var $author$project$Alien$SaveProgress = {$: 'SaveProgress'};
var $author$project$Alien$SaveSettings = {$: 'SaveSettings'};
var $author$project$Alien$SaveSources = {$: 'SaveSources'};
var $author$project$Alien$SaveTracks = {$: 'SaveTracks'};
var $author$project$Alien$SearchTracks = {$: 'SearchTracks'};
var $author$project$Alien$SecretKey = {$: 'SecretKey'};
var $author$project$Alien$SetSyncMethod = {$: 'SetSyncMethod'};
var $author$project$Alien$StartedSyncing = {$: 'StartedSyncing'};
var $author$project$Alien$StopProcessing = {$: 'StopProcessing'};
var $author$project$Alien$StoreTracksInCache = {$: 'StoreTracksInCache'};
var $author$project$Alien$SyncHypaethralData = {$: 'SyncHypaethralData'};
var $author$project$Alien$SyncLocal = {$: 'SyncLocal'};
var $author$project$Alien$SyncMethod = {$: 'SyncMethod'};
var $author$project$Alien$SyncTrackTags = {$: 'SyncTrackTags'};
var $author$project$Alien$ToCache = {$: 'ToCache'};
var $author$project$Alien$UnsetSyncMethod = {$: 'UnsetSyncMethod'};
var $author$project$Alien$UpdateEncryptionKey = {$: 'UpdateEncryptionKey'};
var $author$project$Alien$UpdateSourceData = {$: 'UpdateSourceData'};
var $elm$json$Json$Decode$fail = _Json_fail;
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
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $Herteby$enum$Enum$create = function (list) {
	var toString = function (a) {
		var _v1 = $elm$core$List$head(
			A2(
				$elm$core$List$filter,
				function (_v2) {
					var str = _v2.a;
					var b = _v2.b;
					return _Utils_eq(b, a);
				},
				list));
		if (_v1.$ === 'Just') {
			var _v3 = _v1.a;
			var str = _v3.a;
			var b = _v3.b;
			return str;
		} else {
			return 'Missing enum';
		}
	};
	var dict = $elm$core$Dict$fromList(list);
	var fromString = function (string) {
		return A2($elm$core$Dict$get, string, dict);
	};
	return {
		decoder: A2(
			$elm$json$Json$Decode$andThen,
			function (string) {
				var _v0 = A2($elm$core$Dict$get, string, dict);
				if (_v0.$ === 'Just') {
					var a = _v0.a;
					return $elm$json$Json$Decode$succeed(a);
				} else {
					return $elm$json$Json$Decode$fail('Missing enum: ' + string);
				}
			},
			$elm$json$Json$Decode$string),
		encode: A2($elm$core$Basics$composeR, toString, $elm$json$Json$Encode$string),
		fromString: fromString,
		list: list,
		toString: toString
	};
};
var $author$project$Alien$enum = $Herteby$enum$Enum$create(
	_List_fromArray(
		[
			_Utils_Tuple2('ENCLOSED_DATA', $author$project$Alien$EnclosedData),
			_Utils_Tuple2('SEARCH_TRACKS', $author$project$Alien$SearchTracks),
			_Utils_Tuple2('SECRET_KEY', $author$project$Alien$SecretKey),
			_Utils_Tuple2('SYNC_LOCAL', $author$project$Alien$SyncLocal),
			_Utils_Tuple2('SYNC_METHOD', $author$project$Alien$SyncMethod),
			_Utils_Tuple2('DOWNLOAD_TRACKS', $author$project$Alien$DownloadTracks),
			_Utils_Tuple2('PROCESS_SOURCES', $author$project$Alien$ProcessSources),
			_Utils_Tuple2('REFRESHED_ACCESS_TOKEN', $author$project$Alien$RefreshedAccessToken),
			_Utils_Tuple2('REMOVE_ENCRYPTION_KEY', $author$project$Alien$RemoveEncryptionKey),
			_Utils_Tuple2('REMOVE_TRACKS_BY_SOURCE_ID', $author$project$Alien$RemoveTracksBySourceId),
			_Utils_Tuple2('REMOVE_TRACKS_FROM_CACHE', $author$project$Alien$RemoveTracksFromCache),
			_Utils_Tuple2('SAVE_ENCLOSED_USER_DATA', $author$project$Alien$SaveEnclosedUserData),
			_Utils_Tuple2('SAVE_FAVOURITES', $author$project$Alien$SaveFavourites),
			_Utils_Tuple2('SAVE_PLAYLISTS', $author$project$Alien$SavePlaylists),
			_Utils_Tuple2('SAVE_PROGRESS', $author$project$Alien$SaveProgress),
			_Utils_Tuple2('SAVE_SETTINGS', $author$project$Alien$SaveSettings),
			_Utils_Tuple2('SAVE_SOURCES', $author$project$Alien$SaveSources),
			_Utils_Tuple2('SAVE_TRACKS', $author$project$Alien$SaveTracks),
			_Utils_Tuple2('SET_SYNC_METHOD', $author$project$Alien$SetSyncMethod),
			_Utils_Tuple2('STOP_PROCESSING', $author$project$Alien$StopProcessing),
			_Utils_Tuple2('STORE_TRACKS_IN_CACHE', $author$project$Alien$StoreTracksInCache),
			_Utils_Tuple2('SYNC_HYPAETHRAL_DATA', $author$project$Alien$SyncHypaethralData),
			_Utils_Tuple2('SYNC_TRACK_TAGS', $author$project$Alien$SyncTrackTags),
			_Utils_Tuple2('TO_CACHE', $author$project$Alien$ToCache),
			_Utils_Tuple2('UNSET_SYNC_METHOD', $author$project$Alien$UnsetSyncMethod),
			_Utils_Tuple2('UPDATE_ENCRYPTION_KEY', $author$project$Alien$UpdateEncryptionKey),
			_Utils_Tuple2('ADD_TRACKS', $author$project$Alien$AddTracks),
			_Utils_Tuple2('COLLECT_FISSION_CAPABILITIES', $author$project$Alien$CollectFissionCapabilities),
			_Utils_Tuple2('FINISHED_PROCESSING_SOURCE', $author$project$Alien$FinishedProcessingSource),
			_Utils_Tuple2('FINISHED_PROCESSING_SOURCES', $author$project$Alien$FinishedProcessingSources),
			_Utils_Tuple2('GOT_CACHED_COVER', $author$project$Alien$GotCachedCover),
			_Utils_Tuple2('HIDE_LOADING_SCREEN', $author$project$Alien$HideLoadingScreen),
			_Utils_Tuple2('LOAD_ENCLOSED_USER_DATA', $author$project$Alien$LoadEnclosedUserData),
			_Utils_Tuple2('LOAD_HYPAETHRAL_USER_DATA', $author$project$Alien$LoadHypaethralUserData),
			_Utils_Tuple2('RELOAD_TRACKS', $author$project$Alien$ReloadTracks),
			_Utils_Tuple2('REMOVE_TRACKS_BY_PATH', $author$project$Alien$RemoveTracksByPath),
			_Utils_Tuple2('REPORT_ERROR', $author$project$Alien$ReportError),
			_Utils_Tuple2('REPORT_PROCESSING_ERROR', $author$project$Alien$ReportProcessingError),
			_Utils_Tuple2('REPORT_PROCESSING_PROGRESS', $author$project$Alien$ReportProcessingProgress),
			_Utils_Tuple2('STARTED_SYNCING', $author$project$Alien$StartedSyncing),
			_Utils_Tuple2('UPDATE_SOURCE_DATA', $author$project$Alien$UpdateSourceData)
		]));
var $author$project$Alien$tagToString = $author$project$Alien$enum.toString;
var $author$project$Alien$report = F2(
	function (tag, error) {
		return {
			data: $elm$json$Json$Encode$null,
			error: $elm$core$Maybe$Just(error),
			tag: $author$project$Alien$tagToString(tag)
		};
	});
var $elm$core$Maybe$destruct = F3(
	function (_default, func, maybe) {
		if (maybe.$ === 'Just') {
			var a = maybe.a;
			return func(a);
		} else {
			return _default;
		}
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $author$project$Brain$Ports$toUI = _Platform_outgoingPort(
	'toUI',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'data',
					$elm$core$Basics$identity($.data)),
					_Utils_Tuple2(
					'error',
					function ($) {
						return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$string, $);
					}($.error)),
					_Utils_Tuple2(
					'tag',
					$elm$json$Json$Encode$string($.tag))
				]));
	});
var $author$project$Brain$Common$State$reportUICmd = F2(
	function (tag, error) {
		return $author$project$Brain$Ports$toUI(
			A2($author$project$Alien$report, tag, error));
	});
var $author$project$Brain$Common$State$reportUICmdMsg = F2(
	function (tag, error) {
		return $author$project$Brain$Types$Cmd(
			A2($author$project$Brain$Common$State$reportUICmd, tag, error));
	});
var $author$project$Brain$Common$State$reportErrorToUI = F2(
	function (mapFn, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return mapFn(value);
		} else {
			var error = result.a;
			return A2($author$project$Brain$Common$State$reportUICmdMsg, $author$project$Alien$ReportError, error);
		}
	});
var $author$project$Brain$Common$State$reportPortErrorToUI = function (mapFn) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Result$mapError($author$project$TaskPort$Extra$errorToStringCustom),
		$author$project$Brain$Common$State$reportErrorToUI(mapFn));
};
var $author$project$Brain$Common$State$attemptPortTask = function (mapFn) {
	return $elm$core$Task$attempt(
		$author$project$Brain$Common$State$reportPortErrorToUI(mapFn));
};
var $lobanov$elm_taskport$TaskPort$DefaultNS = function (a) {
	return {$: 'DefaultNS', a: a};
};
var $lobanov$elm_taskport$TaskPort$moduleVersion = '2.0.1';
var $lobanov$elm_taskport$TaskPort$buildCallUrl = function (_function) {
	if (_function.$ === 'DefaultNS') {
		var name = _function.a;
		return 'elmtaskport:///' + (name + ('?v=' + $lobanov$elm_taskport$TaskPort$moduleVersion));
	} else {
		var ns = _function.a;
		var nsVersion = _function.b;
		var name = _function.c;
		return 'elmtaskport://' + (ns + ('/' + (name + ('?v=' + ($lobanov$elm_taskport$TaskPort$moduleVersion + ('&nsv=' + nsVersion))))));
	}
};
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$http$Http$jsonBody = function (value) {
	return A2(
		_Http_pair,
		'application/json',
		A2($elm$json$Json$Encode$encode, 0, value));
};
var $lobanov$elm_taskport$TaskPort$CannotDecodeValue = F2(
	function (a, b) {
		return {$: 'CannotDecodeValue', a: a, b: b};
	});
var $lobanov$elm_taskport$TaskPort$InteropError = function (a) {
	return {$: 'InteropError', a: a};
};
var $lobanov$elm_taskport$TaskPort$JSError = function (a) {
	return {$: 'JSError', a: a};
};
var $lobanov$elm_taskport$TaskPort$NotCompatible = function (a) {
	return {$: 'NotCompatible', a: a};
};
var $lobanov$elm_taskport$TaskPort$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $lobanov$elm_taskport$TaskPort$NotInstalled = {$: 'NotInstalled'};
var $lobanov$elm_taskport$TaskPort$RuntimeError = function (a) {
	return {$: 'RuntimeError', a: a};
};
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $lobanov$elm_taskport$TaskPort$ErrorObject = F2(
	function (a, b) {
		return {$: 'ErrorObject', a: a, b: b};
	});
var $lobanov$elm_taskport$TaskPort$ErrorValue = function (a) {
	return {$: 'ErrorValue', a: a};
};
var $lobanov$elm_taskport$TaskPort$JSErrorRecord = F4(
	function (name, message, stackLines, cause) {
		return {cause: cause, message: message, name: name, stackLines: stackLines};
	});
var $elm$json$Json$Decode$lazy = function (thunk) {
	return A2(
		$elm$json$Json$Decode$andThen,
		thunk,
		$elm$json$Json$Decode$succeed(_Utils_Tuple0));
};
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$map4 = _Json_map4;
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$value = _Json_decodeValue;
function $lobanov$elm_taskport$TaskPort$cyclic$jsErrorDecoder() {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A3(
				$elm$json$Json$Decode$map2,
				$lobanov$elm_taskport$TaskPort$ErrorObject,
				A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
				$lobanov$elm_taskport$TaskPort$cyclic$jsErrorRecordDecoder()),
				A2($elm$json$Json$Decode$map, $lobanov$elm_taskport$TaskPort$ErrorValue, $elm$json$Json$Decode$value)
			]));
}
function $lobanov$elm_taskport$TaskPort$cyclic$jsErrorRecordDecoder() {
	return A5(
		$elm$json$Json$Decode$map4,
		$lobanov$elm_taskport$TaskPort$JSErrorRecord,
		A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
		A2($elm$json$Json$Decode$field, 'message', $elm$json$Json$Decode$string),
		A2(
			$elm$json$Json$Decode$field,
			'stackLines',
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
		A2(
			$elm$json$Json$Decode$field,
			'cause',
			$elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
						A2(
						$elm$json$Json$Decode$map,
						$elm$core$Maybe$Just,
						$elm$json$Json$Decode$lazy(
							function (_v0) {
								return $lobanov$elm_taskport$TaskPort$cyclic$jsErrorDecoder();
							}))
					]))));
}
try {
	var $lobanov$elm_taskport$TaskPort$jsErrorDecoder = $lobanov$elm_taskport$TaskPort$cyclic$jsErrorDecoder();
	$lobanov$elm_taskport$TaskPort$cyclic$jsErrorDecoder = function () {
		return $lobanov$elm_taskport$TaskPort$jsErrorDecoder;
	};
	var $lobanov$elm_taskport$TaskPort$jsErrorRecordDecoder = $lobanov$elm_taskport$TaskPort$cyclic$jsErrorRecordDecoder();
	$lobanov$elm_taskport$TaskPort$cyclic$jsErrorRecordDecoder = function () {
		return $lobanov$elm_taskport$TaskPort$jsErrorRecordDecoder;
	};
} catch ($) {
	throw 'Some top-level definitions from `TaskPort` are causing infinite recursion:\n\n  ┌─────┐\n  │    jsErrorDecoder\n  │     ↓\n  │    jsErrorRecordDecoder\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $lobanov$elm_taskport$TaskPort$runtimeError = function (msg) {
	return $elm$core$Result$Err(
		$lobanov$elm_taskport$TaskPort$InteropError(
			$lobanov$elm_taskport$TaskPort$RuntimeError('Runtime error in JavaScript interop: ' + (msg + '. JavaScript console may contain more information about the issue.'))));
};
var $lobanov$elm_taskport$TaskPort$resolveResponse = F2(
	function (valueDecoder, res) {
		switch (res.$) {
			case 'BadUrl_':
				var url = res.a;
				return $lobanov$elm_taskport$TaskPort$runtimeError('bad url ' + url);
			case 'Timeout_':
				return $lobanov$elm_taskport$TaskPort$runtimeError('timeout');
			case 'NetworkError_':
				return $elm$core$Result$Err(
					$lobanov$elm_taskport$TaskPort$InteropError($lobanov$elm_taskport$TaskPort$NotInstalled));
			case 'BadStatus_':
				var statusCode = res.a.statusCode;
				var body = res.b;
				if (statusCode === 400) {
					return $elm$core$Result$Err(
						$lobanov$elm_taskport$TaskPort$InteropError(
							$lobanov$elm_taskport$TaskPort$NotCompatible(body)));
				} else {
					if (statusCode === 404) {
						return $elm$core$Result$Err(
							$lobanov$elm_taskport$TaskPort$InteropError(
								$lobanov$elm_taskport$TaskPort$NotFound(body)));
					} else {
						if (statusCode === 500) {
							var _v1 = A2($elm$json$Json$Decode$decodeString, $lobanov$elm_taskport$TaskPort$jsErrorDecoder, body);
							if (_v1.$ === 'Ok') {
								var errorValue = _v1.a;
								return $elm$core$Result$Err(
									$lobanov$elm_taskport$TaskPort$JSError(errorValue));
							} else {
								var decodeError = _v1.a;
								return $elm$core$Result$Err(
									$lobanov$elm_taskport$TaskPort$InteropError(
										$lobanov$elm_taskport$TaskPort$RuntimeError(
											$elm$json$Json$Decode$errorToString(decodeError))));
							}
						} else {
							return $lobanov$elm_taskport$TaskPort$runtimeError(
								'unexpected status ' + $elm$core$String$fromInt(statusCode));
						}
					}
				}
			default:
				var body = res.b;
				var _v2 = A2($elm$json$Json$Decode$decodeString, valueDecoder, body);
				if (_v2.$ === 'Ok') {
					var returnValue = _v2.a;
					return $elm$core$Result$Ok(returnValue);
				} else {
					var decodeError = _v2.a;
					return $elm$core$Result$Err(
						$lobanov$elm_taskport$TaskPort$InteropError(
							A2($lobanov$elm_taskport$TaskPort$CannotDecodeValue, decodeError, body)));
				}
		}
	});
var $elm$http$Http$stringResolver = A2(_Http_expect, '', $elm$core$Basics$identity);
var $lobanov$elm_taskport$TaskPort$buildHttpCall = F3(
	function (_function, valueDecoder, args) {
		return {
			body: $elm$http$Http$jsonBody(args),
			headers: _List_Nil,
			method: 'POST',
			resolver: $elm$http$Http$stringResolver(
				$lobanov$elm_taskport$TaskPort$resolveResponse(valueDecoder)),
			timeout: $elm$core$Maybe$Nothing,
			url: $lobanov$elm_taskport$TaskPort$buildCallUrl(_function)
		};
	});
var $elm$core$Task$fail = _Scheduler_fail;
var $elm$http$Http$resultToTask = function (result) {
	if (result.$ === 'Ok') {
		var a = result.a;
		return $elm$core$Task$succeed(a);
	} else {
		var x = result.a;
		return $elm$core$Task$fail(x);
	}
};
var $elm$http$Http$task = function (r) {
	return A3(
		_Http_toTask,
		_Utils_Tuple0,
		$elm$http$Http$resultToTask,
		{allowCookiesFromOtherDomains: false, body: r.body, expect: r.resolver, headers: r.headers, method: r.method, timeout: r.timeout, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $lobanov$elm_taskport$TaskPort$callNS = F2(
	function (details, args) {
		return $elm$http$Http$task(
			A3(
				$lobanov$elm_taskport$TaskPort$buildHttpCall,
				details._function,
				details.valueDecoder,
				details.argsEncoder(args)));
	});
var $lobanov$elm_taskport$TaskPort$call = F2(
	function (details, args) {
		return A2(
			$lobanov$elm_taskport$TaskPort$callNS,
			{
				argsEncoder: details.argsEncoder,
				_function: $lobanov$elm_taskport$TaskPort$DefaultNS(details._function),
				valueDecoder: details.valueDecoder
			},
			args);
	});
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $author$project$Brain$Task$Ports$fromCache = F2(
	function (tag, decoder) {
		return A2(
			$lobanov$elm_taskport$TaskPort$call,
			{
				argsEncoder: $elm$json$Json$Encode$string,
				_function: 'fromCache',
				valueDecoder: $elm$json$Json$Decode$maybe(decoder)
			},
			$author$project$Alien$tagToString(tag));
	});
var $author$project$Alien$broadcast = F2(
	function (tag, data) {
		return {
			data: data,
			error: $elm$core$Maybe$Nothing,
			tag: $author$project$Alien$tagToString(tag)
		};
	});
var $author$project$Brain$Common$State$giveUICmd = F2(
	function (tag, data) {
		return $author$project$Brain$Ports$toUI(
			A2($author$project$Alien$broadcast, tag, data));
	});
var $author$project$Brain$Common$State$giveUICmdMsg = F2(
	function (tag, data) {
		return $author$project$Brain$Types$Cmd(
			A2($author$project$Brain$Common$State$giveUICmd, tag, data));
	});
var $author$project$Brain$User$State$loadEnclosedData = A2(
	$author$project$Brain$Common$State$attemptPortTask,
	$author$project$Brain$Common$State$giveUICmdMsg($author$project$Alien$LoadEnclosedUserData),
	A2(
		$elm$core$Task$map,
		$elm$core$Maybe$withDefault($elm$json$Json$Encode$null),
		A2($author$project$Brain$Task$Ports$fromCache, $author$project$Alien$EnclosedData, $elm$json$Json$Decode$value)));
var $author$project$Brain$User$Types$Commence = F3(
	function (a, b, c) {
		return {$: 'Commence', a: a, b: b, c: c};
	});
var $author$project$Brain$Types$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var $author$project$Brain$Common$State$attemptTask = function (mapFn) {
	return $elm$core$Task$attempt(
		$author$project$Brain$Common$State$reportErrorToUI(mapFn));
};
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $author$project$User$Layer$Favourites = {$: 'Favourites'};
var $author$project$User$Layer$ModifiedAt = {$: 'ModifiedAt'};
var $author$project$User$Layer$Playlists = {$: 'Playlists'};
var $author$project$User$Layer$Progress = {$: 'Progress'};
var $author$project$User$Layer$Settings = {$: 'Settings'};
var $author$project$User$Layer$Sources = {$: 'Sources'};
var $author$project$User$Layer$Tracks = {$: 'Tracks'};
var $author$project$Playlists$Playlist = F4(
	function (autoGenerated, name, _public, tracks) {
		return {autoGenerated: autoGenerated, name: name, _public: _public, tracks: tracks};
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $author$project$Json$Decode$Ext$optionalField = F3(
	function (field, decoder, defaultValue) {
		return A2(
			$elm$json$Json$Decode$map,
			$elm$core$Maybe$withDefault(defaultValue),
			$elm$json$Json$Decode$maybe(
				A2($elm$json$Json$Decode$field, field, decoder)));
	});
var $author$project$Playlists$PlaylistTrack = F3(
	function (album, artist, title) {
		return {album: album, artist: artist, title: title};
	});
var $elm$json$Json$Decode$map3 = _Json_map3;
var $author$project$Playlists$Encoding$playlistTrackDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$Playlists$PlaylistTrack,
	A2($elm$json$Json$Decode$field, 'album', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'artist', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string));
var $author$project$Playlists$Encoding$decoder = A5(
	$elm$json$Json$Decode$map4,
	$author$project$Playlists$Playlist,
	A2($elm$json$Json$Decode$field, 'autoGenerated', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A3($author$project$Json$Decode$Ext$optionalField, 'public', $elm$json$Json$Decode$bool, false),
	A2(
		$elm$json$Json$Decode$field,
		'tracks',
		$elm$json$Json$Decode$list($author$project$Playlists$Encoding$playlistTrackDecoder)));
var $author$project$Settings$Settings = F6(
	function (backgroundImage, coverSelectionReducesPool, hideDuplicates, lastFm, processAutomatically, rememberProgress) {
		return {backgroundImage: backgroundImage, coverSelectionReducesPool: coverSelectionReducesPool, hideDuplicates: hideDuplicates, lastFm: lastFm, processAutomatically: processAutomatically, rememberProgress: rememberProgress};
	});
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder = F3(
	function (path, valDecoder, fallback) {
		var nullOr = function (decoder) {
			return $elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						decoder,
						$elm$json$Json$Decode$null(fallback)
					]));
		};
		var handleResult = function (input) {
			var _v0 = A2(
				$elm$json$Json$Decode$decodeValue,
				A2($elm$json$Json$Decode$at, path, $elm$json$Json$Decode$value),
				input);
			if (_v0.$ === 'Ok') {
				var rawValue = _v0.a;
				var _v1 = A2(
					$elm$json$Json$Decode$decodeValue,
					nullOr(valDecoder),
					rawValue);
				if (_v1.$ === 'Ok') {
					var finalResult = _v1.a;
					return $elm$json$Json$Decode$succeed(finalResult);
				} else {
					return A2(
						$elm$json$Json$Decode$at,
						path,
						nullOr(valDecoder));
				}
			} else {
				return $elm$json$Json$Decode$succeed(fallback);
			}
		};
		return A2($elm$json$Json$Decode$andThen, handleResult, $elm$json$Json$Decode$value);
	});
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A3(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder,
				_List_fromArray(
					[key]),
				valDecoder,
				fallback),
			decoder);
	});
var $author$project$Settings$decoder = A4(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
	'rememberProgress',
	$elm$json$Json$Decode$bool,
	true,
	A4(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
		'processAutomatically',
		$elm$json$Json$Decode$bool,
		true,
		A4(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
			'lastFm',
			$elm$json$Json$Decode$maybe($elm$json$Json$Decode$string),
			$elm$core$Maybe$Nothing,
			A4(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
				'hideDuplicates',
				$elm$json$Json$Decode$bool,
				false,
				A4(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
					'coverSelectionReducesPool',
					$elm$json$Json$Decode$bool,
					true,
					A4(
						$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
						'backgroundImage',
						$elm$json$Json$Decode$maybe($elm$json$Json$Decode$string),
						$elm$core$Maybe$Nothing,
						$elm$json$Json$Decode$succeed($author$project$Settings$Settings)))))));
var $author$project$Sources$Source = F5(
	function (id, data, directoryPlaylists, enabled, service) {
		return {data: data, directoryPlaylists: directoryPlaylists, enabled: enabled, id: id, service: service};
	});
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm$json$Json$Decode$map5 = _Json_map5;
var $author$project$Sources$AmazonS3 = {$: 'AmazonS3'};
var $author$project$Sources$AzureBlob = {$: 'AzureBlob'};
var $author$project$Sources$AzureFile = {$: 'AzureFile'};
var $author$project$Sources$Btfs = {$: 'Btfs'};
var $author$project$Sources$Dropbox = {$: 'Dropbox'};
var $author$project$Sources$Google = {$: 'Google'};
var $author$project$Sources$Ipfs = {$: 'Ipfs'};
var $author$project$Sources$WebDav = {$: 'WebDav'};
var $author$project$Sources$Services$keyToType = function (str) {
	switch (str) {
		case 'AmazonS3':
			return $elm$core$Maybe$Just($author$project$Sources$AmazonS3);
		case 'AzureBlob':
			return $elm$core$Maybe$Just($author$project$Sources$AzureBlob);
		case 'AzureFile':
			return $elm$core$Maybe$Just($author$project$Sources$AzureFile);
		case 'Btfs':
			return $elm$core$Maybe$Just($author$project$Sources$Btfs);
		case 'Dropbox':
			return $elm$core$Maybe$Just($author$project$Sources$Dropbox);
		case 'Google':
			return $elm$core$Maybe$Just($author$project$Sources$Google);
		case 'Ipfs':
			return $elm$core$Maybe$Just($author$project$Sources$Ipfs);
		case 'WebDav':
			return $elm$core$Maybe$Just($author$project$Sources$WebDav);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Sources$Encoding$serviceDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (key) {
		var _v0 = $author$project$Sources$Services$keyToType(key);
		if (_v0.$ === 'Just') {
			var service = _v0.a;
			return $elm$json$Json$Decode$succeed(service);
		} else {
			return $elm$json$Json$Decode$fail('Unrecognizable source service');
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Sources$Encoding$decoder = A6(
	$elm$json$Json$Decode$map5,
	$author$project$Sources$Source,
	A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'data',
		$elm$json$Json$Decode$dict($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$map,
		$elm$core$Maybe$withDefault(true),
		$elm$json$Json$Decode$maybe(
			A2($elm$json$Json$Decode$field, 'directoryPlaylists', $elm$json$Json$Decode$bool))),
	A2(
		$elm$json$Json$Decode$map,
		$elm$core$Maybe$withDefault(true),
		$elm$json$Json$Decode$maybe(
			A2($elm$json$Json$Decode$field, 'enabled', $elm$json$Json$Decode$bool))),
	A2($elm$json$Json$Decode$field, 'service', $author$project$Sources$Encoding$serviceDecoder));
var $author$project$Tracks$Favourite = F2(
	function (artist, title) {
		return {artist: artist, title: title};
	});
var $author$project$Tracks$Encoding$favouriteDecoder = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Tracks$Favourite,
	A2($elm$json$Json$Decode$field, 'artist', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string));
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
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $author$project$User$Layer$hypaethralBitKey = function (bit) {
	switch (bit.$) {
		case 'Favourites':
			return 'favourites';
		case 'ModifiedAt':
			return 'modified';
		case 'Playlists':
			return 'playlists';
		case 'Progress':
			return 'progress';
		case 'Settings':
			return 'settings';
		case 'Sources':
			return 'sources';
		default:
			return 'tracks';
	}
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
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
var $elm_community$maybe_extra$Maybe$Extra$cons = F2(
	function (item, list) {
		if (item.$ === 'Just') {
			var v = item.a;
			return A2($elm$core$List$cons, v, list);
		} else {
			return list;
		}
	});
var $elm_community$maybe_extra$Maybe$Extra$values = A2($elm$core$List$foldr, $elm_community$maybe_extra$Maybe$Extra$cons, _List_Nil);
var $author$project$Json$Decode$Ext$listIgnore = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm_community$maybe_extra$Maybe$Extra$values,
		$elm$json$Json$Decode$list(
			$elm$json$Json$Decode$maybe(decoder)));
};
var $author$project$Time$Ext$decoder = A2($elm$json$Json$Decode$map, $elm$time$Time$millisToPosix, $elm$json$Json$Decode$int);
var $author$project$User$Layer$modifiedAtDecoder = function (decoder) {
	return A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (d, m) {
				return {data: d, modifiedAt: m};
			}),
		A2($elm$json$Json$Decode$field, 'data', decoder),
		$elm$json$Json$Decode$maybe(
			A2($elm$json$Json$Decode$field, 'modifiedAt', $author$project$Time$Ext$decoder)));
};
var $author$project$User$Layer$noModifiedAt = $elm$json$Json$Decode$map(
	function (data) {
		return {data: data, modifiedAt: $elm$core$Maybe$Nothing};
	});
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $elm$core$List$sortBy = _List_sortBy;
var $elm$core$List$sort = function (xs) {
	return A2($elm$core$List$sortBy, $elm$core$Basics$identity, xs);
};
var $author$project$Tracks$Track = F5(
	function (id, insertedAt, path, sourceId, tags) {
		return {id: id, insertedAt: insertedAt, path: path, sourceId: sourceId, tags: tags};
	});
var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2($elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var $author$project$Tracks$Tags = F8(
	function (disc, nr, album, artist, title, genre, picture, year) {
		return {album: album, artist: artist, disc: disc, genre: genre, nr: nr, picture: picture, title: title, year: year};
	});
var $elm$json$Json$Decode$map8 = _Json_map8;
var $author$project$Tracks$Encoding$tagsDecoder = A9(
	$elm$json$Json$Decode$map8,
	$author$project$Tracks$Tags,
	A2($elm$json$Json$Decode$field, 'disc', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'nr', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'album', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'artist', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string),
	$elm$json$Json$Decode$maybe(
		A2($elm$json$Json$Decode$field, 'genre', $elm$json$Json$Decode$string)),
	$elm$json$Json$Decode$maybe(
		A2($elm$json$Json$Decode$field, 'picture', $elm$json$Json$Decode$string)),
	$elm$json$Json$Decode$maybe(
		A2($elm$json$Json$Decode$field, 'year', $elm$json$Json$Decode$int)));
var $author$project$Tracks$Encoding$trackDecoder = A3(
	$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'tags',
	$author$project$Tracks$Encoding$tagsDecoder,
	A3(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'sourceId',
		$elm$json$Json$Decode$string,
		A3(
			$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'path',
			$elm$json$Json$Decode$string,
			A4(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
				'insertedAt',
				$author$project$Time$Ext$decoder,
				$author$project$Time$Ext$default,
				A3(
					$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'id',
					$elm$json$Json$Decode$string,
					$elm$json$Json$Decode$succeed($author$project$Tracks$Track))))));
var $author$project$User$Layer$hypaethralDataDecoder = function () {
	var optionalWithPossiblyData = F4(
		function (key, dec, def, a) {
			return A4(
				$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
				$author$project$User$Layer$hypaethralBitKey(key),
				$elm$json$Json$Decode$oneOf(
					_List_fromArray(
						[
							$author$project$User$Layer$modifiedAtDecoder(dec),
							$author$project$User$Layer$noModifiedAt(dec)
						])),
				{data: def, modifiedAt: $elm$core$Maybe$Nothing},
				a);
		});
	return A4(
		$NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
		$author$project$User$Layer$hypaethralBitKey($author$project$User$Layer$ModifiedAt),
		$elm$json$Json$Decode$maybe($elm$json$Json$Decode$int),
		$elm$core$Maybe$Nothing,
		A4(
			optionalWithPossiblyData,
			$author$project$User$Layer$Tracks,
			$author$project$Json$Decode$Ext$listIgnore($author$project$Tracks$Encoding$trackDecoder),
			_List_Nil,
			A4(
				optionalWithPossiblyData,
				$author$project$User$Layer$Sources,
				$author$project$Json$Decode$Ext$listIgnore($author$project$Sources$Encoding$decoder),
				_List_Nil,
				A4(
					optionalWithPossiblyData,
					$author$project$User$Layer$Settings,
					$elm$json$Json$Decode$maybe($author$project$Settings$decoder),
					$elm$core$Maybe$Nothing,
					A4(
						optionalWithPossiblyData,
						$author$project$User$Layer$Progress,
						$elm$json$Json$Decode$dict($elm$json$Json$Decode$float),
						$elm$core$Dict$empty,
						A4(
							optionalWithPossiblyData,
							$author$project$User$Layer$Playlists,
							$author$project$Json$Decode$Ext$listIgnore($author$project$Playlists$Encoding$decoder),
							_List_Nil,
							A4(
								optionalWithPossiblyData,
								$author$project$User$Layer$Favourites,
								$author$project$Json$Decode$Ext$listIgnore($author$project$Tracks$Encoding$favouriteDecoder),
								_List_Nil,
								$elm$json$Json$Decode$succeed(
									F7(
										function (fav, pla, pro, set, sor, tra, mod) {
											return {
												favourites: fav.data,
												modifiedAt: function () {
													if (mod.$ === 'Just') {
														var m = mod.a;
														return $elm$core$Maybe$Just(
															$elm$time$Time$millisToPosix(m));
													} else {
														return A2(
															$elm$core$Maybe$map,
															$elm$time$Time$millisToPosix,
															$elm_community$list_extra$List$Extra$last(
																$elm$core$List$sort(
																	A2(
																		$elm$core$List$filterMap,
																		$elm$core$Maybe$map($elm$time$Time$posixToMillis),
																		_List_fromArray(
																			[fav.modifiedAt, pla.modifiedAt, pro.modifiedAt, set.modifiedAt, sor.modifiedAt, tra.modifiedAt])))));
													}
												}(),
												playlists: pla.data,
												progress: pro.data,
												settings: set.data,
												sources: sor.data,
												tracks: tra.data
											};
										})))))))));
}();
var $author$project$User$Layer$decodeHypaethralData = $elm$json$Json$Decode$decodeValue($author$project$User$Layer$hypaethralDataDecoder);
var $author$project$User$Layer$allHypaethralBits = _List_fromArray(
	[$author$project$User$Layer$Favourites, $author$project$User$Layer$Playlists, $author$project$User$Layer$Progress, $author$project$User$Layer$Settings, $author$project$User$Layer$Sources, $author$project$User$Layer$Tracks]);
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$json$Json$Encode$dict = F3(
	function (toKey, toValue, dictionary) {
		return _Json_wrap(
			A3(
				$elm$core$Dict$foldl,
				F3(
					function (key, value, obj) {
						return A3(
							_Json_addField,
							toKey(key),
							toValue(value),
							obj);
					}),
				_Json_emptyObject(_Utils_Tuple0),
				dictionary));
	});
var $elm$json$Json$Encode$bool = _Json_wrap;
var $author$project$Playlists$Encoding$encodePlaylistTrack = function (playlistTrack) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'album',
				$elm$json$Json$Encode$string(playlistTrack.album)),
				_Utils_Tuple2(
				'artist',
				$elm$json$Json$Encode$string(playlistTrack.artist)),
				_Utils_Tuple2(
				'title',
				$elm$json$Json$Encode$string(playlistTrack.title))
			]));
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $author$project$Playlists$Encoding$encode = function (playlist) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'autoGenerated',
				$elm$json$Json$Encode$bool(playlist.autoGenerated)),
				_Utils_Tuple2(
				'name',
				$elm$json$Json$Encode$string(playlist.name)),
				_Utils_Tuple2(
				'public',
				$elm$json$Json$Encode$bool(playlist._public)),
				_Utils_Tuple2(
				'tracks',
				A2($elm$json$Json$Encode$list, $author$project$Playlists$Encoding$encodePlaylistTrack, playlist.tracks))
			]));
};
var $elm_community$maybe_extra$Maybe$Extra$unwrap = F3(
	function (_default, f, m) {
		if (m.$ === 'Nothing') {
			return _default;
		} else {
			var a = m.a;
			return f(a);
		}
	});
var $author$project$Settings$encode = function (settings) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'backgroundImage',
				A3($elm_community$maybe_extra$Maybe$Extra$unwrap, $elm$json$Json$Encode$null, $elm$json$Json$Encode$string, settings.backgroundImage)),
				_Utils_Tuple2(
				'coverSelectionReducesPool',
				$elm$json$Json$Encode$bool(settings.coverSelectionReducesPool)),
				_Utils_Tuple2(
				'hideDuplicates',
				$elm$json$Json$Encode$bool(settings.hideDuplicates)),
				_Utils_Tuple2(
				'lastFm',
				A3($elm_community$maybe_extra$Maybe$Extra$unwrap, $elm$json$Json$Encode$null, $elm$json$Json$Encode$string, settings.lastFm)),
				_Utils_Tuple2(
				'processAutomatically',
				$elm$json$Json$Encode$bool(settings.processAutomatically)),
				_Utils_Tuple2(
				'rememberProgress',
				$elm$json$Json$Encode$bool(settings.rememberProgress))
			]));
};
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $author$project$Sources$Encoding$encodeData = function (data) {
	return $elm$json$Json$Encode$object(
		A2(
			$elm$core$List$map,
			$elm$core$Tuple$mapSecond($elm$json$Json$Encode$string),
			$elm$core$Dict$toList(data)));
};
var $author$project$Sources$Services$typeToKey = function (service) {
	switch (service.$) {
		case 'AmazonS3':
			return 'AmazonS3';
		case 'AzureBlob':
			return 'AzureBlob';
		case 'AzureFile':
			return 'AzureFile';
		case 'Btfs':
			return 'Btfs';
		case 'Dropbox':
			return 'Dropbox';
		case 'Google':
			return 'Google';
		case 'Ipfs':
			return 'Ipfs';
		default:
			return 'WebDav';
	}
};
var $author$project$Sources$Encoding$encode = function (source) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'id',
				$elm$json$Json$Encode$string(source.id)),
				_Utils_Tuple2(
				'data',
				$author$project$Sources$Encoding$encodeData(source.data)),
				_Utils_Tuple2(
				'directoryPlaylists',
				$elm$json$Json$Encode$bool(source.directoryPlaylists)),
				_Utils_Tuple2(
				'enabled',
				$elm$json$Json$Encode$bool(source.enabled)),
				_Utils_Tuple2(
				'service',
				$elm$json$Json$Encode$string(
					$author$project$Sources$Services$typeToKey(source.service)))
			]));
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$Time$Ext$encode = function (time) {
	return $elm$json$Json$Encode$int(
		$elm$time$Time$posixToMillis(time));
};
var $author$project$Tracks$Encoding$encodeFavourite = function (fav) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'artist',
				$elm$json$Json$Encode$string(fav.artist)),
				_Utils_Tuple2(
				'title',
				$elm$json$Json$Encode$string(fav.title))
			]));
};
var $author$project$Tracks$Encoding$encodeMaybe = F2(
	function (maybe, encoder) {
		return A2(
			$elm$core$Maybe$withDefault,
			$elm$json$Json$Encode$null,
			A2($elm$core$Maybe$map, encoder, maybe));
	});
var $author$project$Tracks$Encoding$encodeTags = function (tags) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'disc',
				$elm$json$Json$Encode$int(tags.disc)),
				_Utils_Tuple2(
				'nr',
				$elm$json$Json$Encode$int(tags.nr)),
				_Utils_Tuple2(
				'album',
				$elm$json$Json$Encode$string(tags.album)),
				_Utils_Tuple2(
				'artist',
				$elm$json$Json$Encode$string(tags.artist)),
				_Utils_Tuple2(
				'title',
				$elm$json$Json$Encode$string(tags.title)),
				_Utils_Tuple2(
				'genre',
				A2($author$project$Tracks$Encoding$encodeMaybe, tags.genre, $elm$json$Json$Encode$string)),
				_Utils_Tuple2(
				'picture',
				A2($author$project$Tracks$Encoding$encodeMaybe, tags.picture, $elm$json$Json$Encode$string)),
				_Utils_Tuple2(
				'year',
				A2($author$project$Tracks$Encoding$encodeMaybe, tags.year, $elm$json$Json$Encode$int))
			]));
};
var $author$project$Tracks$Encoding$encodeTrack = function (track) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'id',
				$elm$json$Json$Encode$string(track.id)),
				_Utils_Tuple2(
				'insertedAt',
				$author$project$Time$Ext$encode(track.insertedAt)),
				_Utils_Tuple2(
				'path',
				$elm$json$Json$Encode$string(track.path)),
				_Utils_Tuple2(
				'sourceId',
				$elm$json$Json$Encode$string(track.sourceId)),
				_Utils_Tuple2(
				'tags',
				$author$project$Tracks$Encoding$encodeTags(track.tags))
			]));
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $author$project$User$Layer$encodeHypaethralBit = F2(
	function (bit, _v0) {
		var favourites = _v0.favourites;
		var playlists = _v0.playlists;
		var progress = _v0.progress;
		var settings = _v0.settings;
		var sources = _v0.sources;
		var tracks = _v0.tracks;
		var modifiedAt = _v0.modifiedAt;
		if (bit.$ === 'ModifiedAt') {
			return A3($elm_community$maybe_extra$Maybe$Extra$unwrap, $elm$json$Json$Encode$null, $author$project$Time$Ext$encode, modifiedAt);
		} else {
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'data',
						function () {
							switch (bit.$) {
								case 'Favourites':
									return A2($elm$json$Json$Encode$list, $author$project$Tracks$Encoding$encodeFavourite, favourites);
								case 'ModifiedAt':
									return A3($elm_community$maybe_extra$Maybe$Extra$unwrap, $elm$json$Json$Encode$null, $author$project$Time$Ext$encode, modifiedAt);
								case 'Playlists':
									return A2($elm$json$Json$Encode$list, $author$project$Playlists$Encoding$encode, playlists);
								case 'Progress':
									return A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $elm$json$Json$Encode$float, progress);
								case 'Settings':
									return A3($elm_community$maybe_extra$Maybe$Extra$unwrap, $elm$json$Json$Encode$null, $author$project$Settings$encode, settings);
								case 'Sources':
									return A2($elm$json$Json$Encode$list, $author$project$Sources$Encoding$encode, sources);
								default:
									return A2($elm$json$Json$Encode$list, $author$project$Tracks$Encoding$encodeTrack, tracks);
							}
						}()),
						_Utils_Tuple2(
						'modifiedAt',
						A3($elm_community$maybe_extra$Maybe$Extra$unwrap, $elm$json$Json$Encode$null, $author$project$Time$Ext$encode, modifiedAt))
					]));
		}
	});
var $author$project$User$Layer$encodedHypaethralDataList = function (data) {
	return A2(
		$elm$core$List$map,
		function (bit) {
			return _Utils_Tuple2(
				bit,
				A2($author$project$User$Layer$encodeHypaethralBit, bit, data));
		},
		$author$project$User$Layer$allHypaethralBits);
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $author$project$User$Layer$encodeHypaethralData = function (data) {
	return $elm$json$Json$Encode$object(
		A2(
			$elm$core$List$map,
			$elm$core$Tuple$mapFirst($author$project$User$Layer$hypaethralBitKey),
			$author$project$User$Layer$encodedHypaethralDataList(data)));
};
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
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$User$Layer$hypaethralBit = $Herteby$enum$Enum$create(
	A2(
		$elm$core$List$map,
		function (bit) {
			return _Utils_Tuple2(
				$author$project$User$Layer$hypaethralBitKey(bit),
				bit);
		},
		$author$project$User$Layer$allHypaethralBits));
var $author$project$User$Layer$retrieveHypaethralData = function (retrievalFn) {
	return $elm$core$Task$sequence(
		A2(
			$elm$core$List$map,
			function (_v0) {
				var bit = _v0.b;
				return A2(
					$elm$core$Task$map,
					function (value) {
						return _Utils_Tuple2(bit, value);
					},
					retrievalFn(bit));
			},
			$author$project$User$Layer$hypaethralBit.list));
};
var $author$project$Brain$Task$Ports$fromCacheWithSuffix = F3(
	function (tag, suffix, decoder) {
		return A2(
			$lobanov$elm_taskport$TaskPort$call,
			{
				argsEncoder: $elm$json$Json$Encode$string,
				_function: 'fromCache',
				valueDecoder: $elm$json$Json$Decode$maybe(decoder)
			},
			$author$project$Alien$tagToString(tag) + ('_' + suffix));
	});
var $author$project$User$Layer$hypaethralBitFileName = function (bit) {
	return $author$project$User$Layer$hypaethralBitKey(bit) + '.json';
};
var $elm$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			$elm$core$Task$onError,
			A2($elm$core$Basics$composeL, $elm$core$Task$fail, convert),
			task);
	});
var $author$project$Brain$User$Hypaethral$retrieveLocal = function (bit) {
	return A2(
		$elm$core$Task$mapError,
		$author$project$TaskPort$Extra$errorToStringCustom,
		A3(
			$author$project$Brain$Task$Ports$fromCacheWithSuffix,
			$author$project$Alien$SyncLocal,
			$author$project$User$Layer$hypaethralBitFileName(bit),
			$elm$json$Json$Decode$value));
};
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $author$project$Brain$User$State$loadLocalHypaethralData = function (_v0) {
	var initialUrl = _v0.initialUrl;
	var methodTask = _v0.methodTask;
	return A2(
		$author$project$Brain$Common$State$attemptTask,
		function (_v2) {
			var maybeMethod = _v2.a;
			var hypaethralJson = _v2.b;
			return $author$project$Brain$Types$UserMsg(
				A3(
					$author$project$Brain$User$Types$Commence,
					maybeMethod,
					initialUrl,
					A2(
						$elm$core$Result$withDefault,
						_Utils_Tuple2(
							$author$project$User$Layer$encodeHypaethralData($author$project$User$Layer$emptyHypaethralData),
							$author$project$User$Layer$emptyHypaethralData),
						A2(
							$elm$core$Result$map,
							function (hypaethralData) {
								return _Utils_Tuple2(hypaethralJson, hypaethralData);
							},
							$author$project$User$Layer$decodeHypaethralData(hypaethralJson)))));
		},
		A2(
			$elm$core$Task$andThen,
			function (maybeMethod) {
				return A2(
					$elm$core$Task$map,
					$elm$core$Tuple$pair(maybeMethod),
					A2(
						$elm$core$Task$map,
						function (bits) {
							return $elm$json$Json$Encode$object(
								A2(
									$elm$core$List$map,
									function (_v1) {
										var a = _v1.a;
										var b = _v1.b;
										return _Utils_Tuple2(
											$author$project$User$Layer$hypaethralBitKey(a),
											A2($elm$core$Maybe$withDefault, $elm$json$Json$Encode$null, b));
									},
									bits));
						},
						$author$project$User$Layer$retrieveHypaethralData($author$project$Brain$User$Hypaethral$retrieveLocal)));
			},
			methodTask));
};
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$User$Layer$Dropbox = function (a) {
	return {$: 'Dropbox', a: a};
};
var $author$project$User$Layer$Fission = function (a) {
	return {$: 'Fission', a: a};
};
var $author$project$User$Layer$Ipfs = function (a) {
	return {$: 'Ipfs', a: a};
};
var $author$project$User$Layer$RemoteStorage = function (a) {
	return {$: 'RemoteStorage', a: a};
};
var $author$project$User$Layer$methodSeparator = '___';
var $author$project$User$Layer$methodFromString = function (string) {
	var _v0 = A2($elm$core$String$split, $author$project$User$Layer$methodSeparator, string);
	_v0$4:
	while (true) {
		if (_v0.b) {
			if (!_v0.b.b) {
				if (_v0.a === 'FISSION') {
					return $elm$core$Maybe$Just(
						$author$project$User$Layer$Fission(
							{}));
				} else {
					break _v0$4;
				}
			} else {
				if (!_v0.b.b.b) {
					if (_v0.a === 'IPFS') {
						var _v4 = _v0.b;
						var a = _v4.a;
						return $elm$core$Maybe$Just(
							$author$project$User$Layer$Ipfs(
								{apiOrigin: a}));
					} else {
						break _v0$4;
					}
				} else {
					if (_v0.b.b.b.b) {
						if ((_v0.a === 'DROPBOX') && (!_v0.b.b.b.b.b)) {
							var _v1 = _v0.b;
							var a = _v1.a;
							var _v2 = _v1.b;
							var e = _v2.a;
							var _v3 = _v2.b;
							var r = _v3.a;
							return $elm$core$Maybe$Just(
								$author$project$User$Layer$Dropbox(
									{
										accessToken: a,
										expiresAt: A2(
											$elm$core$Maybe$withDefault,
											0,
											$elm$core$String$toInt(e)),
										refreshToken: r
									}));
						} else {
							break _v0$4;
						}
					} else {
						if (_v0.a === 'REMOTE_STORAGE') {
							var _v5 = _v0.b;
							var u = _v5.a;
							var _v6 = _v5.b;
							var t = _v6.a;
							return $elm$core$Maybe$Just(
								$author$project$User$Layer$RemoteStorage(
									{token: t, userAddress: u}));
						} else {
							break _v0$4;
						}
					}
				}
			}
		} else {
			break _v0$4;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $elm$core$Result$toMaybe = function (result) {
	if (result.$ === 'Ok') {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$User$Layer$decodeMethod = A2(
	$elm$core$Basics$composeR,
	$elm$json$Json$Decode$decodeValue(
		A2($elm$json$Json$Decode$map, $author$project$User$Layer$methodFromString, $elm$json$Json$Decode$string)),
	A2($elm$core$Basics$composeR, $elm$core$Result$toMaybe, $elm_community$maybe_extra$Maybe$Extra$join));
var $author$project$Brain$User$State$loadSyncMethod = A2(
	$elm$core$Task$map,
	$elm$core$Maybe$andThen($author$project$User$Layer$decodeMethod),
	A2(
		$elm$core$Task$mapError,
		$author$project$TaskPort$Extra$errorToStringCustom,
		A2($author$project$Brain$Task$Ports$fromCache, $author$project$Alien$SyncMethod, $elm$json$Json$Decode$value)));
var $author$project$Brain$User$State$initialCommand = function (uiUrl) {
	var _v0 = $author$project$Url$Ext$action(uiUrl);
	if ((((_v0.b && (_v0.a === 'authenticate')) && _v0.b.b) && (_v0.b.a === 'fission')) && (!_v0.b.b.b)) {
		var _v1 = _v0.b;
		return $elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					$author$project$Brain$User$State$loadEnclosedData,
					$author$project$Brain$User$State$loadLocalHypaethralData(
					{
						initialUrl: uiUrl,
						methodTask: $elm$core$Task$succeed($elm$core$Maybe$Nothing)
					})
				]));
	} else {
		return $elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					$author$project$Brain$User$State$loadEnclosedData,
					$author$project$Brain$User$State$loadLocalHypaethralData(
					{initialUrl: uiUrl, methodTask: $author$project$Brain$User$State$loadSyncMethod})
				]));
	}
};
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $Gizra$elm_debouncer$Debouncer$Internal$Debouncer = F2(
	function (a, b) {
		return {$: 'Debouncer', a: a, b: b};
	});
var $Gizra$elm_debouncer$Debouncer$Internal$Settled = {$: 'Settled'};
var $Gizra$elm_debouncer$Debouncer$Internal$nothingIfNegative = $elm$core$Maybe$andThen(
	function (num) {
		return (num < 0) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(num);
	});
var $Gizra$elm_debouncer$Debouncer$Internal$sanitizeConfig = function (_v0) {
	var config = _v0.a;
	return $Gizra$elm_debouncer$Debouncer$Internal$Config(
		{
			accumulator: config.accumulator,
			emitWhenUnsettled: $Gizra$elm_debouncer$Debouncer$Internal$nothingIfNegative(config.emitWhenUnsettled),
			emitWhileUnsettled: $Gizra$elm_debouncer$Debouncer$Internal$nothingIfNegative(config.emitWhileUnsettled),
			settleWhenQuietFor: $Gizra$elm_debouncer$Debouncer$Internal$nothingIfNegative(config.settleWhenQuietFor)
		});
};
var $Gizra$elm_debouncer$Debouncer$Internal$toDebouncer = function (config) {
	return A2(
		$Gizra$elm_debouncer$Debouncer$Internal$Debouncer,
		$Gizra$elm_debouncer$Debouncer$Internal$sanitizeConfig(config),
		$Gizra$elm_debouncer$Debouncer$Internal$Settled);
};
var $Gizra$elm_debouncer$Debouncer$Basic$toDebouncer = $Gizra$elm_debouncer$Debouncer$Internal$toDebouncer;
var $author$project$Brain$init = function (flags) {
	var initialUrl = A2(
		$elm$core$Maybe$withDefault,
		{fragment: $elm$core$Maybe$Nothing, host: '', path: '', port_: $elm$core$Maybe$Nothing, protocol: $elm$url$Url$Http, query: $elm$core$Maybe$Nothing},
		$elm$url$Url$fromString(flags.initialUrl));
	var hypDebouncer = $Gizra$elm_debouncer$Debouncer$Basic$toDebouncer(
		A2(
			$Gizra$elm_debouncer$Debouncer$Basic$accumulateWith,
			$Gizra$elm_debouncer$Debouncer$Basic$allInputs,
			$Gizra$elm_debouncer$Debouncer$Basic$debounce(
				$Gizra$elm_debouncer$Debouncer$Basic$fromSeconds(2.5))));
	return _Utils_Tuple2(
		{currentTime: $author$project$Time$Ext$default, hypaethralDebouncer: hypDebouncer, hypaethralRetrieval: $elm$core$Maybe$Nothing, hypaethralStorage: _List_Nil, hypaethralUserData: $author$project$User$Layer$emptyHypaethralData, origin: 'ORIGIN_UNKNOWN', processingStatus: $author$project$Sources$Processing$NotProcessing, userSyncMethod: $elm$core$Maybe$Nothing},
		$elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					A2($elm$core$Task$perform, $author$project$Brain$Types$SetCurrentTime, $elm$time$Time$now),
					$author$project$Brain$User$State$initialCommand(initialUrl)
				])));
};
var $author$project$Brain$Types$GotSearchResults = function (a) {
	return {$: 'GotSearchResults', a: a};
};
var $author$project$Brain$Types$MakeArtworkTrackUrls = function (a) {
	return {$: 'MakeArtworkTrackUrls', a: a};
};
var $author$project$Brain$Types$ProcessingMsg = function (a) {
	return {$: 'ProcessingMsg', a: a};
};
var $author$project$Brain$Types$RefreshedAccessToken = function (a) {
	return {$: 'RefreshedAccessToken', a: a};
};
var $author$project$Brain$Types$ReplaceTrackTags = function (a) {
	return {$: 'ReplaceTrackTags', a: a};
};
var $author$project$Brain$Sources$Processing$Types$TagsStep = function (a) {
	return {$: 'TagsStep', a: a};
};
var $author$project$Brain$Types$Bypass = {$: 'Bypass'};
var $author$project$Alien$tagFromString = $author$project$Alien$enum.fromString;
var $author$project$Brain$Types$DownloadTracks = function (a) {
	return {$: 'DownloadTracks', a: a};
};
var $author$project$Brain$User$Types$EnclosedDataRetrieved = function (a) {
	return {$: 'EnclosedDataRetrieved', a: a};
};
var $author$project$Brain$Sources$Processing$Types$Process = function (a) {
	return {$: 'Process', a: a};
};
var $author$project$Brain$User$Types$RemoveEncryptionKey = {$: 'RemoveEncryptionKey'};
var $author$project$Brain$Types$RemoveTracksBySourceId = function (a) {
	return {$: 'RemoveTracksBySourceId', a: a};
};
var $author$project$Brain$Types$RemoveTracksFromCache = function (a) {
	return {$: 'RemoveTracksFromCache', a: a};
};
var $author$project$Brain$User$Types$SaveEnclosedData = function (a) {
	return {$: 'SaveEnclosedData', a: a};
};
var $author$project$Brain$User$Types$SaveFavourites = function (a) {
	return {$: 'SaveFavourites', a: a};
};
var $author$project$Brain$User$Types$SavePlaylists = function (a) {
	return {$: 'SavePlaylists', a: a};
};
var $author$project$Brain$User$Types$SaveProgress = function (a) {
	return {$: 'SaveProgress', a: a};
};
var $author$project$Brain$User$Types$SaveSettings = function (a) {
	return {$: 'SaveSettings', a: a};
};
var $author$project$Brain$User$Types$SaveSources = function (a) {
	return {$: 'SaveSources', a: a};
};
var $author$project$Brain$User$Types$SaveTracks = function (a) {
	return {$: 'SaveTracks', a: a};
};
var $author$project$Brain$Types$Search = function (a) {
	return {$: 'Search', a: a};
};
var $author$project$Brain$User$Types$SetSyncMethod = function (a) {
	return {$: 'SetSyncMethod', a: a};
};
var $author$project$Brain$Sources$Processing$Types$StopProcessing = {$: 'StopProcessing'};
var $author$project$Brain$Types$StoreTracksInCache = function (a) {
	return {$: 'StoreTracksInCache', a: a};
};
var $author$project$Brain$Types$SyncTrackTags = function (a) {
	return {$: 'SyncTrackTags', a: a};
};
var $author$project$Brain$Types$ToCache = function (a) {
	return {$: 'ToCache', a: a};
};
var $author$project$Brain$User$Types$UnsetSyncMethod = {$: 'UnsetSyncMethod'};
var $author$project$Brain$User$Types$UpdateEncryptionKey = function (a) {
	return {$: 'UpdateEncryptionKey', a: a};
};
var $author$project$Brain$translateAlienData = F2(
	function (tag, data) {
		switch (tag.$) {
			case 'EnclosedData':
				return $author$project$Brain$Types$UserMsg(
					$author$project$Brain$User$Types$EnclosedDataRetrieved(data));
			case 'SearchTracks':
				return $author$project$Brain$Types$Search(data);
			case 'DownloadTracks':
				return $author$project$Brain$Types$DownloadTracks(data);
			case 'ProcessSources':
				return $author$project$Brain$Types$ProcessingMsg(
					$author$project$Brain$Sources$Processing$Types$Process(data));
			case 'RefreshedAccessToken':
				return $author$project$Brain$Types$RefreshedAccessToken(data);
			case 'RemoveEncryptionKey':
				return $author$project$Brain$Types$UserMsg($author$project$Brain$User$Types$RemoveEncryptionKey);
			case 'RemoveTracksBySourceId':
				return $author$project$Brain$Types$RemoveTracksBySourceId(data);
			case 'RemoveTracksFromCache':
				return $author$project$Brain$Types$RemoveTracksFromCache(data);
			case 'SaveEnclosedUserData':
				return $author$project$Brain$Types$UserMsg(
					$author$project$Brain$User$Types$SaveEnclosedData(data));
			case 'SaveFavourites':
				return $author$project$Brain$Types$UserMsg(
					$author$project$Brain$User$Types$SaveFavourites(data));
			case 'SavePlaylists':
				return $author$project$Brain$Types$UserMsg(
					$author$project$Brain$User$Types$SavePlaylists(data));
			case 'SaveProgress':
				return $author$project$Brain$Types$UserMsg(
					$author$project$Brain$User$Types$SaveProgress(data));
			case 'SaveSettings':
				return $author$project$Brain$Types$UserMsg(
					$author$project$Brain$User$Types$SaveSettings(data));
			case 'SaveSources':
				return $author$project$Brain$Types$UserMsg(
					$author$project$Brain$User$Types$SaveSources(data));
			case 'SaveTracks':
				return $author$project$Brain$Types$UserMsg(
					$author$project$Brain$User$Types$SaveTracks(data));
			case 'SetSyncMethod':
				return $author$project$Brain$Types$UserMsg(
					$author$project$Brain$User$Types$SetSyncMethod(data));
			case 'StopProcessing':
				return $author$project$Brain$Types$ProcessingMsg($author$project$Brain$Sources$Processing$Types$StopProcessing);
			case 'StoreTracksInCache':
				return $author$project$Brain$Types$StoreTracksInCache(data);
			case 'SyncTrackTags':
				return $author$project$Brain$Types$SyncTrackTags(data);
			case 'ToCache':
				return $author$project$Brain$Types$ToCache(data);
			case 'UnsetSyncMethod':
				return $author$project$Brain$Types$UserMsg($author$project$Brain$User$Types$UnsetSyncMethod);
			case 'UpdateEncryptionKey':
				return $author$project$Brain$Types$UserMsg(
					$author$project$Brain$User$Types$UpdateEncryptionKey(data));
			default:
				return $author$project$Brain$Types$Bypass;
		}
	});
var $author$project$Brain$translateAlienError = F3(
	function (tag, _v0, err) {
		if (err === 'db is undefined') {
			return A2($author$project$Brain$Common$State$reportUICmdMsg, tag, 'Can\'t connect to the browser\'s IndexedDB. FYI, this is __not supported in Firefox\'s private mode__.');
		} else {
			return A2($author$project$Brain$Common$State$reportUICmdMsg, tag, err);
		}
	});
var $author$project$Brain$alien = function (event) {
	var _v0 = _Utils_Tuple2(
		event.error,
		$author$project$Alien$tagFromString(event.tag));
	_v0$2:
	while (true) {
		if (_v0.a.$ === 'Nothing') {
			if (_v0.b.$ === 'Just') {
				var _v1 = _v0.a;
				var tag = _v0.b.a;
				return A2($author$project$Brain$translateAlienData, tag, event.data);
			} else {
				break _v0$2;
			}
		} else {
			if (_v0.b.$ === 'Just') {
				var err = _v0.a.a;
				var tag = _v0.b.a;
				return A3($author$project$Brain$translateAlienError, tag, event.data, err);
			} else {
				break _v0$2;
			}
		}
	}
	return $author$project$Brain$Types$Bypass;
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 'Every', a: a, b: b};
	});
var $elm$time$Time$State = F2(
	function (taggers, processes) {
		return {processes: processes, taggers: taggers};
	});
var $elm$time$Time$init = $elm$core$Task$succeed(
	A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty));
var $elm$time$Time$addMySub = F2(
	function (_v0, state) {
		var interval = _v0.a;
		var tagger = _v0.b;
		var _v1 = A2($elm$core$Dict$get, interval, state);
		if (_v1.$ === 'Nothing') {
			return A3(
				$elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _v1.a;
			return A3(
				$elm$core$Dict$insert,
				interval,
				A2($elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$time$Time$setInterval = _Time_setInterval;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return $elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = $elm$core$Process$spawn(
				A2(
					$elm$time$Time$setInterval,
					interval,
					A2($elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					$elm$time$Time$spawnHelp,
					router,
					rest,
					A3($elm$core$Dict$insert, interval, id, processes));
			};
			return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var $elm$time$Time$onEffects = F3(
	function (router, subs, _v0) {
		var processes = _v0.processes;
		var rightStep = F3(
			function (_v6, id, _v7) {
				var spawns = _v7.a;
				var existing = _v7.b;
				var kills = _v7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						$elm$core$Task$andThen,
						function (_v5) {
							return kills;
						},
						$elm$core$Process$kill(id)));
			});
		var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _v4) {
				var spawns = _v4.a;
				var existing = _v4.b;
				var kills = _v4.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _v3) {
				var spawns = _v3.a;
				var existing = _v3.b;
				var kills = _v3.c;
				return _Utils_Tuple3(
					spawns,
					A3($elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _v1 = A6(
			$elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				$elm$core$Dict$empty,
				$elm$core$Task$succeed(_Utils_Tuple0)));
		var spawnList = _v1.a;
		var existingDict = _v1.b;
		var killTask = _v1.c;
		return A2(
			$elm$core$Task$andThen,
			function (newProcesses) {
				return $elm$core$Task$succeed(
					A2($elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var $elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _v0 = A2($elm$core$Dict$get, interval, state.taggers);
		if (_v0.$ === 'Nothing') {
			return $elm$core$Task$succeed(state);
		} else {
			var taggers = _v0.a;
			var tellTaggers = function (time) {
				return $elm$core$Task$sequence(
					A2(
						$elm$core$List$map,
						function (tagger) {
							return A2(
								$elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$succeed(state);
				},
				A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now));
		}
	});
var $elm$time$Time$subMap = F2(
	function (f, _v0) {
		var interval = _v0.a;
		var tagger = _v0.b;
		return A2(
			$elm$time$Time$Every,
			interval,
			A2($elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
var $elm$time$Time$subscription = _Platform_leaf('Time');
var $elm$time$Time$every = F2(
	function (interval, tagger) {
		return $elm$time$Time$subscription(
			A2($elm$time$Time$Every, interval, tagger));
	});
var $author$project$Brain$Ports$fromAlien = _Platform_incomingPort(
	'fromAlien',
	A2(
		$elm$json$Json$Decode$andThen,
		function (tag) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (error) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (data) {
							return $elm$json$Json$Decode$succeed(
								{data: data, error: error, tag: tag});
						},
						A2($elm$json$Json$Decode$field, 'data', $elm$json$Json$Decode$value));
				},
				A2(
					$elm$json$Json$Decode$field,
					'error',
					$elm$json$Json$Decode$oneOf(
						_List_fromArray(
							[
								$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
								A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string)
							]))));
		},
		A2($elm$json$Json$Decode$field, 'tag', $elm$json$Json$Decode$string)));
var $author$project$Brain$Ports$makeArtworkTrackUrls = _Platform_incomingPort('makeArtworkTrackUrls', $elm$json$Json$Decode$value);
var $author$project$Brain$Ports$receiveSearchResults = _Platform_incomingPort(
	'receiveSearchResults',
	$elm$json$Json$Decode$list($elm$json$Json$Decode$string));
var $author$project$Brain$Ports$receiveTags = _Platform_incomingPort(
	'receiveTags',
	A2(
		$elm$json$Json$Decode$andThen,
		function (urlsForTags) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (sourceId) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (receivedTags) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (receivedFilePaths) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (nextFilePaths) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (amount) {
													return $elm$json$Json$Decode$succeed(
														{amount: amount, nextFilePaths: nextFilePaths, receivedFilePaths: receivedFilePaths, receivedTags: receivedTags, sourceId: sourceId, urlsForTags: urlsForTags});
												},
												A2($elm$json$Json$Decode$field, 'amount', $elm$json$Json$Decode$int));
										},
										A2(
											$elm$json$Json$Decode$field,
											'nextFilePaths',
											$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
								},
								A2(
									$elm$json$Json$Decode$field,
									'receivedFilePaths',
									$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
						},
						A2(
							$elm$json$Json$Decode$field,
							'receivedTags',
							$elm$json$Json$Decode$list(
								$elm$json$Json$Decode$oneOf(
									_List_fromArray(
										[
											$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
											A2(
											$elm$json$Json$Decode$map,
											$elm$core$Maybe$Just,
											A2(
												$elm$json$Json$Decode$andThen,
												function (year) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (title) {
															return A2(
																$elm$json$Json$Decode$andThen,
																function (picture) {
																	return A2(
																		$elm$json$Json$Decode$andThen,
																		function (nr) {
																			return A2(
																				$elm$json$Json$Decode$andThen,
																				function (genre) {
																					return A2(
																						$elm$json$Json$Decode$andThen,
																						function (disc) {
																							return A2(
																								$elm$json$Json$Decode$andThen,
																								function (artist) {
																									return A2(
																										$elm$json$Json$Decode$andThen,
																										function (album) {
																											return $elm$json$Json$Decode$succeed(
																												{album: album, artist: artist, disc: disc, genre: genre, nr: nr, picture: picture, title: title, year: year});
																										},
																										A2($elm$json$Json$Decode$field, 'album', $elm$json$Json$Decode$string));
																								},
																								A2($elm$json$Json$Decode$field, 'artist', $elm$json$Json$Decode$string));
																						},
																						A2($elm$json$Json$Decode$field, 'disc', $elm$json$Json$Decode$int));
																				},
																				A2(
																					$elm$json$Json$Decode$field,
																					'genre',
																					$elm$json$Json$Decode$oneOf(
																						_List_fromArray(
																							[
																								$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
																								A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string)
																							]))));
																		},
																		A2($elm$json$Json$Decode$field, 'nr', $elm$json$Json$Decode$int));
																},
																A2(
																	$elm$json$Json$Decode$field,
																	'picture',
																	$elm$json$Json$Decode$oneOf(
																		_List_fromArray(
																			[
																				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
																				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string)
																			]))));
														},
														A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string));
												},
												A2(
													$elm$json$Json$Decode$field,
													'year',
													$elm$json$Json$Decode$oneOf(
														_List_fromArray(
															[
																$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
																A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$int)
															])))))
										])))));
				},
				A2($elm$json$Json$Decode$field, 'sourceId', $elm$json$Json$Decode$string));
		},
		A2(
			$elm$json$Json$Decode$field,
			'urlsForTags',
			$elm$json$Json$Decode$list(
				A2(
					$elm$json$Json$Decode$andThen,
					function (headUrl) {
						return A2(
							$elm$json$Json$Decode$andThen,
							function (getUrl) {
								return $elm$json$Json$Decode$succeed(
									{getUrl: getUrl, headUrl: headUrl});
							},
							A2($elm$json$Json$Decode$field, 'getUrl', $elm$json$Json$Decode$string));
					},
					A2($elm$json$Json$Decode$field, 'headUrl', $elm$json$Json$Decode$string))))));
var $author$project$Brain$Ports$refreshedAccessToken = _Platform_incomingPort('refreshedAccessToken', $elm$json$Json$Decode$value);
var $author$project$Brain$Ports$replaceTags = _Platform_incomingPort(
	'replaceTags',
	A2(
		$elm$json$Json$Decode$andThen,
		function (urlsForTags) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (trackIds) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (receivedTags) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (receivedFilePaths) {
									return $elm$json$Json$Decode$succeed(
										{receivedFilePaths: receivedFilePaths, receivedTags: receivedTags, trackIds: trackIds, urlsForTags: urlsForTags});
								},
								A2(
									$elm$json$Json$Decode$field,
									'receivedFilePaths',
									$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
						},
						A2(
							$elm$json$Json$Decode$field,
							'receivedTags',
							$elm$json$Json$Decode$list(
								$elm$json$Json$Decode$oneOf(
									_List_fromArray(
										[
											$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
											A2(
											$elm$json$Json$Decode$map,
											$elm$core$Maybe$Just,
											A2(
												$elm$json$Json$Decode$andThen,
												function (year) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (title) {
															return A2(
																$elm$json$Json$Decode$andThen,
																function (picture) {
																	return A2(
																		$elm$json$Json$Decode$andThen,
																		function (nr) {
																			return A2(
																				$elm$json$Json$Decode$andThen,
																				function (genre) {
																					return A2(
																						$elm$json$Json$Decode$andThen,
																						function (disc) {
																							return A2(
																								$elm$json$Json$Decode$andThen,
																								function (artist) {
																									return A2(
																										$elm$json$Json$Decode$andThen,
																										function (album) {
																											return $elm$json$Json$Decode$succeed(
																												{album: album, artist: artist, disc: disc, genre: genre, nr: nr, picture: picture, title: title, year: year});
																										},
																										A2($elm$json$Json$Decode$field, 'album', $elm$json$Json$Decode$string));
																								},
																								A2($elm$json$Json$Decode$field, 'artist', $elm$json$Json$Decode$string));
																						},
																						A2($elm$json$Json$Decode$field, 'disc', $elm$json$Json$Decode$int));
																				},
																				A2(
																					$elm$json$Json$Decode$field,
																					'genre',
																					$elm$json$Json$Decode$oneOf(
																						_List_fromArray(
																							[
																								$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
																								A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string)
																							]))));
																		},
																		A2($elm$json$Json$Decode$field, 'nr', $elm$json$Json$Decode$int));
																},
																A2(
																	$elm$json$Json$Decode$field,
																	'picture',
																	$elm$json$Json$Decode$oneOf(
																		_List_fromArray(
																			[
																				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
																				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string)
																			]))));
														},
														A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string));
												},
												A2(
													$elm$json$Json$Decode$field,
													'year',
													$elm$json$Json$Decode$oneOf(
														_List_fromArray(
															[
																$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
																A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$int)
															])))))
										])))));
				},
				A2(
					$elm$json$Json$Decode$field,
					'trackIds',
					$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
		},
		A2(
			$elm$json$Json$Decode$field,
			'urlsForTags',
			$elm$json$Json$Decode$list(
				A2(
					$elm$json$Json$Decode$andThen,
					function (headUrl) {
						return A2(
							$elm$json$Json$Decode$andThen,
							function (getUrl) {
								return $elm$json$Json$Decode$succeed(
									{getUrl: getUrl, headUrl: headUrl});
							},
							A2($elm$json$Json$Decode$field, 'getUrl', $elm$json$Json$Decode$string));
					},
					A2($elm$json$Json$Decode$field, 'headUrl', $elm$json$Json$Decode$string))))));
var $author$project$Brain$subscriptions = function (_v0) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				$author$project$Brain$Ports$fromAlien($author$project$Brain$alien),
				$author$project$Brain$Ports$makeArtworkTrackUrls($author$project$Brain$Types$MakeArtworkTrackUrls),
				$author$project$Brain$Ports$refreshedAccessToken($author$project$Brain$Types$RefreshedAccessToken),
				$author$project$Brain$Ports$receiveSearchResults($author$project$Brain$Types$GotSearchResults),
				$author$project$Brain$Ports$receiveTags(
				A2($elm$core$Basics$composeL, $author$project$Brain$Types$ProcessingMsg, $author$project$Brain$Sources$Processing$Types$TagsStep)),
				$author$project$Brain$Ports$replaceTags($author$project$Brain$Types$ReplaceTrackTags),
				A2($elm$time$Time$every, 60 * 1000, $author$project$Brain$Types$SetCurrentTime)
			]));
};
var $author$project$Return$Ext$communicate = F2(
	function (c, m) {
		return _Utils_Tuple2(m, c);
	});
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $author$project$Brain$Tracks$State$downloadParamsDecoder = A3(
	$elm$json$Json$Decode$map2,
	$elm$core$Tuple$pair,
	A2($elm$json$Json$Decode$field, 'zipName', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'trackIds',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
var $author$project$Brain$Ports$downloadTracks = _Platform_outgoingPort('downloadTracks', $elm$core$Basics$identity);
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
var $author$project$Sources$Processing$Get = {$: 'Get'};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$String$append = _String_append;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$endsWith = _String_endsWith;
var $author$project$String$Ext$chopEnd = F2(
	function (needle, str) {
		return A2($elm$core$String$endsWith, needle, str) ? A2(
			$author$project$String$Ext$chopEnd,
			needle,
			A2(
				$elm$core$String$dropRight,
				$elm$core$String$length(needle),
				str)) : str;
	});
var $author$project$String$Ext$chopStart = F2(
	function (needle, str) {
		return A2($elm$core$String$startsWith, needle, str) ? A2(
			$author$project$String$Ext$chopStart,
			needle,
			A2(
				$elm$core$String$dropLeft,
				$elm$core$String$length(needle),
				str)) : str;
	});
var $ryannhg$date_format$DateFormat$DayOfMonthFixed = {$: 'DayOfMonthFixed'};
var $ryannhg$date_format$DateFormat$dayOfMonthFixed = $ryannhg$date_format$DateFormat$DayOfMonthFixed;
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
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $elm$core$String$fromList = _String_fromList;
var $elm$core$Basics$modBy = _Basics_modBy;
var $rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
	unsafeToDigit:
	while (true) {
		switch (num) {
			case 0:
				return _Utils_chr('0');
			case 1:
				return _Utils_chr('1');
			case 2:
				return _Utils_chr('2');
			case 3:
				return _Utils_chr('3');
			case 4:
				return _Utils_chr('4');
			case 5:
				return _Utils_chr('5');
			case 6:
				return _Utils_chr('6');
			case 7:
				return _Utils_chr('7');
			case 8:
				return _Utils_chr('8');
			case 9:
				return _Utils_chr('9');
			case 10:
				return _Utils_chr('a');
			case 11:
				return _Utils_chr('b');
			case 12:
				return _Utils_chr('c');
			case 13:
				return _Utils_chr('d');
			case 14:
				return _Utils_chr('e');
			case 15:
				return _Utils_chr('f');
			default:
				var $temp$num = num;
				num = $temp$num;
				continue unsafeToDigit;
		}
	}
};
var $rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (num < 16) {
				return A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(num),
					digits);
			} else {
				var $temp$digits = A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(
						A2($elm$core$Basics$modBy, 16, num)),
					digits),
					$temp$num = (num / 16) | 0;
				digits = $temp$digits;
				num = $temp$num;
				continue unsafePositiveToDigits;
			}
		}
	});
var $rtfeldman$elm_hex$Hex$toString = function (num) {
	return $elm$core$String$fromList(
		(num < 0) ? A2(
			$elm$core$List$cons,
			_Utils_chr('-'),
			A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
};
var $elm$core$String$toUpper = _String_toUpper;
var $author$project$Sources$Services$AmazonS3$Presign$encodeAdditionalCharacters = function (query) {
	return A3(
		$elm$regex$Regex$replace,
		A2(
			$elm$core$Maybe$withDefault,
			$elm$regex$Regex$never,
			$elm$regex$Regex$fromString('[!*\'()]')),
		function (_v0) {
			var match = _v0.match;
			return $elm$core$String$concat(
				A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Char$toCode,
						A2(
							$elm$core$Basics$composeR,
							$rtfeldman$elm_hex$Hex$toString,
							A2(
								$elm$core$Basics$composeR,
								$elm$core$String$toUpper,
								$elm$core$Basics$append('%')))),
					$elm$core$String$toList(match)));
		},
		query);
};
var $author$project$Dict$Ext$fetch = F3(
	function (key, _default, dict) {
		return A2(
			$elm$core$Maybe$withDefault,
			_default,
			A2($elm$core$Dict$get, key, dict));
	});
var $author$project$Dict$Ext$fetchUnknown = F2(
	function (key, dict) {
		return A3($author$project$Dict$Ext$fetch, key, 'MISSING_VALUE', dict);
	});
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
var $ryannhg$date_format$DateFormat$amPm = F3(
	function (language, zone, posix) {
		return language.toAmPm(
			A2($elm$time$Time$toHour, zone, posix));
	});
var $elm$core$Basics$ge = _Utils_ge;
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
var $ryannhg$date_format$DateFormat$dayOfMonth = $elm$time$Time$toDay;
var $elm$time$Time$Sun = {$: 'Sun'};
var $elm$time$Time$Fri = {$: 'Fri'};
var $elm$time$Time$Mon = {$: 'Mon'};
var $elm$time$Time$Sat = {$: 'Sat'};
var $elm$time$Time$Thu = {$: 'Thu'};
var $elm$time$Time$Tue = {$: 'Tue'};
var $elm$time$Time$Wed = {$: 'Wed'};
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
var $elm$core$Basics$neq = _Utils_notEqual;
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
var $elm$time$Time$Jan = {$: 'Jan'};
var $elm$time$Time$Apr = {$: 'Apr'};
var $elm$time$Time$Aug = {$: 'Aug'};
var $elm$time$Time$Dec = {$: 'Dec'};
var $elm$time$Time$Feb = {$: 'Feb'};
var $elm$time$Time$Jul = {$: 'Jul'};
var $elm$time$Time$Jun = {$: 'Jun'};
var $elm$time$Time$Mar = {$: 'Mar'};
var $elm$time$Time$May = {$: 'May'};
var $elm$time$Time$Nov = {$: 'Nov'};
var $elm$time$Time$Oct = {$: 'Oct'};
var $elm$time$Time$Sep = {$: 'Sep'};
var $ryannhg$date_format$DateFormat$months = _List_fromArray(
	[$elm$time$Time$Jan, $elm$time$Time$Feb, $elm$time$Time$Mar, $elm$time$Time$Apr, $elm$time$Time$May, $elm$time$Time$Jun, $elm$time$Time$Jul, $elm$time$Time$Aug, $elm$time$Time$Sep, $elm$time$Time$Oct, $elm$time$Time$Nov, $elm$time$Time$Dec]);
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
var $elm$time$Time$toYear = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).year;
	});
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
var $ryannhg$date_format$DateFormat$toNonMilitary = function (num) {
	return (!num) ? 12 : ((num <= 12) ? num : (num - 12));
};
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
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $icidasset$elm_binary$Binary$Bits = function (a) {
	return {$: 'Bits', a: a};
};
var $icidasset$elm_binary$Binary$ifThenElse = F3(
	function (bool, a, b) {
		return bool ? a : b;
	});
var $icidasset$elm_binary$Binary$fromIntegers = A2(
	$elm$core$Basics$composeR,
	$elm$core$List$map(
		function (i) {
			return A3($icidasset$elm_binary$Binary$ifThenElse, i <= 0, false, true);
		}),
	$icidasset$elm_binary$Binary$Bits);
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
var $icidasset$elm_binary$Binary$ensureSize = F2(
	function (size, _v0) {
		var bits = _v0.a;
		var currentLength = $elm$core$List$length(bits);
		return _Utils_eq(currentLength, size) ? $icidasset$elm_binary$Binary$Bits(bits) : ((_Utils_cmp(currentLength, size) > 0) ? $icidasset$elm_binary$Binary$Bits(
			A2($elm$core$List$drop, currentLength - size, bits)) : $icidasset$elm_binary$Binary$Bits(
			_Utils_ap(
				A2($elm$core$List$repeat, size - currentLength, false),
				bits)));
	});
var $icidasset$elm_binary$Binary$fromDecimal_ = F2(
	function (acc, n) {
		fromDecimal_:
		while (true) {
			var _v0 = _Utils_Tuple2((n / 2) | 0, n % 2);
			var x = _v0.a;
			var bit = _v0.b;
			var bits = A2(
				$elm$core$List$cons,
				A2($elm$core$Basics$modBy, 2, bit),
				acc);
			if (x > 0) {
				var $temp$acc = bits,
					$temp$n = x;
				acc = $temp$acc;
				n = $temp$n;
				continue fromDecimal_;
			} else {
				return bits;
			}
		}
	});
var $icidasset$elm_binary$Binary$fromDecimal = A2(
	$elm$core$Basics$composeR,
	$icidasset$elm_binary$Binary$fromDecimal_(_List_Nil),
	$icidasset$elm_binary$Binary$fromIntegers);
var $icidasset$elm_binary$Binary$toIntegers = function (_v0) {
	var bits = _v0.a;
	return A2(
		$elm$core$List$map,
		function (b) {
			return A3($icidasset$elm_binary$Binary$ifThenElse, b, 1, 0);
		},
		bits);
};
var $elm_community$list_extra$List$Extra$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $icidasset$elm_binary$Binary$unicodeCharToUtf8Bits_ = F2(
	function (startingBits, codepoint) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (start, _v0) {
					var all = _v0.a;
					var acc = _v0.b;
					var takeAway = 8 - $elm$core$List$length(start);
					var _v1 = A2($elm_community$list_extra$List$Extra$splitAt, takeAway, acc);
					var end = _v1.a;
					var rest = _v1.b;
					return _Utils_Tuple2(
						_Utils_ap(
							start,
							_Utils_ap(
								$elm$core$List$reverse(end),
								all)),
						rest);
				}),
			_Utils_Tuple2(
				_List_Nil,
				$elm$core$List$reverse(
					$icidasset$elm_binary$Binary$toIntegers(
						A2(
							$icidasset$elm_binary$Binary$ensureSize,
							8 * $elm$core$List$length(startingBits),
							$icidasset$elm_binary$Binary$fromDecimal(codepoint))))),
			startingBits).a;
	});
var $icidasset$elm_binary$Binary$unicodeCharToUtf8Bits = function (_char) {
	var codepoint = $elm$core$Char$toCode(_char);
	return (codepoint < 128) ? $icidasset$elm_binary$Binary$toIntegers(
		A2(
			$icidasset$elm_binary$Binary$ensureSize,
			8,
			$icidasset$elm_binary$Binary$fromDecimal(codepoint))) : ((codepoint < 2048) ? A2(
		$icidasset$elm_binary$Binary$unicodeCharToUtf8Bits_,
		_List_fromArray(
			[
				_List_fromArray(
				[1, 1, 0]),
				_List_fromArray(
				[1, 0])
			]),
		codepoint) : ((codepoint < 65536) ? A2(
		$icidasset$elm_binary$Binary$unicodeCharToUtf8Bits_,
		_List_fromArray(
			[
				_List_fromArray(
				[1, 1, 1, 0]),
				_List_fromArray(
				[1, 0]),
				_List_fromArray(
				[1, 0])
			]),
		codepoint) : A2(
		$icidasset$elm_binary$Binary$unicodeCharToUtf8Bits_,
		_List_fromArray(
			[
				_List_fromArray(
				[1, 1, 1, 1, 0]),
				_List_fromArray(
				[1, 0]),
				_List_fromArray(
				[1, 0]),
				_List_fromArray(
				[1, 0])
			]),
		codepoint)));
};
var $icidasset$elm_binary$Binary$fromStringAsUtf8 = function (string) {
	return $icidasset$elm_binary$Binary$fromIntegers(
		A2(
			$elm$core$List$concatMap,
			$icidasset$elm_binary$Binary$unicodeCharToUtf8Bits,
			$elm$core$String$toList(string)));
};
var $icidasset$elm_binary$Binary$append = F2(
	function (_v0, _v1) {
		var a = _v0.a;
		var b = _v1.a;
		return $icidasset$elm_binary$Binary$Bits(
			A2($elm$core$List$append, a, b));
	});
var $icidasset$elm_binary$Binary$concatMap = function (fn) {
	return A2(
		$elm$core$List$foldr,
		function (a) {
			return $elm$core$List$append(
				fn(a));
		},
		_List_Nil);
};
var $icidasset$elm_binary$Binary$unwrap = function (_v0) {
	var bits = _v0.a;
	return bits;
};
var $icidasset$elm_binary$Binary$fromString_ = F2(
	function (amountOfBitsPerCharacter, _char) {
		return $icidasset$elm_binary$Binary$unwrap(
			A2(
				$icidasset$elm_binary$Binary$ensureSize,
				amountOfBitsPerCharacter,
				$icidasset$elm_binary$Binary$fromDecimal(
					$elm$core$Char$toCode(_char))));
	});
var $icidasset$elm_binary$Binary$fromString = F2(
	function (amountOfBitsPerCharacter, string) {
		return $icidasset$elm_binary$Binary$Bits(
			A2(
				$icidasset$elm_binary$Binary$concatMap,
				$icidasset$elm_binary$Binary$fromString_(amountOfBitsPerCharacter),
				$elm$core$String$toList(string)));
	});
var $elm$core$Tuple$mapBoth = F3(
	function (funcA, funcB, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			funcA(x),
			funcB(y));
	});
var $icidasset$elm_binary$Binary$fromBooleans = $icidasset$elm_binary$Binary$Bits;
var $icidasset$elm_binary$Binary$toBooleans = function (_v0) {
	var bits = _v0.a;
	return bits;
};
var $icidasset$elm_binary$Binary$width = function (_v0) {
	var bits = _v0.a;
	return $elm$core$List$length(bits);
};
var $author$project$Cryptography$Hmac$padRight = F2(
	function (_int, bits) {
		var size = $icidasset$elm_binary$Binary$width(bits);
		return $icidasset$elm_binary$Binary$fromBooleans(
			A2(
				$elm$core$List$append,
				$icidasset$elm_binary$Binary$toBooleans(bits),
				A2($elm$core$List$repeat, _int - size, false)));
	});
var $icidasset$elm_binary$Binary$concat = A2(
	$elm$core$Basics$composeR,
	$icidasset$elm_binary$Binary$concatMap($icidasset$elm_binary$Binary$unwrap),
	$icidasset$elm_binary$Binary$Bits);
var $elm$core$Char$toUpper = _Char_toUpper;
var $icidasset$elm_binary$Binary$hexCharToBinary = function (_char) {
	var _v0 = $elm$core$Char$toUpper(_char);
	switch (_v0.valueOf()) {
		case '0':
			return _List_fromArray(
				[false, false, false, false]);
		case '1':
			return _List_fromArray(
				[false, false, false, true]);
		case '2':
			return _List_fromArray(
				[false, false, true, false]);
		case '3':
			return _List_fromArray(
				[false, false, true, true]);
		case '4':
			return _List_fromArray(
				[false, true, false, false]);
		case '5':
			return _List_fromArray(
				[false, true, false, true]);
		case '6':
			return _List_fromArray(
				[false, true, true, false]);
		case '7':
			return _List_fromArray(
				[false, true, true, true]);
		case '8':
			return _List_fromArray(
				[true, false, false, false]);
		case '9':
			return _List_fromArray(
				[true, false, false, true]);
		case 'A':
			return _List_fromArray(
				[true, false, true, false]);
		case 'B':
			return _List_fromArray(
				[true, false, true, true]);
		case 'C':
			return _List_fromArray(
				[true, true, false, false]);
		case 'D':
			return _List_fromArray(
				[true, true, false, true]);
		case 'E':
			return _List_fromArray(
				[true, true, true, false]);
		case 'F':
			return _List_fromArray(
				[true, true, true, true]);
		default:
			return _List_Nil;
	}
};
var $icidasset$elm_binary$Binary$fromHex = function (hex) {
	return $icidasset$elm_binary$Binary$Bits(
		A2(
			$icidasset$elm_binary$Binary$concatMap,
			$icidasset$elm_binary$Binary$hexCharToBinary,
			$elm$core$String$toList(hex)));
};
var $author$project$Cryptography$Hmac$padding128 = _Utils_Tuple2(
	$icidasset$elm_binary$Binary$concat(
		A2(
			$elm$core$List$repeat,
			128,
			$icidasset$elm_binary$Binary$fromHex('36'))),
	$icidasset$elm_binary$Binary$concat(
		A2(
			$elm$core$List$repeat,
			128,
			$icidasset$elm_binary$Binary$fromHex('5C'))));
var $author$project$Cryptography$Hmac$padding64 = _Utils_Tuple2(
	$icidasset$elm_binary$Binary$concat(
		A2(
			$elm$core$List$repeat,
			64,
			$icidasset$elm_binary$Binary$fromHex('36'))),
	$icidasset$elm_binary$Binary$concat(
		A2(
			$elm$core$List$repeat,
			64,
			$icidasset$elm_binary$Binary$fromHex('5C'))));
var $author$project$Cryptography$Hmac$padding = function (blockSize) {
	switch (blockSize) {
		case 64:
			return $author$project$Cryptography$Hmac$padding64;
		case 128:
			return $author$project$Cryptography$Hmac$padding128;
		default:
			return _Utils_Tuple2(
				$icidasset$elm_binary$Binary$concat(
					A2(
						$elm$core$List$repeat,
						blockSize,
						$icidasset$elm_binary$Binary$fromHex('36'))),
				$icidasset$elm_binary$Binary$concat(
					A2(
						$elm$core$List$repeat,
						blockSize,
						$icidasset$elm_binary$Binary$fromHex('5C'))));
	}
};
var $icidasset$elm_binary$Binary$condense = F2(
	function (fn, _v0) {
		var a = _v0.a.a;
		var b = _v0.b.a;
		return $icidasset$elm_binary$Binary$Bits(
			A3($elm$core$List$map2, fn, a, b));
	});
var $icidasset$elm_binary$Binary$makeIsometric = F2(
	function (a, b) {
		var _v0 = _Utils_Tuple2(
			$icidasset$elm_binary$Binary$width(a),
			$icidasset$elm_binary$Binary$width(b));
		var widthA = _v0.a;
		var widthB = _v0.b;
		return _Utils_eq(widthA, widthB) ? _Utils_Tuple2(a, b) : ((_Utils_cmp(widthA, widthB) > 0) ? _Utils_Tuple2(
			a,
			A2($icidasset$elm_binary$Binary$ensureSize, widthA, b)) : _Utils_Tuple2(
			A2($icidasset$elm_binary$Binary$ensureSize, widthB, a),
			b));
	});
var $elm$core$Basics$xor = _Basics_xor;
var $icidasset$elm_binary$Binary$xor = F2(
	function (a, b) {
		return A2(
			$icidasset$elm_binary$Binary$condense,
			$elm$core$Basics$xor,
			A2($icidasset$elm_binary$Binary$makeIsometric, a, b));
	});
var $author$project$Cryptography$Hmac$encrypt = F4(
	function (blockSize, hash, messageString, key) {
		var keySize = $icidasset$elm_binary$Binary$width(key);
		var keyWithBlockSize = (_Utils_cmp(keySize, blockSize) > 0) ? A2(
			$author$project$Cryptography$Hmac$padRight,
			blockSize,
			hash(key)) : ((_Utils_cmp(keySize, blockSize) < 0) ? A2($author$project$Cryptography$Hmac$padRight, blockSize, key) : key);
		var _v0 = A3(
			$elm$core$Tuple$mapBoth,
			$icidasset$elm_binary$Binary$xor(keyWithBlockSize),
			$icidasset$elm_binary$Binary$xor(keyWithBlockSize),
			$author$project$Cryptography$Hmac$padding((blockSize / 8) | 0));
		var binSeqOne = _v0.a;
		var binSeqTwo = _v0.b;
		return hash(
			A2(
				$icidasset$elm_binary$Binary$append,
				binSeqTwo,
				hash(
					A2(
						$icidasset$elm_binary$Binary$append,
						binSeqOne,
						A2($icidasset$elm_binary$Binary$fromString, 8, messageString)))));
	});
var $author$project$Cryptography$Hmac$encrypt64 = $author$project$Cryptography$Hmac$encrypt(64 * 8);
var $icidasset$elm_sha$SHA$Internal$SHA256$chunkSize = 512;
var $icidasset$elm_binary$Binary$and = F2(
	function (a, b) {
		return A2(
			$icidasset$elm_binary$Binary$condense,
			$elm$core$Basics$and,
			A2($icidasset$elm_binary$Binary$makeIsometric, a, b));
	});
var $icidasset$elm_binary$Binary$add_ = F2(
	function (_v0, _v1) {
		var x = _v0.a;
		var y = _v0.b;
		var bits = _v1.bits;
		var carryOver = _v1.carryOver;
		return (carryOver && (x && y)) ? {
			bits: A2($elm$core$List$cons, true, bits),
			carryOver: true
		} : ((x && y) ? {
			bits: A2($elm$core$List$cons, false, bits),
			carryOver: true
		} : ((carryOver && (x || y)) ? {
			bits: A2($elm$core$List$cons, false, bits),
			carryOver: true
		} : ((x || y) ? {
			bits: A2($elm$core$List$cons, true, bits),
			carryOver: false
		} : (carryOver ? {
			bits: A2($elm$core$List$cons, true, bits),
			carryOver: false
		} : {
			bits: A2($elm$core$List$cons, false, bits),
			carryOver: false
		}))));
	});
var $elm_community$list_extra$List$Extra$zip = $elm$core$List$map2($elm$core$Tuple$pair);
var $icidasset$elm_binary$Binary$add = F2(
	function (a, b) {
		return $icidasset$elm_binary$Binary$Bits(
			A2(
				$icidasset$elm_binary$Binary$add_,
				_Utils_Tuple2(false, false),
				A3(
					$elm$core$List$foldr,
					$icidasset$elm_binary$Binary$add_,
					{bits: _List_Nil, carryOver: false},
					function (_v0) {
						var c = _v0.a.a;
						var d = _v0.b.a;
						return A2($elm_community$list_extra$List$Extra$zip, c, d);
					}(
						A2($icidasset$elm_binary$Binary$makeIsometric, a, b)))).bits);
	});
var $icidasset$elm_sha$SHA$Internal$Common$combine = F3(
	function (sizeInBits, x, y) {
		var sum = A2($icidasset$elm_binary$Binary$add, x, y);
		var width = $icidasset$elm_binary$Binary$width(sum);
		return (_Utils_cmp(width, sizeInBits) > 0) ? $icidasset$elm_binary$Binary$fromBooleans(
			A2(
				$elm$core$List$drop,
				width - sizeInBits,
				$icidasset$elm_binary$Binary$toBooleans(sum))) : sum;
	});
var $icidasset$elm_sha$SHA$Internal$SHA256$combine = $icidasset$elm_sha$SHA$Internal$Common$combine(($icidasset$elm_sha$SHA$Internal$SHA256$chunkSize / 16) | 0);
var $icidasset$elm_binary$Binary$empty = $icidasset$elm_binary$Binary$Bits(_List_Nil);
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
var $icidasset$elm_binary$Binary$map = F2(
	function (fn, _v0) {
		var list = _v0.a;
		return $icidasset$elm_binary$Binary$Bits(
			fn(list));
	});
var $elm$core$Basics$not = _Basics_not;
var $icidasset$elm_binary$Binary$not = $icidasset$elm_binary$Binary$map(
	$elm$core$List$map($elm$core$Basics$not));
var $icidasset$elm_binary$Binary$rotateRightBy = function (n) {
	return $icidasset$elm_binary$Binary$map(
		function (bits) {
			return function (_v0) {
				var a = _v0.a;
				var b = _v0.b;
				return _Utils_ap(b, a);
			}(
				A2(
					$elm_community$list_extra$List$Extra$splitAt,
					$elm$core$List$length(bits) - n,
					bits));
		});
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
var $icidasset$elm_sha$SHA$Internal$SHA256$roundConstants = $elm$core$Array$fromList(
	_List_fromArray(
		[
			$icidasset$elm_binary$Binary$fromHex('428A2F98'),
			$icidasset$elm_binary$Binary$fromHex('71374491'),
			$icidasset$elm_binary$Binary$fromHex('B5C0FBCF'),
			$icidasset$elm_binary$Binary$fromHex('E9B5DBA5'),
			$icidasset$elm_binary$Binary$fromHex('3956C25B'),
			$icidasset$elm_binary$Binary$fromHex('59F111F1'),
			$icidasset$elm_binary$Binary$fromHex('923F82A4'),
			$icidasset$elm_binary$Binary$fromHex('AB1C5ED5'),
			$icidasset$elm_binary$Binary$fromHex('D807AA98'),
			$icidasset$elm_binary$Binary$fromHex('12835B01'),
			$icidasset$elm_binary$Binary$fromHex('243185BE'),
			$icidasset$elm_binary$Binary$fromHex('550C7DC3'),
			$icidasset$elm_binary$Binary$fromHex('72BE5D74'),
			$icidasset$elm_binary$Binary$fromHex('80DEB1FE'),
			$icidasset$elm_binary$Binary$fromHex('9BDC06A7'),
			$icidasset$elm_binary$Binary$fromHex('C19BF174'),
			$icidasset$elm_binary$Binary$fromHex('E49B69C1'),
			$icidasset$elm_binary$Binary$fromHex('EFBE4786'),
			$icidasset$elm_binary$Binary$fromHex('0FC19DC6'),
			$icidasset$elm_binary$Binary$fromHex('240CA1CC'),
			$icidasset$elm_binary$Binary$fromHex('2DE92C6F'),
			$icidasset$elm_binary$Binary$fromHex('4A7484AA'),
			$icidasset$elm_binary$Binary$fromHex('5CB0A9DC'),
			$icidasset$elm_binary$Binary$fromHex('76F988DA'),
			$icidasset$elm_binary$Binary$fromHex('983E5152'),
			$icidasset$elm_binary$Binary$fromHex('A831C66D'),
			$icidasset$elm_binary$Binary$fromHex('B00327C8'),
			$icidasset$elm_binary$Binary$fromHex('BF597FC7'),
			$icidasset$elm_binary$Binary$fromHex('C6E00BF3'),
			$icidasset$elm_binary$Binary$fromHex('D5A79147'),
			$icidasset$elm_binary$Binary$fromHex('06CA6351'),
			$icidasset$elm_binary$Binary$fromHex('14292967'),
			$icidasset$elm_binary$Binary$fromHex('27B70A85'),
			$icidasset$elm_binary$Binary$fromHex('2E1B2138'),
			$icidasset$elm_binary$Binary$fromHex('4D2C6DFC'),
			$icidasset$elm_binary$Binary$fromHex('53380D13'),
			$icidasset$elm_binary$Binary$fromHex('650A7354'),
			$icidasset$elm_binary$Binary$fromHex('766A0ABB'),
			$icidasset$elm_binary$Binary$fromHex('81C2C92E'),
			$icidasset$elm_binary$Binary$fromHex('92722C85'),
			$icidasset$elm_binary$Binary$fromHex('A2BFE8A1'),
			$icidasset$elm_binary$Binary$fromHex('A81A664B'),
			$icidasset$elm_binary$Binary$fromHex('C24B8B70'),
			$icidasset$elm_binary$Binary$fromHex('C76C51A3'),
			$icidasset$elm_binary$Binary$fromHex('D192E819'),
			$icidasset$elm_binary$Binary$fromHex('D6990624'),
			$icidasset$elm_binary$Binary$fromHex('F40E3585'),
			$icidasset$elm_binary$Binary$fromHex('106AA070'),
			$icidasset$elm_binary$Binary$fromHex('19A4C116'),
			$icidasset$elm_binary$Binary$fromHex('1E376C08'),
			$icidasset$elm_binary$Binary$fromHex('2748774C'),
			$icidasset$elm_binary$Binary$fromHex('34B0BCB5'),
			$icidasset$elm_binary$Binary$fromHex('391C0CB3'),
			$icidasset$elm_binary$Binary$fromHex('4ED8AA4A'),
			$icidasset$elm_binary$Binary$fromHex('5B9CCA4F'),
			$icidasset$elm_binary$Binary$fromHex('682E6FF3'),
			$icidasset$elm_binary$Binary$fromHex('748F82EE'),
			$icidasset$elm_binary$Binary$fromHex('78A5636F'),
			$icidasset$elm_binary$Binary$fromHex('84C87814'),
			$icidasset$elm_binary$Binary$fromHex('8CC70208'),
			$icidasset$elm_binary$Binary$fromHex('90BEFFFA'),
			$icidasset$elm_binary$Binary$fromHex('A4506CEB'),
			$icidasset$elm_binary$Binary$fromHex('BEF9A3F7'),
			$icidasset$elm_binary$Binary$fromHex('C67178F2')
		]));
var $icidasset$elm_sha$SHA$Internal$SHA256$compressor = F2(
	function (_v0, hashTable) {
		var index = _v0.index;
		var scheduleNumber = _v0.scheduleNumber;
		var y2 = A2(
			$icidasset$elm_binary$Binary$xor,
			A2($icidasset$elm_binary$Binary$and, hashTable.a, hashTable.b),
			A2(
				$icidasset$elm_binary$Binary$xor,
				A2($icidasset$elm_binary$Binary$and, hashTable.a, hashTable.c),
				A2($icidasset$elm_binary$Binary$and, hashTable.b, hashTable.c)));
		var y1 = A2(
			$icidasset$elm_binary$Binary$xor,
			A2($icidasset$elm_binary$Binary$rotateRightBy, 2, hashTable.a),
			A2(
				$icidasset$elm_binary$Binary$xor,
				A2($icidasset$elm_binary$Binary$rotateRightBy, 13, hashTable.a),
				A2($icidasset$elm_binary$Binary$rotateRightBy, 22, hashTable.a)));
		var y = A2($icidasset$elm_sha$SHA$Internal$SHA256$combine, y1, y2);
		var x2 = A2(
			$icidasset$elm_binary$Binary$xor,
			A2($icidasset$elm_binary$Binary$and, hashTable.e, hashTable.f),
			A2(
				$icidasset$elm_binary$Binary$and,
				$icidasset$elm_binary$Binary$not(hashTable.e),
				hashTable.g));
		var x1 = A2(
			$icidasset$elm_binary$Binary$xor,
			A2($icidasset$elm_binary$Binary$rotateRightBy, 6, hashTable.e),
			A2(
				$icidasset$elm_binary$Binary$xor,
				A2($icidasset$elm_binary$Binary$rotateRightBy, 11, hashTable.e),
				A2($icidasset$elm_binary$Binary$rotateRightBy, 25, hashTable.e)));
		var x = A3(
			$elm$core$List$foldl,
			$icidasset$elm_sha$SHA$Internal$SHA256$combine,
			$icidasset$elm_binary$Binary$empty,
			_List_fromArray(
				[
					hashTable.h,
					x1,
					x2,
					A2(
					$elm$core$Maybe$withDefault,
					$icidasset$elm_binary$Binary$empty,
					A2($elm$core$Array$get, index, $icidasset$elm_sha$SHA$Internal$SHA256$roundConstants)),
					scheduleNumber
				]));
		return {
			a: A2($icidasset$elm_sha$SHA$Internal$SHA256$combine, x, y),
			b: hashTable.a,
			c: hashTable.b,
			d: hashTable.c,
			e: A2($icidasset$elm_sha$SHA$Internal$SHA256$combine, hashTable.d, x),
			f: hashTable.e,
			g: hashTable.f,
			h: hashTable.g
		};
	});
var $icidasset$elm_binary$Binary$shiftRightZfBy = F2(
	function (n, _v0) {
		var bits = _v0.a;
		return $icidasset$elm_binary$Binary$Bits(
			A2(
				$elm$core$List$append,
				A2($elm$core$List$repeat, n, false),
				A2(
					$elm$core$List$take,
					$elm$core$List$length(bits) - n,
					bits)));
	});
var $icidasset$elm_sha$SHA$Internal$SHA256$extender = function (_v0) {
	var i2 = _v0.i2;
	var i7 = _v0.i7;
	var i15 = _v0.i15;
	var i16 = _v0.i16;
	var b = A2(
		$icidasset$elm_binary$Binary$xor,
		A2($icidasset$elm_binary$Binary$rotateRightBy, 17, i2),
		A2(
			$icidasset$elm_binary$Binary$xor,
			A2($icidasset$elm_binary$Binary$rotateRightBy, 19, i2),
			A2($icidasset$elm_binary$Binary$shiftRightZfBy, 10, i2)));
	var a = A2(
		$icidasset$elm_binary$Binary$xor,
		A2($icidasset$elm_binary$Binary$rotateRightBy, 7, i15),
		A2(
			$icidasset$elm_binary$Binary$xor,
			A2($icidasset$elm_binary$Binary$rotateRightBy, 18, i15),
			A2($icidasset$elm_binary$Binary$shiftRightZfBy, 3, i15)));
	return A3(
		$elm$core$List$foldl,
		$icidasset$elm_sha$SHA$Internal$SHA256$combine,
		$icidasset$elm_binary$Binary$empty,
		_List_fromArray(
			[i16, a, i7, b]));
};
var $icidasset$elm_sha$SHA$Internal$SHA256$initialHashTable = {
	a: $icidasset$elm_binary$Binary$fromHex('6A09E667'),
	b: $icidasset$elm_binary$Binary$fromHex('BB67AE85'),
	c: $icidasset$elm_binary$Binary$fromHex('3C6EF372'),
	d: $icidasset$elm_binary$Binary$fromHex('A54FF53A'),
	e: $icidasset$elm_binary$Binary$fromHex('510E527F'),
	f: $icidasset$elm_binary$Binary$fromHex('9B05688C'),
	g: $icidasset$elm_binary$Binary$fromHex('1F83D9AB'),
	h: $icidasset$elm_binary$Binary$fromHex('5BE0CD19')
};
var $icidasset$elm_sha$SHA$Internal$SHA256$computationSetup = {chunkSize: $icidasset$elm_sha$SHA$Internal$SHA256$chunkSize, compressor: $icidasset$elm_sha$SHA$Internal$SHA256$compressor, extender: $icidasset$elm_sha$SHA$Internal$SHA256$extender, initialHashTable: $icidasset$elm_sha$SHA$Internal$SHA256$initialHashTable, roundConstants: $icidasset$elm_sha$SHA$Internal$SHA256$roundConstants};
var $icidasset$elm_sha$SHA$Internal$HashTable$combineHashTables = F3(
	function (sizeInBits, x, y) {
		return {
			a: A3($icidasset$elm_sha$SHA$Internal$Common$combine, sizeInBits, x.a, y.a),
			b: A3($icidasset$elm_sha$SHA$Internal$Common$combine, sizeInBits, x.b, y.b),
			c: A3($icidasset$elm_sha$SHA$Internal$Common$combine, sizeInBits, x.c, y.c),
			d: A3($icidasset$elm_sha$SHA$Internal$Common$combine, sizeInBits, x.d, y.d),
			e: A3($icidasset$elm_sha$SHA$Internal$Common$combine, sizeInBits, x.e, y.e),
			f: A3($icidasset$elm_sha$SHA$Internal$Common$combine, sizeInBits, x.f, y.f),
			g: A3($icidasset$elm_sha$SHA$Internal$Common$combine, sizeInBits, x.g, y.g),
			h: A3($icidasset$elm_sha$SHA$Internal$Common$combine, sizeInBits, x.h, y.h)
		};
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$Array$toIndexedList = function (array) {
	var len = array.a;
	var helper = F2(
		function (entry, _v0) {
			var index = _v0.a;
			var list = _v0.b;
			return _Utils_Tuple2(
				index - 1,
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(index, entry),
					list));
		});
	return A3(
		$elm$core$Array$foldr,
		helper,
		_Utils_Tuple2(len - 1, _List_Nil),
		array).b;
};
var $icidasset$elm_sha$SHA$Internal$useCompressor = F2(
	function (compressor, _v0) {
		var index = _v0.a;
		var scheduleNumber = _v0.b;
		return compressor(
			{index: index, scheduleNumber: scheduleNumber});
	});
var $icidasset$elm_sha$SHA$Internal$compress = F3(
	function (setup, hashTable, schedule) {
		return A3(
			$icidasset$elm_sha$SHA$Internal$HashTable$combineHashTables,
			(setup.chunkSize / 16) | 0,
			hashTable,
			A3(
				$elm$core$List$foldl,
				$icidasset$elm_sha$SHA$Internal$useCompressor(setup.compressor),
				hashTable,
				$elm$core$Array$toIndexedList(schedule)));
	});
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$appendHelpTree = F2(
	function (toAppend, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		var itemsToAppend = $elm$core$Elm$JsArray$length(toAppend);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(tail)) - itemsToAppend;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, tail, toAppend);
		var newArray = A2($elm$core$Array$unsafeReplaceTail, appended, array);
		if (notAppended < 0) {
			var nextTail = A3($elm$core$Elm$JsArray$slice, notAppended, itemsToAppend, toAppend);
			return A2($elm$core$Array$unsafeReplaceTail, nextTail, newArray);
		} else {
			return newArray;
		}
	});
var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var $elm$core$Array$builderFromArray = function (_v0) {
	var len = _v0.a;
	var tree = _v0.c;
	var tail = _v0.d;
	var helper = F2(
		function (node, acc) {
			if (node.$ === 'SubTree') {
				var subTree = node.a;
				return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
			} else {
				return A2($elm$core$List$cons, node, acc);
			}
		});
	return {
		nodeList: A3($elm$core$Elm$JsArray$foldl, helper, _List_Nil, tree),
		nodeListSize: (len / $elm$core$Array$branchFactor) | 0,
		tail: tail
	};
};
var $elm$core$Array$append = F2(
	function (a, _v0) {
		var aTail = a.d;
		var bLen = _v0.a;
		var bTree = _v0.c;
		var bTail = _v0.d;
		if (_Utils_cmp(bLen, $elm$core$Array$branchFactor * 4) < 1) {
			var foldHelper = F2(
				function (node, array) {
					if (node.$ === 'SubTree') {
						var tree = node.a;
						return A3($elm$core$Elm$JsArray$foldl, foldHelper, array, tree);
					} else {
						var leaf = node.a;
						return A2($elm$core$Array$appendHelpTree, leaf, array);
					}
				});
			return A2(
				$elm$core$Array$appendHelpTree,
				bTail,
				A3($elm$core$Elm$JsArray$foldl, foldHelper, a, bTree));
		} else {
			var foldHelper = F2(
				function (node, builder) {
					if (node.$ === 'SubTree') {
						var tree = node.a;
						return A3($elm$core$Elm$JsArray$foldl, foldHelper, builder, tree);
					} else {
						var leaf = node.a;
						return A2($elm$core$Array$appendHelpBuilder, leaf, builder);
					}
				});
			return A2(
				$elm$core$Array$builderToArray,
				true,
				A2(
					$elm$core$Array$appendHelpBuilder,
					bTail,
					A3(
						$elm$core$Elm$JsArray$foldl,
						foldHelper,
						$elm$core$Array$builderFromArray(a),
						bTree)));
		}
	});
var $elm$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
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
					if (md.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var d = md.a;
						return $elm$core$Maybe$Just(
							A4(func, a, b, c, d));
					}
				}
			}
		}
	});
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $icidasset$elm_sha$SHA$Internal$extend = F3(
	function (setup, index, schedule) {
		return A2(
			$elm$core$Maybe$withDefault,
			schedule,
			A2(
				$elm$core$Maybe$map,
				function (bits) {
					return A3($elm$core$Array$set, index, bits, schedule);
				},
				A5(
					$elm$core$Maybe$map4,
					F4(
						function (i2, i7, i15, i16) {
							return setup.extender(
								{i15: i15, i16: i16, i2: i2, i7: i7});
						}),
					A2($elm$core$Array$get, index - 2, schedule),
					A2($elm$core$Array$get, index - 7, schedule),
					A2($elm$core$Array$get, index - 15, schedule),
					A2($elm$core$Array$get, index - 16, schedule))));
	});
var $icidasset$elm_sha$SHA$Internal$extendInitialSchedule = F3(
	function (setup, chunkComputer, initialSchedule) {
		var lengthySchedule = A2($elm$core$Array$append, initialSchedule, chunkComputer.scheduleExtArray);
		return A3(
			$elm$core$List$foldl,
			$icidasset$elm_sha$SHA$Internal$extend(setup),
			lengthySchedule,
			chunkComputer.scheduleExtRange);
	});
var $elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					len - from,
					$elm$core$Array$shiftStep,
					$elm$core$Elm$JsArray$empty,
					A3(
						$elm$core$Elm$JsArray$slice,
						from - $elm$core$Array$tailIndex(len),
						$elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / $elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2($elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					$elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return $elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * $elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							$elm$core$Elm$JsArray$slice,
							firstSlice,
							$elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						$elm$core$Array$builderToArray,
						true,
						A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var sub = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _v0.a;
				return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
			}
		}
	});
var $elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!$elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_v0.$ === 'SubTree') {
					var sub = _v0.a;
					var $temp$oldShift = oldShift - $elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var $elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = $elm$core$Array$bitMask & (endIdx >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_v0.$ === 'SubTree') {
			var sub = _v0.a;
			var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
			return (!$elm$core$Elm$JsArray$length(newSub)) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				$elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				$elm$core$Array$SubTree(newSub),
				A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var $elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = $elm$core$Array$tailIndex(end);
				var depth = $elm$core$Basics$floor(
					A2(
						$elm$core$Basics$logBase,
						$elm$core$Array$branchFactor,
						A2($elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						$elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3($elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var $elm$core$Array$translateIndex = F2(
	function (index, _v0) {
		var len = _v0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var $elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2($elm$core$Array$translateIndex, to, array);
		var correctFrom = A2($elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? $elm$core$Array$empty : A2(
			$elm$core$Array$sliceLeft,
			correctFrom,
			A2($elm$core$Array$sliceRight, correctTo, array));
	});
var $icidasset$elm_sha$SHA$Internal$computeChunk = F4(
	function (setup, chunkComputer, pieces, hashTable) {
		computeChunk:
		while (true) {
			var newHashTable = A3(
				$icidasset$elm_sha$SHA$Internal$compress,
				setup,
				hashTable,
				A3(
					$icidasset$elm_sha$SHA$Internal$extendInitialSchedule,
					setup,
					chunkComputer,
					A3(
						$elm$core$Array$slice,
						A2($elm$core$Basics$max, 0, (chunkComputer.currentChunk - 1) * 16),
						chunkComputer.currentChunk * 16,
						pieces)));
			if (_Utils_cmp(chunkComputer.currentChunk, chunkComputer.totalChunks) < 0) {
				var $temp$setup = setup,
					$temp$chunkComputer = _Utils_update(
					chunkComputer,
					{currentChunk: chunkComputer.currentChunk + 1}),
					$temp$pieces = pieces,
					$temp$hashTable = newHashTable;
				setup = $temp$setup;
				chunkComputer = $temp$chunkComputer;
				pieces = $temp$pieces;
				hashTable = $temp$hashTable;
				continue computeChunk;
			} else {
				return newHashTable;
			}
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm_community$list_extra$List$Extra$greedyGroupsOfWithStep = F3(
	function (size, step, list) {
		if ((size <= 0) || (step <= 0)) {
			return _List_Nil;
		} else {
			var go = F2(
				function (xs, acc) {
					go:
					while (true) {
						if ($elm$core$List$isEmpty(xs)) {
							return $elm$core$List$reverse(acc);
						} else {
							var $temp$xs = A2($elm$core$List$drop, step, xs),
								$temp$acc = A2(
								$elm$core$List$cons,
								A2($elm$core$List$take, size, xs),
								acc);
							xs = $temp$xs;
							acc = $temp$acc;
							continue go;
						}
					}
				});
			return A2(go, list, _List_Nil);
		}
	});
var $elm_community$list_extra$List$Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3($elm_community$list_extra$List$Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$core$Elm$JsArray$map = _JsArray_map;
var $elm$core$Array$map = F2(
	function (func, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = function (node) {
			if (node.$ === 'SubTree') {
				var subTree = node.a;
				return $elm$core$Array$SubTree(
					A2($elm$core$Elm$JsArray$map, helper, subTree));
			} else {
				var values = node.a;
				return $elm$core$Array$Leaf(
					A2($elm$core$Elm$JsArray$map, func, values));
			}
		};
		return A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A2($elm$core$Elm$JsArray$map, helper, tree),
			A2($elm$core$Elm$JsArray$map, func, tail));
	});
var $elm$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			$elm$core$Array$initialize,
			n,
			function (_v0) {
				return e;
			});
	});
var $icidasset$elm_sha$SHA$Internal$compute = F2(
	function (setup, bits) {
		var scheduleSize = $elm$core$Array$length(setup.roundConstants) - 1;
		var chunkComputer = {
			currentChunk: 1,
			scheduleExtArray: A2($elm$core$Array$repeat, scheduleSize - 15, $icidasset$elm_binary$Binary$empty),
			scheduleExtRange: A2($elm$core$List$range, 16, scheduleSize),
			totalChunks: $elm$core$Basics$ceiling(
				$icidasset$elm_binary$Binary$width(bits) / setup.chunkSize)
		};
		return A4(
			$icidasset$elm_sha$SHA$Internal$computeChunk,
			setup,
			chunkComputer,
			A2(
				$elm$core$Array$map,
				$icidasset$elm_binary$Binary$fromBooleans,
				$elm$core$Array$fromList(
					A2(
						$elm_community$list_extra$List$Extra$greedyGroupsOf,
						(setup.chunkSize / 16) | 0,
						$icidasset$elm_binary$Binary$toBooleans(bits)))),
			setup.initialHashTable);
	});
var $icidasset$elm_sha$SHA$Internal$HashTable$partialHashTableToBits = F2(
	function (accessors, hashTable) {
		return $icidasset$elm_binary$Binary$concat(
			A2(
				$elm$core$List$map,
				function (accessor) {
					return accessor(hashTable);
				},
				accessors));
	});
var $icidasset$elm_sha$SHA$Internal$HashTable$hashTableToBits = $icidasset$elm_sha$SHA$Internal$HashTable$partialHashTableToBits(
	_List_fromArray(
		[
			function ($) {
			return $.a;
		},
			function ($) {
			return $.b;
		},
			function ($) {
			return $.c;
		},
			function ($) {
			return $.d;
		},
			function ($) {
			return $.e;
		},
			function ($) {
			return $.f;
		},
			function ($) {
			return $.g;
		},
			function ($) {
			return $.h;
		}
		]));
var $icidasset$elm_sha$SHA$Internal$preprocess = F2(
	function (_v0, message) {
		var blockLength = _v0.blockLength;
		var l = $icidasset$elm_binary$Binary$width(message);
		var k = blockLength - A2($elm$core$Basics$modBy, blockLength, (l + 1) + ((blockLength / 8) | 0));
		return $icidasset$elm_binary$Binary$concat(
			_List_fromArray(
				[
					message,
					$icidasset$elm_binary$Binary$fromBooleans(
					_List_fromArray(
						[true])),
					$icidasset$elm_binary$Binary$fromBooleans(
					A2($elm$core$List$repeat, k, false)),
					A2(
					$icidasset$elm_binary$Binary$ensureSize,
					(blockLength / 8) | 0,
					$icidasset$elm_binary$Binary$fromDecimal(l))
				]));
	});
var $icidasset$elm_sha$SHA$sha256 = function (message) {
	return $icidasset$elm_sha$SHA$Internal$HashTable$hashTableToBits(
		A2(
			$icidasset$elm_sha$SHA$Internal$compute,
			$icidasset$elm_sha$SHA$Internal$SHA256$computationSetup,
			A2(
				$icidasset$elm_sha$SHA$Internal$preprocess,
				{blockLength: 512},
				message)));
};
var $author$project$Sources$Services$AmazonS3$Presign$hmacSha256 = $author$project$Cryptography$Hmac$encrypt64($icidasset$elm_sha$SHA$sha256);
var $ryannhg$date_format$DateFormat$HourMilitaryFixed = {$: 'HourMilitaryFixed'};
var $ryannhg$date_format$DateFormat$hourMilitaryFixed = $ryannhg$date_format$DateFormat$HourMilitaryFixed;
var $author$project$Sources$Processing$httpMethod = function (method) {
	if (method.$ === 'Get') {
		return 'GET';
	} else {
		return 'HEAD';
	}
};
var $elm_community$maybe_extra$Maybe$Extra$isJust = function (m) {
	if (m.$ === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var $ryannhg$date_format$DateFormat$MinuteFixed = {$: 'MinuteFixed'};
var $ryannhg$date_format$DateFormat$minuteFixed = $ryannhg$date_format$DateFormat$MinuteFixed;
var $ryannhg$date_format$DateFormat$MonthFixed = {$: 'MonthFixed'};
var $ryannhg$date_format$DateFormat$monthFixed = $ryannhg$date_format$DateFormat$MonthFixed;
var $elm$url$Url$percentEncode = _Url_percentEncode;
var $elm$url$Url$Builder$QueryParameter = F2(
	function (a, b) {
		return {$: 'QueryParameter', a: a, b: b};
	});
var $elm$url$Url$Builder$string = F2(
	function (key, value) {
		return A2(
			$elm$url$Url$Builder$QueryParameter,
			$elm$url$Url$percentEncode(key),
			$elm$url$Url$percentEncode(value));
	});
var $elm$url$Url$Builder$toQueryPair = function (_v0) {
	var key = _v0.a;
	var value = _v0.b;
	return key + ('=' + value);
};
var $elm$url$Url$Builder$toQuery = function (parameters) {
	if (!parameters.b) {
		return '';
	} else {
		return '?' + A2(
			$elm$core$String$join,
			'&',
			A2($elm$core$List$map, $elm$url$Url$Builder$toQueryPair, parameters));
	}
};
var $author$project$Tuple$Ext$uncurry = F2(
	function (fn, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		return A2(fn, a, b);
	});
var $author$project$Common$queryString = A2(
	$elm$core$Basics$composeR,
	$elm$core$List$map(
		$author$project$Tuple$Ext$uncurry($elm$url$Url$Builder$string)),
	$elm$url$Url$Builder$toQuery);
var $ryannhg$date_format$DateFormat$SecondFixed = {$: 'SecondFixed'};
var $ryannhg$date_format$DateFormat$secondFixed = $ryannhg$date_format$DateFormat$SecondFixed;
var $ryannhg$date_format$DateFormat$Text = function (a) {
	return {$: 'Text', a: a};
};
var $ryannhg$date_format$DateFormat$text = $ryannhg$date_format$DateFormat$Text;
var $icidasset$elm_binary$Binary$binaryToHexChar = function (binary) {
	_v0$16:
	while (true) {
		if (binary.b) {
			if (!binary.a) {
				if (binary.b.b) {
					if (!binary.b.a) {
						if (binary.b.b.b) {
							if (!binary.b.b.a) {
								if (binary.b.b.b.b) {
									if (!binary.b.b.b.a) {
										if (!binary.b.b.b.b.b) {
											var _v1 = binary.b;
											var _v2 = _v1.b;
											var _v3 = _v2.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('0'));
										} else {
											break _v0$16;
										}
									} else {
										if (!binary.b.b.b.b.b) {
											var _v4 = binary.b;
											var _v5 = _v4.b;
											var _v6 = _v5.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('1'));
										} else {
											break _v0$16;
										}
									}
								} else {
									break _v0$16;
								}
							} else {
								if (binary.b.b.b.b) {
									if (!binary.b.b.b.a) {
										if (!binary.b.b.b.b.b) {
											var _v7 = binary.b;
											var _v8 = _v7.b;
											var _v9 = _v8.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('2'));
										} else {
											break _v0$16;
										}
									} else {
										if (!binary.b.b.b.b.b) {
											var _v10 = binary.b;
											var _v11 = _v10.b;
											var _v12 = _v11.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('3'));
										} else {
											break _v0$16;
										}
									}
								} else {
									break _v0$16;
								}
							}
						} else {
							break _v0$16;
						}
					} else {
						if (binary.b.b.b) {
							if (!binary.b.b.a) {
								if (binary.b.b.b.b) {
									if (!binary.b.b.b.a) {
										if (!binary.b.b.b.b.b) {
											var _v13 = binary.b;
											var _v14 = _v13.b;
											var _v15 = _v14.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('4'));
										} else {
											break _v0$16;
										}
									} else {
										if (!binary.b.b.b.b.b) {
											var _v16 = binary.b;
											var _v17 = _v16.b;
											var _v18 = _v17.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('5'));
										} else {
											break _v0$16;
										}
									}
								} else {
									break _v0$16;
								}
							} else {
								if (binary.b.b.b.b) {
									if (!binary.b.b.b.a) {
										if (!binary.b.b.b.b.b) {
											var _v19 = binary.b;
											var _v20 = _v19.b;
											var _v21 = _v20.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('6'));
										} else {
											break _v0$16;
										}
									} else {
										if (!binary.b.b.b.b.b) {
											var _v22 = binary.b;
											var _v23 = _v22.b;
											var _v24 = _v23.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('7'));
										} else {
											break _v0$16;
										}
									}
								} else {
									break _v0$16;
								}
							}
						} else {
							break _v0$16;
						}
					}
				} else {
					break _v0$16;
				}
			} else {
				if (binary.b.b) {
					if (!binary.b.a) {
						if (binary.b.b.b) {
							if (!binary.b.b.a) {
								if (binary.b.b.b.b) {
									if (!binary.b.b.b.a) {
										if (!binary.b.b.b.b.b) {
											var _v25 = binary.b;
											var _v26 = _v25.b;
											var _v27 = _v26.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('8'));
										} else {
											break _v0$16;
										}
									} else {
										if (!binary.b.b.b.b.b) {
											var _v28 = binary.b;
											var _v29 = _v28.b;
											var _v30 = _v29.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('9'));
										} else {
											break _v0$16;
										}
									}
								} else {
									break _v0$16;
								}
							} else {
								if (binary.b.b.b.b) {
									if (!binary.b.b.b.a) {
										if (!binary.b.b.b.b.b) {
											var _v31 = binary.b;
											var _v32 = _v31.b;
											var _v33 = _v32.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('A'));
										} else {
											break _v0$16;
										}
									} else {
										if (!binary.b.b.b.b.b) {
											var _v34 = binary.b;
											var _v35 = _v34.b;
											var _v36 = _v35.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('B'));
										} else {
											break _v0$16;
										}
									}
								} else {
									break _v0$16;
								}
							}
						} else {
							break _v0$16;
						}
					} else {
						if (binary.b.b.b) {
							if (!binary.b.b.a) {
								if (binary.b.b.b.b) {
									if (!binary.b.b.b.a) {
										if (!binary.b.b.b.b.b) {
											var _v37 = binary.b;
											var _v38 = _v37.b;
											var _v39 = _v38.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('C'));
										} else {
											break _v0$16;
										}
									} else {
										if (!binary.b.b.b.b.b) {
											var _v40 = binary.b;
											var _v41 = _v40.b;
											var _v42 = _v41.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('D'));
										} else {
											break _v0$16;
										}
									}
								} else {
									break _v0$16;
								}
							} else {
								if (binary.b.b.b.b) {
									if (!binary.b.b.b.a) {
										if (!binary.b.b.b.b.b) {
											var _v43 = binary.b;
											var _v44 = _v43.b;
											var _v45 = _v44.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('E'));
										} else {
											break _v0$16;
										}
									} else {
										if (!binary.b.b.b.b.b) {
											var _v46 = binary.b;
											var _v47 = _v46.b;
											var _v48 = _v47.b;
											return $elm$core$Maybe$Just(
												_Utils_chr('F'));
										} else {
											break _v0$16;
										}
									}
								} else {
									break _v0$16;
								}
							}
						} else {
							break _v0$16;
						}
					}
				} else {
					break _v0$16;
				}
			}
		} else {
			break _v0$16;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $icidasset$elm_binary$Binary$toHex = function (_v0) {
	var bits = _v0.a;
	var missingLeadingZeros = 4 - A2(
		$elm$core$Basics$modBy,
		4,
		$elm$core$List$length(bits));
	var bitsWithLeadingZeros = ((!missingLeadingZeros) || (missingLeadingZeros === 4)) ? bits : _Utils_ap(
		A2($elm$core$List$repeat, missingLeadingZeros, false),
		bits);
	return $elm$core$String$fromList(
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				$icidasset$elm_binary$Binary$binaryToHexChar,
				$elm$core$Maybe$withDefault(
					_Utils_chr('0'))),
			A2($elm_community$list_extra$List$Extra$greedyGroupsOf, 4, bitsWithLeadingZeros)));
};
var $elm$core$String$trim = _String_trim;
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $ryannhg$date_format$DateFormat$YearNumber = {$: 'YearNumber'};
var $ryannhg$date_format$DateFormat$yearNumber = $ryannhg$date_format$DateFormat$YearNumber;
var $author$project$Sources$Services$AmazonS3$Presign$presignedUrl = F6(
	function (method, lifeExpectancyInSeconds, extraParams, currentTime, srcData, pathToFile) {
		var timestamp = A3(
			$ryannhg$date_format$DateFormat$format,
			_List_fromArray(
				[
					$ryannhg$date_format$DateFormat$yearNumber,
					$ryannhg$date_format$DateFormat$monthFixed,
					$ryannhg$date_format$DateFormat$dayOfMonthFixed,
					$ryannhg$date_format$DateFormat$text('T'),
					$ryannhg$date_format$DateFormat$hourMilitaryFixed,
					$ryannhg$date_format$DateFormat$minuteFixed,
					$ryannhg$date_format$DateFormat$secondFixed,
					$ryannhg$date_format$DateFormat$text('Z')
				]),
			$elm$time$Time$utc,
			currentTime);
		var date = A3(
			$ryannhg$date_format$DateFormat$format,
			_List_fromArray(
				[$ryannhg$date_format$DateFormat$yearNumber, $ryannhg$date_format$DateFormat$monthFixed, $ryannhg$date_format$DateFormat$dayOfMonthFixed]),
			$elm$time$Time$utc,
			currentTime);
		var aws = srcData;
		var bucketName = A2($author$project$Dict$Ext$fetchUnknown, 'bucketName', aws);
		var customHost = function () {
			var _v2 = A3($author$project$Dict$Ext$fetch, 'host', '', aws);
			if (_v2 === '') {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = _v2;
				return $elm$core$Maybe$Just(x);
			}
		}();
		var filePathPrefix = $elm_community$maybe_extra$Maybe$Extra$isJust(customHost) ? (bucketName + '/') : '';
		var filePath = A2(
			$elm$core$String$append,
			'/' + filePathPrefix,
			A2(
				$elm$core$String$join,
				'/',
				A2(
					$elm$core$List$map,
					A2($elm$core$Basics$composeR, $elm$url$Url$percentEncode, $author$project$Sources$Services$AmazonS3$Presign$encodeAdditionalCharacters),
					A2(
						$elm$core$String$split,
						'/',
						A2($author$project$String$Ext$chopStart, '/', pathToFile)))));
		var protocol = A2(
			$elm$core$String$contains,
			'http://',
			A2($elm$core$Maybe$withDefault, '', customHost)) ? 'http://' : 'https://';
		var region = A2($author$project$Dict$Ext$fetchUnknown, 'region', aws);
		var credential = A2(
			$elm$core$String$join,
			'/',
			_List_fromArray(
				[
					A2($author$project$Dict$Ext$fetchUnknown, 'accessKey', aws),
					date,
					region,
					's3',
					'aws4_request'
				]));
		var queryString = $author$project$Sources$Services$AmazonS3$Presign$encodeAdditionalCharacters(
			A2(
				$elm$core$String$dropLeft,
				1,
				$author$project$Common$queryString(
					A2(
						$elm$core$List$sortBy,
						$elm$core$Tuple$first,
						A2(
							$elm$core$List$append,
							extraParams,
							_List_fromArray(
								[
									_Utils_Tuple2('X-Amz-Algorithm', 'AWS4-HMAC-SHA256'),
									_Utils_Tuple2('X-Amz-Credential', credential),
									_Utils_Tuple2('X-Amz-Date', timestamp),
									_Utils_Tuple2(
									'X-Amz-Expires',
									$elm$core$String$fromInt(lifeExpectancyInSeconds)),
									_Utils_Tuple2('X-Amz-SignedHeaders', 'host')
								]))))));
		var host = function () {
			if (customHost.$ === 'Just') {
				var h = customHost.a;
				return A2(
					$author$project$String$Ext$chopEnd,
					'/',
					A2(
						$author$project$String$Ext$chopStart,
						'https://',
						A2($author$project$String$Ext$chopStart, 'http://', h)));
			} else {
				var _v1 = $elm$core$String$trim(region);
				if (_v1 === '') {
					return bucketName + '.s3.amazonaws.com';
				} else {
					var r = _v1;
					return bucketName + ('.s3.' + (r + '.amazonaws.com'));
				}
			}
		}();
		var request = A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[
					$author$project$Sources$Processing$httpMethod(method),
					filePath,
					queryString,
					'host:' + host,
					'',
					'host',
					'UNSIGNED-PAYLOAD'
				]));
		var stringToSign = A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[
					'AWS4-HMAC-SHA256',
					timestamp,
					A2(
					$elm$core$String$join,
					'/',
					_List_fromArray(
						[date, region, 's3', 'aws4_request'])),
					$elm$core$String$toLower(
					$icidasset$elm_binary$Binary$toHex(
						$icidasset$elm_sha$SHA$sha256(
							$icidasset$elm_binary$Binary$fromStringAsUtf8(request))))
				]));
		var signature = $elm$core$String$toLower(
			$icidasset$elm_binary$Binary$toHex(
				A2(
					$author$project$Sources$Services$AmazonS3$Presign$hmacSha256,
					stringToSign,
					A2(
						$author$project$Sources$Services$AmazonS3$Presign$hmacSha256,
						'aws4_request',
						A2(
							$author$project$Sources$Services$AmazonS3$Presign$hmacSha256,
							's3',
							A2(
								$author$project$Sources$Services$AmazonS3$Presign$hmacSha256,
								region,
								A2(
									$author$project$Sources$Services$AmazonS3$Presign$hmacSha256,
									date,
									$icidasset$elm_binary$Binary$fromStringAsUtf8(
										'AWS4' + A2($author$project$Dict$Ext$fetchUnknown, 'secretKey', aws)))))))));
		return $elm$core$String$concat(
			_List_fromArray(
				[protocol, host, filePath, '?', queryString, '&X-Amz-Signature=', signature]));
	});
var $author$project$Sources$Services$AmazonS3$makeTrackUrl = F5(
	function (currentTime, _v0, srcData, method, pathToFile) {
		return A6($author$project$Sources$Services$AmazonS3$Presign$presignedUrl, method, 172800, _List_Nil, currentTime, srcData, pathToFile);
	});
var $author$project$Sources$Services$Azure$Authorization$Blob = {$: 'Blob'};
var $author$project$Sources$Services$Azure$Authorization$Read = {$: 'Read'};
var $icidasset$elm_binary$Binary$chunksOf = F2(
	function (n, _v0) {
		var bits = _v0.a;
		return A2(
			$elm$core$List$map,
			$icidasset$elm_binary$Binary$Bits,
			A2($elm_community$list_extra$List$Extra$greedyGroupsOf, n, bits));
	});
var $elm_community$list_extra$List$Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				if (!list.b) {
					return $elm$core$List$reverse(memo);
				} else {
					var x = list.a;
					var xs = list.b;
					if (predicate(x)) {
						var $temp$memo = A2($elm$core$List$cons, x, memo),
							$temp$list = xs;
						memo = $temp$memo;
						list = $temp$list;
						continue takeWhileMemo;
					} else {
						return $elm$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(_List_Nil);
};
var $newlandsvalley$elm_binary_base64$BinaryBase64$dcd = function (cs) {
	return A2(
		$elm$core$List$map,
		function (h) {
			return ((_Utils_cmp(
				h,
				_Utils_chr('Z')) < 1) && (_Utils_cmp(
				h,
				_Utils_chr('A')) > -1)) ? ($elm$core$Char$toCode(h) - $elm$core$Char$toCode(
				_Utils_chr('A'))) : (((_Utils_cmp(
				h,
				_Utils_chr('0')) > -1) && (_Utils_cmp(
				h,
				_Utils_chr('9')) < 1)) ? (($elm$core$Char$toCode(h) - $elm$core$Char$toCode(
				_Utils_chr('0'))) + 52) : (((_Utils_cmp(
				h,
				_Utils_chr('a')) > -1) && (_Utils_cmp(
				h,
				_Utils_chr('z')) < 1)) ? (($elm$core$Char$toCode(h) - $elm$core$Char$toCode(
				_Utils_chr('a'))) + 26) : (_Utils_eq(
				h,
				_Utils_chr('+')) ? 62 : (_Utils_eq(
				h,
				_Utils_chr('/')) ? 63 : 0))));
		},
		A2(
			$elm_community$list_extra$List$Extra$takeWhile,
			function (a) {
				return !_Utils_eq(
					a,
					_Utils_chr('='));
			},
			cs));
};
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $newlandsvalley$elm_binary_base64$BinaryBase64$int4_char3 = function (is) {
	var groupsOfFour = function (values) {
		var grouper = F2(
			function (elem, acc) {
				if (!acc.b) {
					return _List_fromArray(
						[
							_List_fromArray(
							[elem])
						]);
				} else {
					var x = acc.a;
					var xs = acc.b;
					return ($elm$core$List$length(x) === 4) ? A2(
						$elm$core$List$cons,
						_List_fromArray(
							[elem]),
						acc) : A2(
						$elm$core$List$cons,
						_Utils_ap(
							x,
							_List_fromArray(
								[elem])),
						xs);
				}
			});
		return $elm$core$List$reverse(
			A3($elm$core$List$foldl, grouper, _List_Nil, values));
	};
	return $elm$core$List$concat(
		A2(
			$elm$core$List$map,
			function (subgroup) {
				if (subgroup.b) {
					if (subgroup.b.b) {
						if (subgroup.b.b.b) {
							if (subgroup.b.b.b.b) {
								var a = subgroup.a;
								var _v1 = subgroup.b;
								var b = _v1.a;
								var _v2 = _v1.b;
								var c = _v2.a;
								var _v3 = _v2.b;
								var d = _v3.a;
								var t = _v3.b;
								var n = ((a << 18) | (b << 12)) | ((c << 6) | d);
								return A2(
									$elm$core$List$cons,
									$elm$core$Char$fromCode((n >> 16) & 255),
									A2(
										$elm$core$List$cons,
										$elm$core$Char$fromCode((n >> 8) & 255),
										A2(
											$elm$core$List$cons,
											$elm$core$Char$fromCode(n & 255),
											_List_Nil)));
							} else {
								var a = subgroup.a;
								var _v4 = subgroup.b;
								var b = _v4.a;
								var _v5 = _v4.b;
								var c = _v5.a;
								var n = ((a << 18) | (b << 12)) | (c << 6);
								return _List_fromArray(
									[
										$elm$core$Char$fromCode((n >> 16) & 255),
										$elm$core$Char$fromCode((n >> 8) & 255)
									]);
							}
						} else {
							var a = subgroup.a;
							var _v6 = subgroup.b;
							var b = _v6.a;
							var n = (a << 18) | (b << 12);
							return _List_fromArray(
								[
									$elm$core$Char$fromCode((n >> 16) & 255)
								]);
						}
					} else {
						return _List_Nil;
					}
				} else {
					return _List_Nil;
				}
			},
			groupsOfFour(is)));
};
var $newlandsvalley$elm_binary_base64$BinaryBase64$decodeString = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$toList,
	A2(
		$elm$core$Basics$composeR,
		$newlandsvalley$elm_binary_base64$BinaryBase64$dcd,
		A2(
			$elm$core$Basics$composeR,
			$newlandsvalley$elm_binary_base64$BinaryBase64$int4_char3,
			$elm$core$List$map($elm$core$Char$toCode))));
var $newlandsvalley$elm_binary_base64$BinaryBase64$encodeArray = $elm$core$Array$fromList(
	_List_fromArray(
		[
			_Utils_chr('A'),
			_Utils_chr('B'),
			_Utils_chr('C'),
			_Utils_chr('D'),
			_Utils_chr('E'),
			_Utils_chr('F'),
			_Utils_chr('G'),
			_Utils_chr('H'),
			_Utils_chr('I'),
			_Utils_chr('J'),
			_Utils_chr('K'),
			_Utils_chr('L'),
			_Utils_chr('M'),
			_Utils_chr('N'),
			_Utils_chr('O'),
			_Utils_chr('P'),
			_Utils_chr('Q'),
			_Utils_chr('R'),
			_Utils_chr('S'),
			_Utils_chr('T'),
			_Utils_chr('U'),
			_Utils_chr('V'),
			_Utils_chr('W'),
			_Utils_chr('X'),
			_Utils_chr('Y'),
			_Utils_chr('Z'),
			_Utils_chr('a'),
			_Utils_chr('b'),
			_Utils_chr('c'),
			_Utils_chr('d'),
			_Utils_chr('e'),
			_Utils_chr('f'),
			_Utils_chr('g'),
			_Utils_chr('h'),
			_Utils_chr('i'),
			_Utils_chr('j'),
			_Utils_chr('k'),
			_Utils_chr('l'),
			_Utils_chr('m'),
			_Utils_chr('n'),
			_Utils_chr('o'),
			_Utils_chr('p'),
			_Utils_chr('q'),
			_Utils_chr('r'),
			_Utils_chr('s'),
			_Utils_chr('t'),
			_Utils_chr('u'),
			_Utils_chr('v'),
			_Utils_chr('w'),
			_Utils_chr('x'),
			_Utils_chr('y'),
			_Utils_chr('z'),
			_Utils_chr('0'),
			_Utils_chr('1'),
			_Utils_chr('2'),
			_Utils_chr('3'),
			_Utils_chr('4'),
			_Utils_chr('5'),
			_Utils_chr('6'),
			_Utils_chr('7'),
			_Utils_chr('8'),
			_Utils_chr('9'),
			_Utils_chr('+'),
			_Utils_chr('/')
		]));
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
var $newlandsvalley$elm_binary_base64$BinaryBase64$isBase64Char = function (c) {
	return A2(
		$elm$core$List$member,
		c,
		$elm$core$Array$toList($newlandsvalley$elm_binary_base64$BinaryBase64$encodeArray)) || _Utils_eq(
		c,
		_Utils_chr('='));
};
var $newlandsvalley$elm_binary_base64$BinaryBase64$isBase64 = $elm$core$String$all($newlandsvalley$elm_binary_base64$BinaryBase64$isBase64Char);
var $newlandsvalley$elm_binary_base64$BinaryBase64$decode = function (s) {
	return $newlandsvalley$elm_binary_base64$BinaryBase64$isBase64(s) ? $elm$core$Result$Ok(
		$newlandsvalley$elm_binary_base64$BinaryBase64$decodeString(s)) : $elm$core$Result$Err('invalid Base64 string');
};
var $newlandsvalley$elm_binary_base64$BinaryBase64$char3_int4_fold = F2(
	function (cs, acc) {
		char3_int4_fold:
		while (true) {
			if (cs.b) {
				if (cs.b.b) {
					if (cs.b.b.b) {
						var a = cs.a;
						var _v1 = cs.b;
						var b = _v1.a;
						var _v2 = _v1.b;
						var c = _v2.a;
						var t = _v2.b;
						var n = $elm$core$Char$toCode(c) | (($elm$core$Char$toCode(a) << 16) | ($elm$core$Char$toCode(b) << 8));
						var $temp$cs = t,
							$temp$acc = _Utils_ap(
							acc,
							_List_fromArray(
								[(n >> 18) & 63, (n >> 12) & 63, (n >> 6) & 63, n & 63]));
						cs = $temp$cs;
						acc = $temp$acc;
						continue char3_int4_fold;
					} else {
						var a = cs.a;
						var _v3 = cs.b;
						var b = _v3.a;
						var n = ($elm$core$Char$toCode(a) << 16) | ($elm$core$Char$toCode(b) << 8);
						return _Utils_ap(
							acc,
							_List_fromArray(
								[(n >> 18) & 63, (n >> 12) & 63, (n >> 6) & 63]));
					}
				} else {
					var a = cs.a;
					var n = $elm$core$Char$toCode(a) << 16;
					return _Utils_ap(
						acc,
						_List_fromArray(
							[(n >> 18) & 63, (n >> 12) & 63]));
				}
			} else {
				return acc;
			}
		}
	});
var $newlandsvalley$elm_binary_base64$BinaryBase64$char3_int4 = function (cs) {
	return A2($newlandsvalley$elm_binary_base64$BinaryBase64$char3_int4_fold, cs, _List_Nil);
};
var $newlandsvalley$elm_binary_base64$BinaryBase64$enc1 = function (i) {
	return A2(
		$elm$core$Maybe$withDefault,
		_Utils_chr('?'),
		A2($elm$core$Array$get, i, $newlandsvalley$elm_binary_base64$BinaryBase64$encodeArray));
};
var $newlandsvalley$elm_binary_base64$BinaryBase64$quadruplets_fold = F2(
	function (cs, acc) {
		quadruplets_fold:
		while (true) {
			if (cs.b) {
				if (cs.b.b) {
					if (cs.b.b.b) {
						if (cs.b.b.b.b) {
							var a = cs.a;
							var _v1 = cs.b;
							var b = _v1.a;
							var _v2 = _v1.b;
							var c = _v2.a;
							var _v3 = _v2.b;
							var d = _v3.a;
							var t = _v3.b;
							var $temp$cs = t,
								$temp$acc = _Utils_ap(
								acc,
								_List_fromArray(
									[a, b, c, d]));
							cs = $temp$cs;
							acc = $temp$acc;
							continue quadruplets_fold;
						} else {
							var a = cs.a;
							var _v4 = cs.b;
							var b = _v4.a;
							var _v5 = _v4.b;
							var c = _v5.a;
							return _Utils_ap(
								acc,
								_List_fromArray(
									[
										a,
										b,
										c,
										_Utils_chr('=')
									]));
						}
					} else {
						var a = cs.a;
						var _v6 = cs.b;
						var b = _v6.a;
						return _Utils_ap(
							acc,
							_List_fromArray(
								[
									a,
									b,
									_Utils_chr('='),
									_Utils_chr('=')
								]));
					}
				} else {
					return _List_Nil;
				}
			} else {
				return acc;
			}
		}
	});
var $newlandsvalley$elm_binary_base64$BinaryBase64$quadruplets = function (cs) {
	return A2($newlandsvalley$elm_binary_base64$BinaryBase64$quadruplets_fold, cs, _List_Nil);
};
var $newlandsvalley$elm_binary_base64$BinaryBase64$enc = A2(
	$elm$core$Basics$composeR,
	$elm$core$List$map($newlandsvalley$elm_binary_base64$BinaryBase64$enc1),
	$newlandsvalley$elm_binary_base64$BinaryBase64$quadruplets);
var $newlandsvalley$elm_binary_base64$BinaryBase64$encode = A2(
	$elm$core$Basics$composeR,
	$elm$core$List$map($elm$core$Char$fromCode),
	A2(
		$elm$core$Basics$composeR,
		$newlandsvalley$elm_binary_base64$BinaryBase64$char3_int4,
		A2($elm$core$Basics$composeR, $newlandsvalley$elm_binary_base64$BinaryBase64$enc, $elm$core$String$fromList)));
var $elm$core$Basics$pow = _Basics_pow;
var $icidasset$elm_binary$Binary$toDecimal = function (_v0) {
	var bits = _v0.a;
	return A3(
		$elm$core$List$foldl,
		F2(
			function (bit, _v1) {
				var x = _v1.a;
				var exponent = _v1.b;
				return _Utils_Tuple2(
					(A2($elm$core$Basics$pow, 2, exponent) * A3($icidasset$elm_binary$Binary$ifThenElse, bit, 1, 0)) + x,
					exponent - 1);
			}),
		_Utils_Tuple2(
			0,
			$elm$core$List$length(bits) - 1),
		bits).a;
};
var $author$project$Sources$Services$Azure$Authorization$makeSignature = function (_v0) {
	var accountKey = _v0.accountKey;
	var accountName = _v0.accountName;
	var expiryTime = _v0.expiryTime;
	var permissions = _v0.permissions;
	var protocol = _v0.protocol;
	var resources = _v0.resources;
	var services = _v0.services;
	var startTime = _v0.startTime;
	var version = _v0.version;
	var message = A2(
		$elm$core$String$join,
		'\n',
		_List_fromArray(
			[accountName, permissions, services, resources, startTime, expiryTime, '', protocol, version + '\n']));
	return $newlandsvalley$elm_binary_base64$BinaryBase64$encode(
		A2(
			$elm$core$List$map,
			$icidasset$elm_binary$Binary$toDecimal,
			A2(
				$icidasset$elm_binary$Binary$chunksOf,
				8,
				A3(
					$author$project$Cryptography$Hmac$encrypt64,
					$icidasset$elm_sha$SHA$sha256,
					message,
					$icidasset$elm_binary$Binary$concat(
						A2(
							$elm$core$List$map,
							A2(
								$elm$core$Basics$composeR,
								$icidasset$elm_binary$Binary$fromDecimal,
								$icidasset$elm_binary$Binary$ensureSize(8)),
							A2(
								$elm$core$Result$withDefault,
								_List_Nil,
								$newlandsvalley$elm_binary_base64$BinaryBase64$decode(accountKey))))))));
};
var $author$project$Sources$Services$Azure$Authorization$presignedUrl = F8(
	function (storageMethod, computation, _v0, _v1, currentTime, srcData, pathToFile, params) {
		var resourceType = function () {
			if (storageMethod.$ === 'Blob') {
				return 'blob';
			} else {
				return 'file';
			}
		}();
		var resType = function () {
			if (storageMethod.$ === 'Blob') {
				return 'container';
			} else {
				return 'directory';
			}
		}();
		var permissions = function () {
			if (computation.$ === 'List') {
				return 'l';
			} else {
				return 'r';
			}
		}();
		var expiryTime = A3(
			$ryannhg$date_format$DateFormat$format,
			_List_fromArray(
				[
					$ryannhg$date_format$DateFormat$yearNumber,
					$ryannhg$date_format$DateFormat$text('-'),
					$ryannhg$date_format$DateFormat$monthFixed,
					$ryannhg$date_format$DateFormat$text('-'),
					$ryannhg$date_format$DateFormat$dayOfMonthFixed,
					$ryannhg$date_format$DateFormat$text('T'),
					$ryannhg$date_format$DateFormat$hourMilitaryFixed,
					$ryannhg$date_format$DateFormat$text(':'),
					$ryannhg$date_format$DateFormat$minuteFixed,
					$ryannhg$date_format$DateFormat$text('Z')
				]),
			$elm$time$Time$utc,
			$elm$time$Time$millisToPosix(
				3600000 + $elm$time$Time$posixToMillis(currentTime)));
		var azure = srcData;
		var container = A2($author$project$Dict$Ext$fetchUnknown, 'container', azure);
		var accountName = A2($author$project$Dict$Ext$fetchUnknown, 'accountName', azure);
		var accountKey = A2($author$project$Dict$Ext$fetchUnknown, 'accountKey', azure);
		var signatureStuff = {accountKey: accountKey, accountName: accountName, expiryTime: expiryTime, permissions: permissions, protocol: 'https', resources: 'co', services: 'bf', startTime: '', version: '2017-04-17'};
		return $elm$core$String$concat(
			_List_fromArray(
				[
					'https://',
					$elm$url$Url$percentEncode(accountName),
					'.',
					$elm$url$Url$percentEncode(resourceType),
					'.core.windows.net/',
					$elm$url$Url$percentEncode(container),
					'/',
					$elm$url$Url$percentEncode(
					A2($author$project$String$Ext$chopStart, '/', pathToFile)),
					function () {
					var _v2 = $author$project$Common$queryString(params);
					if (_v2 === '') {
						return '?';
					} else {
						var qs = _v2;
						return qs;
					}
				}(),
					function () {
					if (computation.$ === 'List') {
						return '&restype=' + (resType + '&comp=list');
					} else {
						return '';
					}
				}(),
					'&sv=',
					$elm$url$Url$percentEncode(signatureStuff.version),
					'&ss=',
					$elm$url$Url$percentEncode(signatureStuff.services),
					'&srt=',
					$elm$url$Url$percentEncode(signatureStuff.resources),
					'&sp=',
					$elm$url$Url$percentEncode(signatureStuff.permissions),
					'&se=',
					$elm$url$Url$percentEncode(signatureStuff.expiryTime),
					'&spr=',
					$elm$url$Url$percentEncode(signatureStuff.protocol),
					'&sig=',
					$elm$url$Url$percentEncode(
					$author$project$Sources$Services$Azure$Authorization$makeSignature(signatureStuff))
				]));
	});
var $author$project$Sources$Services$AzureBlob$makeTrackUrl = F5(
	function (currentTime, _v0, srcData, _v1, pathToFile) {
		return A8($author$project$Sources$Services$Azure$Authorization$presignedUrl, $author$project$Sources$Services$Azure$Authorization$Blob, $author$project$Sources$Services$Azure$Authorization$Read, $author$project$Sources$Processing$Get, 48, currentTime, srcData, pathToFile, _List_Nil);
	});
var $author$project$Sources$Services$Azure$Authorization$File = {$: 'File'};
var $author$project$Sources$Services$AzureFile$makeTrackUrl = F5(
	function (currentTime, _v0, srcData, _v1, pathToFile) {
		return A8($author$project$Sources$Services$Azure$Authorization$presignedUrl, $author$project$Sources$Services$Azure$Authorization$File, $author$project$Sources$Services$Azure$Authorization$Read, $author$project$Sources$Processing$Get, 48, currentTime, srcData, pathToFile, _List_Nil);
	});
var $author$project$Sources$Services$Ipfs$encodedPath = function (path) {
	return A2(
		$elm$core$String$join,
		'/',
		A2(
			$elm$core$List$map,
			$elm$url$Url$percentEncode,
			A2($elm$core$String$split, '/', path)));
};
var $author$project$Sources$Services$Ipfs$defaultGateway = 'https://ipfs.io';
var $author$project$Sources$Services$Ipfs$extractGateway = function (srcData) {
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$Sources$Services$Ipfs$defaultGateway,
		A2(
			$elm$core$Maybe$map,
			$author$project$String$Ext$chopEnd('/'),
			A2(
				$elm$core$Maybe$andThen,
				function (s) {
					if (s === '') {
						return $elm$core$Maybe$Nothing;
					} else {
						return $elm$core$Maybe$Just(s);
					}
				},
				A2(
					$elm$core$Maybe$map,
					$elm$core$String$trim,
					A2($elm$core$Dict$get, 'gateway', srcData)))));
};
var $author$project$Sources$Services$Ipfs$pathIsDnsLink = $elm$core$String$contains('.');
var $author$project$Sources$Services$Ipfs$rootHash = function (srcData) {
	return A2(
		$author$project$String$Ext$chopEnd,
		'/',
		A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$andThen,
				function (path) {
					return $author$project$Sources$Services$Ipfs$pathIsDnsLink(path) ? A2($elm$core$Dict$get, 'directoryHashFromDnsLink', srcData) : $elm$core$Maybe$Just(path);
				},
				A2($elm$core$Dict$get, 'directoryHash', srcData))));
};
var $author$project$Sources$Services$Btfs$makeTrackUrl = F5(
	function (_v0, _v1, srcData, _v2, path) {
		return $author$project$Sources$Services$Ipfs$extractGateway(srcData) + ('/btfs/' + ($author$project$Sources$Services$Ipfs$rootHash(srcData) + ('/' + $author$project$Sources$Services$Ipfs$encodedPath(path))));
	});
var $author$project$Sources$Services$Dropbox$makeTrackUrl = F5(
	function (_v0, _v1, srcData, _v2, pathToFile) {
		return 'dropbox://' + (A3($author$project$Dict$Ext$fetch, 'accessToken', '', srcData) + ('@' + pathToFile));
	});
var $author$project$String$Path$sep = '/';
var $author$project$String$Path$file = function (path) {
	return A2(
		$elm$core$Maybe$withDefault,
		path,
		$elm_community$list_extra$List$Extra$last(
			A2($elm$core$String$split, $author$project$String$Path$sep, path)));
};
var $author$project$Sources$Services$Google$makeTrackUrl = F5(
	function (currentTime, srcId, srcData, _v0, path) {
		var now = $elm$time$Time$posixToMillis(currentTime);
		var file = $author$project$String$Path$file(path);
		var fileId = A2(
			$elm$core$Maybe$withDefault,
			file,
			$elm$core$List$head(
				A2($elm$core$String$split, '?', file)));
		var expiresAt = A3(
			$author$project$Dict$Ext$fetch,
			'expiresAt',
			$elm$core$String$fromInt(now),
			srcData);
		return $elm$core$String$concat(
			_List_fromArray(
				[
					'google://',
					A3($author$project$Dict$Ext$fetch, 'accessToken', '', srcData),
					':',
					expiresAt,
					':',
					A3($author$project$Dict$Ext$fetch, 'refreshToken', '', srcData),
					':',
					A3($author$project$Dict$Ext$fetch, 'clientId', '', srcData),
					':',
					A3($author$project$Dict$Ext$fetch, 'clientSecret', '', srcData),
					':',
					srcId,
					'@',
					fileId
				]));
	});
var $author$project$Sources$Services$Ipfs$makeTrackUrl = F5(
	function (_v0, _v1, srcData, _v2, path) {
		return ((!A2($elm$core$String$contains, '/', path)) && (!A2($elm$core$String$contains, '.', path))) ? ($author$project$Sources$Services$Ipfs$extractGateway(srcData) + ('/ipfs/' + path)) : ($author$project$Sources$Services$Ipfs$extractGateway(srcData) + ('/ipfs/' + ($author$project$Sources$Services$Ipfs$rootHash(srcData) + ('/' + $author$project$Sources$Services$Ipfs$encodedPath(path)))));
	});
var $truqu$elm_base64$Base64$Encode$intToBase64 = function (i) {
	switch (i) {
		case 0:
			return 'A';
		case 1:
			return 'B';
		case 2:
			return 'C';
		case 3:
			return 'D';
		case 4:
			return 'E';
		case 5:
			return 'F';
		case 6:
			return 'G';
		case 7:
			return 'H';
		case 8:
			return 'I';
		case 9:
			return 'J';
		case 10:
			return 'K';
		case 11:
			return 'L';
		case 12:
			return 'M';
		case 13:
			return 'N';
		case 14:
			return 'O';
		case 15:
			return 'P';
		case 16:
			return 'Q';
		case 17:
			return 'R';
		case 18:
			return 'S';
		case 19:
			return 'T';
		case 20:
			return 'U';
		case 21:
			return 'V';
		case 22:
			return 'W';
		case 23:
			return 'X';
		case 24:
			return 'Y';
		case 25:
			return 'Z';
		case 26:
			return 'a';
		case 27:
			return 'b';
		case 28:
			return 'c';
		case 29:
			return 'd';
		case 30:
			return 'e';
		case 31:
			return 'f';
		case 32:
			return 'g';
		case 33:
			return 'h';
		case 34:
			return 'i';
		case 35:
			return 'j';
		case 36:
			return 'k';
		case 37:
			return 'l';
		case 38:
			return 'm';
		case 39:
			return 'n';
		case 40:
			return 'o';
		case 41:
			return 'p';
		case 42:
			return 'q';
		case 43:
			return 'r';
		case 44:
			return 's';
		case 45:
			return 't';
		case 46:
			return 'u';
		case 47:
			return 'v';
		case 48:
			return 'w';
		case 49:
			return 'x';
		case 50:
			return 'y';
		case 51:
			return 'z';
		case 52:
			return '0';
		case 53:
			return '1';
		case 54:
			return '2';
		case 55:
			return '3';
		case 56:
			return '4';
		case 57:
			return '5';
		case 58:
			return '6';
		case 59:
			return '7';
		case 60:
			return '8';
		case 61:
			return '9';
		case 62:
			return '+';
		default:
			return '/';
	}
};
var $truqu$elm_base64$Base64$Encode$toBase64 = function (_int) {
	return _Utils_ap(
		$truqu$elm_base64$Base64$Encode$intToBase64(63 & (_int >>> 18)),
		_Utils_ap(
			$truqu$elm_base64$Base64$Encode$intToBase64(63 & (_int >>> 12)),
			_Utils_ap(
				$truqu$elm_base64$Base64$Encode$intToBase64(63 & (_int >>> 6)),
				$truqu$elm_base64$Base64$Encode$intToBase64(63 & (_int >>> 0)))));
};
var $truqu$elm_base64$Base64$Encode$add = F2(
	function (_char, _v0) {
		var res = _v0.a;
		var count = _v0.b;
		var acc = _v0.c;
		var current = (acc << 8) | _char;
		if (count === 2) {
			return _Utils_Tuple3(
				_Utils_ap(
					res,
					$truqu$elm_base64$Base64$Encode$toBase64(current)),
				0,
				0);
		} else {
			return _Utils_Tuple3(res, count + 1, current);
		}
	});
var $truqu$elm_base64$Base64$Encode$chomp = F2(
	function (char_, acc) {
		var _char = $elm$core$Char$toCode(char_);
		return (_char < 128) ? A2($truqu$elm_base64$Base64$Encode$add, _char, acc) : ((_char < 2048) ? A2(
			$truqu$elm_base64$Base64$Encode$add,
			128 | (63 & _char),
			A2($truqu$elm_base64$Base64$Encode$add, 192 | (_char >>> 6), acc)) : (((_char < 55296) || ((_char >= 57344) && (_char <= 65535))) ? A2(
			$truqu$elm_base64$Base64$Encode$add,
			128 | (63 & _char),
			A2(
				$truqu$elm_base64$Base64$Encode$add,
				128 | (63 & (_char >>> 6)),
				A2($truqu$elm_base64$Base64$Encode$add, 224 | (_char >>> 12), acc))) : A2(
			$truqu$elm_base64$Base64$Encode$add,
			128 | (63 & _char),
			A2(
				$truqu$elm_base64$Base64$Encode$add,
				128 | (63 & (_char >>> 6)),
				A2(
					$truqu$elm_base64$Base64$Encode$add,
					128 | (63 & (_char >>> 12)),
					A2($truqu$elm_base64$Base64$Encode$add, 240 | (_char >>> 18), acc))))));
	});
var $elm$core$String$foldl = _String_foldl;
var $truqu$elm_base64$Base64$Encode$initial = _Utils_Tuple3('', 0, 0);
var $truqu$elm_base64$Base64$Encode$wrapUp = function (_v0) {
	var res = _v0.a;
	var cnt = _v0.b;
	var acc = _v0.c;
	switch (cnt) {
		case 1:
			return res + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & (acc >>> 2)) + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & (acc << 4)) + '=='));
		case 2:
			return res + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & (acc >>> 10)) + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & (acc >>> 4)) + ($truqu$elm_base64$Base64$Encode$intToBase64(63 & (acc << 2)) + '=')));
		default:
			return res;
	}
};
var $truqu$elm_base64$Base64$Encode$encode = function (input) {
	return $truqu$elm_base64$Base64$Encode$wrapUp(
		A3($elm$core$String$foldl, $truqu$elm_base64$Base64$Encode$chomp, $truqu$elm_base64$Base64$Encode$initial, input));
};
var $truqu$elm_base64$Base64$encode = $truqu$elm_base64$Base64$Encode$encode;
var $author$project$Sources$Services$WebDav$url = F3(
	function (_v0, srcData, path) {
		var addAuth = _v0.addAuth;
		var username = A3($author$project$Dict$Ext$fetch, 'username', '', srcData);
		var password = A3($author$project$Dict$Ext$fetch, 'password', '', srcData);
		var host = A2(
			$author$project$String$Ext$chopEnd,
			'/',
			A3($author$project$Dict$Ext$fetch, 'url', '', srcData));
		var encodedPath = A2(
			$elm$core$String$join,
			'/',
			A2(
				$elm$core$List$map,
				$elm$url$Url$percentEncode,
				A2(
					$elm$core$String$split,
					'/',
					A2($author$project$String$Ext$chopStart, '/', path))));
		var authPrefix = function () {
			var _v1 = _Utils_Tuple2(username, password);
			if ((_v1.a === '') && (_v1.b === '')) {
				return '';
			} else {
				var u = _v1.a;
				var p = _v1.b;
				return u + (':' + p);
			}
		}();
		var authBit = (addAuth && ($elm$core$String$length(authPrefix) > 0)) ? ('?service_worker_authentication=' + $elm$url$Url$percentEncode(
			$truqu$elm_base64$Base64$encode(authPrefix))) : '';
		return host + ('/' + (encodedPath + authBit));
	});
var $author$project$Sources$Services$WebDav$makeTrackUrl = F5(
	function (_v0, _v1, srcData, _v2, filePath) {
		return A3(
			$author$project$Sources$Services$WebDav$url,
			{addAuth: true},
			srcData,
			filePath);
	});
var $author$project$Sources$Services$makeTrackUrl = function (service) {
	switch (service.$) {
		case 'AmazonS3':
			return $author$project$Sources$Services$AmazonS3$makeTrackUrl;
		case 'AzureBlob':
			return $author$project$Sources$Services$AzureBlob$makeTrackUrl;
		case 'AzureFile':
			return $author$project$Sources$Services$AzureFile$makeTrackUrl;
		case 'Btfs':
			return $author$project$Sources$Services$Btfs$makeTrackUrl;
		case 'Dropbox':
			return $author$project$Sources$Services$Dropbox$makeTrackUrl;
		case 'Google':
			return $author$project$Sources$Services$Google$makeTrackUrl;
		case 'Ipfs':
			return $author$project$Sources$Services$Ipfs$makeTrackUrl;
		default:
			return $author$project$Sources$Services$WebDav$makeTrackUrl;
	}
};
var $author$project$Queue$makeTrackUrl_ = F3(
	function (timestamp, track, source) {
		return A6($author$project$Sources$Services$makeTrackUrl, source.service, timestamp, source.id, source.data, $author$project$Sources$Processing$Get, track.path);
	});
var $author$project$Queue$makeTrackUrl = F3(
	function (timestamp, sources, track) {
		return A2(
			$elm$core$Maybe$withDefault,
			'<missing-source>',
			A2(
				$elm$core$Maybe$map,
				A2($author$project$Queue$makeTrackUrl_, timestamp, track),
				A2(
					$elm_community$list_extra$List$Extra$find,
					A2(
						$elm$core$Basics$composeR,
						function ($) {
							return $.id;
						},
						$elm$core$Basics$eq(track.sourceId)),
					sources)));
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
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
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $author$project$Tracks$PickId = function (a) {
	return {$: 'PickId', a: a};
};
var $author$project$Tracks$PickTrack = function (a) {
	return {$: 'PickTrack', a: a};
};
var $author$project$Tracks$pick = F2(
	function (ids, collection) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (picking, acc) {
					if (picking.$ === 'PickId') {
						return acc;
					} else {
						var track = picking.a;
						return A2($elm$core$List$cons, track, acc);
					}
				}),
			_List_Nil,
			A3(
				$elm$core$List$foldr,
				function (track) {
					return $elm$core$List$map(
						function (picking) {
							if (picking.$ === 'PickId') {
								var id = picking.a;
								return _Utils_eq(id, track.id) ? $author$project$Tracks$PickTrack(track) : $author$project$Tracks$PickId(id);
							} else {
								var p = picking;
								return p;
							}
						});
				},
				A2($elm$core$List$map, $author$project$Tracks$PickId, ids),
				collection));
	});
var $Fresheyeball$elm_return$Return$return = F2(
	function (a, b) {
		return $elm$core$Basics$identity(
			_Utils_Tuple2(a, b));
	});
var $author$project$Brain$Tracks$State$download = F2(
	function (json, model) {
		var _v0 = A2(
			$elm$core$Result$withDefault,
			_Utils_Tuple2('?', _List_Nil),
			A2($elm$json$Json$Decode$decodeValue, $author$project$Brain$Tracks$State$downloadParamsDecoder, json));
		var zipName = _v0.a;
		var trackIds = _v0.b;
		return A2(
			$Fresheyeball$elm_return$Return$return,
			model,
			$author$project$Brain$Ports$downloadTracks(
				function (encodedTracks) {
					return $elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'name',
								$elm$json$Json$Encode$string(zipName)),
								_Utils_Tuple2('tracks', encodedTracks)
							]));
				}(
					A2(
						$elm$json$Json$Encode$list,
						function (_v1) {
							var idx = _v1.a;
							var track = _v1.b;
							return $elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'filename',
										$elm$json$Json$Encode$string(
											$elm$core$String$concat(
												_List_fromArray(
													[
														A3(
														$elm$core$String$padLeft,
														2,
														_Utils_chr('0'),
														$elm$core$String$fromInt(idx + 1)),
														' - ',
														track.tags.artist,
														' - ',
														track.tags.title
													])))),
										_Utils_Tuple2(
										'url',
										$elm$json$Json$Encode$string(
											A3($author$project$Queue$makeTrackUrl, model.currentTime, model.hypaethralUserData.sources, track)))
									]));
						},
						A2(
							$elm$core$List$indexedMap,
							$elm$core$Tuple$pair,
							A2($author$project$Tracks$pick, trackIds, model.hypaethralUserData.tracks))))));
	});
var $author$project$Brain$Common$State$giveUI = F2(
	function (tag, data) {
		return $author$project$Return$Ext$communicate(
			A2($author$project$Brain$Common$State$giveUICmd, tag, data));
	});
var $author$project$Brain$Tracks$State$gotSearchResults = function (results) {
	return A2(
		$author$project$Brain$Common$State$giveUI,
		$author$project$Alien$SearchTracks,
		A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, results));
};
var $author$project$Sources$Processing$Head = {$: 'Head'};
var $author$project$Brain$Tracks$State$makeTrackUrl = F4(
	function (timestamp, trackPath, maybeSource, httpMethod) {
		if (maybeSource.$ === 'Just') {
			var source = maybeSource.a;
			return A6($author$project$Sources$Services$makeTrackUrl, source.service, timestamp, source.id, source.data, httpMethod, trackPath);
		} else {
			return '<missing-source>';
		}
	});
var $author$project$Brain$Ports$provideArtworkTrackUrls = _Platform_outgoingPort('provideArtworkTrackUrls', $elm$core$Basics$identity);
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $Fresheyeball$elm_return$Return$singleton = function (a) {
	return _Utils_Tuple2(a, $elm$core$Platform$Cmd$none);
};
var $author$project$Brain$Tracks$State$makeArtworkTrackUrls = F2(
	function (json, model) {
		return A2(
			$elm$core$Result$withDefault,
			$Fresheyeball$elm_return$Return$singleton(model),
			A2(
				$elm$core$Result$map,
				function (dict) {
					var trackPath = A3($author$project$Dict$Ext$fetch, 'trackPath', '', dict);
					var maybeSource = A2(
						$elm$core$Maybe$andThen,
						function (trackSourceId) {
							return A2(
								$elm_community$list_extra$List$Extra$find,
								A2(
									$elm$core$Basics$composeR,
									function ($) {
										return $.id;
									},
									$elm$core$Basics$eq(trackSourceId)),
								model.hypaethralUserData.sources);
						},
						A2($elm$core$Dict$get, 'trackSourceId', dict));
					var mkTrackUrl = A3($author$project$Brain$Tracks$State$makeTrackUrl, model.currentTime, trackPath, maybeSource);
					return A2(
						$Fresheyeball$elm_return$Return$return,
						model,
						$author$project$Brain$Ports$provideArtworkTrackUrls(
							A3(
								$elm$json$Json$Encode$dict,
								$elm$core$Basics$identity,
								$elm$json$Json$Encode$string,
								A3(
									$elm$core$Dict$insert,
									'trackHeadUrl',
									mkTrackUrl($author$project$Sources$Processing$Head),
									A3(
										$elm$core$Dict$insert,
										'trackGetUrl',
										mkTrackUrl($author$project$Sources$Processing$Get),
										A2(
											$elm$core$Dict$remove,
											'trackSourceId',
											A2($elm$core$Dict$remove, 'trackPath', dict)))))));
				},
				A2(
					$elm$json$Json$Decode$decodeValue,
					$elm$json$Json$Decode$dict($elm$json$Json$Decode$string),
					json)));
	});
var $author$project$Sources$Refresh$AccessToken$portArgumentsDecoder = A5(
	$elm$json$Json$Decode$map4,
	F4(
		function (service, sourceId, accessToken, expiresAt) {
			return {accessToken: accessToken, expiresAt: expiresAt, service: service, sourceId: sourceId};
		}),
	A2($elm$json$Json$Decode$field, 'service', $author$project$Sources$Encoding$serviceDecoder),
	A2($elm$json$Json$Decode$field, 'sourceId', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'accessToken', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'expiresAt', $elm$json$Json$Decode$int));
var $author$project$Brain$Common$State$reportUI = F2(
	function (tag, error) {
		return $author$project$Return$Ext$communicate(
			A2($author$project$Brain$Common$State$reportUICmd, tag, error));
	});
var $author$project$Brain$Other$State$refreshedAccessToken = F2(
	function (value, model) {
		var _v0 = A2($elm$json$Json$Decode$decodeValue, $author$project$Sources$Refresh$AccessToken$portArgumentsDecoder, value);
		if (_v0.$ === 'Ok') {
			var portArguments = _v0.a;
			var _v1 = portArguments.service;
			if (_v1.$ === 'Google') {
				return A2(
					$Fresheyeball$elm_return$Return$return,
					model,
					A2(
						$elm$core$Maybe$withDefault,
						$elm$core$Platform$Cmd$none,
						A2(
							$elm$core$Maybe$map,
							function (source) {
								return $author$project$Brain$Ports$toUI(
									A2(
										$author$project$Alien$broadcast,
										$author$project$Alien$UpdateSourceData,
										$author$project$Sources$Encoding$encode(source)));
							},
							A2(
								$elm$core$Maybe$map,
								function (source) {
									return function (newData) {
										return _Utils_update(
											source,
											{data: newData});
									}(
										A3(
											$elm$core$Dict$insert,
											'expiresAt',
											$elm$core$String$fromInt(portArguments.expiresAt),
											A3($elm$core$Dict$insert, 'accessToken', portArguments.accessToken, source.data)));
								},
								A2(
									$elm_community$list_extra$List$Extra$find,
									A2(
										$elm$core$Basics$composeR,
										function ($) {
											return $.id;
										},
										$elm$core$Basics$eq(portArguments.sourceId)),
									model.hypaethralUserData.sources)))));
			} else {
				return $Fresheyeball$elm_return$Return$singleton(model);
			}
		} else {
			var err = _v0.a;
			return A3(
				$author$project$Brain$Common$State$reportUI,
				$author$project$Alien$ToCache,
				$elm$json$Json$Decode$errorToString(err),
				model);
		}
	});
var $author$project$Tracks$removeBySourceId = F2(
	function (removedSourceId, tracks) {
		return function (_v1) {
			var k = _v1.a;
			var r = _v1.b;
			return {kept: k, removed: r};
		}(
			A3(
				$elm$core$List$foldr,
				F2(
					function (t, _v0) {
						var kept = _v0.a;
						var removed = _v0.b;
						return _Utils_eq(t.sourceId, removedSourceId) ? _Utils_Tuple2(
							kept,
							A2($elm$core$List$cons, t, removed)) : _Utils_Tuple2(
							A2($elm$core$List$cons, t, kept),
							removed);
					}),
				_Utils_Tuple2(_List_Nil, _List_Nil),
				tracks));
	});
var $Fresheyeball$elm_return$Return$andThen = F2(
	function (f, _v0) {
		var model = _v0.a;
		var cmd = _v0.b;
		var _v1 = f(model);
		var model_ = _v1.a;
		var cmd_ = _v1.b;
		return _Utils_Tuple2(
			model_,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[cmd, cmd_])));
	});
var $author$project$Brain$User$State$makeHypaethralLens = F3(
	function (setter, model, value) {
		return _Utils_update(
			model,
			{
				hypaethralUserData: A2(setter, model.hypaethralUserData, value)
			});
	});
var $author$project$Brain$User$State$hypaethralLenses = {
	setFavourites: $author$project$Brain$User$State$makeHypaethralLens(
		F2(
			function (h, f) {
				return _Utils_update(
					h,
					{favourites: f});
			})),
	setPlaylists: $author$project$Brain$User$State$makeHypaethralLens(
		F2(
			function (h, p) {
				return _Utils_update(
					h,
					{playlists: p});
			})),
	setProgress: $author$project$Brain$User$State$makeHypaethralLens(
		F2(
			function (h, p) {
				return _Utils_update(
					h,
					{progress: p});
			})),
	setSettings: $author$project$Brain$User$State$makeHypaethralLens(
		F2(
			function (h, s) {
				return _Utils_update(
					h,
					{settings: s});
			})),
	setSources: $author$project$Brain$User$State$makeHypaethralLens(
		F2(
			function (h, s) {
				return _Utils_update(
					h,
					{sources: s});
			})),
	setTracks: $author$project$Brain$User$State$makeHypaethralLens(
		F2(
			function (h, t) {
				return _Utils_update(
					h,
					{tracks: t});
			}))
};
var $Gizra$elm_debouncer$Debouncer$Basic$ProvideInput = function (a) {
	return {$: 'ProvideInput', a: a};
};
var $Gizra$elm_debouncer$Debouncer$Basic$provideInput = $Gizra$elm_debouncer$Debouncer$Basic$ProvideInput;
var $author$project$Brain$User$Types$SaveHypaethralDataSlowly = function (a) {
	return {$: 'SaveHypaethralDataSlowly', a: a};
};
var $Gizra$elm_all_set$EverySet$EverySet = function (a) {
	return {$: 'EverySet', a: a};
};
var $pzp1997$assoc_list$AssocList$D = function (a) {
	return {$: 'D', a: a};
};
var $pzp1997$assoc_list$AssocList$empty = $pzp1997$assoc_list$AssocList$D(_List_Nil);
var $Gizra$elm_all_set$EverySet$empty = $Gizra$elm_all_set$EverySet$EverySet($pzp1997$assoc_list$AssocList$empty);
var $pzp1997$assoc_list$AssocList$remove = F2(
	function (targetKey, _v0) {
		var alist = _v0.a;
		return $pzp1997$assoc_list$AssocList$D(
			A2(
				$elm$core$List$filter,
				function (_v1) {
					var key = _v1.a;
					return !_Utils_eq(key, targetKey);
				},
				alist));
	});
var $pzp1997$assoc_list$AssocList$insert = F3(
	function (key, value, dict) {
		var _v0 = A2($pzp1997$assoc_list$AssocList$remove, key, dict);
		var alteredAlist = _v0.a;
		return $pzp1997$assoc_list$AssocList$D(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(key, value),
				alteredAlist));
	});
var $Gizra$elm_all_set$EverySet$insert = F2(
	function (k, _v0) {
		var d = _v0.a;
		return $Gizra$elm_all_set$EverySet$EverySet(
			A3($pzp1997$assoc_list$AssocList$insert, k, _Utils_Tuple0, d));
	});
var $Gizra$elm_all_set$EverySet$fromList = function (xs) {
	return A3($elm$core$List$foldl, $Gizra$elm_all_set$EverySet$insert, $Gizra$elm_all_set$EverySet$empty, xs);
};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $author$project$Brain$User$Types$SaveHypaethralDataBits = function (a) {
	return {$: 'SaveHypaethralDataBits', a: a};
};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $author$project$Syncing$Services$Dropbox$Token$isExpired = function (_v0) {
	var currentTime = _v0.currentTime;
	var expiresAt = _v0.expiresAt;
	var currentTimeInSeconds = ($elm$time$Time$posixToMillis(currentTime) / 1000) | 0;
	var currentTimeWithOffset = currentTimeInSeconds + 60;
	return _Utils_cmp(currentTimeWithOffset, expiresAt) > -1;
};
var $author$project$Brain$User$Types$RefreshedDropboxTokens = F3(
	function (a, b, c) {
		return {$: 'RefreshedDropboxTokens', a: a, b: b, c: c};
	});
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
var $author$project$User$Layer$Methods$Dropbox$clientId = 'te0c9pbeii8f8bw';
var $author$project$User$Layer$Methods$Dropbox$clientSecret = 'kxmlfdsw8k9e0ot';
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $author$project$Http$Ext$errorToString = function (err) {
	switch (err.$) {
		case 'Timeout':
			return 'Timeout exceeded';
		case 'NetworkError':
			return 'Network error';
		case 'BadStatus':
			var code = err.a;
			return 'Something went wrong, got status code: ' + $elm$core$String$fromInt(code);
		case 'BadBody':
			var text = err.a;
			return 'Unexpected response: ' + text;
		default:
			var url = err.a;
			return 'Malformed url: ' + url;
	}
};
var $elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $jzxhuang$http_extras$Http$Extras$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 'NetworkError_':
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.statusCode));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $jzxhuang$http_extras$Http$Extras$responseToString = function (responseString) {
	return A2($jzxhuang$http_extras$Http$Extras$resolve, $elm$core$Result$Ok, responseString);
};
var $author$project$User$Layer$Methods$Dropbox$tokensDecoder = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (a, e, r) {
			return {accessToken: a, expiresIn: e, refreshToken: r};
		}),
	A2($elm$json$Json$Decode$field, 'access_token', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'expires_in', $elm$json$Json$Decode$int),
	$elm$json$Json$Decode$maybe(
		A2($elm$json$Json$Decode$field, 'refresh_token', $elm$json$Json$Decode$string)));
var $author$project$User$Layer$Methods$Dropbox$refreshAccessToken = function (refreshToken) {
	return $elm$http$Http$task(
		function (u) {
			return {
				body: $elm$http$Http$emptyBody,
				headers: _List_Nil,
				method: 'POST',
				resolver: $elm$http$Http$stringResolver(
					function (resp) {
						return A2(
							$elm$core$Result$andThen,
							A2(
								$elm$core$Basics$composeR,
								$elm$json$Json$Decode$decodeString($author$project$User$Layer$Methods$Dropbox$tokensDecoder),
								$elm$core$Result$mapError($elm$json$Json$Decode$errorToString)),
							A2(
								$elm$core$Result$mapError,
								$author$project$Http$Ext$errorToString,
								$jzxhuang$http_extras$Http$Extras$responseToString(resp)));
					}),
				timeout: $elm$core$Maybe$Nothing,
				url: u
			};
		}(
			A2(
				$elm$core$String$append,
				'https://api.dropboxapi.com/oauth2/token',
				$author$project$Common$queryString(
					_List_fromArray(
						[
							_Utils_Tuple2('client_id', $author$project$User$Layer$Methods$Dropbox$clientId),
							_Utils_Tuple2('client_secret', $author$project$User$Layer$Methods$Dropbox$clientSecret),
							_Utils_Tuple2('refresh_token', refreshToken),
							_Utils_Tuple2('grant_type', 'refresh_token')
						])))));
};
var $author$project$Brain$User$State$refreshDropboxTokens = F4(
	function (currentTime, msg, initialTask, refreshToken) {
		return A2(
			$elm$core$Task$attempt,
			function (result) {
				if (result.$ === 'Ok') {
					var tokens = result.a;
					return $author$project$Brain$Types$UserMsg(
						A3(
							$author$project$Brain$User$Types$RefreshedDropboxTokens,
							{
								currentTime: ($elm$time$Time$posixToMillis(currentTime) / 1000) | 0,
								refreshToken: refreshToken
							},
							tokens,
							msg));
				} else {
					var err = result.a;
					return A2($author$project$Brain$Common$State$reportUICmdMsg, $author$project$Alien$ReportError, err);
				}
			},
			A2(
				$elm$core$Task$andThen,
				function (_v0) {
					return $author$project$User$Layer$Methods$Dropbox$refreshAccessToken(refreshToken);
				},
				initialTask));
	});
var $author$project$Brain$User$Hypaethral$fileName = A2($elm$core$Basics$composeL, $elm$json$Json$Encode$string, $author$project$User$Layer$hypaethralBitFileName);
var $lobanov$elm_taskport$TaskPort$ignoreValue = $elm$json$Json$Decode$succeed(_Utils_Tuple0);
var $author$project$Brain$User$Hypaethral$saveDropbox = F3(
	function (accessToken, bit, data) {
		return A2(
			$elm$core$Task$mapError,
			$author$project$TaskPort$Extra$errorToStringCustom,
			A2(
				$lobanov$elm_taskport$TaskPort$call,
				{argsEncoder: $elm$json$Json$Encode$object, _function: 'toDropbox', valueDecoder: $lobanov$elm_taskport$TaskPort$ignoreValue},
				_List_fromArray(
					[
						_Utils_Tuple2(
						'fileName',
						$author$project$Brain$User$Hypaethral$fileName(bit)),
						_Utils_Tuple2('data', data),
						_Utils_Tuple2(
						'token',
						$elm$json$Json$Encode$string(accessToken))
					])));
	});
var $author$project$Brain$User$Hypaethral$saveFission = F2(
	function (bit, data) {
		var savePublicData = _Utils_eq(bit, $author$project$User$Layer$Playlists);
		return A2(
			$elm$core$Task$mapError,
			$author$project$TaskPort$Extra$errorToStringCustom,
			A2(
				$lobanov$elm_taskport$TaskPort$call,
				{argsEncoder: $elm$json$Json$Encode$object, _function: 'toFission', valueDecoder: $lobanov$elm_taskport$TaskPort$ignoreValue},
				_List_fromArray(
					[
						_Utils_Tuple2(
						'fileName',
						$author$project$Brain$User$Hypaethral$fileName(bit)),
						_Utils_Tuple2('data', data),
						_Utils_Tuple2(
						'savePublicData',
						$elm$json$Json$Encode$bool(savePublicData))
					])));
	});
var $author$project$Brain$Task$Ports$toCacheWithSuffix = F2(
	function (tag, suffix) {
		var key = $author$project$Alien$tagToString(tag) + ('_' + suffix);
		return $lobanov$elm_taskport$TaskPort$call(
			{
				argsEncoder: function (v) {
					return $elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'key',
								$elm$json$Json$Encode$string(key)),
								_Utils_Tuple2('value', v)
							]));
				},
				_function: 'toCache',
				valueDecoder: $lobanov$elm_taskport$TaskPort$ignoreValue
			});
	});
var $author$project$Brain$User$Hypaethral$saveLocal = F2(
	function (bit, data) {
		return A2(
			$elm$core$Task$mapError,
			$author$project$TaskPort$Extra$errorToStringCustom,
			A3(
				$author$project$Brain$Task$Ports$toCacheWithSuffix,
				$author$project$Alien$SyncLocal,
				$author$project$User$Layer$hypaethralBitFileName(bit),
				data));
	});
var $author$project$Brain$User$State$saveHypaethralDataBitsTask = F3(
	function (bits, userData, saveFn) {
		return A3(
			$elm$core$List$foldl,
			function (nextTask) {
				return $elm$core$Task$andThen(
					function (_v0) {
						return nextTask;
					});
			},
			$elm$core$Task$succeed(_Utils_Tuple0),
			$elm$core$List$concat(
				_List_fromArray(
					[
						A2(
						$elm$core$List$map,
						function (bit) {
							return A2(
								$author$project$Brain$User$Hypaethral$saveLocal,
								bit,
								A2($author$project$User$Layer$encodeHypaethralBit, bit, userData));
						},
						bits),
						A2(
						$elm$core$List$map,
						function (bit) {
							return A2(
								saveFn,
								bit,
								A2($author$project$User$Layer$encodeHypaethralBit, bit, userData));
						},
						bits)
					])));
	});
var $author$project$Brain$User$Hypaethral$saveIpfs = F3(
	function (apiOrigin, bit, data) {
		return A2(
			$elm$core$Task$mapError,
			$author$project$TaskPort$Extra$errorToStringCustom,
			A2(
				$lobanov$elm_taskport$TaskPort$call,
				{argsEncoder: $elm$json$Json$Encode$object, _function: 'toIpfs', valueDecoder: $lobanov$elm_taskport$TaskPort$ignoreValue},
				_List_fromArray(
					[
						_Utils_Tuple2(
						'apiOrigin',
						$elm$json$Json$Encode$string(apiOrigin)),
						_Utils_Tuple2(
						'fileName',
						$author$project$Brain$User$Hypaethral$fileName(bit)),
						_Utils_Tuple2('data', data)
					])));
	});
var $author$project$Brain$User$Hypaethral$saveRemoteStorage = F3(
	function (_v0, bit, data) {
		var token = _v0.token;
		var userAddress = _v0.userAddress;
		return A2(
			$elm$core$Task$mapError,
			$author$project$TaskPort$Extra$errorToStringCustom,
			A2(
				$lobanov$elm_taskport$TaskPort$call,
				{argsEncoder: $elm$json$Json$Encode$object, _function: 'toRemoteStorage', valueDecoder: $lobanov$elm_taskport$TaskPort$ignoreValue},
				_List_fromArray(
					[
						_Utils_Tuple2(
						'fileName',
						$author$project$Brain$User$Hypaethral$fileName(bit)),
						_Utils_Tuple2('data', data),
						_Utils_Tuple2(
						'token',
						$elm$json$Json$Encode$string(token)),
						_Utils_Tuple2(
						'userAddress',
						$elm$json$Json$Encode$string(userAddress))
					])));
	});
var $author$project$Brain$User$State$saveHypaethralDataBits = F2(
	function (bitsWithoutModifiedAt, model) {
		var userData = model.hypaethralUserData;
		var updatedUserData = _Utils_update(
			userData,
			{
				modifiedAt: $elm$core$Maybe$Just(model.currentTime)
			});
		var updatedModel = _Utils_update(
			model,
			{hypaethralUserData: updatedUserData});
		var bits = A2($elm$core$List$cons, $author$project$User$Layer$ModifiedAt, bitsWithoutModifiedAt);
		var save = function (saveFn) {
			return A2(
				$Fresheyeball$elm_return$Return$return,
				updatedModel,
				A2(
					$author$project$Brain$Common$State$attemptTask,
					$elm$core$Basics$always($author$project$Brain$Types$Bypass),
					A2(
						$elm$core$Task$andThen,
						function (currentTime) {
							return A3(
								$author$project$Brain$User$State$saveHypaethralDataBitsTask,
								bits,
								_Utils_update(
									updatedUserData,
									{
										modifiedAt: $elm$core$Maybe$Just(currentTime)
									}),
								saveFn);
						},
						$elm$time$Time$now)));
		};
		var _v0 = model.userSyncMethod;
		if (_v0.$ === 'Just') {
			switch (_v0.a.$) {
				case 'Dropbox':
					var accessToken = _v0.a.a.accessToken;
					var expiresAt = _v0.a.a.expiresAt;
					var refreshToken = _v0.a.a.refreshToken;
					return $author$project$Syncing$Services$Dropbox$Token$isExpired(
						{currentTime: model.currentTime, expiresAt: expiresAt}) ? A2(
						$Fresheyeball$elm_return$Return$return,
						model,
						A4(
							$author$project$Brain$User$State$refreshDropboxTokens,
							model.currentTime,
							$author$project$Brain$User$Types$SaveHypaethralDataBits(bits),
							$elm$core$Task$succeed(_Utils_Tuple0),
							refreshToken)) : save(
						$author$project$Brain$User$Hypaethral$saveDropbox(accessToken));
				case 'Fission':
					return save($author$project$Brain$User$Hypaethral$saveFission);
				case 'Ipfs':
					var apiOrigin = _v0.a.a.apiOrigin;
					return save(
						$author$project$Brain$User$Hypaethral$saveIpfs(apiOrigin));
				default:
					var args = _v0.a.a;
					return save(
						$author$project$Brain$User$Hypaethral$saveRemoteStorage(args));
			}
		} else {
			return save(
				F2(
					function (_v1, _v2) {
						return $elm$core$Task$succeed(_Utils_Tuple0);
					}));
		}
	});
var $pzp1997$assoc_list$AssocList$keys = function (_v0) {
	var alist = _v0.a;
	return A2($elm$core$List$map, $elm$core$Tuple$first, alist);
};
var $Gizra$elm_all_set$EverySet$toList = function (_v0) {
	var d = _v0.a;
	return $pzp1997$assoc_list$AssocList$keys(d);
};
var $Gizra$elm_debouncer$Debouncer$Internal$Check = function (a) {
	return {$: 'Check', a: a};
};
var $Gizra$elm_debouncer$Debouncer$Internal$InputProvidedAt = F2(
	function (a, b) {
		return {$: 'InputProvidedAt', a: a, b: b};
	});
var $Gizra$elm_debouncer$Debouncer$Internal$ManualEmitAt = function (a) {
	return {$: 'ManualEmitAt', a: a};
};
var $Gizra$elm_debouncer$Debouncer$Basic$MsgInternal = function (a) {
	return {$: 'MsgInternal', a: a};
};
var $elm$core$Process$sleep = _Process_sleep;
var $Gizra$elm_debouncer$Debouncer$Internal$Unsettled = function (a) {
	return {$: 'Unsettled', a: a};
};
var $Gizra$elm_debouncer$Debouncer$Internal$cancel = function (_v0) {
	var config = _v0.a;
	var state = _v0.b;
	return A2($Gizra$elm_debouncer$Debouncer$Internal$Debouncer, config, $Gizra$elm_debouncer$Debouncer$Internal$Settled);
};
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $elm_community$list_extra$List$Extra$uniqueHelp = F4(
	function (f, existing, remaining, accumulator) {
		uniqueHelp:
		while (true) {
			if (!remaining.b) {
				return $elm$core$List$reverse(accumulator);
			} else {
				var first = remaining.a;
				var rest = remaining.b;
				var computedFirst = f(first);
				if (A2($elm$core$List$member, computedFirst, existing)) {
					var $temp$f = f,
						$temp$existing = existing,
						$temp$remaining = rest,
						$temp$accumulator = accumulator;
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				} else {
					var $temp$f = f,
						$temp$existing = A2($elm$core$List$cons, computedFirst, existing),
						$temp$remaining = rest,
						$temp$accumulator = A2($elm$core$List$cons, first, accumulator);
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$unique = function (list) {
	return A4($elm_community$list_extra$List$Extra$uniqueHelp, $elm$core$Basics$identity, _List_Nil, list, _List_Nil);
};
var $Gizra$elm_debouncer$Debouncer$Internal$update = F2(
	function (msg, debouncer) {
		var wrappedConfig = debouncer.a;
		var config = wrappedConfig.a;
		var state = debouncer.b;
		switch (msg.$) {
			case 'InputProvidedAt':
				var input = msg.a;
				var time = msg.b;
				var newState = function () {
					if (state.$ === 'Settled') {
						return $Gizra$elm_debouncer$Debouncer$Internal$Unsettled(
							{
								lastEmittedAt: $elm$core$Maybe$Nothing,
								lastInputProvidedAt: time,
								output: A2(config.accumulator, input, $elm$core$Maybe$Nothing),
								unsettledAt: time
							});
					} else {
						var unsettled = state.a;
						return $Gizra$elm_debouncer$Debouncer$Internal$Unsettled(
							_Utils_update(
								unsettled,
								{
									lastInputProvidedAt: time,
									output: A2(config.accumulator, input, unsettled.output)
								}));
					}
				}();
				var newDebouncer = A2($Gizra$elm_debouncer$Debouncer$Internal$Debouncer, wrappedConfig, newState);
				var checks = function () {
					if (state.$ === 'Settled') {
						return $elm_community$list_extra$List$Extra$unique(
							A2(
								$elm$core$List$filterMap,
								$elm$core$Basics$identity,
								_List_fromArray(
									[config.emitWhenUnsettled, config.emitWhileUnsettled, config.settleWhenQuietFor])));
					} else {
						return A2(
							$elm$core$List$filterMap,
							$elm$core$Basics$identity,
							_List_fromArray(
								[config.settleWhenQuietFor]));
					}
				}();
				var _v1 = A2(
					$elm$core$Tuple$mapFirst,
					A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty),
					A2(
						$elm$core$List$partition,
						function (interval) {
							return interval <= 0;
						},
						checks));
				var checkNow = _v1.a;
				var checkLater = _v1.b;
				var _v2 = checkNow ? A2(
					$Gizra$elm_debouncer$Debouncer$Internal$update,
					$Gizra$elm_debouncer$Debouncer$Internal$Check(time),
					newDebouncer) : _Utils_Tuple3(newDebouncer, _List_Nil, $elm$core$Maybe$Nothing);
				var checkedDebouncer = _v2.a;
				var checkedIntervals = _v2.b;
				var emit = _v2.c;
				return _Utils_Tuple3(
					checkedDebouncer,
					_Utils_ap(checkedIntervals, checkLater),
					emit);
			case 'ManualCancel':
				return _Utils_Tuple3(
					$Gizra$elm_debouncer$Debouncer$Internal$cancel(debouncer),
					_List_Nil,
					$elm$core$Maybe$Nothing);
			case 'ManualSettle':
				var emit = function () {
					if (state.$ === 'Settled') {
						return $elm$core$Maybe$Nothing;
					} else {
						var unsettled = state.a;
						return unsettled.output;
					}
				}();
				return _Utils_Tuple3(
					$Gizra$elm_debouncer$Debouncer$Internal$cancel(debouncer),
					_List_Nil,
					emit);
			case 'ManualEmitAt':
				var time = msg.a;
				if (state.$ === 'Settled') {
					return _Utils_Tuple3(debouncer, _List_Nil, $elm$core$Maybe$Nothing);
				} else {
					var unsettled = state.a;
					var _v7 = unsettled.output;
					if (_v7.$ === 'Just') {
						var newState = $Gizra$elm_debouncer$Debouncer$Internal$Unsettled(
							_Utils_update(
								unsettled,
								{
									lastEmittedAt: $elm$core$Maybe$Just(time),
									output: $elm$core$Maybe$Nothing
								}));
						var intervals = function () {
							var _v8 = config.emitWhenUnsettled;
							if (_v8.$ === 'Just') {
								var emit = _v8.a;
								return _List_fromArray(
									[emit]);
							} else {
								return _List_Nil;
							}
						}();
						return _Utils_Tuple3(
							A2($Gizra$elm_debouncer$Debouncer$Internal$Debouncer, wrappedConfig, newState),
							intervals,
							unsettled.output);
					} else {
						return _Utils_Tuple3(debouncer, _List_Nil, $elm$core$Maybe$Nothing);
					}
				}
			default:
				var time = msg.a;
				if (state.$ === 'Settled') {
					return _Utils_Tuple3(debouncer, _List_Nil, $elm$core$Maybe$Nothing);
				} else {
					var unsettled = state.a;
					var shouldSettle = A2(
						$elm$core$Maybe$withDefault,
						false,
						A2(
							$elm$core$Maybe$map,
							function (interval) {
								return _Utils_cmp(unsettled.lastInputProvidedAt + interval, time) < 1;
							},
							config.settleWhenQuietFor));
					var becauseEmitWhileUnsettled = function () {
						var _v13 = config.emitWhileUnsettled;
						if (_v13.$ === 'Just') {
							var interval = _v13.a;
							var _v14 = unsettled.lastEmittedAt;
							if (_v14.$ === 'Just') {
								var lastEmittedAt = _v14.a;
								return _Utils_cmp(lastEmittedAt + interval, time) < 1;
							} else {
								return _Utils_cmp(unsettled.unsettledAt + interval, time) < 1;
							}
						} else {
							return false;
						}
					}();
					var becauseEmitWhenUnsettled = function () {
						var _v11 = config.emitWhenUnsettled;
						if (_v11.$ === 'Just') {
							var interval = _v11.a;
							var _v12 = unsettled.lastEmittedAt;
							if (_v12.$ === 'Just') {
								return false;
							} else {
								return _Utils_cmp(unsettled.unsettledAt + interval, time) < 1;
							}
						} else {
							return false;
						}
					}();
					var shouldEmit = (!_Utils_eq(unsettled.output, $elm$core$Maybe$Nothing)) && (shouldSettle || (becauseEmitWhenUnsettled || becauseEmitWhileUnsettled));
					var emit = shouldEmit ? unsettled.output : $elm$core$Maybe$Nothing;
					var intervals = function () {
						if (shouldEmit && (!shouldSettle)) {
							var _v10 = config.emitWhileUnsettled;
							if (_v10.$ === 'Just') {
								var interval = _v10.a;
								return _List_fromArray(
									[interval]);
							} else {
								return _List_Nil;
							}
						} else {
							return _List_Nil;
						}
					}();
					var newState = shouldSettle ? $Gizra$elm_debouncer$Debouncer$Internal$Settled : (shouldEmit ? $Gizra$elm_debouncer$Debouncer$Internal$Unsettled(
						_Utils_update(
							unsettled,
							{
								lastEmittedAt: $elm$core$Maybe$Just(time),
								output: $elm$core$Maybe$Nothing
							})) : state);
					return _Utils_Tuple3(
						A2($Gizra$elm_debouncer$Debouncer$Internal$Debouncer, wrappedConfig, newState),
						intervals,
						emit);
				}
		}
	});
var $Gizra$elm_debouncer$Debouncer$Basic$update = F2(
	function (msg, debouncer) {
		switch (msg.$) {
			case 'ProvideInput':
				var input = msg.a;
				return _Utils_Tuple3(
					debouncer,
					A2(
						$elm$core$Task$perform,
						A2(
							$elm$core$Basics$composeL,
							A2(
								$elm$core$Basics$composeL,
								$Gizra$elm_debouncer$Debouncer$Basic$MsgInternal,
								$Gizra$elm_debouncer$Debouncer$Internal$InputProvidedAt(input)),
							$elm$time$Time$posixToMillis),
						$elm$time$Time$now),
					$elm$core$Maybe$Nothing);
			case 'EmitNow':
				return _Utils_Tuple3(
					debouncer,
					A2(
						$elm$core$Task$perform,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $Gizra$elm_debouncer$Debouncer$Basic$MsgInternal, $Gizra$elm_debouncer$Debouncer$Internal$ManualEmitAt),
							$elm$time$Time$posixToMillis),
						$elm$time$Time$now),
					$elm$core$Maybe$Nothing);
			default:
				var subMsg = msg.a;
				var _v1 = A2($Gizra$elm_debouncer$Debouncer$Internal$update, subMsg, debouncer);
				var updatedDebouncer = _v1.a;
				var intervals = _v1.b;
				var output = _v1.c;
				var cmds = $elm$core$Platform$Cmd$batch(
					A2(
						$elm$core$List$map,
						function (interval) {
							return A2(
								$elm$core$Task$perform,
								A2(
									$elm$core$Basics$composeL,
									A2($elm$core$Basics$composeL, $Gizra$elm_debouncer$Debouncer$Basic$MsgInternal, $Gizra$elm_debouncer$Debouncer$Internal$Check),
									$elm$time$Time$posixToMillis),
								A2(
									$elm$core$Task$andThen,
									$elm$core$Basics$always($elm$time$Time$now),
									$elm$core$Process$sleep(interval)));
						},
						intervals));
				return _Utils_Tuple3(updatedDebouncer, cmds, output);
		}
	});
var $author$project$Brain$User$State$saveHypaethralDataSlowly = F2(
	function (debouncerMsg, model) {
		var _v0 = A2($Gizra$elm_debouncer$Debouncer$Basic$update, debouncerMsg, model.hypaethralDebouncer);
		var m = _v0.a;
		var c = _v0.b;
		var e = _v0.c;
		var bits = $Gizra$elm_all_set$EverySet$toList(
			$Gizra$elm_all_set$EverySet$fromList(
				A2($elm$core$Maybe$withDefault, _List_Nil, e)));
		return ((!$elm$core$List$isEmpty(bits)) ? $Fresheyeball$elm_return$Return$andThen(
			$author$project$Brain$User$State$saveHypaethralDataBits(bits)) : $elm$core$Basics$identity)(
			A2(
				$Fresheyeball$elm_return$Return$return,
				_Utils_update(
					model,
					{hypaethralDebouncer: m}),
				A2(
					$elm$core$Platform$Cmd$map,
					A2($elm$core$Basics$composeR, $author$project$Brain$User$Types$SaveHypaethralDataSlowly, $author$project$Brain$Types$UserMsg),
					c)));
	});
var $author$project$Brain$User$State$saveHypaethralDataBitWithDebounce = function (bit) {
	return $author$project$Brain$User$State$saveHypaethralDataSlowly(
		$Gizra$elm_debouncer$Debouncer$Basic$provideInput(bit));
};
var $author$project$Brain$Ports$updateSearchIndex = _Platform_outgoingPort('updateSearchIndex', $elm$core$Basics$identity);
var $author$project$Brain$User$State$saveTracksAndUpdateSearchIndex = F2(
	function (tracks, model) {
		return A2(
			$Fresheyeball$elm_return$Return$andThen,
			$author$project$Brain$User$State$saveHypaethralDataBitWithDebounce($author$project$User$Layer$Tracks),
			A2(
				$author$project$Return$Ext$communicate,
				$author$project$Brain$Ports$updateSearchIndex(
					A2($elm$json$Json$Encode$list, $author$project$Tracks$Encoding$encodeTrack, tracks)),
				A2($author$project$Brain$User$State$hypaethralLenses.setTracks, model, tracks)));
	});
var $author$project$Brain$Tracks$State$removeBySourceId = F2(
	function (data, model) {
		var _v0 = A2($elm$json$Json$Decode$decodeValue, $elm$json$Json$Decode$string, data);
		if (_v0.$ === 'Ok') {
			var sourceId = _v0.a;
			return A2(
				$author$project$Brain$User$State$saveTracksAndUpdateSearchIndex,
				A2($author$project$Tracks$removeBySourceId, sourceId, model.hypaethralUserData.tracks).kept,
				model);
		} else {
			return $Fresheyeball$elm_return$Return$singleton(model);
		}
	});
var $author$project$Brain$Ports$removeTracksFromCache = _Platform_outgoingPort('removeTracksFromCache', $elm$core$Basics$identity);
var $author$project$Brain$Tracks$State$removeFromCache = function (data) {
	return $author$project$Return$Ext$communicate(
		$author$project$Brain$Ports$removeTracksFromCache(data));
};
var $elm_community$list_extra$List$Extra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$findIndex = $elm_community$list_extra$List$Extra$findIndexHelp(0);
var $elm_community$list_extra$List$Extra$elemIndex = function (x) {
	return $elm_community$list_extra$List$Extra$findIndex(
		$elm$core$Basics$eq(x));
};
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $elm_community$list_extra$List$Extra$removeAt = F2(
	function (index, l) {
		if (index < 0) {
			return l;
		} else {
			var _v0 = A2($elm$core$List$drop, index, l);
			if (!_v0.b) {
				return l;
			} else {
				var rest = _v0.b;
				return _Utils_ap(
					A2($elm$core$List$take, index, l),
					rest);
			}
		}
	});
var $author$project$Brain$Tracks$State$replaceTags = F2(
	function (context, model) {
		return A2(
			$Fresheyeball$elm_return$Return$andThen,
			function (m) {
				return function (data) {
					return A3($author$project$Brain$Common$State$giveUI, $author$project$Alien$ReloadTracks, data, m);
				}(
					A2($elm$json$Json$Encode$list, $author$project$Tracks$Encoding$encodeTrack, m.hypaethralUserData.tracks));
			},
			function (_v2) {
				var a = _v2.a;
				return A2($author$project$Brain$User$State$saveTracksAndUpdateSearchIndex, a, model);
			}(
				A3(
					$elm$core$List$foldr,
					F2(
						function (track, _v0) {
							var acc = _v0.a;
							var trackIds = _v0.b;
							var tags = _v0.c;
							var _v1 = A2($elm_community$list_extra$List$Extra$elemIndex, track.id, trackIds);
							if (_v1.$ === 'Just') {
								var idx = _v1.a;
								var newTags = A2(
									$elm$core$Maybe$withDefault,
									track.tags,
									A2(
										$elm$core$Maybe$andThen,
										$elm$core$Basics$identity,
										A2($elm_community$list_extra$List$Extra$getAt, idx, tags)));
								return _Utils_Tuple3(
									A2(
										$elm$core$List$cons,
										_Utils_update(
											track,
											{tags: newTags}),
										acc),
									A2($elm_community$list_extra$List$Extra$removeAt, idx, trackIds),
									A2($elm_community$list_extra$List$Extra$removeAt, idx, tags));
							} else {
								return _Utils_Tuple3(
									A2($elm$core$List$cons, track, acc),
									trackIds,
									tags);
							}
						}),
					_Utils_Tuple3(_List_Nil, context.trackIds, context.receivedTags),
					model.hypaethralUserData.tracks)));
	});
var $author$project$Brain$Ports$requestSearch = _Platform_outgoingPort('requestSearch', $elm$json$Json$Encode$string);
var $author$project$Brain$Tracks$State$search = function (encodedSearchTerm) {
	return $author$project$Return$Ext$communicate(
		A2(
			$elm$core$Result$withDefault,
			$elm$core$Platform$Cmd$none,
			A2(
				$elm$core$Result$map,
				$author$project$Brain$Ports$requestSearch,
				A2($elm$json$Json$Decode$decodeValue, $elm$json$Json$Decode$string, encodedSearchTerm))));
};
var $author$project$Brain$Other$State$setCurrentTime = F2(
	function (time, model) {
		return $Fresheyeball$elm_return$Return$singleton(
			_Utils_update(
				model,
				{currentTime: time}));
	});
var $author$project$Brain$Ports$storeTracksInCache = _Platform_outgoingPort('storeTracksInCache', $elm$core$Basics$identity);
var $author$project$Brain$Tracks$State$storeInCache = function (data) {
	return $author$project$Return$Ext$communicate(
		$author$project$Brain$Ports$storeTracksInCache(data));
};
var $author$project$Brain$Ports$syncTags = _Platform_outgoingPort(
	'syncTags',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'receivedFilePaths',
					$elm$json$Json$Encode$list($elm$json$Json$Encode$string)($.receivedFilePaths)),
					_Utils_Tuple2(
					'receivedTags',
					$elm$json$Json$Encode$list(
						function ($) {
							return A3(
								$elm$core$Maybe$destruct,
								$elm$json$Json$Encode$null,
								function ($) {
									return $elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'album',
												$elm$json$Json$Encode$string($.album)),
												_Utils_Tuple2(
												'artist',
												$elm$json$Json$Encode$string($.artist)),
												_Utils_Tuple2(
												'disc',
												$elm$json$Json$Encode$int($.disc)),
												_Utils_Tuple2(
												'genre',
												function ($) {
													return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$string, $);
												}($.genre)),
												_Utils_Tuple2(
												'nr',
												$elm$json$Json$Encode$int($.nr)),
												_Utils_Tuple2(
												'picture',
												function ($) {
													return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$string, $);
												}($.picture)),
												_Utils_Tuple2(
												'title',
												$elm$json$Json$Encode$string($.title)),
												_Utils_Tuple2(
												'year',
												function ($) {
													return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$int, $);
												}($.year))
											]));
								},
								$);
						})($.receivedTags)),
					_Utils_Tuple2(
					'trackIds',
					$elm$json$Json$Encode$list($elm$json$Json$Encode$string)($.trackIds)),
					_Utils_Tuple2(
					'urlsForTags',
					$elm$json$Json$Encode$list(
						function ($) {
							return $elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'getUrl',
										$elm$json$Json$Encode$string($.getUrl)),
										_Utils_Tuple2(
										'headUrl',
										$elm$json$Json$Encode$string($.headUrl))
									]));
						})($.urlsForTags))
				]));
	});
var $author$project$Brain$Tracks$State$tagUrls = F3(
	function (currentTime, path, source) {
		var maker = A4($author$project$Sources$Services$makeTrackUrl, source.service, currentTime, source.id, source.data);
		return {
			getUrl: A2(maker, $author$project$Sources$Processing$Get, path),
			headUrl: A2(maker, $author$project$Sources$Processing$Head, path)
		};
	});
var $author$project$Brain$Tracks$State$syncTrackTags = F2(
	function (data, model) {
		var result = A2(
			$elm$json$Json$Decode$decodeValue,
			$elm$json$Json$Decode$list(
				A4(
					$elm$json$Json$Decode$map3,
					F3(
						function (path, sourceId, trackId) {
							return {path: path, sourceId: sourceId, trackId: trackId};
						}),
					A2($elm$json$Json$Decode$field, 'path', $elm$json$Json$Decode$string),
					A2($elm$json$Json$Decode$field, 'sourceId', $elm$json$Json$Decode$string),
					A2($elm$json$Json$Decode$field, 'trackId', $elm$json$Json$Decode$string))),
			data);
		var _v0 = A3(
			$elm$core$List$foldl,
			F2(
				function (_v1, _v2) {
					var sourceId = _v1.sourceId;
					var dict = _v2.a;
					var acc = _v2.b;
					if (A2($elm$core$List$member, sourceId, acc)) {
						return _Utils_Tuple2(dict, acc);
					} else {
						var _v3 = A2(
							$elm_community$list_extra$List$Extra$find,
							A2(
								$elm$core$Basics$composeR,
								function ($) {
									return $.id;
								},
								$elm$core$Basics$eq(sourceId)),
							model.hypaethralUserData.sources);
						if (_v3.$ === 'Just') {
							var source = _v3.a;
							return _Utils_Tuple2(
								A3($elm$core$Dict$insert, sourceId, source, dict),
								A2($elm$core$List$cons, sourceId, acc));
						} else {
							return _Utils_Tuple2(
								dict,
								A2($elm$core$List$cons, sourceId, acc));
						}
					}
				}),
			_Utils_Tuple2($elm$core$Dict$empty, _List_Nil),
			A2($elm$core$Result$withDefault, _List_Nil, result));
		var sources = _v0.a;
		if (result.$ === 'Ok') {
			var list = result.a;
			return A2(
				$Fresheyeball$elm_return$Return$return,
				model,
				function (_v7) {
					var accPaths = _v7.a;
					var accUrls = _v7.b;
					var accIds = _v7.c;
					return $author$project$Brain$Ports$syncTags(
						{receivedFilePaths: accPaths, receivedTags: _List_Nil, trackIds: accIds, urlsForTags: accUrls});
				}(
					A3(
						$elm$core$List$foldr,
						F2(
							function (_v5, _v6) {
								var path = _v5.path;
								var sourceId = _v5.sourceId;
								var trackId = _v5.trackId;
								var accPaths = _v6.a;
								var accUrls = _v6.b;
								var accIds = _v6.c;
								return A2(
									$elm$core$Maybe$withDefault,
									_Utils_Tuple3(accPaths, accUrls, accIds),
									A2(
										$elm$core$Maybe$map,
										function (urls) {
											return _Utils_Tuple3(
												A2($elm$core$List$cons, path, accPaths),
												A2($elm$core$List$cons, urls, accUrls),
												A2($elm$core$List$cons, trackId, accIds));
										},
										A2(
											$elm$core$Maybe$map,
											A2($author$project$Brain$Tracks$State$tagUrls, model.currentTime, path),
											A2($elm$core$Dict$get, sourceId, sources))));
							}),
						_Utils_Tuple3(_List_Nil, _List_Nil, _List_Nil),
						list)));
		} else {
			return $Fresheyeball$elm_return$Return$singleton(model);
		}
	});
var $author$project$Alien$hostDecoder = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (tag, data, error) {
			return {data: data, error: error, tag: tag};
		}),
	A2($elm$json$Json$Decode$field, 'tag', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'data', $elm$json$Json$Decode$value),
	A2(
		$elm$json$Json$Decode$field,
		'error',
		$elm$json$Json$Decode$maybe($elm$json$Json$Decode$string)));
var $author$project$Brain$Ports$toCache = _Platform_outgoingPort(
	'toCache',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'data',
					$elm$core$Basics$identity($.data)),
					_Utils_Tuple2(
					'error',
					function ($) {
						return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$string, $);
					}($.error)),
					_Utils_Tuple2(
					'tag',
					$elm$json$Json$Encode$string($.tag))
				]));
	});
var $author$project$Brain$Other$State$toCache = function (data) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $author$project$Alien$hostDecoder, data);
	if (_v0.$ === 'Ok') {
		var alienEvent = _v0.a;
		return $author$project$Return$Ext$communicate(
			$author$project$Brain$Ports$toCache(alienEvent));
	} else {
		var err = _v0.a;
		return A2(
			$author$project$Brain$Common$State$reportUI,
			$author$project$Alien$ToCache,
			$elm$json$Json$Decode$errorToString(err));
	}
};
var $author$project$Sources$Processing$Processing = F2(
	function (a, b) {
		return {$: 'Processing', a: a, b: b};
	});
var $author$project$Alien$trigger = function (tag) {
	return {
		data: $elm$json$Json$Encode$null,
		error: $elm$core$Maybe$Nothing,
		tag: $author$project$Alien$tagToString(tag)
	};
};
var $author$project$Brain$Common$State$nudgeUICmd = function (tag) {
	return $author$project$Brain$Ports$toUI(
		$author$project$Alien$trigger(tag));
};
var $author$project$Brain$Common$State$nudgeUI = A2($elm$core$Basics$composeR, $author$project$Brain$Common$State$nudgeUICmd, $author$project$Return$Ext$communicate);
var $author$project$Sources$Processing$TheBeginning = {$: 'TheBeginning'};
var $author$project$Brain$Sources$Processing$Types$PrepareStep = F2(
	function (a, b) {
		return {$: 'PrepareStep', a: a, b: b};
	});
var $author$project$Brain$Sources$Processing$Types$TreeStep = F2(
	function (a, b) {
		return {$: 'TreeStep', a: a, b: b};
	});
var $author$project$Sources$Services$Common$cleanPath = function (dirtyPath) {
	return function (p) {
		return $elm$core$String$isEmpty(p) ? p : (p + '/');
	}(
		A2(
			$author$project$String$Ext$chopEnd,
			'/',
			A2(
				$author$project$String$Ext$chopStart,
				'/',
				$elm$core$String$trim(dirtyPath))));
};
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.tracker;
							if (_v4.$ === 'Nothing') {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var $elm$http$Http$get = function (r) {
	return $elm$http$Http$request(
		{body: $elm$http$Http$emptyBody, expect: r.expect, headers: _List_Nil, method: 'GET', timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $author$project$Common$translateHttpResponse = function (response) {
	switch (response.$) {
		case 'BadUrl_':
			var u = response.a;
			return $elm$core$Result$Err(
				$elm$http$Http$BadUrl(u));
		case 'Timeout_':
			return $elm$core$Result$Err($elm$http$Http$Timeout);
		case 'NetworkError_':
			return $elm$core$Result$Err($elm$http$Http$NetworkError);
		case 'BadStatus_':
			var body = response.b;
			return $elm$core$Result$Err(
				$elm$http$Http$BadBody(body));
		default:
			var body = response.b;
			return $elm$core$Result$Ok(body);
	}
};
var $author$project$Sources$Services$AmazonS3$makeTree = F4(
	function (srcData, marker, currentTime, resultMsg) {
		var initialParams = _List_fromArray(
			[
				_Utils_Tuple2('list-type', '2'),
				_Utils_Tuple2('max-keys', '500')
			]);
		var directoryPath = $author$project$Sources$Services$Common$cleanPath(
			A2(
				$elm$core$Maybe$withDefault,
				'',
				A2($elm$core$Dict$get, 'directoryPath', srcData)));
		var prefix = ($elm$core$String$length(directoryPath) > 0) ? _List_fromArray(
			[
				_Utils_Tuple2('prefix', directoryPath)
			]) : _List_Nil;
		var continuation = function () {
			if (marker.$ === 'InProgress') {
				var s = marker.a;
				return _List_fromArray(
					[
						_Utils_Tuple2('continuation-token', s)
					]);
			} else {
				return _List_Nil;
			}
		}();
		var params = _Utils_ap(
			initialParams,
			_Utils_ap(prefix, continuation));
		var url = A6($author$project$Sources$Services$AmazonS3$Presign$presignedUrl, $author$project$Sources$Processing$Get, 60 * 5, params, currentTime, srcData, '/');
		return $elm$http$Http$get(
			{
				expect: A2($elm$http$Http$expectStringResponse, resultMsg, $author$project$Common$translateHttpResponse),
				url: url
			});
	});
var $author$project$Sources$Services$Azure$Authorization$List = {$: 'List'};
var $author$project$Sources$Services$AzureBlob$makeTree = F4(
	function (srcData, marker, currentTime, resultMsg) {
		var params = function () {
			if (marker.$ === 'InProgress') {
				var s = marker.a;
				return _List_fromArray(
					[
						_Utils_Tuple2('marker', s)
					]);
			} else {
				return _List_Nil;
			}
		}();
		var directoryPath = $author$project$Sources$Services$Common$cleanPath(
			A2(
				$elm$core$Maybe$withDefault,
				'',
				A2($elm$core$Dict$get, 'directoryPath', srcData)));
		var baseParams = _List_fromArray(
			[
				_Utils_Tuple2('maxresults', '1000')
			]);
		var url = A8(
			$author$project$Sources$Services$Azure$Authorization$presignedUrl,
			$author$project$Sources$Services$Azure$Authorization$Blob,
			$author$project$Sources$Services$Azure$Authorization$List,
			$author$project$Sources$Processing$Get,
			1,
			currentTime,
			srcData,
			directoryPath,
			_Utils_ap(baseParams, params));
		return $elm$http$Http$get(
			{
				expect: A2($elm$http$Http$expectStringResponse, resultMsg, $author$project$Common$translateHttpResponse),
				url: url
			});
	});
var $author$project$Sources$Services$Azure$FileMarker$separator = ' ɑ ';
var $author$project$Sources$Services$Azure$FileMarker$Directory = function (a) {
	return {$: 'Directory', a: a};
};
var $author$project$Sources$Services$Azure$FileMarker$Param = function (a) {
	return {$: 'Param', a: a};
};
var $author$project$Sources$Services$Azure$FileMarker$paramSeparator = ' ɣ ';
var $author$project$Sources$Services$Azure$FileMarker$prefixer = ' β ';
var $author$project$Sources$Services$Azure$FileMarker$stringToItem = function (string) {
	var exploded = A2($elm$core$String$split, $author$project$Sources$Services$Azure$FileMarker$prefixer, string);
	var _v0 = $elm$core$List$head(exploded);
	_v0$2:
	while (true) {
		if (_v0.$ === 'Just') {
			switch (_v0.a) {
				case 'dir':
					return $elm$core$Maybe$Just(
						$author$project$Sources$Services$Azure$FileMarker$Directory(
							A2(
								$elm$core$String$join,
								$author$project$Sources$Services$Azure$FileMarker$prefixer,
								A2($elm$core$List$drop, 1, exploded))));
				case 'par':
					return function (x) {
						if ((x.b && x.b.b) && (!x.b.b.b)) {
							var dir = x.a;
							var _v2 = x.b;
							var mar = _v2.a;
							return $elm$core$Maybe$Just(
								$author$project$Sources$Services$Azure$FileMarker$Param(
									{directory: dir, marker: mar}));
						} else {
							return $elm$core$Maybe$Nothing;
						}
					}(
						A2(
							$elm$core$String$split,
							$author$project$Sources$Services$Azure$FileMarker$paramSeparator,
							A2(
								$elm$core$String$join,
								$author$project$Sources$Services$Azure$FileMarker$prefixer,
								A2($elm$core$List$drop, 1, exploded))));
				default:
					break _v0$2;
			}
		} else {
			break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$Sources$Services$Azure$FileMarker$takeOne = function (marker) {
	if (marker.$ === 'InProgress') {
		var m = marker.a;
		return A2(
			$elm$core$Maybe$andThen,
			$author$project$Sources$Services$Azure$FileMarker$stringToItem,
			$elm$core$List$head(
				A2($elm$core$String$split, $author$project$Sources$Services$Azure$FileMarker$separator, m)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Sources$Services$AzureFile$makeTree = F4(
	function (srcData, marker, currentTime, resultMsg) {
		var directoryPathFromSrcData = $author$project$Sources$Services$Common$cleanPath(
			A2(
				$elm$core$Maybe$withDefault,
				'',
				A2($elm$core$Dict$get, 'directoryPath', srcData)));
		var baseParams = _List_fromArray(
			[
				_Utils_Tuple2('maxresults', '1000')
			]);
		var _v0 = function () {
			var _v1 = $author$project$Sources$Services$Azure$FileMarker$takeOne(marker);
			if (_v1.$ === 'Just') {
				if (_v1.a.$ === 'Directory') {
					var directory = _v1.a.a;
					return A2($elm$core$Tuple$pair, directory, _List_Nil);
				} else {
					var param = _v1.a.a;
					return A2(
						$elm$core$Tuple$pair,
						param.directory,
						_List_fromArray(
							[
								_Utils_Tuple2('marker', param.marker)
							]));
				}
			} else {
				return A2($elm$core$Tuple$pair, directoryPathFromSrcData, _List_Nil);
			}
		}();
		var directoryPath = _v0.a;
		var params = _v0.b;
		var url = A8(
			$author$project$Sources$Services$Azure$Authorization$presignedUrl,
			$author$project$Sources$Services$Azure$Authorization$File,
			$author$project$Sources$Services$Azure$Authorization$List,
			$author$project$Sources$Processing$Get,
			1,
			currentTime,
			srcData,
			directoryPath,
			_Utils_ap(baseParams, params));
		return $elm$http$Http$get(
			{
				expect: A2($elm$http$Http$expectStringResponse, resultMsg, $author$project$Common$translateHttpResponse),
				url: url
			});
	});
var $author$project$Common$boolFromString = function (string) {
	if (string === 't') {
		return true;
	} else {
		return false;
	}
};
var $author$project$Common$boolToString = function (bool) {
	return bool ? 't' : 'f';
};
var $author$project$Sources$Services$Ipfs$defaults = {
	gateway: '',
	ipns: $author$project$Common$boolToString(false),
	local: $author$project$Common$boolToString(false),
	name: 'Music from IPFS'
};
var $author$project$Conditional$ifThenElse = F3(
	function (bool, x, y) {
		return bool ? x : y;
	});
var $author$project$Sources$Services$Ipfs$ipnsResolver = function (response) {
	switch (response.$) {
		case 'BadUrl_':
			var u = response.a;
			return $elm$core$Result$Err(
				$elm$http$Http$BadUrl(u));
		case 'Timeout_':
			return $elm$core$Result$Err($elm$http$Http$Timeout);
		case 'NetworkError_':
			return $elm$core$Result$Err($elm$http$Http$NetworkError);
		case 'BadStatus_':
			var body = response.b;
			return $elm$core$Result$Err(
				$elm$http$Http$BadBody(body));
		default:
			var body = response.b;
			return A2(
				$elm$core$Result$mapError,
				A2($elm$core$Basics$composeR, $elm$json$Json$Decode$errorToString, $elm$http$Http$BadBody),
				A2(
					$elm$core$Result$map,
					function (path) {
						return {
							ipfsPath: A2($author$project$String$Ext$chopStart, '/ipfs/', path)
						};
					},
					A2(
						$elm$json$Json$Decode$decodeString,
						A2($elm$json$Json$Decode$field, 'Path', $elm$json$Json$Decode$string),
						body)));
	}
};
var $author$project$Sources$Services$Ipfs$Marker$separator = ' ɑ ';
var $author$project$Sources$Services$Ipfs$Marker$takeOne = function (marker) {
	if (marker.$ === 'InProgress') {
		var m = marker.a;
		return $elm$core$List$head(
			A2($elm$core$String$split, $author$project$Sources$Services$Ipfs$Marker$separator, m));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Sources$Services$Ipfs$makeTree = F4(
	function (srcData, marker, _v0, resultMsg) {
		var root = $author$project$Sources$Services$Ipfs$rootHash(srcData);
		var resolveWithIpns = function () {
			if (marker.$ === 'InProgress') {
				return false;
			} else {
				return $author$project$Common$boolFromString(
					A3($author$project$Dict$Ext$fetch, 'ipns', $author$project$Sources$Services$Ipfs$defaults.ipns, srcData));
			}
		}();
		var resolveLocally = function (b) {
			return A3($author$project$Conditional$ifThenElse, b, 'true', 'false');
		}(
			$author$project$Common$boolFromString(
				A3($author$project$Dict$Ext$fetch, 'local', $author$project$Sources$Services$Ipfs$defaults.local, srcData)));
		var path = function () {
			if (marker.$ === 'InProgress') {
				return A2(
					$elm$core$Maybe$withDefault,
					'',
					A2(
						$elm$core$Maybe$map,
						function (p) {
							return root + ('/' + p);
						},
						$author$project$Sources$Services$Ipfs$Marker$takeOne(marker)));
			} else {
				return root;
			}
		}();
		var gateway = $author$project$Sources$Services$Ipfs$extractGateway(srcData);
		return A2(
			$elm$core$Task$attempt,
			resultMsg,
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					var ipfsPath = _v1.ipfsPath;
					return $elm$http$Http$task(
						{
							body: $elm$http$Http$emptyBody,
							headers: _List_Nil,
							method: 'POST',
							resolver: $elm$http$Http$stringResolver($author$project$Common$translateHttpResponse),
							timeout: $elm$core$Maybe$Just((60 * 15) * 1000),
							url: gateway + ('/api/v0/ls?arg=' + ($author$project$Sources$Services$Ipfs$encodedPath(ipfsPath) + '&encoding=json'))
						});
				},
				resolveWithIpns ? $elm$http$Http$task(
					{
						body: $elm$http$Http$emptyBody,
						headers: _List_Nil,
						method: 'POST',
						resolver: $elm$http$Http$stringResolver($author$project$Sources$Services$Ipfs$ipnsResolver),
						timeout: $elm$core$Maybe$Just((60 * 15) * 1000),
						url: gateway + ('/api/v0/name/resolve?arg=' + ($author$project$Sources$Services$Ipfs$encodedPath(path) + ('&local=' + (resolveLocally + '&encoding=json'))))
					}) : $elm$core$Task$succeed(
					{ipfsPath: path})));
	});
var $author$project$Sources$Services$Btfs$makeTree = $author$project$Sources$Services$Ipfs$makeTree;
var $author$project$Sources$Services$Dropbox$getProperDirectoryPath = function (srcData) {
	var path = $author$project$Sources$Services$Common$cleanPath(
		A2(
			$elm$core$Maybe$withDefault,
			'',
			A2($elm$core$Dict$get, 'directoryPath', srcData)));
	return (path === '') ? '' : ('/' + path);
};
var $elm$http$Http$Header = F2(
	function (a, b) {
		return {$: 'Header', a: a, b: b};
	});
var $elm$http$Http$header = $elm$http$Http$Header;
var $author$project$Sources$Services$Dropbox$makeTree = F4(
	function (srcData, marker, _v0, resultMsg) {
		var url = function () {
			switch (marker.$) {
				case 'TheBeginning':
					return 'https://api.dropboxapi.com/2/files/list_folder';
				case 'InProgress':
					return 'https://api.dropboxapi.com/2/files/list_folder/continue';
				default:
					return '';
			}
		}();
		var body = $elm$http$Http$jsonBody(
			$elm$json$Json$Encode$object(
				function () {
					switch (marker.$) {
						case 'TheBeginning':
							return _List_fromArray(
								[
									_Utils_Tuple2(
									'limit',
									$elm$json$Json$Encode$int(2000)),
									_Utils_Tuple2(
									'path',
									$elm$json$Json$Encode$string(
										$author$project$Sources$Services$Dropbox$getProperDirectoryPath(srcData))),
									_Utils_Tuple2(
									'recursive',
									$elm$json$Json$Encode$bool(true))
								]);
						case 'InProgress':
							var cursor = marker.a;
							return _List_fromArray(
								[
									_Utils_Tuple2(
									'cursor',
									$elm$json$Json$Encode$string(cursor))
								]);
						default:
							return _List_Nil;
					}
				}()));
		var accessToken = A3($author$project$Dict$Ext$fetch, 'accessToken', '', srcData);
		return $elm$http$Http$request(
			{
				body: body,
				expect: A2($elm$http$Http$expectStringResponse, resultMsg, $author$project$Common$translateHttpResponse),
				headers: _List_fromArray(
					[
						A2($elm$http$Http$header, 'Authorization', 'Bearer ' + accessToken)
					]),
				method: 'POST',
				timeout: $elm$core$Maybe$Nothing,
				tracker: $elm$core$Maybe$Nothing,
				url: url
			});
	});
var $author$project$Sources$Services$Google$Marker$itemDirectory = function (item) {
	if (item.$ === 'Directory') {
		var dir = item.a;
		return dir;
	} else {
		var directory = item.a.directory;
		return directory;
	}
};
var $author$project$Sources$Services$Google$Marker$separator = ' ɑ ';
var $author$project$Sources$Services$Google$Marker$Directory = function (a) {
	return {$: 'Directory', a: a};
};
var $author$project$Sources$Services$Google$Marker$Param = function (a) {
	return {$: 'Param', a: a};
};
var $author$project$Sources$Services$Google$Marker$paramSeparator = ' ɣ ';
var $author$project$Sources$Services$Google$Marker$prefixer = ' β ';
var $author$project$Sources$Services$Google$Marker$stringToItem = function (string) {
	var exploded = A2($elm$core$String$split, $author$project$Sources$Services$Google$Marker$prefixer, string);
	var _v0 = $elm$core$List$head(exploded);
	_v0$2:
	while (true) {
		if (_v0.$ === 'Just') {
			switch (_v0.a) {
				case 'dir':
					return $elm$core$Maybe$Just(
						$author$project$Sources$Services$Google$Marker$Directory(
							A2(
								$elm$core$String$join,
								$author$project$Sources$Services$Google$Marker$prefixer,
								A2($elm$core$List$drop, 1, exploded))));
				case 'par':
					return function (x) {
						if ((x.b && x.b.b) && (!x.b.b.b)) {
							var dir = x.a;
							var _v2 = x.b;
							var tok = _v2.a;
							return $elm$core$Maybe$Just(
								$author$project$Sources$Services$Google$Marker$Param(
									{directory: dir, token: tok}));
						} else {
							return $elm$core$Maybe$Nothing;
						}
					}(
						A2(
							$elm$core$String$split,
							$author$project$Sources$Services$Google$Marker$paramSeparator,
							A2(
								$elm$core$String$join,
								$author$project$Sources$Services$Google$Marker$prefixer,
								A2($elm$core$List$drop, 1, exploded))));
				default:
					break _v0$2;
			}
		} else {
			break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $author$project$Sources$Services$Google$Marker$takeOne = function (marker) {
	if (marker.$ === 'InProgress') {
		var m = marker.a;
		return A2(
			$elm$core$Maybe$andThen,
			$author$project$Sources$Services$Google$Marker$stringToItem,
			$elm$core$List$head(
				A2($elm$core$String$split, $author$project$Sources$Services$Google$Marker$separator, m)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Sources$Services$Google$makeTree = F4(
	function (srcData, marker, _v0, resultMsg) {
		var folderId = A3($author$project$Dict$Ext$fetch, 'folderId', '', srcData);
		var parentId = $author$project$String$Path$file(
			A2(
				$elm$core$Maybe$withDefault,
				folderId,
				A2(
					$elm$core$Maybe$andThen,
					function (dir) {
						return A3(
							$author$project$Conditional$ifThenElse,
							$elm$core$String$isEmpty(dir),
							$elm$core$Maybe$Nothing,
							$elm$core$Maybe$Just(dir));
					},
					A2(
						$elm$core$Maybe$map,
						$author$project$Sources$Services$Google$Marker$itemDirectory,
						$author$project$Sources$Services$Google$Marker$takeOne(marker)))));
		var query = function () {
			if (parentId === '') {
				return _List_fromArray(
					['mimeType contains \'audio/\'']);
			} else {
				var pid = parentId;
				return _List_fromArray(
					['(mimeType contains \'audio/\'', 'or mimeType = \'application/vnd.google-apps.folder\')', 'and (\'' + (pid + '\' in parents)')]);
			}
		}();
		var paramsBase = _List_fromArray(
			[
				_Utils_Tuple2(
				'fields',
				A2(
					$elm$core$String$join,
					', ',
					_List_fromArray(
						['nextPageToken', 'files/id', 'files/mimeType', 'files/name', 'files/trashed']))),
				_Utils_Tuple2('includeItemsFromAllDrives', 'true'),
				_Utils_Tuple2('pageSize', '1000'),
				_Utils_Tuple2(
				'q',
				$elm$core$String$concat(query)),
				_Utils_Tuple2('spaces', 'drive'),
				_Utils_Tuple2('supportsAllDrives', 'true')
			]);
		var queryString = $author$project$Common$queryString(
			A2(
				$elm$core$List$append,
				paramsBase,
				function () {
					var _v1 = $author$project$Sources$Services$Google$Marker$takeOne(marker);
					if ((_v1.$ === 'Just') && (_v1.a.$ === 'Param')) {
						var token = _v1.a.a.token;
						return _List_fromArray(
							[
								_Utils_Tuple2('pageToken', token)
							]);
					} else {
						return _List_Nil;
					}
				}()));
		var accessToken = A3($author$project$Dict$Ext$fetch, 'accessToken', '', srcData);
		return $elm$http$Http$request(
			{
				body: $elm$http$Http$emptyBody,
				expect: A2($elm$http$Http$expectStringResponse, resultMsg, $author$project$Common$translateHttpResponse),
				headers: _List_fromArray(
					[
						A2($elm$http$Http$header, 'Authorization', 'Bearer ' + accessToken)
					]),
				method: 'GET',
				timeout: $elm$core$Maybe$Nothing,
				tracker: $elm$core$Maybe$Nothing,
				url: 'https://www.googleapis.com/drive/v3/files' + queryString
			});
	});
var $author$project$Sources$Services$WebDav$Marker$takeOne = $author$project$Sources$Services$Ipfs$Marker$takeOne;
var $author$project$Sources$Services$WebDav$makeTree = F4(
	function (srcData, marker, _v0, resultMsg) {
		var username = A3($author$project$Dict$Ext$fetch, 'username', '', srcData);
		var password = A3($author$project$Dict$Ext$fetch, 'password', '', srcData);
		var directory = function () {
			if (marker.$ === 'InProgress') {
				return A2(
					$elm$core$Maybe$withDefault,
					'',
					$author$project$Sources$Services$WebDav$Marker$takeOne(marker));
			} else {
				return A2(
					$elm$core$Maybe$withDefault,
					'',
					A2($elm$core$Dict$get, 'directoryPath', srcData));
			}
		}();
		var auth = 'Basic ' + $truqu$elm_base64$Base64$encode(username + (':' + password));
		return $elm$http$Http$request(
			{
				body: $elm$http$Http$emptyBody,
				expect: A2($elm$http$Http$expectStringResponse, resultMsg, $author$project$Common$translateHttpResponse),
				headers: _List_fromArray(
					[
						A2($elm$http$Http$header, 'Authorization', auth),
						A2($elm$http$Http$header, 'Depth', '1')
					]),
				method: 'PROPFIND',
				timeout: $elm$core$Maybe$Nothing,
				tracker: $elm$core$Maybe$Nothing,
				url: A3(
					$author$project$Sources$Services$WebDav$url,
					{addAuth: false},
					srcData,
					directory)
			});
	});
var $author$project$Sources$Services$makeTree = function (service) {
	switch (service.$) {
		case 'AmazonS3':
			return $author$project$Sources$Services$AmazonS3$makeTree;
		case 'AzureBlob':
			return $author$project$Sources$Services$AzureBlob$makeTree;
		case 'AzureFile':
			return $author$project$Sources$Services$AzureFile$makeTree;
		case 'Btfs':
			return $author$project$Sources$Services$Btfs$makeTree;
		case 'Dropbox':
			return $author$project$Sources$Services$Dropbox$makeTree;
		case 'Google':
			return $author$project$Sources$Services$Google$makeTree;
		case 'Ipfs':
			return $author$project$Sources$Services$Ipfs$makeTree;
		default:
			return $author$project$Sources$Services$WebDav$makeTree;
	}
};
var $author$project$Brain$Sources$Processing$Steps$makeTree = F2(
	function (context, currentTime) {
		return A5(
			$author$project$Sources$Services$makeTree,
			context.source.service,
			context.source.data,
			context.treeMarker,
			currentTime,
			A2(
				$elm$core$Basics$composeL,
				$author$project$Brain$Types$ProcessingMsg,
				$author$project$Brain$Sources$Processing$Types$TreeStep(context)));
	});
var $author$project$Sources$Services$AmazonS3$prepare = F4(
	function (_v0, _v1, _v2, _v3) {
		return $elm$core$Maybe$Nothing;
	});
var $author$project$Sources$Services$AzureBlob$prepare = F4(
	function (_v0, _v1, _v2, _v3) {
		return $elm$core$Maybe$Nothing;
	});
var $author$project$Sources$Services$AzureFile$prepare = F4(
	function (_v0, _v1, _v2, _v3) {
		return $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 'NetworkError_':
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.statusCode));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectString = function (toMsg) {
	return A2(
		$elm$http$Http$expectStringResponse,
		toMsg,
		$elm$http$Http$resolve($elm$core$Result$Ok));
};
var $author$project$Sources$Services$Ipfs$isDnsLink = function (srcData) {
	return A2(
		$elm$core$Maybe$withDefault,
		false,
		A2(
			$elm$core$Maybe$map,
			$author$project$Sources$Services$Ipfs$pathIsDnsLink,
			A2($elm$core$Dict$get, 'directoryHash', srcData)));
};
var $author$project$Sources$Services$Ipfs$prepare = F4(
	function (_v0, srcData, _v1, toMsg) {
		var domainName = A2(
			$author$project$String$Ext$chopStart,
			'_dnslink.',
			A2(
				$author$project$String$Ext$chopEnd,
				'/',
				A2(
					$author$project$String$Ext$chopStart,
					'https://',
					A2(
						$author$project$String$Ext$chopStart,
						'http://',
						A2(
							$elm$core$Maybe$withDefault,
							'',
							A2($elm$core$Dict$get, 'directoryHash', srcData))))));
		return $author$project$Sources$Services$Ipfs$isDnsLink(srcData) ? A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $elm$http$Http$request)(
			{
				body: $elm$http$Http$emptyBody,
				expect: $elm$http$Http$expectString(toMsg),
				headers: _List_Nil,
				method: 'POST',
				timeout: $elm$core$Maybe$Nothing,
				tracker: $elm$core$Maybe$Nothing,
				url: $author$project$Sources$Services$Ipfs$extractGateway(srcData) + ('/api/v0/dns?arg=' + domainName)
			}) : $elm$core$Maybe$Nothing;
	});
var $author$project$Sources$Services$Btfs$prepare = $author$project$Sources$Services$Ipfs$prepare;
var $author$project$Sources$Services$Dropbox$prepare = F4(
	function (_v0, _v1, _v2, _v3) {
		return $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$post = function (r) {
	return $elm$http$Http$request(
		{body: r.body, expect: r.expect, headers: _List_Nil, method: 'POST', timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $author$project$Sources$Services$Google$prepare = F4(
	function (origin, srcData, _v0, resultMsg) {
		var maybeCode = A2($elm$core$Dict$get, 'authCode', srcData);
		var queryParams = function () {
			if (maybeCode.$ === 'Just') {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'client_id',
						A3($author$project$Dict$Ext$fetch, 'clientId', '', srcData)),
						_Utils_Tuple2(
						'client_secret',
						A3($author$project$Dict$Ext$fetch, 'clientSecret', '', srcData)),
						_Utils_Tuple2(
						'code',
						A3($author$project$Dict$Ext$fetch, 'authCode', '', srcData)),
						_Utils_Tuple2('grant_type', 'authorization_code'),
						_Utils_Tuple2('redirect_uri', origin + '?path=sources/new/google')
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'client_id',
						A3($author$project$Dict$Ext$fetch, 'clientId', '', srcData)),
						_Utils_Tuple2(
						'client_secret',
						A3($author$project$Dict$Ext$fetch, 'clientSecret', '', srcData)),
						_Utils_Tuple2(
						'refresh_token',
						A3($author$project$Dict$Ext$fetch, 'refreshToken', '', srcData)),
						_Utils_Tuple2('grant_type', 'refresh_token')
					]);
			}
		}();
		var query = $author$project$Common$queryString(queryParams);
		var url = 'https://www.googleapis.com/oauth2/v4/token' + query;
		return A2($elm$core$Basics$composeL, $elm$core$Maybe$Just, $elm$http$Http$post)(
			{
				body: $elm$http$Http$emptyBody,
				expect: A2($elm$http$Http$expectStringResponse, resultMsg, $author$project$Common$translateHttpResponse),
				url: url
			});
	});
var $author$project$Sources$Services$WebDav$prepare = F4(
	function (_v0, _v1, _v2, _v3) {
		return $elm$core$Maybe$Nothing;
	});
var $author$project$Sources$Services$prepare = function (service) {
	switch (service.$) {
		case 'AmazonS3':
			return $author$project$Sources$Services$AmazonS3$prepare;
		case 'AzureBlob':
			return $author$project$Sources$Services$AzureBlob$prepare;
		case 'AzureFile':
			return $author$project$Sources$Services$AzureFile$prepare;
		case 'Btfs':
			return $author$project$Sources$Services$Btfs$prepare;
		case 'Dropbox':
			return $author$project$Sources$Services$Dropbox$prepare;
		case 'Google':
			return $author$project$Sources$Services$Google$prepare;
		case 'Ipfs':
			return $author$project$Sources$Services$Ipfs$prepare;
		default:
			return $author$project$Sources$Services$WebDav$prepare;
	}
};
var $author$project$Brain$Sources$Processing$Steps$prepare = F2(
	function (context, currentTime) {
		var maybePreparationCommand = A5(
			$author$project$Sources$Services$prepare,
			context.source.service,
			context.origin,
			context.source.data,
			context.preparationMarker,
			A2(
				$elm$core$Basics$composeL,
				$author$project$Brain$Types$ProcessingMsg,
				$author$project$Brain$Sources$Processing$Types$PrepareStep(context)));
		if (maybePreparationCommand.$ === 'Just') {
			var cmd = maybePreparationCommand.a;
			return cmd;
		} else {
			return A2($author$project$Brain$Sources$Processing$Steps$makeTree, context, currentTime);
		}
	});
var $author$project$Brain$Sources$Processing$Steps$takeFirstStep = F3(
	function (origin, currentTime, source) {
		var initialContext = {filePaths: _List_Nil, origin: origin, preparationMarker: $author$project$Sources$Processing$TheBeginning, source: source, treeMarker: $author$project$Sources$Processing$TheBeginning};
		return A2($author$project$Brain$Sources$Processing$Steps$prepare, initialContext, currentTime);
	});
var $author$project$Brain$Sources$Processing$State$nextInLine = function (model) {
	var _v0 = model.processingStatus;
	if ((_v0.$ === 'Processing') && _v0.b.b) {
		var _v1 = _v0.a;
		var processedSource = _v1.a;
		var _v2 = _v0.b;
		var _v3 = _v2.a;
		var source = _v3.a;
		var tracks = _v3.b;
		var rest = _v2.b;
		return A2(
			$Fresheyeball$elm_return$Return$andThen,
			A2(
				$author$project$Brain$Common$State$giveUI,
				$author$project$Alien$FinishedProcessingSource,
				$elm$json$Json$Encode$string(processedSource.id)),
			A2(
				$Fresheyeball$elm_return$Return$return,
				_Utils_update(
					model,
					{
						processingStatus: A2(
							$author$project$Sources$Processing$Processing,
							_Utils_Tuple2(source, tracks),
							rest)
					}),
				A3($author$project$Brain$Sources$Processing$Steps$takeFirstStep, model.origin, model.currentTime, source)));
	} else {
		return A2(
			$author$project$Brain$Common$State$nudgeUI,
			$author$project$Alien$FinishedProcessingSources,
			_Utils_update(
				model,
				{processingStatus: $author$project$Sources$Processing$NotProcessing}));
	}
};
var $author$project$Brain$Sources$Processing$Common$reportError = F2(
	function (source, error) {
		return A2(
			$author$project$Brain$Common$State$giveUI,
			$author$project$Alien$ReportProcessingError,
			$elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'sourceId',
						$elm$json$Json$Encode$string(source.id)),
						_Utils_Tuple2(
						'sourceName',
						$elm$json$Json$Encode$string(
							A3($author$project$Dict$Ext$fetch, 'name', 'Unnamed', source.data))),
						_Utils_Tuple2(
						'error',
						$elm$json$Json$Encode$string(error))
					])));
	});
var $ymtszw$elm_xml_decode$Xml$Decode$decodeXml = F2(
	function (_v0, _v1) {
		var decoder = _v0.a;
		var root = _v1.root;
		return decoder(root);
	});
var $ymtszw$elm_xml_decode$Xml$Decode$Internal$escape = function (s) {
	var reducer = function (_char) {
		switch (_char.valueOf()) {
			case '&':
				return $elm$core$String$append('&amp;');
			case '<':
				return $elm$core$String$append('&lt;');
			case '>':
				return $elm$core$String$append('&gt;');
			case '\"':
				return $elm$core$String$append('&quot;');
			case '\'':
				return $elm$core$String$append('&apos;');
			default:
				var c = _char;
				return $elm$core$String$cons(c);
		}
	};
	return A3($elm$core$String$foldr, reducer, '', s);
};
var $ymtszw$elm_xml_decode$Xml$Decode$Internal$formatAttribute = function (attribute) {
	return $ymtszw$elm_xml_decode$Xml$Decode$Internal$escape(attribute.name) + ('=\"' + ($ymtszw$elm_xml_decode$Xml$Decode$Internal$escape(attribute.value) + '\"'));
};
var $ymtszw$elm_xml_decode$Xml$Decode$Internal$attributesToString = function (attrs) {
	if (!attrs.b) {
		return '';
	} else {
		return ' ' + A2(
			$elm$core$String$join,
			' ',
			A2($elm$core$List$map, $ymtszw$elm_xml_decode$Xml$Decode$Internal$formatAttribute, attrs));
	}
};
var $ymtszw$elm_xml_decode$Xml$Decode$Internal$formatNode = function (node) {
	if (node.$ === 'Element') {
		var tagName = node.a;
		var attrs = node.b;
		var children = node.c;
		return '<' + ($ymtszw$elm_xml_decode$Xml$Decode$Internal$escape(tagName) + ($ymtszw$elm_xml_decode$Xml$Decode$Internal$attributesToString(attrs) + ('>' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, $ymtszw$elm_xml_decode$Xml$Decode$Internal$formatNode, children)) + ('</' + ($ymtszw$elm_xml_decode$Xml$Decode$Internal$escape(tagName) + '>'))))));
	} else {
		var s = node.a;
		return $ymtszw$elm_xml_decode$Xml$Decode$Internal$escape(s);
	}
};
var $ymtszw$elm_xml_decode$Xml$Decode$errorToRows = function (error) {
	switch (error.$) {
		case 'Path':
			var path_ = error.a;
			var innerError = error.b;
			return A2(
				$elm$core$List$cons,
				'Path: /' + A2($elm$core$String$join, '/', path_),
				$ymtszw$elm_xml_decode$Xml$Decode$errorToRows(innerError));
		case 'OneOf':
			if (!error.a.b) {
				return _List_fromArray(
					['No decoders available.']);
			} else {
				var innerErrors = error.a;
				var indentRow = F3(
					function (outerIndex, innerIndex, row) {
						return (!innerIndex) ? (A3(
							$elm$core$String$padLeft,
							2,
							_Utils_chr(' '),
							$elm$core$String$fromInt(outerIndex)) + (') ' + row)) : ('    ' + row);
					});
				var genChildRows = function (outerIndex) {
					return A2(
						$elm$core$Basics$composeR,
						$ymtszw$elm_xml_decode$Xml$Decode$errorToRows,
						$elm$core$List$indexedMap(
							indentRow(outerIndex + 1)));
				};
				var innerRows = $elm$core$List$concat(
					A2($elm$core$List$indexedMap, genChildRows, innerErrors));
				return A2($elm$core$List$cons, 'All decoders failed:', innerRows);
			}
		default:
			var problem = error.a;
			var aNode = error.b;
			return _List_fromArray(
				[
					'Node: ' + $ymtszw$elm_xml_decode$Xml$Decode$Internal$formatNode(aNode),
					problem
				]);
	}
};
var $ymtszw$elm_xml_decode$Xml$Decode$errorToString = function (error) {
	return A2(
		$elm$core$String$join,
		'\n',
		$ymtszw$elm_xml_decode$Xml$Decode$errorToRows(error));
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $jinjor$elm_xml_parser$XmlParser$Xml = F3(
	function (processingInstructions, docType, root) {
		return {docType: docType, processingInstructions: processingInstructions, root: root};
	});
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.context)) : A3(
				$elm$parser$Parser$Advanced$Good,
				_Utils_cmp(s.offset, newOffset) < 0,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 'Expecting', a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $jinjor$elm_xml_parser$XmlParser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $jinjor$elm_xml_parser$XmlParser$comment = A2(
	$elm$parser$Parser$Advanced$ignorer,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
			$elm$parser$Parser$Advanced$token(
				$jinjor$elm_xml_parser$XmlParser$toToken('<!--'))),
		$elm$parser$Parser$Advanced$chompUntil(
			$jinjor$elm_xml_parser$XmlParser$toToken('-->'))),
	$elm$parser$Parser$Advanced$token(
		$jinjor$elm_xml_parser$XmlParser$toToken('-->')));
var $jinjor$elm_xml_parser$XmlParser$DocType = F2(
	function (rootElementName, definition) {
		return {definition: definition, rootElementName: rootElementName};
	});
var $jinjor$elm_xml_parser$XmlParser$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $jinjor$elm_xml_parser$XmlParser$Public = F3(
	function (a, b, c) {
		return {$: 'Public', a: a, b: b, c: c};
	});
var $jinjor$elm_xml_parser$XmlParser$System = F2(
	function (a, b) {
		return {$: 'System', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Located = F3(
	function (row, col, context) {
		return {col: col, context: context, row: row};
	});
var $elm$parser$Parser$Advanced$changeContext = F2(
	function (newContext, s) {
		return {col: s.col, context: newContext, indent: s.indent, offset: s.offset, row: s.row, src: s.src};
	});
var $elm$parser$Parser$Advanced$inContext = F2(
	function (context, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(
					A2(
						$elm$parser$Parser$Advanced$changeContext,
						A2(
							$elm$core$List$cons,
							A3($elm$parser$Parser$Advanced$Located, s0.row, s0.col, context),
							s0.context),
						s0));
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						a,
						A2($elm$parser$Parser$Advanced$changeContext, s0.context, s1));
				} else {
					var step = _v1;
					return step;
				}
			});
	});
var $elm$parser$Parser$BadRepeat = {$: 'BadRepeat'};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parseA(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					var _v2 = callback(a);
					var parseB = _v2.a;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3($elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $jinjor$elm_xml_parser$XmlParser$keep = F2(
	function (count, predicate) {
		var n = count.a;
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (str) {
				return (_Utils_cmp(
					n,
					$elm$core$String$length(str)) < 1) ? $elm$parser$Parser$Advanced$succeed(str) : $elm$parser$Parser$Advanced$problem($elm$parser$Parser$BadRepeat);
			},
			$elm$parser$Parser$Advanced$getChompedString(
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
					$elm$parser$Parser$Advanced$chompWhile(predicate))));
	});
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $jinjor$elm_xml_parser$XmlParser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $jinjor$elm_xml_parser$XmlParser$AtLeast = function (a) {
	return {$: 'AtLeast', a: a};
};
var $jinjor$elm_xml_parser$XmlParser$zeroOrMore = $jinjor$elm_xml_parser$XmlParser$AtLeast(0);
var $jinjor$elm_xml_parser$XmlParser$docTypeExternalSubset = A2(
	$elm$parser$Parser$Advanced$inContext,
	'docTypeExternalSubset',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$jinjor$elm_xml_parser$XmlParser$symbol('\"')),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$jinjor$elm_xml_parser$XmlParser$keep,
				$jinjor$elm_xml_parser$XmlParser$zeroOrMore,
				function (c) {
					return !_Utils_eq(
						c,
						_Utils_chr('\"'));
				}),
			$jinjor$elm_xml_parser$XmlParser$symbol('\"'))));
var $jinjor$elm_xml_parser$XmlParser$docTypeInternalSubset = A2(
	$elm$parser$Parser$Advanced$inContext,
	'docTypeInternalSubset',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$jinjor$elm_xml_parser$XmlParser$symbol('[')),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$jinjor$elm_xml_parser$XmlParser$keep,
				$jinjor$elm_xml_parser$XmlParser$zeroOrMore,
				function (c) {
					return !_Utils_eq(
						c,
						_Utils_chr(']'));
				}),
			$jinjor$elm_xml_parser$XmlParser$symbol(']'))));
var $elm$parser$Parser$ExpectingKeyword = function (a) {
	return {$: 'ExpectingKeyword', a: a};
};
var $elm$parser$Parser$Advanced$keyword = function (_v0) {
	var kwd = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(kwd);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return (_Utils_eq(newOffset, -1) || (0 <= A3(
				$elm$parser$Parser$Advanced$isSubChar,
				function (c) {
					return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
						c,
						_Utils_chr('_'));
				},
				newOffset,
				s.src))) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $jinjor$elm_xml_parser$XmlParser$keyword = function (kwd) {
	return $elm$parser$Parser$Advanced$keyword(
		A2(
			$elm$parser$Parser$Advanced$Token,
			kwd,
			$elm$parser$Parser$ExpectingKeyword(kwd)));
};
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $jinjor$elm_xml_parser$XmlParser$maybe = function (parser) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2($elm$parser$Parser$Advanced$map, $elm$core$Maybe$Just, parser),
				$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
			]));
};
var $jinjor$elm_xml_parser$XmlParser$publicIdentifier = A2(
	$elm$parser$Parser$Advanced$inContext,
	'publicIdentifier',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$jinjor$elm_xml_parser$XmlParser$symbol('\"')),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$jinjor$elm_xml_parser$XmlParser$keep,
				$jinjor$elm_xml_parser$XmlParser$zeroOrMore,
				function (c) {
					return !_Utils_eq(
						c,
						_Utils_chr('\"'));
				}),
			$jinjor$elm_xml_parser$XmlParser$symbol('\"'))));
var $jinjor$elm_xml_parser$XmlParser$ignore = F2(
	function (count, predicate) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			A2($jinjor$elm_xml_parser$XmlParser$keep, count, predicate));
	});
var $jinjor$elm_xml_parser$XmlParser$isWhitespace = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr(' ')) || (_Utils_eq(
		c,
		_Utils_chr('\u000D')) || (_Utils_eq(
		c,
		_Utils_chr('\n')) || _Utils_eq(
		c,
		_Utils_chr('\t'))));
};
var $jinjor$elm_xml_parser$XmlParser$whiteSpace = A2($jinjor$elm_xml_parser$XmlParser$ignore, $jinjor$elm_xml_parser$XmlParser$zeroOrMore, $jinjor$elm_xml_parser$XmlParser$isWhitespace);
var $jinjor$elm_xml_parser$XmlParser$docTypeDefinition = A2(
	$elm$parser$Parser$Advanced$inContext,
	'docTypeDefinition',
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed($jinjor$elm_xml_parser$XmlParser$Public),
								$jinjor$elm_xml_parser$XmlParser$keyword('PUBLIC')),
							$jinjor$elm_xml_parser$XmlParser$whiteSpace),
						A2($elm$parser$Parser$Advanced$ignorer, $jinjor$elm_xml_parser$XmlParser$publicIdentifier, $jinjor$elm_xml_parser$XmlParser$whiteSpace)),
					A2($elm$parser$Parser$Advanced$ignorer, $jinjor$elm_xml_parser$XmlParser$docTypeExternalSubset, $jinjor$elm_xml_parser$XmlParser$whiteSpace)),
				$jinjor$elm_xml_parser$XmlParser$maybe($jinjor$elm_xml_parser$XmlParser$docTypeInternalSubset)),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed($jinjor$elm_xml_parser$XmlParser$System),
							$jinjor$elm_xml_parser$XmlParser$keyword('SYSTEM')),
						$jinjor$elm_xml_parser$XmlParser$whiteSpace),
					A2($elm$parser$Parser$Advanced$ignorer, $jinjor$elm_xml_parser$XmlParser$docTypeExternalSubset, $jinjor$elm_xml_parser$XmlParser$whiteSpace)),
				$jinjor$elm_xml_parser$XmlParser$maybe($jinjor$elm_xml_parser$XmlParser$docTypeInternalSubset)),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($jinjor$elm_xml_parser$XmlParser$Custom),
				$jinjor$elm_xml_parser$XmlParser$docTypeInternalSubset)
			])));
var $jinjor$elm_xml_parser$XmlParser$oneOrMore = $jinjor$elm_xml_parser$XmlParser$AtLeast(1);
var $jinjor$elm_xml_parser$XmlParser$tagName = A2(
	$elm$parser$Parser$Advanced$inContext,
	'tagName',
	A2(
		$jinjor$elm_xml_parser$XmlParser$keep,
		$jinjor$elm_xml_parser$XmlParser$oneOrMore,
		function (c) {
			return (!$jinjor$elm_xml_parser$XmlParser$isWhitespace(c)) && ((!_Utils_eq(
				c,
				_Utils_chr('/'))) && ((!_Utils_eq(
				c,
				_Utils_chr('<'))) && ((!_Utils_eq(
				c,
				_Utils_chr('>'))) && ((!_Utils_eq(
				c,
				_Utils_chr('\"'))) && ((!_Utils_eq(
				c,
				_Utils_chr('\''))) && (!_Utils_eq(
				c,
				_Utils_chr('='))))))));
		}));
var $jinjor$elm_xml_parser$XmlParser$docType = A2(
	$elm$parser$Parser$Advanced$inContext,
	'docType',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($jinjor$elm_xml_parser$XmlParser$DocType),
					$jinjor$elm_xml_parser$XmlParser$symbol('<!DOCTYPE')),
				$jinjor$elm_xml_parser$XmlParser$whiteSpace),
			A2($elm$parser$Parser$Advanced$ignorer, $jinjor$elm_xml_parser$XmlParser$tagName, $jinjor$elm_xml_parser$XmlParser$whiteSpace)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2($elm$parser$Parser$Advanced$ignorer, $jinjor$elm_xml_parser$XmlParser$docTypeDefinition, $jinjor$elm_xml_parser$XmlParser$whiteSpace),
			$jinjor$elm_xml_parser$XmlParser$symbol('>'))));
var $jinjor$elm_xml_parser$XmlParser$Element = F3(
	function (a, b, c) {
		return {$: 'Element', a: a, b: b, c: c};
	});
var $jinjor$elm_xml_parser$XmlParser$Text = function (a) {
	return {$: 'Text', a: a};
};
var $jinjor$elm_xml_parser$XmlParser$Attribute = F2(
	function (name, value) {
		return {name: name, value: value};
	});
var $jinjor$elm_xml_parser$XmlParser$attributeName = A2(
	$elm$parser$Parser$Advanced$inContext,
	'attributeName',
	A2(
		$jinjor$elm_xml_parser$XmlParser$keep,
		$jinjor$elm_xml_parser$XmlParser$oneOrMore,
		function (c) {
			return (!$jinjor$elm_xml_parser$XmlParser$isWhitespace(c)) && ((!_Utils_eq(
				c,
				_Utils_chr('/'))) && ((!_Utils_eq(
				c,
				_Utils_chr('<'))) && ((!_Utils_eq(
				c,
				_Utils_chr('>'))) && ((!_Utils_eq(
				c,
				_Utils_chr('\"'))) && ((!_Utils_eq(
				c,
				_Utils_chr('\''))) && (!_Utils_eq(
				c,
				_Utils_chr('='))))))));
		}));
var $elm$parser$Parser$Problem = function (a) {
	return {$: 'Problem', a: a};
};
var $jinjor$elm_xml_parser$XmlParser$entities = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			'amp',
			_Utils_chr('&')),
			_Utils_Tuple2(
			'lt',
			_Utils_chr('<')),
			_Utils_Tuple2(
			'gt',
			_Utils_chr('>')),
			_Utils_Tuple2(
			'apos',
			_Utils_chr('\'')),
			_Utils_Tuple2(
			'quot',
			_Utils_chr('\"'))
		]));
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (maybe.$ === 'Just') {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char.valueOf()) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
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
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $jinjor$elm_xml_parser$XmlParser$decodeEscape = function (s) {
	return A2($elm$core$String$startsWith, '#x', s) ? A2(
		$elm$core$Result$mapError,
		$elm$parser$Parser$Problem,
		A2(
			$elm$core$Result$map,
			$elm$core$Char$fromCode,
			$rtfeldman$elm_hex$Hex$fromString(
				A2($elm$core$String$dropLeft, 2, s)))) : (A2($elm$core$String$startsWith, '#', s) ? A2(
		$elm$core$Result$fromMaybe,
		$elm$parser$Parser$Problem('Invalid escaped charactor: ' + s),
		A2(
			$elm$core$Maybe$map,
			$elm$core$Char$fromCode,
			$elm$core$String$toInt(
				A2($elm$core$String$dropLeft, 1, s)))) : A2(
		$elm$core$Result$fromMaybe,
		$elm$parser$Parser$Problem('No entity named \"&' + (s + ';\" found.')),
		A2($elm$core$Dict$get, s, $jinjor$elm_xml_parser$XmlParser$entities)));
};
var $jinjor$elm_xml_parser$XmlParser$fail = function (str) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(str));
};
var $jinjor$elm_xml_parser$XmlParser$escapedChar = function (end_) {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'escapedChar',
		A2(
			$elm$parser$Parser$Advanced$andThen,
			function (s) {
				return $elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$andThen,
							function (_v0) {
								var _v1 = $jinjor$elm_xml_parser$XmlParser$decodeEscape(s);
								if (_v1.$ === 'Ok') {
									var c = _v1.a;
									return $elm$parser$Parser$Advanced$succeed(c);
								} else {
									var e = _v1.a;
									return $elm$parser$Parser$Advanced$problem(e);
								}
							},
							$jinjor$elm_xml_parser$XmlParser$symbol(';')),
							$jinjor$elm_xml_parser$XmlParser$fail('Entities must end_ with \";\": &' + s)
						]));
			},
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$jinjor$elm_xml_parser$XmlParser$symbol('&')),
				A2(
					$jinjor$elm_xml_parser$XmlParser$keep,
					$jinjor$elm_xml_parser$XmlParser$oneOrMore,
					function (c) {
						return (!_Utils_eq(c, end_)) && (!_Utils_eq(
							c,
							_Utils_chr(';')));
					}))));
};
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = thunk(_Utils_Tuple0);
			var parse = _v0.a;
			return parse(s);
		});
};
var $jinjor$elm_xml_parser$XmlParser$textString = function (end_) {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'textString',
		A2(
			$elm$parser$Parser$Advanced$andThen,
			function (s) {
				return $elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$keeper,
								$elm$parser$Parser$Advanced$succeed($elm$core$String$cons),
								$jinjor$elm_xml_parser$XmlParser$escapedChar(end_)),
							$elm$parser$Parser$Advanced$lazy(
								function (_v0) {
									return $jinjor$elm_xml_parser$XmlParser$textString(end_);
								})),
							$elm$parser$Parser$Advanced$succeed(s)
						]));
			},
			A2(
				$jinjor$elm_xml_parser$XmlParser$keep,
				$jinjor$elm_xml_parser$XmlParser$zeroOrMore,
				function (c) {
					return (!_Utils_eq(c, end_)) && (!_Utils_eq(
						c,
						_Utils_chr('&')));
				})));
};
var $jinjor$elm_xml_parser$XmlParser$attributeValue = A2(
	$elm$parser$Parser$Advanced$inContext,
	'attributeValue',
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$jinjor$elm_xml_parser$XmlParser$symbol('\"')),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$jinjor$elm_xml_parser$XmlParser$textString(
						_Utils_chr('\"')),
					$jinjor$elm_xml_parser$XmlParser$symbol('\"'))),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$jinjor$elm_xml_parser$XmlParser$symbol('\'')),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$jinjor$elm_xml_parser$XmlParser$textString(
						_Utils_chr('\'')),
					$jinjor$elm_xml_parser$XmlParser$symbol('\'')))
			])));
var $jinjor$elm_xml_parser$XmlParser$attribute = A2(
	$elm$parser$Parser$Advanced$inContext,
	'attribute',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($jinjor$elm_xml_parser$XmlParser$Attribute),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2($elm$parser$Parser$Advanced$ignorer, $jinjor$elm_xml_parser$XmlParser$attributeName, $jinjor$elm_xml_parser$XmlParser$whiteSpace),
					$jinjor$elm_xml_parser$XmlParser$symbol('=')),
				$jinjor$elm_xml_parser$XmlParser$whiteSpace)),
		$jinjor$elm_xml_parser$XmlParser$attributeValue));
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $jinjor$elm_xml_parser$XmlParser$attributes = function (keys) {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'attributes',
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$andThen,
					function (attr) {
						return A2($elm$core$Set$member, attr.name, keys) ? $jinjor$elm_xml_parser$XmlParser$fail('attribute ' + (attr.name + ' is duplicated')) : A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed(
									$elm$core$List$cons(attr)),
								$jinjor$elm_xml_parser$XmlParser$whiteSpace),
							$jinjor$elm_xml_parser$XmlParser$attributes(
								A2($elm$core$Set$insert, attr.name, keys)));
					},
					$jinjor$elm_xml_parser$XmlParser$attribute),
					$elm$parser$Parser$Advanced$succeed(_List_Nil)
				])));
};
var $jinjor$elm_xml_parser$XmlParser$closingTag = function (startTagName) {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'closingTag',
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
							$jinjor$elm_xml_parser$XmlParser$symbol('</')),
						$jinjor$elm_xml_parser$XmlParser$whiteSpace),
					A2(
						$elm$parser$Parser$Advanced$andThen,
						function (endTagName) {
							return _Utils_eq(startTagName, endTagName) ? $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0) : $jinjor$elm_xml_parser$XmlParser$fail('tag name mismatch: ' + (startTagName + (' and ' + endTagName)));
						},
						$jinjor$elm_xml_parser$XmlParser$tagName)),
				$jinjor$elm_xml_parser$XmlParser$whiteSpace),
			$jinjor$elm_xml_parser$XmlParser$symbol('>')));
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
function $jinjor$elm_xml_parser$XmlParser$cyclic$cdataContent() {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'cdataContent',
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(''),
					$jinjor$elm_xml_parser$XmlParser$symbol(']]>')),
					A2(
					$elm$parser$Parser$Advanced$andThen,
					function (_v0) {
						return A2(
							$elm$parser$Parser$Advanced$map,
							function (tail) {
								return ']]' + tail;
							},
							$jinjor$elm_xml_parser$XmlParser$cyclic$cdataContent());
					},
					$jinjor$elm_xml_parser$XmlParser$symbol(']]')),
					A2(
					$elm$parser$Parser$Advanced$andThen,
					function (_v1) {
						return A2(
							$elm$parser$Parser$Advanced$map,
							function (tail) {
								return ']' + tail;
							},
							$jinjor$elm_xml_parser$XmlParser$cyclic$cdataContent());
					},
					$jinjor$elm_xml_parser$XmlParser$symbol(']')),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$append),
						A2(
							$jinjor$elm_xml_parser$XmlParser$keep,
							$jinjor$elm_xml_parser$XmlParser$zeroOrMore,
							function (c) {
								return !_Utils_eq(
									c,
									_Utils_chr(']'));
							})),
					$elm$parser$Parser$Advanced$lazy(
						function (_v2) {
							return $jinjor$elm_xml_parser$XmlParser$cyclic$cdataContent();
						}))
				])));
}
try {
	var $jinjor$elm_xml_parser$XmlParser$cdataContent = $jinjor$elm_xml_parser$XmlParser$cyclic$cdataContent();
	$jinjor$elm_xml_parser$XmlParser$cyclic$cdataContent = function () {
		return $jinjor$elm_xml_parser$XmlParser$cdataContent;
	};
} catch ($) {
	throw 'Some top-level definitions from `XmlParser` are causing infinite recursion:\n\n  ┌─────┐\n  │    cdataContent\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $jinjor$elm_xml_parser$XmlParser$cdata = A2(
	$elm$parser$Parser$Advanced$inContext,
	'cdata',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$jinjor$elm_xml_parser$XmlParser$symbol('<![CDATA[')),
		$jinjor$elm_xml_parser$XmlParser$cdataContent));
function $jinjor$elm_xml_parser$XmlParser$cyclic$textNodeString() {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'textNodeString',
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							F2(
								function (s, maybeString) {
									return $elm$core$Maybe$Just(
										_Utils_ap(
											s,
											A2($elm$core$Maybe$withDefault, '', maybeString)));
								})),
						A2(
							$jinjor$elm_xml_parser$XmlParser$keep,
							$jinjor$elm_xml_parser$XmlParser$oneOrMore,
							function (c) {
								return (!_Utils_eq(
									c,
									_Utils_chr('<'))) && (!_Utils_eq(
									c,
									_Utils_chr('&')));
							})),
					$elm$parser$Parser$Advanced$lazy(
						function (_v0) {
							return $jinjor$elm_xml_parser$XmlParser$cyclic$textNodeString();
						})),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							F2(
								function (c, maybeString) {
									return $elm$core$Maybe$Just(
										A2(
											$elm$core$String$cons,
											c,
											A2($elm$core$Maybe$withDefault, '', maybeString)));
								})),
						$jinjor$elm_xml_parser$XmlParser$escapedChar(
							_Utils_chr('<'))),
					$elm$parser$Parser$Advanced$lazy(
						function (_v1) {
							return $jinjor$elm_xml_parser$XmlParser$cyclic$textNodeString();
						})),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							F2(
								function (s, maybeString) {
									var str = _Utils_ap(
										s,
										A2($elm$core$Maybe$withDefault, '', maybeString));
									return (str !== '') ? $elm$core$Maybe$Just(str) : $elm$core$Maybe$Nothing;
								})),
						$jinjor$elm_xml_parser$XmlParser$cdata),
					$elm$parser$Parser$Advanced$lazy(
						function (_v2) {
							return $jinjor$elm_xml_parser$XmlParser$cyclic$textNodeString();
						})),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (maybeString) {
								var str = A2($elm$core$Maybe$withDefault, '', maybeString);
								return (str !== '') ? $elm$core$Maybe$Just(str) : $elm$core$Maybe$Nothing;
							}),
						$jinjor$elm_xml_parser$XmlParser$comment),
					$elm$parser$Parser$Advanced$lazy(
						function (_v3) {
							return $jinjor$elm_xml_parser$XmlParser$cyclic$textNodeString();
						})),
					$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
				])));
}
try {
	var $jinjor$elm_xml_parser$XmlParser$textNodeString = $jinjor$elm_xml_parser$XmlParser$cyclic$textNodeString();
	$jinjor$elm_xml_parser$XmlParser$cyclic$textNodeString = function () {
		return $jinjor$elm_xml_parser$XmlParser$textNodeString;
	};
} catch ($) {
	throw 'Some top-level definitions from `XmlParser` are causing infinite recursion:\n\n  ┌─────┐\n  │    textNodeString\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $jinjor$elm_xml_parser$XmlParser$children = function (startTagName) {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'children',
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(_List_Nil),
					$jinjor$elm_xml_parser$XmlParser$closingTag(startTagName)),
					A2(
					$elm$parser$Parser$Advanced$andThen,
					function (maybeString) {
						if (maybeString.$ === 'Just') {
							var s = maybeString.a;
							return A2(
								$elm$parser$Parser$Advanced$keeper,
								$elm$parser$Parser$Advanced$succeed(
									function (rest) {
										return A2(
											$elm$core$List$cons,
											$jinjor$elm_xml_parser$XmlParser$Text(s),
											rest);
									}),
								$jinjor$elm_xml_parser$XmlParser$children(startTagName));
						} else {
							return A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed(_List_Nil),
								$jinjor$elm_xml_parser$XmlParser$closingTag(startTagName));
						}
					},
					$jinjor$elm_xml_parser$XmlParser$textNodeString),
					$elm$parser$Parser$Advanced$lazy(
					function (_v2) {
						return A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$keeper,
								$elm$parser$Parser$Advanced$succeed($elm$core$List$cons),
								$jinjor$elm_xml_parser$XmlParser$cyclic$element()),
							$jinjor$elm_xml_parser$XmlParser$children(startTagName));
					})
				])));
};
function $jinjor$elm_xml_parser$XmlParser$cyclic$element() {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'element',
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$jinjor$elm_xml_parser$XmlParser$symbol('<')),
			A2(
				$elm$parser$Parser$Advanced$andThen,
				function (startTagName) {
					return A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed(
									$jinjor$elm_xml_parser$XmlParser$Element(startTagName)),
								$jinjor$elm_xml_parser$XmlParser$whiteSpace),
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$jinjor$elm_xml_parser$XmlParser$attributes($elm$core$Set$empty),
								$jinjor$elm_xml_parser$XmlParser$whiteSpace)),
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(_List_Nil),
									$jinjor$elm_xml_parser$XmlParser$symbol('/>')),
									A2(
									$elm$parser$Parser$Advanced$keeper,
									A2(
										$elm$parser$Parser$Advanced$ignorer,
										$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
										$jinjor$elm_xml_parser$XmlParser$symbol('>')),
									$elm$parser$Parser$Advanced$lazy(
										function (_v0) {
											return $jinjor$elm_xml_parser$XmlParser$children(startTagName);
										}))
								])));
				},
				$jinjor$elm_xml_parser$XmlParser$tagName)));
}
try {
	var $jinjor$elm_xml_parser$XmlParser$element = $jinjor$elm_xml_parser$XmlParser$cyclic$element();
	$jinjor$elm_xml_parser$XmlParser$cyclic$element = function () {
		return $jinjor$elm_xml_parser$XmlParser$element;
	};
} catch ($) {
	throw 'Some top-level definitions from `XmlParser` are causing infinite recursion:\n\n  ┌─────┐\n  │    children\n  │     ↓\n  │    element\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $elm$parser$Parser$ExpectingEnd = {$: 'ExpectingEnd'};
var $elm$parser$Parser$Advanced$end = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return _Utils_eq(
				$elm$core$String$length(s.src),
				s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $jinjor$elm_xml_parser$XmlParser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $jinjor$elm_xml_parser$XmlParser$ProcessingInstruction = F2(
	function (name, value) {
		return {name: name, value: value};
	});
var $jinjor$elm_xml_parser$XmlParser$processingInstructionName = A2(
	$elm$parser$Parser$Advanced$inContext,
	'processingInstructionName',
	A2(
		$jinjor$elm_xml_parser$XmlParser$keep,
		$jinjor$elm_xml_parser$XmlParser$oneOrMore,
		function (c) {
			return !_Utils_eq(
				c,
				_Utils_chr(' '));
		}));
function $jinjor$elm_xml_parser$XmlParser$cyclic$processingInstructionValue() {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'processingInstructionValue',
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(''),
					$jinjor$elm_xml_parser$XmlParser$symbol('?>')),
					A2(
					$elm$parser$Parser$Advanced$andThen,
					function (_v0) {
						return A2(
							$elm$parser$Parser$Advanced$map,
							function (tail) {
								return '?' + tail;
							},
							$jinjor$elm_xml_parser$XmlParser$cyclic$processingInstructionValue());
					},
					$jinjor$elm_xml_parser$XmlParser$symbol('?')),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$append),
						A2(
							$jinjor$elm_xml_parser$XmlParser$keep,
							$jinjor$elm_xml_parser$XmlParser$zeroOrMore,
							function (c) {
								return !_Utils_eq(
									c,
									_Utils_chr('?'));
							})),
					$elm$parser$Parser$Advanced$lazy(
						function (_v1) {
							return $jinjor$elm_xml_parser$XmlParser$cyclic$processingInstructionValue();
						}))
				])));
}
try {
	var $jinjor$elm_xml_parser$XmlParser$processingInstructionValue = $jinjor$elm_xml_parser$XmlParser$cyclic$processingInstructionValue();
	$jinjor$elm_xml_parser$XmlParser$cyclic$processingInstructionValue = function () {
		return $jinjor$elm_xml_parser$XmlParser$processingInstructionValue;
	};
} catch ($) {
	throw 'Some top-level definitions from `XmlParser` are causing infinite recursion:\n\n  ┌─────┐\n  │    processingInstructionValue\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $jinjor$elm_xml_parser$XmlParser$processingInstruction = A2(
	$elm$parser$Parser$Advanced$inContext,
	'processingInstruction',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($jinjor$elm_xml_parser$XmlParser$ProcessingInstruction),
				$jinjor$elm_xml_parser$XmlParser$symbol('<?')),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$jinjor$elm_xml_parser$XmlParser$processingInstructionName,
				$jinjor$elm_xml_parser$XmlParser$symbol(' '))),
		$jinjor$elm_xml_parser$XmlParser$processingInstructionValue));
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $jinjor$elm_xml_parser$XmlParser$repeat = F2(
	function (count, parser) {
		var n = count.a;
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (results) {
				return (_Utils_cmp(
					n,
					$elm$core$List$length(results)) < 1) ? $elm$parser$Parser$Advanced$succeed(results) : $elm$parser$Parser$Advanced$problem($elm$parser$Parser$BadRepeat);
			},
			A2(
				$elm$parser$Parser$Advanced$loop,
				_List_Nil,
				function (state) {
					return $elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$parser$Parser$Advanced$map,
								function (r) {
									return $elm$parser$Parser$Advanced$Loop(
										A2(
											$elm$core$List$append,
											state,
											_List_fromArray(
												[r])));
								},
								parser),
								A2(
								$elm$parser$Parser$Advanced$map,
								$elm$core$Basics$always(
									$elm$parser$Parser$Advanced$Done(state)),
								$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))
							]));
				}));
	});
var $jinjor$elm_xml_parser$XmlParser$whiteSpace1 = A2($jinjor$elm_xml_parser$XmlParser$ignore, $jinjor$elm_xml_parser$XmlParser$oneOrMore, $jinjor$elm_xml_parser$XmlParser$isWhitespace);
var $jinjor$elm_xml_parser$XmlParser$xml = A2(
	$elm$parser$Parser$Advanced$inContext,
	'xml',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($jinjor$elm_xml_parser$XmlParser$Xml),
					$jinjor$elm_xml_parser$XmlParser$whiteSpace),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$jinjor$elm_xml_parser$XmlParser$repeat,
						$jinjor$elm_xml_parser$XmlParser$zeroOrMore,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
							A2($elm$parser$Parser$Advanced$ignorer, $jinjor$elm_xml_parser$XmlParser$processingInstruction, $jinjor$elm_xml_parser$XmlParser$whiteSpace))),
					A2(
						$jinjor$elm_xml_parser$XmlParser$repeat,
						$jinjor$elm_xml_parser$XmlParser$zeroOrMore,
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[$jinjor$elm_xml_parser$XmlParser$whiteSpace1, $jinjor$elm_xml_parser$XmlParser$comment]))))),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$jinjor$elm_xml_parser$XmlParser$maybe($jinjor$elm_xml_parser$XmlParser$docType),
				A2(
					$jinjor$elm_xml_parser$XmlParser$repeat,
					$jinjor$elm_xml_parser$XmlParser$zeroOrMore,
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[$jinjor$elm_xml_parser$XmlParser$whiteSpace1, $jinjor$elm_xml_parser$XmlParser$comment]))))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$jinjor$elm_xml_parser$XmlParser$element,
				A2(
					$jinjor$elm_xml_parser$XmlParser$repeat,
					$jinjor$elm_xml_parser$XmlParser$zeroOrMore,
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[$jinjor$elm_xml_parser$XmlParser$whiteSpace1, $jinjor$elm_xml_parser$XmlParser$comment])))),
			$jinjor$elm_xml_parser$XmlParser$end)));
var $jinjor$elm_xml_parser$XmlParser$parse = function (source) {
	return A2($elm$parser$Parser$Advanced$run, $jinjor$elm_xml_parser$XmlParser$xml, source);
};
var $ymtszw$elm_xml_decode$Xml$Decode$parserProblemToString = function (problem) {
	switch (problem.$) {
		case 'Expecting':
			var expect = problem.a;
			return 'I was expecting: ' + expect;
		case 'ExpectingInt':
			return 'I was expecting an integer';
		case 'ExpectingHex':
			return 'I was expecting a hexadecimal';
		case 'ExpectingOctal':
			return 'I was expecting an octal';
		case 'ExpectingBinary':
			return 'I was expecting a binary';
		case 'ExpectingFloat':
			return 'I was expecting a float';
		case 'ExpectingNumber':
			return 'I was expecting a number';
		case 'ExpectingVariable':
			return 'I was expecting a variable';
		case 'ExpectingSymbol':
			var symbol = problem.a;
			return 'I was expecting a symbol: ' + symbol;
		case 'ExpectingKeyword':
			var keyword = problem.a;
			return 'I was expecting a keyword: ' + keyword;
		case 'ExpectingEnd':
			return 'I was expecting the end of input';
		case 'UnexpectedChar':
			return 'I got an unexpected character';
		case 'Problem':
			var text = problem.a;
			return text;
		default:
			return 'I got a bad repetition';
	}
};
var $ymtszw$elm_xml_decode$Xml$Decode$parseErrorsToString = function (deadEnds) {
	return A2(
		$elm$core$String$append,
		'Invalid XML document.\n',
		A2(
			$elm$core$String$join,
			'\n',
			A2(
				$elm$core$List$map,
				function (deadEnd) {
					return _Utils_ap(
						'At [' + ($elm$core$String$fromInt(deadEnd.row) + (',' + ($elm$core$String$fromInt(deadEnd.col) + '], '))),
						$ymtszw$elm_xml_decode$Xml$Decode$parserProblemToString(deadEnd.problem));
				},
				deadEnds)));
};
var $ymtszw$elm_xml_decode$Xml$Decode$decodeString = F2(
	function (decoder, s) {
		var _v0 = $jinjor$elm_xml_parser$XmlParser$parse(s);
		if (_v0.$ === 'Ok') {
			var xml = _v0.a;
			var _v1 = A2($ymtszw$elm_xml_decode$Xml$Decode$decodeXml, decoder, xml);
			if (_v1.$ === 'Ok') {
				var decoded = _v1.a;
				return $elm$core$Result$Ok(decoded);
			} else {
				var dErr = _v1.a;
				return $elm$core$Result$Err(
					$ymtszw$elm_xml_decode$Xml$Decode$errorToString(dErr));
			}
		} else {
			var pErr = _v0.a;
			return $elm$core$Result$Err(
				$ymtszw$elm_xml_decode$Xml$Decode$parseErrorsToString(pErr));
		}
	});
var $ymtszw$elm_xml_decode$Xml$Decode$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var $ymtszw$elm_xml_decode$Xml$Decode$children = function (aNode) {
	if (aNode.$ === 'Element') {
		var nodes = aNode.c;
		return nodes;
	} else {
		return _List_Nil;
	}
};
var $ymtszw$elm_xml_decode$Xml$Decode$Path = F2(
	function (a, b) {
		return {$: 'Path', a: a, b: b};
	});
var $ymtszw$elm_xml_decode$Xml$Decode$concatPath = F2(
	function (path_, error) {
		if (error.$ === 'Path') {
			var innerPath = error.a;
			var innerError = error.b;
			return A2(
				$ymtszw$elm_xml_decode$Xml$Decode$Path,
				_Utils_ap(path_, innerPath),
				innerError);
		} else {
			var otherwise = error;
			return A2($ymtszw$elm_xml_decode$Xml$Decode$Path, path_, otherwise);
		}
	});
var $ymtszw$elm_xml_decode$Xml$Decode$hasName = F2(
	function (name, aNode) {
		if (aNode.$ === 'Element') {
			var nodeName = aNode.a;
			return _Utils_eq(name, nodeName);
		} else {
			return false;
		}
	});
var $ymtszw$elm_xml_decode$Xml$Decode$query = F3(
	function (path_, ancestor, collected) {
		query:
		while (true) {
			if (!path_.b) {
				return _Utils_Tuple2(collected, ancestor);
			} else {
				if (!path_.b.b) {
					var segment = path_.a;
					return _Utils_Tuple2(
						A2(
							$elm$core$List$filter,
							$ymtszw$elm_xml_decode$Xml$Decode$hasName(segment),
							collected),
						ancestor);
				} else {
					var segment = path_.a;
					var ss = path_.b;
					var _v1 = A2(
						$elm$core$List$filter,
						$ymtszw$elm_xml_decode$Xml$Decode$hasName(segment),
						collected);
					if (!_v1.b) {
						return _Utils_Tuple2(_List_Nil, ancestor);
					} else {
						if (!_v1.b.b) {
							var onlyOne = _v1.a;
							var $temp$path_ = ss,
								$temp$ancestor = onlyOne,
								$temp$collected = $ymtszw$elm_xml_decode$Xml$Decode$children(onlyOne);
							path_ = $temp$path_;
							ancestor = $temp$ancestor;
							collected = $temp$collected;
							continue query;
						} else {
							var many = _v1;
							var $temp$path_ = ss,
								$temp$ancestor = ancestor,
								$temp$collected = A2($elm$core$List$concatMap, $ymtszw$elm_xml_decode$Xml$Decode$children, many);
							path_ = $temp$path_;
							ancestor = $temp$ancestor;
							collected = $temp$collected;
							continue query;
						}
					}
				}
			}
		}
	});
var $ymtszw$elm_xml_decode$Xml$Decode$pathImpl = F3(
	function (path_, _v0, aNode) {
		var listDecoder = _v0.a;
		return A2(
			$elm$core$Result$mapError,
			$ymtszw$elm_xml_decode$Xml$Decode$concatPath(path_),
			listDecoder(
				A3(
					$ymtszw$elm_xml_decode$Xml$Decode$query,
					path_,
					aNode,
					$ymtszw$elm_xml_decode$Xml$Decode$children(aNode))));
	});
var $ymtszw$elm_xml_decode$Xml$Decode$path = F2(
	function (path_, listDecoder) {
		return $ymtszw$elm_xml_decode$Xml$Decode$Decoder(
			A2($ymtszw$elm_xml_decode$Xml$Decode$pathImpl, path_, listDecoder));
	});
var $ymtszw$elm_xml_decode$Xml$Decode$ListDecoder = function (a) {
	return {$: 'ListDecoder', a: a};
};
var $ymtszw$elm_xml_decode$Xml$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $ymtszw$elm_xml_decode$Xml$Decode$singleImpl = F2(
	function (_v0, _v1) {
		var decoder = _v0.a;
		var nodes = _v1.a;
		var ancestor = _v1.b;
		if (!nodes.b) {
			return $elm$core$Result$Err(
				A2($ymtszw$elm_xml_decode$Xml$Decode$Failure, 'Node not found.', ancestor));
		} else {
			if (!nodes.b.b) {
				var singleton_ = nodes.a;
				return decoder(singleton_);
			} else {
				return $elm$core$Result$Err(
					A2($ymtszw$elm_xml_decode$Xml$Decode$Failure, 'Multiple nodes found.', ancestor));
			}
		}
	});
var $ymtszw$elm_xml_decode$Xml$Decode$single = function (decoder) {
	return $ymtszw$elm_xml_decode$Xml$Decode$ListDecoder(
		$ymtszw$elm_xml_decode$Xml$Decode$singleImpl(decoder));
};
var $ymtszw$elm_xml_decode$Xml$Decode$cdataImpl = F2(
	function (generator, aNode) {
		var unparsable = function (message) {
			return A2($ymtszw$elm_xml_decode$Xml$Decode$Failure, message, aNode);
		};
		var gen = A2(
			$elm$core$Basics$composeR,
			generator,
			$elm$core$Result$mapError(unparsable));
		if (aNode.$ === 'Text') {
			var str = aNode.a;
			return gen(str);
		} else {
			if (!aNode.c.b) {
				return gen('');
			} else {
				if ((aNode.c.a.$ === 'Text') && (!aNode.c.b.b)) {
					var _v1 = aNode.c;
					var str = _v1.a.a;
					return gen(str);
				} else {
					return $elm$core$Result$Err(
						unparsable('The node is not a simple text node.'));
				}
			}
		}
	});
var $ymtszw$elm_xml_decode$Xml$Decode$cdata = function (generator) {
	return $ymtszw$elm_xml_decode$Xml$Decode$Decoder(
		$ymtszw$elm_xml_decode$Xml$Decode$cdataImpl(generator));
};
var $ymtszw$elm_xml_decode$Xml$Decode$string = $ymtszw$elm_xml_decode$Xml$Decode$cdata($elm$core$Result$Ok);
var $author$project$Sources$Services$AmazonS3$Parser$errorMessagesDecoder = A2(
	$ymtszw$elm_xml_decode$Xml$Decode$path,
	_List_fromArray(
		['Message']),
	$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string));
var $author$project$Sources$Services$AmazonS3$Parser$parseErrorResponse = function (response) {
	return $elm$core$Result$toMaybe(
		A2($ymtszw$elm_xml_decode$Xml$Decode$decodeString, $author$project$Sources$Services$AmazonS3$Parser$errorMessagesDecoder, response));
};
var $author$project$Sources$Services$AmazonS3$parseErrorResponse = $author$project$Sources$Services$AmazonS3$Parser$parseErrorResponse;
var $author$project$Sources$Services$Azure$BlobParser$errorMessagesDecoder = A2(
	$ymtszw$elm_xml_decode$Xml$Decode$path,
	_List_fromArray(
		['Message']),
	$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string));
var $author$project$Sources$Services$Azure$BlobParser$parseErrorResponse = function (response) {
	return $elm$core$Result$toMaybe(
		A2($ymtszw$elm_xml_decode$Xml$Decode$decodeString, $author$project$Sources$Services$Azure$BlobParser$errorMessagesDecoder, response));
};
var $author$project$Sources$Services$AzureBlob$parseErrorResponse = $author$project$Sources$Services$Azure$BlobParser$parseErrorResponse;
var $author$project$Sources$Services$Azure$FileParser$errorMessagesDecoder = A2(
	$ymtszw$elm_xml_decode$Xml$Decode$path,
	_List_fromArray(
		['Message']),
	$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string));
var $author$project$Sources$Services$Azure$FileParser$parseErrorResponse = function (response) {
	return $elm$core$Result$toMaybe(
		A2($ymtszw$elm_xml_decode$Xml$Decode$decodeString, $author$project$Sources$Services$Azure$FileParser$errorMessagesDecoder, response));
};
var $author$project$Sources$Services$AzureFile$parseErrorResponse = $author$project$Sources$Services$Azure$FileParser$parseErrorResponse;
var $author$project$Sources$Services$Ipfs$Parser$parseErrorResponse = function (response) {
	return $elm$core$Result$toMaybe(
		A2(
			$elm$json$Json$Decode$decodeString,
			A2($elm$json$Json$Decode$field, 'Message', $elm$json$Json$Decode$string),
			response));
};
var $author$project$Sources$Services$Ipfs$parseErrorResponse = $author$project$Sources$Services$Ipfs$Parser$parseErrorResponse;
var $author$project$Sources$Services$Btfs$parseErrorResponse = $author$project$Sources$Services$Ipfs$parseErrorResponse;
var $author$project$Sources$Services$Dropbox$Parser$parseErrorResponse = function (response) {
	return $elm$core$Result$toMaybe(
		A2(
			$elm$json$Json$Decode$decodeString,
			A2($elm$json$Json$Decode$field, 'error_summary', $elm$json$Json$Decode$string),
			response));
};
var $author$project$Sources$Services$Dropbox$parseErrorResponse = $author$project$Sources$Services$Dropbox$Parser$parseErrorResponse;
var $author$project$Sources$Services$Google$Parser$parseErrorResponse = function (response) {
	return $elm$core$Result$toMaybe(
		A2(
			$elm$json$Json$Decode$decodeString,
			A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['error', 'message']),
				$elm$json$Json$Decode$string),
			response));
};
var $author$project$Sources$Services$Google$parseErrorResponse = $author$project$Sources$Services$Google$Parser$parseErrorResponse;
var $author$project$Sources$Services$WebDav$Parser$parseErrorResponse = $elm$core$Maybe$Just;
var $author$project$Sources$Services$WebDav$parseErrorResponse = $author$project$Sources$Services$WebDav$Parser$parseErrorResponse;
var $author$project$Sources$Services$parseErrorResponse = function (service) {
	switch (service.$) {
		case 'AmazonS3':
			return $author$project$Sources$Services$AmazonS3$parseErrorResponse;
		case 'AzureBlob':
			return $author$project$Sources$Services$AzureBlob$parseErrorResponse;
		case 'AzureFile':
			return $author$project$Sources$Services$AzureFile$parseErrorResponse;
		case 'Btfs':
			return $author$project$Sources$Services$Btfs$parseErrorResponse;
		case 'Dropbox':
			return $author$project$Sources$Services$Dropbox$parseErrorResponse;
		case 'Google':
			return $author$project$Sources$Services$Google$parseErrorResponse;
		case 'Ipfs':
			return $author$project$Sources$Services$Ipfs$parseErrorResponse;
		default:
			return $author$project$Sources$Services$WebDav$parseErrorResponse;
	}
};
var $author$project$Brain$Sources$Processing$Common$translateHttpError = F2(
	function (service, err) {
		switch (err.$) {
			case 'NetworkError':
				return 'Cannot connect to this source';
			case 'Timeout':
				return 'Source did not respond (timeout)';
			case 'BadUrl':
				return 'Diffuse error, invalid url was used';
			case 'BadStatus':
				return 'Got a faulty response from this source. Use the developer console to get more info.';
			default:
				var response = err.a;
				return A2(
					$elm$core$Maybe$withDefault,
					A2(
						$author$project$Brain$Sources$Processing$Common$translateHttpError,
						service,
						$elm$http$Http$BadStatus(0)),
					A2($author$project$Sources$Services$parseErrorResponse, service, response));
		}
	});
var $author$project$Brain$Sources$Processing$Common$reportHttpError = F2(
	function (source, err) {
		return A2(
			$author$project$Brain$Sources$Processing$Common$reportError,
			source,
			A2($author$project$Brain$Sources$Processing$Common$translateHttpError, source.service, err));
	});
var $author$project$Sources$Processing$TheEnd = {$: 'TheEnd'};
var $author$project$Sources$Services$Common$noPrep = F4(
	function (_v0, _v1, srcData, _v2) {
		return {marker: $author$project$Sources$Processing$TheEnd, sourceData: srcData};
	});
var $author$project$Sources$Services$AmazonS3$parsePreparationResponse = $author$project$Sources$Services$Common$noPrep;
var $author$project$Sources$Services$AzureBlob$parsePreparationResponse = $author$project$Sources$Services$Common$noPrep;
var $author$project$Sources$Services$AzureFile$parsePreparationResponse = $author$project$Sources$Services$Common$noPrep;
var $author$project$Sources$Services$Ipfs$Parser$cloudflareDnsResultDecoder = A2(
	$elm$json$Json$Decode$map,
	function (txt) {
		return A2(
			$author$project$String$Ext$chopStart,
			'dnslink=/ipfs/',
			A2(
				$author$project$String$Ext$chopStart,
				'\"',
				A2($author$project$String$Ext$chopEnd, '\"', txt)));
	},
	A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['Answer', '0', 'data']),
		$elm$json$Json$Decode$string));
var $author$project$Sources$Services$Ipfs$Parser$dnsResultDecoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['Path']),
			$elm$json$Json$Decode$string),
			$author$project$Sources$Services$Ipfs$Parser$cloudflareDnsResultDecoder
		]));
var $author$project$Sources$Services$Ipfs$Parser$parseDnsLookup = F4(
	function (response, _v0, srcData, _v1) {
		var _v2 = A2($elm$json$Json$Decode$decodeString, $author$project$Sources$Services$Ipfs$Parser$dnsResultDecoder, response);
		if (_v2.$ === 'Ok') {
			var path = _v2.a;
			return function (s) {
				return {marker: $author$project$Sources$Processing$TheEnd, sourceData: s};
			}(
				A3(
					$elm$core$Dict$insert,
					'directoryHashFromDnsLink',
					A2($author$project$String$Ext$chopStart, '/ipfs/', path),
					srcData));
		} else {
			return {marker: $author$project$Sources$Processing$TheEnd, sourceData: srcData};
		}
	});
var $author$project$Sources$Services$Ipfs$parsePreparationResponse = $author$project$Sources$Services$Ipfs$Parser$parseDnsLookup;
var $author$project$Sources$Services$Btfs$parsePreparationResponse = $author$project$Sources$Services$Ipfs$parsePreparationResponse;
var $author$project$Sources$Services$Dropbox$parsePreparationResponse = $author$project$Sources$Services$Common$noPrep;
var $author$project$Sources$Services$Google$Parser$parsePreparationResponse = F4(
	function (response, currentTimePosix, srcData, _v0) {
		var newAccessToken = A2(
			$elm$core$Result$withDefault,
			'',
			A2(
				$elm$json$Json$Decode$decodeString,
				A2($elm$json$Json$Decode$field, 'access_token', $elm$json$Json$Decode$string),
				response));
		var maybeRefreshToken = $elm_community$maybe_extra$Maybe$Extra$join(
			$elm$core$Result$toMaybe(
				A2(
					$elm$json$Json$Decode$decodeString,
					$elm$json$Json$Decode$maybe(
						A2($elm$json$Json$Decode$field, 'refresh_token', $elm$json$Json$Decode$string)),
					response)));
		var refreshTokenUpdater = function (dict) {
			if (maybeRefreshToken.$ === 'Just') {
				var refreshToken = maybeRefreshToken.a;
				return A3($elm$core$Dict$insert, 'refreshToken', refreshToken, dict);
			} else {
				return dict;
			}
		};
		var currentTime = $elm$time$Time$posixToMillis(currentTimePosix);
		var expiresAt = function (s) {
			return currentTime + (s * 1000);
		}(
			A2(
				$elm$core$Result$withDefault,
				2500,
				A2(
					$elm$json$Json$Decode$decodeString,
					A2($elm$json$Json$Decode$field, 'expires_in', $elm$json$Json$Decode$int),
					response)));
		return function (s) {
			return {marker: $author$project$Sources$Processing$TheEnd, sourceData: s};
		}(
			A2(
				$elm$core$Dict$remove,
				'authCode',
				refreshTokenUpdater(
					A3(
						$elm$core$Dict$insert,
						'expiresAt',
						$elm$core$String$fromInt(expiresAt),
						A3($elm$core$Dict$insert, 'accessToken', newAccessToken, srcData)))));
	});
var $author$project$Sources$Services$Google$parsePreparationResponse = $author$project$Sources$Services$Google$Parser$parsePreparationResponse;
var $author$project$Sources$Services$WebDav$parsePreparationResponse = $author$project$Sources$Services$Common$noPrep;
var $author$project$Sources$Services$parsePreparationResponse = function (service) {
	switch (service.$) {
		case 'AmazonS3':
			return $author$project$Sources$Services$AmazonS3$parsePreparationResponse;
		case 'AzureBlob':
			return $author$project$Sources$Services$AzureBlob$parsePreparationResponse;
		case 'AzureFile':
			return $author$project$Sources$Services$AzureFile$parsePreparationResponse;
		case 'Btfs':
			return $author$project$Sources$Services$Btfs$parsePreparationResponse;
		case 'Dropbox':
			return $author$project$Sources$Services$Dropbox$parsePreparationResponse;
		case 'Google':
			return $author$project$Sources$Services$Google$parsePreparationResponse;
		case 'Ipfs':
			return $author$project$Sources$Services$Ipfs$parsePreparationResponse;
		default:
			return $author$project$Sources$Services$WebDav$parsePreparationResponse;
	}
};
var $author$project$Brain$Sources$Processing$Steps$handlePreparationResponse = F3(
	function (response, currentTime, context) {
		var source = context.source;
		var answer = A5($author$project$Sources$Services$parsePreparationResponse, context.source.service, response, currentTime, context.source.data, context.preparationMarker);
		return _Utils_update(
			context,
			{
				preparationMarker: answer.marker,
				source: _Utils_update(
					source,
					{data: answer.sourceData})
			});
	});
var $author$project$Brain$Sources$Processing$Steps$intoPreparationCommands = F2(
	function (currentTime, context) {
		var _v0 = context.preparationMarker;
		switch (_v0.$) {
			case 'TheBeginning':
				return $elm$core$Platform$Cmd$none;
			case 'InProgress':
				return A2($author$project$Brain$Sources$Processing$Steps$prepare, context, currentTime);
			default:
				var updatedSource = context.source;
				return $elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[
							A2($author$project$Brain$Sources$Processing$Steps$makeTree, context, currentTime),
							$author$project$Brain$Ports$toUI(
							A2(
								$author$project$Alien$broadcast,
								$author$project$Alien$UpdateSourceData,
								$author$project$Sources$Encoding$encode(updatedSource)))
						]));
		}
	});
var $author$project$Brain$Sources$Processing$Steps$takePrepareStep = F3(
	function (context, response, currentTime) {
		return A2(
			$author$project$Brain$Sources$Processing$Steps$intoPreparationCommands,
			currentTime,
			A3($author$project$Brain$Sources$Processing$Steps$handlePreparationResponse, response, currentTime, context));
	});
var $author$project$Brain$Sources$Processing$State$prepareStep = F3(
	function (context, result, model) {
		if (result.$ === 'Ok') {
			var response = result.a;
			return A2(
				$Fresheyeball$elm_return$Return$return,
				model,
				A3($author$project$Brain$Sources$Processing$Steps$takePrepareStep, context, response, model.currentTime));
		} else {
			var err = result.a;
			return A2(
				$Fresheyeball$elm_return$Return$andThen,
				A2($author$project$Brain$Sources$Processing$Common$reportHttpError, context.source, err),
				$author$project$Brain$Sources$Processing$State$nextInLine(model));
		}
	});
var $author$project$Sources$Processing$Arguments = F2(
	function (origin, sources) {
		return {origin: origin, sources: sources};
	});
var $author$project$Sources$Processing$Encoding$argumentsDecoder = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Sources$Processing$Arguments,
	A2($elm$json$Json$Decode$field, 'origin', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'sources',
		$elm$json$Json$Decode$list($author$project$Sources$Encoding$decoder)));
var $author$project$Brain$Sources$Processing$Common$isProcessing = function (status) {
	if (status.$ === 'Processing') {
		return true;
	} else {
		return false;
	}
};
var $elm_community$list_extra$List$Extra$uncons = function (list) {
	if (!list.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var first = list.a;
		var rest = list.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(first, rest));
	}
};
var $author$project$Brain$Sources$Processing$State$process_ = F2(
	function (_v0, model) {
		var origin = _v0.origin;
		var sources = _v0.sources;
		var tracks = model.hypaethralUserData.tracks;
		var filter = function (s) {
			return A2(
				$elm$core$List$filter,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.sourceId;
					},
					$elm$core$Basics$eq(s.id)),
				tracks);
		};
		var all = A2(
			$elm$core$List$map,
			function (s) {
				return _Utils_Tuple2(
					s,
					filter(s));
			},
			A2(
				$elm$core$List$sortBy,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.data;
					},
					A2($author$project$Dict$Ext$fetch, 'name', '')),
				sources));
		var _v1 = _Utils_Tuple2(
			$author$project$Brain$Sources$Processing$Common$isProcessing(model.processingStatus) || $elm$core$List$isEmpty(sources),
			$elm_community$list_extra$List$Extra$uncons(all));
		if ((!_v1.a) && (_v1.b.$ === 'Just')) {
			var _v2 = _v1.b.a;
			var _v3 = _v2.a;
			var s = _v3.a;
			var t = _v3.b;
			var future = _v2.b;
			return A2(
				$Fresheyeball$elm_return$Return$return,
				_Utils_update(
					model,
					{
						origin: origin,
						processingStatus: A2(
							$author$project$Sources$Processing$Processing,
							_Utils_Tuple2(s, t),
							future)
					}),
				A3($author$project$Brain$Sources$Processing$Steps$takeFirstStep, origin, model.currentTime, s));
		} else {
			return $Fresheyeball$elm_return$Return$singleton(model);
		}
	});
var $author$project$Brain$Sources$Processing$State$process = function (json) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $author$project$Sources$Processing$Encoding$argumentsDecoder, json);
	if (_v0.$ === 'Ok') {
		var _arguments = _v0.a;
		return $author$project$Brain$Sources$Processing$State$process_(_arguments);
	} else {
		var err = _v0.a;
		return A2(
			$author$project$Brain$Common$State$reportUI,
			$author$project$Alien$ProcessSources,
			$elm$json$Json$Decode$errorToString(err));
	}
};
var $author$project$Brain$Sources$Processing$State$stopProcessing = function (model) {
	return $Fresheyeball$elm_return$Return$singleton(
		_Utils_update(
			model,
			{processingStatus: $author$project$Sources$Processing$NotProcessing}));
};
var $author$project$Brain$Tracks$State$add = F2(
	function (list, model) {
		if (!list.b) {
			return $Fresheyeball$elm_return$Return$singleton(model);
		} else {
			var tracks = list;
			return A2(
				$Fresheyeball$elm_return$Return$andThen,
				A2(
					$author$project$Brain$Common$State$giveUI,
					$author$project$Alien$AddTracks,
					A2($elm$json$Json$Encode$list, $author$project$Tracks$Encoding$encodeTrack, tracks)),
				A2(
					$author$project$Brain$User$State$saveTracksAndUpdateSearchIndex,
					A2($elm$core$List$append, model.hypaethralUserData.tracks, tracks),
					model));
		}
	});
var $author$project$Brain$Ports$requestTags = _Platform_outgoingPort(
	'requestTags',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'amount',
					$elm$json$Json$Encode$int($.amount)),
					_Utils_Tuple2(
					'nextFilePaths',
					$elm$json$Json$Encode$list($elm$json$Json$Encode$string)($.nextFilePaths)),
					_Utils_Tuple2(
					'receivedFilePaths',
					$elm$json$Json$Encode$list($elm$json$Json$Encode$string)($.receivedFilePaths)),
					_Utils_Tuple2(
					'receivedTags',
					$elm$json$Json$Encode$list(
						function ($) {
							return A3(
								$elm$core$Maybe$destruct,
								$elm$json$Json$Encode$null,
								function ($) {
									return $elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'album',
												$elm$json$Json$Encode$string($.album)),
												_Utils_Tuple2(
												'artist',
												$elm$json$Json$Encode$string($.artist)),
												_Utils_Tuple2(
												'disc',
												$elm$json$Json$Encode$int($.disc)),
												_Utils_Tuple2(
												'genre',
												function ($) {
													return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$string, $);
												}($.genre)),
												_Utils_Tuple2(
												'nr',
												$elm$json$Json$Encode$int($.nr)),
												_Utils_Tuple2(
												'picture',
												function ($) {
													return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$string, $);
												}($.picture)),
												_Utils_Tuple2(
												'title',
												$elm$json$Json$Encode$string($.title)),
												_Utils_Tuple2(
												'year',
												function ($) {
													return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$int, $);
												}($.year))
											]));
								},
								$);
						})($.receivedTags)),
					_Utils_Tuple2(
					'sourceId',
					$elm$json$Json$Encode$string($.sourceId)),
					_Utils_Tuple2(
					'urlsForTags',
					$elm$json$Json$Encode$list(
						function ($) {
							return $elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'getUrl',
										$elm$json$Json$Encode$string($.getUrl)),
										_Utils_Tuple2(
										'headUrl',
										$elm$json$Json$Encode$string($.headUrl))
									]));
						})($.urlsForTags))
				]));
	});
var $author$project$Brain$Sources$Processing$Steps$getTags = $author$project$Brain$Ports$requestTags;
var $author$project$Brain$Sources$Processing$Steps$makeTrackUrls = F3(
	function (currentTime, source, filePaths) {
		var maker = $author$project$Sources$Services$makeTrackUrl(source.service);
		var mapFn = function (path) {
			return {
				getUrl: A5(maker, currentTime, source.id, source.data, $author$project$Sources$Processing$Get, path),
				headUrl: A5(maker, currentTime, source.id, source.data, $author$project$Sources$Processing$Head, path)
			};
		};
		return A2($elm$core$List$map, mapFn, filePaths);
	});
var $author$project$Brain$Sources$Processing$Steps$tagsBatchSize = 20;
var $author$project$Brain$Sources$Processing$Steps$takeTagsStep = F3(
	function (currentTime, tagsCtx, source) {
		var _v0 = A2($elm_community$list_extra$List$Extra$splitAt, $author$project$Brain$Sources$Processing$Steps$tagsBatchSize, tagsCtx.nextFilePaths);
		var filesToProcess = _v0.a;
		var nextFiles = _v0.b;
		var newTagsCtx = {
			amount: tagsCtx.amount,
			nextFilePaths: nextFiles,
			receivedFilePaths: filesToProcess,
			receivedTags: _List_Nil,
			sourceId: source.id,
			urlsForTags: A3($author$project$Brain$Sources$Processing$Steps$makeTrackUrls, currentTime, source, filesToProcess)
		};
		return $elm$core$List$isEmpty(filesToProcess) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
			$author$project$Brain$Sources$Processing$Steps$getTags(newTagsCtx));
	});
var $author$project$Tracks$emptyTags = {album: 'Empty', artist: 'Empty', disc: 1, genre: $elm$core$Maybe$Nothing, nr: 0, picture: $elm$core$Maybe$Nothing, title: 'Empty', year: $elm$core$Maybe$Nothing};
var $author$project$Tracks$makeTrack = F2(
	function (sourceId, _v0) {
		var path = _v0.a;
		var tags = _v0.b;
		return {
			id: A2(
				$author$project$String$Ext$chopEnd,
				'=',
				$truqu$elm_base64$Base64$encode(sourceId + ('//' + path))),
			insertedAt: $author$project$Time$Ext$default,
			path: path,
			sourceId: sourceId,
			tags: tags
		};
	});
var $author$project$Brain$Sources$Processing$Common$tracksFromTagsContext = function (context) {
	return A2(
		$elm$core$List$map,
		$author$project$Tracks$makeTrack(context.sourceId),
		A2(
			$elm$core$List$map,
			$elm$core$Tuple$mapSecond(
				$elm$core$Maybe$withDefault($author$project$Tracks$emptyTags)),
			A2(
				$elm$core$List$filter,
				A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $elm_community$maybe_extra$Maybe$Extra$isJust),
				A2($elm_community$list_extra$List$Extra$zip, context.receivedFilePaths, context.receivedTags))));
};
var $author$project$Brain$Sources$Processing$State$tagsStep = F2(
	function (tagsContext, model) {
		var tracksToAdd = A2(
			$elm$core$List$map,
			function (track) {
				return _Utils_update(
					track,
					{insertedAt: model.currentTime});
			},
			$author$project$Brain$Sources$Processing$Common$tracksFromTagsContext(tagsContext));
		var maybeCmd = function () {
			var _v0 = model.processingStatus;
			if (_v0.$ === 'Processing') {
				var _v1 = _v0.a;
				var source = _v1.a;
				return A3($author$project$Brain$Sources$Processing$Steps$takeTagsStep, model.currentTime, tagsContext, source);
			} else {
				return $elm$core$Maybe$Just($elm$core$Platform$Cmd$none);
			}
		}();
		var amountLeft = $elm$core$List$length(tagsContext.nextFilePaths);
		var progressPercentage = 0.05 + (0.95 * (1 - (amountLeft / tagsContext.amount)));
		var progress = _List_fromArray(
			[
				_Utils_Tuple2(
				'progress',
				$elm$json$Json$Encode$float(progressPercentage)),
				_Utils_Tuple2(
				'sourceId',
				$elm$json$Json$Encode$string(tagsContext.sourceId))
			]);
		return A2(
			$Fresheyeball$elm_return$Return$andThen,
			A2(
				$author$project$Brain$Common$State$giveUI,
				$author$project$Alien$ReportProcessingProgress,
				$elm$json$Json$Encode$object(progress)),
			A2(
				$Fresheyeball$elm_return$Return$andThen,
				$author$project$Brain$Tracks$State$add(tracksToAdd),
				A2(
					$elm$core$Maybe$withDefault,
					$author$project$Brain$Sources$Processing$State$nextInLine(model),
					A2(
						$elm$core$Maybe$map,
						$Fresheyeball$elm_return$Return$return(model),
						maybeCmd))));
	});
var $ymtszw$elm_xml_decode$Xml$Decode$listImpl = F3(
	function (_v0, acc, _v1) {
		listImpl:
		while (true) {
			var decoder = _v0.a;
			var nodes = _v1.a;
			var ancestor = _v1.b;
			if (!nodes.b) {
				return $elm$core$Result$Ok(
					$elm$core$List$reverse(acc));
			} else {
				var n = nodes.a;
				var ns = nodes.b;
				var _v3 = decoder(n);
				if (_v3.$ === 'Ok') {
					var item = _v3.a;
					var $temp$_v0 = $ymtszw$elm_xml_decode$Xml$Decode$Decoder(decoder),
						$temp$acc = A2($elm$core$List$cons, item, acc),
						$temp$_v1 = _Utils_Tuple2(ns, ancestor);
					_v0 = $temp$_v0;
					acc = $temp$acc;
					_v1 = $temp$_v1;
					continue listImpl;
				} else {
					var e = _v3.a;
					return $elm$core$Result$Err(e);
				}
			}
		}
	});
var $ymtszw$elm_xml_decode$Xml$Decode$list = function (decoder) {
	return $ymtszw$elm_xml_decode$Xml$Decode$ListDecoder(
		A2($ymtszw$elm_xml_decode$Xml$Decode$listImpl, decoder, _List_Nil));
};
var $author$project$Sources$Services$AmazonS3$Parser$filePathsDecoder = A2(
	$ymtszw$elm_xml_decode$Xml$Decode$path,
	_List_fromArray(
		['Contents']),
	$ymtszw$elm_xml_decode$Xml$Decode$list(
		A2(
			$ymtszw$elm_xml_decode$Xml$Decode$path,
			_List_fromArray(
				['Key']),
			$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string))));
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
var $ymtszw$elm_xml_decode$Xml$Decode$map2Impl = F4(
	function (valueGen, _v0, _v1, aNode) {
		var decoderA = _v0.a;
		var decoderB = _v1.a;
		return A3(
			$elm$core$Result$map2,
			valueGen,
			decoderA(aNode),
			decoderB(aNode));
	});
var $ymtszw$elm_xml_decode$Xml$Decode$map2 = F3(
	function (valueGen, decoderA, decoderB) {
		return $ymtszw$elm_xml_decode$Xml$Decode$Decoder(
			A3($ymtszw$elm_xml_decode$Xml$Decode$map2Impl, valueGen, decoderA, decoderB));
	});
var $author$project$Sources$Processing$InProgress = function (a) {
	return {$: 'InProgress', a: a};
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
var $ymtszw$elm_xml_decode$Xml$Decode$mapImpl = F3(
	function (valueGen, _v0, aNode) {
		var decoder = _v0.a;
		return A2(
			$elm$core$Result$map,
			valueGen,
			decoder(aNode));
	});
var $ymtszw$elm_xml_decode$Xml$Decode$map = F2(
	function (valueGen, decoder) {
		return $ymtszw$elm_xml_decode$Xml$Decode$Decoder(
			A2($ymtszw$elm_xml_decode$Xml$Decode$mapImpl, valueGen, decoder));
	});
var $ymtszw$elm_xml_decode$Xml$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $ymtszw$elm_xml_decode$Xml$Decode$oneOfImpl = F3(
	function (decoders, errors, aNode) {
		oneOfImpl:
		while (true) {
			if (!decoders.b) {
				return $elm$core$Result$Err(
					$ymtszw$elm_xml_decode$Xml$Decode$OneOf(
						$elm$core$List$reverse(errors)));
			} else {
				var d = decoders.a.a;
				var ds = decoders.b;
				var _v1 = d(aNode);
				if (_v1.$ === 'Ok') {
					var val = _v1.a;
					return $elm$core$Result$Ok(val);
				} else {
					var e = _v1.a;
					var $temp$decoders = ds,
						$temp$errors = A2($elm$core$List$cons, e, errors),
						$temp$aNode = aNode;
					decoders = $temp$decoders;
					errors = $temp$errors;
					aNode = $temp$aNode;
					continue oneOfImpl;
				}
			}
		}
	});
var $ymtszw$elm_xml_decode$Xml$Decode$oneOf = function (decoders) {
	return $ymtszw$elm_xml_decode$Xml$Decode$Decoder(
		A2($ymtszw$elm_xml_decode$Xml$Decode$oneOfImpl, decoders, _List_Nil));
};
var $ymtszw$elm_xml_decode$Xml$Decode$succeed = function (a) {
	return $ymtszw$elm_xml_decode$Xml$Decode$Decoder(
		function (_v0) {
			return $elm$core$Result$Ok(a);
		});
};
var $ymtszw$elm_xml_decode$Xml$Decode$maybe = function (decoder) {
	return $ymtszw$elm_xml_decode$Xml$Decode$oneOf(
		_List_fromArray(
			[
				A2($ymtszw$elm_xml_decode$Xml$Decode$map, $elm$core$Maybe$Just, decoder),
				$ymtszw$elm_xml_decode$Xml$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $author$project$Sources$Services$AmazonS3$Parser$markerDecoder = A3(
	$ymtszw$elm_xml_decode$Xml$Decode$map2,
	F2(
		function (a, b) {
			return A2(
				$elm$core$Maybe$withDefault,
				$author$project$Sources$Processing$TheEnd,
				A3(
					$elm$core$Maybe$map2,
					F2(
						function (isTruncated, token) {
							return A3(
								$author$project$Conditional$ifThenElse,
								isTruncated === 'true',
								$author$project$Sources$Processing$InProgress(token),
								$author$project$Sources$Processing$TheEnd);
						}),
					a,
					b));
		}),
	$ymtszw$elm_xml_decode$Xml$Decode$maybe(
		A2(
			$ymtszw$elm_xml_decode$Xml$Decode$path,
			_List_fromArray(
				['IsTruncated']),
			$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string))),
	$ymtszw$elm_xml_decode$Xml$Decode$maybe(
		A2(
			$ymtszw$elm_xml_decode$Xml$Decode$path,
			_List_fromArray(
				['NextContinuationToken']),
			$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string))));
var $author$project$Sources$Services$AmazonS3$Parser$parseTreeResponse = F2(
	function (response, _v0) {
		return A2(
			$elm$core$Result$withDefault,
			{filePaths: _List_Nil, marker: $author$project$Sources$Processing$TheEnd},
			A2(
				$ymtszw$elm_xml_decode$Xml$Decode$decodeString,
				A3(
					$ymtszw$elm_xml_decode$Xml$Decode$map2,
					F2(
						function (f, m) {
							return {filePaths: f, marker: m};
						}),
					$author$project$Sources$Services$AmazonS3$Parser$filePathsDecoder,
					$author$project$Sources$Services$AmazonS3$Parser$markerDecoder),
				response));
	});
var $author$project$Sources$Services$AmazonS3$parseTreeResponse = $author$project$Sources$Services$AmazonS3$Parser$parseTreeResponse;
var $author$project$Sources$Services$Azure$BlobParser$filePathsDecoder = A2(
	$ymtszw$elm_xml_decode$Xml$Decode$path,
	_List_fromArray(
		['Blobs', 'Blob']),
	$ymtszw$elm_xml_decode$Xml$Decode$list(
		A2(
			$ymtszw$elm_xml_decode$Xml$Decode$path,
			_List_fromArray(
				['Name']),
			$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string))));
var $author$project$Sources$Services$Azure$BlobParser$markerDecoder = A2(
	$ymtszw$elm_xml_decode$Xml$Decode$map,
	function (maybeNextMarker) {
		if (maybeNextMarker.$ === 'Just') {
			if (maybeNextMarker.a === '') {
				return $author$project$Sources$Processing$TheEnd;
			} else {
				var nextMarker = maybeNextMarker.a;
				return $author$project$Sources$Processing$InProgress(nextMarker);
			}
		} else {
			return $author$project$Sources$Processing$TheEnd;
		}
	},
	$ymtszw$elm_xml_decode$Xml$Decode$maybe(
		A2(
			$ymtszw$elm_xml_decode$Xml$Decode$path,
			_List_fromArray(
				['NextMarker']),
			$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string))));
var $author$project$Sources$Services$Azure$BlobParser$parseTreeResponse = F2(
	function (response, _v0) {
		return A2(
			$elm$core$Result$withDefault,
			{filePaths: _List_Nil, marker: $author$project$Sources$Processing$TheEnd},
			A2(
				$ymtszw$elm_xml_decode$Xml$Decode$decodeString,
				A3(
					$ymtszw$elm_xml_decode$Xml$Decode$map2,
					F2(
						function (f, m) {
							return {filePaths: f, marker: m};
						}),
					$author$project$Sources$Services$Azure$BlobParser$filePathsDecoder,
					$author$project$Sources$Services$Azure$BlobParser$markerDecoder),
				response));
	});
var $author$project$Sources$Services$AzureBlob$parseTreeResponse = $author$project$Sources$Services$Azure$BlobParser$parseTreeResponse;
var $ymtszw$elm_xml_decode$Xml$Decode$andThenImpl = F3(
	function (decoderBGen, _v0, aNode) {
		var decoderA = _v0.a;
		var _v1 = decoderA(aNode);
		if (_v1.$ === 'Ok') {
			var valA = _v1.a;
			var _v2 = decoderBGen(valA);
			var decoderB = _v2.a;
			return decoderB(aNode);
		} else {
			var e = _v1.a;
			return $elm$core$Result$Err(e);
		}
	});
var $ymtszw$elm_xml_decode$Xml$Decode$andThen = F2(
	function (decoderBGen, decoderA) {
		return $ymtszw$elm_xml_decode$Xml$Decode$Decoder(
			A2($ymtszw$elm_xml_decode$Xml$Decode$andThenImpl, decoderBGen, decoderA));
	});
var $author$project$Sources$Services$Azure$FileMarker$itemToString = function (item) {
	if (item.$ === 'Directory') {
		var d = item.a;
		return 'dir' + ($author$project$Sources$Services$Azure$FileMarker$prefixer + d);
	} else {
		var directory = item.a.directory;
		var marker = item.a.marker;
		return 'par' + ($author$project$Sources$Services$Azure$FileMarker$prefixer + (directory + ($author$project$Sources$Services$Azure$FileMarker$paramSeparator + marker)));
	}
};
var $author$project$Sources$Services$Azure$FileMarker$concat = F2(
	function (list, marker) {
		var listStringified = A2($elm$core$List$map, $author$project$Sources$Services$Azure$FileMarker$itemToString, list);
		var result = function () {
			if (marker.$ === 'InProgress') {
				var m = marker.a;
				return A2(
					$elm$core$String$join,
					$author$project$Sources$Services$Azure$FileMarker$separator,
					$elm$core$List$concat(
						_List_fromArray(
							[
								listStringified,
								A2($elm$core$String$split, $author$project$Sources$Services$Azure$FileMarker$separator, m)
							])));
			} else {
				return A2($elm$core$String$join, $author$project$Sources$Services$Azure$FileMarker$separator, listStringified);
			}
		}();
		if (result === '') {
			return $author$project$Sources$Processing$TheEnd;
		} else {
			var r = result;
			return $author$project$Sources$Processing$InProgress(r);
		}
	});
var $author$project$Sources$Services$Azure$FileParser$directoryPathsDecoder = A2(
	$ymtszw$elm_xml_decode$Xml$Decode$path,
	_List_fromArray(
		['Entries', 'Directory']),
	$ymtszw$elm_xml_decode$Xml$Decode$list(
		A2(
			$ymtszw$elm_xml_decode$Xml$Decode$path,
			_List_fromArray(
				['Name']),
			$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string))));
var $author$project$Sources$Services$Azure$FileParser$filePathsDecoder = A2(
	$ymtszw$elm_xml_decode$Xml$Decode$path,
	_List_fromArray(
		['Entries', 'File']),
	$ymtszw$elm_xml_decode$Xml$Decode$list(
		A2(
			$ymtszw$elm_xml_decode$Xml$Decode$path,
			_List_fromArray(
				['Name']),
			$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string))));
var $author$project$Sources$Services$Azure$FileParser$markerDecoder = F2(
	function (usedDirectory, markerWithDirectories) {
		return A2(
			$ymtszw$elm_xml_decode$Xml$Decode$map,
			function (maybeNextMarker) {
				if (maybeNextMarker.$ === 'Just') {
					if (maybeNextMarker.a === '') {
						return markerWithDirectories;
					} else {
						var marker = maybeNextMarker.a;
						return A2(
							$author$project$Sources$Services$Azure$FileMarker$concat,
							_List_fromArray(
								[
									$author$project$Sources$Services$Azure$FileMarker$Param(
									{directory: usedDirectory, marker: marker})
								]),
							markerWithDirectories);
					}
				} else {
					return markerWithDirectories;
				}
			},
			$ymtszw$elm_xml_decode$Xml$Decode$maybe(
				A2(
					$ymtszw$elm_xml_decode$Xml$Decode$path,
					_List_fromArray(
						['NextMarker']),
					$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string))));
	});
var $author$project$Sources$Services$Azure$FileMarker$removeOne = function (marker) {
	if (marker.$ === 'InProgress') {
		var m = marker.a;
		var tmp = A2(
			$elm$core$String$join,
			$author$project$Sources$Services$Azure$FileMarker$separator,
			A2(
				$elm$core$List$drop,
				1,
				A2($elm$core$String$split, $author$project$Sources$Services$Azure$FileMarker$separator, m)));
		if (tmp === '') {
			return $author$project$Sources$Processing$TheEnd;
		} else {
			var x = tmp;
			return $author$project$Sources$Processing$InProgress(x);
		}
	} else {
		return $author$project$Sources$Processing$TheEnd;
	}
};
var $ymtszw$elm_xml_decode$Xml$Decode$fetchAttributeValue = F2(
	function (name_, attrs) {
		fetchAttributeValue:
		while (true) {
			if (!attrs.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var name = attrs.a.name;
				var value = attrs.a.value;
				var tl = attrs.b;
				if (_Utils_eq(name, name_)) {
					return $elm$core$Maybe$Just(value);
				} else {
					var $temp$name_ = name_,
						$temp$attrs = tl;
					name_ = $temp$name_;
					attrs = $temp$attrs;
					continue fetchAttributeValue;
				}
			}
		}
	});
var $ymtszw$elm_xml_decode$Xml$Decode$cdataAttrImpl = F3(
	function (name_, generator, aNode) {
		var notFound = A2($ymtszw$elm_xml_decode$Xml$Decode$Failure, 'Attribute \'' + (name_ + '\' not found.'), aNode);
		var gen = A2(
			$elm$core$Basics$composeR,
			generator,
			$elm$core$Result$mapError(
				function (message) {
					return A2($ymtszw$elm_xml_decode$Xml$Decode$Failure, message, aNode);
				}));
		if (aNode.$ === 'Text') {
			return $elm$core$Result$Err(notFound);
		} else {
			var attrs = aNode.b;
			return A2(
				$elm$core$Result$andThen,
				gen,
				A2(
					$elm$core$Result$fromMaybe,
					notFound,
					A2($ymtszw$elm_xml_decode$Xml$Decode$fetchAttributeValue, name_, attrs)));
		}
	});
var $ymtszw$elm_xml_decode$Xml$Decode$cdataAttr = F2(
	function (name_, generator) {
		return $ymtszw$elm_xml_decode$Xml$Decode$Decoder(
			A2($ymtszw$elm_xml_decode$Xml$Decode$cdataAttrImpl, name_, generator));
	});
var $ymtszw$elm_xml_decode$Xml$Decode$stringAttr = function (name_) {
	return A2($ymtszw$elm_xml_decode$Xml$Decode$cdataAttr, name_, $elm$core$Result$Ok);
};
var $author$project$Sources$Services$Azure$FileParser$usedDirectoryDecoder = $ymtszw$elm_xml_decode$Xml$Decode$stringAttr('DirectoryPath');
var $author$project$Sources$Services$Azure$FileParser$treeDecoder = function (previousMarker) {
	return A2(
		$ymtszw$elm_xml_decode$Xml$Decode$andThen,
		function (_v0) {
			var usedDirectory = _v0.a;
			var filePaths = _v0.b;
			var directoryPaths = _v0.c;
			return A2(
				$ymtszw$elm_xml_decode$Xml$Decode$map,
				function (marker) {
					return {filePaths: filePaths, marker: marker};
				},
				A2(
					$author$project$Sources$Services$Azure$FileParser$markerDecoder,
					usedDirectory,
					A2(
						$author$project$Sources$Services$Azure$FileMarker$concat,
						A2($elm$core$List$map, $author$project$Sources$Services$Azure$FileMarker$Directory, directoryPaths),
						$author$project$Sources$Services$Azure$FileMarker$removeOne(previousMarker))));
		},
		A2(
			$ymtszw$elm_xml_decode$Xml$Decode$andThen,
			function (usedDirectory) {
				return A3(
					$ymtszw$elm_xml_decode$Xml$Decode$map2,
					F2(
						function (a, b) {
							return _Utils_Tuple3(usedDirectory, a, b);
						}),
					A2(
						$ymtszw$elm_xml_decode$Xml$Decode$map,
						$elm$core$List$map(
							$elm$core$String$append(usedDirectory)),
						$author$project$Sources$Services$Azure$FileParser$filePathsDecoder),
					A2(
						$ymtszw$elm_xml_decode$Xml$Decode$map,
						$elm$core$List$map(
							$elm$core$String$append(usedDirectory)),
						$author$project$Sources$Services$Azure$FileParser$directoryPathsDecoder));
			},
			A2($ymtszw$elm_xml_decode$Xml$Decode$map, $author$project$Sources$Services$Common$cleanPath, $author$project$Sources$Services$Azure$FileParser$usedDirectoryDecoder)));
};
var $author$project$Sources$Services$Azure$FileParser$parseTreeResponse = F2(
	function (response, previousMarker) {
		return A2(
			$elm$core$Result$withDefault,
			{filePaths: _List_Nil, marker: $author$project$Sources$Processing$TheEnd},
			A2(
				$ymtszw$elm_xml_decode$Xml$Decode$decodeString,
				$author$project$Sources$Services$Azure$FileParser$treeDecoder(previousMarker),
				response));
	});
var $author$project$Sources$Services$AzureFile$parseTreeResponse = $author$project$Sources$Services$Azure$FileParser$parseTreeResponse;
var $author$project$Sources$Services$Ipfs$Marker$concat = F2(
	function (list, marker) {
		var result = function () {
			if (marker.$ === 'InProgress') {
				var m = marker.a;
				return A2(
					$elm$core$String$join,
					$author$project$Sources$Services$Ipfs$Marker$separator,
					$elm$core$List$concat(
						_List_fromArray(
							[
								list,
								A2($elm$core$String$split, $author$project$Sources$Services$Ipfs$Marker$separator, m)
							])));
			} else {
				return A2($elm$core$String$join, $author$project$Sources$Services$Ipfs$Marker$separator, list);
			}
		}();
		if (result === '') {
			return $author$project$Sources$Processing$TheEnd;
		} else {
			var r = result;
			return $author$project$Sources$Processing$InProgress(r);
		}
	});
var $elm$regex$Regex$contains = _Regex_contains;
var $author$project$Sources$Pick$musicFileRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: true, multiline: false},
		'\\.(mp3|mp4|m4a|flac|ogg|wav|webm|opus)$'));
var $author$project$Sources$Pick$isMusicFile = $elm$regex$Regex$contains($author$project$Sources$Pick$musicFileRegex);
var $elm$json$Json$Decode$index = _Json_decodeIndex;
var $author$project$Sources$Services$Ipfs$Parser$prefixDecoder = A2(
	$elm$json$Json$Decode$field,
	'Objects',
	A2(
		$elm$json$Json$Decode$index,
		0,
		A2($elm$json$Json$Decode$field, 'Hash', $elm$json$Json$Decode$string)));
var $author$project$Sources$Services$Ipfs$Marker$removeOne = function (marker) {
	if (marker.$ === 'InProgress') {
		var m = marker.a;
		var tmp = A2(
			$elm$core$String$join,
			$author$project$Sources$Services$Ipfs$Marker$separator,
			A2(
				$elm$core$List$drop,
				1,
				A2($elm$core$String$split, $author$project$Sources$Services$Ipfs$Marker$separator, m)));
		if (tmp === '') {
			return $author$project$Sources$Processing$TheEnd;
		} else {
			var x = tmp;
			return $author$project$Sources$Processing$InProgress(x);
		}
	} else {
		return $author$project$Sources$Processing$TheEnd;
	}
};
var $author$project$Sources$Services$Ipfs$Parser$Link = F3(
	function (hash, name, typ) {
		return {hash: hash, name: name, typ: typ};
	});
var $author$project$Sources$Services$Ipfs$Parser$linkDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$Sources$Services$Ipfs$Parser$Link,
	A2($elm$json$Json$Decode$field, 'Hash', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'Name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'Type', $elm$json$Json$Decode$int));
var $author$project$Sources$Services$Ipfs$Parser$treeDecoder = A2(
	$elm$json$Json$Decode$field,
	'Objects',
	A2(
		$elm$json$Json$Decode$index,
		0,
		A2(
			$elm$json$Json$Decode$field,
			'Links',
			$elm$json$Json$Decode$list($author$project$Sources$Services$Ipfs$Parser$linkDecoder))));
var $author$project$Sources$Services$Ipfs$Parser$parseTreeResponse = F2(
	function (response, previousMarker) {
		var prefix = function () {
			if (previousMarker.$ === 'TheBeginning') {
				return '';
			} else {
				return A2(
					$elm$core$Result$withDefault,
					'',
					A2(
						$elm$core$Result$map,
						function (s) {
							return $elm$core$String$isEmpty(s) ? '' : (s + '/');
						},
						A2(
							$elm$core$Result$map,
							A2(
								$elm$core$Basics$composeR,
								$author$project$String$Ext$chopStart('/ipfs/'),
								A2(
									$elm$core$Basics$composeR,
									$elm$core$String$split('/'),
									A2(
										$elm$core$Basics$composeR,
										$elm$core$List$drop(1),
										$elm$core$String$join('/')))),
							A2($elm$json$Json$Decode$decodeString, $author$project$Sources$Services$Ipfs$Parser$prefixDecoder, response))));
			}
		}();
		var links = function () {
			var _v0 = A2($elm$json$Json$Decode$decodeString, $author$project$Sources$Services$Ipfs$Parser$treeDecoder, response);
			if (_v0.$ === 'Ok') {
				var l = _v0.a;
				return l;
			} else {
				return _List_Nil;
			}
		}();
		var files = A2(
			$elm$core$List$map,
			function (l) {
				return _Utils_ap(prefix, l.name);
			},
			A2(
				$elm$core$List$filter,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.name;
					},
					$author$project$Sources$Pick$isMusicFile),
				A2(
					$elm$core$List$filter,
					A2(
						$elm$core$Basics$composeR,
						function ($) {
							return $.typ;
						},
						$elm$core$Basics$eq(2)),
					links)));
		var dirs = A2(
			$elm$core$List$map,
			function (l) {
				return _Utils_ap(prefix, l.name);
			},
			A2(
				$elm$core$List$filter,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.typ;
					},
					$elm$core$Basics$eq(1)),
				links));
		return {
			filePaths: files,
			marker: A2(
				$author$project$Sources$Services$Ipfs$Marker$concat,
				dirs,
				$author$project$Sources$Services$Ipfs$Marker$removeOne(previousMarker))
		};
	});
var $author$project$Sources$Services$Ipfs$parseTreeResponse = $author$project$Sources$Services$Ipfs$Parser$parseTreeResponse;
var $author$project$Sources$Services$Btfs$parseTreeResponse = $author$project$Sources$Services$Ipfs$parseTreeResponse;
var $author$project$Sources$Services$Dropbox$Parser$parseTreeResponse = F2(
	function (response, _v0) {
		var paths = A2(
			$elm$json$Json$Decode$decodeString,
			A2(
				$elm$json$Json$Decode$field,
				'entries',
				$elm$json$Json$Decode$list(
					A2($elm$json$Json$Decode$field, 'path_display', $elm$json$Json$Decode$string))),
			response);
		var hasMore = A2(
			$elm$json$Json$Decode$decodeString,
			A2($elm$json$Json$Decode$field, 'has_more', $elm$json$Json$Decode$bool),
			response);
		var cursor = A2(
			$elm$json$Json$Decode$decodeString,
			A2($elm$json$Json$Decode$field, 'cursor', $elm$json$Json$Decode$string),
			response);
		return {
			filePaths: A2($elm$core$Result$withDefault, _List_Nil, paths),
			marker: A2($elm$core$Result$withDefault, false, hasMore) ? $author$project$Sources$Processing$InProgress(
				A2($elm$core$Result$withDefault, '', cursor)) : $author$project$Sources$Processing$TheEnd
		};
	});
var $author$project$Sources$Services$Dropbox$parseTreeResponse = $author$project$Sources$Services$Dropbox$Parser$parseTreeResponse;
var $author$project$String$Path$addSuffix = function (path) {
	if (path === '') {
		return '';
	} else {
		var p = path;
		return _Utils_ap(p, $author$project$String$Path$sep);
	}
};
var $author$project$Sources$Services$Google$Marker$itemToString = function (item) {
	if (item.$ === 'Directory') {
		var d = item.a;
		return 'dir' + ($author$project$Sources$Services$Google$Marker$prefixer + d);
	} else {
		var directory = item.a.directory;
		var token = item.a.token;
		return 'par' + ($author$project$Sources$Services$Google$Marker$prefixer + (directory + ($author$project$Sources$Services$Google$Marker$paramSeparator + token)));
	}
};
var $author$project$Sources$Services$Google$Marker$concat = F2(
	function (list, marker) {
		var listStringified = A2($elm$core$List$map, $author$project$Sources$Services$Google$Marker$itemToString, list);
		var result = function () {
			if (marker.$ === 'InProgress') {
				var m = marker.a;
				return A2(
					$elm$core$String$join,
					$author$project$Sources$Services$Google$Marker$separator,
					$elm$core$List$concat(
						_List_fromArray(
							[
								listStringified,
								A2($elm$core$String$split, $author$project$Sources$Services$Google$Marker$separator, m)
							])));
			} else {
				return A2($elm$core$String$join, $author$project$Sources$Services$Google$Marker$separator, listStringified);
			}
		}();
		if (result === '') {
			return $author$project$Sources$Processing$TheEnd;
		} else {
			var r = result;
			return $author$project$Sources$Processing$InProgress(r);
		}
	});
var $author$project$String$Path$dropRight = F2(
	function (_int, path) {
		return A2(
			$elm$core$String$join,
			$author$project$String$Path$sep,
			function (l) {
				return A2(
					$elm$core$List$take,
					$elm$core$List$length(l) - _int,
					l);
			}(
				A2($elm$core$String$split, $author$project$String$Path$sep, path)));
	});
var $author$project$Sources$Services$Google$Parser$Directory = function (a) {
	return {$: 'Directory', a: a};
};
var $author$project$Sources$Services$Google$Parser$File = function (a) {
	return {$: 'File', a: a};
};
var $author$project$Sources$Services$Google$Parser$itemDecoder = A5(
	$elm$json$Json$Decode$map4,
	F4(
		function (id, name, mime, _v0) {
			if (mime === 'application/vnd.google-apps.folder') {
				return $author$project$Sources$Services$Google$Parser$Directory(
					{id: id, name: name});
			} else {
				return $author$project$Sources$Services$Google$Parser$File(
					{id: id, name: name});
			}
		}),
	A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'mimeType', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$andThen,
		function (b) {
			return b ? $elm$json$Json$Decode$fail('Exclude deleted files') : $elm$json$Json$Decode$succeed(b);
		},
		A2($elm$json$Json$Decode$field, 'trashed', $elm$json$Json$Decode$bool)));
var $author$project$Sources$Services$Google$Parser$itemProperties = function (item) {
	if (item.$ === 'Directory') {
		var props = item.a;
		return props;
	} else {
		var props = item.a;
		return props;
	}
};
var $author$project$Sources$Services$Google$Marker$removeOne = function (marker) {
	if (marker.$ === 'InProgress') {
		var m = marker.a;
		var tmp = A2(
			$elm$core$String$join,
			$author$project$Sources$Services$Google$Marker$separator,
			A2(
				$elm$core$List$drop,
				1,
				A2($elm$core$String$split, $author$project$Sources$Services$Google$Marker$separator, m)));
		if (tmp === '') {
			return $author$project$Sources$Processing$TheEnd;
		} else {
			var x = tmp;
			return $author$project$Sources$Processing$InProgress(x);
		}
	} else {
		return $author$project$Sources$Processing$TheEnd;
	}
};
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $author$project$Sources$Services$Google$Parser$parseTreeResponse = F2(
	function (response, previousMarker) {
		var usedDirectory = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				$author$project$Sources$Services$Google$Marker$itemDirectory,
				$author$project$Sources$Services$Google$Marker$takeOne(previousMarker)));
		var usedPath = $author$project$String$Path$addSuffix(
			A2($author$project$String$Path$dropRight, 1, usedDirectory));
		var nextPageToken = $elm_community$maybe_extra$Maybe$Extra$join(
			$elm$core$Result$toMaybe(
				A2(
					$elm$json$Json$Decode$decodeString,
					$elm$json$Json$Decode$maybe(
						A2($elm$json$Json$Decode$field, 'nextPageToken', $elm$json$Json$Decode$string)),
					response)));
		var items = A2(
			$elm$core$Result$withDefault,
			_List_Nil,
			A2(
				$elm$json$Json$Decode$decodeString,
				A2(
					$elm$json$Json$Decode$field,
					'files',
					$author$project$Json$Decode$Ext$listIgnore($author$project$Sources$Services$Google$Parser$itemDecoder)),
				response));
		var _v0 = A2(
			$elm$core$List$partition,
			function (item) {
				if (item.$ === 'Directory') {
					return true;
				} else {
					return false;
				}
			},
			items);
		var directories = _v0.a;
		var files = _v0.b;
		return {
			filePaths: A2(
				$elm$core$List$map,
				function (_v2) {
					var id = _v2.id;
					var name = _v2.name;
					return usedPath + (id + ('?name=' + name));
				},
				A2(
					$elm$core$List$filter,
					A2(
						$elm$core$Basics$composeR,
						function ($) {
							return $.name;
						},
						$author$project$Sources$Pick$isMusicFile),
					A2($elm$core$List$map, $author$project$Sources$Services$Google$Parser$itemProperties, files))),
			marker: function () {
				if (nextPageToken.$ === 'Just') {
					var token = nextPageToken.a;
					return $author$project$Sources$Services$Google$Marker$concat(
						$elm$core$List$singleton(
							$author$project$Sources$Services$Google$Marker$Param(
								{directory: usedDirectory, token: token})));
				} else {
					return $elm$core$Basics$identity;
				}
			}()(
				A2(
					$author$project$Sources$Services$Google$Marker$concat,
					A2(
						$elm$core$List$map,
						A2(
							$elm$core$Basics$composeR,
							$author$project$Sources$Services$Google$Parser$itemProperties,
							A2(
								$elm$core$Basics$composeR,
								function (props) {
									return props.name + ('/' + props.id);
								},
								A2(
									$elm$core$Basics$composeR,
									$elm$core$String$append(usedPath),
									$author$project$Sources$Services$Google$Marker$Directory))),
						directories),
					$author$project$Sources$Services$Google$Marker$removeOne(previousMarker)))
		};
	});
var $author$project$Sources$Services$Google$parseTreeResponse = $author$project$Sources$Services$Google$Parser$parseTreeResponse;
var $ymtszw$elm_xml_decode$Xml$Decode$accumlateOk = F2(
	function (result, acc) {
		if (result.$ === 'Err') {
			return acc;
		} else {
			var a = result.a;
			return A2(
				$elm$core$Result$map,
				$elm$core$List$cons(a),
				acc);
		}
	});
var $ymtszw$elm_xml_decode$Xml$Decode$leakyList = function (_v0) {
	var decoder = _v0.a;
	return $ymtszw$elm_xml_decode$Xml$Decode$ListDecoder(
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Tuple$first,
			A2(
				$elm$core$List$foldr,
				A2($elm$core$Basics$composeR, decoder, $ymtszw$elm_xml_decode$Xml$Decode$accumlateOk),
				$elm$core$Result$Ok(_List_Nil))));
};
var $ymtszw$elm_xml_decode$Xml$Decode$failImpl = F2(
	function (message, aNode) {
		return $elm$core$Result$Err(
			A2($ymtszw$elm_xml_decode$Xml$Decode$Failure, message, aNode));
	});
var $ymtszw$elm_xml_decode$Xml$Decode$fail = function (message) {
	return $ymtszw$elm_xml_decode$Xml$Decode$Decoder(
		$ymtszw$elm_xml_decode$Xml$Decode$failImpl(message));
};
var $author$project$Sources$Services$WebDav$Parser$mustBeAudio = function (contentType) {
	return A2($elm$core$String$startsWith, 'audio/', contentType) ? $ymtszw$elm_xml_decode$Xml$Decode$succeed(contentType) : $ymtszw$elm_xml_decode$Xml$Decode$fail('Ignore this, not an audio file');
};
var $author$project$Sources$Services$WebDav$Parser$treeItemDecoder = function (namespace) {
	var withNamespace = $elm$core$String$append(namespace);
	return A3(
		$ymtszw$elm_xml_decode$Xml$Decode$map2,
		F2(
			function (_v0, h) {
				return h;
			}),
		$ymtszw$elm_xml_decode$Xml$Decode$oneOf(
			_List_fromArray(
				[
					A2(
					$ymtszw$elm_xml_decode$Xml$Decode$andThen,
					$author$project$Sources$Services$WebDav$Parser$mustBeAudio,
					A2(
						$ymtszw$elm_xml_decode$Xml$Decode$path,
						_List_fromArray(
							[
								withNamespace('propstat'),
								withNamespace('prop'),
								withNamespace('getcontenttype')
							]),
						$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string))),
					A2(
					$ymtszw$elm_xml_decode$Xml$Decode$path,
					_List_fromArray(
						[
							withNamespace('propstat'),
							withNamespace('prop'),
							withNamespace('resourcetype'),
							withNamespace('collection')
						]),
					$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string))
				])),
		A2(
			$ymtszw$elm_xml_decode$Xml$Decode$path,
			_List_fromArray(
				[
					withNamespace('href')
				]),
			$ymtszw$elm_xml_decode$Xml$Decode$single($ymtszw$elm_xml_decode$Xml$Decode$string)));
};
var $author$project$Sources$Services$WebDav$Parser$treeDecoder = function (namespace) {
	return A2(
		$ymtszw$elm_xml_decode$Xml$Decode$path,
		_List_fromArray(
			[namespace + 'response']),
		$ymtszw$elm_xml_decode$Xml$Decode$leakyList(
			$author$project$Sources$Services$WebDav$Parser$treeItemDecoder(namespace)));
};
var $author$project$Sources$Services$WebDav$Parser$parseTreeResponse = F2(
	function (response, previousMarker) {
		var parseResult = $jinjor$elm_xml_parser$XmlParser$parse(response);
		var namespace = function (maybe) {
			if (maybe.$ === 'Just') {
				var n = maybe.a;
				return n + ':';
			} else {
				return A2($elm$core$String$contains, '<d:', response) ? 'd:' : 'D:';
			}
		}(
			A2(
				$elm$core$Result$withDefault,
				$elm$core$Maybe$Nothing,
				A2(
					$elm$core$Result$map,
					function (xml) {
						var _v1 = xml.root;
						if (_v1.$ === 'Element') {
							var nodeName = _v1.a;
							return $elm$core$List$head(
								A2($elm$core$String$split, ':', nodeName));
						} else {
							return $elm$core$Maybe$Nothing;
						}
					},
					parseResult)));
		var currentDir = A2(
			$elm$core$Maybe$withDefault,
			'//',
			$author$project$Sources$Services$Ipfs$Marker$takeOne(previousMarker));
		var entries = A2(
			$elm$core$List$filter,
			$elm$core$Basics$neq(currentDir),
			$elm_community$maybe_extra$Maybe$Extra$values(
				A2(
					$elm$core$List$map,
					$elm$url$Url$percentDecode,
					A2(
						$elm$core$Result$withDefault,
						_List_Nil,
						A2(
							$ymtszw$elm_xml_decode$Xml$Decode$decodeString,
							$author$project$Sources$Services$WebDav$Parser$treeDecoder(namespace),
							response)))));
		var _v0 = A2(
			$elm$core$List$partition,
			$elm$core$String$endsWith('/'),
			entries);
		var dirs = _v0.a;
		var files = _v0.b;
		return {
			filePaths: A2(
				$elm$core$List$map,
				$author$project$String$Ext$chopStart('/'),
				files),
			marker: A2(
				$author$project$Sources$Services$Ipfs$Marker$concat,
				dirs,
				$author$project$Sources$Services$Ipfs$Marker$removeOne(previousMarker))
		};
	});
var $author$project$Sources$Services$WebDav$parseTreeResponse = $author$project$Sources$Services$WebDav$Parser$parseTreeResponse;
var $author$project$Sources$Services$parseTreeResponse = function (service) {
	switch (service.$) {
		case 'AmazonS3':
			return $author$project$Sources$Services$AmazonS3$parseTreeResponse;
		case 'AzureBlob':
			return $author$project$Sources$Services$AzureBlob$parseTreeResponse;
		case 'AzureFile':
			return $author$project$Sources$Services$AzureFile$parseTreeResponse;
		case 'Btfs':
			return $author$project$Sources$Services$Btfs$parseTreeResponse;
		case 'Dropbox':
			return $author$project$Sources$Services$Dropbox$parseTreeResponse;
		case 'Google':
			return $author$project$Sources$Services$Google$parseTreeResponse;
		case 'Ipfs':
			return $author$project$Sources$Services$Ipfs$parseTreeResponse;
		default:
			return $author$project$Sources$Services$WebDav$parseTreeResponse;
	}
};
var $author$project$Brain$Sources$Processing$Steps$handleTreeResponse = F2(
	function (response, context) {
		var parsingFunc = $author$project$Sources$Services$parseTreeResponse(context.source.service);
		var parsedResponse = A2(parsingFunc, response, context.treeMarker);
		return _Utils_update(
			context,
			{
				filePaths: _Utils_ap(context.filePaths, parsedResponse.filePaths),
				treeMarker: parsedResponse.marker
			});
	});
var $author$project$Brain$Sources$Processing$Types$TreeStepRemoveTracks = F2(
	function (a, b) {
		return {$: 'TreeStepRemoveTracks', a: a, b: b};
	});
var $author$project$Brain$Sources$Processing$Common$contextToTagsContext = function (context) {
	return {
		amount: $elm$core$List$length(context.filePaths),
		nextFilePaths: context.filePaths,
		receivedFilePaths: _List_Nil,
		receivedTags: _List_Nil,
		sourceId: context.source.id,
		urlsForTags: _List_Nil
	};
};
var $author$project$Task$Extra$do = function (msg) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$identity,
		$elm$core$Task$succeed(msg));
};
var $author$project$Sources$Pick$selectMusicFiles = $elm$core$List$filter($author$project$Sources$Pick$isMusicFile);
var $author$project$Sources$Services$AmazonS3$postProcessTree = $author$project$Sources$Pick$selectMusicFiles;
var $author$project$Sources$Services$AzureBlob$postProcessTree = $author$project$Sources$Pick$selectMusicFiles;
var $author$project$Sources$Services$AzureFile$postProcessTree = $author$project$Sources$Pick$selectMusicFiles;
var $author$project$Sources$Services$Ipfs$postProcessTree = $elm$core$Basics$identity;
var $author$project$Sources$Services$Btfs$postProcessTree = $author$project$Sources$Services$Ipfs$postProcessTree;
var $author$project$Sources$Services$Dropbox$postProcessTree = $author$project$Sources$Pick$selectMusicFiles;
var $author$project$Sources$Services$Google$postProcessTree = $elm$core$Basics$identity;
var $author$project$Sources$Services$WebDav$postProcessTree = $author$project$Sources$Pick$selectMusicFiles;
var $author$project$Sources$Services$postProcessTree = function (service) {
	switch (service.$) {
		case 'AmazonS3':
			return $author$project$Sources$Services$AmazonS3$postProcessTree;
		case 'AzureBlob':
			return $author$project$Sources$Services$AzureBlob$postProcessTree;
		case 'AzureFile':
			return $author$project$Sources$Services$AzureFile$postProcessTree;
		case 'Btfs':
			return $author$project$Sources$Services$Btfs$postProcessTree;
		case 'Dropbox':
			return $author$project$Sources$Services$Dropbox$postProcessTree;
		case 'Google':
			return $author$project$Sources$Services$Google$postProcessTree;
		case 'Ipfs':
			return $author$project$Sources$Services$Ipfs$postProcessTree;
		default:
			return $author$project$Sources$Services$WebDav$postProcessTree;
	}
};
var $elm$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2($elm$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});
var $elm$core$Set$diff = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$diff, dict1, dict2));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $author$project$Brain$Sources$Processing$Steps$separate = F2(
	function (current, srcOfTruth) {
		var setSrcOfTruth = $elm$core$Set$fromList(srcOfTruth);
		var setCurrent = $elm$core$Set$fromList(current);
		return _Utils_Tuple2(
			$elm$core$Set$toList(
				A2($elm$core$Set$diff, setSrcOfTruth, setCurrent)),
			$elm$core$Set$toList(
				A2($elm$core$Set$diff, setCurrent, setSrcOfTruth)));
	});
var $author$project$Brain$Sources$Processing$Steps$intoTreeCommand = F3(
	function (associatedTracks, currentTime, context) {
		var _v0 = context.treeMarker;
		switch (_v0.$) {
			case 'TheBeginning':
				return $elm$core$Platform$Cmd$none;
			case 'InProgress':
				return A2($author$project$Brain$Sources$Processing$Steps$makeTree, context, currentTime);
			default:
				var pathsCurrent = A2(
					$elm$core$List$map,
					function ($) {
						return $.path;
					},
					associatedTracks);
				var filteredFiles = A2($author$project$Sources$Services$postProcessTree, context.source.service, context.filePaths);
				var postContext = _Utils_update(
					context,
					{filePaths: filteredFiles});
				var pathsSourceOfTruth = postContext.filePaths;
				var _v1 = A2($author$project$Brain$Sources$Processing$Steps$separate, pathsCurrent, pathsSourceOfTruth);
				var pathsAdded = _v1.a;
				var pathsRemoved = _v1.b;
				return $elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[
							$author$project$Task$Extra$do(
							$author$project$Brain$Types$ProcessingMsg(
								$author$project$Brain$Sources$Processing$Types$TagsStep(
									$author$project$Brain$Sources$Processing$Common$contextToTagsContext(
										function (ctx) {
											return _Utils_update(
												ctx,
												{filePaths: pathsAdded});
										}(postContext))))),
							(!$elm$core$List$isEmpty(pathsRemoved)) ? $author$project$Task$Extra$do(
							$author$project$Brain$Types$ProcessingMsg(
								A2($author$project$Brain$Sources$Processing$Types$TreeStepRemoveTracks, context.source.id, pathsRemoved))) : $elm$core$Platform$Cmd$none
						]));
		}
	});
var $author$project$Brain$Sources$Processing$Steps$takeTreeStep = F4(
	function (context, response, associatedTracks, currentTime) {
		return A3(
			$author$project$Brain$Sources$Processing$Steps$intoTreeCommand,
			associatedTracks,
			currentTime,
			A2($author$project$Brain$Sources$Processing$Steps$handleTreeResponse, response, context));
	});
var $author$project$Brain$Sources$Processing$State$treeStep = F3(
	function (context, result, model) {
		if (result.$ === 'Ok') {
			var response = result.a;
			var _v1 = model.processingStatus;
			if (_v1.$ === 'Processing') {
				var _v2 = _v1.a;
				var tracks = _v2.b;
				var rest = _v1.b;
				return A2(
					$Fresheyeball$elm_return$Return$return,
					_Utils_update(
						model,
						{
							processingStatus: A2(
								$author$project$Sources$Processing$Processing,
								_Utils_Tuple2(context.source, tracks),
								rest)
						}),
					A4($author$project$Brain$Sources$Processing$Steps$takeTreeStep, context, response, tracks, model.currentTime));
			} else {
				return $Fresheyeball$elm_return$Return$singleton(model);
			}
		} else {
			var err = result.a;
			return A2(
				$Fresheyeball$elm_return$Return$andThen,
				A2($author$project$Brain$Sources$Processing$Common$reportHttpError, context.source, err),
				$author$project$Brain$Sources$Processing$State$nextInLine(model));
		}
	});
var $elm_community$list_extra$List$Extra$reverseAppend = F2(
	function (list1, list2) {
		return A3($elm$core$List$foldl, $elm$core$List$cons, list2, list1);
	});
var $elm_community$list_extra$List$Extra$removeHelp = F4(
	function (list, x, xs, previousElements) {
		removeHelp:
		while (true) {
			if (!xs.b) {
				return list;
			} else {
				var y = xs.a;
				var ys = xs.b;
				if (_Utils_eq(x, y)) {
					return A2($elm_community$list_extra$List$Extra$reverseAppend, previousElements, ys);
				} else {
					var $temp$list = list,
						$temp$x = x,
						$temp$xs = ys,
						$temp$previousElements = A2($elm$core$List$cons, y, previousElements);
					list = $temp$list;
					x = $temp$x;
					xs = $temp$xs;
					previousElements = $temp$previousElements;
					continue removeHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$remove = F2(
	function (x, xs) {
		return A4($elm_community$list_extra$List$Extra$removeHelp, xs, x, xs, _List_Nil);
	});
var $author$project$Tracks$removeByPaths = F2(
	function (_v0, tracks) {
		var sourceId = _v0.sourceId;
		var paths = _v0.paths;
		return function (_v2) {
			var k = _v2.a;
			var r = _v2.b;
			return {kept: k, removed: r};
		}(
			A3(
				$elm$core$List$foldr,
				F2(
					function (t, _v1) {
						var kept = _v1.a;
						var removed = _v1.b;
						var remainingPathsToRemove = _v1.c;
						return (_Utils_eq(t.sourceId, sourceId) && A2($elm$core$List$member, t.path, remainingPathsToRemove)) ? _Utils_Tuple3(
							kept,
							A2($elm$core$List$cons, t, removed),
							A2($elm_community$list_extra$List$Extra$remove, t.path, remainingPathsToRemove)) : _Utils_Tuple3(
							A2($elm$core$List$cons, t, kept),
							removed,
							remainingPathsToRemove);
					}),
				_Utils_Tuple3(_List_Nil, _List_Nil, paths),
				tracks));
	});
var $author$project$Brain$Tracks$State$removeByPaths = F2(
	function (args, model) {
		return A2(
			$author$project$Brain$User$State$saveTracksAndUpdateSearchIndex,
			A2($author$project$Tracks$removeByPaths, args, model.hypaethralUserData.tracks).kept,
			model);
	});
var $author$project$Brain$Sources$Processing$State$treeStepRemoveTracks = F3(
	function (sourceId, filePaths, model) {
		var encodedData = $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'filePaths',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, filePaths)),
					_Utils_Tuple2(
					'sourceId',
					$elm$json$Json$Encode$string(sourceId))
				]));
		return A2(
			$Fresheyeball$elm_return$Return$andThen,
			$author$project$Brain$Tracks$State$removeByPaths(
				{paths: filePaths, sourceId: sourceId}),
			A3($author$project$Brain$Common$State$giveUI, $author$project$Alien$RemoveTracksByPath, encodedData, model));
	});
var $author$project$Brain$Sources$Processing$State$update = function (msg) {
	switch (msg.$) {
		case 'Process':
			var a = msg.a;
			return $author$project$Brain$Sources$Processing$State$process(a);
		case 'NextInLine':
			return $author$project$Brain$Sources$Processing$State$nextInLine;
		case 'StopProcessing':
			return $author$project$Brain$Sources$Processing$State$stopProcessing;
		case 'PrepareStep':
			var a = msg.a;
			var b = msg.b;
			return A2($author$project$Brain$Sources$Processing$State$prepareStep, a, b);
		case 'TreeStep':
			var a = msg.a;
			var b = msg.b;
			return A2($author$project$Brain$Sources$Processing$State$treeStep, a, b);
		case 'TreeStepRemoveTracks':
			var a = msg.a;
			var b = msg.b;
			return A2($author$project$Brain$Sources$Processing$State$treeStepRemoveTracks, a, b);
		default:
			var a = msg.a;
			return $author$project$Brain$Sources$Processing$State$tagsStep(a);
	}
};
var $author$project$Brain$User$State$sendHypaethralDataToUI = F3(
	function (encodedData, decodedData, model) {
		return A2(
			$Fresheyeball$elm_return$Return$return,
			_Utils_update(
				model,
				{hypaethralUserData: decodedData}),
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						$author$project$Brain$Ports$toUI(
						A2($author$project$Alien$broadcast, $author$project$Alien$LoadHypaethralUserData, encodedData)),
						$author$project$Brain$Ports$updateSearchIndex(
						A2($elm$json$Json$Encode$list, $author$project$Tracks$Encoding$encodeTrack, decodedData.tracks))
					])));
	});
var $author$project$User$Layer$methodToString = function (method) {
	switch (method.$) {
		case 'Dropbox':
			var accessToken = method.a.accessToken;
			var expiresAt = method.a.expiresAt;
			var refreshToken = method.a.refreshToken;
			return A2(
				$elm$core$String$join,
				$author$project$User$Layer$methodSeparator,
				_List_fromArray(
					[
						'DROPBOX',
						accessToken,
						$elm$core$String$fromInt(expiresAt),
						refreshToken
					]));
		case 'Fission':
			return 'FISSION';
		case 'Ipfs':
			var apiOrigin = method.a.apiOrigin;
			return A2(
				$elm$core$String$join,
				$author$project$User$Layer$methodSeparator,
				_List_fromArray(
					['IPFS', apiOrigin]));
		default:
			var userAddress = method.a.userAddress;
			var token = method.a.token;
			return A2(
				$elm$core$String$join,
				$author$project$User$Layer$methodSeparator,
				_List_fromArray(
					['REMOTE_STORAGE', userAddress, token]));
	}
};
var $author$project$User$Layer$encodeMethod = A2($elm$core$Basics$composeR, $author$project$User$Layer$methodToString, $elm$json$Json$Encode$string);
var $author$project$Brain$User$Types$FinishedSyncing = {$: 'FinishedSyncing'};
var $author$project$Brain$User$Types$GotHypaethralData = function (a) {
	return {$: 'GotHypaethralData', a: a};
};
var $author$project$Brain$User$Types$Sync = {$: 'Sync'};
var $author$project$Brain$User$Hypaethral$retrieveDropbox = F2(
	function (accessToken, bit) {
		return A2(
			$elm$core$Task$mapError,
			$author$project$TaskPort$Extra$errorToStringCustom,
			A2(
				$lobanov$elm_taskport$TaskPort$call,
				{
					argsEncoder: $elm$json$Json$Encode$object,
					_function: 'fromDropbox',
					valueDecoder: $elm$json$Json$Decode$maybe($elm$json$Json$Decode$value)
				},
				_List_fromArray(
					[
						_Utils_Tuple2(
						'fileName',
						$author$project$Brain$User$Hypaethral$fileName(bit)),
						_Utils_Tuple2(
						'token',
						$elm$json$Json$Encode$string(accessToken))
					])));
	});
var $author$project$Brain$User$Hypaethral$retrieveFission = function (bit) {
	var includePublicData = _Utils_eq(bit, $author$project$User$Layer$Playlists);
	return A2(
		$elm$core$Task$mapError,
		$author$project$TaskPort$Extra$errorToStringCustom,
		A2(
			$lobanov$elm_taskport$TaskPort$call,
			{
				argsEncoder: $elm$json$Json$Encode$object,
				_function: 'fromFission',
				valueDecoder: $elm$json$Json$Decode$maybe($elm$json$Json$Decode$value)
			},
			_List_fromArray(
				[
					_Utils_Tuple2(
					'fileName',
					$author$project$Brain$User$Hypaethral$fileName(bit)),
					_Utils_Tuple2(
					'includePublicData',
					$elm$json$Json$Encode$bool(includePublicData))
				])));
};
var $author$project$Brain$User$Hypaethral$retrieveIpfs = F2(
	function (apiOrigin, bit) {
		return A2(
			$elm$core$Task$mapError,
			$author$project$TaskPort$Extra$errorToStringCustom,
			A2(
				$lobanov$elm_taskport$TaskPort$call,
				{
					argsEncoder: $elm$json$Json$Encode$object,
					_function: 'fromIpfs',
					valueDecoder: $elm$json$Json$Decode$maybe($elm$json$Json$Decode$value)
				},
				_List_fromArray(
					[
						_Utils_Tuple2(
						'fileName',
						$author$project$Brain$User$Hypaethral$fileName(bit)),
						_Utils_Tuple2(
						'apiOrigin',
						$elm$json$Json$Encode$string(apiOrigin))
					])));
	});
var $author$project$Brain$User$Hypaethral$retrieveRemoteStorage = F2(
	function (_v0, bit) {
		var token = _v0.token;
		var userAddress = _v0.userAddress;
		return A2(
			$elm$core$Task$mapError,
			$author$project$TaskPort$Extra$errorToStringCustom,
			A2(
				$lobanov$elm_taskport$TaskPort$call,
				{
					argsEncoder: $elm$json$Json$Encode$object,
					_function: 'fromRemoteStorage',
					valueDecoder: $elm$json$Json$Decode$maybe($elm$json$Json$Decode$value)
				},
				_List_fromArray(
					[
						_Utils_Tuple2(
						'fileName',
						$author$project$Brain$User$Hypaethral$fileName(bit)),
						_Utils_Tuple2(
						'token',
						$elm$json$Json$Encode$string(token)),
						_Utils_Tuple2(
						'userAddress',
						$elm$json$Json$Encode$string(userAddress))
					])));
	});
var $author$project$Task$Extra$fromResult = function (result) {
	if (result.$ === 'Ok') {
		var v = result.a;
		return $elm$core$Task$succeed(v);
	} else {
		var e = result.a;
		return $elm$core$Task$fail(e);
	}
};
var $author$project$Syncing$pushLocalToRemote = F3(
	function (localConfig, remoteConfig, _v0) {
		var _return = _v0._return;
		return A2(
			$elm$core$Task$map,
			function (_v3) {
				return _return;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					function (_v2) {
						var bit = _v2.a;
						var data = _v2.b;
						return A2(remoteConfig.save, bit, data);
					},
					function () {
						var _v1 = localConfig.localData.modifiedAt;
						if (_v1.$ === 'Just') {
							var localModifiedAt = _v1.a;
							return $elm$core$List$cons(
								_Utils_Tuple2(
									$author$project$User$Layer$ModifiedAt,
									$author$project$Time$Ext$encode(localModifiedAt)));
						} else {
							return $elm$core$Basics$identity;
						}
					}()(
						$author$project$User$Layer$encodedHypaethralDataList(localConfig.localData)))));
	});
var $author$project$User$Layer$saveHypaethralData = F2(
	function (saveFn, data) {
		return A2(
			$elm$core$Task$map,
			$elm$core$Basics$always(_Utils_Tuple0),
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					function (_v0) {
						var bit = _v0.b;
						return A2(
							saveFn,
							bit,
							A2($author$project$User$Layer$encodeHypaethralBit, bit, data));
					},
					$author$project$User$Layer$hypaethralBit.list)));
	});
var $author$project$Syncing$fetchRemote = F2(
	function (localConfig, remoteConfig) {
		var _v0 = localConfig;
		var localData = _v0.localData;
		var saveLocal = _v0.saveLocal;
		var noLocalData = $elm$core$List$isEmpty(localData.sources) && ($elm$core$List$isEmpty(localData.favourites) && $elm$core$List$isEmpty(localData.playlists));
		var saveLocally = function (data) {
			return A2(
				$elm$core$Task$map,
				function (_v6) {
					return $elm$core$Maybe$Just(data);
				},
				A2($author$project$User$Layer$saveHypaethralData, saveLocal, data));
		};
		var _v1 = remoteConfig;
		var retrieve = _v1.retrieve;
		return A2(
			$elm$core$Task$andThen,
			function (remoteData) {
				var _v3 = _Utils_Tuple2(remoteData.modifiedAt, localData.modifiedAt);
				if (_v3.a.$ === 'Just') {
					if (_v3.b.$ === 'Just') {
						var remoteModifiedAt = _v3.a.a;
						var localModifiedAt = _v3.b.a;
						return _Utils_eq(
							$elm$time$Time$posixToMillis(remoteModifiedAt),
							$elm$time$Time$posixToMillis(localModifiedAt)) ? $elm$core$Task$succeed($elm$core$Maybe$Nothing) : ((_Utils_cmp(
							$elm$time$Time$posixToMillis(remoteModifiedAt),
							$elm$time$Time$posixToMillis(localModifiedAt)) > 0) ? saveLocally(remoteData) : A3(
							$author$project$Syncing$pushLocalToRemote,
							localConfig,
							remoteConfig,
							{_return: $elm$core$Maybe$Nothing}));
					} else {
						var _v4 = _v3.b;
						return saveLocally(remoteData);
					}
				} else {
					if (_v3.b.$ === 'Just') {
						var _v5 = _v3.a;
						return A3(
							$author$project$Syncing$pushLocalToRemote,
							localConfig,
							remoteConfig,
							{_return: $elm$core$Maybe$Nothing});
					} else {
						return noLocalData ? saveLocally(remoteData) : $elm$core$Task$succeed($elm$core$Maybe$Nothing);
					}
				}
			},
			A2(
				$elm$core$Task$andThen,
				function (list) {
					return A2(
						$elm$core$Task$mapError,
						$elm$json$Json$Decode$errorToString,
						$author$project$Task$Extra$fromResult(
							$author$project$User$Layer$decodeHypaethralData(
								$elm$json$Json$Encode$object(
									A2(
										$elm$core$List$map,
										function (_v2) {
											var a = _v2.a;
											var b = _v2.b;
											return _Utils_Tuple2(
												$author$project$User$Layer$hypaethralBitKey(a),
												A2($elm$core$Maybe$withDefault, $elm$json$Json$Encode$null, b));
										},
										list)))));
				},
				A2(
					$elm$core$Task$andThen,
					function (list) {
						var remoteHasExistingData = A2(
							$elm$core$List$any,
							A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $elm_community$maybe_extra$Maybe$Extra$isJust),
							list);
						return remoteHasExistingData ? $elm$core$Task$succeed(list) : A3(
							$author$project$Syncing$pushLocalToRemote,
							localConfig,
							remoteConfig,
							{_return: list});
					},
					$author$project$User$Layer$retrieveHypaethralData(retrieve))));
	});
var $author$project$Syncing$task = F3(
	function (initialTask, localConfig, remoteConfig) {
		return A2(
			$elm$core$Task$andThen,
			function (maybeModifiedAt) {
				var maybeRemoteModifiedAt = A2(
					$elm$core$Maybe$andThen,
					A2(
						$elm$core$Basics$composeR,
						$elm$json$Json$Decode$decodeValue($author$project$Time$Ext$decoder),
						$elm$core$Result$toMaybe),
					maybeModifiedAt);
				var _v1 = _Utils_Tuple2(maybeRemoteModifiedAt, localConfig.localData.modifiedAt);
				if (_v1.a.$ === 'Just') {
					if (_v1.b.$ === 'Just') {
						var remoteModifiedAt = _v1.a.a;
						var localModifiedAt = _v1.b.a;
						return _Utils_eq(
							$elm$time$Time$posixToMillis(remoteModifiedAt),
							$elm$time$Time$posixToMillis(localModifiedAt)) ? $elm$core$Task$succeed($elm$core$Maybe$Nothing) : ((_Utils_cmp(
							$elm$time$Time$posixToMillis(remoteModifiedAt),
							$elm$time$Time$posixToMillis(localModifiedAt)) > 0) ? A2($author$project$Syncing$fetchRemote, localConfig, remoteConfig) : A3(
							$author$project$Syncing$pushLocalToRemote,
							localConfig,
							remoteConfig,
							{_return: $elm$core$Maybe$Nothing}));
					} else {
						var _v2 = _v1.b;
						return A2($author$project$Syncing$fetchRemote, localConfig, remoteConfig);
					}
				} else {
					var _v3 = _v1.a;
					return A2($author$project$Syncing$fetchRemote, localConfig, remoteConfig);
				}
			},
			A2(
				$elm$core$Task$andThen,
				function (_v0) {
					return remoteConfig.retrieve($author$project$User$Layer$ModifiedAt);
				},
				initialTask));
	});
var $author$project$Brain$User$State$syncCommand = F2(
	function (initialTask, model) {
		var localData = model.hypaethralUserData;
		var attemptSync = function (args) {
			return A2(
				$author$project$Brain$Common$State$attemptTask,
				function (maybe) {
					if (maybe.$ === 'Just') {
						var data = maybe.a;
						return $author$project$Brain$Types$UserMsg(
							$author$project$Brain$User$Types$GotHypaethralData(data));
					} else {
						return $author$project$Brain$Types$UserMsg($author$project$Brain$User$Types$FinishedSyncing);
					}
				},
				A3(
					$author$project$Syncing$task,
					initialTask,
					{localData: localData, saveLocal: $author$project$Brain$User$Hypaethral$saveLocal},
					args));
		};
		var _v0 = model.userSyncMethod;
		if (_v0.$ === 'Just') {
			switch (_v0.a.$) {
				case 'Dropbox':
					var accessToken = _v0.a.a.accessToken;
					var expiresAt = _v0.a.a.expiresAt;
					var refreshToken = _v0.a.a.refreshToken;
					return $author$project$Syncing$Services$Dropbox$Token$isExpired(
						{currentTime: model.currentTime, expiresAt: expiresAt}) ? A4($author$project$Brain$User$State$refreshDropboxTokens, model.currentTime, $author$project$Brain$User$Types$Sync, initialTask, refreshToken) : attemptSync(
						{
							retrieve: $author$project$Brain$User$Hypaethral$retrieveDropbox(accessToken),
							save: $author$project$Brain$User$Hypaethral$saveDropbox(accessToken)
						});
				case 'Fission':
					return attemptSync(
						{retrieve: $author$project$Brain$User$Hypaethral$retrieveFission, save: $author$project$Brain$User$Hypaethral$saveFission});
				case 'Ipfs':
					var apiOrigin = _v0.a.a.apiOrigin;
					return attemptSync(
						{
							retrieve: $author$project$Brain$User$Hypaethral$retrieveIpfs(apiOrigin),
							save: $author$project$Brain$User$Hypaethral$saveIpfs(apiOrigin)
						});
				default:
					var args = _v0.a.a;
					return attemptSync(
						{
							retrieve: $author$project$Brain$User$Hypaethral$retrieveRemoteStorage(args),
							save: $author$project$Brain$User$Hypaethral$saveRemoteStorage(args)
						});
			}
		} else {
			return $elm$core$Platform$Cmd$none;
		}
	});
var $author$project$Brain$User$State$sync = F2(
	function (_v0, model) {
		var initialTask = _v0.initialTask;
		return A2(
			$Fresheyeball$elm_return$Return$andThen,
			function () {
				var _v1 = model.userSyncMethod;
				if (_v1.$ === 'Just') {
					var method = _v1.a;
					return A2(
						$author$project$Brain$Common$State$giveUI,
						$author$project$Alien$StartedSyncing,
						$author$project$User$Layer$encodeMethod(method));
				} else {
					return $Fresheyeball$elm_return$Return$singleton;
				}
			}(),
			A2(
				$Fresheyeball$elm_return$Return$return,
				model,
				A2(
					$author$project$Brain$User$State$syncCommand,
					A2(
						$elm$core$Maybe$withDefault,
						$elm$core$Task$succeed(_Utils_Tuple0),
						initialTask),
					model)));
	});
var $author$project$Brain$User$State$commence = F4(
	function (maybeMethod, initialUrl, _v0, model) {
		var hypaethralJson = _v0.a;
		var hypaethralData = _v0.b;
		return A2(
			$Fresheyeball$elm_return$Return$andThen,
			function () {
				var _v1 = $author$project$Url$Ext$action(initialUrl);
				if ((((_v1.b && (_v1.a === 'authenticate')) && _v1.b.b) && (_v1.b.a === 'fission')) && (!_v1.b.b.b)) {
					var _v2 = _v1.b;
					return $author$project$Brain$Common$State$nudgeUI($author$project$Alien$CollectFissionCapabilities);
				} else {
					return $author$project$Brain$User$State$sync(
						{initialTask: $elm$core$Maybe$Nothing});
				}
			}(),
			A3(
				$author$project$Brain$User$State$sendHypaethralDataToUI,
				hypaethralJson,
				hypaethralData,
				_Utils_update(
					model,
					{userSyncMethod: maybeMethod})));
	});
var $author$project$Brain$User$State$enclosedDataRetrieved = function (json) {
	return A2($author$project$Brain$Common$State$giveUI, $author$project$Alien$LoadEnclosedUserData, json);
};
var $author$project$Brain$User$State$finishedSyncing = function (model) {
	var _v0 = model.userSyncMethod;
	if (_v0.$ === 'Just') {
		var userSyncMethod = _v0.a;
		return A3(
			$author$project$Brain$Common$State$giveUI,
			$author$project$Alien$SyncMethod,
			$author$project$User$Layer$encodeMethod(userSyncMethod),
			model);
	} else {
		return $Fresheyeball$elm_return$Return$singleton(model);
	}
};
var $author$project$Brain$User$State$gotHypaethralData = F2(
	function (hypaethralData, model) {
		return A2(
			$Fresheyeball$elm_return$Return$andThen,
			$author$project$Brain$User$State$finishedSyncing,
			A3(
				$author$project$Brain$User$State$sendHypaethralDataToUI,
				$author$project$User$Layer$encodeHypaethralData(hypaethralData),
				hypaethralData,
				model));
	});
var $author$project$Brain$Task$Ports$removeCache = function (tag) {
	return A2(
		$lobanov$elm_taskport$TaskPort$call,
		{argsEncoder: $elm$json$Json$Encode$string, _function: 'removeCache', valueDecoder: $lobanov$elm_taskport$TaskPort$ignoreValue},
		$author$project$Alien$tagToString(tag));
};
var $author$project$Brain$User$State$saveAllHypaethralDataTask = F2(
	function (userData, method) {
		var save = A2(
			$author$project$Brain$User$State$saveHypaethralDataBitsTask,
			A2($elm$core$List$cons, $author$project$User$Layer$ModifiedAt, $author$project$User$Layer$allHypaethralBits),
			userData);
		switch (method.$) {
			case 'Dropbox':
				var accessToken = method.a.accessToken;
				return save(
					$author$project$Brain$User$Hypaethral$saveDropbox(accessToken));
			case 'Fission':
				return save($author$project$Brain$User$Hypaethral$saveFission);
			case 'Ipfs':
				var apiOrigin = method.a.apiOrigin;
				return save(
					$author$project$Brain$User$Hypaethral$saveIpfs(apiOrigin));
			default:
				var a = method.a;
				return save(
					$author$project$Brain$User$Hypaethral$saveRemoteStorage(a));
		}
	});
var $author$project$Brain$User$State$removeEncryptionKey = function (model) {
	return A2(
		$Fresheyeball$elm_return$Return$return,
		model,
		A2(
			$author$project$Brain$Common$State$attemptTask,
			$elm$core$Basics$always($author$project$Brain$Types$Bypass),
			A2(
				$elm$core$Task$andThen,
				function (currentTime) {
					var _v1 = model.userSyncMethod;
					if (_v1.$ === 'Just') {
						var method = _v1.a;
						var data = model.hypaethralUserData;
						return A2(
							$author$project$Brain$User$State$saveAllHypaethralDataTask,
							_Utils_update(
								data,
								{
									modifiedAt: $elm$core$Maybe$Just(currentTime)
								}),
							method);
					} else {
						return $elm$core$Task$succeed(_Utils_Tuple0);
					}
				},
				A2(
					$elm$core$Task$andThen,
					function (_v0) {
						return $elm$time$Time$now;
					},
					A2(
						$elm$core$Task$mapError,
						$author$project$TaskPort$Extra$errorToStringCustom,
						$author$project$Brain$Task$Ports$removeCache($author$project$Alien$SecretKey))))));
};
var $author$project$Brain$Ports$requestCache = _Platform_outgoingPort(
	'requestCache',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'data',
					$elm$core$Basics$identity($.data)),
					_Utils_Tuple2(
					'error',
					function ($) {
						return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$string, $);
					}($.error)),
					_Utils_Tuple2(
					'tag',
					$elm$json$Json$Encode$string($.tag))
				]));
	});
var $author$project$Brain$User$State$retrieveEnclosedData = $author$project$Return$Ext$communicate(
	$author$project$Brain$Ports$requestCache(
		$author$project$Alien$trigger($author$project$Alien$EnclosedData)));
var $author$project$Brain$User$State$saveEnclosedData = function (json) {
	return $author$project$Return$Ext$communicate(
		$author$project$Brain$Ports$toCache(
			A2($author$project$Alien$broadcast, $author$project$Alien$EnclosedData, json)));
};
var $author$project$Brain$User$State$saveFavourites = F2(
	function (value, model) {
		return A2(
			$author$project$Brain$User$State$saveHypaethralDataBitWithDebounce,
			$author$project$User$Layer$Favourites,
			A2(
				$author$project$Brain$User$State$hypaethralLenses.setFavourites,
				model,
				A2(
					$elm$core$Result$withDefault,
					model.hypaethralUserData.favourites,
					A2(
						$elm$json$Json$Decode$decodeValue,
						$elm$json$Json$Decode$list($author$project$Tracks$Encoding$favouriteDecoder),
						value))));
	});
var $author$project$Brain$User$State$saveMethod = F2(
	function (method, model) {
		return A2(
			$Fresheyeball$elm_return$Return$return,
			_Utils_update(
				model,
				{
					userSyncMethod: $elm$core$Maybe$Just(method)
				}),
			$author$project$Brain$Ports$toCache(
				A2(
					$author$project$Alien$broadcast,
					$author$project$Alien$SyncMethod,
					$author$project$User$Layer$encodeMethod(method))));
	});
var $author$project$Brain$User$State$savePlaylists = F2(
	function (value, model) {
		return A2(
			$author$project$Brain$User$State$saveHypaethralDataBitWithDebounce,
			$author$project$User$Layer$Playlists,
			A2(
				$author$project$Brain$User$State$hypaethralLenses.setPlaylists,
				model,
				A2(
					$elm$core$Result$withDefault,
					model.hypaethralUserData.playlists,
					A2(
						$elm$json$Json$Decode$decodeValue,
						$elm$json$Json$Decode$list($author$project$Playlists$Encoding$decoder),
						value))));
	});
var $author$project$Brain$User$State$saveProgress = F2(
	function (value, model) {
		return A2(
			$author$project$Brain$User$State$saveHypaethralDataBitWithDebounce,
			$author$project$User$Layer$Progress,
			A2(
				$author$project$Brain$User$State$hypaethralLenses.setProgress,
				model,
				A2(
					$elm$core$Result$withDefault,
					model.hypaethralUserData.progress,
					A2(
						$elm$json$Json$Decode$decodeValue,
						$elm$json$Json$Decode$dict($elm$json$Json$Decode$float),
						value))));
	});
var $author$project$Brain$User$State$saveSettings = F2(
	function (value, model) {
		return A2(
			$author$project$Brain$User$State$saveHypaethralDataBitWithDebounce,
			$author$project$User$Layer$Settings,
			A2(
				$author$project$Brain$User$State$hypaethralLenses.setSettings,
				model,
				A2(
					$elm$core$Result$withDefault,
					model.hypaethralUserData.settings,
					A2(
						$elm$json$Json$Decode$decodeValue,
						A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $author$project$Settings$decoder),
						value))));
	});
var $author$project$Brain$User$State$saveSources = F2(
	function (value, model) {
		return A2(
			$author$project$Brain$User$State$saveHypaethralDataBitWithDebounce,
			$author$project$User$Layer$Sources,
			A2(
				$author$project$Brain$User$State$hypaethralLenses.setSources,
				model,
				A2(
					$elm$core$Result$withDefault,
					model.hypaethralUserData.sources,
					A2(
						$elm$json$Json$Decode$decodeValue,
						$elm$json$Json$Decode$list($author$project$Sources$Encoding$decoder),
						value))));
	});
var $author$project$Brain$User$State$saveTracks = F2(
	function (value, model) {
		return A2(
			$author$project$Brain$User$State$saveTracksAndUpdateSearchIndex,
			A2(
				$elm$core$Result$withDefault,
				model.hypaethralUserData.tracks,
				A2(
					$elm$json$Json$Decode$decodeValue,
					$elm$json$Json$Decode$list($author$project$Tracks$Encoding$trackDecoder),
					value)),
			model);
	});
var $author$project$Brain$Task$Ports$fabricateSecretKey = $lobanov$elm_taskport$TaskPort$call(
	{
		argsEncoder: $elm$json$Json$Encode$string,
		_function: 'fabricateSecretKey',
		valueDecoder: $elm$json$Json$Decode$succeed(_Utils_Tuple0)
	});
var $author$project$Brain$User$State$setSyncMethod = F2(
	function (json, model) {
		var decoder = A3(
			$elm$json$Json$Decode$map2,
			F2(
				function (a, b) {
					return _Utils_Tuple2(a, b);
				}),
			A2(
				$elm$json$Json$Decode$field,
				'method',
				A2($elm$json$Json$Decode$map, $author$project$User$Layer$methodFromString, $elm$json$Json$Decode$string)),
			A2(
				$elm$json$Json$Decode$field,
				'passphrase',
				$elm$json$Json$Decode$maybe($elm$json$Json$Decode$string)));
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, json);
		if (_v0.$ === 'Ok') {
			if (_v0.a.a.$ === 'Just') {
				if (_v0.a.b.$ === 'Just') {
					var _v1 = _v0.a;
					var method = _v1.a.a;
					var passphrase = _v1.b.a;
					var initialTask = A2(
						$elm$core$Task$mapError,
						$author$project$TaskPort$Extra$errorToStringCustom,
						$author$project$Brain$Task$Ports$fabricateSecretKey(passphrase));
					return A2(
						$Fresheyeball$elm_return$Return$andThen,
						$author$project$Brain$User$State$saveMethod(method),
						A2(
							$author$project$Brain$User$State$sync,
							{
								initialTask: $elm$core$Maybe$Just(initialTask)
							},
							_Utils_update(
								model,
								{
									userSyncMethod: $elm$core$Maybe$Just(method)
								})));
				} else {
					var _v2 = _v0.a;
					var method = _v2.a.a;
					var _v3 = _v2.b;
					return A2(
						$Fresheyeball$elm_return$Return$andThen,
						$author$project$Brain$User$State$saveMethod(method),
						A2(
							$author$project$Brain$User$State$sync,
							{initialTask: $elm$core$Maybe$Nothing},
							_Utils_update(
								model,
								{
									userSyncMethod: $elm$core$Maybe$Just(method)
								})));
				}
			} else {
				var _v4 = _v0.a;
				var _v5 = _v4.a;
				return $Fresheyeball$elm_return$Return$singleton(
					_Utils_update(
						model,
						{userSyncMethod: $elm$core$Maybe$Nothing}));
			}
		} else {
			return $Fresheyeball$elm_return$Return$singleton(model);
		}
	});
var $author$project$Brain$Ports$deconstructFission = _Platform_outgoingPort(
	'deconstructFission',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $author$project$Brain$Ports$deconstructRemoteStorage = _Platform_outgoingPort(
	'deconstructRemoteStorage',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $author$project$Brain$Ports$removeCache = _Platform_outgoingPort(
	'removeCache',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'data',
					$elm$core$Basics$identity($.data)),
					_Utils_Tuple2(
					'error',
					function ($) {
						return A3($elm$core$Maybe$destruct, $elm$json$Json$Encode$null, $elm$json$Json$Encode$string, $);
					}($.error)),
					_Utils_Tuple2(
					'tag',
					$elm$json$Json$Encode$string($.tag))
				]));
	});
var $author$project$Brain$User$State$unsetSyncMethod = function (model) {
	return A2(
		$Fresheyeball$elm_return$Return$return,
		_Utils_update(
			model,
			{userSyncMethod: $elm$core$Maybe$Nothing}),
		$elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					$author$project$Brain$Ports$removeCache(
					$author$project$Alien$trigger($author$project$Alien$SyncMethod)),
					$author$project$Brain$Ports$removeCache(
					$author$project$Alien$trigger($author$project$Alien$SecretKey)),
					function () {
					var _v0 = model.userSyncMethod;
					if (_v0.$ === 'Just') {
						switch (_v0.a.$) {
							case 'Dropbox':
								return $elm$core$Platform$Cmd$none;
							case 'Fission':
								return $author$project$Brain$Ports$deconstructFission(_Utils_Tuple0);
							case 'Ipfs':
								return $elm$core$Platform$Cmd$none;
							default:
								return $author$project$Brain$Ports$deconstructRemoteStorage(_Utils_Tuple0);
						}
					} else {
						return $elm$core$Platform$Cmd$none;
					}
				}()
				])));
};
var $author$project$Brain$User$State$updateEncryptionKey = F2(
	function (json, model) {
		var _v0 = A2($elm$json$Json$Decode$decodeValue, $elm$json$Json$Decode$string, json);
		if (_v0.$ === 'Ok') {
			var passphrase = _v0.a;
			return A2(
				$Fresheyeball$elm_return$Return$return,
				model,
				A2(
					$author$project$Brain$Common$State$attemptTask,
					$elm$core$Basics$always($author$project$Brain$Types$Bypass),
					A2(
						$elm$core$Task$andThen,
						function (currentTime) {
							var _v2 = model.userSyncMethod;
							if (_v2.$ === 'Just') {
								var method = _v2.a;
								var data = model.hypaethralUserData;
								return A2(
									$author$project$Brain$User$State$saveAllHypaethralDataTask,
									_Utils_update(
										data,
										{
											modifiedAt: $elm$core$Maybe$Just(currentTime)
										}),
									method);
							} else {
								return $elm$core$Task$succeed(_Utils_Tuple0);
							}
						},
						A2(
							$elm$core$Task$andThen,
							function (_v1) {
								return $elm$time$Time$now;
							},
							A2(
								$elm$core$Task$mapError,
								$author$project$TaskPort$Extra$errorToStringCustom,
								$author$project$Brain$Task$Ports$fabricateSecretKey(passphrase))))));
		} else {
			return $Fresheyeball$elm_return$Return$singleton(model);
		}
	});
var $author$project$Brain$User$State$refreshedDropboxTokens = F4(
	function (_v1, tokens, msg, model) {
		var currentTime = _v1.currentTime;
		var refreshToken = _v1.refreshToken;
		return A2(
			$Fresheyeball$elm_return$Return$andThen,
			$author$project$Brain$User$State$update(msg),
			function (m) {
				return A2($author$project$Brain$User$State$saveMethod, m, model);
			}(
				$author$project$User$Layer$Dropbox(
					{accessToken: tokens.accessToken, expiresAt: currentTime + tokens.expiresIn, refreshToken: refreshToken})));
	});
var $author$project$Brain$User$State$update = function (msg) {
	switch (msg.$) {
		case 'Commence':
			var a = msg.a;
			var b = msg.b;
			var c = msg.c;
			return A3($author$project$Brain$User$State$commence, a, b, c);
		case 'SetSyncMethod':
			var a = msg.a;
			return $author$project$Brain$User$State$setSyncMethod(a);
		case 'Sync':
			return $author$project$Brain$User$State$sync(
				{initialTask: $elm$core$Maybe$Nothing});
		case 'UnsetSyncMethod':
			return $author$project$Brain$User$State$unsetSyncMethod;
		case 'RetrieveEnclosedData':
			return $author$project$Brain$User$State$retrieveEnclosedData;
		case 'EnclosedDataRetrieved':
			var a = msg.a;
			return $author$project$Brain$User$State$enclosedDataRetrieved(a);
		case 'SaveEnclosedData':
			var a = msg.a;
			return $author$project$Brain$User$State$saveEnclosedData(a);
		case 'SaveFavourites':
			var a = msg.a;
			return $author$project$Brain$User$State$saveFavourites(a);
		case 'SavePlaylists':
			var a = msg.a;
			return $author$project$Brain$User$State$savePlaylists(a);
		case 'SaveProgress':
			var a = msg.a;
			return $author$project$Brain$User$State$saveProgress(a);
		case 'SaveSettings':
			var a = msg.a;
			return $author$project$Brain$User$State$saveSettings(a);
		case 'SaveSources':
			var a = msg.a;
			return $author$project$Brain$User$State$saveSources(a);
		case 'SaveTracks':
			var a = msg.a;
			return $author$project$Brain$User$State$saveTracks(a);
		case 'FinishedSyncing':
			return $author$project$Brain$User$State$finishedSyncing;
		case 'GotHypaethralData':
			var a = msg.a;
			return $author$project$Brain$User$State$gotHypaethralData(a);
		case 'SaveHypaethralDataBits':
			var a = msg.a;
			return $author$project$Brain$User$State$saveHypaethralDataBits(a);
		case 'SaveHypaethralDataSlowly':
			var a = msg.a;
			return $author$project$Brain$User$State$saveHypaethralDataSlowly(a);
		case 'RemoveEncryptionKey':
			return $author$project$Brain$User$State$removeEncryptionKey;
		case 'UpdateEncryptionKey':
			var a = msg.a;
			return $author$project$Brain$User$State$updateEncryptionKey(a);
		default:
			var a = msg.a;
			var b = msg.b;
			var c = msg.c;
			return A3($author$project$Brain$User$State$refreshedDropboxTokens, a, b, c);
	}
};
var $author$project$Brain$Tracks$State$updateSearchIndex = function (data) {
	return $author$project$Return$Ext$communicate(
		$author$project$Brain$Ports$updateSearchIndex(data));
};
var $author$project$Brain$update = function (msg) {
	switch (msg.$) {
		case 'Bypass':
			return $Fresheyeball$elm_return$Return$singleton;
		case 'Cmd':
			var a = msg.a;
			return $author$project$Return$Ext$communicate(a);
		case 'DownloadTracks':
			var a = msg.a;
			return $author$project$Brain$Tracks$State$download(a);
		case 'GotSearchResults':
			var a = msg.a;
			return $author$project$Brain$Tracks$State$gotSearchResults(a);
		case 'MakeArtworkTrackUrls':
			var a = msg.a;
			return $author$project$Brain$Tracks$State$makeArtworkTrackUrls(a);
		case 'RemoveTracksBySourceId':
			var a = msg.a;
			return $author$project$Brain$Tracks$State$removeBySourceId(a);
		case 'RemoveTracksFromCache':
			var a = msg.a;
			return $author$project$Brain$Tracks$State$removeFromCache(a);
		case 'ReplaceTrackTags':
			var a = msg.a;
			return $author$project$Brain$Tracks$State$replaceTags(a);
		case 'Search':
			var a = msg.a;
			return $author$project$Brain$Tracks$State$search(a);
		case 'StoreTracksInCache':
			var a = msg.a;
			return $author$project$Brain$Tracks$State$storeInCache(a);
		case 'SyncTrackTags':
			var a = msg.a;
			return $author$project$Brain$Tracks$State$syncTrackTags(a);
		case 'UpdateSearchIndex':
			var a = msg.a;
			return $author$project$Brain$Tracks$State$updateSearchIndex(a);
		case 'ProcessingMsg':
			var a = msg.a;
			return $author$project$Brain$Sources$Processing$State$update(a);
		case 'UserMsg':
			var a = msg.a;
			return $author$project$Brain$User$State$update(a);
		case 'RefreshedAccessToken':
			var a = msg.a;
			return $author$project$Brain$Other$State$refreshedAccessToken(a);
		case 'SetCurrentTime':
			var a = msg.a;
			return $author$project$Brain$Other$State$setCurrentTime(a);
		default:
			var a = msg.a;
			return $author$project$Brain$Other$State$toCache(a);
	}
};
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Brain$main = $elm$core$Platform$worker(
	{init: $author$project$Brain$init, subscriptions: $author$project$Brain$subscriptions, update: $author$project$Brain$update});
_Platform_export({'Brain':{'init':$author$project$Brain$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (initialUrl) {
			return $elm$json$Json$Decode$succeed(
				{initialUrl: initialUrl});
		},
		A2($elm$json$Json$Decode$field, 'initialUrl', $elm$json$Json$Decode$string)))(0)}});}(this));
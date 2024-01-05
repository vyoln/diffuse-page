import {
  __export
} from "./chunk-5BWDWTGZ.js";

// node_modules/uint8arrays/dist/src/util/as-uint8array.js
function asUint8Array(buf) {
  if (globalThis.Buffer != null) {
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  return buf;
}

// node_modules/uint8arrays/node_modules/multiformats/src/bases/identity.js
var identity_exports = {};
__export(identity_exports, {
  identity: () => identity
});

// node_modules/uint8arrays/node_modules/multiformats/vendor/base-x.js
function base(ALPHABET, name3) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + " is ambiguous");
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode13(source) {
    if (source instanceof Uint8Array)
      ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length4 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i2 = 0;
      for (var it1 = size - 1; (carry !== 0 || i2 < length4) && it1 !== -1; it1--, i2++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length4 = i2;
      pbegin++;
    }
    var it2 = size - length4;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length4 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i2 = 0;
      for (var it3 = size - 1; (carry !== 0 || i2 < length4) && it3 !== -1; it3--, i2++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length4 = i2;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length4;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j2 = zeroes;
    while (it4 !== size) {
      vch[j2++] = b256[it4++];
    }
    return vch;
  }
  function decode17(string3) {
    var buffer = decodeUnsafe(string3);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name3} character`);
  }
  return {
    encode: encode13,
    decodeUnsafe,
    decode: decode17
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
var base_x_default = _brrp__multiformats_scope_baseX;

// node_modules/uint8arrays/node_modules/multiformats/src/bytes.js
var empty = new Uint8Array(0);
var equals = (aa, bb) => {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
var coerce = (o) => {
  if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
var fromString = (str) => new TextEncoder().encode(str);
var toString = (b) => new TextDecoder().decode(b);

// node_modules/uint8arrays/node_modules/multiformats/src/bases/base.js
var Encoder = class {
  /**
   * @param {Base} name
   * @param {Prefix} prefix
   * @param {(bytes:Uint8Array) => string} baseEncode
   */
  constructor(name3, prefix, baseEncode) {
    this.name = name3;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {API.Multibase<Prefix>}
   */
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};
var Decoder = class {
  /**
   * @param {Base} name
   * @param {Prefix} prefix
   * @param {(text:string) => Uint8Array} baseDecode
   */
  constructor(name3, prefix, baseDecode) {
    this.name = name3;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = /** @type {number} */
    prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  /**
   * @param {string} text
   */
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  /**
   * @template {string} OtherPrefix
   * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
   * @returns {ComposedDecoder<Prefix|OtherPrefix>}
   */
  or(decoder) {
    return or(this, decoder);
  }
};
var ComposedDecoder = class {
  /**
   * @param {Decoders<Prefix>} decoders
   */
  constructor(decoders) {
    this.decoders = decoders;
  }
  /**
   * @template {string} OtherPrefix
   * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
   * @returns {ComposedDecoder<Prefix|OtherPrefix>}
   */
  or(decoder) {
    return or(this, decoder);
  }
  /**
   * @param {string} input
   * @returns {Uint8Array}
   */
  decode(input) {
    const prefix = (
      /** @type {Prefix} */
      input[0]
    );
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
};
var or = (left, right) => new ComposedDecoder(
  /** @type {Decoders<L|R>} */
  {
    ...left.decoders || { [
      /** @type API.UnibaseDecoder<L> */
      left.prefix
    ]: left },
    ...right.decoders || { [
      /** @type API.UnibaseDecoder<R> */
      right.prefix
    ]: right }
  }
);
var Codec = class {
  /**
   * @param {Base} name
   * @param {Prefix} prefix
   * @param {(bytes:Uint8Array) => string} baseEncode
   * @param {(text:string) => Uint8Array} baseDecode
   */
  constructor(name3, prefix, baseEncode, baseDecode) {
    this.name = name3;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name3, prefix, baseEncode);
    this.decoder = new Decoder(name3, prefix, baseDecode);
  }
  /**
   * @param {Uint8Array} input
   */
  encode(input) {
    return this.encoder.encode(input);
  }
  /**
   * @param {string} input
   */
  decode(input) {
    return this.decoder.decode(input);
  }
};
var from = ({ name: name3, prefix, encode: encode13, decode: decode17 }) => new Codec(name3, prefix, encode13, decode17);
var baseX = ({ prefix, name: name3, alphabet: alphabet3 }) => {
  const { encode: encode13, decode: decode17 } = base_x_default(alphabet3, name3);
  return from({
    prefix,
    name: name3,
    encode: encode13,
    /**
     * @param {string} text
     */
    decode: (text) => coerce(decode17(text))
  });
};
var decode = (string3, alphabet3, bitsPerChar, name3) => {
  const codes = {};
  for (let i = 0; i < alphabet3.length; ++i) {
    codes[alphabet3[i]] = i;
  }
  let end = string3.length;
  while (string3[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string3[i]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name3} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
var encode = (data, alphabet3, bitsPerChar) => {
  const pad = alphabet3[alphabet3.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet3[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet3[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
var rfc4648 = ({ name: name3, prefix, bitsPerChar, alphabet: alphabet3 }) => {
  return from({
    prefix,
    name: name3,
    encode(input) {
      return encode(input, alphabet3, bitsPerChar);
    },
    decode(input) {
      return decode(input, alphabet3, bitsPerChar, name3);
    }
  });
};

// node_modules/uint8arrays/node_modules/multiformats/src/bases/identity.js
var identity = from({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString(buf),
  decode: (str) => fromString(str)
});

// node_modules/uint8arrays/node_modules/multiformats/src/bases/base2.js
var base2_exports = {};
__export(base2_exports, {
  base2: () => base2
});
var base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});

// node_modules/uint8arrays/node_modules/multiformats/src/bases/base8.js
var base8_exports = {};
__export(base8_exports, {
  base8: () => base8
});
var base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});

// node_modules/uint8arrays/node_modules/multiformats/src/bases/base10.js
var base10_exports = {};
__export(base10_exports, {
  base10: () => base10
});
var base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});

// node_modules/uint8arrays/node_modules/multiformats/src/bases/base16.js
var base16_exports = {};
__export(base16_exports, {
  base16: () => base16,
  base16upper: () => base16upper
});
var base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
var base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});

// node_modules/uint8arrays/node_modules/multiformats/src/bases/base32.js
var base32_exports = {};
__export(base32_exports, {
  base32: () => base32,
  base32hex: () => base32hex,
  base32hexpad: () => base32hexpad,
  base32hexpadupper: () => base32hexpadupper,
  base32hexupper: () => base32hexupper,
  base32pad: () => base32pad,
  base32padupper: () => base32padupper,
  base32upper: () => base32upper,
  base32z: () => base32z
});
var base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
var base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
var base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
var base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
var base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
var base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
var base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
var base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
var base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});

// node_modules/uint8arrays/node_modules/multiformats/src/bases/base36.js
var base36_exports = {};
__export(base36_exports, {
  base36: () => base36,
  base36upper: () => base36upper
});
var base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
var base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});

// node_modules/uint8arrays/node_modules/multiformats/src/bases/base58.js
var base58_exports = {};
__export(base58_exports, {
  base58btc: () => base58btc,
  base58flickr: () => base58flickr
});
var base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
var base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});

// node_modules/uint8arrays/node_modules/multiformats/src/bases/base64.js
var base64_exports = {};
__export(base64_exports, {
  base64: () => base64,
  base64pad: () => base64pad,
  base64url: () => base64url,
  base64urlpad: () => base64urlpad
});
var base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
var base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
var base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
var base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});

// node_modules/uint8arrays/node_modules/multiformats/src/bases/base256emoji.js
var base256emoji_exports = {};
__export(base256emoji_exports, {
  base256emoji: () => base256emoji
});
var alphabet = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
var alphabetBytesToChars = (
  /** @type {string[]} */
  alphabet.reduce(
    (p, c, i) => {
      p[i] = c;
      return p;
    },
    /** @type {string[]} */
    []
  )
);
var alphabetCharsToBytes = (
  /** @type {number[]} */
  alphabet.reduce(
    (p, c, i) => {
      p[
        /** @type {number} */
        c.codePointAt(0)
      ] = i;
      return p;
    },
    /** @type {number[]} */
    []
  )
);
function encode2(data) {
  return data.reduce((p, c) => {
    p += alphabetBytesToChars[c];
    return p;
  }, "");
}
function decode2(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[
      /** @type {number} */
      char.codePointAt(0)
    ];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
var base256emoji = from({
  prefix: "\u{1F680}",
  name: "base256emoji",
  encode: encode2,
  decode: decode2
});

// node_modules/uint8arrays/node_modules/multiformats/src/hashes/sha2-browser.js
var sha2_browser_exports = {};
__export(sha2_browser_exports, {
  sha256: () => sha256,
  sha512: () => sha512
});

// node_modules/uint8arrays/node_modules/multiformats/vendor/varint.js
var encode_1 = encode3;
var MSB = 128;
var REST = 127;
var MSBALL = ~REST;
var INT = Math.pow(2, 31);
function encode3(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode3.bytes = offset - oldOffset + 1;
  return out;
}
var decode3 = read;
var MSB$1 = 128;
var REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode3,
  encodingLength: length
};
var _brrp_varint = varint;
var varint_default = _brrp_varint;

// node_modules/uint8arrays/node_modules/multiformats/src/varint.js
var decode4 = (data, offset = 0) => {
  const code3 = varint_default.decode(data, offset);
  return [code3, varint_default.decode.bytes];
};
var encodeTo = (int, target, offset = 0) => {
  varint_default.encode(int, target, offset);
  return target;
};
var encodingLength = (int) => {
  return varint_default.encodingLength(int);
};

// node_modules/uint8arrays/node_modules/multiformats/src/hashes/digest.js
var create = (code3, digest3) => {
  const size = digest3.byteLength;
  const sizeOffset = encodingLength(code3);
  const digestOffset = sizeOffset + encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  encodeTo(code3, bytes, 0);
  encodeTo(size, bytes, sizeOffset);
  bytes.set(digest3, digestOffset);
  return new Digest(code3, size, digest3, bytes);
};
var decode5 = (multihash) => {
  const bytes = coerce(multihash);
  const [code3, sizeOffset] = decode4(bytes);
  const [size, digestOffset] = decode4(bytes.subarray(sizeOffset));
  const digest3 = bytes.subarray(sizeOffset + digestOffset);
  if (digest3.byteLength !== size) {
    throw new Error("Incorrect length");
  }
  return new Digest(code3, size, digest3, bytes);
};
var equals2 = (a, b) => {
  if (a === b) {
    return true;
  } else {
    const data = (
      /** @type {{code?:unknown, size?:unknown, bytes?:unknown}} */
      b
    );
    return a.code === data.code && a.size === data.size && data.bytes instanceof Uint8Array && equals(a.bytes, data.bytes);
  }
};
var Digest = class {
  /**
   * Creates a multihash digest.
   *
   * @param {Code} code
   * @param {Size} size
   * @param {Uint8Array} digest
   * @param {Uint8Array} bytes
   */
  constructor(code3, size, digest3, bytes) {
    this.code = code3;
    this.size = size;
    this.digest = digest3;
    this.bytes = bytes;
  }
};

// node_modules/uint8arrays/node_modules/multiformats/src/hashes/hasher.js
var from2 = ({ name: name3, code: code3, encode: encode13 }) => new Hasher(name3, code3, encode13);
var Hasher = class {
  /**
   *
   * @param {Name} name
   * @param {Code} code
   * @param {(input: Uint8Array) => Await<Uint8Array>} encode
   */
  constructor(name3, code3, encode13) {
    this.name = name3;
    this.code = code3;
    this.encode = encode13;
  }
  /**
   * @param {Uint8Array} input
   * @returns {Await<Digest.Digest<Code, number>>}
   */
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create(this.code, result) : result.then((digest3) => create(this.code, digest3));
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};

// node_modules/uint8arrays/node_modules/multiformats/src/hashes/sha2-browser.js
var sha = (name3) => (
  /**
   * @param {Uint8Array} data
   */
  async (data) => new Uint8Array(await crypto.subtle.digest(name3, data))
);
var sha256 = from2({
  name: "sha2-256",
  code: 18,
  encode: sha("SHA-256")
});
var sha512 = from2({
  name: "sha2-512",
  code: 19,
  encode: sha("SHA-512")
});

// node_modules/uint8arrays/node_modules/multiformats/src/hashes/identity.js
var identity_exports2 = {};
__export(identity_exports2, {
  identity: () => identity2
});
var code = 0;
var name = "identity";
var encode4 = coerce;
var digest = (input) => create(code, encode4(input));
var identity2 = { code, name, encode: encode4, digest };

// node_modules/uint8arrays/node_modules/multiformats/src/codecs/json.js
var textEncoder = new TextEncoder();
var textDecoder = new TextDecoder();

// node_modules/uint8arrays/node_modules/multiformats/src/cid.js
var format = (link, base5) => {
  const { bytes, version: version2 } = link;
  switch (version2) {
    case 0:
      return toStringV0(
        bytes,
        baseCache(link),
        /** @type {API.MultibaseEncoder<"z">} */
        base5 || base58btc.encoder
      );
    default:
      return toStringV1(
        bytes,
        baseCache(link),
        /** @type {API.MultibaseEncoder<Prefix>} */
        base5 || base32.encoder
      );
  }
};
var cache = /* @__PURE__ */ new WeakMap();
var baseCache = (cid) => {
  const baseCache3 = cache.get(cid);
  if (baseCache3 == null) {
    const baseCache4 = /* @__PURE__ */ new Map();
    cache.set(cid, baseCache4);
    return baseCache4;
  }
  return baseCache3;
};
var CID = class _CID {
  /**
   * @param {Version} version - Version of the CID
   * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
   * @param {API.MultihashDigest<Alg>} multihash - (Multi)hash of the of the content.
   * @param {Uint8Array} bytes
   *
   */
  constructor(version2, code3, multihash, bytes) {
    this.code = code3;
    this.version = version2;
    this.multihash = multihash;
    this.bytes = bytes;
    this["/"] = bytes;
  }
  /**
   * Signalling `cid.asCID === cid` has been replaced with `cid['/'] === cid.bytes`
   * please either use `CID.asCID(cid)` or switch to new signalling mechanism
   *
   * @deprecated
   */
  get asCID() {
    return this;
  }
  // ArrayBufferView
  get byteOffset() {
    return this.bytes.byteOffset;
  }
  // ArrayBufferView
  get byteLength() {
    return this.bytes.byteLength;
  }
  /**
   * @returns {CID<Data, API.DAG_PB, API.SHA_256, 0>}
   */
  toV0() {
    switch (this.version) {
      case 0: {
        return (
          /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
          this
        );
      }
      case 1: {
        const { code: code3, multihash } = this;
        if (code3 !== DAG_PB_CODE) {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        return (
          /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
          _CID.createV0(
            /** @type {API.MultihashDigest<API.SHA_256>} */
            multihash
          )
        );
      }
      default: {
        throw Error(
          `Can not convert CID version ${this.version} to version 0. This is a bug please report`
        );
      }
    }
  }
  /**
   * @returns {CID<Data, Format, Alg, 1>}
   */
  toV1() {
    switch (this.version) {
      case 0: {
        const { code: code3, digest: digest3 } = this.multihash;
        const multihash = create(code3, digest3);
        return (
          /** @type {CID<Data, Format, Alg, 1>} */
          _CID.createV1(this.code, multihash)
        );
      }
      case 1: {
        return (
          /** @type {CID<Data, Format, Alg, 1>} */
          this
        );
      }
      default: {
        throw Error(
          `Can not convert CID version ${this.version} to version 1. This is a bug please report`
        );
      }
    }
  }
  /**
   * @param {unknown} other
   * @returns {other is CID<Data, Format, Alg, Version>}
   */
  equals(other) {
    return _CID.equals(this, other);
  }
  /**
   * @template {unknown} Data
   * @template {number} Format
   * @template {number} Alg
   * @template {API.Version} Version
   * @param {API.Link<Data, Format, Alg, Version>} self
   * @param {unknown} other
   * @returns {other is CID}
   */
  static equals(self2, other) {
    const unknown = (
      /** @type {{code?:unknown, version?:unknown, multihash?:unknown}} */
      other
    );
    return unknown && self2.code === unknown.code && self2.version === unknown.version && equals2(self2.multihash, unknown.multihash);
  }
  /**
   * @param {API.MultibaseEncoder<string>} [base]
   * @returns {string}
   */
  toString(base5) {
    return format(this, base5);
  }
  toJSON() {
    return { "/": format(this) };
  }
  link() {
    return this;
  }
  get [Symbol.toStringTag]() {
    return "CID";
  }
  // Legacy
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `CID(${this.toString()})`;
  }
  /**
   * Takes any input `value` and returns a `CID` instance if it was
   * a `CID` otherwise returns `null`. If `value` is instanceof `CID`
   * it will return value back. If `value` is not instance of this CID
   * class, but is compatible CID it will return new instance of this
   * `CID` class. Otherwise returns null.
   *
   * This allows two different incompatible versions of CID library to
   * co-exist and interop as long as binary interface is compatible.
   *
   * @template {unknown} Data
   * @template {number} Format
   * @template {number} Alg
   * @template {API.Version} Version
   * @template {unknown} U
   * @param {API.Link<Data, Format, Alg, Version>|U} input
   * @returns {CID<Data, Format, Alg, Version>|null}
   */
  static asCID(input) {
    if (input == null) {
      return null;
    }
    const value = (
      /** @type {any} */
      input
    );
    if (value instanceof _CID) {
      return value;
    } else if (value["/"] != null && value["/"] === value.bytes || value.asCID === value) {
      const { version: version2, code: code3, multihash, bytes } = value;
      return new _CID(
        version2,
        code3,
        /** @type {API.MultihashDigest<Alg>} */
        multihash,
        bytes || encodeCID(version2, code3, multihash.bytes)
      );
    } else if (value[cidSymbol] === true) {
      const { version: version2, multihash, code: code3 } = value;
      const digest3 = (
        /** @type {API.MultihashDigest<Alg>} */
        decode5(multihash)
      );
      return _CID.create(version2, code3, digest3);
    } else {
      return null;
    }
  }
  /**
   *
   * @template {unknown} Data
   * @template {number} Format
   * @template {number} Alg
   * @template {API.Version} Version
   * @param {Version} version - Version of the CID
   * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
   * @param {API.MultihashDigest<Alg>} digest - (Multi)hash of the of the content.
   * @returns {CID<Data, Format, Alg, Version>}
   */
  static create(version2, code3, digest3) {
    if (typeof code3 !== "number") {
      throw new Error("String codecs are no longer supported");
    }
    if (!(digest3.bytes instanceof Uint8Array)) {
      throw new Error("Invalid digest");
    }
    switch (version2) {
      case 0: {
        if (code3 !== DAG_PB_CODE) {
          throw new Error(
            `Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`
          );
        } else {
          return new _CID(version2, code3, digest3, digest3.bytes);
        }
      }
      case 1: {
        const bytes = encodeCID(version2, code3, digest3.bytes);
        return new _CID(version2, code3, digest3, bytes);
      }
      default: {
        throw new Error("Invalid version");
      }
    }
  }
  /**
   * Simplified version of `create` for CIDv0.
   *
   * @template {unknown} [T=unknown]
   * @param {API.MultihashDigest<typeof SHA_256_CODE>} digest - Multihash.
   * @returns {CID<T, typeof DAG_PB_CODE, typeof SHA_256_CODE, 0>}
   */
  static createV0(digest3) {
    return _CID.create(0, DAG_PB_CODE, digest3);
  }
  /**
   * Simplified version of `create` for CIDv1.
   *
   * @template {unknown} Data
   * @template {number} Code
   * @template {number} Alg
   * @param {Code} code - Content encoding format code.
   * @param {API.MultihashDigest<Alg>} digest - Miltihash of the content.
   * @returns {CID<Data, Code, Alg, 1>}
   */
  static createV1(code3, digest3) {
    return _CID.create(1, code3, digest3);
  }
  /**
   * Decoded a CID from its binary representation. The byte array must contain
   * only the CID with no additional bytes.
   *
   * An error will be thrown if the bytes provided do not contain a valid
   * binary representation of a CID.
   *
   * @template {unknown} Data
   * @template {number} Code
   * @template {number} Alg
   * @template {API.Version} Ver
   * @param {API.ByteView<API.Link<Data, Code, Alg, Ver>>} bytes
   * @returns {CID<Data, Code, Alg, Ver>}
   */
  static decode(bytes) {
    const [cid, remainder] = _CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error("Incorrect length");
    }
    return cid;
  }
  /**
   * Decoded a CID from its binary representation at the beginning of a byte
   * array.
   *
   * Returns an array with the first element containing the CID and the second
   * element containing the remainder of the original byte array. The remainder
   * will be a zero-length byte array if the provided bytes only contained a
   * binary CID representation.
   *
   * @template {unknown} T
   * @template {number} C
   * @template {number} A
   * @template {API.Version} V
   * @param {API.ByteView<API.Link<T, C, A, V>>} bytes
   * @returns {[CID<T, C, A, V>, Uint8Array]}
   */
  static decodeFirst(bytes) {
    const specs = _CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce(
      bytes.subarray(prefixSize, prefixSize + specs.multihashSize)
    );
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error("Incorrect length");
    }
    const digestBytes = multihashBytes.subarray(
      specs.multihashSize - specs.digestSize
    );
    const digest3 = new Digest(
      specs.multihashCode,
      specs.digestSize,
      digestBytes,
      multihashBytes
    );
    const cid = specs.version === 0 ? _CID.createV0(
      /** @type {API.MultihashDigest<API.SHA_256>} */
      digest3
    ) : _CID.createV1(specs.codec, digest3);
    return [
      /** @type {CID<T, C, A, V>} */
      cid,
      bytes.subarray(specs.size)
    ];
  }
  /**
   * Inspect the initial bytes of a CID to determine its properties.
   *
   * Involves decoding up to 4 varints. Typically this will require only 4 to 6
   * bytes but for larger multicodec code values and larger multihash digest
   * lengths these varints can be quite large. It is recommended that at least
   * 10 bytes be made available in the `initialBytes` argument for a complete
   * inspection.
   *
   * @template {unknown} T
   * @template {number} C
   * @template {number} A
   * @template {API.Version} V
   * @param {API.ByteView<API.Link<T, C, A, V>>} initialBytes
   * @returns {{ version:V, codec:C, multihashCode:A, digestSize:number, multihashSize:number, size:number }}
   */
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i, length4] = decode4(initialBytes.subarray(offset));
      offset += length4;
      return i;
    };
    let version2 = (
      /** @type {V} */
      next()
    );
    let codec = (
      /** @type {C} */
      DAG_PB_CODE
    );
    if (
      /** @type {number} */
      version2 === 18
    ) {
      version2 = /** @type {V} */
      0;
      offset = 0;
    } else {
      codec = /** @type {C} */
      next();
    }
    if (version2 !== 0 && version2 !== 1) {
      throw new RangeError(`Invalid CID version ${version2}`);
    }
    const prefixSize = offset;
    const multihashCode = (
      /** @type {A} */
      next()
    );
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return { version: version2, codec, multihashCode, digestSize, multihashSize, size };
  }
  /**
   * Takes cid in a string representation and creates an instance. If `base`
   * decoder is not provided will use a default from the configuration. It will
   * throw an error if encoding of the CID is not compatible with supplied (or
   * a default decoder).
   *
   * @template {string} Prefix
   * @template {unknown} Data
   * @template {number} Code
   * @template {number} Alg
   * @template {API.Version} Ver
   * @param {API.ToString<API.Link<Data, Code, Alg, Ver>, Prefix>} source
   * @param {API.MultibaseDecoder<Prefix>} [base]
   * @returns {CID<Data, Code, Alg, Ver>}
   */
  static parse(source, base5) {
    const [prefix, bytes] = parseCIDtoBytes(source, base5);
    const cid = _CID.decode(bytes);
    if (cid.version === 0 && source[0] !== "Q") {
      throw Error("Version 0 CID string must not include multibase prefix");
    }
    baseCache(cid).set(prefix, source);
    return cid;
  }
};
var parseCIDtoBytes = (source, base5) => {
  switch (source[0]) {
    case "Q": {
      const decoder = base5 || base58btc;
      return [
        /** @type {Prefix} */
        base58btc.prefix,
        decoder.decode(`${base58btc.prefix}${source}`)
      ];
    }
    case base58btc.prefix: {
      const decoder = base5 || base58btc;
      return [
        /** @type {Prefix} */
        base58btc.prefix,
        decoder.decode(source)
      ];
    }
    case base32.prefix: {
      const decoder = base5 || base32;
      return [
        /** @type {Prefix} */
        base32.prefix,
        decoder.decode(source)
      ];
    }
    default: {
      if (base5 == null) {
        throw Error(
          "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
        );
      }
      return [
        /** @type {Prefix} */
        source[0],
        base5.decode(source)
      ];
    }
  }
};
var toStringV0 = (bytes, cache3, base5) => {
  const { prefix } = base5;
  if (prefix !== base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${base5.name} encoding`);
  }
  const cid = cache3.get(prefix);
  if (cid == null) {
    const cid2 = base5.encode(bytes).slice(1);
    cache3.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var toStringV1 = (bytes, cache3, base5) => {
  const { prefix } = base5;
  const cid = cache3.get(prefix);
  if (cid == null) {
    const cid2 = base5.encode(bytes);
    cache3.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var DAG_PB_CODE = 112;
var SHA_256_CODE = 18;
var encodeCID = (version2, code3, multihash) => {
  const codeOffset = encodingLength(version2);
  const hashOffset = codeOffset + encodingLength(code3);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo(version2, bytes, 0);
  encodeTo(code3, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
var cidSymbol = Symbol.for("@ipld/js-cid/CID");

// node_modules/uint8arrays/node_modules/multiformats/src/basics.js
var bases = { ...identity_exports, ...base2_exports, ...base8_exports, ...base10_exports, ...base16_exports, ...base32_exports, ...base36_exports, ...base58_exports, ...base64_exports, ...base256emoji_exports };
var hashes = { ...sha2_browser_exports, ...identity_exports2 };

// node_modules/uint8arrays/dist/src/alloc.js
function allocUnsafe(size = 0) {
  if (globalThis.Buffer?.allocUnsafe != null) {
    return asUint8Array(globalThis.Buffer.allocUnsafe(size));
  }
  return new Uint8Array(size);
}

// node_modules/uint8arrays/dist/src/util/bases.js
function createCodec(name3, prefix, encode13, decode17) {
  return {
    name: name3,
    prefix,
    encoder: {
      name: name3,
      prefix,
      encode: encode13
    },
    decoder: {
      decode: decode17
    }
  };
}
var string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
var ascii = createCodec("ascii", "a", (buf) => {
  let string3 = "a";
  for (let i = 0; i < buf.length; i++) {
    string3 += String.fromCharCode(buf[i]);
  }
  return string3;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
var BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
var bases_default = BASES;

// node_modules/uint8arrays/dist/src/from-string.js
function fromString2(string3, encoding = "utf8") {
  const base5 = bases_default[encoding];
  if (base5 == null) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return asUint8Array(globalThis.Buffer.from(string3, "utf-8"));
  }
  return base5.decoder.decode(`${base5.prefix}${string3}`);
}

// node_modules/uint8arrays/dist/src/to-string.js
function toString2(array, encoding = "utf8") {
  const base5 = bases_default[encoding];
  if (base5 == null) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base5.encoder.encode(array).substring(1);
}

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/bases/identity.js
var identity_exports3 = {};
__export(identity_exports3, {
  identity: () => identity3
});

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/vendor/base-x.js
function base3(ALPHABET, name3) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + " is ambiguous");
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode13(source) {
    if (source instanceof Uint8Array)
      ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length4 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i2 = 0;
      for (var it1 = size - 1; (carry !== 0 || i2 < length4) && it1 !== -1; it1--, i2++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length4 = i2;
      pbegin++;
    }
    var it2 = size - length4;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length4 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i2 = 0;
      for (var it3 = size - 1; (carry !== 0 || i2 < length4) && it3 !== -1; it3--, i2++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length4 = i2;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length4;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j2 = zeroes;
    while (it4 !== size) {
      vch[j2++] = b256[it4++];
    }
    return vch;
  }
  function decode17(string3) {
    var buffer = decodeUnsafe(string3);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name3} character`);
  }
  return {
    encode: encode13,
    decodeUnsafe,
    decode: decode17
  };
}
var src2 = base3;
var _brrp__multiformats_scope_baseX2 = src2;
var base_x_default2 = _brrp__multiformats_scope_baseX2;

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/bytes.js
var empty2 = new Uint8Array(0);
var equals3 = (aa, bb) => {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
var coerce2 = (o) => {
  if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
var fromString3 = (str) => new TextEncoder().encode(str);
var toString3 = (b) => new TextDecoder().decode(b);

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/bases/base.js
var Encoder2 = class {
  constructor(name3, prefix, baseEncode) {
    this.name = name3;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};
var Decoder2 = class {
  constructor(name3, prefix, baseDecode) {
    this.name = name3;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or2(this, decoder);
  }
};
var ComposedDecoder2 = class {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or2(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
};
var or2 = (left, right) => new ComposedDecoder2({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
var Codec2 = class {
  constructor(name3, prefix, baseEncode, baseDecode) {
    this.name = name3;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder2(name3, prefix, baseEncode);
    this.decoder = new Decoder2(name3, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
};
var from3 = ({ name: name3, prefix, encode: encode13, decode: decode17 }) => new Codec2(name3, prefix, encode13, decode17);
var baseX2 = ({ prefix, name: name3, alphabet: alphabet3 }) => {
  const { encode: encode13, decode: decode17 } = base_x_default2(alphabet3, name3);
  return from3({
    prefix,
    name: name3,
    encode: encode13,
    decode: (text) => coerce2(decode17(text))
  });
};
var decode6 = (string3, alphabet3, bitsPerChar, name3) => {
  const codes = {};
  for (let i = 0; i < alphabet3.length; ++i) {
    codes[alphabet3[i]] = i;
  }
  let end = string3.length;
  while (string3[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string3[i]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name3} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
var encode5 = (data, alphabet3, bitsPerChar) => {
  const pad = alphabet3[alphabet3.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet3[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet3[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
var rfc46482 = ({ name: name3, prefix, bitsPerChar, alphabet: alphabet3 }) => {
  return from3({
    prefix,
    name: name3,
    encode(input) {
      return encode5(input, alphabet3, bitsPerChar);
    },
    decode(input) {
      return decode6(input, alphabet3, bitsPerChar, name3);
    }
  });
};

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/bases/identity.js
var identity3 = from3({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString3(buf),
  decode: (str) => fromString3(str)
});

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/bases/base2.js
var base2_exports2 = {};
__export(base2_exports2, {
  base2: () => base22
});
var base22 = rfc46482({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/bases/base8.js
var base8_exports2 = {};
__export(base8_exports2, {
  base8: () => base82
});
var base82 = rfc46482({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/bases/base10.js
var base10_exports2 = {};
__export(base10_exports2, {
  base10: () => base102
});
var base102 = baseX2({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/bases/base16.js
var base16_exports2 = {};
__export(base16_exports2, {
  base16: () => base162,
  base16upper: () => base16upper2
});
var base162 = rfc46482({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
var base16upper2 = rfc46482({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/bases/base32.js
var base32_exports2 = {};
__export(base32_exports2, {
  base32: () => base322,
  base32hex: () => base32hex2,
  base32hexpad: () => base32hexpad2,
  base32hexpadupper: () => base32hexpadupper2,
  base32hexupper: () => base32hexupper2,
  base32pad: () => base32pad2,
  base32padupper: () => base32padupper2,
  base32upper: () => base32upper2,
  base32z: () => base32z2
});
var base322 = rfc46482({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
var base32upper2 = rfc46482({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
var base32pad2 = rfc46482({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
var base32padupper2 = rfc46482({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
var base32hex2 = rfc46482({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
var base32hexupper2 = rfc46482({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
var base32hexpad2 = rfc46482({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
var base32hexpadupper2 = rfc46482({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
var base32z2 = rfc46482({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/bases/base36.js
var base36_exports2 = {};
__export(base36_exports2, {
  base36: () => base362,
  base36upper: () => base36upper2
});
var base362 = baseX2({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
var base36upper2 = baseX2({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/bases/base58.js
var base58_exports2 = {};
__export(base58_exports2, {
  base58btc: () => base58btc2,
  base58flickr: () => base58flickr2
});
var base58btc2 = baseX2({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
var base58flickr2 = baseX2({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/bases/base64.js
var base64_exports2 = {};
__export(base64_exports2, {
  base64: () => base642,
  base64pad: () => base64pad2,
  base64url: () => base64url2,
  base64urlpad: () => base64urlpad2
});
var base642 = rfc46482({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
var base64pad2 = rfc46482({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
var base64url2 = rfc46482({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
var base64urlpad2 = rfc46482({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/bases/base256emoji.js
var base256emoji_exports2 = {};
__export(base256emoji_exports2, {
  base256emoji: () => base256emoji2
});
var alphabet2 = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
var alphabetBytesToChars2 = alphabet2.reduce((p, c, i) => {
  p[i] = c;
  return p;
}, []);
var alphabetCharsToBytes2 = alphabet2.reduce((p, c, i) => {
  p[c.codePointAt(0)] = i;
  return p;
}, []);
function encode6(data) {
  return data.reduce((p, c) => {
    p += alphabetBytesToChars2[c];
    return p;
  }, "");
}
function decode7(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes2[char.codePointAt(0)];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
var base256emoji2 = from3({
  prefix: "\u{1F680}",
  name: "base256emoji",
  encode: encode6,
  decode: decode7
});

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2_browser_exports2 = {};
__export(sha2_browser_exports2, {
  sha256: () => sha2562,
  sha512: () => sha5122
});

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/vendor/varint.js
var encode_12 = encode7;
var MSB2 = 128;
var REST2 = 127;
var MSBALL2 = ~REST2;
var INT2 = Math.pow(2, 31);
function encode7(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT2) {
    out[offset++] = num & 255 | MSB2;
    num /= 128;
  }
  while (num & MSBALL2) {
    out[offset++] = num & 255 | MSB2;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode7.bytes = offset - oldOffset + 1;
  return out;
}
var decode8 = read2;
var MSB$12 = 128;
var REST$12 = 127;
function read2(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read2.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$12) << shift : (b & REST$12) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$12);
  read2.bytes = counter - offset;
  return res;
}
var N12 = Math.pow(2, 7);
var N22 = Math.pow(2, 14);
var N32 = Math.pow(2, 21);
var N42 = Math.pow(2, 28);
var N52 = Math.pow(2, 35);
var N62 = Math.pow(2, 42);
var N72 = Math.pow(2, 49);
var N82 = Math.pow(2, 56);
var N92 = Math.pow(2, 63);
var length2 = function(value) {
  return value < N12 ? 1 : value < N22 ? 2 : value < N32 ? 3 : value < N42 ? 4 : value < N52 ? 5 : value < N62 ? 6 : value < N72 ? 7 : value < N82 ? 8 : value < N92 ? 9 : 10;
};
var varint2 = {
  encode: encode_12,
  decode: decode8,
  encodingLength: length2
};
var _brrp_varint2 = varint2;
var varint_default2 = _brrp_varint2;

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/varint.js
var decode9 = (data, offset = 0) => {
  const code3 = varint_default2.decode(data, offset);
  return [
    code3,
    varint_default2.decode.bytes
  ];
};
var encodeTo2 = (int, target, offset = 0) => {
  varint_default2.encode(int, target, offset);
  return target;
};
var encodingLength2 = (int) => {
  return varint_default2.encodingLength(int);
};

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/hashes/digest.js
var create2 = (code3, digest3) => {
  const size = digest3.byteLength;
  const sizeOffset = encodingLength2(code3);
  const digestOffset = sizeOffset + encodingLength2(size);
  const bytes = new Uint8Array(digestOffset + size);
  encodeTo2(code3, bytes, 0);
  encodeTo2(size, bytes, sizeOffset);
  bytes.set(digest3, digestOffset);
  return new Digest2(code3, size, digest3, bytes);
};
var decode10 = (multihash) => {
  const bytes = coerce2(multihash);
  const [code3, sizeOffset] = decode9(bytes);
  const [size, digestOffset] = decode9(bytes.subarray(sizeOffset));
  const digest3 = bytes.subarray(sizeOffset + digestOffset);
  if (digest3.byteLength !== size) {
    throw new Error("Incorrect length");
  }
  return new Digest2(code3, size, digest3, bytes);
};
var equals4 = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return a.code === b.code && a.size === b.size && equals3(a.bytes, b.bytes);
  }
};
var Digest2 = class {
  constructor(code3, size, digest3, bytes) {
    this.code = code3;
    this.size = size;
    this.digest = digest3;
    this.bytes = bytes;
  }
};

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/hashes/hasher.js
var from4 = ({ name: name3, code: code3, encode: encode13 }) => new Hasher2(name3, code3, encode13);
var Hasher2 = class {
  constructor(name3, code3, encode13) {
    this.name = name3;
    this.code = code3;
    this.encode = encode13;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create2(this.code, result) : result.then((digest3) => create2(this.code, digest3));
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2 = (name3) => async (data) => new Uint8Array(await crypto.subtle.digest(name3, data));
var sha2562 = from4({
  name: "sha2-256",
  code: 18,
  encode: sha2("SHA-256")
});
var sha5122 = from4({
  name: "sha2-512",
  code: 19,
  encode: sha2("SHA-512")
});

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/hashes/identity.js
var identity_exports4 = {};
__export(identity_exports4, {
  identity: () => identity4
});
var code2 = 0;
var name2 = "identity";
var encode8 = coerce2;
var digest2 = (input) => create2(code2, encode8(input));
var identity4 = {
  code: code2,
  name: name2,
  encode: encode8,
  digest: digest2
};

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/codecs/json.js
var textEncoder2 = new TextEncoder();
var textDecoder2 = new TextDecoder();

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/cid.js
var CID2 = class _CID {
  constructor(version2, code3, multihash, bytes) {
    this.code = code3;
    this.version = version2;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = /* @__PURE__ */ new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: hidden,
      asCID: hidden
    });
  }
  toV0() {
    switch (this.version) {
      case 0: {
        return this;
      }
      default: {
        const { code: code3, multihash } = this;
        if (code3 !== DAG_PB_CODE2) {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        if (multihash.code !== SHA_256_CODE2) {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        return _CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
      case 0: {
        const { code: code3, digest: digest3 } = this.multihash;
        const multihash = create2(code3, digest3);
        return _CID.createV1(this.code, multihash);
      }
      case 1: {
        return this;
      }
      default: {
        throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && equals4(this.multihash, other.multihash);
  }
  toString(base5) {
    const { bytes, version: version2, _baseCache } = this;
    switch (version2) {
      case 0:
        return toStringV02(bytes, _baseCache, base5 || base58btc2.encoder);
      default:
        return toStringV12(bytes, _baseCache, base5 || base322.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return "CID";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "CID(" + this.toString() + ")";
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol2] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error("Deprecated, use .toString()");
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof _CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const { version: version2, code: code3, multihash, bytes } = value;
      return new _CID(version2, code3, multihash, bytes || encodeCID2(version2, code3, multihash.bytes));
    } else if (value != null && value[cidSymbol2] === true) {
      const { version: version2, multihash, code: code3 } = value;
      const digest3 = decode10(multihash);
      return _CID.create(version2, code3, digest3);
    } else {
      return null;
    }
  }
  static create(version2, code3, digest3) {
    if (typeof code3 !== "number") {
      throw new Error("String codecs are no longer supported");
    }
    switch (version2) {
      case 0: {
        if (code3 !== DAG_PB_CODE2) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE2}) block encoding`);
        } else {
          return new _CID(version2, code3, digest3, digest3.bytes);
        }
      }
      case 1: {
        const bytes = encodeCID2(version2, code3, digest3.bytes);
        return new _CID(version2, code3, digest3, bytes);
      }
      default: {
        throw new Error("Invalid version");
      }
    }
  }
  static createV0(digest3) {
    return _CID.create(0, DAG_PB_CODE2, digest3);
  }
  static createV1(code3, digest3) {
    return _CID.create(1, code3, digest3);
  }
  static decode(bytes) {
    const [cid, remainder] = _CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error("Incorrect length");
    }
    return cid;
  }
  static decodeFirst(bytes) {
    const specs = _CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce2(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error("Incorrect length");
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest3 = new Digest2(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? _CID.createV0(digest3) : _CID.createV1(specs.codec, digest3);
    return [
      cid,
      bytes.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i, length4] = decode9(initialBytes.subarray(offset));
      offset += length4;
      return i;
    };
    let version2 = next();
    let codec = DAG_PB_CODE2;
    if (version2 === 18) {
      version2 = 0;
      offset = 0;
    } else if (version2 === 1) {
      codec = next();
    }
    if (version2 !== 0 && version2 !== 1) {
      throw new RangeError(`Invalid CID version ${version2}`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return {
      version: version2,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size
    };
  }
  static parse(source, base5) {
    const [prefix, bytes] = parseCIDtoBytes2(source, base5);
    const cid = _CID.decode(bytes);
    cid._baseCache.set(prefix, source);
    return cid;
  }
};
var parseCIDtoBytes2 = (source, base5) => {
  switch (source[0]) {
    case "Q": {
      const decoder = base5 || base58btc2;
      return [
        base58btc2.prefix,
        decoder.decode(`${base58btc2.prefix}${source}`)
      ];
    }
    case base58btc2.prefix: {
      const decoder = base5 || base58btc2;
      return [
        base58btc2.prefix,
        decoder.decode(source)
      ];
    }
    case base322.prefix: {
      const decoder = base5 || base322;
      return [
        base322.prefix,
        decoder.decode(source)
      ];
    }
    default: {
      if (base5 == null) {
        throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
      }
      return [
        source[0],
        base5.decode(source)
      ];
    }
  }
};
var toStringV02 = (bytes, cache3, base5) => {
  const { prefix } = base5;
  if (prefix !== base58btc2.prefix) {
    throw Error(`Cannot string encode V0 in ${base5.name} encoding`);
  }
  const cid = cache3.get(prefix);
  if (cid == null) {
    const cid2 = base5.encode(bytes).slice(1);
    cache3.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var toStringV12 = (bytes, cache3, base5) => {
  const { prefix } = base5;
  const cid = cache3.get(prefix);
  if (cid == null) {
    const cid2 = base5.encode(bytes);
    cache3.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var DAG_PB_CODE2 = 112;
var SHA_256_CODE2 = 18;
var encodeCID2 = (version2, code3, multihash) => {
  const codeOffset = encodingLength2(version2);
  const hashOffset = codeOffset + encodingLength2(code3);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo2(version2, bytes, 0);
  encodeTo2(code3, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
var cidSymbol2 = Symbol.for("@ipld/js-cid/CID");
var readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
var hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
var version = "0.0.0-dev";
var deprecate = (range, message) => {
  if (range.test(version)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
var IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

// node_modules/@oddjs/odd/node_modules/uint8arrays/node_modules/multiformats/esm/src/basics.js
var bases2 = {
  ...identity_exports3,
  ...base2_exports2,
  ...base8_exports2,
  ...base10_exports2,
  ...base16_exports2,
  ...base32_exports2,
  ...base36_exports2,
  ...base58_exports2,
  ...base64_exports2,
  ...base256emoji_exports2
};
var hashes2 = {
  ...sha2_browser_exports2,
  ...identity_exports4
};

// node_modules/@oddjs/odd/node_modules/uint8arrays/esm/src/util/as-uint8array.js
function asUint8Array2(buf) {
  if (globalThis.Buffer != null) {
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  return buf;
}

// node_modules/@oddjs/odd/node_modules/uint8arrays/esm/src/alloc.js
function allocUnsafe2(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return asUint8Array2(globalThis.Buffer.allocUnsafe(size));
  }
  return new Uint8Array(size);
}

// node_modules/@oddjs/odd/node_modules/uint8arrays/esm/src/util/bases.js
function createCodec2(name3, prefix, encode13, decode17) {
  return {
    name: name3,
    prefix,
    encoder: {
      name: name3,
      prefix,
      encode: encode13
    },
    decoder: { decode: decode17 }
  };
}
var string2 = createCodec2("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
var ascii2 = createCodec2("ascii", "a", (buf) => {
  let string3 = "a";
  for (let i = 0; i < buf.length; i++) {
    string3 += String.fromCharCode(buf[i]);
  }
  return string3;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe2(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
var BASES2 = {
  utf8: string2,
  "utf-8": string2,
  hex: bases2.base16,
  latin1: ascii2,
  ascii: ascii2,
  binary: ascii2,
  ...bases2
};
var bases_default2 = BASES2;

// node_modules/@oddjs/odd/node_modules/uint8arrays/esm/src/from-string.js
function fromString4(string3, encoding = "utf8") {
  const base5 = bases_default2[encoding];
  if (!base5) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return asUint8Array2(globalThis.Buffer.from(string3, "utf-8"));
  }
  return base5.decoder.decode(`${base5.prefix}${string3}`);
}

// node_modules/@oddjs/odd/node_modules/uint8arrays/esm/src/concat.js
function concat(arrays, length4) {
  if (!length4) {
    length4 = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe2(length4);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return asUint8Array2(output);
}

// node_modules/@oddjs/odd/node_modules/uint8arrays/esm/src/to-string.js
function toString4(array, encoding = "utf8") {
  const base5 = bases_default2[encoding];
  if (!base5) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base5.encoder.encode(array).substring(1);
}

// node_modules/@oddjs/odd/lib/common/base64.js
var base64_exports3 = {};
__export(base64_exports3, {
  decode: () => decode11,
  encode: () => encode9,
  makeUrlSafe: () => makeUrlSafe,
  makeUrlUnsafe: () => makeUrlUnsafe,
  urlDecode: () => urlDecode,
  urlEncode: () => urlEncode
});
function decode11(base643) {
  return toString4(fromString4(base643, "base64pad"));
}
function encode9(str) {
  return toString4(fromString4(str), "base64pad");
}
function urlDecode(base643) {
  return decode11(makeUrlUnsafe(base643));
}
function urlEncode(str) {
  return makeUrlSafe(encode9(str));
}
function makeUrlSafe(a) {
  return a.replace(/\//g, "_").replace(/\+/g, "-").replace(/=+$/, "");
}
function makeUrlUnsafe(a) {
  return a.replace(/_/g, "/").replace(/-/g, "+");
}

// node_modules/keystore-idb/lib/types.js
var CryptoSystem;
(function(CryptoSystem2) {
  CryptoSystem2["ECC"] = "ecc";
  CryptoSystem2["RSA"] = "rsa";
})(CryptoSystem || (CryptoSystem = {}));
var EccCurve;
(function(EccCurve2) {
  EccCurve2["P_256"] = "P-256";
  EccCurve2["P_384"] = "P-384";
  EccCurve2["P_521"] = "P-521";
})(EccCurve || (EccCurve = {}));
var RsaSize;
(function(RsaSize2) {
  RsaSize2[RsaSize2["B1024"] = 1024] = "B1024";
  RsaSize2[RsaSize2["B2048"] = 2048] = "B2048";
  RsaSize2[RsaSize2["B4096"] = 4096] = "B4096";
})(RsaSize || (RsaSize = {}));
var SymmAlg;
(function(SymmAlg2) {
  SymmAlg2["AES_CTR"] = "AES-CTR";
  SymmAlg2["AES_CBC"] = "AES-CBC";
  SymmAlg2["AES_GCM"] = "AES-GCM";
})(SymmAlg || (SymmAlg = {}));
var SymmKeyLength;
(function(SymmKeyLength2) {
  SymmKeyLength2[SymmKeyLength2["B128"] = 128] = "B128";
  SymmKeyLength2[SymmKeyLength2["B192"] = 192] = "B192";
  SymmKeyLength2[SymmKeyLength2["B256"] = 256] = "B256";
})(SymmKeyLength || (SymmKeyLength = {}));
var HashAlg;
(function(HashAlg2) {
  HashAlg2["SHA_1"] = "SHA-1";
  HashAlg2["SHA_256"] = "SHA-256";
  HashAlg2["SHA_384"] = "SHA-384";
  HashAlg2["SHA_512"] = "SHA-512";
})(HashAlg || (HashAlg = {}));
var CharSize;
(function(CharSize2) {
  CharSize2[CharSize2["B8"] = 8] = "B8";
  CharSize2[CharSize2["B16"] = 16] = "B16";
})(CharSize || (CharSize = {}));
var KeyUse;
(function(KeyUse2) {
  KeyUse2["Exchange"] = "exchange";
  KeyUse2["Write"] = "write";
})(KeyUse || (KeyUse = {}));

// node_modules/@oddjs/odd/lib/components/crypto/implementation.js
var implementation_exports = {};
__export(implementation_exports, {
  SymmAlg: () => SymmAlg
});

// node_modules/@oddjs/odd/node_modules/multiformats/vendor/varint.js
var encode_13 = encode10;
var MSB3 = 128;
var REST3 = 127;
var MSBALL3 = ~REST3;
var INT3 = Math.pow(2, 31);
function encode10(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT3) {
    out[offset++] = num & 255 | MSB3;
    num /= 128;
  }
  while (num & MSBALL3) {
    out[offset++] = num & 255 | MSB3;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode10.bytes = offset - oldOffset + 1;
  return out;
}
var decode12 = read3;
var MSB$13 = 128;
var REST$13 = 127;
function read3(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read3.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$13) << shift : (b & REST$13) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$13);
  read3.bytes = counter - offset;
  return res;
}
var N13 = Math.pow(2, 7);
var N23 = Math.pow(2, 14);
var N33 = Math.pow(2, 21);
var N43 = Math.pow(2, 28);
var N53 = Math.pow(2, 35);
var N63 = Math.pow(2, 42);
var N73 = Math.pow(2, 49);
var N83 = Math.pow(2, 56);
var N93 = Math.pow(2, 63);
var length3 = function(value) {
  return value < N13 ? 1 : value < N23 ? 2 : value < N33 ? 3 : value < N43 ? 4 : value < N53 ? 5 : value < N63 ? 6 : value < N73 ? 7 : value < N83 ? 8 : value < N93 ? 9 : 10;
};
var varint3 = {
  encode: encode_13,
  decode: decode12,
  encodingLength: length3
};
var _brrp_varint3 = varint3;
var varint_default3 = _brrp_varint3;

// node_modules/@oddjs/odd/node_modules/multiformats/src/varint.js
var decode13 = (data, offset = 0) => {
  const code3 = varint_default3.decode(data, offset);
  return [code3, varint_default3.decode.bytes];
};
var encodeTo3 = (int, target, offset = 0) => {
  varint_default3.encode(int, target, offset);
  return target;
};
var encodingLength3 = (int) => {
  return varint_default3.encodingLength(int);
};

// node_modules/@oddjs/odd/node_modules/multiformats/src/bytes.js
var empty3 = new Uint8Array(0);
var equals6 = (aa, bb) => {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
var coerce3 = (o) => {
  if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};

// node_modules/@oddjs/odd/node_modules/multiformats/src/hashes/digest.js
var create3 = (code3, digest3) => {
  const size = digest3.byteLength;
  const sizeOffset = encodingLength3(code3);
  const digestOffset = sizeOffset + encodingLength3(size);
  const bytes = new Uint8Array(digestOffset + size);
  encodeTo3(code3, bytes, 0);
  encodeTo3(size, bytes, sizeOffset);
  bytes.set(digest3, digestOffset);
  return new Digest3(code3, size, digest3, bytes);
};
var decode14 = (multihash) => {
  const bytes = coerce3(multihash);
  const [code3, sizeOffset] = decode13(bytes);
  const [size, digestOffset] = decode13(bytes.subarray(sizeOffset));
  const digest3 = bytes.subarray(sizeOffset + digestOffset);
  if (digest3.byteLength !== size) {
    throw new Error("Incorrect length");
  }
  return new Digest3(code3, size, digest3, bytes);
};
var equals7 = (a, b) => {
  if (a === b) {
    return true;
  } else {
    const data = (
      /** @type {{code?:unknown, size?:unknown, bytes?:unknown}} */
      b
    );
    return a.code === data.code && a.size === data.size && data.bytes instanceof Uint8Array && equals6(a.bytes, data.bytes);
  }
};
var Digest3 = class {
  /**
   * Creates a multihash digest.
   *
   * @param {Code} code
   * @param {Size} size
   * @param {Uint8Array} digest
   * @param {Uint8Array} bytes
   */
  constructor(code3, size, digest3, bytes) {
    this.code = code3;
    this.size = size;
    this.digest = digest3;
    this.bytes = bytes;
  }
};

// node_modules/@oddjs/odd/node_modules/multiformats/vendor/base-x.js
function base4(ALPHABET, name3) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + " is ambiguous");
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode13(source) {
    if (source instanceof Uint8Array)
      ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length4 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i2 = 0;
      for (var it1 = size - 1; (carry !== 0 || i2 < length4) && it1 !== -1; it1--, i2++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length4 = i2;
      pbegin++;
    }
    var it2 = size - length4;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length4 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i2 = 0;
      for (var it3 = size - 1; (carry !== 0 || i2 < length4) && it3 !== -1; it3--, i2++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length4 = i2;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length4;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j2 = zeroes;
    while (it4 !== size) {
      vch[j2++] = b256[it4++];
    }
    return vch;
  }
  function decode17(string3) {
    var buffer = decodeUnsafe(string3);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name3} character`);
  }
  return {
    encode: encode13,
    decodeUnsafe,
    decode: decode17
  };
}
var src3 = base4;
var _brrp__multiformats_scope_baseX3 = src3;
var base_x_default3 = _brrp__multiformats_scope_baseX3;

// node_modules/@oddjs/odd/node_modules/multiformats/src/bases/base.js
var Encoder3 = class {
  /**
   * @param {Base} name
   * @param {Prefix} prefix
   * @param {(bytes:Uint8Array) => string} baseEncode
   */
  constructor(name3, prefix, baseEncode) {
    this.name = name3;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {API.Multibase<Prefix>}
   */
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};
var Decoder3 = class {
  /**
   * @param {Base} name
   * @param {Prefix} prefix
   * @param {(text:string) => Uint8Array} baseDecode
   */
  constructor(name3, prefix, baseDecode) {
    this.name = name3;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = /** @type {number} */
    prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  /**
   * @param {string} text
   */
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  /**
   * @template {string} OtherPrefix
   * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
   * @returns {ComposedDecoder<Prefix|OtherPrefix>}
   */
  or(decoder) {
    return or3(this, decoder);
  }
};
var ComposedDecoder3 = class {
  /**
   * @param {Decoders<Prefix>} decoders
   */
  constructor(decoders) {
    this.decoders = decoders;
  }
  /**
   * @template {string} OtherPrefix
   * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
   * @returns {ComposedDecoder<Prefix|OtherPrefix>}
   */
  or(decoder) {
    return or3(this, decoder);
  }
  /**
   * @param {string} input
   * @returns {Uint8Array}
   */
  decode(input) {
    const prefix = (
      /** @type {Prefix} */
      input[0]
    );
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
};
var or3 = (left, right) => new ComposedDecoder3(
  /** @type {Decoders<L|R>} */
  {
    ...left.decoders || { [
      /** @type API.UnibaseDecoder<L> */
      left.prefix
    ]: left },
    ...right.decoders || { [
      /** @type API.UnibaseDecoder<R> */
      right.prefix
    ]: right }
  }
);
var Codec3 = class {
  /**
   * @param {Base} name
   * @param {Prefix} prefix
   * @param {(bytes:Uint8Array) => string} baseEncode
   * @param {(text:string) => Uint8Array} baseDecode
   */
  constructor(name3, prefix, baseEncode, baseDecode) {
    this.name = name3;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder3(name3, prefix, baseEncode);
    this.decoder = new Decoder3(name3, prefix, baseDecode);
  }
  /**
   * @param {Uint8Array} input
   */
  encode(input) {
    return this.encoder.encode(input);
  }
  /**
   * @param {string} input
   */
  decode(input) {
    return this.decoder.decode(input);
  }
};
var from5 = ({ name: name3, prefix, encode: encode13, decode: decode17 }) => new Codec3(name3, prefix, encode13, decode17);
var baseX3 = ({ prefix, name: name3, alphabet: alphabet3 }) => {
  const { encode: encode13, decode: decode17 } = base_x_default3(alphabet3, name3);
  return from5({
    prefix,
    name: name3,
    encode: encode13,
    /**
     * @param {string} text
     */
    decode: (text) => coerce3(decode17(text))
  });
};
var decode15 = (string3, alphabet3, bitsPerChar, name3) => {
  const codes = {};
  for (let i = 0; i < alphabet3.length; ++i) {
    codes[alphabet3[i]] = i;
  }
  let end = string3.length;
  while (string3[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string3[i]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name3} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
var encode11 = (data, alphabet3, bitsPerChar) => {
  const pad = alphabet3[alphabet3.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet3[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet3[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
var rfc46483 = ({ name: name3, prefix, bitsPerChar, alphabet: alphabet3 }) => {
  return from5({
    prefix,
    name: name3,
    encode(input) {
      return encode11(input, alphabet3, bitsPerChar);
    },
    decode(input) {
      return decode15(input, alphabet3, bitsPerChar, name3);
    }
  });
};

// node_modules/@oddjs/odd/node_modules/multiformats/src/bases/base58.js
var base58btc3 = baseX3({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
var base58flickr3 = baseX3({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});

// node_modules/@oddjs/odd/node_modules/multiformats/src/bases/base32.js
var base323 = rfc46483({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
var base32upper3 = rfc46483({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
var base32pad3 = rfc46483({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
var base32padupper3 = rfc46483({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
var base32hex3 = rfc46483({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
var base32hexupper3 = rfc46483({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
var base32hexpad3 = rfc46483({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
var base32hexpadupper3 = rfc46483({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
var base32z3 = rfc46483({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});

// node_modules/@oddjs/odd/node_modules/multiformats/src/cid.js
var format2 = (link, base5) => {
  const { bytes, version: version2 } = link;
  switch (version2) {
    case 0:
      return toStringV03(
        bytes,
        baseCache2(link),
        /** @type {API.MultibaseEncoder<"z">} */
        base5 || base58btc3.encoder
      );
    default:
      return toStringV13(
        bytes,
        baseCache2(link),
        /** @type {API.MultibaseEncoder<Prefix>} */
        base5 || base323.encoder
      );
  }
};
var cache2 = /* @__PURE__ */ new WeakMap();
var baseCache2 = (cid) => {
  const baseCache3 = cache2.get(cid);
  if (baseCache3 == null) {
    const baseCache4 = /* @__PURE__ */ new Map();
    cache2.set(cid, baseCache4);
    return baseCache4;
  }
  return baseCache3;
};
var CID3 = class _CID {
  /**
   * @param {Version} version - Version of the CID
   * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
   * @param {API.MultihashDigest<Alg>} multihash - (Multi)hash of the of the content.
   * @param {Uint8Array} bytes
   *
   */
  constructor(version2, code3, multihash, bytes) {
    this.code = code3;
    this.version = version2;
    this.multihash = multihash;
    this.bytes = bytes;
    this["/"] = bytes;
  }
  /**
   * Signalling `cid.asCID === cid` has been replaced with `cid['/'] === cid.bytes`
   * please either use `CID.asCID(cid)` or switch to new signalling mechanism
   *
   * @deprecated
   */
  get asCID() {
    return this;
  }
  // ArrayBufferView
  get byteOffset() {
    return this.bytes.byteOffset;
  }
  // ArrayBufferView
  get byteLength() {
    return this.bytes.byteLength;
  }
  /**
   * @returns {CID<Data, API.DAG_PB, API.SHA_256, 0>}
   */
  toV0() {
    switch (this.version) {
      case 0: {
        return (
          /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
          this
        );
      }
      case 1: {
        const { code: code3, multihash } = this;
        if (code3 !== DAG_PB_CODE3) {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        if (multihash.code !== SHA_256_CODE3) {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        return (
          /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
          _CID.createV0(
            /** @type {API.MultihashDigest<API.SHA_256>} */
            multihash
          )
        );
      }
      default: {
        throw Error(
          `Can not convert CID version ${this.version} to version 0. This is a bug please report`
        );
      }
    }
  }
  /**
   * @returns {CID<Data, Format, Alg, 1>}
   */
  toV1() {
    switch (this.version) {
      case 0: {
        const { code: code3, digest: digest3 } = this.multihash;
        const multihash = create3(code3, digest3);
        return (
          /** @type {CID<Data, Format, Alg, 1>} */
          _CID.createV1(this.code, multihash)
        );
      }
      case 1: {
        return (
          /** @type {CID<Data, Format, Alg, 1>} */
          this
        );
      }
      default: {
        throw Error(
          `Can not convert CID version ${this.version} to version 1. This is a bug please report`
        );
      }
    }
  }
  /**
   * @param {unknown} other
   * @returns {other is CID<Data, Format, Alg, Version>}
   */
  equals(other) {
    return _CID.equals(this, other);
  }
  /**
   * @template {unknown} Data
   * @template {number} Format
   * @template {number} Alg
   * @template {API.Version} Version
   * @param {API.Link<Data, Format, Alg, Version>} self
   * @param {unknown} other
   * @returns {other is CID}
   */
  static equals(self2, other) {
    const unknown = (
      /** @type {{code?:unknown, version?:unknown, multihash?:unknown}} */
      other
    );
    return unknown && self2.code === unknown.code && self2.version === unknown.version && equals7(self2.multihash, unknown.multihash);
  }
  /**
   * @param {API.MultibaseEncoder<string>} [base]
   * @returns {string}
   */
  toString(base5) {
    return format2(this, base5);
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  link() {
    return this;
  }
  get [Symbol.toStringTag]() {
    return "CID";
  }
  // Legacy
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `CID(${this.toString()})`;
  }
  /**
   * Takes any input `value` and returns a `CID` instance if it was
   * a `CID` otherwise returns `null`. If `value` is instanceof `CID`
   * it will return value back. If `value` is not instance of this CID
   * class, but is compatible CID it will return new instance of this
   * `CID` class. Otherwise returs null.
   *
   * This allows two different incompatible versions of CID library to
   * co-exist and interop as long as binary interface is compatible.
   *
   * @template {unknown} Data
   * @template {number} Format
   * @template {number} Alg
   * @template {API.Version} Version
   * @template {unknown} U
   * @param {API.Link<Data, Format, Alg, Version>|U} input
   * @returns {CID<Data, Format, Alg, Version>|null}
   */
  static asCID(input) {
    if (input == null) {
      return null;
    }
    const value = (
      /** @type {any} */
      input
    );
    if (value instanceof _CID) {
      return value;
    } else if (value["/"] != null && value["/"] === value.bytes || value.asCID === value) {
      const { version: version2, code: code3, multihash, bytes } = value;
      return new _CID(
        version2,
        code3,
        /** @type {API.MultihashDigest<Alg>} */
        multihash,
        bytes || encodeCID3(version2, code3, multihash.bytes)
      );
    } else if (value[cidSymbol3] === true) {
      const { version: version2, multihash, code: code3 } = value;
      const digest3 = (
        /** @type {API.MultihashDigest<Alg>} */
        decode14(multihash)
      );
      return _CID.create(version2, code3, digest3);
    } else {
      return null;
    }
  }
  /**
   *
   * @template {unknown} Data
   * @template {number} Format
   * @template {number} Alg
   * @template {API.Version} Version
   * @param {Version} version - Version of the CID
   * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
   * @param {API.MultihashDigest<Alg>} digest - (Multi)hash of the of the content.
   * @returns {CID<Data, Format, Alg, Version>}
   */
  static create(version2, code3, digest3) {
    if (typeof code3 !== "number") {
      throw new Error("String codecs are no longer supported");
    }
    if (!(digest3.bytes instanceof Uint8Array)) {
      throw new Error("Invalid digest");
    }
    switch (version2) {
      case 0: {
        if (code3 !== DAG_PB_CODE3) {
          throw new Error(
            `Version 0 CID must use dag-pb (code: ${DAG_PB_CODE3}) block encoding`
          );
        } else {
          return new _CID(version2, code3, digest3, digest3.bytes);
        }
      }
      case 1: {
        const bytes = encodeCID3(version2, code3, digest3.bytes);
        return new _CID(version2, code3, digest3, bytes);
      }
      default: {
        throw new Error("Invalid version");
      }
    }
  }
  /**
   * Simplified version of `create` for CIDv0.
   *
   * @template {unknown} [T=unknown]
   * @param {API.MultihashDigest<typeof SHA_256_CODE>} digest - Multihash.
   * @returns {CID<T, typeof DAG_PB_CODE, typeof SHA_256_CODE, 0>}
   */
  static createV0(digest3) {
    return _CID.create(0, DAG_PB_CODE3, digest3);
  }
  /**
   * Simplified version of `create` for CIDv1.
   *
   * @template {unknown} Data
   * @template {number} Code
   * @template {number} Alg
   * @param {Code} code - Content encoding format code.
   * @param {API.MultihashDigest<Alg>} digest - Miltihash of the content.
   * @returns {CID<Data, Code, Alg, 1>}
   */
  static createV1(code3, digest3) {
    return _CID.create(1, code3, digest3);
  }
  /**
   * Decoded a CID from its binary representation. The byte array must contain
   * only the CID with no additional bytes.
   *
   * An error will be thrown if the bytes provided do not contain a valid
   * binary representation of a CID.
   *
   * @template {unknown} Data
   * @template {number} Code
   * @template {number} Alg
   * @template {API.Version} Ver
   * @param {API.ByteView<API.Link<Data, Code, Alg, Ver>>} bytes
   * @returns {CID<Data, Code, Alg, Ver>}
   */
  static decode(bytes) {
    const [cid, remainder] = _CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error("Incorrect length");
    }
    return cid;
  }
  /**
   * Decoded a CID from its binary representation at the beginning of a byte
   * array.
   *
   * Returns an array with the first element containing the CID and the second
   * element containing the remainder of the original byte array. The remainder
   * will be a zero-length byte array if the provided bytes only contained a
   * binary CID representation.
   *
   * @template {unknown} T
   * @template {number} C
   * @template {number} A
   * @template {API.Version} V
   * @param {API.ByteView<API.Link<T, C, A, V>>} bytes
   * @returns {[CID<T, C, A, V>, Uint8Array]}
   */
  static decodeFirst(bytes) {
    const specs = _CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce3(
      bytes.subarray(prefixSize, prefixSize + specs.multihashSize)
    );
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error("Incorrect length");
    }
    const digestBytes = multihashBytes.subarray(
      specs.multihashSize - specs.digestSize
    );
    const digest3 = new Digest3(
      specs.multihashCode,
      specs.digestSize,
      digestBytes,
      multihashBytes
    );
    const cid = specs.version === 0 ? _CID.createV0(
      /** @type {API.MultihashDigest<API.SHA_256>} */
      digest3
    ) : _CID.createV1(specs.codec, digest3);
    return [
      /** @type {CID<T, C, A, V>} */
      cid,
      bytes.subarray(specs.size)
    ];
  }
  /**
   * Inspect the initial bytes of a CID to determine its properties.
   *
   * Involves decoding up to 4 varints. Typically this will require only 4 to 6
   * bytes but for larger multicodec code values and larger multihash digest
   * lengths these varints can be quite large. It is recommended that at least
   * 10 bytes be made available in the `initialBytes` argument for a complete
   * inspection.
   *
   * @template {unknown} T
   * @template {number} C
   * @template {number} A
   * @template {API.Version} V
   * @param {API.ByteView<API.Link<T, C, A, V>>} initialBytes
   * @returns {{ version:V, codec:C, multihashCode:A, digestSize:number, multihashSize:number, size:number }}
   */
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i, length4] = decode13(initialBytes.subarray(offset));
      offset += length4;
      return i;
    };
    let version2 = (
      /** @type {V} */
      next()
    );
    let codec = (
      /** @type {C} */
      DAG_PB_CODE3
    );
    if (
      /** @type {number} */
      version2 === 18
    ) {
      version2 = /** @type {V} */
      0;
      offset = 0;
    } else {
      codec = /** @type {C} */
      next();
    }
    if (version2 !== 0 && version2 !== 1) {
      throw new RangeError(`Invalid CID version ${version2}`);
    }
    const prefixSize = offset;
    const multihashCode = (
      /** @type {A} */
      next()
    );
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return { version: version2, codec, multihashCode, digestSize, multihashSize, size };
  }
  /**
   * Takes cid in a string representation and creates an instance. If `base`
   * decoder is not provided will use a default from the configuration. It will
   * throw an error if encoding of the CID is not compatible with supplied (or
   * a default decoder).
   *
   * @template {string} Prefix
   * @template {unknown} Data
   * @template {number} Code
   * @template {number} Alg
   * @template {API.Version} Ver
   * @param {API.ToString<API.Link<Data, Code, Alg, Ver>, Prefix>} source
   * @param {API.MultibaseDecoder<Prefix>} [base]
   * @returns {CID<Data, Code, Alg, Ver>}
   */
  static parse(source, base5) {
    const [prefix, bytes] = parseCIDtoBytes3(source, base5);
    const cid = _CID.decode(bytes);
    baseCache2(cid).set(prefix, source);
    return cid;
  }
};
var parseCIDtoBytes3 = (source, base5) => {
  switch (source[0]) {
    case "Q": {
      const decoder = base5 || base58btc3;
      return [
        /** @type {Prefix} */
        base58btc3.prefix,
        decoder.decode(`${base58btc3.prefix}${source}`)
      ];
    }
    case base58btc3.prefix: {
      const decoder = base5 || base58btc3;
      return [
        /** @type {Prefix} */
        base58btc3.prefix,
        decoder.decode(source)
      ];
    }
    case base323.prefix: {
      const decoder = base5 || base323;
      return [
        /** @type {Prefix} */
        base323.prefix,
        decoder.decode(source)
      ];
    }
    default: {
      if (base5 == null) {
        throw Error(
          "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
        );
      }
      return [
        /** @type {Prefix} */
        source[0],
        base5.decode(source)
      ];
    }
  }
};
var toStringV03 = (bytes, cache3, base5) => {
  const { prefix } = base5;
  if (prefix !== base58btc3.prefix) {
    throw Error(`Cannot string encode V0 in ${base5.name} encoding`);
  }
  const cid = cache3.get(prefix);
  if (cid == null) {
    const cid2 = base5.encode(bytes).slice(1);
    cache3.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var toStringV13 = (bytes, cache3, base5) => {
  const { prefix } = base5;
  const cid = cache3.get(prefix);
  if (cid == null) {
    const cid2 = base5.encode(bytes);
    cache3.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var DAG_PB_CODE3 = 112;
var SHA_256_CODE3 = 18;
var encodeCID3 = (version2, code3, multihash) => {
  const codeOffset = encodingLength3(version2);
  const hashOffset = codeOffset + encodingLength3(code3);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo3(version2, bytes, 0);
  encodeTo3(code3, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
var cidSymbol3 = Symbol.for("@ipld/js-cid/CID");

// node_modules/@oddjs/odd/lib/common/type-checks.js
function hasProp(data, prop) {
  return typeof data === "object" && data != null && prop in data;
}
var isDefined = (val) => {
  return val !== void 0;
};
var notNull = (val) => {
  return val !== null;
};
var isValue = (val) => {
  return isDefined(val) && notNull(val);
};
var isBool = (val) => {
  return typeof val === "boolean";
};
function isCryptoKey(val) {
  return hasProp(val, "algorithm") && hasProp(val, "extractable") && hasProp(val, "type");
}
var isNum = (val) => {
  return typeof val === "number";
};
var isString = (val) => {
  return typeof val === "string";
};
var isObject = (val) => {
  return val !== null && typeof val === "object";
};
var isBlob = (val) => {
  if (typeof Blob === "undefined")
    return false;
  return val instanceof Blob || isObject(val) && val?.constructor?.name === "Blob";
};

// node_modules/@oddjs/odd/lib/common/cid.js
var EMPTY_CID = "Qmc5m94Gu7z62RC8waSKkZUrCCBJPyHbkpmGzEePxy2oXJ";
function decodeCID(val) {
  const cid = CID3.asCID(val);
  if (cid)
    return cid;
  if (typeof val === "string")
    return CID3.parse(val);
  if (typeof val === "object" && "version" in val && "code" in val && "multihash" in val) {
    return CID3.create(val.version, val.code, val.multihash);
  }
  if (typeof val === "object" && hasProp(val, "version") && hasProp(val, "code") && isNum(val.code) && hasProp(val, "hash") && isObject(val.hash) && Object.values(val.hash).every(isNum)) {
    const multihash = decode14(new Uint8Array(Object.values(val.hash)));
    return CID3.create(val.version, val.code, multihash);
  }
  if (typeof val === "object" && hasProp(val, "/") && typeof val["/"] === "string") {
    return CID3.parse(val["/"]);
  }
  throw new Error(`Could not decode CID: ${JSON.stringify(val)}`);
}
function encodeCID4(cid) {
  return typeof cid === "string" ? cid : cid.toString();
}

// node_modules/@oddjs/odd/lib/common/version.js
var VERSION = "0.37.2";
var WASM_WNFS_VERSION = "0.1.7";

// node_modules/@oddjs/odd/lib/common/arrbufs.js
var arrbufs_exports = {};
__export(arrbufs_exports, {
  equal: () => equal
});
var equal = (aBuf, bBuf) => {
  const a = new Uint8Array(aBuf);
  const b = new Uint8Array(bBuf);
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
};

// node_modules/@oddjs/odd/lib/common/blob.js
var toUint8Array = async (blob) => {
  return new Promise((resolve, reject) => {
    const fail = () => reject(new Error("Failed to read file"));
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      const arrbuf = e?.target?.result || null;
      if (arrbuf == null) {
        fail();
        return;
      }
      if (typeof arrbuf === "string") {
        resolve(fromString4(arrbuf));
        return;
      }
      resolve(new Uint8Array(arrbuf));
    });
    reader.addEventListener("error", () => reader.abort());
    reader.addEventListener("abort", fail);
    reader.readAsArrayBuffer(blob);
  });
};

// node_modules/@oddjs/odd/lib/common/util.js
var removeKeyFromObj = (obj, key) => {
  const { [key]: omit, ...rest } = obj;
  return rest;
};
var mapObj = (obj, fn) => {
  const newObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    newObj[key] = fn(value, key);
  });
  return newObj;
};

// node_modules/@oddjs/odd/lib/common/browser.js
var isBrowser = typeof self !== "undefined" && typeof self.location === "object";
var assertBrowser = (method) => {
  if (!isBrowser) {
    throw new Error(`Must be in browser to use method. Provide a node-compatible implementation for ${method}`);
  }
};

// node_modules/@oddjs/odd/lib/did/util.js
var BASE58_DID_PREFIX = "did:key:z";
var hasPrefix = (prefixedKey, prefix) => {
  return arrbufs_exports.equal(prefix, prefixedKey.slice(0, prefix.byteLength));
};

// node_modules/@oddjs/odd/lib/did/transformers.js
function publicKeyToDid(crypto2, publicKey, keyType) {
  const prefix = crypto2.did.keyTypes[keyType]?.magicBytes;
  if (prefix === null) {
    throw new Error(`Key type '${keyType}' not supported, available types: ${Object.keys(crypto2.did.keyTypes).join(", ")}`);
  }
  const prefixedBuf = concat([prefix, publicKey]);
  return BASE58_DID_PREFIX + toString4(prefixedBuf, "base58btc");
}
function didToPublicKey(crypto2, did2) {
  if (!did2.startsWith(BASE58_DID_PREFIX)) {
    throw new Error("Please use a base58-encoded DID formatted `did:key:z...`");
  }
  const didWithoutPrefix = did2.substr(BASE58_DID_PREFIX.length);
  const magicalBuf = fromString4(didWithoutPrefix, "base58btc");
  const result = Object.entries(crypto2.did.keyTypes).find(([_key, attr]) => hasPrefix(magicalBuf, attr.magicBytes));
  if (!result) {
    throw new Error("Unsupported key algorithm.");
  }
  return {
    publicKey: magicalBuf.slice(result[1].magicBytes.length),
    type: result[0]
  };
}

// node_modules/@oddjs/odd/lib/did/local.js
async function exchange(crypto2) {
  const pubKey = await crypto2.keystore.publicExchangeKey();
  const ksAlg = await crypto2.keystore.getAlgorithm();
  return publicKeyToDid(crypto2, pubKey, ksAlg);
}
async function write(crypto2) {
  const pubKey = await crypto2.keystore.publicWriteKey();
  const ksAlg = await crypto2.keystore.getAlgorithm();
  return publicKeyToDid(crypto2, pubKey, ksAlg);
}

// node_modules/@oddjs/odd/lib/did/index.js
var did_exports = {};
__export(did_exports, {
  agent: () => write,
  didToPublicKey: () => didToPublicKey,
  exchange: () => exchange,
  publicKeyToDid: () => publicKeyToDid,
  sharing: () => exchange,
  ucan: () => write,
  write: () => write
});

// node_modules/@oddjs/odd/lib/common/fission.js
var fission_exports = {};
__export(fission_exports, {
  PRODUCTION: () => PRODUCTION,
  STAGING: () => STAGING,
  apiUrl: () => apiUrl,
  did: () => did,
  shareLink: () => shareLink
});

// node_modules/@oddjs/odd/lib/components/reference/dns-over-https.js
async function lookupTxtRecord(domain) {
  return Promise.any([
    googleLookup(domain),
    cloudflareLookup(domain)
  ]);
}
async function googleLookup(domain) {
  return dnsOverHttps(`https://dns.google/resolve?name=${domain}&type=txt`);
}
function cloudflareLookup(domain) {
  return dnsOverHttps(`https://cloudflare-dns.com/dns-query?name=${domain}&type=txt`);
}
function dnsOverHttps(url) {
  return fetch(url, {
    headers: {
      "accept": "application/dns-json"
    }
  }).then((r) => r.json()).then((r) => {
    if (r.Answer) {
      const answers = r.Answer.map((a) => {
        return (a.data || "").replace(/^"+|"+$/g, "");
      });
      if (answers[0][3] === ";") {
        return answers.sort((a, b) => a.slice(0, 4).localeCompare(b.slice(0, 4))).map((a) => a.slice(4)).join("");
      } else {
        return answers.join("");
      }
    } else {
      return null;
    }
  });
}
async function lookupDnsLink(domain) {
  const txt = await lookupTxtRecord(domain.startsWith("_dnslink.") ? domain : `_dnslink.${domain}`);
  return txt && !txt.includes("/ipns/") ? txt.replace(/^dnslink=/, "").replace(/^\/ipfs\//, "") : null;
}

// node_modules/@oddjs/odd/lib/common/fission.js
var PRODUCTION = {
  apiPath: "/v2/api",
  lobby: "https://auth.fission.codes",
  server: "https://runfission.com",
  userDomain: "fission.name"
};
var STAGING = {
  apiPath: "/v2/api",
  lobby: "https://auth.runfission.net",
  server: "https://runfission.net",
  userDomain: "fissionuser.net"
};
function apiUrl(endpoints, suffix) {
  return `${endpoints.server}${endpoints.apiPath}${suffix?.length ? "/" + suffix.replace(/^\/+/, "") : ""}`;
}
var didCache = {
  did: null,
  host: null,
  lastFetched: 0
};
async function did(endpoints) {
  let host;
  try {
    host = new URL(endpoints.server).host;
  } catch (e) {
    throw new Error("Unable to parse API Endpoint");
  }
  const now = Date.now();
  if (didCache.host !== host || didCache.lastFetched + 1e3 * 60 * 60 * 3 <= now) {
    didCache.did = await lookupTxtRecord("_did." + host);
    didCache.host = host;
    didCache.lastFetched = now;
  }
  if (!didCache.did)
    throw new Error("Couldn't get the Fission API DID");
  return didCache.did;
}
function shareLink(endpoints, details) {
  return endpoints.lobby + "/#/share/" + encodeURIComponent(details.sharedBy.username) + "/" + encodeURIComponent(details.shareId) + "/";
}

// node_modules/@oddjs/odd/lib/path/index.js
var path_exports = {};
__export(path_exports, {
  Kind: () => Kind,
  RootBranch: () => RootBranch,
  appData: () => appData,
  combine: () => combine,
  directory: () => directory,
  file: () => file,
  fromPosix: () => fromPosix,
  isDirectory: () => isDirectory,
  isFile: () => isFile,
  isOnRootBranch: () => isOnRootBranch,
  isPartition: () => isPartition,
  isRootDirectory: () => isRootDirectory,
  isSameKind: () => isSameKind,
  isSamePartition: () => isSamePartition,
  kind: () => kind,
  log: () => log,
  map: () => map,
  parent: () => parent,
  removePartition: () => removePartition,
  root: () => root,
  terminus: () => terminus,
  toPosix: () => toPosix,
  unwrap: () => unwrap,
  withPartition: () => withPartition
});
var RootBranch;
(function(RootBranch2) {
  RootBranch2["Public"] = "public";
  RootBranch2["Pretty"] = "p";
  RootBranch2["Private"] = "private";
  RootBranch2["PrivateLog"] = "privateLog";
  RootBranch2["Shared"] = "shared";
  RootBranch2["SharedCounter"] = "sharedCounter";
  RootBranch2["Version"] = "version";
})(RootBranch || (RootBranch = {}));
var Kind;
(function(Kind2) {
  Kind2["Directory"] = "directory";
  Kind2["File"] = "file";
})(Kind || (Kind = {}));
function directory(...args) {
  if (args.some((p) => p.includes("/"))) {
    throw new Error("Forward slashes `/` are not allowed");
  }
  return { directory: args };
}
function file(...args) {
  if (args.some((p) => p.includes("/"))) {
    throw new Error("Forward slashes `/` are not allowed");
  }
  return { file: args };
}
function root() {
  return { directory: [] };
}
function appData(app, suffix) {
  const appDir = directory(RootBranch.Private, "Apps", app.creator, app.name);
  return suffix ? combine(appDir, suffix) : appDir;
}
function fromPosix(path) {
  const split = path.replace(/^\/+/, "").split("/");
  if (path.endsWith("/"))
    return { directory: split.slice(0, -1) };
  else if (path === "")
    return root();
  return { file: split };
}
function toPosix(path, { absolute } = { absolute: false }) {
  const prefix = absolute ? "/" : "";
  const joinedPath = unwrap(path).join("/");
  if (isDirectory(path))
    return prefix + joinedPath + (joinedPath.length ? "/" : "");
  return prefix + joinedPath;
}
function combine(a, b) {
  return map((p) => unwrap(a).concat(p), b);
}
function isDirectory(path) {
  return !!path.directory;
}
function isFile(path) {
  return !!path.file;
}
function isPartition(partition, path) {
  return unwrap(path)[0] === partition;
}
function isOnRootBranch(rootBranch, path) {
  return unwrap(path)[0] === rootBranch;
}
function isRootDirectory(path) {
  return path.directory.length === 0;
}
function isSamePartition(a, b) {
  return unwrap(a)[0] === unwrap(b)[0];
}
function isSameKind(a, b) {
  if (isDirectory(a) && isDirectory(b))
    return true;
  else if (isFile(a) && isFile(b))
    return true;
  else
    return false;
}
function kind(path) {
  if (isDirectory(path))
    return Kind.Directory;
  return Kind.File;
}
function map(fn, path) {
  if (isDirectory(path))
    return { directory: fn(path.directory) };
  else if (isFile(path))
    return { file: fn(path.file) };
  return path;
}
function parent(path) {
  return isDirectory(path) && isRootDirectory(path) ? null : directory(...unwrap(path).slice(0, -1));
}
function removePartition(path) {
  return map((p) => isDirectory(path) || p.length > 1 ? p.slice(1) : p, path);
}
function terminus(path) {
  const u = unwrap(path);
  if (u.length < 1)
    return null;
  return u[u.length - 1];
}
function unwrap(path) {
  if (isDirectory(path)) {
    return path.directory;
  } else if (isFile(path)) {
    return path.file;
  }
  throw new Error("Path is neither a directory or a file");
}
function withPartition(partition, path) {
  return combine(directory(partition), path);
}
function log(path) {
  return `[ ${path.join(", ")} ]`;
}

// node_modules/@oddjs/odd/lib/ucan/token.js
async function build({ addSignature = true, audience, dependencies, facts = [], issuer, lifetimeInSeconds = 120, expiration, potency = "APPEND", proof, resource }) {
  const currentTimeInSeconds = Math.floor(Date.now() / 1e3);
  const decodedProof = proof ? typeof proof === "string" ? decode16(proof) : proof : null;
  const header = {
    alg: await dependencies.crypto.keystore.getUcanAlgorithm(),
    typ: "JWT",
    uav: "1.0.0"
    // actually 0.3.1 but server isn't updated yet
  };
  let exp = expiration || currentTimeInSeconds + lifetimeInSeconds;
  let nbf = currentTimeInSeconds - 120;
  if (decodedProof) {
    const prf = decodedProof.payload;
    exp = Math.min(prf.exp, exp);
    nbf = Math.max(prf.nbf, nbf);
  }
  const payload = {
    aud: audience,
    exp,
    fct: facts,
    iss: issuer,
    nbf,
    prf: proof ? typeof proof === "string" ? proof : encode12(proof) : null,
    ptc: potency,
    rsc: resource ? resource : decodedProof ? decodedProof.payload.rsc : "*"
  };
  const signature = addSignature ? await sign(dependencies.crypto, header, payload) : null;
  return {
    header,
    payload,
    signature
  };
}
function decode16(ucan) {
  const split = ucan.split(".");
  const header = JSON.parse(base64_exports3.urlDecode(split[0]));
  const payload = JSON.parse(base64_exports3.urlDecode(split[1]));
  return {
    header,
    payload,
    signature: split[2] || null
  };
}
function encode12(ucan) {
  const encodedHeader = encodeHeader(ucan.header);
  const encodedPayload = encodePayload(ucan.payload);
  return encodedHeader + "." + encodedPayload + "." + ucan.signature;
}
function encodeHeader(header) {
  return base64_exports3.urlEncode(JSON.stringify(header));
}
function encodePayload(payload) {
  return base64_exports3.urlEncode(JSON.stringify({
    ...payload
  }));
}
function isExpired(ucan) {
  return ucan.payload.exp <= Math.floor(Date.now() / 1e3);
}
function isSelfSigned(ucan) {
  return ucan.payload.iss === ucan.payload.aud;
}
async function isValid(crypto2, ucan) {
  try {
    const encodedHeader = encodeHeader(ucan.header);
    const encodedPayload = encodePayload(ucan.payload);
    const { publicKey, type } = didToPublicKey(crypto2, ucan.payload.iss);
    const algo = crypto2.did.keyTypes[type];
    const a = await algo.verify({
      publicKey,
      message: fromString4(`${encodedHeader}.${encodedPayload}`, "utf8"),
      signature: fromString4(ucan.signature || "", "base64url")
    });
    if (!a)
      return a;
    if (!ucan.payload.prf)
      return true;
    const prf = decode16(ucan.payload.prf);
    const b = prf.payload.aud === ucan.payload.iss;
    if (!b)
      return b;
    return await isValid(crypto2, prf);
  } catch {
    return false;
  }
}
function rootIssuer(ucan, level = 0) {
  const p = typeof ucan === "string" ? extractPayload(ucan, level) : ucan.payload;
  if (p.prf)
    return rootIssuer(p.prf, level + 1);
  return p.iss;
}
async function sign(crypto2, header, payload) {
  const encodedHeader = encodeHeader(header);
  const encodedPayload = encodePayload(payload);
  return toString4(await crypto2.keystore.sign(fromString4(`${encodedHeader}.${encodedPayload}`, "utf8")), "base64url");
}
function extractPayload(ucan, level) {
  try {
    return JSON.parse(base64_exports3.urlDecode(ucan.split(".")[1]));
  } catch (_) {
    throw new Error(`Invalid UCAN (${level} level${level === 1 ? "" : "s"} deep): \`${ucan}\``);
  }
}

// node_modules/@oddjs/odd/lib/ucan/index.js
var ucan_exports = {};
__export(ucan_exports, {
  build: () => build,
  decode: () => decode16,
  encode: () => encode12,
  encodeHeader: () => encodeHeader,
  encodePayload: () => encodePayload,
  isExpired: () => isExpired,
  isSelfSigned: () => isSelfSigned,
  isValid: () => isValid,
  rootIssuer: () => rootIssuer,
  sign: () => sign
});

// node_modules/uint8arrays/dist/src/compare.js
function compare2(a, b) {
  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] < b[i]) {
      return -1;
    }
    if (a[i] > b[i]) {
      return 1;
    }
  }
  if (a.byteLength > b.byteLength) {
    return 1;
  }
  if (a.byteLength < b.byteLength) {
    return -1;
  }
  return 0;
}

// node_modules/uint8arrays/dist/src/concat.js
function concat2(arrays, length4) {
  if (length4 == null) {
    length4 = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length4);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return asUint8Array(output);
}

// node_modules/uint8arrays/dist/src/equals.js
function equals8(a, b) {
  if (a === b) {
    return true;
  }
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

export {
  compare2 as compare,
  concat2 as concat,
  equals8 as equals,
  fromString2 as fromString,
  toString2 as toString,
  concat as concat2,
  fromString4 as fromString2,
  toString4 as toString2,
  urlEncode,
  CryptoSystem,
  EccCurve,
  RsaSize,
  SymmAlg,
  SymmKeyLength,
  HashAlg,
  CharSize,
  KeyUse,
  implementation_exports,
  toUint8Array,
  coerce3 as coerce,
  create3 as create,
  CID3 as CID,
  hasProp,
  notNull,
  isValue,
  isBool,
  isCryptoKey,
  isNum,
  isString,
  isObject,
  isBlob,
  EMPTY_CID,
  decodeCID,
  encodeCID4 as encodeCID,
  removeKeyFromObj,
  mapObj,
  VERSION,
  WASM_WNFS_VERSION,
  assertBrowser,
  publicKeyToDid,
  didToPublicKey,
  exchange,
  write,
  did_exports,
  lookupTxtRecord,
  lookupDnsLink,
  PRODUCTION,
  STAGING,
  apiUrl,
  did,
  fission_exports,
  RootBranch,
  directory,
  file,
  root,
  appData,
  fromPosix,
  toPosix,
  combine,
  isDirectory,
  isFile,
  isPartition,
  isOnRootBranch,
  isSamePartition,
  isSameKind,
  kind,
  parent,
  removePartition,
  terminus,
  unwrap,
  withPartition,
  log,
  path_exports,
  build,
  decode16 as decode,
  encode12 as encode,
  isExpired,
  isSelfSigned,
  isValid,
  rootIssuer,
  ucan_exports
};

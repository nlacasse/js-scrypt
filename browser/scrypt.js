var scrypt_module_factory = module.exports = (function (requested_total_memory) {
    var Module = {TOTAL_MEMORY: (requested_total_memory || 33554432)};
    var scrypt_raw = Module;
function g(a) {
  throw a;
}
var j = void 0, k = !0, n = null, p = !1;
function q() {
  return function() {
  }
}
var r, s;
s || (s = eval("(function() { try { return Module || {} } catch(e) { return {} } })()"));
var aa = {}, t;
for(t in s) {
  s.hasOwnProperty(t) && (aa[t] = s[t])
}
var ba = "object" === typeof process && "function" === typeof require, ca = "object" === typeof window, da = "function" === typeof importScripts, ea = !ca && !ba && !da;
if(ba) {
  s.print = function(a) {
    process.stdout.write(a + "\n")
  };
  s.printErr = function(a) {
    process.stderr.write(a + "\n")
  };
  var fa = require("fs"), ga = require("path");
  s.read = function(a, b) {
    var a = ga.normalize(a), c = fa.readFileSync(a);
    !c && a != ga.resolve(a) && (a = path.join(__dirname, "..", "src", a), c = fa.readFileSync(a));
    c && !b && (c = c.toString());
    return c
  };
  s.readBinary = function(a) {
    return s.read(a, k)
  };
  s.load = function(a) {
    ha(read(a))
  };
  s.arguments = process.argv.slice(2);
  module.Se = s
}else {
  ea ? (s.print = print, "undefined" != typeof printErr && (s.printErr = printErr), s.read = "undefined" != typeof read ? read : function() {
    g("no read() available (jsc?)")
  }, s.readBinary = function(a) {
    return read(a, "binary")
  }, "undefined" != typeof scriptArgs ? s.arguments = scriptArgs : "undefined" != typeof arguments && (s.arguments = arguments), this.Module = s) : ca || da ? (s.read = function(a) {
    var b = new XMLHttpRequest;
    b.open("GET", a, p);
    b.send(n);
    return b.responseText
  }, "undefined" != typeof arguments && (s.arguments = arguments), "undefined" !== typeof console ? (s.print = function(a) {
    console.log(a)
  }, s.printErr = function(a) {
    console.log(a)
  }) : s.print = q(), ca ? this.Module = s : s.load = importScripts) : g("Unknown runtime environment. Where are we?")
}
function ha(a) {
  eval.call(n, a)
}
"undefined" == !s.load && s.read && (s.load = function(a) {
  ha(s.read(a))
});
s.print || (s.print = q());
s.printErr || (s.printErr = s.print);
s.arguments || (s.arguments = []);
s.print = s.print;
s.V = s.printErr;
s.preRun = [];
s.postRun = [];
for(t in aa) {
  aa.hasOwnProperty(t) && (s[t] = aa[t])
}
function ia() {
  return v
}
function ja(a) {
  v = a
}
function ka(a) {
  switch(a) {
    case "i1":
    ;
    case "i8":
      return 1;
    case "i16":
      return 2;
    case "i32":
      return 4;
    case "i64":
      return 8;
    case "float":
      return 4;
    case "double":
      return 8;
    default:
      if("*" === a[a.length - 1]) {
        return la
      }
      if("i" === a[0]) {
        return a = parseInt(a.substr(1)), z(0 === a % 8), a / 8
      }
  }
}
function ma(a, b, c) {
  c && c.length ? (c.splice || (c = Array.prototype.slice.call(c)), c.splice(0, 0, b), s["dynCall_" + a].apply(n, c)) : s["dynCall_" + a].call(n, b)
}
var na;
function oa() {
  var a = [], b = 0;
  this.Sa = function(c) {
    c &= 255;
    if(0 == a.length) {
      if(0 == (c & 128)) {
        return String.fromCharCode(c)
      }
      a.push(c);
      b = 192 == (c & 224) ? 1 : 224 == (c & 240) ? 2 : 3;
      return""
    }
    if(b && (a.push(c), b--, 0 < b)) {
      return""
    }
    var c = a[0], d = a[1], e = a[2], f = a[3];
    2 == a.length ? c = String.fromCharCode((c & 31) << 6 | d & 63) : 3 == a.length ? c = String.fromCharCode((c & 15) << 12 | (d & 63) << 6 | e & 63) : (c = (c & 7) << 18 | (d & 63) << 12 | (e & 63) << 6 | f & 63, c = String.fromCharCode(Math.floor((c - 65536) / 1024) + 55296, (c - 65536) % 1024 + 56320));
    a.length = 0;
    return c
  };
  this.wc = function(a) {
    for(var a = unescape(encodeURIComponent(a)), b = [], e = 0;e < a.length;e++) {
      b.push(a.charCodeAt(e))
    }
    return b
  }
}
function pa(a) {
  var b = v;
  v = v + a | 0;
  v = v + 7 >> 3 << 3;
  return b
}
function qa(a) {
  var b = ra;
  ra = ra + a | 0;
  ra = ra + 7 >> 3 << 3;
  return b
}
function sa(a) {
  var b = A;
  A = A + a | 0;
  A = A + 7 >> 3 << 3;
  A >= ta && ua("Cannot enlarge memory arrays in asm.js. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value " + ta + ", or (2) set Module.TOTAL_MEMORY before the program runs.");
  return b
}
function va(a, b) {
  return Math.ceil(a / (b ? b : 8)) * (b ? b : 8)
}
var la = 4, wa = {}, ya = p, za;
function z(a, b) {
  a || ua("Assertion failed: " + b)
}
s.ccall = function(a, b, c, d) {
  return Aa(Ba(a), b, c, d)
};
function Ba(a) {
  try {
    var b = s["_" + a];
    b || (b = eval("_" + a))
  }catch(c) {
  }
  z(b, "Cannot call unknown function " + a + " (perhaps LLVM optimizations or closure removed it?)");
  return b
}
function Aa(a, b, c, d) {
  function e(a, b) {
    if("string" == b) {
      if(a === n || a === j || 0 === a) {
        return 0
      }
      f || (f = ia());
      var c = pa(a.length + 1);
      Ca(a, c);
      return c
    }
    return"array" == b ? (f || (f = ia()), c = pa(a.length), Da(a, c), c) : a
  }
  var f = 0, h = 0, d = d ? d.map(function(a) {
    return e(a, c[h++])
  }) : [];
  a = a.apply(n, d);
  "string" == b ? b = Ea(a) : (z("array" != b), b = a);
  f && ja(f);
  return b
}
s.cwrap = function(a, b, c) {
  var d = Ba(a);
  return function() {
    return Aa(d, b, c, Array.prototype.slice.call(arguments))
  }
};
function Fa(a, b, c) {
  c = c || "i8";
  "*" === c.charAt(c.length - 1) && (c = "i32");
  switch(c) {
    case "i1":
      B[a] = b;
      break;
    case "i8":
      B[a] = b;
      break;
    case "i16":
      Ga[a >> 1] = b;
      break;
    case "i32":
      D[a >> 2] = b;
      break;
    case "i64":
      za = [b >>> 0, (tempDouble = b, 1 <= +Math.abs(tempDouble) ? 0 < tempDouble ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)];
      D[a >> 2] = za[0];
      D[a + 4 >> 2] = za[1];
      break;
    case "float":
      Ha[a >> 2] = b;
      break;
    case "double":
      Ia[a >> 3] = b;
      break;
    default:
      ua("invalid type for setValue: " + c)
  }
}
s.setValue = Fa;
s.getValue = function(a, b) {
  b = b || "i8";
  "*" === b.charAt(b.length - 1) && (b = "i32");
  switch(b) {
    case "i1":
      return B[a];
    case "i8":
      return B[a];
    case "i16":
      return Ga[a >> 1];
    case "i32":
      return D[a >> 2];
    case "i64":
      return D[a >> 2];
    case "float":
      return Ha[a >> 2];
    case "double":
      return Ia[a >> 3];
    default:
      ua("invalid type for setValue: " + b)
  }
  return n
};
var Ja = 0, Ka = 1, E = 2, La = 4;
s.ALLOC_NORMAL = Ja;
s.ALLOC_STACK = Ka;
s.ALLOC_STATIC = E;
s.ALLOC_DYNAMIC = 3;
s.ALLOC_NONE = La;
function F(a, b, c, d) {
  var e, f;
  "number" === typeof a ? (e = k, f = a) : (e = p, f = a.length);
  var h = "string" === typeof b ? b : n, c = c == La ? d : [Ma, pa, qa, sa][c === j ? E : c](Math.max(f, h ? 1 : b.length));
  if(e) {
    d = c;
    z(0 == (c & 3));
    for(a = c + (f & -4);d < a;d += 4) {
      D[d >> 2] = 0
    }
    for(a = c + f;d < a;) {
      B[d++ | 0] = 0
    }
    return c
  }
  if("i8" === h) {
    return a.subarray || a.slice ? G.set(a, c) : G.set(new Uint8Array(a), c), c
  }
  for(var d = 0, i, m;d < f;) {
    var l = a[d];
    "function" === typeof l && (l = wa.Te(l));
    e = h || b[d];
    0 === e ? d++ : ("i64" == e && (e = "i32"), Fa(c + d, l, e), m !== e && (i = ka(e), m = e), d += i)
  }
  return c
}
s.allocate = F;
function Ea(a, b) {
  for(var c = p, d, e = 0;;) {
    d = G[a + e | 0];
    if(128 <= d) {
      c = k
    }else {
      if(0 == d && !b) {
        break
      }
    }
    e++;
    if(b && e == b) {
      break
    }
  }
  b || (b = e);
  var f = "";
  if(!c) {
    for(;0 < b;) {
      d = String.fromCharCode.apply(String, G.subarray(a, a + Math.min(b, 1024))), f = f ? f + d : d, a += 1024, b -= 1024
    }
    return f
  }
  c = new oa;
  for(e = 0;e < b;e++) {
    d = G[a + e | 0], f += c.Sa(d)
  }
  return f
}
s.Pointer_stringify = Ea;
s.UTF16ToString = function(a) {
  for(var b = 0, c = "";;) {
    var d = Ga[a + 2 * b >> 1];
    if(0 == d) {
      return c
    }
    ++b;
    c += String.fromCharCode(d)
  }
};
s.stringToUTF16 = function(a, b) {
  for(var c = 0;c < a.length;++c) {
    Ga[b + 2 * c >> 1] = a.charCodeAt(c)
  }
  Ga[b + 2 * a.length >> 1] = 0
};
s.UTF32ToString = function(a) {
  for(var b = 0, c = "";;) {
    var d = D[a + 4 * b >> 2];
    if(0 == d) {
      return c
    }
    ++b;
    65536 <= d ? (d -= 65536, c += String.fromCharCode(55296 | d >> 10, 56320 | d & 1023)) : c += String.fromCharCode(d)
  }
};
s.stringToUTF32 = function(a, b) {
  for(var c = 0, d = 0;d < a.length;++d) {
    var e = a.charCodeAt(d);
    if(55296 <= e && 57343 >= e) {
      var f = a.charCodeAt(++d), e = 65536 + ((e & 1023) << 10) | f & 1023
    }
    D[b + 4 * c >> 2] = e;
    ++c
  }
  D[b + 4 * c >> 2] = 0
};
var B, G, Ga, Na, D, Oa, Ha, Ia, Pa = 0, ra = 0, Qa = 0, v = 0, Ra = 0, Sa = 0, A = 0, ta = s.TOTAL_MEMORY || 16777216;
z(!!Int32Array && !!Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "Cannot fallback to non-typed array case: Code is too specialized");
var I = new ArrayBuffer(ta);
B = new Int8Array(I);
Ga = new Int16Array(I);
D = new Int32Array(I);
G = new Uint8Array(I);
Na = new Uint16Array(I);
Oa = new Uint32Array(I);
Ha = new Float32Array(I);
Ia = new Float64Array(I);
D[0] = 255;
z(255 === G[0] && 0 === G[3], "Typed arrays 2 must be run on a little-endian system");
s.HEAP = j;
s.HEAP8 = B;
s.HEAP16 = Ga;
s.HEAP32 = D;
s.HEAPU8 = G;
s.HEAPU16 = Na;
s.HEAPU32 = Oa;
s.HEAPF32 = Ha;
s.HEAPF64 = Ia;
function Ta(a) {
  for(;0 < a.length;) {
    var b = a.shift();
    if("function" == typeof b) {
      b()
    }else {
      var c = b.R;
      "number" === typeof c ? b.Ja === j ? ma("v", c) : ma("vi", c, [b.Ja]) : c(b.Ja === j ? n : b.Ja)
    }
  }
}
var Ua = [], Va = [], Wa = [], Xa = [], Ya = [], Za = p;
function $a(a) {
  Ua.unshift(a)
}
s.addOnPreRun = s.Ie = $a;
s.addOnInit = s.Fe = function(a) {
  Va.unshift(a)
};
s.addOnPreMain = s.He = function(a) {
  Wa.unshift(a)
};
s.addOnExit = s.Ee = function(a) {
  Xa.unshift(a)
};
function ab(a) {
  Ya.unshift(a)
}
s.addOnPostRun = s.Ge = ab;
function K(a, b, c) {
  a = (new oa).wc(a);
  c && (a.length = c);
  b || a.push(0);
  return a
}
s.intArrayFromString = K;
s.intArrayToString = function(a) {
  for(var b = [], c = 0;c < a.length;c++) {
    var d = a[c];
    255 < d && (d &= 255);
    b.push(String.fromCharCode(d))
  }
  return b.join("")
};
function Ca(a, b, c) {
  a = K(a, c);
  for(c = 0;c < a.length;) {
    B[b + c | 0] = a[c], c += 1
  }
}
s.writeStringToMemory = Ca;
function Da(a, b) {
  for(var c = 0;c < a.length;c++) {
    B[b + c | 0] = a[c]
  }
}
s.writeArrayToMemory = Da;
s.writeAsciiToMemory = function(a, b, c) {
  for(var d = 0;d < a.length;d++) {
    B[b + d | 0] = a.charCodeAt(d)
  }
  c || (B[b + a.length | 0] = 0)
};
function bb(a, b) {
  return 0 <= a ? a : 32 >= b ? 2 * Math.abs(1 << b - 1) + a : Math.pow(2, b) + a
}
function cb(a, b) {
  if(0 >= a) {
    return a
  }
  var c = 32 >= b ? Math.abs(1 << b - 1) : Math.pow(2, b - 1);
  if(a >= c && (32 >= b || a > c)) {
    a = -2 * c + a
  }
  return a
}
Math.imul || (Math.imul = function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16) | 0
});
Math.We = Math.imul;
var db = 0, eb = {}, fb = n, gb = n;
function hb(a) {
  db++;
  s.monitorRunDependencies && s.monitorRunDependencies(db);
  a ? (z(!eb[a]), eb[a] = 1) : s.V("warning: run dependency added without ID")
}
s.addRunDependency = hb;
function ib(a) {
  db--;
  s.monitorRunDependencies && s.monitorRunDependencies(db);
  a ? (z(eb[a]), delete eb[a]) : s.V("warning: run dependency removed without ID");
  0 == db && (fb !== n && (clearInterval(fb), fb = n), gb && (a = gb, gb = n, a()))
}
s.removeRunDependency = ib;
s.preloadedImages = {};
s.preloadedAudios = {};
Pa = 8;
ra = Pa + 1312;
Va.push({R:function() {
  jb()
}});
var kb;
kb = kb = F([0, 0, 0, 0, 0, 0, 0, 0], "i8", E);
F([111, 112, 116, 105, 111, 110, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 110, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 45, 45, 32, 37, 115, 0, 0, 0, 0, 0, 0, 0, 111, 112, 116, 105, 111, 110, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 110, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 45, 45, 32, 37, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 64, 0, 0, 0, 0, 0, 0, 89, 64, 0, 0, 0, 0, 0, 136, 195, 64, 0, 0, 0, 0, 132, 215, 151, 65, 0, 128, 224, 55, 121, 195, 65, 67, 
23, 110, 5, 181, 181, 184, 147, 70, 245, 249, 63, 233, 3, 79, 56, 77, 50, 29, 48, 249, 72, 119, 130, 90, 60, 191, 115, 127, 221, 79, 21, 117, 56, 3, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 111, 112, 116, 105, 111, 110, 32, 100, 111, 101, 115, 110, 39, 116, 32, 116, 97, 107, 101, 32, 97, 110, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 45, 45, 32, 37, 46, 42, 115, 0, 117, 110, 107, 
110, 111, 119, 110, 32, 111, 112, 116, 105, 111, 110, 32, 45, 45, 32, 37, 115, 0, 0, 0, 0, 117, 110, 107, 110, 111, 119, 110, 32, 111, 112, 116, 105, 111, 110, 32, 45, 45, 32, 37, 99, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 97, 109, 98, 105, 103, 117, 111, 117, 115, 32, 111, 112, 116, 105, 111, 110, 32, 45, 45, 32, 37, 46, 42, 115, 0, 0, 0, 0, 0, 0, 0, 0, 37, 115, 58, 32, 0, 0, 0, 0, 80, 79, 83, 73, 88, 76, 89, 95, 67, 79, 82, 82, 69, 67, 84, 0, 115, 116, 100, 58, 58, 98, 97, 100, 95, 97, 108, 
108, 111, 99, 0, 0, 37, 115, 58, 32, 0, 0, 0, 0, 37, 115, 10, 0, 0, 0, 0, 0, 37, 115, 10, 0, 0, 0, 0, 0, 105, 110, 32, 117, 115, 101, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0, 0, 0, 0, 0, 0, 0, 37, 115, 58, 32, 0, 0, 0, 0, 37, 115, 58, 32, 0, 0, 0, 0, 98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0, 0, 0, 0, 58, 32, 0, 0, 0, 0, 0, 0, 58, 32, 0, 0, 0, 0, 0, 0, 115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 
115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0, 0, 0, 0, 0, 0, 0, 109, 97, 120, 32, 115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 2, 0, 0, 6, 0, 0, 0, 10, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 2, 0, 0, 6, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 116, 57, 101, 120, 99, 101, 112, 116, 105, 111, 110, 0, 0, 0, 0, 83, 116, 57, 98, 97, 
100, 95, 97, 108, 108, 111, 99, 0, 0, 0, 0, 83, 116, 50, 48, 98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 2, 0, 0, 0, 0, 0, 0, 120, 2, 0, 0, 168, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 2, 0, 0, 176, 2, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
"i8", La, 8);
var lb = va(F(12, "i8", E), 8);
z(0 == lb % 8);
var mb = 0;
function M(a) {
  return D[mb >> 2] = a
}
s._memcpy = nb;
s._memset = ob;
var N = {da:1, Da:2, ne:3, md:4, P:5, bb:6, Ic:7, Jd:8, ka:9, Wc:10, ca:11, xe:11, Vb:12, Ob:13, gd:14, Vd:15, Uc:16, Za:17, ye:18, $a:19, Wd:20, Ba:21, p:22, Ed:23, Ub:24, $d:25, ue:26, hd:27, Rd:28, Fa:29, ke:30, xd:31, ee:32, dd:33, Wb:34, Nd:42, kd:43, Xc:44, od:45, pd:46, qd:47, wd:48, ve:49, Hd:50, nd:51, bd:35, Kd:37, Nc:52, Qc:53, ze:54, Fd:55, Rc:56, Sc:57, cd:35, Tc:59, Td:60, Id:61, re:62, Sd:63, Od:64, Pd:65, je:66, Ld:67, Lc:68, oe:69, Yc:70, fe:71, zd:72, ed:73, Pc:74, ae:76, Oc:77, 
ie:78, rd:79, sd:80, vd:81, ud:82, td:83, Ud:38, ab:39, Ad:36, Ca:40, Ea:95, de:96, ad:104, Gd:105, Mc:97, he:91, Yd:88, Qd:92, le:108, $c:111, Jc:98, Zc:103, Dd:101, Bd:100, se:110, jd:112, Rb:113, Sb:115, Pb:114, Qb:89, yd:90, ge:93, me:94, Kc:99, Cd:102, Tb:106, la:107, te:109, we:87, fd:122, pe:116, Zd:95, Md:123, ld:84, be:75, Vc:125, Xd:131, ce:130, qe:86}, pb = {"0":"Success", 1:"Not super-user", 2:"No such file or directory", 3:"No such process", 4:"Interrupted system call", 5:"I/O error", 
6:"No such device or address", 7:"Arg list too long", 8:"Exec format error", 9:"Bad file number", 10:"No children", 11:"No more processes", 12:"Not enough core", 13:"Permission denied", 14:"Bad address", 15:"Block device required", 16:"Mount device busy", 17:"File exists", 18:"Cross-device link", 19:"No such device", 20:"Not a directory", 21:"Is a directory", 22:"Invalid argument", 23:"Too many open files in system", 24:"Too many open files", 25:"Not a typewriter", 26:"Text file busy", 27:"File too large", 
28:"No space left on device", 29:"Illegal seek", 30:"Read only file system", 31:"Too many links", 32:"Broken pipe", 33:"Math arg out of domain of func", 34:"Math result not representable", 35:"File locking deadlock error", 36:"File or path name too long", 37:"No record locks available", 38:"Function not implemented", 39:"Directory not empty", 40:"Too many symbolic links", 42:"No message of desired type", 43:"Identifier removed", 44:"Channel number out of range", 45:"Level 2 not synchronized", 46:"Level 3 halted", 
47:"Level 3 reset", 48:"Link number out of range", 49:"Protocol driver not attached", 50:"No CSI structure available", 51:"Level 2 halted", 52:"Invalid exchange", 53:"Invalid request descriptor", 54:"Exchange full", 55:"No anode", 56:"Invalid request code", 57:"Invalid slot", 59:"Bad font file fmt", 60:"Device not a stream", 61:"No data (for no delay io)", 62:"Timer expired", 63:"Out of streams resources", 64:"Machine is not on the network", 65:"Package not installed", 66:"The object is remote", 
67:"The link has been severed", 68:"Advertise error", 69:"Srmount error", 70:"Communication error on send", 71:"Protocol error", 72:"Multihop attempted", 73:"Cross mount point (not really error)", 74:"Trying to read unreadable message", 75:"Value too large for defined data type", 76:"Given log. name not unique", 77:"f.d. invalid for this operation", 78:"Remote address changed", 79:"Can   access a needed shared lib", 80:"Accessing a corrupted shared lib", 81:".lib section in a.out corrupted", 82:"Attempting to link in too many libs", 
83:"Attempting to exec a shared library", 84:"Illegal byte sequence", 86:"Streams pipe error", 87:"Too many users", 88:"Socket operation on non-socket", 89:"Destination address required", 90:"Message too long", 91:"Protocol wrong type for socket", 92:"Protocol not available", 93:"Unknown protocol", 94:"Socket type not supported", 95:"Not supported", 96:"Protocol family not supported", 97:"Address family not supported by protocol family", 98:"Address already in use", 99:"Address not available", 100:"Network interface is not configured", 
101:"Network is unreachable", 102:"Connection reset by network", 103:"Connection aborted", 104:"Connection reset by peer", 105:"No buffer space available", 106:"Socket is already connected", 107:"Socket is not connected", 108:"Can't send after socket shutdown", 109:"Too many references", 110:"Connection timed out", 111:"Connection refused", 112:"Host is down", 113:"Host is unreachable", 114:"Socket already connected", 115:"Connection already in progress", 116:"Stale file handle", 122:"Quota exceeded", 
123:"No medium (in tape drive)", 125:"Operation canceled", 130:"Previous owner died", 131:"State not recoverable"};
function qb(a) {
  return/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1)
}
function rb(a, b) {
  for(var c = 0, d = a.length - 1;0 <= d;d--) {
    var e = a[d];
    "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--)
  }
  if(b) {
    for(;c--;c) {
      a.unshift("..")
    }
  }
  return a
}
function sb(a) {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1), a = rb(a.split("/").filter(function(a) {
    return!!a
  }), !b).join("/");
  !a && !b && (a = ".");
  a && c && (a += "/");
  return(b ? "/" : "") + a
}
function O() {
  var a = Array.prototype.slice.call(arguments, 0);
  return sb(a.filter(function(a) {
    "string" !== typeof a && g(new TypeError("Arguments to path.join must be strings"));
    return a
  }).join("/"))
}
function tb() {
  for(var a = "", b = p, c = arguments.length - 1;-1 <= c && !b;c--) {
    var d = 0 <= c ? arguments[c] : "/";
    "string" !== typeof d && g(new TypeError("Arguments to path.resolve must be strings"));
    d && (a = d + "/" + a, b = "/" === d.charAt(0))
  }
  a = rb(a.split("/").filter(function(a) {
    return!!a
  }), !b).join("/");
  return(b ? "/" : "") + a || "."
}
var vb = [];
function wb(a, b) {
  vb[a] = {input:[], U:[], ga:b};
  xb[a] = {f:yb}
}
var yb = {open:function(a) {
  var b = vb[a.e.va];
  b || g(new P(N.$a));
  a.z = b;
  a.seekable = p
}, close:function(a) {
  a.z.U.length && a.z.ga.ua(a.z, 10)
}, O:function(a, b, c, d) {
  (!a.z || !a.z.ga.vb) && g(new P(N.bb));
  for(var e = 0, f = 0;f < d;f++) {
    var h;
    try {
      h = a.z.ga.vb(a.z)
    }catch(i) {
      g(new P(N.P))
    }
    h === j && 0 === e && g(new P(N.ca));
    if(h === n || h === j) {
      break
    }
    e++;
    b[c + f] = h
  }
  e && (a.e.timestamp = Date.now());
  return e
}, write:function(a, b, c, d) {
  (!a.z || !a.z.ga.ua) && g(new P(N.bb));
  for(var e = 0;e < d;e++) {
    try {
      a.z.ga.ua(a.z, b[c + e])
    }catch(f) {
      g(new P(N.P))
    }
  }
  d && (a.e.timestamp = Date.now());
  return e
}}, Q = {Nb:1, Aa:2, Mb:3, Oa:function(a) {
  a.pa !== Q.Aa && (a.i = Array.prototype.slice.call(a.i), a.pa = Q.Aa)
}, B:function() {
  return Q.Ma(n, "/", 16895, 0)
}, Ma:function(a, b, c, d) {
  (24576 === (c & 61440) || 4096 === (c & 61440)) && g(new P(N.da));
  c = zb(a, b, c, d);
  16384 === (c.mode & 61440) ? (c.g = {N:Q.g.N, t:Q.g.t, Qa:Q.g.Qa, W:Q.g.W, W:Q.g.W, rename:Q.g.rename, Lb:Q.g.Lb, Ib:Q.g.Ib, Gb:Q.g.Gb, ya:Q.g.ya}, c.f = {T:Q.f.T}, c.i = {}) : 32768 === (c.mode & 61440) ? (c.g = {N:Q.g.N, t:Q.g.t}, c.f = {T:Q.f.T, O:Q.f.O, write:Q.f.write, kb:Q.f.kb, Cb:Q.f.Cb}, c.i = [], c.pa = Q.Aa) : 40960 === (c.mode & 61440) ? (c.g = {N:Q.g.N, t:Q.g.t, wa:Q.g.wa}, c.f = {}) : 8192 === (c.mode & 61440) && (c.g = {N:Q.g.N, t:Q.g.t}, c.f = Ab);
  c.timestamp = Date.now();
  a && (a.i[b] = c);
  return c
}, g:{N:function(a) {
  var b = {};
  b.Qe = 8192 === (a.mode & 61440) ? a.id : 1;
  b.Xe = a.id;
  b.mode = a.mode;
  b.cf = 1;
  b.uid = 0;
  b.Ve = 0;
  b.va = a.va;
  b.size = 16384 === (a.mode & 61440) ? 4096 : 32768 === (a.mode & 61440) ? a.i.length : 40960 === (a.mode & 61440) ? a.link.length : 0;
  b.Ke = new Date(a.timestamp);
  b.bf = new Date(a.timestamp);
  b.Pe = new Date(a.timestamp);
  b.cc = 4096;
  b.Me = Math.ceil(b.size / b.cc);
  return b
}, t:function(a, b) {
  b.mode !== j && (a.mode = b.mode);
  b.timestamp !== j && (a.timestamp = b.timestamp);
  if(b.size !== j) {
    Q.Oa(a);
    var c = a.i;
    if(b.size < c.length) {
      c.length = b.size
    }else {
      for(;b.size > c.length;) {
        c.push(0)
      }
    }
  }
}, Qa:function() {
  g(new P(N.Da))
}, W:function(a, b, c, d) {
  return Q.Ma(a, b, c, d)
}, rename:function(a, b, c) {
  if(16384 === (a.mode & 61440)) {
    var d;
    try {
      d = Bb(b, c)
    }catch(e) {
    }
    if(d) {
      for(var f in d.i) {
        g(new P(N.ab))
      }
    }
  }
  delete a.parent.i[a.name];
  a.name = c;
  b.i[c] = a
}, Lb:function(a, b) {
  delete a.i[b]
}, Ib:function(a, b) {
  var c = Bb(a, b), d;
  for(d in c.i) {
    g(new P(N.ab))
  }
  delete a.i[b]
}, Gb:function(a) {
  var b = [".", ".."], c;
  for(c in a.i) {
    a.i.hasOwnProperty(c) && b.push(c)
  }
  return b
}, ya:function(a, b, c) {
  a = Q.Ma(a, b, 41471, 0);
  a.link = c;
  return a
}, wa:function(a) {
  40960 !== (a.mode & 61440) && g(new P(N.p));
  return a.link
}}, f:{O:function(a, b, c, d, e) {
  a = a.e.i;
  if(e >= a.length) {
    return 0
  }
  d = Math.min(a.length - e, d);
  z(0 <= d);
  if(8 < d && a.subarray) {
    b.set(a.subarray(e, e + d), c)
  }else {
    for(var f = 0;f < d;f++) {
      b[c + f] = a[e + f]
    }
  }
  return d
}, write:function(a, b, c, d, e, f) {
  var h = a.e;
  h.timestamp = Date.now();
  a = h.i;
  if(d && 0 === a.length && 0 === e && b.subarray) {
    return z(b.length), f && b.buffer === B.buffer && 0 === c ? (h.i = b, h.pa = Q.Nb) : (h.i = new Uint8Array(b.subarray(c, c + d)), h.pa = Q.Mb), d
  }
  Q.Oa(h);
  for(a = h.i;a.length < e;) {
    a.push(0)
  }
  for(f = 0;f < d;f++) {
    a[e + f] = b[c + f]
  }
  return d
}, T:function(a, b, c) {
  1 === c ? b += a.position : 2 === c && 32768 === (a.e.mode & 61440) && (b += a.e.i.length);
  0 > b && g(new P(N.p));
  a.Fc = [];
  return a.position = b
}, kb:function(a, b, c) {
  Q.Oa(a.e);
  a = a.e.i;
  for(b += c;b > a.length;) {
    a.push(0)
  }
}, Cb:function(a, b, c, d, e, f, h) {
  32768 !== (a.e.mode & 61440) && g(new P(N.$a));
  a = a.e.i;
  if(!(h & 2) && (a.buffer === b || a.buffer === b.buffer)) {
    e = p, d = a.byteOffset
  }else {
    if(0 < e || e + d < a.length) {
      a = a.subarray ? a.subarray(e, e + d) : Array.prototype.slice.call(a, e, e + d)
    }
    e = k;
    (d = Ma(d)) || g(new P(N.Vb));
    b.set(a, d)
  }
  return{ff:d, Je:e}
}}}, Cb = F(1, "i32*", E), Db = F(1, "i32*", E);
kb = F(1, "i32*", E);
var Eb = n, xb = [n], R = [n], Fb = 1, Gb = n, Hb = k;
function P(a) {
  this.sb = a;
  for(var b in N) {
    if(N[b] === a) {
      this.code = b;
      break
    }
  }
  this.message = pb[a]
}
function Ib(a) {
  a instanceof P || g(a + " : " + Error().stack);
  M(a.sb)
}
function Jb(a, b) {
  a = tb("/", a);
  b = b || {Ta:0};
  8 < b.Ta && g(new P(N.Ca));
  for(var c = rb(a.split("/").filter(function(a) {
    return!!a
  }), p), d = Eb, e = "/", f = 0;f < c.length;f++) {
    var h = f === c.length - 1;
    if(h && b.parent) {
      break
    }
    d = Bb(d, c[f]);
    e = O(e, c[f]);
    d.sc && (d = d.B.root);
    if(!h || b.ea) {
      for(h = 0;40960 === (d.mode & 61440);) {
        d = Jb(e, {ea:p}).e;
        d.g.wa || g(new P(N.p));
        var d = d.g.wa(d), i = tb;
        var m = qb(e), e = m[0], m = m[1];
        !e && !m ? e = "." : (m && (m = m.substr(0, m.length - 1)), e += m);
        e = i(e, d);
        d = Jb(e, {Ta:b.Ta}).e;
        40 < h++ && g(new P(N.Ca))
      }
    }
  }
  return{path:e, e:d}
}
function Kb(a) {
  for(var b;;) {
    if(a === a.parent) {
      return b ? O(a.B.Db, b) : a.B.Db
    }
    b = b ? O(a.name, b) : a.name;
    a = a.parent
  }
}
function Lb(a, b) {
  for(var c = 0, d = 0;d < b.length;d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0
  }
  return(a + c >>> 0) % Gb.length
}
function Bb(a, b) {
  var c = Mb(a, "x");
  c && g(new P(c));
  for(c = Gb[Lb(a.id, b)];c;c = c.uc) {
    if(c.parent.id === a.id && c.name === b) {
      return c
    }
  }
  return a.g.Qa(a, b)
}
function zb(a, b, c, d) {
  var e = {id:Fb++, name:b, mode:c, g:{}, f:{}, va:d, parent:n, B:n};
  a || (a = e);
  e.parent = a;
  e.B = a.B;
  Object.defineProperties(e, {O:{get:function() {
    return 365 === (e.mode & 365)
  }, set:function(a) {
    a ? e.mode |= 365 : e.mode &= -366
  }}, write:{get:function() {
    return 146 === (e.mode & 146)
  }, set:function(a) {
    a ? e.mode |= 146 : e.mode &= -147
  }}, qc:{get:function() {
    return 16384 === (e.mode & 61440)
  }}, pc:{get:function() {
    return 8192 === (e.mode & 61440)
  }}});
  a = Lb(e.parent.id, e.name);
  e.uc = Gb[a];
  return Gb[a] = e
}
var Nb = {r:0, rs:1052672, "r+":2, w:577, wx:705, xw:705, "w+":578, "wx+":706, "xw+":706, a:1089, ax:1217, xa:1217, "a+":1090, "ax+":1218, "xa+":1218};
function Ob(a) {
  var b = Nb[a];
  "undefined" === typeof b && g(Error("Unknown file open mode: " + a));
  return b
}
function Mb(a, b) {
  return Hb ? 0 : -1 !== b.indexOf("r") && !(a.mode & 292) || -1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73) ? N.Ob : 0
}
function Pb(a, b) {
  try {
    return Bb(a, b), N.Za
  }catch(c) {
  }
  return Mb(a, "wx")
}
function Qb(a, b, c) {
  var d;
  a: {
    b = b || 1;
    for(c = c || 4096;b <= c;b++) {
      if(!R[b]) {
        d = b;
        break a
      }
    }
    g(new P(N.Ub))
  }
  a.A = d;
  Object.defineProperties(a, {object:{get:function() {
    return a.e
  }, set:function(b) {
    a.e = b
  }}, Ze:{get:function() {
    return 1 !== (a.L & 2097155)
  }}, $e:{get:function() {
    return 0 !== (a.L & 2097155)
  }}, Ye:{get:function() {
    return a.L & 1024
  }}});
  return R[d] = a
}
var Ab = {open:function(a) {
  a.f = xb[a.e.va].f;
  a.f.open && a.f.open(a)
}, T:function() {
  g(new P(N.Fa))
}};
function Rb(a, b) {
  var c = {type:a, ef:{}, Db:b, root:n}, d;
  b && (d = Jb(b, {ea:p}));
  var e = a.B(c);
  e.B = c;
  c.root = e;
  d && (d.e.B = c, d.e.sc = k, "/" === b && (Eb = c.root));
  return e
}
function Sb(a, b, c) {
  var d = Jb(a, {parent:k}).e, a = "/" === a ? "/" : qb(a)[2], e = Pb(d, a);
  e && g(new P(e));
  d.g.W || g(new P(N.da));
  return d.g.W(d, a, b, c)
}
function Tb(a, b) {
  b = (b !== j ? b : 438) & 4095;
  b |= 32768;
  return Sb(a, b, 0)
}
function Ub(a, b) {
  b = (b !== j ? b : 511) & 1023;
  b |= 16384;
  return Sb(a, b, 0)
}
function Vb(a, b, c) {
  "undefined" === typeof c && (c = b, b = 438);
  return Sb(a, b | 8192, c)
}
function Wb(a, b) {
  var c = Jb(b, {parent:k}).e, d = "/" === b ? "/" : qb(b)[2], e = Pb(c, d);
  e && g(new P(e));
  c.g.ya || g(new P(N.da));
  return c.g.ya(c, d, a)
}
function Xb(a, b) {
  var c;
  c = "string" === typeof a ? Jb(a, {ea:k}).e : a;
  c.g.t || g(new P(N.da));
  c.g.t(c, {mode:b & 4095 | c.mode & -4096, timestamp:Date.now()})
}
function Yb(a, b) {
  var c, a = sb(a), b = "string" === typeof b ? Ob(b) : b;
  c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
  var d;
  try {
    var e = Jb(a, {ea:!(b & 131072)});
    d = e.e;
    a = e.path
  }catch(f) {
  }
  b & 64 && (d ? b & 128 && g(new P(N.Za)) : d = Sb(a, c, 0));
  d || g(new P(N.Da));
  8192 === (d.mode & 61440) && (b &= -513);
  d ? 40960 === (d.mode & 61440) ? c = N.Ca : 16384 === (d.mode & 61440) && (0 !== (b & 2097155) || b & 512) ? c = N.Ba : (c = ["r", "w", "rw"][b & 2097155], b & 512 && (c += "w"), c = Mb(d, c)) : c = N.Da;
  c && g(new P(c));
  b & 512 && (c = d, c = "string" === typeof c ? Jb(c, {ea:k}).e : c, c.g.t || g(new P(N.da)), 16384 === (c.mode & 61440) && g(new P(N.Ba)), 32768 !== (c.mode & 61440) && g(new P(N.p)), (e = Mb(c, "w")) && g(new P(e)), c.g.t(c, {size:0, timestamp:Date.now()}));
  d = Qb({path:a, e:d, L:b, seekable:k, position:0, f:d.f, Fc:[], error:p}, j, j);
  d.f.open && d.f.open(d);
  s.logReadFiles && !(b & 1) && (Zb || (Zb = {}), a in Zb || (Zb[a] = 1, s.printErr("read file: " + a)));
  return d
}
function $b(a) {
  try {
    a.f.close && a.f.close(a)
  }catch(b) {
    g(b)
  }finally {
    R[a.A] = n
  }
}
function ac(a, b, c, d, e, f) {
  (0 > d || 0 > e) && g(new P(N.p));
  0 === (a.L & 2097155) && g(new P(N.ka));
  16384 === (a.e.mode & 61440) && g(new P(N.Ba));
  a.f.write || g(new P(N.p));
  var h = k;
  "undefined" === typeof e ? (e = a.position, h = p) : a.seekable || g(new P(N.Fa));
  a.L & 1024 && ((!a.seekable || !a.f.T) && g(new P(N.Fa)), a.f.T(a, 0, 2));
  b = a.f.write(a, b, c, d, e, f);
  h || (a.position += b);
  return b
}
var bc;
function cc(a, b) {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c
}
function dc(a, b, c, d, e, f) {
  a = b ? O("string" === typeof a ? a : Kb(a), b) : a;
  d = cc(d, e);
  e = Tb(a, d);
  if(c) {
    if("string" === typeof c) {
      for(var b = Array(c.length), h = 0, i = c.length;h < i;++h) {
        b[h] = c.charCodeAt(h)
      }
      c = b
    }
    Xb(a, d | 146);
    b = Yb(a, "w");
    ac(b, c, 0, c.length, 0, f);
    $b(b);
    Xb(a, d)
  }
  return e
}
function ec(a, b, c, d) {
  a = O("string" === typeof a ? a : Kb(a), b);
  b = cc(!!c, !!d);
  ec.Bb || (ec.Bb = 64);
  var e;
  e = ec.Bb++ << 8 | 0;
  xb[e] = {f:{open:function(a) {
    a.seekable = p
  }, close:function() {
    d && (d.buffer && d.buffer.length) && d(10)
  }, O:function(a, b, d, e) {
    for(var l = 0, C = 0;C < e;C++) {
      var w;
      try {
        w = c()
      }catch(y) {
        g(new P(N.P))
      }
      w === j && 0 === l && g(new P(N.ca));
      if(w === n || w === j) {
        break
      }
      l++;
      b[d + C] = w
    }
    l && (a.e.timestamp = Date.now());
    return l
  }, write:function(a, b, c, e) {
    for(var l = 0;l < e;l++) {
      try {
        d(b[c + l])
      }catch(C) {
        g(new P(N.P))
      }
    }
    e && (a.e.timestamp = Date.now());
    return l
  }}};
  return Vb(a, b, e)
}
function fc(a) {
  if(a.pc || a.qc || a.link || a.i) {
    return k
  }
  var b = k;
  "undefined" !== typeof XMLHttpRequest && g(Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."));
  if(s.read) {
    try {
      a.i = K(s.read(a.url), k)
    }catch(c) {
      b = p
    }
  }else {
    g(Error("Cannot load without read() or XMLHttpRequest."))
  }
  b || M(N.P);
  return b
}
var Zb, T = {B:function() {
  return zb(n, "/", 16895, 0)
}, ta:function() {
  T.ta.nb || (T.ta.nb = 0);
  return"socket[" + T.ta.nb++ + "]"
}, dc:function(a, b, c) {
  c && z(1 == b == (6 == c));
  a = {gc:a, type:b, protocol:c, m:n, ha:{}, Ra:[], X:[], $:T.o};
  b = T.ta();
  c = zb(T.root, b, 49152, 0);
  c.Z = a;
  b = Qb({path:b, e:c, L:Ob("r+"), seekable:p, f:T.f});
  a.Jb = b;
  return a
}, jc:function(a) {
  a = R[a];
  return!a || 49152 !== (a.e.mode & 49152) ? n : a.e.Z
}, f:{Fb:function(a) {
  a = a.e.Z;
  return a.$.Fb(a)
}, xb:function(a, b, c) {
  a = a.e.Z;
  return a.$.xb(a, b, c)
}, O:function(a, b, c, d) {
  a = a.e.Z;
  d = a.$.yc(a, d);
  if(!d) {
    return 0
  }
  b.set(d.buffer, c);
  return d.buffer.length
}, write:function(a, b, c, d) {
  a = a.e.Z;
  return a.$.Bc(a, b, c, d)
}, close:function(a) {
  a = a.e.Z;
  a.$.close(a)
}}, o:{qa:function(a, b, c) {
  var d;
  "object" === typeof b && (d = b, c = b = n);
  if(d) {
    d.ib ? (b = d.ib.gf, c = d.ib.hf) : ((c = /ws[s]?:\/\/([^:]+):(\d+)/.exec(d.url)) || g(Error("WebSocket URL must be in the format ws(s)://address:port")), b = c[1], c = parseInt(c[2], 10))
  }else {
    try {
      d = new WebSocket("ws://" + b + ":" + c, ba ? {} : ["binary"]), d.binaryType = "arraybuffer"
    }catch(e) {
      g(new P(N.Rb))
    }
  }
  b = {F:b, port:c, d:d, ra:[]};
  T.o.jb(a, b);
  T.o.nc(a, b);
  2 === a.type && "undefined" !== typeof a.aa && b.ra.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (a.aa & 65280) >> 8, a.aa & 255]));
  return b
}, sa:function(a, b, c) {
  return a.ha[b + ":" + c]
}, jb:function(a, b) {
  a.ha[b.F + ":" + b.port] = b
}, Hb:function(a, b) {
  delete a.ha[b.F + ":" + b.port]
}, nc:function(a, b) {
  function c(c) {
    z("string" !== typeof c && c.byteLength !== j);
    var c = new Uint8Array(c), d = e;
    e = p;
    d && 10 === c.length && 255 === c[0] && 255 === c[1] && 255 === c[2] && 255 === c[3] && 112 === c[4] && 111 === c[5] && 114 === c[6] && 116 === c[7] ? (c = c[8] << 8 | c[9], T.o.Hb(a, b), b.port = c, T.o.jb(a, b)) : a.X.push({F:b.F, port:b.port, data:c})
  }
  function d() {
    try {
      for(var a = b.ra.shift();a;) {
        b.d.send(a), a = b.ra.shift()
      }
    }catch(c) {
      b.d.close()
    }
  }
  var e = k;
  ba ? (b.d.fa("open", d), b.d.fa("message", function(a, b) {
    b.Le && c((new Uint8Array(a)).buffer)
  }), b.d.fa("error", q())) : (b.d.onopen = d, b.d.onmessage = function(a) {
    c(a.data)
  })
}, Fb:function(a) {
  if(1 === a.type && a.m) {
    return a.Ra.length ? 65 : 0
  }
  var b = 0, c = 1 === a.type ? T.o.sa(a, a.G, a.H) : n;
  if(a.X.length || !c || c && c.d.readyState === c.d.ja || c && c.d.readyState === c.d.CLOSED) {
    b |= 65
  }
  if(!c || c && c.d.readyState === c.d.OPEN) {
    b |= 4
  }
  if(c && c.d.readyState === c.d.ja || c && c.d.readyState === c.d.CLOSED) {
    b |= 16
  }
  return b
}, xb:function(a, b, c) {
  switch(b) {
    case 21531:
      return b = 0, a.X.length && (b = a.X[0].data.length), D[c >> 2] = b, 0;
    default:
      return N.p
  }
}, close:function(a) {
  if(a.m) {
    try {
      a.m.close()
    }catch(b) {
    }
    a.m = n
  }
  for(var c = Object.keys(a.ha), d = 0;d < c.length;d++) {
    var e = a.ha[c[d]];
    try {
      e.d.close()
    }catch(f) {
    }
    T.o.Hb(a, e)
  }
  return 0
}, bind:function(a, b, c) {
  ("undefined" !== typeof a.Va || "undefined" !== typeof a.aa) && g(new P(N.p));
  a.Va = b;
  a.aa = c || _mkport();
  if(2 === a.type) {
    a.m && (a.m.close(), a.m = n);
    try {
      a.$.rc(a, 0)
    }catch(d) {
      d instanceof P || g(d), d.sb !== N.Ea && g(d)
    }
  }
}, Oe:function(a, b, c) {
  a.m && g(new P(ERRNO_CODS.Ea));
  if("undefined" !== typeof a.G && "undefined" !== typeof a.H) {
    var d = T.o.sa(a, a.G, a.H);
    d && (d.d.readyState === d.d.CONNECTING && g(new P(N.Pb)), g(new P(N.Tb)))
  }
  b = T.o.qa(a, b, c);
  a.G = b.F;
  a.H = b.port;
  g(new P(N.Sb))
}, rc:function(a) {
  ba || g(new P(N.Ea));
  a.m && g(new P(N.p));
  var b = require("ws").Ae;
  a.m = new b({host:a.Va, port:a.aa});
  a.m.fa("connection", function(b) {
    if(1 === a.type) {
      var d = T.dc(a.gc, a.type, a.protocol), b = T.o.qa(d, b);
      d.G = b.F;
      d.H = b.port;
      a.Ra.push(d)
    }else {
      T.o.qa(a, b)
    }
  });
  a.m.fa("closed", function() {
    a.m = n
  });
  a.m.fa("error", q())
}, accept:function(a) {
  a.m || g(new P(N.p));
  var b = a.Ra.shift();
  b.Jb.L = a.Jb.L;
  return b
}, Ue:function(a, b) {
  var c, d;
  b ? ((a.G === j || a.H === j) && g(new P(N.la)), c = a.G, d = a.H) : (c = a.Va || 0, d = a.aa || 0);
  return{F:c, port:d}
}, Bc:function(a, b, c, d, e, f) {
  if(2 === a.type) {
    if(e === j || f === j) {
      e = a.G, f = a.H
    }
    (e === j || f === j) && g(new P(N.Qb))
  }else {
    e = a.G, f = a.H
  }
  var h = T.o.sa(a, e, f);
  1 === a.type && ((!h || h.d.readyState === h.d.ja || h.d.readyState === h.d.CLOSED) && g(new P(N.la)), h.d.readyState === h.d.CONNECTING && g(new P(N.ca)));
  b = b instanceof Array || b instanceof ArrayBuffer ? b.slice(c, c + d) : b.buffer.slice(b.byteOffset + c, b.byteOffset + c + d);
  if(2 === a.type && (!h || h.d.readyState !== h.d.OPEN)) {
    if(!h || h.d.readyState === h.d.ja || h.d.readyState === h.d.CLOSED) {
      h = T.o.qa(a, e, f)
    }
    h.ra.push(b);
    return d
  }
  try {
    return h.d.send(b), d
  }catch(i) {
    g(new P(N.p))
  }
}, yc:function(a, b) {
  1 === a.type && a.m && g(new P(N.la));
  var c = a.X.shift();
  if(!c) {
    if(1 === a.type) {
      var d = T.o.sa(a, a.G, a.H);
      if(d) {
        if(d.d.readyState === d.d.ja || d.d.readyState === d.d.CLOSED) {
          return n
        }
        g(new P(N.ca))
      }
      g(new P(N.la))
    }
    g(new P(N.ca))
  }
  var d = c.data.byteLength || c.data.length, e = c.data.byteOffset || 0, f = c.data.buffer || c.data, h = Math.min(b, d), i = {buffer:new Uint8Array(f, e, h), F:c.F, port:c.port};
  1 === a.type && h < d && (c.data = new Uint8Array(f, e + h, d - h), a.X.unshift(c));
  return i
}}};
function gc(a, b, c) {
  a = R[a];
  if(!a) {
    return M(N.ka), -1
  }
  try {
    return ac(a, B, b, c)
  }catch(d) {
    return Ib(d), -1
  }
}
function hc(a, b, c, d) {
  c *= b;
  if(0 == c) {
    return 0
  }
  a = gc(d, a, c);
  if(-1 == a) {
    if(b = R[d]) {
      b.error = k
    }
    return 0
  }
  return Math.floor(a / b)
}
s._strlen = ic;
function jc(a) {
  return 0 > a || 0 === a && -Infinity === 1 / a
}
function kc(a, b) {
  function c(a) {
    var c;
    "double" === a ? c = Ia[b + e >> 3] : "i64" == a ? (c = [D[b + e >> 2], D[b + (e + 8) >> 2]], e += 8) : (a = "i32", c = D[b + e >> 2]);
    e += Math.max(Math.max(ka(a), la), 8);
    return c
  }
  for(var d = a, e = 0, f = [], h, i;;) {
    var m = d;
    h = B[d];
    if(0 === h) {
      break
    }
    i = B[d + 1 | 0];
    if(37 == h) {
      var l = p, C = p, w = p, y = p;
      a:for(;;) {
        switch(i) {
          case 43:
            l = k;
            break;
          case 45:
            C = k;
            break;
          case 35:
            w = k;
            break;
          case 48:
            if(y) {
              break a
            }else {
              y = k;
              break
            }
          ;
          default:
            break a
        }
        d++;
        i = B[d + 1 | 0]
      }
      var H = 0;
      if(42 == i) {
        H = c("i32"), d++, i = B[d + 1 | 0]
      }else {
        for(;48 <= i && 57 >= i;) {
          H = 10 * H + (i - 48), d++, i = B[d + 1 | 0]
        }
      }
      var L = p;
      if(46 == i) {
        var J = 0, L = k;
        d++;
        i = B[d + 1 | 0];
        if(42 == i) {
          J = c("i32"), d++
        }else {
          for(;;) {
            i = B[d + 1 | 0];
            if(48 > i || 57 < i) {
              break
            }
            J = 10 * J + (i - 48);
            d++
          }
        }
        i = B[d + 1 | 0]
      }else {
        J = 6
      }
      var x;
      switch(String.fromCharCode(i)) {
        case "h":
          i = B[d + 2 | 0];
          104 == i ? (d++, x = 1) : x = 2;
          break;
        case "l":
          i = B[d + 2 | 0];
          108 == i ? (d++, x = 8) : x = 4;
          break;
        case "L":
        ;
        case "q":
        ;
        case "j":
          x = 8;
          break;
        case "z":
        ;
        case "t":
        ;
        case "I":
          x = 4;
          break;
        default:
          x = n
      }
      x && d++;
      i = B[d + 1 | 0];
      switch(String.fromCharCode(i)) {
        case "d":
        ;
        case "i":
        ;
        case "u":
        ;
        case "o":
        ;
        case "x":
        ;
        case "X":
        ;
        case "p":
          m = 100 == i || 105 == i;
          x = x || 4;
          var S = h = c("i" + 8 * x), u;
          8 == x && (h = 117 == i ? +(h[0] >>> 0) + 4294967296 * +(h[1] >>> 0) : +(h[0] >>> 0) + 4294967296 * +(h[1] | 0));
          4 >= x && (h = (m ? cb : bb)(h & Math.pow(256, x) - 1, 8 * x));
          var xa = Math.abs(h), m = "";
          if(100 == i || 105 == i) {
            u = 8 == x && lc ? lc.stringify(S[0], S[1], n) : cb(h, 8 * x).toString(10)
          }else {
            if(117 == i) {
              u = 8 == x && lc ? lc.stringify(S[0], S[1], k) : bb(h, 8 * x).toString(10), h = Math.abs(h)
            }else {
              if(111 == i) {
                u = (w ? "0" : "") + xa.toString(8)
              }else {
                if(120 == i || 88 == i) {
                  m = w && 0 != h ? "0x" : "";
                  if(8 == x && lc) {
                    if(S[1]) {
                      u = (S[1] >>> 0).toString(16);
                      for(w = (S[0] >>> 0).toString(16);8 > w.length;) {
                        w = "0" + w
                      }
                      u += w
                    }else {
                      u = (S[0] >>> 0).toString(16)
                    }
                  }else {
                    if(0 > h) {
                      h = -h;
                      u = (xa - 1).toString(16);
                      S = [];
                      for(w = 0;w < u.length;w++) {
                        S.push((15 - parseInt(u[w], 16)).toString(16))
                      }
                      for(u = S.join("");u.length < 2 * x;) {
                        u = "f" + u
                      }
                    }else {
                      u = xa.toString(16)
                    }
                  }
                  88 == i && (m = m.toUpperCase(), u = u.toUpperCase())
                }else {
                  112 == i && (0 === xa ? u = "(nil)" : (m = "0x", u = xa.toString(16)))
                }
              }
            }
          }
          if(L) {
            for(;u.length < J;) {
              u = "0" + u
            }
          }
          for(l && (m = 0 > h ? "-" + m : "+" + m);m.length + u.length < H;) {
            C ? u += " " : y ? u = "0" + u : m = " " + m
          }
          u = m + u;
          u.split("").forEach(function(a) {
            f.push(a.charCodeAt(0))
          });
          break;
        case "f":
        ;
        case "F":
        ;
        case "e":
        ;
        case "E":
        ;
        case "g":
        ;
        case "G":
          h = c("double");
          if(isNaN(h)) {
            u = "nan", y = p
          }else {
            if(isFinite(h)) {
              L = p;
              x = Math.min(J, 20);
              if(103 == i || 71 == i) {
                L = k, J = J || 1, x = parseInt(h.toExponential(x).split("e")[1], 10), J > x && -4 <= x ? (i = (103 == i ? "f" : "F").charCodeAt(0), J -= x + 1) : (i = (103 == i ? "e" : "E").charCodeAt(0), J--), x = Math.min(J, 20)
              }
              if(101 == i || 69 == i) {
                u = h.toExponential(x), /[eE][-+]\d$/.test(u) && (u = u.slice(0, -1) + "0" + u.slice(-1))
              }else {
                if(102 == i || 70 == i) {
                  u = h.toFixed(x), 0 === h && jc(h) && (u = "-" + u)
                }
              }
              m = u.split("e");
              if(L && !w) {
                for(;1 < m[0].length && -1 != m[0].indexOf(".") && ("0" == m[0].slice(-1) || "." == m[0].slice(-1));) {
                  m[0] = m[0].slice(0, -1)
                }
              }else {
                for(w && -1 == u.indexOf(".") && (m[0] += ".");J > x++;) {
                  m[0] += "0"
                }
              }
              u = m[0] + (1 < m.length ? "e" + m[1] : "");
              69 == i && (u = u.toUpperCase());
              l && 0 <= h && (u = "+" + u)
            }else {
              u = (0 > h ? "-" : "") + "inf", y = p
            }
          }
          for(;u.length < H;) {
            u = C ? u + " " : y && ("-" == u[0] || "+" == u[0]) ? u[0] + "0" + u.slice(1) : (y ? "0" : " ") + u
          }
          97 > i && (u = u.toUpperCase());
          u.split("").forEach(function(a) {
            f.push(a.charCodeAt(0))
          });
          break;
        case "s":
          y = (l = c("i8*")) ? ic(l) : 6;
          L && (y = Math.min(y, J));
          if(!C) {
            for(;y < H--;) {
              f.push(32)
            }
          }
          if(l) {
            for(w = 0;w < y;w++) {
              f.push(G[l++ | 0])
            }
          }else {
            f = f.concat(K("(null)".substr(0, y), k))
          }
          if(C) {
            for(;y < H--;) {
              f.push(32)
            }
          }
          break;
        case "c":
          for(C && f.push(c("i8"));0 < --H;) {
            f.push(32)
          }
          C || f.push(c("i8"));
          break;
        case "n":
          C = c("i32*");
          D[C >> 2] = f.length;
          break;
        case "%":
          f.push(h);
          break;
        default:
          for(w = m;w < d + 2;w++) {
            f.push(B[w])
          }
      }
      d += 2
    }else {
      f.push(h), d += 1
    }
  }
  return f
}
function mc(a, b, c) {
  c = kc(b, c);
  b = ia();
  a = hc(F(c, "i8", Ka), 1, c.length, a);
  ja(b);
  return a
}
function nc(a) {
  nc.Ka || (A = A + 4095 >> 12 << 12, nc.Ka = k, z(sa), nc.bc = sa, sa = function() {
    ua("cannot dynamically allocate, sbrk now has control")
  });
  var b = A;
  0 != a && nc.bc(a);
  return b
}
function U() {
  return D[U.q >> 2]
}
function oc() {
  return!!oc.Ya
}
function pc(a) {
  var b = p;
  try {
    a == __ZTIi && (b = k)
  }catch(c) {
  }
  try {
    a == __ZTIj && (b = k)
  }catch(d) {
  }
  try {
    a == __ZTIl && (b = k)
  }catch(e) {
  }
  try {
    a == __ZTIm && (b = k)
  }catch(f) {
  }
  try {
    a == __ZTIx && (b = k)
  }catch(h) {
  }
  try {
    a == __ZTIy && (b = k)
  }catch(i) {
  }
  try {
    a == __ZTIf && (b = k)
  }catch(m) {
  }
  try {
    a == __ZTId && (b = k)
  }catch(l) {
  }
  try {
    a == __ZTIe && (b = k)
  }catch(C) {
  }
  try {
    a == __ZTIc && (b = k)
  }catch(w) {
  }
  try {
    a == __ZTIa && (b = k)
  }catch(y) {
  }
  try {
    a == __ZTIh && (b = k)
  }catch(H) {
  }
  try {
    a == __ZTIs && (b = k)
  }catch(L) {
  }
  try {
    a == __ZTIt && (b = k)
  }catch(J) {
  }
  return b
}
function qc(a, b, c) {
  if(0 == c) {
    return p
  }
  if(0 == b || b == a) {
    return k
  }
  switch(pc(b) ? b : D[D[b >> 2] - 8 >> 2]) {
    case 0:
      return 0 == D[D[a >> 2] - 8 >> 2] ? qc(D[a + 8 >> 2], D[b + 8 >> 2], c) : p;
    case 1:
      return p;
    case 2:
      return qc(a, D[b + 8 >> 2], c);
    default:
      return p
  }
}
function rc(a, b, c) {
  if(!rc.oc) {
    try {
      D[__ZTVN10__cxxabiv119__pointer_type_infoE >> 2] = 0
    }catch(d) {
    }
    try {
      D[NaN >> 2] = 1
    }catch(e) {
    }
    try {
      D[NaN >> 2] = 2
    }catch(f) {
    }
    rc.oc = k
  }
  D[U.q >> 2] = a;
  D[U.q + 4 >> 2] = b;
  D[U.q + 8 >> 2] = c;
  "uncaught_exception" in oc ? oc.Ya++ : oc.Ya = 1;
  g(a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.")
}
function sc(a) {
  try {
    return tc(a)
  }catch(b) {
  }
}
function uc() {
  if(uc.Ac) {
    uc.Ac = p
  }else {
    V.setThrew(0);
    D[U.q + 4 >> 2] = 0;
    var a = D[U.q >> 2], b = D[U.q + 8 >> 2];
    b && (ma("vi", b, [a]), D[U.q + 8 >> 2] = 0);
    a && (sc(a), D[U.q >> 2] = 0)
  }
}
var vc = F(1, "i32*", E);
function wc(a) {
  var b, c;
  wc.Ka ? (c = D[vc >> 2], b = D[c >> 2]) : (wc.Ka = k, W.USER = "root", W.PATH = "/", W.PWD = "/", W.HOME = "/home/emscripten", W.LANG = "en_US.UTF-8", W._ = "./this.program", b = F(1024, "i8", E), c = F(256, "i8*", E), D[c >> 2] = b, D[vc >> 2] = c);
  var d = [], e = 0, f;
  for(f in a) {
    if("string" === typeof a[f]) {
      var h = f + "=" + a[f];
      d.push(h);
      e += h.length
    }
  }
  1024 < e && g(Error("Environment size exceeded TOTAL_ENV_SIZE!"));
  for(a = 0;a < d.length;a++) {
    h = d[a];
    for(e = 0;e < h.length;e++) {
      B[b + e | 0] = h.charCodeAt(e)
    }
    B[b + e | 0] = 0;
    D[c + 4 * a >> 2] = b;
    b += h.length + 1
  }
  D[c + 4 * d.length >> 2] = 0
}
var W = {};
function xc(a) {
  if(0 === a) {
    return 0
  }
  a = Ea(a);
  if(!W.hasOwnProperty(a)) {
    return 0
  }
  xc.Y && tc(xc.Y);
  xc.Y = F(K(W[a]), "i8", Ja);
  return xc.Y
}
function yc(a, b, c) {
  if(a in pb) {
    if(pb[a].length > c - 1) {
      return M(N.Wb)
    }
    a = pb[a];
    for(c = 0;c < a.length;c++) {
      B[b + c | 0] = a.charCodeAt(c)
    }
    return B[b + c | 0] = 0
  }
  return M(N.p)
}
function zc(a) {
  zc.buffer || (zc.buffer = Ma(256));
  yc(a, zc.buffer, 256);
  return zc.buffer
}
function Ac(a) {
  s.print("exit(" + a + ") called");
  s.exit(a)
}
function Bc(a, b) {
  var c = bb(a & 255);
  B[Bc.Y | 0] = c;
  if(-1 == gc(b, Bc.Y, 1)) {
    if(c = R[b]) {
      c.error = k
    }
    return-1
  }
  return c
}
var Cc = p, Dc = p, Ec = p, Fc = p, Gc = j, Hc = j;
function Ic(a) {
  return{jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".") + 1)]
}
var Jc = [];
function Kc() {
  var a = s.canvas;
  Jc.forEach(function(b) {
    b(a.width, a.height)
  })
}
function Lc() {
  var a = s.canvas;
  this.Hc = a.width;
  this.Gc = a.height;
  a.width = screen.width;
  a.height = screen.height;
  "undefined" != typeof SDL && (a = Oa[SDL.screen + 0 * la >> 2], D[SDL.screen + 0 * la >> 2] = a | 8388608);
  Kc()
}
function Mc() {
  var a = s.canvas;
  a.width = this.Hc;
  a.height = this.Gc;
  "undefined" != typeof SDL && (a = Oa[SDL.screen + 0 * la >> 2], D[SDL.screen + 0 * la >> 2] = a & -8388609);
  Kc()
}
var Nc, Oc, Pc, Qc, mb = qa(4);
D[mb >> 2] = 0;
Gb = Array(4096);
Eb = zb(n, "/", 16895, 0);
Rb(Q, "/");
Ub("/tmp");
Ub("/dev");
xb[259] = {f:{O:function() {
  return 0
}, write:function() {
  return 0
}}};
Vb("/dev/null", 259);
wb(1280, {vb:function(a) {
  if(!a.input.length) {
    var b = n;
    if(ba) {
      if(b = process.stdin.read(), !b) {
        if(process.stdin._readableState && process.stdin._readableState.ended) {
          return n
        }
        return
      }
    }else {
      "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), b !== n && (b += "\n")) : "function" == typeof readline && (b = readline(), b !== n && (b += "\n"))
    }
    if(!b) {
      return n
    }
    a.input = K(b, k)
  }
  return a.input.shift()
}, ua:function(a, b) {
  b === n || 10 === b ? (s.print(a.U.join("")), a.U = []) : a.U.push(Rc.Sa(b))
}});
wb(1536, {ua:function(a, b) {
  b === n || 10 === b ? (s.printErr(a.U.join("")), a.U = []) : a.U.push(Rc.Sa(b))
}});
Vb("/dev/tty", 1280);
Vb("/dev/tty1", 1536);
Ub("/dev/shm");
Ub("/dev/shm/tmp");
Va.unshift({R:function() {
  if(!s.noFSInit && !bc) {
    z(!bc, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
    bc = k;
    s.stdin = s.stdin;
    s.stdout = s.stdout;
    s.stderr = s.stderr;
    s.stdin ? ec("/dev", "stdin", s.stdin) : Wb("/dev/tty", "/dev/stdin");
    s.stdout ? ec("/dev", "stdout", n, s.stdout) : Wb("/dev/tty", "/dev/stdout");
    s.stderr ? ec("/dev", "stderr", n, s.stderr) : Wb("/dev/tty1", "/dev/stderr");
    var a = Yb("/dev/stdin", "r");
    D[Cb >> 2] = a.A;
    z(1 === a.A, "invalid handle for stdin (" + a.A + ")");
    a = Yb("/dev/stdout", "w");
    D[Db >> 2] = a.A;
    z(2 === a.A, "invalid handle for stdout (" + a.A + ")");
    a = Yb("/dev/stderr", "w");
    D[kb >> 2] = a.A;
    z(3 === a.A, "invalid handle for stderr (" + a.A + ")")
  }
}});
Wa.push({R:function() {
  Hb = p
}});
Xa.push({R:function() {
  bc = p;
  for(var a = 0;a < R.length;a++) {
    var b = R[a];
    b && $b(b)
  }
}});
s.FS_createFolder = function(a, b, c, d) {
  a = O("string" === typeof a ? a : Kb(a), b);
  return Ub(a, cc(c, d))
};
s.FS_createPath = function(a, b) {
  for(var a = "string" === typeof a ? a : Kb(a), c = b.split("/").reverse();c.length;) {
    var d = c.pop();
    if(d) {
      var e = O(a, d);
      try {
        Ub(e)
      }catch(f) {
      }
      a = e
    }
  }
  return e
};
s.FS_createDataFile = dc;
s.FS_createPreloadedFile = function(a, b, c, d, e, f, h, i, m) {
  function l() {
    Ec = document.pointerLockElement === y || document.mozPointerLockElement === y || document.webkitPointerLockElement === y
  }
  function C(c) {
    function l(c) {
      i || dc(a, b, c, d, e, m);
      f && f();
      ib("cp " + H)
    }
    var y = p;
    s.preloadPlugins.forEach(function(a) {
      !y && a.canHandle(H) && (a.handle(c, H, l, function() {
        h && h();
        ib("cp " + H)
      }), y = k)
    });
    y || l(c)
  }
  s.preloadPlugins || (s.preloadPlugins = []);
  if(!Nc && !da) {
    Nc = k;
    try {
      new Blob, Oc = k
    }catch(w) {
      Oc = p, console.log("warning: no blob constructor, cannot create blobs with mimetypes")
    }
    Pc = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : !Oc ? console.log("warning: no BlobBuilder") : n;
    Qc = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : j;
    !s.Eb && "undefined" === typeof Qc && (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), s.Eb = k);
    s.preloadPlugins.push({canHandle:function(a) {
      return!s.Eb && /\.(jpg|jpeg|png|bmp)$/i.test(a)
    }, handle:function(a, b, c, d) {
      var e = n;
      if(Oc) {
        try {
          e = new Blob([a], {type:Ic(b)}), e.size !== a.length && (e = new Blob([(new Uint8Array(a)).buffer], {type:Ic(b)}))
        }catch(f) {
          var h = "Blob constructor present but fails: " + f + "; falling back to blob builder";
          na || (na = {});
          na[h] || (na[h] = 1, s.V(h))
        }
      }
      e || (e = new Pc, e.append((new Uint8Array(a)).buffer), e = e.getBlob());
      var i = Qc.createObjectURL(e), l = new Image;
      l.onload = function() {
        z(l.complete, "Image " + b + " could not be decoded");
        var d = document.createElement("canvas");
        d.width = l.width;
        d.height = l.height;
        d.getContext("2d").drawImage(l, 0, 0);
        s.preloadedImages[b] = d;
        Qc.revokeObjectURL(i);
        c && c(a)
      };
      l.onerror = function() {
        console.log("Image " + i + " could not be decoded");
        d && d()
      };
      l.src = i
    }});
    s.preloadPlugins.push({canHandle:function(a) {
      return!s.df && a.substr(-4) in {".ogg":1, ".wav":1, ".mp3":1}
    }, handle:function(a, b, c, d) {
      function e(d) {
        h || (h = k, s.preloadedAudios[b] = d, c && c(a))
      }
      function f() {
        h || (h = k, s.preloadedAudios[b] = new Audio, d && d())
      }
      var h = p;
      if(Oc) {
        try {
          var i = new Blob([a], {type:Ic(b)})
        }catch(l) {
          return f()
        }
        var i = Qc.createObjectURL(i), m = new Audio;
        m.addEventListener("canplaythrough", function() {
          e(m)
        }, p);
        m.onerror = function() {
          if(!h) {
            console.log("warning: browser could not fully decode audio " + b + ", trying slower base64 approach");
            for(var c = "", d = 0, f = 0, i = 0;i < a.length;i++) {
              d = d << 8 | a[i];
              for(f += 8;6 <= f;) {
                var l = d >> f - 6 & 63, f = f - 6, c = c + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l]
              }
            }
            2 == f ? (c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d & 3) << 4], c += "==") : 4 == f && (c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d & 15) << 2], c += "=");
            m.src = "data:audio/x-" + b.substr(-3) + ";base64," + c;
            e(m)
          }
        };
        m.src = i;
        setTimeout(function() {
          ya || e(m)
        }, 1E4)
      }else {
        return f()
      }
    }});
    var y = s.canvas;
    y.Ua = y.requestPointerLock || y.mozRequestPointerLock || y.webkitRequestPointerLock;
    y.tb = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || q();
    y.tb = y.tb.bind(document);
    document.addEventListener("pointerlockchange", l, p);
    document.addEventListener("mozpointerlockchange", l, p);
    document.addEventListener("webkitpointerlockchange", l, p);
    s.elementPointerLock && y.addEventListener("click", function(a) {
      !Ec && y.Ua && (y.Ua(), a.preventDefault())
    }, p)
  }
  var H = b ? tb(O(a, b)) : a;
  hb("cp " + H);
  if("string" == typeof c) {
    var L = h, J = function() {
      L ? L() : g('Loading data file "' + c + '" failed.')
    }, x = new XMLHttpRequest;
    x.open("GET", c, k);
    x.responseType = "arraybuffer";
    x.onload = function() {
      if(200 == x.status || 0 == x.status && x.response) {
        var a = x.response;
        z(a, 'Loading data file "' + c + '" failed (no arrayBuffer).');
        a = new Uint8Array(a);
        C(a);
        ib("al " + c)
      }else {
        J()
      }
    };
    x.onerror = J;
    x.send(n);
    hb("al " + c)
  }else {
    C(c)
  }
};
s.FS_createLazyFile = function(a, b, c, d, e) {
  var f, h;
  "undefined" !== typeof XMLHttpRequest ? (da || g("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc"), f = function() {
    this.Pa = p;
    this.na = []
  }, f.prototype.get = function(a) {
    if(!(a > this.length - 1 || 0 > a)) {
      var b = a % this.ma;
      return this.kc(Math.floor(a / this.ma))[b]
    }
  }, f.prototype.Cc = function(a) {
    this.kc = a
  }, f.prototype.lb = function() {
    var a = new XMLHttpRequest;
    a.open("HEAD", c, p);
    a.send(n);
    200 <= a.status && 300 > a.status || 304 === a.status || g(Error("Couldn't load " + c + ". Status: " + a.status));
    var b = Number(a.getResponseHeader("Content-length")), d, e = 1048576;
    if(!((d = a.getResponseHeader("Accept-Ranges")) && "bytes" === d)) {
      e = b
    }
    var f = this;
    f.Cc(function(a) {
      var d = a * e, h = (a + 1) * e - 1, h = Math.min(h, b - 1);
      if("undefined" === typeof f.na[a]) {
        var i = f.na;
        d > h && g(Error("invalid range (" + d + ", " + h + ") or no bytes requested!"));
        h > b - 1 && g(Error("only " + b + " bytes available! programmer error!"));
        var l = new XMLHttpRequest;
        l.open("GET", c, p);
        b !== e && l.setRequestHeader("Range", "bytes=" + d + "-" + h);
        "undefined" != typeof Uint8Array && (l.responseType = "arraybuffer");
        l.overrideMimeType && l.overrideMimeType("text/plain; charset=x-user-defined");
        l.send(n);
        200 <= l.status && 300 > l.status || 304 === l.status || g(Error("Couldn't load " + c + ". Status: " + l.status));
        d = l.response !== j ? new Uint8Array(l.response || []) : K(l.responseText || "", k);
        i[a] = d
      }
      "undefined" === typeof f.na[a] && g(Error("doXHR failed!"));
      return f.na[a]
    });
    this.ac = b;
    this.$b = e;
    this.Pa = k
  }, f = new f, Object.defineProperty(f, "length", {get:function() {
    this.Pa || this.lb();
    return this.ac
  }}), Object.defineProperty(f, "chunkSize", {get:function() {
    this.Pa || this.lb();
    return this.$b
  }}), h = j) : (h = c, f = j);
  var i, a = O("string" === typeof a ? a : Kb(a), b);
  i = Tb(a, cc(d, e));
  f ? i.i = f : h && (i.i = n, i.url = h);
  var m = {};
  Object.keys(i.f).forEach(function(a) {
    var b = i.f[a];
    m[a] = function() {
      fc(i) || g(new P(N.P));
      return b.apply(n, arguments)
    }
  });
  m.O = function(a, b, c, d, e) {
    fc(i) || g(new P(N.P));
    a = a.e.i;
    if(e >= a.length) {
      return 0
    }
    d = Math.min(a.length - e, d);
    z(0 <= d);
    if(a.slice) {
      for(var f = 0;f < d;f++) {
        b[c + f] = a[e + f]
      }
    }else {
      for(f = 0;f < d;f++) {
        b[c + f] = a.get(e + f)
      }
    }
    return d
  };
  i.f = m;
  return i
};
s.FS_createLink = function(a, b, c) {
  a = O("string" === typeof a ? a : Kb(a), b);
  return Wb(c, a)
};
s.FS_createDevice = ec;
Va.unshift({R:q()});
Xa.push({R:q()});
var Rc = new oa;
Va.push({R:function() {
  T.root = Rb(T, n)
}});
U.q = F(12, "void*", E);
wc(W);
Bc.Y = F([0], "i8", E);
s.requestFullScreen = function(a, b) {
  function c() {
    Dc = p;
    (document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement) === d ? (d.mb = document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen, d.mb = d.mb.bind(document), Gc && d.Ua(), Dc = k, Hc && Lc()) : Hc && Mc();
    if(s.onFullScreen) {
      s.onFullScreen(Dc)
    }
  }
  Gc = a;
  Hc = b;
  "undefined" === typeof Gc && (Gc = k);
  "undefined" === typeof Hc && (Hc = p);
  var d = s.canvas;
  Fc || (Fc = k, document.addEventListener("fullscreenchange", c, p), document.addEventListener("mozfullscreenchange", c, p), document.addEventListener("webkitfullscreenchange", c, p));
  d.zc = d.requestFullScreen || d.mozRequestFullScreen || (d.webkitRequestFullScreen ? function() {
    d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
  } : n);
  d.zc()
};
s.requestAnimationFrame = function(a) {
  window.requestAnimationFrame || (window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.setTimeout);
  window.requestAnimationFrame(a)
};
s.setCanvasSize = function(a, b, c) {
  var d = s.canvas;
  d.width = a;
  d.height = b;
  c || Kc()
};
s.pauseMainLoop = q();
s.resumeMainLoop = function() {
  Cc && (Cc = p, n())
};
s.getUserMedia = function() {
  window.ub || (window.ub = navigator.getUserMedia || navigator.mozGetUserMedia);
  window.ub(j)
};
Qa = v = va(ra);
Ra = Qa + 5242880;
Sa = A = va(Ra);
z(Sa < ta);
var Sc = F([8, 7, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "i8", 3), Tc = F([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 
2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 
0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", 3), Uc = Math.min;
var V = (function(global,env,buffer) {
// EMSCRIPTEN_START_ASM
 "use asm";
 var a = new global.Int8Array(buffer);
 var b = new global.Int16Array(buffer);
 var c = new global.Int32Array(buffer);
 var d = new global.Uint8Array(buffer);
 var e = new global.Uint16Array(buffer);
 var f = new global.Uint32Array(buffer);
 var g = new global.Float32Array(buffer);
 var h = new global.Float64Array(buffer);
 var i = env.STACKTOP | 0;
 var j = env.STACK_MAX | 0;
 var k = env.tempDoublePtr | 0;
 var l = env.ABORT | 0;
 var m = env.cttz_i8 | 0;
 var n = env.ctlz_i8 | 0;
 var o = env._stderr | 0;
 var p = env.__ZTVN10__cxxabiv120__si_class_type_infoE | 0;
 var q = env.__ZTVN10__cxxabiv117__class_type_infoE | 0;
 var r = env.___progname | 0;
 var s = +env.NaN;
 var t = +env.Infinity;
 var u = 0;
 var v = 0;
 var w = 0;
 var x = 0;
 var y = 0, z = 0, A = 0, B = 0, C = 0.0, D = 0, E = 0, F = 0, G = 0.0;
 var H = 0;
 var I = 0;
 var J = 0;
 var K = 0;
 var L = 0;
 var M = 0;
 var N = 0;
 var O = 0;
 var P = 0;
 var Q = 0;
 var R = global.Math.floor;
 var S = global.Math.abs;
 var T = global.Math.sqrt;
 var U = global.Math.pow;
 var V = global.Math.cos;
 var W = global.Math.sin;
 var X = global.Math.tan;
 var Y = global.Math.acos;
 var Z = global.Math.asin;
 var _ = global.Math.atan;
 var $ = global.Math.atan2;
 var aa = global.Math.exp;
 var ab = global.Math.log;
 var ac = global.Math.ceil;
 var ad = global.Math.imul;
 var ae = env.abort;
 var af = env.assert;
 var ag = env.asmPrintInt;
 var ah = env.asmPrintFloat;
 var ai = env.min;
 var aj = env.invoke_vi;
 var ak = env.invoke_vii;
 var al = env.invoke_ii;
 var am = env.invoke_viii;
 var an = env.invoke_v;
 var ao = env.invoke_iii;
 var ap = env._strncmp;
 var aq = env._llvm_va_end;
 var ar = env._sysconf;
 var as = env.___cxa_throw;
 var at = env._strerror;
 var au = env._abort;
 var av = env._fprintf;
 var aw = env._llvm_eh_exception;
 var ax = env.___cxa_free_exception;
 var ay = env._fflush;
 var az = env.___buildEnvironment;
 var aA = env.__reallyNegative;
 var aB = env._strchr;
 var aC = env._fputc;
 var aD = env.___setErrNo;
 var aE = env._fwrite;
 var aF = env._send;
 var aG = env._write;
 var aH = env._exit;
 var aI = env.___cxa_find_matching_catch;
 var aJ = env.___cxa_allocate_exception;
 var aK = env._isspace;
 var aL = env.__formatString;
 var aM = env.___resumeException;
 var aN = env._llvm_uadd_with_overflow_i32;
 var aO = env.___cxa_does_inherit;
 var aP = env._getenv;
 var aQ = env._vfprintf;
 var aR = env.___cxa_begin_catch;
 var aS = env.__ZSt18uncaught_exceptionv;
 var aT = env._pwrite;
 var aU = env.___cxa_call_unexpected;
 var aV = env._sbrk;
 var aW = env._strerror_r;
 var aX = env.___errno_location;
 var aY = env.___gxx_personality_v0;
 var aZ = env.___cxa_is_number_type;
 var a_ = env._time;
 var a$ = env.__exit;
 var a0 = env.___cxa_end_catch;
// EMSCRIPTEN_START_FUNCS
function a7(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ab = 0, ac = 0, ad = 0, ae = 0, af = 0, ag = 0, ah = 0, ai = 0, aj = 0, ak = 0, al = 0, am = 0, an = 0, ao = 0, ap = 0, aq = 0, as = 0, at = 0, av = 0, aw = 0, ax = 0, ay = 0, az = 0, aA = 0, aB = 0, aC = 0, aD = 0, aE = 0, aF = 0, aG = 0, aH = 0, aI = 0, aJ = 0, aK = 0, aL = 0;
 do {
  if (a >>> 0 < 245) {
   if (a >>> 0 < 11) {
    b = 16;
   } else {
    b = a + 11 & -8;
   }
   d = b >>> 3;
   e = c[208] | 0;
   f = e >>> (d >>> 0);
   if ((f & 3 | 0) != 0) {
    g = (f & 1 ^ 1) + d | 0;
    h = g << 1;
    i = 872 + (h << 2) | 0;
    j = 872 + (h + 2 << 2) | 0;
    h = c[j >> 2] | 0;
    k = h + 8 | 0;
    l = c[k >> 2] | 0;
    do {
     if ((i | 0) == (l | 0)) {
      c[208] = e & ~(1 << g);
     } else {
      if (l >>> 0 < (c[212] | 0) >>> 0) {
       au();
       return 0;
      }
      m = l + 12 | 0;
      if ((c[m >> 2] | 0) == (h | 0)) {
       c[m >> 2] = i;
       c[j >> 2] = l;
       break;
      } else {
       au();
       return 0;
      }
     }
    } while (0);
    l = g << 3;
    c[h + 4 >> 2] = l | 3;
    j = h + (l | 4) | 0;
    c[j >> 2] = c[j >> 2] | 1;
    n = k;
    return n | 0;
   }
   if (b >>> 0 <= (c[210] | 0) >>> 0) {
    o = b;
    break;
   }
   if ((f | 0) != 0) {
    j = 2 << d;
    l = f << d & (j | -j);
    j = (l & -l) - 1 | 0;
    l = j >>> 12 & 16;
    i = j >>> (l >>> 0);
    j = i >>> 5 & 8;
    m = i >>> (j >>> 0);
    i = m >>> 2 & 4;
    p = m >>> (i >>> 0);
    m = p >>> 1 & 2;
    q = p >>> (m >>> 0);
    p = q >>> 1 & 1;
    r = (j | l | i | m | p) + (q >>> (p >>> 0)) | 0;
    p = r << 1;
    q = 872 + (p << 2) | 0;
    m = 872 + (p + 2 << 2) | 0;
    p = c[m >> 2] | 0;
    i = p + 8 | 0;
    l = c[i >> 2] | 0;
    do {
     if ((q | 0) == (l | 0)) {
      c[208] = e & ~(1 << r);
     } else {
      if (l >>> 0 < (c[212] | 0) >>> 0) {
       au();
       return 0;
      }
      j = l + 12 | 0;
      if ((c[j >> 2] | 0) == (p | 0)) {
       c[j >> 2] = q;
       c[m >> 2] = l;
       break;
      } else {
       au();
       return 0;
      }
     }
    } while (0);
    l = r << 3;
    m = l - b | 0;
    c[p + 4 >> 2] = b | 3;
    q = p;
    e = q + b | 0;
    c[q + (b | 4) >> 2] = m | 1;
    c[q + l >> 2] = m;
    l = c[210] | 0;
    if ((l | 0) != 0) {
     q = c[213] | 0;
     d = l >>> 3;
     l = d << 1;
     f = 872 + (l << 2) | 0;
     k = c[208] | 0;
     h = 1 << d;
     do {
      if ((k & h | 0) == 0) {
       c[208] = k | h;
       s = f;
       t = 872 + (l + 2 << 2) | 0;
      } else {
       d = 872 + (l + 2 << 2) | 0;
       g = c[d >> 2] | 0;
       if (g >>> 0 >= (c[212] | 0) >>> 0) {
        s = g;
        t = d;
        break;
       }
       au();
       return 0;
      }
     } while (0);
     c[t >> 2] = q;
     c[s + 12 >> 2] = q;
     c[q + 8 >> 2] = s;
     c[q + 12 >> 2] = f;
    }
    c[210] = m;
    c[213] = e;
    n = i;
    return n | 0;
   }
   l = c[209] | 0;
   if ((l | 0) == 0) {
    o = b;
    break;
   }
   h = (l & -l) - 1 | 0;
   l = h >>> 12 & 16;
   k = h >>> (l >>> 0);
   h = k >>> 5 & 8;
   p = k >>> (h >>> 0);
   k = p >>> 2 & 4;
   r = p >>> (k >>> 0);
   p = r >>> 1 & 2;
   d = r >>> (p >>> 0);
   r = d >>> 1 & 1;
   g = c[1136 + ((h | l | k | p | r) + (d >>> (r >>> 0)) << 2) >> 2] | 0;
   r = g;
   d = g;
   p = (c[g + 4 >> 2] & -8) - b | 0;
   while (1) {
    g = c[r + 16 >> 2] | 0;
    if ((g | 0) == 0) {
     k = c[r + 20 >> 2] | 0;
     if ((k | 0) == 0) {
      break;
     } else {
      u = k;
     }
    } else {
     u = g;
    }
    g = (c[u + 4 >> 2] & -8) - b | 0;
    k = g >>> 0 < p >>> 0;
    r = u;
    d = k ? u : d;
    p = k ? g : p;
   }
   r = d;
   i = c[212] | 0;
   if (r >>> 0 < i >>> 0) {
    au();
    return 0;
   }
   e = r + b | 0;
   m = e;
   if (r >>> 0 >= e >>> 0) {
    au();
    return 0;
   }
   e = c[d + 24 >> 2] | 0;
   f = c[d + 12 >> 2] | 0;
   do {
    if ((f | 0) == (d | 0)) {
     q = d + 20 | 0;
     g = c[q >> 2] | 0;
     if ((g | 0) == 0) {
      k = d + 16 | 0;
      l = c[k >> 2] | 0;
      if ((l | 0) == 0) {
       v = 0;
       break;
      } else {
       w = l;
       x = k;
      }
     } else {
      w = g;
      x = q;
     }
     while (1) {
      q = w + 20 | 0;
      g = c[q >> 2] | 0;
      if ((g | 0) != 0) {
       w = g;
       x = q;
       continue;
      }
      q = w + 16 | 0;
      g = c[q >> 2] | 0;
      if ((g | 0) == 0) {
       break;
      } else {
       w = g;
       x = q;
      }
     }
     if (x >>> 0 < i >>> 0) {
      au();
      return 0;
     } else {
      c[x >> 2] = 0;
      v = w;
      break;
     }
    } else {
     q = c[d + 8 >> 2] | 0;
     if (q >>> 0 < i >>> 0) {
      au();
      return 0;
     }
     g = q + 12 | 0;
     if ((c[g >> 2] | 0) != (d | 0)) {
      au();
      return 0;
     }
     k = f + 8 | 0;
     if ((c[k >> 2] | 0) == (d | 0)) {
      c[g >> 2] = f;
      c[k >> 2] = q;
      v = f;
      break;
     } else {
      au();
      return 0;
     }
    }
   } while (0);
   L223 : do {
    if ((e | 0) != 0) {
     f = d + 28 | 0;
     i = 1136 + (c[f >> 2] << 2) | 0;
     do {
      if ((d | 0) == (c[i >> 2] | 0)) {
       c[i >> 2] = v;
       if ((v | 0) != 0) {
        break;
       }
       c[209] = c[209] & ~(1 << c[f >> 2]);
       break L223;
      } else {
       if (e >>> 0 < (c[212] | 0) >>> 0) {
        au();
        return 0;
       }
       q = e + 16 | 0;
       if ((c[q >> 2] | 0) == (d | 0)) {
        c[q >> 2] = v;
       } else {
        c[e + 20 >> 2] = v;
       }
       if ((v | 0) == 0) {
        break L223;
       }
      }
     } while (0);
     if (v >>> 0 < (c[212] | 0) >>> 0) {
      au();
      return 0;
     }
     c[v + 24 >> 2] = e;
     f = c[d + 16 >> 2] | 0;
     do {
      if ((f | 0) != 0) {
       if (f >>> 0 < (c[212] | 0) >>> 0) {
        au();
        return 0;
       } else {
        c[v + 16 >> 2] = f;
        c[f + 24 >> 2] = v;
        break;
       }
      }
     } while (0);
     f = c[d + 20 >> 2] | 0;
     if ((f | 0) == 0) {
      break;
     }
     if (f >>> 0 < (c[212] | 0) >>> 0) {
      au();
      return 0;
     } else {
      c[v + 20 >> 2] = f;
      c[f + 24 >> 2] = v;
      break;
     }
    }
   } while (0);
   if (p >>> 0 < 16) {
    e = p + b | 0;
    c[d + 4 >> 2] = e | 3;
    f = r + (e + 4) | 0;
    c[f >> 2] = c[f >> 2] | 1;
   } else {
    c[d + 4 >> 2] = b | 3;
    c[r + (b | 4) >> 2] = p | 1;
    c[r + (p + b) >> 2] = p;
    f = c[210] | 0;
    if ((f | 0) != 0) {
     e = c[213] | 0;
     i = f >>> 3;
     f = i << 1;
     q = 872 + (f << 2) | 0;
     k = c[208] | 0;
     g = 1 << i;
     do {
      if ((k & g | 0) == 0) {
       c[208] = k | g;
       y = q;
       z = 872 + (f + 2 << 2) | 0;
      } else {
       i = 872 + (f + 2 << 2) | 0;
       l = c[i >> 2] | 0;
       if (l >>> 0 >= (c[212] | 0) >>> 0) {
        y = l;
        z = i;
        break;
       }
       au();
       return 0;
      }
     } while (0);
     c[z >> 2] = e;
     c[y + 12 >> 2] = e;
     c[e + 8 >> 2] = y;
     c[e + 12 >> 2] = q;
    }
    c[210] = p;
    c[213] = m;
   }
   n = d + 8 | 0;
   return n | 0;
  } else {
   if (a >>> 0 > 4294967231) {
    o = -1;
    break;
   }
   f = a + 11 | 0;
   g = f & -8;
   k = c[209] | 0;
   if ((k | 0) == 0) {
    o = g;
    break;
   }
   r = -g | 0;
   i = f >>> 8;
   do {
    if ((i | 0) == 0) {
     A = 0;
    } else {
     if (g >>> 0 > 16777215) {
      A = 31;
      break;
     }
     f = (i + 1048320 | 0) >>> 16 & 8;
     l = i << f;
     h = (l + 520192 | 0) >>> 16 & 4;
     j = l << h;
     l = (j + 245760 | 0) >>> 16 & 2;
     B = 14 - (h | f | l) + (j << l >>> 15) | 0;
     A = g >>> ((B + 7 | 0) >>> 0) & 1 | B << 1;
    }
   } while (0);
   i = c[1136 + (A << 2) >> 2] | 0;
   L271 : do {
    if ((i | 0) == 0) {
     C = 0;
     D = r;
     E = 0;
    } else {
     if ((A | 0) == 31) {
      F = 0;
     } else {
      F = 25 - (A >>> 1) | 0;
     }
     d = 0;
     m = r;
     p = i;
     q = g << F;
     e = 0;
     while (1) {
      B = c[p + 4 >> 2] & -8;
      l = B - g | 0;
      if (l >>> 0 < m >>> 0) {
       if ((B | 0) == (g | 0)) {
        C = p;
        D = l;
        E = p;
        break L271;
       } else {
        G = p;
        H = l;
       }
      } else {
       G = d;
       H = m;
      }
      l = c[p + 20 >> 2] | 0;
      B = c[p + 16 + (q >>> 31 << 2) >> 2] | 0;
      j = (l | 0) == 0 | (l | 0) == (B | 0) ? e : l;
      if ((B | 0) == 0) {
       C = G;
       D = H;
       E = j;
       break;
      } else {
       d = G;
       m = H;
       p = B;
       q = q << 1;
       e = j;
      }
     }
    }
   } while (0);
   if ((E | 0) == 0 & (C | 0) == 0) {
    i = 2 << A;
    r = k & (i | -i);
    if ((r | 0) == 0) {
     o = g;
     break;
    }
    i = (r & -r) - 1 | 0;
    r = i >>> 12 & 16;
    e = i >>> (r >>> 0);
    i = e >>> 5 & 8;
    q = e >>> (i >>> 0);
    e = q >>> 2 & 4;
    p = q >>> (e >>> 0);
    q = p >>> 1 & 2;
    m = p >>> (q >>> 0);
    p = m >>> 1 & 1;
    I = c[1136 + ((i | r | e | q | p) + (m >>> (p >>> 0)) << 2) >> 2] | 0;
   } else {
    I = E;
   }
   if ((I | 0) == 0) {
    J = D;
    K = C;
   } else {
    p = I;
    m = D;
    q = C;
    while (1) {
     e = (c[p + 4 >> 2] & -8) - g | 0;
     r = e >>> 0 < m >>> 0;
     i = r ? e : m;
     e = r ? p : q;
     r = c[p + 16 >> 2] | 0;
     if ((r | 0) != 0) {
      p = r;
      m = i;
      q = e;
      continue;
     }
     r = c[p + 20 >> 2] | 0;
     if ((r | 0) == 0) {
      J = i;
      K = e;
      break;
     } else {
      p = r;
      m = i;
      q = e;
     }
    }
   }
   if ((K | 0) == 0) {
    o = g;
    break;
   }
   if (J >>> 0 >= ((c[210] | 0) - g | 0) >>> 0) {
    o = g;
    break;
   }
   q = K;
   m = c[212] | 0;
   if (q >>> 0 < m >>> 0) {
    au();
    return 0;
   }
   p = q + g | 0;
   k = p;
   if (q >>> 0 >= p >>> 0) {
    au();
    return 0;
   }
   e = c[K + 24 >> 2] | 0;
   i = c[K + 12 >> 2] | 0;
   do {
    if ((i | 0) == (K | 0)) {
     r = K + 20 | 0;
     d = c[r >> 2] | 0;
     if ((d | 0) == 0) {
      j = K + 16 | 0;
      B = c[j >> 2] | 0;
      if ((B | 0) == 0) {
       L = 0;
       break;
      } else {
       M = B;
       N = j;
      }
     } else {
      M = d;
      N = r;
     }
     while (1) {
      r = M + 20 | 0;
      d = c[r >> 2] | 0;
      if ((d | 0) != 0) {
       M = d;
       N = r;
       continue;
      }
      r = M + 16 | 0;
      d = c[r >> 2] | 0;
      if ((d | 0) == 0) {
       break;
      } else {
       M = d;
       N = r;
      }
     }
     if (N >>> 0 < m >>> 0) {
      au();
      return 0;
     } else {
      c[N >> 2] = 0;
      L = M;
      break;
     }
    } else {
     r = c[K + 8 >> 2] | 0;
     if (r >>> 0 < m >>> 0) {
      au();
      return 0;
     }
     d = r + 12 | 0;
     if ((c[d >> 2] | 0) != (K | 0)) {
      au();
      return 0;
     }
     j = i + 8 | 0;
     if ((c[j >> 2] | 0) == (K | 0)) {
      c[d >> 2] = i;
      c[j >> 2] = r;
      L = i;
      break;
     } else {
      au();
      return 0;
     }
    }
   } while (0);
   L321 : do {
    if ((e | 0) != 0) {
     i = K + 28 | 0;
     m = 1136 + (c[i >> 2] << 2) | 0;
     do {
      if ((K | 0) == (c[m >> 2] | 0)) {
       c[m >> 2] = L;
       if ((L | 0) != 0) {
        break;
       }
       c[209] = c[209] & ~(1 << c[i >> 2]);
       break L321;
      } else {
       if (e >>> 0 < (c[212] | 0) >>> 0) {
        au();
        return 0;
       }
       r = e + 16 | 0;
       if ((c[r >> 2] | 0) == (K | 0)) {
        c[r >> 2] = L;
       } else {
        c[e + 20 >> 2] = L;
       }
       if ((L | 0) == 0) {
        break L321;
       }
      }
     } while (0);
     if (L >>> 0 < (c[212] | 0) >>> 0) {
      au();
      return 0;
     }
     c[L + 24 >> 2] = e;
     i = c[K + 16 >> 2] | 0;
     do {
      if ((i | 0) != 0) {
       if (i >>> 0 < (c[212] | 0) >>> 0) {
        au();
        return 0;
       } else {
        c[L + 16 >> 2] = i;
        c[i + 24 >> 2] = L;
        break;
       }
      }
     } while (0);
     i = c[K + 20 >> 2] | 0;
     if ((i | 0) == 0) {
      break;
     }
     if (i >>> 0 < (c[212] | 0) >>> 0) {
      au();
      return 0;
     } else {
      c[L + 20 >> 2] = i;
      c[i + 24 >> 2] = L;
      break;
     }
    }
   } while (0);
   L349 : do {
    if (J >>> 0 < 16) {
     e = J + g | 0;
     c[K + 4 >> 2] = e | 3;
     i = q + (e + 4) | 0;
     c[i >> 2] = c[i >> 2] | 1;
    } else {
     c[K + 4 >> 2] = g | 3;
     c[q + (g | 4) >> 2] = J | 1;
     c[q + (J + g) >> 2] = J;
     i = J >>> 3;
     if (J >>> 0 < 256) {
      e = i << 1;
      m = 872 + (e << 2) | 0;
      r = c[208] | 0;
      j = 1 << i;
      do {
       if ((r & j | 0) == 0) {
        c[208] = r | j;
        O = m;
        P = 872 + (e + 2 << 2) | 0;
       } else {
        i = 872 + (e + 2 << 2) | 0;
        d = c[i >> 2] | 0;
        if (d >>> 0 >= (c[212] | 0) >>> 0) {
         O = d;
         P = i;
         break;
        }
        au();
        return 0;
       }
      } while (0);
      c[P >> 2] = k;
      c[O + 12 >> 2] = k;
      c[q + (g + 8) >> 2] = O;
      c[q + (g + 12) >> 2] = m;
      break;
     }
     e = p;
     j = J >>> 8;
     do {
      if ((j | 0) == 0) {
       Q = 0;
      } else {
       if (J >>> 0 > 16777215) {
        Q = 31;
        break;
       }
       r = (j + 1048320 | 0) >>> 16 & 8;
       i = j << r;
       d = (i + 520192 | 0) >>> 16 & 4;
       B = i << d;
       i = (B + 245760 | 0) >>> 16 & 2;
       l = 14 - (d | r | i) + (B << i >>> 15) | 0;
       Q = J >>> ((l + 7 | 0) >>> 0) & 1 | l << 1;
      }
     } while (0);
     j = 1136 + (Q << 2) | 0;
     c[q + (g + 28) >> 2] = Q;
     c[q + (g + 20) >> 2] = 0;
     c[q + (g + 16) >> 2] = 0;
     m = c[209] | 0;
     l = 1 << Q;
     if ((m & l | 0) == 0) {
      c[209] = m | l;
      c[j >> 2] = e;
      c[q + (g + 24) >> 2] = j;
      c[q + (g + 12) >> 2] = e;
      c[q + (g + 8) >> 2] = e;
      break;
     }
     l = c[j >> 2] | 0;
     if ((Q | 0) == 31) {
      R = 0;
     } else {
      R = 25 - (Q >>> 1) | 0;
     }
     L370 : do {
      if ((c[l + 4 >> 2] & -8 | 0) == (J | 0)) {
       S = l;
      } else {
       j = l;
       m = J << R;
       while (1) {
        T = j + 16 + (m >>> 31 << 2) | 0;
        i = c[T >> 2] | 0;
        if ((i | 0) == 0) {
         break;
        }
        if ((c[i + 4 >> 2] & -8 | 0) == (J | 0)) {
         S = i;
         break L370;
        } else {
         j = i;
         m = m << 1;
        }
       }
       if (T >>> 0 < (c[212] | 0) >>> 0) {
        au();
        return 0;
       } else {
        c[T >> 2] = e;
        c[q + (g + 24) >> 2] = j;
        c[q + (g + 12) >> 2] = e;
        c[q + (g + 8) >> 2] = e;
        break L349;
       }
      }
     } while (0);
     l = S + 8 | 0;
     m = c[l >> 2] | 0;
     i = c[212] | 0;
     if (S >>> 0 < i >>> 0) {
      au();
      return 0;
     }
     if (m >>> 0 < i >>> 0) {
      au();
      return 0;
     } else {
      c[m + 12 >> 2] = e;
      c[l >> 2] = e;
      c[q + (g + 8) >> 2] = m;
      c[q + (g + 12) >> 2] = S;
      c[q + (g + 24) >> 2] = 0;
      break;
     }
    }
   } while (0);
   n = K + 8 | 0;
   return n | 0;
  }
 } while (0);
 K = c[210] | 0;
 if (o >>> 0 <= K >>> 0) {
  S = K - o | 0;
  T = c[213] | 0;
  if (S >>> 0 > 15) {
   J = T;
   c[213] = J + o;
   c[210] = S;
   c[J + (o + 4) >> 2] = S | 1;
   c[J + K >> 2] = S;
   c[T + 4 >> 2] = o | 3;
  } else {
   c[210] = 0;
   c[213] = 0;
   c[T + 4 >> 2] = K | 3;
   S = T + (K + 4) | 0;
   c[S >> 2] = c[S >> 2] | 1;
  }
  n = T + 8 | 0;
  return n | 0;
 }
 T = c[211] | 0;
 if (o >>> 0 < T >>> 0) {
  S = T - o | 0;
  c[211] = S;
  T = c[214] | 0;
  K = T;
  c[214] = K + o;
  c[K + (o + 4) >> 2] = S | 1;
  c[T + 4 >> 2] = o | 3;
  n = T + 8 | 0;
  return n | 0;
 }
 do {
  if ((c[200] | 0) == 0) {
   T = ar(30) | 0;
   if ((T - 1 & T | 0) == 0) {
    c[202] = T;
    c[201] = T;
    c[203] = -1;
    c[204] = -1;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 T = o + 48 | 0;
 S = c[202] | 0;
 K = o + 47 | 0;
 J = S + K | 0;
 R = -S | 0;
 S = J & R;
 if (S >>> 0 <= o >>> 0) {
  n = 0;
  return n | 0;
 }
 Q = c[318] | 0;
 do {
  if ((Q | 0) != 0) {
   O = c[316] | 0;
   P = O + S | 0;
   if (P >>> 0 <= O >>> 0 | P >>> 0 > Q >>> 0) {
    n = 0;
   } else {
    break;
   }
   return n | 0;
  }
 } while (0);
 L414 : do {
  if ((c[319] & 4 | 0) == 0) {
   Q = c[214] | 0;
   L416 : do {
    if ((Q | 0) == 0) {
     U = 293;
    } else {
     P = Q;
     O = 1280;
     while (1) {
      V = O | 0;
      L = c[V >> 2] | 0;
      if (L >>> 0 <= P >>> 0) {
       W = O + 4 | 0;
       if ((L + (c[W >> 2] | 0) | 0) >>> 0 > P >>> 0) {
        break;
       }
      }
      L = c[O + 8 >> 2] | 0;
      if ((L | 0) == 0) {
       U = 293;
       break L416;
      } else {
       O = L;
      }
     }
     if ((O | 0) == 0) {
      U = 293;
      break;
     }
     P = J - (c[211] | 0) & R;
     if (P >>> 0 >= 2147483647) {
      X = 0;
      break;
     }
     e = aV(P | 0) | 0;
     L = (e | 0) == ((c[V >> 2] | 0) + (c[W >> 2] | 0) | 0);
     Y = L ? e : -1;
     Z = L ? P : 0;
     _ = e;
     $ = P;
     U = 302;
    }
   } while (0);
   do {
    if ((U | 0) == 293) {
     Q = aV(0) | 0;
     if ((Q | 0) == -1) {
      X = 0;
      break;
     }
     P = Q;
     e = c[201] | 0;
     L = e - 1 | 0;
     if ((L & P | 0) == 0) {
      aa = S;
     } else {
      aa = S - P + (L + P & -e) | 0;
     }
     e = c[316] | 0;
     P = e + aa | 0;
     if (!(aa >>> 0 > o >>> 0 & aa >>> 0 < 2147483647)) {
      X = 0;
      break;
     }
     L = c[318] | 0;
     if ((L | 0) != 0) {
      if (P >>> 0 <= e >>> 0 | P >>> 0 > L >>> 0) {
       X = 0;
       break;
      }
     }
     L = aV(aa | 0) | 0;
     P = (L | 0) == (Q | 0);
     Y = P ? Q : -1;
     Z = P ? aa : 0;
     _ = L;
     $ = aa;
     U = 302;
    }
   } while (0);
   L436 : do {
    if ((U | 0) == 302) {
     L = -$ | 0;
     if ((Y | 0) != -1) {
      ab = Z;
      ac = Y;
      U = 313;
      break L414;
     }
     do {
      if ((_ | 0) != -1 & $ >>> 0 < 2147483647 & $ >>> 0 < T >>> 0) {
       P = c[202] | 0;
       Q = K - $ + P & -P;
       if (Q >>> 0 >= 2147483647) {
        ad = $;
        break;
       }
       if ((aV(Q | 0) | 0) == -1) {
        aV(L | 0) | 0;
        X = Z;
        break L436;
       } else {
        ad = Q + $ | 0;
        break;
       }
      } else {
       ad = $;
      }
     } while (0);
     if ((_ | 0) == -1) {
      X = Z;
     } else {
      ab = ad;
      ac = _;
      U = 313;
      break L414;
     }
    }
   } while (0);
   c[319] = c[319] | 4;
   ae = X;
   U = 310;
  } else {
   ae = 0;
   U = 310;
  }
 } while (0);
 do {
  if ((U | 0) == 310) {
   if (S >>> 0 >= 2147483647) {
    break;
   }
   X = aV(S | 0) | 0;
   _ = aV(0) | 0;
   if (!((_ | 0) != -1 & (X | 0) != -1 & X >>> 0 < _ >>> 0)) {
    break;
   }
   ad = _ - X | 0;
   _ = ad >>> 0 > (o + 40 | 0) >>> 0;
   if (_) {
    ab = _ ? ad : ae;
    ac = X;
    U = 313;
   }
  }
 } while (0);
 do {
  if ((U | 0) == 313) {
   ae = (c[316] | 0) + ab | 0;
   c[316] = ae;
   if (ae >>> 0 > (c[317] | 0) >>> 0) {
    c[317] = ae;
   }
   ae = c[214] | 0;
   L456 : do {
    if ((ae | 0) == 0) {
     S = c[212] | 0;
     if ((S | 0) == 0 | ac >>> 0 < S >>> 0) {
      c[212] = ac;
     }
     c[320] = ac;
     c[321] = ab;
     c[323] = 0;
     c[217] = c[200];
     c[216] = -1;
     S = 0;
     do {
      X = S << 1;
      ad = 872 + (X << 2) | 0;
      c[872 + (X + 3 << 2) >> 2] = ad;
      c[872 + (X + 2 << 2) >> 2] = ad;
      S = S + 1 | 0;
     } while (S >>> 0 < 32);
     S = ac + 8 | 0;
     if ((S & 7 | 0) == 0) {
      af = 0;
     } else {
      af = -S & 7;
     }
     S = ab - 40 - af | 0;
     c[214] = ac + af;
     c[211] = S;
     c[ac + (af + 4) >> 2] = S | 1;
     c[ac + (ab - 36) >> 2] = 40;
     c[215] = c[204];
    } else {
     S = 1280;
     while (1) {
      ag = c[S >> 2] | 0;
      ah = S + 4 | 0;
      ai = c[ah >> 2] | 0;
      if ((ac | 0) == (ag + ai | 0)) {
       U = 325;
       break;
      }
      ad = c[S + 8 >> 2] | 0;
      if ((ad | 0) == 0) {
       break;
      } else {
       S = ad;
      }
     }
     do {
      if ((U | 0) == 325) {
       if ((c[S + 12 >> 2] & 8 | 0) != 0) {
        break;
       }
       ad = ae;
       if (!(ad >>> 0 >= ag >>> 0 & ad >>> 0 < ac >>> 0)) {
        break;
       }
       c[ah >> 2] = ai + ab;
       ad = c[214] | 0;
       X = (c[211] | 0) + ab | 0;
       _ = ad;
       Z = ad + 8 | 0;
       if ((Z & 7 | 0) == 0) {
        aj = 0;
       } else {
        aj = -Z & 7;
       }
       Z = X - aj | 0;
       c[214] = _ + aj;
       c[211] = Z;
       c[_ + (aj + 4) >> 2] = Z | 1;
       c[_ + (X + 4) >> 2] = 40;
       c[215] = c[204];
       break L456;
      }
     } while (0);
     if (ac >>> 0 < (c[212] | 0) >>> 0) {
      c[212] = ac;
     }
     S = ac + ab | 0;
     X = 1280;
     while (1) {
      ak = X | 0;
      if ((c[ak >> 2] | 0) == (S | 0)) {
       U = 335;
       break;
      }
      _ = c[X + 8 >> 2] | 0;
      if ((_ | 0) == 0) {
       break;
      } else {
       X = _;
      }
     }
     do {
      if ((U | 0) == 335) {
       if ((c[X + 12 >> 2] & 8 | 0) != 0) {
        break;
       }
       c[ak >> 2] = ac;
       S = X + 4 | 0;
       c[S >> 2] = (c[S >> 2] | 0) + ab;
       S = ac + 8 | 0;
       if ((S & 7 | 0) == 0) {
        al = 0;
       } else {
        al = -S & 7;
       }
       S = ac + (ab + 8) | 0;
       if ((S & 7 | 0) == 0) {
        am = 0;
       } else {
        am = -S & 7;
       }
       S = ac + (am + ab) | 0;
       _ = S;
       Z = al + o | 0;
       ad = ac + Z | 0;
       $ = ad;
       K = S - (ac + al) - o | 0;
       c[ac + (al + 4) >> 2] = o | 3;
       L493 : do {
        if ((_ | 0) == (c[214] | 0)) {
         T = (c[211] | 0) + K | 0;
         c[211] = T;
         c[214] = $;
         c[ac + (Z + 4) >> 2] = T | 1;
        } else {
         if ((_ | 0) == (c[213] | 0)) {
          T = (c[210] | 0) + K | 0;
          c[210] = T;
          c[213] = $;
          c[ac + (Z + 4) >> 2] = T | 1;
          c[ac + (T + Z) >> 2] = T;
          break;
         }
         T = ab + 4 | 0;
         Y = c[ac + (T + am) >> 2] | 0;
         if ((Y & 3 | 0) == 1) {
          aa = Y & -8;
          W = Y >>> 3;
          L501 : do {
           if (Y >>> 0 < 256) {
            V = c[ac + ((am | 8) + ab) >> 2] | 0;
            R = c[ac + (ab + 12 + am) >> 2] | 0;
            J = 872 + (W << 1 << 2) | 0;
            do {
             if ((V | 0) != (J | 0)) {
              if (V >>> 0 < (c[212] | 0) >>> 0) {
               au();
               return 0;
              }
              if ((c[V + 12 >> 2] | 0) == (_ | 0)) {
               break;
              }
              au();
              return 0;
             }
            } while (0);
            if ((R | 0) == (V | 0)) {
             c[208] = c[208] & ~(1 << W);
             break;
            }
            do {
             if ((R | 0) == (J | 0)) {
              an = R + 8 | 0;
             } else {
              if (R >>> 0 < (c[212] | 0) >>> 0) {
               au();
               return 0;
              }
              L = R + 8 | 0;
              if ((c[L >> 2] | 0) == (_ | 0)) {
               an = L;
               break;
              }
              au();
              return 0;
             }
            } while (0);
            c[V + 12 >> 2] = R;
            c[an >> 2] = V;
           } else {
            J = S;
            L = c[ac + ((am | 24) + ab) >> 2] | 0;
            O = c[ac + (ab + 12 + am) >> 2] | 0;
            do {
             if ((O | 0) == (J | 0)) {
              Q = am | 16;
              P = ac + (T + Q) | 0;
              e = c[P >> 2] | 0;
              if ((e | 0) == 0) {
               M = ac + (Q + ab) | 0;
               Q = c[M >> 2] | 0;
               if ((Q | 0) == 0) {
                ao = 0;
                break;
               } else {
                ap = Q;
                aq = M;
               }
              } else {
               ap = e;
               aq = P;
              }
              while (1) {
               P = ap + 20 | 0;
               e = c[P >> 2] | 0;
               if ((e | 0) != 0) {
                ap = e;
                aq = P;
                continue;
               }
               P = ap + 16 | 0;
               e = c[P >> 2] | 0;
               if ((e | 0) == 0) {
                break;
               } else {
                ap = e;
                aq = P;
               }
              }
              if (aq >>> 0 < (c[212] | 0) >>> 0) {
               au();
               return 0;
              } else {
               c[aq >> 2] = 0;
               ao = ap;
               break;
              }
             } else {
              P = c[ac + ((am | 8) + ab) >> 2] | 0;
              if (P >>> 0 < (c[212] | 0) >>> 0) {
               au();
               return 0;
              }
              e = P + 12 | 0;
              if ((c[e >> 2] | 0) != (J | 0)) {
               au();
               return 0;
              }
              M = O + 8 | 0;
              if ((c[M >> 2] | 0) == (J | 0)) {
               c[e >> 2] = O;
               c[M >> 2] = P;
               ao = O;
               break;
              } else {
               au();
               return 0;
              }
             }
            } while (0);
            if ((L | 0) == 0) {
             break;
            }
            O = ac + (ab + 28 + am) | 0;
            V = 1136 + (c[O >> 2] << 2) | 0;
            do {
             if ((J | 0) == (c[V >> 2] | 0)) {
              c[V >> 2] = ao;
              if ((ao | 0) != 0) {
               break;
              }
              c[209] = c[209] & ~(1 << c[O >> 2]);
              break L501;
             } else {
              if (L >>> 0 < (c[212] | 0) >>> 0) {
               au();
               return 0;
              }
              R = L + 16 | 0;
              if ((c[R >> 2] | 0) == (J | 0)) {
               c[R >> 2] = ao;
              } else {
               c[L + 20 >> 2] = ao;
              }
              if ((ao | 0) == 0) {
               break L501;
              }
             }
            } while (0);
            if (ao >>> 0 < (c[212] | 0) >>> 0) {
             au();
             return 0;
            }
            c[ao + 24 >> 2] = L;
            J = am | 16;
            O = c[ac + (J + ab) >> 2] | 0;
            do {
             if ((O | 0) != 0) {
              if (O >>> 0 < (c[212] | 0) >>> 0) {
               au();
               return 0;
              } else {
               c[ao + 16 >> 2] = O;
               c[O + 24 >> 2] = ao;
               break;
              }
             }
            } while (0);
            O = c[ac + (T + J) >> 2] | 0;
            if ((O | 0) == 0) {
             break;
            }
            if (O >>> 0 < (c[212] | 0) >>> 0) {
             au();
             return 0;
            } else {
             c[ao + 20 >> 2] = O;
             c[O + 24 >> 2] = ao;
             break;
            }
           }
          } while (0);
          as = ac + ((aa | am) + ab) | 0;
          at = aa + K | 0;
         } else {
          as = _;
          at = K;
         }
         T = as + 4 | 0;
         c[T >> 2] = c[T >> 2] & -2;
         c[ac + (Z + 4) >> 2] = at | 1;
         c[ac + (at + Z) >> 2] = at;
         T = at >>> 3;
         if (at >>> 0 < 256) {
          W = T << 1;
          Y = 872 + (W << 2) | 0;
          O = c[208] | 0;
          L = 1 << T;
          do {
           if ((O & L | 0) == 0) {
            c[208] = O | L;
            av = Y;
            aw = 872 + (W + 2 << 2) | 0;
           } else {
            T = 872 + (W + 2 << 2) | 0;
            V = c[T >> 2] | 0;
            if (V >>> 0 >= (c[212] | 0) >>> 0) {
             av = V;
             aw = T;
             break;
            }
            au();
            return 0;
           }
          } while (0);
          c[aw >> 2] = $;
          c[av + 12 >> 2] = $;
          c[ac + (Z + 8) >> 2] = av;
          c[ac + (Z + 12) >> 2] = Y;
          break;
         }
         W = ad;
         L = at >>> 8;
         do {
          if ((L | 0) == 0) {
           ax = 0;
          } else {
           if (at >>> 0 > 16777215) {
            ax = 31;
            break;
           }
           O = (L + 1048320 | 0) >>> 16 & 8;
           aa = L << O;
           T = (aa + 520192 | 0) >>> 16 & 4;
           V = aa << T;
           aa = (V + 245760 | 0) >>> 16 & 2;
           R = 14 - (T | O | aa) + (V << aa >>> 15) | 0;
           ax = at >>> ((R + 7 | 0) >>> 0) & 1 | R << 1;
          }
         } while (0);
         L = 1136 + (ax << 2) | 0;
         c[ac + (Z + 28) >> 2] = ax;
         c[ac + (Z + 20) >> 2] = 0;
         c[ac + (Z + 16) >> 2] = 0;
         Y = c[209] | 0;
         R = 1 << ax;
         if ((Y & R | 0) == 0) {
          c[209] = Y | R;
          c[L >> 2] = W;
          c[ac + (Z + 24) >> 2] = L;
          c[ac + (Z + 12) >> 2] = W;
          c[ac + (Z + 8) >> 2] = W;
          break;
         }
         R = c[L >> 2] | 0;
         if ((ax | 0) == 31) {
          ay = 0;
         } else {
          ay = 25 - (ax >>> 1) | 0;
         }
         L590 : do {
          if ((c[R + 4 >> 2] & -8 | 0) == (at | 0)) {
           az = R;
          } else {
           L = R;
           Y = at << ay;
           while (1) {
            aA = L + 16 + (Y >>> 31 << 2) | 0;
            aa = c[aA >> 2] | 0;
            if ((aa | 0) == 0) {
             break;
            }
            if ((c[aa + 4 >> 2] & -8 | 0) == (at | 0)) {
             az = aa;
             break L590;
            } else {
             L = aa;
             Y = Y << 1;
            }
           }
           if (aA >>> 0 < (c[212] | 0) >>> 0) {
            au();
            return 0;
           } else {
            c[aA >> 2] = W;
            c[ac + (Z + 24) >> 2] = L;
            c[ac + (Z + 12) >> 2] = W;
            c[ac + (Z + 8) >> 2] = W;
            break L493;
           }
          }
         } while (0);
         R = az + 8 | 0;
         Y = c[R >> 2] | 0;
         J = c[212] | 0;
         if (az >>> 0 < J >>> 0) {
          au();
          return 0;
         }
         if (Y >>> 0 < J >>> 0) {
          au();
          return 0;
         } else {
          c[Y + 12 >> 2] = W;
          c[R >> 2] = W;
          c[ac + (Z + 8) >> 2] = Y;
          c[ac + (Z + 12) >> 2] = az;
          c[ac + (Z + 24) >> 2] = 0;
          break;
         }
        }
       } while (0);
       n = ac + (al | 8) | 0;
       return n | 0;
      }
     } while (0);
     X = ae;
     Z = 1280;
     while (1) {
      aB = c[Z >> 2] | 0;
      if (aB >>> 0 <= X >>> 0) {
       aC = c[Z + 4 >> 2] | 0;
       aD = aB + aC | 0;
       if (aD >>> 0 > X >>> 0) {
        break;
       }
      }
      Z = c[Z + 8 >> 2] | 0;
     }
     Z = aB + (aC - 39) | 0;
     if ((Z & 7 | 0) == 0) {
      aE = 0;
     } else {
      aE = -Z & 7;
     }
     Z = aB + (aC - 47 + aE) | 0;
     ad = Z >>> 0 < (ae + 16 | 0) >>> 0 ? X : Z;
     Z = ad + 8 | 0;
     $ = ac + 8 | 0;
     if (($ & 7 | 0) == 0) {
      aF = 0;
     } else {
      aF = -$ & 7;
     }
     $ = ab - 40 - aF | 0;
     c[214] = ac + aF;
     c[211] = $;
     c[ac + (aF + 4) >> 2] = $ | 1;
     c[ac + (ab - 36) >> 2] = 40;
     c[215] = c[204];
     c[ad + 4 >> 2] = 27;
     c[Z >> 2] = c[320];
     c[Z + 4 >> 2] = c[1284 >> 2];
     c[Z + 8 >> 2] = c[1288 >> 2];
     c[Z + 12 >> 2] = c[1292 >> 2];
     c[320] = ac;
     c[321] = ab;
     c[323] = 0;
     c[322] = Z;
     Z = ad + 28 | 0;
     c[Z >> 2] = 7;
     if ((ad + 32 | 0) >>> 0 < aD >>> 0) {
      $ = Z;
      while (1) {
       Z = $ + 4 | 0;
       c[Z >> 2] = 7;
       if (($ + 8 | 0) >>> 0 < aD >>> 0) {
        $ = Z;
       } else {
        break;
       }
      }
     }
     if ((ad | 0) == (X | 0)) {
      break;
     }
     $ = ad - ae | 0;
     Z = X + ($ + 4) | 0;
     c[Z >> 2] = c[Z >> 2] & -2;
     c[ae + 4 >> 2] = $ | 1;
     c[X + $ >> 2] = $;
     Z = $ >>> 3;
     if ($ >>> 0 < 256) {
      K = Z << 1;
      _ = 872 + (K << 2) | 0;
      S = c[208] | 0;
      j = 1 << Z;
      do {
       if ((S & j | 0) == 0) {
        c[208] = S | j;
        aG = _;
        aH = 872 + (K + 2 << 2) | 0;
       } else {
        Z = 872 + (K + 2 << 2) | 0;
        Y = c[Z >> 2] | 0;
        if (Y >>> 0 >= (c[212] | 0) >>> 0) {
         aG = Y;
         aH = Z;
         break;
        }
        au();
        return 0;
       }
      } while (0);
      c[aH >> 2] = ae;
      c[aG + 12 >> 2] = ae;
      c[ae + 8 >> 2] = aG;
      c[ae + 12 >> 2] = _;
      break;
     }
     K = ae;
     j = $ >>> 8;
     do {
      if ((j | 0) == 0) {
       aI = 0;
      } else {
       if ($ >>> 0 > 16777215) {
        aI = 31;
        break;
       }
       S = (j + 1048320 | 0) >>> 16 & 8;
       X = j << S;
       ad = (X + 520192 | 0) >>> 16 & 4;
       Z = X << ad;
       X = (Z + 245760 | 0) >>> 16 & 2;
       Y = 14 - (ad | S | X) + (Z << X >>> 15) | 0;
       aI = $ >>> ((Y + 7 | 0) >>> 0) & 1 | Y << 1;
      }
     } while (0);
     j = 1136 + (aI << 2) | 0;
     c[ae + 28 >> 2] = aI;
     c[ae + 20 >> 2] = 0;
     c[ae + 16 >> 2] = 0;
     _ = c[209] | 0;
     Y = 1 << aI;
     if ((_ & Y | 0) == 0) {
      c[209] = _ | Y;
      c[j >> 2] = K;
      c[ae + 24 >> 2] = j;
      c[ae + 12 >> 2] = ae;
      c[ae + 8 >> 2] = ae;
      break;
     }
     Y = c[j >> 2] | 0;
     if ((aI | 0) == 31) {
      aJ = 0;
     } else {
      aJ = 25 - (aI >>> 1) | 0;
     }
     L644 : do {
      if ((c[Y + 4 >> 2] & -8 | 0) == ($ | 0)) {
       aK = Y;
      } else {
       j = Y;
       _ = $ << aJ;
       while (1) {
        aL = j + 16 + (_ >>> 31 << 2) | 0;
        X = c[aL >> 2] | 0;
        if ((X | 0) == 0) {
         break;
        }
        if ((c[X + 4 >> 2] & -8 | 0) == ($ | 0)) {
         aK = X;
         break L644;
        } else {
         j = X;
         _ = _ << 1;
        }
       }
       if (aL >>> 0 < (c[212] | 0) >>> 0) {
        au();
        return 0;
       } else {
        c[aL >> 2] = K;
        c[ae + 24 >> 2] = j;
        c[ae + 12 >> 2] = ae;
        c[ae + 8 >> 2] = ae;
        break L456;
       }
      }
     } while (0);
     $ = aK + 8 | 0;
     Y = c[$ >> 2] | 0;
     _ = c[212] | 0;
     if (aK >>> 0 < _ >>> 0) {
      au();
      return 0;
     }
     if (Y >>> 0 < _ >>> 0) {
      au();
      return 0;
     } else {
      c[Y + 12 >> 2] = K;
      c[$ >> 2] = K;
      c[ae + 8 >> 2] = Y;
      c[ae + 12 >> 2] = aK;
      c[ae + 24 >> 2] = 0;
      break;
     }
    }
   } while (0);
   ae = c[211] | 0;
   if (ae >>> 0 <= o >>> 0) {
    break;
   }
   Y = ae - o | 0;
   c[211] = Y;
   ae = c[214] | 0;
   $ = ae;
   c[214] = $ + o;
   c[$ + (o + 4) >> 2] = Y | 1;
   c[ae + 4 >> 2] = o | 3;
   n = ae + 8 | 0;
   return n | 0;
  }
 } while (0);
 c[(aX() | 0) >> 2] = 12;
 n = 0;
 return n | 0;
}
function a8(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 d = i;
 i = i + 288 | 0;
 e = d | 0;
 f = d + 256 | 0;
 g = e | 0;
 b4(g, b);
 b = 16;
 do {
  h = c[e + (b - 2 << 2) >> 2] | 0;
  j = c[e + (b - 15 << 2) >> 2] | 0;
  c[e + (b << 2) >> 2] = (c[e + (b - 16 << 2) >> 2] | 0) + (c[e + (b - 7 << 2) >> 2] | 0) + ((h >>> 19 | h << 13) ^ h >>> 10 ^ (h >>> 17 | h << 15)) + ((j >>> 18 | j << 14) ^ j >>> 3 ^ (j >>> 7 | j << 25));
  b = b + 1 | 0;
 } while ((b | 0) < 64);
 b = f;
 j = a;
 bD(b | 0, j | 0, 32) | 0;
 j = f + 28 | 0;
 b = f + 16 | 0;
 h = c[b >> 2] | 0;
 k = f + 20 | 0;
 l = f + 24 | 0;
 m = c[l >> 2] | 0;
 n = (c[j >> 2] | 0) + 1116352408 + (c[g >> 2] | 0) + ((h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7)) + ((m ^ c[k >> 2]) & h ^ m) | 0;
 m = f | 0;
 h = c[m >> 2] | 0;
 g = f + 4 | 0;
 o = c[g >> 2] | 0;
 p = f + 8 | 0;
 q = c[p >> 2] | 0;
 r = f + 12 | 0;
 c[r >> 2] = (c[r >> 2] | 0) + n;
 s = ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + n + ((q | o) & h | q & o) | 0;
 c[j >> 2] = s;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 h = (c[l >> 2] | 0) + 1899447441 + (c[e + 4 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[l >> 2] = n;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 s = (c[k >> 2] | 0) - 1245643825 + (c[e + 8 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[k >> 2] = h;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 n = (c[b >> 2] | 0) - 373957723 + (c[e + 12 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[b >> 2] = s;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 h = (c[r >> 2] | 0) + 961987163 + (c[e + 16 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[r >> 2] = n;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 s = (c[p >> 2] | 0) + 1508970993 + (c[e + 20 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[p >> 2] = h;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 n = (c[g >> 2] | 0) - 1841331548 + (c[e + 24 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[g >> 2] = s;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 h = (c[m >> 2] | 0) - 1424204075 + (c[e + 28 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[m >> 2] = n;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 s = (c[j >> 2] | 0) - 670586216 + (c[e + 32 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[j >> 2] = h;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 n = (c[l >> 2] | 0) + 310598401 + (c[e + 36 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[l >> 2] = s;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 h = (c[k >> 2] | 0) + 607225278 + (c[e + 40 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[k >> 2] = n;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 s = (c[b >> 2] | 0) + 1426881987 + (c[e + 44 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[b >> 2] = h;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 n = (c[r >> 2] | 0) + 1925078388 + (c[e + 48 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[r >> 2] = s;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 h = (c[p >> 2] | 0) - 2132889090 + (c[e + 52 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[p >> 2] = n;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 s = (c[g >> 2] | 0) - 1680079193 + (c[e + 56 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[g >> 2] = h;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 n = (c[m >> 2] | 0) - 1046744716 + (c[e + 60 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[m >> 2] = s;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 h = (c[j >> 2] | 0) - 459576895 + (c[e + 64 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[j >> 2] = n;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 s = (c[l >> 2] | 0) - 272742522 + (c[e + 68 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[l >> 2] = h;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 n = (c[k >> 2] | 0) + 264347078 + (c[e + 72 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[k >> 2] = s;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 h = (c[b >> 2] | 0) + 604807628 + (c[e + 76 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[b >> 2] = n;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 s = (c[r >> 2] | 0) + 770255983 + (c[e + 80 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[r >> 2] = h;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 n = (c[p >> 2] | 0) + 1249150122 + (c[e + 84 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[p >> 2] = s;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 h = (c[g >> 2] | 0) + 1555081692 + (c[e + 88 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[g >> 2] = n;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 s = (c[m >> 2] | 0) + 1996064986 + (c[e + 92 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[m >> 2] = h;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 n = (c[j >> 2] | 0) - 1740746414 + (c[e + 96 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[j >> 2] = s;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 h = (c[l >> 2] | 0) - 1473132947 + (c[e + 100 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[l >> 2] = n;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 s = (c[k >> 2] | 0) - 1341970488 + (c[e + 104 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[k >> 2] = h;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 n = (c[b >> 2] | 0) - 1084653625 + (c[e + 108 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[b >> 2] = s;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 h = (c[r >> 2] | 0) - 958395405 + (c[e + 112 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[r >> 2] = n;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 s = (c[p >> 2] | 0) - 710438585 + (c[e + 116 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[p >> 2] = h;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 n = (c[g >> 2] | 0) + 113926993 + (c[e + 120 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[g >> 2] = s;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 h = (c[m >> 2] | 0) + 338241895 + (c[e + 124 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[m >> 2] = n;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 s = (c[j >> 2] | 0) + 666307205 + (c[e + 128 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[j >> 2] = h;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 n = (c[l >> 2] | 0) + 773529912 + (c[e + 132 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[l >> 2] = s;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 h = (c[k >> 2] | 0) + 1294757372 + (c[e + 136 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[k >> 2] = n;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 s = (c[b >> 2] | 0) + 1396182291 + (c[e + 140 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[b >> 2] = h;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 n = (c[r >> 2] | 0) + 1695183700 + (c[e + 144 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[r >> 2] = s;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 h = (c[p >> 2] | 0) + 1986661051 + (c[e + 148 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[p >> 2] = n;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 s = (c[g >> 2] | 0) - 2117940946 + (c[e + 152 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[g >> 2] = h;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 n = (c[m >> 2] | 0) - 1838011259 + (c[e + 156 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[m >> 2] = s;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 h = (c[j >> 2] | 0) - 1564481375 + (c[e + 160 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[j >> 2] = n;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 s = (c[l >> 2] | 0) - 1474664885 + (c[e + 164 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[l >> 2] = h;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 n = (c[k >> 2] | 0) - 1035236496 + (c[e + 168 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[k >> 2] = s;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 h = (c[b >> 2] | 0) - 949202525 + (c[e + 172 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[b >> 2] = n;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 s = (c[r >> 2] | 0) - 778901479 + (c[e + 176 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[r >> 2] = h;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 n = (c[p >> 2] | 0) - 694614492 + (c[e + 180 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[p >> 2] = s;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 h = (c[g >> 2] | 0) - 200395387 + (c[e + 184 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[g >> 2] = n;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 s = (c[m >> 2] | 0) + 275423344 + (c[e + 188 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[m >> 2] = h;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 n = (c[j >> 2] | 0) + 430227734 + (c[e + 192 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[j >> 2] = s;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 h = (c[l >> 2] | 0) + 506948616 + (c[e + 196 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[l >> 2] = n;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 s = (c[k >> 2] | 0) + 659060556 + (c[e + 200 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[k >> 2] = h;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 n = (c[b >> 2] | 0) + 883997877 + (c[e + 204 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[b >> 2] = s;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 h = (c[r >> 2] | 0) + 958139571 + (c[e + 208 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[r >> 2] = n;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 s = (c[p >> 2] | 0) + 1322822218 + (c[e + 212 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[p >> 2] = h;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 n = (c[g >> 2] | 0) + 1537002063 + (c[e + 216 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[g >> 2] = s;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 h = (c[m >> 2] | 0) + 1747873779 + (c[e + 220 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[m >> 2] = n;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 s = (c[j >> 2] | 0) + 1955562222 + (c[e + 224 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[j >> 2] = h;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 n = (c[l >> 2] | 0) + 2024104815 + (c[e + 228 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[l >> 2] = s;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 h = (c[k >> 2] | 0) - 2067236844 + (c[e + 232 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[k >> 2] = n;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 s = (c[b >> 2] | 0) - 1933114872 + (c[e + 236 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[b >> 2] = h;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 n = (c[r >> 2] | 0) - 1866530822 + (c[e + 240 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[r >> 2] = s;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 h = (c[p >> 2] | 0) - 1538233109 + (c[e + 244 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[p >> 2] = n;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 s = (c[g >> 2] | 0) - 1090935817 + (c[e + 248 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[g >> 2] = h;
 g = c[k >> 2] | 0;
 k = c[j >> 2] | 0;
 j = (c[m >> 2] | 0) - 965641998 + (c[e + 252 >> 2] | 0) + ((g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) + ((k ^ c[l >> 2]) & g ^ k) | 0;
 k = c[p >> 2] | 0;
 p = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + j;
 b = j + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((p | k) & h | p & k) | 0;
 c[m >> 2] = b;
 c[a >> 2] = (c[a >> 2] | 0) + b;
 b = a + 4 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 4 >> 2] | 0);
 b = a + 8 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 8 >> 2] | 0);
 b = a + 12 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 12 >> 2] | 0);
 b = a + 16 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 16 >> 2] | 0);
 b = a + 20 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 20 >> 2] | 0);
 b = a + 24 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 24 >> 2] | 0);
 b = a + 28 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 28 >> 2] | 0);
 i = d;
 return;
}
function ba(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0;
 if ((a | 0) == 0) {
  return;
 }
 b = a - 8 | 0;
 d = b;
 e = c[212] | 0;
 if (b >>> 0 < e >>> 0) {
  au();
 }
 f = c[a - 4 >> 2] | 0;
 g = f & 3;
 if ((g | 0) == 1) {
  au();
 }
 h = f & -8;
 i = a + (h - 8) | 0;
 j = i;
 L675 : do {
  if ((f & 1 | 0) == 0) {
   k = c[b >> 2] | 0;
   if ((g | 0) == 0) {
    return;
   }
   l = -8 - k | 0;
   m = a + l | 0;
   n = m;
   o = k + h | 0;
   if (m >>> 0 < e >>> 0) {
    au();
   }
   if ((n | 0) == (c[213] | 0)) {
    p = a + (h - 4) | 0;
    if ((c[p >> 2] & 3 | 0) != 3) {
     q = n;
     r = o;
     break;
    }
    c[210] = o;
    c[p >> 2] = c[p >> 2] & -2;
    c[a + (l + 4) >> 2] = o | 1;
    c[i >> 2] = o;
    return;
   }
   p = k >>> 3;
   if (k >>> 0 < 256) {
    k = c[a + (l + 8) >> 2] | 0;
    s = c[a + (l + 12) >> 2] | 0;
    t = 872 + (p << 1 << 2) | 0;
    do {
     if ((k | 0) != (t | 0)) {
      if (k >>> 0 < e >>> 0) {
       au();
      }
      if ((c[k + 12 >> 2] | 0) == (n | 0)) {
       break;
      }
      au();
     }
    } while (0);
    if ((s | 0) == (k | 0)) {
     c[208] = c[208] & ~(1 << p);
     q = n;
     r = o;
     break;
    }
    do {
     if ((s | 0) == (t | 0)) {
      u = s + 8 | 0;
     } else {
      if (s >>> 0 < e >>> 0) {
       au();
      }
      v = s + 8 | 0;
      if ((c[v >> 2] | 0) == (n | 0)) {
       u = v;
       break;
      }
      au();
     }
    } while (0);
    c[k + 12 >> 2] = s;
    c[u >> 2] = k;
    q = n;
    r = o;
    break;
   }
   t = m;
   p = c[a + (l + 24) >> 2] | 0;
   v = c[a + (l + 12) >> 2] | 0;
   do {
    if ((v | 0) == (t | 0)) {
     w = a + (l + 20) | 0;
     x = c[w >> 2] | 0;
     if ((x | 0) == 0) {
      y = a + (l + 16) | 0;
      z = c[y >> 2] | 0;
      if ((z | 0) == 0) {
       A = 0;
       break;
      } else {
       B = z;
       C = y;
      }
     } else {
      B = x;
      C = w;
     }
     while (1) {
      w = B + 20 | 0;
      x = c[w >> 2] | 0;
      if ((x | 0) != 0) {
       B = x;
       C = w;
       continue;
      }
      w = B + 16 | 0;
      x = c[w >> 2] | 0;
      if ((x | 0) == 0) {
       break;
      } else {
       B = x;
       C = w;
      }
     }
     if (C >>> 0 < e >>> 0) {
      au();
     } else {
      c[C >> 2] = 0;
      A = B;
      break;
     }
    } else {
     w = c[a + (l + 8) >> 2] | 0;
     if (w >>> 0 < e >>> 0) {
      au();
     }
     x = w + 12 | 0;
     if ((c[x >> 2] | 0) != (t | 0)) {
      au();
     }
     y = v + 8 | 0;
     if ((c[y >> 2] | 0) == (t | 0)) {
      c[x >> 2] = v;
      c[y >> 2] = w;
      A = v;
      break;
     } else {
      au();
     }
    }
   } while (0);
   if ((p | 0) == 0) {
    q = n;
    r = o;
    break;
   }
   v = a + (l + 28) | 0;
   m = 1136 + (c[v >> 2] << 2) | 0;
   do {
    if ((t | 0) == (c[m >> 2] | 0)) {
     c[m >> 2] = A;
     if ((A | 0) != 0) {
      break;
     }
     c[209] = c[209] & ~(1 << c[v >> 2]);
     q = n;
     r = o;
     break L675;
    } else {
     if (p >>> 0 < (c[212] | 0) >>> 0) {
      au();
     }
     k = p + 16 | 0;
     if ((c[k >> 2] | 0) == (t | 0)) {
      c[k >> 2] = A;
     } else {
      c[p + 20 >> 2] = A;
     }
     if ((A | 0) == 0) {
      q = n;
      r = o;
      break L675;
     }
    }
   } while (0);
   if (A >>> 0 < (c[212] | 0) >>> 0) {
    au();
   }
   c[A + 24 >> 2] = p;
   t = c[a + (l + 16) >> 2] | 0;
   do {
    if ((t | 0) != 0) {
     if (t >>> 0 < (c[212] | 0) >>> 0) {
      au();
     } else {
      c[A + 16 >> 2] = t;
      c[t + 24 >> 2] = A;
      break;
     }
    }
   } while (0);
   t = c[a + (l + 20) >> 2] | 0;
   if ((t | 0) == 0) {
    q = n;
    r = o;
    break;
   }
   if (t >>> 0 < (c[212] | 0) >>> 0) {
    au();
   } else {
    c[A + 20 >> 2] = t;
    c[t + 24 >> 2] = A;
    q = n;
    r = o;
    break;
   }
  } else {
   q = d;
   r = h;
  }
 } while (0);
 d = q;
 if (d >>> 0 >= i >>> 0) {
  au();
 }
 A = a + (h - 4) | 0;
 e = c[A >> 2] | 0;
 if ((e & 1 | 0) == 0) {
  au();
 }
 do {
  if ((e & 2 | 0) == 0) {
   if ((j | 0) == (c[214] | 0)) {
    B = (c[211] | 0) + r | 0;
    c[211] = B;
    c[214] = q;
    c[q + 4 >> 2] = B | 1;
    if ((q | 0) != (c[213] | 0)) {
     return;
    }
    c[213] = 0;
    c[210] = 0;
    return;
   }
   if ((j | 0) == (c[213] | 0)) {
    B = (c[210] | 0) + r | 0;
    c[210] = B;
    c[213] = q;
    c[q + 4 >> 2] = B | 1;
    c[d + B >> 2] = B;
    return;
   }
   B = (e & -8) + r | 0;
   C = e >>> 3;
   L777 : do {
    if (e >>> 0 < 256) {
     u = c[a + h >> 2] | 0;
     g = c[a + (h | 4) >> 2] | 0;
     b = 872 + (C << 1 << 2) | 0;
     do {
      if ((u | 0) != (b | 0)) {
       if (u >>> 0 < (c[212] | 0) >>> 0) {
        au();
       }
       if ((c[u + 12 >> 2] | 0) == (j | 0)) {
        break;
       }
       au();
      }
     } while (0);
     if ((g | 0) == (u | 0)) {
      c[208] = c[208] & ~(1 << C);
      break;
     }
     do {
      if ((g | 0) == (b | 0)) {
       D = g + 8 | 0;
      } else {
       if (g >>> 0 < (c[212] | 0) >>> 0) {
        au();
       }
       f = g + 8 | 0;
       if ((c[f >> 2] | 0) == (j | 0)) {
        D = f;
        break;
       }
       au();
      }
     } while (0);
     c[u + 12 >> 2] = g;
     c[D >> 2] = u;
    } else {
     b = i;
     f = c[a + (h + 16) >> 2] | 0;
     t = c[a + (h | 4) >> 2] | 0;
     do {
      if ((t | 0) == (b | 0)) {
       p = a + (h + 12) | 0;
       v = c[p >> 2] | 0;
       if ((v | 0) == 0) {
        m = a + (h + 8) | 0;
        k = c[m >> 2] | 0;
        if ((k | 0) == 0) {
         E = 0;
         break;
        } else {
         F = k;
         G = m;
        }
       } else {
        F = v;
        G = p;
       }
       while (1) {
        p = F + 20 | 0;
        v = c[p >> 2] | 0;
        if ((v | 0) != 0) {
         F = v;
         G = p;
         continue;
        }
        p = F + 16 | 0;
        v = c[p >> 2] | 0;
        if ((v | 0) == 0) {
         break;
        } else {
         F = v;
         G = p;
        }
       }
       if (G >>> 0 < (c[212] | 0) >>> 0) {
        au();
       } else {
        c[G >> 2] = 0;
        E = F;
        break;
       }
      } else {
       p = c[a + h >> 2] | 0;
       if (p >>> 0 < (c[212] | 0) >>> 0) {
        au();
       }
       v = p + 12 | 0;
       if ((c[v >> 2] | 0) != (b | 0)) {
        au();
       }
       m = t + 8 | 0;
       if ((c[m >> 2] | 0) == (b | 0)) {
        c[v >> 2] = t;
        c[m >> 2] = p;
        E = t;
        break;
       } else {
        au();
       }
      }
     } while (0);
     if ((f | 0) == 0) {
      break;
     }
     t = a + (h + 20) | 0;
     u = 1136 + (c[t >> 2] << 2) | 0;
     do {
      if ((b | 0) == (c[u >> 2] | 0)) {
       c[u >> 2] = E;
       if ((E | 0) != 0) {
        break;
       }
       c[209] = c[209] & ~(1 << c[t >> 2]);
       break L777;
      } else {
       if (f >>> 0 < (c[212] | 0) >>> 0) {
        au();
       }
       g = f + 16 | 0;
       if ((c[g >> 2] | 0) == (b | 0)) {
        c[g >> 2] = E;
       } else {
        c[f + 20 >> 2] = E;
       }
       if ((E | 0) == 0) {
        break L777;
       }
      }
     } while (0);
     if (E >>> 0 < (c[212] | 0) >>> 0) {
      au();
     }
     c[E + 24 >> 2] = f;
     b = c[a + (h + 8) >> 2] | 0;
     do {
      if ((b | 0) != 0) {
       if (b >>> 0 < (c[212] | 0) >>> 0) {
        au();
       } else {
        c[E + 16 >> 2] = b;
        c[b + 24 >> 2] = E;
        break;
       }
      }
     } while (0);
     b = c[a + (h + 12) >> 2] | 0;
     if ((b | 0) == 0) {
      break;
     }
     if (b >>> 0 < (c[212] | 0) >>> 0) {
      au();
     } else {
      c[E + 20 >> 2] = b;
      c[b + 24 >> 2] = E;
      break;
     }
    }
   } while (0);
   c[q + 4 >> 2] = B | 1;
   c[d + B >> 2] = B;
   if ((q | 0) != (c[213] | 0)) {
    H = B;
    break;
   }
   c[210] = B;
   return;
  } else {
   c[A >> 2] = e & -2;
   c[q + 4 >> 2] = r | 1;
   c[d + r >> 2] = r;
   H = r;
  }
 } while (0);
 r = H >>> 3;
 if (H >>> 0 < 256) {
  d = r << 1;
  e = 872 + (d << 2) | 0;
  A = c[208] | 0;
  E = 1 << r;
  do {
   if ((A & E | 0) == 0) {
    c[208] = A | E;
    I = e;
    J = 872 + (d + 2 << 2) | 0;
   } else {
    r = 872 + (d + 2 << 2) | 0;
    h = c[r >> 2] | 0;
    if (h >>> 0 >= (c[212] | 0) >>> 0) {
     I = h;
     J = r;
     break;
    }
    au();
   }
  } while (0);
  c[J >> 2] = q;
  c[I + 12 >> 2] = q;
  c[q + 8 >> 2] = I;
  c[q + 12 >> 2] = e;
  return;
 }
 e = q;
 I = H >>> 8;
 do {
  if ((I | 0) == 0) {
   K = 0;
  } else {
   if (H >>> 0 > 16777215) {
    K = 31;
    break;
   }
   J = (I + 1048320 | 0) >>> 16 & 8;
   d = I << J;
   E = (d + 520192 | 0) >>> 16 & 4;
   A = d << E;
   d = (A + 245760 | 0) >>> 16 & 2;
   r = 14 - (E | J | d) + (A << d >>> 15) | 0;
   K = H >>> ((r + 7 | 0) >>> 0) & 1 | r << 1;
  }
 } while (0);
 I = 1136 + (K << 2) | 0;
 c[q + 28 >> 2] = K;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 r = c[209] | 0;
 d = 1 << K;
 L864 : do {
  if ((r & d | 0) == 0) {
   c[209] = r | d;
   c[I >> 2] = e;
   c[q + 24 >> 2] = I;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
  } else {
   A = c[I >> 2] | 0;
   if ((K | 0) == 31) {
    L = 0;
   } else {
    L = 25 - (K >>> 1) | 0;
   }
   L870 : do {
    if ((c[A + 4 >> 2] & -8 | 0) == (H | 0)) {
     M = A;
    } else {
     J = A;
     E = H << L;
     while (1) {
      N = J + 16 + (E >>> 31 << 2) | 0;
      h = c[N >> 2] | 0;
      if ((h | 0) == 0) {
       break;
      }
      if ((c[h + 4 >> 2] & -8 | 0) == (H | 0)) {
       M = h;
       break L870;
      } else {
       J = h;
       E = E << 1;
      }
     }
     if (N >>> 0 < (c[212] | 0) >>> 0) {
      au();
     } else {
      c[N >> 2] = e;
      c[q + 24 >> 2] = J;
      c[q + 12 >> 2] = q;
      c[q + 8 >> 2] = q;
      break L864;
     }
    }
   } while (0);
   A = M + 8 | 0;
   B = c[A >> 2] | 0;
   E = c[212] | 0;
   if (M >>> 0 < E >>> 0) {
    au();
   }
   if (B >>> 0 < E >>> 0) {
    au();
   } else {
    c[B + 12 >> 2] = e;
    c[A >> 2] = e;
    c[q + 8 >> 2] = B;
    c[q + 12 >> 2] = M;
    c[q + 24 >> 2] = 0;
    break;
   }
  }
 } while (0);
 q = (c[216] | 0) - 1 | 0;
 c[216] = q;
 if ((q | 0) == 0) {
  O = 1288;
 } else {
  return;
 }
 while (1) {
  q = c[O >> 2] | 0;
  if ((q | 0) == 0) {
   break;
  } else {
   O = q + 8 | 0;
  }
 }
 c[216] = -1;
 return;
}
function a9(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ab = 0, ac = 0, ad = 0;
 j = i;
 if ((e | 0) == 0) {
  k = -1;
  i = j;
  return k | 0;
 }
 l = c[44] | 0;
 if ((l | 0) == 0) {
  c[196] = 1;
  c[44] = 1;
  m = 1;
  n = 1;
  o = 1194;
 } else {
  p = c[196] | 0;
  q = c[74] | 0;
  if ((q | 0) == -1 | (p | 0) != 0) {
   m = p;
   n = l;
   o = 1194;
  } else {
   r = q;
   s = p;
   t = l;
  }
 }
 if ((o | 0) == 1194) {
  l = (aP(344) | 0) != 0 | 0;
  c[74] = l;
  r = l;
  s = m;
  t = n;
 }
 n = a[e] | 0;
 if (n << 24 >> 24 == 45) {
  u = h | 2;
  o = 1198;
 } else {
  m = (r | 0) != 0 | n << 24 >> 24 == 43 ? h & -2 : h;
  if (n << 24 >> 24 == 43) {
   u = m;
   o = 1198;
  } else {
   v = e;
   w = m;
  }
 }
 if ((o | 0) == 1198) {
  v = e + 1 | 0;
  w = u;
 }
 c[198] = 0;
 if ((s | 0) == 0) {
  x = t;
  o = 1202;
 } else {
  c[50] = -1;
  c[48] = -1;
  y = t;
  z = s;
  o = 1201;
 }
 while (1) {
  if ((o | 0) == 1201) {
   o = 0;
   if ((z | 0) == 0) {
    x = y;
    o = 1202;
    continue;
   } else {
    A = y;
   }
  } else if ((o | 0) == 1202) {
   o = 0;
   s = c[40] | 0;
   if ((a[s] | 0) == 0) {
    A = x;
   } else {
    B = s;
    C = x;
    break;
   }
  }
  c[196] = 0;
  if ((A | 0) >= (b | 0)) {
   o = 1204;
   break;
  }
  D = d + (A << 2) | 0;
  E = c[D >> 2] | 0;
  c[40] = E;
  if ((a[E] | 0) == 45) {
   F = E + 1 | 0;
   G = a[F] | 0;
   if (G << 24 >> 24 != 0) {
    o = 1236;
    break;
   }
   if ((aB(v | 0, 45) | 0) != 0) {
    o = 1236;
    break;
   }
  }
  c[40] = 824;
  if ((w & 2 | 0) != 0) {
   o = 1221;
   break;
  }
  if ((w & 1 | 0) == 0) {
   k = -1;
   o = 1305;
   break;
  }
  s = c[48] | 0;
  do {
   if ((s | 0) == -1) {
    c[48] = A;
    H = A;
    I = 0;
   } else {
    t = c[50] | 0;
    if ((t | 0) == -1) {
     H = A;
     I = 0;
     break;
    }
    u = t - s | 0;
    e = A - t | 0;
    m = (u | 0) % (e | 0) | 0;
    if ((m | 0) == 0) {
     J = e;
    } else {
     n = e;
     h = m;
     while (1) {
      m = (n | 0) % (h | 0) | 0;
      if ((m | 0) == 0) {
       J = h;
       break;
      } else {
       n = h;
       h = m;
      }
     }
    }
    h = (A - s | 0) / (J | 0) | 0;
    do {
     if ((J | 0) > 0) {
      n = -u | 0;
      if ((h | 0) > 0) {
       K = 0;
      } else {
       L = A;
       M = t;
       N = s;
       O = 0;
       break;
      }
      do {
       m = K + t | 0;
       r = d + (m << 2) | 0;
       l = 0;
       p = m;
       m = c[r >> 2] | 0;
       while (1) {
        q = ((p | 0) < (t | 0) ? e : n) + p | 0;
        P = d + (q << 2) | 0;
        Q = c[P >> 2] | 0;
        c[P >> 2] = m;
        c[r >> 2] = Q;
        P = l + 1 | 0;
        if ((P | 0) < (h | 0)) {
         l = P;
         p = q;
         m = Q;
        } else {
         break;
        }
       }
       K = K + 1 | 0;
      } while ((K | 0) < (J | 0));
      L = c[44] | 0;
      M = c[50] | 0;
      N = c[48] | 0;
      O = c[196] | 0;
     } else {
      L = A;
      M = t;
      N = s;
      O = 0;
     }
    } while (0);
    c[48] = L - M + N;
    c[50] = -1;
    H = L;
    I = O;
   }
  } while (0);
  s = H + 1 | 0;
  c[44] = s;
  y = s;
  z = I;
  o = 1201;
 }
 do {
  if ((o | 0) == 1204) {
   c[40] = 824;
   I = c[50] | 0;
   z = c[48] | 0;
   do {
    if ((I | 0) == -1) {
     if ((z | 0) == -1) {
      break;
     }
     c[44] = z;
    } else {
     y = I - z | 0;
     H = A - I | 0;
     O = (y | 0) % (H | 0) | 0;
     if ((O | 0) == 0) {
      R = H;
     } else {
      L = H;
      N = O;
      while (1) {
       O = (L | 0) % (N | 0) | 0;
       if ((O | 0) == 0) {
        R = N;
        break;
       } else {
        L = N;
        N = O;
       }
      }
     }
     N = (A - z | 0) / (R | 0) | 0;
     do {
      if ((R | 0) > 0) {
       L = -y | 0;
       if ((N | 0) > 0) {
        S = 0;
       } else {
        T = I;
        U = z;
        V = A;
        break;
       }
       do {
        O = S + I | 0;
        M = d + (O << 2) | 0;
        J = 0;
        K = O;
        O = c[M >> 2] | 0;
        while (1) {
         x = ((K | 0) < (I | 0) ? H : L) + K | 0;
         s = d + (x << 2) | 0;
         t = c[s >> 2] | 0;
         c[s >> 2] = O;
         c[M >> 2] = t;
         s = J + 1 | 0;
         if ((s | 0) < (N | 0)) {
          J = s;
          K = x;
          O = t;
         } else {
          break;
         }
        }
        S = S + 1 | 0;
       } while ((S | 0) < (R | 0));
       T = c[50] | 0;
       U = c[48] | 0;
       V = c[44] | 0;
      } else {
       T = I;
       U = z;
       V = A;
      }
     } while (0);
     c[44] = U - T + V;
    }
   } while (0);
   c[50] = -1;
   c[48] = -1;
   k = -1;
   i = j;
   return k | 0;
  } else if ((o | 0) == 1305) {
   i = j;
   return k | 0;
  } else if ((o | 0) == 1236) {
   z = c[48] | 0;
   I = c[50] | 0;
   if ((z | 0) != -1 & (I | 0) == -1) {
    c[50] = A;
    W = a[F] | 0;
    X = A;
   } else {
    W = G;
    X = I;
   }
   if (W << 24 >> 24 == 0) {
    B = E;
    C = A;
    break;
   }
   c[40] = F;
   if ((a[F] | 0) != 45) {
    B = F;
    C = A;
    break;
   }
   if ((a[E + 2 | 0] | 0) != 0) {
    B = F;
    C = A;
    break;
   }
   I = A + 1 | 0;
   c[44] = I;
   c[40] = 824;
   if ((X | 0) != -1) {
    N = X - z | 0;
    H = I - X | 0;
    y = (N | 0) % (H | 0) | 0;
    if ((y | 0) == 0) {
     Y = H;
    } else {
     L = H;
     O = y;
     while (1) {
      y = (L | 0) % (O | 0) | 0;
      if ((y | 0) == 0) {
       Y = O;
       break;
      } else {
       L = O;
       O = y;
      }
     }
    }
    O = (I - z | 0) / (Y | 0) | 0;
    do {
     if ((Y | 0) > 0) {
      L = -N | 0;
      if ((O | 0) > 0) {
       Z = 0;
      } else {
       _ = X;
       $ = z;
       aa = I;
       break;
      }
      do {
       y = Z + X | 0;
       K = d + (y << 2) | 0;
       J = 0;
       M = y;
       y = c[K >> 2] | 0;
       while (1) {
        t = ((M | 0) < (X | 0) ? H : L) + M | 0;
        x = d + (t << 2) | 0;
        s = c[x >> 2] | 0;
        c[x >> 2] = y;
        c[K >> 2] = s;
        x = J + 1 | 0;
        if ((x | 0) < (O | 0)) {
         J = x;
         M = t;
         y = s;
        } else {
         break;
        }
       }
       Z = Z + 1 | 0;
      } while ((Z | 0) < (Y | 0));
      _ = c[50] | 0;
      $ = c[48] | 0;
      aa = c[44] | 0;
     } else {
      _ = X;
      $ = z;
      aa = I;
     }
    } while (0);
    c[44] = $ - _ + aa;
   }
   c[50] = -1;
   c[48] = -1;
   k = -1;
   i = j;
   return k | 0;
  } else if ((o | 0) == 1221) {
   c[44] = A + 1;
   c[198] = c[D >> 2];
   k = 1;
   i = j;
   return k | 0;
  }
 } while (0);
 D = (f | 0) != 0;
 L1655 : do {
  if (D) {
   if ((B | 0) == (c[d + (C << 2) >> 2] | 0)) {
    ab = B;
    break;
   }
   A = a[B] | 0;
   do {
    if (A << 24 >> 24 == 45) {
     c[40] = B + 1;
     ac = 0;
    } else {
     if ((w & 4 | 0) == 0) {
      ab = B;
      break L1655;
     }
     if (A << 24 >> 24 == 58) {
      ac = 0;
      break;
     }
     ac = (aB(v | 0, A << 24 >> 24 | 0) | 0) != 0 | 0;
    }
   } while (0);
   A = bg(d, v, f, g, ac) | 0;
   if ((A | 0) == -1) {
    ab = c[40] | 0;
    break;
   }
   c[40] = 824;
   k = A;
   i = j;
   return k | 0;
  } else {
   ab = B;
  }
 } while (0);
 B = ab + 1 | 0;
 c[40] = B;
 ac = a[ab] | 0;
 ab = ac << 24 >> 24;
 if ((ac << 24 >> 24 | 0) == 58) {
  o = 1267;
 } else if ((ac << 24 >> 24 | 0) == 45) {
  if ((a[B] | 0) == 0) {
   o = 1264;
  }
 } else {
  o = 1264;
 }
 do {
  if ((o | 0) == 1264) {
   w = aB(v | 0, ab | 0) | 0;
   if ((w | 0) == 0) {
    if (ac << 24 >> 24 != 45) {
     o = 1267;
     break;
    }
    if ((a[B] | 0) == 0) {
     k = -1;
    } else {
     break;
    }
    i = j;
    return k | 0;
   }
   C = a[w + 1 | 0] | 0;
   if (D & ac << 24 >> 24 == 87 & C << 24 >> 24 == 59) {
    do {
     if ((a[B] | 0) == 0) {
      A = (c[44] | 0) + 1 | 0;
      c[44] = A;
      if ((A | 0) < (b | 0)) {
       c[40] = c[d + (A << 2) >> 2];
       break;
      }
      c[40] = 824;
      do {
       if ((c[46] | 0) != 0) {
        if ((a[v] | 0) == 58) {
         break;
        }
        b1(48, (ad = i, i = i + 8 | 0, c[ad >> 2] = ab, ad) | 0);
        i = ad;
       }
      } while (0);
      c[42] = ab;
      k = (a[v] | 0) == 58 ? 58 : 63;
      i = j;
      return k | 0;
     }
    } while (0);
    A = bg(d, v, f, g, 0) | 0;
    c[40] = 824;
    k = A;
    i = j;
    return k | 0;
   }
   if (C << 24 >> 24 != 58) {
    if ((a[B] | 0) != 0) {
     k = ab;
     i = j;
     return k | 0;
    }
    c[44] = (c[44] | 0) + 1;
    k = ab;
    i = j;
    return k | 0;
   }
   c[198] = 0;
   do {
    if ((a[B] | 0) == 0) {
     if ((a[w + 2 | 0] | 0) == 58) {
      break;
     }
     A = (c[44] | 0) + 1 | 0;
     c[44] = A;
     if ((A | 0) < (b | 0)) {
      c[198] = c[d + (A << 2) >> 2];
      break;
     }
     c[40] = 824;
     do {
      if ((c[46] | 0) != 0) {
       if ((a[v] | 0) == 58) {
        break;
       }
       b1(48, (ad = i, i = i + 8 | 0, c[ad >> 2] = ab, ad) | 0);
       i = ad;
      }
     } while (0);
     c[42] = ab;
     k = (a[v] | 0) == 58 ? 58 : 63;
     i = j;
     return k | 0;
    } else {
     c[198] = B;
    }
   } while (0);
   c[40] = 824;
   c[44] = (c[44] | 0) + 1;
   k = ab;
   i = j;
   return k | 0;
  }
 } while (0);
 do {
  if ((o | 0) == 1267) {
   if ((a[B] | 0) != 0) {
    break;
   }
   c[44] = (c[44] | 0) + 1;
  }
 } while (0);
 do {
  if ((c[46] | 0) != 0) {
   if ((a[v] | 0) == 58) {
    break;
   }
   b1(272, (ad = i, i = i + 8 | 0, c[ad >> 2] = ab, ad) | 0);
   i = ad;
  }
 } while (0);
 c[42] = ab;
 k = 63;
 i = j;
 return k | 0;
}
function bb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0;
 d = a;
 e = d + b | 0;
 f = e;
 g = c[a + 4 >> 2] | 0;
 L1314 : do {
  if ((g & 1 | 0) == 0) {
   h = c[a >> 2] | 0;
   if ((g & 3 | 0) == 0) {
    return;
   }
   i = d + (-h | 0) | 0;
   j = i;
   k = h + b | 0;
   l = c[212] | 0;
   if (i >>> 0 < l >>> 0) {
    au();
   }
   if ((j | 0) == (c[213] | 0)) {
    m = d + (b + 4) | 0;
    if ((c[m >> 2] & 3 | 0) != 3) {
     n = j;
     o = k;
     break;
    }
    c[210] = k;
    c[m >> 2] = c[m >> 2] & -2;
    c[d + (4 - h) >> 2] = k | 1;
    c[e >> 2] = k;
    return;
   }
   m = h >>> 3;
   if (h >>> 0 < 256) {
    p = c[d + (8 - h) >> 2] | 0;
    q = c[d + (12 - h) >> 2] | 0;
    r = 872 + (m << 1 << 2) | 0;
    do {
     if ((p | 0) != (r | 0)) {
      if (p >>> 0 < l >>> 0) {
       au();
      }
      if ((c[p + 12 >> 2] | 0) == (j | 0)) {
       break;
      }
      au();
     }
    } while (0);
    if ((q | 0) == (p | 0)) {
     c[208] = c[208] & ~(1 << m);
     n = j;
     o = k;
     break;
    }
    do {
     if ((q | 0) == (r | 0)) {
      s = q + 8 | 0;
     } else {
      if (q >>> 0 < l >>> 0) {
       au();
      }
      t = q + 8 | 0;
      if ((c[t >> 2] | 0) == (j | 0)) {
       s = t;
       break;
      }
      au();
     }
    } while (0);
    c[p + 12 >> 2] = q;
    c[s >> 2] = p;
    n = j;
    o = k;
    break;
   }
   r = i;
   m = c[d + (24 - h) >> 2] | 0;
   t = c[d + (12 - h) >> 2] | 0;
   do {
    if ((t | 0) == (r | 0)) {
     u = 16 - h | 0;
     v = d + (u + 4) | 0;
     w = c[v >> 2] | 0;
     if ((w | 0) == 0) {
      x = d + u | 0;
      u = c[x >> 2] | 0;
      if ((u | 0) == 0) {
       y = 0;
       break;
      } else {
       z = u;
       A = x;
      }
     } else {
      z = w;
      A = v;
     }
     while (1) {
      v = z + 20 | 0;
      w = c[v >> 2] | 0;
      if ((w | 0) != 0) {
       z = w;
       A = v;
       continue;
      }
      v = z + 16 | 0;
      w = c[v >> 2] | 0;
      if ((w | 0) == 0) {
       break;
      } else {
       z = w;
       A = v;
      }
     }
     if (A >>> 0 < l >>> 0) {
      au();
     } else {
      c[A >> 2] = 0;
      y = z;
      break;
     }
    } else {
     v = c[d + (8 - h) >> 2] | 0;
     if (v >>> 0 < l >>> 0) {
      au();
     }
     w = v + 12 | 0;
     if ((c[w >> 2] | 0) != (r | 0)) {
      au();
     }
     x = t + 8 | 0;
     if ((c[x >> 2] | 0) == (r | 0)) {
      c[w >> 2] = t;
      c[x >> 2] = v;
      y = t;
      break;
     } else {
      au();
     }
    }
   } while (0);
   if ((m | 0) == 0) {
    n = j;
    o = k;
    break;
   }
   t = d + (28 - h) | 0;
   l = 1136 + (c[t >> 2] << 2) | 0;
   do {
    if ((r | 0) == (c[l >> 2] | 0)) {
     c[l >> 2] = y;
     if ((y | 0) != 0) {
      break;
     }
     c[209] = c[209] & ~(1 << c[t >> 2]);
     n = j;
     o = k;
     break L1314;
    } else {
     if (m >>> 0 < (c[212] | 0) >>> 0) {
      au();
     }
     i = m + 16 | 0;
     if ((c[i >> 2] | 0) == (r | 0)) {
      c[i >> 2] = y;
     } else {
      c[m + 20 >> 2] = y;
     }
     if ((y | 0) == 0) {
      n = j;
      o = k;
      break L1314;
     }
    }
   } while (0);
   if (y >>> 0 < (c[212] | 0) >>> 0) {
    au();
   }
   c[y + 24 >> 2] = m;
   r = 16 - h | 0;
   t = c[d + r >> 2] | 0;
   do {
    if ((t | 0) != 0) {
     if (t >>> 0 < (c[212] | 0) >>> 0) {
      au();
     } else {
      c[y + 16 >> 2] = t;
      c[t + 24 >> 2] = y;
      break;
     }
    }
   } while (0);
   t = c[d + (r + 4) >> 2] | 0;
   if ((t | 0) == 0) {
    n = j;
    o = k;
    break;
   }
   if (t >>> 0 < (c[212] | 0) >>> 0) {
    au();
   } else {
    c[y + 20 >> 2] = t;
    c[t + 24 >> 2] = y;
    n = j;
    o = k;
    break;
   }
  } else {
   n = a;
   o = b;
  }
 } while (0);
 a = c[212] | 0;
 if (e >>> 0 < a >>> 0) {
  au();
 }
 y = d + (b + 4) | 0;
 z = c[y >> 2] | 0;
 do {
  if ((z & 2 | 0) == 0) {
   if ((f | 0) == (c[214] | 0)) {
    A = (c[211] | 0) + o | 0;
    c[211] = A;
    c[214] = n;
    c[n + 4 >> 2] = A | 1;
    if ((n | 0) != (c[213] | 0)) {
     return;
    }
    c[213] = 0;
    c[210] = 0;
    return;
   }
   if ((f | 0) == (c[213] | 0)) {
    A = (c[210] | 0) + o | 0;
    c[210] = A;
    c[213] = n;
    c[n + 4 >> 2] = A | 1;
    c[n + A >> 2] = A;
    return;
   }
   A = (z & -8) + o | 0;
   s = z >>> 3;
   L1413 : do {
    if (z >>> 0 < 256) {
     g = c[d + (b + 8) >> 2] | 0;
     t = c[d + (b + 12) >> 2] | 0;
     h = 872 + (s << 1 << 2) | 0;
     do {
      if ((g | 0) != (h | 0)) {
       if (g >>> 0 < a >>> 0) {
        au();
       }
       if ((c[g + 12 >> 2] | 0) == (f | 0)) {
        break;
       }
       au();
      }
     } while (0);
     if ((t | 0) == (g | 0)) {
      c[208] = c[208] & ~(1 << s);
      break;
     }
     do {
      if ((t | 0) == (h | 0)) {
       B = t + 8 | 0;
      } else {
       if (t >>> 0 < a >>> 0) {
        au();
       }
       m = t + 8 | 0;
       if ((c[m >> 2] | 0) == (f | 0)) {
        B = m;
        break;
       }
       au();
      }
     } while (0);
     c[g + 12 >> 2] = t;
     c[B >> 2] = g;
    } else {
     h = e;
     m = c[d + (b + 24) >> 2] | 0;
     l = c[d + (b + 12) >> 2] | 0;
     do {
      if ((l | 0) == (h | 0)) {
       i = d + (b + 20) | 0;
       p = c[i >> 2] | 0;
       if ((p | 0) == 0) {
        q = d + (b + 16) | 0;
        v = c[q >> 2] | 0;
        if ((v | 0) == 0) {
         C = 0;
         break;
        } else {
         D = v;
         E = q;
        }
       } else {
        D = p;
        E = i;
       }
       while (1) {
        i = D + 20 | 0;
        p = c[i >> 2] | 0;
        if ((p | 0) != 0) {
         D = p;
         E = i;
         continue;
        }
        i = D + 16 | 0;
        p = c[i >> 2] | 0;
        if ((p | 0) == 0) {
         break;
        } else {
         D = p;
         E = i;
        }
       }
       if (E >>> 0 < a >>> 0) {
        au();
       } else {
        c[E >> 2] = 0;
        C = D;
        break;
       }
      } else {
       i = c[d + (b + 8) >> 2] | 0;
       if (i >>> 0 < a >>> 0) {
        au();
       }
       p = i + 12 | 0;
       if ((c[p >> 2] | 0) != (h | 0)) {
        au();
       }
       q = l + 8 | 0;
       if ((c[q >> 2] | 0) == (h | 0)) {
        c[p >> 2] = l;
        c[q >> 2] = i;
        C = l;
        break;
       } else {
        au();
       }
      }
     } while (0);
     if ((m | 0) == 0) {
      break;
     }
     l = d + (b + 28) | 0;
     g = 1136 + (c[l >> 2] << 2) | 0;
     do {
      if ((h | 0) == (c[g >> 2] | 0)) {
       c[g >> 2] = C;
       if ((C | 0) != 0) {
        break;
       }
       c[209] = c[209] & ~(1 << c[l >> 2]);
       break L1413;
      } else {
       if (m >>> 0 < (c[212] | 0) >>> 0) {
        au();
       }
       t = m + 16 | 0;
       if ((c[t >> 2] | 0) == (h | 0)) {
        c[t >> 2] = C;
       } else {
        c[m + 20 >> 2] = C;
       }
       if ((C | 0) == 0) {
        break L1413;
       }
      }
     } while (0);
     if (C >>> 0 < (c[212] | 0) >>> 0) {
      au();
     }
     c[C + 24 >> 2] = m;
     h = c[d + (b + 16) >> 2] | 0;
     do {
      if ((h | 0) != 0) {
       if (h >>> 0 < (c[212] | 0) >>> 0) {
        au();
       } else {
        c[C + 16 >> 2] = h;
        c[h + 24 >> 2] = C;
        break;
       }
      }
     } while (0);
     h = c[d + (b + 20) >> 2] | 0;
     if ((h | 0) == 0) {
      break;
     }
     if (h >>> 0 < (c[212] | 0) >>> 0) {
      au();
     } else {
      c[C + 20 >> 2] = h;
      c[h + 24 >> 2] = C;
      break;
     }
    }
   } while (0);
   c[n + 4 >> 2] = A | 1;
   c[n + A >> 2] = A;
   if ((n | 0) != (c[213] | 0)) {
    F = A;
    break;
   }
   c[210] = A;
   return;
  } else {
   c[y >> 2] = z & -2;
   c[n + 4 >> 2] = o | 1;
   c[n + o >> 2] = o;
   F = o;
  }
 } while (0);
 o = F >>> 3;
 if (F >>> 0 < 256) {
  z = o << 1;
  y = 872 + (z << 2) | 0;
  C = c[208] | 0;
  b = 1 << o;
  do {
   if ((C & b | 0) == 0) {
    c[208] = C | b;
    G = y;
    H = 872 + (z + 2 << 2) | 0;
   } else {
    o = 872 + (z + 2 << 2) | 0;
    d = c[o >> 2] | 0;
    if (d >>> 0 >= (c[212] | 0) >>> 0) {
     G = d;
     H = o;
     break;
    }
    au();
   }
  } while (0);
  c[H >> 2] = n;
  c[G + 12 >> 2] = n;
  c[n + 8 >> 2] = G;
  c[n + 12 >> 2] = y;
  return;
 }
 y = n;
 G = F >>> 8;
 do {
  if ((G | 0) == 0) {
   I = 0;
  } else {
   if (F >>> 0 > 16777215) {
    I = 31;
    break;
   }
   H = (G + 1048320 | 0) >>> 16 & 8;
   z = G << H;
   b = (z + 520192 | 0) >>> 16 & 4;
   C = z << b;
   z = (C + 245760 | 0) >>> 16 & 2;
   o = 14 - (b | H | z) + (C << z >>> 15) | 0;
   I = F >>> ((o + 7 | 0) >>> 0) & 1 | o << 1;
  }
 } while (0);
 G = 1136 + (I << 2) | 0;
 c[n + 28 >> 2] = I;
 c[n + 20 >> 2] = 0;
 c[n + 16 >> 2] = 0;
 o = c[209] | 0;
 z = 1 << I;
 if ((o & z | 0) == 0) {
  c[209] = o | z;
  c[G >> 2] = y;
  c[n + 24 >> 2] = G;
  c[n + 12 >> 2] = n;
  c[n + 8 >> 2] = n;
  return;
 }
 z = c[G >> 2] | 0;
 if ((I | 0) == 31) {
  J = 0;
 } else {
  J = 25 - (I >>> 1) | 0;
 }
 L1507 : do {
  if ((c[z + 4 >> 2] & -8 | 0) == (F | 0)) {
   K = z;
  } else {
   I = z;
   G = F << J;
   while (1) {
    L = I + 16 + (G >>> 31 << 2) | 0;
    o = c[L >> 2] | 0;
    if ((o | 0) == 0) {
     break;
    }
    if ((c[o + 4 >> 2] & -8 | 0) == (F | 0)) {
     K = o;
     break L1507;
    } else {
     I = o;
     G = G << 1;
    }
   }
   if (L >>> 0 < (c[212] | 0) >>> 0) {
    au();
   }
   c[L >> 2] = y;
   c[n + 24 >> 2] = I;
   c[n + 12 >> 2] = n;
   c[n + 8 >> 2] = n;
   return;
  }
 } while (0);
 L = K + 8 | 0;
 F = c[L >> 2] | 0;
 J = c[212] | 0;
 if (K >>> 0 < J >>> 0) {
  au();
 }
 if (F >>> 0 < J >>> 0) {
  au();
 }
 c[F + 12 >> 2] = y;
 c[L >> 2] = y;
 c[n + 8 >> 2] = F;
 c[n + 12 >> 2] = K;
 c[n + 24 >> 2] = 0;
 return;
}
function bd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 d = a + 4 | 0;
 e = c[d >> 2] | 0;
 f = e & -8;
 g = a;
 h = g + f | 0;
 i = h;
 j = c[212] | 0;
 if (g >>> 0 < j >>> 0) {
  au();
  return 0;
 }
 k = e & 3;
 if (!((k | 0) != 1 & g >>> 0 < h >>> 0)) {
  au();
  return 0;
 }
 l = g + (f | 4) | 0;
 m = c[l >> 2] | 0;
 if ((m & 1 | 0) == 0) {
  au();
  return 0;
 }
 if ((k | 0) == 0) {
  if (b >>> 0 < 256) {
   n = 0;
   return n | 0;
  }
  do {
   if (f >>> 0 >= (b + 4 | 0) >>> 0) {
    if ((f - b | 0) >>> 0 > c[202] << 1 >>> 0) {
     break;
    } else {
     n = a;
    }
    return n | 0;
   }
  } while (0);
  n = 0;
  return n | 0;
 }
 if (f >>> 0 >= b >>> 0) {
  k = f - b | 0;
  if (k >>> 0 <= 15) {
   n = a;
   return n | 0;
  }
  c[d >> 2] = e & 1 | b | 2;
  c[g + (b + 4) >> 2] = k | 3;
  c[l >> 2] = c[l >> 2] | 1;
  bb(g + b | 0, k);
  n = a;
  return n | 0;
 }
 if ((i | 0) == (c[214] | 0)) {
  k = (c[211] | 0) + f | 0;
  if (k >>> 0 <= b >>> 0) {
   n = 0;
   return n | 0;
  }
  l = k - b | 0;
  c[d >> 2] = e & 1 | b | 2;
  c[g + (b + 4) >> 2] = l | 1;
  c[214] = g + b;
  c[211] = l;
  n = a;
  return n | 0;
 }
 if ((i | 0) == (c[213] | 0)) {
  l = (c[210] | 0) + f | 0;
  if (l >>> 0 < b >>> 0) {
   n = 0;
   return n | 0;
  }
  k = l - b | 0;
  if (k >>> 0 > 15) {
   c[d >> 2] = e & 1 | b | 2;
   c[g + (b + 4) >> 2] = k | 1;
   c[g + l >> 2] = k;
   o = g + (l + 4) | 0;
   c[o >> 2] = c[o >> 2] & -2;
   p = g + b | 0;
   q = k;
  } else {
   c[d >> 2] = e & 1 | l | 2;
   e = g + (l + 4) | 0;
   c[e >> 2] = c[e >> 2] | 1;
   p = 0;
   q = 0;
  }
  c[210] = q;
  c[213] = p;
  n = a;
  return n | 0;
 }
 if ((m & 2 | 0) != 0) {
  n = 0;
  return n | 0;
 }
 p = (m & -8) + f | 0;
 if (p >>> 0 < b >>> 0) {
  n = 0;
  return n | 0;
 }
 q = p - b | 0;
 e = m >>> 3;
 L977 : do {
  if (m >>> 0 < 256) {
   l = c[g + (f + 8) >> 2] | 0;
   k = c[g + (f + 12) >> 2] | 0;
   o = 872 + (e << 1 << 2) | 0;
   do {
    if ((l | 0) != (o | 0)) {
     if (l >>> 0 < j >>> 0) {
      au();
      return 0;
     }
     if ((c[l + 12 >> 2] | 0) == (i | 0)) {
      break;
     }
     au();
     return 0;
    }
   } while (0);
   if ((k | 0) == (l | 0)) {
    c[208] = c[208] & ~(1 << e);
    break;
   }
   do {
    if ((k | 0) == (o | 0)) {
     r = k + 8 | 0;
    } else {
     if (k >>> 0 < j >>> 0) {
      au();
      return 0;
     }
     s = k + 8 | 0;
     if ((c[s >> 2] | 0) == (i | 0)) {
      r = s;
      break;
     }
     au();
     return 0;
    }
   } while (0);
   c[l + 12 >> 2] = k;
   c[r >> 2] = l;
  } else {
   o = h;
   s = c[g + (f + 24) >> 2] | 0;
   t = c[g + (f + 12) >> 2] | 0;
   do {
    if ((t | 0) == (o | 0)) {
     u = g + (f + 20) | 0;
     v = c[u >> 2] | 0;
     if ((v | 0) == 0) {
      w = g + (f + 16) | 0;
      x = c[w >> 2] | 0;
      if ((x | 0) == 0) {
       y = 0;
       break;
      } else {
       z = x;
       A = w;
      }
     } else {
      z = v;
      A = u;
     }
     while (1) {
      u = z + 20 | 0;
      v = c[u >> 2] | 0;
      if ((v | 0) != 0) {
       z = v;
       A = u;
       continue;
      }
      u = z + 16 | 0;
      v = c[u >> 2] | 0;
      if ((v | 0) == 0) {
       break;
      } else {
       z = v;
       A = u;
      }
     }
     if (A >>> 0 < j >>> 0) {
      au();
      return 0;
     } else {
      c[A >> 2] = 0;
      y = z;
      break;
     }
    } else {
     u = c[g + (f + 8) >> 2] | 0;
     if (u >>> 0 < j >>> 0) {
      au();
      return 0;
     }
     v = u + 12 | 0;
     if ((c[v >> 2] | 0) != (o | 0)) {
      au();
      return 0;
     }
     w = t + 8 | 0;
     if ((c[w >> 2] | 0) == (o | 0)) {
      c[v >> 2] = t;
      c[w >> 2] = u;
      y = t;
      break;
     } else {
      au();
      return 0;
     }
    }
   } while (0);
   if ((s | 0) == 0) {
    break;
   }
   t = g + (f + 28) | 0;
   l = 1136 + (c[t >> 2] << 2) | 0;
   do {
    if ((o | 0) == (c[l >> 2] | 0)) {
     c[l >> 2] = y;
     if ((y | 0) != 0) {
      break;
     }
     c[209] = c[209] & ~(1 << c[t >> 2]);
     break L977;
    } else {
     if (s >>> 0 < (c[212] | 0) >>> 0) {
      au();
      return 0;
     }
     k = s + 16 | 0;
     if ((c[k >> 2] | 0) == (o | 0)) {
      c[k >> 2] = y;
     } else {
      c[s + 20 >> 2] = y;
     }
     if ((y | 0) == 0) {
      break L977;
     }
    }
   } while (0);
   if (y >>> 0 < (c[212] | 0) >>> 0) {
    au();
    return 0;
   }
   c[y + 24 >> 2] = s;
   o = c[g + (f + 16) >> 2] | 0;
   do {
    if ((o | 0) != 0) {
     if (o >>> 0 < (c[212] | 0) >>> 0) {
      au();
      return 0;
     } else {
      c[y + 16 >> 2] = o;
      c[o + 24 >> 2] = y;
      break;
     }
    }
   } while (0);
   o = c[g + (f + 20) >> 2] | 0;
   if ((o | 0) == 0) {
    break;
   }
   if (o >>> 0 < (c[212] | 0) >>> 0) {
    au();
    return 0;
   } else {
    c[y + 20 >> 2] = o;
    c[o + 24 >> 2] = y;
    break;
   }
  }
 } while (0);
 if (q >>> 0 < 16) {
  c[d >> 2] = p | c[d >> 2] & 1 | 2;
  y = g + (p | 4) | 0;
  c[y >> 2] = c[y >> 2] | 1;
  n = a;
  return n | 0;
 } else {
  c[d >> 2] = c[d >> 2] & 1 | b | 2;
  c[g + (b + 4) >> 2] = q | 3;
  d = g + (p | 4) | 0;
  c[d >> 2] = c[d >> 2] | 1;
  bb(g + b | 0, q);
  n = a;
  return n | 0;
 }
 return 0;
}
function be(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ab = 0;
 b = i;
 i = i + 128 | 0;
 d = b | 0;
 e = b + 64 | 0;
 f = 0;
 do {
  c[d + (f << 2) >> 2] = ci(a + (f << 2) | 0) | 0;
  f = f + 1 | 0;
 } while (f >>> 0 < 16);
 f = d;
 g = e;
 bD(g | 0, f | 0, 64) | 0;
 f = e | 0;
 g = e + 48 | 0;
 h = e + 16 | 0;
 j = e + 32 | 0;
 k = e + 20 | 0;
 l = e + 4 | 0;
 m = e + 36 | 0;
 n = e + 52 | 0;
 o = e + 40 | 0;
 p = e + 24 | 0;
 q = e + 56 | 0;
 r = e + 8 | 0;
 s = e + 60 | 0;
 t = e + 44 | 0;
 u = e + 12 | 0;
 v = e + 28 | 0;
 w = 0;
 x = c[f >> 2] | 0;
 y = c[g >> 2] | 0;
 z = c[h >> 2] | 0;
 A = c[j >> 2] | 0;
 B = c[k >> 2] | 0;
 C = c[l >> 2] | 0;
 D = c[m >> 2] | 0;
 E = c[n >> 2] | 0;
 F = c[o >> 2] | 0;
 G = c[p >> 2] | 0;
 H = c[q >> 2] | 0;
 I = c[r >> 2] | 0;
 J = c[s >> 2] | 0;
 K = c[t >> 2] | 0;
 L = c[u >> 2] | 0;
 M = c[v >> 2] | 0;
 do {
  N = y + x | 0;
  O = (N << 7 | N >>> 25) ^ z;
  N = O + x | 0;
  P = (N << 9 | N >>> 23) ^ A;
  N = P + O | 0;
  Q = (N << 13 | N >>> 19) ^ y;
  N = Q + P | 0;
  R = (N << 18 | N >>> 14) ^ x;
  N = C + B | 0;
  S = (N << 7 | N >>> 25) ^ D;
  N = S + B | 0;
  T = (N << 9 | N >>> 23) ^ E;
  N = T + S | 0;
  U = (N << 13 | N >>> 19) ^ C;
  N = U + T | 0;
  V = (N << 18 | N >>> 14) ^ B;
  N = G + F | 0;
  W = (N << 7 | N >>> 25) ^ H;
  N = W + F | 0;
  X = (N << 9 | N >>> 23) ^ I;
  N = X + W | 0;
  Y = (N << 13 | N >>> 19) ^ G;
  N = Y + X | 0;
  Z = (N << 18 | N >>> 14) ^ F;
  N = K + J | 0;
  _ = (N << 7 | N >>> 25) ^ L;
  N = _ + J | 0;
  $ = (N << 9 | N >>> 23) ^ M;
  N = $ + _ | 0;
  aa = (N << 13 | N >>> 19) ^ K;
  N = aa + $ | 0;
  ab = (N << 18 | N >>> 14) ^ J;
  N = _ + R | 0;
  C = (N << 7 | N >>> 25) ^ U;
  U = C + R | 0;
  I = (U << 9 | U >>> 23) ^ X;
  X = I + C | 0;
  L = (X << 13 | X >>> 19) ^ _;
  _ = L + I | 0;
  x = (_ << 18 | _ >>> 14) ^ R;
  R = O + V | 0;
  G = (R << 7 | R >>> 25) ^ Y;
  Y = G + V | 0;
  M = (Y << 9 | Y >>> 23) ^ $;
  $ = M + G | 0;
  z = ($ << 13 | $ >>> 19) ^ O;
  O = z + M | 0;
  B = (O << 18 | O >>> 14) ^ V;
  V = S + Z | 0;
  K = (V << 7 | V >>> 25) ^ aa;
  aa = K + Z | 0;
  A = (aa << 9 | aa >>> 23) ^ P;
  P = A + K | 0;
  D = (P << 13 | P >>> 19) ^ S;
  S = D + A | 0;
  F = (S << 18 | S >>> 14) ^ Z;
  Z = W + ab | 0;
  y = (Z << 7 | Z >>> 25) ^ Q;
  Q = y + ab | 0;
  E = (Q << 9 | Q >>> 23) ^ T;
  T = E + y | 0;
  H = (T << 13 | T >>> 19) ^ W;
  W = H + E | 0;
  J = (W << 18 | W >>> 14) ^ ab;
  w = w + 2 | 0;
 } while (w >>> 0 < 8);
 c[f >> 2] = x;
 c[g >> 2] = y;
 c[h >> 2] = z;
 c[j >> 2] = A;
 c[k >> 2] = B;
 c[l >> 2] = C;
 c[m >> 2] = D;
 c[n >> 2] = E;
 c[o >> 2] = F;
 c[p >> 2] = G;
 c[q >> 2] = H;
 c[r >> 2] = I;
 c[s >> 2] = J;
 c[t >> 2] = K;
 c[u >> 2] = L;
 c[v >> 2] = M;
 M = d | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e >> 2] | 0);
 M = d + 4 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 4 >> 2] | 0);
 M = d + 8 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 8 >> 2] | 0);
 M = d + 12 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 12 >> 2] | 0);
 M = d + 16 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 16 >> 2] | 0);
 M = d + 20 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 20 >> 2] | 0);
 M = d + 24 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 24 >> 2] | 0);
 M = d + 28 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 28 >> 2] | 0);
 M = d + 32 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 32 >> 2] | 0);
 M = d + 36 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 36 >> 2] | 0);
 M = d + 40 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 40 >> 2] | 0);
 M = d + 44 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 44 >> 2] | 0);
 M = d + 48 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 48 >> 2] | 0);
 M = d + 52 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 52 >> 2] | 0);
 M = d + 56 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 56 >> 2] | 0);
 M = d + 60 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 60 >> 2] | 0);
 e = 0;
 do {
  cb(a + (e << 2) | 0, c[d + (e << 2) >> 2] | 0);
  e = e + 1 | 0;
 } while (e >>> 0 < 16);
 i = b;
 return;
}
function bc(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 g = a;
 h = b;
 i = h;
 j = d;
 k = e;
 l = k;
 if ((i | 0) == 0) {
  m = (f | 0) != 0;
  if ((l | 0) == 0) {
   if (m) {
    c[f >> 2] = (g >>> 0) % (j >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   o = (g >>> 0) / (j >>> 0) >>> 0;
   return (H = n, o) | 0;
  } else {
   if (!m) {
    n = 0;
    o = 0;
    return (H = n, o) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   o = 0;
   return (H = n, o) | 0;
  }
 }
 m = (l | 0) == 0;
 do {
  if ((j | 0) == 0) {
   if (m) {
    if ((f | 0) != 0) {
     c[f >> 2] = (i >>> 0) % (j >>> 0);
     c[f + 4 >> 2] = 0;
    }
    n = 0;
    o = (i >>> 0) / (j >>> 0) >>> 0;
    return (H = n, o) | 0;
   }
   if ((g | 0) == 0) {
    if ((f | 0) != 0) {
     c[f >> 2] = 0;
     c[f + 4 >> 2] = (i >>> 0) % (l >>> 0);
    }
    n = 0;
    o = (i >>> 0) / (l >>> 0) >>> 0;
    return (H = n, o) | 0;
   }
   p = l - 1 | 0;
   if ((p & l | 0) == 0) {
    if ((f | 0) != 0) {
     c[f >> 2] = a | 0;
     c[f + 4 >> 2] = p & i | b & 0;
    }
    n = 0;
    o = i >>> ((bQ(l | 0) | 0) >>> 0);
    return (H = n, o) | 0;
   }
   p = (bR(l | 0) | 0) - (bR(i | 0) | 0) | 0;
   if (p >>> 0 <= 30) {
    q = p + 1 | 0;
    r = 31 - p | 0;
    s = q;
    t = i << r | g >>> (q >>> 0);
    u = i >>> (q >>> 0);
    v = 0;
    w = g << r;
    break;
   }
   if ((f | 0) == 0) {
    n = 0;
    o = 0;
    return (H = n, o) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = h | b & 0;
   n = 0;
   o = 0;
   return (H = n, o) | 0;
  } else {
   if (!m) {
    r = (bR(l | 0) | 0) - (bR(i | 0) | 0) | 0;
    if (r >>> 0 <= 31) {
     q = r + 1 | 0;
     p = 31 - r | 0;
     x = r - 31 >> 31;
     s = q;
     t = g >>> (q >>> 0) & x | i << p;
     u = i >>> (q >>> 0) & x;
     v = 0;
     w = g << p;
     break;
    }
    if ((f | 0) == 0) {
     n = 0;
     o = 0;
     return (H = n, o) | 0;
    }
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = h | b & 0;
    n = 0;
    o = 0;
    return (H = n, o) | 0;
   }
   p = j - 1 | 0;
   if ((p & j | 0) != 0) {
    x = (bR(j | 0) | 0) + 33 - (bR(i | 0) | 0) | 0;
    q = 64 - x | 0;
    r = 32 - x | 0;
    y = r >> 31;
    z = x - 32 | 0;
    A = z >> 31;
    s = x;
    t = r - 1 >> 31 & i >>> (z >>> 0) | (i << r | g >>> (x >>> 0)) & A;
    u = A & i >>> (x >>> 0);
    v = g << q & y;
    w = (i << q | g >>> (z >>> 0)) & y | g << r & x - 33 >> 31;
    break;
   }
   if ((f | 0) != 0) {
    c[f >> 2] = p & g;
    c[f + 4 >> 2] = 0;
   }
   if ((j | 0) == 1) {
    n = h | b & 0;
    o = a | 0 | 0;
    return (H = n, o) | 0;
   } else {
    p = bQ(j | 0) | 0;
    n = i >>> (p >>> 0) | 0;
    o = i << 32 - p | g >>> (p >>> 0) | 0;
    return (H = n, o) | 0;
   }
  }
 } while (0);
 if ((s | 0) == 0) {
  B = w;
  C = v;
  D = u;
  E = t;
  F = 0;
  G = 0;
 } else {
  g = d | 0 | 0;
  d = k | e & 0;
  e = cf(g, d, -1, -1) | 0;
  k = H;
  i = w;
  w = v;
  v = u;
  u = t;
  t = s;
  s = 0;
  while (1) {
   I = w >>> 31 | i << 1;
   J = s | w << 1;
   j = u << 1 | i >>> 31 | 0;
   a = u >>> 31 | v << 1 | 0;
   cd(e, k, j, a) | 0;
   b = H;
   h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
   K = h & 1;
   L = cd(j, a, h & g, (((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1) & d) | 0;
   M = H;
   b = t - 1 | 0;
   if ((b | 0) == 0) {
    break;
   } else {
    i = I;
    w = J;
    v = M;
    u = L;
    t = b;
    s = K;
   }
  }
  B = I;
  C = J;
  D = M;
  E = L;
  F = 0;
  G = K;
 }
 K = C;
 C = 0;
 if ((f | 0) != 0) {
  c[f >> 2] = E;
  c[f + 4 >> 2] = D;
 }
 n = (K | 0) >>> 31 | (B | C) << 1 | (C << 1 | K >>> 31) & 0 | F;
 o = (K << 1 | 0 >>> 31) & -2 | G;
 return (H = n, o) | 0;
}
function bf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0.0, r = 0, s = 0, t = 0, u = 0, v = 0.0, w = 0, x = 0, y = 0, z = 0.0, A = 0.0, B = 0, C = 0, D = 0, E = 0.0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0.0, O = 0, P = 0, Q = 0.0, R = 0.0, S = 0.0;
 e = b;
 while (1) {
  f = e + 1 | 0;
  if ((aK(a[e] | 0) | 0) == 0) {
   break;
  } else {
   e = f;
  }
 }
 g = a[e] | 0;
 if ((g << 24 >> 24 | 0) == 45) {
  i = f;
  j = 1;
 } else if ((g << 24 >> 24 | 0) == 43) {
  i = f;
  j = 0;
 } else {
  i = e;
  j = 0;
 }
 e = -1;
 f = 0;
 g = i;
 while (1) {
  k = a[g] | 0;
  if (((k << 24 >> 24) - 48 | 0) >>> 0 < 10) {
   l = e;
  } else {
   if (k << 24 >> 24 != 46 | (e | 0) > -1) {
    break;
   } else {
    l = f;
   }
  }
  e = l;
  f = f + 1 | 0;
  g = g + 1 | 0;
 }
 l = g + (-f | 0) | 0;
 i = (e | 0) < 0;
 m = ((i ^ 1) << 31 >> 31) + f | 0;
 n = (m | 0) > 18;
 o = (n ? -18 : -m | 0) + (i ? f : e) | 0;
 e = n ? 18 : m;
 do {
  if ((e | 0) == 0) {
   p = b;
   q = 0.0;
  } else {
   if ((e | 0) > 9) {
    m = l;
    n = e;
    f = 0;
    while (1) {
     i = a[m] | 0;
     r = m + 1 | 0;
     if (i << 24 >> 24 == 46) {
      s = a[r] | 0;
      t = m + 2 | 0;
     } else {
      s = i;
      t = r;
     }
     u = (f * 10 | 0) - 48 + (s << 24 >> 24) | 0;
     r = n - 1 | 0;
     if ((r | 0) > 9) {
      m = t;
      n = r;
      f = u;
     } else {
      break;
     }
    }
    v = +(u | 0) * 1.0e9;
    w = 9;
    x = t;
    y = 1399;
   } else {
    if ((e | 0) > 0) {
     v = 0.0;
     w = e;
     x = l;
     y = 1399;
    } else {
     z = 0.0;
     A = 0.0;
    }
   }
   if ((y | 0) == 1399) {
    f = x;
    n = w;
    m = 0;
    while (1) {
     r = a[f] | 0;
     i = f + 1 | 0;
     if (r << 24 >> 24 == 46) {
      B = a[i] | 0;
      C = f + 2 | 0;
     } else {
      B = r;
      C = i;
     }
     D = (m * 10 | 0) - 48 + (B << 24 >> 24) | 0;
     i = n - 1 | 0;
     if ((i | 0) > 0) {
      f = C;
      n = i;
      m = D;
     } else {
      break;
     }
    }
    z = +(D | 0);
    A = v;
   }
   E = A + z;
   do {
    if ((k << 24 >> 24 | 0) == 69 | (k << 24 >> 24 | 0) == 101) {
     m = g + 1 | 0;
     n = a[m] | 0;
     if ((n << 24 >> 24 | 0) == 45) {
      F = g + 2 | 0;
      G = 1;
     } else if ((n << 24 >> 24 | 0) == 43) {
      F = g + 2 | 0;
      G = 0;
     } else {
      F = m;
      G = 0;
     }
     m = a[F] | 0;
     if ((m - 48 | 0) >>> 0 < 10) {
      H = F;
      I = 0;
      J = m;
     } else {
      K = 0;
      L = F;
      M = G;
      break;
     }
     while (1) {
      m = (I * 10 | 0) - 48 + J | 0;
      n = H + 1 | 0;
      f = a[n] | 0;
      if ((f - 48 | 0) >>> 0 < 10) {
       H = n;
       I = m;
       J = f;
      } else {
       K = m;
       L = n;
       M = G;
       break;
      }
     }
    } else {
     K = 0;
     L = g;
     M = 0;
    }
   } while (0);
   n = o + ((M | 0) == 0 ? K : -K | 0) | 0;
   m = (n | 0) < 0 ? -n | 0 : n;
   if ((m | 0) > 511) {
    c[(aX() | 0) >> 2] = 34;
    N = 1.0;
    O = 88;
    P = 511;
    y = 1416;
   } else {
    if ((m | 0) == 0) {
     Q = 1.0;
    } else {
     N = 1.0;
     O = 88;
     P = m;
     y = 1416;
    }
   }
   if ((y | 0) == 1416) {
    while (1) {
     y = 0;
     if ((P & 1 | 0) == 0) {
      R = N;
     } else {
      R = N * +h[O >> 3];
     }
     m = P >> 1;
     if ((m | 0) == 0) {
      Q = R;
      break;
     } else {
      N = R;
      O = O + 8 | 0;
      P = m;
      y = 1416;
     }
    }
   }
   if ((n | 0) > -1) {
    p = L;
    q = E * Q;
    break;
   } else {
    p = L;
    q = E / Q;
    break;
   }
  }
 } while (0);
 if ((d | 0) != 0) {
  c[d >> 2] = p;
 }
 if ((j | 0) == 0) {
  S = q;
  return +S;
 }
 S = -0.0 - q;
 return +S;
}
function bg(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 h = i;
 j = c[40] | 0;
 k = c[44] | 0;
 l = k + 1 | 0;
 c[44] = l;
 m = aB(j | 0, 61) | 0;
 if ((m | 0) == 0) {
  n = cs(j | 0) | 0;
  o = 0;
 } else {
  n = m - j | 0;
  o = m + 1 | 0;
 }
 m = c[e >> 2] | 0;
 L1730 : do {
  if ((m | 0) != 0) {
   L1732 : do {
    if ((g | 0) != 0 & (n | 0) == 1) {
     p = 0;
     q = m;
     while (1) {
      if ((a[j] | 0) == (a[q] | 0)) {
       if ((cs(q | 0) | 0) == 1) {
        r = p;
        break L1732;
       }
      }
      p = p + 1 | 0;
      q = c[e + (p << 4) >> 2] | 0;
      if ((q | 0) == 0) {
       break L1730;
      }
     }
    } else {
     q = 0;
     p = -1;
     s = m;
     while (1) {
      if ((ap(j | 0, s | 0, n | 0) | 0) == 0) {
       if ((cs(s | 0) | 0) == (n | 0)) {
        r = q;
        break L1732;
       }
       if ((p | 0) == -1) {
        t = q;
       } else {
        break;
       }
      } else {
       t = p;
      }
      u = q + 1 | 0;
      v = c[e + (u << 4) >> 2] | 0;
      if ((v | 0) == 0) {
       r = t;
       break L1732;
      } else {
       q = u;
       p = t;
       s = v;
      }
     }
     do {
      if ((c[46] | 0) != 0) {
       if ((a[d] | 0) == 58) {
        break;
       }
       b1(304, (w = i, i = i + 16 | 0, c[w >> 2] = n, c[w + 8 >> 2] = j, w) | 0);
       i = w;
      }
     } while (0);
     c[42] = 0;
     x = 63;
     i = h;
     return x | 0;
    }
   } while (0);
   if ((r | 0) == -1) {
    break;
   }
   s = e + (r << 4) + 4 | 0;
   p = c[s >> 2] | 0;
   q = (o | 0) == 0;
   if (!((p | 0) != 0 | q)) {
    do {
     if ((c[46] | 0) != 0) {
      if ((a[d] | 0) == 58) {
       break;
      }
      b1(208, (w = i, i = i + 16 | 0, c[w >> 2] = n, c[w + 8 >> 2] = j, w) | 0);
      i = w;
     }
    } while (0);
    if ((c[e + (r << 4) + 8 >> 2] | 0) == 0) {
     y = c[e + (r << 4) + 12 >> 2] | 0;
    } else {
     y = 0;
    }
    c[42] = y;
    x = (a[d] | 0) == 58 ? 58 : 63;
    i = h;
    return x | 0;
   }
   do {
    if ((p - 1 | 0) >>> 0 < 2) {
     if (!q) {
      c[198] = o;
      break;
     }
     if ((p | 0) != 1) {
      break;
     }
     c[44] = k + 2;
     c[198] = c[b + (l << 2) >> 2];
    }
   } while (0);
   if (!((c[s >> 2] | 0) == 1 & (c[198] | 0) == 0)) {
    if ((f | 0) != 0) {
     c[f >> 2] = r;
    }
    p = c[e + (r << 4) + 8 >> 2] | 0;
    q = c[e + (r << 4) + 12 >> 2] | 0;
    if ((p | 0) == 0) {
     x = q;
     i = h;
     return x | 0;
    }
    c[p >> 2] = q;
    x = 0;
    i = h;
    return x | 0;
   }
   do {
    if ((c[46] | 0) != 0) {
     if ((a[d] | 0) == 58) {
      break;
     }
     b1(8, (w = i, i = i + 8 | 0, c[w >> 2] = j, w) | 0);
     i = w;
    }
   } while (0);
   if ((c[e + (r << 4) + 8 >> 2] | 0) == 0) {
    z = c[e + (r << 4) + 12 >> 2] | 0;
   } else {
    z = 0;
   }
   c[42] = z;
   c[44] = (c[44] | 0) - 1;
   x = (a[d] | 0) == 58 ? 58 : 63;
   i = h;
   return x | 0;
  }
 } while (0);
 if ((g | 0) != 0) {
  c[44] = k;
  x = -1;
  i = h;
  return x | 0;
 }
 do {
  if ((c[46] | 0) != 0) {
   if ((a[d] | 0) == 58) {
    break;
   }
   b1(248, (w = i, i = i + 8 | 0, c[w >> 2] = j, w) | 0);
   i = w;
  }
 } while (0);
 c[42] = 0;
 x = 63;
 i = h;
 return x | 0;
}
function bh(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 do {
  if ((c[200] | 0) == 0) {
   f = ar(30) | 0;
   if ((f - 1 & f | 0) == 0) {
    c[202] = f;
    c[201] = f;
    c[203] = -1;
    c[204] = -1;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 f = (a | 0) == 0;
 do {
  if ((e | 0) == 0) {
   if (f) {
    g = a7(0) | 0;
    return g | 0;
   } else {
    h = a << 2;
    if (h >>> 0 < 11) {
     i = 0;
     j = 16;
     break;
    }
    i = 0;
    j = h + 11 & -8;
    break;
   }
  } else {
   if (f) {
    g = e;
   } else {
    i = e;
    j = 0;
    break;
   }
   return g | 0;
  }
 } while (0);
 do {
  if ((d & 1 | 0) == 0) {
   if (f) {
    k = 0;
    l = 0;
    break;
   } else {
    m = 0;
    n = 0;
   }
   while (1) {
    e = c[b + (n << 2) >> 2] | 0;
    if (e >>> 0 < 11) {
     o = 16;
    } else {
     o = e + 11 & -8;
    }
    e = o + m | 0;
    h = n + 1 | 0;
    if ((h | 0) == (a | 0)) {
     k = 0;
     l = e;
     break;
    } else {
     m = e;
     n = h;
    }
   }
  } else {
   h = c[b >> 2] | 0;
   if (h >>> 0 < 11) {
    p = 16;
   } else {
    p = h + 11 & -8;
   }
   k = p;
   l = ad(p, a) | 0;
  }
 } while (0);
 p = a7(j - 4 + l | 0) | 0;
 if ((p | 0) == 0) {
  g = 0;
  return g | 0;
 }
 n = p - 8 | 0;
 m = c[p - 4 >> 2] & -8;
 if ((d & 2 | 0) != 0) {
  bB(p | 0, 0, -4 - j + m | 0);
 }
 if ((i | 0) == 0) {
  c[p + (l - 4) >> 2] = m - l | 3;
  q = p + l | 0;
  r = l;
 } else {
  q = i;
  r = m;
 }
 c[q >> 2] = p;
 p = a - 1 | 0;
 L1170 : do {
  if ((p | 0) == 0) {
   s = n;
   t = r;
  } else {
   if ((k | 0) == 0) {
    u = n;
    v = r;
    w = 0;
   } else {
    a = n;
    m = r;
    i = 0;
    while (1) {
     l = m - k | 0;
     c[a + 4 >> 2] = k | 3;
     j = a + k | 0;
     d = i + 1 | 0;
     c[q + (d << 2) >> 2] = a + (k + 8);
     if ((d | 0) == (p | 0)) {
      s = j;
      t = l;
      break L1170;
     } else {
      a = j;
      m = l;
      i = d;
     }
    }
   }
   while (1) {
    i = c[b + (w << 2) >> 2] | 0;
    if (i >>> 0 < 11) {
     x = 16;
    } else {
     x = i + 11 & -8;
    }
    i = v - x | 0;
    c[u + 4 >> 2] = x | 3;
    m = u + x | 0;
    a = w + 1 | 0;
    c[q + (a << 2) >> 2] = u + (x + 8);
    if ((a | 0) == (p | 0)) {
     s = m;
     t = i;
     break;
    } else {
     u = m;
     v = i;
     w = a;
    }
   }
  }
 } while (0);
 c[s + 4 >> 2] = t | 3;
 g = q;
 return g | 0;
}
function bi(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 do {
  if ((c[200] | 0) == 0) {
   b = ar(30) | 0;
   if ((b - 1 & b | 0) == 0) {
    c[202] = b;
    c[201] = b;
    c[203] = -1;
    c[204] = -1;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
   }
  }
 } while (0);
 b = c[214] | 0;
 if ((b | 0) == 0) {
  d = 0;
  e = 0;
  f = 0;
  g = 0;
  h = 0;
  i = 0;
  j = 0;
 } else {
  k = c[211] | 0;
  l = k + 40 | 0;
  m = 1;
  n = l;
  o = l;
  l = 1280;
  while (1) {
   p = c[l >> 2] | 0;
   q = p + 8 | 0;
   if ((q & 7 | 0) == 0) {
    r = 0;
   } else {
    r = -q & 7;
   }
   q = p + (c[l + 4 >> 2] | 0) | 0;
   s = m;
   t = n;
   u = o;
   v = p + r | 0;
   while (1) {
    if (v >>> 0 >= q >>> 0 | (v | 0) == (b | 0)) {
     w = s;
     x = t;
     y = u;
     break;
    }
    z = c[v + 4 >> 2] | 0;
    if ((z | 0) == 7) {
     w = s;
     x = t;
     y = u;
     break;
    }
    A = z & -8;
    B = A + u | 0;
    if ((z & 3 | 0) == 1) {
     C = A + t | 0;
     D = s + 1 | 0;
    } else {
     C = t;
     D = s;
    }
    z = v + A | 0;
    if (z >>> 0 < p >>> 0) {
     w = D;
     x = C;
     y = B;
     break;
    } else {
     s = D;
     t = C;
     u = B;
     v = z;
    }
   }
   v = c[l + 8 >> 2] | 0;
   if ((v | 0) == 0) {
    break;
   } else {
    m = w;
    n = x;
    o = y;
    l = v;
   }
  }
  l = c[316] | 0;
  d = k;
  e = y;
  f = w;
  g = l - y | 0;
  h = c[317] | 0;
  i = l - x | 0;
  j = x;
 }
 c[a >> 2] = e;
 c[a + 4 >> 2] = f;
 f = a + 8 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[a + 16 >> 2] = g;
 c[a + 20 >> 2] = h;
 c[a + 24 >> 2] = 0;
 c[a + 28 >> 2] = i;
 c[a + 32 >> 2] = j;
 c[a + 36 >> 2] = d;
 return;
}
function bk(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 do {
  if ((c[200] | 0) == 0) {
   b = ar(30) | 0;
   if ((b - 1 & b | 0) == 0) {
    c[202] = b;
    c[201] = b;
    c[203] = -1;
    c[204] = -1;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 if (a >>> 0 >= 4294967232) {
  d = 0;
  return d | 0;
 }
 b = c[214] | 0;
 if ((b | 0) == 0) {
  d = 0;
  return d | 0;
 }
 e = c[211] | 0;
 do {
  if (e >>> 0 > (a + 40 | 0) >>> 0) {
   f = c[202] | 0;
   g = ((-41 - a + e + f | 0) >>> 0) / (f >>> 0) | 0;
   h = b;
   i = 1280;
   while (1) {
    j = i | 0;
    k = c[j >> 2] | 0;
    if (k >>> 0 <= h >>> 0) {
     l = i + 4 | 0;
     if ((k + (c[l >> 2] | 0) | 0) >>> 0 > h >>> 0) {
      break;
     }
    }
    i = c[i + 8 >> 2] | 0;
   }
   h = ad(g - 1 | 0, f) | 0;
   if ((c[i + 12 >> 2] & 8 | 0) != 0) {
    break;
   }
   k = aV(0) | 0;
   if ((k | 0) != ((c[j >> 2] | 0) + (c[l >> 2] | 0) | 0)) {
    break;
   }
   m = aV(-(h >>> 0 > 2147483646 ? -2147483648 - f | 0 : h) | 0) | 0;
   h = aV(0) | 0;
   if (!((m | 0) != -1 & h >>> 0 < k >>> 0)) {
    break;
   }
   m = k - h | 0;
   if ((k | 0) == (h | 0)) {
    break;
   }
   c[l >> 2] = (c[l >> 2] | 0) - m;
   c[316] = (c[316] | 0) - m;
   h = c[214] | 0;
   k = (c[211] | 0) - m | 0;
   m = h;
   n = h + 8 | 0;
   if ((n & 7 | 0) == 0) {
    o = 0;
   } else {
    o = -n & 7;
   }
   n = k - o | 0;
   c[214] = m + o;
   c[211] = n;
   c[m + (o + 4) >> 2] = n | 1;
   c[m + (k + 4) >> 2] = 40;
   c[215] = c[204];
   d = 1;
   return d | 0;
  }
 } while (0);
 if ((c[211] | 0) >>> 0 <= (c[215] | 0) >>> 0) {
  d = 0;
  return d | 0;
 }
 c[215] = -1;
 d = 0;
 return d | 0;
}
function bl(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 d = a >>> 0 < 16 ? 16 : a;
 if ((d - 1 & d | 0) == 0) {
  e = d;
 } else {
  a = 16;
  while (1) {
   if (a >>> 0 < d >>> 0) {
    a = a << 1;
   } else {
    e = a;
    break;
   }
  }
 }
 if ((-64 - e | 0) >>> 0 <= b >>> 0) {
  c[(aX() | 0) >> 2] = 12;
  f = 0;
  return f | 0;
 }
 if (b >>> 0 < 11) {
  g = 16;
 } else {
  g = b + 11 & -8;
 }
 b = a7(e + 12 + g | 0) | 0;
 if ((b | 0) == 0) {
  f = 0;
  return f | 0;
 }
 a = b - 8 | 0;
 d = a;
 h = e - 1 | 0;
 do {
  if ((b & h | 0) == 0) {
   i = d;
  } else {
   j = b + h & -e;
   k = j - 8 | 0;
   l = a;
   if ((k - l | 0) >>> 0 > 15) {
    m = k;
   } else {
    m = j + (e - 8) | 0;
   }
   j = m;
   k = m - l | 0;
   l = b - 4 | 0;
   n = c[l >> 2] | 0;
   o = (n & -8) - k | 0;
   if ((n & 3 | 0) == 0) {
    c[m >> 2] = (c[a >> 2] | 0) + k;
    c[m + 4 >> 2] = o;
    i = j;
    break;
   } else {
    n = m + 4 | 0;
    c[n >> 2] = o | c[n >> 2] & 1 | 2;
    n = m + (o + 4) | 0;
    c[n >> 2] = c[n >> 2] | 1;
    c[l >> 2] = k | c[l >> 2] & 1 | 2;
    l = b + (k - 4) | 0;
    c[l >> 2] = c[l >> 2] | 1;
    bb(d, k);
    i = j;
    break;
   }
  }
 } while (0);
 d = i + 4 | 0;
 b = c[d >> 2] | 0;
 do {
  if ((b & 3 | 0) != 0) {
   m = b & -8;
   if (m >>> 0 <= (g + 16 | 0) >>> 0) {
    break;
   }
   a = m - g | 0;
   e = i;
   c[d >> 2] = g | b & 1 | 2;
   c[e + (g | 4) >> 2] = a | 3;
   h = e + (m | 4) | 0;
   c[h >> 2] = c[h >> 2] | 1;
   bb(e + g | 0, a);
  }
 } while (0);
 f = i + 8 | 0;
 return f | 0;
}
function bj() {
 var a = 0, b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 a = i;
 do {
  if ((c[200] | 0) == 0) {
   b = ar(30) | 0;
   if ((b - 1 & b | 0) == 0) {
    c[202] = b;
    c[201] = b;
    c[203] = -1;
    c[204] = -1;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
   }
  }
 } while (0);
 b = c[214] | 0;
 if ((b | 0) == 0) {
  d = 0;
  e = 0;
  f = 0;
 } else {
  g = c[317] | 0;
  h = c[316] | 0;
  j = h - 40 - (c[211] | 0) | 0;
  k = 1280;
  while (1) {
   l = c[k >> 2] | 0;
   m = l + 8 | 0;
   if ((m & 7 | 0) == 0) {
    n = 0;
   } else {
    n = -m & 7;
   }
   m = l + (c[k + 4 >> 2] | 0) | 0;
   p = j;
   q = l + n | 0;
   while (1) {
    if (q >>> 0 >= m >>> 0 | (q | 0) == (b | 0)) {
     r = p;
     break;
    }
    s = c[q + 4 >> 2] | 0;
    if ((s | 0) == 7) {
     r = p;
     break;
    }
    t = s & -8;
    u = p - ((s & 3 | 0) == 1 ? t : 0) | 0;
    s = q + t | 0;
    if (s >>> 0 < l >>> 0) {
     r = u;
     break;
    } else {
     p = u;
     q = s;
    }
   }
   q = c[k + 8 >> 2] | 0;
   if ((q | 0) == 0) {
    d = r;
    e = h;
    f = g;
    break;
   } else {
    j = r;
    k = q;
   }
  }
 }
 k = c[o >> 2] | 0;
 av(k | 0, 520, (r = i, i = i + 8 | 0, c[r >> 2] = f, r) | 0) | 0;
 i = r;
 av(k | 0, 488, (r = i, i = i + 8 | 0, c[r >> 2] = e, r) | 0) | 0;
 i = r;
 av(k | 0, 400, (r = i, i = i + 8 | 0, c[r >> 2] = d, r) | 0) | 0;
 i = r;
 i = a;
 return;
}
function bm(a, b, d, e, f, g, h, i, j, k) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 l = bH(i, 0, h, 0) | 0;
 m = H;
 n = 0;
 if (m >>> 0 > n >>> 0 | m >>> 0 == n >>> 0 & l >>> 0 > 1073741823 >>> 0) {
  c[(aX() | 0) >> 2] = 27;
  o = -1;
  return o | 0;
 }
 l = cf(f, g, -1, -1) | 0;
 if ((l & f | 0) != 0 | (H & g | 0) != 0 | (f | 0) == 0 & (g | 0) == 0) {
  c[(aX() | 0) >> 2] = 22;
  o = -1;
  return o | 0;
 }
 do {
  if (!((33554431 / (i >>> 0) | 0) >>> 0 < h >>> 0 | h >>> 0 > 16777215)) {
   l = 0;
   if (l >>> 0 < g >>> 0 | l >>> 0 == g >>> 0 & (33554431 / (h >>> 0) | 0) >>> 0 < f >>> 0) {
    break;
   }
   l = h << 7;
   n = a7(ad(l, i) | 0) | 0;
   if ((n | 0) == 0) {
    o = -1;
    return o | 0;
   }
   m = a7(h << 8) | 0;
   do {
    if ((m | 0) != 0) {
     p = bH(l, 0, f, g) | 0;
     q = a7(p) | 0;
     if ((q | 0) == 0) {
      ba(m);
      break;
     }
     p = ad(i << 7, h) | 0;
     bn(a, b, d, e, 1, 0, n, p);
     if ((i | 0) != 0) {
      r = h << 7;
      s = 0;
      do {
       bp(n + (ad(r, s) | 0) | 0, h, f, g, q, m);
       s = s + 1 | 0;
      } while (s >>> 0 < i >>> 0);
     }
     bn(a, b, n, p, 1, 0, j, k);
     ba(q);
     ba(m);
     ba(n);
     o = 0;
     return o | 0;
    }
   } while (0);
   ba(n);
   o = -1;
   return o | 0;
  }
 } while (0);
 c[(aX() | 0) >> 2] = 12;
 o = -1;
 return o | 0;
}
function bo(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 d = a + (b << 2) | 0;
 if ((b | 0) == 0) {
  return 0;
 } else {
  e = a;
 }
 L1186 : while (1) {
  a = c[e >> 2] | 0;
  L1188 : do {
   if ((a | 0) == 0) {
    f = e + 4 | 0;
   } else {
    b = a - 8 | 0;
    g = b;
    h = a - 4 | 0;
    i = c[h >> 2] & -8;
    c[e >> 2] = 0;
    if (b >>> 0 < (c[212] | 0) >>> 0) {
     j = 899;
     break L1186;
    }
    b = c[h >> 2] | 0;
    if ((b & 3 | 0) == 1) {
     j = 900;
     break L1186;
    }
    k = e + 4 | 0;
    l = b - 8 & -8;
    do {
     if ((k | 0) != (d | 0)) {
      if ((c[k >> 2] | 0) != (a + (l + 8) | 0)) {
       break;
      }
      m = (c[a + (l | 4) >> 2] & -8) + i | 0;
      c[h >> 2] = b & 1 | m | 2;
      n = a + (m - 4) | 0;
      c[n >> 2] = c[n >> 2] | 1;
      c[k >> 2] = a;
      f = k;
      break L1188;
     }
    } while (0);
    bb(g, i);
    f = k;
   }
  } while (0);
  if ((f | 0) == (d | 0)) {
   j = 902;
   break;
  } else {
   e = f;
  }
 }
 if ((j | 0) == 899) {
  au();
  return 0;
 } else if ((j | 0) == 900) {
  au();
  return 0;
 } else if ((j | 0) == 902) {
  return 0;
 }
 return 0;
}
function bn(b, c, d, e, f, g, h, j) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 k = i;
 i = i + 488 | 0;
 l = k | 0;
 m = k + 208 | 0;
 n = k + 424 | 0;
 o = k + 456 | 0;
 br(l, b, c);
 cq(l, d, e);
 if ((j | 0) == 0) {
  i = k;
  return;
 }
 e = k + 416 | 0;
 d = m;
 p = l;
 l = n | 0;
 q = o | 0;
 r = 0;
 s = g >>> 0 < r >>> 0 | g >>> 0 == r >>> 0 & f >>> 0 < 2 >>> 0;
 r = 0;
 t = 0;
 do {
  r = r + 1 | 0;
  cc(e, r);
  bD(d | 0, p | 0, 208) | 0;
  cq(m, e, 4);
  bX(l, m);
  bD(q | 0, l | 0, 32) | 0;
  if (!s) {
   u = 0;
   v = 2;
   do {
    br(m, b, c);
    cq(m, l, 32);
    bX(l, m);
    w = 0;
    do {
     x = o + w | 0;
     a[x] = a[x] ^ a[n + w | 0];
     w = w + 1 | 0;
    } while ((w | 0) < 32);
    v = cf(v, u, 1, 0) | 0;
    u = H;
   } while (!(u >>> 0 > g >>> 0 | u >>> 0 == g >>> 0 & v >>> 0 > f >>> 0));
  }
  v = j - t | 0;
  u = v >>> 0 > 32 ? 32 : v;
  v = h + t | 0;
  bD(v | 0, q | 0, u) | 0;
  t = r << 5;
 } while (t >>> 0 < j >>> 0);
 i = k;
 return;
}
function bp(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 g = b << 7;
 h = f + g | 0;
 bW(f, a, g);
 if ((c | 0) == 0 & (d | 0) == 0) {
  bW(a, f, g);
  return;
 }
 i = g;
 j = 0;
 k = 0;
 l = 0;
 do {
  m = bH(l, k, i, j) | 0;
  bW(e + m | 0, f, g);
  bt(f, h, b);
  l = cf(l, k, 1, 0) | 0;
  k = H;
 } while (k >>> 0 < d >>> 0 | k >>> 0 == d >>> 0 & l >>> 0 < c >>> 0);
 if ((c | 0) == 0 & (d | 0) == 0) {
  bW(a, f, g);
  return;
 }
 l = cf(c, d, -1, -1) | 0;
 k = H;
 j = g;
 i = 0;
 m = 0;
 n = 0;
 do {
  o = ck(f, b) | 0;
  p = bH(o & l, H & k, j, i) | 0;
  bT(f, e + p | 0, g);
  bt(f, h, b);
  n = cf(n, m, 1, 0) | 0;
  m = H;
 } while (m >>> 0 < d >>> 0 | m >>> 0 == d >>> 0 & n >>> 0 < c >>> 0);
 bW(a, f, g);
 return;
}
function bq(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 e = a + 32 | 0;
 f = a + 36 | 0;
 g = c[f >> 2] | 0;
 h = g >>> 3 & 63;
 i = aN(g | 0, d << 3 | 0) | 0;
 c[f >> 2] = i;
 if (H) {
  i = e | 0;
  c[i >> 2] = (c[i >> 2] | 0) + 1;
 }
 i = e | 0;
 c[i >> 2] = (c[i >> 2] | 0) + (d >>> 29);
 i = 64 - h | 0;
 e = a + 40 + h | 0;
 if (i >>> 0 > d >>> 0) {
  bD(e | 0, b | 0, d) | 0;
  return;
 }
 bD(e | 0, b | 0, i) | 0;
 e = a | 0;
 h = a + 40 | 0;
 a8(e, h);
 a = b + i | 0;
 b = d - i | 0;
 if (b >>> 0 > 63) {
  i = b;
  d = a;
  while (1) {
   a8(e, d);
   f = d + 64 | 0;
   g = i - 64 | 0;
   if (g >>> 0 > 63) {
    i = g;
    d = f;
   } else {
    j = g;
    k = f;
    break;
   }
  }
 } else {
  j = b;
  k = a;
 }
 bD(h | 0, k | 0, j) | 0;
 return;
}
function bs(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 do {
  if ((c[200] | 0) == 0) {
   d = ar(30) | 0;
   if ((d - 1 & d | 0) == 0) {
    c[202] = d;
    c[201] = d;
    c[203] = -1;
    c[204] = -1;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 if ((a | 0) == (-1 | 0)) {
  c[204] = b;
  e = 1;
  return e | 0;
 } else if ((a | 0) == (-2 | 0)) {
  if ((c[201] | 0) >>> 0 > b >>> 0) {
   e = 0;
   return e | 0;
  }
  if ((b - 1 & b | 0) != 0) {
   e = 0;
   return e | 0;
  }
  c[202] = b;
  e = 1;
  return e | 0;
 } else if ((a | 0) == (-3 | 0)) {
  c[203] = b;
  e = 1;
  return e | 0;
 } else {
  e = 0;
  return e | 0;
 }
 return 0;
}
function br(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 e = i;
 i = i + 96 | 0;
 f = e | 0;
 if (d >>> 0 > 64) {
  g = b | 0;
  bN(g);
  bq(g, c, d);
  h = e + 64 | 0;
  ch(h, g);
  j = h;
  k = 32;
 } else {
  j = c;
  k = d;
 }
 d = b | 0;
 bN(d);
 c = f | 0;
 bB(c | 0, 54, 64);
 if ((k | 0) != 0) {
  h = 0;
  do {
   g = f + h | 0;
   a[g] = a[g] ^ a[j + h | 0];
   h = h + 1 | 0;
  } while (h >>> 0 < k >>> 0);
 }
 bq(d, c, 64);
 d = b + 104 | 0;
 bN(d);
 bB(c | 0, 92, 64);
 if ((k | 0) == 0) {
  bq(d, c, 64);
  i = e;
  return;
 } else {
  l = 0;
 }
 do {
  b = f + l | 0;
  a[b] = a[b] ^ a[j + l | 0];
  l = l + 1 | 0;
 } while (l >>> 0 < k >>> 0);
 bq(d, c, 64);
 i = e;
 return;
}
function bt(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 d = i;
 i = i + 64 | 0;
 e = d | 0;
 f = c << 1;
 bW(e, a + ((c << 7) - 64) | 0, 64);
 if ((f | 0) != 0) {
  g = 0;
  do {
   h = g << 6;
   bT(e, a + h | 0, 64);
   be(e);
   bW(b + h | 0, e, 64);
   g = g + 1 | 0;
  } while (g >>> 0 < f >>> 0);
 }
 if ((c | 0) == 0) {
  i = d;
  return;
 } else {
  j = 0;
 }
 do {
  bW(a + (j << 6) | 0, b + (j << 7) | 0, 64);
  j = j + 1 | 0;
 } while (j >>> 0 < c >>> 0);
 if ((c | 0) == 0) {
  i = d;
  return;
 } else {
  k = 0;
 }
 do {
  bW(a + (k + c << 6) | 0, b + (k << 7 | 64) | 0, 64);
  k = k + 1 | 0;
 } while (k >>> 0 < c >>> 0);
 i = d;
 return;
}
function bv(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 if ((a | 0) == 0) {
  d = a7(b) | 0;
  return d | 0;
 }
 if (b >>> 0 > 4294967231) {
  c[(aX() | 0) >> 2] = 12;
  d = 0;
  return d | 0;
 }
 if (b >>> 0 < 11) {
  e = 16;
 } else {
  e = b + 11 & -8;
 }
 f = bd(a - 8 | 0, e) | 0;
 if ((f | 0) != 0) {
  d = f + 8 | 0;
  return d | 0;
 }
 f = a7(b) | 0;
 if ((f | 0) == 0) {
  d = 0;
  return d | 0;
 }
 e = c[a - 4 >> 2] | 0;
 g = (e & -8) - ((e & 3 | 0) == 0 ? 8 : 4) | 0;
 e = g >>> 0 < b >>> 0 ? g : b;
 bD(f | 0, a | 0, e) | 0;
 ba(a);
 d = f;
 return d | 0;
}
function bu(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 f = i;
 i = i + 8 | 0;
 g = f | 0;
 h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 j = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 k = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 l = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 m = cd(h ^ a, j ^ b, h, j) | 0;
 b = H;
 a = cd(k ^ d, l ^ e, k, l) | 0;
 bc(m, b, a, H, g) | 0;
 a = cd(c[g >> 2] ^ h, c[g + 4 >> 2] ^ j, h, j) | 0;
 j = H;
 i = f;
 return (H = j, a) | 0;
}
function bx(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 do {
  if ((b | 0) == 8) {
   e = a7(d) | 0;
  } else {
   f = b >>> 2;
   if ((b & 3 | 0) != 0 | (f | 0) == 0) {
    g = 22;
    return g | 0;
   }
   if ((f + 1073741823 & f | 0) != 0) {
    g = 22;
    return g | 0;
   }
   if ((-64 - b | 0) >>> 0 < d >>> 0) {
    g = 12;
    return g | 0;
   } else {
    e = bl(b >>> 0 < 16 ? 16 : b, d) | 0;
    break;
   }
  }
 } while (0);
 if ((e | 0) == 0) {
  g = 12;
  return g | 0;
 }
 c[a >> 2] = e;
 g = 0;
 return g | 0;
}
function bA(a) {
 a = a | 0;
 var b = 0, c = 0, e = 0, f = 0;
 b = d[a + 1 | 0] | 0;
 c = d[a + 2 | 0] | 0;
 e = d[a + 3 | 0] | 0;
 f = cf(b << 8 | 0 >>> 24 | (d[a] | 0) | (c << 16 | 0 >>> 16) | (e << 24 | 0 >>> 8) | (0 << 8 | 0 >>> 24), 0 << 8 | b >>> 24 | (0 << 16 | c >>> 16) | (0 << 24 | e >>> 8) | (d[a + 4 | 0] | 0) | ((d[a + 5 | 0] | 0) << 8 | 0 >>> 24), 0 << 16 | 0 >>> 16, (d[a + 6 | 0] | 0) << 16 | 0 >>> 16) | 0;
 e = cf(f, H, 0 << 24 | 0 >>> 8, (d[a + 7 | 0] | 0) << 24 | 0 >>> 8) | 0;
 return (H = H, e) | 0;
}
function bw(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 e = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 g = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 i = cd(e ^ a, f ^ b, e, f) | 0;
 b = H;
 a = g ^ e;
 e = h ^ f;
 f = cd((bc(i, b, cd(g ^ c, h ^ d, g, h) | 0, H, 0) | 0) ^ a, H ^ e, a, e) | 0;
 return (H = H, f) | 0;
}
function bD(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if ((e | 0) == 0) return f | 0;
   a[b] = a[d] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b] = a[d] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}
function by(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 d = i;
 e = c[(aX() | 0) >> 2] | 0;
 f = c[o >> 2] | 0;
 g = c[r >> 2] | 0;
 av(f | 0, 432 | 0, (h = i, i = i + 8 | 0, c[h >> 2] = g, h) | 0) | 0;
 i = h;
 if ((a | 0) != 0) {
  aQ(f | 0, a | 0, b | 0) | 0;
  aE(472 | 0, 2, 1, f | 0) | 0;
 }
 b = at(e | 0) | 0;
 av(f | 0, 384 | 0, (h = i, i = i + 8 | 0, c[h >> 2] = b, h) | 0) | 0;
 i = h;
 i = d;
 return;
}
function bB(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  e = b & 3;
  g = d | d << 8 | d << 16 | d << 24;
  h = f & ~3;
  if (e) {
   e = b + 4 - e | 0;
   while ((b | 0) < (e | 0)) {
    a[b] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (h | 0)) {
   c[b >> 2] = g;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b] = d;
  b = b + 1 | 0;
 }
}
function bz(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = c[(aX() | 0) >> 2] | 0;
 f = c[o >> 2] | 0;
 g = c[r >> 2] | 0;
 av(f | 0, 336 | 0, (h = i, i = i + 8 | 0, c[h >> 2] = g, h) | 0) | 0;
 i = h;
 if ((b | 0) != 0) {
  aQ(f | 0, b | 0, d | 0) | 0;
  aE(480 | 0, 2, 1, f | 0) | 0;
 }
 d = at(e | 0) | 0;
 av(f | 0, 392 | 0, (h = i, i = i + 8 | 0, c[h >> 2] = d, h) | 0) | 0;
 i = h;
 aH(a | 0);
}
function bC(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 do {
  if ((a | 0) == 0) {
   d = 0;
  } else {
   e = ad(b, a) | 0;
   if ((b | a) >>> 0 <= 65535) {
    d = e;
    break;
   }
   d = ((e >>> 0) / (a >>> 0) | 0 | 0) == (b | 0) ? e : -1;
  }
 } while (0);
 b = a7(d) | 0;
 if ((b | 0) == 0) {
  return b | 0;
 }
 if ((c[b - 4 >> 2] & 3 | 0) == 0) {
  return b | 0;
 }
 bB(b | 0, 0, d | 0);
 return b | 0;
}
function bJ(a) {
 a = a | 0;
 var b = 0;
 do {
  if ((c[200] | 0) == 0) {
   b = ar(30) | 0;
   if ((b - 1 & b | 0) == 0) {
    c[202] = b;
    c[201] = b;
    c[203] = -1;
    c[204] = -1;
    c[205] = 0;
    c[319] = 0;
    c[200] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 b = c[201] | 0;
 return b0(b, a - 1 + b & -b) | 0;
}
function bI(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 if ((c[200] | 0) != 0) {
  b = c[201] | 0;
  d = b0(b, a) | 0;
  return d | 0;
 }
 e = ar(30) | 0;
 if ((e - 1 & e | 0) != 0) {
  au();
  return 0;
 }
 c[202] = e;
 c[201] = e;
 c[203] = -1;
 c[204] = -1;
 c[205] = 0;
 c[319] = 0;
 c[200] = (a_(0) | 0) & -16 ^ 1431655768;
 b = c[201] | 0;
 d = b0(b, a) | 0;
 return d | 0;
}
function bG(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = (a | 0) == 0 ? 1 : a;
 while (1) {
  d = a7(b) | 0;
  if ((d | 0) != 0) {
   e = 1157;
   break;
  }
  a = (F = c[328] | 0, c[328] = F + 0, F);
  if ((a | 0) == 0) {
   break;
  }
  a5[a & 1]();
 }
 if ((e | 0) == 1157) {
  return d | 0;
 }
 d = aJ(4) | 0;
 c[d >> 2] = 560;
 as(d | 0, 688, 6);
 return 0;
}
function bE(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 d = i;
 e = c[o >> 2] | 0;
 f = c[r >> 2] | 0;
 av(e | 0, 376 | 0, (g = i, i = i + 8 | 0, c[g >> 2] = f, g) | 0) | 0;
 i = g;
 if ((a | 0) == 0) {
  h = aC(10, e | 0) | 0;
  i = d;
  return;
 }
 aQ(e | 0, a | 0, b | 0) | 0;
 h = aC(10, e | 0) | 0;
 i = d;
 return;
}
function bF(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = c[o >> 2] | 0;
 f = c[r >> 2] | 0;
 av(e | 0, 440 | 0, (g = i, i = i + 8 | 0, c[g >> 2] = f, g) | 0) | 0;
 i = g;
 if ((b | 0) == 0) {
  h = aC(10, e | 0) | 0;
  aH(a | 0);
 }
 aQ(e | 0, b | 0, d | 0) | 0;
 h = aC(10, e | 0) | 0;
 aH(a | 0);
}
function bL(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 c = a & 65535;
 d = b & 65535;
 e = ad(d, c) | 0;
 f = a >>> 16;
 a = (e >>> 16) + (ad(d, f) | 0) | 0;
 d = b >>> 16;
 b = ad(d, c) | 0;
 return (H = (a >>> 16) + (ad(d, f) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | e & 65535 | 0) | 0;
}
function bN(a) {
 a = a | 0;
 c[a + 36 >> 2] = 0;
 c[a + 32 >> 2] = 0;
 c[a >> 2] = 1779033703;
 c[a + 4 >> 2] = -1150833019;
 c[a + 8 >> 2] = 1013904242;
 c[a + 12 >> 2] = -1521486534;
 c[a + 16 >> 2] = 1359893119;
 c[a + 20 >> 2] = -1694144372;
 c[a + 24 >> 2] = 528734635;
 c[a + 28 >> 2] = 1541459225;
 return;
}
function bR(b) {
 b = b | 0;
 var c = 0;
 c = a[n + (b >>> 24) | 0] | 0;
 if ((c | 0) < 8) return c | 0;
 c = a[n + (b >> 16 & 255) | 0] | 0;
 if ((c | 0) < 8) return c + 8 | 0;
 c = a[n + (b >> 8 & 255) | 0] | 0;
 if ((c | 0) < 8) return c + 16 | 0;
 return (a[n + (b & 255) | 0] | 0) + 24 | 0;
}
function bQ(b) {
 b = b | 0;
 var c = 0;
 c = a[m + (b & 255) | 0] | 0;
 if ((c | 0) < 8) return c | 0;
 c = a[m + (b >> 8 & 255) | 0] | 0;
 if ((c | 0) < 8) return c + 8 | 0;
 c = a[m + (b >> 16 & 255) | 0] | 0;
 if ((c | 0) < 8) return c + 16 | 0;
 return (a[m + (b >>> 24) | 0] | 0) + 24 | 0;
}
function bM(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 if ((a | 0) == 0) {
  return 0;
 }
 if (b >>> 0 > 4294967231) {
  c[(aX() | 0) >> 2] = 12;
  return 0;
 }
 if (b >>> 0 < 11) {
  d = 16;
 } else {
  d = b + 11 & -8;
 }
 b = a - 8 | 0;
 return ((bd(b, d) | 0) == (b | 0) ? a : 0) | 0;
}
function bV(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 do {
  if ((a | 0) == 0) {
   b = 0;
  } else {
   d = c[a - 4 >> 2] | 0;
   e = d & 3;
   if ((e | 0) == 1) {
    b = 0;
    break;
   }
   b = (d & -8) - ((e | 0) == 0 ? 8 : 4) | 0;
  }
 } while (0);
 return b | 0;
}
function bP(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = d >>> 2;
 if ((e | 0) == 0) {
  return;
 } else {
  f = 0;
 }
 do {
  cc(a + (f << 2) | 0, c[b + (f << 2) >> 2] | 0);
  f = f + 1 | 0;
 } while (f >>> 0 < e >>> 0);
 return;
}
function bK(b) {
 b = b | 0;
 a[k] = a[b];
 a[k + 1 | 0] = a[b + 1 | 0];
 a[k + 2 | 0] = a[b + 2 | 0];
 a[k + 3 | 0] = a[b + 3 | 0];
 a[k + 4 | 0] = a[b + 4 | 0];
 a[k + 5 | 0] = a[b + 5 | 0];
 a[k + 6 | 0] = a[b + 6 | 0];
 a[k + 7 | 0] = a[b + 7 | 0];
}
function bT(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 if ((d | 0) == 0) {
  return;
 } else {
  e = 0;
 }
 do {
  f = b + e | 0;
  a[f] = a[f] ^ a[c + e | 0];
  e = e + 1 | 0;
 } while (e >>> 0 < d >>> 0);
 return;
}
function bU(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = i;
 i = i + 8 | 0;
 d = b | 0;
 bP(d, a + 32 | 0, 8);
 e = (c[a + 36 >> 2] | 0) >>> 3 & 63;
 bq(a, 720, (e >>> 0 < 56 ? 56 : 120) - e | 0);
 bq(a, d, 8);
 i = b;
 return;
}
function bW(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if ((d | 0) == 0) {
  return;
 } else {
  e = 0;
 }
 do {
  a[b + e | 0] = a[c + e | 0] | 0;
  e = e + 1 | 0;
 } while (e >>> 0 < d >>> 0);
 return;
}
function bO(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 8 | 0;
 g = f | 0;
 bc(a, b, d, e, g) | 0;
 i = f;
 return (H = c[g + 4 >> 2] | 0, c[g >> 2] | 0) | 0;
}
function bH(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 a = c;
 c = bL(e, a) | 0;
 f = H;
 return (H = (ad(b, a) | 0) + (ad(d, e) | 0) + f | f & 0, c | 0 | 0) | 0;
}
function bZ(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 e = i;
 i = i + 16 | 0;
 f = e | 0;
 g = f;
 c[g >> 2] = d;
 c[g + 4 >> 2] = 0;
 bz(a, b, f | 0);
 i = e;
 return;
}
function bY(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 e = i;
 i = i + 16 | 0;
 f = e | 0;
 g = f;
 c[g >> 2] = d;
 c[g + 4 >> 2] = 0;
 bF(a, b, f | 0);
 i = e;
 return;
}
function b_(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  H = b >> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 H = (b | 0) < 0 ? -1 : 0;
 return b >> c - 32 | 0;
}
function cd(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 e = b - d >>> 0;
 e = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (H = e, a - c >>> 0 | 0) | 0;
}
function b5(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  H = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 H = a << c - 32;
 return 0;
}
function bX(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0;
 c = i;
 i = i + 32 | 0;
 d = c | 0;
 ch(d, b | 0);
 e = b + 104 | 0;
 bq(e, d, 32);
 ch(a, e);
 i = c;
 return;
}
function b3(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = i;
 i = i + 16 | 0;
 e = d | 0;
 f = e;
 c[f >> 2] = b;
 c[f + 4 >> 2] = 0;
 by(a, e | 0);
 i = d;
 return;
}
function b1(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = i;
 i = i + 16 | 0;
 e = d | 0;
 f = e;
 c[f >> 2] = b;
 c[f + 4 >> 2] = 0;
 bE(a, e | 0);
 i = d;
 return;
}
function b7(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  H = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 H = 0;
 return b >>> c - 32 | 0;
}
function bS(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 8 | 0;
 f = e | 0;
 c[f >> 2] = b;
 b = bh(a, f, 3, d) | 0;
 i = e;
 return b | 0;
}
function b4(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = 0;
 do {
  c[a + (d << 2) >> 2] = cj(b + (d << 2) | 0) | 0;
  d = d + 1 | 0;
 } while (d >>> 0 < 16);
 return;
}
function b0(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0;
 if (a >>> 0 < 9) {
  c = a7(b) | 0;
  return c | 0;
 } else {
  c = bl(a, b) | 0;
  return c | 0;
 }
 return 0;
}
function cf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 e = a + c >>> 0;
 return (H = b + d + (e >>> 0 < a >>> 0 | 0) >>> 0, e | 0) | 0;
}
function cc(b, c) {
 b = b | 0;
 c = c | 0;
 a[b + 3 | 0] = c & 255;
 a[b + 2 | 0] = c >>> 8 & 255;
 a[b + 1 | 0] = c >>> 16 & 255;
 a[b] = c >>> 24 & 255;
 return;
}
function cb(b, c) {
 b = b | 0;
 c = c | 0;
 a[b] = c & 255;
 a[b + 1 | 0] = c >>> 8 & 255;
 a[b + 2 | 0] = c >>> 16 & 255;
 a[b + 3 | 0] = c >>> 24 & 255;
 return;
}
function b6(a) {
 a = a | 0;
 var b = 0, d = 0;
 if ((a | 0) == -1) {
  b = 0;
 } else {
  d = c[202] | 0;
  b = a - 1 + d & -d;
 }
 c[318] = b;
 return b | 0;
}
function b9(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 e = bc(a, b, c, d, 0) | 0;
 return (H = H, e) | 0;
}
function cj(a) {
 a = a | 0;
 return (d[a + 2 | 0] | 0) << 8 | (d[a + 3 | 0] | 0) | (d[a + 1 | 0] | 0) << 16 | (d[a] | 0) << 24 | 0;
}
function ci(a) {
 a = a | 0;
 return (d[a + 1 | 0] | 0) << 8 | (d[a] | 0) | (d[a + 2 | 0] | 0) << 16 | (d[a + 3 | 0] | 0) << 24 | 0;
}
function b8(b) {
 b = b | 0;
 a[k] = a[b];
 a[k + 1 | 0] = a[b + 1 | 0];
 a[k + 2 | 0] = a[b + 2 | 0];
 a[k + 3 | 0] = a[b + 3 | 0];
}
function b2(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return a9(a, b, c, d, e, 1) | 0;
}
function b$(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return a9(a, b, c, d, e, 5) | 0;
}
function ck(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0;
 c = bA(a + ((b << 7) - 64) | 0) | 0;
 return (H = H, c) | 0;
}
function cs(b) {
 b = b | 0;
 var c = 0;
 c = b;
 while (a[c] | 0) {
  c = c + 1 | 0;
 }
 return c - b | 0;
}
function cm(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 a4[a & 15](b | 0, c | 0, d | 0);
}
function cl(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 7 >> 3 << 3;
 return b | 0;
}
function ch(a, b) {
 a = a | 0;
 b = b | 0;
 bU(b);
 bP(a, b | 0, 32);
 bB(b | 0, 0, 104);
 return;
}
function cr(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return a6[a & 1](b | 0, c | 0) | 0;
}
function cg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return a9(a, b, c, 0, 0, 0) | 0;
}
function ce(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return bh(a, b, 0, c) | 0;
}
function cv(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 a2[a & 15](b | 0, c | 0);
}
function cq(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 bq(a | 0, b, c);
 return;
}
function co(a, b) {
 a = a | 0;
 b = b | 0;
 if ((u | 0) == 0) {
  u = a;
  v = b;
 }
}
function cp() {
 var a = 0;
 a = aJ(4) | 0;
 c[a >> 2] = 560;
 as(a | 0, 688, 6);
}
function cA() {
 var a = 0;
 a = c[318] | 0;
 return ((a | 0) == 0 ? -1 : a) | 0;
}
function cu(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return +(+bf(a, b));
}
function ct(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return +(+bf(a, b));
}
function cx(a, b) {
 a = a | 0;
 b = b | 0;
 return a3[a & 7](b | 0) | 0;
}
function cn(a) {
 a = a | 0;
 return (F = c[328] | 0, c[328] = a, F) | 0;
}
function cJ(a) {
 a = a | 0;
 if ((a | 0) != 0) {
  ba(a);
 }
 return;
}
function ca() {
 c[170] = q + 8;
 c[172] = p + 8;
 c[176] = p + 8;
}
function cO(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ae(3);
}
function cz(a, b) {
 a = a | 0;
 b = b | 0;
 return +(+bf(a, b));
}
function cy(a, b) {
 a = a | 0;
 b = b | 0;
 return +(+bf(a, b));
}
function cw() {
 return (F = c[328] | 0, c[328] = F + 0, F) | 0;
}
function cB(a, b) {
 a = a | 0;
 b = b | 0;
 a1[a & 15](b | 0);
}
function cP(a, b) {
 a = a | 0;
 b = b | 0;
 ae(5);
 return 0;
}
function cE(a, b) {
 a = a | 0;
 b = b | 0;
 return cQ(a) | 0;
}
function cD(a, b) {
 a = a | 0;
 b = b | 0;
 return bG(a) | 0;
}
function cG(a, b) {
 a = a | 0;
 b = b | 0;
 c0(a);
 return;
}
function cF(a, b) {
 a = a | 0;
 b = b | 0;
 cJ(a);
 return;
}
function cI(a) {
 a = a | 0;
 c[a >> 2] = 560;
 return;
}
function cC(a) {
 a = a | 0;
 c[a >> 2] = 592;
 return;
}
function c3(a, b) {
 a = a | 0;
 b = b | 0;
 ae(1);
}
function cR(a) {
 a = a | 0;
 return +(+bf(a, 0));
}
function cQ(a) {
 a = a | 0;
 return bG(a) | 0;
}
function c6(a) {
 a = a | 0;
 ae(2);
 return 0;
}
function cN(a) {
 a = a | 0;
 return 360 | 0;
}
function cL(a) {
 a = a | 0;
 cJ(a);
 return;
}
function cK(a) {
 a = a | 0;
 return 448 | 0;
}
function cH(a) {
 a = a | 0;
 cJ(a);
 return;
}
function c0(a) {
 a = a | 0;
 cJ(a);
 return;
}
function cM(a) {
 a = a | 0;
 a5[a & 1]();
}
function c1(a) {
 a = a | 0;
 return;
}
function c_(a) {
 a = a | 0;
 I = a;
}
function cZ(a) {
 a = a | 0;
 J = a;
}
function cY(a) {
 a = a | 0;
 K = a;
}
function cX(a) {
 a = a | 0;
 L = a;
}
function cW(a) {
 a = a | 0;
 M = a;
}
function cV(a) {
 a = a | 0;
 N = a;
}
function cU(a) {
 a = a | 0;
 O = a;
}
function cT(a) {
 a = a | 0;
 P = a;
}
function cS(a) {
 a = a | 0;
 Q = a;
}
function c8(a) {
 a = a | 0;
 ae(0);
}
function c2(a) {
 a = a | 0;
 i = a;
}
function c$(a) {
 a = a | 0;
 H = a;
}
function c5() {
 return c[316] | 0;
}
function c4() {
 return c[317] | 0;
}
function c7() {
 return i | 0;
}
function c9() {
 ae(4);
}
// EMSCRIPTEN_END_FUNCS
 var a1 = [ c8, c8, cC, c8, cH, c8, c1, c8, cI, c8, cL, c8, c8, c8, c8, c8 ];
 var a2 = [ c3, c3, b3, c3, by, c3, b1, c3, bE, c3, c3, c3, c3, c3, c3, c3 ];
 var a3 = [ c6, c6, cN, c6, cK, c6, c6, c6 ];
 var a4 = [ cO, cO, bF, cO, bz, cO, bZ, cO, bY, cO, cO, cO, cO, cO, cO, cO ];
 var a5 = [ c9, c9 ];
 var a6 = [ cP, cP ];
 return {
  _crypto_scrypt: bm,
  _strlen: cs,
  _free: ba,
  _realloc: bv,
  _memset: bB,
  _malloc: a7,
  _memcpy: bD,
  _calloc: bC,
  runPostSets: ca,
  stackAlloc: cl,
  stackSave: c7,
  stackRestore: c2,
  setThrew: co,
  setTempRet0: c$,
  setTempRet1: c_,
  setTempRet2: cZ,
  setTempRet3: cY,
  setTempRet4: cX,
  setTempRet5: cW,
  setTempRet6: cV,
  setTempRet7: cU,
  setTempRet8: cT,
  setTempRet9: cS,
  dynCall_vi: cB,
  dynCall_vii: cv,
  dynCall_ii: cx,
  dynCall_viii: cm,
  dynCall_v: cM,
  dynCall_iii: cr
 };
// EMSCRIPTEN_END_ASM
})({Math:Math, Int8Array:Int8Array, Int16Array:Int16Array, Int32Array:Int32Array, Uint8Array:Uint8Array, Uint16Array:Uint16Array, Uint32Array:Uint32Array, Float32Array:Float32Array, Float64Array:Float64Array}, {abort:ua, assert:z, asmPrintInt:function(a, b) {
  s.print("int " + a + "," + b)
}, asmPrintFloat:function(a, b) {
  s.print("float " + a + "," + b)
}, min:Uc, invoke_vi:function(a, b) {
  try {
    s.dynCall_vi(a, b)
  }catch(c) {
    "number" !== typeof c && "longjmp" !== c && g(c), V.setThrew(1, 0)
  }
}, invoke_vii:function(a, b, c) {
  try {
    s.dynCall_vii(a, b, c)
  }catch(d) {
    "number" !== typeof d && "longjmp" !== d && g(d), V.setThrew(1, 0)
  }
}, invoke_ii:function(a, b) {
  try {
    return s.dynCall_ii(a, b)
  }catch(c) {
    "number" !== typeof c && "longjmp" !== c && g(c), V.setThrew(1, 0)
  }
}, invoke_viii:function(a, b, c, d) {
  try {
    s.dynCall_viii(a, b, c, d)
  }catch(e) {
    "number" !== typeof e && "longjmp" !== e && g(e), V.setThrew(1, 0)
  }
}, invoke_v:function(a) {
  try {
    s.dynCall_v(a)
  }catch(b) {
    "number" !== typeof b && "longjmp" !== b && g(b), V.setThrew(1, 0)
  }
}, invoke_iii:function(a, b, c) {
  try {
    return s.dynCall_iii(a, b, c)
  }catch(d) {
    "number" !== typeof d && "longjmp" !== d && g(d), V.setThrew(1, 0)
  }
}, _strncmp:function(a, b, c) {
  for(var d = 0;d < c;) {
    var e = G[a + d | 0], f = G[b + d | 0];
    if(e == f && 0 == e) {
      break
    }
    if(0 == e) {
      return-1
    }
    if(0 == f) {
      return 1
    }
    if(e == f) {
      d++
    }else {
      return e > f ? 1 : -1
    }
  }
  return 0
}, _llvm_va_end:q(), _sysconf:function(a) {
  switch(a) {
    case 30:
      return 4096;
    case 132:
    ;
    case 133:
    ;
    case 12:
    ;
    case 137:
    ;
    case 138:
    ;
    case 15:
    ;
    case 235:
    ;
    case 16:
    ;
    case 17:
    ;
    case 18:
    ;
    case 19:
    ;
    case 20:
    ;
    case 149:
    ;
    case 13:
    ;
    case 10:
    ;
    case 236:
    ;
    case 153:
    ;
    case 9:
    ;
    case 21:
    ;
    case 22:
    ;
    case 159:
    ;
    case 154:
    ;
    case 14:
    ;
    case 77:
    ;
    case 78:
    ;
    case 139:
    ;
    case 80:
    ;
    case 81:
    ;
    case 79:
    ;
    case 82:
    ;
    case 68:
    ;
    case 67:
    ;
    case 164:
    ;
    case 11:
    ;
    case 29:
    ;
    case 47:
    ;
    case 48:
    ;
    case 95:
    ;
    case 52:
    ;
    case 51:
    ;
    case 46:
      return 200809;
    case 27:
    ;
    case 246:
    ;
    case 127:
    ;
    case 128:
    ;
    case 23:
    ;
    case 24:
    ;
    case 160:
    ;
    case 161:
    ;
    case 181:
    ;
    case 182:
    ;
    case 242:
    ;
    case 183:
    ;
    case 184:
    ;
    case 243:
    ;
    case 244:
    ;
    case 245:
    ;
    case 165:
    ;
    case 178:
    ;
    case 179:
    ;
    case 49:
    ;
    case 50:
    ;
    case 168:
    ;
    case 169:
    ;
    case 175:
    ;
    case 170:
    ;
    case 171:
    ;
    case 172:
    ;
    case 97:
    ;
    case 76:
    ;
    case 32:
    ;
    case 173:
    ;
    case 35:
      return-1;
    case 176:
    ;
    case 177:
    ;
    case 7:
    ;
    case 155:
    ;
    case 8:
    ;
    case 157:
    ;
    case 125:
    ;
    case 126:
    ;
    case 92:
    ;
    case 93:
    ;
    case 129:
    ;
    case 130:
    ;
    case 131:
    ;
    case 94:
    ;
    case 91:
      return 1;
    case 74:
    ;
    case 60:
    ;
    case 69:
    ;
    case 70:
    ;
    case 4:
      return 1024;
    case 31:
    ;
    case 42:
    ;
    case 72:
      return 32;
    case 87:
    ;
    case 26:
    ;
    case 33:
      return 2147483647;
    case 34:
    ;
    case 1:
      return 47839;
    case 38:
    ;
    case 36:
      return 99;
    case 43:
    ;
    case 37:
      return 2048;
    case 0:
      return 2097152;
    case 3:
      return 65536;
    case 28:
      return 32768;
    case 44:
      return 32767;
    case 75:
      return 16384;
    case 39:
      return 1E3;
    case 89:
      return 700;
    case 71:
      return 256;
    case 40:
      return 255;
    case 2:
      return 100;
    case 180:
      return 64;
    case 25:
      return 20;
    case 5:
      return 16;
    case 6:
      return 6;
    case 73:
      return 4;
    case 84:
      return 1
  }
  M(N.p);
  return-1
}, ___cxa_throw:rc, _strerror:zc, _abort:function() {
  s.abort()
}, _fprintf:mc, _llvm_eh_exception:U, ___cxa_free_exception:sc, _fflush:q(), ___buildEnvironment:wc, __reallyNegative:jc, _strchr:function(a, b) {
  a--;
  do {
    a++;
    var c = B[a];
    if(c == b) {
      return a
    }
  }while(c);
  return 0
}, _fputc:Bc, ___setErrNo:M, _fwrite:hc, _send:function(a, b, c) {
  return!T.jc(a) ? (M(N.ka), -1) : gc(a, b, c)
}, _write:gc, _exit:function(a) {
  Ac(a)
}, ___cxa_find_matching_catch:function(a, b) {
  -1 == a && (a = D[U.q >> 2]);
  -1 == b && (b = D[U.q + 4 >> 2]);
  var c = Array.prototype.slice.call(arguments, 2);
  0 != b && !pc(b) && 0 == D[D[b >> 2] - 8 >> 2] && (a = D[a >> 2]);
  for(var d = 0;d < c.length;d++) {
    if(qc(c[d], b, a)) {
      return(V.setTempRet0(c[d]), a) | 0
    }
  }
  return(V.setTempRet0(b), a) | 0
}, ___cxa_allocate_exception:function(a) {
  return Ma(a)
}, _isspace:function(a) {
  return 32 == a || 9 <= a && 13 >= a
}, __formatString:kc, ___resumeException:function(a) {
  0 == D[U.q >> 2] && (D[U.q >> 2] = a);
  g(a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.")
}, _llvm_uadd_with_overflow_i32:function(a, b) {
  a >>>= 0;
  b >>>= 0;
  return(V.setTempRet0(4294967295 < a + b), a + b >>> 0) | 0
}, ___cxa_does_inherit:qc, _getenv:xc, _vfprintf:function(a, b, c) {
  return mc(a, b, D[c >> 2])
}, ___cxa_begin_catch:function(a) {
  oc.Ya--;
  return a
}, __ZSt18uncaught_exceptionv:oc, _pwrite:function(a, b, c, d) {
  a = R[a];
  if(!a) {
    return M(N.ka), -1
  }
  try {
    return ac(a, B, b, c, d)
  }catch(e) {
    return Ib(e), -1
  }
}, ___cxa_call_unexpected:function(a) {
  s.V("Unexpected exception thrown, this is not properly supported - aborting");
  ya = k;
  g(a)
}, _sbrk:nc, _strerror_r:yc, ___errno_location:function() {
  return mb
}, ___gxx_personality_v0:q(), ___cxa_is_number_type:pc, _time:function(a) {
  var b = Math.floor(Date.now() / 1E3);
  a && (D[a >> 2] = b);
  return b
}, __exit:Ac, ___cxa_end_catch:uc, STACKTOP:v, STACK_MAX:Ra, tempDoublePtr:lb, ABORT:ya, cttz_i8:Tc, ctlz_i8:Sc, NaN:NaN, Infinity:Infinity, _stderr:kb, __ZTVN10__cxxabiv120__si_class_type_infoE:j, __ZTVN10__cxxabiv117__class_type_infoE:j, ___progname:j}, I);
s._crypto_scrypt = V._crypto_scrypt;
var ic = s._strlen = V._strlen, tc = s._free = V._free;
s._realloc = V._realloc;
var ob = s._memset = V._memset, Ma = s._malloc = V._malloc, nb = s._memcpy = V._memcpy;
s._calloc = V._calloc;
var jb = s.runPostSets = V.runPostSets;
s.dynCall_vi = V.dynCall_vi;
s.dynCall_vii = V.dynCall_vii;
s.dynCall_ii = V.dynCall_ii;
s.dynCall_viii = V.dynCall_viii;
s.dynCall_v = V.dynCall_v;
s.dynCall_iii = V.dynCall_iii;
var pa = function(a) {
  return V.stackAlloc(a)
}, ia = function() {
  return V.stackSave()
}, ja = function(a) {
  V.stackRestore(a)
}, lc;
function X(a, b) {
  a != n && ("number" == typeof a ? this.v(a) : b == n && "string" != typeof a ? this.n(a, 256) : this.n(a, b))
}
function Vc() {
  return new X(n)
}
function Wc(a, b) {
  var c = Xc[a.charCodeAt(b)];
  return c == n ? -1 : c
}
function Yc(a) {
  var b = Vc();
  b.M(a);
  return b
}
function Y(a, b) {
  this.j = a | 0;
  this.l = b | 0
}
Y.fb = {};
Y.M = function(a) {
  if(-128 <= a && 128 > a) {
    var b = Y.fb[a];
    if(b) {
      return b
    }
  }
  b = new Y(a | 0, 0 > a ? -1 : 0);
  -128 <= a && 128 > a && (Y.fb[a] = b);
  return b
};
Y.v = function(a) {
  return isNaN(a) || !isFinite(a) ? Y.ZERO : a <= -Y.hb ? Y.MIN_VALUE : a + 1 >= Y.hb ? Y.MAX_VALUE : 0 > a ? Y.v(-a).k() : new Y(a % Y.J | 0, a / Y.J | 0)
};
Y.I = function(a, b) {
  return new Y(a, b)
};
Y.n = function(a, b) {
  0 == a.length && g(Error("number format error: empty string"));
  var c = b || 10;
  (2 > c || 36 < c) && g(Error("radix out of range: " + c));
  if("-" == a.charAt(0)) {
    return Y.n(a.substring(1), c).k()
  }
  0 <= a.indexOf("-") && g(Error('number format error: interior "-" character: ' + a));
  for(var d = Y.v(Math.pow(c, 8)), e = Y.ZERO, f = 0;f < a.length;f += 8) {
    var h = Math.min(8, a.length - f), i = parseInt(a.substring(f, f + h), c);
    8 > h ? (h = Y.v(Math.pow(c, h)), e = e.multiply(h).add(Y.v(i))) : (e = e.multiply(d), e = e.add(Y.v(i)))
  }
  return e
};
Y.Ga = 65536;
Y.Be = 16777216;
Y.J = Y.Ga * Y.Ga;
Y.Ce = Y.J / 2;
Y.De = Y.J * Y.Ga;
Y.Zb = Y.J * Y.J;
Y.hb = Y.Zb / 2;
Y.ZERO = Y.M(0);
Y.ONE = Y.M(1);
Y.gb = Y.M(-1);
Y.MAX_VALUE = Y.I(-1, 2147483647);
Y.MIN_VALUE = Y.I(0, -2147483648);
Y.Yb = Y.M(16777216);
r = Y.prototype;
r.za = function() {
  return this.l * Y.J + this.ic()
};
r.toString = function(a) {
  a = a || 10;
  (2 > a || 36 < a) && g(Error("radix out of range: " + a));
  if(this.S()) {
    return"0"
  }
  if(this.s()) {
    if(this.u(Y.MIN_VALUE)) {
      var b = Y.v(a), c = this.Q(b), b = c.multiply(b).ia(this);
      return c.toString(a) + b.j.toString(a)
    }
    return"-" + this.k().toString(a)
  }
  for(var c = Y.v(Math.pow(a, 6)), b = this, d = "";;) {
    var e = b.Q(c), f = b.ia(e.multiply(c)).j.toString(a), b = e;
    if(b.S()) {
      return f + d
    }
    for(;6 > f.length;) {
      f = "0" + f
    }
    d = "" + f + d
  }
};
r.ic = function() {
  return 0 <= this.j ? this.j : Y.J + this.j
};
r.S = function() {
  return 0 == this.l && 0 == this.j
};
r.s = function() {
  return 0 > this.l
};
r.yb = function() {
  return 1 == (this.j & 1)
};
r.u = function(a) {
  return this.l == a.l && this.j == a.j
};
r.Ab = function() {
  return 0 > this.La(Y.Yb)
};
r.lc = function(a) {
  return 0 < this.La(a)
};
r.mc = function(a) {
  return 0 <= this.La(a)
};
r.La = function(a) {
  if(this.u(a)) {
    return 0
  }
  var b = this.s(), c = a.s();
  return b && !c ? -1 : !b && c ? 1 : this.ia(a).s() ? -1 : 1
};
r.k = function() {
  return this.u(Y.MIN_VALUE) ? Y.MIN_VALUE : this.vc().add(Y.ONE)
};
r.add = function(a) {
  var b = this.l >>> 16, c = this.l & 65535, d = this.j >>> 16, e = a.l >>> 16, f = a.l & 65535, h = a.j >>> 16, i;
  i = 0 + ((this.j & 65535) + (a.j & 65535));
  a = 0 + (i >>> 16);
  a += d + h;
  d = 0 + (a >>> 16);
  d += c + f;
  c = 0 + (d >>> 16);
  c = c + (b + e) & 65535;
  return Y.I((a & 65535) << 16 | i & 65535, c << 16 | d & 65535)
};
r.ia = function(a) {
  return this.add(a.k())
};
r.multiply = function(a) {
  if(this.S() || a.S()) {
    return Y.ZERO
  }
  if(this.u(Y.MIN_VALUE)) {
    return a.yb() ? Y.MIN_VALUE : Y.ZERO
  }
  if(a.u(Y.MIN_VALUE)) {
    return this.yb() ? Y.MIN_VALUE : Y.ZERO
  }
  if(this.s()) {
    return a.s() ? this.k().multiply(a.k()) : this.k().multiply(a).k()
  }
  if(a.s()) {
    return this.multiply(a.k()).k()
  }
  if(this.Ab() && a.Ab()) {
    return Y.v(this.za() * a.za())
  }
  var b = this.l >>> 16, c = this.l & 65535, d = this.j >>> 16, e = this.j & 65535, f = a.l >>> 16, h = a.l & 65535, i = a.j >>> 16, a = a.j & 65535, m, l, C, w;
  w = 0 + e * a;
  C = 0 + (w >>> 16);
  C += d * a;
  l = 0 + (C >>> 16);
  C = (C & 65535) + e * i;
  l += C >>> 16;
  C &= 65535;
  l += c * a;
  m = 0 + (l >>> 16);
  l = (l & 65535) + d * i;
  m += l >>> 16;
  l &= 65535;
  l += e * h;
  m += l >>> 16;
  l &= 65535;
  m = m + (b * a + c * i + d * h + e * f) & 65535;
  return Y.I(C << 16 | w & 65535, m << 16 | l)
};
r.Q = function(a) {
  a.S() && g(Error("division by zero"));
  if(this.S()) {
    return Y.ZERO
  }
  if(this.u(Y.MIN_VALUE)) {
    if(a.u(Y.ONE) || a.u(Y.gb)) {
      return Y.MIN_VALUE
    }
    if(a.u(Y.MIN_VALUE)) {
      return Y.ONE
    }
    var b = this.Dc().Q(a).shiftLeft(1);
    if(b.u(Y.ZERO)) {
      return a.s() ? Y.ONE : Y.gb
    }
    var c = this.ia(a.multiply(b));
    return b.add(c.Q(a))
  }
  if(a.u(Y.MIN_VALUE)) {
    return Y.ZERO
  }
  if(this.s()) {
    return a.s() ? this.k().Q(a.k()) : this.k().Q(a).k()
  }
  if(a.s()) {
    return this.Q(a.k()).k()
  }
  for(var d = Y.ZERO, c = this;c.mc(a);) {
    for(var b = Math.max(1, Math.floor(c.za() / a.za())), e = Math.ceil(Math.log(b) / Math.LN2), e = 48 >= e ? 1 : Math.pow(2, e - 48), f = Y.v(b), h = f.multiply(a);h.s() || h.lc(c);) {
      b -= e, f = Y.v(b), h = f.multiply(a)
    }
    f.S() && (f = Y.ONE);
    d = d.add(f);
    c = c.ia(h)
  }
  return d
};
r.vc = function() {
  return Y.I(~this.j, ~this.l)
};
r.shiftLeft = function(a) {
  a &= 63;
  if(0 == a) {
    return this
  }
  var b = this.j;
  return 32 > a ? Y.I(b << a, this.l << a | b >>> 32 - a) : Y.I(0, b << a - 32)
};
r.Dc = function() {
  var a;
  a = 1;
  if(0 == a) {
    return this
  }
  var b = this.l;
  return 32 > a ? Y.I(this.j >>> a | b << 32 - a, b >> a) : Y.I(b >> a - 32, 0 <= b ? 0 : -1)
};
r = X.prototype;
r.Ia = function(a, b, c, d) {
  for(var e = 0, f = 0;0 <= --d;) {
    var h = a * this[e++] + b[c] + f, f = Math.floor(h / 67108864);
    b[c++] = h & 67108863
  }
  return f
};
r.h = 26;
r.D = 67108863;
r.ba = 67108864;
r.Xb = Math.pow(2, 52);
r.cb = 26;
r.eb = 0;
var Xc = [], Zc, Z;
Zc = 48;
for(Z = 0;9 >= Z;++Z) {
  Xc[Zc++] = Z
}
Zc = 97;
for(Z = 10;36 > Z;++Z) {
  Xc[Zc++] = Z
}
Zc = 65;
for(Z = 10;36 > Z;++Z) {
  Xc[Zc++] = Z
}
r = X.prototype;
r.copyTo = function(a) {
  for(var b = this.b - 1;0 <= b;--b) {
    a[b] = this[b]
  }
  a.b = this.b;
  a.c = this.c
};
r.M = function(a) {
  this.b = 1;
  this.c = 0 > a ? -1 : 0;
  0 < a ? this[0] = a : -1 > a ? this[0] = a + DV : this.b = 0
};
r.n = function(a, b) {
  var c;
  if(16 == b) {
    c = 4
  }else {
    if(8 == b) {
      c = 3
    }else {
      if(256 == b) {
        c = 8
      }else {
        if(2 == b) {
          c = 1
        }else {
          if(32 == b) {
            c = 5
          }else {
            if(4 == b) {
              c = 2
            }else {
              this.hc(a, b);
              return
            }
          }
        }
      }
    }
  }
  this.c = this.b = 0;
  for(var d = a.length, e = p, f = 0;0 <= --d;) {
    var h = 8 == c ? a[d] & 255 : Wc(a, d);
    0 > h ? "-" == a.charAt(d) && (e = k) : (e = p, 0 == f ? this[this.b++] = h : f + c > this.h ? (this[this.b - 1] |= (h & (1 << this.h - f) - 1) << f, this[this.b++] = h >> this.h - f) : this[this.b - 1] |= h << f, f += c, f >= this.h && (f -= this.h))
  }
  8 == c && 0 != (a[0] & 128) && (this.c = -1, 0 < f && (this[this.b - 1] |= (1 << this.h - f) - 1 << f));
  this.K();
  e && X.ZERO.C(this, this)
};
r.K = function() {
  for(var a = this.c & this.D;0 < this.b && this[this.b - 1] == a;) {
    --this.b
  }
};
r.Na = function(a, b) {
  var c;
  for(c = this.b - 1;0 <= c;--c) {
    b[c + a] = this[c]
  }
  for(c = a - 1;0 <= c;--c) {
    b[c] = 0
  }
  b.b = this.b + a;
  b.c = this.c
};
r.ec = function(a, b) {
  for(var c = a;c < this.b;++c) {
    b[c - a] = this[c]
  }
  b.b = Math.max(this.b - a, 0);
  b.c = this.c
};
r.zb = function(a, b) {
  var c = a % this.h, d = this.h - c, e = (1 << d) - 1, f = Math.floor(a / this.h), h = this.c << c & this.D, i;
  for(i = this.b - 1;0 <= i;--i) {
    b[i + f + 1] = this[i] >> d | h, h = (this[i] & e) << c
  }
  for(i = f - 1;0 <= i;--i) {
    b[i] = 0
  }
  b[f] = h;
  b.b = this.b + f + 1;
  b.c = this.c;
  b.K()
};
r.xc = function(a, b) {
  b.c = this.c;
  var c = Math.floor(a / this.h);
  if(c >= this.b) {
    b.b = 0
  }else {
    var d = a % this.h, e = this.h - d, f = (1 << d) - 1;
    b[0] = this[c] >> d;
    for(var h = c + 1;h < this.b;++h) {
      b[h - c - 1] |= (this[h] & f) << e, b[h - c] = this[h] >> d
    }
    0 < d && (b[this.b - c - 1] |= (this.c & f) << e);
    b.b = this.b - c;
    b.K()
  }
};
r.C = function(a, b) {
  for(var c = 0, d = 0, e = Math.min(a.b, this.b);c < e;) {
    d += this[c] - a[c], b[c++] = d & this.D, d >>= this.h
  }
  if(a.b < this.b) {
    for(d -= a.c;c < this.b;) {
      d += this[c], b[c++] = d & this.D, d >>= this.h
    }
    d += this.c
  }else {
    for(d += this.c;c < a.b;) {
      d -= a[c], b[c++] = d & this.D, d >>= this.h
    }
    d -= a.c
  }
  b.c = 0 > d ? -1 : 0;
  -1 > d ? b[c++] = this.ba + d : 0 < d && (b[c++] = d);
  b.b = c;
  b.K()
};
r.tc = function(a) {
  var b = $.Kb, c = this.abs(), d = b.abs(), e = c.b;
  for(a.b = e + d.b;0 <= --e;) {
    a[e] = 0
  }
  for(e = 0;e < d.b;++e) {
    a[e + c.b] = c.Ia(d[e], a, e, c.b)
  }
  a.c = 0;
  a.K();
  this.c != b.c && X.ZERO.C(a, a)
};
r.qb = function(a, b, c) {
  var d = a.abs();
  if(!(0 >= d.b)) {
    var e = this.abs();
    if(e.b < d.b) {
      b != n && b.M(0), c != n && this.copyTo(c)
    }else {
      c == n && (c = Vc());
      var f = Vc(), h = this.c, a = a.c, i = d[d.b - 1], m = 1, l;
      if(0 != (l = i >>> 16)) {
        i = l, m += 16
      }
      if(0 != (l = i >> 8)) {
        i = l, m += 8
      }
      if(0 != (l = i >> 4)) {
        i = l, m += 4
      }
      if(0 != (l = i >> 2)) {
        i = l, m += 2
      }
      0 != i >> 1 && (m += 1);
      i = this.h - m;
      0 < i ? (d.zb(i, f), e.zb(i, c)) : (d.copyTo(f), e.copyTo(c));
      d = f.b;
      e = f[d - 1];
      if(0 != e) {
        l = e * (1 << this.cb) + (1 < d ? f[d - 2] >> this.eb : 0);
        m = this.Xb / l;
        l = (1 << this.cb) / l;
        var C = 1 << this.eb, w = c.b, y = w - d, H = b == n ? Vc() : b;
        f.Na(y, H);
        0 <= c.oa(H) && (c[c.b++] = 1, c.C(H, c));
        X.ONE.Na(d, H);
        for(H.C(f, f);f.b < d;) {
          f[f.b++] = 0
        }
        for(;0 <= --y;) {
          var L = c[--w] == e ? this.D : Math.floor(c[w] * m + (c[w - 1] + C) * l);
          if((c[w] += f.Ia(L, c, y, d)) < L) {
            f.Na(y, H);
            for(c.C(H, c);c[w] < --L;) {
              c.C(H, c)
            }
          }
        }
        b != n && (c.ec(d, b), h != a && X.ZERO.C(b, b));
        c.b = d;
        c.K();
        0 < i && c.xc(i, c);
        0 > h && X.ZERO.C(c, c)
      }
    }
  }
};
r.toString = function(a) {
  if(0 > this.c) {
    return"-" + this.k().toString(a)
  }
  if(16 == a) {
    a = 4
  }else {
    if(8 == a) {
      a = 3
    }else {
      if(2 == a) {
        a = 1
      }else {
        if(32 == a) {
          a = 5
        }else {
          if(4 == a) {
            a = 2
          }else {
            return this.Ec(a)
          }
        }
      }
    }
  }
  var b = (1 << a) - 1, c, d = p, e = "", f = this.b, h = this.h - f * this.h % a;
  if(0 < f--) {
    if(h < this.h && 0 < (c = this[f] >> h)) {
      d = k, e = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c)
    }
    for(;0 <= f;) {
      h < a ? (c = (this[f] & (1 << h) - 1) << a - h, c |= this[--f] >> (h += this.h - a)) : (c = this[f] >> (h -= a) & b, 0 >= h && (h += this.h, --f)), 0 < c && (d = k), d && (e += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c))
    }
  }
  return d ? e : "0"
};
r.k = function() {
  var a = Vc();
  X.ZERO.C(this, a);
  return a
};
r.abs = function() {
  return 0 > this.c ? this.k() : this
};
r.oa = function(a) {
  var b = this.c - a.c;
  if(0 != b) {
    return b
  }
  var c = this.b, b = c - a.b;
  if(0 != b) {
    return 0 > this.c ? -b : b
  }
  for(;0 <= --c;) {
    if(0 != (b = this[c] - a[c])) {
      return b
    }
  }
  return 0
};
X.ZERO = Yc(0);
X.ONE = Yc(1);
r = X.prototype;
r.hc = function(a, b) {
  this.M(0);
  b == n && (b = 10);
  for(var c = this.ma(b), d = Math.pow(b, c), e = p, f = 0, h = 0, i = 0;i < a.length;++i) {
    var m = Wc(a, i);
    0 > m ? "-" == a.charAt(i) && 0 == this.Wa() && (e = k) : (h = b * h + m, ++f >= c && (this.pb(d), this.ob(h), h = f = 0))
  }
  0 < f && (this.pb(Math.pow(b, f)), this.ob(h));
  e && X.ZERO.C(this, this)
};
r.ma = function(a) {
  return Math.floor(Math.LN2 * this.h / Math.log(a))
};
r.Wa = function() {
  return 0 > this.c ? -1 : 0 >= this.b || 1 == this.b && 0 >= this[0] ? 0 : 1
};
r.pb = function(a) {
  this[this.b] = this.Ia(a - 1, this, 0, this.b);
  ++this.b;
  this.K()
};
r.ob = function(a) {
  var b = 0;
  if(0 != a) {
    for(;this.b <= b;) {
      this[this.b++] = 0
    }
    for(this[b] += a;this[b] >= this.ba;) {
      this[b] -= this.ba, ++b >= this.b && (this[this.b++] = 0), ++this[b]
    }
  }
};
r.Ec = function(a) {
  a == n && (a = 10);
  if(0 == this.Wa() || 2 > a || 36 < a) {
    return"0"
  }
  var b = this.ma(a), b = Math.pow(a, b), c = Yc(b), d = Vc(), e = Vc(), f = "";
  for(this.qb(c, d, e);0 < d.Wa();) {
    f = (b + e.wb()).toString(a).substr(1) + f, d.qb(c, d, e)
  }
  return e.wb().toString(a) + f
};
r.wb = function() {
  if(0 > this.c) {
    if(1 == this.b) {
      return this[0] - this.ba
    }
    if(0 == this.b) {
      return-1
    }
  }else {
    if(1 == this.b) {
      return this[0]
    }
    if(0 == this.b) {
      return 0
    }
  }
  return(this[1] & (1 << 32 - this.h) - 1) << this.h | this[0]
};
r.Ha = function(a, b) {
  for(var c = 0, d = 0, e = Math.min(a.b, this.b);c < e;) {
    d += this[c] + a[c], b[c++] = d & this.D, d >>= this.h
  }
  if(a.b < this.b) {
    for(d += a.c;c < this.b;) {
      d += this[c], b[c++] = d & this.D, d >>= this.h
    }
    d += this.c
  }else {
    for(d += this.c;c < a.b;) {
      d += a[c], b[c++] = d & this.D, d >>= this.h
    }
    d += a.c
  }
  b.c = 0 > d ? -1 : 0;
  0 < d ? b[c++] = d : -1 > d && (b[c++] = this.ba + d);
  b.b = c;
  b.K()
};
var $ = {abs:function(a, b) {
  var c = new Y(a, b), c = c.s() ? c.k() : c;
  D[lb >> 2] = c.j;
  D[lb + 4 >> 2] = c.l
}, rb:function() {
  $.fc || ($.fc = k, $.Kb = new X, $.Kb.n("4294967296", 10), $.Xa = new X, $.Xa.n("18446744073709551616", 10), $.kf = new X, $.lf = new X)
}, af:function(a, b) {
  var c = new X;
  c.n(b.toString(), 10);
  var d = new X;
  c.tc(d);
  c = new X;
  c.n(a.toString(), 10);
  var e = new X;
  c.Ha(d, e);
  return e
}, stringify:function(a, b, c) {
  a = (new Y(a, b)).toString();
  c && "-" == a[0] && ($.rb(), c = new X, c.n(a, 10), a = new X, $.Xa.Ha(c, a), a = a.toString(10));
  return a
}, n:function(a, b, c, d, e) {
  $.rb();
  var f = new X;
  f.n(a, b);
  a = new X;
  a.n(c, 10);
  c = new X;
  c.n(d, 10);
  e && 0 > f.oa(X.ZERO) && (d = new X, f.Ha($.Xa, d), f = d);
  d = p;
  0 > f.oa(a) ? (f = a, d = k) : 0 < f.oa(c) && (f = c, d = k);
  f = Y.n(f.toString());
  D[lb >> 2] = f.j;
  D[lb + 4 >> 2] = f.l;
  d && g("range error")
}};
lc = $;
function $c(a) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + a + ")";
  this.status = a
}
$c.prototype = Error();
var ad, bd = n, cd = p, gb = function dd() {
  !cd && ed && fd();
  cd || (gb = dd)
};
s.callMain = s.Ne = function(a) {
  function b() {
    for(var a = 0;3 > a;a++) {
      d.push(0)
    }
  }
  z(0 == db, "cannot call main when async dependencies remain! (listen on __ATMAIN__)");
  z(0 == Ua.length, "cannot call main when preRun functions remain to be called");
  a = a || [];
  ca && bd !== n && s.V("preload time: " + (Date.now() - bd) + " ms");
  Za || (Za = k, Ta(Va));
  var c = a.length + 1, d = [F(K("/bin/this.program"), "i8", Ja)];
  b();
  for(var e = 0;e < c - 1;e += 1) {
    d.push(F(K(a[e]), "i8", Ja)), b()
  }
  d.push(0);
  d = F(d, "i32", Ja);
  ad = v;
  try {
    var f = s._main(c, d, 0);
    s.noExitRuntime || gd(f)
  }catch(h) {
    h instanceof $c || ("SimulateInfiniteLoop" == h ? s.noExitRuntime = k : g(h))
  }finally {
  }
};
function fd(a) {
  function b() {
    Za || (Za = k, Ta(Va));
    Ta(Wa);
    cd = k;
    s._main && ed && s.callMain(a);
    if(s.postRun) {
      for("function" == typeof s.postRun && (s.postRun = [s.postRun]);s.postRun.length;) {
        ab(s.postRun.shift())
      }
    }
    Ta(Ya)
  }
  a = a || s.arguments;
  bd === n && (bd = Date.now());
  if(0 < db) {
    s.V("run() called, but dependencies remain, so not running")
  }else {
    if(s.preRun) {
      for("function" == typeof s.preRun && (s.preRun = [s.preRun]);s.preRun.length;) {
        $a(s.preRun.shift())
      }
    }
    Ta(Ua);
    0 < db || (s.setStatus ? (s.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        s.setStatus("")
      }, 1);
      ya || b()
    }, 1)) : b())
  }
}
s.run = s.jf = fd;
function gd(a) {
  ya = k;
  v = ad;
  Ta(Xa);
  g(new $c(a))
}
s.exit = s.Re = gd;
function ua(a) {
  a && (s.print(a), s.V(a));
  ya = k;
  g("abort() at " + Error().stack)
}
s.abort = s.abort = ua;
if(s.preInit) {
  for("function" == typeof s.preInit && (s.preInit = [s.preInit]);0 < s.preInit.length;) {
    s.preInit.pop()()
  }
}
var ed = k;
s.noInitialRun && (ed = p);
fd();
var scrypt = (function () {
    var exports = {};

    //---------------------------------------------------------------------------
    // Horrifying UTF-8 and hex codecs

    function encode_utf8(s) {
	return encode_latin1(unescape(encodeURIComponent(s)));
    }

    function encode_latin1(s) {
	var result = new Uint8Array(s.length);
	for (var i = 0; i < s.length; i++) {
	    var c = s.charCodeAt(i);
	    if ((c & 0xff) !== c) throw {message: "Cannot encode string in Latin1", str: s};
	    result[i] = (c & 0xff);
	}
	return result;
    }

    function decode_utf8(bs) {
	return decodeURIComponent(escape(decode_latin1(bs)));
    }

    function decode_latin1(bs) {
	var encoded = [];
	for (var i = 0; i < bs.length; i++) {
	    encoded.push(String.fromCharCode(bs[i]));
	}
	return encoded.join('');
    }

    function to_hex(bs) {
	var encoded = [];
	for (var i = 0; i < bs.length; i++) {
	    encoded.push("0123456789abcdef"[(bs[i] >> 4) & 15]);
	    encoded.push("0123456789abcdef"[bs[i] & 15]);
	}
	return encoded.join('');
    }

    //---------------------------------------------------------------------------

    function injectBytes(bs, leftPadding) {
	var p = leftPadding || 0;
	var address = scrypt_raw._malloc(bs.length + p);
	scrypt_raw.HEAPU8.set(bs, address + p);
	for (var i = address; i < address + p; i++) {
	    scrypt_raw.HEAPU8[i] = 0;
	}
	return address;
    }

    function check_injectBytes(function_name, what, thing, expected_length, leftPadding) {
	check_length(function_name, what, thing, expected_length);
	return injectBytes(thing, leftPadding);
    }

    function extractBytes(address, length) {
	var result = new Uint8Array(length);
	result.set(scrypt_raw.HEAPU8.subarray(address, address + length));
	return result;
    }

    //---------------------------------------------------------------------------

    function check(function_name, result) {
	if (result !== 0) {
	    throw {message: "scrypt_raw." + function_name + " signalled an error"};
	}
    }

    function check_length(function_name, what, thing, expected_length) {
	if (thing.length !== expected_length) {
	    throw {message: "scrypt." + function_name + " expected " +
	           expected_length + "-byte " + what + " but got length " + thing.length};
	}
    }

    function Target(length) {
	this.length = length;
	this.address = scrypt_raw._malloc(length);
    }

    Target.prototype.extractBytes = function (offset) {
	var result = extractBytes(this.address + (offset || 0), this.length - (offset || 0));
	scrypt_raw._free(this.address);
	this.address = null;
	return result;
    };

    function free_all(addresses) {
	for (var i = 0; i < addresses.length; i++) {
	    scrypt_raw._free(addresses[i]);
	}
    }

    //---------------------------------------------------------------------------

    function crypto_scrypt(passwd, salt, n, r, p, buflen) {
	var buf = new Target(buflen);
	var pa = injectBytes(passwd);
	var sa = injectBytes(salt);
	check("_crypto_scrypt",
	      scrypt_raw._crypto_scrypt(pa, passwd.length,
					sa, salt.length,
					n, 0, // 64 bits; zero upper half
					r,
					p,
					buf.address, buf.length));
	free_all([pa, sa]);
	return buf.extractBytes();
    }

    //---------------------------------------------------------------------------

    exports.encode_utf8 = encode_utf8;
    exports.encode_latin1 = encode_latin1;
    exports.decode_utf8 = decode_utf8;
    exports.decode_latin1 = decode_latin1;
    exports.to_hex = to_hex;

    exports.crypto_scrypt = crypto_scrypt;

    return exports;
})();
    return scrypt;
});
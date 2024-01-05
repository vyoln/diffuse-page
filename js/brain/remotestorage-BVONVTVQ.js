import {
  __commonJS,
  init_node_shims,
  localStorage
} from "./chunk-2WJT5GS6.js";

// node_modules/remotestoragejs/release/remotestorage.js
var require_remotestorage = __commonJS({
  "node_modules/remotestoragejs/release/remotestorage.js"(exports, module) {
    init_node_shims();
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("RemoteStorage", [], t) : "object" == typeof exports ? exports.RemoteStorage = t() : e.RemoteStorage = t();
    }(exports, function() {
      return function(e) {
        var t = {};
        function r(n) {
          if (t[n])
            return t[n].exports;
          var o = t[n] = { i: n, l: false, exports: {} };
          return e[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
        }
        return r.m = e, r.c = t, r.d = function(e2, t2, n) {
          r.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: n });
        }, r.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, r.t = function(e2, t2) {
          if (1 & t2 && (e2 = r(e2)), 8 & t2)
            return e2;
          if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
            return e2;
          var n = /* @__PURE__ */ Object.create(null);
          if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
            for (var o in e2)
              r.d(n, o, function(t3) {
                return e2[t3];
              }.bind(null, o));
          return n;
        }, r.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return r.d(t2, "a", t2), t2;
        }, r.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, r.p = "", r(r.s = 18);
      }([function(e, t, r) {
        "use strict";
        (function(e2, r2) {
          var n = this && this.__awaiter || function(e3, t2, r3, n2) {
            return new (r3 || (r3 = Promise))(function(o, i) {
              function s(e4) {
                try {
                  u(n2.next(e4));
                } catch (e5) {
                  i(e5);
                }
              }
              function a(e4) {
                try {
                  u(n2.throw(e4));
                } catch (e5) {
                  i(e5);
                }
              }
              function u(e4) {
                var t3;
                e4.done ? o(e4.value) : (t3 = e4.value, t3 instanceof r3 ? t3 : new r3(function(e5) {
                  e5(t3);
                })).then(s, a);
              }
              u((n2 = n2.apply(e3, t2 || [])).next());
            });
          };
          Object.defineProperty(t, "__esModule", { value: true }), t.applyMixins = t.generateCodeVerifier = t.toBase64 = t.getTextFromArrayBuffer = t.shouldBeTreatedAsBinary = t.getJSONFromLocalStorage = t.localStorageAvailable = t.pathsFromRoot = t.deepClone = t.equal = t.bindAll = t.cleanPath = t.baseName = t.isDocument = t.isFolder = t.containingFolder = t.extend = t.getGlobalContext = t.globalContext = t.logError = void 0;
          t.logError = (e3) => {
            "string" == typeof e3 ? console.error(e3) : console.error(e3.message, e3.stack);
          }, t.globalContext = "undefined" != typeof window ? window : "object" == typeof self ? self : e2;
          t.getGlobalContext = () => "undefined" != typeof window ? window : "object" == typeof self ? self : e2;
          t.extend = (...e3) => {
            const t2 = e3[0];
            return Array.prototype.slice.call(e3, 1).forEach(function(e4) {
              for (const r3 in e4)
                t2[r3] = e4[r3];
            }), t2;
          };
          t.containingFolder = (e3) => {
            if ("" === e3)
              return "/";
            if (!e3)
              throw "Path not given!";
            return e3.replace(/\/+/g, "/").replace(/[^\/]+\/?$/, "");
          };
          t.isFolder = (e3) => "/" === e3.slice(-1);
          t.isDocument = (e3) => !(0, t.isFolder)(e3);
          t.baseName = (e3) => {
            const r3 = e3.split("/");
            return (0, t.isFolder)(e3) ? r3[r3.length - 2] + "/" : r3[r3.length - 1];
          };
          t.cleanPath = (e3) => e3.replace(/\/+/g, "/").split("/").map(encodeURIComponent).join("/").replace(/'/g, "%27");
          t.bindAll = (e3) => {
            for (const t2 in this)
              "function" == typeof e3[t2] && (e3[t2] = e3[t2].bind(e3));
          };
          t.equal = (e3, r3, n2 = []) => {
            let o;
            if (typeof e3 != typeof r3)
              return false;
            if ("number" == typeof e3 || "boolean" == typeof e3 || "string" == typeof e3)
              return e3 === r3;
            if ("function" == typeof e3)
              return e3.toString() === r3.toString();
            if (e3 instanceof ArrayBuffer && r3 instanceof ArrayBuffer && (e3 = new Uint8Array(e3), r3 = new Uint8Array(r3)), e3 instanceof Array) {
              if (e3.length !== r3.length)
                return false;
              for (let o2 = 0, i = e3.length; o2 < i; o2++)
                if (!(0, t.equal)(e3[o2], r3[o2], n2))
                  return false;
            } else {
              for (o in e3)
                if (e3.hasOwnProperty(o) && !(o in r3))
                  return false;
              for (o in r3) {
                if (!r3.hasOwnProperty(o))
                  continue;
                if (!(o in e3))
                  return false;
                let i;
                if ("object" == typeof r3[o]) {
                  if (n2.indexOf(r3[o]) >= 0)
                    continue;
                  i = n2.slice(), i.push(r3[o]);
                }
                if (!(0, t.equal)(e3[o], r3[o], i))
                  return false;
              }
            }
            return true;
          };
          t.deepClone = (e3) => {
            if (void 0 !== e3) {
              const t2 = JSON.parse(JSON.stringify(e3));
              return function e4(t3, r3) {
                if ("object" == typeof t3 && !Array.isArray(t3) && null !== t3) {
                  for (const n2 in t3)
                    if ("object" == typeof t3[n2] && null !== t3[n2])
                      if ("[object ArrayBuffer]" === t3[n2].toString()) {
                        r3[n2] = new ArrayBuffer(t3[n2].byteLength);
                        const e5 = new Int8Array(t3[n2]);
                        new Int8Array(r3[n2]).set(e5);
                      } else
                        e4(t3[n2], r3[n2]);
                }
              }(e3, t2), t2;
            }
          };
          t.pathsFromRoot = (e3) => {
            const t2 = [e3], r3 = e3.replace(/\/$/, "").split("/");
            for (; r3.length > 1; )
              r3.pop(), t2.push(r3.join("/") + "/");
            return t2;
          };
          t.localStorageAvailable = () => {
            const e3 = (0, t.getGlobalContext)();
            if (!("localStorage" in e3))
              return false;
            try {
              return e3.localStorage.setItem("rs-check", "1"), e3.localStorage.removeItem("rs-check"), true;
            } catch (e4) {
              return false;
            }
          };
          t.getJSONFromLocalStorage = (e3) => {
            const r3 = (0, t.getGlobalContext)();
            try {
              return JSON.parse(r3.localStorage.getItem(e3));
            } catch (e4) {
            }
          };
          t.shouldBeTreatedAsBinary = (e3, t2) => !!(t2 && t2.match(/charset=binary/) || /[\x00-\x08\x0E-\x1F\uFFFD]/.test(e3));
          t.getTextFromArrayBuffer = (e3, n2) => new Promise((o) => {
            if ("undefined" == typeof Blob) {
              const t2 = r2.from(e3);
              o(t2.toString(n2));
            } else {
              let r3;
              const i = t.globalContext;
              if (i.BlobBuilder = i.BlobBuilder || i.WebKitBlobBuilder, void 0 !== i.BlobBuilder) {
                const t2 = new i.BlobBuilder();
                t2.append(e3), r3 = t2.getBlob();
              } else
                r3 = new Blob([e3]);
              const s = new FileReader();
              "function" == typeof s.addEventListener ? s.addEventListener("loadend", function(e4) {
                o(e4.target.result);
              }) : s.onloadend = function(e4) {
                o(e4.target.result);
              }, s.readAsText(r3, n2);
            }
          });
          t.toBase64 = (e3) => {
            const n2 = (0, t.getGlobalContext)();
            return "btoa" in n2 ? n2.btoa(e3) : r2.from(e3).toString("base64");
          }, t.generateCodeVerifier = function(e3 = 128) {
            return n(this, void 0, void 0, function* () {
              const t2 = new Uint8Array(e3);
              crypto.getRandomValues(t2);
              const r3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", n2 = Array.from(t2).map((e4) => r3[e4 % r3.length]), o = n2.join(""), i = Uint8Array.from(n2.map((e4) => e4.charCodeAt(0))), s = yield crypto.subtle.digest("SHA-256", i), a = (u = s, btoa(String.fromCharCode.apply(null, new Uint8Array(u))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""));
              var u;
              crypto.getRandomValues(t2);
              return { codeVerifier: o, codeChallenge: a, state: Array.from(t2).map((e4) => r3[e4 % r3.length]).join("") };
            });
          }, t.applyMixins = function(e3, t2) {
            t2.forEach((t3) => {
              Object.getOwnPropertyNames(t3.prototype).forEach((r3) => {
                Object.defineProperty(e3.prototype, r3, Object.getOwnPropertyDescriptor(t3.prototype, r3));
              });
            });
          };
        }).call(this, r(6), r(20).Buffer);
      }, function(e, t, r) {
        "use strict";
        const n = (this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        })(r(3));
        e.exports = function(...e2) {
          n.default.logging && console.log(...e2);
        };
      }, function(e, t, r) {
        "use strict";
        const n = (this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        })(r(1));
        e.exports = class {
          addEvents(e2) {
            e2.forEach((e3) => this._addEvent(e3));
          }
          addEventListener(e2, t2) {
            if ("string" != typeof e2)
              throw new Error("Argument eventName should be a string");
            if ("function" != typeof t2)
              throw new Error("Argument handler should be a function");
            (0, n.default)("[EventHandling] Adding event listener", e2), this._validateEvent(e2), this._handlers[e2].push(t2);
          }
          on(e2, t2) {
            return this.addEventListener(e2, t2);
          }
          removeEventListener(e2, t2) {
            this._validateEvent(e2);
            const r2 = this._handlers[e2].length;
            for (let n2 = 0; n2 < r2; n2++)
              if (this._handlers[e2][n2] === t2)
                return void this._handlers[e2].splice(n2, 1);
          }
          _emit(e2, ...t2) {
            this._validateEvent(e2), this._handlers[e2].slice().forEach((e3) => {
              e3.apply(this, t2);
            });
          }
          _validateEvent(e2) {
            if (!(e2 in this._handlers))
              throw new Error("Unknown event: " + e2);
          }
          _delegateEvent(e2, t2) {
            t2.on(e2, (t3) => {
              this._emit(e2, t3);
            });
          }
          _addEvent(e2) {
            void 0 === this._handlers && (this._handlers = {}), this._handlers[e2] = [];
          }
        };
      }, function(e, t, r) {
        "use strict";
        const n = { cache: true, changeEvents: { local: true, window: false, remote: true, conflict: true }, cordovaRedirectUri: void 0, logging: false, modules: [], backgroundSyncInterval: 6e4, disableFeatures: [], discoveryTimeout: 1e4, isBackground: false, requestTimeout: 3e4, syncInterval: 1e4 };
        e.exports = n;
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e2, t2, r2, n2) {
          return new (r2 || (r2 = Promise))(function(o2, i2) {
            function s2(e3) {
              try {
                u2(n2.next(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function a2(e3) {
              try {
                u2(n2.throw(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function u2(e3) {
              var t3;
              e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof r2 ? t3 : new r2(function(e4) {
                e4(t3);
              })).then(s2, a2);
            }
            u2((n2 = n2.apply(e2, t2 || [])).next());
          });
        }, o = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        const i = o(r(1)), s = r(0), a = o(r(5)), u = r(7);
        let c;
        function h(e2) {
          const t2 = e2 || l.getLocation().href, r2 = {};
          for (const [e3, n3] of new URL(t2).searchParams)
            r2[e3] = n3;
          const n2 = t2.indexOf("#");
          if (-1 === n2)
            return r2;
          const o2 = t2.substring(n2 + 1);
          return o2.includes("=") ? o2.split("&").reduce(function(e3, t3) {
            const r3 = t3.split("=");
            if ("state" === r3[0] && r3[1].match(/rsDiscovery/)) {
              let t4 = decodeURIComponent(r3[1]);
              const n3 = t4.substr(t4.indexOf("rsDiscovery=")).split("&")[0].split("=")[1];
              e3.rsDiscovery = JSON.parse(atob(n3)), t4 = t4.replace(new RegExp("&?rsDiscovery=" + n3), ""), t4.length > 0 && (e3.state = t4);
            } else
              e3[decodeURIComponent(r3[0])] = decodeURIComponent(r3[1]);
            return e3;
          }, r2) : r2;
        }
        class l {
          static authorize(e2, t2) {
            if ((0, i.default)("[Authorize] authURL = ", t2.authURL, "scope = ", t2.scope, "redirectUri = ", t2.redirectUri, "clientId = ", t2.clientId, "response_type =", t2.response_type), !t2.scope)
              throw new Error("Cannot authorize due to undefined or empty scope; did you forget to access.claim()?");
            if (!(0, s.localStorageAvailable)() && "remotestorage" === e2.backend) {
              t2.redirectUri += t2.redirectUri.indexOf("#") > 0 ? "&" : "#";
              const r3 = { userAddress: e2.remote.userAddress, href: e2.remote.href, storageApi: e2.remote.storageApi, properties: e2.remote.properties };
              t2.redirectUri += "rsDiscovery=" + (0, s.toBase64)(JSON.stringify(r3));
            }
            const r2 = function(e3) {
              const t3 = new URL(e3.redirectUri);
              e3.state || (e3.state = t3.hash ? t3.hash.substring(1) : ""), e3.response_type || (e3.response_type = "token");
              const r3 = new URL(e3.authURL);
              r3.searchParams.set("redirect_uri", e3.redirectUri.replace(/#.*$/, "")), r3.searchParams.set("scope", e3.scope), r3.searchParams.set("client_id", e3.clientId);
              for (const t4 of ["state", "response_type", "code_challenge", "code_challenge_method", "token_access_type"]) {
                const n2 = e3[t4];
                n2 && r3.searchParams.set(t4, n2);
              }
              return r3.href;
            }(t2);
            s.globalContext.cordova ? l.openWindow(r2, t2.redirectUri, "location=yes,clearsessioncache=yes,clearcache=yes").then((t3) => {
              e2.remote.configure({ token: t3.access_token });
            }) : l.setLocation(r2);
          }
          static refreshAccessToken(e2, t2, r2) {
            var o2, s2, c2;
            return n(this, void 0, void 0, function* () {
              yield t2.configure({ token: null, tokenType: null });
              const e3 = new URLSearchParams({ grant_type: "refresh_token", client_id: t2.clientId, refresh_token: r2 }), n2 = yield (0, u.requestWithTimeout)("POST", t2.TOKEN_URL, { headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: e3.toString(), responseType: "json" });
              if (200 !== (null == n2 ? void 0 : n2.status))
                throw yield t2.configure({ refreshToken: null }), new a.default("refresh token rejected:" + JSON.stringify(n2.response));
              {
                (0, i.default)(`[Authorize] access token good for ${null === (o2 = null == n2 ? void 0 : n2.response) || void 0 === o2 ? void 0 : o2.expires_in} seconds`);
                const e4 = { token: null === (s2 = null == n2 ? void 0 : n2.response) || void 0 === s2 ? void 0 : s2.access_token, tokenType: null === (c2 = null == n2 ? void 0 : n2.response) || void 0 === c2 ? void 0 : c2.token_type };
                if (!e4.token)
                  throw new Error('no access_token in "successful" refresh: ' + n2.response);
                yield t2.configure(e4);
              }
            });
          }
          static setLocation(e2) {
            if ("string" == typeof e2)
              document.location.href = e2;
            else {
              if ("object" != typeof e2)
                throw "Invalid location " + e2;
              document.location = e2;
            }
          }
          static _rs_supported() {
            return "undefined" != typeof document;
          }
          static _rs_cleanup(e2) {
            e2.removeEventListener("features-loaded", c);
          }
        }
        l.IMPLIED_FAKE_TOKEN = false, l.getLocation = function() {
          return document.location;
        }, l.openWindow = function(e2, t2, r2) {
          return new Promise((n2, o2) => {
            const i2 = open(e2, "_blank", r2);
            function s2() {
              o2("Authorization was canceled");
            }
            i2 && !i2.closed ? (i2.addEventListener("loadstart", function(e3) {
              if (0 !== e3.url.indexOf(t2))
                return;
              i2.removeEventListener("exit", s2), i2.close();
              const r3 = h(e3.url);
              r3 ? n2(r3) : o2("Authorization error");
            }), i2.addEventListener("exit", s2)) : o2("Authorization popup was blocked");
          });
        }, l._rs_init = function(e2) {
          const t2 = h();
          let r2;
          t2 && (r2 = l.getLocation(), r2.hash = ""), c = function() {
            let o2 = false;
            if (t2) {
              if (t2.error)
                throw "access_denied" === t2.error ? new a.default("Authorization failed: access denied", { code: "access_denied" }) : new a.default("Authorization failed: " + t2.error);
              t2.rsDiscovery && e2.remote.configure(t2.rsDiscovery), t2.access_token && (e2.remote.configure({ token: t2.access_token }), o2 = true), t2.remotestorage && (e2.connect(t2.remotestorage), o2 = true), t2.state && (r2 = l.getLocation(), l.setLocation(r2.href.split("#")[0] + "#" + t2.state)), t2.code && (!function(t3) {
                var o3, s2, a2, c2;
                n(this, void 0, void 0, function* () {
                  const n2 = sessionStorage.getItem("remotestorage:codeVerifier");
                  if (!n2)
                    return void (0, i.default)("[Authorize] Ignoring OAuth code parameter, because no PKCE code verifier found in sessionStorage");
                  r2 = l.getLocation();
                  let h2 = r2.origin;
                  "/" !== r2.pathname && (h2 += r2.pathname);
                  const d = new URLSearchParams({ code: t3, grant_type: "authorization_code", client_id: e2.remote.clientId, redirect_uri: h2, code_verifier: n2 }), f = yield (0, u.requestWithTimeout)("POST", e2.remote.TOKEN_URL, { headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: d.toString(), responseType: "json" });
                  switch (f.status) {
                    case 200:
                      (0, i.default)(`[Authorize] access token good for ${null === (o3 = null == f ? void 0 : f.response) || void 0 === o3 ? void 0 : o3.expires_in} seconds`);
                      const t4 = { token: null === (s2 = null == f ? void 0 : f.response) || void 0 === s2 ? void 0 : s2.access_token, refreshToken: null === (a2 = null == f ? void 0 : f.response) || void 0 === a2 ? void 0 : a2.refresh_token, tokenType: null === (c2 = null == f ? void 0 : f.response) || void 0 === c2 ? void 0 : c2.token_type };
                      t4.token ? e2.remote.configure(t4) : e2._emit("error", new Error('no access_token in "successful" response: ' + f.response)), sessionStorage.removeItem("remotestorage:codeVerifier");
                      break;
                    default:
                      e2._emit("error", new Error(`${f.statusText}: ${f.response}`));
                  }
                });
              }(t2.code), o2 = true), o2 || e2.remote.stopWaitingForToken();
            } else
              e2.remote.stopWaitingForToken();
          }, e2.on("features-loaded", c);
        }, e.exports = l;
      }, function(e, t, r) {
        "use strict";
        class n extends Error {
          constructor(e2, t2 = {}) {
            super(), this.name = "Unauthorized", this.message = void 0 === e2 ? "App authorization expired or revoked." : e2, void 0 !== t2.code && (this.code = t2.code), this.stack = new Error().stack;
          }
        }
        e.exports = n;
      }, function(e, t) {
        var r;
        r = function() {
          return this;
        }();
        try {
          r = r || new Function("return this")();
        } catch (e2) {
          "object" == typeof window && (r = window);
        }
        e.exports = r;
      }, function(e, t, r) {
        "use strict";
        (function(e2) {
          var n = this && this.__awaiter || function(e3, t2, r2, n2) {
            return new (r2 || (r2 = Promise))(function(o2, i2) {
              function s2(e4) {
                try {
                  u(n2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function a(e4) {
                try {
                  u(n2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function u(e4) {
                var t3;
                e4.done ? o2(e4.value) : (t3 = e4.value, t3 instanceof r2 ? t3 : new r2(function(e5) {
                  e5(t3);
                })).then(s2, a);
              }
              u((n2 = n2.apply(e3, t2 || [])).next());
            });
          }, o = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t, "__esModule", { value: true }), t.requestWithTimeout = t.isArrayBufferView = t.retryAfterMs = void 0;
          const i = o(r(1)), s = o(r(3));
          if (t.retryAfterMs = function(e3) {
            const t2 = 1e3 * parseInt(e3.getResponseHeader("Retry-After"));
            return t2 >= 1e3 ? t2 : Math.max(1500, Math.min(6e4, Math.round(s.default.syncInterval / (2.9 + 0.2 * Math.random()))));
          }, "function" == typeof (e2 || window).ArrayBufferView)
            t.isArrayBufferView = function(t2) {
              return t2 && t2 instanceof (e2 || window).ArrayBufferView;
            };
          else {
            const e3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
            t.isArrayBufferView = function(t2) {
              for (let r2 = 0; r2 < 8; r2++)
                if (t2 instanceof e3[r2])
                  return true;
              return false;
            };
          }
          t.requestWithTimeout = function(e3, r2, o2) {
            return n(this, void 0, void 0, function* () {
              return "function" == typeof fetch ? function(e4, t2, r3) {
                return n(this, void 0, void 0, function* () {
                  const n2 = "function" == typeof AbortController ? new AbortController() : null;
                  let o3;
                  const a = new Promise((e5, t3) => {
                    o3 = setTimeout(() => {
                      n2 && n2.abort(), t3("timeout");
                    }, s.default.requestTimeout);
                  });
                  let u;
                  const c = {}, h = fetch(t2, { method: e4, headers: r3.headers, body: r3.body, signal: n2 ? n2.signal : void 0 }).then((e5) => {
                    switch ((0, i.default)("[requests fetch]", e5), e5.headers.forEach((e6, t3) => {
                      c[t3.toUpperCase()] = e6;
                    }), u = { readyState: 4, status: e5.status, statusText: e5.statusText, response: void 0, getResponseHeader: (e6) => c[e6.toUpperCase()] || null, responseType: r3.responseType, responseURL: t2 }, r3.responseType) {
                      case "arraybuffer":
                        return e5.arrayBuffer();
                      case "blob":
                        return e5.blob();
                      case "json":
                        return e5.json();
                      case void 0:
                      case "":
                      case "text":
                        return e5.text();
                      default:
                        throw new Error("responseType 'document' is not currently supported using fetch");
                    }
                  }).then((e5) => (u.response = e5, r3.responseType && "text" !== r3.responseType || (u.responseText = e5), u)).finally(() => {
                    clearTimeout(o3);
                  });
                  return Promise.race([h, a]);
                });
              }(e3, r2, o2) : "function" == typeof XMLHttpRequest ? function(e4, r3, o3) {
                return n(this, void 0, void 0, function* () {
                  return new Promise((n2, a) => {
                    (0, i.default)("[requests XHR]", e4, r3);
                    let u = false;
                    const c = setTimeout(() => {
                      u = true, a("timeout");
                    }, s.default.requestTimeout), h = new XMLHttpRequest();
                    if (h.open(e4, r3, true), o3.responseType && (h.responseType = o3.responseType), o3.headers)
                      for (const e5 in o3.headers)
                        h.setRequestHeader(e5, o3.headers[e5]);
                    h.onload = () => {
                      u || (clearTimeout(c), n2(h));
                    }, h.onerror = (e5) => {
                      u || (clearTimeout(c), a(e5));
                    };
                    let l = o3.body;
                    "object" == typeof l && !(0, t.isArrayBufferView)(l) && l instanceof ArrayBuffer && (l = new Uint8Array(l)), h.send(l);
                  });
                });
              }(e3, r2, o2) : Promise.reject("[Requests] You need to add a polyfill for fetch or XMLHttpRequest");
            });
          };
        }).call(this, r(6));
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e2, t2, r2, n2) {
          return new (r2 || (r2 = Promise))(function(o2, i2) {
            function s2(e3) {
              try {
                u2(n2.next(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function a2(e3) {
              try {
                u2(n2.throw(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function u2(e3) {
              var t3;
              e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof r2 ? t3 : new r2(function(e4) {
                e4(t3);
              })).then(s2, a2);
            }
            u2((n2 = n2.apply(e2, t2 || [])).next());
          });
        }, o = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        const i = o(r(24)), s = o(r(25)), a = o(r(26)), u = o(r(2)), c = o(r(3)), h = r(0);
        class l {
          constructor(e2, t2) {
            if (this.schemas = { configurable: true, get() {
              return l.Types.inScope(this.moduleName);
            } }, "/" !== t2[t2.length - 1])
              throw "Not a folder: " + t2;
            "/" === t2 && (this.makePath = (e3) => ("/" === e3[0] ? "" : "/") + e3), this.storage = e2, this.base = t2, this.moduleName = function(e3) {
              const t3 = e3.split("/");
              return e3.length > 2 ? t3[1] : "root";
            }(this.base), this.addEvents(["change"]), this.on = this.on.bind(this), e2.onChange(this.base, this._fireChange.bind(this));
          }
          scope(e2) {
            return new l(this.storage, this.makePath(e2));
          }
          getListing(e2, t2) {
            return n(this, void 0, void 0, function* () {
              if ("string" != typeof e2)
                e2 = "";
              else if (e2.length > 0 && !(0, h.isFolder)(e2))
                return Promise.reject("Not a folder: " + e2);
              return this.storage.get(this.makePath(e2), t2).then((e3) => 404 === e3.statusCode ? {} : e3.body);
            });
          }
          getAll(e2, t2) {
            return n(this, void 0, void 0, function* () {
              if ("string" != typeof e2)
                e2 = "";
              else if (e2.length > 0 && !(0, h.isFolder)(e2))
                return Promise.reject("Not a folder: " + e2);
              return this.storage.get(this.makePath(e2), t2).then((r2) => {
                if (404 === r2.statusCode)
                  return {};
                if ("object" == typeof r2.body) {
                  const n2 = Object.keys(r2.body);
                  if (0 === n2.length)
                    return {};
                  const o2 = n2.map((n3) => this.storage.get(this.makePath(e2 + n3), t2).then((e3) => {
                    if ("string" == typeof e3.body)
                      try {
                        e3.body = JSON.parse(e3.body);
                      } catch (e4) {
                      }
                    "object" == typeof e3.body && (r2.body[n3] = e3.body);
                  }));
                  return Promise.all(o2).then(() => r2.body);
                }
              });
            });
          }
          getFile(e2, t2) {
            return n(this, void 0, void 0, function* () {
              return "string" != typeof e2 ? Promise.reject("Argument 'path' of baseClient.getFile must be a string") : this.storage.get(this.makePath(e2), t2).then((e3) => ({ data: e3.body, contentType: e3.contentType, revision: e3.revision }));
            });
          }
          storeFile(e2, t2, r2) {
            return n(this, void 0, void 0, function* () {
              return "string" != typeof e2 ? Promise.reject("Argument 'mimeType' of baseClient.storeFile must be a string") : "string" != typeof t2 ? Promise.reject("Argument 'path' of baseClient.storeFile must be a string") : "string" != typeof r2 && "object" != typeof r2 ? Promise.reject("Argument 'body' of baseClient.storeFile must be a string, ArrayBuffer, or ArrayBufferView") : (this.storage.access.checkPathPermission(this.makePath(t2), "rw") || console.warn("WARNING: Editing a document to which only read access ('r') was claimed"), this.storage.put(this.makePath(t2), r2, e2).then((e3) => 200 === e3.statusCode || 201 === e3.statusCode ? e3.revision : Promise.reject("Request (PUT " + this.makePath(t2) + ") failed with status: " + e3.statusCode)));
            });
          }
          getObject(e2, t2) {
            return n(this, void 0, void 0, function* () {
              return "string" != typeof e2 ? Promise.reject("Argument 'path' of baseClient.getObject must be a string") : this.storage.get(this.makePath(e2), t2).then((t3) => {
                if ("object" == typeof t3.body)
                  return t3.body;
                if ("string" == typeof t3.body)
                  try {
                    return JSON.parse(t3.body);
                  } catch (t4) {
                    throw new Error("Not valid JSON: " + this.makePath(e2));
                  }
                else if (void 0 !== t3.body && 200 === t3.statusCode)
                  return Promise.reject("Not an object: " + this.makePath(e2));
              });
            });
          }
          storeObject(e2, t2, r2) {
            return n(this, void 0, void 0, function* () {
              if ("string" != typeof e2)
                return Promise.reject("Argument 'typeAlias' of baseClient.storeObject must be a string");
              if ("string" != typeof t2)
                return Promise.reject("Argument 'path' of baseClient.storeObject must be a string");
              if ("object" != typeof r2)
                return Promise.reject("Argument 'object' of baseClient.storeObject must be an object");
              this._attachType(r2, e2);
              try {
                const e3 = this.validate(r2);
                if (!e3.valid)
                  return Promise.reject(e3);
              } catch (e3) {
                return Promise.reject(e3);
              }
              return this.storage.put(this.makePath(t2), JSON.stringify(r2), "application/json; charset=UTF-8").then((e3) => 200 === e3.statusCode || 201 === e3.statusCode ? e3.revision : Promise.reject("Request (PUT " + this.makePath(t2) + ") failed with status: " + e3.statusCode));
            });
          }
          remove(e2) {
            return "string" != typeof e2 ? Promise.reject("Argument 'path' of baseClient.remove must be a string") : (this.storage.access.checkPathPermission(this.makePath(e2), "rw") || console.warn("WARNING: Removing a document to which only read access ('r') was claimed"), this.storage.delete(this.makePath(e2)));
          }
          getItemURL(e2) {
            if ("string" != typeof e2)
              throw "Argument 'path' of baseClient.getItemURL must be a string";
            return this.storage.connected ? (e2 = (0, h.cleanPath)(this.makePath(e2)), this.storage.remote.href + e2) : void 0;
          }
          cache(e2, t2 = "ALL") {
            if ("string" != typeof e2)
              throw "Argument 'path' of baseClient.cache must be a string";
            if ("string" != typeof t2)
              throw "Argument 'strategy' of baseClient.cache must be a string or undefined";
            if ("FLUSH" !== t2 && "SEEN" !== t2 && "ALL" !== t2)
              throw `Argument 'strategy' of baseclient.cache must be one of ["FLUSH", "SEEN", "ALL"]`;
            return this.storage.caching.set(this.makePath(e2), t2), this;
          }
          flush(e2) {
            return this.storage.local.flush(e2);
          }
          declareType(e2, t2, r2) {
            let n2;
            if (r2 && "string" == typeof t2)
              n2 = t2;
            else if (r2 || "string" == typeof t2) {
              if (!r2 && "string" == typeof t2)
                throw new Error("declareType() requires a JSON Schema object to be passed, in order to validate object types/formats");
            } else
              r2 = t2, n2 = this._defaultTypeURI(e2);
            l.Types.declare(this.moduleName, e2, n2, r2);
          }
          validate(e2) {
            const t2 = l.Types.getSchema(e2["@context"]);
            if (t2)
              return i.default.validateResult(e2, t2);
            throw new a.default(e2["@context"]);
          }
          _defaultTypeURI(e2) {
            return "http://remotestorage.io/spec/modules/" + encodeURIComponent(this.moduleName) + "/" + encodeURIComponent(e2);
          }
          _attachType(e2, t2) {
            e2["@context"] = l.Types.resolveAlias(this.moduleName + "/" + t2) || this._defaultTypeURI(t2);
          }
          makePath(e2) {
            return this.base + (e2 || "");
          }
          _fireChange(e2) {
            c.default.changeEvents[e2.origin] && (["new", "old", "lastCommon"].forEach(function(t2) {
              if ((!e2[t2 + "ContentType"] || /^application\/(.*)json(.*)/.exec(e2[t2 + "ContentType"])) && "string" == typeof e2[t2 + "Value"])
                try {
                  e2[t2 + "Value"] = JSON.parse(e2[t2 + "Value"]);
                } catch (e3) {
                }
            }), this._emit("change", e2));
          }
          static _rs_init() {
          }
        }
        l.Types = s.default, (0, h.applyMixins)(l, [u.default]), e.exports = l;
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        Object.defineProperty(t, "__esModule", { value: true }), t.RemoteBase = void 0;
        const o = n(r(2)), i = r(0);
        class s extends o.default {
          constructor(e2) {
            super(), this.rs = e2, this.connected = false;
          }
          stopWaitingForToken() {
            this.connected || this._emit("not-connected");
          }
          addQuotes(e2) {
            return "string" != typeof e2 ? e2 : "*" === e2 ? "*" : '"' + e2 + '"';
          }
          stripQuotes(e2) {
            return "string" != typeof e2 ? e2 : e2.replace(/^["']|["']$/g, "");
          }
          isForbiddenRequestMethod(e2, t2) {
            return ("PUT" === e2 || "DELETE" === e2) && (0, i.isFolder)(t2);
          }
        }
        t.RemoteBase = s;
      }, function(e, t, r) {
        "use strict";
        class n extends Error {
          constructor(e2) {
            super(), this.name = "SyncError", this.message = "Sync failed: ", "string" == typeof e2 ? this.message += e2 : (this.message += e2.message, this.stack = e2.stack, this.originalError = e2);
          }
        }
        e.exports = n;
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e2, t2, r2, n2) {
          return new (r2 || (r2 = Promise))(function(o2, i2) {
            function s2(e3) {
              try {
                u2(n2.next(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function a2(e3) {
              try {
                u2(n2.throw(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function u2(e3) {
              var t3;
              e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof r2 ? t3 : new r2(function(e4) {
                e4(t3);
              })).then(s2, a2);
            }
            u2((n2 = n2.apply(e2, t2 || [])).next());
          });
        }, o = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        const i = o(r(2)), s = o(r(3)), a = o(r(1)), u = r(0);
        function c(e2) {
          if ("object" == typeof e2 && "string" == typeof e2.path)
            if ((0, u.isFolder)(e2.path)) {
              if (e2.local && e2.local.itemsMap)
                return e2.local;
              if (e2.common && e2.common.itemsMap)
                return e2.common;
            } else {
              if (e2.local) {
                if (e2.local.body && e2.local.contentType)
                  return e2.local;
                if (false === e2.local.body)
                  return;
              }
              if (e2.common && e2.common.body && e2.common.contentType)
                return e2.common;
              if (e2.body && e2.contentType)
                return { body: e2.body, contentType: e2.contentType };
            }
        }
        function h(e2, t2) {
          for (const r2 in e2) {
            if (e2[r2] && e2[r2].remote)
              return true;
            const n2 = c(e2[r2]);
            if (n2 && n2.timestamp && (/* @__PURE__ */ new Date()).getTime() - n2.timestamp <= t2)
              return false;
            if (!n2)
              return true;
          }
          return true;
        }
        function l(e2) {
          const t2 = { path: e2, common: {} };
          return (0, u.isFolder)(e2) && (t2.common.itemsMap = {}), t2;
        }
        function d(e2, t2) {
          return e2.common || (e2.common = { itemsMap: {} }), e2.common.itemsMap || (e2.common.itemsMap = {}), e2.local || (e2.local = (0, u.deepClone)(e2.common)), e2.local.itemsMap || (e2.local.itemsMap = e2.common.itemsMap), e2.local.itemsMap[t2] = true, e2;
        }
        class f {
          constructor() {
            this._updateNodesRunning = false, this._updateNodesQueued = [];
          }
          get(e2, t2, r2) {
            return n(this, void 0, void 0, function* () {
              return "number" == typeof t2 ? this.getNodes((0, u.pathsFromRoot)(e2)).then((n2) => {
                const o2 = c(n2[e2]);
                return h(n2, t2) ? r2(e2) : o2 ? { statusCode: 200, body: o2.body || o2.itemsMap, contentType: o2.contentType } : { statusCode: 404 };
              }) : this.getNodes([e2]).then((t3) => {
                const r3 = c(t3[e2]);
                if (r3) {
                  if ((0, u.isFolder)(e2))
                    for (const e3 in r3.itemsMap)
                      r3.itemsMap.hasOwnProperty(e3) && false === r3.itemsMap[e3] && delete r3.itemsMap[e3];
                  return { statusCode: 200, body: r3.body || r3.itemsMap, contentType: r3.contentType };
                }
                return { statusCode: 404 };
              });
            });
          }
          put(e2, t2, r2) {
            return n(this, void 0, void 0, function* () {
              const n2 = (0, u.pathsFromRoot)(e2);
              return this._updateNodes(n2, function(e3, n3) {
                try {
                  for (let o2 = 0, i2 = e3.length; o2 < i2; o2++) {
                    const i3 = e3[o2];
                    let s2, a2 = n3[i3];
                    if (a2 || (n3[i3] = a2 = l(i3)), 0 === o2)
                      s2 = c(a2), a2.local = { body: t2, contentType: r2, previousBody: s2 ? s2.body : void 0, previousContentType: s2 ? s2.contentType : void 0 };
                    else {
                      a2 = d(a2, e3[o2 - 1].substring(i3.length));
                    }
                  }
                  return n3;
                } catch (e4) {
                  throw (0, a.default)("[Cachinglayer] Error during PUT", n3, e4), e4;
                }
              });
            });
          }
          delete(e2) {
            const t2 = (0, u.pathsFromRoot)(e2);
            return this._updateNodes(t2, function(e3, t3) {
              for (let r2 = 0, n2 = e3.length; r2 < n2; r2++) {
                const n3 = e3[r2], o2 = t3[n3];
                let i2;
                if (o2)
                  if (0 === r2)
                    i2 = c(o2), o2.local = { body: false, previousBody: i2 ? i2.body : void 0, previousContentType: i2 ? i2.contentType : void 0 };
                  else {
                    o2.local || (o2.local = (0, u.deepClone)(o2.common));
                    const t4 = e3[r2 - 1].substring(n3.length);
                    if (delete o2.local.itemsMap[t4], Object.getOwnPropertyNames(o2.local.itemsMap).length > 0)
                      break;
                  }
                else
                  console.error("Cannot delete non-existing node " + n3);
              }
              return t3;
            });
          }
          flush(e2) {
            return this._getAllDescendentPaths(e2).then((e3) => this.getNodes(e3)).then((e3) => {
              for (const t2 in e3) {
                const r2 = e3[t2];
                r2 && r2.common && r2.local && this._emitChange({ path: r2.path, origin: "local", oldValue: false === r2.local.body ? void 0 : r2.local.body, newValue: false === r2.common.body ? void 0 : r2.common.body }), e3[t2] = void 0;
              }
              return this.setNodes(e3);
            });
          }
          _emitChange(e2) {
            s.default.changeEvents[e2.origin] && this._emit("change", e2);
          }
          fireInitial() {
            s.default.changeEvents.local && this.forAllNodes((e2) => {
              if ((0, u.isDocument)(e2.path)) {
                const t2 = c(e2);
                t2 && this._emitChange({ path: e2.path, origin: "local", oldValue: void 0, oldContentType: void 0, newValue: t2.body, newContentType: t2.contentType });
              }
            }).then(() => {
              this._emit("local-events-done");
            });
          }
          onDiff(e2) {
            this.diffHandler = e2;
          }
          migrate(e2) {
            return "object" != typeof e2 || e2.common || (e2.common = {}, "string" == typeof e2.path ? "/" === e2.path.substr(-1) && "object" == typeof e2.body && (e2.common.itemsMap = e2.body) : (e2.local || (e2.local = {}), e2.local.body = e2.body, e2.local.contentType = e2.contentType)), e2;
          }
          _updateNodes(e2, t2) {
            return new Promise((r2, n2) => {
              this._doUpdateNodes(e2, t2, { resolve: r2, reject: n2 });
            });
          }
          _doUpdateNodes(e2, t2, r2) {
            this._updateNodesRunning ? this._updateNodesQueued.push({ paths: e2, cb: t2, promise: r2 }) : (this._updateNodesRunning = true, this.getNodes(e2).then((n2) => {
              const o2 = (0, u.deepClone)(n2), i2 = [];
              n2 = t2(e2, n2);
              for (const e3 in n2) {
                const t3 = n2[e3];
                (0, u.equal)(t3, o2[e3]) ? delete n2[e3] : (0, u.isDocument)(e3) && ((0, u.equal)(t3.local.body, t3.local.previousBody) && t3.local.contentType === t3.local.previousContentType || i2.push({ path: e3, origin: "window", oldValue: t3.local.previousBody, newValue: false === t3.local.body ? void 0 : t3.local.body, oldContentType: t3.local.previousContentType, newContentType: t3.local.contentType }), delete t3.local.previousBody, delete t3.local.previousContentType);
              }
              this.setNodes(n2).then(() => {
                this._emitChangeEvents(i2), r2.resolve({ statusCode: 200 });
              });
            }).then(() => Promise.resolve(), (e3) => {
              r2.reject(e3);
            }).then(() => {
              this._updateNodesRunning = false;
              const e3 = this._updateNodesQueued.shift();
              e3 && this._doUpdateNodes(e3.paths, e3.cb, e3.promise);
            }));
          }
          _emitChangeEvents(e2) {
            for (let t2 = 0, r2 = e2.length; t2 < r2; t2++)
              this._emitChange(e2[t2]), this.diffHandler && this.diffHandler(e2[t2].path);
          }
          _getAllDescendentPaths(e2) {
            return (0, u.isFolder)(e2) ? this.getNodes([e2]).then((t2) => {
              const r2 = [e2], n2 = c(t2[e2]), o2 = Object.keys(n2.itemsMap).map((t3) => this._getAllDescendentPaths(e2 + t3).then((e3) => {
                for (let t4 = 0, n3 = e3.length; t4 < n3; t4++)
                  r2.push(e3[t4]);
              }));
              return Promise.all(o2).then(() => r2);
            }) : Promise.resolve([e2]);
          }
          _getInternals() {
            return { getLatest: c, makeNode: l, isOutdated: h };
          }
        }
        (0, u.applyMixins)(f, [i.default]), e.exports = f;
      }, function(e, t, r) {
        "use strict";
        e.exports = class {
          constructor() {
            this.reset();
          }
          static _rs_init() {
          }
          get scopes() {
            return Object.keys(this.scopeModeMap).map((e2) => ({ name: e2, mode: this.scopeModeMap[e2] }));
          }
          get scopeParameter() {
            return this.scopes.map((e2) => `${this._scopeNameForParameter(e2)}:${e2.mode}`).join(" ");
          }
          claim(e2, t2) {
            if ("string" != typeof e2 || -1 !== e2.indexOf("/") || 0 === e2.length)
              throw new Error("Scope should be a non-empty string without forward slashes");
            if (!t2.match(/^rw?$/))
              throw new Error("Mode should be either 'r' or 'rw'");
            this._adjustRootPaths(e2), this.scopeModeMap[e2] = t2;
          }
          get(e2) {
            return this.scopeModeMap[e2];
          }
          remove(e2) {
            const t2 = {};
            for (const e3 in this.scopeModeMap)
              t2[e3] = this.scopeModeMap[e3];
            this.reset(), delete t2[e2];
            for (const e3 in t2)
              this.claim(e3, t2[e3]);
          }
          checkPermission(e2, t2) {
            const r2 = this.get(e2);
            return r2 && ("r" === t2 || "rw" === r2);
          }
          checkPathPermission(e2, t2) {
            if (this.checkPermission("*", t2))
              return true;
            const r2 = this._getModuleName(e2);
            return !!this.checkPermission(r2, t2);
          }
          reset() {
            this.rootPaths = [], this.scopeModeMap = {};
          }
          _getModuleName(e2) {
            if ("/" !== e2[0])
              throw new Error("Path should start with a slash");
            const t2 = e2.replace(/^\/public/, "").match(/^\/([^/]*)\//);
            return t2 ? t2[1] : "*";
          }
          _adjustRootPaths(e2) {
            "*" in this.scopeModeMap || "*" === e2 ? this.rootPaths = ["/"] : e2 in this.scopeModeMap || (this.rootPaths.push("/" + e2 + "/"), this.rootPaths.push("/public/" + e2 + "/"));
          }
          _scopeNameForParameter(e2) {
            if ("*" === e2.name && this.storageType) {
              if ("2012.04" === this.storageType)
                return "";
              if (this.storageType.match(/remotestorage-0[01]/))
                return "root";
            }
            return e2.name;
          }
          setStorageType(e2) {
            this.storageType = e2;
          }
        };
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        const o = r(0), i = n(r(1));
        e.exports = class {
          constructor() {
            this.pendingActivations = [], this.reset();
          }
          set(e2, t2) {
            if ("string" != typeof e2)
              throw new Error("path should be a string");
            if (!(0, o.isFolder)(e2))
              throw new Error("path should be a folder");
            if (!t2.match(/^(FLUSH|SEEN|ALL)$/))
              throw new Error("strategy should be 'FLUSH', 'SEEN', or 'ALL'");
            this._rootPaths[e2] = t2, "ALL" === t2 && (this.activateHandler ? this.activateHandler(e2) : this.pendingActivations.push(e2));
          }
          enable(e2) {
            this.set(e2, "ALL");
          }
          disable(e2) {
            this.set(e2, "FLUSH");
          }
          onActivate(e2) {
            (0, i.default)("[Caching] Setting activate handler", e2, this.pendingActivations), this.activateHandler = e2;
            for (let t2 = 0; t2 < this.pendingActivations.length; t2++)
              e2(this.pendingActivations[t2]);
            this.pendingActivations = [];
          }
          checkPath(e2) {
            return void 0 !== this._rootPaths[e2] ? this._rootPaths[e2] : "/" === e2 ? "SEEN" : this.checkPath((0, o.containingFolder)(e2));
          }
          reset() {
            this._rootPaths = {};
          }
          static _rs_init() {
          }
        };
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        const o = n(r(8)), i = n(r(2)), s = r(0), a = r(7), u = r(9), c = "https://www.googleapis.com", h = "remotestorage:googledrive";
        let l;
        function d(e2) {
          return "/" === e2.substr(-1) && (e2 = e2.substr(0, e2.length - 1)), decodeURIComponent(e2);
        }
        function f(e2) {
          return e2.replace(/[^\/]+\/?$/, "");
        }
        function p(e2) {
          const t2 = e2.split("/");
          return "/" === e2.substr(-1) ? t2[t2.length - 2] + "/" : t2[t2.length - 1];
        }
        function m(e2) {
          return (0, s.cleanPath)("/remotestorage/" + e2);
        }
        class g {
          constructor(e2) {
            this._items = {}, this.maxAge = e2, this._items = {};
          }
          get(e2) {
            const t2 = this._items[e2], r2 = (/* @__PURE__ */ new Date()).getTime();
            return t2 && t2.t >= r2 - this.maxAge ? t2.v : void 0;
          }
          set(e2, t2) {
            this._items[e2] = { v: t2, t: (/* @__PURE__ */ new Date()).getTime() };
          }
        }
        class y extends u.RemoteBase {
          constructor(e2, t2) {
            if (super(e2), this.online = true, this.storageApi = "draft-dejong-remotestorage-19", this.addEvents(["connected", "not-connected"]), this.clientId = t2, this._fileIdCache = new g(300), l = (0, s.localStorageAvailable)(), l) {
              const e3 = (0, s.getJSONFromLocalStorage)(h);
              e3 && this.configure(e3);
            }
          }
          configure(e2) {
            void 0 !== e2.userAddress && (this.userAddress = e2.userAddress), void 0 !== e2.token && (this.token = e2.token);
            const t2 = function() {
              l && localStorage.setItem(h, JSON.stringify({ userAddress: this.userAddress, token: this.token }));
            }, r2 = function() {
              this.connected = false, delete this.token, l && localStorage.removeItem(h);
            };
            this.token ? (this.connected = true, this.userAddress ? (this._emit("connected"), t2.apply(this)) : this.info().then((e3) => {
              this.userAddress = e3.user.emailAddress, this._emit("connected"), t2.apply(this);
            }).catch(() => {
              r2.apply(this), this.rs._emit("error", new Error("Could not fetch user info."));
            })) : r2.apply(this);
          }
          connect() {
            this.rs.setBackend("googledrive"), this.rs.authorize({ authURL: "https://accounts.google.com/o/oauth2/auth", scope: "https://www.googleapis.com/auth/drive", clientId: this.clientId });
          }
          get(e2, t2 = {}) {
            return (0, s.isFolder)(e2) ? this._getFolder(m(e2)) : this._getFile(m(e2), t2);
          }
          put(e2, t2, r2, n2 = {}) {
            const o2 = m(e2);
            function i2(e3) {
              if (e3.status >= 200 && e3.status < 300) {
                const t3 = JSON.parse(e3.responseText), r3 = this.stripQuotes(t3.etag);
                return Promise.resolve({ statusCode: 200, contentType: t3.mimeType, revision: r3 });
              }
              return 412 === e3.status ? Promise.resolve({ statusCode: 412, revision: "conflict" }) : Promise.reject("PUT failed with status " + e3.status + " (" + e3.responseText + ")");
            }
            return this._getFileId(o2).then((e3) => e3 ? n2 && "*" === n2.ifNoneMatch ? i2({ status: 412 }) : this._updateFile(e3, o2, t2, r2, n2).then(i2) : this._createFile(o2, t2, r2).then(i2));
          }
          delete(e2, t2 = {}) {
            const r2 = m(e2);
            return this._getFileId(r2).then((e3) => e3 ? this._getMeta(e3).then((r3) => {
              let n2;
              return "object" == typeof r3 && "string" == typeof r3.etag && (n2 = this.stripQuotes(r3.etag)), t2 && t2.ifMatch && t2.ifMatch !== n2 ? { statusCode: 412, revision: n2 } : this._request("DELETE", c + "/drive/v2/files/" + e3, {}).then((e4) => 200 === e4.status || 204 === e4.status ? { statusCode: 200 } : Promise.reject("Delete failed: " + e4.status + " (" + e4.responseText + ")"));
            }) : Promise.resolve({ statusCode: 200 }));
          }
          info() {
            return this._request("GET", "https://www.googleapis.com/drive/v2/about?fields=user", {}).then(function(e2) {
              try {
                const t2 = JSON.parse(e2.responseText);
                return Promise.resolve(t2);
              } catch (e3) {
                return Promise.reject(e3);
              }
            });
          }
          _updateFile(e2, t2, r2, n2, o2) {
            const i2 = { mimeType: n2 }, s2 = { "Content-Type": "application/json; charset=UTF-8" };
            return o2 && o2.ifMatch && (s2["If-Match"] = this.addQuotes(o2.ifMatch)), this._request("PUT", c + "/upload/drive/v2/files/" + e2 + "?uploadType=resumable", { body: JSON.stringify(i2), headers: s2 }).then((e3) => 412 === e3.status ? e3 : this._request("PUT", e3.getResponseHeader("Location"), { body: n2.match(/^application\/json/) ? JSON.stringify(r2) : r2 }));
          }
          _createFile(e2, t2, r2) {
            return this._getParentId(e2).then((n2) => {
              const o2 = { title: d(p(e2)), mimeType: r2, parents: [{ kind: "drive#fileLink", id: n2 }] };
              return this._request("POST", c + "/upload/drive/v2/files?uploadType=resumable", { body: JSON.stringify(o2), headers: { "Content-Type": "application/json; charset=UTF-8" } }).then((e3) => this._request("POST", e3.getResponseHeader("Location"), { body: r2.match(/^application\/json/) ? JSON.stringify(t2) : t2 }));
            });
          }
          _getFile(e2, t2) {
            return this._getFileId(e2).then((e3) => this._getMeta(e3).then((e4) => {
              let r2;
              if ("object" == typeof e4 && "string" == typeof e4.etag && (r2 = this.stripQuotes(e4.etag)), t2 && t2.ifNoneMatch && r2 === t2.ifNoneMatch)
                return Promise.resolve({ statusCode: 304 });
              if (!e4.downloadUrl) {
                if (!e4.exportLinks || !e4.exportLinks["text/html"])
                  return Promise.resolve({ statusCode: 200, body: "", contentType: e4.mimeType, revision: r2 });
                e4.mimeType += ";export=text/html", e4.downloadUrl = e4.exportLinks["text/html"];
              }
              return this._request("GET", e4.downloadUrl, { responseType: "arraybuffer" }).then((t3) => (0, s.getTextFromArrayBuffer)(t3.response, "UTF-8").then(function(n2) {
                let o2 = n2;
                if (e4.mimeType.match(/^application\/json/))
                  try {
                    o2 = JSON.parse(o2);
                  } catch (e5) {
                  }
                else
                  (0, s.shouldBeTreatedAsBinary)(n2, e4.mimeType) && (o2 = t3.response);
                return { statusCode: 200, body: o2, contentType: e4.mimeType, revision: r2 };
              }));
            }));
          }
          _getFolder(e2) {
            return this._getFileId(e2).then((t2) => {
              let r2, n2, o2;
              if (!t2)
                return Promise.resolve({ statusCode: 404 });
              const i2 = "'" + t2 + "' in parents";
              return this._request("GET", c + "/drive/v2/files?q=" + encodeURIComponent(i2) + "&fields=" + encodeURIComponent("items(downloadUrl,etag,fileSize,id,mimeType,title,labels)") + "&maxResults=1000&trashed=false", {}).then((t3) => {
                var i3;
                if (200 !== t3.status)
                  return Promise.reject("request failed or something: " + t3.status);
                try {
                  r2 = JSON.parse(t3.responseText);
                } catch (e3) {
                  return Promise.reject("non-JSON response from GoogleDrive");
                }
                o2 = {};
                for (const t4 of r2.items)
                  (null === (i3 = t4.labels) || void 0 === i3 ? void 0 : i3.trashed) || (n2 = this.stripQuotes(t4.etag), "application/vnd.google-apps.folder" === t4.mimeType ? (this._fileIdCache.set(e2 + (0, s.cleanPath)(t4.title) + "/", t4.id), o2[t4.title + "/"] = { ETag: n2 }) : (this._fileIdCache.set(e2 + (0, s.cleanPath)(t4.title), t4.id), o2[t4.title] = { ETag: n2, "Content-Type": t4.mimeType, "Content-Length": t4.fileSize }));
                return Promise.resolve({ statusCode: 200, body: o2, contentType: "application/json; charset=UTF-8", revision: void 0 });
              });
            });
          }
          _getParentId(e2) {
            const t2 = f(e2);
            return this._getFileId(t2).then((e3) => e3 ? Promise.resolve(e3) : this._createFolder(t2));
          }
          _createFolder(e2) {
            return this._getParentId(e2).then((t2) => this._request("POST", c + "/drive/v2/files", { body: JSON.stringify({ title: d(p(e2)), mimeType: "application/vnd.google-apps.folder", parents: [{ id: t2 }] }), headers: { "Content-Type": "application/json; charset=UTF-8" } }).then((e3) => {
              const t3 = JSON.parse(e3.responseText);
              return Promise.resolve(t3.id);
            }));
          }
          _getFileId(e2) {
            let t2;
            return "/" === e2 ? Promise.resolve("root") : (t2 = this._fileIdCache.get(e2)) ? Promise.resolve(t2) : this._getFolder(f(e2)).then(() => (t2 = this._fileIdCache.get(e2), t2 ? Promise.resolve(t2) : "/" === e2.substr(-1) ? this._createFolder(e2).then(() => this._getFileId(e2)) : Promise.resolve()));
          }
          _getMeta(e2) {
            return this._request("GET", c + "/drive/v2/files/" + e2, {}).then(function(t2) {
              return 200 === t2.status ? Promise.resolve(JSON.parse(t2.responseText)) : Promise.reject("request (getting metadata for " + e2 + ") failed with status: " + t2.status);
            });
          }
          _request(e2, t2, r2) {
            return this.isForbiddenRequestMethod(e2, t2) ? Promise.reject(`Don't use ${e2} on directories!`) : (r2.headers || (r2.headers = {}), r2.headers.Authorization = "Bearer " + this.token, this.rs._emit("wire-busy", { method: e2, isFolder: (0, s.isFolder)(t2) }), (0, a.requestWithTimeout)(e2, t2, r2).then((r3) => r3 && 401 === r3.status ? void this.connect() : (this.online || (this.online = true, this.rs._emit("network-online")), this.rs._emit("wire-done", { method: e2, isFolder: (0, s.isFolder)(t2), success: true }), Promise.resolve(r3)), (r3) => (this.online && (this.online = false, this.rs._emit("network-offline")), this.rs._emit("wire-done", { method: e2, isFolder: (0, s.isFolder)(t2), success: false }), Promise.reject(r3))));
          }
          static _rs_init(e2) {
            const t2 = e2.apiKeys.googledrive;
            var r2;
            t2 && (e2.googledrive = new y(e2, t2.clientId), "googledrive" === e2.backend && (e2._origRemote = e2.remote, e2.remote = e2.googledrive, (r2 = e2)._origBaseClientGetItemURL || (r2._origBaseClientGetItemURL = o.default.prototype.getItemURL, o.default.prototype.getItemURL = function() {
              throw new Error("getItemURL is not implemented for Google Drive yet");
            })));
          }
          static _rs_supported() {
            return true;
          }
          static _rs_cleanup(e2) {
            var t2;
            e2.setBackend(void 0), e2._origRemote && (e2.remote = e2._origRemote, delete e2._origRemote), (t2 = e2)._origBaseClientGetItemURL && (o.default.prototype.getItemURL = t2._origBaseClientGetItemURL, delete t2._origBaseClientGetItemURL);
          }
        }
        (0, s.applyMixins)(y, [i.default]), e.exports = y;
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e2, t2, r2, n2) {
          return new (r2 || (r2 = Promise))(function(o2, i2) {
            function s2(e3) {
              try {
                u2(n2.next(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function a2(e3) {
              try {
                u2(n2.throw(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function u2(e3) {
              var t3;
              e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof r2 ? t3 : new r2(function(e4) {
                e4(t3);
              })).then(s2, a2);
            }
            u2((n2 = n2.apply(e2, t2 || [])).next());
          });
        }, o = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        const i = o(r(2)), s = o(r(8)), a = o(r(27)), u = o(r(10)), c = o(r(5)), h = r(0), l = r(7), d = r(9), f = o(r(4));
        let p;
        const m = "remotestorage:dropbox", g = "https://api.dropboxapi.com/2/files/list_folder", y = "https://api.dropboxapi.com/2/files/list_folder/continue";
        function v(e2) {
          return ("/remotestorage/" + e2).replace(/\/+$/, "").replace(/\/+/g, "/");
        }
        const _ = /[\u007f-\uffff]/g;
        function b(e2) {
          return JSON.stringify(e2).replace(_, function(e3) {
            return "\\u" + ("000" + e3.charCodeAt(0).toString(16)).slice(-4);
          });
        }
        function w(e2, t2) {
          return new RegExp("^" + t2.join("\\/") + "(\\/|$)").test(e2.error_summary);
        }
        function P(e2) {
          return e2 instanceof ArrayBuffer || (0, l.isArrayBufferView)(e2);
        }
        class E extends d.RemoteBase {
          constructor(e2) {
            if (super(e2), this.online = true, this.storageApi = "draft-dejong-remotestorage-19", this._initialFetchDone = false, this.addEvents(["connected", "not-connected"]), this.clientId = e2.apiKeys.dropbox.appKey, this.TOKEN_URL = "https://api.dropboxapi.com/oauth2/token", this._revCache = new a.default("rev"), this._fetchDeltaCursor = null, this._fetchDeltaPromise = null, this._itemRefs = {}, p = (0, h.localStorageAvailable)(), p) {
              const e3 = (0, h.getJSONFromLocalStorage)(m);
              e3 && this.configure(e3), this._itemRefs = (0, h.getJSONFromLocalStorage)(m + ":shares") || {};
            }
            this.connected && setTimeout(this._emit.bind(this), 0, "connected");
          }
          connect() {
            return n(this, void 0, void 0, function* () {
              try {
                if (this.rs.setBackend("dropbox"), this.token)
                  R(this.rs);
                else {
                  const { codeVerifier: e2, codeChallenge: t2, state: r2 } = yield (0, h.generateCodeVerifier)();
                  sessionStorage.setItem("remotestorage:codeVerifier", e2), sessionStorage.setItem("remotestorage:state", r2), this.rs.authorize({ authURL: "https://www.dropbox.com/oauth2/authorize", scope: "account_info.read files.content.read files.content.write files.metadata.read files.metadata.write", clientId: this.clientId, response_type: "code", state: r2, code_challenge: t2, code_challenge_method: "S256", token_access_type: "offline" });
                }
              } catch (e2) {
                throw this.rs._emit("error", e2), this.rs.setBackend(void 0), e2;
              }
            });
          }
          configure(e2) {
            return n(this, void 0, void 0, function* () {
              void 0 !== e2.userAddress && (this.userAddress = e2.userAddress), void 0 !== e2.token && (this.token = e2.token), void 0 !== e2.refreshToken && (this.refreshToken = e2.refreshToken), void 0 !== e2.tokenType && (this.tokenType = e2.tokenType);
              const t2 = () => {
                p && localStorage.setItem(m, JSON.stringify({ userAddress: this.userAddress, token: this.token, refreshToken: this.refreshToken, tokenType: this.tokenType }));
              }, r2 = () => {
                this.connected = false, p && localStorage.removeItem(m), this.rs.setBackend(void 0);
              };
              if (this.refreshToken || this.token)
                if (this.connected = true, this.userAddress)
                  this._emit("connected"), t2();
                else
                  try {
                    const e3 = yield this.info();
                    this.userAddress = e3.email, this._emit("connected"), t2();
                  } catch (e3) {
                    this.connected = false, this.rs._emit("error", new Error("Could not fetch user info.")), t2.apply(this);
                  }
              else
                r2();
            });
          }
          _getFolder(e2) {
            const t2 = this._revCache, r2 = (r3) => {
              let o2;
              if (200 !== r3.status && 409 !== r3.status)
                return Promise.reject("Unexpected response status: " + r3.status);
              try {
                o2 = JSON.parse(r3.responseText);
              } catch (e3) {
                return Promise.reject(e3);
              }
              if (409 === r3.status)
                return w(o2, ["path", "not_found"]) ? Promise.resolve({}) : Promise.reject(new Error("API returned an error: " + o2.error_summary));
              const i2 = o2.entries.reduce((r4, n3) => {
                try {
                  const o3 = "folder" === n3[".tag"], i3 = n3.path_display.split("/").slice(-1)[0] + (o3 ? "/" : "");
                  if (o3)
                    r4[i3] = { ETag: t2.get(e2 + i3) };
                  else {
                    const t3 = new Date(n3.server_modified);
                    r4[i3] = { ETag: n3.rev, "Content-Length": n3.size, "Last-Modified": t3.toUTCString() }, this._revCache.set(e2 + i3, n3.rev);
                  }
                } catch (t3) {
                  console.error(`[Dropbox] folder \u201C${e2}\u201D has entry ${JSON.stringify(n3)}:`, t3);
                }
                return r4;
              }, {});
              return o2.has_more ? n2(o2.cursor).then(function(e3) {
                return Object.assign(i2, e3);
              }) : Promise.resolve(i2);
            }, n2 = (e3) => {
              const t3 = { body: { cursor: e3 } };
              return this._request("POST", y, t3).then(r2);
            };
            return this._request("POST", g, { body: { path: v(e2) } }).then(r2).then(function(r3) {
              return Promise.resolve({ statusCode: 200, body: r3, contentType: "application/json; charset=UTF-8", revision: t2.get(e2) });
            });
          }
          get(e2, t2 = {}) {
            if (!this.connected)
              return Promise.reject("not connected (path: " + e2 + ")");
            const r2 = this._revCache.get(e2);
            if (null === r2)
              return Promise.resolve({ statusCode: 404 });
            if (t2 && t2.ifNoneMatch) {
              if (!this._initialFetchDone)
                return this.fetchDelta().then(() => this.get(e2, t2));
              if (r2 && r2 === t2.ifNoneMatch)
                return Promise.resolve({ statusCode: 304 });
            }
            if ("/" === e2.slice(-1))
              return this._getFolder(e2);
            const n2 = { headers: { "Dropbox-API-Arg": b({ path: v(e2) }) }, responseType: "arraybuffer" };
            return t2 && t2.ifNoneMatch && (n2.headers["If-None-Match"] = t2.ifNoneMatch), this._request("GET", "https://content.dropboxapi.com/2/files/download", n2).then((t3) => {
              const r3 = t3.status;
              let n3, o2, i2, s2;
              return 200 !== r3 && 409 !== r3 ? Promise.resolve({ statusCode: r3 }) : (n3 = t3.getResponseHeader("Dropbox-API-Result"), (0, h.getTextFromArrayBuffer)(t3.response, "UTF-8").then((a2) => {
                o2 = a2, 409 === r3 && (n3 = o2);
                try {
                  n3 = JSON.parse(n3);
                } catch (e3) {
                  return Promise.reject(e3);
                }
                if (409 === r3)
                  return w(n3, ["path", "not_found"]) ? { statusCode: 404 } : Promise.reject(new Error('API error while downloading file ("' + e2 + '"): ' + n3.error_summary));
                if (i2 = t3.getResponseHeader("Content-Type"), s2 = n3.rev, this._revCache.set(e2, s2), this._shareIfNeeded(e2), (0, h.shouldBeTreatedAsBinary)(a2, i2))
                  o2 = t3.response;
                else
                  try {
                    o2 = JSON.parse(o2), i2 = "application/json; charset=UTF-8";
                  } catch (e3) {
                  }
                return { statusCode: r3, body: o2, contentType: i2, revision: s2 };
              }));
            });
          }
          put(e2, t2, r2, o2 = {}) {
            return n(this, void 0, void 0, function* () {
              if (!this.connected)
                throw new Error("not connected (path: " + e2 + ")");
              const n2 = this._revCache.get(e2);
              if (o2 && o2.ifMatch && n2 && n2 !== o2.ifMatch)
                return { statusCode: 412, revision: n2 };
              if (o2 && "*" === o2.ifNoneMatch && n2 && "rev" !== n2)
                return { statusCode: 412, revision: n2 };
              if (!r2.match(/charset=/) && P(t2) && (r2 += "; charset=binary"), t2.length > 157286400)
                throw new Error("Cannot upload file larger than 150MB");
              const i2 = o2 && (o2.ifMatch || "*" === o2.ifNoneMatch), s2 = { body: t2, contentType: r2, path: e2 };
              if (i2) {
                const t3 = yield this._getMetadata(e2);
                if (o2 && "*" === o2.ifNoneMatch && t3)
                  return { statusCode: 412, revision: t3.rev };
                if (o2 && o2.ifMatch && t3 && t3.rev !== o2.ifMatch)
                  return { statusCode: 412, revision: t3.rev };
              }
              const a2 = yield this._uploadSimple(s2);
              return this._shareIfNeeded(e2), a2;
            });
          }
          delete(e2, t2 = {}) {
            return n(this, void 0, void 0, function* () {
              if (!this.connected)
                throw new Error("not connected (path: " + e2 + ")");
              const r2 = this._revCache.get(e2);
              if ((null == t2 ? void 0 : t2.ifMatch) && r2 && t2.ifMatch !== r2)
                return { statusCode: 412, revision: r2 };
              if (null == t2 ? void 0 : t2.ifMatch) {
                const r3 = yield this._getMetadata(e2);
                if ((null == t2 ? void 0 : t2.ifMatch) && r3 && r3.rev !== t2.ifMatch)
                  return { statusCode: 412, revision: r3.rev };
              }
              return this._deleteSimple(e2);
            });
          }
          _shareIfNeeded(e2) {
            if (e2.match(/^\/public\/.*[^/]$/) && void 0 === this._itemRefs[e2])
              return this.share(e2);
          }
          share(e2) {
            const t2 = { body: { path: v(e2) } };
            return this._request("POST", "https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings", t2).then((t3) => {
              if (200 !== t3.status && 409 !== t3.status)
                return Promise.reject(new Error("Invalid response status:" + t3.status));
              let r2;
              try {
                r2 = JSON.parse(t3.responseText);
              } catch (e3) {
                return Promise.reject(new Error("Invalid response body: " + t3.responseText));
              }
              return 409 === t3.status ? w(r2, ["shared_link_already_exists"]) ? this._getSharedLink(e2) : Promise.reject(new Error("API error: " + r2.error_summary)) : Promise.resolve(r2.url);
            }).then((t3) => (this._itemRefs[e2] = t3, p && localStorage.setItem(m + ":shares", JSON.stringify(this._itemRefs)), Promise.resolve(t3)), (t3) => (t3.message = 'Sharing Dropbox file or folder ("' + e2 + '") failed: ' + t3.message, Promise.reject(t3)));
          }
          info() {
            return this._request("POST", "https://api.dropboxapi.com/2/users/get_current_account", {}).then(function(e2) {
              let t2;
              try {
                const r2 = JSON.parse(e2.responseText);
                t2 = null == r2 ? void 0 : r2.email;
              } catch (t3) {
                return Promise.reject(new Error("Could not query current account info: Invalid API response: " + e2.responseText));
              }
              return Promise.resolve({ email: t2 });
            });
          }
          _request(e2, t2, r2, o2 = 1) {
            return n(this, void 0, void 0, function* () {
              if (this.isForbiddenRequestMethod(e2, t2))
                throw `Don't use ${e2} on directories!`;
              if (!this.token)
                throw new c.default("No access token");
              r2.headers || (r2.headers = {}), r2.headers.Authorization = "Bearer " + this.token, "object" != typeof r2.body || P(r2.body) || (r2.body = JSON.stringify(r2.body), r2.headers["Content-Type"] = "application/json; charset=UTF-8"), this.rs._emit("wire-busy", { method: e2, isFolder: (0, h.isFolder)(t2) });
              try {
                const n2 = yield (0, l.requestWithTimeout)(e2, t2, r2);
                return this.online || (this.online = true, this.rs._emit("network-online")), this.rs._emit("wire-done", { method: e2, isFolder: (0, h.isFolder)(t2), success: true }), 401 === (null == n2 ? void 0 : n2.status) && this.refreshToken ? o2 >= 3 ? (console.error(`Abandoned after ${o2} attempts: ${e2} ${t2}`), n2) : (this.rs._emit("wire-busy", { method: e2, isFolder: (0, h.isFolder)(t2) }), yield f.default.refreshAccessToken(this.rs, this, this.refreshToken), this.rs._emit("wire-done", { method: e2, isFolder: (0, h.isFolder)(t2), success: true }), this._request(e2, t2, r2, o2 + 1)) : [503, 429].includes(null == n2 ? void 0 : n2.status) ? (this.online && (this.online = false, this.rs._emit("network-offline")), o2 >= 3 ? (console.warn(`Abandoned after ${o2} attempts: ${e2} ${t2}`), n2) : (yield new Promise((e3) => setTimeout(e3, (0, l.retryAfterMs)(n2))), this._request(e2, t2, r2, o2 + 1))) : n2;
              } catch (r3) {
                throw this.online && (this.online = false, this.rs._emit("network-offline")), this.rs._emit("wire-done", { method: e2, isFolder: (0, h.isFolder)(t2), success: false }), r3;
              }
            });
          }
          fetchDelta(...e2) {
            if (this._fetchDeltaPromise)
              return this._fetchDeltaPromise;
            const t2 = (e3) => n(this, void 0, void 0, function* () {
              let r2, n2;
              "string" == typeof e3 ? (r2 = y, n2 = { cursor: e3 }) : (r2 = g, n2 = { path: "/remotestorage", recursive: true, include_deleted: true });
              try {
                const o2 = yield this._request("POST", r2, { body: n2 });
                if (401 === o2.status)
                  throw new c.default();
                if (200 !== o2.status && 409 !== o2.status)
                  throw new Error("Invalid response status: " + o2.status);
                let i2;
                try {
                  i2 = JSON.parse(o2.responseText);
                } catch (e4) {
                  throw new Error("Invalid response body: " + o2.responseText);
                }
                if (409 === o2.status) {
                  if (!w(i2, ["path", "not_found"]))
                    throw new Error("API returned an error: " + i2.error_summary);
                  i2 = { cursor: null, entries: [], has_more: false };
                }
                if (e3 || this._revCache.deactivatePropagation(), i2.entries.forEach((e4) => {
                  const t3 = e4.path_display.slice("/remotestorage".length);
                  "deleted" === e4[".tag"] ? (this._revCache.delete(t3), this._revCache.delete(t3 + "/")) : "file" === e4[".tag"] && this._revCache.set(t3, e4.rev);
                }), this._fetchDeltaCursor = i2.cursor, i2.has_more)
                  return t2(i2.cursor);
                this._revCache.activatePropagation(), this._initialFetchDone = true;
              } catch (e4) {
                if ("timeout" === e4)
                  return;
                throw e4;
              }
            });
            return this._fetchDeltaPromise = t2(this._fetchDeltaCursor).catch((e3) => ("object" == typeof e3 && "message" in e3 ? e3.message = "Dropbox: fetchDelta: " + e3.message : e3 = "Dropbox: fetchDelta: " + e3, this.rs._emit("error", e3), this._fetchDeltaPromise = null, Promise.reject(e3))).then(() => (this._fetchDeltaPromise = null, Promise.resolve(e2))), this._fetchDeltaPromise;
          }
          _getMetadata(e2) {
            const t2 = { path: v(e2) };
            return this._request("POST", "https://api.dropboxapi.com/2/files/get_metadata", { body: t2 }).then((e3) => {
              if (200 !== e3.status && 409 !== e3.status)
                return Promise.reject(new Error("Invalid response status:" + e3.status));
              let t3;
              try {
                t3 = JSON.parse(e3.responseText);
              } catch (t4) {
                return Promise.reject(new Error("Invalid response body: " + e3.responseText));
              }
              return 409 === e3.status ? w(t3, ["path", "not_found"]) ? Promise.resolve() : Promise.reject(new Error("API error: " + t3.error_summary)) : Promise.resolve(t3);
            }).then(void 0, (t3) => (t3.message = 'Could not load metadata for file or folder ("' + e2 + '"): ' + t3.message, Promise.reject(t3)));
          }
          _uploadSimple(e2) {
            const t2 = { path: v(e2.path), mode: { ".tag": "overwrite", update: void 0 }, mute: true };
            return e2.ifMatch && (t2.mode = { ".tag": "update", update: e2.ifMatch }), this._request("POST", "https://content.dropboxapi.com/2/files/upload", { body: e2.body, headers: { "Content-Type": "application/octet-stream", "Dropbox-API-Arg": b(t2) } }).then((t3) => {
              if (200 !== t3.status && 409 !== t3.status)
                return Promise.resolve({ statusCode: t3.status });
              let r2;
              try {
                r2 = JSON.parse(t3.responseText);
              } catch (e3) {
                return Promise.reject(new Error("Invalid API result: " + t3.responseText));
              }
              return 409 === t3.status ? w(r2, ["path", "conflict"]) ? this._getMetadata(e2.path).then(function(e3) {
                return Promise.resolve({ statusCode: 412, revision: e3.rev });
              }) : (this.rs._emit("error", new Error(r2.error_summary)), Promise.resolve({ statusCode: t3.status })) : (this._revCache.set(e2.path, r2.rev), Promise.resolve({ statusCode: t3.status, revision: r2.rev }));
            });
          }
          _deleteSimple(e2) {
            const t2 = { path: v(e2) };
            return this._request("POST", "https://api.dropboxapi.com/2/files/delete", { body: t2 }).then((e3) => {
              if (200 !== e3.status && 409 !== e3.status)
                return Promise.resolve({ statusCode: e3.status });
              let t3;
              try {
                t3 = JSON.parse(e3.responseText);
              } catch (t4) {
                return Promise.reject(new Error("Invalid response body: " + e3.responseText));
              }
              if (409 === e3.status) {
                if (w(t3, ["path_lookup", "not_found"]))
                  return Promise.resolve({ statusCode: 404 });
                this.rs._emit("error", new Error(t3.error_summary));
              }
              return Promise.resolve({ statusCode: e3.status });
            }).then((t3) => (200 !== t3.statusCode && 404 !== t3.statusCode || (this._revCache.delete(e2), delete this._itemRefs[e2]), Promise.resolve(t3)), (t3) => (t3.message = 'Could not delete Dropbox file or folder ("' + e2 + '"): ' + t3.message, Promise.reject(t3)));
          }
          _getSharedLink(e2) {
            return n(this, void 0, void 0, function* () {
              const t2 = { body: { path: v(e2), direct_only: true } };
              return this._request("POST", "https://api.dropbox.com/2/sharing/list_shared_links", t2).then((e3) => {
                if (200 !== e3.status && 409 !== e3.status)
                  return Promise.reject(new Error("Invalid response status: " + e3.status));
                let t3;
                try {
                  t3 = JSON.parse(e3.responseText);
                } catch (t4) {
                  return Promise.reject(new Error("Invalid response body: " + e3.responseText));
                }
                return 409 === e3.status ? Promise.reject(new Error("API error: " + (null == t3 ? void 0 : t3.error_summary) || false)) : t3.links.length ? Promise.resolve(t3.links[0].url) : Promise.reject(new Error("No links returned"));
              }, (t3) => (t3.message = 'Could not get link to a shared file or folder ("' + e2 + '"): ' + t3.message, Promise.reject(t3)));
            });
          }
          static _rs_init(e2) {
            p = (0, h.localStorageAvailable)(), e2.apiKeys.dropbox && (e2.dropbox = new E(e2)), "dropbox" === e2.backend && R(e2);
          }
          static _rs_supported() {
            return true;
          }
          static _rs_cleanup(e2) {
            !function(e3) {
              (function(e4) {
                e4._origRemote && (e4.remote = e4._origRemote, delete e4._origRemote);
              })(e3), function(e4) {
                if (!e4._dropboxOrigSync)
                  return;
                e4.sync.sync = e4._dropboxOrigSync, delete e4._dropboxOrigSync;
              }(e3), function(e4) {
                if (!e4._origBaseClientGetItemURL)
                  return;
                s.default.prototype.getItemURL = e4._origBaseClientGetItemURL, delete e4._origBaseClientGetItemURL;
              }(e3), A(e3);
            }(e2), p && localStorage.removeItem(m), e2.setBackend(void 0);
          }
        }
        function T(e2, ...t2) {
          e2._dropboxOrigSync || (e2._dropboxOrigSync = e2.sync.sync.bind(e2.sync), e2.sync.sync = function() {
            return this.dropbox.fetchDelta(e2, ...t2).then(e2._dropboxOrigSync, function(t3) {
              e2._emit("error", new u.default(t3)), e2._emit("sync-done");
            });
          }.bind(e2));
        }
        function A(e2) {
          e2._dropboxOrigSyncCycle && (e2.syncCycle = e2._dropboxOrigSyncCycle, delete e2._dropboxOrigSyncCycle);
        }
        function R(e2) {
          !function(e3) {
            e3._origRemote || (e3._origRemote = e3.remote, e3.remote = e3.dropbox);
          }(e2), e2.sync ? T(e2) : function(e3, ...t2) {
            e3._dropboxOrigSyncCycle || (e3._dropboxOrigSyncCycle = e3.syncCycle, e3.syncCycle = () => {
              if (!e3.sync)
                throw new Error("expected sync to be initialized by now");
              T(e3), e3._dropboxOrigSyncCycle(e3, ...t2), A(e3);
            });
          }(e2), function(e3) {
            e3._origBaseClientGetItemURL || (e3._origBaseClientGetItemURL = s.default.prototype.getItemURL, s.default.prototype.getItemURL = function() {
              throw new Error("getItemURL is not implemented for Dropbox yet");
            });
          }(e2);
        }
        (0, h.applyMixins)(E, [i.default]), e.exports = E;
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        const o = n(r(28)), i = n(r(1)), s = r(0);
        let a, u;
        let c = {};
        const h = function(e2) {
          return new Promise((t2, r2) => {
            if (e2 in c)
              return t2(c[e2]);
            return new o.default({ tls_only: false, uri_fallback: true, request_timeout: 5e3 }).lookup(e2, function(n2, o2) {
              if (n2)
                return r2(n2);
              if ("object" != typeof o2.idx.links.remotestorage || "number" != typeof o2.idx.links.remotestorage.length || o2.idx.links.remotestorage.length <= 0)
                return (0, i.default)("[Discover] WebFinger record for " + e2 + " does not have remotestorage defined in the links section ", JSON.stringify(o2.json)), r2("WebFinger record for " + e2 + " does not have remotestorage defined in the links section.");
              const s2 = o2.idx.links.remotestorage[0], a2 = s2.properties["http://tools.ietf.org/html/rfc6749#section-4.2"] || s2.properties["auth-endpoint"], h2 = s2.properties["http://remotestorage.io/spec/version"] || s2.type;
              return c[e2] = { href: s2.href, storageApi: h2, authURL: a2, properties: s2.properties }, u && (localStorage["remotestorage:discover"] = JSON.stringify({ cache: c })), t2(c[e2]);
            });
          });
        };
        (h.DiscoveryError = function(e2) {
          this.name = "DiscoveryError", this.message = e2, this.stack = new Error().stack;
        }).prototype = Object.create(Error.prototype), h.DiscoveryError.prototype.constructor = h.DiscoveryError, h._rs_init = function() {
          if (u = (0, s.localStorageAvailable)(), u)
            try {
              const e2 = JSON.parse(localStorage["remotestorage:discover"]);
              c = e2.cache;
            } catch (e2) {
            }
        }, h._rs_supported = function() {
          return a = Object.prototype.hasOwnProperty.call(s.globalContext, "XMLHttpRequest"), a;
        }, h._rs_cleanup = function() {
          u && delete localStorage["remotestorage:discover"];
        }, e.exports = h;
      }, function(e, t, r) {
        "use strict";
        const n = (this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        })(r(2)), o = r(0);
        class i {
          constructor() {
            this.addEvents(["background", "foreground"]), this.mode = "undefined" != typeof window ? "browser" : "node", "browser" === this.mode && (this.setBrowserPrefixedNames(), document.addEventListener(this.visibilityChangeEvent, this.setVisibility.bind(this), false), this.setVisibility());
          }
          setBrowserPrefixedNames() {
            "browser" === this.mode && (void 0 !== document.hidden ? (this.hiddenProperty = "hidden", this.visibilityChangeEvent = "visibilitychange") : void 0 !== document.mozHidden ? (this.hiddenProperty = "mozHidden", this.visibilityChangeEvent = "mozvisibilitychange") : void 0 !== document.msHidden ? (this.hiddenProperty = "msHidden", this.visibilityChangeEvent = "msvisibilitychange") : void 0 !== document.webkitHidden && (this.hiddenProperty = "webkitHidden", this.visibilityChangeEvent = "webkitvisibilitychange"));
          }
          setVisibility() {
            document[this.hiddenProperty] ? this.goBackground() : this.goForeground();
          }
          isBrowser() {
            return "browser" === this.mode;
          }
          isNode() {
            return "node" === this.mode;
          }
          goBackground() {
            this._emit("background");
          }
          goForeground() {
            this._emit("foreground");
          }
          static _rs_init() {
          }
          static _rs_cleanup() {
          }
        }
        (0, o.applyMixins)(i, [n.default]), e.exports = i;
      }, function(e, t, r) {
        e.exports = r(19);
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e2, t2, r2, n2) {
          void 0 === n2 && (n2 = r2);
          var o2 = Object.getOwnPropertyDescriptor(t2, r2);
          o2 && !("get" in o2 ? !t2.__esModule : o2.writable || o2.configurable) || (o2 = { enumerable: true, get: function() {
            return t2[r2];
          } }), Object.defineProperty(e2, n2, o2);
        } : function(e2, t2, r2, n2) {
          void 0 === n2 && (n2 = r2), e2[n2] = t2[r2];
        }), o = this && this.__setModuleDefault || (Object.create ? function(e2, t2) {
          Object.defineProperty(e2, "default", { enumerable: true, value: t2 });
        } : function(e2, t2) {
          e2.default = t2;
        }), i = this && this.__importStar || function(e2) {
          if (e2 && e2.__esModule)
            return e2;
          var t2 = {};
          if (null != e2)
            for (var r2 in e2)
              "default" !== r2 && Object.prototype.hasOwnProperty.call(e2, r2) && n(t2, e2, r2);
          return o(t2, e2), t2;
        }, s = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        const a = s(r(3)), u = s(r(1)), c = r(0), h = s(r(12)), l = s(r(4)), d = s(r(8)), f = s(r(13)), p = s(r(2)), m = s(r(14)), g = s(r(15)), y = s(r(16)), v = s(r(10)), _ = s(r(5)), b = s(r(30)), w = i(r(0)), P = (0, c.getGlobalContext)();
        let E;
        function T(e2) {
          return 403 !== e2.statusCode && 401 !== e2.statusCode || this._emit("error", new _.default()), Promise.resolve(e2);
        }
        function A(e2) {
          return "number" == typeof e2 && e2 >= 2e3 && e2 <= 36e5;
        }
        class R {
          constructor(e2) {
            this._pending = [], this._cleanups = [], this._pathHandlers = { change: {} }, this.apiKeys = {}, this._init = b.default.loadFeatures, this.features = b.default.features, this.loadFeature = b.default.loadFeature, this.featureSupported = b.default.featureSupported, this.featureDone = b.default.featureDone, this.featuresDone = b.default.featuresDone, this.featuresLoaded = b.default.featuresLoaded, this.featureInitialized = b.default.featureInitialized, this.featureFailed = b.default.featureFailed, this.hasFeature = b.default.hasFeature, this._setCachingModule = b.default._setCachingModule, this._collectCleanupFunctions = b.default._collectCleanupFunctions, this._fireReady = b.default._fireReady, this.initFeature = b.default.initFeature, "object" == typeof e2 && (0, c.extend)(a.default, e2), this.addEvents(["ready", "authing", "connecting", "connected", "disconnected", "not-connected", "conflict", "error", "features-loaded", "sync-interval-change", "sync-req-done", "sync-done", "wire-busy", "wire-done", "network-offline", "network-online"]), this._setGPD({ get: this._pendingGPD("get"), put: this._pendingGPD("put"), delete: this._pendingGPD("delete") }), E = (0, c.localStorageAvailable)(), E && (this.apiKeys = (0, c.getJSONFromLocalStorage)("remotestorage:api-keys") || {}, this.setBackend(localStorage.getItem("remotestorage:backend") || "remotestorage"));
            const t2 = this.on;
            this.on = function(e3, r2) {
              if (this._allLoaded)
                switch (e3) {
                  case "features-loaded":
                    setTimeout(r2, 0);
                    break;
                  case "ready":
                    this.remote && setTimeout(r2, 0);
                    break;
                  case "connected":
                    this.remote && this.remote.connected && setTimeout(r2, 0);
                    break;
                  case "not-connected":
                    this.remote && !this.remote.connected && setTimeout(r2, 0);
                }
              return t2.call(this, e3, r2);
            }, this._init(), this.fireInitial = function() {
              this.local && setTimeout(this.local.fireInitial.bind(this.local), 0);
            }.bind(this), this.on("ready", this.fireInitial.bind(this)), this.loadModules();
          }
          get connected() {
            return this.remote.connected;
          }
          loadModules() {
            a.default.modules.forEach(this.addModule.bind(this));
          }
          authorize(e2) {
            if (this.access.setStorageType(this.remote.storageApi), void 0 === e2.scope && (e2.scope = this.access.scopeParameter), P.cordova)
              e2.redirectUri = a.default.cordovaRedirectUri;
            else {
              const t2 = l.default.getLocation();
              let r2 = t2.origin;
              "/" !== t2.pathname && (r2 += t2.pathname), e2.redirectUri = r2;
            }
            void 0 === e2.clientId && (e2.clientId = e2.redirectUri.match(/^(https?:\/\/[^/]+)/)[0]), l.default.authorize(this, e2);
          }
          impliedauth(e2, t2) {
            e2 = e2 || this.remote.storageApi, t2 = t2 || String(document.location), (0, u.default)("ImpliedAuth proceeding due to absent authURL; storageApi = " + e2 + " redirectUri = " + t2), this.remote.configure({ token: l.default.IMPLIED_FAKE_TOKEN }), document.location.href = t2;
          }
          connect(e2, t2) {
            if (this.setBackend("remotestorage"), e2.indexOf("@") < 0 && !e2.match(/^(https?:\/\/)?[^\s\/$\.?#]+\.[^\s]*$/))
              return void this._emit("error", new R.DiscoveryError("Not a valid user address or URL."));
            if (e2.indexOf("@") < 0 && !e2.match(/^https?:\/\//) && (e2 = "https://" + e2), P.cordova) {
              if ("string" != typeof a.default.cordovaRedirectUri)
                return void this._emit("error", new R.DiscoveryError("Please supply a custom HTTPS redirect URI for your Cordova app"));
              if (!P.cordova.InAppBrowser)
                return void this._emit("error", new R.DiscoveryError("Please include the InAppBrowser Cordova plugin to enable OAuth"));
            }
            this.remote.configure({ userAddress: e2 }), this._emit("connecting");
            const r2 = setTimeout(() => {
              this._emit("error", new R.DiscoveryError("No storage information found for this user address."));
            }, a.default.discoveryTimeout);
            (0, y.default)(e2).then((n2) => {
              if (clearTimeout(r2), this._emit("authing"), n2.userAddress = e2, this.remote.configure(n2), !this.remote.connected)
                if (n2.authURL)
                  if (void 0 === t2)
                    this.authorize({ authURL: n2.authURL });
                  else {
                    if ("string" != typeof t2)
                      throw new Error("Supplied bearer token must be a string");
                    (0, u.default)("Skipping authorization sequence and connecting with known token"), this.remote.configure({ token: t2 });
                  }
                else
                  this.impliedauth();
            }, () => {
              clearTimeout(r2), this._emit("error", new R.DiscoveryError("No storage information found for this user address."));
            });
          }
          reconnect() {
            this.remote.configure({ token: null }), "remotestorage" === this.backend ? this.connect(this.remote.userAddress) : this.remote.connect();
          }
          disconnect() {
            this.remote && this.remote.configure({ userAddress: null, href: null, storageApi: null, token: null, properties: null }), this._setGPD({ get: this._pendingGPD("get"), put: this._pendingGPD("put"), delete: this._pendingGPD("delete") });
            const e2 = this._cleanups.length;
            let t2 = 0;
            const r2 = () => {
              t2++, t2 >= e2 && (this._init(), this._emit("disconnected"));
            };
            e2 > 0 ? this._cleanups.forEach((e3) => {
              const t3 = e3(this);
              "object" == typeof t3 && "function" == typeof t3.then ? t3.then(r2) : r2();
            }) : r2();
          }
          setBackend(e2) {
            this.backend = e2, E && (e2 ? localStorage.setItem("remotestorage:backend", e2) : localStorage.removeItem("remotestorage:backend"));
          }
          onChange(e2, t2) {
            this._pathHandlers.change[e2] || (this._pathHandlers.change[e2] = []), this._pathHandlers.change[e2].push(t2);
          }
          enableLog() {
            a.default.logging = true;
          }
          disableLog() {
            a.default.logging = false;
          }
          log(...e2) {
            u.default.apply(R, e2);
          }
          setApiKeys(e2) {
            const t2 = [S.GOOGLE, S.DROPBOX];
            if ("object" != typeof e2 || !Object.keys(e2).every((e3) => t2.includes(e3)))
              return console.error("setApiKeys() was called with invalid arguments"), false;
            Object.keys(e2).forEach((t3) => {
              const r2 = e2[t3];
              if (r2) {
                switch (t3) {
                  case S.DROPBOX:
                    this.apiKeys[S.DROPBOX] = { appKey: r2 }, void 0 !== this.dropbox && this.dropbox.clientId === r2 || g.default._rs_init(this);
                    break;
                  case S.GOOGLE:
                    this.apiKeys[S.GOOGLE] = { clientId: r2 }, void 0 !== this.googledrive && this.googledrive.clientId === r2 || m.default._rs_init(this);
                }
                return true;
              }
              delete this.apiKeys[t3];
            }), E && localStorage.setItem("remotestorage:api-keys", JSON.stringify(this.apiKeys));
          }
          setCordovaRedirectUri(e2) {
            if ("string" != typeof e2 || !e2.match(/http(s)?:\/\//))
              throw new Error("Cordova redirect URI must be a URI string");
            a.default.cordovaRedirectUri = e2;
          }
          _setGPD(e2, t2) {
            function r2(e3) {
              return function(...r3) {
                return e3.apply(t2, r3).then(T.bind(this));
              };
            }
            this.get = r2(e2.get), this.put = r2(e2.put), this.delete = r2(e2.delete);
          }
          _pendingGPD(e2) {
            return (...t2) => {
              const r2 = Array.prototype.slice.call(t2);
              return new Promise((t3, n2) => {
                this._pending.push({ method: e2, args: r2, promise: { resolve: t3, reject: n2 } });
              });
            };
          }
          _processPending() {
            this._pending.forEach((e2) => {
              try {
                this[e2.method](...e2.args).then(e2.promise.resolve, e2.promise.reject);
              } catch (t2) {
                e2.promise.reject(t2);
              }
            }), this._pending = [];
          }
          _bindChange(e2) {
            e2.on("change", this._dispatchEvent.bind(this, "change"));
          }
          _dispatchEvent(e2, t2) {
            Object.keys(this._pathHandlers[e2]).forEach((r2) => {
              const n2 = r2.length;
              t2.path.substr(0, n2) === r2 && this._pathHandlers[e2][r2].forEach((e3) => {
                const n3 = {};
                for (const e4 in t2)
                  n3[e4] = t2[e4];
                n3.relativePath = t2.path.replace(new RegExp("^" + r2), "");
                try {
                  e3(n3);
                } catch (e4) {
                  console.error("'change' handler failed: ", e4, e4.stack), this._emit("error", e4);
                }
              });
            });
          }
          scope(e2) {
            if ("string" != typeof e2)
              throw "Argument 'path' of baseClient.scope must be a string";
            return this.access.checkPathPermission(e2, "r") || console.warn("WARNING: Please use remoteStorage.access.claim() to ask for access permissions first: https://remotestoragejs.readthedocs.io/en/latest/js-api/access.html#claim"), new d.default(this, e2);
          }
          getSyncInterval() {
            return a.default.syncInterval;
          }
          setSyncInterval(e2) {
            if (!A(e2))
              throw e2 + " is not a valid sync interval";
            const t2 = a.default.syncInterval;
            a.default.syncInterval = e2, this._emit("sync-interval-change", { oldValue: t2, newValue: e2 });
          }
          getBackgroundSyncInterval() {
            return a.default.backgroundSyncInterval;
          }
          setBackgroundSyncInterval(e2) {
            if (!A(e2))
              throw e2 + " is not a valid sync interval";
            const t2 = a.default.backgroundSyncInterval;
            a.default.backgroundSyncInterval = e2, this._emit("sync-interval-change", { oldValue: t2, newValue: e2 });
          }
          getCurrentSyncInterval() {
            return a.default.isBackground ? a.default.backgroundSyncInterval : a.default.syncInterval;
          }
          getRequestTimeout() {
            return a.default.requestTimeout;
          }
          setRequestTimeout(e2) {
            if ("number" != typeof e2)
              throw e2 + " is not a valid request timeout";
            a.default.requestTimeout = e2;
          }
          syncCycle() {
            this.sync && !this.sync.stopped && (this.on("sync-done", () => {
              this.sync && !this.sync.stopped && (this._syncTimer && (clearTimeout(this._syncTimer), this._syncTimer = void 0), this._syncTimer = setTimeout(this.sync.sync.bind(this.sync), this.getCurrentSyncInterval()));
            }), this.sync.sync());
          }
          startSync() {
            return a.default.cache ? (this.sync.stopped = false, this.syncStopped = false, this.sync.sync()) : (console.warn("Nothing to sync, because caching is disabled."), Promise.resolve());
          }
          stopSync() {
            clearTimeout(this._syncTimer), this._syncTimer = void 0, this.sync ? this.sync.stopped = true : this.syncStopped = true;
          }
          addModule(e2) {
            const t2 = e2.name, r2 = e2.builder;
            if (Object.defineProperty(this, t2, { configurable: true, get: function() {
              const e3 = this._loadModule(t2, r2);
              return Object.defineProperty(this, t2, { value: e3 }), e3;
            } }), -1 !== t2.indexOf("-")) {
              const e3 = t2.replace(/\-[a-z]/g, function(e4) {
                return e4[1].toUpperCase();
              });
              Object.defineProperty(this, e3, { get: function() {
                return this[t2];
              } });
            }
          }
          _loadModule(e2, t2) {
            if (t2) {
              return t2(new d.default(this, "/" + e2 + "/"), new d.default(this, "/public/" + e2 + "/")).exports;
            }
            throw "Unknown module: " + e2;
          }
        }
        var S;
        R.Authorize = l.default, R.SyncError = v.default, R.Unauthorized = _.default, R.DiscoveryError = y.default.DiscoveryError, R.util = w, Object.defineProperty(R.prototype, "access", { get: function() {
          const e2 = new h.default();
          return Object.defineProperty(this, "access", { value: e2 }), e2;
        }, configurable: true }), Object.defineProperty(R.prototype, "caching", { configurable: true, get: function() {
          const e2 = new f.default();
          return Object.defineProperty(this, "caching", { value: e2 }), e2;
        } }), (0, c.applyMixins)(R, [p.default]), function(e2) {
          e2.GOOGLE = "googledrive", e2.DROPBOX = "dropbox";
        }(S || (S = {})), e.exports = R;
      }, function(e, t, r) {
        "use strict";
        (function(e2) {
          var n = r(21), o = r(22), i = r(23);
          function s() {
            return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
          }
          function a(e3, t2) {
            if (s() < t2)
              throw new RangeError("Invalid typed array length");
            return u.TYPED_ARRAY_SUPPORT ? (e3 = new Uint8Array(t2)).__proto__ = u.prototype : (null === e3 && (e3 = new u(t2)), e3.length = t2), e3;
          }
          function u(e3, t2, r2) {
            if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
              return new u(e3, t2, r2);
            if ("number" == typeof e3) {
              if ("string" == typeof t2)
                throw new Error("If encoding is specified then the first argument must be a string");
              return l(this, e3);
            }
            return c(this, e3, t2, r2);
          }
          function c(e3, t2, r2, n2) {
            if ("number" == typeof t2)
              throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t2 instanceof ArrayBuffer ? function(e4, t3, r3, n3) {
              if (t3.byteLength, r3 < 0 || t3.byteLength < r3)
                throw new RangeError("'offset' is out of bounds");
              if (t3.byteLength < r3 + (n3 || 0))
                throw new RangeError("'length' is out of bounds");
              t3 = void 0 === r3 && void 0 === n3 ? new Uint8Array(t3) : void 0 === n3 ? new Uint8Array(t3, r3) : new Uint8Array(t3, r3, n3);
              u.TYPED_ARRAY_SUPPORT ? (e4 = t3).__proto__ = u.prototype : e4 = d(e4, t3);
              return e4;
            }(e3, t2, r2, n2) : "string" == typeof t2 ? function(e4, t3, r3) {
              "string" == typeof r3 && "" !== r3 || (r3 = "utf8");
              if (!u.isEncoding(r3))
                throw new TypeError('"encoding" must be a valid string encoding');
              var n3 = 0 | p(t3, r3), o2 = (e4 = a(e4, n3)).write(t3, r3);
              o2 !== n3 && (e4 = e4.slice(0, o2));
              return e4;
            }(e3, t2, r2) : function(e4, t3) {
              if (u.isBuffer(t3)) {
                var r3 = 0 | f(t3.length);
                return 0 === (e4 = a(e4, r3)).length || t3.copy(e4, 0, 0, r3), e4;
              }
              if (t3) {
                if ("undefined" != typeof ArrayBuffer && t3.buffer instanceof ArrayBuffer || "length" in t3)
                  return "number" != typeof t3.length || (n3 = t3.length) != n3 ? a(e4, 0) : d(e4, t3);
                if ("Buffer" === t3.type && i(t3.data))
                  return d(e4, t3.data);
              }
              var n3;
              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }(e3, t2);
          }
          function h(e3) {
            if ("number" != typeof e3)
              throw new TypeError('"size" argument must be a number');
            if (e3 < 0)
              throw new RangeError('"size" argument must not be negative');
          }
          function l(e3, t2) {
            if (h(t2), e3 = a(e3, t2 < 0 ? 0 : 0 | f(t2)), !u.TYPED_ARRAY_SUPPORT)
              for (var r2 = 0; r2 < t2; ++r2)
                e3[r2] = 0;
            return e3;
          }
          function d(e3, t2) {
            var r2 = t2.length < 0 ? 0 : 0 | f(t2.length);
            e3 = a(e3, r2);
            for (var n2 = 0; n2 < r2; n2 += 1)
              e3[n2] = 255 & t2[n2];
            return e3;
          }
          function f(e3) {
            if (e3 >= s())
              throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
            return 0 | e3;
          }
          function p(e3, t2) {
            if (u.isBuffer(e3))
              return e3.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e3) || e3 instanceof ArrayBuffer))
              return e3.byteLength;
            "string" != typeof e3 && (e3 = "" + e3);
            var r2 = e3.length;
            if (0 === r2)
              return 0;
            for (var n2 = false; ; )
              switch (t2) {
                case "ascii":
                case "latin1":
                case "binary":
                  return r2;
                case "utf8":
                case "utf-8":
                case void 0:
                  return B(e3).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * r2;
                case "hex":
                  return r2 >>> 1;
                case "base64":
                  return q(e3).length;
                default:
                  if (n2)
                    return B(e3).length;
                  t2 = ("" + t2).toLowerCase(), n2 = true;
              }
          }
          function m(e3, t2, r2) {
            var n2 = false;
            if ((void 0 === t2 || t2 < 0) && (t2 = 0), t2 > this.length)
              return "";
            if ((void 0 === r2 || r2 > this.length) && (r2 = this.length), r2 <= 0)
              return "";
            if ((r2 >>>= 0) <= (t2 >>>= 0))
              return "";
            for (e3 || (e3 = "utf8"); ; )
              switch (e3) {
                case "hex":
                  return M(this, t2, r2);
                case "utf8":
                case "utf-8":
                  return R(this, t2, r2);
                case "ascii":
                  return S(this, t2, r2);
                case "latin1":
                case "binary":
                  return k(this, t2, r2);
                case "base64":
                  return A(this, t2, r2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return O(this, t2, r2);
                default:
                  if (n2)
                    throw new TypeError("Unknown encoding: " + e3);
                  e3 = (e3 + "").toLowerCase(), n2 = true;
              }
          }
          function g(e3, t2, r2) {
            var n2 = e3[t2];
            e3[t2] = e3[r2], e3[r2] = n2;
          }
          function y(e3, t2, r2, n2, o2) {
            if (0 === e3.length)
              return -1;
            if ("string" == typeof r2 ? (n2 = r2, r2 = 0) : r2 > 2147483647 ? r2 = 2147483647 : r2 < -2147483648 && (r2 = -2147483648), r2 = +r2, isNaN(r2) && (r2 = o2 ? 0 : e3.length - 1), r2 < 0 && (r2 = e3.length + r2), r2 >= e3.length) {
              if (o2)
                return -1;
              r2 = e3.length - 1;
            } else if (r2 < 0) {
              if (!o2)
                return -1;
              r2 = 0;
            }
            if ("string" == typeof t2 && (t2 = u.from(t2, n2)), u.isBuffer(t2))
              return 0 === t2.length ? -1 : v(e3, t2, r2, n2, o2);
            if ("number" == typeof t2)
              return t2 &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o2 ? Uint8Array.prototype.indexOf.call(e3, t2, r2) : Uint8Array.prototype.lastIndexOf.call(e3, t2, r2) : v(e3, [t2], r2, n2, o2);
            throw new TypeError("val must be string, number or Buffer");
          }
          function v(e3, t2, r2, n2, o2) {
            var i2, s2 = 1, a2 = e3.length, u2 = t2.length;
            if (void 0 !== n2 && ("ucs2" === (n2 = String(n2).toLowerCase()) || "ucs-2" === n2 || "utf16le" === n2 || "utf-16le" === n2)) {
              if (e3.length < 2 || t2.length < 2)
                return -1;
              s2 = 2, a2 /= 2, u2 /= 2, r2 /= 2;
            }
            function c2(e4, t3) {
              return 1 === s2 ? e4[t3] : e4.readUInt16BE(t3 * s2);
            }
            if (o2) {
              var h2 = -1;
              for (i2 = r2; i2 < a2; i2++)
                if (c2(e3, i2) === c2(t2, -1 === h2 ? 0 : i2 - h2)) {
                  if (-1 === h2 && (h2 = i2), i2 - h2 + 1 === u2)
                    return h2 * s2;
                } else
                  -1 !== h2 && (i2 -= i2 - h2), h2 = -1;
            } else
              for (r2 + u2 > a2 && (r2 = a2 - u2), i2 = r2; i2 >= 0; i2--) {
                for (var l2 = true, d2 = 0; d2 < u2; d2++)
                  if (c2(e3, i2 + d2) !== c2(t2, d2)) {
                    l2 = false;
                    break;
                  }
                if (l2)
                  return i2;
              }
            return -1;
          }
          function _(e3, t2, r2, n2) {
            r2 = Number(r2) || 0;
            var o2 = e3.length - r2;
            n2 ? (n2 = Number(n2)) > o2 && (n2 = o2) : n2 = o2;
            var i2 = t2.length;
            if (i2 % 2 != 0)
              throw new TypeError("Invalid hex string");
            n2 > i2 / 2 && (n2 = i2 / 2);
            for (var s2 = 0; s2 < n2; ++s2) {
              var a2 = parseInt(t2.substr(2 * s2, 2), 16);
              if (isNaN(a2))
                return s2;
              e3[r2 + s2] = a2;
            }
            return s2;
          }
          function b(e3, t2, r2, n2) {
            return J(B(t2, e3.length - r2), e3, r2, n2);
          }
          function w(e3, t2, r2, n2) {
            return J(function(e4) {
              for (var t3 = [], r3 = 0; r3 < e4.length; ++r3)
                t3.push(255 & e4.charCodeAt(r3));
              return t3;
            }(t2), e3, r2, n2);
          }
          function P(e3, t2, r2, n2) {
            return w(e3, t2, r2, n2);
          }
          function E(e3, t2, r2, n2) {
            return J(q(t2), e3, r2, n2);
          }
          function T(e3, t2, r2, n2) {
            return J(function(e4, t3) {
              for (var r3, n3, o2, i2 = [], s2 = 0; s2 < e4.length && !((t3 -= 2) < 0); ++s2)
                r3 = e4.charCodeAt(s2), n3 = r3 >> 8, o2 = r3 % 256, i2.push(o2), i2.push(n3);
              return i2;
            }(t2, e3.length - r2), e3, r2, n2);
          }
          function A(e3, t2, r2) {
            return 0 === t2 && r2 === e3.length ? n.fromByteArray(e3) : n.fromByteArray(e3.slice(t2, r2));
          }
          function R(e3, t2, r2) {
            r2 = Math.min(e3.length, r2);
            for (var n2 = [], o2 = t2; o2 < r2; ) {
              var i2, s2, a2, u2, c2 = e3[o2], h2 = null, l2 = c2 > 239 ? 4 : c2 > 223 ? 3 : c2 > 191 ? 2 : 1;
              if (o2 + l2 <= r2)
                switch (l2) {
                  case 1:
                    c2 < 128 && (h2 = c2);
                    break;
                  case 2:
                    128 == (192 & (i2 = e3[o2 + 1])) && (u2 = (31 & c2) << 6 | 63 & i2) > 127 && (h2 = u2);
                    break;
                  case 3:
                    i2 = e3[o2 + 1], s2 = e3[o2 + 2], 128 == (192 & i2) && 128 == (192 & s2) && (u2 = (15 & c2) << 12 | (63 & i2) << 6 | 63 & s2) > 2047 && (u2 < 55296 || u2 > 57343) && (h2 = u2);
                    break;
                  case 4:
                    i2 = e3[o2 + 1], s2 = e3[o2 + 2], a2 = e3[o2 + 3], 128 == (192 & i2) && 128 == (192 & s2) && 128 == (192 & a2) && (u2 = (15 & c2) << 18 | (63 & i2) << 12 | (63 & s2) << 6 | 63 & a2) > 65535 && u2 < 1114112 && (h2 = u2);
                }
              null === h2 ? (h2 = 65533, l2 = 1) : h2 > 65535 && (h2 -= 65536, n2.push(h2 >>> 10 & 1023 | 55296), h2 = 56320 | 1023 & h2), n2.push(h2), o2 += l2;
            }
            return function(e4) {
              var t3 = e4.length;
              if (t3 <= 4096)
                return String.fromCharCode.apply(String, e4);
              var r3 = "", n3 = 0;
              for (; n3 < t3; )
                r3 += String.fromCharCode.apply(String, e4.slice(n3, n3 += 4096));
              return r3;
            }(n2);
          }
          t.Buffer = u, t.SlowBuffer = function(e3) {
            +e3 != e3 && (e3 = 0);
            return u.alloc(+e3);
          }, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e2.TYPED_ARRAY_SUPPORT ? e2.TYPED_ARRAY_SUPPORT : function() {
            try {
              var e3 = new Uint8Array(1);
              return e3.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
                return 42;
              } }, 42 === e3.foo() && "function" == typeof e3.subarray && 0 === e3.subarray(1, 1).byteLength;
            } catch (e4) {
              return false;
            }
          }(), t.kMaxLength = s(), u.poolSize = 8192, u._augment = function(e3) {
            return e3.__proto__ = u.prototype, e3;
          }, u.from = function(e3, t2, r2) {
            return c(null, e3, t2, r2);
          }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, { value: null, configurable: true })), u.alloc = function(e3, t2, r2) {
            return function(e4, t3, r3, n2) {
              return h(t3), t3 <= 0 ? a(e4, t3) : void 0 !== r3 ? "string" == typeof n2 ? a(e4, t3).fill(r3, n2) : a(e4, t3).fill(r3) : a(e4, t3);
            }(null, e3, t2, r2);
          }, u.allocUnsafe = function(e3) {
            return l(null, e3);
          }, u.allocUnsafeSlow = function(e3) {
            return l(null, e3);
          }, u.isBuffer = function(e3) {
            return !(null == e3 || !e3._isBuffer);
          }, u.compare = function(e3, t2) {
            if (!u.isBuffer(e3) || !u.isBuffer(t2))
              throw new TypeError("Arguments must be Buffers");
            if (e3 === t2)
              return 0;
            for (var r2 = e3.length, n2 = t2.length, o2 = 0, i2 = Math.min(r2, n2); o2 < i2; ++o2)
              if (e3[o2] !== t2[o2]) {
                r2 = e3[o2], n2 = t2[o2];
                break;
              }
            return r2 < n2 ? -1 : n2 < r2 ? 1 : 0;
          }, u.isEncoding = function(e3) {
            switch (String(e3).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return true;
              default:
                return false;
            }
          }, u.concat = function(e3, t2) {
            if (!i(e3))
              throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e3.length)
              return u.alloc(0);
            var r2;
            if (void 0 === t2)
              for (t2 = 0, r2 = 0; r2 < e3.length; ++r2)
                t2 += e3[r2].length;
            var n2 = u.allocUnsafe(t2), o2 = 0;
            for (r2 = 0; r2 < e3.length; ++r2) {
              var s2 = e3[r2];
              if (!u.isBuffer(s2))
                throw new TypeError('"list" argument must be an Array of Buffers');
              s2.copy(n2, o2), o2 += s2.length;
            }
            return n2;
          }, u.byteLength = p, u.prototype._isBuffer = true, u.prototype.swap16 = function() {
            var e3 = this.length;
            if (e3 % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t2 = 0; t2 < e3; t2 += 2)
              g(this, t2, t2 + 1);
            return this;
          }, u.prototype.swap32 = function() {
            var e3 = this.length;
            if (e3 % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t2 = 0; t2 < e3; t2 += 4)
              g(this, t2, t2 + 3), g(this, t2 + 1, t2 + 2);
            return this;
          }, u.prototype.swap64 = function() {
            var e3 = this.length;
            if (e3 % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t2 = 0; t2 < e3; t2 += 8)
              g(this, t2, t2 + 7), g(this, t2 + 1, t2 + 6), g(this, t2 + 2, t2 + 5), g(this, t2 + 3, t2 + 4);
            return this;
          }, u.prototype.toString = function() {
            var e3 = 0 | this.length;
            return 0 === e3 ? "" : 0 === arguments.length ? R(this, 0, e3) : m.apply(this, arguments);
          }, u.prototype.equals = function(e3) {
            if (!u.isBuffer(e3))
              throw new TypeError("Argument must be a Buffer");
            return this === e3 || 0 === u.compare(this, e3);
          }, u.prototype.inspect = function() {
            var e3 = "", r2 = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e3 = this.toString("hex", 0, r2).match(/.{2}/g).join(" "), this.length > r2 && (e3 += " ... ")), "<Buffer " + e3 + ">";
          }, u.prototype.compare = function(e3, t2, r2, n2, o2) {
            if (!u.isBuffer(e3))
              throw new TypeError("Argument must be a Buffer");
            if (void 0 === t2 && (t2 = 0), void 0 === r2 && (r2 = e3 ? e3.length : 0), void 0 === n2 && (n2 = 0), void 0 === o2 && (o2 = this.length), t2 < 0 || r2 > e3.length || n2 < 0 || o2 > this.length)
              throw new RangeError("out of range index");
            if (n2 >= o2 && t2 >= r2)
              return 0;
            if (n2 >= o2)
              return -1;
            if (t2 >= r2)
              return 1;
            if (this === e3)
              return 0;
            for (var i2 = (o2 >>>= 0) - (n2 >>>= 0), s2 = (r2 >>>= 0) - (t2 >>>= 0), a2 = Math.min(i2, s2), c2 = this.slice(n2, o2), h2 = e3.slice(t2, r2), l2 = 0; l2 < a2; ++l2)
              if (c2[l2] !== h2[l2]) {
                i2 = c2[l2], s2 = h2[l2];
                break;
              }
            return i2 < s2 ? -1 : s2 < i2 ? 1 : 0;
          }, u.prototype.includes = function(e3, t2, r2) {
            return -1 !== this.indexOf(e3, t2, r2);
          }, u.prototype.indexOf = function(e3, t2, r2) {
            return y(this, e3, t2, r2, true);
          }, u.prototype.lastIndexOf = function(e3, t2, r2) {
            return y(this, e3, t2, r2, false);
          }, u.prototype.write = function(e3, t2, r2, n2) {
            if (void 0 === t2)
              n2 = "utf8", r2 = this.length, t2 = 0;
            else if (void 0 === r2 && "string" == typeof t2)
              n2 = t2, r2 = this.length, t2 = 0;
            else {
              if (!isFinite(t2))
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              t2 |= 0, isFinite(r2) ? (r2 |= 0, void 0 === n2 && (n2 = "utf8")) : (n2 = r2, r2 = void 0);
            }
            var o2 = this.length - t2;
            if ((void 0 === r2 || r2 > o2) && (r2 = o2), e3.length > 0 && (r2 < 0 || t2 < 0) || t2 > this.length)
              throw new RangeError("Attempt to write outside buffer bounds");
            n2 || (n2 = "utf8");
            for (var i2 = false; ; )
              switch (n2) {
                case "hex":
                  return _(this, e3, t2, r2);
                case "utf8":
                case "utf-8":
                  return b(this, e3, t2, r2);
                case "ascii":
                  return w(this, e3, t2, r2);
                case "latin1":
                case "binary":
                  return P(this, e3, t2, r2);
                case "base64":
                  return E(this, e3, t2, r2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return T(this, e3, t2, r2);
                default:
                  if (i2)
                    throw new TypeError("Unknown encoding: " + n2);
                  n2 = ("" + n2).toLowerCase(), i2 = true;
              }
          }, u.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          };
          function S(e3, t2, r2) {
            var n2 = "";
            r2 = Math.min(e3.length, r2);
            for (var o2 = t2; o2 < r2; ++o2)
              n2 += String.fromCharCode(127 & e3[o2]);
            return n2;
          }
          function k(e3, t2, r2) {
            var n2 = "";
            r2 = Math.min(e3.length, r2);
            for (var o2 = t2; o2 < r2; ++o2)
              n2 += String.fromCharCode(e3[o2]);
            return n2;
          }
          function M(e3, t2, r2) {
            var n2 = e3.length;
            (!t2 || t2 < 0) && (t2 = 0), (!r2 || r2 < 0 || r2 > n2) && (r2 = n2);
            for (var o2 = "", i2 = t2; i2 < r2; ++i2)
              o2 += L(e3[i2]);
            return o2;
          }
          function O(e3, t2, r2) {
            for (var n2 = e3.slice(t2, r2), o2 = "", i2 = 0; i2 < n2.length; i2 += 2)
              o2 += String.fromCharCode(n2[i2] + 256 * n2[i2 + 1]);
            return o2;
          }
          function C(e3, t2, r2) {
            if (e3 % 1 != 0 || e3 < 0)
              throw new RangeError("offset is not uint");
            if (e3 + t2 > r2)
              throw new RangeError("Trying to access beyond buffer length");
          }
          function x(e3, t2, r2, n2, o2, i2) {
            if (!u.isBuffer(e3))
              throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t2 > o2 || t2 < i2)
              throw new RangeError('"value" argument is out of bounds');
            if (r2 + n2 > e3.length)
              throw new RangeError("Index out of range");
          }
          function I(e3, t2, r2, n2) {
            t2 < 0 && (t2 = 65535 + t2 + 1);
            for (var o2 = 0, i2 = Math.min(e3.length - r2, 2); o2 < i2; ++o2)
              e3[r2 + o2] = (t2 & 255 << 8 * (n2 ? o2 : 1 - o2)) >>> 8 * (n2 ? o2 : 1 - o2);
          }
          function N(e3, t2, r2, n2) {
            t2 < 0 && (t2 = 4294967295 + t2 + 1);
            for (var o2 = 0, i2 = Math.min(e3.length - r2, 4); o2 < i2; ++o2)
              e3[r2 + o2] = t2 >>> 8 * (n2 ? o2 : 3 - o2) & 255;
          }
          function U(e3, t2, r2, n2, o2, i2) {
            if (r2 + n2 > e3.length)
              throw new RangeError("Index out of range");
            if (r2 < 0)
              throw new RangeError("Index out of range");
          }
          function j(e3, t2, r2, n2, i2) {
            return i2 || U(e3, 0, r2, 4), o.write(e3, t2, r2, n2, 23, 4), r2 + 4;
          }
          function F(e3, t2, r2, n2, i2) {
            return i2 || U(e3, 0, r2, 8), o.write(e3, t2, r2, n2, 52, 8), r2 + 8;
          }
          u.prototype.slice = function(e3, t2) {
            var r2, n2 = this.length;
            if ((e3 = ~~e3) < 0 ? (e3 += n2) < 0 && (e3 = 0) : e3 > n2 && (e3 = n2), (t2 = void 0 === t2 ? n2 : ~~t2) < 0 ? (t2 += n2) < 0 && (t2 = 0) : t2 > n2 && (t2 = n2), t2 < e3 && (t2 = e3), u.TYPED_ARRAY_SUPPORT)
              (r2 = this.subarray(e3, t2)).__proto__ = u.prototype;
            else {
              var o2 = t2 - e3;
              r2 = new u(o2, void 0);
              for (var i2 = 0; i2 < o2; ++i2)
                r2[i2] = this[i2 + e3];
            }
            return r2;
          }, u.prototype.readUIntLE = function(e3, t2, r2) {
            e3 |= 0, t2 |= 0, r2 || C(e3, t2, this.length);
            for (var n2 = this[e3], o2 = 1, i2 = 0; ++i2 < t2 && (o2 *= 256); )
              n2 += this[e3 + i2] * o2;
            return n2;
          }, u.prototype.readUIntBE = function(e3, t2, r2) {
            e3 |= 0, t2 |= 0, r2 || C(e3, t2, this.length);
            for (var n2 = this[e3 + --t2], o2 = 1; t2 > 0 && (o2 *= 256); )
              n2 += this[e3 + --t2] * o2;
            return n2;
          }, u.prototype.readUInt8 = function(e3, t2) {
            return t2 || C(e3, 1, this.length), this[e3];
          }, u.prototype.readUInt16LE = function(e3, t2) {
            return t2 || C(e3, 2, this.length), this[e3] | this[e3 + 1] << 8;
          }, u.prototype.readUInt16BE = function(e3, t2) {
            return t2 || C(e3, 2, this.length), this[e3] << 8 | this[e3 + 1];
          }, u.prototype.readUInt32LE = function(e3, t2) {
            return t2 || C(e3, 4, this.length), (this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16) + 16777216 * this[e3 + 3];
          }, u.prototype.readUInt32BE = function(e3, t2) {
            return t2 || C(e3, 4, this.length), 16777216 * this[e3] + (this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3]);
          }, u.prototype.readIntLE = function(e3, t2, r2) {
            e3 |= 0, t2 |= 0, r2 || C(e3, t2, this.length);
            for (var n2 = this[e3], o2 = 1, i2 = 0; ++i2 < t2 && (o2 *= 256); )
              n2 += this[e3 + i2] * o2;
            return n2 >= (o2 *= 128) && (n2 -= Math.pow(2, 8 * t2)), n2;
          }, u.prototype.readIntBE = function(e3, t2, r2) {
            e3 |= 0, t2 |= 0, r2 || C(e3, t2, this.length);
            for (var n2 = t2, o2 = 1, i2 = this[e3 + --n2]; n2 > 0 && (o2 *= 256); )
              i2 += this[e3 + --n2] * o2;
            return i2 >= (o2 *= 128) && (i2 -= Math.pow(2, 8 * t2)), i2;
          }, u.prototype.readInt8 = function(e3, t2) {
            return t2 || C(e3, 1, this.length), 128 & this[e3] ? -1 * (255 - this[e3] + 1) : this[e3];
          }, u.prototype.readInt16LE = function(e3, t2) {
            t2 || C(e3, 2, this.length);
            var r2 = this[e3] | this[e3 + 1] << 8;
            return 32768 & r2 ? 4294901760 | r2 : r2;
          }, u.prototype.readInt16BE = function(e3, t2) {
            t2 || C(e3, 2, this.length);
            var r2 = this[e3 + 1] | this[e3] << 8;
            return 32768 & r2 ? 4294901760 | r2 : r2;
          }, u.prototype.readInt32LE = function(e3, t2) {
            return t2 || C(e3, 4, this.length), this[e3] | this[e3 + 1] << 8 | this[e3 + 2] << 16 | this[e3 + 3] << 24;
          }, u.prototype.readInt32BE = function(e3, t2) {
            return t2 || C(e3, 4, this.length), this[e3] << 24 | this[e3 + 1] << 16 | this[e3 + 2] << 8 | this[e3 + 3];
          }, u.prototype.readFloatLE = function(e3, t2) {
            return t2 || C(e3, 4, this.length), o.read(this, e3, true, 23, 4);
          }, u.prototype.readFloatBE = function(e3, t2) {
            return t2 || C(e3, 4, this.length), o.read(this, e3, false, 23, 4);
          }, u.prototype.readDoubleLE = function(e3, t2) {
            return t2 || C(e3, 8, this.length), o.read(this, e3, true, 52, 8);
          }, u.prototype.readDoubleBE = function(e3, t2) {
            return t2 || C(e3, 8, this.length), o.read(this, e3, false, 52, 8);
          }, u.prototype.writeUIntLE = function(e3, t2, r2, n2) {
            (e3 = +e3, t2 |= 0, r2 |= 0, n2) || x(this, e3, t2, r2, Math.pow(2, 8 * r2) - 1, 0);
            var o2 = 1, i2 = 0;
            for (this[t2] = 255 & e3; ++i2 < r2 && (o2 *= 256); )
              this[t2 + i2] = e3 / o2 & 255;
            return t2 + r2;
          }, u.prototype.writeUIntBE = function(e3, t2, r2, n2) {
            (e3 = +e3, t2 |= 0, r2 |= 0, n2) || x(this, e3, t2, r2, Math.pow(2, 8 * r2) - 1, 0);
            var o2 = r2 - 1, i2 = 1;
            for (this[t2 + o2] = 255 & e3; --o2 >= 0 && (i2 *= 256); )
              this[t2 + o2] = e3 / i2 & 255;
            return t2 + r2;
          }, u.prototype.writeUInt8 = function(e3, t2, r2) {
            return e3 = +e3, t2 |= 0, r2 || x(this, e3, t2, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e3 = Math.floor(e3)), this[t2] = 255 & e3, t2 + 1;
          }, u.prototype.writeUInt16LE = function(e3, t2, r2) {
            return e3 = +e3, t2 |= 0, r2 || x(this, e3, t2, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e3, this[t2 + 1] = e3 >>> 8) : I(this, e3, t2, true), t2 + 2;
          }, u.prototype.writeUInt16BE = function(e3, t2, r2) {
            return e3 = +e3, t2 |= 0, r2 || x(this, e3, t2, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t2] = e3 >>> 8, this[t2 + 1] = 255 & e3) : I(this, e3, t2, false), t2 + 2;
          }, u.prototype.writeUInt32LE = function(e3, t2, r2) {
            return e3 = +e3, t2 |= 0, r2 || x(this, e3, t2, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t2 + 3] = e3 >>> 24, this[t2 + 2] = e3 >>> 16, this[t2 + 1] = e3 >>> 8, this[t2] = 255 & e3) : N(this, e3, t2, true), t2 + 4;
          }, u.prototype.writeUInt32BE = function(e3, t2, r2) {
            return e3 = +e3, t2 |= 0, r2 || x(this, e3, t2, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t2] = e3 >>> 24, this[t2 + 1] = e3 >>> 16, this[t2 + 2] = e3 >>> 8, this[t2 + 3] = 255 & e3) : N(this, e3, t2, false), t2 + 4;
          }, u.prototype.writeIntLE = function(e3, t2, r2, n2) {
            if (e3 = +e3, t2 |= 0, !n2) {
              var o2 = Math.pow(2, 8 * r2 - 1);
              x(this, e3, t2, r2, o2 - 1, -o2);
            }
            var i2 = 0, s2 = 1, a2 = 0;
            for (this[t2] = 255 & e3; ++i2 < r2 && (s2 *= 256); )
              e3 < 0 && 0 === a2 && 0 !== this[t2 + i2 - 1] && (a2 = 1), this[t2 + i2] = (e3 / s2 >> 0) - a2 & 255;
            return t2 + r2;
          }, u.prototype.writeIntBE = function(e3, t2, r2, n2) {
            if (e3 = +e3, t2 |= 0, !n2) {
              var o2 = Math.pow(2, 8 * r2 - 1);
              x(this, e3, t2, r2, o2 - 1, -o2);
            }
            var i2 = r2 - 1, s2 = 1, a2 = 0;
            for (this[t2 + i2] = 255 & e3; --i2 >= 0 && (s2 *= 256); )
              e3 < 0 && 0 === a2 && 0 !== this[t2 + i2 + 1] && (a2 = 1), this[t2 + i2] = (e3 / s2 >> 0) - a2 & 255;
            return t2 + r2;
          }, u.prototype.writeInt8 = function(e3, t2, r2) {
            return e3 = +e3, t2 |= 0, r2 || x(this, e3, t2, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e3 = Math.floor(e3)), e3 < 0 && (e3 = 255 + e3 + 1), this[t2] = 255 & e3, t2 + 1;
          }, u.prototype.writeInt16LE = function(e3, t2, r2) {
            return e3 = +e3, t2 |= 0, r2 || x(this, e3, t2, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e3, this[t2 + 1] = e3 >>> 8) : I(this, e3, t2, true), t2 + 2;
          }, u.prototype.writeInt16BE = function(e3, t2, r2) {
            return e3 = +e3, t2 |= 0, r2 || x(this, e3, t2, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t2] = e3 >>> 8, this[t2 + 1] = 255 & e3) : I(this, e3, t2, false), t2 + 2;
          }, u.prototype.writeInt32LE = function(e3, t2, r2) {
            return e3 = +e3, t2 |= 0, r2 || x(this, e3, t2, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e3, this[t2 + 1] = e3 >>> 8, this[t2 + 2] = e3 >>> 16, this[t2 + 3] = e3 >>> 24) : N(this, e3, t2, true), t2 + 4;
          }, u.prototype.writeInt32BE = function(e3, t2, r2) {
            return e3 = +e3, t2 |= 0, r2 || x(this, e3, t2, 4, 2147483647, -2147483648), e3 < 0 && (e3 = 4294967295 + e3 + 1), u.TYPED_ARRAY_SUPPORT ? (this[t2] = e3 >>> 24, this[t2 + 1] = e3 >>> 16, this[t2 + 2] = e3 >>> 8, this[t2 + 3] = 255 & e3) : N(this, e3, t2, false), t2 + 4;
          }, u.prototype.writeFloatLE = function(e3, t2, r2) {
            return j(this, e3, t2, true, r2);
          }, u.prototype.writeFloatBE = function(e3, t2, r2) {
            return j(this, e3, t2, false, r2);
          }, u.prototype.writeDoubleLE = function(e3, t2, r2) {
            return F(this, e3, t2, true, r2);
          }, u.prototype.writeDoubleBE = function(e3, t2, r2) {
            return F(this, e3, t2, false, r2);
          }, u.prototype.copy = function(e3, t2, r2, n2) {
            if (r2 || (r2 = 0), n2 || 0 === n2 || (n2 = this.length), t2 >= e3.length && (t2 = e3.length), t2 || (t2 = 0), n2 > 0 && n2 < r2 && (n2 = r2), n2 === r2)
              return 0;
            if (0 === e3.length || 0 === this.length)
              return 0;
            if (t2 < 0)
              throw new RangeError("targetStart out of bounds");
            if (r2 < 0 || r2 >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (n2 < 0)
              throw new RangeError("sourceEnd out of bounds");
            n2 > this.length && (n2 = this.length), e3.length - t2 < n2 - r2 && (n2 = e3.length - t2 + r2);
            var o2, i2 = n2 - r2;
            if (this === e3 && r2 < t2 && t2 < n2)
              for (o2 = i2 - 1; o2 >= 0; --o2)
                e3[o2 + t2] = this[o2 + r2];
            else if (i2 < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (o2 = 0; o2 < i2; ++o2)
                e3[o2 + t2] = this[o2 + r2];
            else
              Uint8Array.prototype.set.call(e3, this.subarray(r2, r2 + i2), t2);
            return i2;
          }, u.prototype.fill = function(e3, t2, r2, n2) {
            if ("string" == typeof e3) {
              if ("string" == typeof t2 ? (n2 = t2, t2 = 0, r2 = this.length) : "string" == typeof r2 && (n2 = r2, r2 = this.length), 1 === e3.length) {
                var o2 = e3.charCodeAt(0);
                o2 < 256 && (e3 = o2);
              }
              if (void 0 !== n2 && "string" != typeof n2)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof n2 && !u.isEncoding(n2))
                throw new TypeError("Unknown encoding: " + n2);
            } else
              "number" == typeof e3 && (e3 &= 255);
            if (t2 < 0 || this.length < t2 || this.length < r2)
              throw new RangeError("Out of range index");
            if (r2 <= t2)
              return this;
            var i2;
            if (t2 >>>= 0, r2 = void 0 === r2 ? this.length : r2 >>> 0, e3 || (e3 = 0), "number" == typeof e3)
              for (i2 = t2; i2 < r2; ++i2)
                this[i2] = e3;
            else {
              var s2 = u.isBuffer(e3) ? e3 : B(new u(e3, n2).toString()), a2 = s2.length;
              for (i2 = 0; i2 < r2 - t2; ++i2)
                this[i2 + t2] = s2[i2 % a2];
            }
            return this;
          };
          var D = /[^+\/0-9A-Za-z-_]/g;
          function L(e3) {
            return e3 < 16 ? "0" + e3.toString(16) : e3.toString(16);
          }
          function B(e3, t2) {
            var r2;
            t2 = t2 || 1 / 0;
            for (var n2 = e3.length, o2 = null, i2 = [], s2 = 0; s2 < n2; ++s2) {
              if ((r2 = e3.charCodeAt(s2)) > 55295 && r2 < 57344) {
                if (!o2) {
                  if (r2 > 56319) {
                    (t2 -= 3) > -1 && i2.push(239, 191, 189);
                    continue;
                  }
                  if (s2 + 1 === n2) {
                    (t2 -= 3) > -1 && i2.push(239, 191, 189);
                    continue;
                  }
                  o2 = r2;
                  continue;
                }
                if (r2 < 56320) {
                  (t2 -= 3) > -1 && i2.push(239, 191, 189), o2 = r2;
                  continue;
                }
                r2 = 65536 + (o2 - 55296 << 10 | r2 - 56320);
              } else
                o2 && (t2 -= 3) > -1 && i2.push(239, 191, 189);
              if (o2 = null, r2 < 128) {
                if ((t2 -= 1) < 0)
                  break;
                i2.push(r2);
              } else if (r2 < 2048) {
                if ((t2 -= 2) < 0)
                  break;
                i2.push(r2 >> 6 | 192, 63 & r2 | 128);
              } else if (r2 < 65536) {
                if ((t2 -= 3) < 0)
                  break;
                i2.push(r2 >> 12 | 224, r2 >> 6 & 63 | 128, 63 & r2 | 128);
              } else {
                if (!(r2 < 1114112))
                  throw new Error("Invalid code point");
                if ((t2 -= 4) < 0)
                  break;
                i2.push(r2 >> 18 | 240, r2 >> 12 & 63 | 128, r2 >> 6 & 63 | 128, 63 & r2 | 128);
              }
            }
            return i2;
          }
          function q(e3) {
            return n.toByteArray(function(e4) {
              if ((e4 = function(e5) {
                return e5.trim ? e5.trim() : e5.replace(/^\s+|\s+$/g, "");
              }(e4).replace(D, "")).length < 2)
                return "";
              for (; e4.length % 4 != 0; )
                e4 += "=";
              return e4;
            }(e3));
          }
          function J(e3, t2, r2, n2) {
            for (var o2 = 0; o2 < n2 && !(o2 + r2 >= t2.length || o2 >= e3.length); ++o2)
              t2[o2 + r2] = e3[o2];
            return o2;
          }
        }).call(this, r(6));
      }, function(e, t, r) {
        "use strict";
        t.byteLength = function(e2) {
          var t2 = c(e2), r2 = t2[0], n2 = t2[1];
          return 3 * (r2 + n2) / 4 - n2;
        }, t.toByteArray = function(e2) {
          var t2, r2, n2 = c(e2), s2 = n2[0], a2 = n2[1], u2 = new i(function(e3, t3, r3) {
            return 3 * (t3 + r3) / 4 - r3;
          }(0, s2, a2)), h2 = 0, l = a2 > 0 ? s2 - 4 : s2;
          for (r2 = 0; r2 < l; r2 += 4)
            t2 = o[e2.charCodeAt(r2)] << 18 | o[e2.charCodeAt(r2 + 1)] << 12 | o[e2.charCodeAt(r2 + 2)] << 6 | o[e2.charCodeAt(r2 + 3)], u2[h2++] = t2 >> 16 & 255, u2[h2++] = t2 >> 8 & 255, u2[h2++] = 255 & t2;
          2 === a2 && (t2 = o[e2.charCodeAt(r2)] << 2 | o[e2.charCodeAt(r2 + 1)] >> 4, u2[h2++] = 255 & t2);
          1 === a2 && (t2 = o[e2.charCodeAt(r2)] << 10 | o[e2.charCodeAt(r2 + 1)] << 4 | o[e2.charCodeAt(r2 + 2)] >> 2, u2[h2++] = t2 >> 8 & 255, u2[h2++] = 255 & t2);
          return u2;
        }, t.fromByteArray = function(e2) {
          for (var t2, r2 = e2.length, o2 = r2 % 3, i2 = [], s2 = 0, a2 = r2 - o2; s2 < a2; s2 += 16383)
            i2.push(h(e2, s2, s2 + 16383 > a2 ? a2 : s2 + 16383));
          1 === o2 ? (t2 = e2[r2 - 1], i2.push(n[t2 >> 2] + n[t2 << 4 & 63] + "==")) : 2 === o2 && (t2 = (e2[r2 - 2] << 8) + e2[r2 - 1], i2.push(n[t2 >> 10] + n[t2 >> 4 & 63] + n[t2 << 2 & 63] + "="));
          return i2.join("");
        };
        for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a)
          n[a] = s[a], o[s.charCodeAt(a)] = a;
        function c(e2) {
          var t2 = e2.length;
          if (t2 % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var r2 = e2.indexOf("=");
          return -1 === r2 && (r2 = t2), [r2, r2 === t2 ? 0 : 4 - r2 % 4];
        }
        function h(e2, t2, r2) {
          for (var o2, i2, s2 = [], a2 = t2; a2 < r2; a2 += 3)
            o2 = (e2[a2] << 16 & 16711680) + (e2[a2 + 1] << 8 & 65280) + (255 & e2[a2 + 2]), s2.push(n[(i2 = o2) >> 18 & 63] + n[i2 >> 12 & 63] + n[i2 >> 6 & 63] + n[63 & i2]);
          return s2.join("");
        }
        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
      }, function(e, t) {
        t.read = function(e2, t2, r, n, o) {
          var i, s, a = 8 * o - n - 1, u = (1 << a) - 1, c = u >> 1, h = -7, l = r ? o - 1 : 0, d = r ? -1 : 1, f = e2[t2 + l];
          for (l += d, i = f & (1 << -h) - 1, f >>= -h, h += a; h > 0; i = 256 * i + e2[t2 + l], l += d, h -= 8)
            ;
          for (s = i & (1 << -h) - 1, i >>= -h, h += n; h > 0; s = 256 * s + e2[t2 + l], l += d, h -= 8)
            ;
          if (0 === i)
            i = 1 - c;
          else {
            if (i === u)
              return s ? NaN : 1 / 0 * (f ? -1 : 1);
            s += Math.pow(2, n), i -= c;
          }
          return (f ? -1 : 1) * s * Math.pow(2, i - n);
        }, t.write = function(e2, t2, r, n, o, i) {
          var s, a, u, c = 8 * i - o - 1, h = (1 << c) - 1, l = h >> 1, d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = n ? 0 : i - 1, p = n ? 1 : -1, m = t2 < 0 || 0 === t2 && 1 / t2 < 0 ? 1 : 0;
          for (t2 = Math.abs(t2), isNaN(t2) || t2 === 1 / 0 ? (a = isNaN(t2) ? 1 : 0, s = h) : (s = Math.floor(Math.log(t2) / Math.LN2), t2 * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t2 += s + l >= 1 ? d / u : d * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= h ? (a = 0, s = h) : s + l >= 1 ? (a = (t2 * u - 1) * Math.pow(2, o), s += l) : (a = t2 * Math.pow(2, l - 1) * Math.pow(2, o), s = 0)); o >= 8; e2[r + f] = 255 & a, f += p, a /= 256, o -= 8)
            ;
          for (s = s << o | a, c += o; c > 0; e2[r + f] = 255 & s, f += p, s /= 256, c -= 8)
            ;
          e2[r + f - p] |= 128 * m;
        };
      }, function(e, t) {
        var r = {}.toString;
        e.exports = Array.isArray || function(e2) {
          return "[object Array]" == r.call(e2);
        };
      }, function(e, t, r) {
        var n, o, i;
        o = [], void 0 === (i = "function" == typeof (n = function() {
          var e2, t2, r2, n2;
          Object.keys || (Object.keys = (e2 = Object.prototype.hasOwnProperty, t2 = !{ toString: null }.propertyIsEnumerable("toString"), n2 = (r2 = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function(o3) {
            if ("object" != typeof o3 && "function" != typeof o3 || null === o3)
              throw new TypeError("Object.keys called on non-object");
            var i3 = [];
            for (var s2 in o3)
              e2.call(o3, s2) && i3.push(s2);
            if (t2)
              for (var a2 = 0; a2 < n2; a2++)
                e2.call(o3, r2[a2]) && i3.push(r2[a2]);
            return i3;
          })), Object.create || (Object.create = function() {
            function e3() {
            }
            return function(t3) {
              if (1 !== arguments.length)
                throw new Error("Object.create implementation only accepts one parameter.");
              return e3.prototype = t3, new e3();
            };
          }()), Array.isArray || (Array.isArray = function(e3) {
            return "[object Array]" === Object.prototype.toString.call(e3);
          }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e3) {
            if (null === this)
              throw new TypeError();
            var t3 = Object(this), r3 = t3.length >>> 0;
            if (0 === r3)
              return -1;
            var n3 = 0;
            if (arguments.length > 1 && ((n3 = Number(arguments[1])) != n3 ? n3 = 0 : 0 !== n3 && n3 !== 1 / 0 && n3 !== -1 / 0 && (n3 = (n3 > 0 || -1) * Math.floor(Math.abs(n3)))), n3 >= r3)
              return -1;
            for (var o3 = n3 >= 0 ? n3 : Math.max(r3 - Math.abs(n3), 0); o3 < r3; o3++)
              if (o3 in t3 && t3[o3] === e3)
                return o3;
            return -1;
          }), Object.isFrozen || (Object.isFrozen = function(e3) {
            for (var t3 = "tv4_test_frozen_key"; e3.hasOwnProperty(t3); )
              t3 += Math.random();
            try {
              return e3[t3] = true, delete e3[t3], false;
            } catch (e4) {
              return true;
            }
          });
          var o2 = { "+": true, "#": true, ".": true, "/": true, ";": true, "?": true, "&": true }, i2 = { "*": true };
          function s(e3) {
            return encodeURI(e3).replace(/%25[0-9][0-9]/g, function(e4) {
              return "%" + e4.substring(3);
            });
          }
          function a(e3) {
            var t3 = "";
            o2[e3.charAt(0)] && (t3 = e3.charAt(0), e3 = e3.substring(1));
            var r3 = "", n3 = "", a2 = true, u2 = false, c2 = false;
            "+" === t3 ? a2 = false : "." === t3 ? (n3 = ".", r3 = ".") : "/" === t3 ? (n3 = "/", r3 = "/") : "#" === t3 ? (n3 = "#", a2 = false) : ";" === t3 ? (n3 = ";", r3 = ";", u2 = true, c2 = true) : "?" === t3 ? (n3 = "?", r3 = "&", u2 = true) : "&" === t3 && (n3 = "&", r3 = "&", u2 = true);
            for (var h2 = [], l2 = e3.split(","), d2 = [], f2 = {}, p2 = 0; p2 < l2.length; p2++) {
              var m2 = l2[p2], g2 = null;
              if (-1 !== m2.indexOf(":")) {
                var y2 = m2.split(":");
                m2 = y2[0], g2 = parseInt(y2[1], 10);
              }
              for (var v2 = {}; i2[m2.charAt(m2.length - 1)]; )
                v2[m2.charAt(m2.length - 1)] = true, m2 = m2.substring(0, m2.length - 1);
              var _2 = { truncate: g2, name: m2, suffices: v2 };
              d2.push(_2), f2[m2] = _2, h2.push(m2);
            }
            var b2 = function(e4) {
              for (var t4 = "", o3 = 0, i3 = 0; i3 < d2.length; i3++) {
                var h3 = d2[i3], l3 = e4(h3.name);
                if (null == l3 || Array.isArray(l3) && 0 === l3.length || "object" == typeof l3 && 0 === Object.keys(l3).length)
                  o3++;
                else if (t4 += i3 === o3 ? n3 : r3 || ",", Array.isArray(l3)) {
                  u2 && (t4 += h3.name + "=");
                  for (var f3 = 0; f3 < l3.length; f3++)
                    f3 > 0 && (t4 += h3.suffices["*"] && r3 || ",", h3.suffices["*"] && u2 && (t4 += h3.name + "=")), t4 += a2 ? encodeURIComponent(l3[f3]).replace(/!/g, "%21") : s(l3[f3]);
                } else if ("object" == typeof l3) {
                  u2 && !h3.suffices["*"] && (t4 += h3.name + "=");
                  var p3 = true;
                  for (var m3 in l3)
                    p3 || (t4 += h3.suffices["*"] && r3 || ","), p3 = false, t4 += a2 ? encodeURIComponent(m3).replace(/!/g, "%21") : s(m3), t4 += h3.suffices["*"] ? "=" : ",", t4 += a2 ? encodeURIComponent(l3[m3]).replace(/!/g, "%21") : s(l3[m3]);
                } else
                  u2 && (t4 += h3.name, c2 && "" === l3 || (t4 += "=")), null != h3.truncate && (l3 = l3.substring(0, h3.truncate)), t4 += a2 ? encodeURIComponent(l3).replace(/!/g, "%21") : s(l3);
              }
              return t4;
            };
            return b2.varNames = h2, { prefix: n3, substitution: b2 };
          }
          function u(e3) {
            if (!(this instanceof u))
              return new u(e3);
            for (var t3 = e3.split("{"), r3 = [t3.shift()], n3 = [], o3 = [], i3 = []; t3.length > 0; ) {
              var s2 = t3.shift(), c2 = s2.split("}")[0], h2 = s2.substring(c2.length + 1), l2 = a(c2);
              o3.push(l2.substitution), n3.push(l2.prefix), r3.push(h2), i3 = i3.concat(l2.substitution.varNames);
            }
            this.fill = function(e4) {
              for (var t4 = r3[0], n4 = 0; n4 < o3.length; n4++)
                t4 += (0, o3[n4])(e4), t4 += r3[n4 + 1];
              return t4;
            }, this.varNames = i3, this.template = e3;
          }
          u.prototype = { toString: function() {
            return this.template;
          }, fillFromObject: function(e3) {
            return this.fill(function(t3) {
              return e3[t3];
            });
          } };
          var c = function(e3, t3, r3, n3, o3) {
            if (this.missing = [], this.missingMap = {}, this.formatValidators = e3 ? Object.create(e3.formatValidators) : {}, this.schemas = e3 ? Object.create(e3.schemas) : {}, this.collectMultiple = t3, this.errors = [], this.handleError = t3 ? this.collectError : this.returnError, n3 && (this.checkRecursive = true, this.scanned = [], this.scannedFrozen = [], this.scannedFrozenSchemas = [], this.scannedFrozenValidationErrors = [], this.validatedSchemasKey = "tv4_validation_id", this.validationErrorsKey = "tv4_validation_errors_id"), o3 && (this.trackUnknownProperties = true, this.knownPropertyPaths = {}, this.unknownPropertyPaths = {}), this.errorReporter = r3 || y("en"), "string" == typeof this.errorReporter)
              throw new Error("debug");
            if (this.definedKeywords = {}, e3)
              for (var i3 in e3.definedKeywords)
                this.definedKeywords[i3] = e3.definedKeywords[i3].slice(0);
          };
          function h(e3, t3) {
            if (e3 === t3)
              return true;
            if (e3 && t3 && "object" == typeof e3 && "object" == typeof t3) {
              if (Array.isArray(e3) !== Array.isArray(t3))
                return false;
              if (Array.isArray(e3)) {
                if (e3.length !== t3.length)
                  return false;
                for (var r3 = 0; r3 < e3.length; r3++)
                  if (!h(e3[r3], t3[r3]))
                    return false;
              } else {
                var n3;
                for (n3 in e3)
                  if (void 0 === t3[n3] && void 0 !== e3[n3])
                    return false;
                for (n3 in t3)
                  if (void 0 === e3[n3] && void 0 !== t3[n3])
                    return false;
                for (n3 in e3)
                  if (!h(e3[n3], t3[n3]))
                    return false;
              }
              return true;
            }
            return false;
          }
          c.prototype.defineKeyword = function(e3, t3) {
            this.definedKeywords[e3] = this.definedKeywords[e3] || [], this.definedKeywords[e3].push(t3);
          }, c.prototype.createError = function(e3, t3, r3, n3, o3, i3, s2) {
            var a2 = new P(e3, t3, r3, n3, o3);
            return a2.message = this.errorReporter(a2, i3, s2), a2;
          }, c.prototype.returnError = function(e3) {
            return e3;
          }, c.prototype.collectError = function(e3) {
            return e3 && this.errors.push(e3), null;
          }, c.prototype.prefixErrors = function(e3, t3, r3) {
            for (var n3 = e3; n3 < this.errors.length; n3++)
              this.errors[n3] = this.errors[n3].prefixWith(t3, r3);
            return this;
          }, c.prototype.banUnknownProperties = function(e3, t3) {
            for (var r3 in this.unknownPropertyPaths) {
              var n3 = this.createError(v.UNKNOWN_PROPERTY, { path: r3 }, r3, "", null, e3, t3), o3 = this.handleError(n3);
              if (o3)
                return o3;
            }
            return null;
          }, c.prototype.addFormat = function(e3, t3) {
            if ("object" == typeof e3) {
              for (var r3 in e3)
                this.addFormat(r3, e3[r3]);
              return this;
            }
            this.formatValidators[e3] = t3;
          }, c.prototype.resolveRefs = function(e3, t3) {
            if (void 0 !== e3.$ref) {
              if ((t3 = t3 || {})[e3.$ref])
                return this.createError(v.CIRCULAR_REFERENCE, { urls: Object.keys(t3).join(", ") }, "", "", null, void 0, e3);
              t3[e3.$ref] = true, e3 = this.getSchema(e3.$ref, t3);
            }
            return e3;
          }, c.prototype.getSchema = function(e3, t3) {
            var r3;
            if (void 0 !== this.schemas[e3])
              return r3 = this.schemas[e3], this.resolveRefs(r3, t3);
            var n3 = e3, o3 = "";
            if (-1 !== e3.indexOf("#") && (o3 = e3.substring(e3.indexOf("#") + 1), n3 = e3.substring(0, e3.indexOf("#"))), "object" == typeof this.schemas[n3]) {
              r3 = this.schemas[n3];
              var i3 = decodeURIComponent(o3);
              if ("" === i3)
                return this.resolveRefs(r3, t3);
              if ("/" !== i3.charAt(0))
                return;
              for (var s2 = i3.split("/").slice(1), a2 = 0; a2 < s2.length; a2++) {
                var u2 = s2[a2].replace(/~1/g, "/").replace(/~0/g, "~");
                if (void 0 === r3[u2]) {
                  r3 = void 0;
                  break;
                }
                r3 = r3[u2];
              }
              if (void 0 !== r3)
                return this.resolveRefs(r3, t3);
            }
            void 0 === this.missing[n3] && (this.missing.push(n3), this.missing[n3] = n3, this.missingMap[n3] = n3);
          }, c.prototype.searchSchemas = function(e3, t3) {
            if (Array.isArray(e3))
              for (var r3 = 0; r3 < e3.length; r3++)
                this.searchSchemas(e3[r3], t3);
            else if (e3 && "object" == typeof e3) {
              for (var n3 in "string" == typeof e3.id && function(e4, t4) {
                if (t4.substring(0, e4.length) === e4) {
                  var r4 = t4.substring(e4.length);
                  if (t4.length > 0 && "/" === t4.charAt(e4.length - 1) || "#" === r4.charAt(0) || "?" === r4.charAt(0))
                    return true;
                }
                return false;
              }(t3, e3.id) && void 0 === this.schemas[e3.id] && (this.schemas[e3.id] = e3), e3)
                if ("enum" !== n3) {
                  if ("object" == typeof e3[n3])
                    this.searchSchemas(e3[n3], t3);
                  else if ("$ref" === n3) {
                    var o3 = m(e3[n3]);
                    o3 && void 0 === this.schemas[o3] && void 0 === this.missingMap[o3] && (this.missingMap[o3] = o3);
                  }
                }
            }
          }, c.prototype.addSchema = function(e3, t3) {
            if ("string" != typeof e3 || void 0 === t3) {
              if ("object" != typeof e3 || "string" != typeof e3.id)
                return;
              e3 = (t3 = e3).id;
            }
            e3 === m(e3) + "#" && (e3 = m(e3)), this.schemas[e3] = t3, delete this.missingMap[e3], g(t3, e3), this.searchSchemas(t3, e3);
          }, c.prototype.getSchemaMap = function() {
            var e3 = {};
            for (var t3 in this.schemas)
              e3[t3] = this.schemas[t3];
            return e3;
          }, c.prototype.getSchemaUris = function(e3) {
            var t3 = [];
            for (var r3 in this.schemas)
              e3 && !e3.test(r3) || t3.push(r3);
            return t3;
          }, c.prototype.getMissingUris = function(e3) {
            var t3 = [];
            for (var r3 in this.missingMap)
              e3 && !e3.test(r3) || t3.push(r3);
            return t3;
          }, c.prototype.dropSchemas = function() {
            this.schemas = {}, this.reset();
          }, c.prototype.reset = function() {
            this.missing = [], this.missingMap = {}, this.errors = [];
          }, c.prototype.validateAll = function(e3, t3, r3, n3, o3) {
            var i3;
            if (!(t3 = this.resolveRefs(t3)))
              return null;
            if (t3 instanceof P)
              return this.errors.push(t3), t3;
            var s2, a2 = this.errors.length, u2 = null, c2 = null;
            if (this.checkRecursive && e3 && "object" == typeof e3) {
              if (i3 = !this.scanned.length, e3[this.validatedSchemasKey]) {
                var h2 = e3[this.validatedSchemasKey].indexOf(t3);
                if (-1 !== h2)
                  return this.errors = this.errors.concat(e3[this.validationErrorsKey][h2]), null;
              }
              if (Object.isFrozen(e3) && -1 !== (s2 = this.scannedFrozen.indexOf(e3))) {
                var l2 = this.scannedFrozenSchemas[s2].indexOf(t3);
                if (-1 !== l2)
                  return this.errors = this.errors.concat(this.scannedFrozenValidationErrors[s2][l2]), null;
              }
              if (this.scanned.push(e3), Object.isFrozen(e3))
                -1 === s2 && (s2 = this.scannedFrozen.length, this.scannedFrozen.push(e3), this.scannedFrozenSchemas.push([])), u2 = this.scannedFrozenSchemas[s2].length, this.scannedFrozenSchemas[s2][u2] = t3, this.scannedFrozenValidationErrors[s2][u2] = [];
              else {
                if (!e3[this.validatedSchemasKey])
                  try {
                    Object.defineProperty(e3, this.validatedSchemasKey, { value: [], configurable: true }), Object.defineProperty(e3, this.validationErrorsKey, { value: [], configurable: true });
                  } catch (t4) {
                    e3[this.validatedSchemasKey] = [], e3[this.validationErrorsKey] = [];
                  }
                c2 = e3[this.validatedSchemasKey].length, e3[this.validatedSchemasKey][c2] = t3, e3[this.validationErrorsKey][c2] = [];
              }
            }
            var d2 = this.errors.length, f2 = this.validateBasic(e3, t3, o3) || this.validateNumeric(e3, t3, o3) || this.validateString(e3, t3, o3) || this.validateArray(e3, t3, o3) || this.validateObject(e3, t3, o3) || this.validateCombinations(e3, t3, o3) || this.validateHypermedia(e3, t3, o3) || this.validateFormat(e3, t3, o3) || this.validateDefinedKeywords(e3, t3, o3) || null;
            if (i3) {
              for (; this.scanned.length; )
                delete this.scanned.pop()[this.validatedSchemasKey];
              this.scannedFrozen = [], this.scannedFrozenSchemas = [];
            }
            if (f2 || d2 !== this.errors.length)
              for (; r3 && r3.length || n3 && n3.length; ) {
                var p2 = r3 && r3.length ? "" + r3.pop() : null, m2 = n3 && n3.length ? "" + n3.pop() : null;
                f2 && (f2 = f2.prefixWith(p2, m2)), this.prefixErrors(d2, p2, m2);
              }
            return null !== u2 ? this.scannedFrozenValidationErrors[s2][u2] = this.errors.slice(a2) : null !== c2 && (e3[this.validationErrorsKey][c2] = this.errors.slice(a2)), this.handleError(f2);
          }, c.prototype.validateFormat = function(e3, t3) {
            if ("string" != typeof t3.format || !this.formatValidators[t3.format])
              return null;
            var r3 = this.formatValidators[t3.format].call(null, e3, t3);
            return "string" == typeof r3 || "number" == typeof r3 ? this.createError(v.FORMAT_CUSTOM, { message: r3 }, "", "/format", null, e3, t3) : r3 && "object" == typeof r3 ? this.createError(v.FORMAT_CUSTOM, { message: r3.message || "?" }, r3.dataPath || "", r3.schemaPath || "/format", null, e3, t3) : null;
          }, c.prototype.validateDefinedKeywords = function(e3, t3, r3) {
            for (var n3 in this.definedKeywords)
              if (void 0 !== t3[n3])
                for (var o3 = this.definedKeywords[n3], i3 = 0; i3 < o3.length; i3++) {
                  var s2 = (0, o3[i3])(e3, t3[n3], t3, r3);
                  if ("string" == typeof s2 || "number" == typeof s2)
                    return this.createError(v.KEYWORD_CUSTOM, { key: n3, message: s2 }, "", "", null, e3, t3).prefixWith(null, n3);
                  if (s2 && "object" == typeof s2) {
                    var a2 = s2.code;
                    if ("string" == typeof a2) {
                      if (!v[a2])
                        throw new Error("Undefined error code (use defineError): " + a2);
                      a2 = v[a2];
                    } else
                      "number" != typeof a2 && (a2 = v.KEYWORD_CUSTOM);
                    var u2 = "object" == typeof s2.message ? s2.message : { key: n3, message: s2.message || "?" }, c2 = s2.schemaPath || "/" + n3.replace(/~/g, "~0").replace(/\//g, "~1");
                    return this.createError(a2, u2, s2.dataPath || null, c2, null, e3, t3);
                  }
                }
            return null;
          }, c.prototype.validateBasic = function(e3, t3, r3) {
            var n3;
            return (n3 = this.validateType(e3, t3, r3)) || (n3 = this.validateEnum(e3, t3, r3)) ? n3.prefixWith(null, "type") : null;
          }, c.prototype.validateType = function(e3, t3) {
            if (void 0 === t3.type)
              return null;
            var r3 = typeof e3;
            null === e3 ? r3 = "null" : Array.isArray(e3) && (r3 = "array");
            var n3 = t3.type;
            Array.isArray(n3) || (n3 = [n3]);
            for (var o3 = 0; o3 < n3.length; o3++) {
              var i3 = n3[o3];
              if (i3 === r3 || "integer" === i3 && "number" === r3 && e3 % 1 == 0)
                return null;
            }
            return this.createError(v.INVALID_TYPE, { type: r3, expected: n3.join("/") }, "", "", null, e3, t3);
          }, c.prototype.validateEnum = function(e3, t3) {
            if (void 0 === t3.enum)
              return null;
            for (var r3 = 0; r3 < t3.enum.length; r3++)
              if (h(e3, t3.enum[r3]))
                return null;
            return this.createError(v.ENUM_MISMATCH, { value: "undefined" != typeof JSON ? JSON.stringify(e3) : e3 }, "", "", null, e3, t3);
          }, c.prototype.validateNumeric = function(e3, t3, r3) {
            return this.validateMultipleOf(e3, t3, r3) || this.validateMinMax(e3, t3, r3) || this.validateNaN(e3, t3, r3) || null;
          };
          var l = Math.pow(2, -51), d = 1 - l;
          function f(e3) {
            var t3 = String(e3).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
            return t3 ? { href: t3[0] || "", protocol: t3[1] || "", authority: t3[2] || "", host: t3[3] || "", hostname: t3[4] || "", port: t3[5] || "", pathname: t3[6] || "", search: t3[7] || "", hash: t3[8] || "" } : null;
          }
          function p(e3, t3) {
            return t3 = f(t3 || ""), e3 = f(e3 || ""), t3 && e3 ? (t3.protocol || e3.protocol) + (t3.protocol || t3.authority ? t3.authority : e3.authority) + (r3 = t3.protocol || t3.authority || "/" === t3.pathname.charAt(0) ? t3.pathname : t3.pathname ? (e3.authority && !e3.pathname ? "/" : "") + e3.pathname.slice(0, e3.pathname.lastIndexOf("/") + 1) + t3.pathname : e3.pathname, n3 = [], r3.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function(e4) {
              "/.." === e4 ? n3.pop() : n3.push(e4);
            }), n3.join("").replace(/^\//, "/" === r3.charAt(0) ? "/" : "")) + (t3.protocol || t3.authority || t3.pathname ? t3.search : t3.search || e3.search) + t3.hash : null;
            var r3, n3;
          }
          function m(e3) {
            return e3.split("#")[0];
          }
          function g(e3, t3) {
            if (e3 && "object" == typeof e3)
              if (void 0 === t3 ? t3 = e3.id : "string" == typeof e3.id && (t3 = p(t3, e3.id), e3.id = t3), Array.isArray(e3))
                for (var r3 = 0; r3 < e3.length; r3++)
                  g(e3[r3], t3);
              else
                for (var n3 in "string" == typeof e3.$ref && (e3.$ref = p(t3, e3.$ref)), e3)
                  "enum" !== n3 && g(e3[n3], t3);
          }
          function y(e3) {
            var t3 = E[e3 = e3 || "en"];
            return function(e4) {
              var r3 = t3[e4.code] || w[e4.code];
              if ("string" != typeof r3)
                return "Unknown error code " + e4.code + ": " + JSON.stringify(e4.messageParams);
              var n3 = e4.params;
              return r3.replace(/\{([^{}]*)\}/g, function(e5, t4) {
                var r4 = n3[t4];
                return "string" == typeof r4 || "number" == typeof r4 ? r4 : e5;
              });
            };
          }
          c.prototype.validateMultipleOf = function(e3, t3) {
            var r3 = t3.multipleOf || t3.divisibleBy;
            if (void 0 === r3)
              return null;
            if ("number" == typeof e3) {
              var n3 = e3 / r3 % 1;
              if (n3 >= l && n3 < d)
                return this.createError(v.NUMBER_MULTIPLE_OF, { value: e3, multipleOf: r3 }, "", "", null, e3, t3);
            }
            return null;
          }, c.prototype.validateMinMax = function(e3, t3) {
            if ("number" != typeof e3)
              return null;
            if (void 0 !== t3.minimum) {
              if (e3 < t3.minimum)
                return this.createError(v.NUMBER_MINIMUM, { value: e3, minimum: t3.minimum }, "", "/minimum", null, e3, t3);
              if (t3.exclusiveMinimum && e3 === t3.minimum)
                return this.createError(v.NUMBER_MINIMUM_EXCLUSIVE, { value: e3, minimum: t3.minimum }, "", "/exclusiveMinimum", null, e3, t3);
            }
            if (void 0 !== t3.maximum) {
              if (e3 > t3.maximum)
                return this.createError(v.NUMBER_MAXIMUM, { value: e3, maximum: t3.maximum }, "", "/maximum", null, e3, t3);
              if (t3.exclusiveMaximum && e3 === t3.maximum)
                return this.createError(v.NUMBER_MAXIMUM_EXCLUSIVE, { value: e3, maximum: t3.maximum }, "", "/exclusiveMaximum", null, e3, t3);
            }
            return null;
          }, c.prototype.validateNaN = function(e3, t3) {
            return "number" != typeof e3 ? null : true === isNaN(e3) || e3 === 1 / 0 || e3 === -1 / 0 ? this.createError(v.NUMBER_NOT_A_NUMBER, { value: e3 }, "", "/type", null, e3, t3) : null;
          }, c.prototype.validateString = function(e3, t3, r3) {
            return this.validateStringLength(e3, t3, r3) || this.validateStringPattern(e3, t3, r3) || null;
          }, c.prototype.validateStringLength = function(e3, t3) {
            return "string" != typeof e3 ? null : void 0 !== t3.minLength && e3.length < t3.minLength ? this.createError(v.STRING_LENGTH_SHORT, { length: e3.length, minimum: t3.minLength }, "", "/minLength", null, e3, t3) : void 0 !== t3.maxLength && e3.length > t3.maxLength ? this.createError(v.STRING_LENGTH_LONG, { length: e3.length, maximum: t3.maxLength }, "", "/maxLength", null, e3, t3) : null;
          }, c.prototype.validateStringPattern = function(e3, t3) {
            if ("string" != typeof e3 || "string" != typeof t3.pattern && !(t3.pattern instanceof RegExp))
              return null;
            var r3;
            if (t3.pattern instanceof RegExp)
              r3 = t3.pattern;
            else {
              var n3, o3 = "", i3 = t3.pattern.match(/^\/(.+)\/([img]*)$/);
              i3 ? (n3 = i3[1], o3 = i3[2]) : n3 = t3.pattern, r3 = new RegExp(n3, o3);
            }
            return r3.test(e3) ? null : this.createError(v.STRING_PATTERN, { pattern: t3.pattern }, "", "/pattern", null, e3, t3);
          }, c.prototype.validateArray = function(e3, t3, r3) {
            return Array.isArray(e3) && (this.validateArrayLength(e3, t3, r3) || this.validateArrayUniqueItems(e3, t3, r3) || this.validateArrayItems(e3, t3, r3)) || null;
          }, c.prototype.validateArrayLength = function(e3, t3) {
            var r3;
            return void 0 !== t3.minItems && e3.length < t3.minItems && (r3 = this.createError(v.ARRAY_LENGTH_SHORT, { length: e3.length, minimum: t3.minItems }, "", "/minItems", null, e3, t3), this.handleError(r3)) || void 0 !== t3.maxItems && e3.length > t3.maxItems && (r3 = this.createError(v.ARRAY_LENGTH_LONG, { length: e3.length, maximum: t3.maxItems }, "", "/maxItems", null, e3, t3), this.handleError(r3)) ? r3 : null;
          }, c.prototype.validateArrayUniqueItems = function(e3, t3) {
            if (t3.uniqueItems) {
              for (var r3 = 0; r3 < e3.length; r3++)
                for (var n3 = r3 + 1; n3 < e3.length; n3++)
                  if (h(e3[r3], e3[n3])) {
                    var o3 = this.createError(v.ARRAY_UNIQUE, { match1: r3, match2: n3 }, "", "/uniqueItems", null, e3, t3);
                    if (this.handleError(o3))
                      return o3;
                  }
            }
            return null;
          }, c.prototype.validateArrayItems = function(e3, t3, r3) {
            if (void 0 === t3.items)
              return null;
            var n3, o3;
            if (Array.isArray(t3.items)) {
              for (o3 = 0; o3 < e3.length; o3++)
                if (o3 < t3.items.length) {
                  if (n3 = this.validateAll(e3[o3], t3.items[o3], [o3], ["items", o3], r3 + "/" + o3))
                    return n3;
                } else if (void 0 !== t3.additionalItems) {
                  if ("boolean" == typeof t3.additionalItems) {
                    if (!t3.additionalItems && (n3 = this.createError(v.ARRAY_ADDITIONAL_ITEMS, {}, "/" + o3, "/additionalItems", null, e3, t3), this.handleError(n3)))
                      return n3;
                  } else if (n3 = this.validateAll(e3[o3], t3.additionalItems, [o3], ["additionalItems"], r3 + "/" + o3))
                    return n3;
                }
            } else
              for (o3 = 0; o3 < e3.length; o3++)
                if (n3 = this.validateAll(e3[o3], t3.items, [o3], ["items"], r3 + "/" + o3))
                  return n3;
            return null;
          }, c.prototype.validateObject = function(e3, t3, r3) {
            return "object" != typeof e3 || null === e3 || Array.isArray(e3) ? null : this.validateObjectMinMaxProperties(e3, t3, r3) || this.validateObjectRequiredProperties(e3, t3, r3) || this.validateObjectProperties(e3, t3, r3) || this.validateObjectDependencies(e3, t3, r3) || null;
          }, c.prototype.validateObjectMinMaxProperties = function(e3, t3) {
            var r3, n3 = Object.keys(e3);
            return void 0 !== t3.minProperties && n3.length < t3.minProperties && (r3 = this.createError(v.OBJECT_PROPERTIES_MINIMUM, { propertyCount: n3.length, minimum: t3.minProperties }, "", "/minProperties", null, e3, t3), this.handleError(r3)) || void 0 !== t3.maxProperties && n3.length > t3.maxProperties && (r3 = this.createError(v.OBJECT_PROPERTIES_MAXIMUM, { propertyCount: n3.length, maximum: t3.maxProperties }, "", "/maxProperties", null, e3, t3), this.handleError(r3)) ? r3 : null;
          }, c.prototype.validateObjectRequiredProperties = function(e3, t3) {
            if (void 0 !== t3.required)
              for (var r3 = 0; r3 < t3.required.length; r3++) {
                var n3 = t3.required[r3];
                if (void 0 === e3[n3]) {
                  var o3 = this.createError(v.OBJECT_REQUIRED, { key: n3 }, "", "/required/" + r3, null, e3, t3);
                  if (this.handleError(o3))
                    return o3;
                }
              }
            return null;
          }, c.prototype.validateObjectProperties = function(e3, t3, r3) {
            var n3;
            for (var o3 in e3) {
              var i3 = r3 + "/" + o3.replace(/~/g, "~0").replace(/\//g, "~1"), s2 = false;
              if (void 0 !== t3.properties && void 0 !== t3.properties[o3] && (s2 = true, n3 = this.validateAll(e3[o3], t3.properties[o3], [o3], ["properties", o3], i3)))
                return n3;
              if (void 0 !== t3.patternProperties) {
                for (var a2 in t3.patternProperties)
                  if (new RegExp(a2).test(o3) && (s2 = true, n3 = this.validateAll(e3[o3], t3.patternProperties[a2], [o3], ["patternProperties", a2], i3)))
                    return n3;
              }
              if (s2)
                this.trackUnknownProperties && (this.knownPropertyPaths[i3] = true, delete this.unknownPropertyPaths[i3]);
              else if (void 0 !== t3.additionalProperties) {
                if (this.trackUnknownProperties && (this.knownPropertyPaths[i3] = true, delete this.unknownPropertyPaths[i3]), "boolean" == typeof t3.additionalProperties) {
                  if (!t3.additionalProperties && (n3 = this.createError(v.OBJECT_ADDITIONAL_PROPERTIES, { key: o3 }, "", "/additionalProperties", null, e3, t3).prefixWith(o3, null), this.handleError(n3)))
                    return n3;
                } else if (n3 = this.validateAll(e3[o3], t3.additionalProperties, [o3], ["additionalProperties"], i3))
                  return n3;
              } else
                this.trackUnknownProperties && !this.knownPropertyPaths[i3] && (this.unknownPropertyPaths[i3] = true);
            }
            return null;
          }, c.prototype.validateObjectDependencies = function(e3, t3, r3) {
            var n3;
            if (void 0 !== t3.dependencies) {
              for (var o3 in t3.dependencies)
                if (void 0 !== e3[o3]) {
                  var i3 = t3.dependencies[o3];
                  if ("string" == typeof i3) {
                    if (void 0 === e3[i3] && (n3 = this.createError(v.OBJECT_DEPENDENCY_KEY, { key: o3, missing: i3 }, "", "", null, e3, t3).prefixWith(null, o3).prefixWith(null, "dependencies"), this.handleError(n3)))
                      return n3;
                  } else if (Array.isArray(i3))
                    for (var s2 = 0; s2 < i3.length; s2++) {
                      var a2 = i3[s2];
                      if (void 0 === e3[a2] && (n3 = this.createError(v.OBJECT_DEPENDENCY_KEY, { key: o3, missing: a2 }, "", "/" + s2, null, e3, t3).prefixWith(null, o3).prefixWith(null, "dependencies"), this.handleError(n3)))
                        return n3;
                    }
                  else if (n3 = this.validateAll(e3, i3, [], ["dependencies", o3], r3))
                    return n3;
                }
            }
            return null;
          }, c.prototype.validateCombinations = function(e3, t3, r3) {
            return this.validateAllOf(e3, t3, r3) || this.validateAnyOf(e3, t3, r3) || this.validateOneOf(e3, t3, r3) || this.validateNot(e3, t3, r3) || null;
          }, c.prototype.validateAllOf = function(e3, t3, r3) {
            if (void 0 === t3.allOf)
              return null;
            for (var n3, o3 = 0; o3 < t3.allOf.length; o3++) {
              var i3 = t3.allOf[o3];
              if (n3 = this.validateAll(e3, i3, [], ["allOf", o3], r3))
                return n3;
            }
            return null;
          }, c.prototype.validateAnyOf = function(e3, t3, r3) {
            if (void 0 === t3.anyOf)
              return null;
            var n3, o3, i3 = [], s2 = this.errors.length;
            this.trackUnknownProperties && (n3 = this.unknownPropertyPaths, o3 = this.knownPropertyPaths);
            for (var a2 = true, u2 = 0; u2 < t3.anyOf.length; u2++) {
              this.trackUnknownProperties && (this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});
              var c2 = t3.anyOf[u2], h2 = this.errors.length, l2 = this.validateAll(e3, c2, [], ["anyOf", u2], r3);
              if (null === l2 && h2 === this.errors.length) {
                if (this.errors = this.errors.slice(0, s2), this.trackUnknownProperties) {
                  for (var d2 in this.knownPropertyPaths)
                    o3[d2] = true, delete n3[d2];
                  for (var f2 in this.unknownPropertyPaths)
                    o3[f2] || (n3[f2] = true);
                  a2 = false;
                  continue;
                }
                return null;
              }
              l2 && i3.push(l2.prefixWith(null, "" + u2).prefixWith(null, "anyOf"));
            }
            return this.trackUnknownProperties && (this.unknownPropertyPaths = n3, this.knownPropertyPaths = o3), a2 ? (i3 = i3.concat(this.errors.slice(s2)), this.errors = this.errors.slice(0, s2), this.createError(v.ANY_OF_MISSING, {}, "", "/anyOf", i3, e3, t3)) : void 0;
          }, c.prototype.validateOneOf = function(e3, t3, r3) {
            if (void 0 === t3.oneOf)
              return null;
            var n3, o3, i3 = null, s2 = [], a2 = this.errors.length;
            this.trackUnknownProperties && (n3 = this.unknownPropertyPaths, o3 = this.knownPropertyPaths);
            for (var u2 = 0; u2 < t3.oneOf.length; u2++) {
              this.trackUnknownProperties && (this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});
              var c2 = t3.oneOf[u2], h2 = this.errors.length, l2 = this.validateAll(e3, c2, [], ["oneOf", u2], r3);
              if (null === l2 && h2 === this.errors.length) {
                if (null !== i3)
                  return this.errors = this.errors.slice(0, a2), this.createError(v.ONE_OF_MULTIPLE, { index1: i3, index2: u2 }, "", "/oneOf", null, e3, t3);
                if (i3 = u2, this.trackUnknownProperties) {
                  for (var d2 in this.knownPropertyPaths)
                    o3[d2] = true, delete n3[d2];
                  for (var f2 in this.unknownPropertyPaths)
                    o3[f2] || (n3[f2] = true);
                }
              } else
                l2 && s2.push(l2);
            }
            return this.trackUnknownProperties && (this.unknownPropertyPaths = n3, this.knownPropertyPaths = o3), null === i3 ? (s2 = s2.concat(this.errors.slice(a2)), this.errors = this.errors.slice(0, a2), this.createError(v.ONE_OF_MISSING, {}, "", "/oneOf", s2, e3, t3)) : (this.errors = this.errors.slice(0, a2), null);
          }, c.prototype.validateNot = function(e3, t3, r3) {
            if (void 0 === t3.not)
              return null;
            var n3, o3, i3 = this.errors.length;
            this.trackUnknownProperties && (n3 = this.unknownPropertyPaths, o3 = this.knownPropertyPaths, this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});
            var s2 = this.validateAll(e3, t3.not, null, null, r3), a2 = this.errors.slice(i3);
            return this.errors = this.errors.slice(0, i3), this.trackUnknownProperties && (this.unknownPropertyPaths = n3, this.knownPropertyPaths = o3), null === s2 && 0 === a2.length ? this.createError(v.NOT_PASSED, {}, "", "/not", null, e3, t3) : null;
          }, c.prototype.validateHypermedia = function(e3, t3, r3) {
            if (!t3.links)
              return null;
            for (var n3, o3 = 0; o3 < t3.links.length; o3++) {
              var i3 = t3.links[o3];
              if ("describedby" === i3.rel) {
                for (var s2 = new u(i3.href), a2 = true, c2 = 0; c2 < s2.varNames.length; c2++)
                  if (!(s2.varNames[c2] in e3)) {
                    a2 = false;
                    break;
                  }
                if (a2) {
                  var h2 = { $ref: s2.fillFromObject(e3) };
                  if (n3 = this.validateAll(e3, h2, [], ["links", o3], r3))
                    return n3;
                }
              }
            }
          };
          var v = { INVALID_TYPE: 0, ENUM_MISMATCH: 1, ANY_OF_MISSING: 10, ONE_OF_MISSING: 11, ONE_OF_MULTIPLE: 12, NOT_PASSED: 13, NUMBER_MULTIPLE_OF: 100, NUMBER_MINIMUM: 101, NUMBER_MINIMUM_EXCLUSIVE: 102, NUMBER_MAXIMUM: 103, NUMBER_MAXIMUM_EXCLUSIVE: 104, NUMBER_NOT_A_NUMBER: 105, STRING_LENGTH_SHORT: 200, STRING_LENGTH_LONG: 201, STRING_PATTERN: 202, OBJECT_PROPERTIES_MINIMUM: 300, OBJECT_PROPERTIES_MAXIMUM: 301, OBJECT_REQUIRED: 302, OBJECT_ADDITIONAL_PROPERTIES: 303, OBJECT_DEPENDENCY_KEY: 304, ARRAY_LENGTH_SHORT: 400, ARRAY_LENGTH_LONG: 401, ARRAY_UNIQUE: 402, ARRAY_ADDITIONAL_ITEMS: 403, FORMAT_CUSTOM: 500, KEYWORD_CUSTOM: 501, CIRCULAR_REFERENCE: 600, UNKNOWN_PROPERTY: 1e3 }, _ = {};
          for (var b in v)
            _[v[b]] = b;
          var w = { INVALID_TYPE: "Invalid type: {type} (expected {expected})", ENUM_MISMATCH: "No enum match for: {value}", ANY_OF_MISSING: 'Data does not match any schemas from "anyOf"', ONE_OF_MISSING: 'Data does not match any schemas from "oneOf"', ONE_OF_MULTIPLE: 'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}', NOT_PASSED: 'Data matches schema from "not"', NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}", NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}", NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}", NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}", NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}", NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number", STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}", STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}", STRING_PATTERN: "String does not match pattern: {pattern}", OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}", OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}", OBJECT_REQUIRED: "Missing required property: {key}", OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed", OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})", ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}", ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}", ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})", ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed", FORMAT_CUSTOM: "Format validation failed ({message})", KEYWORD_CUSTOM: "Keyword failed: {key} ({message})", CIRCULAR_REFERENCE: "Circular $refs: {urls}", UNKNOWN_PROPERTY: "Unknown property (not in schema)" };
          function P(e3, t3, r3, n3, o3) {
            if (Error.call(this), void 0 === e3)
              throw new Error("No error code supplied: " + n3);
            this.message = "", this.params = t3, this.code = e3, this.dataPath = r3 || "", this.schemaPath = n3 || "", this.subErrors = o3 || null;
            var i3 = new Error(this.message);
            if (this.stack = i3.stack || i3.stacktrace, !this.stack)
              try {
                throw i3;
              } catch (i4) {
                this.stack = i4.stack || i4.stacktrace;
              }
          }
          P.prototype = Object.create(Error.prototype), P.prototype.constructor = P, P.prototype.name = "ValidationError", P.prototype.prefixWith = function(e3, t3) {
            if (null !== e3 && (e3 = e3.replace(/~/g, "~0").replace(/\//g, "~1"), this.dataPath = "/" + e3 + this.dataPath), null !== t3 && (t3 = t3.replace(/~/g, "~0").replace(/\//g, "~1"), this.schemaPath = "/" + t3 + this.schemaPath), null !== this.subErrors)
              for (var r3 = 0; r3 < this.subErrors.length; r3++)
                this.subErrors[r3].prefixWith(e3, t3);
            return this;
          };
          var E = {}, T = function e3(t3) {
            var r3, n3, o3 = new c(), i3 = { setErrorReporter: function(e4) {
              return "string" == typeof e4 ? this.language(e4) : (n3 = e4, true);
            }, addFormat: function() {
              o3.addFormat.apply(o3, arguments);
            }, language: function(e4) {
              return e4 ? (E[e4] || (e4 = e4.split("-")[0]), !!E[e4] && (r3 = e4, e4)) : r3;
            }, addLanguage: function(e4, t4) {
              var r4;
              for (r4 in v)
                t4[r4] && !t4[v[r4]] && (t4[v[r4]] = t4[r4]);
              var n4 = e4.split("-")[0];
              if (E[n4])
                for (r4 in E[e4] = Object.create(E[n4]), t4)
                  void 0 === E[n4][r4] && (E[n4][r4] = t4[r4]), E[e4][r4] = t4[r4];
              else
                E[e4] = t4, E[n4] = t4;
              return this;
            }, freshApi: function(t4) {
              var r4 = e3();
              return t4 && r4.language(t4), r4;
            }, validate: function(e4, t4, i4, s2) {
              var a2 = y(r3), u2 = new c(o3, false, n3 ? function(e5, t5, r4) {
                return n3(e5, t5, r4) || a2(e5, t5, r4);
              } : a2, i4, s2);
              "string" == typeof t4 && (t4 = { $ref: t4 }), u2.addSchema("", t4);
              var h2 = u2.validateAll(e4, t4, null, null, "");
              return !h2 && s2 && (h2 = u2.banUnknownProperties(e4, t4)), this.error = h2, this.missing = u2.missing, this.valid = null === h2, this.valid;
            }, validateResult: function() {
              var e4 = { toString: function() {
                return this.valid ? "valid" : this.error.message;
              } };
              return this.validate.apply(e4, arguments), e4;
            }, validateMultiple: function(e4, t4, i4, s2) {
              var a2 = y(r3), u2 = new c(o3, true, n3 ? function(e5, t5, r4) {
                return n3(e5, t5, r4) || a2(e5, t5, r4);
              } : a2, i4, s2);
              "string" == typeof t4 && (t4 = { $ref: t4 }), u2.addSchema("", t4), u2.validateAll(e4, t4, null, null, ""), s2 && u2.banUnknownProperties(e4, t4);
              var h2 = { toString: function() {
                return this.valid ? "valid" : this.error.message;
              } };
              return h2.errors = u2.errors, h2.missing = u2.missing, h2.valid = 0 === h2.errors.length, h2;
            }, addSchema: function() {
              return o3.addSchema.apply(o3, arguments);
            }, getSchema: function() {
              return o3.getSchema.apply(o3, arguments);
            }, getSchemaMap: function() {
              return o3.getSchemaMap.apply(o3, arguments);
            }, getSchemaUris: function() {
              return o3.getSchemaUris.apply(o3, arguments);
            }, getMissingUris: function() {
              return o3.getMissingUris.apply(o3, arguments);
            }, dropSchemas: function() {
              o3.dropSchemas.apply(o3, arguments);
            }, defineKeyword: function() {
              o3.defineKeyword.apply(o3, arguments);
            }, defineError: function(e4, t4, r4) {
              if ("string" != typeof e4 || !/^[A-Z]+(_[A-Z]+)*$/.test(e4))
                throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");
              if ("number" != typeof t4 || t4 % 1 != 0 || t4 < 1e4)
                throw new Error("Code number must be an integer > 10000");
              if (void 0 !== v[e4])
                throw new Error("Error already defined: " + e4 + " as " + v[e4]);
              if (void 0 !== _[t4])
                throw new Error("Error code already used: " + _[t4] + " as " + t4);
              for (var n4 in v[e4] = t4, _[t4] = e4, w[e4] = w[t4] = r4, E) {
                var o4 = E[n4];
                o4[e4] && (o4[t4] = o4[t4] || o4[e4]);
              }
            }, reset: function() {
              o3.reset(), this.error = null, this.missing = [], this.valid = true;
            }, missing: [], error: null, valid: true, normSchema: g, resolveUrl: p, getDocumentUri: m, errorCodes: v };
            return i3.language(t3 || "en"), i3;
          }();
          return T.addLanguage("en-gb", w), T.tv4 = T, T;
        }) ? n.apply(t, o) : n) || (e.exports = i);
      }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true }), t.BaseClientTypes = void 0;
        class n {
          constructor() {
            this.uris = {}, this.schemas = {}, this.aliases = {};
          }
          declare(e2, t2, r2, n2) {
            const o2 = e2 + "/" + t2;
            if (n2.extends) {
              const t3 = n2.extends.split("/"), r3 = 1 === t3.length ? e2 + "/" + t3.shift() : t3.join("/"), i = this.uris[r3];
              if (!i)
                throw "Type '" + o2 + "' tries to extend unknown schema '" + r3 + "'";
              n2.extends = this.schemas[i];
            }
            this.uris[o2] = r2, this.aliases[r2] = o2, this.schemas[r2] = n2;
          }
          resolveAlias(e2) {
            return this.uris[e2];
          }
          getSchema(e2) {
            return this.schemas[e2];
          }
          inScope(e2) {
            const t2 = e2.length, r2 = {};
            for (const n2 in this.uris)
              if (n2.substr(0, t2 + 1) === e2 + "/") {
                const e3 = this.uris[n2];
                r2[e3] = this.schemas[e3];
              }
            return r2;
          }
        }
        t.BaseClientTypes = n;
        const o = new n();
        t.default = o;
      }, function(e, t, r) {
        "use strict";
        class n extends Error {
          constructor(e2) {
            super();
            const t2 = new Error("Schema not found: " + e2);
            return t2.name = "SchemaNotFound", t2;
          }
        }
        e.exports = n;
      }, function(e, t, r) {
        "use strict";
        e.exports = class {
          constructor(e2) {
            this._itemsRev = {}, this._storage = {}, this._canPropagate = false, this.defaultValue = e2, this.activatePropagation();
          }
          get(e2) {
            e2 = e2.toLowerCase();
            let t2 = this._storage[e2];
            return void 0 === t2 && (t2 = this.defaultValue, this._storage[e2] = t2), t2;
          }
          set(e2, t2) {
            return e2 = e2.toLowerCase(), this._storage[e2] === t2 || (this._storage[e2] = t2, t2 || delete this._itemsRev[e2], this._updateParentFolderItemRev(e2, t2), this._canPropagate && this._propagate(e2)), t2;
          }
          delete(e2) {
            return this.set(e2, null);
          }
          deactivatePropagation() {
            return this._canPropagate = false, true;
          }
          activatePropagation() {
            return this._canPropagate || (this._generateFolderRev("/"), this._canPropagate = true), true;
          }
          _hashCode(e2) {
            let t2 = 0;
            if (0 === e2.length)
              return t2;
            for (let r2 = 0; r2 < e2.length; r2++) {
              t2 = (t2 << 5) - t2 + e2.charCodeAt(r2), t2 |= 0;
            }
            return t2;
          }
          _generateHash(e2) {
            const t2 = e2.sort().join("|");
            return "" + this._hashCode(t2);
          }
          _updateParentFolderItemRev(e2, t2) {
            if ("/" !== e2) {
              const r2 = this._getParentFolder(e2);
              this._itemsRev[r2] || (this._itemsRev[r2] = {});
              const n = this._itemsRev[r2];
              t2 ? n[e2] = t2 : delete n[e2], this._updateParentFolderItemRev(r2, this.defaultValue);
            }
          }
          _getParentFolder(e2) {
            return e2.substr(0, e2.lastIndexOf("/", e2.length - 2) + 1);
          }
          _propagate(e2) {
            if ("/" !== e2) {
              const t2 = this._getParentFolder(e2), r2 = this._itemsRev[t2], n = [];
              for (const e3 in r2)
                n.push(r2[e3]);
              const o = this._generateHash(n);
              this.set(t2, o);
            }
          }
          _generateFolderRev(e2) {
            const t2 = this._itemsRev[e2];
            let r2 = this.defaultValue;
            if (t2) {
              const e3 = [];
              for (const r3 in t2) {
                let n;
                n = "/" === r3.substr(-1) ? this._generateFolderRev(r3) : t2[r3], e3.push(n);
              }
              e3.length > 0 && (r2 = this._generateHash(e3));
            }
            return this.set(e2, r2), r2;
          }
        };
      }, function(e, t, r) {
        var n;
        "function" != typeof fetch && "function" != typeof XMLHttpRequest && (XMLHttpRequest = r(29)), function(r2) {
          var o = { "http://webfist.org/spec/rel": "webfist", "http://webfinger.net/rel/avatar": "avatar", remotestorage: "remotestorage", "http://tools.ietf.org/id/draft-dejong-remotestorage": "remotestorage", remoteStorage: "remotestorage", "http://www.packetizer.com/rel/share": "share", "http://webfinger.net/rel/profile-page": "profile", me: "profile", vcard: "vcard", blog: "blog", "http://packetizer.com/rel/blog": "blog", "http://schemas.google.com/g/2010#updates-from": "updates", "https://camlistore.org/rel/server": "camilstore" }, i = { avatar: [], remotestorage: [], blog: [], vcard: [], updates: [], share: [], profile: [], webfist: [], camlistore: [] }, s = ["webfinger", "host-meta", "host-meta.json"];
          function a(e2) {
            return e2.toString = function() {
              return this.message;
            }, e2;
          }
          function u(e2) {
            "object" != typeof e2 && (e2 = {}), this.config = { tls_only: void 0 === e2.tls_only || e2.tls_only, webfist_fallback: void 0 !== e2.webfist_fallback && e2.webfist_fallback, uri_fallback: void 0 !== e2.uri_fallback && e2.uri_fallback, request_timeout: void 0 !== e2.request_timeout ? e2.request_timeout : 1e4 };
          }
          u.prototype.__fetchJRD = function(e2, t2, r3) {
            if ("function" == typeof fetch)
              return this.__fetchJRD_fetch(e2, t2, r3);
            if ("function" == typeof XMLHttpRequest)
              return this.__fetchJRD_XHR(e2, t2, r3);
            throw new Error("add a polyfill for fetch or XMLHttpRequest");
          }, u.prototype.__fetchJRD_fetch = function(e2, t2, r3) {
            var n2, o2 = this;
            "function" == typeof AbortController && (n2 = new AbortController());
            var i2 = fetch(e2, { headers: { Accept: "application/jrd+json, application/json" }, signal: n2 ? n2.signal : void 0 }).then(function(t3) {
              if (t3.ok)
                return t3.text();
              throw 404 === t3.status ? a({ message: "resource not found", url: e2, status: t3.status }) : a({ message: "error during request", url: e2, status: t3.status });
            }, function(t3) {
              throw a({ message: "error during request", url: e2, status: void 0, err: t3 });
            }).then(function(t3) {
              if (o2.__isValidJSON(t3))
                return t3;
              throw a({ message: "invalid json", url: e2, status: void 0 });
            }), s2 = new Promise(function(t3, r4) {
              setTimeout(function() {
                r4(a({ message: "request timed out", url: e2, status: void 0 })), n2 && n2.abort();
              }, o2.config.request_timeout);
            });
            Promise.race([i2, s2]).then(function(e3) {
              r3(e3);
            }).catch(function(e3) {
              t2(e3);
            });
          }, u.prototype.__fetchJRD_XHR = function(e2, t2, r3) {
            var n2 = this, o2 = false, i2 = new XMLHttpRequest();
            function s2() {
              if (!o2) {
                if (o2 = true, 200 === i2.status)
                  return n2.__isValidJSON(i2.responseText) ? r3(i2.responseText) : t2(a({ message: "invalid json", url: e2, status: i2.status }));
                if (404 === i2.status)
                  return t2(a({ message: "resource not found", url: e2, status: i2.status }));
                if (i2.status >= 301 && i2.status <= 302) {
                  var s3 = i2.getResponseHeader("Location");
                  return function(e3) {
                    return "string" == typeof e3 && "https" === e3.split("://")[0];
                  }(s3) ? u2() : t2(a({ message: "no redirect URL found", url: e2, status: i2.status }));
                }
                return t2(a({ message: "error during request", url: e2, status: i2.status }));
              }
            }
            function u2() {
              i2.onreadystatechange = function() {
                4 === i2.readyState && s2();
              }, i2.onload = function() {
                s2();
              }, i2.ontimeout = function() {
                return t2(a({ message: "request timed out", url: e2, status: i2.status }));
              }, i2.open("GET", e2, true), i2.timeout = n2.config.request_timeout, i2.setRequestHeader("Accept", "application/jrd+json, application/json"), i2.send();
            }
            return u2();
          }, u.prototype.__isValidJSON = function(e2) {
            try {
              JSON.parse(e2);
            } catch (e3) {
              return false;
            }
            return true;
          }, u.prototype.__isLocalhost = function(e2) {
            return /^localhost(\.localdomain)?(\:[0-9]+)?$/.test(e2);
          }, u.prototype.__processJRD = function(e2, t2, r3, n2) {
            var s2 = JSON.parse(t2);
            if ("object" != typeof s2 || "object" != typeof s2.links)
              return void 0 !== s2.error ? r3(a({ message: s2.error, request: e2 })) : r3(a({ message: "unknown response from server", request: e2 }));
            var u2 = s2.links;
            Array.isArray(u2) || (u2 = []);
            var c = { object: s2, json: t2, idx: {} };
            c.idx.properties = { name: void 0 }, c.idx.links = JSON.parse(JSON.stringify(i)), u2.map(function(e3, t3) {
              if (o.hasOwnProperty(e3.rel) && c.idx.links[o[e3.rel]]) {
                var r4 = {};
                Object.keys(e3).map(function(t4, n3) {
                  r4[t4] = e3[t4];
                }), c.idx.links[o[e3.rel]].push(r4);
              }
            });
            var h = JSON.parse(t2).properties;
            for (var l in h)
              h.hasOwnProperty(l) && "http://packetizer.com/ns/name" === l && (c.idx.properties.name = h[l]);
            return n2(c);
          }, u.prototype.lookup = function(e2, t2) {
            if ("string" != typeof e2)
              throw new Error("first parameter must be a user address");
            if ("function" != typeof t2)
              throw new Error("second parameter must be a callback");
            var r3 = this, n2 = "";
            n2 = e2.indexOf("://") > -1 ? e2.replace(/ /g, "").split("/")[2] : e2.replace(/ /g, "").split("@")[1];
            var o2 = 0, i2 = "https";
            function a2() {
              var t3 = "";
              return e2.split("://")[1] || (t3 = "acct:"), i2 + "://" + n2 + "/.well-known/" + s[o2] + "?resource=" + t3 + e2;
            }
            function u2(e3) {
              if (r3.config.uri_fallback && "webfist.org" !== n2 && o2 !== s.length - 1)
                return o2 += 1, c();
              if (!r3.config.tls_only && "https" === i2)
                return o2 = 0, i2 = "http", c();
              if (!r3.config.webfist_fallback || "webfist.org" === n2)
                return t2(e3);
              o2 = 0, i2 = "http", n2 = "webfist.org";
              var u3 = a2();
              r3.__fetchJRD(u3, t2, function(e4) {
                r3.__processJRD(u3, e4, t2, function(e5) {
                  "object" == typeof e5.idx.links.webfist && "string" == typeof e5.idx.links.webfist[0].href && r3.__fetchJRD(e5.idx.links.webfist[0].href, t2, function(e6) {
                    r3.__processJRD(u3, e6, t2, function(e7) {
                      return t2(null, t2);
                    });
                  });
                });
              });
            }
            function c() {
              var e3 = a2();
              r3.__fetchJRD(e3, u2, function(n3) {
                r3.__processJRD(e3, n3, t2, function(e4) {
                  t2(null, e4);
                });
              });
            }
            return r3.__isLocalhost(n2) && (i2 = "http"), setTimeout(c, 0);
          }, u.prototype.lookupLink = function(e2, t2, r3) {
            if (!i.hasOwnProperty(t2))
              return r3("unsupported rel " + t2);
            this.lookup(e2, function(e3, n2) {
              var o2 = n2.idx.links[t2];
              return e3 ? r3(e3) : 0 === o2.length ? r3('no links found with rel="' + t2 + '"') : r3(null, o2[0]);
            });
          }, void 0 === (n = function() {
            return u;
          }.apply(t, [])) || (e.exports = n);
        }();
      }, function(e, t) {
        e.exports = XMLHttpRequest;
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        const o = n(r(3)), i = n(r(17)), s = n(r(1)), a = r(0), u = n(r(31)), c = n(r(12)), h = n(r(4)), l = n(r(16)), d = n(r(8)), f = n(r(14)), p = n(r(15)), m = n(r(32)), g = n(r(33)), y = n(r(13)), v = n(r(34)), _ = n(r(35)), b = n(r(36)), w = { features: [], featuresDone: 0, readyFired: false, loadFeatures() {
          this.features = [], this.featuresDone = 0, this.readyFired = false, this.featureModules = { WireClient: m.default, Dropbox: p.default, GoogleDrive: f.default, Access: c.default, Discover: l.default, Authorize: h.default, BaseClient: d.default, Env: i.default }, o.default.cache && (0, a.extend)(this.featureModules, { Caching: y.default, IndexedDB: v.default, LocalStorage: _.default, InMemoryStorage: b.default, Sync: g.default }), o.default.disableFeatures.forEach((e2) => {
            this.featureModules[e2] && delete this.featureModules[e2];
          }), this._allLoaded = false;
          for (const e2 in this.featureModules)
            this.loadFeature(e2);
        }, hasFeature(e2) {
          for (let t2 = this.features.length - 1; t2 >= 0; t2--)
            if (this.features[t2].name === e2)
              return this.features[t2].supported;
          return false;
        }, loadFeature(e2) {
          const t2 = this.featureModules[e2], r2 = !t2._rs_supported || t2._rs_supported();
          (0, s.default)(`[RemoteStorage] [FEATURE ${e2}] initializing ...`), "object" == typeof r2 ? r2.then(() => {
            this.featureSupported(e2, true), this.initFeature(e2);
          }, () => {
            this.featureSupported(e2, false);
          }) : "boolean" == typeof r2 ? (this.featureSupported(e2, r2), r2 && this.initFeature(e2)) : this.featureSupported(e2, false);
        }, initFeature(e2) {
          const t2 = this.featureModules[e2];
          let r2;
          try {
            r2 = t2._rs_init(this);
          } catch (t3) {
            return void this.featureFailed(e2, t3);
          }
          "object" == typeof r2 && "function" == typeof r2.then ? r2.then(() => {
            this.featureInitialized(e2);
          }, (t3) => {
            this.featureFailed(e2, t3);
          }) : this.featureInitialized(e2);
        }, featureFailed(e2, t2) {
          (0, s.default)(`[RemoteStorage] [FEATURE ${e2}] initialization failed (${t2})`), this.featureDone();
        }, featureSupported(e2, t2) {
          (0, s.default)(`[RemoteStorage] [FEATURE ${e2}]${t2 ? "" : "not "} supported`), t2 || this.featureDone();
        }, featureInitialized(e2) {
          (0, s.default)(`[RemoteStorage] [FEATURE ${e2}] initialized`), this.features.push({ name: e2, init: this.featureModules[e2]._rs_init, supported: true, cleanup: this.featureModules[e2]._rs_cleanup }), this.featureDone();
        }, featureDone() {
          this.featuresDone++, this.featuresDone === Object.keys(this.featureModules).length && setTimeout(this.featuresLoaded.bind(this), 0);
        }, _setCachingModule() {
          ["IndexedDB", "LocalStorage", "InMemoryStorage"].some((e2) => {
            if (this.features.some((t2) => t2.name === e2))
              return this.features.local = this.featureModules[e2], true;
          });
        }, _fireReady() {
          try {
            this.readyFired || (this._emit("ready"), this.readyFired = true);
          } catch (e2) {
            console.error("'ready' failed: ", e2, e2.stack), this._emit("error", e2);
          }
        }, featuresLoaded() {
          (0, s.default)("[RemoteStorage] All features loaded"), this._setCachingModule(), this.local = o.default.cache && this.features.local && new this.features.local(), this.local && this.remote ? (this._setGPD(u.default, this), this._bindChange(this.local)) : this.remote && this._setGPD(this.remote, this.remote), this.remote && (this.remote.on("connected", () => {
            this._fireReady(), this._emit("connected");
          }), this.remote.on("not-connected", () => {
            this._fireReady(), this._emit("not-connected");
          }), this.remote.connected && (this._fireReady(), this._emit("connected")), this.hasFeature("Authorize") || this.remote.stopWaitingForToken()), this._collectCleanupFunctions();
          try {
            this._allLoaded = true, this._emit("features-loaded");
          } catch (e2) {
            (0, a.logError)(e2), this._emit("error", e2);
          }
          this._processPending();
        }, _collectCleanupFunctions() {
          this._cleanups = [];
          for (let e2 = 0; e2 < this.features.length; e2++) {
            const t2 = this.features[e2].cleanup;
            "function" == typeof t2 && this._cleanups.push(t2);
          }
        } };
        e.exports = w;
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e2, t2, r2, n2) {
          return new (r2 || (r2 = Promise))(function(o2, i2) {
            function s2(e3) {
              try {
                u(n2.next(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function a(e3) {
              try {
                u(n2.throw(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function u(e3) {
              var t3;
              e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof r2 ? t3 : new r2(function(e4) {
                e4(t3);
              })).then(s2, a);
            }
            u((n2 = n2.apply(e2, t2 || [])).next());
          });
        };
        const o = (this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        })(r(1));
        function i(e2) {
          return "dropbox" === this.backend && !!e2.match(/^\/public\/.*[^\/]$/);
        }
        const s = { get: function(e2, t2) {
          if (this.local) {
            if (void 0 === t2)
              t2 = "object" == typeof (r2 = this).remote && r2.remote.connected && r2.remote.online ? 2 * r2.getSyncInterval() : ((0, o.default)("Not setting default maxAge, because remote is offline or not connected"), false);
            else if ("number" != typeof t2 && false !== t2)
              return Promise.reject("Argument 'maxAge' must be 'false' or a number");
            return this.local.get(e2, t2, this.sync.queueGetRequest.bind(this.sync));
          }
          return this.remote.get(e2);
          var r2;
        }, put: function(e2, t2, r2) {
          return i.bind(this)(e2) ? s._wrapBusyDone.call(this, this.remote.put(e2, t2, r2)) : this.local ? this.local.put(e2, t2, r2) : s._wrapBusyDone.call(this, this.remote.put(e2, t2, r2));
        }, delete: function(e2) {
          return this.local ? this.local.delete(e2) : s._wrapBusyDone.call(this, this.remote.delete(e2));
        }, _wrapBusyDone: function(e2) {
          return n(this, void 0, void 0, function* () {
            return this._emit("wire-busy"), e2.then((e3) => (this._emit("wire-done", { success: true }), Promise.resolve(e3)), (e3) => (this._emit("wire-done", { success: false }), Promise.reject(e3)));
          });
        } };
        e.exports = s;
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e2, t2, r2, n2) {
          return new (r2 || (r2 = Promise))(function(o2, i2) {
            function s2(e3) {
              try {
                u2(n2.next(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function a2(e3) {
              try {
                u2(n2.throw(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function u2(e3) {
              var t3;
              e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof r2 ? t3 : new r2(function(e4) {
                e4(t3);
              })).then(s2, a2);
            }
            u2((n2 = n2.apply(e2, t2 || [])).next());
          });
        }, o = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        const i = o(r(4)), s = o(r(2)), a = o(r(5)), u = o(r(1)), c = r(0), h = r(7), l = r(9);
        let d;
        const f = "remotestorage:wireclient", p = { "draft-dejong-remotestorage-00": 2, "draft-dejong-remotestorage-01": 3, "draft-dejong-remotestorage-02": 4, "https://www.w3.org/community/rww/wiki/read-write-web-00#simple": 1 };
        class m extends l.RemoteBase {
          constructor(e2) {
            if (super(e2), this._revisionCache = {}, d = (0, c.localStorageAvailable)(), this.addEvents(["connected", "not-connected"]), d) {
              const e3 = function() {
                const e4 = (0, c.getJSONFromLocalStorage)(f) || {}, { userAddress: t2, href: r2, storageApi: n2, token: o2, properties: i2 } = e4;
                return { userAddress: t2, href: r2, storageApi: n2, token: o2, properties: i2 };
              }();
              e3 && setTimeout(() => {
                this.configure(e3);
              }, 0);
            }
            this.connected && setTimeout(this._emit.bind(this), 0, "connected");
          }
          get storageType() {
            if (this.storageApi) {
              const e2 = this.storageApi.match(/draft-dejong-(remotestorage-\d\d)/);
              return e2 ? e2[1] : "2012.04";
            }
          }
          _request(e2, t2, r2, o2, s2, l2, d2) {
            return n(this, void 0, void 0, function* () {
              if (this.isForbiddenRequestMethod(e2, t2))
                return Promise.reject(`Don't use ${e2} on directories!`);
              let n2;
              return r2 !== i.default.IMPLIED_FAKE_TOKEN && (o2.Authorization = "Bearer " + r2), this.rs._emit("wire-busy", { method: e2, isFolder: (0, c.isFolder)(t2) }), (0, h.requestWithTimeout)(e2, t2, { body: s2, headers: o2, responseType: "arraybuffer" }).then((r3) => {
                if (this.online || (this.online = true, this.rs._emit("network-online")), this.rs._emit("wire-done", { method: e2, isFolder: (0, c.isFolder)(t2), success: true }), o3 = r3.status, [401, 403, 404, 412].indexOf(o3) >= 0)
                  return (0, u.default)("[WireClient] Error response status", r3.status), n2 = l2 ? this.stripQuotes(r3.getResponseHeader("ETag")) : void 0, 401 === r3.status && this.rs._emit("error", new a.default()), Promise.resolve({ statusCode: r3.status, revision: n2 });
                if (function(e3) {
                  return [201, 204, 304].indexOf(e3) >= 0;
                }(r3.status) || 200 === r3.status && "GET" !== e2)
                  return n2 = this.stripQuotes(r3.getResponseHeader("ETag")), (0, u.default)("[WireClient] Successful request", n2), Promise.resolve({ statusCode: r3.status, revision: n2 });
                {
                  const e3 = r3.getResponseHeader("Content-Type");
                  n2 = l2 ? this.stripQuotes(r3.getResponseHeader("ETag")) : 200 === r3.status ? d2 : void 0;
                  const t3 = function(e4) {
                    let t4, r4 = "utf-8";
                    return e4 && (t4 = e4.match(/charset=(.+)$/), t4 && (r4 = t4[1])), r4;
                  }(e3);
                  return (0, c.shouldBeTreatedAsBinary)(r3.response, e3) ? ((0, u.default)("[WireClient] Successful request with unknown or binary mime-type", n2), Promise.resolve({ statusCode: r3.status, body: r3.response, contentType: e3, revision: n2 })) : (0, c.getTextFromArrayBuffer)(r3.response, t3).then((t4) => ((0, u.default)("[WireClient] Successful request", n2), Promise.resolve({ statusCode: r3.status, body: t4, contentType: e3, revision: n2 })));
                }
                var o3;
              }, (r3) => (this.online && (this.online = false, this.rs._emit("network-offline")), this.rs._emit("wire-done", { method: e2, isFolder: (0, c.isFolder)(t2), success: false }), Promise.reject(r3)));
            });
          }
          configure(e2) {
            if ("object" != typeof e2)
              throw new Error("WireClient configure settings parameter should be an object");
            if (void 0 !== e2.userAddress && (this.userAddress = e2.userAddress), void 0 !== e2.href && (this.href = e2.href), void 0 !== e2.storageApi && (this.storageApi = e2.storageApi), void 0 !== e2.token && (this.token = e2.token), void 0 !== e2.properties && (this.properties = e2.properties), "string" == typeof this.storageApi) {
              const e3 = p[this.storageApi] || 5;
              this.supportsRevs = e3 >= 2;
            }
            this.href && this.token ? (this.connected = true, this.online = true, this._emit("connected")) : this.connected = false, d && (localStorage[f] = JSON.stringify({ userAddress: this.userAddress, href: this.href, storageApi: this.storageApi, token: this.token, properties: this.properties }));
          }
          get(e2, t2 = {}) {
            if (!this.connected)
              return Promise.reject("not connected (path: " + e2 + ")");
            const r2 = {};
            return this.supportsRevs && t2.ifNoneMatch && (r2["If-None-Match"] = this.addQuotes(t2.ifNoneMatch)), this._request("GET", this.href + (0, c.cleanPath)(e2), this.token, r2, void 0, this.supportsRevs, this._revisionCache[e2]).then((t3) => {
              if (!(0, c.isFolder)(e2))
                return Promise.resolve(t3);
              let r3 = {};
              if (void 0 !== t3.body)
                try {
                  t3.body = JSON.parse(t3.body);
                } catch (t4) {
                  return Promise.reject("Folder description at " + this.href + (0, c.cleanPath)(e2) + " is not JSON");
                }
              if (200 === t3.statusCode && "object" == typeof t3.body) {
                if (0 === Object.keys(t3.body).length)
                  t3.statusCode = 404;
                else if ("http://remotestorage.io/spec/folder-description" === (n2 = t3.body)["@context"] && "object" == typeof n2.items) {
                  for (const r4 in t3.body.items)
                    this._revisionCache[e2 + r4] = t3.body.items[r4].ETag;
                  r3 = t3.body.items;
                } else
                  Object.keys(t3.body).forEach((n3) => {
                    this._revisionCache[e2 + n3] = t3.body[n3], r3[n3] = { ETag: t3.body[n3] };
                  });
                return t3.body = r3, Promise.resolve(t3);
              }
              return Promise.resolve(t3);
              var n2;
            });
          }
          put(e2, t2, r2, n2 = {}) {
            if (!this.connected)
              return Promise.reject("not connected (path: " + e2 + ")");
            !r2.match(/charset=/) && (t2 instanceof ArrayBuffer || (0, h.isArrayBufferView)(t2)) && (r2 += "; charset=binary");
            const o2 = { "Content-Type": r2 };
            return this.supportsRevs && (n2.ifMatch && (o2["If-Match"] = this.addQuotes(n2.ifMatch)), n2.ifNoneMatch && (o2["If-None-Match"] = this.addQuotes(n2.ifNoneMatch))), this._request("PUT", this.href + (0, c.cleanPath)(e2), this.token, o2, t2, this.supportsRevs);
          }
          delete(e2, t2 = {}) {
            if (!this.connected)
              throw new Error("not connected (path: " + e2 + ")");
            t2 || (t2 = {});
            const r2 = {};
            return this.supportsRevs && t2.ifMatch && (r2["If-Match"] = this.addQuotes(t2.ifMatch)), this._request("DELETE", this.href + (0, c.cleanPath)(e2), this.token, r2, void 0, this.supportsRevs);
          }
          static _rs_init(e2) {
            e2.remote = new m(e2), e2.remote.online = true;
          }
          static _rs_supported() {
            return "function" == typeof fetch || "function" == typeof XMLHttpRequest;
          }
          static _rs_cleanup() {
            d && delete localStorage[f];
          }
        }
        (0, c.applyMixins)(m, [s.default]), e.exports = m;
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e2, t2, r2, n2) {
          return new (r2 || (r2 = Promise))(function(o2, i2) {
            function s2(e3) {
              try {
                u2(n2.next(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function a2(e3) {
              try {
                u2(n2.throw(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function u2(e3) {
              var t3;
              e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof r2 ? t3 : new r2(function(e4) {
                e4(t3);
              })).then(s2, a2);
            }
            u2((n2 = n2.apply(e2, t2 || [])).next());
          });
        }, o = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        const i = o(r(3)), s = o(r(17)), a = o(r(2)), u = o(r(1)), c = o(r(4)), h = o(r(10)), l = o(r(5)), d = r(0);
        let f, p;
        function m(e2, t2, r2) {
          return { action: e2, path: t2, promise: r2 };
        }
        function g(e2, t2) {
          return e2.common.revision !== t2 && (!e2.remote || e2.remote.revision !== t2);
        }
        function y(e2) {
          return e2.common && e2.common.revision;
        }
        class v {
          constructor(e2) {
            this._finishedTasks = [], this.rs = e2, this._tasks = {}, this._running = {}, this._timeStarted = {}, this.numThreads = 10, this.rs.local.onDiff((e3) => {
              this.addTask(e3), this.doTasks();
            }), this.rs.caching.onActivate((e3) => {
              this.addTask(e3), this.doTasks();
            }), this.addEvents(["done", "req-done"]);
          }
          now() {
            return (/* @__PURE__ */ new Date()).getTime();
          }
          queueGetRequest(e2) {
            return new Promise((t2, r2) => {
              this.rs.remote.connected ? this.rs.remote.online ? (this.addTask(e2, function() {
                this.rs.local.get(e2).then((e3) => t2(e3));
              }.bind(this)), this.doTasks()) : r2("cannot fulfill maxAge requirement - remote is not online") : r2("cannot fulfill maxAge requirement - remote is not connected");
            });
          }
          corruptServerItemsMap(e2, t2) {
            if ("object" != typeof e2 || Array.isArray(e2))
              return true;
            for (const r2 in e2) {
              const n2 = e2[r2];
              if ("object" != typeof n2)
                return true;
              if ("string" != typeof n2.ETag)
                return true;
              if ((0, d.isFolder)(r2)) {
                if (-1 !== r2.substring(0, r2.length - 1).indexOf("/"))
                  return true;
              } else {
                if (-1 !== r2.indexOf("/"))
                  return true;
                if (t2) {
                  if ("string" != typeof n2["Content-Type"])
                    return true;
                  if ("number" != typeof n2["Content-Length"])
                    return true;
                }
              }
            }
            return false;
          }
          corruptItemsMap(e2) {
            if ("object" != typeof e2 || Array.isArray(e2))
              return true;
            for (const t2 in e2)
              if ("boolean" != typeof e2[t2])
                return true;
            return false;
          }
          corruptRevision(e2) {
            return "object" != typeof e2 || Array.isArray(e2) || e2.revision && "string" != typeof e2.revision || e2.body && "string" != typeof e2.body && "object" != typeof e2.body || e2.contentType && "string" != typeof e2.contentType || e2.contentLength && "number" != typeof e2.contentLength || e2.timestamp && "number" != typeof e2.timestamp || e2.itemsMap && this.corruptItemsMap(e2.itemsMap);
          }
          isCorrupt(e2) {
            return "object" != typeof e2 || Array.isArray(e2) || "string" != typeof e2.path || this.corruptRevision(e2.common) || e2.local && this.corruptRevision(e2.local) || e2.remote && this.corruptRevision(e2.remote) || e2.push && this.corruptRevision(e2.push);
          }
          hasTasks() {
            return Object.getOwnPropertyNames(this._tasks).length > 0;
          }
          collectDiffTasks() {
            return n(this, void 0, void 0, function* () {
              let e2 = 0;
              return this.rs.local.forAllNodes((t2) => {
                e2 > 100 || (this.isCorrupt(t2) ? ((0, u.default)("[Sync] WARNING: corrupt node in local cache", t2), "object" == typeof t2 && t2.path && (this.addTask(t2.path), e2++)) : (this.needsFetch(t2) && this.rs.access.checkPathPermission(t2.path, "r") || (0, d.isDocument)(t2.path) && this.needsPush(t2) && this.rs.access.checkPathPermission(t2.path, "rw")) && (this.addTask(t2.path), e2++));
              }).then(() => e2).catch((e3) => {
                throw e3;
              });
            });
          }
          inConflict(e2) {
            return e2.local && e2.remote && (void 0 !== e2.remote.body || e2.remote.itemsMap);
          }
          needsRefresh(e2) {
            return !!e2.common && (!e2.common.timestamp || this.now() - e2.common.timestamp > i.default.syncInterval);
          }
          needsFetch(e2) {
            return !!this.inConflict(e2) || (!(!e2.common || void 0 !== e2.common.itemsMap || void 0 !== e2.common.body) || !(!e2.remote || void 0 !== e2.remote.itemsMap || void 0 !== e2.remote.body));
          }
          needsPush(e2) {
            return !this.inConflict(e2) && (!(!e2.local || e2.push) || void 0);
          }
          needsRemotePut(e2) {
            return e2.local && e2.local.body;
          }
          needsRemoteDelete(e2) {
            return e2.local && false === e2.local.body;
          }
          getParentPath(e2) {
            const t2 = e2.match(/^(.*\/)([^\/]+\/?)$/);
            if (t2)
              return t2[1];
            throw new Error('Not a valid path: "' + e2 + '"');
          }
          deleteChildPathsFromTasks() {
            for (const e2 in this._tasks) {
              const t2 = (0, d.pathsFromRoot)(e2);
              for (let r2 = 1; r2 < t2.length; r2++)
                this._tasks[t2[r2]] && (Array.isArray(this._tasks[e2]) && this._tasks[e2].length && Array.prototype.push.apply(this._tasks[t2[r2]], this._tasks[e2]), delete this._tasks[e2]);
            }
          }
          collectRefreshTasks() {
            return n(this, void 0, void 0, function* () {
              return this.rs.local.forAllNodes((e2) => {
                let t2;
                if (this.needsRefresh(e2)) {
                  try {
                    t2 = this.getParentPath(e2.path);
                  } catch (e3) {
                  }
                  t2 && this.rs.access.checkPathPermission(t2, "r") ? this.addTask(t2) : this.rs.access.checkPathPermission(e2.path, "r") && this.addTask(e2.path);
                }
              }).then(() => this.deleteChildPathsFromTasks()).catch((e2) => {
                throw e2;
              });
            });
          }
          flush(e2) {
            for (const t2 in e2)
              "FLUSH" === this.rs.caching.checkPath(t2) && e2[t2] && !e2[t2].local && ((0, u.default)("[Sync] Flushing", t2), e2[t2] = void 0);
            return e2;
          }
          doTask(e2) {
            return this.rs.local.getNodes([e2]).then((t2) => {
              const r2 = t2[e2];
              return void 0 === r2 || function(e3) {
                return e3.remote && e3.remote.revision && !e3.remote.itemsMap && !e3.remote.body;
              }(r2) ? m("get", e2, this.rs.remote.get(e2)) : this.needsRemotePut(r2) ? (r2.push = (0, d.deepClone)(r2.local), r2.push.timestamp = this.now(), this.rs.local.setNodes(this.flush(t2)).then(() => {
                let t3;
                return t3 = y(r2) ? { ifMatch: r2.common.revision } : { ifNoneMatch: "*" }, m("put", e2, this.rs.remote.put(e2, r2.push.body, r2.push.contentType, t3));
              })) : this.needsRemoteDelete(r2) ? (r2.push = { body: false, timestamp: this.now() }, this.rs.local.setNodes(this.flush(t2)).then(() => y(r2) ? m("delete", e2, this.rs.remote.delete(e2, { ifMatch: r2.common.revision })) : m("get", e2, this.rs.remote.get(e2)))) : y(r2) ? m("get", e2, this.rs.remote.get(e2, { ifNoneMatch: r2.common.revision })) : m("get", e2, this.rs.remote.get(e2));
            });
          }
          autoMergeFolder(e2) {
            if (e2.remote.itemsMap && (e2.common = e2.remote, delete e2.remote, e2.common.itemsMap)) {
              for (const t2 in e2.common.itemsMap)
                e2.local.itemsMap[t2] || (e2.local.itemsMap[t2] = false);
              (0, d.equal)(e2.local.itemsMap, e2.common.itemsMap) && delete e2.local;
            }
            return e2;
          }
          autoMergeDocument(e2) {
            return !function(e3) {
              return (!e3.remote || !e3.remote.revision || e3.remote.revision === e3.common.revision) && (void 0 === e3.common.body && false === e3.remote.body || e3.remote.body === e3.common.body && e3.remote.contentType === e3.common.contentType);
            }(e2) ? void 0 !== e2.remote.body && ((0, u.default)("[Sync] Emitting keep/revert"), this.rs.local._emitChange({ origin: "conflict", path: e2.path, oldValue: e2.local.body, newValue: e2.remote.body, lastCommonValue: e2.common.body, oldContentType: e2.local.contentType, newContentType: e2.remote.contentType, lastCommonContentType: e2.common.contentType }), e2.remote.body ? e2.common = e2.remote : e2.common = {}, delete e2.remote, delete e2.local) : delete (e2 = function(e3) {
              return e3.remote && false === e3.remote.body && e3.local && false === e3.local.body && delete e3.local, e3;
            }(e2)).remote, e2;
          }
          autoMerge(e2) {
            if (e2.remote) {
              if (e2.local)
                return (0, d.isFolder)(e2.path) ? this.autoMergeFolder(e2) : this.autoMergeDocument(e2);
              if ((0, d.isFolder)(e2.path))
                void 0 !== e2.remote.itemsMap && (e2.common = e2.remote, delete e2.remote);
              else if (void 0 !== e2.remote.body) {
                const t2 = { origin: "remote", path: e2.path, oldValue: false === e2.common.body ? void 0 : e2.common.body, newValue: false === e2.remote.body ? void 0 : e2.remote.body, oldContentType: e2.common.contentType, newContentType: e2.remote.contentType };
                if ((t2.oldValue || t2.newValue) && this.rs.local._emitChange(t2), !e2.remote.body)
                  return;
                e2.common = e2.remote, delete e2.remote;
              }
              return e2;
            }
            e2.common.body && this.rs.local._emitChange({ origin: "remote", path: e2.path, oldValue: e2.common.body, newValue: void 0, oldContentType: e2.common.contentType, newContentType: void 0 });
          }
          updateCommonTimestamp(e2, t2) {
            return n(this, void 0, void 0, function* () {
              return this.rs.local.getNodes([e2]).then((r2) => (r2[e2] && r2[e2].common && r2[e2].common.revision === t2 && (r2[e2].common.timestamp = this.now()), this.rs.local.setNodes(this.flush(r2))));
            });
          }
          markChildren(e2, t2, r2, o2) {
            return n(this, void 0, void 0, function* () {
              const n2 = [], i2 = {}, s2 = {};
              for (const r3 in t2)
                n2.push(e2 + r3), i2[e2 + r3] = t2[r3];
              for (const t3 in o2)
                n2.push(e2 + t3);
              return this.rs.local.getNodes(n2).then((t3) => {
                let n3, a2;
                for (const u2 in t3)
                  if (a2 = t3[u2], i2[u2])
                    a2 && a2.common ? g(a2, i2[u2].ETag) && (r2[u2] = (0, d.deepClone)(a2), r2[u2].remote = { revision: i2[u2].ETag, timestamp: this.now() }, r2[u2] = this.autoMerge(r2[u2])) : (n3 = this.rs.caching.checkPath(u2), "ALL" === n3 && (r2[u2] = { path: u2, common: { timestamp: this.now() }, remote: { revision: i2[u2].ETag, timestamp: this.now() } })), r2[u2] && i2[u2]["Content-Type"] && (r2[u2].remote.contentType = i2[u2]["Content-Type"]), r2[u2] && i2[u2]["Content-Length"] && (r2[u2].remote.contentLength = i2[u2]["Content-Length"]);
                  else if (o2[u2.substring(e2.length)] && a2 && a2.common) {
                    if (a2.common.itemsMap)
                      for (const e3 in a2.common.itemsMap)
                        s2[u2 + e3] = true;
                    if (a2.local && a2.local.itemsMap)
                      for (const e3 in a2.local.itemsMap)
                        s2[u2 + e3] = true;
                    if (a2.remote || (0, d.isFolder)(u2))
                      r2[u2] = void 0;
                    else if (r2[u2] = this.autoMerge(a2), void 0 === r2[u2]) {
                      const t4 = this.getParentPath(u2), n4 = r2[t4], o3 = u2.substring(e2.length);
                      n4 && n4.local && (delete n4.local.itemsMap[o3], (0, d.equal)(n4.local.itemsMap, n4.common.itemsMap) && delete n4.local);
                    }
                  }
                return this.deleteRemoteTrees(Object.keys(s2), r2).then((e3) => this.rs.local.setNodes(this.flush(e3)));
              });
            });
          }
          deleteRemoteTrees(e2, t2) {
            return n(this, void 0, void 0, function* () {
              return 0 === e2.length ? Promise.resolve(t2) : this.rs.local.getNodes(e2).then((e3) => n(this, void 0, void 0, function* () {
                const r2 = {};
                function n2(e4, t3) {
                  if (e4 && e4.itemsMap)
                    for (const n3 in e4.itemsMap)
                      r2[t3 + n3] = true;
                }
                for (const r3 in e3) {
                  const o2 = e3[r3];
                  o2 && ((0, d.isFolder)(r3) ? (n2(o2.common, r3), n2(o2.local, r3)) : o2.common && void 0 !== typeof o2.common.body && (t2[r3] = (0, d.deepClone)(o2), t2[r3].remote = { body: false, timestamp: this.now() }, t2[r3] = this.autoMerge(t2[r3])));
                }
                return this.deleteRemoteTrees(Object.keys(r2), t2).then((e4) => this.rs.local.setNodes(this.flush(e4)));
              }));
            });
          }
          completeFetch(e2, t2, r2, o2) {
            return n(this, void 0, void 0, function* () {
              let n2, i2;
              const s2 = (0, d.pathsFromRoot)(e2);
              return (0, d.isFolder)(e2) ? n2 = [e2] : (i2 = s2[1], n2 = [e2, i2]), this.rs.local.getNodes(n2).then((n3) => {
                let s3, a2, u2 = n3[e2];
                const c2 = {};
                function h2(e3) {
                  if (e3 && e3.itemsMap)
                    for (s3 in e3.itemsMap)
                      t2[s3] || (c2[s3] = true);
                }
                if ("object" == typeof u2 && u2.path === e2 && "object" == typeof u2.common || (u2 = { path: e2, common: {} }, n3[e2] = u2), u2.remote = { revision: o2, timestamp: this.now() }, (0, d.isFolder)(e2))
                  for (s3 in h2(u2.common), h2(u2.remote), u2.remote.itemsMap = {}, t2)
                    u2.remote.itemsMap[s3] = true;
                else
                  u2.remote.body = t2, u2.remote.contentType = r2, a2 = n3[i2], a2 && a2.local && a2.local.itemsMap && (s3 = e2.substring(i2.length), a2.local.itemsMap[s3] = true, (0, d.equal)(a2.local.itemsMap, a2.common.itemsMap) && delete a2.local);
                return n3[e2] = this.autoMerge(u2), { toBeSaved: n3, missingChildren: c2 };
              });
            });
          }
          completePush(e2, t2, r2, o2) {
            return n(this, void 0, void 0, function* () {
              return this.rs.local.getNodes([e2]).then((n2) => {
                const i2 = n2[e2];
                if (!i2.push)
                  throw this.stopped = true, new Error("completePush called but no push version!");
                return r2 ? ((0, u.default)("[Sync] We have a conflict"), i2.remote && i2.remote.revision === o2 || (i2.remote = { revision: o2 || "conflict", timestamp: this.now() }, delete i2.push), n2[e2] = this.autoMerge(i2)) : (i2.common = { revision: o2, timestamp: this.now() }, "put" === t2 ? (i2.common.body = i2.push.body, i2.common.contentType = i2.push.contentType, (0, d.equal)(i2.local.body, i2.push.body) && i2.local.contentType === i2.push.contentType && delete i2.local, delete i2.push) : "delete" === t2 && (false === i2.local.body ? n2[e2] = void 0 : delete i2.push)), this.rs.local.setNodes(this.flush(n2));
              });
            });
          }
          dealWithFailure(e2) {
            return n(this, void 0, void 0, function* () {
              return this.rs.local.getNodes([e2]).then((t2) => {
                if (t2[e2])
                  return delete t2[e2].push, this.rs.local.setNodes(this.flush(t2));
              });
            });
          }
          interpretStatus(e2) {
            const t2 = { statusCode: e2, successful: void 0, conflict: void 0, unAuth: void 0, notFound: void 0, changed: void 0, networkProblems: void 0 };
            if ("string" == typeof e2 && ("offline" === e2 || "timeout" === e2))
              return t2.successful = false, t2.networkProblems = true, t2;
            if ("number" == typeof e2) {
              const r2 = Math.floor(e2 / 100);
              return t2.successful = 2 === r2 || 304 === e2 || 412 === e2 || 404 === e2, t2.conflict = 412 === e2, t2.unAuth = 401 === e2 && this.rs.remote.token !== c.default.IMPLIED_FAKE_TOKEN || 402 === e2 || 403 === e2, t2.notFound = 404 === e2, t2.changed = 304 !== e2, t2;
            }
          }
          handleGetResponse(e2, t2, r2, o2, i2) {
            return n(this, void 0, void 0, function* () {
              return t2.notFound && (r2 = !!(0, d.isFolder)(e2) && {}), t2.changed ? this.completeFetch(e2, r2, o2, i2).then((t3) => (0, d.isFolder)(e2) ? this.corruptServerItemsMap(r2) ? ((0, u.default)("[Sync] WARNING: Discarding corrupt folder description from server for " + e2), false) : this.markChildren(e2, r2, t3.toBeSaved, t3.missingChildren).then(() => true) : this.rs.local.setNodes(this.flush(t3.toBeSaved)).then(() => true)) : this.updateCommonTimestamp(e2, i2).then(() => true);
            });
          }
          handleResponse(e2, t2, r2) {
            const n2 = this.interpretStatus(r2.statusCode);
            if (n2.successful) {
              if ("get" === t2)
                return this.handleGetResponse(e2, n2, r2.body, r2.contentType, r2.revision);
              if ("put" === t2 || "delete" === t2)
                return this.completePush(e2, t2, n2.conflict, r2.revision).then(function() {
                  return true;
                });
              throw new Error("cannot handle response for unknown action " + t2);
            }
            {
              let t3;
              return t3 = n2.unAuth ? new l.default() : n2.networkProblems ? new h.default("Network request failed.") : new Error("HTTP response code " + n2.statusCode + " received."), this.dealWithFailure(e2).then(() => {
                throw this.rs._emit("error", t3), t3;
              });
            }
          }
          finishTask(e2, t2 = true) {
            if (void 0 !== e2.action) {
              if (!(t2 && ((0, u.default)("[Sync] queue finished task:", e2.path), this._finishedTasks.push(e2), this._finishedTasks.length > 1)))
                return (0, u.default)("[Sync] run task:", e2.path), e2.promise.then((t3) => this.handleResponse(e2.path, e2.action, t3), (t3) => ((0, u.default)("[Sync] wireclient rejects its promise!", e2.path, e2.action, t3), this.handleResponse(e2.path, e2.action, { statusCode: "offline" }))).then((t3) => {
                  if (this._finishedTasks.shift(), delete this._timeStarted[e2.path], delete this._running[e2.path], t3 && this._tasks[e2.path]) {
                    for (let t4 = 0; t4 < this._tasks[e2.path].length; t4++)
                      this._tasks[e2.path][t4]();
                    delete this._tasks[e2.path];
                  }
                  this.rs._emit("sync-req-done"), this._finishedTasks.length > 0 ? this.finishTask(this._finishedTasks[0], false) : this.collectTasks(false).then(() => {
                    !this.hasTasks() || this.stopped ? ((0, u.default)("[Sync] Sync is done! Reschedule?", Object.getOwnPropertyNames(this._tasks).length, this.stopped), this.done || (this.done = true, this.rs._emit("sync-done"))) : setTimeout(() => {
                      this.doTasks();
                    }, 10);
                  });
                }, (t3) => {
                  (0, u.default)("[Sync] Error", t3), this._finishedTasks.shift(), delete this._timeStarted[e2.path], delete this._running[e2.path], this.rs._emit("sync-req-done"), this._finishedTasks.length > 0 ? this.finishTask(this._finishedTasks[0], false) : this.done || (this.done = true, this.rs._emit("sync-done"));
                });
              (0, u.default)("[Sync] delaying finished task:", e2.path);
            } else
              delete this._running[e2.path];
          }
          doTasks() {
            let e2, t2, r2 = 0;
            e2 = this.rs.remote.connected ? this.rs.remote.online ? this.numThreads : 1 : 0;
            const n2 = e2 - Object.getOwnPropertyNames(this._running).length;
            if (n2 <= 0)
              return true;
            for (t2 in this._tasks)
              if (!this._running[t2] && (this._timeStarted[t2] = this.now(), this._running[t2] = this.doTask(t2), this._running[t2].then(this.finishTask.bind(this)), r2++, r2 >= n2))
                return true;
            return r2 >= n2;
          }
          collectTasks(e2) {
            return n(this, void 0, void 0, function* () {
              return this.hasTasks() || this.stopped ? Promise.resolve() : this.collectDiffTasks().then((t2) => t2 || false === e2 ? Promise.resolve() : this.collectRefreshTasks(), function(e3) {
                throw e3;
              });
            });
          }
          addTask(e2, t2) {
            this._tasks[e2] || (this._tasks[e2] = []), "function" == typeof t2 && this._tasks[e2].push(t2);
          }
          sync() {
            return this.done = false, this.doTasks() ? Promise.resolve() : this.collectTasks().then(() => {
              try {
                this.doTasks();
              } catch (e2) {
                (0, u.default)("[Sync] doTasks error", e2);
              }
            }, function(e2) {
              throw (0, u.default)("[Sync] Sync error", e2), new Error("Local cache unavailable");
            });
          }
          static _rs_init(e2) {
            f = function() {
              (0, u.default)("[Sync] syncCycleCb calling syncCycle");
              const t2 = new s.default();
              t2.isBrowser() && function(e3, t3) {
                function r2(e4) {
                  const r3 = t3.getCurrentSyncInterval();
                  i.default.isBackground = !e4;
                  const n2 = t3.getCurrentSyncInterval();
                  t3._emit("sync-interval-change", { oldValue: r3, newValue: n2 });
                }
                e3.on("background", () => r2(false)), e3.on("foreground", () => r2(true));
              }(t2, e2), e2.sync || (e2.sync = new v(e2), e2.syncStopped && ((0, u.default)("[Sync] Instantiating sync stopped"), e2.sync.stopped = true, delete e2.syncStopped)), (0, u.default)("[Sync] syncCycleCb calling syncCycle"), e2.syncCycle();
            }, p = function() {
              e2.removeEventListener("connected", p), e2.startSync();
            }, e2.on("ready", f), e2.on("connected", p);
          }
          static _rs_cleanup(e2) {
            e2.stopSync(), e2.removeEventListener("ready", f), e2.removeEventListener("connected", p), e2.sync = void 0, delete e2.sync;
          }
        }
        (0, d.applyMixins)(v, [a.default]), e.exports = v;
      }, function(e, t, r) {
        "use strict";
        (function(t2) {
          var n = this && this.__awaiter || function(e2, t3, r2, n2) {
            return new (r2 || (r2 = Promise))(function(o2, i2) {
              function s2(e3) {
                try {
                  u2(n2.next(e3));
                } catch (e4) {
                  i2(e4);
                }
              }
              function a2(e3) {
                try {
                  u2(n2.throw(e3));
                } catch (e4) {
                  i2(e4);
                }
              }
              function u2(e3) {
                var t4;
                e3.done ? o2(e3.value) : (t4 = e3.value, t4 instanceof r2 ? t4 : new r2(function(e4) {
                  e4(t4);
                })).then(s2, a2);
              }
              u2((n2 = n2.apply(e2, t3 || [])).next());
            });
          }, o = this && this.__importDefault || function(e2) {
            return e2 && e2.__esModule ? e2 : { default: e2 };
          };
          const i = o(r(2)), s = o(r(11)), a = o(r(1)), u = r(0);
          let c;
          class h extends s.default {
            constructor(e2) {
              super(), this.addEvents(["change", "local-events-done"]), this.db = e2 || c, this.db ? (this.getsRunning = 0, this.putsRunning = 0, this.changesQueued = {}, this.changesRunning = {}, this.commitSlownessWarning = null) : (0, a.default)("[IndexedDB] Failed to open DB");
            }
            getNodes(e2) {
              return n(this, void 0, void 0, function* () {
                const t3 = [], r2 = {};
                for (let n2 = 0, o2 = e2.length; n2 < o2; n2++)
                  void 0 !== this.changesQueued[e2[n2]] ? r2[e2[n2]] = (0, u.deepClone)(this.changesQueued[e2[n2]] || void 0) : void 0 !== this.changesRunning[e2[n2]] ? r2[e2[n2]] = (0, u.deepClone)(this.changesRunning[e2[n2]] || void 0) : t3.push(e2[n2]);
                return t3.length > 0 ? this.getNodesFromDb(t3).then(function(e3) {
                  for (const t4 in r2)
                    e3[t4] = r2[t4];
                  return e3;
                }) : Promise.resolve(r2);
              });
            }
            setNodes(e2) {
              return n(this, void 0, void 0, function* () {
                for (const t3 in e2)
                  this.changesQueued[t3] = e2[t3] || false;
                return this.maybeFlush(), Promise.resolve();
              });
            }
            maybeFlush() {
              0 === this.putsRunning ? this.flushChangesQueued() : this.commitSlownessWarning || (this.commitSlownessWarning = t2.setInterval(function() {
                console.warn("WARNING: waited more than 10 seconds for previous commit to finish");
              }, 1e4));
            }
            flushChangesQueued() {
              this.commitSlownessWarning && (clearInterval(this.commitSlownessWarning), this.commitSlownessWarning = null), Object.keys(this.changesQueued).length > 0 && (this.changesRunning = this.changesQueued, this.changesQueued = {}, this.setNodesInDb(this.changesRunning).then(this.flushChangesQueued.bind(this)));
            }
            getNodesFromDb(e2) {
              return new Promise((t3, r2) => {
                const n2 = this.db.transaction(["nodes"], "readonly"), o2 = n2.objectStore("nodes"), i2 = {};
                this.getsRunning++, e2.map((e3) => {
                  o2.get(e3).onsuccess = (t4) => {
                    i2[e3] = t4.target.result;
                  };
                }), n2.oncomplete = () => {
                  t3(i2), this.getsRunning--;
                }, n2.onerror = n2.onabort = () => {
                  r2("get transaction error/abort"), this.getsRunning--;
                };
              });
            }
            setNodesInDb(e2) {
              return n(this, void 0, void 0, function* () {
                return new Promise((t3, r2) => {
                  const n2 = this.db.transaction(["nodes"], "readwrite"), o2 = n2.objectStore("nodes"), i2 = (/* @__PURE__ */ new Date()).getTime();
                  this.putsRunning++, (0, a.default)("[IndexedDB] Starting put", e2, this.putsRunning);
                  for (const t4 in e2) {
                    const r3 = e2[t4];
                    if ("object" == typeof r3)
                      try {
                        o2.put(r3);
                      } catch (e3) {
                        throw (0, a.default)("[IndexedDB] Error while putting", r3, e3), e3;
                      }
                    else
                      try {
                        o2.delete(t4);
                      } catch (e3) {
                        throw (0, a.default)("[IndexedDB] Error while removing", o2, r3, e3), e3;
                      }
                  }
                  n2.oncomplete = () => {
                    this.putsRunning--, (0, a.default)("[IndexedDB] Finished put", e2, this.putsRunning, (/* @__PURE__ */ new Date()).getTime() - i2 + "ms"), t3();
                  }, n2.onerror = () => {
                    this.putsRunning--, r2("transaction error");
                  }, n2.onabort = () => {
                    r2("transaction abort"), this.putsRunning--;
                  };
                });
              });
            }
            reset(e2) {
              const t3 = this.db.name;
              this.db.close(), h.clean(this.db.name, () => {
                h.open(t3, (t4, r2) => {
                  t4 ? (0, a.default)("[IndexedDB] Error while resetting local storage", t4) : this.db = r2, "function" == typeof e2 && e2(self);
                });
              });
            }
            forAllNodes(e2) {
              return n(this, void 0, void 0, function* () {
                return new Promise((t3) => {
                  this.db.transaction(["nodes"], "readonly").objectStore("nodes").openCursor().onsuccess = (r2) => {
                    const n2 = r2.target.result;
                    n2 ? (e2(this.migrate(n2.value)), n2.continue()) : t3();
                  };
                });
              });
            }
            closeDB() {
              0 === this.putsRunning ? this.db.close() : setTimeout(this.closeDB.bind(this), 100);
            }
            static open(e2, t3) {
              const r2 = setTimeout(function() {
                t3("timeout trying to open db");
              }, 1e4);
              try {
                const n2 = indexedDB.open(e2, 2);
                n2.onerror = function() {
                  (0, a.default)("[IndexedDB] Opening DB failed", n2), clearTimeout(r2), t3(n2.error);
                }, n2.onupgradeneeded = function(e3) {
                  const t4 = n2.result;
                  (0, a.default)("[IndexedDB] Upgrade: from ", e3.oldVersion, " to ", e3.newVersion), 1 !== e3.oldVersion && ((0, a.default)("[IndexedDB] Creating object store: nodes"), t4.createObjectStore("nodes", { keyPath: "path" })), (0, a.default)("[IndexedDB] Creating object store: changes"), t4.createObjectStore("changes", { keyPath: "path" });
                }, n2.onsuccess = function() {
                  clearTimeout(r2);
                  const o2 = n2.result;
                  if (!o2.objectStoreNames.contains("nodes") || !o2.objectStoreNames.contains("changes"))
                    return (0, a.default)("[IndexedDB] Missing object store. Resetting the database."), void h.clean(e2, function() {
                      h.open(e2, t3);
                    });
                  t3(null, n2.result);
                };
              } catch (n2) {
                (0, a.default)("[IndexedDB] Failed to open database: " + n2), (0, a.default)("[IndexedDB] Resetting database and trying again."), clearTimeout(r2), h.clean(e2, function() {
                  h.open(e2, t3);
                });
              }
            }
            static clean(e2, t3) {
              const r2 = indexedDB.deleteDatabase(e2);
              r2.onsuccess = function() {
                (0, a.default)("[IndexedDB] Done removing DB"), t3();
              }, r2.onerror = r2.onabort = function(t4) {
                console.error('Failed to remove database "' + e2 + '"', t4);
              };
            }
            static _rs_init(e2) {
              return new Promise((t3, r2) => {
                h.open("remotestorage", function(n2, o2) {
                  n2 ? r2(n2) : (c = o2, o2.onerror = () => {
                    e2._emit("error", n2);
                  }, t3());
                });
              });
            }
            static _rs_supported() {
              return new Promise((e2, t3) => {
                const r2 = (0, u.getGlobalContext)();
                let n2 = false;
                if ("undefined" != typeof navigator && navigator.userAgent.match(/Android (2|3|4\.[0-3])/) && (navigator.userAgent.match(/Chrome|Firefox/) || (n2 = true)), "indexedDB" in r2 && !n2)
                  try {
                    const r3 = indexedDB.open("rs-check");
                    r3.onerror = function() {
                      t3();
                    }, r3.onsuccess = function() {
                      r3.result.close(), indexedDB.deleteDatabase("rs-check"), e2();
                    };
                  } catch (e3) {
                    t3();
                  }
                else
                  t3();
              });
            }
            static _rs_cleanup(e2) {
              return new Promise((t3) => {
                e2.local && e2.local.closeDB(), h.clean("remotestorage", t3);
              });
            }
            diffHandler() {
            }
          }
          (0, u.applyMixins)(h, [i.default]), e.exports = h;
        }).call(this, r(6));
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        const o = n(r(11)), i = n(r(2)), s = n(r(1)), a = r(0), u = "remotestorage:cache:nodes:";
        function c(e2) {
          return e2.substr(0, u.length) === u || "remotestorage:cache:changes:" === e2.substr(0, "remotestorage:cache:changes:".length);
        }
        class h extends o.default {
          constructor() {
            super(), this.addEvents(["change", "local-events-done"]);
          }
          diffHandler(...e2) {
          }
          getNodes(e2) {
            const t2 = {};
            for (let r2 = 0, n2 = e2.length; r2 < n2; r2++)
              try {
                t2[e2[r2]] = JSON.parse(localStorage[u + e2[r2]]);
              } catch (n3) {
                t2[e2[r2]] = void 0;
              }
            return Promise.resolve(t2);
          }
          setNodes(e2) {
            for (const t2 in e2)
              localStorage[u + t2] = JSON.stringify(e2[t2]);
            return Promise.resolve();
          }
          forAllNodes(e2) {
            let t2;
            for (let r2 = 0, n2 = localStorage.length; r2 < n2; r2++)
              if (localStorage.key(r2).substr(0, u.length) === u) {
                try {
                  t2 = this.migrate(JSON.parse(localStorage[localStorage.key(r2)]));
                } catch (e3) {
                  t2 = void 0;
                }
                t2 && e2(t2);
              }
            return Promise.resolve();
          }
          static _rs_init() {
          }
          static _rs_supported() {
            return (0, a.localStorageAvailable)();
          }
          static _rs_cleanup() {
            const e2 = [];
            for (let t2 = 0, r2 = localStorage.length; t2 < r2; t2++) {
              const r3 = localStorage.key(t2);
              c(r3) && e2.push(r3);
            }
            e2.forEach((e3) => {
              (0, s.default)("[LocalStorage] Removing", e3), delete localStorage[e3];
            });
          }
        }
        (0, a.applyMixins)(h, [i.default]), e.exports = h;
      }, function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        };
        const o = n(r(2)), i = n(r(11)), s = r(0);
        class a extends i.default {
          constructor() {
            super(), this._storage = {}, this.addEvents(["change", "local-events-done"]);
          }
          getNodes(e2) {
            const t2 = {};
            for (let r2 = 0, n2 = e2.length; r2 < n2; r2++)
              t2[e2[r2]] = (0, s.deepClone)(this._storage[e2[r2]]);
            return Promise.resolve(t2);
          }
          setNodes(e2) {
            for (const t2 in e2)
              void 0 === e2[t2] ? delete this._storage[t2] : this._storage[t2] = e2[t2];
            return Promise.resolve();
          }
          forAllNodes(e2) {
            for (const t2 in this._storage)
              e2(this.migrate(this._storage[t2]));
            return Promise.resolve();
          }
          diffHandler() {
          }
          static _rs_init() {
          }
          static _rs_supported() {
            return true;
          }
          static _rs_cleanup() {
          }
        }
        (0, s.applyMixins)(a, [o.default]), e.exports = a;
      }]);
    });
  }
});
export default require_remotestorage();
/*! Bundled license information:

remotestoragejs/release/remotestorage.js:
  (*! remotestorage.js 2.0.0-beta.6, https://remotestorage.io, MIT licensed *)
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <http://feross.org>
   * @license  MIT
   *)
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  (*!
   * webfinger.js
   *   http://github.com/silverbucket/webfinger.js
   *
   * Developed and Maintained by:
   *   Nick Jennings <nick@silverbucket.net>
   *
   * webfinger.js is released under the AGPL (see LICENSE).
   *
   * You don't have to do anything special to choose one license or the other and you don't
   * have to notify anyone which license you are using.
   * Please see the corresponding license file for details of these licenses.
   * You are free to use, modify and distribute this software, but all copyright
   * information must remain.
   *
   *)
*/

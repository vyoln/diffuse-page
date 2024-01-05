import {
  PRODUCTION,
  SymmAlg,
  VERSION,
  decode,
  exchange,
  fromPosix,
  fromString,
  hasProp,
  isObject,
  isString,
  toPosix,
  toString,
  urlEncode,
  write
} from "./chunk-OG73DF6E.js";
import "./chunk-5BWDWTGZ.js";

// src/Javascript/Odd/components/capabilities.ts
async function collect(endpoints, dependencies) {
  const url = new URL(self.location.href);
  const username = url.searchParams.get("username") ?? "";
  if (!username)
    return null;
  const info = await retry(
    () => getClassifiedViaPostMessage(endpoints, dependencies.crypto),
    {
      tries: 20,
      timeout: 6e4,
      timeoutMessage: "Trying to retrieve UCAN(s) and readKey(s) from the auth lobby timed out after 60 seconds."
    }
  );
  const secrets = await translateClassifiedInfo(dependencies, info);
  if (!secrets) {
    throw new Error("Failed to retrieve secrets from lobby url parameters");
  }
  url.searchParams.delete("authorised");
  url.searchParams.delete("cancelled");
  url.searchParams.delete("newUser");
  url.searchParams.delete("username");
  history.replaceState(null, document.title, url.toString());
  return { ...secrets, username };
}
async function request(endpoints, dependencies, options = {}) {
  const { permissions } = options;
  const app = permissions?.app;
  const fs = permissions?.fs;
  const platform = permissions?.platform;
  const raw = permissions?.raw;
  const sharing = permissions?.sharing;
  const exchangeDid = await exchange(dependencies.crypto);
  const writeDid = await write(dependencies.crypto);
  const sharedRepo = false;
  const redirectTo = options.returnUrl || window.location.href;
  const params = [
    ["didExchange", exchangeDid],
    ["didWrite", writeDid],
    ["redirectTo", redirectTo],
    ["sdk", VERSION.toString()],
    ["sharedRepo", sharedRepo ? "t" : "f"],
    ["sharing", sharing ? "t" : "f"]
  ].concat(
    app ? [["appFolder", `${app.creator}/${app.name}`]] : [],
    fs?.private ? fs.private.map((p) => ["privatePath", toPosix(p, { absolute: true })]) : [],
    fs?.public ? fs.public.map((p) => ["publicPath", toPosix(p, { absolute: true })]) : [],
    raw ? [["raw", urlEncode(JSON.stringify(raw))]] : [],
    options.extraParams ? Object.entries(options.extraParams) : []
  ).concat((() => {
    const apps = platform?.apps;
    switch (typeof apps) {
      case "string":
        return [["app", apps]];
      case "object":
        return apps.map((a) => ["app", a]);
      default:
        return [];
    }
  })());
  window.location.href = endpoints.lobby + "?" + params.map(([k, v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v)).join("&");
}
async function getClassifiedViaPostMessage(endpoints, crypto) {
  const didExchange = await exchange(crypto);
  const iframe = await new Promise((resolve) => {
    const iframe2 = document.createElement("iframe");
    iframe2.id = "odd-secret-exchange";
    iframe2.style.width = "0";
    iframe2.style.height = "0";
    iframe2.style.border = "none";
    iframe2.style.display = "none";
    document.body.appendChild(iframe2);
    iframe2.onload = () => {
      resolve(iframe2);
    };
    iframe2.src = `${endpoints.lobby}/exchange.html`;
  });
  return new Promise((resolve, reject) => {
    function stop() {
      globalThis.removeEventListener("message", listen);
      document.body.removeChild(iframe);
      reject();
    }
    function listen(event) {
      if (new URL(event.origin).host !== new URL(endpoints.lobby).host)
        return stop();
      if (event.data == null)
        return stop();
      let classifiedInfo;
      try {
        classifiedInfo = JSON.parse(event.data);
      } catch {
        stop();
      }
      if (!isLobbyClassifiedInfo(classifiedInfo))
        stop();
      globalThis.removeEventListener("message", listen);
      try {
        document.body.removeChild(iframe);
      } catch {
        resolve(classifiedInfo);
      }
    }
    globalThis.addEventListener("message", listen);
    if (iframe.contentWindow == null) {
      throw new Error("Can't import UCANs & readKey(s): No access to its contentWindow");
    }
    const message = {
      webnative: "exchange-secrets",
      didExchange
    };
    iframe.contentWindow.postMessage(message, iframe.src);
  });
}
function isLobbyClassifiedInfo(obj) {
  return isObject(obj) && isString(obj.sessionKey) && isString(obj.secrets) && isString(obj.iv);
}
function isLobbySecrets(obj) {
  return isObject(obj) && isObject(obj.fs) && Object.values(obj.fs).every((a) => hasProp(a, "key") && hasProp(a, "bareNameFilter")) && Array.isArray(obj.ucans) && obj.ucans.every((a) => isString(a));
}
async function translateClassifiedInfo({ crypto }, classifiedInfo) {
  const rawSessionKey = await crypto.keystore.decrypt(
    fromString(classifiedInfo.sessionKey, "base64pad")
  );
  const isUtf16 = rawSessionKey[1] === 0;
  const sessionKey = isUtf16 ? fromString(
    new TextDecoder("utf-16").decode(rawSessionKey),
    "base64pad"
  ) : rawSessionKey;
  const secretsStr = await crypto.aes.decrypt(
    fromString(classifiedInfo.secrets, "base64pad"),
    sessionKey,
    SymmAlg.AES_GCM,
    fromString(classifiedInfo.iv, "base64pad")
  );
  const secrets = JSON.parse(
    toString(secretsStr, "utf8")
  );
  if (!isLobbySecrets(secrets))
    throw new Error("Invalid secrets received");
  const fileSystemSecrets = isLobbySecrets(secrets) ? Object.entries(secrets.fs).map(([posixPath, { bareNameFilter, key }]) => {
    return {
      bareNameFilter,
      path: fromPosix(posixPath),
      readKey: fromString(key, "base64pad")
    };
  }) : [];
  const ucans = secrets.ucans.map(
    (u) => decode(u)
  );
  return {
    fileSystemSecrets,
    ucans
  };
}
async function retry(action, options) {
  return new Promise((resolve, reject) => {
    if (options.tries > 0) {
      const unoMas = () => {
        retry(action, { ...options, tries: options.tries - 1 });
      };
      const timeoutId = setTimeout(unoMas, options.timeout);
      action().then(resolve, unoMas).finally(() => clearTimeout(timeoutId));
    } else {
      reject(new Error(options.timeoutMessage));
    }
  });
}
function implementation(dependencies) {
  const endpoints = PRODUCTION;
  return {
    collect: () => collect(endpoints, dependencies),
    request: (...args) => request(endpoints, dependencies, ...args)
  };
}
export {
  collect,
  implementation,
  request
};

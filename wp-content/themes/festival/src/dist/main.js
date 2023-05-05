// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bdaP8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "22dbcfd4d568e9cb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
var _resetCss = require("reset-css");
var _mainScss = require("./scss/main.scss");
var _carousel = require("./js/carousel");
var _messages = require("./js/messages");
var _newsletter = require("./js/newsletter");
var _menu = require("./js/menu");
var _slider = require("./js/slider");

},{"reset-css":"d49Ho","./scss/main.scss":"4Pg3x","./js/messages":"hLB4F","./js/newsletter":"9QeBf","./js/slider":"aMYz0","./js/carousel":"2DotB","./js/menu":"dTgwB"}],"d49Ho":[function() {},{}],"4Pg3x":[function() {},{}],"hLB4F":[function(require,module,exports) {
console.log("message.js charg\xe9");
// Module générique de gestion des messages d'infomrations
const messages = {
    // Méthode permettant d'ajouter UN SEUL message à l'interieur d'un élément
    addMessageToElement: function(messageContent, parentElement) {
        // avant d'ajouter notre message
        // nous allons supprimer les éventuels messages existants
        // dans parentElement
        messages.removeOldMessages(parentElement);
        // fabrication d'une balise p
        const messageElement = document.createElement("p");
        // je lui donne une classe pour identifier les messages
        messageElement.className = "message";
        // on ajoute le message dans la balise p
        messageElement.textContent = messageContent;
        // puis on injecte le p dans parentElement
        parentElement.prepend(messageElement);
    },
    removeOldMessages: function(parentElement) {
        // pour cibler tous les messages dans "parentElement"
        // je veux cilber tous les élement de classe 'message' dans ce dernier
        const oldMessages = parentElement.querySelectorAll(".message");
        for (const oneOldMessage of oldMessages)// https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
        oneOldMessage.remove();
    }
}; // on teste notre module
 // je cible un élément
 //const footer = document.querySelector('.footer');
 //messages.addMessageToElement('AH QUE COUCOU', slider);
 //messages.addMessageToElement('CA VA BIEN ?', slider);

},{}],"9QeBf":[function(require,module,exports) {
console.log("newsletter.js charg\xe9");
const newsletter = {
    init: function() {
        newsletter.addNewsLetterEvent();
        newsletter.closeNewsLetter();
        newsletter.newsLetterSubmit();
    },
    addNewsLetterEvent: function() {
        const menuItemElement = document.getElementById("newsletter");
        menuItemElement.addEventListener("click", newsletter.handleClickNewsLetter);
    },
    handleClickNewsLetter: function(event) {
        event.preventDefault();
        const newLetterPanel = document.querySelector(".newsletter");
        newLetterPanel.classList.add("newsletter--on");
    },
    closeNewsLetter: function() {
        const closeElement = document.querySelector(".newsletter__close");
        closeElement.addEventListener("click", newsletter.handleClickNewsletterCross);
    },
    handleClickNewsletterCross: function() {
        const newLetterPanel = document.querySelector(".newsletter");
        newLetterPanel.classList.remove("newsletter--on");
    },
    newsLetterSubmit: function() {
        const formElement = document.querySelector(".newsletter form");
        formElement.addEventListener("submit", newsletter.handleNewsLetterSubmit);
    },
    handleNewsLetterSubmit: function(event) {
        event.preventDefault();
        const inputElement = document.querySelector("#subscriber-email");
        const userValue = inputElement.value;
        const result = newsletter.isForbiddenEmail(userValue);
        if (result) {
            const allMessage = document.querySelectorAll(".message");
            for (const oneMessage of allMessage)oneMessage.remove();
            const newError = document.createElement("p");
            newError.textContent = "Les adresse jetables ne sont pas autoris\xe9s";
            newError.classList.add("message");
            const newsletterPanel = document.querySelector(".newsletter");
            newsletterPanel.prepend(newError);
        } else {
            alert("email OK !");
            const LetterPanel = document.querySelector(".newsletter");
            LetterPanel.classList.remove("newsletter--on");
        }
    },
    isForbiddenEmail: function(email) {
        const forbiddenDomains = [
            "@yopmail.com",
            "@yopmail.fr",
            "@yopmail.net",
            "@cool.fr.nf",
            "@jetable.fr.nf",
            "@courriel.fr.nf",
            "@moncourrier.fr.nf",
            "@monemail.fr.nf",
            "@monmail.fr.nf",
            "@hide.biz.st",
            "@mymail.infos.st"
        ];
        for (const domain of forbiddenDomains){
            if (email.includes(domain)) return true;
        }
        return false;
    }
};
document.addEventListener("DOMContentLoaded", newsletter.init);

},{}],"aMYz0":[function(require,module,exports) {
console.log("slider.js charg\xe9");
// ici on va gérer nos interactions avec le slider
const slider = {
    currentSlideNumber: 0,
    autoScrollDuration: 5000,
    init: function() {
        // on protège notre module : on fait en sorte de ne continuer que si on a bien un élément .slider sur la page
        if (document.querySelector(".slider") === null) // return ne revoie rien, mais nous permet de stopper l'exécution de la fonction
        return;
        // dès le chargement, on génère les boutons de navigation
        // attention, à faire AVANT d'utiliser ces boutons (par ex. pour les addEventListener en dessous)
        slider.generateNavButtons();
        // écouter le clic sur les boutons
        const navButtonList = document.querySelectorAll(".slider__nav__button");
        // on pose un écouteur pour le click sur chaque bouton
        for (const button of navButtonList)button.addEventListener("click", slider.onNavButtonClick);
        // dès le chargement, on démarre l'autoscroll
        slider.autoScroll();
    },
    generateNavButtons: function() {
        // on compte les slides
        const slideCount = document.querySelectorAll(".slider__item").length;
        // on génère autant d'éléments .sslider__nav__button que de slides
        for(let slideIndex = 0; slideIndex < slideCount; slideIndex++){
            // on utilise createElement pour générer un bouton (il n'est pas encore attaché au DOM)
            const newButton = document.createElement("div");
            newButton.innerText = slideIndex + 1;
            newButton.classList.add("slider__nav__button");
            newButton.classList.add("slider__nav__bar");
            // si on est en train de générer le premier bouton (si slideIndex = 0), on lui donne la classe active
            if (slideIndex === 0) newButton.classList.add("active");
            newButton.setAttribute("data-target-slide", slideIndex);
            const navContainer = document.querySelector(".slider__nav");
            // on rajoute l'élément créé au DOM
            navContainer.appendChild(newButton);
        }
    },
    onNavButtonClick: function(event) {
        // récupérer le bouton cliqué
        const targetButton = event.currentTarget;
        // on récupère la data "target-slide" pour savoir quelle est la slide qui correspond à ce bouton (dans le dataset, les attributs sont traduits en camelCase)
        const targetSlide = targetButton.dataset.targetSlide;
        // on déclenche le scroll vers cette slide
        slider.scrollToSlide(targetSlide);
        // on n'oublie pas de préciser le numéro de la slide courante pour ne pas perdre l'autoscroll
        slider.currentSlideNumber = targetSlide;
    },
    autoScroll: function() {
        // setInterval nous permet d'exécuter une fonction toutes les x millisecondes
        setInterval(function() {
            // on compte le nombre de slides
            // on fait -1 pour correspondre à la numérotation des slides qui commence à 0
            const slideCount = document.querySelectorAll(".slider__item").length - 1;
            // si la slide sur laquelle on se trouve est la dernière (ou plus !)
            // alors la slide cible est la slide 0
            if (slider.currentSlideNumber >= slideCount) slider.currentSlideNumber = 0;
            else // sinon on passe à la slide suivante
            slider.currentSlideNumber++;
            slider.scrollToSlide(slider.currentSlideNumber);
        }, slider.autoScrollDuration);
    },
    scrollToSlide: function(targetSlideNumber) {
        // on récupère le container du slider
        const sliderContainer = document.querySelector(".slider");
        const containerWidth = sliderContainer.offsetWidth;
        // on scrolle dans le container pour atteindre la slide désirée
        // on laisse le paramètre y à 0 => on ne scrolle pas verticalement  
        sliderContainer.scrollTo(containerWidth * targetSlideNumber, 0);
        // on gère l'affectation de la classe .active aux boutons de nav
        // on retire la classe .active à tous les bouton
        const navButtonList = document.querySelectorAll(".slider__nav__button");
        for (const button of navButtonList)button.classList.remove("active");
        // on ajoute la classe .active sur ce bouton
        // le bouton à cibler est celui qui a un data-target-slide qui correspond à la slide courante (targetSlideNumber fourni en paramètre ici)
        // pour sélectionner un élément via un attribut, on utilise le sélecteur css [attribut=valeur]
        const currentSlideButton = document.querySelector('.slider__nav__button[data-target-slide="' + targetSlideNumber + '"]');
        currentSlideButton.classList.add("active");
    }
};
document.addEventListener("DOMContentLoaded", slider.init);

},{}],"2DotB":[function(require,module,exports) {
console.log("carousel.js charg\xe9");
// ici on va gérer nos interactions avec le carousel
const carousel = {
    currentSlideNumber: 0,
    autoScrollDuration: 5000,
    init: function() {
        // on protège notre module : on fait en sorte de ne continuer que si on a bien un élément .carousel sur la page
        if (document.querySelector(".carousel") === null) // return ne revoie rien, mais nous permet de stopper l'exécution de la fonction
        return;
        // dès le chargement, on génère les boutons de navigation
        // attention, à faire AVANT d'utiliser ces boutons (par ex. pour les addEventListener en dessous)
        carousel.generateNavButtons();
        // écouter le clic sur les boutons
        const navButtonList = document.querySelectorAll(".carousel__nav__button");
        // on pose un écouteur pour le click sur chaque bouton
        for (const button of navButtonList)button.addEventListener("click", carousel.onNavButtonClick);
        // dès le chargement, on démarre l'autoscroll
        carousel.autoScroll();
    },
    generateNavButtons: function() {
        // on compte les slides
        const slideCount = document.querySelectorAll(".carousel__item").length;
        // on génère autant d'éléments .scarousel__nav__button que de slides
        for(let slideIndex = 0; slideIndex < slideCount; slideIndex++){
            // on utilise createElement pour générer un bouton (il n'est pas encore attaché au DOM)
            const newButton = document.createElement("div");
            newButton.innerText = slideIndex + 1;
            newButton.classList.add("carousel__nav__button");
            newButton.classList.add("carousel__nav__bar");
            // si on est en train de générer le premier bouton (si slideIndex = 0), on lui donne la classe active
            if (slideIndex === 0) newButton.classList.add("active");
            newButton.setAttribute("data-target-slide", slideIndex);
            const navContainer = document.querySelector(".carousel__nav");
            // on rajoute l'élément créé au DOM
            navContainer.appendChild(newButton);
        }
    },
    onNavButtonClick: function(event) {
        // récupérer le bouton cliqué
        const targetButton = event.currentTarget;
        // on récupère la data "target-slide" pour savoir quelle est la slide qui correspond à ce bouton (dans le dataset, les attributs sont traduits en camelCase)
        const targetSlide = targetButton.dataset.targetSlide;
        // on déclenche le scroll vers cette slide
        carousel.scrollToSlide(targetSlide);
        // on n'oublie pas de préciser le numéro de la slide courante pour ne pas perdre l'autoscroll
        carousel.currentSlideNumber = targetSlide;
    },
    autoScroll: function() {
        // setInterval nous permet d'exécuter une fonction toutes les x millisecondes
        setInterval(function() {
            // on compte le nombre de slides
            // on fait -1 pour correspondre à la numérotation des slides qui commence à 0
            const slideCount = document.querySelectorAll(".carousel__item").length - 1;
            // si la slide sur laquelle on se trouve est la dernière (ou plus !)
            // alors la slide cible est la slide 0
            if (carousel.currentSlideNumber >= slideCount) carousel.currentSlideNumber = 0;
            else // sinon on passe à la slide suivante
            carousel.currentSlideNumber++;
            carousel.scrollToSlide(carousel.currentSlideNumber);
        }, carousel.autoScrollDuration);
    },
    scrollToSlide: function(targetSlideNumber) {
        // on récupère le container du carousel
        const carouselContainer = document.querySelector(".carousel");
        const containerWidth = carouselContainer.offsetWidth;
        // on scrolle dans le container pour atteindre la slide désirée
        // on laisse le paramètre y à 0 => on ne scrolle pas verticalement  
        carouselContainer.scrollTo(containerWidth * targetSlideNumber, 0);
        // on gère l'affectation de la classe .active aux boutons de nav
        // on retire la classe .active à tous les bouton
        const navButtonList = document.querySelectorAll(".carousel__nav__button");
        for (const button of navButtonList)button.classList.remove("active");
        // on ajoute la classe .active sur ce bouton
        // le bouton à cibler est celui qui a un data-target-slide qui correspond à la slide courante (targetSlideNumber fourni en paramètre ici)
        // pour sélectionner un élément via un attribut, on utilise le sélecteur css [attribut=valeur]
        const currentSlideButton = document.querySelector('.carousel__nav__button[data-target-slide="' + targetSlideNumber + '"]');
        currentSlideButton.classList.add("active");
    }
};
document.addEventListener("DOMContentLoaded", carousel.init);

},{}],"dTgwB":[function(require,module,exports) {
const menu = {
    init: function() {
        //1. on selectionne le bouton
        const menuButton = document.querySelector(".top-bar__burger-button > i");
        const menuCloseButton = document.querySelector(".close-button");
        // on vérifie que les éléments du DOM nécessaires sont bien présents. Si ce n'est pas le cas :
        if (menuButton === null || menuCloseButton === null) // on utilise return pour interrompre la fonction
        return;
        //2. on ajoute un écouteur
        menuButton.addEventListener("click", menu.toggleNav);
        menuCloseButton.addEventListener("click", menu.toggleNav);
    },
    toggleNav: function(event) {
        const navMenu = document.querySelector(".main-menu");
        if (navMenu.style.display != "block") // si le texte est masqué on affiche le texte du bloc
        navMenu.style.display = "block";
        else navMenu.style.display = "none";
    }
};
document.addEventListener("DOMContentLoaded", menu.init);

},{}]},["bdaP8","gLLPy"], "gLLPy", "parcelRequire94c2")

//# sourceMappingURL=main.js.map

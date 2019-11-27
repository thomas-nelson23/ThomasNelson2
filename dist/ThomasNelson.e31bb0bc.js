// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  return "\n    <header>\n        <figure>\n            <img id=\"head\" src=\"/powder.jpg\" alt=\"\" width=\"500\" height=\"500\">\n        </figure>\n        <h1>".concat(st.title, "</h1>\n    </header>\n");
};

exports.default = _default;
},{}],"store/about.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  title: 'About Me',
  mainContent: 'About'
};
exports.default = _default;
},{}],"store/blog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  title: 'This is a Blog',
  mainContent: 'Blog'
}; // const blogArray = [
//     {
//         title: "clockwork",
//         subtitle: "what time is it?",
//         dateComplete: "10/10/2019",
//         description: "shows you the time. pretty cool",
//         technologiesUsed: "html, css, javascript, date",
//         soloContributor: true,
//         projectHighlights: "study time, nap time, party time",
//         netlifyUrl: "https://clockaflocka.netlify.com/",
//         githubUrl: "https://github.com/thomas-nelson23/Clockwork"
//     },
//     {
//         title: "student showcase",
//         subtitle: "nashville autumnal group project",
//         dateComplete: "11/15/2019",
//         description: "we learned soooo much about pull requests and merge conflicts",
//         technologiesUsed: "html, css, javascript, github",
//         soloContributor: false,
//         projectHighlights: "work in progress!",
//         netlifyUrl: "https://thomas-nelson.netlify.com/",
//         githubUrl: "https://github.com/thomas-nelson23/ThomasNelson2"
//     },
//     {
//         title: "palindromes",
//         subtitle: "tacocat, racecar, dr awkward",
//         dateComplete: "10/15/2019",
//         description: "forwards, backwards, is there a difference?",
//         technologiesUsed: "html, css, javascript, regex",
//         soloContributor: true,
//         projectHighlights: "one day the console will grow a tree",
//         netlifyUrl: "https://palindromer.netlify.com/",
//         githubUrl: "https://github.com/thomas-nelson23/Palindrome"
//     },
//     {
//         title: "to-do list",
//         subtitle: "learning jquery before angular was cool",
//         dateComplete: "03/01/2017",
//         description: "does not look nice. uses jquery to make a to-do list",
//         technologiesUsed: "html, css, javascript, jquery",
//         soloContributor: true,
//         projectHighlights: "it is hideous",
//         netlifyUrl: "https://whatchagonnado.netlify.com/",
//         githubUrl: "https://github.com/thomas-nelson23/To-do"
//     },
//     {
//         title: "dynamic dogs",
//         subtitle: "barking up the right tree",
//         dateComplete: "10/31/2019",
//         description: "dynamically populates a page to show off prized puppers. this was a code-along with the class!",
//         technologiesUsed: "html, css, javascript",
//         soloContributor: true,
//         projectHighlights: "template literals are literally the coolest",
//         netlifyUrl: "https://dynamicdogs.netlify.com/",
//         githubUrl: "https://github.com/thomas-nelson23/Dynamic-Dogs"
//     },
//     {
//         title: "tic-tac-toe",
//         subtitle: "that's what it is",
//         dateComplete: "04/01/2017",
//         description: "keeps score and other features",
//         technologiesUsed: "html, css, javascript",
//         soloContributor: true,
//         projectHighlights: "pretty cool",
//         netlifyUrl: "https://tic-tac-toe-thomas.netlify.com/",
//         githubUrl: "https://github.com/thomas-nelson23/Tic-Tac-Toe"
//     }
// ];
// var bloggy = document.getElementById("blogDiv");
// for (var indexer = 0; indexer < blogArray.length; indexer++) {
//     var blogTitle = blogArray[indexer].title.toUpperCase();
//     var subtitle = blogArray[indexer].subtitle;
//     var dateComplete = blogArray[indexer].dateComplete;
//     var description = blogArray[indexer].description;
//     var technologiesUsed = blogArray[indexer].technologiesUsed;
//     var projectHighlights = blogArray[indexer].projectHighlights;
//     var netlifyUrl = blogArray[indexer].netlifyUrl;
//     var githubUrl = blogArray[indexer].githubUrl;
//     bloggy.innerHTML += `<div class='entryDiv'><h2>${blogTitle}</h2>
//         <h3>${subtitle}</h3>
//         <strong>finished on ${dateComplete}</strong>
//         <p>${description}</p>
//         <div class='entryDetails'><p>Technologies used: ${technologiesUsed}</p>
//         <p>Project highlights: ${projectHighlights}</p>
//         <a href='${netlifyUrl}'><i class="fas fa-child"></i>view project</a><br>
//             <a href='${githubUrl}'><i class="fab fa-github-alt"></i>view code</a><br><hr></div> 
//         </div>`;
// }

exports.default = _default;
},{}],"store/contact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  title: 'Contact Me',
  mainContent: 'Contact'
};
exports.default = _default;
},{}],"store/home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  title: 'Welcome to my Portfolio',
  mainContent: "\n                <div class=\"hero\">\n                    <a href=\"#\" class=\"btn\">CTA</a>\n                </div>\n\n                <div class=\"text\">\n                <section class=\"content\">\n                    <h2>Hello</h2>\n                    <p>>I am a front-end web developer, audio engineer, and musician.</p>\n                    <a href=\"#\" class=\"btn btn--read\">Read More!</a>\n                </section>\n\n                <section class=\"content\">\n                    <h2>Something Else</h2>\n                    <p>more stufyy blah blahmore stufyy blah blahmore stufyy blah blahmore stufyy blah blahmore stufyy blah blahmore\n                    stufyy blah blah</p>\n                    <a href=\"#\" class=\"btn btn--read\">Read More!</a>\n                </section>\n\n                <section class=\"content\">\n                    <h2>And another one</h2>\n                    <p>more stufyy blah blahmore stufyy blah blahmore stufyy blah blahmore stufyy blah blahmore stufyy blah blah</p>\n                    <a href=\"#\" class=\"btn btn--read\">DON'T CLICK</a>\n                </section>\n                </div>\n        "
};
exports.default = _default;
},{}],"store/Links.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = ["Home", "About", "Contact", "Blog", "Gallery"];
exports.default = _default;
},{}],"store/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "about", {
  enumerable: true,
  get: function () {
    return _about.default;
  }
});
Object.defineProperty(exports, "blog", {
  enumerable: true,
  get: function () {
    return _blog.default;
  }
});
Object.defineProperty(exports, "contact", {
  enumerable: true,
  get: function () {
    return _contact.default;
  }
});
Object.defineProperty(exports, "home", {
  enumerable: true,
  get: function () {
    return _home.default;
  }
});
Object.defineProperty(exports, "Links", {
  enumerable: true,
  get: function () {
    return _Links.default;
  }
});

var _about = _interopRequireDefault(require("./about.js"));

var _blog = _interopRequireDefault(require("./blog.js"));

var _contact = _interopRequireDefault(require("./contact.js"));

var _home = _interopRequireDefault(require("./home.js"));

var _Links = _interopRequireDefault(require("./Links"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./about.js":"store/about.js","./blog.js":"store/blog.js","./contact.js":"store/contact.js","./home.js":"store/home.js","./Links":"store/Links.js"}],"components/nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = require("../store");

function linksBuilder(links) {
  return links.map(function (link) {
    return "<li class=navLi><a href=\"./".concat(link, "\">").concat(link, "</a></li>");
  }).join();
}

console.log(linksBuilder(_store.Links));

var _default = function _default() {
  return "\n<nav>\n<span class=\"fas burger fa-bars is-hidden--tablet\"></span>\n\n    <ul id=\"navigation\" class=\"is-shown--tablet\">\n        ".concat(linksBuilder(_store.Links), "\n    </ul>\n</nav>\n");
}; // < a href = "" >
//     <li class=navLi>Home</li>
//     </a >
// <a href="/about/index.html">
//     <li class=navLi>About</li>
// </a>
// <a href="/blog/index.html">
//     <li class=navLi>Blog</li>
// </a>
// <a href="/projects/index.html">
//     <li class=navLi>Projects</li>
// </a>
// <a href="/contact/index.html">
//     <li class=navLi>Contact</li>
// </a>


exports.default = _default;
},{"../store":"store/index.js"}],"components/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// import * as 
var _default = function _default(st) {
  return "\n    <main>\n        ".concat(st.mainContent, "\n    </main>\n");
};

exports.default = _default;
},{}],"components/footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n<footer>\n<br />\n<a href=\"https://github.com/thomas-nelson23\" target=\"blank\">Github<i class=\"fab fa-github\"></i></a>\n\n2019 Savvy Coders\n</footer>\n";
};

exports.default = _default;
},{}],"components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "header", {
  enumerable: true,
  get: function () {
    return _header.default;
  }
});
Object.defineProperty(exports, "nav", {
  enumerable: true,
  get: function () {
    return _nav.default;
  }
});
Object.defineProperty(exports, "main", {
  enumerable: true,
  get: function () {
    return _main.default;
  }
});
Object.defineProperty(exports, "footer", {
  enumerable: true,
  get: function () {
    return _footer.default;
  }
});

var _header = _interopRequireDefault(require("./header"));

var _nav = _interopRequireDefault(require("./nav"));

var _main = _interopRequireDefault(require("./main"));

var _footer = _interopRequireDefault(require("./footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./header":"components/header.js","./nav":"components/nav.js","./main":"components/main.js","./footer":"components/footer.js"}],"components/mainContent/about.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  "\n        <h1>About landing page</h1>\n    ";
};

exports.default = _default;
},{}],"components/mainContent/blog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  "\n        <h3>".concat(st.title, "</h3>\n        <div id=\"blogDiv\"></div>\n    ");
};

exports.default = _default;
},{}],"components/mainContent/home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  "\n        <h1>".concat(st.title, "</h1>\n    ");
};

exports.default = _default;
},{}],"components/mainContent/contact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  "\n        <main class=\"container\">\n\n        <h4>form</h4>\n\n        <form name=\"contact\" method=\"POST\" data-netlify=\"true\">\n            <div>\n                <label for=\"name\">Name: </label>\n                <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Full Name\">\n            </div>\n            <div>\n                <label for=\"email\">Email: </label>\n                <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"you@somewhere.com\">\n            </div>\n            <div>\n                <label for=\"phone\">Phone: </label>\n                <input type=\"tel\" name=\"phone\" id=\"phone\">\n            </div>\n            <div>\n                <label for=\"message\">Enter your message: </label>\n                <textarea name=\"msg\" id=\"msg\" cols=\"30\" rows=\"10\"></textarea>\n            </div>\n\n            <p>What's this message about?</p>\n\n            <div>\n                <input type=\"radio\" name=\"subject\" value=\"professional\" id=\"pro\" checked>\n                <label for=\"pro\">I'd like to hire you!</label>\n            </div>\n\n            <div>\n                <input type=\"radio\" name=\"subject\" value=\"personal\" id=\"personal\">\n                <label for=\"personal\">Personal message</label>\n            </div>\n\n            <div>\n                <input type=\"radio\" name=\"subject\" value=\"other\">\n                <label>Don't know/something else</label>\n            </div>\n\n            <div>\n                <input type=\"checkbox\" name=\"optin\" value=\"trusting\" id=\"news\" checked>\n                <label for=\"news\">Subscribe me to your newsletter!</label>\n            </div>\n\n\n            <div>\n                <label for=\"marketing\">How did you hear about me?</label>\n                <select name=\"marketing\">\n                    <optgroup label=\"Online\">\n                        <option value=\"social\">Social Media (FB, Twitter, LinkedIn)</option>\n                        <option value=\"github\">Online Portfolio (GitHub)</option>\n                        <option value=\"search\">Search Engine</option>\n                        <option value=\"email\">Email</option>\n                    </optgroup>\n                    <optgroup label=\"In-Person\">\n                        <option value=\"networking\">We met at a networking event</option>\n                        <option value=\"referral\">Personal referral</option>\n                        <option value=\"random\">We met somewhere else</option>\n                    </optgroup>\n                    <option value=\"other\">Other</option>\n                </select>\n            </div>\n\n            <input type=\"submit\" value=\"Submit\">\n        </form>\n\n    </main>\n    ";
};

exports.default = _default;
},{}],"components/mainContent/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "about", {
  enumerable: true,
  get: function () {
    return _about.default;
  }
});
Object.defineProperty(exports, "blog", {
  enumerable: true,
  get: function () {
    return _blog.default;
  }
});
Object.defineProperty(exports, "home", {
  enumerable: true,
  get: function () {
    return _home.default;
  }
});
Object.defineProperty(exports, "contact", {
  enumerable: true,
  get: function () {
    return _contact.default;
  }
});

var _about = _interopRequireDefault(require("./about.js"));

var _blog = _interopRequireDefault(require("./blog.js"));

var _home = _interopRequireDefault(require("./home.js"));

var _contact = _interopRequireDefault(require("./contact.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./about.js":"components/mainContent/about.js","./blog.js":"components/mainContent/blog.js","./home.js":"components/mainContent/home.js","./contact.js":"components/mainContent/contact.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _components = require("./components");

var _mainContent = require("./components/mainContent");

var state = _interopRequireWildcard(require("./store"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import Navigo from "Navigo";
//const router = new Navigo(location.origin)
function render(state) {
  document.querySelector('#root').innerHTML = "\n    ".concat((0, _components.header)(state), "\n    ").concat((0, _components.nav)(), "\n    ").concat((0, _components.main)(state), "\n    ").concat((0, _components.footer)(), "\n");
  router.updatePageLinks();
}

function handleNavigation(event) {
  var component = event.target.textContent;
  event.preventDefault();
  console.log(event.target.textContent);
  render(state[component]);
} // router.on(":page", params =>
//     render(
//         state[
//         `${params.page.slice(0, 1).toUpperCase()}${params.page
//             .slice(1)
//             .toLowerCase()}`
//         ]
//     )
//         .on("/", render())
//         .resolve();
// );


render(state);
document.querySelector('#navigation a').addEventListener('click', handleNavigation);
document.querySelector('#navigation a:nth-child(2)').addEventListener('click', handleNavigation);
document.querySelector('#navigation a:nth-child(3)').addEventListener('click', handleNavigation); //parallax effect (no additional code)

var parallax = document.querySelector(".hero");
window.addEventListener("scroll", function () {
  var scrolledHeight = window.pageYOffset,
      limit = parallax.offsetTop + parallax.offsetHeight;

  if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
    parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 1.5 + "px";
  } else {
    parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 5 + "px";
  }
});
},{"./components":"components/index.js","./components/mainContent":"components/mainContent/index.js","./store":"store/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52552" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/ThomasNelson.e31bb0bc.js.map
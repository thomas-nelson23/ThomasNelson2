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
})({"components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  return "\n    <header>\n        <figure>\n            <img id=\"head\" src=\"/powder.jpg\" alt=\"\" width=\"500\" height=\"500\">\n        </figure>\n        <h1>".concat(st.title, "</h1>\n    </header>\n");
};

exports.default = _default;
},{}],"store/About.js":[function(require,module,exports) {
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
},{}],"store/Blog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  title: 'This is a Blog',
  mainContent: 'Blog'
}; // const blogArray = 
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
// ;
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
// 

exports.default = _default;
},{}],"store/Contact.js":[function(require,module,exports) {
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
},{}],"store/Home.js":[function(require,module,exports) {
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
Object.defineProperty(exports, "About", {
  enumerable: true,
  get: function () {
    return _About.default;
  }
});
Object.defineProperty(exports, "Blog", {
  enumerable: true,
  get: function () {
    return _Blog.default;
  }
});
Object.defineProperty(exports, "Contact", {
  enumerable: true,
  get: function () {
    return _Contact.default;
  }
});
Object.defineProperty(exports, "Home", {
  enumerable: true,
  get: function () {
    return _Home.default;
  }
});
Object.defineProperty(exports, "Links", {
  enumerable: true,
  get: function () {
    return _Links.default;
  }
});

var _About = _interopRequireDefault(require("./About.js"));

var _Blog = _interopRequireDefault(require("./Blog.js"));

var _Contact = _interopRequireDefault(require("./Contact.js"));

var _Home = _interopRequireDefault(require("./Home.js"));

var _Links = _interopRequireDefault(require("./Links"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./About.js":"store/About.js","./Blog.js":"store/Blog.js","./Contact.js":"store/Contact.js","./Home.js":"store/Home.js","./Links":"store/Links.js"}],"components/Nav.js":[function(require,module,exports) {
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
} // console.log(linksBuilder(Links))


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
},{"../store":"store/index.js"}],"components/mainContent/About.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  "\n        <h1>About landing page</h1>\n    ";
};

exports.default = _default;
},{}],"components/mainContent/Blog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(st) {
  "\n        <h3>".concat(st.title, "</h3>\n        <div id=\"blogDiv\"></div>\n    ");
};

exports.default = _default;
},{}],"components/mainContent/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  "\n        <h1>Main</h1>\n    ";
};

exports.default = _default;
},{}],"components/mainContent/Contact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return "\n        <main class=\"container\">\n\n        <h4>form</h4>\n\n        <form name=\"contact\" method=\"POST\" data-netlify=\"true\">\n            <div>\n                <label for=\"name\">Name: </label>\n                <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Full Name\">\n            </div>\n            <div>\n                <label for=\"email\">Email: </label>\n                <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"you@somewhere.com\">\n            </div>\n            <div>\n                <label for=\"phone\">Phone: </label>\n                <input type=\"tel\" name=\"phone\" id=\"phone\">\n            </div>\n            <div>\n                <label for=\"message\">Enter your message: </label>\n                <textarea name=\"msg\" id=\"msg\" cols=\"30\" rows=\"10\"></textarea>\n            </div>\n\n            <p>What's this message about?</p>\n\n            <div>\n                <input type=\"radio\" name=\"subject\" value=\"professional\" id=\"pro\" checked>\n                <label for=\"pro\">I'd like to hire you!</label>\n            </div>\n\n            <div>\n                <input type=\"radio\" name=\"subject\" value=\"personal\" id=\"personal\">\n                <label for=\"personal\">Personal message</label>\n            </div>\n\n            <div>\n                <input type=\"radio\" name=\"subject\" value=\"other\">\n                <label>Don't know/something else</label>\n            </div>\n\n            <div>\n                <input type=\"checkbox\" name=\"optin\" value=\"trusting\" id=\"news\" checked>\n                <label for=\"news\">Subscribe me to your newsletter!</label>\n            </div>\n\n\n            <div>\n                <label for=\"marketing\">How did you hear about me?</label>\n                <select name=\"marketing\">\n                    <optgroup label=\"Online\">\n                        <option value=\"social\">Social Media (FB, Twitter, LinkedIn)</option>\n                        <option value=\"github\">Online Portfolio (GitHub)</option>\n                        <option value=\"search\">Search Engine</option>\n                        <option value=\"email\">Email</option>\n                    </optgroup>\n                    <optgroup label=\"In-Person\">\n                        <option value=\"networking\">We met at a networking event</option>\n                        <option value=\"referral\">Personal referral</option>\n                        <option value=\"random\">We met somewhere else</option>\n                    </optgroup>\n                    <option value=\"other\">Other</option>\n                </select>\n            </div>\n\n            <input type=\"submit\" value=\"Submit\">\n        </form>\n\n    </main>\n    ";
};

exports.default = _default;
},{}],"components/mainContent/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "About", {
  enumerable: true,
  get: function () {
    return _About.default;
  }
});
Object.defineProperty(exports, "Blog", {
  enumerable: true,
  get: function () {
    return _Blog.default;
  }
});
Object.defineProperty(exports, "Home", {
  enumerable: true,
  get: function () {
    return _Home.default;
  }
});
Object.defineProperty(exports, "Contact", {
  enumerable: true,
  get: function () {
    return _Contact.default;
  }
});

var _About = _interopRequireDefault(require("./About.js"));

var _Blog = _interopRequireDefault(require("./Blog.js"));

var _Home = _interopRequireDefault(require("./Home.js"));

var _Contact = _interopRequireDefault(require("./Contact.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./About.js":"components/mainContent/About.js","./Blog.js":"components/mainContent/Blog.js","./Home.js":"components/mainContent/Home.js","./Contact.js":"components/mainContent/Contact.js"}],"components/Main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var mainContent = _interopRequireWildcard(require("./mainContent"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default(st) {
  return "\n<main>\n    ".concat(mainContent[st.mainContent](st), "\n</main>\n");
};

exports.default = _default;
console.log(mainContent[Blog]);
},{"./mainContent":"components/mainContent/index.js"}],"components/Footer.js":[function(require,module,exports) {
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
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return _Header.default;
  }
});
Object.defineProperty(exports, "Nav", {
  enumerable: true,
  get: function () {
    return _Nav.default;
  }
});
Object.defineProperty(exports, "Main", {
  enumerable: true,
  get: function () {
    return _Main.default;
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function () {
    return _Footer.default;
  }
});

var _Header = _interopRequireDefault(require("./Header"));

var _Nav = _interopRequireDefault(require("./Nav"));

var _Main = _interopRequireDefault(require("./Main"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Header":"components/Header.js","./Nav":"components/Nav.js","./Main":"components/Main.js","./Footer":"components/Footer.js"}],"node_modules/Navigo/lib/navigo.min.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Navigo=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function n(e,n,o){this.root=null,this._routes=[],this._useHash=n,this._hash=void 0===o?"#":o,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!n&&t(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=n?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):n&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function o(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function i(e){return e.replace(/\/$/,"").split("/").length}function s(e,t){return i(t)-i(e)}function r(e,t){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){var i=function(e){var t=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(n.PARAMETER_REGEXP,function(e,o,i){return t.push(i),n.REPLACE_VARIABLE_REGEXP}).replace(n.WILDCARD_REGEXP,n.REPLACE_WILDCARD)+n.FOLLOWED_BY_SLASH_REGEXP,n.MATCH_REGEXP_FLAGS),paramNames:t}}(o(t.route)),s=i.regexp,r=i.paramNames,a=e.replace(/^\/+/,"/").match(s),h=function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}(a,r);return!!a&&{match:a,route:t,params:h}}).filter(function(e){return e})}(e,t)[0]||!1}function a(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),i=o(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:i}function h(e,n,o){var i,s=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===o&&(o="#"),t()&&!n?s(e).split(o)[0]:(i=e.split(o)).length>1?s(i[1]):s(i[0])}function u(t,n,o){if(n&&"object"===(void 0===n?"undefined":e(n))){if(n.before)return void n.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(t(),n.after&&n.after(o))},o);if(n.after)return t(),void(n.after&&n.after(o))}t()}return n.prototype={helpers:{match:r,root:a,clean:o,getOnlyURL:h},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];if("function"==typeof o[0])this._defaultHandler={handler:o[0],hooks:o[1]};else if(o.length>=2)if("/"===o[0]){var r=o[1];"object"===e(o[1])&&(r=o[1].uses),this._defaultHandler={handler:r,hooks:o[2]}}else this._add(o[0],o[1],o[2]);else"object"===e(o[0])&&Object.keys(o[0]).sort(s).forEach(function(e){t.on(e,o[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var n,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var a=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),l=h(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&l===this._lastRouteResolved.url&&a===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=r(l,this._routes))?(this._callLeave(),this._lastRouteResolved={url:l,query:a,hooks:o.route.hooks,params:o.params,name:o.route.name},n=o.route.handler,u(function(){u(function(){o.route.route instanceof RegExp?n.apply(void 0,o.match.slice(1,o.match.length)):n(o.params,a)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===l||"/"===l||l===this._hash||function(e,n,o){if(t()&&!n)return!1;if(!e.match(o))return!1;var i=e.split(o);return i.length<2||""===i[1]}(l,this._useHash,this._hash))?(u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(a)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(a)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){if((n.ctrlKey||n.metaKey)&&"a"==n.target.tagName.toLowerCase())return!1;var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e)for(i in n=o.route,t)n=n.toString().replace(":"+i,t[i]);return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){t()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof t&&(t=encodeURI(t)),this._routes.push("object"===(void 0===n?"undefined":e(n))?{route:t,handler:n.uses,name:n.as,hooks:o||n.hooks}:{route:t,handler:n,hooks:o}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;(o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:o(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},n.PARAMETER_REGEXP=/([:*])(\w+)/g,n.WILDCARD_REGEXP=/\*/g,n.REPLACE_VARIABLE_REGEXP="([^/]+)",n.REPLACE_WILDCARD="(?:.*)",n.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",n.MATCH_REGEXP_FLAGS="",n});


},{}],"index.js":[function(require,module,exports) {
"use strict";

var _components = require("./components");

var state = _interopRequireWildcard(require("./store"));

var _Navigo = _interopRequireDefault(require("Navigo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = new _Navigo.default(location.origin);

function render() {
  var st = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : state.Home;
  // console.log(st);
  document.querySelector('#root').innerHTML = "\n    ".concat((0, _components.Header)(st), "\n    ").concat((0, _components.Nav)(), "\n    ").concat((0, _components.Main)(st), "\n    ").concat((0, _components.Footer)(), "\n");
  router.updatePageLinks();
}

router.on(":page", function (params) {
  return render(state["".concat(params.page.slice(0, 1).toUpperCase()).concat(params.page.slice(1).toLowerCase())]);
}).on("/", render()).resolve(); //parallax effect (no additional code)
// var parallax = document.querySelector(".hero");
// window.addEventListener("scroll", function () {
//     var scrolledHeight = window.pageYOffset,
//         limit = parallax.offsetTop + parallax.offsetHeight;
//     if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
//         parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 1.5 + "px";
//     } else {
//         parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 5 + "px";
//     }
// });
},{"./components":"components/index.js","./store":"store/index.js","Navigo":"node_modules/Navigo/lib/navigo.min.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54444" + '/');

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
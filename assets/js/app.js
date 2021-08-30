// pagesJS
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.page=e()}(this,function(){"use strict";var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=l,n=s,i=function(t){return h(s(t))},r=h,o=d,a=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function s(t){for(var e,n=[],i=0,r=0,o="";null!=(e=a.exec(t));){var s=e[0],h=e[1],c=e.index;if(o+=t.slice(r,c),r=c+s.length,h)o+=h[1];else{o&&(n.push(o),o="");var u=e[2],f=e[3],d=e[4],l=e[5],g=e[6],v=e[7],m="+"===g||"*"===g,w="?"===g||"*"===g,y=u||"/",_=d||l||(v?".*":"[^"+y+"]+?");n.push({name:f||i++,prefix:u||"",delimiter:y,optional:w,repeat:m,pattern:p(_)})}}return r<t.length&&(o+=t.substr(r)),o&&n.push(o),n}function h(e){for(var n=new Array(e.length),i=0;i<e.length;i++)"object"==typeof e[i]&&(n[i]=new RegExp("^"+e[i].pattern+"$"));return function(i){for(var r="",o=i||{},a=0;a<e.length;a++){var s=e[a];if("string"!=typeof s){var h,c=o[s.name];if(null==c){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to be defined')}if(t(c)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received "'+c+'"');if(0===c.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var p=0;p<c.length;p++){if(h=encodeURIComponent(c[p]),!n[a].test(h))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received "'+h+'"');r+=(0===p?s.prefix:s.delimiter)+h}}else{if(h=encodeURIComponent(c),!n[a].test(h))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+h+'"');r+=s.prefix+h}}else r+=s}return r}}function c(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function p(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function u(t,e){return t.keys=e,t}function f(t){return t.sensitive?"":"i"}function d(t,e){for(var n=(e=e||{}).strict,i=!1!==e.end,r="",o=t[t.length-1],a="string"==typeof o&&/\/$/.test(o),s=0;s<t.length;s++){var h=t[s];if("string"==typeof h)r+=c(h);else{var p=c(h.prefix),u=h.pattern;h.repeat&&(u+="(?:"+p+u+")*"),r+=u=h.optional?p?"(?:"+p+"("+u+"))?":"("+u+")?":p+"("+u+")"}}return n||(r=(a?r.slice(0,-2):r)+"(?:\\/(?=$))?"),r+=i?"$":n&&a?"":"(?=\\/|$)",new RegExp("^"+r,f(e))}function l(e,n,i){return t(n=n||[])?i||(i={}):(i=n,n=[]),e instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return u(t,e)}(e,n):t(e)?function(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(l(t[r],e,n).source);return u(new RegExp("(?:"+i.join("|")+")",f(n)),e)}(e,n,i):function(t,e,n){for(var i=s(t),r=d(i,n),o=0;o<i.length;o++)"string"!=typeof i[o]&&e.push(i[o]);return u(r,e)}(e,n,i)}e.parse=n,e.compile=i,e.tokensToFunction=r,e.tokensToRegExp=o;var g,v="undefined"!=typeof document,m="undefined"!=typeof window,w="undefined"!=typeof history,y="undefined"!=typeof process,_=v&&document.ontouchstart?"touchstart":"click",b=m&&!(!window.history.location&&!window.location);function x(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function E(t,e){if("function"==typeof t)return E.call(this,"*",t);if("function"==typeof e)for(var n=new k(t,null,this),i=1;i<arguments.length;++i)this.callbacks.push(n.middleware(arguments[i]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function R(t,e,n){var i=this.page=n||E,r=i._window,o=i._hashbang,a=i._getBase();"/"===t[0]&&0!==t.indexOf(a)&&(t=a+(o?"#!":"")+t);var s=t.indexOf("?");this.canonicalPath=t;var h=new RegExp("^"+a.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1"));if(this.path=t.replace(h,"")||"/",o&&(this.path=this.path.replace("#!","")||"/"),this.title=v&&r.document.title,this.state=e||{},this.state.path=t,this.querystring=~s?i._decodeURLEncodedURIComponent(t.slice(s+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~s?t.slice(0,s):t),this.params={},this.hash="",!o){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=i._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function k(t,n,i){var r=this.page=i||U,o=n||{};o.strict=o.strict||r._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],o)}x.prototype.configure=function(t){var e=t||{};this._window=e.window||m&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&m,this._click=!1!==e.click&&v,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):m&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(_,this.clickHandler,!1):v&&n.document.removeEventListener(_,this.clickHandler,!1),this._hashbang&&m&&!w?n.addEventListener("hashchange",this._onpopstate,!1):m&&n.removeEventListener("hashchange",this._onpopstate,!1)},x.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},x.prototype._getBase=function(){var t=this._base;if(t)return t;var e=m&&this._window&&this._window.location;return m&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},x.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},x.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,b){var i=this._window.location;n=this._hashbang&&~i.hash.indexOf("#!")?i.hash.substr(2)+i.search:this._hashbang?i.search+i.hash:i.pathname+i.search+i.hash}this.replace(n,null,!0,e.dispatch)}},x.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(_,this.clickHandler,!1),m&&t.removeEventListener("popstate",this._onpopstate,!1),m&&t.removeEventListener("hashchange",this._onpopstate,!1)}},x.prototype.show=function(t,e,n,i){var r=new R(t,e,this),o=this.prevContext;return this.prevContext=r,this.current=r.path,!1!==n&&this.dispatch(r,o),!1!==r.handled&&!1!==i&&r.pushState(),r},x.prototype.back=function(t,e){var n=this;if(this.len>0){var i=this._window;w&&i.history.back(),this.len--}else t?setTimeout(function(){n.show(t,e)}):setTimeout(function(){n.show(n._getBase(),e)})},x.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&E.call(this,t,function(t){setTimeout(function(){n.replace(e)},0)}),"string"==typeof t&&void 0===e&&setTimeout(function(){n.replace(t)},0)},x.prototype.replace=function(t,e,n,i){var r=new R(t,e,this),o=this.prevContext;return this.prevContext=r,this.current=r.path,r.init=n,r.save(),!1!==i&&this.dispatch(r,o),r},x.prototype.dispatch=function(t,e){var n=0,i=0,r=this;function o(){var e=r.callbacks[n++];if(t.path===r.current)return e?void e(t,o):function(t){if(t.handled)return;var e,n=this._window;e=this._hashbang?b&&this._getBase()+n.location.hash.replace("#!",""):b&&n.location.pathname+n.location.search;if(e===t.canonicalPath)return;this.stop(),t.handled=!1,b&&(n.location.href=t.canonicalPath)}.call(r,t);t.handled=!1}e?function t(){var n=r.exits[i++];if(!n)return o();n(e,t)}():o()},x.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new k(t,null,this),i=1;i<arguments.length;++i)this.exits.push(n.middleware(arguments[i]))},x.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var i=0;i<n.length;i++)if(n[i].nodeName&&"A"===n[i].nodeName.toUpperCase()&&n[i].href){e=n[i];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var o=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==o)&&!(o&&o.indexOf("mailto:")>-1)&&(r?!e.target.baseVal:!e.target)&&(r||this.sameOrigin(e.href))){var a=r?e.href.baseVal:e.pathname+e.search+(e.hash||"");a="/"!==a[0]?"/"+a:a,y&&a.match(/^\/[a-zA-Z]:\//)&&(a=a.replace(/^\/[a-zA-Z]:\//,"/"));var s=a,h=this._getBase();0===a.indexOf(h)&&(a=a.substr(h.length)),this._hashbang&&(a=a.replace("#!","")),(!h||s!==a||b&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(s))}}}}},x.prototype._onpopstate=(g=!1,m?(v&&"complete"===document.readyState?g=!0:window.addEventListener("load",function(){setTimeout(function(){g=!0},0)}),function(t){if(g)if(t.state){var e=t.state.path;this.replace(e,t.state)}else if(b){var n=this._window.location;this.show(n.pathname+n.search+n.hash,void 0,void 0,!1)}}):function(){}),x.prototype._which=function(t){return null==(t=t||m&&this._window.event).which?t.button:t.which},x.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&b)return new URL(t,e.location.toString());if(v){var n=e.document.createElement("a");return n.href=t,n}},x.prototype.sameOrigin=function(t){if(!t||!b)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},x.prototype._samePath=function(t){if(!b)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},x.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},R.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,w&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},R.prototype.save=function(){var t=this.page;w&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},k.prototype.middleware=function(t){var e=this;return function(n,i){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,i);i()}},k.prototype.match=function(t,e){var n=this.keys,i=t.indexOf("?"),r=~i?t.slice(0,i):t,o=this.regexp.exec(decodeURIComponent(r));if(!o)return!1;delete e[0];for(var a=1,s=o.length;a<s;++a){var h=n[a-1],c=this.page._decodeURLEncodedURIComponent(o[a]);void 0===c&&hasOwnProperty.call(e,h.name)||(e[h.name]=c)}return!0};var U=function t(){var e=new x;function n(){return E.apply(e,arguments)}return n.callbacks=e.callbacks,n.exits=e.exits,n.base=e.base.bind(e),n.strict=e.strict.bind(e),n.start=e.start.bind(e),n.stop=e.stop.bind(e),n.show=e.show.bind(e),n.back=e.back.bind(e),n.redirect=e.redirect.bind(e),n.replace=e.replace.bind(e),n.dispatch=e.dispatch.bind(e),n.exit=e.exit.bind(e),n.configure=e.configure.bind(e),n.sameOrigin=e.sameOrigin.bind(e),n.clickHandler=e.clickHandler.bind(e),n.create=t,Object.defineProperty(n,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(n,"current",{get:function(){return e.current},set:function(t){e.current=t}}),n.Context=R,n.Route=k,n}(),L=U,C=U;return L.default=C,L});


function initRoutes () {
  var Routes = {

    home : function(context, next){ 
    var html = document.open('views/home.html');
    document.getElementById("root").innerHTML=html;
    },
    
    login : function(context, next){ 
    document.getElementById("root").innerHTML='<object type="text/html" data="views/login.html" ></object>';
    },
    
    singup : function(context, next){ 
    document.getElementById("root").innerHTML='<object type="text/html" data="views/signup.html" ></object>';
    },

    notfound : function (context, next) { document.location.href="/"; },

  };

  // page.base('/');
  page('/', Routes.home);
  page('/login', Routes.login, );
  page('/signup', Routes.singup, );
  page('/singup/*', Routes.singup);

  page('*', function(){ console.log('404 Page not Found') });
  page();

/*  function login(ctx){
  $('body')
    .empty()
    .append('<h1>' + ctx.user.name + '<h1>');
}*/


}

initRoutes();



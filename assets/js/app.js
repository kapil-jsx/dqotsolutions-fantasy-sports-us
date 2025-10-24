/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*! jQuery Validation Plugin - v1.16.0 - 12/2/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return!c.settings.submitHandler||(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&null!=j.form){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]);var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)a[b]&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);if("function"==typeof f.normalizer){if(i=f.normalizer.call(b,i),"string"!=typeof i)throw new TypeError("The normalizer should return a string value.");delete f.normalizer}for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j instanceof TypeError&&(j.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t="transitionend",e=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},i=t=>{const i=e(t);return i&&document.querySelector(i)?i:null},n=t=>{const i=e(t);return i?document.querySelector(i):null},s=e=>{e.dispatchEvent(new Event(t))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,g=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},m=t=>{"function"==typeof t&&t()},_=(e,i,n=!0)=>{if(!n)return void m(e);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(i)+5;let r=!1;const a=({target:n})=>{n===i&&(r=!0,i.removeEventListener(t,a),m(e))};i.addEventListener(t,a),setTimeout((()=>{r||s(i)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=N(t);return C.has(o)||(o=t),[n,s,o]}function D(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return j(s,{delegateTarget:r}),n.oneOff&&P.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return j(n,{delegateTarget:t}),i.oneOff&&P.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function S(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function I(t,e,i,n){const s=e[i]||{};for(const o of Object.keys(s))if(o.includes(n)){const n=s[o];S(t,e,i,n.callable,n.delegationSelector)}}function N(t){return t=t.replace(y,""),T[t]||t}const P={on(t,e,i,n){D(t,e,i,n,!1)},one(t,e,i,n){D(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))I(t,l,i,e.slice(1));for(const i of Object.keys(c)){const n=i.replace(w,"");if(!a||e.includes(n)){const e=c[i];S(t,l,r,e.callable,e.delegationSelector)}}}else{if(!Object.keys(c).length)return;S(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==N(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());let l=new Event(e,{bubbles:o,cancelable:!0});return l=j(l,i),a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function j(t,e){for(const[i,n]of Object.entries(e||{}))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}const M=new Map,H={set(t,e,i){M.has(t)||M.set(t,new Map);const n=M.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>M.has(t)&&M.get(t).get(e)||null,remove(t,e){if(!M.has(t))return;const i=M.get(t);i.delete(e),0===i.size&&M.delete(t)}};function $(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function W(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const B={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${W(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${W(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=$(t.dataset[n])}return e},getDataAttribute:(t,e)=>$(t.getAttribute(`data-bs-${W(e)}`))};class F{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?B.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?B.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const n of Object.keys(e)){const s=e[n],r=t[n],a=o(r)?"element":null==(i=r)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)}var i}}class z extends F{constructor(t,e){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(e),H.set(this._element,this.constructor.DATA_KEY,this))}dispose(){H.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return H.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.2.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const q=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;P.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const o=n(this)||this.closest(`.${s}`);t.getOrCreateInstance(o)[e]()}))};class R extends z{static get NAME(){return"alert"}close(){if(P.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),P.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=R.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}q(R,"close"),g(R);const V='[data-bs-toggle="button"]';class K extends z{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=K.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}P.on(document,"click.bs.button.data-api",V,(t=>{t.preventDefault();const e=t.target.closest(V);K.getOrCreateInstance(e).toggle()})),g(K);const Q={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))}},X={endCallback:null,leftCallback:null,rightCallback:null},Y={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class U extends F{constructor(t,e){super(),this._element=t,t&&U.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return X}static get DefaultType(){return Y}static get NAME(){return"swipe"}dispose(){P.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),m(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&m(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(P.on(this._element,"pointerdown.bs.swipe",(t=>this._start(t))),P.on(this._element,"pointerup.bs.swipe",(t=>this._end(t))),this._element.classList.add("pointer-event")):(P.on(this._element,"touchstart.bs.swipe",(t=>this._start(t))),P.on(this._element,"touchmove.bs.swipe",(t=>this._move(t))),P.on(this._element,"touchend.bs.swipe",(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const G="next",J="prev",Z="left",tt="right",et="slid.bs.carousel",it="carousel",nt="active",st={ArrowLeft:tt,ArrowRight:Z},ot={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},rt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class at extends z{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===it&&this.cycle()}static get Default(){return ot}static get DefaultType(){return rt}static get NAME(){return"carousel"}next(){this._slide(G)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(J)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?P.one(this._element,et,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void P.one(this._element,et,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?G:J;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&P.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(P.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),P.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&U.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of Q.find(".carousel-item img",this._element))P.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(Z)),rightCallback:()=>this._slide(this._directionToOrder(tt)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new U(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=st[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=Q.findOne(".active",this._indicatorsElement);e.classList.remove(nt),e.removeAttribute("aria-current");const i=Q.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(nt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===G,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>P.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r("slide.bs.carousel").defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(nt),i.classList.remove(nt,c,l),this._isSliding=!1,r(et)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return Q.findOne(".active.carousel-item",this._element)}_getItems(){return Q.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===Z?J:G:t===Z?G:J}_orderToDirection(t){return p()?t===J?Z:tt:t===J?tt:Z}static jQueryInterface(t){return this.each((function(){const e=at.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}P.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const e=n(this);if(!e||!e.classList.contains(it))return;t.preventDefault();const i=at.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");return s?(i.to(s),void i._maybeEnableCycle()):"next"===B.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),P.on(window,"load.bs.carousel.data-api",(()=>{const t=Q.find('[data-bs-ride="carousel"]');for(const e of t)at.getOrCreateInstance(e)})),g(at);const lt="show",ct="collapse",ht="collapsing",dt='[data-bs-toggle="collapse"]',ut={parent:null,toggle:!0},ft={parent:"(null|element)",toggle:"boolean"};class pt extends z{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=Q.find(dt);for(const t of n){const e=i(t),n=Q.find(e).filter((t=>t===this._element));null!==e&&n.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ut}static get DefaultType(){return ft}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>pt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(P.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(ct),this._element.classList.add(ht),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct,lt),this._element.style[e]="",P.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(P.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(ht),this._element.classList.remove(ct,lt);for(const t of this._triggerArray){const e=n(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct),P.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(lt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(dt);for(const e of t){const t=n(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=Q.find(":scope .collapse .collapse",this._config.parent);return Q.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=pt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}P.on(document,"click.bs.collapse.data-api",dt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=i(this),n=Q.find(e);for(const t of n)pt.getOrCreateInstance(t,{toggle:!1}).toggle()})),g(pt);var gt="top",mt="bottom",_t="right",bt="left",vt="auto",yt=[gt,mt,_t,bt],wt="start",At="end",Et="clippingParents",Tt="viewport",Ct="popper",Ot="reference",xt=yt.reduce((function(t,e){return t.concat([e+"-"+wt,e+"-"+At])}),[]),kt=[].concat(yt,[vt]).reduce((function(t,e){return t.concat([e,e+"-"+wt,e+"-"+At])}),[]),Lt="beforeRead",Dt="read",St="afterRead",It="beforeMain",Nt="main",Pt="afterMain",jt="beforeWrite",Mt="write",Ht="afterWrite",$t=[Lt,Dt,St,It,Nt,Pt,jt,Mt,Ht];function Wt(t){return t?(t.nodeName||"").toLowerCase():null}function Bt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Ft(t){return t instanceof Bt(t).Element||t instanceof Element}function zt(t){return t instanceof Bt(t).HTMLElement||t instanceof HTMLElement}function qt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof Bt(t).ShadowRoot||t instanceof ShadowRoot)}const Rt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];zt(s)&&Wt(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});zt(n)&&Wt(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function Vt(t){return t.split("-")[0]}var Kt=Math.max,Qt=Math.min,Xt=Math.round;function Yt(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Ut(){return!/^((?!chrome|android).)*safari/i.test(Yt())}function Gt(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,o=1;e&&zt(t)&&(s=t.offsetWidth>0&&Xt(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Xt(n.height)/t.offsetHeight||1);var r=(Ft(t)?Bt(t):window).visualViewport,a=!Ut()&&i,l=(n.left+(a&&r?r.offsetLeft:0))/s,c=(n.top+(a&&r?r.offsetTop:0))/o,h=n.width/s,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function Jt(t){var e=Gt(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Zt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&qt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function te(t){return Bt(t).getComputedStyle(t)}function ee(t){return["table","td","th"].indexOf(Wt(t))>=0}function ie(t){return((Ft(t)?t.ownerDocument:t.document)||window.document).documentElement}function ne(t){return"html"===Wt(t)?t:t.assignedSlot||t.parentNode||(qt(t)?t.host:null)||ie(t)}function se(t){return zt(t)&&"fixed"!==te(t).position?t.offsetParent:null}function oe(t){for(var e=Bt(t),i=se(t);i&&ee(i)&&"static"===te(i).position;)i=se(i);return i&&("html"===Wt(i)||"body"===Wt(i)&&"static"===te(i).position)?e:i||function(t){var e=/firefox/i.test(Yt());if(/Trident/i.test(Yt())&&zt(t)&&"fixed"===te(t).position)return null;var i=ne(t);for(qt(i)&&(i=i.host);zt(i)&&["html","body"].indexOf(Wt(i))<0;){var n=te(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function re(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ae(t,e,i){return Kt(t,Qt(e,i))}function le(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function ce(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const he={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=Vt(i.placement),l=re(a),c=[bt,_t].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return le("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:ce(t,yt))}(s.padding,i),d=Jt(o),u="y"===l?gt:bt,f="y"===l?mt:_t,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],g=r[l]-i.rects.reference[l],m=oe(o),_=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,b=p/2-g/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=ae(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Zt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function de(t){return t.split("-")[1]}var ue={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fe(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,g=void 0===p?0:p,m="function"==typeof h?h({x:f,y:g}):{x:f,y:g};f=m.x,g=m.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=bt,y=gt,w=window;if(c){var A=oe(i),E="clientHeight",T="clientWidth";A===Bt(i)&&"static"!==te(A=ie(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===gt||(s===bt||s===_t)&&o===At)&&(y=mt,g-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,g*=l?1:-1),s!==bt&&(s!==gt&&s!==mt||o!==At)||(v=_t,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&ue),x=!0===h?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:Xt(e*n)/n||0,y:Xt(i*n)/n||0}}({x:f,y:g}):{x:f,y:g};return f=x.x,g=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?g+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const pe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:Vt(e.placement),variation:de(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,fe(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,fe(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var ge={passive:!0};const me={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=Bt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,ge)})),a&&l.addEventListener("resize",i.update,ge),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,ge)})),a&&l.removeEventListener("resize",i.update,ge)}},data:{}};var _e={left:"right",right:"left",bottom:"top",top:"bottom"};function be(t){return t.replace(/left|right|bottom|top/g,(function(t){return _e[t]}))}var ve={start:"end",end:"start"};function ye(t){return t.replace(/start|end/g,(function(t){return ve[t]}))}function we(t){var e=Bt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ae(t){return Gt(ie(t)).left+we(t).scrollLeft}function Ee(t){var e=te(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Te(t){return["html","body","#document"].indexOf(Wt(t))>=0?t.ownerDocument.body:zt(t)&&Ee(t)?t:Te(ne(t))}function Ce(t,e){var i;void 0===e&&(e=[]);var n=Te(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=Bt(n),r=s?[o].concat(o.visualViewport||[],Ee(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Ce(ne(r)))}function Oe(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function xe(t,e,i){return e===Tt?Oe(function(t,e){var i=Bt(t),n=ie(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Ut();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+Ae(t),y:l}}(t,i)):Ft(e)?function(t,e){var i=Gt(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):Oe(function(t){var e,i=ie(t),n=we(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=Kt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=Kt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ae(t),l=-n.scrollTop;return"rtl"===te(s||i).direction&&(a+=Kt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(ie(t)))}function ke(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?Vt(s):null,r=s?de(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case gt:e={x:a,y:i.y-n.height};break;case mt:e={x:a,y:i.y+i.height};break;case _t:e={x:i.x+i.width,y:l};break;case bt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?re(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case wt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case At:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function Le(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.strategy,r=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?Et:a,c=i.rootBoundary,h=void 0===c?Tt:c,d=i.elementContext,u=void 0===d?Ct:d,f=i.altBoundary,p=void 0!==f&&f,g=i.padding,m=void 0===g?0:g,_=le("number"!=typeof m?m:ce(m,yt)),b=u===Ct?Ot:Ct,v=t.rects.popper,y=t.elements[p?b:u],w=function(t,e,i,n){var s="clippingParents"===e?function(t){var e=Ce(ne(t)),i=["absolute","fixed"].indexOf(te(t).position)>=0&&zt(t)?oe(t):t;return Ft(i)?e.filter((function(t){return Ft(t)&&Zt(t,i)&&"body"!==Wt(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=xe(t,i,n);return e.top=Kt(s.top,e.top),e.right=Qt(s.right,e.right),e.bottom=Qt(s.bottom,e.bottom),e.left=Kt(s.left,e.left),e}),xe(t,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(Ft(y)?y:y.contextElement||ie(t.elements.popper),l,h,r),A=Gt(t.elements.reference),E=ke({reference:A,element:v,strategy:"absolute",placement:s}),T=Oe(Object.assign({},v,E)),C=u===Ct?T:A,O={top:w.top-C.top+_.top,bottom:C.bottom-w.bottom+_.bottom,left:w.left-C.left+_.left,right:C.right-w.right+_.right},x=t.modifiersData.offset;if(u===Ct&&x){var k=x[s];Object.keys(O).forEach((function(t){var e=[_t,mt].indexOf(t)>=0?1:-1,i=[gt,mt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}const De={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,g=i.allowedAutoPlacements,m=e.options.placement,_=Vt(m),b=l||(_!==m&&p?function(t){if(Vt(t)===vt)return[];var e=be(t);return[ye(t),e,ye(e)]}(m):[be(m)]),v=[m].concat(b).reduce((function(t,i){return t.concat(Vt(i)===vt?function(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?kt:l,h=de(n),d=h?a?xt:xt.filter((function(t){return de(t)===h})):yt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=Le(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[Vt(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:g}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=Vt(O),k=de(O)===wt,L=[gt,mt].indexOf(x)>=0,D=L?"width":"height",S=Le(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),I=L?k?_t:bt:k?mt:gt;y[D]>w[D]&&(I=be(I));var N=be(I),P=[];if(o&&P.push(S[x]<=0),a&&P.push(S[I]<=0,S[N]<=0),P.every((function(t){return t}))){T=O,E=!1;break}A.set(O,P)}if(E)for(var j=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==j(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Se(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Ie(t){return[gt,_t,mt,bt].some((function(e){return t[e]>=0}))}const Ne={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=Le(e,{elementContext:"reference"}),a=Le(e,{altBoundary:!0}),l=Se(r,n),c=Se(a,s,o),h=Ie(l),d=Ie(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},Pe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=kt.reduce((function(t,i){return t[i]=function(t,e,i){var n=Vt(t),s=[bt,gt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[bt,_t].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},je={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=ke({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},Me={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,g=void 0===p?0:p,m=Le(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=Vt(e.placement),b=de(e.placement),v=!b,y=re(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof g?g(Object.assign({},e.rects,{placement:e.placement})):g,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,D="y"===y?gt:bt,S="y"===y?mt:_t,I="y"===y?"height":"width",N=A[y],P=N+m[D],j=N-m[S],M=f?-T[I]/2:0,H=b===wt?E[I]:T[I],$=b===wt?-T[I]:-E[I],W=e.elements.arrow,B=f&&W?Jt(W):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=F[D],q=F[S],R=ae(0,E[I],B[I]),V=v?E[I]/2-M-R-z-O.mainAxis:H-R-z-O.mainAxis,K=v?-E[I]/2+M+R+q+O.mainAxis:$+R+q+O.mainAxis,Q=e.elements.arrow&&oe(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=N+K-Y,G=ae(f?Qt(P,N+V-Y-X):P,N,f?Kt(j,U):j);A[y]=G,k[y]=G-N}if(a){var J,Z="x"===y?gt:bt,tt="x"===y?mt:_t,et=A[w],it="y"===w?"height":"width",nt=et+m[Z],st=et-m[tt],ot=-1!==[gt,bt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=ae(t,e,i);return n>i?i:n}(at,et,lt):ae(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function He(t,e,i){void 0===i&&(i=!1);var n,s,o=zt(e),r=zt(e)&&function(t){var e=t.getBoundingClientRect(),i=Xt(e.width)/t.offsetWidth||1,n=Xt(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=ie(e),l=Gt(t,r,i),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==Wt(e)||Ee(a))&&(c=(n=e)!==Bt(n)&&zt(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:we(n)),zt(e)?((h=Gt(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=Ae(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function $e(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var We={placement:"bottom",modifiers:[],strategy:"absolute"};function Be(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Fe(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?We:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},We,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:Ft(t)?Ce(t):t.contextElement?Ce(t.contextElement):[],popper:Ce(e)};var r,c,u=function(t){var e=$e(t);return $t.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(Be(e,i)){a.rects={reference:He(e,oe(i),"fixed"===a.options.strategy),popper:Jt(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!Be(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var ze=Fe(),qe=Fe({defaultModifiers:[me,je,pe,Rt]}),Re=Fe({defaultModifiers:[me,je,pe,Rt,Pe,De,Me,he,Ne]});const Ve=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:Fe,detectOverflow:Le,createPopperBase:ze,createPopper:Re,createPopperLite:qe,top:gt,bottom:mt,right:_t,left:bt,auto:vt,basePlacements:yt,start:wt,end:At,clippingParents:Et,viewport:Tt,popper:Ct,reference:Ot,variationPlacements:xt,placements:kt,beforeRead:Lt,read:Dt,afterRead:St,beforeMain:It,main:Nt,afterMain:Pt,beforeWrite:jt,write:Mt,afterWrite:Ht,modifierPhases:$t,applyStyles:Rt,arrow:he,computeStyles:pe,eventListeners:me,flip:De,hide:Ne,offset:Pe,popperOffsets:je,preventOverflow:Me},Symbol.toStringTag,{value:"Module"})),Ke="dropdown",Qe="ArrowUp",Xe="ArrowDown",Ye="click.bs.dropdown.data-api",Ue="keydown.bs.dropdown.data-api",Ge="show",Je='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ze=`${Je}.show`,ti=".dropdown-menu",ei=p()?"top-end":"top-start",ii=p()?"top-start":"top-end",ni=p()?"bottom-end":"bottom-start",si=p()?"bottom-start":"bottom-end",oi=p()?"left-start":"right-start",ri=p()?"right-start":"left-start",ai={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},li={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ci extends z{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.next(this._element,ti)[0]||Q.prev(this._element,ti)[0]||Q.findOne(ti,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ai}static get DefaultType(){return li}static get NAME(){return Ke}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!P.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ge),this._element.classList.add(Ge),P.trigger(this._element,"shown.bs.dropdown",t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!P.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ge),this._element.classList.remove(Ge),this._element.setAttribute("aria-expanded","false"),B.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Ke.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===Ve)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Re(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ge)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return oi;if(t.classList.contains("dropstart"))return ri;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ii:ei:e?si:ni}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(B.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Xe,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=ci.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=Q.find(Ze);for(const i of e){const e=ci.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Qe,Xe].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=this.matches(Je)?this:Q.prev(this,Je)[0]||Q.next(this,Je)[0]||Q.findOne(Je,t.delegateTarget.parentNode),o=ci.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}P.on(document,Ue,Je,ci.dataApiKeydownHandler),P.on(document,Ue,ti,ci.dataApiKeydownHandler),P.on(document,Ye,ci.clearMenus),P.on(document,"keyup.bs.dropdown.data-api",ci.clearMenus),P.on(document,Ye,Je,(function(t){t.preventDefault(),ci.getOrCreateInstance(this).toggle()})),g(ci);const hi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",di=".sticky-top",ui="padding-right",fi="margin-right";class pi{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ui,(e=>e+t)),this._setElementAttributes(hi,ui,(e=>e+t)),this._setElementAttributes(di,fi,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ui),this._resetElementAttributes(hi,ui),this._resetElementAttributes(di,fi)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&B.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=B.getDataAttribute(t,e);null!==i?(B.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of Q.find(t,this._element))e(i)}}const gi="show",mi="mousedown.bs.backdrop",_i={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},bi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class vi extends F{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return _i}static get DefaultType(){return bi}static get NAME(){return"backdrop"}show(t){if(!this._config.isVisible)return void m(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(gi),this._emulateAnimation((()=>{m(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(gi),this._emulateAnimation((()=>{this.dispose(),m(t)}))):m(t)}dispose(){this._isAppended&&(P.off(this._element,mi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),P.on(t,mi,(()=>{m(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const yi=".bs.focustrap",wi="backward",Ai={autofocus:!0,trapElement:null},Ei={autofocus:"boolean",trapElement:"element"};class Ti extends F{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Ai}static get DefaultType(){return Ei}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),P.off(document,yi),P.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),P.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,P.off(document,yi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=Q.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===wi?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?wi:"forward")}}const Ci="hidden.bs.modal",Oi="show.bs.modal",xi="modal-open",ki="show",Li="modal-static",Di={backdrop:!0,focus:!0,keyboard:!0},Si={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ii extends z{constructor(t,e){super(t,e),this._dialog=Q.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new pi,this._addEventListeners()}static get Default(){return Di}static get DefaultType(){return Si}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||P.trigger(this._element,Oi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(xi),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(P.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ki),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){for(const t of[window,this._dialog])P.off(t,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new vi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ti({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=Q.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(ki),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,P.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.modal",(t=>{if("Escape"===t.key)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),P.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),P.on(this._element,"mousedown.dismiss.bs.modal",(t=>{P.one(this._element,"click.dismiss.bs.modal",(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(xi),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,Ci)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(P.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(Li)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Li),this._queueCallback((()=>{this._element.classList.remove(Li),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Ii.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}P.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=n(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,Oi,(t=>{t.defaultPrevented||P.one(e,Ci,(()=>{a(this)&&this.focus()}))}));const i=Q.findOne(".modal.show");i&&Ii.getInstance(i).hide(),Ii.getOrCreateInstance(e).toggle(this)})),q(Ii),g(Ii);const Ni="show",Pi="showing",ji="hiding",Mi=".offcanvas.show",Hi="hidePrevented.bs.offcanvas",$i="hidden.bs.offcanvas",Wi={backdrop:!0,keyboard:!0,scroll:!1},Bi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Fi extends z{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Wi}static get DefaultType(){return Bi}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||P.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new pi).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Pi),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ni),this._element.classList.remove(Pi),P.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(P.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ji),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Ni,ji),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new pi).reset(),P.trigger(this._element,$i)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new vi({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():P.trigger(this._element,Hi)}:null})}_initializeFocusTrap(){return new Ti({trapElement:this._element})}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():P.trigger(this._element,Hi))}))}static jQueryInterface(t){return this.each((function(){const e=Fi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}P.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=n(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;P.one(e,$i,(()=>{a(this)&&this.focus()}));const i=Q.findOne(Mi);i&&i!==e&&Fi.getInstance(i).hide(),Fi.getOrCreateInstance(e).toggle(this)})),P.on(window,"load.bs.offcanvas.data-api",(()=>{for(const t of Q.find(Mi))Fi.getOrCreateInstance(t).show()})),P.on(window,"resize.bs.offcanvas",(()=>{for(const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&Fi.getOrCreateInstance(t).hide()})),q(Fi),g(Fi);const zi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),qi=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Ri=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Vi=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!zi.has(i)||Boolean(qi.test(t.nodeValue)||Ri.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Ki={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Qi={allowList:Ki,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Xi={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Yi={entry:"(string|element|function|null)",selector:"(string|element)"};class Ui extends F{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Qi}static get DefaultType(){return Xi}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Yi)}_setContent(t,e,i){const n=Q.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Vi(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return"function"==typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Gi=new Set(["sanitize","allowList","sanitizeFn"]),Ji="fade",Zi="show",tn=".modal",en="hide.bs.modal",nn="hover",sn="focus",on={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},rn={allowList:Ki,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},an={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ln extends z{constructor(t,e){if(void 0===Ve)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return rn}static get DefaultType(){return an}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(tn),en,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=P.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),P.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(Zi),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._queueCallback((()=>{P.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!P.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Zi),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Ji,Zi),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Ji),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Ui({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ji)}_isShown(){return this.tip&&this.tip.classList.contains(Zi)}_createPopper(t){const e="function"==typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,i=on[e.toUpperCase()];return Re(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)P.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===nn?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===nn?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");P.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?sn:nn]=!0,e._enter()})),P.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?sn:nn]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(tn),en,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=B.getDataAttributes(this._element);for(const t of Object.keys(e))Gi.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=ln.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(ln);const cn={...ln.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},hn={...ln.DefaultType,content:"(null|string|element|function)"};class dn extends ln{static get Default(){return cn}static get DefaultType(){return hn}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=dn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(dn);const un="click.bs.scrollspy",fn="active",pn="[href]",gn={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},mn={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class _n extends z{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return gn}static get DefaultType(){return mn}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(P.off(this._config.target,un),P.on(this._config.target,un,pn,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Q.find(pn,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=Q.findOne(e.hash,this._element);a(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(fn),this._activateParents(t),P.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))Q.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(fn);else for(const e of Q.parents(t,".nav, .list-group"))for(const t of Q.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(fn)}_clearActiveClass(t){t.classList.remove(fn);const e=Q.find("[href].active",t);for(const t of e)t.classList.remove(fn)}static jQueryInterface(t){return this.each((function(){const e=_n.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(window,"load.bs.scrollspy.data-api",(()=>{for(const t of Q.find('[data-bs-spy="scroll"]'))_n.getOrCreateInstance(t)})),g(_n);const bn="ArrowLeft",vn="ArrowRight",yn="ArrowUp",wn="ArrowDown",An="active",En="fade",Tn="show",Cn='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',On=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Cn}`;class xn extends z{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),P.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?P.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;P.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(An),this._activate(n(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),P.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(Tn)}),t,t.classList.contains(En)))}_deactivate(t,e){t&&(t.classList.remove(An),t.blur(),this._deactivate(n(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),P.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(Tn)}),t,t.classList.contains(En)))}_keydown(t){if(![bn,vn,yn,wn].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[vn,wn].includes(t.key),i=b(this._getChildren().filter((t=>!l(t))),t.target,e,!0);i&&(i.focus({preventScroll:!0}),xn.getOrCreateInstance(i).show())}_getChildren(){return Q.find(On,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=n(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=Q.findOne(t,i);s&&s.classList.toggle(n,e)};n(".dropdown-toggle",An),n(".dropdown-menu",Tn),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(An)}_getInnerElement(t){return t.matches(On)?t:Q.findOne(On,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=xn.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(document,"click.bs.tab",Cn,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||xn.getOrCreateInstance(this).show()})),P.on(window,"load.bs.tab",(()=>{for(const t of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))xn.getOrCreateInstance(t)})),g(xn);const kn="hide",Ln="show",Dn="showing",Sn={animation:"boolean",autohide:"boolean",delay:"number"},In={animation:!0,autohide:!0,delay:5e3};class Nn extends z{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return In}static get DefaultType(){return Sn}static get NAME(){return"toast"}show(){P.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(kn),d(this._element),this._element.classList.add(Ln,Dn),this._queueCallback((()=>{this._element.classList.remove(Dn),P.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(P.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(Dn),this._queueCallback((()=>{this._element.classList.add(kn),this._element.classList.remove(Dn,Ln),P.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ln),super.dispose()}isShown(){return this._element.classList.contains(Ln)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),P.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Nn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return q(Nn),g(Nn),{Alert:R,Button:K,Carousel:at,Collapse:pt,Dropdown:ci,Modal:Ii,Offcanvas:Fi,Popover:dn,ScrollSpy:_n,Tab:xn,Toast:Nn,Tooltip:ln}}));
(()=>{var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t),e.d(t,{closePopupWidget:()=>_,destroyBadgeWidget:()=>U,initBadgeWidget:()=>R,initInlineWidget:()=>x,initPopupWidget:()=>W,showPopupWidget:()=>I});const o=e=>{["interactive","complete"].includes(document.readyState)?e():document.addEventListener("DOMContentLoaded",e)},n=(e,t)=>Object.fromEntries(Object.entries(e).map((([e,o])=>[t(o,e),o]))),i=e=>e.split(/(?=[A-Z])/).join("_").toLowerCase(),r=(e,t)=>Object.fromEntries(Object.entries(e).filter((([e])=>t.includes(e)))),s=e=>e?Object.fromEntries(e.substr(1).split("&").map((e=>e.split("="))).map((([e,t])=>[e,decodeURIComponent(t)]))):{};var l=Object.defineProperty,a=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,o)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))d.call(t,o)&&u(e,o,t[o]);if(a)for(var o of a(t))c.call(t,o)&&u(e,o,t[o]);return e};class h{constructor(e){var t,o;t="isMobile",o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),u(this,t+"",o),this.options=e,this.parseOptions()}inject(){return this.build(),this.format(),"inline"===this.embedType.toLowerCase()&&this.resize&&this.attachResizeListener(),this.parent.appendChild(this.buildSpinner()),this.parent.appendChild(this.node)}parseOptions(){if(this.options=Object.assign({},{inlineStyles:!1,resize:!1},this.options),this.parent=this.options.parentElement,!this.parent)throw new Error("Calendly: Parent element not set");if(this.parent.jquery&&(this.parent=this.parent[0]),this.inlineStyles=this.options.inlineStyles,this.embedType=this.options.embedType,this.url=(this.options.url||this.getUrlFromParent()).split("#")[0],this.resize=this.options.resize,!this.url)throw new Error("Calendly: Widget URL not set")}build(){this.node=document.createElement("iframe"),this.node.src=this.getSource(),this.node.width="100%",this.node.height="100%",this.node.frameBorder="0",this.node.title="Select a Date & Time - Calendly"}getSource(){const e=new URL(this.url,window.location);return e.search=this.getQuery(),e.toString()}getUrlFromParent(){return this.parent.getAttribute("data-url")}getQuery(){return e=p(p(p({embed_domain:this.getDomain(),embed_type:this.embedType},this.getUtmParamsFromHost()),this.getParamsFromUrl()),this.getParamsFromOptions()),`?${Object.entries(e).map((([e,t])=>[e,encodeURIComponent(t)].join("="))).join("&")}`;var e}getUtmParamsFromHost(){const e=s(new URL(window.location.href).search);return r(e,["utm_campaign","utm_source","utm_medium","utm_content","utm_term","salesforce_uuid"])}getParamsFromUrl(){return s(new URL(this.url,window.location).search)}getParamsFromOptions(){return p(p({},this.getPrefillParams()),this.getUtmParams())}getUtmParams(){if(!this.options.utm)return[];const e=r(this.options.utm,["utmCampaign","utmSource","utmMedium","utmContent","utmTerm","salesforceUuid"]);return n(e,((e,t)=>i(t)))}getPrefillParams(){if(!this.options.prefill)return[];const e=r(this.options.prefill,["name","firstName","lastName","email"]),t=n(e,((e,t)=>i(t)));if(this.options.prefill.customAnswers){const e=this.options.prefill.customAnswers;Object.entries(e).forEach((([e,o])=>{e.match(/^a\d{1,2}$/)&&(t[e]=o)}))}return t}getDomain(){return window.location.host}format(){return this.isMobile?this.formatMobile():this.formatDesktop()}formatDesktop(){this.inlineStyles&&this.parent.setAttribute("style",`position: relative;${this.parent.getAttribute("style")}`)}formatMobile(){if(this.inlineStyles){const e=`position: relative;-webkit-overflow-scrolling:touch;${this.parent.getAttribute("style")}`;this.parent.setAttribute("style",e)}this.parent.className+=" calendly-mobile"}attachResizeListener(){const e=e=>{this.parent.style.height=e};window.addEventListener("message",(t=>{t.data.event&&"calendly.page_height"===t.data.event&&(e(t.data.payload.height),this.parent.getBoundingClientRect().top<0&&this.parent.scrollIntoView(!0,{behavior:"auto"}))}))}buildSpinner(){const e=document.createElement("div");return e.className="calendly-spinner",e.appendChild(this.buildBounce(1)),e.appendChild(this.buildBounce(2)),e.appendChild(this.buildBounce(3)),e}buildBounce(e){const t=document.createElement("div");return t.className=`calendly-bounce${e}`,t}}class m{constructor(e){this.options=e}destroy(){return this.widget.parentNode.removeChild(this.widget)}buildWidget(){return this.widget=document.createElement("div"),this.widget.className="calendly-badge-widget",this.widget.appendChild(this.buildContent())}inject(){return this.buildWidget(),document.body.insertBefore(this.widget,document.body.firstChild)}buildContent(){const e=document.createElement("div");return e.className="calendly-badge-content","#ffffff"===this.options.color&&(e.className+=" calendly-white"),e.onclick=this.options.onClick,e.innerHTML=this.options.text,e.style.background=this.options.color,e.style.color=this.options.textColor,this.options.branding&&e.appendChild(this.buildBranding()),e}buildBranding(){const e=document.createElement("span");return e.innerHTML="powered by Calendly",e}}var y=!1;if("undefined"!=typeof window){var b={get passive(){y=!0}};window.addEventListener("testPassive",null,b),window.removeEventListener("testPassive",null,b)}var v="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),g=[],f=!1,w=-1,P=void 0,C=void 0,O=void 0,E=function(e){return g.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},S=function(e){var t=e||window.event;return!!E(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)};class j{constructor(e,t,o,n={}){this.close=this.close.bind(this),this.url=e,this.onClose=t,this.embedType=o,this.options=n}show(){return this.buildOverlay(),this.insertOverlay(),this.lockPageScroll()}close(){return this.unlockPageScroll(),this.destroyOverlay(),this.onClose()}buildOverlay(){return this.overlay=document.createElement("div"),this.overlay.className="calendly-overlay",this.overlay.appendChild(this.buildCloseOverlay()),this.overlay.appendChild(this.buildPopup()),this.overlay.appendChild(this.buildCloseButton())}insertOverlay(){return document.body.appendChild(this.overlay)}buildCloseOverlay(){const e=document.createElement("div");return e.className="calendly-close-overlay",e.onclick=this.close,e}buildPopup(){const e=document.createElement("div");return e.className="calendly-popup",e.appendChild(this.buildPopupContent()),e}buildPopupContent(){const e=document.createElement("div");return e.className="calendly-popup-content",e.setAttribute("data-url",this.url),this.options.parentElement=e,this.options.embedType=this.embedType,new h(this.options).inject(),e}buildCloseButton(){const e=document.createElement("div");return e.className="calendly-popup-close",e.onclick=this.close,e}destroyOverlay(){return this.overlay.parentNode.removeChild(this.overlay)}lockPageScroll(){return function(e,t){if(e){if(!g.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};g=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(g),[o]),v?window.requestAnimationFrame((function(){if(void 0===C){C={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t+"px",document.body.style.left=-o+"px",setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e)+"px")}))}),300)}})):function(e){if(void 0===O){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);O=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===P&&(P=document.body.style.overflow,document.body.style.overflow="hidden")}(t),v&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(w=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-w;!E(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?S(e):e.stopPropagation())}(t,e)},f||(document.addEventListener("touchmove",S,y?{passive:!1}:void 0),f=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")}(this.overlay),document.addEventListener("touchmove",this.handleLockedTouchmove,{passive:!1})}unlockPageScroll(){var e;return(e=this.overlay)?(g=g.filter((function(t){return t.targetElement!==e})),v&&(e.ontouchstart=null,e.ontouchmove=null,f&&0===g.length&&(document.removeEventListener("touchmove",S,y?{passive:!1}:void 0),f=!1)),v?function(){if(void 0!==C){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=C.position,document.body.style.top=C.top,document.body.style.left=C.left,window.scrollTo(t,e),C=void 0}}():(void 0!==O&&(document.body.style.paddingRight=O,O=void 0),void 0!==P&&(document.body.style.overflow=P,P=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."),document.removeEventListener("touchmove",this.handleLockedTouchmove,{passive:!1})}handleLockedTouchmove(e){return e.preventDefault()}}var T=Object.defineProperty,A=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,k=(e,t,o)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;const M=e=>"true"===e.getAttribute("data-resize"),N={},_=()=>{N.popup&&N.popup.close()},I=(e,t="PopupText",o={})=>{_(),N.popup=new j(e,(()=>delete N.popup),t,o),N.popup.show()},U=()=>{N.badge&&(N.badge.destroy(),delete N.badge)},x=e=>{e.url&&(null!=e.parentElement||(e.parentElement=document.scripts[document.scripts.length-1].parentNode),o((()=>{e.embedType="Inline",new h(e).inject()})))},R=e=>{o((()=>(e=>{U();const t=(e=>{const t={};return["color","textColor","text","branding"].forEach((o=>{t[o]=e[o],delete e[o]})),t})(e),o=((e,t)=>{for(var o in t||(t={}))L.call(t,o)&&k(e,o,t[o]);if(A)for(var o of A(t))B.call(t,o)&&k(e,o,t[o]);return e})({onClick:()=>I(e.url,"PopupWidget",e)},t);N.badge=new m(o),N.badge.inject()})(e)))},W=e=>{o((()=>I(e.url,"PopupText",e)))};o((()=>{const e=document.querySelectorAll(".calendly-inline-widget");Array.from(e).forEach((e=>{(e=>e.getAttribute("data-processed")||"false"===e.getAttribute("data-auto-load"))(e)||(e.setAttribute("data-processed",!0),new h({parentElement:e,inlineStyles:!0,embedType:"Inline",resize:M(e)}).inject())}))}))})();var o=Calendly="undefined"==typeof Calendly?{}:Calendly;for(var n in t)o[n]=t[n];t.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
// // Disable right-click
// document.addEventListener('contextmenu', (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
//   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
//   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
//   if (
//     event.keyCode === 123 ||
//     ctrlShiftKey(e, 'I') ||
//     ctrlShiftKey(e, 'J') ||
//     ctrlShiftKey(e, 'C') ||
//     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
//   )
//     return false;
// };
// if (window.location.hash == '#start-a-project') {
//     console.log('777');

//     $('#start_new_project').show();
// }
//         if (window.location.hash === '#start-a-project') {
//             console.log(326);

//             $('#start_new_project').show();
//         }

(function ($) {
    $(function () {
        $(document).off("click.bs.tab.data-api", '[data-hover="tab"]');
        $(document).on(
            "mouseenter.bs.tab.data-api",
            '[data-toggle="tab"], [data-hover="tab"]',
            function () {
                $(this).tab("show");
            }
        );
    });
})(jQuery);

$(document).ready(function () {
    $(".all_menu_tabs a").mouseover(function () {
        var text = $(this).text();
        var trimText = text.trim();

        // Mobile App Development
        if (trimText === "IPhone") {
            $("#DescTitleSrervice").text("iPhone App Development Company ");
            $("#DescTextSrervice").text(
                "Our expert iOS developers work with the latest tools and technologies to create user-friendly, user-centric, and visually powerful iPhone applications. We believe in turning your conceptual ideas into reality according to your specific requirements."
            );
        }
        if (trimText === "Android") {
            $("#DescTitleSrervice").text("Android App Development Company");
            $("#DescTextSrervice").text(
                "Our expert Android application developers and designers are dedicated to create engaging, user-centric, and visually stunning applications from the ground up. Leveraging the latest technologies and best practices, we believe in providing cutting-edge Android app development services that captivate your users."
            );
        }
        if (trimText === "Hybrid") {
            $("#DescTitleSrervice").text(
                "Hybrid Mobile App Development Company"
            );
            $("#DescTextSrervice").text(
                "Experts at Dqot Solutions are highly experienced in developing a feature-rich hybrid mobile app development that works well on both Android and iOS devices. We ensure to create an application exactly like your imagination."
            );
        }
        if (trimText === "React Native") {
            $("#DescTitleSrervice").text(
                "Popular React Native App Development Company"
            );
            $("#DescTextSrervice").text(
                "React Native is a famous cross-platform framework for developing native mobile apps using JavaScript. Dqot Solutions has a large number of expert react native developers who can build high performing and scalable mobile apps. This framework ensures to develop a cost-effective, high quality, iOS and Android Application simultaneously using the same codebase."
            );
        }
        if (trimText === "Flutter") {
            $("#DescTitleSrervice").text("Flutter App Development Company");
            $("#DescTextSrervice").text(
                "Dqot Solutions is a famous flutter application development company, by using Google’s famous cross-platform application. Using Fluter’s single codebase our developers can create a highly scalable and fast application for both Android and iOS devices."
            );
        }

        //  Web Development
        if (trimText === "React JS") {
            $("#DescTitleSrervice").text("React. js Web Development Company");
            $("#DescTextSrervice").text(
                "PHP is a famous computer language for creating websites. Dqot Solution works on the PHP language to create a website that works properly and loads quickly. These websites are user-friendly and are easy to use on computers, tablets, and phones."
            );
        }
        if (trimText === "PHP") {
            $("#DescTitleSrervice").text("PHP Website Development Company");
            $("#DescTextSrervice").text(
                "Our expert Android application developers and designers are dedicated to create engaging, user-centric, and visually stunning applications from the ground up. Leveraging the latest technologies and best practices, we believe in providing cutting-edge Android app development services that captivate your users."
            );
        }
        if (trimText === "CakePHP") {
            $("#DescTitleSrervice").text("Cake PHP Web development Company");
            $("#DescTextSrervice").text(
                "Cake PHP is a computer language used to create websites quickly, developers at Dqot Solution have expertise in this language. We use this website on client’s demand to create a secured, modern, and easy to use good website that loads fast. We make sure that the website developed on Cake PHP works well on all devices like phones, tablets, and computers."
            );
        }
        if (trimText === "WordPress") {
            $("#DescTitleSrervice").text("Wordpress Web development Company");
            $("#DescTextSrervice").text(
                "Doqt Solutions has expertise in developing visually appealing and functional websites using WordPress. Our developers are ready to build custom wordpress sites based on your business needs. We offer various services like search engine optimization services, and e-commerce integration."
            );
        }
        if (trimText === "Laravel") {
            $("#DescTitleSrervice").text("Laravel Website Development Company");
            $("#DescTextSrervice").text(
                "Dqot Solution has expertise in developing a high-performance website using Laravel, a powerful PHP framework. We create on-demand Laravel applications with various features, cutting-edge security, and scalable architecture. Our Laravel developers can enhance the digital presence of all the clients from e-commerce platforms to complex business systems. "
            );
        }

        if (trimText === "Codeigniter") {
            $("#DescTitleSrervice").text(
                "Codeigniter Website Development Company"
            );
            $("#DescTextSrervice").text(
                "Dqot Solutions can help you build scalable websites using CodeIgniter, a popular PHP framework. With our developers' expertise in CodeIgniter, we can build on-demand websites that fulfill the unique requirements of businesses. Our developers can provide user-friendly, secure, and high-performance solutions for all projects, from small websites to complex business applications."
            );
        }
        if (trimText === ".NET Development") {
            $("#DescTitleSrervice").text(".Net Website Development Company");
            $("#DescTextSrervice").text(
                "Experts at Dqot Solutions have expertise in building scalable and robust websites using Microsoft's .NET framework. We deliver highly secured and highly scalable website development solutions for e-commerce platforms to enterprise-level solutions. Believe in our expertise to gain your online presence with .NET development."
            );
        }
        if (trimText === "Node JS") {
            $("#DescTitleSrervice").text("Node.js Website Development Company");
            $("#DescTextSrervice").text(
                "Dqot Solution specializes in developing fast, scalable and efficient web applications using Node.js. Our expert developers impose the power of Node.js to create real-time, data-intensive websites and APIs. From e-commerce platforms to real-time data streaming solutions, we offer high-performance Node.js applications developed to your unique business needs."
            );
        }
        if (trimText === "Angular JS") {
            $("#DescTitleSrervice").text(
                "Angular.js Website Development Company"
            );
            $("#DescTextSrervice").text(
                "Dqot Solutions specializes in using the Angular framework to create reliable, scalable and user-friendly web applications. We deliver an outstanding experience through the use of experienced professionals, adherence to best practices, and a customer-focused approach to meeting business needs through the use of innovative Angular.js solutions."
            );
        }
        if (trimText === "Python") {
            $("#DescTitleSrervice").text("Python Website Development Company");
            $("#DescTextSrervice").text(
                "Experts at Dqot Solutions are highly experienced in developing a Python based website. Our developers ensure to deliver a highly scalable, secured, high-performance, and user-friendly website development solution with the help of the python language. Our developers use the latest updates given by Python to provide modern solutions to website development."
            );
        }
        if (trimText === "Shopify") {
            $("#DescTitleSrervice").text("Shopify Website Development Company");
            $("#DescTextSrervice").text(
                "Dqot Solutions is a leading company that builds online stores using Shopify. We help businesses create beautiful, easy-to-use websites to sell products through their digital presence. Our team of experts designs, sets up, and customizes Shopify stores to fit each client's unique needs."
            );
        }

        //  Web Development
        if (trimText === "React JS") {
            $("#DescTitleSrervice").text("React. js Web Development Company");
            $("#DescTextSrervice").text(
                "PHP is a famous computer language for creating websites. Dqot Solution works on the PHP language to create a website that works properly and loads quickly. These websites are user-friendly and are easy to use on computers, tablets, and phones."
            );
        }
        if (trimText === "PHP") {
            $("#DescTitleSrervice").text("PHP Website Development Company");
            $("#DescTextSrervice").text(
                "Our expert Android application developers and designers are dedicated to create engaging, user-centric, and visually stunning applications from the ground up. Leveraging the latest technologies and best practices, we believe in providing cutting-edge Android app development services that captivate your users."
            );
        }
        if (trimText === "CakePHP") {
            $("#DescTitleSrervice").text("Cake PHP Web development Company");
            $("#DescTextSrervice").text(
                "Cake PHP is a computer language used to create websites quickly, developers at Dqot Solution have expertise in this language. We use this website on client’s demand to create a secured, modern, and easy to use good website that loads fast. We make sure that the website developed on Cake PHP works well on all devices like phones, tablets, and computers."
            );
        }
        if (trimText === "Wordpress") {
            $("#DescTitleSrervice").text("Wordpress Web development Company");
            $("#DescTextSrervice").text(
                "Doqt Solutions has expertise in developing visually appealing and functional websites using WordPress. Our developers are ready to build custom wordpress sites based on your business needs. We offer various services like search engine optimization services, and e-commerce integration. "
            );
        }
        if (trimText === "WordPress") {
            $("#DescTitleSrervice").text("Wordpress Web development Company");
            $("#DescTextSrervice").text(
                "Doqt Solutions has expertise in developing visually appealing and functional websites using WordPress. Our developers are ready to build custom wordpress sites based on your business needs. We offer various services like search engine optimization services, and e-commerce integration."
            );
        }
        if (trimText === "Laravel") {
            $("#DescTitleSrervice").text("Laravel Website Development Company");
            $("#DescTextSrervice").text(
                "Dqot Solution has expertise in developing a high-performance website using Laravel, a powerful PHP framework. We create on-demand Laravel applications with various features, cutting-edge security, and scalable architecture. Our Laravel developers can enhance the digital presence of all the clients from e-commerce platforms to complex business systems. "
            );
        }

        //  Designing
        if (trimText === "Android App Design") {
            $("#DescTitleSrervice").text(
                "Android App Design Development Company"
            );
            $("#DescTextSrervice").text(
                "Dqot Solutions is a famous Android App Design and Development Company. Designers at dqot Solutions can create designs for different Android devices like mobiles, wider screens like tablets, computers, laptops, and wearables like smartwatches. Our designers are experts in developing Android App Designs with different design tools like Figma, Sketch, Zeplin, and Wondershare Mockitt."
            );
        }
        if (trimText === "iOS App Design") {
            $("#DescTitleSrervice").text("iOS App Design Development Company");
            $("#DescTextSrervice").text(
                "Doqt Solutions is a famous iOS app development and development company. Apple Watch, Mac, iPad and iPhone are just a few of the iOS devices our designers can design for. They specialize in creating user-friendly iOS app designs with programs such as Marvel, Zeplin, Sketch and Figma. The designers at dqot Solutions specialize in stylish and user-friendly products that follow Apple’s design requirements. Their expertise in iOS app development allows them to realize your app concepts, assuring a smooth and enjoyable experience across all Apple devices."
            );
        }
        if (trimText === "Web Design") {
            $("#DescTitleSrervice").text("Web Design Development Company");
            $("#DescTextSrervice").text(
                "Dqot Solutions has expert website designers who are proficient in various computer languages like PHP, laravel, React,js, Word press, .NET, Node,js, and many more. Our designers ensure to create a scalable and easy-to-use and fast loading website based on the requirements of the businesses."
            );
        }
        if (trimText === "Logo Design") {
            $("#DescTitleSrervice").text("Logo Design Services");
            $("#DescTextSrervice").text(
                "Logo Designers at Dqot Solutions are expert in providing professional logo design services. We provide unique and eye-catching logo design services for your brand. Our designers make sure to work closely with you to understand your business perspective and design an innovative logo that can connect with your target audience."
            );
        }
        if (trimText === "Video Design") {
            $("#DescTitleSrervice").text("Video Design Company");
            $("#DescTextSrervice").text(
                "Dqot Solutions provides the best video design services as per the requirements of the businesses. We have a specialization in creating engaging videos for the business. Our designers are expert in using graphics, animations, and effects to bring your brand message to life."
            );
        }
        if (trimText === "Graphics Design") {
            $("#DescTitleSrervice").text("Graphic Design Company");
            $("#DescTextSrervice").text(
                "Graphic Designers at Dqot Solutions have an expertise in tools like Adobe Photoshop, Illustrator, Indesign to deliver the best experience to our partnered businesses. Designers are experts in working with digital pens to create accurate on-demand designs. "
            );
        }

        //  Ecommerce
        if (trimText === "SEO (Search Engine Optimization)") {
            $("#DescTitleSrervice").text(
                "SEO (Search Engine Optimization) Service Provider"
            );
            $("#DescTextSrervice").text(
                "Dqot Solution is a leading SEO provider that can enhance the online visibility of your brand. Our SEO experts ensure to improve the ranking of your website with proper on-page and off-page optimization. We make sure to make your website SEO-friendly to increase the brand value of your business."
            );
        }
        if (trimText === "SMO ( Social Media Optimization )") {
            $("#DescTitleSrervice").text("SMO ( Social Media Optimization )");
            $("#DescTextSrervice").text(
                "Looking for experts to manage your brand's social media pages and increase social engagement? Dqot Solutions has got you covered. We provide Social Media Optimization Services to increase the engagement and reach of your brand content to your targeted audience."
            );
        }
        if (trimText === "Google Ads") {
            $("#DescTitleSrervice").text("Google Ads Services");
            $("#DescTextSrervice").text(
                "Google Ads is the best technique to reach your targeted market and increase the sale of your brand. Dqot Solutions can provide you with trusted experts to run Google Ads as it requires significant time and skills to produce a competitive strategy for the marketplace."
            );
        }
        if (trimText === "Meta Ads") {
            $("#DescTitleSrervice").text("Meta Ads Service Provider");
            $("#DescTextSrervice").text(
                "Meta Ads Services providers like Dqot Solutions help businesses promote their products on Instagram, Facebook, and other Meta Platforms. Our experts have relevant experience in creating compelling ad campaigns filtered to your target audience. We optimize ads for better engagement, conversions, and reach to increase the real results."
            );
        }
        if (trimText === "Branding") {
            $("#DescTitleSrervice").text("Branding Services");
            $("#DescTextSrervice").text(
                "Branding services help businesses create a strong, recognizable brand identity. Professionals at Dqot Solutions develop a unique brand name, logo, color scheme, and messaging. We ensure brand consistency across all marketing materials. Strong branding helps companies stand out, connect with customers, and build brand loyalty."
            );
        }
        if (trimText === "Content Marketing") {
            $("#DescTitleSrervice").text("Content Marketing Services");
            $("#DescTextSrervice").text(
                "Nowadays, content marketing is bringing a great impact on the popularization of the brands. Content Marketing Experts at Dqot Solutions not only understands the importance of content marketing but use unique approaches to use content marketing to attract the highest-quality leads possible. "
            );
        }
        if (trimText === "Ecommerce SEO") {
            $("#DescTitleSrervice").text("Ecommerce SEO Services");
            $("#DescTextSrervice").text(
                "Every brand wants to showcase their products on the top searches and shopping results. SEO experts at Dqot Solutions can help you in featuring your products to the natural searches of Google. Knowing how popular Ecommerce websites like Amazon works, we optimize ecommerce websites  to achieve higher sales volumes."
            );
        }

        // Maintenance and Testing
        if (trimText === "Android App Maintenance") {
            $("#DescTitleSrervice").text("Android App Maintenance Services");
            $("#DescTextSrervice").text(
                "Professionals at Dqot Solutions are experts in maintaining Android Application. We make sure to keep your application updated with the latest technology and running smoothly. Moreover we fix the bugs and keep the application compatible with the current version of Android applications."
            );
        }
        if (trimText === "iOS App Maintenance") {
            $("#DescTitleSrervice").text("iOS App Maintenance Services");
            $("#DescTextSrervice").text(
                "It is important to provide regular maintenance to the iOS application to ensure security and the overall user experience. Developers at Dqot Solutions provide ongoing support  in fixing bugs and issues. The application must be updated based on the current iOS versions to keep it running smoothly."
            );
        }
        if (trimText === "Website Maintenance") {
            $("#DescTitleSrervice").text("Website Maintenance Services");
            $("#DescTextSrervice").text(
                "Dqot Solutions has a specialization in providing website maintenance services for all the frameworks like PHP, Node.js, React.js, Word press, and many more. It is crucial to regularly update the website to keep it running smoothly and for the fast loading of the websites to improve user-experience."
            );
        }
        if (trimText === "Manual Application Testing") {
            $("#DescTitleSrervice").text("Manual Application Testing ");
            $("#DescTextSrervice").text(
                "Manual Application Testing is very important as it rectifies all the bugs and issues before it reaches the market. Testers at Dqot Solutions are specialized in manual testing and have specialization in providing bug free applications to the clients."
            );
        }
        if (trimText === "Manual Web Testing") {
            $("#DescTitleSrervice").text("Manual Web Testing");
            $("#DescTextSrervice").text(
                "Testing a website is important to reduce its leading time and to make sure it runs smoothly. Web Testers at Dqot Solutions are experts in identifying all the bugs and get it rectified before reaching the target market of the brand."
            );
        }
        if (trimText === "Automation Testing") {
            $("#DescTitleSrervice").text("Automation Testing Services");
            $("#DescTextSrervice").text(
                "Testing can also be automated with the help of tools and scripts to automatically test the softwares without the need of manual testing. Dqot Solutions can provide you the best services for automation testing to improve efficiency of testing over manual testing."
            );
        }

        // Software Development
        if (trimText === "Custom CRM") {
            $("#DescTitleSrervice").text(
                "Custom CRM Software Development Services"
            );
            $("#DescTextSrervice").text(
                "Dqot Solutions can provide custom CRM Software Development Services to build customized customer relationship management systems. Our developers create a CRM solution specific to your business needs. This specialized software helps manage sales, interaction, customer data, and support more effectively than generic CRM tools."
            );
        }
        if (trimText === "SaaS Software") {
            $("#DescTitleSrervice").text("SaaS Software Development Services");
            $("#DescTextSrervice").text(
                "Dqot Solutions has an expertise in developing a web based SaaS software to provide an affordable, scalable solution with automatic updates and maintenance included. Moreover, our developers create cloud-hosted applications that can be accessed from any device with an internet connection."
            );
        }
        if (trimText === "HR Management") {
            $("#DescTitleSrervice").text("HR Management Software Development");
            $("#DescTextSrervice").text(
                "Developers at Dqot Solutions can create customized tools to manage the human resource process efficiently. HR Management application is used to manage employee data, recruitment, benefits, payroll, training, and performance reviews. These tools improve efficiency, automate HR tasks, and provide a centralized HR management system."
            );
        }
        if (trimText === "Inventory Management") {
            $("#DescTitleSrervice").text(
                "Inventory Management Software Development"
            );
            $("#DescTextSrervice").text(
                "Dqot Solutions develops custom Inventory Management Software to manage inventory tracking. This software monitors stock levels, locations, and movements for your business. It automates receiving, restocking, and ordering to maximize efficiency. Dqot Solutions' inventory management tools prevent stockouts and overstocking issues."
            );
        }
        if (trimText === "Custom Mobile App") {
            $("#DescTitleSrervice").text(
                "Custom Mobile App Development Company"
            );
            $("#DescTextSrervice").text(
                "Experts at Dqot Solutions are experienced in developing a Custom Mobile App Development. We can create an innovative and a scalable application on various platforms like Flutter,  React Native, and React.js. We provide app Android, iOS, and native mobile app development solutions. "
            );
        }
        if (trimText === "Custom Web") {
            $("#DescTitleSrervice").text("Custom Web Development Company");
            $("#DescTextSrervice").text(
                "Our web developers are experts in creating a scalable and user-friendly website as per your requirement. Our experts have a specialization in various languages like wordpress, PHP, Laravel, and all the languages as per your requirements. We can provide website development solutions from a basic website to an advanced website. "
            );
        }
        if (trimText === "Web To Print Software") {
            $("#DescTitleSrervice").text(
                "Web To Print Software Development Company"
            );
            $("#DescTextSrervice").text(
                "A Web to Print Software Development Company like Dqot Solutions creates online design and ordering platforms. Their software allows customers to customize and order printed materials like business cards, marketing collateral, and brochures. Web to Print solutions streamline the ordering process and automate print workflows."
            );
        }

        //  Sports and Gaming
        if (trimText === "Fantasy Sports App") {
            $("#DescTitleIndustries").text(
                "Fantasy Sports App Development Company"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions is a leading Fantasy Sports Application Development Company. We ensure to provide the best Sports Application with robust features integrated in the application to improve the user experience and provide the best virtual gaming experience to them. "
            );
        }
        if (trimText === "Fantasy Cricket App") {
            $("#DescTitleIndustries").text(
                "Fantasy Cricket App Development Game"
            );
            $("#DescTextIndustries").text(
                "Nowadays, almost all people are cricket lovers. So, Dqot Solutions can provide you with cutting-edge solutions to build a feature-rich fantasy cricket app development. Our developers ensure to turn your imaginary cricket application into reality."
            );
        }
        //  if(trimText === "Color Prediction Game") {
        //   $('#DescTitleIndustries').text("Color Prediction Game Development Company");
        //   $('#DescTextIndustries').text("Dqot Solutions is one of the best Colour Prediction Game Development Company in the UK, USA, India, Dubai, Kuwait, and Saudi Arabia. Our developers are expert in creating a Color Prediction game application for both Android and iOS devices. We make sure to use modern technology to provide smooth functioning to the gamers.");
        //  }
        if (trimText === "Sports Streaming App") {
            $("#DescTitleIndustries").text("Sports Streaming App");
            $("#DescTextIndustries").text(
                "Dqot Solutions is an innovative sports Streaming Application service provider. Their apps enable cross-platform streaming of events, highlights, news and presentations. For all sports fans gaming apps developed by us offer a multi-streaming experience with multiplayer, DVR, and connectivity capabilities."
            );
        }
        if (trimText === "Sports Scorecard Web App") {
            $("#DescTitleIndustries").text(
                "Sports Scorecard Web App Development"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions develops innovative Sports Scorecard Web Apps to track game scores. Their apps provide real-time scoring updates across multiple sports. The scorecards include comprehensive stats, player info, and game highlights, giving fans an engaging way to follow their favorite teams."
            );
        }
        if (trimText === "Sports News Web App") {
            $("#DescTitleIndustries").text("Sports News Web App Development");
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions can create an application for Android and iOS devices. Our developers are experts in developing a Sports news application on different frameworks like Flutter, React Native, and React.js. These applications provide "
            );
        }
        if (trimText === "AR/ VR Game App") {
            $("#DescTitleIndustries").text("AR/ VR Game App");
            $("#DescTextIndustries").text(
                "Dqot Solutions has an expertise in building an AR/VR Gaming Application. We can create various types ofAR/VR games for you like Sports, Adventure, Exergames, and Role Playing. Our developers make sure to develop a hybrid application that is accessible for both iOS and Android Users. "
            );
        }
        if (trimText === "3D Game App") {
            $("#DescTitleIndustries").text("3D Game App Development");
            $("#DescTextIndustries").text(
                "Dqot Solutions is a leading mobile and web games software development company. Our developers are experts in various animation gaming platforms like Blender, Unity, Maya, and Max. We make sure to build a gaming application exactly like your expectations."
            );
        }

        //Healthcare and Fitness
        if (trimText === "Telemedicine App") {
            $("#DescTitleIndustries").text(
                "Telemedicine App Development Company"
            );
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions are experts in developing cutting-edge solutions for telemedicine app development. These applications provide various features to the patients and the doctors to streamline the process. We can build healthcare apps with modern UI and technologies."
            );
        }
        if (trimText === "Pharmacy App") {
            $("#DescTitleIndustries").text("Pharmacy App Development ");
            $("#DescTextIndustries").text(
                "Pharmacy Application plays an important role in the modern times, as these applications provide a digital excess to all types of pharmacy needs. Specialists at Dqot Solutions can develop a robust Pharmacy Application."
            );
        }
        if (trimText === "Wearable Fitness Tracking App") {
            $("#DescTitleIndustries").text(
                "Wearable Fitness Tracking App Development"
            );
            $("#DescTextIndustries").text(
                "Experts at Dqot Solutions are specialized in developing a Wearable Fitness Tracking Application. Fitness Tracking Apps developed by us can track the heart rate, blood pressure, and various other things at just a one click."
            );
        }
        if (trimText === "Diet and Nutrition App") {
            $("#DescTitleIndustries").text(
                "Diet and Nutrition App Development"
            );
            $("#DescTextIndustries").text(
                "Every other person is looking for a proper diet plan to stay healthy and fit. So, Dqot Solutions has experts who can create an application for diet and nutrition. Here doctors will be able to suggest the best diet plan based on the health conditions of the person."
            );
        }

        //On Demand
        if (trimText === "On Demand Grocery Delivery") {
            $("#DescTitleIndustries").text(
                "On Demand Grocery Delivery Application Development"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions has proficient developers who can develop On Demand Grocery Delivery Application. This application allows people to order groceries online and get it delivered at home conveniently and quickly. "
            );
        }
        if (trimText === "On Demand Taxi Booking") {
            $("#DescTitleIndustries").text(
                "On Demand Taxi Booking App Development"
            );
            $("#DescTextIndustries").text(
                "Taxi Booking Application is the most used application as it allows people to book taxis online for any location without moving from one place to another. Experts at Dqot Solutions are proficient in developing On Demand Taxi Booking Application to resolve the traveling problems of the people. "
            );
        }
        if (trimText === "On Demand House Cleaning") {
            $("#DescTitleIndustries").text(
                "On Demand House Cleaning App Development"
            );
            $("#DescTextIndustries").text(
                "Dqot Solution develops on demand house cleaning applications that allow customers to book house cleaning services virtually. You can book cleaners and have them at home to clean your space and make it look beautiful. We make sure to develop an application with multiple features integrated in the house cleaning application. "
            );
        }
        if (trimText === "On Demand Doctor App") {
            $("#DescTitleIndustries").text("On Demand Doctor App Development");
            $("#DescTextIndustries").text(
                "Experts at Dqot Solutions have an expertise in developing an on demand doctor application that allows patients to consult with the doctors virtually. Our developers ensure to incorporate various features like the tracking of your appointment, availability of the slots, and many more features. "
            );
        }
        if (trimText === "On Demand Food Delivery") {
            $("#DescTitleIndustries").text(
                "On Demand Food Delivery App Development"
            );
            $("#DescTextIndustries").text(
                "Dqot solutions specializes in developing on-demand food delivery applications. These apps connect customers with local restaurants, allowing them to browse menus, place orders, and pay online. With a user-friendly interface and seamless integration, these apps provide a convenient food ordering experience."
            );
        }
        if (trimText === "On Demand Car Wash App") {
            $("#DescTitleIndustries").text(
                "On Demand Car Wash App Development"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions has an expertise in building on-demand car wash applications. These applications provide people with various options of the car washing agents allowing them to review their previous works. We can build a feature rich car washing application to provide convenience in cleaning cars. "
            );
        }
        if (trimText === "On Demand Laundry App") {
            $("#DescTitleIndustries").text("On Demand Laundry App Development");
            $("#DescTextIndustries").text(
                "We can promise to build a feature rich on demand laundry app development. These applications connect customers with the laundry vendors from their nearby area to ensure flexibility in convenience in booking laundry services virtually."
            );
        }
        if (trimText === "On Demand Tutor Finder") {
            $("#DescTitleIndustries").text(
                "On Demand Tutor Finder App Development"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions can develop a modern on-demand tutor finder application to streamline the process for the customers. This application can allow customers to find the best tutor for themselves. You can even connect with the tutors and clarify your doubts with this application."
            );
        }
        if (trimText === "On Demand Plumber Finder") {
            $("#DescTitleIndustries").text(
                "On Demand Plumber Finder App Development"
            );
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions are proficient in developing on-demand plumber finder applications. These applications allow users to connect with the plumbers near their location, allowing them to search for services they are providing and they can even check their reviews."
            );
        }
        if (trimText === "On Demand Car Rental App") {
            $("#DescTitleIndustries").text(
                "On Demand Car Rental App Development"
            );
            $("#DescTextIndustries").text(
                "Dqot solutions develops on-demand car rental apps that allow users to rent vehicles conveniently through their smartphones. These apps provide a seamless experience, enabling users to search for available cars, book rentals, and unlock vehicles with their phones. With real-time tracking and secure payment gateways, these apps offer a hassle-free car rental solution for modern mobility needs."
            );
        }
        if (trimText === "On Demand Renewable Energy Software") {
            $("#DescTitleIndustries").text(
                "On Demand Renewable Energy Software Development"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions builds on-demand renewable energy apps that allow users to access real-time racking, analysis, and  optimization of solar, wing, and other renewable energy. The advanced algorithms used in these platforms maximize energy generations and efficiency. "
            );
        }

        //Top Industries
        if (trimText === "Real Estate App") {
            $("#DescTitleIndustries").text("Real Estate App Development");
            $("#DescTextIndustries").text(
                "Dqot Solutions can develop real estate applications with robust features like various property displays, nearby location, secured payments, and virtual calling facilities. These apps provide a seamless experience, to the people looking for a property to buy or on a rent."
            );
        }
        if (trimText === "Transport Automotive") {
            $("#DescTitleIndustries").text(
                "Transport Automotive App Development"
            );
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions can build Transport Automotive App Development. These applications streamline logistics and fleet management with real-time vehicle tracking and route optimization. We also ensure to build user-friendly apps that have features like vehicle maintenance scheduling."
            );
        }
        if (trimText === "Crypto Currency") {
            $("#DescTitleIndustries").text("Cryptocurrency App Development");
            $("#DescTextIndustries").text(
                "Dqot Solutions is a leading crypto currency app development company. We ensure to build an application that provides successful and scalable app development solutions to the customers. This application is beneficial in various ways like it increases brand awareness, easiest & faster transactions, highly secure and scalable infrastructure."
            );
        }
        if (trimText === "Food and Restaurant") {
            $("#DescTitleIndustries").text(
                "Food and Restaurant App Development Company"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions is a leading food and restaurant app development company that connects customers with various nearby restaurants, it also provides menus, delivery facilities, and various food options to the customers. We make sure to develop a modern UI design for the applications to make it user-friendly."
            );
        }
        if (trimText === "Education") {
            $("#DescTitleIndustries").text("Education App Development Company");
            $("#DescTextIndustries").text(
                "Dqot Solutions is a famous Education App Development Company. We make sure to incorporate various features like doubt solving sessions, live classes, chatbots to connect with the teachers. Moreover, we prioritize making the user-interface scalable and user-friendly."
            );
        }
        if (trimText === "Banking and Finance") {
            $("#DescTitleIndustries").text(
                "Banking and Finance App Development Company"
            );
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions have an expertise in developing banking and finance applications. These apps provide real-time tracking of our personalized account, access transactions history, and secured payment facilities. The user-friendly interface and robust backend ensure a seamless experience for banking and finance applications."
            );
        }
        if (trimText === "Media and Entertainment") {
            $("#DescTitleIndustries").text(
                "Media and Entertainment App Development Company"
            );
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions are experts in developing media and entertainment applications with various features like movie streaming, series streaming, multiple options, multiple payment options to improve the experience of the customers. Our developers make sure to make user-friendly UI for the media and entertainment applications."
            );
        }
        if (trimText === "Travel App") {
            $("#DescTitleIndustries").text("Travel App Development Company");
            $("#DescTextIndustries").text(
                "Dqot Solutions has specialization in Travel App Development. We make sure to build an application that provides multiple features to the users like weather forecasting, booking, navigation, trip reviews, and many more. Our developers can create a scalable and user-friendly application."
            );
        }
        if (trimText === "Smart Home Manager App") {
            $("#DescTitleIndustries").text(
                "Smart Home Manager App Development Company"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions is a famous Smart Home Manager App Development Company. Our developers make sure to build an application that provides features to manage the modern homes with innovative designs and equipment."
            );
        }
        if (trimText === "Block Chain") {
            $("#DescTitleIndustries").text(
                "BlockChain App Development Company"
            );
            $("#DescTextIndustries").text(
                "Dqot solutions is a leading blockchain app development company. Our experts make sure to build secure, decentralized applications leveraging blockchain technology for various industries. Their blockchain apps ensure data transparency, immutability, and trustless transactions."
            );
        }
        if (trimText === "Astrology App") {
            $("#DescTitleIndustries").text("Astrology App Development Company");
            $("#DescTextIndustries").text(
                "Experts at Dqot solutions are experts in developing astrology applications. They build user-friendly apps for horoscope readings, zodiac predictions, and astrological consultations. Their apps provide personalized astrological insights to users."
            );
        }

        if (trimText === "Logistic App") {
            $("#DescTitleIndustries").text("Logistic App Development");
            $("#DescTextIndustries").text(
                "Dqot Solutions has expertise to develop cross platform logistic applications. These applications allow customers to track the location of the vehicle feature via GPS location, parcel booking facilities for the customers, and many more features available. User interface of the application developed by us is modern and user-friendly."
            );
        }
        if (trimText === "Dating App") {
            $("#DescTitleIndustries").text("Dating App Development");
            $("#DescTextIndustries").text(
                "Our experts at Dqot Solutions are proficient in building a Dating Application with multiple features. This application allows customers to connect with each other with multiple options like video and voice calling to understand the person well. We make sure to make the user interface innovative and quirky that connect with the theme of the dating application."
            );
        }
        if (trimText === "Social Networking") {
            $("#DescTitleIndustries").text("Social Networking App Development");
            $("#DescTextIndustries").text(
                "Dqot Solutions can help you to create social networking applications like Facebook, Instagram and many more. These applications allow you to connect with various new people and connect with friends from far off places. These applications can also help customers to increase their business."
            );
        }
        if (trimText === "Ecommerce Web App") {
            $("#DescTitleIndustries").text("Ecommerce Web App Development");
            $("#DescTextIndustries").text(
                "Dqot Solutions is a leading software development company that has expertise in developing Ecommerce Web Applications with scalable and user friendly interface. We make sure to build an ecommerce application like Amazon, Flipkart that has robust features like multiple and secured payments."
            );
        }

        //  AI Based Application
        if (trimText === "Trip Planner App") {
            $("#DescTitleIndustries").text("Trip Planner App Development");
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions are experts in developing a trip planning application. This trip planning application has various features like travel booking, hotel booking, destination to visit, and nearby tourist places. We can build a cross platform trip planning application that works on both iOS and Android Apps."
            );
        }
        if (trimText === "Face Recognition App") {
            $("#DescTitleIndustries").text("Face Recognition App Development");
            $("#DescTextIndustries").text(
                "Dqot solutions develops cutting-edge face recognition apps. These apps support advanced computer vision and machine learning algorithms. They enable secure authentication, surveillance, and personalized user experiences."
            );
        }
        if (trimText === "Chatbot") {
            $("#DescTitleIndustries").text("Chatbots Development Services");
            $("#DescTextIndustries").text(
                "Dqot Solutions is a no1 Chatbot development company. Chatbots allow users to connect with the companies or brands to resolve or clarify their doubts. We make sure to make the process of connecting with the brands convenient and faster."
            );
        }

        //Technologies
        if (trimText === "Front End Development") {
            $("#DescTitleIndustries").text("Front End Development Services");
            $("#DescTextIndustries").text(
                "We at Dqot Solutions can provide you with Front End Development Services for the websites and the applications. Our developers are well versed with various languages like Wordpress, HTML, CSS, JavaScript, JSX, React.js, Node,js and TypeScript."
            );
        }
        if (trimText === "Backend Development") {
            $("#DescTitleIndustries").text("Backend Development Services");
            $("#DescTextIndustries").text(
                "Experts at Dqot Solutions are proficient in backend development for the websites and the application. We can do backend for both Android and iOS applications. Our developers are proficient in frameworks like Laravel, React NAtive, Flutter, Django, CakePHP, and many more."
            );
        }
        if (trimText === "Cloud Computing") {
            $("#DescTitleIndustries").text("Cloud Computing Services");
            $("#DescTextIndustries").text(
                "Dqot solutions offers robust cloud computing services. They provide scalable and secure cloud infrastructure solutions. Their services include cloud migration, cloud app development, and cloud management. Supporting leading cloud platforms for seamless cloud adoption."
            );
        }
        if (trimText === "Database Management") {
            $("#DescTitleIndustries").text(
                "Database Management Development Services"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions has an expertise in developing a database for the management of the various works. These databases can be used to manage the work of the Hr and it also streamlines the data of the company or any brand. These databases are used to manage the data in various fields."
            );
        }
        if (trimText === "Salesforce") {
            $("#DescTitleIndustries").text("Salesforce Development Services");
            $("#DescTextIndustries").text(
                "Dqot solutions offers comprehensive Salesforce development services. They customize and integrate Salesforce CRM solutions for businesses. Their services include Salesforce app development, data migration, and process automation. Driving efficiency and productivity through tailored Salesforce implementations."
            );
        }

        //Hire Dedicated
        if (trimText === "Hire Flutter Developer") {
            $("#DescTitleHire").text("Hire Flutter Developer");
            $("#DescTextHire").text(
                "Hire Flutter Developer from Dqot Solutions to get app development services from us. Our service providers are available in various countries like Dubai, UAE, Kuwait, India, the UK, USA, and various other countries."
            );
        }
        if (trimText === "Hire WordPress Developer") {
            $("#DescTitleHire").text("Hire Wordpress Developer");
            $("#DescTextHire").text(
                "Wordpress Developers at Dqot Solution are experts in providing development services to various countries like India, UAE, Kuwait, Dubai, CHia, Chicago, and more countries. Our developers can provide development services for iOS, Android, and cross platform app development."
            );
        }
        if (trimText === "Hire IPhone App Developer") {
            $("#DescTitleHire").text("Hire iOS App Developer");
            $("#DescTextHire").text(
                "Dqot Solutions promises you to provide the opportunity to hire talented iOS app developers. Our developers can provide robust development solutions for both iOS applications and websites. We provide development solutions for almost all countries like Kuwait, Saudi Arabia, UAE, Dubai, aUK, USA, India, CHina, Spain and many more."
            );
        }
        if (trimText === "Hire Mobile App Developer") {
            $("#DescTitleHire").text("Hire Android App Developer");
            $("#DescTextHire").text(
                "Dqot Solutions provides you an opportunity to hire Android App Developers for India, Dubai, UAE, Kuwait, Spain, China, USA, UK, and many other countries. Our developers can provide website and app development solutions for Android users."
            );
        }
        if (trimText === "Hire Digital Marketer") {
            $("#DescTitleHire").text("Hire Digital Marketer");
            $("#DescTextHire").text(
                "Hire Digital Marketer from Dqot Solutions to get the engagement on your website and application. We provide digital marketing services in countries like India, UK, USA, Kuwait, Dubai, UAE, Saudi Arabia, and many more."
            );
        }

        if (trimText === "Angular JS Hire Developer") {
            $("#DescTitleHire").text("Hire Angular JS Developer");
            $("#DescTextHire").text(
                "Angular JS Developers at Dqot Solutions have a strong expertise in Javascript, Typescript, and an Angular framework. Our Angular JS developers are highly experienced in feature-rich web development solutions. Our developers provide web development services in various countries like Dubai, Kuwait, India, and many more."
            );
        }
        if (trimText === "Hire Codelgniter Developer") {
            $("#DescTitleHire").text("Hire Codeigniter Developer");
            $("#DescTextHire").text(
                "Dqot Solutions provide multi skilled Codeigniter developers to provide the best web development services. Our Codeigniter developers are expert in using powerful features of thi PHp framework, ensuring efficient development process and delivery of high quality solutions in countries like the UK, USA, Kuwait, Dubia, UAE, Saudi Arabia, and many more."
            );
        }
        if (trimText === "Hire Node JS Developer") {
            $("#DescTitleHire").text("Hire Node JS Developer");
            $("#DescTextHire").text(
                "Hire Node Js Developers from Dqot Solution a leading software company. We can help you to create cutting -edge web development solutions by breaking the power of server-side javascript with our Skilled Nodejs developers. We provide development solutions for India, UK, USA, Kuwait, China, Dubai, Brazil, Philippines, Canada, and many more."
            );
        }
        if (trimText === "Hire .NET Developer") {
            $("#DescTitleHire").text("Hire .NET Developer");
            $("#DescTextHire").text(
                "Dqot Solutions has highly experienced and skilled .NET developers to fulfill the app development services as per your needs. Our developers are experienced working with the latest Microsoft technologies, including .NET Core, .NET Framework, ASP.NET, Azure and Entity Framework."
            );
        }
        if (trimText === "Hire Python Developer") {
            $("#DescTitleHire").text("Hire Python Developer");
            $("#DescTextHire").text(
                "Hire Python Developers from Dqot Solutions to get the feature-rich development solutions. Our developers are well versed with using the latest technologies, we provide services in various countries like USA, UK, UAE, Canada, Brazil, and many more."
            );
        }
        if (trimText === "Hire Django Developer") {
            $("#DescTitleHire").text("Hire Django Developer");
            $("#DescTextHire").text(
                "Dqot Solutions can provide web development solutions to China, Dubai, Brazil, Philippines, Netherlands, London. Our Django developers provide the best feature-rich solutions for the web development hassle free."
            );
        }
        if (trimText === "Hire Drupal Developer") {
            $("#DescTitleHire").text("Hire Drupal Developer");
            $("#DescTextHire").text(
                "Dqot Solutions has highly experienced Drupal Developers. We have expertise in developing scalable, robust, and content-rich websites. We provide web development solutions to enhance the visibility of your business."
            );
        }
        if (trimText === "Hire Magento Developer") {
            $("#DescTitleHire").text("Hire Magento Developer");
            $("#DescTextHire").text(
                "Magento Developers are experts and highly experienced in developing web applications. We have expertise in developing feature-rich, saleable, and robust applications to enhance the digital experience of your business. We provide development solutions across the world."
            );
        }

        //Web App Cloning
        if (trimText === "App Like Dream 11") {
            $("#DescTitleHire").text("App Like Dream 11");
            $("#DescTextHire").text(
                "The market of Fantasy Sports is growing with the increase in the excitement of the people for the sports. Developers at Dqot Solutions make sure to build an app like Dream 11 for the Fantasy Sports business. "
            );
        }
        if (trimText === "App Like Uber") {
            $("#DescTitleHire").text("App Like Uber");
            $("#DescTextHire").text(
                "Experts at Dqot Solutions can build a taxi booking application like uber. Recently, the market of taxi booking applications is rising due to the higher demand of the taxis in the market. We make sure to provide features like multiple payment options, contact details of the driers, availability of the driver."
            );
        }
        if (trimText === "App Like Zomato") {
            $("#DescTitleHire").text("App Like Zomato");
            $("#DescTextHire").text(
                "Dqot Solutions has experts who can develop a food booking application like Zomato. These applications allow customers to check the menus of the various restaurants and get them delivered at home easily and conveniently. "
            );
        }

        //UAE
        if (trimText === "Dubai") {
            $("#DescTitleCountries").text("App Development Company in Dubai");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Dubai. Our developers are expert with various technologies and framework for the development and the digital marketing services. "
            );
        }
        if (trimText === "Abu Dhabi") {
            $("#DescTitleCountries").text(
                "App Development Company in Abu Dhabi"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Abu Dhabi. Our developers are expert with various frameworks like Laravel, Django, and React Native, and many more used for the development process. "
            );
        }

        //INDIA
        if (trimText === "Jaipur") {
            $("#DescTitleCountries").text("App Development Company in Jaipur");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Jaipur. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
        if (trimText === "Delhi") {
            $("#DescTitleCountries").text("App Development Company in Delhi");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Delhi. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
        if (trimText === "Mumbai") {
            $("#DescTitleCountries").text("App Development Company in Mumbai");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Mumbai. Our developers are expert with various technologies and framework for the development and the digital marketing services. "
            );
        }
        if (trimText === "Ahmedabad") {
            $("#DescTitleCountries").text(
                "App Development Company in Ahmedabad"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Ahmedabad. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }

        //Australia
        if (trimText === "Sydney") {
            $("#DescTitleCountries").text("App Development Company in Sydney");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Sydney. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
        if (trimText === "Melbourne") {
            $("#DescTitleCountries").text(
                "App Development Company in Melbourne"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Melbourne. Our developers are expert with various technologies and framework for the development and the digital marketing services. "
            );
        }

        //USA
        if (trimText === "New York") {
            $("#DescTitleCountries").text(
                "App Development Company in New York"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in New York. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
        if (trimText === "Los Angeles") {
            $("#DescTitleCountries").text(
                "App Development Company in Los Angeles"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Los Angeles. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
        if (trimText === "Chicago") {
            $("#DescTitleCountries").text("App Development Company in Chicago");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Chicago. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }

        //UK
        if (trimText === "London") {
            $("#DescTitleCountries").text("App Development Company in London");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in London. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }

        //USA
        if (trimText === "Brazil") {
            $("#DescTitleCountries").text("App Development Company in Brazil");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Brazil. Our developers are expert with various technologies and framework for the development and the digital marketing services. "
            );
        }
        if (trimText === "Philippines") {
            $("#DescTitleCountries").text(
                "App Development Company in Philippines"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in the Philippines. Our developers are expert with various technologies and framework for the development and the digital marketing services. "
            );
        }
        if (trimText === "Canada") {
            $("#DescTitleCountries").text("App Development Company in Canada");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Canada. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
        if (trimText === "Netherlands") {
            $("#DescTitleCountries").text(
                "App Development Company in Netherlands"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in the Netherlands. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".home_portfolio", {
            loop: false,
            autoplay: { delay: 1500, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        }),
        swiper = new Swiper(".industry_mobile_swiper", {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: false,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 2 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".co-working-review-slider", {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            // pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 2 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".journey_swiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".dqotlife_swiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".fantasy_services", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
            },
        }),
        swiper = new Swiper(".fantasy_apps-slider", {
            slidesPerView: 4,
            spaceBetween: 100,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".wordpress-guarantee-slider", {
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".industries-slider", {
            slidesPerView: 3,
            spaceBetween: 0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".case_study-slider", {
            slidesPerView: 3,
            spaceBetween: 10,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".fantasy_card-slider", {
            slidesPerView: 4,
            spaceBetween: 10,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".new-hire-slider", {
            slidesPerView: 4,
            spaceBetween: 10,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".carwash_apps-slider", {
            slidesPerView: 4,
            spaceBetween: 50,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".fantasy_demo-slider", {
            slidesPerView: 4,
            spaceBetween: 100,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1400: { slidesPerView: 5 },
                3000: { slidesPerView: 8 },
            },
        }),
        swiper = new Swiper(".fantasy_clients-slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1400: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".fantasy_sports", {
            slidesPerView: 3,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        }),
        swiper = new Swiper(".client_say", {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".insight_swiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        }),
        swiper = new Swiper(".servies_mobile_slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".white_label_sports", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
            },
        }),
        swiper = new Swiper(".our_value_slider", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
            },
        }),
        swiper = new Swiper(".our_teamm_slider", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".all_address_slider", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".dqotlife", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".portfolio-new-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".portfolio-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".portfolio-new-slider-next",
                prevEl: ".portfolio-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
            },
        }),
        swiper = new Swiper(".astrology-trusted-new-slider", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".astrology-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".astrology-trusted-new-slider-next",
                prevEl: ".astrology-trusted-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".shopifyindustrypage-slider1", {
            slidesPerView: 7,
            spaceBetween: 20,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".astrology-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".astrology-trusted-new-slider-next",
                prevEl: ".astrology-trusted-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 2 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 7 },
            },
        }),
        swiper = new Swiper(".shopify-development-portfolio-sec-card-slider", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".astrology-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".astrology-trusted-new-slider-next",
                prevEl: ".astrology-trusted-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".industry-sec-slider11", {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".astrology-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".astrology-trusted-new-slider-next",
                prevEl: ".astrology-trusted-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                680: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".newhome-trusted-new-slider", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".newhome-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".portfolio-new-slider-next",
                prevEl: ".portfolio-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                450: { slidesPerView: 2 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".happy_clients-trusted-new-slider", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".happy_clients-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".portfolio-new-slider-next",
                prevEl: ".portfolio-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".home-trusted-new-slider", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".home-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".portfolio-new-slider-next",
                prevEl: ".portfolio-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".client-testimonials-slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: {
                el: ".client-testimonials-slider-pagination",
                clickable: !0,
            },
            navigation: {
                nextEl: ".client-testimonials-slider-next",
                prevEl: ".client-testimonials-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".dqot-blog-slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".dqot-blog-slider-pagination", clickable: !0 },
            navigation: {
                nextEl: ".dqot-blog-slider-next",
                prevEl: ".dqot-blog-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".dqot-home-service-slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            navigation: {
                nextEl: ".dqot-home-service-slider-next",
                prevEl: ".dqot-home-service-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".dqot-home-service-chip-slider", {
            slidesPerView: "auto",
            spaceBetween: 10,
            mousewheel: true,
            grabCursor: true,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
        }),
        swiper = new Swiper(".dqot-industery-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: !0,
            // autoplay: { delay: 3e3, disableOnInteraction: !1 },
            navigation: {
                nextEl: ".dqot-industery-slider-next",
                prevEl: ".dqot-industery-slider-prev",
            },
        });
    var swiper = new Swiper(".banner_right_slider", {
        direction: "vertical",
        slidesPerView: 7,
        mousewheel: true,
        grabCursor: true,
        spaceBetween: 15,
        loop: true,
        autoplay: { delay: 3e3, disableOnInteraction: !1 },
        breakpoints: {
            0: {
                direction: "horizontal",
                slidesPerView: 1,
            },
            640: {
                direction: "horizontal",
                slidesPerView: 2,
            },
            992: {
                direction: "horizontal",
                slidesPerView: 3,
            },
            1200: {
                direction: "vertical",
                slidesPerView: 5,
            },
        },
    });
    (swiper = new Swiper(".expanding-across-border-slider", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: !0,
        autoplay: { delay: 3e3, disableOnInteraction: !1 },
        navigation: {
            nextEl: ".expanding-across-border-slider-next",
            prevEl: ".expanding-across-border-slider-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    })),
        (swiper = new Swiper(".awards", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            },
        })),
        (swiper = new Swiper(".review_main_slider", {
            slidesPerView: 2,
            spaceBetween: 0,
            loop: !0,
            autoplay: { delay: 1000, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            // breakpoints: {
            //     0: { slidesPerView: 1 },
            //     640: { slidesPerView: 2 },
            //     768: { slidesPerView: 3 },
            //     1024: { slidesPerView: 5 },
            // },
        }));
    // swiper = new Swiper(".review_main_slider", {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     loop: !0,
    //     autoplay: { delay: 3e3, disableOnInteraction: !1 },
    //     pagination: { el: ".swiper-pagination", clickable: !0 },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     breakpoints: {
    //         0: { slidesPerView: 1 },
    //         640: { slidesPerView: 2 },
    //         768: { slidesPerView: 3 },
    //         1024: { slidesPerView: 5 },
    //     },
    // });

    var swiper = new Swiper(".successswiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });

    var swiper = new Swiper(".energy_swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".other_fantasy", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    var swiper = new Swiper(".service_swiper_main", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
    var swiper = new Swiper(".our_client_swiper_", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });
    var swiper = new Swiper(".telemedice_work_slider", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
    var swiper = new Swiper(".minatravel_slider", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });

    var swiper = new Swiper(".shopify-banner-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".shopify-banner-slider-next",
            prevEl: ".shopify-banner-slider-prev",
        },
    });
});

const header = document.querySelector(".new_header"),
    toggleClass = "is-sticky";
window.addEventListener("scroll", () => {
    let e = window.pageYOffset;
    e > 150
        ? header.classList.add(toggleClass)
        : header.classList.remove(toggleClass);
});
var counter = document.querySelectorAll(".counter");
window.addEventListener(
    "load",
    function () {
        counter.forEach(function (e, i) {
            var s = counter[i].getAttribute("data-count-start"),
                n = counter[i].getAttribute("data-count-end");
            setInterval(function () {
                if (++s > n) return !1;
                counter[i].innerText = s;
            }, counter[i].getAttribute("data-speed"));
        });
    },
    !1
),
    // AOS.init();
    // var mybutton = document.getElementById("scrollbtn");
    // function scrollFunction() {
    //     document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    //         ? (mybutton.style.display = "flex")
    //         : (mybutton.style.display = "none");
    // }

    document.addEventListener("DOMContentLoaded", function () {
        var mybutton = document.getElementById("scrollbtn");
        function scrollFunction() {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                mybutton.style.display = "flex";
            } else {
                mybutton.style.display = "none";
            }
        }
    });

function topFunction() {
    (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
function myFloting() {
    document.getElementById("flotingMenu").classList.toggle("open");
}
function closepopup() {
    document.getElementById("flotingMenu").classList.remove("open");
}
window.onscroll = function () {
    scrollFunction();
};
const stages = [
    { roundId: "requirements_round", cardId: "requirements_card" },
    { roundId: "design_round", cardId: "design_card" },
    { roundId: "develop_round", cardId: "develop_card" },
    { roundId: "test_round", cardId: "test_card" },
    { roundId: "deploy_round", cardId: "deploy_card" },
    { roundId: "reveiw_round", cardId: "reveiw_card" },
];

function toggleSearch() {
    console.log("Toggle function called");
    var e = document.getElementById("searchInput"),
        i = document.getElementById("searchIcon"),
        s = document.getElementById("closeIcon");
    "none" === e.style.display || "" === e.style.display
        ? (console.log("Showing search input and close icon"),
          (e.style.display = "block"),
          (i.style.display = "none"),
          (s.style.display = "block"))
        : (console.log("Hiding search input and showing search icon"),
          //   (e.style.display = "none"),
          (i.style.display = "none"));
    //   (s.style.display = "none"));
}
function toggleSearchtwo() {
    console.log("Toggle function called");
    var e = document.getElementById("searchInputtwo"),
        i = document.getElementById("searchIcontwo"),
        s = document.getElementById("closeIcontwo");
    "none" === e.style.display || "" === e.style.display
        ? (console.log("Showing search input and close icon"),
          (e.style.display = "block"),
          (i.style.display = "none"),
          (s.style.display = "block"))
        : (console.log("Hiding search input and showing search icon"),
          //   (e.style.display = "none"),
          (i.style.display = "none"));
    //   (s.style.display = "none"));
}
function showhidefunction() {
    var e = document.getElementById("business_bx"),
        i = document.getElementById("carreir_bx");
    "none" === i.style.display || "" === i.style.display
        ? (console.log(""),
          (i.style.display = "block"),
          (e.style.display = "none"))
        : (console.log(""),
          (i.style.display = "none"),
          (e.style.display = "block"));
}
// stages.forEach((e) => {
//     let i = document.getElementById(e.roundId),
//         s = document.getElementById(e.cardId);
//     i.addEventListener("mouseover", function () {
//         s.classList.add("hovered");
//     }),
//         i.addEventListener("mouseout", function () {
//             s.classList.remove("hovered");
//         });
// }),

document.addEventListener("DOMContentLoaded", function () {
    stages.forEach((e) => {
        let i = document.getElementById(e.roundId),
            s = document.getElementById(e.cardId);

        if (i && s) {
            i.addEventListener("mouseover", function () {
                s.classList.add("hovered");
            });

            i.addEventListener("mouseout", function () {
                s.classList.remove("hovered");
            });
        } else {
            console.warn(
                `Element not found: roundId=${e.roundId}, cardId=${e.cardId}`
            );
        }
    });
});

// stages.forEach((e) => {
//     let i = document.getElementById(e.roundId),
//         s = document.getElementById(e.cardId);

//     if (i && s) {  // Ensure both elements exist before proceeding
//         i.addEventListener("mouseover", function () {
//             s.classList.add("hovered");
//         });

//         i.addEventListener("mouseout", function () {
//             s.classList.remove("hovered");
//         });
//     } else {
//         console.warn(`Element not found: roundId=${e.roundId}, cardId=${e.cardId}`);
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let e = document.getElementById("typing-text"),
//         i = document.getElementById("india_animation");
//     function s(e, i) {
//         let s = 0,
//             n = 0,
//             l = !0;
//         !(function t() {
//             if (l) {
//                 let a = i[s],
//                     o = a.charAt(n);
//                 "" === o
//                     ? ((l = !1), setTimeout(t, 1e3))
//                     : ((e.innerHTML += o), n++, setTimeout(t, 100));
//             } else if ("" === e.innerHTML)
//                 (n = 0),
//                     (l = !0),
//                     (s = (s + 1) % i.length),
//                     setTimeout(t, 1e3);
//             else {
//                 let r = e.innerHTML;
//                 (e.innerHTML = r.slice(0, -1)), setTimeout(t, 40);
//             }
//         })();
//     }
//     s(e, [
//         "",
//         "Fantasy Sports App Development",
//         "Cryptography",
//         "Ecommarce Website",
//         "Mobile App Development",
//         "Web Developement",
//     ]),
//         s(i, ["India", "USA", "UK", "CANADA", "UAE", "Australia"]);
// });

document.addEventListener("DOMContentLoaded", function () {
    let e = document.getElementById("typing-text"),
        i = document.getElementById("india_animation");

    if (!e || !i) {
        console.warn("One or both elements not found:", { e, i });
        return; // Stop execution if elements are missing
    }

    function s(e, i) {
        let s = 0,
            n = 0,
            l = !0;
        (function t() {
            if (l) {
                let a = i[s],
                    o = a.charAt(n);
                "" === o
                    ? ((l = !1), setTimeout(t, 1000))
                    : ((e.innerHTML += o), n++, setTimeout(t, 100));
            } else if ("" === e.innerHTML) {
                (n = 0),
                    (l = !0),
                    (s = (s + 1) % i.length),
                    setTimeout(t, 1000);
            } else {
                let r = e.innerHTML;
                (e.innerHTML = r.slice(0, -1)), setTimeout(t, 40);
            }
        })();
    }

    s(e, [
        "",
        "Fantasy Sports App Development",
        "Cryptography",
        "Ecommerce Website",
        "Mobile App Development",
        "Web Development",
    ]);

    s(i, ["India", "USA", "UK", "CANADA", "UAE", "Australia"]);
});

// document.getElementById('countryCode').addEventListener('change', function() {
//     document.getElementById('phone-input').focus();
// });

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Intersection Observer for animations
    const animateElements = document.querySelectorAll(
        ".fade-in-up, .scale-in, .slide-in-left, .slide-in-right"
    );

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay
                    ? parseInt(entry.target.dataset.delay)
                    : 0;
                setTimeout(() => {
                    entry.target.classList.add("animate");
                }, delay);
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    animateElements.forEach((el) => {
        observer.observe(el);
    });
});

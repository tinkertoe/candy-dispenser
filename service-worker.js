parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HeBG":[function(require,module,exports) {
"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(c){}
},{}],"zllm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.precachePlugins=void 0,require("../_version.js");const e=[],s={get:()=>e,add(s){e.push(...s)}};exports.precachePlugins=s;
},{"../_version.js":"HeBG"}],"kOI2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addPlugins=r;var e=require("./utils/precachePlugins.js");function r(r){e.precachePlugins.add(r)}require("./_version.js");
},{"./utils/precachePlugins.js":"zllm","./_version.js":"HeBG"}],"kCX8":[function(require,module,exports) {
"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(c){}
},{}],"UOvG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cacheNames=void 0,require("../_version.js");const e={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},t=t=>[e.prefix,t,e.suffix].filter(e=>e&&e.length>0).join("-"),i=t=>{for(const i of Object.keys(e))t(i)},r={updateDetails:t=>{i(i=>{"string"==typeof t[i]&&(e[i]=t[i])})},getGoogleAnalyticsName:i=>i||t(e.googleAnalytics),getPrecacheName:i=>i||t(e.precache),getPrefix:()=>e.prefix,getRuntimeName:i=>i||t(e.runtime),getSuffix:()=>e.suffix};exports.cacheNames=r;
},{"../_version.js":"kCX8"}],"ATI6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFriendlyURL=void 0,require("../_version.js");const e=e=>{return new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"")};exports.getFriendlyURL=e;
},{"../_version.js":"kCX8"}],"RSRA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.logger=void 0,require("../_version.js");const e=null;exports.logger=null;
},{"../_version.js":"kCX8"}],"U5J5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.messages=void 0,require("../../_version.js");const e={"invalid-value":({paramName:e,validValueDescription:r,value:t})=>{if(!e||!r)throw new Error("Unexpected input to 'invalid-value' error.");return`The '${e}' parameter was given a value with an `+`unexpected value. ${r} Received a value of `+`${JSON.stringify(t)}.`},"not-an-array":({moduleName:e,className:r,funcName:t,paramName:a})=>{if(!(e&&r&&t&&a))throw new Error("Unexpected input to 'not-an-array' error.");return`The parameter '${a}' passed into `+`'${e}.${r}.${t}()' must be an array.`},"incorrect-type":({expectedType:e,paramName:r,moduleName:t,className:a,funcName:n})=>{if(!(e&&r&&t&&n))throw new Error("Unexpected input to 'incorrect-type' error.");return`The parameter '${r}' passed into `+`'${t}.${a?a+".":""}`+`${n}()' must be of type ${e}.`},"incorrect-class":({expectedClass:e,paramName:r,moduleName:t,className:a,funcName:n,isReturnValueProblem:o})=>{if(!e||!t||!n)throw new Error("Unexpected input to 'incorrect-class' error.");return o?"The return value from "+`'${t}.${a?a+".":""}${n}()' `+`must be an instance of class ${e.name}.`:`The parameter '${r}' passed into `+`'${t}.${a?a+".":""}${n}()' `+`must be an instance of class ${e.name}.`},"missing-a-method":({expectedMethod:e,paramName:r,moduleName:t,className:a,funcName:n})=>{if(!(e&&r&&t&&a&&n))throw new Error("Unexpected input to 'missing-a-method' error.");return`${t}.${a}.${n}() expected the `+`'${r}' parameter to expose a '${e}' method.`},"add-to-cache-list-unexpected-type":({entry:e})=>"An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry "+`'${JSON.stringify(e)}' isn't supported. You must supply an array of `+"strings with one or more characters, objects with a url property or Request objects.","add-to-cache-list-conflicting-entries":({firstEntry:e,secondEntry:r})=>{if(!e||!r)throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");return"Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL "+`${e._entryId} but different revision details. Workbox is `+"unable to cache and version the asset correctly. Please remove one of the entries."},"plugin-error-request-will-fetch":({thrownError:e})=>{if(!e)throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");return"An error was thrown by a plugins 'requestWillFetch()' method. "+`The thrown error message was: '${e.message}'.`},"invalid-cache-name":({cacheNameId:e,value:r})=>{if(!e)throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");return"You must provide a name containing at least one character for "+`setCacheDetails({${e}: '...'}). Received a value of `+`'${JSON.stringify(r)}'`},"unregister-route-but-not-found-with-method":({method:e})=>{if(!e)throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");return"The route you're trying to unregister was not  previously "+`registered for the method type '${e}'.`},"unregister-route-route-not-registered":()=>"The route you're trying to unregister was not previously registered.","queue-replay-failed":({name:e})=>`Replaying the background sync queue '${e}' failed.`,"duplicate-queue-name":({name:e})=>`The Queue name '${e}' is already being used. `+"All instances of backgroundSync.Queue must be given unique names.","expired-test-without-max-age":({methodName:e,paramName:r})=>`The '${e}()' method can only be used when the `+`'${r}' is used in the constructor.`,"unsupported-route-type":({moduleName:e,className:r,funcName:t,paramName:a})=>`The supplied '${a}' parameter was an unsupported type. `+`Please check the docs for ${e}.${r}.${t} for `+"valid input types.","not-array-of-class":({value:e,expectedClass:r,moduleName:t,className:a,funcName:n,paramName:o})=>`The supplied '${o}' parameter must be an array of `+`'${r}' objects. Received '${JSON.stringify(e)},'. `+`Please check the call to ${t}.${a}.${n}() `+"to fix the issue.","max-entries-or-age-required":({moduleName:e,className:r,funcName:t})=>"You must define either config.maxEntries or config.maxAgeSeconds"+`in ${e}.${r}.${t}`,"statuses-or-headers-required":({moduleName:e,className:r,funcName:t})=>"You must define either config.statuses or config.headers"+`in ${e}.${r}.${t}`,"invalid-string":({moduleName:e,funcName:r,paramName:t})=>{if(!t||!e||!r)throw new Error("Unexpected input to 'invalid-string' error.");return`When using strings, the '${t}' parameter must start with `+"'http' (for cross-origin matches) or '/' (for same-origin matches). "+`Please see the docs for ${e}.${r}() for `+"more info."},"channel-name-required":()=>"You must provide a channelName to construct a BroadcastCacheUpdate instance.","invalid-responses-are-same-args":()=>"The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.","expire-custom-caches-only":()=>"You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.","unit-must-be-bytes":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'unit-must-be-bytes' error.");return"The 'unit' portion of the Range header must be set to 'bytes'. "+`The Range header provided was "${e}"`},"single-range-only":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'single-range-only' error.");return"Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "+`"${e}"`},"invalid-range-values":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'invalid-range-values' error.");return"The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "+`"${e}"`},"no-range-header":()=>"No Range header was found in the Request provided.","range-not-satisfiable":({size:e,start:r,end:t})=>`The start (${r}) and end (${t}) values in the Range are `+`not satisfiable by the cached response, which is ${e} bytes.`,"attempt-to-cache-non-get-request":({url:e,method:r})=>`Unable to cache '${e}' because it is a '${r}' request and `+"only 'GET' requests can be cached.","cache-put-with-no-response":({url:e})=>`There was an attempt to cache '${e}' but the response was not `+"defined.","no-response":({url:e,error:r})=>{let t=`The strategy could not generate a response for '${e}'.`;return r&&(t+=` The underlying error is ${r}.`),t},"bad-precaching-response":({url:e,status:r})=>`The precaching request for '${e}' failed with an HTTP `+`status of ${r}.`,"non-precached-url":({url:e})=>`createHandlerBoundToURL('${e}') was called, but that URL is `+"not precached. Please pass in a URL that is precached instead.","add-to-cache-list-conflicting-integrities":({url:e})=>"Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL "+`${e} with different integrity values. Please remove one of them.`,"missing-precache-entry":({cacheName:e,url:r})=>`Unable to find a precached response in ${e} for ${r}.`};exports.messages=e;
},{"../../_version.js":"kCX8"}],"mgiq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.messageGenerator=void 0;var e=require("./messages.js");require("../../_version.js");const r=(e,...r)=>{let s=e;return r.length>0&&(s+=` :: ${JSON.stringify(r)}`),s},s=(r,s={})=>{const t=e.messages[r];if(!t)throw new Error(`Unable to find message for code '${r}'.`);return t(s)},t=r;exports.messageGenerator=t;
},{"./messages.js":"U5J5","../../_version.js":"kCX8"}],"sMOR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WorkboxError=void 0;var e=require("../models/messages/messageGenerator.js");require("../_version.js");class r extends Error{constructor(r,s){super((0,e.messageGenerator)(r,s)),this.name=r,this.details=s}}exports.WorkboxError=r;
},{"../models/messages/messageGenerator.js":"mgiq","../_version.js":"kCX8"}],"fLQu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.assert=void 0;var r=require("../_private/WorkboxError.js");require("../_version.js");const o=(o,e)=>{if(!Array.isArray(o))throw new r.WorkboxError("not-an-array",e)},e=(o,e,t)=>{if("function"!==typeof o[e])throw t.expectedMethod=e,new r.WorkboxError("missing-a-method",t)},t=(o,e,t)=>{if(typeof o!==e)throw t.expectedType=e,new r.WorkboxError("incorrect-type",t)},i=(o,e,t)=>{if(!(o instanceof e))throw t.expectedClass=e,new r.WorkboxError("incorrect-class",t)},s=(o,e,t)=>{if(!e.includes(o))throw t.validValueDescription=`Valid values are ${JSON.stringify(e)}.`,new r.WorkboxError("invalid-value",t)},n=(o,e,t)=>{const i=new r.WorkboxError("not-array-of-class",t);if(!Array.isArray(o))throw i;for(const r of o)if(!(r instanceof e))throw i},a=null;exports.assert=null;
},{"../_private/WorkboxError.js":"sMOR","../_version.js":"kCX8"}],"RaTe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.quotaErrorCallbacks=void 0,require("../_version.js");const e=new Set;exports.quotaErrorCallbacks=e;
},{"../_version.js":"kCX8"}],"nHsh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.executeQuotaErrorCallbacks=o;var r=require("../_private/logger.js"),e=require("../models/quotaErrorCallbacks.js");async function o(){for(const r of e.quotaErrorCallbacks)await r()}require("../_version.js");
},{"../_private/logger.js":"RSRA","../models/quotaErrorCallbacks.js":"RaTe","../_version.js":"kCX8"}],"MrBs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pluginUtils=void 0,require("../_version.js");const e={filter:(e,i)=>e.filter(e=>i in e)};exports.pluginUtils=e;
},{"../_version.js":"kCX8"}],"cVTT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cacheWrapper=void 0;var e=require("./assert.js"),t=require("./executeQuotaErrorCallbacks.js"),s=require("./getFriendlyURL.js"),r=require("./logger.js"),a=require("../utils/pluginUtils.js"),c=require("./WorkboxError.js");require("../_version.js");const n=async({request:e,mode:t,plugins:s=[]})=>{const r=a.pluginUtils.filter(s,"cacheKeyWillBeUsed");let c=e;for(const a of r)"string"==typeof(c=await a.cacheKeyWillBeUsed.call(a,{mode:t,request:c}))&&(c=new Request(c));return c},o=async({request:e,response:t,event:s,plugins:r=[]})=>{let a=t,c=!1;for(const n of r)if("cacheWillUpdate"in n){c=!0;const t=n.cacheWillUpdate;if(!(a=await t.call(n,{request:e,response:a,event:s})))break}return c||(a=a&&200===a.status?a:void 0),a||null},i=async({cacheName:e,request:t,event:s,matchOptions:r,plugins:a=[]})=>{const c=await self.caches.open(e),o=await n({plugins:a,request:t,mode:"read"});let i=await c.match(o,r);for(const n of a)if("cachedResponseWillBeUsed"in n){const t=n.cachedResponseWillBeUsed;i=await t.call(n,{cacheName:e,event:s,matchOptions:r,cachedResponse:i,request:o})}return i},l=async({cacheName:e,request:r,response:l,event:u,plugins:p=[],matchOptions:h})=>{const d=await n({plugins:p,request:r,mode:"write"});if(!l)throw new c.WorkboxError("cache-put-with-no-response",{url:(0,s.getFriendlyURL)(d.url)});const q=await o({event:u,plugins:p,response:l,request:d});if(!q)return void 0;const w=await self.caches.open(e),f=a.pluginUtils.filter(p,"cacheDidUpdate"),g=f.length>0?await i({cacheName:e,matchOptions:h,request:d}):null;try{await w.put(d,q)}catch(m){throw"QuotaExceededError"===m.name&&await(0,t.executeQuotaErrorCallbacks)(),m}for(const t of f)await t.cacheDidUpdate.call(t,{cacheName:e,event:u,oldResponse:g,newResponse:q,request:d})},u={put:l,match:i};exports.cacheWrapper=u;
},{"./assert.js":"fLQu","./executeQuotaErrorCallbacks.js":"nHsh","./getFriendlyURL.js":"ATI6","./logger.js":"RSRA","../utils/pluginUtils.js":"MrBs","./WorkboxError.js":"sMOR","../_version.js":"kCX8"}],"LJCl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchWrapper=void 0;var e=require("./WorkboxError.js"),t=require("./logger.js"),r=require("./assert.js"),o=require("../_private/getFriendlyURL.js"),i=require("../utils/pluginUtils.js");require("../_version.js");const s=async({request:t,fetchOptions:r,event:o,plugins:s=[]})=>{if("string"==typeof t&&(t=new Request(t)),o instanceof FetchEvent&&o.preloadResponse){const e=await o.preloadResponse;if(e)return e}const n=i.pluginUtils.filter(s,"fetchDidFail"),c=n.length>0?t.clone():null;try{for(const e of s)if("requestWillFetch"in e){const r=e.requestWillFetch,i=t.clone();t=await r.call(e,{request:i,event:o})}}catch(a){throw new e.WorkboxError("plugin-error-request-will-fetch",{thrownError:a})}const l=t.clone();try{let e;e="navigate"===t.mode?await fetch(t):await fetch(t,r);for(const t of s)"fetchDidSucceed"in t&&(e=await t.fetchDidSucceed.call(t,{event:o,request:l,response:e}));return e}catch(u){0;for(const e of n)await e.fetchDidFail.call(e,{error:u,event:o,originalRequest:c.clone(),request:l.clone()});throw u}},n={fetch:s};exports.fetchWrapper=n;
},{"./WorkboxError.js":"sMOR","./logger.js":"RSRA","./assert.js":"fLQu","../_private/getFriendlyURL.js":"ATI6","../utils/pluginUtils.js":"MrBs","../_version.js":"kCX8"}],"tCOD":[function(require,module,exports) {
"use strict";let e;function o(){if(void 0===e){const s=new Response("");if("body"in s)try{new Response(s.body),e=!0}catch(o){e=!1}e=!1}return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.canConstructResponseFromBodyStream=o,require("../_version.js");
},{"../_version.js":"kCX8"}],"gpAe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.copyResponse=s;var e=require("./_private/canConstructResponseFromBodyStream.js");async function s(s,t){const r=s.clone(),o={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},n=t?t(o):o,a=(0,e.canConstructResponseFromBodyStream)()?r.body:await r.blob();return new Response(a,n)}require("./_version.js");
},{"./_private/canConstructResponseFromBodyStream.js":"tCOD","./_version.js":"kCX8"}],"sXRz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createCacheKey=o;var e=require("workbox-core/_private/WorkboxError.js");require("../_version.js");const r="__WB_REVISION__";function o(o){if(!o)throw new e.WorkboxError("add-to-cache-list-unexpected-type",{entry:o});if("string"==typeof o){const e=new URL(o,location.href);return{cacheKey:e.href,url:e.href}}const{revision:t,url:c}=o;if(!c)throw new e.WorkboxError("add-to-cache-list-unexpected-type",{entry:o});if(!t){const e=new URL(c,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(c,location.href),i=new URL(c,location.href);return n.searchParams.set(r,t),{cacheKey:n.href,url:i.href}}
},{"workbox-core/_private/WorkboxError.js":"sMOR","../_version.js":"HeBG"}],"xIsd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.printCleanupDetails=o;var e=require("workbox-core/_private/logger.js");require("../_version.js");const r=(r,o)=>{e.logger.groupCollapsed(r);for(const g of o)e.logger.log(g);e.logger.groupEnd()};function o(o){const g=o.length;g>0&&(e.logger.groupCollapsed("During precaching cleanup, "+`${g} cached `+`request${1===g?" was":"s were"} deleted.`),r("Deleted Cache Requests",o),e.logger.groupEnd())}
},{"workbox-core/_private/logger.js":"RSRA","../_version.js":"HeBG"}],"ODCG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.printInstallDetails=o;var e=require("workbox-core/_private/logger.js");function r(r,o){if(0!==o.length){e.logger.groupCollapsed(r);for(const r of o)e.logger.log(r);e.logger.groupEnd()}}function o(o,l){const g=o.length,s=l.length;if(g||s){let i=`Precaching ${g} file${1===g?"":"s"}.`;s>0&&(i+=` ${s} `+`file${1===s?" is":"s are"} already cached.`),e.logger.groupCollapsed(i),r("View newly precached URLs.",o),r("View previously precached URLs.",l),e.logger.groupEnd()}}require("../_version.js");
},{"workbox-core/_private/logger.js":"RSRA","../_version.js":"HeBG"}],"dYej":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PrecacheController=void 0;var e=require("workbox-core/_private/assert.js"),t=require("workbox-core/_private/cacheNames.js"),r=require("workbox-core/_private/cacheWrapper.js"),s=require("workbox-core/_private/fetchWrapper.js"),a=require("workbox-core/_private/logger.js"),c=require("workbox-core/_private/WorkboxError.js"),o=require("workbox-core/copyResponse.js"),i=require("./utils/createCacheKey.js"),n=require("./utils/printCleanupDetails.js"),h=require("./utils/printInstallDetails.js");require("./_version.js");class u{constructor(e){this._cacheName=t.cacheNames.getPrecacheName(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const r of e){"string"==typeof r?t.push(r):r&&void 0===r.revision&&t.push(r.url);const{cacheKey:e,url:s}=(0,i.createCacheKey)(r),a="string"!=typeof r&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new c.WorkboxError("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof r&&r.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==r.integrity)throw new c.WorkboxError("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,r.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,a),t.length>0){const e="Workbox is precaching URLs without revision "+`info: ${t.join(", ")}\nThis is generally NOT safe. `+"Learn more at https://bit.ly/wb-precache";console.warn(e)}}}async install({event:e,plugins:t}={}){const r=[],s=[],a=await self.caches.open(this._cacheName),c=await a.keys(),o=new Set(c.map(e=>e.url));for(const[h,u]of this._urlsToCacheKeys)o.has(u)?s.push(h):r.push({cacheKey:u,url:h});const i=r.map(({cacheKey:r,url:s})=>{const a=this._cacheKeysToIntegrities.get(r),c=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:r,cacheMode:c,event:e,integrity:a,plugins:t,url:s})});await Promise.all(i);const n=r.map(e=>e.url);return{updatedURLs:n,notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),r=new Set(this._urlsToCacheKeys.values()),s=[];for(const a of t)r.has(a.url)||(await e.delete(a),s.push(a.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:a,event:i,plugins:n,integrity:h}){const u=new Request(t,{integrity:h,cache:a,credentials:"same-origin"});let l,p=await s.fetchWrapper.fetch({event:i,plugins:n,request:u});for(const r of n||[])"cacheWillUpdate"in r&&(l=r);if(!(l?await l.cacheWillUpdate({event:i,request:u,response:p}):p.status<400))throw new c.WorkboxError("bad-precaching-response",{url:t,status:p.status});p.redirected&&(p=await(0,o.copyResponse)(p)),await r.cacheWrapper.put({event:i,plugins:n,response:p,request:e===t?u:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r){return(await self.caches.open(this._cacheName)).match(r)}}createHandler(e=!0){return async({request:t})=>{try{const s=await this.matchPrecache(t);if(s)return s;throw new c.WorkboxError("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(r){if(e)return fetch(t);throw r}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new c.WorkboxError("non-precached-url",{url:e});const r=this.createHandler(t),s=new Request(e);return()=>r({request:s})}}exports.PrecacheController=u;
},{"workbox-core/_private/assert.js":"fLQu","workbox-core/_private/cacheNames.js":"UOvG","workbox-core/_private/cacheWrapper.js":"cVTT","workbox-core/_private/fetchWrapper.js":"LJCl","workbox-core/_private/logger.js":"RSRA","workbox-core/_private/WorkboxError.js":"sMOR","workbox-core/copyResponse.js":"gpAe","./utils/createCacheKey.js":"sXRz","./utils/printCleanupDetails.js":"xIsd","./utils/printInstallDetails.js":"ODCG","./_version.js":"HeBG"}],"mm9N":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getOrCreatePrecacheController=void 0;var e=require("../PrecacheController.js");let r;require("../_version.js");const t=()=>(r||(r=new e.PrecacheController),r);exports.getOrCreatePrecacheController=t;
},{"../PrecacheController.js":"dYej","../_version.js":"HeBG"}],"yRC6":[function(require,module,exports) {
"use strict";function e(e,r=[]){for(const s of[...e.searchParams.keys()])r.some(e=>e.test(s))&&e.searchParams.delete(s);return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeIgnoredSearchParams=e,require("../_version.js");
},{"../_version.js":"HeBG"}],"zJfW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateURLVariations=r;var e=require("./removeIgnoredSearchParams.js");function*r(r,{ignoreURLParametersMatching:n,directoryIndex:a,cleanURLs:t,urlManipulation:o}={}){const i=new URL(r,location.href);i.hash="",yield i.href;const s=(0,e.removeIgnoredSearchParams)(i,n);if(yield s.href,a&&s.pathname.endsWith("/")){const e=new URL(s.href);e.pathname+=a,yield e.href}if(t){const e=new URL(s.href);e.pathname+=".html",yield e.href}if(o){const e=o({url:i});for(const r of e)yield r.href}}require("../_version.js");
},{"./removeIgnoredSearchParams.js":"yRC6","../_version.js":"HeBG"}],"rK7e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCacheKeyForURL=void 0;var e=require("./getOrCreatePrecacheController.js"),r=require("./generateURLVariations.js");require("../_version.js");const t=(t,o)=>{const s=(0,e.getOrCreatePrecacheController)().getURLsToCacheKeys();for(const e of(0,r.generateURLVariations)(t,o)){const r=s.get(e);if(r)return r}};exports.getCacheKeyForURL=t;
},{"./getOrCreatePrecacheController.js":"mm9N","./generateURLVariations.js":"zJfW","../_version.js":"HeBG"}],"nYPn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addFetchListener=void 0;var e=require("workbox-core/_private/cacheNames.js"),r=require("workbox-core/_private/getFriendlyURL.js"),t=require("workbox-core/_private/logger.js"),o=require("./getCacheKeyForURL.js");require("../_version.js");const a=({ignoreURLParametersMatching:r=[/^utm_/],directoryIndex:t="index.html",cleanURLs:a=!0,urlManipulation:i}={})=>{const c=e.cacheNames.getPrecacheName();self.addEventListener("fetch",e=>{const s=(0,o.getCacheKeyForURL)(e.request.url,{cleanURLs:a,directoryIndex:t,ignoreURLParametersMatching:r,urlManipulation:i});if(!s)return void 0;let n=self.caches.open(c).then(e=>e.match(s)).then(e=>e||fetch(s));e.respondWith(n)})};exports.addFetchListener=a;
},{"workbox-core/_private/cacheNames.js":"UOvG","workbox-core/_private/getFriendlyURL.js":"ATI6","workbox-core/_private/logger.js":"RSRA","./getCacheKeyForURL.js":"rK7e","../_version.js":"HeBG"}],"uIo1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addRoute=r;var e=require("./utils/addFetchListener.js");require("./_version.js");let t=!1;function r(r){t||((0,e.addFetchListener)(r),t=!0)}
},{"./utils/addFetchListener.js":"nYPn","./_version.js":"HeBG"}],"ESWF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.deleteOutdatedCaches=void 0,require("../_version.js");const e="-precache-",s=async(e,s="-precache-")=>{const t=(await self.caches.keys()).filter(t=>t.includes(s)&&t.includes(self.registration.scope)&&t!==e);return await Promise.all(t.map(e=>self.caches.delete(e))),t};exports.deleteOutdatedCaches=s;
},{"../_version.js":"HeBG"}],"LJA9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cleanupOutdatedCaches=a;var e=require("workbox-core/_private/cacheNames.js"),t=require("workbox-core/_private/logger.js"),r=require("./utils/deleteOutdatedCaches.js");function a(){self.addEventListener("activate",t=>{const a=e.cacheNames.getPrecacheName();t.waitUntil((0,r.deleteOutdatedCaches)(a).then(e=>{0}))})}require("./_version.js");
},{"workbox-core/_private/cacheNames.js":"UOvG","workbox-core/_private/logger.js":"RSRA","./utils/deleteOutdatedCaches.js":"ESWF","./_version.js":"HeBG"}],"Hrmt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createHandler=r;var e=require("./utils/getOrCreatePrecacheController.js");function r(r=!0){return(0,e.getOrCreatePrecacheController)().createHandler(r)}require("./_version.js");
},{"./utils/getOrCreatePrecacheController.js":"mm9N","./_version.js":"HeBG"}],"GeqV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createHandlerBoundToURL=r;var e=require("./utils/getOrCreatePrecacheController.js");function r(r){return(0,e.getOrCreatePrecacheController)().createHandlerBoundToURL(r)}require("./_version.js");
},{"./utils/getOrCreatePrecacheController.js":"mm9N","./_version.js":"HeBG"}],"UQPn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCacheKeyForURL=r;var e=require("./utils/getOrCreatePrecacheController.js");function r(r){return(0,e.getOrCreatePrecacheController)().getCacheKeyForURL(r)}require("./_version.js");
},{"./utils/getOrCreatePrecacheController.js":"mm9N","./_version.js":"HeBG"}],"lhsf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.matchPrecache=r;var e=require("./utils/getOrCreatePrecacheController.js");function r(r){return(0,e.getOrCreatePrecacheController)().matchPrecache(r)}require("./_version.js");
},{"./utils/getOrCreatePrecacheController.js":"mm9N","./_version.js":"HeBG"}],"Rk7d":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.precache=i;var e=require("workbox-core/_private/logger.js"),r=require("./utils/getOrCreatePrecacheController.js"),t=require("./utils/precachePlugins.js");require("./_version.js");const a=e=>{const a=(0,r.getOrCreatePrecacheController)(),c=t.precachePlugins.get();e.waitUntil(a.install({event:e,plugins:c}).catch(e=>{throw e}))},c=e=>{const t=(0,r.getOrCreatePrecacheController)();e.waitUntil(t.activate())};function i(e){(0,r.getOrCreatePrecacheController)().addToCacheList(e),e.length>0&&(self.addEventListener("install",a),self.addEventListener("activate",c))}
},{"workbox-core/_private/logger.js":"RSRA","./utils/getOrCreatePrecacheController.js":"mm9N","./utils/precachePlugins.js":"zllm","./_version.js":"HeBG"}],"tHTA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.precacheAndRoute=t;var e=require("./addRoute.js"),r=require("./precache.js");function t(t,u){(0,r.precache)(t),(0,e.addRoute)(u)}require("./_version.js");
},{"./addRoute.js":"uIo1","./precache.js":"Rk7d","./_version.js":"HeBG"}],"fjVa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"addPlugins",{enumerable:!0,get:function(){return e.addPlugins}}),Object.defineProperty(exports,"addRoute",{enumerable:!0,get:function(){return r.addRoute}}),Object.defineProperty(exports,"cleanupOutdatedCaches",{enumerable:!0,get:function(){return t.cleanupOutdatedCaches}}),Object.defineProperty(exports,"createHandler",{enumerable:!0,get:function(){return n.createHandler}}),Object.defineProperty(exports,"createHandlerBoundToURL",{enumerable:!0,get:function(){return c.createHandlerBoundToURL}}),Object.defineProperty(exports,"getCacheKeyForURL",{enumerable:!0,get:function(){return u.getCacheKeyForURL}}),Object.defineProperty(exports,"matchPrecache",{enumerable:!0,get:function(){return a.matchPrecache}}),Object.defineProperty(exports,"precache",{enumerable:!0,get:function(){return o.precache}}),Object.defineProperty(exports,"precacheAndRoute",{enumerable:!0,get:function(){return d.precacheAndRoute}}),Object.defineProperty(exports,"PrecacheController",{enumerable:!0,get:function(){return i.PrecacheController}});var e=require("./addPlugins.js"),r=require("./addRoute.js"),t=require("./cleanupOutdatedCaches.js"),n=require("./createHandler.js"),c=require("./createHandlerBoundToURL.js"),u=require("./getCacheKeyForURL.js"),a=require("./matchPrecache.js"),o=require("./precache.js"),d=require("./precacheAndRoute.js"),i=require("./PrecacheController.js");require("./_version.js");
},{"./addPlugins.js":"kOI2","./addRoute.js":"uIo1","./cleanupOutdatedCaches.js":"LJA9","./createHandler.js":"Hrmt","./createHandlerBoundToURL.js":"GeqV","./getCacheKeyForURL.js":"UQPn","./matchPrecache.js":"lhsf","./precache.js":"Rk7d","./precacheAndRoute.js":"tHTA","./PrecacheController.js":"dYej","./_version.js":"HeBG"}],"wwRz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./index.js");Object.keys(e).forEach(function(r){"default"!==r&&"__esModule"!==r&&(r in exports&&exports[r]===e[r]||Object.defineProperty(exports,r,{enumerable:!0,get:function(){return e[r]}}))});
},{"./index.js":"fjVa"}],"AaGI":[function(require,module,exports) {
"use strict";var e=require("workbox-precaching");(0,e.precacheAndRoute)([{"revision":"d872f920bbcf62ebdd67c574cbee68c5","url":"app.e95ae974.js"},{"revision":"9fb71b46649af8fce3bb342d7b838d31","url":"app.e95ae974.js.map"},{"revision":"c807a56d6fceb94419a0c8a53e8eea64","url":"apple-touch-icon.0c805971.png"},{"revision":"56b8fb42d0ea8f5a96b5a3ff64287c96","url":"browserconfig.xml"},{"revision":"3a1ab0ea77a504d7b05cff0c244bfebe","url":"favicon-16x16.1e0ce9cd.png"},{"revision":"934c689e02daa37844f0d2069b90be68","url":"favicon-32x32.b04d12c9.png"},{"revision":"44ac3620ebe32488f6214d318c556235","url":"icon-192x192.60ea7110.png"},{"revision":"7702d32395687095cdbb76585a57669f","url":"icon-192x192.ac4836c1.webp"},{"revision":"48543ad828242ecd2335e5b800de5360","url":"icon-512x512.15055ef8.png"},{"revision":"38bc493184aaf5e68a39b3a7cf39e906","url":"icon-512x512.866a5434.webp"},{"revision":"a53e228ee698c0219fae4cd279b5c4d8","url":"index.html"},{"revision":"536db58b4aa13ee657b1a33d81bb17c1","url":"manifest.webmanifest"},{"revision":"6ab651e409245f16ccd127e29d8bfc71","url":"mstile-150x150.a8f9e43e.png"},{"revision":"958689d88f8f5172ad7d2f63adf65ffa","url":"mstile-310x150.86a23b3f.png"},{"revision":"6e8482d125e68baa33fb4792ff3cdc6d","url":"mstile-310x310.5293c5ea.png"},{"revision":"43f2ddd1db96dd84fe170589ec0439df","url":"mstile-70x70.9e6eb38f.png"},{"revision":"7b81bc7983554116a1536852b8870889","url":"service-worker.js.map"},{"revision":"961625340eaa9d0d3fd8ec20f638843e","url":"style.8818f4da.css"},{"revision":"435e0faf25282cf5899fec0150201d87","url":"style.8818f4da.css.map"}]);
},{"workbox-precaching":"wwRz"}]},{},["AaGI"], null)
//# sourceMappingURL=service-worker.js.map
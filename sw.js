"use strict";var precacheConfig=[["/2022/10/30/Test/index.html","15c01629c64f880357f9719ccb504a2c"],["/2022/10/30/hello-world/index.html","e48e7e16769a0d8aecc49ac03217c39e"],["/2022/12/16/Life/index.html","6229c56cbb73704134ef706aa116b12d"],["/2023/04/02/Demo-1/index.html","3dc57f5d883f5f1359eca976c589471f"],["/2023/04/18/Demo-2/index.html","95ffc14cb541818fffecda70ae7f22d6"],["/404.html","b449c68acdfd3e03b31b39052e3a2c9a"],["/about/index-1.html","1c194e751654a8b428728def898e2e5c"],["/about/index.html","44b8259c50d3282329e7ed8017581406"],["/archives/2022/10/index.html","2b8a501d9ed687bec362b71e30d55093"],["/archives/2022/12/index.html","569a77f34636a75682a6895765159116"],["/archives/2022/index.html","321c0096f7a79c43c962db2c9174747f"],["/archives/2023/04/index.html","63bd69abd8f33ed01d7ec39114e1cd13"],["/archives/2023/index.html","8dce8704dbd30e7e90491b6c0d25d0a0"],["/archives/index.html","0b02f543900a4364900886ccdd782138"],["/categories/Maybe-study/index.html","f4749d8e4d301cd41787e668bb3e79bc"],["/categories/index.html","3cb0645eb81660ac543dc492799dc745"],["/comments/index.html","65b5cbf6ac93f9d3d22c56a0a3a46860"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","73e8f7b99427147312f22585a794df15"],["/css/personal/custom.css","8a1f051036db45d05f25e59dd5bfacd0"],["/css/personal/picture.css","3d57ebf5aeed343a247a82c156d0fd18"],["/css/personal/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/avator.jpg","d3c230704a7b42443f4c79473e51c23c"],["/image/banner.jpg","42a3131ea52cd7e1b75da19e4c094f31"],["/image/banner_1.jpg","6c6edbbabf7d3bbc2cf8693af16b6c07"],["/image/browser_tab.jpg","399b493b717418e4c158f36deb0d3849"],["/image/default_cover.jpg","72601a53b17ca7144b4f4b83233fd28c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","233c204bb9e0afb0f724ed5d688cbd87"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/personal/runtime.js","ee85158b3ade8e51635f055c0f3b052d"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","628370810614cad9b9f97564b9c9198e"],["/movies/index.html","aecb987b1f7289b41d4fa56e64123d1a"],["/music/index.html","7d429286bb77ea57ac92bc1dc69c0d32"],["/sw-register.js","85e4a3f89d43906835f6e0f8d648fe9f"],["/tags/index.html","8ebf9ff946c3eaa30b50bc1586b9fe92"],["/tags/作为日记加密/index.html","ae91fed6d8748da52f5940cfb756412a"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some((function(e){return t.match(e)}))},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return a.every((function(a){return!a.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),t.toString()},hashParamName=(addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,!1);return[c.toString(),n]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then((function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then((function(a){return e.put(t,a)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(t){return Promise.all(t.map((function(t){if(!a.has(t.url))return e.delete(t)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";!(a=urlsToCacheKeys.has(t))&&c&&(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(t)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)})))}}));
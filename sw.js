"use strict";var precacheConfig=[["/2022/10/30/Test/index.html","95ac02f73f28a8ca4e37d4af1f0c914f"],["/2022/10/30/hello-world/index.html","9a71bce5f7ec1a16551a32fcc1b56730"],["/2022/12/16/Life/index.html","d95ffeda05e7949f70a247414c017e99"],["/2023/04/02/Demo-1/index.html","ed887122a35d466a7303dbd23c2dd140"],["/2023/04/18/Demo-2/index.html","6b5f8430c4d9713ec2cc5efcda56d93c"],["/404.html","006624ad048fef0b3d01ed6c19189fce"],["/about/index-1.html","9e6bb53f33082566cbd2d69fadfe23f1"],["/about/index.html","838edea279258b93be6da176b40e725c"],["/archives/2022/10/index.html","da0514d2e07b726531e8c2eb9ed56a6d"],["/archives/2022/12/index.html","1c26032e8beaca70d85d87e5db687af6"],["/archives/2022/index.html","1ff58a98023ef4261f68dbd41cd5bdd9"],["/archives/2023/04/index.html","b91d2be988c9274f3d8753a1aba960d8"],["/archives/2023/index.html","d927d7f93a65df8c72d8e90e82a8f044"],["/archives/index.html","a38847a9b742be0f7c2206a5644c3c87"],["/categories/Maybe-study/index.html","6ea6c0fa8312c2a4dd84ccb1b53ea71d"],["/categories/index.html","2532065a61011aeeb345b9f5adbb0a0c"],["/comments/index.html","dedd61bd4d56953c00d186127056156d"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","852471fa7da19a01ab9499f7cd9129c0"],["/css/personal/custom.css","8a1f051036db45d05f25e59dd5bfacd0"],["/css/personal/picture.css","3d57ebf5aeed343a247a82c156d0fd18"],["/css/personal/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/avator.jpg","d3c230704a7b42443f4c79473e51c23c"],["/image/banner.jpg","42a3131ea52cd7e1b75da19e4c094f31"],["/image/banner_1.jpg","6c6edbbabf7d3bbc2cf8693af16b6c07"],["/image/browser_tab.jpg","399b493b717418e4c158f36deb0d3849"],["/image/default_cover.jpg","72601a53b17ca7144b4f4b83233fd28c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","76405552ab68dc60eb21446bd5e9c22f"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/personal/runtime.js","ee85158b3ade8e51635f055c0f3b052d"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","4e40a83c1ff2d2494271cb505aefb78c"],["/movies/index.html","1761426c342ef28becc0fbab0be616b6"],["/music/index.html","15bbf4915c93af43601c527fa29990d9"],["/sw-register.js","ca5bbe96a1c31e151c80459d98df4b04"],["/tags/index.html","b5b735c8bf20ddb86806e5726fad1b21"],["/tags/作为日记加密/index.html","28e0b88e70b07a9489b4027347bc8ca9"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some((function(e){return t.match(e)}))},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return a.every((function(a){return!a.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),t.toString()},hashParamName=(addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,!1);return[n.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then((function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then((function(a){return e.put(t,a)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(t){return Promise.all(t.map((function(t){if(!a.has(t.url))return e.delete(t)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";!(a=urlsToCacheKeys.has(t))&&n&&(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(t)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)})))}}));
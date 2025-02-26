/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/30/Test/index.html","4a623d65c93b4a37f0aefab062ae4d9e"],["/2022/10/30/hello-world/index.html","0fe647dde74a53df0838442ca87d47ff"],["/2022/12/16/Life/index.html","fe6809efe2b2fe5d28e156dfa3beb3fa"],["/2023/04/02/Demo-1/index.html","51b15a62a88c8977135955f0999b027e"],["/2023/04/18/Demo-2/index.html","e86898bd6ca78861dea2af63ed3ad81e"],["/2023/08/22/23电赛B题/index.html","2e4b105ffb864efe3af16fef9df52726"],["/2023/12/25/毕设/index.html","a0116314344f61dfd8234b9bd8cf7ec5"],["/2023/12/28/毕设遇到的问题/index.html","c2ca4afb7a9588c7d6f88d971bdcd3ef"],["/2023/12/29/拉扎维学习记录/index.html","69adeee0503e9971e97ae9bc766c6a33"],["/404.html","b9260bb95d8ce765762d5dbfe92afca5"],["/about/index-1.html","bfcc94c7d638c6ea0a996c39bf2d5747"],["/about/index.html","009dfb5b54c4c76ce3b20978a85e32ea"],["/archives/2022/10/index.html","15072d2a76425f3393b8abd676e85036"],["/archives/2022/12/index.html","a4fc61b4f6b784d51e3e7021cb1edbf7"],["/archives/2022/index.html","0665deab74986b1d36ffe8b64bb9ec51"],["/archives/2023/04/index.html","6d3fb9327ead06fff5897cd733529209"],["/archives/2023/08/index.html","158ebd45f00399f2744f87b9e9ed3d75"],["/archives/2023/12/index.html","d56e54f04908d933e5e17f790deebb68"],["/archives/2023/index.html","60175b88e81b18545d0cea2f43bceb70"],["/archives/index.html","95b375bd2fa961b3f18880b1f3264967"],["/categories/Maybe-study/index.html","6684dbd7e351f325bbad3c17dc1e10e6"],["/categories/index.html","59c01f265126738f0793dcc6f6e27230"],["/comments/index.html","cea0ab576612040df449d6753fc787f9"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","852471fa7da19a01ab9499f7cd9129c0"],["/css/personal/custom.css","8a1f051036db45d05f25e59dd5bfacd0"],["/css/personal/picture.css","3d57ebf5aeed343a247a82c156d0fd18"],["/css/personal/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/Text/razavi/1.png","87da1f9a4ea4a0f19bbbd2aac8caf7b8"],["/image/avator.jpg","d3c230704a7b42443f4c79473e51c23c"],["/image/banner.jpg","42a3131ea52cd7e1b75da19e4c094f31"],["/image/banner_1.jpg","6c6edbbabf7d3bbc2cf8693af16b6c07"],["/image/browser_tab.jpg","399b493b717418e4c158f36deb0d3849"],["/image/default_cover.jpg","72601a53b17ca7144b4f4b83233fd28c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8581b805b104aa21ee9561b47810a1cf"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/personal/runtime.js","ee85158b3ade8e51635f055c0f3b052d"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","c7214a43aaa1a167c4ab64f1f3b82201"],["/movies/index.html","a4cafedb3e07d9031bec14c71ee60b66"],["/music/index.html","40a4c658d109e680e2e65385d1b62a49"],["/page/2/index.html","684a6a74779bb33a4531d4d93abe01c5"],["/sw-register.js","03b2fff3fc0ce586efebcb2b09b2be12"],["/tags/index.html","53b90254f3f0978582cfc526225c669e"],["/tags/作为日记加密/index.html","6be13663a83b60b9cbcd1b440b59151b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

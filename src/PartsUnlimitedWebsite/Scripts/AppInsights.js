/*var appInsights = window.appInsights || function (config) {
    function s(config) {
        t[config] = function () {
            var i = arguments;
            t.queue.push(function () {
                t[config].apply(t, i)
            })
        }
    }

    var t = {
        config: config
    },
        r = document,
        f = window,
        e = "script",
        o = r.createElement(e),
        i, u;

    for (o.src = config.url || "//az416426.vo.msecnd.net/scripts/a/ai.0.js", r.getElementsByTagName(e)[0].parentNode.appendChild(o), t.cookie = r.cookie, t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace"]; i.length;) {
        s("track" + i.pop());
    }

    return config.disableExceptionTracking || (i = "onerror", s("_" + i), u = f[i], f[i] = function (config, r, f, e, o) {
        var s = u && u(config, r, f, e, o);
        return s !== !0 && t["_" + i](config, r, f, e, o), s
    }), t
}({
    instrumentationKey: ApplicationInsightsInstrumentationKey
});*/

window.appInsights = appInsights;
appInsights.trackPageView();

  var appInsights=window.appInsights||function(config){
    function i(config){t[config]=function(){var i=arguments;t.queue.push(function(){t[config].apply(t,i)})}}var t={config:config},u=document,e=window,o="script",s="AuthenticatedUserContext",h="start",c="stop",l="Track",a=l+"Event",v=l+"Page",y=u.createElement(o),r,f;y.src=config.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js";u.getElementsByTagName(o)[0].parentNode.appendChild(y);try{t.cookie=u.cookie}catch(p){}for(t.queue=[],t.version="1.0",r=["Event","Exception","Metric","PageView","Trace","Dependency"];r.length;)i("track"+r.pop());return i("set"+s),i("clear"+s),i(h+a),i(c+a),i(h+v),i(c+v),i("flush"),config.disableExceptionTracking||(r="onerror",i("_"+r),f=e[r],e[r]=function(config,i,u,e,o){var s=f&&f(config,i,u,e,o);return s!==!0&&t["_"+r](config,i,u,e,o),s}),t
    }({
        instrumentationKey:ApplicationInsightsInstrumentationKey
    });
       
    window.appInsights=appInsights;
    appInsights.trackPageView();

/*
Source:
https://static.bbc.co.uk/news/1.319.13664/js/compiled/us2016.js
*/
/**
*  Ajax Autocomplete for jQuery, version 1.2.24
*  (c) 2014 Tomas Kirda
*
*  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
*/

/**
     * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
     *
     * @codingstandard ftlabs-jsv2
     * @copyright The Financial Times Limited [All Rights Reserved]
     * @license MIT License (see LICENSE.txt)
     */

// (c) old desktop browsers that do support true hovering

define("module/components/politics/animationFeatureDetect", ["module/bootstrap", "module/featureDetector"], function(e, t) {
    var n = e.$;
    return {
        init: function() {
            var e = t.can("CssTransform");
            t.can("CssTransition") ? n("html").addClass("csstransitions") : n("html").addClass("no-csstransitions"),
            e ? n("html").addClass("csstransforms") : n("html").addClass("no-csstransforms")
        }
    }
}),
define("module/components/politics/animationFeatureDetectAdapter", ["module/components/politics/animationFeatureDetect"], function(e) {
    e.init()
}),
define("module/components/politics/politicsTabs", ["module/bootstrap", "module/tabbed/tabbed"], function(e, t) {
    return {
        handleSuccess: function(n) {
            var i = ".politics-tabs__tab"
              , r = ".politics-tabs-section"
              , c = "politics-tabs";
            void 0 !== n.id && (c = n.id),
            void 0 !== n.selector && (i = n.selector + " " + i,
            r = n.selector + " " + r);
            new t(e.$(i),e.$(r),!0,c)
        }
    }
}),
define("module/components/politics/ticker/control", ["module/bootstrap"], function(e) {
    function t(e) {
        var t = "." + e;
        return {
            paginationCurrent: t + "__pagination-current",
            paginationTotal: t + "__pagination-total",
            isPlaying: t + "__icon-pause"
        }
    }
    function n(e) {
        return {
            controls: e,
            controlsEnabled: e + "--enabled",
            button: e + "__button",
            buttonInner: e + "__button-inner",
            pauseButton: e + "__button--pause",
            previousButton: e + "__button--previous",
            nextButton: e + "__button--next",
            pagination: e + "__pagination",
            paginationCurrent: e + "__pagination-current",
            paginationTotal: e + "__pagination-total",
            playIcon: e + "__icon-play",
            playPath: e + "__path-play",
            pauseIcon: e + "__icon-pause",
            pausePath: e + "__path-pause"
        }
    }
    function i(e, t, n) {
        var i = f('<button class="' + e + '">' + t + "</button>");
        return n && i.on("click", n),
        i
    }
    function r(e, t, n) {
        var r = n ? u.pauseIcon : u.playIcon;
        return i(u.button + " " + u.pauseButton, '<div class="' + u.buttonInner + '">               <svg class="svg-icon ' + r + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">                 <path class="' + u.pausePath + '" fill="currentColor" d="M3 0h9v32H3zm17 0h9v32h-9z"/>                 <path class="' + u.playPath + '" fill="currentColor" d="M3 32l26-16L3 0z"/>               </svg>             </div>', function() {
            f(h).find(y.selectors.isPlaying).length > 0 ? (l(),
            e()) : (s(),
            t())
        })
    }
    function c(e) {
        return i(u.button + " " + u.previousButton, '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">                <path fill="currentColor" d="M3 16l26 16v-7.2L14.4 16 29 7.2V0"/>            </svg>', e)
    }
    function a(e) {
        return i(u.button + " " + u.nextButton, '<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">                <path fill="currentColor" d="M29 16L3 0v7.2L17.6 16 3 24.8V32"/>            </svg>', e)
    }
    function o(e, t) {
        return f('<div class="' + u.pagination + '">            <span class="' + u.paginationCurrent + '">' + e + '</span>/<span class="' + u.paginationTotal + '">' + t + "</span>        </div>")
    }
    function s() {
        h.find(".svg-icon").attr("class", "svg-icon " + u.pauseIcon)
    }
    function l() {
        h.find(".svg-icon").attr("class", "svg-icon " + u.playIcon)
    }
    var u, d, h, p, f = e.$, y = {
        initialPage: 1,
        bemPrefix: "election-ticker-controls",
        playOnStart: !0
    };
    return {
        init: function(e) {
            var i = e && e.bemPrefix ? e.bemPrefix : y.bemPrefix;
            y.selectors = t(i),
            y.cssClasses = n(i),
            e && f.extend(!0, y, e),
            u = y.cssClasses
        },
        createControls: function(e, t, n, i, s, l) {
            return l = void 0 !== l ? l : y.playOnStart,
            h = r(t, e, l),
            p = o(y.initialPage, s),
            d = f("<div></div>").addClass(u.controls).attr("aria-hidden", "true").append(h).append(c(i)).append(p).append(a(n))
        },
        displayControls: function(e) {
            e ? d.addClass(u.controlsEnabled) : d.removeClass(u.controlsEnabled)
        },
        setCurrentPage: function(e) {
            p.find(y.selectors.paginationCurrent).text(e)
        },
        setTotalPages: function(e) {
            p.find(y.selectors.paginationTotal).text(e)
        }
    }
}),
define("module/components/politics/ticker/defaultAnimator", ["module/bootstrap"], function(e) {
    function t(e) {
        return {
            currentItem: e + "--current",
            outgoingItem: e + "--outgoing",
            suppressAnim: e + "--suppress-anim"
        }
    }
    function n(e, t) {
        e.removeClass(a.currentItem),
        o.removeClass(a.outgoingItem),
        o = e,
        o.addClass(a.outgoingItem),
        t.addClass(a.currentItem)
    }
    function i() {
        s && clearInterval(s),
        s = setInterval(d.onAutoplay, d.duration)
    }
    function r() {
        clearInterval(s),
        s = null
    }
    function c(e, t) {
        o.removeClass(a.suppressAnim),
        e.add(t).addClass(a.suppressAnim),
        n(e, t),
        l && i()
    }
    var a, o, s, l, u = e.$, d = {
        bemPrefix: "results-ticker__item",
        duration: 7e3,
        playingOnStart: !0
    };
    return {
        init: function(e, n) {
            d.bemPrefix = n.bemPrefix ? n.bemPrefix : d.bemPrefix,
            d.cssClasses = t(d.bemPrefix),
            n && u.extend(!0, d, n),
            a = d.cssClasses,
            l = d.playingOnStart,
            d.initialDelay ? setTimeout(u.proxy(this.listUpdated, this, e), d.initialDelay) : this.listUpdated(e)
        },
        play: function() {
            l = !0,
            i()
        },
        pause: function() {
            l = !1,
            r()
        },
        next: function(e, t) {
            c(e, t)
        },
        prev: function(e, t) {
            c(e, t)
        },
        autoplay: function(e, t) {
            l = !0,
            e.add(o).removeClass(a.suppressAnim),
            n(e, t)
        },
        listUpdated: function(e, t) {
            e.addClass(a.currentItem),
            o = e,
            (l = t || l) && i()
        }
    }
}),
define("module/components/politics/ticker/main", ["module/bootstrap", "module/components/politics/ticker/control", "module/components/politics/ticker/defaultAnimator"], function(e, t, n) {
    function i(e) {
        var t = "." + e;
        return {
            tickerContainer: t + "-container",
            ticker: t,
            item: t + "__item"
        }
    }
    function r() {
        C = 0,
        M = w.find(P.item),
        S = M.first()
    }
    function c(e, n) {
        var i = t.createControls(k.proxy(p, this), k.proxy(f, this), k.proxy(g, this), k.proxy(_, this), e, n);
        w.append(i),
        a()
    }
    function a() {
        t.displayControls(M.length > 1)
    }
    function o(e, n) {
        x && (u(),
        e = 0);
        var i = M.eq(e);
        n(i),
        S = i,
        t.setCurrentPage(e + 1)
    }
    function s() {
        return C = ++C % M.length
    }
    function l() {
        return C = --C < 0 ? M.length - 1 : C
    }
    function u() {
        w.remove(),
        v.append(x),
        w = v.find(P.ticker),
        r(),
        n.listUpdated(S, M.length > 1),
        m() ? (n.pause(),
        c(M.length, !1)) : c(M.length),
        x = null
    }
    function d(e, a) {
        k.extend(T, a),
        T.selectors = i(T.bemPrefix),
        k.extend(!0, T, a),
        P = T.selectors,
        v = k(e.selector).find(P.tickerContainer),
        b = v.html(),
        w = v.find(P.ticker),
        m() && (T.autoplay = !1),
        T.controls.playOnStart = T.autoplay,
        t.init(T.controls),
        r(),
        T.animator.onAutoplay = k.proxy(y, this),
        T.animator.playingOnStart = T.autoplay && M.length > 1,
        n.init(S, T.animator),
        c(M.length);
        var o = e.opts.id.split("/").pop();
        E.on("election-polling:" + o, k.proxy(h, this))
    }
    function h(e) {
        var t = k(e)
          , n = t.find(P.ticker);
        n.length > 0 ? b !== t.html() && (b = t.html(),
        x = n,
        0 !== w.length && 1 !== M.length || u()) : T.removeTickerOnNoData && (w.remove(),
        w = k())
    }
    function p() {
        n.play(),
        E.emit("ticker:play:" + T.bemPrefix)
    }
    function f() {
        n.pause(),
        E.emit("ticker:pause:" + T.bemPrefix)
    }
    function y() {
        o(s(), function(e) {
            M.length > 1 && n.autoplay(S, e)
        })
    }
    function m() {
        return !1 === w.data("autoplay")
    }
    function g() {
        E.emit("ticker:next:" + T.bemPrefix),
        o(s(), function(e) {
            n.next(S, e)
        })
    }
    function _() {
        E.emit("ticker:previous:" + T.bemPrefix),
        o(l(), function(e) {
            n.prev(S, e)
        })
    }
    var x, v, b, w, M, S, C, P, k = e.$, E = e.pubsub, T = {
        bemPrefix: "results-ticker",
        autoplay: !0,
        removeTickerOnNoData: !0,
        animator: {},
        controls: {}
    };
    return {
        init: k.proxy(d, this),
        play: k.proxy(p, this),
        pause: k.proxy(f, this),
        autoPlay: k.proxy(y, this),
        nextItem: k.proxy(g, this),
        previousItem: k.proxy(_, this)
    }
}),
define("module/components/politics/polling/publisher", ["module/bootstrap"], function(e) {
    var t = e.$
      , n = t("#page");
    return {
        pageHidden: !1,
        previousPageVisibility: !0,
        init: function(e) {
            require.specified("data_components/polling_policy") && (this.registerPollingPolicy(),
            this.registerVisibilityProp(document))
        },
        registerPollingPolicy: function() {
            require(["data_components/polling_policy"], t.proxy(function(e) {
                this.dataLoaded(e)
            }, this))
        },
        registerVisibilityProp: function(e) {
            "hidden"in e ? this.pageHidden = "hidden" : "webkitHidden"in e && (this.pageHidden = "webkitHidden")
        },
        isPageHidden: function(e) {
            return this.pageHidden ? e[this.pageHidden] : this.pageHidden
        },
        dataLoaded: function(e) {
            this.validatePollingPolicy(e) && (this.registerPollingComponents(),
            0 !== Object.keys(this.components).length && (n.addClass("politics--polling"),
            this.handlePollingPolicy(e)))
        },
        handlePollingPolicy: function(e) {
            this.pollingPolicy = e,
            this.setPollingTimeout(e),
            this.startPolling()
        },
        setPollingTimeout: function(e) {
            this.pollingTimeout = parseInt(e.pollingTimeout, 10) || 3e3
        },
        validatePollingPolicy: function(e) {
            return !!(e && "pollingEnabled"in e && e.pollingEnabled && "pollingPeriodMilliseconds"in e && "pollingEndpoint"in e)
        },
        registerPollingComponents: function() {
            var e = {};
            t('div[data-polling-enabled="true"], script[data-polling-enabled="true"]').each(function() {
                var t = this.getAttribute("data-polling-component") || this.getAttribute("id")
                  , n = this.getAttribute("data-sequence-id");
                t && n && (e[t] = {
                    component: this,
                    sequenceId: n
                })
            }),
            this.components = e
        },
        startPolling: function() {
            setTimeout(t.proxy(this.handlePolling, this), this.getUniquePollingPeriodMilliseconds())
        },
        handlePolling: function() {
            var e = !this.isPageHidden(document)
              , t = Boolean(this.previousPageVisibility === e);
            e ? this.makeRequest(t) : this.startPolling(),
            this.previousPageVisibility = e
        },
        getDataUrl: function() {
            var e = "";
            for (var t in this.components)
                this.components.hasOwnProperty(t) && ("" !== e && (e += "&"),
                e += "components[" + t + "][component]=" + t);
            return encodeURI(e)
        },
        makeRequest: function(e) {
            t.ajax({
                url: this.pollingPolicy.pollingEndpoint,
                method: "GET",
                timeout: this.pollingTimeout,
                data: this.getDataUrl(),
                dataType: "json",
                crossDomain: !0,
                ifModified: e,
                success: t.proxy(function(e, t, n) {
                    this.handleResponseSuccess(e, t, n)
                }, this),
                error: t.proxy(function(e, t, n) {
                    this.handleResponseError(e, t, n)
                }, this)
            })
        },
        handleResponseSuccess: function(t, i, r) {
            if (r && 304 === r.status)
                return void this.startPolling();
            for (var c = t.components || {}, a = {}, o = 0; o < c.length; o++) {
                var s = c[o];
                if (200 === s.status) {
                    if ("polling_policy" === s.component) {
                        a = JSON.parse(s.body);
                        continue
                    }
                    s.sequence_id > this.components[s.component].sequenceId && (this.components[s.component].sequenceId = s.sequence_id,
                    "application/json" === s.content_type && (s.body = JSON.parse(s.body)),
                    e.pubsub.emit("election-polling:" + s.component, [s.body]))
                }
            }
            this.validatePollingPolicy(a) ? this.handlePollingPolicy(a) : n.removeClass("politics--polling")
        },
        handleResponseError: function(e, t, i) {
            n.removeClass("politics--polling")
        },
        getUniquePollingPeriodMilliseconds: function() {
            return this.pollingPolicy.pollingPeriodMilliseconds + this.getRandomNumber()
        },
        getRandomNumber: function() {
            return Math.floor(9001 * Math.random()) + 1e3
        }
    }
}),
define("module/components/politics/polling/subscriber-es6", ["exports", "module/bootstrap", "module/featureDetector"], function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function c() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return p.init.apply(p, t)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.init = c;
    var a = i(t)
      , o = i(n)
      , s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , l = a.default.$
      , u = a.default.pubsub
      , d = ["ms", "Webkit", ""]
      , h = {}
      , p = {
        init: function(e, t) {
            if (e && e.id) {
                var n = p.getEventId(e.id, e.opts);
                p.registerComponent(e.id, n, t)
            }
        },
        getEventId: function(e) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).polling_component || e
        },
        registerComponent: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            p.addComponent(e),
            p.setupAnimation(e, n.animationClass, n.animationCallback),
            u.on("election-polling:" + t, function(t) {
                return p.updateComponent(t, e, n)
            })
        },
        addComponent: function(e) {
            if (h[e])
                return !1;
            var t = l("#" + e)
              , n = t.find('*[data-update="data"]')
              , i = t.find('div[data-update="html"]:first')
              , r = t.find('*[data-update="attr"]')
              , c = t.find('*[data-update="class"]');
            return h[e] = {
                content: t,
                dataElements: n,
                htmlElement: i,
                attrElements: r,
                classElements: c
            },
            h[e]
        },
        updateComponent: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , i = h[t];
            i.dataElements.length > 0 && p.updateDataElements(e, t),
            i.htmlElement.length > 0 && p.updateHtml(e, t),
            i.attrElements.length > 0 && p.updateAttr(e, t),
            i.classElements.length > 0 && p.updateClass(e, t),
            p.updateCustom(e, n.callback)
        },
        updateDataElements: function(e, t) {
            var n = h[t].dataElements;
            p.updateWithAnimation(n, e, p.dataAnimationCallback)
        },
        updateHtml: function(e, t) {
            p.updateWithAnimation(h[t].htmlElement, e, p.htmlAnimationCallback)
        },
        updateAttr: function(e, t) {
            h[t].attrElements.each(function() {
                var t = l(this)
                  , n = t.data("attr")
                  , i = e[t.data("name")];
                t.css(n, i)
            })
        },
        updateClass: function(e, t) {
            h[t].classElements.each(function() {
                var t = l(this)
                  , n = e[t.data("name")];
                for (var i in n)
                    n[i] ? t.addClass(i) : t.removeClass(i)
            })
        },
        updateWithAnimation: function(e, t, n) {
            "object" === (void 0 === t ? "undefined" : s(t)) ? e.each(function() {
                var e = l(this)
                  , i = t[e.data("name")];
                void 0 !== i && e.html() !== i.toString() && p.updateData(e, i, n)
            }) : p.updateData(e, t, n)
        },
        updateData: function(e, t, n) {
            if (!o.default.can("CssTransition"))
                return void n(e, t);
            e.addClass("politics-data-update"),
            e.css({
                opacity: 0
            }),
            setTimeout(n.bind(p, e, t), 1500)
        },
        dataAnimationCallback: function(e, t) {
            e.html(t),
            e.css({
                opacity: 1
            })
        },
        htmlAnimationCallback: function(e, t) {
            var n = l(t).find('div[data-update="html"]:first');
            n.length > 0 && e.html(n.html()),
            e.css({
                opacity: 1
            })
        },
        updateCustom: function(e, t) {
            "function" == typeof t && t(e)
        },
        setupAnimation: function(e, t, n) {
            var i = h[e].attrElements;
            i.length < 1 || i.each(function() {
                var e = l(this);
                o.default.can("CssTransition") ? (e.on("msAnimationEnd webkitAnimationEnd animationend", function() {
                    return p.animationEndEvent(e, t)
                }),
                e.on("msTransitionEnd webkitTransitionEnd transitionEnd", function() {
                    return n()
                })) : (p.animationEndEvent(e, t || ""),
                n())
            })
        },
        animationEndEvent: function(e, t) {
            e.addClass(t),
            e.css({
                opacity: 1
            }),
            p.setPrefixCss(e, "AnimationName", "none")
        },
        setPrefixCss: function(e, t, n) {
            return d.map(function(i) {
                return e.css(r({}, i + t, n))
            })
        }
    };
    e.default = p
}),
define("module/components/us2016/banner-es6", ["exports", "module/bootstrap", "module/components/politics/polling/subscriber-es6", "module/featureDetector"], function(e, t, n, i) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function c() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return h.init.apply(h, t)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.init = c;
    var a = r(t)
      , o = r(n)
      , s = r(i)
      , l = a.default.$
      , u = a.default.pubsub
      , d = "us2016-banner__result-seats--inside"
      , h = {
        labelsUnder: !1,
        init: function(e) {
            h.positionLabels(),
            s.default.can("CssTransition") && l(".us2016-banner__result-bar-animation").on("msAnimationEnd webkitAnimationEnd animationend", function() {
                return h.positionLabels()
            }),
            u.on("global:resize", function() {
                return h.positionLabels()
            }),
            o.default.init(e, {
                animationClass: "politics-bar-update",
                animationCallback: h.positionLabels
            })
        },
        positionLabels: function() {
            var e = l(".us2016-banner")
              , t = l(".us2016-banner__result").width()
              , n = l(".us2016-banner__result-over .us2016-banner__result-seats")
              , i = l(".us2016-banner__result-under");
            h.labelsUnder = !1,
            h.positionLabel(".us2016-banner__result-over .us2016-banner__result-seats--dem", ".us2016-banner__result-bar--dem", ".us2016-banner__result-bar--gop", t),
            h.positionLabel(".us2016-banner__result-over .us2016-banner__result-seats--gop", ".us2016-banner__result-bar--gop", ".us2016-banner__result-bar--dem", t),
            h.labelsUnder ? (n.hide(),
            i.show(),
            e.addClass("us2016-banner--result-under")) : (n.show(),
            i.hide(),
            e.removeClass("us2016-banner--result-under"))
        },
        positionLabel: function(e, t, n, i) {
            var r = l(e)
              , c = r.outerWidth()
              , a = l(t).width()
              , o = l(n).width()
              , s = (i - 1) / 2
              , u = Math.min(s - a, i - o - a);
            a >= c ? r.removeClass("us2016-banner__result-seats--outside").addClass(d) : c > u ? h.labelsUnder = !0 : r.removeClass(d).addClass("us2016-banner__result-seats--outside")
        }
    };
    e.default = h
}),
define("module/components/us2016/data/house-es6", ["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.default = '<div class="us2016-congress-svg"><svg viewBox="0 0 300 156" preserveAspectRatio="xMidYMin slice" style="width: 100%; padding-bottom: 52%; height: 1px; overflow: visible"><g transform="matrix(1.02073,-2.41773e-20,2.41769e-20,-1.01374,-0.0103632,156.007)"><circle cx="60.6" cy="3" r="2.5" /><circle cx="54.2" cy="3" r="2.5" /><circle cx="47.8" cy="3" r="2.5" /><circle cx="41.4" cy="3" r="2.5" /><circle cx="35" cy="3" r="2.5" /><circle cx="28.5" cy="3" r="2.5" /><circle cx="22.1" cy="3" r="2.5" /><circle cx="15.8" cy="3" r="2.5" /><circle cx="9.4" cy="3" r="2.5" /><circle cx="3" cy="3" r="2.5" /><circle cx="67.2" cy="9.4" r="2.5" /><circle cx="60.8" cy="9.9" r="2.5" /><circle cx="54.5" cy="10.4" r="2.5" /><circle cx="48.1" cy="10.9" r="2.5" /><circle cx="41.7" cy="11.4" r="2.5" /><circle cx="35.3" cy="12" r="2.5" /><circle cx="28.9" cy="12.5" r="2.5" /><circle cx="22.6" cy="13" r="2.5" /><circle cx="16.2" cy="13.5" r="2.5" /><circle cx="9.8" cy="14" r="2.5" /><circle cx="3.4" cy="14.5" r="2.5" /><circle cx="68" cy="15.8" r="2.5" /><circle cx="61.7" cy="16.8" r="2.5" /><circle cx="55.4" cy="17.8" r="2.5" /><circle cx="49" cy="18.9" r="2.5" /><circle cx="42.7" cy="19.9" r="2.5" /><circle cx="36.4" cy="20.9" r="2.5" /><circle cx="30.1" cy="21.9" r="2.5" /><circle cx="23.8" cy="23" r="2.5" /><circle cx="17.4" cy="24" r="2.5" /><circle cx="11.1" cy="25" r="2.5" /><circle cx="4.8" cy="26" r="2.5" /><circle cx="69.3" cy="22.1" r="2.5" /><circle cx="63.1" cy="23.6" r="2.5" /><circle cx="56.8" cy="25.2" r="2.5" /><circle cx="50.6" cy="26.7" r="2.5" /><circle cx="44.4" cy="28.2" r="2.5" /><circle cx="38.2" cy="29.8" r="2.5" /><circle cx="32" cy="31.3" r="2.5" /><circle cx="25.8" cy="32.8" r="2.5" /><circle cx="19.6" cy="34.3" r="2.5" /><circle cx="13.3" cy="35.9" r="2.5" /><circle cx="7.1" cy="37.4" r="2.5" /><circle cx="71.1" cy="28.3" r="2.5" /><circle cx="65" cy="30.3" r="2.5" /><circle cx="58.9" cy="32.3" r="2.5" /><circle cx="52.9" cy="34.4" r="2.5" /><circle cx="46.8" cy="36.4" r="2.5" /><circle cx="40.7" cy="38.4" r="2.5" /><circle cx="34.6" cy="40.4" r="2.5" /><circle cx="28.6" cy="42.5" r="2.5" /><circle cx="22.5" cy="44.5" r="2.5" /><circle cx="16.4" cy="46.5" r="2.5" /><circle cx="10.4" cy="48.6" r="2.5" /><circle cx="73.4" cy="34.3" r="2.5" /><circle cx="67.5" cy="36.8" r="2.5" /><circle cx="61.6" cy="39.3" r="2.5" /><circle cx="55.7" cy="41.8" r="2.5" /><circle cx="49.8" cy="44.3" r="2.5" /><circle cx="43.9" cy="46.9" r="2.5" /><circle cx="38" cy="49.4" r="2.5" /><circle cx="32.1" cy="51.9" r="2.5" /><circle cx="26.2" cy="54.4" r="2.5" /><circle cx="20.4" cy="56.9" r="2.5" /><circle cx="14.5" cy="59.4" r="2.5" /><circle cx="76.1" cy="40.1" r="2.5" /><circle cx="70.4" cy="43.1" r="2.5" /><circle cx="64.8" cy="46.1" r="2.5" /><circle cx="59.1" cy="49.1" r="2.5" /><circle cx="53.4" cy="52" r="2.5" /><circle cx="47.8" cy="55" r="2.5" /><circle cx="42.1" cy="58" r="2.5" /><circle cx="36.4" cy="60.9" r="2.5" /><circle cx="30.8" cy="63.9" r="2.5" /><circle cx="25.1" cy="66.9" r="2.5" /><circle cx="19.4" cy="69.9" r="2.5" /><circle cx="79.3" cy="45.7" r="2.5" /><circle cx="73.9" cy="49.1" r="2.5" /><circle cx="68.5" cy="52.5" r="2.5" /><circle cx="63.1" cy="56" r="2.5" /><circle cx="57.7" cy="59.4" r="2.5" /><circle cx="52.3" cy="62.8" r="2.5" /><circle cx="46.9" cy="66.2" r="2.5" /><circle cx="41.5" cy="69.7" r="2.5" /><circle cx="36.1" cy="73.1" r="2.5" /><circle cx="30.7" cy="76.5" r="2.5" /><circle cx="25.2" cy="79.9" r="2.5" /><circle cx="83" cy="51" r="2.5" /><circle cx="77.9" cy="54.9" r="2.5" /><circle cx="72.8" cy="58.7" r="2.5" /><circle cx="67.6" cy="62.5" r="2.5" /><circle cx="62.5" cy="66.4" r="2.5" /><circle cx="57.4" cy="70.2" r="2.5" /><circle cx="52.3" cy="74.1" r="2.5" /><circle cx="47.2" cy="77.9" r="2.5" /><circle cx="42.1" cy="81.8" r="2.5" /><circle cx="36.9" cy="85.6" r="2.5" /><circle cx="31.8" cy="89.5" r="2.5" /><circle cx="87.1" cy="56" r="2.5" /><circle cx="82.3" cy="60.2" r="2.5" /><circle cx="77.5" cy="64.5" r="2.5" /><circle cx="72.7" cy="68.7" r="2.5" /><circle cx="67.9" cy="73" r="2.5" /><circle cx="63.1" cy="77.2" r="2.5" /><circle cx="58.3" cy="81.5" r="2.5" /><circle cx="53.5" cy="85.7" r="2.5" /><circle cx="48.7" cy="90" r="2.5" /><circle cx="44" cy="94.2" r="2.5" /><circle cx="39.2" cy="98.4" r="2.5" /><circle cx="87.1" cy="65.3" r="2.5" /><circle cx="82.7" cy="69.9" r="2.5" /><circle cx="78.2" cy="74.5" r="2.5" /><circle cx="73.8" cy="79.1" r="2.5" /><circle cx="69.4" cy="83.7" r="2.5" /><circle cx="64.9" cy="88.3" r="2.5" /><circle cx="60.5" cy="93" r="2.5" /><circle cx="56.1" cy="97.6" r="2.5" /><circle cx="51.6" cy="102.2" r="2.5" /><circle cx="47.2" cy="106.8" r="2.5" /><circle cx="96.4" cy="64.9" r="2.5" /><circle cx="92.3" cy="69.9" r="2.5" /><circle cx="88.3" cy="74.8" r="2.5" /><circle cx="84.2" cy="79.8" r="2.5" /><circle cx="80.2" cy="84.7" r="2.5" /><circle cx="76.1" cy="89.7" r="2.5" /><circle cx="72.1" cy="94.7" r="2.5" /><circle cx="68" cy="99.6" r="2.5" /><circle cx="64" cy="104.6" r="2.5" /><circle cx="59.9" cy="109.5" r="2.5" /><circle cx="55.9" cy="114.5" r="2.5" /><circle cx="101.5" cy="68.8" r="2.5" /><circle cx="97.9" cy="74.1" r="2.5" /><circle cx="94.2" cy="79.3" r="2.5" /><circle cx="90.6" cy="84.6" r="2.5" /><circle cx="87" cy="89.9" r="2.5" /><circle cx="83.3" cy="95.1" r="2.5" /><circle cx="79.7" cy="100.4" r="2.5" /><circle cx="76.1" cy="105.7" r="2.5" /><circle cx="72.4" cy="110.9" r="2.5" /><circle cx="68.8" cy="116.2" r="2.5" /><circle cx="65.1" cy="121.5" r="2.5" /><circle cx="107" cy="72.2" r="2.5" /><circle cx="103.8" cy="77.8" r="2.5" /><circle cx="100.6" cy="83.3" r="2.5" /><circle cx="97.4" cy="88.9" r="2.5" /><circle cx="94.2" cy="94.4" r="2.5" /><circle cx="91" cy="99.9" r="2.5" /><circle cx="87.8" cy="105.5" r="2.5" /><circle cx="84.6" cy="111" r="2.5" /><circle cx="81.4" cy="116.6" r="2.5" /><circle cx="78.2" cy="122.1" r="2.5" /><circle cx="75" cy="127.7" r="2.5" /><circle cx="112.7" cy="75.2" r="2.5" /><circle cx="109.9" cy="81" r="2.5" /><circle cx="107.2" cy="86.8" r="2.5" /><circle cx="104.4" cy="92.6" r="2.5" /><circle cx="101.7" cy="98.4" r="2.5" /><circle cx="98.9" cy="104.1" r="2.5" /><circle cx="96.2" cy="109.9" r="2.5" /><circle cx="93.4" cy="115.7" r="2.5" /><circle cx="90.7" cy="121.5" r="2.5" /><circle cx="88" cy="127.3" r="2.5" /><circle cx="85.2" cy="133" r="2.5" /><circle cx="118.6" cy="77.8" r="2.5" /><circle cx="116.3" cy="83.7" r="2.5" /><circle cx="114" cy="89.7" r="2.5" /><circle cx="111.8" cy="95.7" r="2.5" /><circle cx="109.5" cy="101.7" r="2.5" /><circle cx="107.2" cy="107.7" r="2.5" /><circle cx="105" cy="113.7" r="2.5" /><circle cx="102.7" cy="119.6" r="2.5" /><circle cx="100.4" cy="125.6" r="2.5" /><circle cx="98.2" cy="131.6" r="2.5" /><circle cx="95.9" cy="137.6" r="2.5" /><circle cx="124.7" cy="79.8" r="2.5" /><circle cx="122.9" cy="85.9" r="2.5" /><circle cx="121.1" cy="92.1" r="2.5" /><circle cx="119.4" cy="98.2" r="2.5" /><circle cx="117.6" cy="104.4" r="2.5" /><circle cx="115.8" cy="110.5" r="2.5" /><circle cx="114" cy="116.7" r="2.5" /><circle cx="112.2" cy="122.8" r="2.5" /><circle cx="110.4" cy="129" r="2.5" /><circle cx="108.7" cy="135.1" r="2.5" /><circle cx="106.9" cy="141.3" r="2.5" /><circle cx="130.9" cy="81.3" r="2.5" /><circle cx="129.7" cy="87.6" r="2.5" /><circle cx="128.4" cy="93.9" r="2.5" /><circle cx="127.1" cy="100.1" r="2.5" /><circle cx="125.8" cy="106.4" r="2.5" /><circle cx="124.5" cy="112.7" r="2.5" /><circle cx="123.3" cy="119" r="2.5" /><circle cx="122" cy="125.2" r="2.5" /><circle cx="120.7" cy="131.5" r="2.5" /><circle cx="119.4" cy="137.8" r="2.5" /><circle cx="118.1" cy="144" r="2.5" /><circle cx="137.3" cy="82.4" r="2.5" /><circle cx="136.5" cy="88.7" r="2.5" /><circle cx="135.8" cy="95.1" r="2.5" /><circle cx="135" cy="101.4" r="2.5" /><circle cx="134.2" cy="107.8" r="2.5" /><circle cx="133.4" cy="114.1" r="2.5" /><circle cx="132.7" cy="120.5" r="2.5" /><circle cx="131.9" cy="126.8" r="2.5" /><circle cx="131.1" cy="133.2" r="2.5" /><circle cx="130.4" cy="139.5" r="2.5" /><circle cx="129.6" cy="145.9" r="2.5" /><circle cx="143.7" cy="82.9" r="2.5" /><circle cx="143.5" cy="89.3" r="2.5" /><circle cx="143.2" cy="95.7" r="2.5" /><circle cx="143" cy="102.1" r="2.5" /><circle cx="142.7" cy="108.5" r="2.5" /><circle cx="142.4" cy="114.9" r="2.5" /><circle cx="142.2" cy="121.3" r="2.5" /><circle cx="141.9" cy="127.6" r="2.5" /><circle cx="141.7" cy="134" r="2.5" /><circle cx="141.4" cy="140.4" r="2.5" /><circle cx="141.2" cy="146.8" r="2.5" /><circle cx="150.4" cy="89.3" r="2.5" /><circle cx="150.7" cy="95.7" r="2.5" /><circle cx="150.9" cy="102.1" r="2.5" /><circle cx="151.2" cy="108.5" r="2.5" /><circle cx="151.5" cy="114.9" r="2.5" /><circle cx="151.7" cy="121.3" r="2.5" /><circle cx="152" cy="127.6" r="2.5" /><circle cx="152.2" cy="134" r="2.5" /><circle cx="152.5" cy="140.4" r="2.5" /><circle cx="152.7" cy="146.8" r="2.5" /><circle cx="156.6" cy="82.4" r="2.5" /><circle cx="157.4" cy="88.7" r="2.5" /><circle cx="158.1" cy="95.1" r="2.5" /><circle cx="158.9" cy="101.4" r="2.5" /><circle cx="159.7" cy="107.8" r="2.5" /><circle cx="160.5" cy="114.1" r="2.5" /><circle cx="161.2" cy="120.5" r="2.5" /><circle cx="162" cy="126.8" r="2.5" /><circle cx="162.8" cy="133.2" r="2.5" /><circle cx="163.5" cy="139.5" r="2.5" /><circle cx="164.3" cy="145.9" r="2.5" /><circle cx="163" cy="81.3" r="2.5" /><circle cx="164.2" cy="87.6" r="2.5" /><circle cx="165.5" cy="93.9" r="2.5" /><circle cx="166.8" cy="100.1" r="2.5" /><circle cx="168.1" cy="106.4" r="2.5" /><circle cx="169.4" cy="112.7" r="2.5" /><circle cx="170.6" cy="119" r="2.5" /><circle cx="171.9" cy="125.2" r="2.5" /><circle cx="173.2" cy="131.5" r="2.5" /><circle cx="174.5" cy="137.8" r="2.5" /><circle cx="175.8" cy="144" r="2.5" /><circle cx="169.2" cy="79.8" r="2.5" /><circle cx="171" cy="85.9" r="2.5" /><circle cx="172.8" cy="92.1" r="2.5" /><circle cx="174.5" cy="98.2" r="2.5" /><circle cx="176.3" cy="104.4" r="2.5" /><circle cx="178.1" cy="110.5" r="2.5" /><circle cx="179.9" cy="116.7" r="2.5" /><circle cx="181.7" cy="122.8" r="2.5" /><circle cx="183.5" cy="129" r="2.5" /><circle cx="185.2" cy="135.1" r="2.5" /><circle cx="187" cy="141.3" r="2.5" /><circle cx="175.3" cy="77.8" r="2.5" /><circle cx="177.6" cy="83.7" r="2.5" /><circle cx="179.9" cy="89.7" r="2.5" /><circle cx="182.1" cy="95.7" r="2.5" /><circle cx="184.4" cy="101.7" r="2.5" /><circle cx="186.7" cy="107.7" r="2.5" /><circle cx="188.9" cy="113.7" r="2.5" /><circle cx="191.2" cy="119.6" r="2.5" /><circle cx="193.5" cy="125.6" r="2.5" /><circle cx="195.7" cy="131.6" r="2.5" /><circle cx="198" cy="137.6" r="2.5" /><circle cx="181.2" cy="75.2" r="2.5" /><circle cx="184" cy="81" r="2.5" /><circle cx="186.7" cy="86.8" r="2.5" /><circle cx="189.5" cy="92.6" r="2.5" /><circle cx="192.2" cy="98.4" r="2.5" /><circle cx="195" cy="104.1" r="2.5" /><circle cx="197.7" cy="109.9" r="2.5" /><circle cx="200.5" cy="115.7" r="2.5" /><circle cx="203.2" cy="121.5" r="2.5" /><circle cx="205.9" cy="127.3" r="2.5" /><circle cx="208.7" cy="133" r="2.5" /><circle cx="187" cy="72.2" r="2.5" /><circle cx="190.2" cy="77.8" r="2.5" /><circle cx="193.3" cy="83.3" r="2.5" /><circle cx="196.6" cy="88.9" r="2.5" /><circle cx="199.7" cy="94.4" r="2.5" /><circle cx="202.9" cy="99.9" r="2.5" /><circle cx="206.2" cy="105.5" r="2.5" /><circle cx="209.4" cy="111" r="2.5" /><circle cx="212.5" cy="116.6" r="2.5" /><circle cx="215.7" cy="122.1" r="2.5" /><circle cx="218.9" cy="127.7" r="2.5" /><circle cx="192.4" cy="68.8" r="2.5" /><circle cx="196" cy="74.1" r="2.5" /><circle cx="199.7" cy="79.3" r="2.5" /><circle cx="203.3" cy="84.6" r="2.5" /><circle cx="206.9" cy="89.9" r="2.5" /><circle cx="210.6" cy="95.1" r="2.5" /><circle cx="214.2" cy="100.4" r="2.5" /><circle cx="217.8" cy="105.7" r="2.5" /><circle cx="221.5" cy="110.9" r="2.5" /><circle cx="225.1" cy="116.2" r="2.5" /><circle cx="228.8" cy="121.5" r="2.5" /><circle cx="197.5" cy="64.9" r="2.5" /><circle cx="201.6" cy="69.9" r="2.5" /><circle cx="205.6" cy="74.8" r="2.5" /><circle cx="209.7" cy="79.8" r="2.5" /><circle cx="213.7" cy="84.7" r="2.5" /><circle cx="217.8" cy="89.7" r="2.5" /><circle cx="221.8" cy="94.7" r="2.5" /><circle cx="225.9" cy="99.6" r="2.5" /><circle cx="229.9" cy="104.6" r="2.5" /><circle cx="234" cy="109.5" r="2.5" /><circle cx="238" cy="114.5" r="2.5" /><circle cx="202.4" cy="60.6" r="2.5" /><circle cx="206.8" cy="65.3" r="2.5" /><circle cx="211.2" cy="69.9" r="2.5" /><circle cx="215.7" cy="74.5" r="2.5" /><circle cx="220.1" cy="79.1" r="2.5" /><circle cx="224.5" cy="83.7" r="2.5" /><circle cx="229" cy="88.3" r="2.5" /><circle cx="233.4" cy="93" r="2.5" /><circle cx="237.8" cy="97.6" r="2.5" /><circle cx="242.3" cy="102.2" r="2.5" /><circle cx="246.7" cy="106.8" r="2.5" /><circle cx="211.6" cy="60.2" r="2.5" /><circle cx="216.4" cy="64.5" r="2.5" /><circle cx="221.2" cy="68.7" r="2.5" /><circle cx="226" cy="73" r="2.5" /><circle cx="230.8" cy="77.2" r="2.5" /><circle cx="235.6" cy="81.5" r="2.5" /><circle cx="240.4" cy="85.7" r="2.5" /><circle cx="245.2" cy="90" r="2.5" /><circle cx="249.9" cy="94.2" r="2.5" /><circle cx="254.7" cy="98.4" r="2.5" /><circle cx="210.9" cy="51" r="2.5" /><circle cx="216" cy="54.9" r="2.5" /><circle cx="221.1" cy="58.7" r="2.5" /><circle cx="226.3" cy="62.5" r="2.5" /><circle cx="231.4" cy="66.4" r="2.5" /><circle cx="236.5" cy="70.2" r="2.5" /><circle cx="241.6" cy="74.1" r="2.5" /><circle cx="246.7" cy="77.9" r="2.5" /><circle cx="251.8" cy="81.8" r="2.5" /><circle cx="257" cy="85.6" r="2.5" /><circle cx="262.1" cy="89.5" r="2.5" /><circle cx="214.6" cy="45.7" r="2.5" /><circle cx="220" cy="49.1" r="2.5" /><circle cx="225.4" cy="52.5" r="2.5" /><circle cx="230.8" cy="56" r="2.5" /><circle cx="236.2" cy="59.4" r="2.5" /><circle cx="241.6" cy="62.8" r="2.5" /><circle cx="247" cy="66.2" r="2.5" /><circle cx="252.4" cy="69.7" r="2.5" /><circle cx="257.8" cy="73.1" r="2.5" /><circle cx="263.2" cy="76.5" r="2.5" /><circle cx="268.7" cy="79.9" r="2.5" /><circle cx="217.8" cy="40.1" r="2.5" /><circle cx="223.5" cy="43.1" r="2.5" /><circle cx="229.1" cy="46.1" r="2.5" /><circle cx="234.8" cy="49.1" r="2.5" /><circle cx="240.5" cy="52" r="2.5" /><circle cx="246.1" cy="55" r="2.5" /><circle cx="251.8" cy="58" r="2.5" /><circle cx="257.5" cy="60.9" r="2.5" /><circle cx="263.1" cy="63.9" r="2.5" /><circle cx="268.8" cy="66.9" r="2.5" /><circle cx="274.5" cy="69.9" r="2.5" /><circle cx="220.5" cy="34.3" r="2.5" /><circle cx="226.4" cy="36.8" r="2.5" /><circle cx="232.3" cy="39.3" r="2.5" /><circle cx="238.2" cy="41.8" r="2.5" /><circle cx="244.1" cy="44.3" r="2.5" /><circle cx="250" cy="46.9" r="2.5" /><circle cx="255.9" cy="49.4" r="2.5" /><circle cx="261.8" cy="51.9" r="2.5" /><circle cx="267.7" cy="54.4" r="2.5" /><circle cx="273.5" cy="56.9" r="2.5" /><circle cx="279.4" cy="59.4" r="2.5" /><circle cx="222.8" cy="28.3" r="2.5" /><circle cx="228.9" cy="30.3" r="2.5" /><circle cx="235" cy="32.3" r="2.5" /><circle cx="241" cy="34.4" r="2.5" /><circle cx="247.1" cy="36.4" r="2.5" /><circle cx="253.2" cy="38.4" r="2.5" /><circle cx="259.3" cy="40.4" r="2.5" /><circle cx="265.3" cy="42.5" r="2.5" /><circle cx="271.4" cy="44.5" r="2.5" /><circle cx="277.5" cy="46.5" r="2.5" /><circle cx="283.5" cy="48.6" r="2.5" /><circle cx="224.6" cy="22.1" r="2.5" /><circle cx="230.8" cy="23.6" r="2.5" /><circle cx="237.1" cy="25.2" r="2.5" /><circle cx="243.3" cy="26.7" r="2.5" /><circle cx="249.5" cy="28.2" r="2.5" /><circle cx="255.7" cy="29.8" r="2.5" /><circle cx="261.9" cy="31.3" r="2.5" /><circle cx="268.1" cy="32.8" r="2.5" /><circle cx="274.3" cy="34.3" r="2.5" /><circle cx="280.6" cy="35.9" r="2.5" /><circle cx="286.8" cy="37.4" r="2.5" /><circle cx="225.9" cy="15.8" r="2.5" /><circle cx="232.2" cy="16.8" r="2.5" /><circle cx="238.5" cy="17.8" r="2.5" /><circle cx="244.9" cy="18.9" r="2.5" /><circle cx="251.2" cy="19.9" r="2.5" /><circle cx="257.5" cy="20.9" r="2.5" /><circle cx="263.8" cy="21.9" r="2.5" /><circle cx="270.1" cy="23" r="2.5" /><circle cx="276.5" cy="24" r="2.5" /><circle cx="282.8" cy="25" r="2.5" /><circle cx="289.1" cy="26" r="2.5" /><circle cx="226.7" cy="9.4" r="2.5" /><circle cx="233.1" cy="9.9" r="2.5" /><circle cx="239.4" cy="10.4" r="2.5" /><circle cx="245.8" cy="10.9" r="2.5" /><circle cx="252.2" cy="11.4" r="2.5" /><circle cx="258.6" cy="12" r="2.5" /><circle cx="265" cy="12.5" r="2.5" /><circle cx="271.3" cy="13" r="2.5" /><circle cx="277.7" cy="13.5" r="2.5" /><circle cx="284.1" cy="14" r="2.5" /><circle cx="290.5" cy="14.5" r="2.5" /><circle cx="233.4" cy="3" r="2.5" /><circle cx="239.8" cy="3" r="2.5" /><circle cx="246.2" cy="3" r="2.5" /><circle cx="252.6" cy="3" r="2.5" /><circle cx="259" cy="3" r="2.5" /><circle cx="265.4" cy="3" r="2.5" /><circle cx="271.8" cy="3" r="2.5" /><circle cx="278.2" cy="3" r="2.5" /><circle cx="284.6" cy="3" r="2.5" /><circle cx="291" cy="3" r="2.5" /></g><g transform="matrix(1.02073,-2.41773e-20,2.41769e-20,-1.01374,-0.0103632,156.007)"><circle data-id="house_seat_1" cx="60.6" cy="3" r="2.5" /><circle data-id="house_seat_2" cx="54.2" cy="3" r="2.5" /><circle data-id="house_seat_3" cx="47.8" cy="3" r="2.5" /><circle data-id="house_seat_4" cx="41.4" cy="3" r="2.5" /><circle data-id="house_seat_5" cx="35" cy="3" r="2.5" /><circle data-id="house_seat_6" cx="28.5" cy="3" r="2.5" /><circle data-id="house_seat_7" cx="22.1" cy="3" r="2.5" /><circle data-id="house_seat_8" cx="15.8" cy="3" r="2.5" /><circle data-id="house_seat_9" cx="9.4" cy="3" r="2.5" /><circle data-id="house_seat_10" cx="3" cy="3" r="2.5" /><circle data-id="house_seat_11" cx="67.2" cy="9.4" r="2.5" /><circle data-id="house_seat_12" cx="60.8" cy="9.9" r="2.5" /><circle data-id="house_seat_13" cx="54.5" cy="10.4" r="2.5" /><circle data-id="house_seat_14" cx="48.1" cy="10.9" r="2.5" /><circle data-id="house_seat_15" cx="41.7" cy="11.4" r="2.5" /><circle data-id="house_seat_16" cx="35.3" cy="12" r="2.5" /><circle data-id="house_seat_17" cx="28.9" cy="12.5" r="2.5" /><circle data-id="house_seat_18" cx="22.6" cy="13" r="2.5" /><circle data-id="house_seat_19" cx="16.2" cy="13.5" r="2.5" /><circle data-id="house_seat_20" cx="9.8" cy="14" r="2.5" /><circle data-id="house_seat_21" cx="3.4" cy="14.5" r="2.5" /><circle data-id="house_seat_22" cx="68" cy="15.8" r="2.5" /><circle data-id="house_seat_23" cx="61.7" cy="16.8" r="2.5" /><circle data-id="house_seat_24" cx="55.4" cy="17.8" r="2.5" /><circle data-id="house_seat_25" cx="49" cy="18.9" r="2.5" /><circle data-id="house_seat_26" cx="42.7" cy="19.9" r="2.5" /><circle data-id="house_seat_27" cx="36.4" cy="20.9" r="2.5" /><circle data-id="house_seat_28" cx="30.1" cy="21.9" r="2.5" /><circle data-id="house_seat_29" cx="23.8" cy="23" r="2.5" /><circle data-id="house_seat_30" cx="17.4" cy="24" r="2.5" /><circle data-id="house_seat_31" cx="11.1" cy="25" r="2.5" /><circle data-id="house_seat_32" cx="4.8" cy="26" r="2.5" /><circle data-id="house_seat_33" cx="69.3" cy="22.1" r="2.5" /><circle data-id="house_seat_34" cx="63.1" cy="23.6" r="2.5" /><circle data-id="house_seat_35" cx="56.8" cy="25.2" r="2.5" /><circle data-id="house_seat_36" cx="50.6" cy="26.7" r="2.5" /><circle data-id="house_seat_37" cx="44.4" cy="28.2" r="2.5" /><circle data-id="house_seat_38" cx="38.2" cy="29.8" r="2.5" /><circle data-id="house_seat_39" cx="32" cy="31.3" r="2.5" /><circle data-id="house_seat_40" cx="25.8" cy="32.8" r="2.5" /><circle data-id="house_seat_41" cx="19.6" cy="34.3" r="2.5" /><circle data-id="house_seat_42" cx="13.3" cy="35.9" r="2.5" /><circle data-id="house_seat_43" cx="7.1" cy="37.4" r="2.5" /><circle data-id="house_seat_44" cx="71.1" cy="28.3" r="2.5" /><circle data-id="house_seat_45" cx="65" cy="30.3" r="2.5" /><circle data-id="house_seat_46" cx="58.9" cy="32.3" r="2.5" /><circle data-id="house_seat_47" cx="52.9" cy="34.4" r="2.5" /><circle data-id="house_seat_48" cx="46.8" cy="36.4" r="2.5" /><circle data-id="house_seat_49" cx="40.7" cy="38.4" r="2.5" /><circle data-id="house_seat_50" cx="34.6" cy="40.4" r="2.5" /><circle data-id="house_seat_51" cx="28.6" cy="42.5" r="2.5" /><circle data-id="house_seat_52" cx="22.5" cy="44.5" r="2.5" /><circle data-id="house_seat_53" cx="16.4" cy="46.5" r="2.5" /><circle data-id="house_seat_54" cx="10.4" cy="48.6" r="2.5" /><circle data-id="house_seat_55" cx="73.4" cy="34.3" r="2.5" /><circle data-id="house_seat_56" cx="67.5" cy="36.8" r="2.5" /><circle data-id="house_seat_57" cx="61.6" cy="39.3" r="2.5" /><circle data-id="house_seat_58" cx="55.7" cy="41.8" r="2.5" /><circle data-id="house_seat_59" cx="49.8" cy="44.3" r="2.5" /><circle data-id="house_seat_60" cx="43.9" cy="46.9" r="2.5" /><circle data-id="house_seat_61" cx="38" cy="49.4" r="2.5" /><circle data-id="house_seat_62" cx="32.1" cy="51.9" r="2.5" /><circle data-id="house_seat_63" cx="26.2" cy="54.4" r="2.5" /><circle data-id="house_seat_64" cx="20.4" cy="56.9" r="2.5" /><circle data-id="house_seat_65" cx="14.5" cy="59.4" r="2.5" /><circle data-id="house_seat_66" cx="76.1" cy="40.1" r="2.5" /><circle data-id="house_seat_67" cx="70.4" cy="43.1" r="2.5" /><circle data-id="house_seat_68" cx="64.8" cy="46.1" r="2.5" /><circle data-id="house_seat_69" cx="59.1" cy="49.1" r="2.5" /><circle data-id="house_seat_70" cx="53.4" cy="52" r="2.5" /><circle data-id="house_seat_71" cx="47.8" cy="55" r="2.5" /><circle data-id="house_seat_72" cx="42.1" cy="58" r="2.5" /><circle data-id="house_seat_73" cx="36.4" cy="60.9" r="2.5" /><circle data-id="house_seat_74" cx="30.8" cy="63.9" r="2.5" /><circle data-id="house_seat_75" cx="25.1" cy="66.9" r="2.5" /><circle data-id="house_seat_76" cx="19.4" cy="69.9" r="2.5" /><circle data-id="house_seat_77" cx="79.3" cy="45.7" r="2.5" /><circle data-id="house_seat_78" cx="73.9" cy="49.1" r="2.5" /><circle data-id="house_seat_79" cx="68.5" cy="52.5" r="2.5" /><circle data-id="house_seat_80" cx="63.1" cy="56" r="2.5" /><circle data-id="house_seat_81" cx="57.7" cy="59.4" r="2.5" /><circle data-id="house_seat_82" cx="52.3" cy="62.8" r="2.5" /><circle data-id="house_seat_83" cx="46.9" cy="66.2" r="2.5" /><circle data-id="house_seat_84" cx="41.5" cy="69.7" r="2.5" /><circle data-id="house_seat_85" cx="36.1" cy="73.1" r="2.5" /><circle data-id="house_seat_86" cx="30.7" cy="76.5" r="2.5" /><circle data-id="house_seat_87" cx="25.2" cy="79.9" r="2.5" /><circle data-id="house_seat_88" cx="83" cy="51" r="2.5" /><circle data-id="house_seat_89" cx="77.9" cy="54.9" r="2.5" /><circle data-id="house_seat_90" cx="72.8" cy="58.7" r="2.5" /><circle data-id="house_seat_91" cx="67.6" cy="62.5" r="2.5" /><circle data-id="house_seat_92" cx="62.5" cy="66.4" r="2.5" /><circle data-id="house_seat_93" cx="57.4" cy="70.2" r="2.5" /><circle data-id="house_seat_94" cx="52.3" cy="74.1" r="2.5" /><circle data-id="house_seat_95" cx="47.2" cy="77.9" r="2.5" /><circle data-id="house_seat_96" cx="42.1" cy="81.8" r="2.5" /><circle data-id="house_seat_97" cx="36.9" cy="85.6" r="2.5" /><circle data-id="house_seat_98" cx="31.8" cy="89.5" r="2.5" /><circle data-id="house_seat_99" cx="87.1" cy="56" r="2.5" /><circle data-id="house_seat_100" cx="82.3" cy="60.2" r="2.5" /><circle data-id="house_seat_101" cx="77.5" cy="64.5" r="2.5" /><circle data-id="house_seat_102" cx="72.7" cy="68.7" r="2.5" /><circle data-id="house_seat_103" cx="67.9" cy="73" r="2.5" /><circle data-id="house_seat_104" cx="63.1" cy="77.2" r="2.5" /><circle data-id="house_seat_105" cx="58.3" cy="81.5" r="2.5" /><circle data-id="house_seat_106" cx="53.5" cy="85.7" r="2.5" /><circle data-id="house_seat_107" cx="48.7" cy="90" r="2.5" /><circle data-id="house_seat_108" cx="44" cy="94.2" r="2.5" /><circle data-id="house_seat_109" cx="39.2" cy="98.4" r="2.5" /><circle data-id="house_seat_110" cx="87.1" cy="65.3" r="2.5" /><circle data-id="house_seat_111" cx="82.7" cy="69.9" r="2.5" /><circle data-id="house_seat_112" cx="78.2" cy="74.5" r="2.5" /><circle data-id="house_seat_113" cx="73.8" cy="79.1" r="2.5" /><circle data-id="house_seat_114" cx="69.4" cy="83.7" r="2.5" /><circle data-id="house_seat_115" cx="64.9" cy="88.3" r="2.5" /><circle data-id="house_seat_116" cx="60.5" cy="93" r="2.5" /><circle data-id="house_seat_117" cx="56.1" cy="97.6" r="2.5" /><circle data-id="house_seat_118" cx="51.6" cy="102.2" r="2.5" /><circle data-id="house_seat_119" cx="47.2" cy="106.8" r="2.5" /><circle data-id="house_seat_120" cx="96.4" cy="64.9" r="2.5" /><circle data-id="house_seat_121" cx="92.3" cy="69.9" r="2.5" /><circle data-id="house_seat_122" cx="88.3" cy="74.8" r="2.5" /><circle data-id="house_seat_123" cx="84.2" cy="79.8" r="2.5" /><circle data-id="house_seat_124" cx="80.2" cy="84.7" r="2.5" /><circle data-id="house_seat_125" cx="76.1" cy="89.7" r="2.5" /><circle data-id="house_seat_126" cx="72.1" cy="94.7" r="2.5" /><circle data-id="house_seat_127" cx="68" cy="99.6" r="2.5" /><circle data-id="house_seat_128" cx="64" cy="104.6" r="2.5" /><circle data-id="house_seat_129" cx="59.9" cy="109.5" r="2.5" /><circle data-id="house_seat_130" cx="55.9" cy="114.5" r="2.5" /><circle data-id="house_seat_131" cx="101.5" cy="68.8" r="2.5" /><circle data-id="house_seat_132" cx="97.9" cy="74.1" r="2.5" /><circle data-id="house_seat_133" cx="94.2" cy="79.3" r="2.5" /><circle data-id="house_seat_134" cx="90.6" cy="84.6" r="2.5" /><circle data-id="house_seat_135" cx="87" cy="89.9" r="2.5" /><circle data-id="house_seat_136" cx="83.3" cy="95.1" r="2.5" /><circle data-id="house_seat_137" cx="79.7" cy="100.4" r="2.5" /><circle data-id="house_seat_138" cx="76.1" cy="105.7" r="2.5" /><circle data-id="house_seat_139" cx="72.4" cy="110.9" r="2.5" /><circle data-id="house_seat_140" cx="68.8" cy="116.2" r="2.5" /><circle data-id="house_seat_141" cx="65.1" cy="121.5" r="2.5" /><circle data-id="house_seat_142" cx="107" cy="72.2" r="2.5" /><circle data-id="house_seat_143" cx="103.8" cy="77.8" r="2.5" /><circle data-id="house_seat_144" cx="100.6" cy="83.3" r="2.5" /><circle data-id="house_seat_145" cx="97.4" cy="88.9" r="2.5" /><circle data-id="house_seat_146" cx="94.2" cy="94.4" r="2.5" /><circle data-id="house_seat_147" cx="91" cy="99.9" r="2.5" /><circle data-id="house_seat_148" cx="87.8" cy="105.5" r="2.5" /><circle data-id="house_seat_149" cx="84.6" cy="111" r="2.5" /><circle data-id="house_seat_150" cx="81.4" cy="116.6" r="2.5" /><circle data-id="house_seat_151" cx="78.2" cy="122.1" r="2.5" /><circle data-id="house_seat_152" cx="75" cy="127.7" r="2.5" /><circle data-id="house_seat_153" cx="112.7" cy="75.2" r="2.5" /><circle data-id="house_seat_154" cx="109.9" cy="81" r="2.5" /><circle data-id="house_seat_155" cx="107.2" cy="86.8" r="2.5" /><circle data-id="house_seat_156" cx="104.4" cy="92.6" r="2.5" /><circle data-id="house_seat_157" cx="101.7" cy="98.4" r="2.5" /><circle data-id="house_seat_158" cx="98.9" cy="104.1" r="2.5" /><circle data-id="house_seat_159" cx="96.2" cy="109.9" r="2.5" /><circle data-id="house_seat_160" cx="93.4" cy="115.7" r="2.5" /><circle data-id="house_seat_161" cx="90.7" cy="121.5" r="2.5" /><circle data-id="house_seat_162" cx="88" cy="127.3" r="2.5" /><circle data-id="house_seat_163" cx="85.2" cy="133" r="2.5" /><circle data-id="house_seat_164" cx="118.6" cy="77.8" r="2.5" /><circle data-id="house_seat_165" cx="116.3" cy="83.7" r="2.5" /><circle data-id="house_seat_166" cx="114" cy="89.7" r="2.5" /><circle data-id="house_seat_167" cx="111.8" cy="95.7" r="2.5" /><circle data-id="house_seat_168" cx="109.5" cy="101.7" r="2.5" /><circle data-id="house_seat_169" cx="107.2" cy="107.7" r="2.5" /><circle data-id="house_seat_170" cx="105" cy="113.7" r="2.5" /><circle data-id="house_seat_171" cx="102.7" cy="119.6" r="2.5" /><circle data-id="house_seat_172" cx="100.4" cy="125.6" r="2.5" /><circle data-id="house_seat_173" cx="98.2" cy="131.6" r="2.5" /><circle data-id="house_seat_174" cx="95.9" cy="137.6" r="2.5" /><circle data-id="house_seat_175" cx="124.7" cy="79.8" r="2.5" /><circle data-id="house_seat_176" cx="122.9" cy="85.9" r="2.5" /><circle data-id="house_seat_177" cx="121.1" cy="92.1" r="2.5" /><circle data-id="house_seat_178" cx="119.4" cy="98.2" r="2.5" /><circle data-id="house_seat_179" cx="117.6" cy="104.4" r="2.5" /><circle data-id="house_seat_180" cx="115.8" cy="110.5" r="2.5" /><circle data-id="house_seat_181" cx="114" cy="116.7" r="2.5" /><circle data-id="house_seat_182" cx="112.2" cy="122.8" r="2.5" /><circle data-id="house_seat_183" cx="110.4" cy="129" r="2.5" /><circle data-id="house_seat_184" cx="108.7" cy="135.1" r="2.5" /><circle data-id="house_seat_185" cx="106.9" cy="141.3" r="2.5" /><circle data-id="house_seat_186" cx="130.9" cy="81.3" r="2.5" /><circle data-id="house_seat_187" cx="129.7" cy="87.6" r="2.5" /><circle data-id="house_seat_188" cx="128.4" cy="93.9" r="2.5" /><circle data-id="house_seat_189" cx="127.1" cy="100.1" r="2.5" /><circle data-id="house_seat_190" cx="125.8" cy="106.4" r="2.5" /><circle data-id="house_seat_191" cx="124.5" cy="112.7" r="2.5" /><circle data-id="house_seat_192" cx="123.3" cy="119" r="2.5" /><circle data-id="house_seat_193" cx="122" cy="125.2" r="2.5" /><circle data-id="house_seat_194" cx="120.7" cy="131.5" r="2.5" /><circle data-id="house_seat_195" cx="119.4" cy="137.8" r="2.5" /><circle data-id="house_seat_196" cx="118.1" cy="144" r="2.5" /><circle data-id="house_seat_197" cx="137.3" cy="82.4" r="2.5" /><circle data-id="house_seat_198" cx="136.5" cy="88.7" r="2.5" /><circle data-id="house_seat_199" cx="135.8" cy="95.1" r="2.5" /><circle data-id="house_seat_200" cx="135" cy="101.4" r="2.5" /><circle data-id="house_seat_201" cx="134.2" cy="107.8" r="2.5" /><circle data-id="house_seat_202" cx="133.4" cy="114.1" r="2.5" /><circle data-id="house_seat_203" cx="132.7" cy="120.5" r="2.5" /><circle data-id="house_seat_204" cx="131.9" cy="126.8" r="2.5" /><circle data-id="house_seat_205" cx="131.1" cy="133.2" r="2.5" /><circle data-id="house_seat_206" cx="130.4" cy="139.5" r="2.5" /><circle data-id="house_seat_207" cx="129.6" cy="145.9" r="2.5" /><circle data-id="house_seat_208" cx="143.7" cy="82.9" r="2.5" /><circle data-id="house_seat_209" cx="143.5" cy="89.3" r="2.5" /><circle data-id="house_seat_210" cx="143.2" cy="95.7" r="2.5" /><circle data-id="house_seat_211" cx="143" cy="102.1" r="2.5" /><circle data-id="house_seat_212" cx="142.7" cy="108.5" r="2.5" /><circle data-id="house_seat_213" cx="142.4" cy="114.9" r="2.5" /><circle data-id="house_seat_214" cx="142.2" cy="121.3" r="2.5" /><circle data-id="house_seat_215" cx="141.9" cy="127.6" r="2.5" /><circle data-id="house_seat_216" cx="141.7" cy="134" r="2.5" /><circle data-id="house_seat_217" cx="141.4" cy="140.4" r="2.5" /><circle data-id="house_seat_218" cx="141.2" cy="146.8" r="2.5" /><circle data-id="house_seat_219" cx="150.4" cy="89.3" r="2.5" /><circle data-id="house_seat_220" cx="150.7" cy="95.7" r="2.5" /><circle data-id="house_seat_221" cx="150.9" cy="102.1" r="2.5" /><circle data-id="house_seat_222" cx="151.2" cy="108.5" r="2.5" /><circle data-id="house_seat_223" cx="151.5" cy="114.9" r="2.5" /><circle data-id="house_seat_224" cx="151.7" cy="121.3" r="2.5" /><circle data-id="house_seat_225" cx="152" cy="127.6" r="2.5" /><circle data-id="house_seat_226" cx="152.2" cy="134" r="2.5" /><circle data-id="house_seat_227" cx="152.5" cy="140.4" r="2.5" /><circle data-id="house_seat_228" cx="152.7" cy="146.8" r="2.5" /><circle data-id="house_seat_229" cx="156.6" cy="82.4" r="2.5" /><circle data-id="house_seat_230" cx="157.4" cy="88.7" r="2.5" /><circle data-id="house_seat_231" cx="158.1" cy="95.1" r="2.5" /><circle data-id="house_seat_232" cx="158.9" cy="101.4" r="2.5" /><circle data-id="house_seat_233" cx="159.7" cy="107.8" r="2.5" /><circle data-id="house_seat_234" cx="160.5" cy="114.1" r="2.5" /><circle data-id="house_seat_235" cx="161.2" cy="120.5" r="2.5" /><circle data-id="house_seat_236" cx="162" cy="126.8" r="2.5" /><circle data-id="house_seat_237" cx="162.8" cy="133.2" r="2.5" /><circle data-id="house_seat_238" cx="163.5" cy="139.5" r="2.5" /><circle data-id="house_seat_239" cx="164.3" cy="145.9" r="2.5" /><circle data-id="house_seat_240" cx="163" cy="81.3" r="2.5" /><circle data-id="house_seat_241" cx="164.2" cy="87.6" r="2.5" /><circle data-id="house_seat_242" cx="165.5" cy="93.9" r="2.5" /><circle data-id="house_seat_243" cx="166.8" cy="100.1" r="2.5" /><circle data-id="house_seat_244" cx="168.1" cy="106.4" r="2.5" /><circle data-id="house_seat_245" cx="169.4" cy="112.7" r="2.5" /><circle data-id="house_seat_246" cx="170.6" cy="119" r="2.5" /><circle data-id="house_seat_247" cx="171.9" cy="125.2" r="2.5" /><circle data-id="house_seat_248" cx="173.2" cy="131.5" r="2.5" /><circle data-id="house_seat_249" cx="174.5" cy="137.8" r="2.5" /><circle data-id="house_seat_250" cx="175.8" cy="144" r="2.5" /><circle data-id="house_seat_251" cx="169.2" cy="79.8" r="2.5" /><circle data-id="house_seat_252" cx="171" cy="85.9" r="2.5" /><circle data-id="house_seat_253" cx="172.8" cy="92.1" r="2.5" /><circle data-id="house_seat_254" cx="174.5" cy="98.2" r="2.5" /><circle data-id="house_seat_255" cx="176.3" cy="104.4" r="2.5" /><circle data-id="house_seat_256" cx="178.1" cy="110.5" r="2.5" /><circle data-id="house_seat_257" cx="179.9" cy="116.7" r="2.5" /><circle data-id="house_seat_258" cx="181.7" cy="122.8" r="2.5" /><circle data-id="house_seat_259" cx="183.5" cy="129" r="2.5" /><circle data-id="house_seat_260" cx="185.2" cy="135.1" r="2.5" /><circle data-id="house_seat_261" cx="187" cy="141.3" r="2.5" /><circle data-id="house_seat_262" cx="175.3" cy="77.8" r="2.5" /><circle data-id="house_seat_263" cx="177.6" cy="83.7" r="2.5" /><circle data-id="house_seat_264" cx="179.9" cy="89.7" r="2.5" /><circle data-id="house_seat_265" cx="182.1" cy="95.7" r="2.5" /><circle data-id="house_seat_266" cx="184.4" cy="101.7" r="2.5" /><circle data-id="house_seat_267" cx="186.7" cy="107.7" r="2.5" /><circle data-id="house_seat_268" cx="188.9" cy="113.7" r="2.5" /><circle data-id="house_seat_269" cx="191.2" cy="119.6" r="2.5" /><circle data-id="house_seat_270" cx="193.5" cy="125.6" r="2.5" /><circle data-id="house_seat_271" cx="195.7" cy="131.6" r="2.5" /><circle data-id="house_seat_272" cx="198" cy="137.6" r="2.5" /><circle data-id="house_seat_273" cx="181.2" cy="75.2" r="2.5" /><circle data-id="house_seat_274" cx="184" cy="81" r="2.5" /><circle data-id="house_seat_275" cx="186.7" cy="86.8" r="2.5" /><circle data-id="house_seat_276" cx="189.5" cy="92.6" r="2.5" /><circle data-id="house_seat_277" cx="192.2" cy="98.4" r="2.5" /><circle data-id="house_seat_278" cx="195" cy="104.1" r="2.5" /><circle data-id="house_seat_279" cx="197.7" cy="109.9" r="2.5" /><circle data-id="house_seat_280" cx="200.5" cy="115.7" r="2.5" /><circle data-id="house_seat_281" cx="203.2" cy="121.5" r="2.5" /><circle data-id="house_seat_282" cx="205.9" cy="127.3" r="2.5" /><circle data-id="house_seat_283" cx="208.7" cy="133" r="2.5" /><circle data-id="house_seat_284" cx="187" cy="72.2" r="2.5" /><circle data-id="house_seat_285" cx="190.2" cy="77.8" r="2.5" /><circle data-id="house_seat_286" cx="193.3" cy="83.3" r="2.5" /><circle data-id="house_seat_287" cx="196.6" cy="88.9" r="2.5" /><circle data-id="house_seat_288" cx="199.7" cy="94.4" r="2.5" /><circle data-id="house_seat_289" cx="202.9" cy="99.9" r="2.5" /><circle data-id="house_seat_290" cx="206.2" cy="105.5" r="2.5" /><circle data-id="house_seat_291" cx="209.4" cy="111" r="2.5" /><circle data-id="house_seat_292" cx="212.5" cy="116.6" r="2.5" /><circle data-id="house_seat_293" cx="215.7" cy="122.1" r="2.5" /><circle data-id="house_seat_294" cx="218.9" cy="127.7" r="2.5" /><circle data-id="house_seat_295" cx="192.4" cy="68.8" r="2.5" /><circle data-id="house_seat_296" cx="196" cy="74.1" r="2.5" /><circle data-id="house_seat_297" cx="199.7" cy="79.3" r="2.5" /><circle data-id="house_seat_298" cx="203.3" cy="84.6" r="2.5" /><circle data-id="house_seat_299" cx="206.9" cy="89.9" r="2.5" /><circle data-id="house_seat_300" cx="210.6" cy="95.1" r="2.5" /><circle data-id="house_seat_301" cx="214.2" cy="100.4" r="2.5" /><circle data-id="house_seat_302" cx="217.8" cy="105.7" r="2.5" /><circle data-id="house_seat_303" cx="221.5" cy="110.9" r="2.5" /><circle data-id="house_seat_304" cx="225.1" cy="116.2" r="2.5" /><circle data-id="house_seat_305" cx="228.8" cy="121.5" r="2.5" /><circle data-id="house_seat_306" cx="197.5" cy="64.9" r="2.5" /><circle data-id="house_seat_307" cx="201.6" cy="69.9" r="2.5" /><circle data-id="house_seat_308" cx="205.6" cy="74.8" r="2.5" /><circle data-id="house_seat_309" cx="209.7" cy="79.8" r="2.5" /><circle data-id="house_seat_310" cx="213.7" cy="84.7" r="2.5" /><circle data-id="house_seat_311" cx="217.8" cy="89.7" r="2.5" /><circle data-id="house_seat_312" cx="221.8" cy="94.7" r="2.5" /><circle data-id="house_seat_313" cx="225.9" cy="99.6" r="2.5" /><circle data-id="house_seat_314" cx="229.9" cy="104.6" r="2.5" /><circle data-id="house_seat_315" cx="234" cy="109.5" r="2.5" /><circle data-id="house_seat_316" cx="238" cy="114.5" r="2.5" /><circle data-id="house_seat_317" cx="202.4" cy="60.6" r="2.5" /><circle data-id="house_seat_318" cx="206.8" cy="65.3" r="2.5" /><circle data-id="house_seat_319" cx="211.2" cy="69.9" r="2.5" /><circle data-id="house_seat_320" cx="215.7" cy="74.5" r="2.5" /><circle data-id="house_seat_321" cx="220.1" cy="79.1" r="2.5" /><circle data-id="house_seat_322" cx="224.5" cy="83.7" r="2.5" /><circle data-id="house_seat_323" cx="229" cy="88.3" r="2.5" /><circle data-id="house_seat_324" cx="233.4" cy="93" r="2.5" /><circle data-id="house_seat_325" cx="237.8" cy="97.6" r="2.5" /><circle data-id="house_seat_326" cx="242.3" cy="102.2" r="2.5" /><circle data-id="house_seat_327" cx="246.7" cy="106.8" r="2.5" /><circle data-id="house_seat_328" cx="211.6" cy="60.2" r="2.5" /><circle data-id="house_seat_329" cx="216.4" cy="64.5" r="2.5" /><circle data-id="house_seat_330" cx="221.2" cy="68.7" r="2.5" /><circle data-id="house_seat_331" cx="226" cy="73" r="2.5" /><circle data-id="house_seat_332" cx="230.8" cy="77.2" r="2.5" /><circle data-id="house_seat_333" cx="235.6" cy="81.5" r="2.5" /><circle data-id="house_seat_334" cx="240.4" cy="85.7" r="2.5" /><circle data-id="house_seat_335" cx="245.2" cy="90" r="2.5" /><circle data-id="house_seat_336" cx="249.9" cy="94.2" r="2.5" /><circle data-id="house_seat_337" cx="254.7" cy="98.4" r="2.5" /><circle data-id="house_seat_338" cx="210.9" cy="51" r="2.5" /><circle data-id="house_seat_339" cx="216" cy="54.9" r="2.5" /><circle data-id="house_seat_340" cx="221.1" cy="58.7" r="2.5" /><circle data-id="house_seat_341" cx="226.3" cy="62.5" r="2.5" /><circle data-id="house_seat_342" cx="231.4" cy="66.4" r="2.5" /><circle data-id="house_seat_343" cx="236.5" cy="70.2" r="2.5" /><circle data-id="house_seat_344" cx="241.6" cy="74.1" r="2.5" /><circle data-id="house_seat_345" cx="246.7" cy="77.9" r="2.5" /><circle data-id="house_seat_346" cx="251.8" cy="81.8" r="2.5" /><circle data-id="house_seat_347" cx="257" cy="85.6" r="2.5" /><circle data-id="house_seat_348" cx="262.1" cy="89.5" r="2.5" /><circle data-id="house_seat_349" cx="214.6" cy="45.7" r="2.5" /><circle data-id="house_seat_350" cx="220" cy="49.1" r="2.5" /><circle data-id="house_seat_351" cx="225.4" cy="52.5" r="2.5" /><circle data-id="house_seat_352" cx="230.8" cy="56" r="2.5" /><circle data-id="house_seat_353" cx="236.2" cy="59.4" r="2.5" /><circle data-id="house_seat_354" cx="241.6" cy="62.8" r="2.5" /><circle data-id="house_seat_355" cx="247" cy="66.2" r="2.5" /><circle data-id="house_seat_356" cx="252.4" cy="69.7" r="2.5" /><circle data-id="house_seat_357" cx="257.8" cy="73.1" r="2.5" /><circle data-id="house_seat_358" cx="263.2" cy="76.5" r="2.5" /><circle data-id="house_seat_359" cx="268.7" cy="79.9" r="2.5" /><circle data-id="house_seat_360" cx="217.8" cy="40.1" r="2.5" /><circle data-id="house_seat_361" cx="223.5" cy="43.1" r="2.5" /><circle data-id="house_seat_362" cx="229.1" cy="46.1" r="2.5" /><circle data-id="house_seat_363" cx="234.8" cy="49.1" r="2.5" /><circle data-id="house_seat_364" cx="240.5" cy="52" r="2.5" /><circle data-id="house_seat_365" cx="246.1" cy="55" r="2.5" /><circle data-id="house_seat_366" cx="251.8" cy="58" r="2.5" /><circle data-id="house_seat_367" cx="257.5" cy="60.9" r="2.5" /><circle data-id="house_seat_368" cx="263.1" cy="63.9" r="2.5" /><circle data-id="house_seat_369" cx="268.8" cy="66.9" r="2.5" /><circle data-id="house_seat_370" cx="274.5" cy="69.9" r="2.5" /><circle data-id="house_seat_371" cx="220.5" cy="34.3" r="2.5" /><circle data-id="house_seat_372" cx="226.4" cy="36.8" r="2.5" /><circle data-id="house_seat_373" cx="232.3" cy="39.3" r="2.5" /><circle data-id="house_seat_374" cx="238.2" cy="41.8" r="2.5" /><circle data-id="house_seat_375" cx="244.1" cy="44.3" r="2.5" /><circle data-id="house_seat_376" cx="250" cy="46.9" r="2.5" /><circle data-id="house_seat_377" cx="255.9" cy="49.4" r="2.5" /><circle data-id="house_seat_378" cx="261.8" cy="51.9" r="2.5" /><circle data-id="house_seat_379" cx="267.7" cy="54.4" r="2.5" /><circle data-id="house_seat_380" cx="273.5" cy="56.9" r="2.5" /><circle data-id="house_seat_381" cx="279.4" cy="59.4" r="2.5" /><circle data-id="house_seat_382" cx="222.8" cy="28.3" r="2.5" /><circle data-id="house_seat_383" cx="228.9" cy="30.3" r="2.5" /><circle data-id="house_seat_384" cx="235" cy="32.3" r="2.5" /><circle data-id="house_seat_385" cx="241" cy="34.4" r="2.5" /><circle data-id="house_seat_386" cx="247.1" cy="36.4" r="2.5" /><circle data-id="house_seat_387" cx="253.2" cy="38.4" r="2.5" /><circle data-id="house_seat_388" cx="259.3" cy="40.4" r="2.5" /><circle data-id="house_seat_389" cx="265.3" cy="42.5" r="2.5" /><circle data-id="house_seat_390" cx="271.4" cy="44.5" r="2.5" /><circle data-id="house_seat_391" cx="277.5" cy="46.5" r="2.5" /><circle data-id="house_seat_392" cx="283.5" cy="48.6" r="2.5" /><circle data-id="house_seat_393" cx="224.6" cy="22.1" r="2.5" /><circle data-id="house_seat_394" cx="230.8" cy="23.6" r="2.5" /><circle data-id="house_seat_395" cx="237.1" cy="25.2" r="2.5" /><circle data-id="house_seat_396" cx="243.3" cy="26.7" r="2.5" /><circle data-id="house_seat_397" cx="249.5" cy="28.2" r="2.5" /><circle data-id="house_seat_398" cx="255.7" cy="29.8" r="2.5" /><circle data-id="house_seat_399" cx="261.9" cy="31.3" r="2.5" /><circle data-id="house_seat_400" cx="268.1" cy="32.8" r="2.5" /><circle data-id="house_seat_401" cx="274.3" cy="34.3" r="2.5" /><circle data-id="house_seat_402" cx="280.6" cy="35.9" r="2.5" /><circle data-id="house_seat_403" cx="286.8" cy="37.4" r="2.5" /><circle data-id="house_seat_404" cx="225.9" cy="15.8" r="2.5" /><circle data-id="house_seat_405" cx="232.2" cy="16.8" r="2.5" /><circle data-id="house_seat_406" cx="238.5" cy="17.8" r="2.5" /><circle data-id="house_seat_407" cx="244.9" cy="18.9" r="2.5" /><circle data-id="house_seat_408" cx="251.2" cy="19.9" r="2.5" /><circle data-id="house_seat_409" cx="257.5" cy="20.9" r="2.5" /><circle data-id="house_seat_410" cx="263.8" cy="21.9" r="2.5" /><circle data-id="house_seat_411" cx="270.1" cy="23" r="2.5" /><circle data-id="house_seat_412" cx="276.5" cy="24" r="2.5" /><circle data-id="house_seat_413" cx="282.8" cy="25" r="2.5" /><circle data-id="house_seat_414" cx="289.1" cy="26" r="2.5" /><circle data-id="house_seat_415" cx="226.7" cy="9.4" r="2.5" /><circle data-id="house_seat_416" cx="233.1" cy="9.9" r="2.5" /><circle data-id="house_seat_417" cx="239.4" cy="10.4" r="2.5" /><circle data-id="house_seat_418" cx="245.8" cy="10.9" r="2.5" /><circle data-id="house_seat_419" cx="252.2" cy="11.4" r="2.5" /><circle data-id="house_seat_420" cx="258.6" cy="12" r="2.5" /><circle data-id="house_seat_421" cx="265" cy="12.5" r="2.5" /><circle data-id="house_seat_422" cx="271.3" cy="13" r="2.5" /><circle data-id="house_seat_423" cx="277.7" cy="13.5" r="2.5" /><circle data-id="house_seat_424" cx="284.1" cy="14" r="2.5" /><circle data-id="house_seat_425" cx="290.5" cy="14.5" r="2.5" /><circle data-id="house_seat_426" cx="233.4" cy="3" r="2.5" /><circle data-id="house_seat_427" cx="239.8" cy="3" r="2.5" /><circle data-id="house_seat_428" cx="246.2" cy="3" r="2.5" /><circle data-id="house_seat_429" cx="252.6" cy="3" r="2.5" /><circle data-id="house_seat_430" cx="259" cy="3" r="2.5" /><circle data-id="house_seat_431" cx="265.4" cy="3" r="2.5" /><circle data-id="house_seat_432" cx="271.8" cy="3" r="2.5" /><circle data-id="house_seat_433" cx="278.2" cy="3" r="2.5" /><circle data-id="house_seat_434" cx="284.6" cy="3" r="2.5" /><circle data-id="house_seat_435" cx="291" cy="3" r="2.5" /></g></svg></div>'
}),
define("module/components/us2016/data/senate-es6", ["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.default = '<div class="us2016-congress-svg"><svg x="0" y="0" viewBox="0 0 300 156" preserveAspectRatio="xMidYMin slice" style="width: 100%; padding-bottom: 52%; height: 1px; overflow: visible"><g><circle cx="70" cy="149" r="6" /><circle cx="54" cy="149" r="6" /><circle cx="38" cy="149" r="6" /><circle cx="22" cy="149" r="6" /><circle cx="6" cy="149" r="6" /><circle cx="71" cy="136" r="6" /><circle cx="55" cy="133" r="6" /><circle cx="40" cy="131" r="6" /><circle cx="24" cy="128" r="6" /><circle cx="8" cy="125" r="6" /><circle cx="74" cy="123" r="6" /><circle cx="59" cy="118" r="6" /><circle cx="44" cy="113" r="6" /><circle cx="29" cy="108" r="6" /><circle cx="14" cy="102" r="6" /><circle cx="80" cy="111" r="6" /><circle cx="66" cy="103" r="6" /><circle cx="51" cy="96" r="6" /><circle cx="37" cy="88" r="6" /><circle cx="23" cy="81" r="6" /><circle cx="87" cy="100" r="6" /><circle cx="74" cy="90" r="6" /><circle cx="62" cy="80" r="6" /><circle cx="49" cy="70" r="6" /><circle cx="36" cy="61" r="6" /><circle cx="96" cy="90" r="6" /><circle cx="85" cy="78" r="6" /><circle cx="74" cy="67" r="6" /><circle cx="63" cy="55" r="6" /><circle cx="52" cy="43" r="6" /><circle cx="106" cy="82" r="6" /><circle cx="97" cy="69" r="6" /><circle cx="89" cy="55" r="6" /><circle cx="80" cy="42" r="6" /><circle cx="71" cy="29" r="6" /><circle cx="118" cy="76" r="6" /><circle cx="111" cy="61" r="6" /><circle cx="105" cy="47" r="6" /><circle cx="99" cy="32" r="6" /><circle cx="92" cy="17" r="6" /><circle cx="130" cy="72" r="6" /><circle cx="126" cy="56" r="6" /><circle cx="123" cy="41" r="6" /><circle cx="119" cy="25" r="6" /><circle cx="115" cy="10" r="6" /><circle cx="143" cy="69" r="6" /><circle cx="142" cy="53" r="6" /><circle cx="141" cy="37" r="6" /><circle cx="139" cy="22" r="6" /><circle cx="138" cy="6" r="6" /><circle cx="157" cy="69" r="6" /><circle cx="158" cy="53" r="6" /><circle cx="159" cy="37" r="6" /><circle cx="161" cy="22" r="6" /><circle cx="162" cy="6" r="6" /><circle cx="170" cy="72" r="6" /><circle cx="174" cy="56" r="6" /><circle cx="177" cy="41" r="6" /><circle cx="181" cy="25" r="6" /><circle cx="185" cy="10" r="6" /><circle cx="182" cy="76" r="6" /><circle cx="189" cy="61" r="6" /><circle cx="195" cy="47" r="6" /><circle cx="201" cy="32" r="6" /><circle cx="208" cy="17" r="6" /><circle cx="194" cy="82" r="6" /><circle cx="203" cy="69" r="6" /><circle cx="211" cy="55" r="6" /><circle cx="220" cy="42" r="6" /><circle cx="229" cy="29" r="6" /><circle cx="204" cy="90" r="6" /><circle cx="215" cy="78" r="6" /><circle cx="226" cy="67" r="6" /><circle cx="237" cy="55" r="6" /><circle cx="248" cy="43" r="6" /><circle cx="213" cy="100" r="6" /><circle cx="226" cy="90" r="6" /><circle cx="238" cy="80" r="6" /><circle cx="251" cy="70" r="6" /><circle cx="264" cy="61" r="6" /><circle cx="220" cy="111" r="6" /><circle cx="234" cy="103" r="6" /><circle cx="249" cy="96" r="6" /><circle cx="263" cy="88" r="6" /><circle cx="277" cy="81" r="6" /><circle cx="226" cy="123" r="6" /><circle cx="241" cy="118" r="6" /><circle cx="256" cy="113" r="6" /><circle cx="271" cy="108" r="6" /><circle cx="286" cy="102" r="6" /><circle cx="229" cy="136" r="6" /><circle cx="245" cy="133" r="6" /><circle cx="260" cy="131" r="6" /><circle cx="276" cy="128" r="6" /><circle cx="292" cy="125" r="6" /><circle cx="230" cy="149" r="6" /><circle cx="246" cy="149" r="6" /><circle cx="262" cy="149" r="6" /><circle cx="278" cy="149" r="6" /><circle cx="294" cy="149" r="6" /></g><g><circle data-id="senate_seat_1" cx="70" cy="149" r="6" /><circle data-id="senate_seat_2" cx="54" cy="149" r="6" /><circle data-id="senate_seat_3" cx="38" cy="149" r="6" /><circle data-id="senate_seat_4" cx="22" cy="149" r="6" /><circle data-id="senate_seat_5" cx="6" cy="149" r="6" /><circle data-id="senate_seat_6" cx="71" cy="136" r="6" /><circle data-id="senate_seat_7" cx="55" cy="133" r="6" /><circle data-id="senate_seat_8" cx="40" cy="131" r="6" /><circle data-id="senate_seat_9" cx="24" cy="128" r="6" /><circle data-id="senate_seat_10" cx="8" cy="125" r="6" /><circle data-id="senate_seat_11" cx="74" cy="123" r="6" /><circle data-id="senate_seat_12" cx="59" cy="118" r="6" /><circle data-id="senate_seat_13" cx="44" cy="113" r="6" /><circle data-id="senate_seat_14" cx="29" cy="108" r="6" /><circle data-id="senate_seat_15" cx="14" cy="102" r="6" /><circle data-id="senate_seat_16" cx="80" cy="111" r="6" /><circle data-id="senate_seat_17" cx="66" cy="103" r="6" /><circle data-id="senate_seat_18" cx="51" cy="96" r="6" /><circle data-id="senate_seat_19" cx="37" cy="88" r="6" /><circle data-id="senate_seat_20" cx="23" cy="81" r="6" /><circle data-id="senate_seat_21" cx="87" cy="100" r="6" /><circle data-id="senate_seat_22" cx="74" cy="90" r="6" /><circle data-id="senate_seat_23" cx="62" cy="80" r="6" /><circle data-id="senate_seat_24" cx="49" cy="70" r="6" /><circle data-id="senate_seat_25" cx="36" cy="61" r="6" /><circle data-id="senate_seat_26" cx="96" cy="90" r="6" /><circle data-id="senate_seat_27" cx="85" cy="78" r="6" /><circle data-id="senate_seat_28" cx="74" cy="67" r="6" /><circle data-id="senate_seat_29" cx="63" cy="55" r="6" /><circle data-id="senate_seat_30" cx="52" cy="43" r="6" /><circle data-id="senate_seat_31" cx="106" cy="82" r="6" /><circle data-id="senate_seat_32" cx="97" cy="69" r="6" /><circle data-id="senate_seat_33" cx="89" cy="55" r="6" /><circle data-id="senate_seat_34" cx="80" cy="42" r="6" /><circle data-id="senate_seat_35" cx="71" cy="29" r="6" /><circle data-id="senate_seat_36" cx="118" cy="76" r="6" /><circle data-id="senate_seat_37" cx="111" cy="61" r="6" /><circle data-id="senate_seat_38" cx="105" cy="47" r="6" /><circle data-id="senate_seat_39" cx="99" cy="32" r="6" /><circle data-id="senate_seat_40" cx="92" cy="17" r="6" /><circle data-id="senate_seat_41" cx="130" cy="72" r="6" /><circle data-id="senate_seat_42" cx="126" cy="56" r="6" /><circle data-id="senate_seat_43" cx="123" cy="41" r="6" /><circle data-id="senate_seat_44" cx="119" cy="25" r="6" /><circle data-id="senate_seat_45" cx="115" cy="10" r="6" /><circle data-id="senate_seat_46" cx="143" cy="69" r="6" /><circle data-id="senate_seat_47" cx="142" cy="53" r="6" /><circle data-id="senate_seat_48" cx="141" cy="37" r="6" /><circle data-id="senate_seat_49" cx="139" cy="22" r="6" /><circle data-id="senate_seat_50" cx="138" cy="6" r="6" /><circle data-id="senate_seat_51" cx="157" cy="69" r="6" /><circle data-id="senate_seat_52" cx="158" cy="53" r="6" /><circle data-id="senate_seat_53" cx="159" cy="37" r="6" /><circle data-id="senate_seat_54" cx="161" cy="22" r="6" /><circle data-id="senate_seat_55" cx="162" cy="6" r="6" /><circle data-id="senate_seat_56" cx="170" cy="72" r="6" /><circle data-id="senate_seat_57" cx="174" cy="56" r="6" /><circle data-id="senate_seat_58" cx="177" cy="41" r="6" /><circle data-id="senate_seat_59" cx="181" cy="25" r="6" /><circle data-id="senate_seat_60" cx="185" cy="10" r="6" /><circle data-id="senate_seat_61" cx="182" cy="76" r="6" /><circle data-id="senate_seat_62" cx="189" cy="61" r="6" /><circle data-id="senate_seat_63" cx="195" cy="47" r="6" /><circle data-id="senate_seat_64" cx="201" cy="32" r="6" /><circle data-id="senate_seat_65" cx="208" cy="17" r="6" /><circle data-id="senate_seat_66" cx="194" cy="82" r="6" /><circle data-id="senate_seat_67" cx="203" cy="69" r="6" /><circle data-id="senate_seat_68" cx="211" cy="55" r="6" /><circle data-id="senate_seat_69" cx="220" cy="42" r="6" /><circle data-id="senate_seat_70" cx="229" cy="29" r="6" /><circle data-id="senate_seat_71" cx="204" cy="90" r="6" /><circle data-id="senate_seat_72" cx="215" cy="78" r="6" /><circle data-id="senate_seat_73" cx="226" cy="67" r="6" /><circle data-id="senate_seat_74" cx="237" cy="55" r="6" /><circle data-id="senate_seat_75" cx="248" cy="43" r="6" /><circle data-id="senate_seat_76" cx="213" cy="100" r="6" /><circle data-id="senate_seat_77" cx="226" cy="90" r="6" /><circle data-id="senate_seat_78" cx="238" cy="80" r="6" /><circle data-id="senate_seat_79" cx="251" cy="70" r="6" /><circle data-id="senate_seat_80" cx="264" cy="61" r="6" /><circle data-id="senate_seat_81" cx="220" cy="111" r="6" /><circle data-id="senate_seat_82" cx="234" cy="103" r="6" /><circle data-id="senate_seat_83" cx="249" cy="96" r="6" /><circle data-id="senate_seat_84" cx="263" cy="88" r="6" /><circle data-id="senate_seat_85" cx="277" cy="81" r="6" /><circle data-id="senate_seat_86" cx="226" cy="123" r="6" /><circle data-id="senate_seat_87" cx="241" cy="118" r="6" /><circle data-id="senate_seat_88" cx="256" cy="113" r="6" /><circle data-id="senate_seat_89" cx="271" cy="108" r="6" /><circle data-id="senate_seat_90" cx="286" cy="102" r="6" /><circle data-id="senate_seat_91" cx="229" cy="136" r="6" /><circle data-id="senate_seat_92" cx="245" cy="133" r="6" /><circle data-id="senate_seat_93" cx="260" cy="131" r="6" /><circle data-id="senate_seat_94" cx="276" cy="128" r="6" /><circle data-id="senate_seat_95" cx="292" cy="125" r="6" /><circle data-id="senate_seat_96" cx="230" cy="149" r="6" /><circle data-id="senate_seat_97" cx="246" cy="149" r="6" /><circle data-id="senate_seat_98" cx="262" cy="149" r="6" /><circle data-id="senate_seat_99" cx="278" cy="149" r="6" /><circle data-id="senate_seat_100" cx="294" cy="149" r="6" /></g></svg></div>'
}),
define("module/components/us2016/data/historical-es6", ["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = {
        2016: {
            senate: {
                dem: 34,
                gop: 30,
                ind: 2
            },
            house: {
                dem: 0,
                gop: 0,
                ind: 0
            }
        },
        2014: {
            senate: {
                dem: 44,
                gop: 54,
                ind: 2
            },
            house: {
                dem: 192,
                gop: 243,
                ind: 0
            }
        },
        2012: {
            senate: {
                dem: 53,
                gop: 45,
                ind: 2
            },
            house: {
                dem: 201,
                gop: 234,
                ind: 0
            }
        },
        2010: {
            senate: {
                dem: 51,
                gop: 47,
                ind: 2
            },
            house: {
                dem: 193,
                gop: 242,
                ind: 0
            }
        }
    };
    e.default = t
}),
define("module/components/us2016/congress_graph-es6", ["exports", "module/bootstrap", "module/components/politics/politicsTabs", "./data/house-es6", "./data/senate-es6", "./data/historical-es6"], function(e, t, n, i, r, c) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return _.init.apply(_, t)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.init = o;
    var s = a(t)
      , l = a(n)
      , u = a(i)
      , d = a(r)
      , h = a(c)
      , p = "data_components/us_congressional_results_data"
      , f = "us2016-congress-results"
      , y = s.default.$
      , m = s.default.pubsub
      , g = {
        senate: d.default,
        house: u.default
    }
      , _ = {
        animate: !1,
        animatedClass: f + "__party--animated",
        nonAnimatedClass: f + "__party--non-animated",
        init: function(e) {
            var t = y("#" + e.id);
            l.default.handleSuccess(e),
            m.on("tabs:activate:congress2016", function() {
                return _.disableAnimation(t)
            }),
            require.specified(p) && require([p], function(e) {
                _.animate = !0,
                _.render(t, 2016, e)
            }),
            _.render(t, 2014),
            _.render(t, 2012),
            _.render(t, 2010)
        },
        render: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , i = ["senate", "house"]
              , r = ["dem", "gop", "ind"]
              , c = n || h.default[t]
              , a = {
                senate: {
                    container: _.initSVG(e, t, "senate"),
                    data: c.senate,
                    interval: _.calculateInterval(c.senate, r)
                },
                house: {
                    container: _.initSVG(e, t, "house"),
                    data: c.house,
                    interval: _.calculateInterval(c.house, r)
                }
            };
            i.map(function(e) {
                r.map(function(t) {
                    return _.renderParty(t, e, a[e])
                })
            })
        },
        initSVG: function(e, t, n) {
            return e.find("." + f + "--" + t + " ." + f + "__result--" + n + " ." + f + "__svg-container").prepend(g[n]).addClass(f + "__svg-container--initialised")
        },
        addPartyClass: function(e, t, n, i, r, c) {
            var a = e.find('circle[data-id="' + t + "_seat_" + i + '"]')
              , o = f + "__party " + f + "__party--" + n;
            return void 0 !== c ? (o += " " + _.animatedClass,
            a.css("animation-delay", c + "ms")) : o += " " + _.nonAnimatedClass,
            a.attr("class", o),
            a
        },
        getTotal: function(e) {
            return "senate" === e ? 100 : 435
        },
        renderParty: function(e, t, n) {
            var i = n.container
              , r = n.data
              , c = n.interval
              , a = _.getTotal(t);
            r[e] && r[e] > 0 && _.parties.render(e, t, i, r, a, c)
        },
        parties: {
            dem: function(e, t, n, i, r) {
                var c = n.dem
                  , a = n.dem_kept ? n.dem_kept : 1;
                _.renderLeftToRight(1, c, t, e, "dem", a, r)
            },
            gop: function(e, t, n, i, r) {
                var c = i
                  , a = i - n.gop + 1
                  , o = n.gop_kept ? i - n.gop_kept : c;
                _.renderRightToLeft(c, a, t, e, "gop", o, r)
            },
            ind: function(e, t, n, i, r) {
                var c = parseInt(((i - n.dem - n.gop - n.ind) / 2).toFixed(), 10) + 1
                  , a = n.dem + c
                  , o = n.dem + c + n.ind - 1
                  , s = n.ind_kept ? a + n.ind_kept - 1 : a;
                _.renderLeftToRight(a, o, t, e, "ind", s, r)
            },
            render: function(e) {
                for (var t, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                    i[r - 1] = arguments[r];
                return _.parties[e] && (t = _.parties)[e].apply(t, i)
            }
        },
        renderLeftToRight: function(e, t, n, i, r, c, a) {
            if (_.animate) {
                for (var o = e; o <= c; o++)
                    _.addPartyClass(n, i, r, o, t);
                for (var s = c; s <= t; s++) {
                    var l = _.calculateDelay(a, s - c);
                    _.addPartyClass(n, i, r, s, t, l)
                }
            } else
                for (var u = e; u <= t; u++)
                    _.addPartyClass(n, i, r, u, t)
        },
        renderRightToLeft: function(e, t, n, i, r, c, a) {
            if (_.animate) {
                for (var o = e; o >= c; o--)
                    _.addPartyClass(n, i, r, o, t);
                for (var s = c; s >= t; s--) {
                    var l = _.calculateDelay(a, c + 1 - s);
                    _.addPartyClass(n, i, r, s, t, l)
                }
            } else
                for (var u = e; u >= t; u--)
                    _.addPartyClass(n, i, r, u, t)
        },
        calculateInterval: function(e, t) {
            var n = t.map(function(t) {
                return e[t + "_won"] ? e[t + "_won"] : e[t]
            }).filter(function(e) {
                return void 0 !== e
            });
            return 1200 / Math.max.apply(Math, n)
        },
        calculateDelay: function(e, t) {
            return e * t
        },
        disableAnimation: function(e) {
            e.find("." + _.animatedClass).attr("class", function(e, t) {
                return t.replace(_.animatedClass, _.nonAnimatedClass)
            })
        }
    };
    e.default = _
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define("module/components/us2016/map-dependencies/vendor_manual/autocomplete", ["jquery"], e) : e("object" == typeof exports && "function" == typeof require ? require("jquery") : jQuery)
}(function(e) {
    "use strict";
    function t(n, i) {
        var r = function() {}
          , c = this
          , a = {
            ajaxSettings: {},
            autoSelectFirst: !1,
            appendTo: document.body,
            serviceUrl: null,
            lookup: null,
            onSelect: null,
            width: "auto",
            minChars: 1,
            maxHeight: 300,
            deferRequestBy: 0,
            params: {},
            formatResult: t.formatResult,
            delimiter: null,
            zIndex: 9999,
            type: "GET",
            noCache: !1,
            onSearchStart: r,
            onSearchComplete: r,
            onSearchError: r,
            preserveInput: !1,
            containerClass: "autocomplete-suggestions",
            tabDisabled: !1,
            dataType: "text",
            currentRequest: null,
            triggerSelectOnValidInput: !0,
            preventBadQueries: !0,
            lookupFilter: function(e, t, n) {
                return -1 !== e.value.toLowerCase().indexOf(n)
            },
            paramName: "query",
            transformResult: function(t) {
                return "string" == typeof t ? e.parseJSON(t) : t
            },
            showNoSuggestionNotice: !1,
            noSuggestionNotice: "No results",
            orientation: "bottom",
            forceFixPosition: !1
        };
        c.element = n,
        c.el = e(n),
        c.suggestions = [],
        c.badQueries = [],
        c.selectedIndex = -1,
        c.currentValue = c.element.value,
        c.intervalId = 0,
        c.cachedResponse = {},
        c.onChangeInterval = null,
        c.onChange = null,
        c.isLocal = !1,
        c.suggestionsContainer = null,
        c.noSuggestionsContainer = null,
        c.options = e.extend({}, a, i),
        c.classes = {
            selected: "autocomplete-selected",
            suggestion: "autocomplete-suggestion"
        },
        c.hint = null,
        c.hintValue = "",
        c.selection = null,
        c.initialize(),
        c.setOptions(i)
    }
    var n = function() {
        return {
            escapeRegExChars: function(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            createNode: function(e) {
                var t = document.createElement("div");
                return t.className = e,
                t.style.position = "absolute",
                t.style.display = "none",
                t
            }
        }
    }()
      , i = {
        ESC: 27,
        TAB: 9,
        RETURN: 13,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };
    t.utils = n,
    e.Autocomplete = t,
    t.formatResult = function(e, t) {
        var i = "(" + n.escapeRegExChars(t) + ")";
        return e.value.replace(new RegExp(i,"gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
    }
    ,
    t.prototype = {
        killerFn: null,
        initialize: function() {
            var n, i = this, r = "." + i.classes.suggestion, c = i.classes.selected, a = i.options;
            i.element.setAttribute("autocomplete", "off"),
            i.killerFn = function(t) {
                0 === e(t.target).closest("." + i.options.containerClass).length && (i.killSuggestions(),
                i.disableKillerFn())
            }
            ,
            i.noSuggestionsContainer = e('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),
            i.suggestionsContainer = t.utils.createNode(a.containerClass),
            n = e(i.suggestionsContainer),
            n.appendTo(a.appendTo),
            "auto" !== a.width && n.width(a.width),
            n.on("mouseover.autocomplete", r, function() {
                i.activate(e(this).data("index"))
            }),
            n.on("mouseout.autocomplete", function() {
                i.selectedIndex = -1,
                n.children("." + c).removeClass(c)
            }),
            n.on("click.autocomplete", r, function() {
                i.select(e(this).data("index"))
            }),
            i.fixPositionCapture = function() {
                i.visible && i.fixPosition()
            }
            ,
            e(window).on("resize.autocomplete", i.fixPositionCapture),
            i.el.on("keydown.autocomplete", function(e) {
                i.onKeyPress(e)
            }),
            i.el.on("keyup.autocomplete", function(e) {
                i.onKeyUp(e)
            }),
            i.el.on("blur.autocomplete", function() {
                i.onBlur()
            }),
            i.el.on("focus.autocomplete", function() {
                i.onFocus()
            }),
            i.el.on("change.autocomplete", function(e) {
                i.onKeyUp(e)
            }),
            i.el.on("input.autocomplete", function(e) {
                i.onKeyUp(e)
            })
        },
        onFocus: function() {
            var e = this;
            e.fixPosition(),
            0 === e.options.minChars && 0 === e.el.val().length && e.onValueChange()
        },
        onBlur: function() {
            this.enableKillerFn()
        },
        abortAjax: function() {
            var e = this;
            e.currentRequest && (e.currentRequest.abort(),
            e.currentRequest = null)
        },
        setOptions: function(t) {
            var n = this
              , i = n.options;
            e.extend(i, t),
            n.isLocal = e.isArray(i.lookup),
            n.isLocal && (i.lookup = n.verifySuggestionsFormat(i.lookup)),
            i.orientation = n.validateOrientation(i.orientation, "bottom"),
            e(n.suggestionsContainer).css({
                "max-height": i.maxHeight + "px",
                width: i.width + "px",
                "z-index": i.zIndex
            })
        },
        clearCache: function() {
            this.cachedResponse = {},
            this.badQueries = []
        },
        clear: function() {
            this.clearCache(),
            this.currentValue = "",
            this.suggestions = []
        },
        disable: function() {
            var e = this;
            e.disabled = !0,
            clearInterval(e.onChangeInterval),
            e.abortAjax()
        },
        enable: function() {
            this.disabled = !1
        },
        fixPosition: function() {
            var t = this
              , n = e(t.suggestionsContainer)
              , i = n.parent().get(0);
            if (i === document.body || t.options.forceFixPosition) {
                var r = t.options.orientation
                  , c = n.outerHeight()
                  , a = t.el.outerHeight()
                  , o = t.el.offset()
                  , s = {
                    top: o.top,
                    left: o.left
                };
                if ("auto" === r) {
                    var l = e(window).height()
                      , u = e(window).scrollTop()
                      , d = -u + o.top - c
                      , h = u + l - (o.top + a + c);
                    r = Math.max(d, h) === d ? "top" : "bottom"
                }
                if (s.top += "top" === r ? -c : a,
                i !== document.body) {
                    var p, f = n.css("opacity");
                    t.visible || n.css("opacity", 0).show(),
                    p = n.offsetParent().offset(),
                    s.top -= p.top,
                    s.left -= p.left,
                    t.visible || n.css("opacity", f).hide()
                }
                "auto" === t.options.width && (s.width = t.el.outerWidth() - 2 + "px"),
                n.css(s)
            }
        },
        enableKillerFn: function() {
            var t = this;
            e(document).on("click.autocomplete", t.killerFn)
        },
        disableKillerFn: function() {
            var t = this;
            e(document).off("click.autocomplete", t.killerFn)
        },
        killSuggestions: function() {
            var e = this;
            e.stopKillSuggestions(),
            e.intervalId = window.setInterval(function() {
                e.visible && (e.el.val(e.currentValue),
                e.hide()),
                e.stopKillSuggestions()
            }, 50)
        },
        stopKillSuggestions: function() {
            window.clearInterval(this.intervalId)
        },
        isCursorAtEnd: function() {
            var e, t = this, n = t.el.val().length, i = t.element.selectionStart;
            return "number" == typeof i ? i === n : !document.selection || (e = document.selection.createRange(),
            e.moveStart("character", -n),
            n === e.text.length)
        },
        onKeyPress: function(e) {
            var t = this;
            if (!t.disabled && !t.visible && e.which === i.DOWN && t.currentValue)
                return void t.suggest();
            if (!t.disabled && t.visible) {
                switch (e.which) {
                case i.ESC:
                    t.el.val(t.currentValue),
                    t.hide();
                    break;
                case i.RIGHT:
                    if (t.hint && t.options.onHint && t.isCursorAtEnd()) {
                        t.selectHint();
                        break
                    }
                    return;
                case i.TAB:
                    if (t.hint && t.options.onHint)
                        return void t.selectHint();
                    if (-1 === t.selectedIndex)
                        return void t.hide();
                    if (t.select(t.selectedIndex),
                    !1 === t.options.tabDisabled)
                        return;
                    break;
                case i.RETURN:
                    if (-1 === t.selectedIndex)
                        return void t.hide();
                    t.select(t.selectedIndex);
                    break;
                case i.UP:
                    t.moveUp();
                    break;
                case i.DOWN:
                    t.moveDown();
                    break;
                default:
                    return
                }
                e.stopImmediatePropagation(),
                e.preventDefault()
            }
        },
        onKeyUp: function(e) {
            var t = this;
            if (!t.disabled) {
                switch (e.which) {
                case i.UP:
                case i.DOWN:
                    return
                }
                clearInterval(t.onChangeInterval),
                t.currentValue !== t.el.val() && (t.findBestHint(),
                t.options.deferRequestBy > 0 ? t.onChangeInterval = setInterval(function() {
                    t.onValueChange()
                }, t.options.deferRequestBy) : t.onValueChange())
            }
        },
        onValueChange: function() {
            var t = this
              , n = t.options
              , i = t.el.val()
              , r = t.getQuery(i);
            return t.selection && t.currentValue !== r && (t.selection = null,
            (n.onInvalidateSelection || e.noop).call(t.element)),
            clearInterval(t.onChangeInterval),
            t.currentValue = i,
            t.selectedIndex = -1,
            n.triggerSelectOnValidInput && t.isExactMatch(r) ? void t.select(0) : void (r.length < n.minChars ? t.hide() : t.getSuggestions(r))
        },
        isExactMatch: function(e) {
            var t = this.suggestions;
            return 1 === t.length && t[0].value.toLowerCase() === e.toLowerCase()
        },
        getQuery: function(t) {
            var n, i = this.options.delimiter;
            return i ? (n = t.split(i),
            e.trim(n[n.length - 1])) : t
        },
        getSuggestionsLocal: function(t) {
            var n, i = this, r = i.options, c = t.toLowerCase(), a = r.lookupFilter, o = parseInt(r.lookupLimit, 10);
            return n = {
                suggestions: e.grep(r.lookup, function(e) {
                    return a(e, t, c)
                })
            },
            o && n.suggestions.length > o && (n.suggestions = n.suggestions.slice(0, o)),
            n
        },
        getSuggestions: function(t) {
            var n, i, r, c, a = this, o = a.options, s = o.serviceUrl;
            if (o.params[o.paramName] = t,
            i = o.ignoreParams ? null : o.params,
            !1 !== o.onSearchStart.call(a.element, o.params)) {
                if (e.isFunction(o.lookup))
                    return void o.lookup(t, function(e) {
                        a.suggestions = e.suggestions,
                        a.suggest(),
                        o.onSearchComplete.call(a.element, t, e.suggestions)
                    });
                a.isLocal ? n = a.getSuggestionsLocal(t) : (e.isFunction(s) && (s = s.call(a.element, t)),
                r = s + "?" + e.param(i || {}),
                n = a.cachedResponse[r]),
                n && e.isArray(n.suggestions) ? (a.suggestions = n.suggestions,
                a.suggest(),
                o.onSearchComplete.call(a.element, t, n.suggestions)) : a.isBadQuery(t) ? o.onSearchComplete.call(a.element, t, []) : (a.abortAjax(),
                c = {
                    url: s,
                    data: i,
                    type: o.type,
                    dataType: o.dataType
                },
                e.extend(c, o.ajaxSettings),
                a.currentRequest = e.ajax(c).done(function(e) {
                    var n;
                    a.currentRequest = null,
                    n = o.transformResult(e, t),
                    a.processResponse(n, t, r),
                    o.onSearchComplete.call(a.element, t, n.suggestions)
                }).fail(function(e, n, i) {
                    o.onSearchError.call(a.element, t, e, n, i)
                }))
            }
        },
        isBadQuery: function(e) {
            if (!this.options.preventBadQueries)
                return !1;
            for (var t = this.badQueries, n = t.length; n--; )
                if (0 === e.indexOf(t[n]))
                    return !0;
            return !1
        },
        hide: function() {
            var t = this
              , n = e(t.suggestionsContainer);
            e.isFunction(t.options.onHide) && t.visible && t.options.onHide.call(t.element, n),
            t.visible = !1,
            t.selectedIndex = -1,
            clearInterval(t.onChangeInterval),
            e(t.suggestionsContainer).hide(),
            t.signalHint(null)
        },
        suggest: function() {
            if (0 === this.suggestions.length)
                return void (this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide());
            var t, n = this, i = n.options, r = i.groupBy, c = i.formatResult, a = n.getQuery(n.currentValue), o = n.classes.suggestion, s = n.classes.selected, l = e(n.suggestionsContainer), u = e(n.noSuggestionsContainer), d = i.beforeRender, h = "", p = function(e, n) {
                var i = e.data[r];
                return t === i ? "" : '<div class="autocomplete-group"><strong>' + (t = i) + "</strong></div>"
            };
            return i.triggerSelectOnValidInput && n.isExactMatch(a) ? void n.select(0) : (e.each(n.suggestions, function(e, t) {
                r && (h += p(t, 0)),
                h += '<div class="' + o + '" data-index="' + e + '">' + c(t, a) + "</div>"
            }),
            this.adjustContainerWidth(),
            u.detach(),
            l.html(h),
            e.isFunction(d) && d.call(n.element, l),
            n.fixPosition(),
            l.show(),
            i.autoSelectFirst && (n.selectedIndex = 0,
            l.scrollTop(0),
            l.children("." + o).first().addClass(s)),
            n.visible = !0,
            void n.findBestHint())
        },
        noSuggestions: function() {
            var t = this
              , n = e(t.suggestionsContainer)
              , i = e(t.noSuggestionsContainer);
            this.adjustContainerWidth(),
            i.detach(),
            n.empty(),
            n.append(i),
            t.fixPosition(),
            n.show(),
            t.visible = !0
        },
        adjustContainerWidth: function() {
            var t, n = this, i = n.options, r = e(n.suggestionsContainer);
            "auto" === i.width && (t = n.el.outerWidth() - 2,
            r.width(t > 0 ? t : 300))
        },
        findBestHint: function() {
            var t = this
              , n = t.el.val().toLowerCase()
              , i = null;
            n && (e.each(t.suggestions, function(e, t) {
                var r = 0 === t.value.toLowerCase().indexOf(n);
                return r && (i = t),
                !r
            }),
            t.signalHint(i))
        },
        signalHint: function(t) {
            var n = ""
              , i = this;
            t && (n = i.currentValue + t.value.substr(i.currentValue.length)),
            i.hintValue !== n && (i.hintValue = n,
            i.hint = t,
            (this.options.onHint || e.noop)(n))
        },
        verifySuggestionsFormat: function(t) {
            return t.length && "string" == typeof t[0] ? e.map(t, function(e) {
                return {
                    value: e,
                    data: null
                }
            }) : t
        },
        validateOrientation: function(t, n) {
            return t = e.trim(t || "").toLowerCase(),
            -1 === e.inArray(t, ["auto", "bottom", "top"]) && (t = n),
            t
        },
        processResponse: function(e, t, n) {
            var i = this
              , r = i.options;
            e.suggestions = i.verifySuggestionsFormat(e.suggestions),
            r.noCache || (i.cachedResponse[n] = e,
            r.preventBadQueries && 0 === e.suggestions.length && i.badQueries.push(t)),
            t === i.getQuery(i.currentValue) && (i.suggestions = e.suggestions,
            i.suggest())
        },
        activate: function(t) {
            var n, i = this, r = i.classes.selected, c = e(i.suggestionsContainer), a = c.find("." + i.classes.suggestion);
            return c.find("." + r).removeClass(r),
            i.selectedIndex = t,
            -1 !== i.selectedIndex && a.length > i.selectedIndex ? (n = a.get(i.selectedIndex),
            e(n).addClass(r),
            n) : null
        },
        selectHint: function() {
            var t = this
              , n = e.inArray(t.hint, t.suggestions);
            t.select(n)
        },
        select: function(e) {
            var t = this;
            t.hide(),
            t.onSelect(e)
        },
        moveUp: function() {
            var t = this;
            if (-1 !== t.selectedIndex)
                return 0 === t.selectedIndex ? (e(t.suggestionsContainer).children().first().removeClass(t.classes.selected),
                t.selectedIndex = -1,
                t.el.val(t.currentValue),
                void t.findBestHint()) : void t.adjustScroll(t.selectedIndex - 1)
        },
        moveDown: function() {
            var e = this;
            e.selectedIndex !== e.suggestions.length - 1 && e.adjustScroll(e.selectedIndex + 1)
        },
        adjustScroll: function(t) {
            var n = this
              , i = n.activate(t);
            if (i) {
                var r, c, a, o = e(i).outerHeight();
                r = i.offsetTop,
                c = e(n.suggestionsContainer).scrollTop(),
                a = c + n.options.maxHeight - o,
                c > r ? e(n.suggestionsContainer).scrollTop(r) : r > a && e(n.suggestionsContainer).scrollTop(r - n.options.maxHeight + o),
                n.options.preserveInput || n.el.val(n.getValue(n.suggestions[t].value)),
                n.signalHint(null)
            }
        },
        onSelect: function(t) {
            var n = this
              , i = n.options.onSelect
              , r = n.suggestions[t];
            n.currentValue = n.getValue(r.value),
            n.currentValue === n.el.val() || n.options.preserveInput || n.el.val(n.currentValue),
            n.signalHint(null),
            n.suggestions = [],
            n.selection = r,
            e.isFunction(i) && i.call(n.element, r)
        },
        getValue: function(e) {
            var t, n, i = this, r = i.options.delimiter;
            return r ? (t = i.currentValue,
            n = t.split(r),
            1 === n.length ? e : t.substr(0, t.length - n[n.length - 1].length) + e) : e
        },
        dispose: function() {
            var t = this;
            t.el.off(".autocomplete").removeData("autocomplete"),
            t.disableKillerFn(),
            e(window).off("resize.autocomplete", t.fixPositionCapture),
            e(t.suggestionsContainer).remove()
        }
    },
    e.fn.autocomplete = e.fn.devbridgeAutocomplete = function(n, i) {
        var r = "autocomplete";
        return 0 === arguments.length ? this.first().data(r) : this.each(function() {
            var c = e(this)
              , a = c.data(r);
            "string" == typeof n ? a && "function" == typeof a[n] && a[n](i) : (a && a.dispose && a.dispose(),
            a = new t(this,n),
            c.data(r, a))
        })
    }
}),
function(e, t) {
    "use strict";
    var n, i, r, c = !1, a = function(e) {
        try {
            this.handleDependencies(e),
            i = e.vocab || {},
            r = i.search_error || "Sorry, we don't recognise this location. Please enter a UK postcode, council name or NI constituency",
            this.$autocompleteInput = n(e.input),
            this.councilsData = e.data,
            this.callback = e.onSelect,
            this.overrideResults = e.overrideResults || function(e, t) {
                return e
            }
            ,
            this.onSearchComplete = e.onSearchComplete || function(e, t) {}
            ,
            this.onInvalidateSelection = e.onInvalidateSelection || function() {}
            ,
            this.lastRequestedPostcode = "",
            this.initAutosuggest(),
            this.initListeners()
        } catch (e) {
            console.error("Error: tried to include `news-vj-postcode-lookup` without pulling in `" + e + "` first.")
        }
    };
    a.prototype = {
        handleDependencies: function(t) {
            if (!(n = t.$ || e.$ || e.jQuery))
                throw "jQuery";
            if (n.on = n.on || function() {}
            ,
            n.emit = n.emit || function() {}
            ,
            !n("window").autocomplete)
                throw "devbridge-autocomplete";
            if (this.api = !1,
            this.searchForPostcodes = !1 !== t.searchForPostcodes,
            this.searchForPartialPostcodes = !1 !== t.searchForPartialPostcodes && this.searchForPostcodes,
            this.searchForPostcodes || this.searchForPartialPostcodes) {
                if (!t.LocServicesApi)
                    throw "locservices-core-js";
                this.api = new t.LocServicesApi
            }
        },
        initListeners: function() {
            this.$autocompleteInput.closest("form").on("submit", function(e) {
                return e.preventDefault(),
                c ? (this.triggerCallback(c),
                n.emit("region-chosen--enter", c),
                this.resetInput()) : this.warning(),
                !1
            }
            .bind(this)),
            this.$autocompleteInput.on("click", function() {
                n(".autocomplete-suggestions").show()
            }),
            this.$autocompleteInput.on("keydown", function(e) {
                13 === e.keyCode && !c && setTimeout(function() {
                    n(".autocomplete-suggestions").show()
                }, 30)
            })
        },
        triggerCallback: function(e) {
            this.callback(e, this.councilsData[e]),
            this.resetInput(),
            n.emit("region-chosen", e),
            n.emit("region:chosen:select", e)
        },
        warning: function(e) {
            e = e || r,
            n(".news-vj-postcode-lookup__screen-reader-announcement").text(e),
            n(".autocomplete-suggestions").html('<div class="autocomplete-no-suggestion"><p>' + e + "</p></div>").show()
        },
        resetInput: function() {
            n(".news-vj-postcode-lookup__button").prop("disabled", !0),
            n(".autocomplete-suggestions").html(""),
            n(".news-vj-postcode-lookup__screen-reader-announcement").text(""),
            this.$autocompleteInput.val(""),
            setTimeout(function() {
                this.$autocompleteInput.val("")
            }
            .bind(this), 100)
        },
        trackChosenGssid: function(e) {
            var t = 1 === e.suggestions.length && e.suggestions[0].data.key
              , a = !t && this.seeIfUserTypedFullMatch()
              , o = ""
              , s = i.search_screenreader_autosuggest_help || " results are available, use up and down arrow keys to navigate.";
            c = t || a,
            o = e.suggestions.length > 0 ? e.suggestions.length + s : r,
            n(".news-vj-postcode-lookup__screen-reader-announcement").text(o),
            n(".news-vj-postcode-lookup__button").prop("disabled", !1 === c)
        },
        seeIfUserTypedFullMatch: function() {
            var e = this.$autocompleteInput.val();
            for (var t in this.councilsData) {
                var n = this.councilsData[t];
                if (n.name && n.name.toLowerCase() === e.toLowerCase())
                    return t
            }
            return !1
        },
        initAutosuggest: function() {
            var e = this;
            this.$autocompleteInput.autocomplete({
                minChars: 2,
                autoSelectFirst: !1,
                triggerSelectOnValidInput: !1,
                appendTo: ".news-vj-postcode-lookup__results-view",
                onInvalidateSelection: e.onInvalidateSelection,
                tabDisabled: !0,
                showNoSuggestionNotice: !1,
                noSuggestionNotice: "<p>" + r + "</p>",
                zIndex: "initial",
                maxHeight: "141",
                onSearchComplete: function(t, n) {
                    n.length < 1 && t.length > 2 && e.warning(),
                    e.onSearchComplete(t, n)
                },
                lookup: function(t, i) {
                    var r = function(n) {
                        n = {
                            suggestions: e.overrideResults(n, t)
                        },
                        e.trackChosenGssid(n),
                        i(n)
                    }
                      , c = !!e.searchForPostcodes && e.sanitisePostcode(t);
                    c && e.isPostcode(c) ? (e.postcodeLookup(c, r),
                    n.emit("region-search--postcode")) : e.containsLastSuccessfulPostcode(c) ? e.showCachedResults(r) : (e.findLocalMatches(t, r),
                    n.emit("region-search--name"))
                },
                onSelect: function(t) {
                    e.triggerCallback(t.data.key),
                    n.emit("region-chosen--select", t.data.key),
                    e.$autocompleteInput.val("")
                },
                formatResult: function(t, n) {
                    var i = e.autosuggestFormatResult(t, n);
                    return '<a class="off-screen">' + t.value + '</a><span aria-hidden="true">' + i + "</span>"
                }
            })
        },
        autosuggestFormatResult: function(e, t) {
            var n = "(" + function(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }(t) + ")";
            return e.value.replace(new RegExp(n,"gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
        },
        findLocalMatches: function(e, t) {
            var n = {};
            for (var i in this.councilsData)
                if (this.councilsData.hasOwnProperty(i)) {
                    var r = this.councilsData[i];
                    this.isMatch(e, r.name) && (n[i] = r)
                }
            t(this.convertToResults(n))
        },
        isMatch: function(e, t) {
            return t = this.prepareForFuzzyMatch(t),
            e = this.prepareForFuzzyMatch(e),
            -1 !== t.indexOf(e)
        },
        prepareForFuzzyMatch: function(e) {
            return e = e || "",
            e.toLowerCase().replace(/-/g, " ").replace(/'/g, "")
        },
        convertToResults: function(e) {
            var t = []
              , i = this;
            return n.each(e, function(e, n) {
                t.push(i.convertToAutosuggestFormat(e, n))
            }),
            t
        },
        convertLocationServicesResult: function(e) {
            var t = this
              , i = [];
            return n(e).each(function() {
                if (t.isValidGssid(this.data.entityCode)) {
                    var e = t.councilsData[this.externalId];
                    e ? i.push(t.convertToAutosuggestFormat(this.externalId, e)) : t.warning('Error: could not find council ID "' + this.externalId + '" in the data module')
                }
            }),
            i
        },
        isValidGssid: function(e) {
            return e.match("W06|S12|N06|E[0-1][0-9]")
        },
        convertToAutosuggestFormat: function(e, t) {
            return {
                value: t.name,
                data: {
                    key: e,
                    data: t
                }
            }
        },
        isPostcode: function(e) {
            return e.length < 8 && (this.isFullPostcode(e) || this.isPartialPostcode(e))
        },
        isFullPostcode: function(e) {
            return /GIR 0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]|[A-HK-Y][0-9]([0-9]|[ABEHMNPRV-Y]))|[0-9][A-HJKPS-UW]) *[0-9][ABD-HJLNP-UW-Z]{2}/.test(e)
        },
        isPartialPostcode: function(e) {
            return null !== e.match(/[0-9]/)
        },
        isGibraltar: function(e) {
            return "GX111AA" === e
        },
        handleGibraltar: function(e) {
            c = "BS0005003",
            e([this.convertToAutosuggestFormat(c, this.councilsData[c])])
        },
        isNorthernIreland: function(e) {
            return /^BT/.test(e)
        },
        sanitisePostcode: function(e) {
            return e.toUpperCase().replace(/ /g, "")
        },
        postcodeLookup: function(e, t) {
            var r = this
              , c = "english" === i.language ? "en" : "cy"
              , a = "council";
            return this.isFullPostcode(e) || this.searchForPartialPostcodes ? this.isGibraltar(e) ? this.handleGibraltar(t) : (this.isNorthernIreland(e) && (a = "seat"),
            this.showAjaxLoadingSpinner(),
            this.lastRequestedPostcode = e,
            void this.api.getLocation(e, {
                postcode: e,
                detailTypes: ["gss-" + a],
                params: {
                    rows: 5,
                    lang: c
                },
                success: function(i) {
                    if (r.isCurrentQuery(this.postcode)) {
                        var c = r.convertLocationServicesResult(i.details);
                        r.isFullPostcode(e) && (c = [c[0]]),
                        r.cacheResults(e, c),
                        t(c),
                        n(".autocomplete-suggestions").show(),
                        this.complete()
                    }
                },
                error: function(n) {
                    r.isCurrentQuery(this.postcode) && (r.containsLastSuccessfulPostcode(e) ? r.showCachedResults(t) : e.length > 2 && r.warning(),
                    this.complete())
                },
                complete: function() {
                    r.hideAjaxLoadingSpinner()
                }
            })) : (t([]),
            this.warning(),
            !1)
        },
        showAjaxLoadingSpinner: function() {
            n(".news-vj-postcode-lookup__button").addClass("news-vj-postcode-lookup__button--loading")
        },
        hideAjaxLoadingSpinner: function() {
            n(".news-vj-postcode-lookup__button").removeClass("news-vj-postcode-lookup__button--loading")
        },
        containsLastSuccessfulPostcode: function(e) {
            return e.length < 8 && this.lastSuccessfulPartialPostcode && this.lastSuccessfulPartialPostcode.length > 0 && 0 === e.indexOf(this.lastSuccessfulPartialPostcode)
        },
        cacheResults: function(e, t) {
            this.lastSuccessfulPartialPostcode = e,
            this.lastPartialCouncils = t
        },
        showCachedResults: function(e) {
            e(this.lastPartialCouncils),
            n(".autocomplete-suggestions").show()
        },
        isCurrentQuery: function(e) {
            return e === this.lastRequestedPostcode
        }
    },
    "object" == typeof module && "object" == typeof module.exports ? module.exports = exports = a : "function" == typeof define && define.amd ? define("module/components/us2016/map-dependencies/vendor_manual/lookup", [], function() {
        return a
    }) : "object" == typeof e && (e.LookupModule = a)
}(window, document),
function() {
    function e(e) {
        return e && (e.ownerDocument || e.document || e).documentElement
    }
    function t(e) {
        return e && (e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView)
    }
    function n(e) {
        return e
    }
    function i(e, t, n) {
        return function() {
            var i = n.apply(t, arguments);
            return i === t ? e : i
        }
    }
    function r(e, t) {
        if (t in e)
            return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (var n = 0, i = On.length; i > n; ++n) {
            var r = On[n] + t;
            if (r in e)
                return r
        }
    }
    function c(e, t) {
        for (var n in t)
            Object.defineProperty(e.prototype, n, {
                value: t[n],
                enumerable: !1
            })
    }
    function a() {
        this._ = Object.create(null)
    }
    function o(e) {
        return (e += "") === Fn || e[0] === Hn ? Hn + e : e
    }
    function s(e) {
        return (e += "")[0] === Hn ? e.slice(1) : e
    }
    function l(e) {
        return o(e)in this._
    }
    function u(e) {
        return (e = o(e))in this._ && delete this._[e]
    }
    function d() {
        var e = [];
        for (var t in this._)
            e.push(s(t));
        return e
    }
    function h() {
        var e = 0;
        for (var t in this._)
            ++e;
        return e
    }
    function p() {
        for (var e in this._)
            return !1;
        return !0
    }
    function f() {}
    function y() {}
    function m(e) {
        function t() {
            for (var t, i = n, r = -1, c = i.length; ++r < c; )
                (t = i[r].on) && t.apply(this, arguments);
            return e
        }
        var n = []
          , i = new a;
        return t.on = function(t, r) {
            var c, a = i.get(t);
            return arguments.length < 2 ? a && a.on : (a && (a.on = null,
            n = n.slice(0, c = n.indexOf(a)).concat(n.slice(c + 1)),
            i.remove(t)),
            r && n.push(i.set(t, {
                on: r
            })),
            e)
        }
        ,
        t
    }
    function g() {
        Cn.event.preventDefault()
    }
    function _() {
        for (var e, t = Cn.event; e = t.sourceEvent; )
            t = e;
        return t
    }
    function x(e) {
        for (var t = new y, n = 0, i = arguments.length; ++n < i; )
            t[arguments[n]] = m(t);
        return t.of = function(n, i) {
            return function(r) {
                try {
                    var c = r.sourceEvent = Cn.event;
                    r.target = e,
                    Cn.event = r,
                    t[r.type].apply(n, i)
                } finally {
                    Cn.event = c
                }
            }
        }
        ,
        t
    }
    function v(e) {
        return Ln(e, zn),
        e
    }
    function b(e) {
        return "function" == typeof e ? e : function() {
            return jn(e, this)
        }
    }
    function w(e) {
        return "function" == typeof e ? e : function() {
            return Vn(e, this)
        }
    }
    function M(e, t) {
        function n() {
            this.removeAttribute(e)
        }
        function i() {
            this.removeAttributeNS(e.space, e.local)
        }
        function r() {
            this.setAttribute(e, t)
        }
        function c() {
            this.setAttributeNS(e.space, e.local, t)
        }
        function a() {
            var n = t.apply(this, arguments);
            null == n ? this.removeAttribute(e) : this.setAttribute(e, n)
        }
        function o() {
            var n = t.apply(this, arguments);
            null == n ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n)
        }
        return e = Cn.ns.qualify(e),
        null == t ? e.local ? i : n : "function" == typeof t ? e.local ? o : a : e.local ? c : r
    }
    function S(e) {
        return e.trim().replace(/\s+/g, " ")
    }
    function C(e) {
        return new RegExp("(?:^|\\s+)" + Cn.requote(e) + "(?:\\s+|$)","g")
    }
    function P(e) {
        return (e + "").trim().split(/^|\s+/)
    }
    function k(e, t) {
        function n() {
            for (var n = -1; ++n < r; )
                e[n](this, t)
        }
        function i() {
            for (var n = -1, i = t.apply(this, arguments); ++n < r; )
                e[n](this, i)
        }
        e = P(e).map(E);
        var r = e.length;
        return "function" == typeof t ? i : n
    }
    function E(e) {
        var t = C(e);
        return function(n, i) {
            if (r = n.classList)
                return i ? r.add(e) : r.remove(e);
            var r = n.getAttribute("class") || "";
            i ? (t.lastIndex = 0,
            t.test(r) || n.setAttribute("class", S(r + " " + e))) : n.setAttribute("class", S(r.replace(t, " ")))
        }
    }
    function T(e, t, n) {
        function i() {
            this.style.removeProperty(e)
        }
        function r() {
            this.style.setProperty(e, t, n)
        }
        function c() {
            var i = t.apply(this, arguments);
            null == i ? this.style.removeProperty(e) : this.style.setProperty(e, i, n)
        }
        return null == t ? i : "function" == typeof t ? c : r
    }
    function A(e, t) {
        function n() {
            delete this[e]
        }
        function i() {
            this[e] = t
        }
        function r() {
            var n = t.apply(this, arguments);
            null == n ? delete this[e] : this[e] = n
        }
        return null == t ? n : "function" == typeof t ? r : i
    }
    function N(e) {
        function t() {
            var t = this.ownerDocument
              , n = this.namespaceURI;
            return n ? t.createElementNS(n, e) : t.createElement(e)
        }
        function n() {
            return this.ownerDocument.createElementNS(e.space, e.local)
        }
        return "function" == typeof e ? e : (e = Cn.ns.qualify(e)).local ? n : t
    }
    function I() {
        var e = this.parentNode;
        e && e.removeChild(this)
    }
    function $() {
        this._ = Object.create(null)
    }
    function O(e) {
        return {
            __data__: e
        }
    }
    function F(e) {
        return function() {
            return Rn(this, e)
        }
    }
    function H(e, t) {
        return t > e ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    }
    function D(e) {
        return arguments.length || (e = H),
        function(t, n) {
            return t && n ? e(t.__data__, n.__data__) : !t - !n
        }
    }
    function L(e, t) {
        for (var n = 0, i = e.length; i > n; n++)
            for (var r, c = e[n], a = 0, o = c.length; o > a; a++)
                (r = c[a]) && t(r, a, n);
        return e
    }
    function j(e) {
        return Ln(e, Bn),
        e
    }
    function V(e) {
        var t, n;
        return function(i, r, c) {
            var a, o = e[c].update, s = o.length;
            for (c != n && (n = c,
            t = 0),
            r >= t && (t = r + 1); !(a = o[t]) && ++t < s; )
                ;
            return a
        }
    }
    function R(e, t, n) {
        function i() {
            var t = this[a];
            t && (this.removeEventListener(e, t, t.$),
            delete this[a])
        }
        function r() {
            var r = s(t, kn(arguments));
            i.call(this),
            this.addEventListener(e, this[a] = r, r.$ = n),
            r._ = t
        }
        function c() {
            var t, n = new RegExp("^__on([^.]+)" + Cn.requote(e) + "$");
            for (var i in this)
                if (t = i.match(n)) {
                    var r = this[i];
                    this.removeEventListener(t[1], r, r.$),
                    delete this[i]
                }
        }
        var a = "__on" + e
          , o = e.indexOf(".")
          , s = z;
        o > 0 && (e = e.slice(0, o));
        var l = Un.get(e);
        return l && (e = l,
        s = q),
        o ? t ? r : i : t ? f : c
    }
    function z(e, t) {
        return function(n) {
            var i = Cn.event;
            Cn.event = n,
            t[0] = this.__data__;
            try {
                e.apply(this, t)
            } finally {
                Cn.event = i
            }
        }
    }
    function q(e, t) {
        var n = z(e, t);
        return function(e) {
            var t = this
              , i = e.relatedTarget;
            i && (i === t || 8 & i.compareDocumentPosition(t)) || n.call(t, e)
        }
    }
    function B(n) {
        var i = ".dragsuppress-" + ++Gn
          , c = "click" + i
          , a = Cn.select(t(n)).on("touchmove" + i, g).on("dragstart" + i, g).on("selectstart" + i, g);
        if (null == Wn && (Wn = !("onselectstart"in n) && r(n.style, "userSelect")),
        Wn) {
            var o = e(n).style
              , s = o[Wn];
            o[Wn] = "none"
        }
        return function(e) {
            if (a.on(i, null),
            Wn && (o[Wn] = s),
            e) {
                var t = function() {
                    a.on(c, null)
                };
                a.on(c, function() {
                    g(),
                    t()
                }, !0),
                setTimeout(t, 0)
            }
        }
    }
    function U(e, n) {
        n.changedTouches && (n = n.changedTouches[0]);
        var i = e.ownerSVGElement || e;
        if (i.createSVGPoint) {
            var r = i.createSVGPoint();
            if (0 > Yn) {
                var c = t(e);
                if (c.scrollX || c.scrollY) {
                    i = Cn.select("body").append("svg").style({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        margin: 0,
                        padding: 0,
                        border: "none"
                    }, "important");
                    var a = i[0][0].getScreenCTM();
                    Yn = !(a.f || a.e),
                    i.remove()
                }
            }
            return Yn ? (r.x = n.pageX,
            r.y = n.pageY) : (r.x = n.clientX,
            r.y = n.clientY),
            r = r.matrixTransform(e.getScreenCTM().inverse()),
            [r.x, r.y]
        }
        var o = e.getBoundingClientRect();
        return [n.clientX - o.left - e.clientLeft, n.clientY - o.top - e.clientTop]
    }
    function W() {
        return Cn.event.changedTouches[0].identifier
    }
    function G(e) {
        return e > 0 ? 1 : 0 > e ? -1 : 0
    }
    function Y(e, t, n) {
        return (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0])
    }
    function K(e) {
        return e > 1 ? 0 : -1 > e ? Xn : Math.acos(e)
    }
    function Z(e) {
        return e > 1 ? Qn : -1 > e ? -Qn : Math.asin(e)
    }
    function X(e) {
        return ((e = Math.exp(e)) - 1 / e) / 2
    }
    function J(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2
    }
    function Q(e) {
        return ((e = Math.exp(2 * e)) - 1) / (e + 1)
    }
    function ee(e) {
        return (e = Math.sin(e / 2)) * e
    }
    function te(e) {
        return "function" == typeof e ? e : function() {
            return e
        }
    }
    function ne() {
        var e = ie()
          , t = re() - e;
        t > 24 ? (isFinite(t) && (clearTimeout(ui),
        ui = setTimeout(ne, t)),
        li = 0) : (li = 1,
        hi(ne))
    }
    function ie() {
        var e = Date.now();
        for (di = oi; di; )
            e >= di.t && (di.f = di.c(e - di.t)),
            di = di.n;
        return e
    }
    function re() {
        for (var e, t = oi, n = 1 / 0; t; )
            t.f ? t = e ? e.n = t.n : oi = t.n : (t.t < n && (n = t.t),
            t = (e = t).n);
        return si = e,
        n
    }
    function ce() {}
    function ae(e, t, n) {
        var i = n.s = e + t
          , r = i - e
          , c = i - r;
        n.t = e - c + (t - r)
    }
    function oe(e, t) {
        e && yi.hasOwnProperty(e.type) && yi[e.type](e, t)
    }
    function se(e, t, n) {
        var i, r = -1, c = e.length - n;
        for (t.lineStart(); ++r < c; )
            i = e[r],
            t.point(i[0], i[1], i[2]);
        t.lineEnd()
    }
    function le(e, t) {
        var n = -1
          , i = e.length;
        for (t.polygonStart(); ++n < i; )
            se(e[n], t, 1);
        t.polygonEnd()
    }
    function ue() {
        function e(e, t) {
            e *= ei,
            t = t * ei / 2 + Xn / 4;
            var n = e - i
              , a = n >= 0 ? 1 : -1
              , o = a * n
              , s = Math.cos(t)
              , l = Math.sin(t)
              , u = c * l
              , d = r * s + u * Math.cos(o)
              , h = u * a * Math.sin(o);
            gi.add(Math.atan2(h, d)),
            i = e,
            r = s,
            c = l
        }
        var t, n, i, r, c;
        _i.point = function(a, o) {
            _i.point = e,
            i = (t = a) * ei,
            r = Math.cos(o = (n = o) * ei / 2 + Xn / 4),
            c = Math.sin(o)
        }
        ,
        _i.lineEnd = function() {
            e(t, n)
        }
    }
    function de(e) {
        var t = e[0]
          , n = e[1]
          , i = Math.cos(n);
        return [i * Math.cos(t), i * Math.sin(t), Math.sin(n)]
    }
    function he(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }
    function pe(e, t) {
        return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
    }
    function fe(e, t) {
        e[0] += t[0],
        e[1] += t[1],
        e[2] += t[2]
    }
    function ye(e, t) {
        return [e[0] * t, e[1] * t, e[2] * t]
    }
    function me(e) {
        var t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
        e[0] /= t,
        e[1] /= t,
        e[2] /= t
    }
    function ge(e) {
        return [Math.atan2(e[1], e[0]), Z(e[2])]
    }
    function _e(e, t) {
        return xi(e[0] - t[0]) < Kn && xi(e[1] - t[1]) < Kn
    }
    function xe(e, t) {
        e *= ei;
        var n = Math.cos(t *= ei);
        ve(n * Math.cos(e), n * Math.sin(e), Math.sin(t))
    }
    function ve(e, t, n) {
        ++vi,
        wi += (e - wi) / vi,
        Mi += (t - Mi) / vi,
        Si += (n - Si) / vi
    }
    function be() {
        function e(e, r) {
            e *= ei;
            var c = Math.cos(r *= ei)
              , a = c * Math.cos(e)
              , o = c * Math.sin(e)
              , s = Math.sin(r)
              , l = Math.atan2(Math.sqrt((l = n * s - i * o) * l + (l = i * a - t * s) * l + (l = t * o - n * a) * l), t * a + n * o + i * s);
            bi += l,
            Ci += l * (t + (t = a)),
            Pi += l * (n + (n = o)),
            ki += l * (i + (i = s)),
            ve(t, n, i)
        }
        var t, n, i;
        Ni.point = function(r, c) {
            r *= ei;
            var a = Math.cos(c *= ei);
            t = a * Math.cos(r),
            n = a * Math.sin(r),
            i = Math.sin(c),
            Ni.point = e,
            ve(t, n, i)
        }
    }
    function we() {
        Ni.point = xe
    }
    function Me() {
        function e(e, t) {
            e *= ei;
            var n = Math.cos(t *= ei)
              , a = n * Math.cos(e)
              , o = n * Math.sin(e)
              , s = Math.sin(t)
              , l = r * s - c * o
              , u = c * a - i * s
              , d = i * o - r * a
              , h = Math.sqrt(l * l + u * u + d * d)
              , p = i * a + r * o + c * s
              , f = h && -K(p) / h
              , y = Math.atan2(h, p);
            Ei += f * l,
            Ti += f * u,
            Ai += f * d,
            bi += y,
            Ci += y * (i + (i = a)),
            Pi += y * (r + (r = o)),
            ki += y * (c + (c = s)),
            ve(i, r, c)
        }
        var t, n, i, r, c;
        Ni.point = function(a, o) {
            t = a,
            n = o,
            Ni.point = e,
            a *= ei;
            var s = Math.cos(o *= ei);
            i = s * Math.cos(a),
            r = s * Math.sin(a),
            c = Math.sin(o),
            ve(i, r, c)
        }
        ,
        Ni.lineEnd = function() {
            e(t, n),
            Ni.lineEnd = we,
            Ni.point = xe
        }
    }
    function Se(e, t) {
        function n(n, i) {
            return n = e(n, i),
            t(n[0], n[1])
        }
        return e.invert && t.invert && (n.invert = function(n, i) {
            return (n = t.invert(n, i)) && e.invert(n[0], n[1])
        }
        ),
        n
    }
    function Ce() {
        return !0
    }
    function Pe(e, t, n, i, r) {
        var c = []
          , a = [];
        if (e.forEach(function(e) {
            if (!((t = e.length - 1) <= 0)) {
                var t, n = e[0], i = e[t];
                if (_e(n, i)) {
                    r.lineStart();
                    for (var o = 0; t > o; ++o)
                        r.point((n = e[o])[0], n[1]);
                    return void r.lineEnd()
                }
                var s = new Ee(n,e,null,!0)
                  , l = new Ee(n,null,s,!1);
                s.o = l,
                c.push(s),
                a.push(l),
                s = new Ee(i,e,null,!1),
                l = new Ee(i,null,s,!0),
                s.o = l,
                c.push(s),
                a.push(l)
            }
        }),
        a.sort(t),
        ke(c),
        ke(a),
        c.length) {
            for (var o = 0, s = n, l = a.length; l > o; ++o)
                a[o].e = s = !s;
            for (var u, d, h = c[0]; ; ) {
                for (var p = h, f = !0; p.v; )
                    if ((p = p.n) === h)
                        return;
                u = p.z,
                r.lineStart();
                do {
                    if (p.v = p.o.v = !0,
                    p.e) {
                        if (f)
                            for (var o = 0, l = u.length; l > o; ++o)
                                r.point((d = u[o])[0], d[1]);
                        else
                            i(p.x, p.n.x, 1, r);
                        p = p.n
                    } else {
                        if (f) {
                            u = p.p.z;
                            for (var o = u.length - 1; o >= 0; --o)
                                r.point((d = u[o])[0], d[1])
                        } else
                            i(p.x, p.p.x, -1, r);
                        p = p.p
                    }
                    p = p.o,
                    u = p.z,
                    f = !f
                } while (!p.v);r.lineEnd()
            }
        }
    }
    function ke(e) {
        if (t = e.length) {
            for (var t, n, i = 0, r = e[0]; ++i < t; )
                r.n = n = e[i],
                n.p = r,
                r = n;
            r.n = n = e[0],
            n.p = r
        }
    }
    function Ee(e, t, n, i) {
        this.x = e,
        this.z = t,
        this.o = n,
        this.e = i,
        this.v = !1,
        this.n = this.p = null
    }
    function Te(e, t, n, i) {
        return function(r, c) {
            function a(t, n) {
                var i = r(t, n);
                e(t = i[0], n = i[1]) && c.point(t, n)
            }
            function o(e, t) {
                var n = r(e, t);
                m.point(n[0], n[1])
            }
            function s() {
                _.point = o,
                m.lineStart()
            }
            function l() {
                _.point = a,
                m.lineEnd()
            }
            function u(e, t) {
                y.push([e, t]);
                var n = r(e, t);
                v.point(n[0], n[1])
            }
            function d() {
                v.lineStart(),
                y = []
            }
            function h() {
                u(y[0][0], y[0][1]),
                v.lineEnd();
                var e, t = v.clean(), n = x.buffer(), i = n.length;
                if (y.pop(),
                f.push(y),
                y = null,
                i)
                    if (1 & t) {
                        e = n[0];
                        var r, i = e.length - 1, a = -1;
                        if (i > 0) {
                            for (b || (c.polygonStart(),
                            b = !0),
                            c.lineStart(); ++a < i; )
                                c.point((r = e[a])[0], r[1]);
                            c.lineEnd()
                        }
                    } else
                        i > 1 && 2 & t && n.push(n.pop().concat(n.shift())),
                        p.push(n.filter(Ae))
            }
            var p, f, y, m = t(c), g = r.invert(i[0], i[1]), _ = {
                point: a,
                lineStart: s,
                lineEnd: l,
                polygonStart: function() {
                    _.point = u,
                    _.lineStart = d,
                    _.lineEnd = h,
                    p = [],
                    f = []
                },
                polygonEnd: function() {
                    _.point = a,
                    _.lineStart = s,
                    _.lineEnd = l,
                    p = Cn.merge(p);
                    var e = He(g, f);
                    p.length ? (b || (c.polygonStart(),
                    b = !0),
                    Pe(p, Ie, e, n, c)) : e && (b || (c.polygonStart(),
                    b = !0),
                    c.lineStart(),
                    n(null, null, 1, c),
                    c.lineEnd()),
                    b && (c.polygonEnd(),
                    b = !1),
                    p = f = null
                },
                sphere: function() {
                    c.polygonStart(),
                    c.lineStart(),
                    n(null, null, 1, c),
                    c.lineEnd(),
                    c.polygonEnd()
                }
            }, x = Ne(), v = t(x), b = !1;
            return _
        }
    }
    function Ae(e) {
        return e.length > 1
    }
    function Ne() {
        var e, t = [];
        return {
            lineStart: function() {
                t.push(e = [])
            },
            point: function(t, n) {
                e.push([t, n])
            },
            lineEnd: f,
            buffer: function() {
                var n = t;
                return t = [],
                e = null,
                n
            },
            rejoin: function() {
                t.length > 1 && t.push(t.pop().concat(t.shift()))
            }
        }
    }
    function Ie(e, t) {
        return ((e = e.x)[0] < 0 ? e[1] - Qn - Kn : Qn - e[1]) - ((t = t.x)[0] < 0 ? t[1] - Qn - Kn : Qn - t[1])
    }
    function $e(e) {
        var t, n = NaN, i = NaN, r = NaN;
        return {
            lineStart: function() {
                e.lineStart(),
                t = 1
            },
            point: function(c, a) {
                var o = c > 0 ? Xn : -Xn
                  , s = xi(c - n);
                xi(s - Xn) < Kn ? (e.point(n, i = (i + a) / 2 > 0 ? Qn : -Qn),
                e.point(r, i),
                e.lineEnd(),
                e.lineStart(),
                e.point(o, i),
                e.point(c, i),
                t = 0) : r !== o && s >= Xn && (xi(n - r) < Kn && (n -= r * Kn),
                xi(c - o) < Kn && (c -= o * Kn),
                i = Oe(n, i, c, a),
                e.point(r, i),
                e.lineEnd(),
                e.lineStart(),
                e.point(o, i),
                t = 0),
                e.point(n = c, i = a),
                r = o
            },
            lineEnd: function() {
                e.lineEnd(),
                n = i = NaN
            },
            clean: function() {
                return 2 - t
            }
        }
    }
    function Oe(e, t, n, i) {
        var r, c, a = Math.sin(e - n);
        return xi(a) > Kn ? Math.atan((Math.sin(t) * (c = Math.cos(i)) * Math.sin(n) - Math.sin(i) * (r = Math.cos(t)) * Math.sin(e)) / (r * c * a)) : (t + i) / 2
    }
    function Fe(e, t, n, i) {
        var r;
        if (null == e)
            r = n * Qn,
            i.point(-Xn, r),
            i.point(0, r),
            i.point(Xn, r),
            i.point(Xn, 0),
            i.point(Xn, -r),
            i.point(0, -r),
            i.point(-Xn, -r),
            i.point(-Xn, 0),
            i.point(-Xn, r);
        else if (xi(e[0] - t[0]) > Kn) {
            var c = e[0] < t[0] ? Xn : -Xn;
            r = n * c / 2,
            i.point(-c, r),
            i.point(0, r),
            i.point(c, r)
        } else
            i.point(t[0], t[1])
    }
    function He(e, t) {
        var n = e[0]
          , i = e[1]
          , r = [Math.sin(n), -Math.cos(n), 0]
          , c = 0
          , a = 0;
        gi.reset();
        for (var o = 0, s = t.length; s > o; ++o) {
            var l = t[o]
              , u = l.length;
            if (u)
                for (var d = l[0], h = d[0], p = d[1] / 2 + Xn / 4, f = Math.sin(p), y = Math.cos(p), m = 1; ; ) {
                    m === u && (m = 0),
                    e = l[m];
                    var g = e[0]
                      , _ = e[1] / 2 + Xn / 4
                      , x = Math.sin(_)
                      , v = Math.cos(_)
                      , b = g - h
                      , w = b >= 0 ? 1 : -1
                      , M = w * b
                      , S = M > Xn
                      , C = f * x;
                    if (gi.add(Math.atan2(C * w * Math.sin(M), y * v + C * Math.cos(M))),
                    c += S ? b + w * Jn : b,
                    S ^ h >= n ^ g >= n) {
                        var P = pe(de(d), de(e));
                        me(P);
                        var k = pe(r, P);
                        me(k);
                        var E = (S ^ b >= 0 ? -1 : 1) * Z(k[2]);
                        (i > E || i === E && (P[0] || P[1])) && (a += S ^ b >= 0 ? 1 : -1)
                    }
                    if (!m++)
                        break;
                    h = g,
                    f = x,
                    y = v,
                    d = e
                }
        }
        return (-Kn > c || Kn > c && 0 > gi) ^ 1 & a
    }
    function De(e) {
        function t(e, t) {
            return Math.cos(e) * Math.cos(t) > c
        }
        function n(e) {
            var n, c, s, l, u;
            return {
                lineStart: function() {
                    l = s = !1,
                    u = 1
                },
                point: function(d, h) {
                    var p, f = [d, h], y = t(d, h), m = a ? y ? 0 : r(d, h) : y ? r(d + (0 > d ? Xn : -Xn), h) : 0;
                    if (!n && (l = s = y) && e.lineStart(),
                    y !== s && (p = i(n, f),
                    (_e(n, p) || _e(f, p)) && (f[0] += Kn,
                    f[1] += Kn,
                    y = t(f[0], f[1]))),
                    y !== s)
                        u = 0,
                        y ? (e.lineStart(),
                        p = i(f, n),
                        e.point(p[0], p[1])) : (p = i(n, f),
                        e.point(p[0], p[1]),
                        e.lineEnd()),
                        n = p;
                    else if (o && n && a ^ y) {
                        var g;
                        m & c || !(g = i(f, n, !0)) || (u = 0,
                        a ? (e.lineStart(),
                        e.point(g[0][0], g[0][1]),
                        e.point(g[1][0], g[1][1]),
                        e.lineEnd()) : (e.point(g[1][0], g[1][1]),
                        e.lineEnd(),
                        e.lineStart(),
                        e.point(g[0][0], g[0][1])))
                    }
                    !y || n && _e(n, f) || e.point(f[0], f[1]),
                    n = f,
                    s = y,
                    c = m
                },
                lineEnd: function() {
                    s && e.lineEnd(),
                    n = null
                },
                clean: function() {
                    return u | (l && s) << 1
                }
            }
        }
        function i(e, t, n) {
            var i = de(e)
              , r = de(t)
              , a = [1, 0, 0]
              , o = pe(i, r)
              , s = he(o, o)
              , l = o[0]
              , u = s - l * l;
            if (!u)
                return !n && e;
            var d = c * s / u
              , h = -c * l / u
              , p = pe(a, o)
              , f = ye(a, d);
            fe(f, ye(o, h));
            var y = p
              , m = he(f, y)
              , g = he(y, y)
              , _ = m * m - g * (he(f, f) - 1);
            if (!(0 > _)) {
                var x = Math.sqrt(_)
                  , v = ye(y, (-m - x) / g);
                if (fe(v, f),
                v = ge(v),
                !n)
                    return v;
                var b, w = e[0], M = t[0], S = e[1], C = t[1];
                w > M && (b = w,
                w = M,
                M = b);
                var P = M - w
                  , k = xi(P - Xn) < Kn
                  , E = k || Kn > P;
                if (!k && S > C && (b = S,
                S = C,
                C = b),
                E ? k ? S + C > 0 ^ v[1] < (xi(v[0] - w) < Kn ? S : C) : S <= v[1] && v[1] <= C : P > Xn ^ (w <= v[0] && v[0] <= M)) {
                    var T = ye(y, (-m + x) / g);
                    return fe(T, f),
                    [v, ge(T)]
                }
            }
        }
        function r(t, n) {
            var i = a ? e : Xn - e
              , r = 0;
            return -i > t ? r |= 1 : t > i && (r |= 2),
            -i > n ? r |= 4 : n > i && (r |= 8),
            r
        }
        var c = Math.cos(e)
          , a = c > 0
          , o = xi(c) > Kn;
        return Te(t, n, ut(e, 6 * ei), a ? [0, -e] : [-Xn, e - Xn])
    }
    function Le(e, t, n, i) {
        return function(r) {
            var c, a = r.a, o = r.b, s = a.x, l = a.y, u = o.x, d = o.y, h = 0, p = 1, f = u - s, y = d - l;
            if (c = e - s,
            f || !(c > 0)) {
                if (c /= f,
                0 > f) {
                    if (h > c)
                        return;
                    p > c && (p = c)
                } else if (f > 0) {
                    if (c > p)
                        return;
                    c > h && (h = c)
                }
                if (c = n - s,
                f || !(0 > c)) {
                    if (c /= f,
                    0 > f) {
                        if (c > p)
                            return;
                        c > h && (h = c)
                    } else if (f > 0) {
                        if (h > c)
                            return;
                        p > c && (p = c)
                    }
                    if (c = t - l,
                    y || !(c > 0)) {
                        if (c /= y,
                        0 > y) {
                            if (h > c)
                                return;
                            p > c && (p = c)
                        } else if (y > 0) {
                            if (c > p)
                                return;
                            c > h && (h = c)
                        }
                        if (c = i - l,
                        y || !(0 > c)) {
                            if (c /= y,
                            0 > y) {
                                if (c > p)
                                    return;
                                c > h && (h = c)
                            } else if (y > 0) {
                                if (h > c)
                                    return;
                                p > c && (p = c)
                            }
                            return h > 0 && (r.a = {
                                x: s + h * f,
                                y: l + h * y
                            }),
                            1 > p && (r.b = {
                                x: s + p * f,
                                y: l + p * y
                            }),
                            r
                        }
                    }
                }
            }
        }
    }
    function je(e, t, n, i) {
        function r(i, r) {
            return xi(i[0] - e) < Kn ? r > 0 ? 0 : 3 : xi(i[0] - n) < Kn ? r > 0 ? 2 : 1 : xi(i[1] - t) < Kn ? r > 0 ? 1 : 0 : r > 0 ? 3 : 2
        }
        function c(e, t) {
            return a(e.x, t.x)
        }
        function a(e, t) {
            var n = r(e, 1)
              , i = r(t, 1);
            return n !== i ? n - i : 0 === n ? t[1] - e[1] : 1 === n ? e[0] - t[0] : 2 === n ? e[1] - t[1] : t[0] - e[0]
        }
        return function(o) {
            function s(e) {
                for (var t = 0, n = m.length, i = e[1], r = 0; n > r; ++r)
                    for (var c, a = 1, o = m[r], s = o.length, l = o[0]; s > a; ++a)
                        c = o[a],
                        l[1] <= i ? c[1] > i && Y(l, c, e) > 0 && ++t : c[1] <= i && Y(l, c, e) < 0 && --t,
                        l = c;
                return 0 !== t
            }
            function l(c, o, s, l) {
                var u = 0
                  , d = 0;
                if (null == c || (u = r(c, s)) !== (d = r(o, s)) || a(c, o) < 0 ^ s > 0)
                    do {
                        l.point(0 === u || 3 === u ? e : n, u > 1 ? i : t)
                    } while ((u = (u + s + 4) % 4) !== d);
                else
                    l.point(o[0], o[1])
            }
            function u(r, c) {
                return r >= e && n >= r && c >= t && i >= c
            }
            function d(e, t) {
                u(e, t) && o.point(e, t)
            }
            function h() {
                T.point = f,
                m && m.push(g = []),
                S = !0,
                M = !1,
                b = w = NaN
            }
            function p() {
                y && (f(_, x),
                v && M && k.rejoin(),
                y.push(k.buffer())),
                T.point = d,
                M && o.lineEnd()
            }
            function f(e, t) {
                e = Math.max(-$i, Math.min($i, e)),
                t = Math.max(-$i, Math.min($i, t));
                var n = u(e, t);
                if (m && g.push([e, t]),
                S)
                    _ = e,
                    x = t,
                    v = n,
                    S = !1,
                    n && (o.lineStart(),
                    o.point(e, t));
                else if (n && M)
                    o.point(e, t);
                else {
                    var i = {
                        a: {
                            x: b,
                            y: w
                        },
                        b: {
                            x: e,
                            y: t
                        }
                    };
                    E(i) ? (M || (o.lineStart(),
                    o.point(i.a.x, i.a.y)),
                    o.point(i.b.x, i.b.y),
                    n || o.lineEnd(),
                    C = !1) : n && (o.lineStart(),
                    o.point(e, t),
                    C = !1)
                }
                b = e,
                w = t,
                M = n
            }
            var y, m, g, _, x, v, b, w, M, S, C, P = o, k = Ne(), E = Le(e, t, n, i), T = {
                point: d,
                lineStart: h,
                lineEnd: p,
                polygonStart: function() {
                    o = k,
                    y = [],
                    m = [],
                    C = !0
                },
                polygonEnd: function() {
                    o = P,
                    y = Cn.merge(y);
                    var t = s([e, i])
                      , n = C && t
                      , r = y.length;
                    (n || r) && (o.polygonStart(),
                    n && (o.lineStart(),
                    l(null, null, 1, o),
                    o.lineEnd()),
                    r && Pe(y, c, t, l, o),
                    o.polygonEnd()),
                    y = m = g = null
                }
            };
            return T
        }
    }
    function Ve(e) {
        var t = 0
          , n = Xn / 3
          , i = nt(e)
          , r = i(t, n);
        return r.parallels = function(e) {
            return arguments.length ? i(t = e[0] * Xn / 180, n = e[1] * Xn / 180) : [t / Xn * 180, n / Xn * 180]
        }
        ,
        r
    }
    function Re(e, t) {
        function n(e, t) {
            var n = Math.sqrt(c - 2 * r * Math.sin(t)) / r;
            return [n * Math.sin(e *= r), a - n * Math.cos(e)]
        }
        var i = Math.sin(e)
          , r = (i + Math.sin(t)) / 2
          , c = 1 + i * (2 * r - i)
          , a = Math.sqrt(c) / r;
        return n.invert = function(e, t) {
            var n = a - t;
            return [Math.atan2(e, n) / r, Z((c - (e * e + n * n) * r * r) / (2 * r))]
        }
        ,
        n
    }
    function ze() {
        function e(e, t) {
            Fi += r * e - i * t,
            i = e,
            r = t
        }
        var t, n, i, r;
        Vi.point = function(c, a) {
            Vi.point = e,
            t = i = c,
            n = r = a
        }
        ,
        Vi.lineEnd = function() {
            e(t, n)
        }
    }
    function qe(e, t) {
        Hi > e && (Hi = e),
        e > Li && (Li = e),
        Di > t && (Di = t),
        t > ji && (ji = t)
    }
    function Be() {
        function e(e, t) {
            a.push("M", e, ",", t, c)
        }
        function t(e, t) {
            a.push("M", e, ",", t),
            o.point = n
        }
        function n(e, t) {
            a.push("L", e, ",", t)
        }
        function i() {
            o.point = e
        }
        function r() {
            a.push("Z")
        }
        var c = Ue(4.5)
          , a = []
          , o = {
            point: e,
            lineStart: function() {
                o.point = t
            },
            lineEnd: i,
            polygonStart: function() {
                o.lineEnd = r
            },
            polygonEnd: function() {
                o.lineEnd = i,
                o.point = e
            },
            pointRadius: function(e) {
                return c = Ue(e),
                o
            },
            result: function() {
                if (a.length) {
                    var e = a.join("");
                    return a = [],
                    e
                }
            }
        };
        return o
    }
    function Ue(e) {
        return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z"
    }
    function We(e, t) {
        wi += e,
        Mi += t,
        ++Si
    }
    function Ge() {
        function e(e, i) {
            var r = e - t
              , c = i - n
              , a = Math.sqrt(r * r + c * c);
            Ci += a * (t + e) / 2,
            Pi += a * (n + i) / 2,
            ki += a,
            We(t = e, n = i)
        }
        var t, n;
        zi.point = function(i, r) {
            zi.point = e,
            We(t = i, n = r)
        }
    }
    function Ye() {
        zi.point = We
    }
    function Ke() {
        function e(e, t) {
            var n = e - i
              , c = t - r
              , a = Math.sqrt(n * n + c * c);
            Ci += a * (i + e) / 2,
            Pi += a * (r + t) / 2,
            ki += a,
            a = r * e - i * t,
            Ei += a * (i + e),
            Ti += a * (r + t),
            Ai += 3 * a,
            We(i = e, r = t)
        }
        var t, n, i, r;
        zi.point = function(c, a) {
            zi.point = e,
            We(t = i = c, n = r = a)
        }
        ,
        zi.lineEnd = function() {
            e(t, n)
        }
    }
    function Ze(e) {
        function t(t, n) {
            e.moveTo(t + a, n),
            e.arc(t, n, a, 0, Jn)
        }
        function n(t, n) {
            e.moveTo(t, n),
            o.point = i
        }
        function i(t, n) {
            e.lineTo(t, n)
        }
        function r() {
            o.point = t
        }
        function c() {
            e.closePath()
        }
        var a = 4.5
          , o = {
            point: t,
            lineStart: function() {
                o.point = n
            },
            lineEnd: r,
            polygonStart: function() {
                o.lineEnd = c
            },
            polygonEnd: function() {
                o.lineEnd = r,
                o.point = t
            },
            pointRadius: function(e) {
                return a = e,
                o
            },
            result: f
        };
        return o
    }
    function Xe(e) {
        function t(e) {
            return (o ? i : n)(e)
        }
        function n(t) {
            return et(t, function(n, i) {
                n = e(n, i),
                t.point(n[0], n[1])
            })
        }
        function i(t) {
            function n(n, i) {
                n = e(n, i),
                t.point(n[0], n[1])
            }
            function i() {
                x = NaN,
                S.point = c,
                t.lineStart()
            }
            function c(n, i) {
                var c = de([n, i])
                  , a = e(n, i);
                r(x, v, _, b, w, M, x = a[0], v = a[1], _ = n, b = c[0], w = c[1], M = c[2], o, t),
                t.point(x, v)
            }
            function a() {
                S.point = n,
                t.lineEnd()
            }
            function s() {
                i(),
                S.point = l,
                S.lineEnd = u
            }
            function l(e, t) {
                c(d = e, h = t),
                p = x,
                f = v,
                y = b,
                m = w,
                g = M,
                S.point = c
            }
            function u() {
                r(x, v, _, b, w, M, p, f, d, y, m, g, o, t),
                S.lineEnd = a,
                a()
            }
            var d, h, p, f, y, m, g, _, x, v, b, w, M, S = {
                point: n,
                lineStart: i,
                lineEnd: a,
                polygonStart: function() {
                    t.polygonStart(),
                    S.lineStart = s
                },
                polygonEnd: function() {
                    t.polygonEnd(),
                    S.lineStart = i
                }
            };
            return S
        }
        function r(t, n, i, o, s, l, u, d, h, p, f, y, m, g) {
            var _ = u - t
              , x = d - n
              , v = _ * _ + x * x;
            if (v > 4 * c && m--) {
                var b = o + p
                  , w = s + f
                  , M = l + y
                  , S = Math.sqrt(b * b + w * w + M * M)
                  , C = Math.asin(M /= S)
                  , P = xi(xi(M) - 1) < Kn || xi(i - h) < Kn ? (i + h) / 2 : Math.atan2(w, b)
                  , k = e(P, C)
                  , E = k[0]
                  , T = k[1]
                  , A = E - t
                  , N = T - n
                  , I = x * A - _ * N;
                (I * I / v > c || xi((_ * A + x * N) / v - .5) > .3 || a > o * p + s * f + l * y) && (r(t, n, i, o, s, l, E, T, P, b /= S, w /= S, M, m, g),
                g.point(E, T),
                r(E, T, P, b, w, M, u, d, h, p, f, y, m, g))
            }
        }
        var c = .5
          , a = Math.cos(30 * ei)
          , o = 16;
        return t.precision = function(e) {
            return arguments.length ? (o = (c = e * e) > 0 && 16,
            t) : Math.sqrt(c)
        }
        ,
        t
    }
    function Je(e) {
        var t = Xe(function(t, n) {
            return e([t * ti, n * ti])
        });
        return function(e) {
            return it(t(e))
        }
    }
    function Qe(e) {
        this.stream = e
    }
    function et(e, t) {
        return {
            point: t,
            sphere: function() {
                e.sphere()
            },
            lineStart: function() {
                e.lineStart()
            },
            lineEnd: function() {
                e.lineEnd()
            },
            polygonStart: function() {
                e.polygonStart()
            },
            polygonEnd: function() {
                e.polygonEnd()
            }
        }
    }
    function tt(e) {
        return nt(function() {
            return e
        })()
    }
    function nt(e) {
        function t(e) {
            return e = s(e[0] * ei, e[1] * ei),
            [e[0] * p + l, u - e[1] * p]
        }
        function i(e) {
            return (e = s.invert((e[0] - l) / p, (u - e[1]) / p)) && [e[0] * ti, e[1] * ti]
        }
        function r() {
            s = Se(o = at(_, x, v), a);
            var e = a(m, g);
            return l = f - e[0] * p,
            u = y + e[1] * p,
            c()
        }
        function c() {
            return d && (d.valid = !1,
            d = null),
            t
        }
        var a, o, s, l, u, d, h = Xe(function(e, t) {
            return e = a(e, t),
            [e[0] * p + l, u - e[1] * p]
        }), p = 150, f = 480, y = 250, m = 0, g = 0, _ = 0, x = 0, v = 0, b = Ii, w = n, M = null, S = null;
        return t.stream = function(e) {
            return d && (d.valid = !1),
            d = it(b(o, h(w(e)))),
            d.valid = !0,
            d
        }
        ,
        t.clipAngle = function(e) {
            return arguments.length ? (b = null == e ? (M = e,
            Ii) : De((M = +e) * ei),
            c()) : M
        }
        ,
        t.clipExtent = function(e) {
            return arguments.length ? (S = e,
            w = e ? je(e[0][0], e[0][1], e[1][0], e[1][1]) : n,
            c()) : S
        }
        ,
        t.scale = function(e) {
            return arguments.length ? (p = +e,
            r()) : p
        }
        ,
        t.translate = function(e) {
            return arguments.length ? (f = +e[0],
            y = +e[1],
            r()) : [f, y]
        }
        ,
        t.center = function(e) {
            return arguments.length ? (m = e[0] % 360 * ei,
            g = e[1] % 360 * ei,
            r()) : [m * ti, g * ti]
        }
        ,
        t.rotate = function(e) {
            return arguments.length ? (_ = e[0] % 360 * ei,
            x = e[1] % 360 * ei,
            v = e.length > 2 ? e[2] % 360 * ei : 0,
            r()) : [_ * ti, x * ti, v * ti]
        }
        ,
        Cn.rebind(t, h, "precision"),
        function() {
            return a = e.apply(this, arguments),
            t.invert = a.invert && i,
            r()
        }
    }
    function it(e) {
        return et(e, function(t, n) {
            e.point(t * ei, n * ei)
        })
    }
    function rt(e, t) {
        return [e, t]
    }
    function ct(e, t) {
        return [e > Xn ? e - Jn : -Xn > e ? e + Jn : e, t]
    }
    function at(e, t, n) {
        return e ? t || n ? Se(st(e), lt(t, n)) : st(e) : t || n ? lt(t, n) : ct
    }
    function ot(e) {
        return function(t, n) {
            return t += e,
            [t > Xn ? t - Jn : -Xn > t ? t + Jn : t, n]
        }
    }
    function st(e) {
        var t = ot(e);
        return t.invert = ot(-e),
        t
    }
    function lt(e, t) {
        function n(e, t) {
            var n = Math.cos(t)
              , o = Math.cos(e) * n
              , s = Math.sin(e) * n
              , l = Math.sin(t)
              , u = l * i + o * r;
            return [Math.atan2(s * c - u * a, o * i - l * r), Z(u * c + s * a)]
        }
        var i = Math.cos(e)
          , r = Math.sin(e)
          , c = Math.cos(t)
          , a = Math.sin(t);
        return n.invert = function(e, t) {
            var n = Math.cos(t)
              , o = Math.cos(e) * n
              , s = Math.sin(e) * n
              , l = Math.sin(t)
              , u = l * c - s * a;
            return [Math.atan2(s * c + l * a, o * i + u * r), Z(u * i - o * r)]
        }
        ,
        n
    }
    function ut(e, t) {
        var n = Math.cos(e)
          , i = Math.sin(e);
        return function(r, c, a, o) {
            var s = a * t;
            null != r ? (r = dt(n, r),
            c = dt(n, c),
            (a > 0 ? c > r : r > c) && (r += a * Jn)) : (r = e + a * Jn,
            c = e - .5 * s);
            for (var l, u = r; a > 0 ? u > c : c > u; u -= s)
                o.point((l = ge([n, -i * Math.cos(u), -i * Math.sin(u)]))[0], l[1])
        }
    }
    function dt(e, t) {
        var n = de(t);
        n[0] -= e,
        me(n);
        var i = K(-n[1]);
        return ((-n[2] < 0 ? -i : i) + 2 * Math.PI - Kn) % (2 * Math.PI)
    }
    function ht(e) {
        for (var t = 1; e * t % 1; )
            t *= 10;
        return t
    }
    function pt(e, t, n) {
        var i = Cn.range(e, t - Kn, n).concat(t);
        return function(e) {
            return i.map(function(t) {
                return [e, t]
            })
        }
    }
    function ft(e, t, n) {
        var i = Cn.range(e, t - Kn, n).concat(t);
        return function(e) {
            return i.map(function(t) {
                return [t, e]
            })
        }
    }
    function yt(e) {
        return e.source
    }
    function mt(e) {
        return e.target
    }
    function gt(e, t, n, i) {
        var r = Math.cos(t)
          , c = Math.sin(t)
          , a = Math.cos(i)
          , o = Math.sin(i)
          , s = r * Math.cos(e)
          , l = r * Math.sin(e)
          , u = a * Math.cos(n)
          , d = a * Math.sin(n)
          , h = 2 * Math.asin(Math.sqrt(ee(i - t) + r * a * ee(n - e)))
          , p = 1 / Math.sin(h)
          , f = h ? function(e) {
            var t = Math.sin(e *= h) * p
              , n = Math.sin(h - e) * p
              , i = n * s + t * u
              , r = n * l + t * d
              , a = n * c + t * o;
            return [Math.atan2(r, i) * ti, Math.atan2(a, Math.sqrt(i * i + r * r)) * ti]
        }
        : function() {
            return [e * ti, t * ti]
        }
        ;
        return f.distance = h,
        f
    }
    function _t() {
        function e(e, r) {
            var c = Math.sin(r *= ei)
              , a = Math.cos(r)
              , o = xi((e *= ei) - t)
              , s = Math.cos(o);
            qi += Math.atan2(Math.sqrt((o = a * Math.sin(o)) * o + (o = i * c - n * a * s) * o), n * c + i * a * s),
            t = e,
            n = c,
            i = a
        }
        var t, n, i;
        Bi.point = function(r, c) {
            t = r * ei,
            n = Math.sin(c *= ei),
            i = Math.cos(c),
            Bi.point = e
        }
        ,
        Bi.lineEnd = function() {
            Bi.point = Bi.lineEnd = f
        }
    }
    function xt(e, t) {
        function n(t, n) {
            var i = Math.cos(t)
              , r = Math.cos(n)
              , c = e(i * r);
            return [c * r * Math.sin(t), c * Math.sin(n)]
        }
        return n.invert = function(e, n) {
            var i = Math.sqrt(e * e + n * n)
              , r = t(i)
              , c = Math.sin(r)
              , a = Math.cos(r);
            return [Math.atan2(e * c, i * a), Math.asin(i && n * c / i)]
        }
        ,
        n
    }
    function vt(e, t) {
        function n(e, t) {
            a > 0 ? -Qn + Kn > t && (t = -Qn + Kn) : t > Qn - Kn && (t = Qn - Kn);
            var n = a / Math.pow(r(t), c);
            return [n * Math.sin(c * e), a - n * Math.cos(c * e)]
        }
        var i = Math.cos(e)
          , r = function(e) {
            return Math.tan(Xn / 4 + e / 2)
        }
          , c = e === t ? Math.sin(e) : Math.log(i / Math.cos(t)) / Math.log(r(t) / r(e))
          , a = i * Math.pow(r(e), c) / c;
        return c ? (n.invert = function(e, t) {
            var n = a - t
              , i = G(c) * Math.sqrt(e * e + n * n);
            return [Math.atan2(e, n) / c, 2 * Math.atan(Math.pow(a / i, 1 / c)) - Qn]
        }
        ,
        n) : wt
    }
    function bt(e, t) {
        function n(e, t) {
            var n = c - t;
            return [n * Math.sin(r * e), c - n * Math.cos(r * e)]
        }
        var i = Math.cos(e)
          , r = e === t ? Math.sin(e) : (i - Math.cos(t)) / (t - e)
          , c = i / r + e;
        return xi(r) < Kn ? rt : (n.invert = function(e, t) {
            var n = c - t;
            return [Math.atan2(e, n) / r, c - G(r) * Math.sqrt(e * e + n * n)]
        }
        ,
        n)
    }
    function wt(e, t) {
        return [e, Math.log(Math.tan(Xn / 4 + t / 2))]
    }
    function Mt(e) {
        var t, n = tt(e), i = n.scale, r = n.translate, c = n.clipExtent;
        return n.scale = function() {
            var e = i.apply(n, arguments);
            return e === n ? t ? n.clipExtent(null) : n : e
        }
        ,
        n.translate = function() {
            var e = r.apply(n, arguments);
            return e === n ? t ? n.clipExtent(null) : n : e
        }
        ,
        n.clipExtent = function(e) {
            var a = c.apply(n, arguments);
            if (a === n) {
                if (t = null == e) {
                    var o = Xn * i()
                      , s = r();
                    c([[s[0] - o, s[1] - o], [s[0] + o, s[1] + o]])
                }
            } else
                t && (a = null);
            return a
        }
        ,
        n.clipExtent(null)
    }
    function St(e, t) {
        return [Math.log(Math.tan(Xn / 4 + t / 2)), -e]
    }
    function Ct() {}
    function Pt(e, t, n) {
        return this instanceof Pt ? (this.h = +e,
        this.s = +t,
        void (this.l = +n)) : arguments.length < 2 ? e instanceof Pt ? new Pt(e.h,e.s,e.l) : jt("" + e, Vt, Pt) : new Pt(e,t,n)
    }
    function kt(e, t, n) {
        function i(e) {
            return e > 360 ? e -= 360 : 0 > e && (e += 360),
            60 > e ? c + (a - c) * e / 60 : 180 > e ? a : 240 > e ? c + (a - c) * (240 - e) / 60 : c
        }
        function r(e) {
            return Math.round(255 * i(e))
        }
        var c, a;
        return e = isNaN(e) ? 0 : (e %= 360) < 0 ? e + 360 : e,
        t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t,
        n = 0 > n ? 0 : n > 1 ? 1 : n,
        a = .5 >= n ? n * (1 + t) : n + t - n * t,
        c = 2 * n - a,
        new Ht(r(e + 120),r(e),r(e - 120))
    }
    function Et(e, t, n) {
        return this instanceof Et ? (this.h = +e,
        this.c = +t,
        void (this.l = +n)) : arguments.length < 2 ? e instanceof Et ? new Et(e.h,e.c,e.l) : e instanceof At ? It(e.l, e.a, e.b) : It((e = Rt((e = Cn.rgb(e)).r, e.g, e.b)).l, e.a, e.b) : new Et(e,t,n)
    }
    function Tt(e, t, n) {
        return isNaN(e) && (e = 0),
        isNaN(t) && (t = 0),
        new At(n,Math.cos(e *= ei) * t,Math.sin(e) * t)
    }
    function At(e, t, n) {
        return this instanceof At ? (this.l = +e,
        this.a = +t,
        void (this.b = +n)) : arguments.length < 2 ? e instanceof At ? new At(e.l,e.a,e.b) : e instanceof Et ? Tt(e.h, e.c, e.l) : Rt((e = Ht(e)).r, e.g, e.b) : new At(e,t,n)
    }
    function Nt(e, t, n) {
        var i = (e + 16) / 116
          , r = i + t / 500
          , c = i - n / 200;
        return r = $t(r) * Qi,
        i = $t(i) * er,
        c = $t(c) * tr,
        new Ht(Ft(3.2404542 * r - 1.5371385 * i - .4985314 * c),Ft(-.969266 * r + 1.8760108 * i + .041556 * c),Ft(.0556434 * r - .2040259 * i + 1.0572252 * c))
    }
    function It(e, t, n) {
        return e > 0 ? new Et(Math.atan2(n, t) * ti,Math.sqrt(t * t + n * n),e) : new Et(NaN,NaN,e)
    }
    function $t(e) {
        return e > .206893034 ? e * e * e : (e - 4 / 29) / 7.787037
    }
    function Ot(e) {
        return e > .008856 ? Math.pow(e, 1 / 3) : 7.787037 * e + 4 / 29
    }
    function Ft(e) {
        return Math.round(255 * (.00304 >= e ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055))
    }
    function Ht(e, t, n) {
        return this instanceof Ht ? (this.r = ~~e,
        this.g = ~~t,
        void (this.b = ~~n)) : arguments.length < 2 ? e instanceof Ht ? new Ht(e.r,e.g,e.b) : jt("" + e, Ht, kt) : new Ht(e,t,n)
    }
    function Dt(e) {
        return new Ht(e >> 16,e >> 8 & 255,255 & e)
    }
    function Lt(e) {
        return 16 > e ? "0" + Math.max(0, e).toString(16) : Math.min(255, e).toString(16)
    }
    function jt(e, t, n) {
        var i, r, c, a = 0, o = 0, s = 0;
        if (i = /([a-z]+)\((.*)\)/i.exec(e))
            switch (r = i[2].split(","),
            i[1]) {
            case "hsl":
                return n(parseFloat(r[0]), parseFloat(r[1]) / 100, parseFloat(r[2]) / 100);
            case "rgb":
                return t(qt(r[0]), qt(r[1]), qt(r[2]))
            }
        return (c = rr.get(e.toLowerCase())) ? t(c.r, c.g, c.b) : (null == e || "#" !== e.charAt(0) || isNaN(c = parseInt(e.slice(1), 16)) || (4 === e.length ? (a = (3840 & c) >> 4,
        a |= a >> 4,
        o = 240 & c,
        o |= o >> 4,
        s = 15 & c,
        s |= s << 4) : 7 === e.length && (a = (16711680 & c) >> 16,
        o = (65280 & c) >> 8,
        s = 255 & c)),
        t(a, o, s))
    }
    function Vt(e, t, n) {
        var i, r, c = Math.min(e /= 255, t /= 255, n /= 255), a = Math.max(e, t, n), o = a - c, s = (a + c) / 2;
        return o ? (r = .5 > s ? o / (a + c) : o / (2 - a - c),
        i = e == a ? (t - n) / o + (n > t ? 6 : 0) : t == a ? (n - e) / o + 2 : (e - t) / o + 4,
        i *= 60) : (i = NaN,
        r = s > 0 && 1 > s ? 0 : i),
        new Pt(i,r,s)
    }
    function Rt(e, t, n) {
        e = zt(e),
        t = zt(t),
        n = zt(n);
        var i = Ot((.4124564 * e + .3575761 * t + .1804375 * n) / Qi)
          , r = Ot((.2126729 * e + .7151522 * t + .072175 * n) / er);
        return At(116 * r - 16, 500 * (i - r), 200 * (r - Ot((.0193339 * e + .119192 * t + .9503041 * n) / tr)))
    }
    function zt(e) {
        return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
    }
    function qt(e) {
        var t = parseFloat(e);
        return "%" === e.charAt(e.length - 1) ? Math.round(2.55 * t) : t
    }
    function Bt(e, t) {
        e = Cn.rgb(e),
        t = Cn.rgb(t);
        var n = e.r
          , i = e.g
          , r = e.b
          , c = t.r - n
          , a = t.g - i
          , o = t.b - r;
        return function(e) {
            return "#" + Lt(Math.round(n + c * e)) + Lt(Math.round(i + a * e)) + Lt(Math.round(r + o * e))
        }
    }
    function Ut(e, t) {
        var n, i = {}, r = {};
        for (n in e)
            n in t ? i[n] = Yt(e[n], t[n]) : r[n] = e[n];
        for (n in t)
            n in e || (r[n] = t[n]);
        return function(e) {
            for (n in i)
                r[n] = i[n](e);
            return r
        }
    }
    function Wt(e, t) {
        return e = +e,
        t = +t,
        function(n) {
            return e * (1 - n) + t * n
        }
    }
    function Gt(e, t) {
        var n, i, r, c = cr.lastIndex = ar.lastIndex = 0, a = -1, o = [], s = [];
        for (e += "",
        t += ""; (n = cr.exec(e)) && (i = ar.exec(t)); )
            (r = i.index) > c && (r = t.slice(c, r),
            o[a] ? o[a] += r : o[++a] = r),
            (n = n[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null,
            s.push({
                i: a,
                x: Wt(n, i)
            })),
            c = ar.lastIndex;
        return c < t.length && (r = t.slice(c),
        o[a] ? o[a] += r : o[++a] = r),
        o.length < 2 ? s[0] ? (t = s[0].x,
        function(e) {
            return t(e) + ""
        }
        ) : function() {
            return t
        }
        : (t = s.length,
        function(e) {
            for (var n, i = 0; t > i; ++i)
                o[(n = s[i]).i] = n.x(e);
            return o.join("")
        }
        )
    }
    function Yt(e, t) {
        for (var n, i = Cn.interpolators.length; --i >= 0 && !(n = Cn.interpolators[i](e, t)); )
            ;
        return n
    }
    function Kt(e, t) {
        var n, i = [], r = [], c = e.length, a = t.length, o = Math.min(e.length, t.length);
        for (n = 0; o > n; ++n)
            i.push(Yt(e[n], t[n]));
        for (; c > n; ++n)
            r[n] = e[n];
        for (; a > n; ++n)
            r[n] = t[n];
        return function(e) {
            for (n = 0; o > n; ++n)
                r[n] = i[n](e);
            return r
        }
    }
    function Zt(e) {
        return function(t) {
            return 0 >= t ? 0 : t >= 1 ? 1 : e(t)
        }
    }
    function Xt(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }
    function Jt(e) {
        return function(t) {
            return .5 * (.5 > t ? e(2 * t) : 2 - e(2 - 2 * t))
        }
    }
    function Qt(e) {
        return e * e
    }
    function en(e) {
        return e * e * e
    }
    function tn(e) {
        if (0 >= e)
            return 0;
        if (e >= 1)
            return 1;
        var t = e * e
          , n = t * e;
        return 4 * (.5 > e ? n : 3 * (e - t) + n - .75)
    }
    function nn(e) {
        return function(t) {
            return Math.pow(t, e)
        }
    }
    function rn(e) {
        return 1 - Math.cos(e * Qn)
    }
    function cn(e) {
        return Math.pow(2, 10 * (e - 1))
    }
    function an(e) {
        return 1 - Math.sqrt(1 - e * e)
    }
    function on(e, t) {
        var n;
        return arguments.length < 2 && (t = .45),
        arguments.length ? n = t / Jn * Math.asin(1 / e) : (e = 1,
        n = t / 4),
        function(i) {
            return 1 + e * Math.pow(2, -10 * i) * Math.sin((i - n) * Jn / t)
        }
    }
    function sn(e) {
        return e || (e = 1.70158),
        function(t) {
            return t * t * ((e + 1) * t - e)
        }
    }
    function ln(e) {
        return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function un(e, t) {
        e = Cn.hcl(e),
        t = Cn.hcl(t);
        var n = e.h
          , i = e.c
          , r = e.l
          , c = t.h - n
          , a = t.c - i
          , o = t.l - r;
        return isNaN(a) && (a = 0,
        i = isNaN(i) ? t.c : i),
        isNaN(c) ? (c = 0,
        n = isNaN(n) ? t.h : n) : c > 180 ? c -= 360 : -180 > c && (c += 360),
        function(e) {
            return Tt(n + c * e, i + a * e, r + o * e) + ""
        }
    }
    function dn(e, t) {
        e = Cn.hsl(e),
        t = Cn.hsl(t);
        var n = e.h
          , i = e.s
          , r = e.l
          , c = t.h - n
          , a = t.s - i
          , o = t.l - r;
        return isNaN(a) && (a = 0,
        i = isNaN(i) ? t.s : i),
        isNaN(c) ? (c = 0,
        n = isNaN(n) ? t.h : n) : c > 180 ? c -= 360 : -180 > c && (c += 360),
        function(e) {
            return kt(n + c * e, i + a * e, r + o * e) + ""
        }
    }
    function hn(e, t) {
        e = Cn.lab(e),
        t = Cn.lab(t);
        var n = e.l
          , i = e.a
          , r = e.b
          , c = t.l - n
          , a = t.a - i
          , o = t.b - r;
        return function(e) {
            return Nt(n + c * e, i + a * e, r + o * e) + ""
        }
    }
    function pn(e, t) {
        return t -= e,
        function(n) {
            return Math.round(e + t * n)
        }
    }
    function fn(e) {
        var t = [e.a, e.b]
          , n = [e.c, e.d]
          , i = mn(t)
          , r = yn(t, n)
          , c = mn(gn(n, t, -r)) || 0;
        t[0] * n[1] < n[0] * t[1] && (t[0] *= -1,
        t[1] *= -1,
        i *= -1,
        r *= -1),
        this.rotate = (i ? Math.atan2(t[1], t[0]) : Math.atan2(-n[0], n[1])) * ti,
        this.translate = [e.e, e.f],
        this.scale = [i, c],
        this.skew = c ? Math.atan2(r, c) * ti : 0
    }
    function yn(e, t) {
        return e[0] * t[0] + e[1] * t[1]
    }
    function mn(e) {
        var t = Math.sqrt(yn(e, e));
        return t && (e[0] /= t,
        e[1] /= t),
        t
    }
    function gn(e, t, n) {
        return e[0] += n * t[0],
        e[1] += n * t[1],
        e
    }
    function _n(e, t) {
        var n, i = [], r = [], c = Cn.transform(e), a = Cn.transform(t), o = c.translate, s = a.translate, l = c.rotate, u = a.rotate, d = c.skew, h = a.skew, p = c.scale, f = a.scale;
        return o[0] != s[0] || o[1] != s[1] ? (i.push("translate(", null, ",", null, ")"),
        r.push({
            i: 1,
            x: Wt(o[0], s[0])
        }, {
            i: 3,
            x: Wt(o[1], s[1])
        })) : i.push(s[0] || s[1] ? "translate(" + s + ")" : ""),
        l != u ? (l - u > 180 ? u += 360 : u - l > 180 && (l += 360),
        r.push({
            i: i.push(i.pop() + "rotate(", null, ")") - 2,
            x: Wt(l, u)
        })) : u && i.push(i.pop() + "rotate(" + u + ")"),
        d != h ? r.push({
            i: i.push(i.pop() + "skewX(", null, ")") - 2,
            x: Wt(d, h)
        }) : h && i.push(i.pop() + "skewX(" + h + ")"),
        p[0] != f[0] || p[1] != f[1] ? (n = i.push(i.pop() + "scale(", null, ",", null, ")"),
        r.push({
            i: n - 4,
            x: Wt(p[0], f[0])
        }, {
            i: n - 2,
            x: Wt(p[1], f[1])
        })) : (1 != f[0] || 1 != f[1]) && i.push(i.pop() + "scale(" + f + ")"),
        n = r.length,
        function(e) {
            for (var t, c = -1; ++c < n; )
                i[(t = r[c]).i] = t.x(e);
            return i.join("")
        }
    }
    function xn(e) {
        return function() {
            var t, n;
            (t = this[e]) && (n = t[t.active]) && (--t.count ? delete t[t.active] : delete this[e],
            t.active += .5,
            n.event && n.event.interrupt.call(this, this.__data__, n.index))
        }
    }
    function vn(e, t, n) {
        return Ln(e, fr),
        e.namespace = t,
        e.id = n,
        e
    }
    function bn(e, t, n, i) {
        var r = e.id
          , c = e.namespace;
        return L(e, "function" == typeof n ? function(e, a, o) {
            e[c][r].tween.set(t, i(n.call(e, e.__data__, a, o)))
        }
        : (n = i(n),
        function(e) {
            e[c][r].tween.set(t, n)
        }
        ))
    }
    function wn(e) {
        return null == e && (e = ""),
        function() {
            this.textContent = e
        }
    }
    function Mn(e) {
        return null == e ? "__transition__" : "__transition_" + e + "__"
    }
    function Sn(e, t, n, i, r) {
        var c = e[n] || (e[n] = {
            active: 0,
            count: 0
        })
          , o = c[i];
        if (!o) {
            var s = r.time;
            o = c[i] = {
                tween: new a,
                time: s,
                delay: r.delay,
                duration: r.duration,
                ease: r.ease,
                index: t
            },
            r = null,
            ++c.count,
            Cn.timer(function(r) {
                function a(n) {
                    if (c.active > i)
                        return u();
                    var r = c[c.active];
                    r && (--c.count,
                    delete c[c.active],
                    r.event && r.event.interrupt.call(e, e.__data__, r.index)),
                    c.active = i,
                    o.event && o.event.start.call(e, e.__data__, t),
                    o.tween.forEach(function(n, i) {
                        (i = i.call(e, e.__data__, t)) && y.push(i)
                    }),
                    h = o.ease,
                    d = o.duration,
                    Cn.timer(function() {
                        return f.c = l(n || 1) ? Ce : l,
                        1
                    }, 0, s)
                }
                function l(n) {
                    if (c.active !== i)
                        return 1;
                    for (var r = n / d, a = h(r), s = y.length; s > 0; )
                        y[--s].call(e, a);
                    return r >= 1 ? (o.event && o.event.end.call(e, e.__data__, t),
                    u()) : void 0
                }
                function u() {
                    return --c.count ? delete c[i] : delete e[n],
                    1
                }
                var d, h, p = o.delay, f = di, y = [];
                return f.t = p + s,
                r >= p ? a(r - p) : void (f.c = a)
            }, 0, s)
        }
    }
    var Cn = {
        version: "3.5.5"
    }
      , Pn = [].slice
      , kn = function(e) {
        return Pn.call(e)
    }
      , En = this.document;
    if (En)
        try {
            kn(En.documentElement.childNodes)[0].nodeType
        } catch (e) {
            kn = function(e) {
                for (var t = e.length, n = new Array(t); t--; )
                    n[t] = e[t];
                return n
            }
        }
    if (Date.now || (Date.now = function() {
        return +new Date
    }
    ),
    En)
        try {
            En.createElement("DIV").style.setProperty("opacity", 0, "")
        } catch (e) {
            var Tn = this.Element.prototype
              , An = Tn.setAttribute
              , Nn = Tn.setAttributeNS
              , In = this.CSSStyleDeclaration.prototype
              , $n = In.setProperty;
            Tn.setAttribute = function(e, t) {
                An.call(this, e, t + "")
            }
            ,
            Tn.setAttributeNS = function(e, t, n) {
                Nn.call(this, e, t, n + "")
            }
            ,
            In.setProperty = function(e, t, n) {
                $n.call(this, e, t + "", n)
            }
        }
    Cn.behavior = {},
    Cn.rebind = function(e, t) {
        for (var n, r = 1, c = arguments.length; ++r < c; )
            e[n = arguments[r]] = i(e, t, t[n]);
        return e
    }
    ;
    var On = ["webkit", "ms", "moz", "Moz", "o", "O"];
    Cn.map = function(e, t) {
        var n = new a;
        if (e instanceof a)
            e.forEach(function(e, t) {
                n.set(e, t)
            });
        else if (Array.isArray(e)) {
            var i, r = -1, c = e.length;
            if (1 === arguments.length)
                for (; ++r < c; )
                    n.set(r, e[r]);
            else
                for (; ++r < c; )
                    n.set(t.call(e, i = e[r], r), i)
        } else
            for (var o in e)
                n.set(o, e[o]);
        return n
    }
    ;
    var Fn = "__proto__"
      , Hn = "\0";
    c(a, {
        has: l,
        get: function(e) {
            return this._[o(e)]
        },
        set: function(e, t) {
            return this._[o(e)] = t
        },
        remove: u,
        keys: d,
        values: function() {
            var e = [];
            for (var t in this._)
                e.push(this._[t]);
            return e
        },
        entries: function() {
            var e = [];
            for (var t in this._)
                e.push({
                    key: s(t),
                    value: this._[t]
                });
            return e
        },
        size: h,
        empty: p,
        forEach: function(e) {
            for (var t in this._)
                e.call(this, s(t), this._[t])
        }
    }),
    Cn.dispatch = function() {
        for (var e = new y, t = -1, n = arguments.length; ++t < n; )
            e[arguments[t]] = m(e);
        return e
    }
    ,
    y.prototype.on = function(e, t) {
        var n = e.indexOf(".")
          , i = "";
        if (n >= 0 && (i = e.slice(n + 1),
        e = e.slice(0, n)),
        e)
            return arguments.length < 2 ? this[e].on(i) : this[e].on(i, t);
        if (2 === arguments.length) {
            if (null == t)
                for (e in this)
                    this.hasOwnProperty(e) && this[e].on(i, null);
            return this
        }
    }
    ,
    Cn.event = null,
    Cn.requote = function(e) {
        return e.replace(Dn, "\\$&")
    }
    ;
    var Dn = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g
      , Ln = {}.__proto__ ? function(e, t) {
        e.__proto__ = t
    }
    : function(e, t) {
        for (var n in t)
            e[n] = t[n]
    }
      , jn = function(e, t) {
        return t.querySelector(e)
    }
      , Vn = function(e, t) {
        return t.querySelectorAll(e)
    }
      , Rn = function(e, t) {
        var n = e.matches || e[r(e, "matchesSelector")];
        return (Rn = function(e, t) {
            return n.call(e, t)
        }
        )(e, t)
    };
    "function" == typeof Sizzle && (jn = function(e, t) {
        return Sizzle(e, t)[0] || null
    }
    ,
    Vn = Sizzle,
    Rn = Sizzle.matchesSelector),
    Cn.selection = function() {
        return Cn.select(En.documentElement)
    }
    ;
    var zn = Cn.selection.prototype = [];
    zn.select = function(e) {
        var t, n, i, r, c = [];
        e = b(e);
        for (var a = -1, o = this.length; ++a < o; ) {
            c.push(t = []),
            t.parentNode = (i = this[a]).parentNode;
            for (var s = -1, l = i.length; ++s < l; )
                (r = i[s]) ? (t.push(n = e.call(r, r.__data__, s, a)),
                n && "__data__"in r && (n.__data__ = r.__data__)) : t.push(null)
        }
        return v(c)
    }
    ,
    zn.selectAll = function(e) {
        var t, n, i = [];
        e = w(e);
        for (var r = -1, c = this.length; ++r < c; )
            for (var a = this[r], o = -1, s = a.length; ++o < s; )
                (n = a[o]) && (i.push(t = kn(e.call(n, n.__data__, o, r))),
                t.parentNode = n);
        return v(i)
    }
    ;
    var qn = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    Cn.ns = {
        prefix: qn,
        qualify: function(e) {
            var t = e.indexOf(":")
              , n = e;
            return t >= 0 && (n = e.slice(0, t),
            e = e.slice(t + 1)),
            qn.hasOwnProperty(n) ? {
                space: qn[n],
                local: e
            } : e
        }
    },
    zn.attr = function(e, t) {
        if (arguments.length < 2) {
            if ("string" == typeof e) {
                var n = this.node();
                return e = Cn.ns.qualify(e),
                e.local ? n.getAttributeNS(e.space, e.local) : n.getAttribute(e)
            }
            for (t in e)
                this.each(M(t, e[t]));
            return this
        }
        return this.each(M(e, t))
    }
    ,
    zn.classed = function(e, t) {
        if (arguments.length < 2) {
            if ("string" == typeof e) {
                var n = this.node()
                  , i = (e = P(e)).length
                  , r = -1;
                if (t = n.classList) {
                    for (; ++r < i; )
                        if (!t.contains(e[r]))
                            return !1
                } else
                    for (t = n.getAttribute("class"); ++r < i; )
                        if (!C(e[r]).test(t))
                            return !1;
                return !0
            }
            for (t in e)
                this.each(k(t, e[t]));
            return this
        }
        return this.each(k(e, t))
    }
    ,
    zn.style = function(e, n, i) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof e) {
                2 > r && (n = "");
                for (i in e)
                    this.each(T(i, e[i], n));
                return this
            }
            if (2 > r) {
                var c = this.node();
                return t(c).getComputedStyle(c, null).getPropertyValue(e)
            }
            i = ""
        }
        return this.each(T(e, n, i))
    }
    ,
    zn.property = function(e, t) {
        if (arguments.length < 2) {
            if ("string" == typeof e)
                return this.node()[e];
            for (t in e)
                this.each(A(t, e[t]));
            return this
        }
        return this.each(A(e, t))
    }
    ,
    zn.text = function(e) {
        return arguments.length ? this.each("function" == typeof e ? function() {
            var t = e.apply(this, arguments);
            this.textContent = null == t ? "" : t
        }
        : null == e ? function() {
            this.textContent = ""
        }
        : function() {
            this.textContent = e
        }
        ) : this.node().textContent
    }
    ,
    zn.html = function(e) {
        return arguments.length ? this.each("function" == typeof e ? function() {
            var t = e.apply(this, arguments);
            this.innerHTML = null == t ? "" : t
        }
        : null == e ? function() {
            this.innerHTML = ""
        }
        : function() {
            this.innerHTML = e
        }
        ) : this.node().innerHTML
    }
    ,
    zn.append = function(e) {
        return e = N(e),
        this.select(function() {
            return this.appendChild(e.apply(this, arguments))
        })
    }
    ,
    zn.insert = function(e, t) {
        return e = N(e),
        t = b(t),
        this.select(function() {
            return this.insertBefore(e.apply(this, arguments), t.apply(this, arguments) || null)
        })
    }
    ,
    zn.remove = function() {
        return this.each(I)
    }
    ,
    Cn.set = function(e) {
        var t = new $;
        if (e)
            for (var n = 0, i = e.length; i > n; ++n)
                t.add(e[n]);
        return t
    }
    ,
    c($, {
        has: l,
        add: function(e) {
            return this._[o(e += "")] = !0,
            e
        },
        remove: u,
        values: d,
        size: h,
        empty: p,
        forEach: function(e) {
            for (var t in this._)
                e.call(this, s(t))
        }
    }),
    zn.data = function(e, t) {
        function n(e, n) {
            var i, r, c, o = e.length, d = n.length, h = Math.min(o, d), p = new Array(d), f = new Array(d), y = new Array(o);
            if (t) {
                var m, g = new a, _ = new Array(o);
                for (i = -1; ++i < o; )
                    g.has(m = t.call(r = e[i], r.__data__, i)) ? y[i] = r : g.set(m, r),
                    _[i] = m;
                for (i = -1; ++i < d; )
                    (r = g.get(m = t.call(n, c = n[i], i))) ? !0 !== r && (p[i] = r,
                    r.__data__ = c) : f[i] = O(c),
                    g.set(m, !0);
                for (i = -1; ++i < o; )
                    !0 !== g.get(_[i]) && (y[i] = e[i])
            } else {
                for (i = -1; ++i < h; )
                    r = e[i],
                    c = n[i],
                    r ? (r.__data__ = c,
                    p[i] = r) : f[i] = O(c);
                for (; d > i; ++i)
                    f[i] = O(n[i]);
                for (; o > i; ++i)
                    y[i] = e[i]
            }
            f.update = p,
            f.parentNode = p.parentNode = y.parentNode = e.parentNode,
            s.push(f),
            l.push(p),
            u.push(y)
        }
        var i, r, c = -1, o = this.length;
        if (!arguments.length) {
            for (e = new Array(o = (i = this[0]).length); ++c < o; )
                (r = i[c]) && (e[c] = r.__data__);
            return e
        }
        var s = j([])
          , l = v([])
          , u = v([]);
        if ("function" == typeof e)
            for (; ++c < o; )
                n(i = this[c], e.call(i, i.parentNode.__data__, c));
        else
            for (; ++c < o; )
                n(i = this[c], e);
        return l.enter = function() {
            return s
        }
        ,
        l.exit = function() {
            return u
        }
        ,
        l
    }
    ,
    zn.datum = function(e) {
        return arguments.length ? this.property("__data__", e) : this.property("__data__")
    }
    ,
    zn.filter = function(e) {
        var t, n, i, r = [];
        "function" != typeof e && (e = F(e));
        for (var c = 0, a = this.length; a > c; c++) {
            r.push(t = []),
            t.parentNode = (n = this[c]).parentNode;
            for (var o = 0, s = n.length; s > o; o++)
                (i = n[o]) && e.call(i, i.__data__, o, c) && t.push(i)
        }
        return v(r)
    }
    ,
    zn.order = function() {
        for (var e = -1, t = this.length; ++e < t; )
            for (var n, i = this[e], r = i.length - 1, c = i[r]; --r >= 0; )
                (n = i[r]) && (c && c !== n.nextSibling && c.parentNode.insertBefore(n, c),
                c = n);
        return this
    }
    ,
    Cn.ascending = H,
    zn.sort = function(e) {
        e = D.apply(this, arguments);
        for (var t = -1, n = this.length; ++t < n; )
            this[t].sort(e);
        return this.order()
    }
    ,
    zn.each = function(e) {
        return L(this, function(t, n, i) {
            e.call(t, t.__data__, n, i)
        })
    }
    ,
    zn.call = function(e) {
        var t = kn(arguments);
        return e.apply(t[0] = this, t),
        this
    }
    ,
    zn.empty = function() {
        return !this.node()
    }
    ,
    zn.node = function() {
        for (var e = 0, t = this.length; t > e; e++)
            for (var n = this[e], i = 0, r = n.length; r > i; i++) {
                var c = n[i];
                if (c)
                    return c
            }
        return null
    }
    ,
    zn.size = function() {
        var e = 0;
        return L(this, function() {
            ++e
        }),
        e
    }
    ;
    var Bn = [];
    Cn.selection.enter = j,
    Cn.selection.enter.prototype = Bn,
    Bn.append = zn.append,
    Bn.empty = zn.empty,
    Bn.node = zn.node,
    Bn.call = zn.call,
    Bn.size = zn.size,
    Bn.select = function(e) {
        for (var t, n, i, r, c, a = [], o = -1, s = this.length; ++o < s; ) {
            i = (r = this[o]).update,
            a.push(t = []),
            t.parentNode = r.parentNode;
            for (var l = -1, u = r.length; ++l < u; )
                (c = r[l]) ? (t.push(i[l] = n = e.call(r.parentNode, c.__data__, l, o)),
                n.__data__ = c.__data__) : t.push(null)
        }
        return v(a)
    }
    ,
    Bn.insert = function(e, t) {
        return arguments.length < 2 && (t = V(this)),
        zn.insert.call(this, e, t)
    }
    ,
    Cn.select = function(t) {
        var n;
        return "string" == typeof t ? (n = [jn(t, En)],
        n.parentNode = En.documentElement) : (n = [t],
        n.parentNode = e(t)),
        v([n])
    }
    ,
    Cn.selectAll = function(e) {
        var t;
        return "string" == typeof e ? (t = kn(Vn(e, En)),
        t.parentNode = En.documentElement) : (t = e,
        t.parentNode = null),
        v([t])
    }
    ,
    zn.on = function(e, t, n) {
        var i = arguments.length;
        if (3 > i) {
            if ("string" != typeof e) {
                2 > i && (t = !1);
                for (n in e)
                    this.each(R(n, e[n], t));
                return this
            }
            if (2 > i)
                return (i = this.node()["__on" + e]) && i._;
            n = !1
        }
        return this.each(R(e, t, n))
    }
    ;
    var Un = Cn.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    En && Un.forEach(function(e) {
        "on" + e in En && Un.remove(e)
    });
    var Wn, Gn = 0;
    Cn.mouse = function(e) {
        return U(e, _())
    }
    ;
    var Yn = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
    Cn.touch = function(e, t, n) {
        if (arguments.length < 3 && (n = t,
        t = _().changedTouches),
        t)
            for (var i, r = 0, c = t.length; c > r; ++r)
                if ((i = t[r]).identifier === n)
                    return U(e, i)
    }
    ,
    Cn.behavior.drag = function() {
        function e() {
            this.on("mousedown.drag", a).on("touchstart.drag", o)
        }
        function i(e, t, n, i, a) {
            return function() {
                function o() {
                    var e, n, i = t(h, y);
                    i && (e = i[0] - x[0],
                    n = i[1] - x[1],
                    f |= e | n,
                    x = i,
                    p({
                        type: "drag",
                        x: i[0] + l[0],
                        y: i[1] + l[1],
                        dx: e,
                        dy: n
                    }))
                }
                function s() {
                    t(h, y) && (g.on(i + m, null).on(a + m, null),
                    _(f && Cn.event.target === d),
                    p({
                        type: "dragend"
                    }))
                }
                var l, u = this, d = Cn.event.target, h = u.parentNode, p = r.of(u, arguments), f = 0, y = e(), m = ".drag" + (null == y ? "" : "-" + y), g = Cn.select(n(d)).on(i + m, o).on(a + m, s), _ = B(d), x = t(h, y);
                c ? (l = c.apply(u, arguments),
                l = [l.x - x[0], l.y - x[1]]) : l = [0, 0],
                p({
                    type: "dragstart"
                })
            }
        }
        var r = x(e, "drag", "dragstart", "dragend")
          , c = null
          , a = i(f, Cn.mouse, t, "mousemove", "mouseup")
          , o = i(W, Cn.touch, n, "touchmove", "touchend");
        return e.origin = function(t) {
            return arguments.length ? (c = t,
            e) : c
        }
        ,
        Cn.rebind(e, r, "on")
    }
    ,
    Cn.touches = function(e, t) {
        return arguments.length < 2 && (t = _().touches),
        t ? kn(t).map(function(t) {
            var n = U(e, t);
            return n.identifier = t.identifier,
            n
        }) : []
    }
    ;
    var Kn = 1e-6
      , Zn = Kn * Kn
      , Xn = Math.PI
      , Jn = 2 * Xn
      , Qn = Xn / 2
      , ei = Xn / 180
      , ti = 180 / Xn
      , ni = Math.SQRT2
      , ii = 2;
    Cn.interpolateZoom = function(e, t) {
        function n(e) {
            var t = e * _;
            if (g) {
                var n = J(y)
                  , a = c / (ii * h) * (n * Q(ni * t + y) - X(y));
                return [i + a * l, r + a * u, c * n / J(ni * t + y)]
            }
            return [i + e * l, r + e * u, c * Math.exp(ni * t)]
        }
        var i = e[0]
          , r = e[1]
          , c = e[2]
          , a = t[0]
          , o = t[1]
          , s = t[2]
          , l = a - i
          , u = o - r
          , d = l * l + u * u
          , h = Math.sqrt(d)
          , p = (s * s - c * c + 4 * d) / (2 * c * ii * h)
          , f = (s * s - c * c - 4 * d) / (2 * s * ii * h)
          , y = Math.log(Math.sqrt(p * p + 1) - p)
          , m = Math.log(Math.sqrt(f * f + 1) - f)
          , g = m - y
          , _ = (g || Math.log(s / c)) / ni;
        return n.duration = 1e3 * _,
        n
    }
    ,
    Cn.behavior.zoom = function() {
        function e(e) {
            e.on(N, d).on(ci + ".zoom", p).on("dblclick.zoom", f).on(O, h)
        }
        function n(e) {
            return [(e[0] - P.x) / P.k, (e[1] - P.y) / P.k]
        }
        function i(e) {
            return [e[0] * P.k + P.x, e[1] * P.k + P.y]
        }
        function r(e) {
            P.k = Math.max(E[0], Math.min(E[1], e))
        }
        function c(e, t) {
            t = i(t),
            P.x += e[0] - t[0],
            P.y += e[1] - t[1]
        }
        function a(t, n, i, a) {
            t.__chart__ = {
                x: P.x,
                y: P.y,
                k: P.k
            },
            r(Math.pow(2, a)),
            c(m = n, i),
            t = Cn.select(t),
            T > 0 && (t = t.transition().duration(T)),
            t.call(e.event)
        }
        function o() {
            M && M.domain(w.range().map(function(e) {
                return (e - P.x) / P.k
            }).map(w.invert)),
            C && C.domain(S.range().map(function(e) {
                return (e - P.y) / P.k
            }).map(S.invert))
        }
        function s(e) {
            A++ || e({
                type: "zoomstart"
            })
        }
        function l(e) {
            o(),
            e({
                type: "zoom",
                scale: P.k,
                translate: [P.x, P.y]
            })
        }
        function u(e) {
            --A || e({
                type: "zoomend"
            }),
            m = null
        }
        function d() {
            function e() {
                d = 1,
                c(Cn.mouse(r), p),
                l(o)
            }
            function i() {
                h.on(I, null).on($, null),
                f(d && Cn.event.target === a),
                u(o)
            }
            var r = this
              , a = Cn.event.target
              , o = F.of(r, arguments)
              , d = 0
              , h = Cn.select(t(r)).on(I, e).on($, i)
              , p = n(Cn.mouse(r))
              , f = B(r);
            pr.call(r),
            s(o)
        }
        function h() {
            function e() {
                var e = Cn.touches(f);
                return p = P.k,
                e.forEach(function(e) {
                    e.identifier in m && (m[e.identifier] = n(e))
                }),
                e
            }
            function t() {
                var t = Cn.event.target;
                Cn.select(t).on(v, i).on(w, o),
                M.push(t);
                for (var n = Cn.event.changedTouches, r = 0, c = n.length; c > r; ++r)
                    m[n[r].identifier] = null;
                var s = e()
                  , l = Date.now();
                if (1 === s.length) {
                    if (500 > l - b) {
                        var u = s[0];
                        a(f, u, m[u.identifier], Math.floor(Math.log(P.k) / Math.LN2) + 1),
                        g()
                    }
                    b = l
                } else if (s.length > 1) {
                    var u = s[0]
                      , d = s[1]
                      , h = u[0] - d[0]
                      , p = u[1] - d[1];
                    _ = h * h + p * p
                }
            }
            function i() {
                var e, t, n, i, a = Cn.touches(f);
                pr.call(f);
                for (var o = 0, s = a.length; s > o; ++o,
                i = null)
                    if (n = a[o],
                    i = m[n.identifier]) {
                        if (t)
                            break;
                        e = n,
                        t = i
                    }
                if (i) {
                    var u = (u = n[0] - e[0]) * u + (u = n[1] - e[1]) * u
                      , d = _ && Math.sqrt(u / _);
                    e = [(e[0] + n[0]) / 2, (e[1] + n[1]) / 2],
                    t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2],
                    r(d * p)
                }
                b = null,
                c(e, t),
                l(y)
            }
            function o() {
                if (Cn.event.touches.length) {
                    for (var t = Cn.event.changedTouches, n = 0, i = t.length; i > n; ++n)
                        delete m[t[n].identifier];
                    for (var r in m)
                        return void e()
                }
                Cn.selectAll(M).on(x, null),
                S.on(N, d).on(O, h),
                C(),
                u(y)
            }
            var p, f = this, y = F.of(f, arguments), m = {}, _ = 0, x = ".zoom-" + Cn.event.changedTouches[0].identifier, v = "touchmove" + x, w = "touchend" + x, M = [], S = Cn.select(f), C = B(f);
            t(),
            s(y),
            S.on(N, null).on(O, t)
        }
        function p() {
            var e = F.of(this, arguments);
            v ? clearTimeout(v) : (y = n(m = _ || Cn.mouse(this)),
            pr.call(this),
            s(e)),
            v = setTimeout(function() {
                v = null,
                u(e)
            }, 50),
            g(),
            r(Math.pow(2, .002 * ri()) * P.k),
            c(m, y),
            l(e)
        }
        function f() {
            var e = Cn.mouse(this)
              , t = Math.log(P.k) / Math.LN2;
            a(this, e, n(e), Cn.event.shiftKey ? Math.ceil(t) - 1 : Math.floor(t) + 1)
        }
        var y, m, _, v, b, w, M, S, C, P = {
            x: 0,
            y: 0,
            k: 1
        }, k = [960, 500], E = ai, T = 250, A = 0, N = "mousedown.zoom", I = "mousemove.zoom", $ = "mouseup.zoom", O = "touchstart.zoom", F = x(e, "zoomstart", "zoom", "zoomend");
        return ci || (ci = "onwheel"in En ? (ri = function() {
            return -Cn.event.deltaY * (Cn.event.deltaMode ? 120 : 1)
        }
        ,
        "wheel") : "onmousewheel"in En ? (ri = function() {
            return Cn.event.wheelDelta
        }
        ,
        "mousewheel") : (ri = function() {
            return -Cn.event.detail
        }
        ,
        "MozMousePixelScroll")),
        e.event = function(e) {
            e.each(function() {
                var e = F.of(this, arguments)
                  , t = P;
                dr ? Cn.select(this).transition().each("start.zoom", function() {
                    P = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    },
                    s(e)
                }).tween("zoom:zoom", function() {
                    var n = k[0]
                      , i = k[1]
                      , r = m ? m[0] : n / 2
                      , c = m ? m[1] : i / 2
                      , a = Cn.interpolateZoom([(r - P.x) / P.k, (c - P.y) / P.k, n / P.k], [(r - t.x) / t.k, (c - t.y) / t.k, n / t.k]);
                    return function(t) {
                        var i = a(t)
                          , o = n / i[2];
                        this.__chart__ = P = {
                            x: r - i[0] * o,
                            y: c - i[1] * o,
                            k: o
                        },
                        l(e)
                    }
                }).each("interrupt.zoom", function() {
                    u(e)
                }).each("end.zoom", function() {
                    u(e)
                }) : (this.__chart__ = P,
                s(e),
                l(e),
                u(e))
            })
        }
        ,
        e.translate = function(t) {
            return arguments.length ? (P = {
                x: +t[0],
                y: +t[1],
                k: P.k
            },
            o(),
            e) : [P.x, P.y]
        }
        ,
        e.scale = function(t) {
            return arguments.length ? (P = {
                x: P.x,
                y: P.y,
                k: +t
            },
            o(),
            e) : P.k
        }
        ,
        e.scaleExtent = function(t) {
            return arguments.length ? (E = null == t ? ai : [+t[0], +t[1]],
            e) : E
        }
        ,
        e.center = function(t) {
            return arguments.length ? (_ = t && [+t[0], +t[1]],
            e) : _
        }
        ,
        e.size = function(t) {
            return arguments.length ? (k = t && [+t[0], +t[1]],
            e) : k
        }
        ,
        e.duration = function(t) {
            return arguments.length ? (T = +t,
            e) : T
        }
        ,
        e.x = function(t) {
            return arguments.length ? (M = t,
            w = t.copy(),
            P = {
                x: 0,
                y: 0,
                k: 1
            },
            e) : M
        }
        ,
        e.y = function(t) {
            return arguments.length ? (C = t,
            S = t.copy(),
            P = {
                x: 0,
                y: 0,
                k: 1
            },
            e) : C
        }
        ,
        Cn.rebind(e, F, "on")
    }
    ;
    var ri, ci, ai = [0, 1 / 0];
    Cn.functor = te;
    var oi, si, li, ui, di, hi = this[r(this, "requestAnimationFrame")] || function(e) {
        setTimeout(e, 17)
    }
    ;
    Cn.timer = function(e, t, n) {
        var i = arguments.length;
        2 > i && (t = 0),
        3 > i && (n = Date.now());
        var r = n + t
          , c = {
            c: e,
            t: r,
            f: !1,
            n: null
        };
        si ? si.n = c : oi = c,
        si = c,
        li || (ui = clearTimeout(ui),
        li = 1,
        hi(ne))
    }
    ,
    Cn.timer.flush = function() {
        ie(),
        re()
    }
    ,
    Cn.geo = {},
    ce.prototype = {
        s: 0,
        t: 0,
        add: function(e) {
            ae(e, this.t, pi),
            ae(pi.s, this.s, this),
            this.s ? this.t += pi.t : this.s = pi.t
        },
        reset: function() {
            this.s = this.t = 0
        },
        valueOf: function() {
            return this.s
        }
    };
    var pi = new ce;
    Cn.geo.stream = function(e, t) {
        e && fi.hasOwnProperty(e.type) ? fi[e.type](e, t) : oe(e, t)
    }
    ;
    var fi = {
        Feature: function(e, t) {
            oe(e.geometry, t)
        },
        FeatureCollection: function(e, t) {
            for (var n = e.features, i = -1, r = n.length; ++i < r; )
                oe(n[i].geometry, t)
        }
    }
      , yi = {
        Sphere: function(e, t) {
            t.sphere()
        },
        Point: function(e, t) {
            e = e.coordinates,
            t.point(e[0], e[1], e[2])
        },
        MultiPoint: function(e, t) {
            for (var n = e.coordinates, i = -1, r = n.length; ++i < r; )
                e = n[i],
                t.point(e[0], e[1], e[2])
        },
        LineString: function(e, t) {
            se(e.coordinates, t, 0)
        },
        MultiLineString: function(e, t) {
            for (var n = e.coordinates, i = -1, r = n.length; ++i < r; )
                se(n[i], t, 0)
        },
        Polygon: function(e, t) {
            le(e.coordinates, t)
        },
        MultiPolygon: function(e, t) {
            for (var n = e.coordinates, i = -1, r = n.length; ++i < r; )
                le(n[i], t)
        },
        GeometryCollection: function(e, t) {
            for (var n = e.geometries, i = -1, r = n.length; ++i < r; )
                oe(n[i], t)
        }
    };
    Cn.geo.area = function(e) {
        return mi = 0,
        Cn.geo.stream(e, _i),
        mi
    }
    ;
    var mi, gi = new ce, _i = {
        sphere: function() {
            mi += 4 * Xn
        },
        point: f,
        lineStart: f,
        lineEnd: f,
        polygonStart: function() {
            gi.reset(),
            _i.lineStart = ue
        },
        polygonEnd: function() {
            var e = 2 * gi;
            mi += 0 > e ? 4 * Xn + e : e,
            _i.lineStart = _i.lineEnd = _i.point = f
        }
    }, xi = Math.abs;
    Cn.geo.bounds = function() {
        function e(e, t) {
            x.push(v = [u = e, h = e]),
            d > t && (d = t),
            t > p && (p = t)
        }
        function t(t, n) {
            var i = de([t * ei, n * ei]);
            if (g) {
                var r = pe(g, i)
                  , c = [r[1], -r[0], 0]
                  , a = pe(c, r);
                me(a),
                a = ge(a);
                var s = t - f
                  , l = s > 0 ? 1 : -1
                  , y = a[0] * ti * l
                  , m = xi(s) > 180;
                if (m ^ (y > l * f && l * t > y)) {
                    var _ = a[1] * ti;
                    _ > p && (p = _)
                } else if (y = (y + 360) % 360 - 180,
                m ^ (y > l * f && l * t > y)) {
                    var _ = -a[1] * ti;
                    d > _ && (d = _)
                } else
                    d > n && (d = n),
                    n > p && (p = n);
                m ? f > t ? o(u, t) > o(u, h) && (h = t) : o(t, h) > o(u, h) && (u = t) : h >= u ? (u > t && (u = t),
                t > h && (h = t)) : t > f ? o(u, t) > o(u, h) && (h = t) : o(t, h) > o(u, h) && (u = t)
            } else
                e(t, n);
            g = i,
            f = t
        }
        function n() {
            b.point = t
        }
        function i() {
            v[0] = u,
            v[1] = h,
            b.point = e,
            g = null
        }
        function r(e, n) {
            if (g) {
                var i = e - f;
                _ += xi(i) > 180 ? i + (i > 0 ? 360 : -360) : i
            } else
                y = e,
                m = n;
            _i.point(e, n),
            t(e, n)
        }
        function c() {
            _i.lineStart()
        }
        function a() {
            r(y, m),
            _i.lineEnd(),
            xi(_) > Kn && (u = -(h = 180)),
            v[0] = u,
            v[1] = h,
            g = null
        }
        function o(e, t) {
            return (t -= e) < 0 ? t + 360 : t
        }
        function s(e, t) {
            return e[0] - t[0]
        }
        function l(e, t) {
            return t[0] <= t[1] ? t[0] <= e && e <= t[1] : e < t[0] || t[1] < e
        }
        var u, d, h, p, f, y, m, g, _, x, v, b = {
            point: e,
            lineStart: n,
            lineEnd: i,
            polygonStart: function() {
                b.point = r,
                b.lineStart = c,
                b.lineEnd = a,
                _ = 0,
                _i.polygonStart()
            },
            polygonEnd: function() {
                _i.polygonEnd(),
                b.point = e,
                b.lineStart = n,
                b.lineEnd = i,
                0 > gi ? (u = -(h = 180),
                d = -(p = 90)) : _ > Kn ? p = 90 : -Kn > _ && (d = -90),
                v[0] = u,
                v[1] = h
            }
        };
        return function(e) {
            p = h = -(u = d = 1 / 0),
            x = [],
            Cn.geo.stream(e, b);
            var t = x.length;
            if (t) {
                x.sort(s);
                for (var n, i = 1, r = x[0], c = [r]; t > i; ++i)
                    n = x[i],
                    l(n[0], r) || l(n[1], r) ? (o(r[0], n[1]) > o(r[0], r[1]) && (r[1] = n[1]),
                    o(n[0], r[1]) > o(r[0], r[1]) && (r[0] = n[0])) : c.push(r = n);
                for (var a, n, f = -1 / 0, t = c.length - 1, i = 0, r = c[t]; t >= i; r = n,
                ++i)
                    n = c[i],
                    (a = o(r[1], n[0])) > f && (f = a,
                    u = n[0],
                    h = r[1])
            }
            return x = v = null,
            1 / 0 === u || 1 / 0 === d ? [[NaN, NaN], [NaN, NaN]] : [[u, d], [h, p]]
        }
    }(),
    Cn.geo.centroid = function(e) {
        vi = bi = wi = Mi = Si = Ci = Pi = ki = Ei = Ti = Ai = 0,
        Cn.geo.stream(e, Ni);
        var t = Ei
          , n = Ti
          , i = Ai
          , r = t * t + n * n + i * i;
        return Zn > r && (t = Ci,
        n = Pi,
        i = ki,
        Kn > bi && (t = wi,
        n = Mi,
        i = Si),
        r = t * t + n * n + i * i,
        Zn > r) ? [NaN, NaN] : [Math.atan2(n, t) * ti, Z(i / Math.sqrt(r)) * ti]
    }
    ;
    var vi, bi, wi, Mi, Si, Ci, Pi, ki, Ei, Ti, Ai, Ni = {
        sphere: f,
        point: xe,
        lineStart: be,
        lineEnd: we,
        polygonStart: function() {
            Ni.lineStart = Me
        },
        polygonEnd: function() {
            Ni.lineStart = be
        }
    };
    Cn.merge = function(e) {
        for (var t, n, i, r = e.length, c = -1, a = 0; ++c < r; )
            a += e[c].length;
        for (n = new Array(a); --r >= 0; )
            for (i = e[r],
            t = i.length; --t >= 0; )
                n[--a] = i[t];
        return n
    }
    ;
    var Ii = Te(Ce, $e, Fe, [-Xn, -Xn / 2])
      , $i = 1e9;
    Cn.geo.clipExtent = function() {
        var e, t, n, i, r, c, a = {
            stream: function(e) {
                return r && (r.valid = !1),
                r = c(e),
                r.valid = !0,
                r
            },
            extent: function(o) {
                return arguments.length ? (c = je(e = +o[0][0], t = +o[0][1], n = +o[1][0], i = +o[1][1]),
                r && (r.valid = !1,
                r = null),
                a) : [[e, t], [n, i]]
            }
        };
        return a.extent([[0, 0], [960, 500]])
    }
    ,
    (Cn.geo.conicEqualArea = function() {
        return Ve(Re)
    }
    ).raw = Re,
    Cn.geo.albers = function() {
        return Cn.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }
    ,
    Cn.geo.albersUsa = function() {
        function e(e) {
            var c = e[0]
              , a = e[1];
            return t = null,
            n(c, a),
            t || (i(c, a),
            t) || r(c, a),
            t
        }
        var t, n, i, r, c = Cn.geo.albers(), a = Cn.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), o = Cn.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), s = {
            point: function(e, n) {
                t = [e, n]
            }
        };
        return e.invert = function(e) {
            var t = c.scale()
              , n = c.translate()
              , i = (e[0] - n[0]) / t
              , r = (e[1] - n[1]) / t;
            return (r >= .12 && .234 > r && i >= -.425 && -.214 > i ? a : r >= .166 && .234 > r && i >= -.214 && -.115 > i ? o : c).invert(e)
        }
        ,
        e.stream = function(e) {
            var t = c.stream(e)
              , n = a.stream(e)
              , i = o.stream(e);
            return {
                point: function(e, r) {
                    t.point(e, r),
                    n.point(e, r),
                    i.point(e, r)
                },
                sphere: function() {
                    t.sphere(),
                    n.sphere(),
                    i.sphere()
                },
                lineStart: function() {
                    t.lineStart(),
                    n.lineStart(),
                    i.lineStart()
                },
                lineEnd: function() {
                    t.lineEnd(),
                    n.lineEnd(),
                    i.lineEnd()
                },
                polygonStart: function() {
                    t.polygonStart(),
                    n.polygonStart(),
                    i.polygonStart()
                },
                polygonEnd: function() {
                    t.polygonEnd(),
                    n.polygonEnd(),
                    i.polygonEnd()
                }
            }
        }
        ,
        e.precision = function(t) {
            return arguments.length ? (c.precision(t),
            a.precision(t),
            o.precision(t),
            e) : c.precision()
        }
        ,
        e.scale = function(t) {
            return arguments.length ? (c.scale(t),
            a.scale(.35 * t),
            o.scale(t),
            e.translate(c.translate())) : c.scale()
        }
        ,
        e.translate = function(t) {
            if (!arguments.length)
                return c.translate();
            var l = c.scale()
              , u = +t[0]
              , d = +t[1];
            return n = c.translate(t).clipExtent([[u - .455 * l, d - .238 * l], [u + .455 * l, d + .238 * l]]).stream(s).point,
            i = a.translate([u - .307 * l, d + .201 * l]).clipExtent([[u - .425 * l + Kn, d + .12 * l + Kn], [u - .214 * l - Kn, d + .234 * l - Kn]]).stream(s).point,
            r = o.translate([u - .205 * l, d + .212 * l]).clipExtent([[u - .214 * l + Kn, d + .166 * l + Kn], [u - .115 * l - Kn, d + .234 * l - Kn]]).stream(s).point,
            e
        }
        ,
        e.scale(1070)
    }
    ;
    var Oi, Fi, Hi, Di, Li, ji, Vi = {
        point: f,
        lineStart: f,
        lineEnd: f,
        polygonStart: function() {
            Fi = 0,
            Vi.lineStart = ze
        },
        polygonEnd: function() {
            Vi.lineStart = Vi.lineEnd = Vi.point = f,
            Oi += xi(Fi / 2)
        }
    }, Ri = {
        point: qe,
        lineStart: f,
        lineEnd: f,
        polygonStart: f,
        polygonEnd: f
    }, zi = {
        point: We,
        lineStart: Ge,
        lineEnd: Ye,
        polygonStart: function() {
            zi.lineStart = Ke
        },
        polygonEnd: function() {
            zi.point = We,
            zi.lineStart = Ge,
            zi.lineEnd = Ye
        }
    };
    Cn.geo.path = function() {
        function e(e) {
            return e && ("function" == typeof s && a.pointRadius(+s.apply(this, arguments)),
            o && o.valid || (o = c(a)),
            Cn.geo.stream(e, o)),
            a.result()
        }
        function t() {
            return o = null,
            e
        }
        var i, r, c, a, o, s = 4.5;
        return e.area = function(e) {
            return Oi = 0,
            Cn.geo.stream(e, c(Vi)),
            Oi
        }
        ,
        e.centroid = function(e) {
            return wi = Mi = Si = Ci = Pi = ki = Ei = Ti = Ai = 0,
            Cn.geo.stream(e, c(zi)),
            Ai ? [Ei / Ai, Ti / Ai] : ki ? [Ci / ki, Pi / ki] : Si ? [wi / Si, Mi / Si] : [NaN, NaN]
        }
        ,
        e.bounds = function(e) {
            return Li = ji = -(Hi = Di = 1 / 0),
            Cn.geo.stream(e, c(Ri)),
            [[Hi, Di], [Li, ji]]
        }
        ,
        e.projection = function(e) {
            return arguments.length ? (c = (i = e) ? e.stream || Je(e) : n,
            t()) : i
        }
        ,
        e.context = function(e) {
            return arguments.length ? (a = null == (r = e) ? new Be : new Ze(e),
            "function" != typeof s && a.pointRadius(s),
            t()) : r
        }
        ,
        e.pointRadius = function(t) {
            return arguments.length ? (s = "function" == typeof t ? t : (a.pointRadius(+t),
            +t),
            e) : s
        }
        ,
        e.projection(Cn.geo.albersUsa()).context(null)
    }
    ,
    Cn.geo.transform = function(e) {
        return {
            stream: function(t) {
                var n = new Qe(t);
                for (var i in e)
                    n[i] = e[i];
                return n
            }
        }
    }
    ,
    Qe.prototype = {
        point: function(e, t) {
            this.stream.point(e, t)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    },
    Cn.geo.projection = tt,
    Cn.geo.projectionMutator = nt,
    (Cn.geo.equirectangular = function() {
        return tt(rt)
    }
    ).raw = rt.invert = rt,
    Cn.geo.rotation = function(e) {
        function t(t) {
            return t = e(t[0] * ei, t[1] * ei),
            t[0] *= ti,
            t[1] *= ti,
            t
        }
        return e = at(e[0] % 360 * ei, e[1] * ei, e.length > 2 ? e[2] * ei : 0),
        t.invert = function(t) {
            return t = e.invert(t[0] * ei, t[1] * ei),
            t[0] *= ti,
            t[1] *= ti,
            t
        }
        ,
        t
    }
    ,
    ct.invert = rt,
    Cn.geo.circle = function() {
        function e() {
            var e = "function" == typeof i ? i.apply(this, arguments) : i
              , t = at(-e[0] * ei, -e[1] * ei, 0).invert
              , r = [];
            return n(null, null, 1, {
                point: function(e, n) {
                    r.push(e = t(e, n)),
                    e[0] *= ti,
                    e[1] *= ti
                }
            }),
            {
                type: "Polygon",
                coordinates: [r]
            }
        }
        var t, n, i = [0, 0], r = 6;
        return e.origin = function(t) {
            return arguments.length ? (i = t,
            e) : i
        }
        ,
        e.angle = function(i) {
            return arguments.length ? (n = ut((t = +i) * ei, r * ei),
            e) : t
        }
        ,
        e.precision = function(i) {
            return arguments.length ? (n = ut(t * ei, (r = +i) * ei),
            e) : r
        }
        ,
        e.angle(90)
    }
    ,
    Cn.geo.distance = function(e, t) {
        var n, i = (t[0] - e[0]) * ei, r = e[1] * ei, c = t[1] * ei, a = Math.sin(i), o = Math.cos(i), s = Math.sin(r), l = Math.cos(r), u = Math.sin(c), d = Math.cos(c);
        return Math.atan2(Math.sqrt((n = d * a) * n + (n = l * u - s * d * o) * n), s * u + l * d * o)
    }
    ,
    Cn.range = function(e, t, n) {
        if (arguments.length < 3 && (n = 1,
        arguments.length < 2 && (t = e,
        e = 0)),
        (t - e) / n == 1 / 0)
            throw new Error("infinite range");
        var i, r = [], c = ht(xi(n)), a = -1;
        if (e *= c,
        t *= c,
        0 > (n *= c))
            for (; (i = e + n * ++a) > t; )
                r.push(i / c);
        else
            for (; (i = e + n * ++a) < t; )
                r.push(i / c);
        return r
    }
    ,
    Cn.geo.graticule = function() {
        function e() {
            return {
                type: "MultiLineString",
                coordinates: t()
            }
        }
        function t() {
            return Cn.range(Math.ceil(c / m) * m, r, m).map(h).concat(Cn.range(Math.ceil(l / g) * g, s, g).map(p)).concat(Cn.range(Math.ceil(i / f) * f, n, f).filter(function(e) {
                return xi(e % m) > Kn
            }).map(u)).concat(Cn.range(Math.ceil(o / y) * y, a, y).filter(function(e) {
                return xi(e % g) > Kn
            }).map(d))
        }
        var n, i, r, c, a, o, s, l, u, d, h, p, f = 10, y = f, m = 90, g = 360, _ = 2.5;
        return e.lines = function() {
            return t().map(function(e) {
                return {
                    type: "LineString",
                    coordinates: e
                }
            })
        }
        ,
        e.outline = function() {
            return {
                type: "Polygon",
                coordinates: [h(c).concat(p(s).slice(1), h(r).reverse().slice(1), p(l).reverse().slice(1))]
            }
        }
        ,
        e.extent = function(t) {
            return arguments.length ? e.majorExtent(t).minorExtent(t) : e.minorExtent()
        }
        ,
        e.majorExtent = function(t) {
            return arguments.length ? (c = +t[0][0],
            r = +t[1][0],
            l = +t[0][1],
            s = +t[1][1],
            c > r && (t = c,
            c = r,
            r = t),
            l > s && (t = l,
            l = s,
            s = t),
            e.precision(_)) : [[c, l], [r, s]]
        }
        ,
        e.minorExtent = function(t) {
            return arguments.length ? (i = +t[0][0],
            n = +t[1][0],
            o = +t[0][1],
            a = +t[1][1],
            i > n && (t = i,
            i = n,
            n = t),
            o > a && (t = o,
            o = a,
            a = t),
            e.precision(_)) : [[i, o], [n, a]]
        }
        ,
        e.step = function(t) {
            return arguments.length ? e.majorStep(t).minorStep(t) : e.minorStep()
        }
        ,
        e.majorStep = function(t) {
            return arguments.length ? (m = +t[0],
            g = +t[1],
            e) : [m, g]
        }
        ,
        e.minorStep = function(t) {
            return arguments.length ? (f = +t[0],
            y = +t[1],
            e) : [f, y]
        }
        ,
        e.precision = function(t) {
            return arguments.length ? (_ = +t,
            u = pt(o, a, 90),
            d = ft(i, n, _),
            h = pt(l, s, 90),
            p = ft(c, r, _),
            e) : _
        }
        ,
        e.majorExtent([[-180, -90 + Kn], [180, 90 - Kn]]).minorExtent([[-180, -80 - Kn], [180, 80 + Kn]])
    }
    ,
    Cn.geo.greatArc = function() {
        function e() {
            return {
                type: "LineString",
                coordinates: [t || i.apply(this, arguments), n || r.apply(this, arguments)]
            }
        }
        var t, n, i = yt, r = mt;
        return e.distance = function() {
            return Cn.geo.distance(t || i.apply(this, arguments), n || r.apply(this, arguments))
        }
        ,
        e.source = function(n) {
            return arguments.length ? (i = n,
            t = "function" == typeof n ? null : n,
            e) : i
        }
        ,
        e.target = function(t) {
            return arguments.length ? (r = t,
            n = "function" == typeof t ? null : t,
            e) : r
        }
        ,
        e.precision = function() {
            return arguments.length ? e : 0
        }
        ,
        e
    }
    ,
    Cn.geo.interpolate = function(e, t) {
        return gt(e[0] * ei, e[1] * ei, t[0] * ei, t[1] * ei)
    }
    ,
    Cn.geo.length = function(e) {
        return qi = 0,
        Cn.geo.stream(e, Bi),
        qi
    }
    ;
    var qi, Bi = {
        sphere: f,
        point: f,
        lineStart: _t,
        lineEnd: f,
        polygonStart: f,
        polygonEnd: f
    }, Ui = xt(function(e) {
        return Math.sqrt(2 / (1 + e))
    }, function(e) {
        return 2 * Math.asin(e / 2)
    });
    (Cn.geo.azimuthalEqualArea = function() {
        return tt(Ui)
    }
    ).raw = Ui;
    var Wi = xt(function(e) {
        var t = Math.acos(e);
        return t && t / Math.sin(t)
    }, n);
    (Cn.geo.azimuthalEquidistant = function() {
        return tt(Wi)
    }
    ).raw = Wi,
    (Cn.geo.conicConformal = function() {
        return Ve(vt)
    }
    ).raw = vt,
    (Cn.geo.conicEquidistant = function() {
        return Ve(bt)
    }
    ).raw = bt;
    var Gi = xt(function(e) {
        return 1 / e
    }, Math.atan);
    (Cn.geo.gnomonic = function() {
        return tt(Gi)
    }
    ).raw = Gi,
    wt.invert = function(e, t) {
        return [e, 2 * Math.atan(Math.exp(t)) - Qn]
    }
    ,
    (Cn.geo.mercator = function() {
        return Mt(wt)
    }
    ).raw = wt;
    var Yi = xt(function() {
        return 1
    }, Math.asin);
    (Cn.geo.orthographic = function() {
        return tt(Yi)
    }
    ).raw = Yi;
    var Ki = xt(function(e) {
        return 1 / (1 + e)
    }, function(e) {
        return 2 * Math.atan(e)
    });
    (Cn.geo.stereographic = function() {
        return tt(Ki)
    }
    ).raw = Ki,
    St.invert = function(e, t) {
        return [-t, 2 * Math.atan(Math.exp(e)) - Qn]
    }
    ,
    (Cn.geo.transverseMercator = function() {
        var e = Mt(St)
          , t = e.center
          , n = e.rotate;
        return e.center = function(e) {
            return e ? t([-e[1], e[0]]) : (e = t(),
            [e[1], -e[0]])
        }
        ,
        e.rotate = function(e) {
            return e ? n([e[0], e[1], e.length > 2 ? e[2] + 90 : 90]) : (e = n(),
            [e[0], e[1], e[2] - 90])
        }
        ,
        n([0, 0, 90])
    }
    ).raw = St,
    Cn.color = Ct,
    Ct.prototype.toString = function() {
        return this.rgb() + ""
    }
    ,
    Cn.hsl = Pt;
    var Zi = Pt.prototype = new Ct;
    Zi.brighter = function(e) {
        return e = Math.pow(.7, arguments.length ? e : 1),
        new Pt(this.h,this.s,this.l / e)
    }
    ,
    Zi.darker = function(e) {
        return e = Math.pow(.7, arguments.length ? e : 1),
        new Pt(this.h,this.s,e * this.l)
    }
    ,
    Zi.rgb = function() {
        return kt(this.h, this.s, this.l)
    }
    ,
    Cn.hcl = Et;
    var Xi = Et.prototype = new Ct;
    Xi.brighter = function(e) {
        return new Et(this.h,this.c,Math.min(100, this.l + Ji * (arguments.length ? e : 1)))
    }
    ,
    Xi.darker = function(e) {
        return new Et(this.h,this.c,Math.max(0, this.l - Ji * (arguments.length ? e : 1)))
    }
    ,
    Xi.rgb = function() {
        return Tt(this.h, this.c, this.l).rgb()
    }
    ,
    Cn.lab = At;
    var Ji = 18
      , Qi = .95047
      , er = 1
      , tr = 1.08883
      , nr = At.prototype = new Ct;
    nr.brighter = function(e) {
        return new At(Math.min(100, this.l + Ji * (arguments.length ? e : 1)),this.a,this.b)
    }
    ,
    nr.darker = function(e) {
        return new At(Math.max(0, this.l - Ji * (arguments.length ? e : 1)),this.a,this.b)
    }
    ,
    nr.rgb = function() {
        return Nt(this.l, this.a, this.b)
    }
    ,
    Cn.rgb = Ht;
    var ir = Ht.prototype = new Ct;
    ir.brighter = function(e) {
        e = Math.pow(.7, arguments.length ? e : 1);
        var t = this.r
          , n = this.g
          , i = this.b
          , r = 30;
        return t || n || i ? (t && r > t && (t = r),
        n && r > n && (n = r),
        i && r > i && (i = r),
        new Ht(Math.min(255, t / e),Math.min(255, n / e),Math.min(255, i / e))) : new Ht(r,r,r)
    }
    ,
    ir.darker = function(e) {
        return e = Math.pow(.7, arguments.length ? e : 1),
        new Ht(e * this.r,e * this.g,e * this.b)
    }
    ,
    ir.hsl = function() {
        return Vt(this.r, this.g, this.b)
    }
    ,
    ir.toString = function() {
        return "#" + Lt(this.r) + Lt(this.g) + Lt(this.b)
    }
    ;
    var rr = Cn.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    rr.forEach(function(e, t) {
        rr.set(e, Dt(t))
    }),
    Cn.interpolateRgb = Bt,
    Cn.interpolateObject = Ut,
    Cn.interpolateNumber = Wt,
    Cn.interpolateString = Gt;
    var cr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
      , ar = new RegExp(cr.source,"g");
    Cn.interpolate = Yt,
    Cn.interpolators = [function(e, t) {
        var n = typeof t;
        return ("string" === n ? rr.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? Bt : Gt : t instanceof Ct ? Bt : Array.isArray(t) ? Kt : "object" === n && isNaN(t) ? Ut : Wt)(e, t)
    }
    ],
    Cn.interpolateArray = Kt;
    var or = function() {
        return n
    }
      , sr = Cn.map({
        linear: or,
        poly: nn,
        quad: function() {
            return Qt
        },
        cubic: function() {
            return en
        },
        sin: function() {
            return rn
        },
        exp: function() {
            return cn
        },
        circle: function() {
            return an
        },
        elastic: on,
        back: sn,
        bounce: function() {
            return ln
        }
    })
      , lr = Cn.map({
        in: n,
        out: Xt,
        "in-out": Jt,
        "out-in": function(e) {
            return Jt(Xt(e))
        }
    });
    Cn.ease = function(e) {
        var t = e.indexOf("-")
          , i = t >= 0 ? e.slice(0, t) : e
          , r = t >= 0 ? e.slice(t + 1) : "in";
        return i = sr.get(i) || or,
        r = lr.get(r) || n,
        Zt(r(i.apply(null, Pn.call(arguments, 1))))
    }
    ,
    Cn.interpolateHcl = un,
    Cn.interpolateHsl = dn,
    Cn.interpolateLab = hn,
    Cn.interpolateRound = pn,
    Cn.transform = function(e) {
        var t = En.createElementNS(Cn.ns.prefix.svg, "g");
        return (Cn.transform = function(e) {
            if (null != e) {
                t.setAttribute("transform", e);
                var n = t.transform.baseVal.consolidate()
            }
            return new fn(n ? n.matrix : ur)
        }
        )(e)
    }
    ,
    fn.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    }
    ;
    var ur = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    Cn.interpolateTransform = _n,
    zn.transition = function(e) {
        for (var t, n, i = dr || ++yr, r = Mn(e), c = [], a = hr || {
            time: Date.now(),
            ease: tn,
            delay: 0,
            duration: 250
        }, o = -1, s = this.length; ++o < s; ) {
            c.push(t = []);
            for (var l = this[o], u = -1, d = l.length; ++u < d; )
                (n = l[u]) && Sn(n, u, r, i, a),
                t.push(n)
        }
        return vn(c, r, i)
    }
    ,
    zn.interrupt = function(e) {
        return this.each(null == e ? pr : xn(Mn(e)))
    }
    ;
    var dr, hr, pr = xn(Mn()), fr = [], yr = 0;
    fr.call = zn.call,
    fr.empty = zn.empty,
    fr.node = zn.node,
    fr.size = zn.size,
    Cn.transition = function(e, t) {
        return e && e.transition ? dr ? e.transition(t) : e : Cn.selection().transition(e)
    }
    ,
    Cn.transition.prototype = fr,
    fr.select = function(e) {
        var t, n, i, r = this.id, c = this.namespace, a = [];
        e = b(e);
        for (var o = -1, s = this.length; ++o < s; ) {
            a.push(t = []);
            for (var l = this[o], u = -1, d = l.length; ++u < d; )
                (i = l[u]) && (n = e.call(i, i.__data__, u, o)) ? ("__data__"in i && (n.__data__ = i.__data__),
                Sn(n, u, c, r, i[c][r]),
                t.push(n)) : t.push(null)
        }
        return vn(a, c, r)
    }
    ,
    fr.selectAll = function(e) {
        var t, n, i, r, c, a = this.id, o = this.namespace, s = [];
        e = w(e);
        for (var l = -1, u = this.length; ++l < u; )
            for (var d = this[l], h = -1, p = d.length; ++h < p; )
                if (i = d[h]) {
                    c = i[o][a],
                    n = e.call(i, i.__data__, h, l),
                    s.push(t = []);
                    for (var f = -1, y = n.length; ++f < y; )
                        (r = n[f]) && Sn(r, f, o, a, c),
                        t.push(r)
                }
        return vn(s, o, a)
    }
    ,
    fr.filter = function(e) {
        var t, n, i, r = [];
        "function" != typeof e && (e = F(e));
        for (var c = 0, a = this.length; a > c; c++) {
            r.push(t = []);
            for (var n = this[c], o = 0, s = n.length; s > o; o++)
                (i = n[o]) && e.call(i, i.__data__, o, c) && t.push(i)
        }
        return vn(r, this.namespace, this.id)
    }
    ,
    fr.tween = function(e, t) {
        var n = this.id
          , i = this.namespace;
        return arguments.length < 2 ? this.node()[i][n].tween.get(e) : L(this, null == t ? function(t) {
            t[i][n].tween.remove(e)
        }
        : function(r) {
            r[i][n].tween.set(e, t)
        }
        )
    }
    ,
    fr.attr = function(e, t) {
        function n() {
            this.removeAttribute(o)
        }
        function i() {
            this.removeAttributeNS(o.space, o.local)
        }
        function r(e) {
            return null == e ? n : (e += "",
            function() {
                var t, n = this.getAttribute(o);
                return n !== e && (t = a(n, e),
                function(e) {
                    this.setAttribute(o, t(e))
                }
                )
            }
            )
        }
        function c(e) {
            return null == e ? i : (e += "",
            function() {
                var t, n = this.getAttributeNS(o.space, o.local);
                return n !== e && (t = a(n, e),
                function(e) {
                    this.setAttributeNS(o.space, o.local, t(e))
                }
                )
            }
            )
        }
        if (arguments.length < 2) {
            for (t in e)
                this.attr(t, e[t]);
            return this
        }
        var a = "transform" == e ? _n : Yt
          , o = Cn.ns.qualify(e);
        return bn(this, "attr." + e, t, o.local ? c : r)
    }
    ,
    fr.attrTween = function(e, t) {
        function n(e, n) {
            var i = t.call(this, e, n, this.getAttribute(r));
            return i && function(e) {
                this.setAttribute(r, i(e))
            }
        }
        function i(e, n) {
            var i = t.call(this, e, n, this.getAttributeNS(r.space, r.local));
            return i && function(e) {
                this.setAttributeNS(r.space, r.local, i(e))
            }
        }
        var r = Cn.ns.qualify(e);
        return this.tween("attr." + e, r.local ? i : n)
    }
    ,
    fr.style = function(e, n, i) {
        function r() {
            this.style.removeProperty(e)
        }
        function c(n) {
            return null == n ? r : (n += "",
            function() {
                var r, c = t(this).getComputedStyle(this, null).getPropertyValue(e);
                return c !== n && (r = Yt(c, n),
                function(t) {
                    this.style.setProperty(e, r(t), i)
                }
                )
            }
            )
        }
        var a = arguments.length;
        if (3 > a) {
            if ("string" != typeof e) {
                2 > a && (n = "");
                for (i in e)
                    this.style(i, e[i], n);
                return this
            }
            i = ""
        }
        return bn(this, "style." + e, n, c)
    }
    ,
    fr.styleTween = function(e, n, i) {
        function r(r, c) {
            var a = n.call(this, r, c, t(this).getComputedStyle(this, null).getPropertyValue(e));
            return a && function(t) {
                this.style.setProperty(e, a(t), i)
            }
        }
        return arguments.length < 3 && (i = ""),
        this.tween("style." + e, r)
    }
    ,
    fr.text = function(e) {
        return bn(this, "text", e, wn)
    }
    ,
    fr.remove = function() {
        var e = this.namespace;
        return this.each("end.transition", function() {
            var t;
            this[e].count < 2 && (t = this.parentNode) && t.removeChild(this)
        })
    }
    ,
    fr.ease = function(e) {
        var t = this.id
          , n = this.namespace;
        return arguments.length < 1 ? this.node()[n][t].ease : ("function" != typeof e && (e = Cn.ease.apply(Cn, arguments)),
        L(this, function(i) {
            i[n][t].ease = e
        }))
    }
    ,
    fr.delay = function(e) {
        var t = this.id
          , n = this.namespace;
        return arguments.length < 1 ? this.node()[n][t].delay : L(this, "function" == typeof e ? function(i, r, c) {
            i[n][t].delay = +e.call(i, i.__data__, r, c)
        }
        : (e = +e,
        function(i) {
            i[n][t].delay = e
        }
        ))
    }
    ,
    fr.duration = function(e) {
        var t = this.id
          , n = this.namespace;
        return arguments.length < 1 ? this.node()[n][t].duration : L(this, "function" == typeof e ? function(i, r, c) {
            i[n][t].duration = Math.max(1, e.call(i, i.__data__, r, c))
        }
        : (e = Math.max(1, e),
        function(i) {
            i[n][t].duration = e
        }
        ))
    }
    ,
    fr.each = function(e, t) {
        var n = this.id
          , i = this.namespace;
        if (arguments.length < 2) {
            var r = hr
              , c = dr;
            try {
                dr = n,
                L(this, function(t, r, c) {
                    hr = t[i][n],
                    e.call(t, t.__data__, r, c)
                })
            } finally {
                hr = r,
                dr = c
            }
        } else
            L(this, function(r) {
                var c = r[i][n];
                (c.event || (c.event = Cn.dispatch("start", "end", "interrupt"))).on(e, t)
            });
        return this
    }
    ,
    fr.transition = function() {
        for (var e, t, n, i, r = this.id, c = ++yr, a = this.namespace, o = [], s = 0, l = this.length; l > s; s++) {
            o.push(e = []);
            for (var t = this[s], u = 0, d = t.length; d > u; u++)
                (n = t[u]) && (i = n[a][r],
                Sn(n, u, a, c, {
                    time: i.time,
                    ease: i.ease,
                    delay: i.delay + i.duration,
                    duration: i.duration
                })),
                e.push(n)
        }
        return vn(o, a, c)
    }
    ,
    "function" == typeof define && define.amd ? define("module/components/us2016/map-dependencies/vendor_manual/d3.min", Cn) : "object" == typeof module && module.exports && (module.exports = Cn),
    this.d3 = Cn
}(),
function(e) {
    var t = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
    if ("function" == typeof define && define.amd)
        define("module/components/us2016/map-dependencies/vendor_manual/backbone.min", ["underscore", "jquery", "exports"], function(n, i, r) {
            t.Backbone = e(t, r, n, i)
        });
    else if ("undefined" != typeof exports) {
        var n, i = require("underscore");
        try {
            n = require("jquery")
        } catch (e) {}
        e(t, exports, i, n)
    } else
        t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
}(function(e, t, n, i) {
    var r = e.Backbone
      , c = Array.prototype.slice;
    t.VERSION = "1.3.3",
    t.$ = i,
    t.noConflict = function() {
        return e.Backbone = r,
        this
    }
    ,
    t.emulateHTTP = !1,
    t.emulateJSON = !1;
    var a = function(e, t, i) {
        switch (e) {
        case 1:
            return function() {
                return n[t](this[i])
            }
            ;
        case 2:
            return function(e) {
                return n[t](this[i], e)
            }
            ;
        case 3:
            return function(e, r) {
                return n[t](this[i], s(e, this), r)
            }
            ;
        case 4:
            return function(e, r, c) {
                return n[t](this[i], s(e, this), r, c)
            }
            ;
        default:
            return function() {
                var e = c.call(arguments);
                return e.unshift(this[i]),
                n[t].apply(n, e)
            }
        }
    }
      , o = function(e, t, i) {
        n.each(t, function(t, r) {
            n[r] && (e.prototype[r] = a(t, r, i))
        })
    }
      , s = function(e, t) {
        return n.isFunction(e) ? e : n.isObject(e) && !t._isModel(e) ? l(e) : n.isString(e) ? function(t) {
            return t.get(e)
        }
        : e
    }
      , l = function(e) {
        var t = n.matches(e);
        return function(e) {
            return t(e.attributes)
        }
    }
      , u = t.Events = {}
      , d = /\s+/
      , h = function(e, t, i, r, c) {
        var a, o = 0;
        if (i && "object" == typeof i) {
            void 0 !== r && "context"in c && void 0 === c.context && (c.context = r);
            for (a = n.keys(i); o < a.length; o++)
                t = h(e, t, a[o], i[a[o]], c)
        } else if (i && d.test(i))
            for (a = i.split(d); o < a.length; o++)
                t = e(t, a[o], r, c);
        else
            t = e(t, i, r, c);
        return t
    };
    u.on = function(e, t, n) {
        return p(this, e, t, n)
    }
    ;
    var p = function(e, t, n, i, r) {
        if (e._events = h(f, e._events || {}, t, n, {
            context: i,
            ctx: e,
            listening: r
        }),
        r) {
            (e._listeners || (e._listeners = {}))[r.id] = r
        }
        return e
    };
    u.listenTo = function(e, t, i) {
        if (!e)
            return this;
        var r = e._listenId || (e._listenId = n.uniqueId("l"))
          , c = this._listeningTo || (this._listeningTo = {})
          , a = c[r];
        if (!a) {
            var o = this._listenId || (this._listenId = n.uniqueId("l"));
            a = c[r] = {
                obj: e,
                objId: r,
                id: o,
                listeningTo: c,
                count: 0
            }
        }
        return p(e, t, i, this, a),
        this
    }
    ;
    var f = function(e, t, n, i) {
        if (n) {
            var r = e[t] || (e[t] = [])
              , c = i.context
              , a = i.ctx
              , o = i.listening;
            o && o.count++,
            r.push({
                callback: n,
                context: c,
                ctx: c || a,
                listening: o
            })
        }
        return e
    };
    u.off = function(e, t, n) {
        return this._events ? (this._events = h(y, this._events, e, t, {
            context: n,
            listeners: this._listeners
        }),
        this) : this
    }
    ,
    u.stopListening = function(e, t, i) {
        var r = this._listeningTo;
        if (!r)
            return this;
        for (var c = e ? [e._listenId] : n.keys(r), a = 0; a < c.length; a++) {
            var o = r[c[a]];
            if (!o)
                break;
            o.obj.off(t, i, this)
        }
        return this
    }
    ;
    var y = function(e, t, i, r) {
        if (e) {
            var c, a = 0, o = r.context, s = r.listeners;
            if (t || i || o) {
                for (var l = t ? [t] : n.keys(e); a < l.length; a++) {
                    t = l[a];
                    var u = e[t];
                    if (!u)
                        break;
                    for (var d = [], h = 0; h < u.length; h++) {
                        var p = u[h];
                        i && i !== p.callback && i !== p.callback._callback || o && o !== p.context ? d.push(p) : (c = p.listening) && 0 == --c.count && (delete s[c.id],
                        delete c.listeningTo[c.objId])
                    }
                    d.length ? e[t] = d : delete e[t]
                }
                return e
            }
            for (var f = n.keys(s); a < f.length; a++)
                c = s[f[a]],
                delete s[c.id],
                delete c.listeningTo[c.objId]
        }
    };
    u.once = function(e, t, i) {
        var r = h(m, {}, e, t, n.bind(this.off, this));
        return "string" == typeof e && null == i && (t = void 0),
        this.on(r, t, i)
    }
    ,
    u.listenToOnce = function(e, t, i) {
        var r = h(m, {}, t, i, n.bind(this.stopListening, this, e));
        return this.listenTo(e, r)
    }
    ;
    var m = function(e, t, i, r) {
        if (i) {
            var c = e[t] = n.once(function() {
                r(t, c),
                i.apply(this, arguments)
            });
            c._callback = i
        }
        return e
    };
    u.trigger = function(e) {
        if (!this._events)
            return this;
        for (var t = Math.max(0, arguments.length - 1), n = Array(t), i = 0; i < t; i++)
            n[i] = arguments[i + 1];
        return h(g, this._events, e, void 0, n),
        this
    }
    ;
    var g = function(e, t, n, i) {
        if (e) {
            var r = e[t]
              , c = e.all;
            r && c && (c = c.slice()),
            r && _(r, i),
            c && _(c, [t].concat(i))
        }
        return e
    }
      , _ = function(e, t) {
        var n, i = -1, r = e.length, c = t[0], a = t[1], o = t[2];
        switch (t.length) {
        case 0:
            for (; ++i < r; )
                (n = e[i]).callback.call(n.ctx);
            return;
        case 1:
            for (; ++i < r; )
                (n = e[i]).callback.call(n.ctx, c);
            return;
        case 2:
            for (; ++i < r; )
                (n = e[i]).callback.call(n.ctx, c, a);
            return;
        case 3:
            for (; ++i < r; )
                (n = e[i]).callback.call(n.ctx, c, a, o);
            return;
        default:
            for (; ++i < r; )
                (n = e[i]).callback.apply(n.ctx, t);
            return
        }
    };
    u.bind = u.on,
    u.unbind = u.off,
    n.extend(t, u);
    var x = t.Model = function(e, t) {
        var i = e || {};
        t || (t = {}),
        this.cid = n.uniqueId(this.cidPrefix),
        this.attributes = {},
        t.collection && (this.collection = t.collection),
        t.parse && (i = this.parse(i, t) || {});
        var r = n.result(this, "defaults");
        i = n.defaults(n.extend({}, r, i), r),
        this.set(i, t),
        this.changed = {},
        this.initialize.apply(this, arguments)
    }
    ;
    n.extend(x.prototype, u, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function() {},
        toJSON: function(e) {
            return n.clone(this.attributes)
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        get: function(e) {
            return this.attributes[e]
        },
        escape: function(e) {
            return n.escape(this.get(e))
        },
        has: function(e) {
            return null != this.get(e)
        },
        matches: function(e) {
            return !!n.iteratee(e, this)(this.attributes)
        },
        set: function(e, t, i) {
            if (null == e)
                return this;
            var r;
            if ("object" == typeof e ? (r = e,
            i = t) : (r = {})[e] = t,
            i || (i = {}),
            !this._validate(r, i))
                return !1;
            var c = i.unset
              , a = i.silent
              , o = []
              , s = this._changing;
            this._changing = !0,
            s || (this._previousAttributes = n.clone(this.attributes),
            this.changed = {});
            var l = this.attributes
              , u = this.changed
              , d = this._previousAttributes;
            for (var h in r)
                t = r[h],
                n.isEqual(l[h], t) || o.push(h),
                n.isEqual(d[h], t) ? delete u[h] : u[h] = t,
                c ? delete l[h] : l[h] = t;
            if (this.idAttribute in r && (this.id = this.get(this.idAttribute)),
            !a) {
                o.length && (this._pending = i);
                for (var p = 0; p < o.length; p++)
                    this.trigger("change:" + o[p], this, l[o[p]], i)
            }
            if (s)
                return this;
            if (!a)
                for (; this._pending; )
                    i = this._pending,
                    this._pending = !1,
                    this.trigger("change", this, i);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(e, t) {
            return this.set(e, void 0, n.extend({}, t, {
                unset: !0
            }))
        },
        clear: function(e) {
            var t = {};
            for (var i in this.attributes)
                t[i] = void 0;
            return this.set(t, n.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function(e) {
            return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
        },
        changedAttributes: function(e) {
            if (!e)
                return !!this.hasChanged() && n.clone(this.changed);
            var t = this._changing ? this._previousAttributes : this.attributes
              , i = {};
            for (var r in e) {
                var c = e[r];
                n.isEqual(t[r], c) || (i[r] = c)
            }
            return !!n.size(i) && i
        },
        previous: function(e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function() {
            return n.clone(this._previousAttributes)
        },
        fetch: function(e) {
            e = n.extend({
                parse: !0
            }, e);
            var t = this
              , i = e.success;
            return e.success = function(n) {
                var r = e.parse ? t.parse(n, e) : n;
                if (!t.set(r, e))
                    return !1;
                i && i.call(e.context, t, n, e),
                t.trigger("sync", t, n, e)
            }
            ,
            j(this, e),
            this.sync("read", this, e)
        },
        save: function(e, t, i) {
            var r;
            null == e || "object" == typeof e ? (r = e,
            i = t) : (r = {})[e] = t,
            i = n.extend({
                validate: !0,
                parse: !0
            }, i);
            var c = i.wait;
            if (r && !c) {
                if (!this.set(r, i))
                    return !1
            } else if (!this._validate(r, i))
                return !1;
            var a = this
              , o = i.success
              , s = this.attributes;
            i.success = function(e) {
                a.attributes = s;
                var t = i.parse ? a.parse(e, i) : e;
                if (c && (t = n.extend({}, r, t)),
                t && !a.set(t, i))
                    return !1;
                o && o.call(i.context, a, e, i),
                a.trigger("sync", a, e, i)
            }
            ,
            j(this, i),
            r && c && (this.attributes = n.extend({}, s, r));
            var l = this.isNew() ? "create" : i.patch ? "patch" : "update";
            "patch" !== l || i.attrs || (i.attrs = r);
            var u = this.sync(l, this, i);
            return this.attributes = s,
            u
        },
        destroy: function(e) {
            e = e ? n.clone(e) : {};
            var t = this
              , i = e.success
              , r = e.wait
              , c = function() {
                t.stopListening(),
                t.trigger("destroy", t, t.collection, e)
            };
            e.success = function(n) {
                r && c(),
                i && i.call(e.context, t, n, e),
                t.isNew() || t.trigger("sync", t, n, e)
            }
            ;
            var a = !1;
            return this.isNew() ? n.defer(e.success) : (j(this, e),
            a = this.sync("delete", this, e)),
            r || c(),
            a
        },
        url: function() {
            var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || L();
            if (this.isNew())
                return e;
            var t = this.get(this.idAttribute);
            return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t)
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(e) {
            return this._validate({}, n.extend({}, e, {
                validate: !0
            }))
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate)
                return !0;
            e = n.extend({}, this.attributes, e);
            var i = this.validationError = this.validate(e, t) || null;
            return !i || (this.trigger("invalid", this, i, n.extend(t, {
                validationError: i
            })),
            !1)
        }
    }),
    o(x, {
        keys: 1,
        values: 1,
        pairs: 1,
        invert: 1,
        pick: 0,
        omit: 0,
        chain: 1,
        isEmpty: 1
    }, "attributes");
    var v = t.Collection = function(e, t) {
        t || (t = {}),
        t.model && (this.model = t.model),
        void 0 !== t.comparator && (this.comparator = t.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        e && this.reset(e, n.extend({
            silent: !0
        }, t))
    }
      , b = {
        add: !0,
        remove: !0,
        merge: !0
    }
      , w = {
        add: !0,
        remove: !1
    }
      , M = function(e, t, n) {
        n = Math.min(Math.max(n, 0), e.length);
        var i, r = Array(e.length - n), c = t.length;
        for (i = 0; i < r.length; i++)
            r[i] = e[i + n];
        for (i = 0; i < c; i++)
            e[i + n] = t[i];
        for (i = 0; i < r.length; i++)
            e[i + c + n] = r[i]
    };
    n.extend(v.prototype, u, {
        model: x,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e)
            })
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        add: function(e, t) {
            return this.set(e, n.extend({
                merge: !1
            }, t, w))
        },
        remove: function(e, t) {
            t = n.extend({}, t);
            var i = !n.isArray(e);
            e = i ? [e] : e.slice();
            var r = this._removeModels(e, t);
            return !t.silent && r.length && (t.changes = {
                added: [],
                merged: [],
                removed: r
            },
            this.trigger("update", this, t)),
            i ? r[0] : r
        },
        set: function(e, t) {
            if (null != e) {
                t = n.extend({}, b, t),
                t.parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                var i = !n.isArray(e);
                e = i ? [e] : e.slice();
                var r = t.at;
                null != r && (r = +r),
                r > this.length && (r = this.length),
                r < 0 && (r += this.length + 1);
                var c, a, o = [], s = [], l = [], u = [], d = {}, h = t.add, p = t.merge, f = t.remove, y = !1, m = this.comparator && null == r && !1 !== t.sort, g = n.isString(this.comparator) ? this.comparator : null;
                for (a = 0; a < e.length; a++) {
                    c = e[a];
                    var _ = this.get(c);
                    if (_) {
                        if (p && c !== _) {
                            var x = this._isModel(c) ? c.attributes : c;
                            t.parse && (x = _.parse(x, t)),
                            _.set(x, t),
                            l.push(_),
                            m && !y && (y = _.hasChanged(g))
                        }
                        d[_.cid] || (d[_.cid] = !0,
                        o.push(_)),
                        e[a] = _
                    } else
                        h && (c = e[a] = this._prepareModel(c, t)) && (s.push(c),
                        this._addReference(c, t),
                        d[c.cid] = !0,
                        o.push(c))
                }
                if (f) {
                    for (a = 0; a < this.length; a++)
                        c = this.models[a],
                        d[c.cid] || u.push(c);
                    u.length && this._removeModels(u, t)
                }
                var v = !1
                  , w = !m && h && f;
                if (o.length && w ? (v = this.length !== o.length || n.some(this.models, function(e, t) {
                    return e !== o[t]
                }),
                this.models.length = 0,
                M(this.models, o, 0),
                this.length = this.models.length) : s.length && (m && (y = !0),
                M(this.models, s, null == r ? this.length : r),
                this.length = this.models.length),
                y && this.sort({
                    silent: !0
                }),
                !t.silent) {
                    for (a = 0; a < s.length; a++)
                        null != r && (t.index = r + a),
                        c = s[a],
                        c.trigger("add", c, this, t);
                    (y || v) && this.trigger("sort", this, t),
                    (s.length || u.length || l.length) && (t.changes = {
                        added: s,
                        removed: u,
                        merged: l
                    },
                    this.trigger("update", this, t))
                }
                return i ? e[0] : e
            }
        },
        reset: function(e, t) {
            t = t ? n.clone(t) : {};
            for (var i = 0; i < this.models.length; i++)
                this._removeReference(this.models[i], t);
            return t.previousModels = this.models,
            this._reset(),
            e = this.add(e, n.extend({
                silent: !0
            }, t)),
            t.silent || this.trigger("reset", this, t),
            e
        },
        push: function(e, t) {
            return this.add(e, n.extend({
                at: this.length
            }, t))
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e)
        },
        unshift: function(e, t) {
            return this.add(e, n.extend({
                at: 0
            }, t))
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e)
        },
        slice: function() {
            return c.apply(this.models, arguments)
        },
        get: function(e) {
            if (null != e)
                return this._byId[e] || this._byId[this.modelId(e.attributes || e)] || e.cid && this._byId[e.cid]
        },
        has: function(e) {
            return null != this.get(e)
        },
        at: function(e) {
            return e < 0 && (e += this.length),
            this.models[e]
        },
        where: function(e, t) {
            return this[t ? "find" : "filter"](e)
        },
        findWhere: function(e) {
            return this.where(e, !0)
        },
        sort: function(e) {
            var t = this.comparator;
            if (!t)
                throw new Error("Cannot sort a set without a comparator");
            e || (e = {});
            var i = t.length;
            return n.isFunction(t) && (t = n.bind(t, this)),
            1 === i || n.isString(t) ? this.models = this.sortBy(t) : this.models.sort(t),
            e.silent || this.trigger("sort", this, e),
            this
        },
        pluck: function(e) {
            return this.map(e + "")
        },
        fetch: function(e) {
            e = n.extend({
                parse: !0
            }, e);
            var t = e.success
              , i = this;
            return e.success = function(n) {
                var r = e.reset ? "reset" : "set";
                i[r](n, e),
                t && t.call(e.context, i, n, e),
                i.trigger("sync", i, n, e)
            }
            ,
            j(this, e),
            this.sync("read", this, e)
        },
        create: function(e, t) {
            t = t ? n.clone(t) : {};
            var i = t.wait;
            if (!(e = this._prepareModel(e, t)))
                return !1;
            i || this.add(e, t);
            var r = this
              , c = t.success;
            return t.success = function(e, t, n) {
                i && r.add(e, n),
                c && c.call(n.context, e, t, n)
            }
            ,
            e.save(null, t),
            e
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.models,{
                model: this.model,
                comparator: this.comparator
            })
        },
        modelId: function(e) {
            return e[this.model.prototype.idAttribute || "id"]
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(e, t) {
            if (this._isModel(e))
                return e.collection || (e.collection = this),
                e;
            t = t ? n.clone(t) : {},
            t.collection = this;
            var i = new this.model(e,t);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, t),
            !1) : i
        },
        _removeModels: function(e, t) {
            for (var n = [], i = 0; i < e.length; i++) {
                var r = this.get(e[i]);
                if (r) {
                    var c = this.indexOf(r);
                    this.models.splice(c, 1),
                    this.length--,
                    delete this._byId[r.cid];
                    var a = this.modelId(r.attributes);
                    null != a && delete this._byId[a],
                    t.silent || (t.index = c,
                    r.trigger("remove", r, this, t)),
                    n.push(r),
                    this._removeReference(r, t)
                }
            }
            return n
        },
        _isModel: function(e) {
            return e instanceof x
        },
        _addReference: function(e, t) {
            this._byId[e.cid] = e;
            var n = this.modelId(e.attributes);
            null != n && (this._byId[n] = e),
            e.on("all", this._onModelEvent, this)
        },
        _removeReference: function(e, t) {
            delete this._byId[e.cid];
            var n = this.modelId(e.attributes);
            null != n && delete this._byId[n],
            this === e.collection && delete e.collection,
            e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(e, t, n, i) {
            if (t) {
                if (("add" === e || "remove" === e) && n !== this)
                    return;
                if ("destroy" === e && this.remove(t, i),
                "change" === e) {
                    var r = this.modelId(t.previousAttributes())
                      , c = this.modelId(t.attributes);
                    r !== c && (null != r && delete this._byId[r],
                    null != c && (this._byId[c] = t))
                }
            }
            this.trigger.apply(this, arguments)
        }
    }),
    o(v, {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 0,
        foldl: 0,
        inject: 0,
        reduceRight: 0,
        foldr: 0,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 3,
        includes: 3,
        contains: 3,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3,
        groupBy: 3,
        countBy: 3,
        sortBy: 3,
        indexBy: 3,
        findIndex: 3,
        findLastIndex: 3
    }, "models");
    var S = t.View = function(e) {
        this.cid = n.uniqueId("view"),
        n.extend(this, n.pick(e, P)),
        this._ensureElement(),
        this.initialize.apply(this, arguments)
    }
      , C = /^(\S+)\s*(.*)$/
      , P = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    n.extend(S.prototype, u, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this._removeElement(),
            this.stopListening(),
            this
        },
        _removeElement: function() {
            this.$el.remove()
        },
        setElement: function(e) {
            return this.undelegateEvents(),
            this._setElement(e),
            this.delegateEvents(),
            this
        },
        _setElement: function(e) {
            this.$el = e instanceof t.$ ? e : t.$(e),
            this.el = this.$el[0]
        },
        delegateEvents: function(e) {
            if (e || (e = n.result(this, "events")),
            !e)
                return this;
            this.undelegateEvents();
            for (var t in e) {
                var i = e[t];
                if (n.isFunction(i) || (i = this[i]),
                i) {
                    var r = t.match(C);
                    this.delegate(r[1], r[2], n.bind(i, this))
                }
            }
            return this
        },
        delegate: function(e, t, n) {
            return this.$el.on(e + ".delegateEvents" + this.cid, t, n),
            this
        },
        undelegateEvents: function() {
            return this.$el && this.$el.off(".delegateEvents" + this.cid),
            this
        },
        undelegate: function(e, t, n) {
            return this.$el.off(e + ".delegateEvents" + this.cid, t, n),
            this
        },
        _createElement: function(e) {
            return document.createElement(e)
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(n.result(this, "el"));
            else {
                var e = n.extend({}, n.result(this, "attributes"));
                this.id && (e.id = n.result(this, "id")),
                this.className && (e.class = n.result(this, "className")),
                this.setElement(this._createElement(n.result(this, "tagName"))),
                this._setAttributes(e)
            }
        },
        _setAttributes: function(e) {
            this.$el.attr(e)
        }
    }),
    t.sync = function(e, i, r) {
        var c = k[e];
        n.defaults(r || (r = {}), {
            emulateHTTP: t.emulateHTTP,
            emulateJSON: t.emulateJSON
        });
        var a = {
            type: c,
            dataType: "json"
        };
        if (r.url || (a.url = n.result(i, "url") || L()),
        null != r.data || !i || "create" !== e && "update" !== e && "patch" !== e || (a.contentType = "application/json",
        a.data = JSON.stringify(r.attrs || i.toJSON(r))),
        r.emulateJSON && (a.contentType = "application/x-www-form-urlencoded",
        a.data = a.data ? {
            model: a.data
        } : {}),
        r.emulateHTTP && ("PUT" === c || "DELETE" === c || "PATCH" === c)) {
            a.type = "POST",
            r.emulateJSON && (a.data._method = c);
            var o = r.beforeSend;
            r.beforeSend = function(e) {
                if (e.setRequestHeader("X-HTTP-Method-Override", c),
                o)
                    return o.apply(this, arguments)
            }
        }
        "GET" === a.type || r.emulateJSON || (a.processData = !1);
        var s = r.error;
        r.error = function(e, t, n) {
            r.textStatus = t,
            r.errorThrown = n,
            s && s.call(r.context, e, t, n)
        }
        ;
        var l = r.xhr = t.ajax(n.extend(a, r));
        return i.trigger("request", i, l, r),
        l
    }
    ;
    var k = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET"
    };
    t.ajax = function() {
        return t.$.ajax.apply(t.$, arguments)
    }
    ;
    var E = t.Router = function(e) {
        e || (e = {}),
        e.routes && (this.routes = e.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    }
      , T = /\((.*?)\)/g
      , A = /(\(\?)?:\w+/g
      , N = /\*\w+/g
      , I = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(E.prototype, u, {
        initialize: function() {},
        route: function(e, i, r) {
            n.isRegExp(e) || (e = this._routeToRegExp(e)),
            n.isFunction(i) && (r = i,
            i = ""),
            r || (r = this[i]);
            var c = this;
            return t.history.route(e, function(n) {
                var a = c._extractParameters(e, n);
                !1 !== c.execute(r, a, i) && (c.trigger.apply(c, ["route:" + i].concat(a)),
                c.trigger("route", i, a),
                t.history.trigger("route", c, i, a))
            }),
            this
        },
        execute: function(e, t, n) {
            e && e.apply(this, t)
        },
        navigate: function(e, n) {
            return t.history.navigate(e, n),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = n.result(this, "routes");
                for (var e, t = n.keys(this.routes); null != (e = t.pop()); )
                    this.route(e, this.routes[e])
            }
        },
        _routeToRegExp: function(e) {
            return e = e.replace(I, "\\$&").replace(T, "(?:$1)?").replace(A, function(e, t) {
                return t ? e : "([^/?]+)"
            }).replace(N, "([^?]*?)"),
            new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(e, t) {
            var i = e.exec(t).slice(1);
            return n.map(i, function(e, t) {
                return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
            })
        }
    });
    var $ = t.History = function() {
        this.handlers = [],
        this.checkUrl = n.bind(this.checkUrl, this),
        "undefined" != typeof window && (this.location = window.location,
        this.history = window.history)
    }
      , O = /^[#\/]|\s+$/g
      , F = /^\/+|\/+$/g
      , H = /#.*$/;
    $.started = !1,
    n.extend($.prototype, u, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
        },
        matchRoot: function() {
            return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
        },
        decodeFragment: function(e) {
            return decodeURI(e.replace(/%25/g, "%2525"))
        },
        getSearch: function() {
            var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return e ? e[0] : ""
        },
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getPath: function() {
            var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return "/" === e.charAt(0) ? e.slice(1) : e
        },
        getFragment: function(e) {
            return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()),
            e.replace(O, "")
        },
        start: function(e) {
            if ($.started)
                throw new Error("Backbone.history has already been started");
            if ($.started = !0,
            this.options = n.extend({
                root: "/"
            }, this.options, e),
            this.root = this.options.root,
            this._wantsHashChange = !1 !== this.options.hashChange,
            this._hasHashChange = "onhashchange"in window && (void 0 === document.documentMode || document.documentMode > 7),
            this._useHashChange = this._wantsHashChange && this._hasHashChange,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !(!this.history || !this.history.pushState),
            this._usePushState = this._wantsPushState && this._hasPushState,
            this.fragment = this.getFragment(),
            this.root = ("/" + this.root + "/").replace(F, "/"),
            this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var t = this.root.slice(0, -1) || "/";
                    return this.location.replace(t + "#" + this.getPath()),
                    !0
                }
                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                    replace: !0
                })
            }
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe"),
                this.iframe.src = "javascript:0",
                this.iframe.style.display = "none",
                this.iframe.tabIndex = -1;
                var i = document.body
                  , r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                r.document.open(),
                r.document.close(),
                r.location.hash = "#" + this.fragment
            }
            var c = window.addEventListener || function(e, t) {
                return attachEvent("on" + e, t)
            }
            ;
            if (this._usePushState ? c("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? c("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            !this.options.silent)
                return this.loadUrl()
        },
        stop: function() {
            var e = window.removeEventListener || function(e, t) {
                return detachEvent("on" + e, t)
            }
            ;
            this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1),
            this.iframe && (document.body.removeChild(this.iframe),
            this.iframe = null),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            $.started = !1
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function(e) {
            var t = this.getFragment();
            if (t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)),
            t === this.fragment)
                return !1;
            this.iframe && this.navigate(t),
            this.loadUrl()
        },
        loadUrl: function(e) {
            return !!this.matchRoot() && (e = this.fragment = this.getFragment(e),
            n.some(this.handlers, function(t) {
                if (t.route.test(e))
                    return t.callback(e),
                    !0
            }))
        },
        navigate: function(e, t) {
            if (!$.started)
                return !1;
            t && !0 !== t || (t = {
                trigger: !!t
            }),
            e = this.getFragment(e || "");
            var n = this.root;
            "" !== e && "?" !== e.charAt(0) || (n = n.slice(0, -1) || "/");
            var i = n + e;
            if (e = this.decodeFragment(e.replace(H, "")),
            this.fragment !== e) {
                if (this.fragment = e,
                this._usePushState)
                    this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(i);
                    if (this._updateHash(this.location, e, t.replace),
                    this.iframe && e !== this.getHash(this.iframe.contentWindow)) {
                        var r = this.iframe.contentWindow;
                        t.replace || (r.document.open(),
                        r.document.close()),
                        this._updateHash(r.location, e, t.replace)
                    }
                }
                return t.trigger ? this.loadUrl(e) : void 0
            }
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var i = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(i + "#" + t)
            } else
                e.hash = "#" + t
        }
    }),
    t.history = new $;
    var D = function(e, t) {
        var i, r = this;
        return i = e && n.has(e, "constructor") ? e.constructor : function() {
            return r.apply(this, arguments)
        }
        ,
        n.extend(i, r, t),
        i.prototype = n.create(r.prototype, e),
        i.prototype.constructor = i,
        i.__super__ = r.prototype,
        i
    };
    x.extend = v.extend = E.extend = S.extend = $.extend = D;
    var L = function() {
        throw new Error('A "url" property or function must be specified')
    }
      , j = function(e, t) {
        var n = t.error;
        t.error = function(i) {
            n && n.call(t.context, e, i, t),
            e.trigger("error", e, i, t)
        }
    };
    return t
}),
function() {
    "use strict";
    function e(t, i) {
        var r;
        if (i = i || {},
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        this.targetElement = null,
        this.touchStartX = 0,
        this.touchStartY = 0,
        this.lastTouchIdentifier = 0,
        this.touchBoundary = i.touchBoundary || 10,
        this.layer = t,
        this.tapDelay = i.tapDelay || 200,
        this.tapTimeout = i.tapTimeout || 700,
        !e.notNeeded(t)) {
            for (var c = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, o = 0, s = c.length; o < s; o++)
                a[c[o]] = function(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                }(a[c[o]], a);
            n && (t.addEventListener("mouseover", this.onMouse, !0),
            t.addEventListener("mousedown", this.onMouse, !0),
            t.addEventListener("mouseup", this.onMouse, !0)),
            t.addEventListener("click", this.onClick, !0),
            t.addEventListener("touchstart", this.onTouchStart, !1),
            t.addEventListener("touchmove", this.onTouchMove, !1),
            t.addEventListener("touchend", this.onTouchEnd, !1),
            t.addEventListener("touchcancel", this.onTouchCancel, !1),
            Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, i) {
                var r = Node.prototype.removeEventListener;
                "click" === e ? r.call(t, e, n.hijacked || n, i) : r.call(t, e, n, i)
            }
            ,
            t.addEventListener = function(e, n, i) {
                var r = Node.prototype.addEventListener;
                "click" === e ? r.call(t, e, n.hijacked || (n.hijacked = function(e) {
                    e.propagationStopped || n(e)
                }
                ), i) : r.call(t, e, n, i)
            }
            ),
            "function" == typeof t.onclick && (r = t.onclick,
            t.addEventListener("click", function(e) {
                r(e)
            }, !1),
            t.onclick = null)
        }
    }
    var t = navigator.userAgent.indexOf("Windows Phone") >= 0
      , n = navigator.userAgent.indexOf("Android") > 0 && !t
      , i = /iP(ad|hone|od)/.test(navigator.userAgent) && !t
      , r = i && /OS 4_\d(_\d)?/.test(navigator.userAgent)
      , c = i && /OS [6-7]_\d/.test(navigator.userAgent)
      , a = navigator.userAgent.indexOf("BB10") > 0;
    e.prototype.needsClick = function(e) {
        switch (e.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (e.disabled)
                return !0;
            break;
        case "input":
            if (i && "file" === e.type || e.disabled)
                return !0;
            break;
        case "label":
        case "iframe":
        case "video":
            return !0
        }
        return /\bneedsclick\b/.test(e.className)
    }
    ,
    e.prototype.needsFocus = function(e) {
        switch (e.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !n;
        case "input":
            switch (e.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return !1
            }
            return !e.disabled && !e.readOnly;
        default:
            return /\bneedsfocus\b/.test(e.className)
        }
    }
    ,
    e.prototype.sendClick = function(e, t) {
        var n, i;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(),
        i = t.changedTouches[0],
        n = document.createEvent("MouseEvents"),
        n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
        n.forwardedTouchEvent = !0,
        e.dispatchEvent(n)
    }
    ,
    e.prototype.determineEventType = function(e) {
        return n && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }
    ,
    e.prototype.focus = function(e) {
        var t;
        i && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length,
        e.setSelectionRange(t, t)) : e.focus()
    }
    ,
    e.prototype.updateScrollParent = function(e) {
        var t, n;
        if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n,
                    e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }
    ,
    e.prototype.getTargetElementFromEventTarget = function(e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }
    ,
    e.prototype.onTouchStart = function(e) {
        var t, n, c;
        if (e.targetTouches.length > 1)
            return !0;
        if (t = this.getTargetElementFromEventTarget(e.target),
        n = e.targetTouches[0],
        i) {
            if (c = window.getSelection(),
            c.rangeCount && !c.isCollapsed)
                return !0;
            if (!r) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier)
                    return e.preventDefault(),
                    !1;
                this.lastTouchIdentifier = n.identifier,
                this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0,
        this.trackingClickStart = e.timeStamp,
        this.targetElement = t,
        this.touchStartX = n.pageX,
        this.touchStartY = n.pageY,
        e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(),
        !0
    }
    ,
    e.prototype.touchHasMoved = function(e) {
        var t = e.changedTouches[0]
          , n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
    }
    ,
    e.prototype.onTouchMove = function(e) {
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1,
        this.targetElement = null),
        !0)
    }
    ,
    e.prototype.findControl = function(e) {
        return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }
    ,
    e.prototype.onTouchEnd = function(e) {
        var t, a, o, s, l, u = this.targetElement;
        if (!this.trackingClick)
            return !0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay)
            return this.cancelNextClick = !0,
            !0;
        if (e.timeStamp - this.trackingClickStart > this.tapTimeout)
            return !0;
        if (this.cancelNextClick = !1,
        this.lastClickTime = e.timeStamp,
        a = this.trackingClickStart,
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        c && (l = e.changedTouches[0],
        u = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || u,
        u.fastClickScrollParent = this.targetElement.fastClickScrollParent),
        "label" === (o = u.tagName.toLowerCase())) {
            if (t = this.findControl(u)) {
                if (this.focus(u),
                n)
                    return !1;
                u = t
            }
        } else if (this.needsFocus(u))
            return e.timeStamp - a > 100 || i && window.top !== window && "input" === o ? (this.targetElement = null,
            !1) : (this.focus(u),
            this.sendClick(u, e),
            i && "select" === o || (this.targetElement = null,
            e.preventDefault()),
            !1);
        return !(!i || r || !(s = u.fastClickScrollParent) || s.fastClickLastScrollTop === s.scrollTop) || (this.needsClick(u) || (e.preventDefault(),
        this.sendClick(u, e)),
        !1)
    }
    ,
    e.prototype.onTouchCancel = function() {
        this.trackingClick = !1,
        this.targetElement = null
    }
    ,
    e.prototype.onMouse = function(e) {
        return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0,
        e.stopPropagation(),
        e.preventDefault(),
        !1))))
    }
    ,
    e.prototype.onClick = function(e) {
        var t;
        return this.trackingClick ? (this.targetElement = null,
        this.trackingClick = !1,
        !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e),
        t || (this.targetElement = null),
        t)
    }
    ,
    e.prototype.destroy = function() {
        var e = this.layer;
        n && (e.removeEventListener("mouseover", this.onMouse, !0),
        e.removeEventListener("mousedown", this.onMouse, !0),
        e.removeEventListener("mouseup", this.onMouse, !0)),
        e.removeEventListener("click", this.onClick, !0),
        e.removeEventListener("touchstart", this.onTouchStart, !1),
        e.removeEventListener("touchmove", this.onTouchMove, !1),
        e.removeEventListener("touchend", this.onTouchEnd, !1),
        e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }
    ,
    e.notNeeded = function(e) {
        var t, i, r;
        if (void 0 === window.ontouchstart)
            return !0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!n)
                return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (-1 !== t.content.indexOf("user-scalable=no"))
                    return !0;
                if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                    return !0
            }
        }
        if (a && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),
        r[1] >= 10 && r[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== t.content.indexOf("user-scalable=no"))
                return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth)
                return !0
        }
        return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
    }
    ,
    e.attach = function(t, n) {
        return new e(t,n)
    }
    ,
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define("module/components/us2016/map-dependencies/vendor_manual/fastclick", [], function() {
        return e
    }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach,
    module.exports.FastClick = e) : window.FastClick = e
}(),
define("module/components/us2016/map-dependencies/vendor_manual/can_hover", [], function() {
    return function(e) {
        var t;
        if (!window.matchMedia)
            return t = !/Opera Mini|Android|IEMobile|Windows (Phone|CE)|(XBL|Zune)WP7/.test(navigator.userAgent),
            void e(t);
        var n = "(hover: hover),(-moz-hover: hover),(-ms-hover: hover),(-webkit-hover: hover)";
        if (window.matchMedia("(hover: none),(-moz-hover: none),(-ms-hover: none),(-webkit-hover: none),(hover: on-demand),(-moz-hover: on-demand),(-ms-hover: on-demand),(-webkit-hover: on-demand)," + n).matches) {
            var i = function(n) {
                var i = n.matches;
                i !== t && (t = i,
                e(t))
            }
              , r = window.matchMedia(n);
            return r.addListener(i),
            void i(r)
        }
        return window.PointerEvent || window.MSPointerEvent ? (t = !((window.navigator.maxTouchPoints || window.navigator.msMaxTouchPoints) > 0),
        void e(t)) : window.matchMedia("(touch-enabled),(-moz-touch-enabled),(-ms-touch-enabled),(-webkit-touch-enabled)").matches ? (t = !1,
        void e(t)) : "ontouchstart"in window ? (t = !1,
        void e(t)) : void e(!0)
    }
}),
define("module/components/us2016/map-dependencies/data/map-es6", ["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        type: "Topology",
        transform: {
            scale: [.01034275033263647, .006483142447836423],
            translate: [-177.85280698224665, 18.953377615730133]
        },
        arcs: [[[10350, 3690], [-21, -77], [31, -26], [3, -39], [25, -50], [-70, -18], [-7, 25], [-3, 5]], [[10308, 3510], [-14, 47], [-42, 0]], [[10252, 3557], [-159, 6]], [[10093, 3563], [21, 107]], [[10114, 3670], [76, -3]], [[10190, 3667], [111, -4], [49, 27]], [[8292, 4291], [-18, -18], [0, -89], [-41, -26], [-18, -52], [11, -47], [0, -81], [80, -63], [27, -41], [38, -28], [4, -59]], [[8375, 3787], [-160, 0], [-187, 0], [-157, 0]], [[7871, 3787], [0, 277], [-41, 47], [31, 52]], [[7861, 4163], [-3, 55], [-21, 50], [-4, 120], [-27, 107], [3, 86], [-14, 53]], [[7795, 4634], [201, 0], [0, 57], [32, -9], [10, -80], [94, -42], [49, 18], [59, -15], [34, -30], [97, -43], [105, 8], [45, -29], [-77, -33], [-48, -34], [-104, -111]], [[7136, 4632], [0, -469]], [[7136, 4163], [0, -146]], [[7136, 4017], [-170, 0], [-170, 0], [-188, 0], [-149, 0], [0, -77]], [[6459, 3940], [-24, 36], [-25, -26], [-79, -4], [-56, -17], [-21, 58], [-55, 77], [-14, 55], [-42, -28], [-21, 52], [18, 133], [-21, -5], [-90, 101], [-21, 64], [-31, 42], [0, 154]], [[5977, 4632], [232, 0], [170, 0], [212, 0], [170, 0], [191, 0], [184, 0]], [[7861, 4163], [-160, 0], [-156, 0], [-225, 0], [-184, 0]], [[7136, 4632], [156, 0], [257, 2], [246, 0]], [[2152, 183], [38, -25], [7, -39], [28, -41], [-45, -29], [-35, -49], [-21, 10], [-3, 71], [-14, 39], [21, 42], [24, 21]], [[2055, 319], [55, -35], [-27, -32], [-39, 40], [11, 27]], [[1930, 408], [3, -50], [-31, 13], [28, 37]], [[1784, 506], [-4, -57], [-34, 21], [10, 29], [28, 7]], [[6459, 3940], [0, -385]], [[6459, 3555], [-292, 0]], [[6167, 3555], [-284, 0]], [[5883, 3555], [0, 300], [-17, 91], [31, 50], [35, 134], [-35, 42]], [[5897, 4172], [-17, 56], [0, 404]], [[5880, 4632], [97, 0]], [[5897, 4172], [-212, 0], [-52, -11], [-63, -31], [-86, -16], [-69, 12], [-39, -22], [-49, 11], [-10, 67], [-31, 18]], [[5286, 4200], [-73, 34], [0, 42], [-38, 105], [-4, 43], [-27, 42], [-4, 44], [21, 19], [52, -25], [90, -9], [21, 7], [21, -87], [-35, -46], [17, -29], [32, 65], [0, 51], [17, 28], [-24, 67], [0, 46], [-25, 35], [306, 0], [247, 0]], [[6653, 2783], [0, -875]], [[6653, 1908], [-191, 0], [-131, 63], [-233, 117], [4, 33]], [[6102, 2121], [10, 111], [14, 42], [-4, 40], [39, 50], [-49, 111]], [[6112, 2475], [7, 24], [-17, 148], [65, 13], [0, 123]], [[6167, 2783], [184, 0], [150, 0], [152, 0]], [[6102, 2121], [-229, -26], [-14, 21], [0, 50], [-25, 52], [-55, 61], [-31, 1], [-14, 47], [-63, 12], [-34, 46], [-87, 4], [-17, 17], [0, 89], [-25, 11], [-10, 40], [-31, 37], [-18, 46], [-42, 45], [8, 98], [-29, 6], [-27, 32], [-7, 107], [-49, 27], [-10, 61], [-63, 74], [-7, 137], [-52, 71], [-7, 37], [32, 72], [0, 102], [-14, 57]], [[5182, 3555], [236, 0], [177, 0]], [[5595, 3555], [0, -463], [108, -126], [72, -76], [139, -170], [198, -245]], [[7330, 3247], [0, -464]], [[7330, 2783], [-93, 0]], [[7237, 2783], [-164, 0], [-277, 0], [-143, 0]], [[6653, 2783], [0, 617]], [[6653, 3400], [226, 0], [257, 0]], [[7136, 3400], [194, 0], [0, -153]], [[5595, 3555], [288, 0]], [[6167, 3555], [0, -772]], [[7237, 2707], [-4, -1], [0, -586], [-3, -108], [-150, 0], [-197, 0], [17, -35]], [[6900, 1977], [-170, 1], [0, -70], [-77, 0]], [[7237, 2783], [0, -76]], [[5182, 3555], [-18, 36], [0, 169], [14, 6], [18, 112], [0, 113], [14, 43], [0, 133], [10, 30], [66, 3]], [[6459, 3555], [0, -155], [194, 0]], [[7136, 3709], [0, -309]], [[7136, 4017], [0, -308]], [[8521, 2629], [-39, -97], [4, -34], [-21, -23]], [[8465, 2475], [-28, -49], [0, -40], [-48, -66], [-7, -54], [0, -97]], [[8382, 2169], [-191, -2], [-87, 0]], [[8104, 2167], [0, 84], [-45, 15]], [[8059, 2266], [4, 34], [3, 234], [-18, 172]], [[8048, 2706], [185, 0], [246, 0], [10, -31], [-31, -48], [63, 2]], [[8434, 3633], [45, -60], [0, -37], [-24, -51], [-56, -18], [-10, -37], [14, -32], [-14, -37], [-31, -25], [-4, -31]], [[8354, 3305], [-28, 37], [-132, -6], [-166, -1], [-91, 4]], [[7937, 3339], [-10, 16], [0, 93], [-24, 49], [-4, 57], [-31, 81]], [[7868, 3635], [-14, 28], [17, 65], [0, 59]], [[8375, 3787], [14, -30], [-7, -56], [17, -38], [35, -30]], [[8048, 2783], [-156, 0], [-225, 0], [-177, 0], [-160, 0]], [[7330, 3247], [184, 0], [285, 0], [180, 0]], [[7979, 3247], [42, -42], [-21, -31], [28, -50], [20, -9], [0, -332]], [[8354, 3305], [0, -81], [69, -94], [7, -51], [52, -13], [-24, -94], [83, -84], [11, -95], [28, -13]], [[8580, 2780], [-7, -57], [-25, -17]], [[8548, 2706], [-7, 1]], [[8541, 2707], [-3, 0]], [[8538, 2707], [-17, -78]], [[8048, 2706], [0, 77]], [[7979, 3247], [-31, 47], [-11, 45]], [[7136, 3709], [250, 0], [288, 0], [52, -33], [62, 16], [80, -57]], [[8059, 2266], [-63, 46], [-45, 1], [-55, -30], [-66, 18], [-90, 2], [-28, 41], [-63, -3], [-41, 13], [-7, 28], [-42, -2], [-31, 30], [0, 296], [-291, 1]], [[8541, 1734], [-20, -2], [-45, 32], [-14, -50], [73, -25], [-11, -58], [56, -37], [-28, -30], [-49, 59], [-17, -48], [-45, 22], [-31, -26], [-45, 23], [-28, 71], [-49, 3], [-18, -36], [-89, 37], [-56, -11], [4, 44]], [[8129, 1702], [3, 66], [17, 63], [4, 57], [-49, 121], [0, 158]], [[8382, 2169], [3, -82], [21, -29], [-14, -39], [-34, -46], [-25, -115], [188, 0], [-11, -34], [31, -90]], [[8129, 1702], [-29, -47], [-69, -45], [10, 47], [-30, 0], [10, -45], [-45, -82], [-80, -44], [-80, -74], [-35, -100], [-31, -28], [24, -25], [-10, -46], [24, -95], [-3, -54], [-42, 32], [-42, 0], [-20, 24], [-66, 30], [-18, 75], [-17, 25], [-3, 80], [-25, 18], [-31, 70], [-21, 20], [-10, 50], [-38, 101], [-56, 62], [-3, 18], [-94, 14], [-42, -43], [-10, -57], [-24, -36], [-77, 47], [-48, 45], [-25, 56], [0, 41], [-17, 53], [-90, 97], [-17, 33], [-49, 58]], [[10252, 3557], [-3, -109]], [[10249, 3448], [-11, 6], [-107, -21], [-56, -32]], [[10075, 3401], [11, 41], [7, 121]], [[10356, 3722], [-6, -32]], [[10190, 3667], [7, 129], [17, 34], [21, 85], [31, 16], [18, 89]], [[10284, 4020], [13, 42], [25, 2]], [[10322, 4064], [10, -296], [24, -46]], [[10308, 3510], [-17, -38], [-42, -24]], [[10114, 3670], [0, 126], [-18, 80], [14, 52], [-7, 90]], [[10103, 4018], [181, 2]], [[8920, 2473], [3, -47], [31, -249], [25, -115], [-14, -81], [10, -123]], [[8975, 1858], [-250, 0], [21, -51], [-3, -29]], [[8743, 1778], [-21, -36], [-45, 44], [-28, -22]], [[8649, 1764], [-7, 261], [24, 262], [11, 166], [-7, 21]], [[8670, 2474], [250, -1]], [[9316, 1813], [23, -149], [29, -91], [34, -83], [-10, -50], [17, -48], [48, -180], [-13, -163], [-28, -85], [-63, -13], [-7, 64], [-27, 57], [-25, 1], [-10, 77], [-45, 64], [-34, 96], [-4, 45], [-18, 19], [22, 91], [3, 46], [-18, 66], [-59, 54], [-31, 65], [-28, 24], [-31, -6], [-45, -47], [-49, -10], [-17, 62], [-55, 32], [-14, 29], [-56, -12], [-31, 19], [-31, -9]], [[8975, 1858], [18, -45], [253, -22], [31, 37], [39, -15]], [[9375, 2018], [-42, -72], [6, -46], [-23, -48], [0, -39]], [[8920, 2473], [121, 0]], [[9041, 2473], [118, 2]], [[9159, 2475], [-24, -45], [45, -35], [31, -79], [63, -75], [20, -55], [22, -14], [10, -69], [20, -15], [4, -56], [25, -14]], [[8649, 1764], [-59, -2], [-49, -28]], [[8465, 2475], [205, -1]], [[9600, 2303], [-21, -16], [-38, -64], [-3, -32], [-63, -70], [-77, -68], [-23, -35]], [[9159, 2475], [80, 32], [122, -9], [24, -50], [111, -4], [104, -141]], [[8708, 3631], [-3, -39], [27, -79]], [[8732, 3513], [0, -366], [-14, -37], [14, -66], [-48, -98], [0, -39]], [[8684, 2907], [-7, -50], [-38, -15], [-7, -47], [-32, 23], [-20, -38]], [[8434, 3633], [274, -2]], [[8996, 3508], [0, -401]], [[8996, 3107], [0, -37], [-59, -49], [-62, -87], [-21, 13], [-56, -13], [-21, -27], [-34, 23], [-59, -23]], [[8732, 3513], [32, -15], [34, 20]], [[8798, 3518], [198, 0], [0, -10]], [[9211, 3002], [-3, -41], [31, -73], [31, -22]], [[9270, 2866], [-69, -61], [-42, -60], [-52, -23]], [[9107, 2722], [-170, 3], [-111, 6], [-125, -2], [-17, -23], [-136, 0]], [[8996, 3107], [35, 2], [21, -44], [55, -30], [31, -3], [42, 22], [31, -52]], [[9846, 2714], [4, -102], [24, -39], [-41, -44], [-32, -7], [-3, -84], [-66, -17], [-45, -42], [-35, -73], [-52, -3]], [[9041, 2473], [4, 38], [55, 52], [24, 1], [49, 32], [7, 26], [52, 25], [35, 4], [34, 72]], [[9301, 2723], [136, -10], [184, 0], [225, 1]], [[9409, 3346], [-31, -157], [-39, -37], [-20, 1], [-66, -77], [-4, -47], [-38, -27]], [[8996, 3508], [128, 5]], [[9124, 3513], [101, -52], [73, 20], [31, 32], [80, 39]], [[9409, 3552], [0, -206]], [[9107, 2722], [194, 1]], [[8538, 2707], [3, 0]], [[9881, 2933], [28, 7]], [[9909, 2940], [-28, -7]], [[9680, 3144], [59, -63]], [[9739, 3081], [7, -5]], [[9746, 3076], [0, -29], [-21, -18], [-3, -39], [24, 8], [10, -28], [28, -9], [35, -47], [-11, -70], [4, -59], [38, -15], [10, -56], [-10, 0], [-4, 0]], [[9270, 2866], [31, -50], [32, 19], [38, -6], [63, 34], [6, 46], [52, 96], [39, -2], [83, 112], [17, 40], [38, -40], [11, 29]], [[8455, 4263], [27, -39], [91, -27], [34, -21], [63, -11], [35, -37], [-4, -55], [24, -39]], [[8725, 4034], [-3, -45], [14, -98], [-21, -33], [0, -47], [-17, -49], [10, -131]], [[8292, 4291], [14, -13], [72, 31], [42, 5], [0, -44], [35, -7]], [[9513, 3203], [-3, -79], [41, 42], [59, 8], [28, 27], [28, -16], [14, -41]], [[9409, 3346], [0, -143], [104, 0]], [[9902, 3216], [-17, -31], [20, -85], [25, -40], [10, -52]], [[9940, 3008], [-3, 0]], [[9937, 3008], [-59, 1], [-11, 194]], [[9867, 3203], [35, 13]], [[9749, 3061], [-3, 15]], [[9739, 3081], [21, -5], [-11, -15]], [[9937, 3008], [-28, -68]], [[9881, 2933], [-62, 78], [14, 100], [-35, -32], [7, -122], [-52, 33], [-4, 15], [-14, -10], [-10, 3], [0, 18], [24, 30], [0, 15]], [[9513, 3203], [143, 0], [211, 0]], [[9944, 3248], [24, 19], [-42, 68], [0, 30], [49, 90]], [[9975, 3455], [76, -55]], [[10051, 3400], [-35, -82], [28, -30], [-10, -77], [-31, -35], [-32, -74], [-62, 44], [-11, 62], [46, 40]], [[10211, 3421], [14, -23], [-42, -25], [-121, -34], [-11, 29], [125, 32], [35, 21]], [[10075, 3401], [-24, -1]], [[9975, 3455], [-31, 25], [-7, 49], [-25, 25], [-281, 1], [-145, 0], [0, 41]], [[9486, 3596], [59, 49], [27, 36], [-21, 71], [66, 18], [73, -20], [63, 2], [76, 44], [14, 108], [76, 92], [49, 21], [135, 1]], [[9944, 3248], [-42, -32]], [[9409, 3552], [77, 44]], [[10322, 4064], [24, 14], [56, 77], [-4, 31], [24, 53], [4, 41], [77, 118], [30, -43], [70, 24], [38, -42], [0, -202], [66, -101], [-7, -67], [-101, -27], [-37, -31], [-32, 2], [-10, -37], [-35, -7], [-38, -36], [-38, -6], [0, -30], [-53, -73]], [[8798, 3518], [21, 18], [24, 58], [18, 110], [-32, 98], [11, 28], [-11, 46], [28, 52], [18, 77], [65, 14], [42, 118], [63, -15], [86, -57], [11, -70], [-4, -81], [-24, -42], [-24, -8], [-7, -50], [21, -12], [42, 59], [34, 13], [28, -40], [20, -128], [-13, -60], [-59, -55], [-32, -78]], [[8455, 4263], [59, 37], [38, 4], [69, 57], [45, -44], [59, -20], [25, -45], [69, -9], [76, 39], [80, 9], [0, -44], [63, 5], [38, -86], [-129, 22], [-34, -19], [-56, -4], [-28, -35], [-52, 0], [-52, -96]], [[1069, 5401], [24, -53], [-62, -16], [14, 67], [24, 2]], [[1361, 5569], [31, -14], [0, -47], [-66, -6], [-35, -32], [-41, 32], [31, 32], [80, 35]], [[4509, 5705], [17, -23], [3, -63], [-17, -30], [-59, 37], [11, 63], [10, 11], [35, 5]], [[4280, 5768], [52, -16], [66, -92], [38, -114], [-11, -30], [-69, 73], [-42, 14], [18, 52], [-21, 85], [-31, 28]], [[4241, 5848], [24, -15], [-48, -54], [-18, 42], [42, 27]], [[4262, 5880], [70, -14], [10, -57], [-21, -24], [-52, 1], [-7, 94]], [[4102, 5938], [42, -9], [25, -52], [13, -71], [-45, -13], [-28, 48], [-7, 97]], [[2402, 6011], [52, -2], [-17, -95], [-63, -9], [-55, -67], [-63, 29], [-14, 83], [87, 58], [52, -17], [21, 20]], [[4071, 6058], [80, -31], [3, -86], [-66, 27], [-13, -43], [-70, 74], [18, 57], [48, 2]], [[4151, 6080], [18, -31], [55, -14], [-7, -37], [31, -38], [0, -40], [-35, -31], [-44, 89], [0, 60], [-18, 42]], [[2437, 6095], [41, -41], [-73, -29], [-24, 24], [56, 46]], [[1132, 6392], [41, -26], [4, -51], [-94, -6], [-62, 36], [76, 46], [35, 1]], [[593, 6917], [77, -35], [56, 20], [34, -32], [80, -30], [-55, -36], [-111, 61], [-52, -21], [-42, 18], [13, 55]], [[2072, 8090], [83, -39], [49, 1], [108, -40], [135, -1], [7, -51], [69, -20], [219, 15], [229, -55], [122, 0], [90, -30], [163, 21], [94, -40], [121, -31], [0, -473], [4, -23], [0, -947], [93, -17], [87, 25], [-7, -42], [153, -129], [17, -51], [80, 38], [35, 72], [69, 26], [45, -34], [0, -36], [59, -37], [21, -39], [77, -59], [55, -103], [79, -118], [18, -67], [31, 0], [77, -38], [73, -68], [-18, -55], [18, -41], [-35, -58], [-59, -17], [-7, 68], [17, 10], [-3, 68], [-28, 27], [0, 14], [-21, 0], [-52, -7], [-3, 62], [-136, 149], [-13, 60], [-91, 92], [-31, 12], [-14, 56], [-38, 25], [24, -89], [-52, 12], [-115, -14], [-79, 40], [-56, 66], [-149, 82], [-10, 40], [-80, -16], [-97, 39], [-111, 23], [-108, -17], [-31, 29], [-129, 41], [-34, 37], [-112, 50], [-66, -28], [-52, 2], [35, -63], [-42, -28], [-7, -36], [-38, -13], [-90, 2], [-31, -57], [-101, -58], [-62, -6], [-14, 38], [17, 97], [28, 22], [35, 92], [97, 57], [-63, 15], [-79, -37], [-108, -130], [0, -37], [-35, -34], [-107, -62], [3, -36], [70, -15], [0, -33], [-87, -71], [-24, -41], [-108, -39], [-7, -35], [-45, -13], [-35, -72], [-41, -13], [-56, -45], [-35, 4], [-45, -28], [0, -39], [-27, -35], [-136, -30], [-115, -68], [-45, 7], [-48, -56], [-80, 8], [76, 93], [80, 40], [66, -14], [35, 64], [128, 79], [70, 80], [62, 48], [21, 138], [-104, 45], [-69, -21], [-104, 57], [-101, -48], [-39, 26], [-24, 51], [31, 43], [-34, 71], [-39, 8], [-62, -25], [-97, -3], [-35, 54], [-94, 57], [80, 40], [-97, 48], [-14, 57], [-34, 50], [48, 4], [-7, 42], [66, 66], [24, 69], [32, 33], [66, 3], [62, -26], [101, 60], [83, 9], [42, 37], [-35, 99], [35, 39], [-42, 41], [-135, -65], [-49, 27], [-38, -15], [-80, 4], [-66, -22], [-111, 21], [-48, 62], [17, 54], [-87, 9], [-66, 30], [73, 47], [271, 106], [73, 4], [-21, -58], [21, -23], [194, -1], [52, 72], [42, -25], [42, 39], [-150, 12], [3, 53], [-52, -7], [-121, 15], [-45, 80], [-215, 118], [14, 76], [180, 7], [104, 60], [21, 67], [97, 82], [70, -4], [156, 84], [163, 6], [156, 87]]],
        objects: {
            boundaries: {
                type: "GeometryCollection",
                geometries: [{
                    arcs: [[0, 1, 2, 3, 4, 5]],
                    type: "Polygon",
                    properties: {
                        code: "MA"
                    }
                }, {
                    arcs: [[6, 7, 8, 9, 10]],
                    type: "Polygon",
                    properties: {
                        code: "MN"
                    }
                }, {
                    arcs: [[11, 12, 13, 14, 15]],
                    type: "Polygon",
                    properties: {
                        code: "MT"
                    }
                }, {
                    arcs: [[-10, 16, -12, 17]],
                    type: "Polygon",
                    properties: {
                        code: "ND"
                    }
                }, {
                    arcs: [[[18]], [[19]], [[20]], [[21]]],
                    type: "MultiPolygon",
                    properties: {
                        code: "HI"
                    }
                }, {
                    arcs: [[-15, 22, 23, 24, 25, 26, 27]],
                    type: "Polygon",
                    properties: {
                        code: "ID"
                    }
                }, {
                    arcs: [[-27, 28, 29]],
                    type: "Polygon",
                    properties: {
                        code: "WA"
                    }
                }, {
                    arcs: [[30, 31, 32, 33, 34]],
                    type: "Polygon",
                    properties: {
                        code: "AZ"
                    }
                }, {
                    arcs: [[-33, 35, 36, 37]],
                    type: "Polygon",
                    properties: {
                        code: "CA"
                    }
                }, {
                    arcs: [[38, 39, 40, 41, 42, 43]],
                    type: "Polygon",
                    properties: {
                        code: "CO"
                    }
                }, {
                    arcs: [[-34, -38, 44, -25, 45]],
                    type: "Polygon",
                    properties: {
                        code: "NV"
                    }
                }, {
                    arcs: [[46, 47, -31, -41, 48]],
                    type: "Polygon",
                    properties: {
                        code: "NM"
                    }
                }, {
                    arcs: [[-29, -26, -45, -37, 49]],
                    type: "Polygon",
                    properties: {
                        code: "OR"
                    }
                }, {
                    arcs: [[50, -42, -35, -46, -24]],
                    type: "Polygon",
                    properties: {
                        code: "UT"
                    }
                }, {
                    arcs: [[51, -43, -51, -23, -14, 52]],
                    type: "Polygon",
                    properties: {
                        code: "WY"
                    }
                }, {
                    arcs: [[53, 54, 55, 56, 57, 58]],
                    type: "Polygon",
                    properties: {
                        code: "AR"
                    }
                }, {
                    arcs: [[59, 60, 61, 62, -8, 63]],
                    type: "Polygon",
                    properties: {
                        code: "IA"
                    }
                }, {
                    arcs: [[64, -39, 65, 66]],
                    type: "Polygon",
                    properties: {
                        code: "KS"
                    }
                }, {
                    arcs: [[67, 68, 69, 70, 71, -59, 72, -67, 73, -61]],
                    type: "Polygon",
                    properties: {
                        code: "MO"
                    }
                }, {
                    arcs: [[-62, -74, -66, -44, -52, 74]],
                    type: "Polygon",
                    properties: {
                        code: "NE"
                    }
                }, {
                    arcs: [[-58, 75, -49, -40, -65, -73]],
                    type: "Polygon",
                    properties: {
                        code: "OK"
                    }
                }, {
                    arcs: [[-9, -63, -75, -53, -13, -17]],
                    type: "Polygon",
                    properties: {
                        code: "SD"
                    }
                }, {
                    arcs: [[76, 77, -56, 78]],
                    type: "Polygon",
                    properties: {
                        code: "LA"
                    }
                }, {
                    arcs: [[-57, -78, 79, -47, -76]],
                    type: "Polygon",
                    properties: {
                        code: "TX"
                    }
                }, {
                    arcs: [[80, 81, 82, -3]],
                    type: "Polygon",
                    properties: {
                        code: "CT"
                    }
                }, {
                    arcs: [[83, -6, 84, 85, 86]],
                    type: "Polygon",
                    properties: {
                        code: "NH"
                    }
                }, {
                    arcs: [[87, -81, -2]],
                    type: "Polygon",
                    properties: {
                        code: "RI"
                    }
                }, {
                    arcs: [[-5, 88, 89, -85]],
                    type: "Polygon",
                    properties: {
                        code: "VT"
                    }
                }, {
                    arcs: [[90, 91, 92, 93, 94]],
                    type: "Polygon",
                    properties: {
                        code: "AL"
                    }
                }, {
                    arcs: [[95, -92, 96]],
                    type: "Polygon",
                    properties: {
                        code: "FL"
                    }
                }, {
                    arcs: [[97, -97, -91, 98, 99, 100]],
                    type: "Polygon",
                    properties: {
                        code: "GA"
                    }
                }, {
                    arcs: [[-94, 101, -79, -55, 102]],
                    type: "Polygon",
                    properties: {
                        code: "MS"
                    }
                }, {
                    arcs: [[103, -101, 104]],
                    type: "Polygon",
                    properties: {
                        code: "SC"
                    }
                }, {
                    arcs: [[105, 106, 107, -68, -60, 108]],
                    type: "Polygon",
                    properties: {
                        code: "IL"
                    }
                }, {
                    arcs: [[109, 110, -107, 111, 112]],
                    type: "Polygon",
                    properties: {
                        code: "IN"
                    }
                }, {
                    arcs: [[113, 114, 115, -69, -108, -111, 116]],
                    type: "Polygon",
                    properties: {
                        code: "KY"
                    }
                }, {
                    arcs: [[117, -105, -100, 118, 119]],
                    type: "Polygon",
                    properties: {
                        code: "NC"
                    }
                }, {
                    arcs: [[120, -117, -110, 121, 122, 123]],
                    type: "Polygon",
                    properties: {
                        code: "OH"
                    }
                }, {
                    arcs: [[124, -119, -99, -95, -103, -54, -72, 125, -70, -116]],
                    type: "Polygon",
                    properties: {
                        code: "TN"
                    }
                }, {
                    arcs: [[128, 129, 130, -120, -125, -115, 131]],
                    type: "Polygon",
                    properties: {
                        code: "VA"
                    }
                }, {
                    arcs: [[132, 133, -109, -64, -7, 134]],
                    type: "Polygon",
                    properties: {
                        code: "WI"
                    }
                }, {
                    arcs: [[135, -132, -114, -121, 136]],
                    type: "Polygon",
                    properties: {
                        code: "WV"
                    }
                }, {
                    arcs: [[137, 138, 139, 140]],
                    type: "Polygon",
                    properties: {
                        code: "DE"
                    }
                }, {
                    arcs: [[141, -130, 142]],
                    type: "Polygon",
                    properties: {
                        code: "DC"
                    }
                }, {
                    arcs: [[-140, 143, -127, 144, -143, -129, -136, 145]],
                    type: "Polygon",
                    properties: {
                        code: "MD"
                    }
                }, {
                    arcs: [[146, 147, 148]],
                    type: "Polygon",
                    properties: {
                        code: "NJ"
                    }
                }, {
                    arcs: [[[149]], [[-89, -4, -83, 150, -148, 151, 152]]],
                    type: "MultiPolygon",
                    properties: {
                        code: "NY"
                    }
                }, {
                    arcs: [[-147, 153, -141, -146, -137, -124, 154, -152]],
                    type: "Polygon",
                    properties: {
                        code: "PA"
                    }
                }, {
                    arcs: [[-87, 155]],
                    type: "Polygon",
                    properties: {
                        code: "ME"
                    }
                }, {
                    arcs: [[[-122, -113, 156]], [[-133, 157]]],
                    type: "MultiPolygon",
                    properties: {
                        code: "MI"
                    }
                }, {
                    arcs: [[[158]], [[159]], [[160]], [[161]], [[162]], [[163]], [[164]], [[165]], [[166]], [[167]], [[168]], [[169]], [[170]], [[171]]],
                    type: "MultiPolygon",
                    properties: {
                        code: "AK"
                    }
                }]
            }
        }
    }
}),
define("module/components/us2016/map-dependencies/dependencies-es6", ["exports", "./vendor_manual/d3.min", "vendor/topojson/topojson", "./vendor_manual/backbone.min", "./vendor_manual/fastclick", "./vendor_manual/can_hover", "./data/map-es6"], function(e, t, n, i, r, c, a) {
    "use strict";
    function o(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
        t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.mapTopoJson = e.backbone = e.Topojson = e.d3 = e.FastClick = e.canHover = e._ = void 0;
    var s = o(t)
      , l = o(n)
      , u = o(i)
      , d = o(r)
      , h = o(c)
      , p = o(a);
    e._ = window._,
    e.canHover = h.default,
    e.FastClick = d.default,
    e.d3 = s,
    e.Topojson = l,
    e.backbone = u.default,
    e.mapTopoJson = p.default
}),
define("module/components/us2016/map-dependencies/models/dataFeed-es6", ["exports", "module/bootstrap", "../dependencies-es6"], function(e, t, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t);
    e.default = n.backbone.Model.extend({
        initialize: function(e) {
            this.set(e.mapModel.get("mapData")),
            i.default.pubsub.emit("map:hasRequiredData")
        }
    })
}),
define("module/components/us2016/map-dependencies/models/map-es6", ["exports", "./dataFeed-es6", "../dependencies-es6"], function(e, t, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t);
    e.default = n.backbone.Model.extend({
        defaults: {
            width: 480,
            height: 480,
            locator: !0,
            tooltip: !0,
            center: [240, 240],
            locatorCenter: [240, 240],
            wheelZoom: !0
        },
        initialize: function() {
            this.set("initialMaxScaleOut", this.get("maxScaleOut")),
            this.set("dataFeed", new i.default({
                mapModel: this
            }))
        }
    })
}),
define("module/components/us2016/map-dependencies/views/locator-es6", ["exports", "module/bootstrap", "../dependencies-es6"], function(e, t, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t);
    e.default = n.backbone.View.extend({
        className: "locator-map--container",
        attributes: {
            "aria-hidden": "true"
        },
        initialize: function(e) {
            this.mapModel = e.mapModel,
            this.features = this.mapModel.get("features"),
            this.d3El = n.d3.select(this.el),
            this.fractionOfMap = 5,
            this.width = this.mapModel.get("width") / this.fractionOfMap,
            this.height = this.mapModel.get("height") / this.fractionOfMap,
            this.initMap(),
            i.default.pubsub.on("map:fullscreen:enter", this.show.bind(this)),
            i.default.pubsub.on("map:zoom-box", this.zoomBoxUpdate.bind(this)),
            i.default.pubsub.on("map:reset", this.hide.bind(this)),
            i.default.pubsub.on("region-chosen", this.show.bind(this))
        },
        initMap: function() {
            this.svg = n.d3.select(this.el).append("svg").attr("class", "locator-map--svg").attr("preserveAspectRatio", "xMinYMin meet").attr("viewBox", "0 0 " + this.width + " " + this.height),
            this.translation = this.getTranslationCentroid(),
            this.scale = 1
        },
        render: function() {
            return this.svg.append("image").attr({
                x: 0,
                y: 0,
                width: this.width,
                height: this.height,
                "xlink:href": "https://news.files.bbci.co.uk/vj/live/idt-images/quizzes-sports_weekly_quiz_week42/test-copy-2_dve4i.png"
            }),
            this.addLocatorBox(),
            this.$el.on("click", this.locatorClicked.bind(this)),
            this.$el
        },
        show: function() {
            this.hidden && i.default.$(this.el).addClass("locator-map--container--active"),
            this.hidden = !1
        },
        hide: function() {
            this.hidden = !0,
            i.default.$(this.el).removeClass("locator-map--container--active")
        },
        locatorClicked: function() {
            i.default.pubsub.emit("reset-clicked"),
            i.default.pubsub.emit("map:reset")
        },
        getTranslationCentroid: function() {
            var e = this.mapModel.get("locatorCenter");
            return [(this.mapModel.get("width") / 2 - e[0]) * (1 / this.fractionOfMap), (this.mapModel.get("height") / 2 - e[1]) * (1 / this.fractionOfMap)]
        },
        addLocatorBox: function() {
            this.svg.append("rect").attr({
                x: 0,
                y: 0,
                width: this.width,
                height: this.height,
                fill: "transparent",
                class: "locator-box",
                display: "block"
            })
        },
        zoomBoxUpdate: function(e, t, n) {
            var i = this
              , r = e.left / this.fractionOfMap
              , c = e.top / this.fractionOfMap
              , a = e.right / this.fractionOfMap - r
              , o = e.bottom / this.fractionOfMap - c
              , s = this.svg.select(".locator-box");
            this.willShow = t > 1,
            this.willShow && this.show();
            var l = {
                x: r + this.translation[0],
                y: c + this.translation[1],
                width: a,
                height: o
            };
            n ? s.transition().attr(l).duration(1100).each("end", function() {
                i.willShow ? i.show() : i.hide()
            }) : (s.attr(l),
            this.willShow && !this.hidden ? this.show() : this.hide())
        }
    })
}),
define("module/components/us2016/map-dependencies/helpers/map_dimensions-es6", ["exports", "module/bootstrap", "../dependencies-es6"], function(e, t, n) {
    "use strict";
    function i() {}
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t);
    i.prototype = {
        initialize: function(e, t) {
            var n = this;
            this.mapModel = e,
            this.mapView = t,
            this.mapData = this.mapModel.get("mapData"),
            this.bounds = e.get("bounds"),
            this.maxScaleIn = e.get("maxScaleIn"),
            r.default.pubsub.on("main-map-rendered", function() {
                n.mapView.resetMap()
            })
        },
        getDimensions: function() {
            return {
                width: this.width,
                height: this.height
            }
        },
        getDimensionsOfMapWithPanel: function() {
            return this.getActualMapDimensions({
                withPanel: !0
            })
        },
        getDimensionsOfMapWithNoPanel: function() {
            return this.getActualMapDimensions({
                withPanel: !1
            })
        },
        getActualMapDimensions: function(e) {
            var t = {};
            return this.mapModel.get("mobile") && this.mapView.getFullScreenHelper().isFullScreen ? (t.width = this.mapModel.get("viewport").width,
            t.height = this.mapModel.get("viewport").height) : (t.width = r.default.$(".main-map--container").width(),
            t.height = r.default.$(".main-map--container").outerHeight()),
            t.maxScaleOut = t.width / this.mapModel.get("width"),
            t = this.adjustDimensions(t, e)
        },
        adjustDimensions: function(e, t) {
            return t.withPanel ? e.height -= this.getPanelHeight() : e.height -= this.getHeightOfKeyAndAccordion(),
            e
        },
        getPanelHeight: function() {
            return r.default.$(".map-panel").outerHeight()
        },
        getHeightOfKeyAndAccordion: function() {
            return r.default.$(".us-map--desktop .map-helpers, .map--full-screen .map-helpers").outerHeight()
        },
        setDimensions: function(e) {
            this.width = e.width,
            this.height = e.height,
            this.mapModel.set("maxScaleOut", e.maxScaleOut),
            this.setViewbox({
                width: this.width,
                height: this.height
            })
        },
        setViewbox: function(e) {
            var t = "0 0 " + e.width + " " + e.height;
            this.mapView.svg && this.mapView.svg.attr("viewBox", t)
        },
        forceEdgeBrowserToReRender: function() {
            /Edge\/\d./i.test(navigator.userAgent) && (r.default.$("#us2016-map").hide(),
            setTimeout(function() {
                r.default.$("#us2016-map").show()
            }, 1))
        },
        setTranslationAndScale: function(e, t, i) {
            var r = this
              , c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {}
              , a = i ? 1100 : 0
              , o = this.mapView.group.transition().duration(a);
            this.mapView.hexText;
            o.attr("transform", "translate(" + e[0] + ", " + e[1] + ") scale(" + t + ")"),
            i && c && o.each("end", function() {
                c(),
                r.forceEdgeBrowserToReRender()
            });
            var s = n.d3.selectAll(".main-map--svg");
            t > 3 ? (s.classed("zoomed--med", !1),
            s.classed("zoomed--max", !0)) : t > 1.1 ? (s.classed("zoomed--med", !0),
            s.classed("zoomed--max", !1)) : (s.classed("zoomed--med", !1),
            s.classed("zoomed--max", !1)),
            this.scale = t,
            this.translation = e,
            this.mapView.getInteractionsHelper().getPanAndZoomBehaviour().translate([e[0], e[1]]).scale(t),
            this.emitZoomBoundingBox(i)
        },
        getScale: function(e) {
            var t = e.width
              , n = e.height
              , i = this.width > this.height ? this.height : this.width
              , r = void 0;
            return r = t > n ? i / t : i / n,
            r *= .8,
            r > this.maxScaleIn ? this.maxScaleIn : r
        },
        getTranslationFromCentroid: function(e, t) {
            return [this.width / 2 - e[0] * t, this.height / 2 - e[1] * t]
        },
        applyScaleAndTranslationBounds: function(e) {
            return this.applyTranslationBounds(this.applyScaleBounds(e))
        },
        applyTranslationBounds: function(e) {
            var t = e.translation
              , n = e.scale
              , i = this.mapView.getProjection().invert([-t[0] / n, -t[1] / n])
              , r = this.mapView.getProjection()(this.bounds[1])
              , c = [r[0] - this.width / n, r[1] - this.height / n]
              , a = this.mapView.getProjection().invert(c);
            i[0] = Math.max(this.bounds[0][0], Math.min(a[0], i[0])),
            i[1] = Math.min(this.bounds[0][1], Math.max(a[1], i[1]));
            var o = this.mapView.getProjection()(i);
            return t[0] = -o[0] * n,
            t[1] = -o[1] * n,
            {
                translation: t,
                scale: n
            }
        },
        applyScaleBounds: function(e) {
            var t = this.mapModel.get("maxScaleOut")
              , n = this.mapModel.get("maxScaleIn")
              , i = [this.width / 2, this.height / 2]
              , r = e.translation
              , c = e.scale / e.previousScale
              , a = e.scale;
            return (a < t || a > n) && (a = a < t ? t : n,
            c = a / e.previousScale),
            r[0] = (r[0] - i[0]) * c + i[0],
            r[1] = (r[1] - i[1]) * c + i[1],
            {
                translation: r,
                scale: a
            }
        },
        recenterMapForDimensions: function(e) {
            var t = e.width
              , n = e.height
              , i = {
                translation: this.translation,
                scale: this.scale
            }
              , r = this.getDimensions()
              , c = this.getMapBoundsDimensions()
              , a = t / c.width
              , o = n / c.height
              , s = Math.max(a, o, this.mapModel.get("initialMaxScaleOut"))
              , l = Math.max(s, i.scale, Math.min(n, t) / 320)
              , u = [i.translation[0] - r.width / 2, i.translation[1] - r.height / 2]
              , d = [u[0] + t / 2, u[1] + n / 2];
            this.mapModel.set("maxScaleOut", s),
            this.mapView.getInteractionsHelper().setZoomScaleExtent([s, this.mapModel.get("maxScaleIn")]),
            this.setDimensions({
                width: t,
                height: n
            });
            var h = {
                translation: d,
                scale: l,
                previousScale: this.scale
            };
            this.setTranslationAndScale(h.translation, h.scale)
        },
        getMapBoundsDimensions: function() {
            var e = this.mapView.getProjection()
              , t = this.mapModel.get("bounds");
            return {
                width: e(t[1])[0] - e(t[0])[0],
                height: e(t[1])[1] - e(t[0])[1]
            }
        },
        emitZoomBoundingBox: function(e) {
            var t = {
                left: -this.translation[0] / this.scale,
                top: -this.translation[1] / this.scale,
                right: (this.width - this.translation[0]) / this.scale,
                bottom: (this.height - this.translation[1]) / this.scale
            };
            r.default.pubsub.emit("map:zoom-box", [t, this.scale, e])
        }
    },
    e.default = new i
}),
define("module/components/us2016/map-dependencies/helpers/map_interactions-es6", ["exports", "module/bootstrap", "../dependencies-es6", "../vendor_manual/d3.min", "./map_dimensions-es6"], function(e, t, n, i, r) {
    "use strict";
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function a(e) {
        this.mapModel = e.mapModel,
        this.map = this.mapModel.get("mapView"),
        this.mapHasBeenInteractedWith = !1,
        this.setupPanAndZoom(),
        o.default.pubsub.on("map:reset", this.reset.bind(this)),
        o.default.pubsub.on("region-chosen", this.handleCouncilSelect.bind(this)),
        o.default.pubsub.on("region-chosen", this.applyPanAndZoom.bind(this)),
        o.default.pubsub.on("map:fullscreen:enter", this.applyPanAndZoom.bind(this))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = c(t)
      , s = c(r);
    a.prototype = {
        applyPanAndZoom: function() {
            this.mapHasBeenInteractedWith || (this.mapHasBeenInteractedWith = !0,
            this.map.getSvg().call(this.panAndZoomBehaviour).on("dblclick.zoom", null).on("dblTap.zoom", null))
        },
        setupPanAndZoom: function() {
            this.panAndZoomBehaviour = n.d3.behavior.zoom().scaleExtent([this.mapModel.get("maxScaleOut"), this.mapModel.get("maxScaleIn")]).on("zoom", function() {
                var e = this;
                if (this.mapModel.get("mobile")) {
                    this.lastScaleValue = 1,
                    this.isPanningOrZooming = !0,
                    clearTimeout(this.panningTimeout),
                    this.panningTimeout = setTimeout(function() {
                        e.isPanningOrZooming = !1,
                        e.mapModel.get("mobile") || e.lastScaleValue !== e.mapModel.get("maxScaleOut") || o.default.pubsub.emit("map:reset")
                    }, 250),
                    this.lastScaleValue = i.event.scale;
                    var t = {
                        translation: i.event.translate,
                        scale: i.event.scale
                    };
                    o.default.pubsub.emit("map:moved"),
                    s.default.setTranslationAndScale(t.translation, t.scale)
                } else {
                    var n = window.pageYOffset || document.documentElement.scrollTop
                      , r = window.pageXOffset || document.documentElement.scrollLeft;
                    if (i.event.sourceEvent.deltaY) {
                        var c = i.event.sourceEvent.deltaX
                          , a = i.event.sourceEvent.deltaY
                          , l = [r + c, n + a];
                        window.scrollTo(l[0], l[1])
                    }
                }
            }
            .bind(this))
        },
        getPanAndZoomBehaviour: function() {
            return this.panAndZoomBehaviour
        },
        setZoomScaleExtent: function(e) {
            this.panAndZoomBehaviour.scaleExtent(e)
        },
        handleCouncilSelect: function(e) {
            if (e) {
                var t = this.map.getSelectedConstituency();
                t && t === e || (this.map.setSelectedConstituency(e),
                o.default.pubsub.emit("panel:show", e),
                o.default.pubsub.emit("map:moved"))
            }
        },
        reset: function() {
            this.map.setSelectedConstituency(null)
        },
        mouseOverPath: function(e) {
            e && (this.map.selectedConstituency !== e ? (o.default.pubsub.emit("tooltip:show", e),
            this.map.setHoverConstituency(e),
            this.map.prepareConstituencyForStroke(e),
            this.map.prepareConstituencyForStroke(this.map.selectedConstituency)) : o.default.pubsub.emit("tooltip:hide"))
        },
        mouseOutPath: function(e) {
            this.map.prepareConstituencyForStroke(null),
            this.map.resetHoverConstituency(null),
            o.default.pubsub.emit("tooltip:hide")
        }
    },
    e.default = a
}),
define("module/components/us2016/map-dependencies/helpers/map_fullscreen-es6", ["exports", "module/bootstrap", "../dependencies-es6", "./map_dimensions-es6"], function(e, t, n, i) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function c(e) {
        var t = this;
        this.mapModel = e.mapModel,
        this.map = this.mapModel.get("mapView"),
        this.isFullScreen = !1,
        e.mobile && (a.default.pubsub.on("region-chosen", function(e) {
            t.isFullScreen || t.enterFullScreen();
            var n = o.default.getDimensionsOfMapWithPanel();
            o.default.setDimensions(n)
        }),
        a.default.pubsub.on("map-overlay-clicked", this.enterFullScreen.bind(this)),
        a.default.pubsub.on("map:fullscreen:exit", this.exitFullScreen.bind(this)))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = r(t)
      , o = (r(n),
    r(i));
    c.prototype = {
        enterFullScreen: function() {
            this.isFullScreen = !0,
            a.default.$("#orb-header").addClass("us-map__suppress-orb"),
            a.default.$(this.mapModel.get("container")).addClass("map--full-screen"),
            a.default.pubsub.emit("map:fullscreen:enter", !0),
            this.map.resetMap()
        },
        exitFullScreen: function() {
            this.isFullScreen = !1,
            a.default.$("#orb-header").removeClass("us-map__suppress-orb"),
            a.default.$(this.mapModel.get("container")).removeClass("map--full-screen"),
            a.default.pubsub.emit("map:reset")
        }
    },
    e.default = c
}),
define("module/components/us2016/map-dependencies/views/mobileOverlay-es6", ["exports", "module/bootstrap", "../dependencies-es6"], function(e, t, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t);
    e.default = n.backbone.View.extend({
        className: "map-mobile-overlay",
        attributes: {
            "aria-hidden": "true"
        },
        initialize: function(e) {
            this.mapModel = e.mapModel,
            i.default.pubsub.on("map:fullscreen:enter", this.hide.bind(this)),
            i.default.pubsub.on("map:fullscreen:exit", this.onExitFullscreen.bind(this)),
            i.default.$(".searchModule_form_input").attr("placeholder", "Tap to explore the map")
        },
        render: function() {
            return this.$el.append('<div class="map-mobile-cta"><i class="map-mobile-cta__icon"></i>Tap to explore</div>'),
            this.$el
        },
        events: {
            click: "goFullscreen"
        },
        show: function() {
            this.$el.show()
        },
        hide: function() {
            this.$el.hide(),
            i.default.$(".map-mobile-cta").hide()
        },
        goFullscreen: function() {
            i.default.pubsub.emit("map-overlay-clicked")
        },
        onExitFullscreen: function() {
            this.show(),
            this.showInteractiveMessage()
        },
        showInteractiveMessage: function() {
            i.default.$(".map-mobile-cta").show(),
            i.default.$(".panel-result, .panel-message").hide()
        }
    })
}),
define("module/components/us2016/map-dependencies/helpers/nudge-es6", ["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = {
        CT: {
            lat: -5,
            lon: -10
        },
        DC: {
            lat: 3,
            lon: -23
        },
        DE: {
            lat: 15,
            lon: 10
        },
        HI: {
            lat: -5,
            lon: 5
        },
        IL: {
            lat: -10,
            lon: -5
        },
        IN: {
            lat: 5,
            lon: 5
        },
        KY: {
            lat: 12,
            lon: -5
        },
        MA: {
            lat: 25,
            lon: -10
        },
        MD: {
            lat: 0,
            lon: 15
        },
        NC: {
            lat: 30,
            lon: 5
        },
        NJ: {
            lat: 10,
            lon: 0
        },
        NV: {
            lat: 5,
            lon: -5
        },
        NY: {
            lat: -10,
            lon: -15
        },
        OH: {
            lat: -5,
            lon: -10
        },
        PA: {
            lat: -15,
            lon: 0
        },
        RI: {
            lat: 10,
            lon: 15
        },
        VA: {
            lat: -10,
            lon: 15
        },
        VT: {
            lat: -5,
            lon: -15
        },
        WV: {
            lat: -10,
            lon: 5
        }
    }
}),
define("module/components/us2016/map-dependencies/views/hexagons-es6", ["exports", "module/bootstrap", "../helpers/nudge-es6"], function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r() {}
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var c = i(t)
      , a = i(n)
      , o = function() {
        function e(e, t) {
            var n = []
              , i = !0
              , r = !1
              , c = void 0;
            try {
                for (var a, o = e[Symbol.iterator](); !(i = (a = o.next()).done) && (n.push(a.value),
                !t || n.length !== t); i = !0)
                    ;
            } catch (e) {
                r = !0,
                c = e
            } finally {
                try {
                    !i && o.return && o.return()
                } finally {
                    if (r)
                        throw c
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    r.prototype = {
        initialize: function(e, t) {
            this.mapModel = e,
            this.mapView = t,
            this.mapData = this.mapModel.get("mapData"),
            this.dataFeed = this.mapModel.get("dataFeed"),
            this.hex = this.mapView.getGroup().append("g"),
            this.hexText = this.mapView.getGroup().append("g")
        },
        loadFeatureCallback: function(e, t, n) {
            var i = this
              , r = this.hex.append("path")
              , o = this.hexText.append("text")
              , s = n.totalElectoralVotes
              , l = this.mapModel.get("mapScale") / 106
              , u = Math.sqrt(s / 2.598076211355) * l;
            a.default[e] && (t = [t[0] + a.default[e].lat, t[1] + a.default[e].lon]),
            r.attr("d", this.drawHexagon(t, u)).attr("class", function() {
                return n.winningParty ? "hexagon-path outcome--" + n.winningParty.toLowerCase() : "hexagon-path outcome--tbd"
            }).attr("data-gssid", e).on("click", function() {
                c.default.pubsub.emit("region-chosen", e),
                c.default.pubsub.emit("region:chosen:mapclick", e)
            }).on("mouseenter", function() {
                i.mapView.interactionsHelper.mouseOverPath(e)
            }).on("mouseleave", function() {
                i.mapView.interactionsHelper.mouseOutPath(e)
            }),
            o.attr("class", function() {
                return i.getDefaultHexTextClasses(e)
            }).attr("data-gssid", e).on("click", function() {
                c.default.pubsub.emit("region-chosen", e),
                c.default.pubsub.emit("region:chosen:mapclick", e)
            }).on("mouseenter", function() {
                i.mapView.interactionsHelper.mouseOverPath(e)
            }).on("mouseleave", function() {
                i.mapView.interactionsHelper.mouseOutPath(e)
            }),
            o.append("tspan").attr("x", t[0]).attr("y", t[1]).attr("dy", 0).attr("text-anchor", "middle").attr("class", "hex-code").text("" + e),
            o.append("tspan").attr("x", t[0]).attr("y", t[1]).attr("dy", function() {
                return "super" === i.mapView.getSizeOfState(e) ? 12 : "large" === i.mapView.getSizeOfState(e) ? 10 : 8
            }).attr("text-anchor", "middle").attr("class", "hex-votes").text("" + s),
            e && this.dataFeed.get(e) && !0 === this.mapView.tooltipEnabled && (r.on("mousemove", function() {
                i.mapView.interactionsHelper.mouseOverPath(e)
            }),
            r.on("mouseout", function() {
                i.mapView.interactionsHelper.mouseOutPath(e)
            }),
            o.on("mousemove", function() {
                i.mapView.interactionsHelper.mouseOverPath(e)
            }),
            o.on("mouseout", function() {
                i.mapView.interactionsHelper.mouseOutPath(e)
            }))
        },
        drawHexagon: function(e, t) {
            var n = o(e, 2)
              , i = n[0]
              , r = n[1];
            return "M" + (i - t) + " " + r + " L" + (i - Math.sin(Math.PI / 6) * t) + " " + (r + Math.cos(Math.PI / 6) * t) + " L" + (i + Math.sin(Math.PI / 6) * t) + " " + (r + Math.cos(Math.PI / 6) * t) + " L" + (i + t) + " " + r + " L" + (i + Math.sin(Math.PI / 6) * t) + " " + (r - Math.cos(Math.PI / 6) * t) + " L" + (i - Math.sin(Math.PI / 6) * t) + " " + (r - Math.cos(Math.PI / 6) * t) + "z"
        },
        setHoverConstituencyClasses: function(e) {
            var t = this;
            c.default.$(this.hex[0]).find('[data-gssid="' + e + '"]').attr("class", "hexagon-path--hover " + this.getDefaultHexClasses(e));
            var n = c.default.$(this.hexText[0]).find('[data-gssid="' + e + '"]');
            n.attr("class", function() {
                var i = t.getDefaultHexTextClasses(e, n);
                return i += " hex-text--hover"
            })
        },
        setHexagonClasses: function(e) {
            var t = this;
            this.setLightClasses(),
            c.default.$(this.hex[0]).find('[data-gssid="' + e + '"]').attr("class", "hexagon-path--selected " + this.getDefaultHexClasses(e));
            var n = c.default.$(this.hexText[0]).find('[data-gssid="' + e + '"]');
            n.attr("class", function() {
                var i = t.getDefaultHexTextClasses(e, n);
                return i += " hex-text--selected"
            })
        },
        setLightClasses: function() {
            var e = this;
            Object.keys(this.mapData).forEach(function(t) {
                c.default.$(e.hex[0]).find('[data-gssid="' + t + '"]').attr("class", "hexagon-path " + e.getLightClasses(t));
                var n = c.default.$(e.hexText[0]).find('.hex-text--tbd[data-gssid="' + t + '"]');
                n.attr("class", function() {
                    var i = e.getDefaultHexTextClasses(t, n);
                    return i += " lighten-hex-text--tbd"
                })
            })
        },
        resetLightClasses: function() {
            var e = this;
            Object.keys(this.mapData).forEach(function(t) {
                c.default.$(e.hex[0]).find('[data-gssid="' + t + '"]').attr("class", "hexagon-path " + e.getDefaultHexClasses(t));
                var n = c.default.$(e.hexText[0]).find('[data-gssid="' + t + '"]');
                n.attr("class", function() {
                    return e.getDefaultHexTextClasses(t, n)
                })
            })
        },
        resetHoverConstituency: function(e, t) {
            this.mapView.selectedConstituency && (this.setLightClasses(),
            this.setHexagonClasses(this.mapView.selectedConstituency)),
            e.find(".hexagon-path--hover").attr("class", this.getDefaultHexClasses(t.attr("data-gssid")));
            var n = c.default.$(this.hexText[0]).find(".hex-text--hover");
            n.attr("class", this.getDefaultHexTextClasses(t.attr("data-gssid"), n))
        },
        getDefaultHexClasses: function(e) {
            var t = this.dataFeed.get(e)
              , n = {
                OTH: "outcome--oth",
                GOP: "outcome--gop",
                DEM: "outcome--dem",
                TBD: "outcome--tbd"
            }
              , i = "";
            return t && t.winningParty ? i += n[t.winningParty] : i += n.TBD,
            i
        },
        getDefaultHexTextClasses: function(e, t) {
            if (e) {
                var n = "hex-text hex-text--" + this.mapView.getSizeOfState(e);
                return !1 === this.mapData[e].isCalled && (n += " hex-text--tbd"),
                n
            }
        },
        getLightClasses: function(e) {
            var t = this.dataFeed.get(e)
              , n = {
                OTH: "lighten--oth",
                GOP: "lighten--gop",
                DEM: "lighten--dem",
                TBD: "lighten--tbd"
            }
              , i = "";
            return t && t.winningParty ? i += n[t.winningParty] : i += n.TBD,
            i
        }
    },
    e.default = new r
}),
define("module/components/us2016/map-dependencies/views/map-es6", ["exports", "module/bootstrap", "../dependencies-es6", "./locator-es6", "../helpers/map_dimensions-es6", "../helpers/map_interactions-es6", "../helpers/map_fullscreen-es6", "./mobileOverlay-es6", "./hexagons-es6"], function(e, t, n, i, r, c, a, o, s) {
    "use strict";
    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = l(t)
      , d = l(i)
      , h = l(r)
      , p = l(c)
      , f = l(a)
      , y = l(o)
      , m = l(s);
    e.default = n.backbone.View.extend({
        className: "main-map--container",
        attributes: {
            "aria-hidden": "true"
        },
        initialize: function(e) {
            this.mapModel = e.mapModel,
            this.mapModel.set("mapView", this),
            this.hexagons = m.default,
            this.mobileOverlay = this.mapModel.get("mobileOverlay"),
            this.dataFeed = this.mapModel.get("dataFeed"),
            this.features = this.mapModel.get("features"),
            this.svgLastConstituency = null,
            this.translation = [0, 0],
            this.scale = 1,
            this.mapData = this.mapModel.get("mapData"),
            this.initMap(),
            h.default.initialize(this.mapModel, this)
        },
        initHelpers: function() {
            var e = {
                mapModel: this.mapModel,
                mobile: this.mapModel.get("mobile")
            };
            this.mapModel.get("mobile") || u.default.pubsub.on("region-chosen", function() {
                h.default.setDimensions(h.default.getDimensionsOfMapWithPanel())
            }),
            this.fullscreenHelper = new f.default(e),
            this.interactionsHelper = new p.default(e)
        },
        getFullScreenHelper: function() {
            return this.fullscreenHelper
        },
        initMap: function() {
            this.tooltipEnabled = this.mapModel.get("tooltip"),
            this.projection = n.d3.geo.albersUsa().scale(this.mapModel.get("mapScale")).translate(this.mapModel.get("translate")),
            this.path = n.d3.geo.path().projection(this.projection),
            this.svg = n.d3.select(this.el).append("svg").attr("class", "main-map--svg").attr("role", "presentation").attr("preserveAspectRatio", "xMinYMin meet"),
            this.group = this.svg.append("g"),
            this.states = this.group.append("g")
        },
        addLoadingSpinner: function() {
            this.$el.append(u.default.$('<div class="bbc-news-visual-journalism-loading-spinner"></div>'))
        },
        render: function() {
            if (this.mapModel.get("mobile")) {
                var e = new y.default({
                    mapModel: this.mapModel
                });
                this.mapModel.set("mobileOverlay", e),
                this.$el.append(e.render())
            }
            return this.addLoadingSpinner(),
            this.loadLocator(),
            m.default.initialize(this.mapModel, this),
            this.loadFeatureCallback = m.default.loadFeatureCallback.bind(m.default),
            this.progressivelyLoadMap(),
            this.$el
        },
        getSvg: function() {
            return this.svg
        },
        getGroup: function() {
            return this.group
        },
        getProjection: function() {
            return this.projection
        },
        getTransform: function() {
            return {
                translation: this.translation,
                scale: this.scale
            }
        },
        getInteractionsHelper: function() {
            return this.interactionsHelper
        },
        progressivelyLoadMap: function() {
            var e = this
              , t = this.features.slice(0);
            n.d3.timer(function() {
                var n = e.loadUpToThisManyFeatures(t, 5);
                return n && e.afterMapLoaded(),
                n
            }, 100)
        },
        loadUpToThisManyFeatures: function(e, t) {
            for (var n = void 0, i = 0; i < t; i++)
                if (n = this.loadNewFeature(e))
                    return n;
            return n
        },
        loadNewFeature: function(e) {
            var t = this
              , n = e.pop();
            if (!n.properties)
                return !0;
            var i = this.states.append("path")
              , r = n.properties.code
              , c = r && this.dataFeed.get(r);
            return i.attr("d", this.path(n)).attr("class", function() {
                var e = "constituency-path";
                return c && (e = t.getDefaultPathClasses(r)),
                e
            }),
            this.loadFeatureCallback(r, this.path.centroid(n), this.mapData[r]),
            c && (i.attr("data-gssid", r).datum(n).on("click", function() {
                u.default.pubsub.emit("region-chosen", r),
                u.default.pubsub.emit("region:chosen:mapclick", r)
            }),
            !0 === this.tooltipEnabled && (i.on("mousemove", function() {
                t.interactionsHelper.mouseOverPath(r)
            }),
            i.on("mouseout", function() {
                t.interactionsHelper.mouseOutPath(r)
            }))),
            e.length <= 0
        },
        updateData: function(e) {
            var t = this;
            this.dataFeed.set(e),
            n.d3.selectAll(".constituency-path").each(function() {
                var e = n.d3.select(this);
                e.attr("class", t.getDefaultPathClasses(e.attr("data-gssid")))
            })
        },
        afterMapLoaded: function() {
            u.default.pubsub.emit("main-map-rendered"),
            u.default.$(".bbc-news-visual-journalism-loading-spinner").hide()
        },
        getFeatureFromGssid: function(e) {
            var t = null;
            for (var n in this.features)
                if (this.features.hasOwnProperty(n)) {
                    var i = this.features[n];
                    if (i.properties.code === e) {
                        t = i;
                        break
                    }
                }
            return t
        },
        getTranslationAndScaleFromFeature: function(e) {
            var t = this.path.centroid(e)
              , n = this.path.bounds(e)
              , i = n[1][0] - n[0][0]
              , r = n[1][1] - n[0][1]
              , c = h.default.getScale({
                width: i,
                height: r
            });
            return {
                scale: c,
                translation: h.default.getTranslationFromCentroid(t, c)
            }
        },
        loadLocator: function() {
            !0 === this.mapModel.get("locator") && (this.locatorView = new d.default({
                mapModel: this.mapModel
            }),
            this.$el.append(this.locatorView.render()),
            this.locatorView.hide())
        },
        getSelectedConstituency: function() {
            return this.selectedConstituency
        },
        setSelectedConstituency: function(e) {
            this.resetSelectedConstituency(),
            this.selectedConstituency = e,
            this.selectedConstituency ? (this.setSelectedConstituencyClasses(e),
            m.default.setHexagonClasses(e),
            this.prepareConstituencyForStroke(e),
            this.centerMapOnConstituency(e)) : this.resetMap()
        },
        setHoverConstituency: function(e) {
            this.resetHoverConstituency(),
            this.hoverConstituency = e,
            this.setHoverConstituencyClasses(e),
            this.prepareConstituencyForStroke(e)
        },
        setSelectedConstituencyClasses: function(e) {
            u.default.$(this.states[0]).find('[data-gssid="' + e + '"]').attr("class", "constituency-path--selected " + this.getDefaultPathClasses(e))
        },
        setHoverConstituencyClasses: function(e) {
            u.default.$(this.states[0]).find('[data-gssid="' + e + '"]').attr("class", "constituency-path--hover " + this.getDefaultPathClasses(e)),
            m.default.setHoverConstituencyClasses(e)
        },
        resetSelectedConstituency: function() {
            var e = this.$el.find(".constituency-path--selected");
            e.attr("class", this.getDefaultPathClasses(e.attr("data-gssid"))),
            m.default.resetLightClasses()
        },
        getDefaultPathClasses: function(e) {
            return "constituency-path "
        },
        getSizeOfState: function(e) {
            return this.mapData[e].totalElectoralVotes >= 20 ? "super" : this.mapData[e].totalElectoralVotes >= 9 ? "large" : "small"
        },
        centerMapOnConstituency: function(e) {
            var t = this.getFeatureFromGssid(e)
              , n = this.getTranslationAndScaleFromFeature(t)
              , i = n.scale
              , r = n.translation
              , c = {
                translation: r,
                scale: i,
                previousScale: i
            };
            r = c.translation,
            i = c.scale,
            h.default.setTranslationAndScale(r, i, !0)
        },
        resetMap: function() {
            h.default.setDimensions(h.default.getDimensionsOfMapWithNoPanel()),
            this.centerMap()
        },
        centerMap: function() {
            var e = this.mapModel.get("center")
              , t = this.mapModel.get("maxScaleOut")
              , n = (h.default.getDimensionsOfMapWithNoPanel(),
            h.default.getTranslationFromCentroid(e, t));
            h.default.setTranslationAndScale(n, t, !0)
        },
        resetHoverConstituency: function() {
            var e = this.$el.find(".constituency-path--hover");
            e.attr("class", this.getDefaultPathClasses(e.attr("data-gssid"))),
            m.default.resetHoverConstituency(this.$el, e)
        },
        prepareConstituencyForStroke: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectedConstituency;
            if (e && this.svgLastConstituency !== e) {
                var t = u.default.$(this.states[0]).find('[data-gssid="' + e + '"]')[0];
                if (t) {
                    var n = t.parentNode;
                    n.removeChild(t),
                    n.appendChild(t),
                    this.svgLastConstituency = e
                }
            }
        }
    })
}),
define("module/components/us2016/map-dependencies/views/controls-es6", ["exports", "module/bootstrap", "../dependencies-es6"], function(e, t, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t);
    e.default = n.backbone.View.extend({
        className: "map-controls",
        initialize: function(e) {
            var t = this;
            this.mapModel = e.mapModel,
            this.template = n._.template(i.default.$("#map_controls_template").html(), {}),
            i.default.pubsub.on("map:moved", this.onMapMove.bind(this)),
            i.default.pubsub.on("map:fullscreen:enter", this.onMapEnterFullscreen.bind(this)),
            i.default.pubsub.on("map:reset", function() {
                t.$resetButton.hide(),
                i.default.$(".map-accordion__toggle").attr("checked", !1)
            })
        },
        render: function() {
            return this.$el.html(this.template),
            this.$closeButton = this.$el.find(".map-controls--close"),
            this.$resetButton = this.$el.find(".map-controls--reset"),
            this.addListeners(),
            this.$el
        },
        addListeners: function() {
            this.$closeButton.on("click", this.closeClicked.bind(this)),
            this.$resetButton.on("click", this.resetClicked.bind(this))
        },
        closeClicked: function() {
            i.default.pubsub.emit("map:fullscreen:exit"),
            this.$closeButton.hide()
        },
        resetClicked: function() {
            this.$resetButton.hide(),
            i.default.pubsub.emit("reset-clicked"),
            i.default.pubsub.emit("map:reset")
        },
        onMapMove: function() {
            this.mapModel.get("mobile") || this.$resetButton.show()
        },
        onMapEnterFullscreen: function() {
            this.$closeButton.show()
        }
    })
}),
define("module/components/us2016/map-dependencies/views/helper-es6", ["exports", "module/bootstrap", "../dependencies-es6"], function(e, t, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t);
    e.default = n.backbone.View.extend({
        className: "map-helpers",
        initialize: function(e) {
            this.mapModel = e.mapModel,
            this.dataFeed = this.mapModel.get("dataFeed"),
            this.template = n._.template(i.default.$("#map_helpers_template").html(), {}),
            this.visible = !0,
            this.expanded = !1,
            i.default.pubsub.on("region-chosen", this.hide.bind(this)),
            i.default.pubsub.on("map:fullscreen:enter", this.show.bind(this)),
            i.default.pubsub.on("map:fullscreen:exit", this.hide.bind(this)),
            i.default.pubsub.on("map:reset", this.show.bind(this)),
            i.default.pubsub.on("main-map-rendered", function() {
                var e = i.default.$("#accordion-toggle");
                e.on("click", function() {
                    e.is(":checked") && i.default.pubsub.emit("map:open:accordion")
                })
            })
        },
        render: function() {
            return this.$el.html(this.template),
            this.$el
        },
        show: function() {
            this.visible || (this.visible = !0,
            this.$el.css("bottom", 0),
            this.$el.attr("aria-hidden", "false"),
            i.default.$(".map-accordion__toggle").prop("checked", !1),
            i.default.$(".map-accordion__toggle").attr("tabindex", "0"))
        },
        hide: function() {
            this.visible && (this.visible = !1,
            this.$el.css("bottom", "-1000px"),
            this.$el.attr("aria-hidden", "true"),
            i.default.$(".map-accordion__toggle").prop("checked", !1),
            i.default.$(".map-accordion__toggle").attr("tabindex", "-1"))
        }
    })
}),
define("module/components/us2016/map-dependencies/views/panel-es6", ["exports", "module/bootstrap", "../dependencies-es6"], function(e, t, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t);
    e.default = n.backbone.View.extend({
        className: "map-panel",
        attributes: {
            "aria-hidden": "true",
            tabindex: "-1"
        },
        initialize: function(e) {
            this.mapModel = e.mapModel,
            this.dataFeed = this.mapModel.get("dataFeed"),
            this.template = n._.template(i.default.$("#panel_template").html(), {}),
            i.default.pubsub.on("region-chosen", this.showConstituency.bind(this)),
            i.default.pubsub.on("map:reset", this.hide.bind(this)),
            this.mapModel.get("mobile") && i.default.$(".news-vj-postcode-lookup__input").on("focus", this.hide.bind(this))
        },
        render: function() {
            return this.$el.html(this.template),
            this.$noDataMessage = this.$el.find(".panel-message"),
            this.$resultDeclareString = this.$el.find(".panel-result--declare-string"),
            this.$el
        },
        updateResults: function(e) {
            var t = this.dataFeed.get(e);
            t && t.winningParty && t.isCalled ? (this.displayWinner(t),
            this.$el.find(".panel-result").show()) : (this.showNoWinner(t),
            this.$el.find(".panel-result").show())
        },
        displayWinner: function(e) {
            this.$el.find(".panel-summary__headshot").attr("src", "" + e.candidateImage),
            this.$el.find(".panel-summary__declaration").html(e.summary),
            "DEM" === e.winningParty ? this.$el.find(".panel-summary").attr("class", "panel-summary panel-summary--dem") : this.$el.find(".panel-summary").attr("class", "panel-summary panel-summary--gop")
        },
        show: function() {
            this.$el.css("bottom", 0),
            this.$el.attr("aria-hidden", "false"),
            i.default.$(".panel-title__link").attr("tabindex", "0")
        },
        hide: function() {
            this.$el.css("bottom", "-1000px"),
            this.$el.attr("aria-hidden", "true"),
            i.default.$(".panel-title__link").attr("tabindex", "-1")
        },
        showConstituency: function(e) {
            var t = this.dataFeed.get(e);
            if (t) {
                if (this.$noDataMessage.hide(),
                this.gssid = e,
                this.updateResults(e),
                this.$el.find(".panel-title-location").text(t.name),
                this.$el.find(".panel-title__link").attr("href", "https://www.bbc.co.uk" + t.url),
                this.$el.find(".panel-summary__electoral-votes").html("<strong>" + t.totalElectoralVotes + "</strong> electoral votes"),
                this.$el.find(".off-screen.panel-title-location").text(t.name),
                t.timestamp ? this.$el.find(".panel-summary__timestamp").html('<span class="off-screen">State projected at: </span>' + t.timestamp).css("display", "block") : this.$el.find(".panel-summary__timestamp").css("display", "none"),
                t.splitVotes > 0) {
                    var n = "(" + t.splitVotes;
                    t.splitVotes > 1 ? n += " votes for " : n += " vote for ",
                    "DEM" === t.winningParty ? this.$el.find(".panel-summary__split").attr("class", "panel-summary__split split-vote--gop").text(n + " Trump)") : this.$el.find(".panel-summary__split").attr("class", "panel-summary__split split-vote--dem").text(n + " Clinton)")
                } else
                    this.$el.find(".panel-summary__split").text("");
                t.countingProgress && this.$el.find(".panel-result__voting-progress").html("After <strong>" + t.countingProgress + "</strong>% of voting districts"),
                this.$el.find(".panel-result__dem").children("div").children("div").css("width", t.votesAsPercent.DEM + "%"),
                this.$el.find(".panel-result__dem").children(".panel-result__vote-percentage").text(t.votesAsPercent.DEM + "%"),
                this.$el.find(".panel-result__gop").children("div").children("div").css("width", t.votesAsPercent.GOP + "%"),
                this.$el.find(".panel-result__gop").children(".panel-result__vote-percentage").text(t.votesAsPercent.GOP + "%"),
                this.$el.find(".panel-result__oth").children("div").children("div").css("width", t.votesAsPercent.OTH + "%"),
                this.$el.find(".panel-result__oth").children(".panel-result__vote-percentage").text(t.votesAsPercent.OTH + "%"),
                this.show()
            }
        },
        showNoWinner: function(e) {
            this.$el.find(".panel-summary__headshot").attr("src", "" + e.candidateImage),
            this.$el.find(".panel-summary__declaration").html(e.summary),
            this.$el.find(".panel-summary").attr("class", "panel-summary")
        }
    })
}),
define("module/components/us2016/map-dependencies/views/tooltip-es6", ["exports", "module/bootstrap", "../dependencies-es6", "../vendor_manual/d3.min"], function(e, t, n, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t);
    e.default = n.backbone.View.extend({
        className: "map-tooltip",
        attributes: {
            "aria-hidden": "true"
        },
        initialize: function(e) {
            this.mapModel = e.mapModel,
            this.dataFeed = this.mapModel.get("dataFeed"),
            this.template = n._.template(r.default.$("#tooltip_template").html(), {}),
            this.constText = "",
            r.default.pubsub.on("tooltip:show", this.show.bind(this)),
            r.default.pubsub.on("tooltip:hide", this.hide.bind(this)),
            r.default.pubsub.on("region-chosen", this.hide.bind(this)),
            r.default.pubsub.on("map:reset", this.hide.bind(this)),
            r.default.pubsub.on("window:resize", this.setTooltipBounds.bind(this))
        },
        setTooltipBounds: function() {
            var e = r.default.$(".main-map--svg")
              , t = void 0;
            e[0] && (t = e[0].getBoundingClientRect(),
            this.mapWidth = t.width,
            this.mapHeight = t.height,
            this.$el.css("maxWidth", this.mapWidth / 2))
        },
        render: function() {
            return this.$el.html(this.template),
            this.constituencyNameEl = this.$el.find(".tooltip__constituency-name"),
            this.constituencyVotesEl = this.$el.find(".tooltip__electoral-votes"),
            this.constituencyDeclarationEl = this.$el.find(".tooltip__declaration"),
            this.setTooltipBounds(),
            this.$el
        },
        show: function(e) {
            var t = this.dataFeed.get(e);
            if (t) {
                this.constText !== t.name && (this.constituencyNameEl.text(t.name),
                this.constituencyVotesEl.text(t.totalElectoralVotes + " Electoral Votes"),
                this.constituencyDeclarationEl.html("" + t.summary).attr("class", "tooltip__declaration"),
                t.winningParty && t.isCalled && this.constituencyDeclarationEl.attr("class", "tooltip__declaration tooltip__declaration--" + t.winningParty.toLowerCase()),
                this.elWidth = this.$el.width(),
                this.elHeight = this.$el.height(),
                this.constText = t.name);
                var n = i.event.pageX - r.default.$(".map-wrapper").offset().left
                  , c = i.event.pageY - r.default.$(".map-wrapper").offset().top
                  , a = n < this.mapWidth / 2 ? n + 20 : n - this.elWidth - 40
                  , o = c < this.mapHeight / 2 ? c + 30 : c - this.elHeight - 30;
                this.$el.css({
                    left: a + "px",
                    top: o + "px"
                }),
                this.$el.show()
            } else
                this.hide()
        },
        hide: function() {
            this.$el.hide()
        }
    })
}),
define("module/components/us2016/map-dependencies/views/mapWrapper-es6", ["exports", "module/bootstrap", "../dependencies-es6", "./map-es6", "./controls-es6", "./helper-es6", "./panel-es6", "./tooltip-es6"], function(e, t, n, i, r, c, a, o) {
    "use strict";
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var l = s(t)
      , u = s(i)
      , d = s(r)
      , h = s(c)
      , p = s(a)
      , f = s(o);
    e.default = n.backbone.View.extend({
        className: "map-wrapper",
        initialize: function(e) {
            this.container = e.container,
            this.mapModel = e.mapModel
        },
        render: function() {
            var e = this.getMap();
            return this.$el.append(l.default.$(".news-vj-postcode-lookup"), e.render(), this.getControls(), this.getKeyAndAccordion(), this.getPanel(), !this.mapModel.get("mobile") && this.getTooltip()),
            e.initHelpers(),
            this.$el
        },
        getMap: function() {
            return new u.default({
                mapModel: this.mapModel
            })
        },
        getControls: function() {
            return new d.default({
                mapModel: this.mapModel
            }).render()
        },
        getKeyAndAccordion: function() {
            return new h.default({
                mapModel: this.mapModel
            }).render()
        },
        getPanel: function() {
            return new p.default({
                mapModel: this.mapModel
            }).render()
        },
        getTooltip: function() {
            return new f.default({
                mapModel: this.mapModel
            }).render()
        }
    })
}),
define("module/components/us2016/map-dependencies/app-es6", ["exports", "module/bootstrap", "./vendor_manual/autocomplete", "./vendor_manual/lookup", "./dependencies-es6", "./models/map-es6", "./views/mapWrapper-es6", "vendor/d3/d3"], function(e, t, n, i, r, c, a, o) {
    "use strict";
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function l(e) {
        this.init(e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = s(t)
      , d = (s(n),
    s(i))
      , h = s(c)
      , p = s(a);
    !function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e
    }(o);
    u.default.$(window).on("resize", window._.debounce(function() {
        u.default.pubsub.emit("window:resize")
    }, 50)),
    l.prototype = {
        init: function(e) {
            var t = this;
            this.showHeading(),
            this.initSearch(e.data),
            u.default.$(".news-vj-postcode-lookup__input").on("focus", function() {
                u.default.pubsub.emit("map:search:focus")
            }),
            (0,
            r.canHover)(function(n) {
                var i = u.default.$(window).width()
                  , c = u.default.$(window).height()
                  , a = {
                    width: i,
                    height: c
                };
                n && i < 800 && (n = !1);
                var o = u.default.$(e.container)
                  , s = [490, 640 / 1.8]
                  , l = o.width() / 980;
                o.addClass(n ? "us-map--desktop" : "us-map--mobile");
                var d = {
                    container: e.container,
                    language: e.lang,
                    width: 980,
                    height: 640,
                    center: s,
                    locatorCenter: s,
                    translate: s,
                    mapScale: 1200,
                    maxScaleOut: l,
                    maxScaleIn: n ? 4 : 3,
                    bounds: [[0, 0], [0, 0]],
                    mobile: !n,
                    mapData: e.data,
                    viewport: a
                };
                t.applyCss(980, 640);
                var f = r.backbone.Router.extend({
                    routes: {
                        "constituency/:gssid": "constituency",
                        "*default": "ukMap"
                    },
                    ukMap: function() {
                        this.loadMap(d)
                    },
                    constituency: function(e) {
                        var t = {
                            gssid: e
                        };
                        this.loadMap(r._.extend(d, t))
                    },
                    loadMap: function(e) {
                        var t = r.Topojson.feature(r.mapTopoJson, r.mapTopoJson.objects.boundaries).features;
                        e.features = t,
                        this.addMapWrapper(e)
                    },
                    addMapWrapper: function(e) {
                        var t = new h.default(e)
                          , n = new p.default({
                            mapModel: t
                        });
                        u.default.pubsub.emit("pageLoaded"),
                        o.append(n.render())
                    }
                });
                n && u.default.$("body").addClass("device-can-hover"),
                r._.once(function() {
                    new f,
                    r.backbone.history.start(),
                    r.FastClick.attach(document.body)
                })()
            })
        },
        applyCss: function(e, t) {
            var n = t / e * 100
              , i = document.createElement("style");
            i.type = "text/css",
            i.innerHTML = ".main-map--container { padding-bottom: " + n + "%; }",
            document.getElementsByTagName("head")[0].appendChild(i)
        },
        showHeading: function() {
            u.default.$(".us2016-map__title").addClass("us2016-map__title--visible")
        },
        initSearch: function(e) {
            u.default.$(".news-vj-postcode-lookup").addClass("news-vj-postcode-lookup--visible"),
            new d.default({
                $: u.default.$,
                input: "#news-vj-postcode-lookup__input",
                data: e,
                searchForPostcodes: !1,
                searchForPartialPostcodes: !1,
                onSelect: function(e, t) {},
                vocab: {
                    search_error: "Sorry, we don't recognise this state. Please try again."
                }
            })
        }
    },
    e.default = l
}),
define("module/components/us2016/map-es6", ["exports", "./map-dependencies/app-es6"], function(e, t) {
    "use strict";
    function n() {
        require(["data_components/us_election_map_data"], function(e) {
            new i.default({
                container: "#us2016-map",
                data: e,
                lang: "en"
            })
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.init = n;
    var i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(t)
}),
define("module/components/us2016/popularVoteTabs", ["module/bootstrap", "module/components/politics/politicsTabs"], function(e, t) {
    function n() {
        e.$(".us2016-popular-vote__percentage-bar-inner--2016-animated").addClass("us2016-popular-vote__percentage-bar-inner--2016-non-animated").removeClass("us2016-popular-vote__percentage-bar-inner--2016-animated")
    }
    return {
        init: function(i) {
            t.handleSuccess(i),
            e.pubsub.on("tabs:activate:popular-vote2016", n)
        }
    }
}),
define("module/components/us2016/ticker", ["module/components/politics/ticker/main"], function(e) {
    var t = {
        bemPrefix: "us2016-ticker",
        animator: {
            bemPrefix: "us2016-ticker__item",
            initialDelay: 1e3
        },
        controls: {
            bemPrefix: "us2016-ticker-controls"
        }
    };
    return {
        init: function(n) {
            e.init(n, t)
        }
    }
}),
define("define_us2016", ["module/components/politics/animationFeatureDetect", "module/components/politics/animationFeatureDetectAdapter", "module/components/politics/politicsTabs", "module/components/politics/ticker/control", "module/components/politics/ticker/defaultAnimator", "module/components/politics/ticker/main", "module/components/politics/polling/publisher", "module/components/politics/polling/subscriber-es6", "module/components/us2016/banner-es6", "module/components/us2016/congress_graph-es6", "module/components/us2016/data/historical-es6", "module/components/us2016/data/house-es6", "module/components/us2016/data/senate-es6", "module/components/us2016/map-dependencies/app-es6", "module/components/us2016/map-dependencies/data/map-es6", "module/components/us2016/map-dependencies/dependencies-es6", "module/components/us2016/map-dependencies/helpers/map_dimensions-es6", "module/components/us2016/map-dependencies/helpers/map_fullscreen-es6", "module/components/us2016/map-dependencies/helpers/map_interactions-es6", "module/components/us2016/map-dependencies/helpers/nudge-es6", "module/components/us2016/map-dependencies/models/dataFeed-es6", "module/components/us2016/map-dependencies/models/map-es6", "module/components/us2016/map-dependencies/vendor_manual/autocomplete", "module/components/us2016/map-dependencies/vendor_manual/backbone.min", "module/components/us2016/map-dependencies/vendor_manual/can_hover", "module/components/us2016/map-dependencies/vendor_manual/fastclick", "module/components/us2016/map-dependencies/vendor_manual/lookup", "module/components/us2016/map-dependencies/views/controls-es6", "module/components/us2016/map-dependencies/views/helper-es6", "module/components/us2016/map-dependencies/views/hexagons-es6", "module/components/us2016/map-dependencies/views/locator-es6", "module/components/us2016/map-dependencies/views/map-es6", "module/components/us2016/map-dependencies/views/mapWrapper-es6", "module/components/us2016/map-dependencies/views/mobileOverlay-es6", "module/components/us2016/map-dependencies/views/panel-es6", "module/components/us2016/map-dependencies/views/tooltip-es6", "module/components/us2016/map-es6", "module/components/us2016/popularVoteTabs", "module/components/us2016/ticker"], function() {
    return ""
});

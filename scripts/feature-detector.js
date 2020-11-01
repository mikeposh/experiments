/*jshint -W117*/
define([
    'config'
], function(
    config
) {

    var cache = {};

    var iosVersionRegex = /OS ([0-9])/;

        //Modernizer stuff
        //*********************************************//
        //http://modernizr.com
        //Modernizr is available under the MIT license
    var docElement = document.documentElement;
    var mod = 'modernizr';
    var modElem = document.createElement(mod);
    var mStyle = modElem.style;
        //*********************************************//

    var features = {

        /**
         * User agent matching :(
         */
        isIos: function() {
            return (/(iPod|iPad|iPhone)/).test(navigator.userAgent);
        },
        isIosVersion: function(version) {
            var match = iosVersionRegex.exec(navigator.userAgent);
            if (match && match[1]) {
                return (Number(match[1]) >= version) ? true : false;
            }
            return false;
        },
        isIos4: function() {
            return this.isIosVersion(4);
        },
        isAndroid: function() {
            return (/Android/i).test(navigator.userAgent);
        },
        isAndroidMobile2: function() {
            return this.isAndroid() && (/Mobile/i).test(navigator.userAgent) && /Android 2./.test(navigator.userAgent);
        },
        isAndroidMobile22: function() {
            return this.isAndroid() && (/Mobile/i).test(navigator.userAgent) && /2.2/.test(navigator.userAgent);
        },
        isIE10: function() {
            return (/MSIE 10/).test(navigator.userAgent);
        },
        isWindowsPhone: function() {
            return (/Windows Phone/).test(navigator.userAgent);
        },
        isChrome: function() {
            return (/Chrome/).test(navigator.userAgent);
        },

        /**
         * Modern JS Features
         */
        canUseHistoryApi: function() {
          return window.history && window.history.pushState;
        },

        /**
         *
         * Continuous-play AV
         */
        isContinuousPlayEnabled: function() {
            return !!document.getElementById('gnlContinuousPlayEnabled') || !!document.getElementById('continuous-play-enabled');
        },

        /**
         * old-stack (desktop) ads
         */
        isShowingDesktopAds: function() {
            return !!document.getElementById('advert-post-script-load');
        },

        isOrbFig: function() {
            return (typeof orb !== 'undefined' && typeof orb.fig === 'function');
        },

        /**
         * Global News Limited analytics should be collected
         */
        isCollectingGNLAnalytics: function() {
            return !!document.getElementById('gnlAnalyticsEnabled');
        },

        /**
         * Global News Limited analytics should be collected
         */
        isDisplayingGnlAds: function() {
            return !!document.getElementById('gnlAdsEnabled');
        },

        /**
         * Does the user originate from the UK?
         *
         * To be inline with the fig API, will return undefined when
         * unable to determine the answer, see:
         * http://www.live.bbc.co.uk/frameworks/orb/fig
         *
         * Return values:
         *  1 - user from UK
         *  0 - user outside of UK
         *  undefined - unable to determine
         */
        isFromUK: function() {
            var isFigGeo = typeof orb.fig.geo !== "undefined" &&
                           typeof orb.fig.geo.isUK === "function";

            return this.isOrbFig() && isFigGeo ? orb.fig.geo.isUK() : undefined;
        },

        /**
         * Unlike adaptive streaming (HDS/HLS), progressive download XML playlists
         * are used by World Service sites to serve them to specific devices.
         */
        canPlayProgressiveDownload: function() {
            return config.configuration.cms === 'topcat' &&
                !this.isDesktop() &&
                config.asset.isLiveAvStream !== true &&
                (!this.isIos() ||
                    config.asset.mediaType === 'audio');
        },

        _contains: function(str, substr) {
            return !!~('' + str).indexOf(substr);
        },

        _injectElementWithStyles: function(rule, callback, nodes, testnames) {
            var style;
            var ret;
            var node;
            var docOverflow;
            var div = document.createElement('div');
            var body = document.body;
            var fakeBody = body || document.createElement('body');

            if (parseInt(nodes, 10)) {
                while ( nodes-- ) {
                    node = document.createElement('div');
                    node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                    div.appendChild(node);
                }
            }

            style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
            div.id = mod;
            (body ? div : fakeBody).innerHTML += style;
            fakeBody.appendChild(div);

            if (!body) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
                docOverflow = docElement.style.overflow;
                docElement.style.overflow = 'hidden';
                docElement.appendChild(fakeBody);
            }

            ret = callback(div, rule);

            if ( !body ) {
                fakeBody.parentNode.removeChild(fakeBody);
                docElement.style.overflow = docOverflow;
            } else {
                div.parentNode.removeChild(div);
            }

            return !!ret;
        },

        _testProps: function(props, prefixed) {
            for (var i in props) {
                var prop = props[i];

                if (!this._contains(prop, "-") && mStyle[prop] !== undefined) {
                    return prefixed === 'pfx' ? prop : true;
                }
            }
            return false;
        },

        _testPropsAll: function(prop, prefixed, elem) {
            var omPrefixes = 'Webkit Moz O ms';
            var cssomPrefixes = omPrefixes.split(' ');
            var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1);
            var props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            return this._testProps(props, prefixed);
        },

        canCssColumn: function() {
            return !!this._testPropsAll('columnCount');
        },

        canCssTransition: function() {
            return !!this._testPropsAll('transition');
        },

        whichTransitionEnd: function() {
            var el = document.createElement('fakeelement');
            var transitions = {
                  transition       : 'transitionend',
                  OTransition      : 'oTransitionEnd',
                  MozTransition    : 'transitionend',
                  WebkitTransition : 'webkitTransitionEnd'
                };

            for (var t in transitions) {
                if (el.style[t] !== undefined) {
                    return transitions[t];
                }
            }
        },

        canCssTransform: function() {
            return !!this._testPropsAll('transform');
        },

        canCssPreserve3d: function() {
            if (!this.canCssTransform()) {
                return false;
            }

            var ret = !!this._testPropsAll('transformStyle');

            if (ret) {
                this._injectElementWithStyles("#modernizr { transform-style: preserve-3d; -webkit-transform-style: preserve-3d; -moz-transform-style: preserve-3d; -o-transform-style: preserve-3d; }",
                    function(node, rule) {
                        if (!window.getComputedStyle) {
                            return false;
                        }

                        var testValue = 'preserve-3d';
                        var style = window.getComputedStyle(node);
                        var webkit = style.getPropertyValue('-webkit-transform-style') === testValue;
                        var moz = style.getPropertyValue('-moz-transform-style') === testValue;
                        var o = style.getPropertyValue('-o-transform-style') === testValue;
                        var noprefix = style.getPropertyValue('transform-style') === testValue;

                        ret = noprefix || o || moz || webkit;
                    }
                );
            }

            return ret;
        },

        canCssTransform3d: function() {
            var ret = !!this._testPropsAll('perspective');

            if (ret && 'webkitPerspective' in docElement.style) {
                this._injectElementWithStyles('@media (transform-3d), (-webkit-transform-3d) { #modernizr{ left: 9px; position: absolute; height: 3px; }}', function(node, rule) {
                    ret = node.offsetLeft === 9 && node.offsetHeight === 3;
                });
            }
            return ret;
        },

        canTouchEvents: function() {
            return ('ontouchstart' in window);
        },

        canSVG: function() {
            return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;
        },

        /**
         * Desktop detection
         */
        isDesktop: function() {
            return this.isLargeScreen() && !this.isTouchDevice();
        },

        isTouchDevice: function() {
            if (forceTouchSupport('off')) {
                return false;
            } else if (forceTouchSupport('on') || this.canTouchEvents() || window.navigator.msMaxTouchPoints > 0 || window.DocumentTouch && document instanceof DocumentTouch) {
                return true;
            } else {
                return false;
            }
        },

        isLargeScreen: function() {
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            return (width > 1024) ? true : false;
        },

        _isWsChannelPage: function() {
            return config.isChannelPage && config.configuration.cms === 'topcat';
        },

        isApple: function() {
            return (/(Macintosh|Mac_PowerPC)/).test(navigator.userAgent) || this.isIos();
        },

        isWindows: function() {
            return (/(Windows)/).test(navigator.userAgent);
        },

        isSafari: function() {
            return (/(Safari)/).test(navigator.userAgent) && !(/(Chrome)/).test(navigator.userAgent);
        },

        isIE: function() {
            return (/(MSIE|WOW64|IEMobile)/).test(navigator.userAgent);
        },

        isFirefox: function() {
            return (/(Firefox)/).test(navigator.userAgent);
        },

        isFacebookBrowser: function() {
            return (/(FBAN|FBAV)/).test(navigator.userAgent);
        },

        isAndroidBrowser: function() {
            return (/(Android|Mobile)/).test(navigator.userAgent);
        },
    };

    function forceTouchSupport(state) {
        var match = (/forceTouchSupport=(on|off)/).exec(window.location.search);
        return (match && match[1]) ? match[1] === state : false;
    }

    function testType(type, test) {
        if (!cache.hasOwnProperty(test)) {
            cache[test] = features[type + test] ? features[type + test]() : undefined;
        }
        return cache[test];
    }

    return {
        can: function(test) {
            return testType('can', test);
        },

        is: function(test) {
            return testType('is', test);
        },

        which: function(test) {
            return testType('which', test);
        },

        __cacheClear: function() { /* for unit testing */
            cache = {};
        }
    };
});

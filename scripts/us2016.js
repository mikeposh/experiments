/*
https://github.com/bbc/responsive-news/blob/b1f47ddb1b7db374cd6904f331565162690dea3e/tabloid/webapp/static/js/module/components/us2016/banner.es6
*/

/* jshint esversion: 6 */

import news from 'module/bootstrap';
import pollingSubscriber from 'module/components/politics/polling/subscriber-es6';
import featureDetector from 'module/featureDetector';

const {$, pubsub} = news;

const bannerSelector = '.us2016-banner';
const bannerUnderClass = 'us2016-banner--result-under';

const resultSelector = '.us2016-banner__result';
const resultBarSelector = '.us2016-banner__result-bar-animation';
const resultOverSelector = '.us2016-banner__result-over .us2016-banner__result-seats';
const resultUnderSelector = '.us2016-banner__result-under';

const demBarSelector = '.us2016-banner__result-bar--dem';
const demLabelSelector = '.us2016-banner__result-over .us2016-banner__result-seats--dem';

const gopBarSelector = '.us2016-banner__result-bar--gop';
const gopLabelSelector = '.us2016-banner__result-over .us2016-banner__result-seats--gop';

const insideClass = 'us2016-banner__result-seats--inside';
const outsideClass = 'us2016-banner__result-seats--outside';

const animationEndName = 'msAnimationEnd webkitAnimationEnd animationend';

const banner = {
    labelsUnder: false,

    init(components) {
        banner.positionLabels();

        if (featureDetector.can('CssTransition')) {
            $(resultBarSelector).on(animationEndName, () => banner.positionLabels());
        }

        pubsub.on('global:resize', () => banner.positionLabels());

        pollingSubscriber.init(components, {
            animationClass: 'politics-bar-update',
            animationCallback: banner.positionLabels
        });
    },

    positionLabels() {
        let bannerElement = $('.us2016-banner');

        let resultWidth = $(resultSelector).width();

        let resultOver = $(resultOverSelector);
        let resultUnder = $(resultUnderSelector);

        banner.labelsUnder = false;

        banner.positionLabel(demLabelSelector, demBarSelector, gopBarSelector, resultWidth);
        banner.positionLabel(gopLabelSelector, gopBarSelector, demBarSelector, resultWidth);


        if (banner.labelsUnder) {
            resultOver.hide();
            resultUnder.show();
            bannerElement.addClass(bannerUnderClass);
        } else {
            resultOver.show();
            resultUnder.hide();
            bannerElement.removeClass(bannerUnderClass);
        }
    },

    positionLabel(labelSelector, barSelector, otherBarSelector, resultWidth) {
        let label = $(labelSelector);
        let labelWidth = label.outerWidth();

        let barWidth = $(barSelector).width();
        let otherBarWidth = $(otherBarSelector).width();

        let halfResultWidth = (resultWidth - 1 ) / 2;
        let spaceAvailable = Math.min(halfResultWidth - barWidth, resultWidth - otherBarWidth - barWidth);

        if (barWidth >= labelWidth) {
            label.removeClass(outsideClass).addClass(insideClass);
        } else if (labelWidth > spaceAvailable) {
            banner.labelsUnder = true;
        } else {
            label.removeClass(insideClass).addClass(outsideClass);
        }
    }
};

export default banner;

export function init (...arg) {
    return banner.init.apply(banner, arg);
}

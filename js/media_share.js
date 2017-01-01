/*!
 * Bootstrap v3.0.0
 *
 * Copyright 2013 Twitter, Inc
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world @twitter by @mdo and @fat.
 */

(function(e) {
    "use strict";
    e.fn.sti = function(t) {
        var n = e.extend({
            title: "",
            summary: "",
            minWidth: 200,
            minHeight: 200,
            duration: 200,
            scroll: true,
            primary_menu: ["facebook", "twitter", "google", "linkedin", "pinterest"]
        }, t);
        var r = {
            createImgHash: function(e) {
                var t, n, i;
                if (!e) {
                    return ""
                }
                n = 0;
                if (e.length === 0) {
                    return n
                }
                for (i = 0; i < e.length; i++) {
                    t = e[i];
                    n = r.hashChar(e, t, n)
                }
                n = Math.abs(n) + "";
                return n.substring(0, 5)
            },
            hashChar: function(e, t, n) {
                n = (n << 5) - n + e.charCodeAt(t);
                return n & n
            },
            windowSize: function(e) {
                switch (e) {
                    case "facebook":
                        return "width=670,height=320";
                        break;
                    case "twitter":
                        return "width=626,height=252";
                        break;
                    case "google":
                        return "width=520,height=550";
                        break;
                    case "linkedin":
                        return "width=620,height=450";
                        break;
                    case "delicious":
                        return "width=800,height=600";
                        break;
                    default:
                        return "width=800,height=350"
                }
            }
        };
        this.each(function() {
            var t = e(this),
                i = t.data("media") ? t.data("media") : t[0].src,
                s = n.scroll ? r.createImgHash(i) : "",
                o = encodeURIComponent(location.href) + "%23" + s,
                u = n.title === "" ? t.data("title") ? encodeURIComponent(t.data("title")) : encodeURIComponent(document.title) : encodeURIComponent(n.title),
                a = n.summary === "" ? t.data("summary") ? encodeURIComponent(t.data("summary")) : t.attr("alt") : encodeURIComponent(n.summary),
                f = "&descr=" + a + "&img=" + i + "&url=" + o,
                l = 0xc29d0f7ca164,
                c = "",
                h = {
                    facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(f),
                    twitter: "https://twitter.com/share?url=" + o + "&text=" + u,
                    google: "https://plus.google.com/share?url=" + encodeURIComponent(f),
                    linkedin: "http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(f),
                    pinterest: "http://pinterest.com/pin/create/button/?url=" + o + "&media=" + i + "&description=" + u,
                    tumblr: "http://www.tumblr.com/share/photo?source=" + i + "&caption=" + a + "&click_thru=" + o,
                    reddit: "http://reddit.com/submit?url=" + o + "&title=" + u + "&text=" + a,
                    digg: "http://digg.com/submit?phase=2&url=" + o + "&title=" + u + "&bodytext=" + a,
                    delicious: "http://delicious.com/post?url=" + o + "&title=" + u
                };
            for (var p = 0; p < n.primary_menu.length; p++) {
                var d = n.primary_menu[p];
                c += '<a href="' + h[d] + '" class="sti-button sti-' + d + '-btn" data-network="' + d + '" rel="nofollow">Share</a>'
            }
            if (t.width() >= n.minWidth && t.height() >= n.minHeight) {
                t.wrap('<div class="sti" id="' + s + '"></div>');
                t.after('<span class="sti-share-box">' + c + "</span>")
            }
        });
        e(".sti .sti-button").on("click", function() {
            var t = e(this).attr("href"),
                n = e(this).data("network"),
                i = r.windowSize(n);
            window.open(t, "Share This Image", i + ",status=0,toolbar=0,menubar=0,location=1,scrollbars=1");
            return false
        });
        e(".sti").mouseenter(function() {
            e(this).children(".sti-share-box").fadeIn(n.duration)
        }).mouseleave(function() {
            e(this).children(".sti-share-box").fadeOut(n.duration)
        })
    }
})(jQuery)
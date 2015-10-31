/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2015 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
(function(a){var b=console&&console.log&&console.log.bind?console.log.bind(console):function(){},c=function(a){var c=null,d=null,f=null,g=a.parent().children().length,n=a.index();1==g?c=a.parent():0==n?f=a.next():d=a.prev();this.getNode=function(){return a};this.swapWith=function(a){c?c.append(a.getNode()):d?d.after(a.getNode()):f?f.before(a.getNode()):b("WARNING: Invalid state - either parent, prev, next should have a valid value")}},d=function(a,b){var d=new c(a),f=new c(b);d.swapWith(f);f.swapWith(d);
d=a.attr("class");a.attr("class",b.attr("class"));b.attr("class",d);a.hasClass("temp_no_id")&&(a.removeClass("temp_no_id"),b.addClass("temp_no_id"));b.removeClass("placeholder").addClass("shared_content");a.addClass("placeholder").removeClass("shared_content")},g=function(c){var f=c.hasClass("active"),g="undefined"!==typeof c.attr("data-scale-below"),i=function(a){a==f?b('WARNING: Setting the same "active" state twice',this.toString()):(f=a)?(c.addClass("active"),v.trigger("muse_bp_activate",[j,c])):
(c.removeClass("active"),v.trigger("muse_bp_deactivate",[j,c]))},j=function(){var a=c.attr("data-min-width")||void 0,b=c.attr("data-max-width")||void 0,d="";void 0!==a&&(d+=(d?" and ":"")+"(min-width: "+a+"px)");void 0!==b&&(d+=(d?" and ":"")+"(max-width: "+b+"px)");return d}(),n=window.matchMedia(j),o=function(){Muse.Utils.requestAnimationFrame(function(){s()})},r=g?window.matchMedia("(max-width: "+c.attr("data-scale-below")+"px)"):null,q=function(){r.matches?m():s()},m=function(){a("meta[name=viewport]").attr("content",
"width="+c.attr("data-scale-below"))},s=function(){a("meta[name=viewport]").attr("content","width=device-width, initial-scale=1.0");Muse.Utils.requestAnimationFrame(function(){r.matches&&m()})},v=a("body");this.isActive=function(){return f};this.isMatched=function(){return n.matches};this.onMatch=function(a){var b=this;n.addListener(function(c){c.matches&&a(b)})};this.activate=function(){if(f)b("WARNING: Trying to activate same breakpoint twice",this.toString());else{var j=function(c){a(".placeholder",
c).each(function(){var c=a(this),f=c.attr("data-placeholder-for");if(f){var g=a(".shared_content").filter(function(b,c){return f==a(c).attr("data-content-guid")});0==g.length?b("WARNING: Could not find content node with GUID",f):1<g.length?b("WARNING: Found",g.length,"content nodes with GUID",f,", expected only 1"):(d(c,g),j(g))}else b("WARNING: Invalid placeholder-for data property for placeholder node",c)})};j(c);a(".temp_no_id",c).each(function(){var c=a(this),d=c.attr("data-orig-id"),f=a("#"+
d);1==f.length?f.removeAttr("id").attr("data-orig-id",d).addClass("temp_no_id"):b("WARNING: Expected to find 1 node with id",d,"but found",f.length);c.removeAttr("data-orig-id").attr("id",d).removeClass("temp_no_id")});a(".temp_no_img_src",c).each(function(){var b=a(this);b.removeClass("temp_no_img_src").attr("src",b.attr("data-orig-src")).removeAttr("data-orig-src")});i(!0);g&&(r.addListener(q),a(window).on("orientationchange",o),q())}};this.deactivate=function(){f?(g&&(r.removeListener(q),a(window).off("orientationchange",
o)),i(!1)):b("WARNING: Trying to deactivate same breakpoint twice",this.toString())};this.toString=function(){return"[Breakpoint "+j+", "+(f?"active":"not active")+", "+(this.isMatched()?"matched":"not matched")+(g?", scale content":"")+"]"}},f=new function(){var c=function(a){a?a==f?b("WARNING: breakpoint is already active."):(f&&f.deactivate(),f=a,d.attr("data-content",f.toString()),a.isActive()||f.activate()):b("WARNING: Cannot update active breakpoint NULL.")},d=a(".css-section-debug .js"),f=
null;this.registerBreakpoint=function(a){a.onMatch(c);a.isMatched()?c(a):a.isActive()&&a.deactivate()}};a.fn.registerBreakpoint=function(){if(matchMedia)return this.each(function(){f.registerBreakpoint(new g(a(this)))}),this;else b("WARNING: Browser does not support media queries.")}})(jQuery);
;(function(){if(!("undefined"==typeof Muse||"undefined"==typeof Muse.assets)){var a=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]==b)return c;return-1}(Muse.assets.required,"jquery.museresponsive.js");if(-1!=a){Muse.assets.required.splice(a,1);for(var a=document.getElementsByTagName("meta"),b=0,c=a.length;b<c;b++){var d=a[b];if("generator"==d.getAttribute("name")){"2015.1.0.333"!=d.getAttribute("content")&&Muse.assets.outOfDate.push("jquery.museresponsive.js");break}}}}})();

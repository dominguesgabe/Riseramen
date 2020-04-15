/*! http://responsiveslides.com v1.55 by @viljamis */
(function(c,K,C){c.fn.responsiveSlides=function(m){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},m);return this.each(function(){C++;var f=c(this),u,t,v,n,q,r,p=0,e=f.children(),D=e.length,h=parseFloat(a.speed),E=parseFloat(a.timeout),w=parseFloat(a.maxwidth),g=a.namespace,d=g+C,F=g+"_nav "+d+"_nav",x=g+"_here",k=d+"_on",
y=d+"_s",l=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),z={"float":"left",position:"relative",opacity:1,zIndex:2},A={"float":"none",position:"absolute",opacity:0,zIndex:1},G=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;u=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<u.length;c++)if("string"===typeof b[u[c]+a])return!0;return!1}(),B=function(b){a.before(b);G?(e.removeClass(k).css(A).eq(b).addClass(k).css(z),
p=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(k).css(A).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(k).css(z);a.after(b);p=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-.5}),f.empty().append(e));e.each(function(a){this.id=y+a});f.addClass(g+" "+d);m&&m.maxwidth&&f.css("max-width",w);e.hide().css(A).eq(0).addClass(k).css(z).show();G&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.length){if(E<h+100)return;if(a.pager&&!a.manualControls){var H=[];e.each(function(a){a+=1;H+="<li><a href='#' class='"+y+a+"'>"+a+"</a></li>"});l.append(H);m.navContainer?c(a.navContainer).append(l):f.after(l)}a.manualControls&&(l=c(a.manualControls),l.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&l.find("li").each(function(a){c(this).addClass(y+(a+1))});if(a.pager||a.manualControls)r=
l.find("a"),t=function(a){r.closest("li").removeClass(x).eq(a).addClass(x)};a.auto&&(v=function(){q=setInterval(function(){e.stop(!0,!0);var b=p+1<D?p+1:0;(a.pager||a.manualControls)&&t(b);B(b)},E)},v());n=function(){a.auto&&(clearInterval(q),v())};a.pause&&f.hover(function(){clearInterval(q)},function(){n()});if(a.pager||a.manualControls)r.bind("click",function(b){b.preventDefault();a.pauseControls||n();b=r.index(this);p===b||c("."+k).queue("fx").length||(t(b),B(b))}).eq(0).closest("li").addClass(x),
a.pauseControls&&r.hover(function(){clearInterval(q)},function(){n()});if(a.nav){g="<a href='#' class='"+F+" prev'>"+a.prevText+"</a><a href='#' class='"+F+" next'>"+a.nextText+"</a>";m.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),I=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+k);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<D?p+1:0;B(c(this)[0]===I[0]?b:d);(a.pager||a.manualControls)&&t(c(this)[0]===I[0]?b:d);a.pauseControls||n()}});
a.pauseControls&&d.hover(function(){clearInterval(q)},function(){n()})}}if("undefined"===typeof document.body.style.maxWidth&&m.maxwidth){var J=function(){f.css("width","100%");f.width()>w&&f.css("width",w)};J();c(K).bind("resize",function(){J()})}})}})(jQuery,this,0);

// visibility
!function(e){"use strict";var i=-1,t={onVisible:function(e){var i=t.isSupported();if(!i||!t.hidden())return e(),i;var n=t.change(function(){t.hidden()||(t.unbind(n),e())});return n},change:function(e){if(!t.isSupported())return!1;i+=1;var n=i;return t._callbacks[n]=e,t._listen(),n},unbind:function(e){delete t._callbacks[e]},afterPrerendering:function(e){var i=t.isSupported(),n="prerender";if(!i||n!=t.state())return e(),i;var r=t.change(function(i,d){n!=d&&(t.unbind(r),e())});return r},hidden:function(){return!(!t._doc.hidden&&!t._doc.webkitHidden)},state:function(){return t._doc.visibilityState||t._doc.webkitVisibilityState||"visible"},isSupported:function(){return!(!t._doc.visibilityState&&!t._doc.webkitVisibilityState)},_doc:document||{},_callbacks:{},_change:function(e){var i=t.state();for(var n in t._callbacks)t._callbacks[n].call(t._doc,e,i)},_listen:function(){if(!t._init){var e="visibilitychange";t._doc.webkitVisibilityState&&(e="webkit"+e);var i=function(){t._change.apply(t,arguments)};t._doc.addEventListener?t._doc.addEventListener(e,i):t._doc.attachEvent(e,i),t._init=!0}}};"undefined"!=typeof module&&module.exports?module.exports=t:e.Visibility=t}(this),function(e){"use strict";var i=-1,t=function(t){return t.every=function(e,n,r){t._time(),r||(r=n,n=null),i+=1;var d=i;return t._timers[d]={visible:e,hidden:n,callback:r},t._run(d,!1),t.isSupported()&&t._listen(),d},t.stop=function(e){return t._timers[e]?(t._stop(e),delete t._timers[e],!0):!1},t._timers={},t._time=function(){t._timed||(t._timed=!0,t._wasHidden=t.hidden(),t.change(function(){t._stopRun(),t._wasHidden=t.hidden()}))},t._run=function(i,n){var r,d=t._timers[i];if(t.hidden()){if(null===d.hidden)return;r=d.hidden}else r=d.visible;var a=function(){d.last=new Date,d.callback.call(e)};if(n){var o=new Date,u=o-d.last;r>u?d.delay=setTimeout(function(){a(),d.id=setInterval(a,r)},r-u):(a(),d.id=setInterval(a,r))}else d.id=setInterval(a,r)},t._stop=function(e){var i=t._timers[e];clearInterval(i.id),clearTimeout(i.delay),delete i.id,delete i.delay},t._stopRun=function(){var e=t.hidden(),i=t._wasHidden;if(e&&!i||!e&&i)for(var n in t._timers)t._stop(n),t._run(n,!e)},t};"undefined"!=typeof module&&module.exports?module.exports=t(require("./visibility.core")):t(e.Visibility)}(window);
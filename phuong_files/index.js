(()=>{var y=Object.defineProperty;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var l=(o,t,e)=>t in o?y(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,m=(o,t)=>{for(var e in t||(t={}))w.call(t,e)&&l(o,e,t[e]);if(d)for(var e of d(t))_.call(t,e)&&l(o,e,t[e]);return o};function p(){let o=document.querySelectorAll(".header__burger"),t=document.querySelector(".mobmenu"),e=document.querySelector(".footer-mobmenu"),r=t.querySelectorAll(".mobmenu__section"),i=e.querySelectorAll(".mobmenu__section");Array.from(o).forEach(n=>{n.addEventListener("click",function(){t.classList.toggle("mobmenu--opened"),document.body.classList.toggle("body-scroll-lock")})}),Array.from(r).forEach(n=>n.querySelector(".mobmenu__section-caption").addEventListener("click",function(){n.classList.toggle("mobmenu__section--opened")})),Array.from(i).forEach(n=>n.querySelector(".mobmenu__section-caption").addEventListener("click",function(){n.classList.toggle("mobmenu__section--opened")}))}function f(){let o=document.querySelectorAll(".dropdown-items-container");Array.from(o).forEach(function(t){return t.addEventListener("click",function(){let e=t.querySelector(".dropdown-item__description"),r=t.querySelector(".dropdown-item__title");e.classList.toggle("hidden"),r.classList.toggle("active")})})}var v=(o={})=>{let t="cr65d8qu";window.intercomSettings=m({app_id:t},o),function(){var e=window,r=e.Intercom;if(typeof r=="function")r("reattach_activator"),r("update",e.intercomSettings);else{var i=document,n=function(){n.c(arguments)};n.q=[],n.c=function(c){n.q.push(c)},e.Intercom=n;var s=function(){var c=i.createElement("script");c.type="text/javascript",c.async=!0,c.src="https://widget.intercom.io/widget/"+t;var a=i.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)};document.readyState==="complete"?s():e.attachEvent?e.attachEvent("onload",s):e.addEventListener("load",s,!1)}}()};var g=()=>{tns({autoplay:!1,mouseDrag:!0,center:!0,preventScrollOnTouch:!0,container:document.querySelector(".reviews-slider"),loop:!0,items:1,gutter:100,nav:!1,prevButton:document.querySelector(".reviews-slider-controls button.prev-button"),nextButton:document.querySelector(".reviews-slider-controls button.next-button"),navPosition:"bottom",slideBy:1,speed:800,preventActionWhenRunning:!0})},u=()=>{if(window.innerWidth>=1200){let o=document.querySelector(".device-platform-preview video");return o.play(),o.autoplay=!0,o.preload="auto",window.removeEventListener("resize",u)}window.addEventListener("resize",u)};document.addEventListener("DOMContentLoaded",function(){p(),g(),u(),f(),v({hide_default_launcher:!0,custom_launcher_selector:".intercom-show-button"})});})();
//# sourceMappingURL=index.js.map

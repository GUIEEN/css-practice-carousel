parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"H99C":[function(require,module,exports) {
var e=document.querySelector(".js-nextBtn"),t=document.querySelector(".js-prevBtn"),n=document.querySelector(".js-slideList"),r=n.querySelectorAll("li"),l=Array.from(r).length,i=document.querySelector(".js-slider"),c="active__slide",u=void 0,o=1,s=function(e,t){return e=((e-1)%t+t)%t+1},d=function(){return n.querySelector("li:nth-child("+o+")")},a=function(){null!=u&&u.classList.remove(c),(u=d()).classList.add(c)};a();var v={prev:function(){o=s(--o,l),a()},next:function(){o=s(++o,l),a()}},f={kill:function(){return null!=f.id?clearInterval(f.id):""},start:function(){f.id=setInterval(v.next,1e3)},id:null};f.start(),t.addEventListener("click",v.prev),e.addEventListener("click",v.next),i.addEventListener("mouseover",f.kill),i.addEventListener("mouseout",f.start);
},{}]},{},["H99C"], null)
//# sourceMappingURL=src.951804f8.map
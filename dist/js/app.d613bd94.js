(function(e){function s(s){for(var n,c,i=s[0],o=s[1],u=s[2],l=0,A=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&A.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);a&&a(s);while(A.length)A.shift()();return U.push.apply(U,u||[]),t()}function t(){for(var e,s=0;s<U.length;s++){for(var t=U[s],n=!0,i=1;i<t.length;i++){var o=t[i];0!==r[o]&&(n=!1)}n&&(U.splice(s--,1),e=c(c.s=t[0]))}return e}var n={},r={app:0},U=[];function c(s){if(n[s])return n[s].exports;var t=n[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=n,c.d=function(e,s,t){c.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,s){if(1&s&&(e=c(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var n in e)c.d(t,n,function(s){return e[s]}.bind(null,n));return t},c.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(s,"a",s),s},c.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=s,i=i.slice();for(var u=0;u<i.length;u++)s(i[u]);var a=o;U.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},1418:function(e,s,t){"use strict";t("424c")},"194c":function(e,s,t){},"3df0":function(e,s,t){},"424c":function(e,s,t){},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("Header"),t("Content"),t("MainMenu"),t("FooterTop"),t("FooterBottom")],1)},U=[],c=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("header",[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[e._m(0),t("div",{staticClass:"col"},[t("ul",e._l(e.links,(function(s,n){return t("li",{key:n},[t("a",{attrs:{href:"#"}},[e._v(e._s(s.text))])])})),0)])])])])},i=[function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"col"},[n("img",{attrs:{src:t("9f51"),alt:"DC"}})])}],o={name:"Header",data:function(){return{links:[{text:"Characters",url:"#",current:!1},{text:"Comics",url:"#",current:!0},{text:"Movies",url:"#",current:!1},{text:"TV",url:"#",current:!1},{text:"Games",url:"#",current:!1},{text:"Collectibles",url:"#",current:!1},{text:"Videos",url:"#",current:!1},{text:"Fans",url:"#",current:!1},{text:"News",url:"#",current:!1},{text:"Shop",url:"#",current:!1}]}}},u=o,a=(t("1418"),t("2877")),l=Object(a["a"])(u,c,i,!1,null,"5926a593",null),A=l.exports,f=function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{attrs:{id:"content-section"}},[t("h2",[e._v("CONTENT GOES HERE")])])}],p={name:"Content"},m=p,g=(t("dba9"),Object(a["a"])(m,f,d,!1,null,"21f78548",null)),b=g.exports,h=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{attrs:{id:"main-menu-section"}},[t("ul",e._l(e.items,(function(s){return t("li",{key:s.text},[t("a",{attrs:{href:"#"}},[t("img",{attrs:{src:e.getImageUrl(s.image),alt:s.text}})])])})),0)])},v=[],x={name:"MainMenu",data:function(){return{items:[{image:"../assets/img/buy-comics-digital-comics.png",text:"digital comics"},{image:"../assets/img/buy-comics-digital-merchandise.png",text:"dc merchandise"},{image:"../assets/img/buy-comics-digital-shop-locator.png",text:"subscription"},{image:"../assets/img/buy-comics-digital-subscriptions.png",text:"comic shop locator"},{image:"../assets/img/buy-dc-power-visa.svg",text:"dc power visa"}]}},methods:{getImageUrl:function(e){return t("de6e")(e)}}},O=x,y=(t("abf9"),Object(a["a"])(O,h,v,!1,null,"07c6842c",null)),C=y.exports,w=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section")},X=[],j={name:"FooterTop"},F=j,M=Object(a["a"])(F,w,X,!1,null,null,null),P=M.exports,E=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section")},k=[],G={name:"FooterBottom"},S=G,T=Object(a["a"])(S,E,k,!1,null,null,null),D=T.exports,B={name:"App",components:{Header:A,Content:b,MainMenu:C,FooterTop:P,FooterBottom:D}},H=B,K=(t("5c0b"),Object(a["a"])(H,r,U,!1,null,null,null)),Q=K.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(Q)}}).$mount("#app")},"5c0b":function(e,s,t){"use strict";t("9c0c")},"9c0c":function(e,s,t){},"9f51":function(e,s){e.exports="data:image/png;base64,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"},abf9:function(e,s,t){"use strict";t("194c")},dba9:function(e,s,t){"use strict";t("3df0")},de6e:function(e,s){function t(e){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="de6e"}});
//# sourceMappingURL=app.d613bd94.js.map
(function(e){function t(t){for(var a,i,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)i=c[s],r[i]&&f.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d24307e7"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=a);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e),o=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/age_checker/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"06c9":function(e,t,n){},adf1:function(e,t,n){"use strict";var a=n("06c9"),r=n.n(a);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],i=n("2877"),c={},u=Object(i["a"])(c,r,o,!1,null,null,null),l=u.exports,s=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[e._v("Age checker")]),n("v-content",[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("Date2Age")],1)],1)],1)],1)],1)},f=[],p=n("d225"),b=n("308d"),h=n("6bb5"),v=n("4e2b"),g=n("9ab4"),y=n("60a3"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-layout",[n("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[e.isCollect()?n("v-layout",{staticClass:"align-baseline"},[n("v-card-text",{staticClass:"display-4"},[e._v(e._s(e.age))]),n("v-card-text",{staticClass:"display-1"},[e._v("歳")])],1):e._e()],1),n("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[n("v-form",[e.editingTitle_?n("v-text-field",{attrs:{type:"text",placeholder:"title"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}):n("v-text-field",{attrs:{disabled:"",type:"text",placeholder:"title"},on:{click:function(t){return e.editTitle()}},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e.edigintDate_?n("v-text-field",{attrs:{type:"text",placeholder:"2019/01/01"},model:{value:e.birthday,callback:function(t){e.birthday=t},expression:"birthday"}}):n("v-text-field",{attrs:{disabled:"",type:"text",placeholder:"2019/01/01"},on:{click:function(t){return e.editDate()}},model:{value:e.birthday,callback:function(t){e.birthday=t},expression:"birthday"}})],1),e.isCollect()?n("span",[e._v(e._s(e.dateJp))]):e._e()],1)],1)],1)},j=[],x=(n("f576"),n("c5f6"),n("6b54"),n("b0b4")),w=function(e){function t(){var e;return Object(p["a"])(this,t),e=Object(b["a"])(this,Object(h["a"])(t).apply(this,arguments)),e.birthday="",e.title="",e.editingTitle_=!0,e.edigintDate_=!0,e}return Object(v["a"])(t,e),Object(x["a"])(t,[{key:"isCollect",value:function(){var e=new Date(this.birthday);return!("Invalid Date"===e.toString())}},{key:"date2num",value:function(e){return Number(this.padNumber(e.getFullYear(),4)+this.padNumber(e.getMonth(),2)+this.padNumber(e.getDate(),2))}},{key:"padNumber",value:function(e,t){return e.toString().padStart(t,"0")}},{key:"editDate",value:function(){this.edigintDate_=!0}},{key:"editTitle",value:function(){this.editingTitle_=!0}},{key:"age",get:function(){var e=new Date,t=this.date;return Math.floor((this.date2num(e)-this.date2num(t))/1e4)}},{key:"date",get:function(){return new Date(this.birthday)}},{key:"dateJp",get:function(){var e={era:"long"};return new Intl.DateTimeFormat("ja-JP-u-ca-japanese",e).format(this.date)}},{key:"editing",get:function(){return!!this.editingTitle_||!!this.edigintDate_}}]),t}(y["b"]);w=g["a"]([y["a"]],w);var _=w,k=_,O=(n("adf1"),n("6544")),D=n.n(O),T=n("b0af"),C=n("99d9"),V=n("0e8f"),S=n("4bd4"),A=n("a722"),P=n("2677"),F=Object(i["a"])(k,m,j,!1,null,"240fb1d9",null),N=F.exports;D()(F,{VCard:T["a"],VCardText:C["a"],VFlex:V["a"],VForm:S["a"],VLayout:A["a"],VTextField:P["a"]});var E=function(e){function t(){return Object(p["a"])(this,t),Object(b["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(v["a"])(t,e),t}(y["b"]);E=g["a"]([Object(y["a"])({components:{Date2Age:N}})],E);var M=E,J=M,$=n("7496"),L=n("a523"),q=n("549c"),I=n("71d9"),B=Object(i["a"])(J,d,f,!1,null,null,null),Y=B.exports;D()(B,{VApp:$["a"],VContainer:L["a"],VContent:q["a"],VFlex:V["a"],VLayout:A["a"],VToolbar:I["a"]}),a["default"].use(s["a"]);var z=new s["a"]({mode:"history",base:"/age_checker/",routes:[{path:"/",name:"home",component:Y},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),G=n("2f62"),H=n("6fc5"),K=function e(){Object(p["a"])(this,e),this.title="",this.date=new Date},Q=function(e){function t(){var e;return Object(p["a"])(this,t),e=Object(b["a"])(this,Object(h["a"])(t).apply(this,arguments)),e.dates=new Array,e}return Object(v["a"])(t,e),Object(x["a"])(t,[{key:"addDate",value:function(e,t){this.dates.push(new K)}},{key:"add",value:function(){return 5}}]),t}(H["d"]);g["a"]([H["c"]],Q.prototype,"addDate",null),g["a"]([Object(H["a"])({commit:"addDate"})],Q.prototype,"add",null),Q=g["a"]([H["b"]],Q);var R=Q;a["default"].use(G["a"]);var U=new G["a"].Store({modules:{date:R}}),W=U,X=n("9483");Object(X["a"])("".concat("/age_checker/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Z=n("ce5b"),ee=n.n(Z);n("bf40");a["default"].config.productionTip=!1,a["default"].use(ee.a),new a["default"]({router:z,store:W,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.a27f8517.js.map
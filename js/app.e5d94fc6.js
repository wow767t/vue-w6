(function(e){function t(t){for(var a,r,l=t[0],i=t[1],u=t[2],d=0,s=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(s.length)s.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},c=[];function r(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"42ce1f66","chunk-2d0c11da":"f8ed44c7","chunk-2d0c4c61":"c87794a5","chunk-49e48748":"80f5d0b9","chunk-6a71fb1e":"d44524a8","chunk-82e582dc":"0efc3377","chunk-c1839d3a":"f361b817","chunk-ffc786aa":"33b82ac7"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=r(e);var u=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",u.name="ChunkLoadError",u.type=a,u.request=c,n[1](u)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-w6/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"544f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=n("7b17"),c=n("bc3a"),r=n.n(c),l=n("130e"),i=n("9062"),u=n.n(i),d=(n("e40d"),{id:"nav"}),f=Object(a["createTextVNode"])("Home"),s=Object(a["createTextVNode"])(" | "),b=Object(a["createTextVNode"])("Products List Page"),p=Object(a["createTextVNode"])(" | "),m=Object(a["createTextVNode"])("Cart List Page"),h=Object(a["createTextVNode"])(" | "),v=Object(a["createTextVNode"])("Admin"),j=Object(a["createTextVNode"])(" | "),g=Object(a["createTextVNode"])("About");function O(e,t,n,o,c,r){var l=Object(a["resolveComponent"])("router-link"),i=Object(a["resolveComponent"])("router-view"),u=Object(a["resolveComponent"])("LoginModal");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",d,[Object(a["createVNode"])(l,{to:"/"},{default:Object(a["withCtx"])((function(){return[f]})),_:1}),s,Object(a["createVNode"])(l,{to:"/products"},{default:Object(a["withCtx"])((function(){return[b]})),_:1}),p,Object(a["createVNode"])(l,{to:"/cart"},{default:Object(a["withCtx"])((function(){return[m]})),_:1}),h,Object(a["createVNode"])(l,{onClick:r.loginCheck,to:""},{default:Object(a["withCtx"])((function(){return[v]})),_:1},8,["onClick"]),j,Object(a["createVNode"])(l,{to:"/about"},{default:Object(a["withCtx"])((function(){return[g]})),_:1})]),Object(a["createVNode"])(i),Object(a["createVNode"])(u,{onEmitModal:r.getModal},null,8,["onEmitModal"])],64)}var w={class:"modal",tabindex:"-1",ref:"modal"},k={class:"modal-dialog modal-dialog-centered"},y={class:"modal-content"},V=Object(a["createElementVNode"])("div",{class:"modal-header"},[Object(a["createElementVNode"])("h5",{class:"modal-title"},"Admin"),Object(a["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),N={class:"modal-body"},x={class:"form-floating mb-4"},E=Object(a["createElementVNode"])("label",{for:"username"},"email",-1),C={class:"form-floating mb-4"},_=Object(a["createElementVNode"])("label",{for:"password"},"password",-1);function M(e,t,n,o,c,r){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",w,[Object(a["createElementVNode"])("div",k,[Object(a["createElementVNode"])("div",y,[V,Object(a["createElementVNode"])("div",N,[Object(a["createElementVNode"])("div",x,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.identity.username=e}),class:"form-control",type:"email",name:"",id:"username",placeholder:"email"},null,512),[[a["vModelText"],c.identity.username]]),E]),Object(a["createElementVNode"])("div",C,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"password",id:"password",placeholder:"password",class:"form-control mt-3",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.identity.password=e})},null,512),[[a["vModelText"],c.identity.password]]),_]),Object(a["createElementVNode"])("button",{onClick:t[2]||(t[2]=function(){return r.login&&r.login.apply(r,arguments)}),type:"button",class:"btn btn-secondary btn-lg w-100"},"登入")])])])],512)}var T=n("5530"),P=(n("99af"),n("7c2b")),S=n.n(P),A={name:"LoginModal",data:function(){return{modal:"",identity:{username:"",password:""}}},methods:{emitModal:function(){this.$emit("emit-modal",this.modal)},login:function(){var e=this;this.$http.post("https://vue3-course-api.hexschool.io/v2/admin/signin",Object(T["a"])({},this.identity)).then((function(t){var n=t.data,a=n.expire,o=n.token;document.cookie="myToken=".concat(o,"; expires=").concat(a," "),alert(t.data.message),e.$router.push("/admin"),e.modal.hide()})).catch((function(e){alert(e.response.data.message)}))}},mounted:function(){this.modal=new S.a(this.$refs.modal),this.emitModal()}},B=n("6b0d"),H=n.n(B);const L=H()(A,[["render",M]]);var $=L,W={components:{LoginModal:$},data:function(){return{modal:""}},methods:{loginCheck:function(){var e=this;this.$http.post("https://vue3-course-api.hexschool.io/v2/api/user/check").then((function(t){console.log(t),e.$router.push("/admin")})).catch((function(t){console.dir(t),alert(t.response.data.message),e.modal.show()}))},getModal:function(e){this.modal=e}},mounted:function(){}};n("6987");const q=H()(W,[["render",O]]);var D=q,J=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),U=n("cf05"),F=n.n(U),G={class:"home"},I=Object(a["createElementVNode"])("img",{alt:"Vue logo",src:F.a},null,-1);function Y(e,t,n,o,c,r){var l=Object(a["resolveComponent"])("HelloWorld");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",G,[I,Object(a["createVNode"])(l,{msg:"Welcome to Your Vue.js App"})])}var z={class:"hello"},K=Object(a["createStaticVNode"])('<h1 data-v-f2fbfaa8>Scottie Chang</h1><p data-v-f2fbfaa8></p><h3 data-v-f2fbfaa8>Projects</h3><ul data-v-f2fbfaa8><li data-v-f2fbfaa8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-f2fbfaa8>#</a></li><li data-v-f2fbfaa8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-f2fbfaa8>#</a></li><li data-v-f2fbfaa8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-f2fbfaa8>#</a></li></ul><h3 data-v-f2fbfaa8>e-mail</h3><ul data-v-f2fbfaa8><li data-v-f2fbfaa8><a href="mailto: wow767t@gmail.com" target="_blank" rel="noopener" data-v-f2fbfaa8>wow767t@gmail.com</a></li></ul><h3 data-v-f2fbfaa8>GitHub</h3><ul data-v-f2fbfaa8><li data-v-f2fbfaa8><a href="https://github.com/wow767t" target="_blank" rel="noopener" data-v-f2fbfaa8>https://github.com/wow767t</a></li></ul><h3 data-v-f2fbfaa8>My ArtStation</h3><ul data-v-f2fbfaa8><li data-v-f2fbfaa8><a href="https://www.artstation.com/oneg" target="_blank" rel="noopener" data-v-f2fbfaa8>https://www.artstation.com/oneg</a></li></ul>',10),Q=[K];function R(e,t,n,o,c,r){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",z,Q)}var X={name:"HelloWorld",props:{msg:String}};n("f6ea");const Z=H()(X,[["render",R],["__scopeId","data-v-f2fbfaa8"]]);var ee=Z,te={name:"Home",components:{HelloWorld:ee},data:function(){return{}}};const ne=H()(te,[["render",Y]]);var ae=ne,oe=[{path:"/",name:"Home",component:ae},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/products",component:function(){return n.e("chunk-c1839d3a").then(n.bind(null,"fd15"))}},{path:"/cart",component:function(){return n.e("chunk-ffc786aa").then(n.bind(null,"cc55"))}},{path:"/order",component:function(){return n.e("chunk-2d0c11da").then(n.bind(null,"4558"))}},{path:"/login",component:function(){return n.e("chunk-2d0c4c61").then(n.bind(null,"3bea"))}},{path:"/admin",component:function(){return n.e("chunk-6a71fb1e").then(n.bind(null,"89b3"))}},{path:"/admin-products",component:function(){return n.e("chunk-82e582dc").then(n.bind(null,"224c"))}},{path:"/admin-coupons",component:function(){return n.e("chunk-49e48748").then(n.bind(null,"46ee"))}}],ce=Object(J["a"])({history:Object(J["b"])(),routes:oe}),re=ce,le=Object(a["createApp"])(D);le.use(l["a"],r.a),le.use(re),le.use(o["default"]),le.use(u.a),le.mount("#app")},6987:function(e,t,n){"use strict";n("544f")},"90e9":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},f6ea:function(e,t,n){"use strict";n("90e9")}});
//# sourceMappingURL=app.e5d94fc6.js.map
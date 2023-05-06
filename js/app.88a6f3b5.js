(function(){"use strict";var n={350:function(n,e,t){var o=t(9242),i=t(3396);const r={id:"app"};function a(n,e,t,o,a,c){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(s)])}var c=t(2483);const s=(0,i._)("h1",null,"Home Page",-1);function d(n,e,t,o,r,a){const c=(0,i.up)("nav-menu");return(0,i.wg)(),(0,i.iD)("div",null,[s,(0,i.Wm)(c)])}var u=t(7139);const l=(0,i.uE)('<div class="x-color-box"></div><div class="y-color-box"></div><div class="z-color-box"></div><div class="x-axis-label">X Axis</div><div class="y-axis-label">Y Axis</div><div class="z-axis-label">Z Axis</div>',6),w=["onClick"],v=["onClick"],p=["onClick"],m=["onClick"],h=["onClick"];function f(n,e){const t=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[l,(0,i.Wm)(t,{to:"/",exact:"","exact-active-class":"active","active-class":"inactive"},{default:(0,i.w5)((({navigate:e})=>[(0,i._)("button",{class:(0,u.C_)(["nav-button",{active:"/"===n.$route.path}]),onClick:n=>e()},"Home",10,w)])),_:1}),(0,i.Wm)(t,{to:"/multicoloredsphere",exact:"","exact-active-class":"active","active-class":"inactive"},{default:(0,i.w5)((({navigate:e})=>[(0,i._)("button",{class:(0,u.C_)(["nav-button",{active:"/multicoloredsphere"===n.$route.path}]),onClick:n=>e()},"Multicolored Sphere",10,v)])),_:1}),(0,i.Wm)(t,{to:"/secondpage",exact:"","exact-active-class":"active","active-class":"inactive"},{default:(0,i.w5)((({navigate:e})=>[(0,i._)("button",{class:(0,u.C_)(["nav-button",{active:"/secondpage"===n.$route.path}]),onClick:n=>e()},"Second Page",10,p)])),_:1}),(0,i.Wm)(t,{to:"/about",exact:"","exact-active-class":"active","active-class":"inactive"},{default:(0,i.w5)((({navigate:e})=>[(0,i._)("button",{class:(0,u.C_)(["nav-button",{active:"/about"===n.$route.path}]),onClick:n=>e()},"About",10,m)])),_:1}),(0,i.Wm)(t,{to:"/temp",exact:"","exact-active-class":"active","active-class":"inactive"},{default:(0,i.w5)((({navigate:e})=>[(0,i._)("button",{class:(0,u.C_)(["nav-button",{active:"/temp"===n.$route.path}]),onClick:n=>e()},"Temp",10,h)])),_:1})],64)}var g=t(89);const b={},C=(0,g.Z)(b,[["render",f]]);var x=C,y=t(1114),W=t(4543),P={name:"HomePage",components:{NavMenu:x},mounted(){const n=new y.xsS,e=new y.cPb(75,window.innerWidth/window.innerHeight,.1,1e3),t=new y.CP7;t.setClearColor(4473924),t.setSize(window.innerWidth,window.innerHeight),this.$el.appendChild(t.domElement);const o=new W.z(e,t.domElement),i=new y.y8_(5);n.add(i),e.position.set(5,5,5);const r=function(){requestAnimationFrame(r),o.update(),t.render(n,e)};function a(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}r(),window.addEventListener("resize",a)}};const _=(0,g.Z)(P,[["render",d]]);var H=_;const M=(0,i._)("h1",null,"About Page",-1);function S(n,e,t,o,r,a){const c=(0,i.up)("nav-menu");return(0,i.wg)(),(0,i.iD)("div",null,[M,(0,i.Wm)(c)])}var k={components:{NavMenu:x}};const z=(0,g.Z)(k,[["render",S]]);var A=z;const E=(0,i._)("h1",null,"Create Multicolored Sphere in Threejs",-1);function j(n,e,t,o,r,a){const c=(0,i.up)("nav-menu");return(0,i.wg)(),(0,i.iD)("div",null,[E,(0,i.Wm)(c)])}var F={name:"FirstPage",components:{NavMenu:x},mounted(){const n=new y.xsS,e=new y.cPb(75,window.innerWidth/window.innerHeight,.1,1e3),t=new y.CP7;t.setClearColor(4473924),t.setSize(window.innerWidth,window.innerHeight),this.$el.appendChild(t.domElement);const o=new W.z(e,t.domElement),i=new y.y8_(5);var r;n.add(i),e.position.set(5,5,5);const a=function(){const e=2,t=32,o=32,i=new y.xo$(e,t,o);var a=[16711680,16753920,16776960,65280,255,4915330,15631086];const c=new Array(i.attributes.position.count).fill().map((()=>(new y.Ilk).setHex(a[Math.floor(Math.random()*a.length)]))),s=new y.a$l(c.flatMap((n=>n.toArray())),3);i.setAttribute("color",s);const d=new y.vBJ({vertexColors:!0});r=new y.Kj0(i,d),n.add(r)};a();const c=function(){requestAnimationFrame(c),o.update(),r.rotation.y+=.02,r.rotation.x+=.02,t.render(n,e)};function s(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}c(),window.addEventListener("resize",s)}};const O=(0,g.Z)(F,[["render",j]]);var $=O;const T=(0,i._)("div",{class:"note-text"},"Using mouse move and mouse click",-1),Z=(0,i._)("h1",null,"Create particle system in Threejs",-1);function D(n,e,t,o,r,a){const c=(0,i.up)("nav-menu");return(0,i.wg)(),(0,i.iD)("div",null,[T,Z,(0,i.Wm)(c)])}t(7658),t(3767),t(8585),t(8696);var L={name:"SecondPage",components:{NavMenu:x},mounted(){var n=new y.xsS,e=new y.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.set(5,1,5);var t=new y.CP7;t.setClearColor(4473924),t.setSize(window.innerWidth,window.innerHeight),this.$el.appendChild(t.domElement);const o=new W.z(e,t.domElement),i=new y.y8_(5);n.add(i);const r=10,a=10,c=new y.VLJ(r,a);n.add(c);const s=new y.u9r,d=[];for(let h=0;h<100;h++)d.push(y.M8C.randFloatSpread(20),y.M8C.randFloatSpread(20),y.M8C.randFloatSpread(20));const u=new y.a$l(d,3);s.setAttribute("position",u);const l=new y.UY4,w=new y.woe(s,l);n.add(w),document.addEventListener("mousemove",(function(n){var e=n.clientX,o=n.clientY;w.rotation.x+=.02,w.rotation.y+=.02,w.position.x=e/window.innerWidth*2-1,w.position.y=-o/window.innerHeight*2+1;var i=new y.Ilk(16777215);i.r=.5*w.position.x+.5,i.g=.5*w.position.y+.5,t.setClearColor(i)}));var v=!1;function p(){requestAnimationFrame(p),o.update(),t.render(n,e)}function m(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}document.addEventListener("click",(n=>{const t=new y.FM8;t.x=n.clientX/window.innerWidth*2-1,t.y=-n.clientY/window.innerHeight*2+1;const o=new y.iMs;o.setFromCamera(t,e);const i=new y.Pa4;w.getWorldPosition(i);const r=new y._fP;w.getWorldQuaternion(r);const a=new y.Pa4;w.getWorldScale(a);const c=new y.yGw;c.compose(i,r,a);var d=new y.yGw;d=c,d.invert();const u=new y.iMs;u.ray.copy(o.ray),u.ray.applyMatrix4(d);const l=u.intersectObject(w);if(l.length>0){const n=s.getAttribute("position");if(v){const e=new Float32Array(3*n.count);for(let t=0;t<3*n.count;t++)e[t]=y.M8C.randFloatSpread(20);n.array=e,n.needsUpdate=!0,v=!1}else{const e=new Float32Array(3*n.count);for(let t=0;t<3*n.count;t+=3)e[t]=n.getX(t/3),e[t+1]=0,e[t+2]=n.getZ(t/3);n.array=e,n.needsUpdate=!0,v=!0}}})),p(),window.addEventListener("resize",m)}};const N=(0,g.Z)(L,[["render",D]]);var Y=N;const q=(0,i._)("h1",null,"Create Temp Page in Threejs",-1);function U(n,e,t,o,r,a){const c=(0,i.up)("nav-menu");return(0,i.wg)(),(0,i.iD)("div",null,[q,(0,i.Wm)(c)])}var X={name:"TempPage",components:{NavMenu:x},mounted(){const n=new y.xsS,e=new y.cPb(75,window.innerWidth/window.innerHeight,.1,1e3),t=new y.CP7;t.setClearColor(4473924),t.setSize(window.innerWidth,window.innerHeight),this.$el.appendChild(t.domElement);const o=new W.z(e,t.domElement),i=new y.y8_(5);n.add(i),e.position.set(5,5,5);const r=function(){requestAnimationFrame(r),o.update(),t.render(n,e)};function a(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}r(),window.addEventListener("resize",a)}};const G=(0,g.Z)(X,[["render",U]]);var I=G;const J=[{path:"/",name:"Home",component:H},{path:"/temp",name:"Temp Page",component:I},{path:"/about",name:"About",component:A},{path:"/multicoloredsphere",name:"Multicolored Sphere",component:$},{path:"/secondpage",name:"Second Page",component:Y}],B=(0,c.p7)({history:(0,c.PO)(),routes:J});var K=B,Q={name:"App",components:{},router:K};const V=(0,g.Z)(Q,[["render",a]]);var R=V;const nn=(0,o.ri)(R);nn.use(K),nn.mount("#app")}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,function(){var n=[];t.O=function(e,o,i,r){if(!o){var a=1/0;for(u=0;u<n.length;u++){o=n[u][0],i=n[u][1],r=n[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&r||a>=r)&&Object.keys(t.O).every((function(n){return t.O[n](o[s])}))?o.splice(s--,1):(c=!1,r<a&&(a=r));if(c){n.splice(u--,1);var d=i();void 0!==d&&(e=d)}}return e}r=r||0;for(var u=n.length;u>0&&n[u-1][2]>r;u--)n[u]=n[u-1];n[u]=[o,i,r]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var i,r,a=o[0],c=o[1],s=o[2],d=0;if(a.some((function(e){return 0!==n[e]}))){for(i in c)t.o(c,i)&&(t.m[i]=c[i]);if(s)var u=s(t)}for(e&&e(o);d<a.length;d++)r=a[d],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(u)},o=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(350)}));o=t.O(o)})();
//# sourceMappingURL=app.88a6f3b5.js.map
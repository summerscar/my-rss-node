(this["webpackJsonpmy-rss-mobile"]=this["webpackJsonpmy-rss-mobile"]||[]).push([[0],{108:function(e,t,a){e.exports=a(197)},113:function(e,t,a){},163:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(113),a(114),a(96)),i=a.n(l),s=(a(159),a(97)),u=a.n(s),m=(a(83),a(17)),d=a.n(m),f=a(71),h=a(11),p=(a(163),a(61),a(23)),v=a.n(p),g=(a(63),a(34)),E=a.n(g),b=a(22),y=a(24),j=a(14),k=(a(168),a(99)),O=a.n(k),w=a(102),S=a.n(w).a.create();S.interceptors.request.use((function(e){return localStorage.getItem("useAuth:expires_at")&&(new Date).getTime()<localStorage.getItem("useAuth:expires_at")?(e.headers.Authorization="Bearer "+localStorage.getItem("accessToken"),e):(localStorage.removeItem("accessToken"),e)}),(function(e){return Promise.reject(e)})),S.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&O.a.info("\u9700\u8981\u767b\u5f55\u54e6"),Promise.reject(e)}));var N=S,x=a(35),C=a.n(x),A=a(66),_=a.n(A),I=a(103),W=(a(187),a(67)),T=a.n(W),z=a(39),H=a(68),P=r.a.createContext({}),D=T.a.Item;var R=Object(y.h)((function(e){var t=Object(n.useContext)(P),a=t.user,c=t.setData,o=Object(y.f)(),l=Object(n.useState)(),i=Object(h.a)(l,2),s=i[0],u=i[1],m=Object(y.g)().id,d=Object(n.useState)(o.state&&o.state.data),f=Object(h.a)(d,2),p=f[0],g=f[1],b=Object(n.useState)(!1),k=Object(h.a)(b,2),O=k[0],w=k[1],S=Object(n.useState)(!1),x=Object(h.a)(S,2),A=x[0],W=x[1],z=Object(n.useState)(!1),H=Object(h.a)(z,2),R=H[0],L=H[1],M=Object(n.useState)(),F=Object(h.a)(M,2),Y=F[0],V=F[1],q=Object(n.useState)(!1),B=Object(h.a)(q,2),U=B[0],J=B[1],G=Object(j.b)().userId,X=a&&(a["https://dev-ymyh-0n9:auth0:com/user_metadata"]&&a["https://dev-ymyh-0n9:auth0:com/user_metadata"].likes||a.user_metadata&&a.user_metadata.likes),$=Object(n.useRef)(0);Object(n.useEffect)((function(){$.current&&$.current!==m&&(u(""),g(null)),$.current=m,p||N.get("/api/auth/videoSearch/".concat(m)).then((function(e){g(e.data),console.log("setvodedata",p)})).catch((function(e){console.log(e)}))}),[p,m]);var K=Object(n.useRef)();Object(n.useEffect)((function(){if(K.current&&"true"===localStorage.getItem("sequencePlay")){var t=function(){var t=Object(I.a)(_.a.mark((function t(){var a,n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.post("/api/auth/videoPrev",{name:"ANNnewsCH",isodate:p.isodate});case 2:a=t.sent,n=a.data,e.history.push("/video/".concat(n.id));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=K.current;return a.addEventListener("ended",t),function(){return a.removeEventListener("ended",t)}}}),[p]);var Q=r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{key:"0"},"\u6062\u590d"),r.a.createElement(D,{key:"8"},"\u4e00\u822c\u5411\u3051"),r.a.createElement(D,{key:"1"},"\u5c0f\u5b661\u5e74\u751f"),r.a.createElement(D,{key:"2"},"\u5c0f\u5b662\u5e74\u751f"),r.a.createElement(D,{key:"3"},"\u5c0f\u5b663\u5e74\u751f"),r.a.createElement(D,{key:"4"},"\u5c0f\u5b664\u5e74\u751f"),r.a.createElement(D,{key:"5"},"\u5c0f\u5b665\u5e74\u751f"),r.a.createElement(D,{key:"6"},"\u5c0f\u5b666\u5e74\u751f"),r.a.createElement(D,{key:"7"},"\u5c0f\u5b667\u5e74\u751f"));return p?r.a.createElement("div",{className:"videoWrapper"},r.a.createElement("div",null,r.a.createElement("video",{ref:K,src:p.url,width:"100%",controls:!0,autoPlay:!0})),r.a.createElement("div",{className:"contentWrapper"},r.a.createElement("div",{style:{fontSize:"14px",fontWeight:"bold",padding:"0.5rem 0"}},p.title),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(v.a,{size:"small",onClick:function(){L(!0),N.post("/api/auth/like",{id:p.id,userId:G,title:p.title}).then((function(e){c("user",e.data),L(!1)})).catch((function(e){console.log(e),L(!1)}))},loading:R,inline:!0},X&&X.find((function(e){return e.id===p.id}))?"\u5df2\u6536\u85cf":"\u6536\u85cf"),r.a.createElement(v.a,{size:"small",style:{marginLeft:"0.4rem"},onClick:function(){w(!0),N.post("/api/auth/translate",{content:p.contentsnippet}).then((function(e){u(e.data.result),w(!1)})).catch((function(e){console.log(e),w(!1)}))},loading:O,inline:!0},"\u7ffb\u8bd1"),r.a.createElement(T.a,{overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:U,overlay:Q,align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:function(){return J(!U)},onSelect:function(e){var t;"0"!==(t=e.key)?(W(!0),N.post("/api/auth/furigana",{content:p.contentsnippet,grade:t}).then((function(e){V(e.data.WordList.Word.map((function(e,t){return r.a.createElement("ruby",{key:t},e.Surface._text,e.Furigana?r.a.createElement(r.a.Fragment,null,r.a.createElement("rp",null,"("),r.a.createElement("rt",null,e.Furigana._text),r.a.createElement("rp",null,")")):null)}))),W(!1)})).catch((function(e){console.log(e),W(!1)}))):V(null),J(!U)}},r.a.createElement(v.a,{size:"small",style:{marginLeft:"0.4rem"},loading:A,inline:!0},"\u632f\u308a\u4eee\u540d"))),r.a.createElement("div",{style:{fontSize:"12px",lineHeight:"30px"}},C()(p.pubdate).format("MM/DD HH:mm"))),r.a.createElement("div",{style:{paddingTop:"1rem",lineHeight:"1.5"}},Y||p.contentsnippet),r.a.createElement("div",{style:{paddingTop:"1rem"}},s)),r.a.createElement("div",{className:"footer",style:{textAlign:"center"}},"ANN News by ",r.a.createElement("a",{href:"https://github.com/summerscar/my-rss-node"},"summerscar"))):r.a.createElement("div",{className:"videoWrapper"},r.a.createElement("div",{className:"loading"},r.a.createElement(E.a,{size:"large"}),r.a.createElement("span",null,"\u7a0d\u7b49\u4e00\u4e0b\u54e6")))}));var L=function(e){var t=Object(j.b)(),a=t.isAuthenticated,c=t.login,o=(t.userId,e.videos),l=e.isloading,i=Object(n.useRef)([]);return r.a.createElement("div",{className:"homeWrapper"},o.length?o.map((function(e,t){return r.a.createElement("div",{key:t,className:"videoItem"},r.a.createElement("div",null,r.a.createElement("video",{ref:function(e){return i.current[t]=e},className:"videoRadius",src:e.url,width:"100%",controls:!0,preload:0===t?"auto":"none",poster:"/annnews.jpg"})),r.a.createElement(b.b,{className:"link",to:{pathname:"/video/"+e.id,state:{data:e}},onClick:function(){return e.id,e.title,void i.current.forEach((function(e){return e.pause()}))}},e.title,r.a.createElement("div",{style:{fontSize:"12px"}},C()(e.pubdate).format("YYYY/MM/DD HH:mm"))))})):l?r.a.createElement("div",{className:"loading"},r.a.createElement(E.a,{size:"large"}),r.a.createElement("span",null,"\u7a0d\u7b49\u4e00\u4e0b\u54e6")):null,o.length>0&&r.a.createElement(v.a,{size:"small",onClick:a()?e.more:c,loading:l},"\u66f4\u591a"),r.a.createElement(y.a,{path:"/video/:id"},r.a.createElement(R,null)))},M=d.a.Item;var F=Object(y.h)((function(e){var t=Object(n.useContext)(P).user,a=t&&(t["https://dev-ymyh-0n9:auth0:com/user_metadata"]&&t["https://dev-ymyh-0n9:auth0:com/user_metadata"].likes||t.user_metadata&&t.user_metadata.likes);return r.a.createElement("div",{className:"likes"},r.a.createElement("div",{style:{textAlign:"center",fontSize:"20px",padding:"1rem"}},"\u6536\u85cf\u5939"),r.a.createElement(d.a,{style:{margin:"0 1rem"}},a&&a.map((function(t,a){return r.a.createElement(M,{key:a,onClick:function(){return e.history.push("/video/"+t.id)}},C()(t.time).format("MM/DD HH:mm")+" "+t.title)}))))})),Y=(a(194),a(107)),V=a.n(Y),q=(a(62),a(45)),B=a.n(q),U=function(){var e=Object(j.b)(),t=e.isAuthenticated,a=e.login,c=e.authResult,o=e.user,l=Object(n.useContext)(P).setData;return console.log("user: ",c),Object(n.useEffect)((function(){l("user",o)}),[o]),t()?r.a.createElement("div",null,c&&(c.idTokenPayload.picture?r.a.createElement("img",{style:{marginRight:"0.5rem"},width:"20px",src:c.idTokenPayload.picture,alt:c.idTokenPayload.name}):r.a.createElement("span",{style:{paddingRight:"0.5rem"}},c.idTokenPayload.name)),r.a.createElement(E.a,{animating:!c})):r.a.createElement(v.a,{onClick:a,size:"small"},"\u767b\u5f55")},J=Object(y.h)((function(e){var t=Object(y.f)();return r.a.createElement(V.a,{mode:"dark",icon:"/"===t.pathname?r.a.createElement(B.a,{key:"1",type:"ellipsis"}):r.a.createElement((function(){return r.a.createElement("svg",{t:"1583392599756",className:"am-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2188",width:"32",height:"32"},r.a.createElement("path",{d:"M513.51198025 140.75069629l372.29605926 340.31186173c-18.95790618 2.32612345-36.75275062 10.11863704-50.9421037 22.56339754l-0.23261236 0.23261234-0.23261234 0.23261235c-13.7241284 12.21214816-30.00699261 33.72879011-30.00699258 67.57388642v316.934321H668.08288395V753.91683951c0-50.59318519-41.87022222-91.6492642-93.3938568-91.6492642H451.86970864c-51.52363457 0-93.39385678 41.17238519-93.39385679 91.6492642v134.56624197H223.79330373v-317.51585185c0-46.52246913-35.47338271-85.13611852-81.29801485-90.95142717l371.01669137-339.26510617m0-75.3664c-13.02629136 0-26.05258271 4.41963457-35.35707655 13.14259753L49.79926913 470.12977778c-15.35241481 13.14259754-19.77204938 32.91464691-11.51431111 50.9421037 8.25773827 17.5622321 25.81997038 27.91348148 46.05724444 27.91348148h46.05724444c13.14259754 0 23.61015309 9.88602469 23.6101531 21.86556049V912.09323457c0 25.23843951 22.44709136 46.05724444 49.89534815 46.05724444h174.45925924c27.44825678 0 49.89534815-20.81880494 49.89534816-46.05724444V753.91683951c0-12.09584198 10.46755556-21.86556049 23.61015309-21.8655605h122.81931851c13.14259754 0 23.61015309 9.88602469 23.6101531 21.8655605v158.29270123c0 25.23843951 22.44709136 46.05724444 50.47687901 46.05724445h174.45925926c28.02978766 0 51.05840989-20.81880494 51.05840988-46.05724445v-340.77708641c0-6.51314566 1.62828642-10.93278025 6.62945185-15.35241482 4.41963457-3.83810371 10.46755556-6.047921 16.98070124-6.047921H941.16977777c20.35358025 0 37.79950618-10.93278025 46.05724446-27.91348147 9.30449382-18.02745678 4.88485926-38.38103704-9.30449384-51.52363458L548.98536296 78.52689382c-9.30449382-8.72296296-22.44709136-13.14259754-35.47338271-13.14259753z",fill:"#ffffff","p-id":"2189"}))}),null),onLeftClick:"/"===t.pathname?e.openDock:function(){return e.history.push("/")},rightContent:[r.a.createElement(U,{key:"0"})]},"ANN NEWS")})),G=function(){var e=Object(j.b)().handleAuthentication;return Object(n.useEffect)((function(){e()}),[e]),r.a.createElement("h1",null,"This is the auth callback page, you should be redirected immediately.")};var X=Object(y.h)((function(e){var t=Object(n.useState)([]),a=Object(h.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(0),s=Object(h.a)(l,2),m=s[0],p=s[1],v=Object(n.useState)(!1),g=Object(h.a)(v,2),E=g[0],b=g[1],k=Object(j.b)(),O=k.authResult,w=k.isAuthenticated,S=k.logout,x=k.login,C=Object(n.useState)(!1),A=Object(h.a)(C,2),_=A[0],I=A[1],W=Object(n.useState)("true"===localStorage.getItem("sequencePlay")),T=Object(h.a)(W,2),z=T[0],H=T[1];Object(n.useEffect)((function(){w()?(b(!0),N.get("/api/auth/youtube/ANNnewsCH?offset=".concat(m)).then((function(e){console.log(e.data),o((function(t){return[].concat(Object(f.a)(t),Object(f.a)(e.data.items))})),b(!1)}))):O||(b(!0),N.get("/api/youtube/ANNnewsCH").then((function(e){console.log(e.data),o(e.data.items),b(!1)})))}),[m]),Object(n.useEffect)((function(){O&&localStorage.setItem("accessToken",O.accessToken)}),[O]);var P=r.a.createElement(d.a,null,!w()&&r.a.createElement(d.a.Item,{onClick:x},"\u767b\u5f55"),r.a.createElement(d.a.Item,{onClick:function(){e.history.push("/likes"),I(!1)}},"\u6536\u85cf\u5939"),r.a.createElement(d.a.Item,{extra:r.a.createElement(u.a,{color:"#108ee9",checked:z,onChange:function(){H(!z),localStorage.setItem("sequencePlay",!z)}})},"\u8fde\u7eed\u64ad\u653e"),w()&&r.a.createElement(d.a.Item,{onClick:function(){localStorage.removeItem("accessToken"),S()}},"\u6ce8\u9500"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layout"},r.a.createElement(J,{openDock:function(){return I((function(e){return!e}))}}),r.a.createElement(i.a,{children:r.a.createElement(r.a.Fragment,null),className:"my-drawer",style:{pointerEvents:_?"auto":"none"},contentStyle:{color:"#A6A6A6",textAlign:"center",paddingTop:42},sidebar:P,open:_,onOpenChange:function(){return I((function(e){return!e}))}}),r.a.createElement("div",{className:"indexWrapper"},r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/likes"},r.a.createElement(F,null)),r.a.createElement(y.a,{path:"/"},r.a.createElement(L,{videos:c,more:function(){return p((function(e){return e+4}))},isloading:E})))),r.a.createElement("div",{className:"footer",style:{textAlign:"center"}},"ANN News by ",r.a.createElement("a",{href:"https://github.com/summerscar/my-rss-node"},"summerscar"))),r.a.createElement(y.a,{path:"/auth0_callback",component:G}))})),$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Q=Object(y.h)((function(e){return r.a.createElement(j.a,{navigate:e.history.push,auth0_domain:"dev-ymyh-0n9.auth0.com",auth0_client_id:"U9Ypez6umr0NvVSRxPfcTwEgj8WGIz6p",auth0_language:"zh",auth0_params:{scope:"openid profile email read:current_user update:current_user_metadata create:current_user_metadata"}},r.a.createElement(X,null))}));o.a.render(r.a.createElement(b.a,null,r.a.createElement((function(e){var t=e.children,a={root:{text:"hello context"},setData:function(e,t){i((function(a){return Object(H.a)({},a,Object(z.a)({},e,t))}))},addStore:function(e,t){i((function(a){return Object(H.a)({},a,Object(z.a)({},e,t))}))}},c=Object(n.useState)(a),o=Object(h.a)(c,2),l=o[0],i=o[1];return r.a.createElement(P.Provider,{value:l},t)}),null,r.a.createElement(Q,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(t,e)}))}}()}},[[108,1,2]]]);
//# sourceMappingURL=main.17d49f87.chunk.js.map
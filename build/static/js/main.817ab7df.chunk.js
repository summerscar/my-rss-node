(this["webpackJsonpmy-rss-mobile"]=this["webpackJsonpmy-rss-mobile"]||[]).push([[0],{105:function(e,t,a){e.exports=a(191)},110:function(e,t,a){},158:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(110),a(111),a(95)),i=a.n(l),s=(a(82),a(23)),u=a.n(s),m=a(70),d=a(11),f=(a(158),a(61),a(21)),h=a.n(f),p=(a(63),a(34)),g=a.n(p),E=a(20),v=a(22),b=a(14),y=(a(163),a(97)),j=a.n(y),k=a(100),O=a.n(k).a.create();O.interceptors.request.use((function(e){return localStorage.getItem("useAuth:expires_at")&&(new Date).getTime()<localStorage.getItem("useAuth:expires_at")?(e.headers.Authorization="Bearer "+localStorage.getItem("accessToken"),e):(localStorage.removeItem("accessToken"),e)}),(function(e){return Promise.reject(e)})),O.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&j.a.info("\u9700\u8981\u767b\u5f55\u54e6"),Promise.reject(e)}));var w=O,S=a(35),N=a.n(S),x=(a(181),a(66)),C=a.n(x),_=a(40),A=a(67),W=r.a.createContext({}),I=C.a.Item;var T=function(e){var t=Object(n.useContext)(W),a=t.user,c=t.setData,o=Object(v.f)(),l=Object(n.useState)(),i=Object(d.a)(l,2),s=i[0],u=i[1],m=Object(v.g)().id,f=Object(n.useState)(o.state&&o.state.data),p=Object(d.a)(f,2),E=p[0],y=p[1],j=Object(n.useState)(!1),k=Object(d.a)(j,2),O=k[0],S=k[1],x=Object(n.useState)(!1),_=Object(d.a)(x,2),A=_[0],T=_[1],z=Object(n.useState)(!1),D=Object(d.a)(z,2),P=D[0],H=D[1],R=Object(n.useState)(),F=Object(d.a)(R,2),L=F[0],M=F[1],Y=Object(n.useState)(!1),B=Object(d.a)(Y,2),U=B[0],J=B[1],V=Object(b.b)().userId,q=a&&(a["https://dev-ymyh-0n9:auth0:com/user_metadata"]&&a["https://dev-ymyh-0n9:auth0:com/user_metadata"].likes||a.user_metadata&&a.user_metadata.likes);Object(n.useEffect)((function(){E||w.get("/api/auth/videoSearch/".concat(m)).then((function(e){y(e.data)})).catch((function(e){console.log(e)}))}),[]);var G=r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{key:"0"},"\u6062\u590d"),r.a.createElement(I,{key:"8"},"\u4e00\u822c\u5411\u3051"),r.a.createElement(I,{key:"1"},"\u5c0f\u5b661\u5e74\u751f"),r.a.createElement(I,{key:"2"},"\u5c0f\u5b662\u5e74\u751f"),r.a.createElement(I,{key:"3"},"\u5c0f\u5b663\u5e74\u751f"),r.a.createElement(I,{key:"4"},"\u5c0f\u5b664\u5e74\u751f"),r.a.createElement(I,{key:"5"},"\u5c0f\u5b665\u5e74\u751f"),r.a.createElement(I,{key:"6"},"\u5c0f\u5b666\u5e74\u751f"),r.a.createElement(I,{key:"7"},"\u5c0f\u5b667\u5e74\u751f"));return E?r.a.createElement("div",{className:"videoWrapper"},r.a.createElement("div",null,r.a.createElement("video",{src:E.url,width:"100%",controls:!0,autoPlay:!0})),r.a.createElement("div",{className:"contentWrapper"},r.a.createElement("div",{style:{fontSize:"14px",fontWeight:"bold"}},E.title),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(h.a,{size:"small",onClick:function(){H(!0),w.post("/api/auth/like",{id:E.id,userId:V,title:E.title}).then((function(e){c("user",e.data),H(!1)})).catch((function(e){console.log(e),H(!1)}))},loading:P,inline:!0},q&&q.find((function(e){return e.id===E.id}))?"\u5df2\u6536\u85cf":"\u6536\u85cf"),r.a.createElement(h.a,{size:"small",style:{marginLeft:"0.4rem"},onClick:function(){S(!0),w.post("/api/auth/translate",{content:E.contentsnippet}).then((function(e){u(e.data.result),S(!1)})).catch((function(e){console.log(e),S(!1)}))},loading:O,inline:!0},"\u7ffb\u8bd1"),r.a.createElement(C.a,{overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:U,overlay:G,align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:function(){return J(!U)},onSelect:function(e){var t;"0"!==(t=e.key)?(T(!0),w.post("/api/auth/furigana",{content:E.contentsnippet,grade:t}).then((function(e){M(e.data.WordList.Word.map((function(e,t){return r.a.createElement("ruby",{key:t},e.Surface._text,e.Furigana?r.a.createElement(r.a.Fragment,null,r.a.createElement("rp",null,"("),r.a.createElement("rt",null,e.Furigana._text),r.a.createElement("rp",null,")")):null)}))),T(!1)})).catch((function(e){console.log(e),T(!1)}))):M(null),J(!U)}},r.a.createElement(h.a,{size:"small",style:{marginLeft:"0.4rem"},loading:A,inline:!0},"\u632f\u308a\u4eee\u540d"))),r.a.createElement("div",{style:{fontSize:"12px",lineHeight:"30px"}},N()(E.pubdate).format("MM/DD HH:mm"))),r.a.createElement("div",{style:{paddingTop:"1rem"}},L||E.contentsnippet),r.a.createElement("div",{style:{paddingTop:"1rem"}},s))):r.a.createElement("div",{className:"videoWrapper"},r.a.createElement("div",{className:"loading"},r.a.createElement(g.a,{size:"large"}),r.a.createElement("span",null,"\u7a0d\u7b49\u4e00\u4e0b\u54e6")))};var z=function(e){var t=Object(b.b)(),a=t.isAuthenticated,n=t.login,c=(t.userId,e.videos),o=e.isloading;return r.a.createElement("div",{className:"homeWrapper"},c.length?c.map((function(e,t){return r.a.createElement("div",{key:t,className:"videoItem"},r.a.createElement("div",null,r.a.createElement("video",{className:"videoRadius",src:e.url,width:"100%",controls:!0,preload:0===t?"auto":"none",poster:"/annnews.jpg"})),r.a.createElement(E.b,{className:"link",to:{pathname:"/video/"+e.id,state:{data:e}}},e.title,r.a.createElement("div",{style:{fontSize:"12px"}},N()(e.pubdate).format("YYYY/MM/DD HH:mm"))))})):o?r.a.createElement("div",{className:"loading"},r.a.createElement(g.a,{size:"large"}),r.a.createElement("span",null,"\u7a0d\u7b49\u4e00\u4e0b\u54e6")):null,c.length>0&&r.a.createElement(h.a,{size:"small",onClick:a()?e.more:n,loading:o},"\u66f4\u591a"),r.a.createElement(v.a,{path:"/video/:id"},r.a.createElement(T,null)))},D=u.a.Item;var P=Object(v.h)((function(e){var t=Object(n.useContext)(W).user,a=t&&(t["https://dev-ymyh-0n9:auth0:com/user_metadata"]&&t["https://dev-ymyh-0n9:auth0:com/user_metadata"].likes||t.user_metadata&&t.user_metadata.likes);return r.a.createElement("div",{className:"likes"},r.a.createElement("div",{style:{textAlign:"center",fontSize:"20px",padding:"1rem"}},"\u6536\u85cf\u5939"),r.a.createElement(u.a,{style:{margin:"0 1rem"}},a&&a.map((function(t,a){return r.a.createElement(D,{key:a,onClick:function(){return e.history.push("/video/"+t.id)}},N()(t.time).format("MM/DD HH:mm")+" "+t.title)}))))})),H=(a(188),a(104)),R=a.n(H),F=(a(62),a(39)),L=a.n(F),M=function(){var e=Object(b.b)(),t=e.isAuthenticated,a=e.login,c=e.authResult,o=e.user,l=Object(n.useContext)(W).setData;return console.log("user: ",c),Object(n.useEffect)((function(){l("user",o)}),[o]),t()?r.a.createElement("div",null,c&&(c.idTokenPayload.picture?r.a.createElement("img",{style:{marginRight:"0.5rem"},width:"20px",src:c.idTokenPayload.picture,alt:c.idTokenPayload.name}):r.a.createElement("span",{style:{paddingRight:"0.5rem"}},c.idTokenPayload.name)),r.a.createElement(g.a,{animating:!c})):r.a.createElement(h.a,{onClick:a,size:"small"},"\u767b\u5f55")},Y=Object(v.h)((function(e){var t=Object(v.f)();return r.a.createElement(R.a,{mode:"dark",icon:"/"===t.pathname?r.a.createElement(L.a,{key:"1",type:"ellipsis"}):r.a.createElement(L.a,{type:"left"}),onLeftClick:"/"===t.pathname?e.openDock:function(){return e.history.goBack()},rightContent:[r.a.createElement(M,{key:"0"})]},"ANN NEWS")})),B=function(){var e=Object(b.b)().handleAuthentication;return Object(n.useEffect)((function(){e()}),[e]),r.a.createElement("h1",null,"This is the auth callback page, you should be redirected immediately.")};var U=Object(v.h)((function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(0),s=Object(d.a)(l,2),f=s[0],h=s[1],p=Object(n.useState)(!1),g=Object(d.a)(p,2),E=g[0],y=g[1],j=Object(b.b)(),k=j.authResult,O=j.isAuthenticated,S=j.logout,N=j.login,x=Object(n.useState)(!1),C=Object(d.a)(x,2),_=C[0],A=C[1];Object(n.useEffect)((function(){O()?(y(!0),w.get("/api/auth/youtube/ANNnewsCH?offset=".concat(f)).then((function(e){console.log(e.data),o((function(t){return[].concat(Object(m.a)(t),Object(m.a)(e.data.items))})),y(!1)}))):k||(y(!0),w.get("/api/youtube/ANNnewsCH").then((function(e){console.log(e.data),o(e.data.items),y(!1)})))}),[f]),Object(n.useEffect)((function(){k&&localStorage.setItem("accessToken",k.accessToken)}),[k]);var W=r.a.createElement(u.a,null,!O()&&r.a.createElement(u.a.Item,{onClick:N},"\u767b\u5f55"),r.a.createElement(u.a.Item,{onClick:function(){e.history.push("/likes"),A(!1)}},"\u6536\u85cf\u5939"),O()&&r.a.createElement(u.a.Item,{onClick:function(){localStorage.removeItem("accessToken"),S()}},"\u6ce8\u9500"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layout"},r.a.createElement(Y,{openDock:function(){return A((function(e){return!e}))}}),r.a.createElement(i.a,{children:r.a.createElement(r.a.Fragment,null),className:"my-drawer",style:{pointerEvents:_?"auto":"none"},contentStyle:{color:"#A6A6A6",textAlign:"center",paddingTop:42},sidebar:W,open:_,onOpenChange:function(){return A((function(e){return!e}))}}),r.a.createElement("div",{className:"indexWrapper"},r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/likes"},r.a.createElement(P,null)),r.a.createElement(v.a,{path:"/"},r.a.createElement(z,{videos:c,more:function(){return h((function(e){return e+4}))},isloading:E})))),r.a.createElement("div",{className:"footer",style:{textAlign:"center"}},"ANN News by ",r.a.createElement("a",{href:"https://github.com/summerscar/my-rss-node"},"summerscar"))),r.a.createElement(v.a,{path:"/auth0_callback",component:B}))})),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var q=Object(v.h)((function(e){return r.a.createElement(b.a,{navigate:e.history.push,auth0_domain:"dev-ymyh-0n9.auth0.com",auth0_client_id:"U9Ypez6umr0NvVSRxPfcTwEgj8WGIz6p",auth0_language:"zh",auth0_params:{scope:"openid profile email read:current_user update:current_user_metadata create:current_user_metadata"}},r.a.createElement(U,null))}));o.a.render(r.a.createElement(E.a,null,r.a.createElement((function(e){var t=e.children,a={root:{text:"hello context"},setData:function(e,t){i((function(a){return Object(A.a)({},a,Object(_.a)({},e,t))}))},addStore:function(e,t){i((function(a){return Object(A.a)({},a,Object(_.a)({},e,t))}))}},c=Object(n.useState)(a),o=Object(d.a)(c,2),l=o[0],i=o[1];return r.a.createElement(W.Provider,{value:l},t)}),null,r.a.createElement(q,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(t,e)}))}}()}},[[105,1,2]]]);
//# sourceMappingURL=main.817ab7df.chunk.js.map
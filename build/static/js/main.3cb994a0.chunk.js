(this["webpackJsonpmy-rss-mobile"]=this["webpackJsonpmy-rss-mobile"]||[]).push([[0],{105:function(e,t,a){e.exports=a(191)},110:function(e,t,a){},158:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(110),a(111),a(95)),i=a.n(l),s=(a(82),a(23)),u=a.n(s),m=a(70),d=a(11),f=(a(158),a(61),a(21)),h=a.n(f),p=(a(63),a(34)),g=a.n(p),E=a(20),v=a(14),b=(a(163),a(97)),y=a.n(b),j=a(100),k=a.n(j).a.create();k.interceptors.request.use((function(e){return localStorage.getItem("useAuth:expires_at")&&(new Date).getTime()<localStorage.getItem("useAuth:expires_at")?(e.headers.Authorization="Bearer "+localStorage.getItem("accessToken"),e):(localStorage.removeItem("accessToken"),e)}),(function(e){return Promise.reject(e)})),k.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&y.a.info("\u9700\u8981\u767b\u5f55\u54e6"),Promise.reject(e)}));var O=k,w=a(35),S=a.n(w);var N=function(e){var t=Object(v.b)(),a=t.isAuthenticated,n=t.login,c=(t.userId,e.videos),o=e.isloading;return r.a.createElement("div",{className:"homeWrapper"},c.length?c.map((function(e,t){return r.a.createElement("div",{key:t,className:"videoItem"},r.a.createElement("div",null,r.a.createElement("video",{className:"videoRadius",src:e.url,width:"100%",controls:!0,preload:0===t?"auto":"none",poster:"/annnews.jpg"})),r.a.createElement(E.b,{className:"link",to:{pathname:"/video/"+e.id,state:{data:e}}},e.title,r.a.createElement("div",{style:{fontSize:"12px"}},S()(e.pubdate).format("YYYY/MM/DD HH:mm"))))})):o?r.a.createElement("div",{className:"loading"},r.a.createElement(g.a,{size:"large"}),r.a.createElement("span",null,"\u7a0d\u7b49\u4e00\u4e0b\u54e6")):null,c.length>0&&r.a.createElement(h.a,{size:"small",onClick:a()?e.more:n,loading:o},"\u66f4\u591a"))},x=(a(183),a(68)),C=a.n(x),_=a(22),A=a(40),I=a(69),T=r.a.createContext({}),W=C.a.Item;var z=function(e){var t=Object(n.useContext)(T),a=t.user,c=t.setData,o=Object(_.f)(),l=Object(n.useState)(),i=Object(d.a)(l,2),s=i[0],u=i[1],m=Object(_.g)().id,f=Object(n.useState)(o.state&&o.state.videoData),p=Object(d.a)(f,2),E=p[0],b=p[1],y=Object(n.useState)(!1),j=Object(d.a)(y,2),k=j[0],w=j[1],N=Object(n.useState)(!1),x=Object(d.a)(N,2),A=x[0],I=x[1],z=Object(n.useState)(!1),D=Object(d.a)(z,2),P=D[0],Y=D[1],H=Object(n.useState)(),R=Object(d.a)(H,2),F=R[0],L=R[1],M=Object(n.useState)(!1),B=Object(d.a)(M,2),U=B[0],J=B[1],V=Object(v.b)().userId,q=a&&(a["https://dev-ymyh-0n9:auth0:com/user_metadata"]&&a["https://dev-ymyh-0n9:auth0:com/user_metadata"].likes||a.user_metadata&&a.user_metadata.likes);Object(n.useEffect)((function(){E||O.get("/api/auth/videoSearch/".concat(m)).then((function(e){b(e.data)})).catch((function(e){console.log(e)}))}),[]);var G=r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{key:"0"},"\u6062\u590d"),r.a.createElement(W,{key:"8"},"\u4e00\u822c\u5411\u3051"),r.a.createElement(W,{key:"1"},"\u5c0f\u5b661\u5e74\u751f"),r.a.createElement(W,{key:"2"},"\u5c0f\u5b662\u5e74\u751f"),r.a.createElement(W,{key:"3"},"\u5c0f\u5b663\u5e74\u751f"),r.a.createElement(W,{key:"4"},"\u5c0f\u5b664\u5e74\u751f"),r.a.createElement(W,{key:"5"},"\u5c0f\u5b665\u5e74\u751f"),r.a.createElement(W,{key:"6"},"\u5c0f\u5b666\u5e74\u751f"),r.a.createElement(W,{key:"7"},"\u5c0f\u5b667\u5e74\u751f"));return E?r.a.createElement("div",{className:"videoWrapper"},r.a.createElement("div",null,r.a.createElement("video",{src:E.url,width:"100%",controls:!0,autoPlay:!0})),r.a.createElement("div",{className:"contentWrapper"},r.a.createElement("div",{style:{fontSize:"14px",fontWeight:"bold"}},E.title),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(h.a,{size:"small",onClick:function(){Y(!0),O.post("/api/auth/like",{id:E.id,userId:V,title:E.title}).then((function(e){c("user",e.data),Y(!1)})).catch((function(e){console.log(e),Y(!1)}))},loading:P,inline:!0},q&&q.find((function(e){return e.id===E.id}))?"\u5df2\u6536\u85cf":"\u6536\u85cf"),r.a.createElement(h.a,{size:"small",style:{marginLeft:"0.5rem"},onClick:function(){w(!0),O.post("/api/auth/translate",{content:E.contentsnippet}).then((function(e){u(e.data.result),w(!1)})).catch((function(e){console.log(e),w(!1)}))},loading:k,inline:!0},"\u7ffb\u8bd1"),r.a.createElement(C.a,{overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:U,overlay:G,align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:function(){return J(!U)},onSelect:function(e){var t;"0"!==(t=e.key)?(I(!0),O.post("/api/auth/furigana",{content:E.contentsnippet,grade:t}).then((function(e){L(e.data.WordList.Word.map((function(e,t){return r.a.createElement("ruby",{key:t},e.Surface._text,e.Furigana?r.a.createElement(r.a.Fragment,null,r.a.createElement("rp",null,"("),r.a.createElement("rt",null,e.Furigana._text),r.a.createElement("rp",null,")")):null)}))),I(!1)})).catch((function(e){console.log(e),I(!1)}))):L(null),J(!U)}},r.a.createElement(h.a,{size:"small",style:{marginLeft:"0.5rem"},loading:A,inline:!0},"\u632f\u308a\u4eee\u540d"))),r.a.createElement("div",{style:{fontSize:"12px",lineHeight:"30px"}},S()(E.pubdate).format("YYYY/MM/DD HH:mm"))),r.a.createElement("div",{style:{paddingTop:"1rem"}},F||E.contentsnippet),r.a.createElement("div",{style:{paddingTop:"1rem"}},s))):r.a.createElement("div",{className:"loading"},r.a.createElement(g.a,{size:"large"}),r.a.createElement("span",null,"\u7a0d\u7b49\u4e00\u4e0b\u54e6"))},D=u.a.Item;var P=Object(_.h)((function(e){var t=Object(n.useContext)(T).user,a=t&&(t["https://dev-ymyh-0n9:auth0:com/user_metadata"]&&t["https://dev-ymyh-0n9:auth0:com/user_metadata"].likes||t.user_metadata&&t.user_metadata.likes);return r.a.createElement("div",{className:"likes"},r.a.createElement("div",{style:{textAlign:"center",fontSize:"20px",padding:"1rem"}},"\u6536\u85cf\u5939"),r.a.createElement(u.a,{style:{margin:"0 1rem"}},a&&a.map((function(t,a){return r.a.createElement(D,{key:a,onClick:function(){return e.history.push("/video/"+t.id)}},S()(t.time).format("MM/DD HH:mm")+" "+t.title)}))))})),Y=(a(188),a(104)),H=a.n(Y),R=(a(62),a(39)),F=a.n(R),L=function(){var e=Object(v.b)(),t=e.isAuthenticated,a=e.login,c=e.authResult,o=e.user,l=Object(n.useContext)(T).setData;return console.log("user: ",c),Object(n.useEffect)((function(){l("user",o)}),[o]),t()?r.a.createElement("div",null,c&&(c.idTokenPayload.picture?r.a.createElement("img",{style:{marginRight:"0.5rem"},width:"20px",src:c.idTokenPayload.picture,alt:c.idTokenPayload.name}):r.a.createElement("span",{style:{paddingRight:"0.5rem"}},c.idTokenPayload.name)),r.a.createElement(g.a,{animating:!c})):r.a.createElement(h.a,{onClick:a,size:"small"},"\u767b\u5f55")},M=Object(_.h)((function(e){var t=Object(_.f)();return r.a.useEffect((function(){console.log(t)}),[t]),r.a.createElement(H.a,{mode:"dark",icon:"/"===t.pathname?r.a.createElement(F.a,{key:"1",type:"ellipsis"}):r.a.createElement(F.a,{type:"left"}),onLeftClick:"/"===t.pathname?e.openDock:function(){return e.history.goBack()},rightContent:[r.a.createElement(L,{key:"0"})]},"ANN NEWS")})),B=function(){var e=Object(v.b)().handleAuthentication;return Object(n.useEffect)((function(){e()}),[e]),r.a.createElement("h1",null,"This is the auth callback page, you should be redirected immediately.")};var U=Object(_.h)((function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(0),s=Object(d.a)(l,2),f=s[0],h=s[1],p=Object(n.useState)(!1),g=Object(d.a)(p,2),E=g[0],b=g[1],y=Object(v.b)(),j=y.authResult,k=y.isAuthenticated,w=y.logout,S=y.login,x=Object(n.useState)(!1),C=Object(d.a)(x,2),A=C[0],I=C[1];Object(n.useEffect)((function(){k()?(b(!0),O.get("/api/auth/youtube/ANNnewsCH?offset=".concat(f)).then((function(e){console.log(e.data),o((function(t){return[].concat(Object(m.a)(t),Object(m.a)(e.data.items))})),b(!1)}))):j||(b(!0),O.get("/api/youtube/ANNnewsCH").then((function(e){console.log(e.data),o(e.data.items),b(!1)})))}),[f]),Object(n.useEffect)((function(){j&&localStorage.setItem("accessToken",j.accessToken)}),[j]);var T=r.a.createElement(u.a,null,!k()&&r.a.createElement(u.a.Item,{onClick:S},"\u767b\u5f55"),r.a.createElement(u.a.Item,{onClick:function(){e.history.push("/likes"),I(!1)}},"\u6536\u85cf\u5939"),k()&&r.a.createElement(u.a.Item,{onClick:function(){localStorage.removeItem("accessToken"),w()}},"\u6ce8\u9500"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layout"},r.a.createElement(M,{openDock:function(){return I((function(e){return!e}))}}),r.a.createElement(i.a,{children:r.a.createElement(r.a.Fragment,null),className:"my-drawer",style:{pointerEvents:A?"auto":"none"},contentStyle:{color:"#A6A6A6",textAlign:"center",paddingTop:42},sidebar:T,open:A,onOpenChange:function(){return I((function(e){return!e}))}}),r.a.createElement("div",{className:"indexWrapper"},r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/"},r.a.createElement(N,{videos:c,more:function(){return h((function(e){return e+4}))},isloading:E})),r.a.createElement(_.a,{path:"/video/:id"},r.a.createElement(z,null)),r.a.createElement(_.a,{path:"/likes"},r.a.createElement(P,null)))),r.a.createElement("div",{className:"footer",style:{textAlign:"center"}},"ANN News by ",r.a.createElement("a",{href:"https://github.com/summerscar/my-rss-node"},"summerscar"))),r.a.createElement(_.a,{path:"/auth0_callback",component:B}))})),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var q=Object(_.h)((function(e){return r.a.createElement(v.a,{navigate:e.history.push,auth0_domain:"dev-ymyh-0n9.auth0.com",auth0_client_id:"U9Ypez6umr0NvVSRxPfcTwEgj8WGIz6p",auth0_language:"zh",auth0_params:{scope:"openid profile email read:current_user update:current_user_metadata create:current_user_metadata"}},r.a.createElement(U,null))}));o.a.render(r.a.createElement(E.a,null,r.a.createElement((function(e){var t=e.children,a={root:{text:"hello context"},setData:function(e,t){i((function(a){return Object(I.a)({},a,Object(A.a)({},e,t))}))},addStore:function(e,t){i((function(a){return Object(I.a)({},a,Object(A.a)({},e,t))}))}},c=Object(n.useState)(a),o=Object(d.a)(c,2),l=o[0],i=o[1];return r.a.createElement(T.Provider,{value:l},t)}),null,r.a.createElement(q,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(t,e)}))}}()}},[[105,1,2]]]);
//# sourceMappingURL=main.3cb994a0.chunk.js.map
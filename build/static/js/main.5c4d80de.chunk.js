(this["webpackJsonpmy-rss-mobile"]=this["webpackJsonpmy-rss-mobile"]||[]).push([[0],{131:function(e,t,a){e.exports=a(219)},136:function(e,t,a){},137:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=(a(136),a(88)),i=a(25),s=(a(137),a(221)),u=a(29),m=a(220),d=a(66),f=a(20);var p=function(e){var t=Object(f.b)(),a=t.isAuthenticated,n=t.login,c=e.videos,o=e.isloading;return r.a.createElement("div",{className:"homeWrapper"},c.length?c.map((function(e,t){return r.a.createElement("div",{key:t,className:"videoItem"},r.a.createElement("div",null,r.a.createElement("video",{className:"videoRadius",src:e.url,width:"100%",controls:!0,preload:0===t?"auto":"none",poster:"/annnews.jpg"})),r.a.createElement(u.b,{className:"link",to:{pathname:"/video/"+e.title,state:{data:e}}},e.title,r.a.createElement("div",{style:{fontSize:"12px"}},new Date(e.pubdate).toLocaleString())))})):o?r.a.createElement("div",{className:"loading"},r.a.createElement(m.a,{tip:"\u7a0d\u7b49\u4e00\u4e0b\u54e6",size:"large"})):null,c.length>0&&r.a.createElement(d.a,{shape:"round",block:!0,onClick:a()?e.more:n},"\u66f4\u591a",o&&r.a.createElement(m.a,{size:"small",style:{paddingLeft:"0.5rem"}})))},h=a(222),g=a(223),E=a(120),v=a.n(E),y=a(224),b=v.a.create();b.interceptors.request.use((function(e){return localStorage.getItem("useAuth:expires_at")&&(new Date).getTime()<localStorage.getItem("useAuth:expires_at")?(e.headers.Authorization="Bearer "+localStorage.getItem("accessToken"),e):(localStorage.removeItem("accessToken"),e)}),(function(e){return Promise.reject(e)})),b.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&y.a.error("\u9700\u8981\u767b\u5f55\u54e6"),Promise.reject(e)}));var k=b,w=a(33);var j=function(e){var t=Object(w.f)(),a=Object(n.useState)(),c=Object(i.a)(a,2),o=c[0],l=c[1],s=t.state.data,u=Object(n.useState)(!1),f=Object(i.a)(u,2),p=f[0],E=f[1],v=Object(n.useState)(!1),y=Object(i.a)(v,2),b=y[0],j=y[1],O=Object(n.useState)(),S=Object(i.a)(O,2),N=S[0],I=S[1],A=r.a.createElement(h.a,{onClick:function(e){var t;"0"!==(t=e.key)?(j(!0),k.post("/api/auth/furigana",{content:s.contentsnippet,grade:t}).then((function(e){I(e.data.WordList.Word.map((function(e,t){return r.a.createElement("ruby",{key:t},e.Surface._text,e.Furigana?r.a.createElement(r.a.Fragment,null,r.a.createElement("rp",null,"("),r.a.createElement("rt",null,e.Furigana._text),r.a.createElement("rp",null,")")):null)}))),j(!1)})).catch((function(e){console.log(e),j(!1)}))):I(null)}},r.a.createElement(h.a.Item,{key:"0"},"\u6062\u590d"),r.a.createElement(h.a.Item,{key:"8"},"\u4e00\u822c\u5411\u3051"),r.a.createElement(h.a.Item,{key:"1"},"\u5c0f\u5b661\u5e74\u751f"),r.a.createElement(h.a.Item,{key:"2"},"\u5c0f\u5b662\u5e74\u751f"),r.a.createElement(h.a.Item,{key:"3"},"\u5c0f\u5b663\u5e74\u751f"),r.a.createElement(h.a.Item,{key:"4"},"\u5c0f\u5b664\u5e74\u751f"),r.a.createElement(h.a.Item,{key:"5"},"\u5c0f\u5b665\u5e74\u751f"),r.a.createElement(h.a.Item,{key:"6"},"\u5c0f\u5b666\u5e74\u751f"),r.a.createElement(h.a.Item,{key:"7"},"\u5c0f\u5b667\u5e74\u751f"));return r.a.createElement("div",{className:"videoWrapper"},r.a.createElement("div",null,r.a.createElement("video",{src:s.url,width:"100%",controls:!0,autoPlay:!0})),r.a.createElement("div",{className:"contentWrapper"},r.a.createElement("div",{style:{fontSize:"14px",fontWeight:"bold"}},s.title),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("div",null,r.a.createElement(d.a,{size:"small",onClick:function(){E(!0),k.post("/api/auth/translate",{content:s.contentsnippet}).then((function(e){l(e.data.result),E(!1)})).catch((function(e){console.log(e),E(!1)}))}},"\u7ffb\u8bd1",p&&r.a.createElement(m.a,{size:"small",style:{paddingLeft:"0.5rem"}})),r.a.createElement(g.a,{overlay:A},r.a.createElement(d.a,{size:"small",style:{marginLeft:"0.2rem"}},"\u632f\u308a\u4eee\u540d  ",b&&r.a.createElement(m.a,{size:"small",style:{paddingLeft:"0.5rem"}})))),r.a.createElement("div",{style:{fontSize:"12px"}},new Date(s.pubdate).toLocaleString())),r.a.createElement("div",{style:{paddingTop:"1rem"}},N||s.contentsnippet),r.a.createElement("div",{style:{paddingTop:"1rem"}},o)))},O=a(13),S=function(){var e=Object(f.b)(),t=e.isAuthenticated,a=e.login,n=e.logout,c=e.authResult;return console.log("user: ",c),t()?r.a.createElement("div",null,c&&(c.idTokenPayload.picture?r.a.createElement("img",{style:{marginRight:"0.5rem"},width:"20px",src:c.idTokenPayload.picture,alt:c.idTokenPayload.name}):r.a.createElement("span",{style:{paddingRight:"0.5rem"}},c.idTokenPayload.name)),r.a.createElement(d.a,{size:"small",icon:"poweroff",loading:!c,onClick:function(){localStorage.removeItem("accessToken"),n()}})):r.a.createElement(d.a,{onClick:a},"\u767b\u5f55")},N=s.a.Header,I=function(){var e=Object(w.f)();return r.a.useEffect((function(){console.log(e)}),[e]),r.a.createElement(N,null,"/"!==e.pathname?r.a.createElement(u.b,{to:{pathname:"/"}},r.a.createElement(O.a,{type:"left",style:{fontSize:"20px",color:"white"}}),r.a.createElement("div",{style:{display:"inline",float:"right"}},r.a.createElement(S,null))):r.a.createElement("div",{style:{color:"white"}},"ANN NEWS",r.a.createElement("div",{style:{display:"inline",float:"right"}},r.a.createElement(S,null))))},A=function(){var e=Object(f.b)().handleAuthentication;return Object(n.useEffect)((function(){e()}),[e]),r.a.createElement("h1",null,"This is the auth callback page, you should be redirected immediately.")},x=s.a.Content,T=s.a.Footer;var W=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(0),m=Object(i.a)(u,2),d=m[0],h=m[1],g=Object(n.useState)(!1),E=Object(i.a)(g,2),v=E[0],y=E[1],b=Object(f.b)(),O=b.authResult,S=b.isAuthenticated;return Object(n.useEffect)((function(){S()?(y(!0),k.get("/api/auth/youtube/ANNnewsCH?offset=".concat(d)).then((function(e){console.log(e.data),o((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e.data.items))})),y(!1)}))):O||(y(!0),k.get("/api/youtube/ANNnewsCH").then((function(e){console.log(e.data),o(e.data.items),y(!1)})))}),[d]),Object(n.useEffect)((function(){O&&localStorage.setItem("accessToken",O.accessToken)}),[O]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:"layout"},r.a.createElement(I,null),r.a.createElement(x,{style:{padding:"0 50px"}},r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/"},r.a.createElement(p,{videos:c,more:function(){return h((function(e){return e+4}))},isloading:v})),r.a.createElement(w.a,{path:"/video/:title"},r.a.createElement(j,null)))),r.a.createElement(T,{style:{textAlign:"center"}},"ANN News by ",r.a.createElement("a",{href:"https://github.com/summerscar/my-rss-node"},"summerscar"))),r.a.createElement(w.a,{path:"/auth0_callback",component:A}))},z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=Object(w.g)((function(e){return r.a.createElement(f.a,{navigate:e.history.push,auth0_domain:"dev-ymyh-0n9.auth0.com",auth0_client_id:"U9Ypez6umr0NvVSRxPfcTwEgj8WGIz6p",auth0_language:"zh"},r.a.createElement(W,null))}));o.a.render(r.a.createElement(u.a,null,r.a.createElement(P,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[131,1,2]]]);
//# sourceMappingURL=main.5c4d80de.chunk.js.map
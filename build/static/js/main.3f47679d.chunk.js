(this["webpackJsonpmy-rss-mobile"]=this["webpackJsonpmy-rss-mobile"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(85),c=n.n(r),i=(n(102),n(95)),l=(n(103),n(177)),s=n(16),u=n(178);var d=function(e){var t=e.videos;return o.a.createElement("div",{className:"homeWrapper"},t?t.map((function(e,t){var n="https://myrssvideo.s3.jp-tok.cloud-object-storage.appdomain.cloud/".concat(e.url);return o.a.createElement("div",{key:t,className:"videoItem"},o.a.createElement("div",null,o.a.createElement("video",{src:n,width:"100%",controls:!0,preload:0===t?"auto":"none",poster:"/annnews.jpg"})),o.a.createElement(s.b,{className:"link",to:{pathname:"/video/"+e.title,state:{data:e}}},e.title,o.a.createElement("div",{style:{fontSize:"12px"}},new Date(e.pubdate).toLocaleString())))})):o.a.createElement(u.a,{tip:"\u7a0d\u7b49\u4e00\u4e0b\u54e6",size:"large"}))},m=n(12);var p=function(e){var t=Object(m.f)().state.data,n="https://myrssvideo.s3.jp-tok.cloud-object-storage.appdomain.cloud/".concat(t.url);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("video",{src:n,width:"100%",controls:!0,autoPlay:!0})),o.a.createElement("div",{className:"contentWrapper"},o.a.createElement("div",{style:{fontSize:"14px",fontWeight:"bold"}},t.title),o.a.createElement("div",{style:{fontSize:"12px",textAlign:"right"}},new Date(t.pubdate).toLocaleString()),o.a.createElement("div",{style:{paddingTop:"1rem"}},t.contentsnippet))))},f=n(25),v=l.a.Header,h=function(){var e=Object(m.f)();return o.a.useEffect((function(){console.log(e)}),[e]),o.a.createElement(v,null,"/"!==e.pathname?o.a.createElement(s.b,{to:{pathname:"/"}},o.a.createElement(f.a,{type:"left",style:{fontSize:"20px",color:"white"}})):o.a.createElement("div",{style:{color:"white"}},"ANN NEWS"))},g=n(94),E=n.n(g),w=l.a.Content,b=l.a.Footer;var y=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){E.a.get("/api/youtube/ANNnewsCH").then((function(e){console.log(e.data),r(e.data.items)}))}),[]),o.a.createElement(s.a,null,o.a.createElement(l.a,{className:"layout"},o.a.createElement(h,null),o.a.createElement(w,{style:{padding:"0 50px"}},o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/"},o.a.createElement(d,{videos:n})),o.a.createElement(m.a,{path:"/video/:title"},o.a.createElement(p,null)))),o.a.createElement(b,{style:{textAlign:"center"}},"ANN News by ",o.a.createElement("a",{href:"https://github.com/summerscar/my-rss-node"},"summerscar"))))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()},97:function(e,t,n){e.exports=n(175)}},[[97,1,2]]]);
//# sourceMappingURL=main.3f47679d.chunk.js.map
(this["webpackJsonpcool-pics"]=this["webpackJsonpcool-pics"]||[]).push([[0],{40:function(n,e,t){n.exports=t(70)},45:function(n,e,t){},70:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(30),o=t.n(c),i=t(8),u=(t(45),t(16)),l=t.n(u),s=t(31),p=t(12),f=t(1),m=t(9),d=t(2);function b(){var n=Object(f.a)(["\n      text-align: center;\n    "]);return b=function(){return n},n}function x(){var n=Object(f.a)(["\n  margin-top: ",";\n  ",";\n"]);return x=function(){return n},n}var h=d.b.div(x(),(function(n){return n.mt?n.mt:""}),(function(n){return n.ctr&&Object(d.a)(b())})),v=t(34),g=t.n(v);function E(){var n=Object(f.a)(["\n  font-size: 26px;\n  width: 100%;\n  height: 100%;\n  color: #595f6e;\n  padding-top: 10px;\n  outline: none;\n  border: none;\n  &:focus + "," ",", &:valid "," "," {\n    transform: translateY(-150%);\n    font-size: 14px;\n    color: #595f6e;\n  }\n  &:focus + ",":after, &:valid + ",":after {\n    transform: translateX(0%);\n  }\n"]);return E=function(){return n},n}function j(){var n=Object(f.a)(["\n  font-size: 22px;\n  position: absolute;\n  bottom: 5px;\n  left: 0px;\n  color: #5fa8d3;\n  transition: all 0.3s ease;\n  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2), 0px 8px 13px rgba(0, 0, 0, 0.1),\n    0px 18px 23px rgba(0, 0, 0, 0.2);\n"]);return j=function(){return n},n}function O(){var n=Object(f.a)(["\n  position: absolute;\n  bottom: 0px;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  border-bottom: 1px solid #5fa8d3;\n\n  :after {\n    content: '';\n    position: absolute;\n    bottom: -1px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    border-bottom: 1px solid #595f6e;\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n  }\n"]);return O=function(){return n},n}function w(){var n=Object(f.a)(["\n  width: 50%;\n  position: relative;\n  height: 50px;\n  overflow: hidden;\n"]);return w=function(){return n},n}var y=d.b.form(w()),S=d.b.label(O()),k=d.b.span(j()),F=d.b.input.attrs({type:"text",name:"name"})(E(),S,k,S,k,S,S),q=function(n){var e=n.query,t=n.handleSubmit,r=n.handleOnChange;return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{onSubmit:t},a.a.createElement(F,{value:e,onChange:r,required:!0,autoComplete:"off"}),a.a.createElement(S,null,a.a.createElement(k,null,"Enter your search term here..."))))};function z(){var n=Object(f.a)(["\n  margin-right: 1300px;\n  width: 50px;\n"]);return z=function(){return n},n}var C=d.b.img.attrs({alt:"icon"})(z());function D(){var n=Object(f.a)(["\n  width: 400px;\n  height: 300px;\n  object-fit: cover;\n  box-shadow: 10px 10px 6px -6px gray;\n  transform: rotate(7deg);\n  &:hover {\n    cursor: pointer;\n    filter: contrast(150%);\n    transition: filter 0.5s ease-in-out;\n    transform: scale(1.2);\n  }\n"]);return D=function(){return n},n}var L=d.b.img.attrs({alt:"raw"})(D()),Y=function(n){var e=n.picture,t=n.handleSelect,r=e.urls;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.b,{to:"/picture/".concat(e.id)},a.a.createElement(L,{src:r.small,onClick:function(){return t(e)}})))};function B(){var n=Object(f.a)(["\n  display: grid;\n  grid-template: repeat(3, 1fr) / repeat(3, 1fr);\n  grid-gap: 70px;\n"]);return B=function(){return n},n}function J(){var n=Object(f.a)(["\n  font-size: calc(20px + 2vmin);\n  color: #5fa8d3;\n  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1), 0px 8px 13px rgba(0, 0, 0, 0.1),\n    0px 18px 23px rgba(0, 0, 0, 0.1);\n"]);return J=function(){return n},n}var W=d.b.h4(J()),X=d.b.div(B()),_=function(n){var e=n.query,t=n.pictures,r=n.handleSelect,c=t.map((function(n){return a.a.createElement(Y,{key:n.id,picture:n,handleSelect:r})}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.b,{to:"/"},a.a.createElement(C,{src:"https://icon.now.sh/home/5fa8d3"})),a.a.createElement(W,null,t.length," search results for"," ",a.a.createElement("i",null,e.charAt(0).toUpperCase()+e.slice(1))," ..."),a.a.createElement(X,null,c))};function A(){var n=Object(f.a)(["\n  margin-right: -1300px;\n  border-radius: 60px 60px 60px 60px;\n  width: 500px;\n  height: 500px;\n  perspective: 1000px;\n  &:hover "," {\n    transform: rotateY(180deg);\n  }\n"]);return A=function(){return n},n}function I(){var n=Object(f.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n"]);return I=function(){return n},n}function P(){var n=Object(f.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  background-color: #2980b9;\n  color: white;\n  transform: rotateY(180deg);\n"]);return P=function(){return n},n}function U(){var n=Object(f.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  color: black;\n"]);return U=function(){return n},n}function $(){var n=Object(f.a)(["\n  padding: 2px 16px;\n"]);return $=function(){return n},n}function G(){var n=Object(f.a)(["\n  margin: -25px 12px 61px 416px;\n  min-width: 400px;\n  width: 500px;\n  height: 500px;\n  border-radius: 60px 60px 60px 60px;\n"]);return G=function(){return n},n}function H(){var n=Object(f.a)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  &:hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  }\n"]);return H=function(){return n},n}var K=d.b.div(H()),M=d.b.img.attrs({alt:"raw"})(G()),N=d.b.div($()),Q=d.b.div(U()),R=d.b.div(P()),T=d.b.div(I()),V=d.b.div(A(),T),Z=function(n){var e=n.currentDetails,t=e.id,r=e.description,c=e.urls;return a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null,a.a.createElement(h,{mt:"50px"},a.a.createElement(i.b,{to:"/pictures"},a.a.createElement(C,{src:"https://icon.now.sh/close/5fa8d3"})),a.a.createElement(V,null,a.a.createElement(T,null,a.a.createElement(Q,null,a.a.createElement(M,{src:c.small})),a.a.createElement(R,null,a.a.createElement(N,null,a.a.createElement("h1",null,"your user id is ",t),a.a.createElement("p",null,r))))))))},nn=function(n){var e=n.currentDetails;return a.a.createElement("div",null,a.a.createElement(Z,{currentDetails:e}))};function en(){var n=Object(f.a)(["\n  font-size: 30px;\n  color: palevioletred;\n"]);return en=function(){return n},n}var tn=d.b.div(en()),rn=function(n){var e=n.isLoading,t=n.query;return a.a.createElement(a.a.Fragment,null,e&&a.a.createElement(tn,null,'Loading for "',a.a.createElement("strong",null,t),'"...'))};function an(){var n=Object(f.a)(["\n  font-size: 30px;\n  color: red;\n"]);return an=function(){return n},n}var cn=d.b.div(an()),on=function(n){var e=n.isError;return a.a.createElement(a.a.Fragment,null,e&&a.a.createElement(cn,null,"Something went wrong ..."))},un=t(37),ln=t.n(un);function sn(){var n=Object(f.a)(["\n  margin-top: 210px;\n  font-size: calc(40px + 2vmin);\n  color: #5fa8d3;\n  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),\n    0px 18px 23px rgba(0, 0, 0, 0.1);\n"]);return sn=function(){return n},n}function pn(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return pn=function(){return n},n}g.a.config();var fn=d.b.header(pn()),mn=d.b.h2(sn()),dn=Object(m.e)((function(n){var e=n.history,t=Object(r.useState)([]),c=Object(p.a)(t,2),o=c[0],i=c[1],u=Object(r.useState)(null),f=Object(p.a)(u,2),d=f[0],b=f[1],x=Object(r.useState)("nature"),v=Object(p.a)(x,2),g=v[0],E=v[1],j=Object(r.useState)(!1),O=Object(p.a)(j,2),w=O[0],y=O[1],S=Object(r.useState)(!1),k=Object(p.a)(S,2),F=k[0],z=k[1];Object(r.useEffect)((function(){C()}),[]);var C=function(){var n=Object(s.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return z(!0),y(!1),n.prev=2,n.next=5,ln.a.get("".concat("https://api.unsplash.com/search/photos/?page=1&per_page=30","&query=").concat(g,"&client_id=").concat("f7e987e880d570ac854e404b148f7825a60bc54a1ec35d75a3dbdf5d9a93dce6"));case 5:200===(e=n.sent).status&&(i(e.data.results),console.log(e)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),y(!0);case 12:E(g),z(!1);case 14:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}(),D=function(n){e.push("/pictures"),n.preventDefault(),C(),E("")},L=function(n){E(n.target.value)},Y=function(n){b(n),console.log(n)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,{ctr:!0},a.a.createElement(fn,null,a.a.createElement(m.a,{exact:!0,path:"/",render:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(mn,null,"Find Cool Pictures"),a.a.createElement(q,{query:g,handleSubmit:D,handleOnChange:L}))}}),a.a.createElement(m.a,{path:"/pictures",render:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(_,{query:g,pictures:o,handleSelect:Y,isLoading:F}),a.a.createElement(rn,{query:g,isLoading:F}),a.a.createElement(on,{isError:w}))}}),a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{path:"/picture/:id",render:function(){return a.a.createElement(nn,{currentDetails:d})}})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(i.a,null,a.a.createElement(dn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.f475ef73.chunk.js.map
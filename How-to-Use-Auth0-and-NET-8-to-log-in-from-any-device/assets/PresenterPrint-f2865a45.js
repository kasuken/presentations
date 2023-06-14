import{d,i as _,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as x,j as y,o as r,k as b,l as N,m as k,p as w,q as P,_ as S}from"./index-e84a2b40.js";import{N as T}from"./NoteDisplay-631b19f5.js";const V={class:"m-4"},j={class:"mb-10"},H={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),A={key:0,class:"border-gray-400/50 mb-8"},E=d({__name:"PresenterPrint",setup(F){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const l=f(()=>y.map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(r(),n("div",{id:"page-root",style:x(a(P))},[t("div",V,[t("div",j,[t("h1",H,s(a(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(r(!0),n(g,null,v(a(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",D,s(e==null?void 0:e.no)+"/"+s(a(b)),1),N(" "+s(e==null?void 0:e.title)+" ",1),z])]),k(T,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(l).length-1?(r(),n("hr",A)):w("v-if",!0)]))),128))])],4))}}),R=S(E,[["__file","/home/runner/work/presentations/presentations/How to Use Auth0 and .NET 8 to log in from any device, even your toaster/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};

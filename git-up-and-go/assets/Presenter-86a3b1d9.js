import{o as d,f as k,g as e,B as S,C as z,v as h,d as M,i as B,a as P,D as y,x as v,E as H,h as t,_ as I,G as D,H as G,c as b,b as R,I as $,J as U,K as A,L as E,M as L,N as q,O as F,P as O,Q as W,m as u,t as Z,n as x,R as N,S as T,p as j,T as J,U as w,V as K,F as Q,W as X,X as Y,w as ee,Y as te,Z as se,q as V,$ as oe,a0 as ne,a1 as ae,a2 as le,k as ie,a3 as re,a4 as ce}from"./index-3af679b3.js";import{N as ue}from"./NoteDisplay-f79c75bf.js";import de from"./DrawingControls-4f37c2df.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pe=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[pe];function ve(n,l){return d(),k("svg",_e,me)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function Se(n,l){return d(),k("svg",fe,we)}const ye={name:"carbon-time",render:Se},ke="/presentations/git-up-and-go/assets/logo-title-horizontal-96c3c915.png";function Ce(){const n=S(Date.now()),l=z({interval:1e3}),_=h(()=>{const s=(l.value-n.value)/1e3,a=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${a}`});function p(){n.value=l.value}return{timer:_,resetTimer:p}}const be=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(n){const l=n;B(P);const _=h(()=>{var s,a,o;return(o=(a=(s=y.value)==null?void 0:s.meta)==null?void 0:a.slide)==null?void 0:o.note}),p=h(()=>{var s,a,o;return(o=(a=(s=y.value)==null?void 0:s.meta)==null?void 0:a.slide)==null?void 0:o.noteHTML});return(s,a)=>(d(),v(ue,{class:H(l.class),note:t(_),"note-html":t(p)},null,8,["class","note","note-html"]))}}),$e=I(be,[["__file","/home/runner/work/presentations/presentations/GIT Up and Go/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=n=>(X("data-v-574fd206"),n=n(),Y(),n),Ne={class:"bg-main h-full slidev-presenter"},Te={class:"grid-container"},Ve={class:"grid-section top flex"},Me=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),Pe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He=f(()=>e("div",{class:"context"}," current ",-1)),Ie=f(()=>e("div",{class:"context"}," next ",-1)),ze={class:"grid-section note overflow-auto"},De={class:"grid-section bottom"},Ge={class:"progress-bar"},Re=M({__name:"Presenter",setup(n){B(P);const l=S();D(),G(l);const _=b.titleTemplate.replace("%s",b.title||"Slidev");R({title:`Presenter - ${_}`});const{timer:p,resetTimer:s}=Ce(),a=S([]),o=h(()=>$.value<U.value?{route:y.value,clicks:$.value+1}:A.value?{route:E.value,clicks:0}:null);return L(()=>{const C=l.value.querySelector("#slide-content"),r=q(F()),g=O();W(()=>{if(!g.value||te.value||!se.value)return;const c=C.getBoundingClientRect(),i=(r.x-c.left)/c.width*100,m=(r.y-c.top)/c.height*100;if(!(i<0||i>100||m<0||m>100))return{x:i,y:m}},c=>{ee.cursor=c})}),(C,r)=>{const g=ye,c=he;return d(),k(Q,null,[e("div",Ne,[e("div",Te,[e("div",Ve,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...i)=>t(s)&&t(s)(...i))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Pe,Z(t(p)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(t(V))},[u(T,{key:"main",class:"h-full w-full"},{default:N(()=>[u(oe,{context:"presenter"})]),_:1}),He],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(t(V))},[t(o)?(d(),v(T,{key:"next",class:"h-full w-full"},{default:N(()=>{var i;return[u(t(ae),{is:(i=t(o).route)==null?void 0:i.component,"clicks-elements":a.value,"onUpdate:clicksElements":r[1]||(r[1]=m=>a.value=m),clicks:t(o).clicks,"clicks-disabled":!1,class:H(t(ne)(t(o).route)),route:t(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):j("v-if",!0),Ie],4),e("div",ze,[(d(),v($e,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",De,[u(re,{persist:!0})]),(d(),v(de,{key:0}))]),e("div",Ge,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(t(le)-1)/(t(ie)-1)*100}%`})},null,4)])]),u(ce),u(K,{modelValue:t(w),"onUpdate:modelValue":r[2]||(r[2]=i=>J(w)?w.value=i:null)},null,8,["modelValue"])],64)}}});const Le=I(Re,[["__scopeId","data-v-574fd206"],["__file","/home/runner/work/presentations/presentations/GIT Up and Go/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Le as default};

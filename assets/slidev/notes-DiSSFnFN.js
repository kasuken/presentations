import{d as F,r as z,Y as N,z as i,E as $,f as c,g as e,k as C,C as l,e as n,w as r,t as g,F as T,o as u}from"../modules/vue-16460ZAU.js";import{u as B,a as E,d,e as D,f as H,s as L}from"../index-Lqt42_qx.js";import{_ as V,C as I}from"./NoteDisplay.vue_vue_type_style_index_0_lang-4b7XDIK2.js";import{_ as f}from"./IconButton.vue_vue_type_script_setup_true_lang-BjfyURk_.js";import"../modules/shiki-BZKs2azR.js";const M={class:"h-full pt-2 flex flex-col"},R={class:"flex-none border-t border-main",px3:"",py2:""},Y={class:"flex-none border-t border-main"},j={class:"flex gap-1 items-center px-6 py-3"},q={key:0,class:"i-carbon:minimize"},A={key:1,class:"i-carbon:maximize"},G={class:"p2 text-center"},W=F({__name:"notes",setup(J){B({title:`Notes - ${L}`});const{slides:b,total:m}=E(),{isFullscreen:v,toggle:y}=H,p=z(),s=N("slidev-notes-font-size",18),a=i(()=>d.page),_=i(()=>b.value.find(o=>o.no===a.value));$(a,()=>{var o;(o=p.value)==null||o.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function S(){s.value=s.value+1}function w(){s.value=s.value-1}const x=i(()=>{const o=d.clicks,t=d.clicksTotal;return D(z(o),void 0,t)});return(o,t)=>{var k,h;return u(),c(T,null,[e("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:C({width:`${(a.value-1)/(l(m)-1)*100+1}%`})},null,4),e("div",M,[e("div",{ref_key:"scroller",ref:p,class:"px-5 flex-auto h-full overflow-auto",style:C({fontSize:`${l(s)}px`})},[n(V,{note:(k=_.value)==null?void 0:k.meta.slide.note,"note-html":(h=_.value)==null?void 0:h.meta.slide.noteHTML,placeholder:`No notes for Slide ${a.value}.`,"clicks-context":x.value,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),e("div",R,[n(I,{"clicks-context":x.value,readonly:""},null,8,["clicks-context"])]),e("div",Y,[e("div",j,[n(f,{title:l(v)?"Close fullscreen":"Enter fullscreen",onClick:l(y)},{default:r(()=>[l(v)?(u(),c("div",q)):(u(),c("div",A))]),_:1},8,["title","onClick"]),n(f,{title:"Increase font size",onClick:S},{default:r(()=>t[0]||(t[0]=[e("div",{class:"i-carbon:zoom-in"},null,-1)])),_:1}),n(f,{title:"Decrease font size",onClick:w},{default:r(()=>t[1]||(t[1]=[e("div",{class:"i-carbon:zoom-out"},null,-1)])),_:1}),t[2]||(t[2]=e("div",{class:"flex-auto"},null,-1)),e("div",G,g(a.value)+" / "+g(l(m)),1)])])])],64)}}});export{W as default};

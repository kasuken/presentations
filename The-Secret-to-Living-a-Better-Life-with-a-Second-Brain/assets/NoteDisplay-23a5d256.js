import{d as c,i as d,a as u,f as o,E as s,g as r,t as a,o as i,_ as m}from"./index-fc1563d2.js";const f=["innerHTML"],k=["textContent"],v=["textContent"],y=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const n=p;return d(u),(e,t)=>e.noteHtml?(i(),o("div",{key:0,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[0]||(t[0]=l=>e.$emit("click")),innerHTML:e.noteHtml},null,10,f)):e.note?(i(),o("div",{key:1,class:s(["prose overflow-auto outline-none",n.class]),onClick:t[1]||(t[1]=l=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,k)],2)):(i(),o("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:t[2]||(t[2]=l=>e.$emit("click"))},[r("p",{textContent:a(n.placeholder||"No notes.")},null,8,v)],2))}}),S=m(y,[["__file","/home/runner/work/presentations/presentations/The Secret to Living a Better Life with a Second Brain/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{S as N};

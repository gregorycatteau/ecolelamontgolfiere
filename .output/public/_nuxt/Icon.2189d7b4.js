import{a as k,B as A,i as B,C,f as o,p as N,R as b,u as e,o as r,l as w,S as h,c as z,U as D,V as q,W as E,k as F}from"./entry.b4d13894.js";import{u as H}from"./config.0c71c833.js";import{I as R,l as U}from"./Icon.vue.302f3c1e.js";const V=["width","height"],W=k({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(d){var y;let c,v;const i=d,S=A(),s=H();(y=s==null?void 0:s.nuxtIcon)!=null&&y.aliases;const m=B("icons",()=>({})),p=C(!1),a=o(()=>{var t;return(((t=s.nuxtIcon)==null?void 0:t.aliases)||{})[i.name]||i.name}),_=o(()=>{var t;return(t=m.value)==null?void 0:t[a.value]}),l=o(()=>S.vueApp.component(a.value)),n=o(()=>{var f,I,g;if(!i.size&&typeof((f=s.nuxtIcon)==null?void 0:f.size)=="boolean"&&!((I=s.nuxtIcon)!=null&&I.size))return;const t=i.size||((g=s.nuxtIcon)==null?void 0:g.size)||"1em";return String(Number(t))===t?`${t}px`:t}),u=o(()=>{var t;return((t=s==null?void 0:s.nuxtIcon)==null?void 0:t.class)??"icon"});async function x(){var t;l.value||(t=m.value)!=null&&t[a.value]||(p.value=!0,m.value[a.value]=await U(a.value).catch(()=>{}),p.value=!1)}return N(()=>a.value,x),!l.value&&([c,v]=b(()=>x()),c=await c,v()),(t,f)=>e(p)?(r(),w("span",{key:0,class:h(e(u)),width:e(n),height:e(n)},null,10,V)):e(_)?(r(),z(e(R),{key:1,icon:e(_),class:h(e(u)),width:e(n),height:e(n)},null,8,["icon","class","width","height"])):e(l)?(r(),z(D(e(l)),{key:2,class:h(e(u)),width:e(n),height:e(n)},null,8,["class","width","height"])):(r(),w("span",{key:3,class:h(e(u)),style:E({fontSize:e(n),lineHeight:e(n),width:e(n),height:e(n)})},q(d.name),7))}}),J=F(W,[["__scopeId","data-v-cf1ec82f"]]);export{J as default};
import{w as h}from"./index.09fc0b8f.js";/* empty css                        */import{k as m,C as f,z as g,o as r,l as i,a2 as o,w as b,a1 as s,V as p,a3 as q,u as x,$ as d,a0 as _}from"./entry.b4d13894.js";const n=e=>(d("data-v-6763d4fe"),e=e(),_(),e),y={class:"container2"},S=n(()=>s("h1",{class:"h1"},"Nous contacter",-1)),$=n(()=>s("p",null,"Vous pouvez nous contacter en utilisant le formulaire ci-dessous :",-1)),w=n(()=>s("br",null,null,-1)),I=n(()=>s("h1",null,"Soumettre",-1)),J=["disabled"],z={key:0,class:"text-red-500"},O={__name:"contactform",setup(e){const l=f({nom:"",prénom:"",email:"",message:""});async function c(u){await h(3e3)}return(u,v)=>{const a=g("FormKit");return r(),i("div",y,[S,$,w,o(a,{type:"form","submit-label":"Soumettre",value:x(l),actions:!1,onSubmit:c},{default:b(({state:t})=>[I,o(a,{type:"text",label:"Quel est ton nom ?","prefix-icon":"avatarMan",name:"nom",placeholder:"par exemple: Dupont",validation:"required | length:2,100 | alpha ","validation-messages":{required:"Oups ! Je crois que tu as oublié ton nom...",alpha:"Tu dois bien avoir un caractère bizarre quelque part...",length:"Les noms sont généralement compris entre 2 et 100 caractères..."}},null,8,["validation-messages"]),o(a,{type:"text",label:"Quel est ton Prénom ?","prefix-icon":"avatarMan",name:"prénom",placeholder:"par exemple: Jean",validation:"required | alpha | length:2,100","validation-messages":{required:"Oups ! Je crois que tu as oublié ton prénom...",alpha:"Tu dois bien avoir un caractère bizarre quelque part...",length:"Les prénoms sont généralement compris entre 2 et 100 caractères..."}},null,8,["validation-messages"]),o(a,{type:"email",label:"Quel est ton adresse mail ?","prefix-icon":"email",name:"email",placeholder:"par exemple: jean.dupont@fournisseurmail.fr",validation:"required | email","validation-messages":{required:"Oups ! Je crois que tu as oublié ton adresse mail...",email:"Ton adresse mail ne semble pas valide..."}},null,8,["validation-messages"]),o(a,{type:"textarea",label:"Quel est ton message ?",name:"message",placeholder:"par exemple: Je vous contacte pour vous dire que votre site est super ! On le savait déjà mais c'est toujours bon à entendre !",validation:"required |alpha | lenght, 2, 1000","validation-messages":{required:"Oups ! Je crois que tu as oublié ton message...",alpha:"Tu dois bien avoir un caractère bizarre quelque part...",length:"Les messages efficaces sont généralement compris entre 2 et 1000 caractères..."}},null,8,["validation-messages"]),s("button",{disabled:t.loading,class:"bouton"},p(t.loading?"Envoi en cours...":"Soumettre"),9,J),t.error?(r(),i("p",z,p(t.error),1)):q("",!0)]),_:1},8,["value"])])}}},V=m(O,[["__scopeId","data-v-6763d4fe"]]),k={name:"contact"};const B=e=>(d("data-v-c88553ae"),e=e(),_(),e),C=B(()=>s("p",{class:"title"},"Bienvenue sur la page contact",-1));function N(e,l,c,u,v,a){const t=V;return r(),i("div",null,[C,o(t)])}const D=m(k,[["render",N],["__scopeId","data-v-c88553ae"]]);export{D as default};
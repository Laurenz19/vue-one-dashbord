import{v as p,c as f,w as a,a9 as _,o as c,a as e,f as b,s as w,y as V,z as g,d as n,A as r,u as t,aa as $,G as y,Y as h}from"./index.60abf9b3.js";import{_ as k}from"./SectionFullScreen.80bfd938.js";import{_ as m,a as v}from"./FormField.6cdeace5.js";const L={__name:"LoginView",setup(P){const o=p({login:"john.doe",pass:"highly-secure-password-fYjUw-",remember:!0}),u=$(),i=()=>{u.push("/dashboard")};return(U,s)=>(c(),f(_,null,{default:a(()=>[e(k,{bg:"purplePink"},{default:a(({cardClass:d})=>[e(b,{class:w(d),form:"",onSubmit:V(i,["prevent"])},{footer:a(()=>[e(g,null,{default:a(()=>[e(n,{type:"submit",color:"info",label:"Login"}),e(n,{to:"/dashboard",color:"info",outline:"",label:"Back"})]),_:1})]),default:a(()=>[e(m,{label:"Login",help:"Please enter your login"},{default:a(()=>[e(r,{modelValue:o.login,"onUpdate:modelValue":s[0]||(s[0]=l=>o.login=l),icon:t(y),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(m,{label:"Password",help:"Please enter your password"},{default:a(()=>[e(r,{modelValue:o.pass,"onUpdate:modelValue":s[1]||(s[1]=l=>o.pass=l),icon:t(h),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(v,{modelValue:o.remember,"onUpdate:modelValue":s[2]||(s[2]=l=>o.remember=l),name:"remember",label:"Remember","input-value":!0},null,8,["modelValue"])]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{L as default};

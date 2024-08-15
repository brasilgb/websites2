import{r as o,W as j,j as e,Y as p}from"./app-Czhz5_fE.js";import{C as f,a as v,b as N,c as n,B as g,d as b,e as w,S as C}from"./index-C0p-v3S2.js";import{H as y,T as S,B as F}from"./index-CsbKDyET.js";import{g as B,h as d,i as c}from"./index-BYmjUrQd.js";import{r as U,s as z}from"./dataSelect-D5PcI7CM.js";import{A as E}from"./AuthenticatedLayout-B8NZZKjA.js";import"./index-BhrmaLoD.js";import"./moment-C5S46NFB.js";import"./ApplicationLogo-BWDY6d9w.js";const W=()=>{const[i,m]=o.useState(!1),[t,x]=o.useState(!1),{data:l,setData:r,post:u,progress:P,processing:_,errors:a}=j({name:"",email:"",roles:"",status:"",password:"",password_confirmation:""});function h(s){s.preventDefault(),u(route("users.store"))}return e.jsxs(E,{children:[e.jsx(p,{title:"Usuários"}),e.jsxs(f,{children:[e.jsxs(y,{children:[e.jsxs(S,{children:[e.jsx(B,{size:30}),e.jsx("span",{className:"ml-2",children:"Usuários"})]}),e.jsx(F,{links:[{url:route("users.index"),label:"Usuários"},{url:null,label:"Adicionar usuário"}]})]}),e.jsxs(v,{children:[e.jsxs(N,{children:[e.jsx(n,{children:e.jsx(g,{url:route("users.index"),label:"Voltar"})}),e.jsx(n,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:h,autoComplete:"off",children:[e.jsx(b,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"nome",children:"Nome"}),e.jsx("input",{id:"name",type:"text",value:l.name,onChange:s=>r("name",s.target.value),className:"input-form"}),a.name&&e.jsx("div",{className:"text-sm text-red-500",children:a.name})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"email",children:"E-mail"}),e.jsx("input",{id:"email",type:"text",value:l.email,onChange:s=>r("email",s.target.value),className:"input-form"}),a.email&&e.jsx("div",{className:"text-red-500",children:a.email})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password",children:"Senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password",type:i?"text":"password",value:l.password,onChange:s=>r("password",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>m(s=>!s),children:i?e.jsx(d,{size:24}):e.jsx(c,{size:24})})]}),a.password&&e.jsx("div",{className:"text-sm text-red-500",children:a.password})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password_confirmation",children:"Repita a senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password_confirmation",type:t?"text":"password",value:l.password_confirmation,onChange:s=>r("password_confirmation",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>x(s=>!s),children:t?e.jsx(d,{size:24}):e.jsx(c,{size:24})})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"roles",children:"Função"}),e.jsxs("select",{id:"roles",value:l.roles,onChange:s=>r("roles",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione a função"}),U.map(s=>e.jsx("option",{value:s==null?void 0:s.value,children:s==null?void 0:s.label},s==null?void 0:s.value))]}),a.roles&&e.jsx("div",{className:"text-sm text-red-500",children:a.roles})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"status",children:"Status"}),e.jsxs("select",{id:"status",value:l.status,onChange:s=>r("status",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o status"}),z.map(s=>e.jsx("option",{value:s==null?void 0:s.value,children:s==null?void 0:s.label},s==null?void 0:s.value))]}),a.status&&e.jsx("div",{className:"text-sm text-red-500",children:a.status})]})]})]})}),e.jsx(w,{children:e.jsx(C,{})})]})]})]})]})};export{W as default};

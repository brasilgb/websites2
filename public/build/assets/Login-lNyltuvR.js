import{j as e,q as f,r as n,W as g,Y as j,a as b}from"./app-d8DpqjWD.js";import{T as u,I as i}from"./TextInput-BsJFOYkj.js";import{P as w}from"./PrimaryButton-Blb17NRn.js";import{A as y}from"./AuthLayout-CaWCmFHx.js";import{g as N,k as v,l as k,m as C}from"./index-DSYKIMno.js";import"./ApplicationLogo-BO3cUe8a.js";function E({className:t="",...o}){return e.jsx("input",{...o,type:"checkbox",className:"rounded border-gray-300 text-megb-blue-terciary shadow-sm focus:bg-megb-blue-secundary "+t})}function q({status:t,canResetPassword:o}){f();const[l,m]=n.useState(!1),{data:r,setData:a,post:d,processing:x,errors:c,reset:p}=g({customerauth:"",password:"",remember:!1});n.useEffect(()=>()=>{p("password")},[]);const h=s=>{s.preventDefault(),d(route("login"))};return e.jsxs(y,{children:[e.jsx(j,{title:"Entrar"}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs("form",{onSubmit:h,children:[e.jsxs("div",{className:"relative",children:[e.jsx(N,{size:22,className:"absolute top-2.5 left-1 text-gray-400"}),e.jsx(u,{id:"customerauth",type:"customerauth",name:"customerauth",value:r.customerauth,className:"mt-1 pl-8 block w-full text-sm p-2.5",isFocused:!0,onChange:s=>a("customerauth",s.target.value),placeholder:"E-mail ou CPF"}),e.jsx(i,{message:c.customerauth,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6 relative",children:[e.jsx(v,{size:22,className:"absolute top-2.5 left-1 text-gray-400"}),e.jsx(u,{id:"password",type:l?"text":"password",name:"password",value:r.password,className:"mt-1 pl-8 block w-full text-sm p-2.5",autoComplete:"current-password",onChange:s=>a("password",s.target.value),placeholder:"Senha"}),l?e.jsx(k,{size:22,className:"absolute top-2.5 right-1 text-gray-400 cursor-pointer",onClick:()=>m(!1)}):e.jsx(C,{size:22,className:"absolute top-2.5 right-1 text-gray-400 cursor-pointer",onClick:()=>m(!0)}),e.jsx(i,{message:c.password,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-between mt-6",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx(E,{name:"remember",checked:r.remember,onChange:s=>a("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-200",children:"Lembrar"})]}),e.jsx(b,{href:route("password.request"),className:"underline text-sm text-gray-200 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Perdeu sua senha?"})]}),e.jsx("div",{className:"flex items-center justify-center mt-4",children:e.jsx(w,{className:"w-full",disabled:x,children:"Entrar"})})]})]})}export{q as default};

import{q as c,W as m,j as e}from"./app-Czhz5_fE.js";import{C as u,a as x,b as f,c as i,B as b,d as h,e as p,S as g}from"./index-C0p-v3S2.js";import{H as j,T as v,B as N}from"./index-CsbKDyET.js";import{A as y}from"./AuthenticatedLayout-B8NZZKjA.js";import{s as C}from"./index-Gxsh1Oo9.js";import{I as k}from"./index-BYmjUrQd.js";import"./index-BhrmaLoD.js";import"./moment-C5S46NFB.js";import"./ApplicationLogo-BWDY6d9w.js";const M=({categories:t})=>{c().props;const{data:s,setData:r,post:o,processing:n,errors:a}=m({name:"",description:"",featured:null,thumbnail:null,parent:"",module:"",active:!1,menu:!1,visiblehome:!1});function d(l){l.preventDefault(),o(route("categories.store"))}return e.jsx(y,{children:e.jsxs(u,{children:[e.jsxs(j,{children:[e.jsxs(v,{children:[e.jsx(k,{size:30}),e.jsx("span",{className:"ml-2",children:"Categorias"})]}),e.jsx(N,{links:[{url:route("categories.index"),label:"Categorias"},{url:null,label:"Adicionar categoria"}]})]}),e.jsxs(x,{children:[e.jsxs(f,{children:[e.jsx(i,{children:e.jsx(b,{url:route("categories.index"),label:"Voltar"})}),e.jsx(i,{children:e.jsx(e.Fragment,{})})]}),e.jsx("form",{onSubmit:d,autoComplete:"off",children:e.jsxs(h,{className:" border-y border-gray-100",children:[e.jsxs("div",{className:"mt-4 px-3 my-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"category",children:"Categoria"}),e.jsx("input",{id:"category",type:"text",value:s.name,onChange:l=>r("name",l.target.value),className:"input-form"}),a.name&&e.jsx("div",{className:"text-red-500",children:a.name})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"descricao",children:"Descrição"}),e.jsx("textarea",{id:"description",value:s.description,onChange:l=>r("description",l.target.value),className:"input-form"}),a.description&&e.jsx("div",{className:"text-red-500",children:a.description})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"thumbnail",children:"Thumbnail"}),e.jsx("input",{id:"thumbnail",type:"file",onChange:l=>r("thumbnail",l.target.files[0]),className:`block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent`}),a.thumbnail&&e.jsx("div",{className:"text-red-500",children:a.thumbnail})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"featured",children:"Imagem destacada"}),e.jsx("input",{id:"featured",type:"file",onChange:l=>r("featured",l.target.files[0]),className:`block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent`}),a.featured&&e.jsx("div",{className:"text-red-500",children:a.featured})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"parent",children:"Categoria pai"}),e.jsxs("select",{name:"parent",id:"parent",value:s.parent,onChange:l=>r("parent",l.target.value),className:"input-form",children:[e.jsx("option",{value:" ",children:"Selecione uma categoria pai"}),t.map(l=>e.jsx("option",{value:l.id,children:l.name},l.id))]})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"module",children:"Módulo"}),e.jsxs("select",{name:"module",id:"module",value:s.module,onChange:l=>r("module",l.target.value),className:"input-form",children:[e.jsx("option",{value:" ",children:"Selecione o módulo"}),C.map(l=>e.jsx("option",{value:l.value,children:l.label},l.value))]}),a.module&&e.jsx("div",{className:"text-red-500",children:a.module})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"active",checked:s.active,onChange:l=>r("active",l.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"active",children:"Ativar categoria"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"menu",checked:s.menu,onChange:l=>r("menu",l.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"menu",children:"Inserir no menu"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"visiblehome",checked:s.visiblehome,onChange:l=>r("visiblehome",l.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"visiblehome",children:"Somente página inicial"})]})]}),e.jsx(p,{className:"border-t border-gray-100",children:e.jsx(g,{processing:n})})]})})]})]})})};export{M as default};

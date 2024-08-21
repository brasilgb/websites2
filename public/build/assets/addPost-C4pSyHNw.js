import{r as f,W as h,j as e}from"./app-D9g4KFth.js";import{C as b,a as g,b as p,c as i,B as j,d as y,e as v,S as N}from"./index-7x3cWNbB.js";import{H as k,T as C,B as F}from"./index-DeTyd1rq.js";import{A as B}from"./AuthenticatedLayout-C_rkcj7J.js";import{b as S}from"./index-BBtq4XDR.js";import{E as w}from"./Editor-DY_T3hU4.js";import{S as A}from"./react-select.esm-DIe1v931.js";import"./index-B4F2xg2_.js";import"./moment-C5S46NFB.js";import"./ApplicationLogo-sJo4Lrtv.js";const M=({categories:n})=>{const o=f.useRef(),c=n.map(l=>({value:l.id,label:l.name})),{data:t,setData:r,post:d,processing:m,errors:a}=h({title:"",summary:"",content:"",category_id:[],featured:null,active:!1,social:!1,url:"",linked:!1,type:1});function u(l){l.preventDefault(),d(route("posts.store"))}const x=l=>{r("category_id",l.map(s=>s.value))};return e.jsx(B,{children:e.jsxs(b,{children:[e.jsxs(k,{children:[e.jsxs(C,{children:[e.jsx(S,{size:30}),e.jsx("span",{className:"ml-2",children:"Postagens"})]}),e.jsx(F,{links:[{url:route("posts.index"),label:"Postagens"},{url:null,label:"Adicionar postagem"}]})]}),e.jsxs(g,{children:[e.jsxs(p,{children:[e.jsx(i,{children:e.jsx(j,{url:route("posts.index"),label:"Voltar"})}),e.jsx(i,{children:e.jsx(e.Fragment,{})})]}),e.jsx("form",{onSubmit:u,autoComplete:"off",children:e.jsxs(y,{className:" border-y border-gray-100",children:[e.jsxs("div",{className:"mt-4 px-3 my-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"title",children:"Título"}),e.jsx("input",{id:"title",type:"text",value:t.title,onChange:l=>r("title",l.target.value),className:"input-form"}),a.title&&e.jsx("div",{className:"text-red-500",children:a.title})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"summary",children:"Descrição"}),e.jsx("textarea",{id:"summary",value:t.summary,onChange:l=>r("summary",l.target.value),className:"input-form"}),a.summary&&e.jsx("div",{className:"text-red-500",children:a.summary})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"content",children:"Conteúdo"}),e.jsx(w,{apiKey:"7sutxbbo4bpajl4d3vp8gajm3x9y26c1g6ruq3mngukohyb1",onInit:(l,s)=>o.current=s,initialValue:t.content,onChange:()=>{var l;return r("content",(l=o.current)==null?void 0:l.getContent())},id:"content",init:{language:"pt_BR",height:300,menubar:!1,plugins:"autolink lists link charmap print preview anchor image",toolbar:"undo redo link bold italic image alignleft aligncenter alignright alignjustify  bullist numlist outdent indent"}}),a.content&&e.jsx("div",{className:"text-red-500",children:a.content})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"featured",children:"Imagem destacada"}),e.jsx("input",{id:"featured",type:"file",onChange:l=>r("featured",l.target.files[0]),className:`block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent`}),a.featured&&e.jsx("div",{className:"text-red-500",children:a.featured})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"title",children:"Categorias"}),e.jsx(A,{options:c,isMulti:!0,onChange:x,placeholder:"Selecione a(s) categoria(s)",styles:{multiValueLabel:l=>({...l,backgroundColor:"#00AEEF",color:"white"})}}),a.category_id&&e.jsx("div",{className:"text-red-500",children:a.category_id})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"url",children:"URL externa"}),e.jsx("input",{id:"url",type:"text",value:t.url,onChange:l=>r("url",l.target.value),className:"input-form placeholder:text-gray-400",placeholder:"https://minhaurl.com.br"}),a.url&&e.jsx("div",{className:"text-red-500",children:a.url})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"active",checked:t.active,onChange:l=>r("active",l.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"active",children:"Ativar postagem"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"linked",checked:t.linked,onChange:l=>r("linked",l.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"linked",children:"Abrir em outra página"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"social",checked:t.social,onChange:l=>r("social",l.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"social",children:"Botões redes sociais"})]})]}),e.jsx(v,{className:"border-t border-gray-100",children:e.jsx(N,{processing:m})})]})})]})]})})};export{M as default};

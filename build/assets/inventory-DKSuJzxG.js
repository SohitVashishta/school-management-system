import{r as p,j as e}from"./index-Bvi5AaG_.js";import{u as y,w as N}from"./xlsx-DjuO7_Ju.js";import{C as d,a as i}from"./CRow-vSXVB6Z4.js";import{C as f,a as v}from"./CCardBody-CncvmFhX.js";import{C as b}from"./CCardHeader-DzukG7zH.js";import{C as S}from"./CForm-RL5qu1Ll.js";import{C as m}from"./CFormLabel-B4DC023o.js";import{C as h}from"./CFormInput-DLm92qrA.js";import{a as x}from"./index.esm-PqmBDI7d.js";import{C as T,a as _,b as I,c as s,d as k,e as o}from"./CTable-VK8GYg8V.js";import"./CFormControlWrapper-DCkBt9XH.js";import"./CFormControlValidation-DStCodTq.js";const K=()=>{const[a,j]=p.useState([]),[n,u]=p.useState({name:"",quantity:"",price:"",category:""}),[c,C]=p.useState(-1),l=r=>{const{name:t,value:g}=r.target;u({...n,[t]:g})},q=r=>{if(r.preventDefault(),c>=0){const t=[...a];t[c]=n,j(t),C(-1)}else j([...a,n]);u({name:"",quantity:"",price:"",category:""})},E=r=>{u(a[r]),C(r)},w=r=>{const t=a.filter((g,D)=>D!==r);j(t)},F=()=>{const r=y.json_to_sheet(a),t=y.book_new();y.book_append_sheet(t,r,"Inventory"),N(t,"inventory.xlsx")};return e.jsxs("div",{children:[e.jsx("h1",{children:"Inventory Management"}),e.jsx(d,{className:"justify-content-center py-4",children:e.jsx(i,{md:12,children:e.jsxs(f,{children:[e.jsx(b,{children:c>=0?"Edit Item":"Add Item"}),e.jsx(v,{children:e.jsxs(S,{onSubmit:q,children:[e.jsxs(d,{children:[e.jsxs(i,{md:4,children:[e.jsx(m,{htmlFor:"name",children:"Item Name"}),e.jsx(h,{type:"text",id:"name",name:"name",placeholder:"Enter item name",value:n.name,onChange:l,required:!0})]}),e.jsxs(i,{md:4,children:[e.jsx(m,{htmlFor:"quantity",children:"Quantity"}),e.jsx(h,{type:"number",id:"quantity",name:"quantity",placeholder:"Enter quantity",value:n.quantity,onChange:l,required:!0})]}),e.jsxs(i,{md:4,children:[e.jsx(m,{htmlFor:"price",children:"Price"}),e.jsx(h,{type:"number",id:"price",name:"price",placeholder:"Enter price",value:n.price,onChange:l,required:!0})]})]}),e.jsx(d,{className:"mt-3",children:e.jsxs(i,{md:4,children:[e.jsx(m,{htmlFor:"category",children:"Category"}),e.jsx(h,{type:"text",id:"category",name:"category",placeholder:"Enter category",value:n.category,onChange:l,required:!0})]})}),e.jsx(x,{type:"submit",color:"primary",className:"mt-4",children:c>=0?"Update":"Add"})]})})]})})}),e.jsx(d,{className:"justify-content-center py-4",children:e.jsx(i,{md:12,children:e.jsxs(f,{children:[e.jsxs(b,{children:[e.jsx("h5",{children:"Inventory List"}),e.jsx(x,{color:"success",onClick:F,children:"Download Excel"})]}),e.jsx(v,{children:e.jsxs(T,{striped:!0,hover:!0,children:[e.jsx(_,{children:e.jsxs(I,{children:[e.jsx(s,{children:"#"}),e.jsx(s,{children:"Item Name"}),e.jsx(s,{children:"Quantity"}),e.jsx(s,{children:"Price"}),e.jsx(s,{children:"Category"}),e.jsx(s,{children:"Actions"})]})}),e.jsx(k,{children:a.map((r,t)=>e.jsxs(I,{children:[e.jsx(s,{children:t+1}),e.jsx(o,{children:r.name}),e.jsx(o,{children:r.quantity}),e.jsx(o,{children:r.price}),e.jsx(o,{children:r.category}),e.jsxs(o,{children:[e.jsx(x,{color:"warning",size:"sm",onClick:()=>E(t),children:"Edit"})," ",e.jsx(x,{color:"danger",size:"sm",onClick:()=>w(t),children:"Delete"})]})]},t))})]})})]})})})]})};export{K as default};

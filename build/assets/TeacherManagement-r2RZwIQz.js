import{r as t,j as e,L as d}from"./index-Bvi5AaG_.js";import{C as j,a as x}from"./CRow-vSXVB6Z4.js";import{C as m,a as C}from"./CCardBody-CncvmFhX.js";import{C as p}from"./CCardHeader-DzukG7zH.js";import{a as i}from"./index.esm-PqmBDI7d.js";import{C as u,a as T,b as l,c as r,d as b,e as a}from"./CTable-VK8GYg8V.js";const A=()=>{const[n,c]=t.useState([{id:1,name:"John Doe",email:"john.doe@example.com",subject:"Math",phone:"123-456-7890"},{id:2,name:"Jane Smith",email:"jane.smith@example.com",subject:"English",phone:"987-654-3210"}]),o=s=>{c(n.filter(h=>h.id!==s))};return e.jsxs("div",{children:[e.jsx("h1",{children:"Teacher Management"}),e.jsx(j,{className:"justify-content-center py-4",children:e.jsx(x,{md:12,children:e.jsxs(m,{children:[e.jsxs(p,{children:[e.jsx("h5",{children:"Teacher List"}),e.jsx(d,{to:"/AddTeacher",children:e.jsx(i,{color:"primary",children:"Add Teacher"})})]}),e.jsx(C,{children:e.jsxs(u,{striped:!0,hover:!0,children:[e.jsx(T,{children:e.jsxs(l,{children:[e.jsx(r,{children:"#"}),e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Subject"}),e.jsx(r,{children:"Phone"}),e.jsx(r,{children:"Actions"})]})}),e.jsx(b,{children:n.map(s=>e.jsxs(l,{children:[e.jsx(r,{children:s.id}),e.jsx(a,{children:s.name}),e.jsx(a,{children:s.email}),e.jsx(a,{children:s.subject}),e.jsx(a,{children:s.phone}),e.jsxs(a,{children:[e.jsx(d,{to:`/edit-teacher/${s.id}`,children:e.jsx(i,{color:"warning",className:"me-2",children:"Edit"})}),e.jsx(i,{color:"danger",onClick:()=>o(s.id),children:"Delete"})]})]},s.id))})]})})]})})})]})};export{A as default};

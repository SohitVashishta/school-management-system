import{r as o,j as e}from"./index-Bvi5AaG_.js";import{C as x,a as f}from"./CRow-vSXVB6Z4.js";import{C,a as g}from"./CCardBody-CncvmFhX.js";import{C as y}from"./CCardHeader-DzukG7zH.js";import{C as v}from"./CForm-RL5qu1Ll.js";import{C as i}from"./CFormSelect-DwqI_a6J.js";import{a as I}from"./index.esm-PqmBDI7d.js";import"./CFormControlWrapper-DCkBt9XH.js";import"./CFormControlValidation-DStCodTq.js";import"./CFormLabel-B4DC023o.js";const q=()=>{const[c,l]=o.useState([]),[d,h]=o.useState([]),[a,t]=o.useState({teacherId:"",roleId:""});o.useEffect(()=>{m(),p()},[]);const m=async()=>{const r=await(await fetch("/api/teachers")).json();l(r)},p=async()=>{const r=await(await fetch("/api/roles")).json();h(r)},n=s=>{const{name:r,value:j}=s.target;t({...a,[r]:j})},u=async s=>{s.preventDefault();try{(await fetch("/api/assign-role",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).ok?(alert("Role assigned successfully!"),t({teacherId:"",roleId:""})):alert("Failed to assign role.")}catch(r){console.error("Error assigning role:",r),alert("An error occurred while assigning the role.")}};return e.jsxs("div",{children:[e.jsx("h1",{children:"Assign Role to Teacher"}),e.jsx(x,{className:"justify-content-center py-4",children:e.jsx(f,{md:6,children:e.jsxs(C,{children:[e.jsx(y,{children:e.jsx("h5",{children:"Assign a Role"})}),e.jsx(g,{children:e.jsxs(v,{onSubmit:u,children:[e.jsx("div",{className:"mb-3",children:e.jsxs(i,{id:"teacherId",name:"teacherId",value:a.teacherId,onChange:n,required:!0,children:[e.jsx("option",{value:"",children:"Select Teacher"}),c.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})}),e.jsx("div",{className:"mb-3",children:e.jsxs(i,{id:"roleId",name:"roleId",value:a.roleId,onChange:n,required:!0,children:[e.jsx("option",{value:"",children:"Select Role"}),d.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})}),e.jsx(I,{type:"submit",color:"primary",children:"Assign Role"})]})})]})})})]})};export{q as default};
import{r as i,j as e}from"./index-Bvi5AaG_.js";import{C as h,a as c}from"./CRow-vSXVB6Z4.js";import{C as u,a as p}from"./CCardBody-CncvmFhX.js";import{C as x}from"./CCardHeader-DzukG7zH.js";import{C as j}from"./CForm-RL5qu1Ll.js";import{C as n}from"./CFormLabel-B4DC023o.js";import{C as t}from"./CFormInput-DLm92qrA.js";import{C}from"./CFormSelect-DwqI_a6J.js";import{a as b}from"./index.esm-PqmBDI7d.js";import"./CFormControlWrapper-DCkBt9XH.js";import"./CFormControlValidation-DStCodTq.js";function A(){const[r,d]=i.useState({name:"",email:"",dob:"",phone:"",gender:""}),a=s=>{const{name:o,value:m}=s.target;d({...r,[o]:m})},l=s=>{s.preventDefault(),console.log("Submitted Data:",r),alert("Student added successfully!"),d({name:"",email:"",dob:"",phone:"",gender:""})};return e.jsxs("div",{children:[e.jsx("h1",{children:"Add Student"}),e.jsx(h,{className:"justify-content-center py-4",children:e.jsx(c,{md:12,children:e.jsxs(u,{children:[e.jsx(x,{children:e.jsx("h5",{children:"Student Details"})}),e.jsx(p,{children:e.jsxs(j,{onSubmit:l,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(n,{htmlFor:"name",children:"Name"}),e.jsx(t,{type:"text",id:"name",name:"name",placeholder:"Enter student's name",value:r.name,onChange:a,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(n,{htmlFor:"email",children:"Email"}),e.jsx(t,{type:"email",id:"email",name:"email",placeholder:"Enter student's email",value:r.email,onChange:a,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(n,{htmlFor:"dob",children:"Date of Birth"}),e.jsx(t,{type:"date",id:"dob",name:"dob",value:r.dob,onChange:a,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(n,{htmlFor:"phone",children:"Phone Number"}),e.jsx(t,{type:"tel",id:"phone",name:"phone",placeholder:"Enter phone number",value:r.phone,onChange:a,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(n,{htmlFor:"gender",children:"Gender"}),e.jsxs(C,{id:"gender",name:"gender",value:r.gender,onChange:a,required:!0,children:[e.jsx("option",{value:"",children:"Select gender"}),e.jsx("option",{value:"Male",children:"Male"}),e.jsx("option",{value:"Female",children:"Female"}),e.jsx("option",{value:"Other",children:"Other"})]})]}),e.jsx(b,{type:"submit",color:"primary",children:"Submit"})]})})]})})})]})}export{A as default};
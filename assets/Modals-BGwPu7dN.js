import{r as o,_ as S,R as x,a as P,c as q,P as r,j as e}from"./index-Bvi5AaG_.js";import{m as _,J as he,a as xe,b}from"./DefaultLayout-Cii11zlu.js";import{a as n,C as ee}from"./index.esm-PqmBDI7d.js";import{C as je,a as k}from"./CRow-vSXVB6Z4.js";import{C as N,a as w}from"./CCardBody-CncvmFhX.js";import{C as M}from"./CCardHeader-DzukG7zH.js";import{u as pe,T as be,C as fe}from"./Logo-with-text-Nb4Mq-Ol.js";import{C as ve}from"./CPopover-DW5kWSgw.js";import{C as se}from"./CTooltip-CtK_njr1.js";import"./cil-user-Dlmw-Gem.js";import"./getRTLPlacement-Dc0DMVaU.js";import"./getTransitionDurationFromElement-Cpu4p4hx.js";var z=o.forwardRef(function(s,l){var c=s.children,a=s.className,i=S(s,["children","className"]);return x.createElement("div",P({className:q("modal-content",a)},i,{ref:l}),c)});z.propTypes={children:r.node,className:r.string};z.displayName="CModalContent";var B=o.forwardRef(function(s,l){var c,a=s.children,i=s.alignment,h=s.className,p=s.fullscreen,v=s.scrollable,g=s.size,C=S(s,["children","alignment","className","fullscreen","scrollable","size"]);return x.createElement("div",P({className:q("modal-dialog",(c={"modal-dialog-centered":i==="center"},c[typeof p=="boolean"?"modal-fullscreen":"modal-fullscreen-".concat(p,"-down")]=p,c["modal-dialog-scrollable"]=v,c["modal-".concat(g)]=g,c),h)},C,{ref:l}),a)});B.propTypes={alignment:r.oneOf(["top","center"]),children:r.node,className:r.string,fullscreen:r.oneOfType([r.bool,r.oneOf(["sm","md","lg","xl","xxl"])]),scrollable:r.bool,size:r.oneOf(["sm","lg","xl"])};B.displayName="CModalDialog";var le=o.createContext({}),t=o.forwardRef(function(s,l){var c=s.children,a=s.alignment,i=s.backdrop,h=i===void 0?!0:i,p=s.className,v=s.container,g=s.duration,C=g===void 0?150:g,V=s.focus,E=V===void 0?!0:V,re=s.fullscreen,O=s.keyboard,oe=O===void 0?!0:O,L=s.onClose,A=s.onClosePrevented,ne=s.onShow,X=s.portal,I=X===void 0?!0:X,ce=s.scrollable,ie=s.size,H=s.transition,R=H===void 0?!0:H,W=s.unmountOnClose,ae=W===void 0?!0:W,T=s.visible,te=S(s,["children","alignment","backdrop","className","container","duration","focus","fullscreen","keyboard","onClose","onClosePrevented","onShow","portal","scrollable","size","transition","unmountOnClose","visible"]),J=o.useRef(null),D=o.useRef(null),de=o.useRef(null),ue=pe(l,D),K=o.useState(T),y=K[0],F=K[1],Y=o.useState(!1),G=Y[0],Q=Y[1],me={visible:y,setVisible:F};o.useEffect(function(){F(T)},[T]),o.useEffect(function(){var j;return y?(J.current=document.activeElement,document.addEventListener("mouseup",Z),document.addEventListener("keydown",$)):(j=J.current)===null||j===void 0||j.focus(),function(){document.removeEventListener("mouseup",Z),document.removeEventListener("keydown",$)}},[y]);var U=function(){return h==="static"?Q(!0):(F(!1),L&&L())};o.useLayoutEffect(function(){A&&A(),setTimeout(function(){return Q(!1)},C)},[G]),o.useLayoutEffect(function(){return y?(document.body.classList.add("modal-open"),h&&(document.body.style.overflow="hidden",document.body.style.paddingRight="0px"),setTimeout(function(){var j;E&&((j=D.current)===null||j===void 0||j.focus())},R?C:0)):(document.body.classList.remove("modal-open"),h&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))),function(){document.body.classList.remove("modal-open"),h&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))}},[y]);var Z=function(j){D.current&&D.current==j.target&&U()},$=function(j){j.key==="Escape"&&oe&&U()};return x.createElement(x.Fragment,null,x.createElement(be,{in:y,mountOnEnter:!0,nodeRef:D,onEnter:ne,onExit:L,unmountOnExit:ae,timeout:R?C:0},function(j){return x.createElement(_,{container:v,portal:I},x.createElement(le.Provider,{value:me},x.createElement("div",P({className:q("modal",{"modal-static":G,fade:R,show:j==="entered"},p),tabIndex:-1},y?{"aria-modal":!0,role:"dialog"}:{"aria-hidden":"true"},{style:P({},j!=="exited"&&{display:"block"})},te,{ref:ue}),x.createElement(B,{alignment:a,fullscreen:re,scrollable:ce,size:ie},x.createElement(z,{ref:de},c)))))}),h&&x.createElement(_,{container:v,portal:I},x.createElement(he,{visible:y})))});t.propTypes={alignment:r.oneOf(["top","center"]),backdrop:r.oneOfType([r.bool,r.oneOf(["static"])]),children:r.node,className:r.string,container:r.any,duration:r.number,focus:r.bool,fullscreen:r.oneOfType([r.bool,r.oneOf(["sm","md","lg","xl","xxl"])]),keyboard:r.bool,onClose:r.func,onClosePrevented:r.func,onShow:r.func,portal:r.bool,scrollable:r.bool,size:r.oneOf(["sm","lg","xl"]),transition:r.bool,unmountOnClose:r.bool,visible:r.bool};t.displayName="CModal";var d=o.forwardRef(function(s,l){var c=s.children,a=s.className,i=S(s,["children","className"]);return x.createElement("div",P({className:q("modal-body",a)},i,{ref:l}),c)});d.propTypes={children:r.node,className:r.string};d.displayName="CModalBody";var f=o.forwardRef(function(s,l){var c=s.children,a=s.className,i=S(s,["children","className"]);return x.createElement("div",P({className:q("modal-footer",a)},i,{ref:l}),c)});f.propTypes={children:r.node,className:r.string};f.displayName="CModalFooter";var u=o.forwardRef(function(s,l){var c=s.children,a=s.className,i=s.closeButton,h=i===void 0?!0:i,p=S(s,["children","className","closeButton"]),v=o.useContext(le).setVisible;return x.createElement("div",P({className:q("modal-header",a)},p,{ref:l}),c,h&&x.createElement(fe,{onClick:function(){return v(!1)}}))});u.propTypes={children:r.node,className:r.string,closeButton:r.bool};u.displayName="CModalHeader";var m=o.forwardRef(function(s,l){var c=s.children,a=s.as,i=a===void 0?"h5":a,h=s.className,p=S(s,["children","as","className"]);return x.createElement(i,P({className:q("modal-title",h)},p,{ref:l}),c)});m.propTypes={as:r.elementType,children:r.node,className:r.string};m.displayName="CModalTitle";const ge=()=>{const[s,l]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"primary",onClick:()=>l(!s),children:"Launch demo modal"}),e.jsxs(t,{visible:s,onClose:()=>l(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Modal title"})}),e.jsx(d,{children:"Woohoo, you're reading this text in a modal!"}),e.jsxs(f,{children:[e.jsx(n,{color:"secondary",onClick:()=>l(!1),children:"Close"}),e.jsx(n,{color:"primary",children:"Save changes"})]})]})]})},Ce=()=>{const[s,l]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"primary",onClick:()=>l(!s),children:"Launch static backdrop modal"}),e.jsxs(t,{backdrop:"static",visible:s,onClose:()=>l(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Modal title"})}),e.jsx(d,{children:"I will not close if you click outside me. Don'teven try to press escape key."}),e.jsxs(f,{children:[e.jsx(n,{color:"secondary",onClick:()=>l(!1),children:"Close"}),e.jsx(n,{color:"primary",children:"Save changes"})]})]})]})},ye=()=>{const[s,l]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"primary",onClick:()=>l(!s),children:"Launch demo modal"}),e.jsxs(t,{visible:s,onClose:()=>l(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Modal title"})}),e.jsxs(d,{children:[e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),e.jsxs(f,{children:[e.jsx(n,{color:"secondary",onClick:()=>l(!1),children:"Close"}),e.jsx(n,{color:"primary",children:"Save changes"})]})]})]})},ke=()=>{const[s,l]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"primary",onClick:()=>l(!s),children:"Launch demo modal"}),e.jsxs(t,{scrollable:!0,visible:s,onClose:()=>l(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Modal title"})}),e.jsxs(d,{children:[e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),e.jsxs(f,{children:[e.jsx(n,{color:"secondary",onClick:()=>l(!1),children:"Close"}),e.jsx(n,{color:"primary",children:"Save changes"})]})]})]})},Ne=()=>{const[s,l]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"primary",onClick:()=>l(!s),children:"Vertically centered modal"}),e.jsxs(t,{alignment:"center",visible:s,onClose:()=>l(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Modal title"})}),e.jsx(d,{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsxs(f,{children:[e.jsx(n,{color:"secondary",onClick:()=>l(!1),children:"Close"}),e.jsx(n,{color:"primary",children:"Save changes"})]})]})]})},we=()=>{const[s,l]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"primary",onClick:()=>l(!s),children:"Vertically centered scrollable modal"}),e.jsxs(t,{alignment:"center",scrollable:!0,visible:s,onClose:()=>l(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Modal title"})}),e.jsxs(d,{children:[e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e.jsx("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e.jsx("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."})]}),e.jsxs(f,{children:[e.jsx(n,{color:"secondary",onClick:()=>l(!1),children:"Close"}),e.jsx(n,{color:"primary",children:"Save changes"})]})]})]})},Me=()=>{const[s,l]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"primary",onClick:()=>l(!s),children:"Launch demo modal"}),e.jsxs(t,{alignment:"center",visible:s,onClose:()=>l(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Modal title"})}),e.jsxs(d,{children:[e.jsx("h5",{children:"Popover in a modal"}),e.jsxs("p",{children:["This",e.jsx(ve,{title:"Popover title",content:"Popover body content is set in this property.",children:e.jsx(n,{color:"primary",children:"button"})})," ","triggers a popover on click."]}),e.jsx("hr",{}),e.jsx("h5",{children:"Tooltips in a modal"}),e.jsxs("p",{children:[e.jsx(se,{content:"Tooltip",children:e.jsx(ee,{children:"This link"})})," ","and",e.jsx(se,{content:"Tooltip",children:e.jsx(ee,{children:"that link"})})," ","have tooltips on hover."]})]}),e.jsxs(f,{children:[e.jsx(n,{color:"secondary",onClick:()=>l(!1),children:"Close"}),e.jsx(n,{color:"primary",children:"Save changes"})]})]})]})},Pe=()=>{const[s,l]=o.useState(!1),[c,a]=o.useState(!1),[i,h]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"primary",onClick:()=>l(!s),children:"Extra large modal"}),e.jsx(n,{color:"primary",onClick:()=>a(!c),children:"Large modal"}),e.jsx(n,{color:"primary",onClick:()=>h(!i),children:"Small large modal"}),e.jsxs(t,{size:"xl",visible:s,onClose:()=>l(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Extra large modal"})}),e.jsx(d,{children:"..."})]}),e.jsxs(t,{size:"lg",visible:c,onClose:()=>a(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Large modal"})}),e.jsx(d,{children:"..."})]}),e.jsxs(t,{size:"sm",visible:i,onClose:()=>h(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Small modal"})}),e.jsx(d,{children:"..."})]})]})},Se=()=>{const[s,l]=o.useState(!1),[c,a]=o.useState(!1),[i,h]=o.useState(!1),[p,v]=o.useState(!1),[g,C]=o.useState(!1),[V,E]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"primary",onClick:()=>l(!s),children:"Full screen"}),e.jsx(n,{color:"primary",onClick:()=>a(!c),children:"Full screen below sm"}),e.jsx(n,{color:"primary",onClick:()=>h(!i),children:"Full screen below md"}),e.jsx(n,{color:"primary",onClick:()=>v(!p),children:"Full screen below lg"}),e.jsx(n,{color:"primary",onClick:()=>C(!g),children:"Full screen below xl"}),e.jsx(n,{color:"primary",onClick:()=>E(!V),children:"Full screen below xxl"}),e.jsxs(t,{fullscreen:!0,visible:s,onClose:()=>l(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Full screen"})}),e.jsx(d,{children:"..."})]}),e.jsxs(t,{fullscreen:"sm",visible:c,onClose:()=>a(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Full screen below sm"})}),e.jsx(d,{children:"..."})]}),e.jsxs(t,{fullscreen:"md",visible:i,onClose:()=>h(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Full screen below md"})}),e.jsx(d,{children:"..."})]}),e.jsxs(t,{fullscreen:"lg",visible:p,onClose:()=>v(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Full screen below lg"})}),e.jsx(d,{children:"..."})]}),e.jsxs(t,{fullscreen:"xl",visible:g,onClose:()=>C(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Full screen below xl"})}),e.jsx(d,{children:"..."})]}),e.jsxs(t,{fullscreen:"xxl",visible:V,onClose:()=>E(!1),children:[e.jsx(u,{children:e.jsx(m,{children:"Full screen below xxl"})}),e.jsx(d,{children:"..."})]})]})},Xe=()=>e.jsxs(je,{children:[e.jsxs(k,{xs:12,children:[e.jsx(xe,{href:"components/modal/"}),e.jsxs(N,{className:"mb-4",children:[e.jsx(M,{children:e.jsx("strong",{children:"React Modal"})}),e.jsxs(w,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Below is a static modal example (meaning its ",e.jsx("code",{children:"position"})," and"," ",e.jsx("code",{children:"display"})," have been overridden). Included are the modal header, modal body (required for ",e.jsx("code",{children:"padding"}),"), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action."]}),e.jsx(b,{href:"components/modal",children:e.jsxs(t,{className:"show d-block position-static",backdrop:!1,keyboard:!1,portal:!1,visible:!0,children:[e.jsx(u,{children:e.jsx(m,{children:"Modal title"})}),e.jsx(d,{children:"Modal body text goes here."}),e.jsxs(f,{children:[e.jsx(n,{color:"secondary",children:"Close"}),e.jsx(n,{color:"primary",children:"Save changes"})]})]})})]})]})]}),e.jsx(k,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(M,{children:[e.jsx("strong",{children:"React Modal"})," ",e.jsx("small",{children:"Live demo"})]}),e.jsxs(w,{children:[e.jsx("p",{className:"text-body-secondary small",children:"Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page."}),e.jsx(b,{href:"components/modal#live-demo",children:ge()})]})]})}),e.jsx(k,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(M,{children:[e.jsx("strong",{children:"React Modal"})," ",e.jsx("small",{children:"Static backdrop"})]}),e.jsxs(w,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["If you don’t provide an ",e.jsx("code",{children:"onDimsiss"})," handler to the Modal component, your modal will behave as though the backdrop is static, meaning it will not close when clicking outside it. Click the button below to try it."]}),e.jsx(b,{href:"components/modal#static-backdrop",children:Ce()})]})]})}),e.jsx(k,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(M,{children:[e.jsx("strong",{children:"React Modal"})," ",e.jsx("small",{children:"Scrolling long content"})]}),e.jsxs(w,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["If you don’t provide an ",e.jsx("code",{children:"onDimsiss"})," handler to the Modal component, your modal will behave as though the backdrop is static, meaning it will not close when clicking outside it. Click the button below to try it."]}),e.jsx(b,{href:"components/modal#scrolling-long-content",children:ye()}),e.jsxs("p",{className:"text-body-secondary small",children:["You can also create a scrollable modal that allows scroll the modal body by adding"," ",e.jsx("code",{children:"scrollable"})," prop."]}),e.jsx(b,{href:"components/modal#scrolling-long-content",children:ke()})]})]})}),e.jsx(k,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(M,{children:[e.jsx("strong",{children:"React Modal"})," ",e.jsx("small",{children:"Vertically centered"})]}),e.jsxs(w,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add ",e.jsx("code",{children:'alignment="center"'})," to ",e.jsx("code",{children:"<CModal>"})," to vertically center the modal."]}),e.jsx(b,{href:"components/modal#vertically-centered",children:Ne()}),e.jsx(b,{href:"components/modal#vertically-centered",children:we()})]})]})}),e.jsx(k,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(M,{children:[e.jsx("strong",{children:"React Modal"})," ",e.jsx("small",{children:"Tooltips and popovers"})]}),e.jsxs(w,{children:[e.jsxs("p",{className:"text-body-secondary small",children:[e.jsx("code",{children:"<CTooltips>"})," and ",e.jsx("code",{children:"<CPopovers>"})," can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed."]}),e.jsx(b,{href:"components/modal#tooltips-and-popovers",children:Me()})]})]})}),e.jsx(k,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(M,{children:[e.jsx("strong",{children:"React Modal"})," ",e.jsx("small",{children:"Optional sizes"})]}),e.jsxs(w,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Modals have three optional sizes, available via modifier classes to be placed on a"," ",e.jsx("code",{children:"<CModal>"}),". These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports."]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Size"}),e.jsx("th",{children:"Property size"}),e.jsx("th",{children:"Modal max-width"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Small"}),e.jsx("td",{children:e.jsx("code",{children:"'sm'"})}),e.jsx("td",{children:e.jsx("code",{children:"300px"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Default"}),e.jsx("td",{className:"text-body-secondary",children:"None"}),e.jsx("td",{children:e.jsx("code",{children:"500px"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Large"}),e.jsx("td",{children:e.jsx("code",{children:"'lg'"})}),e.jsx("td",{children:e.jsx("code",{children:"800px"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Extra large"}),e.jsx("td",{children:e.jsx("code",{children:"'xl'"})}),e.jsx("td",{children:e.jsx("code",{children:"1140px"})})]})]})]}),e.jsx(b,{href:"components/modal#optional-sizes",children:Pe()})]})]})}),e.jsx(k,{xs:12,children:e.jsxs(N,{className:"mb-4",children:[e.jsxs(M,{children:[e.jsx("strong",{children:"React Modal"})," ",e.jsx("small",{children:"Fullscreen Modal"})]}),e.jsxs(w,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Another override is the option to pop up a modal that covers the user viewport, available via property ",e.jsx("code",{children:"fullscrean"}),"."]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Property fullscrean"}),e.jsx("th",{children:"Availability"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"Always"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"'sm'"})}),e.jsxs("td",{children:["Below ",e.jsx("code",{children:"576px"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"'md'"})}),e.jsxs("td",{children:["Below ",e.jsx("code",{children:"768px"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"'lg'"})}),e.jsxs("td",{children:["Below ",e.jsx("code",{children:"992px"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"'xl'"})}),e.jsxs("td",{children:["Below ",e.jsx("code",{children:"1200px"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"'xxl'"})}),e.jsxs("td",{children:["Below ",e.jsx("code",{children:"1400px"})]})]})]})]}),e.jsx(b,{href:"components/modal#fullscreen-modal",children:Se()})]})]})})]});export{Xe as default};

"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55199],{55199:function(e,t,o){o.d(t,{Z:function(){return U}});var r=o(28193),n=o(26831),l=o(29172),i=o(93918),s=o(2784),p=o(84501),a=o(21399),u=o(36855),c=o(66208),d=o(69075),f=o(83820),m=o(15672);function Z(e){return(0,m.Z)("MuiPopperUnstyled",e)}(0,o(69222).Z)("MuiPopperUnstyled",["root"]);var P=o(82057),v=o(52322);let b=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],h=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function R(e){return"function"==typeof e?e():e}let y=()=>(0,d.Z)({root:["root"]},Z,{}),w={},E=s.forwardRef(function(e,t){var o;let{anchorEl:r,children:n,component:u,direction:d,disablePortal:f,modifiers:m,open:Z,ownerState:h,placement:w,popperOptions:E,popperRef:x,slotProps:S={},slots:k={},TransitionProps:M}=e,j=(0,i.Z)(e,b),O=s.useRef(null),T=(0,p.Z)(O,t),U=s.useRef(null),_=(0,p.Z)(U,x),N=s.useRef(_);(0,a.Z)(()=>{N.current=_},[_]),s.useImperativeHandle(x,()=>U.current,[]);let B=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(w,d),[C,F]=s.useState(B),[H,I]=s.useState(R(r));s.useEffect(()=>{U.current&&U.current.forceUpdate()}),s.useEffect(()=>{r&&I(R(r))},[r]),(0,a.Z)(()=>{if(!H||!Z)return;let e=e=>{F(e.placement)},t=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:t})=>{e(t)}}];null!=m&&(t=t.concat(m)),E&&null!=E.modifiers&&(t=t.concat(E.modifiers));let o=(0,c.fi)(H,O.current,(0,l.Z)({placement:B},E,{modifiers:t}));return N.current(o),()=>{o.destroy(),N.current(null)}},[H,f,m,Z,E,B]);let W={placement:C};null!==M&&(W.TransitionProps=M);let g=y(),q=null!=(o=null!=u?u:k.root)?o:"div",z=(0,P.Z)({elementType:q,externalSlotProps:S.root,externalForwardedProps:j,additionalProps:{role:"tooltip",ref:T},ownerState:(0,l.Z)({},e,h),className:g.root});return(0,v.jsx)(q,(0,l.Z)({},z,{children:"function"==typeof n?n(W):n}))}),x=s.forwardRef(function(e,t){let{anchorEl:o,children:r,container:n,direction:p="ltr",disablePortal:a=!1,keepMounted:c=!1,modifiers:d,open:m,placement:Z="bottom",popperOptions:P=w,popperRef:b,style:y,transition:x=!1}=e,S=(0,i.Z)(e,h),[k,M]=s.useState(!0),j=()=>{M(!1)},O=()=>{M(!0)};if(!c&&!m&&(!x||k))return null;let T=n||(o?(0,u.Z)(R(o)).body:void 0);return(0,v.jsx)(f.Z,{disablePortal:a,container:T,children:(0,v.jsx)(E,(0,l.Z)({anchorEl:o,direction:p,disablePortal:a,modifiers:d,ref:t,open:x?!k:m,placement:Z,popperOptions:P,popperRef:b},S,{style:(0,l.Z)({position:"fixed",top:0,left:0,display:!m&&c&&(!x||k)?"none":null},y),TransitionProps:x?{in:m,onEnter:j,onExited:O}:null,children:r}))})});var S=o(38457),k=o(65992),M=o(43853);let j=["components","componentsProps","slots","slotProps"],O=(0,k.ZP)(x,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),T=s.forwardRef(function(e,t){var o;let l=(0,S.Z)(),i=(0,M.Z)({props:e,name:"MuiPopper"}),{components:s,componentsProps:p,slots:a,slotProps:u}=i,c=(0,n.Z)(i,j),d=null!=(o=null==a?void 0:a.root)?o:null==s?void 0:s.Root;return(0,v.jsx)(O,(0,r.Z)({direction:null==l?void 0:l.direction,slots:{root:d},slotProps:null!=u?u:p},c,{ref:t}))});var U=T}}]);
//# sourceMappingURL=55199-ac606a58de6f6b51.js.map
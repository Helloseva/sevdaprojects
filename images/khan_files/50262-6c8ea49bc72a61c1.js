"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50262],{50262:function(e,n,t){t.d(n,{i:function(){return e1}});var o,a=t(70865),i=t(96670),s=t(50930),r=t(52322),l=t(72841),c=t(47842),d=t(83415),u=t(41075),p=t(62197),m=t(29510),h=t(26051),f=t(44297),b=t(87394),g=t(2784),v=t(19819),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.threshold,t=void 0===n?1/0:n,o=e.skip,a=void 0!==o&&o,i=e.initialStateValue,s=(0,b.Z)((0,g.useState)(void 0!==i&&i),2),r=s[0],l=s[1];return(0,g.useEffect)(function(){if(!a){var e=(0,v.Zc)(function(){window.pageYOffset>=t?l(!0):l(!1)});return window.addEventListener("scroll",e,{passive:!0}),function(){return e&&window.removeEventListener("scroll",e)}}},[t,a]),r},C=t(43822),w=t(58487),y=t(98779),k=t(8740),Z=t(26297),L=t(67550),j=(0,k.ZL)()(function(e,n){var t,o=e.palette,a=e.typography,i=e.breakpoints,s=e.tokens.spacing,r=n.bgColor,l=n.textColor;return{topNav:(0,c.Z)({display:"flex",width:"100%",zIndex:2,height:"87px",boxShadow:"0px 16px 48px rgba(0, 0, 0, 12%)"},i.down("sm"),{display:"none"}),topNavFixed:{zIndex:10,position:"fixed",top:0,left:0,backgroundColor:r},root:(0,c.Z)({display:"flex",justifyContent:"space-between",width:"100%",margin:"0 auto",maxWidth:i.values.lg,padding:"0 ".concat(s.m)},i.up("md"),{padding:"0 ".concat(s.m," 0 ").concat(s["3xl"])}),assetDescriptionPortrait:{paddingLeft:"60px"},assetDescriptionLandscape:{paddingLeft:"90px"},assetDescription:{margin:"20px 0",paddingTop:"5px",position:"relative",overflow:"hidden"},actionButtons:(0,c.Z)({marginTop:"10px"},i.down("md"),{marginTop:0}),icon:{position:"absolute",top:0,left:0,zIndex:1},iconPortrait:{width:"40px"},iconLandscape:{width:"75px"},title:{whiteSpace:"nowrap",fontSize:"12px",fontWeight:700,color:l},type:{fontSize:"12px",color:l},buttonVariantFilter:{color:l,display:"block",width:"100%",height:"100%",backgroundColor:"inherit",border:0,minWidth:0,lineHeight:1.3,fontWeight:"normal",textAlign:"center",padding:"8px","&:hover":{border:0,backgroundColor:"inherit"}},buttonAnchor:(t={height:"auto",padding:0,minWidth:0,display:"inline-flex",fontWeight:a.fontWeightRegular,color:o.info.main},(0,c.Z)(t,i.up("sm"),{"&:hover":{backgroundColor:"inherit",color:o.text.primary},"&:focus":{backgroundColor:"inherit",color:o.text.primary}}),(0,c.Z)(t,"& .MuiTouchRipple-root",{display:"none"}),t),actionVariantRoot:(0,c.Z)({padding:s.s},i.up("md"),{padding:s.base,marginLeft:s.base}),startIcon:{margin:0}}}),B=t(47999),I=t(59481),A=t(66358),P=t(9823),S=t(776),D=(0,k.ZL)()(function(e){var n,t=e.breakpoints,o=e.palette,a=e.tokens,i=a.spacing,s=a.fontSize;return{root:(n={color:o.info.main,display:"flex",marginTop:i.s},(0,c.Z)(n,t.up("sm"),{marginTop:i.base}),(0,c.Z)(n,"& > *:not(:first-of-type)",(0,c.Z)({marginLeft:i.s},t.up("md"),{marginLeft:i.base})),n),buttonWrapper:{display:"flex"},buttonProgress:{position:"absolute"},actionLabel:(0,c.Z)({},t.down("md"),{display:"none"}),iconSizeMedium:{"& > *:first-of-type":(0,c.Z)({},t.down("md"),{fontSize:s.icon})},startIcon:(0,c.Z)({},t.down("md"),{margin:0})}}),N=function(e){var n=e.hasIcon,t=e.withActionLabel;return n&&t?"contained":t?"text":void 0},T=function(e){var n=e.Icon,t=e.withActionLabel,o=!!n;return{color:o?"primary":"inherit",variant:N({hasIcon:o,withActionLabel:t}),startIcon:t?n:void 0,size:t?"medium":"small"}},M=function(e){var n=e.classesProps,t=e.buttons,o=e.withActionLabel,s=e.color,d=D(),u=d.classes,p=d.cx,m=j({color:s}).classes,h=o?B.z:I.h,f=(0,P.D)().isBrandSstk;return(0,r.jsx)(S.Mp,{value:A.Bh8,children:(0,r.jsx)(L.Z,{className:p(u.root,n.rootContainer),children:t.map(function(e){var t,s=e.label,d=e.href,b=e.onClick,g=e.isLoading,v=e.disabled,x=e.show,C=e.Icon,w=e.clickAnalyticsLabel,y=(0,Z.Z)(e,["label","href","onClick","isLoading","disabled","show","Icon","clickAnalyticsLabel"]);return(void 0===x||x)&&(0,r.jsx)(L.Z,{className:u.buttonWrapper,children:(0,r.jsx)(h,(0,i.Z)((0,a.Z)({classes:{root:n.buttonRoot,iconSizeMedium:u.iconSizeMedium,startIcon:m.startIcon},className:p((t={},(0,c.Z)(t,m.buttonAnchor,!C),(0,c.Z)(t,m.buttonVariantFilter,!!C),t)),onClick:b,href:d,disabled:g||v,"aria-label":s,labelTrack:f?w:s},T({Icon:C,withActionLabel:o}),y),{children:o?(0,r.jsxs)(r.Fragment,{children:[g&&(0,r.jsx)(l.Z,{color:"inherit",size:18,className:u.buttonProgress}),(0,r.jsx)("span",{className:u.actionLabel,children:s})]}):C}))},s)})})})};M.defaultProps={classesProps:{},withActionLabel:!0};var _=t(83249),F=t(85801),z=t(53007),R=(0,k.ZL)()(function(e){var n=e.breakpoints,t=e.tokens,o=t.spacing,a=t.fontSize;return{actionRoot:(0,c.Z)({padding:o.s},n.up("md"),{padding:o.base,marginLeft:o.base}),actionLabel:(0,c.Z)({},n.down("md"),{display:"none"}),iconSizeMedium:{"& > *:first-of-type":(0,c.Z)({},n.down("md"),{fontSize:a.icon})},startIcon:(0,c.Z)({},n.down("md"),{margin:0})}}),O=function(e){var n=e.buttonProps,t=e.labels,o=j({color:e.color}).classes,s=R(),l=s.classes,c=s.cx;return(0,r.jsx)(_.Z,(0,i.Z)((0,a.Z)({},n),{classes:{root:o.actionVariantRoot,iconSizeMedium:l.iconSizeMedium,startIcon:o.startIcon},className:c(o.buttonVariantFilter,n.className),color:"primary",variant:"contained",startIcon:(0,r.jsx)(z.m,{}),children:(0,r.jsx)("span",{className:l.actionLabel,children:t.share})}))},V=function(e){var n=e.buttonProps,t=j({isVariant:e.isVariant}).classes,o=R(),s=o.classes,l=o.cx;return(0,r.jsx)(F.Z,(0,i.Z)((0,a.Z)({},n),{classes:{root:l(s.actionRoot,n.className)},className:t.buttonVariantFilter,color:"primary",size:"small",children:(0,r.jsx)(z.m,{})}))},U=t(98788),E=t(5163),W=t(44417),H=t(44699),K=t(73572),G=t(37546),Y=t(48433),X=t(54112),q=t(78809),J=t(67855),Q=t(11849),$=t(65257),ee=t(56589),en=t(35776),et=t(34273),eo=t.n(et),ea=t(70314),ei=t.n(ea),es=t(25237),er=t.n(es),el=ei()().publicRuntimeConfig.shutterstockBaseUrl,ec=er()(function(){return t.e(51935).then(t.bind(t,51935)).then(function(e){return e.DynamicMenuDropdownContent})},{loadableGenerated:{webpack:function(){return[51935]}},ssr:!1}),ed="action-menu",eu=function(e){var n=e.asset,t=e.labels,o=e.onCloseHandler,a=e.productSharedAnalyticsEvent,i=e.shareLink,s=e.shouldTrackAnalytics,r=e.twitterCopy,l=e.setCopyLinkStatus,c=e.pageSection;return[{label:K.vq,Icon:J.s,href:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(i)),isLink:!0,hasDivider:!1,onClick:function(){s&&a({asset:n,shareVia:K.vq,pageSection:c}),o()}},{label:K.Ib,Icon:Q.t,href:"https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(i),"&text=").concat(void 0===r?"":r),isLink:!0,hasDivider:!1,onClick:function(){s&&a({asset:n,shareVia:K.Ib,pageSection:c}),o()}},{label:t.copy,Icon:$.C,isLink:!1,onClick:(0,U.Z)(function(){var e;return(0,E.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),[4,eo()(i)];case 1:return t.sent(),s&&a({asset:n,shareVia:"copyLink",pageSection:c}),l({status:H.MR,error:void 0}),[3,4];case 2:return e=t.sent(),l({status:H.pn,error:e}),[3,4];case 3:return o(),[7];case 4:return[2]}})}),hasDivider:!0}]},ep={share:"common:actions_share",email:"account:profile_email",copy:"common:actions_copy",copyToClipBoardSuccess:"developers:apps_copied_to_clipboard",copyToClipBoardWarning:"notifications:label_generic_failure"},em=function(e){var n=e.asset,t=e.ButtonComponent,o=e.classes,s=e.hasTooltip,l=e.iconContainerClassName,c=e.shouldTrackAnalytics,d=e.clickAnalyticsLabel,u=e.size,p=e.color,m=(0,S.yh)().analytics,h=d.pageSection,f=d.eventLabel,v=(0,X.D)({namespace:en.VQ6,translationKeys:ep}).labels,x=n.type,C=n.description,w=(0,q.M)(),y=(0,G.Lr)(n),k=(0,b.Z)((0,ee.r)((0,i.Z)((0,a.Z)({},y),{assetType:x,slug:w({description:C})})),1)[0],Z=(0,b.Z)((0,g.useState)(null),2),L=Z[0],j=Z[1],B=(0,b.Z)((0,g.useState)(!1),2),I=B[0],P=B[1],D=(0,b.Z)((0,g.useState)({status:"",error:void 0}),2),N=D[0],T=D[1],M=(0,Y.W)(),_=function(){I||P(!0)},F=function(e){_(),j(e)},z=function(){return F(null)},R=eu({asset:n,labels:v,onCloseHandler:z,productSharedAnalyticsEvent:M,setCopyLinkStatus:T,shareLink:"".concat(el).concat(k),shouldTrackAnalytics:c,twitterCopy:C,pageSection:A.df}),O=(0,i.Z)((0,a.Z)({size:u,"aria-label":v.share},I&&L&&{"aria-controls":ed}),{"aria-haspopup":"true",className:o.button,onClick:function(e){c&&m.click({pageSection:h||A.hTM,eventLabel:f||A.$cX}),F(e.currentTarget)},onMouseEnter:_});return(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)(t,{buttonProps:O,labels:v,color:p,hasTooltip:s}),I&&(0,r.jsx)(ec,{id:ed,anchorEl:L,menuOptions:R,onCloseHandler:z}),(0,r.jsx)(W.Y,{alertSeverity:N.status,error:N.error,handleSnackbarClose:function(){return T({status:""})},isOpen:!!N.status,message:N.status===H.MR?v.copyToClipBoardSuccess:v.copyToClipBoardWarning})]})};em.defaultProps={classes:{},clickAnalyticsLabel:{},hasTooltip:!1,shouldTrackAnalytics:!1,size:"small"};var eh=(0,k.ZL)()(function(e,n){var t,o,i=e.breakpoints,s=e.tokens,r=s.size,l=s.spacing,d=n.flexBreakpoint,u=n.isCentered;return{root:(0,a.Z)({display:"flex",flexDirection:"column",justifyContent:"center",marginTop:l.base,minHeight:r.density.high},"md"===d?(0,c.Z)({},i.up("md"),{marginTop:0,flexDirection:"row"}):(t={},(0,c.Z)(t,i.up("md"),{marginTop:0,marginBottom:l.base}),(0,c.Z)(t,i.up(d),{flexDirection:"row"}),t)),container:(0,a.Z)({width:"100%"},u&&(0,c.Z)({},i.up("md"),{width:"auto"})),ctas:(0,a.Z)({color:"#FFFFFF",alignItems:"center"},"md"===d?(0,c.Z)({},i.up("md"),{marginLeft:l.base,display:"flex",justifyContent:"flex-end"}):(o={},(0,c.Z)(o,i.up(d),{marginLeft:l.s,display:"flex",justifyContent:"flex-end"}),(0,c.Z)(o,i.up("md"),{marginLeft:l.base}),o)),channelBanner:{marginRight:l.s},actionButtonRoot:(0,c.Z)({padding:l.s,marginBottom:0},i.up("md"),{padding:l.base}),actionIcons:{display:"flex",width:"auto"},actionRootContainer:{marginTop:0,alignItems:"center",display:"flex"},shareButtonContainer:(0,c.Z)({display:"flex",alignItems:"center"},i.down("md"),{marginLeft:l.s}),banner:(0,c.Z)({width:"100%",display:"flex",justifyContent:"space-between",marginBottom:l.s},i.up("sm"),{marginBottom:0})}}),ef=function(e){var n=e.asset,t=e.flexBreakpoint,o=e.clickAnalyticsLabels,i=e.CtaComponent,s=e.actionButtons,l=e.showShareButton,c=e.ctaComponentProps,d=e.isCentered,u=e.color,p=e.disableChannelBanner,m=eh({flexBreakpoint:t,isCentered:d}),h=m.classes,f=m.cx,b=!(0,y.d)({breakpoint:"sm"}),g=(null==s?void 0:s.length)||l;return(0,r.jsxs)("div",{className:f(h.root,h.container),children:[(!p||g)&&(0,r.jsxs)("div",{className:h.banner,children:[!p&&(0,r.jsx)(w.h,{classes:{root:h.channelBanner},asset:n,withLabel:!1}),g&&(0,r.jsxs)("div",{className:h.actionIcons,children:[s&&(0,r.jsx)(M,{classesProps:{rootContainer:h.actionRootContainer},buttons:s,withActionLabel:b,color:u}),l&&(0,r.jsx)(em,{asset:n,ButtonComponent:b?O:V,clickAnalyticsLabel:o.shareButton,iconContainerClassName:h.shareButtonContainer,shouldTrackAnalytics:!0,size:"medium",color:u})]})]}),i&&(0,r.jsx)("div",{className:h.ctas,children:(0,r.jsx)(i,(0,a.Z)({asset:n},c))})]})};ef.defaultProps={flexBreakpoint:"sm",actionButtons:null,CtaComponent:null,ctaComponentProps:{},isCentered:!1,clickAnalyticsLabels:""};var eb=function(e){var n,t,o=e.actionButtons,a=e.asset,i=e.clickAnalyticsLabels,s=e.CtaComponent,l=e.ctaComponentProps,b=e.showShareButton,g=e.disableChannelBanner,v=(0,m.PE)().locale,w="#ffffff",y=a.aspect<1?"portrait":"landscape",k=(0,f.Am)(a),Z=(0,h.G)({asset:a,language:v}),L=x({threshold:220,skip:(null==document?void 0:null===(n=document.documentElement)||void 0===n?void 0:n.clientWidth)<=C.w.breakpoints.values.sm}),B=j({bgColor:"#232835",textColor:w}),I=B.classes,A=B.cx,P={portrait:I.assetDescriptionPortrait,landscape:I.assetDescriptionLandscape},S={portrait:I.iconPortrait,landscape:I.iconLandscape};return(0,r.jsx)(r.Fragment,{children:L&&(0,r.jsx)(d.Z,{direction:"down",in:L,children:(0,r.jsx)("div",{id:"top-nav-banner",className:A(I.topNav,(0,c.Z)({},I.topNavFixed,L)),children:(0,r.jsxs)(u.ZP,{className:I.root,children:[(0,r.jsxs)(u.ZP,{className:A(I.assetDescription,P[y]),children:[(0,r.jsx)("img",{className:A(I.icon,S[y]),src:k?a.previewImageUrl:a.src,alt:null!==(t=a.alt)&&void 0!==t?t:Z}),(0,r.jsx)(p.Z,{className:I.title,children:k?Z:a.title}),(0,r.jsx)(p.Z,{className:I.type,children:a.type})]}),(0,r.jsx)(u.ZP,{className:I.actionButtons,children:(0,r.jsx)(ef,{actionButtons:o,asset:a,clickAnalyticsLabels:i,CtaComponent:s,ctaComponentProps:l,isCentered:!0,showShareButton:b,color:w,disableChannelBanner:void 0!==g&&g})})]})})})})},eg=t(89045),ev=t(51216),ex=t(91609),eC=t(73377),ew=t(17411),ey=t(59877),ek=ev.r,eZ=(0,k.ZL)()(function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.breakpoints,a=t.palette,i=t.tokens,s=i.color,r=i.size,l=i.spacing,d=a.mode===ex.oc.DARK,u=d?s["white-96"]:s.gray["onyx-87"],p=d?a.common.black:a.common.white;return{root:(e={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",marginTop:l.base,minHeight:r.density.high},(0,c.Z)(e,o.down("md"),{alignItems:"normal",flexWrap:"wrap"}),(0,c.Z)(e,o.up("md"),{marginTop:0,marginBottom:l.base,alignItems:"flex-start"}),(0,c.Z)(e,o.up("sm"),{flexDirection:"row"}),e),container:{width:"100%"},buttonProgress:{position:"absolute"},ctas:(n={alignItems:"center"},(0,c.Z)(n,o.up("sm"),{marginLeft:l.s,display:"flex",justifyContent:"flex-end"}),(0,c.Z)(n,o.up("md"),{marginLeft:l.base}),n),tooltip:{"&&":{color:p,backgroundColor:u}},tooltipContent:{display:"inline",cursor:"default"},banner:{width:"80%",display:"flex",justifyContent:"space-around",marginBottom:l.s},textLink:{color:a.info.main,"&:hover":{color:a.text.primary}}}}),eL=er()(function(){return Promise.all([t.e(23883),t.e(97415)]).then(t.bind(t,97415))},{loadableGenerated:{webpack:function(){return[97415]}},ssr:!1}),ej=function(e){var n,t=e.assetDownloadUrl,o=e.showDescription,a=e.color,i=e.variant,s=e.clickAnalyticsLabels,c=eZ(),d=c.classes,u=c.cx,p=(0,b.Z)((0,g.useState)(!1),2),m=p[0],h=p[1],f=(n=(0,U.Z)(function(){return(0,E.__generator)(this,function(e){switch(e.label){case 0:if(!t||m)return[2];return h(!0),[4,(0,ew.S)(t)];case 1:return e.sent(),h(!1),[2]}})}),function(){return n.apply(this,arguments)}),v=s.dreamDownloadForFreeButton,x=s.dreamLearnMoreButton,C=(0,X.D)({namespace:en.Otp,translationKeys:{downloadForFree:"image:logout_adp_free_trial_download",standardLicenseDescription:"comparison_table_licenses_section:feature1:description",learnMore:"pricing_card_learn_more"}}),w=C.t,y=C.labels;return(0,r.jsxs)("div",{className:u(d.root,d.container),children:[o&&(0,r.jsx)("div",{className:d.banner,children:(0,r.jsxs)("span",{children:[(0,r.jsx)(ey.cC,{ns:en.Otp,i18nKey:"dream_campaign:free_download_description",components:{b:(0,r.jsx)("b",{}),i:(0,r.jsx)("i",{})},t:w}),"\xa0",(0,r.jsx)(eL,{disableInteractive:!0,title:(0,r.jsx)("span",{className:d.tooltipContent,children:y.standardLicenseDescription}),children:(0,r.jsxs)(ek,{href:"/explore/dream",underline:!0,className:d.textLink,clickAnalyticsLabel:(0,eC.U_)(x),children:[y.learnMore,"."]})})]})}),(0,r.jsx)("div",{className:d.ctas,children:(0,r.jsxs)(B.z,{color:a,variant:i,disabled:m,fullWidth:!0,onClick:f,clickTrack:(0,eC.U_)(v),"aria-label":y.downloadForFree,children:[m&&(0,r.jsx)(l.Z,{size:24,color:"inherit",className:d.buttonProgress}),y.downloadForFree]})})]})};ej.defaultProps={assetDownloadUrl:null,showDescription:!1,color:"secondary",variant:"contained"};var eB=t(79866),eI=t(11265),eA=t(53881),eP=t(88849),eS=t(19511),eD=t(95775),eN=t(80479),eT=t(84159),eM=t(27310),e_=t(64349),eF=t(37253),ez=function(e){var n=e.initialProps;return(0,r.jsx)(eg.i,(0,a.Z)({},n))},eR=(0,i.Z)((0,a.Z)({},eM.YM),{treatments:(o={},(0,c.Z)(o,eP.vG,function(e){return e.experiment.recordImpression(),(0,r.jsx)(r.Fragment,{})}),(0,c.Z)(o,eP._Z,function(e){return e.experiment.recordImpression(),(0,r.jsx)(r.Fragment,{})}),(0,c.Z)(o,eP.NM,function(e){var n=e.experiment,t=e.initialProps;return n.recordImpression(),(0,r.jsx)(ez,{initialProps:t})}),o)}),eO=function(e){var n,t,o,s,l=e.asset,c=(0,e_.j)(),d=(0,eD.IP)({assets:[l],licenseName:void 0,selectedAssetSize:void 0}).data,u=(0,eN.I)(),p=u.experiments,m=u.error,h=(null==c?void 0:c.isValidating)&&!(null==c?void 0:null===(n=c.data)||void 0===n?void 0:n.id),b=!h&&!!(null==c?void 0:null===(t=c.data)||void 0===t?void 0:t.isLoggedOut),g=void 0===p&&void 0===m,v=(0,eF.Fx)(),x=(0,eT.bK)(),C=(null==d?void 0:null===(o=d.licenses)||void 0===o?void 0:o.length)>0,w=(null==d?void 0:null===(s=d.subscriptions)||void 0===s?void 0:s.length)>0,y=(0,f.kX)({asset:(0,i.Z)((0,a.Z)({},l),{containedInCollections:[null==l?void 0:l.containedInCollections]})}).relatedAssets,k=(0,f.aT)(l)&&!(0,f.N3)(l),Z=!!(y||[]).length;return(!d&&h||!d&&!b||h||g)&&!v&&!x||g&&x?(0,r.jsx)(eF.gi,{}):v||x||!Z||w||C||b||!k?(0,r.jsx)(ez,{initialProps:e}):(0,r.jsx)(eS.K,{config:eR,initialProps:e,SkeletonLoader:eF.gi,Portal:function(e){var n=e.initialProps;return(0,r.jsx)(ez,{initialProps:n})}})},eV=t(7197),eU=t(449),eE=t(84866),eW=function(e){var n;return(null==e?void 0:null===(n=e.contributor)||void 0===n?void 0:n.id)&&(0,eE.n_)({contributorId:e.contributor.id})?{downloadUrl:(0,eE.bI)(e)}:{}},eH=t(17604),eK=t(59979),eG=t(52309),eY=t(43110),eX=t(65094),eq=t(34116),eJ=t(65359),eQ=t(75855),e$=t(57613),e0=t(5632),e1=function(e){var n=e.addToCollectionViewsHandler,t=e.asset,o=e.canOpenDrawerOnLoad,c=e.clickAnalyticsLabels,d=e.labels,u=e.redirectToCollectionDetailsPage,p=e.isTemplateAsset,m=(0,e0.useRouter)().asPath,h=(0,eH.t)({asset:t,isTemplateAsset:p,labels:d}),b=h.editorButtonHref,v=h.editorButtonLabel,x=h.isCreate,C=h.onClick,w=(0,eK.cM)(),k=(0,y.d)(),Z=(0,eA.n)().isMobileServer,L=(0,eY.B)(),j=c.addToCollections,B=c.editButton,I=c.tryButton,A=c.generateMoreButton,P=(0,eU.i)({asset:t,clickAnalyticsLabels:c}),S=P.tryButtonClickHandler,D=P.isActionInProgress,N=P.isMusicPreviewModalOpen,T=P.setIsMusicPreviewModalOpen,M=eW(t).downloadUrl,_=(0,eG.B)(N),F=(0,eX.E)({asset:t}),z=F.showSaveButton,R=F.showShareButton,O=F.showEditButton,V=F.showTryButton,U=F.showDownloadForFreeButton,E=F.showGenerateMoreButton,W=(0,f.aT)(t)&&!(0,f.N3)(t),H=(0,f.Am)(t)&&!(0,f.so)(t),K=(0,f.PD)({channels:null==t?void 0:t.channels}),G=(0,g.useMemo)(function(){return(0,s.Z)(z?[{label:d.save,onClick:function(){L?n({assets:[t],gridItems:[],redirectToCollectionDetailsPage:u}):(0,eV.JO)({assets:t,signUpPath:w})},rel:"nofollow",Icon:(0,r.jsx)(eq.X,{}),clickAnalyticsLabel:null==j?void 0:j.eventLabel}]:[]).concat((0,s.Z)(V?[{label:d.try,onClick:function(){S()},rel:"nofollow",Icon:D?(0,r.jsx)(l.Z,{size:20}):(0,r.jsx)(eJ.I,{}),clickAnalyticsLabel:null==I?void 0:I.eventLabel,"data-optimize":"download-watermark-cta"}]:[]),(0,s.Z)(O&&!(k||Z)?[(0,i.Z)((0,a.Z)({label:v},x?{onClick:C}:{href:b}),{Icon:(0,r.jsx)(eQ.M,{}),clickAnalyticsLabel:null==B?void 0:B.eventLabel,rel:"nofollow",target:"_blank"})]:[]),(0,s.Z)(E?[{label:d.generateMoreButton,href:"/generate",rel:"nofollow",Icon:(0,r.jsx)(e$.C,{}),clickAnalyticsLabel:null==A?void 0:A.eventLabel}]:[]))},[z,d.save,d.try,d.generateMoreButton,null==j?void 0:j.eventLabel,V,D,null==I?void 0:I.eventLabel,O,k,Z,v,x,C,b,null==B?void 0:B.eventLabel,E,null==A?void 0:A.eventLabel,L,t,w,n,u,S]);return(0,r.jsxs)(r.Fragment,{children:[U?(0,r.jsx)(ej,{showDescription:!0,assetDownloadUrl:M,canOpenDrawerOnLoad:o,clickAnalyticsLabels:c}):(0,r.jsx)(eB.e,{actionButtons:G,asset:t,clickAnalyticsLabels:c,ctaComponentProps:{asset:t,canOpenDrawerOnLoad:o,clickAnalyticsLabels:c,hideCtaComponent:K},isCentered:!0,showShareButton:R,hideCtaComponent:K,isTemplateAsset:p,CtaComponent:eO}),(W||H)&&!p&&(0,r.jsx)(eb,{actionButtons:G,asset:t,clickAnalyticsLabels:c,disableChannelBanner:U,CtaComponent:U?ej:eg.i,ctaComponentProps:{asset:t,assetDownloadUrl:M,showDescription:!1,campaignAssetDownloadURL:M,clickAnalyticsLabels:c},showShareButton:R},m),_&&(0,r.jsx)(eI.D,{setIsDialogActive:T,isOpen:N,track:t})]})};e1.defaultProps={addToCollectionViewsHandler:null,asset:{},clickAnalyticsLabels:{},isTemplateAsset:!1}},27310:function(e,n,t){t.d(n,{YM:function(){return o}});var o={flagID:"eat-296-adp-image-conversion-panel",id:"EAT-296",name:"EComm Customer Conversion",eligibility:{excludeMobile:!0}}},64349:function(e,n,t){t.d(n,{j:function(){return p}});var o=t(70865),a=t(96670),i=t(69164),s=t(52884),r=t(23490),l=t(35896),c=t(85482),d={data:{isLoggedOut:!0},error:void 0,isValidating:!0},u=(0,a.Z)((0,o.Z)({},d),{isValidating:!1}),p=function(){var e=(0,r.N)().isBot,n=(0,c.ZP)(e?null:"".concat((0,i.PR)().formattedUrl,"?experiment296CacheBustForUseSwr=true"),function(e){return l.he.get(e).then(function(e){return e.data||d.data})},{dedupingInterval:s.no,revalidateOnMount:!0,revalidateOnFocus:!0});return(null==n?void 0:n.data)?n:e?u:d}},37253:function(e,n,t){t.d(n,{Fx:function(){return i},gi:function(){return a}});var o=t(52322),a=function(){return(0,o.jsx)(o.Fragment,{})},i=function(){return"undefined"!=typeof jest}}}]);
//# sourceMappingURL=50262-6c8ea49bc72a61c1.js.map
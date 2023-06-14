"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64699],{27050:function(t,e,n){n.d(e,{AV:function(){return y},Co:function(){return k},E6:function(){return f},Gg:function(){return I},HN:function(){return P},QJ:function(){return S},U2:function(){return Z},VJ:function(){return L},_R:function(){return x},a1:function(){return v},bH:function(){return M},c1:function(){return V},c3:function(){return O},cK:function(){return C},iG:function(){return h},pK:function(){return w},qp:function(){return N},qr:function(){return U},v2:function(){return p},w_:function(){return B},zo:function(){return F}});var r=n(47842),i=n(70865),a=n(96670),o=n(26297),u=n(9009),c=n(72075),d=n(33701),l=n(25721),s=n(53957),f=function(t,e){var n;return null===(n=t[e])||void 0===n?void 0:n.fields},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return t.find(function(t){return t.contentType===e})},m=function(t){return t?t.reduce(function(t,e){return(0,a.Z)((0,i.Z)({},t),(0,r.Z)({},e.id,e))},{}):{}},g=function(t){var e,n=t.data,r=t.entries,o=null==n?void 0:null===(e=n.fields)||void 0===e?void 0:e.modules;return(0,a.Z)((0,i.Z)({},n),{fields:(0,a.Z)((0,i.Z)({},n.fields),{modules:o?o.map(function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id,e=r[t]||{},n=e.contentType,a=e.fields;return(0,i.Z)({id:t,contentType:n},a)}):[]})})},h=function(t,e){var n,r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=(0,u.O)(t),c=m(o.entries);return n=r?g({data:o,entries:c}):o,(0,a.Z)((0,i.Z)({},n),{locale:e,entries:c})},v=function(t,e){var n,r=(0,u.O)(t);if(!r)return{};var i=m(null===(n=r[0])||void 0===n?void 0:n.entries);return{data:r.length&&r.map(function(t){return t.entries,g({data:(0,o.Z)(t,["entries"]),entries:i})}),locale:e,entries:i}},w=function(t){var e=t.query,n=t.contentType,r=t.fieldName,a=void 0===r?s.mA.slug:r,u=t.fieldValue,c=t.include,d=void 0===c?s.Rj:c,l=t.locale,f=(0,o.Z)(t,["query","contentType","fieldName","fieldValue","include","locale"]);return(0,i.Z)({contentType:n,environment:e[s.I_]||"",fieldName:a,fieldValue:u,include:d,language:l,preview:e[s.Sz]||!1},f)},y=function(t){var e=t.trackAnalytics,n=f(t.entries,(void 0===e?{}:e).id)||{};return{action:n.dataTrackEventAction,section:n.dataTrackPageSection,label:n.dataTrackEventLabel}},Z=function(t){var e,n,r,i,a=t.image,o=t.srcSet,u=t.fit;return a&&a.url?{height:null==a?void 0:null===(e=a.details)||void 0===e?void 0:null===(n=e.image)||void 0===n?void 0:n.height,id:a.id,title:a.title,description:a.description||a.title,url:a.url,width:null==a?void 0:null===(r=a.details)||void 0===r?void 0:null===(i=r.image)||void 0===i?void 0:i.width,type:a.contentType,srcSet:o,fit:u}:{}},b=function(t){var e=t.fields,n=void 0===e?{}:e,r=n.breadcrumbTitle,i=n.breadcrumbParent,a=(void 0===i?{}:i).id,o=n.breadcrumbUrl,u=t.id,c=t.entries,d=t.previousCrumbs;if(!u||!r)return d||null;var l={id:u,title:r,href:getTransformedShutterstockUrl(o)},s=d?_to_consumable_array(d).concat([l]):[l];return a?b({fields:f(c,a),id:a,entries:c,previousCrumbs:s}):s},k=function(t){var e=t.url,n=t.alt,r=e;if(e){var i=e.startsWith("//")?"https:".concat(e):e;r=(0,l.r9)({imageUrl:i,width:s.oL,height:s.V5})}return{url:r,width:s.oL,height:s.V5,alt:n}},C=function(t){var e=t.heroSize;return t.isSplitHero?d.MN:e===s.dw?d.bn:d.Os},T=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).items;return(null==t?void 0:t.length)>=3},P=function(t){var e=t.layout,n=t.items;return e===s.dx&&T({items:n})},L=function(t){var e=t.layout,n=t.items;return e===s.Gr&&T({items:n})},S=function(t){var e=t.layout||s.C6;return{breakpointColumns:s.NF[e][s.j$],assetGridLayout:e}},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return 4===t.length},O=function(t){var e=t.playerType,n=t.videoId;switch(e){case s.VU:return"https://www.youtube.com/embed/".concat(n);case s.iC:return"https://player.vimeo.com/video/".concat(n,"?title=0&byline=0&portrait=0");default:return null}},x=function(t){return t.contentType===s.wF.imageLinksItem},B=function(t){return t.contentType===s.wF.featuredCollectionCard},F=function(t){return t===s.wF.hero},N=function(t){return t.contentNamespace===s.wF.tabtable},M=function(t){var e,n,r,i,a,o=null!==(r=null==t?void 0:null===(e=t.fields)||void 0===e?void 0:null===(n=e.modules)||void 0===n?void 0:n.en)&&void 0!==r?r:[],u=null!==(i=null==t?void 0:t.entries)&&void 0!==i?i:[];return u.length>0&&o.length>0&&(a=o.map(function(t){return u.find(function(e){var n;return e.id===(null==t?void 0:null===(n=t.sys)||void 0===n?void 0:n.id)})})),a},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return Object.values(t).filter(function(t){return t.contentType===e})},U=function(t,e){if(c.j){var n=Error(t);throw n.componentName=e,n}return null}},33701:function(t,e,n){n.d(e,{AS:function(){return m},Hm:function(){return p},MN:function(){return l},Os:function(){return f},US:function(){return u},bn:function(){return s}});var r=n(70865),i=n(96670),a=n(87394),o=1/n(13011).Th,u=1,c=function(t){var e=t.width;return{width:e,height:Math.round(e/t.aspect)}},d=function(t){return Object.keys(t).reduce(function(e,n){var o=t[n],u=o.widths,d=o.aspect,l=(0,a.Z)(u,2),s=l[0],f=l[1];return e[n]=[(0,i.Z)((0,r.Z)({},c({width:s,aspect:d})),{descriptor:"1x"}),(0,i.Z)((0,r.Z)({},c({width:f||s,aspect:d})),{descriptor:"2x"})],e},{})},l=d({xl:{widths:[2560,3840],aspect:1},lg:{widths:[2200,2880],aspect:1},md:{widths:[1280,2560],aspect:1},sm:{widths:[1024,1536],aspect:1},default:{widths:[600,900],aspect:1}}),s=d({xl:{widths:[2560,3840],aspect:6.4},lg:{widths:[2200,2880],aspect:4.8},md:{widths:[1280,2560],aspect:3.2},sm:{widths:[1024,1536],aspect:2.56},default:{widths:[600,900],aspect:1.5}}),f=d({xl:{widths:[2560,3840],aspect:3.5},lg:{widths:[2200,2880],aspect:3.2},md:{widths:[1280,2560],aspect:2.56},sm:{widths:[1024,1536],aspect:2.56},default:{widths:[600,900],aspect:1.5}});d({lg:{widths:[840,1200],aspect:o},md:{widths:[700,820],aspect:o},sm:{widths:[560,820],aspect:o},default:{widths:[600,900],aspect:o}});var p=1.4;d({xl:{widths:[500,850],aspect:.7142857142857143},lg:{widths:[400,525],aspect:.7142857142857143},md:{widths:[300,470],aspect:.7142857142857143},sm:{widths:[315,450],aspect:.7142857142857143},default:{widths:[400,650],aspect:.7142857142857143}}),d({lg:{widths:[920,1200],aspect:1.75},md:{widths:[600,720],aspect:1.75},sm:{widths:[560,820],aspect:1.75},default:{widths:[600,900],aspect:1.75}}),d({lg:{widths:[130,320],aspect:u},md:{widths:[100,175],aspect:u},sm:{widths:[60,165],aspect:u},xs:{widths:[40,100],aspect:u},default:{widths:[60,150],aspect:u}}),d({lg:{widths:[900,1020],aspect:.88},md:{widths:[800,920],aspect:.88},sm:{widths:[600,720],aspect:.88},default:{widths:[520,625],aspect:.88}}),d({lg:{widths:[600,570],aspect:.89},sm:{widths:[320,520],aspect:.89},default:{widths:[520,725],aspect:.89}}),d({lg:{widths:[750,1200],aspect:1.77},md:{widths:[700,900],aspect:1.77},sm:{widths:[600,720],aspect:1.77},default:{widths:[520,725],aspect:1.77}});var m=d({lg:{widths:[1280],aspect:1.5},md:{widths:[1024],aspect:1.5},sm:{widths:[480],aspect:1.5},default:{widths:[600],aspect:1.5}})},25721:function(t,e,n){n.d(e,{Bl:function(){return v},Dt:function(){return h},FJ:function(){return a},LA:function(){return p},TC:function(){return m},Vy:function(){return o},am:function(){return g},r9:function(){return f},sw:function(){return w}});var r=n(87394),i=n(43822),a="webp",o="jpg",u="fm=".concat(a),c="fm=".concat(o),d="fill",l=/jpe?g$/i,s=/(jpe?g|png|tiff|webp)$/i,f=function(t){var e=t.imageUrl,n=t.width,i=t.height,l=t.fit,s=t.typeOfImage,f=void 0===s?"":s,p=t.quality,m=(0,r.Z)(e.split("?"),2),g=m[0],h=m[1],v=[];h&&(v=h.split("&")),v.push("".concat("fit=").concat(void 0===l?d:l)),v.push("".concat("w=").concat(n)),v.push("".concat("h=").concat(i)),p&&v.push("".concat("q=").concat(p)),f===o?(v.push(c),v.push("fl=progressive")):f===a&&v.push(u);var w=v.join("&");return"".concat(g,"?").concat(w)},p=function(t){var e=t.srcSetSizes,n=t.imageUrl,r=t.fit,i=void 0===r?d:r,a=t.typeOfImage,o=void 0===a?"":a;return e.map(function(t){var e=t.width,r=t.height,a=t.descriptor;return"".concat(f({imageUrl:n,width:e,height:r,fit:i,typeOfImage:o})," ").concat(a||"".concat(e,"w"))}).join(", ")},m=function(t){return!!t&&!!t.match(l)},g=function(t){return!!t&&!!t.match(s)},h=function(t){return"(min-width: ".concat(parseInt(i.w.breakpoints.values[t],10)+1,"px)")},v=function(t){var e=t.srcSetSizes,n=t.imageUrl,r=t.fit;return f({imageUrl:n,width:e[0].width,height:e[0].height,fit:void 0===r?"fill":r})},w=function(t){var e=t.srcSetSizes,n={width:0,height:0};return Array.isArray(e)&&e.length&&(n.width="object"==typeof e[0]&&e[0].width||0,n.height="object"==typeof e[0]&&e[0].height||0),n}},53957:function(t,e,n){n.d(e,{$U:function(){return tv},$o:function(){return td},AE:function(){return z},C6:function(){return y},Cs:function(){return tm},DT:function(){return tg},E4:function(){return ts},ED:function(){return tr},FB:function(){return Z},Gr:function(){return C},IH:function(){return to},I_:function(){return N},JX:function(){return tF},Jh:function(){return ta},Ji:function(){return x},Kk:function(){return tf},Kt:function(){return ti},NF:function(){return O},Nt:function(){return tb},ON:function(){return tL},O_:function(){return q},QN:function(){return tl},Qh:function(){return W},Rj:function(){return U},SZ:function(){return tk},Sz:function(){return M},V5:function(){return G},VH:function(){return B},VU:function(){return Q},VV:function(){return tC},Vb:function(){return $},Wl:function(){return V},Xr:function(){return tc},Y0:function(){return tw},Yn:function(){return tp},_E:function(){return T},_M:function(){return tZ},_y:function(){return K},b2:function(){return th},cJ:function(){return X},cb:function(){return tu},dv:function(){return tT},dw:function(){return E},dx:function(){return k},e_:function(){return tn},fG:function(){return P},gD:function(){return tS},gO:function(){return tt},iC:function(){return Y},j$:function(){return S},ki:function(){return b},ld:function(){return D},mA:function(){return w},n8:function(){return R},nf:function(){return te},nu:function(){return ty},oL:function(){return A},oN:function(){return tN},om:function(){return tx},ps:function(){return tP},r3:function(){return tB},s6:function(){return j},sn:function(){return F},tS:function(){return tI},uB:function(){return tO},wF:function(){return v},xJ:function(){return J},zf:function(){return _},zo:function(){return H}});var r,i,a,o,u,c,d,l,s,f,p,m=n(47842),g=n(70865),h=n(96670),v={artistCard:"artistCard",assetItem:"assetItem",assetGrid:"assetGrid",audioTrackList:"audioTrackList",breadcrumb:"breadcrumb",button:"ctaButton",carousel:"carousel",newCategoryPages:"categoryPage",categoryPages:"categoryPages",cmsBanner:"cmsBanner",cmsFaq:"cmsFaq",cmsFaqItem:"cmsFaqItem",copyText:"copyText",discoverLandingPage:"discoverLandingPage",dropdownOption:"dropdownOption",enterpriseLandingPage:"enterpriseLandingPage",featuredCollection:"featuredCollection",featuredCollectionCard:"featuredCollectionCard",fetchComponentsContainer:"fetchComponentsContainer",fetchContainerDynamicModule:"fetchContainerDynamicModule",footageHeroMedia:"footageHeroMedia",form:"form",formField:"formField",gatedDownload:"gatedDownload",gatedDownloadTextOnly:"gatedDownloadTextOnly",gatedDownloadItem:"gatedDownloadItem",hero:"hero",heroSecondaryBanner:"heroSecondaryBanner",homePage:"homePage",iconValueProp:"iconValueProp",iconValuePropItem:"iconValuePropItem",imageGrid:"imageGrid",imageBulletedList:"imageBulletedList",imageHeroMedia:"imageHeroMedia",imageLinks:"imageLinks",imageLinksItem:"imageLinksItem",imageParagraphItem:"imageParagraphItem",imageParagraphs:"imageParagraphs",linksList:"linksList",link:"link",marketingLandingPage:"marketingLandingPage",metadata:"metadata",multiPricingCard:"multiPricingCard",multiPricingCardItem:"multiPricingCardItem",modal:"modal",pricingPage:"pricingPage",pricingCard:"pricingCard",registrationloginForm:"registrationloginForm",royaltyFreeLandingPage:"royaltyFreeLandingPage",searchBar:"searchBar",selectorForm:"selectorForm",socialShare:"socialShare",subCategoryPages:"subcategoryPages",tabTable:"tabTable",tabTableItem:"tabTableItem",trustMarks:"trustMarks",video:"video",videoGrid:"videoGrid",templateCategoryPage:"templateCategoryPage",developersLandingPage:"developersLandingPage",bulletedText:"bulletedText",appStoreBadge:"appStoreBadge",appStoreBadgeItem:"appStoreBadgeItem",videoShowcase:"videoShowcase",productInfo:"productInfo",spacingModule:"spacingModule"},w={slug:"slug",path:"path",pathSlug:"pathSlug",collectionId:"collectionId",tabTableEntryTitle:"tabTableEntryTitle"},y="3 column - No Description",Z="4 column - Description Under Image",b="3 column - Overlay",k="Large first image - Overlay",C="4 column - Right Side",T="Full row first image - No Overlay",P={xs:12,sm:6,md:4,lg:4,xl:4},L=(0,h.Z)((0,g.Z)({},P),{lg:3,xl:3}),S="breakpoints",I="overlay";l={},(0,m.Z)(l,b,(r={},(0,m.Z)(r,S,P),(0,m.Z)(r,I,!0),r)),(0,m.Z)(l,"3 column - Under Image",(i={},(0,m.Z)(i,S,P),(0,m.Z)(i,I,!1),i)),(0,m.Z)(l,k,(a={},(0,m.Z)(a,S,P),(0,m.Z)(a,I,!0),a)),(0,m.Z)(l,"4 column - Overlay",(o={},(0,m.Z)(o,S,L),(0,m.Z)(o,I,!0),o)),(0,m.Z)(l,"4 column - Under Image",(u={},(0,m.Z)(u,S,L),(0,m.Z)(u,I,!1),u)),(0,m.Z)(l,C,(c={},(0,m.Z)(c,S,(0,h.Z)((0,g.Z)({},L),{xs:6})),(0,m.Z)(c,I,!1),c)),(0,m.Z)(l,T,(d={},(0,m.Z)(d,S,P),(0,m.Z)(d,I,!1),d));var O=(s={},(0,m.Z)(s,y,(0,m.Z)({},S,{xs:1,sm:2,md:3})),(0,m.Z)(s,Z,(0,m.Z)({},S,{xs:6,sm:3,md:3,lg:3,xl:3})),s),x="Black Mode",B="Dark Mode",F="Light Mode",N="cms-env",M="cms-preview",V="contributor",U="entries",D="media-items",_="sizes",j="track-assets",A=1200,G=630,E="short",H="left",q="right",z="center";f={},(0,m.Z)(f,"noTopNav","No Top Navigation"),(0,m.Z)(f,I,"Overlay"),(0,m.Z)(f,"navPlusSearch","Top Navigation + Search Bar"),(0,m.Z)(f,"navPlusUtility","Top Navigation + Utility Bar"),(0,m.Z)(f,"navPlusSearchPlusUtility","Top Navigation + Search Bar + Utility Bar");var R={primary:"Primary",outline:"Outline",outlineDarkMode:"Outline - Dark Mode",blackOutline:"BlackOutline",whiteOutline:"WhiteOutline",blackFill:"BlackFill",whiteFill:"WhiteFill",blackTransparent:"BlackTransparent",whiteTransparent:"WhiteTransparent",primaryRed:"PrimaryRed"},J="contained",W="outlined",$="secondary",K="Horizontal",Q="Youtube",Y="Vimeo",X="Laptop",tt="above",te="inset",tn="Inline",tr="List",ti="inline",ta="left",to="center",tu="right",tc="dark-text",td="light-text",tl="column-contained",ts="full-bleed",tf="short",tp="tall",tm=(0,m.Z)({orderedList:"orderedList"},v.linksList,v.linksList),tg=(p={},(0,m.Z)(p,v.appStoreBadge,v.appStoreBadge),(0,m.Z)(p,v.hero,v.hero),(0,m.Z)(p,v.imageGrid,v.imageGrid),(0,m.Z)(p,v.imageLinks,v.imageLinks),(0,m.Z)(p,v.imageParagraphs,v.imageParagraphs),(0,m.Z)(p,v.video,v.video),p),th="standard",tv="eloqua",tw="selector",ty={right:"Right",left:"Left",bgcolor:"Background color",image:"Image",upperLeft:"upper left",withContent:"align with content",red:"Red",black:"Black",split:"Split",long:"long",short:"short",white:"#fff",carousel:"Carousel"},tZ="30vh",tb="40vh",tk="550px",tC="blur(3px)",tT="Small",tP="Medium",tL="Large",tS="fill",tI="Wide Cards - Centered Overlay",tO="Wide Cards - Bottom Overlay",tx="Vertical Cards - Bottom Overlay",tB="Text below the cards",tF={small:"Small",medium:"Medium",large:"Large"},tN={"/":"/search","":"/search","/images":"/search","/video":"/video/search","/music":"/music/search","/editorial":"/editorial/search","/templates":"/templates/search"}},44699:function(t,e,n){n.d(e,{H_:function(){return i},MR:function(){return o},br:function(){return a},cM:function(){return u},pn:function(){return r}});var r="error",i="info",a="loading",o="success",u="warning"},42405:function(t,e,n){n.d(e,{D:function(){return a}});var r=n(2784),i=n(67103),a=function(){return(0,r.useContext)(i.S)}},9009:function(t,e,n){n.d(e,{O:function(){return s}});var r=n(47842),i=n(70865),a=n(96670),o=function(t){return null==t?void 0:t.meta},u=function(t){return null==t?void 0:t.attributes},c=function(t){return null==t?void 0:t.relationships},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(e,n){var r=t.find(function(t){return t.type===e.type&&t.id===e.id})||e,d=u(r);return c(r)&&(d=(0,i.Z)({},d,l(t)(r))),(o(r)||n)&&(d=(0,a.Z)((0,i.Z)({},d),{meta:(0,i.Z)({},o(r),n)})),(0,i.Z)({id:r.id,type:r.type},d)}},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(e){var n=c(e);return n?Object.keys(n).reduce(function(e,o){var u,c=n[o],l=c.data,s=c.meta;return l?(u=Array.isArray(l)?l.map(function(e){return d(t)(e,s)}):d(t)(l),(0,a.Z)((0,i.Z)({},e),(0,r.Z)({},o,u))):e},{}):[]}},s=function(t){var e,n=t.meta||(null===(e=t.data)||void 0===e?void 0:e.meta)||{};if(!t.jsonapi&&!t.data)return t;var r=t.data,o=t.included;return Array.isArray(r)?r.map(function(t){return(0,a.Z)((0,i.Z)({id:t.id,type:t.type},u(t),l(o)(t)),{meta:n})}):(0,a.Z)((0,i.Z)({id:r.id,type:r.type},u(r),l(o)(r)),{meta:n})}}}]);
//# sourceMappingURL=64699-18ca1cd92adf7503.js.map
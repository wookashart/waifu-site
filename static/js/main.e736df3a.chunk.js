(this["webpackJsonpwaifu-site"]=this["webpackJsonpwaifu-site"]||[]).push([[0],{138:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),i=a(13),o=a.n(i),s=a(10),l=a(16),u=(a(138),a(18)),d=a(205),j=a(206),b=a(199),p=a(59),h=a(195),f=a(11),O=a(51),x=a.n(O),g=a(80),m=a.n(g),v=a(98),y=a(12),w=a(220),k=a(222),C=a(204),S=a(42),N=a.n(S),I=a(166),D=a(201),T=a(200),z=a(223),L=Object(h.a)((function(e){return{root:{flexGrow:1,textDecoration:"none"},img:{width:"35px",height:"35px",borderRadius:"50%",border:"3px solid #3f51b5"},text:{textDecoration:"none",color:"black",fontSize:"20px",marginLeft:"10px"},name:{textDecoration:"none",fontSize:"20px",color:"black",marginLeft:"10px"},rank:{fontSize:"10px"},list:{width:"100%",maxWidth:300,backgroundColor:e.palette.background.paper}}}));function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(t){setTimeout(t,e)}))}function P(){L();var e=Object(c.useState)(""),t=Object(y.a)(e,2),a=t[0],i=t[1],o=Object(c.useState)(!1),l=Object(y.a)(o,2),u=l[0],d=l[1],j=Object(c.useState)([]),b=Object(y.a)(j,2),p=b[0],h=b[1],f=u&&0===p.length,O=Object(c.useState)(),x=Object(y.a)(O,2),g=x[0],S=x[1];return Object(c.useEffect)((function(){if(f)return a.length>3&&Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({method:"post",url:"https://api.sanakan.pl/api/User/find",headers:{"Content-Type":"application/json",Accept:"*/*"},data:JSON.stringify(a)}).then((function(e){return R(5e3),e.data}));case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})))(),function(){!1}}),[f,a]),Object(c.useEffect)((function(){u||h([]),i("")}),[u]),Object(c.useEffect)((function(){h([])}),[a]),Object(c.useEffect)((function(){var e;void 0!==(e=g)&&(window.location.href="#/user/".concat(e.id,"/profile"),window.location.reload())}),[g]),Object(n.jsx)(k.a,{id:"search",disabledItemsFocusable:!0,style:{width:300},open:u,disableCloseOnSelect:!0,onOpen:function(){a.length>1&&d(!0)},onClose:function(){d(!1)},options:p,selectOnFocus:!1,getOptionSelected:function(e,t){return e.id===t.id&&(console.log("xxxx",e,t),S(t)),e.name===t.name},getOptionLabel:function(e){return e.name},renderOption:function(e,t){t.selected;return Object(n.jsxs)(I.a,{children:[Object(n.jsx)(T.a,{children:Object(n.jsx)(z.a,{alt:"Avatar ".concat(e.id),src:e.avatarUrl})}),Object(n.jsx)(D.a,{id:e.id,primary:e.name,secondary:e.rank})]},e.id)},loading:f,renderInput:function(e){return Object(n.jsx)(w.a,Object(s.a)(Object(s.a)({},e),{},{label:"Szukaj u\u017cytkownika",variant:"standard",onChange:function(e){return i(e.target.value)},InputProps:Object(s.a)(Object(s.a)({},e.InputProps),{},{endAdornment:Object(n.jsxs)(r.a.Fragment,{children:[f?Object(n.jsx)(C.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}var E=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(u.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(f.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(f.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),width:"100%"}}}));function B(e){var t=E();return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(d.a,{position:"static",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(b.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",href:"#/",children:Object(n.jsx)(x.a,{})}),Object(n.jsx)(p.a,{className:t.title,variant:"h6",noWrap:!0,children:"Pocket-Waifu"}),Object(n.jsx)(P,Object(s.a)({},e))]})})})}var F=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B,Object(s.a)({},e)),Object(n.jsx)("div",{className:"divWhite",children:"/user/85/cards"}),Object(n.jsx)("div",{className:"divWhite",children:"/user/85/profile"})]})},A=(a(107),a(167)),W=Object(h.a)((function(e){return{root:{width:"100%",maxWidth:300,backgroundColor:e.palette.background.paper}}}));function G(e){var t=W(),a=r.a.useState([1]),c=Object(y.a)(a,2);c[0],c[1];return Object(n.jsx)(A.a,{dense:!0,className:t.root,children:[0,1,2,3].map((function(e){var t="checkbox-list-secondary-label-".concat(e);return Object(n.jsxs)(I.a,{button:!0,children:[Object(n.jsx)(T.a,{children:Object(n.jsx)(z.a,{alt:"Avatar n\xb0".concat(e+1),src:"http://cdn.shinden.eu/cdn1/avatars/225x350/85.jpg?v14"})}),Object(n.jsx)(D.a,{id:t,primary:"Line item ".concat(e+1)})]},e)}))})}var J=function(e){var t=e.match,a=(e.history,t.params.userID);return Object(n.jsx)("div",{children:"user id: ".concat(a)})},U=a(216),M=a(217),q=a(218),H=a(219),K=a(212),V=a(210),Z=a(221),_=a(213),Q=a(214),X=a(71),Y=a.n(X),$=a(211),ee=a(106),te=a.n(ee),ae=a(209),ne=a(168),ce=a(224),re=a(103),ie=a.n(re),oe=a(105),se=a.n(oe),le=a(104),ue=a.n(le),de=a(81),je=a.n(de),be=a(207),pe=a(202),he=a(109),fe=a(198),Oe=a(208),xe=a(203),ge=Object(h.a)((function(e){return{root:{flexGrow:1,bottom:e.spacing(2),right:e.spacing(2)},barColor:{borderTop:"1px solid rgba(0,0,0,0.1)",backgroundColor:"#364596"},button:{margin:e.spacing(1)},delete:{color:"#ffffff"},left:{marginLeft:"auto"},center:{marginLeft:"auto",marginRight:"auto"},searchRes:{position:"absolute",backgroundColor:"green",width:"300px",height:"300px"},search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(f.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(f.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"220px"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),width:"100%"}}}));function me(e){var t=e.props,a=e.profileData,i=ge(),o=t.match,l=(t.history,o.params.userID),u=Object(c.useState)(""),p=Object(y.a)(u,2),h=p[0],f=p[1];var O=r.a.useState(!1),x=Object(y.a)(O,2),g=x[0],m=x[1],v=r.a.useRef(null),w=r.a.useState(a.tagList.map((function(e){return{value:e,choice:null}}))),k=Object(y.a)(w,2),C=k[0],S=k[1],N=r.a.useState(!1),I=Object(y.a)(N,2),D=I[0],T=I[1],z=function(e){v.current&&v.current.contains(e.target)||m(!1)},L=function(e){if(null!==e.choice)return"assign"===e.choice?{color:"green"}:"reject"===e.choice?{color:"red"}:void 0},R=r.a.useState(!1),P=Object(y.a)(R,2),E=P[0],B=P[1],F=r.a.useRef(null),A=r.a.useState(0),W=Object(y.a)(A,2),G=W[0],J=W[1],U=["Id","Nazwa","Ranga","Tytu\u0142 anime","\u017bycie","Bazowe \u017cycie","Atak","Obrona","Do\u015bwiadczenie","Dere","Obrazek"],M=r.a.useState(U.map((function(e){return{value:e,choice:null}}))),q=Object(y.a)(M,2),H=q[0],K=q[1],V=r.a.useState(!1),Z=Object(y.a)(V,2),_=Z[0],Q=Z[1],X=function(e){switch(e){case null:case"reject":return"assign";case"assign":return"reject";default:return null}},Y=function(e){F.current&&F.current.contains(e.target)||B(!1)},$=function(e){if(null!==e.choice)return"assign"===e.choice?{color:"green"}:"reject"===e.choice?{color:"red"}:void 0};var ee=function(){var e=function(e){switch(e.value){case"Id":if("assign"===e.choice)return"id";if("reject"===e.choice)return"idDes";case"Nazwa":if("assign"===e.choice)return"name";if("reject"===e.choice)return"nameDes";case"Ranga":if("assign"===e.choice)return"rarity";if("reject"===e.choice)return"rarityDes";case"Tytu\u0142 anime":if("assign"===e.choice)return"title";if("reject"===e.choice)return"titleDes";case"\u017bycie":if("assign"===e.choice)return"health";if("reject"===e.choice)return"healthDes";case"Bazowe \u017cycie":if("assign"===e.choice)return"healthBase";if("reject"===e.choice)return"healthBaseDes";case"Atak":if("assign"===e.choice)return"atack";if("reject"===e.choice)return"atackDes";case"Obrona":if("assign"===e.choice)return"defence";if("reject"===e.choice)return"defenceDes";case"Do\u015bwiadczenie":if("assign"===e.choice)return"exp";if("reject"===e.choice)return"expDes";case"Dere":if("assign"===e.choice)return"dere";if("reject"===e.choice)return"dereDes";case"Obrazek":if("assign"===e.choice)return"picture";if("reject"===e.choice)return"pictureDes";default:return"id"}}(H[G]);console.log(H[G]);var t=[],a=[];C.map((function(e){"assign"===e.choice&&t.push(e.value),"reject"===e.choice&&a.push(e.value)}));var n={orderBy:e,includeTags:t,excludeTags:a,searchText:h},c={optionsTag:C,optionsSort:H,searchData:h,index:G};localStorage.setItem("u".concat(l,"filter"),JSON.stringify(n)),localStorage.setItem("u".concat(l,"dataFilter"),JSON.stringify(c)),console.log("reload"),window.location.reload()};return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("u".concat(l,"dataFilter")));null!==e&&(S(e.optionsTag),K(e.optionsSort),f(e.searchData),J(e.index))}),[]),Object(n.jsx)("div",{className:i.root,children:Object(n.jsx)(d.a,{position:"static",className:i.barColor,children:Object(n.jsxs)(j.a,{variant:"dense",className:i.barColor,children:[Object(n.jsxs)("div",{className:i.center,children:[Object(n.jsxs)(ne.a,{ref:F,variant:"contained",color:"primary",size:"small","aria-controls":E?"split-button-menu":void 0,"aria-expanded":E?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:function(){B((function(e){return!e}))},children:["Sortuj",Object(n.jsx)(je.a,{})]}),Object(n.jsx)(fe.a,{open:E,anchorEl:F.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,a=e.placement;return Object(n.jsx)(pe.a,Object(s.a)(Object(s.a)({},t),{},{style:{transformOrigin:"bottom"===a?"center top":"center bottom"},children:Object(n.jsx)(he.a,{children:Object(n.jsx)(be.a,{onClickAway:Y,children:Object(n.jsx)(xe.a,{id:"split-button-menu",children:H.map((function(e,t){return Object(n.jsx)(Oe.a,{selected:!1,onClick:function(e){return function(e,t){J(t);for(var a=0;a<H.length;a++){var n=H[a];H[a].choice=a!==t?null:X(n.choice)}Q(!_)}(0,t)},style:$(e),children:e.value},e.value)}))})})})}))}}),Object(n.jsxs)(ne.a,{ref:v,variant:"contained",color:"primary",size:"small","aria-controls":g?"split-button-menu":void 0,"aria-expanded":g?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:function(){m((function(e){return!e}))},children:["Tagi",Object(n.jsx)(je.a,{})]}),Object(n.jsx)(fe.a,{open:g,anchorEl:v.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,a=e.placement;return Object(n.jsx)(pe.a,Object(s.a)(Object(s.a)({},t),{},{style:{transformOrigin:"bottom"===a?"center top":"center bottom"},children:Object(n.jsx)(he.a,{children:Object(n.jsx)(be.a,{onClickAway:z,children:Object(n.jsx)(xe.a,{id:"split-button-menu",children:C.map((function(e,t){return Object(n.jsx)(Oe.a,{onClick:function(e){return function(e,t){var a,n=null===(a=C[t]).choice?{value:a.value,choice:"assign"}:"assign"===a.choice?{value:a.value,choice:"reject"}:(a.choice,{value:a.value,choice:null});C[t]=n,T(!D)}(0,t)},style:L(e),children:e.value},e.value)}))})})})}))}})]}),Object(n.jsxs)("div",{className:i.search,children:[Object(n.jsx)("div",{className:i.searchIcon,children:Object(n.jsx)(ie.a,{})}),Object(n.jsx)(ce.a,{onChange:function(e){return t=e.target.value,void f(t);var t},value:h,placeholder:"Szukaj karty",classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"search"}})]}),Object(n.jsxs)("div",{className:i.left,children:[Object(n.jsx)(ne.a,{onClick:function(){ee()},variant:"contained",color:"primary",size:"small",className:i.button,startIcon:Object(n.jsx)(ue.a,{}),children:"Zastosuj"}),Object(n.jsx)(b.a,{"aria-label":"delete",onClick:function(){return function(){K(U.map((function(e){return{value:e,choice:null}}))),J(0),S(a.tagList.map((function(e){return{value:e,choice:null}}))),f("");var e={optionsTag:C,optionsSort:H,searchData:h,index:G};localStorage.setItem("u".concat(l,"filter"),JSON.stringify({orderBy:"id",includeTags:[],excludeTags:[],searchText:null})),localStorage.setItem("u".concat(l,"dataFilter"),JSON.stringify(e))}()},className:i.delete,children:Object(n.jsx)(se.a,{})})]})]})})})}var ve=Object(h.a)((function(e){return{root:{flexGrow:1,bottom:e.spacing(2),right:e.spacing(2)},menuButton:Object(u.a)({marginRight:e.spacing(2),display:"none"},e.breakpoints.up("sm"),{display:"block"}),title:Object(u.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),card:Object(u.a)({flexGrow:1},e.breakpoints.up("sm"),{display:"block"}),icon:{color:"#ffffff"}}}));function ye(e){var t=e.props,a=e.profileData,r=ve(),i=t.match,o=(t.history,i.params.userID),l=Object(c.useState)(!1),u=Object(y.a)(l,2),h=u[0],f=u[1];return Object(n.jsx)("div",{className:r.root,children:Object(n.jsxs)(d.a,{position:"fixed",children:[Object(n.jsxs)(j.a,{children:[Object(n.jsx)(b.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"open drawer",href:"#/",children:Object(n.jsx)(x.a,{})}),Object(n.jsx)(p.a,{className:r.title,variant:"h6",noWrap:!0,children:"Pocket-Waifu"}),Object(n.jsxs)(ae.a,{disableElevation:!0,variant:"contained",color:"primary",className:r.card,children:[Object(n.jsx)(ne.a,{href:"#/user/".concat(o,"/profile"),children:"Profil"}),Object(n.jsx)(ne.a,{href:"#/user/".concat(o,"/cards"),children:"Karty"})]}),Object(n.jsx)(b.a,{className:r.icon,onClick:function(){f((function(e){return!e}))},children:Object(n.jsx)(te.a,{})}),Object(n.jsx)(P,Object(s.a)({},t))]}),Object(n.jsx)("div",{children:h?Object(n.jsx)(me,{props:t,profileData:a}):""})]})})}var we=Object(h.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function ke(e){var t=e.children,a=e.window,c=we(),r=Object(V.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return Object(n.jsx)($.a,{in:r,children:Object(n.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:c.root,children:t})})}function Ce(e){var t=e.props,a=e.profileData;return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(K.a,{}),Object(n.jsx)(ye,{props:t,profileData:a}),Object(n.jsx)(j.a,{id:"back-to-top-anchor"}),Object(n.jsx)(_.a,{children:Object(n.jsx)(Z.a,{my:2})}),Object(n.jsx)(ke,Object(s.a)(Object(s.a)({},t),{},{children:Object(n.jsx)(Q.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(n.jsx)(Y.a,{})})}))]})}var Se=a(215),Ne=Object(h.a)((function(e){return{cardMedia:{width:"190px",height:"276px",margin:"auto"}}})),Ie=function(e){var t=Object(c.useState)(!1),a=Object(y.a)(t,2),r=a[0],i=a[1],o=Object(c.useRef)(null),s=Ne();return Object(c.useEffect)((function(){if(!r&&o.current){var e=new IntersectionObserver((function(e){Object(y.a)(e,1)[0].intersectionRatio>0&&i(!0)}));return e.observe(o.current),function(){return e.disconnect()}}}),[r,o]),r?Object(n.jsx)(Se.a,{component:"img",image:e.image,className:s.cardMedia,alt:e.alt}):Object(n.jsx)("div",{style:{height:e.height,backgroundColor:"#EEE"},"aria-label":e.alt,ref:o})},De=Object(h.a)((function(e){return{root:{margin:"auto"},cardsContainer:{flexGrow:1,paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},cardStyle:{paddingTop:"20px",backgroundColor:"#272a33",width:"240px",height:"410px"},cardContent:{textAlign:"center",color:"white"},cardMedia:{width:"190px",height:"276px",margin:"auto"},id:{fontWeight:"bold"},link:{color:"#495dcc"}}})),Te=function(e){var t=e.match,a=(e.history,t.params.userID),r=De(),i=Object(c.useState)(),o=Object(y.a)(i,2),l=o[0],u=o[1],d=Object(c.useState)(),j=Object(y.a)(d,2),b=j[0],p=j[1],h={orderBy:"id",includeTags:[],excludeTags:[],searchText:null},f=Object(c.useState)(h),O=Object(y.a)(f,2),x=O[0],g=(O[1],Object(c.useState)(JSON.parse(localStorage.getItem("u".concat(a,"test"))))),m=Object(y.a)(g,2),v=(m[0],m[1],JSON.parse(localStorage.getItem("u".concat(a,"filter"))));Object(c.useEffect)((function(){var e;console.log("useEffect - test"),null===v&&(e=h,localStorage.setItem("u".concat(a,"filter"),JSON.stringify(e)),JSON.parse(localStorage.getItem("u".concat(a,"filter")))),console.log("localFilter",v),void 0===b&&(console.info("Pobieram dane z api - profil"),N.a.get("https://api.sanakan.pl/api/waifu/user/".concat(a,"/profile")).then((function(e){var t=e.data;p(t)})),void 0===l&&(console.info("Pobieram dane z api - karty"),N.a.post("https://api.sanakan.pl/api/waifu/user/".concat(a,"/cards/0/10000"),v).then((function(e){var t=e.data;u(t)}))))}),[x]);return Object(n.jsx)(n.Fragment,{children:l?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Ce,{props:e,profileData:b}),Object(n.jsx)(U.a,{container:!0,spacing:2,justify:"center",className:r.cardsContainer,children:l.map((function(t){return function(t){var a=t.id,c=t.imageUrl,i=t.name,o=t.animeTitle,l=t.characterUrl,u=t.isTradable,d=t.isInCage,j=t.isUnique,b=t.isUltimate,p=t.affection,h=t.tags;return Object(n.jsx)(U.a,{item:!0,children:Object(n.jsxs)(M.a,{className:r.cardStyle,children:[Object(n.jsx)(Ie,Object(s.a)({image:c,alt:a,className:r.cardMedia},e)),Object(n.jsxs)(q.a,{className:r.cardContent,children:[Object(n.jsx)("a",{className:r.id,children:a}),": ",Object(n.jsx)(H.a,{className:r.link,href:l,target:"_blank",children:i}),"".concat(h.map((function(e){return e.toLowerCase()})).indexOf("wymiana")?"":"\ud83d\udd03"),"".concat(h.map((function(e){return e.toLowerCase()})).indexOf("ulubione")?"":"\ud83d\udc97"),"".concat(h.map((function(e){return e.toLowerCase()})).indexOf("rezerwacja")?"":"\ud83d\udcdd"),"".concat(j?"\ud83d\udca0":""),"".concat(b?"\ud83c\udf96\ufe0f":""),"".concat("Pogarda"===p?"\ud83d\udc94":""),"".concat(u?" ":"\u26d4"),"".concat(d?"\ud83d\udd12":""),Object(n.jsx)("br",{}),"".concat(o)]})]})},a)}(t)}))})]}):Object(n.jsx)("center",{children:Object(n.jsx)(C.a,{size:100})})})},ze=Object(h.a)((function(e){return{root:{flexGrow:1,bottom:e.spacing(2),right:e.spacing(2)},menuButton:Object(u.a)({marginRight:e.spacing(2),display:"none"},e.breakpoints.up("sm"),{display:"block"}),title:Object(u.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),card:Object(u.a)({flexGrow:1},e.breakpoints.up("sm"),{display:"block"})}}));function Le(e){var t=ze(),a=e.match,c=(e.history,a.params.userID);return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(d.a,{position:"fixed",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(b.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",href:"#/",children:Object(n.jsx)(x.a,{})}),Object(n.jsx)(p.a,{className:t.title,variant:"h6",noWrap:!0,children:"Pocket-Waifu"}),Object(n.jsxs)(ae.a,{disableElevation:!0,variant:"contained",color:"primary",className:t.card,children:[Object(n.jsx)(ne.a,{href:"#/user/".concat(c,"/profile"),children:"Profil"}),Object(n.jsx)(ne.a,{href:"#/user/".concat(c,"/cards"),children:"Karty"})]}),Object(n.jsx)(P,Object(s.a)({},e))]})})})}var Re=Object(h.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function Pe(e){var t=e.children,a=e.window,c=Re(),r=Object(V.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return Object(n.jsx)($.a,{in:r,children:Object(n.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:c.root,children:t})})}function Ee(e){return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(K.a,{}),Object(n.jsx)(Le,Object(s.a)({},e)),Object(n.jsx)(j.a,{id:"back-to-top-anchor"}),Object(n.jsx)(_.a,{children:Object(n.jsx)(Z.a,{my:2})}),Object(n.jsx)(Pe,Object(s.a)(Object(s.a)({},e),{},{children:Object(n.jsx)(Q.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(n.jsx)(Y.a,{})})}))]})}var Be=Object(h.a)((function(e){var t;return t={root:{flexGrow:1,color:"white",textAlign:"center"},cardsContainer:{paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},cardStyle:{border:"0px",backgroundColor:"rgba(0,0,0,0)"},cardContent:{textAlign:"center",color:"white"},cardMedia:{width:"190px",height:"276px"},details:{display:"block",float:"left",flexDirection:"column"},content:{backgroundColor:"#272a33",flex:"1 0 auto",padding:"auto",marginLeft:"auto",marginRight:"auto"},cover:{width:"100px"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},paper:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}},profileCards:{alignItems:"center",margin:"auto",paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px",paddingBottom:"20px"},img:{width:"475px",height:"677px",marginLeft:"auto"}},Object(u.a)(t,"details",{textAlign:"left",paddingTop:"50px",fontSize:"32px"}),Object(u.a)(t,"exchangeConditions",{paddingTop:"25px",paddingBottom:"20px",fontSize:"25px"}),t})),Fe=function(e){var t=e.match,a=(e.history,t.params.userID),r=Be(),i=Object(c.useState)(),o=Object(y.a)(i,2),l=o[0],u=o[1];Object(c.useEffect)((function(){N.a.get("https://api.sanakan.pl/api/waifu/user/".concat(a,"/profile")).then((function(e){var t=e.data;u(t)}))}),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Ee,Object(s.a)({},e)),Object(n.jsx)("div",{className:r.root,children:l?Object(n.jsxs)("div",{className:r.root,children:[Object(n.jsx)("div",{children:Object(n.jsxs)(U.a,{container:!0,spacing:3,className:r.profileCards,children:[Object(n.jsx)(U.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(Se.a,{component:"img",image:l.waifu.profileImageUrl,alt:l.waifu.id,className:r.img})},l.waifu.profileImageUrl),Object(n.jsx)(U.a,{item:!0,xs:12,sm:6,children:Object(n.jsxs)("div",{className:r.details,children:["Posiadane karty:",Object(n.jsxs)("div",{children:["SSS: ","".concat(l.sssCount)]}),Object(n.jsxs)("div",{children:["SS: ","".concat(l.ssCount)]}),Object(n.jsxs)("div",{children:["S: ","".concat(l.sCount)]}),Object(n.jsxs)("div",{children:["A: ","".concat(l.aCount)]}),Object(n.jsxs)("div",{children:["B: ","".concat(l.bCount)]}),Object(n.jsxs)("div",{children:["C: ","".concat(l.cCount)]}),Object(n.jsxs)("div",{children:["D: ","".concat(l.dCount)]}),Object(n.jsxs)("div",{children:["E: ","".concat(l.eCount)]}),Object(n.jsxs)("div",{children:["Wszystkie: ","".concat(function(e){return e.sssCount+e.ssCount+e.sCount+e.aCount+e.bCount+e.cCount+e.dCount+e.eCount}(l),"/").concat(l.maxCardCount)]})]})},l.waifu.id)]})}),Object(n.jsx)("div",{className:r.exchangeConditions,children:l.exchangeConditions}),Object(n.jsx)("div",{children:l.gallery?Object(n.jsx)(U.a,{container:!0,justify:"center",alignItems:"baseline",spacing:2,className:r.cardsContainer,children:l.gallery.map((function(t){return function(t){var a=t.profileImageUrl,c=t.id;return Object(n.jsx)(U.a,{item:!0,children:Object(n.jsx)(M.a,{variant:"outlined",className:r.cardStyle,children:Object(n.jsx)(Ie,Object(s.a)({image:a,alt:c,className:r.cardMedia},e))})},c)}(t)}))}):""})]}):Object(n.jsx)("center",{children:Object(n.jsx)(C.a,{size:100})})})]})};var Ae=function(){return Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(F,Object(s.a)({},e))}}),Object(n.jsx)(l.a,{exact:!0,path:"/test",render:function(e){return Object(n.jsx)(G,Object(s.a)({},e))}}),Object(n.jsx)(l.a,{exact:!0,path:"/user/:userID",render:function(e){return Object(n.jsx)(J,Object(s.a)({},e))}}),Object(n.jsx)(l.a,{exact:!0,path:"/user/:userID/Cards",render:function(e){return Object(n.jsx)(Te,Object(s.a)({},e))}}),Object(n.jsx)(l.a,{exact:!0,path:"/user/:userID/Profile",render:function(e){return Object(n.jsx)(Fe,Object(s.a)({},e))}})]})},We=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,226)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},Ge=a(79),Je=a(21),Ue=Object(Je.a)();o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Ge.a,{history:Ue,children:Object(n.jsx)(Ae,{})})}),document.getElementById("root")),We()}},[[163,1,2]]]);
//# sourceMappingURL=main.e736df3a.chunk.js.map
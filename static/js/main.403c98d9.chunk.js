(this["webpackJsonpwaifu-site"]=this["webpackJsonpwaifu-site"]||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),i=a(13),o=a.n(i),s=a(10),l=a(16),u=a(12),d=a(194),j=a(18),b=a(204),p=a(205),h=a(198),f=a(59),O=a(11),x=a(51),g=a.n(x),m=a(81),v=a.n(m),y=a(102),w=a(219),k=a(221),S=a(203),C=a(42),N=a.n(C),I=a(165),D=a(200),T=a(199),z=a(222),L=Object(d.a)((function(e){return{root:{flexGrow:1,textDecoration:"none"},img:{width:"35px",height:"35px",borderRadius:"50%",border:"3px solid #3f51b5"},text:{textDecoration:"none",color:"black",fontSize:"20px",marginLeft:"10px"},name:{textDecoration:"none",fontSize:"20px",color:"black",marginLeft:"10px"},rank:{fontSize:"10px"},list:{width:"100%",maxWidth:300,backgroundColor:e.palette.background.paper}}}));function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(t){setTimeout(t,e)}))}function E(){L();var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],i=t[1],o=Object(c.useState)(!1),l=Object(u.a)(o,2),d=l[0],j=l[1],b=Object(c.useState)([]),p=Object(u.a)(b,2),h=p[0],f=p[1],O=d&&0===h.length,x=Object(c.useState)(),g=Object(u.a)(x,2),m=g[0],C=g[1];return Object(c.useEffect)((function(){if(O)return a.length>3&&Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({method:"post",url:"https://api.sanakan.pl/api/User/find",headers:{"Content-Type":"application/json",Accept:"*/*"},data:JSON.stringify(a)}).then((function(e){return R(5e3),e.data}));case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})))(),function(){!1}}),[O,a]),Object(c.useEffect)((function(){d||f([]),i("")}),[d]),Object(c.useEffect)((function(){f([])}),[a]),Object(c.useEffect)((function(){!function(e){if(void 0!==e){var t=JSON.parse(localStorage.getItem("lastVisited"));if(null===t){var a=[];a.unshift(e);for(var n=0;n<9;n++)a.push(null);localStorage.setItem("lastVisited",JSON.stringify(a))}else{var c=t.map((function(e){return null!==e?e.id:e}));c.includes(e.id)?(t.unshift(e),t.splice(c.indexOf(e.id)+1,1)):(t.pop(),t.unshift(e)),localStorage.setItem("lastVisited",JSON.stringify(t))}window.location.href="#/user/".concat(e.id,"/profile"),window.location.reload()}}(m)}),[m]),Object(n.jsx)(k.a,{id:"search",disabledItemsFocusable:!0,style:{width:300},open:d,disableCloseOnSelect:!0,onOpen:function(){a.length>1&&j(!0)},onClose:function(){j(!1)},options:h,selectOnFocus:!1,getOptionSelected:function(e,t){return e.id===t.id&&(console.log("xxxx",e,t),C(t)),e.name===t.name},getOptionLabel:function(e){return e.name},renderOption:function(e,t){t.selected;return Object(n.jsxs)(I.a,{children:[Object(n.jsx)(T.a,{children:Object(n.jsx)(z.a,{alt:"Avatar ".concat(e.id),src:e.avatarUrl})}),Object(n.jsx)(D.a,{id:e.id,primary:e.name,secondary:e.rank})]},e.id)},loading:O,renderInput:function(e){return Object(n.jsx)(w.a,Object(s.a)(Object(s.a)({},e),{},{label:"Szukaj u\u017cytkownika",variant:"standard",onChange:function(e){return i(e.target.value)},InputProps:Object(s.a)(Object(s.a)({},e.InputProps),{},{endAdornment:Object(n.jsxs)(r.a.Fragment,{children:[O?Object(n.jsx)(S.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}var P=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(j.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(j.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(O.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),width:"100%"}}}));function B(e){var t=P();return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(b.a,{position:"static",children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)(h.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",href:"#/",children:Object(n.jsx)(g.a,{})}),Object(n.jsx)(f.a,{className:t.title,variant:"h6",noWrap:!0,children:"Pocket-Waifu"}),Object(n.jsx)(E,Object(s.a)({},e))]})})})}var F=a(166),J=Object(d.a)((function(e){return{root:{paddingLeft:"10px",width:"100%",maxWidth:500,color:"white"},divWhite:{color:"white",fontSize:"30px",paddingLeft:"20px",paddingTop:"10px"},test:{textDecoration:"none",color:"white"}}})),W=function(e){var t=e.match,a=(e.history,t.params.userID,J()),r=Object(c.useState)(),i=Object(u.a)(r,2),o=i[0],l=i[1],d=Object(c.useState)(),j=Object(u.a)(d,2);j[0],j[1];return Object(c.useEffect)((function(){l(JSON.parse(localStorage.getItem("lastVisited")))}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B,Object(s.a)({},e)),o?Object(n.jsxs)(F.a,{dense:!0,className:a.root,children:[Object(n.jsx)("div",{className:a.divWhite,children:"Lista ostatnio odwiedzanych profili: "}),o.map((function(e){return null!==e?Object(n.jsx)("a",{className:a.test,href:"#/user/".concat(e.id,"/profile"),children:Object(n.jsxs)(I.a,{button:!0,children:[Object(n.jsx)(T.a,{children:Object(n.jsx)(z.a,{alt:"Avatar ".concat(e.id),src:e.avatarUrl})}),Object(n.jsx)(D.a,{className:a.secondary,id:e.id,primary:e.name})]},e.name)}):""})),Object(n.jsx)("div",{children:"Funkcja w trakcje produkcji... "})]}):Object(n.jsx)("div",{className:a.divWhite,children:"Nikogo ostatnio nie odwiedza\u0142e\u015b..."})]})},A=(a(111),Object(d.a)((function(e){return{root:{width:"100%",maxWidth:300,backgroundColor:e.palette.background.paper}}})));function G(e){var t=A(),a=r.a.useState([1]),c=Object(u.a)(a,2);c[0],c[1];return Object(n.jsx)(F.a,{dense:!0,className:t.root,children:[0,1,2,3].map((function(e){var t="checkbox-list-secondary-label-".concat(e);return Object(n.jsxs)(I.a,{button:!0,children:[Object(n.jsx)(T.a,{children:Object(n.jsx)(z.a,{alt:"Avatar n\xb0".concat(e+1),src:"http://cdn.shinden.eu/cdn1/avatars/225x350/85.jpg?v14"})}),Object(n.jsx)(D.a,{id:t,primary:"Line item ".concat(e+1)})]},e)}))})}var U=function(e){var t=e.match,a=(e.history,t.params.userID);return Object(n.jsx)("div",{children:"user id: ".concat(a)})},M=a(215),V=a(216),q=a(217),H=a(218),K=a(211),Z=a(209),_=a(220),Q=a(212),X=a(213),Y=a(71),$=a.n(Y),ee=a(210),te=a(110),ae=a.n(te),ne=a(208),ce=a(167),re=a(223),ie=a(107),oe=a.n(ie),se=a(109),le=a.n(se),ue=a(108),de=a.n(ue),je=a(82),be=a.n(je),pe=a(206),he=a(201),fe=a(113),Oe=a(197),xe=a(207),ge=a(202),me=Object(d.a)((function(e){return{root:{flexGrow:1,bottom:e.spacing(2),right:e.spacing(2)},barColor:{borderTop:"1px solid rgba(0,0,0,0.1)",backgroundColor:"#364596"},button:{margin:e.spacing(1)},delete:{color:"#ffffff"},left:{marginLeft:"auto"},center:{marginLeft:"auto",marginRight:"auto"},searchRes:{position:"absolute",backgroundColor:"green",width:"300px",height:"300px"},search:Object(j.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(O.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"220px"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),width:"100%"}}}));function ve(e){var t=e.props,a=e.profileData,i=me(),o=t.match,l=(t.history,o.params.userID),d=Object(c.useState)(""),j=Object(u.a)(d,2),f=j[0],O=j[1];var x=r.a.useState(!1),g=Object(u.a)(x,2),m=g[0],v=g[1],y=r.a.useRef(null),w=r.a.useState(a.tagList.map((function(e){return{value:e,choice:null}}))),k=Object(u.a)(w,2),S=k[0],C=k[1],N=r.a.useState(!1),I=Object(u.a)(N,2),D=I[0],T=I[1],z=function(e){y.current&&y.current.contains(e.target)||v(!1)},L=function(e){if(null!==e.choice)return"assign"===e.choice?{color:"green"}:"reject"===e.choice?{color:"red"}:void 0},R=r.a.useState(!1),E=Object(u.a)(R,2),P=E[0],B=E[1],F=r.a.useRef(null),J=r.a.useState(0),W=Object(u.a)(J,2),A=W[0],G=W[1],U=["Id","Nazwa","Ranga","Tytu\u0142 anime","\u017bycie","Bazowe \u017cycie","Atak","Obrona","Do\u015bwiadczenie","Dere","Obrazek"],M=r.a.useState(U.map((function(e){return{value:e,choice:null}}))),V=Object(u.a)(M,2),q=V[0],H=V[1],K=r.a.useState(!1),Z=Object(u.a)(K,2),_=Z[0],Q=Z[1],X=function(e){switch(e){case null:case"reject":return"assign";case"assign":return"reject";default:return null}},Y=function(e){F.current&&F.current.contains(e.target)||B(!1)},$=function(e){if(null!==e.choice)return"assign"===e.choice?{color:"green"}:"reject"===e.choice?{color:"red"}:void 0};var ee=function(){var e=function(e){switch(e.value){case"Id":if("assign"===e.choice)return"id";if("reject"===e.choice)return"idDes";case"Nazwa":if("assign"===e.choice)return"name";if("reject"===e.choice)return"nameDes";case"Ranga":if("assign"===e.choice)return"rarity";if("reject"===e.choice)return"rarityDes";case"Tytu\u0142 anime":if("assign"===e.choice)return"title";if("reject"===e.choice)return"titleDes";case"\u017bycie":if("assign"===e.choice)return"health";if("reject"===e.choice)return"healthDes";case"Bazowe \u017cycie":if("assign"===e.choice)return"healthBase";if("reject"===e.choice)return"healthBaseDes";case"Atak":if("assign"===e.choice)return"atack";if("reject"===e.choice)return"atackDes";case"Obrona":if("assign"===e.choice)return"defence";if("reject"===e.choice)return"defenceDes";case"Do\u015bwiadczenie":if("assign"===e.choice)return"exp";if("reject"===e.choice)return"expDes";case"Dere":if("assign"===e.choice)return"dere";if("reject"===e.choice)return"dereDes";case"Obrazek":if("assign"===e.choice)return"picture";if("reject"===e.choice)return"pictureDes";default:return"id"}}(q[A]);console.log(q[A]);var t=[],a=[];S.map((function(e){"assign"===e.choice&&t.push(e.value),"reject"===e.choice&&a.push(e.value)}));var n={orderBy:e,includeTags:t,excludeTags:a,searchText:f},c={optionsTag:S,optionsSort:q,searchData:f,index:A};localStorage.setItem("u".concat(l,"filter"),JSON.stringify(n)),localStorage.setItem("u".concat(l,"dataFilter"),JSON.stringify(c)),console.log("reload"),window.location.reload()};return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("u".concat(l,"dataFilter")));null!==e&&(C(e.optionsTag),H(e.optionsSort),O(e.searchData),G(e.index))}),[]),Object(n.jsx)("div",{className:i.root,children:Object(n.jsx)(b.a,{position:"static",className:i.barColor,children:Object(n.jsxs)(p.a,{variant:"dense",className:i.barColor,children:[Object(n.jsxs)("div",{className:i.center,children:[Object(n.jsxs)(ce.a,{ref:F,variant:"contained",color:"primary",size:"small","aria-controls":P?"split-button-menu":void 0,"aria-expanded":P?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:function(){B((function(e){return!e}))},children:["Sortuj",Object(n.jsx)(be.a,{})]}),Object(n.jsx)(Oe.a,{open:P,anchorEl:F.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,a=e.placement;return Object(n.jsx)(he.a,Object(s.a)(Object(s.a)({},t),{},{style:{transformOrigin:"bottom"===a?"center top":"center bottom"},children:Object(n.jsx)(fe.a,{children:Object(n.jsx)(pe.a,{onClickAway:Y,children:Object(n.jsx)(ge.a,{id:"split-button-menu",children:q.map((function(e,t){return Object(n.jsx)(xe.a,{selected:!1,onClick:function(e){return function(e,t){G(t);for(var a=0;a<q.length;a++){var n=q[a];q[a].choice=a!==t?null:X(n.choice)}Q(!_)}(0,t)},style:$(e),children:e.value},e.value)}))})})})}))}}),Object(n.jsxs)(ce.a,{ref:y,variant:"contained",color:"primary",size:"small","aria-controls":m?"split-button-menu":void 0,"aria-expanded":m?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:function(){v((function(e){return!e}))},children:["Tagi",Object(n.jsx)(be.a,{})]}),Object(n.jsx)(Oe.a,{open:m,anchorEl:y.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,a=e.placement;return Object(n.jsx)(he.a,Object(s.a)(Object(s.a)({},t),{},{style:{transformOrigin:"bottom"===a?"center top":"center bottom"},children:Object(n.jsx)(fe.a,{children:Object(n.jsx)(pe.a,{onClickAway:z,children:Object(n.jsx)(ge.a,{id:"split-button-menu",children:S.map((function(e,t){return Object(n.jsx)(xe.a,{onClick:function(e){return function(e,t){var a,n=null===(a=S[t]).choice?{value:a.value,choice:"assign"}:"assign"===a.choice?{value:a.value,choice:"reject"}:(a.choice,{value:a.value,choice:null});S[t]=n,T(!D)}(0,t)},style:L(e),children:e.value},e.value)}))})})})}))}})]}),Object(n.jsxs)("div",{className:i.search,children:[Object(n.jsx)("div",{className:i.searchIcon,children:Object(n.jsx)(oe.a,{})}),Object(n.jsx)(re.a,{onChange:function(e){return t=e.target.value,void O(t);var t},value:f,placeholder:"Szukaj karty",classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"search"}})]}),Object(n.jsxs)("div",{className:i.left,children:[Object(n.jsx)(ce.a,{onClick:function(){ee()},variant:"contained",color:"primary",size:"small",className:i.button,startIcon:Object(n.jsx)(de.a,{}),children:"Zastosuj"}),Object(n.jsx)(h.a,{"aria-label":"delete",onClick:function(){return function(){H(U.map((function(e){return{value:e,choice:null}}))),G(0),C(a.tagList.map((function(e){return{value:e,choice:null}}))),O("");var e={optionsTag:S,optionsSort:q,searchData:f,index:A};localStorage.setItem("u".concat(l,"filter"),JSON.stringify({orderBy:"id",includeTags:[],excludeTags:[],searchText:null})),localStorage.setItem("u".concat(l,"dataFilter"),JSON.stringify(e))}()},className:i.delete,children:Object(n.jsx)(le.a,{})})]})]})})})}var ye=Object(d.a)((function(e){return{root:{flexGrow:1,bottom:e.spacing(2),right:e.spacing(2)},menuButton:Object(j.a)({marginRight:e.spacing(2),display:"none"},e.breakpoints.up("sm"),{display:"block"}),title:Object(j.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),card:Object(j.a)({flexGrow:1},e.breakpoints.up("sm"),{display:"block"}),icon:{color:"#ffffff"}}}));function we(e){var t=e.props,a=e.profileData,r=ye(),i=t.match,o=(t.history,i.params.userID),l=Object(c.useState)(!1),d=Object(u.a)(l,2),j=d[0],O=d[1];return Object(n.jsx)("div",{className:r.root,children:Object(n.jsxs)(b.a,{position:"fixed",children:[Object(n.jsxs)(p.a,{children:[Object(n.jsx)(h.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"open drawer",href:"#/",children:Object(n.jsx)(g.a,{})}),Object(n.jsx)(f.a,{className:r.title,variant:"h6",noWrap:!0,children:"Pocket-Waifu"}),Object(n.jsxs)(ne.a,{disableElevation:!0,variant:"contained",color:"primary",className:r.card,children:[Object(n.jsx)(ce.a,{href:"#/user/".concat(o,"/profile"),children:"Profil"}),Object(n.jsx)(ce.a,{href:"#/user/".concat(o,"/cards"),children:"Karty"})]}),Object(n.jsx)(h.a,{className:r.icon,onClick:function(){O((function(e){return!e}))},children:Object(n.jsx)(ae.a,{})}),Object(n.jsx)(E,Object(s.a)({},t))]}),Object(n.jsx)("div",{children:j?Object(n.jsx)(ve,{props:t,profileData:a}):""})]})})}var ke=Object(d.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function Se(e){var t=e.children,a=e.window,c=ke(),r=Object(Z.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return Object(n.jsx)(ee.a,{in:r,children:Object(n.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:c.root,children:t})})}function Ce(e){var t=e.props,a=e.profileData;return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(K.a,{}),Object(n.jsx)(we,{props:t,profileData:a}),Object(n.jsx)(p.a,{id:"back-to-top-anchor"}),Object(n.jsx)(Q.a,{children:Object(n.jsx)(_.a,{my:2})}),Object(n.jsx)(Se,Object(s.a)(Object(s.a)({},t),{},{children:Object(n.jsx)(X.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(n.jsx)($.a,{})})}))]})}var Ne=a(214),Ie=Object(d.a)((function(e){return{cardMedia:{width:"190px",height:"276px",margin:"auto"}}})),De=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),r=a[0],i=a[1],o=Object(c.useRef)(null),s=Ie();return Object(c.useEffect)((function(){if(!r&&o.current){var e=new IntersectionObserver((function(e){Object(u.a)(e,1)[0].intersectionRatio>0&&i(!0)}));return e.observe(o.current),function(){return e.disconnect()}}}),[r,o]),r?Object(n.jsx)(Ne.a,{component:"img",image:e.image,className:s.cardMedia,alt:e.alt}):Object(n.jsx)("div",{style:{height:e.height,backgroundColor:"#EEE"},"aria-label":e.alt,ref:o})},Te=Object(d.a)((function(e){return{root:{margin:"auto"},cardsContainer:{flexGrow:1,paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},cardStyle:{paddingTop:"20px",backgroundColor:"#272a33",width:"240px",height:"410px"},cardContent:{textAlign:"center",color:"white"},cardMedia:{width:"190px",height:"276px",margin:"auto"},id:{fontWeight:"bold"},link:{color:"#495dcc"}}})),ze=function(e){var t=e.match,a=(e.history,t.params.userID),r=Te(),i=Object(c.useState)(),o=Object(u.a)(i,2),l=o[0],d=o[1],j=Object(c.useState)(),b=Object(u.a)(j,2),p=b[0],h=b[1],f={orderBy:"id",includeTags:[],excludeTags:[],searchText:null},O=Object(c.useState)(f),x=Object(u.a)(O,2),g=x[0],m=(x[1],Object(c.useState)(JSON.parse(localStorage.getItem("u".concat(a,"test"))))),v=Object(u.a)(m,2),y=(v[0],v[1],JSON.parse(localStorage.getItem("u".concat(a,"filter"))));Object(c.useEffect)((function(){var e;console.log("useEffect - test"),null===y&&(e=f,localStorage.setItem("u".concat(a,"filter"),JSON.stringify(e)),JSON.parse(localStorage.getItem("u".concat(a,"filter")))),console.log("localFilter",y),void 0===p&&(console.info("Pobieram dane z api - profil"),N.a.get("https://api.sanakan.pl/api/waifu/user/".concat(a,"/profile")).then((function(e){var t=e.data;h(t)})),void 0===l&&(console.info("Pobieram dane z api - karty"),N.a.post("https://api.sanakan.pl/api/waifu/user/".concat(a,"/cards/0/10000"),y).then((function(e){var t=e.data;d(t)}))))}),[g]);return Object(n.jsx)(n.Fragment,{children:l?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Ce,{props:e,profileData:p}),Object(n.jsx)(M.a,{container:!0,spacing:2,justify:"center",className:r.cardsContainer,children:l.map((function(t){return function(t){var a=t.id,c=t.imageUrl,i=t.name,o=t.animeTitle,l=t.characterUrl,u=t.isTradable,d=t.isInCage,j=t.isUnique,b=t.isUltimate,p=t.affection,h=t.tags;return Object(n.jsx)(M.a,{item:!0,children:Object(n.jsxs)(V.a,{className:r.cardStyle,children:[Object(n.jsx)(De,Object(s.a)({image:c,alt:a,className:r.cardMedia},e)),Object(n.jsxs)(q.a,{className:r.cardContent,children:[Object(n.jsx)("a",{className:r.id,children:a}),": ",Object(n.jsx)(H.a,{className:r.link,href:l,target:"_blank",children:i}),"".concat(h.map((function(e){return e.toLowerCase()})).indexOf("wymiana")?"":"\ud83d\udd03"),"".concat(h.map((function(e){return e.toLowerCase()})).indexOf("ulubione")?"":"\ud83d\udc97"),"".concat(h.map((function(e){return e.toLowerCase()})).indexOf("rezerwacja")?"":"\ud83d\udcdd"),"".concat(j?"\ud83d\udca0":""),"".concat(b?"\ud83c\udf96\ufe0f":""),"".concat("Pogarda"===p?"\ud83d\udc94":""),"".concat(u?" ":"\u26d4"),"".concat(d?"\ud83d\udd12":""),Object(n.jsx)("br",{}),"".concat(o)]})]})},a)}(t)}))})]}):Object(n.jsx)("center",{children:Object(n.jsx)(S.a,{size:100})})})},Le=Object(d.a)((function(e){return{root:{flexGrow:1,bottom:e.spacing(2),right:e.spacing(2)},menuButton:Object(j.a)({marginRight:e.spacing(2),display:"none"},e.breakpoints.up("sm"),{display:"block"}),title:Object(j.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),card:Object(j.a)({flexGrow:1},e.breakpoints.up("sm"),{display:"block"})}}));function Re(e){var t=Le(),a=e.match,c=(e.history,a.params.userID);return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(b.a,{position:"fixed",children:Object(n.jsxs)(p.a,{children:[Object(n.jsx)(h.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",href:"#/",children:Object(n.jsx)(g.a,{})}),Object(n.jsx)(f.a,{className:t.title,variant:"h6",noWrap:!0,children:"Pocket-Waifu"}),Object(n.jsxs)(ne.a,{disableElevation:!0,variant:"contained",color:"primary",className:t.card,children:[Object(n.jsx)(ce.a,{href:"#/user/".concat(c,"/profile"),children:"Profil"}),Object(n.jsx)(ce.a,{href:"#/user/".concat(c,"/cards"),children:"Karty"})]}),Object(n.jsx)(E,Object(s.a)({},e))]})})})}var Ee=Object(d.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function Pe(e){var t=e.children,a=e.window,c=Ee(),r=Object(Z.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return Object(n.jsx)(ee.a,{in:r,children:Object(n.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:c.root,children:t})})}function Be(e){return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(K.a,{}),Object(n.jsx)(Re,Object(s.a)({},e)),Object(n.jsx)(p.a,{id:"back-to-top-anchor"}),Object(n.jsx)(Q.a,{children:Object(n.jsx)(_.a,{my:2})}),Object(n.jsx)(Pe,Object(s.a)(Object(s.a)({},e),{},{children:Object(n.jsx)(X.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(n.jsx)($.a,{})})}))]})}var Fe=Object(d.a)((function(e){var t;return t={root:{flexGrow:1,color:"white",textAlign:"center",maxWidth:"98%"},cardsContainer:{paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},cardStyle:{border:"0px",backgroundColor:"rgba(0,0,0,0)"},cardContent:{textAlign:"center",color:"white"},cardMedia:{width:"190px",height:"276px"},details:{display:"block",float:"left",flexDirection:"column"},content:{backgroundColor:"#272a33",flex:"1 0 auto",padding:"auto",marginLeft:"auto",marginRight:"auto"},cover:{width:"100px"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},paper:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}},profileCards:{alignItems:"center",margin:"auto",paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px",paddingBottom:"20px"},img:{width:"475px",height:"677px",marginLeft:"auto"}},Object(j.a)(t,"details",{textAlign:"left",paddingTop:"50px",fontSize:"32px"}),Object(j.a)(t,"exchangeConditions",{paddingTop:"25px",paddingBottom:"20px",fontSize:"25px"}),t})),Je=function(e){var t=e.match,a=(e.history,t.params.userID),r=Fe(),i=Object(c.useState)(),o=Object(u.a)(i,2),l=o[0],d=o[1];Object(c.useEffect)((function(){N.a.get("https://api.sanakan.pl/api/waifu/user/".concat(a,"/profile")).then((function(e){var t=e.data;d(t)}))}),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Be,Object(s.a)({},e)),Object(n.jsx)("div",{className:r.root,children:l?Object(n.jsxs)("div",{className:r.root,children:[Object(n.jsx)("div",{children:Object(n.jsxs)(M.a,{container:!0,spacing:3,className:r.profileCards,children:[Object(n.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(Ne.a,{component:"img",image:l.waifu.profileImageUrl,alt:l.waifu.id,className:r.img})},l.waifu.profileImageUrl),Object(n.jsx)(M.a,{item:!0,xs:12,sm:6,children:Object(n.jsxs)("div",{className:r.details,children:["Posiadane karty:",Object(n.jsxs)("div",{children:["SSS: ","".concat(l.sssCount)]}),Object(n.jsxs)("div",{children:["SS: ","".concat(l.ssCount)]}),Object(n.jsxs)("div",{children:["S: ","".concat(l.sCount)]}),Object(n.jsxs)("div",{children:["A: ","".concat(l.aCount)]}),Object(n.jsxs)("div",{children:["B: ","".concat(l.bCount)]}),Object(n.jsxs)("div",{children:["C: ","".concat(l.cCount)]}),Object(n.jsxs)("div",{children:["D: ","".concat(l.dCount)]}),Object(n.jsxs)("div",{children:["E: ","".concat(l.eCount)]}),Object(n.jsxs)("div",{children:["Wszystkie: ","".concat(function(e){return e.sssCount+e.ssCount+e.sCount+e.aCount+e.bCount+e.cCount+e.dCount+e.eCount}(l),"/").concat(l.maxCardCount)]})]})},l.waifu.id)]})}),Object(n.jsx)("div",{className:r.exchangeConditions,children:l.exchangeConditions}),Object(n.jsx)("div",{children:l.gallery?Object(n.jsx)(M.a,{container:!0,justify:"center",alignItems:"baseline",spacing:2,className:r.cardsContainer,children:l.gallery.map((function(t){return function(t){var a=t.profileImageUrl,c=t.id;return Object(n.jsx)(M.a,{item:!0,children:Object(n.jsx)(V.a,{variant:"outlined",className:r.cardStyle,children:Object(n.jsx)(De,Object(s.a)({image:a,alt:c,className:r.cardMedia},e))})},c)}(t)}))}):""})]}):Object(n.jsx)("center",{children:Object(n.jsx)(S.a,{size:100})})})]})};var We=function(){return Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(W,Object(s.a)({},e))}}),Object(n.jsx)(l.a,{exact:!0,path:"/test",render:function(e){return Object(n.jsx)(G,Object(s.a)({},e))}}),Object(n.jsx)(l.a,{exact:!0,path:"/user/:userID",render:function(e){return Object(n.jsx)(U,Object(s.a)({},e))}}),Object(n.jsx)(l.a,{exact:!0,path:"/user/:userID/Cards",render:function(e){return Object(n.jsx)(ze,Object(s.a)({},e))}}),Object(n.jsx)(l.a,{exact:!0,path:"/user/:userID/Profile",render:function(e){return Object(n.jsx)(Je,Object(s.a)({},e))}})]})},Ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,225)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},Ge=a(80),Ue=a(21),Me=Object(Ue.a)();o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Ge.a,{history:Me,children:Object(n.jsx)(We,{})})}),document.getElementById("root")),Ae()}},[[162,1,2]]]);
//# sourceMappingURL=main.403c98d9.chunk.js.map
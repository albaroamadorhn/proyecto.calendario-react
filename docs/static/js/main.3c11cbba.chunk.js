(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(9),s=a(18),i=a(63),u=a(4),m="[ui] Open modal",d="[ui] Close modal",f="[event] Set Active",p="[event] Add new",v="[event] Clear active event",b="[event] Event updated",E="[event] Event deleted",h="[auth] Finish checking login state",g="[auth] Login",O="[auth] Logout",j={modalOpen:!1},y=a(66),N=a(14),w=a.n(N),k={events:[{id:(new Date).getTime(),title:"Cumplea\xf1os del jefe",start:w()().toDate(),end:w()().add(2,"hours").toDate(),bgcolor:"#fafafa",notes:"Comprar el pastel",user:{_id:"123",name:"Albaro"}}],activeEvent:null},S={checking:!0},C=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case d:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case p:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(y.a)(e.events),[t.payload])});case v:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case b:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case E:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{checking:!1});case h:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case O:return{checking:!1};default:return e}}}),x="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,D=Object(s.e)(C,x(Object(s.a)(i.a))),T=a(34),A=a(8),I=a(12),P=a(23),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(I.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},r),{},Object(P.a)({},t.name,t.value)))};return[r,l,o]},R=a(22),G=a.n(R),L=a(39),F="https://mern-calendar-fher.herokuapp.com/api",V=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(F,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},H=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(F,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},J=a(21),M=a.n(J),B=function(){return{type:h}},U=function(e){return{type:g,payload:e}},X=function(){return{type:O}},q=(a(77),function(){var e=Object(l.b)(),t=_({lEmail:"albaro@gmail.com",lPassword:"123456"}),a=Object(I.a)(t,2),n=a[0],c=a[1],o=_({rName:"Daniel",rEmail:"daniel@gmail.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(I.a)(o,2),i=s[0],u=s[1],m=n.lEmail,d=n.lPassword,f=i.rName,p=i.rEmail,v=i.rPassword1,b=i.rPassword2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=m,n=d,function(){var e=Object(L.a)(G.a.mark((function e(t){var r,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(U({uid:c.uid,name:c.name}))):M.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:m,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:d,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),v!==b)return M.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var a,n,r;console.log("?"),e((a=p,n=v,r=f,function(){var e=Object(L.a)(G.a.mark((function e(t){var c,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth/new",{email:a,password:n,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(U({uid:o.uid,name:o.name}))):M.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:f,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:p,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:v,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:b,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}),z=a(53),K=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name;return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},t),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){e((function(e){localStorage.clear(),e(X())}))}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},Q={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},W=function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null," ",a," "),r.a.createElement("span",null,"- ",n.name," "))},Y=a(48),Z=a.n(Y),$=a(49),ee=a.n($),te=function(){return{type:m}},ae=function(){return{type:v}},ne={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Z.a.setAppElement("#root");var re=w()().minutes(0).seconds(0).add(1,"hours"),ce=re.clone().add(1,"hours"),oe={title:"",notes:"",start:re.toDate(),end:ce.toDate()},le=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,a=Object(l.b)(),c=Object(n.useState)(re.toDate()),o=Object(I.a)(c,2),s=o[0],i=o[1],m=Object(n.useState)(ce.toDate()),f=Object(I.a)(m,2),v=f[0],E=f[1],h=Object(n.useState)(!0),g=Object(I.a)(h,2),O=g[0],j=g[1],y=Object(n.useState)(oe),N=Object(I.a)(y,2),k=N[0],S=N[1],C=k.notes,x=k.title,D=k.start,T=k.end;Object(n.useEffect)((function(){S(t||oe)}),[t,S]);var A=function(e){var t=e.target;S(Object(u.a)(Object(u.a)({},k),{},Object(P.a)({},t.name,t.value)))},_=function(){a({type:d}),a(ae()),S(oe)};return r.a.createElement(Z.a,{isOpen:e,onRequestClose:_,style:ne,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," ",t?"Editar evento":"Nuevo evento"," "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n=w()(D),r=w()(T);return n.isSameOrAfter(r)?M.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):x.trim().length<2?j(!1):(a(t?{type:b,payload:k}:function(e){return{type:p,payload:e}}(Object(u.a)(Object(u.a)({},k),{},{id:(new Date).getTime(),user:{_id:"123",name:"Albaro"}}))),j(!0),void _())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(ee.a,{onChange:function(e){i(e),S(Object(u.a)(Object(u.a)({},k),{},{start:e}))},value:s,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(ee.a,{onChange:function(e){E(e),S(Object(u.a)(Object(u.a)({},k),{},{end:e}))},value:v,minDate:s,className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!O&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:x,onChange:A}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:C,onChange:A}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},se=(a(111),a(112),function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(te())}},r.a.createElement("i",{className:"fas fa-plus"}))}),ie=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e({type:E})}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," Borrar evento "))};w.a.locale("es");var ue=Object(z.b)(w.a),me=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.calendar})),a=t.events,c=t.activeEvent,o=Object(n.useState)(localStorage.getItem("lastView")||"month"),s=Object(I.a)(o,2),i=s[0],u=s[1];return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(K,null),r.a.createElement(z.a,{localizer:ue,events:a,startAccessor:"start",endAccessor:"end",messages:Q,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:"#367CF7",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(te())},onSelectEvent:function(t){e({type:f,payload:t})},onView:function(e){u(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(ae())},selectable:!0,view:i,components:{event:W}}),r.a.createElement(se,null),c&&r.a.createElement(ie,null),r.a.createElement(le,null))},de=a(38),fe=function(e){var t=e.isAuthenticated,a=e.component,n=Object(de.a)(e,["isAuthenticated","component"]);return r.a.createElement(A.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(A.a,{to:"/"}):r.a.createElement(a,e)}}))},pe=function(e){var t=e.isAuthenticated,a=e.component,n=Object(de.a)(e,["isAuthenticated","component"]);return r.a.createElement(A.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(A.a,{to:"/login"})}}))},ve=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(L.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(U({uid:n.uid,name:n.name}))):t(B());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("h5",null,"Espere..."):r.a.createElement(T.a,null,r.a.createElement("div",null,r.a.createElement(A.d,null,r.a.createElement(fe,{exact:!0,path:"/login",component:q,isAuthenticated:!!c}),r.a.createElement(pe,{exact:!0,path:"/",component:me,isAuthenticated:!!c}),r.a.createElement(A.a,{to:"/"}))))},be=function(){return r.a.createElement(l.a,{store:D},r.a.createElement(ve,null))};a(114);o.a.render(r.a.createElement(be,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(116)},77:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.3c11cbba.chunk.js.map
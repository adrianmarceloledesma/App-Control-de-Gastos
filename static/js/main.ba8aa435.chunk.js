(this["webpackJsonpproyecto.n2-control.de.presupuesto"]=this["webpackJsonpproyecto.n2-control.de.presupuesto"]||[]).push([[0],{10:function(e,t,a){e.exports=a(27)},15:function(e,t,a){},16:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),s=(a(15),a(16),a(9)),l=a(1),u=a(7),i=a.n(u);function m(e){return r.a.createElement("p",{className:"error"},e.aviso)}m.propType={aviso:i.a.string.isRequired};var p=m;var v=function(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(!1),u=Object(l.a)(s,2),i=u[0],m=u[1];return r.a.createElement("div",{className:"contenedor-pregunta"},r.a.createElement("h2",null,"Coloca tu Presupuesto"),i&&r.a.createElement(p,{aviso:"Error! Complete Bien los Campos"}),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),""===o||o<=0||isNaN(o)?m(!0):(m(!1),e.setPresupuesto(o),e.setPreRestante(o),e.setMostrarPregunta(!1))}},r.a.createElement("input",{type:"number",placeholder:"Colocalo Aqui",onChange:function(e){c(parseInt(e.target.value))}}),r.a.createElement("input",{type:"submit"})))},E=a(8),b=a.n(E);var d=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(0),u=Object(l.a)(s,2),i=u[0],m=u[1],v=Object(n.useState)(!1),E=Object(l.a)(v,2),d=E[0],f=E[1];return r.a.createElement("form",{className:"contenedor-form",onSubmit:function(t){if(t.preventDefault(),""===o.trim()||i<1||isNaN(i))f(!0);else{f(!1);var a={nombre:o,precio:i,id:b.a.generate()};e.setGasto(a),e.setCrearGasto(!0),c(""),m(0)}}},r.a.createElement("h2",null,"Agrega tus Gastos Aqu\xed"),d&&r.a.createElement(p,{aviso:"Error! Revisar los Campos Ingresados"}),r.a.createElement("div",null,r.a.createElement("label",null,"Nombre Gasto"),r.a.createElement("input",{type:"text",placeholder:"ej: Transporte",value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement("label",null,"Precio"),r.a.createElement("input",{type:"number",placeholder:"ej: 300",value:i,onChange:function(e){return m(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Agregar Gasto"})))};var f=function(e){return r.a.createElement("ul",{className:"contenedor-gasto"},r.a.createElement("li",null,e.gasto.nombre),r.a.createElement("li",null,"$ ",e.gasto.precio))};var g=function(e){return r.a.createElement("div",{className:"contenedor-mostrargasto"},r.a.createElement("h2",null,"Listado"),e.gastos.map((function(e){return r.a.createElement(f,{gasto:e,key:e.id})})))};var j=function(e){return r.a.createElement("div",{className:"contenedor-controlpresupuesto"},r.a.createElement("p",null,"Presupuesto : $ ",e.presupuesto),r.a.createElement("p",{className:(t=e.presupuesto,a=e.preRestante,t/4>a?"rojo":t/2>a?"amarillo":"verde")},"Restante : $ ",e.preRestante));var t,a};var O=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(0),u=Object(l.a)(c,2),i=u[0],m=u[1],p=Object(n.useState)(!0),E=Object(l.a)(p,2),b=E[0],f=E[1],O=Object(n.useState)({}),h=Object(l.a)(O,2),S=h[0],N=h[1],y=Object(n.useState)([]),C=Object(l.a)(y,2),P=C[0],w=C[1],G=Object(n.useState)(!1),R=Object(l.a)(G,2),k=R[0],A=R[1];return Object(n.useEffect)((function(){if(k){w([].concat(Object(s.a)(P),[S]));var e=i-S.precio;m(e),A(!1)}}),[S,k,P,i]),r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"Gasto Semanal")),b?r.a.createElement(v,{setPresupuesto:o,setPreRestante:m,setMostrarPregunta:f}):r.a.createElement("div",{className:"contenedor-div"},r.a.createElement(d,{setGasto:N,setCrearGasto:A}),r.a.createElement("div",{className:"contenedor-2"},r.a.createElement(g,{gastos:P}),r.a.createElement(j,{presupuesto:a,preRestante:i}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.ba8aa435.chunk.js.map
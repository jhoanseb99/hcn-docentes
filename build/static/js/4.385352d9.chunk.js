(this["webpackJsonphcn-docentes-front"]=this["webpackJsonphcn-docentes-front"]||[]).push([[4],{334:function(e,t,c){"use strict";var n=c(12),a=c(10),i=c(0),s=c(2);t.a=function(e){var t=e.title,c=e.toolbar,r=e.children,l=Object(a.a)(e,["title","toolbar","children"]);return Object(s.jsx)("div",{className:"container-fluid h-100",children:Object(s.jsxs)("div",Object(n.a)(Object(n.a)({className:"card"},l),{},{children:[Object(s.jsx)("div",{className:"card-header bg-white",children:Object(s.jsxs)("div",{className:"d-flex row align-items-center",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("h3",{className:"text-dark",children:t})}),c&&Object(s.jsx)("div",{className:"col text-right",children:c.map((function(e,t){var c=e.title,s=Object(a.a)(e,["title"]);return Object(i.createElement)("button",Object(n.a)(Object(n.a)({},s),{},{key:t}),c)}))})]})}),Object(s.jsx)("div",{className:"card-body h-100",children:r})]}))})}},362:function(e,t,c){"use strict";c.r(t);var n=c(12),a=c(2),i=c(0),s=c.n(i),r=c(22),l=c(45),o=c(21),j=c(334),b=c(55),d=c(18);var u=function(e){var t=e.match.params.id,c=Object(o.d)((function(e){return e.auth})).authToken,n=Object(r.g)(),i=s.a.useState({ID:"",Title:"",Description:"",Media:null}),u=Object(l.a)(i,2),h=u[0],O=u[1];return s.a.useEffect((function(){Object(b.f)({ID:t},c).then((function(e){console.log(e),O(e)}))}),[t]),Object(a.jsx)(j.a,{title:"Caso cl\xednico",children:Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"Title",children:"T\xedtulo"}),Object(a.jsx)("input",{type:"text",name:"Title",className:"form-control",defaultValue:h.Title})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"Description",children:"Descripci\xf3n"}),Object(a.jsx)("textarea",{type:"text",name:"Description",className:"form-control",style:{minHeight:"100px"},defaultValue:h.Description})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=Object(d.b)(h.Media),t=window.URL.createObjectURL(e);window.open(t)},children:"Ver archivo"}),Object(a.jsx)("button",{type:"button",className:"btn btn-secondary ml-2",onClick:function(){return n.goBack()},children:"Volver"})]})]})})};t.default=function(){return Object(a.jsxs)(r.d,{children:[Object(a.jsx)(r.a,{exact:!0,from:"/clinical-cases",to:"/clinical-cases/all"}),Object(a.jsx)(r.b,{exact:!0,path:"/clinical-cases/:id",component:function(e){return Object(a.jsx)(u,Object(n.a)({},e))}}),Object(a.jsx)(r.a,{to:"/error/404"})]})}}}]);
//# sourceMappingURL=4.385352d9.chunk.js.map
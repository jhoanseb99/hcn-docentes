(this["webpackJsonphcn-docentes-front"]=this["webpackJsonphcn-docentes-front"]||[]).push([[6],{339:function(e,t,a){"use strict";var n,r=a(1),l=a(5),c=a(13),o=a.n(c),s=a(126),i=a(0),m=a.n(i),b=a(71),j=a(128),d=((n={})[b.b]="show",n[b.a]="show",n),u=m.a.forwardRef((function(e,t){var a=e.className,n=e.children,c=Object(l.a)(e,["className","children"]),u=Object(i.useCallback)((function(e){Object(j.a)(e),c.onEnter&&c.onEnter(e)}),[c]);return m.a.createElement(b.e,Object(r.a)({ref:t,addEndListener:s.a},c,{onEnter:u}),(function(e,t){return m.a.cloneElement(n,Object(r.a)({},t,{className:o()("fade",a,n.props.className,d[e])}))}))}));u.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},u.displayName="Fade",t.a=u},360:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(2),l=a(0),c=a.n(l),o=a(22),s=a(21),i=a(1),m=a(5),b=a(13),j=a.n(b),d=a(14);function u(e,t,a){var n=(e-t)/(a-t)*100;return Math.round(1e3*n)/1e3}function x(e,t){var a,n=e.min,r=e.now,l=e.max,o=e.label,s=e.srOnly,b=e.striped,d=e.animated,x=e.className,h=e.style,p=e.variant,O=e.bsPrefix,f=Object(m.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return c.a.createElement("div",Object(i.a)({ref:t},f,{role:"progressbar",className:j()(x,O+"-bar",(a={},a["bg-"+p]=p,a[O+"-bar-animated"]=d,a[O+"-bar-striped"]=d||b,a)),style:Object(i.a)({width:u(r,n,l)+"%"},h),"aria-valuenow":r,"aria-valuemin":n,"aria-valuemax":l}),s?c.a.createElement("span",{className:"sr-only"},o):o)}var h=c.a.forwardRef((function(e,t){var a=e.isChild,n=Object(m.a)(e,["isChild"]);if(n.bsPrefix=Object(d.a)(n.bsPrefix,"progress"),a)return x(n,t);var r=n.min,o=n.now,s=n.max,b=n.label,u=n.srOnly,h=n.striped,p=n.animated,O=n.bsPrefix,f=n.variant,y=n.className,N=n.children,_=Object(m.a)(n,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return c.a.createElement("div",Object(i.a)({ref:t},_,{className:j()(y,O)}),N?function(e,t){var a=0;return c.a.Children.map(e,(function(e){return c.a.isValidElement(e)?t(e,a++):e}))}(N,(function(e){return Object(l.cloneElement)(e,{isChild:!0})})):x({min:r,now:o,max:s,label:b,srOnly:u,striped:h,animated:p,bsPrefix:O,variant:f},t))}));h.displayName="ProgressBar",h.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};var p=h,O=a(87),f=a(65),y=a(31),N=a(46),_=a(124),v=a(86),g=a(20),F=a(57),P=a(129),D=a(32),C=function(e){var t=Object(F.a)(e,{activeKey:"onSelect"}),a=t.id,n=t.generateChildId,r=t.onSelect,o=t.activeKey,s=t.transition,i=t.mountOnEnter,m=t.unmountOnExit,b=t.children,j=Object(l.useMemo)((function(){return n||function(e,t){return a?a+"-"+t+"-"+e:null}}),[a,n]),d=Object(l.useMemo)((function(){return{onSelect:r,activeKey:o,transition:s,mountOnEnter:i||!1,unmountOnExit:m||!1,getControlledId:function(e){return j(e,"tabpane")},getControllerId:function(e){return j(e,"tab")}}}),[r,o,s,i,m,j]);return c.a.createElement(P.a.Provider,{value:d},c.a.createElement(D.a.Provider,{value:r||null},b))},k=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.as,r=void 0===n?"div":n,l=e.className,o=Object(m.a)(e,["bsPrefix","as","className"]),s=Object(d.a)(a,"tab-content");return c.a.createElement(r,Object(i.a)({ref:t},o,{className:j()(l,s)}))})),A=a(339);var E=c.a.forwardRef((function(e,t){var a=function(e){var t=Object(l.useContext)(P.a);if(!t)return e;var a=t.activeKey,n=t.getControlledId,r=t.getControllerId,c=Object(m.a)(t,["activeKey","getControlledId","getControllerId"]),o=!1!==e.transition&&!1!==c.transition,s=Object(D.b)(e.eventKey);return Object(i.a)({},e,{active:null==e.active&&null!=s?Object(D.b)(a)===s:e.active,id:n(e.eventKey),"aria-labelledby":r(e.eventKey),transition:o&&(e.transition||c.transition||A.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:c.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:c.unmountOnExit})}(e),n=a.bsPrefix,r=a.className,o=a.active,s=a.onEnter,b=a.onEntering,u=a.onEntered,x=a.onExit,h=a.onExiting,p=a.onExited,O=a.mountOnEnter,f=a.unmountOnExit,y=a.transition,N=a.as,_=void 0===N?"div":N,v=(a.eventKey,Object(m.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),g=Object(d.a)(n,"tab-pane");if(!o&&!y&&f)return null;var F=c.a.createElement(_,Object(i.a)({},v,{ref:t,role:"tabpanel","aria-hidden":!o,className:j()(r,g,{active:o})}));return y&&(F=c.a.createElement(y,{in:o,onEnter:s,onEntering:b,onEntered:u,onExit:x,onExiting:h,onExited:p,mountOnEnter:O,unmountOnExit:f},F)),c.a.createElement(P.a.Provider,{value:null},c.a.createElement(D.a.Provider,{value:null},F))}));E.displayName="TabPane";var w=E,V=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(c.a.Component);V.Container=C,V.Content=k,V.Pane=w;var S=V,I=a(302),G=a(18);var B=function(e){var t=e.formik,a=e.handleClick,l=e.displayFields,c=e.hasFeedback,o=void 0!==c&&c;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsxs)("div",{className:"form-group col",children:[Object(r.jsx)("label",{htmlFor:"GeneralData_ValorationDate",children:"Fecha de valoraci\xf3n"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"date",name:"GeneralData_ValorationDate",className:"form-control"},t.getFieldProps("GeneralData_ValorationDate"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"GeneralData_ValorationDate",onClick:a,children:"+"})]}),l.GeneralData_ValorationDate.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group col",children:[Object(r.jsx)("label",{htmlFor:"GeneralData_AdmissionDate",children:"Fecha de admisi\xf3n"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"date",name:"GeneralData_AdmissionDate",className:"form-control"},t.getFieldProps("GeneralData_AdmissionDate"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"GeneralData_AdmissionDate",onClick:a,children:"+"})]}),l.GeneralData_AdmissionDate.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"GeneralData_HCNNumber",children:"N\xfamero HCN"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"number",name:"GeneralData_HCNNumber",className:"form-control"},t.getFieldProps("GeneralData_HCNNumber"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"GeneralData_HCNNumber",onClick:a,children:"+"})]}),l.GeneralData_HCNNumber.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"GeneralData_Room",children:"Habitaci\xf3n"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"number",name:"GeneralData_Room",className:"form-control"},t.getFieldProps("GeneralData_Room"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"GeneralData_Room",onClick:a,children:"+"})]}),l.GeneralData_Room.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"GeneralData_Interpretation",children:"Interpretaci\xf3n"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("textarea",Object(n.a)({type:"text",name:"GeneralData_Interpretation",className:"form-control"},t.getFieldProps("GeneralData_Interpretation"))),o&&Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"GeneralData_Interpretation",onClick:a,children:"+"})})]}),l.GeneralData_Interpretation.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]})]})};var W=function(e){var t=e.formik,a=e.handleClick,l=e.displayFields,c=e.hasFeedback,o=void 0!==c&&c;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"PatientData_FullName",children:"Nombre Completo"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"text",name:"PatientData_FullName",className:"form-control"},t.getFieldProps("PatientData_FullName"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"PatientData_FullName",onClick:a,children:"+"})]}),l.PatientData_FullName.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsxs)("div",{className:"form-group col-6",children:[Object(r.jsx)("label",{htmlFor:"PatientData_Birthdate",children:"Fecha de cumplea\xf1os"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"date",name:"PatientData_Birthdate",className:"form-control"},t.getFieldProps("PatientData_Birthdate"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"PatientData_Birthdate",onClick:a,children:"+"})]}),l.PatientData_Birthdate.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group col-3",children:[Object(r.jsx)("label",{htmlFor:"PatientData_Gender",children:"G\xe9nero"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsxs)("select",Object(n.a)(Object(n.a)({type:"text",name:"PatientData_Gender",className:"form-control"},t.getFieldProps("PatientData_Gender")),{},{children:[Object(r.jsx)("option",{value:"",children:"Seleccionar"}),Object(r.jsx)("option",{value:"M",children:"Masculino"}),Object(r.jsx)("option",{value:"F",children:"Femenino"})]})),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"PatientData_Gender",onClick:a,children:"+"})]}),l.PatientData_Gender.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group col-3",children:[Object(r.jsx)("label",{htmlFor:"PatientData_CivilStatus",children:"Estado civil"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsxs)("select",Object(n.a)(Object(n.a)({type:"text",name:"PatientData_CivilStatus",className:"form-control"},t.getFieldProps("PatientData_CivilStatus")),{},{children:[Object(r.jsx)("option",{value:"",children:"Seleccionar"}),Object(r.jsx)("option",{value:"Married",children:"Casado/a"}),Object(r.jsx)("option",{value:"Single",children:"Soltero/a"})]})),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"PatientData_CivilStatus",onClick:a,children:"+"})]}),l.PatientData_CivilStatus.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"PatientData_EPS",children:"EPS"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"text",name:"PatientData_EPS",className:"form-control"},t.getFieldProps("PatientData_EPS"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"PatientData_EPS",onClick:a,children:"+"})]}),l.PatientData_EPS.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"PatientData_Telephone",children:"Tel\xe9fono"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"text",name:"PatientData_Telephone",className:"form-control"},t.getFieldProps("PatientData_Telephone"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"PatientData_Telephone",onClick:a,children:"+"})]}),l.PatientData_Telephone.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"PatientData_Occupation",children:"Ocupaci\xf3n"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"text",name:"PatientData_Occupation",className:"form-control"},t.getFieldProps("PatientData_Occupation"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"PatientData_Occupation",onClick:a,children:"+"})]}),l.PatientData_Occupation.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"PatientData_Interpretation",children:"Interpretaci\xf3n"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("textarea",Object(n.a)({type:"text",name:"PatientData_Interpretation",className:"form-control"},t.getFieldProps("PatientData_Interpretation"))),o&&Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"PatientData_Interpretation",onClick:a,children:"+"})})]}),l.PatientData_Interpretation.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]})]})};var R=function(e){var t=e.formik,a=e.handleClick,l=e.displayFields,c=e.hasFeedback,o=void 0!==c&&c;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsxs)("div",{className:"form-group col",children:[Object(r.jsx)("label",{htmlFor:"Anthropometry_Weight_Actual",children:"Peso actual"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"number",name:"Anthropometry_Weight_Actual",className:"form-control"},t.getFieldProps("Anthropometry_Weight_Actual"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"Anthropometry_Weight_Actual",onClick:a,children:"+"})]}),l.Anthropometry_Weight_Actual.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group col",children:[Object(r.jsx)("label",{htmlFor:"Anthropometry_Weight_Usual",children:"Peso usual"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"number",name:"Anthropometry_Weight_Usual",className:"form-control"},t.getFieldProps("Anthropometry_Weight_Usual"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"Anthropometry_Weight_Usual",onClick:a,children:"+"})]}),l.Anthropometry_Weight_Usual.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group col",children:[Object(r.jsx)("label",{htmlFor:"Anthropometry_Weight_Reference",children:"Peso de referencia"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"number",name:"Anthropometry_Weight_Reference",className:"form-control"},t.getFieldProps("Anthropometry_Weight_Reference"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"Anthropometry_Weight_Reference",onClick:a,children:"+"})]}),l.Anthropometry_Weight_Reference.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group col",children:[Object(r.jsx)("label",{htmlFor:"Anthropometry_Weight_ChangeWeight",children:"Cambio de peso"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"number",name:"Anthropometry_Weight_ChangeWeight",className:"form-control"},t.getFieldProps("Anthropometry_Weight_ChangeWeight"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"Anthropometry_Weight_ChangeWeight",onClick:a,children:"+"})]}),l.Anthropometry_Weight_ChangeWeight.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]})]}),Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsxs)("div",{className:"form-group col",children:[Object(r.jsx)("label",{htmlFor:"Anthropometry_TricipitalFold_Value",children:"Pliegue tricipital"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"number",name:"Anthropometry_TricipitalFold_Value",className:"form-control"},t.getFieldProps("Anthropometry_TricipitalFold_Value"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"Anthropometry_TricipitalFold_Value",onClick:a,children:"+"})]}),l.Anthropometry_TricipitalFold_Value.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group col",children:[Object(r.jsx)("label",{htmlFor:"Anthropometry_SubscapularFold_Value",children:"Pliegue subescapular"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"number",name:"Anthropometry_SubscapularFold_Value",className:"form-control"},t.getFieldProps("Anthropometry_SubscapularFold_Value"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"Anthropometry_SubscapularFold_Value",onClick:a,children:"+"})]}),l.Anthropometry_SubscapularFold_Value.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]})]}),Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsxs)("div",{className:"form-group col",children:[Object(r.jsx)("label",{htmlFor:"Anthropometry_BrachialPerimeter_Value",children:"Per\xedmetro braquial"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"number",name:"Anthropometry_BrachialPerimeter_Value",className:"form-control"},t.getFieldProps("Anthropometry_BrachialPerimeter_Value"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"Anthropometry_BrachialPerimeter_Value",onClick:a,children:"+"})]}),l.Anthropometry_BrachialPerimeter_Value.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group col",children:[Object(r.jsx)("label",{htmlFor:"Anthropometry_AbdominalPerimeter_Value",children:"Per\xedmetro abdominal"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"number",name:"Anthropometry_AbdominalPerimeter_Value",className:"form-control"},t.getFieldProps("Anthropometry_AbdominalPerimeter_Value"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"Anthropometry_AbdominalPerimeter_Value",onClick:a,children:"+"})]}),l.Anthropometry_AbdominalPerimeter_Value.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]})]}),Object(r.jsxs)("div",{className:"form-row",children:[Object(r.jsxs)("div",{className:"form-group col",children:[Object(r.jsx)("label",{htmlFor:"Anthropometry_Height_Value",children:"Altura"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"number",name:"Anthropometry_Height_Value",className:"form-control"},t.getFieldProps("Anthropometry_Height_Value"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"Anthropometry_Height_Value",onClick:a,children:"+"})]}),l.Anthropometry_Height_Value.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group col",children:[Object(r.jsx)("label",{htmlFor:"Anthropometry_Structure_Value",children:"Estructura"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"number",name:"Anthropometry_Structure_Value",className:"form-control"},t.getFieldProps("Anthropometry_Structure_Value"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"Anthropometry_Structure_Value",onClick:a,children:"+"})]}),l.Anthropometry_Structure_Value.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsxs)("div",{className:"form-group col",children:[Object(r.jsx)("label",{htmlFor:"Anthropometry_BMI_Value",children:"BMI"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"number",name:"Anthropometry_BMI_Value",className:"form-control"},t.getFieldProps("Anthropometry_BMI_Value"))),o&&Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"Anthropometry_BMI_Value",onClick:a,children:"+"})]}),l.Anthropometry_BMI_Value.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"Biochemistry_Interpretation",children:"Interpretaci\xf3n"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("textarea",Object(n.a)({type:"text",name:"Biochemistry_Interpretation",className:"form-control"},t.getFieldProps("Biochemistry_Interpretation"))),o&&Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"button",className:"btn btn-primary ml-3",name:"Biochemistry_Interpretation",onClick:a,children:"+"})})]}),l.Biochemistry_Interpretation.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]})]})},T=function(e){var t={},a=function(a){var r=e[a];if("number"===typeof r&&(r=r.toString()),r.length){var l=a.split("_"),c=t;l.forEach((function(e,t){var a;t===l.length-1?c[e]=r:(c[e]=Object(n.a)({},null!==(a=c[e])&&void 0!==a?a:{}),c=c[e])}))}};for(var r in e)a(r);return t},K=function(e){if(!e)return null;for(var t={},a=Object.keys(e),n=function(){var n=a.pop();if("_"!==n[0]){var r=n.split("_"),l=e;r.forEach((function(e){l=l[e]})),"object"===typeof l?Object.keys(l).forEach((function(e){a.push("".concat(n,"_").concat(e))})):l&&(t[n]=l)}};0!==a.length;)n();return console.log(t),t};var H=function(e){var t=e.handleSubmit,a=e.handleReturn,l=e.data,o=e.isUpdate,s=void 0!==o&&o,i=c.a.useState(function(){var e={};for(var t in G.d)e[t]={Feedback:!1};return e}()),m=Object(N.a)(i,2),b=m[0],j=m[1],d=(v.a().shape({ValorationDate:v.b().required("Campo requerido")}),Object(_.a)({initialValues:K(l)||G.d,onSubmit:function(e,a){a.setStatus,a.setSubmitting;console.log(e),setTimeout((function(){console.log(T(e)),t(T(e))}),1e3)}})),u=function(e){var t=e.target.name;j(Object(n.a)(Object(n.a)({},b),{},Object(y.a)({},t,Object(n.a)(Object(n.a)({},b[t]),{},{Feedback:!b[t].Feedback}))))};return Object(r.jsxs)("form",{onSubmit:d.handleSubmit,children:[Object(r.jsx)("div",{className:"row mb-3",children:Object(r.jsxs)(S.Container,{id:"left-tabs",defaultActiveKey:"GeneralData",children:[Object(r.jsx)("div",{className:"col-2",children:Object(r.jsxs)(I.a,{variant:"pills",className:"flex-column mb-3",children:[Object(r.jsx)(I.a.Item,{children:Object(r.jsx)(I.a.Link,{eventKey:"GeneralData",children:"Datos generales"})}),Object(r.jsx)(I.a.Item,{children:Object(r.jsx)(I.a.Link,{eventKey:"PatientData",children:"Datos del paciente"})}),Object(r.jsx)(I.a.Item,{children:Object(r.jsx)(I.a.Link,{eventKey:"Anthropometry",children:"Datos antropom\xe9tricos"})}),Object(r.jsx)(I.a.Item,{children:Object(r.jsx)(I.a.Link,{eventKey:"Biochemistry",children:"Datos bioqu\xedmicos"})})]})}),Object(r.jsx)("div",{className:"col-10",children:Object(r.jsxs)(S.Content,{children:[Object(r.jsx)(S.Pane,{eventKey:"GeneralData",children:Object(r.jsx)(B,{formik:d,handleClick:u,displayFields:b})}),Object(r.jsx)(S.Pane,{eventKey:"PatientData",children:Object(r.jsx)(W,{formik:d,handleClick:u,displayFields:b})}),Object(r.jsx)(S.Pane,{eventKey:"Anthropometry",children:Object(r.jsx)(R,{formik:d,handleClick:u,displayFields:b})}),Object(r.jsx)(S.Pane,{eventKey:"Biochemistry",children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"TricipitalFold",children:"Pliegue tricipital"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("input",Object(n.a)({type:"text",name:"TricipitalFold",className:"form-control"},d.getFieldProps("TricipitalFold"))),Object(r.jsx)("button",{className:"btn btn-primary ml-3",children:"+"})]}),b.GeneralData_ValorationDate.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]})})]})})]})}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"ConsultationReason",children:"Raz\xf3n de la consulta"}),Object(r.jsxs)("div",{className:"d-flex flex-row",children:[Object(r.jsx)("textarea",Object(n.a)({type:"text",name:"ConsultationReason",className:"form-control"},d.getFieldProps("ConsultationReason"))),!1]}),b.ConsultationReason.Feedback?Object(r.jsx)("textarea",{type:"text",className:"form-control"}):null]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:s?"Actualizar":"Crear"}),Object(r.jsx)("button",{className:"btn btn-secondary ml-2",onClick:a,children:"Volver"})]})};var M=function(){var e=Object(s.c)(),t=Object(o.g)();return Object(r.jsx)("div",{className:"card",children:Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)(f.a,{title:"Crear Historia Cl\xednica Nutricional",component:function(){return Object(r.jsx)(p,{className:"mb-3",now:60,label:"Progreso de la hcn %"})},children:Object(r.jsx)(H,{handleSubmit:function(a){e(O.a.createHcn(a)).then((function(){return t.push("/courses/hcn")}))},handleReturn:function(){return t.push("/courses/hcn")}})})})})},U=a(7),L=a.n(U),q=a(16),z=a(328);var J=function(e){var t=e.match.params.id,a=c.a.useState({}),n=Object(N.a)(a,2),l=n[0],i=n[1],m=c.a.useState(!1),b=Object(N.a)(m,2),j=b[0],d=b[1],u=Object(s.c)(),x=Object(o.g)();return c.a.useEffect(Object(q.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(!0),u(O.a.getHcn({id:t})).then((function(e){i(e),d(!1)}));case 2:case"end":return e.stop()}}),e)}))),[t]),Object(r.jsx)("div",{className:"card",children:Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)(f.a,{title:"Editar Historia Cl\xednica Nutricional",component:function(){return Object(r.jsx)(p,{className:"mb-3",now:60,label:"Progreso de la hcn %"})},children:j?Object(r.jsx)(z.a,{size:10,color:"inherit"}):Object(r.jsx)(H,{handleSubmit:function(e){u(O.a.updateHcn(e)).then((function(){return x.push("/courses/hcn")}))},handleReturn:function(){return x.push("/courses/hcn")},data:l})})})})};t.default=function(){return Object(r.jsxs)(o.d,{children:[Object(r.jsx)(o.a,{exact:!0,from:"/hcn",to:"/hcn/all"}),Object(r.jsx)(o.b,{exact:!0,path:"/hcn/create",component:M}),Object(r.jsx)(o.b,{exact:!0,path:"/hcn/update/:id",component:function(e){return Object(r.jsx)(J,Object(n.a)({},e))}}),Object(r.jsx)(o.a,{to:"/error/404"})]})}}}]);
//# sourceMappingURL=6.13392eda.chunk.js.map
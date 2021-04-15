(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(12),o=c.n(n),i=c(59),l=c(13),s=(c(84),c(4));var j=function(e){return Object(s.jsx)("h1",{className:"todo-header-text",children:"To Do List"})},u=c(63),d=c.n(u),b=c(140),O=c(149),x=c(153),f=c(141),m=c(154),p=c(142),h=c(68),v=c.n(h),g=c(133),C=c(150),N=c(145),y=c(152);var S=function(e){var t=e.required,c=e.pickPriority,a=Object(r.useState)(""),n=Object(l.a)(a,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){c(o)}),[c,o]),Object(s.jsxs)(g.a,{className:"formControl",children:[Object(s.jsx)(C.a,{id:"priority-select-label",children:"Priority"}),Object(s.jsxs)(N.a,{labelId:"priority-select-label",id:"priority-select",value:o,required:t,onChange:function(e){return i(e.target.value),o},className:"formControl",children:[Object(s.jsx)(y.a,{value:"High",children:"High"}),Object(s.jsx)(y.a,{value:"Medium",children:"Medium"}),Object(s.jsx)(y.a,{value:"Low",children:"Low"})]})]})};var k=function(e){var t=e.required,c=e.pickColor,a=e.none,n=Object(r.useState)(""),o=Object(l.a)(n,2),i=o[0],j=o[1];return Object(r.useEffect)((function(){c(i)}),[c,i]),Object(s.jsxs)(g.a,{className:"formControl",children:[Object(s.jsx)(C.a,{id:"color-select-label",children:"Color"}),Object(s.jsxs)(N.a,{labelId:"color-select-label",id:"color-select",value:i,required:t,onChange:function(e){j(e.target.value)},className:"formControl",children:[Object(s.jsx)(y.a,{value:"blue",className:"blue",children:"Blue"}),Object(s.jsx)(y.a,{value:"purple",className:"purple",children:"Purple"}),Object(s.jsx)(y.a,{value:"pink",className:"pink",children:"Pink"}),Object(s.jsx)(y.a,{value:"orange",className:"orange",children:"Orange"}),Object(s.jsx)(y.a,{value:"green",className:"green",children:"Green"}),a&&Object(s.jsx)(y.a,{value:"",children:"None"})]})]})};c(91);var w=function(e){var t=e.onSubmit,c=Object(r.useState)(!1),a=Object(l.a)(c,2),n=a[0],o=a[1],i=Object(r.useState)("pink"),j=Object(l.a)(i,2),u=j[0],h=j[1],g=Object(r.useState)("Low"),C=Object(l.a)(g,2),N=C[0],y=C[1],w=Object(r.useState)(""),P=Object(l.a)(w,2),I=P[0],T=P[1],V=function(){o(!1)};return Object(s.jsxs)("div",{children:[Object(s.jsx)(b.a,{variant:"contained",className:"add-button",startIcon:Object(s.jsx)(v.a,{}),onClick:function(){o(!0)},children:"Add New"}),Object(s.jsxs)(O.a,{open:n,onClose:V,"aria-labelledby":"form-dialog-title",children:[Object(s.jsx)(x.a,{id:"form-dialog-title",children:"Add new todo"}),Object(s.jsx)(f.a,{className:"add-todo-dialog",children:Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({id:d()(),text:I,color:u,priority:N,date:Date.now(),isComplete:!1}),T(""),o(!1)},children:[Object(s.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"description",label:"Description",type:"text",value:I,required:!0,onChange:function(e){T(e.target.value)},fullWidth:!0}),Object(s.jsxs)(p.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",className:"dialog-pickers",children:[Object(s.jsx)(p.a,{item:!0,xs:6,className:"control",children:Object(s.jsx)(S,{required:!0,pickPriority:function(e){return y(e)}})}),Object(s.jsx)(p.a,{item:!0,xs:6,className:"control",children:Object(s.jsx)(k,{required:!0,pickColor:function(e){return h(e)}})})]}),Object(s.jsx)(b.a,{onClick:V,color:"primary",children:"Cancel"}),Object(s.jsx)(b.a,{type:"submit",color:"primary",children:"Add"})]})})]})]})},P=c(143);c(96);var I=function(e){e.onSubmit;var t=e.getSearchValue,c=e.getColorValue,a=Object(r.useState)(""),n=Object(l.a)(a,2),o=n[0],i=n[1],j=Object(r.useState)(""),u=Object(l.a)(j,2),d=u[0],b=u[1];return Object(r.useEffect)((function(){t(o),c(d)}),[t,o,d,c]),Object(s.jsx)(P.a,{maxWidth:"sm",className:"header-container",children:Object(s.jsxs)(p.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:[Object(s.jsx)(p.a,{item:!0,xs:6,className:"control",children:Object(s.jsx)(m.a,{id:"outlined-multiline-flexible",label:"Search",multiline:!0,rowsMax:4,value:o,onChange:function(e){i(e.target.value)},variant:"outlined"})}),Object(s.jsx)(p.a,{item:!0,xs:4}),Object(s.jsx)(p.a,{item:!0,xs:4,className:"filter-text",children:"Filter By"}),Object(s.jsx)(p.a,{item:!0,xs:4,children:Object(s.jsx)(k,{pickColor:function(e){return b(e)},none:!0})}),Object(s.jsx)(p.a,{item:!0,xs:4})]})})},T=c(139),V=c(146),q=c(144),E=c(39),L=c(70),D=c(148),M=c(155),A=c(53),B=(c(97),function(e){var t=e.todos,c=e.completeTodo,a=e.removeTodo,n=e.group,o=Object(r.useState)([]),i=Object(l.a)(o,2),j=i[0],u=i[1];function d(e){if(e.destination){var t=Array.from(j),c=t.splice(e.source.index,1),r=Object(l.a)(c,1)[0];t.splice(e.destination.index,0,r),u(t)}}Object(r.useEffect)((function(){u(t)}),[t]);var b=function(e){return Object(s.jsx)(A.a,{onDragEnd:d,children:Object(s.jsx)(A.c,{droppableId:"todos",children:function(t){return Object(s.jsxs)("div",Object(E.a)(Object(E.a)({},t.droppableProps),{},{ref:t.innerRef,children:[e.map((function(e,t){return Object(s.jsx)(A.b,{draggableId:e.id,index:t,children:function(t){return Object(s.jsxs)("div",Object(E.a)(Object(E.a)(Object(E.a)({className:e.isComplete?"todo-row complete ".concat(e.color):"todo-row ".concat(e.color),ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:[Object(s.jsx)(D.a,{checked:e.isComplete,onClick:function(){return c(e.id)},color:"default"}),Object(s.jsx)(M.a,{ize:"small",label:e.priority}),Object(s.jsxs)("div",{className:"text",children:[e.text," "]},e.id),Object(s.jsx)("div",{className:"icons",children:Object(s.jsx)(L.a,{onClick:function(){return a(e.id)},className:"delete-icon"})})]}))}},e.id)})),t.placeholder]}))}})})};return b("Color"===n?j.sort((function(e,t){return e.color<t.color?-1:e.color>t.color?1:0})):"Priority"===n?j.map((function(e){return"Low"===e.priority&&(e.temp=3),"Medium"===e.priority&&(e.temp=2),"High"===e.priority&&(e.temp=1),e})).sort((function(e,t){return e.temp-t.temp})):j)});var G=function(e){var t=e.pickGroup,c=Object(r.useState)(""),a=Object(l.a)(c,2),n=a[0],o=a[1];return Object(r.useEffect)((function(){t(n)}),[t,n]),Object(s.jsxs)(g.a,{variant:"filled",children:[Object(s.jsx)(C.a,{id:"group-select-label",children:"Group By"}),Object(s.jsxs)(N.a,{labelId:"group-select-label",id:"group-select",value:n,onChange:function(e){o(e.target.value)},className:"group-picker formControl",children:[Object(s.jsx)(y.a,{value:"Color",children:"Color"}),Object(s.jsx)(y.a,{value:"Priority",children:"Priority"}),Object(s.jsx)(y.a,{value:"",children:"Clear"})]})]})};c(100);var H=function(e){var t=e.todos,c=e.completeTodo,a=e.removeTodo,n=e.tabValue,o=e.searchValue,i=e.colorValue,j=Object(r.useState)(0),u=Object(l.a)(j,2),d=u[0],b=u[1],O=Object(r.useState)([]),x=Object(l.a)(O,2),f=x[0],m=x[1],h=Object(r.useState)(""),v=Object(l.a)(h,2),g=v[0],C=v[1];return Object(r.useEffect)((function(){o||i?m(i?t.filter((function(e){return e.color===i})):t.filter((function(e){return e.text.toLowerCase().includes(o.toLowerCase())}))):1===d?m(t.filter((function(e){return e.isComplete}))):0===d&&m(t.filter((function(e){return!e.isComplete})))}),[t,d,o,i]),Object(s.jsxs)(P.a,{maxWidth:"sm",className:"to-do-tab",children:[Object(s.jsx)(T.a,{square:!0,className:"todo-paper",children:Object(s.jsxs)(p.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:[Object(s.jsx)(p.a,{item:!0,xs:8,children:Object(s.jsxs)(V.a,{value:d,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){b(t)},"aria-label":"disabled tabs example",children:[Object(s.jsx)(q.a,{label:"ToDo",value:0}),Object(s.jsx)(q.a,{label:"Completed",value:1})]})}),Object(s.jsx)(p.a,{item:!0,xs:4,children:Object(s.jsx)(G,{pickGroup:function(e){return C(e)}})})]})}),Object(s.jsx)(B,{todos:f,completeTodo:c,removeTodo:a,tabValue:n,group:g})]})};var F=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)([]),o=Object(l.a)(n,2),u=o[0],d=o[1],b=Object(r.useState)(),O=Object(l.a)(b,2),x=O[0],f=O[1],m=function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[e].concat(Object(i.a)(c));a(t)}};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"header-top",children:[Object(s.jsx)(j,{}),Object(s.jsx)(w,{onSubmit:m})]}),Object(s.jsxs)("div",{className:"todo-app",children:[Object(s.jsx)(I,{onSubmit:m,getSearchValue:function(e){return d(e)},getColorValue:function(e){return f(e)}}),Object(s.jsx)(H,{todos:c,completeTodo:function(e){var t=c.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));a(t),console.log(c)},removeTodo:function(e){var t=Object(i.a)(c).filter((function(t){return t.id!==e}));a(t)},searchValue:u,colorValue:x})]})]})};c(101);var W=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(F,{})})};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(W,{})}),document.getElementById("root"))},84:function(e,t,c){},91:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.a03ec076.chunk.js.map
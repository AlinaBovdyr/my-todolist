(this["webpackJsonpmy-todolist"]=this["webpackJsonpmy-todolist"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"id":"id-1","text":"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b React","completed":true},{"id":"id-3","text":"\u041f\u0440\u0438\u0432\u044b\u043a\u043d\u0443\u0442\u044c \u043a Redux","completed":false},{"id":"id-4","text":"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c React Hooks","completed":true}]')},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),o=n(10),i=n.n(o),r=n(9),d=n(8),l=n(2),u=n(3),h=n(5),j=n(4),b=n(11),m=(n(17),function(e){var t=e.children;return Object(a.jsxs)("div",{className:"Container",children:[Object(a.jsx)("h1",{className:"Container__title",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"}),t]})}),p=(n(18),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={text:""},e.handleChange=function(t){e.setState({text:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({text:""}),e.props.onSubmit(e.state.text)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.text;return Object(a.jsxs)("form",{className:"TodoForm",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:"TodoForm__field",children:[Object(a.jsx)("span",{className:"TodoForm__label",children:"\u0427\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u043d\u043e?"}),Object(a.jsx)("textarea",{className:"TodoForm__input",type:"text",value:e,onChange:this.handleChange,rows:"1",required:!0})]}),Object(a.jsx)("button",{className:"TodoForm__btn",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"})]})}}]),n}(s.Component)),x=n(7),k=n.n(x),f=function(e){var t=e.value,n=e.isChecked,s=e.onChecked,c=e.onDelete;return Object(a.jsxs)("li",{className:"TodoList__item",children:[Object(a.jsxs)("label",{className:"TodoList__task",children:[Object(a.jsx)("input",{className:"TodoList__checkbox",type:"checkbox",checked:n,onChange:s}),Object(a.jsx)("p",{className:k()("TodoList__text",{"TodoList__text--checked":n}),children:t}),Object(a.jsx)("span",{className:k()("completed-task",{"completed-task--unchecked":!n}),children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"})]}),Object(a.jsx)("button",{className:"TodoList__btn",type:"submit",onClick:c,disabled:!n,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"})]})},O=(n(19),function(e){var t=e.taskList,n=e.onCompleted,s=e.onDeleteTodo;return Object(a.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,c=e.text,o=e.completed;return Object(a.jsx)(f,{value:c,isChecked:o,onChecked:function(){n(t)},onDelete:function(){s(t)}},t)}))})}),v=n(22).v4,_=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={tasks:b},e.addTask=function(t){var n={id:v(),text:t,completed:!1};e.setState((function(e){return{tasks:[].concat(Object(d.a)(e.tasks),[n])}}))},e.deleteTask=function(t){e.setState((function(e){var n=e.tasks;return{tasks:Object(d.a)(n.filter((function(e){var n=e.id;e.completed;return n!==t})))}}))},e.handleCheckedTask=function(t){e.setState((function(e){return{tasks:e.tasks.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.tasks;return Object(a.jsxs)(m,{children:[Object(a.jsx)(p,{onSubmit:this.addTask}),Object(a.jsx)(O,{taskList:e,onCompleted:this.handleCheckedTask,onDeleteTodo:this.deleteTask})]})}}]),n}(s.Component);n(20),n(21);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.cc63d5d0.chunk.js.map
(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),s=n(13),o=n.n(s),i=(n(19),n(20),n(12)),r=n(14),d=n(4),l=n(5),j=n(7),u=n(6),h=n(11),b=n(0),O=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={Id:"",Title:"",Status:"Pending"},t.handleIdChange=function(e){t.setState({Id:e.target.value})},t.handleTitleChange=function(e){t.setState({Title:e.target.value})},t.handleStatusChange=function(e){t.setState({Status:e.target.value})},t.handleToDoSubmit=function(e){e.preventDefault(),t.props.onAdd({Id:t.state.Id,Title:t.state.Title,Status:t.state.Status}),t.setState({Id:"",Title:"",Status:"Pending"})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Add ToDo"}),Object(b.jsxs)("form",{onSubmit:this.handleToDoSubmit,children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{value:this.state.Id,onChange:this.handleIdChange,className:"form-control",placeholder:"Enter Id"})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{value:this.state.Title,onChange:this.handleTitleChange,className:"form-control",placeholder:"Enter Title"})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("select",{value:this.state.Status,onChange:this.handleStatusChange,className:"form-control",children:[Object(b.jsx)("option",{value:"Done",children:"Done"}),Object(b.jsx)("option",{value:"Pending",children:"Pending"})]})}),Object(b.jsx)("button",{type:"submit",className:"form-control btn btn-primary",children:"Add Todo"})]})]})}}]),n}(c.Component),f=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={todos:[{Id:"1",Title:"Tell Steven Goodmorning",Status:"Done"},{Id:"2",Title:"Tell Steven I love you",Status:"Pending"}]},t.deleteToDo=function(e){var n=t.state.todos.filter((function(t){return t.Id!==e.Id}));t.setState({todos:n})},t.addToDo=function(e){t.setState({todos:[].concat(Object(r.a)(t.state.todos),[e])})},t.editToDo=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.Id===e.Id?Object(i.a)(Object(i.a)({},t),{},{Status:"Done"===t.Status?"Pending":"Done"}):t}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{onAdd:this.addToDo}),Object(b.jsx)("h1",{children:"TodoList "}),Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Id"}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:"Status"}),Object(b.jsx)("th",{children:"Action"})]})}),Object(b.jsx)("tbody",{children:this.state.todos.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.Id}),Object(b.jsx)("td",{children:e.Title}),Object(b.jsx)("td",{style:{color:"Done"===e.Status?"green":"red"},children:e.Status}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return t.deleteToDo(e)},children:Object(b.jsx)("span",{children:Object(b.jsx)(h.a,{icon:"trash"})})}),"|",Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return t.editToDo(e)},children:Object(b.jsx)("span",{children:Object(b.jsx)(h.a,{icon:"edit"})})})]})]},e.Id)}))})]})]})}}]),n}(c.Component),x=n(3),p=n(8);x.b.add(p.c,p.a,p.b);var m=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(f,{})})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),s(t),o(t)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),g()}},[[27,1,2]]]);
//# sourceMappingURL=main.60e6d3a6.chunk.js.map
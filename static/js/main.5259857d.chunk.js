(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(63)},35:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=(a(35),a(3)),s=a(4),i=a(6),m=a(5),u=a(7),p=a(65),h=a(67),d=a(66),b=a(8),f=a.n(b),E=a(12),v=a(29),y=a(17),j=a(13),O=a.n(j),C=r.a.createContext(),N=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[t.payload].concat(Object(v.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState(function(t){return N(t,e)})}},a.componentDidMount=Object(E.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,a.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)})),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),k=C.Consumer,x=a(64),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onShowClick=function(){a.setState({showContactInfo:!a.state.showContactInfo})},a.onDeleteClick=function(){var e=Object(E.a)(f.a.mark(function e(t,a){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(k,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{className:"fas fa-sort-down",style:{cursor:"pointer"},onClick:e.onShowClick}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,s)}),r.a.createElement(x.a,{to:"/contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt mx-3",style:{cursor:"pointer",float:"right",color:"black"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},c),r.a.createElement("li",{className:"list-group-item"},o)):null)})}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var t=e.contacts;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger border border-danger px-3 d-inline-flex justify-content-center align-items-center text-uppercase"},"Contact "),r.a.createElement("span",{className:"bg-danger text-white border border-danger px-3 d-inline-flex justify-content-center align-items-center text-uppercase"},"List")),t.map(function(e){return r.a.createElement(w,{key:e.id,contact:e})}))})}}]),t}(n.Component),A=(a(60),a(14)),T=a(27),D=a.n(T),P=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:D()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};P.defaultProps={type:"text"};var q=P,_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){var t=e.target;return a.setState(Object(A.a)({},t.name,t.value))},a.onSubmit=function(){var e=Object(E.a)(f.a.mark(function e(t,n){var r,c,o,l,s,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required!"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required!"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required!"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,O.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",value:a,placeholder:"Enter Name...",onChange:e.onChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",value:n,placeholder:"Enter Email...",onChange:e.onChange,type:"email",error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone...",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.componentDidMount=Object(E.a)(f.a.mark(function e(){var t,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params.id,e.next=3,O.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:n=e.sent,r=n.data,a.setState({name:r.name,email:r.email,phone:r.phone});case 6:case"end":return e.stop()}},e,this)})),a.onChange=function(e){var t=e.target;return a.setState(Object(A.a)({},t.name,t.value))},a.onSubmit=function(){var e=Object(E.a)(f.a.mark(function e(t,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required!"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required!"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required!"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,O.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",value:a,placeholder:"Enter Name...",onChange:e.onChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",value:n,placeholder:"Enter Email...",onChange:e.onChange,type:"email",error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone...",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),M=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.branding;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},e),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(x.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(x.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(x.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About")))))))}}]),t}(n.Component);M.defaultProps={branding:"My App"};var L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},F=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404 "),"Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, this page does not exist"))},U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a.componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(e){return a.setState({title:e.title,body:e.body})})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(M,null)," ",r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:S}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:_}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:I}),r.a.createElement(d.a,{exact:!0,path:"/about",component:L}),r.a.createElement(d.a,{exact:!0,path:"/test",component:U}),r.a.createElement(d.a,{component:F}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.5259857d.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.9e8a2b39.svg"},25:function(e,t,a){e.exports=a.p+"static/media/error.3b8ad90a.png"},26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),o=(a(31),a(5)),l=a(9),u=a(11),i=a(10),m=a(12),p=a(22),h=a.n(p),d=a(13),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container h-flex"},r.a.createElement(d.b,{to:"/",className:"logo"},r.a.createElement("img",{src:h.a,alt:"logo"})),r.a.createElement("nav",{className:"links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/",className:"menu__links"},"\u041b\u0435\u043d\u0442\u0430")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/profile",className:"menu__links"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"))))))}}]),t}(n.Component),E=a(8),v=a.n(E),g=a(15),A=function e(){var t=this;Object(o.a)(this,e),this.getResource=function(){var e=Object(g.a)(v.a.mark((function e(a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(a,"; received ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPosts=Object(g.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/posts/");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),this.getAllPhotos=Object(g.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/posts");case 2:return a=e.sent,e.abrupt("return",a.map(t._transformPosts));case 4:case"end":return e.stop()}}),e)}))),this._transformPosts=function(e){return{src:e.src,alt:e.alt}},this._apiBase="http://localhost:3000"},b=function(e){var t=e.min,a=e.src,n=e.alt,c=e.name;return r.a.createElement("a",{href:"#",className:t?"user min":"user"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("div",null,c))},j=a(25),y=a.n(j),k=function(){return r.a.createElement("img",{src:y.a,alt:"error"})},O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).InstaService=new A,a.state={posts:[],error:!1},a.onPostsLoaded=function(e){a.setState({posts:e,error:!1})},a.onError=function(){a.setState({error:!0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updatePosts()}},{key:"updatePosts",value:function(){this.InstaService.getAllPosts().then(this.onPostsLoaded).catch(this.onError)}},{key:"renderItems",value:function(e){return e.map((function(e){var t=e.name,a=e.altname,n=e.photo,c=e.src,s=e.alt,o=e.descr,l=e.id;return r.a.createElement("div",{key:l,className:"post"},r.a.createElement(b,{src:n,alt:a,name:t,min:!0}),r.a.createElement("img",{src:c,alt:s}),r.a.createElement("div",{className:"post__name"},t),r.a.createElement("div",{className:"post__descr"},o))}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.posts;if(t)return r.a.createElement(k,null);var n=this.renderItems(a);return r.a.createElement("div",{className:"left"},n)}}]),t}(n.Component);function x(){return r.a.createElement("div",{className:"right"},r.a.createElement(b,{src:"https://a.d-cd.net/5yAAAgBzDuA-960.jpg",alt:"Maxon",name:"Max"}),r.a.createElement("div",{className:"users__block"},r.a.createElement(b,{src:"https://a.d-cd.net/5yAAAgBzDuA-960.jpg",alt:"car",name:"annita",min:!0}),r.a.createElement(b,{src:"https://a.d-cd.net/5yAAAgBzDuA-960.jpg",alt:"car",name:"Greddy35",min:!0}),r.a.createElement(b,{src:"https://a.d-cd.net/5yAAAgBzDuA-960.jpg",alt:"car",name:"Pushkagonka",min:!0}),r.a.createElement(b,{src:"https://a.d-cd.net/5yAAAgBzDuA-960.jpg",alt:"car",name:"Egg",min:!0}),r.a.createElement(b,{src:"https://a.d-cd.net/5yAAAgBzDuA-960.jpg",alt:"car",name:"vedroedet",min:!0})))}function N(){return r.a.createElement("div",{className:"container feed"},r.a.createElement(O,null),r.a.createElement(x,null))}var P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).InstaService=new A,a.state={error:!1,photos:[]},a.onError=function(){a.setState({error:!0})},a.onPhotosLoaded=function(e){a.setState({error:!1,photos:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updatePhotos()}},{key:"updatePhotos",value:function(){this.InstaService.getAllPhotos().then(this.onPhotosLoaded).catch(this.onError)}},{key:"renderItems",value:function(e){return e.map((function(e){var t=e.src,a=e.alt;return r.a.createElement("img",{src:t,alt:a})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.photos;if(t)return r.a.createElement(k,null);var n=this.renderItems(a);return r.a.createElement("div",{className:"palette"},n)}}]),t}(n.Component),w=function(){return r.a.createElement("div",{className:"container profile"},r.a.createElement(b,{src:"https://a.d-cd.net/5yAAAgBzDuA-960.jpg",alt:"car",name:"altezza"}),r.a.createElement(P,null))},_=a(6);var B=function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(_.a,{path:"/",component:N,exact:!0}),r.a.createElement(_.a,{path:"/profile",component:w,exact:!0}),r.a.createElement(w,null)))};s.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.13a1d1ea.chunk.js.map
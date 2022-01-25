(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"name":"Pizza","calories":400,"image":"https://i.imgur.com/eTmWoAN.png","quantity":0},{"name":"Salad","calories":150,"image":"https://i.imgur.com/DupGBz5.jpg","quantity":0},{"name":"Sweet Potato","calories":120,"image":"https://i.imgur.com/hGraGyR.jpg","quantity":0},{"name":"Gnocchi","calories":500,"image":"https://i.imgur.com/93ekwW0.jpg","quantity":0},{"name":"Pot Roast","calories":350,"image":"https://i.imgur.com/WCzJDWz.jpg","quantity":0},{"name":"Lasagna","calories":750,"image":"https://i.imgur.com/ClxOafl.jpg","quantity":0},{"name":"Hamburger","calories":400,"image":"https://i.imgur.com/LoG39wK.jpg","quantity":0},{"name":"Pad Thai","calories":475,"image":"https://i.imgur.com/5ktcSzF.jpg","quantity":0},{"name":"Almonds","calories":75,"image":"https://i.imgur.com/JRp4Ksx.jpg","quantity":0},{"name":"Bacon","calories":175,"image":"https://i.imgur.com/7GlqDsG.jpg","quantity":0},{"name":"Hot Dog","calories":275,"image":"https://i.imgur.com/QqVHdRu.jpg","quantity":0},{"name":"Chocolate Cake","calories":490,"image":"https://i.imgur.com/yrgzA9x.jpg","quantity":0},{"name":"Wheat Bread","calories":175,"image":"https://i.imgur.com/TsWzMfM.jpg","quantity":0},{"name":"Orange","calories":85,"image":"https://i.imgur.com/abKGOcv.jpg","quantity":0},{"name":"Banana","calories":175,"image":"https://i.imgur.com/BMdJhu5.jpg","quantity":0},{"name":"Yogurt","calories":125,"image":"https://i.imgur.com/URhdrAm.png","quantity":0}]')},15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(9),l=t.n(i),m=(t(15),t(2)),r=t(1),o=(t(16),t(8),function(e){var a=e.name,t=e.image,n=e.calories,i=e.quantity,l=e.onClick,m=c.a.useState(i),o=Object(r.a)(m,2),s=o[0],u=o[1];return c.a.createElement("div",{key:a,className:"FoodBox"},c.a.createElement("article",{className:"media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("figure",{className:"image is-64x64"},c.a.createElement("img",{src:t,alt:a}))),c.a.createElement("div",{className:"media-content"},c.a.createElement("div",{className:"content"},c.a.createElement("p",null,c.a.createElement("strong",null,a)," ",c.a.createElement("br",null),c.a.createElement("small",null,n," cal")))),c.a.createElement("div",{className:"media-right"},c.a.createElement("div",{className:"field has-addons"},c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"number",value:s,onChange:function(e){var a=e.target;return u(a.value)}})),c.a.createElement("div",{className:"control"},c.a.createElement("button",{onClick:function(){console.log("click"),l({name:a,calories:n,image:t,quantity:s})},className:"button is-info"},"+"))))))}),s=t(10),u=t(5),g=t(6),p=function(e){var a=e.onClick,t={name:"",calories:0,image:"",quantity:0},n=c.a.useState(t),i=Object(r.a)(n,2),l=i[0],m=i[1],o=function(e){var a=e.target;m(Object(g.a)(Object(g.a)({},l),{},Object(u.a)({},a.name,a.value)))};return c.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();var n=Object(g.a)({},l);l.calories&&a(n),m(t)}},c.a.createElement("label",{className:"label",htmlFor:"name"},"Name"),c.a.createElement("input",{className:"input",type:"text",name:"name",value:l.name,onChange:o}),c.a.createElement("label",{className:"label",htmlFor:"image"},"Image URL"),c.a.createElement("input",{className:"input",type:"text",name:"image",value:l.image,onChange:o}),c.a.createElement("label",{className:"label",htmlFor:"calories"},"Calories"),c.a.createElement("input",{className:"input",type:"number",name:"calories",value:l.calories,onChange:o}),c.a.createElement("button",{className:"button is-link",type:"submit"},"ADD"))};var d=function(){var e=c.a.useState(!1),a=Object(r.a)(e,2),t=a[0],n=a[1],i=c.a.useState(s),l=Object(r.a)(i,2),u=l[0],g=l[1],d=c.a.useState(""),h=Object(r.a)(d,2),b=h[0],E=h[1],v=c.a.useState(new Map),f=Object(r.a)(v,2),N=f[0],y=f[1],j=function(e){var a=N.get(e.name);if(a){var t=new Map(Object(m.a)(N));return t.set(e.name,function(e,a){var t=Number(e.quantity)+Number(a.quantity);return{name:e.name,quantity:t,calories:e.calories,image:e.image}}(a,e)),console.log(t),y(t)}var n=new Map(Object(m.a)(N));n.set(e.name,e),y(n)};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"field search-bar"},c.a.createElement("label",{className:"label"},"Search Food in List"),c.a.createElement("div",{className:"control has-icons-left"},c.a.createElement("input",{className:"input is-primary",type:"text",placeholder:"Search",onChange:function(e){var a=e.target;return E(a.value)},value:b}),c.a.createElement("i",{className:"icon is-left fas fa-search ",style:{color:"tomato"}}))),!t&&c.a.createElement("button",{onClick:function(){return n(!t)},className:"button is-success btn-add"},"Add Food"),t&&c.a.createElement(p,{onClick:function(e){n(!t),g([].concat(Object(m.a)(u),[e]))}}),c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"food-list"},u.filter((function(e){return e.name.toLowerCase().includes(b)||e.name.includes(b)})).map((function(e){return c.a.createElement(o,Object.assign({key:e.name},e,{onClick:j}))}))),c.a.createElement("div",{className:"ctn-total container"},c.a.createElement("div",null,c.a.createElement("h3",null,"Total Food")),Object(m.a)(N).map((function(e){var a=Object(r.a)(e,2),t=(a[0],a[1]);return c.a.createElement("div",{className:"selected-food-list",style:{backgroundImage:"url(".concat(t.image)}},c.a.createElement("div",null,c.a.createElement("div",{className:"food-list-content"},c.a.createElement("p",{className:"food-name"},t.name),c.a.createElement("p",null,"Cal: ",Number(t.calories)*Number(t.quantity)),c.a.createElement("p",null,"Qty: ",t.quantity),c.a.createElement("button",{className:"button is-danger is-small",onClick:function(){return function(e){var a=new Map(Object(m.a)(N));a.delete(e),y(a)}(t.name)}},"delete"))))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.102f8c16.chunk.js.map
(this["webpackJsonpreact-food"]=this["webpackJsonpreact-food"]||[]).push([[0],{25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(18),a=c.n(s),i=(c(25),c(0)),o=function(){return Object(i.jsx)("footer",{className:"page-footer blue lighten-4",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/EvgeniiKolesnikov/react-food",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})},j=c(5),l=function(){return Object(i.jsx)("nav",{className:"blue darken-1",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)(j.b,{to:"/",className:"brand-logo",children:"React Food"}),Object(i.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/EvgeniiKolesnikov/react-food",target:"_blank",rel:"noreferrer",children:"Repo"})}),Object(i.jsx)("li",{children:Object(i.jsx)(j.b,{to:"/about",children:"About"})}),Object(i.jsx)("li",{children:Object(i.jsx)(j.b,{to:"/contacts",children:"Contact"})})]})]})})},b=c(2),u=c(8),d=c(10),h=c.n(d),O=c(13),x="https://www.themealdb.com/api/json/v1/".concat("1","/"),m=function(){var e=Object(O.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"categories.php?");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){return Object(i.jsx)("div",{className:"progress blue lighten-4",children:Object(i.jsx)("div",{className:"indeterminate blue"})})},v=c(12),N=function(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-image",children:Object(i.jsx)("img",{src:c,alt:t})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title",children:t}),Object(i.jsxs)("p",{children:[n.slice(0,90),"..."]})]}),Object(i.jsx)("div",{className:"card-action",children:Object(i.jsx)(j.b,{to:"/category/".concat(t),className:"btn blue",children:"Watch category"})})]})},y=function(e){var t=e.catalog;return Object(i.jsx)("div",{className:"list",children:t.map((function(e){return Object(i.jsx)(N,Object(v.a)({},e),e.idCategory)}))})},w=function(e){var t=e.cb,c=void 0===t?Function.prototype:t,r=Object(n.useState)(""),s=Object(u.a)(r,2),a=s[0],o=s[1],j=function(){c(a)};return Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"input-field col s12",children:[Object(i.jsx)("input",{type:"search",className:"form-control",id:"search-fiels",placeholder:"search",value:a,onKeyDown:function(e){"Enter"===e.key&&j()},onChange:function(e){return o(e.target.value)}}),Object(i.jsx)("button",{className:"btn blue",style:{position:"absolute",top:0,right:0},onClick:j,children:"Search"})]})})},k=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(u.a)(s,2),o=a[0],j=a[1],l=Object(b.g)(),d=l.pathname,h=l.search,O=Object(b.f)().push;return Object(n.useEffect)((function(){f().then((function(e){r(e.categories),j(h?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(h.split("=")[1].toLowerCase())})):e.categories)}))}),[h]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(w,{cb:function(e){j(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:d,search:"?search=".concat(e)})}}),c.length?Object(i.jsx)(y,{catalog:o}):Object(i.jsx)(g,{})]})},C=function(){return Object(i.jsx)("h3",{children:"About"})},M=function(){return Object(i.jsx)("h3",{children:"Contact"})},F=function(){return Object(i.jsx)("h3",{children:"Page not found 404"})},S=function(e){var t=e.strMeal,c=e.idMeal,n=e.strMealThumb;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-image",children:Object(i.jsx)("img",{src:n,alt:t})}),Object(i.jsx)("div",{className:"card-content",children:Object(i.jsx)("span",{className:"card-title",children:t})}),Object(i.jsx)("div",{className:"card-action",children:Object(i.jsx)(j.b,{to:"/meal/".concat(c),className:"btn blue",children:"Watch recipe"})})]})},E=function(e){var t=e.meals;return Object(i.jsx)("div",{className:"list",children:t.map((function(e){return Object(i.jsx)(S,Object(v.a)({},e),e.idMeal)}))})},B=function(){var e=Object(b.f)().goBack,t=Object(b.h)().name,c=Object(n.useState)([]),r=Object(u.a)(c,2),s=r[0],a=r[1];return Object(n.useEffect)((function(){p(t).then((function(e){return a(e.meals)}))}),[t]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{className:"btn btn-back",onClick:e,children:"Back"}),s.length?Object(i.jsx)(E,{meals:s}):Object(i.jsx)(g,{})]})},A=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(b.h)().id,a=Object(b.f)().goBack;return Object(n.useEffect)((function(){m(s).then((function(e){return r(e.meals[0])}))}),[s]),Object(i.jsxs)(i.Fragment,{children:[c.idMeal?Object(i.jsxs)("div",{className:"recipe",children:[Object(i.jsx)("img",{src:c.strMealThumb,alt:c.strMeal}),Object(i.jsx)("h1",{children:c.strMeal}),Object(i.jsxs)("h6",{children:["Category: ",c.strCategory]}),c.strArea&&Object(i.jsxs)("h6",{children:["Area: ",c.strArea]}),Object(i.jsx)("p",{children:c.strInstructions}),Object(i.jsxs)("table",{className:"centered",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Ingredient"}),Object(i.jsx)("th",{children:"Measure"})]})}),Object(i.jsx)("tbody",{children:Object.keys(c).map((function(e){return e.includes("Ingredient")&&c[e]?Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:c[e]}),Object(i.jsx)("td",{children:c["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),c.strYoutube&&Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"Video Recipe"}),Object(i.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(c.strYoutube.slice(-11)),frameBorder:"0",title:s,allowFullScreen:!0})]})]}):Object(i.jsx)(g,{}),Object(i.jsx)("button",{className:"btn btn-back",onClick:a,children:"Back"})]})};var I=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(j.a,{basename:"/react-food",children:[Object(i.jsx)(l,{}),Object(i.jsx)("main",{className:"container content",children:Object(i.jsxs)(b.c,{children:[Object(i.jsx)(b.a,{exact:!0,path:"/",component:k}),Object(i.jsx)(b.a,{path:"/about",component:C}),Object(i.jsx)(b.a,{path:"/contacts",component:M}),Object(i.jsx)(b.a,{path:"/category/:name",component:B}),Object(i.jsx)(b.a,{path:"/meal/:id",component:A}),Object(i.jsx)(b.a,{component:F})]})}),Object(i.jsx)(o,{})]})})};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(I,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.a1778e22.chunk.js.map
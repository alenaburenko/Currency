(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(18),s=n.n(a),u=(n(27),n(22)),i=n(19),j=n(3),o=(n(28),n(29),n(1));var b=function(e){return Object(o.jsxs)("div",{className:"group",children:[Object(o.jsx)("input",{type:"text",value:e.amount,onChange:function(t){return e.onAmountChange(t.target.value)}}),Object(o.jsx)("select",{value:e.currency,onChange:function(t){return e.onCurrencyChange(t.target.value)},children:e.currencies.map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))})]})},O=n(20),l=n.n(O),h=n(9),d=(n(49),function(e){var t=e.currencies,n=Object(c.useState)(1),r=Object(j.a)(n,2),a=r[0],s=r[1],u=Object(c.useState)(1),i=Object(j.a)(u,2),b=i[0],O=i[1];return Object(c.useEffect)((function(){t&&(s(t.EUR.toFixed(4)),O(t.USD.toFixed(4)))}),[t]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"heading",children:[Object(o.jsx)("h1",{children:"Currency Converter"}),Object(o.jsxs)("div",{children:[Object(o.jsx)(h.a.US,{title:"United States",className:"size"}),Object(o.jsxs)("span",{className:"res",children:[" ",b," \u20b4"]}),Object(o.jsx)(h.a.EU,{title:"United States",className:"size"}),Object(o.jsxs)("span",{className:"res",children:[" ",a," \u20b4 "]})]})]})})}),f=n(21);var x=function(){var e=Object(c.useState)(1),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("USD"),s=Object(j.a)(a,2),O=s[0],h=s[1],x=Object(c.useState)("EUR"),g=Object(j.a)(x,2),v=g[0],m=g[1],C=Object(c.useState)(null),p=Object(j.a)(C,2),S=p[0],y=p[1],U=Object(c.useCallback)((function(e){return e.toFixed(4)}),[]),F=S?U(n*S[O]/S[v]):"--",N=Object(c.useMemo)((function(){return S?Object.keys(S):[]}),[S]);return Object(c.useEffect)((function(){l.a.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json").then((function(e){var t=e.data.map((function(e){var t=e.cc,n=e.rate;return Object(i.a)({},t,n)})),n=Object.assign.apply(Object,Object(u.a)(t));y(Object.assign(n,{UAH:1}))}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{currencies:S}),Object(o.jsx)(b,{onAmountChange:function(e){r(e)},onCurrencyChange:function(e){r(U(F*S[v]/S[e])),h(e)},currencies:N,amount:n,currency:O}),Object(o.jsx)("div",{className:"switch",children:Object(o.jsx)(f.a,{size:"30px",onClick:function(){h(v),m(O)}})}),Object(o.jsx)(b,{onAmountChange:function(e){r(U(e*S[v]/S[O]))},onCurrencyChange:function(e){r(U(F*S[O]/S[e])),m(e)},currencies:N,amount:F,currency:v})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),g()}},[[50,1,2]]]);
//# sourceMappingURL=main.243361d2.chunk.js.map
(this["webpackJsonpnith-results"]=this["webpackJsonpnith-results"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(17),r=a.n(s),i=(a(25),a(4)),l=a(10),o=a(2),u=Object(c.createContext)({}),d=(a(26),a(0));function h(){var e=Object(c.useContext)(u),t=(e.darkMode,e.setDarkMode);return Object(d.jsx)("div",{className:"dark_toggle",onClick:function(){t((function(e){return!e}))},title:"toggle Dark Mode",children:Object(d.jsx)("div",{className:"cover"})})}var j=a(13),b=a.n(j),m=a(18),g=(a(29),a.p+"static/media/search.fd2a70fa.svg");function O(e){var t=e.branch,a=e.setBranch,c=e.batch,n=e.setBatch,s=e.ranking,r=e.setRanking,i=e.searchString,l=e.setSearchString,o=e.cs,u=e.setCs;return Object(d.jsxs)("div",{className:"ctrl",children:[Object(d.jsxs)("div",{className:"ser",children:[Object(d.jsx)("img",{src:g,alt:""}),Object(d.jsx)("input",{type:"search",value:i,onChange:function(e){l(e.target.value)},placeholder:'Search RollNo, Name, CGPA, Rank, "property":"value"'})]}),Object(d.jsx)("div",{className:"branch-con",children:Object(d.jsxs)("select",{name:"branch",id:"branch",title:"Branch",value:t,onChange:function(e){a(e.target.value)},children:[Object(d.jsx)("option",{disabled:!0,children:"\ud83d\udcd1 Branch"}),[{name:"FULL_COLLEGE",value:"FULL_COLLEGE"},{name:"FULL_YEAR",value:"FULL_YEAR"},{name:"ARCHITECTURE",value:"ARCHITECTURE"},{name:"CHEMICAL",value:"CHEMICAL"},{name:"CIVIL",value:"CIVIL"},{name:"CSE",value:"CSE"},{name:"CSE_DUAL",value:"CSE_DUAL"},{name:"ECE",value:"ECE"},{name:"ECE_DUAL",value:"ECE_DUAL"},{name:"ELECTRICAL",value:"ELECTRICAL"},{name:"MATERIAL",value:"MATERIAL"},{name:"MECHANICAL",value:"MECHANICAL"}].map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.name},e.value)}))]})}),Object(d.jsx)("div",{className:"batch-con",children:Object(d.jsxs)("select",{name:"batch",id:"batch",title:"Batch",value:c,onChange:function(e){n(e.target.value)},children:[Object(d.jsx)("option",{disabled:!0,children:"\ud83c\udf93 Batch"}),[{name:19,value:19},{name:18,value:18},{name:17,value:17},{name:16,value:16}].map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.name},e.value)}))]})}),Object(d.jsx)("div",{className:"cs",title:"sort: CGPA / SGPA",onClick:function(e){u((function(e){return"c"===e?"s":"c"}))},children:"c"===o?"Cg":"Sg"}),Object(d.jsx)("div",{className:"batch-con ranking-con",children:Object(d.jsxs)("select",{name:"ranking",id:"ranking",title:"Ranking",value:s,onChange:function(e){r(e.target.value)},children:[Object(d.jsx)("option",{disabled:!0,children:"\ud83c\udfc6 Ranking"}),Object(d.jsx)("option",{value:"S",children:"Standard '1224'"}),Object(d.jsx)("option",{value:"D",children:"Dense '1223'"}),Object(d.jsx)("option",{value:"O",children:"Ordinal '1234'"})]})}),Object(d.jsxs)("div",{className:"csv",onClick:function(){},title:"download result csv",children:[Object(d.jsx)("span",{children:"."})," ",Object(d.jsx)("span",{children:"csv"})]})]})}var p=a(20);a(31);function f(e){var t=e.hits;return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)(p.a,{href:"https://github.com/RohitKaushal7/nith-results","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star RohitKaushal7/nith-results on GitHub",children:"Star"}),Object(d.jsxs)("span",{id:"me",children:["Made with ",Object(d.jsx)("span",{className:"heart",children:"\u2764"})," by"," ",Object(d.jsx)("a",{href:"https://github.com/RohitKaushal7",children:"Rohit Kaushal"}),"."]}),Object(d.jsxs)("span",{id:"ref",children:["API : ",Object(d.jsx)("a",{href:"https://nithp.herokuapp.com/",children:"nithp.herokuapp.com/"})]}),Object(d.jsx)("span",{id:"count",children:t||"hits"})]})}a(32);var v=a.p+"static/media/snow1.916bf749.png";function x(e){var t=e.lastUpdated;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("img",{src:v,alt:"",className:"logo"}),Object(d.jsxs)("div",{className:"main-heading",children:[Object(d.jsx)("b",{children:"NITH RESULTS"}),Object(d.jsx)("span",{className:"date",children:t})]})]})}a(33);a(34);function k(e){var t=e.stud,a=e.cs,c="c"===a?t.cgpi:t.sgpi,n="c"===a?t.sgpi:t.cgpi,s=Number(c)>=9.5&&Number(c)<10?"9.5":parseInt(c);return Object(d.jsx)(l.b,{to:"/r/".concat(t.roll),children:Object(d.jsxs)("div",{className:"card","data-rank":t.Rank,"data-base":s,children:[Object(d.jsxs)("div",{className:"rank",children:["#_",t.Rank]}),Object(d.jsx)("div",{className:"name",children:t.name}),Object(d.jsx)("div",{className:"rollno",children:t.roll}),Object(d.jsx)("div",{className:"cgpa",children:c}),Object(d.jsx)("div",{className:"sgpa",children:n}),Object(d.jsx)("div",{className:"branch",children:t.branch}),Object(d.jsx)("div",{className:"year",children:t.roll.slice(0,2)})]})})}a(40);var N=100;function L(e){var t=e.history.location.search,a=new URLSearchParams(t),n=Object(c.useState)(a.get("branch")||"FULL_COLLEGE"),s=Object(i.a)(n,2),r=s[0],l=s[1],o=Object(c.useState)(a.get("batch")||19),h=Object(i.a)(o,2),j=h[0],g=h[1],p=Object(c.useState)(a.get("r")||"S"),v=Object(i.a)(p,2),L=v[0],E=v[1],C=Object(c.useState)(a.get("q")||""),S=Object(i.a)(C,2),_=S[0],R=S[1],y=Object(c.useState)(a.get("cs")||"c"),A=Object(i.a)(y,2),I=A[0],U=A[1],M=Object(c.useState)(a.get("p")||0),w=Object(i.a)(M,2),D=w[0],F=w[1],T=Object(c.useState)(),J=Object(i.a)(T,2),G=J[0],B=J[1],H=Object(c.useState)(),P=Object(i.a)(H,2),Y=P[0],K=P[1],q=Object(c.useState)(),V=Object(i.a)(q,2),z=V[0],Q=V[1],W=Object(c.useState)(),X=Object(i.a)(W,2),Z=(X[0],X[1]),$=Object(c.useState)(),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],ce=Object(c.useState)(),ne=Object(i.a)(ce,2),se=ne[0],re=ne[1],ie=Object(c.useContext)(u);ie.darkMode,ie.setDarkMode;Object(c.useEffect)((function(){window.location.host.includes("localhost")||fetch("https://api.countapi.xyz/hit/rohitkaushal7/nith_results").then((function(e){return e.json()})).then((function(e){ae(e.value)}))}),[]),Object(c.useEffect)((function(){console.log("Fetch Data"),le(r,j).then((function(e){e=e.sort((function(e,t){return"c"===I?Number(t.cgpi)-Number(e.cgpi):Number(t.sgpi)-Number(e.sgpi)})),B(e)})).catch((function(e){console.error("Failed to Fetch. Err - ",e.message)}))}),[r,j]),Object(c.useEffect)((function(){if(G){var e=JSON.parse(JSON.stringify(G));switch(e.sort((function(e,t){return"c"===I?Number(t.cgpi)-Number(e.cgpi):Number(t.sgpi)-Number(e.sgpi)})),L){case"S":e=oe(e);break;case"D":e=ue(e);break;case"O":e=de(e)}Q(e),K(e)}}),[L,G,I]),Object(c.useEffect)((function(){if(z){var e=_.toLocaleLowerCase(),t=z.filter((function(t){var a=t.roll+" "+t.name.toLocaleLowerCase()+" ";return String(a).includes(e)}));K(t),re(_?t.length:null)}}),[_]);var le=function(){var e=Object(m.a)(b.a.mark((function e(t,a){var c,n,s,r,i,l,o,u,d,h,j,m,g,O,p,f,v,x;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("FULL_COLLEGE"===t?c="FULL_COLLEGE":"FULL_YEAR"===t?c="FULL_YEAR - ".concat(a):(c="".concat(t," - ").concat(a),n&&(c+="&next_cursor=".concat(n))),i=localStorage.getItem("Jan 2021:::"+c),l=!1,i)try{(s=JSON.parse(i)).expires&&(new Date(s.expires).getTime()>(new Date).getTime()?l=!0:(console.log("Cache Expired - ","Jan 2021:::"+c),localStorage.removeItem("Jan 2021:::"+c)))}catch(b){console.log("Parsing Error - ",b.message)}if(!l){e.next=11;break}r=s.data,n=null,console.log("CACHE HIT","Jan 2021:::"+c),Z(!1),e.next=66;break;case 11:if("FULL_COLLEGE"!==t){e.next=31;break}console.log("FULL COLLEGE"),u=[],d="";case 15:return console.log("fetching data from "+d),e.next=18,fetch("https://nithp.herokuapp.com/api/result/student?limit=3000&next_cursor=".concat(d));case 18:return o=e.sent,e.next=21,o.json();case 21:h=e.sent,u=u.concat(h.data),d=h.pagination.next_cursor;case 25:if(""!=d){e.next=15;break}case 26:r=u,s={data:u,pagination:{next_cursor:""},expires:(new Date).getTime()+2592e6},localStorage.setItem("Jan 2021:::"+c,JSON.stringify(s)),e.next=66;break;case 31:if("FULL_YEAR"!==t){e.next=51;break}console.log("FULL_YEAR"),m=[],g="";case 35:return console.log("fetching data from "+g),e.next=38,fetch("https://nithp.herokuapp.com/api/result/student?roll=".concat(a,"%&limit=3000&next_cursor=").concat(g));case 38:return j=e.sent,e.next=41,j.json();case 41:O=e.sent,m=m.concat(O.data),g=O.pagination.next_cursor;case 45:if(""!=g){e.next=35;break}case 46:r=m,s={data:m,pagination:{next_cursor:""},expires:(new Date).getTime()+2592e6},localStorage.setItem("Jan 2021:::"+c,JSON.stringify(s)),e.next=66;break;case 51:f=[],v="";case 53:return console.log("fetching data from "+v),e.next=56,fetch("https://nithp.herokuapp.com/api/result/student?branch=".concat(t,"&roll=").concat(a,"%&limit=200&next_cursor=").concat(v));case 56:return p=e.sent,e.next=59,p.json();case 59:x=e.sent,f=f.concat(x.data),v=x.pagination.next_cursor;case 62:if(""!=v){e.next=53;break}case 63:r=f,s={data:f,pagination:{next_cursor:""},expires:(new Date).getTime()+2592e6},localStorage.setItem("Jan 2021:::"+c,JSON.stringify(s));case 66:return e.abrupt("return",r);case 67:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),oe=function(e){var t=1;if(e[0].Rank=1,"c"==I)for(var a=1;a<e.length;++a)e[a-1].cgpi!=e[a].cgpi&&(t=a+1),e[a].Rank=t;else for(var c=1;c<e.length;++c)e[c-1].sgpi!=e[c].sgpi&&(t=c+1),e[c].Rank=t;return e},ue=function(e){var t=1;if(e[0].Rank=1,"c"==I)for(var a=1;a<e.length;++a)e[a-1].cgpi!=e[a].cgpi&&t++,e[a].Rank=t;else for(var c=1;c<e.length;++c)e[c-1].sgpi!=e[c].sgpi&&t++,e[c].Rank=t;return e},de=function(e){return e.forEach((function(e,t){e.Rank=t+1})),e};return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{lastUpdated:"Jan 2021"}),Object(d.jsx)(O,{branch:r,setBranch:l,batch:j,setBatch:g,searchString:_,setSearchString:R,ranking:L,setRanking:E,cs:I,setCs:U}),Object(d.jsx)("div",{id:"res_cnt",children:se?se+" results...":null}),Object(d.jsx)("div",{className:"container",children:null===Y||void 0===Y?void 0:Y.slice(D*N,Math.min(D*N+N,Y.length)).map((function(e){return Object(d.jsx)(k,{stud:e,cs:I},e.roll)}))}),Math.floor((null===Y||void 0===Y?void 0:Y.length)/N)?Object(d.jsxs)("div",{className:"pagination",children:[Object(d.jsx)("div",{className:"btn",onClick:function(){return F((function(e){return Math.max(0,e-1)}))},children:"Prev"}),Object(d.jsx)("div",{className:"page",children:D+1}),Object(d.jsx)("div",{className:"btn",onClick:function(){return F((function(e){return Math.min(e+1,Math.floor(Y.length/N))}))},children:"Next"})]}):null,Object(d.jsx)(f,{hits:te})]})}a(41);function E(e){e.history;var t=e.match,a=Object(c.useState)(),n=Object(i.a)(a,2),s=n[0],r=n[1];if(Object(c.useEffect)((function(){fetch("https://nithp.herokuapp.com/api/result/student/".concat(t.params.roll)).then((function(e){return e.json()})).then((function(e){console.log(e),r(e)}))}),[]),!s)return null;var l=[8,7,6,5,4,3,2,1].map((function(e){return s.result.filter((function(t){return t.sem==e}))})).filter((function(e){return e.length}));return console.log(l),Object(d.jsxs)("div",{className:"fullResult",children:[Object(d.jsxs)("div",{className:"stInfo",children:[Object(d.jsxs)("div",{className:"stDesc",children:[Object(d.jsx)("div",{className:"stName",children:s.name}),Object(d.jsxs)("div",{className:"stRoll",children:[s.roll," ",s.branch]})]}),Object(d.jsxs)("div",{className:"stcg",children:[Object(d.jsx)("div",{className:"cp",children:s.cgpi}),Object(d.jsx)("div",{className:"cp_total",children:s.summary[s.summary.length-1].cgpi_total})]}),Object(d.jsxs)("div",{className:"ranks",children:[Object(d.jsxs)("div",{className:"rk",children:[Object(d.jsxs)("span",{className:"rkt",children:["#_ ",s.rank.class.cgpi]})," class"]}),Object(d.jsxs)("div",{className:"rk",children:[Object(d.jsxs)("span",{className:"rkt",children:["#_ ",s.rank.year.cgpi]})," year"]}),Object(d.jsxs)("div",{className:"rk",children:[Object(d.jsxs)("span",{className:"rkt",children:["#_ ",s.rank.college.cgpi]})," college"]})]})]}),Object(d.jsx)("div",{className:"stSemesters",children:l.map((function(e){return Object(d.jsxs)("div",{className:"sem",children:[Object(d.jsxs)("div",{className:"stsg",children:[Object(d.jsxs)("div",{class:"semN",children:["Sem ",e[0].sem]}),Object(d.jsxs)("div",{class:"sg_total",children:[" ","+",s.summary[e[0].sem-1].sgpi_total]}),Object(d.jsx)("div",{class:"sg",children:s.summary[e[0].sem-1].sgpi})]}),Object(d.jsx)("div",{className:"subs",children:e.map((function(e){return Object(d.jsxs)("div",{className:"sub",children:[Object(d.jsx)("div",{className:"code",children:e.subject}),Object(d.jsx)("div",{className:"grade ".concat(e.grade),children:Number(e.sub_gp)/Number(e.sub_point)})]})}))})]})}))})]})}a(42);var C=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("dark"))),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=document.querySelector(".dark_toggle .cover");!0===a?(localStorage.setItem("dark",!0),document.body.classList.add("dark"),e.style.width="1.7em",e.style.height="1.7em",e.style.background="#111"):(localStorage.setItem("dark",!1),document.body.classList.remove("dark"),e.style.width="2.5em",e.style.height="2.5em",e.style.background="#ffd700")}),[a]),Object(d.jsx)(l.a,{children:Object(d.jsxs)(u.Provider,{value:{darkMode:a,setDarkMode:n},children:[Object(d.jsx)(h,{setDarkMode:n,darkMode:a}),Object(d.jsx)(o.a,{exact:!0,path:"/",component:L}),Object(d.jsx)(o.a,{exact:!0,path:"/r/:roll",component:E})]})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),S()}},[[43,1,2]]]);
//# sourceMappingURL=main.c6b5d082.chunk.js.map
(this.webpackJsonpjazwang=this.webpackJsonpjazwang||[]).push([[0],{13:function(e,t,n){},136:function(e,t){},154:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(59),s=n.n(i),o=(n(13),n(22)),j=n(8);n(74);var l=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],i=function(){return r(!1)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsx)("div",{className:"menu-icon",onClick:function(){return r(!n)},children:Object(c.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}),Object(c.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{to:"/home",className:"nav-links",onClick:i,children:"home"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{to:"/video",className:"nav-links",onClick:i,children:"video"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{to:"/blog",className:"nav-links",onClick:i,children:"blog"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{to:"/about",className:"nav-links",onClick:i,children:"about"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{to:"/contact",className:"nav-links",onClick:i,children:"contact"})})]})]})})},b=n.p+"static/media/web-logo.40b28de0.png";function d(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:b})})}var h=n(3);function u(){return Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("h1",{children:"video"}),Object(c.jsx)("a",{href:"https://www.youtube.com/channel/UC3SSXBY7FpecK0d9r7n9uqA",rel:"noreferrer",target:"_blank",style:{display:"flex",fontSize:"25px",textDecoration:"underline"},children:"Coding With Jaz"})]})}var x=n(31),O=n.n(x),m=n(60),p=n(35)().bucket({slug:"jazwang",read_key:"DDto92wu9j5QzAxwrE8eoapcSyY2dyfT8euA3YLI8xFcjqXNlt"});function f(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1];if(Object(a.useEffect)((function(){(function(){var e=Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getObjects({type:"blogs",props:"slug,title,content"});case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!n)return Object(c.jsx)("div",{className:"page",children:Object(c.jsx)("h1",{children:"blog"})});var i=n.objects;return Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("h1",{children:"blog"}),Object(c.jsx)("div",{className:"container",children:i.map((function(e){return Object(c.jsx)(j.b,{to:"/blogs/".concat(e.slug),className:"card",children:Object(c.jsx)("div",{children:Object(c.jsx)("h3",{style:{margin:10,fontSize:"25px",textDecoration:"underline",fontWeight:500},children:e.title})})},e.slug)}))})]})}var g=n(15),v=n(16),w=n(23),y=n(24);function k(){var e=Object(g.a)(["\nbackground: none;\nfont-size: 30px;\ndisplay: flex;\ngrid-gap: 10px;\nflex-direction: row;\njustify-content: flex-start;\nposition: relative;\n@media (max-width: 420px) {\n    margin: 20px 0;\n  }\n"]);return k=function(){return e},e}function N(){var e=Object(g.a)(["\n"]);return N=function(){return e},e}function S(){return Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("h1",{children:"contact"}),Object(c.jsxs)(z,{children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Feel free to get in touch! You can email me at",Object(c.jsx)("a",{href:"mailto:codingwithjaz@gmail.com",children:" here"}),".",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]}),Object(c.jsxs)(C,{children:[Object(c.jsx)("a",{href:"https://www.youtube.com/channel/UC3SSXBY7FpecK0d9r7n9uqA",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(w.a,{icon:y.c})}),Object(c.jsx)("a",{href:"http://linkedin.com/in/jingyi-jasmine-wang",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(w.a,{icon:y.b})}),Object(c.jsx)("a",{href:"https://www.instagram.com/jaz_wang",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(w.a,{icon:y.a})})]})]})]})}var z=v.a.div(N()),C=v.a.div(k()),I=n.p+"static/media/profilepic.9952620b.JPG";function Y(){var e=Object(g.a)(["\n  width: 370px;\n  height: 370px;\n  border-radius: 50%;\n  object-fit: cover;\n  padding-left: 10px;\n  @media (max-width: 700px) {\n    padding: 20px 0 20px 0;\n    width: 80vw;\n    height: 80vw;\n    margin: auto;\n  }\n"]);return Y=function(){return e},e}function A(){var e=Object(g.a)(["\n"]);return A=function(){return e},e}function F(){var e=Object(g.a)(["\n  display: inline-block;\n  flex-direction: row-reverse;\n  @media (max-width: 700px) {\n    flex-direction: column;\n  }\n"]);return F=function(){return e},e}function _(){return Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("h1",{children:"about"}),Object(c.jsxs)(D,{children:[Object(c.jsx)(B,{src:I}),Object(c.jsx)(q,{children:Object(c.jsxs)("p",{children:["Hey! Glad you're here. :-)",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"My name is Jaz. I'm a software engineer, and I occasionally make Youtube videos on my ",Object(c.jsx)("a",{href:"https://www.youtube.com/channel/UC3SSXBY7FpecK0d9r7n9uqA",rel:"noreferrer",target:"_blank",children:"channel"}),".",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Some of my interests include hiking, building legos, kayaking, trying out new restaurants, and cuddling with cats.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"I also am addicted to Overcooked 2 on Switch (literally). I started playing in February 2020 and now I have spent over 400 hours on it.. It truly is a fun game tho! So if you see a parrot named flufiSfynx in the arcade of OC2, don't hesitate to say hello or befriend me!",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Here I share my thoughts and projects, and, who knows what I will come up with!",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"If you would like to message me, feel free to do so at ",Object(c.jsx)("a",{href:"mailto:codingwithjaz@gmail.com",children:" here"}),". Hoping to hear from you!",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]})})]})]})}var D=v.a.div(F()),q=v.a.div(A()),B=v.a.img(Y()),J=n(64),T=n(65),X=n(68),E=n(67),H=n(66),K=n.n(H),L=n(35)().bucket({slug:"jazwang",read_key:"DDto92wu9j5QzAxwrE8eoapcSyY2dyfT8euA3YLI8xFcjqXNlt"}),P=function(e){Object(X.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(J.a)(this,n),(e=t.call(this)).state={postTitle:"",postContent:""},e}return Object(T.a)(n,[{key:"getPost",value:function(){var e=this;L.getObject({slug:this.props.match.params.id,props:"title,content"}).then((function(e){return e.object})).then((function(t){e.setState({postTitle:t.title,postContent:t.content})}))}},{key:"componentDidMount",value:function(){this.getPost()}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("div",{children:Object(c.jsx)(j.b,{to:"/blog",children:Object(c.jsx)("h1",{children:" > Back"})})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:this.state.postTitle}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{style:{marginLeft:"20px",marginRight:"10px"},children:Object(c.jsx)("p",{children:K()(this.state.postContent)})})]})]})}}]),n}(r.a.Component);var U=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(j.a,{children:[Object(c.jsx)(l,{}),Object(c.jsxs)(h.d,{children:[Object(c.jsx)(h.b,{exact:!0,path:"/jazwang",children:Object(c.jsx)(h.a,{to:"/home"})}),Object(c.jsx)(h.b,{path:"/home",component:d}),Object(c.jsx)(h.b,{path:"/video",component:u}),Object(c.jsx)(h.b,{path:"/blog",component:f}),Object(c.jsx)(h.b,{path:"/contact",component:S}),Object(c.jsx)(h.b,{path:"/about",component:_}),Object(c.jsx)(h.b,{path:"/blogs/:id",component:P})]})]})})};s.a.render(Object(c.jsx)(U,{}),document.getElementById("root"))},74:function(e,t,n){}},[[154,1,2]]]);
//# sourceMappingURL=main.b581d2c5.chunk.js.map
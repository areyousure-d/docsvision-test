(this["webpackJsonpdocsvision-test"]=this["webpackJsonpdocsvision-test"]||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(38),i=n.n(a),s=n(147),o=n(134),u=n(135),l=n(4),j=function(e){var t=e.left,n=e.right;return Object(l.jsxs)(o.a,{flex:"auto",children:[Object(l.jsx)(u.a,{flex:"30%",minW:"300px",bg:"green.50",children:t}),Object(l.jsx)(u.a,{flex:"70%",bg:"blue.50",children:n})]})},d=function(e){var t=e.left,n=e.right;return Object(l.jsxs)(o.a,{margin:"0 auto",minH:"100vh",maxW:"1400px",minW:"720px",flexDirection:"column",justifyContent:"space-between",children:[Object(l.jsx)(b,{}),Object(l.jsx)(j,{left:t,right:n}),Object(l.jsx)(f,{})]})},b=function(){return Object(l.jsx)(u.a,{h:"50px",bg:"gray.200",display:"flex",alignItems:"center",pl:"20px",children:"Header"})},f=function(){return Object(l.jsx)(u.a,{h:"50px",bg:"gray.200",display:"flex",alignItems:"center",pl:"20px",children:"Footer"})},O=function(e){var t=e.onClick,n=e.children;return Object(l.jsx)(u.a,{onClick:t,as:"button",height:"24px",lineHeight:"1.2",transition:"all 0.2s cubic-bezier(.08,.52,.52,1)",border:"1px",px:"8px",borderRadius:"2px",fontSize:"14px",fontWeight:"semibold",bg:"#f5f6f7",borderColor:"#ccd0d5",color:"#4b4f56",_hover:{bg:"#ebedf0"},_active:{bg:"#dddfe2",transform:"scale(0.98)",borderColor:"#bec3c9"},_focus:{boxShadow:"0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)"},mr:"5px",children:n})},p=n(148),x=function(){return Object(l.jsx)(o.a,{h:"200px",alignItems:"center",justifyContent:"center",children:Object(l.jsx)(p.a,{})})},h=n(149),v=n(136),g=function(e){var t=e.title,n=e.text,c=e.onClose;return Object(l.jsxs)(h.a,{status:"error",children:[Object(l.jsx)(h.c,{}),Object(l.jsx)(h.d,{mr:2,children:t}),Object(l.jsx)(h.b,{children:n}),Object(l.jsx)(v.a,{position:"absolute",right:"8px",top:"8px",onClick:c})]})},m=n(21),C=n(146),y=n(19),w=n.n(y),S=n(30),I=n(12),k=n(79);k.a.initializeApp({apiKey:"AIzaSyD6DnGbVfdJlDJ_pEOUfDfTDJrA8j3lIs8",authDomain:"dv-inventory.firebaseapp.com",databaseURL:"https://dv-inventory.firebaseio.com",projectId:"dv-inventory",storageBucket:"dv-inventory.appspot.com",messagingSenderId:"130062240176",appId:"1:130062240176:web:ecbca5d29b37d25c6cee75"});var M=function(){var e=Object(S.a)(w.a.mark((function e(){var t,n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=k.a.firestore(),e.next=3,t.collection("places").get();case 3:return n=e.sent,c=n.docs.map((function(e){return{id:e.id,name:e.data().name,parts:e.data().parts&&e.data().parts.map((function(e){return e.id}))}})),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=n(23);function D(e){return e.filter((function(e){return void 0!==e.id&&void 0!==e.name&&void 0!==e.count&&void 0!==e.placeId}))}var T=function(){var e=Object(S.a)(w.a.mark((function e(){var t,n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=k.a.firestore(),e.next=3,t.collection("inventory").get();case 3:return n=e.sent,c=n.docs.map((function(e){return{id:e.id&&e.id,name:e.data&&e.data().name,count:e.data&&e.data().count,placeId:e.data&&e.data().place&&e.data().place.id}})),e.abrupt("return",D(c));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(S.a)(w.a.mark((function e(t,n,c){var r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=k.a.firestore(),e.next=3,r.collection("inventory").doc().set({name:t,count:n,place:r.collection("places").doc(c)});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),P=function(){var e=Object(S.a)(w.a.mark((function e(t){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k.a.firestore(),e.next=3,n.collection("inventory").doc(t).delete();case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(S.a)(w.a.mark((function e(t,n){var c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=k.a.firestore(),e.next=3,c.collection("inventory").doc(t).update(Object(E.a)({},n));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=Object(I.e)({isCurrentPlaceLast:!1,currentPlaceId:"",placesTree:{id:"buildings",name:"\u0412\u0441\u0435 \u0437\u0434\u0430\u043d\u0438\u044f",parts:[]},inventories:[]}),L=Object(I.c)(Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),A=Object(I.c)(Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),N=Object(I.c)(function(){var e=Object(S.a)(w.a.mark((function e(t){var n,c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,c=t.count,r=t.placeId,e.next=3,W(n,c,r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),_=Object(I.c)(function(){var e=Object(S.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.inventoryId,e.next=3,P(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(I.c)(function(){var e=Object(S.a)(w.a.mark((function e(t){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.inventoryId,c=t.newInventory,e.next=3,B(n,c);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),J=Object(I.d)(),H=Object(I.d)(),R=function(){var e=Object(m.a)(F).placesTree,t=Object(m.a)(L.pending);return Object(c.useEffect)((function(){L()}),[]),t?Object(l.jsx)(x,{}):Object(l.jsx)(C.a,{defaultIndex:[0],allowMultiple:!0,children:e&&U(e)})};function U(e){return e.parts.length>0?"buildings"===e.id?Object(l.jsx)(l.Fragment,{children:e.parts.map((function(e){return U(e)}))}):Object(l.jsx)(X,{placeId:e.id,title:e.name,children:e.parts.map((function(e){return U(e)}))},e.id):Object(l.jsx)(Y,{id:e.id,name:e.name},e.id)}var G=n(5),K=n(152),V=n(34);function q(e,t){var n=[],c=function(e,t){var n=null;return Q(t,(function(t){t.id===e&&(n=t)})),n}(e,t);return Q(c,(function(e){n.push(e.id)})),n}function Q(e,t){if(null!==e){var n=[e];if(t)for(;n.length;){var c=n[0];n.shift(),t(c);var r,a=Object(V.a)(c.parts);try{for(a.s();!(r=a.n()).done;){var i=r.value;n.push(i)}}catch(s){a.e(s)}finally{a.f()}}}}var X=function(e){var t=e.placeId,n=e.title,r=e.children,a=Object(c.useState)(!1),i=Object(G.a)(a,2),s=i[0],o=i[1],j=Object(m.a)(F),d=j.currentPlaceId,b=j.inventories,f=j.placesTree,O=Object(c.useState)(t===d),p=Object(G.a)(O,2),x=p[0],h=p[1];Object(c.useEffect)((function(){var e=q(t,f),n=!1;b.forEach((function(t){e.includes(t.placeId)&&(n=!0)})),o(n)}),[b,t,f]),Object(c.useEffect)((function(){h(d===t)}),[d,t]);return Object(l.jsxs)(C.d,{placeid:t,pr:"0",children:[n&&Object(l.jsx)("h2",{children:Object(l.jsxs)(C.b,{onClick:function(){J(t),H(!1)},bg:x?"green.300":void 0,transition:"background .2s",_hover:{cursor:"pointer",bg:x?"green.300":"rgba(200, 200, 200, .5)",transition:"background .2s"},children:[Object(l.jsxs)(u.a,{flex:"1",textAlign:"left",p:"0",pl:"5px",children:[n," ",s&&Object(l.jsx)(K.a,{color:"green.800"})]}),Object(l.jsx)(C.c,{})]})}),Object(l.jsx)(C.e,{pr:"0",children:r})]})},Y=function(e){var t=e.id,n=e.name,r=Object(c.useState)(!1),a=Object(G.a)(r,2),i=a[0],s=a[1],o=Object(m.a)(F),j=o.currentPlaceId,d=o.inventories,b=Object(c.useState)(j===t),f=Object(G.a)(b,2),O=f[0],p=f[1];Object(c.useEffect)((function(){var e=!1;d.forEach((function(n){n.placeId===t&&(e=!0)})),s(e)}),[d,t]),Object(c.useEffect)((function(){p(j===t)}),[j,t]);return Object(l.jsxs)(u.a,{bg:O?"green.300":void 0,onClick:function(){J(t),H(!0)},flex:"1",mb:"10px",ml:"10px",textAlign:"left",p:"5px",pl:"10px",transition:"background .2s",_hover:{cursor:"pointer",bg:O?"green.300":"rgba(200, 200, 200, .5)",transition:"background .2s"},children:[n," ",i&&Object(l.jsx)(K.a,{color:"green.800"})]})},Z=n(140),$=function(e){var t=e.id,n=e.name,c=e.count,r=e.onEditModalOpen,a=e.onDeleteModalOpen,i=Object(m.a)(F).isCurrentPlaceLast;return Object(l.jsxs)(Z.b,{bg:"blue.200",p:2,display:"flex",minW:"400px",maxW:"1024px",justifyContent:"space-between",mb:"10px",flexWrap:"wrap",children:[Object(l.jsxs)(u.a,{display:"flex",justifyContent:"space-between",minW:"400px",flexWrap:"wrap",pr:"10px",children:[Object(l.jsxs)("span",{children:["\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435: ",Object(l.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",n]})," "]}),Object(l.jsxs)("span",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ",Object(l.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",c]})]})]}),i?Object(l.jsxs)(u.a,{display:"flex",flexWrap:"nowrap",children:[Object(l.jsx)(O,{onClick:function(){return r(t,n,c)},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(l.jsx)(O,{onClick:function(){return a(t,n)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]}):null]})},ee=function(e){var t=e.onEditModalOpen,n=e.onDeleteModalOpen,r=Object(c.useState)([]),a=Object(G.a)(r,2),i=a[0],s=a[1],o=Object(m.a)(F),u=o.inventories,j=o.currentPlaceId,d=o.placesTree;Object(c.useEffect)((function(){A()}),[]),Object(c.useEffect)((function(){var e=q(j,d);s(e)}),[j,d]);var b=u.filter((function(e){return"buildings"===j||i.includes(e.placeId)}));return Object(m.a)(A.pending)?Object(l.jsx)(x,{}):Object(l.jsx)(Z.a,{children:b.map((function(e){return Object(l.jsx)($,{id:e.id,name:e.name,count:e.count,onEditModalOpen:t,onDeleteModalOpen:n},e.id)}))})},te=n(145),ne=n(144),ce=n(51),re=n(141),ae=n(150),ie=n(151),se=function(e){var t=e.isOpen,n=e.onClose,r=e.currentPlaceId,a=Object(te.a)(),i=Object(c.useState)(""),s=Object(G.a)(i,2),o=s[0],u=s[1],j=Object(c.useState)(!1),d=Object(G.a)(j,2),b=d[0],f=d[1],O=Object(c.useState)(0),p=Object(G.a)(O,2),x=p[0],h=p[1],v=Object(c.useState)(!1),C=Object(G.a)(v,2),y=C[0],w=C[1],S=Object(c.useState)(!1),I=Object(G.a)(S,2),k=I[0],M=I[1],E=Object(c.useState)(!1),D=Object(G.a)(E,2),T=D[0],W=D[1];return Object(l.jsxs)(ne.a,{isOpen:t,onClose:n,children:[Object(l.jsx)(ne.g,{}),Object(l.jsxs)(ne.d,{children:[Object(l.jsx)(ne.f,{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(l.jsx)(ne.c,{}),Object(l.jsxs)(ne.b,{pb:6,children:[Object(l.jsxs)(ce.a,{children:[Object(l.jsx)(re.a,{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(l.jsx)(ae.a,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){u(e.currentTarget.value),f(!1)},value:o}),b&&Object(l.jsx)(g,{title:"\u041e\u0448\u0438\u0431\u043a\u0430!",text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435!",onClose:function(){return f(!1)}})]}),Object(l.jsxs)(ce.a,{mt:4,children:[Object(l.jsx)(re.a,{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(l.jsx)(ae.a,{type:"number",placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",onChange:function(e){h(Number(e.currentTarget.value)),w(!1),M(!1),W(!1)},value:x.toString()}),y&&Object(l.jsx)(g,{title:"\u041e\u0448\u0438\u0431\u043a\u0430!",text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e!",onClose:function(){return w(!1)}}),k&&Object(l.jsx)(g,{title:"\u041e\u0448\u0438\u0431\u043a\u0430!",text:"\u041d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c.",onClose:function(){return M(!1)}}),T&&Object(l.jsx)(g,{title:"\u041e\u0448\u0438\u0431\u043a\u0430!",text:"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e.",onClose:function(){return W(!1)}})]})]}),Object(l.jsxs)(ne.e,{children:[Object(l.jsx)(ie.a,{colorScheme:"blue",mr:3,onClick:function(){if(""===o&&f(!0),0===x&&w(!0),x<0&&M(!0),x>1e3&&W(!0),!(""===o||0===x||x<0||x>1e3)){N({name:o,count:x,placeId:r});var e=N.done.watch((function(){h(0),u(""),n(),a({title:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435.",description:"\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e.",status:"success",duration:5e3,isClosable:!0}),e()})),t=N.fail.watch((function(){n(),a({title:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435.",description:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435.",status:"error",duration:5e3,isClosable:!0}),t()}))}},isLoading:Object(m.a)(N.pending),loadingText:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(l.jsx)(ie.a,{onClick:n,children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})]})},oe=function(e){var t=e.isOpen,n=e.onClose,r=e.editModalId,a=e.editModalName,i=e.editModalCount,s=Object(te.a)(),o=Object(c.useState)(a),u=Object(G.a)(o,2),j=u[0],d=u[1],b=Object(c.useState)(!1),f=Object(G.a)(b,2),O=f[0],p=f[1],x=Object(c.useState)(i),h=Object(G.a)(x,2),v=h[0],C=h[1],y=Object(c.useState)(!1),w=Object(G.a)(y,2),S=w[0],I=w[1],k=Object(c.useState)(!1),M=Object(G.a)(k,2),E=M[0],D=M[1],T=Object(c.useState)(!1),W=Object(G.a)(T,2),P=W[0],B=W[1];Object(c.useEffect)((function(){d(a),C(i)}),[a,i]);return Object(l.jsxs)(ne.a,{isOpen:t,onClose:n,children:[Object(l.jsx)(ne.g,{}),Object(l.jsxs)(ne.d,{children:[Object(l.jsx)(ne.f,{children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(l.jsx)(ne.c,{}),Object(l.jsxs)(ne.b,{pb:6,children:[Object(l.jsxs)(ce.a,{children:[Object(l.jsx)(re.a,{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(l.jsx)(ae.a,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){d(e.currentTarget.value),p(!1)},value:j}),O&&Object(l.jsx)(g,{title:"\u041e\u0448\u0438\u0431\u043a\u0430!",text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435!",onClose:function(){return p(!1)}})]}),Object(l.jsxs)(ce.a,{mt:4,children:[Object(l.jsx)(re.a,{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(l.jsx)(ae.a,{type:"number",placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",onChange:function(e){C(Number(e.currentTarget.value)),I(!1),D(!1),B(!1)},value:v.toString()}),S&&Object(l.jsx)(g,{title:"\u041e\u0448\u0438\u0431\u043a\u0430!",text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e!",onClose:function(){return I(!1)}}),E&&Object(l.jsx)(g,{title:"\u041e\u0448\u0438\u0431\u043a\u0430!",text:"\u041d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c.",onClose:function(){return D(!1)}}),P&&Object(l.jsx)(g,{title:"\u041e\u0448\u0438\u0431\u043a\u0430!",text:"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e.",onClose:function(){return B(!1)}})]})]}),Object(l.jsxs)(ne.e,{children:[Object(l.jsx)(ie.a,{colorScheme:"blue",mr:3,onClick:function(){if(""===j&&p(!0),0===v&&I(!0),v<0&&D(!0),v>1e3&&B(!0),!(""===j||0===v||v<0||v>1e3)){z({inventoryId:r,newInventory:{name:j,count:v}});var e=z.done.watch((function(){n(),s({title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435.",description:"\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e.",status:"success",duration:5e3,isClosable:!0}),e()})),t=z.fail.watch((function(){n(),s({title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435.",description:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435.",status:"error",duration:5e3,isClosable:!0}),t()}))}},isLoading:Object(m.a)(z.pending),loadingText:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(l.jsx)(ie.a,{onClick:n,children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})]})},ue=n(142),le=function(e){var t=e.isOpen,n=e.onClose,c=e.deleteModalId,r=e.deleteModalName,a=Object(te.a)();return Object(l.jsxs)(ne.a,{isOpen:t,onClose:n,children:[Object(l.jsx)(ne.g,{}),Object(l.jsxs)(ne.d,{children:[Object(l.jsx)(ne.f,{children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(l.jsx)(ne.c,{}),Object(l.jsx)(ne.b,{children:Object(l.jsxs)(ue.a,{children:["\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c ",r,"?"]})}),Object(l.jsxs)(ne.e,{children:[Object(l.jsx)(ie.a,{colorScheme:"blue",mr:3,onClick:n,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(l.jsx)(ie.a,{colorScheme:"red",onClick:function(){_({inventoryId:c});var e=_.done.watch((function(){n(),a({title:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435.",description:"\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e.",status:"success",duration:5e3,isClosable:!0}),e()})),t=_.fail.watch((function(){n(),a({title:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435.",description:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435.",status:"error",duration:5e3,isClosable:!0}),t()}))},isLoading:Object(m.a)(_.pending),loadingText:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})]})},je=n(143),de=function(){var e=Object(m.a)(F),t=e.isCurrentPlaceLast,n=e.currentPlaceId,r=Object(c.useState)(!1),a=Object(G.a)(r,2),i=a[0],s=a[1],j=Object(c.useState)(!1),d=Object(G.a)(j,2),b=d[0],f=d[1],O=Object(c.useState)(""),p=Object(G.a)(O,2),x=p[0],h=p[1],v=Object(c.useState)(""),g=Object(G.a)(v,2),C=g[0],y=g[1],w=Object(c.useState)(0),S=Object(G.a)(w,2),I=S[0],k=S[1],M=Object(c.useState)(!1),E=Object(G.a)(M,2),D=E[0],T=E[1],W=Object(c.useState)(""),P=Object(G.a)(W,2),B=P[0],L=P[1],A=Object(c.useState)(""),N=Object(G.a)(A,2),_=N[0],z=N[1];return Object(l.jsxs)(u.a,{p:2,children:[Object(l.jsxs)(o.a,{justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:[Object(l.jsx)(je.a,{size:"md",textAlign:"center",children:"\u0418\u043c\u0435\u044e\u0449\u0435\u0435\u0441\u044f \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435"}),t&&Object(l.jsx)(ie.a,{onClick:function(){return s(!0)},bg:"green.300",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435"})]}),Object(l.jsx)(u.a,{pt:4,children:Object(l.jsx)(ee,{onEditModalOpen:function(e,t,n){h(e),y(t),k(n),f(!0)},onDeleteModalOpen:function(e,t){L(e),z(t),T(!0)}})}),Object(l.jsx)(se,{isOpen:i,onClose:function(){return s(!1)},currentPlaceId:n}),Object(l.jsx)(oe,{isOpen:b,onClose:function(){return f(!1)},editModalId:x,editModalName:C,editModalCount:I}),Object(l.jsx)(le,{isOpen:D,onClose:function(){return T(!1)},deleteModalId:B,deleteModalName:_})]})},be=n(50),fe=n(39),Oe=function e(t,n){Object(fe.a)(this,e),this.id=void 0,this.name=void 0,this.parts=void 0,this.id=t,this.name=n,this.parts=[]},pe=function(){function e(){Object(fe.a)(this,e),this.root=void 0,this.root={id:"buildings",name:"\u0412\u0441\u0435 \u0437\u0434\u0430\u043d\u0438\u044f",parts:[]}}return Object(be.a)(e,[{key:"add",value:function(e,t,n){var c=new Oe(e,t),r=n?this.findBFS(n):this.findBFS("buildings");r&&r.parts.push(c)}},{key:"findBFS",value:function(e){this.root;var t=null;return this.traverseBFS((function(n){n.id===e&&(t=n)})),t}},{key:"traverseBFS",value:function(e){var t=[this.root];if(e)for(;t.length;){var n=t[0];t.shift(),e(n);var c,r=Object(V.a)(n.parts);try{for(r.s();!(c=r.n()).done;){var a=c.value;t.push(a)}}catch(i){r.e(i)}finally{r.f()}}}}]),e}();function xe(e,t,n,c){if(!e.findBFS(n.id)){e.add(n.id,n.name,c);var r=n.id;n.parts&&n.parts.length>0&&n.parts.forEach((function(n){var c=t.findIndex((function(e){return e.id===n})),a=t[c];xe(e,t,a,r)}))}}F.on(L.doneData,(function(e,t){for(var n=new pe,c=0;c<t.length;c++)xe(n,t,t[c]);return Object(E.a)(Object(E.a)({},e),{},{placesTree:n.root})})),F.on(A.doneData,(function(e,t){return Object(E.a)(Object(E.a)({},e),{},{inventories:t})})),F.on(H,(function(e,t){return Object(E.a)(Object(E.a)({},e),{},{isCurrentPlaceLast:t})})),F.on(J,(function(e,t){return Object(E.a)(Object(E.a)({},e),{},{currentPlaceId:t})})),Object(I.f)({from:N.done,to:A}),Object(I.f)({from:_.done,to:A}),Object(I.f)({from:z.done,to:A});var he=function(){return Object(l.jsx)(d,{left:Object(l.jsx)(R,{}),right:Object(l.jsx)(de,{})})};var ve=function(){return Object(l.jsx)(he,{})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(ve,{})})}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.3b717a4a.chunk.js.map
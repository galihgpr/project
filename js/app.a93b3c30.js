(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/project/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"375d":function(t,e,a){"use strict";var n=a("f437"),i=a.n(n);i.a},"43b1":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view")],1)},s=[],r={name:"App"},o=r,c=(a("034f"),a("2877")),l=Object(c["a"])(o,i,s,!1,null,null,null),u=l.exports,d=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("navbar"),a("jumbotron")],1)},p=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticClass:"white--text font-weight-bold",attrs:{tag:"nav",color:"blue darken-2"}},[a("h3",[t._v("ToDoList")])])},f=[],b={name:"navbar",data:function(){return{menus:["Beranda","About us"],collapseOnScroll:!0}}},h=b,k=(a("ba57"),Object(c["a"])(h,v,f,!1,null,"1b5923e0",null)),x=k.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",{staticClass:"coba blue darken-2"},[a("v-container",[a("v-row",{staticClass:"white--text mt-md-0 mt-sm-10",attrs:{justify:"center","justify-lg":"space-around","justify-md":"space-between"}},[a("v-col",{staticClass:"ma-auto text-left",class:{"text-center":t.$vuetify.breakpoint.xs},attrs:{cols:"10",sm:"10",md:"6",xl:"6"}},[a("h1",[t._v("ToDoList merupakan platform yang membantu mengatur agenda anda")]),a("v-form",{staticClass:"mt-5"},[a("div",{staticClass:"inputname d-block d-sm-flex justify-center"},[a("div",{staticClass:"input mr-1",class:{max:t.$vuetify.breakpoint.xs}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.nama,expression:"nama"}],staticClass:"pa-2",class:{max:t.$vuetify.breakpoint.xs},attrs:{type:"text",placeholder:"Masukkan nama"},domProps:{value:t.nama},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)},input:function(e){e.target.composing||(t.nama=e.target.value)}}}),t.ceknama?a("p",{staticClass:"white--text text-left",class:{coba:t.$vuetify.breakpoint.xs}},[t._v("Nama harus dimasukkan")]):t._e()]),a("v-btn",{staticClass:"blue white--text my-auto",class:{"max mt-1":t.$vuetify.breakpoint.xs},on:{click:t.submit}},[t._v("Mulai Sekarang")])],1)])],1),a("v-col",{attrs:{cols:"10",sm:"10",md:"6",xl:"6"}},[a("v-img",{staticClass:"mx-auto mt-15",attrs:{src:t.image,width:"650"}})],1)],1)],1)],1)},_=[],y={name:"jumbotron",data:function(){return{nama:"",ceknama:!1,image:a("ef0e")}},methods:{submit:function(){if(""===this.nama)return this.ceknama=!0;this.$router.push("Todo/".concat(this.nama))}}},C=y,w=(a("867e"),Object(c["a"])(C,g,_,!1,null,"6409411b",null)),j=w.exports,O={name:"Home",components:{navbar:x,jumbotron:j}},$=O,P=(a("cccb"),Object(c["a"])($,m,p,!1,null,null,null)),S=P.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Todo"},[a("navbar"),a("kegiatan")],1)},E=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"kegiatan blue mt-0 white--text"},[a("h1",{staticClass:"text-center mt-10"},[t._v("Selamat Datang "+t._s(t.$route.params.id))]),a("div",{staticClass:"input ml-6 mt-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.kegiatan,expression:"kegiatan"}],staticClass:"rounded-lg pa-2 mb-1",attrs:{placeholder:"Masukkan kegiatan..."},domProps:{value:t.kegiatan},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add(e)},input:function(e){e.target.composing||(t.kegiatan=e.target.value)}}}),a("v-btn",{staticClass:"font-weight-bold",on:{click:t.add}},[t._v("Masukkan")])],1),a("v-row",{staticClass:"mx-2"},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6",xm:"6"}},[a("v-card",{attrs:{"min-height":"200px"}},[a("h3",{staticClass:"text-center red--text pt-2"},[t._v("Belum")]),t.aktivitas.length>0?a("v-alert",{staticClass:"mt-4 mx-7 py-1",attrs:{type:"error",dense:"",outlined:""}},[t._v(t._s(t.KegiatanBlm)+" kegiatan belum dilaksanakan")]):t._e(),t._l(t.aktivitas,(function(e,n){return a("div",{key:n,staticClass:"div"},[e.belum?a("v-row",{staticClass:"text-center mt-3 d-flex"},[e.edit?t._e():a("v-col",{staticClass:"py-1",attrs:{cols:"9"}},[a("p",{staticClass:"py-3 px-1 white--text blue rounded-pill mb-1 ml-2 font-weight-bold"},[t._v(t._s(e.nama))])]),e.edit?t._e():a("v-col",{staticClass:"d-flex flex-wrap justify-start pa-0",attrs:{cols:"3"}},[a("v-icon",{attrs:{size:"30px",color:"green"},on:{click:function(t){e.sudah=!e.sudah,e.belum=!e.belum}}},[t._v("mdi-check-circle")]),a("v-icon",{attrs:{size:"30px",color:"orange"},on:{click:function(t){e.edit=!e.edit}}},[t._v("mdi-pencil-circle")]),a("v-icon",{attrs:{size:"30px",color:"red"},on:{click:function(e){return t.hapus(n)}}},[t._v("mdi-delete-circle")])],1)],1):t._e(),e.edit&&e.belum?a("div",{staticClass:"mb-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.nama,expression:"aktif.nama"}],staticClass:"rounded-pill mx-2 edit mb-2 border py-2 px-3",attrs:{outlined:""},domProps:{value:e.nama},on:{input:function(a){a.target.composing||t.$set(e,"nama",a.target.value)}}}),a("v-chip",{staticClass:"white--text green",on:{click:function(a){return t.perbaiki(e.nama,n)}}},[t._v("edit")]),a("v-chip",{staticClass:"white--text red",on:{click:function(t){e.edit=!e.edit}}},[t._v("Batal")])],1):t._e()],1)}))],2)],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6",xm:"6"}},[a("v-card",{attrs:{"min-height":"200px"}},[a("h3",{staticClass:"text-center green--text pt-2"},[t._v("Selesai")]),t.aktivitas.length>0?a("v-alert",{staticClass:"mt-4 mx-7 py-1",attrs:{type:"success",dense:"",outlined:""}},[t._v(t._s(t.KegiatanSls)+" kegiatan sudah dilaksanakan")]):t._e(),t._l(t.aktivitas,(function(e,n){return a("div",{key:n,staticClass:"div"},[e.sudah?a("v-row",{staticClass:"text-center mt-3 d-flex"},[!e.edit&&e.sudah?a("v-col",{staticClass:"py-1",attrs:{cols:"9"}},[a("p",{staticClass:"py-3 px-1 white--text blue rounded-pill mb-1 ml-2 font-weight-bold"},[t._v(t._s(e.nama))])]):t._e(),e.edit?t._e():a("v-col",{staticClass:"d-flex justify-start pa-0",attrs:{cols:"3"}},[a("v-icon",{attrs:{size:"30px",color:"red"},on:{click:function(t){e.sudah=!e.sudah,e.belum=!e.belum}}},[t._v("mdi-alert")]),a("v-icon",{attrs:{size:"30px",color:"orange"},on:{click:function(t){e.edit=!e.edit}}},[t._v("mdi-pencil-circle")]),a("v-icon",{attrs:{size:"30px",color:"red"},on:{click:function(e){return t.hapus(n)}}},[t._v("mdi-delete-circle")])],1)],1):t._e(),e.edit&&e.sudah?a("div",{staticClass:"mb-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.nama,expression:"aktif.nama"}],staticClass:"rounded-pill mx-2 edit mb-2 border py-2 px-3",attrs:{outlined:""},domProps:{value:e.nama},on:{input:function(a){a.target.composing||t.$set(e,"nama",a.target.value)}}}),a("v-chip",{staticClass:"white--text green",on:{click:function(a){return t.perbaiki(e.nama,n)}}},[t._v("edit")]),a("v-chip",{staticClass:"white--text red",on:{click:function(t){e.edit=!e.edit}}},[t._v("Batal")])],1):t._e()],1)}))],2)],1)],1)],1)},z=[],B=(a("4de4"),a("a434"),{name:"kegiatan",data:function(){return{kegiatan:"",aktivitas:[]}},computed:{KegiatanBlm:function(){var t=this.aktivitas,e=t.filter((function(t){return!0===t.belum}));return e.length},KegiatanSls:function(){var t=this.aktivitas,e=t.filter((function(t){return!0===t.sudah}));return e.length}},methods:{add:function(){var t={nama:this.kegiatan,belum:!0,sudah:!1,edit:!1};this.aktivitas.push(t),this.kegiatan=""},hapus:function(t){this.aktivitas.splice(t,1)},perbaiki:function(t,e){console.log(t),console.log(e);var a=this.aktivitas;a[e].nama=t,a[e].edit=!1}}}),N=B,A=(a("e039"),Object(c["a"])(N,M,z,!1,null,"1612d094",null)),K=A.exports,D={name:"Todo",components:{kegiatan:K,navbar:x}},H=D,J=(a("375d"),Object(c["a"])(H,T,E,!1,null,null,null)),L=J.exports;n["default"].use(d["a"]);var q=new d["a"]({mode:"history",routes:[{path:"/",name:"Home",component:S},{path:"/Todo/:id",name:"Todo",component:L}]}),F=a("ce5b"),G=a.n(F);a("bf40"),a("5363");n["default"].use(G.a);var I=new G.a({icons:{iconfont:"mdi"}}),Q=a("1dce"),R=a.n(Q);n["default"].use(R.a),n["default"].config.productionTip=!1,new n["default"]({el:"#app",router:q,vuetify:I,validations:{},components:{App:u},template:"<App/>",render:function(t){return t(u)}}).$mount("#app")},"5b12":function(t,e,a){},"5ced":function(t,e,a){},"85ec":function(t,e,a){},"867e":function(t,e,a){"use strict";var n=a("ca38"),i=a.n(n);i.a},ba57:function(t,e,a){"use strict";var n=a("5b12"),i=a.n(n);i.a},ca38:function(t,e,a){},cccb:function(t,e,a){"use strict";var n=a("5ced"),i=a.n(n);i.a},e039:function(t,e,a){"use strict";var n=a("43b1"),i=a.n(n);i.a},ef0e:function(t,e,a){t.exports=a.p+"img/todo.15ce866c.svg"},f437:function(t,e,a){}});
//# sourceMappingURL=app.a93b3c30.js.map
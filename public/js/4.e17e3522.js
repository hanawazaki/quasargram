(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"04b7":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"constrain q-pa-md"},[e("div",{staticClass:"row q-col-gutter-lg"},[e("div",{staticClass:"col-sm-8 col-12"},[!t.loadingPosts&&t.posts.length?t._l(t.posts,(function(a){return e("q-card",{key:a.id,staticClass:"card-post q-mb-md",attrs:{flat:"",bordered:""}},[e("q-item",[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",[e("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})])],1),e("q-item-section",[e("q-item-label",{staticClass:"text-bold"},[t._v("hanawazaki")]),e("q-item-label",{attrs:{caption:""}},[t._v(t._s(a.location)+" ")])],1)],1),e("q-separator"),e("q-img",{attrs:{src:a.imgUrl}}),e("q-card-section",[e("div",[t._v(t._s(a.caption))]),e("div",{staticClass:"text-caption text-grey"},[t._v("\n              "+t._s(t._f("niceDate")(a.date))+"\n            ")])])],1)})):t.loadingPosts||t.posts.length?[e("q-card",{attrs:{flat:"",bordered:""}},[e("q-item",[e("q-item-section",{attrs:{avatar:""}},[e("q-skeleton",{attrs:{type:"QAvatar",animation:"fade",size:"40px"}})],1),e("q-item-section",[e("q-item-label",[e("q-skeleton",{attrs:{type:"text",animation:"fade"}})],1),e("q-item-label",{attrs:{caption:""}},[e("q-skeleton",{attrs:{type:"text",animation:"fade"}})],1)],1)],1),e("q-skeleton",{attrs:{height:"200px",square:"",animation:"fade"}}),e("q-card-section",[e("q-skeleton",{staticClass:"text-subtitle2",attrs:{type:"text",animation:"fade"}}),e("q-skeleton",{staticClass:"text-subtitle2",attrs:{type:"text",width:"50%",animation:"fade"}})],1)],1)]:[e("h5",{staticClass:"text-center text-grey"},[t._v("No posts yet.")])]],2),e("div",{staticClass:"col-4 large-screen-only"},[e("q-item",{staticClass:"fixed"},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{attrs:{size:"48px"}},[e("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})])],1),e("q-item-section",[e("q-item-label",{staticClass:"text-bold"},[t._v("hanawazaki")]),e("q-item-label",{attrs:{caption:""}})],1)],1)],1)])])},i=[],n=e("bd4c"),o={name:"PageHome",data:function(){return{posts:[],loadingPosts:!1}},filters:{niceDate:function(t){return n["a"].formatDate(t,"MMMM D h:mmA")}},methods:{getPosts:function(){var t=this;this.loadingPosts=!0,this.$axios.get("".concat("http://localhost:3001","/posts")).then((function(a){t.posts=a.data,t.loadingPosts=!1})).catch((function(a){t.$q.dialog({title:"Error",message:"Could not download post"}),t.loadingPosts=!0}))}},created:function(){this.getPosts()}},r=o,c=(e("83f0"),e("2877")),l=e("9989"),d=e("f09f"),m=e("66e5"),p=e("4074"),q=e("cb32"),g=e("0170"),f=e("eb85"),u=e("068f"),b=e("a370"),v=e("293e"),h=e("eebe"),x=e.n(h),C=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=C.exports;x()(C,"components",{QPage:l["a"],QCard:d["a"],QItem:m["a"],QItemSection:p["a"],QAvatar:q["a"],QItemLabel:g["a"],QSeparator:f["a"],QImg:u["a"],QCardSection:b["a"],QSkeleton:v["a"]})},"83f0":function(t,a,e){"use strict";e("b470")},b470:function(t,a,e){}}]);
"use strict";(self["webpackChunkshopweb_demo"]=self["webpackChunkshopweb_demo"]||[]).push([[704],{6704:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});e(7658);var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("van-nav-bar",{attrs:{fixed:"",title:"商品列表","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("van-search",{attrs:{value:t.querySearch||"搜索商品",readonly:"",shape:"round",background:"#ffffff","show-action":""},on:{click:function(s){return t.$router.push("/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[s("van-icon",{staticClass:"tool",attrs:{name:"apps-o"}})]},proxy:!0}])}),t._m(0),s("div",{staticClass:"goods-list"},t._l(t.proList,(function(t){return s("GoodsItem",{key:t.goods_id,attrs:{item:t}})})),1)],1)},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"sort-btns"},[s("div",{staticClass:"sort-item"},[t._v("综合")]),s("div",{staticClass:"sort-item"},[t._v("销量")]),s("div",{staticClass:"sort-item"},[t._v("价格 ")])])}],a=e(6621),n=e(1787),i={name:"SearchList",components:{GoodsItem:a.Z},computed:{querySearch(){return this.$route.query.item}},data(){return{page:"1",proList:[]}},async created(){const t=await(0,n.vT)({categoryId:this.$route.query.categoryId,goodsName:this.querySearch,page:this.page});this.proList=t.data.list.data,console.log(this.proList)}},c=i,u=e(1001),d=(0,u.Z)(c,o,r,!1,null,"3fc383e0",null),l=d.exports},1787:function(t,s,e){e.d(s,{Aw:function(){return a},ue:function(){return n},vT:function(){return r}});var o=e(4471);const r=t=>{const{categoryId:s,goodsName:e,page:r}=t;return o.Z.get("/goods/list",{params:{categoryId:s,goodsName:e,page:r}})},a=t=>o.Z.get("/goods/detail",{params:{goodsId:t}}),n=(t,s)=>o.Z.get("/comment/listRows",{params:{goodsId:t,limit:s}})}}]);
//# sourceMappingURL=704.3943364f.js.map
"use strict";(self["webpackChunkshopweb_demo"]=self["webpackChunkshopweb_demo"]||[]).push([[258],{3258:function(s,t,e){e.r(t),e.d(t,{default:function(){return u}});e(7658);var a=function(){var s=this,t=s._self._c;return t("div",{staticClass:"pay"},[t("van-nav-bar",{attrs:{fixed:"",title:"订单结算台","left-arrow":""},on:{"click-left":function(t){return s.$router.go(-1)}}}),t("div",{staticClass:"address"},[t("div",{staticClass:"left-icon"},[t("van-icon",{attrs:{name:"logistics"}})],1),s.addressList.length>0?t("div",{staticClass:"info"},[t("div",{staticClass:"info-content"},[t("span",{staticClass:"name"},[s._v(s._s(s.selected.name))]),t("span",{staticClass:"mobile"},[s._v(s._s(s.selected.phone))])]),t("div",{staticClass:"info-address"},[s._v(" "+s._s(s.selected.region.province+s.selected.region.city+s.selected.region.region+s.selected.detail)+" ")])]):t("div",{on:{click:function(t){return s.$router.push("/address")}}},[t("div",{staticClass:"info"},[s._v(" 请选择配送地址 ")])]),t("div",{staticClass:"right-icon"},[t("van-icon",{attrs:{name:"arrow"}})],1)]),s.order.goodsList?t("div",{staticClass:"pay-list"},[t("div",{staticClass:"list"},s._l(s.order.goodsList,(function(e){return t("div",{key:e.goods_id,staticClass:"goods-item"},[t("div",{staticClass:"left"},[t("img",{attrs:{src:e.goods_image,alt:""}})]),t("div",{staticClass:"right"},[t("p",{staticClass:"tit text-ellipsis-2"},[s._v(" "+s._s(e.goods_name)+" ")]),t("p",{staticClass:"info"},[t("span",{staticClass:"count"},[s._v("x"+s._s(e.total_num))]),t("span",{staticClass:"price"},[s._v("¥"+s._s(e.total_pay_price))])])])])})),0),t("div",{staticClass:"flow-num-box"},[t("span",[s._v("共 "+s._s(s.order.orderTotalNum)+" 件商品，合计：")]),t("span",{staticClass:"money"},[s._v("￥"+s._s(s.order.orderTotalPrice))])]),t("div",{staticClass:"pay-detail"},[t("div",{staticClass:"pay-cell"},[t("span",[s._v("订单总金额：")]),t("span",{staticClass:"red"},[s._v("￥"+s._s(s.order.orderTotalPrice))])]),s._m(0),t("div",{staticClass:"pay-cell"},[t("span",[s._v("配送费用：")]),s.selected?t("span",{staticClass:"red"},[s._v("+￥0.00")]):t("span",[s._v("请先选择配送地址")])])]),t("div",{staticClass:"pay-way"},[t("span",{staticClass:"tit"},[s._v("支付方式")]),t("div",{staticClass:"pay-cell"},[t("span",[t("van-icon",{attrs:{name:"balance-o"}}),s._v("余额支付（可用 ¥ "+s._s(s.personal.balance)+" 元）")],1),t("span",{staticClass:"red"},[t("van-icon",{attrs:{name:"passed"}})],1)])]),t("div",{staticClass:"buytips"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:s.remark,expression:"remark"}],attrs:{placeholder:"选填：买家留言（50字内）",name:"",id:"",cols:"30",rows:"10"},domProps:{value:s.remark},on:{input:function(t){t.target.composing||(s.remark=t.target.value)}}})])]):s._e(),t("div",{staticClass:"footer-fixed"},[t("div",{staticClass:"left"},[s._v("实付款："),t("span",[s._v("￥"+s._s(s.order.orderTotalPrice))])]),t("div",{staticClass:"tipsbtn",on:{click:s.orderSubmit}},[s._v("提交订单")])])],1)},i=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"pay-cell"},[t("span",[s._v("优惠券：")]),t("span",[s._v("无优惠券可用")])])}],r=e(170),o=e(7535),d={name:"PayIndex",data(){return{addressList:[],order:{},personal:{},remark:""}},computed:{selected(){return this.addressList[0]||[]},mode(){return this.$route.query.mode},cartIds(){return this.$route.query.cartIds},goodsId(){return this.$route.query.goodsId},goodsNum(){return this.$route.query.goodsNum},goodsSkuId(){return this.$route.query.goodsSkuId}},methods:{async getAddressList(){const s=await(0,r.mZ)();this.addressList=s.data.list},async checkOrderList(){if("cart"===this.mode){const{data:{order:s,personal:t}}=await(0,o.Gd)(this.mode,{cartIds:this.cartIds});this.order=s,this.personal=t}if("buyNow"===this.mode){const{data:{order:s,personal:t}}=await(0,o.Gd)(this.mode,{goodsId:this.goodsId,goodsNum:this.goodsNum,goodsSkuId:this.goodsSkuId});this.order=s,this.personal=t}},async orderSubmit(){"cart"===this.mode&&await(0,o.aN)(this.mode,{cartIds:this.cartIds,remark:this.remark}),"buyNow"===this.mode&&await(0,o.aN)(this.mode,{goodsId:this.goodsId,goodsNum:this.goodsNum,goodsSkuId:this.goodsSkuId,remark:this.remark}),this.$toast.success("支付成功"),this.$router.replace("/order")}},created(){this.getAddressList(),this.checkOrderList()}},n=d,c=e(1001),l=(0,c.Z)(n,a,i,!1,null,"7fdefa5c",null),u=l.exports},170:function(s,t,e){e.d(t,{bg:function(){return r},mZ:function(){return i}});var a=e(4471);const i=()=>a.Z.get("/address/list"),r=()=>a.Z.get("/region/tree")},7535:function(s,t,e){e.d(t,{Gd:function(){return i},aN:function(){return r},ue:function(){return o}});var a=e(4471);const i=(s,t)=>a.Z.get("/checkout/order",{params:{delivery:10,couponId:0,isUsePoints:0,mode:s,...t}}),r=(s,t)=>a.Z.post("/checkout/submit",{mode:s,delivery:10,couponId:0,isUsePoints:0,payType:10,...t}),o=(s,t)=>a.Z.get("/order/list",{params:{dataType:s,page:t}})}}]);
//# sourceMappingURL=258.6cf97d7b.js.map
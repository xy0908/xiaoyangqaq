import{f as p,Y as g,l as f,C as h,W as v,a5 as y,a6 as C,T as x,G as b,H as k,m as P,o as w,c as B,w as l,d as s,i as t,a as o,t as I,a4 as R,I as T}from"./app-d8e88b2b.js";import{_ as V}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-94c60785.js";const Y={text:"center",class:"yun-text-light",p:"2"},A={class:"page-action",text:"center"},D=["title"],E=o("div",{"i-ri-arrow-go-back-line":""},null,-1),G=[E],W=p({__name:"gallery",setup(H){const c=g(),{t:n}=f(),e=h(),r=v(e);y([C({"@type":"CollectionPage"})]);const a=x(()=>e.value.photos||[]),_=b().value.addons["valaxy-addon-lightgallery"]?k(()=>T(()=>import("./YunGallery-ce38228c.js"),["assets/YunGallery-ce38228c.js","assets/app-d8e88b2b.js","assets/index-6d0316be.css"])):()=>null;return(N,i)=>{const u=V,m=P("router-view"),d=R;return w(),B(d,null,{"main-header":l(()=>[s(u,{title:t(r)||t(n)("title.gallery"),icon:t(e).icon||"i-ri-gallery-line",color:t(e).color},null,8,["title","icon","color"])]),"main-content":l(()=>[o("div",Y,I(t(n)("counter.photos",a.value.length)),1),o("div",A,[o("a",{class:"yun-icon-btn",title:t(n)("accessibility.back"),onClick:i[0]||(i[0]=()=>t(c).back())},G,8,D)]),s(t(_),{photos:a.value},null,8,["photos"]),s(m)]),_:1})}}});export{W as default};
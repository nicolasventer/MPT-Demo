import{Db as k,Ea as w,Jb as v,W as y,m as g,n as m,o as c,r as n,t as E,vb as x,w as u,xb as f,y as o}from"./index.chunk-7b6aydxv.js";import{Rb as h}from"./index.chunk-kd8jf54j.js";import{$b as p}from"./index.chunk-ne3ra2y4.js";var l=!0;function e(t){return{render:function(r){c(r,t)},unmount:function(){n(t)}}}var d=l?{BASE_URL:"MPT-Demo"}:{BASE_URL:""};var s=({children:t})=>{return o(u,{theme:f,children:t},void 0,!1,void 0,this)};var R=(t)=>{return(a)=>o(g,{fallback:!0,children:o(t,{...a},void 0,!1,void 0,this)},void 0,!1,void 0,this)},I=(t)=>(r)=>r[t],b=R(m(()=>import("./pages/Coordinator.chunk-rc2wx437.js").then(I("CoordinatorPage"))));var A=()=>{const t=new URL(window.location.href);return k.theme=y(),o(h,{children:[o(v,{},void 0,!1,void 0,this),o(x,{position:"bottom-center",toastOptions:{duration:2000}},void 0,!1,void 0,this),o(s,{children:[o(w,{},void 0,!1,void 0,this),t.pathname===`${d.BASE_URL}/`&&o(b,{},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};if(!l)await import("../node_modules/preact/debug/dist/debug.module.chunk-xz4qeafm.js");if(!document.startViewTransition)document.startViewTransition=(t)=>{const r=new Promise((i)=>i(void 0)),a=new Promise((i)=>(t(),i(void 0))),C=new Promise((i)=>i(void 0));return{ready:r,finished:a,updateCallbackDone:C,skipTransition:()=>{}}};e(document.getElementById("root")).render(o(E,{children:o(A,{},void 0,!1,void 0,this)},void 0,!1,void 0,this));

import{z as a,r as t,G as l,I as e,N as o,J as r,L as s,u as n,Q as p,_ as i,H as m}from"./chunk-D1bmVKlW.js";import{_ as u}from"./chunk-DFocJlKq.js";import{u as b,i as d}from"./chunk-HxM6NHF3.js";import{s as c}from"./chunk-CzQyhFTa.js";import{u as g}from"./chunk-CpGxy-6g.js";import"./chunk-Xjp0aulL.js";import"./chunk-DSek3MSI.js";import"./chunk-DvCEEdEu.js";import"./chunk-D_NMWU_S.js";import"./chunk-BlSyArh7.js";import"./chunk-D8C0JLsp.js";import"./chunk-bMn3hkY1.js";import"./chunk-C6Zwkpkb.js";import"./chunk-BA-TsAJo.js";import"./chunk-BLnK4V6m.js";import"./chunk-DSeHMosA.js";import"./chunk-B1xQziYE.js";import"./chunk-Ygk_sErt.js";import"./chunk-Cjrd7Wf_.js";import"./chunk-BT_ACNP_.js";const h={class:"overflow-y-auto"},k={class:"flex items-center justify-start gap-10"},v={class:"flex flex-col"},j={class:"form-control"},f={class:"cursor-pointer label"},y={class:"label-text"},x=a({__name:"PersonAlready",setup(a){const{t:x}=g(),z=b().personConfig,{getAlreadyPersonList:N,getAlreadyPersonDetail:P}=c(z),w=t(!1);function A(a){z.moveAlreadyToNot(a)}const T=[{label:d.global.t("data.number"),props:"uid",sort:!0},{label:d.global.t("data.name"),props:"name"},{label:d.global.t("data.avatar"),props:"avatar",formatValue:a=>a.avatar?`<img src="${a.avatar}" alt="avatar" style="width: 50px; height: 50px;"/>`:"-"},{label:d.global.t("data.department"),props:"department"},{label:d.global.t("data.identity"),props:"identity"},{label:d.global.t("data.prizeName"),props:"prizeName",sort:!0},{label:d.global.t("data.operation"),actions:[{label:d.global.t("data.removePerson"),type:"btn-info",onClick:a=>{A(a)}}]}],_=[{label:d.global.t("data.number"),props:"uid",sort:!0},{label:d.global.t("data.number"),props:"name"},{label:d.global.t("data.avatar"),props:"avatar",formatValue:a=>a.avatar?`<img src="${a.avatar}" alt="avatar" style="width: 50px; height: 50px;"/>`:"-"},{label:d.global.t("data.department"),props:"department"},{label:d.global.t("data.identity"),props:"identity"},{label:d.global.t("data.prizeName"),props:"prizeName",sort:!0},{label:d.global.t("data.prizeTime"),props:"prizeTime"},{label:d.global.t("data.operation"),actions:[{label:d.global.t("data.removePerson"),type:"btn-info",onClick:a=>{A(a)}}]}];return(a,t)=>(m(),l("div",h,[e("h2",null,s(n(x)("viewTitle.winnerManagement")),1),e("div",k,[e("div",null,[e("span",null,s(n(x)("table.luckyPeopleNumber"))+"：",1),e("span",null,s(n(N).length),1)]),e("div",v,[e("div",j,[e("label",f,[e("span",y,s(n(x)("table.detail"))+":",1),p(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>w.value=a),type:"checkbox",class:"border-solid toggle toggle-primary border-1"},null,512),[[i,w.value]])])])])]),w.value?r("",!0):(m(),o(u,{key:0,"table-columns":T,data:n(N)},null,8,["data"])),w.value?(m(),o(u,{key:1,"table-columns":_,data:n(P)},null,8,["data"])):r("",!0)]))}});export{x as default};

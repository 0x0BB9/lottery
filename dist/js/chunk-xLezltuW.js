import{z as a,r as t,I as l,R as e,K as o,L as r,$ as s,u as n,U as p,a7 as i,J as m}from"./chunk-Bxt8shZV.js";import{_ as u}from"./chunk-CI6ckw5n.js";import{u as b,i as c}from"./chunk-ula1UdWb.js";import{s as d}from"./chunk-m8XeXVsD.js";import{u as g}from"./chunk-BdxN9jtc.js";import"./chunk-P8XhL4_m.js";import"./chunk-Dn6aMA63.js";import"./chunk-DvCEEdEu.js";import"./chunk-CRUM6r23.js";import"./chunk-CNMp7qr_.js";import"./chunk-BK5RcqpZ.js";import"./chunk-yuijXVOs.js";import"./chunk-C6Zwkpkb.js";import"./chunk-BA-TsAJo.js";import"./chunk-BLnK4V6m.js";import"./chunk-Ca9d1kJd.js";import"./chunk-l1vifrK4.js";import"./chunk-B_LJwPrj.js";import"./chunk-Cjrd7Wf_.js";import"./chunk-lNurITel.js";const h={class:"overflow-y-auto"},k={class:"flex items-center justify-start gap-10"},v={class:"flex flex-col"},j={class:"form-control"},y={class:"cursor-pointer label"},f={class:"label-text"},x=a({__name:"PersonAlready",setup(a){const{t:x}=g(),z=b().personConfig,{getAlreadyPersonList:w,getAlreadyPersonDetail:N}=d(z),P=t(!1);function A(a){z.moveAlreadyToNot(a)}const T=[{label:c.global.t("data.number"),props:"uid",sort:!0},{label:c.global.t("data.name"),props:"name"},{label:c.global.t("data.avatar"),props:"avatar",formatValue:a=>a.avatar?'<img src="'.concat(a.avatar,'" alt="avatar" style="width: 50px; height: 50px;"/>'):"-"},{label:c.global.t("data.department"),props:"department"},{label:c.global.t("data.identity"),props:"identity"},{label:c.global.t("data.prizeName"),props:"prizeName",sort:!0},{label:c.global.t("data.operation"),actions:[{label:c.global.t("data.removePerson"),type:"btn-info",onClick:a=>{A(a)}}]}],C=[{label:c.global.t("data.number"),props:"uid",sort:!0},{label:c.global.t("data.number"),props:"name"},{label:c.global.t("data.avatar"),props:"avatar",formatValue:a=>a.avatar?'<img src="'.concat(a.avatar,'" alt="avatar" style="width: 50px; height: 50px;"/>'):"-"},{label:c.global.t("data.department"),props:"department"},{label:c.global.t("data.identity"),props:"identity"},{label:c.global.t("data.prizeName"),props:"prizeName",sort:!0},{label:c.global.t("data.prizeTime"),props:"prizeTime"},{label:c.global.t("data.operation"),actions:[{label:c.global.t("data.removePerson"),type:"btn-info",onClick:a=>{A(a)}}]}];return(a,t)=>(m(),l("div",h,[e("h2",null,s(n(x)("viewTitle.winnerManagement")),1),e("div",k,[e("div",null,[e("span",null,s(n(x)("table.luckyPeopleNumber"))+"：",1),e("span",null,s(n(w).length),1)]),e("div",v,[e("div",j,[e("label",y,[e("span",f,s(n(x)("table.detail"))+":",1),p(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>P.value=a),type:"checkbox",class:"border-solid toggle toggle-primary border-1"},null,512),[[i,P.value]])])])])]),P.value?r("",!0):(m(),o(u,{key:0,"table-columns":T,data:n(w)},null,8,["data"])),P.value?(m(),o(u,{key:1,"table-columns":C,data:n(N)},null,8,["data"])):r("",!0)]))}});export{x as default};

import{z as e,c as l,I as a,R as t,Q as o,F as s,Y as r,a2 as u,J as n,r as c,w as i,a as d,$ as p,u as m,U as b,Z as v,L as f,V as h,a3 as x,C as w}from"./chunk-D7BOcSyB.js";import{_ as g,u as C,i as k,l as y,t as j,e as L,f as V}from"./chunk-DHS-J98v.js";import{d as P}from"./chunk-B9VykXv8.js";import{s as T}from"./chunk-DrcNqKZP.js";import{r as U}from"./chunk-ha7yzxqZ.js";import{u as _}from"./chunk-CmNriTaI.js";import{z as S}from"./chunk-CRCd6yBF.js";import"./chunk-Xjp0aulL.js";import"./chunk-DSek3MSI.js";import"./chunk-DvCEEdEu.js";import"./chunk-BWwx0SQ1.js";import"./chunk-BIn6qnQq.js";import"./chunk-CYfUI5Ys.js";import"./chunk-DwMdLFrw.js";import"./chunk-C6Zwkpkb.js";import"./chunk-BA-TsAJo.js";import"./chunk-BLnK4V6m.js";import"./chunk-DSeHMosA.js";import"./chunk-DC1XHIpb.js";import"./chunk-DE2u7Mu7.js";import"./chunk-Cjrd7Wf_.js";import"./chunk-BT_ACNP_.js";import"./chunk-DJ_qK68I.js";import"./chunk-DA-uKSXM.js";import"./chunk-B-a44JGF.js";import"./chunk-BedWOaN-.js";import"./chunk-COkxTHpp.js";import"./chunk-CFrBDmKk.js";import"./chunk-CKleymLE.js";const z={class:"w-full h-auto"},A=["onClick"],I=g(e({__name:"PatternSetting",props:{rowCount:{type:Number,default:17},cardColor:{type:String,default:"#fff"},patternColor:{type:String,default:"#000"},patternList:{type:Array,default:()=>[]}},setup(e){const c=e,i=l((()=>c));return(e,l)=>(n(),a("div",z,[t("ul",{class:"pattern-list",style:o({gridTemplateColumns:`repeat(${i.value.rowCount},1fr)`})},[(n(!0),a(s,null,r(7*i.value.rowCount,(e=>(n(),a("li",{key:e,class:"w-5 h-5",style:o({backgroundColor:i.value.patternList.includes(e)?i.value.patternColor:i.value.cardColor}),onClick:u((l=>function(e,l){if(i.value.patternList.includes(l)){const e=i.value.patternList.indexOf(l);i.value.patternList.splice(e,1)}else i.value.patternList.push(l)}(0,e)),["stop"])},null,12,A)))),128))],4)]))}}),[["__scopeId","data-v-170dfa96"]]),R={class:"modal-box"},D={class:"text-lg font-bold"},N={class:"py-4"},q={class:"modal-action"},B={method:"dialog",class:"flex gap-3"},F={class:"mb-8"},H={class:"flex flex-row items-center w-full gap-24 mb-10 form-control"},O={class:""},$={class:"label"},J={class:"label-text"},M=["placeholder"],Q={class:"flex flex-row items-center w-full gap-24 mb-10 form-control"},W={class:""},Y={class:"label"},Z={class:"label-text"},E={class:"help"},G={key:0,class:"text-sm text-red-400 help-text"},K=["data-tip"],X=["disabled"],ee={class:"loading loading-ring loading-md"},le={class:"w-full max-w-xs form-control"},ae={class:"label"},te={class:"label-text"},oe={disabled:"",selected:""},se=["value"],re={class:"w-full max-w-xs form-control"},ue={class:"label"},ne={class:"label-text"},ce={disabled:"",selected:""},ie=["value"],de={class:"w-full max-w-xs form-control"},pe={class:"label"},me={class:"label-text"},be={disabled:"",selected:""},ve=["value"],fe={class:"w-full max-w-xs form-control"},he={class:"label"},xe={class:"label-text"},we={class:"w-full max-w-xs form-control"},ge={class:"label"},Ce={class:"label-text"},ke={class:"w-full max-w-xs form-control"},ye={class:"label"},je={class:"label-text"},Le={class:"flex flex-row w-full max-w-xs gap-10 mb-10 form-control"},Ve={class:"label"},Pe={class:"label-text"},Te={class:"label"},Ue={class:"label-text"},_e={class:"w-full max-w-xs mb-10 form-control"},Se={class:"label"},ze={class:"label-text"},Ae={class:"w-full max-w-xs form-control"},Ie={class:"label"},Re={class:"label-text"},De={class:"flex flex-row items-center w-full gap-24 mb-0 form-control"},Ne={class:"label"},qe={class:"label-text"},Be={class:"h-auto"},Fe={class:"flex w-full h-24 gap-3 m-0"},He=["data-tip"],Oe={class:"w-full max-w-xs mb-10 form-control"},$e={class:"label"},Je={class:"label-text"},Me=["checked"],Qe={class:"w-full max-w-xs mb-10 form-control"},We={class:"label"},Ye={class:"label-text"},Ze=["checked"],Ee=e({__name:"FaceConfig",setup(e){const{t:l}=_(),o=C().globalConfig,g=C().personConfig,z=C().prizeConfig,{getTopTitle:A,getTheme:Ee,getPatterColor:Ge,getPatternList:Ke,getCardColor:Xe,getLuckyColor:el,getTextColor:ll,getCardSize:al,getTextSize:tl,getRowCount:ol,getIsShowPrizeList:sl,getLanguage:rl,getBackground:ul,getImageList:nl,getIsShowAvatar:cl}=T(o),{getAlreadyPersonList:il,getNotPersonList:dl}=T(g),pl=c(),ml=c(),bl=c(0),vl=c(Ee.value.name),fl=c(structuredClone(A.value)),hl=c(structuredClone(Xe.value)),xl=c(structuredClone(el.value)),wl=c(structuredClone(ll.value)),gl=c(structuredClone(al.value)),Cl=c(structuredClone(tl.value)),kl=c(structuredClone(ol.value)),yl=c(structuredClone(rl.value)),jl=c(structuredClone(sl.value)),Ll=c(structuredClone(cl.value)),Vl=c(structuredClone(Ge.value)),Pl=c(Object.keys(P)),Tl=c(P),Ul=c(ul.value),_l=c({rowCount:kl}),Sl=c({rowCount:""}),zl=S.object({rowCount:S.number({required_error:k.global.t("error.require"),invalid_type_error:k.global.t("error.requireNumber")}).min(1,k.global.t("error.minNumber1")).max(100,k.global.t("error.maxNumber100"))}),Al={rowCount:_l.value.rowCount};function Il(){bl.value=2,setTimeout((()=>{const e=il.value.length,l=dl.value.length;if(e<=0&&l<=0)return;const a=il.value.concat(dl.value),t=a.slice(0,e),o=a.slice(e,l+e);g.deleteAllPerson(),g.addNotPersonList(o),g.addAlreadyPersonList(t,null),bl.value=0}),1e3)}function Rl(){o.setPatternList([])}function Dl(){o.resetPatternList()}function Nl(){o.reset(),g.reset(),z.resetDefault(),window.location.reload()}return i((()=>_l.value.rowCount),(()=>{var e;Al.rowCount=_l.value.rowCount,(e=Al,zl.parseAsync(e)).then((e=>{e.rowCount&&(bl.value=1,o.setRowCount(e.rowCount))})).catch((e=>{Sl.value.rowCount=e.issues[0].message}))})),i(fl,(e=>{o.setTopTitle(e)})),i(vl,(e=>{const l=Tl.value[e];o.setTheme({name:e,detail:l}),j(e),l.primary&&(L(l.primary)||V(l.primary))&&o.setCardColor(l.primary)}),{deep:!0}),i(hl,(e=>{o.setCardColor(e)}),{deep:!0}),i(xl,(e=>{o.setLuckyCardColor(e)}),{deep:!0}),i(Vl,(e=>{o.setPatterColor(e)})),i(wl,(e=>{o.setTextColor(e)}),{deep:!0}),i(gl,(e=>{o.setCardSize(e)}),{deep:!0}),i(jl,(()=>{o.setIsShowPrizeList(jl.value)})),i(Ul,(e=>{o.setBackground(e)})),i(yl,(e=>{o.setLanguage(e)})),i(Ll,(()=>{o.setIsShowAvatar(Ll.value)})),d((()=>{})),(e,o)=>(n(),a(s,null,[t("dialog",{id:"my_modal_1",ref_key:"resetDataDialogRef",ref:ml,class:"border-none modal"},[t("div",R,[t("h3",D,p(m(l)("dialog.titleTip")),1),t("p",N,p(m(l)("dialog.dialogResetAllData")),1),t("div",q,[t("form",B,[t("button",{class:"btn",onClick:o[0]||(o[0]=e=>ml.value.close())},p(m(l)("button.cancel")),1),t("button",{class:"btn",onClick:Nl},p(m(l)("button.confirm")),1)])])])],512),t("div",null,[t("h2",null,p(m(l)("viewTitle.globalSetting")),1),t("div",F,[t("button",{class:"btn btn-sm btn-primary",onClick:o[1]||(o[1]=e=>ml.value.showModal())},p(m(l)("button.resetAllData")),1)]),t("label",H,[t("div",O,[t("div",$,[t("span",J,p(m(l)("table.title")),1)]),b(t("input",{"onUpdate:modelValue":o[2]||(o[2]=e=>fl.value=e),type:"text",placeholder:m(l)("placeHolder.enterTitle"),class:"w-full max-w-xs input input-bordered"},null,8,M),[[v,fl.value]])])]),t("label",Q,[t("div",W,[t("div",Y,[t("span",Z,p(m(l)("table.columnNumber")),1)]),b(t("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>_l.value.rowCount=e),type:"number",placeholder:"Type here",class:"w-full max-w-xs input input-bordered"},null,512),[[v,_l.value.rowCount]]),t("div",E,[Sl.value.rowCount?(n(),a("span",G,p(Sl.value.rowCount),1)):f("",!0)])]),t("div",null,[t("div",{class:"tooltip","data-tip":m(l)("tooltip.resetLayout")},[t("button",{class:"mt-5 btn btn-info btn-sm",disabled:1!==bl.value,onClick:Il},[t("span",null,p(m(l)("button.setLayout")),1),b(t("span",ee,null,512),[[h,2===bl.value]])],8,X)],8,K)])]),t("label",le,[t("div",ae,[t("span",te,p(m(l)("table.language")),1)]),b(t("select",{"onUpdate:modelValue":o[4]||(o[4]=e=>yl.value=e),"data-choose-theme":"",class:"w-full max-w-xs border-solid select border-1"},[t("option",oe,p(m(l)("table.language")),1),(n(!0),a(s,null,r(m(y),(e=>(n(),a("option",{key:e.key,value:e.key},p(e.name),9,se)))),128))],512),[[x,yl.value]])]),t("label",re,[t("div",ue,[t("span",ne,p(m(l)("table.theme")),1)]),b(t("select",{"onUpdate:modelValue":o[5]||(o[5]=e=>vl.value=e),"data-choose-theme":"",class:"w-full max-w-xs border-solid select border-1"},[t("option",ce,p(m(l)("table.theme")),1),(n(!0),a(s,null,r(Pl.value,((e,l)=>(n(),a("option",{key:l,value:e},p(e),9,ie)))),128))],512),[[x,vl.value]])]),t("label",de,[t("div",pe,[t("span",me,p(m(l)("table.backgroundImage")),1)]),b(t("select",{"onUpdate:modelValue":o[6]||(o[6]=e=>Ul.value=e),"data-choose-theme":"",class:"w-full max-w-xs border-solid select border-1"},[t("option",be,p(m(l)("table.backgroundImage")),1),(n(!0),a(s,null,r([{name:"❌",url:"",id:""},...m(nl)],((e,l)=>(n(),a("option",{key:l,value:e},p(e.name),9,ve)))),128))],512),[[x,Ul.value]])]),t("label",fe,[t("div",he,[t("span",xe,p(m(l)("table.cardColor")),1)]),w(m(U),{ref_key:"colorPickerRef",ref:pl,modelValue:hl.value,"onUpdate:modelValue":o[7]||(o[7]=e=>hl.value=e),"pure-color":hl.value,"onUpdate:pureColor":o[8]||(o[8]=e=>hl.value=e)},null,8,["modelValue","pure-color"])]),t("label",we,[t("div",ge,[t("span",Ce,p(m(l)("table.winnerColor")),1)]),w(m(U),{ref_key:"colorPickerRef",ref:pl,modelValue:xl.value,"onUpdate:modelValue":o[9]||(o[9]=e=>xl.value=e),"pure-color":xl.value,"onUpdate:pureColor":o[10]||(o[10]=e=>xl.value=e)},null,8,["modelValue","pure-color"])]),t("label",ke,[t("div",ye,[t("span",je,p(m(l)("table.textColor")),1)]),w(m(U),{ref_key:"colorPickerRef",ref:pl,modelValue:wl.value,"onUpdate:modelValue":o[11]||(o[11]=e=>wl.value=e),"pure-color":wl.value,"onUpdate:pureColor":o[12]||(o[12]=e=>wl.value=e)},null,8,["modelValue","pure-color"])]),t("label",Le,[t("div",null,[t("div",Ve,[t("span",Pe,p(m(l)("table.cardWidth")),1)]),b(t("input",{"onUpdate:modelValue":o[13]||(o[13]=e=>gl.value.width=e),type:"number",placeholder:"Type here",class:"w-full max-w-xs input input-bordered"},null,512),[[v,gl.value.width]])]),t("div",null,[t("div",Te,[t("span",Ue,p(m(l)("table.cardHeight")),1)]),b(t("input",{"onUpdate:modelValue":o[14]||(o[14]=e=>gl.value.height=e),type:"number",placeholder:"Type here",class:"w-full max-w-xs input input-bordered"},null,512),[[v,gl.value.height]])])]),t("label",_e,[t("div",Se,[t("span",ze,p(m(l)("table.textSize")),1)]),b(t("input",{"onUpdate:modelValue":o[15]||(o[15]=e=>Cl.value=e),type:"number",placeholder:"Type here",class:"w-full max-w-xs input input-bordered"},null,512),[[v,Cl.value]])]),t("label",Ae,[t("div",Ie,[t("span",Re,p(m(l)("table.highlightColor")),1)]),w(m(U),{ref_key:"colorPickerRef",ref:pl,modelValue:Vl.value,"onUpdate:modelValue":o[16]||(o[16]=e=>Vl.value=e),"pure-color":Vl.value,"onUpdate:pureColor":o[17]||(o[17]=e=>Vl.value=e)},null,8,["modelValue","pure-color"])]),t("label",De,[t("div",null,[t("div",Ne,[t("span",qe,p(m(l)("table.patternSetting")),1)]),t("div",Be,[w(I,{"row-count":m(ol),"card-color":m(Xe),"pattern-color":m(Ge),"pattern-list":m(Ke)},null,8,["row-count","card-color","pattern-color","pattern-list"])])])]),t("div",Fe,[t("button",{class:"mt-5 btn btn-info btn-sm",onClick:u(Rl,["stop"])},[t("span",null,p(m(l)("button.clearPattern")),1)]),t("div",{class:"tooltip","data-tip":m(l)("tooltip.defaultLayout")},[t("button",{class:"mt-5 btn btn-info btn-sm",onClick:Dl},[t("span",null,p(m(l)("button.DefaultPattern")),1)])],8,He)]),t("label",Oe,[t("div",$e,[t("span",Je,p(m(l)("table.alwaysDisplay")),1)]),t("input",{type:"checkbox",checked:jl.value,class:"mt-2 border-solid checkbox checkbox-secondary border-1",onChange:o[18]||(o[18]=e=>jl.value=!jl.value)},null,40,Me)]),t("label",Qe,[t("div",We,[t("span",Ye,p(m(l)("table.avatarDisplay")),1)]),t("input",{type:"checkbox",checked:Ll.value,onChange:o[19]||(o[19]=e=>Ll.value=!Ll.value),class:"mt-2 border-solid checkbox checkbox-secondary border-1"},null,40,Ze)])])],64))}});export{Ee as default};

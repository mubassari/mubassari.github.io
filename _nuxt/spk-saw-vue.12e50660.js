import{r as g,u as S,c as H,a as l,d as s,e,t as d,p as f,n as _,i as y,f as M,F as v,k as p,m as b,x as A,y as $,z as D}from"./entry.a58003ac.js";const j={class:"pt-2"},W={class:"text-center pt-2 py-3 mb-5 fixed-top bg-light"},z={class:"row"},R=e("div",{class:"col-sm-2"},"\xA0",-1),q={class:"col-sm-8"},J={key:0,class:"lead text-nowrap fw-bolder my-3"},O=e("div",{class:"col-sm-2"},"\xA0",-1),I={key:0,class:"nav nav-tabs nav-fill mt-5 fixed-top bg-light"},L=e("b",null,"Kriteria",-1),Q=[L],X=e("b",null,"Perhitungan",-1),Y=[X],Z={key:0,id:"bobot"},G={class:"mt-3 col"},ee={class:"input-group"},te=e("div",{class:"input-group-text"},"Kriteria",-1),ae=["onUpdate:modelValue"],le={class:"mt-3 col"},se=["onUpdate:modelValue"],ne=e("option",{selected:"",disabled:"",value:"0"}," Pilih Atribut Kriteria ",-1),oe=["selected"],ie=["selected"],re={class:"mt-3 col"},ue={class:"input-group"},ce=e("span",{class:"input-group-text"},"Nilai",-1),de=["onUpdate:modelValue"],he=e("span",{class:"input-group-text"},"%",-1),ve={class:"mt-3 col-auto"},pe=["onClick"],_e={key:1,id:"alter"},me={class:"mt-3 col"},ke=e("label",{class:"form-label"},"Alternatif",-1),fe=["onUpdate:modelValue"],ge={class:"col"},ye={class:"form-label",style:{"white-space":"nowrap","text-overflow":"ellipsis"}},be=["placeholder","onUpdate:modelValue"],we={class:"mt-1"},Ae=["onClick"],Ne=e("h3",{class:"text-center"},"Hasil Analisa",-1),xe={class:"table table-sm table-hover table-bordered text-center"},Ce={class:"table-light"},Ve=e("th",{rowspan:"2",class:"align-middle"},"Alternatif",-1),Ue=["colspan"],Be=e("h3",{class:"text-center"},"Normalisasi",-1),Ee={class:"table table-sm table-hover table-bordered text-center"},Ke={class:"table-light"},Te=e("th",{rowspan:"2",class:"align-middle"},"Alternatif",-1),Fe=["colspan"],Pe=e("h3",{class:"text-center"},"Perankingan",-1),Se={class:"table table-sm table-hover table-bordered text-center"},He={class:"table-light"},Me=e("th",{rowspan:"2",class:"align-middle"},"Alternatif",-1),$e=["colspan"],De=e("th",{rowspan:"2",class:"align-middle"},"Total",-1),je=e("th",{rowspan:"2",class:"align-middle"},"Ranking",-1),We={style:{"text-indent":"0.63in","text-align":"justify"}},qe={__name:"spk-saw-vue",setup(ze){const N=g("SPK Metode SAW Dengan VueJS");S({title:N,link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",integrity:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",crossorigin:"anonymous"}]});const h=g([!0,!1,!1]),x=n=>h.value.forEach((o,t)=>h.value.splice(t,1,n===t)),c=g([]),r=g([]),V=H(()=>c.value.length?!r.value.length:!0),U=()=>{c.value.push({name:"",attr:0,poin:""}),r.value.length!==0&&r.value.forEach(n=>n.kriteria.push(""))},B=()=>{r.value.push({name:"",kriteria:Array(c.value.length).fill(""),total:0,rank:0})},E=n=>{c.value.splice(n,1),r.value.length!==0&&r.value.forEach(o=>o.kriteria.splice(n,1))},m=n=>n===""||n>100||n<1,C=(n,o,t)=>{if(r.value.length===0||c.value.length===0)return 0;{let a=[];return r.value.forEach(i=>a.push(i.kriteria[t])),n==2?(o[t]/Math.max(...a)).toFixed(2):n==1?(Math.min(...a)/o[t]).toFixed(2):!1}};function K(n){let o=0;return c.value.forEach((t,a)=>{o+=C(t.attr,r.value[n].kriteria,a)*(t.poin/100)}),r.value[n].total=o,o}const T=n=>{let o=[];r.value.forEach(a=>o.push(a.total));let t=o.map(a=>o.slice().sort((i,u)=>u-i).indexOf(a)+1);return r.value[n].rank=t[n],t[n]},w=()=>{if(r.value.length===0||c.value.length===0)return 0;{let n=Array();return n.push(r.value.filter(o=>o.rank===1)[0]),n.push(r.value.map(o=>o.rank).indexOf(1)+1),n}},k=g(!1),F=()=>{k.value=!0,window.onafterprint=n=>k.value=!1,setTimeout(function(){window.print()},50)};return(n,o)=>(l(),s("div",j,[e("div",W,[e("div",z,[R,e("div",q,[N.value.isEdit?f("",!0):(l(),s("span",J,d(N.value),1))]),O])]),k.value?f("",!0):(l(),s("nav",I,[e("a",{class:_(["nav-link fw-bold",{"active text-dark":h.value[0],"text-secondary":!h.value[0]}]),onClick:o[0]||(o[0]=t=>x(0))},"Bobot",2),y("\xA0 "),e("a",{class:_(["nav-link",{"active text-dark":h.value[1],"text-secondary":!h.value[1]}]),onClick:o[1]||(o[1]=t=>x(1))},Q,2),y("\xA0 "),e("a",{class:_(["nav-link",{"active text-dark":h.value[2],"text-secondary":!h.value[2],disabled:M(V)}]),onClick:o[2]||(o[2]=t=>x(2))},Y,2)])),e("div",{class:_(["container",{"mt-5 pt-5":!k.value,"":k.value}])},[h.value[0]?(l(),s("div",Z,[e("input",{type:"button",class:"btn btn-primary",value:"Tambah",onClick:U}),(l(!0),s(v,null,p(c.value,(t,a)=>(l(),s("div",{key:a,class:"row"},[e("div",G,[e("div",ee,[te,b(e("input",{type:"text",class:_(["form-control",{"is-invalid":m(t.name),"":!m(t.name)}]),placeholder:"Nama Kriteria","onUpdate:modelValue":i=>t.name=i},null,10,ae),[[A,t.name]])])]),e("div",le,[b(e("select",{class:_(["form-select",{"is-invalid":t.attr===0,"":t.attr!==0}]),"onUpdate:modelValue":i=>t.attr=i},[ne,e("option",{selected:t.attr===1,value:"1"},"Biaya",8,oe),e("option",{selected:t.attr===2,value:"2"},"Keuntungan",8,ie)],10,se),[[$,t.attr]])]),e("div",re,[e("div",ue,[ce,b(e("input",{type:"number",class:_(["form-control",{"is-invalid":m(t.poin),"":!m(t.poin)}]),placeholder:"Poin Bobot","onUpdate:modelValue":i=>t.poin=i,min:"1",max:"100"},null,10,de),[[A,t.poin]]),he])]),e("div",ve,[e("input",{type:"button",class:"btn btn-danger",value:"Hapus",onClick:i=>E(a)},null,8,pe)])]))),128))])):f("",!0),h.value[1]?(l(),s("div",_e,[e("input",{type:"button",class:"btn btn-primary",value:"Tambah",onClick:B}),(l(!0),s(v,null,p(r.value,(t,a)=>(l(),s("div",{key:a,class:"row"},[e("div",me,[ke,b(e("input",{type:"text",class:_(["form-control",{"is-invalid":m(t.name),"":!m(t.name)}]),placeholder:"Nama Alternatif","onUpdate:modelValue":i=>t.name=i},null,10,fe),[[A,t.name]])]),(l(!0),s(v,null,p(c.value,(i,u)=>(l(),s("div",{class:"mt-3 col row",key:u},[e("div",ge,[e("label",ye,d(i.name?i.name:"Nilai "+(u+1)),1),b(e("input",{type:"number",class:_(["form-control",{"is-invalid":m(t.kriteria[u]),"":!m(t.kriteria[u])}]),placeholder:"Nilai "+[i.name?i.name:u+1],"onUpdate:modelValue":P=>t.kriteria[u]=P,min:"1",max:"100"},null,10,be),[[A,t.kriteria[u],void 0,{number:!0}]])])]))),128)),e("div",we,[e("input",{type:"button",class:"btn btn-danger",value:"Hapus",onClick:i=>r.value.value.splice(a,1)},null,8,Ae)])]))),128))])):f("",!0),!k.value&&h.value[2]?(l(),s("button",{key:2,class:"btn btn-success",onClick:o[3]||(o[3]=t=>F())}," Cetak ")):f("",!0),h.value[2]?(l(),s("div",{key:3,id:"hitung",class:_({"mt-3":k.value})},[Ne,e("table",xe,[e("thead",Ce,[e("tr",null,[Ve,e("th",{colspan:c.value.length},"Kriteria",8,Ue)]),e("tr",null,[(l(!0),s(v,null,p(c.value,(t,a)=>(l(),s("th",{key:a},d(t.name?t.name:"Nilai "+(a+1)),1))),128))])]),e("tbody",null,[(l(!0),s(v,null,p(r.value,(t,a)=>(l(),s("tr",{key:a,class:"table table-hover"},[e("td",null,d(t.name?t.name:"Alternatif "+(a+1)),1),(l(!0),s(v,null,p(c.value,(i,u)=>(l(),s("td",{key:u},d(t.kriteria[u]?t.kriteria[u]:0),1))),128))]))),128))])]),Be,e("table",Ee,[e("thead",Ke,[e("tr",null,[Te,e("th",{colspan:c.value.length},"Kriteria",8,Fe)]),e("tr",null,[(l(!0),s(v,null,p(c.value,(t,a)=>(l(),s("th",{key:a},d(t.name?t.name:"Nilai "+(a+1)),1))),128))])]),e("tbody",null,[(l(!0),s(v,null,p(r.value,(t,a)=>(l(),s("tr",{key:a,class:"table table-hover"},[e("td",null,d(t.name?t.name:"Alternatif "+(a+1)),1),(l(!0),s(v,null,p(c.value,(i,u)=>(l(),s("td",{key:u},d(C(i.attr,t.kriteria,u)),1))),128))]))),128))])]),Pe,e("table",Se,[e("thead",He,[e("tr",null,[Me,e("th",{colspan:c.value.length},"Kriteria",8,$e),De,je]),e("tr",null,[(l(!0),s(v,null,p(c.value,(t,a)=>(l(),s("th",{key:a},d(t.name?t.name:"Nilai "+(a+1)),1))),128))])]),e("tbody",null,[(l(!0),s(v,null,p(r.value,(t,a)=>(l(),s("tr",{key:a,class:"table table-hover",style:D(t.rank==1?"font-weight:bold":"font-weight:normal")},[e("td",null,d(t.name?t.name:"Alternatif "+(a+1)),1),(l(!0),s(v,null,p(c.value,(i,u)=>(l(),s("td",{key:u},d((C(i.attr,t.kriteria,u)*(i.poin/100)).toFixed(2)),1))),128)),e("td",null,d(K(a).toFixed(3)),1),e("td",null,d(T(a)),1)],4))),128))])]),e("p",We,[y(" Jadi berdasarkan Perhitungan di atas, Alternatif terbaik adalah "),e("strong",null,d(w()[0].name?w()[0].name:"Alternatif "+w()[1]),1),y(" dengan total poin "),e("strong",null,d(w()[0].total),1),y(". ")])],2)):f("",!0)],2)]))}};export{qe as default};
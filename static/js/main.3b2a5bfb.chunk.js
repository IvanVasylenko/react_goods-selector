(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(3),o=n.n(s),r=n(1),l=n(4),i=n(5),u=n(8),d=n(7),m=n(6),f=n.n(m),p=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={selectedGoods:[]},e.addItem=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(r.a)(e.selectedGoods),[t])}}))},e.removeItem=function(t){e.setState((function(e){return{selectedGoods:Object(r.a)(e.selectedGoods).filter((function(e){return e!==t}))}}))},e.removeAll=function(){e.setState({selectedGoods:[]})},e.createTitle=function(t){switch(t){case 0:return"No goods selected";case 1:return"".concat(e.state.selectedGoods[0]," is selected");default:return"".concat(e.state.selectedGoods.join(", ")," are selected")}},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return a.a.createElement("div",{className:"App d-flex flex-column align-items-center"},a.a.createElement("div",{className:"App card-body w-75 p-3"},a.a.createElement("div",{className:"d-flex justify-content-center card-title"},a.a.createElement("h1",{className:"px-5"},this.createTitle(t.length)),t.length&&a.a.createElement("button",{type:"button",className:"btn btn-warning clearbtn ",onClick:this.remoteAll},"X")),a.a.createElement("ul",{className:"list-group fs-4"},p.map((function(n){return a.a.createElement("li",{key:n,className:f()("list-group-item d-flex justify-content-between",{selected:t.includes(n)})},n,t.includes(n)?a.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.remoteItem(n)}},"Remove"):a.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return e.addItem(n)}},"Add"))})))))}}]),n}(a.a.Component);o.a.render(a.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.3b2a5bfb.chunk.js.map
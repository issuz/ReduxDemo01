(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){e.exports=n(187)},187:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(5),u=n.n(r),c=n(93),l=n(94),s=n(105),p=n(95),d=n(39),o=n(106),h=(n(114),n(190)),g=n(56),m=n(189),v=n(96),O={inputValue:"Write Something",list:["11111","22222","33333","44444","55555"]},y=Object(v.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;if("changeInput"===t.type){var n=JSON.parse(JSON.stringify(e));return n.inputValue=t.value,n}if("addItem"===t.type){var a=JSON.parse(JSON.stringify(e));return""!==a.inputValue&&a.list.push(a.inputValue),a.inputValue="",a}if("deleteItem"===t.type){var i=JSON.parse(JSON.stringify(e));return i.list.splice(t.index,1),i}return e},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state=y.getState(),n.changeInputValue=n.changeInputValue.bind(Object(d.a)(n)),n.clickBtn=n.clickBtn.bind(Object(d.a)(n)),n.storeChange=n.storeChange.bind(Object(d.a)(n)),y.subscribe(n.storeChange),n}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{margin:"10px"}},i.a.createElement("div",null,i.a.createElement(h.a,{placeholder:this.state.inputValue,style:{width:"250px",marginRight:"10px"},onChange:this.changeInputValue,value:this.state.inputValue}),i.a.createElement(g.a,{type:"primary",onClick:this.clickBtn},"\u589e\u52a0")),i.a.createElement("div",{style:{margin:"10px",width:"300px"}},i.a.createElement(m.a,{bordered:!0,dataSource:this.state.list,renderItem:function(t,n){return i.a.createElement(m.a.Item,{onClick:e.deleteItem.bind(e,n)},t)}})))}},{key:"storeChange",value:function(){this.setState(y.getState())}},{key:"changeInputValue",value:function(e){var t={type:"changeInput",value:e.target.value};y.dispatch(t)}},{key:"clickBtn",value:function(){var e={type:"addItem"};y.dispatch(e)}},{key:"deleteItem",value:function(e){var t=function(e){return{type:"deleteItem",index:e}}(e);y.dispatch(t)}}]),t}(a.Component);u.a.render(i.a.createElement(b,null),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.c7a84863.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{191:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=n(27),s=n(23),l=n(195),u=n(198),m=n(197),p=n(196),d=n(24),h=n(25),f=n(28),b=n(26),y=n(29),E=(n(53),function(e){return r.a.createElement("section",{className:"cards"},e.children)}),v=n(50),O=n.n(v),j=n(81),g=n(80),k=n.n(g),w=n(79),x=n.n(w),L=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).handleOpen=function(){n.props.onDisplay&&n.props.onDisplay(),n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.state={open:!1},n}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:"modal"},r.a.createElement(x.a,{onClick:this.handleOpen},this.props.buttonText),r.a.createElement(k.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},r.a.createElement("div",{style:{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")},className:e.paper},this.props.children)))}}]),t}(r.a.Component),C=Object(j.withStyles)(function(e){return{paper:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit,outline:"none"}}})(L),A=function(e){return r.a.createElement("article",null,r.a.createElement("img",{className:"hero-img",src:e.imgSrc,alt:" "}),r.a.createElement(C,{buttonText:e.buttonText},r.a.createElement(O.a,{variant:"h6",id:"modal-title"},e.modalTitle),r.a.createElement(O.a,{variant:"subtitle1",id:"simple-modal-description"},e.modalDescription)))},T="UPDATE_HEROES_LIST";var S=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gateway.marvel.com/v1/public/characters?apikey=".concat("618f8fc17d11e3de14fefbfda98f465d","&limit=40")).then(function(e){return e.json()}).then(function(t){e.props.onHeroesListUpdate(t.data.results)},function(e){})}},{key:"render",value:function(){return r.a.createElement(E,null," ",this.props.heroesArray.map(function(e,t){return r.a.createElement(A,{imgSrc:e.thumbnail.path+"."+e.thumbnail.extension,buttonText:e.name,modalTitle:e.name,modalDescription:e.description,key:t})}))}}]),t}(r.a.Component),D=Object(i.b)(function(e){return{heroesArray:e.heroesList.heroesArray}},function(e){return{onHeroesListUpdate:function(t){e({type:T,heroesList:t})}}})(S),N="UPDATE_COMICS_LIST";var U=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gateway.marvel.com/v1/public/comics?apikey=".concat("618f8fc17d11e3de14fefbfda98f465d","&limit=40")).then(function(e){return e.json()}).then(function(t){e.props.onComicsListUpdate(t.data.results)},function(e){})}},{key:"render",value:function(){return r.a.createElement(E,null," ",this.props.comicsArray.map(function(e,t){return r.a.createElement(A,{imgSrc:e.thumbnail.path+"."+e.thumbnail.extension,buttonText:e.title,modalTitle:e.title,modalDescription:e.description,key:t})}))}}]),t}(r.a.Component),H=Object(i.b)(function(e){return{comicsArray:e.comicsList.comicsArray}},function(e){return{onComicsListUpdate:function(t){e({type:N,comicsList:t})}}})(U),I=function(){return r.a.createElement(u.a,null,r.a.createElement(m.a,{path:"/heroes",exact:!0,component:D}),r.a.createElement(m.a,{path:"/comics",exact:!0,component:H}),r.a.createElement(m.a,{render:function(){return r.a.createElement(p.a,{to:"/heroes"})}}))},_=n(194),M=function(e){return r.a.createElement("nav",{className:e.class},e.children)},J=(n(191),[{target:"/heroes",text:"Heroes"},{target:"/comics",text:"Comics"}]),P=function(e){return r.a.createElement(M,{class:"main-menu"},J.map(function(e,t){return r.a.createElement(_.a,{to:e.target,className:"menu-item",key:t},e.text)}))},B=function(){return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(I,null))};var R=Object(s.b)({heroesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{heroesArray:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{heroesArray:t.heroesList};default:return e}},comicsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{comicsArray:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{comicsArray:t.comicsList};default:return e}}}),q=Object(s.c)(R);o.a.render(r.a.createElement(i.a,{store:q},r.a.createElement(l.a,null,r.a.createElement(B,null))),document.getElementById("root"))},53:function(e,t,n){},82:function(e,t,n){e.exports=n(193)}},[[82,2,1]]]);
//# sourceMappingURL=main.1f52748e.chunk.js.map
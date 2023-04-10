(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/+cc":function(t,e,n){
/*!
 * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=n(2),i=n(8),s=n(0),c=function(){function t(e,n){var r=n.location,o=void 0===r?0:r,a=n.distance,s=void 0===a?100:a,c=n.threshold,l=void 0===c?.6:c,u=n.maxPatternLength,h=void 0===u?32:u,d=n.caseSensitive,f=void 0!==d&&d,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,m=void 0!==g&&g,y=n.minMatchCharLength,b=void 0===y?1:y,x=n.id,k=void 0===x?null:x,_=n.keys,S=void 0===_?[]:_,w=n.shouldSort,M=void 0===w||w,A=n.getFn,C=void 0===A?i:A,L=n.sortFn,P=void 0===L?function(t,e){return t.score-e.score}:L,I=n.tokenize,O=void 0!==I&&I,j=n.matchAllTokens,T=void 0!==j&&j,z=n.includeMatches,E=void 0!==z&&z,F=n.includeScore,$=void 0!==F&&F,H=n.verbose,J=void 0!==H&&H;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options={location:o,distance:s,threshold:l,maxPatternLength:h,isCaseSensitive:f,tokenSeparator:p,findAllMatches:m,minMatchCharLength:b,id:k,keys:S,includeMatches:E,includeScore:$,shouldSort:M,getFn:C,sortFn:P,verbose:J,tokenize:O,matchAllTokens:T},this.setCollection(e)}var e,n;return e=t,(n=[{key:"setCollection",value:function(t){return this.list=t,t}},{key:"search",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(t,'"'));var n=this._prepareSearchers(t),r=n.tokenSearchers,o=n.fullSearcher,a=this._search(r,o),i=a.weights,s=a.results;return this._computeScore(i,s),this.options.shouldSort&&this._sort(s),e.limit&&"number"==typeof e.limit&&(s=s.slice(0,e.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=[];if(this.options.tokenize)for(var n=t.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)e.push(new a(n[r],this.options));return{tokenSearchers:e,fullSearcher:new a(t,this.options)}}},{key:"_search",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var a=0,i=n.length;a<i;a+=1)this._analyze({key:"",value:n[a],record:a,index:a},{resultMap:r,results:o,tokenSearchers:t,fullSearcher:e});return{weights:null,results:o}}for(var s={},c=0,l=n.length;c<l;c+=1)for(var u=n[c],h=0,d=this.options.keys.length;h<d;h+=1){var f=this.options.keys[h];if("string"!=typeof f){if(s[f.name]={weight:1-f.weight||1},f.weight<=0||f.weight>1)throw new Error("Key weight has to be > 0 and <= 1");f=f.name}else s[f]={weight:1};this._analyze({key:f,value:this.options.getFn(u,f),record:u,index:c},{resultMap:r,results:o,tokenSearchers:t,fullSearcher:e})}return{weights:s,results:o}}},{key:"_analyze",value:function(t,e){var n=t.key,r=t.arrayIndex,o=void 0===r?-1:r,a=t.value,i=t.record,c=t.index,l=e.tokenSearchers,u=void 0===l?[]:l,h=e.fullSearcher,d=void 0===h?[]:h,f=e.resultMap,v=void 0===f?{}:f,p=e.results,g=void 0===p?[]:p;if(null!=a){var m=!1,y=-1,b=0;if("string"==typeof a){this._log("\nKey: ".concat(""===n?"-":n));var x=d.search(a);if(this._log('Full text: "'.concat(a,'", score: ').concat(x.score)),this.options.tokenize){for(var k=a.split(this.options.tokenSeparator),_=[],S=0;S<u.length;S+=1){var w=u[S];this._log('\nPattern: "'.concat(w.pattern,'"'));for(var M=!1,A=0;A<k.length;A+=1){var C=k[A],L=w.search(C),P={};L.isMatch?(P[C]=L.score,m=!0,M=!0,_.push(L.score)):(P[C]=1,this.options.matchAllTokens||_.push(1)),this._log('Token: "'.concat(C,'", score: ').concat(P[C]))}M&&(b+=1)}y=_[0];for(var I=_.length,O=1;O<I;O+=1)y+=_[O];y/=I,this._log("Token score average:",y)}var j=x.score;y>-1&&(j=(j+y)/2),this._log("Score average:",j);var T=!this.options.tokenize||!this.options.matchAllTokens||b>=u.length;if(this._log("\nCheck Matches: ".concat(T)),(m||x.isMatch)&&T){var z=v[c];z?z.output.push({key:n,arrayIndex:o,value:a,score:j,matchedIndices:x.matchedIndices}):(v[c]={item:i,output:[{key:n,arrayIndex:o,value:a,score:j,matchedIndices:x.matchedIndices}]},g.push(v[c]))}}else if(s(a))for(var E=0,F=a.length;E<F;E+=1)this._analyze({key:n,arrayIndex:E,value:a[E],record:i,index:c},{resultMap:v,results:g,tokenSearchers:u,fullSearcher:d})}}},{key:"_computeScore",value:function(t,e){this._log("\n\nComputing score:\n");for(var n=0,r=e.length;n<r;n+=1){for(var o=e[n].output,a=o.length,i=1,s=1,c=0;c<a;c+=1){var l=t?t[o[c].key].weight:1,u=(1===l?o[c].score:o[c].score||.001)*l;1!==l?s=Math.min(s,u):(o[c].nScore=u,i*=u)}e[n].score=1===s?i:s,this._log(e[n])}}},{key:"_sort",value:function(t){this._log("\n\nSorting...."),t.sort(this.options.sortFn)}},{key:"_format",value:function(t){var e=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(t,(function(t,e){if("object"===r(e)&&null!==e){if(-1!==n.indexOf(e))return;n.push(e)}return e}))),n=null}var o=[];this.options.includeMatches&&o.push((function(t,e){var n=t.output;e.matches=[];for(var r=0,o=n.length;r<o;r+=1){var a=n[r];if(0!==a.matchedIndices.length){var i={indices:a.matchedIndices,value:a.value};a.key&&(i.key=a.key),a.hasOwnProperty("arrayIndex")&&a.arrayIndex>-1&&(i.arrayIndex=a.arrayIndex),e.matches.push(i)}}})),this.options.includeScore&&o.push((function(t,e){e.score=t.score}));for(var a=0,i=t.length;a<i;a+=1){var s=t[a];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},l=0,u=o.length;l<u;l+=1)o[l](s,c);e.push(c)}else e.push(s.item)}return e}},{key:"_log",value:function(){var t;this.options.verbose&&(t=console).log.apply(t,arguments)}}])&&o(e.prototype,n),t}();t.exports=c},function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=n(3),a=n(4),i=n(7),s=function(){function t(e,n){var r=n.location,o=void 0===r?0:r,a=n.distance,s=void 0===a?100:a,c=n.threshold,l=void 0===c?.6:c,u=n.maxPatternLength,h=void 0===u?32:u,d=n.isCaseSensitive,f=void 0!==d&&d,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,m=void 0!==g&&g,y=n.minMatchCharLength,b=void 0===y?1:y;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options={location:o,distance:s,threshold:l,maxPatternLength:h,isCaseSensitive:f,tokenSeparator:p,findAllMatches:m,minMatchCharLength:b},this.pattern=this.options.isCaseSensitive?e:e.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=i(this.pattern))}var e,n;return e=t,(n=[{key:"search",value:function(t){if(this.options.isCaseSensitive||(t=t.toLowerCase()),this.pattern===t)return{isMatch:!0,score:0,matchedIndices:[[0,t.length-1]]};var e=this.options,n=e.maxPatternLength,r=e.tokenSeparator;if(this.pattern.length>n)return o(t,this.pattern,r);var i=this.options,s=i.location,c=i.distance,l=i.threshold,u=i.findAllMatches,h=i.minMatchCharLength;return a(t,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:l,findAllMatches:u,minMatchCharLength:h})}}])&&r(e.prototype,n),t}();t.exports=s},function(t,e){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;t.exports=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(e.replace(n,"\\$&").replace(r,"|")),a=t.match(o),i=!!a,s=[];if(i)for(var c=0,l=a.length;c<l;c+=1){var u=a[c];s.push([t.indexOf(u),u.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:s}}},function(t,e,n){var r=n(5),o=n(6);t.exports=function(t,e,n,a){for(var i=a.location,s=void 0===i?0:i,c=a.distance,l=void 0===c?100:c,u=a.threshold,h=void 0===u?.6:u,d=a.findAllMatches,f=void 0!==d&&d,v=a.minMatchCharLength,p=void 0===v?1:v,g=s,m=t.length,y=h,b=t.indexOf(e,g),x=e.length,k=[],_=0;_<m;_+=1)k[_]=0;if(-1!==b){var S=r(e,{errors:0,currentLocation:b,expectedLocation:g,distance:l});if(y=Math.min(S,y),-1!==(b=t.lastIndexOf(e,g+x))){var w=r(e,{errors:0,currentLocation:b,expectedLocation:g,distance:l});y=Math.min(w,y)}}b=-1;for(var M=[],A=1,C=x+m,L=1<<x-1,P=0;P<x;P+=1){for(var I=0,O=C;I<O;)r(e,{errors:P,currentLocation:g+O,expectedLocation:g,distance:l})<=y?I=O:C=O,O=Math.floor((C-I)/2+I);C=O;var j=Math.max(1,g-O+1),T=f?m:Math.min(g+O,m)+x,z=Array(T+2);z[T+1]=(1<<P)-1;for(var E=T;E>=j;E-=1){var F=E-1,$=n[t.charAt(F)];if($&&(k[F]=1),z[E]=(z[E+1]<<1|1)&$,0!==P&&(z[E]|=(M[E+1]|M[E])<<1|1|M[E+1]),z[E]&L&&(A=r(e,{errors:P,currentLocation:F,expectedLocation:g,distance:l}))<=y){if(y=A,(b=F)<=g)break;j=Math.max(1,2*g-b)}}if(r(e,{errors:P+1,currentLocation:g,expectedLocation:g,distance:l})>y)break;M=z}return{isMatch:b>=0,score:0===A?.001:A,matchedIndices:o(k,p)}}},function(t,e){t.exports=function(t,e){var n=e.errors,r=void 0===n?0:n,o=e.currentLocation,a=void 0===o?0:o,i=e.expectedLocation,s=void 0===i?0:i,c=e.distance,l=void 0===c?100:c,u=r/t.length,h=Math.abs(s-a);return l?u+h/l:h?1:u}},function(t,e){t.exports=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,a=0,i=t.length;a<i;a+=1){var s=t[a];s&&-1===r?r=a:s||-1===r||((o=a-1)-r+1>=e&&n.push([r,o]),r=-1)}return t[a-1]&&a-r>=e&&n.push([r,a-1]),n}},function(t,e){t.exports=function(t){for(var e={},n=t.length,r=0;r<n;r+=1)e[t.charAt(r)]=0;for(var o=0;o<n;o+=1)e[t.charAt(o)]|=1<<n-o-1;return e}},function(t,e,n){var r=n(0);t.exports=function(t,e){return function t(e,n,o){if(n){var a=n.indexOf("."),i=n,s=null;-1!==a&&(i=n.slice(0,a),s=n.slice(a+1));var c=e[i];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var l=0,u=c.length;l<u;l+=1)t(c[l],s,o);else s&&t(c,s,o);else o.push(c.toString())}else o.push(e);return o}(t,e,[])}}])},"2dZu":function(t,e,n){"use strict";n.r(e);n("TeQF"),n("rB9j"),n("hByQ");var r=n("HFxP"),o=n("/+cc"),a=n.n(o),i=n("SSrt"),s=n.n(i),c={keys:["apelido"]},l={data:function(){return{fuse:null,filter:"",delay:250}},mixins:[new r.a,new function(){return{computed:{posicoes:function(){return[{nome:"Goleiro",abrev:"gol"},{nome:"Lateral",abrev:"lat"},{nome:"Zagueiro",abrev:"zag"},{nome:"Meia",abrev:"mei"},{nome:"Atacante",abrev:"ata"},{nome:"Técnico",abrev:"tec"}]}}}}],directives:{debounce:s.a},beforeMount:function(){this.fuse=new a.a(this.$page.clube.atletas,c)},computed:{atletas:function(){return""===this.filter?this.$page.clube.atletas:this.fuse.search(this.filter)},urlPontuacaoAdversario:function(){return this.makeUrlPontuacaoAdversario()}}},u=n("KHd+"),h=null,d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{cols:"12",sm:"5"}},[n("header-clube",t._b({},"header-clube",t.$page.clube,!1)),n("b-row",[n("b-col",[n("b-card",{staticClass:"mt-4",attrs:{"no-body":"",header:"Pontuações Médias dos Adversários"}},[n("b-list-group",t._l(t.posicoes,(function(e){return n("b-list-group-item",{key:e.abrev,attrs:{href:t.$url(t.urlPontuacaoAdversario(t.$page.clube.id,e.abrev))}},[t._v("\n                                "+t._s(e.nome)+"\n                            ")])})),1)],1)],1)],1)],1),n("b-col",{attrs:{cols:"12",sm:"7"}},[n("b-row",{staticClass:"mt-4"},[n("b-col",{attrs:{cols:"4"}},[n("h4",[t._v("Atletas")])]),n("b-col",{attrs:{cols:"8"}},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.filter,expression:"filter",modifiers:{lazy:!0}},{name:"debounce",rawName:"v-debounce",value:t.delay,expression:"delay"}],staticClass:"form-control",attrs:{placeholder:"Buscar atleta...",autofocus:"autofocus"},domProps:{value:t.filter},on:{change:function(e){t.filter=e.target.value}}})])],1),n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("hr"),n("b-card",{attrs:{"no-body":""}},[n("b-list-group",{attrs:{flush:""}},t._l(t.atletas,(function(e){return n("b-list-group-item",{key:e.id,attrs:{href:t.$url(t.urlPontuacao()(e.id))}},[n("div",{staticClass:"d-flex justify-content-between"},[n("badge-preco",{attrs:{preco_num:e.preco_num,"left-pos":"wide"}}),n("div",{staticClass:"d-flex flex-column align-items-center",staticStyle:{width:"120px"}},[n("div",[n("g-image",{staticClass:"img-thumbnail rounded-circle",staticStyle:{width:"64px",height:"64px"},attrs:{src:e.foto,alt:e.apelido}})],1),n("div",{staticClass:"lead text-center"},[t._v(t._s(e.apelido))])]),n("div",{staticClass:"d-flex flex-column align-items-center justify-content-center"},[n("div",[n("span",[t._v("\n                                                    "+t._s(e.posicao)+"\n                                                ")])]),n("div",[n("b-badge",{attrs:{variant:"dark"}},[t._v("ULT. "+t._s(e.pontos_num))]),t._v("\n                                                 \n                                                "),n("variacao-num",{attrs:{variant:"light",variacao_num:e.variacao_num}})],1),n("div",[n("b-badge",{attrs:{variant:"warning"}},[t._v("M "+t._s(e.media_num))]),t._v("\n                                                em "),n("b-badge",{attrs:{variant:"light"}},[t._v(t._s(e.jogos_num)+" J")])],1)])],1)])})),1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);"function"==typeof h&&h(d);e.default=d.exports},HFxP:function(t,e,n){"use strict";n("ma9I");e.a=function(){return{methods:{urlPontuacao:function(){return function(t){return"/pontuacoes/atleta/".concat("2023","/").concat(t,"/")}},makeUrlPontuacaoAdversario:function(){return function(t,e){return"/pontuacoes/adversario/".concat("2023","/").concat(t,"/").concat(e,"/")}}}}}},SSrt:function(t,e,n){const r=n("uPkH");function o(t,e){e.value!==e.oldValue&&(t.oninput=o.debounce((function(e){t.dispatchEvent(function(t){if("function"==typeof Event)var e=new Event(t);else{(e=document.createEvent("Event")).initEvent(t,!0,!0)}return e}("change"))}),parseInt(e.value)||800))}o.debounce=r,t.exports=o},uPkH:function(t,e){t.exports=function(t,e){var n=null;return function(){clearTimeout(n);var r=arguments,o=this;n=setTimeout((function(){t.apply(o,r)}),e)}}}}]);
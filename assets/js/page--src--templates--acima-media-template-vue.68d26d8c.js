(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{274:function(a,t,o){"use strict";t.a=function(){return{methods:{urlPontuacao:function(){var a=this;return function(t){return a.$url("/pontuacoes/atleta/".concat(a.$year,"/").concat(t))}},makeUrlPontuacaoAdversario:function(){var a=this;return function(t,o){return a.$url("/pontuacoes/adversario/".concat(a.$year,"/").concat(t,"/").concat(o))}}}}}},278:function(a,t){},310:function(a,t,o){"use strict";var e=o(278),s=o.n(e);t.default=s.a},326:function(a,t,o){"use strict";o.r(t);var e={mixins:[new(o(274).a)]},s=o(0),r=o(310),i=Object(s.a)(e,(function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("Layout",[o("b-row",[o("b-col",{attrs:{md:"10","offset-md":"1"}},[o("h3",{staticClass:"mb-2"},[a._v("Acima da média - Rodada "+a._s(a.$page.dados.rodada))]),o("p",{staticClass:"lead"},[a._v("\n                10 jogadores de cada posição com as melhores médias e com mais jogos.\n            ")])])],1),o("b-row",[o("b-col",{attrs:{md:"10","offset-md":"1"}},[o("div",{staticClass:"float-right"},[o("b-list-group",{staticClass:"d-flex flex-fill flex-wrap flex-sm-nowrap",attrs:{horizontal:""}},[o("b-list-group-item",{attrs:{href:"#goleiros"}},[a._v("Goleiros")]),o("b-list-group-item",{attrs:{href:"#laterais"}},[a._v("Laterais")]),o("b-list-group-item",{attrs:{href:"#zagueiros"}},[a._v("Zagueiros")]),o("b-list-group-item",{attrs:{href:"#meias"}},[a._v("Meias")]),o("b-list-group-item",{attrs:{href:"#atacantes"}},[a._v("Atacantes")]),o("b-list-group-item",{attrs:{href:"#tecnicos"}},[a._v("Técnicos")])],1)],1)])],1),o("row-acima-media",{attrs:{title:"Goleiros",id:"goleiros",atletas:a.$page.dados.goleiros,urlPontuacao:a.urlPontuacao()}}),o("row-acima-media",{attrs:{title:"Laterais",id:"laterais",atletas:a.$page.dados.laterais,urlPontuacao:a.urlPontuacao()}}),o("row-acima-media",{attrs:{title:"Zagueiros",id:"zagueiros",atletas:a.$page.dados.zagueiros,urlPontuacao:a.urlPontuacao()}}),o("row-acima-media",{attrs:{title:"Meias",id:"meias",atletas:a.$page.dados.meias,urlPontuacao:a.urlPontuacao()}}),o("row-acima-media",{attrs:{title:"Atacantes",id:"atacantes",atletas:a.$page.dados.atacantes,urlPontuacao:a.urlPontuacao()}}),o("row-acima-media",{attrs:{title:"Técnicos",id:"tecnicos",atletas:a.$page.dados.tecnicos,urlPontuacao:a.urlPontuacao()}})],1)}),[],!1,null,null,null);"function"==typeof r.default&&Object(r.default)(i);t.default=i.exports}}]);
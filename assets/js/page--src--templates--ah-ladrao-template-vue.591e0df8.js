(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{266:function(a,t,o){"use strict";t.a=function(){return{methods:{urlPontuacao:function(){var a=this;return function(t){return"/pontuacoes/".concat(a.$year,"/").concat(t)}}}}}},269:function(a,t){},406:function(a,t,o){"use strict";var s=o(269),r=o.n(s);t.default=r.a},414:function(a,t,o){"use strict";o.r(t);var s=o(266),r={components:{UrlPontuacao:s.a},mixins:[new s.a]},n=o(0),c=o(406),e=Object(n.a)(r,function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("Layout",[o("b-row",[o("b-col",{attrs:{cols:"12"}},[o("h3",{staticClass:"mb-2"},[o("em",[a._v("Ah, ladrão!")]),a._v(" - Rodada "+a._s(a.$page.scouts.rodada))]),o("p",{staticClass:"lead mb-4"},[a._v("\n                Jogadores com muitas roubadas de bola e poucas\n                faltas cometidas ou cartões amarelos.\n            ")])])],1),o("b-row",[o("b-col",{attrs:{cols:"12"}},[o("b-card",{staticClass:"shadow-sm",attrs:{"no-body":"","border-variant":"light"}},a._l(a.$page.scouts.lista,function(t){return o("b-card-body",{key:t.atleta_id,staticClass:"card-body-sumario border-bottom-light"},[o("row-ah-ladrao",a._b({attrs:{urlPontuacao:a.urlPontuacao()(t.atleta_id)}},"row-ah-ladrao",t,!1))],1)}),1)],1)],1),o("b-row",[o("b-col",[o("p",{staticClass:"mt-4 text-muted"},[a._v("\n                A Pontuação total é calculada como o somatório das roubadas de bola,\n                faltas cometidas e cartões amarelos.\n            ")])])],1)],1)},[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(e);t.default=e.exports}}]);
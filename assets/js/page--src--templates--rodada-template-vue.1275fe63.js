(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{274:function(a,t,o){"use strict";t.a=function(){return{methods:{urlPontuacao:function(){var a=this;return function(t){return a.$url("/pontuacoes/atleta/".concat(a.$year,"/").concat(t))}},makeUrlPontuacaoAdversario:function(){var a=this;return function(t,o){return a.$url("/pontuacoes/adversario/".concat(a.$year,"/").concat(t,"/").concat(o))}}}}}},281:function(a,t,o){},282:function(a,t){},314:function(a,t,o){"use strict";var s=o(281);o.n(s).a},315:function(a,t,o){"use strict";var s=o(282),r=o.n(s);t.default=r.a},328:function(a,t,o){"use strict";o.r(t);var s={mixins:[new(o(274).a)],computed:{pageUrl:function(){return"".concat("https://atilacamurca.github.io/agregador-fc").concat(this.$page.rodada.path)},pageTitle:function(){return"Estatísticas para rodada ".concat(this.$page.rodada.rodada," do @cartolafc no Agregador FC.")}},metaInfo:function(){return{meta:[{name:"og:title",content:this.pageTitle},{name:"og:description",content:"Veja as estatísticas de todos os confrontos da rodada ".concat(this.$page.rodada.rodada," do Cartola FC. Compare os times e escale seu esquadrão.")}]}}},r=(o(314),o(0)),e=o(315),i=Object(r.a)(s,(function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("Layout",[o("b-row",[o("b-col",{attrs:{md:"6",lg:"7","offset-md":"1"}},[o("h3",{staticClass:"mb-4"},[a._v("Rodada "+a._s(a.$page.rodada.rodada))])]),o("b-col",{staticClass:"text-light mb-4 mb-sm-0",attrs:{md:"5",lg:"3"}},[o("twitter-button",{attrs:{page_url:a.pageUrl,page_title:a.pageTitle}}),o("facebook-button",{attrs:{page_url:a.pageUrl,page_title:a.pageTitle}})],1)],1),o("b-row",[o("b-col",{attrs:{lg:"10","offset-lg":"1"}},[o("b-card",{staticClass:"shadow-sm",attrs:{"no-body":"","border-variant":"light"}},a._l(a.$page.rodada.partidas,(function(t){return o("b-card-body",{key:t.partida_id,staticClass:"card-body-sumario border-bottom-light",class:[t.valida?"":"alert-warning"]},[o("fc-collapsible",{attrs:{id:t.partida_id}},[o("div",{attrs:{slot:"title",title:t.valida?"":"Partida inválida para a rodada"},slot:"title"},[o("sumario-partida",{staticClass:"mb-3",attrs:{"partida-data":t.partida_data,local:t.local}}),o("sumario-clubes",{attrs:{"clube-casa":t.clube_casa_abreviacao,"clube-visitante":t.clube_visitante_abreviacao,"escudo-casa":t.escudo_casa,"clube-casa-posicao":t.clube_casa_posicao,"escudo-visitante":t.escudo_visitante,"clube-visitante-posicao":t.clube_visitante_posicao,"placar-mandante":t.placar_oficial_mandante,"placar-visitante":t.placar_oficial_visitante}})],1),o("div",{attrs:{slot:"content"},slot:"content"},[o("b-row",{staticClass:"mt-2 py-2 bg-light"},[o("b-col",{staticClass:"border-right",attrs:{cols:"6"}},[o("row-sumario-gols",a._b({},"row-sumario-gols",t.sumario_gols_casa,!1))],1),o("b-col",{attrs:{cols:"6"}},[o("row-sumario-gols",a._b({},"row-sumario-gols",t.sumario_gols_visitante,!1))],1)],1),o("sumario-estatisticas",{attrs:{partida:t,urlPontuacao:a.urlPontuacao()}})],1)])],1)})),1)],1)],1),o("b-row",[o("b-col",{attrs:{lg:"10","offset-lg":"1"}},[o("h3",{staticClass:"my-4"},[a._v("Melhores no quesito...")]),o("b-row",[o("b-col",{staticClass:"d-flex align-items-stretch",attrs:{md:"4"}},[o("b-card",[o("b-card-title",[o("em",[a._v("Ah, ladrão!")])]),o("b-card-text",[a._v("\n                            25 melhores nas Roubadas de bola com poucas faltas\n                        ")]),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("g-link",{staticClass:"card-link",attrs:{to:"/melhores"+a.$page.rodada.path+"/ah-ladrao"}},[a._v("\n                                Conferir\n                            ")])],1)],1)],1),o("b-col",{staticClass:"d-flex align-items-stretch",attrs:{md:"4"}},[o("b-card",[o("b-card-title",[a._v("Acima da média")]),o("b-card-text",[a._v("\n                            10 jogadores de cada posição com as melhores médias por jogos.\n                        ")]),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("g-link",{staticClass:"card-link",attrs:{to:"/melhores"+a.$page.rodada.path+"/acima-media"}},[a._v("\n                                Conferir\n                            ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"5f8471b2",null);"function"==typeof e.default&&Object(e.default)(i);t.default=i.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3KgV":function(a,t,o){var s=o("I+eb"),r=o("uy83"),e=o("0Dky"),i=o("hh1v"),c=o("8YOa").onFreeze,n=Object.freeze;s({target:"Object",stat:!0,forced:e((function(){n(1)})),sham:!r},{freeze:function(a){return n&&i(a)?n(c(a)):a}})},"4IF7":function(a,t,o){"use strict";var s=o("h2aP");o.n(s).a},"8YOa":function(a,t,o){var s=o("0BK2"),r=o("hh1v"),e=o("UTVS"),i=o("m/L8").f,c=o("kOOl"),n=o("uy83"),d=c("meta"),l=0,u=Object.isExtensible||function(){return!0},m=function(a){i(a,d,{value:{objectID:"O"+ ++l,weakData:{}}})},f=a.exports={REQUIRED:!1,fastKey:function(a,t){if(!r(a))return"symbol"==typeof a?a:("string"==typeof a?"S":"P")+a;if(!e(a,d)){if(!u(a))return"F";if(!t)return"E";m(a)}return a[d].objectID},getWeakData:function(a,t){if(!e(a,d)){if(!u(a))return!0;if(!t)return!1;m(a)}return a[d].weakData},onFreeze:function(a){return n&&f.REQUIRED&&u(a)&&!e(a,d)&&m(a),a}};s[d]=!0},HFxP:function(a,t,o){"use strict";o("ma9I");t.a=function(){return{methods:{urlPontuacao:function(){return function(a){return"/pontuacoes/atleta/".concat("2020","/").concat(a,"/")}},makeUrlPontuacaoAdversario:function(){return function(a,t){return"/pontuacoes/adversario/".concat("2020","/").concat(a,"/").concat(t,"/")}}}}}},h2aP:function(a,t,o){},hoXO:function(a,t,o){"use strict";o.r(t);o("ma9I"),o("3KgV");var s={mixins:[new(o("HFxP").a)],computed:{pageUrl:function(){return"".concat("https://atilacamurca.github.io/agregador-fc").concat(this.$page.rodada.path)},pageTitle:function(){return"Estatísticas para rodada ".concat(this.$page.rodada.rodada," do @cartolafc no Agregador FC.")},pageDicas:function(){return"/dicas/rodada-".concat(this.$page.rodada.rodada)},partidas:function(){return Object.freeze(this.$page.rodada.partidas)}},metaInfo:function(){return{meta:[{name:"og:title",content:this.pageTitle},{name:"og:description",content:"Veja as estatísticas de todos os confrontos da rodada ".concat(this.$page.rodada.rodada," do Cartola FC. Compare os times e escale seu esquadrão.")}]}}},r=(o("4IF7"),o("KHd+")),e=null,i=Object(r.a)(s,(function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("Layout",[a.$page.rodada.rodada<=4?o("b-row",[o("b-col",{attrs:{md:"10",lg:"10","offset-md":"1"}},[o("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[o("h4",{staticClass:"alert-heading"},[a._v("\n          Sabia que a rodada "+a._s(a.$page.rodada.rodada)+" possui regras especiais?\n        ")]),o("hr"),o("g-link",{staticClass:"alert-link",attrs:{to:"/dicas/rodada-"+a.$page.rodada.rodada}},[a._v("Saiba mais")])],1)])],1):a._e(),o("b-row",[o("b-col",{attrs:{cols:"8",md:"6",lg:"7","offset-lg":"1"}},[o("h3",[a._v("Rodada "+a._s(a.$page.rodada.rodada))])]),o("b-col",{staticClass:"text-light",attrs:{cols:"4",md:"6",lg:"3"}},[o("div",{staticClass:"d-flex justify-content-end align-items-center"},[o("twitter-button",{attrs:{page_url:a.pageUrl,page_title:a.pageTitle}}),o("facebook-button",{attrs:{page_url:a.pageUrl,page_title:a.pageTitle}})],1)])],1),o("b-row",[o("b-col",{attrs:{lg:"10","offset-lg":"1"}},[o("b-card",{staticClass:"shadow-sm mt-2",attrs:{"no-body":"","border-variant":"light"}},a._l(a.$page.rodada.partidas,(function(t){return o("b-card-body",{key:t.partida_id,staticClass:"card-body-sumario border-bottom-light",class:[t.valida?"":"alert-warning"]},[o("details",{staticClass:"details"},[o("summary",[o("div",{staticClass:"summary-title mb-3",attrs:{title:t.valida?"":"Partida inválida para a rodada"}},[o("sumario-partida",{staticClass:"mb-3",attrs:{"partida-data":t.partida_data,local:t.local}}),o("sumario-clubes",{attrs:{"clube-casa":t.clube_casa_abreviacao,"clube-visitante":t.clube_visitante_abreviacao,"escudo-casa":t.escudo_casa,"clube-casa-posicao":t.clube_casa_posicao,"escudo-visitante":t.escudo_visitante,"clube-visitante-posicao":t.clube_visitante_posicao,"placar-mandante":t.placar_oficial_mandante,"placar-visitante":t.placar_oficial_visitante}})],1),o("div",{staticClass:"summary-chevron-up"},[o("chevron-up-icon")],1)]),o("div",{staticClass:"summary-content"},[o("div",{staticClass:"mt-2 py-2 bg-dark"},[o("b-row",[o("b-col",{staticClass:"border-right",attrs:{cols:"6"}},[o("row-sumario-gols",a._b({},"row-sumario-gols",t.sumario_gols_casa,!1))],1),o("b-col",{attrs:{cols:"6"}},[o("row-sumario-gols",a._b({},"row-sumario-gols",t.sumario_gols_visitante,!1))],1)],1)],1),o("sumario-estatisticas",{attrs:{partida:t,urlPontuacao:a.urlPontuacao()}})],1),o("div",{staticClass:"summary-chevron-down"},[o("chevron-down-icon")],1)])])})),1)],1)],1),o("b-row",[o("b-col",{attrs:{lg:"10","offset-lg":"1"}},[o("h3",{staticClass:"my-4"},[a._v("Melhores no quesito...")]),o("b-row",[o("b-col",{staticClass:"d-flex align-items-stretch",attrs:{md:"6",lg:"4"}},[o("b-card",{staticClass:"w-100"},[o("b-card-title",[a._v("Radar da rodada")]),o("b-card-text",[a._v("\n              Radar comparativo dos scouts acumulados por posição\n            ")]),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("g-link",{staticClass:"card-link",attrs:{to:"/melhores"+a.$page.rodada.path+"/radar-rodada"}},[a._v("\n                Conferir\n              ")])],1)],1)],1),o("b-col",{staticClass:"d-flex align-items-stretch",attrs:{md:"6",lg:"4"}},[o("b-card",{staticClass:"mt-2 mt-md-0 w-100"},[o("b-card-title",[o("em",[a._v("Ah, ladrão!")])]),o("b-card-text",[a._v("\n              25 melhores nas Roubadas de bola com poucas faltas\n            ")]),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("g-link",{staticClass:"card-link",attrs:{to:"/melhores"+a.$page.rodada.path+"/ah-ladrao"}},[a._v("\n                Conferir\n              ")])],1)],1)],1),o("b-col",{staticClass:"d-flex align-items-stretch",attrs:{md:"6",lg:"4"}},[o("b-card",{staticClass:"mt-2 mt-lg-0 w-100"},[o("b-card-title",[a._v("Acima da média")]),o("b-card-text",[a._v("\n              10 jogadores de cada posição com as melhores médias por jogos.\n            ")]),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("g-link",{staticClass:"card-link",attrs:{to:"/melhores"+a.$page.rodada.path+"/acima-media"}},[a._v("\n                Conferir\n              ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"c5b73224",null);"function"==typeof e&&e(i);t.default=i.exports},uy83:function(a,t,o){var s=o("0Dky");a.exports=!s((function(){return Object.isExtensible(Object.preventExtensions({}))}))}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{278:function(a,t,s){},279:function(a,t){},283:function(a,t,s){"use strict";var r=s(278);s.n(r).a},284:function(a,t,s){"use strict";var r=s(279),e=s.n(r);t.default=e.a},285:function(a,t,s){"use strict";s.r(t);var r={props:{partidaData:{type:String,required:!0},local:{type:String,required:!0}}},e=s(1),i=Object(e.a)(r,function(a,t){var s=t._c;return s("b-row",[s("b-col",{staticClass:"d-flex justify-content-center pb-3"},[s("strong",{staticClass:"text-capitalize"},[t._v(t._s(t._f("diaMes")(t.props.partidaData)))]),s("span",{staticClass:"mx-2"},[t._v(t._s(t.props.local))]),s("strong",[t._v(t._s(t._f("horario")(t.props.partidaData)))])])],1)},[],!0,null,null,null).exports,o=(s(3),{props:{clubeCasa:{type:String,required:!0},clubeVisitante:{type:String,required:!0},escudoCasa:{type:String,required:!0},escudoVisitante:{type:String,required:!0},placarMandante:null,placarVisitante:null,clubeCasaPosicao:{type:Number,required:!0},clubeVisitantePosicao:{type:Number,required:!0}}}),d=Object(e.a)(o,function(a,t){var s=t._c;return s("b-row",[s("b-col",{attrs:{md:"12"}},[s("b-row",[s("col-nome",{attrs:{nome:t.props.clubeCasa,posicao:t.props.clubeCasaPosicao,order:"2","order-md":"1"}}),s("b-col",{staticClass:"d-flex align-items-center justify-content-sm-center justify-content-around",attrs:{cols:"12",md:"2",order:"1","order-md":"2"}},[s("div",{staticClass:"mx-4"},[s("b-img-lazy",{attrs:{width:"40px",src:t.props.escudoCasa,alt:"escudo-casa"}})],1),s("div",{staticClass:"text-center d-flex flex-direction-column lead"},[s("span",[t._v(t._s(t.props.placarMandante))]),s("span",{staticClass:"mx-2"},[t._v("X")]),s("span",[t._v(t._s(t.props.placarVisitante))])]),s("div",{staticClass:"mx-4"},[s("b-img-lazy",{attrs:{width:"40px",src:t.props.escudoVisitante,alt:"escudo-visitante"}})],1)]),s("col-nome",{attrs:{nome:t.props.clubeVisitante,posicao:t.props.clubeVisitantePosicao,order:"3","order-md":"3"}})],1)],1)],1)},[],!0,null,null,null).exports,c={props:{sg:{type:Number,required:!0}}},l=Object(e.a)(c,function(a,t){var s=t._c;return s("b-col",{attrs:{sm:"6",md:"4"}},[s("div",[t._v("DEFESA")]),s("saldo-gol",{attrs:{sg:t.props.sg}})],1)},[],!0,null,null,null).exports,p={props:{dd:{type:Number,required:!0},dp:{type:Number,required:!0},gs:{type:Number,required:!0}}},u=Object(e.a)(p,function(a,t){var s=t._c;return s("b-col",{attrs:{sm:"6",md:"5","offset-md":"1"}},[s("div",[t._v("GOLEIROS")]),s("defesa-dificil",{attrs:{dd:t.props.dd}}),s("gol-sofrido",{attrs:{gs:t.props.gs}}),s("defesa-penalti",{attrs:{dp:t.props.dp}})],1)},[],!0,null,null,null).exports,n={props:{rb:{type:Number,required:!0},g:{type:Number,required:!0},gc:{type:Number,required:!0},pe:{type:Number,required:!0},fs:{type:Number,required:!0},fc:{type:Number,required:!0},ca:{type:Number,required:!0}}},m=Object(e.a)(n,function(a,t){var s=t._c;return s("b-col",{class:t.data.staticClass||"",attrs:{md:"12"}},[s("div",[t._v("ZAGUEIROS")]),s("b-row",[s("b-col",{attrs:{md:"4"}},[s("roubada-bola",{attrs:{rb:t.props.rb}}),s("gol",{attrs:{g:t.props.g}}),s("falta-sofrida",{attrs:{fs:t.props.fs}})],1),s("b-col",{attrs:{md:"4","offset-md":"1"}},[s("passe-errado",{attrs:{pe:t.props.pe}}),s("gol-contra",{attrs:{gc:t.props.gc}}),s("falta-cometida",{attrs:{fc:t.props.fc}}),s("cartao-amarelo",{attrs:{ca:t.props.ca}})],1)],1)],1)},[],!0,null,null,null).exports,_={props:{rb:{type:Number,required:!0},g:{type:Number,required:!0},a:{type:Number,required:!0},ff:{type:Number,required:!0},fd:{type:Number,required:!0},fc:{type:Number,required:!0},fs:{type:Number,required:!0},pe:{type:Number,required:!0}}},f=Object(e.a)(_,function(a,t){var s=t._c;return s("b-col",{class:t.data.staticClass||"",attrs:{md:"12"}},[s("div",[t._v("LATERAIS")]),s("b-row",[s("b-col",{attrs:{md:"4"}},[s("gol",{attrs:{g:t.props.g}}),s("finalizacao-fora",{attrs:{ff:t.props.ff}}),s("roubada-bola",{attrs:{rb:t.props.rb}}),s("falta-sofrida",{attrs:{fs:t.props.fs}})],1),s("b-col",{attrs:{md:"4","offset-md":"1"}},[s("assistencia",{attrs:{a:t.props.a}}),s("finalizacao-defendida",{attrs:{fd:t.props.fd}}),s("passe-errado",{attrs:{pe:t.props.pe}}),s("falta-cometida",{attrs:{fc:t.props.fc}})],1)],1)],1)},[],!0,null,null,null).exports,b={props:{g:{type:Number,required:!0},a:{type:Number,required:!0},ff:{type:Number,required:!0},fd:{type:Number,required:!0},fc:{type:Number,required:!0},i:{type:Number,required:!0},pp:{type:Number,required:!0},fs:{type:Number,required:!0}}},g=Object(e.a)(b,function(a,t){var s=t._c;return s("b-col",{class:t.data.staticClass||"",attrs:{md:"12"}},[s("div",[t._v("ATACANTES")]),s("b-row",[s("b-col",{attrs:{md:"4"}},[s("gol",{attrs:{g:t.props.g}}),s("finalizacao-fora",{attrs:{ff:t.props.ff}}),s("falta-sofrida",{attrs:{fs:t.props.fs}}),s("impedimento",{attrs:{i:t.props.i}})],1),s("b-col",{attrs:{md:"4","offset-md":"1"}},[s("assistencia",{attrs:{a:t.props.a}}),s("finalizacao-defendida",{attrs:{fd:t.props.fd}}),s("falta-cometida",{attrs:{fc:t.props.fc}}),s("penalti-perdido",{attrs:{pp:t.props.pp}})],1)],1)],1)},[],!0,null,null,null).exports,v={props:{g:{type:Number,required:!0},a:{type:Number,required:!0},ff:{type:Number,required:!0},fd:{type:Number,required:!0},fc:{type:Number,required:!0},fs:{type:Number,required:!0},rb:{type:Number,required:!0},pe:{type:Number,required:!0},ca:{type:Number,required:!0}}},y=Object(e.a)(v,function(a,t){var s=t._c;return s("b-col",{class:t.data.staticClass||"",attrs:{md:"12"}},[s("div",[t._v("MEIAS")]),s("b-row",[s("b-col",{attrs:{md:"4"}},[s("falta-sofrida",{attrs:{fs:t.props.fs}}),s("gol",{attrs:{g:t.props.g}}),s("finalizacao-fora",{attrs:{ff:t.props.ff}}),s("roubada-bola",{attrs:{rb:t.props.rb}}),s("cartao-amarelo",{attrs:{ca:t.props.ca}})],1),s("b-col",{attrs:{md:"4","offset-md":"1"}},[s("falta-cometida",{attrs:{fc:t.props.fc}}),s("assistencia",{attrs:{a:t.props.a}}),s("finalizacao-defendida",{attrs:{fd:t.props.fd}}),s("passe-errado",{attrs:{pe:t.props.pe}})],1)],1)],1)},[],!0,null,null,null).exports,C=(s(160),{props:{posicaoEmCampo:{type:String,required:!0,validator:function(a){return-1!==["defesa","ataque"].indexOf(a)}}},computed:{title:function(){switch(this.posicaoEmCampo){case"defesa":return"DETAQUES DA DEFESA";case"ataque":return"DESTAQUES DO ATAQUE"}}}}),q=Object(e.a)(C,function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("b-row",{staticClass:"mt-4 py-2 bg-green-field text-light rounded"},[s("b-col",{staticClass:"border-right",attrs:{cols:"6",md:"6"}},[s("div",{staticClass:"ml-4 mb-2"},[a._v(a._s(a.title))]),a._t("casa")],2),s("b-col",{attrs:{cols:"6",md:"6"}},[s("div",{staticClass:"ml-4 mb-2"},[a._v(a._s(a.title))]),a._t("visitante")],2)],1)},[],!1,null,null,null).exports,w={props:{destaques:{type:Array,required:!0}}},h=Object(e.a)(w,function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("b-row",a._l(a.destaques,function(t){return s("b-col",{key:t.atleta_id,staticClass:"mb-2",attrs:{md:"6"}},[s("dados-atleta",a._b({},"dados-atleta",t,!1))],1)}),1)},[],!1,null,null,null).exports,x={props:{partida:{type:Object,required:!0}},components:{ColDefesa:l,ColGoleiros:u,ColZagueiros:m,ColLaterais:f,ColAtacantes:g,ColMeias:y,ContainerDestaques:q,RowDestaques:h}},N=Object(e.a)(x,function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"py-2 bg-light"},[s("b-row",[s("b-col",{staticClass:"border-right",attrs:{cols:"6",md:"6"}},[s("b-row",{staticClass:"ml-2"},[s("col-defesa",{attrs:{sg:a.partida.goleiros_casa.sum_sg}}),s("col-goleiros",{attrs:{dd:a.partida.goleiros_casa.sum_dd,gs:a.partida.goleiros_casa.sum_gs,dp:a.partida.goleiros_casa.sum_dp}})],1)],1),s("b-col",{attrs:{cols:"6",md:"6"}},[s("b-row",[s("col-defesa",{attrs:{sg:a.partida.goleiros_visitante.sum_sg}}),s("col-goleiros",{attrs:{dd:a.partida.goleiros_visitante.sum_dd,gs:a.partida.goleiros_visitante.sum_gs,dp:a.partida.goleiros_visitante.sum_dp}})],1)],1)],1),s("b-row",{staticClass:"mt-2"},[s("b-col",{staticClass:"border-right",attrs:{cols:"6",md:"6"}},[s("b-row",[s("col-zagueiros",{staticClass:"ml-4",attrs:{rb:a.partida.zagueiros_casa.sum_rb,gc:a.partida.zagueiros_casa.sum_gc,g:a.partida.zagueiros_casa.sum_g,pe:a.partida.zagueiros_casa.sum_pe,fs:a.partida.zagueiros_casa.sum_fs,fc:a.partida.zagueiros_casa.sum_fc,ca:a.partida.zagueiros_casa.sum_ca}})],1)],1),s("b-col",{attrs:{cols:"6",md:"6"}},[s("b-row",[s("col-zagueiros",{attrs:{rb:a.partida.zagueiros_visitante.sum_rb,gc:a.partida.zagueiros_visitante.sum_gc,g:a.partida.zagueiros_visitante.sum_g,pe:a.partida.zagueiros_visitante.sum_pe,fs:a.partida.zagueiros_visitante.sum_fs,fc:a.partida.zagueiros_visitante.sum_fc,ca:a.partida.zagueiros_visitante.sum_ca}})],1)],1)],1),s("b-row",{staticClass:"mt-4"},[s("b-col",{staticClass:"border-right",attrs:{cols:"6",md:"6"}},[s("b-row",[s("col-laterais",{staticClass:"ml-4",attrs:{g:a.partida.laterais_casa.sum_g,a:a.partida.laterais_casa.sum_a,fd:a.partida.laterais_casa.sum_fd,ff:a.partida.laterais_casa.sum_ff,pe:a.partida.laterais_casa.sum_pe,rb:a.partida.laterais_casa.sum_rb,fc:a.partida.laterais_casa.sum_fc,fs:a.partida.laterais_casa.sum_fs}})],1)],1),s("b-col",{attrs:{cols:"6",md:"6"}},[s("b-row",[s("col-laterais",{attrs:{g:a.partida.laterais_visitante.sum_g,a:a.partida.laterais_visitante.sum_a,fd:a.partida.laterais_visitante.sum_fd,ff:a.partida.laterais_visitante.sum_ff,pe:a.partida.laterais_visitante.sum_pe,rb:a.partida.laterais_visitante.sum_rb,fc:a.partida.laterais_visitante.sum_fc,fs:a.partida.laterais_visitante.sum_fs}})],1)],1)],1),s("container-destaques",{attrs:{"posicao-em-campo":"defesa"}},[s("row-destaques",{attrs:{slot:"casa",destaques:a.partida.destaques_defesa_casa},slot:"casa"}),s("row-destaques",{attrs:{slot:"visitante",destaques:a.partida.destaques_defesa_visitante},slot:"visitante"})],1),s("hr"),s("b-row",{staticClass:"mt-2"},[s("b-col",{staticClass:"border-right",attrs:{cols:"6",md:"6"}},[s("b-row",[s("col-meias",{staticClass:"ml-4",attrs:{g:a.partida.meias_casa.sum_g,a:a.partida.meias_casa.sum_a,fd:a.partida.meias_casa.sum_fd,ff:a.partida.meias_casa.sum_ff,fs:a.partida.meias_casa.sum_fs,fc:a.partida.meias_casa.sum_fc,rb:a.partida.meias_casa.sum_rb,pe:a.partida.meias_casa.sum_pe,ca:a.partida.meias_casa.sum_ca}})],1)],1),s("b-col",{attrs:{cols:"6",md:"6"}},[s("b-row",[s("col-meias",{attrs:{g:a.partida.meias_visitante.sum_g,a:a.partida.meias_visitante.sum_a,fd:a.partida.meias_visitante.sum_fd,ff:a.partida.meias_visitante.sum_ff,fs:a.partida.meias_visitante.sum_fs,fc:a.partida.meias_visitante.sum_fc,rb:a.partida.meias_visitante.sum_rb,pe:a.partida.meias_visitante.sum_pe,ca:a.partida.meias_visitante.sum_ca}})],1)],1)],1),s("b-row",{staticClass:"mt-4"},[s("b-col",{staticClass:"border-right",attrs:{cols:"6",md:"6"}},[s("b-row",[s("col-atacantes",{staticClass:"ml-4",attrs:{g:a.partida.atacantes_casa.sum_g,a:a.partida.atacantes_casa.sum_a,fd:a.partida.atacantes_casa.sum_fd,ff:a.partida.atacantes_casa.sum_ff,pp:a.partida.atacantes_casa.sum_pp,i:a.partida.atacantes_casa.sum_i,fc:a.partida.atacantes_casa.sum_fc,fs:a.partida.atacantes_casa.sum_fs}})],1)],1),s("b-col",{attrs:{cols:"6",md:"6"}},[s("b-row",[s("col-atacantes",{attrs:{g:a.partida.atacantes_visitante.sum_g,a:a.partida.atacantes_visitante.sum_a,fd:a.partida.atacantes_visitante.sum_fd,ff:a.partida.atacantes_visitante.sum_ff,pp:a.partida.atacantes_visitante.sum_pp,i:a.partida.atacantes_visitante.sum_i,fc:a.partida.atacantes_visitante.sum_fc,fs:a.partida.atacantes_visitante.sum_fs}})],1)],1)],1),s("container-destaques",{attrs:{"posicao-em-campo":"ataque"}},[s("row-destaques",{attrs:{slot:"casa",destaques:a.partida.destaques_ataque_casa},slot:"casa"}),s("row-destaques",{attrs:{slot:"visitante",destaques:a.partida.destaques_ataque_visitante},slot:"visitante"})],1)],1)},[],!1,null,null,null).exports,z={props:{gols_marcados_total:{type:Number,required:!0},gols_sofridos_total:{type:Number,required:!0},gols_marcados_casa:{type:Number,required:!0},gols_sofridos_casa:{type:Number,required:!0},gols_marcados_fora:{type:Number,required:!0},gols_sofridos_fora:{type:Number,required:!0}}},j={components:{SumarioClubes:d,SumarioPartida:i,SumarioEstatisticas:N,RowSumarioGols:Object(e.a)(z,function(a,t){var s=t._c;return s("b-row",[s("b-col",{attrs:{cols:"12",lg:"6"}},[s("div",{staticClass:"rounded shadow-sm bg-white"},[s("div",{staticClass:"text-center lead my-2"},[s("div",[s("strong",[t._v(t._s(t.props.gols_marcados_total))]),t._v(" gols")]),s("div",[t._v("marcados")])]),s("div",{staticClass:"d-flex justify-content-around align-self-center w-100 mb-2 border-bottom text-success rounded-bottom"},[s("div",{staticClass:"d-flex flex-column align-items-center"},[s("div",[t._v("Casa")]),s("div",{staticClass:"display-5"},[t._v(t._s(t.props.gols_marcados_casa))])]),s("div",{staticClass:"d-flex flex-column align-items-center"},[s("div",[t._v("Fora")]),s("div",{staticClass:"display-5"},[t._v(t._s(t.props.gols_marcados_fora))])])])])]),s("b-col",{attrs:{cols:"12",lg:"6"}},[s("div",{staticClass:"rounded shadow-sm bg-white"},[s("div",{staticClass:"text-center lead my-2"},[s("div",[s("strong",[t._v(t._s(t.props.gols_sofridos_total))]),t._v(" gols")]),s("div",[t._v("sofridos")])]),s("div",{staticClass:"d-flex justify-content-around align-self-center w-100 text-danger"},[s("div",{staticClass:"d-flex flex-column align-items-center"},[s("div",[t._v("Casa")]),s("div",{staticClass:"display-5"},[t._v(t._s(t.props.gols_sofridos_casa))])]),s("div",{staticClass:"d-flex flex-column align-items-center"},[s("div",[t._v("Fora")]),s("div",{staticClass:"display-5"},[t._v(t._s(t.props.gols_sofridos_fora))])])])])])],1)},[],!0,null,null,null).exports},mixins:[new function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return{data:function(){return{displayPriority:0}},mounted:function(){this.runDisplayPriority()},methods:{runDisplayPriority:function(){var t=this;!function s(){requestAnimationFrame(function(){t.displayPriority++,t.displayPriority<a&&s()})}()},defer:function(a){return this.displayPriority>=a}}}}],computed:{pageUrl:function(){return"".concat("https://atilacamurca.github.io/agregador-fc").concat(this.$page.rodada.path)},pageTitle:function(){return"Dicas para rodada ".concat(this.$page.rodada.rodada," do Cartola FC.")}},metaInfo:function(){return{meta:[{name:"og:title",content:this.pageTitle},{name:"og:description",content:"Veja as estatísticas de todos os confrontos da rodada ".concat(this.$page.rodada.rodada," do Cartola FC. Compare os times e escale seu esquadrão.")}]}}},E=(s(283),s(284)),S=Object(e.a)(j,function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("Layout",[s("b-row",[s("b-col",{attrs:{md:"6",lg:"7","offset-md":"1"}},[s("h3",{staticClass:"mb-4"},[a._v("Rodada "+a._s(a.$page.rodada.rodada))])]),s("b-col",{staticClass:"text-light mb-4 mb-sm-0",attrs:{md:"5",lg:"3"}},[s("twitter-button",{attrs:{page_url:a.pageUrl,page_title:a.pageTitle}}),s("facebook-button",{attrs:{page_url:a.pageUrl,page_title:a.pageTitle}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"10","offset-md":"1"}},[s("b-card",{staticClass:"shadow-sm",attrs:{"no-body":"","border-variant":"light"}},a._l(a.$page.rodada.partidas,function(t,r){return s("b-card-body",{key:t.partida_id,staticClass:"card-body-sumario border-bottom-light",class:[t.valida?"":"alert-warning"]},[s("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+t.partida_id,expression:"`accordion-${partida.partida_id}`"}],staticClass:"cursor-pointer",attrs:{title:t.valida?"":"Partida inválida para a rodada"}},[s("sumario-partida",{attrs:{"partida-data":t.partida_data,local:t.local}}),s("sumario-clubes",{attrs:{"clube-casa":t.clube_casa,"clube-visitante":t.clube_visitante,"escudo-casa":t.escudo_casa,"clube-casa-posicao":t.clube_casa_posicao,"escudo-visitante":t.escudo_visitante,"clube-visitante-posicao":t.clube_visitante_posicao,"placar-mandante":t.placar_oficial_mandante,"placar-visitante":t.placar_oficial_visitante}})],1),s("b-collapse",{attrs:{id:"accordion-"+t.partida_id,accordion:"accordion-"+t.partida_id,role:"tabpanel"}},[s("b-row",{staticClass:"mt-2 py-2 bg-light"},[s("b-col",{staticClass:"border-right",attrs:{cols:"6"}},[s("row-sumario-gols",a._b({},"row-sumario-gols",t.sumario_gols_casa,!1))],1),s("b-col",{attrs:{cols:"6"}},[s("row-sumario-gols",a._b({},"row-sumario-gols",t.sumario_gols_visitante,!1))],1)],1),a.defer(r)?s("sumario-estatisticas",{attrs:{partida:t}}):a._e()],1)],1)}),1)],1)],1),s("b-row",[s("b-col",{attrs:{md:"10","offset-md":"1"}},[s("h3",{staticClass:"my-4"},[a._v("Melhores no quesito...")]),s("b-row",[s("b-col",{staticClass:"d-flex align-items-stretch",attrs:{md:"4"}},[s("b-card",[s("b-card-title",[s("em",[a._v("Ah, ladrão!")])]),s("b-card-text",[a._v("\n                            25 melhores nas Roubadas de bola com poucas faltas\n                        ")]),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("g-link",{staticClass:"card-link",attrs:{to:"/melhores"+a.$page.rodada.path+"/ah-ladrao"}},[a._v("\n                                Conferir\n                            ")])],1)],1)],1),s("b-col",{staticClass:"d-flex align-items-stretch",attrs:{md:"4"}},[s("b-card",[s("b-card-title",[a._v("Acima da média")]),s("b-card-text",[a._v("\n                            10 jogadores de cada posição com as melhores médias por jogos.\n                        ")]),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("g-link",{staticClass:"card-link",attrs:{to:"/melhores"+a.$page.rodada.path+"/acima-media"}},[a._v("\n                                Conferir\n                            ")])],1)],1)],1)],1)],1)],1)],1)},[],!1,null,"19b086d6",null);"function"==typeof E.default&&Object(E.default)(S);t.default=S.exports}}]);
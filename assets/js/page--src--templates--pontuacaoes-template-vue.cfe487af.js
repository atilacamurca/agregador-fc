(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Fomy:function(t,a,s){},Junv:function(t,a,s){"use strict";var e=s("I+eb"),o=s("6LWA"),i=[].reverse,n=[1,2];e({target:"Array",proto:!0,forced:String(n)===String(n.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})},yt1K:function(t,a,s){"use strict";s.r(a);s("2B1R"),s("Junv");var e={extends:s("H8ri").a,props:{data:{type:Object,required:!0},options:{type:Object,required:!1,default:function(){return{}}}},mounted:function(){this.renderChart(this.data,this.options)}},o=s("KHd+"),i={components:{BarChart:Object(o.a)(e,void 0,void 0,!1,null,null,null).exports},computed:{pontuacao:function(){return this.$page.pontuacao},partidasReverse:function(){return this.pontuacao.partidas.reverse()},data:function(){var t=this.pontuacao,a=t.partidas,s=t.clube_id;return{labels:this.pontuacao.rodadas.map((function(t,e){var o=a[e],i=s===o.clube_casa_id,n=i?o.clube_visitante_abrev:o.clube_casa_abrev;return["Rod. ".concat(t),n,i?"CASA":"VISIT"]})),datasets:[{label:"Média",data:this.pontuacao.medias,type:"line",pointBorderColor:"#34495e",pointBorderWidth:3,backgroundColor:"whitesmoke",pointHoverBackgroundColor:"whitesmoke",pointHoverBorderColor:"#34495e",pointHoverBorderWidth:4,fill:!1,pointRadius:6,pointHoverRadius:8,borderColor:"#bdc3c7"},{label:"Pontos",data:this.pontuacao.pontos,backgroundColor:this.pontuacao.pontos.map((function(t){return t>=0?"#28a745":"#dc3545"}))}]}},options:function(){return{responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1}}}}},n=(s("zUWw"),null),c=Object(o.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("Layout",[s("b-row",[s("b-col",{attrs:{cols:"4",sm:"3",lg:"2"}},[s("div",{staticClass:"d-md-flex justify-content-md-end"},[s("g-image",{staticClass:"img-thumbnail rounded-circle",staticStyle:{width:"96px",height:"96px"},attrs:{src:t.pontuacao.foto,width:"96",alt:t.pontuacao.apelido}})],1),s("g-image",{staticClass:"atleta-escudo",staticStyle:{width:"32px",height:"32px"},attrs:{src:t.pontuacao.escudo_60,width:"32px",height:"32px",alt:t.pontuacao.clube}})],1),s("b-col",{attrs:{cols:"8",sm:"4",lg:"3"}},[s("h4",[t._v(t._s(t.pontuacao.apelido))]),s("p",{staticClass:"text-primary"},[t._v("\n                "+t._s(t.pontuacao.posicao)+" do\n                "+t._s(t.pontuacao.clube)+"\n            ")])]),s("b-col",{staticClass:"my-4 my-sm-0",attrs:{cols:"12",sm:"5",lg:"4","offset-lg":"2"}},[s("div",{staticClass:"d-flex justify-content-around align-items-center h-100"},[s("div",{staticClass:"text-center"},[s("div",{staticClass:"font-weight-light text-uppercase"},[t._v("Preço")]),s("div",{staticClass:"lead"},[s("b-badge",{staticClass:"mr-2",attrs:{variant:"danger"}},[t._v(t._s(t.pontuacao.scouts.preco_num))]),s("variacao-num",{attrs:{variacao_num:t.pontuacao.scouts.variacao_num}})],1)]),s("div",{staticClass:"text-center"},[s("div",{staticClass:"font-weight-light text-uppercase"},[t._v("Média")]),s("div",{staticClass:"lead"},[s("b-badge",{attrs:{variant:"warning"}},[t._v(t._s(t.pontuacao.scouts.media_num))])],1)]),s("div",{staticClass:"text-center"},[s("div",{staticClass:"font-weight-light text-uppercase"},[t._v("Jogos")]),s("div",{staticClass:"lead"},[s("b-badge",{attrs:{variant:"primary"}},[t._v(t._s(t.pontuacao.scouts.jogos_num))])],1)])])])],1),s("b-row",[s("b-col",{staticClass:"h-25 mt-2"},[s("bar-chart",{attrs:{data:t.data,options:t.options}})],1)],1),s("b-row",{staticClass:"mt-4"},[s("b-col",{attrs:{md:"6",lg:"4"}},[s("h4",{staticClass:"ml-2"},[t._v("Partidas")]),s("b-card",{attrs:{"no-body":""}},[s("b-list-group",{attrs:{flush:""}},t._l(t.partidasReverse,(function(a,e){return s("b-list-group-item",{key:e},[s("div",{staticClass:"d-flex flex-columns justify-content-around"},[s("div",[t._v("Rod. "+t._s(a.rodada_id))]),s("div",[s("g-image",{staticStyle:{width:"24px",height:"24px"},attrs:{width:"24px",src:a.clube_casa_escudo,alt:a.clube_casa_abrev,title:a.clube_casa_abrev}})],1),s("div",{},[t._v("\n                                "+t._s(a.placar_oficial_mandante)+"\n                                X\n                                "+t._s(a.placar_oficial_visitante)+"\n                            ")]),s("div",[s("g-image",{staticStyle:{width:"24px",height:"24px"},attrs:{width:"24px",src:a.clube_visitante_escudo,alt:a.clube_visitante_abrev,title:a.clube_visitante_abrev}})],1)])])})),1)],1),s("small",{staticClass:"text-danger"},[t._v("* Jogador não necessariamente jogou.")])],1),"tec"!==t.pontuacao.scouts.posicao_abrev?s("b-col",{staticClass:"mt-4 mt-lg-0",attrs:{md:"12",lg:"8"}},[s("scouts-"+t.pontuacao.scouts.posicao_abrev,t._b({tag:"component"},"component",t.pontuacao.scouts,!1))],1):t._e()],1)],1)}),[],!1,null,"5530c03c",null);"function"==typeof n&&n(c);a.default=c.exports},zUWw:function(t,a,s){"use strict";var e=s("Fomy");s.n(e).a}}]);
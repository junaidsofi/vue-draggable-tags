webpackJsonp([2,0],[function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=l(18),i=a(s),c=l(14),d=a(c);l(7),l(9),new i.default({el:"#app",template:"<App/>",components:{App:d.default}})},,function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=l(15),i=a(s);t.default={name:"app",components:{Tags:i.default}}},function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=l(4),i=a(s),c=l(19),d=a(c);t.default={name:"tag",components:{draggable:d.default},data:function(){return"undefined"!=typeof SDT?SDT:{selectedTags:[],availableTags:[{tag:"Go",slug:"go",fixed:!0},{tag:"PHP",slug:"php",fixed:!0},{tag:"R",slug:"r",fixed:!0},{tag:"Kotlin",slug:"kotlin",fixed:!1},{tag:"Java",slug:"java",fixed:!1},{tag:"C++",slug:"c--",fixed:!1},{tag:"JavaScript",slug:"javascript",fixed:!1},{tag:"C#",slug:"c-",fixed:!1},{tag:"C",slug:"c",fixed:!1},{tag:"Python",slug:"phyton",fixed:!1}],selected:{editable:!0,cloneable:!1,droppable:!0},available:{editable:!0,cloneable:!1,droppable:!0},isDragging:!1,delayedDragging:!1}},methods:{orderList:function(e){e.sort(function(e,t){return e.tag.localeCompare(t.tag)})},moveTag:function(e,t,l){var a=this[t+"Tags"],s=this[l+"Tags"],i=a[e];t=this[t],l=this[l],!i.fixed&&t.editable&&l.editable&&l.droppable&&((t.cloneable||0===s.filter(function(e){return e.tag==i.tag}).length)&&setTimeout(function(){s.push(i)},300),t.cloneable||a.splice(e,1))},onMove:function(e){var t=e.relatedContext,l=e.draggedContext,a=t.element,s=l.element;return!(a&&a.fixed||s.fixed)},getOptions:function(e){return{animation:0,group:{name:"labels",pull:this[e].cloneable?"clone":"move",put:this[e].droppable},disabled:!this[e].editable}}},computed:{selectedTagsOptions:function(){return this.getOptions("selected")},availableTagsOptions:function(){return this.getOptions("available")},selectedTagsOptionsString:function(){return(0,i.default)(this.selectedTags,null,2)},availableTagsString:function(){return(0,i.default)(this.availableTags,null,2)}},watch:{isDragging:function(e){var t=this;return e?void(this.delayedDragging=!0):void this.$nextTick(function(){t.delayedDragging=!1})}}}},,,,function(e,t){},function(e,t){},,,,,,function(e,t,l){var a=l(1)(l(2),l(16),null,null);e.exports=a.exports},function(e,t,l){l(8);var a=l(1)(l(3),l(17),null,null);e.exports=a.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("Tags")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"mdl-grid mdl-grid center-items"},[e._m(0,!1,!1),e._v(" "),e._m(1,!1,!1),e._v(" "),l("div",{staticClass:"mdl-cell mdl-cell--3-col",attrs:{id:"sdt-selected-tags"}},[l("div",{staticClass:"panel-body sdt-teal-switch"},[l("label",{staticClass:"mdl-switch mdl-js-switch mdl-js-ripple-effect",attrs:{for:"switch-1"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.selected.editable,expression:"selected.editable"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:"switch-1"},domProps:{checked:Array.isArray(e.selected.editable)?e._i(e.selected.editable,null)>-1:e.selected.editable},on:{change:function(t){var l=e.selected.editable,a=t.target,s=!!a.checked;if(Array.isArray(l)){var i=null,c=e._i(l,i);a.checked?c<0&&(e.selected.editable=l.concat([i])):c>-1&&(e.selected.editable=l.slice(0,c).concat(l.slice(c+1)))}else e.$set(e.selected,"editable",s)}}}),e._v(" "),l("span",{staticClass:"mdl-switch__label"},[e._v("Enable drag and drop")])]),e._v(" "),l("label",{staticClass:"mdl-switch mdl-js-switch mdl-js-ripple-effect",attrs:{for:"switch-2"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.selected.droppable,expression:"selected.droppable"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:"switch-2"},domProps:{checked:Array.isArray(e.selected.droppable)?e._i(e.selected.droppable,null)>-1:e.selected.droppable},on:{change:function(t){var l=e.selected.droppable,a=t.target,s=!!a.checked;if(Array.isArray(l)){var i=null,c=e._i(l,i);a.checked?c<0&&(e.selected.droppable=l.concat([i])):c>-1&&(e.selected.droppable=l.slice(0,c).concat(l.slice(c+1)))}else e.$set(e.selected,"droppable",s)}}}),e._v(" "),l("span",{staticClass:"mdl-switch__label"},[e._v("Enable dropping")])]),e._v(" "),l("label",{staticClass:"mdl-switch mdl-js-switch mdl-js-ripple-effect",attrs:{for:"switch-3"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.selected.cloneable,expression:"selected.cloneable"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:"switch-3"},domProps:{checked:Array.isArray(e.selected.cloneable)?e._i(e.selected.cloneable,null)>-1:e.selected.cloneable},on:{change:function(t){var l=e.selected.cloneable,a=t.target,s=!!a.checked;if(Array.isArray(l)){var i=null,c=e._i(l,i);a.checked?c<0&&(e.selected.cloneable=l.concat([i])):c>-1&&(e.selected.cloneable=l.slice(0,c).concat(l.slice(c+1)))}else e.$set(e.selected,"cloneable",s)}}}),e._v(" "),l("span",{staticClass:"mdl-switch__label"},[e._v("Enable cloning")])])]),e._v(" "),l("button",{staticClass:"sdt-sortable-btn sdt-sort-button mdl-button mdl-button--fab mdl-button--mini-fab mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--teal-100",on:{click:function(t){e.orderList(e.selectedTags)}}},[l("i",{staticClass:"material-icons  mdl-color-text--indigo-500"},[e._v("")])]),e._v(" "),l("div",{staticClass:"mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp mdl-color--teal-500"},[l("draggable",{attrs:{element:"span",options:e.selectedTagsOptions,move:e.onMove},on:{start:function(t){e.isDragging=!0},end:function(t){e.isDragging=!1}},model:{value:e.selectedTags,callback:function(t){e.selectedTags=t},expression:"selectedTags"}},[l("transition-group",{staticClass:"mdl-list dragArea",attrs:{type:"transition",name:"'flip-list'"}},e._l(e.selectedTags,function(t,a){return l("li",{key:t.tag,staticClass:"sdt-tag mdl-cell mdl-cell--12-col sdt-tag-item mdl-list__item mdl-card mdl-shadow--2dp"},[l("span",{staticClass:"mdl-list__item-primary-content"},[l("i",{staticClass:"material-icons sdt-tag-icon sdt-tag-icon-left",class:[t.fixed?"mdl-color-text--red-500":"mdl-color-text--grey-300"],on:{click:function(e){t.fixed=!t.fixed}}},[e._v("")]),e._v("\n                     "+e._s(t.tag)+"\n                  ")]),e._v(" "),l("i",{staticClass:"material-icons sdt-tag-icon sdt-tag-icon-right mdl-color-text--teal-500",on:{click:function(t){e.moveTag(a,"selected","available")}}},[e._v("")])])}))],1)],1)]),e._v(" "),l("div",{staticClass:"mdl-cell mdl-cell--3-col",attrs:{id:"sdt-available-tags"}},[l("div",{staticClass:"panel-body sdt-indigo-switch"},[l("label",{staticClass:"mdl-switch mdl-js-switch mdl-js-ripple-effect",attrs:{for:"switch-4"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.available.editable,expression:"available.editable"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:"switch-4"},domProps:{checked:Array.isArray(e.available.editable)?e._i(e.available.editable,null)>-1:e.available.editable},on:{change:function(t){var l=e.available.editable,a=t.target,s=!!a.checked;if(Array.isArray(l)){var i=null,c=e._i(l,i);a.checked?c<0&&(e.available.editable=l.concat([i])):c>-1&&(e.available.editable=l.slice(0,c).concat(l.slice(c+1)))}else e.$set(e.available,"editable",s)}}}),e._v(" "),l("span",{staticClass:"mdl-switch__label"},[e._v("Enable drag and drop")])]),e._v(" "),l("label",{staticClass:"mdl-switch mdl-js-switch mdl-js-ripple-effect",attrs:{for:"switch-5"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.available.droppable,expression:"available.droppable"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:"switch-5"},domProps:{checked:Array.isArray(e.available.droppable)?e._i(e.available.droppable,null)>-1:e.available.droppable},on:{change:function(t){var l=e.available.droppable,a=t.target,s=!!a.checked;if(Array.isArray(l)){var i=null,c=e._i(l,i);a.checked?c<0&&(e.available.droppable=l.concat([i])):c>-1&&(e.available.droppable=l.slice(0,c).concat(l.slice(c+1)))}else e.$set(e.available,"droppable",s)}}}),e._v(" "),l("span",{staticClass:"mdl-switch__label"},[e._v("Enable dropping")])]),e._v(" "),l("label",{staticClass:"mdl-switch mdl-js-switch mdl-js-ripple-effect",attrs:{for:"switch-6"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.available.cloneable,expression:"available.cloneable"}],staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:"switch-6"},domProps:{checked:Array.isArray(e.available.cloneable)?e._i(e.available.cloneable,null)>-1:e.available.cloneable},on:{change:function(t){var l=e.available.cloneable,a=t.target,s=!!a.checked;if(Array.isArray(l)){var i=null,c=e._i(l,i);a.checked?c<0&&(e.available.cloneable=l.concat([i])):c>-1&&(e.available.cloneable=l.slice(0,c).concat(l.slice(c+1)))}else e.$set(e.available,"cloneable",s)}}}),e._v(" "),l("span",{staticClass:"mdl-switch__label"},[e._v("Enable cloning")])])]),e._v(" "),l("button",{staticClass:"sdt-sortable-btn sdt-sort-button mdl-button mdl-button--fab mdl-button--mini-fab mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--indigo-100",on:{click:function(t){e.orderList(e.availableTags)}}},[l("i",{staticClass:"material-icons mdl-color-text--indigo-500"},[e._v("")])]),e._v(" "),l("div",{staticClass:"mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp mdl-color--indigo-500"},[l("draggable",{staticClass:"mdl-list dragArea",attrs:{options:e.availableTagsOptions,move:e.onMove},on:{start:function(t){e.isDragging=!0},end:function(t){e.isDragging=!1}},model:{value:e.availableTags,callback:function(t){e.availableTags=t},expression:"availableTags"}},[l("transition-group",{attrs:{type:"transition",name:"flip-list"}},e._l(e.availableTags,function(t,a){return l("li",{key:t.tag,staticClass:"sdt-tag mdl-cell mdl-cell--12-col sdt-tag-item mdl-list__item mdl-card mdl-shadow--2dp"},[l("span",{staticClass:"mdl-list__item-primary-content"},[l("i",{staticClass:"sdt-tag-icon sdt-tag-icon-left material-icons mdl-color-text--indigo-500 sdt-tag-icon",on:{click:function(t){e.moveTag(a,"available","selected")}}},[e._v("")]),e._v("\n                     "+e._s(t.tag)+"\n                  ")]),e._v(" "),l("i",{staticClass:"material-icons sdt-tag-icon sdt-tag-icon-right",class:[t.fixed?"mdl-color-text--red-500":"mdl-color-text--grey-300"],on:{click:function(e){t.fixed=!t.fixed}}},[e._v("")])])}))],1)],1)]),e._v(" "),l("div",{staticClass:"sdt-json-section mdl-cell mdl-cell--3-col mdl-card mdl-color-text--teal-500 mdl-color--teal-50"},[l("pre",{staticClass:"sdt-json-pre"},[e._v(e._s(e.selectedTagsOptionsString))])]),e._v(" "),l("div",{staticClass:"sdt-json-section mdl-cell mdl-cell--3-col mdl-card mdl-card mdl-color-text--indigo-500 mdl-color--indigo-50"},[l("pre",{staticClass:"sdt-json-pre"},[e._v(e._s(e.availableTagsString))])]),e._v(" "),e._m(2,!1,!1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("a",{attrs:{href:"https://github.com/Josantonius/vue-draggable-tags.git"}},[l("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0",width:"150px"},attrs:{src:"http://aral.github.io/fork-me-on-github-retina-ribbons/right-turquoise@2x.png",alt:"Fork me on GitHub"}})])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"mdl-cell mdl-cell--12-col"},[l("div",{staticClass:"sdt-header panel-heading"},[l("h2",{staticClass:"panel-title mdl-cell mdl-cell--12-col"},[e._v("DRAG, DROP & SORT TAGS")])])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"mdl-cell mdl-cell--12-col"},[l("footer",{staticClass:"sdt-footer"},[l("p",{staticClass:"panel-title mdl-cell mdl-cell--12-col"},[e._v("Created with "),l("a",{staticClass:"mdl-color-text--teal-700",attrs:{href:"https://getmdl.io/"}},[e._v("MDL")]),e._v(", "),l("a",{staticClass:"mdl-color-text--teal-700",attrs:{href:"https://vuejs.org/"}},[e._v("Vue.js")]),e._v(" and "),l("a",{staticClass:"mdl-color-text--teal-700",attrs:{href:"https://github.com/SortableJS/Vue.Draggable"}},[e._v("Vue.Draggable")]),e._v("."),l("br"),e._v("© 2017 "),l("a",{staticClass:"mdl-color-text--teal-700",attrs:{href:"https://github.com/Josantonius"}},[e._v("Josantonius")])])])])}]}}]);
//# sourceMappingURL=app.fd7be6178d9b9dc3ec30.js.map
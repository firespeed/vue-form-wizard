!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueFormWizard=e():t.VueFormWizard=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,r=t.default);var o="function"==typeof r?r.options:r;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),i&&(o._scopeId=i),n){var c=Object.create(o.computed||null);Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}}),o.computed=c}return{esModule:a,exports:r,options:o}}},function(t,e,i){i(6);var n=i(0)(i(3),i(7),null,null);n.options.__file="C:\\work\\vue-tab-wizard\\src\\components\\FormWizard.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] FormWizard.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},function(t,e,i){var n=i(0)(i(4),i(8),null,null);n.options.__file="C:\\work\\vue-tab-wizard\\src\\components\\TabContent.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] TabContent.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},data:function(){return{activeTabIndex:0,isLastStep:!1,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{tabCount:function(){return this.tabs.length},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},iconActiveStyle:function(){return{backgroundColor:this.color}},stepCheckedStyle:function(){return{borderColor:this.color}},errorStyle:function(){return{borderColor:this.errorColor,backgroundColor:this.errorColor}},stepTitleStyle:function(){return{color:this.tabs[this.activeTabIndex].validationError?this.errorColor:this.color}},isStepSquare:function(){return"square"===this.shape},isTabShape:function(){return"tab"===this.shape},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){var t=0;if(this.activeTabIndex>0){t=this.stepPercentage*(2*this.activeTabIndex+1)}else t=this.stepPercentage;return t}},methods:{isChecked:function(t){return t<=this.maxStep},navigateToTab:function(t){var e=this;this.$emit("on-change",this.activeTabIndex,t);var i=t>this.activeTabIndex;if(t<=this.maxStep){var n=function(){e.changeTab(e.activeTabIndex,t)};if(i)for(var a=this.activeTabIndex;a<t;a++)this.beforeTabChange(a,n);else this.setValidationError(null),n()}},nextTab:function(){var t=this;this.$emit("on-change",this.activeTabIndex,this.activeTabIndex+1);var e=function(){t.activeTabIndex<t.tabCount-1?t.changeTab(t.activeTabIndex,t.activeTabIndex+1):(t.isLastStep=!0,t.$emit("finished"))};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this;this.$emit("on-change",this.activeTabIndex,this.activeTabIndex-1);var e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1),t.isLastStep=!1)};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},finish:function(){var t=this,e=function(){t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var i=this;if(this.setValidationError(null),t.then&&"function"==typeof t.then)this.setLoading(!0),t.then(function(t){i.setLoading(!1);var n=!0===t;i.executeBeforeChange(n,e)}).catch(function(t){i.setLoading(!1),i.setValidationError(t)});else{var n=!0===t;this.executeBeforeChange(n,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var i=this.tabs[t];if(i&&void 0!==i.beforeChange){var n=i.beforeChange();this.validateBeforeChange(n,e)}else e()}},changeTab:function(t,e){var i=this.tabs[t],n=this.tabs[e];return i&&(i.active=!1),n&&(n.active=!0),this.activeTabIndex=e,this.checkStep(),this.tryChangeRoute(n),this.increaseMaxStep(),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkStep:function(){this.activeTabIndex===this.tabCount-1?this.isLastStep=!0:this.isLastStep=!1},increaseMaxStep:function(){this.activeTabIndex>this.maxStep&&(this.maxStep=this.activeTabIndex)},checkRouteChange:function(t){var e=-1,i=this.tabs.find(function(i,n){var a=i.route===t;return a&&(e=n),a});if(i&&!i.active){var n=e>this.activeTabIndex;this.navigateToTab(e,n)}},getTabs:function(){return this.$children.filter(function(t){return"tab-content"===t.$options.name})},activateTab:function(t){var e=this.tabs[t];e.active=!0,this.tryChangeRoute(e)},activateTabAndCheckStep:function(t){this.activateTab(t),this.checkStep(),this.maxStep=this.startIndex,this.activeTabIndex=this.startIndex},initializeTabs:function(){this.tabs=this.getTabs(),this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")},reinitializeTabs:function(){var t=this.getTabs();if(0!==this.tabs.length&&this.tabs.length!==t.length){this.tabs=t;var e=-1;this.tabs.find(function(t,i){return t.active&&(e=i),t.active}),-1===e&&(e=this.activeTabIndex>0?this.activeTabIndex-1:0),this.tabs.forEach(function(t){t.active=!1}),this.activateTab(e),this.maxStep=e,this.activeTabIndex=e}}},mounted:function(){this.initializeTabs()},updated:function(){this.reinitializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},route:{type:[String,Object]}},data:function(){return{active:!1,validationError:null}}}},function(t,e,i){t.exports={FormWizard:i(1),TabContent:i(2),install:function(e){e.component("form-wizard",t.exports.FormWizard),e.component("tab-content",t.exports.TabContent)}}},function(t,e){},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-form-wizard"},[i("div",{staticClass:"wizard-header"},[t._t("title",[i("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),i("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),i("div",{staticClass:"wizard-navigation"},[i("div",{staticClass:"wizard-progress-with-circle"},[i("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),i("ul",{staticClass:"wizard-nav wizard-nav-pills"},t._l(t.tabs,function(e,n){return i("li",{class:{active:e.active}},[i("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.navigateToTab(n)}}},[i("div",{staticClass:"wizard-icon-circle",class:{checked:t.isChecked(n),square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.isChecked(n)?t.stepCheckedStyle:{},e.validationError?t.errorStyle:{}]},[i("transition",{attrs:{name:t.transition,mode:"out-in"}},[e.active?i("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[e.active?t.iconActiveStyle:{},e.validationError?t.errorStyle:{}]},[e.icon?i("i",{staticClass:"wizard-icon",class:e.icon}):i("i",{staticClass:"wizard-icon"},[t._v(t._s(n+1))])]):t._e(),t._v(" "),!e.active&&e.icon?i("i",{staticClass:"wizard-icon",class:e.icon}):t._e(),t._v(" "),e.active||e.icon?t._e():i("i",{staticClass:"wizard-icon"},[t._v(t._s(n+1))])])],1),t._v(" "),i("span",{staticClass:"stepTitle",class:{active:e.active,has_error:e.validationError},style:e.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(e.title)+"\n          ")])])])})),t._v(" "),i("div",{staticClass:"wizard-tab-content"},[t._t("default")],2)]),t._v(" "),t.hideButtons?t._e():i("div",{staticClass:"wizard-card-footer clearfix"},[[t.displayPrevButton?i("span",{staticClass:"wizard-footer-left",on:{click:t.prevTab}},[t._t("prev",[i("button",{staticClass:"wizard-btn btn-default wizard-btn-wd",style:t.fillButtonStyle,attrs:{type:"button",disabled:t.loading}},[t._v("\n            "+t._s(t.backButtonText)+"\n          ")])])],2):t._e()],t._v(" "),[t.isLastStep?i("span",{staticClass:"wizard-footer-right",on:{click:t.finish}},[t._t("finish",[i("button",{staticClass:"wizard-btn btn-fill wizard-btn-wd btn-next",style:t.fillButtonStyle,attrs:{type:"button"}},[t._v("\n            "+t._s(t.finishButtonText)+"\n          ")])])],2):t._e()],t._v(" "),[t.isLastStep?t._e():i("span",{staticClass:"wizard-footer-right",on:{click:t.nextTab}},[t._t("next",[i("button",{staticClass:"wizard-btn btn-fill wizard-btn-wd btn-next",style:t.fillButtonStyle,attrs:{type:"button",disabled:t.loading}},[t._v("\n          "+t._s(t.nextButtonText)+"\n         ")])])],2)]],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container"},[t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0}])});
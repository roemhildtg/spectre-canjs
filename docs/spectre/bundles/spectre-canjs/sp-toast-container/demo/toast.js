define("spectre-canjs@3.4.2#sp-toast-container/demo/toast",["can-define@2.5.4#map/map","can-stache@4.10.3#can-stache","can-view-model@4.0.1#can-view-model","spectre-canjs@3.4.2#sp-toast-container/sp-toast-container","spectre-canjs@3.4.2#sp-toast/sp-toast","spectre-canjs@3.4.2#sp-toast-container/demo/styles.less!steal-less@1.3.1#less","can-component@4.3.0#can-component","spectre-canjs@3.4.2#sp-toast-container/ViewModel","can-define@2.5.4#list/list","spectre-canjs@3.4.2#sp-toast/ViewModel","spectre-canjs@3.4.2#sp-toast-container/sp-toast-container.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.4.2#sp-toast/sp-toast.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.4.2#sp-toast/sp-toast.less!steal-less@1.3.1#less"],function(s,e,t){"use strict";function a(s){return s&&s.__esModule?s:{default:s}}var n=a(s),c=a(e),o=a(t),i=new n.default({heading:"Title Here",details:"Details",autoHide:5e3,severity:"info",dismissable:!0,add:function(){(0,o.default)("sp-toast-container").addToast({heading:this.heading,body:this.body,severity:this.severity,autoHide:this.autoHide,dismissable:this.dismissable})}}),d=c.default.from("demo-html");document.body.appendChild(d(i))});
//# sourceMappingURL=toast.js.map
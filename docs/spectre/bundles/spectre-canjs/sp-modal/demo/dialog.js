define("spectre-canjs@4.2.4#sp-modal/demo/dialog",["can-stache@5.1.1#can-stache","can-define@2.8.0#map/map","spectre-canjs@4.2.4#sp-modal/sp-modal","spectre-canjs@4.2.4#sp-confirm/sp-confirm","can-component@5.0.0#can-component","can-namespace@1.0.0#can-namespace","can-bind@1.5.1#can-bind","can-reflect@1.18.0#can-reflect","can-reflect@1.18.0#reflections/call/call","can-symbol@1.6.5#can-symbol","can-reflect@1.18.0#reflections/type/type","can-reflect@1.18.0#reflections/helpers","can-reflect@1.18.0#reflections/get-set/get-set","can-reflect@1.18.0#reflections/observe/observe","can-reflect@1.18.0#reflections/shape/shape","can-reflect@1.18.0#reflections/shape/schema/schema","can-reflect@1.18.0#reflections/get-name/get-name","can-reflect@1.18.0#types/map","can-reflect@1.18.0#types/set","can-queues@1.3.2#can-queues","can-log@1.0.2#dev/dev","can-log@1.0.2#can-log","can-queues@1.3.2#queue","can-queues@1.3.2#queue-state","can-assign@1.3.3#can-assign","can-queues@1.3.2#priority-queue","can-queues@1.3.2#completion-queue","can-queues@1.3.2#dom-order-queue","can-queues@1.3.2#sorted-index-by","can-queues@1.3.2#element-sort","can-reflect-dependencies@1.1.2#can-reflect-dependencies","can-reflect-dependencies@1.1.2#src/add-mutated-by","can-reflect-dependencies@1.1.2#src/delete-mutated-by","can-reflect-dependencies@1.1.2#src/get-dependency-data-of","can-reflect-dependencies@1.1.2#src/is-function","can-construct@3.5.6#can-construct","can-string@1.1.0#can-string","can-stache-bindings@5.0.4#can-stache-bindings","can-stache@5.1.1#src/expression","can-stache@5.1.1#expressions/arg","can-stache@5.1.1#expressions/literal","can-stache@5.1.1#expressions/hashes","can-observation@4.2.0#can-observation","can-observation-recorder@1.3.1#can-observation-recorder","can-event-queue@1.1.8#value/value","can-key-tree@1.2.2#can-key-tree","can-define-lazy-value@1.1.1#define-lazy-value","can-event-queue@1.1.8#dependency-record/merge","can-observation@4.2.0#recorder-dependency-helpers","can-observation@4.2.0#temporarily-bind","can-stache@5.1.1#src/expression-helpers","can-stache-key@1.4.3#can-stache-key","can-reflect-promise@2.2.1#can-reflect-promise","can-view-scope@4.13.6#make-compute-like","can-single-reference@1.3.0#can-single-reference","can-cid@1.3.1#can-cid","can-simple-observable@2.5.0#setter/setter","can-simple-observable@2.5.0#settable/settable","can-simple-observable@2.5.0#can-simple-observable","can-simple-observable@2.5.0#log","can-stache@5.1.1#expressions/bracket","can-stache@5.1.1#expressions/call","can-stache@5.1.1#src/set-identifier","can-view-scope@4.13.6#can-view-scope","can-view-scope@4.13.6#template-context","can-simple-map@4.3.3#can-simple-map","can-event-queue@1.1.8#map/map","can-dom-events@1.3.11#can-dom-events","can-dom-events@1.3.11#helpers/util","can-globals@1.2.2#document/document","can-globals@1.2.2#global/global","can-globals@1.2.2#can-globals-instance","can-globals@1.2.2#can-globals-proto","can-globals@1.2.2#is-browser-window/is-browser-window","can-globals@1.2.2#is-node/is-node","can-dom-events@1.3.11#helpers/make-event-registry","can-dom-events@1.3.11#helpers/-make-delegate-event-tree","can-view-scope@4.13.6#compute_data","can-view-scope@4.13.6#scope-key-data","can-stache-helpers@1.2.0#can-stache-helpers","can-view-scope@4.13.6#let-context","can-stache@5.1.1#expressions/helper","can-stache@5.1.1#expressions/lookup","can-stache@5.1.1#src/utils","can-stache@5.1.1#src/key-observable","can-view-model@4.0.3#can-view-model","can-dom-mutate@2.0.8#can-dom-mutate","can-globals@1.2.2#can-globals","can-globals@1.2.2#location/location","can-globals@1.2.2#mutation-observer/mutation-observer","can-globals@1.2.2#custom-elements/custom-elements","can-dom-mutate@2.0.8#-util","can-dom-mutate@2.0.8#-is-connected","can-dom-data@1.0.3#can-dom-data","can-attribute-encoder@1.1.4#can-attribute-encoder","can-attribute-observable@2.0.2#can-attribute-observable","can-attribute-observable@2.0.2#event","can-attribute-observable@2.0.2#behaviors","can-dom-mutate@2.0.8#node","can-dom-mutate@2.0.8#node/node","can-diff@1.5.0#list/list","can-attribute-observable@2.0.2#get-event-name","can-event-dom-radiochange@2.2.1#can-event-dom-radiochange","can-view-callbacks@5.0.0#can-view-callbacks","can-fragment@1.3.1#can-fragment","can-child-nodes@1.2.1#can-child-nodes","can-component@5.0.0#control/control","can-control@5.0.1#can-control","can-key@1.2.1#get/get","can-key@1.2.1#utils","can-define@2.8.0#list/list","can-define@2.8.0#can-define","can-simple-observable@2.5.0#async/async","can-simple-observable@2.5.0#resolver/resolver","can-event-queue@1.1.8#type/type","can-string-to-any@1.2.1#can-string-to-any","can-data-types@1.2.1#maybe-boolean/maybe-boolean","can-data-types@1.2.1#maybe-date/maybe-date","can-data-types@1.2.1#maybe-number/maybe-number","can-data-types@1.2.1#maybe-string/maybe-string","can-define@2.8.0#define-helpers/define-helpers","can-define@2.8.0#ensure-meta","spectre-canjs@4.2.4#sp-modal/sp-modal.stache!steal-stache@5.0.0#steal-stache","can-stache@5.1.1#src/mustache_core","can-view-live@5.0.4#can-view-live","can-view-live@5.0.4#lib/attr","can-view-live@5.0.4#lib/helpers","can-view-parser@4.1.3#can-view-parser","can-view-live@5.0.4#lib/attrs","can-view-live@5.0.4#lib/html","can-view-live@5.0.4#lib/list","can-diff@1.5.0#patcher/patcher","can-diff@1.5.0#patch-sort/patch-sort","can-view-live@5.0.4#lib/set-observable","can-view-live@5.0.4#lib/text","can-view-import@5.0.0#can-view-import","can-import-module@1.2.0#can-import-module","spectre-canjs@4.2.4#sp-modal/sp-modal.less!steal-less@1.3.4#less","spectre-canjs@4.2.4#sp-modal/ViewModel","spectre-canjs@4.2.4#util/actions/Action","spectre-canjs@4.2.4#sp-confirm/ViewModel","can-stache@5.1.1#src/html_section","can-view-target@5.0.0#can-view-target","can-stache@5.1.1#src/text_section","can-stache@5.1.1#helpers/core","can-globals@1.2.2#base-url/base-url","can-join-uris@1.2.0#can-join-uris","can-parse-uri@1.2.2#can-parse-uri","can-stache@5.1.1#helpers/-debugger","can-stache@5.1.1#src/truthy-observable","can-stache@5.1.1#helpers/converter","can-stache@5.1.1#helpers/-for-of","can-stache@5.1.1#helpers/-let","can-stache@5.1.1#helpers/-portal","can-stache-ast@1.1.0#can-stache-ast","can-stache-ast@1.1.0#controls"],function(e,a){"use strict";var n=s(e),c=s(a);function s(e){return e&&e.__esModule?e:{default:e}}var t=(0,n.default)(document.getElementById("demo-html").innerHTML),o=new c.default({modal1:!1,modal2:!1,modal3:!1,modal4:!1,confirm1:!1,onAccept:function(e){console.log("----- Confirmation Accepted ------"),console.log(e)},onReject:function(e){console.log("----- Confirmation Rejected ------"),console.log(e)},showModal:function(e){this[e]=!0},hideModal:function(e){this[e]=!1}});document.body.appendChild(t(o)),window.DEMO_SOURCE="\nimport 'spectre-canjs/sp-modal/sp-modal';\nimport 'spectre-canjs/sp-modal/sp-confirm';\n\nimport stache from 'can-stache';\nimport DefineMap from 'can-define/map/map';\n\nvar render = stache(document.getElementById('demo-html').innerHTML);\n\nvar viewModel = new DefineMap({\n    modal1: false,\n    modal2: false,\n    modal3: false,\n    confirm1: false,\n    onAccept () {\n        console.log('----- Confirmation Accepted ------');\n        console.log(arguments);\n    },\n    onReject () {\n        console.log('----- Confirmation Rejected ------');\n        console.log(arguments);\n    },\n    showModal (name) {\n        this[name] = true;\n    },\n    hideModal (name) {\n        this[name] = false;\n    }\n});\n\ndocument.body.appendChild(render(viewModel));\n"});
//# sourceMappingURL=dialog.js.map
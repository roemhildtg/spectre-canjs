define("spectre-canjs@3.6.3#sp-filter-builder/demo/filter",["can-stache@4.12.0#can-stache","can-define@2.6.3#map/map","json-pretty-html@1.1.2#dist/bundle","spectre-canjs@3.6.3#sp-filter-builder/sp-filter-builder","spectre-canjs@3.6.3#sp-form/demo/full/full.less!steal-less@1.3.1#less","spectre-canjs@3.6.3#sp-form/fields/sp-check-field/sp-check-field","can-component@4.4.2#can-component","can-component@4.4.2#control/control","can-control@4.2.0#can-control","can-construct@3.5.3#can-construct","can-reflect@1.17.5#can-reflect","can-reflect@1.17.5#reflections/call/call","can-symbol@1.6.1#can-symbol","can-namespace@1.0.0#can-namespace","can-reflect@1.17.5#reflections/type/type","can-reflect@1.17.5#reflections/helpers","can-reflect@1.17.5#reflections/get-set/get-set","can-reflect@1.17.5#reflections/observe/observe","can-reflect@1.17.5#reflections/shape/shape","can-reflect@1.17.5#reflections/shape/schema/schema","can-reflect@1.17.5#reflections/get-name/get-name","can-reflect@1.17.5#types/map","can-reflect@1.17.5#types/set","can-log@1.0.0#dev/dev","can-log@1.0.0#can-log","can-string@1.0.0#can-string","can-assign@1.3.1#can-assign","can-stache-key@1.4.0#can-stache-key","can-observation-recorder@1.2.0#can-observation-recorder","can-reflect-promise@2.1.0#can-reflect-promise","can-queues@1.1.3#can-queues","can-queues@1.1.3#queue","can-queues@1.1.3#queue-state","can-queues@1.1.3#priority-queue","can-queues@1.1.3#completion-queue","can-key-tree@1.2.0#can-key-tree","can-observation@4.1.0#can-observation","can-event-queue@1.1.0#value/value","can-define-lazy-value@1.1.0#define-lazy-value","can-event-queue@1.1.0#dependency-record/merge","can-observation@4.1.0#recorder-dependency-helpers","can-observation@4.1.0#temporarily-bind","can-event-queue@1.1.0#map/map","can-dom-events@1.3.0#can-dom-events","can-dom-events@1.3.0#helpers/util","can-globals@1.2.0#document/document","can-globals@1.2.0#global/global","can-globals@1.2.0#can-globals-instance","can-globals@1.2.0#can-globals-proto","can-globals@1.2.0#is-browser-window/is-browser-window","can-globals@1.2.0#is-node/is-node","can-dom-events@1.3.0#helpers/make-event-registry","can-dom-events@1.3.0#helpers/-make-delegate-event-tree","can-key@1.2.0#get/get","can-key@1.2.0#utils","can-dom-mutate@1.2.1#can-dom-mutate","can-globals@1.2.0#can-globals","can-globals@1.2.0#location/location","can-globals@1.2.0#mutation-observer/mutation-observer","can-globals@1.2.0#custom-elements/custom-elements","can-dom-mutate@1.2.1#-util","can-bind@1.0.0#can-bind","can-reflect-dependencies@1.1.0#can-reflect-dependencies","can-reflect-dependencies@1.1.0#src/add-mutated-by","can-reflect-dependencies@1.1.0#src/delete-mutated-by","can-reflect-dependencies@1.1.0#src/get-dependency-data-of","can-reflect-dependencies@1.1.0#src/is-function","can-stache-bindings@4.4.1#can-stache-bindings","can-stache@4.12.0#src/expression","can-stache@4.12.0#expressions/arg","can-stache@4.12.0#expressions/literal","can-stache@4.12.0#expressions/hashes","can-stache@4.12.0#src/expression-helpers","can-view-scope@4.9.1#make-compute-like","can-single-reference@1.2.0#can-single-reference","can-cid@1.3.0#can-cid","can-simple-observable@2.3.0#setter/setter","can-simple-observable@2.3.0#settable/settable","can-simple-observable@2.3.0#can-simple-observable","can-simple-observable@2.3.0#log","can-stache@4.12.0#expressions/bracket","can-stache@4.12.0#expressions/call","can-stache@4.12.0#src/set-identifier","can-stache@4.12.0#expressions/helper","can-stache@4.12.0#expressions/lookup","can-stache@4.12.0#src/utils","can-view-scope@4.9.1#can-view-scope","can-view-scope@4.9.1#template-context","can-simple-map@4.3.0#can-simple-map","can-view-scope@4.9.1#compute_data","can-view-scope@4.9.1#scope-key-data","can-stache-helpers@1.2.0#can-stache-helpers","can-stache@4.12.0#src/key-observable","can-view-callbacks@4.3.1#can-view-callbacks","can-dom-mutate@1.2.1#node","can-view-nodelist@4.3.2#can-view-nodelist","can-fragment@1.2.0#can-fragment","can-child-nodes@1.2.0#can-child-nodes","can-view-model@4.0.1#can-view-model","can-dom-data-state@1.0.2#can-dom-data-state","can-attribute-encoder@1.1.0#can-attribute-encoder","can-attribute-observable@1.1.3#can-attribute-observable","can-attribute-observable@1.1.3#event","can-attribute-observable@1.1.3#behaviors","can-diff@1.4.2#list/list","can-attribute-observable@1.1.3#get-event-name","can-event-dom-radiochange@2.2.0#can-event-dom-radiochange","can-define@2.6.3#list/list","can-define@2.6.3#can-define","can-simple-observable@2.3.0#async/async","can-simple-observable@2.3.0#resolver/resolver","can-event-queue@1.1.0#type/type","can-string-to-any@1.2.0#can-string-to-any","can-data-types@1.2.0#maybe-boolean/maybe-boolean","can-data-types@1.2.0#maybe-date/maybe-date","can-data-types@1.2.0#maybe-number/maybe-number","can-data-types@1.2.0#maybe-string/maybe-string","can-define@2.6.3#define-helpers/define-helpers","can-define@2.6.3#ensure-meta","spectre-canjs@3.6.3#sp-filter-builder/ViewModel","spectre-canjs@3.6.3#util/field/base/FieldIteratorMap","spectre-canjs@3.6.3#util/field/parseFieldArray/parseFieldArray","spectre-canjs@3.6.3#util/field/Field","spectre-canjs@3.6.3#util/string/string","spectre-canjs@3.6.3#util/field/fieldComponents","spectre-canjs@3.6.3#util/field/mapToFields/mapToFields","spectre-canjs@3.6.3#sp-filter-builder/Filter","spectre-canjs@3.6.3#sp-filter-builder/template.stache!steal-stache@4.1.2#steal-stache","can-stache@4.12.0#src/mustache_core","can-view-live@4.2.2#can-view-live","can-view-live@4.2.2#lib/core","can-view-parser@4.1.0#can-view-parser","can-view-live@4.2.2#lib/attr","can-view-live@4.2.2#lib/attrs","can-view-live@4.2.2#lib/html","can-view-live@4.2.2#lib/list","can-view-live@4.2.2#lib/set-observable","can-diff@1.4.2#patcher/patcher","can-view-live@4.2.2#lib/text","can-view-import@4.2.0#can-view-import","can-import-module@1.2.0#can-import-module","spectre-canjs@3.6.3#sp-filter-builder/sp-filter-builder.less!steal-less@1.3.1#less","spectre-canjs@3.6.3#sp-list-table/sp-list-table","spectre-canjs@3.6.3#sp-list-table/sp-list-table.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.6.3#sp-list-table/sp-list-table.less!steal-less@1.3.1#less","spectre-canjs@3.6.3#sp-list-table/ViewModel","spectre-canjs@3.6.3#sp-dropdown/sp-dropdown","spectre-canjs@3.6.3#sp-dropdown/sp-dropdown.less!steal-less@1.3.1#less","spectre-canjs@3.6.3#sp-dropdown/template.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.6.3#sp-dropdown/ViewModel","can-dom-data@1.0.1#can-dom-data","spectre-canjs@3.6.3#sp-form/sp-form","spectre-canjs@3.6.3#sp-form/template.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.6.3#sp-form/ViewModel","spectre-canjs@3.6.3#sp-form/widget.less!steal-less@1.3.1#less","spectre-canjs@3.6.3#sp-filter/sp-filter","spectre-canjs@3.6.3#sp-filter/ViewModel","spectre-canjs@3.6.3#sp-filter/template.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.6.3#sp-form/fields/sp-text-field/sp-text-field","spectre-canjs@3.6.3#sp-form/fields/sp-text-field/sp-text-field.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.6.3#sp-form/fields/sp-text-field/ViewModel","spectre-canjs@3.6.3#sp-form/fields/sp-select-field/sp-select-field","spectre-canjs@3.6.3#sp-form/fields/sp-select-field/sp-select-field.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.6.3#sp-form/fields/sp-select-field/ViewModel","can-stache@4.12.0#src/html_section","can-view-target@4.1.0#can-view-target","can-stache@4.12.0#src/text_section","can-stache@4.12.0#helpers/core","can-globals@1.2.0#base-url/base-url","can-join-uris@1.2.0#can-join-uris","can-parse-uri@1.2.0#can-parse-uri","can-stache@4.12.0#helpers/-debugger","can-stache@4.12.0#src/truthy-observable","can-stache@4.12.0#helpers/-for-of","can-stache@4.12.0#helpers/-let","can-stache@4.12.0#helpers/converter","can-stache-ast@1.0.0#can-stache-ast","can-stache-ast@1.0.0#controls","spectre-canjs@3.6.3#sp-form/fields/sp-check-field/template.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.6.3#sp-form/fields/sp-check-field/ViewModel"],function(e,a,s){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}var t=c(e),n=c(a),l=c(s),r=t.default.from("demo-html");document.body.appendChild(r(new n.default({filters:[],fields:[{name:"field_1",type:"number",textType:"number"},"field_2",{name:"field_3",editTag:"sp-check-field",type:"boolean"},{filter:!1,name:"excluded"},{name:"field_4",editTag:"sp-select-field",options:[{value:"Option 1"},{value:"Option 2"}]}],disableCreate:!1,stringify:function(e){return e&&e.get("length"),(0,l.default)(e.get())},toggleAdd:function(){this.disableCreate=!this.disableCreate},pin:function(e){e.forEach(function(e){e.pinned=!e.pinned})},hide:function(e){e.forEach(function(e){e.visible=!e.visible})}}))),window.DEMO_SOURCE="\nimport 'sp-filter-builder/';\nimport stache from 'can-stache';\nimport {parseFieldArray} from '~/util/field/field';\nimport DefineMap from 'can-define/map/map';\n\nconst render = stache.from('demo-html');\ndocument.body.appendChild(render(new DefineMap({\n    fields: parseFieldArray(['field_1', 'field_2', 'field_3']),\n    disableCreate: false,\n    stringify (data) {\n        return JSON.stringify(data.serialize());\n    },\n    toggleAdd () {\n        this.disableCreate = !this.disableCreate;\n    }\n})));\n"});
//# sourceMappingURL=filter.js.map
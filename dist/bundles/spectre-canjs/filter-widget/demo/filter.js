/*spectre-canjs@0.19.0#util/string*/
define("spectre-canjs@0.19.0#util/string",["exports","can-util/js/string/string"],function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return e=String(e),i["default"].capitalize(String.prototype.trim.call(e.split("_").join(" ").toLowerCase().replace(/ +/g," ")))}Object.defineProperty(e,"__esModule",{value:!0}),e.makeSentenceCase=r;var i=n(t)});
/*spectre-canjs@0.19.0#util/field*/
define("spectre-canjs@0.19.0#util/field",["exports","./string","can-stache","can-define/map/map","can-define/list/list","object-assign","can-util/js/dev/dev"],function(e,t,r,i,a,n,l){"use strict";function d(e){return e&&e.__esModule?e:{"default":e}}function s(e){return e.map(function(e){return"string"==typeof e&&(e={name:e}),new F(e)}).filter(function(e){return-1===e.name.indexOf("__")})}function o(e){if(!e)return v["default"].warn("map is undefined, so no fields will be generated"),[];var t=c["default"]({},(e._define||e.prototype._define).definitions),r=[];for(var i in t)t.hasOwnProperty(i)&&!function(){var e="function"==typeof t[i].type?t[i].type.name:t[i].type,a=c["default"]({},t[i]);y.forEach(function(e){delete a[e]}),r.push(c["default"]({},{name:i,type:"string",fieldType:"text"},a,{type:e}))}();return s(r)}Object.defineProperty(e,"__esModule",{value:!0}),e.FieldList=e.Field=e.RESERVED=e.TEMPLATES=void 0,e.parseFieldArray=s,e.mapToFields=o;var u=d(r),f=d(i),p=d(a),c=d(n),v=d(l),g={text:'<text-field {properties}="." (change)="setField" value="{{getFieldValue(.)}}" {errors}="validationErrors" />',select:'<select-field {properties}="." (change)="setField" value="{{getFieldValue(.)}}" {errors}="validationErrors" />',file:'<file-field {properties}="." (change)="setField" value="{{getFieldValue(.)}}" {errors}="validationErrors" />',json:'<json-field {properties}="." (change)="setField" {value}="getFieldValue(.)" {errors}="validationErrors" />',date:'<date-field {properties}="." (change)="setField" {value}="getFieldValue(.)" {errors}="validationErrors" />'};for(var m in g)g.hasOwnProperty(m)&&(g[m]=u["default"](g[m]));e.TEMPLATES=g;var y=e.RESERVED=["get","set","serialize"],F=e.Field=f["default"].extend("Field",{name:"string",alias:{type:"string",get:function(e){return e?e:t.makeSentenceCase(this.name)}},type:{type:"string",value:"string"},fieldType:{type:"string",value:"text"},formTemplate:{get:function(e){if(e)return e;var t=this.fieldType;return g.hasOwnProperty(t)?g[t]:(v["default"].warn("No template for the given field type",t),g.text)}},excludeListTable:{value:!1},excludePropertyTable:{value:!1},excludeForm:{value:!1},formatter:{value:null},validate:{value:null},getFormattedValue:function(e){return this.formatter?this.formatter(e[this.name],e):e[this.name]}});e.FieldList=p["default"].extend("FieldList",{"#":F})});
/*spectre-canjs@0.19.0#filter-widget/demo/filter*/
define("spectre-canjs@0.19.0#filter-widget/demo/filter",["can-stache","spectre-canjs/util/field","can-define/map/map","filter-widget/"],function(e,d,i){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var l=t(e),n=t(i),f=l["default"].from("demo-html");document.body.appendChild(f(new n["default"]({fields:d.parseFieldArray(["field1","field_2","field 3"]),disableAdd:!1,stringify:function(e){return JSON.stringify(e.serialize())},toggleAdd:function(){this.disableAdd=!this.disableAdd}})))});
//# sourceMappingURL=filter.js.map
/*spectre-canjs@0.29.0#list-table/demo/templates/actionCell.stache!steal-stache@3.0.7#steal-stache*/
define("spectre-canjs@0.29.0#list-table/demo/templates/actionCell.stache!steal-stache@3.0.7#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.7#can-view-import","can-stache-bindings@3.0.19#can-stache-bindings"],function(t,e,a){var s=e([{tokenType:"start",args:["span",!1]},{tokenType:"attrStart",args:["style"]},{tokenType:"attrValue",args:["user-select:none; cursor:pointer;"]},{tokenType:"attrEnd",args:["style"]},{tokenType:"end",args:["span",!1]},{tokenType:"chars",args:["\r\n"]},{tokenType:"start",args:["i",!1]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["dispatchEvent('up', object)"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["fa fa-2x fa-thumbs-up"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["i",!1]},{tokenType:"close",args:["i"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"start",args:["i",!1]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["dispatchEvent('down', object)"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["fa fa-2x fa-thumbs-down"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["i",!1]},{tokenType:"close",args:["i"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"close",args:["span"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"done",args:[]}]);return function(e,n,r){var o={module:t};return n instanceof a.Options||(n=new a.Options(n||{})),s(e,n.add(o),r)}});
/*spectre-canjs@0.29.0#list-table/demo/templates/voteTemplate.stache!steal-stache@3.0.7#steal-stache*/
define("spectre-canjs@0.29.0#list-table/demo/templates/voteTemplate.stache!steal-stache@3.0.7#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.7#can-view-import","can-stache-bindings@3.0.19#can-stache-bindings"],function(e,t,a){var s=t([{tokenType:"chars",args:["\r\n"]},{tokenType:"start",args:["span",!1]},{tokenType:"attrStart",args:["style"]},{tokenType:"attrValue",args:["font-weight: bolder;color: "]},{tokenType:"special",args:["voteColor object.votes"]},{tokenType:"attrValue",args:[";"]},{tokenType:"attrEnd",args:["style"]},{tokenType:"end",args:["span",!1]},{tokenType:"chars",args:["  "]},{tokenType:"special",args:["object.votes"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"close",args:["span"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"done",args:[]}]);return function(t,n,r){var o={module:e};return n instanceof a.Options||(n=new a.Options(n||{})),s(t,n.add(o),r)}});
/*spectre-canjs@0.29.0#list-table/demo/listTable*/
define("spectre-canjs@0.29.0#list-table/demo/listTable",["can-stache","can-define/list/list","./templates/actionCell.stache","./templates/voteTemplate.stache","spectre-canjs/list-table/list-table"],function(e,n,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=o(e),l=o(n),s=o(t),r=o(a);i.default.registerSimpleHelper("voteColor",function(e){return e<0?"red":0===e?"grey":"green"});var d=(0,i.default)(document.getElementById("demo-html").innerHTML),f=[{name:"Peter",age:16,favorite_food:"Pizza",votes:0},{name:"Phillip",age:26,favorite_food:"Pizza",votes:0},{name:"Todd",age:150,favorite_food:"Ice Cream",votes:0},{name:"Andy",age:10,favorite_food:"Pickles",votes:0},{name:"Andrew",age:24,favorite_food:"Spaghetti",votes:0}];document.body.appendChild(d({fields:[{name:"actions",displayTemplate:s.default},"name","favorite_food",{name:"age",displayTemplate:(0,i.default)("{{object.name}} is {{object.age}} years old")},{name:"votes",displayTemplate:r.default}],data:new l.default(f),voteUp:function(e,n,t,a,o){o.votes++},voteDown:function(e,n,t,a,o){o.votes--},setSort:function(e,n,t,a){var o=a.field;this.data.sort(function(e,n){return"asc"===a.type?e[o]===n[o]?0:e[o]>n[o]?1:-1:e[o]===n[o]?0:e[o]>n[o]?-1:1})}})),window.DEMO_SOURCE="\nimport 'spectre-canjs/list-table/list-table';\nimport stache from 'can-stache';\nimport DefineList from 'can-define/list/list';\nimport actionTemplate from './templates/actionCell.stache';\nimport voteTemplate from './templates/voteTemplate.stache';\n\nstache.registerSimpleHelper('voteColor', function(val){\n  if(val < 0){\n    return 'red';\n  } else if(val === 0){\n    return 'grey';\n  }\n  return 'green'\n});\n\nconsole.time('render');\n\nvar render = stache(document.getElementById('demo-html').innerHTML);\n\nvar data = [{\n  name: 'Peter',\n  age: 16,\n  favorite_food: 'Pizza',\n  votes: 0\n}, {\n  name: 'Phillip',\n  age: 26,\n  favorite_food: 'Pizza',\n  votes: 0\n}, {\n  name: 'Todd',\n  age: 150,\n  favorite_food: 'Ice Cream',\n  votes: 0\n}, {\n  name: 'Andy',\n  age: 10,\n  favorite_food: 'Pickles',\n  votes: 0\n}, {\n  name: 'Andrew',\n  age: 24,\n  favorite_food: 'Spaghetti',\n  votes: 0\n}];\n\ndocument.body.appendChild(render({\n  fields: [{\n    name: 'actions',\n    displayTemplate: actionTemplate\n  }, 'name', 'favorite_food', {\n    name: 'age',\n    displayTemplate: stache('{{object.name}} is {{object.age}} years old')\n  }, { name: 'votes', displayTemplate: voteTemplate }],\n\n  // observable list enables sorting\n  data: new DefineList(data),\n  voteUp(vm, el, ev, name, obj) {\n    obj.votes++;\n  },\n  voteDown(vm, el, ev, name, obj) {\n    obj.votes--;\n  },\n\n  // sorts the observable list\n  setSort(a, b, c, sortInfo) {\n    const field = sortInfo.field;\n    this.data.sort((a, b) => {\n      return sortInfo.type === 'asc'\n\n        //if ascending\n        ?\n        (a[field] === b[field] ? 0 :\n          a[field] > b[field] ? 1 : -1)\n\n        //if descending\n        :\n        (a[field] === b[field] ? 0 :\n          a[field] > b[field] ? -1 : 1);\n    });\n  }\n}));\n\n"});
//# sourceMappingURL=listTable.js.map
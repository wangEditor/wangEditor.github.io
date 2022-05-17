import{_ as n,r,o as l,c as i,a as e,b as o,w as d,F as c,d as t,e as h}from"./app.d1a97c3a.js";var _="/image/\u6570\u636E\u7ED3\u6784-1.png",m="/image/\u6570\u636E\u7ED3\u6784-2.png";const u={},p=e("h1",{id:"\u8282\u70B9\u6570\u636E\u7ED3\u6784",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8282\u70B9\u6570\u636E\u7ED3\u6784","aria-hidden":"true"},"#"),t(" \u8282\u70B9\u6570\u636E\u7ED3\u6784")],-1),g=t("wangEditor \u662F\u57FA\u4E8E slate.js \u4E3A\u5185\u6838\u5F00\u53D1\u7684\uFF0C\u6240\u4EE5\u5B66\u4E60\u672C\u6587\u4E4B\u524D\uFF0C\u8981\u5148\u4E86\u89E3 "),b={href:"https://docs.slatejs.org/concepts/02-nodes",target:"_blank",rel:"noopener noreferrer"},f=t("slate Node \u8BBE\u8BA1"),k=t(" \u3002"),w=e("h2",{id:"\u662F\u4EC0\u4E48",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u662F\u4EC0\u4E48","aria-hidden":"true"},"#"),t(" \u662F\u4EC0\u4E48")],-1),y=e("p",null,[t("\u5F88\u591A\u540C\u5B66\u53EF\u80FD\u6839\u672C\u4E0D\u77E5\u9053\u672C\u6587\u8981\u8BB2\u4EC0\u4E48\uFF0C\u5BF9\u4E8E\u8FD9\u91CC\u7684\u201C\u8282\u70B9\u201D\u548C\u201C\u6570\u636E\u7ED3\u6784\u201D\u4E5F\u4E0D\u77E5\u4F55\u610F\u3002"),e("br"),t(" \u6CA1\u5173\u7CFB\uFF0C\u63A5\u4E0B\u6765\u901A\u8FC7\u51E0\u4E2A\u95EE\u9898\uFF0C\u5C31\u53EF\u4EE5\u8BA9\u4F60\u5FEB\u901F\u5165\u95E8\u3002")],-1),E=t("\u6211\u4EEC\u901A\u8FC7 "),x=t("API"),v=t(" \u7684\u5B66\u4E60\uFF0C\u5DF2\u7ECF\u77E5\u9053\u4E86 wangEditor \u6709\u4E30\u5BCC\u7684 API \u53EF\u4F9B\u4F7F\u7528\u3002"),N=e("br",null,null,-1),I=t(" \u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF1A"),L=h('<ul><li><code>editor.addMark(key, value)</code> \u53EF\u4EE5\u8BBE\u7F6E\u6587\u672C\u6837\u5F0F\uFF0C\u5982\u4F55\u8BBE\u7F6E\u5220\u9664\u7EBF\u5462\uFF1F\u6B64\u65F6 <code>key</code> <code>value</code> \u8BE5\u600E\u4E48\u5199\uFF1F</li><li><code>editor.insertNode(node)</code> \u53EF\u4EE5\u63D2\u5165\u4E00\u4E2A\u8282\u70B9\uFF0C\u5982\u4F55\u63D2\u5165\u4E00\u4E2A\u94FE\u63A5\u5462\uFF1F\u6B64\u65F6 <code>node</code> \u8BE5\u600E\u4E48\u5199\uFF1F</li><li><code>SlateTransforms.setNodes(editor, {...})</code> \u53EF\u4EE5\u8BBE\u7F6E\u8282\u70B9\u7684\u5C5E\u6027\uFF0C\u5982\u4F55\u8BBE\u7F6E\u884C\u9AD8\u5462\uFF1F\u6B64\u65F6 <code>{...}</code> \u8FD9\u4E2A\u5C5E\u6027\u8BE5\u600E\u4E48\u5199\uFF1F</li></ul><p>\u901A\u8FC7\u4E0A\u8FF0\u95EE\u9898\uFF0C\u4F60\u5927\u6982\u77E5\u9053\u4E86\u672C\u6587\u7684\u76EE\u7684 \u2014\u2014 \u5C31\u662F\u544A\u8BC9\u4F60\uFF0C\u7F16\u8F91\u5668\u5185\u6240\u6709\u5185\u5BB9\u3001\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784 \u2014\u2014 \u5B83\u4EEC\u90FD\u662F\u7531\u54EA\u4E9B\u6570\u636E\u6784\u6210\u7684\u3002</p><h2 id="\u5FEB\u901F\u4E86\u89E3" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E86\u89E3" aria-hidden="true">#</a> \u5FEB\u901F\u4E86\u89E3</h2><p>\u5982\u679C\u60F3\u5FEB\u901F\u4E86\u89E3\u5404\u4E2A\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5176\u5B9E\u65B9\u6CD5\u5F88\u7B80\u5355\u3002</p><ul><li>\u521B\u5EFA\u4E00\u4E2A\u7F16\u8F91\u5668\uFF0C\u64CD\u4F5C\u4E00\u4E0B</li><li>\u67E5\u770B <code>editor.children</code></li></ul><p>\u4F8B\u5982\uFF0C\u5199\u4E00\u6BB5\u6587\u5B57\u3001\u8BBE\u7F6E\u4E00\u4E2A\u6807\u9898\u6216\u5217\u8868\uFF0C\u67E5\u770B <code>editor.children</code> \u5373\u53EF\u770B\u5230\u4ED6\u4EEC\u7684\u6570\u636E\u7ED3\u6784</p><p><img src="'+_+'" alt=""></p><p>\u518D\u4F8B\u5982\uFF0C\u5BF9\u6587\u5B57\u8BBE\u7F6E\u884C\u9AD8\uFF0C\u8BBE\u7F6E\u6587\u672C\u6837\u5F0F\uFF0C\u67E5\u770B <code>editor.children</code> \u5373\u53EF\u770B\u5230\u4ED6\u4EEC\u7684\u6570\u636E\u7ED3\u6784</p><p><img src="'+m+'" alt=""></p><h2 id="\u5404\u79CD\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u5404\u79CD\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u5404\u79CD\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784</h2><p>\u8BE6\u7EC6\u7684\u8282\u70B9\u6570\u636E\u7ED3\u6784\uFF0C\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u6E90\u7801\u4E2D <code>type</code> \u5B9A\u4E49\u3002</p>',11),V={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/text-style/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},j=t("\u6587\u672C\u6837\u5F0F"),A={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/color/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},B=t("\u6587\u5B57\u989C\u8272 \u80CC\u666F\u8272"),P={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/paragraph/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},C=t("\u6BB5\u843D"),F={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/line-height/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},R=t("\u884C\u9AD8"),S={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/font-size-family/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},T=t("\u5B57\u53F7 \u5B57\u4F53"),q={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/justify/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},z=t("\u5BF9\u9F50"),D={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/indent/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},M=t("\u7F29\u8FDB"),G={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/link/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},H=t("\u94FE\u63A5"),J={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/header/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},K=t("\u6807\u9898"),O={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/blockquote/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},Q=t("\u5F15\u7528"),U={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/image/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},W=t("\u56FE\u7247"),X={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/divider/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},Y=t("\u5206\u5272\u7EBF"),Z={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/code-block/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},$=t("\u4EE3\u7801\u5757"),ee={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/list-module/src/module/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},te=t("\u5217\u8868"),oe={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/table-module/src/module/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},se=t("\u8868\u683C"),re={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/video-module/src/module/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},ae=t("\u89C6\u9891");function ne(le,ie){const s=r("ExternalLinkIcon"),a=r("RouterLink");return l(),i(c,null,[p,e("p",null,[g,e("a",b,[f,o(s)]),k]),w,y,e("p",null,[E,o(a,{to:"/v5/API.html"},{default:d(()=>[x]),_:1}),v,N,I]),L,e("ul",null,[e("li",null,[e("a",V,[j,o(s)])]),e("li",null,[e("a",A,[B,o(s)])]),e("li",null,[e("a",P,[C,o(s)])]),e("li",null,[e("a",F,[R,o(s)])]),e("li",null,[e("a",S,[T,o(s)])]),e("li",null,[e("a",q,[z,o(s)])]),e("li",null,[e("a",D,[M,o(s)])]),e("li",null,[e("a",G,[H,o(s)])]),e("li",null,[e("a",J,[K,o(s)])]),e("li",null,[e("a",O,[Q,o(s)])]),e("li",null,[e("a",U,[W,o(s)])]),e("li",null,[e("a",X,[Y,o(s)])]),e("li",null,[e("a",Z,[$,o(s)])]),e("li",null,[e("a",ee,[te,o(s)])]),e("li",null,[e("a",oe,[se,o(s)])]),e("li",null,[e("a",re,[ae,o(s)])])])],64)}var ce=n(u,[["render",ne],["__file","node-define.html.vue"]]);export{ce as default};

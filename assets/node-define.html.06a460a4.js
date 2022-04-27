import{_ as i,r,o as l,c as d,a as e,b as o,w as c,F as h,d as t,e as n}from"./app.bcf7fab8.js";var u="/image/\u6570\u636E\u7ED3\u6784-1-en.png",_="/image/\u6570\u636E\u7ED3\u6784-2-en.png";const m={},g=e("h1",{id:"date-structure",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#date-structure","aria-hidden":"true"},"#"),t(" Date Structure")],-1),p=t("wangEditor is based on Slate.js, so you may learn "),b={href:"https://docs.slatejs.org/concepts/02-nodes",target:"_blank",rel:"noopener noreferrer"},f=t("Slate node design"),k=t(" first."),w=e("h2",{id:"what",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what","aria-hidden":"true"},"#"),t(" What")],-1),y=t("You maybe have learned "),E=t("editor API"),x=t(", let me ask you some questions."),v=n('<ul><li><code>editor.addMark(key, value)</code> can set tet style, but how can I set through-line, Which <code>key</code> and <code>value</code>?</li><li><code>editor.insertNode(node)</code> can insert a node, but how can I insert a link node, how to define the <code>node</code>?</li><li><code>SlateTransforms.setNodes(editor, {...})</code> can set node props, but how can I set line-height, how to define <code>{...}</code>?</li></ul><p>This article will tell you all of the node types and props, so you can do everything by the editor API.</p><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><p>If you want to know a node structure quickly, it&#39;s very simply.</p>',4),I=t("Create an editor and run in browser, or use "),S={href:"https://www.wangeditor.com/demo/index.html?lang=en",target:"_blank",rel:"noopener noreferrer"},L=t("demo"),N=e("li",null,"Do something, like: bold, set color, set header ...",-1),F=e("li",null,[t("Run "),e("code",null,"editor.children"),t(" in browser's console")],-1),T=n('<p>For example, you type some text, set a header or list, run <code>editor.children</code> then you can see it&#39;s structure</p><p><img src="'+u+'" alt=""></p><p>Set line height and text style, run <code>editor.children</code> then you can see it&#39;s structure</p><p><img src="'+_+'" alt=""></p><h2 id="all-nodes-structure" tabindex="-1"><a class="header-anchor" href="#all-nodes-structure" aria-hidden="true">#</a> All Nodes Structure</h2><p>See <code>type</code> in every source code.</p>',6),V={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/text-style/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},q=t("Text style"),A={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/color/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},B=t("Font color and background color"),C={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/paragraph/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},P=t("Paragraph"),j={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/line-height/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},D=t("Line height"),R={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/font-size-family/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},z=t("Font size and family"),W={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/justify/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},G=t("Justify"),H={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/indent/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},J=t("indent"),M={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/link/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},Y=t("Link"),K={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/header/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},O=t("Header"),Q={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/blockquote/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},U=t("Blockquote"),X={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/image/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},Z=t("Image"),$={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/divider/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},ee=t("Split line"),te={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/code-block/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},oe=t("Code block"),se={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/list-module/src/module/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},re=t("List"),ne={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/table-module/src/module/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},ae=t("Table"),ie={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/video-module/src/module/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},le=t("Video");function de(ce,he){const s=r("ExternalLinkIcon"),a=r("RouterLink");return l(),d(h,null,[g,e("p",null,[p,e("a",b,[f,o(s)]),k]),w,e("p",null,[y,o(a,{to:"/en/v5/API.html"},{default:c(()=>[E]),_:1}),x]),v,e("ul",null,[e("li",null,[I,e("a",S,[L,o(s)])]),N,F]),T,e("ul",null,[e("li",null,[e("a",V,[q,o(s)])]),e("li",null,[e("a",A,[B,o(s)])]),e("li",null,[e("a",C,[P,o(s)])]),e("li",null,[e("a",j,[D,o(s)])]),e("li",null,[e("a",R,[z,o(s)])]),e("li",null,[e("a",W,[G,o(s)])]),e("li",null,[e("a",H,[J,o(s)])]),e("li",null,[e("a",M,[Y,o(s)])]),e("li",null,[e("a",K,[O,o(s)])]),e("li",null,[e("a",Q,[U,o(s)])]),e("li",null,[e("a",X,[Z,o(s)])]),e("li",null,[e("a",$,[ee,o(s)])]),e("li",null,[e("a",te,[oe,o(s)])]),e("li",null,[e("a",se,[re,o(s)])]),e("li",null,[e("a",ne,[ae,o(s)])]),e("li",null,[e("a",ie,[le,o(s)])])])],64)}var _e=i(m,[["render",de],["__file","node-define.html.vue"]]);export{_e as default};

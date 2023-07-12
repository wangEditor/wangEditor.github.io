import{_ as l,r,o as i,c,a as t,b as o,w as a,F as _,e,d}from"./app.39637906.js";var h="/image/\u6570\u636E\u7ED3\u6784-1.png",p="/image/\u6570\u636E\u7ED3\u6784-2.png";const m={},u=t("h1",{id:"\u8282\u70B9\u6570\u636E\u7ED3\u6784",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u8282\u70B9\u6570\u636E\u7ED3\u6784","aria-hidden":"true"},"#"),e(" \u8282\u70B9\u6570\u636E\u7ED3\u6784")],-1),g=e("wangEditor \u662F\u57FA\u4E8E slate.js \u4E3A\u5185\u6838\u5F00\u53D1\u7684\uFF0C\u6240\u4EE5\u5B66\u4E60\u672C\u6587\u4E4B\u524D\uFF0C\u8981\u5148\u4E86\u89E3 "),b={href:"https://docs.slatejs.org/concepts/02-nodes",target:"_blank",rel:"noopener noreferrer"},k=e("slate Node \u8BBE\u8BA1"),f=e(" \u3002"),E=t("h2",{id:"\u662F\u4EC0\u4E48",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u662F\u4EC0\u4E48","aria-hidden":"true"},"#"),e(" \u662F\u4EC0\u4E48")],-1),w=t("p",null,[e("\u5F88\u591A\u540C\u5B66\u53EF\u80FD\u6839\u672C\u4E0D\u77E5\u9053\u672C\u6587\u8981\u8BB2\u4EC0\u4E48\uFF0C\u5BF9\u4E8E\u8FD9\u91CC\u7684\u201C\u8282\u70B9\u201D\u548C\u201C\u6570\u636E\u7ED3\u6784\u201D\u4E5F\u4E0D\u77E5\u4F55\u610F\u3002"),t("br"),e(" \u6CA1\u5173\u7CFB\uFF0C\u63A5\u4E0B\u6765\u901A\u8FC7\u51E0\u4E2A\u95EE\u9898\uFF0C\u5C31\u53EF\u4EE5\u8BA9\u4F60\u5FEB\u901F\u5165\u95E8\u3002")],-1),y=e("\u6211\u4EEC\u901A\u8FC7 "),v=e("API"),x=e(" \u7684\u5B66\u4E60\uFF0C\u5DF2\u7ECF\u77E5\u9053\u4E86 wangEditor \u6709\u4E30\u5BCC\u7684 API \u53EF\u4F9B\u4F7F\u7528\u3002"),B=t("br",null,null,-1),A=e(" \u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF1A"),C=d('<ul><li><code>editor.addMark(key, value)</code> \u53EF\u4EE5\u8BBE\u7F6E\u6587\u672C\u6837\u5F0F\uFF0C\u5982\u4F55\u8BBE\u7F6E\u5220\u9664\u7EBF\u5462\uFF1F\u6B64\u65F6 <code>key</code> <code>value</code> \u8BE5\u600E\u4E48\u5199\uFF1F</li><li><code>editor.insertNode(node)</code> \u53EF\u4EE5\u63D2\u5165\u4E00\u4E2A\u8282\u70B9\uFF0C\u5982\u4F55\u63D2\u5165\u4E00\u4E2A\u94FE\u63A5\u5462\uFF1F\u6B64\u65F6 <code>node</code> \u8BE5\u600E\u4E48\u5199\uFF1F</li><li><code>SlateTransforms.setNodes(editor, {...})</code> \u53EF\u4EE5\u8BBE\u7F6E\u8282\u70B9\u7684\u5C5E\u6027\uFF0C\u5982\u4F55\u8BBE\u7F6E\u884C\u9AD8\u5462\uFF1F\u6B64\u65F6 <code>{...}</code> \u8FD9\u4E2A\u5C5E\u6027\u8BE5\u600E\u4E48\u5199\uFF1F</li></ul><p>\u901A\u8FC7\u4E0A\u8FF0\u95EE\u9898\uFF0C\u4F60\u5927\u6982\u77E5\u9053\u4E86\u672C\u6587\u7684\u76EE\u7684 \u2014\u2014 \u5C31\u662F\u544A\u8BC9\u4F60\uFF0C\u7F16\u8F91\u5668\u5185\u6240\u6709\u5185\u5BB9\u3001\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784 \u2014\u2014 \u5B83\u4EEC\u90FD\u662F\u7531\u54EA\u4E9B\u6570\u636E\u6784\u6210\u7684\u3002</p><h2 id="\u5FEB\u901F\u4E86\u89E3" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E86\u89E3" aria-hidden="true">#</a> \u5FEB\u901F\u4E86\u89E3</h2><p>\u5982\u679C\u60F3\u5FEB\u901F\u4E86\u89E3\u5404\u4E2A\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5176\u5B9E\u65B9\u6CD5\u5F88\u7B80\u5355\u3002</p><ul><li>\u521B\u5EFA\u4E00\u4E2A\u7F16\u8F91\u5668\uFF0C\u64CD\u4F5C\u4E00\u4E0B</li><li>\u67E5\u770B <code>editor.children</code></li></ul><p>\u4F8B\u5982\uFF0C\u5199\u4E00\u6BB5\u6587\u5B57\u3001\u8BBE\u7F6E\u4E00\u4E2A\u6807\u9898\u6216\u5217\u8868\uFF0C\u67E5\u770B <code>editor.children</code> \u5373\u53EF\u770B\u5230\u4ED6\u4EEC\u7684\u6570\u636E\u7ED3\u6784</p><p><img src="'+h+'" alt=""></p><p>\u518D\u4F8B\u5982\uFF0C\u5BF9\u6587\u5B57\u8BBE\u7F6E\u884C\u9AD8\uFF0C\u8BBE\u7F6E\u6587\u672C\u6837\u5F0F\uFF0C\u67E5\u770B <code>editor.children</code> \u5373\u53EF\u770B\u5230\u4ED6\u4EEC\u7684\u6570\u636E\u7ED3\u6784</p><p><img src="'+p+'" alt=""></p><h2 id="text-node" tabindex="-1"><a class="header-anchor" href="#text-node" aria-hidden="true">#</a> Text Node</h2><p>\u6587\u672C\u8282\u70B9\uFF0C\u4F8B\u5982 <code>{ text: &#39;hello&#39; }</code> <strong>\u5FC5\u987B\u6709 <code>text</code> \u5C5E\u6027</strong>\u3002\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u4F8B\u5982\u52A0\u7C97\u7684\u6587\u672C\u53EF\u8868\u793A\u4E3A <code>{ text: &#39;hello&#39;, bold: true }</code> \uFF0C\u5176\u4ED6\u5C5E\u6027\u53EF\u81EA\u884C\u6269\u5C55\u3002</p><p>\u6CE8\u610F\uFF0C\u6587\u672C\u8282\u70B9\u662F\u5E95\u5C42\u8282\u70B9\uFF0C\u6240\u4EE5\u6CA1\u6709\u5B50\u8282\u70B9\uFF0C<strong>\u6CA1\u6709 <code>children</code> \u5C5E\u6027</strong>\u3002</p><h2 id="element-node" tabindex="-1"><a class="header-anchor" href="#element-node" aria-hidden="true">#</a> Element Node</h2><p>\u5143\u7D20\u8282\u70B9\uFF0C\u4F8B\u5982 <code>{ type: &#39;header1&#39;, children: [ { text: &#39;hello&#39; } ] }</code> <strong>\u5FC5\u987B\u6709\u4E24\u4E2A\u5C5E\u6027 <code>type</code> \u548C <code>children</code> \u5C5E\u6027</strong>\u3002\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u4F8B\u5982\u5C45\u4E2D\u5BF9\u9F50\u53EF\u8868\u793A\u4E3A <code>{ type: &#39;header1&#39;, textAlign: &#39;center&#39;, children: [ { text: &#39;hello&#39; } ] }</code> \uFF0C\u5176\u4ED6\u5C5E\u6027\u81EA\u884C\u6269\u5C55\u3002</p><h2 id="inline-element" tabindex="-1"><a class="header-anchor" href="#inline-element" aria-hidden="true">#</a> Inline Element</h2><p>\u5143\u7D20\u9ED8\u8BA4\u662F block \u663E\u793A\uFF0C\u5373\u5360\u6EE1\u4E00\u6574\u884C\u3002\u4F46\u6709\u4E9B\u5143\u7D20\u9700\u8981\u53D8\u4E3A inline \u663E\u793A\uFF0C\u5982 <code>&lt;img&gt;</code> <code>&lt;a&gt;</code> \u7B49\u3002</p>',16),N=e("\u6211\u4EEC\u53EF\u4EE5"),j=e("\u901A\u8FC7"),I=e("\u63D2\u4EF6"),V=e("\u6765\u4FEE\u6539 "),D=t("code",null,"isInline",-1),F=e(" \u628A\u4E00\u4E2A\u5143\u7D20\u6539\u4E3A inline"),L=e(" \uFF0C\u53C2\u8003\u94FE\u63A5\u5143\u7D20\u7684"),P={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/link/plugin.ts",target:"_blank",rel:"noopener noreferrer"},T=e("\u63D2\u4EF6\u6E90\u7801"),R=e("\u3002"),S=t("h2",{id:"void-element",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#void-element","aria-hidden":"true"},"#"),e(" Void Element")],-1),q=t("p",null,[e("\u6709\u4E9B\u5143\u7D20\u9700\u8981\u5B9A\u4E49\u4E3A void \u7C7B\u578B\uFF08\u5373\u6CA1\u6709\u5B50\u8282\u70B9\uFF09\uFF0C\u4F8B\u5982 "),t("code",null,"<img>"),e(),t("code",null,"<video>"),e(" \u7B49\u3002")],-1),z=e("\u6211\u4EEC\u53EF\u4EE5"),M=e("\u901A\u8FC7"),G=e("\u63D2\u4EF6"),H=e("\u6765\u4FEE\u6539 "),J=t("code",null,"isVoid",-1),K=e(" \u628A\u4E00\u4E2A\u5143\u7D20\u6539\u4E3A void"),O=e(" \uFF0C\u53C2\u8003\u56FE\u7247\u5143\u7D20\u7684"),Q={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/image/plugin.ts",target:"_blank",rel:"noopener noreferrer"},U=e("\u63D2\u4EF6\u6E90\u7801"),W=e("\u3002"),X=d(`<p>\u6CE8\u610F\uFF0Cvoid \u7C7B\u578B\u867D\u7136\u5728\u8BED\u4E49\u4E0A\u6CA1\u6709\u5B50\u8282\u70B9\uFF0C\u4F46 slate.js \u89C4\u5B9A\uFF0C<strong>\u5B83\u5FC5\u987B\u6709\u4E00\u4E2A <code>children</code> \u5C5E\u6027\uFF0C\u5176\u4E2D\u53EA\u6709\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32</strong>\u3002\u4F8B\u5982\u56FE\u7247\u5143\u7D20\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;image&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5176\u4ED6\u5C5E\u6027 ...</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token comment">// void \u5143\u7D20\u5FC5\u987B\u6709\u4E00\u4E2A children \uFF0C\u5176\u4E2D\u53EA\u6709\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\uFF0C\u91CD\u8981\uFF01\uFF01\uFF01</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5404\u79CD\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u5404\u79CD\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u5404\u79CD\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784</h2><p>\u8BE6\u7EC6\u7684\u8282\u70B9\u6570\u636E\u7ED3\u6784\uFF0C\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u6E90\u7801\u4E2D <code>type</code> \u5B9A\u4E49\u3002</p>`,4),Y={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/text-style/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},Z=e("\u6587\u672C\u6837\u5F0F"),$=e(" - \u6269\u5C55 text node \u5C5E\u6027"),ee={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/color/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},te=e("\u6587\u5B57\u989C\u8272 \u80CC\u666F\u8272"),oe=e(" - \u6269\u5C55 text node \u5C5E\u6027"),se={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/paragraph/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},ne=e("\u6BB5\u843D"),ae=e(" - \u5B9A\u4E49 element node"),re={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/line-height/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},de=e("\u884C\u9AD8"),le=e(" - \u6269\u5C55 element node \u5C5E\u6027"),ie={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/font-size-family/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},ce=e("\u5B57\u53F7 \u5B57\u4F53"),_e=e(" - \u6269\u5C55 text node \u5C5E\u6027"),he={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/justify/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},pe=e("\u5BF9\u9F50"),me=e(" - \u6269\u5C55 element node \u5C5E\u6027"),ue={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/indent/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},ge=e("\u7F29\u8FDB"),be=e(" - \u6269\u5C55 element node \u5C5E\u6027"),ke={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/link/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},fe=e("\u94FE\u63A5"),Ee=e(" - \u5B9A\u4E49 "),we=t("strong",null,"inline",-1),ye=e(" element node"),ve={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/header/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},xe=e("\u6807\u9898"),Be=e(" - \u5B9A\u4E49 element node"),Ae={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/blockquote/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},Ce=e("\u5F15\u7528"),Ne=e(" - \u5B9A\u4E49 element node"),je={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/image/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},Ie=e("\u56FE\u7247"),Ve=e(" - \u5B9A\u4E49 "),De=t("strong",null,"inline void",-1),Fe=e(" element node"),Le={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/divider/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},Pe=e("\u5206\u5272\u7EBF"),Te=e(" - \u5B9A\u4E49 "),Re=t("strong",null,"void",-1),Se=e(" element node"),qe={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/code-block/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},ze=e("\u4EE3\u7801\u5757"),Me=e(" - \u5B9A\u4E49 element node"),Ge={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/list-module/src/module/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},He=e("\u5217\u8868"),Je=e(" - \u5B9A\u4E49 element node"),Ke={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/table-module/src/module/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},Oe=e("\u8868\u683C"),Qe=e(" - \u5B9A\u4E49 element node"),Ue={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/video-module/src/module/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},We=e("\u89C6\u9891"),Xe=e(" - \u5B9A\u4E49 "),Ye=t("strong",null,"void",-1),Ze=e(" element node");function $e(et,tt){const s=r("ExternalLinkIcon"),n=r("RouterLink");return i(),c(_,null,[u,t("p",null,[g,t("a",b,[k,o(s)]),f]),E,w,t("p",null,[y,o(n,{to:"/v5/API.html"},{default:a(()=>[v]),_:1}),x,B,A]),C,t("p",null,[N,t("strong",null,[j,o(n,{to:"/v5/development.html#%E5%8A%AB%E6%8C%81%E7%BC%96%E8%BE%91%E5%99%A8%E4%BA%8B%E4%BB%B6%E5%92%8C%E6%93%8D%E4%BD%9C-%E6%8F%92%E4%BB%B6"},{default:a(()=>[I]),_:1}),V,D,F]),L,t("a",P,[T,o(s)]),R]),S,q,t("p",null,[z,t("strong",null,[M,o(n,{to:"/v5/development.html#%E5%8A%AB%E6%8C%81%E7%BC%96%E8%BE%91%E5%99%A8%E4%BA%8B%E4%BB%B6%E5%92%8C%E6%93%8D%E4%BD%9C-%E6%8F%92%E4%BB%B6"},{default:a(()=>[G]),_:1}),H,J,K]),O,t("a",Q,[U,o(s)]),W]),X,t("ul",null,[t("li",null,[t("a",Y,[Z,o(s)]),$]),t("li",null,[t("a",ee,[te,o(s)]),oe]),t("li",null,[t("a",se,[ne,o(s)]),ae]),t("li",null,[t("a",re,[de,o(s)]),le]),t("li",null,[t("a",ie,[ce,o(s)]),_e]),t("li",null,[t("a",he,[pe,o(s)]),me]),t("li",null,[t("a",ue,[ge,o(s)]),be]),t("li",null,[t("a",ke,[fe,o(s)]),Ee,we,ye]),t("li",null,[t("a",ve,[xe,o(s)]),Be]),t("li",null,[t("a",Ae,[Ce,o(s)]),Ne]),t("li",null,[t("a",je,[Ie,o(s)]),Ve,De,Fe]),t("li",null,[t("a",Le,[Pe,o(s)]),Te,Re,Se]),t("li",null,[t("a",qe,[ze,o(s)]),Me]),t("li",null,[t("a",Ge,[He,o(s)]),Je]),t("li",null,[t("a",Ke,[Oe,o(s)]),Qe]),t("li",null,[t("a",Ue,[We,o(s)]),Xe,Ye,Ze])])],64)}var st=l(m,[["render",$e],["__file","node-define.html.vue"]]);export{st as default};

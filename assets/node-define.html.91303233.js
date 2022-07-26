import{_ as i,r as a,o as d,c as l,a as t,b as o,w as c,F as h,d as e,e as s}from"./app.39fa9c40.js";var p="/image/\u6570\u636E\u7ED3\u6784-1-en.png",_="/image/\u6570\u636E\u7ED3\u6784-2-en.png";const u={},m=t("h1",{id:"date-structure",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#date-structure","aria-hidden":"true"},"#"),e(" Date Structure")],-1),g=e("wangEditor is based on Slate.js, so you may learn "),b={href:"https://docs.slatejs.org/concepts/02-nodes",target:"_blank",rel:"noopener noreferrer"},f=e("Slate node design"),k=e(" first."),w=t("h2",{id:"what",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#what","aria-hidden":"true"},"#"),e(" What")],-1),y=e("You maybe have learned "),x=e("editor API"),v=e(", let me ask you some questions."),E=s('<ul><li><code>editor.addMark(key, value)</code> can set tet style, but how can I set through-line, Which <code>key</code> and <code>value</code>?</li><li><code>editor.insertNode(node)</code> can insert a node, but how can I insert a link node, how to define the <code>node</code>?</li><li><code>SlateTransforms.setNodes(editor, {...})</code> can set node props, but how can I set line-height, how to define <code>{...}</code>?</li></ul><p>This article will tell you all of the node types and props, so you can do everything by the editor API.</p><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><p>If you want to know a node structure quickly, it&#39;s very simply.</p>',4),I=e("Create an editor and run in browser, or use "),D={href:"https://www.wangeditor.com/demo/index.html?lang=en",target:"_blank",rel:"noopener noreferrer"},A=e("demo"),S=t("li",null,"Do something, like: bold, set color, set header ...",-1),N=t("li",null,[e("Run "),t("code",null,"editor.children"),e(" in browser's console")],-1),B=s('<p>For example, you type some text, set a header or list, run <code>editor.children</code> then you can see it&#39;s structure</p><p><img src="'+p+'" alt=""></p><p>Set line height and text style, run <code>editor.children</code> then you can see it&#39;s structure</p><p><img src="'+_+'" alt=""></p><h2 id="text-node" tabindex="-1"><a class="header-anchor" href="#text-node" aria-hidden="true">#</a> Text Node</h2><p>A text node <strong>must have a <code>text</code> prop</strong>, like <code>{ text: &#39;hello&#39; }</code> . You can extend custom props, for instance bold text can be <code>{ text: &#39;hello&#39;, bold: true }</code> .</p><p>Text node is leaf node, it <strong>can not have <code>children</code> prop</strong>.</p><h2 id="element-node" tabindex="-1"><a class="header-anchor" href="#element-node" aria-hidden="true">#</a> Element Node</h2><p>An element node <strong>must have two props <code>type</code> and <code>children</code></strong> , like <code>{ type: &#39;header1&#39;, children: [ { text: &#39;hello&#39; } ] }</code> . You can extend custom props, for instance <code>{ type: &#39;header1&#39;, textAlign: &#39;center&#39;, children: [ { text: &#39;hello&#39; } ] }</code> .</p><h2 id="inline-element" tabindex="-1"><a class="header-anchor" href="#inline-element" aria-hidden="true">#</a> Inline Element</h2><p>By default, an element node is <strong>block</strong> style, like <code>&lt;div&gt;</code> in HTML. But we want some elements are <strong>inline</strong> style, like <code>&lt;img&gt;</code> <code>&lt;a&gt;</code> .</p>',11),L=e("We can define an element node as "),T=t("code",null,"inline",-1),V=e(" by "),j=t("strong",null,[e("rewrite editor "),t("code",null,"isInline"),e(" API")],-1),P=e(", see link element "),F={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/link/plugin.ts",target:"_blank",rel:"noopener noreferrer"},q=e("plugin source code"),C=e("."),W=t("h2",{id:"void-element",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#void-element","aria-hidden":"true"},"#"),e(" Void Element")],-1),R=t("p",null,[e("By default, an element node is not void node, it can have children. But we want some elements ar "),t("code",null,"void"),e(" node, like "),t("code",null,"<img>"),e(),t("code",null,"<video>"),e(" .")],-1),Y=e("We can define an element node as "),z=t("code",null,"void",-1),H=e(" by "),M=t("strong",null,[e("rewrite editor "),t("code",null,"isVoid"),e(" API")],-1),G=e(", see image element "),J={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/image/plugin.ts",target:"_blank",rel:"noopener noreferrer"},K=e("plugin source code"),O=e("."),Q=s(`<p>Void element must have a <code>children</code> prop, which involve an empty text node. A image element is like:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;image&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// other props ...</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token comment">// A void element must have a children props, which involve an empty text node.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="all-nodes-structure" tabindex="-1"><a class="header-anchor" href="#all-nodes-structure" aria-hidden="true">#</a> All Nodes Structure</h2><p>See <code>type</code> in every source code.</p>`,4),U={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/text-style/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},X=e("Text style"),Z=e(" - Extend text node props"),$={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/color/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},ee=e("Font color and background color"),te=e(" - Extend text node props"),oe={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/paragraph/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},ne=e("Paragraph"),se=e(" - Define element node"),ae={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/line-height/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},re=e("Line height"),ie=e(" - Extend element node props"),de={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/font-size-family/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},le=e("Font size and family"),ce=e(" - Extend text node props"),he={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/justify/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},pe=e("Justify"),_e=e(" - Extend element node props"),ue={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/indent/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},me=e("indent"),ge=e(" - Extend element node props"),be={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/link/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},fe=e("Link"),ke=e(" - Define "),we=t("strong",null,"inline",-1),ye=e(" element"),xe={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/header/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},ve=e("Header"),Ee=e(" - Define element node"),Ie={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/blockquote/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},De=e("Blockquote"),Ae=e(" - Define element node"),Se={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/image/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},Ne=e("Image"),Be=e(" - Define "),Le=t("strong",null,"inline and void",-1),Te=e(" element"),Ve={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/divider/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},je=e("Split line"),Pe=e(" - Define "),Fe=t("strong",null,"void",-1),qe=e(" element"),Ce={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/basic-modules/src/modules/code-block/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},We=e("Code block"),Re=e(" - Define element node"),Ye={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/list-module/src/module/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},ze=e("List"),He=e(" - Define element node"),Me={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/table-module/src/module/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},Ge=e("Table"),Je=e(" - Define element node"),Ke={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/video-module/src/module/custom-types.ts",target:"_blank",rel:"noopener noreferrer"},Oe=e("Video"),Qe=e(" - Define "),Ue=t("strong",null,"void",-1),Xe=e(" element");function Ze($e,et){const n=a("ExternalLinkIcon"),r=a("RouterLink");return d(),l(h,null,[m,t("p",null,[g,t("a",b,[f,o(n)]),k]),w,t("p",null,[y,o(r,{to:"/en/v5/API.html"},{default:c(()=>[x]),_:1}),v]),E,t("ul",null,[t("li",null,[I,t("a",D,[A,o(n)])]),S,N]),B,t("p",null,[L,T,V,j,P,t("a",F,[q,o(n)]),C]),W,R,t("p",null,[Y,z,H,M,G,t("a",J,[K,o(n)]),O]),Q,t("ul",null,[t("li",null,[t("a",U,[X,o(n)]),Z]),t("li",null,[t("a",$,[ee,o(n)]),te]),t("li",null,[t("a",oe,[ne,o(n)]),se]),t("li",null,[t("a",ae,[re,o(n)]),ie]),t("li",null,[t("a",de,[le,o(n)]),ce]),t("li",null,[t("a",he,[pe,o(n)]),_e]),t("li",null,[t("a",ue,[me,o(n)]),ge]),t("li",null,[t("a",be,[fe,o(n)]),ke,we,ye]),t("li",null,[t("a",xe,[ve,o(n)]),Ee]),t("li",null,[t("a",Ie,[De,o(n)]),Ae]),t("li",null,[t("a",Se,[Ne,o(n)]),Be,Le,Te]),t("li",null,[t("a",Ve,[je,o(n)]),Pe,Fe,qe]),t("li",null,[t("a",Ce,[We,o(n)]),Re]),t("li",null,[t("a",Ye,[ze,o(n)]),He]),t("li",null,[t("a",Me,[Ge,o(n)]),Je]),t("li",null,[t("a",Ke,[Oe,o(n)]),Qe,Ue,Xe])])],64)}var ot=i(u,[["render",Ze],["__file","node-define.html.vue"]]);export{ot as default};

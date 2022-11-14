import{_ as l,r as c,o as r,c as i,a as n,b as a,w as p,F as d,d as s,e}from"./app.53d845d4.js";const u={},h=n("h1",{id:"\u5185\u5BB9\u5904\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5185\u5BB9\u5904\u7406","aria-hidden":"true"},"#"),s(" \u5185\u5BB9\u5904\u7406")],-1),m=s("\u5FEB\u901F\u4E86\u89E3\u53EF\u67E5\u770B"),k=s("\u89C6\u9891\u6559\u7A0B"),_=s("\u3002"),b=n("h2",{id:"\u83B7\u53D6\u5185\u5BB9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u83B7\u53D6\u5185\u5BB9","aria-hidden":"true"},"#"),s(" \u83B7\u53D6\u5185\u5BB9")],-1),g=n("h3",{id:"\u83B7\u53D6-html-\u548C-text",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u83B7\u53D6-html-\u548C-text","aria-hidden":"true"},"#"),s(" \u83B7\u53D6 HTML \u548C Text")],-1),x=s("\u4F7F\u7528 "),f=n("code",null,"editor.getHtml()",-1),v=s(" \u83B7\u53D6 HTML \u5185\u5BB9\uFF0C\u53EF\u53C2\u8003 "),w={href:"https://www.wangeditor.com/demo/get-html.html",target:"_blank",rel:"noopener noreferrer"},j=s("demo"),H=s("\u3002\u4F7F\u7528 "),T=n("code",null,"editor.getText()",-1),y=s(" \u83B7\u53D6\u7EAF\u6587\u672C\u5185\u5BB9\u3002"),L=e(`<p>\u63A8\u8350\u4F7F\u7528 HTML \u683C\u5F0F\u5B58\u50A8\u6570\u636E\u3002</p><h3 id="\u83B7\u53D6-json" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6-json" aria-hidden="true">#</a> \u83B7\u53D6 JSON</h3><p>\u4F7F\u7528 <code>editor.children</code> \u83B7\u53D6 JSON \u5185\u5BB9\u3002</p><p>JSON \u683C\u5F0F\u53EF\u4EE5\u8F6C\u6362\u4E3A HTML \u548C Text \u683C\u5F0F\uFF0C\u652F\u6301\u6D4F\u89C8\u5668\u548C nodejs \u3002 \u5982\u679C\u662F\u5728 nodejs \u4E2D\uFF0C\u9700\u8981\u5B89\u88C5 <code>yarn add jsdom global-jsdom</code> \uFF0C\u5E76\u4E14\u5F15\u5165 <code>require(&#39;global-jsdom/register&#39;)</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \`content\` \u5373\u4E3A JSON \u5185\u5BB9</span>
<span class="token keyword">const</span> html <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> text <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u81EA\u5B9A\u4E49\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6837\u5F0F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6837\u5F0F</h3><p>\u7F16\u8F91\u5668\u8F93\u51FA\u6216\u8005\u751F\u6210\u7684 HTML \u90FD\u662F<strong>\u7EAF\u6807\u7B7E</strong>\uFF0C\u6CA1\u6709\u5185\u8054\u6837\u5F0F\u3002\u6240\u4EE5\uFF0C\u663E\u793A HTML \u65F6\u9700\u8981\u4F60\u81EA\u5B9A\u4E49\u6837\u5F0F\u3002\u53EF\u53C2\u8003\u4EE5\u4E0B\u793A\u4F8B</p>`,7),M={href:"https://www.wangeditor.com/demo/get-html.html",target:"_blank",rel:"noopener noreferrer"},E=s("\u663E\u793A HTML"),I={href:"https://www.wangeditor.com/demo/css/view.css",target:"_blank",rel:"noopener noreferrer"},N=s("\u81EA\u5B9A\u4E49\u6837\u5F0F"),S=s("\u53E6\u5916\uFF0C"),P=n("strong",null,"\u4EE3\u7801\u9AD8\u4EAE",-1),J=s("\u4E5F\u9700\u8981\u81EA\u884C\u5904\u7406\uFF0C\u63A8\u8350\u4F7F\u7528 "),A={href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"},O=s("Prism.js"),V=s(" \uFF0C\u56E0\u4E3A\u7F16\u8F91\u5668\u5185\u5BB9\u5185\u90E8\u4E5F\u662F\u57FA\u4E8E Prism.js \u6765\u5B9E\u73B0\u7684\u3002\u53EF\u53C2\u8003 "),q={href:"https://www.wangeditor.com/demo/code-highlight.html",target:"_blank",rel:"noopener noreferrer"},B=s("demo"),C=s("\u3002"),D=e(`<h2 id="\u8BBE\u7F6E\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5185\u5BB9" aria-hidden="true">#</a> \u8BBE\u7F6E\u5185\u5BB9</h2><p>\u521B\u5EFA\u7F16\u8F91\u5668\u65F6\uFF0C\u4F20\u5165\u7684\u9ED8\u8BA4\u5185\u5BB9\u3002\u5373\u7F16\u8F91\u5668\u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u7ACB\u9A6C\u663E\u793A\u8FD9\u4E9B\u5185\u5BB9\u3002</p><h3 id="\u8BBE\u7F6E-html" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-html" aria-hidden="true">#</a> \u8BBE\u7F6E HTML</h3><p><b style="color:red;">\u3010\u6CE8\u610F\u3011\u8FD9\u91CC\u7684 HTML \u5185\u5BB9\u5FC5\u987B\u662F wangEditor \u751F\u6210\u7684\uFF08\u5373 <code>editor.getHtml()</code> \u8FD4\u56DE\u7684\uFF09 HTML \u683C\u5F0F\uFF0C\u4E0D\u53EF\u4EE5\u81EA\u5DF1\u968F\u610F\u5199</b>\u3002HTML \u683C\u5F0F\u975E\u5E38\u7075\u6D3B\uFF0CwangEditor \u65E0\u6CD5\u517C\u5BB9\u6240\u6709\u7684 HTML \u683C\u5F0F\u3002</p><p>\u4F8B\u5982\uFF0CwangEditor \u53EF\u4EE5\u8BC6\u522B <code>&lt;strong&gt;hello&lt;/strong&gt;</code> \u4E3A\u52A0\u7C97\uFF0C\u4F46\u65E0\u6CD5\u8BC6\u522B <code>&lt;span style=&quot;font-weight: bold;&quot;&gt;hello&lt;/span&gt;</code> \u7B49\u5176\u4ED6\u52A0\u7C97\u65B9\u5F0F\u3002</p><h4 id="\u521B\u5EFA\u65F6\u8BBE\u7F6E-html" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u65F6\u8BBE\u7F6E-html" aria-hidden="true">#</a> \u521B\u5EFA\u65F6\u8BBE\u7F6E HTML</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token string">&#39;&lt;p&gt;hello &lt;strong&gt;world&lt;/strong&gt;&lt;/p&gt;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4ECE editor.getHtml() \u83B7\u53D6\u7684 html \u5185\u5BB9</span>
  <span class="token comment">// \u5176\u4ED6\u5C5E\u6027...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u52A8\u6001\u8BBE\u7F6E-html" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u8BBE\u7F6E-html" aria-hidden="true">#</a> \u52A8\u6001\u8BBE\u7F6E HTML</h4>`,8),F=s("\u53C2\u8003 "),R={href:"https://www.wangeditor.com/demo/set-html.html",target:"_blank",rel:"noopener noreferrer"},$=s("demo"),z=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>editor<span class="token punctuation">.</span><span class="token function">setHtml</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;p&gt;hello &lt;strong&gt;world&lt;/strong&gt;&lt;/p&gt;&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,1),G={class:"custom-container tip"},K=n("p",{class:"custom-container-title"},"TIP",-1),Q=s("\u6CE8\u610F\uFF0C"),U=n("code",null,"setHtml",-1),W=s(" \u4E3B\u8981\u7528\u4E8E\u56DE\u663E\u7F16\u8F91\u5668\u8F93\u51FA\u7684 HTML \uFF0C\u5373 "),X=n("code",null,"editor.getHtml()",-1),Y=s(" \u7684\u5185\u5BB9\u3002"),Z=n("br",null,null,-1),nn=s(" \u5982\u679C\u60F3\u63D2\u5165\u4E00\u6BB5 HTML \uFF0C\u8BF7\u4F7F\u7528 "),sn=s("dangerouslyInsertHtml"),an=e(`<h3 id="\u8BBE\u7F6E-text" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-text" aria-hidden="true">#</a> \u8BBE\u7F6E Text</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1. \u628A text \u8F6C\u6362\u4E3A html</span>
<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">&#39;...&#39;</span> <span class="token comment">// text \u5185\u5BB9</span>
<span class="token keyword">const</span> html <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\n</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">line</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>line<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 2. \u8BBE\u7F6E html</span>
<span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  html<span class="token punctuation">,</span>
  <span class="token comment">// \u5176\u4ED6\u5C5E\u6027...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 3. \u6216\uFF0C\u5728\u521B\u5EFA\u5B8C editor \u4E4B\u540E\u6267\u884C setHtml</span>
<span class="token comment">// editor.setHtml(html)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u8BBE\u7F6E-json" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-json" aria-hidden="true">#</a> \u8BBE\u7F6E JSON</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// editor.children \u83B7\u53D6\u7684\u5185\u5BB9</span>
  <span class="token comment">// \u5176\u4ED6\u5C5E\u6027</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="ajax-\u5F02\u6B65\u8BBE\u7F6E\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#ajax-\u5F02\u6B65\u8BBE\u7F6E\u5185\u5BB9" aria-hidden="true">#</a> Ajax \u5F02\u6B65\u8BBE\u7F6E\u5185\u5BB9</h3><p>\u53EF\u7B49\u5F85 Ajax \u8FD4\u56DE\u4E4B\u540E\u518D\u521B\u5EFA\u7F16\u8F91\u5668\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u4F2A\u4EE3\u7801</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IDomEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token keyword">let</span> editor<span class="token operator">:</span> IDomEditor <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>   <span class="token comment">// TS \u8BED\u6CD5</span>
<span class="token comment">// let editor = null                   // JS \u8BED\u6CD5</span>

<span class="token function">ajax</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// content \u6216 html</span>
    <span class="token comment">// \u5176\u4ED6\u5C5E\u6027</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,7),tn={class:"custom-container tip"},en=n("p",{class:"custom-container-title"},"TIP",-1),on=s("\u5176\u4ED6\u7684\u5185\u5BB9\u5904\u7406\uFF0C\u53EF\u53C2\u8003 "),pn=s("API");function cn(ln,rn){const o=c("RouterLink"),t=c("ExternalLinkIcon");return r(),i(d,null,[h,n("p",null,[m,a(o,{to:"/v5/video-course.html"},{default:p(()=>[k]),_:1}),_]),b,g,n("p",null,[x,f,v,n("a",w,[j,a(t)]),H,T,y]),L,n("ul",null,[n("li",null,[n("a",M,[E,a(t)])]),n("li",null,[n("a",I,[N,a(t)])])]),n("p",null,[S,P,J,n("a",A,[O,a(t)]),V,n("a",q,[B,a(t)]),C]),D,n("p",null,[F,n("a",R,[$,a(t)])]),z,n("div",G,[K,n("p",null,[Q,U,W,X,Y,Z,nn,a(o,{to:"/v5/API.html#dangerouslyinserthtml"},{default:p(()=>[sn]),_:1})])]),an,n("div",tn,[en,n("p",null,[on,a(o,{to:"/v5/API.html"},{default:p(()=>[pn]),_:1})])])],64)}var un=l(u,[["render",cn],["__file","content.html.vue"]]);export{un as default};
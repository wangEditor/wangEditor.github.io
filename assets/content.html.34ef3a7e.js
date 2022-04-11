import{_ as c,r as t,o as r,c as l,a as n,b as a,w as i,F as u,e as o,d as s}from"./app.7ee4ae98.js";const d={},k=o(`<h1 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h1><h2 id="get-content" tabindex="-1"><a class="header-anchor" href="#get-content" aria-hidden="true">#</a> Get Content</h2><h3 id="get-html-and-text" tabindex="-1"><a class="header-anchor" href="#get-html-and-text" aria-hidden="true">#</a> Get HTML and Text</h3><p>Use <code>editor.getHtml()</code> to get HTML content. Use <code>editor.getText()</code> to get text content.</p><p>PS: HTML format is recommended.</p><h3 id="get-json" tabindex="-1"><a class="header-anchor" href="#get-json" aria-hidden="true">#</a> Get JSON</h3><p>Use <code>editor.children</code> to get JSON content.</p><p>You can convert JSON to HTML or text format in browser and nodejs.<br> If in nodejs, you should exec <code>yarn add jsdom global-jsdom</code> firstly, then <code>require(&#39;global-jsdom/register&#39;)</code> in front of the below codes.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \`content\` is JSON content</span>
<span class="token keyword">const</span> html <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> text <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="custom-style" tabindex="-1"><a class="header-anchor" href="#custom-style" aria-hidden="true">#</a> Custom Style</h3><p><code>editor.getHtml()</code> can only get pure HTML, there is no inline styles. You need to define your custom style. See some demos:</p>`,11),m={href:"https://www.wangeditor.com/demo/get-html.html?lang=en",target:"_blank",rel:"noopener noreferrer"},h=s("Get and render HTML"),b={href:"https://www.wangeditor.com/demo/css/view.css",target:"_blank",rel:"noopener noreferrer"},g=s("Custom CSS style"),_=s("You should use "),f={href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"},x=s("Prism.js"),y=s(" to highlight code block by yourself. See "),v={href:"https://www.wangeditor.com/demo/code-highlight.html?lang=en",target:"_blank",rel:"noopener noreferrer"},w=s("demo"),j=s("."),S=o(`<h2 id="set-content" tabindex="-1"><a class="header-anchor" href="#set-content" aria-hidden="true">#</a> Set Content</h2><p>You can set your custom content when creating an editor.</p><h3 id="set-html" tabindex="-1"><a class="header-anchor" href="#set-html" aria-hidden="true">#</a> Set HTML</h3><p><b style="color:red;">Be careful: wangEditor can only understand the HTML format from <code>editor.getHtml()</code>, but not all HTML formats.</b></p><p>For instance, wangEditor can understand <code>&lt;strong&gt;hello&lt;/strong&gt;</code>, but can not understand <code>&lt;span style=&quot;font-weight:bold;&quot;&gt;&lt;/span&gt;</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token string">&#39;&lt;p&gt;hello &lt;strong&gt;world&lt;/strong&gt;&lt;/p&gt;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// html content, got from \`editor.getHtml()\`</span>
  <span class="token comment">// other props ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="set-text" tabindex="-1"><a class="header-anchor" href="#set-text" aria-hidden="true">#</a> Set Text</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1. Convert text to HTML format</span>
<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">&#39;...&#39;</span> <span class="token comment">// text content</span>
<span class="token keyword">const</span> html <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\n</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">line</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>line<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 2. set HTML</span>
<span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  html<span class="token punctuation">,</span>
  <span class="token comment">// other props ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="set-json" tabindex="-1"><a class="header-anchor" href="#set-json" aria-hidden="true">#</a> Set JSON</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// JSON content, got from \`editor.children\`</span>
  <span class="token comment">// other props ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="ajax-async-set-content" tabindex="-1"><a class="header-anchor" href="#ajax-async-set-content" aria-hidden="true">#</a> Ajax async set content</h3><p>You can create editor after ajax success callback.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// pseudo code</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IDomEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token keyword">let</span> <span class="token literal-property property">editor</span><span class="token operator">:</span> IDomEditor <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token function">ajax</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// content or html</span>
    <span class="token comment">// other props...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,13),T={class:"custom-container tip"},H=n("p",{class:"custom-container-title"},"TIP",-1),L=s("Goto "),E=s("API"),M=s(" to checkout more content APIs.");function N(C,I){const e=t("ExternalLinkIcon"),p=t("RouterLink");return r(),l(u,null,[k,n("ul",null,[n("li",null,[n("a",m,[h,a(e)])]),n("li",null,[n("a",b,[g,a(e)])])]),n("p",null,[_,n("a",f,[x,a(e)]),y,n("a",v,[w,a(e)]),j]),S,n("div",T,[H,n("p",null,[L,a(p,{to:"/en/v5/API.html"},{default:i(()=>[E]),_:1}),M])])],64)}var O=c(d,[["render",N],["__file","content.html.vue"]]);export{O as default};

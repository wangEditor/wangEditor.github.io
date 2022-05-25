import{_ as n,e as s}from"./app.a4441217.js";const a={},e=s(`<h1 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h1><p>\u5305\u62EC vue React \u7EC4\u4EF6</p><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2><p>\u5B89\u88C5 editor</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @wangeditor/editor
<span class="token comment"># \u6216\u8005 npm install @wangeditor/editor --save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5B89\u88C5 React \u7EC4\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @wangeditor/editor-for-react
<span class="token comment"># \u6216\u8005 npm install @wangeditor/editor-for-react --save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5B89\u88C5 Vue2 \u7EC4\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @wangeditor/editor-for-vue
<span class="token comment"># \u6216\u8005 npm install @wangeditor/editor-for-vue --save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5B89\u88C5 Vue3 \u7EC4\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @wangeditor/editor-for-vue@next
<span class="token comment"># \u6216\u8005 npm install @wangeditor/editor-for-vue@next --save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u5F15\u5165 css --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@wangeditor/editor@latest/dist/css/style.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u5F15\u5165 js --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@wangeditor/editor@latest/dist/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> <span class="token constant">E</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>wangEditor<span class="token punctuation">;</span> <span class="token comment">// \u5168\u5C40\u53D8\u91CF</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5982\u679C\u4E0A\u8FF0 CDN \u8BBF\u95EE\u4E0D\u6210\u529F\uFF0C\u53EF\u4EE5\u5728 npm \u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\uFF0C\u5728\u5B89\u88C5\u5305\u627E\u5230 JS CSS \u6587\u4EF6\uFF0C\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><ul><li>\u65B0\u5EFA\u4E00\u4E2A <code>test1</code> \u6587\u4EF6\u5939\uFF0C\u6253\u5F00\u63A7\u5236\u53F0\uFF0C\u76EE\u5F55\u5B9A\u4F4D\u5230\u8BE5\u6587\u4EF6\u5939\uFF0C\u6267\u884C <code>npm install @wangeditor/editor</code> \u6216 <code>yarn add @wangeditor/editor</code></li><li>\u5B89\u88C5\u5B8C\u6210\uFF0C\u6253\u5F00 <code>node_modules/@wangeditor/editor/dist</code> \u6587\u4EF6\u5939\uFF0C\u5373\u53EF\u627E\u5230 JS CSS \u6587\u4EF6\uFF1A <ul><li><code>index.js</code></li><li><code>css/style.css</code></li></ul></li><li>\u628A\u8FD9\u4FE9\u6587\u4EF6\u62F7\u8D1D\u51FA\u6765\uFF0C\u7136\u540E\u5220\u6389 <code>test1</code> \u6587\u4EF6\u5939</li></ul>`,15);function t(p,c){return e}var l=n(a,[["render",t],["__file","installation.html.vue"]]);export{l as default};

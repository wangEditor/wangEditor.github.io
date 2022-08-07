import{_ as n,e as a}from"./app.e7c4a6f3.js";const s={},t=a(`<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> Npm</h2><p>Install editor package</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @wangeditor/editor
<span class="token comment"># npm install @wangeditor/editor --save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Install React editor component (optional)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @wangeditor/editor-for-react
<span class="token comment"># npm install @wangeditor/editor-for-react --save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Install Vue 2.x editor component (optional)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @wangeditor/editor-for-vue
<span class="token comment"># npm install @wangeditor/editor-for-vue --save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Install Vue 3.x editor component (optional)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @wangeditor/editor-for-vue@next
<span class="token comment"># npm install @wangeditor/editor-for-vue@next --save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- import css --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/@wangeditor/editor@latest/dist/css/style.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- import js --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/@wangeditor/editor@latest/dist/index.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> <span class="token constant">E</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>wangEditor<span class="token punctuation">;</span> <span class="token comment">// global variable</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,12);function e(p,l){return t}var c=n(s,[["render",e],["__file","installation.html.vue"]]);export{c as default};

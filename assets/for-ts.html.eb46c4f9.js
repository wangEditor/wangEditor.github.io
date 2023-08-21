import{_ as n,d as s}from"./app.438f1a89.js";const a={},e=s(`<h1 id="for-typescript" tabindex="-1"><a class="header-anchor" href="#for-typescript" aria-hidden="true">#</a> For Typescript</h1><h2 id="extend-type" tabindex="-1"><a class="header-anchor" href="#extend-type" aria-hidden="true">#</a> Extend Type</h2><p>Create a <code>custom-types.d.ts</code> file, ensure it will be included in <code>tsconfig.json</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// custom-types.d.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> SlateDescendant<span class="token punctuation">,</span> SlateElement<span class="token punctuation">,</span> SlateText <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@wangeditor/editor&#39;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Extend Text</span>
    <span class="token keyword">interface</span> <span class="token class-name">SlateText</span> <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Extend Element</span>
    <span class="token keyword">interface</span> <span class="token class-name">SlateElement</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token builtin">string</span>
        children<span class="token operator">:</span> SlateDescendant<span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,4);function t(p,c){return e}var l=n(a,[["render",t],["__file","for-ts.html.vue"]]);export{l as default};

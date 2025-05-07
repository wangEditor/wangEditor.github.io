import{_ as n,d as s}from"./app.7623c22a.js";const a={},e=s(`<h1 id="\u7528\u4E8E-typescript" tabindex="-1"><a class="header-anchor" href="#\u7528\u4E8E-typescript" aria-hidden="true">#</a> \u7528\u4E8E Typescript</h1><p>\u5C06 wangEditor \u7528\u4E8E Typescript \u7684\u6CE8\u610F\u4E8B\u9879\u3002</p><h2 id="\u6269\u5C55\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u7C7B\u578B" aria-hidden="true">#</a> \u6269\u5C55\u7C7B\u578B</h2><p>\u65B0\u5EFA\u4E00\u4E2A <code>custom-types.d.ts</code> \uFF0C\u6E90\u7801\u5982\u4E0B\u3002\u6CE8\u610F\uFF0C\u4FDD\u8BC1\u8BE5\u6587\u4EF6\u5728 <code>tsconfig.json</code> \u7684 <code>include</code> \u4E2D\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> SlateDescendant<span class="token punctuation">,</span> SlateElement<span class="token punctuation">,</span> SlateText <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@wangeditor/editor&#39;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6269\u5C55 Text</span>
    <span class="token keyword">interface</span> <span class="token class-name">SlateText</span> <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u6269\u5C55 Element</span>
    <span class="token keyword">interface</span> <span class="token class-name">SlateElement</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token builtin">string</span>
        children<span class="token operator">:</span> SlateDescendant<span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,5);function t(p,c){return e}var o=n(a,[["render",t],["__file","for-ts.html.vue"]]);export{o as default};

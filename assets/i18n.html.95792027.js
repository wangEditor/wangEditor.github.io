import{_ as n,e as s}from"./app.8a4b5548.js";const a={},e=s(`<h1 id="\u591A\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#\u591A\u8BED\u8A00" aria-hidden="true">#</a> \u591A\u8BED\u8A00</h1><h2 id="\u5207\u6362\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u8BED\u8A00" aria-hidden="true">#</a> \u5207\u6362\u8BED\u8A00</h2><p>\u9ED8\u8BA4\u53EF\u652F\u6301\u4E2D\u6587\u548C\u82F1\u6587\uFF0C\u9ED8\u8BA4\u4E3A\u4E2D\u6587\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> i18nChangeLanguage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token comment">// \u5207\u6362\u8BED\u8A00 - &#39;en&#39; \u6216\u8005 &#39;zh-CN&#39;</span>
<span class="token function">i18nChangeLanguage</span><span class="token punctuation">(</span><span class="token string">&#39;en&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u521B\u5EFA\u7F16\u8F91\u5668...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u83B7\u53D6\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u8BED\u8A00" aria-hidden="true">#</a> \u83B7\u53D6\u8BED\u8A00</h2><p>\u83B7\u53D6\u5168\u90E8\u8BED\u8A00\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> i18nGetResources <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token keyword">const</span> resources <span class="token operator">=</span> <span class="token function">i18nGetResources</span><span class="token punctuation">(</span><span class="token string">&#39;en&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;en&#39; \u6216 &#39;zh-CN&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u83B7\u53D6\u5355\u4E2A\u8BCD\u6C47</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;header.title&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u589E\u52A0\u65B0\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0\u65B0\u8BED\u8A00" aria-hidden="true">#</a> \u589E\u52A0\u65B0\u8BED\u8A00</h2><p>\u9664\u4E86\u4E2D\u6587\u548C\u82F1\u6587\uFF0C\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u9700\u8981\u5148\u6DFB\u52A0\u8BED\u8A00\u7684\u8BCD\u6C47\uFF0C\u7136\u540E\u518D\u5207\u6362\u8BED\u8A00\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> i18nAddResources<span class="token punctuation">,</span> i18nChangeLanguage<span class="token punctuation">,</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token comment">// \u6DFB\u52A0\u65B0\u8BED\u8A00\uFF0C\u5982\u65E5\u8BED ja</span>
<span class="token function">i18nAddResources</span><span class="token punctuation">(</span><span class="token string">&#39;ja&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6807\u9898</span>
    <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u30D8\u30C3\u30C0\u30FC&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u30C6\u30AD\u30B9\u30C8&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ... \u5176\u4ED6\u8BED\u8A00\u8BCD\u6C47\uFF0C\u4E0B\u6587\u8BF4\u660E ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5207\u6362\u4E3A\u65E5\u8BED ja</span>
<span class="token function">i18nChangeLanguage</span><span class="token punctuation">(</span><span class="token string">&#39;ja&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6\u5355\u4E2A\u8BCD\u6C47</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;header.title&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>

<span class="token comment">// \u521B\u5EFA\u7F16\u8F91\u5668...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,12);function p(t,c){return e}var r=n(a,[["render",p],["__file","i18n.html.vue"]]);export{r as default};

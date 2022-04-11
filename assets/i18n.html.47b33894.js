import{_ as n,e as s}from"./app.2b82e6d3.js";const a={},e=s(`<h1 id="i18n" tabindex="-1"><a class="header-anchor" href="#i18n" aria-hidden="true">#</a> I18n</h1><h2 id="switch-language" tabindex="-1"><a class="header-anchor" href="#switch-language" aria-hidden="true">#</a> Switch Language</h2><p>We provide Chinese and English by default. The default is Chinese.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> i18nChangeLanguage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token comment">// Switch language - &#39;en&#39; or &#39;zh-CN&#39;</span>
<span class="token function">i18nChangeLanguage</span><span class="token punctuation">(</span><span class="token string">&#39;en&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// Then create editor</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="get-language" tabindex="-1"><a class="header-anchor" href="#get-language" aria-hidden="true">#</a> Get Language</h2><p>Get all language resources.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> i18nGetResources <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token keyword">const</span> resources <span class="token operator">=</span> <span class="token function">i18nGetResources</span><span class="token punctuation">(</span><span class="token string">&#39;en&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;en&#39; or &#39;zh-CN&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Get one word.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;header.title&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="extend-other-language" tabindex="-1"><a class="header-anchor" href="#extend-other-language" aria-hidden="true">#</a> Extend Other Language</h2><p>You should add language words config first, then switch.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> i18nAddResources<span class="token punctuation">,</span> i18nChangeLanguage<span class="token punctuation">,</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token comment">// Extend other language, like Japanese</span>
<span class="token function">i18nAddResources</span><span class="token punctuation">(</span><span class="token string">&#39;ja&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// header</span>
    <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u30D8\u30C3\u30C0\u30FC&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u30C6\u30AD\u30B9\u30C8&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ... other words config ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Switch language</span>
<span class="token function">i18nChangeLanguage</span><span class="token punctuation">(</span><span class="token string">&#39;ja&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// Get one word</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;header.title&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>

<span class="token comment">// create editor...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,12);function p(t,c){return e}var r=n(a,[["render",p],["__file","i18n.html.vue"]]);export{r as default};

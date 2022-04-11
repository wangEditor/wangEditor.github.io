import{_ as l,r as p,o as c,c as r,a as s,b as a,w as t,F as i,d as n,e as u}from"./app.7ee4ae98.js";var b="/image/exclude-group.png",k="/image/modal-appendTo-body.png";const d={},m=s("h1",{id:"\u5DE5\u5177\u680F\u914D\u7F6E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5DE5\u5177\u680F\u914D\u7F6E","aria-hidden":"true"},"#"),n(" \u5DE5\u5177\u680F\u914D\u7F6E")],-1),g=n("\u5982\u679C\u662F\u7B2C\u4E00\u6B21\u4F7F\u7528\uFF0C\u8BF7\u5148\u901A\u8FC7 "),h=n("\u5FEB\u901F\u5F00\u59CB"),y=n(" \u4E86\u89E3\u57FA\u672C\u4F7F\u7528\u3002"),_={class:"custom-container tip"},f=s("p",{class:"custom-container-title"},"TIP",-1),v=n("wangEditor \u4ECE V5 \u7248\u672C\u5F00\u59CB\uFF0C\u5DE5\u5177\u680F\u914D\u7F6E\u548C"),x=n("\u83DC\u5355\u914D\u7F6E"),w=n("\uFF08\u5982\u914D\u7F6E\u989C\u8272\u3001\u5B57\u4F53\u3001\u94FE\u63A5\u6821\u9A8C\u3001\u4E0A\u4F20\u56FE\u7247\u7B49\uFF09\u5206\u79BB\u4E86\u3002\u672C\u6587\u53EA\u8BB2\u5DE5\u5177\u680F\u914D\u7F6E\u3002"),C=u(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IToolbarConfig<span class="token punctuation">,</span> createToolbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token keyword">const</span> toolbarConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IToolbarConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u5DE5\u5177\u680F\u914D\u7F6E */</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA\u5DE5\u5177\u680F</span>
<span class="token keyword">const</span> toolbar <span class="token operator">=</span> <span class="token function">createToolbar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  editor<span class="token punctuation">,</span>
  selector<span class="token operator">:</span> <span class="token string">&#39;#toolbar-container&#39;</span><span class="token punctuation">,</span>
  config<span class="token operator">:</span> toolbarConfig
  mode<span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="getconfig" tabindex="-1"><a class="header-anchor" href="#getconfig" aria-hidden="true">#</a> getConfig</h2><p>\u53EF\u901A\u8FC7 <code>toolbar.getConfig()</code> \u67E5\u770B\u5DE5\u5177\u680F\u7684\u9ED8\u8BA4\u914D\u7F6E\u3002<br> \u5982\u679C\u4F60\u4F7F\u7528 Vue React \uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u4EE3\u7801\u83B7\u53D6 <code>toolbar</code> \u5B9E\u4F8B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> DomEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>
<span class="token keyword">const</span> toolbar <span class="token operator">=</span> DomEditor<span class="token punctuation">.</span><span class="token function">getToolbar</span><span class="token punctuation">(</span>editor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="toolbarkeys" tabindex="-1"><a class="header-anchor" href="#toolbarkeys" aria-hidden="true">#</a> toolbarKeys</h2><p><strong>\u91CD\u65B0</strong>\u914D\u7F6E\u5DE5\u5177\u680F\uFF0C\u663E\u793A\u54EA\u4E9B\u83DC\u5355\uFF0C\u4EE5\u53CA\u83DC\u5355\u7684\u6392\u5E8F\u3001\u5206\u7EC4\u3002</p><ul><li><code>toolbar.getConfig().toolbarKeys</code> \u67E5\u770B\u5F53\u524D\u7684\u9ED8\u8BA4\u914D\u7F6E</li><li><code>editor.getAllMenuKeys()</code> \u67E5\u8BE2\u7F16\u8F91\u5668\u6CE8\u518C\u7684\u6240\u6709\u83DC\u5355 key</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> toolbarConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IToolbarConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    toolbarKeys<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// \u83DC\u5355 key</span>
        <span class="token string">&#39;headerSelect&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5206\u5272\u7EBF</span>
        <span class="token string">&#39;|&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u83DC\u5355 key</span>
        <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;italic&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u83DC\u5355\u7EC4\uFF0C\u5305\u542B\u591A\u4E2A\u83DC\u5355</span>
        <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">&#39;group-more-style&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u586B\uFF0C\u8981\u4EE5 group \u5F00\u5934</span>
            title<span class="token operator">:</span> <span class="token string">&#39;\u66F4\u591A\u6837\u5F0F&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u586B</span>
            iconSvg<span class="token operator">:</span> <span class="token string">&#39;&lt;svg&gt;....&lt;/svg&gt;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u9009</span>
            menuKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;through&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;clearStyle&quot;</span><span class="token punctuation">]</span> <span class="token comment">// \u4E0B\u7EA7\u83DC\u5355 key \uFF0C\u5FC5\u586B</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7EE7\u7EED\u914D\u7F6E\u5176\u4ED6\u83DC\u5355...</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA toolbar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="insertkeys" tabindex="-1"><a class="header-anchor" href="#insertkeys" aria-hidden="true">#</a> insertKeys</h2><p>\u53EF\u4EE5\u5728\u5F53\u524D <code>toolbarKeys</code> \u7684\u57FA\u7840\u4E0A\u7EE7\u7EED\u63D2\u5165\u65B0\u83DC\u5355\uFF0C\u5982\u81EA\u5B9A\u4E49\u6269\u5C55\u7684\u83DC\u5355\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> toolbarConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IToolbarConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    insertKeys<span class="token operator">:</span> <span class="token punctuation">{</span>
        index<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// \u63D2\u5165\u7684\u4F4D\u7F6E\uFF0C\u57FA\u4E8E\u5F53\u524D\u7684 toolbarKeys</span>
        keys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;menu-key1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;menu-key2&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA toolbar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="excludekeys" tabindex="-1"><a class="header-anchor" href="#excludekeys" aria-hidden="true">#</a> excludeKeys</h2><p>\u5982\u679C\u4EC5\u4EC5\u60F3\u6392\u9664\u6389\u67D0\u4E9B\u83DC\u5355\uFF0C\u5176\u4ED6\u90FD\u4FDD\u7559\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>excludeKeys</code> \u6765\u914D\u7F6E\u3002<br> \u53EF\u901A\u8FC7 <code>toolbar.getConfig().toolbarKeys</code> \u67E5\u770B\u5DE5\u5177\u680F\u7684\u9ED8\u8BA4\u914D\u7F6E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> toolbarConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IToolbarConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    excludeKeys<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;headerSelect&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;italic&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;group-more-style&#39;</span> <span class="token comment">// \u6392\u9664\u83DC\u5355\u7EC4\uFF0C\u5199\u83DC\u5355\u7EC4 key \u7684\u503C\u5373\u53EF</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA toolbar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u4F60\u60F3\u6392\u9664\u67D0\u4E2A\u83DC\u5355\u7EC4\uFF0C\u53EF\u901A\u8FC7 <code>toolbar.getConfig().toolbarKeys</code> \u627E\u5230\u8FD9\u4E2A\u83DC\u5355\u7EC4\u7684 key \u3002</p><p><img src="`+b+'" alt=""></p><h2 id="modalappendtobody" tabindex="-1"><a class="header-anchor" href="#modalappendtobody" aria-hidden="true">#</a> modalAppendToBody</h2><p>\u5C06\u83DC\u5355\u5F39\u51FA\u7684 modal \u6DFB\u52A0\u5230 body \u4E0B\uFF0C\u5E76\u81EA\u5B9A\u4E49 modal \u7684\u5B9A\u4F4D\u548C\u5176\u4ED6\u6837\u5F0F\u3002</p><p><img src="'+k+`" alt=""></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> toolbarConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IToolbarConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    modalAppendToBody<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA toolbar \u548C editor</span>

<span class="token comment">// \u53EF\u76D1\u542C \`modalOrPanelShow\` \u548C \`modalOrPanelHide\` \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u6765\u8BBE\u7F6E\u6837\u5F0F\u3001\u8499\u5C42</span>
editor<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;modalOrPanelShow&#39;</span><span class="token punctuation">,</span> modalOrPanel <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>modalOrPanel<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">&#39;modal&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> $elem <span class="token punctuation">}</span> <span class="token operator">=</span> modalOrPanel <span class="token comment">// modal element</span>

    <span class="token comment">// \u8BBE\u7F6E modal \u6837\u5F0F\uFF08\u5B9A\u4F4D\u3001z-index\uFF09</span>
    <span class="token comment">// \u663E\u793A\u8499\u5C42</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
editor<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;modalOrPanelHide&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9690\u85CF\u8499\u5C42</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,20),T=n("\u4E0A\u8FF0\u4EE3\u7801\u7EC6\u8282\u53EF\u4EE5\u53C2\u8003 "),K={href:"https://github.com/wangeditor-team/wangEditor-v5/blob/main/packages/editor/examples/modal-appendTo-body.html",target:"_blank",rel:"noopener noreferrer"},P=n("example \u6E90\u7801");function I(E,O){const e=p("RouterLink"),o=p("ExternalLinkIcon");return c(),r(i,null,[m,s("p",null,[g,a(e,{to:"/v5/getting-started.html"},{default:t(()=>[h]),_:1}),y]),s("div",_,[f,s("p",null,[v,a(e,{to:"/v5/menu-config.html"},{default:t(()=>[x]),_:1}),w])]),C,s("p",null,[T,s("a",K,[P,a(o)])])],64)}var q=l(d,[["render",I],["__file","toolbar-config.html.vue"]]);export{q as default};

import{_ as p,r as a,o as l,c as r,a as s,b as e,w as c,F as i,d as n,e as u}from"./app.b7be1b61.js";var b="/image/exclude-group-en.png",d="/image/modal-appendTo-body-en.png";const k={},m=s("h1",{id:"toolbar-config",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#toolbar-config","aria-hidden":"true"},"#"),n(" Toolbar Config")],-1),g=n("If you first-time use wangEditor, please see "),h=n("Get Started"),y=n(" it to learn basic usage."),f=u(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IToolbarConfig<span class="token punctuation">,</span> createToolbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token keyword">const</span> toolbarConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IToolbarConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">/* your toolbar config */</span>
<span class="token punctuation">}</span>

<span class="token comment">// create toolbar</span>
<span class="token keyword">const</span> toolbar <span class="token operator">=</span> <span class="token function">createToolbar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  editor<span class="token punctuation">,</span>
  selector<span class="token operator">:</span> <span class="token string">&#39;#toolbar-container&#39;</span><span class="token punctuation">,</span>
  config<span class="token operator">:</span> toolbarConfig
  mode<span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="getconfig" tabindex="-1"><a class="header-anchor" href="#getconfig" aria-hidden="true">#</a> getConfig</h2><p>Use <code>toolbar.getConfig()</code> to checkout default toolbar config.<br> If you use Vue or React, you can get <code>toolbar</code> instance by these codes.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> DomEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>
<span class="token keyword">const</span> toolbar <span class="token operator">=</span> DomEditor<span class="token punctuation">.</span><span class="token function">getToolbar</span><span class="token punctuation">(</span>editor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="toolbarkeys" tabindex="-1"><a class="header-anchor" href="#toolbarkeys" aria-hidden="true">#</a> toolbarKeys</h2><p><strong>Rewrite</strong> toolbar menus, re-order and re-group.</p><ul><li><code>toolbar.getConfig().toolbarKeys</code> checkout default <code>toolbarKeys</code> config.</li><li><code>editor.getAllMenuKeys()</code> checkout all embedded menu keys.</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> toolbarConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IToolbarConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    toolbarKeys<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// menu key</span>
        <span class="token string">&#39;headerSelect&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// split line</span>
        <span class="token string">&#39;|&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// menu key</span>
        <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;italic&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// menu group, includes many menu</span>
        <span class="token punctuation">{</span>
            key<span class="token operator">:</span> <span class="token string">&#39;group-more-style&#39;</span><span class="token punctuation">,</span> <span class="token comment">// required, must start with \`group-\`</span>
            title<span class="token operator">:</span> <span class="token string">&#39;more&#39;</span><span class="token punctuation">,</span> <span class="token comment">// required</span>
            iconSvg<span class="token operator">:</span> <span class="token string">&#39;&lt;svg&gt;....&lt;/svg&gt;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// optional</span>
            menuKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;through&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;clearStyle&quot;</span><span class="token punctuation">]</span> <span class="token comment">// required, children menu keys</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// other menu keys...</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// create toolbar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="insertkeys" tabindex="-1"><a class="header-anchor" href="#insertkeys" aria-hidden="true">#</a> insertKeys</h2><p>You may only want to insert some new menus, based on current <code>toolbarKeys</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> toolbarConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IToolbarConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    insertKeys<span class="token operator">:</span> <span class="token punctuation">{</span>
        index<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// inserted index, in current toolbarKeys</span>
        keys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;menu-key1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;menu-key2&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// create toolbar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="excludekeys" tabindex="-1"><a class="header-anchor" href="#excludekeys" aria-hidden="true">#</a> excludeKeys</h2><p>You may only want to exclude some menus, and keep the rest.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> toolbarConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IToolbarConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    excludeKeys<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;headerSelect&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;italic&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;group-more-style&#39;</span> <span class="token comment">// exclude menu-group</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// create toolbar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>If you want to exclude a menu group, you can find it&#39;s key by <code>toolbar.getConfig().toolbarKeys</code></p><p><img src="`+b+'" alt=""></p><h2 id="modalappendtobody" tabindex="-1"><a class="header-anchor" href="#modalappendtobody" aria-hidden="true">#</a> modalAppendToBody</h2><p>You may want to append the modal when a menu clicked to <code>&lt;body&gt;</code>, and custom its position style.</p><p><img src="'+d+`" alt=""></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> toolbarConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IToolbarConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    modalAppendToBody<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// Create toolbar and editor</span>

<span class="token comment">// Observe \`modalOrPanelShow\` and \`modalOrPanelHide\` custom event, then set modal style, and even you can show a mask &lt;div&gt;</span>
editor<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;modalOrPanelShow&#39;</span><span class="token punctuation">,</span> modalOrPanel <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>modalOrPanel<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">&#39;modal&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> $elem <span class="token punctuation">}</span> <span class="token operator">=</span> modalOrPanel <span class="token comment">// modal element</span>

    <span class="token comment">// set modal style (position, z-index)</span>
    <span class="token comment">// show a mask &lt;div&gt;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
editor<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;modalOrPanelHide&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// hide your mask &lt;div&gt;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,20),v=n("You could checkout "),_={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/editor/examples/modal-appendTo-body.html",target:"_blank",rel:"noopener noreferrer"},w=n("example source code"),x=n(".");function C(T,K){const t=a("RouterLink"),o=a("ExternalLinkIcon");return l(),r(i,null,[m,s("p",null,[g,e(t,{to:"/en/v5/getting-started.html"},{default:c(()=>[h]),_:1}),y]),f,s("p",null,[v,s("a",_,[w,e(o)]),x])],64)}var I=p(k,[["render",C],["__file","toolbar-config.html.vue"]]);export{I as default};

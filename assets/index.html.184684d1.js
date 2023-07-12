import{_ as r}from"./editor-en.4b2a1435.js";import{_ as i,r as t,o as p,c,a,b as s,w as l,F as d,e as n,d as u}from"./app.f3b3eccc.js";const m={},h=a("h3",{id:"easy-usage",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#easy-usage","aria-hidden":"true"},"#"),n(" Easy usage")],-1),b=n("You can create a fully functional rich-text editor with 10 lines of code. See "),k={href:"https://www.wangeditor.com/demo/index.html?lang=en",target:"_blank",rel:"noopener noreferrer"},_=n("demo"),g=n(". You can use "),f=n("official component"),w=n(" in Vue or React."),x=u('<p><img src="'+r+`" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;@wangeditor/editor/dist/css/style.css&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createEditor<span class="token punctuation">,</span> createToolbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token comment">// Create editor</span>
<span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;#editor-container&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// Create toolbar</span>
<span class="token keyword">const</span> toolbar <span class="token operator">=</span> <span class="token function">createToolbar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  editor<span class="token punctuation">,</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;#toolbar-container&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="compatibility" tabindex="-1"><a class="header-anchor" href="#compatibility" aria-hidden="true">#</a> Compatibility</h3><ul><li>Support most PC browsers, like Chrome, Firefox, Safari, Edge</li><li>Not support mobile editing at the moment (Support mobile viewing)</li><li><strong>No longer support IE browser</strong></li></ul><h3 id="communication" tabindex="-1"><a class="header-anchor" href="#communication" aria-hidden="true">#</a> Communication</h3><ul><li><a href="(https://github.com/wangeditor-team/wangEditor/issues)">Commit an issue</a></li></ul><h3 id="donation" tabindex="-1"><a class="header-anchor" href="#donation" aria-hidden="true">#</a> Donation</h3>`,7),y=n("Support wangEditor open-source work "),v={href:"https://opencollective.com/wangeditor",target:"_blank",rel:"noopener noreferrer"},E=n("https://opencollective.com/wangeditor");function C(N,S){const e=t("ExternalLinkIcon"),o=t("RouterLink");return p(),c(d,null,[h,a("p",null,[b,a("a",k,[_,s(e)]),g,s(o,{to:"/en/v5/for-frame.html"},{default:l(()=>[f]),_:1}),w]),x,a("p",null,[y,a("a",v,[E,s(e)])])],64)}var j=i(m,[["render",C],["__file","index.html.vue"]]);export{j as default};

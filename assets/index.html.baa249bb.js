import{_ as p}from"./editor.591eec2d.js";import{_ as i,r as t,o as c,c as l,a as n,b as a,w as d,F as u,d as o,e as s}from"./app.0828cbf7.js";const m={},_=o('<div style="border:1px solid #f1f1f1;border-radius:10px;position:relative;"><span style="position:absolute;background-color:#f1f1f1;padding:3px;font-size:14px;">\u{1F3C5}\u91D1\u724C\u8D5E\u52A9</span><a href="https://www.diboot.com/?from=we" target="_blank"><img src="https://www.diboot.com/diboot_banner.png"></a></div><h3 id="\u4F7F\u7528\u7B80\u5355" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u7B80\u5355" aria-hidden="true">#</a> \u4F7F\u7528\u7B80\u5355</h3>',2),h=s("10 \u884C\u4EE3\u7801\u5373\u53EF\u521B\u5EFA\u4E00\u4E2A\u529F\u80FD\u5065\u5168\u7684\u5BCC\u6587\u672C\u7F16\u8F91\u5668\uFF0C\u53EF\u67E5\u770B "),b={href:"https://www.wangeditor.com/demo/index.html",target:"_blank",rel:"noopener noreferrer"},k=s("demo \u793A\u4F8B"),f=s("\u3002\u5982\u7528\u4E8E Vue React \u53EF\u53C2\u8003"),g=s("\u8FD9\u91CC"),w=s("\u3002"),x=o('<p><img src="'+p+`" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;@wangeditor/editor/dist/css/style.css&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createEditor<span class="token punctuation">,</span> createToolbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token comment">// \u521B\u5EFA\u7F16\u8F91\u5668</span>
<span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;#editor-container&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u521B\u5EFA\u5DE5\u5177\u680F</span>
<span class="token keyword">const</span> toolbar <span class="token operator">=</span> <span class="token function">createToolbar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  editor<span class="token punctuation">,</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;#toolbar-container&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u517C\u5BB9\u6027</h3><ul><li>\u517C\u5BB9\u4E3B\u6D41\u7684 PC \u6D4F\u89C8\u5668\uFF0C\u5982 Chrome Firefox Safari Edge \u7B49</li><li>\u6682\u4E0D\u652F\u6301\u79FB\u52A8\u7AEF\u7F16\u8F91\uFF08\u652F\u6301\u79FB\u52A8\u7AEF\u67E5\u770B\uFF09</li><li><strong>\u4E0D\u518D\u652F\u6301 IE \u6D4F\u89C8\u5668</strong></li></ul><h3 id="\u9047\u5230\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u95EE\u9898" aria-hidden="true">#</a> \u9047\u5230\u95EE\u9898</h3>`,5),v={href:"https://github.com/wangeditor-team/wangEditor/issues/4524",target:"_blank",rel:"noopener noreferrer"},y=s("\u5E38\u89C1\u95EE\u9898\u6C47\u603B"),E={href:"https://github.com/wangeditor-team/wangEditor/issues",target:"_blank",rel:"noopener noreferrer"},V=s("\u63D0\u4EA4 issue \u95EE\u9898\u548C\u5EFA\u8BAE"),C=n("li",null,"\u6682\u505C QQ \u7FA4\uFF08\u65E0\u826F\u201C\u4F38\u624B\u515A\u201D\u8FC7\u591A\uFF0C\u8FD8\u8BF7\u4F53\u8C05~\uFF09",-1);function L(N,j){const e=t("ExternalLinkIcon"),r=t("RouterLink");return c(),l(u,null,[_,n("p",null,[h,n("a",b,[k,a(e)]),f,a(r,{to:"/v5/for-frame.html"},{default:d(()=>[g]),_:1}),w]),x,n("ul",null,[n("li",null,[n("a",v,[y,a(e)])]),n("li",null,[n("a",E,[V,a(e)])]),C])],64)}var I=i(m,[["render",L],["__file","index.html.vue"]]);export{I as default};

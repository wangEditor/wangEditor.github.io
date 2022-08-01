import{_ as r}from"./editor.591eec2d.js";import{_ as l}from"./douyin.444e2a1e.js";import{_ as i,r as o,o as c,c as p,a as n,b as e,w as d,F as _,d as s,e as h}from"./app.235dfcd1.js";const u={},m={style:{opacity:"0.5",transition:"opacity 0.5s",border:"1px solid #ccc",padding:"0 20px","border-radius":"10px","box-shadow":"0 2px 10px #0000001f"},onmouseover:"this.style.opacity = '1.0';",onmouseout:"this.style.opacity = '0.5';"},k={id:"wangeditor-\u4F5C\u8005-\u6155\u8BFE\u7F51-\u53CC\u8D8A\u8BB2\u5E08-\u4EB2\u6388-\u524D\u7AEF\u9762\u8BD5\u5168\u6D41\u7A0B-5000-\u5B66\u5458\u597D\u8BC4",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#wangeditor-\u4F5C\u8005-\u6155\u8BFE\u7F51-\u53CC\u8D8A\u8BB2\u5E08-\u4EB2\u6388-\u524D\u7AEF\u9762\u8BD5\u5168\u6D41\u7A0B-5000-\u5B66\u5458\u597D\u8BC4","aria-hidden":"true"},"#",-1),g=s(" wangEditor \u4F5C\u8005 "),f={href:"https://www.imooc.com/t/4427201",target:"_blank",rel:"noopener noreferrer"},w=s("\u6155\u8BFE\u7F51 \u53CC\u8D8A\u8BB2\u5E08"),x=s(" \u4EB2\u6388\uFF0C\u524D\u7AEF\u9762\u8BD5\u5168\u6D41\u7A0B\uFF0C5000+\u5B66\u5458\u597D\u8BC4~"),y=n("strong",null,"\u7B80\u5386",-1),v=s(),E={href:"https://www.imooc.com/learn/1329",target:"_blank",rel:"noopener noreferrer"},V=s("1 \u5C0F\u65F6\u5E26\u4F60\u5199\u51FA\u4EAE\u773C\u7684\u524D\u7AEF\u7B80\u5386 - \u514D\u8D39\u5B66\u4E60\uFF01\uFF01\uFF01"),C=n("strong",null,"\u57FA\u7840",-1),L=s(),N={href:"https://coding.imooc.com/class/400.html",target:"_blank",rel:"noopener noreferrer"},R=s("1 \u5929\u65F6\u95F4\u5FEB\u901F\u51C6\u5907\u524D\u7AEF\u57FA\u7840\u9762\u8BD5\uFF0C\u6784\u5EFA\u524D\u7AEF\u57FA\u7840\u77E5\u8BC6\u4F53\u7CFB"),j=n("strong",null,"\u6846\u67B6",-1),B=s(),F={href:"https://coding.imooc.com/class/419.html",target:"_blank",rel:"noopener noreferrer"},I=s("\u524D\u7AEF\u6846\u67B6\u9762\u8BD5\u9898\uFF0C\u805A\u7126 Vue3 React Webpack"),T=n("strong",null,"\u5237\u9898",-1),Q=s(),S={href:"https://coding.imooc.com/class/562.html",target:"_blank",rel:"noopener noreferrer"},P=s("2 \u5468\u5237\u5B8C 100 \u9053\u524D\u7AEF\u4F18\u8D28\u9762\u8BD5\u771F\u9898\uFF0C\u8986\u76D6 9 \u5927\u8003\u5BDF\u65B9\u5411"),W=n("strong",null,"\u6A21\u62DF\u9762\u8BD5",-1),$=s(),q={href:"https://coding.imooc.com/class/596.html",target:"_blank",rel:"noopener noreferrer"},z=s("\u524D\u7AEF\u9762\u8BD5\u6A21\u62DF+\u590D\u76D8 \uFF0C\u63ED\u79D8\u9762\u8BD5\u5B98\u7684\u5185\u5FC3\u4E16\u754C - \u65B0\u8BFE\u4F18\u60E0\uFF01\uFF01\uFF01"),A=n("h3",{id:"\u4F7F\u7528\u7B80\u5355",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u7B80\u5355","aria-hidden":"true"},"#"),s(" \u4F7F\u7528\u7B80\u5355")],-1),D=s("10 \u884C\u4EE3\u7801\u5373\u53EF\u521B\u5EFA\u4E00\u4E2A\u529F\u80FD\u5065\u5168\u7684\u5BCC\u6587\u672C\u7F16\u8F91\u5668\uFF0C\u53EF\u67E5\u770B "),G={href:"https://www.wangeditor.com/demo/index.html",target:"_blank",rel:"noopener noreferrer"},H=s("demo \u793A\u4F8B"),J=s("\u3002\u5982\u7528\u4E8E Vue React \u53EF\u53C2\u8003"),K=s("\u8FD9\u91CC"),M=s("\u3002"),O=h('<p><img src="'+r+`" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;@wangeditor/editor/dist/css/style.css&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u517C\u5BB9\u6027</h3><ul><li>\u517C\u5BB9\u4E3B\u6D41\u7684 PC \u6D4F\u89C8\u5668\uFF0C\u5982 Chrome Firefox Safari Edge \u7B49</li><li>\u6682\u4E0D\u652F\u6301\u79FB\u52A8\u7AEF\u7F16\u8F91\uFF08\u652F\u6301\u79FB\u52A8\u7AEF\u67E5\u770B\uFF09</li><li><strong>\u4E0D\u518D\u652F\u6301 IE \u6D4F\u89C8\u5668</strong></li></ul><h3 id="\u9047\u5230\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u95EE\u9898" aria-hidden="true">#</a> \u9047\u5230\u95EE\u9898</h3>`,5),U={href:"https://github.com/wangeditor-team/wangEditor/issues/4524",target:"_blank",rel:"noopener noreferrer"},X=s("\u5E38\u89C1\u95EE\u9898\u6C47\u603B"),Y={href:"https://github.com/wangeditor-team/wangEditor/issues",target:"_blank",rel:"noopener noreferrer"},Z=s("\u63D0\u4EA4 issue \u95EE\u9898\u548C\u5EFA\u8BAE"),nn=n("li",null,[s("\u52A0\u5165 QQ \u7FA4 "),n("code",null,"657798566"),s(" \uFF0C"),n("strong",null,"\u4F46\u8BF7\u6CE8\u610F\uFF1A"),n("ul",null,[n("li",null,[s("\u7528\u6237\u4EA4\u6D41\uFF0C\u8BF7\u4E0D\u8981 "),n("code",null,"@\u7FA4\u4E3B"),s(" \u89E3\u7B54\u95EE\u9898\uFF01")]),n("li",null,"\u767D\u5AD6\u515A\u3001\u4F38\u624B\u515A\u8BF7\u7ED5\u884C\uFF01"),n("li",null,"\u8BF4\u810F\u8BDD\u3001\u53D1\u5E7F\u544A\uFF0C\u76F4\u63A5\u8E22\u51FA\uFF01")])],-1),sn=n("h3",{id:"\u5173\u6CE8\u4F5C\u8005\u6296\u97F3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5173\u6CE8\u4F5C\u8005\u6296\u97F3","aria-hidden":"true"},"#"),s(" \u5173\u6CE8\u4F5C\u8005\u6296\u97F3")],-1),en=n("p",null,[n("img",{src:l,alt:""})],-1);function tn(on,an){const t=o("ExternalLinkIcon"),a=o("RouterLink");return c(),p(_,null,[n("div",m,[n("h3",k,[b,g,n("a",f,[w,e(t)]),x]),n("ol",null,[n("li",null,[y,v,n("a",E,[V,e(t)])]),n("li",null,[C,L,n("a",N,[R,e(t)])]),n("li",null,[j,B,n("a",F,[I,e(t)])]),n("li",null,[T,Q,n("a",S,[P,e(t)])]),n("li",null,[W,$,n("a",q,[z,e(t)])])])]),A,n("p",null,[D,n("a",G,[H,e(t)]),J,e(a,{to:"/v5/for-frame.html"},{default:d(()=>[K]),_:1}),M]),O,n("ul",null,[n("li",null,[n("a",U,[X,e(t)])]),n("li",null,[n("a",Y,[Z,e(t)])]),nn]),sn,en],64)}var pn=i(u,[["render",tn],["__file","index.html.vue"]]);export{pn as default};

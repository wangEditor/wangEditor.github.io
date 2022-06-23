import{_ as r,r as c,o as l,c as i,a as s,b as a,w as o,F as u,d as n,e}from"./app.cea4d752.js";var d="/image/hoverbar.png",k="/image/elem-type.png";const b={},m=s("h1",{id:"\u7F16\u8F91\u5668\u914D\u7F6E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u7F16\u8F91\u5668\u914D\u7F6E","aria-hidden":"true"},"#"),n(" \u7F16\u8F91\u5668\u914D\u7F6E")],-1),h=n("\u5982\u679C\u662F\u7B2C\u4E00\u6B21\u4F7F\u7528\uFF0C\u8BF7\u5148\u901A\u8FC7 "),g=n("\u5FEB\u901F\u5F00\u59CB"),f=n(" \u4E86\u89E3\u57FA\u672C\u4F7F\u7528\u3002"),v=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IEditorConfig<span class="token punctuation">,</span> createEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u7F16\u8F91\u5668\u914D\u7F6E */</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  selector<span class="token operator">:</span> <span class="token string">&#39;#editor-container&#39;</span><span class="token punctuation">,</span>
  config<span class="token operator">:</span> editorConfig<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u53EF\u901A\u8FC7 editor.getConfig() \u67E5\u770B\u7F16\u8F91\u5668\u9ED8\u8BA4\u914D\u7F6E</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> placeholder</h2><p>\u914D\u7F6E\u7F16\u8F91\u5668 placeholder</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span>placeholder <span class="token operator">=</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u5185\u5BB9...&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readOnly</h2><p>\u914D\u7F6E\u7F16\u8F91\u5668\u662F\u5426\u53EA\u8BFB\uFF0C\u9ED8\u8BA4\u4E3A <code>false</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span>readOnly <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,7),y=n("\u53EA\u8BFB\u72B6\u6001\u53EF\u901A\u8FC7 "),_=s("code",null,"editor.enable()",-1),C=n(" \u548C "),x=s("code",null,"editor.disable()",-1),w=n(" \u5207\u6362\uFF0C\u8BE6\u89C1 "),E=n("API"),I=n(" \u3002"),P=e(`<h2 id="autofocus" tabindex="-1"><a class="header-anchor" href="#autofocus" aria-hidden="true">#</a> autoFocus</h2><p>\u914D\u7F6E\u7F16\u8F91\u5668\u9ED8\u8BA4\u662F\u5426 focus \uFF0C\u9ED8\u8BA4\u4E3A <code>true</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span>autoFocus <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="scroll" tabindex="-1"><a class="header-anchor" href="#scroll" aria-hidden="true">#</a> scroll</h2><p>\u914D\u7F6E\u7F16\u8F91\u5668\u662F\u5426\u652F\u6301\u6EDA\u52A8\uFF0C\u9ED8\u8BA4\u4E3A <code>true</code> \u3002\u6CE8\u610F\uFF0C\u6B64\u65F6<strong>\u4E0D\u8981\u56FA\u5B9A <code>editor-container</code> \u7684\u9AD8\u5EA6</strong>\uFF0C\u8BBE\u7F6E\u4E00\u4E2A <code>min-height</code> \u5373\u53EF\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span>scroll <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,6),D={class:"custom-container tip"},L=s("p",{class:"custom-container-title"},"TIP",-1),N=s("p",null,[n("\u53EF\u5C06 scroll \u8BBE\u7F6E\u4E3A "),s("code",null,"false"),n(" \u7684\u60C5\u51B5\uFF1A")],-1),K=s("li",null,"\u7F16\u8F91\u5668\u9AD8\u5EA6\u81EA\u589E",-1),A=n("\u5728\u7EBF\u6587\u6863\uFF0C\u5982\u817E\u8BAF\u6587\u6863\u3001\u8BED\u96C0\u90A3\u6837\u7684\uFF0C\u53C2\u8003 "),T={href:"https://www.wangeditor.com/demo/zh-CN/like-qq-doc.html",target:"_blank",rel:"noopener noreferrer"},F=n("demo"),B=n(" \u4E2D\u7684\u201C\u4EFF\u817E\u8BAF\u6587\u6863\u201D"),V=e(`<h2 id="maxlength-onmaxlength" tabindex="-1"><a class="header-anchor" href="#maxlength-onmaxlength" aria-hidden="true">#</a> maxLength onMaxLength</h2><p>\u914D\u7F6E\u7F16\u8F91\u5668\u7684 maxlength \uFF0C\u9ED8\u8BA4\u4E0D\u9650\u5236</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span>maxLength <span class="token operator">=</span> <span class="token number">1000</span>
editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onMaxLength</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F53\u8FBE\u5230 maxlength \u9650\u5236\u65F6\uFF0C\u89E6\u53D1\u8BE5\u56DE\u8C03\u51FD\u6570</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u65E0\u7279\u6B8A\u9700\u6C42\uFF0C\u8BF7\u614E\u7528 maxLength \uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7F16\u8F91\u5668\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u7F16\u8F91\u5361\u987F\u3002</p></div><h2 id="hoverbarkeys" tabindex="-1"><a class="header-anchor" href="#hoverbarkeys" aria-hidden="true">#</a> hoverbarKeys</h2><p>\u914D\u7F6E\u7F16\u8F91\u5668\u7684 hoverbar \u83DC\u5355\u3002\u901A\u8FC7 <code>editor.getConfig().hoverbarKeys</code> \u53EF\u67E5\u770B\u5F53\u524D\u7684 hoverbarKeys</p><p><img src="`+d+'" alt=""></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>createEditor \u65F6\u8BBE\u7F6E <code>mode: &#39;simple&#39;</code> \u53EF\u9690\u85CF\u9009\u4E2D\u6587\u672C\u65F6\u7684 hoverbar \u3002</p></div><h3 id="\u4F7F\u7528-element-type" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-element-type" aria-hidden="true">#</a> \u4F7F\u7528 element type</h3><p>\u53EF\u4EE5\u901A\u8FC7\u5143\u7D20 <code>type</code> \u914D\u7F6E\u67D0\u79CD\u5143\u7D20\u7684 hoverbar</p><ul><li>\u5143\u7D20\u7684 <code>type</code> \u53EF\u901A\u8FC7 <code>editor.children</code> \u67E5\u770B\uFF0C\u5982\u4E0B\u56FE</li><li>\u4F7F\u7528 <code>editor.getAllMenuKeys()</code> \u53EF\u67E5\u770B\u6240\u6709\u5185\u7F6E menu key</li></ul><p><img src="'+k+`" alt=""></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span>hoverbarKeys <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;link&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u91CD\u5199 link \u5143\u7D20\u7684 hoverbar</span>
        menuKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;editLink&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;unLink&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;viewLink&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;image&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6E05\u7A7A image \u5143\u7D20\u7684 hoverbar</span>
        menuKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u81EA\u5B9A\u4E49-match-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49-match-\u51FD\u6570" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49 match \u51FD\u6570</h3><p>\u5982\u679C element type \u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u53EF\u901A\u8FC7\u81EA\u5B9A\u4E49 <code>match</code> \u51FD\u6570\u5339\u914D\u5143\u7D20\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> SlateNode<span class="token punctuation">,</span> IDomEditor<span class="token punctuation">,</span> IEditorConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span>hoverbarKeys <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;text&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u6709 match \u51FD\u6570\uFF0C\u5219\u4F18\u5148\u6839\u636E match \u5224\u65AD\uFF0C\u800C\u5FFD\u7565 element type</span>
        <span class="token class-name">match</span><span class="token operator">:</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">,</span> n<span class="token operator">:</span> SlateNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u53EF\u53C2\u8003\u4E0B\u6587\u7684\u6E90\u7801</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        menuKeys<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token operator">...</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5B9A\u4E49\u4F60\u60F3\u8981\u7684 menu keys</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,16),z=n("\u53EF\u53C2\u8003 hoverbar \u914D\u7F6E\u7684"),M={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/editor/src/init-default-config/config/hoverbar.ts",target:"_blank",rel:"noopener noreferrer"},O=n("\u6E90\u7801"),S=n("\u3002"),q=e(`<h2 id="oncreated" tabindex="-1"><a class="header-anchor" href="#oncreated" aria-hidden="true">#</a> onCreated</h2><p>\u7F16\u8F91\u5668\u521B\u5EFA\u5B8C\u6BD5\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onCreated</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// editor created</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="onchange" tabindex="-1"><a class="header-anchor" href="#onchange" aria-hidden="true">#</a> onChange</h2><p>\u7F16\u8F91\u5668\u5185\u5BB9\u3001\u9009\u533A\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// editor changed</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;content&#39;</span><span class="token punctuation">,</span> editor<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="ondestroyed" tabindex="-1"><a class="header-anchor" href="#ondestroyed" aria-hidden="true">#</a> onDestroyed</h2>`,7),R=n("\u7F16\u8F91\u5668\u9500\u6BC1\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002\u8C03\u7528 "),W=s("code",null,"editor.destroy()",-1),X=n(" \u5373\u53EF\u9500\u6BC1\u7F16\u8F91\u5668\uFF0C\u8BE6\u89C1 "),j=n("API"),G=n(" \u3002"),H=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onDestroyed</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// editor destroyed</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="onfocus" tabindex="-1"><a class="header-anchor" href="#onfocus" aria-hidden="true">#</a> onFocus</h2><p>\u7F16\u8F91\u5668 focus \u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onFocus</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// editor focused</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="onblur" tabindex="-1"><a class="header-anchor" href="#onblur" aria-hidden="true">#</a> onBlur</h2><p>\u7F16\u8F91\u5668 blur \u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onBlur</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// editor blur</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="custompaste" tabindex="-1"><a class="header-anchor" href="#custompaste" aria-hidden="true">#</a> customPaste</h2><p>\u81EA\u5B9A\u4E49\u7C98\u8D34\u3002\u53EF\u963B\u6B62\u7F16\u8F91\u5668\u7684\u9ED8\u8BA4\u7C98\u8D34\uFF0C\u5B9E\u73B0\u81EA\u5DF1\u7684\u7C98\u8D34\u903B\u8F91\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span>customPaste <span class="token operator">=</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">,</span> event<span class="token operator">:</span> ClipboardEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// event \u662F ClipboardEvent \u7C7B\u578B\uFF0C\u53EF\u4EE5\u62FF\u5230\u7C98\u8D34\u7684\u6570\u636E</span>
    <span class="token comment">// \u53EF\u53C2\u8003 https://developer.mozilla.org/zh-CN/docs/Web/API/ClipboardEvent</span>

    <span class="token comment">// const html = event.clipboardData.getData(&#39;text/html&#39;) // \u83B7\u53D6\u7C98\u8D34\u7684 html</span>
    <span class="token comment">// const text = event.clipboardData.getData(&#39;text/plain&#39;) // \u83B7\u53D6\u7C98\u8D34\u7684\u7EAF\u6587\u672C</span>
    <span class="token comment">// const rtf = event.clipboardData.getData(&#39;text/rtf&#39;) // \u83B7\u53D6 rtf \u6570\u636E\uFF08\u5982\u4ECE word wsp \u590D\u5236\u7C98\u8D34\uFF09</span>

    <span class="token comment">// \u540C\u6B65</span>
    editor<span class="token punctuation">.</span><span class="token function">insertText</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// \u5F02\u6B65</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        editor<span class="token punctuation">.</span><span class="token function">insertText</span><span class="token punctuation">(</span><span class="token string">&#39;yy&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

    <span class="token comment">// \u963B\u6B62\u9ED8\u8BA4\u7684\u7C98\u8D34\u884C\u4E3A</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token comment">// \u7EE7\u7EED\u6267\u884C\u9ED8\u8BA4\u7684\u7C98\u8D34\u884C\u4E3A</span>
    <span class="token comment">// return true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="customalert" tabindex="-1"><a class="header-anchor" href="#customalert" aria-hidden="true">#</a> customAlert</h2><p>\u81EA\u5B9A\u4E49\u7F16\u8F91\u5668 alert \u3002\u5982\u60F3\u7528 antd \u7684 message \u529F\u80FD\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd&#39;</span>

<span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span><span class="token function-variable function">customAlert</span> <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> t<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;success&#39;</span><span class="token operator">:</span>
            message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">&#39;info&#39;</span><span class="token operator">:</span>
            message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">&#39;warning&#39;</span><span class="token operator">:</span>
            message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">&#39;error&#39;</span><span class="token operator">:</span>
            message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="extend-conf" tabindex="-1"><a class="header-anchor" href="#extend-conf" aria-hidden="true">#</a> EXTEND_CONF</h2>`,14),J=n("\u7528\u4E8E\u7B2C\u4E09\u65B9\u63D2\u4EF6\u505A\u6269\u5C55\u914D\u7F6E\uFF0C\u5982 "),Q={href:"https://github.com/wangeditor-team/wangEditor-plugin-mention",target:"_blank",rel:"noopener noreferrer"},U=n("mention \u63D2\u4EF6"),Y=n("\u3002");function Z($,nn){const t=c("RouterLink"),p=c("ExternalLinkIcon");return l(),i(u,null,[m,s("p",null,[h,a(t,{to:"/v5/getting-started.html"},{default:o(()=>[g]),_:1}),f]),v,s("p",null,[y,_,C,x,w,a(t,{to:"/v5/API.html"},{default:o(()=>[E]),_:1}),I]),P,s("div",D,[L,N,s("ul",null,[K,s("li",null,[A,s("a",T,[F,a(p)]),B])])]),V,s("p",null,[z,s("a",M,[O,a(p)]),S]),q,s("p",null,[R,W,X,a(t,{to:"/v5/API.html"},{default:o(()=>[j]),_:1}),G]),H,s("p",null,[J,s("a",Q,[U,a(p)]),Y])],64)}var an=r(b,[["render",Z],["__file","editor-config.html.vue"]]);export{an as default};

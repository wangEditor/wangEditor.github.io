import{_ as l}from"./editor-en.4b2a1435.js";import{_ as r,r as o,o as i,c as u,a as s,b as a,w as e,F as k,d as n,e as p}from"./app.d0756728.js";var d="/image/like-google-doc.png";const m={},b=s("h1",{id:"getting-started",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),n(" Getting Started")],-1),g=n("If you wanna to use wangEditor in Vue or React, please read this article first, then check "),h=n("this article"),v=n("."),f=p(`<h2 id="create-empty-editor" tabindex="-1"><a class="header-anchor" href="#create-empty-editor" aria-hidden="true">#</a> Create Empty Editor</h2><h3 id="define-html-code" tabindex="-1"><a class="header-anchor" href="#define-html-code" aria-hidden="true">#</a> Define Html Code</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toolbar-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- for toolbar --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- for editor --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="create-editor-and-toolbar" tabindex="-1"><a class="header-anchor" href="#create-editor-and-toolbar" aria-hidden="true">#</a> Create Editor and Toolbar</h3><p>Import wangEditor</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// npm</span>
<span class="token keyword">import</span> <span class="token string">&#39;@wangeditor/editor/dist/css/style.css&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createEditor<span class="token punctuation">,</span> createToolbar<span class="token punctuation">,</span> IEditorConfig<span class="token punctuation">,</span> IDomEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token comment">// CDN</span>
<span class="token comment">// const { createEditor, createToolbar } = window.wangEditor</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Create editor and toolbar</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
editorConfig<span class="token punctuation">.</span>placeholder <span class="token operator">=</span> <span class="token string">&#39;Type here please&#39;</span>
editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// will be trigger when content or selection changed</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;content&#39;</span><span class="token punctuation">,</span> editor<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span> editor<span class="token punctuation">.</span><span class="token function">getHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> toolbarConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IToolbarConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// create editor</span>
<span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  selector<span class="token operator">:</span> <span class="token string">&#39;#editor-container&#39;</span><span class="token punctuation">,</span>
  config<span class="token operator">:</span> editorConfig<span class="token punctuation">,</span>
  mode<span class="token operator">:</span> <span class="token string">&#39;default&#39;</span> <span class="token comment">// or &#39;simple&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// create toolbar</span>
<span class="token keyword">const</span> toolbar <span class="token operator">=</span> <span class="token function">createToolbar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  editor<span class="token punctuation">,</span>
  selector<span class="token operator">:</span> <span class="token string">&#39;#toolbar-container&#39;</span><span class="token punctuation">,</span>
  config<span class="token operator">:</span> toolbarConfig<span class="token punctuation">,</span>
  mode<span class="token operator">:</span> <span class="token string">&#39;default&#39;</span> <span class="token comment">// or &#39;simple&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>With the simple code above, you will create a basic editor.</p><p><img src="`+l+'" alt=""></p>',10),y={class:"custom-container tip"},_=s("p",{class:"custom-container-title"},"TIP",-1),x=s("li",null,"The toolbar is not necessary",-1),q=n("You can "),w=n("config toolbar menus"),E=n(" manually"),C=n("There are many "),I=n("editor configs"),T=s("h3",{id:"mode",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mode","aria-hidden":"true"},"#"),n(" Mode")],-1),z=n("There are to modes, see "),S={href:"https://www.wangeditor.com/demo/index.html?lang=en",target:"_blank",rel:"noopener noreferrer"},j=n("Demo"),D=n("."),N=p(`<ul><li><code>default</code> mode, Integrate all wangEditor functions</li><li><code>simple</code> mode, Only basic functions, but terse</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>No matter which mode is used, it does not affect function and config.</p></div><h2 id="use-textarea" tabindex="-1"><a class="header-anchor" href="#use-textarea" aria-hidden="true">#</a> Use <code>&lt;textarea&gt;</code></h2><p>When editor content changed, sync to <code>&lt;textarea&gt;</code>.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>textarea-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>textarea-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">editor</span><span class="token operator">:</span> IDomEditor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> content <span class="token operator">=</span> editor<span class="token punctuation">.</span>children
    <span class="token keyword">const</span> contentStr <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;textarea-1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> contentStr

    <span class="token keyword">const</span> html <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;textarea-2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> html
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="size-and-style" tabindex="-1"><a class="header-anchor" href="#size-and-style" aria-hidden="true">#</a> Size and Style</h2><h3 id="width-and-height" tabindex="-1"><a class="header-anchor" href="#width-and-height" aria-hidden="true">#</a> Width and Height</h3><p>Width is self-adaption, 100% by default.</p><p>Height is <code>min-height: 300px;</code> by default, you can change it manually.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toolbar-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor-container<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="z-index" tabindex="-1"><a class="header-anchor" href="#z-index" aria-hidden="true">#</a> Z-Index</h3><p>wangEditor do not set <code>z-index</code> ever, you can set it yourself.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toolbar-container<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">z-index</span><span class="token punctuation">:</span> 101<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor-container<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="full-screen" tabindex="-1"><a class="header-anchor" href="#full-screen" aria-hidden="true">#</a> Full-Screen</h3><p>wangEditor embed full-screen menu, but there is one requirement: <strong><code>toolbar-container</code> and <code>editor-container</code> must have same parent node</strong>.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.full-screen-container</span> <span class="token punctuation">{</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span> <span class="token comment">/* \u5982\u6709\u9700\u8981\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49 z-index */</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>full-screen-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toolbar-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- for editor --&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- for toolbar --&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,17),B=n("If you unwanted full-screen menu, you can hide this by "),H=s("code",null,"{ excludeKeys: 'fullScreen' }",-1),V=n(", see "),L=n("Toolbar Config"),P=n("."),W=p('<h3 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> Others</h3><ul><li>You can fixed toolbar to top by define <code>toolbar-container</code> style.</li><li>You can dev an editor like Google Doc by redefine html structure and style.</li></ul><p><img src="'+d+`" alt=""></p><h2 id="multiple-editors" tabindex="-1"><a class="header-anchor" href="#multiple-editors" aria-hidden="true">#</a> Multiple Editors</h2><p>You can create many editors in one page.</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toolbar-container-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor-container-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toolbar-container-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor-container-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// create editor1</span>
<span class="token keyword">const</span> editor1 <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;#editor-container-1&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// create toolbar1</span>
<span class="token keyword">const</span> toolbar1 <span class="token operator">=</span> <span class="token function">createToolbar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">editor</span><span class="token operator">:</span> editor1<span class="token punctuation">,</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;#toolbar-container-1&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// create editor2</span>
<span class="token keyword">const</span> editor2 <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;#editor-container-2&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;simple&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// create toolbar2</span>
<span class="token keyword">const</span> toolbar2 <span class="token operator">=</span> <span class="token function">createToolbar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">editor</span><span class="token operator">:</span> editor2<span class="token punctuation">,</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;#toolbar-container-2&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;simple&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,7);function Y(F,O){const t=o("RouterLink"),c=o("ExternalLinkIcon");return i(),u(k,null,[b,s("p",null,[g,a(t,{to:"/en/v5/for-frame.html"},{default:e(()=>[h]),_:1}),v]),f,s("div",y,[_,s("ol",null,[x,s("li",null,[q,a(t,{to:"/en/v5/toolbar-config.html"},{default:e(()=>[w]),_:1}),E]),s("li",null,[C,a(t,{to:"/en/v5/editor-config.html"},{default:e(()=>[I]),_:1})])])]),T,s("p",null,[z,s("a",S,[j,a(c)]),D]),N,s("p",null,[B,H,V,a(t,{to:"/en/v5/toolbar-config.html"},{default:e(()=>[L]),_:1}),P]),W],64)}var M=r(m,[["render",Y],["__file","getting-started.html.vue"]]);export{M as default};

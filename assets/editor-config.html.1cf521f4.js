import{_ as r,r as c,o as l,c as i,a as s,b as a,w as p,F as u,e as n,d as e}from"./app.910c35b7.js";var d="/image/hoverbar-en.png",m="/image/elem-type-en.png";const k={},b=s("h1",{id:"editor-config",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#editor-config","aria-hidden":"true"},"#"),n(" Editor Config")],-1),h=n("If you first-time use wangEditor, please see "),g=n("Get Started"),f=n(" it to learn basic usage."),y=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IEditorConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

<span class="token keyword">const</span> editorConfig<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>IEditorConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment">// TS syntax</span>
<span class="token comment">// const editorConfig = {                       // JS syntax</span>
    <span class="token comment">/* editor config */</span>
<span class="token punctuation">}</span>

<span class="token comment">// create editor, or Vue React &lt;Editor&gt; component</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can use <code>editor.getConfig()</code> to checkout editor&#39;s default config</p></div><h2 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> placeholder</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>editorConfig<span class="token punctuation">.</span>placeholder <span class="token operator">=</span> <span class="token string">&#39;Type your text&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readOnly</h2>`,5),v=n("Default value is "),_=s("code",null,"false",-1),x=n(". "),w=s("br",null,null,-1),C=n(" You can use "),E=s("code",null,"editor.enable()",-1),I=n(" and "),D=s("code",null,"editor.disable()",-1),S=n(" to toggle readOnly. see "),T=n("Editor API"),L=n("."),P=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>editorConfig<span class="token punctuation">.</span>readOnly <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="autofocus" tabindex="-1"><a class="header-anchor" href="#autofocus" aria-hidden="true">#</a> autoFocus</h2><p>Default value is <code>true</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>editorConfig<span class="token punctuation">.</span>autoFocus <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="scroll" tabindex="-1"><a class="header-anchor" href="#scroll" aria-hidden="true">#</a> scroll</h2><p>Default value is <code>true</code>. You can scroll editor area.</p><p>If you set <code>false</code>, <strong>do not set <code>editor-container</code> a fixed height</strong>, just set <code>min-height</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>editorConfig<span class="token punctuation">.</span>scroll <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,8),Y={class:"custom-container tip"},A=s("p",{class:"custom-container-title"},"TIP",-1),J=s("p",null,[n("When you need to set "),s("code",null,"false"),n("?")],-1),N=s("li",null,"Editor height increases automatically",-1),F=n("Want a Google doc style, see "),K={href:"https://www.wangeditor.com/demo/like-qq-doc.html?lang=en",target:"_blank",rel:"noopener noreferrer"},B=n("Demo"),M=s("h2",{id:"maxlength-onmaxlength",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#maxlength-onmaxlength","aria-hidden":"true"},"#"),n(" maxLength onMaxLength")],-1),R=n("See "),V={href:"https://www.wangeditor.com/demo/max-length.html?lang=en",target:"_blank",rel:"noopener noreferrer"},O=n("demo"),W=n("."),q=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IDomEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

editorConfig<span class="token punctuation">.</span>maxLength <span class="token operator">=</span> <span class="token number">1000</span>
editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onMaxLength</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// TS syntax</span>
<span class="token comment">// editorConfig.onMaxLength = function (editor) {            // JS syntax</span>
    <span class="token comment">// trigger this when exceed maxlength</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you have no strong demand, do not set <code>maxLength</code>.<br> Cause it may affect performance when text is too large.</p></div><h2 id="hoverbarkeys" tabindex="-1"><a class="header-anchor" href="#hoverbarkeys" aria-hidden="true">#</a> hoverbarKeys</h2><p>You can use <code>editor.getConfig().hoverbarKeys</code> to checkout default config.</p><p><img src="`+d+'" alt=""></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you only unwanted hoverbar when select text, set <code>mode: &#39;simple&#39;</code> when creating editor</p></div><h3 id="use-element-type" tabindex="-1"><a class="header-anchor" href="#use-element-type" aria-hidden="true">#</a> Use element type</h3><p>You can config hoverbar menu keys by element type.<br></p><ul><li>You can checkout every element&#39;s type by <code>editor.children</code> , see the picture below</li><li>You can use <code>editor.getAllMenuKeys()</code> to checkout all embedded menu keys</li></ul><p><img src="'+m+`" alt=""></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>editorConfig<span class="token punctuation">.</span>hoverbarKeys <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;link&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// rewrite link element&#39;s hoverbar</span>
        menuKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;editLink&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;unLink&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;viewLink&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;image&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// clear image element&#39;s hoverbar</span>
        menuKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// others...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="custom-match-function" tabindex="-1"><a class="header-anchor" href="#custom-match-function" aria-hidden="true">#</a> Custom match function</h3><p>You can also custom a match function instead of use element type.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> SlateNode<span class="token punctuation">,</span> IDomEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

editorConfig<span class="token punctuation">.</span>hoverbarKeys <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;text&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">match</span><span class="token operator">:</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">,</span> n<span class="token operator">:</span> SlateNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>    <span class="token comment">// TS syntax</span>
        <span class="token comment">// match: (editor, n) =&gt; {                        // JS syntax</span>
            <span class="token comment">// match your node exactly</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        menuKeys<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token operator">...</span> <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// custom your menu keys</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// others...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,14),z=n("You can see "),G={href:"https://github.com/wangeditor-team/wangEditor/blob/master/packages/editor/src/init-default-config/config/hoverbar.ts",target:"_blank",rel:"noopener noreferrer"},U=n("source code"),j=n(" of all default hoverbar keys config."),X=e(`<h2 id="oncreated" tabindex="-1"><a class="header-anchor" href="#oncreated" aria-hidden="true">#</a> onCreated</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IDomEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onCreated</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>   <span class="token comment">// TS syntax</span>
<span class="token comment">// editorConfig.onCreated = (editor) =&gt; {            // JS syntax</span>
    <span class="token comment">// editor created</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="onchange" tabindex="-1"><a class="header-anchor" href="#onchange" aria-hidden="true">#</a> onChange</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IDomEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// TS syntax</span>
<span class="token comment">// editorConfig.onChange = (editor:) =&gt; {             // JS syntax</span>
    <span class="token comment">// editor&#39;s content or selection changed</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;content&#39;</span><span class="token punctuation">,</span> editor<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="ondestroyed" tabindex="-1"><a class="header-anchor" href="#ondestroyed" aria-hidden="true">#</a> onDestroyed</h2>`,5),H=n("You can use "),Q=s("code",null,"editor.destroy()",-1),Z=n(" to destroy editor. see "),$=n("API"),nn=n("."),sn=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IDomEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onDestroyed</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// TS syntax</span>
<span class="token comment">// editorConfig.onDestroyed = (editor) =&gt; {           // JS syntax</span>
    <span class="token comment">// editor destroyed</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="onfocus" tabindex="-1"><a class="header-anchor" href="#onfocus" aria-hidden="true">#</a> onFocus</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IDomEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onFocus</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// TS syntax</span>
<span class="token comment">// editorConfig.onFocus = (editor) =&gt; {           // JS syntax</span>
    <span class="token comment">// editor focused</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="onblur" tabindex="-1"><a class="header-anchor" href="#onblur" aria-hidden="true">#</a> onBlur</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IDomEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

editorConfig<span class="token punctuation">.</span><span class="token function-variable function">onBlur</span> <span class="token operator">=</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// TS syntax</span>
<span class="token comment">// editorConfig.onBlur = (editor) =&gt; {           // JS syntax</span>
    <span class="token comment">// editor blur</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="custompaste" tabindex="-1"><a class="header-anchor" href="#custompaste" aria-hidden="true">#</a> customPaste</h2><p>You can prevent default paste event, redefine your custom paste logic.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IDomEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor&#39;</span>

editorConfig<span class="token punctuation">.</span>customPaste <span class="token operator">=</span> <span class="token punctuation">(</span>editor<span class="token operator">:</span> IDomEditor<span class="token punctuation">,</span> event<span class="token operator">:</span> ClipboardEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// TS syntax</span>
<span class="token comment">// editorConfig.customPaste = (editor, event) =&gt; {                                    // JS syntax</span>

    <span class="token comment">// event is ClipboardEvent type, see https://developer.mozilla.org/zh-CN/docs/Web/API/ClipboardEvent</span>

    <span class="token comment">// const html = event.clipboardData.getData(&#39;text/html&#39;) // get paste html</span>
    <span class="token comment">// const text = event.clipboardData.getData(&#39;text/plain&#39;) // get paste text</span>
    <span class="token comment">// const rtf = event.clipboardData.getData(&#39;text/rtf&#39;) // get paste rtf data (word, wsp...)</span>

    <span class="token comment">// insert your custom text (sync)</span>
    editor<span class="token punctuation">.</span><span class="token function">insertText</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// insert your custom text (async)</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        editor<span class="token punctuation">.</span><span class="token function">insertText</span><span class="token punctuation">(</span><span class="token string">&#39;yy&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

    <span class="token comment">// 1. prevent default paste event.</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token comment">// 2. continue default paste event.</span>
    <span class="token comment">// return true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="customalert" tabindex="-1"><a class="header-anchor" href="#customalert" aria-hidden="true">#</a> customAlert</h2><p>Redefine your custom editor alert.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd&#39;</span>

editorConfig<span class="token punctuation">.</span><span class="token function-variable function">customAlert</span> <span class="token operator">=</span> <span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> t<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>   <span class="token comment">// TS syntax</span>
<span class="token comment">// editorConfig.customAlert = (s, t) =&gt; {                // JS syntax</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="extend-conf" tabindex="-1"><a class="header-anchor" href="#extend-conf" aria-hidden="true">#</a> EXTEND_CONF</h2>`,12),an=n("Use in third-party plugin, like "),en={href:"https://github.com/wangeditor-team/wangEditor-plugin-mention/blob/main/README-en.md",target:"_blank",rel:"noopener noreferrer"},tn=n("mention plugin"),on=n(".");function pn(cn,rn){const o=c("RouterLink"),t=c("ExternalLinkIcon");return l(),i(u,null,[b,s("p",null,[h,a(o,{to:"/en/v5/getting-started.html"},{default:p(()=>[g]),_:1}),f]),y,s("p",null,[v,_,x,w,C,E,I,D,S,a(o,{to:"/en/v5/API.html"},{default:p(()=>[T]),_:1}),L]),P,s("div",Y,[A,J,s("ul",null,[N,s("li",null,[F,s("a",K,[B,a(t)])])])]),M,s("p",null,[R,s("a",V,[O,a(t)]),W]),q,s("p",null,[z,s("a",G,[U,a(t)]),j]),X,s("p",null,[H,Q,Z,a(o,{to:"/en/v5/API.html"},{default:p(()=>[$]),_:1}),nn]),sn,s("p",null,[an,s("a",en,[tn,a(t)]),on])],64)}var un=r(k,[["render",pn],["__file","editor-config.html.vue"]]);export{un as default};

import{_ as l}from"./editor-en.4b2a1435.js";import{_ as r,r as p,o as i,c as u,a as n,b as a,w as e,F as d,d as s,e as c}from"./app.a55af71d.js";const k={},m=n("h1",{id:"getting-started",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),s(" Getting Started")],-1),h=s("If you wanna to use wangEditor in Vue or React, please read this article first, then check "),_=s("this article"),g=s("."),b=n("h2",{id:"create-empty-editor",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-empty-editor","aria-hidden":"true"},"#"),s(" Create Empty Editor")],-1),f=s("You can see "),y={href:"https://www.wangeditor.com/demo/index.html?lang=en",target:"_blank",rel:"noopener noreferrer"},v=s("demo"),w=s(" page source code."),x=c(`<h3 id="import-css-and-define-style" tabindex="-1"><a class="header-anchor" href="#import-css-and-define-style" aria-hidden="true">#</a> Import CSS and define style</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@wangeditor/editor@latest/dist/css/style.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">#editor\u2014wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span> <span class="token comment">/* If you need */</span>
  <span class="token punctuation">}</span>
  <span class="token selector">#toolbar-container</span> <span class="token punctuation">{</span> <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">#editor-container</span> <span class="token punctuation">{</span> <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="define-html-code" tabindex="-1"><a class="header-anchor" href="#define-html-code" aria-hidden="true">#</a> Define Html Code</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor\u2014wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toolbar-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- toolbar --&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- editor --&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,4),q={class:"custom-container tip"},I=n("p",{class:"custom-container-title"},"TIP",-1),E=n("li",null,[s("If you need "),n("strong",null,"full-screen"),s(" function, "),n("code",null,"toolbar-container"),s(" and "),n("code",null,"editor-container"),s(" must have a same parent node.")],-1),C=s("You can separate "),T=n("code",null,"toolbar-container",-1),S=s(" and "),L=n("code",null,"editor-container",-1),N=s(", e.g. "),V={href:"https://www.wangeditor.com/demo/like-qq-doc.html?lang=en",target:"_blank",rel:"noopener noreferrer"},j=s("simulate Google doc editor"),H=s("."),P=c(`<h3 id="import-js-and-create-editor" tabindex="-1"><a class="header-anchor" href="#import-js-and-create-editor" aria-hidden="true">#</a> Import JS and create editor</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@wangeditor/editor@latest/dist/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token punctuation">{</span> createEditor<span class="token punctuation">,</span> createToolbar <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>wangEditor

<span class="token keyword">const</span> editorConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;Type here...&#39;</span><span class="token punctuation">,</span>
    <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">editor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> html <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getHtml</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;editor content&#39;</span><span class="token punctuation">,</span> html<span class="token punctuation">)</span>
      <span class="token comment">// You can sync HTML to &lt;textarea&gt;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token function">createEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;#editor-text-area&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token string">&#39;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> editorConfig<span class="token punctuation">,</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token comment">// or &#39;simple&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> toolbarConfig <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> toolbar <span class="token operator">=</span> <span class="token function">createToolbar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    editor<span class="token punctuation">,</span>
    <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;#editor-toolbar&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> toolbarConfig
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token comment">// or &#39;simple&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,2),B={class:"custom-container tip"},G=n("p",{class:"custom-container-title"},"TIP",-1),R=n("code",null,"mode: 'default'",-1),Y=s(" Integrate all wangEditor functions, see "),z={href:"https://www.wangeditor.com/demo/index.html?lang=en",target:"_blank",rel:"noopener noreferrer"},A=s("demo"),F=n("code",null,"mode: 'simple'",-1),M=s(" Only basic functions, but terse, see "),D={href:"https://www.wangeditor.com/demo/simple-mode.html?lang=en",target:"_blank",rel:"noopener noreferrer"},J=s("demo"),O=n("p",null,"With the simple code above, you will create a basic editor.",-1),W=n("p",null,[n("img",{src:l,alt:""})],-1),K=n("h2",{id:"next-todo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#next-todo","aria-hidden":"true"},"#"),s(" Next Todo")],-1),Q=n("p",null,"If you want a completed editor, you may need to the following work",-1),U=s("Handle content"),X=s(" - Get content, set content, render content"),Z=s("Toolbar config"),$=s(" - Insert a new menu, exclude some menus"),nn=s("Editor config"),sn=s(" - Editor life-cycles, custom "),an=n("strong",null,"paste",-1),tn=s(" event"),en=s("Menu config"),on=s(" - Config colors font-size font-family, config "),pn=n("strong",null,"upload image",-1),cn=s("Editor API"),ln=s(" - Control editor content and session");function rn(un,dn){const t=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u(d,null,[m,n("p",null,[h,a(t,{to:"/en/v5/for-frame.html"},{default:e(()=>[_]),_:1}),g]),b,n("p",null,[f,n("a",y,[v,a(o)]),w]),x,n("div",q,[I,n("ul",null,[E,n("li",null,[C,T,S,L,N,n("a",V,[j,a(o)]),H])])]),P,n("div",B,[G,n("ul",null,[n("li",null,[R,Y,n("a",z,[A,a(o)])]),n("li",null,[F,M,n("a",D,[J,a(o)])])])]),O,W,K,Q,n("ul",null,[n("li",null,[a(t,{to:"/en/v5/content.html"},{default:e(()=>[U]),_:1}),X]),n("li",null,[a(t,{to:"/en/v5/toolbar-config.html"},{default:e(()=>[Z]),_:1}),$]),n("li",null,[a(t,{to:"/en/v5/editor-config.html"},{default:e(()=>[nn]),_:1}),sn,an,tn]),n("li",null,[a(t,{to:"/en/v5/menu-config.html"},{default:e(()=>[en]),_:1}),on,pn]),n("li",null,[a(t,{to:"/en/v5/API.html"},{default:e(()=>[cn]),_:1}),ln])])],64)}var hn=r(k,[["render",rn],["__file","getting-started.html.vue"]]);export{hn as default};

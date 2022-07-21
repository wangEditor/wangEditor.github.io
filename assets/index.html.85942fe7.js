import{_ as c,r as p,o as u,c as r,a as n,b as a,w as o,F as l,e as i,d as s}from"./app.e69b5eec.js";const d={},h=i('<h1 id="\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#\u4F18\u52BF" aria-hidden="true">#</a> \u4F18\u52BF</h1><h2 id="\u5176\u4ED6\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u7684\u95EE\u9898" aria-hidden="true">#</a> \u5176\u4ED6\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u7684\u95EE\u9898</h2><p>\u7F51\u7EDC\u641C\u7D22\u201CWeb \u5BCC\u6587\u672C\u7F16\u8F91\u5668\u201D\u4F60\u4F1A\u5F97\u5230\u5F88\u591A\u7ED3\u679C\uFF0C\u4F8B\u5982\u56FD\u5185\u7684 UEditor kindEditor \uFF0C\u56FD\u5916\u7684 CKEditor TinyMCE Quill ProseMirror Draft Slate \u7B49\u7B49\u3002\u4E5F\u6709\u5F88\u591A\u4EBA\u4F7F\u7528\u8FD9\u4E9B\u7F16\u8F91\u5668\uFF0C\u6216\u8005\u6765\u505A\u4E8C\u6B21\u5F00\u53D1\u3002</p><p>\u4F46\u4ED6\u4EEC\u90FD\u5B58\u5728\u4E0B\u9762\u51E0\u4E2A\u95EE\u9898\uFF08\u6572\u9ED1\u677F\uFF5E\uFF09\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5927\u5927\u5F71\u54CD\u4F60\u7684<strong>\u5F00\u53D1\u6548\u7387\u3001\u5F00\u53D1\u6210\u672C\u548C\u4EA7\u54C1\u7A33\u5B9A\u6027</strong>\u3002</p><h3 id="\u6280\u672F\u8001\u65E7" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u8001\u65E7" aria-hidden="true">#</a> \u6280\u672F\u8001\u65E7</h3><p>\u5982 UEditor KindEditor \uFF0C\u4F9D\u7136\u4F7F\u7528 <code>document.execCommand</code> API \u3002\u8FD9\u5C06\u5927\u5927\u5F71\u54CD\u4EA7\u54C1\u7684\u7A33\u5B9A\u6027\u3001\u6269\u5C55\u6027\u3002</p><p>\u5230\u65F6\u5019\u5565\u5565\u90FD\u5B9E\u73B0\u4E0D\u4E86\uFF0C\u54EA\u513F\u54EA\u513F\u90FD\u6709\u95EE\u9898\uFF0C\u4F1A\u88AB PM \u9119\u89C6\uFF1A\u201C\u4EBA\u5BB6 xxx \u548B\u80FD\u884C\uFF1F\u201D</p><h3 id="\u4E2D\u6587\u4E0D\u53CB\u597D" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u6587\u4E0D\u53CB\u597D" aria-hidden="true">#</a> \u4E2D\u6587\u4E0D\u53CB\u597D</h3><p>\u5982 CKEditor TinyMCE Quill ProseMirror \u7B49\uFF0C\u6CA1\u6709\u5B98\u65B9\u7684\u4E2D\u6587\u6587\u6863\u3002\u8FD9\u5C06\u5927\u5927\u5F71\u54CD\u4F60\u7684\u5F00\u53D1\u6548\u7387\uFF08\u4ECA\u665A\u52A0\u73ED\uFF5E\uFF09</p><p>PS\uFF1A\u82F1\u8BED\u7279\u522B\u7684\uFF0C\u8BF7\u7565\u8FC7\u3002</p><h3 id="\u9700\u8981\u5927\u91CF\u4E8C\u6B21\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u9700\u8981\u5927\u91CF\u4E8C\u6B21\u5F00\u53D1" aria-hidden="true">#</a> \u9700\u8981\u5927\u91CF\u4E8C\u6B21\u5F00\u53D1</h3><p>\u5982 ProseMirror Draft Slate \uFF0C\u4ED6\u4EEC\u867D\u7136\u4E5F\u662F\u5BCC\u6587\u672C\u7F16\u8F91\u5668\uFF0C\u4F46\u4ED6\u4EEC\u4EC5\u4EC5\u662F\u4E00\u4E2A core \u6216\u8005 controller \uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u529F\u80FD\u3002</p><p>\u5927\u91CF\u7684\u4E8C\u6B21\u5F00\u53D1\uFF0C\u4E0D\u4EC5\u4EC5\u4F1A\u5BFC\u81F4\u7814\u53D1\u6210\u672C\u5927\u589E\uFF08\u672C\u6708\u5C01\u95ED\uFF5E\uFF09\uFF0C\u8FD8\u53EF\u80FD\u56E0\u4E3A\u6D4B\u8BD5\u4E0D\u5B8C\u5584\u800C\u51FA\u73B0\u65E0\u5C3D\u7684 bug \uFF0C\u9677\u5165\u6CE5\u6F6D\u3002</p><p>PS\uFF1A\u9664\u975E\u4F60\u4EEC\u6709\u5F3A\u70C8\u7684\u5B9A\u5236\u5F00\u53D1\u9700\u8981\u3002</p><h3 id="\u6709\u6846\u67B6\u7684\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u6709\u6846\u67B6\u7684\u7EA6\u675F" aria-hidden="true">#</a> \u6709\u6846\u67B6\u7684\u7EA6\u675F</h3><p>\u5982 Slate \u548C Draft \uFF0C\u662F\u4F9D\u8D56\u4E8E React \u6846\u67B6\u7684\u3002\u5982\u679C\u4F60\u60F3\u7528\u5230 Vue \u4E2D\uFF0C\u5DE5\u4F5C\u91CF\u548C\u96BE\u5EA6\u662F\u975E\u5E38\u5927\u7684\u3002</p><h3 id="\u65E0\u5B98\u65B9-react-vue-\u7B49\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u65E0\u5B98\u65B9-react-vue-\u7B49\u7EC4\u4EF6" aria-hidden="true">#</a> \u65E0\u5B98\u65B9 React Vue \u7B49\u7EC4\u4EF6</h3><p>\u4E00\u4E9B\u65E0\u6846\u67B6\u4F9D\u8D56\u7684\uFF0C\u5982 ProseMirror \uFF0C\u5982\u679C\u4F60\u8981\u7528\u5230 Vue React \uFF0C\u9700\u8981\u81EA\u5DF1\u5C01\u88C5\u7EC4\u4EF6\u3002</p><h3 id="\u65B0\u4EA7\u54C1\u5C1A\u672A\u7A33\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u65B0\u4EA7\u54C1\u5C1A\u672A\u7A33\u5B9A" aria-hidden="true">#</a> \u65B0\u4EA7\u54C1\u5C1A\u672A\u7A33\u5B9A</h3><p>\u4E0A\u8FF0\u5217\u51FA\u6765\u7684\u7F16\u8F91\u5668\uFF0C\u90FD\u662F\u6BD4\u8F83\u6210\u719F\u7684\u4EA7\u54C1\uFF0C\u7528\u6237\u91CF\u8F83\u5927\u3002\u4F60\u53EF\u80FD\u8FD8\u4F1A\u641C\u5230\u5176\u4ED6\u4EA7\u54C1\uFF0C\u5982\u65B0\u5F00\u53D1\u7684\u3001\u7528\u6237\u91CF\u4E0D\u5927\u7684\u3002<br> \u65E0\u8BBA\u5982\u4F55\uFF0C\u8BF7\u4F60\u614E\u91CD\u9009\u62E9\uFF0C\u56E0\u4E3A\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u7684\u5751\u771F\u7684\u592A\u591A\u4E86\uFF0C\u9700\u8981\u7ECF\u8FC7\u5927\u91CF\u7684\u6D4B\u8BD5\u3001\u4F7F\u7528\u624D\u4F1A\u6162\u6162\u7A33\u5B9A\u3002</p><p>\u9009\u62E9\u7A33\u5B9A\u7684\u4EA7\u54C1\uFF0C\u53EF\u53C2\u8003</p><ul><li>github stars</li><li>npm \u4E0B\u8F7D\u91CF</li><li>npm \u53D1\u5E03\u65F6\u95F4\u548C\u9891\u7387</li><li>\u641C\u7D22\u5F15\u64CE\u7684\u76F8\u5173\u7ED3\u679C\u6570\u91CF</li><li>\u662F\u5426\u6709\u5927\u5382\u80CC\u4E66</li><li>\u662F\u5426\u6709\u5355\u5143\u6D4B\u8BD5 / e2e \u6D4B\u8BD5</li></ul><h2 id="wangeditor-\u7684\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#wangeditor-\u7684\u4F18\u52BF" aria-hidden="true">#</a> wangEditor \u7684\u4F18\u52BF</h2><p>\u4E00\u4E2A\u4EA7\u54C1\u7684\u4EF7\u503C\uFF0C\u5C31\u5728\u4E8E\u89E3\u51B3\u7528\u6237\u7684\u95EE\u9898\uFF0C\u63D0\u9AD8\u6548\u7387\u3001\u964D\u4F4E\u6210\u672C\u3001\u589E\u52A0\u7A33\u5B9A\u6027\u548C\u6269\u5C55\u6027\u3002</p><p>wangEditor \u4E0D\u662F\u4E3A\u4E86\u505A\u800C\u505A\uFF0C\u4E5F\u4E0D\u662F\u5355\u7EAF\u7684\u6A21\u4EFF\u8C01\uFF0C\u800C\u662F\u7ECF\u8FC7\u4E0A\u8FF0\u95EE\u9898\u5206\u6790\u4E4B\u540E\uFF0C\u7ED9\u51FA\u4E00\u4E2A\u7CFB\u7EDF\u7684\u89E3\u51B3\u65B9\u6848\u3002\u65E8\u5728\u771F\u6B63\u53BB\u89E3\u51B3\u7528\u6237\u7684\u95EE\u9898\uFF0C\u4EA7\u51FA\u81EA\u5DF1\u7684\u4EF7\u503C\u3002</p><h3 id="\u4F7F\u7528\u4E3B\u6D41\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E3B\u6D41\u6280\u672F" aria-hidden="true">#</a> \u4F7F\u7528\u4E3B\u6D41\u6280\u672F</h3><p>wangEditor \u4ECE V5 \u7248\u672C\u5F00\u59CB\uFF0C\u6709\u8F83\u5927\u7684\u6280\u672F\u66F4\u65B0\u3002</p><h4 id="_1-\u5347\u7EA7\u4E3A-l1-\u80FD\u529B" tabindex="-1"><a class="header-anchor" href="#_1-\u5347\u7EA7\u4E3A-l1-\u80FD\u529B" aria-hidden="true">#</a> 1. \u5347\u7EA7\u4E3A L1 \u80FD\u529B</h4>',28),k=s("\u5F03\u7528\u4E86 "),_=n("code",null,"document.execCommand",-1),q=s(" API \uFF0C\u4F7F\u7528 "),g={href:"https://www.slatejs.org/",target:"_blank",rel:"noopener noreferrer"},b=s("slate.js"),m=s("\uFF08\u4F46\u4E0D\u4F9D\u8D56 React\uFF09\u4E3A\u5185\u6838\uFF0C\u5347\u7EA7\u4E3A L1 \u80FD\u529B\u3002"),f=n("p",null,"\u8FD9\u4E5F\u662F\u76EE\u524D\u4E3B\u6D41\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u7684\u6280\u672F\u65B9\u6848\uFF0C\u5982\u77E5\u540D\u7684 Quill ProseMirror Draft \u90FD\u5728\u4F7F\u7528\u3002",-1),x=n("h4",{id:"_2-\u4F7F\u7528-vdom",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-\u4F7F\u7528-vdom","aria-hidden":"true"},"#"),s(" 2. \u4F7F\u7528 vdom")],-1),w=s("\u4F7F\u7528 vdom \u6280\u672F\uFF08\u57FA\u4E8E "),v={href:"https://github.com/snabbdom/snabbdom",target:"_blank",rel:"noopener noreferrer"},E=s("snabbdom.js"),L=s(" \uFF09\u505A\u89C6\u56FE\u66F4\u65B0\uFF0Cmodel \u548C view \u5206\u79BB\uFF0C\u589E\u52A0\u7A33\u5B9A\u6027\u3002"),V=n("h4",{id:"_3-\u6269\u5C55\u6027",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-\u6269\u5C55\u6027","aria-hidden":"true"},"#"),s(" 3. \u6269\u5C55\u6027")],-1),P=n("p",null,[s("\u4F7F\u7528\u6269\u5C55\u63D2\u4EF6\u548C\u6A21\u5757\u7684\u673A\u5236\uFF0C\u4FDD\u8BC1"),n("strong",null,"\u6269\u5C55\u6027"),s("\u3002\u672A\u6765\u8FD8\u4F1A\u7EE7\u7EED\u6269\u5C55\u66F4\u591A\u529F\u80FD\u3002")],-1),R=n("p",null,"\u5176\u5B9E\uFF0C\u73B0\u5728 wangEditor \u5185\u7F6E\u7684\u5404\u4E2A\u529F\u80FD\uFF0C\u4E5F\u90FD\u662F\u901A\u8FC7\u6269\u5C55\u63D2\u4EF6\u548C\u6A21\u5757\u7684\u5F62\u5F0F\u642D\u5EFA\u8D77\u6765\u7684\u3002",-1),C=n("h3",{id:"\u4E2D\u6587\u6587\u6863",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E2D\u6587\u6587\u6863","aria-hidden":"true"},"#"),s(" \u4E2D\u6587\u6587\u6863")],-1),I=s("wangEditor \u6709\u8BE6\u7EC6\u7684\u4E2D\u6587\u6587\u6863\uFF0C\u4EE5\u53CA\u4E2D\u6587\u4EA4\u6D41\u73AF\u5883\u3002\u56E0\u4E3A"),S={href:"https://github.com/wangfupeng1988",target:"_blank",rel:"noopener noreferrer"},j=s("\u4F5C\u8005"),M=s("\u5C31\u662F\u56FD\u5185\u7A0B\u5E8F\u5458\u3002"),T=i(`<h3 id="\u53CA\u65F6\u53CD\u9988\u548C\u6C9F\u901A" tabindex="-1"><a class="header-anchor" href="#\u53CA\u65F6\u53CD\u9988\u548C\u6C9F\u901A" aria-hidden="true">#</a> \u53CA\u65F6\u53CD\u9988\u548C\u6C9F\u901A</h3><p>\u53EF\u4EE5\u52A0\u5165 QQ \u7FA4\uFF0C\u4E0E\u5176\u4ED6\u7528\u6237\u3001\u56E2\u961F\u6210\u5458\u4E00\u8D77\u6C9F\u901A\u95EE\u9898\u3002</p><p>\u4E5F\u53EF\u4EE5\u53BB github \u63D0\u4EA4 issue \uFF0C\u56E2\u961F\u90FD\u4F1A\u53CA\u65F6\u53CD\u9988\u6216\u53D7\u7406\u3002</p><h3 id="\u96C6\u6210\u6240\u6709\u529F\u80FD-\u65E0\u9700\u4E8C\u6B21\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210\u6240\u6709\u529F\u80FD-\u65E0\u9700\u4E8C\u6B21\u5F00\u53D1" aria-hidden="true">#</a> \u96C6\u6210\u6240\u6709\u529F\u80FD\uFF0C\u65E0\u9700\u4E8C\u6B21\u5F00\u53D1</h3><p>wangEditor \u5185\u7F6E\u4E86\u6240\u6709\u5E38\u89C1\u7684\u5BCC\u6587\u672C\u64CD\u4F5C\u529F\u80FD\uFF0C\u80FD\u6EE1\u8DB3\u7EDD\u5927\u90E8\u5206\u4F7F\u7528\u9700\u6C42\u3002\u76F4\u63A5\u914D\u7F6E\u4F7F\u7528\u5373\u53EF\uFF0C\u65E0\u9700\u518D\u4E8C\u6B21\u5F00\u53D1\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// wangEditor \u5DF2\u5185\u7F6E 50+ \u83DC\u5355</span>
editor<span class="token punctuation">.</span><span class="token function">getAllMenuKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">[</span>
    <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;underline&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;italic&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;through&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;clearStyle&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;headerSelect&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;header1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;header2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;header3&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;bgColor&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;insertLink&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;editLink&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;unLink&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;viewLink&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;insertImage&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;deleteImage&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;editImage&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;viewImageLink&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;imageWidth30&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;imageWidth50&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;imageWidth100&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;blockquote&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;emotion&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;fontSize&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;fontFamily&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;indent&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;delIndent&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;justifyLeft&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;justifyRight&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;justifyCenter&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;lineHeight&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;redo&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;undo&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;divider&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;codeBlock&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bulletedList&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;numberedList&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;insertTable&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;deleteTable&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;insertTableRow&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;deleteTableRow&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;insertTableCol&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;deleteTableCol&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;tableHeader&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;tableFullWidth&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;insertVideo&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;deleteVideo&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;uploadImage&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;codeSelectLang&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,6),y=s("PS\uFF1A\u540C\u65F6\uFF0CwangEditor \u6709\u4E30\u5BCC\u7684 "),A=s("API"),Q=s(" \u548C\u8DB3\u591F\u7684\u6269\u5C55\u6027\uFF0C\u5141\u8BB8\u4F60"),W=s("\u81EA\u5B9A\u4E49\u5F00\u53D1"),B=s("\u83DC\u5355\u3001\u6A21\u5757\u3001\u63D2\u4EF6\u7B49\u3002"),D=n("h3",{id:"\u5F88\u65B9\u4FBF\u7684\u5E94\u7528\u4E8E-vue-react",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5F88\u65B9\u4FBF\u7684\u5E94\u7528\u4E8E-vue-react","aria-hidden":"true"},"#"),s(" \u5F88\u65B9\u4FBF\u7684\u5E94\u7528\u4E8E Vue React")],-1),F=n("p",null,"wangEditor \u57FA\u4E8E slate \u5185\u6838\u5F00\u53D1\uFF0C\u4F46\u4E0D\u4F9D\u8D56\u4E8E React \uFF0C\u6240\u4EE5\u5B83\u672C\u8EAB\u662F\u65E0\u6846\u67B6\u4F9D\u8D56\u7684\u3002",-1),K=s("\u5E76\u4E14\uFF0C\u6211\u4EEC\u5B98\u65B9\u5C01\u88C5\u4E86 Vue React \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684"),N=s("\u7528\u4E8E Vue React \u7B49\u6846\u67B6"),H=s("\u3002"),U=n("br",null,null,-1),z=s(" \u5176\u4ED6\u6846\u67B6\uFF0C\u6211\u4EEC\u4F1A\u7EE7\u7EED\u652F\u6301\uFF0C\u5927\u5BB6\u4E5F\u53EF\u4EE5\u63D0\u4EA4 issue \u3002"),G=n("h3",{id:"\u8E29\u8FC7-4000-\u4E2A\u5751",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8E29\u8FC7-4000-\u4E2A\u5751","aria-hidden":"true"},"#"),s(" \u8E29\u8FC7 4000 \u4E2A\u5751")],-1),J=s("wangEditor \u5F00\u6E90\u591A\u5E74\uFF0C\u5927\u91CF\u7528\u6237\u4F7F\u7528\u548C\u53CD\u9988\uFF0C\u5DF2\u7ECF\u89E3\u51B3\u4E86"),O={href:"https://github.com/wangeditor-team/wangEditor/issues",target:"_blank",rel:"noopener noreferrer"},X=s("\u5F88\u591A\u95EE\u9898"),Y=s("\u3002\u5728 V5 \u7248\u672C\u6D4B\u8BD5\u8FC7\u7A0B\u4E2D\uFF0C\u4E5F\u8FD9\u4E9B\u95EE\u9898\u8FDB\u884C\u4E86\u91CD\u590D\u6D4B\u8BD5\uFF0C\u6700\u5927\u7A0B\u5EA6\u4FDD\u8BC1\u7A33\u5B9A\u6027\u3002"),Z=n("h3",{id:"\u56E2\u961F\u4F5C\u4E1A-\u6301\u7EED\u8FED\u4EE3\u5347\u7EA7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u56E2\u961F\u4F5C\u4E1A-\u6301\u7EED\u8FED\u4EE3\u5347\u7EA7","aria-hidden":"true"},"#"),s(" \u56E2\u961F\u4F5C\u4E1A\uFF0C\u6301\u7EED\u8FED\u4EE3\u5347\u7EA7")],-1),$=n("p",null,"wangEditor \u65E9\u5DF2\u4E0D\u662F\u4F5C\u8005\u5355\u4EBA\u4F5C\u6218\uFF0C\u6211\u4EEC\u6709\u591A\u4EBA\u56E2\u961F\uFF0C\u4E00\u8D77\u4FEE\u590D bug \u3001\u5347\u7EA7\u529F\u80FD\u3001\u8DDF\u8E2A\u95EE\u9898\u3001\u793E\u533A\u7B54\u7591\u3002",-1);function nn(sn,an){const t=p("ExternalLinkIcon"),e=p("RouterLink");return u(),r(l,null,[h,n("p",null,[k,_,q,n("a",g,[b,a(t)]),m]),f,x,n("p",null,[w,n("a",v,[E,a(t)]),L]),V,P,R,C,n("p",null,[I,n("a",S,[j,a(t)]),M]),T,n("p",null,[y,a(e,{to:"/v5/API.html"},{default:o(()=>[A]),_:1}),Q,a(e,{to:"/v5/development.html"},{default:o(()=>[W]),_:1}),B]),D,F,n("p",null,[K,a(e,{to:"/v5/for-frame.html"},{default:o(()=>[N]),_:1}),H,U,z]),G,n("p",null,[J,n("a",O,[X,a(t)]),Y]),Z,$],64)}var en=c(d,[["render",nn],["__file","index.html.vue"]]);export{en as default};

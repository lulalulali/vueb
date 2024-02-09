<template><div><h1 id="md-extension" tabindex="-1"><a class="header-anchor" href="#md-extension"><span>md extension</span></a></h1>
<div class="language-- line-numbers-mode" data-ext="-" data-title="-"><pre v-pre class="language--"><code>- [主板](#title-2)
  - [cpu](#subtitle-a)
  - [gpu](#subtitle-b)
- [rom](#title-3)
- [ram](#title-3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="custom-anchor" tabindex="-1"><a class="header-anchor" href="#custom-anchor"><span>custom anchor</span></a></h2>
<p>这段文本描述了标题（Headers）在渲染时自动获得锚点链接。通过 markdown.anchor 选项可以配置锚点的渲染方式。</p>
<p>同时，文本还提到了自定义锚点的方法。若想要指定标题的自定义锚标签，而不是使用自动生成的标签，可以在标题后添加一个后缀：</p>
<p>例如</p>
<p><code v-pre>//# 使用自定义锚点 {#my-anchor}</code></p>
<p>这样可以让你将标题链接为 #my-anchor，而不是默认的 #using-custom-anchors。这样做可以使你在文档中链接到特定的标题位置，并使用自定义的锚点标签进行引用。</p>
<h2 id="internal-link" tabindex="-1"><a class="header-anchor" href="#internal-link"><span>internal link</span></a></h2>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code>├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token url">[<span class="token content">Home</span>](<span class="token url">/</span>)</span> <span class="token comment">&lt;!-- sends the user to the root index.md --></span>
<span class="token url">[<span class="token content">foo</span>](<span class="token url">/foo/</span>)</span> <span class="token comment">&lt;!-- sends the user to index.html of directory foo --></span>
<span class="token url">[<span class="token content">foo heading</span>](<span class="token url">./#heading</span>)</span> <span class="token comment">&lt;!-- anchors user to a heading in the foo index file --></span>
<span class="token url">[<span class="token content">bar - three</span>](<span class="token url">../bar/three</span>)</span> <span class="token comment">&lt;!-- you can omit extension --></span>
<span class="token url">[<span class="token content">bar - three</span>](<span class="token url">../bar/three.md</span>)</span> <span class="token comment">&lt;!-- you can append .md --></span>
<span class="token url">[<span class="token content">bar - four</span>](<span class="token url">../bar/four.html</span>)</span> <span class="token comment">&lt;!-- or you can append .html --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码是关于如何在 Markdown 文件中使用相对路径进行链接的示例及解释：</p>
<ul>
<li><code v-pre>[Home](/)</code>: 这会将用户重定向到根目录下的 <code v-pre>index.md</code> 文件。<code v-pre>/</code> 表示网站的根路径。</li>
<li><code v-pre>[foo](/foo/)</code>: 这会将用户重定向到名为 <code v-pre>foo</code> 的目录中的 <code v-pre>index.html</code> 文件。<code v-pre>/foo/</code> 是指向该目录的根。</li>
<li><code v-pre>[foo heading](./#heading)</code>: 这会将用户定位到 <code v-pre>foo</code> 目录中的一个名为 <code v-pre>index.md</code> 的文件，并将页面滚动至 <code v-pre>#heading</code> 这个锚点处的特定标题。</li>
<li><code v-pre>[bar - three](../bar/three)</code>: 这会将用户重定向到 <code v-pre>bar</code> 目录下的 <code v-pre>three.md</code> 文件。<code v-pre>../</code> 表示返回上一级目录。</li>
<li><code v-pre>[bar - three](../bar/three.md)</code>: 同上一行，也会将用户重定向到 <code v-pre>bar</code> 目录下的 <code v-pre>three.md</code> 文件。<code v-pre>.md</code> 扩展名是可选的。</li>
<li><code v-pre>[bar - four](../bar/four.html)</code>: 这会将用户重定向到 <code v-pre>bar</code> 目录下的 <code v-pre>four.html</code> 文件。<code v-pre>.html</code> 扩展名也是可选的。</li>
</ul>
<p>这些示例演示了如何在 Markdown 文件中使用相对路径进行导航和链接，使用户能够方便地在文件之间进行跳转和定位。</p>
<h2 id="external-link" tabindex="-1"><a class="header-anchor" href="#external-link"><span>external link</span></a></h2>
<p>这段描述意味着外部链接（Outbound links，指向其他网站或域名的链接）会自动获得 <code v-pre>target=&quot;_blank&quot; rel=&quot;noreferrer&quot;</code> 的属性。</p>
<ul>
<li><code v-pre>target=&quot;_blank&quot;</code>：这个属性告诉浏览器在新标签页或新窗口打开链接，而不是在当前窗口打开。</li>
<li><code v-pre>rel=&quot;noreferrer&quot;</code>：这个属性告诉浏览器不要向链接的目标地址发送来源（referrer）信息，这样可以保护用户的隐私，防止目标站点获取来源页面的信息。</li>
</ul>
<p>举例来说，如果你在 Markdown 文件中写下一个外部链接：</p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token url">[<span class="token content">Visit OpenAI</span>](<span class="token url">https://openai.com</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在渲染后的 HTML 中，这个链接会自动获得以下属性：</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://openai.com<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noreferrer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Visit OpenAI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这意味着点击这个链接会在新标签页或新窗口打开 OpenAI 网站，并且不会向 OpenAI 网站发送来源信息，保护用户的隐私。</p>
<h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji"><span>emoji</span></a></h2>
<p>🫢
🫣
🤫
🫡
🤐
🤨
😐
😑</p>
<h2 id="默认主题样式" tabindex="-1"><a class="header-anchor" href="#默认主题样式"><span>默认主题样式</span></a></h2>
<p>这段输入展示了在 Markdown 中使用不同类型的信息框（Info Box）或提示框（Tip Box）来突出显示不同类型的内容。这些信息框可以用于在文档中引起注意，提供额外的信息或警告。</p>
<p>Markdown 中的信息框通常使用类似 <code v-pre>::: 类型</code> 的语法，其中类型可以是 <code v-pre>info</code>、<code v-pre>tip</code>、<code v-pre>warning</code>、<code v-pre>danger</code>、<code v-pre>details</code> 等，表示不同的信息提示。</p>
<p>举例来说，这个语法的功能及使用方式可以是这样的：</p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code>::: info
This is an info box.
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这会在渲染时生成一个带有信息图标或特定样式的信息框，里面包含着 &quot;This is an info box.&quot; 这段文字。类似的语法也适用于其他类型的信息框，比如 <code v-pre>tip</code>、<code v-pre>warning</code>、<code v-pre>danger</code> 和 <code v-pre>details</code>，它们分别用于不同的提示、警告、危险警告和详细信息块。</p>
<p>举例来说：</p>
<ul>
<li><code v-pre>::: tip</code> 用于提示信息</li>
<li><code v-pre>::: warning</code> 用于警告信息</li>
<li><code v-pre>::: danger</code> 用于表示危险的警告信息</li>
<li><code v-pre>::: details</code> 用于展示详细的内容，通常可以点击进行展开和收起。</li>
</ul>
<p>这些信息框的使用可以根据具体的 Markdown 解析器或支持库而有所不同。在不同的平台上，这些语法可能会渲染成不同样式的信息框，但通常都会突出显示其中的内容，以便于读者更容易地识别和理解重要信息。
还能加装本条的说明  但必须在配置文件中写入规则</p>
<p>::: info 是信息
这是个信息栏.
:::</p>
<div class="custom-container tip"><p class="custom-container-title">提示什么呢</p>
<p>这是提示栏.</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">警告什么</p>
<p>这是警告.</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">什么危险啊</p>
<p>这是危险.</p>
</div>
<details class="custom-container details"><summary>什么细节</summary>
<p>这是锁起来的细节.</p>
</details>
<h2 id="行突出显示" tabindex="-1"><a class="header-anchor" href="#行突出显示"><span>行突出显示</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token comment">// Highlighted</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Highlighted!
      This line isn't highlighted?,
      but this and the next 2 are.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">motd</span><span class="token operator">:</span> <span class="token string">'VitePress is awesome'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lorem</span><span class="token operator">:</span> <span class="token string">'ipsum'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'Highlighted!'</span> <span class="token comment">// [!code highlight]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="聚焦代码块-聚焦多行是从return的-内第一行起算" tabindex="-1"><a class="header-anchor" href="#聚焦代码块-聚焦多行是从return的-内第一行起算"><span>聚焦代码块  聚焦多行是从return的{内第一行起算</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'Focused!'</span> <span class="token comment">// [!code focus]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> 
      <span class="token comment">// [!code focus:5]</span>
<span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">'Hello, world!'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> acc <span class="token operator">=</span> <span class="token string">'Hello'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="颜色-错误与警告的颜色" tabindex="-1"><a class="header-anchor" href="#颜色-错误与警告的颜色"><span>颜色  错误与警告的颜色</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> 
 <span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">'Hello, world!'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [!code error]</span>
<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// [!code --]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// [!code ++]</span>
<span class="token keyword">const</span> acc <span class="token operator">=</span> <span class="token string">'Hello'</span><span class="token punctuation">;</span><span class="token comment">// [!code warning]</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行号" tabindex="-1"><a class="header-anchor" href="#行号"><span>行号</span></a></h2>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// line-numbers is disabled by default</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// line-numbers is enabled</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// line-numbers is enabled and start from 2</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
<span class="token keyword">const</span> line4 <span class="token operator">=</span> <span class="token string">'This is line 4'</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入代码片段" tabindex="-1"><a class="header-anchor" href="#导入代码片段"><span>导入代码片段</span></a></h2>
<p>是如何运行的??</p>
<h2 id="code-group" tabindex="-1"><a class="header-anchor" href="#code-group"><span>code group</span></a></h2>
<CodeGroup>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'vitepress'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UserConfig<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> UserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vitepress'</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> UserConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="math-equations" tabindex="-1"><a class="header-anchor" href="#math-equations"><span>math equations</span></a></h2>
<p>When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$</p>
<p><strong>Maxwell's equations:</strong></p>
<table>
<thead>
<tr>
<th>equation</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td>$\nabla \cdot \vec{\mathbf{B}}  = 0$</td>
<td>divergence of $\vec{\mathbf{B}}$ is zero</td>
</tr>
<tr>
<td>$\nabla \times \vec{\mathbf{E}}, +, \frac1c, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$</td>
<td>curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$</td>
</tr>
<tr>
<td>$\nabla \times \vec{\mathbf{B}} -, \frac1c, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$</td>
<td><em>wha?</em></td>
</tr>
</tbody>
</table>
<h2 id="图像延迟加载" tabindex="-1"><a class="header-anchor" href="#图像延迟加载"><span>图像延迟加载</span></a></h2>
</CodeGroup>
</div></template>



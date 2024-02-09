<template><div><h2 id="文件未找到的错误" tabindex="-1"><a class="header-anchor" href="#文件未找到的错误"><span>文件未找到的错误</span></a></h2>
<p>这个错误指出在文件 <code v-pre>mymd.md</code> 中引用的图片 <code v-pre>static/static/img/docusaurus.png</code> 找不到。通常这种情况发生于文件引用的路径有误或者图片确实不存在的情况。</p>
<p>要纠正这个问题，可以考虑以下步骤：</p>
<ol>
<li>
<p><strong>检查文件路径</strong>：确认图片路径是否正确。如果在 <code v-pre>mymd.md</code> 文件中有引用到图片，确保路径是相对于 <code v-pre>mymd.md</code> 文件所在位置的正确路径。如果图片的实际路径不在所引用的位置，需要相应地更改路径。</p>
</li>
<li>
<p><strong>确认图片是否存在</strong>：检查 <code v-pre>static/static/img/docusaurus.png</code> 这张图片是否存在于指定的路径中。如果图片路径正确但图片确实不存在，需要将图片放置到正确的路径或者修正引用的路径。</p>
</li>
<li>
<p><strong>检查文件名和文件夹大小写</strong>：在某些操作系统中，文件名和文件夹名的大小写是敏感的。确保文件路径和文件名的大小写与实际情况一致。</p>
</li>
<li>
<p><strong>编辑文档</strong>：如果图片路径和文件都没有问题，可以考虑在文档中编辑图片的引用路径，确保路径正确。在使用相对路径时，确保路径相对于引用它的文档位置。</p>
</li>
</ol>
<p>纠正这个错误需要检查图片引用的路径以及图片本身是否存在，以确保文档能够正确地找到和显示所引用的图片。</p>
<h2 id="文件地址无法被解析" tabindex="-1"><a class="header-anchor" href="#文件地址无法被解析"><span>文件地址无法被解析</span></a></h2>
<p>warn Docs markdown link couldn't be resolved: (./create-a-page.md) in C:\Users\lz185\my-docusaurus-site\docs\mymd.md for version current
这个警告表明在 <code v-pre>mymd.md</code> 文件中引用的链接 <code v-pre>(./create-a-page.md)</code> 无法被解析，可能是因为文件路径的问题或者目标文件确实不存在。</p>
<p>要解决这个问题，可以考虑以下步骤：</p>
<h3 id="_1-检查链接路径" tabindex="-1"><a class="header-anchor" href="#_1-检查链接路径"><span>1. 检查链接路径</span></a></h3>
<ul>
<li>
<p><strong>确保文件存在</strong>：确认被引用的文件 <code v-pre>create-a-page.md</code> 是否确实存在于相对路径指定的位置。如果文件不存在，需要创建该文件或者更正链接路径。</p>
</li>
<li>
<p><strong>路径是否正确</strong>：检查链接路径 <code v-pre>(./create-a-page.md)</code> 是否相对于 <code v-pre>mymd.md</code> 文件的位置。有时路径错误会导致链接无法被解析。确保相对路径是正确的，以正确引用目标文件。</p>
</li>
</ul>
<h3 id="_2-检查文件名大小写" tabindex="-1"><a class="header-anchor" href="#_2-检查文件名大小写"><span>2. 检查文件名大小写</span></a></h3>
<ul>
<li>在某些操作系统中，文件名大小写是敏感的。确保文件名大小写与实际文件名相匹配，包括文件扩展名。</li>
</ul>
<h3 id="_3-检查文件位置" tabindex="-1"><a class="header-anchor" href="#_3-检查文件位置"><span>3. 检查文件位置</span></a></h3>
<ul>
<li>如果你的文件结构发生了变化，可能需要调整链接的相对路径，确保它们指向正确的位置。</li>
</ul>
<h3 id="_4-docusaurus-配置" tabindex="-1"><a class="header-anchor" href="#_4-docusaurus-配置"><span>4. Docusaurus 配置</span></a></h3>
<ul>
<li>检查 Docusaurus 配置文件（<code v-pre>docusaurus.config.js</code> 或 <code v-pre>sidebars.js</code> 等），确认文件是否被正确地添加到文档结构中。有时，配置文件中缺少了某个文件可能导致链接无法被正确解析。</li>
</ul>
<h3 id="_5-清除缓存和重新构建" tabindex="-1"><a class="header-anchor" href="#_5-清除缓存和重新构建"><span>5. 清除缓存和重新构建</span></a></h3>
<ul>
<li>尝试清除 Docusaurus 的缓存并重新构建项目，有时缓存或构建问题会影响链接解析。</li>
</ul>
<p>以上方法可以帮助你解决链接无法解析的问题。通过检查路径、文件名大小写、文件位置和项目配置，你能够更好地定位和解决链接无法解析的原因。</p>
<h2 id="md040-fenced-code-language-fenced-code-blocks-should-have-a-language-specified" tabindex="-1"><a class="header-anchor" href="#md040-fenced-code-language-fenced-code-blocks-should-have-a-language-specified"><span>&quot;MD040/fenced-code-language: Fenced code blocks should have a language specified&quot;</span></a></h2>
<p>这个错误提示是来自 MarkdownLint，指出在你的 Markdown 文件中有一个被 fenced code block（代码块）包裹的部分没有指定编程语言。</p>
<p>解决这个问题很简单，只需在代码块的开始三个反引号后面加上指定的编程语言即可。例如，如果是 JavaScript 代码块，可以这样写：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>`javascript
<span class="token comment">// Your code here</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样做可以告诉 MarkdownLint 针对这段代码使用的是 JavaScript 语言。如果你知道具体的编程语言，可以将 <code v-pre>javascript</code> 替换为相应的语言名（比如 <code v-pre>python</code>、<code v-pre>html</code>、<code v-pre>css</code> 等）。</p>
<p>通过在代码块的开头指定语言，不仅能够消除这个 MarkdownLint 的警告，还可以为阅读者提供更多关于代码块内容的信息。</p>
<h2 id="md009-no-trailing-spaces-trailing-spaces-expected-0-or-2-actual-1-尾随空格" tabindex="-1"><a class="header-anchor" href="#md009-no-trailing-spaces-trailing-spaces-expected-0-or-2-actual-1-尾随空格"><span>&quot;MD009/no-trailing-spaces: Trailing spaces [Expected: 0 or 2; Actual: 1]&quot; 尾随空格</span></a></h2>
<p>这个错误是关于尾随空格（Trailing Spaces）的问题。根据报告，你的文档在某个位置有一个不符合预期的尾随空格。</p>
<ul>
<li><strong>错误描述：</strong> 这个报告指出了在你的文档中第 91 行的第 37 列到第 38 列之间有一个尾随空格。</li>
<li><strong>错误类型：</strong> 这个错误是 MD009 错误，也称为 &quot;no-trailing-spaces&quot;，指出了尾随空格的问题。</li>
</ul>
<p><strong>解决方法：</strong> 你可以通过编辑文档，在错误所在行中删除或调整多余的空格，确保每行末尾没有额外的空格。在大多数情况下，编辑器可以通过设置来自动去除这些尾随空格，以避免这类问题。</p>
<h2 id="md051-link-fragments-link-fragments-should-be-valid-链接不合格" tabindex="-1"><a class="header-anchor" href="#md051-link-fragments-link-fragments-should-be-valid-链接不合格"><span>&quot;MD051/link-fragments: Link fragments should be valid&quot;链接不合格</span></a></h2>
<p>这个错误（MD051）是关于链接片段（Link Fragments）的问题。报告显示在文档的第 6 行的第 5 列到第 30 列之间存在一个无效的链接片段。</p>
<ul>
<li><strong>错误描述：</strong> 这个报告指出了链接中的片段（fragment）存在问题。</li>
<li><strong>错误类型：</strong> MD051 错误，即 &quot;link-fragments&quot;，指出了链接中的片段不合法或无效。</li>
</ul>
<p><strong>解决方法：</strong> 需要检查文档中第 6 行的链接片段，并确保它是一个有效的片段。链接片段通常用于指定页面中的特定部分或锚点位置。合法的链接片段应该符合相关链接的结构，且能正确地跳转到指定的页面内锚点位置。</p>
<p>解决这个问题的方法通常包括：</p>
<ul>
<li>
<p><strong>检查链接片段的格式：</strong> 确保链接片段是正确的，能够指向页面内的有效锚点位置。</p>
</li>
<li>
<p><strong>验证链接的有效性：</strong> 如果可能的话，点击链接并确认它们能够正确地导航到目标页面的指定位置。</p>
</li>
</ul>
<p>此外，提供的外部链接指向了 <code v-pre>https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md051.md</code>，你可以前往这个链接查看更多关于 MD051 错误（link fragments）的详细信息和解决方法。</p>
<h2 id="md033-no-inline-html-inline-html-element-div-内联html的问题" tabindex="-1"><a class="header-anchor" href="#md033-no-inline-html-inline-html-element-div-内联html的问题"><span>&quot;MD033/no-inline-html: Inline HTML [Element: div]&quot; 内联html的问题</span></a></h2>
<p>这个问题（MD033）是关于内联 HTML 的问题。报告指出在你的 Markdown 文件中的第 138 行的第 12 列到第 32 列之间存在内联 HTML 元素 <code v-pre>&lt;div&gt;</code>。</p>
<ul>
<li><strong>错误描述：</strong> 这个报告指出了在 Markdown 文件中使用了内联 HTML 元素 <code v-pre>&lt;div&gt;</code>，而在某些情况下，Markdown 解析器可能不允许内联 HTML 元素的使用。</li>
<li><strong>错误类型：</strong> MD033 错误，也称为 &quot;no-inline-html&quot;，指出了不允许使用内联 HTML 元素的问题。</li>
</ul>
<p><strong>解决方法：</strong> 为了解决这个问题，可以考虑使用 Markdown 的语法来达到相同的效果，而不是直接使用内联的 HTML 元素。具体来说，应该使用 Markdown 提供的标记语言来表示 <code v-pre>&lt;div&gt;</code> 元素的效果。</p>
<p>例如，如果你在 Markdown 中需要创建一个 <code v-pre>div</code> 元素的效果，可以考虑使用 Markdown 提供的其他标记或语法来替代内联 HTML 元素的使用。可能的替代方法包括使用 Markdown 的列表、段落、引用、代码块等语法来替代内联 HTML 元素的使用。</p>
<p>&quot;MD033/no-inline-html: Inline HTML [Element: script]&quot;</p>
<p>这个错误是由MarkdownLint引起的，它指出在Markdown文件中存在内联的HTML代码，其中包含一个<code v-pre>&lt;script&gt;</code>元素。这可能是MarkdownLint配置中的规则，禁止在Markdown文件中使用内联HTML。</p>
<p>要解决这个问题，你可以考虑将内联的HTML代码转移到外部文件，或者根据MarkdownLint的规则禁用特定规则。在这种情况下，错误提示显示的是<code v-pre>MD033/no-inline-html</code>，表明该规则是不允许内联HTML的。你可以通过禁用这个规则来解决问题。</p>
<p>你可以在Markdown文件的顶部添加一个特殊的注释来禁用规则，示例：</p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token comment">&lt;!-- markdownlint-disable MD033 --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加这行注释后，MarkdownLint将忽略<code v-pre>MD033</code>规则，不再报告错误。请确保在了解规则含义的情况下使用此方法，以确保不会破坏Markdown文件的结构和可读性。</p>
<p>这个错误是由MarkdownLint引起的，它指出不应该在Markdown文档中包含内联HTML，特别是 <code v-pre>&lt;script&gt;</code> 元素。</p>
<p>要解决这个问题，你可以将 <code v-pre>&lt;script setup&gt;</code> 中的代码移到一个外部的JavaScript文件中，并在Markdown文档中使用相对路径引用该文件。这样可以避免在Markdown中包含内联HTML。</p>
<p>以下是解决方法的步骤：</p>
<ol>
<li>
<p>将 <code v-pre>&lt;script setup&gt;</code> 中的代码移动到一个名为 <code v-pre>script.js</code> 的外部JavaScript文件中，该文件位于与Markdown文件相同的目录中。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// script.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vitepress'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> site<span class="token punctuation">,</span> theme<span class="token punctuation">,</span> page<span class="token punctuation">,</span> frontmatter <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在Markdown文档中使用相对路径引用该JavaScript文件。</p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code>::: script setup
import './script.js';
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>这样，你就可以避免在Markdown中包含内联HTML，从而解决MarkdownLint错误。</p>
<h2 id="找不到模块-markdown-it-foo-或其相应的类型声明" tabindex="-1"><a class="header-anchor" href="#找不到模块-markdown-it-foo-或其相应的类型声明"><span>找不到模块“markdown-it-foo”或其相应的类型声明</span></a></h2>
<p>npm install markdown-it-foo --save-dev
或
yarn add markdown-it-foo --dev</p>
</div></template>



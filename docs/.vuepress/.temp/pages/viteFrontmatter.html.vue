<template><div><h1 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>frontmatter</span></a></h1>
<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2>
<p>YAML 是 &quot;YAML Ain't Markup Language&quot; 的递归缩写。这是一种人类可读的数据序列化格式，主要用于配置文件和数据交换的格式。YAML 被设计为易于阅读，并且可以直接用于编程语言中的数据结构。 YAML 不是标记语言（Markup Language），因此它的主要目标是强调数据的表现形式的可读性。</p>
<p>在 YAML Frontmatter 中，你可以定义一些元数据，这些元数据会在处理文件时被提取并用于各种用途，比如配置页面标题、日期、作者等。 Frontmatter 通常被包裹在三虚线 <code v-pre>---</code> 之间，如下所示：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> My Page
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2024-01-11</span>
<span class="token key atrule">author</span><span class="token punctuation">:</span> John Doe
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>title</code>、<code v-pre>date</code>、和 <code v-pre>author</code> 是 YAML 格式的键值对，它们构成了 Frontmatter 的一部分。
这句话指的是 VitePress 支持在其所有的 Markdown 文件中使用 YAML frontmatter，并使用 gray-matter 库来解析这个 frontmatter。</p>
<ol>
<li>
<p><strong>YAML Frontmatter：</strong> YAML（YAML Ain't Markup Language）是一种人类可读的数据序列化格式，经常用于配置文件、数据交换、以及文档。在 Markdown 文件中，可以通过 YAML frontmatter 来定义一些元数据，比如配置项、页面标题、日期等。Frontmatter 通常被包裹在三虚线 <code v-pre>---</code> 之间，如下所示：</p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> My Page
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2024-01-11</span>
<span class="token key atrule">customConfig</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> Markdown Content</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>gray-matter：</strong> gray-matter 是一个 JavaScript 库，专门用于解析和提取 Markdown 文件中的 frontmatter。它能够将 Markdown 文件拆分为内容（content）和 frontmatter（metadata），方便程序对它们进行处理。VitePress 使用 gray-matter 来处理 Markdown 文件中的 frontmatter。</p>
</li>
</ol>
<p>因此，上述这句话的意思是，VitePress 允许你在其所有的 Markdown 文件中使用 YAML 格式的 frontmatter，并且它使用 gray-matter 来解析这些 frontmatter，以便在构建或渲染过程中能够方便地访问和处理这些元数据。</p>
<h2 id="其它frontmatter格式" tabindex="-1"><a class="header-anchor" href="#其它frontmatter格式"><span>其它frontmatter格式</span></a></h2>
<p>VitePress 支持 JSON 格式的 frontmatter，你可以使用花括号 <code v-pre>{}</code> 包裹元数据。以下是三个 JSON 格式的 frontmatter 的例子：</p>
<ol>
<li>
<p><strong>基本的 JSON Frontmatter:</strong></p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token punctuation">{</span>
  <span class="token key atrule">"title"</span><span class="token punctuation">:</span> <span class="token string">"My Page"</span><span class="token punctuation">,</span>
  <span class="token key atrule">"date"</span><span class="token punctuation">:</span> <span class="token string">"2024-01-11"</span><span class="token punctuation">,</span>
  <span class="token key atrule">"author"</span><span class="token punctuation">:</span> <span class="token string">"Jane Doe"</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> Markdown Content</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>包含数组的 JSON Frontmatter:</strong></p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token punctuation">{</span>
  <span class="token key atrule">"title"</span><span class="token punctuation">:</span> <span class="token string">"My Page"</span><span class="token punctuation">,</span>
  <span class="token key atrule">"tags"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"programming"</span><span class="token punctuation">,</span> <span class="token string">"web development"</span><span class="token punctuation">,</span> <span class="token string">"vitepress"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token key atrule">"categories"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"tech"</span><span class="token punctuation">,</span> <span class="token string">"tutorials"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> Markdown Content</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>嵌套的 JSON Frontmatter:</strong></p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token punctuation">{</span>
  <span class="token key atrule">"title"</span><span class="token punctuation">:</span> <span class="token string">"My Page"</span><span class="token punctuation">,</span>
  <span class="token key atrule">"metadata"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">"date"</span><span class="token punctuation">:</span> <span class="token string">"2024-01-11"</span><span class="token punctuation">,</span>
    <span class="token key atrule">"author"</span><span class="token punctuation">:</span> <span class="token string">"John Doe"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">"tags"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"programming"</span><span class="token punctuation">,</span> <span class="token string">"web development"</span><span class="token punctuation">,</span> <span class="token string">"vitepress"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> Markdown Content</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>在这些例子中，frontmatter 部分都是用 JSON 格式表示的，而且都被包裹在 <code v-pre>---</code> 虚线之间。这样的格式使得你可以更灵活地组织和表示你的元数据。无论是使用 YAML 还是 JSON，VitePress 都能够正确地解析 frontmatter 中的元数据。</p>
<p>titleTemplate标题模板</p>
<p>head头
Default Theme Only仅默认主题
layout布局
hero英雄
features特征
navbar导航栏
sidebar边栏
aside旁边
outline大纲
lastUpdated最近更新时间
editLink编辑链接
footer页脚
pageClass页面类</p>
<h2 id="description描述" tabindex="-1"><a class="header-anchor" href="#description描述"><span>description描述</span></a></h2>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">"This is a description for this specific page."</span></span>
<span class="token punctuation">---</span></span>
<span class="token title important"><span class="token punctuation">#</span> Page Content</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，这个页面具有自己独特的描述，而不是使用站点级别的描述。搜索引擎和其他工具可以使用这个描述来更好地了解页面的内容。</p>
<h2 id="head" tabindex="-1"><a class="header-anchor" href="#head"><span>head</span></a></h2>
<p>在 VitePress 中，<code v-pre>head</code> 是页面的元数据之一，用于指定要在页面的 <code v-pre>&lt;head&gt;</code> 部分中插入的额外标签。这允许你向页面添加自定义的 <code v-pre>&lt;meta&gt;</code>、<code v-pre>&lt;link&gt;</code>、<code v-pre>&lt;script&gt;</code> 等标签，以满足特定需求，比如添加网站图标、引入外部样式表或脚本等。</p>
<p>以下是一些马上可以运行的例子：</p>
<ol>
<li>添加自定义图标：</li>
</ol>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token key atrule">rel</span><span class="token punctuation">:</span> <span class="token string">'icon'</span><span class="token punctuation">,</span> <span class="token key atrule">href</span><span class="token punctuation">:</span> <span class="token string">'/custom-icon.ico'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="token punctuation">---</span></span>
<span class="token title important"><span class="token punctuation">#</span> Page Content</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.引入外部样式表：</p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token key atrule">rel</span><span class="token punctuation">:</span> <span class="token string">'stylesheet'</span><span class="token punctuation">,</span> <span class="token key atrule">href</span><span class="token punctuation">:</span> <span class="token string">'https://example.com/custom-style.css'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="token punctuation">---</span></span>
<span class="token title important"><span class="token punctuation">#</span> Page Content</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.插入自定义 JavaScript：</p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">head</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">[</span><span class="token string">'script'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token key atrule">src</span><span class="token punctuation">:</span> <span class="token string">'/custom-script.js'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="token punctuation">---</span></span>
<span class="token title important"><span class="token punctuation">#</span> Page Content</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些例子中，<code v-pre>head</code> 字段是一个数组，每个元素是一个包含两个元素的数组，第一个元素是标签类型，第二个元素是包含标签属性的对象。这些标签将被添加到页面的 <code v-pre>&lt;head&gt;</code> 部分。你可以根据需要灵活使用这个功能来自定义页面的头部标签。</p>
<h2 id="aside" tabindex="-1"><a class="header-anchor" href="#aside"><span>aside</span></a></h2>
<p>将此值设置为 false 可禁用侧边栏容器。
将此值设置为 true 会将侧边栏渲染到右侧。
将此值设置为 left 会将侧边栏渲染到左侧。</p>
<h2 id="outline" tabindex="-1"><a class="header-anchor" href="#outline"><span>outline</span></a></h2>
<p>上面的说明是关于 VitePress 中的 <code v-pre>outline</code> 配置项，用于指定大纲（outline）中显示的标题级别。这个配置项可以在页面级别配置中使用，并且如果设置了，会覆盖站点级的配置（即 <code v-pre>config.themeConfig.outline.level</code>）。</p>
<p>具体解释:</p>
<ul>
<li>
<p><code v-pre>类型：number | [number, number] | 'deep' | false</code>：说明了 <code v-pre>outline</code> 的值可以是一个数字、数字范围的数组、字符串 <code v-pre>'deep'</code> 或者 <code v-pre>false</code>。</p>
</li>
<li>
<p><code v-pre>默认值：2</code>：如果未设置，大纲默认显示到标题级别 2。</p>
</li>
</ul>
<p>以下是一些简单的例子：</p>
<ol>
<li>设置大纲显示到标题级别 3：</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> page
<span class="token key atrule">outline</span><span class="token punctuation">:</span> <span class="token number">3</span>
<span class="token punctuation">---</span>
<span class="token comment"># Page Content</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.设置大纲显示到标题级别 4 到 6：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> page
<span class="token key atrule">outline</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token punctuation">---</span>
<span class="token comment"># Page Content</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.设置大纲显示到最深的标题级别：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> page
<span class="token key atrule">outline</span><span class="token punctuation">:</span> <span class="token string">'deep'</span>
<span class="token punctuation">---</span>
<span class="token comment"># Page Content</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.禁用大纲：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> page
<span class="token key atrule">outline</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token punctuation">---</span>
<span class="token comment"># Page Content</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以尝试运行这些例子，以查看它们在页面中的效果。
注意：大纲指的是本页大纲 即右边本页栏 数字2就是展示2级纲  3就是三级的纲</p>
<h2 id="fm中的editlink和footer和pageclass都是开关语句" tabindex="-1"><a class="header-anchor" href="#fm中的editlink和footer和pageclass都是开关语句"><span>fm中的editlink和footer和pageclass都是开关语句</span></a></h2>
</div></template>



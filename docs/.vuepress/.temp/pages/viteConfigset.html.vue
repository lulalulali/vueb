<template><div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p><code v-pre>vite</code> 是 VitePress 中的一个配置选项，允许你传递原始的 Vite 配置给内部的 Vite 开发服务器或打包工具。这个选项允许你对 Vite 进行更细致的配置，以满足特定的开发或生产需求。</p>
<p>举例来说，如果你想要修改 Vite 的一些默认行为，比如更改默认的端口号、配置自定义插件、或者进行其他定制化的配置，你可以这样使用：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">vite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 自定义 Vite 配置</span>
    <span class="token comment">// 这里可以传递所有 Vite 支持的选项，比如修改端口号、配置插件等</span>
    <span class="token comment">// 详细配置可参考 Vite 官方文档：https://vitejs.dev/config/</span>
    <span class="token comment">// 例如修改默认端口号为 8080</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 自定义插件等其他配置...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，<code v-pre>vite</code> 配置项允许你传递任何符合 Vite 配置的选项给内部的 Vite 实例，从而定制 Vite 的行为以满足项目的需求。这样你可以更灵活地配置 Vite，例如修改开发服务器的端口号、添加自定义插件或中间件等。详细的配置选项可以参考 Vite 的官方文档。</p>
<h2 id="配置是否正确加载" tabindex="-1"><a class="header-anchor" href="#配置是否正确加载"><span>配置是否正确加载</span></a></h2>
<p>你可以通过一些方法来确认 VitePress 是否正确加载了 <code v-pre>vitepress/config.js</code> 文件的配置：</p>
<ol>
<li>
<p><strong>重启服务器</strong>：在更改配置后，重启 VitePress 的开发服务器。在终端中停止运行的 VitePress 服务，然后重新运行，确保它能够读取新的配置文件。</p>
</li>
<li>
<p><strong>检查控制台输出</strong>：当 VitePress 服务启动时，通常会在终端或命令行中输出一些信息，包括是否成功加载了配置文件。查看终端输出，确认是否有关于配置文件加载的信息。</p>
</li>
<li>
<p><strong>查看页面</strong>：在浏览器中查看 VitePress 生成的页面，检查导航栏、侧边栏等页面元素是否与你在 <code v-pre>vitepress/config.js</code> 中配置的内容相匹配。检查页面是否显示了你配置的导航链接或其他定制内容。</p>
</li>
<li>
<p><strong>日志文件</strong>：VitePress 可能会生成日志文件或记录服务运行信息。查看日志文件，可能会有关于加载配置的信息或其他有用的信息。</p>
</li>
<li>
<p><strong>调试工具</strong>：使用浏览器的开发者工具（比如 Chrome DevTools）检查页面元素，确认导航栏、侧边栏等元素是否按照你的配置正确显示。</p>
</li>
</ol>
<p>通过以上方法，你可以验证 VitePress 是否成功加载了配置文件并按照你的预期进行了设置。如果你仍然遇到问题，可以提供更多细节，我会尽力帮助你解决。</p>
<h2 id="vitepress-config-js-文件是用来配置-vitepress-站点的-它允许你自定义许多方面-包括但不限于以下内容" tabindex="-1"><a class="header-anchor" href="#vitepress-config-js-文件是用来配置-vitepress-站点的-它允许你自定义许多方面-包括但不限于以下内容"><span><code v-pre>.vitepress/config.js</code> 文件是用来配置 VitePress 站点的，它允许你自定义许多方面，包括但不限于以下内容</span></a></h2>
<h3 id="主题配置-themeconfig" tabindex="-1"><a class="header-anchor" href="#主题配置-themeconfig"><span>主题配置 (themeConfig)</span></a></h3>
<ul>
<li><strong>导航栏 (nav)</strong>: 设置顶部导航栏的链接。</li>
<li><strong>侧边栏 (sidebar)</strong>: 配置侧边栏内容，指定各个页面的侧边栏链接。</li>
<li><strong>搜索框 (search)</strong>: 配置搜索功能，指定搜索框的位置和搜索功能的行为。</li>
<li><strong>最后更新时间 (lastUpdated)</strong>: 显示页面的最后更新时间。</li>
<li><strong>页面标题 (pageTitle)</strong>: 设置页面标题的模板。</li>
</ul>
<h3 id="markdown-配置" tabindex="-1"><a class="header-anchor" href="#markdown-配置"><span>Markdown 配置</span></a></h3>
<ul>
<li><strong>Markdown 配置 (markdown)</strong>: 自定义 Markdown 渲染器的配置，例如设置代码块的行号等。</li>
</ul>
<h3 id="语言配置-locales" tabindex="-1"><a class="header-anchor" href="#语言配置-locales"><span>语言配置 (locales)</span></a></h3>
<ul>
<li><strong>多语言支持 (locales)</strong>: 如果你的站点需要多语言支持，你可以配置不同语言的页面内容。</li>
</ul>
<h3 id="插件配置-plugins" tabindex="-1"><a class="header-anchor" href="#插件配置-plugins"><span>插件配置 (plugins)</span></a></h3>
<ul>
<li><strong>插件配置 (plugins)</strong>: 配置并使用 VitePress 插件来增强站点的功能，比如 Google Analytics 插件、Markdown 插件等。</li>
</ul>
<h3 id="网站元数据" tabindex="-1"><a class="header-anchor" href="#网站元数据"><span>网站元数据</span></a></h3>
<ul>
<li><strong>标题 (title)</strong>: 设置站点的标题。</li>
<li><strong>描述 (description)</strong>: 设置站点的描述。</li>
<li><strong>基本路径 (base)</strong>: 设置站点的基本路径，影响站点部署在子路径的情况。</li>
</ul>
<h3 id="自定义页面" tabindex="-1"><a class="header-anchor" href="#自定义页面"><span>自定义页面</span></a></h3>
<ul>
<li><strong>首页 (home)</strong>: 设置站点的首页路径。</li>
<li><strong>404 页面 (notFound)</strong>: 自定义 404 页面的路径。</li>
</ul>
<h3 id="其他配置" tabindex="-1"><a class="header-anchor" href="#其他配置"><span>其他配置</span></a></h3>
<ul>
<li><strong>别名 (alias)</strong>: 设置别名来简化导入路径。</li>
<li><strong>文件目录 (dirs)</strong>: 配置自定义文件目录。</li>
</ul>
<p>以上列出的配置仅是其中的一部分，<code v-pre>.vitepress/config.js</code> 允许你配置的选项很多，你可以根据需要和你的站点特性进行自定义配置，以满足项目的需求并定制化你的 VitePress 网站。</p>
<h3 id="lang语句" tabindex="-1"><a class="header-anchor" href="#lang语句"><span>lang语句</span></a></h3>
<p>当你在文档或网页中使用 <code v-pre>lang</code> 语句时，你可以指定不同的语言，以适应特定的语言环境和需求。以下是几个示例：</p>
<ol>
<li>
<p><code v-pre>lang: 'zh-CN'</code>：指定文档或网页的主要语言为中文（简体中文）。</p>
</li>
<li>
<p><code v-pre>lang: 'es-ES'</code>：表示文档或网页的主要语言是西班牙语（西班牙）。</p>
</li>
<li>
<p><code v-pre>lang: 'fr-FR'</code>：将文档或网页的主要语言设置为法语（法国）。</p>
</li>
<li>
<p><code v-pre>lang: 'ja-JP'</code>：用于指定文档或网页的主要语言为日语（日本）。</p>
</li>
</ol>
<p>这些语句用于标识文档的主要语言，以便浏览器、搜索引擎和其他工具能够正确地处理和呈现内容。它有助于提高文档的可访问性和全球适用性。</p>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>description</span></a></h2>
<p>这段代码 <code v-pre>export default { description: 'A VitePress site' }</code> 导出的对象包含一个 <code v-pre>description</code> 属性。在 VitePress 中，这个属性会被用作页面 HTML 中的 <code v-pre>&lt;meta&gt;</code> 标签的描述（description）属性的内容。</p>
<p>在 HTML 中，<code v-pre>&lt;meta&gt;</code> 标签通常用于提供关于文档的元数据。其中，<code v-pre>description</code> 属性用于提供对文档的简短描述。这样的描述通常会在搜索引擎结果中显示，帮助用户了解页面的内容。</p>
<p>例如，渲染后的 HTML 可能如下所示：</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 其他头部内容... --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A VitePress site<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 其他&lt;meta>标签... --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 页面内容... --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>&lt;meta&gt;</code> 标签的 <code v-pre>name</code> 属性设置为 &quot;description&quot;，而 <code v-pre>content</code> 属性则设置为你在配置中定义的描述内容，即 'A VitePress site'。</p>
<p>这样，当搜索引擎抓取并索引你的网页时，它们可以使用这个描述信息来生成搜索结果的摘要，帮助用户更好地理解页面的内容。</p>
<h2 id="head中添加谷歌字体的确认方法" tabindex="-1"><a class="header-anchor" href="#head中添加谷歌字体的确认方法"><span>head中添加谷歌字体的确认方法</span></a></h2>
<p>要确认网页是否成功加载上述代码添加的链接，你可以使用浏览器的开发者工具进行检查。以下是一些步骤：</p>
<ol>
<li>
<p>打开你的网页，右键点击页面上的任何元素，然后选择“检查”或“审查元素”（Inspect）。</p>
</li>
<li>
<p>在开发者工具中，切换到“网络”（Network）选项卡。</p>
</li>
<li>
<p>刷新页面。</p>
</li>
<li>
<p>在网络请求列表中，你应该能够看到与你添加的链接相关的请求。在这个例子中，你应该能够看到与 <code v-pre>https://fonts.googleapis.com</code> 和 <code v-pre>https://fonts.gstatic.com</code> 相关的预连接请求，以及与字体样式表 <code v-pre>https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap</code> 相关的请求。</p>
</li>
<li>
<p>确保这些请求的状态码为 200（成功），并且没有其他错误。</p>
</li>
</ol>
<p>如果所有这些链接请求都成功，并且没有出现错误，那么你可以确认网页成功加载了上述代码中添加的链接。如果有错误，开发者工具通常会提供有关错误的详细信息，以帮助你诊断和解决问题。</p>
<h2 id="检查是否成功注册service-worker" tabindex="-1"><a class="header-anchor" href="#检查是否成功注册service-worker"><span>检查是否成功注册service worker</span></a></h2>
<p>上面的代码看起来是为了注册 Service Worker，用于实现网页的离线支持等功能。要确认这段代码是否正常起作用，你可以按照以下步骤进行检查：</p>
<ol>
<li>
<p>打开你的网页。</p>
</li>
<li>
<p>在浏览器中右键点击页面上的任何元素，然后选择“检查”或“审查元素”（Inspect）。</p>
</li>
<li>
<p>在开发者工具中，切换到“控制台”（Console）选项卡。</p>
</li>
<li>
<p>如果 Service Worker 注册成功，你应该能够在控制台中看到类似的消息，表明 Service Worker 注册已经完成：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code>
Service Worker registration successful <span class="token keyword">with</span> scope: <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">Service Worker registration failed</span><span class="token punctuation">:</span> <span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这些消息将告诉你注册是否成功以及注册的范围。</p>
</li>
<li>
<p>如果 Service Worker 注册失败，控制台中可能会提供有关失败原因的详细信息。你可以根据这些信息来调试并解决问题。</p>
</li>
</ol>
<p>确保你的网页在一个支持 Service Worker 的环境中运行，如在 HTTPS 协议下或 localhost。此外，检查 <code v-pre>/sw.js</code> 文件是否存在且包含正确的 Service Worker 代码。</p>
<p>通过上述步骤，你应该能够确认代码是否成功注册 Service Worker。</p>
<h2 id="要使上面的-service-worker-注册代码正常运行-需要确保以下几个方面的设置" tabindex="-1"><a class="header-anchor" href="#要使上面的-service-worker-注册代码正常运行-需要确保以下几个方面的设置"><span>要使上面的 Service Worker 注册代码正常运行，需要确保以下几个方面的设置</span></a></h2>
<ol>
<li>
<p><strong>HTTPS 协议：</strong> Service Workers要求在 HTTPS 协议下运行。确保你的网页是通过 HTTPS 访问的。</p>
</li>
<li>
<p><strong>正确的文件路径：</strong> 确保 <code v-pre>/sw.js</code> 文件存在，并且路径是正确的。这个路径是相对于你网站的根目录的，确保它能够正确找到并注册 Service Worker。</p>
</li>
<li>
<p><strong>Service Worker 代码：</strong> 确保 <code v-pre>/sw.js</code> 文件中包含正确的 Service Worker 代码。Service Worker 的代码应该负责缓存你需要的资源，以便在离线时提供服务。</p>
</li>
<li>
<p><strong>浏览器支持：</strong> 确保你的浏览器支持 Service Worker。大多数现代浏览器都支持 Service Worker，但一些旧版本或不支持的浏览器可能会导致问题。</p>
</li>
<li>
<p><strong>页面作用域：</strong> Service Worker 注册的范围需要正确设置。通常情况下，你可以将 Service Worker 注册到网站的根目录，如 <code v-pre>/</code>。</p>
</li>
</ol>
<p>确保满足上述条件，并在浏览器控制台查看是否有任何与 Service Worker 相关的错误或成功消息。如果有错误消息，它们将提供有关问题的详细信息，帮助你调试和解决问题。</p>
<h2 id="config-resolution" tabindex="-1"><a class="header-anchor" href="#config-resolution"><span>config resolution</span></a></h2>
<p>配置文件总是从 root/.vitepress/config.ext 解析，其中 root是 VitePress 项目根目录，[ext] 是支持的文件扩展名之一。开箱即用地支持 TypeScript。支持的扩展名包括 .js、.ts、.mjs 和 .mts</p>
<h2 id="如何主题配置导航栏" tabindex="-1"><a class="header-anchor" href="#如何主题配置导航栏"><span>如何主题配置导航栏</span></a></h2>
<p>在 VitePress 的 <code v-pre>config.js</code> 中，要配置主题以定制导航栏，你需要使用 <code v-pre>themeConfig</code> 中的 <code v-pre>nav</code> 属性。以下是一个示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 链接到首页</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Guide'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 链接到指定页面</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'External'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'https://external-link.com'</span> <span class="token punctuation">}</span> <span class="token comment">// 链接到外部页面</span>
      <span class="token comment">// 可以继续添加其他导航链接</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例展示了如何配置主题的导航栏。<code v-pre>nav</code> 属性是一个数组，数组中的每个对象代表导航栏中的一个链接。每个链接对象有两个属性：</p>
<ul>
<li><code v-pre>text</code>：显示在导航栏中的文本。</li>
<li><code v-pre>link</code>：链接的目标路径，可以是相对路径（指向项目中的某个页面）或绝对路径（指向外部链接）。</li>
</ul>
<p>在这个示例中：</p>
<ul>
<li><code v-pre>Home</code> 链接到项目的根路径。</li>
<li><code v-pre>Guide</code> 链接到项目中的 <code v-pre>/guide/</code> 路径。</li>
<li><code v-pre>External</code> 链接到一个外部页面 <code v-pre>https://external-link.com</code>。</li>
</ul>
<p>你可以根据需要添加更多的导航链接，每个链接都是一个对象，配置其对应的文本和目标路径即可。</p>
<h2 id="config-的js和ts同时出现" tabindex="-1"><a class="header-anchor" href="#config-的js和ts同时出现"><span>config 的js和ts同时出现</span></a></h2>
<p>不可以 会冲突 只保留一种</p>
<h2 id="建议在配置文件中使用-es-模块语法" tabindex="-1"><a class="header-anchor" href="#建议在配置文件中使用-es-模块语法"><span>建议在配置文件中使用 ES 模块语法</span></a></h2>
<p>ES（ECMAScript）模块语法是 JavaScript 中用于模块化编程的一种标准。它允许开发者将代码分割成不同的模块，每个模块可以导出（export）特定功能，并在其他地方引入（import）这些功能。</p>
<p>下面是三个例子，说明了ES模块语法的用法：</p>
<h3 id="_1-导出和引入变量-函数" tabindex="-1"><a class="header-anchor" href="#_1-导出和引入变量-函数"><span>1. 导出和引入变量/函数</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 模块A：export.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'Alice'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 模块B：import.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> greet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./export.js'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 'Alice'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 'Hello, Alice!'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>export.js</code>模块导出了一个常量<code v-pre>name</code>和一个函数<code v-pre>greet()</code>。在<code v-pre>import.js</code>模块中，使用<code v-pre>import</code>语法引入了这些导出的变量和函数，然后可以在<code v-pre>import.js</code>中使用它们。</p>
<h3 id="_2-默认导出和引入" tabindex="-1"><a class="header-anchor" href="#_2-默认导出和引入"><span>2. 默认导出和引入</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 模块C：defaultExport.js</span>
<span class="token keyword">const</span> defaultGreeting <span class="token operator">=</span> <span class="token string">'Hi there!'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> defaultGreeting<span class="token punctuation">;</span>

<span class="token comment">// 模块D：importDefault.js</span>
<span class="token keyword">import</span> defaultGreeting <span class="token keyword">from</span> <span class="token string">'./defaultExport.js'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>defaultGreeting<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 'Hi there!'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>defaultExport.js</code>模块默认导出了一个常量<code v-pre>defaultGreeting</code>。在<code v-pre>importDefault.js</code>模块中，使用<code v-pre>import</code>语法并指定<code v-pre>default</code>关键字，直接导入了<code v-pre>defaultExport.js</code>模块的默认导出。</p>
<h3 id="_3-模块间相互引用" tabindex="-1"><a class="header-anchor" href="#_3-模块间相互引用"><span>3. 模块间相互引用</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 模块E：moduleOne.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> greet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./export.js'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">greetTwice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 模块F：moduleTwo.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> greetTwice <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./moduleOne.js'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greetTwice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 'Hello, Alice! Hello, Alice!'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>moduleOne.js</code>模块引入了<code v-pre>export.js</code>模块中导出的<code v-pre>greet</code>函数，并在自己的<code v-pre>greetTwice()</code>函数中调用了两次<code v-pre>greet()</code>，然后将结果导出。<code v-pre>moduleTwo.js</code>模块引入了<code v-pre>moduleOne.js</code>模块导出的<code v-pre>greetTwice()</code>函数，并在控制台输出了结果。</p>
<p>ES模块语法使得 JavaScript 中的模块化更加清晰和灵活，允许开发者组织和管理代码，提高了可维护性和重用性。</p>
<h3 id="是一种调用-从其它地方调用制造好的功能-先进口-后出口-先import-后export" tabindex="-1"><a class="header-anchor" href="#是一种调用-从其它地方调用制造好的功能-先进口-后出口-先import-后export"><span>是一种调用，从其它地方调用制造好的功能  先进口 后出口 先import 后export</span></a></h3>
<h2 id="站点配置" tabindex="-1"><a class="header-anchor" href="#站点配置"><span>站点配置</span></a></h2>
<h3 id="type-headconfig" tabindex="-1"><a class="header-anchor" href="#type-headconfig"><span>type HeadConfig =</span></a></h3>
<h4 id="这段代码是-typescript-中的类型定义。它定义了一个名为-headconfig-的联合类型-该类型可以是两种不同结构的元组之一" tabindex="-1"><a class="header-anchor" href="#这段代码是-typescript-中的类型定义。它定义了一个名为-headconfig-的联合类型-该类型可以是两种不同结构的元组之一"><span>这段代码是 TypeScript 中的类型定义。它定义了一个名为 <code v-pre>HeadConfig</code> 的联合类型，该类型可以是两种不同结构的元组之一</span></a></h4>
<ol>
<li>
<p><code v-pre>[string, Record&lt;string, string&gt;]</code>: 这个元组包含两个元素。第一个元素是一个字符串，第二个元素是一个键值对对象，其中键和值都是字符串类型的数据。这种结构可能用于表示配置信息，例如某种数据的头部配置，其中字符串可能是配置的名称，而对象则是相关配置项及其对应的值。</p>
</li>
<li>
<p><code v-pre>[string, Record&lt;string, string&gt;, string]</code>: 这个元组包含三个元素。前两个元素的含义与上面相同，第三个元素是一个字符串。这种结构可能表示一个带有额外信息的头部配置，其中第三个字符串可能是与配置相关的额外描述或标识。</p>
</li>
</ol>
<p>这种类型定义可以在 TypeScript 中用于声明变量或函数参数的类型，以确保代码中使用的数据结构符合预期的格式，有助于提高代码的可读性和可维护性。</p>
<p>在实际应用中，这种类型定义可以用于表示各种配置信息或数据结构，例如在一个前端应用中，表示不同组件或模块的配置；或者在后端中，表示请求的特定参数结构。</p>
<p>类似的例子可能涉及到不同类型的配置信息或元数据的描述。例如，表示不同类型的用户配置，文件的元数据，或者是系统中不同组件的设置等等。</p>
<p>当我们定义 <code v-pre>HeadConfig</code> 类型时，我们考虑到它可以用于表示具有不同配置方式的数据。这是一些示例，展示了在不同情境下如何使用 <code v-pre>HeadConfig</code> 类型：</p>
<h3 id="_1-http-请求头部配置" tabindex="-1"><a class="header-anchor" href="#_1-http-请求头部配置"><span>1. HTTP 请求头部配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">HeadConfig</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span><span class="token punctuation">]</span>
  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 示例：表示不同类型的请求头部配置</span>
<span class="token keyword">const</span> headersConfig1<span class="token operator">:</span> HeadConfig <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> headersConfig2<span class="token operator">:</span> HeadConfig <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Authorization'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">'Authorization'</span><span class="token operator">:</span> <span class="token string">'Bearer &lt;token>'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'Bearer token'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-组件配置" tabindex="-1"><a class="header-anchor" href="#_2-组件配置"><span>2. 组件配置</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">HeadConfig</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span><span class="token punctuation">]</span>
  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 示例：表示不同组件的配置</span>
<span class="token keyword">const</span> componentConfig1<span class="token operator">:</span> HeadConfig <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Button'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">'color'</span><span class="token operator">:</span> <span class="token string">'red'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> componentConfig2<span class="token operator">:</span> HeadConfig <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Dropdown'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">'options'</span><span class="token operator">:</span> <span class="token string">'option1, option2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'Dropdown with options'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-文件元数据" tabindex="-1"><a class="header-anchor" href="#_3-文件元数据"><span>3. 文件元数据</span></a></h3>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">HeadConfig</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span><span class="token punctuation">]</span>
  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 示例：文件的元数据配置</span>
<span class="token keyword">const</span> fileMetadata1<span class="token operator">:</span> HeadConfig <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Image'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">'resolution'</span><span class="token operator">:</span> <span class="token string">'1024x768'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fileMetadata2<span class="token operator">:</span> HeadConfig <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Audio'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">'bitrate'</span><span class="token operator">:</span> <span class="token string">'320kbps'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'High-quality audio'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些示例展示了 <code v-pre>HeadConfig</code> 类型可以用于描述不同场景下的配置或元数据信息。无论是 HTTP 请求头部、组件配置还是文件元数据，<code v-pre>HeadConfig</code> 提供了一种灵活的方式来表示不同类型的配置信息，同时确保类型的一致性和可读性。</p>
<h2 id="vue-config-js弄了一堆没效果-是什么原因" tabindex="-1"><a class="header-anchor" href="#vue-config-js弄了一堆没效果-是什么原因"><span>vue.config.js弄了一堆没效果 是什么原因</span></a></h2>
<h2 id="cleanurls" tabindex="-1"><a class="header-anchor" href="#cleanurls"><span>cleanUrls</span></a></h2>
<p><code v-pre>cleanUrls</code> 是 VitePress 中的一个配置选项，用于控制生成的页面 URL 是否去掉末尾的 <code v-pre>.html</code> 后缀。当设置为 <code v-pre>true</code> 时，VitePress 会移除 URL 中页面的 <code v-pre>.html</code> 后缀，使得 URL 更加简洁易读。</p>
<p>举个例子，假设有一个名为 <code v-pre>about.html</code> 的页面，当 <code v-pre>cleanUrls</code> 设置为 <code v-pre>false</code> 时，生成的链接可能是 <code v-pre>yourdomain.com/about.html</code>；而当 <code v-pre>cleanUrls</code> 设置为 <code v-pre>true</code> 时，生成的链接会变成 <code v-pre>yourdomain.com/about</code>，去掉了 <code v-pre>.html</code> 后缀。</p>
<p>在 VitePress 的配置文件中，你可以这样使用 <code v-pre>cleanUrls</code>：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cleanUrls</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 或者 false，取决于你想要的行为</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于这个配置的应用示例，假设有一个 VitePress 项目，并且有以下页面结构</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>docs
  ├── index<span class="token punctuation">.</span>md
  └── about<span class="token punctuation">.</span>md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 <code v-pre>cleanUrls</code> 设置为 <code v-pre>true</code>，那么生成的链接将是：</p>
<ul>
<li><code v-pre>/docs/</code> 对应 <code v-pre>index.md</code></li>
<li><code v-pre>/docs/about</code> 对应 <code v-pre>about.md</code></li>
</ul>
<p>而如果 <code v-pre>cleanUrls</code> 设置为 <code v-pre>false</code>，那么生成的链接将是：</p>
<ul>
<li><code v-pre>/docs/</code> 对应 <code v-pre>index.md</code></li>
<li><code v-pre>/docs/about.html</code> 对应 <code v-pre>about.md</code></li>
</ul>
<p>通过设置 <code v-pre>cleanUrls</code>，你可以根据个人偏好来定义页面链接的样式，使 URL 更加干净整洁，这对于优化网站的用户体验和搜索引擎优化都有一定的好处。</p>
<h2 id="rewrite" tabindex="-1"><a class="header-anchor" href="#rewrite"><span>rewrite</span></a></h2>
<p>在很多 Web 应用中，URL 路由的配置通常是基于文件结构的。但有时候，我们可能希望 URL 能够映射到不同于文件结构的路径。<code v-pre>rewrites</code> 配置就是用来实现这种自定义 URL 路由的映射。</p>
<p>例如，假设你有一个静态网站，文件结构如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">-</span> <span class="token keyword">public</span>
  <span class="token operator">-</span> index<span class="token punctuation">.</span>html
  <span class="token operator">-</span> about<span class="token punctuation">.</span>html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，访问 <code v-pre>yourdomain.com/index.html</code> 会显示主页，<code v-pre>yourdomain.com/about.html</code> 会显示关于页面。但有时候你可能想要让 URL 更友好，比如访问 <code v-pre>/</code> 显示主页，访问 <code v-pre>/about</code> 显示关于页面。这时就可以使用 <code v-pre>rewrites</code> 进行自定义路径映射。</p>
<p>以下是一个 VitePress（或 Vite 构建的静态站点）的示例配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rewrites</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token string">'/index.html'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'/about'</span><span class="token operator">:</span> <span class="token string">'/about.html'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例配置告诉 VitePress，当用户访问根路径 <code v-pre>/</code> 时，实际上应该是去获取 <code v-pre>index.html</code> 文件；而当用户访问 <code v-pre>/about</code> 路径时，应该去获取 <code v-pre>about.html</code> 文件。</p>
<p>这样配置后，即使文件结构中没有 <code v-pre>/about</code> 这样的目录，访问 <code v-pre>/about</code> 时也会正确地显示 <code v-pre>about.html</code> 页面的内容。这种配置方式允许你自定义 URL 路径到实际文件路径的映射关系，提供更友好和语义化的 URL 结构。</p>
<p>实际上就是一行语句实现计算机对简写的阅读</p>
<h2 id="srcexclude-不包含" tabindex="-1"><a class="header-anchor" href="#srcexclude-不包含"><span>srcExclude 不包含</span></a></h2>
<p><code v-pre>srcExclude</code> 是 VitePress 中用来排除某些 Markdown 文件作为源内容的配置选项。这个配置项通常用于排除特定的 Markdown 文件，使它们不会被处理为文档或页面内容，而是被视为不相关的文件，不会出现在生成的文档中。</p>
<p>举个例子，假设在你的 VitePress 项目中有一些 Markdown 文件，但其中有些文件不需要被包含为文档内容，比如一些备份文件或者临时文件，你希望它们不出现在生成的文档中。</p>
<p>以下是一个示例配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">srcExclude</span><span class="token operator">:</span> <span class="token string">'**/backup/*.md'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个配置的含义是排除所有位于 <code v-pre>backup</code> 文件夹下的 Markdown 文件作为源内容。在这个示例中，所有符合 <code v-pre>**/backup/*.md</code> 模式的文件都不会被 VitePress 处理成文档内容。这些文件将被视为不相关的内容，不会出现在生成的文档中。</p>
<p>通过使用 <code v-pre>srcExclude</code> 配置，你可以根据自己的需求排除一些特定的 Markdown 文件，确保只有指定的文件被包含为文档内容。这对于管理和维护文档非常有用，特别是在大型项目中有大量文档文件时，可以筛选出需要的内容。</p>
<p><code v-pre>srcExclude</code> 的值是一个字符串数组，其中的每个字符串都是一个用于匹配文件或目录的 <a href="https://www.npmjs.com/package/minimatch" target="_blank" rel="noopener noreferrer">minimatch<ExternalLinkIcon/></a> 模式。这些模式可以包含通配符，允许进行灵活的匹配。</p>
<p>举例说明：</p>
<ol>
<li>
<p>排除所有 README.md 文件：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">srcExclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/README.md'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将排除所有目录下的 <code v-pre>README.md</code> 文件，确保它们不会被包含在生成的文档中。</p>
</li>
<li>
<p>排除所有 TODO.md 文件：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">srcExclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/TODO.md'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将排除所有目录下的 <code v-pre>TODO.md</code> 文件，确保它们不会被包含在生成的文档中。</p>
</li>
<li>
<p>排除特定目录及其所有文件：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">srcExclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'specific-directory/**'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将排除名为 <code v-pre>specific-directory</code> 的目录及其下的所有文件。</p>
</li>
<li>
<p>排除所有 .md 文件：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">srcExclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/*.md'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将排除所有目录下的 Markdown 文件，确保它们不会被包含在生成的文档中。</p>
</li>
</ol>
<p>通过使用 <code v-pre>srcExclude</code>，你可以根据项目的需求灵活地配置哪些文件应该被排除在文档生成过程之外。</p>
<h2 id="outdir" tabindex="-1"><a class="header-anchor" href="#outdir"><span>outDir</span></a></h2>
<p><code v-pre>outDir</code> 是 VitePress 中用于指定构建输出目录的配置选项。这个选项定义了构建完成后生成的静态网站文件的存放路径。</p>
<p>举例来说，假设你希望将构建生成的静态网站文件输出到一个名为 <code v-pre>docs</code> 的文件夹中，你可以这样配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">'docs'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段配置告诉 VitePress 将构建生成的静态网站文件输出到项目根目录下的 <code v-pre>docs</code> 文件夹中。这意味着生成的 HTML、CSS、JavaScript 文件等将会保存在 <code v-pre>docs</code> 文件夹中。</p>
<p>一般来说，默认情况下构建输出的目录是 <code v-pre>.vitepress/dist</code>，但你可以通过设置 <code v-pre>outDir</code> 来自定义构建输出的位置，让生成的静态网站文件输出到你想要的目录中。</p>
<p>这个配置项对于将静态网站文件输出到特定位置非常有用，比如为了方便部署到特定的服务器或将静态文件托管到特定目录中。
总之就是 自定义构建静态网站文件的位置</p>
<h2 id="assetsdir-静态资源文件存放命令" tabindex="-1"><a class="header-anchor" href="#assetsdir-静态资源文件存放命令"><span>assetsDir 静态资源文件存放命令</span></a></h2>
<p><code v-pre>assetsDir</code> 是 VitePress 中的配置选项，用于指定生成的静态资源文件（例如图片、字体、样式表等）的存放目录。</p>
<p>举个例子，如果你想要将生成的静态资源文件存放到一个名为 <code v-pre>static</code> 的文件夹中，你可以这样配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">'static'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段配置告诉 VitePress 将生成的静态资源文件放置在 <code v-pre>outDir</code>（构建输出目录）中的 <code v-pre>static</code> 文件夹下。也就是说，如果你之前通过设置 <code v-pre>outDir</code> 将构建生成的文件输出到 <code v-pre>docs</code> 文件夹中，那么生成的静态资源文件就会放在 <code v-pre>docs/static</code> 目录下。</p>
<p>默认情况下，VitePress 会将生成的静态资源文件放在 <code v-pre>outDir</code> 中的 <code v-pre>assets</code> 文件夹下。通过配置 <code v-pre>assetsDir</code>，你可以根据自己的需求来定义生成的静态资源文件的存放位置，使得项目结构更符合你的管理需求。</p>
<h2 id="cachedir-缓存文件配置位" tabindex="-1"><a class="header-anchor" href="#cachedir-缓存文件配置位"><span>cacheDir 缓存文件配置位</span></a></h2>
<p><code v-pre>cacheDir</code> 是 VitePress 中的一个配置选项，用于指定缓存文件的存放目录。这些缓存文件可以帮助提高 VitePress 的构建性能，加快页面的编译速度。</p>
<p>这个选项允许你指定一个目录用于存放缓存文件。举例来说，假设你希望缓存文件存放在名为 <code v-pre>.cache</code> 的文件夹中，你可以这样配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cacheDir</span><span class="token operator">:</span> <span class="token string">'.cache'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个配置告诉 VitePress 将缓存文件存放在项目根目录下的 <code v-pre>.cache</code> 文件夹中。这些缓存文件可以包含编译过程中的中间结果、依赖关系、或者其他提高构建性能的信息。</p>
<p>通过设置 <code v-pre>cacheDir</code>，你可以控制缓存文件的存放位置，可以是相对于项目根目录的路径。这有助于优化 VitePress 的构建过程，减少重复的计算和操作，提高项目的构建速度和性能。</p>
<h2 id="appearance" tabindex="-1"><a class="header-anchor" href="#appearance"><span>appearance</span></a></h2>
<p>在 VitePress 中，<code v-pre>appearance</code> 是一个配置选项，用于控制是否启用深色模式以及深色模式的配置。下面是一些相关的配置代码示例：</p>
<ol>
<li><strong>启用默认深色模式，跟随用户首选配色方案：</strong></li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vitepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">appearance</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 其他配置...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将启用默认的深色模式，根据用户首选的配色方案自动切换。</p>
<p>2.<strong>设置默认主题为深色，除非用户手动切换：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vitepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">appearance</span><span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">,</span>
  <span class="token comment">// 其他配置...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个配置中，将默认主题设置为深色，用户可以手动切换主题。</p>
<p>3.<strong>强制启用深色模式，用户无法切换主题：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vitepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">appearance</span><span class="token operator">:</span> <span class="token string">'force-dark'</span><span class="token punctuation">,</span>
  <span class="token comment">// 其他配置...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这会强制启用深色模式，并禁止用户手动切换主题。</p>
<p>4.<strong>通过配置选项详细控制深色模式：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vitepress'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useDark <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vueuse/core'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">appearance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token function">useDark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 其他配置...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 其他配置...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例使用 <code v-pre>@vueuse/core</code> 提供的 <code v-pre>useDark</code> 功能，可以更详细地控制深色模式的配置。你可以根据需要进行更复杂的深色模式配置。</p>
<h2 id="ignoredeadlinks" tabindex="-1"><a class="header-anchor" href="#ignoredeadlinks"><span>ignoreDeadLinks</span></a></h2>
<p><code v-pre>ignoreDeadLinks</code> 是 VitePress 中用于控制链接检查的配置选项。这个选项用于指定在构建过程中如何处理死链（即链接到不存在的资源或页面的链接）。</p>
<ol>
<li>
<p><strong><code v-pre>ignoreDeadLinks: true</code>：</strong> 当设置为 <code v-pre>true</code> 时，VitePress 将不会因为死链而中断构建过程。它会忽略死链，继续生成文档。这意味着即使有一些链接指向不存在的页面或资源，构建也会继续完成，不会因此失败。</p>
</li>
<li>
<p><strong><code v-pre>ignoreDeadLinks: 'localhostLinks'</code>：</strong> 当设置为 <code v-pre>'localhostLinks'</code> 时，VitePress 会忽略本地主机（localhost）链接的检查。它将对死链进行检查，但是不会检查指向本地主机的链接是否有效。这在开发阶段可能很有用，因为有些链接可能是指向本地服务的。</p>
</li>
<li>
<p><strong>自定义配置：</strong> 除了 <code v-pre>true</code> 和 <code v-pre>'localhostLinks'</code> 之外，你还可以提供一个数组，数组中可以包含字符串、正则表达式或自定义的函数，用于定义需要被忽略检查的链接规则。</p>
</li>
</ol>
<p>举例来说，以下是一些配置示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 忽略所有死链，不会导致构建失败</span>
<span class="token literal-property property">ignoreDeadLinks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

<span class="token comment">// 对死链进行检查，但忽略本地主机链接的检查</span>
<span class="token literal-property property">ignoreDeadLinks</span><span class="token operator">:</span> <span class="token string">'localhostLinks'</span><span class="token punctuation">,</span>

<span class="token comment">// 自定义规则：忽略以 'example.com' 开头的链接检查</span>
<span class="token literal-property property">ignoreDeadLinks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^https:\/\/example\.com</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^http:\/\/example\.com</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token comment">// 自定义规则：忽略特定链接 '/ignore-link' 的检查</span>
<span class="token literal-property property">ignoreDeadLinks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/ignore-link'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token comment">// 自定义规则：使用函数定义需要忽略的链接，这个例子中忽略了以 '/docs' 开头的链接</span>
<span class="token literal-property property">ignoreDeadLinks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token parameter">link</span><span class="token punctuation">)</span> <span class="token operator">=></span> link<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'/docs'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些配置选项允许你根据项目的需要来处理链接检查，可以忽略特定的链接或指定类型的链接以避免构建过程因为死链而失败。</p>
<h2 id="mpa-spa" tabindex="-1"><a class="header-anchor" href="#mpa-spa"><span>mpa spa</span></a></h2>
<p>MPA 是 Multi-Page Application 的缩写，指的是多页面应用程序。与 SPA（Single-Page Application 单页面应用程序）相对应，MPA 模式的应用程序拥有多个页面，每个页面都有独立的 HTML 文件。</p>
<p>在 MPA 中，每个页面的加载都会重新请求服务器获取新的 HTML、CSS、JavaScript 等资源，页面之间的导航通过页面链接实现。相比之下，SPA 通常只有一个 HTML 页面，通过 JavaScript 动态地加载和切换内容，导航是在客户端（浏览器）中通过路由来完成的，不需要重新加载整个页面。</p>
<p>MPA 模式适用于一些传统的网站架构，每个页面都对应着不同的内容和功能。与 SPA 相比，MPA 更容易实现搜索引擎优化（SEO），因为每个页面都有自己的 URL 和内容，而不是在客户端动态加载。</p>
<p>总的来说，MPA 和 SPA 是两种不同的应用程序架构模式，选择哪种取决于项目的需求和特点。
<code v-pre>mpa</code> 是 VitePress 中的一个实验性配置选项，用于控制生产模式下的构建方式。MPA 模式（Multi-Page Application，多页面应用）是一种构建方式，它默认不包含任何 JavaScript 代码，这意味着在 MPA 模式下，客户端无法进行页面间的导航，并需要明确选择哪些页面需要支持客户端交互。</p>
<p>通常情况下，单页应用（SPA）会将整个应用的 JavaScript 代码打包到一个文件中，允许客户端进行动态路由和交互式的页面导航。但 MPA 模式与之相反，它默认不包含任何客户端 JavaScript 代码，页面导航是通过服务器端渲染完成的。</p>
<p>举例来说，如果你想使用 VitePress 构建一个 MPA 模式的应用，可以这样配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mpa</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置 <code v-pre>mpa</code> 为 <code v-pre>true</code> 将使 VitePress 构建生成的生产应用处于 MPA 模式。在 MPA 模式下，除了一些必要的静态资源文件外，几乎没有 JavaScript 代码被打包到生产应用中，这意味着客户端的交互性非常有限，需要明确选择哪些页面需要支持客户端交互。</p>
<p>MPA 模式的主要优势在于减少了页面加载所需的 JavaScript 文件大小，特别适用于一些静态内容较多、页面间交互性要求不高的场景。但是，需要注意的是，由于禁用了客户端的导航和交互，因此需要仔细考虑在何种场景下选择使用 MPA 模式。</p>
<h2 id="主题配置theme" tabindex="-1"><a class="header-anchor" href="#主题配置theme"><span>主题配置theme</span></a></h2>
<h2 id="外观appearance" tabindex="-1"><a class="header-anchor" href="#外观appearance"><span>外观appearance</span></a></h2>
<p>这个配置项 <code v-pre>appearance</code> 用于控制网站的外观模式，主要是用于启用或禁用暗黑模式。这个选项可以有不同的设置，具体如下：</p>
<ul>
<li><strong><code v-pre>true</code>：</strong> 启用暗黑模式，并且根据用户的首选色彩方案确定默认主题（浅色或暗色）。</li>
<li><strong><code v-pre>'dark'</code>：</strong> 启用暗黑模式，但默认主题为暗色，除非用户手动切换。</li>
<li><strong><code v-pre>'force-dark'</code>：</strong> 强制启用暗黑模式，无论用户的首选方案是什么。</li>
<li><strong><code v-pre>false</code>：</strong> 禁用暗黑模式，用户将无法切换主题。</li>
</ul>
<p>这个选项会向页面注入一段内联脚本，该脚本会根据本地存储中的 <code v-pre>vitepress-theme-appearance</code> 键来恢复用户的设置，确保在页面渲染之前应用了 <code v-pre>.dark</code> 类，以避免闪烁。</p>
<p>举例来说，如果你想要在你的 VitePress 项目中启用暗黑模式，但默认为暗色主题，可以这样配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">appearance</span><span class="token operator">:</span> <span class="token string">'dark'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段配置会启用暗黑模式，但默认主题将会是暗色，除非用户手动切换到浅色主题。这对于希望默认提供暗色主题但允许用户手动切换的场景很有用。</p>
<h2 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated"><span>lastUpdated</span></a></h2>
<p><code v-pre>lastUpdated</code> 是 VitePress 中用于获取每个页面的最后更新时间戳的配置选项。它通过 Git 提取每个页面的最后提交时间，并将该时间戳包含在每个页面的页面数据中，可以通过 <code v-pre>useData</code> 访问。</p>
<p>当启用 <code v-pre>lastUpdated</code> 选项时，在默认主题下会显示每个页面的最后更新时间。你可以通过 <code v-pre>themeConfig.lastUpdatedText</code> 选项来自定义显示的文本。</p>
<p>举例来说，如果你想要在你的 VitePress 项目中显示每个页面的最后更新时间，可以这样配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lastUpdatedText</span><span class="token operator">:</span> <span class="token string">'Last Updated'</span> <span class="token comment">// 自定义显示文本</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段配置会启用 <code v-pre>lastUpdated</code> 选项，并且在默认主题中每个页面底部显示类似 &quot;Last Updated: 2024-01-08&quot; 的内容，其中的日期时间会根据 Git 中的最后提交时间自动更新。通过 <code v-pre>themeConfig.lastUpdatedText</code> 选项，你可以自定义显示文本，比如将 &quot;Last Updated&quot; 改为其他你希望显示的内容。</p>
</div></template>



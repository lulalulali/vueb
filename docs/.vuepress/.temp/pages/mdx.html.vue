<template><div><h1 id="how-mdx" tabindex="-1"><a class="header-anchor" href="#how-mdx"><span>how mdx</span></a></h1>
<h2 id="mdx组件流程和细节" tabindex="-1"><a class="header-anchor" href="#mdx组件流程和细节"><span>mdx组件流程和细节</span></a></h2>
<p>MDX（Markdown + JSX）组件是一种结合了 Markdown 和 JSX 语法的强大工具，允许你在 Markdown 中直接使用 React 组件。以下是使用 MDX 组件的基本流程和细节：</p>
<h3 id="流程" tabindex="-1"><a class="header-anchor" href="#流程"><span>流程</span></a></h3>
<ol>
<li>
<p><strong>安装依赖</strong>：确保你的项目中已经安装了支持 MDX 的依赖。</p>
</li>
<li>
<p><strong>创建 MDX 文件</strong>：创建一个 <code v-pre>.mdx</code> 格式的文件，这是一个结合了 Markdown 和 JSX 的文件格式。</p>
</li>
<li>
<p><strong>编写内容</strong>：在 MDX 文件中，你可以使用 Markdown 编写文本内容，并在其中嵌入 JSX 代码或者引用 React 组件。</p>
</li>
<li>
<p><strong>使用组件</strong>：在 MDX 文件中，可以通过使用 <code v-pre>&lt;ComponentName /&gt;</code> 的形式来引入并使用你的 React 组件。</p>
</li>
</ol>
<h3 id="细节" tabindex="-1"><a class="header-anchor" href="#细节"><span>细节</span></a></h3>
<ol>
<li>
<p><strong>安装支持 MDX 的依赖</strong>：通常需要安装 <code v-pre>@mdx-js/loader</code> 和 <code v-pre>babel-plugin-mdx</code> 这样的依赖来支持 MDX。具体的依赖可能因项目而异，需要根据项目的需求来确定。</p>
</li>
<li>
<p><strong>配置 Babel</strong>：在项目中配置 Babel，确保 Babel 可以正确地解析和编译 MDX 文件。需要在 Babel 的配置文件中添加对 MDX 的支持。</p>
</li>
<li>
<p><strong>在组件中嵌入 JSX</strong>：在 MDX 文件中，你可以直接使用 JSX 语法，例如：</p>
<div class="language-mdx line-numbers-mode" data-ext="mdx" data-title="mdx"><pre v-pre class="language-mdx"><code># This is a header

Here is some text, and here's a React component:

&lt;MyComponent prop1=&quot;value1&quot; prop2=&quot;value2&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>引入 React 组件</strong>：可以直接在 MDX 文件中引入并使用你的 React 组件：</p>
<div class="language-mdx line-numbers-mode" data-ext="mdx" data-title="mdx"><pre v-pre class="language-mdx"><code>import MyComponent from './MyComponent'; // 根据实际路径引入你的组件

# This is a header

&lt;MyComponent prop1=&quot;value1&quot; prop2=&quot;value2&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>使用 MDX Loader</strong>：在项目的构建或打包过程中，需要使用 MDX Loader 来处理 MDX 文件，将其转换为可以被识别和执行的 JavaScript 代码。</p>
</li>
</ol>
<p>这些是使用 MDX 组件的基本步骤和细节。确保你的项目配置了正确的依赖项和相关的加载器，以便支持 MDX 文件，并能够在 Markdown 中使用 React 组件。</p>
<h2 id="确保项目已支持mdx的依赖" tabindex="-1"><a class="header-anchor" href="#确保项目已支持mdx的依赖"><span>确保项目已支持MDX的依赖</span></a></h2>
<p>要确保项目中已经安装了支持 MDX 的依赖，可以按照以下步骤进行检查和安装：</p>
<h3 id="步骤一-检查依赖项" tabindex="-1"><a class="header-anchor" href="#步骤一-检查依赖项"><span>步骤一：检查依赖项</span></a></h3>
<ol>
<li>
<p><strong>查看 package.json</strong>：打开项目根目录下的 <code v-pre>package.json</code> 文件。</p>
</li>
<li>
<p><strong>搜索相关依赖</strong>：在 <code v-pre>&quot;dependencies&quot;</code> 或者 <code v-pre>&quot;devDependencies&quot;</code> 部分查找与 MDX 相关的依赖，常见的包括：</p>
<ul>
<li><code v-pre>@mdx-js/loader</code></li>
<li><code v-pre>babel-plugin-mdx</code></li>
<li><code v-pre>@mdx-js/react</code></li>
</ul>
</li>
</ol>
<h3 id="步骤二-安装依赖项" tabindex="-1"><a class="header-anchor" href="#步骤二-安装依赖项"><span>步骤二：安装依赖项</span></a></h3>
<p>如果在 <code v-pre>package.json</code> 中未找到相关的 MDX 依赖，或者你确认需要安装其他依赖来支持 MDX：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 使用 npm 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> @mdx-js/loader babel-plugin-mdx @mdx-js/react --save-dev

<span class="token comment"># 或者使用 yarn 安装</span>
<span class="token function">yarn</span> <span class="token function">add</span> @mdx-js/loader babel-plugin-mdx @mdx-js/react <span class="token parameter variable">--dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将会安装所需的 MDX 相关依赖，并将它们添加到项目的 <code v-pre>package.json</code> 文件中。</p>
<h3 id="步骤三-配置加载器和-babel-插件" tabindex="-1"><a class="header-anchor" href="#步骤三-配置加载器和-babel-插件"><span>步骤三：配置加载器和 Babel 插件</span></a></h3>
<p>确保你的构建工具（例如 Webpack）或者 Babel 配置了正确的加载器和插件来处理 MDX 文件。需要在配置文件中添加对 MDX 的支持。</p>
<p>例如，在 Webpack 中，你需要配置 <code v-pre>@mdx-js/loader</code> 来处理 MDX 文件：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...其他配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.mdx$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'babel-loader'</span><span class="token punctuation">,</span> <span class="token string">'@mdx-js/loader'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Babel 中，需要配置 <code v-pre>babel-plugin-mdx</code> 插件来支持 MDX 文件：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...其他配置</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'babel-plugin-mdx'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这些步骤，你可以确保项目中已经安装了支持 MDX 的依赖，并配置了正确的加载器和插件，以便在项目中使用 MDX 文件。</p>
<h2 id="componentname引入用react-组件" tabindex="-1"><a class="header-anchor" href="#componentname引入用react-组件"><span>ComponentName引入用React 组件</span></a></h2>
<p>在 MDX 文件中使用 <code v-pre>&lt;ComponentName /&gt;</code> 的形式来引入和使用你的 React 组件非常简单。首先，确保你的 React 组件是可用的并且已经在项目中定义。然后，你可以按照以下步骤在 MDX 文件中使用它：</p>
<h3 id="步骤一-引入-react-组件" tabindex="-1"><a class="header-anchor" href="#步骤一-引入-react-组件"><span>步骤一：引入 React 组件</span></a></h3>
<p>在 MDX 文件中，通过 <code v-pre>import</code> 语句来引入你的 React 组件。例如：</p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code>import MyComponent from './MyComponent'; // 替换成你的组件路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="步骤二-在文本中使用组件" tabindex="-1"><a class="header-anchor" href="#步骤二-在文本中使用组件"><span>步骤二：在文本中使用组件</span></a></h3>
<p>在 MDX 文件中，你可以直接在文本内容中使用你的 React 组件。例如：</p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 使用 React 组件示例</span>

这是一个简单的段落。现在我们来展示一个 React 组件的例子：

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token attr-name">prop1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value1<span class="token punctuation">"</span></span> <span class="token attr-name">prop2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="步骤三-传递属性" tabindex="-1"><a class="header-anchor" href="#步骤三-传递属性"><span>步骤三：传递属性</span></a></h3>
<p>在使用 <code v-pre>&lt;ComponentName /&gt;</code> 标签引入组件时，你可以像在普通的 JSX 中一样传递属性。在上面的例子中，<code v-pre>prop1</code> 和 <code v-pre>prop2</code> 是传递给 <code v-pre>MyComponent</code> 组件的属性。</p>
<h3 id="步骤四-渲染-mdx-文件" tabindex="-1"><a class="header-anchor" href="#步骤四-渲染-mdx-文件"><span>步骤四：渲染 MDX 文件</span></a></h3>
<p>确保你的构建工具能够识别和处理 MDX 文件。例如，如果使用 Webpack 进行构建，需要配置相应的加载器来处理 MDX 文件。</p>
<p>在运行构建或启动开发服务器之后，MDX 文件中引入的 React 组件将会被正确解析并在页面上渲染出来。</p>
<p>通过这些步骤，在 MDX 文件中使用 <code v-pre>&lt;ComponentName /&gt;</code> 的形式来引入和使用你的 React 组件，使得你可以轻松地在 Markdown 中结合 JSX 和 React 组件来展示内容.</p>
<h2 id="md报错" tabindex="-1"><a class="header-anchor" href="#md报错"><span>md报错</span></a></h2>
<p>一个文件只有一个#,可以多弄几个##和###等等，#前后空行</p>
<h2 id="md" tabindex="-1"><a class="header-anchor" href="#md"><span>md</span></a></h2>
<p><code v-pre>markdown</code> 是 VitePress 中的一个配置选项，用于配置 Markdown 解析器的选项。VitePress 使用 Markdown-it 作为解析器，以及 Shikiji（Shiki 的改进版本）来进行语言语法高亮。</p>
<p>通过这个选项，你可以传递各种与 Markdown 相关的选项以满足你的需求，比如配置解析器的行为、启用或禁用特定功能等。</p>
<p>举例来说，如果你想要配置 Markdown 解析器，比如启用表格的扩展功能以支持更多表格的语法，你可以这样配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">markdownItOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 启用表格的扩展功能</span>
      <span class="token literal-property property">extendedTable</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段配置会将 <code v-pre>extendedTable</code> 设置为 <code v-pre>true</code>，启用 Markdown-it 解析器的表格扩展功能。这样，Markdown 中的表格语法就会支持更多的扩展特性。</p>
<p>通过这个选项，你可以根据自己的需求和偏好来配置 Markdown 解析器，以适应特定的语法要求或改善解析器的功能。详细的配置项取决于 Markdown-it 解析器本身支持的功能和选项。</p>
<h2 id="配置-markdown-解析器选项" tabindex="-1"><a class="header-anchor" href="#配置-markdown-解析器选项"><span>配置 Markdown 解析器选项</span></a></h2>
<p>在 VitePress 中，你可以配置 Markdown 解析器的选项。VitePress 使用 Markdown-it 作为默认的 Markdown 解析器，并使用 Shikiji（Shiki 的改进版本）来进行代码块的语法高亮。在配置这些选项时，你可以传递各种 Markdown 相关的选项以满足你的需求。</p>
<p>具体而言，Markdown 解析器选项包括 Markdown-it 的配置和 Shikiji 的配置。以下是一些直观的例子：</p>
<ol>
<li>
<p><strong>配置 Markdown-it 选项：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vitepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Markdown-it 配置选项</span>
    <span class="token literal-property property">preset</span><span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span> <span class="token comment">// 使用默认配置</span>
    <span class="token literal-property property">breaks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用换行符支持</span>
    <span class="token comment">// 其他 Markdown-it 选项...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，通过 <code v-pre>markdown</code> 配置项，你可以设置 Markdown-it 的各种选项，例如使用默认预设（<code v-pre>preset: 'default'</code>）和启用换行符支持（<code v-pre>breaks: true</code>）。</p>
</li>
<li>
<p><strong>配置代码块高亮选项：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vitepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Shikiji 配置选项</span>
    <span class="token function-variable function">highlight</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span> lang</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 自定义代码块高亮逻辑</span>
      <span class="token comment">// 例如使用其他语法高亮库</span>
      <span class="token comment">// 返回高亮后的 HTML 字符串</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 其他 Shikiji 选项...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，通过 <code v-pre>markdown</code> 配置项的 <code v-pre>highlight</code> 属性，你可以自定义代码块的高亮逻辑。你可以使用其他语法高亮库，并返回高亮后的 HTML 字符串。</p>
</li>
</ol>
<p>这样，你可以根据你的需求配置 Markdown-it 和 Shikiji 的选项，以满足特定的 Markdown 解析和代码块高亮需求。</p>
</div></template>



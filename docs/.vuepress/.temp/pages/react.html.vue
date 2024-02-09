<template><div><h1 id="react" tabindex="-1"><a class="header-anchor" href="#react"><span>react</span></a></h1>
<p>React 应用程序是使用 React 框架构建的 Web 应用程序。React 是由 Facebook 开发的一种用于构建用户界面的 JavaScript 库。React 应用程序采用组件化的方式构建用户界面，其中 UI 被分解成多个独立、可重用的组件。</p>
<p>关键概念和特点包括：</p>
<ol>
<li>
<p><strong>组件化开发</strong>：React 应用程序使用组件来构建用户界面。每个组件都是一个独立的模块，可以包含自己的状态（state）和行为（methods）。</p>
</li>
<li>
<p><strong>虚拟 DOM</strong>：React 使用虚拟 DOM（Virtual DOM）来提高性能。虚拟 DOM 是一个内存中的表示实际 DOM 的对象，React 通过对比虚拟 DOM 的变化来最小化实际 DOM 操作，提高页面渲染效率。</p>
</li>
<li>
<p><strong>单向数据流</strong>：React 遵循单向数据流的原则，数据从父组件传递到子组件，通过 props 进行传递。子组件通过触发事件来通知父组件进行状态更新。</p>
</li>
<li>
<p><strong>生命周期方法</strong>：React 组件有生命周期方法，允许开发者在组件的不同阶段执行特定的操作，如组件加载、更新和卸载。</p>
</li>
<li>
<p><strong>JSX 语法</strong>：React 使用 JSX 语法（JavaScript XML），一种将 HTML 结构嵌套在 JavaScript 代码中的语法糖。JSX 提供了更直观、更声明式的方式来描述用户界面。</p>
</li>
<li>
<p><strong>状态管理</strong>：React 应用程序通常使用状态（state）来管理组件的数据。状态是可变的，当状态发生变化时，React 会重新渲染相关的组件。</p>
</li>
</ol>
<p>React 应用程序可以是单页面应用（SPA）或多页面应用，具体取决于应用的需求。SPA 是指在加载应用时只加载一个 HTML 页面，通过 AJAX 或 WebSocket 等技术动态更新页面内容，而不是通过传统的页面刷新方式。React 被广泛用于构建现代、交互式的用户界面。</p>
<h2 id="设置react-环境" tabindex="-1"><a class="header-anchor" href="#设置react-环境"><span>设置React 环境</span></a></h2>
<p>确保你的项目已经设置好了 React 环境，通常需要进行以下步骤：</p>
<h2 id="步骤一检查项目依赖" tabindex="-1"><a class="header-anchor" href="#步骤一检查项目依赖"><span>步骤一检查项目依赖</span></a></h2>
<ol>
<li>
<p><strong>检查 package.json 文件</strong>：打开项目根目录下的 <code v-pre>package.json</code> 文件，确保其中已经包含了 React 相关的依赖。查找 <code v-pre>&quot;dependencies&quot;</code> 或 <code v-pre>&quot;devDependencies&quot;</code> 中是否包含了 <code v-pre>react</code> 和 <code v-pre>react-dom</code>。</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"react"</span><span class="token operator">:</span> <span class="token string">"^xx.xx.xx"</span><span class="token punctuation">,</span>
  <span class="token property">"react-dom"</span><span class="token operator">:</span> <span class="token string">"^xx.xx.xx"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有，运行以下命令安装 React：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> react react-dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>检查 React 版本</strong>：确保你安装的 React 版本是最新的稳定版本，可以查看 <code v-pre>package.json</code> 中 React 的版本号是否是最新的。</p>
</li>
</ol>
<h3 id="步骤二-检查项目结构和文件" tabindex="-1"><a class="header-anchor" href="#步骤二-检查项目结构和文件"><span>步骤二：检查项目结构和文件</span></a></h3>
<ol>
<li>
<p><strong>文件扩展名</strong>：React 组件通常以 <code v-pre>.js</code> 或 <code v-pre>.jsx</code> 为扩展名。确保你的组件文件使用了这些扩展名。</p>
</li>
<li>
<p><strong>JSX 语法</strong>：React 使用 JSX 语法来编写组件。确保你的组件文件中使用了 JSX 语法，比如 <code v-pre>&lt;div&gt;</code>、<code v-pre>{}</code> 中的表达式等。</p>
</li>
</ol>
<h3 id="步骤三-配置-babel-或-webpack-可选" tabindex="-1"><a class="header-anchor" href="#步骤三-配置-babel-或-webpack-可选"><span>步骤三：配置 Babel 或 Webpack（可选）</span></a></h3>
<p>如果你的项目需要支持 JSX 语法，你可能需要配置 Babel 或者 Webpack 来进行转换和编译。</p>
<ul>
<li>
<p><strong>Babel 配置</strong>：在项目中配置 Babel，确保它能够正确地将 JSX 转换为常规的 JavaScript 语法。通常需要安装 <code v-pre>@babel/preset-react</code>，并在 Babel 配置文件中设置 React 的 preset。</p>
</li>
<li>
<p><strong>Webpack 配置</strong>：如果你使用 Webpack，确保在配置文件中设置了 <code v-pre>babel-loader</code>，并配置它来处理 JSX 文件。</p>
</li>
</ul>
<h3 id="步骤四-引入并使用-react-组件" tabindex="-1"><a class="header-anchor" href="#步骤四-引入并使用-react-组件"><span>步骤四：引入并使用 React 组件</span></a></h3>
<p>最后，在你的项目中引入并使用 React 组件。例如，可以在一个包含 JSX 的文件中引入你的组件，并在需要的地方使用它。</p>
<p>如果按照上述步骤配置了你的项目，并且在代码中正确地使用了 React 组件和 JSX 语法，那么你的项目就已经设置好了 React 环境。</p>
<h2 id="项目中引入使用-react-组件" tabindex="-1"><a class="header-anchor" href="#项目中引入使用-react-组件"><span>项目中引入使用 React 组件</span></a></h2>
<p>在你的项目中引入并使用 React 组件，遵循以下步骤：</p>
<h3 id="步骤一-创建-react-组件" tabindex="-1"><a class="header-anchor" href="#步骤一-创建-react-组件"><span>步骤一：创建 React 组件</span></a></h3>
<p>首先，确保你已经创建了你想要使用的 React 组件。这可能是一个包含 JSX 语法的 <code v-pre>.js</code> 或 <code v-pre>.jsx</code> 文件，例如：</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// MyComponent.js</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, I am a React component!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="步骤二-在你的项目中引入组件" tabindex="-1"><a class="header-anchor" href="#步骤二-在你的项目中引入组件"><span>步骤二：在你的项目中引入组件</span></a></h3>
<p>在你想要使用这个组件的地方，引入这个组件并在 JSX 中使用它。</p>
<h4 id="_1-在文件顶部引入组件" tabindex="-1"><a class="header-anchor" href="#_1-在文件顶部引入组件"><span>1. 在文件顶部引入组件</span></a></h4>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span> <span class="token comment">// 用正确的路径引入你的组件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-在-jsx-中使用组件" tabindex="-1"><a class="header-anchor" href="#_2-在-jsx-中使用组件"><span>2. 在 JSX 中使用组件</span></a></h4>
<p>在你的 JSX 文件中，像使用 HTML 标签一样使用你的组件：</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Welcome to My App</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyComponent</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"> </span><span class="token punctuation">{</span><span class="token comment">/* 使用你的组件 */</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="步骤三-渲染根组件" tabindex="-1"><a class="header-anchor" href="#步骤三-渲染根组件"><span>步骤三：渲染根组件</span></a></h3>
<p>最后，确保在你的应用程序中渲染了根组件。通常是在 <code v-pre>index.js</code> 或者 <code v-pre>App.js</code> 中进行渲染。</p>
<h4 id="_1-在-index-js-中渲染根组件" tabindex="-1"><a class="header-anchor" href="#_1-在-index-js-中渲染根组件"><span>1. 在 <code v-pre>index.js</code> 中渲染根组件</span></a></h4>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span><span class="token punctuation">;</span> <span class="token comment">// 用你的根组件路径替换这里的路径</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"> </span><span class="token punctuation">{</span><span class="token comment">/* 渲染根组件 */</span><span class="token punctuation">}</span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成上述步骤后，你的 React 组件应该可以在你的项目中正常使用了。记得替换路径和组件名为你实际使用的名字和路径。</p>
<h2 id="项目中依赖项版本冲突" tabindex="-1"><a class="header-anchor" href="#项目中依赖项版本冲突"><span>项目中依赖项版本冲突</span></a></h2>
<p>这个错误似乎是因为你的项目中的某些依赖项版本之间存在冲突。错误信息指出了一个依赖解析问题，<code v-pre>@docusaurus/core</code> 需要使用的 React 版本为 <code v-pre>&quot;^18.0.0&quot;</code>，但是你的项目中已经安装的 React 版本为 <code v-pre>&quot;^17.0.2&quot;</code>。</p>
<h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h3>
<p>你可以尝试以下几种方法解决这个问题：</p>
<ol>
<li>
<p><strong>强制解决依赖冲突</strong>：尝试运行以下命令，并使用 <code v-pre>--force</code> 或 <code v-pre>--legacy-peer-deps</code> 参数来接受可能存在的不兼容依赖解析。</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @docusaurus/core@latest @docusaurus/preset-classic@latest --legacy-peer-deps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>手动调整依赖版本</strong>：手动调整 React 版本，使其满足 <code v-pre>@docusaurus/core</code> 所需的版本要求。你可以尝试更新你的项目中的 React 版本至 <code v-pre>&quot;^18.0.0&quot;</code> 或者更高版本。</p>
</li>
<li>
<p><strong>等待 Docusaurus 更新</strong>：等待 Docusaurus 更新并支持当前你项目中所使用的 React 版本。可能会有新版本的 Docusaurus 发布解决这个问题。</p>
</li>
<li>
<p><strong>查看依赖冲突原因</strong>：查看 <code v-pre>npm</code> 的依赖树，找出具体是哪个依赖项导致了这个冲突。可以通过 <code v-pre>npm ls react</code> 或者 <code v-pre>npm ls @docusaurus/core</code> 来查看依赖树并找出具体问题。</p>
</li>
</ol>
<p>如果以上方法无法解决问题，可以考虑升级或者降级 Docusaurus 版本，或者在 Docusaurus 更新后再尝试安装最新版本。如果有更多详细的错误日志，也许能提供更具体的帮助。</p>
</div></template>



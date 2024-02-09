<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>overview</span></a></h2>
<h3 id="i18nrouting" tabindex="-1"><a class="header-anchor" href="#i18nrouting"><span>i18nrouting</span></a></h3>
<p><code v-pre>i18nrouting</code> 通常指的是国际化（Internationalization，简称 i18n）和路由（Routing）的结合。在Web开发中，国际化是指为了适应不同语言和文化的用户，使应用程序能够提供多语言支持。而路由则是指导航和页面切换的机制。</p>
<p><code v-pre>i18nrouting</code> 的功能主要包括以下两个方面：</p>
<ol>
<li>
<p><strong>国际化（i18n）：</strong> 通过使用不同语言的翻译来支持多语言。这包括在应用中标记需要翻译的文本，并根据用户的语言偏好动态加载相应的翻译。在路由中，也会包括对不同语言版本的页面的路由管理。</p>
</li>
<li>
<p><strong>路由（Routing）：</strong> 管理不同页面之间的导航。在 <code v-pre>i18nrouting</code> 中，通常会考虑不同语言版本的页面，确保用户能够在不同语言之间切换，并且能够正确加载对应语言版本的页面。</p>
</li>
</ol>
<p>具体实现 <code v-pre>i18nrouting</code> 的方式可能因框架而异，但基本思路是为每个页面提供多语言的版本，并在路由系统中处理不同语言版本之间的切换。这通常需要配合国际化库和路由库的使用。</p>
<p>以下是一个简单的示例，使用Vue.js和Vue Router实现 <code v-pre>i18nrouting</code>：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>

<span class="token comment">// router.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'./views/Home.vue'</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">'./views/About.vue'</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/:lang/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> Home
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'about'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> About
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，路由的基本结构中包含 <code v-pre>:lang</code> 参数，用于表示语言。通过这样的结构，你可以根据用户选择的语言加载不同版本的页面。例如，<code v-pre>/en/</code> 表示英语版本，<code v-pre>/fr/</code> 表示法语版本。</p>
<h3 id="logo" tabindex="-1"><a class="header-anchor" href="#logo"><span>logo</span></a></h3>
<p>这段描述指的是在VitePress的导航栏上显示的 Logo 可以通过路径字符串或对象进行配置。该 Logo 通常出现在站点标题右侧，并且能够根据浅色模式和深色模式分别显示不同的 Logo。</p>
<p>下面是几个简单的例子：</p>
<ol>
<li>
<p><strong>路径字符串：</strong>
使用 Logo 图片的路径字符串。这个路径可以是相对路径或绝对路径，指向你存放 Logo 图片的位置。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'/images/logo-light.png'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>对象配置：</strong>
使用对象配置，可以分别设置浅色模式和深色模式下的 Logo。对象中的 <code v-pre>light</code> 和 <code v-pre>dark</code> 分别表示浅色模式和深色模式下的 Logo。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token string">'/images/logo-light.png'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dark</span><span class="token operator">:</span> <span class="token string">'/images/logo-dark.png'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种配置下，VitePress 会根据浏览器或用户的系统偏好自动切换浅色模式和深色模式，相应地显示不同的 Logo。</p>
</li>
<li>
<p><strong>只设置一个 Logo：</strong>
如果只设置一个 Logo，而不区分浅色和深色模式，可以直接使用路径字符串。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'/images/logo.png'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>这样，你可以根据具体需求选择设置 Logo 的方式，并确保在浅色和深色模式下都有合适的 Logo 显示。</p>
<p>logo是在哪里呢？logo是在什么位置浏览器顶上？还是在哪里？</p>
<h3 id="site和sitetitle" tabindex="-1"><a class="header-anchor" href="#site和sitetitle"><span>site和sitetitle</span></a></h3>
<p>在 VitePress 的配置中，<code v-pre>title</code> 和 <code v-pre>siteTitle</code> 是两个不同的选项，具有不同的作用：</p>
<ol>
<li>
<p><strong>title:</strong></p>
<ul>
<li>
<p><strong>作用：</strong> <code v-pre>title</code> 用于设置站点的默认标题，会显示在浏览器标签页上。</p>
</li>
<li>
<p><strong>例子：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"my sidebar"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>siteTitle:</strong></p>
<ul>
<li>
<p><strong>作用：</strong> <code v-pre>siteTitle</code> 用于设置站点的主标题，通常显示在导航栏的左侧。</p>
</li>
<li>
<p><strong>例子：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">siteTitle</span><span class="token operator">:</span> <span class="token string">'Hello Swords'</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>你可以根据需要同时设置这两个选项，以确保站点在不同位置都有合适的标题显示。例如，在导航栏左侧显示一个主标题 (<code v-pre>siteTitle</code>)，而在浏览器标签页上显示一个独立的标题 (<code v-pre>title</code>)。</p>
</li>
</ol>
<h3 id="carbonads" tabindex="-1"><a class="header-anchor" href="#carbonads"><span>carbonAds</span></a></h3>
<p>在 VitePress 中，你可以通过配置 <code v-pre>carbonAds</code> 来展示 Carbon Ads（一个广告服务）。以下是一些简单的例子，你可以将它们添加到 VitePress 配置文件中：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vitepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">carbonAds</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 你的 Carbon Ads 配置</span>
    <span class="token literal-property property">carbon</span><span class="token operator">:</span> <span class="token string">'ABCDEF'</span><span class="token punctuation">,</span>
    <span class="token comment">// 其他配置...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 其他配置...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，你需要替换 <code v-pre>'ABCDEF'</code> 为你在 Carbon Ads 网站上获得的 Carbon ID。</p>
<p>注意：为了真正展示广告，你需要在实际的构建和部署中验证配置的有效性。这里提供的示例是一个基本的框架，你需要根据你的实际情况进行调整。</p>
<h3 id="docfooter" tabindex="-1"><a class="header-anchor" href="#docfooter"><span>docFooter</span></a></h3>
<p>在 VitePress 中，<code v-pre>docFooter</code> 用于自定义出现在上一页和下一页链接上方的文本。这对于非英语文档很有帮助，也可以用于全局禁用上一页/下一页链接。你可以通过设置 <code v-pre>docFooter</code> 来控制这些链接的显示文本。</p>
<p><strong>例子：</strong></p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">docFooter</span><span class="token punctuation">:</span> <span class="token string">"Custom Footer Text"</span></span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> Your Page Content</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，通过在页面的 frontmatter 中添加 <code v-pre>docFooter</code> 字段，你可以自定义上一页和下一页链接上方的文本为 &quot;Custom Footer Text&quot;。</p>
<p>如果想要全局禁用上一页/下一页链接，可以在配置文件中设置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vitepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">docFooter</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将在全局禁用上一页/下一页链接。</p>
<p>自定义出现在上一页和下一页链接上方的文本指的是你可以定义在每个页面上，上一页和下一页链接之上显示的额外文本内容。这样的自定义文本可以用于提供更多的信息、导航上下文或者进行其他自定义的展示。</p>
<p>应用场景可能包括：</p>
<ol>
<li>
<p><strong>提供额外的导航上下文：</strong> 如果你希望在用户导航页面时提供一些额外的信息，例如当前章节或主题的简要描述，你可以使用 <code v-pre>docFooter</code> 来显示这些信息。</p>
</li>
<li>
<p><strong>多语言支持：</strong> 如果你的文档是多语言的，你可以使用 <code v-pre>docFooter</code> 在每个页面上方显示当前语言的信息，帮助用户了解当前所处的语言环境。</p>
</li>
<li>
<p><strong>全局提示或声明：</strong> 你可以使用 <code v-pre>docFooter</code> 在整个文档中添加一些全局的提示、声明或重要信息，以确保用户在导航文档时能够看到这些内容。</p>
</li>
</ol>
<p>总体而言，这是一个灵活的功能，允许你在每个页面上方显示自定义的文本内容，以适应特定的文档需求。</p>
<h3 id="darkmodeswitchlabel" tabindex="-1"><a class="header-anchor" href="#darkmodeswitchlabel"><span>darkModeSwitchLabel</span></a></h3>
<p><code v-pre>darkModeSwitchLabel</code> 是用于自定义深色模式开关标签的配置选项。这个标签通常用于移动端视图，允许用户切换深色模式。</p>
<p>详细说明：</p>
<ul>
<li>类型：string</li>
<li>默认值：'Appearance'</li>
<li>作用：用于设置深色模式开关的标签文本。</li>
</ul>
<p>举例：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">darkModeSwitchLabel</span><span class="token punctuation">:</span> <span class="token string">'切换主题'</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，深色模式开关的标签文本将被设置为 '切换主题'。这是一个立即能运行的例子，你可以将其添加到页面的 YAML frontmatter 中。</p>
</div></template>



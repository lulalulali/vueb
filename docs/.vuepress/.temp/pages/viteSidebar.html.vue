<template><div><h1 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar"><span>sidebar</span></a></h1>
<h2 id="invalid-sidebar-file-at-sidebars-js" tabindex="-1"><a class="header-anchor" href="#invalid-sidebar-file-at-sidebars-js"><span>Invalid sidebar file at &quot;sidebars.js&quot;</span></a></h2>
<p>These sidebar document ids do not exist:
这个错误说明在加载侧边栏文件 <code v-pre>sidebars.js</code> 时出现了问题。在 <code v-pre>sidebars.js</code> 文件中引用了一个不存在的文档 ID <code v-pre>jesus</code>。</p>
<p>你的侧边栏文件中应该列出了可用的文档 ID 列表，但其中有一个叫做 <code v-pre>jesus</code> 的文档 ID 并不存在。</p>
<p>要解决这个问题，你需要检查 <code v-pre>sidebars.js</code> 文件，并确保文档 ID 的引用都是正确的，没有错别字或错误的文档 ID。比如，确保在你的侧边栏文件中列出的文档 ID 都确实存在于你的文档目录中。</p>
<p>另外，确保 <code v-pre>sidebars.js</code> 中的路径与实际的文档目录结构一致。一旦确认了 <code v-pre>sidebars.js</code> 中的文档 ID 都正确无误，并且与实际的文档结构匹配，这个错误就会消失。</p>
<h2 id="创建有左侧选项单的网站流程" tabindex="-1"><a class="header-anchor" href="#创建有左侧选项单的网站流程"><span>创建有左侧选项单的网站流程</span></a></h2>
<p>在 VitePress 中创建具有左侧选项菜单的网站通常需要遵循以下步骤：</p>
<h3 id="步骤一-创建-vitepress-项目" tabindex="-1"><a class="header-anchor" href="#步骤一-创建-vitepress-项目"><span>步骤一：创建 VitePress 项目</span></a></h3>
<p>首先，确保你已经安装了 Node.js 和 npm 或者 yarn。然后通过以下命令创建一个新的 VitePress 项目：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init vitepress
<span class="token comment"># 或者</span>
<span class="token function">yarn</span> create vitepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="步骤二-配置侧边栏" tabindex="-1"><a class="header-anchor" href="#步骤二-配置侧边栏"><span>步骤二：配置侧边栏</span></a></h3>
<p>在 VitePress 项目中，你可以通过配置文件 <code v-pre>.vitepress/config.js</code> 来设置侧边栏菜单。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Guide'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 其他侧边栏选项</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是一个简单的示例，你可以根据自己的需要添加更多的侧边栏选项。这些选项将会在侧边栏中显示。</p>
<h3 id="步骤三-编写内容" tabindex="-1"><a class="header-anchor" href="#步骤三-编写内容"><span>步骤三：编写内容</span></a></h3>
<p>在你的 VitePress 项目中编写内容，每个 <code v-pre>.md</code> 文件对应一个页面。确保文件结构和链接与你配置的侧边栏菜单相匹配，这样侧边栏菜单就能正确显示和链接到对应的页面。</p>
<h3 id="步骤四-启动开发服务器" tabindex="-1"><a class="header-anchor" href="#步骤四-启动开发服务器"><span>步骤四：启动开发服务器</span></a></h3>
<p>运行以下命令启动 VitePress 开发服务器：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run docs:dev
<span class="token comment"># 或者</span>
<span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将启动一个本地开发服务器，默认地址是 <code v-pre>http://localhost:3000</code>，你可以在浏览器中打开查看你的 VitePress 网站。左侧将会显示你配置的侧边栏菜单。</p>
<h3 id="步骤五-部署网站" tabindex="-1"><a class="header-anchor" href="#步骤五-部署网站"><span>步骤五：部署网站</span></a></h3>
<p>当你准备好部署你的网站时，你可以使用 VitePress 提供的命令进行静态文件的构建：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run docs:build
<span class="token comment"># 或者</span>
<span class="token function">yarn</span> docs:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建完成后，你可以将生成的静态文件部署到你的服务器或者静态托管服务上，确保路径和配置的 <code v-pre>base</code> 选项匹配，这样侧边栏和页面链接将能正确工作。</p>
<h2 id="配置出含折叠功能的侧边栏" tabindex="-1"><a class="header-anchor" href="#配置出含折叠功能的侧边栏"><span>配置出含折叠功能的侧边栏</span></a></h2>
<p>要配置含有折叠功能的侧边栏，你可以使用 <code v-pre>collapsable</code> 属性来设置是否可折叠。以下是一个示例，展示了如何配置含有折叠功能的侧边栏：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/guide/'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Guide'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 不可折叠</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">'/guide/'</span><span class="token punctuation">,</span>          <span class="token comment">// 对应 /guide/README.md</span>
            <span class="token string">'/guide/getting-started.md'</span><span class="token punctuation">,</span>
            <span class="token string">'/guide/advanced.md'</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Config'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 可折叠</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">'/guide/config/'</span><span class="token punctuation">,</span>   <span class="token comment">// 对应 /guide/config/README.md</span>
            <span class="token string">'/guide/config/theme.md'</span><span class="token punctuation">,</span>
            <span class="token string">'/guide/config/plugin.md'</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">'/blog/'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">'/blog/'</span><span class="token punctuation">,</span>             <span class="token comment">// 对应 /blog/README.md</span>
        <span class="token string">'/blog/post1.md'</span><span class="token punctuation">,</span>
        <span class="token string">'/blog/post2.md'</span>
      <span class="token punctuation">]</span>
      <span class="token comment">// 可以继续添加其他路径的侧边栏配置</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，<code v-pre>collapsable</code> 属性用来设置菜单项是否可折叠。对于需要折叠的菜单项，设置 <code v-pre>collapsable: true</code>，而对于不需要折叠的菜单项，设置 <code v-pre>collapsable: false</code>。</p>
<p>根据这个示例：</p>
<ul>
<li><code v-pre>Guide</code> 菜单项不可折叠，用户不能关闭或打开它。</li>
<li><code v-pre>Config</code> 菜单项可折叠，用户可以点击菜单项旁边的箭头来展开或收起子菜单。</li>
</ul>
<p>根据你的需求和项目结构，你可以设置不同的菜单项的折叠行为。</p>
</div></template>



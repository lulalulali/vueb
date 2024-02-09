<template><div><h1 id="asset-handle" tabindex="-1"><a class="header-anchor" href="#asset-handle"><span>asset handle</span></a></h1>
<h2 id="引用静态资源" tabindex="-1"><a class="header-anchor" href="#引用静态资源"><span>引用静态资源</span></a></h2>
<h2 id="public目录" tabindex="-1"><a class="header-anchor" href="#public目录"><span>public目录</span></a></h2>
<p>在 VitePress 中，如果你的站点没有部署在根 URL 上，需要配置 <code v-pre>base</code> 选项以确保资源的正确加载。在 <code v-pre>.vitepress/config.js</code> 文件中，你可以通过添加 <code v-pre>base</code> 属性来设置。</p>
<p>以下是一个示例，假设你的站点部署在子路径 <code v-pre>/my-site/</code> 下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">'/my-site/'</span><span class="token punctuation">,</span>
  <span class="token comment">// 其他配置...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，设置了 <code v-pre>base</code> 为 <code v-pre>/my-site/</code>，这将影响生成的静态资源的路径，确保在子路径下正确加载。请根据你的实际部署情况调整 <code v-pre>base</code> 的值。</p>
<p>需要注意的是，如果你使用的是相对路径的链接和资源引用，VitePress 会自动处理这些相对路径，而不需要手动修改。但在某些情况下，尤其是在使用一些插件或自定义组件时，可能需要额外的配置。</p>
<h2 id="根url" tabindex="-1"><a class="header-anchor" href="#根url"><span>根url</span></a></h2>
<p>你可以将上述代码插入到你的 Vue 组件中，通常在 <code v-pre>.vue</code> 文件中的 <code v-pre>&lt;script&gt;</code> 部分。具体来说，在你想要使用 <code v-pre>withBase</code> 辅助函数的地方插入代码即可。</p>
<p>下面是一个示例，假设你有一个 Vue 组件文件（比如 <code v-pre>MyComponent.vue</code>）：</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 其他组件内容... --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>withBase(theme.logoPath)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> withBase<span class="token punctuation">,</span> useData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vitepress'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> theme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 样式、其他配置等... --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>&lt;img :src=&quot;withBase(theme.logoPath)&quot; /&gt;</code> 使用了 <code v-pre>withBase</code> 辅助函数，以确保 <code v-pre>theme.logoPath</code> 的路径是相对于站点的根路径的。这在处理资源路径时特别有用，尤其是在站点部署在子路径下时。确保你的组件文件是正确引入了 <code v-pre>withBase</code> 和 <code v-pre>useData</code>，以便这段代码能够正确运行。</p>
</div></template>



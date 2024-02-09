<template><div><h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>vue</span></a></h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p><code v-pre>vue</code> 是 VitePress 中的一个配置选项，允许你传递原始的 <code v-pre>@vitejs/plugin-vue</code> 插件配置给内部的 Vue 插件实例。这个选项允许你对 Vue 插件进行更细致的配置，以满足特定的需求或应用场景。</p>
<p>举例来说，如果你需要对 <code v-pre>@vitejs/plugin-vue</code> 插件进行特定的配置，比如自定义 Vue 的版本、配置 JSX、或者其他 Vue 插件相关的配置，你可以这样使用：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .vitepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 自定义 Vue 插件配置</span>
    <span class="token comment">// 这里可以传递所有 @vitejs/plugin-vue 支持的选项</span>
    <span class="token comment">// 详细配置可参考 @vitejs/plugin-vue 的文档：https://github.com/vitejs/vite/tree/main/packages/plugin-vue</span>
    <span class="token comment">// 例如设置自定义的 Vue 版本</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">compilerOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">isCustomElement</span><span class="token operator">:</span> <span class="token parameter">tag</span> <span class="token operator">=></span> tag<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'custom-'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 其他插件配置...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，<code v-pre>vue</code> 配置项允许你传递任何符合 <code v-pre>@vitejs/plugin-vue</code> 插件配置的选项给内部的 Vue 插件实例，从而定制 Vue 插件的行为以满足你的项目需求。这样你可以更灵活地配置 Vue 插件，例如自定义 Vue 模板编译选项、配置 JSX、或者其他插件相关的配置。详细的配置选项可以参考 <code v-pre>@vitejs/plugin-vue</code> 的官方文档。</p>
</div></template>



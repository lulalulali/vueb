<template><div><h1 id="vue-on-md" tabindex="-1"><a class="header-anchor" href="#vue-on-md"><span>vue on md</span></a></h1>
<h2 id="interpolation-插值语法" tabindex="-1"><a class="header-anchor" href="#interpolation-插值语法"><span>interpolation 插值语法</span></a></h2>
<p>当将 Markdown 文件编译成 HTML 并传递给 Vite 进程流水线时，你可以在文本中使用类似 Vue 的插值语法。这使得你可以在 Markdown 文件中嵌入 Vue 样式的插值、绑定等。</p>
<p>以下是一些例子：</p>
<ol>
<li>
<p><strong>Vue 插值：</strong></p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> My Page</span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> {{ title }}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>{{ title }}</code> 是一个 Vue 插值，它将在编译时被替换为 frontmatter 中定义的 <code v-pre>title</code>。</p>
</li>
<li>
<p><strong>动态 class 绑定：</strong></p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">isImportant</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="token punctuation">---</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ 'important': isImportant }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  This is an important message.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里使用了 Vue 的动态 class 绑定，根据 frontmatter 中的 <code v-pre>isImportant</code> 属性的值来决定是否应用 <code v-pre>important</code> 类。</p>
</li>
<li>
<p><strong>循环渲染列表：</strong></p>
<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">items</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> Apple
  <span class="token punctuation">-</span> Banana
  <span class="token punctuation">-</span> Orange</span>
<span class="token punctuation">---</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in items<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，利用 Vue 的 <code v-pre>v-for</code> 指令，将 frontmatter 中的 <code v-pre>items</code> 数组中的每个元素渲染成列表项。</p>
</li>
</ol>
<p>这些例子演示了在 Markdown 文件中使用 Vue 插值和指令的能力，允许你更灵活地结合 Vue 的功能和 Markdown 的文本内容。这样的集成使得在 VitePress 中创建动态、交互式的文档变得更为方便。</p>
<h2 id="script-style" tabindex="-1"><a class="header-anchor" href="#script-style"><span>script style</span></a></h2>
<p>在 VitePress 的 Markdown 文件中使用 <code v-pre>&lt;script setup&gt;</code> 和 <code v-pre>&lt;style module&gt;</code> 是不支持的。VitePress 对 Markdown 文件中的 <code v-pre>&lt;script&gt;</code> 和 <code v-pre>&lt;style&gt;</code> 进行了特殊处理，允许在其中使用 Vue 的插值语法和普通的样式，但并不支持 <code v-pre>&lt;script setup&gt;</code> 和 <code v-pre>&lt;style module&gt;</code> 这样的语法。</p>
<p>如果你需要在 Markdown 文件中使用 Vue 组件的 <code v-pre>&lt;script setup&gt;</code> 和 <code v-pre>&lt;style module&gt;</code>，可以考虑将该组件放在 <code v-pre>.vue</code> 单文件组件中，而不是在 Markdown 文件中。例如，将上述代码保存为一个名为 <code v-pre>MyComponent.vue</code> 的文件，内容如下：</p>
<!-- ```vue
<template>
  <div>
    <p>The count is: {{ count }}</p>
    <button :class="$style.button" @click="count++">Increment</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
``` -->
<p>然后，在你的 Markdown 文件中引入这个组件：</p>
<!-- ```markdown
---
hello: world
---
 <MyComponent />
``` -->
<p>这样，你就可以在 <code v-pre>.vue</code> 文件中使用 <code v-pre>&lt;script setup&gt;</code> 和 <code v-pre>&lt;style module&gt;</code>，并在 Markdown 文件中引入这个组件。这是一种更灵活的组织代码的方式，同时也能够利用 Vue 的强大功能。</p>
<h2 id="使用组件" tabindex="-1"><a class="header-anchor" href="#使用组件"><span>使用组件</span></a></h2>
<h3 id="在md中导入组件" tabindex="-1"><a class="header-anchor" href="#在md中导入组件"><span>在md中导入组件?</span></a></h3>
<h3 id="自定义-vue-实例来全局注册一个在大多数界面上用的组件" tabindex="-1"><a class="header-anchor" href="#自定义-vue-实例来全局注册一个在大多数界面上用的组件"><span>自定义 Vue 实例来全局注册一个在大多数界面上用的组件</span></a></h3>
<h3 id="标题中使用组件" tabindex="-1"><a class="header-anchor" href="#标题中使用组件"><span>标题中使用组件</span></a></h3>
</div></template>



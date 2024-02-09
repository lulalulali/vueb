<template><div><h1 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>error</span></a></h1>
<h2 id="npm-run-dev-npm-err-missing-script-dev" tabindex="-1"><a class="header-anchor" href="#npm-run-dev-npm-err-missing-script-dev"><span>npm run dev npm ERR! Missing script: &quot;dev&quot;</span></a></h2>
<p>这个错误表明 npm 找不到名为 &quot;dev&quot; 的脚本。这可能是因为在项目的 <code v-pre>package.json</code> 文件中没有定义 &quot;dev&quot; 脚本。</p>
<p>请确保在你的项目的 <code v-pre>package.json</code> 文件中包含 &quot;scripts&quot; 部分，类似于以下内容：</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"your-dev-script-here"</span><span class="token punctuation">,</span>
  <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"your-build-script-here"</span><span class="token punctuation">,</span>
  <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"your-start-script-here"</span><span class="token punctuation">,</span>
  <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"your-test-script-here"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请将 <code v-pre>&quot;your-dev-script-here&quot;</code> 替换为你用于启动开发服务器的实际脚本命令。通常，对于 Next.js 项目，它应该是类似于 <code v-pre>&quot;next dev&quot;</code> 的命令。</p>
<p>确保你的 <code v-pre>package.json</code> 文件中有正确的 &quot;scripts&quot; 部分，并且 &quot;dev&quot; 脚本已正确定义。然后再次运行 <code v-pre>npm run dev</code>。如果问题仍然存在，请检查你的脚本命令和文件路径是否正确。</p>
</div></template>



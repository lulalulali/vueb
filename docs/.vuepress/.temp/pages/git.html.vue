<template><div><h1 id="git相关" tabindex="-1"><a class="header-anchor" href="#git相关"><span>git相关</span></a></h1>
<h2 id="确保我的项目是通过-git-进行版本控制的-并且每个-markdown-文件都有对应的提交记录" tabindex="-1"><a class="header-anchor" href="#确保我的项目是通过-git-进行版本控制的-并且每个-markdown-文件都有对应的提交记录"><span>确保我的项目是通过 Git 进行版本控制的，并且每个 Markdown 文件都有对应的提交记录</span></a></h2>
<p>确保你的项目通过 Git 进行版本控制，每个 Markdown 文件都有对应的提交记录，可以按照以下步骤进行操作：</p>
<ol>
<li>
<p><strong>初始化 Git 仓库：</strong> 打开命令行终端，进入你的项目目录，并执行以下命令来初始化一个新的 Git 仓库：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这会在项目目录中创建一个名为 <code v-pre>.git</code> 的隐藏文件夹，表示 Git 仓库已经初始化。</p>
</li>
<li>
<p><strong>添加文件到暂存区：</strong> 将项目中的所有文件添加到 Git 的暂存区，准备提交：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这会将所有未追踪或已修改的文件添加到 Git 暂存区。</p>
</li>
<li>
<p><strong>提交更改：</strong> 提交暂存区中的更改到本地仓库，并添加一条提交消息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Initial commit"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就完成了第一次提交，并添加了一条提交消息 &quot;Initial commit&quot;。</p>
</li>
<li>
<p><strong>为每个 Markdown 文件重复上述步骤：</strong> 对于每个 Markdown 文件，重复执行上述步骤。确保每个文件都在 Git 仓库中有对应的提交记录。</p>
</li>
<li>
<p><strong>查看提交记录：</strong> 你可以使用以下命令查看提交记录：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这会显示所有的提交记录，包括提交者、提交时间、提交消息等信息。</p>
</li>
</ol>
<p>确保每个 Markdown 文件都有对应的提交记录后，VitePress 就能够正确地获取最后更新时间戳，并在页面底部显示最后更新时间。如果遇到问题，可以再次检查每个文件的提交历史，确保没有漏掉任何文件。</p>
<p>这是因为在提交代码时，Git 要求你提供用户身份信息，包括邮箱地址和用户名。你可以按照下面的步骤解决这个问题：</p>
<ol>
<li>
<p><strong>设置全局用户信息：</strong> 打开命令行终端，执行以下命令设置全局的用户邮箱和用户名。将命令中的邮箱地址和用户名替换为你自己的信息。</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"you@example.com"</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"Your Name"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就设置了全局的用户信息，Git 将在所有仓库中使用这些信息。</p>
</li>
<li>
<p><strong>重新提交代码：</strong> 重新执行之前的提交命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Initial commit"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在应该不再提示关于用户身份的错误。</p>
</li>
</ol>
<p>如果你只想在当前仓库设置用户信息而不是全局设置，可以省略 <code v-pre>--global</code>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config user.email <span class="token string">"you@example.com"</span>
<span class="token function">git</span> config user.name <span class="token string">"Your Name"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再执行提交命令。这样就能够成功提交代码了。</p>
</div></template>



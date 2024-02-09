<template><div><h1 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行"><span>命令行</span></a></h1>
<p>&quot;命令行&quot; 通常是对 &quot;命令行界面&quot; 的缩写，英文为 Command Line Interface，简称 CLI。命令行界面是一种通过键入文本命令来与计算机系统进行交互的用户界面。CLI 允许用户通过命令来执行操作、运行程序、管理文件系统等，而不需要使用图形化用户界面（GUI）。</p>
<p>在 CLI 中，用户可以输入特定的命令和参数，以执行各种操作。这些命令通常是系统提供的工具或者程序，用户可以使用它们来完成各种任务，例如在操作系统中创建、复制、移动文件，安装软件包，管理系统配置等等。</p>
<p>常见的 CLI 包括 Windows 的命令提示符（Command Prompt）、Windows PowerShell、Unix 和类 Unix 系统（如 Linux 和 macOS）中的 Shell（比如 Bash、Zsh、Fish 等）等。这些命令行界面在不同的操作系统中有不同的特性和命令，但它们都遵循类似的交互模式，即通过命令和参数来操作计算机系统。</p>
<h2 id="在vscode中打开" tabindex="-1"><a class="header-anchor" href="#在vscode中打开"><span>在vscode中打开</span></a></h2>
<p>命令行终端是计算机操作系统中的一个程序，它提供了一个命令行界面，让用户通过键盘输入命令并与计算机进行交互。在命令行终端中，用户可以执行各种命令来操作文件、运行程序、管理系统等，而无需使用图形化界面。</p>
<p>在 Visual Studio Code（VSCode）中打开命令行终端并运行命令的方式如下：</p>
<ol>
<li>
<p><strong>打开 VSCode</strong>：首先打开 Visual Studio Code 编辑器。</p>
</li>
<li>
<p><strong>打开终端</strong>：在 VSCode 中，你可以使用快捷键 <code v-pre>Ctrl+``（Windows/Linux）或</code>Cmd+``（macOS）来打开终端。你也可以通过菜单栏选择 Terminal -&gt; New Terminal 打开终端。</p>
</li>
<li>
<p><strong>在终端中运行命令</strong>：在打开的终端窗口中，你可以输入各种命令，并按下回车键执行这些命令。例如，你可以输入 <code v-pre>npm install</code> 来安装 Node.js 项目的依赖，或者输入 <code v-pre>git clone</code> 来克隆一个 Git 仓库。</p>
</li>
</ol>
<p>通过在 VSCode 中打开终端，你可以直接在编辑器中执行命令，方便地进行项目管理、代码调试和其他开发任务。</p>
<h2 id="在vscode中关闭" tabindex="-1"><a class="header-anchor" href="#在vscode中关闭"><span>在vscode中关闭</span></a></h2>
<p>在 Visual Studio Code 中，你可以使用以下快捷键来终止终端进程：</p>
<ul>
<li><strong>Windows / Linux</strong>：使用 <code v-pre>Ctrl + C</code> 快捷键可以中止终端中正在运行的进程或命令。</li>
<li><strong>macOS</strong>：使用 <code v-pre>Cmd + C</code> 可以中止终端中正在运行的进程或命令。</li>
</ul>
<p>按下对应的组合键会发送一个中止信号给当前在终端中运行的进程，使其停止执行。这对于停止正在运行的命令或程序非常有用。</p>
<h2 id="清除缓存并重新构建项目" tabindex="-1"><a class="header-anchor" href="#清除缓存并重新构建项目"><span>清除缓存并重新构建项目</span></a></h2>
<p>在重新构建项目之前，清除缓存通常可以解决一些奇怪的问题或构建错误。清除缓存的具体步骤取决于你使用的工具或框架。</p>
<p>一般来说，以下是一些通用的步骤：
使用 npm：
在终端中运行以下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这会清除 npm 的缓存。接下来，你可以删除项目中的 <code v-pre>node_modules</code> 文件夹并重新安装依赖：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-yarn" tabindex="-1"><a class="header-anchor" href="#使用-yarn"><span>使用 Yarn</span></a></h3>
<p>如果你使用 Yarn 作为包管理器，你可以在终端中运行以下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> cache clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后删除 <code v-pre>node_modules</code> 文件夹并重新安装依赖：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules
<span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对于特定工具或框架" tabindex="-1"><a class="header-anchor" href="#对于特定工具或框架"><span>对于特定工具或框架</span></a></h3>
<p>有些工具或框架可能有其特定的缓存清理命令或重新构建方法。例如，对于 React 项目，你可以尝试运行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> build
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这些命令会清除特定工具或框架生成的缓存并重新构建项目。确保在执行这些命令之前备份重要的数据，并确保你了解它们的影响，因为这些操作可能会导致某些配置或数据丢失。</p>
<h2 id="在vscode的调试终端中无法输入命令行" tabindex="-1"><a class="header-anchor" href="#在vscode的调试终端中无法输入命令行"><span>在vscode的调试终端中无法输入命令行</span></a></h2>
<p>在 Visual Studio Code 的调试终端中无法输入命令行通常是由于以下几个可能的原因：</p>
<ol>
<li>
<p><strong>选择了错误的终端类型</strong>：确保你选择了一个支持交互式命令行输入的终端。某些调试配置可能会打开一个不支持标准输入的终端。</p>
</li>
<li>
<p><strong>正在运行的程序占用了输入</strong>：如果终端中有运行中的程序（如正在运行的脚本、程序等），它可能会占用输入流。在这种情况下，你需要停止正在运行的程序才能进行输入。</p>
</li>
<li>
<p><strong>终端配置或设置问题</strong>：检查 VS Code 的终端设置，确保它没有被配置为只读模式或者有其他限制输入的设置。</p>
</li>
<li>
<p><strong>VS Code 或扩展问题</strong>：有时，VS Code 或某些扩展可能会出现问题，导致终端无法正常工作。尝试重新启动 VS Code 或者在没有加载任何扩展的情况下打开终端。</p>
</li>
</ol>
<p>尝试解决这些问题可能需要进行一些测试和排查。可以尝试打开新的终端窗口，关闭其他正在运行的程序，检查 VS Code 的设置，以及重新启动 VS Code 等方式来解决无法输入命令行的问题。</p>
<table>
<thead>
<tr>
<th>姓名\科目</th>
<th style="text-align:center">英语</th>
<th style="text-align:right">数学</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td style="text-align:center">78</td>
<td style="text-align:right">88</td>
</tr>
<tr>
<td>B</td>
<td style="text-align:center">9</td>
<td style="text-align:right">57</td>
</tr>
<tr>
<td>Z</td>
<td style="text-align:center">0</td>
<td style="text-align:right">40</td>
</tr>
</tbody>
</table>
<h2 id="简单的命令行" tabindex="-1"><a class="header-anchor" href="#简单的命令行"><span>简单的命令行</span></a></h2>
<p>下面是简单的例子，演示如何在命令行中使用这些 Vite 选项：</p>
<ol>
<li>
<p><strong>--open [path]：</strong></p>
<ul>
<li>
<p>启动时打开浏览器，可以提供可选的路径参数。默认是布尔值 <code v-pre>true</code>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>vite <span class="token parameter variable">--open</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>--port &lt;port：</strong></p>
<ul>
<li>
<p>指定端口号。替换 <code v-pre>&lt;port&gt;</code> 为你想要的端口号，例如使用端口号 <code v-pre>8080</code>：</p>
<div class="language-bas line-numbers-mode" data-ext="bas" data-title="bas"><pre v-pre class="language-bas"><code>vite --port 8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>--base &lt;path：</strong></p>
<ul>
<li>
<p>设置 public base URL。替换 <code v-pre>&lt;path&gt;</code> 为你的基本路径，例如 <code v-pre>/my-app</code>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>vite <span class="token parameter variable">--base</span> /my-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>--cors：</strong></p>
<ul>
<li>
<p>启用 CORS。不需要额外参数，只需添加 <code v-pre>--cors</code>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>vite <span class="token parameter variable">--cors</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>--strictPort：</strong></p>
<ul>
<li>
<p>如果指定的端口已被占用则退出。只需添加 <code v-pre>--strictPort</code>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>vite <span class="token parameter variable">--strictPort</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>--force：</strong></p>
<ul>
<li>
<p>强制优化程序忽略缓存并重新绑定。只需添加 <code v-pre>--force</code>：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>
vite <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
<p>请注意，这里的例子是在命令行中执行的。确保你已经进入了你的项目目录，然后在命令行中运行这些命令。</p>
</div></template>



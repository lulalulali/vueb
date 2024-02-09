<template><div><h1 id="域名" tabindex="-1"><a class="header-anchor" href="#域名"><span>域名</span></a></h1>
<h2 id="更改域名显示想要的文档的方式" tabindex="-1"><a class="header-anchor" href="#更改域名显示想要的文档的方式"><span>更改域名显示想要的文档的方式</span></a></h2>
<h3 id="_1-路由配置" tabindex="-1"><a class="header-anchor" href="#_1-路由配置"><span>1. 路由配置</span></a></h3>
<p>通过设置路由，可以将不同的 URL 映射到不同的文档或页面。在前端开发中，可以使用路由库（如 React Router、Vue Router 等）来管理 URL 和页面之间的映射关系。</p>
<h3 id="_2-后端配置" tabindex="-1"><a class="header-anchor" href="#_2-后端配置"><span>2. 后端配置</span></a></h3>
<p>如果是在服务器端进行开发，可以在后端代码中配置路由，使不同的 URL 请求能够返回不同的文档或页面内容。这通常涉及使用服务器端框架（例如 Express.js、Django、Spring 等）来处理路由和请求。</p>
<h3 id="_3-文件系统结构" tabindex="-1"><a class="header-anchor" href="#_3-文件系统结构"><span>3. 文件系统结构</span></a></h3>
<p>另一种方式是直接在文件系统中组织文档结构。通过在特定文件夹下创建不同的文件或子文件夹，可以实现不同路径对应不同的文档或页面。</p>
<p>关于如何更改域名显示特定文档的方法，具体取决于你使用的技术栈和开发框架。你可能需要编辑路由配置、后端代码或文件系统结构来实现这个目标。如果你使用特定的框架或工具，可以查阅相关文档或教程，寻找关于路由配置或页面组织的指南。</p>
<h2 id="url-路径与相对文件路径-特征" tabindex="-1"><a class="header-anchor" href="#url-路径与相对文件路径-特征"><span>url 路径与相对文件路径 特征</span></a></h2>
<p>URL（Uniform Resource Locator）是用于定位资源的地址。它是在网络上标识和定位资源（比如网页、图像、文件等）的方式。URL 通常由多个部分组成：</p>
<ul>
<li><strong>协议</strong>：通常是 <code v-pre>http://</code> 或 <code v-pre>https://</code>，指定了访问资源所使用的协议。</li>
<li><strong>域名</strong>：指定了资源所在的主机或服务器的名称，比如 <code v-pre>www.example.com</code>。</li>
<li><strong>路径</strong>：资源在服务器上的位置，指定了服务器上文件的位置或具体的路由，以便访问特定的内容。</li>
<li><strong>查询参数</strong>：可选的部分，用于向服务器传递额外的参数，以影响资源的呈现或请求的处理。</li>
</ul>
<p>相对文件路径是文件系统中用于定位文件相对位置的方式。它描述了一个文件相对于另一个文件或当前工作目录的位置。相对路径可以是：</p>
<ul>
<li><strong>相对于当前文件夹的路径</strong>：比如 <code v-pre>./file.txt</code>，表示在当前文件夹中查找文件 <code v-pre>file.txt</code>。</li>
<li><strong>相对于父文件夹的路径</strong>：比如 <code v-pre>../parentFolder/file.txt</code>，表示在当前文件夹的父文件夹中查找 <code v-pre>file.txt</code>。</li>
</ul>
<h3 id="特征" tabindex="-1"><a class="header-anchor" href="#特征"><span>特征</span></a></h3>
<ul>
<li>
<p><strong>URL 路径特征</strong>：</p>
<ul>
<li>包含协议、域名、路径等组成部分。</li>
<li>用于在网络上定位和访问资源。</li>
<li>可能包含查询参数来影响请求的行为。</li>
</ul>
</li>
<li>
<p><strong>相对文件路径特征</strong>：</p>
<ul>
<li>描述了文件相对于其他文件或当前工作目录的位置。</li>
<li>可以使用相对于当前文件夹或父文件夹的路径表示位置。</li>
<li>在文件系统中使用，用于定位文件或文件夹的位置。</li>
</ul>
</li>
</ul>
<p>两者的主要区别在于用途和应用场景。URL 路径用于在网络上定位资源，而相对文件路径用于在文件系统中定位文件或文件夹。相对文件路径更侧重于描述文件在文件系统中的位置关系，而 URL 更侧重于在网络上定位资源的位置。</p>
</div></template>



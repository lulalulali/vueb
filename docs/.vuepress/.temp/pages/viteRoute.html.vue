<template><div><h2 id="vitepress提供简洁-url的服务器端支持" tabindex="-1"><a class="header-anchor" href="#vitepress提供简洁-url的服务器端支持"><span>VitePress提供简洁 URL的服务器端支持</span></a></h2>
<p>要在 VitePress 中使用简洁的 URL，需要服务器端支持 URL 重写或路由配置。通常，这需要服务器配置支持 URL 重写规则，确保服务器能够正确地解析和响应这些简洁的 URL。</p>
<p>对于 VitePress 或其他静态站点生成器，你可以使用服务器（如 Nginx、Apache 等）的配置来处理这一点。以下是一些常用的服务器配置示例：</p>
<h3 id="nginx-配置示例" tabindex="-1"><a class="header-anchor" href="#nginx-配置示例"><span>Nginx 配置示例</span></a></h3>
<p>如果你使用 Nginx 作为服务器，可以通过配置文件实现 URL 重写。示例配置如下：</p>
<div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> yourdomain.com</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ @rewrites</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> @rewrites</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">rewrite</span> ^/(.*)$ /index.html last</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个配置将所有的 URL 请求都重定向到 <code v-pre>index.html</code> 文件，然后由 VitePress 处理路由。</p>
<h3 id="apache-配置示例" tabindex="-1"><a class="header-anchor" href="#apache-配置示例"><span>Apache 配置示例</span></a></h3>
<p>如果你使用 Apache 服务器，可以通过 <code v-pre>.htaccess</code> 文件进行 URL 重写。示例配置如下：</p>
<div class="language-apache line-numbers-mode" data-ext="apache" data-title="apache"><pre v-pre class="language-apache"><code>&lt;IfModule mod_rewrite.c&gt;
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
&lt;/IfModule&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个配置会将所有请求指向 <code v-pre>index.html</code>，这样 VitePress 就能处理路由了。</p>
<p>请注意，以上示例配置可能需要根据你的具体情况进行调整。在实际应用中，确保备份你的服务器配置文件，并谨慎修改。</p>
<p>在配置完成之后，服务器就能正确地解析 VitePress 中的路由并提供简洁的 URL 支持了。</p>
</div></template>



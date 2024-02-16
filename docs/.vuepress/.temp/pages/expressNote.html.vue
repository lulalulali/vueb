<template><div><h1 id="express" tabindex="-1"><a class="header-anchor" href="#express"><span>express</span></a></h1>
<h2 id="随笔" tabindex="-1"><a class="header-anchor" href="#随笔"><span>随笔</span></a></h2>
<p>计算机的文档一般不是给非专业人士看的，揭示技术性细节而不是力求讲的通俗易懂。</p>
<p>vscode中，蓝色：关键字和语法元素if return function var
棕色深绿：字符串 文本
注释：灰 绿
错误：红 橙
高亮、选中:淡蓝色
版本控制：已修改绿色 已添加 蓝色
先做起来再说，哪怕一件事很困难，就像魔法刚开始的第一步，如果不是冲动，我根本接触不到y，学不会。现在再也不为各种方式担心。
哪怕不是高手，是萌新，可以装作自己很会，坚持下来，慢慢的，我真的就是了。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>关于配置的问题，在搞不清楚背后的内核之前，多试几次，多问问gpt，说不定就实现了
put是更新、放上一个新的资源
post是发一个、上传一个
delete是删一个
app.use(express.static('public'))就是允许找public下的文件
app.use('/static', express.static('public'))就是输static能找public的文件
app.use('/static', express.static(path.join(__dirname, 'public')))最好用绝对路径，因为express的运行目录。
多个回调函数处理一个路由，（）中的，后用next
回调函数组处理路由就是，后[]弄几个回调函数
独立函数和函数组处理，就是按序添加。
app.route()就是用来减少书写量的，可以把同一路由的put。post。get搞一起。
express.route  先在另一个js中创建route模块，然后在appjs中用app.use('/myroute', router);</p>
<h2 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件"><span>中间件</span></a></h2>
<p>中间件函数按序加载
有mylog中间件函数
有requesttime中间件函数
有validatecookies中间件函数 ：外部异步服务来验证 try catch模式
可配置的中间件:弄一个middleware.js来，写接受选择对象或其他参数的函数；然后app.use(mw({ option1: '1', option2: '2' }))来使用中间件。</p>
<h2 id="使用中间件" tabindex="-1"><a class="header-anchor" href="#使用中间件"><span>使用中间件</span></a></h2>
<p>没挂路径，即use后括号没有路径
挂在在路径上就是特定路径才启用</p>
<p>1是上线不了 没弄了 2是有些文档不是按添加代码达到一整个项目这样的思路设计的，我如何正确添加，尤其是涉及到js的核心的内容</p>
</div></template>



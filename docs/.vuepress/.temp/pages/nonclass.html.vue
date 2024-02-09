<template><div><h1 id="nonclass" tabindex="-1"><a class="header-anchor" href="#nonclass"><span>Nonclass</span></a></h1>
<p>在本地搭建一个网站并运行，涉及到多个工具和技术，以下是它们的作用和关系：</p>
<ol>
<li>
<p><strong>Node.js</strong>:</p>
<ul>
<li>作用：Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，用于构建服务器端应用程序。</li>
<li>关系：在本地搭建网站通常需要一个后端服务器，而 Node.js 提供了构建后端服务的能力。</li>
</ul>
</li>
<li>
<p><strong>NPM (Node Package Manager)</strong>:</p>
<ul>
<li>作用：NPM 是 Node.js 的包管理工具，用于安装、管理和共享 JavaScript 包。</li>
<li>关系：通过 NPM，您可以轻松地安装和管理项目中所需的各种依赖包。</li>
</ul>
</li>
<li>
<p><strong>Visual Studio Code (VSCode)</strong>:</p>
<ul>
<li>作用：VSCode 是一个开发者友好的集成开发环境 (IDE)，用于编写、调试和管理代码。</li>
<li>关系：您可以使用 VSCode 编辑和管理项目代码，同时它提供了许多插件和工具，使得开发更加高效。</li>
</ul>
</li>
<li>
<p><strong>Next.js</strong>:</p>
<ul>
<li>作用：Next.js 是一个 React 框架，用于构建 React 应用程序，具有服务端渲染 (SSR) 和静态网站生成 (SSG) 的能力。</li>
<li>关系：通过 Next.js，您可以创建强大的 React 应用程序，并轻松处理服务器渲染和静态生成的需求。</li>
</ul>
</li>
<li>
<p><strong>PowerShell</strong>:</p>
<ul>
<li>作用：PowerShell 是一个跨平台的任务自动化和配置管理框架，也是一个命令行 Shell。</li>
<li>关系：在 Windows 环境下，PowerShell 可以用于执行各种命令和任务，包括启动 Node.js 服务器、运行 NPM 脚本等。</li>
</ul>
</li>
</ol>
<p>基本的流程可能如下：</p>
<ul>
<li>
<p>使用 VSCode 编写和管理代码。</p>
</li>
<li>
<p>使用 PowerShell 或其他命令行工具执行 Node.js 相关的命令，如安装依赖、运行服务器等。</p>
</li>
<li>
<p>使用 NPM 安装项目依赖。</p>
</li>
<li>
<p>使用 Next.js 构建和运行 React 应用程序。</p>
</li>
</ul>
<p>具体的步骤和命令会根据您的项目类型和需求而有所不同。如果您有特定的问题或需要详细的指导，请提供更多信息。</p>
<h2 id="typescript-和-javascript" tabindex="-1"><a class="header-anchor" href="#typescript-和-javascript"><span>TypeScript 和 JavaScript</span></a></h2>
<p>TypeScript 和 JavaScript 都是编程语言，它们有一些相同之处，但也有一些重要的区别。</p>
<p><strong>JavaScript:</strong></p>
<ul>
<li>
<p>JavaScript 是一种脚本语言，最初设计用于在浏览器中添加动态交互。</p>
</li>
<li>
<p>它是一种解释型语言，运行时由浏览器解释和执行。</p>
</li>
<li>
<p>JavaScript 是一门弱类型语言，变量类型在运行时可以动态改变。</p>
</li>
<li>
<p>在 JavaScript 中，通常使用 ECMAScript 标准定义的语法和功能。</p>
</li>
</ul>
<p><strong>TypeScript:</strong></p>
<ul>
<li>TypeScript 是 JavaScript 的超集，意味着它包含所有 JavaScript 的功能并添加了一些额外的功能。</li>
<li>TypeScript 引入了静态类型系统，允许在开发过程中检测和纠正类型错误。</li>
<li>TypeScript 需要通过编译步骤将 TypeScript 代码转换为 JavaScript 代码，这个编译步骤由 TypeScript 编译器（tsc）完成。</li>
<li>TypeScript 提供了接口、枚举、泛型等 JavaScript 不具备的特性，以提高代码的可维护性和可读性。</li>
</ul>
<p><strong>相同点：</strong></p>
<ul>
<li>TypeScript 是 JavaScript 的超集，因此所有有效的 JavaScript 代码都是有效的 TypeScript 代码。</li>
<li>两者都可用于编写前端和后端的应用程序。</li>
</ul>
<p><strong>不同点：</strong></p>
<ul>
<li>TypeScript 具有静态类型系统，而 JavaScript 是动态类型的。</li>
<li>TypeScript 提供了更多的工具和功能，如接口、枚举、泛型等，以帮助开发者更好地组织和维护代码。</li>
<li>TypeScript 需要编译步骤，而 JavaScript 可以直接在运行时解释和执行。</li>
</ul>
<p>选择 TypeScript 还是 JavaScript 取决于项目的需求和开发者的偏好。TypeScript 在大型项目中更容易捕捉错误，并且在团队协作时提供更好的代码提示和文档。然而，对于小型项目或新手开发者来说，JavaScript 可能更简单和直观。</p>
<h2 id="ui" tabindex="-1"><a class="header-anchor" href="#ui"><span>ui</span></a></h2>
<p>UI 是 &quot;User Interface&quot; 的缩写，翻译为中文是用户界面。用户界面是用户与软件或应用程序进行交互的平台或界面，用于实现用户与系统之间的信息交流。UI 的设计旨在使用户的操作变得直观、简单、高效，并提供良好的用户体验。</p>
<p>UI 主要包括以下几个方面：</p>
<ol>
<li>
<p><strong>图形用户界面（GUI）：</strong> 这是最常见的 UI 类型，它使用图形元素（如按钮、文本框、图标等）以及鼠标和键盘来实现用户与计算机之间的交互。操作系统的桌面环境和许多应用程序都采用 GUI。</p>
</li>
<li>
<p><strong>命令行界面（CLI）：</strong> CLI 是一种通过命令行输入文本指令来进行交互的用户界面。用户通过键入特定的命令来执行操作。虽然在图形用户界面变得普遍的今天，CLI 仍然被一些开发者和系统管理员用于执行一些高级任务。</p>
</li>
<li>
<p><strong>Web 用户界面：</strong> 随着 Web 应用的广泛使用，Web 用户界面成为了一种重要的 UI 类型。它基于 Web 技术，通过浏览器来呈现用户界面。这包括通过 HTML、CSS 和 JavaScript 构建的网页应用程序。</p>
</li>
<li>
<p><strong>移动应用界面：</strong> 随着移动设备的普及，移动应用的用户界面变得越来越重要。这些界面通常设计为适应小屏幕，并利用触摸屏等移动设备特有的交互方式。</p>
</li>
</ol>
<p>UI 设计是一个复杂的过程，涉及到用户需求分析、信息架构、交互设计、视觉设计等多个方面。好的 UI 设计能够提高用户的使用体验，使应用程序更易于理解和操作。</p>
<h2 id="项目依赖项和脚本" tabindex="-1"><a class="header-anchor" href="#项目依赖项和脚本"><span>项目依赖项和脚本</span></a></h2>
<p>让我们通过一个简单的比喻来理解项目依赖项和脚本。</p>
<p>故事：小明的搭积木项目</p>
<p>小明是一个喜欢搭积木的孩子，他决定搭建一个城堡。城堡有很多部分，比如墙、塔楼、楼梯等等。为了完成这个项目，小明需要使用一些不同类型的积木。</p>
<h3 id="_1-项目依赖项" tabindex="-1"><a class="header-anchor" href="#_1-项目依赖项"><span>1. 项目依赖项</span></a></h3>
<p>小明去搭积木商店购买了他需要的各种积木。这些积木就是他项目的依赖项。每个积木都有不同的功能，比如有的是墙的积木，有的是塔楼的积木。小明需要这些不同的积木来构建他的城堡。</p>
<p>在软件开发中，项目依赖项就像是小明需要的积木。这些依赖项可能是代码库、框架、库文件等，它们是项目运行所需要的各种资源。</p>
<h3 id="_2-脚本" tabindex="-1"><a class="header-anchor" href="#_2-脚本"><span>2. 脚本</span></a></h3>
<p>小明开始搭建城堡的时候，他需要按照一定的步骤来组装积木，比如先搭建墙，再建造塔楼。这些步骤就像是项目中的脚本。脚本是一系列命令或操作，用于执行特定的任务。</p>
<p>在软件开发中，脚本通常是一些命令或程序，用于执行项目中的各种任务，比如构建、测试、部署等。开发者可以通过执行脚本来完成特定的工作，就像小明通过执行搭积木的步骤来完成城堡的建设。</p>
<h3 id="_3-整个场景" tabindex="-1"><a class="header-anchor" href="#_3-整个场景"><span>3. 整个场景</span></a></h3>
<p>小明购买了积木（项目依赖项），然后按照一定的步骤搭建了城堡（执行脚本）。这个过程中，积木和搭建步骤是分离的，小明可以根据需要更换不同的积木或修改搭建步骤，而不影响整个项目的结构。</p>
<p>在软件开发中，类似地，项目依赖项和脚本也是分离的。开发者可以管理项目的依赖项，同时通过调整脚本来完成各种开发任务。这种模块化的设计使得项目更加灵活和可维护。</p>
<h2 id="快速注释" tabindex="-1"><a class="header-anchor" href="#快速注释"><span>快速注释</span></a></h2>
<p>在 Visual Studio Code 中，你可以使用以下快捷键来快速注释/取消注释大段代码：</p>
<ol>
<li>
<p><strong>Windows/Linux 下的快捷键：</strong></p>
<ul>
<li>注释：<code v-pre>Ctrl</code> + <code v-pre>Shift</code> + <code v-pre>A</code></li>
<li>取消注释：<code v-pre>Ctrl</code> + <code v-pre>Shift</code> + <code v-pre>A</code></li>
</ul>
</li>
<li>
<p><strong>Mac 下的快捷键：</strong></p>
<ul>
<li>注释：<code v-pre>Command</code> + <code v-pre>Option</code> + <code v-pre>A</code></li>
<li>取消注释：<code v-pre>Command</code> + <code v-pre>Option</code> + <code v-pre>A</code></li>
</ul>
</li>
</ol>
<p>以上快捷键会根据光标所在行或选择的代码块进行注释或取消注释。如果需要注释整个代码块，你可以先选中整个代码块，然后按上述快捷键。</p>
<p>如果你的 Visual Studio Code 中没有生效，可能是因为快捷键与其他扩展或系统设置冲突。你可以尝试在设置中搜索 &quot;comment&quot;，看看与注释相关的快捷键是否有冲突，或者自定义一个不冲突的快捷键。</p>
<h2 id="图像优化相关岗" tabindex="-1"><a class="header-anchor" href="#图像优化相关岗"><span>图像优化相关岗</span></a></h2>
<p>在图像优化领域，有一些专门的职位和岗位，其中一些可能会集中在 Web 开发或数字媒体领域。以下是一些相关的职位：</p>
<ol>
<li>
<p><strong>图像优化工程师：</strong> 专注于开发和实施图像优化策略，以确保网站和应用程序中的图像在质量和性能之间取得平衡。</p>
</li>
<li>
<p><strong>Web 性能优化工程师：</strong> 关注网站性能的改进，包括图像优化在内。这些工程师可能会使用各种工具和技术，如图像压缩、延迟加载和使用现代图片格式等，以提高页面加载速度。</p>
</li>
<li>
<p><strong>前端工程师/开发者：</strong> 前端开发人员通常会涉及到图像优化，尤其是在构建和优化网站时。他们需要了解如何最大程度地减小图像文件大小、提高加载速度，以及在不影响视觉质量的前提下进行压缩。</p>
</li>
<li>
<p><strong>用户体验（UX）设计师：</strong> UX 设计师通常也需要关注图像的使用和性能，以确保用户在访问网站或应用时有良好的体验。这可能包括选择适当的图像、创建可访问的图像，以及确保图像对页面性能没有负面影响。</p>
</li>
<li>
<p><strong>数字媒体设计师：</strong> 负责创建和编辑网站、应用或其他数字媒体的图像。图像优化是他们工作的一部分，以确保图像在不同分辨率和屏幕大小上都能够良好地呈现。</p>
</li>
<li>
<p><strong>性能工程师：</strong> 在整体性能方面工作，包括网站和应用程序的性能。图像优化是性能工程的一个关键方面。</p>
</li>
<li>
<p><strong>图形设计师：</strong> 负责创建高质量的图像和图形，但他们的工作也可能涉及到选择适当的图像格式和优化图像以适应不同的用途。</p>
</li>
</ol>
<p>这些职位可能有重叠，特别是在小型团队或创业公司中。在大型组织中，专门负责图像优化的职位可能会更为明确。图像优化通常涉及技术和设计方面的知识，因此跨职能团队的协作是非常重要的。</p>
<h2 id="orm和sql" tabindex="-1"><a class="header-anchor" href="#orm和sql"><span>ORM和SQL</span></a></h2>
<p>ORM（Object-Relational Mapping）是一种编程技术，它允许开发者在应用程序中使用面向对象的方式来操作数据库，而不必直接编写 SQL 查询语句。ORM 将数据库表映射为对象，开发者可以通过编写代码来操作这些对象，而不用关心底层的数据库细节。</p>
<p>比方说，假设你有一个简单的学生信息管理系统，其中有一个学生表格，包含学生的姓名、年龄、学号等信息。使用 ORM 的话，你可以定义一个学生对象（类），并且通过这个对象的实例来进行数据库的操作，而不必编写 SQL 语句。</p>
<p>示例（使用 Python 的 SQLAlchemy ORM）：</p>
<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre v-pre class="language-python"><code><span class="token comment"># 定义学生对象</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span>Base<span class="token punctuation">)</span><span class="token punctuation">:</span>
    __tablename__ <span class="token operator">=</span> <span class="token string">'students'</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> Column<span class="token punctuation">(</span>Integer<span class="token punctuation">,</span> primary_key<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    name <span class="token operator">=</span> Column<span class="token punctuation">(</span>String<span class="token punctuation">)</span>
    age <span class="token operator">=</span> Column<span class="token punctuation">(</span>Integer<span class="token punctuation">)</span>
    student_id <span class="token operator">=</span> Column<span class="token punctuation">(</span>String<span class="token punctuation">,</span> unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment"># 插入新学生</span>
new_student <span class="token operator">=</span> Student<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">'John Doe'</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> student_id<span class="token operator">=</span><span class="token string">'12345'</span><span class="token punctuation">)</span>
session<span class="token punctuation">.</span>add<span class="token punctuation">(</span>new_student<span class="token punctuation">)</span>
session<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 查询所有学生</span>
all_students <span class="token operator">=</span> session<span class="token punctuation">.</span>query<span class="token punctuation">(</span>Student<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 根据条件查询学生</span>
specific_students <span class="token operator">=</span> session<span class="token punctuation">.</span>query<span class="token punctuation">(</span>Student<span class="token punctuation">)</span><span class="token punctuation">.</span>filter_by<span class="token punctuation">(</span>age<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>Student</code> 对象被映射到数据库中的 <code v-pre>students</code> 表格，ORM 负责将对象操作翻译成相应的 SQL 查询，开发者只需要使用面向对象的方式进行数据操作。</p>
<p>而 SQL（Structured Query Language）是一种用于管理和操作关系型数据库的标准化查询语言。它使用类似于自然语言的语法，用于执行各种数据库操作，包括查询、插入、更新和删除数据等。</p>
<p>比方说，如果我们要查询所有年龄为 20 岁的学生，对应的 SQL 查询语句可能是：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> students <span class="token keyword">WHERE</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个查询语句会从数据库中的 <code v-pre>students</code> 表格中选择所有年龄为 20 岁的学生记录。ORM 的目的之一就是让开发者不必直接编写这样的 SQL 查询语句，而是通过编写代码来实现相同的功能。</p>
<h2 id="字符串和数字" tabindex="-1"><a class="header-anchor" href="#字符串和数字"><span>字符串和数字</span></a></h2>
<p>在编程和计算机科学中，字符串和数字是两种基本的数据类型，用于表示和处理不同类型的信息。</p>
<ol>
<li>
<p><strong>字符串（String）：</strong></p>
<ul>
<li><strong>定义：</strong> 一个字符串是由字符组成的文本序列。字符可以是字母、数字、符号或其他特殊字符。</li>
<li><strong>表示方法：</strong> 在编程中，字符串通常用引号括起来，可以是单引号（'）或双引号（&quot;）。例如：<code v-pre>&quot;Hello, World!&quot;</code> 或 <code v-pre>'12345'</code>。</li>
<li><strong>用途：</strong> 字符串常用于表示文本数据，如文本消息、文件内容、用户名等。字符串可以进行文本操作，如拼接、截取、查找等。</li>
</ul>
</li>
<li>
<p><strong>数字（Number）：</strong></p>
<ul>
<li><strong>定义：</strong> 数字是用来表示数值的数据类型。它可以是整数或浮点数，用于执行数学计算和表示数量。</li>
<li><strong>表示方法：</strong> 数字可以直接用数字字面量表示，也可以存储在变量中。例如：<code v-pre>42</code> 表示整数，<code v-pre>3.14</code> 表示浮点数。</li>
<li><strong>用途：</strong> 数字用于执行数学运算，表示数量、计算结果等。在计算机编程中，数字的类型分为整数（integers）和浮点数（floating-point numbers），浮点数用于表示带有小数点的数值。</li>
</ul>
</li>
</ol>
<p>在很多编程语言中，字符串和数字是基本的原始数据类型，它们提供了处理文本和数值的基本操作。例如，在JavaScript中：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 字符串示例</span>
<span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">"Hello, World!"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token string">'John Doe'</span><span class="token punctuation">;</span>

<span class="token comment">// 数字示例</span>
<span class="token keyword">const</span> integerNumber <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> floatingPointNumber <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>

<span class="token comment">// 字符串操作</span>
<span class="token keyword">const</span> fullName <span class="token operator">=</span> greeting <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> username<span class="token punctuation">;</span> <span class="token comment">// 字符串拼接</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fullName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Hello, World! John Doe</span>

<span class="token comment">// 数字操作</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> integerNumber <span class="token operator">+</span> floatingPointNumber<span class="token punctuation">;</span> <span class="token comment">// 数字相加</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：45.14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总之，字符串用于表示文本信息，而数字用于表示数值和执行数学运算。这两种数据类型在计算机编程中广泛应用。
所谓字符串要引号引起来，数字就不用。所以字符串拼接也要用引号再加号  而数字不用直接加减</p>
<h2 id="prop" tabindex="-1"><a class="header-anchor" href="#prop"><span>prop</span></a></h2>
<p>在编程中，&quot;prop&quot; 通常是 &quot;property&quot; 的缩写。在软件开发中，&quot;prop&quot; 通常指代对象的属性（property），这些属性描述了对象的特征、状态或配置。这个概念在许多编程语言和框架中都很常见，特别是在前端框架（如React、Vue）中。</p>
<p>在 React 中，&quot;prop&quot; 是组件之间通信的一种机制。每个 React 组件可以接受一些属性（props），这些属性是由父组件传递给子组件的。通过使用 props，你可以在组件之间传递数据，以便动态地渲染不同的内容。</p>
<p>例如，在以下的 React 组件中，<code v-pre>name</code> 就是一个 prop：</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Greeting</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token plain-text">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用 Greeting 组件，并传递 name 属性</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Greeting</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Alice<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>name</code> 是 <code v-pre>Greeting</code> 组件的一个属性（prop），它被设置为字符串 &quot;Alice&quot;。<code v-pre>Greeting</code> 组件使用这个属性来动态显示不同的问候语。</p>
<p>总的来说，&quot;prop&quot; 是一种在组件之间传递数据的机制，使得组件能够根据外部传入的属性值来动态渲染内容。</p>
<h2 id="和-的使用" tabindex="-1"><a class="header-anchor" href="#和-的使用"><span>;和,的使用</span></a></h2>
<p>在编程中，分号 <code v-pre>;</code> 和逗号 <code v-pre>,</code> 有不同的用途，它们在语法中扮演不同的角色。</p>
<ol>
<li>
<p><strong>分号 <code v-pre>;</code>：</strong></p>
<ul>
<li>
<p>用途：在许多编程语言中，分号 <code v-pre>;</code> 用于表示语句的结束。在大多数语言中，每个语句必须以分号结束。例如，JavaScript、C、Java 等语言中都使用分号来标志语句的结束。</p>
</li>
<li>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>逗号 <code v-pre>,</code>：</strong></p>
<ul>
<li>
<p>用途：逗号用于分隔元素、参数或语句。在一些语法中，逗号可以用于定义多个变量、数组元素、函数参数等。在一些语言中，逗号也可以用于在一行中写多个语句。</p>
</li>
<li>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义多个变量</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">// 在数组中使用逗号分隔元素</span>
<span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 在函数参数中使用逗号</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
<p>在具体的语法规则中，分号和逗号的使用取决于编程语言的要求。例如，在 JavaScript 中，语句末尾通常使用分号，而逗号通常用于分隔数组元素、函数参数等。在其他语言中，可能有不同的约定。</p>
<p>总体来说，使用分号表示语句的结束，使用逗号用于分隔多个元素或参数。在具体编码时，要根据所使用的编程语言的语法规则来选择正确的符号。</p>
<h2 id="form" tabindex="-1"><a class="header-anchor" href="#form"><span>form&gt;</span></a></h2>
<p><code v-pre>&lt;form&gt;</code> 标签是 HTML 中用来创建表单的元素。在 HTML 中，表单用于收集用户输入的信息，通常包含各种输入字段（如文本框、下拉框、单选框等），以及提交按钮。</p>
<p>基本的 <code v-pre>&lt;form&gt;</code> 结构如下：</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/submit<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 表单中的输入字段和其他元素 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Username:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Password:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>action</code> 属性定义了表单提交的目标 URL。当用户点击提交按钮时，表单将向该 URL 发送请求。</li>
<li><code v-pre>method</code> 属性定义了发送请求的 HTTP 方法，通常是 &quot;get&quot; 或 &quot;post&quot;。</li>
</ul>
<p>在 React 或其他前端框架中，你可以使用 JSX 语法创建类似的表单结构。例如，在 React 中，一个简单的表单组件可能如下所示：</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理表单提交逻辑</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 其他处理...</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/submit<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* 表单中的输入字段和其他元素 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">htmlFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Username:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">htmlFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Password:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Submit</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyForm<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>&lt;form&gt;</code> 元素通过 <code v-pre>onSubmit</code> 属性绑定了一个处理函数，该函数在表单提交时被调用。这个函数通常包含了处理表单数据、发送请求等逻辑。</p>
<h2 id="标记语法-md格式-ts-mts-ssg" tabindex="-1"><a class="header-anchor" href="#标记语法-md格式-ts-mts-ssg"><span>标记语法 md格式 ts mts ssg</span></a></h2>
<h2 id="数字改大不动了是为什么" tabindex="-1"><a class="header-anchor" href="#数字改大不动了是为什么"><span>数字改大不动了是为什么</span></a></h2>
<p>！<a href="./docusaurus.png">动不了</a>.</p>
<h2 id="template是什么" tabindex="-1"><a class="header-anchor" href="#template是什么"><span>template是什么</span></a></h2>
<p>是模板的意思</p>
<h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript"><span>typescript</span></a></h2>
<p>TypeScript 文件属于一种文本文件，其扩展名通常为 <code v-pre>.ts</code>。它们是用于编写 TypeScript 代码的文件。TypeScript 是 JavaScript 的超集，为 JavaScript 提供了静态类型检查和其他高级功能。在 TypeScript 文件中，你可以编写类型注解、定义接口、枚举、类等 TypeScript 特有的语法。</p>
<p>TypeScript 文件包含的代码会被 TypeScript 编译器处理并转换为相应的 JavaScript 文件（<code v-pre>.js</code> 文件）。这些 JavaScript 文件可以在浏览器或者其他 JavaScript 运行环境中执行。在开发过程中，TypeScript 文件可以通过编译器进行类型检查和静态分析，帮助捕获潜在的错误并提供更好的代码提示和自动补全功能。</p>
<p>除了 <code v-pre>.ts</code> 文件外，TypeScript 还支持其他类型的文件，如声明文件（<code v-pre>.d.ts</code>）用于描述 JavaScript 库的类型信息，配置文件（<code v-pre>tsconfig.json</code>）用于配置 TypeScript 编译器的行为，以及其他支持的文件类型。</p>
<h2 id="mts" tabindex="-1"><a class="header-anchor" href="#mts"><span>mts</span></a></h2>
<p>一般情况下，“mts” 并不是一种常见的文件类型的扩展名或标准文件类型的缩写。文件类型的扩展名通常用于标识文件的格式或内容类型。常见的文件类型包括：</p>
<ul>
<li><strong>HTML</strong>（.html，.htm）：网页文档</li>
<li><strong>CSS</strong>（.css）：样式表</li>
<li><strong>JavaScript</strong>（.js）：JavaScript 代码</li>
<li><strong>JSON</strong>（.json）：数据交换格式</li>
<li><strong>PNG</strong>、<strong>JPEG</strong>（.png，.jpg）：图片格式</li>
<li><strong>PDF</strong>（.pdf）：便携式文档格式</li>
</ul>
<p>“mts” 可能是某个特定系统、工具或框架中定义的自定义文件类型，比如在某个特定的网站生成器或开发工具中引入的配置文件类型。例如，在一些自定义的静态网站生成器或项目中，可能存在特定的文件类型，比如 Markdown 模板文件、特定配置文件或者自定义的模块文件，这些文件可能会采用非常具体的扩展名。</p>
<p>如果你指的是某个特定工具、框架或系统中的文件类型，更多的上下文信息可能有助于精确地理解“mts” 文件类型是指什么。</p>
<h2 id="ssg" tabindex="-1"><a class="header-anchor" href="#ssg"><span>ssg</span></a></h2>
<p>SSG 是“静态站点生成”（Static Site Generation）的缩写。它是一种构建网站的方法，将网站的页面提前在服务器端或构建过程中生成为静态 HTML 文件，然后在请求时直接提供这些静态文件给用户，而不需要在每次请求时动态生成页面。</p>
<p>SSG 的工作流程通常分为以下几个步骤：</p>
<ol>
<li>
<p><strong>构建过程中生成静态文件：</strong> 在网站构建过程中，预先生成每个页面的静态 HTML 文件。这通常在开发阶段或构建阶段完成，通过模板引擎、静态网站生成器或特定的框架来渲染页面并生成静态文件。</p>
</li>
<li>
<p><strong>提供静态文件服务：</strong> 生成的静态文件可以直接被 web 服务器（比如 Nginx、Apache）或者内容分发网络（CDN）提供服务。当用户访问网站时，服务器直接返回相应的静态文件，不需要进行服务器端的动态处理或数据库查询。</p>
</li>
<li>
<p><strong>优势：</strong></p>
<ul>
<li><strong>性能优化：</strong> 静态文件可以被高效地缓存和分发，加速网站的加载速度。</li>
<li><strong>安全性：</strong> 由于没有服务器端的逻辑处理，减少了许多与安全相关的问题。</li>
<li><strong>可扩展性：</strong> 静态文件可以轻松地被缓存和复制到多个服务器，提供更好的扩展性和负载均衡。</li>
</ul>
</li>
<li>
<p><strong>适用场景：</strong> SSG 适用于内容不经常变化或者不需要实时数据的网站，比如博客、文档、企业官网等。然而，它也可以与客户端渲染（CSR）或服务端渲染（SSR）结合，通过将一些动态内容以异步加载的方式注入到静态页面中。</p>
</li>
</ol>
<p>许多静态网站生成器（如 Jekyll、Hugo、Gatsby、Next.js 的静态导出模式等）都采用了 SSG 的原理，使得开发者能够轻松构建性能良好且易于部署的静态网站。</p>
<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2>
<p>在你的 .vitepress/config.mts 文件中，你可以使用注释符号 // 或 /**/ 将一段代码块注释掉。在 TypeScript 或 JavaScript 文件中，注释符号后面的内容将被当做注释，不参与实际的代码执行。</p>
<h2 id="ssr" tabindex="-1"><a class="header-anchor" href="#ssr"><span>ssr</span></a></h2>
<p>SSR 的缩写代表 &quot;Server-Side Rendering&quot;，中文翻译为 &quot;服务端渲染&quot;。在 Web 开发中，SSR 是一种将页面的初始渲染工作移至服务器端完成的技术。</p>
<p>传统的前端渲染模式是在客户端进行的，也就是说，浏览器下载 HTML 文件后，通过 JavaScript 执行来构建和呈现页面。而在 SSR 中，服务器在返回 HTML 页面时已经完成了页面的渲染，包括初始的数据加载和组件渲染，然后再将整个渲染好的页面发送到客户端。</p>
<p>使用 SSR 可以带来一些优势，例如：</p>
<ol>
<li>
<p><strong>更快的首次加载时间：</strong> 因为服务器端已经渲染好了页面，用户在首次访问时能够更快地看到内容。</p>
</li>
<li>
<p><strong>更好的搜索引擎优化（SEO）：</strong> 搜索引擎爬虫可以更容易地获取到渲染好的页面内容，有助于提升网站在搜索结果中的排名。</p>
</li>
<li>
<p><strong>更好的性能表现：</strong> 对于一些客户端性能较低的设备，以及网络条件不佳的情况，SSR 可能提供更好的用户体验。</p>
</li>
</ol>
<p>虽然 SSR 提供了这些优势，但也需要考虑到一些复杂性，包括服务器端的负载增加、缓存策略等问题。在选择是否使用 SSR 时，需要权衡这些因素并根据项目的具体需求做出决策。</p>
<h2 id="cms" tabindex="-1"><a class="header-anchor" href="#cms"><span>cms</span></a></h2>
<p>CMS 的缩写代表 &quot;Content Management System&quot;，中文翻译为 &quot;内容管理系统&quot;。CMS 是一种用于创建、管理和发布数字内容的软件系统。它提供了一系列工具和功能，使用户能够轻松地管理网站、应用程序或其他在线平台上的内容，而无需深入了解编程或技术细节。</p>
<p>CMS 的主要功能包括：</p>
<ol>
<li>
<p><strong>内容创建和编辑：</strong> 用户可以使用富文本编辑器等工具轻松创建和编辑文本、图像、视频等多种类型的内容。</p>
</li>
<li>
<p><strong>内容组织和分类：</strong> CMS 允许用户组织内容，创建不同的类别、标签或目录结构，以便更好地管理和导航内容。</p>
</li>
<li>
<p><strong>权限管理：</strong> 提供用户角色和权限管理，确保只有授权用户能够进行特定操作，如发布、编辑或删除内容。</p>
</li>
<li>
<p><strong>版本控制：</strong> 保存内容的历史版本，允许用户查看、还原或回退到以前的版本。</p>
</li>
<li>
<p><strong>多用户协作：</strong> 多个用户可以同时在系统中协作，共同编辑和维护内容。</p>
</li>
<li>
<p><strong>发布和分发：</strong> 将内容发布到网站、应用程序或其他数字平台，并提供工具来管理发布计划和多渠道分发。</p>
</li>
<li>
<p><strong>主题和模板：</strong> 支持定制化外观和布局，用户可以选择或创建主题和模板，以满足特定设计需求。</p>
</li>
</ol>
<p>常见的 CMS 包括 WordPress、Drupal、Joomla 等，它们被广泛应用于博客、企业网站、电子商务平台等各种网络应用场景。使用 CMS 可以大大简化网站和应用程序的管理和维护过程，使内容更新更加高效和灵活。</p>
<h3 id="内容" tabindex="-1"><a class="header-anchor" href="#内容"><span>内容</span></a></h3>
<h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建"><span>创建</span></a></h3>
<h3 id="编辑" tabindex="-1"><a class="header-anchor" href="#编辑"><span>编辑</span></a></h3>
<h4 id="过于强大-不便展示" tabindex="-1"><a class="header-anchor" href="#过于强大-不便展示"><span>过于强大 不便展示</span></a></h4>
<h2 id="前端后端和框架" tabindex="-1"><a class="header-anchor" href="#前端后端和框架"><span>前端后端和框架</span></a></h2>
<p>在Web开发中，&quot;前端&quot;、&quot;后端&quot;和&quot;框架&quot;是常用的术语：</p>
<ol>
<li>
<p><strong>前端（Frontend）：</strong></p>
<ul>
<li>前端是用户与之交互的部分，通常指的是Web应用程序的用户界面（UI）。</li>
<li>前端开发主要涉及HTML、CSS和JavaScript等技术，用于构建和设计网页，实现用户在浏览器中的交互和体验。</li>
</ul>
</li>
<li>
<p><strong>后端（Backend）：</strong></p>
<ul>
<li>后端是Web应用程序的服务器端，负责处理前端发送的请求，执行业务逻辑，与数据库交互，并返回相应的数据给前端。</li>
<li>后端开发主要涉及服务器端编程语言（如Node.js、Python、Java、Ruby等）、数据库管理、API设计等技术。</li>
</ul>
</li>
<li>
<p><strong>框架（Framework）：</strong></p>
<ul>
<li>框架是一种提供开发者工具、规范和结构的工具集，用于简化和加速应用程序的开发。</li>
<li>在前端和后端都有框架。前端框架如React、Angular和Vue.js用于构建用户界面，后端框架如Express（Node.js）、Django（Python）、Spring Boot（Java）等用于搭建和管理服务器端应用。</li>
</ul>
</li>
</ol>
<p>简单来说，前端是用户看到和与之交互的部分，后端是处理和管理数据、业务逻辑的服务器端，框架是提供一套结构和工具的开发工具，使开发更高效。在现代的Web开发中，通常会有前端开发人员负责构建用户界面，后端开发人员负责处理服务器端逻辑，而框架则为他们提供了工具和规范。</p>
</div></template>



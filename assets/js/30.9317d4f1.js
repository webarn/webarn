(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{473:function(a,e,l){"use strict";l.r(e);var r=l(26),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[l("h2",{attrs:{id:"webpack-编译步骤"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#webpack-编译步骤"}},[a._v("#")]),a._v(" webpack 编译步骤")]),a._v(" "),l("blockquote",[l("p",[a._v("webpack 是为现代 JS 应用提供静态资源打包功能的 bundle。")])]),a._v(" "),l("ol",[l("li",[a._v("初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；")]),a._v(" "),l("li",[a._v("开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；")]),a._v(" "),l("li",[a._v("确定入口：根据配置中的 entry 找出所有的入口文件；")]),a._v(" "),l("li",[a._v("编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；")]),a._v(" "),l("li",[a._v("完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；")]),a._v(" "),l("li",[a._v("输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；")]),a._v(" "),l("li",[a._v("输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。")])]),a._v(" "),l("h4",{attrs:{id:"核心流程有三个阶段-初始化阶段、构建阶段和生成阶段"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#核心流程有三个阶段-初始化阶段、构建阶段和生成阶段"}},[a._v("#")]),a._v(" 核心流程有三个阶段: 初始化阶段、构建阶段和生成阶段")]),a._v(" "),l("ol",[l("li",[a._v("初始化阶段，会从配置文件、配置对象和 Shell 参数中读取初始化的参数并与默认配置结合成最终的参数，之以及创建 compiler 编译器对象和初始化它的运行环境")]),a._v(" "),l("li",[a._v("构建阶段，编译器会执行它的 run()方法开始编译的过程，其中会先确认 entry 入口文件，从入口文件开始搜索和入口文件有直接或者简介关联的所有文件创建依赖对象，之后再根据依赖对象创建 module 对象，这时候会使用 loader 将模块转换标准的 js 内容，再调用 js 的解释器将内容转换成 AST 对象，再从 AST 中找到该模块依赖的模块，递归本步骤知道所有入口依赖文件都经过了本步骤的处理。最后完成模块编译，得到了每个模块被翻译的内容和他们之间的关系依赖图（dependency graph），这个依赖图就是项目所有用到的模块的映射关系。")]),a._v(" "),l("li",[a._v("生成阶段，将编译后的 module 组合成 chunk ，再把每个 chunk 转换成一个单独的文件输出到文件列表，确定好输出内容后，根据配置确定输出路径和文件名，就把文件内容写入文件系统")])]),a._v(" "),l("h4",{attrs:{id:"plugin-和-loader"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#plugin-和-loader"}},[a._v("#")]),a._v(" plugin 和 loader")]),a._v(" "),l("h5",{attrs:{id:"loader"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[a._v("#")]),a._v(" loader")]),a._v(" "),l("blockquote",[l("p",[a._v("webpack 只能理解 JS 和 JSON 文件，loader 本质上就是个转换器，能将其他类型的文件转换成 webpack 识别的东西")])]),a._v(" "),l("blockquote",[l("p",[a._v("loader 会在 webpack 的构建阶段将依赖对象创建的 module 转换成标准的 js 内容的东西。比如 vue-loader 将 vue 文件转换成 js 模块，图片字体通过 url-loader 转换成 data URL，这些 webpack 能够识别的东西。")])]),a._v(" "),l("blockquote",[l("p",[a._v("可以在 module.rules 中配置不同的 loader 解析不同的文件")])]),a._v(" "),l("h5",{attrs:{id:"plugin"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[a._v("#")]),a._v(" plugin")]),a._v(" "),l("blockquote",[l("p",[a._v("插件本质是一个带有 apply 函数的类 class myPlugin { apply(compiler) {} },这个 apply 函数有个参数 compiler 是 webpack 初始化阶段生成的编译器对象，可以调用编译器对象中的 hooks 注册各种钩子的回调这些 hooks 是贯穿整个编译的生命周期。所以开发者可以通过钩子回调在里面插入特定的代码，实现特定的功能。")])]),a._v(" "),l("h4",{attrs:{id:"hash-策略"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#hash-策略"}},[a._v("#")]),a._v(" hash 策略")]),a._v(" "),l("ul",[l("li",[l("p",[l("strong",[a._v("hash")]),a._v(": 项目每次构建都会生成一个 hash，和整个项目有关，项目任意地方有改变就会改变")])]),a._v(" "),l("li",[l("p",[l("strong",[a._v("content hash")]),a._v(": 和单个文件的内容相关。指定文件的内容发生改变，就会改变 hash，内容不变 hash 值不变")])]),a._v(" "),l("li",[l("p",[l("strong",[a._v("chunk hash")]),a._v(": 和 webpack 打包生成的 chunk 相关。每一个 entry，都会有不同的 hash")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);
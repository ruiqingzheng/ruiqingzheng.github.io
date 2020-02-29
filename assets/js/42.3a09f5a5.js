(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{208:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"git-hook实现代码自动部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-hook实现代码自动部署","aria-hidden":"true"}},[t._v("#")]),t._v(" git hook实现代码自动部署")]),t._v(" "),s("p",[t._v("git hook 可以实现在部署的机器上克隆仓库后, 当执行git pull即可将代码同步过来后,")]),t._v(" "),s("p",[t._v("将更新后的代码部署到目的路径")]),t._v(" "),s("h2",{attrs:{id:"原理与流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理与流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理与流程")]),t._v(" "),s("h4",{attrs:{id:"git用户执行git-push操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git用户执行git-push操作","aria-hidden":"true"}},[t._v("#")]),t._v(" git用户执行git push操作")]),t._v(" "),s("p",[t._v("远程仓库发现有用户执行了push操作，就会执行一个脚本post-receive（钩子）\n在post-receive脚本中，将git仓库的代码拷贝到web站点目录下")]),t._v(" "),s("h4",{attrs:{id:"创建git仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建git仓库","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建git仓库")]),t._v(" "),s("p",[t._v("我们可以在自己的服务器上创建git仓库，有两种方式：")]),t._v(" "),s("ul",[s("li",[t._v("git --bare init (裸仓库)")]),t._v(" "),s("li",[t._v("git init")])]),t._v(" "),s("h5",{attrs:{id:"两者区别："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两者区别：","aria-hidden":"true"}},[t._v("#")]),t._v(" 两者区别：")]),t._v(" "),s("p",[t._v("​\t普通git仓库的目录结构就和你的代码目录结构一致，只多了.git目录，")]),t._v(" "),s("p",[t._v("​\t.git目录中包含了git的一些配置等数据")]),t._v(" "),s("p",[t._v("​\t裸仓库只保存了一些配置信息等，肉眼是找不到我们所上传的代码的")]),t._v(" "),s("p",[t._v("​\t建议使用裸仓库")]),t._v(" "),s("h5",{attrs:{id:"执行钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行钩子","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行钩子")]),t._v(" "),s("p",[t._v("git仓库和git裸仓库的钩子所在位置不同。")]),t._v(" "),s("p",[t._v("git普通仓库钩子在.git/hooks/中")]),t._v(" "),s("p",[t._v("git裸仓库钩子在hooks/中")]),t._v(" "),s("p",[t._v("钩子要做的事就是将代码从仓库中拷贝到web目录，有两种方式：")]),t._v(" "),s("p",[t._v("在web目录中，将git仓库的代码克隆过来:git clone xxxxx，需要部署代码的时候，")]),t._v(" "),s("p",[t._v("执行git pull即可将代码同步过来了。")]),t._v(" "),s("p",[t._v("将git仓库中的代码打包，然后解压到web目录下")]),t._v(" "),s("h5",{attrs:{id:"实现："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现：","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现：")]),t._v(" "),s("p",[t._v("第一种方式实现：")]),t._v(" "),s("p",[t._v("在上述hooks目录中，创建post-receive文件，内容如下")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh")]),t._v("\nDEPLOY_PATH"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/wwwroot/default/myproject/\n\nunset  GIT_DIR "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这条命令很重要")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DEPLOY_PATH")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" www:www -R "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DEPLOY_PATH")]),t._v("\n\n")])])]),s("p",[t._v("第二种方式实现：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh")]),t._v("\nDEPLOY_PATH"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/wwwroot/default/myproject/\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" archive --format "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" --output /path/to/file.zip master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 master 以zip格式打包到指定文件（裸仓库中执行）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" /path/to/file.zip "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DEPLOY_PATH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将打包好的剪切到web目录")]),t._v("\nunset GIT_DIR\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DEPLOY_PATH")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" -o file.zip "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#解压覆盖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf file.zip "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" www:www -R "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DEPLOY_PATH")]),t._v("\n\n")])])]),s("p",[t._v("注意：要给钩子脚本执行的权限")])])}],!1,null,null,null);a.default=n.exports}}]);
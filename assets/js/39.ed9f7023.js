(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{205:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("项目部署总体来说分为两个部分")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("那么这样做的好处是什么?")]),t._v(" "),n("p",[t._v("解耦 是最大好处")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("在以前的笔记中有 pm2 的使用, "),n("router-link",{attrs:{to:"/项目/vivitek_solution项目笔记/部署.html"}},[t._v("pm2 部署")])],1),t._v(" "),t._m(3),t._m(4),t._v(" "),n("p",[t._v("pm2 设置 NODE_ENV 环境变量 PORT 端口等")]),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("一般不需要对所有目录进行热启动, 比如这里我们只需要监控 routes 目录还有 bin 目录")]),t._v(" "),t._m(6),t._v(" "),n("p",[t._v("pm2 的重启是针对线上环境重启当然不需要那么频繁")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),n("p",[t._v("略, 以后再补上")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://pm2.io/doc/en/runtime/guide/easy-deploy-with-ssh/?utm_source=pm2&utm_medium=website&utm_campaign=rebranding",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.zhaofinger.com/detail/5",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 pm2+nginx 部署 koa2"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("编辑配置文件, 使用配置文件来启动 pm2 , 且配置文件中配置自动下载代码")]),t._v(" "),n("p",[t._v("根目录下创建 ecosystem.json")]),t._v(" "),n("p",[t._v("//发布到测试环境\npm2 deploy ecosystem.json dev steup\n//上线到正式环境\npm2 deploy ecosystem.json production steup")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),n("p",[t._v("参考 "),n("a",{attrs:{href:"https://www.zhaofinger.com/detail/5",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 pm2+nginx 部署 koa2(https)"),n("OutboundLink")],1),t._v(" // 比较不错")]),t._v(" "),n("p",[t._v("nginx 配置反向代理, 监听真实域名的 80 端口 , 设置代理跳转到 pm2 服务地址")]),t._v(" "),t._m(13),t._m(14),t._v(" "),n("p",[t._v("参考:")]),t._v(" "),t._m(15),t._v(" "),n("p",[t._v("在 web 服务器端要得到真实的用户 ip, 测试, 在 node 服务端, 打印 request 对象 header 来判断用户的真实 IP")]),t._v(" "),t._m(16),t._m(17),t._v(" "),n("p",[t._v("不需要特殊配置, http 请求头都有该字段\n在直接提供服务的情况下 , 没有反向代理情况, Remote Address 就是用户的真实 ip")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),n("p",[t._v("在使用了 nginx 代理真实服务器的情况下, 该配置让 nginx 根据用户地址, 添加 http 头记录用户真实 ip, 否则 Remote Address 获得的就是 nginx 地址")]),t._v(" "),n("p",[t._v("测试代码中获取该头部信息")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),n("p",[t._v("那么理论上来说 , 靠左第一个地址就是用户地址, 最后一个是代理地址")]),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),n("p",[t._v("需要注意的是:")]),t._v(" "),n("p",[t._v("X-Forwarded-For 最后一节是 Nginx 追加上去的，但之前部分都来自于 Nginx 收到的请求头，这部分用户输入内容完全不可信。")]),t._v(" "),n("p",[t._v("使用时需要格外小心，符合 IP 格式才能使用，不然容易引发 SQL 注入或 XSS 等安全漏洞")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),n("p",[t._v("在部署本地前端服务的时候, 当 api 接口访问有跨域问题的时候, 可以在前端服务中配置转发")]),t._v(" "),t._m(31)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"前端项目部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端项目部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端项目部署")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("pm2 部署, 一般是把 pm2 部署在本地 127.0.0.1 地址, 并且设置脚本结合 git 进行代码变更后自动更新并重启 pm2,\n结合 git 自动更新代码的功能是 pm2 特色")])]),this._v(" "),s("li",[s("p",[this._v("nginx 跳转, 接受用户请求监听在 80 端口,真实域名, 使用 nginx 的反向代理来提供 web 服务\n反向代理指的是相对用户端, 代理功能是提供给 nginx 背后的真实 web 服务器代理,所以称为反向代理")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"pm2-的部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pm2-的部署","aria-hidden":"true"}},[this._v("#")]),this._v(" pm2 的部署")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("\nnpm install -g pm2 // 全局安装\n\nyarn global add pm2 // mac 下居然npm安装失败, yarn却没有问题\n\npm2 start bin/www --name '项目名称' --watch // watch 表示代码有变更就重新启动\n\npm2 list // 查看已经在运行的项目\n\npm2 delete 项目名称 // 删除再跑的实例\n\npm2 log 项目名称 // 查看日志, 比如 这里 mongo 连接不上, 日志就有显示\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"pm2-配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pm2-配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" pm2 配置文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"设置自动重启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置自动重启","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置自动重启")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果是开发需求更新频繁需要重启, 那么索性就用"),s("code",[this._v("nodemon")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("watch "),s("code",[this._v("routes")]),this._v(" 目录, "),s("code",[this._v("bin")]),this._v(" 目录, 当该目录下的文件更新后才需要自动重启")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("注意")]),this._v(" 要设置工作目录"),s("code",[this._v("cwd")]),this._v("后, "),s("code",[this._v("watch")]),this._v("里面的路径才能生效")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('{\n  "name"        : "vivitek_solution_server",\n  "script"      : "/root/vivitek_solution_server/bin/www",\n  "args" : "production",\n  "cwd"         : "/root/vivitek_solution_server",\n  "env": {\n      "NODE_ENV": "production",\n      "PORT": 80\n  } ,\n "watch": [\n    "bin",\n    "routes"\n  ],\n}\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"设置自动更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置自动更新","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置自动更新")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nginx-部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-部署","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx 部署")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("参考 "),s("code",[this._v("vue 核心技术")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("upstream my_project {\n  server 127.0.0.1:9001;  # 这里就是前端项目用pm2部署的监听地址\n  keepalive 64;   # 表示允许最大64个keepalive连接\n}\n\nserver {\n     listen 80;\n     server_name blog.zhaofinger.com zhaofinger.com www.zhaofinger.com;\n     access_log /var/www/log/blog-access.log;\n     error_log  /var/www/log/blog-error.log;\n\n     location / {\n             proxy_set_header X-Real-IP $remote_addr;  # 设置这个http头是为了方便真实web服务器能得到用户ip, 否则得到的就是nginx地址\n             proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; # nginx 保存了用户地址和代理地址\n             proxy_set_header Host $http_host;\n             proxy_set_header X-NginX-Proxy true;\n             # proxy_pass http://127.0.0.1:1113/;\n             proxy_pass my_project;   # 代理跳转到 upstream my_project\n             proxy_redirect off;\n     }\n}\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("nginx")]),this._v(" 配置头部字段 "),s("code",[this._v("X-Real-IP")]),this._v(" 和 "),s("code",[this._v("X-Forwarded-For")]),this._v(" 的意义")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("https://imququ.com/post/x-forwarded-for-header-in-http.html")]),this._v(" "),s("code",[this._v("https://ox0spy.github.io/post/configuration/nginx-config/")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nhttp\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remoteAddress: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remoteAddress "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-forwarded-for: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-forwarded-for'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-real-ip: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-real-ip'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9009")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.0.0'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"remote-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remote-address","aria-hidden":"true"}},[this._v("#")]),this._v(" Remote Address")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"x-real-ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x-real-ip","aria-hidden":"true"}},[this._v("#")]),this._v(" x-real-ip")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("proxy_set_header X-Real-IP $remote_addr;")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("res.write('x-real-ip: ' + req.headers['x-real-ip'] + '\\n');")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"x-forwarded-for"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x-forwarded-for","aria-hidden":"true"}},[this._v("#")]),this._v(" X-Forwarded-For")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("但是如果用户是用代理来访问 "),s("code",[this._v("nginx")]),this._v(" 那么 "),s("code",[this._v("X-Real-IP")]),this._v(" 获取到的是代理的地址而不是真实的 ip 地址")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("于是, 如果用户使用代理是 "),s("code",[this._v("nginx")]),this._v(" 而且正确配置了 "),s("code",[this._v("X-Forwarded-For")]),this._v(" 的话, 那么这个代理 ip 就会被依次记录下来, nginx 会把该地址加到后面")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("curl http://t1.imququ.com/ -H 'X-Forwarded-For: unknown, <>\"1.1.1.1'\n\nremoteAddress: 127.0.0.1\nx-forwarded-for: unknown, <>\"1.1.1.1, 114.248.238.236\nx-real-ip: 114.248.238.236\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果用户真的是通过代理访问 Nginx，"),s("code",[this._v("X-Forwarded-For")]),this._v("最后一个地址 和 "),s("code",[this._v("X-Real-IP")]),this._v(" 地址是相同的, 都是代理的 "),s("code",[this._v("IP，")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("但有些场景如根据 "),s("code",[this._v("IP")]),this._v(" 显示所在地天气，就需要尽可能获得用户真实 IP，这时候 "),s("code",[this._v("X-Forwarded-For")]),this._v(" 中第一个 "),s("code",[this._v("IP")]),this._v(" 就可以排上用场了")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"nginx-获取用户-ip-结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-获取用户-ip-结论","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx 获取用户 ip 结论")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("没有使用反向代理的情况下, 直接对外提供服务的 Web 应用, 在进行与安全有关的操作时，只能通过 Remote Address 获取 IP，不能相信任何请求头；")])]),this._v(" "),s("li",[s("p",[this._v("使用了 nginx 反向代理时, 使用 X-Real-IP 或者 X-Forwarded-For 的最后一个 ip (因为只有这个 ip 可信)")])]),this._v(" "),s("li",[s("p",[this._v("在与安全无关的场景，例如通过 IP 显示所在地天气，可以从 X-Forwarded-For 靠前的位置获取 IP，但是需要校验 IP 格式合法性；")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"前端代码中-api-需要转发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端代码中-api-需要转发","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端代码中 api 需要转发")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("https://segmentfault.com/a/1190000018658773")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" axios "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bodyParser "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body-parser'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" config "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./config/index'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" express "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" apiRoutes "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" express"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Router")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napiRoutes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/getdata'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://a.com'")]),t._v("\n  axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      referer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://b.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b.com'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" apiRoutes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("express"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("static")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dist'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" port "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PORT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Listening at http://localhost:'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" port "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);
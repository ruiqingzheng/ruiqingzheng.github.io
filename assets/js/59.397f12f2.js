(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{225:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"vue-测试价格接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-测试价格接口","aria-hidden":"true"}},[t._v("#")]),t._v(" vue 测试价格接口")]),t._v(" "),s("h2",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),s("p",[t._v("在接口获取数据后, 必须要定义自己的数据结构,  不能说接口的数据结构直接拿来用")]),t._v(" "),s("p",[t._v("一定要有个定义对象 , 工厂方法赋值创建对象的过程")]),t._v(" "),s("p",[s("code",[t._v("src/common/js/PricePackage.js")]),t._v("   // 定义了 PricePackage 类,  还有工厂方法createPricePackage")]),t._v(" "),s("p",[t._v("createPricePackage 通过传递的参数创建 PricePackage类的对象进行返回")]),t._v(" "),s("p",[t._v("因为后端接口的字段名是完全按前端来设计, 所以这里指需要简单赋值, 没有其他操作即可创建PricePackage 对象")]),t._v(" "),s("h2",{attrs:{id:"新建组件price-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建组件price-packages","aria-hidden":"true"}},[t._v("#")]),t._v(" 新建组件price-packages")]),t._v(" "),s("p",[s("code",[t._v("src/components/price-packages/price-packages.vue")])]),t._v(" "),s("p",[t._v("定义pname 属性  ,  组件属性, 用来让父组件传递当前的"),s("code",[t._v("产品键名")])]),t._v(" "),s("h2",{attrs:{id:"store中该组件的数据加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#store中该组件的数据加载","aria-hidden":"true"}},[t._v("#")]),t._v(" store中该组件的数据加载")]),t._v(" "),s("p",[s("code",[t._v("src/store/store.js")])]),t._v(" "),s("p",[t._v("定义  state")]),t._v(" "),s("pre",[s("code",[t._v("packages: [],\npackagesLoaded: false,\n")])]),t._v(" "),s("p",[t._v("定义getters , mutations,  actions")]),t._v(" "),s("p",[t._v("比较繁琐, 直接看代码")]),t._v(" "),s("p",[t._v("store完成后, 又回到组件中 mapGetters , mapActions ,")]),t._v(" "),s("p",[t._v("然后 created 生命周期中调用方法 "),s("code",[t._v("this.getPackages(this.pname);")]),t._v("   进行异步数据加载")]),t._v(" "),s("p",[s("code",[t._v("Product.vue")]),t._v(" 组件中 import PricePackages 组件")]),t._v(" "),s("p",[t._v("使用标签渲染   "),s("code",[t._v('<price-packages :pname="name_key"/>')])]),t._v(" "),s("h2",{attrs:{id:"price-packages组件的数据更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#price-packages组件的数据更新","aria-hidden":"true"}},[t._v("#")]),t._v(" price-packages组件的数据更新")]),t._v(" "),s("p",[t._v("然后发现"),s("code",[t._v("price-packages")]),t._v("数据没有动态更新, 最后发现必须父子组件中同时设置"),s("code",[t._v("watch")])]),t._v(" "),s("p",[t._v("父组件中当路由发生变化, 那么就改变绑定的属性变量, 比如这里的"),s("code",[t._v("this.name_key = product_name;")]),t._v(" 相当于通知子组件更新")]),t._v(" "),s("p",[t._v("子组件中检测该属性"),s("code",[t._v("pname")]),t._v("判断是否发生变化, 从而加载数据")]),t._v(" "),s("p",[t._v("// 父组件中:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    watch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果路由有变化，会再次执行该方法")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$route'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对路由变化作出响应...")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" product_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name_key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" product_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProduct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("product_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("// 子组件中:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    watch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果路由有变化，会再次执行该方法")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pname'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对路由变化作出响应...")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pname changed:"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPackages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"v-bind-无法绑定computed-里面定义的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-bind-无法绑定computed-里面定义的数据","aria-hidden":"true"}},[t._v("#")]),t._v(" v-bind 无法绑定computed 里面定义的数据")]),t._v(" "),s("p",[s("code",[t._v('<price-packages :pname="name_key" />')])]),t._v(" "),s("p",[t._v("computed 中定义 , 绑定在属性中, 获取后是undefined")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//      name_key() {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        return this.$route.params.name;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//      }")]),t._v("\n\n")])])]),s("p",[t._v("在data中定义, 就没有问题")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        backend_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://pharmacy-backend.lindoit.com:8082"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name_key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h2",{attrs:{id:"tips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tips","aria-hidden":"true"}},[t._v("#")]),t._v(" Tips")]),t._v(" "),s("h2",{attrs:{id:"引入组件的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入组件的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 引入组件的问题")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("PricePackages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/price-packages/price-packages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("这样用大括号引入的话, 那么源文件中必须是 "),s("code",[t._v("export PricePackages")]),t._v("   ,")]),t._v(" "),s("p",[t._v("而如果源文件是   "),s("code",[t._v("export default")]),t._v(" , 那么就不能用大括号 , 简单说 , 大括号表示明确引入   有名称定义的方法或对象")]),t._v(" "),s("h2",{attrs:{id:"v-bind无法绑定computed-里面定义的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-bind无法绑定computed-里面定义的数据","aria-hidden":"true"}},[t._v("#")]),t._v(" v-bind无法绑定computed 里面定义的数据")]),t._v(" "),s("p",[s("code",[t._v('<price-packages :pname="name_key" />')])]),t._v(" "),s("p",[t._v("computed 中定义 , 绑定在属性中, 获取后是undefined")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//      name_key() {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        return this.$route.params.name;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//      }")]),t._v("\n")])])]),s("p",[t._v("在data中定义, 就没有问题")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        backend_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://pharmacy-backend.lindoit.com:8082"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name_key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h2",{attrs:{id:"子组件数据的更新依赖父组件的watch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子组件数据的更新依赖父组件的watch","aria-hidden":"true"}},[t._v("#")]),t._v(" 子组件数据的更新依赖父组件的watch")]),t._v(" "),s("p",[t._v("父组件传递属性给子组件, 该属性是父组件的路由参数,   子组件直接watch该属性是无法正常获取到变更的")]),t._v(" "),s("p",[t._v("子组件数据的更新依赖父组件的watch 中, 对该属性变量的修改")]),t._v(" "),s("p",[t._v("虽然, 最终效果是可以正常更新数据, 但这样是不是不改合理, 因为父组件还需要对属性进行watch 来通知子组件")])])}],!1,null,null,null);a.default=e.exports}}]);
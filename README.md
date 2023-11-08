#### 1、项目初始化
```bash
# 全局安装cnpm(国内源)(我们配置了npm代理故不需要安装cnpm)
$ npm install cnpm -g
# 全局安装create-react-app（React项目创建插件）
$ npm install create-react-app -g
# 创建一个React项目，名字叫02-reacr-app
$ create-react-app 02-react-app
```
#### 2、小结记录（注意：在开发环境组件刷新时组件内的代码会执行2次，这是因为开发环境是严格模式故执行2次）
  - 组建首字母必须大写（这是约定俗成的）
  - JSX文件里面组件的根节点可以使用空<>包起来它不会生成Dom也不会报错。在JSX里面给组件的属性和标签传值时都需要用大扩号包起来，再写对应的值（其实就是传的是对象）
  - 当useState的set函数被执行时，拥有useState的组件将被重新渲染执行。组件被重新渲染的流程是 trigger(useState被调用时)阶段，再到render(组件函数重新执行并生成虚拟Dom)阶段，最后commit(将虚拟Dom替换原有Dom重新渲染组件)阶段
  - useState的set函数被调用时数据并不会立马更新而是要等组件到render阶段才会更新数据，如果要下一个set函数里面获取到上一个set函数所修改的值，可以这样写 setXXX((xxx) => xxx)使用匿名函数的方式将刚刚修改的值传递进去（注意：set函数在执行时如果发现传递给它的是函数，它会将现有值传递给该函数并执行该函数获取新值）
  - 组件在页面上被销毁时(Dom节点被删除)组件的状态数据以及函数内的数据都会被销毁。还有当组件包含key属性时并且值发生变化时原有组件的状态数据以及函数内的数据都会被销毁，同时在原来的位置会创建一个新的组件替换上去
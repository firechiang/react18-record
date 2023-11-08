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

#### 3、[Reducer数据聚合操作简单使用][1]
#### 4、[使用use-immer插件修饰状态数据和使用useState修饰状态数据，在修改数据方面的差异][2]
#### 5、[useCallback简单使用（应用场景：性能优化，只会在组件初始化时生成函数，而组件函数重新执行时不会重新生成函数）][3]
#### 6、[组件标签内夹带的内容获取简单使用][4]
#### 7、[Context跨层级传递数据简单使用(一般用于登录数据保存，所有下层组件都可以拿到登录数据)][5]
#### 8、[自定义Hook简单使用][6]
#### 9、[useDeferredValue简单使用(应用场景:性能优化,延迟改变数据的值使页面渲染显示之后再异步修改数据并执行组件函数生成虚拟Dom，最后一次性替换上)][7]
#### 10、[useEffectEvent简单使用(第一个应用场景和useEffect一样，第二个应用应用场景是useEffect里面使用了多个参数可以指定某个参数变化触发函数调用，其它参数可以不绑定（注意：useEffectEvent是大于18.2版本才可以使用）)][8]
#### 11、[useEffect简单使用(应用场景: 组件页面渲染完成之后或者组件被销毁之后需要调用的代码块 和 当数据发生变化时需要调用的代码块可使用useEffect包起来)][9]
#### 12、[useImperativeHandle简单使用(应用场景：自定义Ref的处理逻辑，比如父组件想调用子组件的某个实现逻辑)][10]
#### 13、[按需加载组件和Suspense组件简单使用（Suspense组件就是在远程加载数据时要显示的内容(注意：只要是被Suspense包裹的组件里面要展示的内容需要用Promise(异步)去加载。在加载的过程当中就会展示fallback的内容)。说明：Suspense执行过程是组件渲染完成显示时加载数据如果返回的是Promise就等Promise执行完成后又加载数据，循环往复直到返回的是数据而不是Promise为止）][11]
#### 14、[useMemo和memo函数简单使用(useMemo应用场景缓存一些数据，它的执行顺序是组件函数执行过程当中就会执行useMemo里面的内容。memo函数的应用场景是缓存渲染Dom和数据，如果memo函数接收到的参数和之前的是一样的则会使用缓存不会重新渲染)][12]
#### 15、[useRef包装引用数据和绑定Dom节点简单使用（应用场景多函数内共享变量和绑定Dom节点获取Dom节点）][13]
#### 16、[useSyncExternalStore简单使用(应用场景：通过JavaScript原生事件来获取数据)][14]
#### 17、[useTransition简单使用(应用场景:性能优化,定义延迟(异步)执行逻辑，等页面渲染显示之后再异步执行延迟逻辑并执行组件函数生成虚拟Dom，最后一次性替换上)][15]
  
  
  
  
  
  
  
[1]: /src/components/ReducerTest.jsx
[2]: /src/components/UseImmerTest.jsx
[3]: /src/components/callback-test/CallBackTest.jsx
[4]: /src/components/children-test/ChildrenTest.jsx
[5]: /src/components/context-test/ContextTest.jsx
[6]: /src/components/customHook/CustomHook.jsx
[7]: /src/components/deferred-value-test/DeferredValueTest.jsx
[8]: /src/components/effect-event-test/EffectEventTest.jsx
[9]: /src/components/effect-test/EffectTest.jsx
[10]: /src/components/imperative-handle-test/ImperativeHandleTest.jsx
[11]: /src/components/lazy-test/LazyTest.jsx
[12]: /src/components/memo-test/MemoTest.jsx
[13]: /src/components/ref-test/RefTest.jsx
[14]: /src/components/SyncExternalStoreTest/SyncExternalStoreTest.jsx
[15]: /src/components/transitio-test/TransitionTest.jsx
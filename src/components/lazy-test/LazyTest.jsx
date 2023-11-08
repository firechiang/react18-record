import React,{ useState,Suspense } from "react";
import DataData from "./DataData";
// 按需加载组件（注意：被按需加载的组件导出时必须带有default关键字（就是写成 export default）否则将无法被按需加载）
const TestLazy = React.lazy(() => import('./TestLazy'));

export function LazyTest() {
	


	const [isLoad,setIsLoad] = useState(false);
	const handlerClick = () => {
		setIsLoad(true);
	}
	return (
		<>
		    <h6>按需加载组件和Suspense组件简单使用（Suspense组件就是在远程加载数据时要显示的内容(注意：只要是被Suspense包裹的组件里面要展示的内容需要用Promise(异步)去加载。在加载的过程当中就会展示fallback的内容)。<br/>
		    说明：Suspense执行过程是组件渲染完成显示时加载数据如果返回的是Promise就等Promise执行完成后又加载数据，循环往复直到返回的是数据而不是Promise为止）</h6>
		    <button onClick = { handlerClick }>点击加载组件</button>
		    {
				// 注意：按需加载的组件使用时必须使用 Suspense 组件包起来否则无法使用
				isLoad ? <Suspense fallback = {<div>正在加载...</div>}>
			       <TestLazy/>
			   </Suspense>
			    : null
			}
			<div>
			    <Suspense fallback = {<h6>正在加载模拟数据...</h6>}>
                  <DataData/>
			    </Suspense>
			</div>

		</>
	)
}
import React,{ useDeferredValue,Suspense, useState } from "react";

const LazyComponent = React.lazy(() => {
	// 模拟耗时加载组件
	const promise = new Promise((resolver) => {
		setTimeout(() => {
			// promise执行完成回调
			resolver(import("./LazyComponent"));
		},3000);
	});
	
	return promise;
});

/**
 * 执行顺序
 * 1，点击加载组件修改setIsLoad为true
 * 2，组件函数DeferredValueTest()执行，此时 isLoad = true，is = false(因为这个值被延迟了)
 * 3，因为is的值没有变化所以页面不会重新渲染和变化
 * 4，再次异步执行组件函数DeferredValueTest()，此时 isLoad = true，is = true
 * 5，根据组件函数DeferredValueTest()的执行结果生成虚拟Dom
 * 6，直接将虚拟Dom替换上去
 */
export function DeferredValueTest() {
	const [isLoad,setIsLoad] = useState(false);
	const handlerClick = () => {
		setIsLoad(true);
	}
	const old = () => {
		return (<div>我是旧数据</div>);
	}
	
	// 延迟改变数据
	const is = useDeferredValue(isLoad);
	
	const Content = is ? LazyComponent : old;
	console.info("is="+is+",isLoad="+isLoad);
	return (
		<>
		    <h6>useDeferredValue简单使用(应用场景:性能优化,延迟改变数据的值使页面渲染显示之后再异步修改数据并执行组件函数生成虚拟Dom，最后一次性替换上)</h6>
		    <button onClick = { handlerClick }>点击加载组件</button>
		    {/*正常加载被Suspense包裹的组件，在加载过程当中会显示fallback的内容。但是这里的<Content/>被useDeferredValue延迟了(就是异步修改)，所以就不会显示fallback的内容*/}
			<Suspense fallback = { <div>数据正在加载...</div> }>
			    <Content/>
		    </Suspense>

		</>
	);
}
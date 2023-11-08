import React,{ Suspense, useState,useTransition } from "react";

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
 * 1，点击加载组件调用延迟函数startTransition，指定要延迟执行的内容是修改setIsLoad为true
 * 2，等浏览器空闲时将isLoad的值设置为true并再次异步执行组件函数TransitionTest()
 * 3，根据组件函数TransitionTest()的执行结果生成虚拟Dom
 * 4，直接将虚拟Dom替换上去
 */
export function TransitionTest() {
	const [isLoad,setIsLoad] = useState(false);
	
	// 定义延迟状态和开始延迟函数(isPending=是否正在异步执行逻辑。startTransition=开始异步执行逻辑)
	const [isPending,startTransition] = useTransition();
	
	const handlerClick = () => {
		// 定义需要延迟执行的逻辑（就是修改isLoad的值）
		startTransition(() => {
			setIsLoad(true);
		});
	}
	const old = () => {
		return (<div>我是旧数据</div>);
	}
	
	const Content = isLoad ? LazyComponent : old;
	
	return (
		<>
		    <h6>useTransition简单使用(应用场景:性能优化,定义延迟(异步)执行逻辑，等页面渲染显示之后再异步执行延迟逻辑并执行组件函数生成虚拟Dom，最后一次性替换上)</h6>
		    <button onClick = { handlerClick }>点击加载组件</button>
		    { isPending ? <span>正在执行延迟逻辑...</span> : <span></span>}
		    {/*正常加载被Suspense包裹的组件，在加载过程当中会显示fallback的内容。但是这里的<Content/>被异步修改的，所以就不会显示fallback的内容*/}
			<Suspense fallback = { <div>数据正在加载...</div> }>
			    <Content/>
		    </Suspense>

		</>
	);
}
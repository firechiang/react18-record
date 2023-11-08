import { useState,useRef } from "react";
// eslint-disable-next-line
import ForwardRefTest from "./ForwardRedTest";

export function RefTest() {
	const [time,setTime] = useState(new Date().getTime());
	// 定义数据timer使用useRef包起来
	const timer = useRef(null);
	// 定义数据domtest用于绑定Dom节点
	const domtest = useRef(null);
	
	const startClick = () => {
		// 修改userRef包装的timer数据
		timer.current = setInterval(() => {
			setTime(new Date().getTime());
		},500);
	}
	
	const stopClick = () => {
		// 获取userRef包装的timer数据
		clearInterval(timer.current);
	}
	
	const domClick = () => {
		// 打印获取到的Dom节点
		console.info(domtest.current);
	}
	return (
		<>
			<h6>useRef包装引用数据和绑定Dom节点简单使用（应用场景多函数内共享变量和绑定Dom节点获取Dom节点）</h6>
			<button onClick = { startClick }>开始记时</button>
			<button onClick = { stopClick }>停止记时</button>
			<div>{time}</div>
			<div ref = {domtest} >我是被绑定的Dom节点</div>
			{/*父组件获取子组件某个Dom的方法*/}
			{/*<ForwardRefTest ref = { domtest }></ForwardRefTest>*/}
			<button onClick = { domClick }>获取Dom节点</button>
		</>
	)
}
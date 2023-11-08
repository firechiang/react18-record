import { useState,useEffect } from "react";


export function EffectTest() {
	const[time,setTime] = useState(new Date().getTime());
	// 第二个参数写 [] 表示只在组件渲染完成以后调用一次。如果第二个参数不传那么每次组件函数执行它都会执行
	useEffect(() => {
		console.info("我只调用一次");
		
		// 注意：这个返回可以不写，不写就是没有组件销毁后的回调函数
		return () => {
			console.info("组件销毁回调函数执行");
		}
	},[])
	
	// 当time数据值改变时调用
	useEffect(() => {
		console.info(`time发生了变化，值=${time}`);
	},[time])
	
	
	console.info("组件函数被调用");
	const getTime = () => {
		setTime(new Date().getTime());
	}
	return (
		<>
			<h6>useEffect简单使用(应用场景: 组件页面渲染完成之后或者组件被销毁之后需要调用的代码块 和 当数据发生变化时需要调用的代码块可使用useEffect包起来)</h6>
			<button onClick = { getTime }>获取当前时间</button>
			<div>{time}</div>
		</>
	)
}
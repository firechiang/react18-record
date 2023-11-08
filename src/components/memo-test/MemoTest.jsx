import {useMemo, useState,memo} from "react";

const MemoFunTest = memo(({name}) => {
	
	return (
		<>
		    <h6>我是memo函数生成的东西:{name}</h6>
		</>
	);
	// 判断是否使用缓存的回调函数(oldProps旧参数，newProps新参数)（注意：这个函数可以不写，它会自动识别是否需要使用缓存）
},(oldProps,newProps) => {
	// 返回true表示使用缓存，不会重新渲染。返回false表示不使用缓存则会重新渲染
	return true;
});

export function MemoTest() {
	// eslint-disable-next-line
	const [name,setName] = useState('猫猫');
	
	// 当name发生变化时代码执行(注意：这个代码的执行是组件函数执行时执行到这里了这个代码就会执行)
	const list = useMemo(() => {
		return ["a","b","c"];
	// eslint-disable-next-line
	},name);
	
	return (
		<>
			<h6>useMemo和memo函数简单使用(useMemo应用场景缓存一些数据，它的执行顺序是组件函数执行过程当中就会执行useMemo里面的内容。memo函数的应用场景是缓存渲染Dom和数据，如果memo函数接收到的参数和之前的是一样的则会使用缓存不会重新渲染)</h6>
			<MemoFunTest name = {name}/>
			<div>{name}</div>
			<div>
			    {
					list.map((item,index) => (
						<span>{item}</span>
					))
				}
			</div>
		</>
	)
}
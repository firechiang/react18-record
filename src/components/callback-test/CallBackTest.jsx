import { useCallback, useState } from "react";

export function CallBackTest() {
	const [name,setName] = useState('');
	
	// 生成函数(第二个参数是可以绑定某个值，根据这个值的变化而重新生成函数)
	const callback = useCallback(() => {
		let count = null;
		if(count === null) {
			count = 0;
		}else{
			count = count + 1;
		}
		console.info(count);
	},[]);
	
	const handlerClick = () => {
		setName('');
		callback();
	}
	
	return (
		<>
			<h6>useCallback简单使用（应用场景：性能优化，只会在组件初始化时生成函数，而组件函数重新执行时不会重新生成函数）</h6>
			<button onClick = { handlerClick }>点击{name}</button>
		</>
	)
}
import { forwardRef, useImperativeHandle, useRef } from "react";

const UserInput = forwardRef((props,ref) => {
	const inputRef = useRef(null);
	
	// 定义ref的实现逻辑。第三个参数是根据绑定参数变化而重新调用useImperativeHandle函数初始化ref实现，写[]表示只在组件初始化时调用一次
	useImperativeHandle(ref,() => {
		// 返回ref的实现（注意：这个ref的实现是给父组件调用的）
		return {
			focus(){
				inputRef.current.focus()
			}
		}
		
	},[]);
	
	return (
		<>
			<input ref = {inputRef}/>
		</>
	)
});

export function ImperativeHandleTest() {
	const ref = useRef(null);
	const handlerClick = () => {
		console.info(ref.current);
		ref.current.focus();
	}
	return (
		<>
			<h6>useImperativeHandle简单使用(应用场景：自定义Ref的处理逻辑，比如父组件想调用子组件的某个实现逻辑)</h6>
			<UserInput ref = {ref} />
			<button onClick = { handlerClick } >点击后Input获取到光标</button>
		</>
	)
}
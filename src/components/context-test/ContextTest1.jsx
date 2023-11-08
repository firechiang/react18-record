import { ContextTest2 } from "./ContextTest2";
import { useContext } from "react";
import nameContext from "./createNameContext";

export function ContextTest1() {
	// 获取到父组件的数据
	const name = useContext(nameContext);
	return (
		<>
		    <div>Context子组件1,名字叫：{name}</div>
		    <ContextTest2/>
		</>
	)
}
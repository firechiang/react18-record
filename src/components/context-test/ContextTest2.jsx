import { useContext } from "react";
import nameContext from "./createNameContext";

export function ContextTest2() {
	// 获取到父组件的数据
	const name = useContext(nameContext);
	return (
		<>
		    <div>Context子组件2，名字叫：{name}</div>
		</>
	)
}
import { ContextTest1 } from "./ContextTest1";
import nameContext from "./createNameContext";
import { useState } from "react";

export function ContextTest() {
	const [name,setName] = useState(0);
	const handlerClick = () => {
		setName(name + 1);
	}
	return (
		<>
		    {/* 用自定义的nameContext组件将要使用该组件数据的所有子组件都包起来(注意：value属性必须写)  */}
		    <nameContext.Provider value = {name}>
			    <h6>Context跨层级传递数据简单使用(一般用于登录数据保存，所有下层组件都可以拿到登录数据)</h6>
			    <ContextTest1/>
		    </nameContext.Provider>
		    <button onClick = {handlerClick}>点击修改名字</button>
		</>
	)
}
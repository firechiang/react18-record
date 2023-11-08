import { useState } from "react"

/**
 * 自定义Hook(注意：自定义Hook必须使用use开头，还有自定义Hook里面的代码必须有原生Hook代码)
 */
function useInfo() {
	const [userInfo,setUserInfo] = useState({});
	function changeInfo() {
		setUserInfo({
			name: "猫猫",
			age: 1
		});
	}
	return [userInfo,changeInfo];
}

export function CustomHook() {
	const [userInfo,changeInfo] = useInfo();
	
	return (
		<>
			<h6>自定义Hook简单使用</h6>
			<div onClick = {changeInfo}>点击{userInfo.name}</div>
		</>
	)
}
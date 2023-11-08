// eslint-disable-next-line
import {useState,useEffect,useEffectEvent} from "react";

export function EffectEventTest() {
	const [param1,setParam1] = useState(new Date().getTime());
	const [param2,setParam2] = useState(new Date().getTime());
	
//	const testConsole = useEffectEvent((param1) => {
//		console.info(`参数1：${param1}，参数2：${param2}`);
//	});
	
	useEffect(() => {
		//testConsole(param1);
		console.info(param1);
	},[param1]);
	
	const clickHandler = () => {
		setParam1(new Date().getTime());
		setParam2(new Date().getTime()+1);
	}
	return (
		<>
			<h6>useEffectEvent简单使用(第一个应用场景和useEffect一样，第二个应用应用场景是useEffect里面使用了多个参数可以指定某个参数变化触发函数调用，其它参数可以不绑定（注意：useEffectEvent是大于18.2版本才可以使用）)</h6>
			<div>
			    <span>参数1：{param1}</span>
			    <span>参数2：{param2}</span>
			    <button onClick = { clickHandler }>获取当前时间</button>
			</div>
		</>
	)
}
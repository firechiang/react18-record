import { useTestmo } from "./Testmo";


export function Motest() {
	
	const [isLoad,run] = useTestmo();
	console.info("sdsadsadasd56163161301SAd16as1a");
	
	return (
		<>
		    <h6>简单模拟异步事件</h6>
		    <button onClick = { run }>点击</button>
		    <span>
		    {
				isLoad ? "正在加载" : "加载成功"
			}
		    </span>
		</>
	);
}
import { useImmer } from "use-immer";
import { React, useState } from "react";

/**
 * 使用use-immer插件修饰状态数据和使用useState修饰状态数据后，在修改数据方面的差异
 */
function UseImmerTest() {
	const [immerData,setImmerData] = useImmer({
		count: 0,
	});
	const [stateData,setStateData] = useState({
		count: 0
	});
	const useImmerClickHandler = () => {
		// 使用use-immer插件后可以这样修改数据并且页面也会实时更新
		setImmerData((draft) => {
			draft.count = draft.count + 1;
		});
	}
	
	const useStateClickHandler = () => {
		// 这样修改数据页面是不会实时改变的，要页面实时改变需要修改statData数据的引用才行。比如这样写: setStateData({...stateData})
		setStateData((draft) => {
			console.info("useState 修改数据");
			draft.count = draft.count + 1;
			return draft;
		});
	};
	return (
		<>
		    <h6>use immer插件简单使用</h6>
		    <div>
		        <button onClick = {useImmerClickHandler}>使用use-immer插件点击数字增加{immerData.count}</button>
		    </div>
		    <div>
		        <button onClick = {useStateClickHandler}>使用use-state点击数字不会增加{stateData.count}</button>
		    </div>   
		</>
	)
}

export default UseImmerTest;
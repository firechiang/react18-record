import {useState,useReducer} from "react";

/**
 * reducer使用流程
 * 1,定义reducer函数
 * 2,定义数据
 * 3,定义Action发送改变数据指令
 * 4,使用dispatch方法派发Action
 * 5,根据指令修改数据
 * 6,完成数据的修改
 */
export function ReducerTest() {
	const [inputValue,setInputValue] = useState('');
	
	/**
	 * 1,定义reducer函数
	 * data   原始数据
	 * acrion 动作
	 */
	const reducer = (data,action) => {
		// 5,根据指令修改数据
		if(action.type === 'add') {
			const newData = [...data,{
				id: 'sada',
				value: action.value
			}]
			data = newData;
		}
		if(action.type === 'delete') {
			const newData = [...data];
			// 清除下标为index的那一个数据
			newData.splice(action.value,1);
			data = newData;
		}
		// 6,完成数据的修改
		return data;
	}
	// 2,定义数据
	const [list,dispatch] = useReducer(reducer,[]);
	
	const inputCHangeHandler = (e) => {
		setInputValue(e.target.value);
	}
	
	const handlerButton = () => {
		// 3,定义Action发送改变数据指令
		const action = {
			type: 'add',
			value: inputValue
		}
		// 4,使用dispatch方法派发Action
		dispatch(action);
	}
	const handlerDelete = (index) => {
		// 3,定义Action发送改变数据指令
		const action = {
			type: 'delete',
			value: index
		}
		dispatch(action);
	}
	return (
		<>
		    <div>
		         <h6>数据聚合删除useReducer简单使用</h6>
		        <input onChange= { inputCHangeHandler }/>
		        <button onClick = { handlerButton }>添加数据</button>
		        <ul>
		             {
						 list.map((item,index) => (
							 <li>
								 <span>id={item.id},value={item.value}</span>
								 <button onClick = {() => handlerDelete(index)}>删除</button>
							 </li>
						 ))
					 }
		        </ul>
		    </div>
		</>
	)
}
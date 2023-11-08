import { useSyncExternalStore } from "react";

// 订阅监听事件
const subscribe = (callback) => {
	window.addEventListener("online",callback);
	window.addEventListener("offline",callback);
	
	// 组件销毁时的毁掉函数
	return () => {
		window.removeEventListener("online",callback);
		window.removeEventListener("offline",callback);
	}
}

// 加载数据的逻辑（当订阅的监听执行时就会执行该函数的逻辑）
const load = () => {
	return window.navigator.onLine;
}

export function SyncExternalStoreTest() {
	

	
	
	const isOnline = useSyncExternalStore(subscribe,load);

	return (
		<>
			<h6>useSyncExternalStore简单使用(应用场景：通过JavaScript原生事件来获取数据)</h6>
			<div>网站是否已经联网:{isOnline}</div>
		</>
	)
}
import React from "react";

let promiseStatus = "pending";
const promise = new Promise((resolver) => {
	setTimeout(() => {
		// promise执行完成回调(注意：回调可以传参数就是结果)
		resolver();
		promiseStatus = "com";
	},10000);
},() => {});

function getData() {
	if(promiseStatus === "pending") {
		throw promise;
	}else{
		return "我是模拟加载的数据";
	}
}

export default function DataData() {
	const data = getData();
	return (
		<>
		    <div>{data}</div>
		</>
	);
}
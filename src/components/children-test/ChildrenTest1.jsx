
/**
 * children就是接收组件夹带的内容
 */
function ChildrenTest1({children}) {
	const content = children;
	return (
		<>
			<div>获取到了夹带内容: {content}</div>
		</>
	)
}

export default ChildrenTest1;
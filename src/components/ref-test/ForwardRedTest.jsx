import { forwardRef } from "react";

const ForwardRefTest = forwardRef((props,ref) => {
	return (
		<>
		    <div ref = { ref }>我是子组件被绑定的Dom节点，方便父组件获取</div>
		</>
	)
}) 

export default ForwardRefTest;
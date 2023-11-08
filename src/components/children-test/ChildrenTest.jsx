import ChildrenTest1 from './ChildrenTest1';

export function ChildrenTest() {
	return (
		<>
			<h6>组件标签内夹带的内容获取简单使用</h6>
			{/* 组件夹带内容是：天天（注意：组件代码内如果要接收该值，可使用函数的参数children属性接收） */}
		    <ChildrenTest1>天天</ChildrenTest1>
		</>
	)
}
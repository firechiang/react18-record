// 注意：如果该组件要被按需加载导出时必须带default（就是写 export default）否则将无法被按需加载
export default function TestLazy() {
	return (
		<>
		    <span>我是按需加载的组件</span>
		</>
	)
}
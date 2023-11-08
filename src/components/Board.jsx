import { React,useState } from "react";
import Square from "./Square";

/**
 * 计算是否胜利
 */
function calculateWinner(squares) {
	const winnerArray = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];
	for(let i=0;i<winnerArray.length;i++) {
		const [a,b,c] = winnerArray[i];
		if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return `${squares[a]} is winner`;
		}
	}
	return null;
}

/**
 * 获取下一个符号
 */
function getNextLetter(squares) {
	// 计算X和O的个数（filter函数是过滤并返回一个新都数组）
	const filterdSquares = squares.filter(item => (item === "X" || item === "O"));
	const xNumber = filterdSquares.length;
	let nextLetter = xNumber % 2 === 0 ? "X" : "O";
	return nextLetter;
}

function Board() {
	console.info("Board");
	// new Array(9).fill(null) 创建一个长度为9的数组元素都为空
	// setSquares函数被执行时Board组件将被重新渲染执行
	const [squares,setSquares] = useState(new Array(9).fill(null));
	const nextLetter = getNextLetter(squares);
	// 创建一个新数组（...squares表示展开数组squares）
	const newArray = [...squares,"asdasdsa"];
	console.info(newArray);
	
	
	let status =null;
	if(nextLetter) {
		status = `Next player: ${nextLetter}`;
	}
   const winner = calculateWinner(squares);
	if(winner) {
		status = winner;
	}
	const clickHandler = (index) => {
		console.info("clickHandler");
		const currentSquare = squares[index];
		if(currentSquare === null && winner === null) {
			// 创建一份square数组副本
			const newSquares = squares.slice();
			newSquares[index] = nextLetter;
			setSquares(newSquares);	
		}
	}
	return (<>
	    <div>{status}</div>
	    <div className="board-row">
	         {/* 注意：组建上是没有事件的，这个onClick是组建的属性 */}
	        <Square value = {squares[0]} index = {0} onClick = {clickHandler}/>
	        <Square value = {squares[1]} index = {1} onClick = {clickHandler}/>
	        <Square value = {squares[2]} index = {2} onClick = {clickHandler}/>
	    </div>
	    <div className="board-row">
	        <Square value = {squares[3]} index = {3} onClick = {clickHandler}/>
	        <Square value = {squares[4]} index = {4} onClick = {clickHandler}/>
	        <Square value = {squares[5]} index = {5} onClick = {clickHandler}/>
	    </div>
	    <div className="board-row">
	        <Square value = {squares[6]} index = {6} onClick = {clickHandler}/>
	        <Square value = {squares[7]} index = {7} onClick = {clickHandler}/>
	        <Square value = {squares[8]} index = {8} onClick = {clickHandler}/>
	    </div>
	</>)
}

export default Board;
import { useState } from "react";

export function useTestmo() {
	
	const [isLoad,setIsLoad] = useState(false);
	const run = () => {
		setIsLoad(true);
		setTimeout(async () => {
			setIsLoad(false);
		},3000);
	}
	return [isLoad,run];
}